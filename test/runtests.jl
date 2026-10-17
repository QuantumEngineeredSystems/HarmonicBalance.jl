using HarmonicBalance
using ParallelTestRunner: ParallelTestRunner

# Start with autodiscovered tests
testsuite = ParallelTestRunner.find_tests(@__DIR__)

# Parse arguments
args = ParallelTestRunner.parse_args(ARGS)

if ParallelTestRunner.filter_tests!(testsuite, args)
    delete!(testsuite, "quality/JET")
end

ParallelTestRunner.runtests(HarmonicBalance, args; testsuite)
