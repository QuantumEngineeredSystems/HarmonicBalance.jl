@testset "Code linting" begin
    using JET
    JET.test_package(HarmonicBalance; target_defined_modules=true)
end

@testset "Code quality" begin
    using ExplicitImports, Aqua
    using ModelingToolkit
    ModelingToolkitExt = Base.get_extension(HarmonicBalance, :ModelingToolkitExt)

    @test check_no_stale_explicit_imports(HarmonicBalance) == nothing
    @test check_all_explicit_imports_via_owners(HarmonicBalance) == nothing
    Aqua.test_ambiguities([HarmonicBalance])
    Aqua.test_all(
        HarmonicBalance;
        # deps_compat=(
        #     ignore=ignore_deps,
        #     check_extras=(ignore=ignore_deps,),
        #     check_weakdeps=(ignore=ignore_deps,),
        # ),
        # ambiguities=false,
    )
    for mod in [ModelingToolkitExt]
        @test check_no_stale_explicit_imports(mod) == nothing
        @test check_all_explicit_imports_via_owners(mod) == nothing
        # Aqua.test_ambiguities(mod)
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
