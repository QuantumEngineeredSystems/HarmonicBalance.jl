# Extracting Solutions

After computing the steady-states of the harmonic equations, you'll want to extract the solutions from the [`HarmonicSteadyState.Result`](@ref) struct.

## Basic Solution Extraction

For plotting, you can extract the solutions using the `get_solutions` function, which parses a string into a symbolic expression, evaluates it for every steady state solution and filters the solutions by the requested class.

```@docs; canonical=false
get_solutions
get_branches
get_single_solution
```

## Attractors

```@docs; canonical=false
attractors
phase_diagram
```

## classifying solutions

```@docs; canonical=false
classify_solutions!
get_class
filter_result!
```
