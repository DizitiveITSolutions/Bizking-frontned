import{_ as U,o as _,c as g,a as t,g as l,b5 as B,b6 as f,f as S,w as d,i as m,j as w,k,b as h,l as D,F as V,q as v,t as r,m as b,u as A,s as F,bl as q,bm as I,v as M,e as O,r as z}from"./index.986c8b57.js";import{s as R}from"./Services.7881b1f6.js";import{V as x}from"./VTextField.78fcf9d0.js";import{V as Q,a as L}from"./VAlert.ed85d860.js";import{V as y}from"./VChip.10586e46.js";import{V as P}from"./VTable.4ed8be04.js";import{V as Y}from"./VPagination.51a41da9.js";import{V as G}from"./VForm.45c60dc8.js";import{V as C}from"./VSelect.1c2f57cf.js";import{V as N}from"./VDialog.11623bc4.js";import{V as j}from"./VSnackbar.34661357.js";import{V as H,a as K,b as W,c as E}from"./VWindowItem.11d828b3.js";import"./index.2bd8ddc8.js";import"./VCheckboxBtn.11a37a8c.js";const J={mixins:[R],data(){return{searchQuery:"",page:1,pageSize:10,today:this.getFormattedDate(new Date),loading:!0,loading2:!1,Viewtotals:{total_po_amount:"",total_taxableammout:"",total_cgst:"",total_sgst:""},Statusrules:[e=>!!e||"Status Is Required"],quantityrules:[e=>!!e||"Quantity Is Required"],dateRules:[e=>!!e||"Date is required"],snackbar:!1,snackbarText:"",timeout:6e3,color:"",top:!1,bottom:!0,left:!1,right:!1,dialog2:!1,viewProduct:[],combinedProducts:[],totals:{Quantity:0,TaxableAmmount:0,CGST:0,SGST:0,Ammount:0},AllBrandproducts:[],selectedBrandId:"",Brandname:[],editProduct:[],VproductData:{brand_id:"",user_id:"",created_date:"",po_status:"",total_cgst:"",total_sgst:"",you_saved:"",po_id:"",po_number:"",delivery_date:"",sub_total:"",total_so_amount:"",total_quantity:"",products:[{brand_product_id:"",sku_name:"",hsn_code:"",mrp:"",quantity:"",uom:"",price_per_unit:"",taxable_amount:"",cgst:"",sgst:"",amount:"",total_give_margin:""}]},productData:{brand_id:"",user_id:"",created_date:"",po_status:"",total_cgst:"",total_sgst:"",you_saved:"",po_id:"",po_number:"",delivery_date:"","sub_total(taxable_amount_total)":"",total_so_amount:"",total_quantity:"",products:[{brand_product_id:"",sku_name:"",hsn_code:"",mrp:"",quantity:"",uom:"",price_per_unit:"",taxable_amount:"",cgst:"",sgst:"",amount:"",total_give_margin:""}]},dialog:!1,purchaseorders:[],userIds:"",userRoles:"",createdBy:"",headers:[{text:"Purchase Order",value:"po_number"},{text:"Order Date",value:"created_date"},{text:"Status",value:"po_status"},{text:"Order To",value:"brand_name"},{text:"Shipped To",value:"brand_name"},{text:"Total",value:"total_po_amount"},{text:"Action",value:"actions",sortable:!1}],headers2:[{text:"Product Name",value:"sku_name"},{text:"HSN",value:"hsn_code"},{text:"MRP",value:"mrp"},{text:"Quantity",value:"quantity"},{text:"UOM",value:"uom"},{text:"Price/Unit",value:"price_per_unit"},{text:"TaxableAmount",value:"taxable_amount"},{text:"CGST",value:"csgt"},{text:"SGST",value:"sgst"},{text:"Amount",value:"amount"}],headers3:[{text:"Product Name",value:"sku_name"},{text:"HSN",value:"hsn_code"},{text:"MRP",value:"mrp"},{text:"Quantity",value:"quantity"},{text:"UOM",value:"uom"},{text:"Price/Unit",value:"price_per_unit"},{text:"TaxableAmount",value:"taxable_amount"},{text:"CGST",value:"csgt"},{text:"SGST",value:"sgst"},{text:"Amount",value:"amount"}]}},computed:{filteredPurchaseOrder(){const e=this.searchQuery.toLowerCase().trim();return this.purchaseorders.filter(s=>s.po_number&&s.po_number.toLowerCase().includes(e)||s.created_date&&s.created_date.toLowerCase().includes(e)||s.po_status&&s.po_status.toLowerCase().includes(e)||s.brand_name&&s.brand_name.toLowerCase().includes(e)||s.total_po_amount&&s.total_po_amount.toString().includes(e))},paginatedItems(){const e=(this.page-1)*this.pageSize,s=e+this.pageSize;return this.filteredPurchaseOrder.slice(e,s)},totalIndividualAmount(){return this.AllBrandproducts.reduce((e,s)=>{const u=parseFloat(s.mrp),i=parseFloat(s.quantity);if(!isNaN(u)&&!isNaN(i)){const n=u*i;return e+n}return e},0)},savedamount(){const e=parseFloat(this.allAmmount),s=this.totalIndividualAmount-(isNaN(e)?0:e);return Math.max(0,s).toFixed(2)},allAmmount(){const e=this.calculateTotalamount.reduce((s,u)=>s+parseFloat(u),0);return parseFloat(e.toFixed(2))},allSGSTAmount(){const e=this.calculatedSGSTAmount.reduce((s,u)=>s+parseFloat(u),0);return parseFloat(e.toFixed(2))},allCGSTAmount(){const e=this.calculatedCGSTAmount.reduce((s,u)=>s+parseFloat(u),0);return parseFloat(e.toFixed(2))},allTaxableAmmount(){const e=this.calculatedTaxableAmount.reduce((s,u)=>s+parseFloat(u),0);return parseFloat(e.toFixed(2))},allQuantity(){const e=this.AllBrandproducts.reduce((s,u)=>{const i=parseFloat(u.quantity);return isNaN(i)?s:s+i},0);return isNaN(e)?0:e.toFixed(0)},calculateTotalamount(){return this.AllBrandproducts.map((e,s)=>{const u=parseFloat(this.calculatedTaxableAmount[s]),i=parseFloat(this.calculatedCGSTAmount[s]),n=parseFloat(this.calculatedSGSTAmount[s]),o=u+i+n;return isNaN(o)?0:o.toFixed(2)})},calculatedSGSTAmount(){return this.AllBrandproducts.map((e,s)=>{const u=parseFloat(this.calculatedTaxableAmount[s]),i=parseFloat(e.sgst.replace("%","")),n=u*i/100;return isNaN(n)?0:n.toFixed(2)})},calculatedCGSTAmount(){return this.AllBrandproducts.map((e,s)=>{const u=parseFloat(this.calculatedTaxableAmount[s]),i=parseFloat(e.cgst.replace("%","")),n=u*i/100;return isNaN(n)?0:n.toFixed(2)})},calculateMargin(){return this.AllBrandproducts.map((e,s)=>{const u=parseFloat(e.mrp),i=parseFloat(e.total_given_margin.replace("%","")),n=u*i/100;return isNaN(n)?0:n.toFixed(2)})},calculatedPricePerUnit(){return this.AllBrandproducts.map((e,s)=>{const u=parseFloat(e.mrp),i=parseFloat(this.calculateMargin[s]),n=u-i;return isNaN(n)?0:n.toFixed(2)})},calculatedTaxableAmount(){return this.AllBrandproducts.map((e,s)=>{const u=parseFloat(e.quantity),i=this.calculatedPricePerUnit[s],n=parseFloat(e.cgst.replace("%","")),o=parseFloat(e.sgst.replace("%","")),a=parseFloat(i);if(u===0||isNaN(u)||isNaN(a))return 0;const p=i/(100+(n+o))*100*u;return isNaN(p)?0:p.toFixed(2)})}},mounted(){this.createdBy=localStorage.getItem("createdby"),this.userIds=localStorage.getItem("userId"),this.userRoles=localStorage.getItem("userRole"),this.getPurchaseorderdetails(),this.getBrands(),setTimeout(()=>{this.loading=!1},4e3)},methods:{updatePagination(e){this.page=e},getFormattedDate(e){const s=e.getFullYear(),u=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${s}-${u}-${i}`},colorTGMmargin(e){return e?{color:"success"}:{color:"error"}},colorSGSTmargin(e){return e?{color:"success"}:{color:"error"}},colorCGSTmargin(e){return e?{color:"success"}:{color:"error"}},getPDFupdate(e){this.loading2=!0,this.getPurchasePDF(e).then(s=>{const u=s.data.po_file;this.loading2=!1,window.open(u,"_blank")})},DownloadPDF(e){if(e==null)this.snackbar=!0,this.snackbarText="PDF is not available",this.color="on-background";else{const s=e;window.open(s,"_blank")}},closedialog2(){this.dialog2=!1},validateForm(){this.$refs.purchaseOrderForm.validate().then(e=>{e.valid==!0?this.allQuantity>=1?this.saveProducteditData():(this.snackbar=!0,this.snackbarText="Please give Quantities",this.color="on-background"):(this.snackbar=!0,this.snackbarText="Please give all mandatory fields",this.color="on-background")})},deleteRow(e){const s=this.AllBrandproducts.indexOf(e);s!==-1&&this.AllBrandproducts.splice(s,1)},saveProducteditData(){const e={Draft:1,Created:2,Shared:3,Acknowledged:4,Received:5},s=Math.max(this.AllBrandproducts.length,this.calculatedPricePerUnit.length,this.calculatedTaxableAmount.length,this.calculatedCGSTAmount.length,this.calculatedSGSTAmount.length,this.calculateTotalamount.length),u=[];for(let o=0;o<s;o++){const a=this.AllBrandproducts[o];!a||a.quantity<=0||u.push({brand_product_id:a.brand_product_id,sku_name:a.sku_name,hsn_code:a.hsn_code,mrp:a.mrp,quantity:`${a.quantity}`,uom:a.uom,price_per_unit:this.calculatedPricePerUnit[o]||"0",taxable_amount:this.calculatedTaxableAmount[o]||"0",csgt:this.calculatedCGSTAmount[o]||"0",sgst:this.calculatedSGSTAmount[o]||"0",amount:this.calculateTotalamount[o]||"0",sgst_percentage:a.sgst.includes("%")?`${a.sgst}`:`${a.sgst}%`,cgst_percentage:a.cgst.includes("%")?`${a.cgst}`:`${a.cgst}%`,total_give_margin:a.total_given_margin})}const i=this.editProduct.map(o=>o.brand_product_id),n={brand_id:this.selectedBrandId,user_id:this.userIds,created_date:this.productData.created_date,delivery_date:this.productData.delivery_date,po_status:e[this.productData.po_status],total_cgst:`${this.allCGSTAmount}`,total_sgst:`${this.allSGSTAmount}`,you_saved:`${this.savedamount}`,sub_total:`${this.allTaxableAmmount}`,total_po_amount:`${this.allAmmount}`,total_quantity:`${this.allQuantity}`,po_id:this.productData.po_id,po_number:this.productData.po_number,products:u.concat(this.editProduct.filter(o=>!i.includes(o.brand_product_id)).map(o=>({brand_product_id:o.brand_product_id,sku_name:o.sku_name,hsn_code:o.hsn_code,mrp:o.mrp,quantity:o.quantity,uom:o.uom,price_per_unit:o.price_per_unit,taxable_amount:o.taxable_amount,csgt:o.cgst,sgst:o.sgst,amount:o.amount,total_give_margin:o.total_give_margin})))};this.postupdatePurchaseorder(n).then(o=>{o.status==1?(this.snackbar=!0,this.color="primary",this.formData={},this.snackbarText=o.message,this.getPurchaseorderdetails(),this.dialog=!1):(this.snackbar=!0,this.color="on-background")})},preventPaste(e){const u=(e.clipboardData||window.clipboardData).getData("text");/^[0-9]+$/.test(u)||e.preventDefault()},preventDecimal(e){(e.key==="."||e.key===","||e.key==="+"||e.key==="-"||e.keyCode===189||e.keyCode===109)&&e.preventDefault()},colorTGMmargin(e){return e?{color:"success"}:{color:"error"}},colorSGSTmargin(e){return e?{color:"success"}:{color:"error"}},colorCGSTmargin(e){return e?{color:"success"}:{color:"error"}},getBrandsdata(){this.getBrands().then(e=>{this.Brandname=e.data})},viewrow(e){this.dialog2=!0,this.VproductData.brand_name=e.brand_name,this.VproductData.created_date=e.created_date,this.VproductData.po_status=e.po_status,this.VproductData.po_number=e.po_number,this.VproductData.po_id=e.po_id,this.VproductData.total_po_amount=e.total_po_amount,this.VproductData.total_cgst=e.total_cgst,this.VproductData.total_sgst=e.total_sgst,this.VproductData.you_saved=e.you_saved,this.VproductData.total_quantity=e.total_quantity,this.VproductData.sub_total=e.sub_total,this.VproductData.delivery_date=e.delivery_date,this.viewProduct=e.products},editrow(e){this.dialog=!0,this.productData.brand_name=e.brand_name,this.productData.created_date=e.created_date,this.productData.delivery_date=e.delivery_date,this.productData.po_status=e.po_status,this.productData.po_number=e.po_number,this.productData.po_id=e.po_id,this.editProduct=e.products,this.productData.brand_name===e.brand_name&&(this.selectedBrandId=e.brand_id,this.getBrandproducts(this.selectedBrandId).then(s=>{this.AllBrandproducts=s.data,this.AllBrandproducts=this.AllBrandproducts.map(u=>{const i=this.editProduct.find(n=>n.brand_product_id==u.brand_product_id);return{...u,quantity:i?i.quantity:0}})}))},closeDialog(){this.dialog=!1},getPurchaseorderdetails(){this.getPurchaseorder(this.userIds,this.userRoles).then(e=>{this.purchaseorders=e.data,this.purchaseorders.reverse()})},colorPOstatus(e){return e=="Created"?{color:"primary"}:e=="Draft"?{color:"success"}:e=="Acknowledged"?{color:"warning"}:e=="Received"?{color:"success"}:{color:"info"}}}},c=e=>(q("data-v-4e81b81e"),e=e(),I(),e),X={style:{"max-width":"400px"}},Z={key:0,class:"loading-container"},$={key:1,class:"loading-container"},tt=c(()=>t("p",{class:"mb-0"}," The system is not retrieving the Purchase Orders. Please ensure that you have applied for Purchase Orders !",-1)),et={class:"text-center"},at={class:"text-center"},st={class:"text-center"},lt={class:"text-center"},ot={class:"text-center"},rt={class:"text-center"},nt={class:"text-center",style:{display:"flex","justify-content":"center","align-items":"center"}},dt={class:"text-center"},ct={class:"text-center"},ut={class:"text-center"},it={class:"text-center"},_t={class:"text-center"},pt={class:"text-center"},ht=c(()=>t("br",null,null,-1)),mt={class:"text-center"},gt={class:"text-center"},xt=c(()=>t("br",null,null,-1)),ft={class:"text-center"},bt=c(()=>t("br",null,null,-1)),yt={class:"text-center"},Vt=c(()=>t("td",{class:"text-center"},"Total",-1)),vt=c(()=>t("td",null,null,-1)),St=c(()=>t("td",null,null,-1)),Tt={class:"text-center"},Dt=c(()=>t("td",null,null,-1)),At=c(()=>t("td",null,null,-1)),wt={class:"text-center"},kt={class:"text-center"},Pt={class:"text-center"},Ct={class:"text-center"},Ft=c(()=>t("td",null,null,-1)),Bt=c(()=>t("tr",null,[t("td",{class:"text-left",style:{"font-weight":"Bold"}}," Tax Details: "),t("td",{colspan:"4",class:"text-right"}),t("td",{colspan:"4",class:"text-left",style:{"font-weight":"Bold"}}," Amounts: "),t("td",{colspan:"4",class:"text-center"})],-1)),Gt=c(()=>t("td",{class:"text-left"},"CGST",-1)),Nt={colspan:"4",class:"text-right"},Ut=c(()=>t("td",{colspan:"4",class:"text-left"}," SubTotal ",-1)),qt={colspan:"4",class:"text-center"},It=c(()=>t("td",{class:"text-left"},"SGST",-1)),Mt={colspan:"4",class:"text-right"},Ot=c(()=>t("td",{colspan:"4",class:"text-left"}," Total ",-1)),zt={colspan:"4",class:"text-center"},Rt=c(()=>t("td",{class:"text-left"},null,-1)),Qt=c(()=>t("td",{colspan:"4",class:"text-right"},null,-1)),Lt=c(()=>t("td",{colspan:"4",class:"text-left"}," Advance ",-1)),Yt={colspan:"4",class:"text-center"},jt=c(()=>t("td",{class:"text-left"},null,-1)),Ht=c(()=>t("td",{colspan:"4",class:"text-right"},null,-1)),Kt=c(()=>t("td",{colspan:"4",class:"text-left"}," Balance ",-1)),Wt={colspan:"4",class:"text-center"},Et=c(()=>t("td",{class:"text-left"},null,-1)),Jt=c(()=>t("td",{colspan:"4",class:"text-right"},null,-1)),Xt=c(()=>t("td",{colspan:"4",class:"text-left"}," You Saved ",-1)),Zt={colspan:"4",class:"text-center"},$t={class:"text-center"},te={class:"text-center"},ee={class:"text-center"},ae={class:"text-center"},se={class:"text-center"},le={class:"text-center"},oe={class:"text-center"},re={class:"text-center"},ne={class:"text-center"},de={class:"text-center"},ce=c(()=>t("td",{class:"text-center"},"Total",-1)),ue=c(()=>t("td",null,null,-1)),ie=c(()=>t("td",null,null,-1)),_e={class:"text-center"},pe=c(()=>t("td",null,null,-1)),he=c(()=>t("td",null,null,-1)),me={class:"text-center"},ge={class:"text-center"},xe={class:"text-center"},fe={class:"text-center"},be=c(()=>t("td",null,null,-1)),ye=c(()=>t("tr",null,[t("td",{class:"text-left",style:{"font-weight":"Bold"}}," Tax Details: "),t("td",{colspan:"4",class:"text-right"}),t("td",{colspan:"4",class:"text-left",style:{"font-weight":"Bold"}}," Amounts: "),t("td",{colspan:"4",class:"text-center"})],-1)),Ve=c(()=>t("td",{class:"text-left"},"CGST",-1)),ve={colspan:"4",class:"text-right"},Se=c(()=>t("td",{colspan:"4",class:"text-left"}," SubTotal ",-1)),Te={colspan:"4",class:"text-center"},De=c(()=>t("td",{class:"text-left"},"SGST",-1)),Ae={colspan:"4",class:"text-right"},we=c(()=>t("td",{colspan:"4",class:"text-left"}," Total ",-1)),ke={colspan:"4",class:"text-center"},Pe=c(()=>t("td",{class:"text-left"},null,-1)),Ce=c(()=>t("td",{colspan:"4",class:"text-right"},null,-1)),Fe=c(()=>t("td",{colspan:"4",class:"text-left"}," Advance ",-1)),Be={colspan:"4",class:"text-center"},Ge=c(()=>t("td",{class:"text-left"},null,-1)),Ne=c(()=>t("td",{colspan:"4",class:"text-right"},null,-1)),Ue=c(()=>t("td",{colspan:"4",class:"text-left"}," Balance ",-1)),qe={colspan:"4",class:"text-center"},Ie=c(()=>t("td",{class:"text-left"},null,-1)),Me=c(()=>t("td",{colspan:"4",class:"text-right"},null,-1)),Oe=c(()=>t("td",{colspan:"4",class:"text-left"}," You Saved ",-1)),ze={colspan:"4",class:"text-center"};function Re(e,s,u,i,n,o){return _(),g("div",null,[t("div",X,[l(x,{class:"mb-3",modelValue:n.searchQuery,"onUpdate:modelValue":s[0]||(s[0]=a=>n.searchQuery=a),density:"compact",variant:"solo",label:"Search","append-inner-icon":"mdi-magnify","single-line":"","hide-details":""},null,8,["modelValue"])]),n.loading?(_(),g("div",Z,[l(B,{height:"5",color:"primary",indeterminate:"",class:"custom-loader","full-width":""})])):f("",!0),n.loading2?(_(),g("div",$,[l(B,{height:"5",color:"error",indeterminate:"",class:"custom-loader","full-width":""})])):f("",!0),this.purchaseorders==null?(_(),S(D,{key:2},{default:d(()=>[l(m,{cols:"12"},{default:d(()=>[l(w,{title:"Purchase Order View"},{default:d(()=>[l(k,null,{default:d(()=>[l(Q,{color:"warning",variant:"tonal",class:"mb-4",border:"top"},{default:d(()=>[l(L,{class:"mb-1"},{default:d(()=>[h(" Are you sure you gave Purchase Orders? ")]),_:1}),tt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):f("",!0),this.purchaseorders!=null?(_(),S(P,{key:3,headers:n.headers,items:this.paginatedItems,class:"table-rounded",height:"500","fixed-header":""},{default:d(()=>[t("thead",null,[t("tr",null,[(_(!0),g(V,null,v(n.headers,a=>(_(),g("th",{class:"text-center",key:a},r(a.text),1))),128))])]),t("tbody",null,[(_(!0),g(V,null,v(this.paginatedItems,(a,p)=>(_(),g("tr",{key:p},[t("td",et,r(a.po_number),1),t("td",at,r(a.created_date),1),t("td",st,[l(y,{color:o.colorPOstatus(a.po_status).color,class:"font-weight-medium",size:"small"},{default:d(()=>[h(r(a.po_status),1)]),_:2},1032,["color"])]),t("td",lt,r(a.brand_name),1),t("td",ot,r(a.brand_name),1),t("td",rt,"\u20B9"+r(a.total_po_amount),1),t("td",nt,[a.po_status!="Acknowledged"&&a.po_status!="Shared"&&a.po_status!="Received"?(_(),S(b,{key:0,icon:"",variant:"text",color:"default",class:"me-2",size:"x-small",onClick:T=>o.editrow(a)},{default:d(()=>[l(A,{color:"warning",icon:"ri-pencil-line",size:"22"})]),_:2},1032,["onClick"])):f("",!0),a.po_status=="Acknowledged"||a.po_status=="Shared"||a.po_status=="Received"?(_(),S(b,{key:1,icon:"",variant:"text",color:"default",class:"me-2",size:"x-small",onClick:T=>o.viewrow(a)},{default:d(()=>[l(A,{color:"success",icon:"basil:eye-outline",size:"22"})]),_:2},1032,["onClick"])):f("",!0),a.po_status=="Acknowledged"||a.po_status=="Shared"||a.po_status=="Received"?(_(),S(b,{key:2,icon:"",variant:"text",color:"default",class:"me-2",size:"x-small",onClick:T=>o.getPDFupdate(a.po_id)},{default:d(()=>[l(A,{color:"error",icon:"iwwa:file-pdf",size:"26"})]),_:2},1032,["onClick"])):f("",!0)])]))),128))])]),_:1},8,["headers","items"])):f("",!0),l(Y,{modelValue:n.page,"onUpdate:modelValue":s[1]||(s[1]=a=>n.page=a),length:Math.ceil(o.filteredPurchaseOrder.length/n.pageSize),onInput:o.updatePagination},null,8,["modelValue","length","onInput"]),l(N,{modelValue:n.dialog,"onUpdate:modelValue":s[8]||(s[8]=a=>n.dialog=a),"max-width":"1000"},{default:d(()=>[l(w,{title:"Purchase Order",class:"mb-2"},{default:d(()=>[l(k,null,{default:d(()=>[l(D,null,{default:d(()=>[l(m,{cols:"12"},{default:d(()=>[l(G,{class:"mt-6",ref:"purchaseOrderForm"},{default:d(()=>[l(D,null,{default:d(()=>[l(m,{md:"6",cols:"12"},{default:d(()=>[l(x,{modelValue:this.productData.brand_name,"onUpdate:modelValue":s[2]||(s[2]=a=>this.productData.brand_name=a),label:"Brand or Manufacturer",readonly:""},null,8,["modelValue"])]),_:1}),l(m,{cols:"12",md:"6"},{default:d(()=>[l(x,{modelValue:this.createdBy,"onUpdate:modelValue":s[3]||(s[3]=a=>this.createdBy=a),label:"Created By",readonly:""},null,8,["modelValue"])]),_:1}),l(m,{cols:"12",md:"6"},{default:d(()=>[l(x,{modelValue:this.productData.created_date,"onUpdate:modelValue":s[4]||(s[4]=a=>this.productData.created_date=a),type:"date",label:"Date",readonly:""},null,8,["modelValue"])]),_:1}),l(m,{md:"6",cols:"12"},{default:d(()=>[l(C,{modelValue:this.productData.po_status,"onUpdate:modelValue":s[5]||(s[5]=a=>this.productData.po_status=a),label:"PO Status",items:["Draft","Created","Shared","Acknowledged"],rules:n.Statusrules},null,8,["modelValue","rules"])]),_:1}),l(m,{md:"6",cols:"12"},{default:d(()=>[l(x,{modelValue:this.productData.delivery_date,"onUpdate:modelValue":s[6]||(s[6]=a=>this.productData.delivery_date=a),type:"date",label:"Delivery Date",min:n.today,rules:n.dateRules},null,8,["modelValue","min","rules"])]),_:1}),l(F),l(m,{cols:"12"},{default:d(()=>[l(P,{headers:n.headers2,items:n.AllBrandproducts},{default:d(()=>[t("thead",null,[t("tr",null,[(_(!0),g(V,null,v(n.headers2,a=>(_(),g("th",{class:"text-center",key:a},r(a.text),1))),128))])]),t("tbody",null,[(_(!0),g(V,null,v(this.AllBrandproducts,(a,p)=>(_(),g("tr",{key:p},[t("td",dt,r(a.sku_name),1),t("td",ct,r(a.hsn_code),1),t("td",ut,"\u20B9"+r(a.mrp),1),t("td",it,[l(x,{onKeydown:o.preventDecimal,onPaste:o.preventPaste,type:"number",min:"0",max:"20000",modelValue:a.quantity,"onUpdate:modelValue":T=>a.quantity=T,style:{"min-width":"80px"}},null,8,["onKeydown","onPaste","modelValue","onUpdate:modelValue"])]),t("td",_t,r(a.uom),1),t("td",pt,[h(" \u20B9 "+r(o.calculatedPricePerUnit[p])+" ",1),ht,l(y,{color:o.colorTGMmargin(a.total_given_margin).color,class:"font-weight-medium",size:"small"},{default:d(()=>[h(" ("+r(a.total_given_margin)+") ",1)]),_:2},1032,["color"])]),t("td",mt,"\u20B9"+r(o.calculatedTaxableAmount[p]),1),t("td",gt,[h(" \u20B9"+r(o.calculatedCGSTAmount[p])+" ",1),xt,l(y,{color:o.colorCGSTmargin(a.cgst).color,class:"font-weight-medium",size:"small"},{default:d(()=>[h(" ("+r(a.cgst)+") ",1)]),_:2},1032,["color"])]),t("td",ft,[h(" \u20B9"+r(o.calculatedSGSTAmount[p])+" ",1),bt,l(y,{color:o.colorSGSTmargin(a.sgst).color,class:"font-weight-medium",size:"small"},{default:d(()=>[h(" ("+r(a.sgst)+") ",1)]),_:2},1032,["color"])]),t("td",yt,"\u20B9"+r(o.calculateTotalamount[p]),1),t("td",null,[l(b,{icon:"",variant:"text",color:"error",class:"me-2",size:"small",onClick:T=>o.deleteRow(a)},{default:d(()=>[l(A,{icon:"mdi-minus-circle-outline",size:"24"})]),_:2},1032,["onClick"])])]))),128))]),t("tfoot",null,[t("tr",null,[Vt,vt,St,t("td",Tt,r(o.allQuantity),1),Dt,At,t("td",wt,"\u20B9"+r(o.allTaxableAmmount),1),t("td",kt,"\u20B9"+r(o.allCGSTAmount),1),t("td",Pt,"\u20B9"+r(o.allSGSTAmount),1),t("td",Ct,"\u20B9"+r(o.allAmmount),1),Ft]),Bt,t("tr",null,[Gt,t("td",Nt," \u20B9"+r(o.allCGSTAmount),1),Ut,t("td",qt," \u20B9"+r(o.allAmmount),1)]),t("tr",null,[It,t("td",Mt," \u20B9"+r(o.allSGSTAmount),1),Ot,t("td",zt," \u20B9"+r(o.allAmmount),1)]),t("tr",null,[Rt,Qt,Lt,t("td",Yt," \u20B9"+r(n.totals.Quantity),1)]),t("tr",null,[jt,Ht,Kt,t("td",Wt," \u20B9"+r(o.allAmmount),1)]),t("tr",null,[Et,Jt,Xt,t("td",Zt," \u20B9"+r(o.savedamount),1)])])]),_:1},8,["headers","items"])]),_:1}),l(m,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:d(()=>[l(b,{onClick:o.validateForm},{default:d(()=>[h("Save")]),_:1},8,["onClick"]),l(b,{color:"secondary",variant:"tonal",onClick:s[7]||(s[7]=a=>o.closeDialog())},{default:d(()=>[h(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(N,{modelValue:n.dialog2,"onUpdate:modelValue":s[15]||(s[15]=a=>n.dialog2=a),"max-width":"1000"},{default:d(()=>[l(w,{title:"Purchase Order",class:"mb-2"},{default:d(()=>[l(k,null,{default:d(()=>[l(D,null,{default:d(()=>[l(m,{cols:"12"},{default:d(()=>[l(G,{class:"mt-6"},{default:d(()=>[l(D,null,{default:d(()=>[l(m,{md:"6",cols:"12"},{default:d(()=>[l(C,{modelValue:this.VproductData.brand_name,"onUpdate:modelValue":s[9]||(s[9]=a=>this.VproductData.brand_name=a),label:"Brand or Manufacturer",readonly:""},null,8,["modelValue"])]),_:1}),l(m,{cols:"12",md:"6"},{default:d(()=>[l(x,{modelValue:this.createdBy,"onUpdate:modelValue":s[10]||(s[10]=a=>this.createdBy=a),label:"Created By",readonly:""},null,8,["modelValue"])]),_:1}),l(m,{cols:"12",md:"6"},{default:d(()=>[l(x,{modelValue:this.VproductData.created_date,"onUpdate:modelValue":s[11]||(s[11]=a=>this.VproductData.created_date=a),type:"date",label:"Date",readonly:""},null,8,["modelValue"])]),_:1}),l(m,{md:"6",cols:"12"},{default:d(()=>[l(C,{modelValue:this.VproductData.po_status,"onUpdate:modelValue":s[12]||(s[12]=a=>this.VproductData.po_status=a),label:"PO Status",readonly:""},null,8,["modelValue"])]),_:1}),l(m,{md:"6",cols:"12"},{default:d(()=>[l(x,{modelValue:this.VproductData.delivery_date,"onUpdate:modelValue":s[13]||(s[13]=a=>this.VproductData.delivery_date=a),type:"date",label:"Delivery Date",readonly:""},null,8,["modelValue"])]),_:1}),l(F),l(m,{cols:"12"},{default:d(()=>[l(P,{headers:n.headers3,items:n.viewProduct},{default:d(()=>[t("thead",null,[t("tr",null,[(_(!0),g(V,null,v(n.headers3,a=>(_(),g("th",{class:"text-center",key:a},r(a.text),1))),128))])]),t("tbody",null,[(_(!0),g(V,null,v(this.viewProduct,(a,p)=>(_(),g("tr",{key:p},[t("td",$t,r(a.sku_name),1),t("td",te,r(a.hsn_code),1),t("td",ee," \u20B9"+r(a.mrp),1),t("td",ae,r(a.quantity),1),t("td",se,r(a.uom),1),t("td",le,[h(" \u20B9"+r(a.price_per_unit)+" ",1),l(y,{color:o.colorTGMmargin(a.total_give_margin).color,class:"font-weight-medium",size:"small"},{default:d(()=>[h(" ("+r(a.total_give_margin)+") ",1)]),_:2},1032,["color"])]),t("td",oe," \u20B9"+r(a.taxable_amount),1),t("td",re,[h(" \u20B9"+r(a.csgt)+" ",1),l(y,{color:o.colorTGMmargin(a.cgst_percentage).color,class:"font-weight-medium",size:"small"},{default:d(()=>[h(" ("+r(a.cgst_percentage)+") ",1)]),_:2},1032,["color"])]),t("td",ne,[h(" \u20B9"+r(a.sgst)+" ",1),l(y,{color:o.colorTGMmargin(a.sgst_percentage).color,class:"font-weight-medium",size:"small"},{default:d(()=>[h(" ("+r(a.sgst_percentage)+") ",1)]),_:2},1032,["color"])]),t("td",de," \u20B9"+r(a.amount),1)]))),128))]),t("tfoot",null,[t("tr",null,[ce,ue,ie,t("td",_e,r(this.VproductData.total_quantity),1),pe,he,t("td",me,"\u20B9"+r(this.VproductData.sub_total),1),t("td",ge,"\u20B9"+r(this.VproductData.total_cgst),1),t("td",xe,"\u20B9"+r(this.VproductData.total_sgst),1),t("td",fe,"\u20B9"+r(this.VproductData.total_po_amount),1),be]),ye,t("tr",null,[Ve,t("td",ve," \u20B9"+r(this.VproductData.total_cgst),1),Se,t("td",Te," \u20B9"+r(this.VproductData.total_po_amount),1)]),t("tr",null,[De,t("td",Ae," \u20B9"+r(this.VproductData.total_sgst),1),we,t("td",ke," \u20B9"+r(this.VproductData.total_po_amount),1)]),t("tr",null,[Pe,Ce,Fe,t("td",Be," \u20B9"+r(n.totals.Quantity),1)]),t("tr",null,[Ge,Ne,Ue,t("td",qe," \u20B9"+r(this.VproductData.total_po_amount),1)]),t("tr",null,[Ie,Me,Oe,t("td",ze," \u20B9"+r(this.VproductData.you_saved),1)])])]),_:1},8,["headers","items"])]),_:1}),l(m,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:d(()=>[l(b,{color:"primary",onClick:s[14]||(s[14]=a=>o.closedialog2())},{default:d(()=>[h(" Close ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(j,{modelValue:n.snackbar,"onUpdate:modelValue":s[16]||(s[16]=a=>n.snackbar=a),timeout:2e3,color:n.color},{default:d(()=>[h(r(n.snackbarText),1)]),_:1},8,["modelValue","color"])])}const Qe=U(J,[["render",Re],["__scopeId","data-v-4e81b81e"]]),Le={components:{Viewpurchaseorders:Qe},data(){return{currentroute:"",activeTab:"",tabs:[{title:"View Purchase Order",icon:"mdi-account-outline",tab:"account"}]}},mounted(){this.currentroute=M(),this.activeTab=O(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function Ye(e,s,u,i,n,o){const a=z("Viewpurchaseorders");return _(),g("div",null,[l(H,{modelValue:n.activeTab,"onUpdate:modelValue":s[0]||(s[0]=p=>n.activeTab=p),"show-arrows":""},{default:d(()=>[(_(!0),g(V,null,v(n.tabs,p=>(_(),S(E,{key:p.icon,value:p.tab},{default:d(()=>[l(A,{size:"20",start:"",icon:p.icon},null,8,["icon"]),h(" "+r(p.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),l(F),l(W,{modelValue:n.activeTab,"onUpdate:modelValue":s[1]||(s[1]=p=>n.activeTab=p),class:"mt-5 disable-tab-transition",touch:!1},{default:d(()=>[l(K,{value:"account"},{default:d(()=>[l(a)]),_:1})]),_:1},8,["modelValue"])])}const oa=U(Le,[["render",Ye]]);export{oa as default};
