function dummy_symbolic_Jacobian(n::Int)::Matrix{Num}
    return Num.(float.(collect(LinearAlgebra.I(n))) .* NaN)
end

flatten(a) = collect(Iterators.flatten(a))

"Show fields of an object."
function show_fields(object)
    for field in fieldnames(typeof(object)) # display every field
        display(string(field))
        display(getfield(object, field))
    end
end

_symidx(sym::Num, args...) = findfirst(x -> isequal(x, sym), _free_symbols(args...))
