"""
$(TYPEDSIGNATURES)

Transforms a higher-order differential equation system into an equivalent first-order system
by introducing additional variables. Modifies the system in place. The `time` parameter
specifies the independent variable used for differentiation.
"""
function first_order_transform!(diff_eom::DifferentialEquation, time)
    states = unwrap.(collect(keys(diff_eom.harmonics)))
    orders = _state_orders(collect(values(diff_eom.equations)), states)
    D = Differential(time)
    highest = Num[(D^orders[state])(state) for state in states]
    rearrange!(diff_eom, highest)
    eqs′, states′ = ode_order_lowering(diff_eom.equations, time, diff_eom.harmonics, orders)
    diff_eom.equations = eqs′
    diff_eom.harmonics = states′
    return nothing
end

# Symbolics 7 packs D(D(x)) into Differential(t, 2)(x). Sum the order fields
# of any chained Differential nodes to recover the complete derivative order.
function _var_and_order(expr)
    e = unwrap(expr)
    total = 0
    while SymbolicUtils.iscall(e) && SymbolicUtils.operation(e) isa Differential
        op = SymbolicUtils.operation(e)
        total += op.order
        e = first(SymbolicUtils.arguments(e))
    end
    return e, total
end

function _state_orders(equations, states)
    orders = OrderedDict(state => 0 for state in states)
    for equation in equations, variable in get_variables(equation)
        state, order = _var_and_order(variable)
        haskey(orders, state) && (orders[state] = max(orders[state], order))
    end
    any(iszero, values(orders)) &&
        throw(ArgumentError("Each ODE state must appear with a time derivative."))
    return orders
end

function ode_order_lowering(equations, iv, harmonics, orders)
    D = Differential(iv)
    lowered = Dict(
        state => [lower_varname(state, iv, order) for order in 0:(count - 1)] for
        (state, count) in orders
    )
    # diff2term does not walk composite expressions. Replace derivative nodes
    # explicitly with the very same symbols used to declare the new states.
    rules = Dict(
        Num((D^order)(state)) => Num(lowered[state][order + 1]) for (state, count) in
                                                                    orders for
        order in 1:(count - 1)
    )
    diff_eqs = empty(equations)
    diff_vars = empty(harmonics)
    # Keep highest-derivative equations first, followed by the kinematic chain.
    # The Krylov construction consumes this established ordering.
    for (state, count) in orders
        variable = last(lowered[state])
        diff_vars[variable] = harmonics[Num(state)]
        rhs = substitute_all(Num(equations[Num(state)].rhs), rules)
        diff_eqs[variable] = D(variable) ~ rhs
    end
    for (state, count) in orders, order in (count - 1):-1:1
        variable = lowered[state][order]
        diff_vars[variable] = harmonics[Num(state)]
        diff_eqs[variable] = D(variable) ~ lowered[state][order + 1]
    end
    return diff_eqs, diff_vars
end
