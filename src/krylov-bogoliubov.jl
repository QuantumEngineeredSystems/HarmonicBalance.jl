get_harmonic(var::HarmonicVariable) = var.ω
get_harmonics(eom::HarmonicEquation) = get_harmonic.(eom.variables)

"""
$(TYPEDSIGNATURES)

Apply the Krylov-Bogoliubov averaging method to a specific `order` to obtain a set of ODEs (the slow-flow equations) governing the harmonics of `diff_eom`.

The harmonics evolve in `slow_time`, the oscillating terms themselves in `fast_time`.
If no input is used, a variable T is defined for `slow_time` and `fast_time` is taken as the independent variable
of `diff_eom`.

Krylov-Bogoliubov averaging method can be applied up to `order = 2`.

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
Parameters: ω, F, ω0

Harmonic ansatz:
xˍt(t) =
x(t) = u1(T)*cos(ωt) + v1(T)*sin(ωt)

Harmonic equations:

((1//2)*(ω^2)*v1(T) - (1//2)*(ω0^2)*v1(T)) / ω ~ Differential(T)(u1(T))

((1//2)*(ω0^2)*u1(T) - (1//2)*F - (1//2)*(ω^2)*u1(T)) / ω ~ Differential(T)(v1(T))
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

    dEOM = deepcopy(diff_eom)
    !is_rearranged_standard(dEOM) ? rearrange_standard!(dEOM) : nothing
    eom = van_der_Pol(dEOM, fast_time)

    eom = slow_flow(eom; fast_time=fast_time, slow_time=slow_time, degree=2)

    rearrange!(eom, d(get_variables(eom), slow_time))
    eom.equations = Symbolics.expand.(Symbolics.simplify.(eom.equations))
    eom.equations = Symbolics.expand.(Symbolics.simplify.(eom.equations))
    #^ need it two times to get it completely simplified due to some weird bug in Symbolics.jl

    if order == 1
        average!(eom, fast_time)
    elseif order == 2
        vars_symb = get_variables(eom)
        Fₜ = Num.(getfield.(eom.equations, :lhs))
        F₀ = Num.(getfield.(average(eom, fast_time), :lhs))
        Fₜ′ = Symbolics.substitute(
            get_Jacobian(eom), Dict(zip(_remove_brackets.(vars_symb), vars_symb))
        )

        Ḋ₁ = trig_reduce.(Fₜ - F₀)
        D₁ = take_trig_integral.(Ḋ₁, get_harmonics(eom), fast_time)
        D₁ = D₁ - average.(D₁, fast_time)

        Gₜ = Fₜ′ * D₁ # trig_reduce.(Fₜ′ * D₁)
        G₀ = average.(Gₜ, fast_time)
        eom.equations = F₀ + G₀ .~ getfield.(eom.equations, :rhs)
    end

    change_convention!(eom, slow_time)
    return eom
end
function proper_krylov_system(diff_eom::QuestBase.DifferentialEquation, order::Int)
    order < 1 && error("The order of the Krylov-Bogoliubov method must be at least 1!")
    order > 2 && error("Krylov-Bogoliubov implementation only supports up to second order!")
    harmonics = values(diff_eom.harmonics)
    all(isempty.(harmonics)) && error("No harmonics specified!")
    any(isempty.(harmonics)) &&
        error("Krylov-Bogoliubov method needs all variables to have a single harmonic!")
    any(length.(harmonics) .> 1) &&
        error("Krylov-Bogoliubov method only supports a single harmonic!")
    return nothing
end

function change_convention!(eom::HarmonicEquation, slow_time)
    eqs = eom.equations
    vars = filter(u -> u.type == "v", eom.variables)
    convention = Dict(v.symbol => -v.symbol for v in vars)

    eom.equations = expand_derivatives.(substitute_all(eqs, convention))
    rearrange!(eom, d(get_variables(eom), slow_time))
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
    ω = first(flatten(unique(values(dEOM.harmonics))))
    nvars = get_variables(dEOM)
    nvars = nvars[(length(nvars) ÷ 2 + 1):end]

    for nvar in nvars # sum over natural variables
        rule_u, hvar_u = _create_harmonic_variable(
            nvar, ω, t, "u"; new_symbol="u" * string(uv_idx)
        )
        rule_v, hvar_v = _create_harmonic_variable(
            nvar, ω, t, "v"; new_symbol="v" * string(uv_idx)
        )
        rule = rule_u - rule_v
        # ~ this is a choice, we use u*cos(ωt) + v*sin(ωt) as the ansatz, but later impose this by using `change_convention!`
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

function average!(eom::HarmonicEquation, t)
    return eom.equations = average(eom, t)
end
function average(eom::HarmonicEquation, t)
    eqs = similar(eom.equations)
    for (i, eq) in pairs(eom.equations)
        lhs = average(Num(eq.lhs), t)
        rhs = average(Num(eq.rhs), t)
        eqs[i] = lhs ~ rhs
    end
    return eqs
end
function average(x, t)
    term = trig_reduce(x)
    indep = get_independent(term, t)
    ft = Num(simplify_complex(Symbolics.expand(indep)))
    return Symbolics.expand(ft)
end

function take_trig_integral(x::BasicSymbolic, ω, t)
    if isdiv(x)
        arg_num = Symbolics.arguments(x.num)
        return Symbolics.simplify(
            Symbolics.expand(sum(take_trig_integral.(arg_num, ω, t)) * ω)
        ) / (x.den * ω)
    else
        all_terms = get_all_terms(Num(x))
        trigs = filter(z -> is_trig(z), all_terms)
        D = Differential(t)

        rules = []
        for trig in trigs
            arg = first(Symbolics.arguments(trig.val))
            type = Symbolics.operation(trig.val)

            term = Num((type == cos ? sin(arg) : -cos(arg)) / expand_derivatives(D(arg)))
            append!(rules, [trig => term])
        end

        return Symbolics.substitute(x, Dict(rules))
    end
end
take_trig_integral(x::Num, ω, t) = take_trig_integral(Symbolics.expand(unwrap(x)), ω, t)

export first_order_transform!,
    is_rearranged_standard, rearrange_standard!, get_equations, get_krylov_equations
