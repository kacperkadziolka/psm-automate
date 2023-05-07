import{T as w}from"./TopBar-eb754442.js";import{r as g,f as v,l as y,g as P,t as k,d as D,e as $,h as B}from"./index-d832c1e0.js";import{_ as m,w as S,i as x,o as r,c as i,a as t,t as u,F as C,r as I,f as b,g as _,e as f,h,j as M}from"./main-3051ef7f.js";const T={name:"PhotosPopup",props:{showPopup:{type:Boolean,default:!1},reg_number:String},data(){return{photos:[]}},methods:{closePopup(){this.$emit("close-popup")}},async created(){try{const o=g(v,`cars/${this.reg_number}`);(await y(o)).items.forEach(async s=>{const d=await P(s);this.photos.push({url:d})})}catch(o){console.error(o)}}},V={class:"popup-container"},E={class:"popup"},N={class:"photos"},R=["src"];function q(o,e,s,d,n,a){return S((r(),i("div",V,[t("div",E,[t("h2",null,"Photos of your car with registration number: "+u(s.reg_number),1),t("div",N,[(r(!0),i(C,null,I(n.photos,(c,p)=>(r(),i("img",{key:p,src:c.url},null,8,R))),128))]),t("button",{onClick:e[0]||(e[0]=(...c)=>a.closePopup&&a.closePopup(...c))},"Close")])],512)),[[x,s.showPopup]])}const L=m(T,[["render",q],["__scopeId","data-v-db2b4d7b"]]);const O={name:"CarComponentsInterval",props:{reg_number:String},computed:{oilChangeOverdue(){const o=new Date(this.lastOilChange.getTime()+this.oilChangeInterval*864e5);return new Date>o}}},j={class:"car-data"};function A(o,e,s,d,n,a){return r(),i("div",null,[t("div",j,[t("span",null,u(s.reg_number),1)])])}const F=m(O,[["render",A]]);const U={name:"CarDetails",props:{reg_number:String},components:{PhotosPopup:L,CarComponentsInterval:F},data(){return{car:null,hasPhotos:!1,showPopup:!1,photos:[]}},created(){b(async()=>{(await k(D($,"cars"))).forEach(e=>{const s=e.data();s.reg_number===this.reg_number&&(this.car=s)})}),b(async()=>{const o=g(v,`cars/${this.reg_number}`);(await y(o)).items.length>0&&(this.hasPhotos=!0)})},methods:{openModal(){const o=document.querySelector(".modal");o.style.display="block",this.video=document.getElementById("video"),navigator.mediaDevices.getUserMedia({video:!0}).then(e=>{this.mediaStream=e,this.video.srcObject=e}).catch(e=>{console.log(e)})},takePhoto(){const o=document.createElement("canvas");o.width=this.video.videoWidth,o.height=this.video.videoHeight,o.getContext("2d").drawImage(this.video,0,0),o.toBlob(async e=>{const s=g(v,`cars/${this.reg_number}/${Date.now()}.png`);await B(s,e),this.closeModal()},"image/png",1)},closeModal(){const o=document.querySelector(".modal");o.style.display="none"}}},H={class:"car-details"},W={key:0,class:"car-info"},z={class:"car-photos"},G={class:"modal"},J={class:"modal-dialog"},K={class:"modal-content"},Q=M('<div class="modal-header" data-v-761394e8><h5 class="modal-title" data-v-761394e8>Take a photo</h5><button type="button" class="hideButton" data-v-761394e8></button></div><div class="modal-body" data-v-761394e8><video id="video" width="100%" height="auto" autoplay data-v-761394e8></video></div>',2),X={class:"modal-footer"};function Y(o,e,s,d,n,a){const c=_("CarComponentsInterval"),p=_("photos-popup");return r(),i("div",H,[n.car?(r(),i("div",W,[t("h2",null,u(n.car.make)+" "+u(n.car.model),1),t("p",null,"Registration Number: "+u(n.car.reg_number),1)])):f("",!0),h(c,{reg_number:this.reg_number},null,8,["reg_number"]),t("div",z,[n.hasPhotos?(r(),i("button",{key:0,onClick:e[0]||(e[0]=l=>n.showPopup=!0)},"View Photos")):f("",!0),h(p,{"show-popup":n.showPopup,reg_number:this.reg_number,onClosePopup:e[1]||(e[1]=l=>n.showPopup=!1)},null,8,["show-popup","reg_number"]),t("button",{onClick:e[2]||(e[2]=(...l)=>a.openModal&&a.openModal(...l))},"Add Photo"),t("div",G,[t("div",J,[t("div",K,[Q,t("div",X,[t("button",{type:"button",class:"btn btn-secondary",onClick:e[3]||(e[3]=(...l)=>a.closeModal&&a.closeModal(...l))},"Close"),t("button",{type:"button",class:"btn btn-primary",onClick:e[4]||(e[4]=(...l)=>a.takePhoto&&a.takePhoto(...l))},"Take Photo")])])])])])])}const Z=m(U,[["render",Y],["__scopeId","data-v-761394e8"]]),ee={name:"CarDetailsView",components:{TopBar:w,CarDetails:Z}};function oe(o,e,s,d,n,a){const c=_("TopBar"),p=_("CarDetails");return r(),i(C,null,[h(c),h(p,{reg_number:this.$route.params.reg_number},null,8,["reg_number"])],64)}const ae=m(ee,[["render",oe]]);export{ae as default};
//# sourceMappingURL=CarDetailsView-1e662c2c.js.map
