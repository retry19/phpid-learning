function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function a(t,e,n){t.$$.on_destroy.push(c(e,n))}function u(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r,o,s,i){const c=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(c){const o=u(e,n,r,i);t.p(o,c)}}function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function $(){return g(" ")}function y(){return g("")}function b(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t){return Array.from(t.childNodes)}function E(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):m(e)}function w(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return g(e)}function x(t){return w(t," ")}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function P(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}let R;function A(t){R=t}function k(){if(!R)throw new Error("Function called outside component initialization");return R}function L(t){k().$$.on_mount.push(t)}const N=[],j=[],O=[],I=[],C=Promise.resolve();let U=!1;function q(t){O.push(t)}let T=!1;const M=new Set;function D(){if(!T){T=!0;do{for(let t=0;t<N.length;t+=1){const e=N[t];A(e),H(e.$$)}for(A(null),N.length=0;j.length;)j.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];M.has(e)||(M.add(e),e())}O.length=0}while(N.length);for(;I.length;)I.pop()();U=!1,T=!1,M.clear()}}function H(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const J=new Set;let B;function K(){B={r:0,c:[],p:B}}function V(){B.r||o(B.c),B=B.p}function z(t,e){t&&t.i&&(J.delete(t),t.i(e))}function F(t,e,n,r){if(t&&t.o){if(J.has(t))return;J.add(t),B.c.push((()=>{J.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function G(t,e){t.d(1),e.delete(t.key)}function Y(t,e){F(t,1,1,(()=>{e.delete(t.key)}))}function W(t,e,n,r,o,s,i,c,a,u,l,f){let p=t.length,d=s.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const g=[],$=new Map,y=new Map;for(h=d;h--;){const t=f(o,s,h),c=n(t);let a=i.get(c);a?r&&a.p(t,e):(a=u(c,t),a.c()),$.set(c,g[h]=a),c in m&&y.set(c,Math.abs(h-m[c]))}const b=new Set,v=new Set;function _(t){z(t,1),t.m(c,l),i.set(t.key,t),l=t.first,d--}for(;p&&d;){const e=g[d-1],n=t[p-1],r=e.key,o=n.key;e===n?(l=e.first,p--,d--):$.has(o)?!i.has(r)||b.has(r)?_(e):v.has(o)?p--:y.get(r)>y.get(o)?(v.add(r),_(e)):(b.add(o),p--):(a(n,i),p--)}for(;p--;){const e=t[p];$.has(e.key)||a(e,i)}for(;d;)_(g[d-1]);return g}function X(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=e[s];if(c){for(const t in i)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in i)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Q(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,e){t&&t.l(e)}function et(t,e,r,i){const{fragment:c,on_mount:a,on_destroy:u,after_update:l}=t.$$;c&&c.m(e,r),i||q((()=>{const e=a.map(n).filter(s);u?u.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(q)}function nt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(t,e){-1===t.$$.dirty[0]&&(N.push(t),U||(U=!0,C.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,n,s,i,c,a,u=[-1]){const l=R;A(e);const f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:n.context||[]),callbacks:r(),dirty:u,skip_bound:!1};let p=!1;if(f.ctx=s?s(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),p&&rt(e,t)),n})):[],f.update(),p=!0,o(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){const t=_(n.target);f.fragment&&f.fragment.l(t),t.forEach(d)}else f.fragment&&f.fragment.c();n.intro&&z(e.$$.fragment),et(e,n.target,n.anchor,n.customElement),D()}A(l)}class st{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const it=[];function ct(t,e){return{subscribe:at(t,e).subscribe}}function at(e,n=t){let r;const o=[];function s(t){if(i(e,t)&&(e=t,r)){const t=!it.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),it.push(n,e)}if(t){for(let t=0;t<it.length;t+=2)it[t][0](it[t+1]);it.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const a=[i,c];return o.push(a),1===o.length&&(r=n(s)||t),i(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function ut(e,n,r){const i=!Array.isArray(e),a=i?[e]:e,u=n.length<2;return ct(r,(e=>{let r=!1;const l=[];let f=0,p=t;const d=()=>{if(f)return;p();const r=n(i?l[0]:l,e);u?e(r):p=s(r)?r:t},h=a.map(((t,e)=>c(t,(t=>{l[e]=t,f&=~(1<<e),r&&d()}),(()=>{f|=1<<e}))));return r=!0,d(),function(){o(h),p()}}))}const lt={};function ft(t){let e,n;const r=t[1].default,o=function(t,e,n,r){if(t){const o=u(t,e,n,r);return t[0](o)}}(r,t,t[0],null);return{c(){e=m("main"),o&&o.c(),this.h()},l(t){e=E(t,"MAIN",{id:!0});var n=_(e);o&&o.l(n),n.forEach(d),this.h()},h(){v(e,"id","app-layout")},m(t,r){p(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&1&e&&l(o,r,t,t[0],e,null,null)},i(t){n||(z(o,t),n=!0)},o(t){F(o,t),n=!1},d(t){t&&d(e),o&&o.d(t)}}}function pt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class dt extends st{constructor(t){super(),ot(this,t,pt,ft,i,{})}}function ht(t){let e,n,r=t[1].stack+"";return{c(){e=m("pre"),n=g(r)},l(t){e=E(t,"PRE",{});var o=_(e);n=w(o,r),o.forEach(d)},m(t,r){p(t,e,r),f(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&S(n,r)},d(t){t&&d(e)}}}function mt(e){let n,r,o,s,i,c,a,u,l,h=e[1].message+"";document.title=n="Error "+e[0]+" | PHPID Online Learning 2020 by PHPID";let y=e[2]&&e[1].stack&&ht(e);return{c(){r=$(),o=m("main"),s=m("h1"),i=g(e[0]),c=$(),a=m("p"),u=g(h),l=$(),y&&y.c(),this.h()},l(t){(function(t,e=document.body){return Array.from(e.querySelectorAll(t))})('[data-svelte="svelte-lpiv6e"]',document.head).forEach(d),r=x(t),o=E(t,"MAIN",{id:!0});var n=_(o);s=E(n,"H1",{class:!0});var f=_(s);i=w(f,e[0]),f.forEach(d),c=x(n),a=E(n,"P",{class:!0});var p=_(a);u=w(p,h),p.forEach(d),l=x(n),y&&y.l(n),n.forEach(d),this.h()},h(){v(s,"class","svelte-jpshsi"),v(a,"class","svelte-jpshsi"),v(o,"id","page-error")},m(t,e){p(t,r,e),p(t,o,e),f(o,s),f(s,i),f(o,c),f(o,a),f(a,u),f(o,l),y&&y.m(o,null)},p(t,[e]){1&e&&n!==(n="Error "+t[0]+" | PHPID Online Learning 2020 by PHPID")&&(document.title=n),1&e&&S(i,t[0]),2&e&&h!==(h=t[1].message+"")&&S(u,h),t[2]&&t[1].stack?y?y.p(t,e):(y=ht(t),y.c(),y.m(o,null)):y&&(y.d(1),y=null)},i:t,o:t,d(t){t&&d(r),t&&d(o),y&&y.d()}}}function gt(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class $t extends st{constructor(t){super(),ot(this,t,gt,mt,i,{status:0,error:1})}}function yt(t){let n,r,o;const s=[t[4].props];var i=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(c())),{c(){n&&Z(n.$$.fragment),r=y()},l(t){n&&tt(n.$$.fragment,t),r=y()},m(t,e){n&&et(n,t,e),p(t,r,e),o=!0},p(t,e){const o=16&e?X(s,[Q(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){K();const t=n;F(t.$$.fragment,1,0,(()=>{nt(t,1)})),V()}i?(n=new i(c()),Z(n.$$.fragment),z(n.$$.fragment,1),et(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(t){o||(n&&z(n.$$.fragment,t),o=!0)},o(t){n&&F(n.$$.fragment,t),o=!1},d(t){t&&d(r),n&&nt(n,t)}}}function bt(t){let e,n;return e=new $t({props:{error:t[0],status:t[1]}}),{c(){Z(e.$$.fragment)},l(t){tt(e.$$.fragment,t)},m(t,r){et(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function vt(t){let e,n,r,o;const s=[bt,yt],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),r=y()},l(t){n.l(t),r=y()},m(t,n){i[e].m(t,n),p(t,r,n),o=!0},p(t,o){let a=e;e=c(t),e===a?i[e].p(t,o):(K(),F(i[a],1,1,(()=>{i[a]=null})),V(),n=i[e],n?n.p(t,o):(n=i[e]=s[e](t),n.c()),z(n,1),n.m(r.parentNode,r))},i(t){o||(z(n),o=!0)},o(t){F(n),o=!1},d(t){i[e].d(t),t&&d(r)}}}function _t(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[vt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new dt({props:s}),{c(){Z(n.$$.fragment)},l(t){tt(n.$$.fragment,t)},m(t,e){et(n,t,e),r=!0},p(t,[e]){const r=12&e?X(o,[4&e&&{segment:t[2][0]},8&e&&Q(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(z(n.$$.fragment,t),r=!0)},o(t){F(n.$$.fragment,t),r=!1},d(t){nt(n,t)}}}function Et(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:i}=e,{level0:c}=e,{level1:a=null}=e,{notify:u}=e;var l,f,p;return l=u,k().$$.after_update.push(l),f=lt,p=r,k().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,u=t.notify)},[o,s,i,c,a,r,u]}class wt extends st{constructor(t){super(),ot(this,t,Et,_t,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const xt=[],St=[{js:()=>Promise.all([import("./index.5960904e.js"),__inject_styles(["client-b5e294ca.css","Footer-b0db47bc.css","index-a470ffbf.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[tag].687813d1.js"),__inject_styles(["client-b5e294ca.css","Footer-b0db47bc.css","[tag]-e8645a2f.css"])]).then((function(t){return t[0]}))}],Pt=(Rt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/tag\/([^/]+?)\/?$/,parts:[null,{i:1,params:t=>({tag:Rt(t[1])})}]}]);var Rt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function At(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{a(r.next(t))}catch(t){s(t)}}function c(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}a((r=r.apply(t,e||[])).next())}))}function kt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Lt,Nt=1;const jt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Ot={};let It,Ct;function Ut(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function qt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(It))return null;let e=t.pathname.slice(It.length);if(""===e&&(e="/"),!xt.some((t=>t.test(e))))for(let n=0;n<Pt.length;n+=1){const r=Pt[n],o=r.pattern.exec(e);if(o){const n=Ut(t.search),s=r.parts[r.parts.length-1],i=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:o,page:c}}}}function Tt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=kt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=qt(o);if(s){Ht(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),jt.pushState({id:Lt},"",o.href)}}function Mt(){return{x:pageXOffset,y:pageYOffset}}function Dt(t){if(Ot[Lt]=Mt(),t.state){const e=qt(new URL(location.href));e?Ht(e,t.state.id):location.href=location.href}else Nt=Nt+1,function(t){Lt=t}(Nt),jt.replaceState({id:Lt},"",location.href)}function Ht(t,e,n,r){return At(this,void 0,void 0,(function*(){const o=!!e;if(o)Lt=e;else{const t=Mt();Ot[Lt]=t,Lt=e=++Nt,Ot[Lt]=n?t:{x:0,y:0}}if(yield Ct(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=Ot[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),Ot[Lt]=n,n&&(o||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Jt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Bt,Kt=null;function Vt(t){const e=kt(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=qt(new URL(t,Jt(document)));if(e)Kt&&t===Kt.href||(Kt={href:t,promise:ae(e)}),Kt.promise}(e.href)}function zt(t){clearTimeout(Bt),Bt=setTimeout((()=>{Vt(t)}),20)}function Ft(t,e={noscroll:!1,replaceState:!1}){const n=qt(new URL(t,Jt(document)));if(n){const r=Ht(n,null,e.noscroll);return jt[e.replaceState?"replaceState":"pushState"]({id:Lt},"",t),r}return location.href=t,new Promise((()=>{}))}const Gt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Yt,Wt,Xt,Qt=!1,Zt=[],te="{}";const ee={page:function(t){const e=at(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:at(null),session:at(Gt&&Gt.session)};let ne,re,oe;function se(t,e){const{error:n}=t;return Object.assign({error:n},e)}function ie(t){return At(this,void 0,void 0,(function*(){Yt&&ee.preloading.set(!0);const e=function(t){return Kt&&Kt.href===t.href?Kt.promise:ae(t)}(t),n=Wt={},r=yield e,{redirect:o}=r;if(n===Wt)if(o)yield Ft(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield ce(n,e,se(e,t.page))}}))}function ce(t,e,n){return At(this,void 0,void 0,(function*(){ee.page.set(n),ee.preloading.set(!1),Yt?Yt.$set(e):(e.stores={page:{subscribe:ee.page.subscribe},preloading:{subscribe:ee.preloading.subscribe},session:ee.session},e.level0={props:yield Xt},e.notify=ee.page.notify,Yt=new wt({target:oe,props:e,hydrate:!0})),Zt=t,te=JSON.stringify(n.query),Qt=!0,re=!1}))}function ae(t){return At(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Xt){const t=()=>({});Xt=Gt.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},ne)}let c,a=1;try{const o=JSON.stringify(n.query),u=e.pattern.exec(n.path);let l=!1;c=yield Promise.all(e.parts.map(((e,c)=>At(this,void 0,void 0,(function*(){const f=r[c];if(function(t,e,n,r){if(r!==te)return!0;const o=Zt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,u,o)&&(l=!0),s.segments[a]=r[c+1],!e)return{segment:f};const p=a++;let d;if(re||l||!Zt[c]||Zt[c].part!==e.i){l=!1;const{default:r,preload:o}=yield St[e.i].js();let s;s=Qt||!Gt.preloaded[c+1]?o?yield o.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},ne):{}:Gt.preloaded[c+1],d={component:r,props:s,segment:f,match:u,part:e.i}}else d=Zt[c];return s[`level${p}`]=d})))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}var ue,le,fe;ee.session.subscribe((t=>At(void 0,void 0,void 0,(function*(){if(ne=t,!Qt)return;re=!0;const e=qt(new URL(location.href)),n=Wt={},{redirect:r,props:o,branch:s}=yield ae(e);n===Wt&&(r?yield Ft(r.location,{replaceState:!0}):yield ce(s,o,se(o,e.page)))})))),ue={target:document.querySelector("#sapper")},le=ue.target,oe=le,fe=Gt.baseUrl,It=fe,Ct=ie,"scrollRestoration"in jt&&(jt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{jt.scrollRestoration="auto"})),addEventListener("load",(()=>{jt.scrollRestoration="manual"})),addEventListener("click",Tt),addEventListener("popstate",Dt),addEventListener("touchstart",Vt),addEventListener("mousemove",zt),Gt.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:i}=Gt;Xt||(Xt=o&&o[0]);const c={error:i,status:s,session:r,level0:{props:Xt},level1:{props:{status:s,error:i},component:$t},segments:o},a=Ut(n);ce([],c,{host:t,path:e,query:a,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;jt.replaceState({id:Nt},"",e);const n=qt(new URL(location.href));if(n)return Ht(n,Nt,!0,t)}));export{V as A,L as B,y as C,K as D,Y as E,ut as F,ct as G,at as H,G as I,P as J,st as S,$ as a,_ as b,E as c,w as d,m as e,d as f,x as g,v as h,ot as i,p as j,f as k,S as l,a as m,t as n,b as o,h as p,Z as q,o as r,i as s,g as t,tt as u,et as v,z as w,F as x,nt as y,W as z};

import __inject_styles from './inject_styles.5607aec6.js';