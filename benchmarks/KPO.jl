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

    SUITE["Construction"]["Harmonic Equation"]["One Frequency"] = @benchmarkable begin
        get_harmonic_equations($diff_eq)
    end seconds = 10

    krylov_eq = get_krylov_equations(diff_eq; order=1)
    krylov_eq2 = get_krylov_equations(diff_eq; order=2)

    SUITE["Construction"]["Krylov Equation"]["Order 1"] = @benchmarkable begin
        get_krylov_equations($diff_eq; order=1)
    end seconds = 10
    SUITE["Construction"]["Krylov Equation"]["Order 2"] = @benchmarkable begin
        get_krylov_equations($diff_eq; order=2)
    end seconds = 10

    fixed = OrderedDict(ω₀ => 1.0, γ => 1e-2, λ => 5e-2, F => 1e-3, α => 1.0, η => 0.3)
    varied = OrderedDict(ω => range(0.9, 1.1, 100))

    problem = HomotopyContinuationProblem(harmonic_eq, varied, fixed)
    SUITE["Construction"]["Problem"]["HomotopyContinuationProblem"] = @benchmarkable begin
        HomotopyContinuationProblem($harmonic_eq, $varied, $fixed)
    end seconds = 10

    show_progress = false
    sorting = "no_sorting"
    classify_default = false

    method = WarmUp(; thread=true)
    result = get_steady_states(problem, method; show_progress, sorting, classify_default)

    SUITE["Steady states"]["Homotopy Problem"]["Warm up method"] = @benchmarkable begin
        get_steady_states(
            $problem,
            $method;
            show_progress=false,
            sorting="no_sorting",
            classify_default=false,
        )
    end seconds = 10

    method = TotalDegree(; thread=true)
    result = get_steady_states(problem, method; show_progress, sorting, classify_default)

    SUITE["Steady states"]["Homotopy Problem"]["Total degree homotopy"] = @benchmarkable begin
        get_steady_states(
            $problem,
            $method;
            show_progress=false,
            sorting="no_sorting",
            classify_default=false,
        )
    end seconds = 10

    method = Polyhedral(; thread=true)
    result = get_steady_states(problem, method; show_progress, sorting, classify_default)

    SUITE["Steady states"]["Homotopy Problem"]["Polyhedral homotopy"] = @benchmarkable begin
        get_steady_states(
            $problem,
            $method;
            show_progress=false,
            sorting="no_sorting",
            classify_default=false,
        )
    end seconds = 10

    return nothing
end
