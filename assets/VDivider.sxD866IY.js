import{j as c,aQ as d,aN as m,m as u,aM as v,g,i as h,k as f,l as y,f as C,O as o,u as S,b as k}from"./entry.bQHXzxoY.js";import{a as x}from"./VIcon.wHS4FbDm.js";function D(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return c()({name:t??d(m(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...u()},setup(a,l){let{slots:r}=l;return()=>{var i;return v(a.tag,{class:[e,a.class],style:a.style},(i=r.default)==null?void 0:i.call(r))}}})}const V=g({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...u(),...h()},"VDivider"),N=c()({name:"VDivider",props:V(),setup(e,n){let{attrs:t}=n;const{themeClasses:a}=f(e),{textColorClasses:l,textColorStyles:r}=x(y(e,"color")),i=C(()=>{const s={};return e.length&&(s[e.vertical?"maxHeight":"maxWidth"]=o(e.length)),e.thickness&&(s[e.vertical?"borderRightWidth":"borderTopWidth"]=o(e.thickness)),s});return S(()=>k("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},a.value,l.value,e.class],style:[i.value,r.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{N as V,D as c};