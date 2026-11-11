# [Linear response](@id linresp_man)

This module currently has two goals. One is calculating the stability spectrum of a steady state, used to obtain stability and an inexpensive approximation of the linear response. The other is calculating the full response matrix as a function of frequency, which is more accurate but more expensive.

The methodology used is explained in [Jan Kosata phd thesis](https://www.doi.org/10.3929/ethz-b-000589190).

## Stability

Stability is decided by the eigenvalues of the [`stability_spectrum`](@ref HarmonicSteadyState.stability_spectrum). For the default harmonic equations these are the eigenvalues of the slow-flow Jacobian, which are reliable only when they are small next to the harmonic frequencies. Harmonic equations derived with `get_harmonic_equations(diff_eq; degree=3)` keep the second slow-time derivatives, and the spectrum then holds the Floquet exponents of the quadratic eigenvalue problem, see the [background](@ref linresp_background). We recommend this for ansätze of several harmonics. The eigenvalues, the Lorentzian spectra and the susceptibility below all use the same spectrum.

```@docs; canonical=false
HarmonicSteadyState.stability_spectrum
HarmonicSteadyState.FirstOrderSpectrum
HarmonicSteadyState.SecondOrderSpectrum
```

The slow-flow Jacobian can be shown explicitly,

```@docs; canonical=false
HarmonicBalance.get_Jacobian
```

## Linear response

The response to white noise can be shown with `plot_linear_response`. Depending on the `order` argument, different methods are used.

### First order

The simplest way to extract the linear response of a steady state is to evaluate the eigenvalues of its stability spectrum. Each eigenvalue $\lambda$ describes a Lorentzian peak in the response; $\text{Im}[\lambda]$ gives its center and $\text{Re}[\lambda]$ its width. Transforming the harmonic variables into the non-rotating frame (that is, inverting the harmonic ansatz) then gives the response as it would be observed in an experiment.

The advantage of this method is that for a given parameter set, only one matrix diagonalization is needed to fully describe the response spectrum. With the slow flow, however, the method is inaccurate for response frequencies far from the frequencies used in the harmonic ansatz, since it relies on the response oscillating slowly in the rotating frame. Harmonic equations with `degree=3` place the peaks at the Floquet exponents instead.

Behind the scenes, the spectra are stored using the dedicated structs `Lorentzian` and `JacobianSpectrum`.

```@docs; canonical=false
HarmonicSteadyState.LinearResponse.get_jacobian_response
HarmonicSteadyState.LinearResponse.JacobianSpectrum
HarmonicSteadyState.LinearResponse.Lorentzian
```

### Higher orders

Setting `order > 1` increases the accuracy of the response spectra. However, unlike for the Jacobian, here we must perform a matrix inversion for each response frequency.  

```@autodocs; canonical=false
Modules = [Base.get_extension(HarmonicSteadyState, :HarmonicBalanceExt)]
Private = false
Order = [:function]
```

```@docs; canonical=false
HarmonicSteadyState.LinearResponse.ResponseMatrix
HarmonicSteadyState.LinearResponse.get_response
```

## Rotating frame

```@docs; canonical=false
eigenvalues
eigenvectors
HarmonicSteadyState.LinearResponse.get_rotframe_jacobian_response
get_susceptibility
get_forward_transmission_response
```

## Plotting

```@docs; canonical=false
plot_linear_response
plot_rotframe_jacobian_response
plot_eigenvalues
```
