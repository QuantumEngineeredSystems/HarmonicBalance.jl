
# Solving harmonic equations {#Solving-harmonic-equations}

Once a differential equation of motion has been defined in `DifferentialEquation` and converted to a [`HarmonicEquation`](/manual/API#QuestBase.HarmonicEquation), we may use the homotopy continuation method (as implemented in HomotopyContinuation.jl) to find steady states. This means that, having called `get_harmonic_equations`, we need to set all time-derivatives to zero and parse the resulting algebraic equations into a `Problem`.

`Problem` holds the steady-state equations, and (optionally) the symbolic Jacobian which is needed for stability / linear response calculations.

Once defined, a `Problem` can be solved for a set of input parameters using `get_steady_states` to obtain `Result`.
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.HomotopyContinuationProblem-manual-solving_harmonics' href='#HarmonicSteadyState.HomotopyContinuationProblem-manual-solving_harmonics'><span class="jlbinding">HarmonicSteadyState.HomotopyContinuationProblem</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
mutable struct HomotopyContinuationProblem{ParType<:Number, Jac<:FunctionWrappers.FunctionWrapper{Matrix{ComplexF64}, Tuple{Vector{ComplexF64}}}} <: HarmonicSteadyState.SteadyStateProblem
```


Holds a set of algebraic equations describing the steady state of a system.

**Fields**
- `variables::Vector{Num}`: The harmonic variables to be solved for.
  
- `parameters::Vector{Num}`: All symbols which are not the harmonic variables.
  
- `swept_parameters::OrderedCollections.OrderedDict{Num, Vector{ParType}} where ParType<:Number`: The swept parameters in the homotopy.
  
- `fixed_parameters::OrderedCollections.OrderedDict{Num, ParType} where ParType<:Number`: The fixed parameters in the homotopy.
  
- `system::HomotopyContinuation.ModelKit.System`: The input object for HomotopyContinuation.jl solver methods.
  
- `jacobian::FunctionWrappers.FunctionWrapper{Matrix{ComplexF64}, Tuple{Vector{ComplexF64}}}`: The Jacobian matrix (possibly symbolic or compiled function). If `Matrix{Nan}` and implicit function is compiled when a `Result` is created.
  
- `eom::HarmonicEquation`: The HarmonicEquation object used to generate this `HomotopyContinuationProblem`.
  

**Constructors**

```julia
HomotopyContinuationProblem(
    eom::HarmonicEquation,
    swept::AbstractDict,
    fixed::AbstractDict;
    compile_Jacobian::Bool=true,
)
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.3.2/src/Problem.jl#L8" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.get_steady_states-manual-solving_harmonics' href='#HarmonicSteadyState.get_steady_states-manual-solving_harmonics'><span class="jlbinding">HarmonicSteadyState.get_steady_states</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



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



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.3.2/src/solve_homotopy.jl#L1-L61" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.Result-manual-solving_harmonics' href='#HarmonicSteadyState.Result-manual-solving_harmonics'><span class="jlbinding">HarmonicSteadyState.Result</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
mutable struct Result{D, SolType<:Number, ParType<:Number, F<:FunctionWrappers.FunctionWrapper{Array{SolType<:Number, 2}, Tuple{Array{SolType<:Number, 1}}}}
```


Stores the steady states of a HarmonicEquation.

**Fields**
- `solutions::Array{Array{Vector{SolType}, 1}, D} where {D, SolType<:Number}`: The variable values of steady-state solutions.
  
- `swept_parameters::OrderedCollections.OrderedDict{Num, Vector{ParType}} where ParType<:Number`: Values of all parameters for all solutions.
  
- `fixed_parameters::OrderedCollections.OrderedDict{Num, ParType} where ParType<:Number`: The parameters fixed throughout the solutions.
  
- `problem::HarmonicSteadyState.HomotopyContinuationProblem{ParType, F} where {SolType<:Number, ParType<:Number, F<:FunctionWrappers.FunctionWrapper{Matrix{SolType}, Tuple{Vector{SolType}}}}`: The `HomotopyContinuationProblem` used to generate this.
  
- `classes::Dict{String, Array{BitVector, D}} where D`: Maps strings such as &quot;stable&quot;, &quot;physical&quot; etc to arrays of values, classifying the solutions (see method `classify_solutions!`).
  
- `binary_labels::Array{Int64}`: Create binary classification of the solutions, such that each solution point receives an identifier based on its permutation of stable branches (allows to distinguish between different phases, which may have the same number of stable solutions). It works by converting each bitstring `[is_stable(solution_1), is_stable(solution_2), ...,]` into unique labels.
  
- `jacobian::FunctionWrappers.FunctionWrapper{Matrix{SolType}, Tuple{Vector{SolType}}} where SolType<:Number`: The Jacobian function with `fixed_parameters` already substituted. Accepts a vector specifying the solution. If problem.jacobian is a symbolic matrix, this holds a compiled function.
  
- `seed::UInt32`: Seed used for the solver
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.3.2/src/Result.jl#L1" target="_blank" rel="noreferrer">source</a></Badge>

</details>


## Classifying solutions {#Classifying-solutions}

The solutions in `Result` are accompanied by similarly-sized boolean arrays stored in the dictionary `Result.classes`. The classes can be used by the plotting functions to show/hide/label certain solutions.

By default, classes &quot;physical&quot;, &quot;stable&quot; and &quot;binary_labels&quot; are created. User-defined classification is possible with `classify_solutions!`.
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.classify_solutions!-manual-solving_harmonics' href='#HarmonicSteadyState.classify_solutions!-manual-solving_harmonics'><span class="jlbinding">HarmonicSteadyState.classify_solutions!</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



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



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.3.2/src/classification.jl#L1" target="_blank" rel="noreferrer">source</a></Badge>

</details>


## Sorting solutions {#Sorting-solutions}

Solving a steady-state problem over a range of parameters returns a solution set for each parameter. For a continuous change of parameters, each solution in a set usually also changes continuously; it is said to form a &#39;&#39;solution branch&#39;&#39;. For an example, see the three colour-coded branches for the Duffing oscillator on the [introduction page](/introduction/index#getting_started).

For stable states, the branches describe a system&#39;s behaviour under adiabatic parameter changes.

Therefore, after solving for a parameter range, we want to order each solution set such that the solutions&#39; order reflects the branches.

The function `sort_solutions` goes over the the raw output of `get_steady_states` and sorts each entry such that neighboring solution sets minimize Euclidean distance.

Currently, `sort_solutions` is compatible with 1D and 2D arrays of solution sets.
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.sort_solutions-manual-solving_harmonics' href='#HarmonicSteadyState.sort_solutions-manual-solving_harmonics'><span class="jlbinding">HarmonicSteadyState.sort_solutions</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
sort_solutions(
    solutions::Union{Array{Array{Array{T, 1}, 1}, 1}, Array{Array{Array{T, 1}, 1}, 2}};
    sorting,
    show_progress
) -> Any

```


Sorts `solutions` into branches according to the specified `sorting` method.

`solutions` is an n-dimensional array of `Vector{Vector}`. Each element describes a set of solutions for a given parameter set. The output is a similar array, with each solution set rearranged such that neighboring solution sets have the smallest Euclidean distance.

The `sorting` keyword argument specifies the method used to get continuous solution branches. Options are `:hilbert` (1D sorting along a Hilbert curve), `:nearest` (nearest-neighbor sorting), and `:none`. The `show_progress` keyword argument indicates whether a progress bar should be displayed.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.3.2/src/sorting.jl#L1-L13" target="_blank" rel="noreferrer">source</a></Badge>

</details>

