import{_ as n,c as l,a5 as e,j as i,a,G as o,B as r,o as c}from"./chunks/framework.fPm9F4bo.js";const v=JSON.parse('{"title":"Solving harmonic equations","description":"","frontmatter":{},"headers":[],"relativePath":"manual/solving_harmonics.md","filePath":"manual/solving_harmonics.md"}'),p={name:"manual/solving_harmonics.md"},h={class:"jldocstring custom-block",open:""},d={class:"jldocstring custom-block",open:""},u={class:"jldocstring custom-block",open:""};function k(g,s,m,y,b,f){const t=r("Badge");return c(),l("div",null,[s[9]||(s[9]=e('<h1 id="Solving-harmonic-equations" tabindex="-1">Solving harmonic equations <a class="header-anchor" href="#Solving-harmonic-equations" aria-label="Permalink to &quot;Solving harmonic equations {#Solving-harmonic-equations}&quot;">​</a></h1><p>Once a differential equation of motion has been defined in <code>DifferentialEquation</code> and converted to a <code>HarmonicEquation</code>, we may use the homotopy continuation method (as implemented in HomotopyContinuation.jl) to find steady states. This means that, having called <code>get_harmonic_equations</code>, we need to set all time-derivatives to zero and parse the resulting algebraic equations into a <code>Problem</code>.</p><p><code>Problem</code> holds the steady-state equations, and (optionally) the symbolic Jacobian which is needed for stability / linear response calculations.</p><p>Once defined, a <code>Problem</code> can be solved for a set of input parameters using <code>get_steady_states</code> to obtain <code>Result</code>.</p>',4)),i("details",h,[i("summary",null,[s[0]||(s[0]=i("a",{id:"HarmonicBalance.Problem",href:"#HarmonicBalance.Problem"},[i("span",{class:"jlbinding"},"HarmonicBalance.Problem")],-1)),s[1]||(s[1]=a()),o(t,{type:"info",class:"jlObjectType jlType",text:"Type"})]),s[2]||(s[2]=e(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">mutable struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Problem{F}</span></span></code></pre></div><p>Holds a set of algebraic equations describing the steady state of a system.</p><p><strong>Fields</strong></p><ul><li><p><code>variables::Vector{Num}</code>: The harmonic variables to be solved for.</p></li><li><p><code>parameters::Vector{Num}</code>: All symbols which are not the harmonic variables.</p></li><li><p><code>system::HomotopyContinuation.ModelKit.System</code>: The input object for HomotopyContinuation.jl solver methods.</p></li><li><p><code>jacobian::Any</code>: The Jacobian matrix (possibly symbolic). If <code>false</code>, the Jacobian is ignored (may be calculated implicitly after solving).</p></li><li><p><code>eom::HarmonicEquation</code>: The HarmonicEquation object used to generate this <code>Problem</code>.</p></li></ul><p><strong>Constructors</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Problem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(eom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HarmonicEquation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; Jacobian</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># find and store the symbolic Jacobian</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Problem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(eom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HarmonicEquation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; Jacobian</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ignore the Jacobian</span></span></code></pre></div><p><a href="https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/ab10c6561a85e9460f9933831e9af5e83f423430/src/Problem.jl#L2" target="_blank" rel="noreferrer">source</a></p>`,7))]),s[10]||(s[10]=i("div",{class:"warning custom-block"},[i("p",{class:"custom-block-title"},"Missing docstring."),i("p",null,[a("Missing docstring for "),i("code",null,"get_steady_states"),a(". Check Documenter's build log for details.")])],-1)),i("details",d,[i("summary",null,[s[3]||(s[3]=i("a",{id:"HarmonicBalance.Result",href:"#HarmonicBalance.Result"},[i("span",{class:"jlbinding"},"HarmonicBalance.Result")],-1)),s[4]||(s[4]=a()),o(t,{type:"info",class:"jlObjectType jlType",text:"Type"})]),s[5]||(s[5]=e('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Result{SolType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ParType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, D, F</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FunctionWrappers.FunctionWrapper{Array{SolType&lt;:Number, 2}, Tuple{Array{SolType&lt;:Number, 1}}}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, F1}</span></span></code></pre></div><p>Stores the steady states of a HarmonicEquation.</p><p><strong>Fields</strong></p><ul><li><p><code>solutions::Array{Array{Vector{SolType}, 1}} where SolType&lt;:Number</code>: The variable values of steady-state solutions.</p></li><li><p><code>swept_parameters::OrderedCollections.OrderedDict{Num, Vector{ParType}} where ParType&lt;:Number</code>: Values of all parameters for all solutions.</p></li><li><p><code>fixed_parameters::OrderedCollections.OrderedDict{Num, ParType} where ParType&lt;:Number</code>: The parameters fixed throughout the solutions.</p></li><li><p><code>problem::HarmonicBalance.Problem</code>: The <code>Problem</code> used to generate this.</p></li><li><p><code>classes::Dict{String, Array{BitVector, D}} where D</code>: Maps strings such as &quot;stable&quot;, &quot;physical&quot; etc to arrays of values, classifying the solutions (see method <code>classify_solutions!</code>).</p></li><li><p><code>binary_labels::Array{Int64}</code>: Create binary classification of the solutions, such that each solution point receives an identifier based on its permutation of stable branches (allows to distinguish between different phases, which may have the same number of stable solutions). It works by converting each bitstring <code>[is_stable(solution_1), is_stable(solution_2), ...,]</code> into unique labels.</p></li><li><p><code>jacobian::FunctionWrappers.FunctionWrapper{Matrix{SolType}, Tuple{Vector{SolType}}} where SolType&lt;:Number</code>: The Jacobian function with <code>fixed_parameters</code> already substituted. Accepts a vector specifying the solution. If problem.jacobian is a symbolic matrix, this holds a compiled function.</p></li><li><p><code>seed::UInt32</code>: Seed used for the solver</p></li></ul><p><a href="https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/ab10c6561a85e9460f9933831e9af5e83f423430/src/Result.jl#L1" target="_blank" rel="noreferrer">source</a></p>',5))]),s[11]||(s[11]=e('<h2 id="Classifying-solutions" tabindex="-1">Classifying solutions <a class="header-anchor" href="#Classifying-solutions" aria-label="Permalink to &quot;Classifying solutions {#Classifying-solutions}&quot;">​</a></h2><p>The solutions in <code>Result</code> are accompanied by similarly-sized boolean arrays stored in the dictionary <code>Result.classes</code>. The classes can be used by the plotting functions to show/hide/label certain solutions.</p><p>By default, classes &quot;physical&quot;, &quot;stable&quot; and &quot;binary_labels&quot; are created. User-defined classification is possible with <code>classify_solutions!</code>.</p><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>HarmonicBalance.classify_solutions!</code>. Check Documenter&#39;s build log for details.</p></div><h2 id="Sorting-solutions" tabindex="-1">Sorting solutions <a class="header-anchor" href="#Sorting-solutions" aria-label="Permalink to &quot;Sorting solutions {#Sorting-solutions}&quot;">​</a></h2><p>Solving a steady-state problem over a range of parameters returns a solution set for each parameter. For a continuous change of parameters, each solution in a set usually also changes continuously; it is said to form a &#39;&#39;solution branch&#39;&#39;. For an example, see the three colour-coded branches for the Duffing oscillator in Example 1.</p><p>For stable states, the branches describe a system&#39;s behaviour under adiabatic parameter changes.</p><p>Therefore, after solving for a parameter range, we want to order each solution set such that the solutions&#39; order reflects the branches.</p><p>The function <code>sort_solutions</code> goes over the the raw output of <code>get_steady_states</code> and sorts each entry such that neighboring solution sets minimize Euclidean distance.</p><p>Currently, <code>sort_solutions</code> is compatible with 1D and 2D arrays of solution sets.</p>',10)),i("details",u,[i("summary",null,[s[6]||(s[6]=i("a",{id:"HarmonicBalance.sort_solutions",href:"#HarmonicBalance.sort_solutions"},[i("span",{class:"jlbinding"},"HarmonicBalance.sort_solutions")],-1)),s[7]||(s[7]=a()),o(t,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[8]||(s[8]=e(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sort_solutions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    solutions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Union</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{Array{Array{Array{T, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, Array{Array{Array{T, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sorting,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    show_progress</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Any</span></span></code></pre></div><p>Sorts <code>solutions</code> into branches according to the specified <code>sorting</code> method.</p><p><code>solutions</code> is an n-dimensional array of <code>Vector{Vector}</code>. Each element describes a set of solutions for a given parameter set. The output is a similar array, with each solution set rearranged such that neighboring solution sets have the smallest Euclidean distance.</p><p>The <code>sorting</code> keyword argument specifies the method used to get continuous solution branches. Options are <code>&quot;hilbert&quot;</code> (1D sorting along a Hilbert curve), <code>&quot;nearest&quot;</code> (nearest-neighbor sorting), and <code>&quot;none&quot;</code>. The <code>show_progress</code> keyword argument indicates whether a progress bar should be displayed.</p><p><a href="https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/ab10c6561a85e9460f9933831e9af5e83f423430/src/sorting.jl#L1-L13" target="_blank" rel="noreferrer">source</a></p>`,5))])])}const F=n(p,[["render",k]]);export{v as __pageData,F as default};
