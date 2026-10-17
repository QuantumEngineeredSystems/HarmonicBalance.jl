using HarmonicBalance
using ModelingToolkitBase
using OrdinaryDiffEqTsit5: Tsit5, solve, isinplace, ReturnCode
using Test
using Symbolics: Num

@testset "Utilities" begin
    ModelingToolkitBaseExt = Base.get_extension(HarmonicBalance, :ModelingToolkitBaseExt)
    @variables τ q(τ) α
    system = System(DifferentialEquation(d(q, τ) ~ α*q, q))
    @test string.(parameters(system)) == ["α"]

    @testset "varmap_to_dict" begin
        @variables a b
        varmap_to_dict = ModelingToolkitBaseExt.varmap_to_dict
        expected = Dict(a => 1.0, b => 2.0)
        @test varmap_to_dict(expected) == expected
        @test varmap_to_dict((a => 1.0, b => 2.0)) == expected
        @test varmap_to_dict([a => 1.0, b => 2.0]) == expected
        @test varmap_to_dict((; a=1.0, b=2.0)) == Dict(:a => 1.0, :b => 2.0)
        @test_throws ArgumentError varmap_to_dict(1.0)
        @test_throws ArgumentError varmap_to_dict([1.0, 2.0])
    end
end

@testset "DifferentialEquation" begin
    @testset "System" begin
        @variables α ω ω0 F γ t x(t)
        diff_eq = DifferentialEquation(
            d(x, t, 2) + ω0^2 * x + α * x^3 + γ * d(x, t) ~ F * cos(ω * t), x
        )

        fixed = (α => 1.0, ω0 => 1.1, F => 0.01, γ => 0.01)
        param = HarmonicBalance.OrderedDict(merge(Dict(fixed), Dict(ω => 1.1)))
        sys = System(diff_eq)

        for p in string.([α, ω, ω0, F, γ])
            @test p ∈ string.(parameters(sys))
        end

        # can run a second time without error; diff_eq unmutated
        System(diff_eq)
    end
    @testset "ODEProblem" begin
        @variables α ω ω0 F γ t x(t)
        diff_eq = DifferentialEquation(
            d(x, t, 2) + ω0^2 * x + α * x^3 + γ * d(x, t) ~ F * cos(ω * t), x
        )

        add_harmonic!(diff_eq, x, ω) #
        harmonic_eq = get_harmonic_equations(diff_eq)

        sys = System(harmonic_eq)
        fixed = (α => 1.0, ω0 => 1.1, F => 0.01, γ => 0.01)
        param = HarmonicBalance.OrderedDict(merge(Dict(fixed), Dict(ω => 1.1)))

        initial = [
            isequal(variable, x) ? 1.0 : 0.0 for variable in unknowns(System(diff_eq))
        ]
        problem = ODEProblem(diff_eq, initial, (0.0, 1.0), param)
        solution = solve(problem, Tsit5())
        @test solution.retcode == ReturnCode.Success
        @test all(isfinite, solution.u[end])
        @test Set(string.(parameters(System(diff_eq)))) == Set(string.(keys(param)))
    end
end

@testset "HarmonicEquation" begin
    @variables α ω ω0 F γ t x(t)
    diff_eq = DifferentialEquation(
        d(x, t, 2) + ω0^2 * x + α * x^3 + γ * d(x, t) ~ F * cos(ω * t), x
    )

    add_harmonic!(diff_eq, x, ω) #
    harmonic_eq = get_harmonic_equations(diff_eq)

    fixed = (α => 1.0, ω0 => 1.1, F => 0.01, γ => 0.01)
    param = HarmonicBalance.OrderedDict(merge(Dict(fixed), Dict(ω => 1.1)))
    @testset "System" begin
        sys = System(harmonic_eq)

        for p in string.([α, ω, ω0, F, γ])
            @test p ∈ string.(parameters(sys))
        end
    end

    @testset "ODEProblem" begin
        prob = ODEProblem(harmonic_eq, [1.0, 0.0], (0, 100), param)
        @test solve(prob, Tsit5()).retcode == ReturnCode.Success

        @testset "parameter map types" begin
            # https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/issues/452
            for p in (Tuple(param), collect(param), Dict(param))
                prob = ODEProblem(harmonic_eq, [1.0, 0.0], (0, 100), p)
                @test solve(prob, Tsit5()).retcode == ReturnCode.Success
            end
        end

        @testset "in-placeness" begin
            oop = ODEProblem(harmonic_eq, [1.0, 0.0], (0, 100), param; in_place=false)
            @test !isinplace(oop)
            @test isinplace(ODEProblem{true}(harmonic_eq, [1.0, 0.0], (0, 100), param))
            @test !isinplace(ODEProblem{false}(harmonic_eq, [1.0, 0.0], (0, 100), param))
            @test solve(oop, Tsit5()).retcode == ReturnCode.Success
        end
    end

    @testset "SteadyStateProblem" begin
        for p in (Tuple(param), collect(param), Dict(param))
            @test SteadyStateProblem(harmonic_eq, [1.0, 0.0], p).u0 == [1.0, 0.0]
            @test NonlinearProblem(harmonic_eq, [1.0, 0.0], p).u0 == [1.0, 0.0]
        end
        @test !isinplace(SteadyStateProblem{false}(harmonic_eq, [1.0, 0.0], param))
        @test !isinplace(NonlinearProblem{false}(harmonic_eq, [1.0, 0.0], param))
    end
end

@testset "raw higher-order equations preserve their dynamics" begin
    using Symbolics: Symbolics
    @variables τ x(τ) y(τ) rate
    cases = (
        (DifferentialEquation(d(x, τ) ~ -rate*x, x), Dict(x=>1.0), Dict(rate=>1.0), exp),
        (
            DifferentialEquation(d(x, τ, 2) ~ -x, x),
            Dict(x=>1.0, Symbolics.diff2term(d(x, τ))=>0.0),
            Dict{Num,Float64}(),
            cos,
        ),
        (
            DifferentialEquation(d(x, τ, 3) ~ -d(x, τ), x),
            Dict(
                x=>0.0,
                Symbolics.diff2term(d(x, τ))=>1.0,
                Symbolics.diff2term(d(x, τ, 2))=>0.0,
            ),
            Dict{Num,Float64}(),
            sin,
        ),
    )
    for (equation, initial, fixed, reference) in cases
        original = deepcopy(equation.equations)
        system = System(equation)
        u0 = [initial[Num(variable)] for variable in unknowns(system)]
        problem = ODEProblem(equation, u0, (0.0, 1.0), fixed)
        solution = solve(problem, Tsit5(); abstol=1e-10, reltol=1e-10, saveat=0.1)
        expected = reference === exp ? exp.(-solution.t) : reference.(solution.t)
        @test solution[x] ≈ expected atol=1e-8
        @test isequal(equation.equations, original)
    end

    # A first-order state coupled to a second-order state tests cross-state
    # derivative substitution and a mass matrix with different derivative orders.
    equation = DifferentialEquation([d(x, τ, 2) ~ -x+d(y, τ), d(y, τ) ~ -y], [x, y])
    initial = Dict(x=>0.0, Symbolics.diff2term(d(x, τ))=>0.0, y=>1.0)
    system = System(equation)
    u0 = [initial[Num(variable)] for variable in unknowns(system)]
    problem = ODEProblem(equation, u0, (0.0, 1.0), Dict{Num,Float64}())
    solution = solve(problem, Tsit5(); abstol=1e-10, reltol=1e-10, saveat=0.1)
    @test solution[y] ≈ exp.(-solution.t) atol=1e-8
    @test solution[x] ≈ (cos.(solution.t)-sin.(solution.t)-exp.(-solution.t))/2 atol=1e-8
end
