import{_ as a,c as n,o as i,ai as p}from"./chunks/framework.BVQLpw5l.js";const l="/HarmonicBalance.jl/dev/assets/krkspss.M3L7NTXG.png",e="/HarmonicBalance.jl/dev/assets/twmepha.DzmbDOy6.png",t="/HarmonicBalance.jl/dev/assets/pmwqegf.DTwW2vP_.png",h="/HarmonicBalance.jl/dev/assets/mvoptvb.b2vaqKWC.png",k="/HarmonicBalance.jl/dev/assets/kkbtxcf.DfAf4TbC.png",b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"examples/harmonic_oscillator_KB_vs_HB.md","filePath":"examples/harmonic_oscillator_KB_vs_HB.md"}'),r={name:"examples/harmonic_oscillator_KB_vs_HB.md"};function E(d,s,c,g,u,y){return i(),n("div",null,s[0]||(s[0]=[p(`<p>Harmonic oscillator: comparison of KB and HB methods</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HarmonicBalance, Plots</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@variables</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ω ω0 F γ t </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">diff_eq </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DifferentialEquation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, t, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ω0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> γ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, t) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> F </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ω </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> t), x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">add_harmonic!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(diff_eq, x, ω)</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">krylov_eq1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> get_krylov_equations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(diff_eq; order</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>A set of 2 harmonic equations</span></span>
<span class="line"><span>Variables: u1(T), v1(T)</span></span>
<span class="line"><span>Parameters: ω, ω0, F, γ</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Harmonic ansatz: </span></span>
<span class="line"><span>x(t) = u1(T)*cos(ωt) + v1(T)*sin(ωt)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Harmonic equations:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-(((1//2)*u1(T)*γ*ω + (1//2)*v1(T)*(ω^2) - (1//2)*v1(T)*(ω0^2)) / ω) ~ Differential(T)(u1(T))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>((1//2)*F + (1//2)*u1(T)*(ω^2) - (1//2)*u1(T)*(ω0^2) - (1//2)*v1(T)*γ*ω) / ω ~ Differential(T)(v1(T))</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">krylov_eq2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> get_krylov_equations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(diff_eq; order</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>A set of 2 harmonic equations</span></span>
<span class="line"><span>Variables: u1(T), v1(T)</span></span>
<span class="line"><span>Parameters: ω, ω0, F, γ</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Harmonic ansatz: </span></span>
<span class="line"><span>x(t) = u1(T)*cos(ωt) + v1(T)*sin(ωt)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Harmonic equations:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>((1//8)*F*γ*(ω^6) - (1//8)*v1(T)*(γ^2)*(ω^7) - (1//8)*v1(T)*(ω^9) + (1//4)*v1(T)*(ω^7)*(ω0^2) - (1//8)*v1(T)*(ω^5)*(ω0^4)) / (ω^8) + (-(1//2)*u1(T)*γ*ω - (1//2)*v1(T)*(ω^2) + (1//2)*v1(T)*(ω0^2)) / ω ~ Differential(T)(u1(T))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>((1//8)*F*(ω^7) - (1//8)*F*(ω^5)*(ω0^2) + (1//8)*u1(T)*(γ^2)*(ω^7) + (1//8)*u1(T)*(ω^9) - (1//4)*u1(T)*(ω^7)*(ω0^2) + (1//8)*u1(T)*(ω^5)*(ω0^4)) / (ω^8) + ((1//2)*F + (1//2)*u1(T)*(ω^2) - (1//2)*u1(T)*(ω0^2) - (1//2)*v1(T)*γ*ω) / ω ~ Differential(T)(v1(T))</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">harmonic_eq </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> get_harmonic_equations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(diff_eq)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">harmonic_eq </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rearrange_standard</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(harmonic_eq)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>A set of 2 harmonic equations</span></span>
<span class="line"><span>Variables: u1(T), v1(T)</span></span>
<span class="line"><span>Parameters: γ, ω, ω0, F</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Harmonic ansatz: </span></span>
<span class="line"><span>x(t) = u1(T)*cos(ωt) + v1(T)*sin(ωt)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Harmonic equations:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(-F + ((2//1)*((2(-F - u1(T)*(ω^2) + u1(T)*(ω0^2) + v1(T)*γ*ω)*ω) / γ - u1(T)*γ*ω - v1(T)*(ω^2) + v1(T)*(ω0^2))*ω) / (((-4//1)*(ω^2)) / γ - γ) - u1(T)*(ω^2) + u1(T)*(ω0^2) + v1(T)*γ*ω) / (-γ) ~ Differential(T)(u1(T))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>((2(-F - u1(T)*(ω^2) + u1(T)*(ω0^2) + v1(T)*γ*ω)*ω) / γ - u1(T)*γ*ω - v1(T)*(ω^2) + v1(T)*(ω0^2)) / (((-4//1)*(ω^2)) / γ - γ) ~ Differential(T)(v1(T))</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">varied </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (ω </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># range of parameter values</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fixed </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (ω0 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, γ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.05</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, F </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># fixed parameters</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result_krylov1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> get_steady_states</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(krylov_eq1, varied, fixed)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result_krylov2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> get_steady_states</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(krylov_eq2, varied, fixed)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result_harmonic </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> get_steady_states</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(harmonic_eq, varied, fixed);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>Solving for 200 parameters...  18%|███▊                 |  ETA: 0:00:03\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 36\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 36\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  28%|█████▊               |  ETA: 0:00:02\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 55\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 55\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  36%|███████▋             |  ETA: 0:00:02\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 73\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 73\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  46%|█████████▌           |  ETA: 0:00:02\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 91\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 91\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  54%|███████████▎         |  ETA: 0:00:02\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 107\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 107\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  62%|█████████████▏       |  ETA: 0:00:01\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 125\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 125\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  72%|███████████████▎     |  ETA: 0:00:01\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 145\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 145\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  82%|█████████████████▏   |  ETA: 0:00:01\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 163\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 163\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  91%|███████████████████▏ |  ETA: 0:00:00\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 182\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 182\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters... 100%|█████████████████████| Time: 0:00:03\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 200\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 200\x1B[K</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Solving for 200 parameters...  15%|███▏                 |  ETA: 0:00:03\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 30\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 30\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  24%|████▉                |  ETA: 0:00:03\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 47\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 47\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  32%|██████▉              |  ETA: 0:00:03\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 65\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 65\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  40%|████████▍            |  ETA: 0:00:02\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 80\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 80\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  47%|█████████▉           |  ETA: 0:00:02\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 94\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 94\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  54%|███████████▍         |  ETA: 0:00:02\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 108\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 108\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  61%|████████████▊        |  ETA: 0:00:02\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 122\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 122\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  68%|██████████████▏      |  ETA: 0:00:01\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 135\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 135\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  76%|████████████████     |  ETA: 0:00:01\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 152\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 152\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  86%|██████████████████   |  ETA: 0:00:01\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 172\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 172\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  99%|████████████████████▉|  ETA: 0:00:00\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 199\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 199\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters... 100%|█████████████████████| Time: 0:00:03\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 200\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 200\x1B[K</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Solving for 200 parameters...  25%|█████▎               |  ETA: 0:00:02\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 50\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 50\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  36%|███████▋             |  ETA: 0:00:02\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 73\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 73\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  45%|█████████▌           |  ETA: 0:00:02\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 90\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 90\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  58%|████████████▏        |  ETA: 0:00:01\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 116\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 116\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  69%|██████████████▌      |  ETA: 0:00:01\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 138\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 138\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  81%|█████████████████    |  ETA: 0:00:01\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 162\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 162\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters...  92%|███████████████████▍ |  ETA: 0:00:00\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 185\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 185\x1B[K</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span>\x1B[A</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>\x1B[K\x1B[A</span></span>
<span class="line"><span>Solving for 200 parameters... 100%|█████████████████████| Time: 0:00:02\x1B[K</span></span>
<span class="line"><span>   # parameters solved: 200\x1B[K</span></span>
<span class="line"><span>       # paths tracked: 200\x1B[K</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result_krylov1; y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;u1^2+v1^2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Krylov 1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result_krylov2; y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;u1^2+v1^2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Krylov 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result_harmonic; y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;u1^2+v1^2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Harmonic&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    layout</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><img src="`+l+`" alt="" width="600px" height="400px"></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result_krylov1; y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;u1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Krylov 1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, legend</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:best</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result_krylov2; y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;u1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Krylov 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, legend</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:best</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result_harmonic; y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;u1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Harmonic&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, legend</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:best</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    layout</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><img src="`+e+`" alt="" width="600px" height="400px"></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result_krylov1; y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;v1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Krylov 1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, legend</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:best</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result_krylov2; y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;v1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Krylov 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, legend</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:best</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result_harmonic; y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;v1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Harmonic&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, legend</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:best</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    layout</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><img src="`+t+`" alt="" width="600px" height="400px"></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    plot_eigenvalues</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result_krylov1, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Krylov 1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ylims</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    plot_eigenvalues</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result_krylov2, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Krylov 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ylims</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    plot_eigenvalues</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result_harmonic, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Harmonic&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ylims</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    layout</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><img src="`+h+`" alt="" width="600px" height="400px"></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    plot_linear_response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        result_krylov1, x, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; Ω_range</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Krylov 1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    plot_linear_response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        result_krylov2, x, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; Ω_range</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Krylov 2&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    plot_linear_response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        result_harmonic, x, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; Ω_range</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Harmonic&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    layout</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    clims</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">250</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><img src="`+k+'" alt="" width="600px" height="400px"></p><hr><p><em>This page was generated using <a href="https://github.com/fredrikekre/Literate.jl" target="_blank" rel="noreferrer">Literate.jl</a>.</em></p>',22)]))}const F=a(r,[["render",E]]);export{b as __pageData,F as default};
