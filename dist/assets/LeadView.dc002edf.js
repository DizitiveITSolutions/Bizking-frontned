import{_ as m,o as n,c as i,f as p,w as l,g as r,i as V,j as w,k as y,b as h,l as L,b6 as _,a as s,F as f,q as g,t as o,m as C,u as v,bD as P,bn as k,v as T,e as S,s as D,r as z}from"./index.b9236813.js";import{s as I}from"./Services.b8c43c9d.js";import{V as N,a as B}from"./VAlert.ee6561d7.js";import{V as q}from"./VTextField.8ecb6399.js";import{V as A}from"./VChip.c7cc526f.js";import{V as Q}from"./VTable.8079df80.js";import{V as U}from"./VPagination.34e7e61b.js";import{V as M,a as R,b as F,c as O}from"./VWindowItem.2277bb31.js";import"./index.2bd8ddc8.js";const W={mixins:[I],data(){return{page:1,pageSize:10,loading:!0,searchQuery:"",maxPaginationPages:5,storerules:[e=>!!e||"Store Address is required"],mrprules:[e=>!!e||"MRP is required"],namerules:[e=>!!e||"Name is required"],uomRules:[e=>!!e||"UOM is required"],pinrules:[e=>!!e||"PIN is required"],phonerules:[e=>!!e||" Mobile  is required",e=>/^[0-9]+$/.test(e)||"only number are accepted",e=>e&&e.length<=10&&e.length>=10||"Mobile must be  10 number"],snackbar:!1,snackbarText:"",timeout:6e3,color:"",top:!1,bottom:!0,left:!1,right:!1,dialog:!1,loading:!0,searchQuery:"",page:1,pageSize:10,products:[],saveProduct:{merchant_uid:"",brand_name:"",sku_name:"",uom:"",hsn_code:"",mrp:"",status:"",brand_id:"",brand_product_id:"",total_given_margin:"",sgst:"",cgst:"",pitch_from:"",final_retail_cp:"",final_ret:"",bk_profit:"",bizkingz_cp_final:"",bc_margin_amt:"",bc_margin:""},selectedBrand:null,userRole:"",createdby:"",userid:"",leadData:[],headers:[{text:"Lead",value:"lead_no"},{text:"Type",value:"lead_type"},{text:"Created By",value:"created_by"},{text:"Name",value:"name"},{text:"Address",value:"address"},{text:"Status",value:"status"},{text:"GST",value:"gst"},{text:"Owner Name",value:"owner_name"},{text:"Owner Phone",value:"owner_phone"},{text:"Poc Name",value:"poc_name"},{text:"Poc Phone",value:"poc_phone"},{text:"Updated Date",value:"updated_date"},{text:"Created Date",value:"created_date"},{text:"PinCode",value:"pincode"},{text:"Action",value:"actions"}]}},computed:{leadfilter(){return this.leadData.filter(e=>e.status!="closed")},filteredProducts(){const e=this.searchQuery.toLowerCase().trim();return this.leadfilter.filter(t=>t.lead_no&&t.lead_no.toLowerCase().includes(e)||t.lead_type&&t.lead_type.toLowerCase().includes(e)||t.name&&t.name.toLowerCase().includes(e)||t.address&&t.address.toLowerCase().includes(e)||t.created_by&&t.created_by.toLowerCase().includes(e)||t.location&&t.location.toLowerCase().includes(e)||t.status&&t.status.toLowerCase().includes(e)||t.gst&&t.gst.toLowerCase().includes(e)||t.owner_name&&t.owner_name.toLowerCase().includes(e)||t.owner_phone&&t.owner_phone.toLowerCase().includes(e)||t.poc_name&&t.poc_name.toLowerCase().includes(e)||t.poc_phone&&t.poc_phone.toString().includes(e)||t.updated_date&&t.updated_date.toLowerCase().includes(e)||t.created_date&&t.created_date.toLowerCase().includes(e)||t.pincode&&t.pincode.toLowerCase().includes(e))},paginatedItems(){const e=(this.page-1)*this.pageSize,t=e+this.pageSize;return this.filteredProducts.slice(e,t)}},mounted(){this.userid=localStorage.getItem("user_id"),this.getLeaddata(),setTimeout(()=>{this.loading=!1},3e3)},methods:{resolveStatusVariant(e){return e=="Partially interested"||e=="partially interested"?{color:"warning"}:e=="Closed"||e=="closed"?{color:"success"}:e=="Created"||e=="created"?{color:"primary"}:{color:"error"}},updatePagination(e){this.page=e},getLeaddata(){this.getLeads().then(e=>{console.log("res",e),this.leadData=e.data.data,this.leadData.reverse()})},editProduct(e){this.$router.push({name:"Leadbasicdataview",query:{lead_id:e.lead_id}})}}},j=s("p",{class:"mb-0"}," The system is not retrieving the Leads. Please ensure that you have applied for Leads !",-1),E={key:1,style:{"max-width":"400px"}},G={key:2,id:"app"},H=P('<div id="loading-bg"><div class="loading-logo"><img src="'+k+'" height="60" width="68" alt="Logo"></div><div class="loading"><div class="effect-1 effects"></div><div class="effect-2 effects"></div><div class="effect-3 effects"></div></div></div>',1),J=[H],K={class:"text-center"},X={class:"text-center"},Y={class:"text-center"},Z={class:"text-center"},$={class:"text-center"},ee={class:"text-center"},te={class:"text-center"},ae={class:"text-center"},se={class:"text-center"},oe={class:"text-center"},re={class:"text-center"},de={class:"text-center"},le={class:"text-center"},ne={class:"text-center"},ce={class:"text-center"};function ie(e,t,b,x,d,u){return n(),i("div",null,[this.leadData==null?(n(),p(L,{key:0},{default:l(()=>[r(V,{cols:"12"},{default:l(()=>[r(w,{title:"Lead View"},{default:l(()=>[r(y,null,{default:l(()=>[r(N,{color:"warning",variant:"tonal",class:"mb-4",border:"top"},{default:l(()=>[r(B,{class:"mb-1"},{default:l(()=>[h(" Are you sure you gave Leads? ")]),_:1}),j]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):_("",!0),this.leadData!=null?(n(),i("div",E,[r(q,{class:"mb-3",modelValue:d.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=a=>d.searchQuery=a),density:"compact",variant:"solo",label:"Search","append-inner-icon":"mdi-magnify","single-line":"","hide-details":""},null,8,["modelValue"])])):_("",!0),d.loading?(n(),i("div",G,J)):_("",!0),this.leadData!=null?(n(),p(Q,{key:3,headers:d.headers,"item-key":"dessert",class:"table-rounded",height:"500","fixed-header":""},{default:l(()=>[s("thead",null,[s("tr",null,[(n(!0),i(f,null,g(d.headers,a=>(n(),i("th",{class:"text-center",key:a},o(a.text),1))),128))])]),s("tbody",null,[(n(!0),i(f,null,g(u.paginatedItems,(a,c)=>(n(),i("tr",{key:c},[s("td",K,o(a.lead_no),1),s("td",X,o(a.lead_type),1),s("td",Y,o(a.created_by),1),s("td",Z,o(a.name),1),s("td",$,o(a.address),1),s("td",ee,[r(A,{color:u.resolveStatusVariant(a.status).color,class:"font-weight-medium",size:"small"},{default:l(()=>[h(o(a.status),1)]),_:2},1032,["color"])]),s("td",te,o(a.gst),1),s("td",ae,o(a.owner_name),1),s("td",se,o(a.owner_phone),1),s("td",oe,o(a.poc_name),1),s("td",re,o(a.poc_phone),1),s("td",de,o(a.updated_date),1),s("td",le,o(a.created_date),1),s("td",ne,o(a.pincode),1),s("td",ce,[r(C,{icon:"",variant:"text",color:"default",class:"mb-1 mt-2",size:"x-small",onClick:he=>u.editProduct(a)},{default:l(()=>[r(v,{icon:"ri-pencil-line",size:"22",color:"#BA8B32"})]),_:2},1032,["onClick"])])]))),128))])]),_:1},8,["headers"])):_("",!0),r(U,{modelValue:d.page,"onUpdate:modelValue":t[1]||(t[1]=a=>d.page=a),length:Math.ceil(u.filteredProducts.length/d.pageSize),onInput:u.updatePagination,max:d.maxPaginationPages},null,8,["modelValue","length","onInput","max"])])}const ue=m(W,[["render",ie]]),_e={components:{ViewLead:ue},data(){return{currentroute:"",activeTab:"",tabs:[{title:"View Lead",icon:"mdi-account-outline",tab:"account"}]}},mounted(){this.currentroute=T(),this.activeTab=S(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function pe(e,t,b,x,d,u){const a=z("ViewLead");return n(),i("div",null,[r(M,{modelValue:d.activeTab,"onUpdate:modelValue":t[0]||(t[0]=c=>d.activeTab=c),"show-arrows":""},{default:l(()=>[(n(!0),i(f,null,g(d.tabs,c=>(n(),p(O,{key:c.icon,value:c.tab},{default:l(()=>[r(v,{size:"20",start:"",icon:c.icon},null,8,["icon"]),h(" "+o(c.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),r(D),r(F,{modelValue:d.activeTab,"onUpdate:modelValue":t[1]||(t[1]=c=>d.activeTab=c),class:"mt-5 disable-tab-transition",touch:!1},{default:l(()=>[r(R,{value:"account"},{default:l(()=>[r(a)]),_:1})]),_:1},8,["modelValue"])])}const Le=m(_e,[["render",pe]]);export{Le as default};
