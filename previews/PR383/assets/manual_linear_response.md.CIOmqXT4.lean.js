import{_ as o,C as p,c as l,o as r,ai as e,j as a,a as i,G as t}from"./chunks/framework.ami1MTTI.js";const P=JSON.parse('{"title":"Linear response","description":"","frontmatter":{},"headers":[],"relativePath":"manual/linear_response.md","filePath":"manual/linear_response.md"}'),h={name:"manual/linear_response.md"},d={class:"jldocstring custom-block",open:""},c={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.027ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.319ex",height:"1.597ex",role:"img",focusable:"false",viewBox:"0 -694 583 706","aria-hidden":"true"},g={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},u={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.247ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2319 1000","aria-hidden":"true"},E={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},m={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.278ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2333 1000","aria-hidden":"true"},y={class:"jldocstring custom-block",open:""},b={class:"jldocstring custom-block",open:""},f={class:"jldocstring custom-block",open:""},_={class:"jldocstring custom-block",open:""},T={class:"jldocstring custom-block",open:""},F={class:"jldocstring custom-block",open:""},v={class:"jldocstring custom-block",open:""},C={class:"jldocstring custom-block",open:""},j={class:"jldocstring custom-block",open:""},x={class:"jldocstring custom-block",open:""},B={class:"jldocstring custom-block",open:""},H={class:"jldocstring custom-block",open:""},A={class:"jldocstring custom-block",open:""};function w(R,s,Q,D,L,V){const n=p("Badge");return r(),l("div",null,[s[52]||(s[52]=e("",5)),a("details",d,[a("summary",null,[s[0]||(s[0]=a("a",{id:"HarmonicBalance.get_Jacobian-manual-linear_response",href:"#HarmonicBalance.get_Jacobian-manual-linear_response"},[a("span",{class:"jlbinding"},"HarmonicBalance.get_Jacobian")],-1)),s[1]||(s[1]=i()),t(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[2]||(s[2]=e("",7))]),s[53]||(s[53]=a("h2",{id:"Linear-response",tabindex:"-1"},[i("Linear response "),a("a",{class:"header-anchor",href:"#Linear-response","aria-label":'Permalink to "Linear response {#Linear-response}"'},"​")],-1)),s[54]||(s[54]=a("p",null,[i("The response to white noise can be shown with "),a("code",null,"plot_linear_response"),i(". Depending on the "),a("code",null,"order"),i(" argument, different methods are used.")],-1)),s[55]||(s[55]=a("h3",{id:"First-order",tabindex:"-1"},[i("First order "),a("a",{class:"header-anchor",href:"#First-order","aria-label":'Permalink to "First order {#First-order}"'},"​")],-1)),a("p",null,[s[9]||(s[9]=i("The simplest way to extract the linear response of a steady state is to evaluate the Jacobian of the harmonic equations. Each of its eigenvalues ")),a("mjx-container",c,[(r(),l("svg",k,s[3]||(s[3]=[a("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[a("g",{"data-mml-node":"math"},[a("g",{"data-mml-node":"mi"},[a("path",{"data-c":"1D706",d:"M166 673Q166 685 183 694H202Q292 691 316 644Q322 629 373 486T474 207T524 67Q531 47 537 34T546 15T551 6T555 2T556 -2T550 -11H482Q457 3 450 18T399 152L354 277L340 262Q327 246 293 207T236 141Q211 112 174 69Q123 9 111 -1T83 -12Q47 -12 47 20Q47 37 61 52T199 187Q229 216 266 252T321 306L338 322Q338 323 288 462T234 612Q214 657 183 657Q166 657 166 673Z",style:{"stroke-width":"3"}})])])],-1)]))),s[4]||(s[4]=a("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"λ")])],-1))]),s[10]||(s[10]=i(" describes a Lorentzian peak in the response; ")),a("mjx-container",g,[(r(),l("svg",u,s[5]||(s[5]=[e("",1)]))),s[6]||(s[6]=a("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mtext",null,"Re"),a("mo",{stretchy:"false"},"["),a("mi",null,"λ"),a("mo",{stretchy:"false"},"]")])],-1))]),s[11]||(s[11]=i(" gives its center and ")),a("mjx-container",E,[(r(),l("svg",m,s[7]||(s[7]=[e("",1)]))),s[8]||(s[8]=a("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mtext",null,"Im"),a("mo",{stretchy:"false"},"["),a("mi",null,"λ"),a("mo",{stretchy:"false"},"]")])],-1))]),s[12]||(s[12]=i(" its width. Transforming the harmonic variables into the non-rotating frame (that is, inverting the harmonic ansatz) then gives the response as it would be observed in an experiment."))]),s[56]||(s[56]=a("p",null,"The advantage of this method is that for a given parameter set, only one matrix diagonalization is needed to fully describe the response spectrum. However, the method is inaccurate for response frequencies far from the frequencies used in the harmonic ansatz (it relies on the response oscillating slowly in the rotating frame).",-1)),s[57]||(s[57]=a("p",null,[i("Behind the scenes, the spectra are stored using the dedicated structs "),a("code",null,"Lorentzian"),i(" and "),a("code",null,"JacobianSpectrum"),i(".")],-1)),a("details",y,[a("summary",null,[s[13]||(s[13]=a("a",{id:"HarmonicBalance.LinearResponse.get_jacobian_response-manual-linear_response",href:"#HarmonicBalance.LinearResponse.get_jacobian_response-manual-linear_response"},[a("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.get_jacobian_response")],-1)),s[14]||(s[14]=i()),t(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[15]||(s[15]=e("",7))]),a("details",b,[a("summary",null,[s[16]||(s[16]=a("a",{id:"HarmonicBalance.LinearResponse.JacobianSpectrum-manual-linear_response",href:"#HarmonicBalance.LinearResponse.JacobianSpectrum-manual-linear_response"},[a("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.JacobianSpectrum")],-1)),s[17]||(s[17]=i()),t(n,{type:"info",class:"jlObjectType jlType",text:"Type"})]),s[18]||(s[18]=e("",7))]),a("details",f,[a("summary",null,[s[19]||(s[19]=a("a",{id:"HarmonicBalance.LinearResponse.Lorentzian-manual-linear_response",href:"#HarmonicBalance.LinearResponse.Lorentzian-manual-linear_response"},[a("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.Lorentzian")],-1)),s[20]||(s[20]=i()),t(n,{type:"info",class:"jlObjectType jlType",text:"Type"})]),s[21]||(s[21]=e("",5))]),s[58]||(s[58]=a("h3",{id:"Higher-orders",tabindex:"-1"},[i("Higher orders "),a("a",{class:"header-anchor",href:"#Higher-orders","aria-label":'Permalink to "Higher orders {#Higher-orders}"'},"​")],-1)),s[59]||(s[59]=a("p",null,[i("Setting "),a("code",null,"order > 1"),i(" increases the accuracy of the response spectra. However, unlike for the Jacobian, here we must perform a matrix inversion for each response frequency.")],-1)),a("details",_,[a("summary",null,[s[22]||(s[22]=a("a",{id:"HarmonicBalance.LinearResponse.get_linear_response-manual-linear_response",href:"#HarmonicBalance.LinearResponse.get_linear_response-manual-linear_response"},[a("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.get_linear_response")],-1)),s[23]||(s[23]=i()),t(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[24]||(s[24]=e("",7))]),a("details",T,[a("summary",null,[s[25]||(s[25]=a("a",{id:"HarmonicBalance.LinearResponse.ResponseMatrix-manual-linear_response",href:"#HarmonicBalance.LinearResponse.ResponseMatrix-manual-linear_response"},[a("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.ResponseMatrix")],-1)),s[26]||(s[26]=i()),t(n,{type:"info",class:"jlObjectType jlType",text:"Type"})]),s[27]||(s[27]=e("",5))]),a("details",F,[a("summary",null,[s[28]||(s[28]=a("a",{id:"HarmonicBalance.LinearResponse.get_response-manual-linear_response",href:"#HarmonicBalance.LinearResponse.get_response-manual-linear_response"},[a("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.get_response")],-1)),s[29]||(s[29]=i()),t(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[30]||(s[30]=e("",3))]),a("details",v,[a("summary",null,[s[31]||(s[31]=a("a",{id:"HarmonicBalance.LinearResponse.get_response_matrix-manual-linear_response",href:"#HarmonicBalance.LinearResponse.get_response_matrix-manual-linear_response"},[a("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.get_response_matrix")],-1)),s[32]||(s[32]=i()),t(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[33]||(s[33]=e("",3))]),s[60]||(s[60]=a("h2",{id:"Rotating-frame",tabindex:"-1"},[i("Rotating frame "),a("a",{class:"header-anchor",href:"#Rotating-frame","aria-label":'Permalink to "Rotating frame {#Rotating-frame}"'},"​")],-1)),a("details",C,[a("summary",null,[s[34]||(s[34]=a("a",{id:"HarmonicBalance.LinearResponse.eigenvalues-manual-linear_response",href:"#HarmonicBalance.LinearResponse.eigenvalues-manual-linear_response"},[a("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.eigenvalues")],-1)),s[35]||(s[35]=i()),t(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[36]||(s[36]=e("",9))]),a("details",j,[a("summary",null,[s[37]||(s[37]=a("a",{id:"HarmonicBalance.LinearResponse.eigenvectors-manual-linear_response",href:"#HarmonicBalance.LinearResponse.eigenvectors-manual-linear_response"},[a("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.eigenvectors")],-1)),s[38]||(s[38]=i()),t(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[39]||(s[39]=e("",9))]),a("details",x,[a("summary",null,[s[40]||(s[40]=a("a",{id:"HarmonicBalance.LinearResponse.get_rotframe_jacobian_response-manual-linear_response",href:"#HarmonicBalance.LinearResponse.get_rotframe_jacobian_response-manual-linear_response"},[a("span",{class:"jlbinding"},"HarmonicBalance.LinearResponse.get_rotframe_jacobian_response")],-1)),s[41]||(s[41]=i()),t(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[42]||(s[42]=e("",7))]),s[61]||(s[61]=a("h2",{id:"plotting",tabindex:"-1"},[i("Plotting "),a("a",{class:"header-anchor",href:"#plotting","aria-label":'Permalink to "Plotting"'},"​")],-1)),a("details",B,[a("summary",null,[s[43]||(s[43]=a("a",{id:"HarmonicBalance.plot_linear_response-manual-linear_response",href:"#HarmonicBalance.plot_linear_response-manual-linear_response"},[a("span",{class:"jlbinding"},"HarmonicBalance.plot_linear_response")],-1)),s[44]||(s[44]=i()),t(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[45]||(s[45]=e("",14))]),a("details",H,[a("summary",null,[s[46]||(s[46]=a("a",{id:"HarmonicBalance.plot_rotframe_jacobian_response-manual-linear_response",href:"#HarmonicBalance.plot_rotframe_jacobian_response-manual-linear_response"},[a("span",{class:"jlbinding"},"HarmonicBalance.plot_rotframe_jacobian_response")],-1)),s[47]||(s[47]=i()),t(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[48]||(s[48]=e("",9))]),a("details",A,[a("summary",null,[s[49]||(s[49]=a("a",{id:"HarmonicBalance.plot_eigenvalues-manual-linear_response",href:"#HarmonicBalance.plot_eigenvalues-manual-linear_response"},[a("span",{class:"jlbinding"},"HarmonicBalance.plot_eigenvalues")],-1)),s[50]||(s[50]=i()),t(n,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[51]||(s[51]=e("",9))])])}const N=o(h,[["render",w]]);export{P as __pageData,N as default};
