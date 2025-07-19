


# Parametrically driven resonator {#parametron}

One of the most famous effects displaced by nonlinear oscillators is parametric resonance, where the frequency of the linear resonator is modulated in time [Phys. Rev. E 94, 022201 (2016)](https://doi.org/10.1103/PhysRevE.94.022201). In the following we analyse this system, governed by the equations

$$\ddot{x}(t)+\gamma\dot{x}(t)+\Omega^2(1-\lambda\cos(2\omega t + \psi))x + \alpha x^3 +\eta x^2 \dot{x}+F_\text{d}(t)=0$$

where for completeness we also considered an external drive term $F_\text{d}(t)=F\cos(\omega t + \theta)$ and a nonlinear damping term $\eta x^2 \dot{x}$

To implement this system in Harmonic Balance, we first import the library

```julia
using HarmonicBalance, Plots
```


Subsequently, we type define parameters in the problem and the oscillating amplitude function $x(t)$ using the `variables` macro from `Symbolics.jl`

```julia
@variables ω₀ γ λ F η α ω t x(t)

natural_equation =
    d(d(x, t), t) +
    γ * d(x, t) +
    (ω₀^2 - λ * cos(2 * ω * t)) * x +
    α * x^3 +
    η * d(x, t) * x^2
forces = F * cos(ω * t)
diff_eq = DifferentialEquation(natural_equation + forces, x)
```


```ansi
System of 1 differential equations
Variables:       x(t)
Harmonic ansatz: x(t) => ;   

Differential(t)(Differential(t)(x(t))) + F*cos(t*ω) + Differential(t)(x(t))*γ + x(t)*(-cos(2t*ω)*λ + ω₀^2) + (x(t)^3)*α + (x(t)^2)*Differential(t)(x(t))*η ~ 0

```


Note that an equation of the form

$$m \ddot{x}+m \omega_{0}^{2}\left(1-\lambda \cos (2\omega t+\psi)\right) x+\gamma \dot{x}+\alpha x^{3}+\eta x^{2} \dot{x}=F \cos \omega t$$

can be brought to dimensionless form by rescaling the units as described in [Phys. Rev. E 94, 022201 (2016)](https://doi.org/10.1103/PhysRevE.94.022201).

We are interested in studying the response of the oscillator to parametric driving and forcing. In particular, we focus on the first parametric resonance of the system, i.e. operating around twice the bare frequency of the undriven oscillator $\omega$ while the frequency of the external drive is also $\omega$. For this purpose, we consider a harmonic ansatz which contains a single frequency: $x(t)\approx u\cos(\omega t)+v\sin(\omega t)$. In HarmonicBalance, we can do this via `add_harmonic` command:

```julia
add_harmonic!(diff_eq, x, ω);
```


and replacing this by the time independent (averaged) equations of motion. This can be simply done by writing

```julia
harmonic_eq = get_harmonic_equations(diff_eq)
```


```ansi
A set of 2 harmonic equations
Variables: u1(T), v1(T)
Parameters: ω, α, γ, ω₀, λ, η, F

Harmonic ansatz: 
x(t) = u1(T)*cos(ωt) + v1(T)*sin(ωt)

Harmonic equations:

F - (1//2)*u1(T)*λ + (2//1)*Differential(T)(v1(T))*ω + Differential(T)(u1(T))*γ - u1(T)*(ω^2) + u1(T)*(ω₀^2) + v1(T)*γ*ω + (3//4)*(u1(T)^3)*α + (3//4)*(u1(T)^2)*Differential(T)(u1(T))*η + (1//2)*u1(T)*Differential(T)(v1(T))*v1(T)*η + (3//4)*u1(T)*(v1(T)^2)*α + (1//4)*(v1(T)^2)*Differential(T)(u1(T))*η + (1//4)*(u1(T)^2)*v1(T)*η*ω + (1//4)*(v1(T)^3)*η*ω ~ 0

Differential(T)(v1(T))*γ + (1//2)*v1(T)*λ - (2//1)*Differential(T)(u1(T))*ω - u1(T)*γ*ω - v1(T)*(ω^2) + v1(T)*(ω₀^2) + (1//4)*(u1(T)^2)*Differential(T)(v1(T))*η + (3//4)*(u1(T)^2)*v1(T)*α + (1//2)*u1(T)*v1(T)*Differential(T)(u1(T))*η + (3//4)*Differential(T)(v1(T))*(v1(T)^2)*η + (3//4)*(v1(T)^3)*α - (1//4)*(u1(T)^3)*η*ω - (1//4)*u1(T)*(v1(T)^2)*η*ω ~ 0

```


The output of these equations are consistent with the result found in the literature. Now we are interested in the linear response spectrum, which we can obtain from the solutions to the averaged equations (rotating frame) as a function of the external drive, after fixing all other parameters in the system. A call to `get_steady_states` then retrieves all steadystates found along the sweep employing the homotopy continuation method, which occurs in a complex space (see the nice [HomotopyContinuation.jl docs](https://www.juliahomotopycontinuation.org))

## 1D parameters {#1D-parameters}

We start with a `varied` set containing one parameter, $\omega$,

```julia
fixed = (ω₀ => 1.0, γ => 1e-2, λ => 5e-2, F => 1e-3, α => 1.0, η => 0.3)
varied = ω => range(0.9, 1.1, 100)

result = get_steady_states(harmonic_eq, varied, fixed)
```


```ansi
A steady state result for 100 parameter points

Solution branches:   5
   of which real:    5
   of which stable:  3

Classes: stable, physical, Hopf

```


In `get_steady_states`, the default method `WarmUp()` initiates the homotopy in a generalised version of the harmonic equations, where parameters become random complex numbers. A parameter homotopy then follows to each of the frequency values $\omega$ in sweep. This offers speed-up, but requires to be tested in each scenario against the method `TotalDegree`, which initializes the homotopy in a total degree system (maximum number of roots), but needs to track significantly more homotopy paths and there is slower.

After solving the system, we can save the full output of the simulation and the model (e.g. symbolic expressions for the harmonic equations) into a file

```julia
HarmonicBalance.save("parametron_result.jld2", result);
```


During the execution of `get_steady_states`, different solution branches are classified by their proximity in complex space, with subsequent filtering of real (physically acceptable solutions). In addition, the stability properties of each steady state is assessed from the eigenvalues of the Jacobian matrix. All this information can be succinctly represented in a 1D plot via

```julia
plot(result; x="ω", y="sqrt(u1^2 + v1^2)")
```

![](shfdybk.png){width=600px height=400px}

The user can also introduce custom classes based on parameter conditions via `classify_solutions!`. Plots can be overlaid and use keywords from `Plots`,
MarkdownAST.LineBreak()



```julia
classify_solutions!(result, "sqrt(u1^2 + v1^2) > 0.1", "large")
plot(result, "sqrt(u1^2 + v1^2)"; class=["physical", "large"], style=:dash)
plot!(result, "sqrt(u1^2 + v1^2)"; not_class="large")
```

![](iujazrq.png){width=600px height=400px}

Alternatively, we may visualise all underlying solutions, including complex ones,

```julia
plot(result, "sqrt(u1^2 + v1^2)"; class="all")
```

![](glgfsny.png){width=600px height=400px}

## 2D parameters {#2D-parameters}

The parametrically driven oscillator boasts a stability diagram called &quot;Arnold&#39;s tongues&quot; delineating zones where the oscillator is stable from those where it is exponentially unstable (if the nonlinearity was absence).  We can retrieve this diagram by calculating the steady states as a function of external detuning $\delta=\omega_L-\omega_0$ and the parametric drive strength $\lambda$.

To perform a 2D sweep over driving frequency $\omega$ and parametric drive strength $\lambda$, we keep `fixed` from before but include 2 variables in `varied`

```julia
fixed = (ω₀ => 1.0, γ => 1e-2, F => 1e-3, α => 1.0, η => 0.3)
varied = (ω => range(0.8, 1.2, 50), λ => range(0.001, 0.6, 50))
result_2D = get_steady_states(harmonic_eq, varied, fixed);
```


```ansi
[32mSolving for 2500 parameters...   2%|▍                   |  ETA: 0:00:34[39m[K
[34m   # parameters solved: 44[39m[K
[34m       # paths tracked: 220[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...   3%|▌                   |  ETA: 0:00:33[39m[K
[34m   # parameters solved: 68[39m[K
[34m       # paths tracked: 340[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...   4%|▊                   |  ETA: 0:00:32[39m[K
[34m   # parameters solved: 91[39m[K
[34m       # paths tracked: 455[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...   5%|▉                   |  ETA: 0:00:31[39m[K
[34m   # parameters solved: 116[39m[K
[34m       # paths tracked: 580[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...   5%|█▏                  |  ETA: 0:00:32[39m[K
[34m   # parameters solved: 136[39m[K
[34m       # paths tracked: 680[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...   6%|█▎                  |  ETA: 0:00:31[39m[K
[34m   # parameters solved: 160[39m[K
[34m       # paths tracked: 800[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...   7%|█▌                  |  ETA: 0:00:31[39m[K
[34m   # parameters solved: 185[39m[K
[34m       # paths tracked: 925[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...   8%|█▋                  |  ETA: 0:00:30[39m[K
[34m   # parameters solved: 209[39m[K
[34m       # paths tracked: 1045[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...   9%|█▊                  |  ETA: 0:00:31[39m[K
[34m   # parameters solved: 225[39m[K
[34m       # paths tracked: 1125[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  10%|██                  |  ETA: 0:00:30[39m[K
[34m   # parameters solved: 251[39m[K
[34m       # paths tracked: 1255[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  11%|██▎                 |  ETA: 0:00:30[39m[K
[34m   # parameters solved: 275[39m[K
[34m       # paths tracked: 1375[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  12%|██▍                 |  ETA: 0:00:30[39m[K
[34m   # parameters solved: 294[39m[K
[34m       # paths tracked: 1470[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  13%|██▋                 |  ETA: 0:00:29[39m[K
[34m   # parameters solved: 321[39m[K
[34m       # paths tracked: 1605[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  14%|██▊                 |  ETA: 0:00:29[39m[K
[34m   # parameters solved: 342[39m[K
[34m       # paths tracked: 1710[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  15%|██▉                 |  ETA: 0:00:28[39m[K
[34m   # parameters solved: 367[39m[K
[34m       # paths tracked: 1835[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  16%|███▏                |  ETA: 0:00:28[39m[K
[34m   # parameters solved: 392[39m[K
[34m       # paths tracked: 1960[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  17%|███▎                |  ETA: 0:00:28[39m[K
[34m   # parameters solved: 414[39m[K
[34m       # paths tracked: 2070[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  17%|███▌                |  ETA: 0:00:28[39m[K
[34m   # parameters solved: 436[39m[K
[34m       # paths tracked: 2180[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  19%|███▊                |  ETA: 0:00:27[39m[K
[34m   # parameters solved: 465[39m[K
[34m       # paths tracked: 2325[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  20%|███▉                |  ETA: 0:00:27[39m[K
[34m   # parameters solved: 488[39m[K
[34m       # paths tracked: 2440[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  20%|████▏               |  ETA: 0:00:26[39m[K
[34m   # parameters solved: 512[39m[K
[34m       # paths tracked: 2560[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  21%|████▎               |  ETA: 0:00:26[39m[K
[34m   # parameters solved: 536[39m[K
[34m       # paths tracked: 2680[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  22%|████▌               |  ETA: 0:00:26[39m[K
[34m   # parameters solved: 556[39m[K
[34m       # paths tracked: 2780[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  23%|████▋               |  ETA: 0:00:25[39m[K
[34m   # parameters solved: 581[39m[K
[34m       # paths tracked: 2905[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  24%|████▉               |  ETA: 0:00:25[39m[K
[34m   # parameters solved: 608[39m[K
[34m       # paths tracked: 3040[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  25%|█████               |  ETA: 0:00:24[39m[K
[34m   # parameters solved: 632[39m[K
[34m       # paths tracked: 3160[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  26%|█████▎              |  ETA: 0:00:24[39m[K
[34m   # parameters solved: 653[39m[K
[34m       # paths tracked: 3265[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  27%|█████▍              |  ETA: 0:00:24[39m[K
[34m   # parameters solved: 677[39m[K
[34m       # paths tracked: 3385[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  28%|█████▋              |  ETA: 0:00:24[39m[K
[34m   # parameters solved: 696[39m[K
[34m       # paths tracked: 3480[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  29%|█████▊              |  ETA: 0:00:23[39m[K
[34m   # parameters solved: 720[39m[K
[34m       # paths tracked: 3600[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  30%|█████▉              |  ETA: 0:00:23[39m[K
[34m   # parameters solved: 742[39m[K
[34m       # paths tracked: 3710[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  31%|██████▏             |  ETA: 0:00:23[39m[K
[34m   # parameters solved: 765[39m[K
[34m       # paths tracked: 3825[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  31%|██████▎             |  ETA: 0:00:23[39m[K
[34m   # parameters solved: 781[39m[K
[34m       # paths tracked: 3905[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  32%|██████▌             |  ETA: 0:00:23[39m[K
[34m   # parameters solved: 805[39m[K
[34m       # paths tracked: 4025[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  33%|██████▋             |  ETA: 0:00:22[39m[K
[34m   # parameters solved: 831[39m[K
[34m       # paths tracked: 4155[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  34%|██████▉             |  ETA: 0:00:22[39m[K
[34m   # parameters solved: 858[39m[K
[34m       # paths tracked: 4290[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  35%|███████             |  ETA: 0:00:22[39m[K
[34m   # parameters solved: 877[39m[K
[34m       # paths tracked: 4385[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  36%|███████▎            |  ETA: 0:00:21[39m[K
[34m   # parameters solved: 901[39m[K
[34m       # paths tracked: 4505[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  37%|███████▍            |  ETA: 0:00:21[39m[K
[34m   # parameters solved: 926[39m[K
[34m       # paths tracked: 4630[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  38%|███████▋            |  ETA: 0:00:21[39m[K
[34m   # parameters solved: 948[39m[K
[34m       # paths tracked: 4740[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  39%|███████▊            |  ETA: 0:00:20[39m[K
[34m   # parameters solved: 968[39m[K
[34m       # paths tracked: 4840[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  40%|███████▉            |  ETA: 0:00:20[39m[K
[34m   # parameters solved: 988[39m[K
[34m       # paths tracked: 4940[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  40%|████████▏           |  ETA: 0:00:20[39m[K
[34m   # parameters solved: 1012[39m[K
[34m       # paths tracked: 5060[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  41%|████████▎           |  ETA: 0:00:20[39m[K
[34m   # parameters solved: 1036[39m[K
[34m       # paths tracked: 5180[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  42%|████████▌           |  ETA: 0:00:19[39m[K
[34m   # parameters solved: 1057[39m[K
[34m       # paths tracked: 5285[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  43%|████████▋           |  ETA: 0:00:19[39m[K
[34m   # parameters solved: 1081[39m[K
[34m       # paths tracked: 5405[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  44%|████████▉           |  ETA: 0:00:18[39m[K
[34m   # parameters solved: 1111[39m[K
[34m       # paths tracked: 5555[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  45%|█████████▏          |  ETA: 0:00:18[39m[K
[34m   # parameters solved: 1133[39m[K
[34m       # paths tracked: 5665[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  46%|█████████▎          |  ETA: 0:00:18[39m[K
[34m   # parameters solved: 1156[39m[K
[34m       # paths tracked: 5780[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  47%|█████████▌          |  ETA: 0:00:18[39m[K
[34m   # parameters solved: 1182[39m[K
[34m       # paths tracked: 5910[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  48%|█████████▋          |  ETA: 0:00:17[39m[K
[34m   # parameters solved: 1207[39m[K
[34m       # paths tracked: 6035[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  49%|█████████▉          |  ETA: 0:00:17[39m[K
[34m   # parameters solved: 1230[39m[K
[34m       # paths tracked: 6150[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  50%|██████████          |  ETA: 0:00:17[39m[K
[34m   # parameters solved: 1255[39m[K
[34m       # paths tracked: 6275[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  51%|██████████▎         |  ETA: 0:00:16[39m[K
[34m   # parameters solved: 1283[39m[K
[34m       # paths tracked: 6415[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  52%|██████████▌         |  ETA: 0:00:16[39m[K
[34m   # parameters solved: 1306[39m[K
[34m       # paths tracked: 6530[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  53%|██████████▋         |  ETA: 0:00:15[39m[K
[34m   # parameters solved: 1333[39m[K
[34m       # paths tracked: 6665[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  54%|██████████▉         |  ETA: 0:00:15[39m[K
[34m   # parameters solved: 1357[39m[K
[34m       # paths tracked: 6785[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  55%|███████████         |  ETA: 0:00:15[39m[K
[34m   # parameters solved: 1379[39m[K
[34m       # paths tracked: 6895[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  56%|███████████▎        |  ETA: 0:00:15[39m[K
[34m   # parameters solved: 1400[39m[K
[34m       # paths tracked: 7000[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  57%|███████████▍        |  ETA: 0:00:14[39m[K
[34m   # parameters solved: 1427[39m[K
[34m       # paths tracked: 7135[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  58%|███████████▋        |  ETA: 0:00:14[39m[K
[34m   # parameters solved: 1452[39m[K
[34m       # paths tracked: 7260[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  59%|███████████▊        |  ETA: 0:00:14[39m[K
[34m   # parameters solved: 1475[39m[K
[34m       # paths tracked: 7375[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  60%|████████████        |  ETA: 0:00:13[39m[K
[34m   # parameters solved: 1496[39m[K
[34m       # paths tracked: 7480[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  61%|████████████▏       |  ETA: 0:00:13[39m[K
[34m   # parameters solved: 1520[39m[K
[34m       # paths tracked: 7600[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  62%|████████████▎       |  ETA: 0:00:13[39m[K
[34m   # parameters solved: 1539[39m[K
[34m       # paths tracked: 7695[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  62%|████████████▌       |  ETA: 0:00:12[39m[K
[34m   # parameters solved: 1560[39m[K
[34m       # paths tracked: 7800[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  63%|████████████▋       |  ETA: 0:00:12[39m[K
[34m   # parameters solved: 1582[39m[K
[34m       # paths tracked: 7910[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  64%|████████████▉       |  ETA: 0:00:12[39m[K
[34m   # parameters solved: 1604[39m[K
[34m       # paths tracked: 8020[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  65%|█████████████       |  ETA: 0:00:12[39m[K
[34m   # parameters solved: 1625[39m[K
[34m       # paths tracked: 8125[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  66%|█████████████▏      |  ETA: 0:00:11[39m[K
[34m   # parameters solved: 1645[39m[K
[34m       # paths tracked: 8225[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  67%|█████████████▍      |  ETA: 0:00:11[39m[K
[34m   # parameters solved: 1665[39m[K
[34m       # paths tracked: 8325[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  68%|█████████████▌      |  ETA: 0:00:11[39m[K
[34m   # parameters solved: 1688[39m[K
[34m       # paths tracked: 8440[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  68%|█████████████▋      |  ETA: 0:00:11[39m[K
[34m   # parameters solved: 1709[39m[K
[34m       # paths tracked: 8545[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  69%|█████████████▉      |  ETA: 0:00:10[39m[K
[34m   # parameters solved: 1729[39m[K
[34m       # paths tracked: 8645[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  70%|██████████████      |  ETA: 0:00:10[39m[K
[34m   # parameters solved: 1750[39m[K
[34m       # paths tracked: 8750[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  71%|██████████████▏     |  ETA: 0:00:10[39m[K
[34m   # parameters solved: 1772[39m[K
[34m       # paths tracked: 8860[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  72%|██████████████▍     |  ETA: 0:00:09[39m[K
[34m   # parameters solved: 1796[39m[K
[34m       # paths tracked: 8980[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  73%|██████████████▋     |  ETA: 0:00:09[39m[K
[34m   # parameters solved: 1822[39m[K
[34m       # paths tracked: 9110[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  74%|██████████████▊     |  ETA: 0:00:09[39m[K
[34m   # parameters solved: 1845[39m[K
[34m       # paths tracked: 9225[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  75%|███████████████     |  ETA: 0:00:08[39m[K
[34m   # parameters solved: 1871[39m[K
[34m       # paths tracked: 9355[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  76%|███████████████▏    |  ETA: 0:00:08[39m[K
[34m   # parameters solved: 1894[39m[K
[34m       # paths tracked: 9470[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  77%|███████████████▍    |  ETA: 0:00:08[39m[K
[34m   # parameters solved: 1921[39m[K
[34m       # paths tracked: 9605[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  78%|███████████████▌    |  ETA: 0:00:07[39m[K
[34m   # parameters solved: 1945[39m[K
[34m       # paths tracked: 9725[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  79%|███████████████▊    |  ETA: 0:00:07[39m[K
[34m   # parameters solved: 1970[39m[K
[34m       # paths tracked: 9850[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  80%|████████████████    |  ETA: 0:00:07[39m[K
[34m   # parameters solved: 1993[39m[K
[34m       # paths tracked: 9965[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  81%|████████████████▏   |  ETA: 0:00:06[39m[K
[34m   # parameters solved: 2017[39m[K
[34m       # paths tracked: 10085[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  82%|████████████████▍   |  ETA: 0:00:06[39m[K
[34m   # parameters solved: 2044[39m[K
[34m       # paths tracked: 10220[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  83%|████████████████▌   |  ETA: 0:00:06[39m[K
[34m   # parameters solved: 2065[39m[K
[34m       # paths tracked: 10325[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  83%|████████████████▊   |  ETA: 0:00:06[39m[K
[34m   # parameters solved: 2087[39m[K
[34m       # paths tracked: 10435[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  85%|████████████████▉   |  ETA: 0:00:05[39m[K
[34m   # parameters solved: 2113[39m[K
[34m       # paths tracked: 10565[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  86%|█████████████████▏  |  ETA: 0:00:05[39m[K
[34m   # parameters solved: 2138[39m[K
[34m       # paths tracked: 10690[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  87%|█████████████████▎  |  ETA: 0:00:04[39m[K
[34m   # parameters solved: 2163[39m[K
[34m       # paths tracked: 10815[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  88%|█████████████████▌  |  ETA: 0:00:04[39m[K
[34m   # parameters solved: 2188[39m[K
[34m       # paths tracked: 10940[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  89%|█████████████████▊  |  ETA: 0:00:04[39m[K
[34m   # parameters solved: 2213[39m[K
[34m       # paths tracked: 11065[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  89%|█████████████████▉  |  ETA: 0:00:04[39m[K
[34m   # parameters solved: 2234[39m[K
[34m       # paths tracked: 11170[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  90%|██████████████████▏ |  ETA: 0:00:03[39m[K
[34m   # parameters solved: 2259[39m[K
[34m       # paths tracked: 11295[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  92%|██████████████████▎ |  ETA: 0:00:03[39m[K
[34m   # parameters solved: 2289[39m[K
[34m       # paths tracked: 11445[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  93%|██████████████████▌ |  ETA: 0:00:02[39m[K
[34m   # parameters solved: 2320[39m[K
[34m       # paths tracked: 11600[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  94%|██████████████████▊ |  ETA: 0:00:02[39m[K
[34m   # parameters solved: 2339[39m[K
[34m       # paths tracked: 11695[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  94%|██████████████████▉ |  ETA: 0:00:02[39m[K
[34m   # parameters solved: 2361[39m[K
[34m       # paths tracked: 11805[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  95%|███████████████████▏|  ETA: 0:00:02[39m[K
[34m   # parameters solved: 2385[39m[K
[34m       # paths tracked: 11925[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  96%|███████████████████▎|  ETA: 0:00:01[39m[K
[34m   # parameters solved: 2407[39m[K
[34m       # paths tracked: 12035[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  97%|███████████████████▌|  ETA: 0:00:01[39m[K
[34m   # parameters solved: 2430[39m[K
[34m       # paths tracked: 12150[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  98%|███████████████████▋|  ETA: 0:00:01[39m[K
[34m   # parameters solved: 2451[39m[K
[34m       # paths tracked: 12255[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  99%|███████████████████▊|  ETA: 0:00:00[39m[K
[34m   # parameters solved: 2474[39m[K
[34m       # paths tracked: 12370[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  99%|████████████████████|  ETA: 0:00:00[39m[K
[34m   # parameters solved: 2496[39m[K
[34m       # paths tracked: 12480[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters... 100%|████████████████████| Time: 0:00:33[39m[K
[34m   # parameters solved: 2500[39m[K
[34m       # paths tracked: 12500[39m[K
```


Now, we count the number of solutions for each point and represent the corresponding phase diagram in parameter space. This is done using `plot_phase_diagram`. Only counting stable solutions,

```julia
plot_phase_diagram(result_2D; class="stable")
```

![](ukexfwy.png){width=600px height=400px}

In addition to phase diagrams, we can plot functions of the solution. The syntax is identical to 1D plotting. Let us overlay 2 branches into a single plot,

```julia
# overlay branches with different colors
plot(result_2D, "sqrt(u1^2 + v1^2)"; branch=1, class="stable", camera=(60, -40))
plot!(result_2D, "sqrt(u1^2 + v1^2)"; branch=2, class="stable", color=:red)
```

![](xykfgrl.png){width=600px height=400px}

Note that solutions are ordered in parameter space according to their closest neighbors. Plots can again be limited to a given class (e.g stable solutions only) through the keyword argument `class`.


---


_This page was generated using [Literate.jl](https://github.com/fredrikekre/Literate.jl)._
