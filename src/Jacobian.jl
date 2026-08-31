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

"""
$(SIGNATURES)

Fill in the symbolic Jacobian of `eom`, keeping the placeholder when deriving it symbolically
is too expensive.

This is opt-in, for inspecting the matrix. Stability analysis does not use it: it evaluates
the Jacobian implicitly, solving for the derivatives numerically once the parameters have
values, which agrees with this matrix at every steady state and stays cheap on systems where
this one does not.

[`get_Jacobian`](@ref) first rearranges the system so the derivatives stand alone on one
side, which is a symbolic linear solve. That solve grows combinatorially with the size of
the system: a van der Pol ansatz in three harmonics is already prohibitive.
"""
function add_jacobian!(eom::HarmonicEquation)
    jacobian = try
        get_Jacobian(eom)
    catch error
        error isa QuestBase.BareissTooLarge || rethrow()
        @debug "Symbolic Jacobian abandoned, it will be evaluated implicitly" error
        return eom.jacobian
    end
    return eom.jacobian .= jacobian
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
