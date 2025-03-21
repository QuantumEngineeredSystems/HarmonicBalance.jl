```@raw html
<script setup lang="ts">
import Gallery from "../components/Gallery.vue";

const beginner = [
  {
    href: "steady_states",
    src: "https://raw.githubusercontent.com//HarmonicBalance.jl/gh-pages/v0.10.2/assets/simple_Duffing/response_single.png",
    caption: "Steady states",
    desc: "How to get the steady states of the harmonic equations."
  },
  {
    href: "classification",
    src: "https://raw.githubusercontent.com//HarmonicBalance.jl/gh-pages/v0.10.2/assets/parametron/2d_phase_diagram.png",
    caption: "Classifying solutions",
    desc: "Learn how to add different types of drives."
  },
  {
    href: "linear_response",
    src: "https://raw.githubusercontent.com//HarmonicBalance.jl/gh-pages/v0.10.2/assets/linear_response/nonlin_F_noise.png",
    caption: "Linear response",
    desc: "Learn how to compute the linear response of a steady state."
  },
  {
    href: "time_dependent",
    src: "https://raw.githubusercontent.com//HarmonicBalance.jl/gh-pages/v0.10.2/assets/time_dependent/evo_to_steady.png",
    caption: "Stroboscopic evolution",
    desc: "Learn how to investigate stroboscopic time evolution."
  },
  {
    href: "limit_cycles",
    src: "https://raw.githubusercontent.com//HarmonicBalance.jl/gh-pages/v0.10.2/assets/limit_cycles/vdp_degenerate.png",
    caption: "Limit cycles",
    desc: "Learn how to find the limit cycles of your system."
  }
];


</script>
```

# [Tutorials](@id tutorials)

We show the capabilities of the package by providing a series of tutorials. Examples of other systems can be found in the [examples](@ref examples) tab.

```@raw html
<Gallery :images="beginner" />
```
