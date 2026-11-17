
# Linear response {#linresp_man}

This module currently has two goals. One is calculating the first-order Jacobian, used to obtain stability and approximate (but inexpensive) the linear response of steady states. The other is calculating the full response matrix as a function of frequency; this is more accurate but more expensive.

The methodology used is explained in [Jan Kosata phd thesis](https://www.doi.org/10.3929/ethz-b-000589190).

## Stability {#Stability}

The Jacobian is used to evaluate stability of the solutions. It can be shown explicitly,
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicBalance.get_Jacobian-manual-linear_response' href='#HarmonicBalance.get_Jacobian-manual-linear_response'><span class="jlbinding">HarmonicBalance.get_Jacobian</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
get_Jacobian(eom)

```


Obtain the symbolic Jacobian matrix of `eom`. This is the linearised left-hand side of F(u) = du/dT.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/f81c089bba525e67d54111eafeff3f4298caf280/src/Jacobian.jl#L6" target="_blank" rel="noreferrer">source</a></Badge>



Obtain a Jacobian from a `DifferentialEquation` by first converting it into a `HarmonicEquation`. 


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/f81c089bba525e67d54111eafeff3f4298caf280/src/Jacobian.jl#L24" target="_blank" rel="noreferrer">source</a></Badge>



Get the Jacobian of a set of equations `eqs` with respect to the variables `vars`. 


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/f81c089bba525e67d54111eafeff3f4298caf280/src/Jacobian.jl#L33" target="_blank" rel="noreferrer">source</a></Badge>

</details>


## Linear response {#Linear-response}

The response to white noise can be shown with `plot_linear_response`. Depending on the `order` argument, different methods are used.

### First order {#First-order}

The simplest way to extract the linear response of a steady state is to evaluate the Jacobian of the harmonic equations. Each of its eigenvalues $\lambda$ describes a Lorentzian peak in the response; $\text{Re}[\lambda]$ gives its center and $\text{Im}[\lambda]$ its width. Transforming the harmonic variables into the non-rotating frame (that is, inverting the harmonic ansatz) then gives the response as it would be observed in an experiment.

The advantage of this method is that for a given parameter set, only one matrix diagonalization is needed to fully describe the response spectrum. However, the method is inaccurate for response frequencies far from the frequencies used in the harmonic ansatz (it relies on the response oscillating slowly in the rotating frame).

Behind the scenes, the spectra are stored using the dedicated structs `Lorentzian` and `JacobianSpectrum`.
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.LinearResponse.get_jacobian_response-manual-linear_response' href='#HarmonicSteadyState.LinearResponse.get_jacobian_response-manual-linear_response'><span class="jlbinding">HarmonicSteadyState.LinearResponse.get_jacobian_response</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



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
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.3.2/src/LinearResponse/response.jl#L1" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.LinearResponse.JacobianSpectrum-manual-linear_response' href='#HarmonicSteadyState.LinearResponse.JacobianSpectrum-manual-linear_response'><span class="jlbinding">HarmonicSteadyState.LinearResponse.JacobianSpectrum</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
mutable struct JacobianSpectrum{T<:Real}
```


Holds a set of `Lorentzian` objects belonging to a variable.

**Fields**
- `peaks::Array{HarmonicSteadyState.LinearResponse.Lorentzian{T}, 1} where T<:Real`
  

**Constructor**

```julia
JacobianSpectrum(res::Result; index::Int, branch::Int)
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.3.2/src/LinearResponse/types.jl#L21" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.LinearResponse.Lorentzian-manual-linear_response' href='#HarmonicSteadyState.LinearResponse.Lorentzian-manual-linear_response'><span class="jlbinding">HarmonicSteadyState.LinearResponse.Lorentzian</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
struct Lorentzian{T<:Real}
```


Holds the three parameters of a Lorentzian peak, defined as A / sqrt((ω-ω0)² + Γ²).

**Fields**
- `ω0::Real`
  
- `Γ::Real`
  
- `A::Real`
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.3.2/src/LinearResponse/types.jl#L1" target="_blank" rel="noreferrer">source</a></Badge>

</details>


### Higher orders {#Higher-orders}

Setting `order > 1` increases the accuracy of the response spectra. However, unlike for the Jacobian, here we must perform a matrix inversion for each response frequency.  
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.LinearResponse.ResponseMatrix-manual-linear_response' href='#HarmonicSteadyState.LinearResponse.ResponseMatrix-manual-linear_response'><span class="jlbinding">HarmonicSteadyState.LinearResponse.ResponseMatrix</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



```julia
struct ResponseMatrix
```


Holds the compiled response matrix of a system.

**Fields**
- `matrix::Matrix{Function}`: The response matrix (compiled).
  
- `symbols::Vector{Num}`: Any symbolic variables in `matrix` to be substituted at evaluation.
  
- `variables::Vector{QuestBase.HarmonicVariable}`: The frequencies of the harmonic variables underlying `matrix`. These are needed to transform the harmonic variables to the non-rotating frame.
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.3.2/src/LinearResponse/types.jl#L40" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.LinearResponse.get_response-manual-linear_response' href='#HarmonicSteadyState.LinearResponse.get_response-manual-linear_response'><span class="jlbinding">HarmonicSteadyState.LinearResponse.get_response</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
get_response(
    rmat::HarmonicSteadyState.LinearResponse.ResponseMatrix,
    s::OrderedCollections.OrderedDict,
    Ω
) -> Any

```


For `rmat` and a solution dictionary `s`, calculate the total response to a perturbative force at frequency `Ω`.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.3.2/src/LinearResponse/response.jl#L217" target="_blank" rel="noreferrer">source</a></Badge>

</details>


## Rotating frame {#Rotating-frame}
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.LinearResponse.eigenvalues-manual-linear_response' href='#HarmonicSteadyState.LinearResponse.eigenvalues-manual-linear_response'><span class="jlbinding">HarmonicSteadyState.LinearResponse.eigenvalues</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



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
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.3.2/src/LinearResponse/response.jl#L123-L141" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.LinearResponse.eigenvectors-manual-linear_response' href='#HarmonicSteadyState.LinearResponse.eigenvectors-manual-linear_response'><span class="jlbinding">HarmonicSteadyState.LinearResponse.eigenvectors</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



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
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.3.2/src/LinearResponse/response.jl#L166-L178" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.LinearResponse.get_rotframe_jacobian_response-manual-linear_response' href='#HarmonicSteadyState.LinearResponse.get_rotframe_jacobian_response-manual-linear_response'><span class="jlbinding">HarmonicSteadyState.LinearResponse.get_rotframe_jacobian_response</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



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
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.3.2/src/LinearResponse/response.jl#L70" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.LinearResponse.get_susceptibility-manual-linear_response' href='#HarmonicSteadyState.LinearResponse.get_susceptibility-manual-linear_response'><span class="jlbinding">HarmonicSteadyState.LinearResponse.get_susceptibility</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



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



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.3.2/src/LinearResponse/input_output.jl#L21" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.LinearResponse.get_forward_transmission_response-manual-linear_response' href='#HarmonicSteadyState.LinearResponse.get_forward_transmission_response-manual-linear_response'><span class="jlbinding">HarmonicSteadyState.LinearResponse.get_forward_transmission_response</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



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



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.3.2/src/LinearResponse/input_output.jl#L88" target="_blank" rel="noreferrer">source</a></Badge>

</details>


## Plotting {#Plotting}
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.plot_linear_response-manual-linear_response' href='#HarmonicSteadyState.plot_linear_response-manual-linear_response'><span class="jlbinding">HarmonicSteadyState.plot_linear_response</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
plot_linear_response(
    res::HarmonicSteadyState.Result{D, SolType} where SolType<:Number,
    nat_var::Num,
    branch::Int64;
    Ω_range,
    order,
    logscale,
    show_progress,
    kwargs...
)

```


Plot the linear response to white noise of the variable `nat_var` for [Result](/manual/solving_harmonics#HarmonicSteadyState.Result-manual-solving_harmonics) `res` on `branch` identifier.

**Keyword arguments**
- `Ω_range`: Range of frequency of the noise probe
  
- `order`: Order of slow-time derivatives to keep (default: 1)
  
- `logscale`: Whether to plot response in log scale (default: false)
  
- `show_progress`: Show progress bar during computation (default: true)
  
- `kwargs...`: Additional arguments passed to Plots.heatmap
  

**Returns**

A Plots.jl heatmap showing the linear response magnitude across parameter and frequency space.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.3.2/ext/PlotsExt/linear_response.jl#L2" target="_blank" rel="noreferrer">source</a></Badge>



```julia
plot_linear_response(
    res::HarmonicSteadyState.Result,
    nat_var::Num,
    followed_branches::Vector{Int64};
    Ω_range,
    logscale,
    show_progress,
    switch_axis,
    force,
    kwargs...
)

```


Plot the linear response to white noise of the variable `nat_var` for [Result](/manual/solving_harmonics#HarmonicSteadyState.Result-manual-solving_harmonics) `res` on the `followed_branches` identifiers with the size of `Ω_range`.

**Keyword arguments**
- `Ω_range`: Range of frequency of the noise probe
  
- `order`: Order of slow-time derivatives to keep (default: 1)
  
- `logscale`: Whether to plot response in log scale (default: false)
  
- `show_progress`: Show progress bar during computation (default: true)
  
- `kwargs...`: Additional arguments passed to Plots.heatmap
  

**Returns**

A Plots.jl heatmap showing the linear response magnitude across parameter and frequency space.


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.3.2/ext/PlotsExt/linear_response.jl#L55" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.plot_rotframe_jacobian_response-manual-linear_response' href='#HarmonicSteadyState.plot_rotframe_jacobian_response-manual-linear_response'><span class="jlbinding">HarmonicSteadyState.plot_rotframe_jacobian_response</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
plot_rotframe_jacobian_response(
    res::HarmonicSteadyState.Result{D, S, P, F} where F<:FunctionWrappers.FunctionWrapper{Array{S, 2}, Tuple{Array{S, 1}}},
    branch::Int64;
    Ω_range,
    logscale,
    damping_mod,
    show_progress,
    kwargs...
)

```


Plot the linear response to white noise in the rotating frame defined the harmonic ansatz for [Result](/manual/solving_harmonics#HarmonicSteadyState.Result-manual-solving_harmonics) `res` on `branch` identifier.

**Keyword arguments**
- `Ω_range`: Range of frequencies to analyze
  
- `logscale`: Whether to plot response in log scale (default: true)
  
- `damping_mod`: Multiplier for the real part of Jacobian eigenvalues (default: 1.0)
  
- `show_progress`: Show progress bar during computation (default: true)
  
- `kwargs...`: Additional arguments passed to Plots.heatmap
  

**Returns**

A Plots.jl heatmap showing the response magnitude in the rotating frame.

**Notes**
- Setting `damping_mod` &lt; 1 can help distinguish between peaks with similar frequencies
  
- Solutions not belonging to the `physical` class are ignored
  


<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.3.2/ext/PlotsExt/linear_response.jl#L104" target="_blank" rel="noreferrer">source</a></Badge>

</details>

<details class='jldocstring custom-block' open>
<summary><a id='HarmonicSteadyState.plot_eigenvalues-manual-linear_response' href='#HarmonicSteadyState.plot_eigenvalues-manual-linear_response'><span class="jlbinding">HarmonicSteadyState.plot_eigenvalues</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



```julia
plot_eigenvalues(
    res::HarmonicSteadyState.Result{D, S, P, F} where F<:FunctionWrappers.FunctionWrapper{Array{S, 2}, Tuple{Array{S, 1}}},
    branch::Int64;
    class,
    type,
    projection,
    cscheme,
    kwargs...
) -> Any

```


Visualize the eigenvalues of the Jacobian in the rotating frame for `branch` identifier in the [Result](/manual/solving_harmonics#HarmonicSteadyState.Result-manual-solving_harmonics) `res`.

**Keyword arguments**
- `class`: Array of solution classes to include (default: [&quot;physical&quot;])
  
- `type`: Which part of eigenvalues to plot (`:real` or `:imag`, default: `:imag`)
  
- `projection`: Function mapping eigenvectors to colors (default: v-&gt;1)
  
- `cscheme`: Color scheme for plotting (`:default` or custom scheme)
  
- `kwargs...`: Additional arguments passed to Plots.scatter
  

**Returns**

A scatter plot of eigenvalues colored by the projection of their eigenvectors.

**Example**

```julia
# Plot imaginary parts of eigenvalues
plot_eigenvalues(result, branch=1)

# Plot real parts with custom coloring based on the norm of eigenvectors of the first harmonic
plot_eigenvalues(result, branch=1, type=:real, projection=v->sqrt(v[1]^2+v[2]^2))
```



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.3.2/ext/PlotsExt/linear_response.jl#L157" target="_blank" rel="noreferrer">source</a></Badge>

</details>

