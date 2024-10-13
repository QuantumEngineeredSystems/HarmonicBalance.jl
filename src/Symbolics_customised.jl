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
    simplify,
    expand_derivatives,
    build_function,
    Equation,
    Differential,
    @variables,
    arguments,
    simplify_fractions,
    substitute,
    term,
    expand,
    operation


# macro wrap_method(f)
#     return quote
#         @eval function $f(x::Num)
#             wrap($f(unwrap(x)))
#         end
#     end
# end

# @wrap_method expand_all
# @wrap_method expand_exp_power
expand_exp_power(expr::Num) = expand_exp_power(expr.val)
expand_all(x::Num) = Num(expand_all(x.val))


"Returns true if expr is an exponential"
isexp(expr) = isterm(expr) && expr.f == exp

"Expand powers of exponential such that exp(x)^n => exp(x*n) "
function expand_exp_power(expr::BasicSymbolic)
    @compactified expr::BasicSymbolic begin
    Add => sum([expand_exp_power(arg) for arg in arguments(expr)])
    Mul => prod([expand_exp_power(arg) for arg in arguments(expr)])
    _   => ispow(expr) && isexp(expr.base) ? exp(expr.base.arguments[1] * expr.exp) : expr
    end
end
expand_exp_power(expr) = expr

"Expands using SymbolicUtils.expand and expand_exp_power (changes exp(x)^n to exp(x*n)"
function expand_all(x)
    result = Postwalk(expand_exp_power)(SymbolicUtils.expand(x))
    return isnothing(result) ? x : result
end
expand_all(x::Complex{Num}) = expand_all(x.re) + im * expand_all(x.im)

"Apply a function f on every member of a sum or a product"
function _apply_termwise(f, x::BasicSymbolic)
    @compactified x::BasicSymbolic begin
    Add  => sum([f(arg) for arg in arguments(x)])
    Mul  => prod([f(arg) for arg in arguments(x)])
    Div  =>  _apply_termwise(f, x.num) / _apply_termwise(f, x.den)
    _    => f(x)
    end
end
_apply_termwise(f, x::Num) = wrap(_apply_termwise(f, unwrap(x)))

simplify_complex(x::Complex) = isequal(x.im, 0) ? x.re : x.re + im * x.im
simplify_complex(x) = x
function simplify_complex(x::BasicSymbolic)
    if isadd(x) || ismul(x) || isdiv(x)
        return _apply_termwise(simplify_complex, x)
    else
        return x
    end
end

"Simplify products of exponentials such that exp(a)*exp(b) => exp(a+b)
This is included in SymbolicUtils as of 17.0 but the method here avoid other simplify calls"
function simplify_exp_products_mul(expr)
    ind = findall(x -> isexp(x), arguments(expr))
    rest_ind = setdiff(1:length(arguments(expr)), ind)
    rest = isempty(rest_ind) ? 1 : prod(arguments(expr)[rest_ind])
    total = isempty(ind) ? 0 : sum(getindex.(arguments.(arguments(expr)[ind]), 1))
    if SymbolicUtils.is_literal_number(total)
        (total == 0 && return rest)
    else
        return rest * exp(total)
    end
end

function simplify_exp_products(x::Complex{Num})
    return Complex{Num}(simplify_exp_products(x.re.val), simplify_exp_products(x.im.val))
end
simplify_exp_products(x::Num) = simplify_exp_products(x.val)
simplify_exp_products(x) = x

function simplify_exp_products(expr::BasicSymbolic)
    if isadd(expr) || isdiv(expr)
        return _apply_termwise(simplify_exp_products, expr)
    elseif ismul(expr)
        return simplify_exp_products_mul(expr)
    else
        return expr
    end
end

function exp_to_trig(x::BasicSymbolic)
    if isadd(x) || isdiv(x) || ismul(x)
        return _apply_termwise(exp_to_trig, x)
    elseif isterm(x) && x.f == exp
        arg = first(x.arguments)
        trigarg = Symbolics.expand(-im * arg) # the argument of the to-be trig function
        trigarg = simplify_complex(trigarg)

        # put arguments of trigs into a standard form such that sin(x) = -sin(-x), cos(x) = cos(-x) are recognized
        if isadd(trigarg)
            first_symbol = minimum(
                cat(string.(arguments(trigarg)), string.(arguments(-trigarg)); dims=1)
            )

            # put trigarg => -trigarg the lowest alphabetic argument of trigarg is lower than that of -trigarg
            # this is a meaningless key but gives unique signs to all sums
            is_first = minimum(string.(arguments(trigarg))) == first_symbol
            return if is_first
                cos(-trigarg) - im * sin(-trigarg)
            else
                cos(trigarg) + im * sin(trigarg)
            end
        end
        return if ismul(trigarg) && trigarg.coeff < 0
            cos(-trigarg) - im * sin(-trigarg)
        else
            cos(trigarg) + im * sin(trigarg)
        end
    else
        return x
    end
end

exp_to_trig(x) = x
exp_to_trig(x::Num) = exp_to_trig(x.val)
exp_to_trig(x::Complex{Num}) = exp_to_trig(x.re) + im * exp_to_trig(x.im)

# sometimes, expressions get stored as Complex{Num} with no way to decode what real(x) and imag(x)
# this overloads the Num constructor to return a Num if x.re and x.im have similar arguments
function Num(x::Complex{Num})::Num
    if x.re.val isa Float64 && x.im.val isa Float64
        return Num(x.re.val)
    else
        if isequal(x.re.val.arguments, x.im.val.arguments)
            Num(first(x.re.val.arguments))
        else
            error("Cannot convert Complex{Num} " * string(x) * " to Num")
        end
    end
end
# ^ This function commits type-piracy with Symbolics.jl. We should change this.
