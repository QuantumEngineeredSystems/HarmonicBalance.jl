


# Three Wave Mixing vs four wave mixing {#Three-Wave-Mixing-vs-four-wave-mixing}

## Packages {#Packages}

We load the following packages into our environment:

```julia
using HarmonicBalance, Plots
using Plots.Measures
using Random

Random.seed!(1234);
Threads.nthreads() # check number of threads
```


```ansi
4
```


## system {#system}

```julia
@variables β α ω ω0 F γ t x(t) # declare constant variables and a function x(t)
diff_eq = DifferentialEquation(
    d(x, t, 2) + ω0^2 * x + β * x^2 + α * x^3 + γ * d(x, t) ~ F * cos(ω * t), x
)

add_harmonic!(diff_eq, x, ω) # specify the ansatz x = u(T) cos(ωt) + v(T) sin(ωt)
add_harmonic!(diff_eq, x, 2ω)
add_harmonic!(diff_eq, x, 3ω)
harmonic_eq = get_harmonic_equations(diff_eq)
```


```ansi
A set of 6 harmonic equations
Variables: u1(T), v1(T), u2(T), v2(T), u3(T), v3(T)
Parameters: ω, α, γ, ω0, β, F

Harmonic ansatz: 
x(t) = u1(T)*cos(ωt) + v1(T)*sin(ωt) + u2(T)*cos(2ωt) + v2(T)*sin(2ωt) + u3(T)*cos(3ωt) + v3(T)*sin(3ωt)

Harmonic equations:

(2//1)*Differential(T)(v1(T))*ω + Differential(T)(u1(T))*γ + u1(T)*u2(T)*β - u1(T)*(ω^2) + u1(T)*(ω0^2) + v3(T)*v2(T)*β + v2(T)*v1(T)*β + v1(T)*γ*ω + u3(T)*u2(T)*β + (3//4)*(u1(T)^3)*α + (3//4)*(u1(T)^2)*u3(T)*α + (3//2)*u1(T)*(v3(T)^2)*α + (3//2)*u1(T)*v3(T)*v1(T)*α + (3//2)*u1(T)*(v2(T)^2)*α + (3//4)*u1(T)*(v1(T)^2)*α + (3//2)*u1(T)*(u3(T)^2)*α + (3//2)*u1(T)*(u2(T)^2)*α + (3//2)*v3(T)*v2(T)*u2(T)*α - (3//4)*(v2(T)^2)*u3(T)*α - (3//4)*(v1(T)^2)*u3(T)*α + (3//4)*u3(T)*(u2(T)^2)*α ~ F

Differential(T)(v1(T))*γ - (2//1)*Differential(T)(u1(T))*ω + u1(T)*v2(T)*β - u1(T)*γ*ω + v3(T)*u2(T)*β - v2(T)*u3(T)*β - v1(T)*u2(T)*β - v1(T)*(ω^2) + v1(T)*(ω0^2) + (3//4)*(u1(T)^2)*v3(T)*α + (3//4)*(u1(T)^2)*v1(T)*α - (3//2)*u1(T)*v1(T)*u3(T)*α + (3//2)*(v3(T)^2)*v1(T)*α + (3//4)*v3(T)*(v2(T)^2)*α - (3//4)*v3(T)*(v1(T)^2)*α - (3//4)*v3(T)*(u2(T)^2)*α + (3//2)*(v2(T)^2)*v1(T)*α + (3//2)*v2(T)*u3(T)*u2(T)*α + (3//4)*(v1(T)^3)*α + (3//2)*v1(T)*(u3(T)^2)*α + (3//2)*v1(T)*(u2(T)^2)*α ~ 0

Differential(T)(u2(T))*γ + (4//1)*Differential(T)(v2(T))*ω + (1//2)*(u1(T)^2)*β + u1(T)*u3(T)*β + v3(T)*v1(T)*β + (2//1)*v2(T)*γ*ω - (1//2)*(v1(T)^2)*β - (4//1)*u2(T)*(ω^2) + u2(T)*(ω0^2) + (3//2)*(u1(T)^2)*u2(T)*α + (3//2)*u1(T)*v3(T)*v2(T)*α + (3//2)*u1(T)*u3(T)*u2(T)*α + (3//2)*(v3(T)^2)*u2(T)*α - (3//2)*v3(T)*v1(T)*u2(T)*α + (3//4)*(v2(T)^2)*u2(T)*α + (3//2)*v2(T)*v1(T)*u3(T)*α + (3//2)*(v1(T)^2)*u2(T)*α + (3//2)*(u3(T)^2)*u2(T)*α + (3//4)*(u2(T)^3)*α ~ 0//1

-(4//1)*Differential(T)(u2(T))*ω + Differential(T)(v2(T))*γ + u1(T)*v3(T)*β + u1(T)*v1(T)*β - (4//1)*v2(T)*(ω^2) + v2(T)*(ω0^2) - v1(T)*u3(T)*β - (2//1)*u2(T)*γ*ω + (3//2)*(u1(T)^2)*v2(T)*α + (3//2)*u1(T)*v3(T)*u2(T)*α - (3//2)*u1(T)*v2(T)*u3(T)*α + (3//2)*(v3(T)^2)*v2(T)*α + (3//2)*v3(T)*v2(T)*v1(T)*α + (3//4)*(v2(T)^3)*α + (3//2)*v2(T)*(v1(T)^2)*α + (3//2)*v2(T)*(u3(T)^2)*α + (3//4)*v2(T)*(u2(T)^2)*α + (3//2)*v1(T)*u3(T)*u2(T)*α ~ 0//1

Differential(T)(u3(T))*γ + (6//1)*Differential(T)(v3(T))*ω + u1(T)*u2(T)*β + (3//1)*v3(T)*γ*ω - v2(T)*v1(T)*β - (9//1)*u3(T)*(ω^2) + u3(T)*(ω0^2) + (1//4)*(u1(T)^3)*α + (3//2)*(u1(T)^2)*u3(T)*α - (3//4)*u1(T)*(v2(T)^2)*α - (3//4)*u1(T)*(v1(T)^2)*α + (3//4)*u1(T)*(u2(T)^2)*α + (3//4)*(v3(T)^2)*u3(T)*α + (3//2)*(v2(T)^2)*u3(T)*α + (3//2)*v2(T)*v1(T)*u2(T)*α + (3//2)*(v1(T)^2)*u3(T)*α + (3//4)*(u3(T)^3)*α + (3//2)*u3(T)*(u2(T)^2)*α ~ 0//1

-(6//1)*Differential(T)(u3(T))*ω + Differential(T)(v3(T))*γ + u1(T)*v2(T)*β - (9//1)*v3(T)*(ω^2) + v3(T)*(ω0^2) + v1(T)*u2(T)*β - (3//1)*u3(T)*γ*ω + (3//2)*(u1(T)^2)*v3(T)*α + (3//4)*(u1(T)^2)*v1(T)*α + (3//2)*u1(T)*v2(T)*u2(T)*α + (3//4)*(v3(T)^3)*α + (3//2)*v3(T)*(v2(T)^2)*α + (3//2)*v3(T)*(v1(T)^2)*α + (3//4)*v3(T)*(u3(T)^2)*α + (3//2)*v3(T)*(u2(T)^2)*α + (3//4)*(v2(T)^2)*v1(T)*α - (1//4)*(v1(T)^3)*α - (3//4)*v1(T)*(u2(T)^2)*α ~ 0//1

```


## four wave mixing {#four-wave-mixing}

If we only have a cubic nonlineariy $\alpha$, we observe the normal duffing oscillator response with no response at $2\omega$.

```julia
varied = (ω => range(0.9, 1.2, 200)) # range of parameter values
fixed = (α => 1.0, β => 0.0, ω0 => 1.0, γ => 0.005, F => 0.0025) # fixed parameters
result = get_steady_states(harmonic_eq, varied, fixed)# compute steady states

p1 = plot(result; y="√(u1^2+v1^2)", legend=:best)
p2 = plot(result; y="√(u2^2+v2^2)", legend=:best, ylims=(-0.1, 0.1))
p3 = plot(result; y="√(u3^2+v3^2)", legend=:best)
plot(p1, p2, p3; layout=(1, 3), size=(900, 300), margin=5mm)
```

![](lyotyow.png){width=900px height=300px}

## Three wave mixing {#Three-wave-mixing}

If we only have a cubic nonlineariy $\alpha$, we observe the normal duffing oscillator response with no response at $2\omega$.

We would like to investigate the three-wave mixing of the driven Duffing oscillator. This means we can excite the system resonantly if the oscillation frequencies $\omega_1$ and $\omega_2$ fulfil the conditions $\omega_1\pm\omega_2=\pm\omega_0$. Here, we will especially focus on the degenerate three wave mixing, where $\omega_2=\omega_0$ such that $2\omega_0=\omega_1$. This is a very important process in quantum optics, since it allows us to generate photons with a frequency in the visible range from photons with a frequency in the infrared range. This is called frequency doubling and is used in many applications, e.g. in laser pointers.

```julia
varied = (ω => range(0.9, 1.2, 200))
fixed = (α => 0.0, β => 1.0, ω0 => 1.0, γ => 0.005, F => 0.0025)
result = get_steady_states(harmonic_eq, varied, fixed)

p1 = plot(result; y="√(u1^2+v1^2)", legend=:best)
p2 = plot(result; y="√(u2^2+v2^2)", legend=:best, ylims=(-0.1, 0.1))
p3 = plot(result; y="√(u3^2+v3^2)", legend=:best)
plot(p1, p2, p3; layout=(1, 3), size=(900, 300), margin=5mm)
```

![](qzywspd.png){width=900px height=300px}

## Both {#Both}

If we only have a cubic nonlineariy $\alpha$, we observe the normal duffing oscillator response with no response at $2\omega$.

We would like to investigate the three-wave mixing of the driven Duffing oscillator. This means we can excite the system resonantly if the oscillation frequencies $\omega_1$ and $\omega_2$ fulfil the conditions $\omega_1\pm\omega_2=\pm\omega_0$. Here, we will especially focus on the degenerate three wave mixing, where $\omega_2=\omega_0$ such that $2\omega_0=\omega_1$. This is a very important process in quantum optics, since it allows us to generate photons with a frequency in the visible range from photons with a frequency in the infrared range. This is called frequency doubling and is used in many applications, e.g. in laser pointers.

```julia
varied = (ω => range(0.9, 1.2, 200))
fixed = (α => 1.0, β => 1.0, ω0 => 1.0, γ => 0.005, F => 0.0025)
result = get_steady_states(harmonic_eq, varied, fixed)

p1 = plot(result; y="√(u1^2+v1^2)", legend=:best)
p2 = plot(result; y="√(u2^2+v2^2)", legend=:best, ylims=(-0.1, 0.1))
p3 = plot(result; y="√(u3^2+v3^2)", legend=:best)
plot(p1, p2, p3; layout=(1, 3), size=(900, 300), margin=5mm)
```

![](tgjilty.png){width=900px height=300px}


---


_This page was generated using [Literate.jl](https://github.com/fredrikekre/Literate.jl)._
