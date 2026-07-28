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
    @test length(get_harmonic_equations(diff_eq; jacobian=false).equations) == 2
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
        harmonic_eq = get_harmonic_equations(diff_eq; jacobian=false)
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
