import{T as m}from"./TopBar-b1b28c9d.js";import{u,d as p,e as c}from"./index-aed13327.js";import{_,g as b,o as w,c as h,h as f,a as e,w as d,v as n,b as N,F as v,p as g,d as k}from"./index-f8af5991.js";const y={name:"AddNewCarView",components:{TopBar:m},data(){return{make:"",password:"",registrationNumber:""}},methods:{async addNewCar(){try{const t=u(p(c,"cars"),{make:this.make,model:this.model,reg_number:this.registrationNumber});this.$router.push({name:"home"})}catch(t){console.error("Error adding document: ",t)}}}},s=t=>(g("data-v-801b7d4a"),t=t(),k(),t),V=s(()=>e("h1",{class:"header"},"Add new car details:",-1)),C=s(()=>e("label",null,"Make:",-1)),x=s(()=>e("label",null,"Model:",-1)),B=s(()=>e("label",null,"Registration number:",-1)),S=s(()=>e("div",{class:"submit"},[e("button",{type:"submit"},"Save")],-1));function T(t,o,A,I,a,i){const l=b("TopBar");return w(),h(v,null,[f(l),V,e("form",{onSubmit:o[3]||(o[3]=N((...r)=>i.addNewCar&&i.addNewCar(...r),["prevent"]))},[C,d(e("input",{type:"text",required:"","onUpdate:modelValue":o[0]||(o[0]=r=>a.make=r)},null,512),[[n,a.make]]),x,d(e("input",{type:"text",required:"","onUpdate:modelValue":o[1]||(o[1]=r=>t.model=r)},null,512),[[n,t.model]]),B,d(e("input",{type:"text",required:"","onUpdate:modelValue":o[2]||(o[2]=r=>a.registrationNumber=r)},null,512),[[n,a.registrationNumber]]),S],32)],64)}const E=_(y,[["render",T],["__scopeId","data-v-801b7d4a"]]);export{E as default};