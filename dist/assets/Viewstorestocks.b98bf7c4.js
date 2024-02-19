import{_ as b,o as d,c as i,g as t,w as s,i as u,j as g,k as M,l as V,s as k,a as n,F as f,q as p,t as c,m as _,b as m,v as T,e as S,r as w,f as U,u as y}from"./index.744fe626.js";import{s as C}from"./Services.a0afbe6c.js";import{V as N}from"./VForm.d00ea3fc.js";import{V as B}from"./VSelect.38023649.js";import{V as F}from"./VTextField.8cedf6ef.js";import{V as I}from"./VTable.7d60ad86.js";import{V as D}from"./VSnackbar.28c38264.js";import{V as O,a as R,b as E,c as P}from"./VWindowItem.0ec40339.js";import"./index.2bd8ddc8.js";import"./VCheckboxBtn.fa5cd1d1.js";import"./VChip.29b25c88.js";const W={mixins:[C],components:{},data(){return{snackbar:!1,snackbarText:"",timeout:6e3,color:"",top:!1,bottom:!0,left:!1,right:!1,marchantstocksdata:[],selectedmerchants:null,merchantName:[],stockUpdatedate:null,headers:[{text:"Brand Name",value:"brand_name"},{text:"SKU",value:"sku_name"},{text:"UOM",value:"uom"},{text:"Physical SOH",value:"physical_soh"},{text:"Closing",value:"closing"},{text:"Opening",value:"opening"}]}},computed:{merchants(){return this.merchantName.map(l=>l.merchant_uid)}},mounted(){this.getMerchantdetails()},methods:{handleMerchantSelection(){console.log("Selected Merchant:",this.selectedmerchants);const l=this.merchantName.find(e=>e.merchant_uid===this.selectedmerchants);console.log("Selected Brand Details:",l),l&&(this.selectedMerchantId=l.merchant_id,console.log("Selected Merchant ID:",this.selectedMerchantId),this.getMerchantproductsstock(this.selectedMerchantId).then(e=>{console.log("Merchant Products:",e),e.status==1?(this.stockUpdatedate=e.data.stock_updated_date,this.marchantstocksdata=e.data.products):(this.marchantstocksdata=[],this.snackbar=!0,this.snackbarText=e.message,this.color="on-background")}).catch(e=>{console.error("Error fetching merchant products:",e)}))},getMerchantdetails(){this.getMerchants().then(l=>{this.merchantName=l.data.data,console.log("mer",this.merchantName)})}}},j={class:"text-center"},q={class:"text-center"},z={class:"text-center"},H={class:"text-center"},K={class:"text-center"},L={class:"text-center"};function A(l,e,v,x,o,h){return d(),i("div",null,[t(V,null,{default:s(()=>[t(u,{cols:"12"},{default:s(()=>[t(g,{title:"Merchants",class:"mb-4"},{default:s(()=>[t(M,null,{default:s(()=>[t(N,{class:"mt-6",ref:"purchaseOrderForm"},{default:s(()=>[t(V,null,{default:s(()=>[t(u,{md:"6",cols:"12"},{default:s(()=>[t(B,{modelValue:o.selectedmerchants,"onUpdate:modelValue":[e[0]||(e[0]=a=>o.selectedmerchants=a),h.handleMerchantSelection],label:"Store or Merchant",items:h.merchants},null,8,["modelValue","items","onUpdate:modelValue"])]),_:1}),t(u,{cols:"12",md:"6"},{default:s(()=>[t(F,{modelValue:this.stockUpdatedate,"onUpdate:modelValue":e[1]||(e[1]=a=>this.stockUpdatedate=a),label:"Stock Updated Date",readonly:""},null,8,["modelValue"])]),_:1}),t(k),t(u,{cols:"12"},{default:s(()=>[t(I,{headers:o.headers,items:this.marchantstocksdata},{default:s(()=>[n("thead",null,[n("tr",null,[(d(!0),i(f,null,p(o.headers,a=>(d(),i("th",{class:"text-center",key:a},c(a.text),1))),128))])]),n("tbody",null,[(d(!0),i(f,null,p(this.marchantstocksdata,(a,r)=>(d(),i("tr",{key:r},[n("td",j,c(a.brand_name),1),n("td",q,c(a.sku_name),1),n("td",z,c(a.uom),1),n("td",H,c(a.physical_soh),1),n("td",K,c(a.closing),1),n("td",L,c(a.opening),1)]))),128))])]),_:1},8,["headers","items"])]),_:1}),t(u,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:s(()=>[t(_,{onClick:l.validateForm},{default:s(()=>[m("Save")]),_:1},8,["onClick"]),t(_,{color:"secondary",variant:"tonal",onClick:e[2]||(e[2]=a=>l.resetdetails())},{default:s(()=>[m(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1}),t(D,{modelValue:o.snackbar,"onUpdate:modelValue":e[3]||(e[3]=a=>o.snackbar=a),timeout:3500,color:o.color},{default:s(()=>[m(c(o.snackbarText),1)]),_:1},8,["modelValue","color"])])}const G=b(W,[["render",A]]),J={components:{Viewstore:G},data(){return{currentroute:"",activeTab:"",tabs:[{title:"View Store Stocks",icon:"mdi-account-outline",tab:"account"}]}},mounted(){this.currentroute=T(),this.activeTab=S(this.currentroute.params.tab),this.activeTab=this.tabs[0].tab}};function Q(l,e,v,x,o,h){const a=w("Viewstore");return d(),i("div",null,[t(O,{modelValue:o.activeTab,"onUpdate:modelValue":e[0]||(e[0]=r=>o.activeTab=r),"show-arrows":""},{default:s(()=>[(d(!0),i(f,null,p(o.tabs,r=>(d(),U(P,{key:r.icon,value:r.tab},{default:s(()=>[t(y,{size:"20",start:"",icon:r.icon},null,8,["icon"]),m(" "+c(r.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),t(k),t(E,{modelValue:o.activeTab,"onUpdate:modelValue":e[1]||(e[1]=r=>o.activeTab=r),class:"mt-5 disable-tab-transition",touch:!1},{default:s(()=>[t(R,{value:"account"},{default:s(()=>[t(a)]),_:1})]),_:1},8,["modelValue"])])}const ne=b(J,[["render",Q]]);export{ne as default};
