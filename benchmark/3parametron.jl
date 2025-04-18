using HarmonicBalance
using BenchmarkTools

using Random
const SEED = 0xd8e5d8df
Random.seed!(SEED)

@variables Ω γ λ F x θ η α ω0 ω t T ψ
@variables x(t)

natural_equation =
    d(d(x, t), t) +
    γ * d(x, t) +
    Ω^2 * (1 - λ * cos(2 * ω * t + ψ)) * x +
    α * x^3 +
    η * d(x, t) * x^2
forces = F * cos(ω * t + θ)
dEOM = DifferentialEquation(natural_equation + forces, x)
add_harmonic!(dEOM, x, ω)

@btime harmonic_eq = get_harmonic_equations(dEOM; slow_time=T, fast_time=t);

fixed = (Ω => 1.0, γ => 1e-2, λ => 5e-2, F => 0, α => 1.0, η => 0.3, θ => 0, ψ => 0)
varied = ω => range(0.9, 1.1, 100)

prob = HarmonicSteadyState.HomotopyContinuationProblem(harmonic_eq)
@btime res = get_steady_states(prob, WarmUp(), varied, fixed; show_progress=false) # 380.126 ms (925069 allocations: 50.84 MiB)
@btime res = get_steady_states(
    prob, WarmUp(; compile=true), varied, fixed; show_progress=false
)
@btime res = get_steady_states(
    prob, Polyhedral(; only_non_zero=true), varied, fixed; show_progress=false
)
@btime res = get_steady_states(
    prob, Polyhedral(; only_non_zero=false), varied, fixed; show_progress=false
) # 382.672 ms (930906 allocations: 51.16 MiB)
@btime res = get_steady_states(
    prob, TotalDegree(; compile=true), varied, fixed; show_progress=false
) # 378.314 ms (904817 allocations: 49.63 MiB)
@btime res = get_steady_states(prob, TotalDegree(), varied, fixed; show_progress=false)# 379.858 ms (925130 allocations: 50.86 MiB)
plot(res; y="u1")
