import{_ as h,c as n,j as s,a,a4 as t,o as e}from"./chunks/framework.D3a-l5sU.js";const F=JSON.parse('{"title":"Krylov-Bogoliubov Averaging Method","description":"","frontmatter":{},"headers":[],"relativePath":"manual/Krylov-Bogoliubov_method.md","filePath":"manual/Krylov-Bogoliubov_method.md"}'),l={name:"manual/Krylov-Bogoliubov_method.md"},k={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},p={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.67ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 1622 1000","aria-hidden":"true"};function r(o,i,d,g,E,y){return e(),n("div",null,[i[8]||(i[8]=s("h1",{id:"Krylov-Bogoliubov",tabindex:"-1"},[a("Krylov-Bogoliubov Averaging Method "),s("a",{class:"header-anchor",href:"#Krylov-Bogoliubov","aria-label":'Permalink to "Krylov-Bogoliubov Averaging Method {#Krylov-Bogoliubov}"'},"​")],-1)),s("p",null,[i[2]||(i[2]=a("The Krylov-Bogoliubov averaging method is an alternative high-frequency expansion technique used to analyze dynamical systems. Unlike the ")),i[3]||(i[3]=s("a",{href:"https://en.wikipedia.org/wiki/Harmonic_balance",target:"_blank",rel:"noreferrer"},"Harmonic Balance method",-1)),i[4]||(i[4]=a(", which is detailed in the ")),i[5]||(i[5]=s("a",{href:"/HarmonicBalance.jl/v0.10.7/background/harmonic_balance#intro_hb"},"background section",-1)),i[6]||(i[6]=a(", the Krylov-Bogoliubov method excels in computing higher orders in ")),s("mjx-container",k,[(e(),n("svg",p,i[0]||(i[0]=[t('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(500,0)"><g data-mml-node="mo"><path data-c="2F" d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mi" transform="translate(1000,0)"><path data-c="1D714" d="M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z" style="stroke-width:3;"></path></g></g></g>',1)]))),i[1]||(i[1]=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mn",null,"1"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mo",null,"/")]),s("mi",null,"ω")])],-1))]),i[7]||(i[7]=a(", enabling the capture of faster dynamics within a system."))]),i[9]||(i[9]=t(`<h2 id="Purpose-and-Advantages" tabindex="-1">Purpose and Advantages <a class="header-anchor" href="#Purpose-and-Advantages" aria-label="Permalink to &quot;Purpose and Advantages {#Purpose-and-Advantages}&quot;">​</a></h2><p>The primary advantage of the Krylov-Bogoliubov method lies in its ability to delve deeper into high-frequency components, allowing a more comprehensive understanding of fast dynamical behaviors. By leveraging this technique, one can obtain higher-order approximations that shed light on intricate system dynamics.</p><p>However, it&#39;s essential to note a limitation: this method cannot handle multiple harmonics within a single variable, unlike some other high-frequency expansion methods.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>To compute the Krylov-Bogoliubov averaging method within your system, utilize the function <code>get_krylov_equations</code>. This function is designed specifically to implement the methodology and derive the equations necessary to analyze the system dynamics using this technique.</p><h3 id="Function-Reference" tabindex="-1">Function Reference <a class="header-anchor" href="#Function-Reference" aria-label="Permalink to &quot;Function Reference {#Function-Reference}&quot;">​</a></h3><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="HarmonicBalance.KrylovBogoliubov.get_krylov_equations" href="#HarmonicBalance.KrylovBogoliubov.get_krylov_equations">#</a> <b><u>HarmonicBalance.KrylovBogoliubov.get_krylov_equations</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">get_krylov_equations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    diff_eom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DifferentialEquation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    order,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fast_time,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    slow_time</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Apply the Krylov-Bogoliubov averaging method to a specific <code>order</code> to obtain a set of ODEs (the slow-flow equations) governing the harmonics of <code>diff_eom</code>.</p><p>The harmonics evolve in <code>slow_time</code>, the oscillating terms themselves in <code>fast_time</code>. If no input is used, a variable T is defined for <code>slow_time</code> and <code>fast_time</code> is taken as the independent variable of <code>diff_eom</code>.</p><p>Krylov-Bogoliubov averaging method can be applied up to <code>order = 2</code>.</p><p><strong>Example</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @variables</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> t, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t), ω0, ω, F;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># enter the simple harmonic oscillator</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> diff_eom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DifferentialEquation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x,t,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ω0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> F </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ω</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t), x);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># expand x in the harmonic ω</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> add_harmonic!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(diff_eom, x, ω);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># get equations for the harmonics evolving in the slow time T to first order</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> harmonic_eom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> get_krylov_equations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(diff_eom, order </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A set of </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> harmonic equations</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Variables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> u1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">v1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Parameters</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ω, F, ω0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Harmonic ansatz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xˍt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> u1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ωt) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> v1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ωt)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Harmonic equations</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ω</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">v1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ω0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">v1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ω </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Differential</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T)(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">u1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ω0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">u1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ω</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">u1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ω </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Differential</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T)(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">v1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(T))</span></span></code></pre></div><p><a href="https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/dba5ed290097461f4c8cc00a628206e6ee09b3bd/src/modules/KrylovBogoliubov/KrylovEquation.jl#L4" target="_blank" rel="noreferrer">source</a></p></div><br><p>For further information and a detailed understanding of this method, refer to <a href="https://en.wikipedia.org/wiki/Krylov%E2%80%93Bogoliubov_averaging_method" target="_blank" rel="noreferrer">Krylov-Bogoliubov averaging method on Wikipedia</a>.</p>`,9))])}const m=h(l,[["render",r]]);export{F as __pageData,m as default};
