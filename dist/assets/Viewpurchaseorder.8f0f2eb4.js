import{_ as q,o as _,c as p,g as l,bh as N,b0 as V,f as v,w as n,i as m,j as k,k as w,b as x,l as A,a as t,F as f,s as b,t as r,n as g,v as S,m as y,u as F,b1 as U,b2 as I,x as O,e as z,r as R}from"./index.2c6dfeb2.js";import{s as M}from"./Services.1028c5df.js";import{V as Q,a as j}from"./VAlert.cb42169b.js";import{V as D}from"./VChip.4cba9e46.js";import{V as P}from"./VTable.201050f6.js";import{V as C}from"./VForm.e7c1a600.js";import{V as B}from"./VSelect.010b0c39.js";import{V as G}from"./VDialog.080f6594.js";import{V as H}from"./VSnackbar.bfa73c12.js";import{V as K,a as L,b as W,c as Y}from"./VWindowItem.58476b0e.js";import"./index.2bd8ddc8.js";import"./VCheckboxBtn.cb7b65b5.js";const E={mixins:[M],data(){return{loading:!0,Viewtotals:{total_po_amount:"",total_taxableammout:"",total_cgst:"",total_sgst:""},Statusrules:[e=>!!e||"Status Is Required"],quantityrules:[e=>!!e||"Quantity Is Required"],snackbar:!1,snackbarText:"",timeout:6e3,color:"",top:!1,bottom:!0,left:!1,right:!1,dialog2:!1,viewProduct:[],combinedProducts:[],totals:{Quantity:0,TaxableAmmount:0,CGST:0,SGST:0,Ammount:0},AllBrandproducts:[],selectedBrandId:"",Brandname:[],editProduct:[],VproductData:{brand_id:"",user_id:"",created_date:"",po_status:"",total_cgst:"",total_sgst:"",you_saved:"",po_id:"",po_number:"",sub_total:"",total_so_amount:"",total_quantity:"",products:[{brand_product_id:"",sku_name:"",hsn_code:"",mrp:"",quantity:"",uom:"",price_per_unit:"",taxable_amount:"",cgst:"",sgst:"",amount:"",total_give_margin:""}]},productData:{brand_id:"",user_id:"",created_date:"",po_status:"",total_cgst:"",total_sgst:"",you_saved:"",po_id:"",po_number:"","sub_total(taxable_amount_total)":"",total_so_amount:"",total_quantity:"",products:[{brand_product_id:"",sku_name:"",hsn_code:"",mrp:"",quantity:"",uom:"",price_per_unit:"",taxable_amount:"",cgst:"",sgst:"",amount:"",total_give_margin:""}]},dialog:!1,purchaseorders:[],userIds:"",userRoles:"",createdBy:"",headers:[{text:"Purchase Order",value:"po_number"},{text:"Order Date",value:"created_date"},{text:"Status",value:"po_status"},{text:"Order To",value:"brand_name"},{text:"Shipped To",value:"brand_name"},{text:"Total",value:"total_po_amount"},{text:"Action",value:"actions",sortable:!1}],headers2:[{text:"Product Name",value:"sku_name"},{text:"HSN",value:"hsn_code"},{text:"MRP",value:"mrp"},{text:"Quantity",value:"quantity"},{text:"UOM",value:"uom"},{text:"Price/Unit",value:"price_per_unit"},{text:"TaxableAmount",value:"taxable_amount"},{text:"CGST",value:"csgt"},{text:"SGST",value:"sgst"},{text:"Amount",value:"amount"}],headers3:[{text:"Product Name",value:"sku_name"},{text:"HSN",value:"hsn_code"},{text:"MRP",value:"mrp"},{text:"Quantity",value:"quantity"},{text:"UOM",value:"uom"},{text:"Price/Unit",value:"price_per_unit"},{text:"TaxableAmount",value:"taxable_amount"},{text:"CGST",value:"csgt"},{text:"SGST",value:"sgst"},{text:"Amount",value:"amount"}]}},computed:{totalIndividualAmount(){return this.AllBrandproducts.reduce((e,s)=>{const i=parseFloat(s.mrp),o=parseFloat(s.quantity);if(!isNaN(i)&&!isNaN(o)){const d=i*o;return e+d}return e},0)},savedamount(){const e=parseFloat(this.allAmmount),s=this.totalIndividualAmount-(isNaN(e)?0:e);return Math.max(0,s).toFixed(2)},allAmmount(){const e=this.calculateTotalamount.reduce((s,i)=>s+parseFloat(i),0);return parseFloat(e.toFixed(2))},allSGSTAmount(){const e=this.calculatedSGSTAmount.reduce((s,i)=>s+parseFloat(i),0);return parseFloat(e.toFixed(2))},allCGSTAmount(){const e=this.calculatedCGSTAmount.reduce((s,i)=>s+parseFloat(i),0);return parseFloat(e.toFixed(2))},allTaxableAmmount(){const e=this.calculatedTaxableAmount.reduce((s,i)=>s+parseFloat(i),0);return parseFloat(e.toFixed(2))},allQuantity(){const e=this.AllBrandproducts.reduce((s,i)=>{const o=parseFloat(i.quantity);return isNaN(o)?s:s+o},0);return isNaN(e)?0:e.toFixed(0)},calculateTotalamount(){return this.AllBrandproducts.map((e,s)=>{const i=parseFloat(this.calculatedTaxableAmount[s]),o=parseFloat(this.calculatedCGSTAmount[s]),d=parseFloat(this.calculatedSGSTAmount[s]),u=i+o+d;return isNaN(u)?0:u.toFixed(2)})},calculatedSGSTAmount(){return this.AllBrandproducts.map((e,s)=>{const i=parseFloat(this.calculatedTaxableAmount[s]),o=parseFloat(e.sgst.replace("%","")),d=i*o/100;return isNaN(d)?0:d.toFixed(2)})},calculatedCGSTAmount(){return this.AllBrandproducts.map((e,s)=>{const i=parseFloat(this.calculatedTaxableAmount[s]),o=parseFloat(e.cgst.replace("%","")),d=i*o/100;return isNaN(d)?0:d.toFixed(2)})},calculatedPricePerUnit(){return this.AllBrandproducts.map(e=>{const s=parseFloat(e.mrp),i=parseFloat(e.total_given_margin.replace("%","")),o=s-s*i/100;return isNaN(o)?0:o.toFixed(2)})},calculatedTaxableAmount(){return this.AllBrandproducts.map((e,s)=>{const i=parseFloat(e.quantity);console.log("quantty",i);const o=parseFloat(this.calculatedPricePerUnit[s]);console.log("rawpriceunit",o);const d=parseFloat(o);if(console.log("rawpriceunit",d),isNaN(i)||isNaN(d))return console.log(`Invalid quantity or price at index ${s}`),0;const u=i*d;return console.log("total tax",u),isNaN(u)?0:u.toFixed(2)})}},mounted(){this.createdBy=localStorage.getItem("createdby"),this.userIds=localStorage.getItem("userId"),this.userRoles=localStorage.getItem("userRole"),this.getPurchaseorderdetails(),this.getBrands(),setTimeout(()=>{this.loading=!1},4e3)},methods:{getPDFupdate(e){this.getPurchasePDF(e).then(s=>{console.log(s);const i=s.data.po_file;window.open(i,"_blank")})},DownloadPDF(e){if(console.log("check the id",e),e==null)this.snackbar=!0,this.snackbarText="PDF is not available",this.color="error";else{const s=e;window.open(s,"_blank")}},closedialog2(){this.dialog2=!1},validateForm(){this.$refs.purchaseOrderForm.validate().then(e=>{console.log("form valid",e.valid),e.valid==!0?this.allQuantity>=1?this.saveProducteditData():(this.snackbar=!0,this.snackbarText="Please give Quantities",this.color="error"):(this.snackbar=!0,this.snackbarText="Please give all mandatory fields",this.color="error")})},deleteRow(e){const s=this.AllBrandproducts.indexOf(e);s!==-1&&this.AllBrandproducts.splice(s,1)},saveProducteditData(){const e={Draft:"1",Created:"2",Shared:"3",Acknowledged:"4"},s=this.editProduct.map(o=>o.brand_product_id),i={brand_id:this.selectedBrandId,user_id:this.userIds,created_date:this.productData.created_date,po_status:e[this.productData.po_status],total_cgst:`${this.allCGSTAmount}`,total_sgst:`${this.allSGSTAmount}`,you_saved:`${this.savedamount}`,sub_total:`${this.allTaxableAmmount}`,total_po_amount:`${this.allAmmount}`,total_quantity:`${this.allQuantity}`,po_id:this.productData.po_id,po_number:this.productData.po_number,products:this.AllBrandproducts.filter(o=>o.quantity>0).map((o,d)=>({brand_product_id:o.brand_product_id,sku_name:o.sku_name,hsn_code:o.hsn_code,mrp:o.mrp,quantity:`${o.quantity}`,uom:o.uom,price_per_unit:`${this.calculatedPricePerUnit[d]}`,taxable_amount:`${this.calculatedTaxableAmount[d]}`,csgt:`${this.calculatedCGSTAmount[d]}`,sgst:`${this.calculatedSGSTAmount[d]}`,amount:`${this.calculateTotalamount[d]}`,sgst_percentage:o.sgst.includes("%")?`${o.sgst}`:`${o.sgst}%`,cgst_percentage:o.cgst.includes("%")?`${o.cgst}`:`${o.cgst}%`,total_give_margin:o.total_given_margin})).concat(this.editProduct.filter(o=>!s.includes(o.brand_product_id)).map(o=>({brand_product_id:o.brand_product_id,sku_name:o.sku_name,hsn_code:o.hsn_code,mrp:o.mrp,quantity:o.quantity,uom:o.uom,price_per_unit:o.price_per_unit,taxable_amount:o.taxable_amount,csgt:o.cgst,sgst:o.sgst,amount:o.amount,total_give_margin:o.total_give_margin})))};console.log("check the post data",i),this.postupdatePurchaseorder(i).then(o=>{console.log("check the response",o),console.log("check the response",o.status),o.status==1?(this.snackbar=!0,this.color="success",this.formData={},this.snackbarText=o.message,this.getPurchaseorderdetails(),this.dialog=!1):(this.snackbar=!0,this.color="error")})},preventPaste(e){const i=(e.clipboardData||window.clipboardData).getData("text");/^[0-9]+$/.test(i)||e.preventDefault()},preventDecimal(e){(e.key==="."||e.key===","||e.key==="+"||e.key==="-"||e.keyCode===189||e.keyCode===109)&&e.preventDefault()},colorTGMmargin(e){return e?{color:"success"}:{color:"error"}},colorSGSTmargin(e){return e?{color:"success"}:{color:"error"}},colorCGSTmargin(e){return e?{color:"success"}:{color:"error"}},getBrandsdata(){this.getBrands().then(e=>{this.Brandname=e.data})},viewrow(e){console.log("check the dialog",e),this.dialog2=!0,this.VproductData.brand_name=e.brand_name,this.VproductData.created_date=e.created_date,this.VproductData.po_status=e.po_status,this.VproductData.po_number=e.po_number,this.VproductData.po_id=e.po_id,this.VproductData.total_po_amount=e.total_po_amount,this.VproductData.total_cgst=e.total_cgst,this.VproductData.total_sgst=e.total_sgst,this.VproductData.you_saved=e.you_saved,this.VproductData.total_quantity=e.total_quantity,this.VproductData.sub_total=e.sub_total,this.viewProduct=e.products},editrow(e){console.log("check the dialog",e),this.dialog=!0,this.productData.brand_name=e.brand_name,this.productData.created_date=e.created_date,this.productData.po_status=e.po_status,this.productData.po_number=e.po_number,this.productData.po_id=e.po_id,this.editProduct=e.products,this.productData.brand_name===e.brand_name&&(this.selectedBrandId=e.brand_id,this.getBrandproducts(this.selectedBrandId).then(s=>{this.AllBrandproducts=s.data,console.log("Branddetails",this.AllBrandproducts),console.log("text",this.AllBrandproducts),this.AllBrandproducts=this.AllBrandproducts.map(i=>{const o=this.editProduct.find(d=>d.brand_product_id==i.brand_product_id);return{...i,quantity:o?o.quantity:0}}),console.log("Filtered editProduct",this.AllBrandproducts)}))},closeDialog(){this.dialog=!1},getPurchaseorderdetails(){this.getPurchaseorder(this.userIds,this.userRoles).then(e=>{console.log("check the view purchase order",e),this.purchaseorders=e.data})},colorPOstatus(e){return e=="Created"?{color:"primary"}:e=="Draft"?{color:"success"}:e=="Acknowledged"?{color:"warning"}:{color:"info"}}}},c=e=>(U("data-v-d15cf7a7"),e=e(),I(),e),J={key:0,class:"loading-container"},X=c(()=>t("p",{class:"mb-0"}," The system is not retrieving the Purchase Orders. Please ensure that you have applied for Purchase Orders !",-1)),Z={class:"text-center"},$={class:"text-center"},tt={class:"text-center"},et={class:"text-center"},at={class:"text-center"},st={class:"text-center"},lt={class:"text-center",style:{display:"flex","justify-content":"center","align-items":"center"}},ot={class:"text-center"},rt={class:"text-center"},nt={class:"text-center"},dt={class:"text-center"},ct={class:"text-center"},ut={class:"text-center"},it=c(()=>t("br",null,null,-1)),_t={class:"text-center"},ht={class:"text-center"},pt=c(()=>t("br",null,null,-1)),mt={class:"text-center"},xt=c(()=>t("br",null,null,-1)),gt={class:"text-center"},ft=c(()=>t("td",{class:"text-center"},"Total",-1)),bt=c(()=>t("td",null,null,-1)),Vt=c(()=>t("td",null,null,-1)),yt={class:"text-center"},vt=c(()=>t("td",null,null,-1)),Tt=c(()=>t("td",null,null,-1)),At={class:"text-center"},St={class:"text-center"},Dt={class:"text-center"},kt={class:"text-center"},wt=c(()=>t("td",null,null,-1)),Pt=c(()=>t("tr",null,[t("td",{class:"text-left",style:{"font-weight":"Bold"}}," Tax Details: "),t("td",{colspan:"4",class:"text-right"}),t("td",{colspan:"4",class:"text-left",style:{"font-weight":"Bold"}}," Amounts: "),t("td",{colspan:"4",class:"text-center"})],-1)),Bt=c(()=>t("td",{class:"text-left"},"CGST",-1)),Ft={colspan:"4",class:"text-right"},Ct=c(()=>t("td",{colspan:"4",class:"text-left"}," SubTotal ",-1)),Gt={colspan:"4",class:"text-center"},qt=c(()=>t("td",{class:"text-left"},"SGST",-1)),Nt={colspan:"4",class:"text-right"},Ut=c(()=>t("td",{colspan:"4",class:"text-left"}," Total ",-1)),It={colspan:"4",class:"text-center"},Ot=c(()=>t("td",{class:"text-left"},null,-1)),zt=c(()=>t("td",{colspan:"4",class:"text-right"},null,-1)),Rt=c(()=>t("td",{colspan:"4",class:"text-left"}," Advance ",-1)),Mt={colspan:"4",class:"text-center"},Qt=c(()=>t("td",{class:"text-left"},null,-1)),jt=c(()=>t("td",{colspan:"4",class:"text-right"},null,-1)),Ht=c(()=>t("td",{colspan:"4",class:"text-left"}," Balance ",-1)),Kt={colspan:"4",class:"text-center"},Lt=c(()=>t("td",{class:"text-left"},null,-1)),Wt=c(()=>t("td",{colspan:"4",class:"text-right"},null,-1)),Yt=c(()=>t("td",{colspan:"4",class:"text-left"}," You Saved ",-1)),Et={colspan:"4",class:"text-center"},Jt={class:"text-center"},Xt={class:"text-center"},Zt={class:"text-center"},$t={class:"text-center"},te={class:"text-center"},ee={class:"text-center"},ae={class:"text-center"},se={class:"text-center"},le={class:"text-center"},oe={class:"text-center"},re=c(()=>t("td",{class:"text-center"},"Total",-1)),ne=c(()=>t("td",null,null,-1)),de=c(()=>t("td",null,null,-1)),ce={class:"text-center"},ue=c(()=>t("td",null,null,-1)),ie=c(()=>t("td",null,null,-1)),_e={class:"text-center"},he={class:"text-center"},pe={class:"text-center"},me={class:"text-center"},xe=c(()=>t("td",null,null,-1)),ge=c(()=>t("tr",null,[t("td",{class:"text-left",style:{"font-weight":"Bold"}}," Tax Details: "),t("td",{colspan:"4",class:"text-right"}),t("td",{colspan:"4",class:"text-left",style:{"font-weight":"Bold"}}," Amounts: "),t("td",{colspan:"4",class:"text-center"})],-1)),fe=c(()=>t("td",{class:"text-left"},"CGST",-1)),be={colspan:"4",class:"text-right"},Ve=c(()=>t("td",{colspan:"4",class:"text-left"}," SubTotal ",-1)),ye={colspan:"4",class:"text-center"},ve=c(()=>t("td",{class:"text-left"},"SGST",-1)),Te={colspan:"4",class:"text-right"},Ae=c(()=>t("td",{colspan:"4",class:"text-left"}," Total ",-1)),Se={colspan:"4",class:"text-center"},De=c(()=>t("td",{class:"text-left"},null,-1)),ke=c(()=>t("td",{colspan:"4",class:"text-right"},null,-1)),we=c(()=>t("td",{colspan:"4",class:"text-left"}," Advance ",-1)),Pe={colspan:"4",class:"text-center"},Be=c(()=>t("td",{class:"text-left"},null,-1)),Fe=c(()=>t("td",{colspan:"4",class:"text-right"},null,-1)),Ce=c(()=>t("td",{colspan:"4",class:"text-left"}," Balance ",-1)),Ge={colspan:"4",class:"text-center"},qe=c(()=>t("td",{class:"text-left"},null,-1)),Ne=c(()=>t("td",{colspan:"4",class:"text-right"},null,-1)),Ue=c(()=>t("td",{colspan:"4",class:"text-left"}," You Saved ",-1)),Ie={colspan:"4",class:"text-center"};function Oe(e,s,i,o,d,u){return _(),p("div",null,[d.loading?(_(),p("div",J,[l(N,{height:"5",color:"primary",indeterminate:"",class:"custom-loader","full-width":""})])):V("",!0),this.purchaseorders==null?(_(),v(A,{key:1},{default:n(()=>[l(m,{cols:"12"},{default:n(()=>[l(k,{title:"Purchase Order View"},{default:n(()=>[l(w,null,{default:n(()=>[l(Q,{color:"warning",variant:"tonal",class:"mb-4",border:"top"},{default:n(()=>[l(j,{class:"mb-1"},{default:n(()=>[x(" Are you sure you gave Purchase Orders? ")]),_:1}),X]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):V("",!0),this.purchaseorders!=null?(_(),v(P,{key:2,headers:d.headers,items:this.purchaseorders,"item-key":"dessert",class:"table-rounded",height:"550","fixed-header":""},{default:n(()=>[t("thead",null,[t("tr",null,[(_(!0),p(f,null,b(d.headers,a=>(_(),p("th",{class:"text-center",key:a},r(a.text),1))),128))])]),t("tbody",null,[(_(!0),p(f,null,b(this.purchaseorders,(a,h)=>(_(),p("tr",{key:h},[t("td",Z,r(a.po_number),1),t("td",$,r(a.created_date),1),t("td",tt,[l(D,{color:u.colorPOstatus(a.po_status).color,class:"font-weight-medium",size:"small"},{default:n(()=>[x(r(a.po_status),1)]),_:2},1032,["color"])]),t("td",et,r(a.brand_name),1),t("td",at,r(a.brand_name),1),t("td",st,"\u20B9"+r(a.total_po_amount),1),t("td",lt,[a.po_status!="Acknowledged"&&a.po_status!="Shared"?(_(),v(g,{key:0,icon:"",variant:"text",color:"default",class:"me-2",size:"x-small",onClick:T=>u.editrow(a)},{default:n(()=>[l(S,{color:"warning",icon:"ri-pencil-line",size:"22"})]),_:2},1032,["onClick"])):V("",!0),a.po_status=="Acknowledged"||a.po_status=="Shared"?(_(),v(g,{key:1,icon:"",variant:"text",color:"default",class:"me-2",size:"x-small",onClick:T=>u.viewrow(a)},{default:n(()=>[l(S,{color:"success",icon:"basil:eye-outline",size:"22"})]),_:2},1032,["onClick"])):V("",!0),a.po_status=="Acknowledged"||a.po_status=="Shared"?(_(),v(g,{key:2,icon:"",variant:"text",color:"default",class:"me-2",size:"x-small",onClick:T=>u.getPDFupdate(a.po_id)},{default:n(()=>[l(S,{color:"error",icon:"iwwa:file-pdf",size:"26"})]),_:2},1032,["onClick"])):V("",!0)])]))),128))])]),_:1},8,["headers","items"])):V("",!0),l(G,{modelValue:d.dialog,"onUpdate:modelValue":s[5]||(s[5]=a=>d.dialog=a),"max-width":"1000"},{default:n(()=>[l(k,{title:"Purchase Order",class:"mb-2"},{default:n(()=>[l(w,null,{default:n(()=>[l(A,null,{default:n(()=>[l(m,{cols:"12"},{default:n(()=>[l(C,{class:"mt-6",ref:"purchaseOrderForm"},{default:n(()=>[l(A,null,{default:n(()=>[l(m,{md:"6",cols:"12"},{default:n(()=>[l(y,{modelValue:this.productData.brand_name,"onUpdate:modelValue":s[0]||(s[0]=a=>this.productData.brand_name=a),label:"Brand or Manufacturer",readonly:""},null,8,["modelValue"])]),_:1}),l(m,{cols:"12",md:"6"},{default:n(()=>[l(y,{modelValue:this.createdBy,"onUpdate:modelValue":s[1]||(s[1]=a=>this.createdBy=a),label:"Created By",readonly:""},null,8,["modelValue"])]),_:1}),l(m,{cols:"12",md:"6"},{default:n(()=>[l(y,{modelValue:this.productData.created_date,"onUpdate:modelValue":s[2]||(s[2]=a=>this.productData.created_date=a),type:"date",label:"Date",readonly:""},null,8,["modelValue"])]),_:1}),l(m,{md:"6",cols:"12"},{default:n(()=>[l(B,{modelValue:this.productData.po_status,"onUpdate:modelValue":s[3]||(s[3]=a=>this.productData.po_status=a),label:"PO Status",items:["Draft","Created","Shared","Acknowledged"],rules:d.Statusrules},null,8,["modelValue","rules"])]),_:1}),l(F),l(m,{cols:"12"},{default:n(()=>[l(P,{headers:d.headers2,items:d.AllBrandproducts},{default:n(()=>[t("thead",null,[t("tr",null,[(_(!0),p(f,null,b(d.headers2,a=>(_(),p("th",{class:"text-center",key:a},r(a.text),1))),128))])]),t("tbody",null,[(_(!0),p(f,null,b(this.AllBrandproducts,(a,h)=>(_(),p("tr",{key:h},[t("td",ot,r(a.sku_name),1),t("td",rt,r(a.hsn_code),1),t("td",nt,"\u20B9"+r(a.mrp),1),t("td",dt,[l(y,{onKeydown:u.preventDecimal,onPaste:u.preventPaste,type:"number",min:"0",max:"20000",modelValue:a.quantity,"onUpdate:modelValue":T=>a.quantity=T,style:{"min-width":"80px"}},null,8,["onKeydown","onPaste","modelValue","onUpdate:modelValue"])]),t("td",ct,r(a.uom),1),t("td",ut,[x(" \u20B9 "+r(u.calculatedPricePerUnit[h])+" ",1),it,l(D,{color:u.colorTGMmargin(a.total_given_margin).color,class:"font-weight-medium",size:"small"},{default:n(()=>[x(" ("+r(a.total_given_margin)+") ",1)]),_:2},1032,["color"])]),t("td",_t,"\u20B9"+r(u.calculatedTaxableAmount[h]),1),t("td",ht,[x(" \u20B9"+r(u.calculatedCGSTAmount[h])+" ",1),pt,l(D,{color:u.colorCGSTmargin(a.cgst).color,class:"font-weight-medium",size:"small"},{default:n(()=>[x(" ("+r(a.cgst)+") ",1)]),_:2},1032,["color"])]),t("td",mt,[x(" \u20B9"+r(u.calculatedSGSTAmount[h])+" ",1),xt,l(D,{color:u.colorSGSTmargin(a.sgst).color,class:"font-weight-medium",size:"small"},{default:n(()=>[x(" ("+r(a.sgst)+") ",1)]),_:2},1032,["color"])]),t("td",gt,"\u20B9"+r(u.calculateTotalamount[h]),1),t("td",null,[l(g,{icon:"",variant:"text",color:"error",class:"me-2",size:"small",onClick:T=>u.deleteRow(a)},{default:n(()=>[l(S,{icon:"mdi-minus-circle-outline",size:"24"})]),_:2},1032,["onClick"])])]))),128))]),t("tfoot",null,[t("tr",null,[ft,bt,Vt,t("td",yt,r(u.allQuantity),1),vt,Tt,t("td",At,"\u20B9"+r(u.allTaxableAmmount),1),t("td",St,"\u20B9"+r(u.allCGSTAmount),1),t("td",Dt,"\u20B9"+r(u.allSGSTAmount),1),t("td",kt,"\u20B9"+r(u.allAmmount),1),wt]),Pt,t("tr",null,[Bt,t("td",Ft," \u20B9"+r(u.allCGSTAmount),1),Ct,t("td",Gt," \u20B9"+r(u.allAmmount),1)]),t("tr",null,[qt,t("td",Nt," \u20B9"+r(u.allSGSTAmount),1),Ut,t("td",It," \u20B9"+r(u.allAmmount),1)]),t("tr",null,[Ot,zt,Rt,t("td",Mt," \u20B9"+r(d.totals.Quantity),1)]),t("tr",null,[Qt,jt,Ht,t("td",Kt," \u20B9"+r(u.allAmmount),1)]),t("tr",null,[Lt,Wt,Yt,t("td",Et," \u20B9"+r(u.savedamount),1)])])]),_:1},8,["headers","items"])]),_:1}),l(m,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:n(()=>[l(g,{onClick:u.validateForm},{default:n(()=>[x("Save")]),_:1},8,["onClick"]),l(g,{color:"secondary",variant:"tonal",onClick:s[4]||(s[4]=a=>u.closeDialog())},{default:n(()=>[x(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(G,{modelValue:d.dialog2,"onUpdate:modelValue":s[11]||(s[11]=a=>d.dialog2=a),"max-width":"1000"},{default:n(()=>[l(k,{title:"Purchase Order",class:"mb-2"},{default:n(()=>[l(w,null,{default:n(()=>[l(A,null,{default:n(()=>[l(m,{cols:"12"},{default:n(()=>[l(C,{class:"mt-6"},{default:n(()=>[l(A,null,{default:n(()=>[l(m,{md:"6",cols:"12"},{default:n(()=>[l(B,{modelValue:this.VproductData.brand_name,"onUpdate:modelValue":s[6]||(s[6]=a=>this.VproductData.brand_name=a),label:"Brand or Manufacturer",readonly:""},null,8,["modelValue"])]),_:1}),l(m,{cols:"12",md:"6"},{default:n(()=>[l(y,{modelValue:this.createdBy,"onUpdate:modelValue":s[7]||(s[7]=a=>this.createdBy=a),label:"Created By",readonly:""},null,8,["modelValue"])]),_:1}),l(m,{cols:"12",md:"6"},{default:n(()=>[l(y,{modelValue:this.VproductData.created_date,"onUpdate:modelValue":s[8]||(s[8]=a=>this.VproductData.created_date=a),type:"date",label:"Date",readonly:""},null,8,["modelValue"])]),_:1}),l(m,{md:"6",cols:"12"},{default:n(()=>[l(B,{modelValue:this.VproductData.po_status,"onUpdate:modelValue":s[9]||(s[9]=a=>this.VproductData.po_status=a),label:"PO Status",readonly:""},null,8,["modelValue"])]),_:1}),l(F),l(m,{cols:"12"},{default:n(()=>[l(P,{headers:d.headers3,items:d.viewProduct},{default:n(()=>[t("thead",null,[t("tr",null,[(_(!0),p(f,null,b(d.headers3,a=>(_(),p("th",{class:"text-center",key:a},r(a.text),1))),128))])]),t("tbody",null,[(_(!0),p(f,null,b(this.viewProduct,(a,h)=>(_(),p("tr",{key:h},[t("td",Jt,r(a.sku_name),1),t("td",Xt,r(a.hsn_code),1),t("td",Zt,r(a.mrp),1),t("td",$t,r(a.quantity),1),t("td",te,r(a.uom),1),t("td",ee,r(a.price_per_unit),1),t("td",ae,r(a.taxable_amount),1),t("td",se,r(a.csgt),1),t("td",le,r(a.sgst),1),t("td",oe,r(a.amount),1)]))),128))]),t("tfoot",null,[t("tr",null,[re,ne,de,t("td",ce,r(this.VproductData.total_quantity),1),ue,ie,t("td",_e,"\u20B9"+r(this.VproductData.sub_total),1),t("td",he,"\u20B9"+r(this.VproductData.total_cgst),1),t("td",pe,"\u20B9"+r(this.VproductData.total_sgst),1),t("td",me,"\u20B9"+r(this.VproductData.total_po_amount),1),xe]),ge,t("tr",null,[fe,t("td",be," \u20B9"+r(this.VproductData.total_cgst),1),Ve,t("td",ye," \u20B9"+r(this.VproductData.total_po_amount),1)]),t("tr",null,[ve,t("td",Te," \u20B9"+r(this.VproductData.total_sgst),1),Ae,t("td",Se," \u20B9"+r(this.VproductData.total_po_amount),1)]),t("tr",null,[De,ke,we,t("td",Pe," \u20B9"+r(d.totals.Quantity),1)]),t("tr",null,[Be,Fe,Ce,t("td",Ge," \u20B9"+r(this.VproductData.total_po_amount),1)]),t("tr",null,[qe,Ne,Ue,t("td",Ie," \u20B9"+r(this.VproductData.you_saved),1)])])]),_:1},8,["headers","items"])]),_:1}),l(m,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:n(()=>[l(g,{color:"primary",onClick:s[10]||(s[10]=a=>u.closedialog2())},{default:n(()=>[x(" Close ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(H,{modelValue:d.snackbar,"onUpdate:modelValue":s[12]||(s[12]=a=>d.snackbar=a),timeout:2e3,color:d.color},{default:n(()=>[x(r(d.snackbarText),1)]),_:1},8,["modelValue","color"])])}const ze=q(E,[["render",Oe],["__scopeId","data-v-d15cf7a7"]]),Re={components:{Viewpurchaseorders:ze},data(){return{currentroute:"",activeTab:"",tabs:[{title:"View Purchase Order",icon:"mdi-account-outline",tab:"account"}]}},mounted(){this.currentroute=O(),this.activeTab=z(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function Me(e,s,i,o,d,u){const a=R("Viewpurchaseorders");return _(),p("div",null,[l(K,{modelValue:d.activeTab,"onUpdate:modelValue":s[0]||(s[0]=h=>d.activeTab=h),"show-arrows":""},{default:n(()=>[(_(!0),p(f,null,b(d.tabs,h=>(_(),v(Y,{key:h.icon,value:h.tab},{default:n(()=>[l(S,{size:"20",start:"",icon:h.icon},null,8,["icon"]),x(" "+r(h.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),l(F),l(W,{modelValue:d.activeTab,"onUpdate:modelValue":s[1]||(s[1]=h=>d.activeTab=h),class:"mt-5 disable-tab-transition",touch:!1},{default:n(()=>[l(L,{value:"account"},{default:n(()=>[l(a)]),_:1})]),_:1},8,["modelValue"])])}const ta=q(Re,[["render",Me]]);export{ta as default};
