module HarmonicBalance

using DocStringExtensions
using Random: Random # for setting seed
using QuestBase:
    QuestBase,
    is_harmonic,
    substitute_all,
    drop_powers,
    d
using QuestBase.OrderedCollections: OrderedDict

using QuestBase:
    DifferentialEquation,
    HarmonicEquation,
    HarmonicVariable,
    var_name,
    flatten,
    _create_harmonic_variable,
    declare_variable,
    get_variables_nums,
    get_independent_variables,
    get_equations,
    add_harmonic!

using Symbolics:
    Symbolics,
    Num,
    Equation,
    @variables,
    expand_derivatives,
    get_variables,
    Differential,
    unwrap,
    diff2term,
    var_from_nested_derivative,
    lower_varname
using SymbolicUtils: SymbolicUtils

# src code
include("utils.jl")
include("DifferentialEquation.jl")
include("Jacobian.jl")
include("HarmonicEquation.jl")
include("krylov-bogoliubov.jl")

# Precompilation setup
using PrecompileTools: @setup_workload, @compile_workload
# @setup_workload begin
#     # Putting some things in `@setup_workload` instead of `@compile_workload` can reduce the size of the
#     # precompile file and potentially make loading faster.
#     @compile_workload begin
#         # all calls in this block will be precompiled, regardless of whether
#         # they belong to your package or not (on Julia 1.8 and higher)
#         include("precompilation.jl")
#     end
# end

# symbolics equations
export @variables
export d
export DifferentialEquation
export HarmonicEquation

export rearrange_standard
export rearrange_standard!
export first_order_transform!
export is_rearranged_standard
export get_equations

export get_harmonic_equations
export get_krylov_equations
export add_harmonic!

export get_independent_variables
export get_variables

end # module
