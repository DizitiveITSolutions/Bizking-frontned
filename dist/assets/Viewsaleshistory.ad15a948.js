import{_ as m,o as n,c,g as r,w as i,a as o,F as h,s as _,t as l,b as f,n as V,v as p,x as b,e as g,u as k,r as y,f as S}from"./index.2c6dfeb2.js";import{s as w}from"./Services.1028c5df.js";import{V as T}from"./VChip.4cba9e46.js";import{V as C}from"./VTable.201050f6.js";import{V as B,a as z,b as A,c as O}from"./VWindowItem.58476b0e.js";import"./index.2bd8ddc8.js";const D={mixins:[w],data(){return{loaded:!1,loading:!1,saleshistory:[],headers:[{text:"Sales Order",value:"salesorder"},{text:"Order Date",value:"orderdate"},{text:"Status",value:"status"},{text:"Order From",value:"orderfrom"},{text:"Shipped To",value:"shippedto"},{text:"Order Value",value:"ordervalue"},{text:"Action",value:"actions",sortable:!1}]}},mounted(){this.getSalesorderdetails()},methods:{outputstock(t){console.log("check the detials",t.so_id),this.$router.push({name:"Createwarehouseoutput",query:{so_id:t.so_id}})},resolveStatusVariant(t){return t=="Acknowledged"?{color:"success"}:{color:"info"}},getSalesorderdetails(){this.getSalesorders().then(t=>{this.saleshistory=t.data,console.log("check rhe res",this.saleshistory)})},onClick(){this.loading=!0,setTimeout(()=>{this.loading=!1,this.loaded=!0},2e3)},resolveStatusVariant(t){return t=="Acknowledged"?{color:"warning",text:"Acknowledged"}:{color:"info",text:"Shared"}}}},F={class:"text-center"},N={class:"text-center"},I={class:"text-center"},U={class:"text-center"},W={class:"text-center"},q={class:"text-center"},E={class:"text-center"};function H(t,u,v,x,s,d){return n(),c("div",null,[r(C,{headers:s.headers,items:s.saleshistory,class:"table-rounded",height:"500","fixed-header":""},{default:i(()=>[o("thead",null,[o("tr",null,[(n(!0),c(h,null,_(s.headers,e=>(n(),c("th",{class:"text-center",key:e},l(e.text),1))),128))])]),o("tbody",null,[(n(!0),c(h,null,_(s.saleshistory,(e,a)=>(n(),c("tr",{key:a},[o("td",F,l(e.so_number),1),o("td",N,l(e.created_date),1),o("td",I,[r(T,{color:d.resolveStatusVariant(e.so_status).color,class:"font-weight-medium",size:"small"},{default:i(()=>[f(l(e.so_status),1)]),_:2},1032,["color"])]),o("td",U,l(e.merchant_name),1),o("td",W,l(e.merchant_name),1),o("td",q,l(e.total_so_amount),1),o("td",E,[r(V,{icon:"",variant:"text",color:"success",class:"me-2",size:"small"},{default:i(()=>[r(p,{icon:"mdi-invoice-receive-outline",color:"success",size:"30",onClick:j=>d.outputstock(e)},null,8,["onClick"])]),_:2},1024)])]))),128))])]),_:1},8,["headers","items"])])}const L=m(D,[["render",H]]),R={components:{Saleshistory:L},data(){return{currentroute:"",activeTab:"",tabs:[{title:"View Sales History",icon:"mdi-account-outline",tab:"account"}]}},mounted(){this.currentroute=b(),this.activeTab=g(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function $(t,u,v,x,s,d){const e=y("Saleshistory");return n(),c("div",null,[r(B,{modelValue:s.activeTab,"onUpdate:modelValue":u[0]||(u[0]=a=>s.activeTab=a),"show-arrows":""},{default:i(()=>[(n(!0),c(h,null,_(s.tabs,a=>(n(),S(O,{key:a.icon,value:a.tab},{default:i(()=>[r(p,{size:"20",start:"",icon:a.icon},null,8,["icon"]),f(" "+l(a.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),r(k),r(A,{modelValue:s.activeTab,"onUpdate:modelValue":u[1]||(u[1]=a=>s.activeTab=a),class:"mt-5 disable-tab-transition",touch:!1},{default:i(()=>[r(z,{value:"account"},{default:i(()=>[r(e)]),_:1})]),_:1},8,["modelValue"])])}const X=m(R,[["render",$]]);export{X as default};
