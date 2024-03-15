import{_ as v,o as n,c as m,g as a,w as s,i as d,j as k,k as T,l as _,m as x,b as f,a as i,F as b,q as h,t as c,v as N,e as U,s as O,r as y,f as P,u as B}from"./index.dc6d2f7d.js";import{s as q}from"./Services.987bac00.js";import{V as S}from"./VForm.58e20691.js";import{V as r}from"./VTextField.793ac199.js";import{V as I}from"./VTextarea.ed64afa1.js";import{V as C}from"./VTable.8a65c88e.js";import{V as D,a as w,b as R,c as A}from"./VWindowItem.f3ad2692.js";import"./index.2bd8ddc8.js";const z={mixins:[q],data(){return{storearules:[e=>!!e||"Store Address is required"],locationrules:[e=>!!e||"Location is required"],storerules:[e=>!!e||"Store Name is required"],uidrules:[e=>!!e||"UID is required"],namerules:[e=>!!e||"Lead is required"],authrules:[e=>!!e||"Authority is required"],namerules1:[e=>!!e||"Name is required",e=>/^[a-zA-Z]+$/.test(e)||"Only letters are allowed in the name"],gstrules:[e=>!!e||"GST is required"],pinrules:[e=>!!e||"PIN is required",e=>e&&/^\d{6}$/.test(e)||"PIN must be 6 digits"],emailRules:[e=>!!e||"Email is required",e=>/.+@.+\..+/.test(e)||"The email must be valid with the correct format: @ and . symbols"],phonerules:[e=>!!e||" Mobile  is required",e=>/^[0-9]+$/.test(e)||"only number are accepted",e=>e&&e.length<=10&&e.length>=10||"Mobile must be  10 number"],dialog:!1,Leadid:null,saveLeads:{lead_type:"brand",name:"",address:"",pincode:"",lead_id:"",owner_name:"",owner_phone:"",poc_name:"",poc_phone:"",gst:"",decision_authority:"",user_id:"",location:""},loggedby:"",headers:[{text:"Purchase Order",value:"po"},{text:"Order Date",value:"ODate"},{text:"Status",value:"status"},{text:"Order To",value:"OT"},{text:"Shipped To",value:"ST"},{text:"Total",value:"total"},{text:"Action",value:"actions",sortable:!1}]}},mounted(){this.Leadid=this.$route.query.lead_id,this.loggedby=localStorage.getItem("createdby"),this.updateLeadsdata()},methods:{updateLeadsdata(){this.updateLeads(this.Leadid).then(e=>{console.log("check response",e.data.data),this.saveLeads.address=e.data.data.address,this.saveLeads.decision_authority=e.data.data.decision_authority,this.saveLeads.gst=e.data.data.gst,this.saveLeads.name=e.data.data.name,this.saveLeads.lead_id=e.data.data.lead_id,this.saveLeads.owner_name=e.data.data.owner_name,this.saveLeads.owner_phone=e.data.data.owner_phone,this.saveLeads.poc_name=e.data.data.poc_name,this.saveLeads.poc_phone=e.data.data.poc_phone,this.saveLeads.pincode=e.data.data.pincode,this.saveLeads.location=e.data.data.location})},deleteRow(e){const o=this.data.indexOf(e);o!==-1&&this.data.splice(o,1)},openproductdialog(){this.dialog=!0},closeDialog(){this.dialog=!1}}};function F(e,o,V,g,t,L){return n(),m("div",null,[a(_,null,{default:s(()=>[a(d,{cols:"12"},{default:s(()=>[a(k,{title:"Lead Basic data",class:"mb-4"},{default:s(()=>[a(T,null,{default:s(()=>[a(S,{class:"mt-6"},{default:s(()=>[a(_,null,{default:s(()=>[a(d,{md:"6",cols:"12"},{default:s(()=>[a(r,{modelValue:t.saveLeads.lead_type,"onUpdate:modelValue":o[0]||(o[0]=l=>t.saveLeads.lead_type=l),label:"Lead Type",readonly:"",rules:t.namerules},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12",md:"6"},{default:s(()=>[a(r,{modelValue:t.saveLeads.name,"onUpdate:modelValue":o[1]||(o[1]=l=>t.saveLeads.name=l),label:"Store Name",rules:t.storerules},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12",md:"6"},{default:s(()=>[a(r,{modelValue:t.loggedby,"onUpdate:modelValue":o[2]||(o[2]=l=>t.loggedby=l),label:"Lead Handler",readonly:""},null,8,["modelValue"])]),_:1}),a(d,{md:"6",cols:"12"},{default:s(()=>[a(r,{modelValue:t.saveLeads.address,"onUpdate:modelValue":o[3]||(o[3]=l=>t.saveLeads.address=l),label:"Store Address",rules:t.storearules},null,8,["modelValue","rules"])]),_:1}),a(d,{md:"6",cols:"12"},{default:s(()=>[a(r,{modelValue:t.saveLeads.gst,"onUpdate:modelValue":o[4]||(o[4]=l=>t.saveLeads.gst=l),label:"GST"},null,8,["modelValue"])]),_:1}),a(d,{md:"6",cols:"12"},{default:s(()=>[a(r,{modelValue:t.saveLeads.pincode,"onUpdate:modelValue":o[5]||(o[5]=l=>t.saveLeads.pincode=l),label:"Area PinCode",rules:t.pinrules},null,8,["modelValue","rules"])]),_:1}),a(d,{md:"6",cols:"12"},{default:s(()=>[a(r,{modelValue:t.saveLeads.poc_name,"onUpdate:modelValue":o[6]||(o[6]=l=>t.saveLeads.poc_name=l),rules:t.namerules1,label:"POC Name"},null,8,["modelValue","rules"])]),_:1}),a(d,{md:"6",cols:"12"},{default:s(()=>[a(r,{modelValue:t.saveLeads.poc_phone,"onUpdate:modelValue":o[7]||(o[7]=l=>t.saveLeads.poc_phone=l),rules:t.phonerules,label:"POC Phone"},null,8,["modelValue","rules"])]),_:1}),a(d,{md:"6",cols:"12"},{default:s(()=>[a(r,{modelValue:t.saveLeads.owner_name,"onUpdate:modelValue":o[8]||(o[8]=l=>t.saveLeads.owner_name=l),rules:t.namerules1,label:"Owner Name"},null,8,["modelValue","rules"])]),_:1}),a(d,{md:"6",cols:"12"},{default:s(()=>[a(r,{modelValue:t.saveLeads.owner_phone,"onUpdate:modelValue":o[9]||(o[9]=l=>t.saveLeads.owner_phone=l),rules:t.phonerules,label:"Owner Phone"},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:s(()=>[a(x,null,{default:s(()=>[f("Save")]),_:1}),a(x,{color:"secondary",variant:"tonal",type:"reset"},{default:s(()=>[f(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const M=v(z,[["render",F]]),W={mixins:[q],data(){return{oppitems:[{brand_name:"Frozen Yogurt",sku_name:159,uom:6,hsn_code:"Text",status:"visited"},{brand_name:"Ice cream sandwich",sku_name:237,uom:6,hsn_code:"Text",status:"visited"},{brand_name:"Eclair",sku_name:262,uom:6,hsn_code:"Text",status:"visited"},{brand_name:"Cupcake",sku_name:305,uom:6,hsn_code:"Text",status:"visited"},{brand_name:"Gingerbread",sku_name:356,uom:6,hsn_code:"Text",status:"visited"}],maxPaginationPages:5,storerules:[e=>!!e||"Store Address is required"],mrprules:[e=>!!e||"MRP is required"],namerules:[e=>!!e||"Name is required"],uomRules:[e=>!!e||"UOM is required"],pinrules:[e=>!!e||"PIN is required"],phonerules:[e=>!!e||" Mobile  is required",e=>/^[0-9]+$/.test(e)||"only number are accepted",e=>e&&e.length<=10&&e.length>=10||"Mobile must be  10 number"],snackbar:!1,snackbarText:"",timeout:6e3,color:"",top:!1,bottom:!0,left:!1,right:!1,dialog:!1,loading:!0,searchQuery:"",page:1,pageSize:10,products:[],saveProduct:{merchant_uid:"",brand_name:"",sku_name:"",uom:"",hsn_code:"",mrp:"",status:"",brand_id:"",brand_product_id:"",total_given_margin:"",sgst:"",cgst:"",pitch_from:"",final_retail_cp:"",final_ret:"",bk_profit:"",bizkingz_cp_final:"",bc_margin_amt:"",bc_margin:""},salesdata:[],BrandNames:[],selectedBrand:null,userRole:"",createdby:"",headers:[{text:"SNo",value:"brand_name"},{text:"Date",value:"sku_name"},{text:"Summary",value:"uom"},{text:"Notes",value:"hsn_code"},{text:"Status",value:"status"}]}},methods:{editOppertunity(e){this.$router.push({name:"Updateoppertunities"})}}},E={class:"text-center"},G={class:"text-center"},H={class:"text-center"},j={class:"text-center"},Q={class:"text-center"};function Y(e,o,V,g,t,L){return n(),m("div",null,[a(_,null,{default:s(()=>[a(d,{cols:"12"},{default:s(()=>[a(k,{title:"Work Info",class:"mb-4"},{default:s(()=>[a(T,null,{default:s(()=>[a(S,{class:"mt-6",ref:"purchaseOrderForm"},{default:s(()=>[a(_,null,{default:s(()=>[a(d,{md:"6",cols:"12"},{default:s(()=>[a(r,{label:"Summary",readonly:""})]),_:1}),a(d,{cols:"12",md:"6"},{default:s(()=>[a(r,{label:"Visit Status",readonly:""})]),_:1}),a(d,{cols:"12"},{default:s(()=>[a(I,{label:"Working Notes","row-height":"30",rows:"4",variant:"filled","auto-grow":"",shaped:""})]),_:1}),a(d,{cols:"12"},{default:s(()=>[a(C,{headers:t.headers,items:t.oppitems,"item-key":"brand_name",class:"table-rounded",height:"500","fixed-header":""},{default:s(()=>[i("thead",null,[i("tr",null,[(n(!0),m(b,null,h(t.headers,l=>(n(),m("th",{class:"text-center",key:l},c(l.text),1))),128))])]),i("tbody",null,[(n(!0),m(b,null,h(t.oppitems,(l,p)=>(n(),m("tr",{key:p},[i("td",E,c(l.brand_name),1),i("td",G,c(l.sku_name),1),i("td",H,c(l.uom),1),i("td",j,c(l.hsn_code),1),i("td",Q,c(l.status),1)]))),128))])]),_:1},8,["headers","items"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})])}const Z=v(W,[["render",Y]]),J={components:{LeadBasicdata:M,Leadworkinfo:Z},data(){return{currentroute:"",activeTab:"",tabs:[{title:"Lead Basic Data",icon:"mdi-account-outline",tab:"account"},{title:"Work Info History",icon:"mdi-lock-open-outline",tab:"notification"}]}},mounted(){this.currentroute=N(),this.activeTab=U(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function K(e,o,V,g,t,L){const l=y("LeadBasicdata"),p=y("Leadworkinfo");return n(),m("div",null,[a(D,{modelValue:t.activeTab,"onUpdate:modelValue":o[0]||(o[0]=u=>t.activeTab=u),"show-arrows":""},{default:s(()=>[(n(!0),m(b,null,h(t.tabs,u=>(n(),P(A,{key:u.icon,value:u.tab},{default:s(()=>[a(B,{size:"20",start:"",icon:u.icon},null,8,["icon"]),f(" "+c(u.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),a(O),a(R,{modelValue:t.activeTab,"onUpdate:modelValue":o[1]||(o[1]=u=>t.activeTab=u),class:"mt-5 disable-tab-transition",touch:!1},{default:s(()=>[a(w,{value:"account"},{default:s(()=>[a(l)]),_:1}),a(w,{value:"notification"},{default:s(()=>[a(p)]),_:1})]),_:1},8,["modelValue"])])}const de=v(J,[["render",K]]);export{de as default};
