import{T as h}from"./TopBar-06a1f31c.js";import{t as f,d as g,e as v}from"./index-d832c1e0.js";import{_ as p,f as $,o as a,c as n,a as t,F as y,r as C,t as r,g as _,h as l}from"./main-728323e8.js";const w={name:"CarList",data(){return{cars:[]}},created(){$(async()=>{(await f(g(v,"cars"))).forEach(s=>{console.log(s.id," => ",s.data()),this.cars.push(s.data())})})},methods:{openDetailView(o){console.log("test"),this.$router.push({name:"CarDetailsView",params:{reg_number:o.reg_number}})}}},x={class:"container-fluid"},V={class:"row"},k={class:"card m-3 car-container"},B=["onClick"],L={class:"card-title"},b={class:"card-text"};function D(o,s,m,u,c,i){return a(),n("div",x,[t("div",V,[(a(!0),n(y,null,C(c.cars,e=>(a(),n("div",{class:"col-sm-6 col-md-4 col-lg-3",key:e.id},[t("div",k,[t("div",{class:"card-body",style:{flex:"2",padding:"1rem"},onClick:d=>i.openDetailView(e)},[t("h5",L,r(e.make)+" "+r(e.model),1),t("p",b,r(e.reg_number),1)],8,B)])]))),128))])])}const T=p(w,[["render",D],["__scopeId","data-v-3de262de"]]),S={name:"HomeView",components:{TopBar:h,CarList:T}};function q(o,s,m,u,c,i){const e=_("TopBar"),d=_("CarList");return a(),n("div",null,[l(e),l(d)])}const N=p(S,[["render",q]]);export{N as default};
//# sourceMappingURL=HomeView-0361b201.js.map
