import{x as L,I as p,y as W,z as be,A as ne,B as ye,C as le,e as C,D as y,E as N,G as Se,H as oe,J as X,g as m,K as J,u as Q,L as xe,M as Te,N as ae,O as se,P as Ce,Q as we,R as ie,m as U,S as ke,T as ze,U as Be,W as _e,X as Ie,Y as Ee,Z as $,$ as Ve,a0 as ue,a1 as Re,a2 as $e,a3 as He,a4 as re,a5 as Me,a6 as Pe,a7 as Ae,a8 as Oe,a9 as Xe,aa as Ye,ab as pe,ac as Le,ad as We,ae as Z,af as Fe}from"./index.6ec2b2ad.js";function ee(e){const l=Math.abs(e);return Math.sign(e)*(l/((1/.501-2)*(1-l)+1))}function te(e){let{selectedElement:n,containerSize:l,contentSize:t,isRtl:r,currentScrollOffset:s,isHorizontal:o}=e;const a=o?n.clientWidth:n.clientHeight,i=o?n.offsetLeft:n.offsetTop,c=r&&o?t-i-a:i,v=l+s,S=a+c,x=a*.4;return c<=s?s=Math.max(c-x,0):v<=S&&(s=Math.min(s-(v-S-x),t-l)),s}function Ge(e){let{selectedElement:n,containerSize:l,contentSize:t,isRtl:r,isHorizontal:s}=e;const o=s?n.clientWidth:n.clientHeight,a=s?n.offsetLeft:n.offsetTop,i=r&&s?t-a-o/2-l/2:a+o/2-l/2;return Math.min(t-l,Math.max(0,i))}const De=Symbol.for("vuetify:v-slide-group"),je=L({name:"VSlideGroup",props:{centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:De},nextIcon:{type:p,default:"$next"},prevIcon:{type:p,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...W(),...be({selectedClass:"v-slide-group-item--active"})},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:l}=n;const{isRtl:t}=ne(),{mobile:r}=ye(),s=le(e,e.symbol),o=C(!1),a=C(0),i=C(0),c=C(0),v=y(()=>e.direction==="horizontal"),{resizeRef:S,contentRect:x}=N(),{resizeRef:f,contentRect:g}=N(),I=y(()=>s.selected.value.length?s.items.value.findIndex(u=>u.id===s.selected.value[0]):-1),V=y(()=>s.selected.value.length?s.items.value.findIndex(u=>u.id===s.selected.value[s.selected.value.length-1]):-1);if(Se){let u=-1;oe(()=>[s.selected.value,x.value,g.value,v.value],()=>{cancelAnimationFrame(u),u=requestAnimationFrame(()=>{if(x.value&&g.value){const d=v.value?"width":"height";i.value=x.value[d],c.value=g.value[d],o.value=i.value+1<c.value}if(I.value>=0&&f.value){const d=f.value.children[V.value];I.value===0||!o.value?a.value=0:e.centerActive?a.value=Ge({selectedElement:d,containerSize:i.value,contentSize:c.value,isRtl:t.value,isHorizontal:v.value}):o.value&&(a.value=te({selectedElement:d,containerSize:i.value,contentSize:c.value,isRtl:t.value,currentScrollOffset:a.value,isHorizontal:v.value}))}})})}const E=C(!1);let k=0,z=0;function h(u){const d=v.value?"clientX":"clientY";z=(t.value&&v.value?-1:1)*a.value,k=u.touches[0][d],E.value=!0}function b(u){if(!o.value)return;const d=v.value?"clientX":"clientY",_=t.value&&v.value?-1:1;a.value=_*(z+k-u.touches[0][d])}function T(u){const d=c.value-i.value;a.value<0||!o.value?a.value=0:a.value>=d&&(a.value=d),E.value=!1}function B(){!S.value||(S.value[v.value?"scrollLeft":"scrollTop"]=0)}const H=C(!1);function F(u){if(H.value=!0,!(!o.value||!f.value)){for(const d of u.composedPath())for(const _ of f.value.children)if(_===d){a.value=te({selectedElement:_,containerSize:i.value,contentSize:c.value,isRtl:t.value,currentScrollOffset:a.value,isHorizontal:v.value});return}}}function R(u){H.value=!1}function G(u){var d;!H.value&&!(u.relatedTarget&&(d=f.value)!=null&&d.contains(u.relatedTarget))&&w()}function q(u){!f.value||(v.value?u.key==="ArrowRight"?w(t.value?"prev":"next"):u.key==="ArrowLeft"&&w(t.value?"next":"prev"):u.key==="ArrowDown"?w("next"):u.key==="ArrowUp"&&w("prev"),u.key==="Home"?w("first"):u.key==="End"&&w("last"))}function w(u){if(!!f.value)if(u){if(u==="next"){var _;const M=(_=f.value.querySelector(":focus"))==null?void 0:_.nextElementSibling;M?M.focus():w("first")}else if(u==="prev"){var A;const M=(A=f.value.querySelector(":focus"))==null?void 0:A.previousElementSibling;M?M.focus():w("last")}else if(u==="first"){var O;(O=f.value.firstElementChild)==null||O.focus()}else if(u==="last"){var K;(K=f.value.lastElementChild)==null||K.focus()}}else{var d;f.value.querySelector("[tabindex]"),(d=[...f.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(ge=>!ge.hasAttribute("disabled"))[0])==null||d.focus()}}function P(u){const d=a.value+(u==="prev"?-1:1)*i.value;a.value=xe(d,0,c.value-i.value)}const Y=y(()=>{let u=a.value>c.value-i.value?-(c.value-i.value)+ee(c.value-i.value-a.value):-a.value;a.value<=0&&(u=ee(-a.value));const d=t.value&&v.value?-1:1;return{transform:`translate${v.value?"X":"Y"}(${d*u}px)`,transition:E.value?"none":"",willChange:E.value?"transform":""}}),D=y(()=>({next:s.next,prev:s.prev,select:s.select,isSelected:s.isSelected})),j=y(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!r.value;case!0:return o.value||Math.abs(a.value)>0;case"mobile":return r.value||o.value||Math.abs(a.value)>0;default:return!r.value&&(o.value||Math.abs(a.value)>0)}}),he=y(()=>Math.abs(a.value)>0),me=y(()=>c.value>Math.abs(a.value)+i.value);return X(()=>{var u,d,_;return m(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!v.value,"v-slide-group--has-affixes":j.value,"v-slide-group--is-overflowing":o.value}],tabindex:H.value||s.selected.value.length?-1:0,onFocus:G},{default:()=>{var A,O;return[j.value&&m("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!he.value}],onClick:()=>P("prev")},[(A=(u=l.prev)==null?void 0:u.call(l,D.value))!=null?A:m(J,null,{default:()=>[m(Q,{icon:t.value?e.nextIcon:e.prevIcon},null)]})]),m("div",{key:"container",ref:S,class:"v-slide-group__container",onScroll:B},[m("div",{ref:f,class:"v-slide-group__content",style:Y.value,onTouchstartPassive:h,onTouchmovePassive:b,onTouchendPassive:T,onFocusin:F,onFocusout:R,onKeydown:q},[(d=l.default)==null?void 0:d.call(l,D.value)])]),j.value&&m("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!me.value}],onClick:()=>P("next")},[(O=(_=l.next)==null?void 0:_.call(l,D.value))!=null?O:m(J,null,{default:()=>[m(Q,{icon:t.value?e.prevIcon:e.nextIcon},null)]})])]}})}),{selected:s.selected,scrollTo:P,scrollOffset:a,focus:w}}});const ce=Symbol.for("vuetify:v-tabs"),Ue=L({name:"VTab",props:{fixed:Boolean,icon:[Boolean,String,Function,Object],prependIcon:p,appendIcon:p,stacked:Boolean,title:String,ripple:{type:Boolean,default:!0},color:String,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...W(),...Te(),...ae({selectedClass:"v-tab--selected"}),...se()},setup(e,n){let{slots:l,attrs:t}=n;const{textColorClasses:r,textColorStyles:s}=Ce(e,"sliderColor"),o=y(()=>e.direction==="horizontal"),a=C(!1),i=C(),c=C();function v(S){let{value:x}=S;if(a.value=x,x){var f,g;const I=(f=i.value)==null||(g=f.$el.parentElement)==null?void 0:g.querySelector(".v-tab--selected .v-tab__slider"),V=c.value;if(!I||!V)return;const E=getComputedStyle(I).color,k=I.getBoundingClientRect(),z=V.getBoundingClientRect(),h=o.value?"x":"y",b=o.value?"X":"Y",T=o.value?"right":"bottom",B=o.value?"width":"height",H=k[h],F=z[h],R=H>F?k[T]-z[T]:k[h]-z[h],G=Math.sign(R)>0?o.value?"right":"bottom":Math.sign(R)<0?o.value?"left":"top":"center",w=(Math.abs(R)+(Math.sign(R)<0?k[B]:z[B]))/Math.max(k[B],z[B]),P=k[B]/z[B],Y=1.5;ke(V,{backgroundColor:[E,""],transform:[`translate${b}(${R}px) scale${b}(${P})`,`translate${b}(${R/Y}px) scale${b}(${(w-1)/Y+1})`,""],transformOrigin:Array(3).fill(G)},{duration:225,easing:ze})}}return X(()=>{const[S]=we(e,["href","to","replace","icon","stacked","prependIcon","appendIcon","ripple","theme","disabled","selectedClass","value","color"]);return m(U,ie({_as:"VTab",symbol:ce,ref:i,class:["v-tab"],tabindex:a.value?0:-1,role:"tab","aria-selected":String(a.value),block:e.fixed,maxWidth:e.fixed?300:void 0,variant:"text",rounded:0},S,t,{"onGroup:selected":v}),{default:()=>[l.default?l.default():e.title,!e.hideSlider&&m("div",{ref:c,class:["v-tab__slider",r.value],style:s.value},null)]})}),{}}});function qe(e){return e?e.map(n=>typeof n=="string"?{title:n,value:n}:n):[]}const ot=L({name:"VTabs",props:{alignWithTitle:Boolean,color:String,direction:{type:String,default:"horizontal"},fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,centered:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,optional:Boolean,end:Boolean,sliderColor:String,modelValue:null,...Be(),...W()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:l}=n;const t=_e(e,"modelValue"),r=y(()=>qe(e.items)),{densityClasses:s}=Ie(e),{backgroundColorClasses:o,backgroundColorStyles:a}=Ee($(e,"bgColor"));return Ve({VTab:{color:$(e,"color"),direction:$(e,"direction"),stacked:$(e,"stacked"),fixed:$(e,"fixedTabs"),sliderColor:$(e,"sliderColor"),hideSlider:$(e,"hideSlider")}}),X(()=>m(je,{modelValue:t.value,"onUpdate:modelValue":i=>t.value=i,class:["v-tabs",`v-tabs--${e.direction}`,{"v-tabs--align-with-title":e.alignWithTitle,"v-tabs--centered":e.centered,"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--end":e.end,"v-tabs--stacked":e.stacked},s.value,o.value],style:a.value,role:"tablist",symbol:ce,mandatory:"force",direction:e.direction},{default:()=>[l.default?l.default():r.value.map(i=>m(Ue,ie(i,{key:i.title}),null))]})),{}}});const Ke=e=>{const{touchstartX:n,touchendX:l,touchstartY:t,touchendY:r}=e,s=.5,o=16;e.offsetX=l-n,e.offsetY=r-t,Math.abs(e.offsetY)<s*Math.abs(e.offsetX)&&(e.left&&l<n-o&&e.left(e),e.right&&l>n+o&&e.right(e)),Math.abs(e.offsetX)<s*Math.abs(e.offsetY)&&(e.up&&r<t-o&&e.up(e),e.down&&r>t+o&&e.down(e))};function Ne(e,n){var l;const t=e.changedTouches[0];n.touchstartX=t.clientX,n.touchstartY=t.clientY,(l=n.start)==null||l.call(n,{originalEvent:e,...n})}function Je(e,n){var l;const t=e.changedTouches[0];n.touchendX=t.clientX,n.touchendY=t.clientY,(l=n.end)==null||l.call(n,{originalEvent:e,...n}),Ke(n)}function Qe(e,n){var l;const t=e.changedTouches[0];n.touchmoveX=t.clientX,n.touchmoveY=t.clientY,(l=n.move)==null||l.call(n,{originalEvent:e,...n})}function Ze(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:l=>Ne(l,n),touchend:l=>Je(l,n),touchmove:l=>Qe(l,n)}}function et(e,n){var i,c;var l;const t=n.value,r=t!=null&&t.parent?e.parentElement:e,s=(i=t==null?void 0:t.options)!=null?i:{passive:!0},o=(l=n.instance)==null?void 0:l.$.uid;if(!r||!o)return;const a=Ze(n.value);r._touchHandlers=(c=r._touchHandlers)!=null?c:Object.create(null),r._touchHandlers[o]=a,ue(a).forEach(v=>{r.addEventListener(v,a[v],s)})}function tt(e,n){var l,t;const r=(l=n.value)!=null&&l.parent?e.parentElement:e,s=(t=n.instance)==null?void 0:t.$.uid;if(!(r!=null&&r._touchHandlers)||!s)return;const o=r._touchHandlers[s];ue(o).forEach(a=>{r.removeEventListener(a,o[a])}),delete r._touchHandlers[s]}const ve={mounted:et,unmounted:tt},nt=ve,de=Symbol.for("vuetify:v-window"),fe=Symbol.for("vuetify:v-window-group"),at=Re()({name:"VWindow",directives:{Touch:ve},props:{continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...W(),...se()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:l}=n;const{themeClasses:t}=$e(e),{isRtl:r}=ne(),{t:s}=He(),o=le(e,fe),a=C(),i=y(()=>r.value?!e.reverse:e.reverse),c=C(!1),v=y(()=>{const h=e.direction==="vertical"?"y":"x",T=(i.value?!c.value:c.value)?"-reverse":"";return`v-window-${h}${T}-transition`}),S=C(0),x=C(void 0),f=y(()=>o.items.value.findIndex(h=>o.selected.value.includes(h.id)));oe(f,(h,b)=>{const T=o.items.value.length,B=T-1;T<=2?c.value=h<b:h===B&&b===0?c.value=!0:h===0&&b===B?c.value=!1:c.value=h<b}),Pe(de,{transition:v,isReversed:c,transitionCount:S,transitionHeight:x,rootRef:a});const g=y(()=>e.continuous||f.value!==0),I=y(()=>e.continuous||f.value!==o.items.value.length-1);function V(){g.value&&o.prev()}function E(){I.value&&o.next()}const k=y(()=>{const h=[],b={icon:r.value?e.nextIcon:e.prevIcon,class:`v-window__${i.value?"right":"left"}`,onClick:o.prev,ariaLabel:s("$vuetify.carousel.prev")};h.push(g.value?l.prev?l.prev({props:b}):m(U,b,null):m("div",null,null));const T={icon:r.value?e.prevIcon:e.nextIcon,class:`v-window__${i.value?"left":"right"}`,onClick:o.next,ariaLabel:s("$vuetify.carousel.next")};return h.push(I.value?l.next?l.next({props:T}):m(U,T,null):m("div",null,null)),h}),z=y(()=>e.touch===!1?e.touch:{...{left:()=>{i.value?V():E()},right:()=>{i.value?E():V()},start:b=>{let{originalEvent:T}=b;T.stopPropagation()}},...e.touch===!0?{}:e.touch});return X(()=>{var h,b;return re(m(e.tag,{ref:a,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value]},{default:()=>[m("div",{class:"v-window__container",style:{height:x.value}},[(h=l.default)==null?void 0:h.call(l,{group:o}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[k.value])]),(b=l.additional)==null?void 0:b.call(l,{group:o})]}),[[Me("touch"),z.value]])}),{group:o}}}),st=L({name:"VWindowItem",directives:{Touch:nt},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...ae(),...Ae()},emits:{"group:selected":e=>!0},setup(e,n){let{slots:l}=n;const t=Oe(de),r=Xe(e,fe),{isBooted:s}=Ye();if(!t||!r)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const o=C(!1),a=y(()=>t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1);function i(){!o.value||!t||(o.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function c(){if(!(o.value||!t)){if(o.value=!0,t.transitionCount.value===0){var g;t.transitionHeight.value=Z((g=t.rootRef.value)==null?void 0:g.clientHeight)}t.transitionCount.value+=1}}function v(){i()}function S(g){!o.value||Fe(()=>{!a.value||!o.value||!t||(t.transitionHeight.value=Z(g.clientHeight))})}const x=y(()=>{const g=t.isReversed.value?e.reverseTransition:e.transition;return a.value?{name:typeof g!="string"?t.transition.value:g,onBeforeEnter:c,onAfterEnter:i,onEnterCancelled:v,onBeforeLeave:c,onAfterLeave:i,onLeaveCancelled:v,onEnter:S}:!1}),{hasContent:f}=pe(e,r.isSelected);return X(()=>{var g;return m(We,{transition:s.value&&x.value},{default:()=>[re(m("div",{class:["v-window-item",r.selectedClass.value]},[f.value&&((g=l.default)==null?void 0:g.call(l))]),[[Le,r.isSelected.value]])]})}),{}}});export{ot as V,st as a,at as b,Ue as c};
