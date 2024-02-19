import{_ as V,b6 as p,e as m,b7 as b,D as w,o as k,c as g,g as e,w as t,b8 as x,k as c,n as v,l as y,i as n,a as o,m as T,b as u,j as C,b9 as i,r as P}from"./index.744fe626.js";import{_ as B}from"./AuthProvider.59ab0926.js";import{a as L,b as j,c as I,d as M}from"./auth-v1-tree.54ebfcea.js";import{V as N}from"./VForm.d00ea3fc.js";import{V as f}from"./VTextField.8cedf6ef.js";import{V as R}from"./VCheckbox.ff2e181c.js";import"./VCheckboxBtn.fa5cd1d1.js";const F={components:{logo:p,AuthProvider:B,authV1Tree2:L,authV1Tree:j},data(){return{}},methods:{clickfornext(){this.$router.push({name:"Home"})}},setup(){const l=m({email:"",password:"",remember:!1}),a=b(),d=w(()=>a.global.name.value==="light"?I:M),s=m(!1);return{form:l,vuetifyTheme:a,authThemeMask:d,isPasswordVisible:s}}},U={class:"auth-wrapper d-flex align-center justify-center pa-4"},z=o("div",{class:"d-flex"},[o("img",{src:p,width:"80",height:"80"})],-1),D=o("h5",{class:"text-h5 font-weight-semibold mb-1"}," Welcome to BIZKINGZ! \u{1F44B}\u{1F3FB} ",-1),E=o("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),S={class:"d-flex align-center justify-space-between flex-wrap mt-1 mb-4"},Z=o("a",{class:"ms-2 mb-1",href:"javascript:void(0)"}," Forgot Password? ",-1),A=o("span",null,"New on our platform?",-1);function G(l,a,d,s,H,_){const h=P("RouterLink");return k(),g("div",U,[e(C,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:t(()=>[e(x,{class:"justify-center"},{prepend:t(()=>[z]),_:1}),e(c,{class:"pt-2"},{default:t(()=>[D,E]),_:1}),e(c,null,{default:t(()=>[e(N,{onSubmit:v(_.clickfornext,["prevent"])},{default:t(()=>[e(y,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(f,{modelValue:s.form.email,"onUpdate:modelValue":a[0]||(a[0]=r=>s.form.email=r),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(f,{modelValue:s.form.password,"onUpdate:modelValue":a[1]||(a[1]=r=>s.form.password=r),label:"Password",type:s.isPasswordVisible?"text":"password","append-inner-icon":s.isPasswordVisible?"mdi-eye-off-outline":"mdi-eye-outline","onClick:appendInner":a[2]||(a[2]=r=>s.isPasswordVisible=!s.isPasswordVisible)},null,8,["modelValue","type","append-inner-icon"]),o("div",S,[e(R,{modelValue:s.form.remember,"onUpdate:modelValue":a[3]||(a[3]=r=>s.form.remember=r),label:"Remember me"},null,8,["modelValue"]),Z]),e(T,{block:"",type:"submit"},{default:t(()=>[u(" Login ")]),_:1})]),_:1}),e(n,{cols:"12",class:"text-center text-base"},{default:t(()=>[A,e(h,{class:"text-primary ms-2",to:{name:"register"}},{default:t(()=>[u(" Create an account ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}),e(i,{class:"auth-footer-start-tree d-none d-md-block",src:l.authV1Tree,width:250},null,8,["src"]),e(i,{src:l.authV1Tree2,class:"auth-footer-end-tree d-none d-md-block",width:350},null,8,["src"]),e(i,{class:"auth-footer-mask d-none d-md-block",src:s.authThemeMask},null,8,["src"])])}const Y=V(F,[["render",G]]);export{Y as default};
