window.BENCHMARK_DATA = {
  "lastUpdate": 1770734721358,
  "repoUrl": "https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl",
  "entries": {
    "Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "orjan.ameye@hotmail.com",
            "name": "Orjan Ameye",
            "username": "oameye"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "906fb8f04ce428d02e2d7eb7f4e711d0b0beff68",
          "message": "build: implement performance tracking workflow (#443)",
          "timestamp": "2025-07-19T13:11:51+02:00",
          "tree_id": "4a54aeb891a69ee69b867de3c74e18823a31e48b",
          "url": "https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/commit/906fb8f04ce428d02e2d7eb7f4e711d0b0beff68"
        },
        "date": 1752924675000,
        "tool": "julia",
        "benches": [
          {
            "name": "Construction/Krylov Equation/Order 2",
            "value": 3838069497,
            "unit": "ns",
            "extra": "gctime=272136990\nmemory=1534717320\nallocs=32235703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Construction/Krylov Equation/Order 1",
            "value": 613229104,
            "unit": "ns",
            "extra": "gctime=0\nmemory=174362888\nallocs=4389646\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Construction/Problem/HomotopyContinuationProblem",
            "value": 32876915.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8291904\nallocs=237541\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Construction/Harmonic Equation/One Frequency",
            "value": 182395390,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53130080\nallocs=1250371\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Linear response/Rotating frame/Jacobian Response",
            "value": 387443,
            "unit": "ns",
            "extra": "gctime=0\nmemory=282112\nallocs=1687\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Linear response/Lab frame/Jacobian Response",
            "value": 2260130,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1031184\nallocs=21215\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steady states/Homotopy Problem/Polyhedral homotopy",
            "value": 461270444.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=84371472\nallocs=2240591\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steady states/Homotopy Problem/Warm up method",
            "value": 126495985,
            "unit": "ns",
            "extra": "gctime=0\nmemory=38916768\nallocs=1065759\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steady states/Homotopy Problem/Total degree homotopy",
            "value": 288850001,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53801176\nallocs=1436991\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sorting/One dimensional/Hilbert sorting",
            "value": 150403,
            "unit": "ns",
            "extra": "gctime=0\nmemory=211344\nallocs=3124\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sorting/One dimensional/Nearest-neighbor sorting",
            "value": 151204.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=211344\nallocs=3124\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Classification/One Dimensional/Default classifications",
            "value": 2026912,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1125808\nallocs=18340\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "orjan.ameye@hotmail.com",
            "name": "Orjan Ameye",
            "username": "oameye"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "419a06f9a9ecee10fff6013c23b17a8199152077",
          "message": "build: tag path version (#450)",
          "timestamp": "2025-07-19T20:45:44+02:00",
          "tree_id": "42b8fe835fb7bb7a0618a5659828e0900573f98f",
          "url": "https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/commit/419a06f9a9ecee10fff6013c23b17a8199152077"
        },
        "date": 1752951356981,
        "tool": "julia",
        "benches": [
          {
            "name": "Construction/Krylov Equation/Order 2",
            "value": 3783941362,
            "unit": "ns",
            "extra": "gctime=245984933\nmemory=1526779696\nallocs=31982837\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Construction/Krylov Equation/Order 1",
            "value": 610202905,
            "unit": "ns",
            "extra": "gctime=0\nmemory=174443128\nallocs=4390007\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Construction/Problem/HomotopyContinuationProblem",
            "value": 34786532,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8291968\nallocs=237549\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Construction/Harmonic Equation/One Frequency",
            "value": 178699826,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53171688\nallocs=1253941\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Linear response/Rotating frame/Jacobian Response",
            "value": 385491.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=282112\nallocs=1687\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Linear response/Lab frame/Jacobian Response",
            "value": 2222553,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1031184\nallocs=21215\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steady states/Homotopy Problem/Polyhedral homotopy",
            "value": 468889042,
            "unit": "ns",
            "extra": "gctime=0\nmemory=84372800\nallocs=2240591\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steady states/Homotopy Problem/Warm up method",
            "value": 129243915,
            "unit": "ns",
            "extra": "gctime=0\nmemory=38912832\nallocs=1065759\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steady states/Homotopy Problem/Total degree homotopy",
            "value": 291617900,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53801176\nallocs=1436991\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sorting/One dimensional/Hilbert sorting",
            "value": 151003,
            "unit": "ns",
            "extra": "gctime=0\nmemory=211344\nallocs=3124\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sorting/One dimensional/Nearest-neighbor sorting",
            "value": 152365.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=211344\nallocs=3124\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Classification/One Dimensional/Default classifications",
            "value": 2136316,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1125808\nallocs=18340\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eebe3688fe0349e7d4aec6edbb21c4b20addd52e",
          "message": "build(deps): bump crate-ci/typos from 1.42.0 to 1.43.3 (#486)\n\n* build(deps): bump crate-ci/typos from 1.42.0 to 1.43.3\n\nBumps [crate-ci/typos](https://github.com/crate-ci/typos) from 1.42.0 to 1.43.3.\n- [Release notes](https://github.com/crate-ci/typos/releases)\n- [Changelog](https://github.com/crate-ci/typos/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/crate-ci/typos/compare/v1.42.0...v1.43.3)\n\n---\nupdated-dependencies:\n- dependency-name: crate-ci/typos\n  dependency-version: 1.43.3\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\n\n* Fix CI: Remove unused @variables import and fix formatting in ModelingToolkitExt (#487)\n\n* Initial plan\n\n* Remove unused @variables import from ModelingToolkitExt\n\nCo-authored-by: oameye <57623933+oameye@users.noreply.github.com>\n\n* Fix formatting: Put Symbolics imports on single line\n\nCo-authored-by: oameye <57623933+oameye@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: oameye <57623933+oameye@users.noreply.github.com>\n\n* [WIP] Update typos dependency from 1.42.0 to 1.43.3 (#488)\n\n* Initial plan\n\n* Remove unused @setup_workload and @compile_workload imports\n\nCo-authored-by: oameye <57623933+oameye@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: oameye <57623933+oameye@users.noreply.github.com>\n\n---------\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Copilot <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: oameye <57623933+oameye@users.noreply.github.com>",
          "timestamp": "2026-02-10T11:32:57+01:00",
          "tree_id": "71b2e0135f33fa100bb3daeee97cbb7b5893da93",
          "url": "https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/commit/eebe3688fe0349e7d4aec6edbb21c4b20addd52e"
        },
        "date": 1770734708425,
        "tool": "julia",
        "benches": [
          {
            "name": "Construction/Krylov Equation/Order 2",
            "value": 1429597362807,
            "unit": "ns",
            "extra": "gctime=1822908570\nmemory=17048368920\nallocs=482731736\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Construction/Krylov Equation/Order 1",
            "value": 1375167302734,
            "unit": "ns",
            "extra": "gctime=1399352827\nmemory=13199111624\nallocs=384183771\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Construction/Problem/HomotopyContinuationProblem",
            "value": 32570204.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8332608\nallocs=234098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Construction/Harmonic Equation/One Frequency",
            "value": 653050164.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=50996000\nallocs=1193484\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Linear response/Rotating frame/Jacobian Response",
            "value": 431420,
            "unit": "ns",
            "extra": "gctime=0\nmemory=285728\nallocs=1734\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Linear response/Lab frame/Jacobian Response",
            "value": 2695179,
            "unit": "ns",
            "extra": "gctime=0\nmemory=943296\nallocs=21219\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steady states/Homotopy Problem/Polyhedral homotopy",
            "value": 433113667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=73152048\nallocs=1664813\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steady states/Homotopy Problem/Warm up method",
            "value": 120004833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34813176\nallocs=820041\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Steady states/Homotopy Problem/Total degree homotopy",
            "value": 274845760,
            "unit": "ns",
            "extra": "gctime=0\nmemory=47740144\nallocs=1104113\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sorting/One dimensional/Hilbert sorting",
            "value": 140771,
            "unit": "ns",
            "extra": "gctime=0\nmemory=208208\nallocs=3026\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sorting/One dimensional/Nearest-neighbor sorting",
            "value": 145289,
            "unit": "ns",
            "extra": "gctime=0\nmemory=208208\nallocs=3026\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Classification/One Dimensional/Default classifications",
            "value": 2139432.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1124800\nallocs=18337\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":10,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}