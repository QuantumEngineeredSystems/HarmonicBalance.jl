module LinearResponse

using QuestBase: d, declare_variable

using HarmonicBalance: HarmonicBalance

using Printf: Printf, @printf
using DocStringExtensions
using ProgressMeter: ProgressMeter, Progress, next!

using Symbolics: Symbolics, Num, unwrap, get_variables
using LinearAlgebra: norm, eigen, eigvals, eigvecs

using HarmonicSteadyState:
    Result,
    get_variable_solutions,
    _get_mask,
    StateDict,
    get_single_solution,
    get_class,
    swept_parameters,
    _free_symbols

using QuestBase:
    HarmonicVariable,
    DifferentialEquation,
    get_independent_variables,
    var_name,
    substitute_all,
    get_Jacobian

include("types.jl")
include("utils.jl")
include("Lorentzian_spectrum.jl")
include("response.jl")

export show,
    get_jacobian_response,
    get_linear_response,
    get_rotframe_jacobian_response,
    eigenvalues,
    eigenvectors

end
