import{a as k,f as x,b as h}from"./VTextField.2bb12e56.js";import{m as V,f as C,V as P}from"./VCheckboxBtn.7fb327e2.js";import{x as v,an as A,D as I,J as g,aA as B,g as s,R as o}from"./index.89c3bcd2.js";const J=v({name:"VCheckbox",inheritAttrs:!1,props:{...k(),...V()},setup(t,a){let{attrs:r,slots:e}=a;const n=A(),c=I(()=>t.id||`checkbox-${n}`);return g(()=>{const[i,l]=B(r),[p,R]=x(t),[u,y]=C(t);return s(h,o({class:"v-checkbox"},i,p,{id:c.value}),{...e,default:d=>{let{id:m,isDisabled:b,isReadonly:f}=d;return s(P,o(u,{id:m.value,disabled:b.value,readonly:f.value},l),e)}})}),{}}});export{J as V};