window.BENCHMARK_DATA = {
  "lastUpdate": 1752951366537,
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
      }
    ]
  }
}