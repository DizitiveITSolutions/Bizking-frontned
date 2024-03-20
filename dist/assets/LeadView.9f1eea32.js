import{_ as f,o as r,c,f as p,w as l,g as d,i as V,j as w,k as y,b as m,l as L,b6 as _,a as s,F as h,q as g,t as n,m as C,u as v,bD as P,bn as k,v as T,e as S,s as D,r as z}from"./index.81a16aa7.js";import{s as I}from"./Services.3d42a0ca.js";import{V as N,a as q}from"./VAlert.426d9947.js";import{V as B}from"./VTextField.f16d975d.js";import{V as A}from"./VTable.be5611d2.js";import{V as Q}from"./VPagination.a970c054.js";import{V as U,a as M,b as R,c as F}from"./VWindowItem.6f57b3cb.js";import"./index.2bd8ddc8.js";const O={mixins:[I],data(){return{page:1,pageSize:10,loading:!0,searchQuery:"",maxPaginationPages:5,storerules:[e=>!!e||"Store Address is required"],mrprules:[e=>!!e||"MRP is required"],namerules:[e=>!!e||"Name is required"],uomRules:[e=>!!e||"UOM is required"],pinrules:[e=>!!e||"PIN is required"],phonerules:[e=>!!e||" Mobile  is required",e=>/^[0-9]+$/.test(e)||"only number are accepted",e=>e&&e.length<=10&&e.length>=10||"Mobile must be  10 number"],snackbar:!1,snackbarText:"",timeout:6e3,color:"",top:!1,bottom:!0,left:!1,right:!1,dialog:!1,loading:!0,searchQuery:"",page:1,pageSize:10,products:[],saveProduct:{merchant_uid:"",brand_name:"",sku_name:"",uom:"",hsn_code:"",mrp:"",status:"",brand_id:"",brand_product_id:"",total_given_margin:"",sgst:"",cgst:"",pitch_from:"",final_retail_cp:"",final_ret:"",bk_profit:"",bizkingz_cp_final:"",bc_margin_amt:"",bc_margin:""},selectedBrand:null,userRole:"",createdby:"",userid:"",leadData:[],headers:[{text:"Lead",value:"lead_no"},{text:"Type",value:"lead_type"},{text:"Store Name",value:"name"},{text:"Address",value:"address"},{text:"Status",value:"status"},{text:"GST",value:"gst"},{text:"Owner Name",value:"owner_name"},{text:"Owner Phone",value:"owner_phone"},{text:"Poc Name",value:"poc_name"},{text:"Poc Phone",value:"poc_phone"},{text:"Updated Date",value:"updated_date"},{text:"Created Date",value:"created_date"},{text:"PinCode",value:"pincode"},{text:"Action",value:"actions"}]}},computed:{filteredProducts(){const e=this.searchQuery.toLowerCase().trim();return this.leadData.filter(t=>t.lead_no&&t.lead_no.toLowerCase().includes(e)||t.lead_type&&t.lead_type.toLowerCase().includes(e)||t.name&&t.name.toLowerCase().includes(e)||t.address&&t.address.toLowerCase().includes(e)||t.location&&t.location.toLowerCase().includes(e)||t.status&&t.status.toLowerCase().includes(e)||t.gst&&t.gst.toLowerCase().includes(e)||t.owner_name&&t.owner_name.toLowerCase().includes(e)||t.owner_phone&&t.owner_phone.toLowerCase().includes(e)||t.poc_name&&t.poc_name.toLowerCase().includes(e)||t.poc_phone&&t.poc_phone.toString().includes(e)||t.updated_date&&t.updated_date.toLowerCase().includes(e)||t.created_date&&t.created_date.toLowerCase().includes(e)||t.pincode&&t.pincode.toLowerCase().includes(e))},paginatedItems(){const e=(this.page-1)*this.pageSize,t=e+this.pageSize;return this.filteredProducts.slice(e,t)}},mounted(){this.userid=localStorage.getItem("user_id"),this.getLeaddata(),setTimeout(()=>{this.loading=!1},3e3)},methods:{updatePagination(e){this.page=e},getLeaddata(){this.getLeads().then(e=>{console.log("res",e),this.leadData=e.data.data,this.leadData.reverse()})},editProduct(e){this.$router.push({name:"Leadbasicdataview",query:{lead_id:e.lead_id}})}}},W=s("p",{class:"mb-0"}," The system is not retrieving the Leads. Please ensure that you have applied for Leads !",-1),j={key:1,style:{"max-width":"400px"}},E={key:2,id:"app"},G=P('<div id="loading-bg"><div class="loading-logo"><img src="'+k+'" height="60" width="68" alt="Logo"></div><div class="loading"><div class="effect-1 effects"></div><div class="effect-2 effects"></div><div class="effect-3 effects"></div></div></div>',1),H=[G],J={class:"text-center"},K={class:"text-center"},X={class:"text-center"},Y={class:"text-center"},Z={class:"text-center"},$={class:"text-center"},ee={class:"text-center"},te={class:"text-center"},ae={class:"text-center"},se={class:"text-center"},oe={class:"text-center"},ne={class:"text-center"},de={class:"text-center"},re={class:"text-center"};function le(e,t,b,x,o,u){return r(),c("div",null,[this.leadData==null?(r(),p(L,{key:0},{default:l(()=>[d(V,{cols:"12"},{default:l(()=>[d(w,{title:"Lead View"},{default:l(()=>[d(y,null,{default:l(()=>[d(N,{color:"warning",variant:"tonal",class:"mb-4",border:"top"},{default:l(()=>[d(q,{class:"mb-1"},{default:l(()=>[m(" Are you sure you gave Leads? ")]),_:1}),W]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):_("",!0),this.leadData!=null?(r(),c("div",j,[d(B,{class:"mb-3",modelValue:o.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=a=>o.searchQuery=a),density:"compact",variant:"solo",label:"Search","append-inner-icon":"mdi-magnify","single-line":"","hide-details":""},null,8,["modelValue"])])):_("",!0),o.loading?(r(),c("div",E,H)):_("",!0),this.leadData!=null?(r(),p(A,{key:3,headers:o.headers,"item-key":"dessert",class:"table-rounded",height:"500","fixed-header":""},{default:l(()=>[s("thead",null,[s("tr",null,[(r(!0),c(h,null,g(o.headers,a=>(r(),c("th",{class:"text-center",key:a},n(a.text),1))),128))])]),s("tbody",null,[(r(!0),c(h,null,g(u.paginatedItems,(a,i)=>(r(),c("tr",{key:i},[s("td",J,n(a.lead_no),1),s("td",K,n(a.lead_type),1),s("td",X,n(a.name),1),s("td",Y,n(a.address),1),s("td",Z,n(a.status),1),s("td",$,n(a.gst),1),s("td",ee,n(a.owner_name),1),s("td",te,n(a.owner_phone),1),s("td",ae,n(a.poc_name),1),s("td",se,n(a.poc_phone),1),s("td",oe,n(a.updated_date),1),s("td",ne,n(a.created_date),1),s("td",de,n(a.pincode),1),s("td",re,[d(C,{icon:"",variant:"text",color:"default",class:"mb-1 mt-2",size:"x-small",onClick:_e=>u.editProduct(a)},{default:l(()=>[d(v,{icon:"ri-pencil-line",size:"22",color:"#BA8B32"})]),_:2},1032,["onClick"])])]))),128))])]),_:1},8,["headers"])):_("",!0),d(Q,{modelValue:o.page,"onUpdate:modelValue":t[1]||(t[1]=a=>o.page=a),length:Math.ceil(u.filteredProducts.length/o.pageSize),onInput:u.updatePagination,max:o.maxPaginationPages},null,8,["modelValue","length","onInput","max"])])}const ie=f(O,[["render",le]]),ce={components:{ViewLead:ie},data(){return{currentroute:"",activeTab:"",tabs:[{title:"View Lead",icon:"mdi-account-outline",tab:"account"}]}},mounted(){this.currentroute=T(),this.activeTab=S(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function ue(e,t,b,x,o,u){const a=z("ViewLead");return r(),c("div",null,[d(U,{modelValue:o.activeTab,"onUpdate:modelValue":t[0]||(t[0]=i=>o.activeTab=i),"show-arrows":""},{default:l(()=>[(r(!0),c(h,null,g(o.tabs,i=>(r(),p(F,{key:i.icon,value:i.tab},{default:l(()=>[d(v,{size:"20",start:"",icon:i.icon},null,8,["icon"]),m(" "+n(i.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),d(D),d(R,{modelValue:o.activeTab,"onUpdate:modelValue":t[1]||(t[1]=i=>o.activeTab=i),class:"mt-5 disable-tab-transition",touch:!1},{default:l(()=>[d(M,{value:"account"},{default:l(()=>[d(a)]),_:1})]),_:1},8,["modelValue"])])}const Ve=f(ce,[["render",ue]]);export{Ve as default};