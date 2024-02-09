import{_ as y,o as s,c as i,g as t,ba as V,b0 as u,f as h,w as a,i as w,j as S,k as T,b as m,l as C,a as r,F as f,s as p,t as c,n as b,v,x as O,e as z,u as A,r as B}from"./index.f15db3c3.js";import{s as D}from"./Services.8ccc7918.js";import{V as F,a as N}from"./VAlert.dce81f90.js";import{V as P}from"./VChip.634aa2cd.js";import{V as I}from"./VTable.901375f2.js";import{V as L,a as R,b as U,c as W}from"./VWindowItem.f7810676.js";import"./index.2bd8ddc8.js";const j={mixins:[D],data(){return{loading2:!1,loaded:!1,loading:!0,saleshistory:[],headers:[{text:"Sales Order",value:"salesorder"},{text:"Order Date",value:"orderdate"},{text:"Status",value:"status"},{text:"Order From",value:"orderfrom"},{text:"Shipped To",value:"shippedto"},{text:"Order Value",value:"ordervalue"},{text:"Action",value:"actions",sortable:!1}]}},mounted(){this.getSalesorderdetails(),setTimeout(()=>{this.loading=!1},2500)},methods:{getPDFupdate(l){this.loading2=!0,window.open(l,"_blank")},outputstock(l){console.log("check the detials",l.so_id),this.$router.push({name:"Createwarehouseoutput",query:{so_id:l.so_id}})},resolveStatusVariant(l){return l=="Acknowledged"?{color:"warning"}:{color:"success"}},getSalesorderdetails(){this.getSalesorders().then(l=>{this.saleshistory=l.data,console.log("check rhe res",this.saleshistory)})}}},q={key:0,class:"loading-container"},E={key:1,class:"loading-container"},H=r("p",{class:"mb-0"}," The system is not retrieving the Sales Orders. Please ensure that you have applied for Sales Orders !",-1),G={class:"text-center"},J={class:"text-center"},K={class:"text-center"},M={class:"text-center"},Q={class:"text-center"},X={class:"text-center"},Y={class:"text-center"};function Z(l,d,x,g,o,_){return s(),i("div",null,[o.loading?(s(),i("div",q,[t(V,{height:"5",color:"primary",indeterminate:"",class:"custom-loader","full-width":""})])):u("",!0),o.loading2?(s(),i("div",E,[t(V,{height:"5",color:"primary",indeterminate:"",class:"custom-loader","full-width":""})])):u("",!0),this.saleshistory==null?(s(),h(C,{key:2},{default:a(()=>[t(w,{cols:"12"},{default:a(()=>[t(S,{title:"Sales Order View"},{default:a(()=>[t(T,null,{default:a(()=>[t(F,{color:"warning",variant:"tonal",class:"mb-4",border:"top"},{default:a(()=>[t(N,{class:"mb-1"},{default:a(()=>[m(" Are you sure you gave Sales Orders? ")]),_:1}),H]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):u("",!0),this.saleshistory!=null?(s(),h(I,{key:3,headers:o.headers,items:o.saleshistory,class:"table-rounded",height:"500","fixed-header":""},{default:a(()=>[r("thead",null,[r("tr",null,[(s(!0),i(f,null,p(o.headers,e=>(s(),i("th",{class:"text-center",key:e},c(e.text),1))),128))])]),r("tbody",null,[(s(!0),i(f,null,p(o.saleshistory,(e,n)=>(s(),i("tr",{key:n},[r("td",G,c(e.so_number),1),r("td",J,c(e.created_date),1),r("td",K,[t(P,{color:_.resolveStatusVariant(e.so_status).color,class:"font-weight-medium",size:"small"},{default:a(()=>[m(c(e.so_status),1)]),_:2},1032,["color"])]),r("td",M,c(e.merchant_name),1),r("td",Q,c(e.merchant_name),1),r("td",X,c(e.total_so_amount),1),r("td",Y,[e.so_status!="Shipped"?(s(),h(b,{key:0,icon:"",variant:"text",color:"success",class:"me-2",size:"small"},{default:a(()=>[t(v,{icon:"mdi-invoice-receive-outline",color:"success",size:"30",onClick:k=>_.outputstock(e)},null,8,["onClick"])]),_:2},1024)):u("",!0),e.so_status=="Shipped"?(s(),h(b,{key:1,icon:"",variant:"text",color:"default",class:"me-2",size:"x-small",onClick:k=>_.getPDFupdate(e.delivery_challan_file)},{default:a(()=>[t(v,{color:"error",icon:"iwwa:file-pdf",size:"26"})]),_:2},1032,["onClick"])):u("",!0)])]))),128))])]),_:1},8,["headers","items"])):u("",!0)])}const $=y(j,[["render",Z]]),ee={components:{Saleshistory:$},data(){return{currentroute:"",activeTab:"",tabs:[{title:"View Sales History",icon:"mdi-account-outline",tab:"account"}]}},mounted(){this.currentroute=O(),this.activeTab=z(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function te(l,d,x,g,o,_){const e=B("Saleshistory");return s(),i("div",null,[t(L,{modelValue:o.activeTab,"onUpdate:modelValue":d[0]||(d[0]=n=>o.activeTab=n),"show-arrows":""},{default:a(()=>[(s(!0),i(f,null,p(o.tabs,n=>(s(),h(W,{key:n.icon,value:n.tab},{default:a(()=>[t(v,{size:"20",start:"",icon:n.icon},null,8,["icon"]),m(" "+c(n.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),t(A),t(U,{modelValue:o.activeTab,"onUpdate:modelValue":d[1]||(d[1]=n=>o.activeTab=n),class:"mt-5 disable-tab-transition",touch:!1},{default:a(()=>[t(R,{value:"account"},{default:a(()=>[t(e)]),_:1})]),_:1},8,["modelValue"])])}const ce=y(ee,[["render",te]]);export{ce as default};
