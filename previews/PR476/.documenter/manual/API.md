
# API {#doc-API}

## Table of contents {#Table-of-contents}

[[toc]] &lt;!– the level setting is in &quot;.vitepress/config.mts&quot; –&gt;

## System objects and types {#System-objects-and-types}
<details class='jldocstring custom-block' open>
<summary><a id='QuestBase.d' href='#QuestBase.d'><span class="jlbinding">QuestBase.d</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



The derivative of f w.r.t. x of degree deg


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/QuestBase.jl/blob/v0.3.4/src/Variables.jl#L1" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='QuestBase.DifferentialEquation' href='#QuestBase.DifferentialEquation'><span class="jlbinding">QuestBase.DifferentialEquation</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
mutable struct DifferentialEquation
```


Holds differential equation(s) of motion and a set of harmonics to expand each variable. This is the primary input for `HarmonicBalance.jl`. After inputting the equations, the harmonics ansatz needs to be specified using `add_harmonic!`.

**Fields**
- `equations::OrderedCollections.OrderedDict{Num, Equation}`: Assigns to each variable an equation of motion.
  
- `harmonics::OrderedCollections.OrderedDict{Num, OrderedCollections.OrderedSet{Num}}`: Assigns to each variable a set of harmonics.
  

**Example**

```julia
julia> @variables t, x(t), y(t), ω0, ω, F, k;

# equivalent ways to enter the simple harmonic oscillator
julia> DifferentialEquation(d(x,t,2) + ω0^2 * x - F * cos(ω*t), x);
julia> DifferentialEquation(d(x,t,2) + ω0^2 * x ~ F * cos(ω*t), x);

# two coupled oscillators, one of them driven
julia> DifferentialEquation(
    [d(x,t,2) + ω0^2 * x - k*y, d(y,t,2) + ω0^2 * y - k*x] .~ [F * cos(ω*t), 0], [x,y]
);
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/QuestBase.jl/blob/v0.3.4/src/DifferentialEquation.jl#L1" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='QuestBase.HarmonicVariable' href='#QuestBase.HarmonicVariable'><span class="jlbinding">QuestBase.HarmonicVariable</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
mutable struct HarmonicVariable
```


Holds a variable stored under `symbol` describing the harmonic `ω` of `natural_variable`.

**Fields**
- `symbol::Num`: Symbol of the variable in the HarmonicBalance namespace.
  
- `name::String`: Human-readable labels of the variable, used for plotting.
  
- `type::String`: Type of the variable (u or v for quadratures, a for a constant, Hopf for Hopf etc.)
  
- `ω::Num`: The harmonic being described.
  
- `natural_variable::Num`: The natural variable whose harmonic is being described.
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/QuestBase.jl/blob/v0.3.4/src/HarmonicVariable.jl#L1" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='QuestBase.HarmonicEquation' href='#QuestBase.HarmonicEquation'><span class="jlbinding">QuestBase.HarmonicEquation</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
mutable struct HarmonicEquation
```


Holds a set of algebraic equations governing the harmonics of a `DifferentialEquation`.

**Fields**
- `equations::Vector{Equation}`: A set of equations governing the harmonics.
  
- `variables::Vector{QuestBase.HarmonicVariable}`: A set of variables describing the harmonics.
  
- `parameters::Vector{Num}`: The parameters of the equation set.
  
- `natural_equation::DifferentialEquation`: The natural equation (before the harmonic ansatz was used).
  
- `jacobian::Matrix{Num}`: The Jacobian of the natural equation.
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/QuestBase.jl/blob/v0.3.4/src/HarmonicEquation.jl#L1" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='QuestBase.rearrange_standard' href='#QuestBase.rearrange_standard'><span class="jlbinding">QuestBase.rearrange_standard</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
rearrange_standard(
    eom::HarmonicEquation
) -> HarmonicEquation

```


Rearrange `eom` to the standard form, such that the derivatives of the variables are on one side.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/QuestBase.jl/blob/v0.3.4/src/HarmonicEquation.jl#L146" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='QuestBase.rearrange_standard!' href='#QuestBase.rearrange_standard!'><span class="jlbinding">QuestBase.rearrange_standard!</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
rearrange_standard!(eom::DifferentialEquation)
rearrange_standard!(eom::DifferentialEquation, degree)

```


Rearranges the differential equations in `eom` to standard form, where the highest derivative of each variable (specified by `degree`, default 2) appears isolated on the left-hand side. Modifies the equations in place.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/QuestBase.jl/blob/v0.3.4/src/DifferentialEquation.jl#L169" target="_blank" rel="noreferrer">source</a></Badge>



```julia
rearrange_standard!(
    eom::HarmonicEquation
) -> HarmonicEquation

```


Rearrange `eom` to the standard form, such that the derivatives of the variables are on one side.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/QuestBase.jl/blob/v0.3.4/src/HarmonicEquation.jl#L156" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicBalance.first_order_transform!' href='#HarmonicBalance.first_order_transform!'><span class="jlbinding">HarmonicBalance.first_order_transform!</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
first_order_transform!(diff_eom::DifferentialEquation, time)

```


Transforms a higher-order differential equation system into an equivalent first-order system by introducing additional variables. Modifies the system in place. The `time` parameter specifies the independent variable used for differentiation.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/7c6547d36322e8ce7799e339fc4303d4dac76bbc/src/DifferentialEquation.jl#L1" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='QuestBase.is_rearranged_standard' href='#QuestBase.is_rearranged_standard'><span class="jlbinding">QuestBase.is_rearranged_standard</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
is_rearranged_standard(eom::DifferentialEquation) -> Any
is_rearranged_standard(
    eom::DifferentialEquation,
    degree
) -> Any

```


Checks if the differential equations in `eom` are arranged in standard form, where the highest derivative of each variable appears isolated on the left-hand side. The default degree is 2, corresponding to second-order differential equations.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/QuestBase.jl/blob/v0.3.4/src/DifferentialEquation.jl#L156" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='QuestBase.get_equations' href='#QuestBase.get_equations'><span class="jlbinding">QuestBase.get_equations</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
get_equations(eom::DifferentialEquation) -> Vector{Equation}

```


Return the equations of `eom`.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/QuestBase.jl/blob/v0.3.4/src/DifferentialEquation.jl#L149" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicBalance.get_harmonic_equations' href='#HarmonicBalance.get_harmonic_equations'><span class="jlbinding">HarmonicBalance.get_harmonic_equations</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
get_harmonic_equations(
    diff_eom::DifferentialEquation;
    fast_time,
    slow_time,
    degree,
    jacobian
) -> HarmonicEquation

```


Apply the harmonic ansatz, followed by the slow-flow, Fourier transform and dropping higher-order derivatives to obtain a set of ODEs (the harmonic equations) governing the harmonics of `diff_eom`.

The harmonics evolve in `slow_time`, the oscillating terms themselves in `fast_time`. If no input is used, a variable T is defined for `slow_time` and `fast_time` is taken as the independent variable of `diff_eom`.

By default, all products of order &gt; 1 of `slow_time`-derivatives are dropped, which means the equations are linear in the time-derivatives.

**Example**

```julia
julia> @variables t, x(t), ω0, ω, F;

# enter the simple harmonic oscillator
julia> diff_eom = DifferentialEquation( d(x,t,2) + ω0^2 * x ~ F *cos(ω*t), x);

# expand x in the harmonic ω
julia> add_harmonic!(diff_eom, x, ω);

# get equations for the harmonics evolving in the slow time T
julia> harmonic_eom = get_harmonic_equations(diff_eom)

A set of 2 harmonic equations
Variables: u1(T), v1(T)
Parameters: ω0, ω, F

Harmonic ansatz:
x(t) = u1*cos(ωt) + v1*sin(ωt)

Harmonic equations:

(ω0^2)*u1(T) + (2//1)*ω*Differential(T)(v1(T)) - (ω^2)*u1(T) ~ F

(ω0^2)*v1(T) - (ω^2)*v1(T) - (2//1)*ω*Differential(T)(u1(T)) ~ 0
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/7c6547d36322e8ce7799e339fc4303d4dac76bbc/src/HarmonicEquation.jl#L128-L169" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicBalance.get_krylov_equations' href='#HarmonicBalance.get_krylov_equations'><span class="jlbinding">HarmonicBalance.get_krylov_equations</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
get_krylov_equations(
    diff_eom::DifferentialEquation;
    order,
    fast_time,
    slow_time
)

```


Apply the Krylov-Bogoliubov averaging method to a specific `order` to obtain a set of ODEs (the slow-flow equations) governing the harmonics of `diff_eom`.

The harmonics evolve in `slow_time`, the oscillating terms themselves in `fast_time`. If no input is used, a variable T is defined for `slow_time` and `fast_time` is taken as the independent variable of `diff_eom`.

Krylov-Bogoliubov averaging method can be applied up to `order = 2`.

**Example**

```julia
julia> @variables t, x(t), ω0, ω, F;

# enter the simple harmonic oscillator
julia> diff_eom = DifferentialEquation( d(x,t,2) + ω0^2 * x ~ F *cos(ω*t), x);

# expand x in the harmonic ω
julia> add_harmonic!(diff_eom, x, ω);

# get equations for the harmonics evolving in the slow time T to first order
julia> harmonic_eom = get_krylov_equations(diff_eom, order = 1)

A set of 2 harmonic equations
Variables: u1(T), v1(T)
Parameters: ω, F, ω0

Harmonic ansatz:
xˍt(t) =
x(t) = u1(T)*cos(ωt) + v1(T)*sin(ωt)

Harmonic equations:

((1//2)*(ω^2)*v1(T) - (1//2)*(ω0^2)*v1(T)) / ω ~ Differential(T)(u1(T))

((1//2)*(ω0^2)*u1(T) - (1//2)*F - (1//2)*(ω^2)*u1(T)) / ω ~ Differential(T)(v1(T))
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/7c6547d36322e8ce7799e339fc4303d4dac76bbc/src/krylov-bogoliubov.jl#L4" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='QuestBase.add_harmonic!' href='#QuestBase.add_harmonic!'><span class="jlbinding">QuestBase.add_harmonic!</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
add_harmonic!(diff_eom::DifferentialEquation, var::Num, ω)

```


Add the harmonic `ω` to the harmonic ansatz used to expand the variable `var` in `diff_eom`.

**Example**

**define the simple harmonic oscillator and specify that x(t) oscillates with frequency ω**

```julia
julia> @variables t, x(t), y(t), ω0, ω, F, k;
julia> diff_eq = DifferentialEquation(d(x,t,2) + ω0^2 * x ~ F * cos(ω*t), x);
julia> add_harmonic!(diff_eq, x, ω) # expand x using ω

System of 1 differential equations
Variables:       x(t)
Harmonic ansatz: x(t) => ω;

(ω0^2)*x(t) + Differential(t)(Differential(t)(x(t))) ~ F*cos(t*ω)
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/QuestBase.jl/blob/v0.3.4/src/DifferentialEquation.jl#L124" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='QuestBase.get_independent_variables' href='#QuestBase.get_independent_variables'><span class="jlbinding">QuestBase.get_independent_variables</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
get_independent_variables(
    diff_eom::DifferentialEquation
) -> Any

```


Return the independent dependent variables of `diff_eom`.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/QuestBase.jl/blob/v0.3.4/src/DifferentialEquation.jl#L115" target="_blank" rel="noreferrer">source</a></Badge>



```julia
get_independent_variables(
    eom::HarmonicEquation
) -> Vector{Num}

```


Return the independent variables (typically time) of `eom`.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/QuestBase.jl/blob/v0.3.4/src/HarmonicEquation.jl#L120" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='Symbolics.get_variables' href='#Symbolics.get_variables'><span class="jlbinding">Symbolics.get_variables</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
get_variables(diff_eom::DifferentialEquation) -> Vector{Num}

```


Return the dependent variables of `diff_eom`.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/QuestBase.jl/blob/v0.3.4/src/DifferentialEquation.jl#L95" target="_blank" rel="noreferrer">source</a></Badge>



Returns the symbols of a `HarmonicVariable`.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/QuestBase.jl/blob/v0.3.4/src/HarmonicVariable.jl#L110" target="_blank" rel="noreferrer">source</a></Badge>



```julia
get_variables(eom::HarmonicEquation) -> Vector{Num}

```


Get the internal symbols of the independent variables of `eom`.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/QuestBase.jl/blob/v0.3.4/src/HarmonicEquation.jl#L72" target="_blank" rel="noreferrer">source</a></Badge>

</details>


## Solving and transforming solutions {#Solving-and-transforming-solutions}
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.get_steady_states' href='#HarmonicSteadyState.get_steady_states'><span class="jlbinding">HarmonicSteadyState.get_steady_states</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
get_steady_states(
    prob::HomotopyContinuationProblem,
    method::HomotopyContinuationMethod;
    show_progress=true,
    sorting=:nearest,
    classify_default=true,
    verbose=false
    )
```


Solves `problem` with the `method` over the ranges specified by `swept_parameters`, keeping `fixed_parameters` constant. `swept_parameters` accepts pairs mapping symbolic variables to arrays or ranges. `fixed_parameters` accepts pairs mapping symbolic variables to numbers.

**Keyword arguments**
- `show_progress`: Indicate whether a progress bar should be displayed.
  
- `sorting`: the method used by `sort_solutions` to get continuous solutions branches.   The current options are `:hilbert` (1D sorting along a Hilbert curve), `:nearest`   (nearest-neighbor sorting) and `:none`.
  
- `classify_default`: If `true`, the solutions will be classified using the default   classification method.
  

**Example**

solving a simple harmonic oscillator $m \ddot{x} + γ \dot{x} + ω_0^2 x = F \cos(ωt)$ to obtain the response as a function of $ω$

```julia
# having obtained a HomotopyContinuationProblem object, let's find steady states
julia> range = (ω => range(0.8, 1.2, 100) ) # 100 parameter sets to solve
julia> fixed = ParameterList(m => 1, γ => 0.01, F => 0.5, ω_0 => 1)
julia> get_steady_states(problem, range, fixed)

A steady state result for 100 parameter points

    Solution branches:   1
       of which real:    1
       of which stable:  1

    Classes: stable, physical, Hopf, binary_labels

```


It is also possible to perform 2-dimensional sweeps.

```julia
# The swept parameters take precedence over fixed -> use the same fixed
julia> range = (ω => range(0.8,1.2,100), F => range(0.1,1.0,10) )

# The swept parameters take precedence over fixed -> the F in fixed is now ignored
julia> get_steady_states(problem, range, fixed)

A steady state result for 1000 parameter points

    Solution branches:   1
       of which real:    1
       of which stable:  1

    Classes: stable, physical, Hopf, binary_labels
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/solve_homotopy.jl#L1-L61" target="_blank" rel="noreferrer">source</a></Badge>

</details>


### Methods {#Methods}
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.WarmUp' href='#HarmonicSteadyState.WarmUp'><span class="jlbinding">HarmonicSteadyState.WarmUp</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
WarmUp
```


The Warm Up method prepares a warmup system with the Total Degree method using the parameter at `index` perturbed by `perturbation_size`. The warmup system is used to perform a homotopy using all other systems in the parameter sweep. It is very efficient for systems with minimal bifurcation in the parameter sweep. The Warm Up method should in theory guarantee to find all solutions, however, if the `start_parameters` is not proper (to close to the real line) it could miss some solutions.

See[HomotopyContinuation.jl](https://www.juliahomotopycontinuation.org/guides/many-systems/) for more information.

**Fields**
- `warm_up_method::Union{Polyhedral{T}, TotalDegree{T}} where T`: Method used for the warmup system.
  
- `start_parameters::Vector`: Start parameters.
  
- `thread::Bool`: Boolean indicating if threading is enabled.
  
- `check_zero::Bool`: Check if zero is a root
  
- `tracker_options::HomotopyContinuation.TrackerOptions`: Options for the tracker.
  
- `endgame_options::HomotopyContinuation.EndgameOptions`: Options for the endgame.
  
- `compile::Union{Bool, Symbol}`: Compilation options.
  
- `seed::UInt32`: Seed for random number generation.
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/methods.jl#L117-L132" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.TotalDegree' href='#HarmonicSteadyState.TotalDegree'><span class="jlbinding">HarmonicSteadyState.TotalDegree</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
TotalDegree
```


The Total Degree homotopy method performs a homotopy $H(x, t) = γ t G(x) + (1-t) F(x)$ from the trivial polynomial system $F(x) =xᵢ^{dᵢ} +aᵢ$ with the maximal degree $dᵢ$ determined by the [Bezout bound](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem). The method guarantees to find all solutions, however, it comes with a high computational cost. See [HomotopyContinuation.jl](https://www.juliahomotopycontinuation.org/guides/totaldegree/) for more information.

**Fields**
- `gamma::Complex`: Complex multiplying factor of the start system G(x) for the homotopy
  
- `thread::Bool`: Boolean indicating if threading is enabled.
  
- `tracker_options::HomotopyContinuation.TrackerOptions`: Options for the tracker.
  
- `endgame_options::HomotopyContinuation.EndgameOptions`: Options for the endgame.
  
- `compile::Union{Bool, Symbol}`: Compilation options.
  
- `seed::UInt32`: Seed for random number generation.
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/methods.jl#L15-L27" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.Polyhedral' href='#HarmonicSteadyState.Polyhedral'><span class="jlbinding">HarmonicSteadyState.Polyhedral</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
Polyhedral
```


The Polyhedral homotopy method constructs a homotopy based on the polyhedral structure of the polynomial system. It is more efficient than the Total Degree method for sparse systems, meaning most of the coefficients are zero. It can be especially useful if you don&#39;t need to find the zero solutions (`only_non_zero = true`), resulting in a speed up. See [HomotopyContinuation.jl](https://www.juliahomotopycontinuation.org/guides/polyhedral/) for more information.

**Fields**
- `only_non_zero::Bool`: Boolean indicating if only non-zero solutions are considered.
  
- `thread::Bool`: Boolean indicating if threading is enabled.
  
- `tracker_options::HomotopyContinuation.TrackerOptions`: Options for the tracker.
  
- `endgame_options::HomotopyContinuation.EndgameOptions`: Options for the endgame.
  
- `compile::Union{Bool, Symbol}`: Compilation options.
  
- `seed::UInt32`: Seed for random number generation.
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/methods.jl#L64-L76" target="_blank" rel="noreferrer">source</a></Badge>

</details>


### Access solutions {#Access-solutions}
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.get_solutions' href='#HarmonicSteadyState.get_solutions'><span class="jlbinding">HarmonicSteadyState.get_solutions</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
get_solutions(
    res::Result, x::String;
    branches=1:branch_count(res), realify=false, class=["stable"], not_class=[]
    )
get_solutions(res::Result; branches=1:branch_count(res), class=["stable"], not_class=[])
```


Extract solution vectors from a `Result` object based on specified filtering criteria given by the `class` keywords. The first method allows extracting a specific solution component by name `x`. The second method returns complete solution vectors.

**Keyword arguments**
- `branches=1:branch_count(res)`: Range of branches to include in the output
  
- `realify=false`: Whether to convert complex solutions to real form
  
- `class=["physical", "stable"]`: Array of classification labels to include
  
- `not_class=[]`: Array of classification labels to exclude
  

**Returns**

Filtered solution vectors matching the specified criteria


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/transform_solutions.jl#L196-L215" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.get_branches' href='#HarmonicSteadyState.get_branches'><span class="jlbinding">HarmonicSteadyState.get_branches</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
get_branches(
    res::Result, x::String;
    branches=1:branch_count(res), realify=false, class=["stable"], not_class=[]
    )
get_solutions(res::Result; branches=1:branch_count(res), class=["stable"], not_class=[])
```


Extract solution vectors from a `Result` object based on specified filtering criteria given by the `class` keywords. It allows extracting a specific solution component by name `x`.

**Keyword arguments**
- `branches=1:branch_count(res)`: Range of branches to include in the output
  
- `realify=true`: Whether to convert complex solutions to real form
  
- `class=["physical", "stable"]`: Array of classification labels to include
  
- `not_class=[]`: Array of classification labels to exclude
  

**Returns**

Filtered vector of each branch matching the specified criteria


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/transform_solutions.jl#L236-L255" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.attractors' href='#HarmonicSteadyState.attractors'><span class="jlbinding">HarmonicSteadyState.attractors</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
attractors(res::Result{D}; class="stable", not_class=[]) where D
```


Extract attractors from a [`Result`](/manual/solving_harmonics#HarmonicSteadyState.Result-manual-solving_harmonics) object. Returns an array of dictionaries, where each dictionary maps branch identifier to the attractor. The attractors are filtered by their corresponding class.

**Keyword arguments**

Class selection done by passing `String` or `Vector{String}` as kwarg:

```
class::String       :   only count solutions in this class ("all" --> plot everything)
not_class::String   :   do not count solutions in this class
```


**Returns**

`Array{Dict,D}`: Vector of dictionaries mapping branch indices to points satisfying   the stability criteria at each parameter value


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/Result.jl#L123-L140" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.phase_diagram' href='#HarmonicSteadyState.phase_diagram'><span class="jlbinding">HarmonicSteadyState.phase_diagram</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
phase_diagram(res::Result{D}; class="physical", not_class=[]) where {D}
```


Calculate the phase diagram from a `Result` object by summing over the number of states at each swept parameters.

**Keyword arguments**

Class selection done by passing `String` or `Vector{String}` as kwarg:

```
class::String       :   only count solutions in this class ("all" --> plot everything)
not_class::String   :   do not count solutions in this class
```


**Returns**
- Array{Int64,D}: Sum of states after applying the specified class masks
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/Result.jl#L92-L106" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.get_single_solution' href='#HarmonicSteadyState.get_single_solution'><span class="jlbinding">HarmonicSteadyState.get_single_solution</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
get_single_solution(
    res::HarmonicSteadyState.Result{D, S, P, F} where F<:FunctionWrappers.FunctionWrapper{Array{S, 2}, Tuple{Array{S, 1}}};
    branch,
    index
)

```


Return an ordered dictionary specifying all variables and parameters of the solution in `result` on `branch` at the position `index`.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/transform_solutions.jl#L1" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.transform_solutions' href='#HarmonicSteadyState.transform_solutions'><span class="jlbinding">HarmonicSteadyState.transform_solutions</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
transform_solutions(
    res::HarmonicSteadyState.Result{D, S, ParType, F} where {ParType<:Number, F<:FunctionWrappers.FunctionWrapper{Array{S, 2}, Tuple{Array{S, 1}}}},
    func;
    branches,
    realify
) -> Vector

```


Takes a `Result` object and a string `f` representing a Symbolics.jl expression. Returns an array with the values of `f` evaluated for the respective solutions. Additional substitution rules can be specified in `rules` in the format `("a" => val)` or `(a => val)`


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/transform_solutions.jl#L66" target="_blank" rel="noreferrer">source</a></Badge>

</details>


### Classify {#Classify}
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.classify_solutions!' href='#HarmonicSteadyState.classify_solutions!'><span class="jlbinding">HarmonicSteadyState.classify_solutions!</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
classify_solutions!(
    res::HarmonicSteadyState.Result,
    func::Union{Function, String},
    name::String;
    physical
) -> Any

```


Creates a solution class in `res` using the function `func` (parsed into Symbolics.jl input). The new class is labeled with `name` and stored under `res.classes[name]`. By default, only physical (real) solutions are classified, and `false` is returned for the rest. To also classify complex solutions, set `physical=false`.

**Example**

```julia
# solve a previously-defined problem
res = get_steady_states(problem, swept_parameters, fixed_parameters)

# classify, store in result.classes["large_amplitude"]
classify_solutions!(res, "sqrt(u1^2 + v1^2) > 1.0" , "large_amplitude")
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/classification.jl#L1" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.get_class' href='#HarmonicSteadyState.get_class'><span class="jlbinding">HarmonicSteadyState.get_class</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
get_class(
    res::HarmonicSteadyState.Result,
    branch::Int64,
    class::String
) -> Any

```


Returns an array of booleans classifying `branch` in the solutions in `res` according to `class`.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/classification.jl#L43" target="_blank" rel="noreferrer">source</a></Badge>



```julia
get_class(
    soln::HarmonicSteadyState.Result,
    class::String
) -> Vector

```


Returns an array of booleans classifying each branch in the solutions in `res` according to `class`.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/classification.jl#L53" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.filter_result!' href='#HarmonicSteadyState.filter_result!'><span class="jlbinding">HarmonicSteadyState.filter_result!</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
filter_result!(
    res::HarmonicSteadyState.Result,
    class::String
)

```


Removes all solution branches from `res` where NONE of the solution falls into `class`. Typically used to filter out unphysical solutions to prevent huge file sizes.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/classification.jl#L189" target="_blank" rel="noreferrer">source</a></Badge>

</details>


### Plotting {#Plotting}
<details class='jldocstring custom-block' open>
<summary><a id='RecipesBase.plot' href='#RecipesBase.plot'><span class="jlbinding">RecipesBase.plot</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



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



```julia
plot(soln::ODESolution, f::String, harm_eq::HarmonicEquation; kwargs...)
```


Plot a function `f` of a time-dependent solution `soln` of `harm_eq`.

**As a function of time**

```
plot(soln::ODESolution, f::String, harm_eq::HarmonicEquation; kwargs...)
```


`f` is parsed by Symbolics.jl

**parametric plots**

```
plot(soln::ODESolution, f::Vector{String}, harm_eq::HarmonicEquation; kwargs...)
```


Parametric plot of f[1] against f[2]

Also callable as plot!


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/ext/PlotsExt/time_evolution.jl#L1-L19" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='RecipesBase.plot!' href='#RecipesBase.plot!'><span class="jlbinding">RecipesBase.plot!</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



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

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.plot_phase_diagram' href='#HarmonicSteadyState.plot_phase_diagram'><span class="jlbinding">HarmonicSteadyState.plot_phase_diagram</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



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

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.plot_spaghetti' href='#HarmonicSteadyState.plot_spaghetti'><span class="jlbinding">HarmonicSteadyState.plot_spaghetti</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



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


## Limit cycles {#Limit-cycles}
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.LimitCycles.get_limit_cycles' href='#HarmonicSteadyState.LimitCycles.get_limit_cycles'><span class="jlbinding">HarmonicSteadyState.LimitCycles.get_limit_cycles</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
get_limit_cycles(
    eom::HarmonicEquation, method::SteadyStateMethod, swept, fixed, ω_lc; kwargs...)
```


Variant of `get_steady_states` for a limit cycle problem characterised by a Hopf frequency (usually called ω_lc)

Solutions with ω_lc = 0 are labelled unphysical since this contradicts the assumption of distinct harmonic variables corresponding to distinct harmonics.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/LimitCycles/gauge_fixing.jl#L106-L113" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.LimitCycles.get_cycle_variables' href='#HarmonicSteadyState.LimitCycles.get_cycle_variables'><span class="jlbinding">HarmonicSteadyState.LimitCycles.get_cycle_variables</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
get_cycle_variables(
    eom::HarmonicEquation,
    ω_lc::Num
) -> Vector{QuestBase.HarmonicVariable}

```


Return the harmonic variables which participate in the limit cycle labelled by `ω_lc`.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/LimitCycles/gauge_fixing.jl#L22" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.LimitCycles.add_pairs!' href='#HarmonicSteadyState.LimitCycles.add_pairs!'><span class="jlbinding">HarmonicSteadyState.LimitCycles.add_pairs!</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
add_pairs!(eom::DifferentialEquation; ω_lc::Num, n=1)
```


Add a limit cycle harmonic `ω_lc` to the system Equivalent to adding `n` pairs of harmonics ω +- ω_lc for each existing ω.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/LimitCycles/gauge_fixing.jl#L9-L14" target="_blank" rel="noreferrer">source</a></Badge>

</details>


## Linear Response {#Linear-Response}
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.LinearResponse.eigenvalues-Union{Tuple{P}, Tuple{S}, Tuple{D}, Tuple{HarmonicSteadyState.Result{D, S, P, F} where F<:FunctionWrappers.FunctionWrapper{Matrix{S}, Tuple{Vector{S}}}, Any}} where {D, S, P}' href='#HarmonicSteadyState.LinearResponse.eigenvalues-Union{Tuple{P}, Tuple{S}, Tuple{D}, Tuple{HarmonicSteadyState.Result{D, S, P, F} where F<:FunctionWrappers.FunctionWrapper{Matrix{S}, Tuple{Vector{S}}}, Any}} where {D, S, P}'><span class="jlbinding">HarmonicSteadyState.LinearResponse.eigenvalues</span></a> <Badge type="info" class="jlObjectType jlMethod" text="Method" /></summary>



```julia
eigenvalues(res::Result, branch; class=["physical"])
```


Calculate the eigenvalues of the Jacobian matrix of the harmonic equations of a `branch` for a one dimensional sweep in the [Result](/manual/solving_harmonics#HarmonicSteadyState.Result-manual-solving_harmonics) struct.

**Arguments**
- `res::Result`: Result object containing solutions and jacobian information
  
- `branch`: Index of the solution branch to analyze
  
- `class=["physical"]`: Filter for solution classes to include, defaults to physical solutions
  

**Returns**
- Vector of filtered eigenvalues along the solution branch
  

**Notes**
- Currently only supports 1-dimensional parameter sweeps (D=1)
  
- Will throw an error if branch contains NaN values
  
- Eigenvalues are filtered based on the specified solution classes
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/LinearResponse/response.jl#L123-L141" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.LinearResponse.eigenvectors-Union{Tuple{P}, Tuple{S}, Tuple{D}, Tuple{HarmonicSteadyState.Result{D, S, P, F} where F<:FunctionWrappers.FunctionWrapper{Matrix{S}, Tuple{Vector{S}}}, Any}} where {D, S, P}' href='#HarmonicSteadyState.LinearResponse.eigenvectors-Union{Tuple{P}, Tuple{S}, Tuple{D}, Tuple{HarmonicSteadyState.Result{D, S, P, F} where F<:FunctionWrappers.FunctionWrapper{Matrix{S}, Tuple{Vector{S}}}, Any}} where {D, S, P}'><span class="jlbinding">HarmonicSteadyState.LinearResponse.eigenvectors</span></a> <Badge type="info" class="jlObjectType jlMethod" text="Method" /></summary>



```julia
eigenvectors(res::Result, branch; class=["physical"])
```


get_Jacobiannch to analyze
- `class=["physical"]`: Filter for solution classes to include, defaults to physical solutions
  

**Returns**
- Vector of filtered eigenvectors along the solution branch
  

**Notes**
- Currently only supports 1-dimensional parameter sweeps (D=1)
  
- Will throw an error if branch contains NaN values
  
- Eigenvectors are filtered based on the specified solution classes
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/LinearResponse/response.jl#L166-L178" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.LinearResponse.get_forward_transmission_response-Tuple{HarmonicSteadyState.Result, Int64, Any, Int64, Any}' href='#HarmonicSteadyState.LinearResponse.get_forward_transmission_response-Tuple{HarmonicSteadyState.Result, Int64, Any, Int64, Any}'><span class="jlbinding">HarmonicSteadyState.LinearResponse.get_forward_transmission_response</span></a> <Badge type="info" class="jlObjectType jlMethod" text="Method" /></summary>



```julia
get_forward_transmission_response(
    result::HarmonicSteadyState.Result,
    op_index::Int64,
    Ω_range,
    branch::Int64,
    external_damping;
    class
) -> Any

```


Compute the response matrix or susceptibility to a probe in the rotating frame. Observables like forward_transmission response spectrum, i.e, how much of an input signal applied at port 1 emerges at port 2, can be computed using the susceptibility. Colloquially known as S21 parameter in microwave engineering. The amplitude and phase of S21 tell you how much signal is transmitted and with what delay or phase shift:
- If S21 ≈ 1 (or 0 dB), the system transmits all power from input to output.
  
- If S21 ≈ 0 (or very negative dB), very little signal is transmitted.
  

**Arguments**
- `result::Result`: Result object containing the system&#39;s solutions
  
- `op_index::Int`: Index of operator in mean field equations to evaluate response for
  
- `Ω_range`: Range of frequencies to evaluate
  
- `branch::Int`: Branch number to analyze
  
- `class="stable"`: Class of solutions to evaluate response for
  

**Returns**
- `χ`: Complex response matrix where rows correspond to frequencies and columns to solutions
  

**Example**

```julia
Ω_range = range(-0.2, 0.2, 500)
external_damping=0.05

S21 = get_forward_transmission_response(
        result, 1 #=variable=#, Ω_range, 3 #=branch=#; external_damping);

S21_log = 20 .* log10.(abs.(S21)) # expressed in dB
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/LinearResponse/input_output.jl#L88" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.LinearResponse.get_jacobian_response-Union{Tuple{P}, Tuple{S}, Tuple{D}, Tuple{HarmonicSteadyState.Result{D, S, P, F} where F<:FunctionWrappers.FunctionWrapper{Matrix{S}, Tuple{Vector{S}}}, Num, Any, Int64}} where {D, S, P}' href='#HarmonicSteadyState.LinearResponse.get_jacobian_response-Union{Tuple{P}, Tuple{S}, Tuple{D}, Tuple{HarmonicSteadyState.Result{D, S, P, F} where F<:FunctionWrappers.FunctionWrapper{Matrix{S}, Tuple{Vector{S}}}, Num, Any, Int64}} where {D, S, P}'><span class="jlbinding">HarmonicSteadyState.LinearResponse.get_jacobian_response</span></a> <Badge type="info" class="jlObjectType jlMethod" text="Method" /></summary>



```julia
get_jacobian_response(
    res::HarmonicSteadyState.Result{D, S, P, F} where F<:FunctionWrappers.FunctionWrapper{Array{S, 2}, Tuple{Array{S, 1}}},
    nat_var::Num,
    Ω_range,
    branch::Int64;
    show_progress
) -> Matrix

```


Calculate the Jacobian response spectrum for a given system. Computes the magnitude of the Jacobian response for stable solutions across specified frequency ranges.

**Arguments**
- `res::Result`: Result object containing the system&#39;s solutions
  
- `nat_var::Num`: Natural variable to evaluate in the response
  
- `Ω_range`: Range of frequencies to evaluate
  
- `branch::Int` or `followed_branches::Vector{Int}`: Branch number(s) to analyze
  
- `show_progress=true`: Whether to show a progress bar
  

**Returns**
- Array{P,2}: Complex response matrix where rows correspond to frequencies and columns to solutions
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/LinearResponse/response.jl#L1" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.LinearResponse.get_rotframe_jacobian_response-Union{Tuple{P}, Tuple{S}, Tuple{D}, Tuple{HarmonicSteadyState.Result{D, S, P, F} where F<:FunctionWrappers.FunctionWrapper{Matrix{S}, Tuple{Vector{S}}}, Any, Int64}} where {D, S, P}' href='#HarmonicSteadyState.LinearResponse.get_rotframe_jacobian_response-Union{Tuple{P}, Tuple{S}, Tuple{D}, Tuple{HarmonicSteadyState.Result{D, S, P, F} where F<:FunctionWrappers.FunctionWrapper{Matrix{S}, Tuple{Vector{S}}}, Any, Int64}} where {D, S, P}'><span class="jlbinding">HarmonicSteadyState.LinearResponse.get_rotframe_jacobian_response</span></a> <Badge type="info" class="jlObjectType jlMethod" text="Method" /></summary>



```julia
get_rotframe_jacobian_response(
    res::HarmonicSteadyState.Result{D, S, P, F} where F<:FunctionWrappers.FunctionWrapper{Array{S, 2}, Tuple{Array{S, 1}}},
    Ω_range,
    branch::Int64;
    show_progress,
    damping_mod
)

```


Calculate the rotating frame Jacobian response for a given branch. Computes the rotating frame Jacobian response by evaluating eigenvalues of the numerical Jacobian and calculating the response magnitude for each frequency in the range.

**Arguments**
- `res::Result`: Result object containing the system&#39;s solutions
  
- `Ω_range`: Range of frequencies to evaluate
  
- `branch::Int`: Branch number to analyze
  
- `show_progress=true`: Whether to show a progress bar
  
- `damping_mod`: Damping modification parameter
  

**Returns**
- Array{P,2}: Response matrix in the rotating frame
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/LinearResponse/response.jl#L70" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.LinearResponse.get_susceptibility-Tuple{HarmonicSteadyState.Result, Int64, Any, Int64}' href='#HarmonicSteadyState.LinearResponse.get_susceptibility-Tuple{HarmonicSteadyState.Result, Int64, Any, Int64}'><span class="jlbinding">HarmonicSteadyState.LinearResponse.get_susceptibility</span></a> <Badge type="info" class="jlObjectType jlMethod" text="Method" /></summary>



```julia
get_susceptibility(
    result::HarmonicSteadyState.Result,
    op_index::Int64,
    Ω_range,
    branch::Int64;
    class
) -> Matrix{ComplexF64}

```


Compute the response matrix or susceptibility to a probe in the rotating frame. Observables like forward_transmission response spectrum, i.e, how much of an input signal applied at port 1 emerges at port 2, can be computed using the susceptibility.

**Arguments**
- `result::Result`: Result object containing the system&#39;s solutions
  
- `op_index::Int`: Index of operator in mean field equations to evaluate response for
  
- `Ω_range`: Range of frequencies to evaluate
  
- `branch::Int`: Branch number to analyze
  
- `class="stable"`: Class of solutions to evaluate response for
  

**Returns**
- `χ`: Complex response matrix where rows correspond to frequencies and columns to solutions
  

**Example**

```julia
Ω_range = range(-0.2, 0.2, 500)

χ = get_susceptibility(result, 1#=variable=#, Ω_range, 3 #=branch=#);

κ_ext = 0.05
S21 = 1 .- χ*κ_ext/2
S21_log = 20 .* log10.(abs.(S21)) # expressed in dB
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/LinearResponse/input_output.jl#L21" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicBalance.get_Jacobian' href='#HarmonicBalance.get_Jacobian'><span class="jlbinding">HarmonicBalance.get_Jacobian</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
get_Jacobian(eom)

```


Obtain the symbolic Jacobian matrix of `eom`. This is the linearised left-hand side of F(u) = du/dT.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/7c6547d36322e8ce7799e339fc4303d4dac76bbc/src/Jacobian.jl#L6" target="_blank" rel="noreferrer">source</a></Badge>



Obtain a Jacobian from a `DifferentialEquation` by first converting it into a `HarmonicEquation`. 


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/7c6547d36322e8ce7799e339fc4303d4dac76bbc/src/Jacobian.jl#L24" target="_blank" rel="noreferrer">source</a></Badge>



Get the Jacobian of a set of equations `eqs` with respect to the variables `vars`. 


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/7c6547d36322e8ce7799e339fc4303d4dac76bbc/src/Jacobian.jl#L33" target="_blank" rel="noreferrer">source</a></Badge>

</details>


## Extensions {#Extensions}

### OrdinaryDiffEq {#OrdinaryDiffEq}
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.AdiabaticSweep' href='#HarmonicSteadyState.AdiabaticSweep'><span class="jlbinding">HarmonicSteadyState.AdiabaticSweep</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



Represents a sweep of one or more parameters of a `HarmonicEquation`. During a sweep, the selected parameters vary linearly over some timespan and are constant elsewhere.

Sweeps of different variables can be combined using `+`.

**Fields**
- `functions::Dict{Num, Function}`: Maps each swept parameter to a function.
  

**Examples**

```julia
# create a sweep of parameter a from 0 to 1 over time 0 -> 100
julia> @variables a,b;
julia> sweep = AdiabaticSweep(a => [0., 1.], (0, 100));
julia> sweep[a](50)
0.5
julia> sweep[a](200)
1.0

# do the same, varying two parameters simultaneously
julia> sweep = AdiabaticSweep([a => [0.,1.], b => [0., 1.]], (0,100))
```


Successive sweeps can be combined,

```julia
sweep1 = AdiabaticSweep(ω => [0.95, 1.0], (0, 2e4))
sweep2 = AdiabaticSweep(λ => [0.05, 0.01], (2e4, 4e4))
sweep = sweep1 + sweep2
```


multiple parameters can be swept simultaneously,

```julia
sweep = AdiabaticSweep([ω => [0.95;1.0], λ => [5e-2;1e-2]], (0, 2e4))
```


and custom sweep functions may be used.

```julia
ωfunc(t) = cos(t)
sweep = AdiabaticSweep(ω => ωfunc)
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/src/types.jl#L9-L48" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.follow_branch' href='#HarmonicSteadyState.follow_branch'><span class="jlbinding">HarmonicSteadyState.follow_branch</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
follow_branch(
    starting_branch::Int64,
    res::HarmonicSteadyState.Result;
    y,
    sweep,
    tf,
    ϵ
) -> Tuple{Any, Any}

```


Return the indexes and values following stable branches along a 1D sweep. When a no stable solutions are found (e.g. in a bifurcation), the next stable solution is calculated by time evolving the previous solution (quench).

**Keyword arguments**
- `y`:  Dependent variable expression (parsed into Symbolics.jl) to evaluate the followed solution branches on .
  
- `sweep`: Direction for the sweeping of solutions. A `right` (`left`) sweep proceeds from the first (last) solution, ordered as the sweeping parameter.
  
- `tf`: time to reach steady
  
- `ϵ`: small random perturbation applied to quenched solution, in a bifurcation in order to favour convergence in cases where multiple solutions are identically accessible (e.g. symmetry breaking into two equal amplitude states)
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/ext/TimeEvolution/hysteresis_sweep.jl#L15" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.plot_1D_solutions_branch' href='#HarmonicSteadyState.plot_1D_solutions_branch'><span class="jlbinding">HarmonicSteadyState.plot_1D_solutions_branch</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
plot_1D_solutions_branch(
    starting_branch::Int64,
    res::HarmonicSteadyState.Result;
    x,
    y,
    sweep,
    tf,
    ϵ,
    class,
    not_class,
    kwargs...
)

```


Plot a bifurcation diagram from a continuation sweep starting from `starting_branch` using the [Result](/manual/solving_harmonics#HarmonicSteadyState.Result-manual-solving_harmonics) struct `res`. Time integration is used to determine what follow up branch in the continuation is.

**Keyword arguments**
- `x::String`: Expression for the x-axis variable
  
- `y::String`: Expression for the y-axis variable
  
- `sweep::String="right"`: Direction to follow the branch (&quot;right&quot; or &quot;left&quot;)
  
- `tf::Real=10000`: Final time for time integration
  
- `ϵ::Real=1e-4`: Tolerance for branch following
  
- `kwargs...`: Additional plotting arguments passed to Plots.jl
  
- Class selection done by passing `String` or `Vector{String}` as kwarg:
  class::String       :   only count solutions in this class (&quot;all&quot; –&gt; plot everything)   not_class::String   :   do not count solutions in this class
  

**Returns**
- A Plots.jl plot object containing the bifurcation diagram with the followed branch
  

**Description**

This function creates a bifurcation diagram using [`follow_branch`](/manual/API#HarmonicSteadyState.follow_branch). The followed branch is plotted as a dashed gray line.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/ext/PlotsExt/time_evolution.jl#L59" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.follow_branch-Tuple{Int64, HarmonicSteadyState.Result}-manual-API' href='#HarmonicSteadyState.follow_branch-Tuple{Int64, HarmonicSteadyState.Result}-manual-API'><span class="jlbinding">HarmonicSteadyState.follow_branch</span></a> <Badge type="info" class="jlObjectType jlMethod" text="Method" /></summary>



```julia
follow_branch(
    starting_branch::Int64,
    res::HarmonicSteadyState.Result;
    y,
    sweep,
    tf,
    ϵ
) -> Tuple{Any, Any}

```


Return the indexes and values following stable branches along a 1D sweep. When a no stable solutions are found (e.g. in a bifurcation), the next stable solution is calculated by time evolving the previous solution (quench).

**Keyword arguments**
- `y`:  Dependent variable expression (parsed into Symbolics.jl) to evaluate the followed solution branches on .
  
- `sweep`: Direction for the sweeping of solutions. A `right` (`left`) sweep proceeds from the first (last) solution, ordered as the sweeping parameter.
  
- `tf`: time to reach steady
  
- `ϵ`: small random perturbation applied to quenched solution, in a bifurcation in order to favour convergence in cases where multiple solutions are identically accessible (e.g. symmetry breaking into two equal amplitude states)
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/ext/TimeEvolution/hysteresis_sweep.jl#L15" target="_blank" rel="noreferrer">source</a></Badge>

</details>


### SteadyStateSweep {#SteadyStateSweep}
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.steady_state_sweep' href='#HarmonicSteadyState.steady_state_sweep'><span class="jlbinding">HarmonicSteadyState.steady_state_sweep</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
steady_state_sweep(prob::SteadyStateProblem, alg::DynamicSS; varied::Pair, kwargs...)
```


Sweeps through a range of parameter values using a dynamic steady state solver `DynamicSS` of the `SteadyStateDiffEq.jl` package. Given a steady state problem and a parameter to vary, computes the steady state solution for each value in the sweep range. The solutions are returned as a vector where each element corresponds to the steady state found at that parameter value.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/ext/SteadyStateDiffEqExt.jl#L12-L20" target="_blank" rel="noreferrer">source</a></Badge>



```julia
steady_state_sweep(prob_np::NonlinearProblem, prob_ss::SteadyStateProblem,
                  alg_np, alg_ss::DynamicSS; varied::Pair, kwargs...)
```


Performs a parameter sweep by combining nonlinear root `alg_np` and steady state solvers `alg_ss`. For each parameter value, it first attempts a direct nonlinear root solver and checks its stability. If the solution is unstable or not found, it switches to a dynamic steady state solver. This hybrid approach is much faster then only using a steady state solver.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/ext/SteadyStateDiffEqExt.jl#L39-L47" target="_blank" rel="noreferrer">source</a></Badge>

</details>


### ModelingToolkit {#ModelingToolkit}
<details class='jldocstring custom-block' open>
<summary><a id='SciMLBase.ODEProblem' href='#SciMLBase.ODEProblem'><span class="jlbinding">SciMLBase.ODEProblem</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



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



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/7c6547d36322e8ce7799e339fc4303d4dac76bbc/ext/ModelingToolkitExt.jl#L129" target="_blank" rel="noreferrer">source</a></Badge>



```julia
ODEProblem(
    eom::HarmonicEquation,
    fixed_parameters;
    sweep,
    u0,
    timespan,
    perturb_initial,
    kwargs...
)

```


Creates an ODEProblem object used by OrdinaryDiffEqTsit5.jl from the equations in `eom` to simulate time-evolution within `timespan`. `fixed_parameters` must be a dictionary mapping parameters+variables to numbers (possible to use a solution index, e.g. solutions[x][y] for branch y of solution x). If `u0` is specified, it is used as an initial condition; otherwise the values from `fixed_parameters` are used.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.1/ext/TimeEvolution/ODEProblem.jl#L3-L9" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='ModelingToolkit.System' href='#ModelingToolkit.System'><span class="jlbinding">ModelingToolkit.System</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



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



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/7c6547d36322e8ce7799e339fc4303d4dac76bbc/ext/ModelingToolkitExt.jl#L37" target="_blank" rel="noreferrer">source</a></Badge>



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



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/7c6547d36322e8ce7799e339fc4303d4dac76bbc/ext/ModelingToolkitExt.jl#L83" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SciMLBase.SteadyStateProblem' href='#SciMLBase.SteadyStateProblem'><span class="jlbinding">SciMLBase.SteadyStateProblem</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



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



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/7c6547d36322e8ce7799e339fc4303d4dac76bbc/ext/ModelingToolkitExt.jl#L202" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='SciMLBase.NonlinearProblem' href='#SciMLBase.NonlinearProblem'><span class="jlbinding">SciMLBase.NonlinearProblem</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



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



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/7c6547d36322e8ce7799e339fc4303d4dac76bbc/ext/ModelingToolkitExt.jl#L175" target="_blank" rel="noreferrer">source</a></Badge>

</details>

