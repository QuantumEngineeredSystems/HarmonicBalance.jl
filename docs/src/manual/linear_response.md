# [Linear response](@id linresp_man)

This module currently has two goals. One is calculating the first-order Jacobian, used to obtain stability and approximate (but inexpensive) the linear response of steady states. The other is calculating the full response matrix as a function of frequency; this is more accurate but more expensive.

The methodology used is explained in [Jan Kosata phd thesis](https://www.doi.org/10.3929/ethz-b-000589190).

## Stability

The Jacobian is used to evaluate stability of the solutions. It can be shown explicitly,

```@docs; canonical=false
HarmonicBalance.get_Jacobian
```

## Linear response

The response to white noise can be shown with `plot_linear_response`. Depending on the `order` argument, different methods are used.

### First order

The simplest way to extract the linear response of a steady state is to evaluate the Jacobian of the harmonic equations. Each of its eigenvalues $\lambda$ describes a Lorentzian peak in the response; $\text{Re}[\lambda]$ gives its center and $\text{Im}[\lambda]$ its width. Transforming the harmonic variables into the non-rotating frame (that is, inverting the harmonic ansatz) then gives the response as it would be observed in an experiment.

The advantage of this method is that for a given parameter set, only one matrix diagonalization is needed to fully describe the response spectrum. However, the method is inaccurate for response frequencies far from the frequencies used in the harmonic ansatz (it relies on the response oscillating slowly in the rotating frame).

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
