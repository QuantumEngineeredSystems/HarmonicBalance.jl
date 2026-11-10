---
---



Harmonic oscillator: comparison of KB and HB methods

```julia
using HarmonicBalance, Plots

@variables ω ω0 F γ t x(t)
diff_eq = DifferentialEquation(d(x, t, 2) + ω0^2 * x + γ * d(x, t) ~ F * cos(ω * t), x)
add_harmonic!(diff_eq, x, ω)
```


```julia
krylov_eq1 = get_krylov_equations(diff_eq; order=1)
```


```ansi
A set of 2 harmonic equations
Variables: u1(T), v1(T)
Parameters: ω, γ, ω0, F

Harmonic ansatz: 
x(t) = u1(T)*cos(ωt) + v1(T)*sin(ωt)

Harmonic equations:

(-[34m([39m[34m1//2[39m[34m)[39m*u1(T)*γ*ω + [34m([39m[34m1//2[39m[34m)[39m*v1(T)*(ω^[34m2[39m) - [34m([39m[34m1//2[39m[34m)[39m*v1(T)*(ω0^[34m2[39m)) / ω ~ Differential(T, 1)(u1(T))

(-[34m([39m[34m1//2[39m[34m)[39m*F - [34m([39m[34m1//2[39m[34m)[39m*u1(T)*(ω^[34m2[39m) + [34m([39m[34m1//2[39m[34m)[39m*u1(T)*(ω0^[34m2[39m) - [34m([39m[34m1//2[39m[34m)[39m*v1(T)*γ*ω) / ω ~ Differential(T, 1)(v1(T))

```


```julia
krylov_eq2 = get_krylov_equations(diff_eq; order=2)
```


```ansi
A set of 2 harmonic equations
Variables: u1(T), v1(T)
Parameters: ω, γ, ω0, F

Harmonic ansatz: 
x(t) = u1(T)*cos(ωt) + v1(T)*sin(ωt)

Harmonic equations:

(-[34m([39m[34m1//2[39m[34m)[39m*u1(T)*γ*ω + [34m([39m[34m1//2[39m[34m)[39m*v1(T)*(ω^[34m2[39m) - [34m([39m[34m1//2[39m[34m)[39m*v1(T)*(ω0^[34m2[39m)) / ω + ([34m([39m[34m1//8[39m[34m)[39m*F*γ*(ω^[34m6[39m) + [34m([39m[34m1//8[39m[34m)[39m*v1(T)*(γ^[34m2[39m)*(ω^[34m7[39m) + [34m([39m[34m1//8[39m[34m)[39m*v1(T)*(ω^[34m9[39m) - [34m([39m[34m1//4[39m[34m)[39m*v1(T)*(ω^[34m7[39m)*(ω0^[34m2[39m) + [34m([39m[34m1//8[39m[34m)[39m*v1(T)*(ω^[34m5[39m)*(ω0^[34m4[39m)) / (ω^[34m8[39m) ~ Differential(T, 1)(u1(T))

(-[34m([39m[34m1//2[39m[34m)[39m*F - [34m([39m[34m1//2[39m[34m)[39m*u1(T)*(ω^[34m2[39m) + [34m([39m[34m1//2[39m[34m)[39m*u1(T)*(ω0^[34m2[39m) - [34m([39m[34m1//2[39m[34m)[39m*v1(T)*γ*ω) / ω + (-[34m([39m[34m1//8[39m[34m)[39m*F*(ω^[34m7[39m) + [34m([39m[34m1//8[39m[34m)[39m*F*(ω^[34m5[39m)*(ω0^[34m2[39m) - [34m([39m[34m1//8[39m[34m)[39m*u1(T)*(γ^[34m2[39m)*(ω^[34m7[39m) - [34m([39m[34m1//8[39m[34m)[39m*u1(T)*(ω^[34m9[39m) + [34m([39m[34m1//4[39m[34m)[39m*u1(T)*(ω^[34m7[39m)*(ω0^[34m2[39m) - [34m([39m[34m1//8[39m[34m)[39m*u1(T)*(ω^[34m5[39m)*(ω0^[34m4[39m)) / (ω^[34m8[39m) ~ Differential(T, 1)(v1(T))

```


```julia
harmonic_eq = get_harmonic_equations(diff_eq)
harmonic_eq = rearrange_standard(harmonic_eq)
```


```ansi
A set of 2 harmonic equations
Variables: u1(T), v1(T)
Parameters: ω, ω0, γ, F

Harmonic ansatz: 
x(t) = u1(T)*cos(ωt) + v1(T)*sin(ωt)

Harmonic equations:

(F*γ - u1(T)*γ*(ω^[34m2[39m) - u1(T)*γ*(ω0^[34m2[39m) - v1(T)*(γ^[34m2[39m)*ω - [34m([39m[34m2//1[39m[34m)[39m*v1(T)*(ω^[34m3[39m) + [34m([39m[34m2//1[39m[34m)[39m*v1(T)*ω*(ω0^[34m2[39m)) / (γ^[34m2[39m + [34m([39m[34m4//1[39m[34m)[39m*(ω^[34m2[39m)) ~ Differential(T, 1)(u1(T))

([34m([39m[34m2//1[39m[34m)[39m*F*ω + u1(T)*(γ^[34m2[39m)*ω + [34m([39m[34m2//1[39m[34m)[39m*u1(T)*(ω^[34m3[39m) - [34m([39m[34m2//1[39m[34m)[39m*u1(T)*ω*(ω0^[34m2[39m) - v1(T)*γ*(ω^[34m2[39m) - v1(T)*γ*(ω0^[34m2[39m)) / (γ^[34m2[39m + [34m([39m[34m4//1[39m[34m)[39m*(ω^[34m2[39m)) ~ Differential(T, 1)(v1(T))

```


```julia
varied = (ω => range(0.1, 1.9, 200)) # range of parameter values
fixed = (ω0 => 1.0, γ => 0.05, F => 0.1) # fixed parameters
show_progress = false # show progress bar
result_krylov1 = get_steady_states(krylov_eq1, varied, fixed; show_progress)
result_krylov2 = get_steady_states(krylov_eq2, varied, fixed; show_progress)
result_harmonic = get_steady_states(harmonic_eq, varied, fixed; show_progress);
```


```julia
plot(
    plot(result_krylov1; y="u1^2+v1^2", label="Krylov 1"),
    plot(result_krylov2; y="u1^2+v1^2", label="Krylov 2"),
    plot(result_harmonic; y="u1^2+v1^2", label="Harmonic");
    layout=(3, 1),
)
```

![](krkspss.png){width=600px height=400px}

```julia
plot(
    plot(result_krylov1; y="u1", label="Krylov 1", legend=:best),
    plot(result_krylov2; y="u1", label="Krylov 2", legend=:best),
    plot(result_harmonic; y="u1", label="Harmonic", legend=:best);
    layout=(3, 1),
)
```

![](twmepha.png){width=600px height=400px}

```julia
plot(
    plot(result_krylov1; y="v1", label="Krylov 1", legend=:best),
    plot(result_krylov2; y="v1", label="Krylov 2", legend=:best),
    plot(result_harmonic; y="v1", label="Harmonic", legend=:best);
    layout=(3, 1),
)
```

![](pmwqegf.png){width=600px height=400px}

```julia
plot(
    plot_eigenvalues(result_krylov1, 1; title="Krylov 1", ylims=(-4, 4)),
    plot_eigenvalues(result_krylov2, 1; title="Krylov 2", ylims=(-4, 4)),
    plot_eigenvalues(result_harmonic, 1; title="Harmonic", ylims=(-4, 4));
    layout=(3, 1),
)
```

![](mvoptvb.png){width=600px height=400px}

```julia
plot(
    plot_linear_response(
        result_krylov1, x, 1; Ω_range=range(0.1, 1.9, 200), title="Krylov 1"
    ),
    plot_linear_response(
        result_krylov2, x, 1; Ω_range=range(0.1, 1.9, 200), title="Krylov 2"
    ),
    plot_linear_response(
        result_harmonic, x, 1; Ω_range=range(0.1, 1.9, 200), title="Harmonic"
    ),
    plot_linear_response(
        result_harmonic, x, 1; Ω_range=range(0.1, 1.9, 200), title="Exact", order=2
    );
    layout=(4, 1),
    clims=(0, 250),
    size=(800, 600),
)
```

![](kkbtxcf.png){width=800px height=600px}


---


_This page was generated using [Literate.jl](https://github.com/fredrikekre/Literate.jl)._
