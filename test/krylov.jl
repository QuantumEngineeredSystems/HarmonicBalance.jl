using HarmonicBalance
using HarmonicBalance: get_krylov_equations
using QuestBase: QuestBase
using Symbolics: Symbolics, substitute
using Test

# Regression for the Symbolics 7 slow-flow bug. `trig_reduce` linearises the
# numerator of the averaged fraction but the exponential round-trip never reached
# the denominator, so the Pythagorean identity cos(ωt)² + sin(ωt)² survived there.
# `get_independent` then treated the whole fraction as time-dependent and returned
# 0, collapsing every slow-flow equation to `0 ~ d/dT`. `get_krylov_equations` was
# untested, so HB Tests stayed green. The fix lives in QuestBase's `trig_reduce`
# (denominator reduction); these integration tests guard the HB-facing behaviour.
function assert_nondegenerate(eom)
    @test length(eom.equations) == 2
    vars = Set(Symbolics.unwrap.(get_variables(eom)))
    for eq in eom.equations
        field = Symbolics.expand(Symbolics.unwrap(eq.lhs))
        # the slow-flow field must not have averaged away to 0 …
        # (`iszero` on a Num returns a symbolic `expr == 0`, so compare structurally)
        @test !isequal(field, 0)
        # … and must genuinely depend on the harmonic variables u1(T), v1(T)
        @test !isempty(intersect(Set(Symbolics.get_variables(field)), vars))
    end
end

@testset "damped driven oscillator" begin
    @variables t x(t) ω0 ω F γ
    diff_eom = DifferentialEquation(d(x, t, 2) + γ * d(x, t) + ω0^2 * x ~ F * cos(ω * t), x)
    add_harmonic!(diff_eom, x, ω)

    @testset "order $order" for order in (1, 2)
        assert_nondegenerate(get_krylov_equations(diff_eom; order=order))
    end
end

@testset "driven parametron with nonlinear damping (benchmark system)" begin
    # The benchmark-suite system: the η·ẋ·x² term makes the order-2 expressions
    # large enough that, without collapsing cos²+sin² in the equation denominators
    # first, averaging the Gₜ = Fₜ′·D₁ products runs for hours instead of seconds
    # (this is what stalled the Benchmark Tracking CI job).
    @variables ω₀ γ λ F η α ω t x(t)
    natural_equation =
        d(d(x, t), t) +
        γ * d(x, t) +
        (ω₀^2 - λ * cos(2 * ω * t)) * x +
        α * x^3 +
        η * d(x, t) * x^2
    diff_eom = DifferentialEquation(natural_equation + F * cos(ω * t), x)
    add_harmonic!(diff_eom, x, ω)
    assert_nondegenerate(get_krylov_equations(diff_eom; order=2))
end

@testset "commensurate frequencies (issue #251)" begin
    # `van_der_Pol` used to pick a single frequency off the front of the harmonics
    # dict and build the ansatz with it for *every* natural variable, so a system
    # with x at ω and y at 3ω got y = u2*cos(ωt) + v2*sin(ωt) and the whole 3ω
    # sector came out wrong. Each variable must rotate at its own harmonic.
    @variables t x(t) y(t) ω0 ω F α J
    eq1 = d(d(x, t), t) + ω0^2 * x + α * x^3 ~ F * cos(ω * t) + J * y
    eq2 = d(d(y, t), t) + ω0^2 * y + α * y^3 ~ F * cos(ω * t) + J * x
    diff_eom = DifferentialEquation([eq1, eq2], [x, y])
    add_harmonic!(diff_eom, x, ω)
    add_harmonic!(diff_eom, y, 3 * ω)

    krylov_eq = get_krylov_equations(diff_eom; order=1)
    rearranged = HarmonicBalance.rearrange_standard(get_harmonic_equations(diff_eom))

    # the ansatz itself must carry the two distinct harmonics
    @test Set(Symbolics.unwrap.(getfield.(krylov_eq.variables, :ω))) ==
        Set(Symbolics.unwrap.([ω, ω, 3 * ω, 3 * ω]))

    # KB and harmonic balance must agree up to the opposite sign convention
    lhss = [
        QuestBase.expand_fraction.(getfield.(eom.equations, :lhs)) for
        eom in (krylov_eq, rearranged)
    ]
    symbols = unique(
        reduce(vcat, [collect(Symbolics.get_variables(e)) for e in reduce(vcat, lhss)])
    )
    for _ in 1:3
        # keep the sample away from 0 so no denominator blows up
        subs = Dict(symbols .=> rand(length(symbols)) .+ 0.5)
        for (k, h) in zip(lhss...)
            residual = Symbolics.value(substitute(k, subs) + substitute(h, subs))
            @test Float64(residual) ≈ 0.0 atol = 1e-10
        end
    end
end

@testset "three-wave mixing (large order-2 expressions)" begin
    # The example that exposed the bug: quadratic + cubic nonlinearity driven at 2ω.
    # Its order-2 equations are large enough that a naive `simplify`-the-whole-thing
    # fix sends the associative-commutative term matcher into a combinatorial
    # blow-up, so this also guards against reintroducing that hang.
    @variables β α ω ω0 F γ t x(t)
    diff_eom = DifferentialEquation(
        d(x, t, 2) + ω0^2 * x + β * x^2 + α * x^3 + γ * d(x, t) ~ F * cos(2ω * t), x
    )
    add_harmonic!(diff_eom, x, ω)
    assert_nondegenerate(get_krylov_equations(diff_eom; order=2))
end
