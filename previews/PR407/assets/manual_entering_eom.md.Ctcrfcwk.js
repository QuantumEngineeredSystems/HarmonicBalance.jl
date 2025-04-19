import{_ as h,C as k,c as p,o as r,j as s,a as n,G as t,w as l,ai as e}from"./chunks/framework.CMQArGGu.js";const A=JSON.parse('{"title":"Entering equations of motion","description":"","frontmatter":{},"headers":[],"relativePath":"manual/entering_eom.md","filePath":"manual/entering_eom.md"}'),d={name:"manual/entering_eom.md"},o={class:"jldocstring custom-block",open:""},E={class:"jldocstring custom-block",open:""},g={class:"jldocstring custom-block",open:""},y={class:"jldocstring custom-block",open:""},c={class:"jldocstring custom-block",open:""};function u(F,i,m,f,C,b){const a=k("Badge");return r(),p("div",null,[i[20]||(i[20]=s("h1",{id:"Entering-equations-of-motion",tabindex:"-1"},[n("Entering equations of motion "),s("a",{class:"header-anchor",href:"#Entering-equations-of-motion","aria-label":'Permalink to "Entering equations of motion {#Entering-equations-of-motion}"'},"​")],-1)),i[21]||(i[21]=s("p",null,[n("The struct "),s("code",null,"DifferentialEquation"),n(" is the primary input method; it holds an ODE or a coupled system of ODEs composed of terms with harmonic time-dependence The dependent variables are specified during input, any other symbols are identified as parameters. Information on which variable is to be expanded in which harmonic is specified using "),s("code",null,"add_harmonic!"),n(".")],-1)),i[22]||(i[22]=s("p",null,[s("code",null,"DifferentialEquation.equations"),n(" stores a dictionary assigning variables to equations. This information is necessary because the harmonics belonging to a variable are later used to Fourier-transform its corresponding ODE.")],-1)),s("details",o,[s("summary",null,[i[0]||(i[0]=s("a",{id:"HarmonicBalance.d-manual-entering_eom",href:"#HarmonicBalance.d-manual-entering_eom"},[s("span",{class:"jlbinding"},"HarmonicBalance.d")],-1)),i[1]||(i[1]=n()),t(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),i[3]||(i[3]=s("p",null,"The derivative of f w.r.t. x of degree deg",-1)),t(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>i[2]||(i[2]=[s("a",{href:"https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/1a3db2ca2f4c3c10792f729693373e01acd96db9/src/HarmonicVariable.jl#L108",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),s("details",E,[s("summary",null,[i[4]||(i[4]=s("a",{id:"HarmonicBalance.DifferentialEquation-manual-entering_eom",href:"#HarmonicBalance.DifferentialEquation-manual-entering_eom"},[s("span",{class:"jlbinding"},"HarmonicBalance.DifferentialEquation")],-1)),i[5]||(i[5]=n()),t(a,{type:"info",class:"jlObjectType jlType",text:"Type"})]),i[7]||(i[7]=e(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">mutable struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DifferentialEquation</span></span></code></pre></div><p>Holds differential equation(s) of motion and a set of harmonics to expand each variable. This is the primary input for <code>HarmonicBalance.jl</code>. After inputting the equations, the harmonics ansatz needs to be specified using <code>add_harmonic!</code>.</p><p><strong>Fields</strong></p><ul><li><p><code>equations::OrderedCollections.OrderedDict{Num, Equation}</code>: Assigns to each variable an equation of motion.</p></li><li><p><code>harmonics::OrderedCollections.OrderedDict{Num, OrderedCollections.OrderedSet{Num}}</code>: Assigns to each variable a set of harmonics.</p></li></ul><p><strong>Example</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @variables</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> t, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t), ω0, ω, F, k;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># equivalent ways to enter the simple harmonic oscillator</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DifferentialEquation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x,t,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ω0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> F </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ω</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t), x);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DifferentialEquation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x,t,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ω0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> F </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ω</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t), x);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># two coupled oscillators, one of them driven</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DifferentialEquation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x,t,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ω0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> k</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(y,t,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ω0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> k</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [F </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ω</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], [x,y]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,6)),t(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>i[6]||(i[6]=[s("a",{href:"https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/1a3db2ca2f4c3c10792f729693373e01acd96db9/src/DifferentialEquation.jl#L1",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),s("details",g,[s("summary",null,[i[8]||(i[8]=s("a",{id:"HarmonicBalance.add_harmonic!-manual-entering_eom",href:"#HarmonicBalance.add_harmonic!-manual-entering_eom"},[s("span",{class:"jlbinding"},"HarmonicBalance.add_harmonic!")],-1)),i[9]||(i[9]=n()),t(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),i[11]||(i[11]=e(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">add_harmonic!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(diff_eom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DifferentialEquation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, var</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Num</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ω)</span></span></code></pre></div><p>Add the harmonic <code>ω</code> to the harmonic ansatz used to expand the variable <code>var</code> in <code>diff_eom</code>.</p><p><strong>Example</strong></p><p><strong>define the simple harmonic oscillator and specify that x(t) oscillates with frequency ω</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @variables</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> t, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t), ω0, ω, F, k;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> diff_eq </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DifferentialEquation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x,t,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ω0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> F </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ω</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t), x);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> add_harmonic!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(diff_eq, x, ω) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># expand x using ω</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System of </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> differential equations</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Variables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Harmonic ansatz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ω;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ω0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Differential</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t)(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Differential</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t)(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t))) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> F</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ω)</span></span></code></pre></div>`,5)),t(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>i[10]||(i[10]=[s("a",{href:"https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/1a3db2ca2f4c3c10792f729693373e01acd96db9/src/DifferentialEquation.jl#L88",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),s("details",y,[s("summary",null,[i[12]||(i[12]=s("a",{id:"Symbolics.get_variables-Tuple{DifferentialEquation}-manual-entering_eom",href:"#Symbolics.get_variables-Tuple{DifferentialEquation}-manual-entering_eom"},[s("span",{class:"jlbinding"},"Symbolics.get_variables")],-1)),i[13]||(i[13]=n()),t(a,{type:"info",class:"jlObjectType jlMethod",text:"Method"})]),i[15]||(i[15]=e('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">get_variables</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(diff_eom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DifferentialEquation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vector{Num}</span></span></code></pre></div><p>Return the dependent variables of <code>diff_eom</code>.</p>',2)),t(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>i[14]||(i[14]=[s("a",{href:"https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/1a3db2ca2f4c3c10792f729693373e01acd96db9/src/DifferentialEquation.jl#L113",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),s("details",c,[s("summary",null,[i[16]||(i[16]=s("a",{id:"HarmonicBalance.get_independent_variables-Tuple{DifferentialEquation}-manual-entering_eom",href:"#HarmonicBalance.get_independent_variables-Tuple{DifferentialEquation}-manual-entering_eom"},[s("span",{class:"jlbinding"},"HarmonicBalance.get_independent_variables")],-1)),i[17]||(i[17]=n()),t(a,{type:"info",class:"jlObjectType jlMethod",text:"Method"})]),i[19]||(i[19]=e(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">get_independent_variables</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    diff_eom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DifferentialEquation</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Any</span></span></code></pre></div><p>Return the independent dependent variables of <code>diff_eom</code>.</p>`,2)),t(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>i[18]||(i[18]=[s("a",{href:"https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/1a3db2ca2f4c3c10792f729693373e01acd96db9/src/DifferentialEquation.jl#L131",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})])])}const _=h(d,[["render",u]]);export{A as __pageData,_ as default};
