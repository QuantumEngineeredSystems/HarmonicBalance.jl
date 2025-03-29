@testset "Concretely typed" begin
    # CI = get(ENV, "CI", nothing) == "true" || get(ENV, "GITHUB_TOKEN", nothing) !== nothing
    # julia_version = VERSION >= v"1.11.0-DEV.0" # fails on 1.11
    # if !CI && !julia_version

    # end
    using QuestBase

    using CheckConcreteStructs

    all_concrete(QuestBase.HarmonicVariable)
    all_concrete(QuestBase.HarmonicEquation)
    all_concrete(QuestBase.DifferentialEquation)
    all_concrete(QuestBase.HarmonicVariable)
end

@testset "Code linting" begin
    using JET
    JET.test_package(QuestBase; target_defined_modules=true)
end

@testset "Code quality" begin
    using QuestBase
    using ExplicitImports, Aqua
    # ignore_deps = [:Random, :LinearAlgebra, :Printf, :Test, :Pkg]
    # TimeEvolution = Base.get_extension(HarmonicBalance, :TimeEvolution)
    # ModelingToolkitExt = Base.get_extension(HarmonicBalance, :ModelingToolkitExt)
    # SteadyStateDiffEqExt = Base.get_extension(HarmonicBalance, :SteadyStateDiffEqExt)
    # PlotsExt = Base.get_extension(HarmonicBalance, :PlotsExt)

    @test check_no_stale_explicit_imports(QuestBase) == nothing
    @test check_all_explicit_imports_via_owners(QuestBase) == nothing
    Aqua.test_ambiguities([QuestBase])
    Aqua.test_all(
        QuestBase;
        # deps_compat=(
        #     ignore=ignore_deps,
        #     check_extras=(ignore=ignore_deps,),
        #     check_weakdeps=(ignore=ignore_deps,),
        # ),
        # ambiguities=false,
    )
    # for mod in [TimeEvolution, ModelingToolkitExt, SteadyStateDiffEqExt, PlotsExt]
    #     @test check_no_stale_explicit_imports(mod) == nothing
    #     @test check_all_explicit_imports_via_owners(mod) == nothing
    #     # Aqua.test_ambiguities(mod)
    #     Aqua.test_all(
    #         mod;
    #         deps_compat=false,
    #         ambiguities=false,
    #         piracies=false,
    #         stale_deps=false,
    #         project_extras=false,
    #         persistent_tasks=false,
    #     )
    # end
end
