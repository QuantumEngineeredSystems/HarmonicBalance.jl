"""
    harmonic_ansatz(eom::DifferentialEquation, time::Num; coordinates="Cartesian")

Expand each variable of `diff_eom` using the harmonics assigned to it with `time` as the
time variable. For each harmonic of each variable, instance(s) of `HarmonicVariable` are
automatically created and named.
"""
function harmonic_ansatz(diff_eom::DifferentialEquation, time::Num)
    assert_averageable(diff_eom, time)
    rules, vars = harmonic_variables(diff_eom, time)
    eqs = substitute_all(collect(values(diff_eom.equations)), rules)
    return HarmonicEquation(eqs, vars, diff_eom)
end

"""
The harmonic variables of `diff_eom` with `time` as the time variable, and for each natural
variable the sum of its harmonics that replaces it.
"""
function harmonic_variables(diff_eom::DifferentialEquation, time::Num)
    rules = Dict{Num,Num}()
    vars = HarmonicVariable[]

    # keep count to label new variables
    uv_idx = 1
    a_idx = 1

    for nvar in get_variables(diff_eom) # sum over natural variables
        to_substitute = Num(0) # combine all the substitution rules for var
        for ω in diff_eom.harmonics[nvar]
            if !isequal(ω, 0) # nonzero harmonic - create u,v
                rule_u, hvar_u = create_harmonic_variable(
                    nvar, ω, time, CosineQuadrature; new_symbol="u" * string(uv_idx)
                )
                rule_v, hvar_v = create_harmonic_variable(
                    nvar, ω, time, SineQuadrature; new_symbol="v" * string(uv_idx)
                )
                rule = rule_u + rule_v
                uv_idx += 1
                push!(vars, hvar_u, hvar_v)
            else # zero harmonic - create a
                rule, hvar = create_harmonic_variable(
                    nvar, ω, time, ZeroHarmonic; new_symbol="a" * string(a_idx)
                )
                a_idx += 1
                push!(vars, hvar)
            end
            to_substitute += rule
        end

        rules[nvar] = to_substitute # total sub rule for nvar
    end
    return rules, vars
end

function slow_flow!(eom::HarmonicEquation; fast_time::Num, slow_time::Num, degree=2)
    eom.equations = expand_derivatives.(eom.equations) # expand all the derivatives

    # fast_time => slow_time for derivatives up to degree-1
    vars = get_variables(eom)
    new_vars = Num[substitute_all(var, fast_time => slow_time) for var in vars]
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

"""
$(TYPEDSIGNATURES)

The harmonic ansatz of `diff_eom` followed by the slow flow, equal to
`slow_flow(harmonic_ansatz(diff_eom, fast_time); fast_time, slow_time, degree)`.

Rather than substituting the ansatz into the equations, expanding every derivative there
and then rewriting the result, each derivative of a natural variable is written down in
closed form and substituted once. For a harmonic `u(t) f(ωt)`, Leibniz' rule gives

    dᵏ/dtᵏ [u f(ωt)] = Σⱼ binomial(k, j) u⁽ʲ⁾ ωᵏ⁻ʲ f⁽ᵏ⁻ʲ⁾(ωt),

and the slow flow turns `u⁽ʲ⁾` into the `j`-th derivative of `u(T)` in the slow time for
`j < degree` and drops it for `j == degree`.
"""
function slow_flow_ansatz(
    diff_eom::DifferentialEquation; fast_time::Num, slow_time::Num, degree::Int=2
)
    assert_averageable(diff_eom, fast_time)
    fast_rules, fast_vars = harmonic_variables(diff_eom, fast_time)
    # The parameters in the order `harmonic_ansatz` finds them. The order is observable, as
    # downstream solvers draw their generic parameters by position, so it is read off the
    # same substituted equations; a parameter the slow flow eliminates is kept as well.
    ansatz_eqs = substitute_all(collect(values(diff_eom.equations)), fast_rules)
    parameters = HarmonicEquation(ansatz_eqs, fast_vars, diff_eom).parameters
    vars = HarmonicVariable[
        HarmonicVariable(
            substitute_all(hvar.symbol, fast_time => slow_time),
            hvar.name,
            hvar.kind,
            hvar.ω,
            hvar.natural_variable,
        ) for hvar in fast_vars
    ]
    # expanding first leaves every derivative of a natural variable as `Dᵏ(x(t))`
    eqs = expand_derivatives.(collect(values(diff_eom.equations)))
    natural_variables = collect(keys(diff_eom.equations))

    rules = Dict{Num,Num}()
    pieces = DerivativePieces()
    for eq in eqs, side in (eq.lhs, eq.rhs), node in get_variables(side)
        haskey(rules, Num(node)) && continue
        nvar, order = derivative_of(node, natural_variables, fast_time)
        order < 0 && continue
        rules[Num(node)] = sum(
            harmonic_derivative(hvar, order, pieces; fast_time, slow_time, degree) for
            hvar in vars if isequal(hvar.natural_variable, nvar);
            init=Num(0),
        )
    end
    return HarmonicEquation(substitute_all(eqs, rules), vars, parameters, diff_eom)
end

"""
The natural variable among `natural_variables` that `node` is a `time` derivative of, and
the order of the derivative; order zero is the variable itself and order -1 means `node`
is neither.
"""
function derivative_of(node::BasicSymbolic, natural_variables::Vector{Num}, time::Num)
    target, order = differentiated(node, time)
    index = findfirst(nvar -> isequal(unwrap(nvar), target), natural_variables)
    isnothing(index) && return Num(0), -1
    return natural_variables[index], order
end

"The expression `node` is a `time` derivative of, and the order; `node` itself at order zero."
function differentiated(node::BasicSymbolic, time::Num)
    Symbolics.is_derivative(node) || return node, 0
    D = Symbolics.operation(node)
    isequal(D.x, unwrap(time)) ||
        throw(ArgumentError("The derivative $node is not with respect to $time."))
    return Symbolics.arguments(node)[1], D.order
end

"""
The factors of the derivative terms that recur: the trig derivatives and powers of a
frequency are shared by the `u` and `v` of every variable with that harmonic, and a slow
derivative by every order of its variable. Building each once spares interning it again.
"""
struct DerivativePieces
    trig::Dict{Tuple{Num,Int,Bool},Num}
    powers::Dict{Tuple{Num,Int},Num}
    slow::Dict{Tuple{Num,Int},Num}
end

function DerivativePieces()
    return DerivativePieces(
        Dict{Tuple{Num,Int,Bool},Num}(),
        Dict{Tuple{Num,Int},Num}(),
        Dict{Tuple{Num,Int},Num}(),
    )
end

"""
The `order`-th `fast_time` derivative of the contribution of `hvar` to its natural
variable, after the slow flow of the given `degree`.
"""
function harmonic_derivative(
    hvar::HarmonicVariable,
    order::Int,
    pieces::DerivativePieces;
    fast_time::Num,
    slow_time::Num,
    degree::Int,
)
    u = hvar.symbol
    slow(j) =
        get!(() -> slow_derivative(u, j; fast_time, slow_time, degree), pieces.slow, (u, j))
    hvar.kind == ZeroHarmonic && return slow(order)
    is_cosine = hvar.kind == CosineQuadrature
    ω = hvar.ω
    terms = BasicSymbolic{SymReal}[
        mul_worker(
            SymReal,
            unwrap.([
                Num(binomial(order, j)),
                slow(j),
                get!(() -> ω^(order - j), pieces.powers, (ω, order - j)),
                get!(pieces.trig, (ω, order - j, is_cosine)) do
                    return trig_derivative(is_cosine ? cos : sin, order - j, ω * fast_time)
                end,
            ]),
        ) for j in 0:order if j != degree
    ]
    isempty(terms) && return Num(0)
    return Num(add_worker(SymReal, terms))
end

"""
The `j`-th `fast_time` derivative of the slow variable `u`, as the slow flow leaves it:
a `slow_time` derivative below `degree`, zero at `degree`, and untouched above.
"""
function slow_derivative(u::Num, j::Int; fast_time::Num, slow_time::Num, degree::Int)
    j < degree && return d(u, slow_time, j)
    j == degree && return Num(0)
    return d(u, fast_time, j)
end

"The `m`-th derivative of `f(θ)` for `f` either `cos` or `sin`."
function trig_derivative(f::Union{typeof(cos),typeof(sin)}, m::Int, θ::Num)
    shift = mod(m + (f === sin ? 3 : 0), 4) # sin(θ) = cos(θ - π/2)
    shift == 0 && return cos(θ)
    shift == 1 && return -sin(θ)
    shift == 2 && return -cos(θ)
    return sin(θ)
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
    natural_variables = collect(keys(QuestBase.source(eom).equations))

    # Every harmonic of a given natural variable is projected out of the same equation,
    # so group them and ask for all their coefficients in one go. `fourier_terms` then
    # expands that equation once instead of once per harmonic.
    groups = Dict{Int,Vector{Int}}()
    for (i, hvar) in enumerate(eom.variables)
        eq_idx = findfirst(x -> isequal(x, hvar.natural_variable), natural_variables)
        push!(get!(groups, eq_idx, Int[]), i)
    end

    for (eq_idx, idxs) in groups
        specs = map(idxs) do i
            hvar = eom.variables[i]
            if hvar.kind == CosineQuadrature
                (hvar.ω, cos)
            elseif hvar.kind == SineQuadrature
                (hvar.ω, sin)
            else
                (0, cos) # zero-harmonic: pick out the constants
            end
        end
        for (i, eq) in
            zip(idxs, QuestBase.fourier_terms(eom.equations[eq_idx], time, specs))
            avg_eqs[i] = eq
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

`degree` is the order of the first `slow_time` derivative that is dropped. The default
`degree=2` gives the slow flow, first order in `slow_time`. With `degree=3` the second
derivatives of the harmonic variables are kept, so that linearising around a steady state
gives the quadratic eigenvalue problem of Hill's method. HarmonicSteadyState.jl then decides
stability and linear response from it, which stays correct when an eigenvalue is comparable
to a harmonic frequency, as it typically is for ansätze of several harmonics. The steady
states themselves do not depend on `degree`. Time evolution of the harmonic equations needs
the default `degree=2`.

`explicit_jacobian` fills in the symbolic Jacobian of the rearranged system, see
[`add_jacobian!`](@ref). It defaults to `false`: stability analysis evaluates the Jacobian
implicitly and never reads this field, while deriving it needs a symbolic mass-matrix
inversion that dominates the cost of this function on larger systems. Pass
`explicit_jacobian=true` to inspect the matrix, or call [`get_Jacobian`](@ref) on the result.

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
    explicit_jacobian=false,
)
    slow_time = isnothing(slow_time) ? (@variables T; T) : slow_time
    fast_time = isnothing(fast_time) ? get_independent_variables(diff_eom)[1] : fast_time

    for pair in diff_eom.harmonics
        isempty(pair[2]) && error("No harmonics specified for the variable $(pair[1])!")
    end
    # substitute the harmonics into the differential equation and drop derivatives of
    # order `degree`, the slow flow
    eom = slow_flow_ansatz(diff_eom; fast_time, slow_time, degree)
    # perform averaging over the frequencies originally specified in dEOM
    fourier_transform!(eom, fast_time)
    # drop higher powers of the first-order derivatives
    eom = drop_powers(eom, d(get_variables(eom), slow_time), 2)

    explicit_jacobian == true ? add_jacobian!(eom) : nothing
    return eom
end

"""
$(TYPEDSIGNATURES)

Throw if `diff_eom` cannot be averaged: every time dependence must be harmonic in `time`
and every equation must be polynomial in the variables and their derivatives.

The second condition is the one silently violated by terms such as `sin(x)` or `exp(x)`:
the harmonic ansatz turns them into a function of `time` which is not a finite Fourier
series, so the Fourier projection returns nothing for them and they drop out of the
harmonic equations without a trace.
"""
function assert_averageable(diff_eom::DifferentialEquation, time::Num)
    is_harmonic(diff_eom, time) ||
        error("The differential equation is not harmonic in ", time, " !")

    bad_terms = QuestBase.nonpolynomial_terms(diff_eom)
    isempty(bad_terms) || throw(
        ArgumentError(
            "The term(s) $(join(bad_terms, ", ")) are not polynomial in " *
            "$(join(get_variables(diff_eom), ", ")) and cannot be averaged. " *
            "Harmonic balance replaces each variable by a truncated Fourier series, which " *
            "stays a finite Fourier series only under sums, products and non-negative " *
            "integer powers. Expand such terms in the variables first " *
            "(e.g. sin(x) ≈ x - x^3/6) before deriving the harmonic equations.",
        ),
    )
    return nothing
end

"Rearrange `eq` to have zero on the right-hand-side."
_set_zero_rhs(eq::Equation) = eq.lhs - eq.rhs ~ 0
_set_zero_rhs(eqs::Vector{Equation}) = [_set_zero_rhs(eq) for eq in eqs]
