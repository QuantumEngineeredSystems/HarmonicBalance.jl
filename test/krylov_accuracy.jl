using HarmonicBalance
using HarmonicBalance: get_krylov_equations
using LinearAlgebra: eigvals, norm
using Symbolics: Symbolics, Num, substitute
using Test

# The averaged flow of order N approximates the dynamics of the full ODE: the Floquet
# multipliers of the true periodic orbit differ from exp(λT) at the averaged fixed point
# by O(εᴺ⁺¹), and the fixed point from the Fourier amplitudes of the orbit by O(εᴺ). Halving
# ε must divide these errors by 2ᴺ⁺¹ and 2ᴺ. Two oscillators at ω and 3ω, coupled through
# x²y, y²x and x³, also test the resonant terms between commensurate harmonics, and the
# signs of the amplitudes test the convention u cos(ωt) + v sin(ωt).

function rk4(f, z, t0, duration, steps)
    h = duration / steps
    t = t0
    for _ in 1:steps
        k1 = f(z, t)
        k2 = f(z .+ h / 2 .* k1, t + h / 2)
        k3 = f(z .+ h / 2 .* k2, t + h / 2)
        k4 = f(z .+ h .* k3, t + h)
        z = z .+ h / 6 .* (k1 .+ 2k2 .+ 2k3 .+ k4)
        t += h
    end
    return z
end

function jacobian(f, z; δ=1e-7)
    columns = map(eachindex(z)) do j
        e = zeros(length(z))
        e[j] = δ
        (f(z .+ e) .- f(z .- e)) ./ (2δ)
    end
    return reduce(hcat, columns)
end

function newton(f, z)
    for _ in 1:50
        r = f(z)
        norm(r) < 1e-13 && break
        z = z .- jacobian(f, z) \ r
    end
    return z
end

@variables t x(t) y(t) ω ω₁ ω₂ F α₁ α₂ J₁ J₂ γ
equations = [
    d(x, t, 2) + γ * d(x, t) + ω₁^2 * x + α₁ * x^3 + 3J₁ * x^2 * y + J₂ * y^2 * x -
    F * cos(ω * t),
    d(y, t, 2) + γ * d(y, t) + ω₂^2 * y + α₂ * y^3 + J₁ * x^3 + J₂ * x^2 * y,
]
diff_eom = DifferentialEquation(equations, [x, y])
add_harmonic!(diff_eom, x, ω)
add_harmonic!(diff_eom, y, 3ω)
averaged = [get_krylov_equations(diff_eom; order) for order in 1:2]

"Floquet and amplitude errors of the averaged flows at strength ε and damping γ = g ε."
function errors(ε, g)
    parameters = Dict(
        ω => 1.0,
        ω₁ => sqrt(1 + 0.4ε),
        ω₂ => sqrt(9 + ε),
        F => 0.3ε,
        α₁ => 0.8ε,
        α₂ => 0.5ε,
        J₁ => 0.6ε,
        J₂ => 0.7ε,
        γ => g * ε,
    )
    γv, ω₁v, ω₂v, Fv, α₁v, α₂v, J₁v, J₂v = (parameters[s] for s in (γ, ω₁, ω₂, F, α₁, α₂, J₁, J₂))
    field(z, τ) = [
        z[2],
        -γv * z[2] - ω₁v^2 * z[1] - α₁v * z[1]^3 - 3J₁v * z[1]^2 * z[3] - J₂v * z[3]^2 * z[1] +
        Fv * cos(τ),
        z[4],
        -γv * z[4] - ω₂v^2 * z[3] - α₂v * z[3]^3 - J₁v * z[1]^3 - J₂v * z[1]^2 * z[3],
    ]
    period, steps = 2π, 2000
    flows = map(averaged) do eom
        lhs = [substitute(Num(eq.lhs), parameters) for eq in eom.equations]
        Symbolics.build_function(lhs, get_variables(eom); expression=Val(false))[1]
    end

    # the orbit starts where the first-order flow rests: x(0) = u₁, ẋ(0) = ω v₁, ...
    rest = newton(flows[1], [0.3, 0.1, 0.01, 0.0])
    map_once(z) = rk4(field, z, 0.0, period, steps)
    orbit = newton(z -> map_once(z) .- z, [rest[1], rest[2], rest[3], 3rest[4]])
    multipliers = eigvals(jacobian(map_once, orbit))

    amplitudes = zeros(4)
    z, h = orbit, period / steps
    for k in 0:(steps - 1)
        τ = k * h
        amplitudes .+= (2 / steps) .* [z[1] * cos(τ), z[1] * sin(τ), z[3] * cos(3τ), z[3] * sin(3τ)]
        z = rk4(field, z, τ, h, 1)
    end

    return map(flows) do flow
        fixed_point = newton(flow, amplitudes)
        approximate = exp.(eigvals(jacobian(flow, fixed_point)) .* period)
        floquet = maximum(minimum(abs.(μ .- approximate)) for μ in multipliers)
        (floquet, maximum(abs.(fixed_point .- amplitudes)), amplitudes)
    end
end

@testset "accuracy against the full ODE, γ = $g ε" for g in (0.0, 0.5)
    coarse, fine = errors(0.1, g), errors(0.05, g)
    @testset "order $order" for order in 1:2
        floquet_ratio = coarse[order][1] / fine[order][1]
        amplitude_ratio = coarse[order][2] / fine[order][2]
        @test 0.8 * 2^(order + 1) < floquet_ratio < 1.25 * 2^(order + 1)
        @test 0.8 * 2^order < amplitude_ratio < 1.25 * 2^order
    end
    amplitudes = fine[1][3]
    if iszero(g)
        # time reversal symmetry makes the undamped orbit even in t
        @test abs(amplitudes[2]) < 1e-10 && abs(amplitudes[4]) < 1e-10
    else
        @test amplitudes[2] > 0.25
    end
end
