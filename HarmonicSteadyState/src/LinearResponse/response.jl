"""
$(TYPEDSIGNATURES)

Calculate the Jacobian response spectrum for a given system. Computes the magnitude of the Jacobian response for stable solutions across specified frequency ranges.

# Arguments
- `res::Result`: Result object containing the system's solutions
- `nat_var::Num`: Natural variable to evaluate in the response
- `Ω_range`: Range of frequencies to evaluate
- `branch::Int` or `followed_branches::Vector{Int}`: Branch number(s) to analyze
- `show_progress=true`: Whether to show a progress bar
- `force=false`: Force recalculation of spectrum even if already exists

# Returns
- Array{P,2}: Complex response matrix where rows correspond to frequencies and columns to solutions
"""
function get_jacobian_response(
    res::Result{D,S,P}, nat_var::Num, Ω_range, branch::Int; show_progress=true
) where {D,S,P}
    stable = get_class(res, branch, "stable") # boolean array
    !any(stable) && error("Cannot generate a spectrum - no stable solutions!")

    spectra = [JacobianSpectrum(res; branch=branch, index=i) for i in findall(stable)]
    C = Array{P,2}(undef, length(Ω_range), length(spectra))

    if show_progress
        bar = Progress(
            length(CartesianIndices(C));
            dt=1,
            desc="Diagonalizing the Jacobian for each solution ... ",
            barlen=50,
        )
    end
    # evaluate the Jacobians for the different values of noise frequency Ω
    for ij in CartesianIndices(C)
        C[ij] = abs(evaluate(spectra[ij[2]][nat_var], Ω_range[ij[1]]))
        show_progress ? next!(bar) : nothing
    end
    return C
end
function get_jacobian_response(
    res::Result{D,S,P},
    nat_var::Num,
    Ω_range,
    followed_branches::Vector{Int};
    show_progress=true,
    force=false,
) where {D,S,P}
    spectra = [
        JacobianSpectrum(res; branch=branch, index=i, force=force) for
        (i, branch) in pairs(followed_branches)
    ]
    C = Array{P,2}(undef, length(Ω_range), length(spectra))

    if show_progress
        bar = Progress(
            length(CartesianIndices(C));
            dt=1,
            desc="Diagonalizing the Jacobian for each solution ... ",
            barlen=50,
        )
    end
    # evaluate the Jacobians for the different values of noise frequency Ω
    for ij in CartesianIndices(C)
        C[ij] = abs(evaluate(spectra[ij[2]][nat_var], Ω_range[ij[1]]))
        show_progress ? next!(bar) : nothing
    end
    return C
end

"""
$(TYPEDSIGNATURES)

Calculate the linear response of the system for a given branch.
Evaluates the linear response by solving the linear response ODE for each stable solution
and input frequency in the given range.

# Arguments
- `res`: Result object containing the system's solutions
- `nat_var::Num`: Natural variable to evaluate in the response
- `Ω_range`: Range of frequencies to evaluate
- `branch::Int`: Branch number to analyze
- `order`: Order of the response to calculate
- `show_progress=true`: Whether to show a progress bar

# Returns
- Array{P,2}: Response matrix where rows correspond to frequencies and columns to stable solutions
"""
function get_linear_response(
    res::Result{D,S,P}, nat_var::Num, Ω_range, branch::Int; order, show_progress=true
) where {D,S,P}
    stable = get_class(res, branch, "stable") # boolean array
    !any(stable) && error("Cannot generate a spectrum - no stable solutions!")

    response = ResponseMatrix(res) # the symbolic response matrix
    C = Array{P,2}(undef, length(Ω_range), sum(stable))

    # note: this could be optimized by not grabbing the entire huge dictionary every time
    if show_progress
        bar = Progress(
            length(C);
            dt=1,
            desc="Solving the linear response ODE for each solution and input frequency ... ",
            barlen=50,
        )
    end
    for j in findall(stable)

        # get response for each individual point
        s = get_single_solution(res; branch=branch, index=j)
        for i in 1:(size(C)[1])
            C[i, j] = get_response(response, s, Ω_range[i])
        end
        show_progress ? next!(bar) : nothing
    end
    return C
end

"""
$(TYPEDSIGNATURES)

Calculate the rotating frame Jacobian response for a given branch.
Computes the rotating frame Jacobian response by evaluating eigenvalues of the numerical
Jacobian and calculating the response magnitude for each frequency in the range.

# Arguments
- `res::Result`: Result object containing the system's solutions
- `Ω_range`: Range of frequencies to evaluate
- `branch::Int`: Branch number to analyze
- `show_progress=true`: Whether to show a progress bar
- `damping_mod`: Damping modification parameter

# Returns
- Array{P,2}: Response matrix in the rotating frame

"""
function get_rotframe_jacobian_response(
    res::Result{D,S,P}, Ω_range, branch::Int; show_progress=true, damping_mod
) where {D,S,P}
    stable = get_class(res, branch, "stable")
    !any(stable) && error("Cannot generate a spectrum - no stable solutions!")
    stableidx = findall(stable)
    C = zeros(P, length(Ω_range), sum(stable))

    if show_progress
        bar = Progress(
            length(C);
            dt=1,
            desc="Solving the linear response ODE for each solution and input frequency ...",
            barlen=50,
        )
    end

    for i in 1:sum(stable)
        s = get_variable_solutions(res; branch=branch, index=stableidx[i])
        jac = res.jacobian(s) #numerical Jacobian
        λs, vs = eigen(jac)
        for j in λs
            for k in 1:(size(C)[1])
                C[k, i] +=
                    1 / sqrt(
                        (imag(j)^2 - Ω_range[k]^2)^2 +
                        Ω_range[k]^2 * damping_mod^2 * real(j)^2,
                    )
            end
        end
        show_progress ? next!(bar) : nothing
    end
    return C
end

"""
    eigenvalues(res::Result, branch; class=["physical"])

Calculate the eigenvalues of the Jacobian matrix of the harmonic equations of a `branch`
for a one dimensional sweep in the [Result](@ref) struct.

# Arguments
- `res::Result`: Result object containing solutions and jacobian information
- `branch`: Index of the solution branch to analyze
- `class=["physical"]`: Filter for solution classes to include, defaults to physical solutions

# Returns
- Vector of filtered eigenvalues along the solution branch

# Notes
- Currently only supports 1-dimensional parameter sweeps (D=1)
- Will throw an error if branch contains NaN values
- Eigenvalues are filtered based on the specified solution classes
"""
function eigenvalues(res::Result{D,S,P}, branch; class=["physical"]) where {D,S,P}
    filter = _get_mask(res, class)
    filter_branch = map(x -> getindex(x, branch), replace.(filter, 0 => NaN))

    D != 1 && error("For the moment only 1 dimension sweep are supported.")
    varied = Vector{P}(swept_parameters(res))

    eigenvalues = map(eachindex(varied)) do i
        jac = res.jacobian(get_variable_solutions(res; branch=branch, index=i))
        if any(isnan, jac)
            throw(
                ErrorException(
                    "The branch contains NaN values.
                    Likely, the branch has non-physical solutions in the parameter sweep",
                ),
            )
        end
        eigvals(jac)
    end
    eigenvalues_filtered = map(.*, eigenvalues, filter_branch)

    return eigenvalues_filtered
end

"""
    eigenvectors(res::Result, branch; class=["physical"])
get_Jacobiannch to analyze
- `class=["physical"]`: Filter for solution classes to include, defaults to physical solutions

# Returns
- Vector of filtered eigenvectors along the solution branch

# Notes
- Currently only supports 1-dimensional parameter sweeps (D=1)
- Will throw an error if branch contains NaN values
- Eigenvectors are filtered based on the specified solution classes
"""
function eigenvectors(res::Result{D,S,P}, branch; class=["physical"]) where {D,S,P}
    filter = _get_mask(res, class)
    filter_branch = map(x -> getindex(x, branch), replace.(filter, 0 => NaN))

    D != 1 && error("For the moment only 1 dimension sweep are supported.")
    varied = Vector{P}(swept_parameters(res))

    eigenvectors = map(eachindex(varied)) do i
        jac = res.jacobian(get_variable_solutions(res; branch=branch, index=i))
        if any(isnan, jac)
            throw(
                ErrorException(
                    "The branch contains NaN values.
                    Likely, the branch has non-physical solutions in the parameter sweep",
                ),
            )
        end
        eigvecs(jac)
    end
    eigvecs_filtered = map(.*, eigenvectors, filter_branch)

    return eigvecs_filtered
end


"""
$(TYPEDSIGNATURES)

Obtain the symbolic linear response matrix of a `diff_eq` corresponding to a perturbation frequency `freq`.
This routine cannot accept a `HarmonicEquation` since there, some time-derivatives are already dropped.
`order` denotes the highest differential order to be considered.

"""
function get_response_matrix(diff_eq::DifferentialEquation, freq::Num; order=2)::Matrix
    Symbolics.@variables T, i
    time = get_independent_variables(diff_eq)[1]

    eom = HarmonicBalance.harmonic_ansatz(diff_eq, time)

    # replace the time-dependence of harmonic variables by slow time BUT do not drop any derivatives
    eom = HarmonicBalance.slow_flow(eom; fast_time=time, slow_time=T, degree=order + 1)

    eom = HarmonicBalance.fourier_transform(eom, time)

    # get the response matrix by summing the orders
    # M = Symbolics.jacobian(eom.equations, get_variables(eom))
    M = get_Jacobian(eom.equations, get_variables(eom))
    for n in 1:order
        # M += (im * freq)^n * Symbolics.jacobian(eom.equations, d(get_variables(eom), T, n))
        M += (im * freq)^n * get_Jacobian(eom.equations, d(get_variables(eom), T, n))
    end
    M = substitute_all(
        M, [var => declare_variable(var_name(var)) for var in get_variables(eom)]
    )
    return M
end

"Get the response matrix corresponding to `res`.
Any substitution rules not specified in `res` can be supplied in `rules`."
function ResponseMatrix(res::Result; rules=Dict())

    # get the symbolic response matrix
    Symbolics.@variables Δ
    M = get_response_matrix(res.problem.eom.natural_equation, Δ; order=2)
    M = substitute_all(M, merge(res.fixed_parameters, rules))
    symbols = _free_symbols(res)
    compiled_M = map(M) do el
        args = cat(symbols, [Δ]; dims=1)
        f_re = Symbolics.build_function(el.re, args; expression=Val{false})
        f_im = Symbolics.build_function(el.im, args; expression=Val{false})
        (args...) -> f_re(args...) + im * f_im(args...)
    end
    return ResponseMatrix(compiled_M, symbols, res.problem.eom.variables)
end

"""Evaluate the response matrix `resp` for the steady state `s` at (lab-frame) frequency `Ω`."""
function evaluate_response_matrix(resp::ResponseMatrix, s::StateDict, Ω)
    values = cat([s[var] for var in resp.symbols], [Ω]; dims=1)
    f = resp.matrix
    return [Base.invokelatest(el, values) for el in f]
end

## THIS NEEDS REVISING
function _evaluate_response_vector(rmat::ResponseMatrix, s::StateDict, Ω)
    m = evaluate_response_matrix(rmat, s, Ω)
    force_pert = cat([[1.0, 1.0 * im] for n in 1:(size(m)[1] / 2)]...; dims=1)
    return inv(m) * force_pert
end

"""
$(TYPEDSIGNATURES)

For `rmat` and a solution dictionary `s`,
calculate the total response to a perturbative force at frequency `Ω`.

"""
function get_response(rmat::ResponseMatrix, s::StateDict, Ω)
    resp = 0

    # uv-type
    for pair in _get_uv_pairs(rmat.variables)
        u, v = rmat.variables[pair]
        this_ω = unwrap(substitute_all(u.ω, s))
        uv1 = _evaluate_response_vector(rmat, s, Ω - this_ω)[pair]
        uv2 = _evaluate_response_vector(rmat, s, -Ω + this_ω)[pair]
        resp += sqrt(_plusamp(uv1)^2 + _minusamp(uv2)^2)
    end

    # a-type variables
    for a_idx in _get_as(rmat.variables)
        a = rmat.variables[a_idx]
        uv1 = _evaluate_response_vector(rmat, s, Ω)[a]
        uv2 = _evaluate_response_vector(rmat, s, -Ω)[a]
        resp += sqrt(_plusamp(uv1)^2 + _minusamp(uv2)^2)
    end
    return resp
end

# formulas to obtain up- and down- converted frequency components when going from the
# rotating frame into the lab frame
_plusamp(uv) = norm(uv)^2 - 2 * (imag(uv[1]) * real(uv[2]) - real(uv[1]) * imag(uv[2]))
_minusamp(uv) = norm(uv)^2 + 2 * (imag(uv[1]) * real(uv[2]) - real(uv[1]) * imag(uv[2]))
