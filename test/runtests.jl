using HarmonicBalance
using Test

using Random
const SEED = 0x8f88209c
Random.seed!(SEED)

# JET runs in its own CI job. GROUP=Core skips it, GROUP=JET runs only it.
const GROUP = get(ENV, "GROUP", "All")

if GROUP in ("All", "Core")
    @testset "Code quality" begin
        include("code_quality.jl")
    end

    @testset "API" begin
        include("API.jl")
        include("HarmonicVariable.jl")
    end

    @testset "Harmonic equations" begin
        include("HarmonicEquation.jl")
    end

    @testset "Krylov-Bogoliubov" begin
        include("krylov.jl")
    end

    @testset "extensions" begin
        @testset "ModelingToolkitBase extension" begin
            include("ModelingToolkitBaseExt.jl")
        end
    end
end

if GROUP in ("All", "JET")
    @testset "Code linting" begin
        include("jet.jl")
    end
end

# @testset "Doctests" begin
#     using Documenter
#     Documenter.doctest(HarmonicBalance)
# end
