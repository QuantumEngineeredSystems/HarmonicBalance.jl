### Frequencies ###

"""
The base frequencies of a periodic field. Every frequency the recursion produces is an
integer combination of the frequencies of the field itself, hence a rational combination
`Σ kᵢ atomᵢ` of their monomials, stored as the vector `k`. Its sign is canonical: the
first nonzero entry is positive.
"""
struct FrequencyBasis
    atoms::Vector{Num}
end

function FrequencyBasis(series::Vector{Vector{FourierComponent}})
    atoms = Num[]
    for components in series, component in components
        for (_, atom) in frequency_terms(component.frequency)
            any(a -> isequal(a, atom), atoms) || push!(atoms, atom)
        end
    end
    return FrequencyBasis(atoms)
end

"The terms `coefficient * atom` of the frequency `ν`."
function frequency_terms(ν::Num)
    return map(QuestBase.expanded_terms(unwrap(ν))) do term
        coefficient = 1 // 1
        atom = Num(1)
        for factor in term.factors
            if SymbolicUtils.isconst(factor)
                coefficient *= QuestBase.with_const(Rational{Int}, factor)
            else
                atom *= Num(factor)
            end
        end
        return coefficient, atom
    end
end

const FrequencyKey = Vector{Rational{Int}}

function frequency_key(basis::FrequencyBasis, ν::Num)
    key = zeros(Rational{Int}, length(basis.atoms))
    for (coefficient, atom) in frequency_terms(ν)
        iszero(coefficient) && continue
        for (i, a) in enumerate(basis.atoms)
            isequal(a, atom) && (key[i] += coefficient)
        end
    end
    return key
end

zero_key(basis::FrequencyBasis) = zeros(Rational{Int}, length(basis.atoms))

frequency(basis::FrequencyBasis, key::FrequencyKey) = sum(key .* basis.atoms; init=Num(0))

"`key` with its canonical sign, and whether it was flipped."
function canonical(key::FrequencyKey)
    for value in key
        iszero(value) && continue
        return value < 0 ? (-key, true) : (key, false)
    end
    return key, false
end

"""
The canonical frequencies of products of up to `order` harmonics with the frequencies
`keys`, a superset of every frequency the triangle meets to that order.
"""
function reachable_frequencies(keys::Vector{FrequencyKey}, order::Int)
    reached = Set{FrequencyKey}(keys)
    frontier = copy(reached)
    for _ in 2:order
        next = Set{FrequencyKey}()
        for a in frontier, b in keys, combined in (a + b, a - b)
            key = first(canonical(combined))
            key in reached || push!(next, key)
        end
        union!(reached, next)
        frontier = next
    end
    return reached
end

### Atoms ###

"""
The atoms of the coefficient polynomials: the factors of the coefficients of the field,
among them the slow variables, and one atom for the inverse of every denominator that is
not a monomial. Monomial denominators enter as negative powers.
"""
struct AtomTable
    expressions::Vector{Num}
    index::Dict{Num,Int}
    inverses::Dict{Num,Int}
    denominators::Dict{Int,Num}
    variables::Vector{Num}
end

function AtomTable(variables::Vector{Num})
    table = AtomTable(Num[], Dict{Num,Int}(), Dict{Num,Int}(), Dict{Int,Num}(), variables)
    foreach(v -> atom_index!(table, v), variables)
    return table
end

function atom_index!(table::AtomTable, atom::Num)
    return get!(table.index, atom) do
        is_variable = any(v -> isequal(v, atom), table.variables)
        is_variable ||
            !any(v -> QuestBase.occurs_in(v, atom), table.variables) ||
            throw(
                ArgumentError("The factor $atom is not polynomial in the slow variables.")
            )
        push!(table.expressions, atom)
        return length(table.expressions)
    end
end

function inverse_index!(table::AtomTable, denominator::Num)
    return get!(table.inverses, denominator) do
        any(v -> QuestBase.occurs_in(v, denominator), table.variables) && throw(
            ArgumentError("The denominator $denominator depends on the slow variables.")
        )
        push!(table.expressions, 1 / denominator)
        table.denominators[length(table.expressions)] = denominator
        return length(table.expressions)
    end
end

variable_index(table::AtomTable, j::Int) = table.index[table.variables[j]]

"A monomial `Π atomᵢ^eᵢ` as its nonzero `i => eᵢ`, sorted by atom."
const SparseMonomial = Vector{Pair{Int,Int}}

function sparse_monomial(powers::Dict{Int,Int})
    return sort!([i => e for (i, e) in powers if !iszero(e)]; by=first)
end

"The terms `coefficient * monomial` of `x`, registering its factors and denominators."
function sparse_terms!(atoms::AtomTable, ::Type{C}, x::Num) where {C}
    terms = Tuple{SparseMonomial,C}[]
    for term in QuestBase.expanded_terms(unwrap(x))
        coefficient = one(C)
        powers = Dict{Int,Int}()
        for factor in term.factors
            if SymbolicUtils.isconst(factor)
                coefficient *= QuestBase.with_const(C, factor)
            else
                i = atom_index!(atoms, Num(factor))
                powers[i] = get(powers, i, 0) + 1
            end
        end
        if SymbolicUtils.isconst(term.denominator)
            coefficient /= QuestBase.with_const(C, term.denominator)
        else
            inverse, inverted = sparse_inverse!(atoms, C, Num(term.denominator))
            coefficient *= inverse
            for (i, e) in inverted
                powers[i] = get(powers, i, 0) + e
            end
        end
        push!(terms, (sparse_monomial(powers), coefficient))
    end
    return terms
end

"`1 / denominator` as `coefficient * monomial`."
function sparse_inverse!(atoms::AtomTable, ::Type{C}, denominator::Num) where {C}
    terms = sparse_terms!(atoms, C, denominator)
    if length(terms) == 1
        m, c = only(terms)
        return inv(c), SparseMonomial([i => -e for (i, e) in m])
    end
    return one(C), SparseMonomial([inverse_index!(atoms, denominator) => 1])
end

### Packed monomials ###

# Four exponents per word, each biased by 2^14 into the lower 15 bits of a 16-bit slot.
# A product adds words and removes one bias; a slot leaving the range sets its top bit.
const SLOT_BIAS = UInt64(0x4000)
const BIAS_WORD = 0x4000_4000_4000_4000
const OVERFLOW_MASK = 0x8000_8000_8000_8000

"A monomial with the exponents of every atom packed into `W` words."
const PackedMonomial{W} = NTuple{W,UInt64}

words_for(atoms::AtomTable) = max(1, cld(length(atoms.expressions), 4))

slot(atom::Int) = (div(atom - 1, 4) + 1, 16 * mod(atom - 1, 4))

function pack(::Val{W}, m::SparseMonomial) where {W}
    words = fill(BIAS_WORD, W)
    for (i, e) in m
        word, shift = slot(i)
        words[word] += reinterpret(UInt64, Int64(e)) << shift
    end
    return PackedMonomial{W}(words)
end

function exponent(m::PackedMonomial, atom::Int)
    word, shift = slot(atom)
    return Int((m[word] >> shift) & 0xffff) - Int(SLOT_BIAS)
end

function unpack(m::PackedMonomial{W}, natoms::Int) where {W}
    return SparseMonomial([
        i => exponent(m, i) for i in 1:natoms if !iszero(exponent(m, i))
    ])
end

function monomial_product(a::PackedMonomial{W}, b::PackedMonomial{W}) where {W}
    product = ntuple(k -> a[k] + b[k] - BIAS_WORD, Val(W))
    any(word -> !iszero(word & OVERFLOW_MASK), product) &&
        throw(OverflowError("A power in the averaged flow exceeds the packed range."))
    return product
end

"`m` with the power of `atom` lowered by one."
function lowered(m::PackedMonomial{W}, atom::Int) where {W}
    word, shift = slot(atom)
    return ntuple(k -> k == word ? m[k] - (UInt64(1) << shift) : m[k], Val(W))
end

### Polynomials ###

"A sparse Laurent polynomial over the atoms of an [`AtomTable`](@ref)."
struct Polynomial{C,W}
    terms::Dict{PackedMonomial{W},C}
end

Polynomial{C,W}() where {C,W} = Polynomial{C,W}(Dict{PackedMonomial{W},C}())

Base.copy(p::Polynomial) = typeof(p)(copy(p.terms))
Base.isempty(p::Polynomial) = isempty(p.terms)

function add_term!(p::Polynomial{C,W}, m::PackedMonomial{W}, c::C) where {C,W}
    total = get(p.terms, m, zero(C)) + c
    iszero(total) ? delete!(p.terms, m) : (p.terms[m] = total)
    return p
end

"`p += weight * q`"
function add!(p::Polynomial{C,W}, q::Polynomial{C,W}, weight::C) where {C,W}
    for (m, c) in q.terms
        add_term!(p, m, weight * c)
    end
    return p
end

"`p += weight * a * b`"
function add_product!(
    p::Polynomial{C,W}, a::Polynomial{C,W}, b::Polynomial{C,W}, weight::C
) where {C,W}
    for (ma, ca) in a.terms
        wa = weight * ca
        for (mb, cb) in b.terms
            add_term!(p, monomial_product(ma, mb), wa * cb)
        end
    end
    return p
end

"`weight * factor * p`"
function times_monomial(
    p::Polynomial{C,W}, factor::PackedMonomial{W}, weight::C
) where {C,W}
    result = Polynomial{C,W}()
    for (m, c) in p.terms
        add_term!(result, monomial_product(m, factor), weight * c)
    end
    return result
end

function derivative(p::Polynomial{C,W}, atom::Int) where {C,W}
    result = Polynomial{C,W}()
    for (m, c) in p.terms
        power = exponent(m, atom)
        iszero(power) || add_term!(result, lowered(m, atom), c * power)
    end
    return result
end

function Polynomial{C,W}(terms::Vector{Tuple{SparseMonomial,C}}) where {C,W}
    p = Polynomial{C,W}()
    for (m, c) in terms
        add_term!(p, pack(Val(W), m), c)
    end
    return p
end

"Flip the sign of the `reflected` atoms, `x → -x`."
function reflect!(p::Polynomial, reflected::Vector{Int})
    for (m, c) in p.terms
        isodd(sum(i -> exponent(m, i), reflected; init=0)) && (p.terms[m] = -c)
    end
    return p
end

### Output ###

"""
`p` as one fraction: the numerator a polynomial in the atoms, the denominator the product
of the highest inverse power of every atom and of every inverted denominator in `p`.
"""
function fraction(p::Polynomial{C}, atoms::AtomTable) where {C}
    natoms = length(atoms.expressions)
    terms = [(unpack(m, natoms), c) for (m, c) in p.terms]
    shift = Dict{Int,Int}()
    for (m, _) in terms, (i, e) in m
        if haskey(atoms.denominators, i)
            shift[i] = max(get(shift, i, 0), e)
        elseif e < 0
            shift[i] = max(get(shift, i, 0), -e)
        end
    end
    numerator = Dict{SparseMonomial,C}()
    for (m, c) in terms
        powers = Dict{Int,Int}(i => e for (i, e) in m if !haskey(atoms.denominators, i))
        cleared = Dict{SparseMonomial,C}()
        for (i, k) in shift
            haskey(atoms.denominators, i) || (powers[i] = get(powers, i, 0) + k)
        end
        cleared[sparse_monomial(powers)] = c
        for (i, k) in shift
            haskey(atoms.denominators, i) || continue
            denominator = sparse_terms!(atoms, C, atoms.denominators[i])
            for _ in 1:(k - sparse_power(m, i))
                cleared = sparse_product(cleared, denominator)
            end
        end
        for (mc, cc) in cleared
            numerator[mc] = get(numerator, mc, zero(C)) + cc
        end
    end
    denominator = prod(
        (haskey(atoms.denominators, i) ? atoms.denominators[i] : atoms.expressions[i])^k for
        (i, k) in shift;
        init=Num(1),
    )
    return Num(sparse_expression(numerator, atoms)) / denominator
end

function sparse_power(m::SparseMonomial, atom::Int)
    for (i, e) in m
        i == atom && return e
    end
    return 0
end

function sparse_product(
    a::Dict{SparseMonomial,C}, b::Vector{Tuple{SparseMonomial,C}}
) where {C}
    product = Dict{SparseMonomial,C}()
    for (ma, ca) in a, (mb, cb) in b
        powers = Dict{Int,Int}(ma)
        for (i, e) in mb
            powers[i] = get(powers, i, 0) + e
        end
        m = sparse_monomial(powers)
        product[m] = get(product, m, zero(C)) + ca * cb
    end
    return product
end

"The expression of a polynomial with nonnegative powers, each term interned once."
function sparse_expression(p::Dict{SparseMonomial,C}, atoms::AtomTable) where {C}
    terms = BasicSymbolic{SymReal}[
        unwrap(c * prod(atoms.expressions[i]^e for (i, e) in m; init=Num(1))) for
        (m, c) in p if !iszero(c)
    ]
    isempty(terms) && return unwrap(Num(0))
    return add_worker(SymReal, terms)
end

### Spectra ###

"""
One component `Σ_ν cᵥ cos(νt) + sᵥ sin(νt)` of a periodic field, by its coefficients. The
time-independent part is the cosine coefficient at the zero frequency.
"""
struct Spectrum{P<:Polynomial}
    cosines::Dict{FrequencyKey,P}
    sines::Dict{FrequencyKey,P}
end

Spectrum{P}() where {P} = Spectrum{P}(Dict{FrequencyKey,P}(), Dict{FrequencyKey,P}())

function Base.copy(s::Spectrum{P}) where {P}
    copies(d) = Dict{FrequencyKey,P}(k => copy(p) for (k, p) in d)
    return Spectrum{P}(copies(s.cosines), copies(s.sines))
end

Base.isempty(s::Spectrum) = isempty(s.cosines) && isempty(s.sines)

coefficient!(d::Dict{FrequencyKey,P}, key::FrequencyKey) where {P} = get!(P, d, key)

"Drop the coefficients that cancelled."
function prune!(s::Spectrum)
    filter!(p -> !isempty(last(p)), s.cosines)
    filter!(p -> !isempty(last(p)), s.sines)
    return s
end

"Add `weight * a * b * cos(νt)` for the possibly non-canonical frequency `key`."
function add_cosine_product!(
    s::Spectrum{P}, key::FrequencyKey, a::P, b::P, weight::C
) where {C,P<:Polynomial{C}}
    add_product!(coefficient!(s.cosines, first(canonical(key))), a, b, weight)
    return s
end

"Add `weight * a * b * sin(νt)` for the possibly non-canonical frequency `key`."
function add_sine_product!(
    s::Spectrum{P}, key::FrequencyKey, a::P, b::P, weight::C
) where {C,P<:Polynomial{C}}
    canonical_key, flipped = canonical(key)
    all(iszero, canonical_key) && return s
    add_product!(coefficient!(s.sines, canonical_key), a, b, flipped ? -weight : weight)
    return s
end

"""
Add `weight * a * b` to `s`, with the products of harmonics turned into sums:
`cos α cos β = (cos(α-β) + cos(α+β))/2`, `sin α sin β = (cos(α-β) - cos(α+β))/2` and
`cos α sin β = (sin(α+β) - sin(α-β))/2`.
"""
function add_product!(
    s::Spectrum{P}, a::Spectrum{P}, b::Spectrum{P}, weight::C
) where {C,P<:Polynomial{C}}
    half = weight / 2
    for (α, ca) in a.cosines
        for (β, cb) in b.cosines
            add_cosine_product!(s, α - β, ca, cb, half)
            add_cosine_product!(s, α + β, ca, cb, half)
        end
        for (β, sb) in b.sines
            add_sine_product!(s, α + β, ca, sb, half)
            add_sine_product!(s, α - β, ca, sb, -half)
        end
    end
    for (α, sa) in a.sines
        for (β, cb) in b.cosines
            add_sine_product!(s, α + β, sa, cb, half)
            add_sine_product!(s, α - β, sa, cb, half)
        end
        for (β, sb) in b.sines
            add_cosine_product!(s, α - β, sa, sb, half)
            add_cosine_product!(s, α + β, sa, sb, -half)
        end
    end
    return s
end

function derivative(s::Spectrum{P}, atom::Int) where {P}
    result = Spectrum{P}()
    for (target, source) in ((result.cosines, s.cosines), (result.sines, s.sines))
        for (key, p) in source
            dp = derivative(p, atom)
            isempty(dp) || (target[key] = dp)
        end
    end
    return result
end

function mean_value(s::Spectrum{P}, basis::FrequencyBasis) where {P}
    return get(s.cosines, zero_key(basis), P())
end

"Add `weight` times the oscillating part of `source` to `s`."
function add_oscillations!(
    s::Spectrum{P}, source::Spectrum{P}, weight::C
) where {C,P<:Polynomial{C}}
    for (key, p) in source.cosines
        all(iszero, key) || add!(coefficient!(s.cosines, key), p, weight)
    end
    for (key, p) in source.sines
        add!(coefficient!(s.sines, key), p, weight)
    end
    return prune!(s)
end

### Fields ###

"""
A periodic vector field by the spectra of its components, with their Jacobian if the field
enters a Lie derivative later on, and none otherwise.
"""
struct SpectralField{P<:Polynomial}
    components::Vector{Spectrum{P}}
    jacobian::Matrix{Spectrum{P}}
end

function SpectralField(
    components::Vector{Spectrum{P}}, variable_atoms::Vector{Int}, differentiate::Bool
) where {P}
    foreach(prune!, components)
    columns = differentiate ? variable_atoms : Int[]
    jacobian = [derivative(c, atom) for c in components, atom in columns]
    return SpectralField{P}(components, jacobian)
end

is_zero(field::SpectralField) = all(isempty, field.components)

"Add `weight * L(W) Z = weight * (DW⋅Z - DZ⋅W)` to `entry`."
function add_lie_derivative!(
    entry::Vector{Spectrum{P}}, weight::C, W::SpectralField{P}, Z::SpectralField{P}
) where {C,P<:Polynomial{C}}
    for i in eachindex(entry), j in eachindex(Z.components)
        add_product!(entry[i], W.jacobian[i, j], Z.components[j], weight)
        add_product!(entry[i], Z.jacobian[i, j], W.components[j], -weight)
    end
    return entry
end

"""
The zero-mean generator `W` with `∂ₜW = g - known`: the antiderivative of the oscillating
part of `known` with opposite sign, `(s cos νt - c sin νt)/ν` for every harmonic.
`inverses` holds `1/ν` for every frequency.
"""
function homological_generator(
    known::SpectralField{P},
    inverses::Dict{FrequencyKey,Tuple{C,PackedMonomial{W}}},
    variable_atoms::Vector{Int},
) where {C,W,P<:Polynomial{C,W}}
    components = map(known.components) do spectrum
        generator = Spectrum{P}()
        for (key, c) in spectrum.cosines
            all(iszero, key) && continue
            inverse, inverted = inverses[key]
            generator.sines[key] = times_monomial(c, inverted, -inverse)
        end
        for (key, s) in spectrum.sines
            inverse, inverted = inverses[key]
            generator.cosines[key] = times_monomial(s, inverted, inverse)
        end
        return generator
    end
    return SpectralField(components, variable_atoms, true)
end

### Averaging ###

"""
$(TYPEDSIGNATURES)

The autonomous slow flow of `du/dT = field(u, t)` to the given `order`, by Hori-Deprit
averaging.

The flow is the vector field `X = ∂ₜ + ε X₁` with `X₁ = field`, and the generator of the
near-identity transformation is `W = Σₙ εⁿ⁻¹/(n-1)! Wₙ`. Deprit's triangle

    T(k, j) = T(k-1, j+1) + Σₘ binomial(j, m) L(Wₘ₊₁) T(k-1, j-m),   T(0, j) = Xⱼ,

with the Lie derivative `L(W) Z = DW⋅Z - DZ⋅W` and `L(W) ∂ₜ = ∂ₜW`, gives the
transformed field `Σₙ εⁿ/n! T(n, 0)`. Only `T(1, n-1)` contains `Wₙ`, through `∂ₜWₙ`, and it
passes unchanged into every `T(k, n-k)`. Without it, `T(n, 0)` is the known part `Kₙ`, and
the homological equation `∂ₜWₙ = gₙ - Kₙ` makes `T(n, 0) = gₙ` autonomous.

The variables marked `reflected` change sign in the result, `vᵢ → -vᵢ` in the averaged
flow as in its time derivatives.

Every field is held by its Fourier coefficients in `t`, which are sparse Laurent
polynomials over the factors of the coefficients of `field`, with packed exponents.
Denominators, the frequencies and those of `field`, enter as negative powers, or as atoms
standing for their inverses if they are not monomials. The recursion thus only multiplies,
adds and differentiates polynomials; Symbolics reads `field` and writes the result.
"""
function lie_transform_average(
    field::Vector{Num},
    variables::Vector{Num},
    t::Num,
    order::Int;
    reflected::Vector{Bool}=fill(false, length(variables)),
)
    series = [fourier_series(component, t) for component in field]
    return lie_transform_average(
        series, variables, order, reflected, coefficient_type(series)
    )
end

function lie_transform_average(
    series::Vector{Vector{FourierComponent}},
    variables::Vector{Num},
    order::Int,
    reflected::Vector{Bool},
    ::Type{C},
) where {C}
    basis = FrequencyBasis(series)
    atoms = AtomTable(variables)
    # every atom is registered before the exponents are packed
    input = [
        Tuple{FrequencyKey,Vector{Tuple{SparseMonomial,C}},Vector{Tuple{SparseMonomial,C}}}[
            (
                frequency_key(basis, c.frequency),
                sparse_terms!(atoms, C, c.cosine),
                sparse_terms!(atoms, C, c.sine),
            ) for c in components
        ] for components in series
    ]
    keys = unique(FrequencyKey[key for components in input for (key, _, _) in components])
    sparse_inverses = Dict{FrequencyKey,Tuple{C,SparseMonomial}}(
        key => sparse_inverse!(atoms, C, frequency(basis, key)) for
        key in reachable_frequencies(keys, order) if !all(iszero, key)
    )
    return average_packed(
        Val(words_for(atoms)), input, sparse_inverses, basis, atoms, order, reflected
    )
end

function average_packed(
    ::Val{W},
    input::Vector{
        Vector{
            Tuple{
                FrequencyKey,Vector{Tuple{SparseMonomial,C}},Vector{Tuple{SparseMonomial,C}}
            },
        },
    },
    sparse_inverses::Dict{FrequencyKey,Tuple{C,SparseMonomial}},
    basis::FrequencyBasis,
    atoms::AtomTable,
    order::Int,
    reflected::Vector{Bool},
) where {C,W}
    P = Polynomial{C,W}
    variable_atoms = [variable_index(atoms, j) for j in eachindex(atoms.variables)]
    inverses = Dict{FrequencyKey,Tuple{C,PackedMonomial{W}}}(
        key => (c, pack(Val(W), m)) for (key, (c, m)) in sparse_inverses
    )
    components = map(input) do harmonics
        spectrum = Spectrum{P}()
        for (key, cosine, sine) in harmonics
            isempty(cosine) || add!(coefficient!(spectrum.cosines, key), P(cosine), one(C))
            isempty(sine) || add!(coefficient!(spectrum.sines, key), P(sine), one(C))
        end
        return spectrum
    end
    # only the diagonals before the last one enter Lie derivatives
    first_order = SpectralField(components, variable_atoms, order > 1)
    empty_field = SpectralField([Spectrum{P}() for _ in input], variable_atoms, false)

    triangle = Dict{Tuple{Int,Int},SpectralField{P}}()
    for j in 1:order
        triangle[(0, j)] = j == 1 ? first_order : empty_field
    end
    generators = SpectralField{P}[]
    averages = Vector{P}[]
    for n in 1:order
        for k in 1:n
            j = n - k
            entry = map(copy, triangle[(k - 1, j + 1)].components)
            for m in 0:(j - (k == 1))
                lower = triangle[(k - 1, j - m)]
                is_zero(lower) && continue
                add_lie_derivative!(entry, C(binomial(j, m)), generators[m + 1], lower)
            end
            triangle[(k, j)] = SpectralField(entry, variable_atoms, false)
        end
        known = triangle[(n, 0)]
        push!(averages, [mean_value(component, basis) for component in known.components])
        n == order && break
        push!(generators, homological_generator(known, inverses, variable_atoms))
        for k in 1:n
            entry = map(copy, triangle[(k, n - k)].components)
            for (spectrum, oscillating) in zip(entry, known.components)
                add_oscillations!(spectrum, oscillating, -one(C))
            end
            triangle[(k, n - k)] = SpectralField(entry, variable_atoms, true)
        end
    end
    reflected_atoms = [variable_atoms[j] for j in eachindex(variable_atoms) if reflected[j]]
    return map(eachindex(input)) do i
        averaged = P()
        for n in 1:order
            add!(averaged, averages[n][i], inv(C(factorial(n))) * (reflected[i] ? -1 : 1))
        end
        return fraction(reflect!(averaged, reflected_atoms), atoms)
    end
end

"""
The type of the polynomial coefficients: exact rationals, unless `series` carries a
floating-point constant.
"""
function coefficient_type(series::Vector{Vector{FourierComponent}})
    exact = all(series) do components
        all(components) do c
            return constants_are_rational(c.cosine) && constants_are_rational(c.sine)
        end
    end
    return exact ? Rational{Int} : Float64
end

function constants_are_rational(x::Num)
    return all(QuestBase.expanded_terms(unwrap(x))) do term
        all(term.factors) do factor
            return !SymbolicUtils.isconst(factor) ||
                   SymbolicUtils.unwrap_const(factor) isa Union{Integer,Rational}
        end
    end
end
