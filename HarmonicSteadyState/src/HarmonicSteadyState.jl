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
    d,
    _remove_brackets,
    get_Jacobian

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
using Symbolics: Symbolics, unwrap, wrap, Num, get_variables
const HC = HomotopyContinuation
import FunctionWrappers: FunctionWrapper

include("extension_functions.jl")

include("HC_wrapper.jl")
using .HC_wrapper

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

# methods
export WarmUp
export TotalDegree
export Polyhedral

# handle solutions
export get_steady_states
export classify_solutions!
export get_class
export filter_result!
export get_single_solution
export get_solutions
export transform_solutions
export IM_TOL
export set_imaginary_tolerance

# Result
export swept_parameter, swept_parameters
export get_solutions
export attractors
export phase_diagram

# Limit cycles
export get_cycle_variables, get_limit_cycles, add_pairs!

# LinearResponse
export get_Jacobian
export eigenvalues, eigenvectors

# plotting
export plot_linear_response
export plot_phase_diagram
export plot_rotframe_jacobian_response
export plot_eigenvalues
export plot_spaghetti

# extension functions
export AdiabaticSweep
export steady_state_sweep
export plot_1D_solutions_branch
export follow_branch

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
