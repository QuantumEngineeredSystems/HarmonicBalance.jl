module HarmonicBalance

using DocStringExtensions
using Random: Random # for setting seed

using QuestBase.OrderedCollections: OrderedDict

using QuestBase:
    DifferentialEquation,
    HarmonicEquation,
    HarmonicVariable,
    flatten,
    create_harmonic_variable,
    CosineQuadrature,
    SineQuadrature,
    ZeroHarmonic,
    get_independent_variables,
    get_equations,
    add_harmonic!,
    remove_brackets,
    is_rearranged,
    is_rearranged_standard,
    QuestBase,
    d,
    rearrange!,
    substitute_all,
    is_harmonic,
    rearrange_standard,
    rearrange_standard!,
    fourier_series,
    FourierComponent

using QuestBase: QuestBase, is_harmonic, substitute_all, drop_powers, d

using Symbolics:
    Symbolics,
    Num,
    Equation,
    @variables,
    expand_derivatives,
    get_variables,
    Differential,
    diff2term,
    lower_varname

using SymbolicUtils: SymbolicUtils, BasicSymbolic, SymReal, add_worker, mul_worker, unwrap

# src code
include("DifferentialEquation.jl")
include("Jacobian.jl")
include("HarmonicEquation.jl")
include("lie_transform.jl")
include("krylov-bogoliubov.jl")

using Reexport: @reexport
@reexport using HarmonicSteadyState

# Precompilation setup
using PrecompileTools: @setup_workload, @compile_workload
@setup_workload begin
    # Putting some things in `@setup_workload` instead of `@compile_workload` can reduce the size of the
    # precompile file and potentially make loading faster.
    @compile_workload begin
        # all calls in this block will be precompiled, regardless of whether
        # they belong to your package or not (on Julia 1.8 and higher)
        include("precompilation.jl")
    end
end

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
