
# Extension to the SciML ecosystem {#Extension-to-the-SciML-ecosystem}

The [SciML ecosystem](https://sciml.ai/) provides a rich set of tools to solve (non)-linear equations, differential equations and inverse problems. We provide an interface (in the form of [Package extensions](https://pkgdocs.julialang.org/v1/creating-packages/#Conditional-loading-of-code-in-packages-(Extensions))) to export the the derived harmonic equations computed with [harmonic balance method](/manual/extracting_harmonics#Harmonic_Balance) or [krylov-bogoliubov method](/manual/extracting_harmonics#Krylov-Bogoliubov) to the SciML ecosystem.

## ModeligToolkit.jl {#ModeligToolkit.jl}

The [`ModelingToolkit.jl`](https://github.com/SciML/ModelingToolkit.jl) (MTK) package provides a symbolic framework for defining and simplifying mathematical models. Through, MTK SciML provides a symbolic interface for their ecosystem
<details class='jldocstring custom-block' open>
<summary><a id='SciMLBase.ODEProblem-Tuple{Union{DifferentialEquation, HarmonicEquation}, Any, Tuple, AbstractDict}-manual-SciMLExt' href='#SciMLBase.ODEProblem-Tuple{Union{DifferentialEquation, HarmonicEquation}, Any, Tuple, AbstractDict}-manual-SciMLExt'><span class="jlbinding">SciMLBase.ODEProblem</span></a> <Badge type="info" class="jlObjectType jlMethod" text="Method" /></summary>



```julia
ODEProblem(
    eom::Union{DifferentialEquation, HarmonicEquation},
    u0,
    tspan::Tuple,
    p::AbstractDict;
    in_place,
    kwargs...
) -> Any

```


Creates and ModelingToolkit.ODEProblem from a DifferentialEquation or HarmonicEquation.

**Example**

```julia
using ModelingToolkit, StaticArrays

@variables α ω ω0 F γ t x(t)
diff_eq = DifferentialEquation(
    d(x, t, 2) + ω0^2 * x + α * x^3 + γ * d(x, t) ~ F * cos(ω * t), x
)
add_harmonic!(diff_eq, x, ω) #
harmonic_eq = get_harmonic_equations(diff_eq)

# in place (most performant for large systems)
ODEProblem(harmonic_eq, [1.0, 0.0], (0, 100), param)

# out of place (most performant for small systems with StaticArrays)
ODEProblem(
    harmonic_eq, [1.0, 0.0], (0, 100), param;
    in_place=false, u0_constructor=x -> SVector(x...)
)
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9bb0fde36d57d6590a570a5abb3921307257b1f8/ext/ModelingToolkitExt.jl#L129" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='ModelingToolkit.System-manual-SciMLExt' href='#ModelingToolkit.System-manual-SciMLExt'><span class="jlbinding">ModelingToolkit.System</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
System(eom::HarmonicEquation) -> Any

```


Creates and ModelingToolkit.System from a HarmonicEquation.

**Example**

```julia
using ModelingToolkit

@variables α ω ω0 F γ t x(t)
diff_eq = DifferentialEquation(
    d(x, t, 2) + ω0^2 * x + α * x^3 + γ * d(x, t) ~ F * cos(ω * t), x
)
add_harmonic!(diff_eq, x, ω) #
harmonic_eq = get_harmonic_equations(diff_eq)

sys = System(harmonic_eq)
param = (α => 1.0, ω0 => 1.1, F => 0.01, γ => 0.01, ω => 1.1)
ODEProblem(sys, [1.0, 0.0], (0, 100), param)
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9bb0fde36d57d6590a570a5abb3921307257b1f8/ext/ModelingToolkitExt.jl#L37" target="_blank" rel="noreferrer">source</a></Badge>



```julia
System(diff_eq::DifferentialEquation) -> Any

```


Creates and ModelingToolkit.System from a DifferentialEquation.

**Example**

```julia
using ModelingToolkit

@variables α ω ω0 F γ t x(t)
diff_eq = DifferentialEquation(
    d(x, t, 2) + ω0^2 * x + α * x^3 + γ * d(x, t) ~ F * cos(ω * t), x
)
sys = System(diff_eq)

param = (α => 1.0, ω0 => 1.1, F => 0.01, γ => 0.01, ω => 1.1)

ODEProblem(sys, [1.0, 0.0], (0, 100), param)
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9bb0fde36d57d6590a570a5abb3921307257b1f8/ext/ModelingToolkitExt.jl#L83" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SciMLBase.SteadyStateProblem-manual-SciMLExt' href='#SciMLBase.SteadyStateProblem-manual-SciMLExt'><span class="jlbinding">SciMLBase.SteadyStateProblem</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
SteadyStateProblem(
    eom::HarmonicEquation,
    u0,
    p::AbstractDict;
    in_place,
    kwargs...
) -> Any

```


Creates and ModelingToolkit.SteadyStateProblem from a HarmonicEquation.

**Example**

```julia
using ModelingToolkit, StaticArrays

@variables α ω ω0 F γ t x(t)
diff_eq = DifferentialEquation(
    d(x, t, 2) + ω0^2 * x + α * x^3 + γ * d(x, t) ~ F * cos(ω * t), x
)
add_harmonic!(diff_eq, x, ω) #
harmonic_eq = get_harmonic_equations(diff_eq)


SteadyStateProblem(harmonic_eq, [1.0, 0.0], param)
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9bb0fde36d57d6590a570a5abb3921307257b1f8/ext/ModelingToolkitExt.jl#L202" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SciMLBase.NonlinearProblem-manual-SciMLExt' href='#SciMLBase.NonlinearProblem-manual-SciMLExt'><span class="jlbinding">SciMLBase.NonlinearProblem</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
NonlinearProblem(
    eom::HarmonicEquation,
    u0,
    p::AbstractDict;
    in_place,
    kwargs...
) -> Any

```


Creates and ModelingToolkit.NonlinearProblem from a HarmonicEquation.

**Example**

```julia
using ModelingToolkit, StaticArrays

@variables α ω ω0 F γ t x(t)
diff_eq = DifferentialEquation(
    d(x, t, 2) + ω0^2 * x + α * x^3 + γ * d(x, t) ~ F * cos(ω * t), x
)
add_harmonic!(diff_eq, x, ω) #
harmonic_eq = get_harmonic_equations(diff_eq)


NonlinearProblem(harmonic_eq, [1.0, 0.0], param)
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9bb0fde36d57d6590a570a5abb3921307257b1f8/ext/ModelingToolkitExt.jl#L175" target="_blank" rel="noreferrer">source</a></Badge>

</details>

