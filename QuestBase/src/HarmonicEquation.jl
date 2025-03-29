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
