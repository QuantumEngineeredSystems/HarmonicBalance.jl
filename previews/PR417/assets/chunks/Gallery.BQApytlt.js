import{d as r,c as t,o as a,j as s,k as l,g as p,t as o,_ as c,F as d,B as h,b as m,K as u}from"./framework.CbCs-WwH.js";const f={class:"img-box"},g=["href"],v=["src"],y={class:"transparent-box1"},B={class:"caption"},b={class:"transparent-box2"},G={class:"subcaption"},k={class:"opacity-low"},I=r({__name:"GalleryImage",props:{href:{},src:{},caption:{},desc:{}},setup(n){return(e,_)=>(a(),t("div",f,[s("a",{href:e.href},[s("img",{src:l(p)(e.src),height:"150px",alt:""},null,8,v),s("div",y,[s("div",B,[s("h3",null,o(e.caption),1)])]),s("div",b,[s("div",G,[s("p",k,o(e.desc),1)])])],8,g)]))}}),x=c(I,[["__scopeId","data-v-7654366a"]]),w={class:"gallery-image"},F=r({__name:"Gallery",props:{images:{}},setup(n){return(e,_)=>(a(),t("div",w,[(a(!0),t(d,null,h(e.images,i=>(a(),m(x,u({ref_for:!0},i),null,16))),256))]))}}),j=c(F,[["__scopeId","data-v-68744f5e"]]);export{j as G};
