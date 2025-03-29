@testset "get_steady_states API" begin
    using HarmonicSteadyState: OrderedDict

    @variables ξ, ω1, t, ω, F, γ, λ, x(t), y(t)
    eqs = [d(x, t, 2) + (ω1^2 - λ * cos(2 * ω * t)) * x + γ * d(x, t)]

    diff_eq = DifferentialEquation(eqs, [x])

    add_harmonic!(diff_eq, x, ω) # drive frequency, close to ω1

    harmonic_eq = get_harmonic_equations(diff_eq)

    varied = ω => range(0.7, 1.3, 100)
    @test_throws MethodError get_steady_states(harmonic_eq, varied)
    @test_throws ArgumentError get_steady_states(harmonic_eq, Dict(varied))

    fixed_double = Dict(ω1 => 1.0, γ => 0.005, λ => 0.1, ω => 1.0)
    @test_throws ArgumentError get_steady_states(harmonic_eq, Dict(varied), fixed_double)

    fixed_extra = Dict(ω1 => 1.0, γ => 0.005, λ => 0.1, ξ => 1.0)
    @test_throws ArgumentError get_steady_states(harmonic_eq, Dict(varied), fixed_extra)

    fixed = Dict(ω1 => 1.0, γ => 0.005, λ => 0.1)
    prob = HarmonicSteadyState.Problem(harmonic_eq, OrderedDict(varied), OrderedDict(fixed))
    @test_throws MethodError get_steady_states(prob, Dict())
    @test_throws MethodError get_steady_states(prob, varied, fixed)
    r = get_steady_states(prob, HarmonicSteadyState.WarmUp())
    # ^ throws a warning that no solutions found

end
