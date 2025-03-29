using QuestBase
using Test

using Random
const SEED = 0x8f88209c
Random.seed!(SEED)

@testset "Code quality" begin
    include("code_quality.jl")
end

@testset "Symbolics customised" begin
    include("symbolics.jl")
end
