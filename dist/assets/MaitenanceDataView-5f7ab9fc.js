import{T as u}from"./TopBar-6cb25709.js";import{u as p,d as _,e as h,n as D}from"./index-fde5c017.js";import{_ as b,g as f,o as v,c as g,h as T,a as e,b as y,w as r,v as i,F as M,p as w,d as V}from"./index-111156f4.js";const k={name:"MaitenanceDataView",components:{TopBar:u},props:{reg_number:String},data(){return{motorOilDate:"",coolantFluidDate:"",brakPadsDate:"",overallConditionDate:""}},methods:{async addMaitenanceData(){try{const o=p(_(h,"maitenance"),{reg_number:this.reg_number,motor_oil:this.htmlDateToTimestamp(this.motorOilDate),coolant_fluid:this.htmlDateToTimestamp(this.coolantFluidDate),brake_pads:this.htmlDateToTimestamp(this.brakePadsDate),overall_condition:this.htmlDateToTimestamp(this.overallConditionDate)});console.log("Successfully added maitenance data:"),this.$router.push({name:"CarDetailsView",params:{reg_number:this.reg_number}})}catch(o){console.error("Error adding document: ",o)}},htmlDateToTimestamp(o){const t=new Date(o),l=Math.floor(t.getTime()/1e3),d=t.getMilliseconds()*1e6;return new D(l,d)}}},s=o=>(w("data-v-cab8b3e0"),o=o(),V(),o),B={class:"container"},C=s(()=>e("h1",{class:"header mt-4 mb-3"},"Add the maitenance intervals:",-1)),F={class:"form-group"},O=s(()=>e("label",null,"Motor oil and filters:",-1)),S={class:"form-group"},x=s(()=>e("label",null,"Coolant fluid:",-1)),q={class:"form-group"},I=s(()=>e("label",null,"Braking system:",-1)),P={class:"form-group"},U=s(()=>e("label",null,"Overal maitenance:",-1)),A=s(()=>e("button",{type:"submit",class:"btn btn-primary mt-3"},"Add Maintenance Data",-1));function E(o,t,l,d,n,c){const m=f("TopBar");return v(),g(M,null,[T(m),e("div",B,[C,e("form",{onSubmit:t[4]||(t[4]=y((...a)=>c.addMaitenanceData&&c.addMaitenanceData(...a),["prevent"]))},[e("div",F,[O,r(e("input",{type:"date",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=a=>n.motorOilDate=a),required:""},null,512),[[i,n.motorOilDate]])]),e("div",S,[x,r(e("input",{type:"date",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=a=>n.coolantFluidDate=a),required:""},null,512),[[i,n.coolantFluidDate]])]),e("div",q,[I,r(e("input",{type:"date",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=a=>n.brakPadsDate=a),required:""},null,512),[[i,n.brakPadsDate]])]),e("div",P,[U,r(e("input",{type:"date",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=a=>n.overallConditionDate=a),required:""},null,512),[[i,n.overallConditionDate]])]),A],32)])],64)}const z=b(k,[["render",E],["__scopeId","data-v-cab8b3e0"]]);export{z as default};