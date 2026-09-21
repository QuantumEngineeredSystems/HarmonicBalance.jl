window.BENCHMARK_DATA = {
  "lastUpdate": 1785256105211,
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
          "id": "5a41b992aa4c2e12f0e4531d0fcdb0e9acafd2f1",
          "message": "build: run JET in its own CI job (#515)",
          "timestamp": "2026-07-27T12:18:31+02:00",
          "tree_id": "382ef829bfaa3f8d7e160a19d59873dd0298c91a",
          "url": "https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/commit/5a41b992aa4c2e12f0e4531d0fcdb0e9acafd2f1"
        },
        "date": 1785148725751,
        "tool": "julia",
        "benches": [
          {
            "name": "Classification/One Dimensional/Default classifications",
            "value": 1436543,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1124800\nallocs=18337\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Harmonic Equation/One Frequency",
            "value": 328592839,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40391296\nallocs=788359\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 1",
            "value": 26791197482,
            "unit": "ns",
            "extra": "gctime=1690959519\nmemory=12383798448\nallocs=300302179\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 2",
            "value": 31140206122,
            "unit": "ns",
            "extra": "gctime=1905224258\nmemory=14484586160\nallocs=346598942\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Problem/HomotopyContinuationProblem",
            "value": 11309513,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2468888\nallocs=63882\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Lab frame/Jacobian Response",
            "value": 605825,
            "unit": "ns",
            "extra": "gctime=0\nmemory=530880\nallocs=6849\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Rotating frame/Jacobian Response",
            "value": 301079.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=284864\nallocs=1687\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Hilbert sorting",
            "value": 116136.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207568\nallocs=3010\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Nearest-neighbor sorting",
            "value": 117046,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207568\nallocs=3010\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Polyhedral homotopy",
            "value": 431489096,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72679344\nallocs=1644498\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Total degree homotopy",
            "value": 271552947,
            "unit": "ns",
            "extra": "gctime=0\nmemory=47428976\nallocs=1086198\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Warm up method",
            "value": 138115669,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34294712\nallocs=798612\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
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
          "id": "02e0cb4eb21119420456e097afd046bf24d841a5",
          "message": "fix: accept any parameter map in ODEProblem and friends (#516)",
          "timestamp": "2026-07-27T13:48:11+02:00",
          "tree_id": "ec91c32e2e1f510c086524c09e35a269306df5b7",
          "url": "https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/commit/02e0cb4eb21119420456e097afd046bf24d841a5"
        },
        "date": 1785154604682,
        "tool": "julia",
        "benches": [
          {
            "name": "Classification/One Dimensional/Default classifications",
            "value": 1627595,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1124800\nallocs=18337\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Harmonic Equation/One Frequency",
            "value": 363345046,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40371176\nallocs=788186\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 1",
            "value": 29484220982,
            "unit": "ns",
            "extra": "gctime=1410000975\nmemory=12383239056\nallocs=300255563\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 2",
            "value": 36848138900,
            "unit": "ns",
            "extra": "gctime=1701580834\nmemory=14484490344\nallocs=346600564\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Problem/HomotopyContinuationProblem",
            "value": 15308156.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2468888\nallocs=63882\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Lab frame/Jacobian Response",
            "value": 941565,
            "unit": "ns",
            "extra": "gctime=0\nmemory=530880\nallocs=6849\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Rotating frame/Jacobian Response",
            "value": 356535,
            "unit": "ns",
            "extra": "gctime=0\nmemory=284864\nallocs=1687\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Hilbert sorting",
            "value": 142005,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207888\nallocs=3018\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Nearest-neighbor sorting",
            "value": 142355,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207888\nallocs=3018\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Polyhedral homotopy",
            "value": 446841890,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72679328\nallocs=1644498\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Total degree homotopy",
            "value": 290341872,
            "unit": "ns",
            "extra": "gctime=0\nmemory=47428976\nallocs=1086198\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Warm up method",
            "value": 149840476,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34295048\nallocs=798612\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
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
          "id": "a716ade1e5c764819d6f7f090d65fe2be4d2037c",
          "message": "fix: evaluate the Jacobian implicitly when deriving it symbolically is hopeless (#518)",
          "timestamp": "2026-07-27T18:27:50+02:00",
          "tree_id": "047e32781079392657c5ee77ee6fdbcca70d79b6",
          "url": "https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/commit/a716ade1e5c764819d6f7f090d65fe2be4d2037c"
        },
        "date": 1785171342439,
        "tool": "julia",
        "benches": [
          {
            "name": "Classification/One Dimensional/Default classifications",
            "value": 1726543,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1124800\nallocs=18337\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Harmonic Equation/One Frequency",
            "value": 363015330,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40599064\nallocs=794855\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 1",
            "value": 26745742969,
            "unit": "ns",
            "extra": "gctime=1511696907\nmemory=12383604344\nallocs=300305993\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 2",
            "value": 31837621444,
            "unit": "ns",
            "extra": "gctime=1756066953\nmemory=14486380216\nallocs=346689868\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Problem/HomotopyContinuationProblem",
            "value": 14251947,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2466800\nallocs=63880\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Lab frame/Jacobian Response",
            "value": 1241458,
            "unit": "ns",
            "extra": "gctime=0\nmemory=530880\nallocs=6849\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Rotating frame/Jacobian Response",
            "value": 365941,
            "unit": "ns",
            "extra": "gctime=0\nmemory=284864\nallocs=1687\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Hilbert sorting",
            "value": 144400.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207888\nallocs=3018\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Nearest-neighbor sorting",
            "value": 144932,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207888\nallocs=3018\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Polyhedral homotopy",
            "value": 470069155,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72679328\nallocs=1644498\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Total degree homotopy",
            "value": 299888831.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=47428976\nallocs=1086198\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Warm up method",
            "value": 151629868,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34295448\nallocs=798612\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
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
          "id": "7362269c05fdc595ecfb1cc013fa21714712153b",
          "message": "perf: project all harmonics of an equation in one pass (#519)",
          "timestamp": "2026-07-27T19:25:33+02:00",
          "tree_id": "e4388e9bf70f5f1cc9df8a99b5475f1d5cc929d2",
          "url": "https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/commit/7362269c05fdc595ecfb1cc013fa21714712153b"
        },
        "date": 1785173897923,
        "tool": "julia",
        "benches": [
          {
            "name": "Classification/One Dimensional/Default classifications",
            "value": 1865016,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1124800\nallocs=18337\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Harmonic Equation/One Frequency",
            "value": 230318107,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21589968\nallocs=414040\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 1",
            "value": 26196757903,
            "unit": "ns",
            "extra": "gctime=1508911443\nmemory=12382808816\nallocs=300226134\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 2",
            "value": 30537298628,
            "unit": "ns",
            "extra": "gctime=1844493863\nmemory=14408957704\nallocs=346519779\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Problem/HomotopyContinuationProblem",
            "value": 12486739,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2470264\nallocs=63861\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Lab frame/Jacobian Response",
            "value": 964228,
            "unit": "ns",
            "extra": "gctime=0\nmemory=530880\nallocs=6849\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Rotating frame/Jacobian Response",
            "value": 354492,
            "unit": "ns",
            "extra": "gctime=0\nmemory=284864\nallocs=1687\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Hilbert sorting",
            "value": 153200,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207888\nallocs=3018\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Nearest-neighbor sorting",
            "value": 154146.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207888\nallocs=3018\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Polyhedral homotopy",
            "value": 479413474,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72679328\nallocs=1644498\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Total degree homotopy",
            "value": 308542039,
            "unit": "ns",
            "extra": "gctime=0\nmemory=47428976\nallocs=1086198\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Warm up method",
            "value": 156340395,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34294856\nallocs=798612\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
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
          "id": "972309678bff278efb0319857b59d91a13f0f547",
          "message": "fix: give each natural variable its own harmonic in the van der Pol ansatz (#521)",
          "timestamp": "2026-07-28T15:17:37+02:00",
          "tree_id": "499ea9729ec387095106032266c30a240cb100a5",
          "url": "https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/commit/972309678bff278efb0319857b59d91a13f0f547"
        },
        "date": 1785245879408,
        "tool": "julia",
        "benches": [
          {
            "name": "Classification/One Dimensional/Default classifications",
            "value": 1790164,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1124800\nallocs=18337\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Harmonic Equation/One Frequency",
            "value": 174267234,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17023784\nallocs=314015\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 1",
            "value": 180698139,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18955064\nallocs=377101\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 2",
            "value": 1008579750.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=342914832\nallocs=6887031\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Problem/HomotopyContinuationProblem",
            "value": 9787165,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2399440\nallocs=62203\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Lab frame/Jacobian Response",
            "value": 746633,
            "unit": "ns",
            "extra": "gctime=0\nmemory=530880\nallocs=6849\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Rotating frame/Jacobian Response",
            "value": 343457.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=284864\nallocs=1687\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Hilbert sorting",
            "value": 155369,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207888\nallocs=3018\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Nearest-neighbor sorting",
            "value": 155685,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207888\nallocs=3018\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Polyhedral homotopy",
            "value": 476411240,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72576240\nallocs=1642014\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Total degree homotopy",
            "value": 301618386.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=47325872\nallocs=1083714\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Warm up method",
            "value": 148035680,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34190232\nallocs=796078\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
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
          "id": "c339669a930dcf20dab39da1ed9ad2429366e67a",
          "message": "fix: reject equations that are not polynomial in the variables (#520)",
          "timestamp": "2026-07-28T18:11:52+02:00",
          "tree_id": "ee308f644ab8f91a9e9417b6d0dd6e3a9810da48",
          "url": "https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/commit/c339669a930dcf20dab39da1ed9ad2429366e67a"
        },
        "date": 1785256092452,
        "tool": "julia",
        "benches": [
          {
            "name": "Classification/One Dimensional/Default classifications",
            "value": 1879824,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1124800\nallocs=18337\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Harmonic Equation/One Frequency",
            "value": 166620084,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16919240\nallocs=310891\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 1",
            "value": 178043876,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19035008\nallocs=377873\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 2",
            "value": 960055071,
            "unit": "ns",
            "extra": "gctime=0\nmemory=341972384\nallocs=6861889\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Problem/HomotopyContinuationProblem",
            "value": 9572524.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2402936\nallocs=62373\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Lab frame/Jacobian Response",
            "value": 743743,
            "unit": "ns",
            "extra": "gctime=0\nmemory=530880\nallocs=6849\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Rotating frame/Jacobian Response",
            "value": 350690,
            "unit": "ns",
            "extra": "gctime=0\nmemory=284864\nallocs=1687\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Hilbert sorting",
            "value": 157978,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207888\nallocs=3018\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Nearest-neighbor sorting",
            "value": 158229,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207888\nallocs=3018\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Polyhedral homotopy",
            "value": 481553210,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72576256\nallocs=1642014\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Total degree homotopy",
            "value": 297302952,
            "unit": "ns",
            "extra": "gctime=0\nmemory=47325872\nallocs=1083714\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Warm up method",
            "value": 152957891,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34190008\nallocs=796078\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          }
        ]
      }
    ]
  }
}