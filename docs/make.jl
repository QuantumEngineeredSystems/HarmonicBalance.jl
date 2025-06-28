CI = get(ENV, "CI", nothing) == "true" || get(ENV, "GITHUB_TOKEN", nothing) !== nothing

using HarmonicBalance
using HarmonicSteadyState
using QuestBase

using Documenter
using DocumenterVitepress
using DocumenterCitations

# extensions
using ModelingToolkit
using OrdinaryDiffEqTsit5
using SteadyStateDiffEq

TimeEvolution = Base.get_extension(HarmonicSteadyState, :TimeEvolution)
ModelingToolkitExt = Base.get_extension(HarmonicBalance, :ModelingToolkitExt)
SteadyStateDiffEqExt = Base.get_extension(HarmonicSteadyState, :SteadyStateDiffEqExt)
HarmonicBalanceExt = Base.get_extension(HarmonicSteadyState, :HarmonicBalanceExt)

bib = CitationBibliography(
    joinpath(@__DIR__, "src", "refs.bib");
    style=:numeric,  # default
)

using Plots
PlotsExt = Base.get_extension(HarmonicSteadyState, :PlotsExt)
default(; fmt=:png)
# Gotta set this environment variable when using the GR run-time on CI machines.
# This happens as examples will use Plots.jl to make plots and movies.
# See: https://github.com/jheinen/GR.jl/issues/278
ENV["GKSwstype"] = "100"

include("make_md_examples.jl")

include("pages.jl")

# Create remotes for Documenter
using Pkg
remotes = Dict()
for ext in [QuestBase, HarmonicSteadyState]
    str = string(ext)
    status = sprint(io -> Pkg.status(str; io=io))
    version = match(r"(v[0-9].[0-9]+.[0-9]+)", status)[1]
    gh_moi = Documenter.Remotes.GitHub("QuantumEngineeredSystems", str * ".jl")
    remotes[pkgdir(ext)] = (gh_moi, version)
end

makedocs(;
    sitename="HarmonicBalance.jl",
    authors="Quest group",
    modules=[
        HarmonicBalance,
        QuestBase,
        HarmonicSteadyState,
        TimeEvolution,
        ModelingToolkitExt,
        SteadyStateDiffEqExt,
        HarmonicSteadyState.LinearResponse,
        PlotsExt,
        HarmonicBalanceExt,
    ],
    format=DocumenterVitepress.MarkdownVitepress(;
        repo="github.com/QuantumEngineeredSystems/HarmonicBalance.jl",
        devbranch="master",
        devurl="dev",
    ),
    checkdocs=:exports,
    pages=pages,
    remotes=remotes,
    source="src",
    build="build",
    draft=(!CI),
    warnonly=if CI
        [:linkcheck, :cross_references]
    else
        [:linkcheck, :cross_references, :missing_docs, :docs_block]
    end,
    doctest=false, # We test it in the CI, no need to run it here
    plugins=[bib],
)

if CI
    deploydocs(;
        repo="github.com/QuantumEngineeredSystems/HarmonicBalance.jl",
        devbranch="master",
        target="build",
        branch="gh-pages",
        push_preview=true,
    )
end
