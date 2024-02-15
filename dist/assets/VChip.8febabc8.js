import{x as P,aL as O,z as X,y as A,O as B,aM as _,a2 as x,C as w,$ as U,Z as C,J as W,g as l,aN as Z,I as g,aO as q,U as J,aP as K,N as Q,aQ as Y,M as j,aR as H,aS as ee,aT as ae,X as le,aU as te,aV as se,aW as ne,W as ie,a9 as ue,aX as oe,a4 as I,a5 as de,aY as ce,aK as o,ay as re,u as d,ac as ve,aZ as S}from"./index.6ec2b2ad.js";const G=Symbol.for("vuetify:v-chip-group");P({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:O},...X({selectedClass:"v-chip--selected"}),...A(),...B(),..._({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:s}=c;const{themeClasses:r}=x(e),{isSelected:t,select:v,next:f,prev:p,selected:m}=w(e,G);return U({VChip:{color:C(e,"color"),filter:C(e,"filter"),variant:C(e,"variant")}}),W(()=>{var n;return l(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},r.value]},{default:()=>[(n=s.default)==null?void 0:n.call(s,{isSelected:t,select:v,next:f,prev:p,selected:m.value})]})}),{}}});const pe=P({name:"VChip",directives:{Ripple:Z},props:{activeClass:String,appendAvatar:String,appendIcon:g,closable:Boolean,closeIcon:{type:g,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,pill:Boolean,prependAvatar:String,prependIcon:g,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},...q(),...J(),...K(),...Q(),...Y(),...j(),...H(),...A({tag:"span"}),...B(),..._({variant:"tonal"})},emits:{"click:close":e=>!0,"update:active":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0},setup(e,c){let{attrs:s,emit:r,slots:t}=c;const{borderClasses:v}=ee(e),{colorClasses:f,colorStyles:p,variantClasses:m}=ae(e),{densityClasses:n}=le(e),{elevationClasses:R}=te(e),{roundedClasses:$}=se(e),{sizeClasses:D}=ne(e),{themeClasses:T}=x(e),k=ie(e,"modelValue"),a=ue(e,G,!1),h=oe(e,s);function z(i){k.value=!1,r("click:close",i)}return()=>{var i;const E=h.isLink.value?"a":e.tag,L=!!(t.append||e.appendIcon||e.appendAvatar),F=!!(t.close||e.closable),V=!!(t.filter||e.filter)&&a,M=!!(t.prepend||e.prependIcon||e.prependAvatar),y=!a||a.isSelected.value,u=!e.disabled&&(!!a||h.isClickable.value||e.link),N=e.link?e.link:a==null?void 0:a.toggle;return k.value&&I(l(E,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":u,"v-chip--filter":V,"v-chip--pill":e.pill},T.value,v.value,y?f.value:void 0,n.value,R.value,$.value,D.value,m.value,a==null?void 0:a.selectedClass.value],style:[y?p.value:void 0],disabled:e.disabled||void 0,draggable:e.draggable,href:h.href.value,onClick:u&&N},{default:()=>{var b;return[ce(u,"v-chip"),V&&l(o,{key:"filter",defaults:{VIcon:{icon:e.filterIcon}}},{default:()=>[l(re,null,{default:()=>[I(l("div",{class:"v-chip__filter"},[t.filter?t.filter():l(d,null,null)]),[[ve,a.isSelected.value]])]})]}),M&&l(o,{key:"prepend",defaults:{VAvatar:{image:e.prependAvatar},VIcon:{icon:e.prependIcon}}},{default:()=>[t.prepend?l("div",{class:"v-chip__prepend"},[t.prepend()]):e.prependAvatar?l(S,{start:!0},null):e.prependIcon?l(d,{start:!0},null):void 0]}),(b=(i=t.default)==null?void 0:i.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))!=null?b:e.text,L&&l(o,{key:"append",defaults:{VAvatar:{image:e.appendAvatar},VIcon:{icon:e.appendIcon}}},{default:()=>[t.append?l("div",{class:"v-chip__append"},[t.append()]):e.appendAvatar?l(S,{end:!0},null):e.appendIcon?l(d,{end:!0},null):void 0]}),F&&l(o,{key:"close",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},{default:()=>[l("div",{class:"v-chip__close",onClick:z},[t.close?t.close():l(d,null,null)])]})]}}),[[de("ripple"),u&&e.ripple,null]])}}});export{pe as V};
