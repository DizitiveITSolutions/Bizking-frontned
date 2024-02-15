import{_ as S,o as n,c as d,g as o,bi as V,b9 as y,w as l,i as h,j as v,k as D,l as b,a as i,F as x,q as f,t as p,b as g,m as O,v as q,e as w,s as P,r as T,f as U,u as F}from"./index.6ec2b2ad.js";import{s as C}from"./Services.8ccc7918.js";import{V as E,a as m}from"./VTextField.2e53478a.js";import{V as Q}from"./VSelect.df54c607.js";import{V as R}from"./VTable.f1f148b9.js";import{V as B}from"./VChip.8febabc8.js";import{V as N}from"./VSnackbar.22cfb3f0.js";import{V as K,a as I,b as M,c as z}from"./VWindowItem.c5e65ecf.js";import"./index.2bd8ddc8.js";import"./VCheckboxBtn.f4c87e72.js";const A={mixins:[C],props:["so_id"],data(){return{PersonRules:[e=>!!e||"Delivery Person is required"],loading:!1,shippedexchange:[e=>e===0||!!e&&`${e}`.trim()!==""||"shippedexchange Quantity Is Required"],shippedquantity:[e=>e===0||!!e&&`${e}`.trim()!==""||"shipped Quantity Is Required"],snackbar:!1,snackbarText:"",timeout:6e3,color:"",top:!1,bottom:!0,left:!1,right:!1,selectedPurchaseOrder:null,dialog:!1,Soid:"",OutputStockDetails:[],today:this.getFormattedDate(new Date),outputStock:{so_id:"",so_number:"",merchant_id:"",merchant_code:"",merchant_name:"",total_cgst:"",total_sgst:"",sub_total:"",total_margin:"",total_so_amount:"",total_quantity:"",created_date:"",shipped_date:this.getFormattedDate(new Date),so_status:"",products:[{merchant_product_id:"",sku_name:"",hsn_code:"",mrp:"",margin:"",ordered_quantity:"",warehouse_quantity:"",uom:"",price_per_unit:"",taxable_amount:"",cgst:"",sgst:"",amount:"",sgst_percentage:"",cgst_percentage:"",exchange:"",return:"",shipped_ordered:"",shipped_exchange:""}],delivery_user_details:[{delivery_person:"",name:""}]},outputStockproducts:[],headers:[{text:"Brand Name",value:"brand_name"},{text:"SKU Name",value:"sku_name"},{text:"UOM",value:"uom"},{text:"Exchange Quantity",value:"exchange_quantity"},{text:"Ordered Quantity",value:"ordered_quantity"},{text:"Available",value:"warehouse_quantity"},{text:"Shipped Ordered",value:"shipped_ordered"},{text:"Shipped Exchanged",value:"shipped_exchange"}],selectedDeliveryPerson:null,deliveryPersons:[],deliveryUserDetails:[]}},computed:{totalshippedorder(){return this.outputStockproducts.reduce((e,t)=>e+parseFloat(t.shipped_ordered||0),0)},totalshippedexchange(){return this.outputStockproducts.reduce((e,t)=>e+parseFloat(t.shipped_exchange||0),0)},filteredOutputstocks(){return this.outputStockproducts.filter(e=>e.exchange_quantity>0||e.ordered_quantity>0)}},mounted(){this.Soid=this.$route.query.so_id,console.log("Received po_id:",this.Soid),this.getOutputstockdetails(),setTimeout(()=>{this.loading=!1,console.log("deliveryPersons:",this.deliveryPersons)},2e3)},methods:{validateForm(){this.$refs.purchaseOrderForm.validate().then(e=>{console.log("form valid",e.valid),e.valid==!0?this.saveOutputstock():(this.snackbar=!0,this.snackbarText="Please give all mandatory fields",this.color="error")})},preventPaste(e){const _=(e.clipboardData||window.clipboardData).getData("text");/^[0-9]+$/.test(_)||e.preventDefault()},preventDecimal(e){(e.key==="."||e.key===","||e.key==="+"||e.key==="-"||e.keyCode===189||e.keyCode===109)&&e.preventDefault()},saveOutputstock(){const e={Draft:1,Created:2,Acknowledged:3,Shipped:4,Delivered:5},t={so_id:this.OutputStockDetails.so_id,so_number:this.outputStock.so_number,so_status:e[this.outputStock.so_status],merchant_id:this.OutputStockDetails.merchant_id,merchant_code:this.OutputStockDetails.merchant_code,merchant_name:this.outputStock.merchant_name,total_cgst:this.OutputStockDetails.total_cgst,total_sgst:this.OutputStockDetails.total_sgst,sub_total:this.OutputStockDetails.sub_total,total_margin:this.OutputStockDetails.total_margin,total_so_amount:this.OutputStockDetails.total_so_amount,total_quantity:this.OutputStockDetails.total_quantity,created_date:this.OutputStockDetails.created_date,shipped_date:this.outputStock.shipped_date,total_shipped_ordered:`${this.totalshippedorder}`,total_shipped_exchanged:`${this.totalshippedexchange}`,products:this.outputStockproducts.map((s,r)=>({merchant_product_id:s.merchant_product_id,sku_name:s.sku_name,hsn_code:s.hsn_code,mrp:s.mrp,margin:s.margin,margin_percentage:s.margin_percentage,brand_name:s.brand_name,quantity:s.ordered_quantity,uom:s.uom,price_per_unit:s.price_per_unit,taxable_amount:s.taxable_amount,cgst:s.cgst,sgst:s.sgst,amount:s.amount,sgst_percentage:s.sgst_percentage,cgst_percentage:s.cgst_percentage,exchange:s.exchange,return:s.return,shipped_ordered:`${s.shipped_ordered}`,shipped_exchange:`${s.shipped_exchange}`})),delivery_person:this.selectedDeliveryPerson};console.log("check the post data",t),t.products.filter(s=>(console.log("sit",this.isQuantityExceeded(s.shipped_ordered,s.ordered_quantity)),this.isQuantityExceeded(s.shipped_ordered,s.ordered_quantity)||this.isQuantityExceeded2(s.shipped_exchange,s.exchange))).length===0?(this.loading=!0,this.postOutputstock(t).then(s=>{console.log("check the response",s),s.status==1?(this.snackbar=!0,this.color="success",this.formData={},this.snackbarText=s.message,setTimeout(()=>{this.$router.push({name:"Viewsaleshistory"})},1500)):(this.snackbar=!0,this.color="error")})):(this.snackbar=!0,this.color="error",this.snackbarText="your quantities are exceeded")},getFormattedDate(e){const t=e.getFullYear(),_=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${t}-${_}-${s}`},getOutputstockdetails(){this.getOutputstock(this.Soid).then(e=>{this.OutputStockDetails=e.data,console.log("check output dtock",this.OutputStockDetails),this.outputStock.so_number=this.OutputStockDetails.so_number,this.outputStock.merchant_name=this.OutputStockDetails.merchant_name,this.outputStock.so_status="Shipped",this.outputStockproducts=this.OutputStockDetails.products,this.deliveryUserDetails=e.delivery_user_details,console.log("delivery detials",this.deliveryUserDetails),this.deliveryPersons=this.deliveryUserDetails.map(t=>({value:t.delivery_person,text:t.name}))})},resolveStatusVariant(e){return e.warehouse_quantity>=e.ordered_quantity?{color:"success"}:{color:"success"}},deleteRow(e){const t=this.desserts.indexOf(e);t!==-1&&this.desserts.splice(t,1)},openproductdialog(){console.log("check the dialog"),this.dialog=!0},closeDialog(){this.dialog=!1},isQuantityExceeded(e,t){e!=="0"&&e>t&&(this.snackbar=!0,this.color="error",this.snackbarText="Shipped quantity cannot exceed orderd quantity.")},isQuantityExceeded2(e,t){e!=="0"&&e>t&&(this.snackbar=!0,this.color="error",this.snackbarText="Shipped quantity cannot exceed orderd quantity.")}}},L={key:0,class:"loading-container"},W={class:"text-center"},j={class:"text-center"},Y={class:"text-center"},G={class:"text-center"},H={class:"text-center"},J={class:"text-center"},X={class:"text-center"},Z={key:0},$={class:"text-center"},ee={key:0};function te(e,t,_,s,r,c){return n(),d("div",null,[r.loading?(n(),d("div",L,[o(V,{height:"5",color:"primary",indeterminate:"",class:"custom-loader","full-width":""})])):y("",!0),o(b,null,{default:l(()=>[o(h,{cols:"12"},{default:l(()=>[o(v,{title:"Output Stock",class:"mb-4"},{default:l(()=>[o(D,null,{default:l(()=>[o(E,{class:"mt-6",ref:"purchaseOrderForm"},{default:l(()=>[o(b,null,{default:l(()=>[o(h,{md:"6",cols:"12"},{default:l(()=>[o(m,{modelValue:this.outputStock.so_number,"onUpdate:modelValue":t[0]||(t[0]=a=>this.outputStock.so_number=a),label:"Sales Order",readonly:""},null,8,["modelValue"])]),_:1}),o(h,{cols:"12",md:"6"},{default:l(()=>[o(m,{modelValue:this.outputStock.merchant_name,"onUpdate:modelValue":t[1]||(t[1]=a=>this.outputStock.merchant_name=a),label:"Order From",readonly:""},null,8,["modelValue"])]),_:1}),o(h,{cols:"12",md:"6"},{default:l(()=>[o(m,{modelValue:this.outputStock.shipped_date,"onUpdate:modelValue":t[2]||(t[2]=a=>this.outputStock.shipped_date=a),type:"date",label:"Date",min:r.today},null,8,["modelValue","min"])]),_:1}),o(h,{md:"6",cols:"12"},{default:l(()=>[o(m,{modelValue:this.outputStock.so_status,"onUpdate:modelValue":t[3]||(t[3]=a=>this.outputStock.so_status=a),label:"SO Status",readonly:""},null,8,["modelValue"])]),_:1}),o(h,{md:"6",cols:"12"},{default:l(()=>[o(Q,{modelValue:r.selectedDeliveryPerson,"onUpdate:modelValue":t[4]||(t[4]=a=>r.selectedDeliveryPerson=a),label:"Select Delivery Person",items:this.deliveryPersons,"item-value":"value","item-title":"text",rules:r.PersonRules},null,8,["modelValue","items","rules"])]),_:1}),o(h,{cols:"12"},{default:l(()=>[o(R,{headers:r.headers,items:r.OutputStockDetails},{default:l(()=>[i("thead",null,[i("tr",null,[(n(!0),d(x,null,f(r.headers,a=>(n(),d("th",{class:"text-center",key:a},p(a.text),1))),128))])]),i("tbody",null,[(n(!0),d(x,null,f(this.outputStockproducts,(a,u)=>(n(),d("tr",{key:u},[i("td",W,p(a.brand_name),1),i("td",j,p(a.sku_name),1),i("td",Y,p(a.uom),1),i("td",G,p(a.exchange),1),i("td",H,p(a.ordered_quantity),1),i("td",J,[o(B,{color:c.resolveStatusVariant(a).color,class:"font-weight-medium",size:"small"},{default:l(()=>[g(p(a.warehouse_quantity),1)]),_:2},1032,["color"])]),i("td",X,[o(m,{onKeydown:c.preventDecimal,onPaste:c.preventPaste,type:"number",min:"0",max:"20000",rules:r.shippedquantity,modelValue:a.shipped_ordered,"onUpdate:modelValue":k=>a.shipped_ordered=k,outlined:"",dense:""},null,8,["onKeydown","onPaste","rules","modelValue","onUpdate:modelValue"])]),c.isQuantityExceeded(a.shipped_ordered,a.ordered_quantity)?(n(),d("span",Z)):y("",!0),i("td",$,[o(m,{onKeydown:c.preventDecimal,onPaste:c.preventPaste,type:"number",min:"0",max:"20000",rules:r.shippedexchange,modelValue:a.shipped_exchange,"onUpdate:modelValue":k=>a.shipped_exchange=k,outlined:"",dense:""},null,8,["onKeydown","onPaste","rules","modelValue","onUpdate:modelValue"]),c.isQuantityExceeded2(a.shipped_exchange,a.exchange)?(n(),d("span",ee)):y("",!0)])]))),128))])]),_:1},8,["headers","items"])]),_:1}),o(h,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[o(O,{onClick:t[5]||(t[5]=a=>c.validateForm())},{default:l(()=>[g("Save")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1}),o(N,{modelValue:r.snackbar,"onUpdate:modelValue":t[6]||(t[6]=a=>r.snackbar=a),timeout:3e3,color:r.color},{default:l(()=>[g(p(r.snackbarText),1)]),_:1},8,["modelValue","color"])])}const se=S(A,[["render",te]]),ae={components:{Outputstock:se},data(){return{currentroute:"",activeTab:"",tabs:[{title:"Create Output Stock",icon:"mdi-account-outline",tab:"account"}]}},mounted(){this.currentroute=q(),this.activeTab=w(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function oe(e,t,_,s,r,c){const a=T("Outputstock");return n(),d("div",null,[o(K,{modelValue:r.activeTab,"onUpdate:modelValue":t[0]||(t[0]=u=>r.activeTab=u),"show-arrows":""},{default:l(()=>[(n(!0),d(x,null,f(r.tabs,u=>(n(),U(z,{key:u.icon,value:u.tab},{default:l(()=>[o(F,{size:"20",start:"",icon:u.icon},null,8,["icon"]),g(" "+p(u.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),o(P),o(M,{modelValue:r.activeTab,"onUpdate:modelValue":t[1]||(t[1]=u=>r.activeTab=u),class:"mt-5 disable-tab-transition",touch:!1},{default:l(()=>[o(I,{value:"account"},{default:l(()=>[o(a)]),_:1})]),_:1},8,["modelValue"])])}const me=S(ae,[["render",oe]]);export{me as default};
