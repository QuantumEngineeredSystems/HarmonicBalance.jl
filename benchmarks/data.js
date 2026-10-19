window.BENCHMARK_DATA = {
  "lastUpdate": 1792401416042,
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
          "id": "45353c5dc6a86df5e7c316e7313395ae8c94c3f9",
          "message": "Make symbolic Jacobians explicit opt-in (#524)\n\n* Make the rearranged Jacobian opt-in\n\n`get_harmonic_equations` derived the Jacobian of the rearranged system on every\ncall. The rearrangement is a symbolic mass-matrix inversion whose cost grows\ncombinatorially with the number of harmonics, and it dominates the runtime of\nthis function on larger systems.\n\nNothing in the stability analysis reads the field: `HarmonicSteadyState`\nevaluates the Jacobian implicitly, solving for the derivatives numerically once\nthe parameters have values. That agrees with the rearranged matrix at every\nsteady state, which is the only place it is evaluated.\n\nRename the kwarg `jacobian` to `explicit_jacobian` and default it to `false`, so\nderiving the matrix is something you ask for when you want to inspect it.\n\n* Validate opt-in Jacobians and repair current CI\n\n* Require Julia 1.13 and resolve coordinated Git sources\n\n* Test Git source revisions without forcing registered releases\n\n* Remove obsolete Julia LTS documentation comment\n\n* Use benchmark source declarations without modifying the project",
          "timestamp": "2026-10-13T10:24:24+02:00",
          "tree_id": "9a18518631828b5c1d335cb9b300015d03e8cfde",
          "url": "https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/commit/45353c5dc6a86df5e7c316e7313395ae8c94c3f9"
        },
        "date": 1791881248238,
        "tool": "julia",
        "benches": [
          {
            "name": "Classification/One Dimensional/Default classifications",
            "value": 1369570,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1317520\nallocs=22498\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Harmonic Equation/One Frequency",
            "value": 193174240,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14141328\nallocs=259502\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 1",
            "value": 238789173.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18913424\nallocs=363670\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 2",
            "value": 1087840846,
            "unit": "ns",
            "extra": "gctime=0\nmemory=338783080\nallocs=6619879\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Problem/HomotopyContinuationProblem",
            "value": 7798715.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=995592\nallocs=24339\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Lab frame/Jacobian Response",
            "value": 796303,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571488\nallocs=7768\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Rotating frame/Jacobian Response",
            "value": 308168.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=305520\nallocs=2133\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Hilbert sorting",
            "value": 141874,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207856\nallocs=3017\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Nearest-neighbor sorting",
            "value": 141112.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207856\nallocs=3017\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Polyhedral homotopy",
            "value": 425092539.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71599040\nallocs=1609835\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Total degree homotopy",
            "value": 265499737,
            "unit": "ns",
            "extra": "gctime=0\nmemory=46838272\nallocs=1068935\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Warm up method",
            "value": 115155701,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33894680\nallocs=786846\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dfb69ad9f426c02c30298192599cafcedf360e35",
          "message": "CompatHelper: bump compat for DocStringExtensions to 0.10, (keep existing compat) (#534)\n\nCo-authored-by: CompatHelper Julia <compathelper_noreply@julialang.org>",
          "timestamp": "2026-10-15T09:38:07+02:00",
          "tree_id": "0cc88fc7fbedd1a8860d3849539481127f902ef0",
          "url": "https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/commit/dfb69ad9f426c02c30298192599cafcedf360e35"
        },
        "date": 1792051065599,
        "tool": "julia",
        "benches": [
          {
            "name": "Classification/One Dimensional/Default classifications",
            "value": 1318313,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1317520\nallocs=22498\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Harmonic Equation/One Frequency",
            "value": 213795112,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14141392\nallocs=259504\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 1",
            "value": 253616697,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18913424\nallocs=363670\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 2",
            "value": 1078108123,
            "unit": "ns",
            "extra": "gctime=0\nmemory=339081224\nallocs=6619891\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Problem/HomotopyContinuationProblem",
            "value": 8171624,
            "unit": "ns",
            "extra": "gctime=0\nmemory=995912\nallocs=24349\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Lab frame/Jacobian Response",
            "value": 830250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571488\nallocs=7768\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Rotating frame/Jacobian Response",
            "value": 307604.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=305520\nallocs=2133\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Hilbert sorting",
            "value": 143188,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207856\nallocs=3017\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Nearest-neighbor sorting",
            "value": 142276,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207856\nallocs=3017\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Polyhedral homotopy",
            "value": 435982705,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71599344\nallocs=1609844\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Total degree homotopy",
            "value": 270580007,
            "unit": "ns",
            "extra": "gctime=0\nmemory=46838560\nallocs=1068944\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Warm up method",
            "value": 118466294,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33898312\nallocs=786855\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
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
          "id": "8b0c2a7479dfea3635ce47e69b8eaeee468298a7",
          "message": "Lower derivative states canonically for ModelingToolkit conversion (#531)",
          "timestamp": "2026-10-17T15:19:37+02:00",
          "tree_id": "84def0c04df478df94900c36f4fe80bb6732287a",
          "url": "https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/commit/8b0c2a7479dfea3635ce47e69b8eaeee468298a7"
        },
        "date": 1792244288946,
        "tool": "julia",
        "benches": [
          {
            "name": "Classification/One Dimensional/Default classifications",
            "value": 1012905,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1317168\nallocs=22498\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Harmonic Equation/One Frequency",
            "value": 148656246,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13682928\nallocs=256839\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 1",
            "value": 193332991,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18522184\nallocs=360839\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 2",
            "value": 718447635.5,
            "unit": "ns",
            "extra": "gctime=32675129.5\nmemory=330180576\nallocs=6566662\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Problem/HomotopyContinuationProblem",
            "value": 5428299,
            "unit": "ns",
            "extra": "gctime=0\nmemory=985192\nallocs=23991\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Lab frame/Jacobian Response",
            "value": 578844,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571840\nallocs=7776\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Rotating frame/Jacobian Response",
            "value": 234174,
            "unit": "ns",
            "extra": "gctime=0\nmemory=305872\nallocs=2141\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Hilbert sorting",
            "value": 122144,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207536\nallocs=3009\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Nearest-neighbor sorting",
            "value": 120432,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207536\nallocs=3009\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Polyhedral homotopy",
            "value": 329938288.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71599328\nallocs=1609844\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Total degree homotopy",
            "value": 209158469,
            "unit": "ns",
            "extra": "gctime=0\nmemory=46838560\nallocs=1068944\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Warm up method",
            "value": 104297769.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33895304\nallocs=786856\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
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
          "id": "c5bda9211e71ec40f67878730ea4d538adc7ef3a",
          "message": "Adapt to the HarmonicKind enum of QuestBase 0.6 (#539)\n\n* Adapt to the HarmonicKind enum of QuestBase 0.6\n\n* Point the sources at the paired refactor/harmonic-kind branches\n\nRevert to main/master once the QuestBase, HarmonicBalance and HarmonicSteadyState\nPRs are merged.\n\n* Source QuestBase from main again, now that QuestBase.jl#97 is merged\n\n* Point the benchmark environment at QuestBase 0.6 and the paired HSS branch",
          "timestamp": "2026-10-19T10:20:20+02:00",
          "tree_id": "53d37d7ecbc112bbfd29bc72647778317e8383ca",
          "url": "https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/commit/c5bda9211e71ec40f67878730ea4d538adc7ef3a"
        },
        "date": 1792399083822,
        "tool": "julia",
        "benches": [
          {
            "name": "Classification/One Dimensional/Default classifications",
            "value": 745022,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1317168\nallocs=22498\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Harmonic Equation/One Frequency",
            "value": 418659,
            "unit": "ns",
            "extra": "gctime=0\nmemory=286048\nallocs=5385\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 1",
            "value": 54644414,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2635256\nallocs=53976\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 2",
            "value": 148587927,
            "unit": "ns",
            "extra": "gctime=0\nmemory=28422960\nallocs=549445\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Problem/HomotopyContinuationProblem",
            "value": 3736729,
            "unit": "ns",
            "extra": "gctime=0\nmemory=929976\nallocs=23197\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Lab frame/Jacobian Response",
            "value": 385072,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571840\nallocs=7776\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Rotating frame/Jacobian Response",
            "value": 175485,
            "unit": "ns",
            "extra": "gctime=0\nmemory=305872\nallocs=2141\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Hilbert sorting",
            "value": 92040,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207536\nallocs=3009\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Nearest-neighbor sorting",
            "value": 90847,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207536\nallocs=3009\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Polyhedral homotopy",
            "value": 242879550,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71549784\nallocs=1609202\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Total degree homotopy",
            "value": 148195124,
            "unit": "ns",
            "extra": "gctime=0\nmemory=46789016\nallocs=1068302\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Warm up method",
            "value": 74684448,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33845360\nallocs=786214\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
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
          "id": "6ab22159a4f956694ce302dab951216a2cb31adf",
          "message": "Average to arbitrary order by Hori-Deprit Lie transforms (#540)\n\n* Average to arbitrary order by Hori-Deprit Lie transforms\n\nget_krylov_equations now accepts any order. The slow flow is computed by\nDeprit's triangle on the Fourier coefficients of the van der Pol field,\nheld as sparse Laurent polynomials with packed exponents, so the\nrecursion only multiplies, adds and differentiates polynomials. Orders 1\nand 2 coincide with the classical Krylov-Bogoliubov expansion.\n\nThe v quadratures are now reflected consistently. The previous\nconvention change was a no-op, so v carried the wrong sign relative to\nthe printed ansatz; the first-order flow now equals that of\nget_harmonic_equations.\n\n* Test the averaged flow against the full ODE\n\nTwo oscillators at ω and 3ω: halving the coupling strength must divide\nthe Floquet error of order N by 2^(N+1) and the fixed-point error by\n2^N, with and without damping. The undamped orbit is even in time, and\nthe damped one fixes the sign of v1. Benchmark order 3 of the parametron.\n\n* Format\n\n* Assign the differentiated variable once, so no closure boxes it\n\nCloses #482.",
          "timestamp": "2026-10-19T10:52:38+02:00",
          "tree_id": "6e8b770edd5fd2e2572b94b980f1d70d1ed76467",
          "url": "https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/commit/6ab22159a4f956694ce302dab951216a2cb31adf"
        },
        "date": 1792401408723,
        "tool": "julia",
        "benches": [
          {
            "name": "Classification/One Dimensional/Default classifications",
            "value": 1277249,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1317168\nallocs=22498\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Harmonic Equation/One Frequency",
            "value": 888395,
            "unit": "ns",
            "extra": "gctime=0\nmemory=285376\nallocs=5343\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 1",
            "value": 75136492,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1691312\nallocs=35306\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 2",
            "value": 86002907.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2330736\nallocs=45385\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Krylov Equation/Order 3",
            "value": 126811570,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5639016\nallocs=78939\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Construction/Problem/HomotopyContinuationProblem",
            "value": 7440511,
            "unit": "ns",
            "extra": "gctime=0\nmemory=926936\nallocs=23017\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Lab frame/Jacobian Response",
            "value": 792071,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571840\nallocs=7776\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Linear response/Rotating frame/Jacobian Response",
            "value": 295519,
            "unit": "ns",
            "extra": "gctime=0\nmemory=305872\nallocs=2141\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Hilbert sorting",
            "value": 141584,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207856\nallocs=3017\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Sorting/One dimensional/Nearest-neighbor sorting",
            "value": 140812,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207856\nallocs=3017\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Polyhedral homotopy",
            "value": 417844097.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71549480\nallocs=1609193\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Total degree homotopy",
            "value": 268963679,
            "unit": "ns",
            "extra": "gctime=0\nmemory=46788728\nallocs=1068293\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          },
          {
            "name": "Steady states/Homotopy Problem/Warm up method",
            "value": 132260918.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33847712\nallocs=786205\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":10,\"time_tolerance\":0.05}"
          }
        ]
      }
    ]
  }
}