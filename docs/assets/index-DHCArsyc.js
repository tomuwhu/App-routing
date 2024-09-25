var me=Object.defineProperty;var ge=(t,e,n)=>e in t?me(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var kt=(t,e,n)=>ge(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function b(){}const xt=t=>t;function D(t,e){for(const n in e)t[n]=e[n];return t}function be(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function te(t){return t()}function Mt(){return Object.create(null)}function B(t){t.forEach(te)}function ct(t){return typeof t=="function"}function $(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ye(t){return Object.keys(t).length===0}function ee(t,...e){if(t==null){for(const r of e)r(void 0);return b}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function H(t,e,n){t.$$.on_destroy.push(ee(e,n))}function pt(t,e,n,r){if(t){const o=ne(t,e,n,r);return t[0](o)}}function ne(t,e,n,r){return t[1]&&r?D(n.ctx.slice(),t[1](r(e))):n.ctx}function mt(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const s=[],i=Math.max(e.dirty.length,o.length);for(let u=0;u<i;u+=1)s[u]=e.dirty[u]|o[u];return s}return e.dirty|o}return e.dirty}function gt(t,e,n,r,o,s){if(o){const i=ne(e,n,r,s);t.p(i,o)}}function bt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Ot(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Dt(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}const re=typeof window<"u";let oe=re?()=>window.performance.now():()=>Date.now(),jt=re?t=>requestAnimationFrame(t):b;const Y=new Set;function se(t){Y.forEach(e=>{e.c(t)||(Y.delete(e),e.f())}),Y.size!==0&&jt(se)}function ie(t){let e;return Y.size===0&&jt(se),{promise:new Promise(n=>{Y.add(e={c:t,f:n})}),abort(){Y.delete(e)}}}function Rt(t,e){t.appendChild(e)}function ce(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ke(t){const e=L("style");return e.textContent="/* empty */",we(ce(t),e),e.sheet}function we(t,e){return Rt(t.head||t,e),e.sheet}function w(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function L(t){return document.createElement(t)}function J(t){return document.createTextNode(t)}function U(){return J(" ")}function X(){return J("")}function ve(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Nt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Se=["width","height"];function $t(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set&&Se.indexOf(r)===-1?t[r]=e[r]:Nt(t,r,e[r])}function Pe(t){return Array.from(t.childNodes)}function le(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function Ht(t,e){return new t(e)}const at=new Map;let _t=0;function Ee(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Oe(t,e){const n={stylesheet:ke(e),rules:{}};return at.set(t,n),n}function ue(t,e,n,r,o,s,i,u=0){const l=16.666/r;let c=`{
`;for(let m=0;m<=1;m+=l){const v=e+(n-e)*s(m);c+=m*100+`%{${i(v,1-v)}}
`}const a=c+`100% {${i(n,1-n)}}
}`,f=`__svelte_${Ee(a)}_${u}`,_=ce(t),{stylesheet:p,rules:d}=at.get(_)||Oe(_,t);d[f]||(d[f]=!0,p.insertRule(`@keyframes ${f} ${a}`,p.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${r}ms linear ${o}ms 1 both`,_t+=1,f}function Ct(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),o=n.length-r.length;o&&(t.style.animation=r.join(", "),_t-=o,_t||Re())}function Re(){jt(()=>{_t||(at.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&y(e)}),at.clear())})}let st;function T(t){st=t}function Z(){if(!st)throw new Error("Function called outside component initialization");return st}function Ne(t){Z().$$.on_mount.push(t)}function Ce(t){Z().$$.on_destroy.push(t)}function Ae(){const t=Z();return(e,n,{cancelable:r=!1}={})=>{const o=t.$$.callbacks[e];if(o){const s=le(e,n,{cancelable:r});return o.slice().forEach(i=>{i.call(t,s)}),!s.defaultPrevented}return!0}}function wt(t,e){return Z().$$.context.set(t,e),e}function Q(t){return Z().$$.context.get(t)}const q=[],Ut=[];let G=[];const zt=[],Le=Promise.resolve();let At=!1;function Te(){At||(At=!0,Le.then(It))}function V(t){G.push(t)}const vt=new Set;let F=0;function It(){if(F!==0)return;const t=st;do{try{for(;F<q.length;){const e=q[F];F++,T(e),je(e.$$)}}catch(e){throw q.length=0,F=0,e}for(T(null),q.length=0,F=0;Ut.length;)Ut.pop()();for(let e=0;e<G.length;e+=1){const n=G[e];vt.has(n)||(vt.add(n),n())}G.length=0}while(q.length);for(;zt.length;)zt.pop()();At=!1,vt.clear(),T(t)}function je(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}function Ie(t){const e=[],n=[];G.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),G=e}let rt;function fe(){return rt||(rt=Promise.resolve(),rt.then(()=>{rt=null})),rt}function dt(t,e,n){t.dispatchEvent(le(`${e?"intro":"outro"}${n}`))}const ft=new Set;let j;function x(){j={r:0,c:[],p:j}}function tt(){j.r||B(j.c),j=j.p}function S(t,e){t&&t.i&&(ft.delete(t),t.i(e))}function P(t,e,n,r){if(t&&t.o){if(ft.has(t))return;ft.add(t),j.c.push(()=>{ft.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const ae={duration:0};function Me(t,e,n){const r={direction:"in"};let o=e(t,n,r),s=!1,i,u,l=0;function c(){i&&Ct(t,i)}function a(){const{delay:_=0,duration:p=300,easing:d=xt,tick:g=b,css:m}=o||ae;m&&(i=ue(t,0,1,p,_,d,m,l++)),g(0,1);const v=oe()+_,R=v+p;u&&u.abort(),s=!0,V(()=>dt(t,!0,"start")),u=ie(E=>{if(s){if(E>=R)return g(1,0),dt(t,!0,"end"),c(),s=!1;if(E>=v){const C=d((E-v)/p);g(C,1-C)}}return s})}let f=!1;return{start(){f||(f=!0,Ct(t),ct(o)?(o=o(r),fe().then(a)):a())},invalidate(){f=!1},end(){s&&(c(),s=!1)}}}function De(t,e,n){const r={direction:"out"};let o=e(t,n,r),s=!0,i;const u=j;u.r+=1;let l;function c(){const{delay:a=0,duration:f=300,easing:_=xt,tick:p=b,css:d}=o||ae;d&&(i=ue(t,1,0,f,a,_,d));const g=oe()+a,m=g+f;V(()=>dt(t,!1,"start")),"inert"in t&&(l=t.inert,t.inert=!0),ie(v=>{if(s){if(v>=m)return p(0,1),dt(t,!1,"end"),--u.r||B(u.c),!1;if(v>=g){const R=_((v-g)/f);p(1-R,R)}}return s})}return ct(o)?fe().then(()=>{o=o(r),c()}):c(),{end(a){a&&"inert"in t&&(t.inert=l),a&&o.tick&&o.tick(1,0),s&&(i&&Ct(t,i),s=!1)}}}function Bt(t,e){const n=e.token={};function r(o,s,i,u){if(e.token!==n)return;e.resolved=u;let l=e.ctx;i!==void 0&&(l=l.slice(),l[i]=u);const c=o&&(e.current=o)(l);let a=!1;e.block&&(e.blocks?e.blocks.forEach((f,_)=>{_!==s&&f&&(x(),P(f,1,1,()=>{e.blocks[_]===f&&(e.blocks[_]=null)}),tt())}):e.block.d(1),c.c(),S(c,1),c.m(e.mount(),e.anchor),a=!0),e.block=c,e.blocks&&(e.blocks[s]=c),a&&It()}if(be(t)){const o=Z();if(t.then(s=>{T(o),r(e.then,1,e.value,s),T(null)},s=>{if(T(o),r(e.catch,2,e.error,s),T(null),!e.hasCatch)throw s}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function $e(t,e,n){const r=e.slice(),{resolved:o}=t;t.current===t.then&&(r[t.value]=o),t.current===t.catch&&(r[t.error]=o),t.block.p(r,n)}function Lt(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const i=t[s],u=e[s];if(u){for(const l in i)l in u||(r[l]=1);for(const l in u)o[l]||(n[l]=u[l],o[l]=1);t[s]=u}else for(const l in i)o[l]=1}for(const i in r)i in n||(n[i]=void 0);return n}function ut(t){return typeof t=="object"&&t!==null?t:{}}function z(t){t&&t.c()}function I(t,e,n){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),V(()=>{const s=t.$$.on_mount.map(te).filter(ct);t.$$.on_destroy?t.$$.on_destroy.push(...s):B(s),t.$$.on_mount=[]}),o.forEach(V)}function M(t,e){const n=t.$$;n.fragment!==null&&(Ie(n.after_update),B(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function He(t,e){t.$$.dirty[0]===-1&&(q.push(t),Te(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(t,e,n,r,o,s,i=null,u=[-1]){const l=st;T(t);const c=t.$$={fragment:null,ctx:[],props:s,update:b,not_equal:o,bound:Mt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Mt(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};i&&i(c.root);let a=!1;if(c.ctx=n?n(t,e.props||{},(f,_,...p)=>{const d=p.length?p[0]:_;return c.ctx&&o(c.ctx[f],c.ctx[f]=d)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](d),a&&He(t,f)),_}):[],c.update(),a=!0,B(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const f=Pe(e.target);c.fragment&&c.fragment.l(f),f.forEach(y)}else c.fragment&&c.fragment.c();e.intro&&S(t.$$.fragment),I(t,e.target,e.anchor),It()}T(l)}class nt{constructor(){kt(this,"$$");kt(this,"$$set")}$destroy(){M(this,1),this.$destroy=b}$on(e,n){if(!ct(n))return b;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!ye(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ue="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ue);const Tt={},ht={},_e={},de=/^:(.+)/,Kt=4,ze=3,Be=2,Ke=1,Fe=1,it=t=>t.replace(/(^\/+|\/+$)/g,"").split("/"),St=t=>t.replace(/(^\/+|\/+$)/g,""),We=(t,e)=>{const n=t.default?0:it(t.path).reduce((r,o)=>(r+=Kt,o===""?r+=Fe:de.test(o)?r+=Be:o[0]==="*"?r-=Kt+Ke:r+=ze,r),0);return{route:t,score:n,index:e}},qe=t=>t.map(We).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index),Ft=(t,e)=>{let n,r;const[o]=e.split("?"),s=it(o),i=s[0]==="",u=qe(t);for(let l=0,c=u.length;l<c;l++){const a=u[l].route;let f=!1;if(a.default){r={route:a,params:{},uri:e};continue}const _=it(a.path),p={},d=Math.max(s.length,_.length);let g=0;for(;g<d;g++){const m=_[g],v=s[g];if(m&&m[0]==="*"){const E=m==="*"?"*":m.slice(1);p[E]=s.slice(g).map(decodeURIComponent).join("/");break}if(typeof v>"u"){f=!0;break}const R=de.exec(m);if(R&&!i){const E=decodeURIComponent(v);p[R[1]]=E}else if(m!==v){f=!0;break}}if(!f){n={route:a,params:p,uri:"/"+s.slice(0,g).join("/")};break}}return n||r||null},Pt=(t,e)=>t+(e?`?${e}`:""),Ye=(t,e)=>{if(t.startsWith("/"))return t;const[n,r]=t.split("?"),[o]=e.split("?"),s=it(n),i=it(o);if(s[0]==="")return Pt(o,r);if(!s[0].startsWith(".")){const c=i.concat(s).join("/");return Pt((o==="/"?"":"/")+c,r)}const u=i.concat(s),l=[];return u.forEach(c=>{c===".."?l.pop():c!=="."&&l.push(c)}),Pt("/"+l.join("/"),r)},Wt=(t,e)=>`${St(e==="/"?t:`${St(t)}/${St(e)}`)}/`,Qe=t=>!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey),he=()=>typeof window<"u"&&"document"in window&&"location"in window,Ge=t=>({active:t&4}),qt=t=>({active:!!t[2]});function Ve(t){let e,n,r,o;const s=t[17].default,i=pt(s,t,t[16],qt);let u=[{href:t[0]},{"aria-current":t[2]},t[1],t[6]],l={};for(let c=0;c<u.length;c+=1)l=D(l,u[c]);return{c(){e=L("a"),i&&i.c(),$t(e,l)},m(c,a){w(c,e,a),i&&i.m(e,null),n=!0,r||(o=ve(e,"click",t[5]),r=!0)},p(c,[a]){i&&i.p&&(!n||a&65540)&&gt(i,s,c,c[16],n?mt(s,c[16],a,Ge):bt(c[16]),qt),$t(e,l=Lt(u,[(!n||a&1)&&{href:c[0]},(!n||a&4)&&{"aria-current":c[2]},a&2&&c[1],a&64&&c[6]]))},i(c){n||(S(i,c),n=!0)},o(c){P(i,c),n=!1},d(c){c&&y(e),i&&i.d(c),r=!1,o()}}}function Je(t,e,n){let r;const o=["to","replace","state","getProps","preserveScroll"];let s=Dt(e,o),i,u,{$$slots:l={},$$scope:c}=e,{to:a="#"}=e,{replace:f=!1}=e,{state:_={}}=e,{getProps:p=()=>({})}=e,{preserveScroll:d=!1}=e;const g=Q(Tt);H(t,g,k=>n(14,i=k));const{base:m}=Q(ht);H(t,m,k=>n(15,u=k));const{navigate:v}=Q(_e),R=Ae();let E,C,K,lt;const yt=k=>{if(R("click",k),Qe(k)){k.preventDefault();const h=i.pathname===E||f;v(E,{state:_,replace:h,preserveScroll:d})}};return t.$$set=k=>{e=D(D({},e),Ot(k)),n(6,s=Dt(e,o)),"to"in k&&n(7,a=k.to),"replace"in k&&n(8,f=k.replace),"state"in k&&n(9,_=k.state),"getProps"in k&&n(10,p=k.getProps),"preserveScroll"in k&&n(11,d=k.preserveScroll),"$$scope"in k&&n(16,c=k.$$scope)},t.$$.update=()=>{t.$$.dirty&32896&&n(0,E=Ye(a,u.uri)),t.$$.dirty&16385&&n(12,C=i.pathname.startsWith(E)),t.$$.dirty&16385&&n(13,K=E===i.pathname),t.$$.dirty&8192&&n(2,r=K?"page":void 0),n(1,lt=p({location:i,href:E,isPartiallyCurrent:C,isCurrent:K,existingProps:s}))},[E,lt,r,g,m,yt,s,a,f,_,p,d,C,K,i,u,c,l]}class Yt extends nt{constructor(e){super(),et(this,e,Je,Ve,$,{to:7,replace:8,state:9,getProps:10,preserveScroll:11})}}const Xe=t=>({params:t&4}),Qt=t=>({params:t[2]});function Gt(t){let e,n,r,o;const s=[xe,Ze],i=[];function u(l,c){return l[0]?0:1}return e=u(t),n=i[e]=s[e](t),{c(){n.c(),r=X()},m(l,c){i[e].m(l,c),w(l,r,c),o=!0},p(l,c){let a=e;e=u(l),e===a?i[e].p(l,c):(x(),P(i[a],1,1,()=>{i[a]=null}),tt(),n=i[e],n?n.p(l,c):(n=i[e]=s[e](l),n.c()),S(n,1),n.m(r.parentNode,r))},i(l){o||(S(n),o=!0)},o(l){P(n),o=!1},d(l){l&&y(r),i[e].d(l)}}}function Ze(t){let e;const n=t[8].default,r=pt(n,t,t[7],Qt);return{c(){r&&r.c()},m(o,s){r&&r.m(o,s),e=!0},p(o,s){r&&r.p&&(!e||s&132)&&gt(r,n,o,o[7],e?mt(n,o[7],s,Xe):bt(o[7]),Qt)},i(o){e||(S(r,o),e=!0)},o(o){P(r,o),e=!1},d(o){r&&r.d(o)}}}function xe(t){let e,n,r,o={ctx:t,current:null,token:null,hasCatch:!1,pending:nn,then:en,catch:tn,value:12,blocks:[,,,]};return Bt(n=t[0],o),{c(){e=X(),o.block.c()},m(s,i){w(s,e,i),o.block.m(s,o.anchor=i),o.mount=()=>e.parentNode,o.anchor=e,r=!0},p(s,i){t=s,o.ctx=t,i&1&&n!==(n=t[0])&&Bt(n,o)||$e(o,t,i)},i(s){r||(S(o.block),r=!0)},o(s){for(let i=0;i<3;i+=1){const u=o.blocks[i];P(u)}r=!1},d(s){s&&y(e),o.block.d(s),o.token=null,o=null}}}function tn(t){return{c:b,m:b,p:b,i:b,o:b,d:b}}function en(t){var u;let e,n,r;const o=[t[2],t[3]];var s=((u=t[12])==null?void 0:u.default)||t[12];function i(l,c){let a={};for(let f=0;f<o.length;f+=1)a=D(a,o[f]);return c!==void 0&&c&12&&(a=D(a,Lt(o,[c&4&&ut(l[2]),c&8&&ut(l[3])]))),{props:a}}return s&&(e=Ht(s,i(t))),{c(){e&&z(e.$$.fragment),n=X()},m(l,c){e&&I(e,l,c),w(l,n,c),r=!0},p(l,c){var a;if(c&1&&s!==(s=((a=l[12])==null?void 0:a.default)||l[12])){if(e){x();const f=e;P(f.$$.fragment,1,0,()=>{M(f,1)}),tt()}s?(e=Ht(s,i(l,c)),z(e.$$.fragment),S(e.$$.fragment,1),I(e,n.parentNode,n)):e=null}else if(s){const f=c&12?Lt(o,[c&4&&ut(l[2]),c&8&&ut(l[3])]):{};e.$set(f)}},i(l){r||(e&&S(e.$$.fragment,l),r=!0)},o(l){e&&P(e.$$.fragment,l),r=!1},d(l){l&&y(n),e&&M(e,l)}}}function nn(t){return{c:b,m:b,p:b,i:b,o:b,d:b}}function rn(t){let e,n,r=t[1]&&t[1].route===t[5]&&Gt(t);return{c(){r&&r.c(),e=X()},m(o,s){r&&r.m(o,s),w(o,e,s),n=!0},p(o,[s]){o[1]&&o[1].route===o[5]?r?(r.p(o,s),s&2&&S(r,1)):(r=Gt(o),r.c(),S(r,1),r.m(e.parentNode,e)):r&&(x(),P(r,1,1,()=>{r=null}),tt())},i(o){n||(S(r),n=!0)},o(o){P(r),n=!1},d(o){o&&y(e),r&&r.d(o)}}}function on(t,e,n){let r,{$$slots:o={},$$scope:s}=e,{path:i=""}=e,{component:u=null}=e,l={},c={};const{registerRoute:a,unregisterRoute:f,activeRoute:_}=Q(ht);H(t,_,d=>n(1,r=d));const p={path:i,default:i===""};return a(p),Ce(()=>{f(p)}),t.$$set=d=>{n(11,e=D(D({},e),Ot(d))),"path"in d&&n(6,i=d.path),"component"in d&&n(0,u=d.component),"$$scope"in d&&n(7,s=d.$$scope)},t.$$.update=()=>{if(r&&r.route===p){n(2,l=r.params);const{component:d,path:g,...m}=e;n(3,c=m),d&&(d.toString().startsWith("class ")?n(0,u=d):n(0,u=d())),he()&&!r.preserveScroll&&(window==null||window.scrollTo(0,0))}},e=Ot(e),[u,r,l,c,_,p,i,s,o]}class Vt extends nt{constructor(e){super(),et(this,e,on,rn,$,{path:6,component:0})}}const W=[];function sn(t,e){return{subscribe:ot(t,e).subscribe}}function ot(t,e=b){let n;const r=new Set;function o(u){if($(t,u)&&(t=u,n)){const l=!W.length;for(const c of r)c[1](),W.push(c,t);if(l){for(let c=0;c<W.length;c+=2)W[c][0](W[c+1]);W.length=0}}}function s(u){o(u(t))}function i(u,l=b){const c=[u,l];return r.add(c),r.size===1&&(n=e(o,s)||b),u(t),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:o,update:s,subscribe:i}}function cn(t,e,n){const r=!Array.isArray(t),o=r?[t]:t;if(!o.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return sn(n,(i,u)=>{let l=!1;const c=[];let a=0,f=b;const _=()=>{if(a)return;f();const d=e(r?c[0]:c,i,u);s?i(d):f=ct(d)?d:b},p=o.map((d,g)=>ee(d,m=>{c[g]=m,a&=~(1<<g),l&&_()},()=>{a|=1<<g}));return l=!0,_(),function(){B(p),f(),l=!1}})}const Et=t=>({...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}),ln=t=>{const e=[];let n=Et(t);return{get location(){return n},listen(r){e.push(r);const o=()=>{n=Et(t),r({location:n,action:"POP"})};return t.addEventListener("popstate",o),()=>{t.removeEventListener("popstate",o);const s=e.indexOf(r);e.splice(s,1)}},navigate(r,{state:o,replace:s=!1,preserveScroll:i=!1,blurActiveElement:u=!0}={}){o={...o,key:Date.now()+""};try{s?t.history.replaceState(o,"",r):t.history.pushState(o,"",r)}catch{t.location[s?"replace":"assign"](r)}n=Et(t),e.forEach(l=>l({location:n,action:"PUSH",preserveScroll:i})),u&&document.activeElement.blur()}}},un=(t="/")=>{let e=0;const n=[{pathname:t,search:""}],r=[];return{get location(){return n[e]},addEventListener(o,s){},removeEventListener(o,s){},history:{get entries(){return n},get index(){return e},get state(){return r[e]},pushState(o,s,i){const[u,l=""]=i.split("?");e++,n.push({pathname:u,search:l}),r.push(o)},replaceState(o,s,i){const[u,l=""]=i.split("?");n[e]={pathname:u,search:l},r[e]=o}}}},fn=ln(he()?window:un()),an=t=>({route:t&4,location:t&2}),Jt=t=>({route:t[2]&&t[2].uri,location:t[1]}),_n=t=>({route:t&4,location:t&2}),Xt=t=>({route:t[2]&&t[2].uri,location:t[1]});function dn(t){let e;const n=t[15].default,r=pt(n,t,t[14],Jt);return{c(){r&&r.c()},m(o,s){r&&r.m(o,s),e=!0},p(o,s){r&&r.p&&(!e||s&16390)&&gt(r,n,o,o[14],e?mt(n,o[14],s,an):bt(o[14]),Jt)},i(o){e||(S(r,o),e=!0)},o(o){P(r,o),e=!1},d(o){r&&r.d(o)}}}function hn(t){let e=t[1].pathname,n,r,o=Zt(t);return{c(){o.c(),n=X()},m(s,i){o.m(s,i),w(s,n,i),r=!0},p(s,i){i&2&&$(e,e=s[1].pathname)?(x(),P(o,1,1,b),tt(),o=Zt(s),o.c(),S(o,1),o.m(n.parentNode,n)):o.p(s,i)},i(s){r||(S(o),r=!0)},o(s){P(o),r=!1},d(s){s&&y(n),o.d(s)}}}function Zt(t){let e,n,r,o;const s=t[15].default,i=pt(s,t,t[14],Xt);return{c(){e=L("div"),i&&i.c()},m(u,l){w(u,e,l),i&&i.m(e,null),o=!0},p(u,l){i&&i.p&&(!o||l&16390)&&gt(i,s,u,u[14],o?mt(s,u[14],l,_n):bt(u[14]),Xt)},i(u){o||(S(i,u),u&&V(()=>{o&&(r&&r.end(1),n=Me(e,t[3],{}),n.start())}),o=!0)},o(u){P(i,u),n&&n.invalidate(),u&&(r=De(e,t[3],{})),o=!1},d(u){u&&y(e),i&&i.d(u),u&&r&&r.end()}}}function pn(t){let e,n,r,o;const s=[hn,dn],i=[];function u(l,c){return l[0]?0:1}return e=u(t),n=i[e]=s[e](t),{c(){n.c(),r=X()},m(l,c){i[e].m(l,c),w(l,r,c),o=!0},p(l,[c]){let a=e;e=u(l),e===a?i[e].p(l,c):(x(),P(i[a],1,1,()=>{i[a]=null}),tt(),n=i[e],n?n.p(l,c):(n=i[e]=s[e](l),n.c()),S(n,1),n.m(r.parentNode,r))},i(l){o||(S(n),o=!0)},o(l){P(n),o=!1},d(l){l&&y(r),i[e].d(l)}}}function mn(t,e,n){let r,o,s,i,{$$slots:u={},$$scope:l}=e,{basepath:c="/"}=e,{url:a=null}=e,{viewtransition:f=null}=e,{history:_=fn}=e;const p=(h,N,A)=>{const O=f(A);return typeof(O==null?void 0:O.fn)=="function"?O.fn(h,O):O};wt(_e,_);const d=Q(Tt),g=Q(ht),m=ot([]);H(t,m,h=>n(12,o=h));const v=ot(null);H(t,v,h=>n(2,i=h));let R=!1;const E=d||ot(a?{pathname:a}:_.location);H(t,E,h=>n(1,r=h));const C=g?g.routerBase:ot({path:c,uri:c});H(t,C,h=>n(13,s=h));const K=cn([C,v],([h,N])=>{if(!N)return h;const{path:A}=h,{route:O,uri:pe}=N;return{path:O.default?A:O.path.replace(/\*.*$/,""),uri:pe}}),lt=h=>{const{path:N}=s;let{path:A}=h;if(h._path=A,h.path=Wt(N,A),typeof window>"u"){if(R)return;const O=Ft([h],r.pathname);O&&(v.set(O),R=!0)}else m.update(O=>[...O,h])},yt=h=>{m.update(N=>N.filter(A=>A!==h))};let k=!1;return d||(Ne(()=>_.listen(N=>{n(11,k=N.preserveScroll||!1),E.set(N.location)})),wt(Tt,E)),wt(ht,{activeRoute:v,base:C,routerBase:K,registerRoute:lt,unregisterRoute:yt}),t.$$set=h=>{"basepath"in h&&n(8,c=h.basepath),"url"in h&&n(9,a=h.url),"viewtransition"in h&&n(0,f=h.viewtransition),"history"in h&&n(10,_=h.history),"$$scope"in h&&n(14,l=h.$$scope)},t.$$.update=()=>{if(t.$$.dirty&8192){const{path:h}=s;m.update(N=>N.map(A=>Object.assign(A,{path:Wt(h,A._path)})))}if(t.$$.dirty&6146){const h=Ft(o,r.pathname);v.set(h&&{...h,preserveScroll:k})}},[f,r,i,p,m,v,E,C,c,a,_,k,o,s,l,u]}class gn extends nt{constructor(e){super(),et(this,e,mn,pn,$,{basepath:8,url:9,viewtransition:0,history:10})}}function bn(t){let e;return{c(){e=J("Home Content")},m(n,r){w(n,e,r)},p:b,i:b,o:b,d(n){n&&y(e)}}}class yn extends nt{constructor(e){super(),et(this,e,null,bn,$,{})}}function kn(t){let e,n,r,o,s,i,u,l,c,a;return{c(){e=J(`About Content
`),n=L("div"),r=U(),o=L("br"),s=U(),i=L("hr"),u=U(),l=L("br"),c=U(),a=L("a"),a.textContent="Read the Docs!",Nt(a,"href","https://github.com/EmilTholin/svelte-routing"),Nt(a,"target","rtd")},m(f,_){w(f,e,_),w(f,n,_),w(f,r,_),w(f,o,_),w(f,s,_),w(f,i,_),w(f,u,_),w(f,l,_),w(f,c,_),w(f,a,_)},p:b,i:b,o:b,d(f){f&&(y(e),y(n),y(r),y(o),y(s),y(i),y(u),y(l),y(c),y(a))}}}class wn extends nt{constructor(e){super(),et(this,e,null,kn,$,{})}}function vn(t){let e;return{c(){e=J("Home")},m(n,r){w(n,e,r)},d(n){n&&y(e)}}}function Sn(t){let e;return{c(){e=J("About")},m(n,r){w(n,e,r)},d(n){n&&y(e)}}}function Pn(t){let e,n,r,o,s,i,u,l,c,a;return n=new Yt({props:{to:t[0]+"/",$$slots:{default:[vn]},$$scope:{ctx:t}}}),o=new Yt({props:{to:t[0]+"/about",$$slots:{default:[Sn]},$$scope:{ctx:t}}}),u=new Vt({props:{path:t[0]+"/about",component:wn}}),c=new Vt({props:{path:t[0]+"/",component:yn}}),{c(){e=L("nav"),z(n.$$.fragment),r=U(),z(o.$$.fragment),s=U(),i=L("main"),z(u.$$.fragment),l=U(),z(c.$$.fragment)},m(f,_){w(f,e,_),I(n,e,null),Rt(e,r),I(o,e,null),w(f,s,_),w(f,i,_),I(u,i,null),Rt(i,l),I(c,i,null),a=!0},p(f,_){const p={};_&1&&(p.to=f[0]+"/"),_&2&&(p.$$scope={dirty:_,ctx:f}),n.$set(p);const d={};_&1&&(d.to=f[0]+"/about"),_&2&&(d.$$scope={dirty:_,ctx:f}),o.$set(d);const g={};_&1&&(g.path=f[0]+"/about"),u.$set(g);const m={};_&1&&(m.path=f[0]+"/"),c.$set(m)},i(f){a||(S(n.$$.fragment,f),S(o.$$.fragment,f),S(u.$$.fragment,f),S(c.$$.fragment,f),a=!0)},o(f){P(n.$$.fragment,f),P(o.$$.fragment,f),P(u.$$.fragment,f),P(c.$$.fragment,f),a=!1},d(f){f&&(y(e),y(s),y(i)),M(n),M(o),M(u),M(c)}}}function En(t){let e,n;return e=new gn({props:{url:t[0],$$slots:{default:[Pn]},$$scope:{ctx:t}}}),{c(){z(e.$$.fragment)},m(r,o){I(e,r,o),n=!0},p(r,[o]){const s={};o&1&&(s.url=r[0]),o&3&&(s.$$scope={dirty:o,ctx:r}),e.$set(s)},i(r){n||(S(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){M(e,r)}}}function On(t,e,n){let{url:r="App-routing"}=e;return t.$$set=o=>{"url"in o&&n(0,r=o.url)},[r]}class Rn extends nt{constructor(e){super(),et(this,e,On,En,$,{url:0})}}new Rn({target:document.getElementById("app")});
