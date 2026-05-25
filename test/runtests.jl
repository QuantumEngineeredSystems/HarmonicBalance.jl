using HarmonicBalance
using Test

using Random
const SEED = 0x8f88209c
Random.seed!(SEED)

@testset "Code quality" begin
    include("code_quality.jl")
end

@testset "API" begin
    include("API.jl")
    include("HarmonicVariable.jl")
end

@testset "extensions" begin
    @testset "ModelingToolkitBase extension" begin
        include("ModelingToolkitBaseExt.jl")
    end
end

# @testset "Doctests" begin
#     using Documenter
#     Documenter.doctest(HarmonicBalance)
# end
