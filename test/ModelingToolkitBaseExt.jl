using HarmonicBalance
using ModelingToolkitBase
using OrdinaryDiffEqTsit5: Tsit5, solve, isinplace, ReturnCode
using Test

@testset "Utilities" begin
    ModelingToolkitBaseExt = Base.get_extension(HarmonicBalance, :ModelingToolkitBaseExt)
    @variables α
    check = ModelingToolkitBaseExt.declare_parameter(α)
    @test ModelingToolkitBase.PARAMETER ∈ values(check.val.metadata)

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

        # MTK 11 + Symbolics 7: `System(::DifferentialEquation)` produces a System whose
        # mtkcompile pass leaves the lowered derivative variable as a free parameter
        # (`xˍt(t)` / `xˍtt(t)`), so ODEProblem from a raw DifferentialEquation cannot
        # be built without supplying values for those. Reconstructing the lowering for
        # MTK 11 is a follow-up; for now we check it errors instead of succeeding.
        @test_broken (ODEProblem(diff_eq, [1.0, 0.0], (0, 100), param); true)
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
