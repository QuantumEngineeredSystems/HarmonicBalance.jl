"""
    harmonic_ansatz(eom::DifferentialEquation, time::Num; coordinates="Cartesian")

Expand each variable of `diff_eom` using the harmonics assigned to it with `time` as the
time variable. For each harmonic of each variable, instance(s) of `HarmonicVariable` are
automatically created and named.
"""
function harmonic_ansatz(diff_eom::DifferentialEquation, time::Num)
    !is_harmonic(diff_eom, time) &&
        error("The differential equation is not harmonic in ", time, " !")
    eqs = collect(values(diff_eom.equations))
    rules, vars = Dict(), []

    # keep count to label new variables
    uv_idx = 1
    a_idx = 1

    for nvar in get_variables(diff_eom) # sum over natural variables
        to_substitute = Num(0) # combine all the substitution rules for var
        for ω in diff_eom.harmonics[nvar]
            if !isequal(ω, 0) # nonzero harmonic - create u,v
                rule_u, hvar_u = _create_harmonic_variable(
                    nvar, ω, time, "u"; new_symbol="u" * string(uv_idx)
                )
                rule_v, hvar_v = _create_harmonic_variable(
                    nvar, ω, time, "v"; new_symbol="v" * string(uv_idx)
                )
                rule = rule_u + rule_v
                uv_idx += 1
                push!(vars, hvar_u, hvar_v)
            else # zero harmonic - create a
                rule, hvar = _create_harmonic_variable(
                    nvar, ω, time, "a"; new_symbol="a" * string(a_idx)
                )
                a_idx += 1
                push!(vars, hvar)
            end
            to_substitute += rule
        end

        rules[nvar] = to_substitute # total sub rule for nvar
    end
    eqs = substitute_all(eqs, rules)
    return HarmonicEquation(eqs, Vector{HarmonicVariable}(vars), diff_eom)
end

function slow_flow!(eom::HarmonicEquation; fast_time::Num, slow_time::Num, degree=2)
    eom.equations = expand_derivatives.(eom.equations) # expand all the derivatives

    # fast_time => slow_time for derivatives up to degree-1
    vars = get_variables(eom)
    new_vars = substitute_all.(vars, fast_time => slow_time)
    replace0 = map(Pair, vars, new_vars) # zeroth degree derivative is separate since Differential^0 does not work
    replace_degrees = [
        map(Pair, d(vars, fast_time, deg), d(new_vars, slow_time, deg)) for
        deg in 1:(degree - 1)
    ]
    replace = flatten([replace0, replace_degrees...])

    # degree derivatives are removed
    drop = [d(var, fast_time, degree) => 0 for var in get_variables(eom)]

    eom.equations = substitute_all(substitute_all(eom.equations, drop), replace)
    eom.variables = substitute_all(eom.variables, replace)
    return nothing
end

"""
    slow_flow(eom::HarmonicEquation; fast_time::Num, slow_time::Num, degree=2)

Removes all derivatives w.r.t `fast_time` (and their products) in `eom` of power `degree`.
In the remaining derivatives, `fast_time` is replaced by `slow_time`.
"""
function slow_flow(
    eom::HarmonicEquation; fast_time::Num, slow_time::Num, degree=2
)::HarmonicEquation
    new_eq = deepcopy(eom)
    slow_flow!(new_eq; fast_time=fast_time, slow_time=slow_time, degree=degree)
    return new_eq
end

### Extending Symbolics.jl's simplify and substitute ###

"Simplify the equations in HarmonicEquation."
function simplify!(eom::HarmonicEquation)
    return eom.equations = [Symbolics.simplify(eq) for eq in eom.equations]
end

"""
$(TYPEDSIGNATURES)
Extract the Fourier components of `eom` corresponding to the harmonics specified in `eom.variables`.
For each non-zero harmonic of each variable, 2 equations are generated (cos and sin Fourier coefficients).
For each zero (constant) harmonic, 1 equation is generated
`time` does not appear in the resulting equations anymore.

Underlying assumption: all time-dependences are harmonic.
"""
function fourier_transform(eom::HarmonicEquation, time::Num)
    new_eom = deepcopy(eom)
    fourier_transform!(new_eom, time)
    return new_eom
end

function fourier_transform!(eom::HarmonicEquation, time::Num)
    avg_eqs = Vector{Equation}(undef, length(eom.variables))

    # loop over the HarmonicVariables, each generates one equation
    for (i, hvar) in enumerate(eom.variables)
        # find the equation belonging to this variable
        eq_idx = findfirst(
            x -> isequal(x, hvar.natural_variable),
            collect(keys(eom.natural_equation.equations)),
        )
        eq = eom.equations[eq_idx]
        # "type" is usually "u" or "v" (harmonic) or ["a"] (zero-harmonic)
        if hvar.type == "u"
            avg_eqs[i] = QuestBase.fourier_cos_term(eq, hvar.ω, time)
        elseif hvar.type == "v"
            avg_eqs[i] = QuestBase.fourier_sin_term(eq, hvar.ω, time)
        elseif hvar.type == "a"
            avg_eqs[i] = QuestBase.fourier_cos_term(eq, 0, time) # pick out the constants
        end
    end
    eom.equations = avg_eqs
    return nothing
end

"""
    $(TYPEDSIGNATURES)

Apply the harmonic ansatz, followed by the slow-flow, Fourier transform and dropping
higher-order derivatives to obtain a set of ODEs (the harmonic equations) governing the
harmonics of `diff_eom`.

The harmonics evolve in `slow_time`, the oscillating terms themselves in `fast_time`.
If no input is used, a variable T is defined for `slow_time` and `fast_time` is taken as
the independent variable of `diff_eom`.

By default, all products of order > 1 of `slow_time`-derivatives are dropped, which means
the equations are linear in the time-derivatives.

# Example
```julia-repl
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

"""
function get_harmonic_equations(
    diff_eom::DifferentialEquation;
    fast_time=nothing,
    slow_time=nothing,
    degree=2,
    jacobian=true,
)
    slow_time = isnothing(slow_time) ? (@variables T; T) : slow_time
    fast_time = isnothing(fast_time) ? get_independent_variables(diff_eom)[1] : fast_time

    for pair in diff_eom.harmonics
        isempty(pair[2]) && error("No harmonics specified for the variable $(pair[1])!")
    end
    # substitute trig functions into the differential equation
    eom = harmonic_ansatz(diff_eom, fast_time)
    # drop 2nd order time derivatives
    eom = slow_flow(eom; fast_time=fast_time, slow_time=slow_time, degree=degree)
    # perform averaging over the frequencies originally specified in dEOM
    fourier_transform!(eom, fast_time)
    # drop higher powers of the first-order derivatives
    eom = drop_powers(eom, d(get_variables(eom), slow_time), 2)

    jacobian == true ? add_jacobian!(eom) : nothing
    return eom
end

"Rearrange `eq` to have zero on the right-hand-side."
_set_zero_rhs(eq::Equation) = eq.lhs - eq.rhs ~ 0
_set_zero_rhs(eqs::Vector{Equation}) = [_set_zero_rhs(eq) for eq in eqs]
