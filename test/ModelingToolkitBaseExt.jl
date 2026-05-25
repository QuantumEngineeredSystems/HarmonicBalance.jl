using HarmonicBalance
using ModelingToolkitBase
using Test

@testset "Utilities" begin
    ModelingToolkitBaseExt = Base.get_extension(HarmonicBalance, :ModelingToolkitBaseExt)
    @variables α
    check = ModelingToolkitBaseExt.declare_parameter(α)
    @test ModelingToolkitBase.PARAMETER ∈ values(check.val.metadata)
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
        ODEProblem(harmonic_eq, [1.0, 0.0], (0, 100), param)
    end
end
