import{e as m,aS as w,E as x,o as k,c as y,g as e,w as t,aT as C,k as c,p as T,l as I,i as n,m as p,a as o,n as R,b as f,j as P,aV as u,aU as d,aR as j,bb as B,r as L}from"./index.7cf94746.js";import{c as N,d as S,b as E,a as M}from"./auth-v1-tree.54ebfcea.js";import{a as U}from"./index.2bd8ddc8.js";import{b as h}from"./route-block.011d1056.js";import{V as D}from"./VCheckboxBtn.45dc44d3.js";import{V as F}from"./VCheckbox.7039a716.js";const z={class:"auth-wrapper d-flex align-center justify-center pa-4"},A=o("div",{class:"d-flex"},[o("img",{src:j,width:"80",height:"80"})],-1),Z=o("h5",{class:"text-h5 font-weight-semibold mb-1"}," Welcome to BIZKINGZ! \u{1F44B}\u{1F3FB} ",-1),q=o("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),G={class:"d-flex align-center justify-space-between flex-wrap mt-1 mb-4"},K=o("a",{class:"ms-2 mb-1",href:"javascript:void(0)"}," Forgot Password? ",-1),W=o("span",null,"New on our platform?",-1),$={__name:"login",setup(H){const _=B(),s=m({email:"",password:"",remember:!1}),b=w(),V=x(()=>b.global.name.value==="light"?N:S),r=m(!1),v=()=>{const i={email:s.value.email,password:s.value.password};U.post("http://103.211.218.32/bizkingz/services/api/auth/login",i).then(a=>{console.log("API Response:",a),a.data.message=="Login Successfully"&&(_.push("/Dashboardhome"),localStorage.setItem("createdby",a.data.data.name))}).catch(a=>{console.error("API Error:",a)})};return(i,a)=>{const g=L("RouterLink");return k(),y("div",z,[e(P,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:t(()=>[e(C,{class:"justify-center"},{prepend:t(()=>[A]),_:1}),e(c,{class:"pt-2"},{default:t(()=>[Z,q]),_:1}),e(c,null,{default:t(()=>[e(D,{onSubmit:T(v,["prevent"])},{default:t(()=>[e(I,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(p,{modelValue:s.value.email,"onUpdate:modelValue":a[0]||(a[0]=l=>s.value.email=l),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(p,{modelValue:s.value.password,"onUpdate:modelValue":a[1]||(a[1]=l=>s.value.password=l),label:"Password",type:r.value?"text":"password","append-inner-icon":r.value?"mdi-eye-off-outline":"mdi-eye-outline","onClick:appendInner":a[2]||(a[2]=l=>r.value=!r.value)},null,8,["modelValue","type","append-inner-icon"]),o("div",G,[e(F,{modelValue:s.value.remember,"onUpdate:modelValue":a[3]||(a[3]=l=>s.value.remember=l),label:"Remember me"},null,8,["modelValue"]),K]),e(R,{block:"",type:"submit"},{default:t(()=>[f(" Login ")]),_:1})]),_:1}),e(n,{cols:"12",class:"text-center text-base"},{default:t(()=>[W,e(g,{class:"text-primary ms-2",to:{name:"register"}},{default:t(()=>[f(" Create an account ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}),e(d,{class:"auth-footer-start-tree d-none d-md-block",src:u(E),width:250},null,8,["src"]),e(d,{src:u(M),class:"auth-footer-end-tree d-none d-md-block",width:350},null,8,["src"]),e(d,{class:"auth-footer-mask d-none d-md-block",src:u(V)},null,8,["src"])])}}};typeof h=="function"&&h($);export{$ as default};
