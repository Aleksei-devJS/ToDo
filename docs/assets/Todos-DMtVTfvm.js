import{r as f,c as W,j as r,G as ae,T as re,a as le,b as ce,d as de,e as et,u as Bt,f as ue,g as St,h as lt,i as ct,k as Rt,s as O,l as R,m as dt,n as ut,o as pe,p as fe,q as ge,B as Jt,t as $t,v as J,w as It,C as me,R as Ft,I as he}from"./index-D2z21wXs.js";function ve(t,e=166){let n;function o(...s){const i=()=>{t.apply(this,s)};clearTimeout(n),n=setTimeout(i,e)}return o.clear=()=>{clearTimeout(n)},o}function ye(t){return t&&t.ownerDocument||document}function Ot(t){return ye(t).defaultView||window}function be({controlled:t,default:e,name:n,state:o="value"}){const{current:s}=f.useRef(t!==void 0),[i,a]=f.useState(e),p=s?t:i,v=f.useCallback(c=>{s||a(c)},[]);return[p,v]}function xe(t){return typeof t=="string"}function Ce(t,e,n){return t===void 0||xe(t)?e:{...e,ownerState:{...e.ownerState,...n}}}function Se(t,e=[]){if(t===void 0)return{};const n={};return Object.keys(t).filter(o=>o.match(/^on[A-Z]/)&&typeof t[o]=="function"&&!e.includes(o)).forEach(o=>{n[o]=t[o]}),n}function Ht(t){if(t===void 0)return{};const e={};return Object.keys(t).filter(n=>!(n.match(/^on[A-Z]/)&&typeof t[n]=="function")).forEach(n=>{e[n]=t[n]}),e}function Ie(t){const{getSlotProps:e,additionalProps:n,externalSlotProps:o,externalForwardedProps:s,className:i}=t;if(!e){const y=W(n==null?void 0:n.className,i,s==null?void 0:s.className,o==null?void 0:o.className),b={...n==null?void 0:n.style,...s==null?void 0:s.style,...o==null?void 0:o.style},d={...n,...s,...o};return y.length>0&&(d.className=y),Object.keys(b).length>0&&(d.style=b),{props:d,internalRef:void 0}}const a=Se({...s,...o}),p=Ht(o),v=Ht(s),c=e(a),g=W(c==null?void 0:c.className,n==null?void 0:n.className,i,s==null?void 0:s.className,o==null?void 0:o.className),C={...c==null?void 0:c.style,...n==null?void 0:n.style,...s==null?void 0:s.style,...o==null?void 0:o.style},h={...c,...n,...v,...p};return g.length>0&&(h.className=g),Object.keys(C).length>0&&(h.style=C),{props:h,internalRef:c.ref}}function ke(t,e,n){return typeof t=="function"?t(e,n):t}function we(t){return t==null||Object.keys(t).length===0}function ze(t){const{styles:e,defaultTheme:n={}}=t,o=typeof e=="function"?s=>e(we(s)?n:s):e;return r.jsx(ae,{styles:o})}function Be(t){return Object.keys(t).length===0}function Re(t=null){const e=f.useContext(re);return!e||Be(e)?t:e}const $e=le();function je(t=$e){return Re(t)}function Ne({styles:t,themeId:e,defaultTheme:n={}}){const o=je(n),s=typeof t=="function"?t(e&&o[e]||o):t;return r.jsx(ze,{styles:s})}function _e(t){return r.jsx(Ne,{...t,defaultTheme:de,themeId:ce})}function Te(t){return function(n){return r.jsx(_e,{styles:typeof t=="function"?o=>t({theme:o,...n}):t})}}function Ee(t,e){if(!t)return e;if(typeof t=="function"||typeof e=="function")return s=>{const i=typeof e=="function"?e(s):e,a=typeof t=="function"?t({...s,...i}):t,p=W(s==null?void 0:s.className,i==null?void 0:i.className,a==null?void 0:a.className);return{...i,...a,...!!p&&{className:p},...(i==null?void 0:i.style)&&(a==null?void 0:a.style)&&{style:{...i.style,...a.style}},...(i==null?void 0:i.sx)&&(a==null?void 0:a.sx)&&{sx:[...Array.isArray(i.sx)?i.sx:[i.sx],...Array.isArray(a.sx)?a.sx:[a.sx]]}}};const n=e,o=W(n==null?void 0:n.className,t==null?void 0:t.className);return{...e,...t,...!!o&&{className:o},...(n==null?void 0:n.style)&&(t==null?void 0:t.style)&&{style:{...n.style,...t.style}},...(n==null?void 0:n.sx)&&(t==null?void 0:t.sx)&&{sx:[...Array.isArray(n.sx)?n.sx:[n.sx],...Array.isArray(t.sx)?t.sx:[t.sx]]}}}const Fe=et(r.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),Kt=et(r.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");function kt(t,e){const{className:n,elementType:o,ownerState:s,externalForwardedProps:i,internalForwardedProps:a,shouldForwardComponentProp:p=!1,...v}=e,{component:c,slots:g={[t]:void 0},slotProps:C={[t]:void 0},...h}=i,y=g[t]||o,b=ke(C[t],s),{props:{component:d,...S},internalRef:w}=Ie({className:n,...v,externalForwardedProps:t==="root"?h:void 0,externalSlotProps:b}),m=Bt(w,b==null?void 0:b.ref,e.ref),l=t==="root"?d||c:d,u=Ce(y,{...t==="root"&&!c&&!g[t]&&a,...t!=="root"&&!g[t]&&a,...S,...l&&!p&&{as:l},...l&&p&&{component:l},ref:m},s);return[y,u]}function it(t){return parseInt(t,10)||0}const Oe={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function He(t){for(const e in t)return!1;return!0}function Mt(t){return He(t)||t.outerHeightStyle===0&&!t.overflowing}const Me=f.forwardRef(function(e,n){const{onChange:o,maxRows:s,minRows:i=1,style:a,value:p,...v}=e,{current:c}=f.useRef(p!=null),g=f.useRef(null),C=Bt(n,g),h=f.useRef(null),y=f.useRef(null),b=f.useCallback(()=>{const l=g.current,u=y.current;if(!l||!u)return;const I=Ot(l).getComputedStyle(l);if(I.width==="0px")return{outerHeightStyle:0,overflowing:!1};u.style.width=I.width,u.value=l.value||e.placeholder||"x",u.value.slice(-1)===`
`&&(u.value+=" ");const A=I.boxSizing,L=it(I.paddingBottom)+it(I.paddingTop),D=it(I.borderBottomWidth)+it(I.borderTopWidth),N=u.scrollHeight;u.value="x";const E=u.scrollHeight;let x=N;i&&(x=Math.max(Number(i)*E,x)),s&&(x=Math.min(Number(s)*E,x)),x=Math.max(x,E);const j=x+(A==="border-box"?L+D:0),G=Math.abs(x-N)<=1;return{outerHeightStyle:j,overflowing:G}},[s,i,e.placeholder]),d=ue(()=>{const l=g.current,u=b();if(!l||!u||Mt(u))return!1;const z=u.outerHeightStyle;return h.current!=null&&h.current!==z}),S=f.useCallback(()=>{const l=g.current,u=b();if(!l||!u||Mt(u))return;const z=u.outerHeightStyle;h.current!==z&&(h.current=z,l.style.height=`${z}px`),l.style.overflow=u.overflowing?"hidden":""},[b]),w=f.useRef(-1);St(()=>{const l=ve(S),u=g==null?void 0:g.current;if(!u)return;const z=Ot(u);z.addEventListener("resize",l);let I;return typeof ResizeObserver<"u"&&(I=new ResizeObserver(()=>{d()&&(I.unobserve(u),cancelAnimationFrame(w.current),S(),w.current=requestAnimationFrame(()=>{I.observe(u)}))}),I.observe(u)),()=>{l.clear(),cancelAnimationFrame(w.current),z.removeEventListener("resize",l),I&&I.disconnect()}},[b,S,d]),St(()=>{S()});const m=l=>{c||S(),o&&o(l)};return r.jsxs(f.Fragment,{children:[r.jsx("textarea",{value:p,onChange:m,ref:C,rows:i,style:a,...v}),r.jsx("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:y,tabIndex:-1,style:{...Oe.shadow,...a,paddingTop:0,paddingBottom:0}})]})});function Wt(t){return typeof t=="string"}function We({props:t,states:e,muiFormControl:n}){return e.reduce((o,s)=>(o[s]=t[s],n&&typeof t[s]>"u"&&(o[s]=n[s]),o),{})}const Zt=f.createContext(void 0);function Qt(){return f.useContext(Zt)}function At(t){return t!=null&&!(Array.isArray(t)&&t.length===0)}function Ae(t,e=!1){return t&&(At(t.value)&&t.value!==""||e&&At(t.defaultValue)&&t.defaultValue!=="")}function Le(t){return ct("MuiInputBase",t)}const wt=lt("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);var Lt;const Pe=(t,e)=>{const{ownerState:n}=t;return[e.root,n.formControl&&e.formControl,n.startAdornment&&e.adornedStart,n.endAdornment&&e.adornedEnd,n.error&&e.error,n.size==="small"&&e.sizeSmall,n.multiline&&e.multiline,n.color&&e[`color${R(n.color)}`],n.fullWidth&&e.fullWidth,n.hiddenLabel&&e.hiddenLabel]},De=(t,e)=>{const{ownerState:n}=t;return[e.input,n.size==="small"&&e.inputSizeSmall,n.multiline&&e.inputMultiline,n.type==="search"&&e.inputTypeSearch,n.startAdornment&&e.inputAdornedStart,n.endAdornment&&e.inputAdornedEnd,n.hiddenLabel&&e.inputHiddenLabel]},Ge=t=>{const{classes:e,color:n,disabled:o,error:s,endAdornment:i,focused:a,formControl:p,fullWidth:v,hiddenLabel:c,multiline:g,readOnly:C,size:h,startAdornment:y,type:b}=t,d={root:["root",`color${R(n)}`,o&&"disabled",s&&"error",v&&"fullWidth",a&&"focused",p&&"formControl",h&&h!=="medium"&&`size${R(h)}`,g&&"multiline",y&&"adornedStart",i&&"adornedEnd",c&&"hiddenLabel",C&&"readOnly"],input:["input",o&&"disabled",b==="search"&&"inputTypeSearch",g&&"inputMultiline",h==="small"&&"inputSizeSmall",c&&"inputHiddenLabel",y&&"inputAdornedStart",i&&"inputAdornedEnd",C&&"readOnly"]};return dt(d,Le,e)},Ue=O("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Pe})(ut(({theme:t})=>({...t.typography.body1,color:(t.vars||t).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${wt.disabled}`]:{color:(t.vars||t).palette.text.disabled,cursor:"default"},variants:[{props:({ownerState:e})=>e.multiline,style:{padding:"4px 0 5px"}},{props:({ownerState:e,size:n})=>e.multiline&&n==="small",style:{paddingTop:1}},{props:({ownerState:e})=>e.fullWidth,style:{width:"100%"}}]}))),qe=O("input",{name:"MuiInputBase",slot:"Input",overridesResolver:De})(ut(({theme:t})=>{const e=t.palette.mode==="light",n={color:"currentColor",...t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:e?.42:.5},transition:t.transitions.create("opacity",{duration:t.transitions.duration.shorter})},o={opacity:"0 !important"},s=t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:e?.42:.5};return{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%","&::-webkit-input-placeholder":n,"&::-moz-placeholder":n,"&::-ms-input-placeholder":n,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${wt.formControl} &`]:{"&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&::-ms-input-placeholder":o,"&:focus::-webkit-input-placeholder":s,"&:focus::-moz-placeholder":s,"&:focus::-ms-input-placeholder":s},[`&.${wt.disabled}`]:{opacity:1,WebkitTextFillColor:(t.vars||t).palette.text.disabled},variants:[{props:({ownerState:i})=>!i.disableInjectingGlobalStyles,style:{animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}}},{props:{size:"small"},style:{paddingTop:1}},{props:({ownerState:i})=>i.multiline,style:{height:"auto",resize:"none",padding:0,paddingTop:0}},{props:{type:"search"},style:{MozAppearance:"textfield"}}]}})),Pt=Te({"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}),Ve=f.forwardRef(function(e,n){const o=Rt({props:e,name:"MuiInputBase"}),{"aria-describedby":s,autoComplete:i,autoFocus:a,className:p,color:v,components:c={},componentsProps:g={},defaultValue:C,disabled:h,disableInjectingGlobalStyles:y,endAdornment:b,error:d,fullWidth:S=!1,id:w,inputComponent:m="input",inputProps:l={},inputRef:u,margin:z,maxRows:I,minRows:A,multiline:L=!1,name:D,onBlur:N,onChange:E,onClick:x,onFocus:j,onKeyDown:G,onKeyUp:X,placeholder:H,readOnly:P,renderSuffix:K,rows:U,size:pt,slotProps:nt={},slots:ot={},startAdornment:q,type:st="text",value:k,..._}=o,T=l.value!=null?l.value:k,{current:ft}=f.useRef(T!=null),Z=f.useRef(),Yt=f.useCallback(B=>{},[]),te=Bt(Z,u,l.ref,Yt),[gt,mt]=f.useState(!1),$=Qt(),F=We({props:o,muiFormControl:$,states:["color","disabled","error","hiddenLabel","size","required","filled"]});F.focused=$?$.focused:gt,f.useEffect(()=>{!$&&h&&gt&&(mt(!1),N&&N())},[$,h,gt,N]);const ht=$&&$.onFilled,vt=$&&$.onEmpty,Y=f.useCallback(B=>{Ae(B)?ht&&ht():vt&&vt()},[ht,vt]);St(()=>{ft&&Y({value:T})},[T,Y,ft]);const ee=B=>{j&&j(B),l.onFocus&&l.onFocus(B),$&&$.onFocus?$.onFocus(B):mt(!0)},ne=B=>{N&&N(B),l.onBlur&&l.onBlur(B),$&&$.onBlur?$.onBlur(B):mt(!1)},oe=(B,...Tt)=>{if(!ft){const Et=B.target||Z.current;if(Et==null)throw new Error(pe(1));Y({value:Et.value})}l.onChange&&l.onChange(B,...Tt),E&&E(B,...Tt)};f.useEffect(()=>{Y(Z.current)},[]);const se=B=>{Z.current&&B.currentTarget===B.target&&Z.current.focus(),x&&x(B)};let yt=m,M=l;L&&yt==="input"&&(U?M={type:void 0,minRows:U,maxRows:U,...M}:M={type:void 0,maxRows:I,minRows:A,...M},yt=Me);const ie=B=>{Y(B.animationName==="mui-auto-fill-cancel"?Z.current:{value:"x"})};f.useEffect(()=>{$&&$.setAdornedStart(!!q)},[$,q]);const bt={...o,color:F.color||"primary",disabled:F.disabled,endAdornment:b,error:F.error,focused:F.focused,formControl:$,fullWidth:S,hiddenLabel:F.hiddenLabel,multiline:L,size:F.size,startAdornment:q,type:st},jt=Ge(bt),Nt=ot.root||c.Root||Ue,xt=nt.root||g.root||{},_t=ot.input||c.Input||qe;return M={...M,...nt.input??g.input},r.jsxs(f.Fragment,{children:[!y&&typeof Pt=="function"&&(Lt||(Lt=r.jsx(Pt,{}))),r.jsxs(Nt,{...xt,ref:n,onClick:se,..._,...!Wt(Nt)&&{ownerState:{...bt,...xt.ownerState}},className:W(jt.root,xt.className,p,P&&"MuiInputBase-readOnly"),children:[q,r.jsx(Zt.Provider,{value:null,children:r.jsx(_t,{"aria-invalid":F.error,"aria-describedby":s,autoComplete:i,autoFocus:a,defaultValue:C,disabled:F.disabled,id:w,onAnimationStart:ie,name:D,placeholder:H,readOnly:P,required:F.required,rows:U,value:T,onKeyDown:G,onKeyUp:X,type:st,...M,...!Wt(_t)&&{as:yt,ownerState:{...bt,...M.ownerState}},ref:te,className:W(jt.input,M.className,P&&"MuiInputBase-readOnly"),onBlur:ne,onChange:oe,onFocus:ee})}),b,K?K({...F,startAdornment:q}):null]})]})});function Je(t){return ct("MuiButton",t)}const V=lt("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge","loading","loadingWrapper","loadingIconPlaceholder","loadingIndicator","loadingPositionCenter","loadingPositionStart","loadingPositionEnd"]),Ke=f.createContext({}),Ze=f.createContext(void 0),Qe=t=>{const{color:e,disableElevation:n,fullWidth:o,size:s,variant:i,loading:a,loadingPosition:p,classes:v}=t,c={root:["root",a&&"loading",i,`${i}${R(e)}`,`size${R(s)}`,`${i}Size${R(s)}`,`color${R(e)}`,n&&"disableElevation",o&&"fullWidth",a&&`loadingPosition${R(p)}`],startIcon:["icon","startIcon",`iconSize${R(s)}`],endIcon:["icon","endIcon",`iconSize${R(s)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]},g=dt(c,Je,v);return{...v,...g}},Xt=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],Xe=O(Jt,{shouldForwardProp:t=>$t(t)||t==="classes",name:"MuiButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],e[`${n.variant}${R(n.color)}`],e[`size${R(n.size)}`],e[`${n.variant}Size${R(n.size)}`],n.color==="inherit"&&e.colorInherit,n.disableElevation&&e.disableElevation,n.fullWidth&&e.fullWidth,n.loading&&e.loading]}})(ut(({theme:t})=>{const e=t.palette.mode==="light"?t.palette.grey[300]:t.palette.grey[800],n=t.palette.mode==="light"?t.palette.grey.A100:t.palette.grey[700];return{...t.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${V.disabled}`]:{color:(t.vars||t).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(t.vars||t).shadows[2],"&:hover":{boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2]}},"&:active":{boxShadow:(t.vars||t).shadows[8]},[`&.${V.focusVisible}`]:{boxShadow:(t.vars||t).shadows[6]},[`&.${V.disabled}`]:{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${V.disabled}`]:{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(t.palette).filter(It()).map(([o])=>({props:{color:o},style:{"--variant-textColor":(t.vars||t).palette[o].main,"--variant-outlinedColor":(t.vars||t).palette[o].main,"--variant-outlinedBorder":t.vars?`rgba(${t.vars.palette[o].mainChannel} / 0.5)`:J(t.palette[o].main,.5),"--variant-containedColor":(t.vars||t).palette[o].contrastText,"--variant-containedBg":(t.vars||t).palette[o].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(t.vars||t).palette[o].dark,"--variant-textBg":t.vars?`rgba(${t.vars.palette[o].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:J(t.palette[o].main,t.palette.action.hoverOpacity),"--variant-outlinedBorder":(t.vars||t).palette[o].main,"--variant-outlinedBg":t.vars?`rgba(${t.vars.palette[o].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:J(t.palette[o].main,t.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":t.vars?t.vars.palette.Button.inheritContainedBg:e,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":t.vars?t.vars.palette.Button.inheritContainedHoverBg:n,"--variant-textBg":t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:J(t.palette.text.primary,t.palette.action.hoverOpacity),"--variant-outlinedBg":t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:J(t.palette.text.primary,t.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:t.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:t.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:t.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:t.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:t.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:t.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${V.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${V.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{loadingPosition:"center"},style:{transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),[`&.${V.loading}`]:{color:"transparent"}}}]}})),Ye=O("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.startIcon,n.loading&&e.startIconLoadingStart,e[`iconSize${R(n.size)}`]]}})(({theme:t})=>({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},{props:{loadingPosition:"start",loading:!0},style:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"start",loading:!0,fullWidth:!0},style:{marginRight:-8}},...Xt]})),tn=O("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.endIcon,n.loading&&e.endIconLoadingEnd,e[`iconSize${R(n.size)}`]]}})(({theme:t})=>({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},{props:{loadingPosition:"end",loading:!0},style:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"end",loading:!0,fullWidth:!0},style:{marginLeft:-8}},...Xt]})),en=O("span",{name:"MuiButton",slot:"LoadingIndicator",overridesResolver:(t,e)=>e.loadingIndicator})(({theme:t})=>({display:"none",position:"absolute",visibility:"visible",variants:[{props:{loading:!0},style:{display:"flex"}},{props:{loadingPosition:"start"},style:{left:14}},{props:{loadingPosition:"start",size:"small"},style:{left:10}},{props:{variant:"text",loadingPosition:"start"},style:{left:6}},{props:{loadingPosition:"center"},style:{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled}},{props:{loadingPosition:"end"},style:{right:14}},{props:{loadingPosition:"end",size:"small"},style:{right:10}},{props:{variant:"text",loadingPosition:"end"},style:{right:6}},{props:{loadingPosition:"start",fullWidth:!0},style:{position:"relative",left:-10}},{props:{loadingPosition:"end",fullWidth:!0},style:{position:"relative",right:-10}}]})),Dt=O("span",{name:"MuiButton",slot:"LoadingIconPlaceholder",overridesResolver:(t,e)=>e.loadingIconPlaceholder})({display:"inline-block",width:"1em",height:"1em"}),tt=f.forwardRef(function(e,n){const o=f.useContext(Ke),s=f.useContext(Ze),i=fe(o,e),a=Rt({props:i,name:"MuiButton"}),{children:p,color:v="primary",component:c="button",className:g,disabled:C=!1,disableElevation:h=!1,disableFocusRipple:y=!1,endIcon:b,focusVisibleClassName:d,fullWidth:S=!1,id:w,loading:m=null,loadingIndicator:l,loadingPosition:u="center",size:z="medium",startIcon:I,type:A,variant:L="text",...D}=a,N=ge(w),E=l??r.jsx(me,{"aria-labelledby":N,color:"inherit",size:16}),x={...a,color:v,component:c,disabled:C,disableElevation:h,disableFocusRipple:y,fullWidth:S,loading:m,loadingIndicator:E,loadingPosition:u,size:z,type:A,variant:L},j=Qe(x),G=(I||m&&u==="start")&&r.jsx(Ye,{className:j.startIcon,ownerState:x,children:I||r.jsx(Dt,{className:j.loadingIconPlaceholder,ownerState:x})}),X=(b||m&&u==="end")&&r.jsx(tn,{className:j.endIcon,ownerState:x,children:b||r.jsx(Dt,{className:j.loadingIconPlaceholder,ownerState:x})}),H=s||"",P=typeof m=="boolean"?r.jsx("span",{className:j.loadingWrapper,style:{display:"contents"},children:m&&r.jsx(en,{className:j.loadingIndicator,ownerState:x,children:E})}):null;return r.jsxs(Xe,{ownerState:x,className:W(o.className,j.root,g,H),component:c,disabled:C||m,focusRipple:!y,focusVisibleClassName:W(j.focusVisible,d),ref:n,type:A,id:m?N:w,...D,classes:j,children:[G,u!=="end"&&P,p,u==="end"&&P,X]})});function nn(t){return ct("PrivateSwitchBase",t)}lt("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const on=t=>{const{classes:e,checked:n,disabled:o,edge:s}=t,i={root:["root",n&&"checked",o&&"disabled",s&&`edge${R(s)}`],input:["input"]};return dt(i,nn,e)},sn=O(Jt)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:t,ownerState:e})=>t==="start"&&e.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:t,ownerState:e})=>t==="end"&&e.size!=="small",style:{marginRight:-12}}]}),an=O("input",{shouldForwardProp:$t})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),rn=f.forwardRef(function(e,n){const{autoFocus:o,checked:s,checkedIcon:i,defaultChecked:a,disabled:p,disableFocusRipple:v=!1,edge:c=!1,icon:g,id:C,inputProps:h,inputRef:y,name:b,onBlur:d,onChange:S,onFocus:w,readOnly:m,required:l=!1,tabIndex:u,type:z,value:I,slots:A={},slotProps:L={},...D}=e,[N,E]=be({controlled:s,default:!!a,name:"SwitchBase",state:"checked"}),x=Qt(),j=k=>{w&&w(k),x&&x.onFocus&&x.onFocus(k)},G=k=>{d&&d(k),x&&x.onBlur&&x.onBlur(k)},X=k=>{if(k.nativeEvent.defaultPrevented)return;const _=k.target.checked;E(_),S&&S(k,_)};let H=p;x&&typeof H>"u"&&(H=x.disabled);const P=z==="checkbox"||z==="radio",K={...e,checked:N,disabled:H,disableFocusRipple:v,edge:c},U=on(K),pt={slots:A,slotProps:{input:h,...L}},[nt,ot]=kt("root",{ref:n,elementType:sn,className:U.root,shouldForwardComponentProp:!0,externalForwardedProps:{...pt,component:"span",...D},getSlotProps:k=>({...k,onFocus:_=>{var T;(T=k.onFocus)==null||T.call(k,_),j(_)},onBlur:_=>{var T;(T=k.onBlur)==null||T.call(k,_),G(_)}}),ownerState:K,additionalProps:{centerRipple:!0,focusRipple:!v,disabled:H,role:void 0,tabIndex:null}}),[q,st]=kt("input",{ref:y,elementType:an,className:U.input,externalForwardedProps:pt,getSlotProps:k=>({onChange:_=>{var T;(T=k.onChange)==null||T.call(k,_),X(_)}}),ownerState:K,additionalProps:{autoFocus:o,checked:s,defaultChecked:a,disabled:H,id:P?C:void 0,name:b,readOnly:m,required:l,tabIndex:u,type:z,...z==="checkbox"&&I===void 0?{}:{value:I}}});return r.jsxs(nt,{...ot,children:[r.jsx(q,{...st}),N?i:g]})}),ln=et(r.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),cn=et(r.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),dn=et(r.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function un(t){return ct("MuiCheckbox",t)}const Ct=lt("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),pn=t=>{const{classes:e,indeterminate:n,color:o,size:s}=t,i={root:["root",n&&"indeterminate",`color${R(o)}`,`size${R(s)}`]},a=dt(i,un,e);return{...e,...a}},fn=O(rn,{shouldForwardProp:t=>$t(t)||t==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.indeterminate&&e.indeterminate,e[`size${R(n.size)}`],n.color!=="default"&&e[`color${R(n.color)}`]]}})(ut(({theme:t})=>({color:(t.vars||t).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:J(t.palette.action.active,t.palette.action.hoverOpacity)}}},...Object.entries(t.palette).filter(It()).map(([e])=>({props:{color:e,disableRipple:!1},style:{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:J(t.palette[e].main,t.palette.action.hoverOpacity)}}})),...Object.entries(t.palette).filter(It()).map(([e])=>({props:{color:e},style:{[`&.${Ct.checked}, &.${Ct.indeterminate}`]:{color:(t.vars||t).palette[e].main},[`&.${Ct.disabled}`]:{color:(t.vars||t).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),gn=r.jsx(cn,{}),mn=r.jsx(ln,{}),hn=r.jsx(dn,{}),vn=f.forwardRef(function(e,n){const o=Rt({props:e,name:"MuiCheckbox"}),{checkedIcon:s=gn,color:i="primary",icon:a=mn,indeterminate:p=!1,indeterminateIcon:v=hn,inputProps:c,size:g="medium",disableRipple:C=!1,className:h,slots:y={},slotProps:b={},...d}=o,S=p?v:a,w=p?v:s,m={...o,disableRipple:C,color:i,indeterminate:p,size:g},l=pn(m),u=b.input??c,[z,I]=kt("root",{ref:n,elementType:fn,className:W(l.root,h),shouldForwardComponentProp:!0,externalForwardedProps:{slots:y,slotProps:b,...d},ownerState:m,additionalProps:{type:"checkbox",icon:f.cloneElement(S,{fontSize:S.props.fontSize??g}),checkedIcon:f.cloneElement(w,{fontSize:w.props.fontSize??g}),disableRipple:C,slots:y,slotProps:{input:Ee(typeof u=="function"?u(m):u,{"data-indeterminate":p})}}});return r.jsx(z,{...I,classes:l})}),yn="_container_kitj3_1",bn={container:yn},xn="_addForm_1yceq_1",Cn="_input_costom_1yceq_8",Gt={addForm:xn,input_costom:Cn},Ut=t=>{let e;const n=new Set,o=(c,g)=>{const C=typeof c=="function"?c(e):c;if(!Object.is(C,e)){const h=e;e=g??(typeof C!="object"||C===null)?C:Object.assign({},e,C),n.forEach(y=>y(e,h))}},s=()=>e,p={setState:o,getState:s,getInitialState:()=>v,subscribe:c=>(n.add(c),()=>n.delete(c))},v=e=t(o,s,p);return p},Sn=t=>t?Ut(t):Ut,In=t=>t;function kn(t,e=In){const n=Ft.useSyncExternalStore(t.subscribe,()=>e(t.getState()),()=>e(t.getInitialState()));return Ft.useDebugValue(n),n}const qt=t=>{const e=Sn(t),n=o=>kn(e,o);return Object.assign(n,e),n},wn=t=>t?qt(t):qt;function zn(t,e){let n;try{n=t()}catch{return}return{getItem:s=>{var i;const a=v=>v===null?null:JSON.parse(v,void 0),p=(i=n.getItem(s))!=null?i:null;return p instanceof Promise?p.then(a):a(p)},setItem:(s,i)=>n.setItem(s,JSON.stringify(i,void 0)),removeItem:s=>n.removeItem(s)}}const zt=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(o){return zt(o)(n)},catch(o){return this}}}catch(n){return{then(o){return this},catch(o){return zt(o)(n)}}}},Bn=(t,e)=>(n,o,s)=>{let i={storage:zn(()=>localStorage),partialize:d=>d,version:0,merge:(d,S)=>({...S,...d}),...e},a=!1;const p=new Set,v=new Set;let c=i.storage;if(!c)return t((...d)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...d)},o,s);const g=()=>{const d=i.partialize({...o()});return c.setItem(i.name,{state:d,version:i.version})},C=s.setState;s.setState=(d,S)=>{C(d,S),g()};const h=t((...d)=>{n(...d),g()},o,s);s.getInitialState=()=>h;let y;const b=()=>{var d,S;if(!c)return;a=!1,p.forEach(m=>{var l;return m((l=o())!=null?l:h)});const w=((S=i.onRehydrateStorage)==null?void 0:S.call(i,(d=o())!=null?d:h))||void 0;return zt(c.getItem.bind(c))(i.name).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==i.version){if(i.migrate){const l=i.migrate(m.state,m.version);return l instanceof Promise?l.then(u=>[!0,u]):[!0,l]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,m.state];return[!1,void 0]}).then(m=>{var l;const[u,z]=m;if(y=i.merge(z,(l=o())!=null?l:h),n(y,!0),u)return g()}).then(()=>{w==null||w(y,void 0),y=o(),a=!0,v.forEach(m=>m(y))}).catch(m=>{w==null||w(void 0,m)})};return s.persist={setOptions:d=>{i={...i,...d},d.storage&&(c=d.storage)},clearStorage:()=>{c==null||c.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>b(),hasHydrated:()=>a,onHydrate:d=>(p.add(d),()=>{p.delete(d)}),onFinishHydration:d=>(v.add(d),()=>{v.delete(d)})},i.skipHydration||b(),y||h},Rn=Bn,Q=wn(Rn(t=>({tasks:[],filter:"all",addTask:e=>t(n=>({tasks:[{id:Date.now().toString(),title:e,status:"active"},...n.tasks]})),deleteTask:e=>t(n=>({tasks:n.tasks.filter(o=>o.id!==e)})),changeStatus:e=>t(n=>({tasks:n.tasks.map(o=>o.id===e?{...o,status:o.status==="active"?"done":"active"}:o)})),setFilter:e=>{t({filter:e})},clearDone:()=>t(e=>({tasks:e.tasks.filter(n=>n.status!=="done")}))}),{name:"tasks-session-storage",storage:{getItem:t=>{const e=sessionStorage.getItem(t);return e?JSON.parse(e):null},setItem:(t,e)=>sessionStorage.setItem(t,JSON.stringify(e)),removeItem:t=>sessionStorage.removeItem(t)}}));function $n(){const[t,e]=f.useState(""),n=f.useRef(null),o=Q(a=>a.addTask),s=()=>{const a=t.trim();n.current&&n.current.focus(),a&&o(a),e("")},i=a=>{a.key==="Enter"&&(a.preventDefault(),s())};return r.jsxs("div",{className:Gt.addForm,children:[r.jsx("div",{className:Gt.input_costom,children:r.jsx(Ve,{inputProps:{ref:n},type:"text",value:t,onKeyDown:a=>i(a),onChange:a=>e(a.currentTarget.value),color:"primary",fullWidth:!0,multiline:!0,placeholder:"Напиши задачу..."})}),r.jsx(tt,{onClick:()=>s(),color:"inherit",variant:"outlined",size:"small",endIcon:r.jsx(Fe,{}),children:"Добавить задачу"})]})}const jn="_task_1sbb1_1",Nn="_title_1sbb1_19",at={task:jn,title:Nn,"title--done":"_title--done_1sbb1_23","title--active":"_title--active_1sbb1_27"};function _n({task:t}){const{deleteTask:e,changeStatus:n}=Q(s=>s),o=()=>{n(t.id)};return r.jsxs("div",{className:at.task,children:[r.jsx(vn,{checked:t.status==="done",onClick:o,color:"secondary"}),r.jsx("span",{className:`${at.title} ${t.status==="done"?at["title--done"]:at["title--active"]}`,children:t.title}),r.jsx(he,{onClick:()=>e(t.id),children:r.jsx(Kt,{})})]})}const Tn="_task_list_1n079_1",Vt={task_list:Tn},En="_menu_1y104_1",Fn="_menu_left_1y104_8",On="_menu_right_1y104_14",Hn="_word_1y104_19",rt={menu:En,menu_left:Fn,menu_right:On,word:Hn};function Mn(){const{setFilter:t,clearDone:e}=Q(a=>a),[n,o]=f.useState("задач"),s=Q(a=>a.tasks),i=f.useMemo(()=>{const a=s.filter(p=>p.status!=="done").length;switch(a){case 1:o("задача");break;case 2:case 3:case 4:o("задачи");break;default:o("задач")}return a},[s]);return r.jsxs("div",{className:rt.menu,children:[r.jsxs("div",{className:rt.menu_left,children:[r.jsx("span",{className:rt.word,children:`${i} ${n}`}),r.jsx(tt,{size:"small",color:"inherit",onClick:()=>t("all"),children:"Все"}),r.jsx(tt,{size:"small",color:"inherit",onClick:()=>t("done"),children:"Выполненные"}),r.jsx(tt,{size:"small",color:"inherit",onClick:()=>t("active"),children:"Активные"})]}),r.jsx("div",{className:rt.menu_right,children:r.jsx(tt,{size:"small",variant:"outlined",color:"inherit",endIcon:r.jsx(Kt,{}),onClick:()=>e(),children:"Очистить выполненные"})})]})}function Wn(){const t=Q(o=>o.tasks),e=Q(o=>o.filter),n=f.useMemo(()=>e==="all"?t:t.filter(o=>o.status===e),[t,e]);return r.jsxs("div",{className:Vt.task_list,children:[r.jsx("div",{className:Vt.menu,children:r.jsx(Mn,{})}),n.map(o=>r.jsx(_n,{task:o},o.id))]})}function Ln(){return r.jsxs("div",{className:bn.container,children:[r.jsx($n,{}),r.jsx(Wn,{})]})}export{Ln as default};
