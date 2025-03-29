"""
$(TYPEDSIGNATURES)

Checks if the differential equations in `eom` are arranged in standard form, where the highest
derivative of each variable appears isolated on the left-hand side. The default degree is 2,
corresponding to second-order differential equations.
"""
function is_rearranged_standard(eom::DifferentialEquation, degree=2)
    tvar = get_independent_variables(eom)[1]
    D = Differential(tvar)^degree
    return isequal(getfield.(values(eom.equations), :lhs), D.(get_variables(eom)))
end

"""
$(TYPEDSIGNATURES)

Rearranges the differential equations in `eom` to standard form, where the highest derivative
of each variable (specified by `degree`, default 2) appears isolated on the left-hand side.
Modifies the equations in place.
"""
function rearrange_standard!(eom::DifferentialEquation, degree=2)
    tvar = get_independent_variables(eom)[1]
    D = Differential(tvar)^degree
    dvars = D.(get_variables(eom))
    return rearrange!(eom, dvars)
end

"""
$(TYPEDSIGNATURES)

Rearranges the equations in `eom` such that the expressions in `new_lhs` appear isolated on
the left-hand sides. Uses symbolic linear solving to determine the right-hand sides. Modifies
the equations in place.
"""
function rearrange!(eom::DifferentialEquation, new_lhs::Vector{Num})
    soln = Symbolics.symbolic_linear_solve(
        get_equations(eom), new_lhs; simplify=false, check=true
    )
    eom.equations = OrderedDict(zip(get_variables_nums(new_lhs), new_lhs .~ soln))
    return nothing
end

"""
$(TYPEDSIGNATURES)

Creates a new differential equation system by rearranging the equations in `eom` such that
the expressions in `new_lhs` appear isolated on the left-hand sides. Similar to `rearrange!`
but returns a new system instead of modifying in place.
"""
function rearrange(eom::DifferentialEquation, new_lhs::Vector{Num})
    new_eom = deepcopy(eom)
    rearrange!(new_eom, new_lhs)
    return new_eom
end

"""
$(TYPEDSIGNATURES)

Transforms a higher-order differential equation system into an equivalent first-order system
by introducing additional variables. Modifies the system in place. The `time` parameter
specifies the independent variable used for differentiation.
"""
function first_order_transform!(diff_eom::DifferentialEquation, time)
    eqs′, states′ = ode_order_lowering(diff_eom.equations, time, diff_eom.harmonics)
    diff_eom.equations = eqs′
    diff_eom.harmonics = states′
    return nothing
end

"""
$(TYPEDSIGNATURES)

Helper function that performs the transformation of a higher-order differential equation system
into an equivalent first-order system. Returns a tuple of the transformed equations and the
corresponding harmonics dictionary for the new variables. Used internally by
`first_order_transform!`.
"""
function ode_order_lowering(equations, iv, harmonics)
    states = unwrap.(collect(keys(harmonics)))
    eqs = unwrap.(collect(values(equations)))

    var_order = OrderedDict{Any,Int}()
    D = Differential(iv)
    diff_eqs = empty(equations)
    diff_vars = empty(harmonics)

    for (i, eq) in enumerate(eqs)
        var, maxorder = var_from_nested_derivative(eq.lhs)
        maxorder > get(var_order, var, 1) && (var_order[var] = maxorder)

        var′ = lower_varname(var, iv, maxorder - 1)
        rhs′ = diff2term(eq.rhs)

        diff_vars[var′] = harmonics[var]
        diff_eqs[var′] = D(var′) ~ rhs′
    end

    for (var, order) in var_order
        for o in (order - 1):-1:1
            lvar = lower_varname(var, iv, o - 1)
            rvar = lower_varname(var, iv, o)

            diff_vars[lvar] = harmonics[var]
            diff_eqs[lvar] = D(lvar) ~ rvar
        end
    end

    return (diff_eqs, diff_vars)
end
