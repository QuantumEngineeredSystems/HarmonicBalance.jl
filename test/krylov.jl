using HarmonicBalance
using HarmonicBalance: get_krylov_equations
using Symbolics: Symbolics
using Test

# Regression for the Symbolics 7 averaging bug: `trig_reduce` left the
# Pythagorean identity cos(ωt)² + sin(ωt)² in the denominator, so
# `get_independent` treated the whole fraction as time-dependent and returned
# 0. Every slow-flow equation collapsed to `0 ~ d/dT`, yet no test exercised
# `get_krylov_equations`, so HB Tests stayed green.
@testset "Krylov-Bogoliubov slow-flow non-degenerate" begin
    @variables t x(t) ω0 ω F γ
    diff_eom = DifferentialEquation(d(x, t, 2) + γ * d(x, t) + ω0^2 * x ~ F * cos(ω * t), x)
    add_harmonic!(diff_eom, x, ω)

    @testset "order $order" for order in (1, 2)
        eom = get_krylov_equations(diff_eom; order=order)
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
end
