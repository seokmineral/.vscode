import{aR as ae,b as H,bx as se,a as N,u as te,i as K,c9 as ne,e as E,ca as re,o as T,f as U,g as M,a6 as w,n as g,h as e,t as ie,j as O,J as k,I as _,a9 as de,aL as ue,k as q,R as W,_ as Q,cb as ce,d as J,aV as X,b1 as fe,cc as ve,aP as G,r as D,cd as ye,bJ as pe,ce as ge,G as Y,ai as me,M as be,W as Ce,cf as he,cg as Z,aY as ke,bH as we,bn as De,c as Ee,p as Ie,a8 as Be,ch as Te,ci as Fe,m as Ae,cj as Se,aa as $e,c5 as Pe,ad as Re,ck as Le,bt as Me}from"./app-Ou2Nwfl4.js";import{i as Oe}from"./isUndefined-DCTLXrZ8.js";const Ne=(...o)=>a=>{o.forEach(r=>{ae(r)?r(a):r.value=a})},x=Symbol("dialogInjectionKey"),ee=H({center:Boolean,alignCenter:Boolean,closeIcon:{type:se},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),ze={close:()=>!0},Ve=["aria-level"],je=["aria-label"],Ue=["id"],_e=N({name:"ElDialogContent"}),qe=N({..._e,props:ee,emits:ze,setup(o){const a=o,{t:r}=te(),{Close:S}=ce,{dialogRef:n,headerRef:c,bodyId:I,ns:t,style:m}=K(x),{focusTrapRef:i}=K(ne),f=E(()=>[t.b(),t.is("fullscreen",a.fullscreen),t.is("draggable",a.draggable),t.is("align-center",a.alignCenter),{[t.m("center")]:a.center}]),v=Ne(i,n),b=E(()=>a.draggable),u=E(()=>a.overflow);return re(n,c,b,u),(s,B)=>(T(),U("div",{ref:e(v),class:g(e(f)),style:W(e(m)),tabindex:"-1"},[M("header",{ref_key:"headerRef",ref:c,class:g([e(t).e("header"),{"show-close":s.showClose}])},[w(s.$slots,"header",{},()=>[M("span",{role:"heading","aria-level":s.ariaLevel,class:g(e(t).e("title"))},ie(s.title),11,Ve)]),s.showClose?(T(),U("button",{key:0,"aria-label":e(r)("el.dialog.close"),class:g(e(t).e("headerbtn")),type:"button",onClick:B[0]||(B[0]=$=>s.$emit("close"))},[O(e(ue),{class:g(e(t).e("close"))},{default:k(()=>[(T(),_(de(s.closeIcon||e(S))))]),_:1},8,["class"])],10,je)):q("v-if",!0)],2),M("div",{id:e(I),class:g(e(t).e("body"))},[w(s.$slots,"default")],10,Ue),s.$slots.footer?(T(),U("footer",{key:0,class:g(e(t).e("footer"))},[w(s.$slots,"footer")],2)):q("v-if",!0)],6))}});var Ke=Q(qe,[["__file","dialog-content.vue"]]);const Je=H({...ee,appendToBody:Boolean,appendTo:{type:J(String),default:"body"},beforeClose:{type:J(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),Ge={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[X]:o=>fe(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ye=(o,a)=>{var r;const n=Ce().emit,{nextZIndex:c}=ve();let I="";const t=G(),m=G(),i=D(!1),f=D(!1),v=D(!1),b=D((r=o.zIndex)!=null?r:c());let u,s;const B=ye("namespace",he),$=E(()=>{const d={},h=`--${B.value}-dialog`;return o.fullscreen||(o.top&&(d[`${h}-margin-top`]=o.top),o.width&&(d[`${h}-width`]=pe(o.width))),d}),z=E(()=>o.alignCenter?{display:"flex"}:{});function P(){n("opened")}function V(){n("closed"),n(X,!1),o.destroyOnClose&&(v.value=!1)}function j(){n("close")}function R(){s==null||s(),u==null||u(),o.openDelay&&o.openDelay>0?{stop:u}=Z(()=>L(),o.openDelay):L()}function F(){u==null||u(),s==null||s(),o.closeDelay&&o.closeDelay>0?{stop:s}=Z(()=>l(),o.closeDelay):l()}function A(){function d(h){h||(f.value=!0,i.value=!1)}o.beforeClose?o.beforeClose(d):F()}function y(){o.closeOnClickModal&&A()}function L(){ke&&(i.value=!0)}function l(){i.value=!1}function p(){n("openAutoFocus")}function C(){n("closeAutoFocus")}function oe(d){var h;((h=d.detail)==null?void 0:h.focusReason)==="pointer"&&d.preventDefault()}o.lockScroll&&ge(i);function le(){o.closeOnPressEscape&&A()}return Y(()=>o.modelValue,d=>{d?(f.value=!1,R(),v.value=!0,b.value=Oe(o.zIndex)?c():b.value++,me(()=>{n("open"),a.value&&(a.value.scrollTop=0)})):i.value&&F()}),Y(()=>o.fullscreen,d=>{a.value&&(d?(I=a.value.style.transform,a.value.style.transform=""):a.value.style.transform=I)}),be(()=>{o.modelValue&&(i.value=!0,v.value=!0,R())}),{afterEnter:P,afterLeave:V,beforeLeave:j,handleClose:A,onModalClick:y,close:F,doClose:l,onOpenAutoFocus:p,onCloseAutoFocus:C,onCloseRequested:le,onFocusoutPrevented:oe,titleId:t,bodyId:m,closed:f,style:$,overlayDialogStyle:z,rendered:v,visible:i,zIndex:b}},Ze=["aria-label","aria-labelledby","aria-describedby"],He=N({name:"ElDialog",inheritAttrs:!1}),We=N({...He,props:Je,emits:Ge,setup(o,{expose:a}){const r=o,S=we();De({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},E(()=>!!S.title));const n=Ee("dialog"),c=D(),I=D(),t=D(),{visible:m,titleId:i,bodyId:f,style:v,overlayDialogStyle:b,rendered:u,zIndex:s,afterEnter:B,afterLeave:$,beforeLeave:z,handleClose:P,onModalClick:V,onOpenAutoFocus:j,onCloseAutoFocus:R,onCloseRequested:F,onFocusoutPrevented:A}=Ye(r,c);Ie(x,{dialogRef:c,headerRef:I,bodyId:f,ns:n,rendered:u,style:v});const y=Le(V),L=E(()=>r.draggable&&!r.fullscreen);return a({visible:m,dialogContentRef:t}),(l,p)=>(T(),_(Re,{to:l.appendTo,disabled:l.appendTo!=="body"?!1:!l.appendToBody},[O(Pe,{name:"dialog-fade",onAfterEnter:e(B),onAfterLeave:e($),onBeforeLeave:e(z),persisted:""},{default:k(()=>[Be(O(e(Te),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(s)},{default:k(()=>[M("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(i),"aria-describedby":e(f),class:g(`${e(n).namespace.value}-overlay-dialog`),style:W(e(b)),onClick:p[0]||(p[0]=(...C)=>e(y).onClick&&e(y).onClick(...C)),onMousedown:p[1]||(p[1]=(...C)=>e(y).onMousedown&&e(y).onMousedown(...C)),onMouseup:p[2]||(p[2]=(...C)=>e(y).onMouseup&&e(y).onMouseup(...C))},[O(e(Fe),{loop:"",trapped:e(m),"focus-start-el":"container",onFocusAfterTrapped:e(j),onFocusAfterReleased:e(R),onFocusoutPrevented:e(A),onReleaseRequested:e(F)},{default:k(()=>[e(u)?(T(),_(Ke,Ae({key:0,ref_key:"dialogContentRef",ref:t},l.$attrs,{center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(L),overflow:l.overflow,fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,"aria-level":l.headerAriaLevel,onClose:e(P)}),Se({header:k(()=>[l.$slots.title?w(l.$slots,"title",{key:1}):w(l.$slots,"header",{key:0,close:e(P),titleId:e(i),titleClass:e(n).e("title")})]),default:k(()=>[w(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:k(()=>[w(l.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):q("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Ze)]),_:3},8,["mask","overlay-class","z-index"]),[[$e,e(m)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var Qe=Q(We,[["__file","dialog.vue"]]);const eo=Me(Qe);export{eo as E};