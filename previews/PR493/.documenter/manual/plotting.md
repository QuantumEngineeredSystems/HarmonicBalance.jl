
# Plotting solutions {#plotting}

HarmonicBalance.jl comes with a plotting module `PlotsExt` that allows you to visualize the steady states in the [`HarmonicSteadyState.Result`](/manual/solving_harmonics#HarmonicSteadyState.Result-manual-solving_harmonics). The module is conditionally loaded based on the `Plots.jl` package being loaded.

The function `plot` is multiple-dispatched to plot 1D and 2D datasets. In 1D, the solutions are colour-coded according to the branches obtained by `sort_solutions`.
<details class='jldocstring custom-block' open>
<summary><a id='RecipesBase.plot-Tuple{HarmonicSteadyState.Result, Vararg{Any}}-manual-plotting' href='#RecipesBase.plot-Tuple{HarmonicSteadyState.Result, Vararg{Any}}-manual-plotting'><span class="jlbinding">RecipesBase.plot</span></a> <Badge type="info" class="jlObjectType jlMethod" text="Method" /></summary>



```julia
plot(
    res::HarmonicSteadyState.Result{D, S, P, F} where F<:FunctionWrappers.FunctionWrapper{Array{S, 2}, Tuple{Array{S, 1}}},
    varargs...;
    cut,
    kwargs...
) -> Plots.Plot

```


**Plot a `Result` object.**

Class selection done by passing `String` or `Vector{String}` as kwarg:

```
class       :   only plot solutions in this class(es) ("all" --> plot everything)
not_class   :   do not plot solutions in this class(es)
```


Other kwargs are passed onto Plots.gr().

See also `plot!`

The x,y,z arguments are Strings compatible with Symbolics.jl, e.g., `y=2*sqrt(u1^2+v1^2)` plots the amplitude of the first quadratures multiplied by 2.

**1D plots**

```
plot(res::Result; x::String, y::String, class="default", not_class=[], kwargs...)
plot(res::Result, y::String; kwargs...) # take x automatically from Result
```


Default behaviour is to plot stable solutions as full lines, unstable as dashed.

If a sweep in two parameters were done, i.e., `dimension(res)==2`, a one dimensional cut can be plotted by using the keyword `cut` were it takes a `Pair{Num, Float}` type entry. For example, `plot(res, y="sqrt(u1^2+v1^2), cut=(λ => 0.2))` plots a cut at `λ = 0.2`.

**2D plots**

```
plot(res::Result; z::String, branch::Int64, class="physical", not_class=[], kwargs...)
```


To make the 2d plot less chaotic it is required to specify the specific `branch` to plot, labeled by a `Int64`.

The x and y axes are taken automatically from `res`


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/ext/PlotsExt/steady_states.jl#L2" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='RecipesBase.plot!-manual-plotting' href='#RecipesBase.plot!-manual-plotting'><span class="jlbinding">RecipesBase.plot!</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
plot!(
    res::HarmonicSteadyState.Result,
    varargs...;
    kwargs...
) -> Plots.Plot

```


Similar to `plot` but adds a plot onto an existing plot.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/ext/PlotsExt/steady_states.jl#L53" target="_blank" rel="noreferrer">source</a></Badge>

</details>


## Plotting phase diagrams {#Plotting-phase-diagrams}

In many problems, rather than in any property of the solutions themselves, we are interested in the phase diagrams, encoding the number of (stable) solutions in different regions of the parameter space. `plot_phase_diagram` handles this for 1D and 2D datasets.
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.plot_phase_diagram-manual-plotting' href='#HarmonicSteadyState.plot_phase_diagram-manual-plotting'><span class="jlbinding">HarmonicSteadyState.plot_phase_diagram</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
plot_phase_diagram(
    res::HarmonicSteadyState.Result{D, SolType} where SolType<:Number;
    kwargs...
) -> Plots.Plot

```


Plot the number of solutions in a `Result` object as a function of the parameters. Works with 1D and 2D datasets.

Class selection done by passing `String` or `Vector{String}` as kwarg:

```
class::String       :   only count solutions in this class ("all" --> plot everything)
not_class::String   :   do not count solutions in this class
```


Other kwargs are passed onto Plots.gr()


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/ext/PlotsExt/steady_states.jl#L232" target="_blank" rel="noreferrer">source</a></Badge>

</details>


## Plot spaghetti plot {#Plot-spaghetti-plot}

Sometimes, it is useful to plot the quadratures of the steady states (u, v) in function of a swept parameter. This is done with `plot_spaghetti`.
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.plot_spaghetti-manual-plotting' href='#HarmonicSteadyState.plot_spaghetti-manual-plotting'><span class="jlbinding">HarmonicSteadyState.plot_spaghetti</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
plot_spaghetti(
    res::HarmonicSteadyState.Result{D, SolType} where SolType<:Number;
    x,
    y,
    z,
    class,
    not_class,
    add,
    kwargs...
)

```


Plot a three dimension line plot of a `Result` object as a function of the parameters. Works with 1D and 2D datasets.

Class selection done by passing `String` or `Vector{String}` as kwarg:

```
class::String       :   only count solutions in this class ("all" --> plot everything)
not_class::String   :   do not count solutions in this class
```


Other kwargs are passed onto Plots.gr()


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/ext/PlotsExt/steady_states.jl#L301" target="_blank" rel="noreferrer">source</a></Badge>

</details>

