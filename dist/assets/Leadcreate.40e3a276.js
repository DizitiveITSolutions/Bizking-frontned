import{_ as v,o as i,c,g as l,w as t,i as r,j as _,k as g,l as V,m as w,b as m,t as h,a as b,v as y,e as k,F as T,q as x,s as C,r as U,f as q,u as O}from"./index.9fd879d1.js";import{s as P}from"./Services.b0dad350.js";import{V as S}from"./VForm.a391d890.js";import{V as f}from"./VSelect.d2ba9dce.js";import{V as d}from"./VTextField.685d212a.js";import{V as N}from"./VSnackbar.2e9588cd.js";import{V as B,a as D,b as F,c as I}from"./VWindowItem.4c339606.js";import"./index.2bd8ddc8.js";import"./VCheckboxBtn.64aa4f2c.js";import"./VChip.96d3bf9c.js";const A={mixins:[P],data(){return{storearules:[e=>!!e||"Store Address is required"],locationrules:[e=>!!e||"Location is required"],storerules:[e=>!!e||"Store Name is required"],uidrules:[e=>!!e||"UID is required"],namerules:[e=>!!e||"Lead is required"],authrules:[e=>!!e||"Decision Authority is required"],namerules1:[e=>!!e||"POC name is required"],namerules2:[e=>!!e||"Owner name is required"],gstrules:[e=>!!e||"GST is required"],pinrules:[e=>!!e||"PIN Code is required",e=>e&&/^\d{6}$/.test(e)||"PIN must be 6 digits"],emailRules:[e=>!!e||"Email is required",e=>/.+@.+\..+/.test(e)||"The email must be valid with the correct format: @ and . symbols"],phonerules:[e=>!!e||" Mobile Number is required",e=>/^[0-9]+$/.test(e)||"only number are accepted",e=>e&&e.length<=10&&e.length>=10||"Mobile must be  10 number"],dialog:!1,loggedby:"",userid:"",saveLeads:{lead_type:"",name:"",address:"",pincode:"",owner_name:"",owner_phone:"",poc_name:"",poc_phone:"",gst:"",decision_authority:"",user_id:"",location:""},snackbar:!1,snackbarText:"",timeout:6e3,color:"",top:!1,bottom:!0,left:!1,right:!1}},mounted(){this.loggedby=localStorage.getItem("createdby"),this.userid=localStorage.getItem("user_id")},methods:{validateForm(){this.$refs.purchaseOrderForm.validate().then(e=>{e.valid==!0?this.saveLeaddata():(this.snackbar=!0,this.snackbarText="Please give all mandatory fields",this.color="on-background")})},saveLeaddata(){const e={POC:"poc",Owner:"owner"};console.log("set",e[this.saveLeads.decision_authority]);const a={lead_type:this.saveLeads.lead_type,name:this.saveLeads.name,address:this.saveLeads.address,pincode:this.saveLeads.pincode,owner_name:this.saveLeads.owner_name,owner_phone:this.saveLeads.owner_phone,poc_name:this.saveLeads.poc_name,poc_phone:this.saveLeads.poc_phone,gst:this.saveLeads.gst,decision_authority:e[this.saveLeads.decision_authority],user_id:this.userid,location:this.saveLeads.location};console.log("chek p",a),this.saveLead(a).then(u=>{console.log("chec",u),u.data.status==1?(this.snackbar=!0,this.snackbarText=u.data.message,this.color="primary",this.saveLeads={}):(this.snackbar=!0,this.snackbarText=u.data.message,this.color="on-background",this.saveLeads={})})},deleteRow(e){const a=this.data.indexOf(e);a!==-1&&this.data.splice(a,1)},openproductdialog(){this.dialog=!0},closeDialog(){this.dialog=!1}}},M=b("span",null,[b("strong",{color:"error"},"* "),m(" please enter owner name if there is no poc")],-1);function R(e,a,u,L,s,p){return i(),c("div",null,[l(V,null,{default:t(()=>[l(r,{cols:"12"},{default:t(()=>[l(_,{title:"Create Lead",class:"mb-4"},{default:t(()=>[l(g,null,{default:t(()=>[l(S,{class:"mt-6",ref:"purchaseOrderForm"},{default:t(()=>[l(V,null,{default:t(()=>[l(r,{md:"6",cols:"12"},{default:t(()=>[l(f,{modelValue:s.saveLeads.lead_type,"onUpdate:modelValue":a[0]||(a[0]=o=>s.saveLeads.lead_type=o),label:"Lead Type",items:["Brand","Merchant"],rules:s.namerules},null,8,["modelValue","rules"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(d,{modelValue:s.saveLeads.name,"onUpdate:modelValue":a[1]||(a[1]=o=>s.saveLeads.name=o),label:"Brand / Merchant name",rules:s.storerules},null,8,["modelValue","rules"])]),_:1}),l(r,{cols:"12",md:"6"},{default:t(()=>[l(d,{modelValue:s.loggedby,"onUpdate:modelValue":a[2]||(a[2]=o=>s.loggedby=o),label:"Lead Handler",readonly:""},null,8,["modelValue"])]),_:1}),l(r,{md:"6",cols:"12"},{default:t(()=>[l(d,{modelValue:s.saveLeads.address,"onUpdate:modelValue":a[3]||(a[3]=o=>s.saveLeads.address=o),rules:s.storearules,label:"Address"},null,8,["modelValue","rules"])]),_:1}),l(r,{md:"6",cols:"12"},{default:t(()=>[l(d,{modelValue:s.saveLeads.gst,"onUpdate:modelValue":a[4]||(a[4]=o=>s.saveLeads.gst=o),label:"GST"},null,8,["modelValue"])]),_:1}),l(r,{md:"6",cols:"12"},{default:t(()=>[l(d,{modelValue:s.saveLeads.pincode,"onUpdate:modelValue":a[5]||(a[5]=o=>s.saveLeads.pincode=o),rules:s.pinrules,label:"Area PinCode"},null,8,["modelValue","rules"])]),_:1}),l(r,{md:"6",cols:"12"},{default:t(()=>[l(d,{modelValue:s.saveLeads.location,"onUpdate:modelValue":a[6]||(a[6]=o=>s.saveLeads.location=o),label:"Location"},null,8,["modelValue"])]),_:1}),l(r,{md:"6",cols:"12"},{default:t(()=>[l(d,{modelValue:s.saveLeads.owner_name,"onUpdate:modelValue":a[7]||(a[7]=o=>s.saveLeads.owner_name=o),rules:s.namerules2,label:"Owner Name"},null,8,["modelValue","rules"])]),_:1}),l(r,{md:"6",cols:"12"},{default:t(()=>[l(d,{modelValue:s.saveLeads.owner_phone,"onUpdate:modelValue":a[8]||(a[8]=o=>s.saveLeads.owner_phone=o),rules:s.phonerules,label:"Owner Phone"},null,8,["modelValue","rules"])]),_:1}),l(r,{md:"6",cols:"12"},{default:t(()=>[l(d,{modelValue:s.saveLeads.poc_name,"onUpdate:modelValue":a[9]||(a[9]=o=>s.saveLeads.poc_name=o),rules:s.namerules1,label:"POC Name"},null,8,["modelValue","rules"]),M]),_:1}),l(r,{md:"6",cols:"12"},{default:t(()=>[l(d,{modelValue:s.saveLeads.poc_phone,"onUpdate:modelValue":a[10]||(a[10]=o=>s.saveLeads.poc_phone=o),rules:s.phonerules,label:"POC Phone"},null,8,["modelValue","rules"])]),_:1}),l(r,{md:"6",cols:"12"},{default:t(()=>[l(f,{modelValue:s.saveLeads.decision_authority,"onUpdate:modelValue":a[11]||(a[11]=o=>s.saveLeads.decision_authority=o),rules:s.authrules,label:"Decision Authority",items:["POC","Owner"]},null,8,["modelValue","rules"])]),_:1}),l(r,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:t(()=>[l(w,{onClick:p.validateForm},{default:t(()=>[m("Save")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1}),l(N,{modelValue:s.snackbar,"onUpdate:modelValue":a[12]||(a[12]=o=>s.snackbar=o),timeout:3500,color:s.color},{default:t(()=>[m(h(s.snackbarText),1)]),_:1},8,["modelValue","color"])])}const E=v(A,[["render",R]]),G={components:{Createlead:E},data(){return{currentroute:"",activeTab:"",tabs:[{title:"Lead Basic Data",icon:"mdi-account-outline",tab:"account"}]}},mounted(){this.currentroute=y(),this.activeTab=k(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function W(e,a,u,L,s,p){const o=U("Createlead");return i(),c("div",null,[l(B,{modelValue:s.activeTab,"onUpdate:modelValue":a[0]||(a[0]=n=>s.activeTab=n),"show-arrows":""},{default:t(()=>[(i(!0),c(T,null,x(s.tabs,n=>(i(),q(I,{key:n.icon,value:n.tab},{default:t(()=>[l(O,{size:"20",start:"",icon:n.icon},null,8,["icon"]),m(" "+h(n.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),l(C),l(F,{modelValue:s.activeTab,"onUpdate:modelValue":a[1]||(a[1]=n=>s.activeTab=n),class:"mt-5 disable-tab-transition",touch:!1},{default:t(()=>[l(D,{value:"account"},{default:t(()=>[l(o)]),_:1})]),_:1},8,["modelValue"])])}const ee=v(G,[["render",W]]);export{ee as default};
