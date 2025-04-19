import{_ as r,c as s,a4 as i,j as a,a as t,o as n}from"./chunks/framework.D3a-l5sU.js";const x=JSON.parse('{"title":"Linear response (WIP)","description":"","frontmatter":{},"headers":[],"relativePath":"manual/linear_response.md","filePath":"manual/linear_response.md"}'),o={name:"manual/linear_response.md"},l={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},p={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.027ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.319ex",height:"1.597ex",role:"img",focusable:"false",viewBox:"0 -694 583 706","aria-hidden":"true"},d={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},h={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.247ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2319 1000","aria-hidden":"true"},c={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.278ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2333 1000","aria-hidden":"true"};function m(g,e,b,u,y,f){return n(),s("div",null,[e[10]||(e[10]=i('<h1 id="linresp_man" tabindex="-1">Linear response (WIP) <a class="header-anchor" href="#linresp_man" aria-label="Permalink to &quot;Linear response (WIP) {#linresp_man}&quot;">​</a></h1><p>This module currently has two goals. One is calculating the first-order Jacobian, used to obtain stability and approximate (but inexpensive) the linear response of steady states. The other is calculating the full response matrix as a function of frequency; this is more accurate but more expensive.</p><p>The methodology used is explained in <a href="https://www.doi.org/10.3929/ethz-b-000589190" target="_blank" rel="noreferrer">Jan Kosata phd thesis</a>.</p><h2 id="stability" tabindex="-1">Stability <a class="header-anchor" href="#stability" aria-label="Permalink to &quot;Stability&quot;">​</a></h2><p>The Jacobian is used to evaluate stability of the solutions. It can be shown explicitly,</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="HarmonicBalance.LinearResponse.get_Jacobian" href="#HarmonicBalance.LinearResponse.get_Jacobian">#</a> <b><u>HarmonicBalance.LinearResponse.get_Jacobian</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">get_Jacobian</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(eom)</span></span></code></pre></div><p>Obtain the symbolic Jacobian matrix of <code>eom</code> (either a <code>HarmonicEquation</code> or a <code>DifferentialEquation</code>). This is the linearised left-hand side of F(u) = du/dT.</p><p><a href="https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/dba5ed290097461f4c8cc00a628206e6ee09b3bd/src/modules/LinearResponse/jacobians.jl#L7" target="_blank" rel="noreferrer">source</a></p><p>Obtain a Jacobian from a <code>DifferentialEquation</code> by first converting it into a <code>HarmonicEquation</code>.</p><p><a href="https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/dba5ed290097461f4c8cc00a628206e6ee09b3bd/src/modules/LinearResponse/jacobians.jl#L22" target="_blank" rel="noreferrer">source</a></p><p>Get the Jacobian of a set of equations <code>eqs</code> with respect to the variables <code>vars</code>.</p><p><a href="https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/dba5ed290097461f4c8cc00a628206e6ee09b3bd/src/modules/LinearResponse/jacobians.jl#L31" target="_blank" rel="noreferrer">source</a></p></div><br><h2 id="Linear-response" tabindex="-1">Linear response <a class="header-anchor" href="#Linear-response" aria-label="Permalink to &quot;Linear response {#Linear-response}&quot;">​</a></h2><p>The response to white noise can be shown with <code>plot_linear_response</code>. Depending on the <code>order</code> argument, different methods are used.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="HarmonicBalance.LinearResponse.plot_linear_response" href="#HarmonicBalance.LinearResponse.plot_linear_response">#</a> <b><u>HarmonicBalance.LinearResponse.plot_linear_response</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">plot_linear_response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, nat_var</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Num</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; Ω_range, branch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, order</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, logscale</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, show_progress</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, kwargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Plot the linear response to white noise of the variable <code>nat_var</code> for Result <code>res</code> on <code>branch</code> for input frequencies <code>Ω_range</code>. Slow-time derivatives up to <code>order</code> are kept in the process.</p><p>Any kwargs are fed to Plots&#39; gr().</p><p>Solutions not belonging to the <code>physical</code> class are ignored.</p><p><a href="https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/dba5ed290097461f4c8cc00a628206e6ee09b3bd/src/modules/LinearResponse/plotting.jl#L120-L129" target="_blank" rel="noreferrer">source</a></p></div><br><h3 id="First-order" tabindex="-1">First order <a class="header-anchor" href="#First-order" aria-label="Permalink to &quot;First order {#First-order}&quot;">​</a></h3>',12)),a("p",null,[e[6]||(e[6]=t("The simplest way to extract the linear response of a steady state is to evaluate the Jacobian of the harmonic equations. Each of its eigenvalues ")),a("mjx-container",l,[(n(),s("svg",p,e[0]||(e[0]=[a("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[a("g",{"data-mml-node":"math"},[a("g",{"data-mml-node":"mi"},[a("path",{"data-c":"1D706",d:"M166 673Q166 685 183 694H202Q292 691 316 644Q322 629 373 486T474 207T524 67Q531 47 537 34T546 15T551 6T555 2T556 -2T550 -11H482Q457 3 450 18T399 152L354 277L340 262Q327 246 293 207T236 141Q211 112 174 69Q123 9 111 -1T83 -12Q47 -12 47 20Q47 37 61 52T199 187Q229 216 266 252T321 306L338 322Q338 323 288 462T234 612Q214 657 183 657Q166 657 166 673Z",style:{"stroke-width":"3"}})])])],-1)]))),e[1]||(e[1]=a("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"λ")])],-1))]),e[7]||(e[7]=t(" describes a Lorentzian peak in the response; ")),a("mjx-container",d,[(n(),s("svg",h,e[2]||(e[2]=[i('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtext"><path data-c="52" d="M130 622Q123 629 119 631T103 634T60 637H27V683H202H236H300Q376 683 417 677T500 648Q595 600 609 517Q610 512 610 501Q610 468 594 439T556 392T511 361T472 343L456 338Q459 335 467 332Q497 316 516 298T545 254T559 211T568 155T578 94Q588 46 602 31T640 16H645Q660 16 674 32T692 87Q692 98 696 101T712 105T728 103T732 90Q732 59 716 27T672 -16Q656 -22 630 -22Q481 -16 458 90Q456 101 456 163T449 246Q430 304 373 320L363 322L297 323H231V192L232 61Q238 51 249 49T301 46H334V0H323Q302 3 181 3Q59 3 38 0H27V46H60Q102 47 111 49T130 61V622ZM491 499V509Q491 527 490 539T481 570T462 601T424 623T362 636Q360 636 340 636T304 637H283Q238 637 234 628Q231 624 231 492V360H289Q390 360 434 378T489 456Q491 467 491 499Z" style="stroke-width:3;"></path><path data-c="65" d="M28 218Q28 273 48 318T98 391T163 433T229 448Q282 448 320 430T378 380T406 316T415 245Q415 238 408 231H126V216Q126 68 226 36Q246 30 270 30Q312 30 342 62Q359 79 369 104L379 128Q382 131 395 131H398Q415 131 415 121Q415 117 412 108Q393 53 349 21T250 -11Q155 -11 92 58T28 218ZM333 275Q322 403 238 411H236Q228 411 220 410T195 402T166 381T143 340T127 274V267H333V275Z" transform="translate(736,0)" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1180,0)"><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1458,0)"><path data-c="1D706" d="M166 673Q166 685 183 694H202Q292 691 316 644Q322 629 373 486T474 207T524 67Q531 47 537 34T546 15T551 6T555 2T556 -2T550 -11H482Q457 3 450 18T399 152L354 277L340 262Q327 246 293 207T236 141Q211 112 174 69Q123 9 111 -1T83 -12Q47 -12 47 20Q47 37 61 52T199 187Q229 216 266 252T321 306L338 322Q338 323 288 462T234 612Q214 657 183 657Q166 657 166 673Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2041,0)"><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="stroke-width:3;"></path></g></g></g>',1)]))),e[3]||(e[3]=a("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mtext",null,"Re"),a("mo",{stretchy:"false"},"["),a("mi",null,"λ"),a("mo",{stretchy:"false"},"]")])],-1))]),e[8]||(e[8]=t(" gives its center and ")),a("mjx-container",c,[(n(),s("svg",k,e[4]||(e[4]=[i('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtext"><path data-c="49" d="M328 0Q307 3 180 3T32 0H21V46H43Q92 46 106 49T126 60Q128 63 128 342Q128 620 126 623Q122 628 118 630T96 635T43 637H21V683H32Q53 680 180 680T328 683H339V637H317Q268 637 254 634T234 623Q232 620 232 342Q232 63 234 60Q238 55 242 53T264 48T317 46H339V0H328Z" style="stroke-width:3;"></path><path data-c="6D" d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z" transform="translate(361,0)" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1194,0)"><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1472,0)"><path data-c="1D706" d="M166 673Q166 685 183 694H202Q292 691 316 644Q322 629 373 486T474 207T524 67Q531 47 537 34T546 15T551 6T555 2T556 -2T550 -11H482Q457 3 450 18T399 152L354 277L340 262Q327 246 293 207T236 141Q211 112 174 69Q123 9 111 -1T83 -12Q47 -12 47 20Q47 37 61 52T199 187Q229 216 266 252T321 306L338 322Q338 323 288 462T234 612Q214 657 183 657Q166 657 166 673Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2055,0)"><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="stroke-width:3;"></path></g></g></g>',1)]))),e[5]||(e[5]=a("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mtext",null,"Im"),a("mo",{stretchy:"false"},"["),a("mi",null,"λ"),a("mo",{stretchy:"false"},"]")])],-1))]),e[9]||(e[9]=t(" its width. Transforming the harmonic variables into the non-rotating frame (that is, inverting the harmonic ansatz) then gives the response as it would be observed in an experiment."))]),e[11]||(e[11]=i(`<p>The advantage of this method is that for a given parameter set, only one matrix diagonalization is needed to fully describe the response spectrum. However, the method is inaccurate for response frequencies far from the frequencies used in the harmonic ansatz (it relies on the response oscillating slowly in the rotating frame).</p><p>Behind the scenes, the spectra are stored using the dedicated structs <code>Lorentzian</code> and <code>JacobianSpectrum</code>.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="HarmonicBalance.LinearResponse.JacobianSpectrum" href="#HarmonicBalance.LinearResponse.JacobianSpectrum">#</a> <b><u>HarmonicBalance.LinearResponse.JacobianSpectrum</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">mutable struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> JacobianSpectrum</span></span></code></pre></div><p>Holds a set of <code>Lorentzian</code> objects belonging to a variable.</p><p><strong>Fields</strong></p><ul><li><code>peaks::Vector{HarmonicBalance.LinearResponse.Lorentzian}</code></li></ul><p><strong>Constructor</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JacobianSpectrum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; index</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, branch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><a href="https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/dba5ed290097461f4c8cc00a628206e6ee09b3bd/src/modules/LinearResponse/types.jl#L18" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="HarmonicBalance.LinearResponse.Lorentzian" href="#HarmonicBalance.LinearResponse.Lorentzian">#</a> <b><u>HarmonicBalance.LinearResponse.Lorentzian</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Lorentzian</span></span></code></pre></div><p>Holds the three parameters of a Lorentzian peak, defined as A / sqrt((ω-ω0)² + Γ²).</p><p><strong>Fields</strong></p><ul><li><p><code>ω0::Float64</code></p></li><li><p><code>Γ::Float64</code></p></li><li><p><code>A::Float64</code></p></li></ul><p><a href="https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/dba5ed290097461f4c8cc00a628206e6ee09b3bd/src/modules/LinearResponse/types.jl#L1" target="_blank" rel="noreferrer">source</a></p></div><br><h3 id="Higher-orders" tabindex="-1">Higher orders <a class="header-anchor" href="#Higher-orders" aria-label="Permalink to &quot;Higher orders {#Higher-orders}&quot;">​</a></h3><p>Setting <code>order &gt; 1</code> increases the accuracy of the response spectra. However, unlike for the Jacobian, here we must perform a matrix inversion for each response frequency.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="HarmonicBalance.LinearResponse.ResponseMatrix" href="#HarmonicBalance.LinearResponse.ResponseMatrix">#</a> <b><u>HarmonicBalance.LinearResponse.ResponseMatrix</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ResponseMatrix</span></span></code></pre></div><p>Holds the compiled response matrix of a system.</p><p><strong>Fields</strong></p><ul><li><p><code>matrix::Matrix{Function}</code>: The response matrix (compiled).</p></li><li><p><code>symbols::Vector{Num}</code>: Any symbolic variables in <code>matrix</code> to be substituted at evaluation.</p></li><li><p><code>variables::Vector{HarmonicVariable}</code>: The frequencies of the harmonic variables underlying <code>matrix</code>. These are needed to transform the harmonic variables to the non-rotating frame.</p></li></ul><p><a href="https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/dba5ed290097461f4c8cc00a628206e6ee09b3bd/src/modules/LinearResponse/types.jl#L36" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="HarmonicBalance.LinearResponse.get_response" href="#HarmonicBalance.LinearResponse.get_response">#</a> <b><u>HarmonicBalance.LinearResponse.get_response</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">get_response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rmat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HarmonicBalance.LinearResponse.ResponseMatrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OrderedCollections.OrderedDict{Num, ComplexF64}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Ω</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Any</span></span></code></pre></div><p>For <code>rmat</code> and a solution dictionary <code>s</code>, calculate the total response to a perturbative force at frequency <code>Ω</code>.</p><p><a href="https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/dba5ed290097461f4c8cc00a628206e6ee09b3bd/src/modules/LinearResponse/response.jl#L59" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="HarmonicBalance.LinearResponse.get_response_matrix" href="#HarmonicBalance.LinearResponse.get_response_matrix">#</a> <b><u>HarmonicBalance.LinearResponse.get_response_matrix</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">get_response_matrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(diff_eq</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DifferentialEquation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, freq</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Num</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; order</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Obtain the symbolic linear response matrix of a <code>diff_eq</code> corresponding to a perturbation frequency <code>freq</code>. This routine cannot accept a <code>HarmonicEquation</code> since there, some time-derivatives are already dropped. <code>order</code> denotes the highest differential order to be considered.</p><p><a href="https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/dba5ed290097461f4c8cc00a628206e6ee09b3bd/src/modules/LinearResponse/response.jl#L1-L8" target="_blank" rel="noreferrer">source</a></p></div><br>`,14))])}const Q=r(o,[["render",m]]);export{x as __pageData,Q as default};
