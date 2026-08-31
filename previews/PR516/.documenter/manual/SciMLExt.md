---
---

# Extension to the SciML ecosystem {#Extension-to-the-SciML-ecosystem}

The [SciML ecosystem](https://sciml.ai/) provides a rich set of tools to solve (non)-linear equations, differential equations and inverse problems. We provide an interface (in the form of [Package extensions](https://pkgdocs.julialang.org/v1/creating-packages/#Conditional-loading-of-code-in-packages-(Extensions))) to export the the derived harmonic equations computed with [harmonic balance method](/manual/extracting_harmonics#Harmonic_Balance) or [krylov-bogoliubov method](/manual/extracting_harmonics#Krylov-Bogoliubov) to the SciML ecosystem.

## ModeligToolkit.jl {#ModeligToolkit.jl}

The [`ModelingToolkit.jl`](https://github.com/SciML/ModelingToolkit.jl) (MTK) package provides a symbolic framework for defining and simplifying mathematical models. Through, MTK SciML provides a symbolic interface for their ecosystem
<details class='jldocstring custom-block' open>
<summary><a id='SciMLBase.ODEProblem-Tuple{Union{DifferentialEquation, HarmonicEquation}, Any, Tuple, Any}-manual-SciMLExt' href='#SciMLBase.ODEProblem-Tuple{Union{DifferentialEquation, HarmonicEquation}, Any, Tuple, Any}-manual-SciMLExt'><span class="jlbinding">SciMLBase.ODEProblem</span></a> <Badge type="info" class="jlObjectType jlMethod" text="Method" /></summary>



```julia
ODEProblem(
    eom::Union{DifferentialEquation, HarmonicEquation},
    u0,
    tspan::Tuple,
    p;
    in_place,
    kwargs...
) -> Any

```


Creates and ModelingToolkitBase.ODEProblem from a DifferentialEquation or HarmonicEquation.

The parameters `p` can be any map of symbolic variables to values: a `Dict`, or a `Vector` or `Tuple` of pairs. Whether the generated function is in-place is set with the `in_place` keyword or, equivalently, with the `ODEProblem{iip}` type parameter.

**Example**

```julia
using ModelingToolkitBase, StaticArrays

@variables α ω ω0 F γ t x(t)
diff_eq = DifferentialEquation(
    d(x, t, 2) + ω0^2 * x + α * x^3 + γ * d(x, t) ~ F * cos(ω * t), x
)
add_harmonic!(diff_eq, x, ω) #
harmonic_eq = get_harmonic_equations(diff_eq)

param = (α => 1.0, ω0 => 1.1, F => 0.01, γ => 0.01, ω => 1.1)

# in place (most performant for large systems)
ODEProblem(harmonic_eq, [1.0, 0.0], (0, 100), param)

# out of place (most performant for small systems with StaticArrays)
ODEProblem(
    harmonic_eq, [1.0, 0.0], (0, 100), param;
    in_place=false, u0_constructor=x -> SVector(x...)
)

# the in-placeness can also be set with a type parameter
ODEProblem{false}(harmonic_eq, [1.0, 0.0], (0, 100), param)
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/ff1301ec5cb1b46b480b364316c7c9c3769354ff/ext/ModelingToolkitBaseExt.jl#L145" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='ModelingToolkitBase.System-manual-SciMLExt' href='#ModelingToolkitBase.System-manual-SciMLExt'><span class="jlbinding">ModelingToolkitBase.System</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
System(eom::HarmonicEquation) -> System

```


Creates and ModelingToolkitBase.System from a HarmonicEquation.

**Example**

```julia
using ModelingToolkitBase

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



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/ff1301ec5cb1b46b480b364316c7c9c3769354ff/ext/ModelingToolkitBaseExt.jl#L53" target="_blank" rel="noreferrer">source</a></Badge>



```julia
System(diff_eq::DifferentialEquation) -> System

```


Creates and ModelingToolkitBase.System from a DifferentialEquation.

**Example**

```julia
using ModelingToolkitBase

@variables α ω ω0 F γ t x(t)
diff_eq = DifferentialEquation(
    d(x, t, 2) + ω0^2 * x + α * x^3 + γ * d(x, t) ~ F * cos(ω * t), x
)
sys = System(diff_eq)

param = (α => 1.0, ω0 => 1.1, F => 0.01, γ => 0.01, ω => 1.1)

ODEProblem(sys, [1.0, 0.0], (0, 100), param)
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/ff1301ec5cb1b46b480b364316c7c9c3769354ff/ext/ModelingToolkitBaseExt.jl#L99" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SciMLBase.SteadyStateProblem-manual-SciMLExt' href='#SciMLBase.SteadyStateProblem-manual-SciMLExt'><span class="jlbinding">SciMLBase.SteadyStateProblem</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
SteadyStateProblem(
    eom::HarmonicEquation,
    u0,
    p;
    in_place,
    kwargs...
) -> Any

```


Creates and ModelingToolkitBase.SteadyStateProblem from a HarmonicEquation.

The parameters `p` can be any map of symbolic variables to values: a `Dict`, or a `Vector` or `Tuple` of pairs. Whether the generated function is in-place is set with the `in_place` keyword or, equivalently, with the `SteadyStateProblem{iip}` type parameter.

**Example**

```julia
using ModelingToolkitBase, StaticArrays

@variables α ω ω0 F γ t x(t)
diff_eq = DifferentialEquation(
    d(x, t, 2) + ω0^2 * x + α * x^3 + γ * d(x, t) ~ F * cos(ω * t), x
)
add_harmonic!(diff_eq, x, ω) #
harmonic_eq = get_harmonic_equations(diff_eq)


param = (α => 1.0, ω0 => 1.1, F => 0.01, γ => 0.01, ω => 1.1)

SteadyStateProblem(harmonic_eq, [1.0, 0.0], param)
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/ff1301ec5cb1b46b480b364316c7c9c3769354ff/ext/ModelingToolkitBaseExt.jl#L244" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SciMLBase.NonlinearProblem-manual-SciMLExt' href='#SciMLBase.NonlinearProblem-manual-SciMLExt'><span class="jlbinding">SciMLBase.NonlinearProblem</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
NonlinearProblem(
    eom::HarmonicEquation,
    u0,
    p;
    in_place,
    kwargs...
) -> Any

```


Creates and ModelingToolkitBase.NonlinearProblem from a HarmonicEquation.

The parameters `p` can be any map of symbolic variables to values: a `Dict`, or a `Vector` or `Tuple` of pairs. Whether the generated function is in-place is set with the `in_place` keyword or, equivalently, with the `NonlinearProblem{iip}` type parameter.

**Example**

```julia
using ModelingToolkitBase, StaticArrays

@variables α ω ω0 F γ t x(t)
diff_eq = DifferentialEquation(
    d(x, t, 2) + ω0^2 * x + α * x^3 + γ * d(x, t) ~ F * cos(ω * t), x
)
add_harmonic!(diff_eq, x, ω) #
harmonic_eq = get_harmonic_equations(diff_eq)


param = (α => 1.0, ω0 => 1.1, F => 0.01, γ => 0.01, ω => 1.1)

NonlinearProblem(harmonic_eq, [1.0, 0.0], param)
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/ff1301ec5cb1b46b480b364316c7c9c3769354ff/ext/ModelingToolkitBaseExt.jl#L205" target="_blank" rel="noreferrer">source</a></Badge>

</details>

