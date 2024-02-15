import{e as i,D as m,b0 as x,o as I,c as T,g as a,w as s,b1 as P,k as p,n as S,l as C,i as h,ao as n,m as B,b as f,j as D,b2 as c,t as E,a as u,a$ as R,bp as M}from"./index.6ec2b2ad.js";import{c as N,d as j,b as q,a as A}from"./auth-v1-tree.54ebfcea.js";import{a as U}from"./index.2bd8ddc8.js";import{b as g}from"./route-block.011d1056.js";import{V as z,a as _}from"./VTextField.2e53478a.js";import{V as F}from"./VSnackbar.22cfb3f0.js";const L={class:"auth-wrapper d-flex align-center justify-center pa-4"},Z=u("div",{class:"d-flex"},[u("img",{src:R,width:"80",height:"80"})],-1),$=u("h5",{class:"text-h5 font-weight-semibold mb-1"}," Welcome to BIZKINGZ! \u{1F44B}\u{1F3FB} ",-1),G=u("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),K=u("br",null,null,-1),W=u("br",null,null,-1),H={__name:"login",setup(J){const v=M(),o=i({email:"",password:"",remember:!1,timeout:6e3}),b=m(()=>{const t=[];return t.push(e=>!!e||"Email is required"),t.push(e=>/.+@.+\..+/.test(e)||"Email must be valid"),t}),w=m(()=>{const t=[];return t.push(e=>!!e||"Password is required"),t}),l=i({show:!1,message:"",color:""}),V=x(),k=m(()=>V.global.name.value==="light"?N:j),d=i(!1),y=()=>{if(!o.value.email||!o.value.password){l.value={show:!0,message:"Please give mandatory fields",color:"error"};return}const t={email:o.value.email,password:o.value.password};U.post("http://103.211.218.32/bizkingz/services/api/auth/login",t).then(e=>{console.log("API Response:",e),e.data.status==1?(setTimeout(()=>{v.push("/Dashboardhome")},1e3),localStorage.setItem("createdby",e.data.data.name),localStorage.setItem("userId",e.data.data.user_id),localStorage.setItem("userRole",e.data.data.user_role),l.value={show:!0,message:e.data.message,color:"success"}):l.value={show:!0,message:e.data.message,color:"error"}}).catch(e=>{console.error("API Error:",e),l.value={show:!0,message:"An error occurred while logging in. Please try again.",color:"error"}})};return(t,e)=>(I(),T("div",L,[a(D,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:s(()=>[a(P,{class:"justify-center"},{prepend:s(()=>[Z]),_:1}),a(p,{class:"pt-2"},{default:s(()=>[$,G]),_:1}),a(p,null,{default:s(()=>[a(z,{onSubmit:S(y,["prevent"])},{default:s(()=>[a(C,null,{default:s(()=>[a(h,{cols:"12"},{default:s(()=>[a(_,{modelValue:o.value.email,"onUpdate:modelValue":e[0]||(e[0]=r=>o.value.email=r),label:"Email",type:"email",rules:n(b)},null,8,["modelValue","rules"])]),_:1}),a(h,{cols:"12"},{default:s(()=>[a(_,{modelValue:o.value.password,"onUpdate:modelValue":e[1]||(e[1]=r=>o.value.password=r),label:"Password",type:d.value?"text":"password","append-inner-icon":d.value?"mdi-eye-off-outline":"mdi-eye-outline","onClick:appendInner":e[2]||(e[2]=r=>d.value=!d.value),rules:n(w)},null,8,["modelValue","type","append-inner-icon","rules"]),K,W,a(B,{block:"",type:"submit"},{default:s(()=>[f(" Login ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}),a(c,{class:"auth-footer-start-tree d-none d-md-block",src:n(q),width:250},null,8,["src"]),a(c,{src:n(A),class:"auth-footer-end-tree d-none d-md-block",width:350},null,8,["src"]),a(c,{class:"auth-footer-mask d-none d-md-block",src:n(k)},null,8,["src"]),a(F,{modelValue:l.value.show,"onUpdate:modelValue":e[3]||(e[3]=r=>l.value.show=r),color:l.value.color,top:"",timeout:1e3},{default:s(()=>[f(E(l.value.message),1)]),_:1},8,["modelValue","color"])]))}};typeof g=="function"&&g(H);export{H as default};