"""
$(TYPEDEF)

Holds a set of algebraic equations governing the harmonics of a `DifferentialEquation`.

# Fields
$(TYPEDFIELDS)
"""
mutable struct HarmonicEquation
    """A set of equations governing the harmonics."""
    equations::Vector{Equation}
    """A set of variables describing the harmonics."""
    variables::Vector{HarmonicVariable}
    """The parameters of the equation set."""
    parameters::Vector{Num}
    "The natural equation (before the harmonic ansatz was used)."
    natural_equation::DifferentialEquation
    "The Jacobian of the natural equation."
    jacobian::Matrix{Num}

    # use a self-referential constructor with _parameters
    function HarmonicEquation(equations, variables, nat_eq)
        return (
            x = new(
                equations,
                variables,
                Num[],
                nat_eq,
                dummy_symbolic_Jacobian(length(variables)),
            );
            x.parameters = _parameters(x);
            x
        )
    end
    function HarmonicEquation(equations, variables, parameters, natural_equation)
        return new(
            equations,
            variables,
            parameters,
            natural_equation,
            dummy_symbolic_Jacobian(length(variables)),
        )
    end
end

"Get the parameters (not time nor variables) of a HarmonicEquation"
function _parameters(eom::HarmonicEquation)
    all_symbols = flatten([
        cat(get_variables(eq.lhs), get_variables(eq.rhs); dims=1) for eq in eom.equations
    ])
    # subtract the set of independent variables (i.e., time) from all free symbols
    return setdiff(all_symbols, get_variables(eom), get_independent_variables(eom))
end

"""
$(TYPEDSIGNATURES)
Get the internal symbols of the independent variables of `eom`.
"""
function Symbolics.get_variables(eom::HarmonicEquation)::Vector{Num}
    return get_variables.(eom.variables)
end

function Base.show(io::IO, eom::HarmonicEquation)
    println(io, "A set of ", length(eom.equations), " harmonic equations")
    println(io, "Variables: ", join(string.(get_variables(eom)), ", "))
    println(io, "Parameters: ", join(string.(eom.parameters), ", "))
    println(io, "\nHarmonic ansatz: ", _show_ansatz(eom))
    println(io, "\nHarmonic equations:")
    return [println(io, "\n", eq) for eq in eom.equations]
end

"""Gives the full harmonic ansatz used to construct `eom`."""
function _show_ansatz(eom::HarmonicEquation)
    output = ""
    vars = unique(getfield.(eom.variables, :natural_variable))
    for nat_var in vars
        # the Hopf variable (limit cycle frequency) does not contribute a term
        harm_vars = filter(
            x -> isequal(nat_var, x.natural_variable) && x.type !== "Hopf", eom.variables
        )
        ansatz = join([_show_ansatz(var) for var in harm_vars], " + ")
        output *= "\n" * string(nat_var) * " = " * ansatz
    end
    return output
end

Base.show(eom::HarmonicEquation) = show_fields(eom)

"Apply `rules` to both `equations` and `variables` field of `eom`"
function substitute_all(eom::HarmonicEquation, rules::Union{Dict,Pair})::HarmonicEquation
    new_eom = deepcopy(eom)
    new_eom.equations = expand_derivatives.(substitute_all(eom.equations, rules))
    return new_eom
end

#   Drop powers of `var` of degree >= `deg` from the equation set in `eom`.
function drop_powers(eom::HarmonicEquation, terms::Vector{Num}, deg::Int)
    new_eom = deepcopy(eom)
    new_eom.equations = drop_powers(eom.equations, terms, deg)
    return new_eom
end

"""
$(TYPEDSIGNATURES)
Return the independent variables (typically time) of `eom`.
"""
function get_independent_variables(eom::HarmonicEquation)::Vector{Num}
    dynamic_vars = flatten(getfield.(eom.variables, Symbol("symbol")))
    return flatten(unique([SymbolicUtils.arguments(var.val) for var in dynamic_vars]))
end

_remove_brackets(var::Num) = declare_variable(var_name(var))
_remove_brackets(vars::Vector{Num}) = _remove_brackets.(vars)
_remove_brackets(hv::HarmonicVariable) = _remove_brackets(hv.symbol)

"Returns the equation system in `eom`, dropping all argument brackets (i.e., u(T) becomes u)."
function _remove_brackets(eom::HarmonicEquation)
    variable_rules = [var => _remove_brackets(var) for var in get_variables(eom)]
    equations_lhs = Num.(getfield.(eom.equations, :lhs) - getfield.(eom.equations, :rhs))
    return substitute_all(equations_lhs, variable_rules)
end

"""
$(TYPEDSIGNATURES)
Rearrange `eom` to the standard form, such that the derivatives of the variables are on one side.
"""
function rearrange_standard(eom::HarmonicEquation)
    tvar = get_independent_variables(eom)[1]
    dvars = d(get_variables(eom), tvar)
    return rearrange(eom, dvars)
end

"""
$(TYPEDSIGNATURES)
Rearrange `eom` to the standard form, such that the derivatives of the variables are on one side.
"""
function rearrange_standard!(eom::HarmonicEquation)
    tmp_eom = rearrange_standard(eom::HarmonicEquation)
    eom.equations = tmp_eom.equations
    return eom
end

"Rearrange an equation system such that the field equations is equal to the vector specified in new_lhs"
function rearrange!(eom::HarmonicEquation, new_rhs::Vector{Num})
    soln = Symbolics.symbolic_linear_solve(
        eom.equations, new_rhs; simplify=false, check=true
    )
    eom.equations = soln .~ new_rhs
    return nothing
end

function rearrange(eom::HarmonicEquation, new_rhs::Vector{Num})
    new_eom = deepcopy(eom)
    rearrange!(new_eom, new_rhs)
    return new_eom
end

"""
$(TYPEDSIGNATURES)
Check if `eom` is rearranged to the standard form, such that the derivatives of the variables are on one side.
"""
function is_rearranged(eom::HarmonicEquation)
    tvar = get_independent_variables(eom)[1]
    dvar = d(get_variables(eom), tvar)
    lhs = getfield.(eom.equations, :lhs)
    rhs = getfield.(eom.equations, :rhs)

    HB_bool = isequal(rhs, dvar)
    hopf_bool = in("Hopf", getfield.(eom.variables, :type))
    MF_bool =
        !any([occursin(str1, str2) for str1 in string.(dvar) for str2 in string.(lhs)])

    # Hopf-containing equations or MF equation are arranged by construstion
    return HB_bool || hopf_bool || MF_bool
end

function declare_variables(eom::HarmonicEquation)
    vars_orig = get_variables(eom)
    return declare_variable.(var_name.(vars_orig))
end
