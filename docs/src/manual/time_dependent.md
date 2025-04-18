# Time evolution

Generally, solving the ODE of oscillatory systems in time requires numerically tracking the oscillations. This is a computationally expensive process; however, using the harmonic ansatz removes the oscillatory time-dependence. Simulating instead the harmonic variables of a `HarmonicEquation` is vastly more efficient - a steady state of the system appears as a fixed point in multidimensional space rather than an oscillatory function.

The extension `TimeEvolution` is used to interface `HarmonicEquation` with the solvers contained in `OrdinaryDiffEq.jl`. Time-dependent parameter sweeps are defined using the object `AdiabaticSweep`. To use the `TimeEvolution` extension, one must first load the `OrdinaryDiffEq.jl` package.

```@docs; canonical=false
ODEProblem(::HarmonicEquation, ::Any; timespan::Tuple)
AdiabaticSweep
```

In addition, one can use the `steady_state_sweep` function from `SteadyStateDiffEqExt` to perform a parameter sweep over the steady states of a system. For this one has to load `SteadyStateDiffEq.jl`.

```@docs; canonical=false
steady_state_sweep
```

## Plotting

```@docs; canonical=false
plot(::OrdinaryDiffEqTsit5.ODESolution, ::Any, ::HarmonicEquation)
```

## Miscellaneous

Using a time-dependent simulation can verify solution stability in cases where the Jacobian is too expensive to compute.

```@docs; canonical=false
HarmonicSteadyState.is_stable
```
