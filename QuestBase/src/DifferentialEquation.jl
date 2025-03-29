"""
$(TYPEDEF)

Holds differential equation(s) of motion and a set of harmonics to expand each variable.
This is the primary input for `HarmonicBalance.jl`. After inputting the equations,
the harmonics ansatz needs to be specified using `add_harmonic!`.

# Fields
$(TYPEDFIELDS)

## Example
```julia-repl
julia> @variables t, x(t), y(t), ω0, ω, F, k;

# equivalent ways to enter the simple harmonic oscillator
julia> DifferentialEquation(d(x,t,2) + ω0^2 * x - F * cos(ω*t), x);
julia> DifferentialEquation(d(x,t,2) + ω0^2 * x ~ F * cos(ω*t), x);

# two coupled oscillators, one of them driven
julia> DifferentialEquation(
    [d(x,t,2) + ω0^2 * x - k*y, d(y,t,2) + ω0^2 * y - k*x] .~ [F * cos(ω*t), 0], [x,y]
);
```
"""
mutable struct DifferentialEquation
    """Assigns to each variable an equation of motion."""
    equations::OrderedDict{Num,Equation}
    """Assigns to each variable a set of harmonics."""
    harmonics::OrderedDict{Num,OrderedSet{Num}}

    function DifferentialEquation(eqs)
        return new(eqs, OrderedDict(var => OrderedSet() for var in keys(eqs)))
    end

    # uses the above constructor if no harmonics defined
    function DifferentialEquation(eqs::Vector{Equation}, vars::Vector{Num})
        return DifferentialEquation(OrderedDict(zip(vars, eqs)))
    end

    # if expressions are entered instead of equations, automatically set them = 0
    function DifferentialEquation(exprs::Vector{Num}, vars::Vector{Num})
        return DifferentialEquation(exprs .~ Int(0), vars)
    end

    function DifferentialEquation(eq::Equation, var::Num)
        typerhs = typeof(eq.rhs)
        typelhs = typeof(eq.lhs)
        if eq.rhs isa AbstractVector || eq.lhs isa AbstractVector
            throw(
                ArgumentError(
                    "The equation is of the form $(typerhs)~$(typelhs) is not supported.
                    Commenly one forgot to broadcast the equation symbol `~`."
                ),
            )
        end
        return DifferentialEquation([eq], [var])
    end
    function DifferentialEquation(eq::Equation, vars::Vector{Num})
        typerhs = typeof(eq.rhs)
        typelhs = typeof(eq.lhs)
        throw(
            ArgumentError(
                "The variables are of type $(typeof(vars)). Whereas you gave one equation of
                type $(typerhs)~$(typelhs). Commenly one forgot to broadcast the equation symbol `~`.",
            ),
        )
    end
    DifferentialEquation(lhs::Num, var::Num) = DifferentialEquation([lhs ~ Int(0)], [var])
end

"show method of the type `DifferentialEquation`"
function Base.show(io::IO, diff_eq::DifferentialEquation)
    println(io, "System of ", length(keys(diff_eq.equations)), " differential equations")
    println(io, "Variables:       ", join(keys(diff_eq.equations), ", "))
    print(io, "Harmonic ansatz: ")
    for var in keys(diff_eq.harmonics)
        print(io, string(var), " => ", join(string.(diff_eq.harmonics[var]), ", "))
        print(io, ";   ")
    end
    println(io, "\n")
    return [println(io, eq) for eq in values(diff_eq.equations)]
end
"
Displays the fields of the differential equation object.
"
Base.show(eom::DifferentialEquation) = show_fields(eom)
