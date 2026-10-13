# Entering equations of motion

The struct `DifferentialEquation` is the primary input method; it holds an ODE or a coupled system of ODEs composed of terms with harmonic time-dependence
The dependent variables are specified during input, any other symbols
are identified as parameters. Information on which variable is to be expanded in which harmonic is specified using `add_harmonic!`.

`DifferentialEquation.equations` stores a dictionary assigning variables to equations. This information is necessary because the harmonics belonging to a variable are later used to Fourier-transform its corresponding ODE.

```@docs; canonical=false
HarmonicBalance.d
DifferentialEquation
add_harmonic!
get_variables(::DifferentialEquation)
get_independent_variables(::DifferentialEquation)
```

## Which equations can be entered

The equations have to be **polynomial in the variables** and their derivatives. Harmonic balance replaces each variable by a truncated Fourier series, and only sums, products and non-negative integer powers turn a finite Fourier series into another finite Fourier series. A term such as $\sin(x)$, $e^{x}$ or $1/x$ does not, so `get_harmonic_equations` and `get_krylov_equations` reject it:

```julia
julia> @variables α, ω0, ω, F, t, x(t);

julia> diff_eq = DifferentialEquation(d(x, t, 2) + ω0^2 * x + α * sin(x) ~ F * cos(ω * t), x);

julia> add_harmonic!(diff_eq, x, ω);

julia> get_harmonic_equations(diff_eq)
ERROR: ArgumentError: The term(s) sin(x(t)) are not polynomial in x(t) and cannot be averaged. [...]
```

Expand such a term in the variable first. For the pendulum above, $\sin(x) \approx x - x^3/6$ turns the equation into a Duffing oscillator, which harmonic balance handles.

The time dependence of the parameters, on the other hand, must be harmonic: `cos(2ωt) * x` is fine, `cos(ω t^2) * x` and `t * x` are not.

## Choosing the harmonics

Only the harmonics passed to `add_harmonic!` are kept, everything else the nonlinearity generates is projected out. A nonlinear term therefore only shows up in the harmonic equations if it feeds back into a harmonic of the ansatz. With the single-harmonic ansatz $x = u \cos(\omega t) + v \sin(\omega t)$:

- $x^3$ generates $\omega$ and $3\omega$; the $\omega$ part is kept, so the term contributes.
- $x^2$, $x^4$, $x^{10}$ and every other even power generate only $0, 2\omega, 4\omega, \dots$ and contribute *nothing*. The harmonic equations are then those of the linear oscillator, which is correct for this ansatz rather than a sign that the term was ignored by mistake.

To capture an even nonlinearity, add the harmonics it produces, e.g. `add_harmonic!(diff_eq, x, 2ω)` next to `add_harmonic!(diff_eq, x, ω)`. Adding harmonics enlarges the system (two equations per harmonic per variable), so add them one at a time and stop once the quantity you care about no longer changes.
