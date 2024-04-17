import{_ as V,o as d,c as m,g as a,w as l,i as o,j as f,k as M,l as c,m as p,b as i,t as _,v as g,e as w,F as k,q as x,s as T,r as U,f as q,u as y}from"./index.770217b7.js";import{s as O}from"./Services.3f0d6fd4.js";import{V as S}from"./VForm.01680541.js";import{V as n}from"./VTextField.0cf7855a.js";import{V as P}from"./VSelect.3ff61124.js";import{V as C}from"./VSnackbar.3a934a07.js";import{V as F,a as N,b as z,c as I}from"./VWindowItem.1716d9b0.js";import"./VCheckboxBtn.14d938c2.js";import"./VChip.0d58c467.js";const D={mixins:[O],data(){return{snackbar:!1,snackbarText:"",timeout:6e3,color:"",top:!1,bottom:!0,left:!1,right:!1,salesdata:[],userid:"",dialog:!1,saveMerchant:{merchant_uid:"",merchant_name:"",store_address:"",gst:"",area_pincode:"",poc_name:"",poc_phone:"",owner_name:"",owner_phone:"",shop_size:"",shop_type:"",location:"",created_by:"",sales_person:""},storerules:[s=>!!s||"Store Address is required"],uidrules:[s=>!!s||"UID is required"],namerules:[s=>!!s||"Name is required"],gstrules:[s=>!!s||"GST is required"],pinrules:[s=>!!s||"PIN is required",s=>s&&/^\d{6}$/.test(s)||"PIN must be 6 digits"],phonerules:[s=>!!s||" Mobile  is required",s=>/^[0-9]+$/.test(s)||"only number are accepted",s=>s&&s.length<=10&&s.length>=10||"Mobile must be  10 number"]}},mounted(){this.getAllsales(),this.userid=localStorage.getItem("user_id")},methods:{validateForm(){this.$refs.purchaseOrderForm.validate().then(s=>{s.valid==!0?this.saveMerchants():(this.snackbar=!0,this.snackbarText="Please give all mandatory fields",this.color="on-background")})},saveMerchants(){const s={merchant_uid:this.saveMerchant.merchant_uid,merchant_name:this.saveMerchant.merchant_name,store_address:this.saveMerchant.store_address,gst:this.saveMerchant.gst,area_pincode:this.saveMerchant.area_pincode,poc_name:this.saveMerchant.poc_name,poc_phone:this.saveMerchant.poc_phone,owner_name:this.saveMerchant.owner_name,owner_phone:this.saveMerchant.owner_phone,shop_size:this.saveMerchant.shop_size,shop_type:this.saveMerchant.shop_type,location:this.saveMerchant.location,created_by:this.userid,sales_person:this.saveMerchant.sales_person};this.addOnboardmerchant(s).then(e=>{console.log("resp",e),e.data.status==1?(this.snackbarText=e.data.message,this.color="primary",this.snackbar=!0,this.saveMerchant={}):(this.snackbarText=e.data.message,this.color="on-background",this.snackbar=!0)})},getAllsales(){this.getsalesperson().then(s=>{this.salesdata=s.data.data,this.salesdata=this.salesdata.map(e=>({value:e.user_id,text:e.name})),console.log("sales",this.salesdata)})},deleteRow(s){const e=this.data.indexOf(s);e!==-1&&this.data.splice(e,1)},openproductdialog(){this.dialog=!0},closeDialog(){this.dialog=!1}}};function A(s,e,v,b,r,h){return d(),m("div",null,[a(c,null,{default:l(()=>[a(o,{cols:"12"},{default:l(()=>[a(f,{title:"Onboard Merchant",class:"mb-4"},{default:l(()=>[a(M,null,{default:l(()=>[a(S,{class:"mt-6",ref:"purchaseOrderForm"},{default:l(()=>[a(c,null,{default:l(()=>[a(o,{cols:"12",md:"6"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.merchant_uid,"onUpdate:modelValue":e[0]||(e[0]=t=>this.saveMerchant.merchant_uid=t),label:"Merchant UID",rules:r.uidrules,required:""},null,8,["modelValue","rules"])]),_:1}),a(o,{cols:"12",md:"6"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.merchant_name,"onUpdate:modelValue":e[1]||(e[1]=t=>this.saveMerchant.merchant_name=t),label:"Merchant Name",rules:r.namerules,required:""},null,8,["modelValue","rules"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.gst,"onUpdate:modelValue":e[2]||(e[2]=t=>this.saveMerchant.gst=t),label:"GST",rules:r.gstrules,required:""},null,8,["modelValue","rules"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.area_pincode,"onUpdate:modelValue":e[3]||(e[3]=t=>this.saveMerchant.area_pincode=t),label:"Area Pincode",rules:r.pinrules,required:""},null,8,["modelValue","rules"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.owner_name,"onUpdate:modelValue":e[4]||(e[4]=t=>this.saveMerchant.owner_name=t),label:"Owner Name",rules:r.namerules,required:""},null,8,["modelValue","rules"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.owner_phone,"onUpdate:modelValue":e[5]||(e[5]=t=>this.saveMerchant.owner_phone=t),label:"Owner Phone",rules:r.phonerules,required:""},null,8,["modelValue","rules"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.poc_name,"onUpdate:modelValue":e[6]||(e[6]=t=>this.saveMerchant.poc_name=t),label:"POC Name",rules:r.namerules,required:""},null,8,["modelValue","rules"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.poc_phone,"onUpdate:modelValue":e[7]||(e[7]=t=>this.saveMerchant.poc_phone=t),label:"POC Phone",rules:r.phonerules,required:""},null,8,["modelValue","rules"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.shop_size,"onUpdate:modelValue":e[8]||(e[8]=t=>this.saveMerchant.shop_size=t),label:"Shop Size"},null,8,["modelValue"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.shop_type,"onUpdate:modelValue":e[9]||(e[9]=t=>this.saveMerchant.shop_type=t),label:"Shop Type"},null,8,["modelValue"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.location,"onUpdate:modelValue":e[10]||(e[10]=t=>this.saveMerchant.location=t),label:"Location"},null,8,["modelValue"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(P,{modelValue:this.saveMerchant.sales_person,"onUpdate:modelValue":e[11]||(e[11]=t=>this.saveMerchant.sales_person=t),label:"Sales Person",items:this.salesdata,"item-value":"value","item-title":"text",rules:r.namerules,required:""},null,8,["modelValue","items","rules"])]),_:1}),a(o,{cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.store_address,"onUpdate:modelValue":e[12]||(e[12]=t=>this.saveMerchant.store_address=t),label:"Store Address",rules:r.storerules},null,8,["modelValue","rules"])]),_:1}),a(o,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[a(p,{onClick:e[13]||(e[13]=t=>h.validateForm())},{default:l(()=>[i("Save")]),_:1}),a(p,{color:"secondary",variant:"tonal",type:"reset"},{default:l(()=>[i(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1}),a(C,{modelValue:r.snackbar,"onUpdate:modelValue":e[14]||(e[14]=t=>r.snackbar=t),timeout:3500,color:r.color},{default:l(()=>[i(_(r.snackbarText),1)]),_:1},8,["modelValue","color"])])}const B=V(D,[["render",A]]),R={components:{Onboardmerchantdetails:B},data(){return{currentroute:"",activeTab:"",tabs:[{title:"View Brand",icon:"mdi-account-outline",tab:"account"}]}},mounted(){this.currentroute=g(),this.activeTab=w(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function G(s,e,v,b,r,h){const t=U("Onboardmerchantdetails");return d(),m("div",null,[a(F,{modelValue:r.activeTab,"onUpdate:modelValue":e[0]||(e[0]=u=>r.activeTab=u),"show-arrows":""},{default:l(()=>[(d(!0),m(k,null,x(r.tabs,u=>(d(),q(I,{key:u.icon,value:u.tab},{default:l(()=>[a(y,{size:"20",start:"",icon:u.icon},null,8,["icon"]),i(" "+_(u.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),a(T),a(z,{modelValue:r.activeTab,"onUpdate:modelValue":e[1]||(e[1]=u=>r.activeTab=u),class:"mt-5 disable-tab-transition",touch:!1},{default:l(()=>[a(N,{value:"account"},{default:l(()=>[a(t)]),_:1})]),_:1},8,["modelValue"])])}const Y=V(R,[["render",G]]);export{Y as default};
