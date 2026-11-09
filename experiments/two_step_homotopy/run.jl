module TwoStepHomotopyExperiment

using BenchmarkTools: @benchmark, median
using HarmonicBalance: HarmonicBalance
using HomotopyContinuation: @var, System, solve, solutions, nfailed
using LinearAlgebra: norm
using Symbolics: Symbolics, @variables
using Test: @test, @testset

const SEED = UInt32(0x8f88209c)

# The single-harmonic steady equations of an all-to-all coupled parametric
# Duffing system. State order is [u1,v1,u2,v2,...]; the only free parameter is J.
function model(N)
    @var u[1:N] v[1:N] J
    ω, ω0, γ, λ, α = 0.9, 1.1, 0.1, 0.5, 1.0
    equations = mapreduce(vcat, 1:N) do i
        detuning = ω0^2 - ω^2 + 3α * (u[i]^2 + v[i]^2) / 4
        pump = λ * ω0^2 / 2
        coupled_u = sum((u[j] for j in 1:N if j != i); init=0)
        coupled_v = sum((v[j] for j in 1:N if j != i); init=0)
        return [
            (detuning - pump) * u[i] + γ * ω * v[i] - J * coupled_u,
            (detuning + pump) * v[i] - γ * ω * u[i] - J * coupled_v,
        ]
    end
    variables = collect(Iterators.flatten(zip(u, v)))
    return System(equations; variables, parameters=[J])
end

# Independently derive the one-oscillator equations with HarmonicBalance, so the
# handwritten polynomial benchmark remains tied to the package's conventions.
function check_projection(single)
    @variables t x(t)
    equation = HarmonicBalance.DifferentialEquation(
        HarmonicBalance.d(x, t, 2) +
        0.1 * HarmonicBalance.d(x, t) +
        1.1^2 * (1 - 0.5 * cos(2 * 0.9 * t)) * x +
        x^3 ~ 0,
        x,
    )
    HarmonicBalance.add_harmonic!(equation, x, 0.9)
    harmonics = HarmonicBalance.get_harmonic_equations(equation)
    variables = Symbolics.get_variables(harmonics)
    T = only(HarmonicBalance.get_independent_variables(harmonics))
    for state in ([0.0, 0.0], [0.2, -0.3], [-0.7, 0.4])
        rules = Dict{Any,Any}(zip(variables, state))
        for variable in variables
            rules[HarmonicBalance.d(variable, T)] = 0
        end
        projected = [
            Symbolics.value(Symbolics.substitute(eq.lhs-eq.rhs, rules)) for
            eq in harmonics.equations
        ]
        @test projected ≈ single(state, [0.0])
    end
end

function direct(system, target)
    return solve(
        system;
        target_parameters=[target],
        start_system=:total_degree,
        seed=SEED,
        threading=false,
        show_progress=false,
    )
end

function track(system, starts, target)
    return solve(
        system,
        starts;
        start_parameters=[0.0],
        target_parameters=[target],
        seed=SEED,
        threading=false,
        show_progress=false,
    )
end

function two_step(system, single, N, target)
    roots = solutions(direct(single, 0.0))
    starts = [vcat(product...) for product in Iterators.product(ntuple(_ -> roots, N)...)]
    return track(system, starts, target)
end

function run(; N=2, target=0.02, samples=20)
    N in 2:3 || throw(ArgumentError("Use N=2 or N=3 for this bounded experiment"))
    single, coupled = model(1), model(N)
    local_result = direct(single, 0.0)
    local_roots = solutions(local_result)
    starts = [
        vcat(product...) for product in Iterators.product(ntuple(_ -> local_roots, N)...)
    ]
    direct_result = direct(coupled, target)
    tracked_result = track(coupled, starts, target)
    reference, tracked = solutions(direct_result), solutions(tracked_result)
    @testset "two-step homotopy correctness" begin
        check_projection(single)
        @test nfailed(local_result) == 0
        @test length(local_roots) == 5
        @test length(starts) == 5^N
        @test nfailed(direct_result) == 0
        @test nfailed(tracked_result) == 0
        @test all(root -> norm(coupled(root, [target]), Inf) < 1e-8, reference)
        @test all(root -> norm(coupled(root, [target]), Inf) < 1e-8, tracked)
        @test any(root -> norm(root, Inf) < 1e-8, tracked)
        @test all(root -> any(other -> norm(root-other, Inf) < 1e-6, reference), tracked)
    end
    missing = count(root -> !any(other -> norm(root-other, Inf) < 1e-6, tracked), reference)
    @test missing == 0
    println(
        "Julia ",
        VERSION,
        "; threads=",
        Threads.nthreads(),
        "; HC threading=false; seed=",
        SEED,
    )
    println(
        "N=",
        N,
        "; J=",
        target,
        "; local roots=",
        length(local_roots),
        "; product starts=",
        length(starts),
        "; tracked roots=",
        length(tracked),
        "; direct roots=",
        length(reference),
        "; missing from two-step=",
        missing,
    )
    println(
        "Completeness is tested against this direct solve, not asserted for arbitrary parameters.",
    )
    direct_trial = @benchmark direct($coupled, $target) samples=samples evals=1 seconds=60
    track_trial = @benchmark track($coupled, $starts, $target) samples=samples evals=1 seconds=60
    two_step(coupled, single, N, target) # warm the complete two-step operation
    total_trial = @benchmark two_step($coupled, $single, $N, $target) samples=samples evals=1 seconds=60
    println("| Method | Median ms | Bytes | Allocations |")
    println("|:--|--:|--:|--:|")
    for (name, trial) in (
        ("direct total degree", direct_trial),
        ("product-root tracking", track_trial),
        ("two-step including local solve", total_trial),
    )
        estimate = median(trial)
        println(
            "| ",
            name,
            " | ",
            round(estimate.time/1e6; digits=3),
            " | ",
            estimate.memory,
            " | ",
            estimate.allocs,
            " |",
        )
    end
    println(
        "The tracking measurement excludes the reusable one-oscillator solve and product construction.",
    )
    return (; N, target, missing, direct_result, tracked_result)
end

end

TwoStepHomotopyExperiment.run()
