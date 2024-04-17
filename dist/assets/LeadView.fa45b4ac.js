import{_ as v,o as d,c,f as p,w as l,g as r,i as V,j as w,k as y,b as f,l as L,b7 as h,a as s,F as g,q as m,t as o,m as C,u as b,bE as P,bo as k,v as T,e as S,s as z,r as D}from"./index.770217b7.js";import{s as N}from"./Services.3f0d6fd4.js";import{V as I,a as B}from"./VAlert.dc4c6dbb.js";import{V as q}from"./VTextField.0cf7855a.js";import{V as A}from"./VChip.0d58c467.js";import{V as Q}from"./VTable.8037f524.js";import{V as U}from"./VPagination.d84a237d.js";import{V as M,a as R,b as E,c as F}from"./VWindowItem.1716d9b0.js";const O={mixins:[N],data(){return{page:1,pageSize:10,loading:!0,searchQuery:"",maxPaginationPages:5,storerules:[e=>!!e||"Store Address is required"],mrprules:[e=>!!e||"MRP is required"],namerules:[e=>!!e||"Name is required"],uomRules:[e=>!!e||"UOM is required"],pinrules:[e=>!!e||"PIN is required"],phonerules:[e=>!!e||" Mobile  is required",e=>/^[0-9]+$/.test(e)||"only number are accepted",e=>e&&e.length<=10&&e.length>=10||"Mobile must be  10 number"],snackbar:!1,snackbarText:"",timeout:6e3,color:"",top:!1,bottom:!0,left:!1,right:!1,dialog:!1,loading:!0,searchQuery:"",page:1,pageSize:10,products:[],saveProduct:{merchant_uid:"",brand_name:"",sku_name:"",uom:"",hsn_code:"",mrp:"",status:"",brand_id:"",brand_product_id:"",total_given_margin:"",sgst:"",cgst:"",pitch_from:"",final_retail_cp:"",final_ret:"",bk_profit:"",bizkingz_cp_final:"",bc_margin_amt:"",bc_margin:""},selectedBrand:null,userRole:"",createdby:"",userid:"",leadData:[],headers:[{text:"Lead",value:"lead_no"},{text:"Type",value:"lead_type"},{text:"Created By",value:"created_by"},{text:"Name",value:"name"},{text:"Address",value:"address"},{text:"Status",value:"status"},{text:"GST",value:"gst"},{text:"Owner Name",value:"owner_name"},{text:"Owner Phone",value:"owner_phone"},{text:"Poc Name",value:"poc_name"},{text:"Poc Phone",value:"poc_phone"},{text:"Updated Date",value:"updated_date"},{text:"Created Date",value:"created_date"},{text:"PinCode",value:"pincode"},{text:"Action",value:"actions"}]}},computed:{leadfilter(){return this.leadData.filter(e=>e.status!="closed")},filteredProducts(){const e=this.searchQuery.toLowerCase().trim();return this.leadfilter.filter(t=>t.lead_no&&t.lead_no.toLowerCase().includes(e)||t.lead_type&&t.lead_type.toLowerCase().includes(e)||t.name&&t.name.toLowerCase().includes(e)||t.address&&t.address.toLowerCase().includes(e)||t.created_by&&t.created_by.toLowerCase().includes(e)||t.location&&t.location.toLowerCase().includes(e)||t.status&&t.status.toLowerCase().includes(e)||t.gst&&t.gst.toLowerCase().includes(e)||t.owner_name&&t.owner_name.toLowerCase().includes(e)||t.owner_phone&&t.owner_phone.toLowerCase().includes(e)||t.poc_name&&t.poc_name.toLowerCase().includes(e)||t.poc_phone&&t.poc_phone.toString().includes(e)||t.updated_date&&t.updated_date.toLowerCase().includes(e)||t.created_date&&t.created_date.toLowerCase().includes(e)||t.pincode&&t.pincode.toLowerCase().includes(e))},paginatedItems(){const e=(this.page-1)*this.pageSize,t=e+this.pageSize;return this.filteredProducts.slice(e,t)}},mounted(){this.userid=localStorage.getItem("user_id"),this.getLeaddata().then(()=>{this.loading=!1}).catch(e=>{console.error("Error fetching merchants:",e)})},methods:{resolveStatusVariant(e){return e=="Partially interested"||e=="partially interested"?{color:"warning"}:e=="Closed"||e=="closed"?{color:"success"}:e=="Created"||e=="created"?{color:"primary"}:{color:"error"}},updatePagination(e){this.page=e},getLeaddata(){return new Promise((e,t)=>{this.getLeads().then(_=>{this.leadData=_.data.data,this.leadData.reverse(),e()}).catch(_=>{console.error("Error fetching merchants:",_),t(_)})})},editProduct(e){this.$router.push({name:"Leadbasicdataview",query:{lead_id:e.lead_id}})}}},W=s("p",{class:"mb-0"}," The system is not retrieving the Leads. Please ensure that you have applied for Leads !",-1),j={key:1,style:{"max-width":"400px"}},G={key:2,id:"app"},H=P('<div id="loading-bg"><div class="loading-logo"><img src="'+k+'" height="60" width="68" alt="Logo"></div><div class="loading"><div class="effect-1 effects"></div><div class="effect-2 effects"></div><div class="effect-3 effects"></div></div></div>',1),J=[H],K={key:3},X={class:"text-center"},Y={class:"text-center"},Z={class:"text-center"},$={class:"text-center"},ee={class:"text-center"},te={class:"text-center"},ae={class:"text-center"},se={class:"text-center"},oe={class:"text-center"},re={class:"text-center"},ne={class:"text-center"},de={class:"text-center"},le={class:"text-center"},ce={class:"text-center"},ie={class:"text-center"},ue={key:0},_e=s("td",{colspan:"16",class:"text-center"},[s("h1",null,"No data found !")],-1),he=[_e];function pe(e,t,_,x,n,u){return d(),c("div",null,[this.leadData==null?(d(),p(L,{key:0},{default:l(()=>[r(V,{cols:"12"},{default:l(()=>[r(w,{title:"Lead View"},{default:l(()=>[r(y,null,{default:l(()=>[r(I,{color:"warning",variant:"tonal",class:"mb-4",border:"top"},{default:l(()=>[r(B,{class:"mb-1"},{default:l(()=>[f(" Are you sure you gave Leads? ")]),_:1}),W]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):h("",!0),this.leadData!=null?(d(),c("div",j,[r(q,{class:"mb-3",modelValue:n.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=a=>n.searchQuery=a),density:"compact",variant:"solo",label:"Search","append-inner-icon":"mdi-magnify","single-line":"","hide-details":""},null,8,["modelValue"])])):h("",!0),n.loading?(d(),c("div",G,J)):h("",!0),u.filteredProducts.length===0?(d(),c("div",K)):h("",!0),this.leadData!=null?(d(),p(Q,{key:4,headers:n.headers,"item-key":"dessert",class:"table-rounded",height:"500","fixed-header":""},{default:l(()=>[s("thead",null,[s("tr",null,[(d(!0),c(g,null,m(n.headers,a=>(d(),c("th",{class:"text-center",key:a},o(a.text),1))),128))])]),s("tbody",null,[(d(!0),c(g,null,m(u.paginatedItems,(a,i)=>(d(),c("tr",{key:i},[s("td",X,o(a.lead_no),1),s("td",Y,o(a.lead_type),1),s("td",Z,o(a.created_by),1),s("td",$,o(a.name),1),s("td",ee,o(a.address),1),s("td",te,[r(A,{color:u.resolveStatusVariant(a.status).color,class:"font-weight-medium",size:"small"},{default:l(()=>[f(o(a.status),1)]),_:2},1032,["color"])]),s("td",ae,o(a.gst),1),s("td",se,o(a.owner_name),1),s("td",oe,o(a.owner_phone),1),s("td",re,o(a.poc_name),1),s("td",ne,o(a.poc_phone),1),s("td",de,o(a.updated_date),1),s("td",le,o(a.created_date),1),s("td",ce,o(a.pincode),1),s("td",ie,[r(C,{icon:"",variant:"text",color:"default",class:"mb-1 mt-2",size:"x-small",onClick:ve=>u.editProduct(a)},{default:l(()=>[r(b,{icon:"ri-pencil-line",size:"22",color:"#BA8B32"})]),_:2},1032,["onClick"])])]))),128)),u.filteredProducts.length===0?(d(),c("tr",ue,he)):h("",!0)])]),_:1},8,["headers"])):h("",!0),r(U,{modelValue:n.page,"onUpdate:modelValue":t[1]||(t[1]=a=>n.page=a),length:Math.ceil(u.filteredProducts.length/n.pageSize),onInput:u.updatePagination,max:n.maxPaginationPages},null,8,["modelValue","length","onInput","max"])])}const fe=v(O,[["render",pe]]),ge={components:{ViewLead:fe},data(){return{currentroute:"",activeTab:"",tabs:[{title:"View Lead",icon:"mdi-account-outline",tab:"account"}]}},mounted(){this.currentroute=T(),this.activeTab=S(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function me(e,t,_,x,n,u){const a=D("ViewLead");return d(),c("div",null,[r(M,{modelValue:n.activeTab,"onUpdate:modelValue":t[0]||(t[0]=i=>n.activeTab=i),"show-arrows":""},{default:l(()=>[(d(!0),c(g,null,m(n.tabs,i=>(d(),p(F,{key:i.icon,value:i.tab},{default:l(()=>[r(b,{size:"20",start:"",icon:i.icon},null,8,["icon"]),f(" "+o(i.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),r(z),r(E,{modelValue:n.activeTab,"onUpdate:modelValue":t[1]||(t[1]=i=>n.activeTab=i),class:"mt-5 disable-tab-transition",touch:!1},{default:l(()=>[r(R,{value:"account"},{default:l(()=>[r(a)]),_:1})]),_:1},8,["modelValue"])])}const ke=v(ge,[["render",me]]);export{ke as default};
