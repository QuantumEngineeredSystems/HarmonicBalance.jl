


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
[32mSolving for 2500 parameters...   2%|▍                   |  ETA: 0:00:30[39m[K
[34m   # parameters solved: 49[39m[K
[34m       # paths tracked: 245[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...   3%|▋                   |  ETA: 0:00:31[39m[K
[34m   # parameters solved: 72[39m[K
[34m       # paths tracked: 360[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...   4%|▊                   |  ETA: 0:00:30[39m[K
[34m   # parameters solved: 98[39m[K
[34m       # paths tracked: 490[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...   5%|█                   |  ETA: 0:00:30[39m[K
[34m   # parameters solved: 121[39m[K
[34m       # paths tracked: 605[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...   6%|█▏                  |  ETA: 0:00:30[39m[K
[34m   # parameters solved: 143[39m[K
[34m       # paths tracked: 715[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...   7%|█▍                  |  ETA: 0:00:30[39m[K
[34m   # parameters solved: 167[39m[K
[34m       # paths tracked: 835[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...   8%|█▌                  |  ETA: 0:00:30[39m[K
[34m   # parameters solved: 190[39m[K
[34m       # paths tracked: 950[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...   9%|█▊                  |  ETA: 0:00:30[39m[K
[34m   # parameters solved: 214[39m[K
[34m       # paths tracked: 1070[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  10%|█▉                  |  ETA: 0:00:29[39m[K
[34m   # parameters solved: 239[39m[K
[34m       # paths tracked: 1195[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  11%|██▏                 |  ETA: 0:00:28[39m[K
[34m   # parameters solved: 266[39m[K
[34m       # paths tracked: 1330[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  12%|██▍                 |  ETA: 0:00:28[39m[K
[34m   # parameters solved: 290[39m[K
[34m       # paths tracked: 1450[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  12%|██▌                 |  ETA: 0:00:28[39m[K
[34m   # parameters solved: 312[39m[K
[34m       # paths tracked: 1560[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  13%|██▋                 |  ETA: 0:00:28[39m[K
[34m   # parameters solved: 333[39m[K
[34m       # paths tracked: 1665[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  14%|██▉                 |  ETA: 0:00:28[39m[K
[34m   # parameters solved: 354[39m[K
[34m       # paths tracked: 1770[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  15%|███                 |  ETA: 0:00:28[39m[K
[34m   # parameters solved: 377[39m[K
[34m       # paths tracked: 1885[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  16%|███▏                |  ETA: 0:00:28[39m[K
[34m   # parameters solved: 398[39m[K
[34m       # paths tracked: 1990[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  17%|███▍                |  ETA: 0:00:27[39m[K
[34m   # parameters solved: 422[39m[K
[34m       # paths tracked: 2110[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  18%|███▋                |  ETA: 0:00:27[39m[K
[34m   # parameters solved: 446[39m[K
[34m       # paths tracked: 2230[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  19%|███▊                |  ETA: 0:00:27[39m[K
[34m   # parameters solved: 468[39m[K
[34m       # paths tracked: 2340[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  20%|███▉                |  ETA: 0:00:27[39m[K
[34m   # parameters solved: 490[39m[K
[34m       # paths tracked: 2450[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  21%|████▏               |  ETA: 0:00:26[39m[K
[34m   # parameters solved: 514[39m[K
[34m       # paths tracked: 2570[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  22%|████▍               |  ETA: 0:00:26[39m[K
[34m   # parameters solved: 541[39m[K
[34m       # paths tracked: 2705[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  23%|████▌               |  ETA: 0:00:26[39m[K
[34m   # parameters solved: 563[39m[K
[34m       # paths tracked: 2815[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  23%|████▋               |  ETA: 0:00:25[39m[K
[34m   # parameters solved: 585[39m[K
[34m       # paths tracked: 2925[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  24%|████▉               |  ETA: 0:00:25[39m[K
[34m   # parameters solved: 606[39m[K
[34m       # paths tracked: 3030[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  25%|█████               |  ETA: 0:00:25[39m[K
[34m   # parameters solved: 627[39m[K
[34m       # paths tracked: 3135[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  26%|█████▏              |  ETA: 0:00:25[39m[K
[34m   # parameters solved: 648[39m[K
[34m       # paths tracked: 3240[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  27%|█████▍              |  ETA: 0:00:25[39m[K
[34m   # parameters solved: 669[39m[K
[34m       # paths tracked: 3345[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  28%|█████▌              |  ETA: 0:00:24[39m[K
[34m   # parameters solved: 693[39m[K
[34m       # paths tracked: 3465[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  29%|█████▊              |  ETA: 0:00:24[39m[K
[34m   # parameters solved: 715[39m[K
[34m       # paths tracked: 3575[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  30%|█████▉              |  ETA: 0:00:24[39m[K
[34m   # parameters solved: 740[39m[K
[34m       # paths tracked: 3700[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  30%|██████▏             |  ETA: 0:00:23[39m[K
[34m   # parameters solved: 762[39m[K
[34m       # paths tracked: 3810[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  32%|██████▎             |  ETA: 0:00:23[39m[K
[34m   # parameters solved: 789[39m[K
[34m       # paths tracked: 3945[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  33%|██████▌             |  ETA: 0:00:22[39m[K
[34m   # parameters solved: 813[39m[K
[34m       # paths tracked: 4065[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  33%|██████▋             |  ETA: 0:00:22[39m[K
[34m   # parameters solved: 833[39m[K
[34m       # paths tracked: 4165[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  34%|██████▉             |  ETA: 0:00:22[39m[K
[34m   # parameters solved: 857[39m[K
[34m       # paths tracked: 4285[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  35%|███████             |  ETA: 0:00:22[39m[K
[34m   # parameters solved: 882[39m[K
[34m       # paths tracked: 4410[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  36%|███████▎            |  ETA: 0:00:21[39m[K
[34m   # parameters solved: 903[39m[K
[34m       # paths tracked: 4515[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  37%|███████▍            |  ETA: 0:00:21[39m[K
[34m   # parameters solved: 923[39m[K
[34m       # paths tracked: 4615[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  38%|███████▋            |  ETA: 0:00:21[39m[K
[34m   # parameters solved: 949[39m[K
[34m       # paths tracked: 4745[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  39%|███████▊            |  ETA: 0:00:20[39m[K
[34m   # parameters solved: 971[39m[K
[34m       # paths tracked: 4855[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  40%|████████            |  ETA: 0:00:20[39m[K
[34m   # parameters solved: 995[39m[K
[34m       # paths tracked: 4975[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  41%|████████▏           |  ETA: 0:00:20[39m[K
[34m   # parameters solved: 1015[39m[K
[34m       # paths tracked: 5075[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  41%|████████▎           |  ETA: 0:00:20[39m[K
[34m   # parameters solved: 1037[39m[K
[34m       # paths tracked: 5185[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  42%|████████▌           |  ETA: 0:00:19[39m[K
[34m   # parameters solved: 1055[39m[K
[34m       # paths tracked: 5275[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  43%|████████▋           |  ETA: 0:00:19[39m[K
[34m   # parameters solved: 1081[39m[K
[34m       # paths tracked: 5405[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  44%|████████▊           |  ETA: 0:00:19[39m[K
[34m   # parameters solved: 1100[39m[K
[34m       # paths tracked: 5500[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  45%|█████████           |  ETA: 0:00:19[39m[K
[34m   # parameters solved: 1123[39m[K
[34m       # paths tracked: 5615[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  46%|█████████▏          |  ETA: 0:00:18[39m[K
[34m   # parameters solved: 1148[39m[K
[34m       # paths tracked: 5740[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  47%|█████████▍          |  ETA: 0:00:18[39m[K
[34m   # parameters solved: 1174[39m[K
[34m       # paths tracked: 5870[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  48%|█████████▋          |  ETA: 0:00:17[39m[K
[34m   # parameters solved: 1197[39m[K
[34m       # paths tracked: 5985[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  49%|█████████▊          |  ETA: 0:00:17[39m[K
[34m   # parameters solved: 1218[39m[K
[34m       # paths tracked: 6090[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  50%|█████████▉          |  ETA: 0:00:17[39m[K
[34m   # parameters solved: 1242[39m[K
[34m       # paths tracked: 6210[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  51%|██████████▏         |  ETA: 0:00:17[39m[K
[34m   # parameters solved: 1265[39m[K
[34m       # paths tracked: 6325[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  51%|██████████▎         |  ETA: 0:00:16[39m[K
[34m   # parameters solved: 1286[39m[K
[34m       # paths tracked: 6430[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  52%|██████████▌         |  ETA: 0:00:16[39m[K
[34m   # parameters solved: 1308[39m[K
[34m       # paths tracked: 6540[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  53%|██████████▋         |  ETA: 0:00:16[39m[K
[34m   # parameters solved: 1329[39m[K
[34m       # paths tracked: 6645[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  54%|██████████▊         |  ETA: 0:00:15[39m[K
[34m   # parameters solved: 1350[39m[K
[34m       # paths tracked: 6750[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  55%|███████████         |  ETA: 0:00:15[39m[K
[34m   # parameters solved: 1376[39m[K
[34m       # paths tracked: 6880[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  56%|███████████▎        |  ETA: 0:00:15[39m[K
[34m   # parameters solved: 1399[39m[K
[34m       # paths tracked: 6995[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  57%|███████████▍        |  ETA: 0:00:15[39m[K
[34m   # parameters solved: 1417[39m[K
[34m       # paths tracked: 7085[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  58%|███████████▌        |  ETA: 0:00:14[39m[K
[34m   # parameters solved: 1439[39m[K
[34m       # paths tracked: 7195[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  59%|███████████▊        |  ETA: 0:00:14[39m[K
[34m   # parameters solved: 1464[39m[K
[34m       # paths tracked: 7320[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  60%|███████████▉        |  ETA: 0:00:14[39m[K
[34m   # parameters solved: 1488[39m[K
[34m       # paths tracked: 7440[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  61%|████████████▏       |  ETA: 0:00:13[39m[K
[34m   # parameters solved: 1513[39m[K
[34m       # paths tracked: 7565[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  61%|████████████▎       |  ETA: 0:00:13[39m[K
[34m   # parameters solved: 1532[39m[K
[34m       # paths tracked: 7660[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  62%|████████████▍       |  ETA: 0:00:13[39m[K
[34m   # parameters solved: 1553[39m[K
[34m       # paths tracked: 7765[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  63%|████████████▋       |  ETA: 0:00:12[39m[K
[34m   # parameters solved: 1579[39m[K
[34m       # paths tracked: 7895[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  64%|████████████▉       |  ETA: 0:00:12[39m[K
[34m   # parameters solved: 1608[39m[K
[34m       # paths tracked: 8040[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  65%|█████████████▏      |  ETA: 0:00:12[39m[K
[34m   # parameters solved: 1637[39m[K
[34m       # paths tracked: 8185[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  66%|█████████████▎      |  ETA: 0:00:11[39m[K
[34m   # parameters solved: 1658[39m[K
[34m       # paths tracked: 8290[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  67%|█████████████▌      |  ETA: 0:00:11[39m[K
[34m   # parameters solved: 1682[39m[K
[34m       # paths tracked: 8410[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  68%|█████████████▋      |  ETA: 0:00:11[39m[K
[34m   # parameters solved: 1709[39m[K
[34m       # paths tracked: 8545[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  69%|█████████████▉      |  ETA: 0:00:10[39m[K
[34m   # parameters solved: 1732[39m[K
[34m       # paths tracked: 8660[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  70%|██████████████▏     |  ETA: 0:00:10[39m[K
[34m   # parameters solved: 1758[39m[K
[34m       # paths tracked: 8790[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  71%|██████████████▎     |  ETA: 0:00:10[39m[K
[34m   # parameters solved: 1778[39m[K
[34m       # paths tracked: 8890[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  72%|██████████████▍     |  ETA: 0:00:09[39m[K
[34m   # parameters solved: 1800[39m[K
[34m       # paths tracked: 9000[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  73%|██████████████▋     |  ETA: 0:00:09[39m[K
[34m   # parameters solved: 1821[39m[K
[34m       # paths tracked: 9105[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  74%|██████████████▊     |  ETA: 0:00:09[39m[K
[34m   # parameters solved: 1844[39m[K
[34m       # paths tracked: 9220[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  75%|██████████████▉     |  ETA: 0:00:09[39m[K
[34m   # parameters solved: 1865[39m[K
[34m       # paths tracked: 9325[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  76%|███████████████▏    |  ETA: 0:00:08[39m[K
[34m   # parameters solved: 1893[39m[K
[34m       # paths tracked: 9465[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  77%|███████████████▎    |  ETA: 0:00:08[39m[K
[34m   # parameters solved: 1913[39m[K
[34m       # paths tracked: 9565[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  78%|███████████████▌    |  ETA: 0:00:08[39m[K
[34m   # parameters solved: 1938[39m[K
[34m       # paths tracked: 9690[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  78%|███████████████▋    |  ETA: 0:00:07[39m[K
[34m   # parameters solved: 1957[39m[K
[34m       # paths tracked: 9785[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  79%|███████████████▉    |  ETA: 0:00:07[39m[K
[34m   # parameters solved: 1981[39m[K
[34m       # paths tracked: 9905[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  80%|████████████████    |  ETA: 0:00:07[39m[K
[34m   # parameters solved: 2001[39m[K
[34m       # paths tracked: 10005[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  81%|████████████████▏   |  ETA: 0:00:06[39m[K
[34m   # parameters solved: 2019[39m[K
[34m       # paths tracked: 10095[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  82%|████████████████▍   |  ETA: 0:00:06[39m[K
[34m   # parameters solved: 2040[39m[K
[34m       # paths tracked: 10200[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  83%|████████████████▌   |  ETA: 0:00:06[39m[K
[34m   # parameters solved: 2065[39m[K
[34m       # paths tracked: 10325[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  83%|████████████████▊   |  ETA: 0:00:06[39m[K
[34m   # parameters solved: 2087[39m[K
[34m       # paths tracked: 10435[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  84%|████████████████▉   |  ETA: 0:00:05[39m[K
[34m   # parameters solved: 2107[39m[K
[34m       # paths tracked: 10535[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  85%|█████████████████   |  ETA: 0:00:05[39m[K
[34m   # parameters solved: 2131[39m[K
[34m       # paths tracked: 10655[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  86%|█████████████████▏  |  ETA: 0:00:05[39m[K
[34m   # parameters solved: 2148[39m[K
[34m       # paths tracked: 10740[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  87%|█████████████████▍  |  ETA: 0:00:04[39m[K
[34m   # parameters solved: 2173[39m[K
[34m       # paths tracked: 10865[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  88%|█████████████████▌  |  ETA: 0:00:04[39m[K
[34m   # parameters solved: 2195[39m[K
[34m       # paths tracked: 10975[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  89%|█████████████████▊  |  ETA: 0:00:04[39m[K
[34m   # parameters solved: 2221[39m[K
[34m       # paths tracked: 11105[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  90%|██████████████████  |  ETA: 0:00:03[39m[K
[34m   # parameters solved: 2248[39m[K
[34m       # paths tracked: 11240[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  91%|██████████████████▏ |  ETA: 0:00:03[39m[K
[34m   # parameters solved: 2265[39m[K
[34m       # paths tracked: 11325[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  92%|██████████████████▍ |  ETA: 0:00:03[39m[K
[34m   # parameters solved: 2290[39m[K
[34m       # paths tracked: 11450[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  93%|██████████████████▌ |  ETA: 0:00:02[39m[K
[34m   # parameters solved: 2317[39m[K
[34m       # paths tracked: 11585[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  94%|██████████████████▊ |  ETA: 0:00:02[39m[K
[34m   # parameters solved: 2342[39m[K
[34m       # paths tracked: 11710[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  95%|██████████████████▉ |  ETA: 0:00:02[39m[K
[34m   # parameters solved: 2365[39m[K
[34m       # paths tracked: 11825[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  96%|███████████████████▏|  ETA: 0:00:01[39m[K
[34m   # parameters solved: 2390[39m[K
[34m       # paths tracked: 11950[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  96%|███████████████████▎|  ETA: 0:00:01[39m[K
[34m   # parameters solved: 2412[39m[K
[34m       # paths tracked: 12060[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  98%|███████████████████▌|  ETA: 0:00:01[39m[K
[34m   # parameters solved: 2439[39m[K
[34m       # paths tracked: 12195[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  99%|███████████████████▊|  ETA: 0:00:00[39m[K
[34m   # parameters solved: 2466[39m[K
[34m       # paths tracked: 12330[39m[K[A[A

[K[A[K[A[32mSolving for 2500 parameters...  99%|███████████████████▉|  ETA: 0:00:00[39m[K
[34m   # parameters solved: 2485[39m[K
[34m       # paths tracked: 12425[39m[K[A[A

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
