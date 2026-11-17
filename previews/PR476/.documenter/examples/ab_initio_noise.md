


# Ab Initio Noise sidebands and spectra {#Ab-Initio-Noise-sidebands-and-spectra}

This example demonstrates how to compute the spectra obtained from probing the system with noisy probe.

```julia
using HarmonicBalance, Plots
using ModelingToolkit, StaticArrays, StochasticDiffEq, DSP
using ModelingToolkit: setp
```


```ansi
WARNING: Method definition init_cacheval(LinearSolve.QRFactorization{P} where P, SciMLOperators.AbstractSciMLOperator{T} where T, Any, Any, Any, Any, Int64, Any, Any, Union{Bool, LinearSolve.LinearVerbosity{__T_default_lu_fallback, __T_no_right_preconditioning, __T_using_IterativeSolvers, __T_IterativeSolvers_iterations, __T_KrylovKit_verbosity, __T_KrylovJL_verbosity, __T_HYPRE_verbosity, __T_pardiso_verbosity, __T_blas_errors, __T_blas_invalid_args, __T_blas_info, __T_blas_success, __T_condition_number, __T_convergence_failure, __T_solver_failure, __T_max_iters} where __T_max_iters where __T_solver_failure where __T_convergence_failure where __T_condition_number where __T_blas_success where __T_blas_info where __T_blas_invalid_args where __T_blas_errors where __T_pardiso_verbosity where __T_HYPRE_verbosity where __T_KrylovJL_verbosity where __T_KrylovKit_verbosity where __T_IterativeSolvers_iterations where __T_using_IterativeSolvers where __T_no_right_preconditioning where __T_default_lu_fallback}, LinearSolve.OperatorAssumptions{T} where T) in module LinearSolve at /home/runner/.julia/packages/LinearSolve/WRutJ/src/factorization.jl:338 overwritten in module LinearSolveSparseArraysExt at /home/runner/.julia/packages/LinearSolve/WRutJ/ext/LinearSolveSparseArraysExt.jl:315.
ERROR: Method overwriting is not permitted during Module precompilation. Use `__precompile__(false)` to opt-out of precompilation.
[91m[1m┌ [22m[39m[91m[1mError: [22m[39mError during loading of extension LinearSolveSparseArraysExt of LinearSolve, use `Base.retry_load_extensions()` to retry.
[91m[1m│ [22m[39m  exception =
[91m[1m│ [22m[39m   [0m1-element ExceptionStack:
[91m[1m│ [22m[39m   Declaring __precompile__(false) is not allowed in files that are being precompiled.
[91m[1m│ [22m[39m   Stacktrace:
[91m[1m│ [22m[39m     [1] [0m[1m_require[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2069[24m[39m
[91m[1m│ [22m[39m     [2] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1882[24m[39m
[91m[1m│ [22m[39m     [3] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [4] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [5] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [6] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1872[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [7] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mextid[39m::[0mBase.ExtensionId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1365[24m[39m
[91m[1m│ [22m[39m     [8] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mpkgid[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1400[24m[39m
[91m[1m│ [22m[39m     [9] [0m[1mrun_package_callbacks[22m[0m[1m([22m[90mmodkey[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1224[24m[39m
[91m[1m│ [22m[39m    [10] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1889[24m[39m
[91m[1m│ [22m[39m    [11] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [12] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [13] [0m[1m_require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m
[91m[1m│ [22m[39m    [14] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1860[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [15] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mlock.jl:267[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [16] [0m[1m__require[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1823[24m[39m
[91m[1m│ [22m[39m    [17] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [18] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [19] [0m[1mrequire[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1816[24m[39m
[91m[1m│ [22m[39m    [20] [0m[1minclude[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mBase.jl:495[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [21] [0m[1minclude_package_for_output[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90minput[39m::[0mString, [90mdepot_path[39m::[0mVector[90m{String}[39m, [90mdl_load_path[39m::[0mVector[90m{String}[39m, [90mload_path[39m::[0mVector[90m{String}[39m, [90mconcrete_deps[39m::[0mVector[90m{Pair{Base.PkgId, UInt128}}[39m, [90msource[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2292[24m[39m
[91m[1m│ [22m[39m    [22] top-level scope
[91m[1m│ [22m[39m   [90m    @[39m [90m[4mstdin:4[24m[39m
[91m[1m│ [22m[39m    [23] [0m[1meval[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mboot.jl:385[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [24] [0m[1minclude_string[22m[0m[1m([22m[90mmapexpr[39m::[0mtypeof(identity), [90mmod[39m::[0mModule, [90mcode[39m::[0mString, [90mfilename[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2146[24m[39m
[91m[1m│ [22m[39m    [25] [0m[1minclude_string[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:2156[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [26] [0m[1mexec_options[22m[0m[1m([22m[90mopts[39m::[0mBase.JLOptions[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:321[24m[39m
[91m[1m│ [22m[39m    [27] [0m[1m_start[22m[0m[1m([22m[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:557[24m[39m
[91m[1m└ [22m[39m[90m@ Base loading.jl:1371[39m
WARNING: Method definition init_cacheval(LinearSolve.QRFactorization{P} where P, SciMLOperators.AbstractSciMLOperator{T} where T, Any, Any, Any, Any, Int64, Any, Any, Union{Bool, LinearSolve.LinearVerbosity{__T_default_lu_fallback, __T_no_right_preconditioning, __T_using_IterativeSolvers, __T_IterativeSolvers_iterations, __T_KrylovKit_verbosity, __T_KrylovJL_verbosity, __T_HYPRE_verbosity, __T_pardiso_verbosity, __T_blas_errors, __T_blas_invalid_args, __T_blas_info, __T_blas_success, __T_condition_number, __T_convergence_failure, __T_solver_failure, __T_max_iters} where __T_max_iters where __T_solver_failure where __T_convergence_failure where __T_condition_number where __T_blas_success where __T_blas_info where __T_blas_invalid_args where __T_blas_errors where __T_pardiso_verbosity where __T_HYPRE_verbosity where __T_KrylovJL_verbosity where __T_KrylovKit_verbosity where __T_IterativeSolvers_iterations where __T_using_IterativeSolvers where __T_no_right_preconditioning where __T_default_lu_fallback}, LinearSolve.OperatorAssumptions{T} where T) in module LinearSolve at /home/runner/.julia/packages/LinearSolve/WRutJ/src/factorization.jl:338 overwritten in module LinearSolveSparseArraysExt at /home/runner/.julia/packages/LinearSolve/WRutJ/ext/LinearSolveSparseArraysExt.jl:315.
ERROR: Method overwriting is not permitted during Module precompilation. Use `__precompile__(false)` to opt-out of precompilation.
[91m[1m┌ [22m[39m[91m[1mError: [22m[39mError during loading of extension LinearSolveSparseArraysExt of LinearSolve, use `Base.retry_load_extensions()` to retry.
[91m[1m│ [22m[39m  exception =
[91m[1m│ [22m[39m   [0m1-element ExceptionStack:
[91m[1m│ [22m[39m   Declaring __precompile__(false) is not allowed in files that are being precompiled.
[91m[1m│ [22m[39m   Stacktrace:
[91m[1m│ [22m[39m     [1] [0m[1m_require[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2069[24m[39m
[91m[1m│ [22m[39m     [2] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1882[24m[39m
[91m[1m│ [22m[39m     [3] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [4] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [5] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [6] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1872[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [7] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mextid[39m::[0mBase.ExtensionId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1365[24m[39m
[91m[1m│ [22m[39m     [8] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mpkgid[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1400[24m[39m
[91m[1m│ [22m[39m     [9] [0m[1mrun_package_callbacks[22m[0m[1m([22m[90mmodkey[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1224[24m[39m
[91m[1m│ [22m[39m    [10] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1889[24m[39m
[91m[1m│ [22m[39m    [11] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [12] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [13] [0m[1m_require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m
[91m[1m│ [22m[39m    [14] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1860[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [15] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mlock.jl:267[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [16] [0m[1m__require[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1823[24m[39m
[91m[1m│ [22m[39m    [17] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [18] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [19] [0m[1mrequire[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1816[24m[39m
[91m[1m│ [22m[39m    [20] [0m[1minclude[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mBase.jl:495[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [21] [0m[1minclude_package_for_output[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90minput[39m::[0mString, [90mdepot_path[39m::[0mVector[90m{String}[39m, [90mdl_load_path[39m::[0mVector[90m{String}[39m, [90mload_path[39m::[0mVector[90m{String}[39m, [90mconcrete_deps[39m::[0mVector[90m{Pair{Base.PkgId, UInt128}}[39m, [90msource[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2292[24m[39m
[91m[1m│ [22m[39m    [22] top-level scope
[91m[1m│ [22m[39m   [90m    @[39m [90m[4mstdin:4[24m[39m
[91m[1m│ [22m[39m    [23] [0m[1meval[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mboot.jl:385[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [24] [0m[1minclude_string[22m[0m[1m([22m[90mmapexpr[39m::[0mtypeof(identity), [90mmod[39m::[0mModule, [90mcode[39m::[0mString, [90mfilename[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2146[24m[39m
[91m[1m│ [22m[39m    [25] [0m[1minclude_string[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:2156[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [26] [0m[1mexec_options[22m[0m[1m([22m[90mopts[39m::[0mBase.JLOptions[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:321[24m[39m
[91m[1m│ [22m[39m    [27] [0m[1m_start[22m[0m[1m([22m[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:557[24m[39m
[91m[1m└ [22m[39m[90m@ Base loading.jl:1371[39m
WARNING: Method definition init_cacheval(LinearSolve.QRFactorization{P} where P, SciMLOperators.AbstractSciMLOperator{T} where T, Any, Any, Any, Any, Int64, Any, Any, Union{Bool, LinearSolve.LinearVerbosity{__T_default_lu_fallback, __T_no_right_preconditioning, __T_using_IterativeSolvers, __T_IterativeSolvers_iterations, __T_KrylovKit_verbosity, __T_KrylovJL_verbosity, __T_HYPRE_verbosity, __T_pardiso_verbosity, __T_blas_errors, __T_blas_invalid_args, __T_blas_info, __T_blas_success, __T_condition_number, __T_convergence_failure, __T_solver_failure, __T_max_iters} where __T_max_iters where __T_solver_failure where __T_convergence_failure where __T_condition_number where __T_blas_success where __T_blas_info where __T_blas_invalid_args where __T_blas_errors where __T_pardiso_verbosity where __T_HYPRE_verbosity where __T_KrylovJL_verbosity where __T_KrylovKit_verbosity where __T_IterativeSolvers_iterations where __T_using_IterativeSolvers where __T_no_right_preconditioning where __T_default_lu_fallback}, LinearSolve.OperatorAssumptions{T} where T) in module LinearSolve at /home/runner/.julia/packages/LinearSolve/WRutJ/src/factorization.jl:338 overwritten in module LinearSolveSparseArraysExt at /home/runner/.julia/packages/LinearSolve/WRutJ/ext/LinearSolveSparseArraysExt.jl:315.
ERROR: Method overwriting is not permitted during Module precompilation. Use `__precompile__(false)` to opt-out of precompilation.
[91m[1m┌ [22m[39m[91m[1mError: [22m[39mError during loading of extension LinearSolveSparseArraysExt of LinearSolve, use `Base.retry_load_extensions()` to retry.
[91m[1m│ [22m[39m  exception =
[91m[1m│ [22m[39m   [0m1-element ExceptionStack:
[91m[1m│ [22m[39m   Declaring __precompile__(false) is not allowed in files that are being precompiled.
[91m[1m│ [22m[39m   Stacktrace:
[91m[1m│ [22m[39m     [1] [0m[1m_require[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2069[24m[39m
[91m[1m│ [22m[39m     [2] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1882[24m[39m
[91m[1m│ [22m[39m     [3] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [4] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [5] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [6] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1872[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [7] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mextid[39m::[0mBase.ExtensionId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1365[24m[39m
[91m[1m│ [22m[39m     [8] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mpkgid[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1400[24m[39m
[91m[1m│ [22m[39m     [9] [0m[1mrun_package_callbacks[22m[0m[1m([22m[90mmodkey[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1224[24m[39m
[91m[1m│ [22m[39m    [10] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1889[24m[39m
[91m[1m│ [22m[39m    [11] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [12] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [13] [0m[1m_require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m
[91m[1m│ [22m[39m    [14] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1860[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [15] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mlock.jl:267[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [16] [0m[1m__require[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1823[24m[39m
[91m[1m│ [22m[39m    [17] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [18] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [19] [0m[1mrequire[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1816[24m[39m
[91m[1m│ [22m[39m    [20] [0m[1minclude[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mBase.jl:495[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [21] [0m[1minclude_package_for_output[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90minput[39m::[0mString, [90mdepot_path[39m::[0mVector[90m{String}[39m, [90mdl_load_path[39m::[0mVector[90m{String}[39m, [90mload_path[39m::[0mVector[90m{String}[39m, [90mconcrete_deps[39m::[0mVector[90m{Pair{Base.PkgId, UInt128}}[39m, [90msource[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2292[24m[39m
[91m[1m│ [22m[39m    [22] top-level scope
[91m[1m│ [22m[39m   [90m    @[39m [90m[4mstdin:4[24m[39m
[91m[1m│ [22m[39m    [23] [0m[1meval[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mboot.jl:385[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [24] [0m[1minclude_string[22m[0m[1m([22m[90mmapexpr[39m::[0mtypeof(identity), [90mmod[39m::[0mModule, [90mcode[39m::[0mString, [90mfilename[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2146[24m[39m
[91m[1m│ [22m[39m    [25] [0m[1minclude_string[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:2156[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [26] [0m[1mexec_options[22m[0m[1m([22m[90mopts[39m::[0mBase.JLOptions[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:321[24m[39m
[91m[1m│ [22m[39m    [27] [0m[1m_start[22m[0m[1m([22m[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:557[24m[39m
[91m[1m└ [22m[39m[90m@ Base loading.jl:1371[39m
WARNING: Method definition init_cacheval(LinearSolve.QRFactorization{P} where P, SciMLOperators.AbstractSciMLOperator{T} where T, Any, Any, Any, Any, Int64, Any, Any, Union{Bool, LinearSolve.LinearVerbosity{__T_default_lu_fallback, __T_no_right_preconditioning, __T_using_IterativeSolvers, __T_IterativeSolvers_iterations, __T_KrylovKit_verbosity, __T_KrylovJL_verbosity, __T_HYPRE_verbosity, __T_pardiso_verbosity, __T_blas_errors, __T_blas_invalid_args, __T_blas_info, __T_blas_success, __T_condition_number, __T_convergence_failure, __T_solver_failure, __T_max_iters} where __T_max_iters where __T_solver_failure where __T_convergence_failure where __T_condition_number where __T_blas_success where __T_blas_info where __T_blas_invalid_args where __T_blas_errors where __T_pardiso_verbosity where __T_HYPRE_verbosity where __T_KrylovJL_verbosity where __T_KrylovKit_verbosity where __T_IterativeSolvers_iterations where __T_using_IterativeSolvers where __T_no_right_preconditioning where __T_default_lu_fallback}, LinearSolve.OperatorAssumptions{T} where T) in module LinearSolve at /home/runner/.julia/packages/LinearSolve/WRutJ/src/factorization.jl:338 overwritten in module LinearSolveSparseArraysExt at /home/runner/.julia/packages/LinearSolve/WRutJ/ext/LinearSolveSparseArraysExt.jl:315.
ERROR: Method overwriting is not permitted during Module precompilation. Use `__precompile__(false)` to opt-out of precompilation.
[91m[1m┌ [22m[39m[91m[1mError: [22m[39mError during loading of extension LinearSolveSparseArraysExt of LinearSolve, use `Base.retry_load_extensions()` to retry.
[91m[1m│ [22m[39m  exception =
[91m[1m│ [22m[39m   [0m1-element ExceptionStack:
[91m[1m│ [22m[39m   Declaring __precompile__(false) is not allowed in files that are being precompiled.
[91m[1m│ [22m[39m   Stacktrace:
[91m[1m│ [22m[39m     [1] [0m[1m_require[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2069[24m[39m
[91m[1m│ [22m[39m     [2] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1882[24m[39m
[91m[1m│ [22m[39m     [3] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [4] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [5] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [6] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1872[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [7] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mextid[39m::[0mBase.ExtensionId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1365[24m[39m
[91m[1m│ [22m[39m     [8] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mpkgid[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1400[24m[39m
[91m[1m│ [22m[39m     [9] [0m[1mrun_package_callbacks[22m[0m[1m([22m[90mmodkey[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1224[24m[39m
[91m[1m│ [22m[39m    [10] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1889[24m[39m
[91m[1m│ [22m[39m    [11] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [12] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [13] [0m[1m_require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m
[91m[1m│ [22m[39m    [14] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1860[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [15] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mlock.jl:267[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [16] [0m[1m__require[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1823[24m[39m
[91m[1m│ [22m[39m    [17] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [18] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [19] [0m[1mrequire[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1816[24m[39m
[91m[1m│ [22m[39m    [20] [0m[1minclude[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mBase.jl:495[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [21] [0m[1minclude_package_for_output[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90minput[39m::[0mString, [90mdepot_path[39m::[0mVector[90m{String}[39m, [90mdl_load_path[39m::[0mVector[90m{String}[39m, [90mload_path[39m::[0mVector[90m{String}[39m, [90mconcrete_deps[39m::[0mVector[90m{Pair{Base.PkgId, UInt128}}[39m, [90msource[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2292[24m[39m
[91m[1m│ [22m[39m    [22] top-level scope
[91m[1m│ [22m[39m   [90m    @[39m [90m[4mstdin:4[24m[39m
[91m[1m│ [22m[39m    [23] [0m[1meval[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mboot.jl:385[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [24] [0m[1minclude_string[22m[0m[1m([22m[90mmapexpr[39m::[0mtypeof(identity), [90mmod[39m::[0mModule, [90mcode[39m::[0mString, [90mfilename[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2146[24m[39m
[91m[1m│ [22m[39m    [25] [0m[1minclude_string[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:2156[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [26] [0m[1mexec_options[22m[0m[1m([22m[90mopts[39m::[0mBase.JLOptions[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:321[24m[39m
[91m[1m│ [22m[39m    [27] [0m[1m_start[22m[0m[1m([22m[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:557[24m[39m
[91m[1m└ [22m[39m[90m@ Base loading.jl:1371[39m
WARNING: Method definition init_cacheval(LinearSolve.QRFactorization{P} where P, SciMLOperators.AbstractSciMLOperator{T} where T, Any, Any, Any, Any, Int64, Any, Any, Union{Bool, LinearSolve.LinearVerbosity{__T_default_lu_fallback, __T_no_right_preconditioning, __T_using_IterativeSolvers, __T_IterativeSolvers_iterations, __T_KrylovKit_verbosity, __T_KrylovJL_verbosity, __T_HYPRE_verbosity, __T_pardiso_verbosity, __T_blas_errors, __T_blas_invalid_args, __T_blas_info, __T_blas_success, __T_condition_number, __T_convergence_failure, __T_solver_failure, __T_max_iters} where __T_max_iters where __T_solver_failure where __T_convergence_failure where __T_condition_number where __T_blas_success where __T_blas_info where __T_blas_invalid_args where __T_blas_errors where __T_pardiso_verbosity where __T_HYPRE_verbosity where __T_KrylovJL_verbosity where __T_KrylovKit_verbosity where __T_IterativeSolvers_iterations where __T_using_IterativeSolvers where __T_no_right_preconditioning where __T_default_lu_fallback}, LinearSolve.OperatorAssumptions{T} where T) in module LinearSolve at /home/runner/.julia/packages/LinearSolve/WRutJ/src/factorization.jl:338 overwritten in module LinearSolveSparseArraysExt at /home/runner/.julia/packages/LinearSolve/WRutJ/ext/LinearSolveSparseArraysExt.jl:315.
ERROR: Method overwriting is not permitted during Module precompilation. Use `__precompile__(false)` to opt-out of precompilation.
[91m[1m┌ [22m[39m[91m[1mError: [22m[39mError during loading of extension LinearSolveSparseArraysExt of LinearSolve, use `Base.retry_load_extensions()` to retry.
[91m[1m│ [22m[39m  exception =
[91m[1m│ [22m[39m   [0m1-element ExceptionStack:
[91m[1m│ [22m[39m   Declaring __precompile__(false) is not allowed in files that are being precompiled.
[91m[1m│ [22m[39m   Stacktrace:
[91m[1m│ [22m[39m     [1] [0m[1m_require[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2069[24m[39m
[91m[1m│ [22m[39m     [2] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1882[24m[39m
[91m[1m│ [22m[39m     [3] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [4] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [5] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [6] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1872[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [7] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mextid[39m::[0mBase.ExtensionId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1365[24m[39m
[91m[1m│ [22m[39m     [8] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mpkgid[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1400[24m[39m
[91m[1m│ [22m[39m     [9] [0m[1mrun_package_callbacks[22m[0m[1m([22m[90mmodkey[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1224[24m[39m
[91m[1m│ [22m[39m    [10] [0m[1m_tryrequire_from_serialized[22m[0m[1m([22m[90mmodkey[39m::[0mBase.PkgId, [90mbuild_id[39m::[0mUInt128[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1521[24m[39m
[91m[1m│ [22m[39m    [11] [0m[1m_tryrequire_from_serialized[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90mpath[39m::[0mString, [90mocachepath[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1594[24m[39m
[91m[1m│ [22m[39m    [12] [0m[1m_require[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2060[24m[39m
[91m[1m│ [22m[39m    [13] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1882[24m[39m
[91m[1m│ [22m[39m    [14] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [15] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [16] [0m[1m_require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m
[91m[1m│ [22m[39m    [17] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1860[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [18] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mlock.jl:267[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [19] [0m[1m__require[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1823[24m[39m
[91m[1m│ [22m[39m    [20] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [21] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [22] [0m[1mrequire[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1816[24m[39m
[91m[1m│ [22m[39m    [23] [0m[1minclude[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mBase.jl:495[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [24] [0m[1minclude_package_for_output[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90minput[39m::[0mString, [90mdepot_path[39m::[0mVector[90m{String}[39m, [90mdl_load_path[39m::[0mVector[90m{String}[39m, [90mload_path[39m::[0mVector[90m{String}[39m, [90mconcrete_deps[39m::[0mVector[90m{Pair{Base.PkgId, UInt128}}[39m, [90msource[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2292[24m[39m
[91m[1m│ [22m[39m    [25] top-level scope
[91m[1m│ [22m[39m   [90m    @[39m [90m[4mstdin:4[24m[39m
[91m[1m│ [22m[39m    [26] [0m[1meval[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mboot.jl:385[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [27] [0m[1minclude_string[22m[0m[1m([22m[90mmapexpr[39m::[0mtypeof(identity), [90mmod[39m::[0mModule, [90mcode[39m::[0mString, [90mfilename[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2146[24m[39m
[91m[1m│ [22m[39m    [28] [0m[1minclude_string[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:2156[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [29] [0m[1mexec_options[22m[0m[1m([22m[90mopts[39m::[0mBase.JLOptions[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:321[24m[39m
[91m[1m│ [22m[39m    [30] [0m[1m_start[22m[0m[1m([22m[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:557[24m[39m
[91m[1m└ [22m[39m[90m@ Base loading.jl:1371[39m
WARNING: Method definition init_cacheval(LinearSolve.QRFactorization{P} where P, SciMLOperators.AbstractSciMLOperator{T} where T, Any, Any, Any, Any, Int64, Any, Any, Union{Bool, LinearSolve.LinearVerbosity{__T_default_lu_fallback, __T_no_right_preconditioning, __T_using_IterativeSolvers, __T_IterativeSolvers_iterations, __T_KrylovKit_verbosity, __T_KrylovJL_verbosity, __T_HYPRE_verbosity, __T_pardiso_verbosity, __T_blas_errors, __T_blas_invalid_args, __T_blas_info, __T_blas_success, __T_condition_number, __T_convergence_failure, __T_solver_failure, __T_max_iters} where __T_max_iters where __T_solver_failure where __T_convergence_failure where __T_condition_number where __T_blas_success where __T_blas_info where __T_blas_invalid_args where __T_blas_errors where __T_pardiso_verbosity where __T_HYPRE_verbosity where __T_KrylovJL_verbosity where __T_KrylovKit_verbosity where __T_IterativeSolvers_iterations where __T_using_IterativeSolvers where __T_no_right_preconditioning where __T_default_lu_fallback}, LinearSolve.OperatorAssumptions{T} where T) in module LinearSolve at /home/runner/.julia/packages/LinearSolve/WRutJ/src/factorization.jl:338 overwritten in module LinearSolveSparseArraysExt at /home/runner/.julia/packages/LinearSolve/WRutJ/ext/LinearSolveSparseArraysExt.jl:315.
ERROR: Method overwriting is not permitted during Module precompilation. Use `__precompile__(false)` to opt-out of precompilation.
[91m[1m┌ [22m[39m[91m[1mError: [22m[39mError during loading of extension LinearSolveSparseArraysExt of LinearSolve, use `Base.retry_load_extensions()` to retry.
[91m[1m│ [22m[39m  exception =
[91m[1m│ [22m[39m   [0m1-element ExceptionStack:
[91m[1m│ [22m[39m   Declaring __precompile__(false) is not allowed in files that are being precompiled.
[91m[1m│ [22m[39m   Stacktrace:
[91m[1m│ [22m[39m     [1] [0m[1m_require[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2069[24m[39m
[91m[1m│ [22m[39m     [2] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1882[24m[39m
[91m[1m│ [22m[39m     [3] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [4] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [5] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [6] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1872[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [7] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mextid[39m::[0mBase.ExtensionId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1365[24m[39m
[91m[1m│ [22m[39m     [8] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mpkgid[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1400[24m[39m
[91m[1m│ [22m[39m     [9] [0m[1mrun_package_callbacks[22m[0m[1m([22m[90mmodkey[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1224[24m[39m
[91m[1m│ [22m[39m    [10] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1889[24m[39m
[91m[1m│ [22m[39m    [11] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [12] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [13] [0m[1m_require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m
[91m[1m│ [22m[39m    [14] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1860[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [15] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mlock.jl:267[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [16] [0m[1m__require[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1823[24m[39m
[91m[1m│ [22m[39m    [17] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [18] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [19] [0m[1mrequire[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1816[24m[39m
[91m[1m│ [22m[39m    [20] [0m[1minclude[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mBase.jl:495[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [21] [0m[1minclude_package_for_output[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90minput[39m::[0mString, [90mdepot_path[39m::[0mVector[90m{String}[39m, [90mdl_load_path[39m::[0mVector[90m{String}[39m, [90mload_path[39m::[0mVector[90m{String}[39m, [90mconcrete_deps[39m::[0mVector[90m{Pair{Base.PkgId, UInt128}}[39m, [90msource[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2292[24m[39m
[91m[1m│ [22m[39m    [22] top-level scope
[91m[1m│ [22m[39m   [90m    @[39m [90m[4mstdin:4[24m[39m
[91m[1m│ [22m[39m    [23] [0m[1meval[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mboot.jl:385[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [24] [0m[1minclude_string[22m[0m[1m([22m[90mmapexpr[39m::[0mtypeof(identity), [90mmod[39m::[0mModule, [90mcode[39m::[0mString, [90mfilename[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2146[24m[39m
[91m[1m│ [22m[39m    [25] [0m[1minclude_string[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:2156[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [26] [0m[1mexec_options[22m[0m[1m([22m[90mopts[39m::[0mBase.JLOptions[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:321[24m[39m
[91m[1m│ [22m[39m    [27] [0m[1m_start[22m[0m[1m([22m[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:557[24m[39m
[91m[1m└ [22m[39m[90m@ Base loading.jl:1371[39m
WARNING: Method definition init_cacheval(LinearSolve.QRFactorization{P} where P, SciMLOperators.AbstractSciMLOperator{T} where T, Any, Any, Any, Any, Int64, Any, Any, Union{Bool, LinearSolve.LinearVerbosity{__T_default_lu_fallback, __T_no_right_preconditioning, __T_using_IterativeSolvers, __T_IterativeSolvers_iterations, __T_KrylovKit_verbosity, __T_KrylovJL_verbosity, __T_HYPRE_verbosity, __T_pardiso_verbosity, __T_blas_errors, __T_blas_invalid_args, __T_blas_info, __T_blas_success, __T_condition_number, __T_convergence_failure, __T_solver_failure, __T_max_iters} where __T_max_iters where __T_solver_failure where __T_convergence_failure where __T_condition_number where __T_blas_success where __T_blas_info where __T_blas_invalid_args where __T_blas_errors where __T_pardiso_verbosity where __T_HYPRE_verbosity where __T_KrylovJL_verbosity where __T_KrylovKit_verbosity where __T_IterativeSolvers_iterations where __T_using_IterativeSolvers where __T_no_right_preconditioning where __T_default_lu_fallback}, LinearSolve.OperatorAssumptions{T} where T) in module LinearSolve at /home/runner/.julia/packages/LinearSolve/WRutJ/src/factorization.jl:338 overwritten in module LinearSolveSparseArraysExt at /home/runner/.julia/packages/LinearSolve/WRutJ/ext/LinearSolveSparseArraysExt.jl:315.
ERROR: Method overwriting is not permitted during Module precompilation. Use `__precompile__(false)` to opt-out of precompilation.
[91m[1m┌ [22m[39m[91m[1mError: [22m[39mError during loading of extension LinearSolveSparseArraysExt of LinearSolve, use `Base.retry_load_extensions()` to retry.
[91m[1m│ [22m[39m  exception =
[91m[1m│ [22m[39m   [0m1-element ExceptionStack:
[91m[1m│ [22m[39m   Declaring __precompile__(false) is not allowed in files that are being precompiled.
[91m[1m│ [22m[39m   Stacktrace:
[91m[1m│ [22m[39m     [1] [0m[1m_require[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2069[24m[39m
[91m[1m│ [22m[39m     [2] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1882[24m[39m
[91m[1m│ [22m[39m     [3] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [4] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [5] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [6] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1872[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [7] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mextid[39m::[0mBase.ExtensionId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1365[24m[39m
[91m[1m│ [22m[39m     [8] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mpkgid[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1400[24m[39m
[91m[1m│ [22m[39m     [9] [0m[1mrun_package_callbacks[22m[0m[1m([22m[90mmodkey[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1224[24m[39m
[91m[1m│ [22m[39m    [10] [0m[1m_tryrequire_from_serialized[22m[0m[1m([22m[90mmodkey[39m::[0mBase.PkgId, [90mpath[39m::[0mString, [90mocachepath[39m::[0mString, [90msourcepath[39m::[0mString, [90mdepmods[39m::[0mVector[90m{Any}[39m[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1557[24m[39m
[91m[1m│ [22m[39m    [11] [0m[1m_require_search_from_serialized[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90msourcepath[39m::[0mString, [90mbuild_id[39m::[0mUInt128[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1644[24m[39m
[91m[1m│ [22m[39m    [12] [0m[1m_require[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2008[24m[39m
[91m[1m│ [22m[39m    [13] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1882[24m[39m
[91m[1m│ [22m[39m    [14] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [15] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [16] [0m[1m_require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m
[91m[1m│ [22m[39m    [17] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1860[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [18] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mlock.jl:267[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [19] [0m[1m__require[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1823[24m[39m
[91m[1m│ [22m[39m    [20] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [21] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [22] [0m[1mrequire[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1816[24m[39m
[91m[1m│ [22m[39m    [23] [0m[1minclude[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mBase.jl:495[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [24] [0m[1minclude_package_for_output[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90minput[39m::[0mString, [90mdepot_path[39m::[0mVector[90m{String}[39m, [90mdl_load_path[39m::[0mVector[90m{String}[39m, [90mload_path[39m::[0mVector[90m{String}[39m, [90mconcrete_deps[39m::[0mVector[90m{Pair{Base.PkgId, UInt128}}[39m, [90msource[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2292[24m[39m
[91m[1m│ [22m[39m    [25] top-level scope
[91m[1m│ [22m[39m   [90m    @[39m [90m[4mstdin:4[24m[39m
[91m[1m│ [22m[39m    [26] [0m[1meval[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mboot.jl:385[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [27] [0m[1minclude_string[22m[0m[1m([22m[90mmapexpr[39m::[0mtypeof(identity), [90mmod[39m::[0mModule, [90mcode[39m::[0mString, [90mfilename[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2146[24m[39m
[91m[1m│ [22m[39m    [28] [0m[1minclude_string[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:2156[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [29] [0m[1mexec_options[22m[0m[1m([22m[90mopts[39m::[0mBase.JLOptions[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:321[24m[39m
[91m[1m│ [22m[39m    [30] [0m[1m_start[22m[0m[1m([22m[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:557[24m[39m
[91m[1m└ [22m[39m[90m@ Base loading.jl:1371[39m
WARNING: Method definition init_cacheval(LinearSolve.QRFactorization{P} where P, SciMLOperators.AbstractSciMLOperator{T} where T, Any, Any, Any, Any, Int64, Any, Any, Union{Bool, LinearSolve.LinearVerbosity{__T_default_lu_fallback, __T_no_right_preconditioning, __T_using_IterativeSolvers, __T_IterativeSolvers_iterations, __T_KrylovKit_verbosity, __T_KrylovJL_verbosity, __T_HYPRE_verbosity, __T_pardiso_verbosity, __T_blas_errors, __T_blas_invalid_args, __T_blas_info, __T_blas_success, __T_condition_number, __T_convergence_failure, __T_solver_failure, __T_max_iters} where __T_max_iters where __T_solver_failure where __T_convergence_failure where __T_condition_number where __T_blas_success where __T_blas_info where __T_blas_invalid_args where __T_blas_errors where __T_pardiso_verbosity where __T_HYPRE_verbosity where __T_KrylovJL_verbosity where __T_KrylovKit_verbosity where __T_IterativeSolvers_iterations where __T_using_IterativeSolvers where __T_no_right_preconditioning where __T_default_lu_fallback}, LinearSolve.OperatorAssumptions{T} where T) in module LinearSolve at /home/runner/.julia/packages/LinearSolve/WRutJ/src/factorization.jl:338 overwritten in module LinearSolveSparseArraysExt at /home/runner/.julia/packages/LinearSolve/WRutJ/ext/LinearSolveSparseArraysExt.jl:315.
ERROR: Method overwriting is not permitted during Module precompilation. Use `__precompile__(false)` to opt-out of precompilation.
[91m[1m┌ [22m[39m[91m[1mError: [22m[39mError during loading of extension LinearSolveSparseArraysExt of LinearSolve, use `Base.retry_load_extensions()` to retry.
[91m[1m│ [22m[39m  exception =
[91m[1m│ [22m[39m   [0m1-element ExceptionStack:
[91m[1m│ [22m[39m   Declaring __precompile__(false) is not allowed in files that are being precompiled.
[91m[1m│ [22m[39m   Stacktrace:
[91m[1m│ [22m[39m     [1] [0m[1m_require[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2069[24m[39m
[91m[1m│ [22m[39m     [2] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1882[24m[39m
[91m[1m│ [22m[39m     [3] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [4] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [5] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [6] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1872[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [7] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mextid[39m::[0mBase.ExtensionId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1365[24m[39m
[91m[1m│ [22m[39m     [8] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mpkgid[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1400[24m[39m
[91m[1m│ [22m[39m     [9] [0m[1mrun_package_callbacks[22m[0m[1m([22m[90mmodkey[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1224[24m[39m
[91m[1m│ [22m[39m    [10] [0m[1m_tryrequire_from_serialized[22m[0m[1m([22m[90mmodkey[39m::[0mBase.PkgId, [90mbuild_id[39m::[0mUInt128[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1521[24m[39m
[91m[1m│ [22m[39m    [11] [0m[1m_tryrequire_from_serialized[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90mpath[39m::[0mString, [90mocachepath[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1594[24m[39m
[91m[1m│ [22m[39m    [12] [0m[1m_require[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2060[24m[39m
[91m[1m│ [22m[39m    [13] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1882[24m[39m
[91m[1m│ [22m[39m    [14] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [15] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [16] [0m[1m_require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m
[91m[1m│ [22m[39m    [17] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1860[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [18] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mlock.jl:267[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [19] [0m[1m__require[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1823[24m[39m
[91m[1m│ [22m[39m    [20] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [21] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [22] [0m[1mrequire[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1816[24m[39m
[91m[1m│ [22m[39m    [23] [0m[1minclude[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mBase.jl:495[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [24] [0m[1minclude_package_for_output[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90minput[39m::[0mString, [90mdepot_path[39m::[0mVector[90m{String}[39m, [90mdl_load_path[39m::[0mVector[90m{String}[39m, [90mload_path[39m::[0mVector[90m{String}[39m, [90mconcrete_deps[39m::[0mVector[90m{Pair{Base.PkgId, UInt128}}[39m, [90msource[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2292[24m[39m
[91m[1m│ [22m[39m    [25] top-level scope
[91m[1m│ [22m[39m   [90m    @[39m [90m[4mstdin:4[24m[39m
[91m[1m│ [22m[39m    [26] [0m[1meval[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mboot.jl:385[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [27] [0m[1minclude_string[22m[0m[1m([22m[90mmapexpr[39m::[0mtypeof(identity), [90mmod[39m::[0mModule, [90mcode[39m::[0mString, [90mfilename[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2146[24m[39m
[91m[1m│ [22m[39m    [28] [0m[1minclude_string[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:2156[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [29] [0m[1mexec_options[22m[0m[1m([22m[90mopts[39m::[0mBase.JLOptions[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:321[24m[39m
[91m[1m│ [22m[39m    [30] [0m[1m_start[22m[0m[1m([22m[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:557[24m[39m
[91m[1m└ [22m[39m[90m@ Base loading.jl:1371[39m
WARNING: Method definition init_cacheval(LinearSolve.QRFactorization{P} where P, SciMLOperators.AbstractSciMLOperator{T} where T, Any, Any, Any, Any, Int64, Any, Any, Union{Bool, LinearSolve.LinearVerbosity{__T_default_lu_fallback, __T_no_right_preconditioning, __T_using_IterativeSolvers, __T_IterativeSolvers_iterations, __T_KrylovKit_verbosity, __T_KrylovJL_verbosity, __T_HYPRE_verbosity, __T_pardiso_verbosity, __T_blas_errors, __T_blas_invalid_args, __T_blas_info, __T_blas_success, __T_condition_number, __T_convergence_failure, __T_solver_failure, __T_max_iters} where __T_max_iters where __T_solver_failure where __T_convergence_failure where __T_condition_number where __T_blas_success where __T_blas_info where __T_blas_invalid_args where __T_blas_errors where __T_pardiso_verbosity where __T_HYPRE_verbosity where __T_KrylovJL_verbosity where __T_KrylovKit_verbosity where __T_IterativeSolvers_iterations where __T_using_IterativeSolvers where __T_no_right_preconditioning where __T_default_lu_fallback}, LinearSolve.OperatorAssumptions{T} where T) in module LinearSolve at /home/runner/.julia/packages/LinearSolve/WRutJ/src/factorization.jl:338 overwritten in module LinearSolveSparseArraysExt at /home/runner/.julia/packages/LinearSolve/WRutJ/ext/LinearSolveSparseArraysExt.jl:315.
ERROR: Method overwriting is not permitted during Module precompilation. Use `__precompile__(false)` to opt-out of precompilation.
[91m[1m┌ [22m[39m[91m[1mError: [22m[39mError during loading of extension LinearSolveSparseArraysExt of LinearSolve, use `Base.retry_load_extensions()` to retry.
[91m[1m│ [22m[39m  exception =
[91m[1m│ [22m[39m   [0m1-element ExceptionStack:
[91m[1m│ [22m[39m   Declaring __precompile__(false) is not allowed in files that are being precompiled.
[91m[1m│ [22m[39m   Stacktrace:
[91m[1m│ [22m[39m     [1] [0m[1m_require[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2069[24m[39m
[91m[1m│ [22m[39m     [2] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1882[24m[39m
[91m[1m│ [22m[39m     [3] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [4] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [5] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [6] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1872[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [7] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mextid[39m::[0mBase.ExtensionId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1365[24m[39m
[91m[1m│ [22m[39m     [8] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mpkgid[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1400[24m[39m
[91m[1m│ [22m[39m     [9] [0m[1mrun_package_callbacks[22m[0m[1m([22m[90mmodkey[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1224[24m[39m
[91m[1m│ [22m[39m    [10] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1889[24m[39m
[91m[1m│ [22m[39m    [11] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [12] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [13] [0m[1m_require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m
[91m[1m│ [22m[39m    [14] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1860[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [15] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mlock.jl:267[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [16] [0m[1m__require[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1823[24m[39m
[91m[1m│ [22m[39m    [17] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [18] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [19] [0m[1mrequire[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1816[24m[39m
[91m[1m│ [22m[39m    [20] [0m[1minclude[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mBase.jl:495[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [21] [0m[1minclude_package_for_output[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90minput[39m::[0mString, [90mdepot_path[39m::[0mVector[90m{String}[39m, [90mdl_load_path[39m::[0mVector[90m{String}[39m, [90mload_path[39m::[0mVector[90m{String}[39m, [90mconcrete_deps[39m::[0mVector[90m{Pair{Base.PkgId, UInt128}}[39m, [90msource[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2292[24m[39m
[91m[1m│ [22m[39m    [22] top-level scope
[91m[1m│ [22m[39m   [90m    @[39m [90m[4mstdin:4[24m[39m
[91m[1m│ [22m[39m    [23] [0m[1meval[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mboot.jl:385[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [24] [0m[1minclude_string[22m[0m[1m([22m[90mmapexpr[39m::[0mtypeof(identity), [90mmod[39m::[0mModule, [90mcode[39m::[0mString, [90mfilename[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2146[24m[39m
[91m[1m│ [22m[39m    [25] [0m[1minclude_string[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:2156[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [26] [0m[1mexec_options[22m[0m[1m([22m[90mopts[39m::[0mBase.JLOptions[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:321[24m[39m
[91m[1m│ [22m[39m    [27] [0m[1m_start[22m[0m[1m([22m[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:557[24m[39m
[91m[1m└ [22m[39m[90m@ Base loading.jl:1371[39m
WARNING: Method definition init_cacheval(LinearSolve.QRFactorization{P} where P, SciMLOperators.AbstractSciMLOperator{T} where T, Any, Any, Any, Any, Int64, Any, Any, Union{Bool, LinearSolve.LinearVerbosity{__T_default_lu_fallback, __T_no_right_preconditioning, __T_using_IterativeSolvers, __T_IterativeSolvers_iterations, __T_KrylovKit_verbosity, __T_KrylovJL_verbosity, __T_HYPRE_verbosity, __T_pardiso_verbosity, __T_blas_errors, __T_blas_invalid_args, __T_blas_info, __T_blas_success, __T_condition_number, __T_convergence_failure, __T_solver_failure, __T_max_iters} where __T_max_iters where __T_solver_failure where __T_convergence_failure where __T_condition_number where __T_blas_success where __T_blas_info where __T_blas_invalid_args where __T_blas_errors where __T_pardiso_verbosity where __T_HYPRE_verbosity where __T_KrylovJL_verbosity where __T_KrylovKit_verbosity where __T_IterativeSolvers_iterations where __T_using_IterativeSolvers where __T_no_right_preconditioning where __T_default_lu_fallback}, LinearSolve.OperatorAssumptions{T} where T) in module LinearSolve at /home/runner/.julia/packages/LinearSolve/WRutJ/src/factorization.jl:338 overwritten in module LinearSolveSparseArraysExt at /home/runner/.julia/packages/LinearSolve/WRutJ/ext/LinearSolveSparseArraysExt.jl:315.
ERROR: Method overwriting is not permitted during Module precompilation. Use `__precompile__(false)` to opt-out of precompilation.
[91m[1m┌ [22m[39m[91m[1mError: [22m[39mError during loading of extension LinearSolveSparseArraysExt of LinearSolve, use `Base.retry_load_extensions()` to retry.
[91m[1m│ [22m[39m  exception =
[91m[1m│ [22m[39m   [0m1-element ExceptionStack:
[91m[1m│ [22m[39m   Declaring __precompile__(false) is not allowed in files that are being precompiled.
[91m[1m│ [22m[39m   Stacktrace:
[91m[1m│ [22m[39m     [1] [0m[1m_require[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2069[24m[39m
[91m[1m│ [22m[39m     [2] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1882[24m[39m
[91m[1m│ [22m[39m     [3] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [4] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [5] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [6] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1872[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [7] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mextid[39m::[0mBase.ExtensionId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1365[24m[39m
[91m[1m│ [22m[39m     [8] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mpkgid[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1400[24m[39m
[91m[1m│ [22m[39m     [9] [0m[1mrun_package_callbacks[22m[0m[1m([22m[90mmodkey[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1224[24m[39m
[91m[1m│ [22m[39m    [10] [0m[1m_tryrequire_from_serialized[22m[0m[1m([22m[90mmodkey[39m::[0mBase.PkgId, [90mpath[39m::[0mString, [90mocachepath[39m::[0mString, [90msourcepath[39m::[0mString, [90mdepmods[39m::[0mVector[90m{Any}[39m[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1557[24m[39m
[91m[1m│ [22m[39m    [11] [0m[1m_require_search_from_serialized[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90msourcepath[39m::[0mString, [90mbuild_id[39m::[0mUInt128[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1644[24m[39m
[91m[1m│ [22m[39m    [12] [0m[1m_require[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2008[24m[39m
[91m[1m│ [22m[39m    [13] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1882[24m[39m
[91m[1m│ [22m[39m    [14] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [15] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [16] [0m[1m_require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m
[91m[1m│ [22m[39m    [17] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1860[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [18] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mlock.jl:267[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [19] [0m[1m__require[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1823[24m[39m
[91m[1m│ [22m[39m    [20] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [21] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [22] [0m[1mrequire[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1816[24m[39m
[91m[1m│ [22m[39m    [23] [0m[1minclude[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mBase.jl:495[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [24] [0m[1minclude_package_for_output[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90minput[39m::[0mString, [90mdepot_path[39m::[0mVector[90m{String}[39m, [90mdl_load_path[39m::[0mVector[90m{String}[39m, [90mload_path[39m::[0mVector[90m{String}[39m, [90mconcrete_deps[39m::[0mVector[90m{Pair{Base.PkgId, UInt128}}[39m, [90msource[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2292[24m[39m
[91m[1m│ [22m[39m    [25] top-level scope
[91m[1m│ [22m[39m   [90m    @[39m [90m[4mstdin:4[24m[39m
[91m[1m│ [22m[39m    [26] [0m[1meval[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mboot.jl:385[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [27] [0m[1minclude_string[22m[0m[1m([22m[90mmapexpr[39m::[0mtypeof(identity), [90mmod[39m::[0mModule, [90mcode[39m::[0mString, [90mfilename[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2146[24m[39m
[91m[1m│ [22m[39m    [28] [0m[1minclude_string[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:2156[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [29] [0m[1mexec_options[22m[0m[1m([22m[90mopts[39m::[0mBase.JLOptions[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:321[24m[39m
[91m[1m│ [22m[39m    [30] [0m[1m_start[22m[0m[1m([22m[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:557[24m[39m
[91m[1m└ [22m[39m[90m@ Base loading.jl:1371[39m
WARNING: Method definition init_cacheval(LinearSolve.QRFactorization{P} where P, SciMLOperators.AbstractSciMLOperator{T} where T, Any, Any, Any, Any, Int64, Any, Any, Union{Bool, LinearSolve.LinearVerbosity{__T_default_lu_fallback, __T_no_right_preconditioning, __T_using_IterativeSolvers, __T_IterativeSolvers_iterations, __T_KrylovKit_verbosity, __T_KrylovJL_verbosity, __T_HYPRE_verbosity, __T_pardiso_verbosity, __T_blas_errors, __T_blas_invalid_args, __T_blas_info, __T_blas_success, __T_condition_number, __T_convergence_failure, __T_solver_failure, __T_max_iters} where __T_max_iters where __T_solver_failure where __T_convergence_failure where __T_condition_number where __T_blas_success where __T_blas_info where __T_blas_invalid_args where __T_blas_errors where __T_pardiso_verbosity where __T_HYPRE_verbosity where __T_KrylovJL_verbosity where __T_KrylovKit_verbosity where __T_IterativeSolvers_iterations where __T_using_IterativeSolvers where __T_no_right_preconditioning where __T_default_lu_fallback}, LinearSolve.OperatorAssumptions{T} where T) in module LinearSolve at /home/runner/.julia/packages/LinearSolve/WRutJ/src/factorization.jl:338 overwritten in module LinearSolveSparseArraysExt at /home/runner/.julia/packages/LinearSolve/WRutJ/ext/LinearSolveSparseArraysExt.jl:315.
ERROR: Method overwriting is not permitted during Module precompilation. Use `__precompile__(false)` to opt-out of precompilation.
[91m[1m┌ [22m[39m[91m[1mError: [22m[39mError during loading of extension LinearSolveSparseArraysExt of LinearSolve, use `Base.retry_load_extensions()` to retry.
[91m[1m│ [22m[39m  exception =
[91m[1m│ [22m[39m   [0m1-element ExceptionStack:
[91m[1m│ [22m[39m   Declaring __precompile__(false) is not allowed in files that are being precompiled.
[91m[1m│ [22m[39m   Stacktrace:
[91m[1m│ [22m[39m     [1] [0m[1m_require[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2069[24m[39m
[91m[1m│ [22m[39m     [2] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mNothing[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1882[24m[39m
[91m[1m│ [22m[39m     [3] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [4] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [5] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [6] [0m[1m_require_prelocked[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1872[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m     [7] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mextid[39m::[0mBase.ExtensionId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1365[24m[39m
[91m[1m│ [22m[39m     [8] [0m[1mrun_extension_callbacks[22m[0m[1m([22m[90mpkgid[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1400[24m[39m
[91m[1m│ [22m[39m     [9] [0m[1mrun_package_callbacks[22m[0m[1m([22m[90mmodkey[39m::[0mBase.PkgId[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1224[24m[39m
[91m[1m│ [22m[39m    [10] [0m[1m_tryrequire_from_serialized[22m[0m[1m([22m[90mmodkey[39m::[0mBase.PkgId, [90mbuild_id[39m::[0mUInt128[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1521[24m[39m
[91m[1m│ [22m[39m    [11] [0m[1m_tryrequire_from_serialized[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90mpath[39m::[0mString, [90mocachepath[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1594[24m[39m
[91m[1m│ [22m[39m    [12] [0m[1m_require[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2060[24m[39m
[91m[1m│ [22m[39m    [13] [0m[1m__require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1882[24m[39m
[91m[1m│ [22m[39m    [14] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [15] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [16] [0m[1m_require_prelocked[22m[0m[1m([22m[90muuidkey[39m::[0mBase.PkgId, [90menv[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1873[24m[39m
[91m[1m│ [22m[39m    [17] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:1860[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [18] [0m[1mmacro expansion[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mlock.jl:267[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [19] [0m[1m__require[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1823[24m[39m
[91m[1m│ [22m[39m    [20] [0m[1m#invoke_in_world#3[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:926[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [21] [0m[1minvoke_in_world[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4messentials.jl:923[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [22] [0m[1mrequire[22m[0m[1m([22m[90minto[39m::[0mModule, [90mmod[39m::[0mSymbol[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:1816[24m[39m
[91m[1m│ [22m[39m    [23] [0m[1minclude[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mBase.jl:495[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [24] [0m[1minclude_package_for_output[22m[0m[1m([22m[90mpkg[39m::[0mBase.PkgId, [90minput[39m::[0mString, [90mdepot_path[39m::[0mVector[90m{String}[39m, [90mdl_load_path[39m::[0mVector[90m{String}[39m, [90mload_path[39m::[0mVector[90m{String}[39m, [90mconcrete_deps[39m::[0mVector[90m{Pair{Base.PkgId, UInt128}}[39m, [90msource[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2292[24m[39m
[91m[1m│ [22m[39m    [25] top-level scope
[91m[1m│ [22m[39m   [90m    @[39m [90m[4mstdin:4[24m[39m
[91m[1m│ [22m[39m    [26] [0m[1meval[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mboot.jl:385[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [27] [0m[1minclude_string[22m[0m[1m([22m[90mmapexpr[39m::[0mtypeof(identity), [90mmod[39m::[0mModule, [90mcode[39m::[0mString, [90mfilename[39m::[0mString[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mloading.jl:2146[24m[39m
[91m[1m│ [22m[39m    [28] [0m[1minclude_string[22m
[91m[1m│ [22m[39m   [90m    @[39m [90m./[39m[90m[4mloading.jl:2156[24m[39m[90m [inlined][39m
[91m[1m│ [22m[39m    [29] [0m[1mexec_options[22m[0m[1m([22m[90mopts[39m::[0mBase.JLOptions[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:321[24m[39m
[91m[1m│ [22m[39m    [30] [0m[1m_start[22m[0m[1m([22m[0m[1m)[22m
[91m[1m│ [22m[39m   [90m    @[39m [90mBase[39m [90m./[39m[90m[4mclient.jl:557[24m[39m
[91m[1m└ [22m[39m[90m@ Base loading.jl:1371[39m
WARNING: Method definition init_cacheval(LinearSolve.QRFactorization{P} where P, SciMLOperators.AbstractSciMLOperator{T} where T, Any, Any, Any, Any, Int64, Any, Any, Union{Bool, LinearSolve.LinearVerbosity{__T_default_lu_fallback, __T_no_right_preconditioning, __T_using_IterativeSolvers, __T_IterativeSolvers_iterations, __T_KrylovKit_verbosity, __T_KrylovJL_verbosity, __T_HYPRE_verbosity, __T_pardiso_verbosity, __T_blas_errors, __T_blas_invalid_args, __T_blas_info, __T_blas_success, __T_condition_number, __T_convergence_failure, __T_solver_failure, __T_max_iters} where __T_max_iters where __T_solver_failure where __T_convergence_failure where __T_condition_number where __T_blas_success where __T_blas_info where __T_blas_invalid_args where __T_blas_errors where __T_pardiso_verbosity where __T_HYPRE_verbosity where __T_KrylovJL_verbosity where __T_KrylovKit_verbosity where __T_IterativeSolvers_iterations where __T_using_IterativeSolvers where __T_no_right_preconditioning where __T_default_lu_fallback}, LinearSolve.OperatorAssumptions{T} where T) in module LinearSolve at /home/runner/.julia/packages/LinearSolve/WRutJ/src/factorization.jl:338 overwritten in module LinearSolveSparseArraysExt at /home/runner/.julia/packages/LinearSolve/WRutJ/ext/LinearSolveSparseArraysExt.jl:315.
ERROR: Method overwriting is not permitted during Module precompilation. Use `__precompile__(false)` to opt-out of precompilation.
```


We first define a  gelper function to compute power spectral density of the simulated response

```julia
function outputpsd(sol; fs=1.0)
    xt = getindex.(sol.u, 1)
    pxx = periodogram(
        xt; fs=fs, nfft=nextfastfft(10 * length(xt)), window=DSP.hanning, onesided=false
    )

    freqω = freq(pxx) * 2π
    perm = sortperm(freqω)
    freqlowidx = argmin(abs.(freqω[perm] .+ 0.04))
    freqhighidx = argmin(abs.(freqω[perm] .- 0.04))
    return freqω[perm][freqlowidx:freqhighidx], power(pxx)[perm][freqlowidx:freqhighidx]
end
```


```ansi
outputpsd (generic function with 1 method)
```


We define the parametric oscillator using the HarmonicBalance.jl package and compute effective equations of motion at the frequency $\omega$.

```julia
@variables ω₀ γ λ F α ω t x(t)
@variables T u1(T) v1(T)

natural_equation = d(d(x, t), t) + γ * d(x, t) + (ω₀^2 - λ * cos(2 * ω * t)) * x + α * x^3
diff_eq = DifferentialEquation(natural_equation, x)

add_harmonic!(diff_eq, x, ω);
harmonic_eq = get_harmonic_equations(diff_eq)
```


```ansi
A set of 2 harmonic equations
Variables: u1(T), v1(T)
Parameters: ω, α, γ, ω₀, λ

Harmonic ansatz: 
x(t) = u1(T)*cos(ωt) + v1(T)*sin(ωt)

Harmonic equations:

-(1//2)*u1(T)*λ + (2//1)*Differential(T)(v1(T))*ω + Differential(T)(u1(T))*γ - u1(T)*(ω^2) + u1(T)*(ω₀^2) + v1(T)*γ*ω + (3//4)*(u1(T)^3)*α + (3//4)*u1(T)*(v1(T)^2)*α ~ 0

Differential(T)(v1(T))*γ + (1//2)*v1(T)*λ - (2//1)*Differential(T)(u1(T))*ω - u1(T)*γ*ω - v1(T)*(ω^2) + v1(T)*(ω₀^2) + (3//4)*(u1(T)^2)*v1(T)*α + (3//4)*(v1(T)^3)*α ~ 0

```


We can compute the steady states of the system using HomotopyContinuation.jl.

```julia
ωrange = range(0.99, 1.01, 200)
fixed = Dict(ω₀ => 1.0, γ => 0.005, λ => 0.02, α => 1.0)
varied = Dict(ω => ωrange)
result = get_steady_states(harmonic_eq, TotalDegree(), varied, fixed)

plot(result; y="sqrt(u1^2 + v1^2)")
```

![](xtcbojd.png){width=600px height=400px}

The sidebands from for the steady states will look like

```julia
sidebands1 = reduce(hcat, imag.(eigenvalues(result, 1)))'
sidebands2 = reduce(hcat, imag.(eigenvalues(result, 2)))'
scatter(ωrange, sidebands2; xlab="ω", legend=false, c=2)
scatter!(ωrange, sidebands1; xlab="ω", legend=false, c=1)
```

![](mpsahvh.png){width=600px height=400px}

Let us now reproduce this sidebands using a noise probe. We use the ModelingToolkit extension to define the stochastic differential equation system from the harmonic equations. The resulting system will have addtivce white noise with a noise strength $\sigma = 0.00005$ for each variable.

```julia
odesystem = ODESystem(harmonic_eq)
noiseeqs = [0.00005, 0.00005]  # Define noise amplitude for each variable
@mtkbuild sdesystem = SDESystem(odesystem, noiseeqs)

param = Dict(ω₀ => 1.0, γ => 0.005, λ => 0.02, α => 1.0, ω => 1.0)
Ttr = 10_000.0
T = 50_000.0
tspan = (0.0, Ttr + T)
times = range((Ttr, Ttr + T)...; step=1)

sdeproblem = SDEProblem{false}(
    sdesystem, SA[ones(2)...], tspan, param; jac=true, u0_constructor=x -> SVector(x...)
)
```


```ansi
[38;2;86;182;194mSDEProblem[0m with uType [38;2;86;182;194mStaticArraysCore.SVector{2, Float64}[0m and tType [38;2;86;182;194mFloat64[0m. In-place: [38;2;86;182;194mfalse[0m
Initialization status: [38;2;86;182;194mFULLY_DETERMINED[0m
Non-trivial mass matrix: [38;2;86;182;194mfalse[0m
timespan: (0.0, 60000.0)
u0: 2-element StaticArraysCore.SVector{2, Float64} with indices SOneTo(2):
 1.0
 1.0
```


Here we use StaticArrays and pass the jacobian to the integrater to speed up the computation.

Evolving the system and computing the power spectral density of the response gives

```julia
sol = solve(sdeproblem, SRA(); saveat=times)
freqω, psd = outputpsd(sol)
plot(freqω, psd; yscale=:log10, xlabel="Frequency", ylabel="Power")
```

![](fmblvsd.png){width=600px height=400px}

We will perform parameter sweep to generate noise spectra across the driving frequency $\omega$. For this we use the `EnsembleProblem` API from the SciML ecosystem.

```julia
setter! = setp(sdesystem, ω)
prob_func(prob, i, repeat) = (prob′=remake(prob); setter!(prob′, ωrange[i]); prob′)
output_func(sol, i) = (outputpsd(sol), false)
prob_ensemble = EnsembleProblem(sdeproblem; prob_func=prob_func, output_func=output_func)
sol_ensemble = solve(
    prob_ensemble,
    SRA(),
    EnsembleThreads();
    trajectories=length(ωrange),
    saveat=times,
    maxiters=1e7,
)
```


```ansi
EnsembleSolution Solution of length 200 with uType:
Tuple{Any, Any}
```


We find the spectrum

```julia
probe = getindex.(sol_ensemble.u, 1)[1]
spectrum = log10.(reduce(hcat, getindex.(sol_ensemble.u, 2)))
heatmap(ωrange, probe, spectrum)
```

![](vjhquak.png){width=600px height=400px}

Remember that we don&#39;t do a continuation of the system, but rather initlized the system at each frequency $\omega$ and evolve it for a fixed time $T$. This leads to imperfections in the spectrum. However, if we plot the sidebands computed with HomotopyContinuation.jl on top of the spectrum, we find descent match.

```julia
heatmap(ωrange, probe, spectrum)
scatter!(ωrange, sidebands2; xlab="ω", legend=false, c=:white, markerstrokewidth=0, ms=2)
scatter!(ωrange, sidebands1; xlab="ω", legend=false, c=:black, markerstrokewidth=0, ms=2)
```

![](uefgqqt.png){width=600px height=400px}


---


_This page was generated using [Literate.jl](https://github.com/fredrikekre/Literate.jl)._
