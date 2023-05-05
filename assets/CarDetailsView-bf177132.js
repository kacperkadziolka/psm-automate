import{T as w}from"./TopBar-69827c58.js";import{r as g,f as v,l as y,g as P,t as k,d as D,e as $,h as B}from"./index-d832c1e0.js";import{_ as m,w as S,i as x,o as r,c,a as t,t as u,F as C,r as I,f,g as _,e as b,h,j as M}from"./index-5733d2b7.js";const T={name:"PhotosPopup",props:{showPopup:{type:Boolean,default:!1},reg_number:String},data(){return{photos:[]}},methods:{closePopup(){this.$emit("close-popup")}},async created(){try{const o=g(v,`cars/${this.reg_number}`);(await y(o)).items.forEach(async s=>{const d=await P(s);this.photos.push({url:d})})}catch(o){console.error(o)}}},V={class:"popup-container"},E={class:"popup"},N={class:"photos"},R=["src"];function q(o,e,s,d,a,n){return S((r(),c("div",V,[t("div",E,[t("h2",null,"Photos of your car with registration number: "+u(s.reg_number),1),t("div",N,[(r(!0),c(C,null,I(a.photos,(i,p)=>(r(),c("img",{key:p,src:i.url},null,8,R))),128))]),t("button",{onClick:e[0]||(e[0]=(...i)=>n.closePopup&&n.closePopup(...i))},"Close")])],512)),[[x,s.showPopup]])}const L=m(T,[["render",q],["__scopeId","data-v-0628401d"]]);const O={name:"CarComponentsInterval",props:{reg_number:String},computed:{oilChangeOverdue(){const o=new Date(this.lastOilChange.getTime()+this.oilChangeInterval*864e5);return new Date>o}}},j={class:"car-data"};function A(o,e,s,d,a,n){return r(),c("div",null,[t("div",j,[t("span",null,u(s.reg_number),1)])])}const F=m(O,[["render",A]]);const U={name:"CarDetails",props:{reg_number:String},components:{PhotosPopup:L,CarComponentsInterval:F},data(){return{car:null,hasPhotos:!1,showPopup:!1,photos:[]}},created(){f(async()=>{(await k(D($,"cars"))).forEach(e=>{const s=e.data();s.reg_number===this.reg_number&&(this.car=s)})}),f(async()=>{const o=g(v,`cars/${this.reg_number}`);(await y(o)).items.length>0&&(this.hasPhotos=!0)})},methods:{openModal(){const o=document.querySelector(".modal");o.style.display="block",this.video=document.getElementById("video"),navigator.mediaDevices.getUserMedia({video:!0}).then(e=>{this.mediaStream=e,this.video.srcObject=e}).catch(e=>{console.log(e)})},takePhoto(){const o=document.createElement("canvas");o.width=this.video.videoWidth,o.height=this.video.videoHeight,o.getContext("2d").drawImage(this.video,0,0),o.toBlob(async e=>{const s=g(v,`cars/${this.reg_number}/${Date.now()}.png`);await B(s,e),this.closeModal()},"image/png",1)},closeModal(){const o=document.querySelector(".modal");o.style.display="none"}}},H={class:"car-details"},W={key:0,class:"car-info"},z={class:"car-photos"},G={class:"modal"},J={class:"modal-dialog"},K={class:"modal-content"},Q=M('<div class="modal-header" data-v-38f7c20a><h5 class="modal-title" data-v-38f7c20a>Take a photo</h5><button type="button" class="hideButton" data-v-38f7c20a></button></div><div class="modal-body" data-v-38f7c20a><video id="video" width="100%" height="auto" autoplay data-v-38f7c20a></video></div>',2),X={class:"modal-footer"};function Y(o,e,s,d,a,n){const i=_("CarComponentsInterval"),p=_("photos-popup");return r(),c("div",H,[a.car?(r(),c("div",W,[t("h2",null,u(a.car.make)+" "+u(a.car.model),1),t("p",null,"Registration Number: "+u(a.car.reg_number),1)])):b("",!0),h(i,{reg_number:this.reg_number},null,8,["reg_number"]),t("div",z,[a.hasPhotos?(r(),c("button",{key:0,onClick:e[0]||(e[0]=l=>a.showPopup=!0)},"View Photos")):b("",!0),h(p,{"show-popup":a.showPopup,reg_number:this.reg_number,onClosePopup:e[1]||(e[1]=l=>a.showPopup=!1)},null,8,["show-popup","reg_number"]),t("button",{onClick:e[2]||(e[2]=(...l)=>n.openModal&&n.openModal(...l))},"Add Photo"),t("div",G,[t("div",J,[t("div",K,[Q,t("div",X,[t("button",{type:"button",class:"btn btn-secondary",onClick:e[3]||(e[3]=(...l)=>n.closeModal&&n.closeModal(...l))},"Close"),t("button",{type:"button",class:"btn btn-primary",onClick:e[4]||(e[4]=(...l)=>n.takePhoto&&n.takePhoto(...l))},"Take Photo")])])])])])])}const Z=m(U,[["render",Y],["__scopeId","data-v-38f7c20a"]]),ee={name:"CarDetailsView",components:{TopBar:w,CarDetails:Z}};function oe(o,e,s,d,a,n){const i=_("TopBar"),p=_("CarDetails");return r(),c(C,null,[h(i),h(p,{reg_number:this.$route.params.reg_number},null,8,["reg_number"])],64)}const ne=m(ee,[["render",oe]]);export{ne as default};
