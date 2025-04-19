import{_ as r,C as h,c as o,o as p,ai as n,j as s,G as e,a,w as l}from"./chunks/framework.B135Gx_-.js";const S=JSON.parse('{"title":"Solving harmonic equations","description":"","frontmatter":{},"headers":[],"relativePath":"manual/solving_harmonics.md","filePath":"manual/solving_harmonics.md"}'),d={name:"manual/solving_harmonics.md"},k={class:"jldocstring custom-block",open:""},c={class:"jldocstring custom-block",open:""},g={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},u={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.687ex"},xmlns:"http://www.w3.org/2000/svg",width:"27.124ex",height:"2.573ex",role:"img",focusable:"false",viewBox:"0 -833.9 11988.7 1137.4","aria-hidden":"true"},y={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},m={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.407ex",height:"1.027ex",role:"img",focusable:"false",viewBox:"0 -443 622 454","aria-hidden":"true"},E={class:"jldocstring custom-block",open:""},T={class:"jldocstring custom-block",open:""},Q={class:"jldocstring custom-block",open:""};function b(F,i,f,C,_,v){const t=h("Badge");return p(),o("div",null,[i[27]||(i[27]=n("",4)),s("details",k,[s("summary",null,[i[0]||(i[0]=s("a",{id:"HarmonicSteadyState.HomotopyContinuationProblem-manual-solving_harmonics",href:"#HarmonicSteadyState.HomotopyContinuationProblem-manual-solving_harmonics"},[s("span",{class:"jlbinding"},"HarmonicSteadyState.HomotopyContinuationProblem")],-1)),i[1]||(i[1]=a()),e(t,{type:"info",class:"jlObjectType jlType",text:"Type"})]),i[3]||(i[3]=n("",6)),e(t,{type:"info",class:"source-link",text:"source"},{default:l(()=>i[2]||(i[2]=[s("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.2.0/src/Problem.jl#L8",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),s("details",c,[s("summary",null,[i[4]||(i[4]=s("a",{id:"HarmonicSteadyState.get_steady_states-manual-solving_harmonics",href:"#HarmonicSteadyState.get_steady_states-manual-solving_harmonics"},[s("span",{class:"jlbinding"},"HarmonicSteadyState.get_steady_states")],-1)),i[5]||(i[5]=a()),e(t,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),i[13]||(i[13]=n("",5)),s("p",null,[i[10]||(i[10]=a("solving a simple harmonic oscillator ")),s("mjx-container",g,[(p(),o("svg",u,i[6]||(i[6]=[n("",1)]))),i[7]||(i[7]=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"m"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mover",null,[s("mi",null,"x"),s("mo",null,"¨")])]),s("mo",null,"+"),s("mi",null,"γ"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mover",null,[s("mi",null,"x"),s("mo",null,"˙")])]),s("mo",null,"+"),s("msubsup",null,[s("mi",null,"ω"),s("mn",null,"0"),s("mn",null,"2")]),s("mi",null,"x"),s("mo",null,"="),s("mi",null,"F"),s("mi",null,"cos"),s("mo",{"data-mjx-texclass":"NONE"},"⁡"),s("mo",{stretchy:"false"},"("),s("mi",null,"ω"),s("mi",null,"t"),s("mo",{stretchy:"false"},")")])],-1))]),i[11]||(i[11]=a(" to obtain the response as a function of ")),s("mjx-container",y,[(p(),o("svg",m,i[8]||(i[8]=[s("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[s("g",{"data-mml-node":"math"},[s("g",{"data-mml-node":"mi"},[s("path",{"data-c":"1D714",d:"M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z",style:{"stroke-width":"3"}})])])],-1)]))),i[9]||(i[9]=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"ω")])],-1))])]),i[14]||(i[14]=n("",3)),e(t,{type:"info",class:"source-link",text:"source"},{default:l(()=>i[12]||(i[12]=[s("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.2.0/src/solve_homotopy.jl#L1-L61",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),s("details",E,[s("summary",null,[i[15]||(i[15]=s("a",{id:"HarmonicSteadyState.Result-manual-solving_harmonics",href:"#HarmonicSteadyState.Result-manual-solving_harmonics"},[s("span",{class:"jlbinding"},"HarmonicSteadyState.Result")],-1)),i[16]||(i[16]=a()),e(t,{type:"info",class:"jlObjectType jlType",text:"Type"})]),i[18]||(i[18]=n("",4)),e(t,{type:"info",class:"source-link",text:"source"},{default:l(()=>i[17]||(i[17]=[s("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.2.0/src/Result.jl#L1",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),i[28]||(i[28]=s("h2",{id:"Classifying-solutions",tabindex:"-1"},[a("Classifying solutions "),s("a",{class:"header-anchor",href:"#Classifying-solutions","aria-label":'Permalink to "Classifying solutions {#Classifying-solutions}"'},"​")],-1)),i[29]||(i[29]=s("p",null,[a("The solutions in "),s("code",null,"Result"),a(" are accompanied by similarly-sized boolean arrays stored in the dictionary "),s("code",null,"Result.classes"),a(". The classes can be used by the plotting functions to show/hide/label certain solutions.")],-1)),i[30]||(i[30]=s("p",null,[a('By default, classes "physical", "stable" and "binary_labels" are created. User-defined classification is possible with '),s("code",null,"classify_solutions!"),a(".")],-1)),s("details",T,[s("summary",null,[i[19]||(i[19]=s("a",{id:"HarmonicSteadyState.classify_solutions!-manual-solving_harmonics",href:"#HarmonicSteadyState.classify_solutions!-manual-solving_harmonics"},[s("span",{class:"jlbinding"},"HarmonicSteadyState.classify_solutions!")],-1)),i[20]||(i[20]=a()),e(t,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),i[22]||(i[22]=n("",4)),e(t,{type:"info",class:"source-link",text:"source"},{default:l(()=>i[21]||(i[21]=[s("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.2.0/src/classification.jl#L1",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),i[31]||(i[31]=n("",6)),s("details",Q,[s("summary",null,[i[23]||(i[23]=s("a",{id:"HarmonicSteadyState.sort_solutions-manual-solving_harmonics",href:"#HarmonicSteadyState.sort_solutions-manual-solving_harmonics"},[s("span",{class:"jlbinding"},"HarmonicSteadyState.sort_solutions")],-1)),i[24]||(i[24]=a()),e(t,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),i[26]||(i[26]=n("",4)),e(t,{type:"info",class:"source-link",text:"source"},{default:l(()=>i[25]||(i[25]=[s("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicSteadyState.jl/blob/v0.2.0/src/sorting.jl#L1-L13",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})])])}const w=r(d,[["render",b]]);export{S as __pageData,w as default};
