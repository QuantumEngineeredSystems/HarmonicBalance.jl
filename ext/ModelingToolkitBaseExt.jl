module ModelingToolkitBaseExt

using DocStringExtensions

export System, ODEProblem, SteadyStateProblem, NonlinearProblem

using QuestBase:
    is_rearranged, rearrange_standard, rearrange_standard!, is_rearranged_standard

using HarmonicBalance:
    HarmonicEquation, get_variables, DifferentialEquation, get_independent_variables
using HarmonicBalance: first_order_transform!
using Symbolics: simplify, Equation, substitute, Num, expand, arguments, wrap
using SymbolicUtils: unwrap
using ModelingToolkitBase:
    ModelingToolkitBase,
    System,
    ODEProblem,
    NonlinearProblem,
    SteadyStateProblem,
    unknowns,
    @parameters,
    @mtkcompile,
    @independent_variables

swapsides(eq::Equation) = Equation(eq.rhs, eq.lhs)

"""
    varmap_to_dict(p)

Normalise a variable map into a `Dict`. Accepts anything holding symbolic pairs:
a `Dict`, a `Vector` or `Tuple` of pairs, or a `NamedTuple`.
"""
varmap_to_dict(p::AbstractDict) = p
varmap_to_dict(p::NamedTuple) = Dict(k => v for (k, v) in pairs(p))
function varmap_to_dict(p)
    applicable(iterate, p) && all(x -> x isa Pair, p) && return Dict(p)
    return throw(
        ArgumentError(
            "expected the parameters to be a map of symbolic variables to values, " *
            "e.g. a Dict, or a Vector or Tuple of pairs. Got a $(typeof(p)).",
        ),
    )
end

function declare_parameter(var::Num)
    var_sym = Symbol(var)
    new_var = @parameters $var_sym
    @eval($(var_sym) = first($new_var)) # store the variable under "name" in this namespace
    return eval(var_sym)
end

@doc """
$(TYPEDSIGNATURES)

Creates and ModelingToolkitBase.System from a HarmonicEquation.

### Example
```julia
using ModelingToolkitBase

@variables α ω ω0 F γ t x(t)
diff_eq = DifferentialEquation(
    d(x, t, 2) + ω0^2 * x + α * x^3 + γ * d(x, t) ~ F * cos(ω * t), x
)
add_harmonic!(diff_eq, x, ω) #
harmonic_eq = get_harmonic_equations(diff_eq)

sys = System(harmonic_eq)
param = (α => 1.0, ω0 => 1.1, F => 0.01, γ => 0.01, ω => 1.1)
ODEProblem(sys, [1.0, 0.0], (0, 100), param)
```
"""
function ModelingToolkitBase.System(eom::HarmonicEquation)
    if !is_rearranged(eom) # check if time-derivatives of the variable are on the right hand side
        eom = rearrange_standard(eom)
    end

    vars = get_variables(eom)
    slow_times = arguments.(unwrap.(vars))
    @assert all(isone.(length.(slow_times))) "Only one argument for the variables are allowed."
    slow_time = unique(first.(slow_times))
    @assert isone(length(slow_time)) "The argument of the variables are not the same."
    slow_time_ivp = @eval @independent_variables $(Symbol(first(slow_time)))

    # we have the replace the param made with @variables with the ones made with @parameters
    par_names = declare_parameter.(eom.parameters)

    eqs = deepcopy(eom.equations)
    eqs = swapsides.(eqs)
    eqs = simplify.(expand.(eqs))
    eqs = substitute(eqs, Dict(zip(eom.parameters, par_names)))

    # ∨ mtk v10 need @mtkcompile
    @mtkcompile sys = System(eqs, first(slow_time_ivp), vars, par_names)
    return sys
end

@doc """
$(TYPEDSIGNATURES)

Creates and ModelingToolkitBase.System from a DifferentialEquation.

### Example
```julia
using ModelingToolkitBase

@variables α ω ω0 F γ t x(t)
diff_eq = DifferentialEquation(
    d(x, t, 2) + ω0^2 * x + α * x^3 + γ * d(x, t) ~ F * cos(ω * t), x
)
sys = System(diff_eq)

param = (α => 1.0, ω0 => 1.1, F => 0.01, γ => 0.01, ω => 1.1)

ODEProblem(sys, [1.0, 0.0], (0, 100), param)
```
"""
function ModelingToolkitBase.System(diff_eq::DifferentialEquation)
    diff_eq = deepcopy(diff_eq)
    if !is_rearranged_standard(diff_eq)
        rearrange_standard!(diff_eq)
    end

    times = get_independent_variables(diff_eq)
    @assert isone(length(times)) "Only one independent variable allowed."
    iv = first(@eval @independent_variables $(Symbol(first(times))))

    first_order_transform!(diff_eq, iv)

    eqs = collect(values(diff_eq.equations))
    vars = get_variables(diff_eq)

    diff_eq_sym = collect(Iterators.flatten(get_variables.(eqs)))
    param_undeclared = setdiff(setdiff(wrap.(diff_eq_sym), vars), iv)
    params = declare_parameter.(param_undeclared)

    eqs = substitute(eqs, Dict(zip(param_undeclared, params)))

    @mtkcompile sys = System(eqs, first(iv), vars, params)

    return sys
end

@doc """
$(TYPEDSIGNATURES)

Creates and ModelingToolkitBase.ODEProblem from a DifferentialEquation or HarmonicEquation.

The parameters `p` can be any map of symbolic variables to values: a `Dict`, or a
`Vector` or `Tuple` of pairs. Whether the generated function is in-place is set with
the `in_place` keyword or, equivalently, with the `ODEProblem{iip}` type parameter.

### Example
```julia
using ModelingToolkitBase, StaticArrays

@variables α ω ω0 F γ t x(t)
diff_eq = DifferentialEquation(
    d(x, t, 2) + ω0^2 * x + α * x^3 + γ * d(x, t) ~ F * cos(ω * t), x
)
add_harmonic!(diff_eq, x, ω) #
harmonic_eq = get_harmonic_equations(diff_eq)

param = (α => 1.0, ω0 => 1.1, F => 0.01, γ => 0.01, ω => 1.1)

# in place (most performant for large systems)
ODEProblem(harmonic_eq, [1.0, 0.0], (0, 100), param)

# out of place (most performant for small systems with StaticArrays)
ODEProblem(
    harmonic_eq, [1.0, 0.0], (0, 100), param;
    in_place=false, u0_constructor=x -> SVector(x...)
)

# the in-placeness can also be set with a type parameter
ODEProblem{false}(harmonic_eq, [1.0, 0.0], (0, 100), param)
```

"""
function ModelingToolkitBase.ODEProblem(
    eom::Union{HarmonicEquation,DifferentialEquation},
    u0,
    tspan::Tuple,
    p;
    in_place=true,
    kwargs...,
)
    sys = System(eom)
    dict = merge(isempty(u0) ? Dict() : Dict(unknowns(sys) .=> u0), varmap_to_dict(p))
    if !in_place # out-of-place
        prob = ODEProblem{false}(sys, dict, tspan; jac=true, kwargs...)
    else # in-place
        prob = ODEProblem{true}(sys, dict, tspan; jac=true, kwargs...)
    end # compute jacobian for performance
    return prob
end

function ModelingToolkitBase.ODEProblem{iip}(
    eom::Union{HarmonicEquation,DifferentialEquation}, u0, tspan::Tuple, p; kwargs...
) where {iip}
    return ODEProblem(eom, u0, tspan, p; in_place=iip, kwargs...)
end

@doc """
$(TYPEDSIGNATURES)

Creates and ModelingToolkitBase.NonlinearProblem from a HarmonicEquation.

The parameters `p` can be any map of symbolic variables to values: a `Dict`, or a
`Vector` or `Tuple` of pairs. Whether the generated function is in-place is set with
the `in_place` keyword or, equivalently, with the `NonlinearProblem{iip}` type parameter.

### Example
```julia
using ModelingToolkitBase, StaticArrays

@variables α ω ω0 F γ t x(t)
diff_eq = DifferentialEquation(
    d(x, t, 2) + ω0^2 * x + α * x^3 + γ * d(x, t) ~ F * cos(ω * t), x
)
add_harmonic!(diff_eq, x, ω) #
harmonic_eq = get_harmonic_equations(diff_eq)


param = (α => 1.0, ω0 => 1.1, F => 0.01, γ => 0.01, ω => 1.1)

NonlinearProblem(harmonic_eq, [1.0, 0.0], param)
```
"""
function ModelingToolkitBase.NonlinearProblem(
    eom::HarmonicEquation, u0, p; in_place=true, kwargs...
)
    ss_prob = SteadyStateProblem(eom, u0, p; in_place, kwargs...)
    return NonlinearProblem(ss_prob)
end

function ModelingToolkitBase.NonlinearProblem{iip}(
    eom::HarmonicEquation, u0, p; kwargs...
) where {iip}
    return NonlinearProblem(eom, u0, p; in_place=iip, kwargs...)
end

@doc """
$(TYPEDSIGNATURES)

Creates and ModelingToolkitBase.SteadyStateProblem from a HarmonicEquation.

The parameters `p` can be any map of symbolic variables to values: a `Dict`, or a
`Vector` or `Tuple` of pairs. Whether the generated function is in-place is set with
the `in_place` keyword or, equivalently, with the `SteadyStateProblem{iip}` type
parameter.

### Example
```julia
using ModelingToolkitBase, StaticArrays

@variables α ω ω0 F γ t x(t)
diff_eq = DifferentialEquation(
    d(x, t, 2) + ω0^2 * x + α * x^3 + γ * d(x, t) ~ F * cos(ω * t), x
)
add_harmonic!(diff_eq, x, ω) #
harmonic_eq = get_harmonic_equations(diff_eq)


param = (α => 1.0, ω0 => 1.1, F => 0.01, γ => 0.01, ω => 1.1)

SteadyStateProblem(harmonic_eq, [1.0, 0.0], param)
```
"""
function ModelingToolkitBase.SteadyStateProblem(
    eom::HarmonicEquation, u0, p; in_place=true, kwargs...
)
    sys = System(eom)
    dict = merge(isempty(u0) ? Dict() : Dict(unknowns(sys) .=> u0), varmap_to_dict(p))
    if !in_place # out-of-place
        prob = SteadyStateProblem{false}(sys, dict; jac=true, kwargs...)
    else # in-place
        prob = SteadyStateProblem{true}(sys, dict; jac=true, kwargs...)
    end # compute jacobian for performance
    return prob
end

function ModelingToolkitBase.SteadyStateProblem{iip}(
    eom::HarmonicEquation, u0, p; kwargs...
) where {iip}
    return SteadyStateProblem(eom, u0, p; in_place=iip, kwargs...)
end

end # module
