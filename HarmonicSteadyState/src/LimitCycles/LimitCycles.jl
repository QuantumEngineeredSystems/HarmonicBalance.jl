module LimitCycles

using QuestBase:
    HarmonicBalanceMethod,
    _symidx,
    get_all_terms,
    substitute_all,
    DifferentialEquation,
    HarmonicEquation,
    HarmonicVariable,
    get_independent_variables,
    declare_variable

using DocStringExtensions

using Symbolics: Symbolics, Num, expand_derivatives, get_variables

using HarmonicSteadyState
using HarmonicSteadyState:
    WarmUp,
    Problem,
    Result,
    get_steady_states,
    order_branches!,
    find_branch_order,
    _remove_brackets,
    classify_solutions,
    _is_physical,
    var_name,
    get_implicit_Jacobian,
    _free_symbols,
    OrderedDict,
    promote_types,
    JacobianFunction

using HarmonicSteadyState:
    HarmonicSteadyState, Result, Problem

include("gauge_fixing.jl")
include("analysis.jl")

export get_cycle_variables, get_limit_cycles, add_pairs!

end
