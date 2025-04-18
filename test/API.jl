using HarmonicBalance
using HarmonicBalance: OrderedDict
using Test

@testset "Equation{Vector}" begin
    # define equation of motion
    @variables ω1, ω2, t, ω, F, γ, α1, α2, k, x(t), y(t)
    rhs = [
        d(x, t, 2) + ω1^2 * x + γ * d(x, t) + α1 * x^3 - k * y,
        d(d(y, t), t) + ω2^2 * y + γ * d(y, t) + α2 * y^3 - k * x,
    ]
    eqs = rhs .~ [F * cos(ω * t), 0]

    @test eqs != (rhs ~ [F * cos(ω * t), 0])
    @test eqs == (rhs .~ [F * cos(ω * t), 0])
    @test_throws ArgumentError DifferentialEquation(rhs ~ [F * cos(ω * t), 0], [x, y])
end

@testset "forgot variable" begin
    @variables Ω γ λ F x θ η α ω0 ω t T ψ
    @variables x(t) y(t)

    natural_equation = [
        d(d(x, t), t) + γ * d(x, t) + Ω^2 * x + α * x^3 ~ F * cos(ω * t),
        d(d(y, t), t) + γ * d(y, t) + Ω^2 * y + α * y^3 ~ 0,
    ]
    dEOM = DifferentialEquation(natural_equation, [x, y])

    @test_throws ErrorException get_harmonic_equations(dEOM)

    add_harmonic!(dEOM, x, ω)
    # add_harmonic!(dEOM, y, ω)
    @test_throws ErrorException get_harmonic_equations(dEOM)
end

@testset "harmonic equation jacobian NaN" begin
    using QuestBase: hasnan
    @variables ω1, t, ω, F, γ, λ, x(t), y(t)
    eqs = [d(x, t, 2) + (ω1^2 - λ * cos(2 * ω * t)) * x + γ * d(x, t)]
    diff_eq = DifferentialEquation(eqs, [x])

    add_harmonic!(diff_eq, x, ω)
    harmonic_eq = get_harmonic_equations(diff_eq; jacobian=false)
    @test hasnan(harmonic_eq.jacobian)
end
