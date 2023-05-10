import{T as d}from"./TopBar-6cb25709.js";import{_ as m,g as f,o as r,c as i,a as e,h as v,w as n,v as o,b as _,t as a,e as p,F as h}from"./index-111156f4.js";const b={name:"FuelConsumptionCalculator",components:{TopBar:d},data(){return{distanceDriven:null,fuelConsumed:null,fuelPrice:null,averageFuelUsage:null,averageFuelCost:null}},methods:{calculateFuelUsage(){this.averageFuelUsage=(this.fuelConsumed/this.distanceDriven*100).toFixed(2),this.averageFuelCost=(this.fuelPrice*this.fuelConsumed/this.distanceDriven*100).toFixed(2),this.distanceDriven=null,this.fuelConsumed=null,this.fuelPrice=null}}},C={class:"div-container"},F={class:"container my-4"},g=e("h1",{class:"text-center mb-4"},"Fuel Consumption Calculator",-1),D={class:"mb-3"},U=e("label",{for:"distanceDriven",class:"form-label"},"Distance Driven (km)",-1),P={class:"mb-3"},y=e("label",{for:"fuelConsumed",class:"form-label"},"Fuel Consumed (litres)",-1),k={class:"mb-3"},x=e("label",{for:"fuelPrice",class:"form-label"},"Price of Fuel (PLN/litre)",-1),V={key:0},B=e("hr",null,null,-1),N=e("h3",null,"Average Fuel Usage:",-1),T=e("hr",null,null,-1),w=e("h3",null,"Average Fuel Cost:",-1);function q(A,s,L,M,l,u){const c=f("TopBar");return r(),i(h,null,[e("div",C,[v(c)]),e("div",F,[g,e("form",null,[e("div",D,[U,n(e("input",{type:"number",class:"form-control",id:"distanceDriven","onUpdate:modelValue":s[0]||(s[0]=t=>l.distanceDriven=t),required:""},null,512),[[o,l.distanceDriven,void 0,{number:!0}]])]),e("div",P,[y,n(e("input",{type:"number",class:"form-control",id:"fuelConsumed","onUpdate:modelValue":s[1]||(s[1]=t=>l.fuelConsumed=t),required:""},null,512),[[o,l.fuelConsumed,void 0,{number:!0}]])]),e("div",k,[x,n(e("input",{type:"number",class:"form-control",id:"fuelPrice","onUpdate:modelValue":s[2]||(s[2]=t=>l.fuelPrice=t),required:""},null,512),[[o,l.fuelPrice,void 0,{number:!0}]])]),e("button",{type:"submit",class:"btn btn-primary",onClick:s[3]||(s[3]=_((...t)=>u.calculateFuelUsage&&u.calculateFuelUsage(...t),["prevent"]))},"Calculate")]),l.averageFuelUsage?(r(),i("div",V,[B,N,e("p",null,a(l.averageFuelUsage)+" litres/100km",1),T,w,e("p",null,a(l.averageFuelCost)+" PLN/100km",1)])):p("",!0)])],64)}const j=m(b,[["render",q]]);export{j as default};