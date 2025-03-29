module HarmonicSteadyState

using QuestBase:
    QuestBase,
    HarmonicEquation,
    var_name,
    HarmonicBalanceMethod,
    declare_variables,
    declare_variable,
    hasnan,
    substitute_all,
    get_independent_variables,
    d
    # get_Jacobian,
    # _get_J_matrix

# default global settings
IM_TOL::Float64 = 1e-6
function set_imaginary_tolerance(x::Float64)
    @eval(IM_TOL::Float64 = $x)
end

using DocStringExtensions
using OrderedCollections: OrderedDict
using ProgressMeter: ProgressMeter, Progress
using LinearAlgebra: LinearAlgebra, eigvals
using Random: Random # for setting seed

using Distances: Distances
using BijectiveHilbert: BijectiveHilbert, Simple2D, decode_hilbert!, encode_hilbert
using HomotopyContinuation: HomotopyContinuation
using Symbolics: Symbolics, unwrap, wrap, Num
const HC = HomotopyContinuation
import FunctionWrappers: FunctionWrapper

include("extension_functions.jl")
include("HC_wrapper.jl")

include("types.jl")
include("utils.jl")
include("Problem.jl")
include("Jacobian.jl")
include("Result.jl")
include("methods.jl")

include("solve_homotopy.jl")
include("sorting.jl")
include("classification.jl")
include("transform_solutions.jl")

include("LinearResponse/LinearResponse.jl")
using .LinearResponse

include("LimitCycles/LimitCycles.jl")
using .LimitCycles

# handle solutions
export get_steady_states
export classify_solutions!
export get_class
export filter_result!
export get_single_solution
export transform_solutions
export IM_TOL

# methods
export WarmUp
export TotalDegree
export Polyhedral

export get_steady_states
export classify_solutions!
export get_class
export filter_result!
export get_single_solution
export transform_solutions
export IM_TOL
export set_imaginary_tolerance

# Error hint for extensions stubs
function __init__()
    Base.Experimental.register_error_hint(
        _error_hinter("OrdinaryDiffEq", :TimeEvolution, follow_branch), MethodError
    )
    Base.Experimental.register_error_hint(
        _error_hinter("OrdinaryDiffEq", :TimeEvolution, plot_1D_solutions_branch),
        MethodError,
    )
    Base.Experimental.register_error_hint(
        _error_hinter("SteadyStateDiffEq", :SteadyStateDiffEqExt, steady_state_sweep),
        MethodError,
    )
    for func in [
        plot_spaghetti,
        plot_eigenvalues,
        plot_rotframe_jacobian_response,
        plot_phase_diagram,
        plot_linear_response,
    ]
        Base.Experimental.register_error_hint(
            _error_hinter("Plots", :PlotsExt, func), MethodError
        )
    end
    return nothing
end

end
