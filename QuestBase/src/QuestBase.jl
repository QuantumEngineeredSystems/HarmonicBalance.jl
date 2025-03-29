module QuestBase

using DocStringExtensions
using OrderedCollections: OrderedCollections, OrderedDict, OrderedSet
using LinearAlgebra: LinearAlgebra

using SymbolicUtils:
    SymbolicUtils,
    Postwalk,
    Sym,
    BasicSymbolic,
    isterm,
    ispow,
    isadd,
    isdiv,
    ismul,
    add_with_div,
    frac_maketerm,
    @compactified,
    issym

using Symbolics:
    Symbolics,
    Num,
    unwrap,
    wrap,
    get_variables,
    Equation,
    Differential,
    @variables,
    arguments,
    substitute,
    term,
    expand,
    operation,
    expand_derivatives

include("utils.jl")
include("Symbolics/Symbolics_utils.jl")
include("Symbolics/exponentials.jl")
include("Symbolics/fourier.jl")
include("Symbolics/drop_powers.jl")
include("DifferentialEquation.jl")
include("HarmonicVariable.jl")
include("HarmonicEquation.jl")
include("abstracttypes.jl")

macro eqtest(expr)
    @assert expr.head == :call && expr.args[1] in [:(==), :(!=)]
    return esc(
        if expr.args[1] == :(==)
            :(@test isequal($(expr.args[2]), $(expr.args[3])))
        else
            :(@test !isequal($(expr.args[2]), $(expr.args[3])))
        end,
    )
end

macro eqsym(expr)
    @assert expr.head == :call && expr.args[1] in [:(==), :(!=)]
    return esc(
        if expr.args[1] == :(==)
            :(isequal($(expr.args[2]), $(expr.args[3])))
        else
            :(!isequal($(expr.args[2]), $(expr.args[3])))
        end,
    )
end

is_identity(A::Matrix{Num}) = (@eqsym A == Matrix{Num}(LinearAlgebra.I, size(A)...))
hasnan(x::Matrix{Num}) = any(my_isnan, unwrap.(x))
my_isnan(x) = isnan(x)
my_isnan(x::BasicSymbolic) = false


end
