import{_ as L,o as m,c,g as a,w as s,i as d,j as w,k as y,l as p,m as T,b as f,t as u,a as i,F as b,q as v,u as q,v as U,e as C,s as P,r as k,f as B}from"./index.81a16aa7.js";import{s as S}from"./Services.3d42a0ca.js";import{V as N}from"./VForm.b59d3ed3.js";import{V as r}from"./VTextField.f16d975d.js";import{V as O}from"./VSelect.d7cc2c32.js";import{V as I}from"./VSnackbar.09ac0950.js";import{V as A}from"./VTextarea.01a32493.js";import{V as F}from"./VTable.be5611d2.js";import{V as D,a as x,b as z,c as M}from"./VWindowItem.6f57b3cb.js";import"./index.2bd8ddc8.js";import"./VCheckboxBtn.b1130383.js";import"./VChip.75678a42.js";const R={mixins:[S],data(){return{snackbar:!1,snackbarText:"",timeout:6e3,color:"",top:!1,bottom:!0,left:!1,right:!1,satusrules:[e=>!!e||"Status is required"],storearules:[e=>!!e||"Store Address is required"],locationrules:[e=>!!e||"Location is required"],storerules:[e=>!!e||"Store Name is required"],uidrules:[e=>!!e||"UID is required"],namerules:[e=>!!e||"Lead is required"],authrules:[e=>!!e||"Authority is required"],namerules1:[e=>!!e||"Name is required",e=>/^[a-zA-Z]+$/.test(e)||"Only letters are allowed in the name"],gstrules:[e=>!!e||"GST is required"],pinrules:[e=>!!e||"PIN is required",e=>e&&/^\d{6}$/.test(e)||"PIN must be 6 digits"],emailRules:[e=>!!e||"Email is required",e=>/.+@.+\..+/.test(e)||"The email must be valid with the correct format: @ and . symbols"],phonerules:[e=>!!e||" Mobile  is required",e=>/^[0-9]+$/.test(e)||"only number are accepted",e=>e&&e.length<=10&&e.length>=10||"Mobile must be  10 number"],dialog:!1,Leadid:null,saveLeads:{lead_type:"",name:"",address:"",pincode:"",lead_id:"",owner_name:"",owner_phone:"",poc_name:"",poc_phone:"",gst:"",decision_authority:"",user_id:"",location:"",status:""},loggedby:"",headers:[{text:"Purchase Order",value:"po"},{text:"Order Date",value:"ODate"},{text:"Status",value:"status"},{text:"Order To",value:"OT"},{text:"Shipped To",value:"ST"},{text:"Total",value:"total"},{text:"Action",value:"actions",sortable:!1}]}},mounted(){this.Leadid=this.$route.query.lead_id,this.loggedby=localStorage.getItem("createdby"),this.editLeadsdata()},methods:{validateForm(){this.$refs.purchaseOrderForm.validate().then(e=>{e.valid==!0?this.updateLeaddata():(this.snackbar=!0,this.snackbarText="Please give all mandatory fields",this.color="on-background")})},updateLeaddata(){const e={name:this.saveLeads.name,address:this.saveLeads.address,pincode:this.saveLeads.pincode,lead_id:this.saveLeads.lead_id,owner_name:this.saveLeads.owner_name,owner_phone:this.saveLeads.owner_phone,poc_name:this.saveLeads.poc_name,poc_phone:this.saveLeads.poc_phone,gst:this.saveLeads.gst,decision_authority:this.saveLeads.decision_authority,location:this.saveLeads.location,status:this.saveLeads.status};console.log("update lead",e),this.updateLead(e).then(l=>{console.log("check data",l),l.data.status==1?(this.snackbar=!0,this.snackbarText=l.data.message,this.color="primary",this.$router.push({name:"LeadView"})):(this.snackbar=!0,this.snackbarText=l.data.message,this.color="on-background",this.saveLeads={})})},editLeadsdata(){this.updateLeads(this.Leadid).then(e=>{console.log("check response",e.data.data),this.saveLeads.address=e.data.data.address,this.saveLeads.decision_authority=e.data.data.decision_authority,this.saveLeads.gst=e.data.data.gst,this.saveLeads.name=e.data.data.name,this.saveLeads.lead_id=e.data.data.lead_id,this.saveLeads.owner_name=e.data.data.owner_name,this.saveLeads.owner_phone=e.data.data.owner_phone,this.saveLeads.poc_name=e.data.data.poc_name,this.saveLeads.poc_phone=e.data.data.poc_phone,this.saveLeads.pincode=e.data.data.pincode,this.saveLeads.location=e.data.data.location})}}};function W(e,l,V,g,t,h){return m(),c("div",null,[a(p,null,{default:s(()=>[a(d,{cols:"12"},{default:s(()=>[a(w,{title:"Lead Basic data",class:"mb-4"},{default:s(()=>[a(y,null,{default:s(()=>[a(N,{class:"mt-6",ref:"purchaseOrderForm"},{default:s(()=>[a(p,null,{default:s(()=>[a(d,{cols:"12",md:"6"},{default:s(()=>[a(r,{modelValue:t.saveLeads.name,"onUpdate:modelValue":l[0]||(l[0]=o=>t.saveLeads.name=o),label:"Name",rules:t.storerules},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12",md:"6"},{default:s(()=>[a(r,{modelValue:t.loggedby,"onUpdate:modelValue":l[1]||(l[1]=o=>t.loggedby=o),label:"Lead Handler",readonly:""},null,8,["modelValue"])]),_:1}),a(d,{md:"6",cols:"12"},{default:s(()=>[a(r,{modelValue:t.saveLeads.address,"onUpdate:modelValue":l[2]||(l[2]=o=>t.saveLeads.address=o),label:"Address",rules:t.storearules},null,8,["modelValue","rules"])]),_:1}),a(d,{md:"6",cols:"12"},{default:s(()=>[a(r,{modelValue:t.saveLeads.gst,"onUpdate:modelValue":l[3]||(l[3]=o=>t.saveLeads.gst=o),label:"GST"},null,8,["modelValue"])]),_:1}),a(d,{md:"6",cols:"12"},{default:s(()=>[a(r,{modelValue:t.saveLeads.pincode,"onUpdate:modelValue":l[4]||(l[4]=o=>t.saveLeads.pincode=o),label:"Area PinCode",rules:t.pinrules},null,8,["modelValue","rules"])]),_:1}),a(d,{md:"6",cols:"12"},{default:s(()=>[a(r,{modelValue:t.saveLeads.poc_name,"onUpdate:modelValue":l[5]||(l[5]=o=>t.saveLeads.poc_name=o),rules:t.namerules1,label:"POC Name"},null,8,["modelValue","rules"])]),_:1}),a(d,{md:"6",cols:"12"},{default:s(()=>[a(r,{modelValue:t.saveLeads.poc_phone,"onUpdate:modelValue":l[6]||(l[6]=o=>t.saveLeads.poc_phone=o),rules:t.phonerules,label:"POC Phone"},null,8,["modelValue","rules"])]),_:1}),a(d,{md:"6",cols:"12"},{default:s(()=>[a(r,{modelValue:t.saveLeads.owner_name,"onUpdate:modelValue":l[7]||(l[7]=o=>t.saveLeads.owner_name=o),rules:t.namerules1,label:"Owner Name"},null,8,["modelValue","rules"])]),_:1}),a(d,{md:"6",cols:"12"},{default:s(()=>[a(r,{modelValue:t.saveLeads.owner_phone,"onUpdate:modelValue":l[8]||(l[8]=o=>t.saveLeads.owner_phone=o),rules:t.phonerules,label:"Owner Phone"},null,8,["modelValue","rules"])]),_:1}),a(d,{md:"6",cols:"12"},{default:s(()=>[a(O,{modelValue:t.saveLeads.status,"onUpdate:modelValue":l[9]||(l[9]=o=>t.saveLeads.status=o),rules:t.satusrules,items:["Created","Partially interested","Cancelled","Closed"],label:"Lead Status"},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:s(()=>[a(T,{onClick:h.validateForm},{default:s(()=>[f("Save")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1}),a(I,{modelValue:t.snackbar,"onUpdate:modelValue":l[10]||(l[10]=o=>t.snackbar=o),timeout:3500,color:t.color},{default:s(()=>[f(u(t.snackbarText),1)]),_:1},8,["modelValue","color"])])}const E=L(R,[["render",W]]),G={mixins:[S],data(){return{Leadid:"",maxPaginationPages:5,storerules:[e=>!!e||"Store Address is required"],mrprules:[e=>!!e||"MRP is required"],namerules:[e=>!!e||"Name is required"],uomRules:[e=>!!e||"UOM is required"],pinrules:[e=>!!e||"PIN is required"],phonerules:[e=>!!e||" Mobile  is required",e=>/^[0-9]+$/.test(e)||"only number are accepted",e=>e&&e.length<=10&&e.length>=10||"Mobile must be  10 number"],snackbar:!1,snackbarText:"",timeout:6e3,color:"",top:!1,bottom:!0,left:!1,right:!1,dialog:!1,loading:!0,searchQuery:"",page:1,pageSize:10,products:[],saveProduct:{merchant_uid:"",brand_name:"",sku_name:"",uom:"",hsn_code:"",mrp:"",status:"",brand_id:"",brand_product_id:"",total_given_margin:"",sgst:"",cgst:"",pitch_from:"",final_retail_cp:"",final_ret:"",bk_profit:"",bizkingz_cp_final:"",bc_margin_amt:"",bc_margin:""},salesdata:[],BrandNames:[],selectedBrand:null,userRole:"",createdby:"",workInfo:[],headers:[{text:"SNo",value:"brand_name"},{text:"Date",value:"created_date"},{text:"Updated Date",value:"updated_date"},{text:"Summary",value:"summary"},{text:"Notes",value:"working_notes"},{text:"Status",value:"visit_status"},{text:"Action",value:"action"}]}},mounted(){this.Leadid=this.$route.query.lead_id,console.log("check the id",this.Leadid),this.updateLeadsdata()},methods:{updateLeadsdata(){this.updateLeads(this.Leadid).then(e=>{console.log("check response",e.data.data.work_info),this.workInfo=e.data.data.work_info})}}},H={class:"text-center"},j={class:"text-center"},Q={class:"text-center"},Z={class:"text-center"},J={class:"text-center"},K={class:"text-center"},X={class:"text-center"};function Y(e,l,V,g,t,h){return m(),c("div",null,[a(p,null,{default:s(()=>[a(d,{cols:"12"},{default:s(()=>[a(w,{title:"Work Info",class:"mb-4"},{default:s(()=>[a(y,null,{default:s(()=>[a(N,{class:"mt-6",ref:"purchaseOrderForm"},{default:s(()=>[a(p,null,{default:s(()=>[a(d,{md:"6",cols:"12"},{default:s(()=>[a(r,{label:"Summary",readonly:""})]),_:1}),a(d,{cols:"12",md:"6"},{default:s(()=>[a(r,{label:"Visit Status",readonly:""})]),_:1}),a(d,{cols:"12"},{default:s(()=>[a(A,{label:"Working Notes","row-height":"30",rows:"4",variant:"filled","auto-grow":"",shaped:""})]),_:1}),a(d,{cols:"12"},{default:s(()=>[a(F,{headers:t.headers,items:e.oppitems,"item-key":"brand_name",class:"table-rounded",height:"500","fixed-header":""},{default:s(()=>[i("thead",null,[i("tr",null,[(m(!0),c(b,null,v(t.headers,o=>(m(),c("th",{class:"text-center",key:o},u(o.text),1))),128))])]),i("tbody",null,[(m(!0),c(b,null,v(t.workInfo,(o,_)=>(m(),c("tr",{key:_},[i("td",H,u(_),1),i("td",j,u(o.created_date),1),i("td",Q,u(o.updated_date),1),i("td",Z,u(o.summary),1),i("td",J,u(o.working_notes),1),i("td",K,u(o.visit_status),1),i("td",X,[a(T,{icon:"",variant:"text",color:"default",class:"mb-1 mt-2",size:"x-small",onClick:n=>e.editWorkinfo(o)},{default:s(()=>[a(q,{icon:"ri-pencil-line",size:"22",color:"#BA8B32"})]),_:2},1032,["onClick"])])]))),128))])]),_:1},8,["headers","items"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})])}const $=L(G,[["render",Y]]),ee={components:{LeadBasicdata:E,Leadworkinfo:$},data(){return{currentroute:"",activeTab:"",tabs:[{title:"Lead Basic Data",icon:"mdi-account-outline",tab:"account"},{title:"Work Info History",icon:"mdi-lock-open-outline",tab:"notification"}]}},mounted(){this.currentroute=U(),this.activeTab=C(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function ae(e,l,V,g,t,h){const o=k("LeadBasicdata"),_=k("Leadworkinfo");return m(),c("div",null,[a(D,{modelValue:t.activeTab,"onUpdate:modelValue":l[0]||(l[0]=n=>t.activeTab=n),"show-arrows":""},{default:s(()=>[(m(!0),c(b,null,v(t.tabs,n=>(m(),B(M,{key:n.icon,value:n.tab},{default:s(()=>[a(q,{size:"20",start:"",icon:n.icon},null,8,["icon"]),f(" "+u(n.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),a(P),a(z,{modelValue:t.activeTab,"onUpdate:modelValue":l[1]||(l[1]=n=>t.activeTab=n),class:"mt-5 disable-tab-transition",touch:!1},{default:s(()=>[a(x,{value:"account"},{default:s(()=>[a(o)]),_:1}),a(x,{value:"notification"},{default:s(()=>[a(_)]),_:1})]),_:1},8,["modelValue"])])}const pe=L(ee,[["render",ae]]);export{pe as default};