using HarmonicBalance
using HarmonicBalance: get_krylov_equations
using Symbolics: Symbolics
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
