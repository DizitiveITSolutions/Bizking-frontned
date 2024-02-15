import{_ as p,o as r,c as n,g as e,w as t,i as a,j as V,k as v,l as i,m as f,b as c,v as h,e as x,F as S,q as D,s as C,r as P,f as g,u as w,t as k}from"./index.6ec2b2ad.js";import{V as A,a as l}from"./VTextField.2e53478a.js";import{V as m}from"./VSelect.df54c607.js";import{V as L,a as y,b as B,c as $}from"./VWindowItem.c5e65ecf.js";import"./VCheckboxBtn.f4c87e72.js";import"./VChip.8febabc8.js";const F={data(){return{dialog:!1,data:[{po:"PO001",ODate:"2024.01.12",status:"Draft",OT:24,ST:4,total:5},{po:"PO002",ODate:"2024.01.12",status:"Created",OT:24,ST:4,total:5},{po:"PO003",ODate:"2024.01.12",status:"Created",OT:24,ST:4,total:5},{po:"PO004",ODate:"2024.01.12",status:"Draft",OT:24,ST:4,total:5},{po:"PO005",ODate:"2024.01.12",status:"Shared",OT:24,ST:4,total:5},{po:"PO006",ODate:"2024.01.12",status:"Acknowledged",OT:24,ST:4,total:5},{po:"PO007",ODate:"2024.01.12",status:"Acknowledged",OT:24,ST:4,total:5},{po:"PO008",ODate:"2024.01.12",status:"Acknowledged",OT:24,ST:4,total:5}],headers:[{text:"Purchase Order",value:"po"},{text:"Order Date",value:"ODate"},{text:"Status",value:"status"},{text:"Order To",value:"OT"},{text:"Shipped To",value:"ST"},{text:"Total",value:"total"},{text:"Action",value:"actions",sortable:!1}]}},methods:{deleteRow(u){const o=this.data.indexOf(u);o!==-1&&this.data.splice(o,1)},openproductdialog(){console.log("check the dialog"),this.dialog=!0},closeDialog(){this.dialog=!1}}};function N(u,o,_,O,d,T){return r(),n("div",null,[e(i,null,{default:t(()=>[e(a,{cols:"12"},{default:t(()=>[e(V,{title:"Create Lead",class:"mb-4"},{default:t(()=>[e(v,null,{default:t(()=>[e(A,{class:"mt-6"},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{md:"6",cols:"12"},{default:t(()=>[e(m,{label:"Lead Type",items:["Merchant","Brand"]})]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(l,{label:"Store Name"})]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(l,{label:"Lead Handler"})]),_:1}),e(a,{md:"6",cols:"12"},{default:t(()=>[e(l,{label:"Store Address"})]),_:1}),e(a,{md:"6",cols:"12"},{default:t(()=>[e(l,{label:"GST"})]),_:1}),e(a,{md:"6",cols:"12"},{default:t(()=>[e(l,{label:"Area PinCode"})]),_:1}),e(a,{md:"6",cols:"12"},{default:t(()=>[e(l,{label:"Location"})]),_:1}),e(a,{md:"6",cols:"12"},{default:t(()=>[e(l,{label:"POC Name"})]),_:1}),e(a,{md:"6",cols:"12"},{default:t(()=>[e(l,{label:"POC Phone"})]),_:1}),e(a,{md:"6",cols:"12"},{default:t(()=>[e(l,{label:"Owner Phone"})]),_:1}),e(a,{md:"6",cols:"12"},{default:t(()=>[e(m,{label:"Decision Authority",items:["POC","Owner"]})]),_:1}),e(a,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:t(()=>[e(f,null,{default:t(()=>[c("Save")]),_:1}),e(f,{color:"secondary",variant:"tonal",type:"reset"},{default:t(()=>[c(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const R=p(F,[["render",N]]),I={components:{Createlead:R},data(){return{currentroute:"",activeTab:"",tabs:[{title:"Lead Basic Data",icon:"mdi-account-outline",tab:"account"}]}},mounted(){this.currentroute=h(),this.activeTab=x(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function U(u,o,_,O,d,T){const b=P("Createlead");return r(),n("div",null,[e(L,{modelValue:d.activeTab,"onUpdate:modelValue":o[0]||(o[0]=s=>d.activeTab=s),"show-arrows":""},{default:t(()=>[(r(!0),n(S,null,D(d.tabs,s=>(r(),g($,{key:s.icon,value:s.tab},{default:t(()=>[e(w,{size:"20",start:"",icon:s.icon},null,8,["icon"]),c(" "+k(s.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(C),e(B,{modelValue:d.activeTab,"onUpdate:modelValue":o[1]||(o[1]=s=>d.activeTab=s),class:"mt-5 disable-tab-transition",touch:!1},{default:t(()=>[e(y,{value:"account"},{default:t(()=>[e(b)]),_:1})]),_:1},8,["modelValue"])])}const H=p(I,[["render",U]]);export{H as default};
