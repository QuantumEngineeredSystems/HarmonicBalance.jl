"""
$(TYPEDSIGNATURES)

Apply the Krylov-Bogoliubov averaging method to a specific `order` to obtain a set of ODEs (the slow-flow equations) governing the harmonics of `diff_eom`.

The van der Pol transformation turns `diff_eom` into `du/dT = f(u, t)`, with `f` periodic
in the fast time `t`. A near-identity change of variables then removes the time dependence
order by order, leaving the autonomous slow flow `Σₙ gₙ / n!`. Each order solves a
homological equation `∂ₜWₙ = gₙ - Kₙ` for the generator `Wₙ` of the Lie transform, where
`Kₙ` collects the lower orders through Deprit's recursion (Hori-Deprit averaging):
`gₙ` is the average of `Kₙ` and `Wₙ` the zero-mean antiderivative of its oscillating part.
Both are read off the Fourier series of `Kₙ` in `t`.

The first two orders coincide with the classical Krylov-Bogoliubov expansion. Higher orders
may differ from other averaging schemes by a near-identity change of the slow variables,
under which steady states and their stability are unchanged.

The harmonics evolve in `slow_time`, the oscillating terms themselves in `fast_time`.
If no input is used, a variable T is defined for `slow_time` and `fast_time` is taken as the independent variable
of `diff_eom`.

# Example
```julia-repl
julia> @variables t, x(t), ω0, ω, F;

# enter the simple harmonic oscillator
julia> diff_eom = DifferentialEquation( d(x,t,2) + ω0^2 * x ~ F *cos(ω*t), x);

# expand x in the harmonic ω
julia> add_harmonic!(diff_eom, x, ω);

# get equations for the harmonics evolving in the slow time T to first order
julia> harmonic_eom = get_krylov_equations(diff_eom, order = 1)

A set of 2 harmonic equations
Variables: u1(T), v1(T)
Parameters: ω, ω0, F

Harmonic ansatz:
x(t) = u1(T)*cos(ωt) + v1(T)*sin(ωt)

Harmonic equations:

(-(1//2)*v1(T)*(ω^2) + (1//2)*v1(T)*(ω0^2)) / ω ~ Differential(T, 1)(u1(T))

((1//2)*F + (1//2)*u1(T)*(ω^2) - (1//2)*u1(T)*(ω0^2)) / ω ~ Differential(T, 1)(v1(T))
```

"""
function get_krylov_equations(
    diff_eom::QuestBase.DifferentialEquation;
    order::Int64,
    fast_time=nothing,
    slow_time=nothing,
)
    proper_krylov_system(diff_eom, order)

    slow_time = isnothing(slow_time) ? (@variables T; T) : slow_time
    fast_time = isnothing(fast_time) ? get_independent_variables(diff_eom)[1] : fast_time

    # check before rearranging: `rearrange_standard!` can hide a variable in a denominator
    assert_averageable(diff_eom, fast_time)

    dEOM = deepcopy(diff_eom)
    !is_rearranged_standard(dEOM) ? rearrange_standard!(dEOM) : nothing
    eom = van_der_Pol(dEOM, fast_time)

    eom = slow_flow(eom; fast_time=fast_time, slow_time=slow_time, degree=2)

    rearrange!(eom, d(get_variables(eom), slow_time))
    field = Num[eq.lhs for eq in eom.equations]
    # the ansatz u cos(ωt) - v sin(ωt) of `van_der_Pol` turns into u cos(ωt) + v sin(ωt)
    reflected = [hvar.kind == SineQuadrature for hvar in eom.variables]
    averaged = lie_transform_average(field, get_variables(eom), fast_time, order; reflected)
    eom.equations = averaged .~ getfield.(eom.equations, :rhs)
    return eom
end
function proper_krylov_system(diff_eom::QuestBase.DifferentialEquation, order::Int)
    order < 1 && error("The order of the Krylov-Bogoliubov method must be at least 1!")
    harmonics = values(diff_eom.harmonics)
    all(isempty.(harmonics)) && error("No harmonics specified!")
    any(isempty.(harmonics)) &&
        error("Krylov-Bogoliubov method needs all variables to have a single harmonic!")
    any(length.(harmonics) .> 1) &&
        error("Krylov-Bogoliubov method only supports a single harmonic!")
    return nothing
end

function van_der_Pol(eom::QuestBase.DifferentialEquation, t::Num)
    dEOM = deepcopy(eom)
    first_order_transform!(dEOM, t)

    !is_harmonic(dEOM, t) && error("The differential equation is not harmonic in ", t, " !")
    eqs = get_equations(dEOM)
    rules, vars = Dict(), []

    # keep count to label new variables
    uv_idx = 1
    nvars = get_variables(dEOM)
    nvars = nvars[(length(nvars) ÷ 2 + 1):end]

    for nvar in nvars # sum over natural variables
        # each variable rotates at its own harmonic; the harmonics may be
        # commensurate (e.g. ω and 3ω) but need not be equal
        ω = first(dEOM.harmonics[nvar])
        rule_u, hvar_u = create_harmonic_variable(
            nvar, ω, t, CosineQuadrature; new_symbol="u" * string(uv_idx)
        )
        rule_v, hvar_v = create_harmonic_variable(
            nvar, ω, t, SineQuadrature; new_symbol="v" * string(uv_idx)
        )
        rule = rule_u - rule_v
        # the ansatz is u cos(ωt) - v sin(ωt); averaging reflects v back to u cos(ωt) + v sin(ωt)
        rules[nvar] = rule

        D = Differential(t)
        nvar_t = diff2term(D(unwrap(nvar)))
        vdP_rules = Dict(D(hvar_u.symbol) => 0, D(hvar_v.symbol) => 0)
        rules[nvar_t] = Symbolics.substitute(expand_derivatives(D(rule)), vdP_rules)

        uv_idx += 1
        push!(vars, hvar_u, hvar_v)
    end
    eqs = expand_derivatives.(substitute_all(eqs, rules))
    return HarmonicEquation(eqs, Vector{HarmonicVariable}(vars), eom)
end
