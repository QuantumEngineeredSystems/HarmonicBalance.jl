
# Extracting Solutions {#Extracting-Solutions}

After computing the steady-states of the harmonic equations, you&#39;ll want to extract the solutions from the [`HarmonicSteadyState.Result`](/manual/solving_harmonics#HarmonicSteadyState.Result-manual-solving_harmonics) struct.

## Basic Solution Extraction {#Basic-Solution-Extraction}

For plotting, you can extract the solutions using the `get_solutions` function, which parses a string into a symbolic expression, evaluates it for every steady state solution and filters the solutions by the requested class.
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.get_solutions-manual-analyse_solutions' href='#HarmonicSteadyState.get_solutions-manual-analyse_solutions'><span class="jlbinding">HarmonicSteadyState.get_solutions</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



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


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.0/src/transform_solutions.jl#L196-L215" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.get_branches-manual-analyse_solutions' href='#HarmonicSteadyState.get_branches-manual-analyse_solutions'><span class="jlbinding">HarmonicSteadyState.get_branches</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



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


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.0/src/transform_solutions.jl#L236-L255" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.get_single_solution-manual-analyse_solutions' href='#HarmonicSteadyState.get_single_solution-manual-analyse_solutions'><span class="jlbinding">HarmonicSteadyState.get_single_solution</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
get_single_solution(
    res::HarmonicSteadyState.Result{D, S, P, F} where F<:FunctionWrappers.FunctionWrapper{Array{S, 2}, Tuple{Array{S, 1}}};
    branch,
    index
)

```


Return an ordered dictionary specifying all variables and parameters of the solution in `result` on `branch` at the position `index`.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.0/src/transform_solutions.jl#L1" target="_blank" rel="noreferrer">source</a></Badge>

</details>


## Attractors {#Attractors}
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.attractors-manual-analyse_solutions' href='#HarmonicSteadyState.attractors-manual-analyse_solutions'><span class="jlbinding">HarmonicSteadyState.attractors</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
attractors(res::Result{D}; class="stable", not_class=[]) where D
```


Extract attractors from a [`Result`](/manual/solving_harmonics#HarmonicSteadyState.Result-manual-solving_harmonics) object. Returns an array of dictionaries, where each dictionary maps branch identifier to the attractor. The attractors are filtered by their corresponding class.

**Keyword arguments**

Class selection done by passing `String` or `Vector{String}` as kwarg:

```julia
class::String       :   only count solutions in this class ("all" --> plot everything)
not_class::String   :   do not count solutions in this class
```


**Returns**

`Array{Dict,D}`: Vector of dictionaries mapping branch indices to points satisfying   the stability criteria at each parameter value


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.0/src/Result.jl#L123-L140" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.phase_diagram-manual-analyse_solutions' href='#HarmonicSteadyState.phase_diagram-manual-analyse_solutions'><span class="jlbinding">HarmonicSteadyState.phase_diagram</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
phase_diagram(res::Result{D}; class="physical", not_class=[]) where {D}
```


Calculate the phase diagram from a `Result` object by summing over the number of states at each swept parameters.

**Keyword arguments**

Class selection done by passing `String` or `Vector{String}` as kwarg:

```julia
class::String       :   only count solutions in this class ("all" --> plot everything)
not_class::String   :   do not count solutions in this class
```


**Returns**
- Array{Int64,D}: Sum of states after applying the specified class masks
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.0/src/Result.jl#L92-L106" target="_blank" rel="noreferrer">source</a></Badge>

</details>


## classifying solutions {#classifying-solutions}
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.classify_solutions!-manual-analyse_solutions' href='#HarmonicSteadyState.classify_solutions!-manual-analyse_solutions'><span class="jlbinding">HarmonicSteadyState.classify_solutions!</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



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



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.0/src/classification.jl#L1" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.get_class-manual-analyse_solutions' href='#HarmonicSteadyState.get_class-manual-analyse_solutions'><span class="jlbinding">HarmonicSteadyState.get_class</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
get_class(
    res::HarmonicSteadyState.Result,
    branch::Int64,
    class::String
) -> Any

```


Returns an array of booleans classifying `branch` in the solutions in `res` according to `class`.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.0/src/classification.jl#L43" target="_blank" rel="noreferrer">source</a></Badge>



```julia
get_class(
    soln::HarmonicSteadyState.Result,
    class::String
) -> Any

```


Returns an array of booleans classifying each branch in the solutions in `res` according to `class`.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.0/src/classification.jl#L53" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.filter_result!-manual-analyse_solutions' href='#HarmonicSteadyState.filter_result!-manual-analyse_solutions'><span class="jlbinding">HarmonicSteadyState.filter_result!</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
filter_result!(
    res::HarmonicSteadyState.Result,
    class::String
)

```


Removes all solution branches from `res` where NONE of the solution falls into `class`. Typically used to filter out unphysical solutions to prevent huge file sizes.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.4.0/src/classification.jl#L189" target="_blank" rel="noreferrer">source</a></Badge>

</details>

