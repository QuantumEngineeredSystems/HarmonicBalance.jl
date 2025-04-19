import{_ as p,C as h,c as r,o,ai as t,j as e,G as n,a as i,w as l}from"./chunks/framework.BVQLpw5l.js";const I=JSON.parse('{"title":"Linear response","description":"","frontmatter":{},"headers":[],"relativePath":"manual/linear_response.md","filePath":"manual/linear_response.md"}'),d={name:"manual/linear_response.md"},k={class:"jldocstring custom-block",open:""},c={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},g={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.027ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.319ex",height:"1.597ex",role:"img",focusable:"false",viewBox:"0 -694 583 706","aria-hidden":"true"},u={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},E={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.247ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2319 1000","aria-hidden":"true"},m={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.278ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2333 1000","aria-hidden":"true"},b={class:"jldocstring custom-block",open:""},f={class:"jldocstring custom-block",open:""},_={class:"jldocstring custom-block",open:""},T={class:"jldocstring custom-block",open:""},F={class:"jldocstring custom-block",open:""},v={class:"jldocstring custom-block",open:""},C={class:"jldocstring custom-block",open:""},x={class:"jldocstring custom-block",open:""},j={class:"jldocstring custom-block",open:""},B={class:"jldocstring custom-block",open:""},H={class:"jldocstring custom-block",open:""},A={class:"jldocstring custom-block",open:""},Q={class:"jldocstring custom-block",open:""};function w(R,s,S,D,L,V){const a=h("Badge");return o(),r("div",null,[s[72]||(s[72]=t("",5)),e("details",k,[e("summary",null,[s[0]||(s[0]=e("a",{id:"HarmonicBalance.get_Jacobian-manual-linear_response",href:"#HarmonicBalance.get_Jacobian-manual-linear_response"},[e("span",{class:"jlbinding"},"HarmonicBalance.get_Jacobian")],-1)),s[1]||(s[1]=i()),n(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[5]||(s[5]=t("",2)),n(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>s[2]||(s[2]=[e("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9e7854340c5492939d031065e1160c04189dff3d/src/Jacobian.jl#L54",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1}),s[6]||(s[6]=e("p",null,[i("Obtain a Jacobian from a "),e("code",null,"DifferentialEquation"),i(" by first converting it into a "),e("code",null,"HarmonicEquation"),i(".")],-1)),n(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>s[3]||(s[3]=[e("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9e7854340c5492939d031065e1160c04189dff3d/src/Jacobian.jl#L72",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1}),s[7]||(s[7]=e("p",null,[i("Get the Jacobian of a set of equations "),e("code",null,"eqs"),i(" with respect to the variables "),e("code",null,"vars"),i(".")],-1)),n(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>s[4]||(s[4]=[e("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9e7854340c5492939d031065e1160c04189dff3d/src/Jacobian.jl#L81",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),s[73]||(s[73]=e("h2",{id:"Linear-response",tabindex:"-1"},[i("Linear response "),e("a",{class:"header-anchor",href:"#Linear-response","aria-label":'Permalink to "Linear response {#Linear-response}"'},"​")],-1)),s[74]||(s[74]=e("p",null,[i("The response to white noise can be shown with "),e("code",null,"plot_linear_response"),i(". Depending on the "),e("code",null,"order"),i(" argument, different methods are used.")],-1)),s[75]||(s[75]=e("h3",{id:"First-order",tabindex:"-1"},[i("First order "),e("a",{class:"header-anchor",href:"#First-order","aria-label":'Permalink to "First order {#First-order}"'},"​")],-1)),e("p",null,[s[14]||(s[14]=i("The simplest way to extract the linear response of a steady state is to evaluate the Jacobian of the harmonic equations. Each of its eigenvalues ")),e("mjx-container",c,[(o(),r("svg",g,s[8]||(s[8]=[e("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[e("g",{"data-mml-node":"math"},[e("g",{"data-mml-node":"mi"},[e("path",{"data-c":"1D706",d:"M166 673Q166 685 183 694H202Q292 691 316 644Q322 629 373 486T474 207T524 67Q531 47 537 34T546 15T551 6T555 2T556 -2T550 -11H482Q457 3 450 18T399 152L354 277L340 262Q327 246 293 207T236 141Q211 112 174 69Q123 9 111 -1T83 -12Q47 -12 47 20Q47 37 61 52T199 187Q229 216 266 252T321 306L338 322Q338 323 288 462T234 612Q214 657 183 657Q166 657 166 673Z",style:{"stroke-width":"3"}})])])],-1)]))),s[9]||(s[9]=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"λ")])],-1))]),s[15]||(s[15]=i(" describes a Lorentzian peak in the response; ")),e("mjx-container",u,[(o(),r("svg",E,s[10]||(s[10]=[t("",1)]))),s[11]||(s[11]=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mtext",null,"Re"),e("mo",{stretchy:"false"},"["),e("mi",null,"λ"),e("mo",{stretchy:"false"},"]")])],-1))]),s[16]||(s[16]=i(" gives its center and ")),e("mjx-container",m,[(o(),r("svg",y,s[12]||(s[12]=[t("",1)]))),s[13]||(s[13]=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mtext",null,"Im"),e("mo",{stretchy:"false"},"["),e("mi",null,"λ"),e("mo",{stretchy:"false"},"]")])],-1))]),s[17]||(s[17]=i(" its width. Transforming the harmonic variables into the non-rotating frame (that is, inverting the harmonic ansatz) then gives the response as it would be observed in an experiment."))]),s[76]||(s[76]=e("p",null,"The advantage of this method is that for a given parameter set, only one matrix diagonalization is needed to fully describe the response spectrum. However, the method is inaccurate for response frequencies far from the frequencies used in the harmonic ansatz (it relies on the response oscillating slowly in the rotating frame).",-1)),s[77]||(s[77]=e("p",null,[i("Behind the scenes, the spectra are stored using the dedicated structs "),e("code",null,"Lorentzian"),i(" and "),e("code",null,"JacobianSpectrum"),i(".")],-1)),e("details",b,[e("summary",null,[s[18]||(s[18]=e("a",{id:"HarmonicBalance.LinearResponse.get_jacobian_response-manual-linear_response",href:"#HarmonicBalance.LinearResponse.get_jacobian_response-manual-linear_response"},[e("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.get_jacobian_response")],-1)),s[19]||(s[19]=i()),n(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[21]||(s[21]=t("",6)),n(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>s[20]||(s[20]=[e("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9e7854340c5492939d031065e1160c04189dff3d/src/modules/LinearResponse/plotting.jl#L1",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),e("details",f,[e("summary",null,[s[22]||(s[22]=e("a",{id:"HarmonicBalance.LinearResponse.JacobianSpectrum-manual-linear_response",href:"#HarmonicBalance.LinearResponse.JacobianSpectrum-manual-linear_response"},[e("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.JacobianSpectrum")],-1)),s[23]||(s[23]=i()),n(a,{type:"info",class:"jlObjectType jlType",text:"Type"})]),s[25]||(s[25]=t("",6)),n(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>s[24]||(s[24]=[e("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9e7854340c5492939d031065e1160c04189dff3d/src/modules/LinearResponse/types.jl#L21",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),e("details",_,[e("summary",null,[s[26]||(s[26]=e("a",{id:"HarmonicBalance.LinearResponse.Lorentzian-manual-linear_response",href:"#HarmonicBalance.LinearResponse.Lorentzian-manual-linear_response"},[e("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.Lorentzian")],-1)),s[27]||(s[27]=i()),n(a,{type:"info",class:"jlObjectType jlType",text:"Type"})]),s[29]||(s[29]=t("",4)),n(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>s[28]||(s[28]=[e("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9e7854340c5492939d031065e1160c04189dff3d/src/modules/LinearResponse/types.jl#L1",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),s[78]||(s[78]=e("h3",{id:"Higher-orders",tabindex:"-1"},[i("Higher orders "),e("a",{class:"header-anchor",href:"#Higher-orders","aria-label":'Permalink to "Higher orders {#Higher-orders}"'},"​")],-1)),s[79]||(s[79]=e("p",null,[i("Setting "),e("code",null,"order > 1"),i(" increases the accuracy of the response spectra. However, unlike for the Jacobian, here we must perform a matrix inversion for each response frequency.")],-1)),e("details",T,[e("summary",null,[s[30]||(s[30]=e("a",{id:"HarmonicBalance.LinearResponse.get_linear_response-manual-linear_response",href:"#HarmonicBalance.LinearResponse.get_linear_response-manual-linear_response"},[e("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.get_linear_response")],-1)),s[31]||(s[31]=i()),n(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[33]||(s[33]=t("",6)),n(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>s[32]||(s[32]=[e("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9e7854340c5492939d031065e1160c04189dff3d/src/modules/LinearResponse/plotting.jl#L71",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),e("details",F,[e("summary",null,[s[34]||(s[34]=e("a",{id:"HarmonicBalance.LinearResponse.ResponseMatrix-manual-linear_response",href:"#HarmonicBalance.LinearResponse.ResponseMatrix-manual-linear_response"},[e("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.ResponseMatrix")],-1)),s[35]||(s[35]=i()),n(a,{type:"info",class:"jlObjectType jlType",text:"Type"})]),s[37]||(s[37]=t("",4)),n(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>s[36]||(s[36]=[e("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9e7854340c5492939d031065e1160c04189dff3d/src/modules/LinearResponse/types.jl#L40",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),e("details",v,[e("summary",null,[s[38]||(s[38]=e("a",{id:"HarmonicBalance.LinearResponse.get_response-manual-linear_response",href:"#HarmonicBalance.LinearResponse.get_response-manual-linear_response"},[e("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.get_response")],-1)),s[39]||(s[39]=i()),n(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[41]||(s[41]=t("",2)),n(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>s[40]||(s[40]=[e("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9e7854340c5492939d031065e1160c04189dff3d/src/modules/LinearResponse/response.jl#L63",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),e("details",C,[e("summary",null,[s[42]||(s[42]=e("a",{id:"HarmonicBalance.LinearResponse.get_response_matrix-manual-linear_response",href:"#HarmonicBalance.LinearResponse.get_response_matrix-manual-linear_response"},[e("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.get_response_matrix")],-1)),s[43]||(s[43]=i()),n(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[45]||(s[45]=t("",2)),n(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>s[44]||(s[44]=[e("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9e7854340c5492939d031065e1160c04189dff3d/src/modules/LinearResponse/response.jl#L1",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),s[80]||(s[80]=e("h2",{id:"Rotating-frame",tabindex:"-1"},[i("Rotating frame "),e("a",{class:"header-anchor",href:"#Rotating-frame","aria-label":'Permalink to "Rotating frame {#Rotating-frame}"'},"​")],-1)),e("details",x,[e("summary",null,[s[46]||(s[46]=e("a",{id:"HarmonicBalance.LinearResponse.eigenvalues-manual-linear_response",href:"#HarmonicBalance.LinearResponse.eigenvalues-manual-linear_response"},[e("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.eigenvalues")],-1)),s[47]||(s[47]=i()),n(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[49]||(s[49]=t("",8)),n(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>s[48]||(s[48]=[e("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9e7854340c5492939d031065e1160c04189dff3d/src/modules/LinearResponse/plotting.jl#L172-L190",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),e("details",j,[e("summary",null,[s[50]||(s[50]=e("a",{id:"HarmonicBalance.LinearResponse.eigenvectors-manual-linear_response",href:"#HarmonicBalance.LinearResponse.eigenvectors-manual-linear_response"},[e("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.eigenvectors")],-1)),s[51]||(s[51]=i()),n(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[53]||(s[53]=t("",8)),n(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>s[52]||(s[52]=[e("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9e7854340c5492939d031065e1160c04189dff3d/src/modules/LinearResponse/plotting.jl#L215-L234",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),e("details",B,[e("summary",null,[s[54]||(s[54]=e("a",{id:"HarmonicBalance.LinearResponse.get_rotframe_jacobian_response-manual-linear_response",href:"#HarmonicBalance.LinearResponse.get_rotframe_jacobian_response-manual-linear_response"},[e("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.get_rotframe_jacobian_response")],-1)),s[55]||(s[55]=i()),n(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[57]||(s[57]=t("",6)),n(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>s[56]||(s[56]=[e("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9e7854340c5492939d031065e1160c04189dff3d/src/modules/LinearResponse/plotting.jl#L119",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),s[81]||(s[81]=e("h2",{id:"plotting",tabindex:"-1"},[i("Plotting "),e("a",{class:"header-anchor",href:"#plotting","aria-label":'Permalink to "Plotting"'},"​")],-1)),e("details",H,[e("summary",null,[s[58]||(s[58]=e("a",{id:"HarmonicBalance.plot_linear_response-manual-linear_response",href:"#HarmonicBalance.plot_linear_response-manual-linear_response"},[e("span",{class:"jlbinding"},"HarmonicBalance.plot_linear_response")],-1)),s[59]||(s[59]=i()),n(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[62]||(s[62]=t("",6)),n(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>s[60]||(s[60]=[e("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9e7854340c5492939d031065e1160c04189dff3d/ext/PlotsExt/linear_response.jl#L2",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1}),s[63]||(s[63]=t("",6)),n(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>s[61]||(s[61]=[e("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9e7854340c5492939d031065e1160c04189dff3d/ext/PlotsExt/linear_response.jl#L55",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),e("details",A,[e("summary",null,[s[64]||(s[64]=e("a",{id:"HarmonicBalance.plot_rotframe_jacobian_response-manual-linear_response",href:"#HarmonicBalance.plot_rotframe_jacobian_response-manual-linear_response"},[e("span",{class:"jlbinding"},"HarmonicBalance.plot_rotframe_jacobian_response")],-1)),s[65]||(s[65]=i()),n(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[67]||(s[67]=t("",8)),n(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>s[66]||(s[66]=[e("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9e7854340c5492939d031065e1160c04189dff3d/ext/PlotsExt/linear_response.jl#L104",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),e("details",Q,[e("summary",null,[s[68]||(s[68]=e("a",{id:"HarmonicBalance.plot_eigenvalues-manual-linear_response",href:"#HarmonicBalance.plot_eigenvalues-manual-linear_response"},[e("span",{class:"jlbinding"},"HarmonicBalance.plot_eigenvalues")],-1)),s[69]||(s[69]=i()),n(a,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[71]||(s[71]=t("",8)),n(a,{type:"info",class:"source-link",text:"source"},{default:l(()=>s[70]||(s[70]=[e("a",{href:"https://github.com/QuantumEngineeredSystems/HarmonicBalance.jl/blob/9e7854340c5492939d031065e1160c04189dff3d/ext/PlotsExt/linear_response.jl#L157",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})])])}const q=p(d,[["render",w]]);export{I as __pageData,q as default};
