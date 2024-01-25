import{Q as q,aI as z,aJ as M,G as Q,b9 as L,m as D,am as W,an as G,aG as j,L as Y,a as l,aO as H,W as J,ba as K,a5 as X,a9 as I,o as p,q as f,w as r,A as _,s as k,x as N,z as T,b as S,ae as O,k as t,ac as B,ad as y,aa as c,B as h,i as v,g as R,b4 as Z,af as $,r as tt,c as et}from"./index.b1fbed7e.js";import{a as w}from"./index.2bd8ddc8.js";import{V as U}from"./VForm.eea15508.js";import{V}from"./VSelect.1cd88ceb.js";import{V as at}from"./VTable.0a288a0f.js";import{V as lt,a as st,b as ot,c as nt}from"./VWindowItem.52a78352.js";import"./VChip.cc04ea8d.js";const rt={data(){return{url:"http://103.211.218.32/"}},methods:{getBrands(){return w.get(this.url+"bizkingz/services/api/brands/getBrands",{headers:{"Content-Type":"application/json",accept:"*/*"}}).then(a=>a.data)},getBrandproducts(a){return w.get(this.url+"bizkingz/services/api/brands/getBrandsProducts?brand_id="+a,{headers:{"Content-Type":"application/json",accept:"*/*"}}).then(e=>e.data)}}};const ct=q()({name:"VDialog",inheritAttrs:!1,props:{fullscreen:Boolean,origin:{type:String,default:"center center"},retainFocus:{type:Boolean,default:!0},scrollable:Boolean,modelValue:Boolean,...z({transition:{component:M}})},emits:{"update:modelValue":a=>!0},setup(a,e){let{attrs:d,slots:u}=e;const s=Q(a,"modelValue"),{scopeId:n}=L(),o=D();function i(m){var x,g;const F=m.relatedTarget,A=m.target;if(F!==A&&(x=o.value)!=null&&x.contentEl&&(g=o.value)!=null&&g.globalTop&&![document,o.value.contentEl].includes(A)&&!o.value.contentEl.contains(A)){const b=[...o.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(P=>!P.hasAttribute("disabled")&&!P.matches('[tabindex="-1"]'));if(!b.length)return;const C=b[0],E=b[b.length-1];F===C?E.focus():C.focus()}}return W&&G(()=>s.value&&a.retainFocus,m=>{m?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),G(s,async m=>{if(await j(),m){var x;(x=o.value.contentEl)==null||x.focus({preventScroll:!0})}else{var g;(g=o.value.activatorEl)==null||g.focus({preventScroll:!0})}}),Y(()=>l(K,J({modelValue:s.value,"onUpdate:modelValue":m=>s.value=m,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable}],transition:a.transition,scrollStrategy:"block",ref:o,"aria-role":"dialog","aria-modal":"true",activatorProps:{"aria-haspopup":"dialog","aria-expanded":String(s.value)},"z-index":2400},n,d),{activator:u.activator,default:()=>{var m;return l(H,{root:!0},{default:()=>[(m=u.default)==null?void 0:m.call(u)]})}})),X({},o)}}),dt={mixins:[rt],components:{},data(){return{quantityInput:0,AllBrandproducts:[],createdBy:"",Brandname:[],totals:{Quantity:0,TaxableAmmount:0,CGST:0,SGST:0,Ammount:0},today:new Date().toISOString().substr(0,10),selectedDate:null,landscape:!1,noTitle:!1,selectedPurchaseOrder:null,dialog:!1,headers:[{text:"Product Name",value:"sku_name"},{text:"HSN",value:"hsn_code"},{text:"MRP",value:"mrp"},{text:"Quantity",value:"quantity"},{text:"UOM",value:"uom"},{text:"Price/Unit",value:"calculatedPricePerUnit"},{text:"TaxableAmmount",value:"calculatedTaxableAmount"},{text:"CGST",value:"calculatedCGSTAmount"},{text:"SGST",value:"calculatedSGSTAmount"},{text:"Ammount",value:"calculateTotalamount"},{text:"Actions",value:"action"}]}},computed:{totalIndividualAmount(){return this.AllBrandproducts.reduce((a,e)=>{const d=parseFloat(e.mrp),u=parseFloat(e.quantity),s=d*u;return console.log("check",a+s),a+s},0)},savedamount(){const a=this.totalIndividualAmount-parseFloat(this.allAmmount);return console.log("totalsave",a),Math.max(0,a).toFixed(2)},allAmmount(){const a=this.calculateTotalamount.reduce((e,d)=>e+parseFloat(d),0);return parseFloat(a.toFixed(2))},allSGSTAmount(){const a=this.calculatedSGSTAmount.reduce((e,d)=>e+parseFloat(d),0);return parseFloat(a.toFixed(2))},allCGSTAmount(){const a=this.calculatedCGSTAmount.reduce((e,d)=>e+parseFloat(d),0);return parseFloat(a.toFixed(2))},allTaxableAmmount(){const a=this.calculatedTaxableAmount.reduce((e,d)=>e+parseFloat(d),0);return parseFloat(a.toFixed(2))},allQuantity(){return this.AllBrandproducts.reduce((a,e)=>a+parseFloat(e.quantity),0)},calculateTotalamount(){return this.AllBrandproducts.map((a,e)=>{const d=parseFloat(this.calculatedTaxableAmount[e]),u=parseFloat(this.calculatedCGSTAmount[e]),s=parseFloat(this.calculatedSGSTAmount[e]),n=d+u+s;return isNaN(n)?0:n.toFixed(2)})},calculatedSGSTAmount(){return this.AllBrandproducts.map((a,e)=>{const d=parseFloat(this.calculatedTaxableAmount[e]),u=parseFloat(a.sgst.replace("%","")),s=d*u/100;return isNaN(s)?0:s.toFixed(2)})},calculatedCGSTAmount(){return this.AllBrandproducts.map((a,e)=>{const d=parseFloat(this.calculatedTaxableAmount[e]),u=parseFloat(a.cgst.replace("%","")),s=d*u/100;return isNaN(s)?0:s.toFixed(2)})},calculatedPricePerUnit(){return this.AllBrandproducts.map(a=>{const e=parseFloat(a.mrp),d=parseFloat(a.total_given_margin.replace("%","")),u=e-e*d/100;return isNaN(u)?0:u.toFixed(2)})},calculatedTaxableAmount(){return this.AllBrandproducts.map((a,e)=>{const d=parseFloat(a.quantity),u=this.calculatedPricePerUnit[e],s=parseFloat(u);if(isNaN(s))return console.log(`Invalid value at index ${e}: ${u}`),0;const n=d*s;return isNaN(n)?0:n.toFixed(2)})},brandNames(){return this.Brandname.map(a=>a.brand_name)}},mounted(){this.getBrandsdata(),this.createdBy=localStorage.getItem("createdby")},methods:{handleBrandSelection(){console.log("Brand changed:",this.selectedPurchaseOrder);const a=this.Brandname.find(e=>e.brand_name===this.selectedPurchaseOrder);console.log("Select",a),a&&(this.selectedBrandId=a.brand_id,this.getBrandproducts(this.selectedBrandId).then(e=>{this.AllBrandproducts=e.data,console.log("BrandID",this.AllBrandproducts)}))},getBrandsdata(){this.getBrands().then(a=>{this.Brandname=a.data,console.log("check the response",this.Brandname)})},onDateChange(){console.log("Selected date:",this.selectedDate)},deleteRow(a){const e=this.AllBrandproducts.indexOf(a);e!==-1&&this.AllBrandproducts.splice(e,1)},openproductdialog(){console.log("check the dialog"),this.dialog=!0},closeDialog(){this.dialog=!1}}},ut={class:"text-center"},it={class:"text-center"},mt={class:"text-center"},ht={class:"text-center"},_t={class:"text-center"},pt={class:"text-center"},ft=t("br",null,null,-1),xt={class:"text-center"},gt={class:"text-center"},vt=t("br",null,null,-1),bt={class:"text-center"},At=t("br",null,null,-1),Tt={class:"text-center"},St=t("td",{class:"text-center"},"Total",-1),Vt=t("td",null,null,-1),Bt=t("td",null,null,-1),yt={class:"text-center"},Ft=t("td",null,null,-1),Ct=t("td",null,null,-1),Pt={class:"text-center"},Gt={class:"text-center"},kt={class:"text-center"},Nt={class:"text-center"},wt=t("td",null,null,-1),Ut=t("td",{class:"text-left"},"Tax Details",-1),Dt={colspan:"4",class:"text-right"},It=t("td",{colspan:"4",class:"text-left"},"Ammounts:",-1),Ot=t("td",{colspan:"4",class:"text-center"},null,-1),Rt=t("td",{class:"text-left"},"CGST",-1),Et={colspan:"4",class:"text-right"},qt=t("td",{colspan:"4",class:"text-left"},"SubTotal",-1),zt={colspan:"4",class:"text-center"},Mt=t("td",{class:"text-left"},"SGST",-1),Qt={colspan:"4",class:"text-right"},Lt=t("td",{colspan:"4",class:"text-left"},"Total",-1),Wt={colspan:"4",class:"text-center"},jt=t("td",{class:"text-left"},null,-1),Yt=t("td",{colspan:"4",class:"text-right"},null,-1),Ht=t("td",{colspan:"4",class:"text-left"},"Advance",-1),Jt={colspan:"4",class:"text-center"},Kt=t("td",{class:"text-left"},null,-1),Xt=t("td",{colspan:"4",class:"text-right"},null,-1),Zt=t("td",{colspan:"4",class:"text-left"},"Balance",-1),$t={colspan:"4",class:"text-center"},te=t("td",{class:"text-left"},null,-1),ee=t("td",{colspan:"4",class:"text-right"},null,-1),ae=t("td",{colspan:"4",class:"text-left"},"You Saved",-1),le={colspan:"4",class:"text-center"};function se(a,e,d,u,s,n){return p(),f("div",null,[l(T,null,{default:r(()=>[l(_,{cols:"12"},{default:r(()=>[l(k,{title:"Purchase Order",class:"mb-4"},{default:r(()=>[l(N,null,{default:r(()=>[l(U,{class:"mt-6"},{default:r(()=>[l(T,null,{default:r(()=>[l(_,{md:"6",cols:"12"},{default:r(()=>[l(V,{modelValue:s.selectedPurchaseOrder,"onUpdate:modelValue":[e[0]||(e[0]=o=>s.selectedPurchaseOrder=o),n.handleBrandSelection],label:"Brand or Manufacturer",items:n.brandNames},null,8,["modelValue","items","onUpdate:modelValue"])]),_:1}),l(_,{cols:"12",md:"6"},{default:r(()=>[l(S,{modelValue:s.createdBy,"onUpdate:modelValue":e[1]||(e[1]=o=>s.createdBy=o),label:"Created By"},null,8,["modelValue"])]),_:1}),l(_,{cols:"12",md:"6"},{default:r(()=>[l(S,{type:"date",label:"Date",min:s.today},null,8,["min"])]),_:1}),l(_,{md:"6",cols:"12"},{default:r(()=>[l(V,{label:"PO Status",items:["Draft","Created","Shared","Acknowledged","Received","Close"]})]),_:1}),l(O),l(_,{cols:"12"},{default:r(()=>[l(at,{headers:s.headers,items:s.AllBrandproducts},{default:r(()=>[t("thead",null,[t("tr",null,[(p(!0),f(B,null,y(s.headers,o=>(p(),f("th",{class:"text-center",key:o},c(o.text),1))),128))])]),t("tbody",null,[(p(!0),f(B,null,y(s.AllBrandproducts,(o,i)=>(p(),f("tr",{key:i},[t("td",ut,c(o.sku_name),1),t("td",it,c(o.hsn_code),1),t("td",mt," \u20B9"+c(o.mrp),1),t("td",ht,[l(S,{modelValue:o.quantity,"onUpdate:modelValue":m=>o.quantity=m,type:"number",style:{"min-width":"80px"}},null,8,["modelValue","onUpdate:modelValue"])]),t("td",_t,c(o.uom),1),t("td",pt,[h(" \u20B9 "+c(n.calculatedPricePerUnit[i])+" ",1),ft,h(" mar:"+c(o.total_given_margin),1)]),t("td",xt," \u20B9"+c(n.calculatedTaxableAmount[i]),1),t("td",gt,[h(" \u20B9"+c(n.calculatedCGSTAmount[i])+" ",1),vt,h(" mar:"+c(o.cgst),1)]),t("td",bt,[h(" \u20B9"+c(n.calculatedSGSTAmount[i])+" ",1),At,h(" mar:"+c(o.sgst),1)]),t("td",Tt," \u20B9"+c(n.calculateTotalamount[i]),1),t("td",null,[l(v,{icon:"",variant:"text",color:"error",class:"me-2",size:"small",onClick:m=>n.deleteRow(o)},{default:r(()=>[l(R,{icon:"mdi-minus-circle-outline",size:"24"})]),_:2},1032,["onClick"])])]))),128))]),t("tfoot",null,[t("tr",null,[St,Vt,Bt,t("td",yt," \u20B9"+c(n.allQuantity),1),Ft,Ct,t("td",Pt," \u20B9"+c(n.allTaxableAmmount),1),t("td",Gt," \u20B9"+c(n.allCGSTAmount),1),t("td",kt," \u20B9"+c(n.allSGSTAmount),1),t("td",Nt," \u20B9"+c(n.allAmmount),1),wt]),t("tr",null,[Ut,t("td",Dt,c(s.totals.tax),1),It,Ot]),t("tr",null,[Rt,t("td",Et,"\u20B9"+c(n.allCGSTAmount),1),qt,t("td",zt,"\u20B9"+c(n.allAmmount),1)]),t("tr",null,[Mt,t("td",Qt,"\u20B9"+c(n.allSGSTAmount),1),Lt,t("td",Wt,"\u20B9"+c(n.allAmmount),1)]),t("tr",null,[jt,Yt,Ht,t("td",Jt,"\u20B9"+c(s.totals.Quantity),1)]),t("tr",null,[Kt,Xt,Zt,t("td",$t,"\u20B9"+c(n.allAmmount),1)]),t("tr",null,[te,ee,ae,t("td",le,"\u20B9"+c(n.savedamount),1)])])]),_:1},8,["headers","items"])]),_:1}),l(_,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:r(()=>[l(v,null,{default:r(()=>[h("Save")]),_:1}),l(v,{color:"secondary",variant:"tonal",type:"reset"},{default:r(()=>[h(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(ct,{modelValue:s.dialog,"onUpdate:modelValue":e[2]||(e[2]=o=>s.dialog=o),"max-width":"600"},{default:r(()=>[l(k,{title:"Add Your Product"},{default:r(()=>[l(N,null,{default:r(()=>[l(U,{class:"mt-6"},{default:r(()=>[l(T,null,{default:r(()=>[l(_,{md:"6",cols:"12"},{default:r(()=>[l(V,{label:"Products",items:["Normal Eggs","Premium Eggs","Poori","Methi Chapathi","Ragi Chapathi"]})]),_:1}),l(_,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:r(()=>[l(v,null,{default:r(()=>[h("Add")]),_:1}),l(v,{color:"secondary",variant:"tonal",type:"reset",onClick:n.closeDialog},{default:r(()=>[h(" Close ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1}),l(Z)]),_:1})]),_:1},8,["modelValue"])])}const oe=I(dt,[["render",se]]),ne={components:{Addpurchaseorders:oe},data(){return{currentroute:"",activeTab:"",tabs:[{title:"Create Purchase Order",icon:"mdi-account-outline",tab:"account"}]}},mounted(){this.currentroute=$(),this.activeTab=D(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function re(a,e,d,u,s,n){const o=tt("Addpurchaseorders");return p(),f("div",null,[l(lt,{modelValue:s.activeTab,"onUpdate:modelValue":e[0]||(e[0]=i=>s.activeTab=i),"show-arrows":""},{default:r(()=>[(p(!0),f(B,null,y(s.tabs,i=>(p(),et(nt,{key:i.icon,value:i.tab},{default:r(()=>[l(R,{size:"20",start:"",icon:i.icon},null,8,["icon"]),h(" "+c(i.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),l(O),l(ot,{modelValue:s.activeTab,"onUpdate:modelValue":e[1]||(e[1]=i=>s.activeTab=i),class:"mt-5 disable-tab-transition",touch:!1},{default:r(()=>[l(st,{value:"account"},{default:r(()=>[l(o)]),_:1})]),_:1},8,["modelValue"])])}const pe=I(ne,[["render",re]]);export{pe as default};
