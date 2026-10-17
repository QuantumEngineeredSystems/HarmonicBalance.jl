using HarmonicBalance
using Test
using Aqua
using ExplicitImports
# Load the extension triggers so the extensions below are checked.
using ModelingToolkitBase: ModelingToolkitBase

@testset "Code quality" begin
    ModelingToolkitBaseExt = Base.get_extension(HarmonicBalance, :ModelingToolkitBaseExt)

    @test check_no_stale_explicit_imports(HarmonicBalance) == nothing
    @test check_all_explicit_imports_via_owners(HarmonicBalance) == nothing
    Aqua.test_ambiguities([HarmonicBalance])
    Aqua.test_all(
        HarmonicBalance;
        persistent_tasks=false,
        stale_deps=(; ignore=[:ModelingToolkitBase]),
    )
    for mod in [ModelingToolkitBaseExt]
        @test check_no_stale_explicit_imports(mod) == nothing
        @test check_all_explicit_imports_via_owners(mod) == nothing
        Aqua.test_all(
            mod;
            deps_compat=false,
            ambiguities=false,
            piracies=false,
            stale_deps=false,
            project_extras=false,
            persistent_tasks=false,
        )
    end
end
