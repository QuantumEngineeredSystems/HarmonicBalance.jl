import{_ as l,c as t,o as n,ai as h,j as i,a}from"./chunks/framework.yxUXnepf.js";const p="/HarmonicBalance.jl/v0.14.1/assets/sfmlxfy.DBzLGx2w.png",e="/HarmonicBalance.jl/v0.14.1/assets/fktfxjl.BS_gmcLS.png",k="/HarmonicBalance.jl/v0.14.1/assets/xtcbojd.D4eBXq0u.png",r="/HarmonicBalance.jl/v0.14.1/assets/mpsahvh.DccPOfGo.png",d="/HarmonicBalance.jl/v0.14.1/assets/fmblvsd.BcF1VmX1.png",w=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"examples/ab_initio_noise.md","filePath":"examples/ab_initio_noise.md"}'),E={name:"examples/ab_initio_noise.md"},g={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},o={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.407ex",height:"1.027ex",role:"img",focusable:"false",viewBox:"0 -443 622 454","aria-hidden":"true"},y={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},F={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"11.725ex",height:"1.692ex",role:"img",focusable:"false",viewBox:"0 -666 5182.6 748","aria-hidden":"true"},c={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},u={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.407ex",height:"1.027ex",role:"img",focusable:"false",viewBox:"0 -443 622 454","aria-hidden":"true"},C={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},m={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.407ex",height:"1.027ex",role:"img",focusable:"false",viewBox:"0 -443 622 454","aria-hidden":"true"},T={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Q={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"1.593ex",height:"1.532ex",role:"img",focusable:"false",viewBox:"0 -677 704 677","aria-hidden":"true"};function x(b,s,v,f,D,A){return n(),t("div",null,[s[21]||(s[21]=h("",6)),i("p",null,[s[2]||(s[2]=a("We define the parametric oscillator using the HarmonicBalance.jl package and compute effective equations of motion at the frequency ")),i("mjx-container",g,[(n(),t("svg",o,s[0]||(s[0]=[i("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[i("g",{"data-mml-node":"math"},[i("g",{"data-mml-node":"mi"},[i("path",{"data-c":"1D714",d:"M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z",style:{"stroke-width":"3"}})])])],-1)]))),s[1]||(s[1]=i("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[i("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[i("mi",null,"ω")])],-1))]),s[3]||(s[3]=a("."))]),s[22]||(s[22]=h("",8)),i("p",null,[s[6]||(s[6]=a("Let us now reproduce this sidebands using a noise probe. We use the ModelingToolkit extension to define the stochastic differential equation system from the harmonic equations. The resulting system will have addtivce white noise with a noise strength ")),i("mjx-container",y,[(n(),t("svg",F,s[4]||(s[4]=[h("",1)]))),s[5]||(s[5]=i("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[i("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[i("mi",null,"σ"),i("mo",null,"="),i("mn",null,"0.00005")])],-1))]),s[7]||(s[7]=a(" for each variable."))]),s[23]||(s[23]=h("",6)),i("p",null,[s[10]||(s[10]=a("We will perform parameter sweep to generate noise spectra across the driving frequency ")),i("mjx-container",c,[(n(),t("svg",u,s[8]||(s[8]=[i("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[i("g",{"data-mml-node":"math"},[i("g",{"data-mml-node":"mi"},[i("path",{"data-c":"1D714",d:"M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z",style:{"stroke-width":"3"}})])])],-1)]))),s[9]||(s[9]=i("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[i("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[i("mi",null,"ω")])],-1))]),s[11]||(s[11]=a(". For this we use the ")),s[12]||(s[12]=i("code",null,"EnsembleProblem",-1)),s[13]||(s[13]=a(" API from the SciML ecosystem."))]),s[24]||(s[24]=h("",5)),i("p",null,[s[18]||(s[18]=a("Remember that we don't do a continuation of the system, but rather initlized the system at each frequency ")),i("mjx-container",C,[(n(),t("svg",m,s[14]||(s[14]=[i("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[i("g",{"data-mml-node":"math"},[i("g",{"data-mml-node":"mi"},[i("path",{"data-c":"1D714",d:"M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z",style:{"stroke-width":"3"}})])])],-1)]))),s[15]||(s[15]=i("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[i("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[i("mi",null,"ω")])],-1))]),s[19]||(s[19]=a(" and evolve it for a fixed time ")),i("mjx-container",T,[(n(),t("svg",Q,s[16]||(s[16]=[i("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[i("g",{"data-mml-node":"math"},[i("g",{"data-mml-node":"mi"},[i("path",{"data-c":"1D447",d:"M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z",style:{"stroke-width":"3"}})])])],-1)]))),s[17]||(s[17]=i("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[i("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[i("mi",null,"T")])],-1))]),s[20]||(s[20]=a(". This leads to imperfections in the spectrum. However, if we plot the sidebands computed with HomotopyContinuation.jl on top of the spectrum, we find descent match."))]),s[25]||(s[25]=h("",4))])}const _=l(E,[["render",x]]);export{w as __pageData,_ as default};
