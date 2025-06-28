using HarmonicBalance, HarmonicSteadyState
using HarmonicSteadyState: HomotopyContinuationProblem, OrderedDict

function benchmark_kpo!(SUITE)
    @variables ω₀ γ λ F η α ω t x(t)

    natural_equation =
        d(d(x, t), t) +
        γ * d(x, t) +
        (ω₀^2 - λ * cos(2 * ω * t)) * x +
        α * x^3 +
        η * d(x, t) * x^2
    forces = F * cos(ω * t)
    diff_eq = DifferentialEquation(natural_equation + forces, x)
    add_harmonic!(diff_eq, x, ω)

    harmonic_eq = get_harmonic_equations(diff_eq)

    SUITE["Construction"]["Harmonic Equation"]["One Frequency"] = @benchmarkable get_harmonic_equations(
        $diff_eq
    ) seconds = 10

    fixed = OrderedDict(ω₀ => 1.0, γ => 1e-2, λ => 5e-2, F => 1e-3, α => 1.0, η => 0.3)
    varied = OrderedDict(ω => range(0.9, 1.1, 100))

    Problem = HomotopyContinuationProblem(harmonic_eq, varied, fixed)
    SUITE["Construction"]["Problem"]["HomotopyContinuationProblem"] = @benchmarkable HomotopyContinuationProblem(
        $harmonic_eq, $varied, $fixed
    ) seconds = 10

    show_progress = false
    sorting = "no_sorting"
    classify_default = false

    method = WarmUp(; thread=true)
    result = get_steady_states(Problem, method; show_progress, sorting, classify_default)

    SUITE["Steady states"]["Homotopy Problem"]["Warm up method"] = @benchmarkable get_steady_states(
        $Problem, $method; show_progress=false, sorting="no_sorting", classify_default=false
    ) seconds = 10

    method = TotalDegree(; thread=true)
    result = get_steady_states(Problem, method; show_progress, sorting, classify_default)

    SUITE["Steady states"]["Homotopy Problem"]["Total degree homotopy"] = @benchmarkable get_steady_states(
        $Problem, $method; show_progress=false, sorting="no_sorting", classify_default=false
    ) seconds = 10

    method = Polyhedral(; thread=true)
    result = get_steady_states(Problem, method; show_progress, sorting, classify_default)

    SUITE["Steady states"]["Homotopy Problem"]["Polyhedral homotopy"] = @benchmarkable get_steady_states(
        $Problem, $method; show_progress=false, sorting="no_sorting", classify_default=false
    ) seconds = 10
    return nothing
end
