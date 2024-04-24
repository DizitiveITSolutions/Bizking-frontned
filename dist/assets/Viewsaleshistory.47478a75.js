import{_ as T,o as r,c,g as l,b6 as P,b7 as d,w as a,k,l as y,i as m,j as x,f as g,a as n,F as w,q as C,t as _,b as f,m as h,u as v,bE as z,bo as F,v as U,e as H,s as I,r as A}from"./index.8231191f.js";import{s as N}from"./Services.51a388b5.js";import{V as S}from"./VForm.5023f7bf.js";import{V as L}from"./VSelect.db1650e9.js";import{V as D}from"./VTextField.88c661ca.js";import{V as B}from"./VChip.5b7a064d.js";import{V as Q}from"./VTable.f4184a6e.js";import{V as q}from"./VAutocomplete.61a2ef3c.js";import{V as O}from"./VDialog.43bdcf52.js";import{V as R}from"./VSnackbar.feaa5578.js";import{V as j}from"./VPagination.03487076.js";import{V as E,a as M,b as W,c as Y}from"./VWindowItem.5224bc07.js";import"./VCheckboxBtn.aa38394d.js";const G={mixins:[N],data(){return{today:this.getFormattedDate(new Date),Deliverydata:{so_id:"",shipped_date:"",delivery_person:""},SOid:null,SOid2:null,snackbar:!1,snackbarText:"",timeout:6e3,color:"",top:!1,bottom:!0,left:!1,right:!1,selectsales:null,page:1,pageSize:10,loading2:!1,loaded:!1,loading:!1,saleshistory:[],searchQuery:"",deliveryPerson:[],dialog:!1,dater:[t=>!!t||"Date is required"],person:[t=>!!t||"Assign Delivery Person is required"],dialog2:!1,headers:[{text:"Sales Order",value:"so_number"},{text:"Order Date",value:"created_date"},{text:"Status",value:"so_status"},{text:"Delivery Person",value:"delivery_person"},{text:"Order From",value:"merchant_name"},{text:"Shipped To",value:"merchant_name"},{text:"Order Value",value:"total_so_amount"},{text:"POD",value:"pod_image"},{text:"Delivery Challan",value:"delivery_challan_file"},{text:"Invoice",value:"invoice_file"},{text:"Action",value:"actions",sortable:!1}]}},computed:{filteredSalesHistory(){const t=this.searchQuery.toLowerCase().trim();return this.saleshistory.filter(e=>{const p=e.so_number&&e.so_number.toLowerCase().includes(t)||e.created_date&&e.created_date.toLowerCase().includes(t)||e.so_status&&e.so_status.toLowerCase().includes(t)||e.merchant_name&&e.merchant_name.toLowerCase().includes(t)||e.total_so_amount&&e.total_so_amount.toString().includes(t)||e.delivery_person&&e.delivery_person.toLowerCase().includes(t),V=e.so_status==="Delivered"||e.so_status==="Shipped"||e.so_status==="On Hold"||e.so_status==="Cancelled";return p&&V})},paginatedItems(){const t=(this.page-1)*this.pageSize,e=t+this.pageSize;return this.filteredSalesHistory.slice(t,e)},showNoSalesAlert(){return!this.saleshistory.some(t=>t.so_status==="Delivered"||t.so_status==="Shipped"||t.so_status==="On Hold"||t.so_status==="Cancelled")}},mounted(){},methods:{closeUnhold(){this.dialog2=!1},getFormattedDate(t){const e=t.getFullYear(),p=String(t.getMonth()+1).padStart(2,"0"),V=String(t.getDate()).padStart(2,"0");return`${e}-${p}-${V}`},deleteRow(t){console.log("perk",t.so_id),this.SOid2=t.so_id,this.dialog2=!0},cancelunhold(){console.log("SOid2",this.SOid2),this.CancelUnholddata(this.SOid2).then(t=>{t.data.status==1?(this.dialog2=!1,this.snackbar=!0,this.color="primary",this.snackbarText=t.data.message,this.getSalesorderdetails()):(this.dialog2=!1,this.snackbar=!0,this.color="on-background",this.snackbarText=t.data.message)})},validateForm(){this.$refs.purchaseOrderForm.validate().then(t=>{t.valid==!0?this.updateOnhold():(this.snackbar=!0,this.snackbarText="Please give all mandatory fields",this.color="on-background")})},updateOnhold(){const t={so_id:this.SOid,shipped_date:this.Deliverydata.shipped_date,delivery_person:this.Deliverydata.delivery_person};console.log("po",t),this.UpdateUnholddata(t).then(e=>{console.log("set",e),e.data.status==1?(this.dialog=!1,this.snackbar=!0,this.color="primary",this.Deliverydata={},this.snackbarText=e.data.message,this.getSalesorderdetails()):(this.dialog=!1,this.snackbar=!0,this.color="on-background",this.Deliverydata={},this.snackbarText=e.data.message)})},closeDialog(){this.dialog=!1,this.Deliverydata={}},editrow(t){console.log("ids",t.so_id),this.Getsalesperson().then(e=>{console.log("getperson",e),e.data.status==1?(this.deliveryPerson=e.data.data.map(p=>({value:p.delivery_person,text:p.name})),this.dialog=!0,this.SOid=t.so_id):(this.deliveryPerson=[],this.dialog=!1)})},updatePagination(t){this.page=t},getImageupdate(t){this.loading2=!0,window.open(t,"_blank"),this.loading2=!1},getPDFinvoice(t){this.loading2=!0,window.open(t,"_blank"),this.loading2=!1},getPDFupdate(t){this.loading2=!0,window.open(t,"_blank"),this.loading2=!1},outputstock(t){this.$router.push({name:"Createwarehouseoutput",query:{so_id:t.so_id}})},resolveStatusVariant(t){return t=="Acknowledged"?{color:"warning"}:t=="On Hold"?{color:"warning"}:t=="Cancelled"?{color:"error"}:{color:"success"}},getSalesorderdetails(){const t={All:"all",Shipped:"4",Delivered:"5",Onhold:"7",Cancelled:"0"};this.loading=!0,this.getSalesorders(t[this.selectsales]).then(e=>{console.log("response",e),e.status==1?(this.loading=!1,this.saleshistory=e.data,this.saleshistory.reverse()):(this.snackbar=!0,this.color="on-background",this.loading=!1,this.saleshistory=[],this.snackbarText=e.message)})}}},J={key:0,class:"loading-container"},K={key:1,style:{"max-width":"400px"}},X={key:2,id:"app"},Z=z('<div id="loading-bg"><div class="loading-logo"><img src="'+F+'" height="60" width="68" alt="Logo"></div><div class="loading"><div class="effect-1 effects"></div><div class="effect-2 effects"></div><div class="effect-3 effects"></div></div></div>',1),$=[Z],ee={key:0},te=n("td",{colspan:"16",class:"text-center"},[n("h1",null,"No data found !")],-1),se=[te],le={key:1},ae=n("td",{colspan:"16",class:"text-center"},[n("h1",null,"No data found !")],-1),oe=[ae],re={class:"text-center"},ie={class:"text-center"},ne={class:"text-center"},de={class:"text-center"},ce={class:"text-center"},ue={class:"text-center"},he={class:"text-center"},_e={class:"text-center"},fe={class:"text-center"},me={class:"text-center"},pe={class:"text-center",style:{display:"flex","justify-content":"center","align-items":"center"}};function ge(t,e,p,V,o,i){return r(),c("div",null,[o.loading2?(r(),c("div",J,[l(P,{height:"5",color:"primary",indeterminate:"",class:"custom-loader","full-width":""})])):d("",!0),l(x,{class:"mb-2"},{default:a(()=>[l(k,null,{default:a(()=>[l(y,null,{default:a(()=>[l(m,{cols:"12"},{default:a(()=>[l(S,{class:"mt-6",ref:"purchaseOrderForm8"},{default:a(()=>[l(y,null,{default:a(()=>[l(m,{md:"6",cols:"12"},{default:a(()=>[l(L,{modelValue:o.selectsales,"onUpdate:modelValue":[e[0]||(e[0]=s=>o.selectsales=s),i.getSalesorderdetails],items:["Shipped","Delivered","Onhold","Cancelled"],label:"Please Select The Status"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1}),i.showNoSalesAlert?d("",!0):(r(),c("div",K,[l(D,{class:"mb-3",modelValue:o.searchQuery,"onUpdate:modelValue":e[1]||(e[1]=s=>o.searchQuery=s),density:"compact",variant:"solo",label:"Search","append-inner-icon":"mdi-magnify","single-line":"","hide-details":""},null,8,["modelValue"])])),o.loading?(r(),c("div",X,$)):d("",!0),i.showNoSalesAlert?d("",!0):(r(),g(Q,{key:3,headers:o.headers,items:i.paginatedItems,class:"table-rounded",height:"500","fixed-header":""},{default:a(()=>[n("thead",null,[n("tr",null,[(r(!0),c(w,null,C(o.headers,s=>(r(),c("th",{class:"text-center",key:s},_(s.text),1))),128))])]),n("tbody",null,[i.filteredSalesHistory.length===0?(r(),c("tr",ee,se)):d("",!0),this.saleshistory.length===0?(r(),c("tr",le,oe)):d("",!0),(r(!0),c(w,null,C(this.paginatedItems,(s,u)=>(r(),c("tr",{key:u},[n("td",re,_(s.so_number),1),n("td",ie,_(s.created_date),1),n("td",ne,[l(B,{color:i.resolveStatusVariant(s.so_status).color,class:"font-weight-medium",size:"small"},{default:a(()=>[f(_(s.so_status),1)]),_:2},1032,["color"])]),n("td",de,_(s.delivery_person),1),n("td",ce,_(s.merchant_name),1),n("td",ue,_(s.merchant_name),1),n("td",he,_(s.total_so_amount),1),n("td",_e,[s.so_status=="Delivered"?(r(),g(h,{key:0,icon:"",variant:"text",color:"default",class:"me-2",size:"x-small",onClick:b=>i.getImageupdate(s.pod_image)},{default:a(()=>[l(v,{color:"success",icon:"ic:twotone-photo-camera-back",size:"26"})]),_:2},1032,["onClick"])):d("",!0)]),n("td",fe,[s.so_status=="Shipped"||s.so_status=="Delivered"||s.so_status=="On Hold"||s.so_status==="Cancelled"?(r(),g(h,{key:0,icon:"",variant:"text",color:"default",class:"me-2",size:"x-small",onClick:b=>i.getPDFupdate(s.delivery_challan_file)},{default:a(()=>[l(v,{color:"error",icon:"iwwa:file-pdf",size:"26"})]),_:2},1032,["onClick"])):d("",!0)]),n("td",me,[s.so_status=="Shipped"||s.so_status=="Delivered"||s.so_status=="On Hold"||s.so_status==="Cancelled"?(r(),g(h,{key:0,icon:"",variant:"text",color:"default",class:"me-2",size:"x-small",onClick:b=>i.getPDFinvoice(s.invoice_file)},{default:a(()=>[l(v,{color:"error",icon:"iwwa:file-pdf",size:"26"})]),_:2},1032,["onClick"])):d("",!0)]),n("td",pe,[s.so_status!="Shipped"&&s.so_status!="Delivered"&&s.so_status!="On Hold"&&s.so_status!="Cancelled"?(r(),g(h,{key:0,icon:"",variant:"text",color:"success",class:"me-2",size:"small"},{default:a(()=>[l(v,{icon:"mdi-invoice-receive-outline",color:"success",size:"30",onClick:b=>i.outputstock(s)},null,8,["onClick"])]),_:2},1024)):d("",!0),s.so_status=="On Hold"?(r(),g(h,{key:1,icon:"",variant:"text",color:"error",class:"me-2",size:"x-small"},{default:a(()=>[l(v,{icon:"ri-pencil-line",size:"30",color:"primary",onClick:b=>i.editrow(s)},null,8,["onClick"])]),_:2},1024)):d("",!0),s.so_status=="On Hold"?(r(),g(h,{key:2,icon:"",variant:"text",color:"error",class:"me-2",size:"x-small"},{default:a(()=>[l(v,{icon:"material-symbols:cancel-outline",size:"30",color:"error",onClick:b=>i.deleteRow(s)},null,8,["onClick"])]),_:2},1024)):d("",!0)])]))),128))])]),_:1},8,["headers","items"])),l(O,{modelValue:o.dialog,"onUpdate:modelValue":e[5]||(e[5]=s=>o.dialog=s),"max-width":"400",persistent:""},{default:a(()=>[l(x,{title:"Assign Delivery Person",class:"mb-2"},{default:a(()=>[l(k,null,{default:a(()=>[l(y,null,{default:a(()=>[l(m,{cols:"12"},{default:a(()=>[l(S,{class:"mt-4",ref:"purchaseOrderForm"},{default:a(()=>[l(y,null,{default:a(()=>[l(m,{md:"12",cols:"12"},{default:a(()=>[l(q,{modelValue:o.Deliverydata.delivery_person,"onUpdate:modelValue":e[2]||(e[2]=s=>o.Deliverydata.delivery_person=s),items:this.deliveryPerson,"item-value":"value","item-title":"text",label:"Assign Delivery Person",rules:o.person},null,8,["modelValue","items","rules"])]),_:1}),l(m,{md:"12",cols:"12"},{default:a(()=>[l(D,{modelValue:o.Deliverydata.shipped_date,"onUpdate:modelValue":e[3]||(e[3]=s=>o.Deliverydata.shipped_date=s),type:"date",label:"Start Date",min:o.today,rules:o.dater},null,8,["modelValue","min","rules"])]),_:1}),l(m,{md:"12",cols:"12"},{default:a(()=>[l(h,{onClick:i.validateForm},{default:a(()=>[f("Save")]),_:1},8,["onClick"]),f(" \xA0 "),l(h,{color:"secondary",variant:"tonal",onClick:e[4]||(e[4]=s=>i.closeDialog())},{default:a(()=>[f(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(O,{modelValue:o.dialog2,"onUpdate:modelValue":e[6]||(e[6]=s=>o.dialog2=s),"max-width":"400",persistent:""},{default:a(()=>[l(x,{title:"Cancel Onhold",class:"mb-2"},{default:a(()=>[l(k,null,{default:a(()=>[l(y,null,{default:a(()=>[l(m,{cols:"12"},{default:a(()=>[l(S,{class:"mt-4",ref:"purchaseOrderForm2"},{default:a(()=>[l(y,null,{default:a(()=>[l(m,{md:"12",cols:"12"},{default:a(()=>[f(" Are you sure want to cancel the Onhold Sales Order ? ")]),_:1}),l(m,{md:"12",cols:"12"},{default:a(()=>[l(h,{onClick:i.cancelunhold},{default:a(()=>[f("Yes")]),_:1},8,["onClick"]),f(" \xA0 "),l(h,{color:"secondary",variant:"tonal",onClick:i.closeUnhold},{default:a(()=>[f(" No ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(R,{modelValue:o.snackbar,"onUpdate:modelValue":e[7]||(e[7]=s=>o.snackbar=s),timeout:2e3,color:o.color},{default:a(()=>[f(_(o.snackbarText),1)]),_:1},8,["modelValue","color"]),l(j,{modelValue:o.page,"onUpdate:modelValue":e[8]||(e[8]=s=>o.page=s),length:Math.ceil(i.filteredSalesHistory.length/o.pageSize),onInput:i.updatePagination},null,8,["modelValue","length","onInput"])])}const ve=T(G,[["render",ge]]),ye={components:{Saleshistory:ve},data(){return{currentroute:"",activeTab:"",tabs:[{title:"View Sales History",icon:"mdi-account-outline",tab:"account"}]}},mounted(){this.currentroute=U(),this.activeTab=H(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function Ve(t,e,p,V,o,i){const s=A("Saleshistory");return r(),c("div",null,[l(E,{modelValue:o.activeTab,"onUpdate:modelValue":e[0]||(e[0]=u=>o.activeTab=u),"show-arrows":""},{default:a(()=>[(r(!0),c(w,null,C(o.tabs,u=>(r(),g(Y,{key:u.icon,value:u.tab},{default:a(()=>[l(v,{size:"20",start:"",icon:u.icon},null,8,["icon"]),f(" "+_(u.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),l(I),l(W,{modelValue:o.activeTab,"onUpdate:modelValue":e[1]||(e[1]=u=>o.activeTab=u),class:"mt-5 disable-tab-transition",touch:!1},{default:a(()=>[l(M,{value:"account"},{default:a(()=>[l(s)]),_:1})]),_:1},8,["modelValue"])])}const He=T(ye,[["render",Ve]]);export{He as default};
