import{d as M,h as r,a1 as T,k as i,y as C,O as J,o as t,c as n,t as U,e as c,r as d,m as f,a4 as b,ab as q,a3 as k,J as B,n as A}from"./framework.XdSU1WYK.js";import{_ as I}from"./Icon.vue_vue_type_script_setup_true_lang.pIPA7_Vh.js";const ee={model:{type:Object},rules:{type:Object}},ae={label:{type:String},prop:{type:String},showMessage:{type:Boolean,default:!0}},se=Symbol("formContextKey"),G=Symbol("formItemContextKey"),H={key:0,class:"el-input-label"},L={key:1,class:"el-input-prepend"},Q={class:"el-input-container"},R={key:0,class:"el-input-prefix"},W=["type","disabled","placeholder","readonly","autofocus","autocomplete","form"],X={key:1,class:"el-input-suffix"},Y={key:2,class:"el-input-append"},oe=M({name:"ElInput",__name:"Input",props:{modelValue:{default:""},type:{default:"input"},disabled:{type:Boolean},showClear:{type:Boolean},placeholder:{default:"Please input"},size:{default:"default"},showPassword:{type:Boolean},prefixIcon:{},suffixIcon:{},label:{},readonly:{type:Boolean},autofocus:{type:Boolean},form:{},validateEvent:{type:Boolean},autocomplete:{}},emits:["update:modelValue","input","change","focus","blur","clear"],setup(V,{expose:S,emit:$}){const y=r(!1),_=T(),a=V,l=$,P=i(()=>({[`el-input--${a.type}`]:a.type,"is-disabled":a.disabled,"is-focus":y,[`el-input--${a.size}`]:a.size})),o=r(a.modelValue),E=e=>{const s=e.target;o.value=s.value,l("update:modelValue",s.value),l("input",s.value),h("input")},z=()=>{l("change",o.value),h("change")},K=e=>{y.value=!0,l("focus",e)},j=e=>{console.log("blur triggered"),y.value=!1,l("blur",e),h("blur")};C(()=>a.modelValue,e=>{o.value=e});const w=i(()=>o.value.length>0),D=()=>{o.value="",l("update:modelValue","")},F=i(()=>_.suffix&&!a.showClear&&!a.showPassword),u=r(a.type);C(()=>a.type,e=>{u.value=e});const N=i(()=>a.showPassword&&!a.showClear&&w.value),m=r("eye"),O=()=>{if(u.value==="password"){m.value="eye-slash",u.value=a.type||"text";return}u.value="password",m.value="eye"},g=r(),p=J(G),h=e=>{var s;a.validateEvent&&((s=p==null?void 0:p.validate)==null||s.call(p,e).catch(v=>console.error(v)))};return S({inputInstance:g}),(e,s)=>(t(),n("div",{class:A(["el-input",P.value])},[e.label?(t(),n("label",H,U(e.label),1)):c("",!0),e.$slots.prepend?(t(),n("div",L,[d(e.$slots,"prepend")])):c("",!0),f("div",Q,[e.$slots.prefix?(t(),n("span",R,[d(e.$slots,"prefix")])):c("",!0),b(f("input",{ref_key:"inputInstance",ref:g,"onUpdate:modelValue":s[0]||(s[0]=v=>o.value=v),class:"el-input-content",type:u.value,disabled:e.disabled,placeholder:e.placeholder,readonly:e.readonly,autofocus:e.autofocus,autocomplete:e.autocomplete,form:e.form,onInput:E,onChange:z,onFocus:K,onBlur:j},null,40,W),[[q,o.value]]),b(f("span",{onClick:D,class:"el-input-clear"},[B(I,{icon:"circle-xmark"})],512),[[k,e.showClear&&w.value]]),b(f("span",{onClick:O,class:"el-input-eye"},[B(I,{icon:m.value},null,8,["icon"])],512),[[k,N.value]]),F.value?(t(),n("span",X,[d(e.$slots,"suffix")])):c("",!0)]),e.$slots.append?(t(),n("div",Y,[d(e.$slots,"append")])):c("",!0)],2))}});export{oe as _,se as a,ae as b,G as c,ee as f};
