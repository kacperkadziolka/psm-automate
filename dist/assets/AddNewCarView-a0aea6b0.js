import{T as m}from"./TopBar-bc4ad5fd.js";import{u,d as p,e as c}from"./index-d832c1e0.js";import{_,c as w,g as b,a as t,w as d,v as n,b as h,F as g,o as N,p as f,d as v,h as y}from"./index-593a8215.js";const k={name:"AddNewCarView",components:{TopBar:m},data(){return{make:"",password:"",registrationNumber:""}},methods:{async addNewCar(){console.log("tryingToAddNewCar");try{const e=u(p(c,"cars"),{make:this.make,model:this.model,reg_number:this.registrationNumber});console.log("Document written with ID: ",e.id),this.$router.push({name:"home"})}catch(e){console.error("Error adding document: ",e)}}}},s=e=>(f("data-v-7d6a3d4e"),e=e(),v(),e),C=s(()=>t("h1",{class:"header"},"Add new car details:",-1)),V=s(()=>t("label",null,"Make:",-1)),x=s(()=>t("label",null,"Model:",-1)),B=s(()=>t("label",null,"Registration number:",-1)),T=s(()=>t("div",{class:"submit"},[t("button",{type:"submit"},"Save")],-1));function A(e,o,I,S,a,i){const l=y("TopBar");return N(),w(g,null,[b(l),C,t("form",{onSubmit:o[3]||(o[3]=h((...r)=>i.addNewCar&&i.addNewCar(...r),["prevent"]))},[V,d(t("input",{type:"text",required:"","onUpdate:modelValue":o[0]||(o[0]=r=>a.make=r)},null,512),[[n,a.make]]),x,d(t("input",{type:"text",required:"","onUpdate:modelValue":o[1]||(o[1]=r=>e.model=r)},null,512),[[n,e.model]]),B,d(t("input",{type:"text",required:"","onUpdate:modelValue":o[2]||(o[2]=r=>a.registrationNumber=r)},null,512),[[n,a.registrationNumber]]),T],32)],64)}const U=_(k,[["render",A],["__scopeId","data-v-7d6a3d4e"]]);export{U as default};