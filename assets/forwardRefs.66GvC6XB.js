import{g as w,a0 as _,m as V,h as T,i as A,j as x,k as C,u as B,b as y,aL as O,ay as b,aM as S,aN as W}from"./entry.bQHXzxoY.js";import{k as E,e as L,l as $,n as z,o as F,j as I,p as D}from"./VBtn.G7WhWvso.js";import{m as j,b as M,V as H}from"./VIcon.wHS4FbDm.js";import{V as q}from"./VImg.QrwulYHM.js";class g{constructor(o){let{x:a,y:i,width:r,height:s}=o;this.x=a,this.y=i,this.width=r,this.height=s}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Q(e,o){return{x:{before:Math.max(0,o.left-e.left),after:Math.max(0,e.right-o.right)},y:{before:Math.max(0,o.top-e.top),after:Math.max(0,e.bottom-o.bottom)}}}function U(e){return Array.isArray(e)?new g({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function Z(e){const o=e.getBoundingClientRect(),a=getComputedStyle(e),i=a.transform;if(i){let r,s,t,n,l;if(i.startsWith("matrix3d("))r=i.slice(9,-1).split(/, /),s=+r[0],t=+r[5],n=+r[12],l=+r[13];else if(i.startsWith("matrix("))r=i.slice(7,-1).split(/, /),s=+r[0],t=+r[3],n=+r[4],l=+r[5];else return new g(o);const f=a.transformOrigin,d=o.x-n-(1-s)*parseFloat(f),c=o.y-l-(1-t)*parseFloat(f.slice(f.indexOf(" ")+1)),h=s?o.width/s:e.offsetWidth+1,m=t?o.height/t:e.offsetHeight+1;return new g({x:d,y:c,width:h,height:m})}else return new g(o)}function k(e,o,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(o,a)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(r=>{i.onfinish=()=>{r(i)}})),i}const tt="cubic-bezier(0.4, 0, 0.2, 1)",et="cubic-bezier(0.0, 0, 0.2, 1)",nt="cubic-bezier(0.4, 0, 1, 1)",N=w({start:Boolean,end:Boolean,icon:_,image:String,text:String,...V(),...E(),...L(),...j(),...T(),...A(),...$({variant:"flat"})},"VAvatar"),st=x()({name:"VAvatar",props:N(),setup(e,o){let{slots:a}=o;const{themeClasses:i}=C(e),{colorClasses:r,colorStyles:s,variantClasses:t}=z(e),{densityClasses:n}=F(e),{roundedClasses:l}=I(e),{sizeClasses:f,sizeStyles:d}=M(e);return B(()=>y(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},i.value,r.value,n.value,l.value,f.value,t.value,e.class],style:[s.value,d.value,e.style]},{default:()=>{var c;return[e.image?y(q,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?y(H,{key:"icon",icon:e.icon},null):((c=a.default)==null?void 0:c.call(a))??e.text,D(!1,"v-avatar")]}})),{}}}),G=w({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function u(e,o,a){return x()({name:e,props:G({mode:a,origin:o}),setup(i,r){let{slots:s}=r;const t={onBeforeEnter(n){i.origin&&(n.style.transformOrigin=i.origin)},onLeave(n){if(i.leaveAbsolute){const{offsetTop:l,offsetLeft:f,offsetWidth:d,offsetHeight:c}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${l}px`,n.style.left=`${f}px`,n.style.width=`${d}px`,n.style.height=`${c}px`}i.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(i.leaveAbsolute&&(n!=null&&n._transitionInitialStyles)){const{position:l,top:f,left:d,width:c,height:h}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=l||"",n.style.top=f||"",n.style.left=d||"",n.style.width=c||"",n.style.height=h||""}}};return()=>{const n=i.group?O:b;return S(n,{name:i.disabled?"":e,css:!i.disabled,...i.group?void 0:{mode:i.mode},...i.disabled?{}:t},s.default)}}})}function P(e,o){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return x()({name:e,props:{mode:{type:String,default:a},disabled:Boolean},setup(i,r){let{slots:s}=r;return()=>S(b,{name:i.disabled?"":e,css:!i.disabled,...i.disabled?{}:o},s.default)}})}function R(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const a=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",i=W(`offset-${a}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[a]:t.style[a]}},onEnter(t){const n=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const l=`${t[i]}px`;t.style[a]="0",t.offsetHeight,t.style.transition=n.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame(()=>{t.style[a]=l})},onAfterEnter:s,onEnterCancelled:s,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[a]:t.style[a]},t.style.overflow="hidden",t.style[a]=`${t[i]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[a]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(t){e&&t._parent&&t._parent.classList.remove(e),s(t)}function s(t){const n=t._initialStyle[a];t.style.overflow=t._initialStyle.overflow,n!=null&&(t.style[a]=n),delete t._initialStyle}}u("fab-transition","center center","out-in");u("dialog-bottom-transition");u("dialog-top-transition");const it=u("fade-transition");u("scale-transition");u("scroll-x-transition");u("scroll-x-reverse-transition");u("scroll-y-transition");u("scroll-y-reverse-transition");u("slide-x-transition");u("slide-x-reverse-transition");const at=u("slide-y-transition");u("slide-y-reverse-transition");const rt=P("expand-transition",R()),ot=P("expand-x-transition",R("",!0)),v=Symbol("Forwarded refs");function p(e,o){let a=e;for(;a;){const i=Reflect.getOwnPropertyDescriptor(a,o);if(i)return i;a=Object.getPrototypeOf(a)}}function lt(e){for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];return e[v]=a,new Proxy(e,{get(r,s){if(Reflect.has(r,s))return Reflect.get(r,s);if(!(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))){for(const t of a)if(t.value&&Reflect.has(t.value,s)){const n=Reflect.get(t.value,s);return typeof n=="function"?n.bind(t.value):n}}},has(r,s){if(Reflect.has(r,s))return!0;if(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))return!1;for(const t of a)if(t.value&&Reflect.has(t.value,s))return!0;return!1},set(r,s,t){if(Reflect.has(r,s))return Reflect.set(r,s,t);if(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))return!1;for(const n of a)if(n.value&&Reflect.has(n.value,s))return Reflect.set(n.value,s,t);return!1},getOwnPropertyDescriptor(r,s){var n;const t=Reflect.getOwnPropertyDescriptor(r,s);if(t)return t;if(!(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))){for(const l of a){if(!l.value)continue;const f=p(l.value,s)??("_"in l.value?p((n=l.value._)==null?void 0:n.setupState,s):void 0);if(f)return f}for(const l of a){const f=l.value&&l.value[v];if(!f)continue;const d=f.slice();for(;d.length;){const c=d.shift(),h=p(c.value,s);if(h)return h;const m=c.value&&c.value[v];m&&d.push(...m)}}}}})}export{g as B,st as V,it as a,ot as b,at as c,k as d,rt as e,lt as f,et as g,nt as h,U as i,Q as j,Z as n,tt as s};