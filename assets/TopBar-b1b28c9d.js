import{_,g as p,o as d,c as b,a as e,h as u,k as c,l as n,n as m,e as v,p as h,d as f}from"./index-f8af5991.js";const g={name:"TopBar",data(){return{showSidebar:!1}},methods:{redirectToPage(a){this.$router.push(a)}}},t=a=>(h("data-v-c336ed98"),a=a(),f(),a),C={class:"navbar navbar-light bg-light m-3"},k=t(()=>e("span",{class:"navbar-toggler-icon"},null,-1)),T=[k],S=t(()=>e("i",{class:"bi bi-house-door-fill me-2"},null,-1)),w=t(()=>e("i",{type:"button",class:"bi bi-plus-lg mx-4 size-adjust"},null,-1)),x={class:"sidebar-header"},y=t(()=>e("i",{class:"bi bi-tools me-2"},null,-1)),B=t(()=>e("i",{class:"bi bi-fuel-pump-fill me-2"},null,-1)),P=t(()=>e("i",{class:"bi bi-geo-alt-fill me-2"},null,-1)),I=t(()=>e("i",{class:"bi bi-telephone-fill me-2"},null,-1)),N=t(()=>e("i",{class:"bi bi-person-fill me-2"},null,-1));function V(a,s,j,z,l,i){const r=p("router-link");return d(),b("div",null,[e("nav",C,[e("button",{class:"navbar-toggler ms-4 m-2",type:"button",onClick:s[0]||(s[0]=o=>l.showSidebar=!l.showSidebar),"aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},T),u(r,{to:"/Home",class:"navbar-brand mx-auto title-adjust"},{default:c(()=>[S,n("Home ")]),_:1}),u(r,{to:"/newcar"},{default:c(()=>[w]),_:1})]),e("div",{class:m(["sidebar",{"sidebar--visible":l.showSidebar}])},[e("div",x,[e("button",{class:"close-button",onClick:s[1]||(s[1]=o=>l.showSidebar=!1)},"×")]),e("button",{class:"sidebar__button",onClick:s[2]||(s[2]=o=>i.redirectToPage("/home"))},[y,n(" Maintenance ")]),e("button",{class:"sidebar__button",onClick:s[3]||(s[3]=o=>i.redirectToPage("/fuel"))},[B,n(" Calculate fuel ")]),e("button",{class:"sidebar__button",onClick:s[4]||(s[4]=o=>i.redirectToPage("/maps"))},[P,n(" Mechanics near me ")]),e("button",{class:"sidebar__button",onClick:s[5]||(s[5]=o=>i.redirectToPage("/phone"))},[I,n(" Call for road help ")]),e("button",{class:"sidebar__button",onClick:s[6]||(s[6]=o=>i.redirectToPage("/authors"))},[N,n(" Authors ")])],2),l.showSidebar?(d(),b("div",{key:0,class:"overlay",onClick:s[7]||(s[7]=o=>l.showSidebar=!1)})):v("",!0)])}const M=_(g,[["render",V],["__scopeId","data-v-c336ed98"]]);export{M as T};