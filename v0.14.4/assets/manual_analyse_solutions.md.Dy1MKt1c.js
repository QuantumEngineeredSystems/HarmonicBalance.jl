import{_ as o,C as p,c as r,o as h,ai as t,j as i,G as n,a as l,w as e}from"./chunks/framework.BcjIxwAR.js";const A=JSON.parse('{"title":"Extracting Solutions","description":"","frontmatter":{},"headers":[],"relativePath":"manual/analyse_solutions.md","filePath":"manual/analyse_solutions.md"}'),c={name:"manual/analyse_solutions.md"},k={class:"jldocstring custom-block",open:""},d={class:"jldocstring custom-block",open:""},u={class:"jldocstring custom-block",open:""},g={class:"jldocstring custom-block",open:""},E={class:"jldocstring custom-block",open:""},y={class:"jldocstring custom-block",open:""},b={class:"jldocstring custom-block",open:""};function m(f,s,_,F,C,B){const a=p("Badge");return h(),r("div",null,[s[30]||(s[30]=t('<h1 id="Extracting-Solutions" tabindex="-1">Extracting Solutions <a class="header-anchor" href="#Extracting-Solutions" aria-label="Permalink to &quot;Extracting Solutions {#Extracting-Solutions}&quot;">​</a></h1><p>After computing the steady-states of the harmonic equations, you&#39;ll want to extract the solutions from the <a href="/HarmonicBalance.jl/v0.14.4/manual/solving_harmonics#HarmonicBalance.Result-manual-solving_harmonics"><code>HarmonicBalance.Result</code></a> struct.</p><h2 id="Basic-Solution-Extraction" tabindex="-1">Basic Solution Extraction <a class="header-anchor" href="#Basic-Solution-Extraction" aria-label="Permalink to &quot;Basic Solution Extraction {#Basic-Solution-Extraction}&quot;">​</a></h2><p>For plotting, you can extract the solutions using the <code>get_solutions</code> function, which parses a string into a symbolic expression, evaluates it for every steady state solution and filters the solutions by the requested class.</p>',4)),i("details",k,[i("summary",null,[s[0]||(s[0]=i("a",{id:"HarmonicBalance.get_solutions-manual-analyse_solutions",href:"#HarmonicBalance.get_solutions-manual-analyse_solutions"},[i("span",{class:"jlbinding"},"HarmonicBalance.get_solutions")],-1)),s[1]||(s[1]=l()),n(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[3]||(s[3]=t(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">get_solutions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    branches</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">branch_count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res), realify</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], not_class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">get_solutions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; branches</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">branch_count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res), class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], not_class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[])</span></span></code></pre></div><p>Extract solution vectors from a <code>Result</code> object based on specified filtering criteria given by the <code>class</code> keywords. The first method allows extracting a specific solution component by name <code>x</code>. The second method returns complete solution vectors.</p><p><strong>Keyword arguments</strong></p><ul><li><p><code>branches=1:branch_count(res)</code>: Range of branches to include in the output</p></li><li><p><code>realify=false</code>: Whether to convert complex solutions to real form</p></li><li><p><code>class=[&quot;physical&quot;, &quot;stable&quot;]</code>: Array of classification labels to include</p></li><li><p><code>not_class=[]</code>: Array of classification labels to exclude</p></li></ul><p><strong>Returns</strong></p><p>Filtered solution vectors matching the specified criteria</p>`,6)),n(a,{type:"info",class:"source-link",text:"source"},{default:e(()=>s[2]||(s[2]=[i("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/1c76c4c64f70bd9bcdfdaa712fc9cf5bf3bbf628/src/transform_solutions.jl#L194-L213",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),i("details",d,[i("summary",null,[s[4]||(s[4]=i("a",{id:"HarmonicBalance.get_single_solution-manual-analyse_solutions",href:"#HarmonicBalance.get_single_solution-manual-analyse_solutions"},[i("span",{class:"jlbinding"},"HarmonicBalance.get_single_solution")],-1)),s[5]||(s[5]=l()),n(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[7]||(s[7]=t(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">get_single_solution</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HarmonicBalance.Result{D, S, P, F}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> F</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FunctionWrappers.FunctionWrapper{Array{S, 2}, Tuple{Array{S, 1}}}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    branch,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    index</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Return an ordered dictionary specifying all variables and parameters of the solution in <code>result</code> on <code>branch</code> at the position <code>index</code>.</p>`,2)),n(a,{type:"info",class:"source-link",text:"source"},{default:e(()=>s[6]||(s[6]=[i("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/1c76c4c64f70bd9bcdfdaa712fc9cf5bf3bbf628/src/transform_solutions.jl#L1",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),s[31]||(s[31]=i("h2",{id:"attractors",tabindex:"-1"},[l("Attractors "),i("a",{class:"header-anchor",href:"#attractors","aria-label":'Permalink to "Attractors"'},"​")],-1)),i("details",u,[i("summary",null,[s[8]||(s[8]=i("a",{id:"HarmonicBalance.attractors-manual-analyse_solutions",href:"#HarmonicBalance.attractors-manual-analyse_solutions"},[i("span",{class:"jlbinding"},"HarmonicBalance.attractors")],-1)),s[9]||(s[9]=l()),n(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[11]||(s[11]=t(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">attractors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Result{D}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, not_class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> D</span></span></code></pre></div><p>Extract attractors from a <a href="/HarmonicBalance.jl/v0.14.4/manual/solving_harmonics#HarmonicBalance.Result-manual-solving_harmonics"><code>Result</code></a> object. Returns an array of dictionaries, where each dictionary maps branch identifier to the attractor. The attractors are filtered by their corresponding class.</p><p><strong>Keyword arguments</strong></p><p>Class selection done by passing <code>String</code> or <code>Vector{String}</code> as kwarg:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class::String       :   only count solutions in this class (&quot;all&quot; --&gt; plot everything)</span></span>
<span class="line"><span>not_class::String   :   do not count solutions in this class</span></span></code></pre></div><p><strong>Returns</strong></p><p><code>Array{Dict,D}</code>: Vector of dictionaries mapping branch indices to points satisfying the stability criteria at each parameter value</p>`,7)),n(a,{type:"info",class:"source-link",text:"source"},{default:e(()=>s[10]||(s[10]=[i("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/1c76c4c64f70bd9bcdfdaa712fc9cf5bf3bbf628/src/Result.jl#L122-L139",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),i("details",g,[i("summary",null,[s[12]||(s[12]=i("a",{id:"HarmonicBalance.phase_diagram-manual-analyse_solutions",href:"#HarmonicBalance.phase_diagram-manual-analyse_solutions"},[i("span",{class:"jlbinding"},"HarmonicBalance.phase_diagram")],-1)),s[13]||(s[13]=l()),n(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[15]||(s[15]=t(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">phase_diagram</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Result{D}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;physical&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, not_class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {D}</span></span></code></pre></div><p>Calculate the phase diagram from a <code>Result</code> object by summing over the number of states at each swept parameters.</p><p><strong>Keyword arguments</strong></p><p>Class selection done by passing <code>String</code> or <code>Vector{String}</code> as kwarg:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class::String       :   only count solutions in this class (&quot;all&quot; --&gt; plot everything)</span></span>
<span class="line"><span>not_class::String   :   do not count solutions in this class</span></span></code></pre></div><p><strong>Returns</strong></p><ul><li>Array{Int64,D}: Sum of states after applying the specified class masks</li></ul>`,7)),n(a,{type:"info",class:"source-link",text:"source"},{default:e(()=>s[14]||(s[14]=[i("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/1c76c4c64f70bd9bcdfdaa712fc9cf5bf3bbf628/src/Result.jl#L92-L106",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),s[32]||(s[32]=i("h2",{id:"classifying-solutions",tabindex:"-1"},[l("classifying solutions "),i("a",{class:"header-anchor",href:"#classifying-solutions","aria-label":'Permalink to "classifying solutions {#classifying-solutions}"'},"​")],-1)),i("details",E,[i("summary",null,[s[16]||(s[16]=i("a",{id:"HarmonicBalance.classify_solutions!-manual-analyse_solutions",href:"#HarmonicBalance.classify_solutions!-manual-analyse_solutions"},[i("span",{class:"jlbinding"},"HarmonicBalance.classify_solutions!")],-1)),s[17]||(s[17]=l()),n(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[19]||(s[19]=t(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">classify_solutions!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HarmonicBalance.Result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    func</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Union{Function, String}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    physical</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Any</span></span></code></pre></div><p>Creates a solution class in <code>res</code> using the function <code>func</code> (parsed into Symbolics.jl input). The new class is labeled with <code>name</code> and stored under <code>res.classes[name]</code>. By default, only physical (real) solutions are classified, and <code>false</code> is returned for the rest. To also classify complex solutions, set <code>physical=false</code>.</p><p><strong>Example</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># solve a previously-defined problem</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> get_steady_states</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(problem, swept_parameters, fixed_parameters)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># classify, store in result.classes[&quot;large_amplitude&quot;]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">classify_solutions!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sqrt(u1^2 + v1^2) &gt; 1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> , </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;large_amplitude&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,4)),n(a,{type:"info",class:"source-link",text:"source"},{default:e(()=>s[18]||(s[18]=[i("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/1c76c4c64f70bd9bcdfdaa712fc9cf5bf3bbf628/src/classification.jl#L1",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),i("details",y,[i("summary",null,[s[20]||(s[20]=i("a",{id:"HarmonicBalance.get_class-manual-analyse_solutions",href:"#HarmonicBalance.get_class-manual-analyse_solutions"},[i("span",{class:"jlbinding"},"HarmonicBalance.get_class")],-1)),s[21]||(s[21]=l()),n(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[24]||(s[24]=t(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">get_class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HarmonicBalance.Result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    branch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Any</span></span></code></pre></div><p>Returns an array of booleans classifying <code>branch</code> in the solutions in <code>res</code> according to <code>class</code>.</p>`,2)),n(a,{type:"info",class:"source-link",text:"source"},{default:e(()=>s[22]||(s[22]=[i("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/1c76c4c64f70bd9bcdfdaa712fc9cf5bf3bbf628/src/classification.jl#L43",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1}),s[25]||(s[25]=t(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">get_class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    soln</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HarmonicBalance.Result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vector</span></span></code></pre></div><p>Returns an array of booleans classifying each branch in the solutions in <code>res</code> according to <code>class</code>.</p>`,2)),n(a,{type:"info",class:"source-link",text:"source"},{default:e(()=>s[23]||(s[23]=[i("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/1c76c4c64f70bd9bcdfdaa712fc9cf5bf3bbf628/src/classification.jl#L53",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),i("details",b,[i("summary",null,[s[26]||(s[26]=i("a",{id:"HarmonicBalance.filter_result!-manual-analyse_solutions",href:"#HarmonicBalance.filter_result!-manual-analyse_solutions"},[i("span",{class:"jlbinding"},"HarmonicBalance.filter_result!")],-1)),s[27]||(s[27]=l()),n(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[29]||(s[29]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">filter_result!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HarmonicBalance.Result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Removes all solution branches from <code>res</code> where NONE of the solution falls into <code>class</code>. Typically used to filter out unphysical solutions to prevent huge file sizes.</p>',2)),n(a,{type:"info",class:"source-link",text:"source"},{default:e(()=>s[28]||(s[28]=[i("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/1c76c4c64f70bd9bcdfdaa712fc9cf5bf3bbf628/src/classification.jl#L190",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})])])}const j=o(c,[["render",m]]);export{A as __pageData,j as default};
