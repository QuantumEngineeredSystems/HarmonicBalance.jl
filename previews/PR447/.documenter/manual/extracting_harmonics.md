
# Extracting harmonic equations {#Extracting-harmonic-equations}

## Harmonic Balance method {#Harmonic_Balance}

Once a `DifferentialEquation` is defined and its harmonics specified, one can extract the harmonic equations using `get_harmonic_equations`, which itself is composed of the subroutines `harmonic_ansatz`, `slow_flow`, `fourier_transform!` and `drop_powers`.

The harmonic equations use an additional time variable specified as `slow_time` in `get_harmonic_equations`. This is essentially a label distinguishing the time dependence of the harmonic variables (expected to be slow) from that of the oscillating terms (expected to be fast). When the equations are Fourier-transformed to remove oscillating terms, `slow_time` is treated as a constant. Such an approach is exact when looking for steady states.
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicBalance.get_harmonic_equations-manual-extracting_harmonics' href='#HarmonicBalance.get_harmonic_equations-manual-extracting_harmonics'><span class="jlbinding">HarmonicBalance.get_harmonic_equations</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



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



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/63acd3116f68095e0c51a34c113c1b9e65431c1b/src/HarmonicEquation.jl#L128-L169" target="_blank" rel="noreferrer">source</a></Badge>

</details>


## HarmonicVariable and HarmonicEquation types {#HarmonicVariable-and-HarmonicEquation-types}

The equations governing the harmonics are stored using the two following structs. When going from the original to the harmonic equations, the harmonic ansatz $x_i(t) = \sum_{j=1}^M u_{i,j}  (T)  \cos(\omega_{i,j} t)+ v_{i,j}(T) \sin(\omega_{i,j} t)$ is used. Internally, each pair $(u_{i,j}, v_{i,j})$ is stored as a `HarmonicVariable`. This includes the identification of $\omega_{i,j}$ and $x_i(t)$, which is needed to later reconstruct $x_i(t)$.
<details class='jldocstring custom-block' open>
<summary><a id='QuestBase.HarmonicVariable-manual-extracting_harmonics' href='#QuestBase.HarmonicVariable-manual-extracting_harmonics'><span class="jlbinding">QuestBase.HarmonicVariable</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



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


When the full set of equations of motion is expanded using the harmonic ansatz, the result is stored as a `HarmonicEquation`. For an initial equation of motion consisting of $M$ variables, each expanded in $N$ harmonics, the resulting `HarmonicEquation` holds $2NM$ equations of $2NM$ variables. Each symbol not corresponding to a variable is identified as a parameter.

A `HarmonicEquation` can be either parsed into a steady-state [`HarmonicSteadyState.HomotopyContinuationProblem`](/manual/solving_harmonics#HarmonicSteadyState.HomotopyContinuationProblem-manual-solving_harmonics) or solved using a dynamical ODE solver.
<details class='jldocstring custom-block' open>
<summary><a id='QuestBase.HarmonicEquation-manual-extracting_harmonics' href='#QuestBase.HarmonicEquation-manual-extracting_harmonics'><span class="jlbinding">QuestBase.HarmonicEquation</span></a> <Badge type="info" class="jlObjectType jlType" text="Type" /></summary>



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


## Krylov-Bogoliubov Averaging Method {#Krylov-Bogoliubov}

The Krylov-Bogoliubov averaging method is an alternative high-frequency expansion technique used to analyze dynamical systems. Unlike the [Harmonic Balance method](https://en.wikipedia.org/wiki/Harmonic_balance), which is detailed in the [background section](/background/harmonic_balance#intro_hb), the Krylov-Bogoliubov method excels in computing higher orders in $1/\omega$, enabling the capture of faster dynamics within a system.
<details class='jldocstring custom-block' open>
<summary><a id='HarmonicBalance.get_krylov_equations-manual-extracting_harmonics' href='#HarmonicBalance.get_krylov_equations-manual-extracting_harmonics'><span class="jlbinding">HarmonicBalance.get_krylov_equations</span></a> <Badge type="info" class="jlObjectType jlFunction" text="Function" /></summary>



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



<Badge type="info" class="source-link" text="source"><a href="https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/63acd3116f68095e0c51a34c113c1b9e65431c1b/src/krylov-bogoliubov.jl#L4" target="_blank" rel="noreferrer">source</a></Badge>

</details>


### Purpose and Advantages {#Purpose-and-Advantages}

The primary advantage of the Krylov-Bogoliubov method lies in its ability to delve deeper into high-frequency components, allowing a more comprehensive understanding of fast dynamical behaviors. By leveraging this technique, one can obtain higher-order approximations that shed light on intricate system dynamics.

However, it&#39;s essential to note a limitation: this method cannot handle multiple harmonics within a single variable, unlike some other high-frequency expansion methods.

For further information and a detailed understanding of this method, refer to [Krylov-Bogoliubov averaging method on Wikipedia](https://en.wikipedia.org/wiki/Krylov%E2%80%93Bogoliubov_averaging_method).
