import{T as l}from"./TopBar-b1b28c9d.js";import{_ as r,g as _,o as d,c as i,h as p,a as e,p as u,d as m}from"./index-f8af5991.js";const h={name:"Phone",components:{TopBar:l},methods:{callNumber(){window.location.href="tel:+48321321321"}}},a=o=>(u("data-v-3cf8a373"),o=o(),m(),o),f={class:"div-container"},v=a(()=>e("div",{class:"sidebar"},null,-1)),b={class:"call-container"},B=a(()=>e("p",null,"This phone number is for road assistance.",-1)),w=a(()=>e("i",null,[e("p",null,"Please note that charges may apply depending on your mobile carrier.")],-1));function y(o,s,N,T,g,t){const n=_("TopBar");return d(),i("div",f,[p(n),v,e("div",b,[B,e("button",{class:"call-button",onClick:s[0]||(s[0]=(...c)=>t.callNumber&&t.callNumber(...c))},"Call +48321321321"),w])])}const P=r(h,[["render",y],["__scopeId","data-v-3cf8a373"]]);export{P as default};