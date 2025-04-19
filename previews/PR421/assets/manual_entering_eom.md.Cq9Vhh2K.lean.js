import{_ as h,C as k,c as p,o as r,j as s,a as n,G as t,w as e,ai as l}from"./chunks/framework.MksLndNT.js";const A=JSON.parse('{"title":"Entering equations of motion","description":"","frontmatter":{},"headers":[],"relativePath":"manual/entering_eom.md","filePath":"manual/entering_eom.md"}'),d={name:"manual/entering_eom.md"},E={class:"jldocstring custom-block",open:""},o={class:"jldocstring custom-block",open:""},g={class:"jldocstring custom-block",open:""},y={class:"jldocstring custom-block",open:""},c={class:"jldocstring custom-block",open:""};function u(F,i,m,f,C,b){const a=k("Badge");return r(),p("div",null,[i[20]||(i[20]=s("h1",{id:"Entering-equations-of-motion",tabindex:"-1"},[n("Entering equations of motion "),s("a",{class:"header-anchor",href:"#Entering-equations-of-motion","aria-label":'Permalink to "Entering equations of motion {#Entering-equations-of-motion}"'},"​")],-1)),i[21]||(i[21]=s("p",null,[n("The struct "),s("code",null,"DifferentialEquation"),n(" is the primary input method; it holds an ODE or a coupled system of ODEs composed of terms with harmonic time-dependence The dependent variables are specified during input, any other symbols are identified as parameters. Information on which variable is to be expanded in which harmonic is specified using "),s("code",null,"add_harmonic!"),n(".")],-1)),i[22]||(i[22]=s("p",null,[s("code",null,"DifferentialEquation.equations"),n(" stores a dictionary assigning variables to equations. This information is necessary because the harmonics belonging to a variable are later used to Fourier-transform its corresponding ODE.")],-1)),s("details",E,[s("summary",null,[i[0]||(i[0]=s("a",{id:"HarmonicBalance.d-manual-entering_eom",href:"#HarmonicBalance.d-manual-entering_eom"},[s("span",{class:"jlbinding"},"HarmonicBalance.d")],-1)),i[1]||(i[1]=n()),t(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),i[3]||(i[3]=s("p",null,"The derivative of f w.r.t. x of degree deg",-1)),t(a,{type:"info",class:"source-link",text:"source"},{default:e(()=>i[2]||(i[2]=[s("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/82a68b071c87cf305accde4593dabb1326bc46ce/src/HarmonicVariable.jl#L110",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),s("details",o,[s("summary",null,[i[4]||(i[4]=s("a",{id:"HarmonicBalance.DifferentialEquation-manual-entering_eom",href:"#HarmonicBalance.DifferentialEquation-manual-entering_eom"},[s("span",{class:"jlbinding"},"HarmonicBalance.DifferentialEquation")],-1)),i[5]||(i[5]=n()),t(a,{type:"info",class:"jlObjectType jlType",text:"Type"})]),i[7]||(i[7]=l("",6)),t(a,{type:"info",class:"source-link",text:"source"},{default:e(()=>i[6]||(i[6]=[s("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/82a68b071c87cf305accde4593dabb1326bc46ce/src/DifferentialEquation.jl#L1",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),s("details",g,[s("summary",null,[i[8]||(i[8]=s("a",{id:"HarmonicBalance.add_harmonic!-manual-entering_eom",href:"#HarmonicBalance.add_harmonic!-manual-entering_eom"},[s("span",{class:"jlbinding"},"HarmonicBalance.add_harmonic!")],-1)),i[9]||(i[9]=n()),t(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),i[11]||(i[11]=l("",5)),t(a,{type:"info",class:"source-link",text:"source"},{default:e(()=>i[10]||(i[10]=[s("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/82a68b071c87cf305accde4593dabb1326bc46ce/src/DifferentialEquation.jl#L88",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),s("details",y,[s("summary",null,[i[12]||(i[12]=s("a",{id:"Symbolics.get_variables-Tuple{DifferentialEquation}-manual-entering_eom",href:"#Symbolics.get_variables-Tuple{DifferentialEquation}-manual-entering_eom"},[s("span",{class:"jlbinding"},"Symbolics.get_variables")],-1)),i[13]||(i[13]=n()),t(a,{type:"info",class:"jlObjectType jlMethod",text:"Method"})]),i[15]||(i[15]=l("",2)),t(a,{type:"info",class:"source-link",text:"source"},{default:e(()=>i[14]||(i[14]=[s("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/82a68b071c87cf305accde4593dabb1326bc46ce/src/DifferentialEquation.jl#L113",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),s("details",c,[s("summary",null,[i[16]||(i[16]=s("a",{id:"HarmonicBalance.get_independent_variables-Tuple{DifferentialEquation}-manual-entering_eom",href:"#HarmonicBalance.get_independent_variables-Tuple{DifferentialEquation}-manual-entering_eom"},[s("span",{class:"jlbinding"},"HarmonicBalance.get_independent_variables")],-1)),i[17]||(i[17]=n()),t(a,{type:"info",class:"jlObjectType jlMethod",text:"Method"})]),i[19]||(i[19]=l("",2)),t(a,{type:"info",class:"source-link",text:"source"},{default:e(()=>i[18]||(i[18]=[s("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/82a68b071c87cf305accde4593dabb1326bc46ce/src/DifferentialEquation.jl#L133",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})])])}const _=h(d,[["render",u]]);export{A as __pageData,_ as default};
