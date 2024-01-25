import{a2 as y,at as S,X as T,b3 as B,ak as j,E as l,e as A,K as C,g as i,S as I,b4 as P,aj as N,o as p,c as v,a as h,F as $,s as D,w as c,b,n as E,k as F,v as L,t as M,j as R}from"./index.7cf94746.js";const U=y()({name:"VTooltip",inheritAttrs:!1,props:{id:String,modelValue:Boolean,text:String,location:{type:String,default:"end"},origin:{type:String,default:"auto"},...S({transition:!1})},emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:r,slots:o}=s;const t=T(e,"modelValue"),{scopeId:V}=B(),k=j(),d=l(()=>e.id||`v-tooltip-${k}`),u=A(),x=l(()=>e.location.split(" ").length>1?e.location:e.location+" center"),w=l(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),_=l(()=>e.transition?e.transition:t.value?"scale-transition":"fade-transition");return C(()=>i(P,I({modelValue:t.value,"onUpdate:modelValue":a=>t.value=a,ref:u,class:["v-tooltip"],id:d.value,transition:_.value,absolute:!0,locationStrategy:"connected",scrollStrategy:"reposition",location:x.value,origin:w.value,"min-width":0,offset:10,scrim:!1,persistent:!0,"open-on-click":!1,"open-on-hover":!0,"close-on-back":!1,role:"tooltip",eager:!0,activatorProps:{"aria-describedby":d.value}},V,r),{activator:o.activator,default:function(){var g;for(var a,m=arguments.length,f=new Array(m),n=0;n<m;n++)f[n]=arguments[n];return(g=(a=o.default)==null?void 0:a.call(o,...f))!=null?g:e.text}})),N({},u)}}),z={class:"d-flex align-center flex-wrap"},K={class:"text-center"},X={__name:"icons",setup(e){const s=["mdi-ab-testing","mdi-abacus","mdi-abjad-arabic","mdi-abjad-hebrew","mdi-abugida-devanagari","mdi-abugida-thai","mdi-access-point","mdi-access-point-check","mdi-access-point-minus","mdi-access-point-network","mdi-access-point-network-off","mdi-access-point-off","mdi-access-point-plus","mdi-access-point-remove","mdi-account-alert-outline","mdi-account-arrow-left-outline","mdi-account-arrow-right-outline","mdi-account-box-multiple-outline","mdi-account-box-outline","mdi-account-cancel-outline","mdi-account-cash-outline","mdi-account-check-outline","mdi-account-child-outline","mdi-account-circle-outline","mdi-account-clock-outline","mdi-account-cog-outline","mdi-account-details-outline","mdi-alarm-light-outline","mdi-alert-box-outline","mdi-alert-circle-check-outline","mdi-alert-decagram-outline","mdi-alert-minus-outline","mdi-alert-outline","mdi-alert-plus-outline","mdi-check-outline","mdi-clipboard-outline","mdi-clipboard-play-outline","mdi-close-outline","mdi-cloud-check-outline","mdi-cloud-download-outline","mdi-cog-outline","mdi-compass-off-outline","mdi-contactless-payment-circle-outline","mdi-crown-outline","mdi-delete-outline","mdi-diamond-outline","mdi-email-open-outline","mdi-emoticon-happy-outline","mdi-file-multiple-outline","mdi-flask-empty-outline"];return(r,o)=>(p(),v("div",null,[h("div",z,[(p(),v($,null,D(s,t=>i(R,{key:t,class:"mb-6 me-6"},{default:c(()=>[i(F,{class:"py-3 px-4"},{default:c(()=>[i(L,{size:"30",icon:t},null,8,["icon"])]),_:2},1024),i(U,{location:"top",activator:"parent"},{default:c(()=>[b(M(t),1)]),_:2},1024)]),_:2},1024)),64))]),h("div",K,[i(E,{href:"https://materialdesignicons.com/",rel:"noopener noreferrer",color:"primary",target:"_blank"},{default:c(()=>[b(" View All Material Design Icons ")]),_:1})])]))}};export{X as default};
