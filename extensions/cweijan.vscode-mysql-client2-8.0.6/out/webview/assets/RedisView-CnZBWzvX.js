import{q as de,s as A,v as f,a as F,r as w,C as H,J as L,o as d,f as z,g as C,j as i,I as c,H as h,h as a,t as U,T as Y,w as q,$,N as Q,O as ce,P as me,B as W,e as B,k as _,K as D,au as X,aq as pe,F as G,A as ye,a8 as ee,aa as te,R as ve,bg as fe}from"./app-D9mk4nci.js";import{R as ge}from"./constants-DgoLmzql.js";import{d as Z}from"./objectUtil-Z6JRxuBJ.js";import{E as _e,u as ke}from"./dialogStore-CEuvhmpz.js";import{c as be,s as he,p as xe,l as we}from"./common_view_utils-uCCJmiO1.js";import{E as le,a as ne}from"./index-D3kuO47r.js";import{E as Se,a as ae}from"./index-CrBNl7oJ.js";import{E as Ve}from"./index-CzV1VMaP.js";import{E as Ce,a as Ie}from"./index-CF2IJHmI.js";import{s as Ee,c as Ne}from"./codemirror-hMvtOPYU.js";import"./isEqual-ClA7P-IQ.js";import"./index-vbuHYzPE.js";import"./index-ZQ1VMzr2.js";import"./index-BacoOGxV.js";import"./_baseFindIndex-D7XfJLKM.js";import"./_baseIteratee-BHgRsBqw.js";import"./castArray-Dg_NPWUQ.js";import"./clone-adqOlbX7.js";import"./_baseClone-CrfUuWuE.js";import"./_initCloneObject-Du8bK4lp.js";import"./merge-DhMwWPEb.js";import"./isArrayLikeObject-iUnBYB8T.js";import"./index-D84rhHTp.js";import"./DatabaseType-Ddcx6xz-.js";const P=de("redis",{state:()=>({remainHeight:0,edit:{name:"",ttl:-1,content:null},key:{name:"",ttl:-1,content:null,count:null,type:null},itemModel:{old:null,key:null,index:null,score:null,value:null}}),actions:{saveListItem(o){if(o!=null&&(this.itemModel.value=o),!this.edit.name)return A("Key name cannot be null!");f.emit("saveItem",{...this.itemModel,keyName:this.edit.name,type:this.key.type})}}}),ze=o=>(ce("data-v-109341ab"),o=o(),me(),o),Te={id:"panel",class:"flex pt-2 pb-4 justify-between pr-4 flex-wrap gap-3"},$e={key:1,class:"key-label key-detail-type"},Re=ze(()=>C("span",{class:"key-label"},"TTL",-1)),Be=F({__name:"RedisKeyInfo",setup(o){const t=w(!1),e=P(),{key:l,edit:m}=H(e),g=()=>{q($("confirm.deleteRedisKey")).then(()=>{f.emit("del",{key:{name:e.key.name}}),e.key={},e.edit={}})},S=()=>{f.emit("rename",{key:{name:e.key.name,newName:e.edit.name}})},k=()=>{f.emit("ttl",{key:{name:e.key.name,ttl:e.edit.ttl}})};return f.on("new",()=>{t.value=!0}),f.on("detail",()=>{t.value=!1}),setInterval(()=>{document.activeElement.tagName!=="INPUT"&&m.value.ttl>0&&(m.value.ttl-=1)},1e3),(I,p)=>{const y=le,u=ne,v=Q,b=L("vsc-button");return d(),z("div",Te,[C("div",null,[i(v,{ref:"keyNameInput",modelValue:a(m).name,"onUpdate:modelValue":p[1]||(p[1]=x=>a(m).name=x),size:"small",placeholder:"Please input key name",style:{width:"500px"},onKeyup:Y(S,["enter"])},{prepend:c(()=>[t.value?(d(),h(u,{key:0,modelValue:a(l).type,"onUpdate:modelValue":p[0]||(p[0]=x=>a(l).type=x),placeholder:"Forever",size:"small",style:{width:"100px"}},{default:c(()=>[i(y,{value:"string",label:"STRING"}),i(y,{value:"list",label:"LIST"}),i(y,{value:"set",label:"SET"}),i(y,{value:"zset",label:"ZSET"}),i(y,{value:"hash",label:"HASH"}),i(y,{value:"stream",label:"STREAM"})]),_:1},8,["modelValue"])):(d(),z("span",$e,U(a(l).type),1))]),_:1},8,["modelValue"]),i(b,{class:"ml-1",size:"mini",icon:"el-icon-document-copy",onClick:p[2]||(p[2]=x=>a(be)(a(m).name))}),i(b,{icon:"el-icon-refresh",size:"mini",type:"secondary",onClick:p[3]||(p[3]=x=>{a(f).emit("refresh")})})]),C("div",null,[i(v,{modelValue:a(m).ttl,"onUpdate:modelValue":p[4]||(p[4]=x=>a(m).ttl=x),size:"small",class:"mr-1",style:{width:"220px"},onKeyup:Y(k,["enter"])},{prepend:c(()=>[Re]),_:1},8,["modelValue"]),i(b,{icon:"codicon codicon-save",size:"mini",onClick:k}),i(b,{icon:"el-icon-delete",size:"mini",type:"secondary",onClick:g})])])}}}),Ue=W(Be,[["__scopeId","data-v-109341ab"]]),Me={key:0},Le={id:"listPanel"},De={class:"ml-2 inline-block"},Fe=["title","textContent"],Pe=F({__name:"RedisListView",setup(o){const t=P(),{key:e,itemModel:l,remainHeight:m}=H(t),g=w(""),S=w(""),k=w(1),I=w(100),p=w(0),y=w(!1);f.on("detail",r=>{y.value=!1,k.value=r.page.pageNum,I.value=r.page.pageSize}).on("pagination",r=>{t.key.content=r}).on("success",()=>{y.value=!1});const u=B(()=>{const r=t.itemModel.old;let n=e.value.type;return n=n.charAt(0).toUpperCase()+n.slice(1),`${r?"Edit":"Add to"} ${n}`}),v=B(()=>{const r=e.value.type;switch(r){case"list":return"Element";case"hash":return"Value";case"set":case"zset":return"Member";case"stream":return"Entry";default:return r.charAt(0).toUpperCase()+r.slice(1)}}),b=(r,n)=>{f.emit("changePage",n?r:k.value+r)},x=()=>{y.value=!0,t.itemModel={old:null,key:null,index:null,score:null,value:null}},K=B(()=>{e.value.content||(e.value.content=[]);const r=g.value,n=S.value,N=e.value.content.filter(V=>!(r&&e.value.type=="hash"&&!`${V.key}`.match(new RegExp(r,"i"))||n&&!`${V.value??V}`.match(new RegExp(n,"i"))));return p.value=e.value.count??N.length,N}),O=r=>{q($("confirm.deleteRedisKey")).then(()=>{f.emit("deleteLine",r)})},E=r=>{navigator.clipboard.writeText(r.value??r),X($("common.copied"))},ie=r=>{t.itemModel={...r,old:{...r}},y.value=!0};return(r,n)=>{const N=Q,V=L("vsc-button"),J=L("vsc-tooltip"),oe=_e,M=Se,se=ae,re=Ve,T=Ce,ue=Ie;return["list","hash","set","zset","stream"].includes(a(e).type)?(d(),z("div",Me,[C("div",Le,[a(e).type=="hash"?(d(),h(N,{key:0,modelValue:g.value,"onUpdate:modelValue":n[0]||(n[0]=s=>g.value=s),class:"filter-input mb-2 mr-2",size:"small",style:{width:"120px"},placeholder:a($)("result.searchField"),clearable:!0},null,8,["modelValue","placeholder"])):_("",!0),i(N,{modelValue:S.value,"onUpdate:modelValue":n[1]||(n[1]=s=>S.value=s),class:"filter-input mb-2",size:"small",style:{width:"200px"},placeholder:a($)("result.searchNotice"),clearable:!0},null,8,["modelValue","placeholder"]),i(J,{title:"Add new key"},{default:c(()=>[C("div",De,[a(e).type!="stream"?(d(),h(V,{key:0,type:"icon",icon:"codicon-add text-lg",style:{color:"var(--vscode-terminal-ansiYellow)"},onClick:n[2]||(n[2]=s=>x())})):_("",!0)])]),_:1}),i(oe,{"page-size":I.value,"onUpdate:pageSize":n[3]||(n[3]=s=>I.value=s),"current-page":k.value,"onUpdate:currentPage":n[4]||(n[4]=s=>k.value=s),small:!0,total:p.value,"page-sizes":[20,50,100,200,300],layout:"prev,pager, next, total",onCurrentChange:n[5]||(n[5]=s=>b(s,!0)),onNextClick:n[6]||(n[6]=()=>b(1)),onPrevClick:n[7]||(n[7]=()=>b(-1))},null,8,["page-size","current-page","total"]),i(re,{modelValue:y.value,"onUpdate:modelValue":n[14]||(n[14]=s=>y.value=s),title:u.value,closeOnClickModal:!1,"close-on-press-escape":!1,width:"30%",class:"new-item-dialog"},{footer:c(()=>[i(V,{type:"secondary",onClick:n[12]||(n[12]=s=>y.value=!1)},{default:c(()=>[D(U(a($)("common.cancel")),1)]),_:1}),i(V,{type:"primary",onClick:n[13]||(n[13]=s=>a(t).saveListItem())},{default:c(()=>[D("Confirm")]),_:1})]),default:c(()=>[i(se,{"label-width":"60px"},{default:c(()=>[a(e).type=="list"?(d(),h(M,{key:0,label:"Index"},{default:c(()=>[i(N,{modelValue:a(l).index,"onUpdate:modelValue":n[8]||(n[8]=s=>a(l).index=s),size:"small",disabled:""},null,8,["modelValue"])]),_:1})):_("",!0),a(e).type=="hash"?(d(),h(M,{key:1,label:"Field"},{default:c(()=>[i(N,{modelValue:a(l).key,"onUpdate:modelValue":n[9]||(n[9]=s=>a(l).key=s),size:"small"},null,8,["modelValue"])]),_:1})):_("",!0),a(e).type=="zset"?(d(),h(M,{key:2,label:"Score"},{default:c(()=>[i(N,{modelValue:a(l).score,"onUpdate:modelValue":n[10]||(n[10]=s=>a(l).score=s),size:"small"},null,8,["modelValue"])]),_:1})):_("",!0),i(M,{label:v.value},{default:c(()=>[i(N,{modelValue:a(l).value,"onUpdate:modelValue":n[11]||(n[11]=s=>a(l).value=s),size:"small"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1},8,["modelValue","title"])]),C("div",null,[i(ue,{data:K.value,height:a(m),border:""},{default:c(()=>[a(e).type=="list"?(d(),h(T,{key:0,label:"Index",prop:"index",sortable:"",width:"90",align:"center"})):_("",!0),a(e).type=="hash"?(d(),h(T,{key:1,"sort-by":"key",resizable:"",sortable:"",label:"Field",align:"center",width:"200",prop:"key"})):_("",!0),a(e).type=="zset"?(d(),h(T,{key:2,"sort-by":"score",resizable:"",sortable:"",label:"Score",align:"center",width:"200",prop:"score"})):_("",!0),a(e).type=="stream"?(d(),h(T,{key:3,"sort-by":"id",resizable:"",sortable:"",label:"id",align:"center",width:"200",prop:"id"})):_("",!0),i(T,{"sort-by":"value",resizable:"",sortable:"",label:v.value,align:"center"},{default:c(s=>{var R;return[C("span",{class:"item-value",title:s.row.value,textContent:U(((R=s.row)==null?void 0:R.value)||s.row)},null,8,Fe)]}),_:1},8,["label"]),i(T,{label:"Operation",width:"150",align:"center"},{default:c(s=>[i(V,{type:"icon",icon:"codicon-copy",title:"View On Dialog",onClick:R=>{E(s.row)}},null,8,["onClick"]),["list","hash","set","zset"].includes(a(e).type)?(d(),h(V,{key:0,type:"icon",icon:"codicon-edit text-base",title:"edit",style:{color:"var(--vscode-terminal-ansiYellow)"},onClick:R=>ie(s.row)},null,8,["onClick"])):_("",!0),i(V,{class:"ml-3",type:"icon",icon:"el-icon-delete text-base",style:{color:"#f56c6c"},title:"delete",onClick:R=>O(s.row)},null,8,["onClick"])]),_:1})]),_:1},8,["data","height"])])])):_("",!0)}}}),Ke=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],Oe=["B","k","M","G","T","P","E","Z","Y"],Ae=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],He=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],j=(o,t,e)=>{let l=o;return typeof t=="string"||Array.isArray(t)?l=o.toLocaleString(t,e):(t===!0||e!==void 0)&&(l=o.toLocaleString(void 0,e)),l};function Je(o,t){if(o==null||!Number.isFinite(o)&&(o=parseInt(o),!Number.isFinite(o)))return"";t={bits:!1,binary:!0,...t};const e=t.bits?t.binary?He:Ae:t.binary?Oe:Ke;if(t.signed&&o===0)return` 0 ${e[0]}`;const l=o<0,m=l?"-":t.signed?"+":"";l&&(o=-o);let g;if(t.minimumFractionDigits!==void 0&&(g={minimumFractionDigits:t.minimumFractionDigits}),t.maximumFractionDigits!==void 0&&(g={maximumFractionDigits:t.maximumFractionDigits,...g}),o<1){const p=j(o,t.locale,g);return m+p+" "+e[0]}const S=Math.min(Math.floor(t.binary?Math.log(o)/Math.log(1024):Math.log10(o)/3),e.length-1);o/=(t.binary,1024**S),g||(o=o.toPrecision(3));const k=j(Number(o),t.locale,g),I=e[S];return`${m+k}${I}`}const Ye={key:0,id:"stringPanel",class:"flex pr-4 mb-2 gap-x-3"},Ge={key:0,class:"flex"},Ze={class:"value-panel"},je=F({__name:"RedisStringView",setup(o){const t=P(),{key:e}=H(t),l=w(""),m=w("Text"),g=w(Ee),S=B(()=>{var u;return Je(((u=l.value)==null?void 0:u.length)||0)}),k=B(()=>["string","ReJSON-RL"].includes(t.key.type));window.addEventListener("keydown",u=>{k.value&&pe(u)&&u.code=="KeyS"&&I()});const I=()=>{if(!t.edit.name)return A("Key name cannot be null!");f.emit("update",{key:{name:t.key.name,newName:t.edit.name,type:t.key.type,ttl:t.edit.ttl,content:l.value}})};f.on("detailNext",()=>{p()});const p=()=>{if(!k.value)return l.value="";const u=t.edit.content,v=(u==null?void 0:u.match(/^\s*[{[]/))!=null;m.value=v?"JSON":"Text",v?y(u):l.value=u},y=u=>{var v;try{l.value=he(xe((v=u==null?void 0:u.replace)==null?void 0:v.call(u,/ /g," ")),null,2)}catch(b){console.error(b),l.value=u}};return(u,v)=>{const b=le,x=ne,K=L("vsc-button"),O=ae;return d(),z(G,null,[["string","ReJSON-RL"].includes(a(e).type)?(d(),z("div",Ye,[C("div",null," Size: "+U(S.value),1),["string","ReJSON-RL"].includes(a(e).type)?(d(),z("div",Ge,[i(x,{modelValue:m.value,"onUpdate:modelValue":v[0]||(v[0]=E=>m.value=E),placeholder:"Default",size:"small",style:{width:"145px"},class:"mr-2"},{default:c(()=>[(d(!0),z(G,null,ye(g.value,E=>(d(),h(b,{key:E,value:E},{default:c(()=>[D(U(E),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),i(K,{class:"inline",icon:"codicon codicon-save",style:{height:"27px"},onClick:I},{default:c(()=>[D("Save")]),_:1})])):_("",!0)])):_("",!0),ee(i(O,null,{default:c(()=>[C("div",Ze,[i(Ne,{ref:"cmEditor",value:l.value,"onUpdate:value":v[1]||(v[1]=E=>l.value=E),language:m.value,class:"json-panel",style:ve("height:"+a(t).remainHeight+"px")},null,8,["value","language","style"])])]),_:1},512),[[te,["string","ReJSON-RL"].includes(a(e).type)]])],64)}}}),qe=W(je,[["__scopeId","data-v-757feae2"]]),Qe={class:"redis-view-container"},We={key:0,style:{"text-align":"center"}},Xe={class:"mx-2"},St=F({__name:"RedisView",setup(o){const t=w(!0),e=P();return ke(),fe(()=>{we(100,[],l=>{e.remainHeight=l}),f.on("new",({prefix:l})=>{t.value=!1,e.key={name:l,type:ge.STRING,ttl:-1},e.edit=Z(e.key)}).on("detail",l=>{t.value=!1,e.key=l.res,e.edit=Z(l.res),f.emitImmediately("detailNext")}).on("error",l=>{A(l)}).on("success",l=>{X(l)}),f.emit("init")}),(l,m)=>(d(),z("div",Qe,[t.value?(d(),z("div",We," loading ")):_("",!0),ee(C("div",Xe,[i(Ue),i(Pe),i(qe)],512),[[te,!t.value]])]))}});export{St as default};