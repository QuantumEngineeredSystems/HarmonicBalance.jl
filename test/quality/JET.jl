using HarmonicBalance
using Test
using JET

@testset "JET" begin
    JET.test_package(HarmonicBalance; target_modules=(HarmonicBalance,))
end
