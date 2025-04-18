"""
The Jacobian is stored in the Problem object as a
function that takes a solution dictionary to give the numerical Jacobian.
"""

"""
$(SIGNATURES)

Obtain the symbolic Jacobian matrix of `eom`.
This is the linearised left-hand side of F(u) = du/dT.
"""
function get_Jacobian(eom::HarmonicEquation)::Matrix{Num}
    rearr = !is_rearranged(eom) ? rearrange_standard(eom) : eom
    lhs = _remove_brackets(rearr)
    vars = _remove_brackets.(eom.variables)

    return get_Jacobian(lhs, vars)
end

function add_jacobian!(eom::HarmonicEquation)
    return eom.jacobian .= get_Jacobian(eom)
end

" Obtain a Jacobian from a `DifferentialEquation` by first converting it into a `HarmonicEquation`. "
function get_Jacobian(diff_eom::DifferentialEquation)::Matrix{Num}
    Symbolics.@variables T
    harmonic_eq = get_harmonic_equations(
        diff_eom; slow_time=T, fast_time=first(get_independent_variables(diff_eom))
    )
    return get_Jacobian(harmonic_eq)
end

" Get the Jacobian of a set of equations `eqs` with respect to the variables `vars`. "
function get_Jacobian(eqs::Vector{Num}, vars::Vector{Num})::Matrix{Num}
    length(eqs) == length(vars) || error("Jacobians are only defined for square systems!")
    M = Matrix{Num}(undef, length(vars), length(vars))

    for idx in CartesianIndices(M)
        M[idx] = expand_derivatives(d(eqs[idx[1]], vars[idx[2]]))
    end
    return M
end # TODO should replace with Symbolics.jacobian

function get_Jacobian(eqs::Vector{Equation}, vars::Vector{Num})::Matrix{Num}
    expr = Num[getfield(eq, :lhs) - getfield(eq, :rhs) for eq in eqs]
    return get_Jacobian(expr, vars)
end
