import{p as C,b7 as B,H as T,M as K,g as _,d as z,e as c,u as Z,B as q,bu as Q,bO as X,c as i,w as A,aA as ee,bc as ae,bS as W,a as j,aE as ne,aJ as G,r as te,s as H,aZ as se,v as le,bT as ie,a1 as ue,o as re,a3 as U,b as P,n as oe,aS as N,aG as ce,bU as de,ar as ve,aH as ge,as as fe,S as me,T as ye}from"./index-a104d20c.js";const he=C({text:String,onClick:B(),...T(),...K()},"VLabel"),Pe=_()({name:"VLabel",props:he(),setup(e,r){let{slots:s}=r;return z(()=>{var a;return c("label",{class:["v-label",{"v-label--clickable":!!e.onClick},e.class],style:e.style,onClick:e.onClick},[e.text,(a=s.default)==null?void 0:a.call(s)])}),{}}});function pe(e){const{t:r}=Z();function s(a){let{name:o}=a;const n={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[o],u=e[`onClick:${o}`],v=u&&n?r(`$vuetify.input.${n}`,e.label??""):void 0;return c(q,{icon:e[`${o}Icon`],"aria-label":v,onClick:u},null)}return{InputIcon:s}}const be=C({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...T(),...Q({transition:{component:X,leaveAbsolute:!0,group:!0}})},"VMessages"),Ve=_()({name:"VMessages",props:be(),setup(e,r){let{slots:s}=r;const a=i(()=>A(e.messages)),{textColorClasses:o,textColorStyles:n}=ee(i(()=>e.color));return z(()=>c(ae,{transition:e.transition,tag:"div",class:["v-messages",o.value,e.class],style:[n.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&a.value.map((u,v)=>c("div",{class:"v-messages__message",key:`${v}-${a.value}`},[s.message?s.message({message:u}):u]))]})),{}}}),Ie=C({focused:Boolean,"onUpdate:focused":B()},"focus");function Ae(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();const s=j(e,"focused"),a=i(()=>({[`${r}--focused`]:s.value}));function o(){s.value=!0}function n(){s.value=!1}return{focusClasses:a,isFocused:s,focus:o,blur:n}}const ke=Symbol.for("vuetify:form");function Se(){return ne(ke,null)}const Ce=C({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Ie()},"validation");function Me(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W(),s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:G();const a=j(e,"modelValue"),o=i(()=>e.validationValue===void 0?a.value:e.validationValue),n=Se(),u=te([]),v=H(!0),M=i(()=>!!(A(a.value===""?null:a.value).length||A(o.value===""?null:o.value).length)),p=i(()=>!!(e.disabled??(n==null?void 0:n.isDisabled.value))),$=i(()=>!!(e.readonly??(n==null?void 0:n.isReadonly.value))),m=i(()=>{var t;return(t=e.errorMessages)!=null&&t.length?A(e.errorMessages).concat(u.value).slice(0,Math.max(0,+e.maxErrors)):u.value}),d=i(()=>{let t=(e.validateOn??(n==null?void 0:n.validateOn.value))||"input";t==="lazy"&&(t="input lazy"),t==="eager"&&(t="input eager");const l=new Set((t==null?void 0:t.split(" "))??[]);return{input:l.has("input"),blur:l.has("blur")||l.has("input")||l.has("invalid-input"),invalidInput:l.has("invalid-input"),lazy:l.has("lazy"),eager:l.has("eager")}}),g=i(()=>{var t;return e.error||(t=e.errorMessages)!=null&&t.length?!1:e.rules.length?v.value?u.value.length||d.value.lazy?null:!0:!u.value.length:!0}),b=H(!1),w=i(()=>({[`${r}--error`]:g.value===!1,[`${r}--dirty`]:M.value,[`${r}--disabled`]:p.value,[`${r}--readonly`]:$.value})),D=se("validation"),h=i(()=>e.name??le(s));ie(()=>{n==null||n.register({id:h.value,vm:D,validate:f,reset:V,resetValidation:I})}),ue(()=>{n==null||n.unregister(h.value)}),re(async()=>{d.value.lazy||await f(!d.value.eager),n==null||n.update(h.value,g.value,m.value)}),U(()=>d.value.input||d.value.invalidInput&&g.value===!1,()=>{P(o,()=>{if(o.value!=null)f();else if(e.focused){const t=P(()=>e.focused,l=>{l||f(),t()})}})}),U(()=>d.value.blur,()=>{P(()=>e.focused,t=>{t||f()})}),P([g,m],()=>{n==null||n.update(h.value,g.value,m.value)});async function V(){a.value=null,await oe(),await I()}async function I(){v.value=!0,d.value.lazy?u.value=[]:await f(!d.value.eager)}async function f(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const l=[];b.value=!0;for(const k of e.rules){if(l.length>=+(e.maxErrors??1))break;const y=await(typeof k=="function"?k:()=>k)(o.value);if(y!==!0){if(y!==!1&&typeof y!="string"){console.warn(`${y} is not a valid value. Rule functions must return boolean true or a string.`);continue}l.push(y||"")}}return u.value=l,b.value=!1,v.value=t,u.value}return{errorMessages:m,isDirty:M,isDisabled:p,isReadonly:$,isPristine:v,isValid:g,isValidating:b,reset:V,resetValidation:I,validate:f,validationClasses:w}}const $e=C({id:String,appendIcon:N,centerAffix:{type:Boolean,default:!0},prependIcon:N,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":B(),"onClick:append":B(),...T(),...ce(),...de(ve(),["maxWidth","minWidth","width"]),...K(),...Ce()},"VInput"),Be=_()({name:"VInput",props:{...$e()},emits:{"update:modelValue":e=>!0},setup(e,r){let{attrs:s,slots:a,emit:o}=r;const{densityClasses:n}=ge(e),{dimensionStyles:u}=fe(e),{themeClasses:v}=me(e),{rtlClasses:M}=ye(),{InputIcon:p}=pe(e),$=G(),m=i(()=>e.id||`input-${$}`),d=i(()=>`${m.value}-messages`),{errorMessages:g,isDirty:b,isDisabled:w,isReadonly:D,isPristine:h,isValid:V,isValidating:I,reset:f,resetValidation:t,validate:l,validationClasses:k}=Me(e,"v-input",m),S=i(()=>({id:m,messagesId:d,isDirty:b,isDisabled:w,isReadonly:D,isPristine:h,isValid:V,isValidating:I,reset:f,resetValidation:t,validate:l})),y=i(()=>{var x;return(x=e.errorMessages)!=null&&x.length||!h.value&&g.value.length?g.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return z(()=>{var E,F,L,O;const x=!!(a.prepend||e.prependIcon),J=!!(a.append||e.appendIcon),R=y.value.length>0,Y=!e.hideDetails||e.hideDetails==="auto"&&(R||!!a.details);return c("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},n.value,v.value,M.value,k.value,e.class],style:[u.value,e.style]},[x&&c("div",{key:"prepend",class:"v-input__prepend"},[(E=a.prepend)==null?void 0:E.call(a,S.value),e.prependIcon&&c(p,{key:"prepend-icon",name:"prepend"},null)]),a.default&&c("div",{class:"v-input__control"},[(F=a.default)==null?void 0:F.call(a,S.value)]),J&&c("div",{key:"append",class:"v-input__append"},[e.appendIcon&&c(p,{key:"append-icon",name:"append"},null),(L=a.append)==null?void 0:L.call(a,S.value)]),Y&&c("div",{class:"v-input__details"},[c(Ve,{id:d.value,active:R,messages:y.value},{message:a.message}),(O=a.details)==null?void 0:O.call(a,S.value)])])}),{reset:f,resetValidation:t,validate:l,isValid:V,errorMessages:g}}});export{Be as V,Se as a,Pe as b,Ie as c,pe as d,$e as m,Ae as u};
