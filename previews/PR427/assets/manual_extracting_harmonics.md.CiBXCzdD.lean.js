import{_ as o,C as r,c as e,o as n,ai as t,j as s,G as h,a as i,w as T}from"./chunks/framework.B135Gx_-.js";const O=JSON.parse('{"title":"Extracting harmonic equations","description":"","frontmatter":{},"headers":[],"relativePath":"manual/extracting_harmonics.md","filePath":"manual/extracting_harmonics.md"}'),Q={name:"manual/extracting_harmonics.md"},p={class:"jldocstring custom-block",open:""},d={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.972ex"},xmlns:"http://www.w3.org/2000/svg",width:"47.051ex",height:"3.144ex",role:"img",focusable:"false",viewBox:"0 -960 20796.4 1389.6","aria-hidden":"true"},m={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},g={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.666ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.845ex",height:"2.363ex",role:"img",focusable:"false",viewBox:"0 -750 3909.4 1044.2","aria-hidden":"true"},E={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},c={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.666ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.251ex",height:"1.668ex",role:"img",focusable:"false",viewBox:"0 -443 1436.9 737.2","aria-hidden":"true"},y={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},u={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.611ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2038 1000","aria-hidden":"true"},x={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},f={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.611ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2038 1000","aria-hidden":"true"},w={class:"jldocstring custom-block",open:""},H={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},F={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"2.378ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 1051 683","aria-hidden":"true"},b={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},v={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"2.009ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 888 683","aria-hidden":"true"},C={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},D={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"5.518ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 2439 683","aria-hidden":"true"},L={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},_={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"5.518ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 2439 683","aria-hidden":"true"},A={class:"jldocstring custom-block",open:""},M={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},B={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.67ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 1622 1000","aria-hidden":"true"},V={class:"jldocstring custom-block",open:""};function j(Z,a,q,S,P,R){const l=r("Badge");return n(),e("div",null,[a[59]||(a[59]=t("",4)),s("details",p,[s("summary",null,[a[0]||(a[0]=s("a",{id:"HarmonicBalance.get_harmonic_equations-manual-extracting_harmonics",href:"#HarmonicBalance.get_harmonic_equations-manual-extracting_harmonics"},[s("span",{class:"jlbinding"},"HarmonicBalance.get_harmonic_equations")],-1)),a[1]||(a[1]=i()),h(l,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),a[3]||(a[3]=t("",6)),h(l,{type:"info",class:"source-link",text:"source"},{default:T(()=>a[2]||(a[2]=[s("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/d9978f0ae0f725380b7df74a906e7d982bf9e5a4/src/HarmonicEquation.jl#L128-L169",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),a[60]||(a[60]=s("h2",{id:"HarmonicVariable-and-HarmonicEquation-types",tabindex:"-1"},[i("HarmonicVariable and HarmonicEquation types "),s("a",{class:"header-anchor",href:"#HarmonicVariable-and-HarmonicEquation-types","aria-label":'Permalink to "HarmonicVariable and HarmonicEquation types {#HarmonicVariable-and-HarmonicEquation-types}"'},"​")],-1)),s("p",null,[a[14]||(a[14]=i("The equations governing the harmonics are stored using the two following structs. When going from the original to the harmonic equations, the harmonic ansatz ")),s("mjx-container",d,[(n(),e("svg",k,a[4]||(a[4]=[t("",1)]))),a[5]||(a[5]=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("msub",null,[s("mi",null,"x"),s("mi",null,"i")]),s("mo",{stretchy:"false"},"("),s("mi",null,"t"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("munderover",null,[s("mo",{"data-mjx-texclass":"OP"},"∑"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"j"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"M")]),s("msub",null,[s("mi",null,"u"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"i"),s("mo",null,","),s("mi",null,"j")])]),s("mo",{stretchy:"false"},"("),s("mi",null,"T"),s("mo",{stretchy:"false"},")"),s("mi",null,"cos"),s("mo",{"data-mjx-texclass":"NONE"},"⁡"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"ω"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"i"),s("mo",null,","),s("mi",null,"j")])]),s("mi",null,"t"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("msub",null,[s("mi",null,"v"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"i"),s("mo",null,","),s("mi",null,"j")])]),s("mo",{stretchy:"false"},"("),s("mi",null,"T"),s("mo",{stretchy:"false"},")"),s("mi",null,"sin"),s("mo",{"data-mjx-texclass":"NONE"},"⁡"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"ω"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"i"),s("mo",null,","),s("mi",null,"j")])]),s("mi",null,"t"),s("mo",{stretchy:"false"},")")])],-1))]),a[15]||(a[15]=i(" is used. Internally, each pair ")),s("mjx-container",m,[(n(),e("svg",g,a[6]||(a[6]=[t("",1)]))),a[7]||(a[7]=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"u"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"i"),s("mo",null,","),s("mi",null,"j")])]),s("mo",null,","),s("msub",null,[s("mi",null,"v"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"i"),s("mo",null,","),s("mi",null,"j")])]),s("mo",{stretchy:"false"},")")])],-1))]),a[16]||(a[16]=i(" is stored as a ")),a[17]||(a[17]=s("code",null,"HarmonicVariable",-1)),a[18]||(a[18]=i(". This includes the identification of ")),s("mjx-container",E,[(n(),e("svg",c,a[8]||(a[8]=[t("",1)]))),a[9]||(a[9]=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("msub",null,[s("mi",null,"ω"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"i"),s("mo",null,","),s("mi",null,"j")])])])],-1))]),a[19]||(a[19]=i(" and ")),s("mjx-container",y,[(n(),e("svg",u,a[10]||(a[10]=[t("",1)]))),a[11]||(a[11]=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("msub",null,[s("mi",null,"x"),s("mi",null,"i")]),s("mo",{stretchy:"false"},"("),s("mi",null,"t"),s("mo",{stretchy:"false"},")")])],-1))]),a[20]||(a[20]=i(", which is needed to later reconstruct ")),s("mjx-container",x,[(n(),e("svg",f,a[12]||(a[12]=[t("",1)]))),a[13]||(a[13]=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("msub",null,[s("mi",null,"x"),s("mi",null,"i")]),s("mo",{stretchy:"false"},"("),s("mi",null,"t"),s("mo",{stretchy:"false"},")")])],-1))]),a[21]||(a[21]=i("."))]),s("details",w,[s("summary",null,[a[22]||(a[22]=s("a",{id:"QuestBase.HarmonicVariable-manual-extracting_harmonics",href:"#QuestBase.HarmonicVariable-manual-extracting_harmonics"},[s("span",{class:"jlbinding"},"QuestBase.HarmonicVariable")],-1)),a[23]||(a[23]=i()),h(l,{type:"info",class:"jlObjectType jlType",text:"Type"})]),a[25]||(a[25]=t("",4)),h(l,{type:"info",class:"source-link",text:"source"},{default:T(()=>a[24]||(a[24]=[s("a",{href:"https://github.com/QuantumEngineeredSystems/QuestBase.jl/blob/v0.3.0/src/HarmonicVariable.jl#L1",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),s("p",null,[a[34]||(a[34]=i("When the full set of equations of motion is expanded using the harmonic ansatz, the result is stored as a ")),a[35]||(a[35]=s("code",null,"HarmonicEquation",-1)),a[36]||(a[36]=i(". For an initial equation of motion consisting of ")),s("mjx-container",H,[(n(),e("svg",F,a[26]||(a[26]=[s("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[s("g",{"data-mml-node":"math"},[s("g",{"data-mml-node":"mi"},[s("path",{"data-c":"1D440",d:"M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z",style:{"stroke-width":"3"}})])])],-1)]))),a[27]||(a[27]=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"M")])],-1))]),a[37]||(a[37]=i(" variables, each expanded in ")),s("mjx-container",b,[(n(),e("svg",v,a[28]||(a[28]=[s("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[s("g",{"data-mml-node":"math"},[s("g",{"data-mml-node":"mi"},[s("path",{"data-c":"1D441",d:"M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",style:{"stroke-width":"3"}})])])],-1)]))),a[29]||(a[29]=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"N")])],-1))]),a[38]||(a[38]=i(" harmonics, the resulting ")),a[39]||(a[39]=s("code",null,"HarmonicEquation",-1)),a[40]||(a[40]=i(" holds ")),s("mjx-container",C,[(n(),e("svg",D,a[30]||(a[30]=[t("",1)]))),a[31]||(a[31]=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mn",null,"2"),s("mi",null,"N"),s("mi",null,"M")])],-1))]),a[41]||(a[41]=i(" equations of ")),s("mjx-container",L,[(n(),e("svg",_,a[32]||(a[32]=[t("",1)]))),a[33]||(a[33]=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mn",null,"2"),s("mi",null,"N"),s("mi",null,"M")])],-1))]),a[42]||(a[42]=i(" variables. Each symbol not corresponding to a variable is identified as a parameter."))]),a[61]||(a[61]=s("p",null,[i("A "),s("code",null,"HarmonicEquation"),i(" can be either parsed into a steady-state "),s("a",{href:"/HarmonicBalance.jl/previews/PR427/manual/solving_harmonics#HarmonicSteadyState.HomotopyContinuationProblem-manual-solving_harmonics"},[s("code",null,"HarmonicSteadyState.HomotopyContinuationProblem")]),i(" or solved using a dynamical ODE solver.")],-1)),s("details",A,[s("summary",null,[a[43]||(a[43]=s("a",{id:"QuestBase.HarmonicEquation-manual-extracting_harmonics",href:"#QuestBase.HarmonicEquation-manual-extracting_harmonics"},[s("span",{class:"jlbinding"},"QuestBase.HarmonicEquation")],-1)),a[44]||(a[44]=i()),h(l,{type:"info",class:"jlObjectType jlType",text:"Type"})]),a[46]||(a[46]=t("",4)),h(l,{type:"info",class:"source-link",text:"source"},{default:T(()=>a[45]||(a[45]=[s("a",{href:"https://github.com/QuantumEngineeredSystems/QuestBase.jl/blob/v0.3.0/src/HarmonicEquation.jl#L1",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),a[62]||(a[62]=s("h2",{id:"Krylov-Bogoliubov",tabindex:"-1"},[i("Krylov-Bogoliubov Averaging Method "),s("a",{class:"header-anchor",href:"#Krylov-Bogoliubov","aria-label":'Permalink to "Krylov-Bogoliubov Averaging Method {#Krylov-Bogoliubov}"'},"​")],-1)),s("p",null,[a[49]||(a[49]=i("The Krylov-Bogoliubov averaging method is an alternative high-frequency expansion technique used to analyze dynamical systems. Unlike the ")),a[50]||(a[50]=s("a",{href:"https://en.wikipedia.org/wiki/Harmonic_balance",target:"_blank",rel:"noreferrer"},"Harmonic Balance method",-1)),a[51]||(a[51]=i(", which is detailed in the ")),a[52]||(a[52]=s("a",{href:"/HarmonicBalance.jl/previews/PR427/background/harmonic_balance#intro_hb"},"background section",-1)),a[53]||(a[53]=i(", the Krylov-Bogoliubov method excels in computing higher orders in ")),s("mjx-container",M,[(n(),e("svg",B,a[47]||(a[47]=[t("",1)]))),a[48]||(a[48]=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mn",null,"1"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mo",null,"/")]),s("mi",null,"ω")])],-1))]),a[54]||(a[54]=i(", enabling the capture of faster dynamics within a system."))]),s("details",V,[s("summary",null,[a[55]||(a[55]=s("a",{id:"HarmonicBalance.get_krylov_equations-manual-extracting_harmonics",href:"#HarmonicBalance.get_krylov_equations-manual-extracting_harmonics"},[s("span",{class:"jlbinding"},"HarmonicBalance.get_krylov_equations")],-1)),a[56]||(a[56]=i()),h(l,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),a[58]||(a[58]=t("",6)),h(l,{type:"info",class:"source-link",text:"source"},{default:T(()=>a[57]||(a[57]=[s("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/d9978f0ae0f725380b7df74a906e7d982bf9e5a4/src/krylov-bogoliubov.jl#L4",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),a[63]||(a[63]=s("h3",{id:"Purpose-and-Advantages",tabindex:"-1"},[i("Purpose and Advantages "),s("a",{class:"header-anchor",href:"#Purpose-and-Advantages","aria-label":'Permalink to "Purpose and Advantages {#Purpose-and-Advantages}"'},"​")],-1)),a[64]||(a[64]=s("p",null,"The primary advantage of the Krylov-Bogoliubov method lies in its ability to delve deeper into high-frequency components, allowing a more comprehensive understanding of fast dynamical behaviors. By leveraging this technique, one can obtain higher-order approximations that shed light on intricate system dynamics.",-1)),a[65]||(a[65]=s("p",null,"However, it's essential to note a limitation: this method cannot handle multiple harmonics within a single variable, unlike some other high-frequency expansion methods.",-1)),a[66]||(a[66]=s("p",null,[i("For further information and a detailed understanding of this method, refer to "),s("a",{href:"https://en.wikipedia.org/wiki/Krylov%E2%80%93Bogoliubov_averaging_method",target:"_blank",rel:"noreferrer"},"Krylov-Bogoliubov averaging method on Wikipedia"),i(".")],-1))])}const I=o(Q,[["render",j]]);export{O as __pageData,I as default};
