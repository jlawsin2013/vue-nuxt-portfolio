import{bg as o,r as u,J as f,bh as d,C as v,K as i,bi as l,bj as h,W as m}from"./entry.bQHXzxoY.js";function I(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:d(a)});const r=t.push(n.value,e);return v(n,c=>{r.patch(c)}),m()&&(i(()=>{r.dispose()}),l(()=>{s.value=!0}),h(()=>{s.value=!1})),r}export{I as u};
