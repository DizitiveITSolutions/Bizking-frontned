import{_ as C,o as n,c as m,a as d,g as s,f as g,w as o,i as r,j as v,k as y,b as p,l as T,b7 as h,F as R,q as w,t as i,m as b,u as x,s as k,bE as U,bo as q,v as B,e as F,r as L}from"./index.770217b7.js";import{s as N}from"./Services.3f0d6fd4.js";import{V as u}from"./VTextField.0cf7855a.js";import{V as I,a as z}from"./VAlert.dc4c6dbb.js";import{V as W}from"./VChip.0d58c467.js";import{V as Q}from"./VTable.8037f524.js";import{V as A}from"./VPagination.d84a237d.js";import{V as P}from"./VForm.01680541.js";import{V as G}from"./VSelect.3ff61124.js";import{V as S}from"./VDialog.fc648e41.js";import{V as M}from"./VSnackbar.3a934a07.js";import{V as O,a as E,b as K,c as Y}from"./VWindowItem.1716d9b0.js";import"./VCheckboxBtn.14d938c2.js";const j={mixins:[N],data(){return{dateRules:[t=>!!t||"Date is required"],maxPaginationPages:5,snackbar:!1,snackbarText:"",timeout:6e3,color:"",top:!1,bottom:!0,left:!1,right:!1,loading:!0,searchQuery:"",GoodsStatus:null,PostRTV:{rtv_id:"",goods_status:"",quantity:"",warehouse_updated_date:"",send_to_brand_date:"",rtv_reason:"",type:"",merchant_product_id:""},getRTV:{so_number:"",brand_name:"",sku_name:"",uom:"",goods_status:"",delivery_person:"",rtv_reason:"",collected_date:"",quantity:"",warehouse_updated_date:"",send_to_brand_date:""},dialog2:!1,page:1,pageSize:10,today:this.getFormattedDate(new Date),dialog:!1,RTVdata:[],headers:[{text:"SoNo",value:"so_number"},{text:"Brand Name",value:"brand_name"},{text:"SKU.",value:"sku_name"},{text:"UOM",value:"uom"},{text:"Goods Status",value:"goods_status"},{text:"Delivery Person",value:"delivery_person"},{text:"RTV Reason",value:"rtv_reason"},{text:"Goods Type",value:"type"},{text:"Collected Date",value:"collected_date"},{text:"Quantity",value:"quantity"},{text:"Warehouse UpdateDate",value:"warehouse_updated_date"},{text:"Send to BrandDate",value:"send_to_brand_date"},{text:"Action",value:"actions"}]}},computed:{filteredRTV(){const t=this.searchQuery.toLowerCase().trim();return this.RTVdata.filter(e=>e.so_number&&e.so_number.toLowerCase().includes(t)||e.brand_name&&e.brand_name.toLowerCase().includes(t)||e.sku_name&&e.sku_name.toLowerCase().includes(t)||e.uom&&e.uom.toLowerCase().includes(t)||e.goods_status&&e.goods_status.toLowerCase().includes(t)||e.delivery_person&&e.delivery_person.toLowerCase().includes(t)||e.type&&e.type.toLowerCase().includes(t)||e.rtv_reason&&e.rtv_reason.toLowerCase().includes(t)||e.collected_date&&e.collected_date.toLowerCase().includes(t)||e.quantity&&e.quantity.toString().includes(t)||e.warehouse_updated_date&&e.warehouse_updated_date.toLowerCase().includes(t)||e.send_to_brand_date&&e.send_to_brand_date.toLowerCase().includes(t))},paginatedItems(){const t=(this.page-1)*this.pageSize,e=t+this.pageSize;return this.filteredRTV.slice(t,e)}},mounted(){this.getRTVdatas().then(()=>{this.loading=!1}).catch(t=>{console.error("Error fetching merchants:",t)})},methods:{preventPaste(t){const c=(t.clipboardData||window.clipboardData).getData("text");/^[0-9]+$/.test(c)||t.preventDefault()},preventDecimal(t){(t.key==="."||t.key===","||t.key==="+"||t.key==="-"||t.keyCode===189||t.keyCode===109)&&t.preventDefault()},viewrow(t){console.log("chec",t),this.dialog2=!0,this.getRTV.so_number=t.so_number,this.getRTV.brand_name=t.brand_name,this.getRTV.sku_name=t.sku_name,this.getRTV.uom=t.uom,this.getRTV.goods_status=t.goods_status,this.getRTV.delivery_person=t.delivery_person,this.getRTV.rtv_reason=t.rtv_reason,this.getRTV.collected_date=t.collected_date,this.getRTV.quantity=t.quantity,this.getRTV.warehouse_updated_date=t.warehouse_updated_date,this.getRTV.send_to_brand_date=t.send_to_brand_date},closedialog2(){this.dialog2=!1},updatePagination(t){this.page=t},validateForm(){this.$refs.purchaseOrderForm.validate().then(t=>{t.valid==!0?this.saveeditRTVproducts():(this.snackbar=!0,this.snackbarText="Please give all mandatory fields",this.color="on-background")})},saveeditRTVproducts(){if(this.PostRTV.type==="return"&&this.PostRTV.goods_status==="Send To Brand")this.snackbar=!0,this.snackbarText="You Can't move Not Moving products to Brand",this.color="on-background",this.PostRTV={},this.dialog=!1;else{const t={goods_status:this.PostRTV.goods_status,quantity:this.PostRTV.quantity,warehouse_updated_date:this.PostRTV.warehouse_updated_date,send_to_brand_date:this.PostRTV.send_to_brand_date,rtv_id:this.PostRTV.rtv_id,rtv_reason:this.PostRTV.rtv_reason,type:this.PostRTV.type,merchant_product_id:this.PostRTV.merchant_product_id};console.log("RTV",t),this.editrtvproducts(t).then(e=>{e.data.status==1?(this.snackbar=!0,this.color="primary",this.PostRTV={},this.snackbarText=e.data.message,this.dialog=!1,this.getRTVdatas()):(this.snackbar=!0,this.color="on-background",this.snackbarText=e.data.message)})}},getFormattedDate(t){const e=t.getFullYear(),c=String(t.getMonth()+1).padStart(2,"0"),f=String(t.getDate()).padStart(2,"0");return`${e}-${c}-${f}`},closedialog(){this.dialog=!1},editrow(t){console.log("check",t),this.dialog=!0,this.PostRTV={merchant_product_id:t.merchant_product_id,rtv_id:t.rtv_id,goods_status:t.goods_status,quantity:t.quantity,rtv_reason:t.rtv_reason,type:t.type,warehouse_updated_date:t.warehouse_updated_date!="N/A"?this.convertDateFormat(t.warehouse_updated_date):"",send_to_brand_date:t.send_to_brand_date!="N/A"?this.convertDateFormat(t.send_to_brand_date):""}},convertDateFormat(t){const e=new Date(t),c=e.getFullYear(),f=String(e.getMonth()+1).padStart(2,"0"),l=String(e.getDate()).padStart(2,"0");return`${c}-${f}-${l}`},colorgoodsstatus(t){return t=="Collected"?{color:"warning"}:t=="Reached Warehouse"||t=="Send To Brand"?{color:"success"}:{color:"error"}},getRTVdatas(){return new Promise((t,e)=>{this.getrtvproducts().then(c=>{this.RTVdata=c.data.data,this.RTVdata.reverse(),t()}).catch(c=>{console.error("Error fetching merchants:",c),e(c)})})}}},H={style:{"max-width":"400px"}},J=d("p",{class:"mb-0"}," The system is trying to retrieving the RTV. Please ensure that you have RTV !",-1),X={key:1,id:"app"},Z=U('<div id="loading-bg"><div class="loading-logo"><img src="'+q+'" height="60" width="68" alt="Logo"></div><div class="loading"><div class="effect-1 effects"></div><div class="effect-2 effects"></div><div class="effect-3 effects"></div></div></div>',1),$=[Z],ee={key:0},te=d("td",{colspan:"16",class:"text-center"},[d("h1",null,"No data found !")],-1),ae=[te],se={class:"text-center"},oe={class:"text-center"},le={class:"text-center"},de={class:"text-center"},re={class:"text-center"},ne={class:"text-center"},ue={class:"text-center"},ie={class:"text-center"},_e={class:"text-center"},ce={class:"text-center"},Ve={class:"text-center"},me={class:"text-center"},he={class:"text-center"};function ge(t,e,c,f,l,_){return n(),m("div",null,[d("div",H,[s(u,{class:"mb-3",modelValue:l.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=a=>l.searchQuery=a),density:"compact",variant:"solo",label:"Search","append-inner-icon":"mdi-magnify","single-line":"","hide-details":""},null,8,["modelValue"])]),_.paginatedItems==null?(n(),g(T,{key:0},{default:o(()=>[s(r,{cols:"12"},{default:o(()=>[s(v,{title:"Sales Order View"},{default:o(()=>[s(y,null,{default:o(()=>[s(I,{color:"warning",variant:"tonal",class:"mb-4",border:"top"},{default:o(()=>[s(z,{class:"mb-1"},{default:o(()=>[p(" Are you sure you have RTV ? ")]),_:1}),J]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):h("",!0),l.loading?(n(),m("div",X,$)):h("",!0),_.paginatedItems!=null?(n(),g(Q,{key:2,headers:l.headers,items:this.paginatedItems,"item-key":"dessert",class:"table-rounded",height:"500","fixed-header":""},{default:o(()=>[d("thead",null,[d("tr",null,[(n(!0),m(R,null,w(l.headers,a=>(n(),m("th",{class:"text-center",key:a},i(a.text),1))),128))])]),d("tbody",null,[_.filteredRTV.length===0?(n(),m("tr",ee,ae)):h("",!0),(n(!0),m(R,null,w(this.paginatedItems,(a,V)=>(n(),m("tr",{key:V},[d("td",se,i(a.so_number),1),d("td",oe,i(a.brand_name),1),d("td",le,i(a.sku_name),1),d("td",de,i(a.uom),1),d("td",re,[s(W,{color:_.colorgoodsstatus(a.goods_status).color,class:"font-weight-medium",size:"small"},{default:o(()=>[p(i(a.goods_status),1)]),_:2},1032,["color"])]),d("td",ne,i(a.delivery_person),1),d("td",ue,i(a.rtv_reason),1),d("td",ie,i(a.type),1),d("td",_e,i(a.collected_date),1),d("td",ce,i(a.quantity),1),d("td",Ve,i(a.warehouse_updated_date),1),d("td",me,i(a.send_to_brand_date),1),d("td",he,[a.goods_status!=="Send To Brand"&&!(a.type==="return"&&a.goods_status==="Reached Warehouse")?(n(),g(b,{key:0,icon:"",variant:"text",color:"default",class:"me-2",size:"x-small",onClick:D=>_.editrow(a)},{default:o(()=>[s(x,{color:"warning",icon:"ri-pencil-line",size:"22"})]),_:2},1032,["onClick"])):h("",!0),a.type==="return"&&a.goods_status==="Reached Warehouse"||a.goods_status==="Send To Brand"?(n(),g(b,{key:1,icon:"",variant:"text",color:"default",class:"me-2",size:"x-small",onClick:D=>_.viewrow(a)},{default:o(()=>[s(x,{color:"warning",icon:"basil:eye-outline",size:"22"})]),_:2},1032,["onClick"])):h("",!0)])]))),128))])]),_:1},8,["headers","items"])):h("",!0),s(A,{modelValue:l.page,"onUpdate:modelValue":e[1]||(e[1]=a=>l.page=a),length:Math.ceil(_.filteredRTV.length/l.pageSize),onInput:_.updatePagination,max:l.maxPaginationPages},null,8,["modelValue","length","onInput","max"]),s(S,{modelValue:l.dialog,"onUpdate:modelValue":e[8]||(e[8]=a=>l.dialog=a),"max-width":"1000"},{default:o(()=>[s(v,{title:"Update RTV",class:"mb-2"},{default:o(()=>[s(y,null,{default:o(()=>[s(T,null,{default:o(()=>[s(r,{cols:"12"},{default:o(()=>[s(P,{class:"mt-6",ref:"purchaseOrderForm"},{default:o(()=>[s(T,null,{default:o(()=>[s(r,{md:"6",cols:"12"},{default:o(()=>[s(G,{label:"Select Good Status",modelValue:this.PostRTV.goods_status,"onUpdate:modelValue":e[2]||(e[2]=a=>this.PostRTV.goods_status=a),items:["Reached Warehouse","Send To Brand"]},null,8,["modelValue"])]),_:1}),s(r,{md:"6",cols:"12"},{default:o(()=>[s(u,{label:"Quantity",modelValue:this.PostRTV.quantity,"onUpdate:modelValue":e[3]||(e[3]=a=>this.PostRTV.quantity=a),type:"number",min:"0",onKeydown:_.preventDecimal,onPaste:_.preventPaste},null,8,["modelValue","onKeydown","onPaste"])]),_:1}),s(r,{md:"6",cols:"12"},{default:o(()=>[this.PostRTV.goods_status=="Send To Brand"?(n(),g(u,{key:0,modelValue:this.PostRTV.send_to_brand_date,"onUpdate:modelValue":e[4]||(e[4]=a=>this.PostRTV.send_to_brand_date=a),type:"date",label:"Send To Brand Date",min:l.today,rules:l.dateRules},null,8,["modelValue","min","rules"])):h("",!0),this.PostRTV.goods_status=="Reached Warehouse"?(n(),g(u,{key:1,modelValue:this.PostRTV.warehouse_updated_date,"onUpdate:modelValue":e[5]||(e[5]=a=>this.PostRTV.warehouse_updated_date=a),type:"date",label:"Warehouse Update Date",min:l.today,rules:l.dateRules},null,8,["modelValue","min","rules"])):h("",!0)]),_:1}),s(k),s(r,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:o(()=>[s(b,{onClick:e[6]||(e[6]=a=>_.validateForm()),disabled:this.PostRTV.goods_status=="Collected"},{default:o(()=>[p("Save")]),_:1},8,["disabled"]),s(b,{color:"secondary",variant:"tonal",onClick:e[7]||(e[7]=a=>_.closedialog())},{default:o(()=>[p(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(S,{modelValue:l.dialog2,"onUpdate:modelValue":e[21]||(e[21]=a=>l.dialog2=a),"max-width":"1000"},{default:o(()=>[s(v,{title:"View RTV Details",class:"mb-2"},{default:o(()=>[s(y,null,{default:o(()=>[s(T,null,{default:o(()=>[s(r,{cols:"12"},{default:o(()=>[s(P,{class:"mt-6",ref:"purchaseOrderForm"},{default:o(()=>[s(T,null,{default:o(()=>[s(r,{md:"6",cols:"12"},{default:o(()=>[s(u,{label:"So No",modelValue:this.getRTV.so_number,"onUpdate:modelValue":e[9]||(e[9]=a=>this.getRTV.so_number=a),readonly:""},null,8,["modelValue"])]),_:1}),s(r,{md:"6",cols:"12"},{default:o(()=>[s(u,{label:"BrandName",modelValue:this.getRTV.brand_name,"onUpdate:modelValue":e[10]||(e[10]=a=>this.getRTV.brand_name=a),readonly:""},null,8,["modelValue"])]),_:1}),s(r,{md:"6",cols:"12"},{default:o(()=>[s(u,{modelValue:this.getRTV.sku_name,"onUpdate:modelValue":e[11]||(e[11]=a=>this.getRTV.sku_name=a),readonly:"",label:"SKU Name"},null,8,["modelValue"])]),_:1}),s(r,{md:"6",cols:"12"},{default:o(()=>[s(u,{modelValue:this.getRTV.uom,"onUpdate:modelValue":e[12]||(e[12]=a=>this.getRTV.uom=a),readonly:"",label:"UOM"},null,8,["modelValue"])]),_:1}),s(r,{md:"6",cols:"12"},{default:o(()=>[s(u,{modelValue:this.getRTV.goods_status,"onUpdate:modelValue":e[13]||(e[13]=a=>this.getRTV.goods_status=a),label:"Goods Status",readonly:""},null,8,["modelValue"])]),_:1}),s(r,{md:"6",cols:"12"},{default:o(()=>[s(u,{modelValue:this.getRTV.delivery_person,"onUpdate:modelValue":e[14]||(e[14]=a=>this.getRTV.delivery_person=a),label:"Delivery Person",readonly:""},null,8,["modelValue"])]),_:1}),s(r,{md:"6",cols:"12"},{default:o(()=>[s(u,{modelValue:this.getRTV.rtv_reason,"onUpdate:modelValue":e[15]||(e[15]=a=>this.getRTV.rtv_reason=a),readonly:"",label:"RTV Reason"},null,8,["modelValue"])]),_:1}),s(r,{md:"6",cols:"12"},{default:o(()=>[s(u,{modelValue:this.getRTV.collected_date,"onUpdate:modelValue":e[16]||(e[16]=a=>this.getRTV.collected_date=a),readonly:"",label:"Collected Date"},null,8,["modelValue"])]),_:1}),s(r,{md:"6",cols:"12"},{default:o(()=>[s(u,{modelValue:this.getRTV.quantity,"onUpdate:modelValue":e[17]||(e[17]=a=>this.getRTV.quantity=a),readonly:"",label:"Quantity"},null,8,["modelValue"])]),_:1}),s(r,{md:"6",cols:"12"},{default:o(()=>[s(u,{modelValue:this.getRTV.warehouse_updated_date,"onUpdate:modelValue":e[18]||(e[18]=a=>this.getRTV.warehouse_updated_date=a),readonly:"",label:"WareHouse Updated Date"},null,8,["modelValue"])]),_:1}),s(r,{md:"6",cols:"12"},{default:o(()=>[s(u,{modelValue:this.getRTV.send_to_brand_date,"onUpdate:modelValue":e[19]||(e[19]=a=>this.getRTV.send_to_brand_date=a),readonly:"",label:"Send To Brand Date"},null,8,["modelValue"])]),_:1}),s(k),s(r,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:o(()=>[s(b,{color:"secondary",variant:"tonal",onClick:e[20]||(e[20]=a=>_.closedialog2())},{default:o(()=>[p(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(M,{modelValue:l.snackbar,"onUpdate:modelValue":e[22]||(e[22]=a=>l.snackbar=a),timeout:3500,color:l.color},{default:o(()=>[p(i(l.snackbarText),1)]),_:1},8,["modelValue","color"])])}const pe=C(j,[["render",ge]]),fe={components:{UpdateRTV:pe},data(){return{currentroute:"",activeTab:"",tabs:[{title:"View Return Goods",icon:"mdi-account-outline",tab:"account"}]}},mounted(){this.currentroute=B(),this.activeTab=F(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function Te(t,e,c,f,l,_){const a=L("UpdateRTV");return n(),m("div",null,[s(O,{modelValue:l.activeTab,"onUpdate:modelValue":e[0]||(e[0]=V=>l.activeTab=V),"show-arrows":""},{default:o(()=>[(n(!0),m(R,null,w(l.tabs,V=>(n(),g(Y,{key:V.icon,value:V.tab},{default:o(()=>[s(x,{size:"20",start:"",icon:V.icon},null,8,["icon"]),p(" "+i(V.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),s(k),s(K,{modelValue:l.activeTab,"onUpdate:modelValue":e[1]||(e[1]=V=>l.activeTab=V),class:"mt-5 disable-tab-transition",touch:!1},{default:o(()=>[s(E,{value:"account"},{default:o(()=>[s(a)]),_:1})]),_:1},8,["modelValue"])])}const Be=C(fe,[["render",Te]]);export{Be as default};
