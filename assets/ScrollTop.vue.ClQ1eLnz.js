import"./VContainer.fY8RBHoi.js";import{c as p}from"./VDivider.sxD866IY.js";import{V as d}from"./VBtn.G7WhWvso.js";import{n as m,r as f,o as a,c as l,L as v,s as _,x as S}from"./entry.bQHXzxoY.js";const x=p("v-spacer","div","VSpacer");function i(e,o){const{self:c=!1}=o.modifiers??{},t=o.value,n=typeof t=="object"&&t.options||{passive:!0},r=typeof t=="function"||"handleEvent"in t?t:t.handler,s=c?e:o.arg?document.querySelector(o.arg):window;s&&(s.addEventListener("scroll",r,n),e._onScroll=Object(e._onScroll),e._onScroll[o.instance.$.uid]={handler:r,options:n,target:c?void 0:s})}function u(e,o){var r;if(!((r=e._onScroll)!=null&&r[o.instance.$.uid]))return;const{handler:c,options:t,target:n=e}=e._onScroll[o.instance.$.uid];n.removeEventListener("scroll",c,t),delete e._onScroll[o.instance.$.uid]}function h(e,o){o.value!==o.oldValue&&(u(e,o),i(e,o))}const V={mounted:i,unmounted:u,updated:h},w={class:"scroll"},k={class:"ma-4"},C=m({__name:"ScrollTop",setup(e){const o=f(!1),c=()=>{o.value=window.scrollY>200},t=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})};return(n,r)=>(a(),l("div",w,[v((a(),l("div",k,[o.value?(a(),_(d,{key:0,icon:"mdi-chevron-up",variant:"elevated",onClick:t})):S("",!0)])),[[V,c]])]))}});export{x as V,C as _};
