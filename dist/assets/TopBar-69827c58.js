import{_ as h,g as _,o as d,c,a as e,h as u,k as b,l as i,n as p,e as m,p as f,d as g}from"./index-5733d2b7.js";const v={name:"TopBar",data(){return{showSidebar:!1}},methods:{redirectToMechanicsPage(r){r==="maps"?this.$router.push("/maps"):r==="fuel"&&this.$router.push("/fuel")},redirectToMaintenancePage(){this.$router.push("/maintenance")},redirectToAuthorsPage(){this.$router.push("/authors")},redirectToMaintenancePage(){this.$router.push("/home")},redirectToPhonePage(){this.$router.push("/phone")},redirectToAddNewCar(){this.$router.push("/newcar")}}},a=r=>(f("data-v-4dc273ef"),r=r(),g(),r),T={class:"navbar navbar-light bg-light m-3"},C=a(()=>e("span",{class:"navbar-toggler-icon"},null,-1)),P=[C],k=a(()=>e("i",{class:"bi bi-house-door-fill me-2"},null,-1)),w=a(()=>e("i",{type:"button",class:"bi bi-plus-lg mx-4 size-adjust"},null,-1)),S={class:"sidebar-header"},x=a(()=>e("i",{class:"bi bi-tools me-2"},null,-1)),M=a(()=>e("i",{class:"bi bi-fuel-pump-fill me-2"},null,-1)),y=a(()=>e("i",{class:"bi bi-geo-alt-fill me-2"},null,-1)),B=a(()=>e("i",{class:"bi bi-telephone-fill me-2"},null,-1)),A=a(()=>e("i",{class:"bi bi-person-fill me-2"},null,-1));function N(r,s,I,V,n,o){const l=_("router-link");return d(),c("div",null,[e("nav",T,[e("button",{class:"navbar-toggler ms-4 m-2",type:"button",onClick:s[0]||(s[0]=t=>n.showSidebar=!n.showSidebar),"aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},P),u(l,{to:"/Home",class:"navbar-brand mx-auto title-adjust"},{default:b(()=>[k,i("Home ")]),_:1}),u(l,{to:"/newcar"},{default:b(()=>[w]),_:1})]),e("div",{class:p(["sidebar",{"sidebar--visible":n.showSidebar}])},[e("div",S,[e("button",{class:"close-button",onClick:s[1]||(s[1]=t=>n.showSidebar=!1)},"×")]),e("button",{class:"sidebar__button",onClick:s[2]||(s[2]=(...t)=>o.redirectToMaintenancePage&&o.redirectToMaintenancePage(...t))},[x,i(" Maintenance ")]),e("button",{class:"sidebar__button",onClick:s[3]||(s[3]=t=>o.redirectToMechanicsPage("fuel"))},[M,i(" Calculate fuel ")]),e("button",{class:"sidebar__button",onClick:s[4]||(s[4]=t=>o.redirectToMechanicsPage("maps"))},[y,i(" Mechanics near me ")]),e("button",{class:"sidebar__button",onClick:s[5]||(s[5]=(...t)=>o.redirectToPhonePage&&o.redirectToPhonePage(...t))},[B,i(" Call for road help ")]),e("button",{class:"sidebar__button",onClick:s[6]||(s[6]=(...t)=>o.redirectToAuthorsPage&&o.redirectToAuthorsPage(...t))},[A,i(" Authors ")])],2),n.showSidebar?(d(),c("div",{key:0,class:"overlay",onClick:s[7]||(s[7]=t=>n.showSidebar=!1)})):m("",!0)])}const z=h(v,[["render",N],["__scopeId","data-v-4dc273ef"]]);export{z as T};
