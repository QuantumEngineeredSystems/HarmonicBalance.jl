# Product-root two-step homotopy experiment

Compare a direct total-degree solve with tracking Cartesian products of independently solved, uncoupled oscillator roots to a coupled target. The model is the single-harmonic steady approximation of all-to-all coupled parametric Duffing oscillators. It is not the exact time-dependent oscillator dynamics and does not add a supported solver API.

Run from the repository root on Julia 1.13:

```sh
julia --project=experiments/two_step_homotopy -e 'using Pkg; Pkg.instantiate()'
julia --project=experiments/two_step_homotopy experiments/two_step_homotopy/run.jl
```

The notebook `2stepHomotopyTest.ipynb` is a thin entry point to this same runner. Start IJulia in the repository root with this environment. The notebook requires no additional packages to run the script; IJulia itself belongs to your notebook tooling environment.

The default run uses two oscillators, coupling `J=0.02`, seed `0x8f88209c`, and single-threaded path tracking. The one-oscillator equations are independently checked against equations derived with HarmonicBalance. The runner checks failed paths, polynomial residuals, the zero root, and membership of every tracked root in the direct solution set. It also requires that no direct roots are missing from the two-step result at the selected parameters. Five local roots provide 25 product starting points, without random perturbations or hard-coded eight-variable expressions.

Both solvers are warmed before 20 single-evaluation benchmark samples. Both tracking-only timings and complete two-step timings including the local solve and product construction are reported; their scope is printed with the results. Keep the ignored generated Manifest and record `Pkg.status(; mode=Pkg.PKGMODE_MANIFEST)` to reproduce exact dependency revisions. The package checkout comes from `[sources]`; peer Git sources follow their default branches.

To explore three oscillators after the default run, call `TwoStepHomotopyExperiment.run(; N=3)`. Cartesian products grow as `5^N`, and direct total-degree paths grow faster. A successful comparison at these parameters is evidence for this experiment, not a guarantee of completeness at singular starts, bifurcations, or arbitrary couplings. Never perturb the product roots without recomputing and checking the start-system residuals.
