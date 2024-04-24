import{_ as V,o as u,c as m,g as a,w as l,i as o,j as f,k as M,l as c,m as p,b as i,t as v,v as g,e as w,F as k,q as x,s as T,r as U,f as q,u as y}from"./index.8231191f.js";import{s as O}from"./Services.51a388b5.js";import{V as S}from"./VForm.5023f7bf.js";import{V as n}from"./VTextField.88c661ca.js";import{V as F}from"./VSelect.db1650e9.js";import{V as L}from"./VSnackbar.feaa5578.js";import{V as I,a as N,b as P,c as z}from"./VWindowItem.5224bc07.js";import"./VCheckboxBtn.aa38394d.js";import"./VChip.5b7a064d.js";const C={mixins:[O],data(){return{snackbar:!1,snackbarText:"",timeout:6e3,color:"",top:!1,bottom:!0,left:!1,right:!1,salesdata:[],userid:"",dialog:!1,saveMerchant:{merchant_uid:"",merchant_name:"",store_address:"",gst:"",area_pincode:"",poc_name:"",poc_phone:"",owner_name:"",owner_phone:"",shop_size:"",shop_type:"",location:"",created_by:"",sales_person:"",longitude:"",latitude:""},Logitude:[t=>!!t||"Longitude is required",t=>/^\s*-?(\d+(\.\d+)?|[0-8]?\d(\.\d+)?|90(\.0+)?)\s*$/.test(t)||"Invalid Longitude Format"],latitude:[t=>!!t||"Latitude is required",t=>/^\s*-?([0-8]?\d(\.\d+)?|90(\.0+)?|[1-8]?\d(\.\d+)?|89(\.999+)?|[1-8]\d(\.\d+)?|90\.0+?)\s*$/.test(t)||"Invalid Latitude Format"],storerules:[t=>!!t||"Store Address is required"],uidrules:[t=>!!t||"UID is required"],namerules:[t=>!!t||"Name is required",t=>/^[a-z A-Z]+$/.test(t)||"Only letters are allowed in the name"],salespersonr:[t=>!!t||"Name is required"],gstrules:[t=>!!t||"GST is required"],pinrules:[t=>!!t||"PIN is required",t=>t&&/^\d{6}$/.test(t)||"PIN must be 6 digits"],phonerules:[t=>!!t||" Mobile  is required",t=>/^[0-9]+$/.test(t)||"only number are accepted",t=>t&&t.length<=10&&t.length>=10||"Mobile must be  10 number"]}},mounted(){this.getAllsales(),this.userid=localStorage.getItem("user_id")},methods:{validateForm(){this.$refs.purchaseOrderForm.validate().then(t=>{t.valid==!0?this.saveMerchants():(this.snackbar=!0,this.snackbarText="Please give all mandatory fields",this.color="on-background")})},saveMerchants(){const t={merchant_uid:this.saveMerchant.merchant_uid,merchant_name:this.saveMerchant.merchant_name,store_address:this.saveMerchant.store_address,gst:this.saveMerchant.gst,area_pincode:this.saveMerchant.area_pincode,poc_name:this.saveMerchant.poc_name,poc_phone:this.saveMerchant.poc_phone,owner_name:this.saveMerchant.owner_name,owner_phone:this.saveMerchant.owner_phone,shop_size:this.saveMerchant.shop_size,shop_type:this.saveMerchant.shop_type,location:this.saveMerchant.location,created_by:this.userid,sales_person:this.saveMerchant.sales_person,latitude:this.saveMerchant.latitude,longitude:this.saveMerchant.longitude};this.addOnboardmerchant(t).then(e=>{console.log("resp",e),e.data.status==1?(this.snackbarText=e.data.message,this.color="primary",this.snackbar=!0,this.saveMerchant={}):(this.snackbarText=e.data.message,this.color="on-background",this.snackbar=!0)})},getAllsales(){this.getsalesperson().then(t=>{this.salesdata=t.data.data,this.salesdata=this.salesdata.map(e=>({value:e.user_id,text:e.name})),console.log("sales",this.salesdata)})},deleteRow(t){const e=this.data.indexOf(t);e!==-1&&this.data.splice(e,1)},openproductdialog(){this.dialog=!0},closeDialog(){this.dialog=!1}}};function A(t,e,_,b,r,h){return u(),m("div",null,[a(c,null,{default:l(()=>[a(o,{cols:"12"},{default:l(()=>[a(f,{title:"Onboard Merchant",class:"mb-4"},{default:l(()=>[a(M,null,{default:l(()=>[a(S,{class:"mt-6",ref:"purchaseOrderForm"},{default:l(()=>[a(c,null,{default:l(()=>[a(o,{cols:"12",md:"6"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.merchant_uid,"onUpdate:modelValue":e[0]||(e[0]=s=>this.saveMerchant.merchant_uid=s),label:"Merchant UID",rules:r.uidrules,required:""},null,8,["modelValue","rules"])]),_:1}),a(o,{cols:"12",md:"6"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.merchant_name,"onUpdate:modelValue":e[1]||(e[1]=s=>this.saveMerchant.merchant_name=s),label:"Merchant Name",rules:r.namerules,required:""},null,8,["modelValue","rules"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.gst,"onUpdate:modelValue":e[2]||(e[2]=s=>this.saveMerchant.gst=s),label:"GST",rules:r.gstrules,required:""},null,8,["modelValue","rules"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.area_pincode,"onUpdate:modelValue":e[3]||(e[3]=s=>this.saveMerchant.area_pincode=s),label:"Area Pincode",rules:r.pinrules,required:""},null,8,["modelValue","rules"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.owner_name,"onUpdate:modelValue":e[4]||(e[4]=s=>this.saveMerchant.owner_name=s),label:"Owner Name",rules:r.namerules,required:""},null,8,["modelValue","rules"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.owner_phone,"onUpdate:modelValue":e[5]||(e[5]=s=>this.saveMerchant.owner_phone=s),label:"Owner Phone",rules:r.phonerules,required:""},null,8,["modelValue","rules"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.poc_name,"onUpdate:modelValue":e[6]||(e[6]=s=>this.saveMerchant.poc_name=s),label:"POC Name",rules:r.namerules,required:""},null,8,["modelValue","rules"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.poc_phone,"onUpdate:modelValue":e[7]||(e[7]=s=>this.saveMerchant.poc_phone=s),label:"POC Phone",rules:r.phonerules,required:""},null,8,["modelValue","rules"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.shop_size,"onUpdate:modelValue":e[8]||(e[8]=s=>this.saveMerchant.shop_size=s),label:"Shop Size"},null,8,["modelValue"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.shop_type,"onUpdate:modelValue":e[9]||(e[9]=s=>this.saveMerchant.shop_type=s),label:"Shop Type"},null,8,["modelValue"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.location,"onUpdate:modelValue":e[10]||(e[10]=s=>this.saveMerchant.location=s),label:"Location"},null,8,["modelValue"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(F,{modelValue:this.saveMerchant.sales_person,"onUpdate:modelValue":e[11]||(e[11]=s=>this.saveMerchant.sales_person=s),label:"Sales Person",items:this.salesdata,"item-value":"value","item-title":"text",rules:r.salespersonr,required:""},null,8,["modelValue","items","rules"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.longitude,"onUpdate:modelValue":e[12]||(e[12]=s=>this.saveMerchant.longitude=s),label:"Longitude",rules:r.Logitude},null,8,["modelValue","rules"])]),_:1}),a(o,{md:"6",cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.latitude,"onUpdate:modelValue":e[13]||(e[13]=s=>this.saveMerchant.latitude=s),label:"Latitude",rules:r.latitude},null,8,["modelValue","rules"])]),_:1}),a(o,{cols:"12"},{default:l(()=>[a(n,{modelValue:this.saveMerchant.store_address,"onUpdate:modelValue":e[14]||(e[14]=s=>this.saveMerchant.store_address=s),label:"Store Address",rules:r.storerules},null,8,["modelValue","rules"])]),_:1}),a(o,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[a(p,{onClick:e[15]||(e[15]=s=>h.validateForm())},{default:l(()=>[i("Save")]),_:1}),a(p,{color:"secondary",variant:"tonal",type:"reset"},{default:l(()=>[i(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1}),a(L,{modelValue:r.snackbar,"onUpdate:modelValue":e[16]||(e[16]=s=>r.snackbar=s),timeout:3500,color:r.color},{default:l(()=>[i(v(r.snackbarText),1)]),_:1},8,["modelValue","color"])])}const D=V(C,[["render",A]]),B={components:{Onboardmerchantdetails:D},data(){return{currentroute:"",activeTab:"",tabs:[{title:"View Brand",icon:"mdi-account-outline",tab:"account"}]}},mounted(){this.currentroute=g(),this.activeTab=w(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function R(t,e,_,b,r,h){const s=U("Onboardmerchantdetails");return u(),m("div",null,[a(I,{modelValue:r.activeTab,"onUpdate:modelValue":e[0]||(e[0]=d=>r.activeTab=d),"show-arrows":""},{default:l(()=>[(u(!0),m(k,null,x(r.tabs,d=>(u(),q(z,{key:d.icon,value:d.tab},{default:l(()=>[a(y,{size:"20",start:"",icon:d.icon},null,8,["icon"]),i(" "+v(d.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),a(T),a(P,{modelValue:r.activeTab,"onUpdate:modelValue":e[1]||(e[1]=d=>r.activeTab=d),class:"mt-5 disable-tab-transition",touch:!1},{default:l(()=>[a(N,{value:"account"},{default:l(()=>[a(s)]),_:1})]),_:1},8,["modelValue"])])}const X=V(B,[["render",R]]);export{X as default};
