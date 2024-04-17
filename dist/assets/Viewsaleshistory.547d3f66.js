import{_ as S,o as l,c as d,g as a,b6 as k,b7 as u,w as r,k as C,l as x,i as b,j as D,f as h,a as n,F as V,q as y,t as _,b as w,m,u as p,bE as T,bo as z,v as I,e as P,s as F,r as L}from"./index.770217b7.js";import{s as N}from"./Services.3f0d6fd4.js";import{V as O}from"./VForm.01680541.js";import{V as U}from"./VSelect.3ff61124.js";import{V as A}from"./VTextField.0cf7855a.js";import{V as B}from"./VChip.0d58c467.js";import{V as H}from"./VTable.8037f524.js";import{V as Q}from"./VPagination.d84a237d.js";import{V as R,a as q,b as E,c as W}from"./VWindowItem.1716d9b0.js";import"./VCheckboxBtn.14d938c2.js";const j={mixins:[N],data(){return{selectsales:null,page:1,pageSize:10,loading2:!1,loaded:!1,loading:!1,saleshistory:[],searchQuery:"",headers:[{text:"Sales Order",value:"so_number"},{text:"Order Date",value:"created_date"},{text:"Status",value:"so_status"},{text:"Delivery Person",value:"delivery_person"},{text:"Order From",value:"merchant_name"},{text:"Shipped To",value:"merchant_name"},{text:"Order Value",value:"total_so_amount"},{text:"POD",value:"pod_image"},{text:"Delivery Challan",value:"delivery_challan_file"},{text:"Invoice",value:"invoice_file"}]}},computed:{filteredSalesHistory(){const s=this.searchQuery.toLowerCase().trim();return this.saleshistory.filter(e=>{const f=e.so_number&&e.so_number.toLowerCase().includes(s)||e.created_date&&e.created_date.toLowerCase().includes(s)||e.so_status&&e.so_status.toLowerCase().includes(s)||e.merchant_name&&e.merchant_name.toLowerCase().includes(s)||e.total_so_amount&&e.total_so_amount.toString().includes(s)||e.delivery_person&&e.delivery_person.toLowerCase().includes(s),v=e.so_status==="Delivered"||e.so_status==="Received"||e.so_status==="Shipped";return f&&v})},paginatedItems(){const s=(this.page-1)*this.pageSize,e=s+this.pageSize;return this.filteredSalesHistory.slice(s,e)},showNoSalesAlert(){return!this.saleshistory.some(s=>s.so_status==="Delivered"||s.so_status==="Received"||s.so_status==="Shipped")}},mounted(){},methods:{updatePagination(s){this.page=s},getImageupdate(s){this.loading2=!0,window.open(s,"_blank"),this.loading2=!1},getPDFinvoice(s){this.loading2=!0,window.open(s,"_blank"),this.loading2=!1},getPDFupdate(s){this.loading2=!0,window.open(s,"_blank"),this.loading2=!1},outputstock(s){this.$router.push({name:"Createwarehouseoutput",query:{so_id:s.so_id}})},resolveStatusVariant(s){return s=="Acknowledged"?{color:"warning"}:{color:"success"}},getSalesorderdetails(){const s={All:"all",Shipped:"4",Delivered:"5"};this.loading=!0,this.getSalesorders(s[this.selectsales]).then(e=>{console.log("response",e),e.status==1&&(this.loading=!1,this.saleshistory=e.data,this.saleshistory.reverse())})}}},M={key:0,class:"loading-container"},G={key:1,style:{"max-width":"400px"}},J={key:2,id:"app"},K=T('<div id="loading-bg"><div class="loading-logo"><img src="'+z+'" height="60" width="68" alt="Logo"></div><div class="loading"><div class="effect-1 effects"></div><div class="effect-2 effects"></div><div class="effect-3 effects"></div></div></div>',1),X=[K],Y={key:0},Z=n("td",{colspan:"16",class:"text-center"},[n("h1",null,"No data found !")],-1),$=[Z],ee={class:"text-center"},te={class:"text-center"},se={class:"text-center"},ae={class:"text-center"},oe={class:"text-center"},le={class:"text-center"},re={class:"text-center"},ne={class:"text-center"},ie={class:"text-center"},de={class:"text-center"},ce={class:"text-center"};function ue(s,e,f,v,o,i){return l(),d("div",null,[o.loading2?(l(),d("div",M,[a(k,{height:"5",color:"primary",indeterminate:"",class:"custom-loader","full-width":""})])):u("",!0),a(D,{class:"mb-2"},{default:r(()=>[a(C,null,{default:r(()=>[a(x,null,{default:r(()=>[a(b,{cols:"12"},{default:r(()=>[a(O,{class:"mt-6",ref:"purchaseOrderForm8"},{default:r(()=>[a(x,null,{default:r(()=>[a(b,{md:"6",cols:"12"},{default:r(()=>[a(U,{modelValue:o.selectsales,"onUpdate:modelValue":[e[0]||(e[0]=t=>o.selectsales=t),i.getSalesorderdetails],items:["Shipped","Delivered"],label:"Please Select The Status"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1}),i.showNoSalesAlert?u("",!0):(l(),d("div",G,[a(A,{class:"mb-3",modelValue:o.searchQuery,"onUpdate:modelValue":e[1]||(e[1]=t=>o.searchQuery=t),density:"compact",variant:"solo",label:"Search","append-inner-icon":"mdi-magnify","single-line":"","hide-details":""},null,8,["modelValue"])])),o.loading?(l(),d("div",J,X)):u("",!0),i.showNoSalesAlert?u("",!0):(l(),h(H,{key:3,headers:o.headers,items:i.paginatedItems,class:"table-rounded",height:"500","fixed-header":""},{default:r(()=>[n("thead",null,[n("tr",null,[(l(!0),d(V,null,y(o.headers,t=>(l(),d("th",{class:"text-center",key:t},_(t.text),1))),128))])]),n("tbody",null,[i.filteredSalesHistory.length===0?(l(),d("tr",Y,$)):u("",!0),(l(!0),d(V,null,y(this.paginatedItems,(t,c)=>(l(),d("tr",{key:c},[n("td",ee,_(t.so_number),1),n("td",te,_(t.created_date),1),n("td",se,[a(B,{color:i.resolveStatusVariant(t.so_status).color,class:"font-weight-medium",size:"small"},{default:r(()=>[w(_(t.so_status),1)]),_:2},1032,["color"])]),n("td",ae,_(t.delivery_person),1),n("td",oe,_(t.merchant_name),1),n("td",le,_(t.merchant_name),1),n("td",re,_(t.total_so_amount),1),n("td",ne,[t.so_status=="Delivered"?(l(),h(m,{key:0,icon:"",variant:"text",color:"default",class:"me-2",size:"x-small",onClick:g=>i.getImageupdate(t.pod_image)},{default:r(()=>[a(p,{color:"success",icon:"ic:twotone-photo-camera-back",size:"26"})]),_:2},1032,["onClick"])):u("",!0)]),n("td",ie,[t.so_status=="Shipped"||t.so_status=="Delivered"?(l(),h(m,{key:0,icon:"",variant:"text",color:"default",class:"me-2",size:"x-small",onClick:g=>i.getPDFupdate(t.delivery_challan_file)},{default:r(()=>[a(p,{color:"error",icon:"iwwa:file-pdf",size:"26"})]),_:2},1032,["onClick"])):u("",!0)]),n("td",de,[t.so_status=="Shipped"||t.so_status=="Delivered"?(l(),h(m,{key:0,icon:"",variant:"text",color:"default",class:"me-2",size:"x-small",onClick:g=>i.getPDFinvoice(t.invoice_file)},{default:r(()=>[a(p,{color:"error",icon:"iwwa:file-pdf",size:"26"})]),_:2},1032,["onClick"])):u("",!0)]),n("td",ce,[t.so_status!="Shipped"&&t.so_status!="Delivered"?(l(),h(m,{key:0,icon:"",variant:"text",color:"success",class:"me-2",size:"small"},{default:r(()=>[a(p,{icon:"mdi-invoice-receive-outline",color:"success",size:"30",onClick:g=>i.outputstock(t)},null,8,["onClick"])]),_:2},1024)):u("",!0)])]))),128))])]),_:1},8,["headers","items"])),a(Q,{modelValue:o.page,"onUpdate:modelValue":e[2]||(e[2]=t=>o.page=t),length:Math.ceil(i.filteredSalesHistory.length/o.pageSize),onInput:i.updatePagination},null,8,["modelValue","length","onInput"])])}const _e=S(j,[["render",ue]]),he={components:{Saleshistory:_e},data(){return{currentroute:"",activeTab:"",tabs:[{title:"View Sales History",icon:"mdi-account-outline",tab:"account"}]}},mounted(){this.currentroute=I(),this.activeTab=P(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function pe(s,e,f,v,o,i){const t=L("Saleshistory");return l(),d("div",null,[a(R,{modelValue:o.activeTab,"onUpdate:modelValue":e[0]||(e[0]=c=>o.activeTab=c),"show-arrows":""},{default:r(()=>[(l(!0),d(V,null,y(o.tabs,c=>(l(),h(W,{key:c.icon,value:c.tab},{default:r(()=>[a(p,{size:"20",start:"",icon:c.icon},null,8,["icon"]),w(" "+_(c.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),a(F),a(E,{modelValue:o.activeTab,"onUpdate:modelValue":e[1]||(e[1]=c=>o.activeTab=c),class:"mt-5 disable-tab-transition",touch:!1},{default:r(()=>[a(q,{value:"account"},{default:r(()=>[a(t)]),_:1})]),_:1},8,["modelValue"])])}const ke=S(he,[["render",pe]]);export{ke as default};
