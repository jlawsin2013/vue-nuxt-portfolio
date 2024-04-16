import{_ as J}from"./nuxt-img.X5VjCx3f.js";import{V as K,_ as ee}from"./ScrollTop.vue.ClQ1eLnz.js";import{g as N,m as $,h as Y,j as A,u as M,b as a,i as te,l as C,k as ae,aa as le,I as k,f,a1 as G,O as z,r as B,P as oe,C as E,q as ne,K as se,at as ie,A as re,ai as ue,au as ce,av as de,E as W,J as me,n as X,o as g,s as w,w as n,c as V,Q as P,F as S,d as D,t as R,a as Q,_ as ve,aw as ge}from"./entry.bQHXzxoY.js";import{m as fe,b as he,e as pe,u as _e,g as be,j as ye,q as F,l as xe,V as H}from"./VBtn.G7WhWvso.js";import{a as ke,b as Ve,c as Se,d as Te}from"./VMenu.sT96509i.js";import{V as p}from"./VContainer.fY8RBHoi.js";import{e as Be}from"./forwardRefs.66GvC6XB.js";import{u as we}from"./VIcon.wHS4FbDm.js";import{V as Ie}from"./VImg.QrwulYHM.js";import{V as j,a as U}from"./VRow.pQ8y_W8K.js";import"./vue.f36acd1f.wJne0wUQ.js";import"./VDivider.sxD866IY.js";const Le=N({text:String,...$(),...Y()},"VToolbarTitle"),Pe=A()({name:"VToolbarTitle",props:Le(),setup(e,u){let{slots:t}=u;return M(()=>{const i=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var o;return[i&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(o=t.default)==null?void 0:o.call(t)])]}})}),{}}}),Ce=[null,"prominent","default","comfortable","compact"],Z=N({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Ce.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...fe(),...$(),...he(),...pe(),...Y({tag:"header"}),...te()},"VToolbar"),O=A()({name:"VToolbar",props:Z(),setup(e,u){var d;let{slots:t}=u;const{backgroundColorClasses:i,backgroundColorStyles:o}=we(C(e,"color")),{borderClasses:l}=_e(e),{elevationClasses:c}=be(e),{roundedClasses:s}=ye(e),{themeClasses:m}=ae(e),{rtlClasses:_}=le(),v=k(!!(e.extended||(d=t.extension)!=null&&d.call(t))),b=f(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=f(()=>v.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return G({VBtn:{variant:"text"}}),M(()=>{var r;const y=!!(e.title||t.title),T=!!(t.image||e.image),q=(r=t.extension)==null?void 0:r.call(t);return v.value=!!(e.extended||q),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},i.value,l.value,c.value,s.value,m.value,_.value,e.class],style:[o.value,e.style]},{default:()=>[T&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(F,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(Ie,{key:"image-img",cover:!0,src:e.image},null)]),a(F,{defaults:{VTabs:{height:z(b.value)}}},{default:()=>{var x,I,L;return[a("div",{class:"v-toolbar__content",style:{height:z(b.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(x=t.prepend)==null?void 0:x.call(t)]),y&&a(Pe,{key:"title",text:e.title},{text:t.title}),(I=t.default)==null?void 0:I.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(L=t.append)==null?void 0:L.call(t)])])]}}),a(F,{defaults:{VTabs:{height:z(h.value)}}},{default:()=>[a(Be,null,{default:()=>[v.value&&a("div",{class:"v-toolbar__extension",style:{height:z(h.value)}},[q])]})]})]})}),{contentHeight:b,extensionHeight:h}}}),Ne=N({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function qe(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=u;let i=0;const o=B(null),l=k(0),c=k(0),s=k(0),m=k(!1),_=k(!1),v=f(()=>Number(e.scrollThreshold)),b=f(()=>oe((v.value-l.value)/v.value||0)),h=()=>{const d=o.value;!d||t&&!t.value||(i=l.value,l.value="window"in d?d.pageYOffset:d.scrollTop,_.value=l.value<i,s.value=Math.abs(l.value-v.value))};return E(_,()=>{c.value=c.value||l.value}),E(m,()=>{c.value=0}),ne(()=>{E(()=>e.scrollTarget,d=>{var T;const y=d?document.querySelector(d):window;y&&y!==o.value&&((T=o.value)==null||T.removeEventListener("scroll",h),o.value=y,o.value.addEventListener("scroll",h,{passive:!0}))},{immediate:!0})}),se(()=>{var d;(d=o.value)==null||d.removeEventListener("scroll",h)}),t&&E(t,h,{immediate:!0}),{scrollThreshold:v,currentScroll:l,currentThreshold:s,isScrollActive:m,scrollRatio:b,isScrollingUp:_,savedScroll:c}}const ze=N({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Z(),...ie(),...Ne(),height:{type:[Number,String],default:64}},"VAppBar"),Ee=A()({name:"VAppBar",props:ze(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:t}=u;const i=B(),o=re(e,"modelValue"),l=f(()=>{var x;const r=new Set(((x=e.scrollBehavior)==null?void 0:x.split(" "))??[]);return{hide:r.has("hide"),inverted:r.has("inverted"),collapse:r.has("collapse"),elevate:r.has("elevate"),fadeImage:r.has("fade-image")}}),c=f(()=>{const r=l.value;return r.hide||r.inverted||r.collapse||r.elevate||r.fadeImage||!o.value}),{currentScroll:s,scrollThreshold:m,isScrollingUp:_,scrollRatio:v}=qe(e,{canScroll:c}),b=f(()=>e.collapse||l.value.collapse&&(l.value.inverted?v.value>0:v.value===0)),h=f(()=>e.flat||l.value.elevate&&(l.value.inverted?s.value>0:s.value===0)),d=f(()=>l.value.fadeImage?l.value.inverted?1-v.value:v.value:void 0),y=f(()=>{var I,L;if(l.value.hide&&l.value.inverted)return 0;const r=((I=i.value)==null?void 0:I.contentHeight)??0,x=((L=i.value)==null?void 0:L.extensionHeight)??0;return r+x});ue(f(()=>!!e.scrollBehavior),()=>{me(()=>{l.value.hide?l.value.inverted?o.value=s.value>m.value:o.value=_.value||s.value<m.value:o.value=!0})});const{ssrBootStyles:T}=ce(),{layoutItemStyles:q}=de({id:e.name,order:f(()=>parseInt(e.order,10)),position:C(e,"location"),layoutSize:y,elementSize:k(void 0),active:o,absolute:C(e,"absolute")});return M(()=>{const r=O.filterProps(e);return a(O,W({ref:i,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...q.value,"--v-toolbar-image-opacity":d.value,height:void 0,...T.value},e.style]},r,{collapse:b.value,flat:h.value}),t)}),{}}}),He=N({...$(),...xe({variant:"text"})},"VToolbarItems"),Re=A()({name:"VToolbarItems",props:He(),setup(e,u){let{slots:t}=u;return G({VBtn:{color:C(e,"color"),height:"inherit",variant:C(e,"variant")}}),M(()=>{var i;return a("div",{class:["v-toolbar-items",e.class],style:e.style},[(i=t.default)==null?void 0:i.call(t)])}),{}}}),Ae=X({__name:"MainHeader",setup(e){const u=B([{title:"Support me",link:"/products",icon:"mdi-cart"},{title:"Lets connect",link:"/contact",icon:"mdi-human-greeting"},{title:"Take a photo",link:"/camera",icon:"mdi-camera"}]);return(t,i)=>{const o=J;return g(),w(Ee,{flat:"",color:"#1a1a1a","scroll-behavior":"hide"},{default:n(()=>[a(p,{class:"d-flex align-center justify-center"},{default:n(()=>[a(o,{src:"/logo/header.png",quality:"80",sizes:"sm:35vw md:100px lg:200px",to:"/"}),a(K),a(Re,{class:"hidden-sm-and-down"},{default:n(()=>[(g(!0),V(S,null,P(u.value,(l,c)=>(g(),w(H,{key:c,"prepend-icon":l.icon,to:l.link,variant:"plain",class:"text-white"},{default:n(()=>[D(R(l.title),1)]),_:2},1032,["prepend-icon","to"]))),128))]),_:1}),a(ke,null,{activator:n(({props:l})=>[a(H,W(l,{icon:"mdi-dots-vertical",variant:"plain",color:"#ffffff",class:"hidden-md-and-up"}),null,16)]),default:n(()=>[a(Ve,{theme:"dark"},{default:n(()=>[(g(!0),V(S,null,P(u.value,(l,c)=>(g(),w(Se,{key:c,value:c},{default:n(()=>[a(Te,null,{default:n(()=>[a(H,{variant:"plain","prepend-icon":l.icon,to:l.link,class:"text-white",nuxt:""},{default:n(()=>[D(R(l.title),1)]),_:2},1032,["prepend-icon","to"])]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})}}}),Me={class:"text-caption text-uppercase text-yellow"},Fe={class:"text-h6 text-white pt-3"},De=Q("p",{class:"text-copyright text-grey"},"All rights reserved",-1),Qe=X({__name:"MainFooter",setup(e){const u=B([{id:"1",link:"/#",icon:"mdi-gmail"},{id:"2",link:"/#",icon:"mdi-linkedin"},{id:"3",link:"/#",icon:"mdi-instagram"},{id:"4",link:"/#",icon:"mdi-facebook"}]),t=B([{id:"1",title:"Lorem ipsum dolor.",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id."},{id:"2",title:"Lorem ipsum dolor.",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id."},{id:"3",title:"Lorem ipsum dolor.",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id."},{id:"4",title:"Lorem ipsum dolor.",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id."}]),i=B([{image:"/images/spring.svg",size:"100",alt:"java logo"},{image:"/images/github.png",size:"70",alt:"github logo"},{image:"/images/nuxt.svg",size:"90",alt:"nuxt logo"},{image:"/images/vue.svg",size:"35",alt:"vue logo"},{image:"/images/vuetify.svg",size:"110",alt:"vuetify logo"},{image:"/images/typescript.svg",size:"30",alt:"typescript logo"}]);return(o,l)=>{const c=J;return g(),V(S,null,[a(p,{class:"bg-color-gradient",fluid:""},{default:n(()=>[a(p,null,{default:n(()=>[a(j,null,{default:n(()=>[(g(!0),V(S,null,P(i.value,(s,m)=>(g(),w(U,{class:"d-flex flex-column align-center",key:m},{default:n(()=>[a(c,{src:s.image,width:s.size,alt:s.alt},null,8,["src","width","alt"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),a(p,{class:"bg-color-dark",fluid:""},{default:n(()=>[a(p,{class:"text-h4 text-white"},{default:n(()=>[D(" Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ")]),_:1}),a(p,null,{default:n(()=>[a(j,null,{default:n(()=>[(g(!0),V(S,null,P(t.value,(s,m)=>(g(),w(U,{key:m},{default:n(()=>[Q("p",Me,R(s.title),1),Q("p",Fe,R(s.description),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),a(p,{class:"d-flex flex-column bg-color-dark py-0",fluid:""},{default:n(()=>[a(p,{class:"d-flex w-100 align-center"},{default:n(()=>[De,a(K),(g(!0),V(S,null,P(u.value,(s,m)=>(g(),w(H,{key:m,to:s.link,icon:s.icon,variant:"plain",size:"small",color:"#ffffff"},null,8,["to","icon"]))),128))]),_:1})]),_:1})],64)}}}),$e={};function je(e,u){const t=Ae,i=Qe,o=ee;return g(),V(S,null,[a(t),ge(e.$slots,"default"),a(i),a(o)],64)}const lt=ve($e,[["render",je]]);export{lt as default};
