using HarmonicBalance
using Symbolics: Symbolics
using Test

# Which equations of motion can be averaged, and what the averaging does to a power of a
# variable. See https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/issues/451

@testset "non-polynomial nonlinearity" begin
    # these used to be silently dropped, returning the harmonic equations of the linear
    # oscillator instead of erroring
    @variables α, ω0, F, γ, ω, t, x(t)

    for nonlinearity in [α * sin(x), α * exp(x), α / x, α * sqrt(x), α * x^(-2)]
        diff_eq = DifferentialEquation(
            d(x, t, 2) + ω0^2 * x + γ * d(x, t) + nonlinearity ~ F * cos(ω * t), x
        )
        add_harmonic!(diff_eq, x, ω)
        # both entry points share the same validator
        @test_throws ArgumentError get_harmonic_equations(diff_eq)
        @test_throws ArgumentError get_krylov_equations(diff_eq; order=1)
    end

    # a polynomial nonlinearity of high order is fine, even though a single-harmonic
    # ansatz projects an even power onto nothing
    diff_eq = DifferentialEquation(
        d(x, t, 2) + ω0^2 * x + γ * d(x, t) + α * x^10 ~ F * cos(ω * t), x
    )
    add_harmonic!(diff_eq, x, ω)
    @test length(get_harmonic_equations(diff_eq; explicit_jacobian=false).equations) == 2
end

@testset "polynomial nonlinearity x^n" begin
    # `x^n` is valid input for every n; whether the term shows up in the harmonic
    # equations is decided by the harmonics of the ansatz, not by the order of the power.
    @variables α, ω, t, x(t)

    # the α-part of the harmonic equations of `d(x,t,2) + α*x^n ~ 0`: drop ω and the
    # slow-flow derivatives, then set α = 1 and the harmonic variables to 2, 3, 4, ...
    function nonlinear_part(n, harmonics)
        diff_eq = DifferentialEquation(d(x, t, 2) + α * x^n ~ 0, x)
        for harmonic in harmonics
            add_harmonic!(diff_eq, x, harmonic)
        end
        harmonic_eq = get_harmonic_equations(diff_eq; explicit_jacobian=false)
        vars = get_variables(harmonic_eq)
        T = get_independent_variables(harmonic_eq)[1]
        rules = Dict{Any,Any}(ω => 0, α => 1)
        for (i, var) in enumerate(vars)
            rules[var] = i + 1
            rules[d(var, T)] = 0
        end
        return [
            Symbolics.value(Symbolics.substitute(eq.lhs - eq.rhs, rules)) for
            eq in harmonic_eq.equations
        ]
    end

    # An odd power feeds back into ω. The cos(ωt) component of (u*cos(ωt) + v*sin(ωt))^n
    # is binomial(n, (n-1)/2) / 2^(n-1) * u * (u^2 + v^2)^((n-1)/2), and the sin(ωt) one
    # is the same with u and v swapped. Here (u, v) = (2, 3), so u^2 + v^2 = 13.
    for n in 3:2:9
        cₙ = binomial(n, (n - 1) ÷ 2)//2^(n - 1)
        power = 13^((n - 1) ÷ 2)
        @test nonlinear_part(n, [ω]) == [cₙ * 2 * power, cₙ * 3 * power]
    end

    # An even power only generates 0, 2ω, 4ω, ..., which a single-harmonic ansatz
    # projects onto nothing: the harmonic equations are those of the linear oscillator.
    for n in 2:2:10
        @test all(iszero, nonlinear_part(n, [ω]))
    end

    # It does contribute once the harmonics it generates are part of the ansatz. Adding
    # 2ω blows up quickly with n (n = 10 takes minutes), the zero harmonic stays cheap.
    for n in [2, 4]
        @test !all(iszero, nonlinear_part(n, [ω, 2ω]))
    end
    for n in [2, 4, 10]
        @test !all(iszero, nonlinear_part(n, [0, ω]))
    end
end

@testset "phase-shifted drive and parametric pump" begin
    @variables ω t T θ ψ F λ x(t)
    diff_eq = DifferentialEquation(
        d(x, t, 2) + (1 - λ * cos(2 * ω * t + ψ)) * x ~ F * cos(ω * t + θ), x
    )
    add_harmonic!(diff_eq, x, ω)
    harmonic_eq = get_harmonic_equations(diff_eq; slow_time=T)
    u, v = get_variables(harmonic_eq)
    reference = [
        (1 - ω^2 - λ * cos(ψ) / 2) * u + λ * sin(ψ) * v / 2 + 2 * ω * d(v, T) - F * cos(θ),
        (1 - ω^2 + λ * cos(ψ) / 2) * v + λ * sin(ψ) * u / 2 - 2 * ω * d(u, T) + F * sin(θ),
    ]
    for (eq, expected) in zip(harmonic_eq.equations, reference)
        @test isequal(
            Symbolics.simplify(Symbolics.expand(eq.lhs - eq.rhs - expected)),
            Symbolics.Num(0),
        )
    end
end

@testset "closed-form slow flow" begin
    # `get_harmonic_equations` writes the derivatives of the ansatz down in closed form;
    # the result must be the very expressions the generic route produces
    @variables t, T, x(t), y(t), ω0, ω, F, α, η, J, γ
    D = Symbolics.Differential(t)
    function system(eqs, vars, harmonics)
        diff_eq = DifferentialEquation(eqs, vars)
        for (var, ωs) in harmonics, h in ωs
            add_harmonic!(diff_eq, var, h)
        end
        return diff_eq
    end
    cases = [
        # zero harmonic and an even power
        (system([d(x, t, 2) + ω0^2 * x + α * x^2 ~ F * cos(ω * t)], [x], [x => [0, ω]]), 2),
        # only a zero harmonic: the slow flow removes the inertia `η`, a parameter still
        (system([η * d(x, t, 2) + ω0^2 * x + α * x^3 ~ F], [x], [x => [0]]), 2),
        # harmonics that are sums of parameters
        (
            system(
                [d(x, t, 2) + γ * d(x, t) + α * x^3 ~ F * cos((ω + J) * t)],
                [x],
                [x => [ω + J, ω - J]],
            ),
            2,
        ),
        # a derivative above the slow-flow degree survives
        (system([d(x, t, 3) + d(x, t, 2) + ω0^2 * x ~ F * cos(ω * t)], [x], [x => [ω]]), 2),
        (system([d(x, t, 2) + ω0^2 * x + α * x^3 ~ 0], [x], [x => [ω, 3ω]]), 3),
        # products of derivatives, and a derivative of a product
        (
            system(
                [D(D(x)) + η * d(x, t)^2 * x + η * D(x^2) + ω0^2 * x ~ F * cos(ω * t)],
                [x],
                [x => [ω]],
            ),
            2,
        ),
        (
            system(
                [
                    d(x, t, 2) + ω0^2 * x + α * x^3 ~ F * cos(ω * t) + J * y,
                    d(y, t, 2) + ω0^2 * y + α * y^3 ~ J * x,
                ],
                [x, y],
                [x => [ω], y => [3ω]],
            ),
            2,
        ),
    ]
    for (diff_eq, degree) in cases
        generic = HarmonicBalance.slow_flow(
            HarmonicBalance.harmonic_ansatz(diff_eq, t);
            fast_time=t,
            slow_time=T,
            degree=degree,
        )
        closed = HarmonicBalance.slow_flow_ansatz(
            diff_eq; fast_time=t, slow_time=T, degree=degree
        )
        @test isequal(closed.equations, generic.equations)
        @test isequal(
            getfield.(closed.variables, :symbol), getfield.(generic.variables, :symbol)
        )
        @test isequal(closed.parameters, generic.parameters)
    end
end
