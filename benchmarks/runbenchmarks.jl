using BenchmarkTools
using HarmonicBalance, HarmonicSteadyState, QuantumCumulants

const SUITE = BenchmarkGroup()

include("KPO.jl")

benchmark_kpo!(SUITE)

BenchmarkTools.tune!(SUITE)
results = BenchmarkTools.run(SUITE; verbose=true)
display(median(results))

BenchmarkTools.save("benchmarks_output.json", median(results))
