import{b as X,cz as Y,bz as g,d as Z,bk as x,aV as C,b2 as V,bu as w,bj as S,aW as P,bl as B,a as O,b4 as ee,b5 as ae,c as ie,cp as te,bn as ne,e as d,r as T,bL as se,G as L,b6 as le,M as oe,bp as ce,o as i,f as v,g as E,h as a,n as u,T as re,H as c,I as p,a9 as m,aL as h,k as r,t as N,j as ue,aN as de,a7 as M,R as ve,Q as fe,_ as pe,aj as he,b7 as F,bt as be,bv as me}from"./app-DUI38kkT.js";const ye=X({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:Y},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:g},activeActionIcon:{type:g},activeIcon:{type:g},inactiveIcon:{type:g},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:Z(Function)},id:String,tabindex:{type:[String,Number]},label:{type:String,default:void 0},...x(["ariaLabel"])}),ke={[C]:l=>V(l)||w(l)||S(l),[P]:l=>V(l)||w(l)||S(l),[B]:l=>V(l)||w(l)||S(l)},Ie=["onClick"],ge=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],Ve=["aria-hidden"],we=["aria-hidden"],Se=["aria-hidden"],U="ElSwitch",Te=O({name:U}),Ee=O({...Te,props:ye,emits:ke,setup(l,{expose:j,emit:f}){const t=l,{formItem:y}=ee(),G=ae(),n=ie("switch"),{inputId:H}=te(t,{formItemContext:y}),k=ne(d(()=>t.loading)),A=T(t.modelValue!==!1),b=T(),R=T(),W=d(()=>[n.b(),n.m(G.value),n.is("disabled",k.value),n.is("checked",s.value)]),_=d(()=>[n.e("label"),n.em("label","left"),n.is("active",!s.value)]),$=d(()=>[n.e("label"),n.em("label","right"),n.is("active",s.value)]),Q=d(()=>({width:se(t.width)}));L(()=>t.modelValue,()=>{A.value=!0});const z=d(()=>A.value?t.modelValue:!1),s=d(()=>z.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(z.value)||(f(C,t.inactiveValue),f(P,t.inactiveValue),f(B,t.inactiveValue)),L(s,e=>{var o;b.value.checked=e,t.validateEvent&&((o=y==null?void 0:y.validate)==null||o.call(y,"change").catch(J=>le()))});const I=()=>{const e=s.value?t.inactiveValue:t.activeValue;f(C,e),f(P,e),f(B,e),he(()=>{b.value.checked=s.value})},D=()=>{if(k.value)return;const{beforeChange:e}=t;if(!e){I();return}const o=e();[F(o),V(o)].includes(!0)||be(U,"beforeChange must return type `Promise<boolean>` or `boolean`"),F(o)?o.then(K=>{K&&I()}).catch(K=>{}):o&&I()},q=()=>{var e,o;(o=(e=b.value)==null?void 0:e.focus)==null||o.call(e)};return oe(()=>{b.value.checked=s.value}),ce({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-switch",ref:"https://element-plus.org/en-US/component/switch.html"},d(()=>!!t.label)),j({focus:q,checked:s}),(e,o)=>(i(),v("div",{class:u(a(W)),onClick:fe(D,["prevent"])},[E("input",{id:a(H),ref_key:"input",ref:b,class:u(a(n).e("input")),type:"checkbox",role:"switch","aria-checked":a(s),"aria-disabled":a(k),"aria-label":e.label||e.ariaLabel,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(k),tabindex:e.tabindex,onChange:I,onKeydown:re(D,["enter"])},null,42,ge),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(i(),v("span",{key:0,class:u(a(_))},[e.inactiveIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(m(e.inactiveIcon)))]),_:1})):r("v-if",!0),!e.inactiveIcon&&e.inactiveText?(i(),v("span",{key:1,"aria-hidden":a(s)},N(e.inactiveText),9,Ve)):r("v-if",!0)],2)):r("v-if",!0),E("span",{ref_key:"core",ref:R,class:u(a(n).e("core")),style:ve(a(Q))},[e.inlinePrompt?(i(),v("div",{key:0,class:u(a(n).e("inner"))},[e.activeIcon||e.inactiveIcon?(i(),c(a(h),{key:0,class:u(a(n).is("icon"))},{default:p(()=>[(i(),c(m(a(s)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(i(),v("span",{key:1,class:u(a(n).is("text")),"aria-hidden":!a(s)},N(a(s)?e.activeText:e.inactiveText),11,we)):r("v-if",!0)],2)):r("v-if",!0),E("div",{class:u(a(n).e("action"))},[e.loading?(i(),c(a(h),{key:0,class:u(a(n).is("loading"))},{default:p(()=>[ue(a(de))]),_:1},8,["class"])):a(s)?M(e.$slots,"active-action",{key:1},()=>[e.activeActionIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(m(e.activeActionIcon)))]),_:1})):r("v-if",!0)]):a(s)?r("v-if",!0):M(e.$slots,"inactive-action",{key:2},()=>[e.inactiveActionIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(m(e.inactiveActionIcon)))]),_:1})):r("v-if",!0)])],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(i(),v("span",{key:1,class:u(a($))},[e.activeIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(m(e.activeIcon)))]),_:1})):r("v-if",!0),!e.activeIcon&&e.activeText?(i(),v("span",{key:1,"aria-hidden":!a(s)},N(e.activeText),9,Se)):r("v-if",!0)],2)):r("v-if",!0)],10,Ie))}});var Ne=pe(Ee,[["__file","switch.vue"]]);const Pe=me(Ne);export{Pe as E};