import{_ as x,o as m,c as f,g as t,b5 as I,b6 as N,w as o,i,j as b,k as V,l as _,m as k,b as p,t as h,a as u,F as w,q as L,u as U,v as F,e as O,s as B,r as S,f as R}from"./index.b9236813.js";import{s as P}from"./Services.b8c43c9d.js";import{V as y}from"./VForm.357f0661.js";import{V as r}from"./VTextField.8ecb6399.js";import{V as D}from"./VSelect.41d697ac.js";import{V as q}from"./VSnackbar.6129cf47.js";import{V as T}from"./VTextarea.3ac41f5f.js";import{V as z}from"./VTable.8079df80.js";import{V as W}from"./VPagination.34e7e61b.js";import{V as A}from"./VDialog.0e5cb4c7.js";import{V as M,a as C,b as H,c as Q}from"./VWindowItem.2277bb31.js";import"./index.2bd8ddc8.js";import"./VCheckboxBtn.70d98d74.js";import"./VChip.c7cc526f.js";const E={mixins:[P],data(){return{loading:!0,snackbar:!1,snackbarText:"",timeout:6e3,color:"",top:!1,bottom:!0,left:!1,right:!1,satusrules:[e=>!!e||"Status is required"],storearules:[e=>!!e||"Store Address is required"],locationrules:[e=>!!e||"Location is required"],storerules:[e=>!!e||"Store Name is required"],uidrules:[e=>!!e||"UID is required"],namerules:[e=>!!e||"Lead is required"],authrules:[e=>!!e||"Authority is required"],namerules1:[e=>!!e||"Name is required"],gstrules:[e=>!!e||"GST is required"],pinrules:[e=>!!e||"PIN is required",e=>e&&/^\d{6}$/.test(e)||"PIN must be 6 digits"],emailRules:[e=>!!e||"Email is required",e=>/.+@.+\..+/.test(e)||"The email must be valid with the correct format: @ and . symbols"],phonerules:[e=>!!e||" Mobile  is required",e=>/^[0-9]+$/.test(e)||"only number are accepted",e=>e&&e.length<=10&&e.length>=10||"Mobile must be  10 number"],dialog:!1,Leadid:null,saveLeads:{lead_type:"",name:"",address:"",pincode:"",lead_id:"",owner_name:"",owner_phone:"",poc_name:"",poc_phone:"",gst:"",decision_authority:"",user_id:"",location:"",status:""},loggedby:"",headers:[{text:"Purchase Order",value:"po"},{text:"Order Date",value:"ODate"},{text:"Status",value:"status"},{text:"Order To",value:"OT"},{text:"Shipped To",value:"ST"},{text:"Total",value:"total"},{text:"Action",value:"actions",sortable:!1}]}},mounted(){this.Leadid=this.$route.query.lead_id,this.loggedby=localStorage.getItem("createdby"),this.editLeadsdata().then(()=>{this.loading=!1}).catch(e=>{console.error("Error fetching merchants:",e)})},methods:{validateForm(){this.$refs.purchaseOrderForm.validate().then(e=>{e.valid==!0?this.updateLeaddata():(this.snackbar=!0,this.snackbarText="Please give all mandatory fields",this.color="on-background")})},updateLeaddata(){const e={Created:"created","Partially interested":"partially interested",Cancelled:"cancelled",Closed:"closed"},a={name:this.saveLeads.name,address:this.saveLeads.address,pincode:this.saveLeads.pincode,lead_id:this.saveLeads.lead_id,owner_name:this.saveLeads.owner_name,owner_phone:this.saveLeads.owner_phone,poc_name:this.saveLeads.poc_name,poc_phone:this.saveLeads.poc_phone,gst:this.saveLeads.gst,decision_authority:this.saveLeads.decision_authority,location:this.saveLeads.location,status:e[this.saveLeads.status]};console.log("update lead",a),this.updateLead(a).then(d=>{console.log("check data",d),d.data.status==1?(this.snackbar=!0,this.snackbarText=d.data.message,this.color="primary"):(this.snackbar=!0,this.snackbarText=d.data.message,this.color="on-background",this.saveLeads={})})},editLeadsdata(){return new Promise((e,a)=>{this.updateLeads(this.Leadid).then(d=>{console.log("check response",d.data.data),this.saveLeads.lead_type=d.data.data.lead_type,this.saveLeads.address=d.data.data.address,this.saveLeads.decision_authority=d.data.data.decision_authority,this.saveLeads.gst=d.data.data.gst,this.saveLeads.name=d.data.data.name,this.saveLeads.lead_id=d.data.data.lead_id,this.saveLeads.owner_name=d.data.data.owner_name,this.saveLeads.owner_phone=d.data.data.owner_phone,this.saveLeads.poc_name=d.data.data.poc_name,this.saveLeads.poc_phone=d.data.data.poc_phone,this.saveLeads.pincode=d.data.data.pincode,this.saveLeads.location=d.data.data.location,this.saveLeads.status=d.data.data.status,e()}).catch(d=>{console.error("Error fetching merchants:",d),a(d)})})}}},G={key:0,class:"loading-container"};function j(e,a,d,g,s,n){return m(),f("div",null,[s.loading?(m(),f("div",G,[t(I,{height:"5",color:"primary",indeterminate:"",class:"custom-loader","full-width":""})])):N("",!0),t(_,null,{default:o(()=>[t(i,{cols:"12"},{default:o(()=>[t(b,{title:"Lead Basic data",class:"mb-4"},{default:o(()=>[t(V,null,{default:o(()=>[t(y,{class:"mt-6",ref:"purchaseOrderForm"},{default:o(()=>[t(_,null,{default:o(()=>[t(i,{cols:"12",md:"6"},{default:o(()=>[t(r,{modelValue:s.saveLeads.lead_type,"onUpdate:modelValue":a[0]||(a[0]=l=>s.saveLeads.lead_type=l),label:"Name",rules:s.storerules,readonly:""},null,8,["modelValue","rules"])]),_:1}),t(i,{cols:"12",md:"6"},{default:o(()=>[t(r,{modelValue:s.saveLeads.name,"onUpdate:modelValue":a[1]||(a[1]=l=>s.saveLeads.name=l),label:"Name",rules:s.storerules},null,8,["modelValue","rules"])]),_:1}),t(i,{cols:"12",md:"6"},{default:o(()=>[t(r,{modelValue:s.loggedby,"onUpdate:modelValue":a[2]||(a[2]=l=>s.loggedby=l),label:"Lead Handler",readonly:""},null,8,["modelValue"])]),_:1}),t(i,{md:"6",cols:"12"},{default:o(()=>[t(r,{modelValue:s.saveLeads.address,"onUpdate:modelValue":a[3]||(a[3]=l=>s.saveLeads.address=l),label:"Address",rules:s.storearules},null,8,["modelValue","rules"])]),_:1}),t(i,{md:"6",cols:"12"},{default:o(()=>[t(r,{modelValue:s.saveLeads.gst,"onUpdate:modelValue":a[4]||(a[4]=l=>s.saveLeads.gst=l),label:"GST"},null,8,["modelValue"])]),_:1}),t(i,{md:"6",cols:"12"},{default:o(()=>[t(r,{modelValue:s.saveLeads.pincode,"onUpdate:modelValue":a[5]||(a[5]=l=>s.saveLeads.pincode=l),label:"Area PinCode",rules:s.pinrules},null,8,["modelValue","rules"])]),_:1}),t(i,{md:"6",cols:"12"},{default:o(()=>[t(r,{modelValue:s.saveLeads.poc_name,"onUpdate:modelValue":a[6]||(a[6]=l=>s.saveLeads.poc_name=l),rules:s.namerules1,label:"POC Name"},null,8,["modelValue","rules"])]),_:1}),t(i,{md:"6",cols:"12"},{default:o(()=>[t(r,{modelValue:s.saveLeads.poc_phone,"onUpdate:modelValue":a[7]||(a[7]=l=>s.saveLeads.poc_phone=l),rules:s.phonerules,label:"POC Phone"},null,8,["modelValue","rules"])]),_:1}),t(i,{md:"6",cols:"12"},{default:o(()=>[t(r,{modelValue:s.saveLeads.owner_name,"onUpdate:modelValue":a[8]||(a[8]=l=>s.saveLeads.owner_name=l),rules:s.namerules1,label:"Owner Name"},null,8,["modelValue","rules"])]),_:1}),t(i,{md:"6",cols:"12"},{default:o(()=>[t(r,{modelValue:s.saveLeads.owner_phone,"onUpdate:modelValue":a[9]||(a[9]=l=>s.saveLeads.owner_phone=l),rules:s.phonerules,label:"Owner Phone"},null,8,["modelValue","rules"])]),_:1}),t(i,{md:"6",cols:"12"},{default:o(()=>[t(D,{modelValue:s.saveLeads.status,"onUpdate:modelValue":a[10]||(a[10]=l=>s.saveLeads.status=l),rules:s.satusrules,items:["Created","Partially interested","Cancelled","Closed"],label:"Lead Status"},null,8,["modelValue","rules"])]),_:1}),t(i,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:o(()=>[t(k,{onClick:n.validateForm},{default:o(()=>[p("Save")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1}),t(q,{modelValue:s.snackbar,"onUpdate:modelValue":a[11]||(a[11]=l=>s.snackbar=l),timeout:3500,color:s.color},{default:o(()=>[p(h(s.snackbarText),1)]),_:1},8,["modelValue","color"])])}const Y=x(E,[["render",j]]),J={mixins:[P],data(){return{page:1,pageSize:10,searchQuery:"",today:this.getFormattedDate(new Date),snackbar:!1,snackbarText:"",timeout:6e3,color:"",top:!1,bottom:!0,left:!1,right:!1,workinfoupdate:{summary:"",working_notes:"",visit_status:"",schedule_next_visit:"",lead_info_id:""},workinfo:{summary:"",working_notes:"",visit_status:"",schedule_next_visit:""},Leadid:"",maxPaginationPages:5,workingRules:[e=>!!e||"Working Notes is required"],visitRules:[e=>!!e||"Visit Status is required"],summaryRules:[e=>!!e||"Summary is required"],uomRules:[e=>!!e||"UOM is required"],pinrules:[e=>!!e||"PIN is required"],phonerules:[e=>!!e||" Mobile  is required",e=>/^[0-9]+$/.test(e)||"only number are accepted",e=>e&&e.length<=10&&e.length>=10||"Mobile must be  10 number"],snackbar:!1,snackbarText:"",timeout:6e3,color:"",top:!1,bottom:!0,left:!1,right:!1,dialog:!1,loading:!0,page:1,pageSize:10,products:[],saveProduct:{merchant_uid:"",brand_name:"",sku_name:"",uom:"",hsn_code:"",mrp:"",status:"",brand_id:"",brand_product_id:"",total_given_margin:"",sgst:"",cgst:"",pitch_from:"",final_retail_cp:"",final_ret:"",bk_profit:"",bizkingz_cp_final:"",bc_margin_amt:"",bc_margin:""},salesdata:[],BrandNames:[],selectedBrand:null,userRole:"",dialog9:!1,createdby:"",workInfo:[],headers:[{text:"Date",value:"created_date"},{text:"Updated Date",value:"updated_date"},{text:"Summary",value:"summary"},{text:"Notes",value:"working_notes"},{text:"Status",value:"visit_status"},{text:"Action",value:"action"}]}},computed:{filteredSalesHistory(){const e=this.searchQuery.toLowerCase().trim();return this.workInfo.filter(a=>a.created_date&&a.created_date.toLowerCase().includes(e)||a.updated_date&&a.updated_date.toLowerCase().includes(e)||a.summary&&a.summary.toLowerCase().includes(e)||a.working_notes&&a.working_notes.toString().includes(e)||a.visit_status&&a.visit_status.toLowerCase().includes(e))},paginatedItems(){const e=(this.page-1)*this.pageSize,a=e+this.pageSize;return this.filteredSalesHistory.slice(e,a)}},mounted(){this.Leadid=this.$route.query.lead_id,console.log("check the id",this.Leadid),this.updateLeadsdata()},methods:{updatePagination(e){this.page=e},closeinfo(){this.dialog9=!1,this.workinfoupdate={}},validateForm2(){this.$refs.purchaseOrderForm8.validate().then(e=>{e.valid==!0?this.updateworkinfo():(this.snackbar=!0,this.snackbarText="Please give all mandatory fields",this.color="on-background")})},updateworkinfo(){const e={lead_info_id:this.workinfoupdate.lead_info_id,summary:this.workinfoupdate.summary,working_notes:this.workinfoupdate.working_notes,visit_status:this.workinfoupdate.visit_status,schedule_next_visit:this.workinfoupdate.schedule_next_visit};console.log("check the data",e),this.UpdateLeadInfo(e).then(a=>{a.data.status==1?(this.snackbar=!0,this.snackbarText=a.data.message,this.color="primary",this.workinfoupdate={},this.updateLeadsdata(),this.dialog9=!1):(this.snackbar=!0,this.snackbarText=a.data.message,this.color="on-background",this.workinfoupdate={},this.dialog9=!1)})},editWorkinfo(e){console.log("check d",e),this.dialog9=!0,this.workinfoupdate.summary=e.summary,this.workinfoupdate.visit_status=e.visit_status,this.workinfoupdate.schedule_next_visit=e.schedule_next_visit,this.workinfoupdate.working_notes=e.working_notes,this.workinfoupdate.lead_info_id=e.lead_info_id},validateForm(){this.$refs.purchaseOrderForm.validate().then(e=>{e.valid==!0?this.saveworkinfo():(this.snackbar=!0,this.snackbarText="Please give all mandatory fields",this.color="on-background")})},saveworkinfo(){const e={lead_id:this.Leadid,summary:this.workinfo.summary,working_notes:this.workinfo.working_notes,visit_status:this.workinfo.visit_status,schedule_next_visit:this.workinfo.schedule_next_visit};console.log("check the data",e),this.AddLeadInfo(e).then(a=>{a.data.status==1?(this.snackbar=!0,this.snackbarText=a.data.message,this.color="primary",this.workinfo={},this.updateLeadsdata()):(this.snackbar=!0,this.snackbarText=a.data.message,this.color="on-background",this.workinfo={})})},updateLeadsdata(){this.updateLeads(this.Leadid).then(e=>{console.log("check response",e.data.data.work_info),this.workInfo=e.data.data.work_info})},getFormattedDate(e){const a=e.getFullYear(),d=String(e.getMonth()+1).padStart(2,"0"),g=String(e.getDate()).padStart(2,"0");return`${a}-${d}-${g}`}}},K={style:{"max-width":"400px"}},X={class:"text-center"},Z={class:"text-center"},$={class:"text-center"},ee={class:"text-center"},ae={class:"text-center"},te={class:"text-center"};function se(e,a,d,g,s,n){return m(),f("div",null,[t(_,null,{default:o(()=>[t(i,{cols:"12"},{default:o(()=>[t(b,{title:"Work Info",class:"mb-4"},{default:o(()=>[t(V,null,{default:o(()=>[t(y,{class:"mt-6",ref:"purchaseOrderForm"},{default:o(()=>[t(_,null,{default:o(()=>[t(i,{md:"4",cols:"12"},{default:o(()=>[t(r,{modelValue:this.workinfo.summary,"onUpdate:modelValue":a[0]||(a[0]=l=>this.workinfo.summary=l),label:"Summary",rules:s.summaryRules},null,8,["modelValue","rules"])]),_:1}),t(i,{cols:"12",md:"4"},{default:o(()=>[t(r,{modelValue:this.workinfo.visit_status,"onUpdate:modelValue":a[1]||(a[1]=l=>this.workinfo.visit_status=l),rules:s.visitRules,label:"Visit Status"},null,8,["modelValue","rules"])]),_:1}),t(i,{cols:"12",md:"4"},{default:o(()=>[t(r,{modelValue:this.workinfo.schedule_next_visit,"onUpdate:modelValue":a[2]||(a[2]=l=>this.workinfo.schedule_next_visit=l),type:"date",min:s.today,label:"Schedule Next Visit"},null,8,["modelValue","min"])]),_:1}),t(i,{cols:"12"},{default:o(()=>[t(T,{modelValue:this.workinfo.working_notes,"onUpdate:modelValue":a[3]||(a[3]=l=>this.workinfo.working_notes=l),label:"Working Notes",rules:s.workingRules,"row-height":"30",rows:"4",variant:"filled","auto-grow":"",shaped:""},null,8,["modelValue","rules"])]),_:1}),t(i,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:o(()=>[t(k,{onClick:n.validateForm},{default:o(()=>[p("Save")]),_:1},8,["onClick"])]),_:1}),t(i,{cols:"12"},{default:o(()=>[u("div",K,[t(r,{class:"mb-3",modelValue:s.searchQuery,"onUpdate:modelValue":a[4]||(a[4]=l=>s.searchQuery=l),density:"compact",variant:"solo",label:"Search","append-inner-icon":"mdi-magnify","single-line":"","hide-details":""},null,8,["modelValue"])]),t(z,{headers:s.headers,items:n.paginatedItems,"item-key":"brand_name",class:"table-rounded",height:"500","fixed-header":""},{default:o(()=>[u("thead",null,[u("tr",null,[(m(!0),f(w,null,L(s.headers,l=>(m(),f("th",{class:"text-center",key:l},h(l.text),1))),128))])]),u("tbody",null,[(m(!0),f(w,null,L(n.paginatedItems,(l,v)=>(m(),f("tr",{key:v},[u("td",X,h(l.created_date),1),u("td",Z,h(l.updated_date),1),u("td",$,h(l.summary),1),u("td",ee,h(l.working_notes),1),u("td",ae,h(l.visit_status),1),u("td",te,[t(k,{icon:"",variant:"text",color:"default",class:"mb-1 mt-2",size:"x-small",onClick:c=>n.editWorkinfo(l)},{default:o(()=>[t(U,{icon:"ri-pencil-line",size:"22",color:"#BA8B32"})]),_:2},1032,["onClick"])])]))),128))])]),_:1},8,["headers","items"]),t(W,{modelValue:s.page,"onUpdate:modelValue":a[5]||(a[5]=l=>s.page=l),length:Math.ceil(n.filteredSalesHistory.length/s.pageSize),onInput:n.updatePagination},null,8,["modelValue","length","onInput"])]),_:1}),t(A,{modelValue:s.dialog9,"onUpdate:modelValue":a[11]||(a[11]=l=>s.dialog9=l),"max-width":"1000"},{default:o(()=>[t(b,{title:"User Store",class:"mb-2"},{default:o(()=>[t(V,null,{default:o(()=>[t(_,null,{default:o(()=>[t(i,{cols:"12"},{default:o(()=>[t(y,{class:"mt-6",ref:"purchaseOrderForm8"},{default:o(()=>[t(_,null,{default:o(()=>[t(i,{md:"4",cols:"12"},{default:o(()=>[t(r,{modelValue:this.workinfoupdate.summary,"onUpdate:modelValue":a[6]||(a[6]=l=>this.workinfoupdate.summary=l),label:"Summary",rules:s.summaryRules},null,8,["modelValue","rules"])]),_:1}),t(i,{cols:"12",md:"4"},{default:o(()=>[t(r,{modelValue:this.workinfoupdate.visit_status,"onUpdate:modelValue":a[7]||(a[7]=l=>this.workinfoupdate.visit_status=l),rules:s.visitRules,label:"Visit Status"},null,8,["modelValue","rules"])]),_:1}),t(i,{cols:"12",md:"4"},{default:o(()=>[t(r,{modelValue:this.workinfoupdate.schedule_next_visit,"onUpdate:modelValue":a[8]||(a[8]=l=>this.workinfoupdate.schedule_next_visit=l),type:"date",min:s.today,label:"Schedule Next Visit"},null,8,["modelValue","min"])]),_:1}),t(i,{cols:"12"},{default:o(()=>[t(T,{modelValue:this.workinfoupdate.working_notes,"onUpdate:modelValue":a[9]||(a[9]=l=>this.workinfoupdate.working_notes=l),label:"Working Notes",rules:s.workingRules,"row-height":"30",rows:"4",variant:"filled","auto-grow":"",shaped:""},null,8,["modelValue","rules"])]),_:1}),t(i,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:o(()=>[t(k,{onClick:n.validateForm2},{default:o(()=>[p("Save")]),_:1},8,["onClick"]),t(k,{onClick:a[10]||(a[10]=l=>n.closeinfo())},{default:o(()=>[p("Close")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1}),t(q,{modelValue:s.snackbar,"onUpdate:modelValue":a[12]||(a[12]=l=>s.snackbar=l),timeout:3500,color:s.color},{default:o(()=>[p(h(s.snackbarText),1)]),_:1},8,["modelValue","color"])])}const le=x(J,[["render",se]]),oe={components:{LeadBasicdata:Y,Leadworkinfo:le},data(){return{currentroute:"",activeTab:"",tabs:[{title:"Lead Basic Data",icon:"mdi-account-outline",tab:"account"},{title:"Work Info History",icon:"mdi-lock-open-outline",tab:"notification"}]}},mounted(){this.currentroute=F(),this.activeTab=O(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function de(e,a,d,g,s,n){const l=S("LeadBasicdata"),v=S("Leadworkinfo");return m(),f("div",null,[t(M,{modelValue:s.activeTab,"onUpdate:modelValue":a[0]||(a[0]=c=>s.activeTab=c),"show-arrows":""},{default:o(()=>[(m(!0),f(w,null,L(s.tabs,c=>(m(),R(Q,{key:c.icon,value:c.tab},{default:o(()=>[t(U,{size:"20",start:"",icon:c.icon},null,8,["icon"]),p(" "+h(c.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),t(B),t(H,{modelValue:s.activeTab,"onUpdate:modelValue":a[1]||(a[1]=c=>s.activeTab=c),class:"mt-5 disable-tab-transition",touch:!1},{default:o(()=>[t(C,{value:"account"},{default:o(()=>[t(l)]),_:1}),t(C,{value:"notification"},{default:o(()=>[t(v)]),_:1})]),_:1},8,["modelValue"])])}const Ve=x(oe,[["render",de]]);export{Ve as default};
