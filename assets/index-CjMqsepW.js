const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DashboardView-BuhM9TOl.js","assets/warga-CItH0kqw.js","assets/kas-BZ1x_j8m.js","assets/pengeluaran-C-0RMfgP.js","assets/BottomNav-DC7SLQ6c.js","assets/AdminDashboard-B0fM4-mq.js","assets/WargaView-wttxy1rL.js","assets/Modal-CvvCDNtx.js","assets/Modal-BsIRLIwK.css","assets/ConfirmDialog-Sy0ALb9h.js","assets/ConfirmDialog-PTTrmRe7.css","assets/PembayaranView-CziRv7gN.js","assets/PengeluaranView-COs76P09.js","assets/LaporanView-ociDJj4D.js","assets/ProfilView-o-fkPQlv.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Uc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ke={},kr=[],an=()=>{},pp=()=>!1,ya=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),va=t=>t.startsWith("onUpdate:"),Ye=Object.assign,Bc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ly=Object.prototype.hasOwnProperty,be=(t,e)=>Ly.call(t,e),ne=Array.isArray,sr=t=>ji(t)==="[object Map]",kn=t=>ji(t)==="[object Set]",Hh=t=>ji(t)==="[object Date]",fe=t=>typeof t=="function",Le=t=>typeof t=="string",Lt=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",gp=t=>(Se(t)||fe(t))&&fe(t.then)&&fe(t.catch),mp=Object.prototype.toString,ji=t=>mp.call(t),My=t=>ji(t).slice(8,-1),_p=t=>ji(t)==="[object Object]",Ea=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ai=Uc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ta=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Fy=/-\w/g,wt=Ta(t=>t.replace(Fy,e=>e.slice(1).toUpperCase())),Uy=/\B([A-Z])/g,Kr=Ta(t=>t.replace(Uy,"-$1").toLowerCase()),Ia=Ta(t=>t.charAt(0).toUpperCase()+t.slice(1)),El=Ta(t=>t?`on${Ia(t)}`:""),sn=(t,e)=>!Object.is(t,e),Oo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},yp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},wa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},By=t=>{const e=Le(t)?Number(t):NaN;return isNaN(e)?t:e};let Wh;const Aa=()=>Wh||(Wh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jc(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Le(r)?Hy(r):jc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Le(t)||Se(t))return t}const jy=/;(?![^(]*\))/g,qy=/:([^]+)/,$y=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Hy(t){const e={};return t.replace($y,n=>n.startsWith("/*")?"":n).split(jy).forEach(n=>{if(n){const r=n.split(qy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function qc(t){let e="";if(Le(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const r=qc(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Wy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ky=Uc(Wy);function vp(t){return!!t||t===""}function Gy(t,e,n){if(t.length!==e.length)return!1;let r=!0;for(let s=0;r&&s<t.length;s++)r=Qt(t[s],e[s],n);return r}function Kh(t,e,n){if(t.size!==e.size)return!1;const r=Array.from(e),s=new Uint8Array(r.length);for(const i of t){let o=-1;for(let l=0;l<r.length;l++)if(!s[l]&&Qt(i,r[l],n)){o=l;break}if(o<0)return!1;s[o]=1}return!0}function zy(t,e,n){let r=sr(t),s=sr(e);if(r||s||(r=kn(t),s=kn(e),r||s))return r&&s?Kh(t,e,n):!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const l in t){const c=t.hasOwnProperty(l),u=e.hasOwnProperty(l);if(c&&!u||!c&&u||!Qt(t[l],e[l],n))return!1}return String(t)===String(e)}function Gh(t,e,n,r){n||(n=[new Map,new Map]);const[s,i]=n;if(s.has(t)||i.has(e))return s.get(t)===e&&i.get(e)===t;s.set(t,e),i.set(e,t);const o=r(t,e,n);return s.delete(t),i.delete(e),o}function Qt(t,e,n){if(t===e)return!0;let r=Hh(t),s=Hh(e);return r||s?r&&s?t.getTime()===e.getTime():!1:(r=Lt(t),s=Lt(e),r||s?t===e:(r=ne(t),s=ne(e),r||s?r&&s?Gh(t,e,n,Gy):!1:(r=Se(t),s=Se(e),r||s?!r||!s?!1:Gh(t,e,n,zy):String(t)===String(e))))}function $c(t,e){return t.findIndex(n=>Qt(n,e))}const Ep=t=>!!(t&&t.__v_isRef===!0),Qy=t=>Le(t)?t:t==null?"":ne(t)||Se(t)&&(t.toString===mp||!fe(t.toString))?Ep(t)?Qy(t.value):JSON.stringify(t,Tp,2):String(t),Tp=(t,e)=>Ep(e)?Tp(t,e.value):sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Tl(r,i)+" =>"]=s,n),{})}:kn(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Tl(n))}:Lt(e)?Tl(e):Se(e)&&!ne(e)&&!_p(e)?String(e):e,Tl=(t,e="")=>{var n;return Lt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qe;class Ip{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Qe&&(Qe.active?(this.parent=Qe,this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=Qe;try{return Qe=this,e()}finally{Qe=n}}}on(){++this._on===1&&(this.prevScope=Qe,Qe=this)}off(){if(this._on>0&&--this._on===0){if(Qe===this)Qe=this.prevScope;else{let e=Qe;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function wp(t){return new Ip(t)}function Ap(){return Qe}function Jy(t,e=!1){Qe&&Qe.cleanups.push(t)}let Ve;const Il=new WeakSet;class Rp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qe&&(Qe.active?Qe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Il.has(this)&&(Il.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zh(this),Pp(this);const e=Ve,n=Gt;Ve=this,Gt=!0;try{return this.fn()}finally{Cp(this),Ve=e,Gt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Kc(e);this.deps=this.depsTail=void 0,zh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Il.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ql(this)&&this.run()}get dirty(){return Ql(this)}}let bp=0,li,ci;function Sp(t,e=!1){if(t.flags|=8,e){t.next=ci,ci=t;return}t.next=li,li=t}function Hc(){bp++}function Wc(){if(--bp>0)return;if(ci){let e=ci;for(ci=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;li;){let e=li;for(li=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Pp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Kc(r),Yy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ql(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Np(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Np(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ei)||(t.globalVersion=Ei,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ql(t))))return;t.flags|=2;const e=t.dep,n=Ve,r=Gt;Ve=t,Gt=!0;try{Pp(t);const s=t.fn(t._value);(e.version===0||sn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,Gt=r,Cp(t),t.flags&=-3}}function Kc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Kc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Yy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Gt=!0;const kp=[];function Vn(){kp.push(Gt),Gt=!1}function Dn(){const t=kp.pop();Gt=t===void 0?!0:t}function zh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let Ei=0;class Xy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ve||!Gt||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new Xy(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,Vp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,Ei++,this.notify(e)}notify(e){Hc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Wc()}}}function Vp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Vp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ko=new WeakMap,Lr=Symbol(""),Jl=Symbol(""),Ti=Symbol("");function ft(t,e,n){if(Gt&&Ve){let r=Ko.get(t);r||Ko.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Gc),s.map=r,s.key=n),s.track()}}function In(t,e,n,r,s,i){const o=Ko.get(t);if(!o){Ei++;return}const l=c=>{c&&c.trigger()};if(Hc(),e==="clear")o.forEach(l);else{const c=ne(t),u=c&&Ea(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===Ti||!Lt(g)&&g>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Ti)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Lr)),sr(t)&&l(o.get(Jl)));break;case"delete":c||(l(o.get(Lr)),sr(t)&&l(o.get(Jl)));break;case"set":sr(t)&&l(o.get(Lr));break}}Wc()}function Zy(t,e){const n=Ko.get(t);return n&&n.get(e)}function rs(t){const e=Ie(t);return e===t||(ft(e,"iterate",Ti),xt(t))?e:dn(t)?ln(t)?e.map(n=>ur($t(n))):e.map(ur):e.map($t)}function Ra(t){return ft(t=Ie(t),"iterate",Ti),t}function nn(t,e){return dn(t)?ur(ln(t)?$t(e):e):$t(e)}const ev={__proto__:null,[Symbol.iterator](){return wl(this,Symbol.iterator,t=>nn(this,t))},concat(...t){return rs(this).concat(...t.map(e=>ne(e)?rs(e):e))},entries(){return wl(this,"entries",t=>(t[1]=nn(this,t[1]),t))},every(t,e){return _n(this,"every",t,e,void 0,arguments)},filter(t,e){return _n(this,"filter",t,e,n=>n.map(r=>nn(this,r)),arguments)},find(t,e){return _n(this,"find",t,e,n=>nn(this,n),arguments)},findIndex(t,e){return _n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _n(this,"findLast",t,e,n=>nn(this,n),arguments)},findLastIndex(t,e){return _n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _n(this,"forEach",t,e,void 0,arguments)},includes(...t){return Al(this,"includes",t)},indexOf(...t){return Al(this,"indexOf",t)},join(t){return rs(this).join(t)},lastIndexOf(...t){return Al(this,"lastIndexOf",t)},map(t,e){return _n(this,"map",t,e,void 0,arguments)},pop(){return Gs(this,"pop")},push(...t){return Gs(this,"push",t)},reduce(t,...e){return Qh(this,"reduce",t,e)},reduceRight(t,...e){return Qh(this,"reduceRight",t,e)},shift(){return Gs(this,"shift")},some(t,e){return _n(this,"some",t,e,void 0,arguments)},splice(...t){return Gs(this,"splice",t)},toReversed(){return rs(this).toReversed()},toSorted(t){return rs(this).toSorted(t)},toSpliced(...t){return rs(this).toSpliced(...t)},unshift(...t){return Gs(this,"unshift",t)},values(){return wl(this,"values",t=>nn(this,t))}};function wl(t,e,n){const r=Ra(t),s=r[e]();return r!==t&&!xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const tv=Array.prototype;function _n(t,e,n,r,s,i){const o=Ra(t),l=o!==t&&!xt(t),c=o[e];if(c!==tv[e]){const p=c.apply(t,i);return l?$t(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,nn(t,p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function Qh(t,e,n,r){const s=Ra(t),i=s!==t&&!xt(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(u,f,p){return l&&(l=!1,u=nn(t,u)),n.call(this,u,nn(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const c=s[e](o,...r);return l?nn(t,c):c}function Al(t,e,n){const r=Ie(t);ft(r,"iterate",Ti);const s=r[e](...n);return(s===-1||s===!1)&&ba(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function Gs(t,e,n=[]){Vn(),Hc();const r=Ie(t)[e].apply(t,n);return Wc(),Dn(),r}const nv=Uc("__proto__,__v_isRef,__isVue"),Dp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Lt));function rv(t){Lt(t)||(t=String(t));const e=Ie(this);return ft(e,"has",t),e.hasOwnProperty(t)}class Op{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?dv:Fp:i?Mp:Lp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ne(e);if(!s){let c;if(o&&(c=ev[n]))return c;if(n==="hasOwnProperty")return rv}const l=Reflect.get(e,n,qe(e)?e:r);if((Lt(n)?Dp.has(n):nv(n))||(s||ft(e,"get",n),i))return l;if(qe(l)){const c=o&&Ea(n)?l:l.value;return s&&Se(c)?Xl(c):c}return Se(l)?s?Xl(l):qi(l):l}}class xp extends Op{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ne(e)&&Ea(n);if(!this._isShallow){const u=dn(i);if(!xt(r)&&!dn(r)&&(i=Ie(i),r=Ie(r)),!o&&qe(i)&&!qe(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:be(e,n),c=Reflect.set(e,n,r,qe(e)?e:s);return e===Ie(s)&&c&&(l?sn(r,i)&&In(e,"set",n,r):In(e,"add",n,r)),c}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&In(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Lt(n)||!Dp.has(n))&&ft(e,"has",n),r}ownKeys(e){return ft(e,"iterate",ne(e)?"length":Lr),Reflect.ownKeys(e)}}class sv extends Op{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const iv=new xp,ov=new sv,av=new xp(!0);const Yl=t=>t,To=t=>Reflect.getPrototypeOf(t);function lv(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=sr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?Yl:e?ur:$t;return!e&&ft(i,"iterate",c?Jl:Lr),Ye(Object.create(u),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}}})}}function Io(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function cv(t,e){const n={get(s){const i=this.__v_raw,o=Ie(i),l=Ie(s);t||(sn(s,l)&&ft(o,"get",s),ft(o,"get",l));const{has:c}=To(o),u=e?Yl:t?ur:$t;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ft(Ie(s),"iterate",Lr),s.size},has(s){const i=this.__v_raw,o=Ie(i),l=Ie(s);return t||(sn(s,l)&&ft(o,"has",s),ft(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ie(l),u=e?Yl:t?ur:$t;return!t&&ft(c,"iterate",Lr),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return Ye(n,t?{add:Io("add"),set:Io("set"),delete:Io("delete"),clear:Io("clear")}:{add(s){const i=Ie(this),o=To(i),l=Ie(s),c=!e&&!xt(s)&&!dn(s)?l:s;return o.has.call(i,c)||sn(s,c)&&o.has.call(i,s)||sn(l,c)&&o.has.call(i,l)||(i.add(c),In(i,"add",c,c)),this},set(s,i){!e&&!xt(i)&&!dn(i)&&(i=Ie(i));const o=Ie(this),{has:l,get:c}=To(o);let u=l.call(o,s);u||(s=Ie(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?sn(i,f)&&In(o,"set",s,i):In(o,"add",s,i),this},delete(s){const i=Ie(this),{has:o,get:l}=To(i);let c=o.call(i,s);c||(s=Ie(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&In(i,"delete",s,void 0),u},clear(){const s=Ie(this),i=s.size!==0,o=s.clear();return i&&In(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=lv(s,t,e)}),n}function zc(t,e){const n=cv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const uv={get:zc(!1,!1)},hv={get:zc(!1,!0)},fv={get:zc(!0,!1)};const Lp=new WeakMap,Mp=new WeakMap,Fp=new WeakMap,dv=new WeakMap;function pv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qi(t){return dn(t)?t:Qc(t,!1,iv,uv,Lp)}function Up(t){return Qc(t,!1,av,hv,Mp)}function Xl(t){return Qc(t,!0,ov,fv,Fp)}function Qc(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=pv(My(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function ln(t){return dn(t)?ln(t.__v_raw):!!(t&&t.__v_isReactive)}function dn(t){return!!(t&&t.__v_isReadonly)}function xt(t){return!!(t&&t.__v_isShallow)}function ba(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function Jc(t){return!be(t,"__v_skip")&&Object.isExtensible(t)&&yp(t,"__v_skip",!0),t}const $t=t=>Se(t)?qi(t):t,ur=t=>Se(t)?Xl(t):t;function qe(t){return t?t.__v_isRef===!0:!1}function Vr(t){return Bp(t,!1)}function gv(t){return Bp(t,!0)}function Bp(t,e){return qe(t)?t:new mv(t,e)}class mv{constructor(e,n){this.dep=new Gc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:$t(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||xt(e)||dn(e);e=r?e:Ie(e),sn(e,n)&&(this._rawValue=e,this._value=r?e:$t(e),this.dep.trigger())}}function ir(t){return qe(t)?t.value:t}const _v={get:(t,e,n)=>e==="__v_raw"?t:ir(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return qe(s)&&!qe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function jp(t){return ln(t)?t:new Proxy(t,_v)}function yv(t){const e=ne(t)?new Array(t.length):{};for(const n in t)e[n]=Ev(t,n);return e}class vv{constructor(e,n,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=Lt(n)?n:String(n),this._raw=Ie(e);let s=!0,i=e;if(!ne(e)||Lt(this._key)||!Ea(this._key))do s=!ba(i)||xt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=ir(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&qe(this._raw[this._key])){const n=this._object[this._key];if(qe(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Zy(this._raw,this._key)}}function Ev(t,e,n){return new vv(t,e,n)}class Tv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Gc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ei-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Sp(this,!0),!0}get value(){const e=this.dep.track();return Np(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Iv(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new Tv(r,s,n)}const wo={},Go=new WeakMap;let Sr;function wv(t,e=!1,n=Sr){if(n){let r=Go.get(n);r||Go.set(n,r=[]),r.push(t)}}function Av(t,e,n=ke){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=$=>s?$:xt($)||s===!1||s===0?wn($,1):wn($);let f,p,g,v,P=!1,N=!1;if(qe(t)?(p=()=>t.value,P=xt(t)):ln(t)?(p=()=>u(t),P=!0):ne(t)?(N=!0,P=t.some($=>ln($)||xt($)),p=()=>t.map($=>{if(qe($))return $.value;if(ln($))return u($);if(fe($))return c?c($,2):$()})):fe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Vn();try{g()}finally{Dn()}}const $=Sr;Sr=f;try{return c?c(t,3,[v]):t(v)}finally{Sr=$}}:p=an,e&&s){const $=p,X=s===!0?1/0:s;p=()=>wn($(),X)}const k=Ap(),q=()=>{f.stop(),k&&k.active&&Bc(k.effects,f)};if(i&&e){const $=e;e=(...X)=>{const re=$(...X);return q(),re}}let x=N?new Array(t.length).fill(wo):wo;const j=$=>{if(!(!(f.flags&1)||!f.dirty&&!$))if(e){const X=f.run();if($||s||P||(N?X.some((re,w)=>sn(re,x[w])):sn(X,x))){g&&g();const re=Sr;Sr=f;try{const w=[X,x===wo?void 0:N&&x[0]===wo?[]:x,v];x=X,c?c(e,3,w):e(...w)}finally{Sr=re}}}else f.run()};return l&&l(j),f=new Rp(p),f.scheduler=o?()=>o(j,!1):j,v=$=>wv($,!1,f),g=f.onStop=()=>{const $=Go.get(f);if($){if(c)c($,4);else for(const X of $)X();Go.delete(f)}},e?r?j(!0):x=f.run():o?o(j.bind(null,!0),!0):f.run(),q.pause=f.pause.bind(f),q.resume=f.resume.bind(f),q.stop=q,q}function wn(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,qe(t))wn(t.value,e,n);else if(ne(t))for(let r=0;r<t.length;r++)wn(t[r],e,n);else if(kn(t)||sr(t))t.forEach(r=>{wn(r,e,n)});else if(_p(t)){for(const r in t)wn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&wn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $i(t,e,n,r){try{return r?t(...r):t()}catch(s){Sa(s,e,n)}}function Ht(t,e,n,r){if(fe(t)){const s=$i(t,e,n,r);return s&&gp(s)&&s.catch(i=>{Sa(i,e,n)}),s}if(ne(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ht(t[i],e,n,r));return s}}function Sa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ke;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(i){Vn(),$i(i,null,10,[t,c,u]),Dn();return}}Rv(t,n,s,r,o)}function Rv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Tt=[];let tn=-1;const hs=[];let Yn=null,is=0;const qp=Promise.resolve();let zo=null;function Pa(t){const e=zo||qp;return t?e.then(this?t.bind(this):t):e}function bv(t){let e=tn+1,n=Tt.length;for(;e<n;){const r=e+n>>>1,s=Tt[r],i=Ii(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Yc(t){if(!(t.flags&1)){const e=Ii(t),n=Tt[Tt.length-1];!n||!(t.flags&2)&&e>=Ii(n)?Tt.push(t):Tt.splice(bv(e),0,t),t.flags|=1,$p()}}function $p(){zo||(zo=qp.then(Wp))}function Sv(t){if(!ne(t))Yn&&t.id===-1?Yn.splice(is+1,0,t):t.flags&1||(hs.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)hs.push(t[e]);$p()}function Jh(t,e,n=tn+1){for(;n<Tt.length;n++){const r=Tt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Tt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Hp(t){if(hs.length){const e=[...new Set(hs)].sort((n,r)=>Ii(n)-Ii(r));if(hs.length=0,Yn){for(let n=0;n<e.length;n++)Yn.push(e[n]);return}for(Yn=e,is=0;is<Yn.length;is++){const n=Yn[is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Yn=null,is=0}}const Ii=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Wp(t){try{for(tn=0;tn<Tt.length;tn++){const e=Tt[tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$i(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;tn<Tt.length;tn++){const e=Tt[tn];e&&(e.flags&=-2)}tn=-1,Tt.length=0,Hp(),zo=null,(Tt.length||hs.length)&&Wp()}}let st=null,Kp=null;function Qo(t){const e=st;return st=t,Kp=t&&t.type.__scopeId||null,e}function Pv(t,e=st,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Zo(-1);const i=Qo(e),o=Pn.length;let l;try{l=t(...s)}finally{for(let c=Pn.length;c>o;c--)nu();Qo(i),r._d&&Zo(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function qP(t,e){if(st===null)return t;const n=Oa(st),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=ke]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&wn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function wr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Vn(),Ht(c,n,8,[t.el,l,t,e]),Dn())}}function xo(t,e){if(gt){let n=gt.provides;const r=gt.parent&&gt.parent.provides;r===n&&(n=gt.provides=Object.create(r)),n[t]=e}}function zt(t,e,n=!1){const r=ru();if(r||Mr){let s=Mr?Mr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function Cv(){return!!(ru()||Mr)}const Nv=Symbol.for("v-scx"),kv=()=>zt(Nv);function ui(t,e,n){return Gp(t,e,n)}function Gp(t,e,n=ke){const{immediate:r,deep:s,flush:i,once:o}=n,l=Ye({},n),c=e&&r||!e&&i!=="post";let u;if(Si){if(i==="sync"){const v=kv();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=an,v.resume=an,v.pause=an,v}}const f=gt;l.call=(v,P,N)=>Ht(v,f,P,N);let p=!1;i==="post"?l.scheduler=v=>{vt(v,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(v,P)=>{P?v():Yc(v)}),l.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,f&&(v.id=f.uid,v.i=f))};const g=Av(t,e,l);return Si&&(u?u.push(g):c&&g()),g}function Vv(t,e,n){const r=this.proxy,s=Le(t)?t.includes(".")?zp(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Hi(this),l=Gp(s,i.bind(r),n);return o(),l}function zp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Qn=new WeakMap,Qp=Symbol("_vte"),Ca=t=>t.__isTeleport,Cr=t=>t&&(t.disabled||t.disabled===""),Dv=t=>t&&(t.defer||t.defer===""),Yh=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Xh=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Zl=(t,e)=>{const n=t&&t.to;return Le(n)?e?e(n):null:n},Ov={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,u){const{mc:f,pc:p,pbc:g,o:{insert:v,querySelector:P,createText:N,createComment:k,parentNode:q}}=u,x=Cr(e.props);let{dynamicChildren:j}=e;const $=(w,y,_)=>{w.shapeFlag&16&&f(w.children,y,_,s,i,o,l,c)},X=(w=e)=>{const y=Cr(w.props),_=w.target=Zl(w.props,P),I=ec(_,w,N,v);_&&(o!=="svg"&&Yh(_)?o="svg":o!=="mathml"&&Xh(_)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(_),y||($(w,_,I),Xs(w,!1)))},re=w=>{const y=()=>{if(Qn.get(w)===y){if(Qn.delete(w),Cr(w.props)){const _=q(w.el)||n;$(w,_,w.anchor),Xs(w,!0)}X(w)}};Qn.set(w,y),vt(y,i)};if(t==null){const w=e.el=N(""),y=e.anchor=N("");if(v(w,n,r),v(y,n,r),Dv(e.props)||i&&i.pendingBranch){re(e);return}x&&($(e,n,y),Xs(e,!0)),X()}else{e.el=t.el;const w=e.anchor=t.anchor,y=Qn.get(t);if(y){y.flags|=8,Qn.delete(t),re(e);return}e.targetStart=t.targetStart;const _=e.target=t.target,I=e.targetAnchor=t.targetAnchor,b=Cr(t.props),A=b?n:_,T=b?w:I;if(o==="svg"||Yh(_)?o="svg":(o==="mathml"||Xh(_))&&(o="mathml"),j?(g(t.dynamicChildren,j,A,s,i,o,l),tu(t,e,!0)):c||p(t,e,A,T,s,i,o,l,!1),x)b?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Ao(e,n,w,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const ve=Zl(e.props,P);ve&&(e.target=ve,Ao(e,ve,null,u,0))}else b&&Ao(e,_,I,u,1);Xs(e,x)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:u,targetAnchor:f,target:p,props:g}=t,v=Cr(g),P=i||!v,N=Qn.get(t);if(N&&(N.flags|=8,Qn.delete(t)),p&&(s(u),s(f)),i&&s(c),!N&&(v||p)&&o&16)for(let k=0;k<l.length;k++){const q=l[k];r(q,e,n,P,!!q.dynamicChildren)}},move:Ao,hydrate:xv};function Ao(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:u,props:f}=t,p=i===2;if(p&&r(o,e,n),!Qn.has(t)&&(!p||Cr(f))&&c&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);p&&r(l,e,n)}function xv(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:u,createText:f}},p){function g(k,q){let x=q;for(;x;){if(x&&x.nodeType===8){if(x.data==="teleport start anchor")e.targetStart=x;else if(x.data==="teleport anchor"){e.targetAnchor=x,k._lpa=e.targetAnchor&&o(e.targetAnchor);break}}x=o(x)}}function v(k,q){q.anchor=p(o(k),q,l(k),n,r,s,i)}const P=e.target=Zl(e.props,c),N=Cr(e.props);if(P){const k=P._lpa||P.firstChild;e.shapeFlag&16&&(N?(v(t,e),g(P,k),e.targetAnchor||ec(P,e,f,u,l(t)===P?t:null)):(e.anchor=o(t),g(P,k),e.targetAnchor||ec(P,e,f,u),p(k&&o(k),e,P,n,r,s,i))),Xs(e,N)}else N&&e.shapeFlag&16&&(v(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const $P=Ov;function Xs(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function ec(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[Qp]=o,t&&(r(i,t,s),r(o,t,s)),o}const jt=Symbol("_leaveCb"),zs=Symbol("_enterCb");function Lv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xc(()=>{t.isMounted=!0}),sg(()=>{t.isUnmounting=!0}),t}const Bt=[Function,Array],Jp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bt,onEnter:Bt,onAfterEnter:Bt,onEnterCancelled:Bt,onBeforeLeave:Bt,onLeave:Bt,onAfterLeave:Bt,onLeaveCancelled:Bt,onBeforeAppear:Bt,onAppear:Bt,onAfterAppear:Bt,onAppearCancelled:Bt},Yp=t=>{const e=t.subTree;return e.component?Yp(e.component):e},Mv={name:"BaseTransition",props:Jp,setup(t,{slots:e}){const n=ru(),r=Lv();return()=>{const s=e.default&&eg(e.default(),!0),i=s&&s.length?Xp(s):n.subTree?SE():void 0;if(!i)return;const o=Ie(t),{mode:l}=o;if(r.isLeaving)return Rl(i);const c=Jo(i);if(!c)return Rl(i);let u=tc(c,o,r,n,p=>u=p);c.type!==pt&&wi(c,u);let f=n.subTree&&Jo(n.subTree);if(f&&f.type!==pt&&!Nr(f,c)&&Yp(n).type!==pt){let p=tc(f,o,r,n);if(wi(f,p),l==="out-in"&&c.type!==pt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Rl(i);l==="in-out"&&c.type!==pt?p.delayLeave=(g,v,P)=>{const N=Zp(r,f);N[String(f.key)]=f,g[jt]=()=>{v(),g[jt]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{P(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Xp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==pt){e=n;break}}return e}const Fv=Mv;function Zp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function tc(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:v,onAfterLeave:P,onLeaveCancelled:N,onBeforeAppear:k,onAppear:q,onAfterAppear:x,onAppearCancelled:j}=e,$=String(t.key),X=Zp(n,t),re=(_,I)=>{_&&Ht(_,r,9,I)},w=(_,I)=>{const b=I[1];re(_,I),ne(_)?_.every(A=>A.length<=1)&&b():_.length<=1&&b()},y={mode:o,persisted:l,beforeEnter(_){let I=c;if(!n.isMounted)if(i)I=k||c;else return;_[jt]&&_[jt](!0);const b=X[$];b&&Nr(t,b)&&b.el[jt]&&b.el[jt](),re(I,[_])},enter(_){if(X[$]===t)return;let I=u,b=f,A=p;if(!n.isMounted)if(i)I=q||u,b=x||f,A=j||p;else return;let T=!1;_[zs]=$e=>{T||(T=!0,$e?re(A,[_]):re(b,[_]),y.delayedLeave&&y.delayedLeave(),_[zs]=void 0)};const ve=_[zs].bind(null,!1);I?w(I,[_,ve]):ve()},leave(_,I){const b=String(t.key);if(_[zs]&&_[zs](!0),n.isUnmounting)return I();re(g,[_]);let A=!1;_[jt]=ve=>{A||(A=!0,I(),ve?re(N,[_]):re(P,[_]),_[jt]=void 0,X[b]===t&&delete X[b])};const T=_[jt].bind(null,!1);X[b]=t,v?w(v,[_,T]):T()},clone(_){const I=tc(_,e,n,r,s);return s&&s(I),I}};return y}function Rl(t){if(Na(t))return t=hr(t),t.children=null,t}function Jo(t){if(!Na(t))return Ca(t.type)&&t.children?Xp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function wi(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;wi(Ca(n.type)&&Jo(n)||n,e)}else t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function eg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Nt?(o.patchFlag&128&&s++,r=r.concat(eg(o.children,e,l))):(e||o.type!==pt)&&r.push(l!=null?hr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function tg(t,e){return fe(t)?Ye({name:t.name},e,{setup:t}):t}function ng(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Zh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Yo=new WeakMap;function hi(t,e,n,r,s=!1){if(ne(t)){t.forEach((N,k)=>hi(N,e&&(ne(e)?e[k]:e),n,r,s));return}if(fs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&hi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Oa(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===ke?l.refs={}:l.refs,p=l.setupState,g=Ie(p),v=p===ke?pp:N=>Zh(f,N)?!1:be(g,N),P=(N,k)=>!(k&&Zh(f,k));if(u!=null&&u!==c){if(ef(e),Le(u))f[u]=null,v(u)&&(p[u]=null);else if(qe(u)){const N=e;P(u,N.k)&&(u.value=null),N.k&&(f[N.k]=null)}}if(fe(c))$i(c,l,12,[o,f]);else{const N=Le(c),k=qe(c);if(N||k){const q=()=>{if(t.f){const x=N?v(c)?p[c]:f[c]:P()||!t.k?c.value:f[t.k];if(s)ne(x)&&Bc(x,i);else if(ne(x))x.includes(i)||x.push(i);else if(N)f[c]=[i],v(c)&&(p[c]=f[c]);else{const j=[i];P(c,t.k)&&(c.value=j),t.k&&(f[t.k]=j)}}else N?(f[c]=o,v(c)&&(p[c]=o)):k&&(P(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const x=()=>{q(),Yo.delete(t)};x.id=-1,Yo.set(t,x),vt(x,n)}else ef(t),q()}}}function ef(t){const e=Yo.get(t);e&&(e.flags|=8,Yo.delete(t))}Aa().requestIdleCallback;Aa().cancelIdleCallback;const fs=t=>!!t.type.__asyncLoader,Na=t=>t.type.__isKeepAlive;function Uv(t,e){rg(t,"a",e)}function Bv(t,e){rg(t,"da",e)}function rg(t,e,n=gt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ka(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Na(s.parent.vnode)&&jv(r,e,n,s),s=s.parent}}function jv(t,e,n,r){const s=ka(e,t,r,!0);ig(()=>{Bc(r[e],s)},n)}function ka(t,e,n=gt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Vn();const l=Hi(n),c=Ht(e,n,t,o);return l(),Dn(),c});return r?s.unshift(i):s.push(i),i}}const Fn=t=>(e,n=gt)=>{(!Si||t==="sp")&&ka(t,(...r)=>e(...r),n)},qv=Fn("bm"),Xc=Fn("m"),$v=Fn("bu"),Hv=Fn("u"),sg=Fn("bum"),ig=Fn("um"),Wv=Fn("sp"),Kv=Fn("rtg"),Gv=Fn("rtc");function zv(t,e=gt){ka("ec",t,e)}const Qv="components";function HP(t,e){return Yv(Qv,t,!0,e)||t}const Jv=Symbol.for("v-ndc");function Yv(t,e,n=!0,r=!1){const s=st||gt;if(s){const i=s.type;{const l=LE(i,!1);if(l&&(l===e||l===wt(e)||l===Ia(wt(e))))return i}const o=tf(s[t]||i[t],e)||tf(s.appContext[t],e);return!o&&r?i:o}}function tf(t,e){return t&&(t[e]||t[wt(e)]||t[Ia(wt(e))])}function WP(t,e,n,r){let s;const i=n,o=ne(t);if(o||Le(t)){const l=o&&ln(t);let c=!1,u=!1;l&&(c=!xt(t),u=dn(t),t=Ra(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?ur($t(t[f])):$t(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}function KP(t,e,n,r,s,i){if(n==null&&(n={}),st.ce||st.parent&&fs(st.parent)&&st.parent.ce){const u=n,f=Object.keys(u).length>0;return Fr(),ea(Nt,null,[It("slot",u,r)],f?-2:64)}let o=t[e];o&&o._c&&(o._d=!1);const l=Pn.length;Fr();let c;try{const u=o&&og(o(n)),f=n.key||i||u&&u.key;c=ea(Nt,{key:(f&&!Lt(f)?f:`_${e}`)+(!u&&r?"_fb":"")},u||(r?r():[]),u&&t._===1?64:-2)}catch(u){for(let f=Pn.length;f>l;f--)nu();throw u}finally{o&&o._c&&(o._d=!0)}return c}function og(t){return t.some(e=>Ri(e)?!(e.type===pt||e.type===Nt&&!og(e.children)):!0)?t:null}const nc=t=>t?Rg(t)?Oa(t):nc(t.parent):null,fi=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>nc(t.parent),$root:t=>nc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>lg(t),$forceUpdate:t=>t.f||(t.f=()=>{Yc(t.update)}),$nextTick:t=>t.n||(t.n=Pa.bind(t.proxy)),$watch:t=>Vv.bind(t)}),bl=(t,e)=>t!==ke&&!t.__isScriptSetup&&be(t,e),Xv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(bl(r,e))return o[e]=1,r[e];if(s!==ke&&be(s,e))return o[e]=2,s[e];if(be(i,e))return o[e]=3,i[e];if(n!==ke&&be(n,e))return o[e]=4,n[e];rc&&(o[e]=0)}}const u=fi[e];let f,p;if(u)return e==="$attrs"&&ft(t.attrs,"get",""),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==ke&&be(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,be(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return bl(s,e)?(s[e]=n,!0):r!==ke&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==ke&&l[0]!=="$"&&be(t,l)||bl(e,l)||be(i,l)||be(r,l)||be(fi,l)||be(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function nf(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let rc=!0;function Zv(t){const e=lg(t),n=t.proxy,r=t.ctx;rc=!1,e.beforeCreate&&rf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:g,beforeUpdate:v,updated:P,activated:N,deactivated:k,beforeDestroy:q,beforeUnmount:x,destroyed:j,unmounted:$,render:X,renderTracked:re,renderTriggered:w,errorCaptured:y,serverPrefetch:_,expose:I,inheritAttrs:b,components:A,directives:T,filters:ve}=e;if(u&&eE(u,r,null),o)for(const ce in o){const me=o[ce];fe(me)&&(r[ce]=me.bind(n))}if(s){const ce=s.call(n,n);Se(ce)&&(t.data=qi(ce))}if(rc=!0,i)for(const ce in i){const me=i[ce],St=fe(me)?me.bind(n,n):fe(me.get)?me.get.bind(n,n):an,Wt=!fe(me)&&fe(me.set)?me.set.bind(n):an,Mt=kt({get:St,set:Wt});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:xe=>Mt.value=xe})}if(l)for(const ce in l)ag(l[ce],r,n,ce);if(c){const ce=fe(c)?c.call(n):c;Reflect.ownKeys(ce).forEach(me=>{xo(me,ce[me])})}f&&rf(f,t,"c");function Pe(ce,me){ne(me)?me.forEach(St=>ce(St.bind(n))):me&&ce(me.bind(n))}if(Pe(qv,p),Pe(Xc,g),Pe($v,v),Pe(Hv,P),Pe(Uv,N),Pe(Bv,k),Pe(zv,y),Pe(Gv,re),Pe(Kv,w),Pe(sg,x),Pe(ig,$),Pe(Wv,_),ne(I))if(I.length){const ce=t.exposed||(t.exposed={});I.forEach(me=>{Object.defineProperty(ce,me,{get:()=>n[me],set:St=>n[me]=St,enumerable:!0})})}else t.exposed||(t.exposed={});X&&t.render===an&&(t.render=X),b!=null&&(t.inheritAttrs=b),A&&(t.components=A),T&&(t.directives=T),_&&ng(t)}function eE(t,e,n=an){ne(t)&&(t=sc(t));for(const r in t){const s=t[r];let i;Se(s)?"default"in s?i=zt(s.from||r,s.default,!0):i=zt(s.from||r):i=zt(s),qe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function rf(t,e,n){Ht(ne(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ag(t,e,n,r){let s=r.includes(".")?zp(n,r):()=>n[r];if(Le(t)){const i=e[t];fe(i)&&ui(s,i)}else if(fe(t))ui(s,t.bind(n));else if(Se(t))if(ne(t))t.forEach(i=>ag(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&ui(s,i,t)}}function lg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Xo(c,u,o,!0)),Xo(c,e,o)),Se(e)&&i.set(e,c),c}function Xo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Xo(t,i,n,!0),s&&s.forEach(o=>Xo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=tE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const tE={data:sf,props:of,emits:of,methods:Zs,computed:Zs,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:Zs,directives:Zs,watch:rE,provide:sf,inject:nE};function sf(t,e){return e?t?function(){return Ye(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function nE(t,e){return Zs(sc(t),sc(e))}function sc(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function Zs(t,e){return t?Ye(Object.create(null),t,e):e}function of(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:Ye(Object.create(null),nf(t),nf(e??{})):e}function rE(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const r in e)n[r]=yt(t[r],e[r]);return n}function cg(){return{app:null,config:{isNativeTag:pp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sE=0;function iE(t,e){return function(r,s=null){fe(r)||(r=Ye({},r)),s!=null&&!Se(s)&&(s=null);const i=cg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:sE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:FE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&fe(f.install)?(o.add(f),f.install(u,...p)):fe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,g){if(!c){const v=u._ceVNode||It(r,s);return v.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(v,f,g),c=!0,u._container=f,f.__vue_app__=u,Oa(v.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Ht(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Mr;Mr=u;try{return f()}finally{Mr=p}}};return u}}let Mr=null;const oE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${wt(e)}Modifiers`]||t[`${Kr(e)}Modifiers`];function aE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ke;let s=n;const i=e.startsWith("update:"),o=i&&oE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Le(f)?f.trim():f)),o.number&&(s=s.map(wa)));let l,c=r[l=El(e)]||r[l=El(wt(e))];!c&&i&&(c=r[l=El(Kr(e))]),c&&Ht(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ht(u,t,6,s)}}const lE=new WeakMap;function ug(t,e,n=!1){const r=n?lE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!fe(t)){const c=u=>{const f=ug(u,e,!0);f&&(l=!0,Ye(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Se(t)&&r.set(t,null),null):(ne(i)?i.forEach(c=>o[c]=null):Ye(o,i),Se(t)&&r.set(t,o),o)}function Va(t,e){return!t||!ya(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,Kr(e))||be(t,e))}function af(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:g,setupState:v,ctx:P,inheritAttrs:N}=t,k=Qo(t);let q,x;try{if(n.shapeFlag&4){const $=s||r,X=$;q=rn(u.call(X,$,f,p,v,g,P)),x=l}else{const $=e;q=rn($.length>1?$(p,{attrs:l,slots:o,emit:c}):$(p,null)),x=e.props?l:cE(l)}}catch($){Pn.length=0,Sa($,t,1),q=It(pt)}let j=q;if(x&&N!==!1){const $=Object.keys(x),{shapeFlag:X}=j;$.length&&X&7&&(i&&$.some(va)&&(x=uE(x,i)),j=hr(j,x,!1,!0))}if(n.dirs&&(j=hr(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition){const $=Ca(j.type)&&Jo(j)||j;wi($,n.transition)}return q=j,Qo(k),q}const cE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ya(n))&&((e||(e={}))[n]=t[n]);return e},uE=(t,e)=>{const n={};for(const r in t)(!va(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function hE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?lf(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(hg(o,r,g)&&!Va(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?lf(r,o,u):!0:!!o;return!1}function lf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(hg(e,t,i)&&!Va(n,i))return!0}return!1}function hg(t,e,n){const r=t[n],s=e[n];return n==="style"&&Se(r)&&Se(s)?!Qt(r,s):r!==s}function fE({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const fg={},dg=()=>Object.create(fg),pg=t=>Object.getPrototypeOf(t)===fg;function dE(t,e,n,r=!1){const s={},i=dg();t.propsDefaults=Object.create(null),gg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Up(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function pE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ie(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Va(t.emitsOptions,g))continue;const v=e[g];if(c)if(be(i,g))v!==i[g]&&(i[g]=v,u=!0);else{const P=wt(g);s[P]=ic(c,l,P,v,t,!1)}else v!==i[g]&&(i[g]=v,u=!0)}}}else{gg(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!be(e,p)&&((f=Kr(p))===p||!be(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=ic(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!be(e,p))&&(delete i[p],u=!0)}u&&In(t.attrs,"set","")}function gg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ai(c))continue;const u=e[c];let f;s&&be(s,f=wt(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:Va(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ie(n),u=l||ke;for(let f=0;f<i.length;f++){const p=i[f];n[p]=ic(s,c,p,u[p],t,!be(u,p))}}return o}function ic(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=be(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Hi(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Kr(n))&&(r=!0))}return r}const gE=new WeakMap;function mg(t,e,n=!1){const r=n?gE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!fe(t)){const f=p=>{c=!0;const[g,v]=mg(p,e,!0);Ye(o,g),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Se(t)&&r.set(t,kr),kr;if(ne(i))for(let f=0;f<i.length;f++){const p=wt(i[f]);cf(p)&&(o[p]=ke)}else if(i)for(const f in i){const p=wt(f);if(cf(p)){const g=i[f],v=o[p]=ne(g)||fe(g)?{type:g}:Ye({},g),P=v.type;let N=!1,k=!0;if(ne(P))for(let q=0;q<P.length;++q){const x=P[q],j=fe(x)&&x.name;if(j==="Boolean"){N=!0;break}else j==="String"&&(k=!1)}else N=fe(P)&&P.name==="Boolean";v[0]=N,v[1]=k,(N||be(v,"default"))&&l.push(p)}}const u=[o,l];return Se(t)&&r.set(t,u),u}function cf(t){return t[0]!=="$"&&!ai(t)}const Zc=t=>t==="_"||t==="_ctx"||t==="$stable",eu=t=>ne(t)?t.map(rn):[rn(t)],mE=(t,e,n)=>{if(e._n)return e;const r=Pv((...s)=>eu(e(...s)),n);return r._c=!1,r},_g=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Zc(s))continue;const i=t[s];if(fe(i))e[s]=mE(s,i,r);else if(i!=null){const o=eu(i);e[s]=()=>o}}},yg=(t,e)=>{const n=eu(e);t.slots.default=()=>n},vg=(t,e,n)=>{for(const r in e)(n||!Zc(r))&&(t[r]=e[r])},_E=(t,e,n)=>{const r=t.slots=dg();if(t.vnode.shapeFlag&32){const s=e._;s?(vg(r,e,n),n&&yp(r,"_",s,!0)):_g(e,r)}else e&&yg(t,e)},yE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ke;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:vg(s,e,n):(i=!e.$stable,_g(e,s)),o=e}else e&&(yg(t,e),o={default:1});if(i)for(const l in s)!Zc(l)&&o[l]==null&&delete s[l]},vt=wE;function vE(t){return EE(t)}function EE(t,e){const n=Aa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:g,setScopeId:v=an,insertStaticContent:P}=t,N=(E,R,S,D=null,M=null,O=null,G=void 0,W=null,H=!!R.dynamicChildren)=>{if(E===R)return;E&&!Nr(E,R)&&(D=L(E),xe(E,M,O,!0),E=null),R.patchFlag===-2&&(H=!1,R.dynamicChildren=null),R.dynamicChildren&&E&&E.dynamicChildren&&E.dynamicChildren.hasOnce&&(R.dynamicChildren===kr&&(R.dynamicChildren=[]),R.dynamicChildren.hasOnce=!0);const{type:U,ref:ie,shapeFlag:Q}=R;switch(U){case Da:k(E,R,S,D);break;case pt:q(E,R,S,D);break;case Pl:E==null&&x(R,S,D,G);break;case Nt:A(E,R,S,D,M,O,G,W,H);break;default:Q&1?X(E,R,S,D,M,O,G,W,H):Q&6?T(E,R,S,D,M,O,G,W,H):(Q&64||Q&128)&&U.process(E,R,S,D,M,O,G,W,H,ee)}ie!=null&&M?hi(ie,E&&E.ref,O,R||E,!R):ie==null&&E&&E.ref!=null&&hi(E.ref,null,O,E,!0)},k=(E,R,S,D)=>{if(E==null)r(R.el=l(R.children),S,D);else{const M=R.el=E.el;R.children!==E.children&&u(M,R.children)}},q=(E,R,S,D)=>{E==null?r(R.el=c(R.children||""),S,D):R.el=E.el},x=(E,R,S,D)=>{[E.el,E.anchor]=P(E.children,R,S,D,E.el,E.anchor)},j=({el:E,anchor:R},S,D)=>{let M;for(;E&&E!==R;)M=g(E),r(E,S,D),E=M;r(R,S,D)},$=({el:E,anchor:R})=>{let S;for(;E&&E!==R;)S=g(E),s(E),E=S;s(R)},X=(E,R,S,D,M,O,G,W,H)=>{if(R.type==="svg"?G="svg":R.type==="math"&&(G="mathml"),E==null)re(R,S,D,M,O,G,W,H);else{const U=E.el&&E.el._isVueCE?E.el:null;try{U&&U._beginPatch(),_(E,R,M,O,G,W,H)}finally{U&&U._endPatch()}}},re=(E,R,S,D,M,O,G,W)=>{let H,U;const{props:ie,shapeFlag:Q,transition:te,dirs:ae}=E;if(H=E.el=o(E.type,O,ie&&ie.is,ie),Q&8?f(H,E.children):Q&16&&y(E.children,H,null,D,M,Sl(E,O),G,W),ae&&wr(E,null,D,"created"),w(H,E,E.scopeId,G,D),ie){for(const pe in ie)pe!=="value"&&!ai(pe)&&i(H,pe,null,ie[pe],O,D);"value"in ie&&i(H,"value",null,ie.value,O),(U=ie.onVnodeBeforeMount)&&en(U,D,E)}ae&&wr(E,null,D,"beforeMount");const oe=TE(M,te);oe&&te.beforeEnter(H),r(H,R,S),((U=ie&&ie.onVnodeMounted)||oe||ae)&&vt(()=>{try{U&&en(U,D,E),oe&&te.enter(H),ae&&wr(E,null,D,"mounted")}finally{}},M)},w=(E,R,S,D,M)=>{if(S&&v(E,S),D)for(let O=0;O<D.length;O++)v(E,D[O]);if(M){let O=M.subTree;if(R===O||Ig(O.type)&&(O.ssContent===R||O.ssFallback===R)){const G=M.vnode;w(E,G,G.scopeId,G.slotScopeIds,M.parent)}}},y=(E,R,S,D,M,O,G,W,H=0)=>{for(let U=H;U<E.length;U++){const ie=E[U]=W?Tn(E[U]):rn(E[U]);N(null,ie,R,S,D,M,O,G,W)}},_=(E,R,S,D,M,O,G)=>{const W=R.el=E.el;let{patchFlag:H,dynamicChildren:U,dirs:ie}=R;H|=E.patchFlag&16;const Q=E.props||ke,te=R.props||ke;let ae;if(S&&Ar(S,!1),(ae=te.onVnodeBeforeUpdate)&&en(ae,S,R,E),ie&&wr(R,E,S,"beforeUpdate"),S&&Ar(S,!0),U&&(!E.dynamicChildren||E.dynamicChildren.length!==U.length)&&(H=0,G=!1,U=null),(Q.innerHTML&&te.innerHTML==null||Q.textContent&&te.textContent==null)&&f(W,""),U?I(E.dynamicChildren,U,W,S,D,Sl(R,M),O):G||me(E,R,W,null,S,D,Sl(R,M),O,!1),H>0){if(H&16)b(W,Q,te,S,M);else if(H&2&&Q.class!==te.class&&i(W,"class",null,te.class,M),H&4&&i(W,"style",Q.style,te.style,M),H&8){const oe=R.dynamicProps;for(let pe=0;pe<oe.length;pe++){const Te=oe[pe],Fe=Q[Te],We=te[Te];(We!==Fe||Te==="value")&&i(W,Te,Fe,We,M,S)}}H&1&&E.children!==R.children&&f(W,R.children)}else!G&&U==null&&b(W,Q,te,S,M);((ae=te.onVnodeUpdated)||ie)&&vt(()=>{ae&&en(ae,S,R,E),ie&&wr(R,E,S,"updated")},D)},I=(E,R,S,D,M,O,G)=>{for(let W=0;W<R.length;W++){const H=E[W],U=R[W],ie=H.el&&(H.type===Nt||!Nr(H,U)||H.shapeFlag&198)?p(H.el):S;N(H,U,ie,null,D,M,O,G,!0)}},b=(E,R,S,D,M)=>{if(R!==S){if(R!==ke)for(const O in R)!ai(O)&&!(O in S)&&i(E,O,R[O],null,M,D);for(const O in S){if(ai(O))continue;const G=S[O],W=R[O];G!==W&&O!=="value"&&i(E,O,W,G,M,D)}"value"in S&&i(E,"value",R.value,S.value,M)}},A=(E,R,S,D,M,O,G,W,H)=>{const U=R.el=E?E.el:l(""),ie=R.anchor=E?E.anchor:l("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:ae}=R;ae&&(W=W?W.concat(ae):ae),E==null?(r(U,S,D),r(ie,S,D),y(R.children||[],S,ie,M,O,G,W,H)):Q>0&&Q&64&&te&&E.dynamicChildren&&E.dynamicChildren.length===te.length?(I(E.dynamicChildren,te,S,M,O,G,W),(R.key!=null||M&&R===M.subTree)&&tu(E,R,!0)):me(E,R,S,ie,M,O,G,W,H)},T=(E,R,S,D,M,O,G,W,H)=>{R.slotScopeIds=W,E==null?R.shapeFlag&512?M.ctx.activate(R,S,D,G,H):ve(R,S,D,M,O,G,H):$e(E,R,H)},ve=(E,R,S,D,M,O,G)=>{const W=E.component=kE(E,D,M);if(Na(E)&&(W.ctx.renderer=ee),VE(W,!1,G),W.asyncDep){if(M&&M.registerDep(W,Pe,G),!E.el){const H=W.subTree=It(pt);q(null,H,R,S),E.placeholder=H.el}}else Pe(W,E,R,S,M,O,G)},$e=(E,R,S)=>{const D=R.component=E.component;if(hE(E,R,S))if(D.asyncDep&&!D.asyncResolved){R.el=E.el,ce(D,R,S);return}else D.next=R,D.update();else R.el=E.el,D.vnode=R},Pe=(E,R,S,D,M,O,G)=>{const W=()=>{if(E.isMounted){let{next:Q,bu:te,u:ae,parent:oe,vnode:pe}=E;{const at=Eg(E);if(at){Q&&(Q.el=pe.el,ce(E,Q,G)),at.asyncDep.then(()=>{vt(()=>{E.isUnmounted||U()},M)});return}}let Te=Q,Fe;Ar(E,!1),Q?(Q.el=pe.el,ce(E,Q,G)):Q=pe,te&&Oo(te),(Fe=Q.props&&Q.props.onVnodeBeforeUpdate)&&en(Fe,oe,Q,pe),Ar(E,!0);const We=af(E),Ft=E.subTree;E.subTree=We,N(Ft,We,p(Ft.el),L(Ft),E,M,O),Q.el=We.el,Te===null&&fE(E,We.el),ae&&vt(ae,M),(Fe=Q.props&&Q.props.onVnodeUpdated)&&vt(()=>en(Fe,oe,Q,pe),M)}else{let Q;const{el:te,props:ae}=R,{bm:oe,m:pe,parent:Te,root:Fe,type:We}=E,Ft=fs(R);Ar(E,!1),oe&&Oo(oe),!Ft&&(Q=ae&&ae.onVnodeBeforeMount)&&en(Q,Te,R),Ar(E,!0);{Fe.ce&&Fe.ce._hasShadowRoot()&&Fe.ce._injectChildStyle(We,E.parent?E.parent.type:void 0);const at=E.subTree=af(E);N(null,at,S,D,E,M,O),R.el=at.el}if(pe&&vt(pe,M),!Ft&&(Q=ae&&ae.onVnodeMounted)){const at=R;vt(()=>en(Q,Te,at),M)}(R.shapeFlag&256||Te&&fs(Te.vnode)&&Te.vnode.shapeFlag&256)&&E.a&&vt(E.a,M),E.isMounted=!0,R=S=D=null}};E.scope.on();const H=E.effect=new Rp(W);E.scope.off();const U=E.update=H.run.bind(H),ie=E.job=H.runIfDirty.bind(H);ie.i=E,ie.id=E.uid,H.scheduler=()=>Yc(ie),Ar(E,!0),U()},ce=(E,R,S)=>{R.component=E;const D=E.vnode.props;E.vnode=R,E.next=null,pE(E,R.props,D,S),yE(E,R.children,S),Vn(),Jh(E),Dn()},me=(E,R,S,D,M,O,G,W,H=!1)=>{const U=E&&E.children,ie=E?E.shapeFlag:0,Q=R.children,{patchFlag:te,shapeFlag:ae}=R;if(te>0){if(te&128){Wt(U,Q,S,D,M,O,G,W,H);return}else if(te&256){St(U,Q,S,D,M,O,G,W,H);return}}ae&8?(ie&16&&Rt(U,M,O),Q!==U&&f(S,Q)):ie&16?ae&16?Wt(U,Q,S,D,M,O,G,W,H):Rt(U,M,O,!0):(ie&8&&f(S,""),ae&16&&y(Q,S,D,M,O,G,W,H))},St=(E,R,S,D,M,O,G,W,H)=>{E=E||kr,R=R||kr;const U=E.length,ie=R.length,Q=Math.min(U,ie);let te;for(te=0;te<Q;te++){const ae=R[te]=H?Tn(R[te]):rn(R[te]);N(E[te],ae,S,null,M,O,G,W,H)}U>ie?Rt(E,M,O,!0,!1,Q):y(R,S,D,M,O,G,W,H,Q)},Wt=(E,R,S,D,M,O,G,W,H)=>{let U=0;const ie=R.length;let Q=E.length-1,te=ie-1;for(;U<=Q&&U<=te;){const ae=E[U],oe=R[U]=H?Tn(R[U]):rn(R[U]);if(Nr(ae,oe))N(ae,oe,S,null,M,O,G,W,H);else break;U++}for(;U<=Q&&U<=te;){const ae=E[Q],oe=R[te]=H?Tn(R[te]):rn(R[te]);if(Nr(ae,oe))N(ae,oe,S,null,M,O,G,W,H);else break;Q--,te--}if(U>Q){if(U<=te){const ae=te+1,oe=ae<ie?R[ae].el:D;for(;U<=te;)N(null,R[U]=H?Tn(R[U]):rn(R[U]),S,oe,M,O,G,W,H),U++}}else if(U>te)for(;U<=Q;)xe(E[U],M,O,!0),U++;else{const ae=U,oe=U,pe=new Map;for(U=oe;U<=te;U++){const et=R[U]=H?Tn(R[U]):rn(R[U]);et.key!=null&&pe.set(et.key,U)}let Te,Fe=0;const We=te-oe+1;let Ft=!1,at=0;const jn=new Array(We);for(U=0;U<We;U++)jn[U]=0;for(U=ae;U<=Q;U++){const et=E[U];if(Fe>=We){xe(et,M,O,!0);continue}let Ut;if(et.key!=null)Ut=pe.get(et.key);else for(Te=oe;Te<=te;Te++)if(jn[Te-oe]===0&&Nr(et,R[Te])){Ut=Te;break}Ut===void 0?xe(et,M,O,!0):(jn[Ut-oe]=U+1,Ut>=at?at=Ut:Ft=!0,N(et,R[Ut],S,null,M,O,G,W,H),Fe++)}const Os=Ft?IE(jn):kr;for(Te=Os.length-1,U=We-1;U>=0;U--){const et=oe+U,Ut=R[et],so=R[et+1],Xr=et+1<ie?so.el||Tg(so):D;jn[U]===0?N(null,Ut,S,Xr,M,O,G,W,H):Ft&&(Te<0||U!==Os[Te]?Mt(Ut,S,Xr,2):Te--)}}},Mt=(E,R,S,D,M=null)=>{const{el:O,type:G,transition:W,children:H,shapeFlag:U}=E;if(U&6){Mt(E.component.subTree,R,S,D);return}if(U&128){E.suspense.move(R,S,D);return}if(U&64){G.move(E,R,S,ee);return}if(G===Nt){r(O,R,S);for(let Q=0;Q<H.length;Q++)Mt(H[Q],R,S,D);r(E.anchor,R,S);return}if(G===Pl){j(E,R,S);return}if(D!==2&&U&1&&W)if(D===0)W.persisted&&!O[jt]?r(O,R,S):(W.beforeEnter(O),r(O,R,S),vt(()=>W.enter(O),M));else{const{leave:Q,delayLeave:te,afterLeave:ae}=W,oe=()=>{E.ctx.isUnmounted?s(O):r(O,R,S)},pe=()=>{const Te=O._isLeaving||!!O[jt];O._isLeaving&&O[jt](!0),W.persisted&&!Te?oe():Q(O,()=>{oe(),ae&&ae()})};te?te(O,oe,pe):pe()}else r(O,R,S)},xe=(E,R,S,D=!1,M=!1)=>{const{type:O,props:G,ref:W,children:H,dynamicChildren:U,shapeFlag:ie,patchFlag:Q,dirs:te,cacheIndex:ae,memo:oe}=E;if((Q===-2||U&&U.hasOnce)&&(M=!1),W!=null&&(Vn(),hi(W,null,S,E,!0),Dn()),ae!=null&&(!E.ctx||E.ctx===R)&&(R.renderCache[ae]=void 0),ie&256){R.ctx.deactivate(E);return}const pe=ie&1&&te,Te=!fs(E);let Fe;if(Te&&(Fe=G&&G.onVnodeBeforeUnmount)&&en(Fe,R,E),ie&6)Pt(E.component,S,D);else{if(ie&128){E.suspense.unmount(S,D);return}pe&&wr(E,null,R,"beforeUnmount"),ie&64?E.type.remove(E,R,S,ee,D):U&&!U.hasOnce&&(O!==Nt||Q>0&&Q&64)?Rt(U,R,S,!1,!0):(O===Nt&&Q&384||!M&&ie&16)&&Rt(H,R,S),D&&Me(E)}const We=oe!=null&&ae==null;(Te&&(Fe=G&&G.onVnodeUnmounted)||pe||We)&&vt(()=>{Fe&&en(Fe,R,E),pe&&wr(E,null,R,"unmounted"),We&&(E.el=null)},S)},Me=E=>{const{type:R,el:S,anchor:D,transition:M}=E;if(R===Nt){Bn(S,D);return}if(R===Pl){$(E),M&&!M.persisted&&M.afterLeave&&M.afterLeave();return}const O=()=>{s(S),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(E.shapeFlag&1&&M&&!M.persisted){const{leave:G,delayLeave:W}=M,H=()=>G(S,O);W?W(E.el,O,H):H()}else O()},Bn=(E,R)=>{let S;for(;E!==R;)S=g(E),s(E),E=S;s(R)},Pt=(E,R,S)=>{const{bum:D,scope:M,job:O,subTree:G,um:W,m:H,a:U}=E;uf(H),uf(U),D&&Oo(D),M.stop(),O?(O.flags|=8,xe(G,E,R,S)):E.vnode.el&&G&&(G.transition=E.vnode.transition,xe(G,E,R,S)),W&&vt(W,R),vt(()=>{E.isUnmounted=!0},R)},Rt=(E,R,S,D=!1,M=!1,O=0)=>{for(let G=O;G<E.length;G++)xe(E[G],R,S,D,M)},L=E=>{if(E.shapeFlag&6)return L(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const R=g(E.anchor||E.el),S=R&&R[Qp];return S?g(S):R};let Y=!1;const z=(E,R,S)=>{let D;E==null?R._vnode&&(xe(R._vnode,null,null,!0),D=R._vnode.component):N(R._vnode||null,E,R,null,null,null,S),R._vnode=E,Y||(Y=!0,Jh(D),Hp(),Y=!1)},ee={p:N,um:xe,m:Mt,r:Me,mt:ve,mc:y,pc:me,pbc:I,n:L,o:t};return{render:z,hydrate:void 0,createApp:iE(z)}}function Sl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ar({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function TE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function tu(t,e,n=!1){const r=t.children,s=e.children;if(ne(r)&&ne(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Tn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&tu(o,l)),l.type===Da&&(l.patchFlag===-1&&(l=s[i]=Tn(l)),l.el=o.el),l.type===pt&&!l.el&&(l.el=o.el)}}function IE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Eg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Eg(e)}function uf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Tg(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Tg(e.subTree):null}const Ig=t=>t.__isSuspense;function wE(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):Sv(t)}const Nt=Symbol.for("v-fgt"),Da=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),Pl=Symbol.for("v-stc"),Pn=[];let Vt=null;function Fr(t=!1){Pn.push(Vt=t?null:[])}function nu(){Pn.pop(),Vt=Pn[Pn.length-1]||null}let Ai=1;function Zo(t,e=!1){Ai+=t,t<0&&Vt&&e&&(Vt.hasOnce=!0)}function wg(t){return t.dynamicChildren=Ai>0?Vt||kr:null,nu(),Ai>0&&Vt&&Vt.push(t),t}function oc(t,e,n,r,s,i){return wg(Dr(t,e,n,r,s,i,!0))}function ea(t,e,n,r,s){return wg(It(t,e,n,r,s,!0))}function Ri(t){return t?t.__v_isVNode===!0:!1}function Nr(t,e){return t.type===e.type&&t.key===e.key}const Ag=({key:t})=>t??null,Lo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Le(t)||qe(t)||fe(t)?{i:st,r:t,k:e,f:!!n}:t:null);function Dr(t,e=null,n=null,r=0,s=null,i=t===Nt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ag(e),ref:e&&Lo(e),scopeId:Kp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:st};return l?(ta(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Le(n)?8:16),Ai>0&&!o&&Vt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Vt.push(c),c}const It=AE;function AE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Jv)&&(t=pt),Ri(t)){const l=hr(t,e,!0);return n&&ta(l,n),Ai>0&&!i&&Vt&&(l.shapeFlag&6?Vt[Vt.indexOf(t)]=l:Vt.push(l)),l.patchFlag=-2,l}if(ME(t)&&(t=t.__vccOpts),e){e=RE(e);let{class:l,style:c}=e;l&&!Le(l)&&(e.class=qc(l)),Se(c)&&(ba(c)&&!ne(c)&&(c=Ye({},c)),e.style=jc(c))}const o=Le(t)?1:Ig(t)?128:Ca(t)?64:Se(t)?4:fe(t)?2:0;return Dr(t,e,n,r,s,o,i,!0)}function RE(t){return t?ba(t)||pg(t)?Ye({},t):t:null}function hr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?PE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Ag(u),ref:e&&e.ref?n&&i?ne(i)?i.concat(Lo(e)):[i,Lo(e)]:Lo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Nt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hr(t.ssContent),ssFallback:t.ssFallback&&hr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return c&&r&&wi(f,c.clone(f)),f}function bE(t=" ",e=0){return It(Da,null,t,e)}function SE(t="",e=!1){return e?(Fr(),ea(pt,null,t)):It(pt,null,t)}function rn(t){return t==null||typeof t=="boolean"?It(pt):ne(t)?It(Nt,null,t.slice()):Ri(t)?Tn(t):It(Da,null,String(t))}function Tn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hr(t)}function ta(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ta(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!pg(e)?e._ctx=st:s===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(fe(e)){if(r&65){ta(t,{default:e});return}e={default:e,_ctx:st},n=32}else e=String(e),r&64?(n=16,e=[bE(e)]):n=8;t.children=e,t.shapeFlag|=n}function PE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=qc([e.class,r.class]));else if(s==="style")e.style=jc([e.style,r.style]);else if(ya(s)){const i=e[s],o=r[s];o&&i!==o&&!(ne(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!va(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function en(t,e,n,r=null){Ht(t,e,7,[n,r])}const CE=cg();let NE=0;function kE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||CE,i={uid:NE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ip(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mg(r,s),emitsOptions:ug(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=aE.bind(null,i),t.ce&&t.ce(i),i}let gt=null;const ru=()=>gt||st;let na,bi;{const t=Aa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};na=e("__VUE_INSTANCE_SETTERS__",n=>gt=n),bi=e("__VUE_SSR_SETTERS__",n=>Si=n)}const Hi=t=>{const e=gt;return na(t),t.scope.on(),()=>{t.scope.off(),na(e)}},hf=()=>{gt&&gt.scope.off(),na(null)};function Rg(t){return t.vnode.shapeFlag&4}let Si=!1;function VE(t,e=!1,n=!1){e&&bi(e);const{props:r,children:s}=t.vnode,i=Rg(t);dE(t,r,i,e),_E(t,s,n||e);const o=i?DE(t,e):void 0;return e&&bi(!1),o}function DE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Xv);const{setup:r}=n;if(r){Vn();const s=t.setupContext=r.length>1?xE(t):null,i=Hi(t),o=$i(r,t,0,[t.props,s]),l=gp(o);if(Dn(),i(),(l||t.sp)&&!fs(t)&&ng(t),l){if(o.then(hf,hf),e)return o.then(c=>{bi(!0);try{ff(t,c,e)}finally{bi(!1)}}).catch(c=>{Sa(c,t,0)});t.asyncDep=o}else ff(t,o)}else bg(t)}function ff(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=jp(e)),bg(t)}function bg(t,e,n){const r=t.type;t.render||(t.render=r.render||an);{const s=Hi(t);Vn();try{Zv(t)}finally{Dn(),s()}}}const OE={get(t,e){return ft(t,"get",""),t[e]}};function xE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,OE),slots:t.slots,emit:t.emit,expose:e}}function Oa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(jp(Jc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in fi)return fi[n](t)},has(e,n){return n in e||n in fi}})):t.proxy}function LE(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function ME(t){return fe(t)&&"__vccOpts"in t}const kt=(t,e)=>Iv(t,e,Si);function su(t,e,n){try{Zo(-1);const r=arguments.length;return r===2?Se(e)&&!ne(e)?Ri(e)?It(t,null,[e]):It(t,e):It(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ri(n)&&(n=[n]),It(t,e,n))}finally{Zo(1)}}const FE="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ac;const df=typeof window<"u"&&window.trustedTypes;if(df)try{ac=df.createPolicy("vue",{createHTML:t=>t})}catch{}const Sg=ac?t=>ac.createHTML(t):t=>t,UE="http://www.w3.org/2000/svg",BE="http://www.w3.org/1998/Math/MathML",En=typeof document<"u"?document:null,pf=En&&En.createElement("template"),jE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?En.createElementNS(UE,t):e==="mathml"?En.createElementNS(BE,t):n?En.createElement(t,{is:n}):En.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>En.createTextNode(t),createComment:t=>En.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>En.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{pf.innerHTML=Sg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=pf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Wn="transition",Qs="animation",Pi=Symbol("_vtc"),Pg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},qE=Ye({},Jp,Pg),$E=t=>(t.displayName="Transition",t.props=qE,t),GP=$E((t,{slots:e})=>su(Fv,HE(t),e)),Rr=(t,e=[])=>{ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},gf=t=>t?ne(t)?t.some(e=>e.length>1):t.length>1:!1;function HE(t){const e={};for(const A in t)A in Pg||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,P=WE(s),N=P&&P[0],k=P&&P[1],{onBeforeEnter:q,onEnter:x,onEnterCancelled:j,onLeave:$,onLeaveCancelled:X,onBeforeAppear:re=q,onAppear:w=x,onAppearCancelled:y=j}=e,_=(A,T,ve,$e)=>{A._enterCancelled=$e,br(A,T?f:l),br(A,T?u:o),ve&&ve()},I=(A,T)=>{A._isLeaving=!1,br(A,p),br(A,v),br(A,g),T&&T()},b=A=>(T,ve)=>{const $e=A?w:x,Pe=()=>_(T,A,ve);Rr($e,[T,Pe]),mf(()=>{br(T,A?c:i),yn(T,A?f:l),gf($e)||_f(T,r,N,Pe)})};return Ye(e,{onBeforeEnter(A){Rr(q,[A]),yn(A,i),yn(A,o)},onBeforeAppear(A){Rr(re,[A]),yn(A,c),yn(A,u)},onEnter:b(!1),onAppear:b(!0),onLeave(A,T){A._isLeaving=!0;const ve=()=>I(A,T);yn(A,p),A._enterCancelled?(yn(A,g),Ef(A)):(Ef(A),yn(A,g)),mf(()=>{A._isLeaving&&(br(A,p),yn(A,v),gf($)||_f(A,r,k,ve))}),Rr($,[A,ve])},onEnterCancelled(A){_(A,!1,void 0,!0),Rr(j,[A])},onAppearCancelled(A){_(A,!0,void 0,!0),Rr(y,[A])},onLeaveCancelled(A){I(A),Rr(X,[A])}})}function WE(t){if(t==null)return null;if(Se(t))return[Cl(t.enter),Cl(t.leave)];{const e=Cl(t);return[e,e]}}function Cl(t){return By(t)}function yn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Pi]||(t[Pi]=new Set)).add(e)}function br(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Pi];n&&(n.delete(e),n.size||(t[Pi]=void 0))}function mf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let KE=0;function _f(t,e,n,r){const s=t._endId=++KE,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=GE(t,e);if(!o)return r();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,g),i()},g=v=>{v.target===t&&++f>=c&&p()};setTimeout(()=>{f<c&&p()},l+1),t.addEventListener(u,g)}function GE(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${Wn}Delay`),i=r(`${Wn}Duration`),o=yf(s,i),l=r(`${Qs}Delay`),c=r(`${Qs}Duration`),u=yf(l,c);let f=null,p=0,g=0;e===Wn?o>0&&(f=Wn,p=o,g=i.length):e===Qs?u>0&&(f=Qs,p=u,g=c.length):(p=Math.max(o,u),f=p>0?o>u?Wn:Qs:null,g=f?f===Wn?i.length:c.length:0);const v=f===Wn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Wn}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:v}}function yf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>vf(n)+vf(t[r])))}function vf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Ef(t){return(t?t.ownerDocument:document).body.offsetHeight}function zE(t,e,n){const r=t[Pi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Tf=Symbol("_vod"),QE=Symbol("_vsh"),JE=Symbol(""),YE=/(?:^|;)\s*display\s*:/;function XE(t,e,n){const r=t.style,s=Le(n);let i=!1;if(n&&!s){if(e)if(Le(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ei(r,l,"")}else for(const o in e)n[o]==null&&ei(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?eT(t,o,!Le(e)&&e?e[o]:void 0,l)||ei(r,o,l):ei(r,o,"")}}else if(s){if(e!==n){const o=r[JE];o&&(n+=";"+o),r.cssText=n,i=YE.test(n)}}else e&&t.removeAttribute("style");Tf in t&&(t[Tf]=i?r.display:"",t[QE]&&(r.display="none"))}const Ro=/\s*!important$/;function ei(t,e,n){if(ne(n))n.forEach(r=>ei(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))Ro.test(n)?t.setProperty(e,n.replace(Ro,""),"important"):t.setProperty(e,n);else{const r=ZE(t,e);Ro.test(n)?t.setProperty(Kr(r),n.replace(Ro,""),"important"):t[r]=n}}const If=["Webkit","Moz","ms"],Nl={};function ZE(t,e){const n=Nl[e];if(n)return n;let r=wt(e);if(r!=="filter"&&r in t)return Nl[e]=r;r=Ia(r);for(let s=0;s<If.length;s++){const i=If[s]+r;if(i in t)return Nl[e]=i}return e}function eT(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Le(r)&&n===r}const wf="http://www.w3.org/1999/xlink";function Af(t,e,n,r,s,i=Ky(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(wf,e.slice(6,e.length)):t.setAttributeNS(wf,e,n):n==null||i&&!vp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Lt(n)?String(n):n)}function Rf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Sg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=vp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function An(t,e,n,r){t.addEventListener(e,n,r)}function tT(t,e,n,r){t.removeEventListener(e,n,r)}const bf=Symbol("_vei");function nT(t,e,n,r,s=null){const i=t[bf]||(t[bf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=iT(e);if(r){const u=i[e]=lT(r,s);An(t,l,u,c)}else o&&(tT(t,l,o,c),i[e]=void 0)}}const rT=/(Once|Passive|Capture)$/,sT=/^on:?(?:Once|Passive|Capture)$/;function iT(t){let e,n;for(;(n=t.match(rT))&&!sT.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):Kr(t.slice(2)),e]}let kl=0;const oT=Promise.resolve(),aT=()=>kl||(oT.then(()=>kl=0),kl=Date.now());function lT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(ne(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const u=o[c];u&&Ht(u,e,5,l)}}else Ht(s,e,5,[r])};return n.value=t,n.attached=aT(),n}const Sf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?zE(t,r,o):e==="style"?XE(t,n,r):ya(e)?va(e)||nT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):uT(t,e,r,o))?(Rf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Af(t,e,r,o,i,e!=="value")):t._isVueCE&&(hT(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Le(r)))?Rf(t,wt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Af(t,e,r,o))};function uT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Sf(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Sf(e)&&Le(n)?!1:e in t}function hT(t,e){const n=t._def.props;if(!n)return!1;const r=wt(e);return Array.isArray(n)?n.some(s=>wt(s)===r):Object.keys(n).some(s=>wt(s)===r)}const fr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>Oo(e,n):e};function fT(t){t.target.composing=!0}function Pf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Dt=Symbol("_assign"),bo=Symbol("_initialValue");function Vl(t,e,n){return e&&(t=t.trim()),n&&(t=wa(t)),t}const Cf={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t.parentNode&&(t.type==="text"?t[bo]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[bo]=t.defaultValue.replace(/\r\n?/g,`
`))),t[Dt]=fr(s);const i=r||s.props&&s.props.type==="number";An(t,e?"change":"input",o=>{o.target.composing||t[Dt](Vl(t.value,n,i))}),(n||i)&&An(t,"change",()=>{t.value=Vl(t.value,n,i)}),e||(An(t,"compositionstart",fT),An(t,"compositionend",Pf),An(t,"change",Pf))},mounted(t,{value:e,modifiers:{trim:n,number:r}}){const s=e??"",i=t[bo];delete t[bo],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[Dt](Vl(t.value,n,r)):t.value=s},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Dt]=fr(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?wa(t.value):t.value,c=e??"";if(l===c)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},dT={deep:!0,created(t,e,n){t[Dt]=fr(n),An(t,"change",()=>{const r=t._modelValue,s=_s(t),i=t.checked,o=t[Dt];if(ne(r)){const l=$c(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(kn(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Cg(t,i))})},mounted:Nf,beforeUpdate(t,e,n){t[Dt]=fr(n),Nf(t,e,n)}};function Nf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ne(e))s=$c(e,r.props.value)>-1;else if(kn(e))s=e.has(r.props.value);else{if(e===n)return;s=Qt(e,Cg(t,!0))}t.checked!==s&&(t.checked=s)}const pT={created(t,{value:e},n){t.checked=Qt(e,n.props.value),t[Dt]=fr(n),An(t,"change",()=>{t[Dt](_s(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Dt]=fr(r),e!==n&&(t.checked=Qt(e,r.props.value))}},gT={deep:!0,created(t,{value:e,modifiers:{number:n}},r){t._modelValue=e,An(t,"change",()=>{const s=Array.prototype.filter.call(t.options,c=>c.selected).map(c=>n?wa(_s(c)):_s(c)),i=t.multiple,o=i?kn(t._modelValue)?new Set(s):s:s[0],l=t._pendingValue=[i,i?ne(o)?s.slice():s:o];try{t[Dt](o)}finally{Pa(()=>{t._pendingValue===l&&(t._pendingValue=void 0)})}}),t[Dt]=fr(r)},mounted(t,{value:e}){kf(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[Dt]=fr(n)},updated(t,{value:e}){const n=t._pendingValue;t._pendingValue=void 0,(!n||n[0]!==t.multiple||!mT(e,n[1],n[0]))&&kf(t,e)}};function mT(t,e,n){if(!n||ne(t))return Qt(t,e);if(kn(t)){if(t.size!==e.length)return!1;for(const r of e)if(!t.has(r))return!1;return!0}return!1}function kf(t,e){const n=t.multiple,r=ne(e);if(!(n&&!r&&!kn(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=_s(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=$c(e,l)>-1}else o.selected=e.has(l);else if(Qt(_s(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function _s(t){return"_value"in t?t._value:t.value}function Cg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const zP={created(t,e,n){So(t,e,n,null,"created")},mounted(t,e,n){So(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){So(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){So(t,e,n,r,"updated")}};function _T(t,e){switch(t){case"SELECT":return gT;case"TEXTAREA":return Cf;default:switch(e){case"checkbox":return dT;case"radio":return pT;default:return Cf}}}function So(t,e,n,r,s){const o=_T(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const yT=["ctrl","shift","alt","meta"],vT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>yT.some(n=>t[`${n}Key`]&&!e.includes(n))},QP=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=vT[e[o]];if(l&&l(s,e))return}return t(s,...i)})},ET=Ye({patchProp:cT},jE);let Vf;function TT(){return Vf||(Vf=vE(ET))}const IT=(...t)=>{const e=TT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=AT(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,wT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function wT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function AT(t){return Le(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ng;const xa=t=>Ng=t,kg=Symbol();function lc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var di;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(di||(di={}));function RT(){const t=wp(!0),e=t.run(()=>Vr({}));let n=[],r=[];const s=Jc({install(i){xa(s),s._a=i,i.provide(kg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Vg=()=>{};function Df(t,e,n,r=Vg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Ap()&&Jy(s),s}function ss(t,...e){t.slice().forEach(n=>{n(...e)})}const bT=t=>t(),Of=Symbol(),Dl=Symbol();function cc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];lc(s)&&lc(r)&&t.hasOwnProperty(n)&&!qe(r)&&!ln(r)?t[n]=cc(s,r):t[n]=r}return t}const ST=Symbol();function PT(t){return!lc(t)||!t.hasOwnProperty(ST)}const{assign:Jn}=Object;function CT(t){return!!(qe(t)&&t.effect)}function NT(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const f=yv(n.state.value[t]);return Jn(f,i,Object.keys(o||{}).reduce((p,g)=>(p[g]=Jc(kt(()=>{xa(n);const v=n._s.get(t);return o[g].call(v,v)})),p),{}))}return c=Dg(t,u,e,n,r,!0),c}function Dg(t,e,n={},r,s,i){let o;const l=Jn({actions:{}},n),c={deep:!0};let u,f,p=[],g=[],v;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={});let N;function k(y){let _;u=f=!1,typeof y=="function"?(y(r.state.value[t]),_={type:di.patchFunction,storeId:t,events:v}):(cc(r.state.value[t],y),_={type:di.patchObject,payload:y,storeId:t,events:v});const I=N=Symbol();Pa().then(()=>{N===I&&(u=!0)}),f=!0,ss(p,_,r.state.value[t])}const q=i?function(){const{state:_}=n,I=_?_():{};this.$patch(b=>{Jn(b,I)})}:Vg;function x(){o.stop(),p=[],g=[],r._s.delete(t)}const j=(y,_="")=>{if(Of in y)return y[Dl]=_,y;const I=function(){xa(r);const b=Array.from(arguments),A=[],T=[];function ve(ce){A.push(ce)}function $e(ce){T.push(ce)}ss(g,{args:b,name:I[Dl],store:X,after:ve,onError:$e});let Pe;try{Pe=y.apply(this&&this.$id===t?this:X,b)}catch(ce){throw ss(T,ce),ce}return Pe instanceof Promise?Pe.then(ce=>(ss(A,ce),ce)).catch(ce=>(ss(T,ce),Promise.reject(ce))):(ss(A,Pe),Pe)};return I[Of]=!0,I[Dl]=_,I},$={_p:r,$id:t,$onAction:Df.bind(null,g),$patch:k,$reset:q,$subscribe(y,_={}){const I=Df(p,y,_.detached,()=>b()),b=o.run(()=>ui(()=>r.state.value[t],A=>{(_.flush==="sync"?f:u)&&y({storeId:t,type:di.direct,events:v},A)},Jn({},c,_)));return I},$dispose:x},X=qi($);r._s.set(t,X);const w=(r._a&&r._a.runWithContext||bT)(()=>r._e.run(()=>(o=wp()).run(()=>e({action:j}))));for(const y in w){const _=w[y];if(qe(_)&&!CT(_)||ln(_))i||(P&&PT(_)&&(qe(_)?_.value=P[y]:cc(_,P[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const I=j(_,y);w[y]=I,l.actions[y]=_}}return Jn(X,w),Jn(Ie(X),w),Object.defineProperty(X,"$state",{get:()=>r.state.value[t],set:y=>{k(_=>{Jn(_,y)})}}),r._p.forEach(y=>{Jn(X,o.run(()=>y({store:X,app:r._a,pinia:r,options:l})))}),P&&i&&n.hydrate&&n.hydrate(X.$state,P),u=!0,f=!0,X}/*! #__NO_SIDE_EFFECTS__ */function kT(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(l,c){const u=Cv();return l=l||(u?zt(kg,null):null),l&&xa(l),l=Ng,l._s.has(r)||(i?Dg(r,e,s,l):NT(r,s,l)),l._s.get(r)}return o.$id=r,o}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const os=typeof document<"u";function Og(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function VT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Og(t.default)}const Re=Object.assign;function Ol(t,e){const n={};for(const r in e){const s=e[r];n[r]=Jt(s)?s.map(t):t(s)}return n}const pi=()=>{},Jt=Array.isArray;function xf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const xg=/#/g,DT=/&/g,OT=/\//g,xT=/=/g,LT=/\?/g,Lg=/\+/g,MT=/%5B/g,FT=/%5D/g,Mg=/%5E/g,UT=/%60/g,Fg=/%7B/g,BT=/%7C/g,Ug=/%7D/g,jT=/%20/g;function iu(t){return t==null?"":encodeURI(""+t).replace(BT,"|").replace(MT,"[").replace(FT,"]")}function qT(t){return iu(t).replace(Fg,"{").replace(Ug,"}").replace(Mg,"^")}function uc(t){return iu(t).replace(Lg,"%2B").replace(jT,"+").replace(xg,"%23").replace(DT,"%26").replace(UT,"`").replace(Fg,"{").replace(Ug,"}").replace(Mg,"^")}function $T(t){return uc(t).replace(xT,"%3D")}function HT(t){return iu(t).replace(xg,"%23").replace(LT,"%3F")}function WT(t){return HT(t).replace(OT,"%2F")}function Ci(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const KT=/\/$/,GT=t=>t.replace(KT,"");function xl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=YT(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Ci(o)}}function zT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Lf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function QT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ys(e.matched[r],n.matched[s])&&Bg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ys(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Bg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!JT(t[n],e[n]))return!1;return!0}function JT(t,e){return Jt(t)?Mf(t,e):Jt(e)?Mf(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Mf(t,e){return Jt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function YT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let hc=function(t){return t.pop="pop",t.push="push",t}({}),Ll=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function XT(t){if(!t)if(os){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),GT(t)}const ZT=/^[^#]+#/;function eI(t,e){return t.replace(ZT,"#")+e}function tI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const La=()=>({left:window.scrollX,top:window.scrollY});function nI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=tI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ff(t,e){return(history.state?history.state.position-e:-1)+t}const fc=new Map;function rI(t,e){fc.set(t,e)}function sI(t){const e=fc.get(t);return fc.delete(t),e}function iI(t){return typeof t=="string"||t&&typeof t=="object"}function jg(t){return typeof t=="string"||typeof t=="symbol"}let je=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const qg=Symbol("");je.MATCHER_NOT_FOUND+"",je.NAVIGATION_GUARD_REDIRECT+"",je.NAVIGATION_ABORTED+"",je.NAVIGATION_CANCELLED+"",je.NAVIGATION_DUPLICATED+"";function vs(t,e){return Re(new Error,{type:t,[qg]:!0},e)}function vn(t,e){return t instanceof Error&&qg in t&&(e==null||!!(t.type&e))}const oI=["params","query","hash"];function aI(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of oI)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function lI(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Lg," "),i=s.indexOf("="),o=Ci(i<0?s:s.slice(0,i)),l=i<0?null:Ci(s.slice(i+1));if(o in e){let c=e[o];Jt(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Uf(t){let e="";for(let n in t){const r=t[n];if(n=$T(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Jt(r)?r.map(s=>s&&uc(s)):[r&&uc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function cI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Jt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const uI=Symbol(""),Bf=Symbol(""),Ma=Symbol(""),$g=Symbol(""),dc=Symbol("");function Js(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Xn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(vs(je.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?c(g):iI(g)?c(vs(je.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function Ml(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Og(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Xn(u,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=VT(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const g=(p.__vccOpts||p)[e];return g&&Xn(g,n,r,o,l,s)()}))}}return i}function hI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>ys(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>ys(u,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let fI=()=>location.protocol+"//"+location.host;function Hg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),Lf(l,"")}return Lf(n,t)+r+s}function dI(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const v=Hg(t,location),P=n.value,N=e.value;let k=0;if(g){if(n.value=v,e.value=g,o&&o===P){o=null;return}k=N?g.position-N.position:0}else r(v);s.forEach(q=>{q(n.value,P,{delta:k,type:hc.pop,direction:k?k>0?Ll.forward:Ll.back:Ll.unknown})})};function c(){o=n.value}function u(g){s.push(g);const v=()=>{const P=s.indexOf(g);P>-1&&s.splice(P,1)};return i.push(v),v}function f(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Re({},g.state,{scroll:La()}),"")}}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:c,listen:u,destroy:p}}function jf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?La():null}}function pI(t){const{history:e,location:n}=window,r={value:Hg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:fI()+t+c;try{e[f?"replaceState":"pushState"](u,"",g),s.value=u}catch(v){console.error(v),n[f?"replace":"assign"](g)}}function o(c,u){i(c,Re({},e.state,jf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=c}function l(c,u){const f=Re({},s.value,e.state,{forward:c,scroll:La()});i(f.current,f,!0),i(c,Re({},jf(r.value,c,null),{position:f.position+1},u),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function gI(t){t=XT(t);const e=pI(t),n=dI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:eI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function mI(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),gI(t)}let Or=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var ze=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(ze||{});const _I={type:Or.Static,value:""},yI=/[a-zA-Z0-9_]/;function vI(t){if(!t)return[[]];if(t==="/")return[[_I]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=ze.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function p(){u&&(n===ze.Static?i.push({type:Or.Static,value:u}):n===ze.Param||n===ze.ParamRegExp||n===ze.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Or.Param,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==ze.ParamRegExp){r=n,n=ze.EscapeNext;continue}switch(n){case ze.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=ze.Param):g();break;case ze.EscapeNext:g(),n=r;break;case ze.Param:c==="("?n=ze.ParamRegExp:yI.test(c)?g():(p(),n=ze.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case ze.ParamRegExp:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=ze.ParamRegExpEnd:f+=c;break;case ze.ParamRegExpEnd:p(),n=ze.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===ze.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const qf="[^/]+?",EI={sensitive:!1,strict:!1,start:!0,end:!0};var Et=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(Et||{});const TI=/[.+*?^${}()[\]/\\]/g;function II(t,e){const n=Re({},EI,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[Et.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let v=Et.Segment+(n.sensitive?Et.BonusCaseSensitive:0);if(g.type===Or.Static)p||(s+="/"),s+=g.value.replace(TI,"\\$&"),v+=Et.Static;else if(g.type===Or.Param){const{value:P,repeatable:N,optional:k,regexp:q}=g;i.push({name:P,repeatable:N,optional:k});const x=q||qf;if(x!==qf){v+=Et.BonusCustomRegExp;try{`${x}`}catch($){throw new Error(`Invalid custom RegExp for param "${P}" (${x}): `+$.message)}}let j=N?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;p||(j=k&&u.length<2?`(?:/${j})`:"/"+j),k&&(j+="?"),s+=j,v+=Et.Dynamic,k&&(v+=Et.BonusOptional),N&&(v+=Et.BonusRepeatable),x===".*"&&(v+=Et.BonusWildcard)}f.push(v)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Et.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const v=f[g]||"",P=i[g-1];p[P.name]=v&&P.repeatable?v.split("/"):v}return p}function c(u){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const v of g)if(v.type===Or.Static)f+=v.value;else if(v.type===Or.Param){const{value:P,repeatable:N,optional:k}=v,q=P in u?u[P]:"";if(Jt(q)&&!N)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const x=Jt(q)?q.join("/"):q;if(!x)if(k)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);f+=x}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function wI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Et.Static+Et.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Et.Static+Et.Segment?1:-1:0}function Wg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=wI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if($f(r))return 1;if($f(s))return-1}return s.length-r.length}function $f(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const AI={strict:!1,end:!0,sensitive:!1};function RI(t,e,n){const r=II(vI(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function bI(t,e){const n=[],r=new Map;e=xf(AI,e);function s(p){return r.get(p)}function i(p,g,v){const P=!v,N=Wf(p);N.aliasOf=v&&v.record;const k=xf(e,p),q=[N];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const X of $)q.push(Wf(Re({},N,{components:v?v.record.components:N.components,path:X,aliasOf:v?v.record:N})))}let x,j;for(const $ of q){const{path:X}=$;if(g&&X[0]!=="/"){const re=g.record.path,w=re[re.length-1]==="/"?"":"/";$.path=g.record.path+(X&&w+X)}if(x=RI($,g,k),v?v.alias.push(x):(j=j||x,j!==x&&j.alias.push(x),P&&p.name&&!Kf(x)&&o(p.name)),Kg(x)&&c(x),N.children){const re=N.children;for(let w=0;w<re.length;w++)i(re[w],x,v&&v.children[w])}v=v||x}return j?()=>{o(j)}:pi}function o(p){if(jg(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=CI(p,n);n.splice(g,0,p),p.record.name&&!Kf(p)&&r.set(p.record.name,p)}function u(p,g){let v,P={},N,k;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw vs(je.MATCHER_NOT_FOUND,{location:p});k=v.record.name,P=Re(Hf(g.params,v.keys.filter(j=>!j.optional).concat(v.parent?v.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&Hf(p.params,v.keys.map(j=>j.name))),N=v.stringify(P)}else if(p.path!=null)N=p.path,v=n.find(j=>j.re.test(N)),v&&(P=v.parse(N),k=v.record.name);else{if(v=g.name?r.get(g.name):n.find(j=>j.re.test(g.path)),!v)throw vs(je.MATCHER_NOT_FOUND,{location:p,currentLocation:g});k=v.record.name,P=Re({},g.params,p.params),N=v.stringify(P)}const q=[];let x=v;for(;x;)q.unshift(x.record),x=x.parent;return{name:k,path:N,params:P,matched:q,meta:PI(q)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Hf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Wf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:SI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function SI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Kf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function PI(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function CI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Wg(t,e[i])<0?r=i:n=i+1}const s=NI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function NI(t){let e=t;for(;e=e.parent;)if(Kg(e)&&Wg(t,e)===0)return e}function Kg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Gf(t){const e=zt(Ma),n=zt($g),r=kt(()=>{const c=ir(t.to);return e.resolve(c)}),s=kt(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(ys.bind(null,f));if(g>-1)return g;const v=zf(c[u-2]);return u>1&&zf(f)===v&&p[p.length-1].path!==v?p.findIndex(ys.bind(null,c[u-2])):g}),i=kt(()=>s.value>-1&&xI(n.params,r.value.params)),o=kt(()=>s.value>-1&&s.value===n.matched.length-1&&Bg(n.params,r.value.params));function l(c={}){if(OI(c)){const u=e[ir(t.replace)?"replace":"push"](ir(t.to)).catch(pi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:kt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function kI(t){return t.length===1?t[0]:t}const VI=tg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Gf,setup(t,{slots:e}){const n=qi(Gf(t)),{options:r}=zt(Ma),s=kt(()=>({[Qf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&kI(e.default(n));return t.custom?i:su("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),DI=VI;function OI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function xI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Jt(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function zf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qf=(t,e,n)=>t??e??n,LI=tg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=zt(dc),s=kt(()=>t.route||r.value),i=zt(Bf,0),o=kt(()=>{let u=ir(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=kt(()=>s.value.matched[o.value]);xo(Bf,kt(()=>o.value+1)),xo(uI,l),xo(dc,s);const c=Vr();return ui(()=>[c.value,l.value,t.name],([u,f,p],[g,v,P])=>{f&&(f.instances[p]=u,v&&v!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),u&&f&&(!v||!ys(f,v)||!g)&&(f.enterCallbacks[p]||[]).forEach(N=>N(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=l.value,g=p&&p.components[f];if(!g)return Jf(n.default,{Component:g,route:u});const v=p.props[f],P=v?v===!0?u.params:typeof v=="function"?v(u):v:null,k=su(g,Re({},P,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return Jf(n.default,{Component:k,route:u})||k}}});function Jf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Gg=LI;function MI(t){const e=bI(t.routes,t),n=t.parseQuery||lI,r=t.stringifyQuery||Uf,s=t.history,i=Js(),o=Js(),l=Js(),c=gv(Kn);let u=Kn;os&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ol.bind(null,L=>""+L),p=Ol.bind(null,WT),g=Ol.bind(null,Ci);function v(L,Y){let z,ee;return jg(L)?(z=e.getRecordMatcher(L),ee=Y):ee=L,e.addRoute(ee,z)}function P(L){const Y=e.getRecordMatcher(L);Y&&e.removeRoute(Y)}function N(){return e.getRoutes().map(L=>L.record)}function k(L){return!!e.getRecordMatcher(L)}function q(L,Y){if(Y=Re({},Y||c.value),typeof L=="string"){const S=xl(n,L,Y.path),D=e.resolve({path:S.path},Y),M=s.createHref(S.fullPath);return Re(S,D,{params:g(D.params),hash:Ci(S.hash),redirectedFrom:void 0,href:M})}let z;if(L.path!=null)z=Re({},L,{path:xl(n,L.path,Y.path).path});else{const S=Re({},L.params);for(const D in S)S[D]==null&&delete S[D];z=Re({},L,{params:p(S)}),Y.params=p(Y.params)}const ee=e.resolve(z,Y),ge=L.hash||"";ee.params=f(g(ee.params));const E=zT(r,Re({},L,{hash:qT(ge),path:ee.path})),R=s.createHref(E);return Re({fullPath:E,hash:ge,query:r===Uf?cI(L.query):L.query||{}},ee,{redirectedFrom:void 0,href:R})}function x(L){return typeof L=="string"?xl(n,L,c.value.path):Re({},L)}function j(L,Y){if(u!==L)return vs(je.NAVIGATION_CANCELLED,{from:Y,to:L})}function $(L){return w(L)}function X(L){return $(Re(x(L),{replace:!0}))}function re(L,Y){const z=L.matched[L.matched.length-1];if(z&&z.redirect){const{redirect:ee}=z;let ge=typeof ee=="function"?ee(L,Y):ee;return typeof ge=="string"&&(ge=ge.includes("?")||ge.includes("#")?ge=x(ge):{path:ge},ge.params={}),Re({query:L.query,hash:L.hash,params:ge.path!=null?{}:L.params},ge)}}function w(L,Y){const z=u=q(L),ee=c.value,ge=L.state,E=L.force,R=L.replace===!0,S=re(z,ee);if(S)return w(Re(x(S),{state:typeof S=="object"?Re({},ge,S.state):ge,force:E,replace:R}),Y||z);const D=z;D.redirectedFrom=Y;let M;return!E&&QT(r,ee,z)&&(M=vs(je.NAVIGATION_DUPLICATED,{to:D,from:ee}),Mt(ee,ee,!0,!1)),(M?Promise.resolve(M):I(D,ee)).catch(O=>vn(O)?vn(O,je.NAVIGATION_GUARD_REDIRECT)?O:Wt(O):me(O,D,ee)).then(O=>{if(O){if(vn(O,je.NAVIGATION_GUARD_REDIRECT))return w(Re({replace:R},x(O.to),{state:typeof O.to=="object"?Re({},ge,O.to.state):ge,force:E}),Y||D)}else O=A(D,ee,!0,R,ge);return b(D,ee,O),O})}function y(L,Y){const z=j(L,Y);return z?Promise.reject(z):Promise.resolve()}function _(L){const Y=Bn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(L):L()}function I(L,Y){let z;const[ee,ge,E]=hI(L,Y);z=Ml(ee.reverse(),"beforeRouteLeave",L,Y);for(const S of ee)S.leaveGuards.forEach(D=>{z.push(Xn(D,L,Y))});const R=y.bind(null,L,Y);return z.push(R),Rt(z).then(()=>{z=[];for(const S of i.list())z.push(Xn(S,L,Y));return z.push(R),Rt(z)}).then(()=>{z=Ml(ge,"beforeRouteUpdate",L,Y);for(const S of ge)S.updateGuards.forEach(D=>{z.push(Xn(D,L,Y))});return z.push(R),Rt(z)}).then(()=>{z=[];for(const S of E)if(S.beforeEnter)if(Jt(S.beforeEnter))for(const D of S.beforeEnter)z.push(Xn(D,L,Y));else z.push(Xn(S.beforeEnter,L,Y));return z.push(R),Rt(z)}).then(()=>(L.matched.forEach(S=>S.enterCallbacks={}),z=Ml(E,"beforeRouteEnter",L,Y,_),z.push(R),Rt(z))).then(()=>{z=[];for(const S of o.list())z.push(Xn(S,L,Y));return z.push(R),Rt(z)}).catch(S=>vn(S,je.NAVIGATION_CANCELLED)?S:Promise.reject(S))}function b(L,Y,z){l.list().forEach(ee=>_(()=>ee(L,Y,z)))}function A(L,Y,z,ee,ge){const E=j(L,Y);if(E)return E;const R=Y===Kn,S=os?history.state:{};z&&(ee||R?s.replace(L.fullPath,Re({scroll:R&&S&&S.scroll},ge)):s.push(L.fullPath,ge)),c.value=L,Mt(L,Y,z,R),Wt()}let T;function ve(){T||(T=s.listen((L,Y,z)=>{if(!Pt.listening)return;const ee=q(L),ge=re(ee,Pt.currentRoute.value);if(ge){w(Re(ge,{replace:!0,force:!0}),ee).catch(pi);return}u=ee;const E=c.value;os&&rI(Ff(E.fullPath,z.delta),La()),I(ee,E).catch(R=>vn(R,je.NAVIGATION_ABORTED|je.NAVIGATION_CANCELLED)?R:vn(R,je.NAVIGATION_GUARD_REDIRECT)?(w(Re(x(R.to),{force:!0}),ee).then(S=>{vn(S,je.NAVIGATION_ABORTED|je.NAVIGATION_DUPLICATED)&&!z.delta&&z.type===hc.pop&&s.go(-1,!1)}).catch(pi),Promise.reject()):(z.delta&&s.go(-z.delta,!1),me(R,ee,E))).then(R=>{R=R||A(ee,E,!1),R&&(z.delta&&!vn(R,je.NAVIGATION_CANCELLED)?s.go(-z.delta,!1):z.type===hc.pop&&vn(R,je.NAVIGATION_ABORTED|je.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(ee,E,R)}).catch(pi)}))}let $e=Js(),Pe=Js(),ce;function me(L,Y,z){Wt(L);const ee=Pe.list();return ee.length?ee.forEach(ge=>ge(L,Y,z)):console.error(L),Promise.reject(L)}function St(){return ce&&c.value!==Kn?Promise.resolve():new Promise((L,Y)=>{$e.add([L,Y])})}function Wt(L){return ce||(ce=!L,ve(),$e.list().forEach(([Y,z])=>L?z(L):Y()),$e.reset()),L}function Mt(L,Y,z,ee){const{scrollBehavior:ge}=t;if(!os||!ge)return Promise.resolve();const E=!z&&sI(Ff(L.fullPath,0))||(ee||!z)&&history.state&&history.state.scroll||null;return Pa().then(()=>ge(L,Y,E)).then(R=>R&&nI(R)).catch(R=>me(R,L,Y))}const xe=L=>s.go(L);let Me;const Bn=new Set,Pt={currentRoute:c,listening:!0,addRoute:v,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:N,resolve:q,options:t,push:$,replace:X,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Pe.add,isReady:St,install(L){L.component("RouterLink",DI),L.component("RouterView",Gg),L.config.globalProperties.$router=Pt,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>ir(c)}),os&&!Me&&c.value===Kn&&(Me=!0,$(s.location).catch(ee=>{}));const Y={};for(const ee in Kn)Object.defineProperty(Y,ee,{get:()=>c.value[ee],enumerable:!0});L.provide(Ma,Pt),L.provide($g,Up(Y)),L.provide(dc,c);const z=L.unmount;Bn.add(L),L.unmount=function(){Bn.delete(L),Bn.size<1&&(u=Kn,T&&T(),T=null,c.value=Kn,Me=!1,ce=!1),z()}}};function Rt(L){return L.reduce((Y,z)=>Y.then(()=>_(z)),Promise.resolve())}return Pt}function JP(){return zt(Ma)}var Yf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},FI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Qg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(g=64)),r.push(n[f],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):FI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new UI;const g=i<<2|l>>4;if(r.push(g),u!==64){const v=l<<4&240|u>>2;if(r.push(v),p!==64){const P=u<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class UI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BI=function(t){const e=zg(t);return Qg.encodeByteArray(e,!0)},ra=function(t){return BI(t).replace(/\./g,"")},Jg=function(t){try{return Qg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=()=>jI().__FIREBASE_DEFAULTS__,$I=()=>{if(typeof process>"u"||typeof Yf>"u")return;const t=Yf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},HI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Jg(t[1]);return e&&JSON.parse(e)},Fa=()=>{try{return qI()||$I()||HI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yg=t=>{var e,n;return(n=(e=Fa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},WI=t=>{const e=Yg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Xg=()=>{var t;return(t=Fa())===null||t===void 0?void 0:t.config},Zg=t=>{var e;return(e=Fa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ra(JSON.stringify(n)),ra(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function QI(){var t;const e=(t=Fa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function JI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function YI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function XI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZI(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ew(){return!QI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tw(){try{return typeof indexedDB=="object"}catch{return!1}}function nw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rw,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wi.prototype.create)}}class Wi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?sw(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Un(s,l,r)}}function sw(t,e){return t.replace(iw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const iw=/\{\$([^}]+)}/g;function ow(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Xf(i)&&Xf(o)){if(!sa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Xf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ti(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ni(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function aw(t,e){const n=new lw(t,e);return n.subscribe.bind(n)}class lw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Fl),s.error===void 0&&(s.error=Fl),s.complete===void 0&&(s.complete=Fl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){return t&&t._delegate?t._delegate:t}class Br{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new KI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fw(e))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pr){return this.instances.has(e)}getOptions(e=Pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pr){return this.component?this.component.multipleInstances?e:Pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hw(t){return t===Pr?void 0:t}function fw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const pw={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},gw=ye.INFO,mw={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},_w=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=mw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ou{constructor(e){this.name=e,this._logLevel=gw,this._logHandler=_w,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const yw=(t,e)=>e.some(n=>t instanceof n);let Zf,ed;function vw(){return Zf||(Zf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ew(){return ed||(ed=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const em=new WeakMap,pc=new WeakMap,tm=new WeakMap,Ul=new WeakMap,au=new WeakMap;function Tw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(or(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&em.set(n,t)}).catch(()=>{}),au.set(e,t),e}function Iw(t){if(pc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});pc.set(t,e)}let gc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ww(t){gc=t(gc)}function Aw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bl(this),e,...n);return tm.set(r,e.sort?e.sort():[e]),or(r)}:Ew().includes(t)?function(...e){return t.apply(Bl(this),e),or(em.get(this))}:function(...e){return or(t.apply(Bl(this),e))}}function Rw(t){return typeof t=="function"?Aw(t):(t instanceof IDBTransaction&&Iw(t),yw(t,vw())?new Proxy(t,gc):t)}function or(t){if(t instanceof IDBRequest)return Tw(t);if(Ul.has(t))return Ul.get(t);const e=Rw(t);return e!==t&&(Ul.set(t,e),au.set(e,t)),e}const Bl=t=>au.get(t);function bw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=or(o);return r&&o.addEventListener("upgradeneeded",c=>{r(or(o.result),c.oldVersion,c.newVersion,or(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Sw=["get","getKey","getAll","getAllKeys","count"],Pw=["put","add","delete","clear"],jl=new Map;function td(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jl.get(e))return jl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Pw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Sw.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return jl.set(e,i),i}ww(t=>({...t,get:(e,n,r)=>td(e,n)||t.get(e,n,r),has:(e,n)=>!!td(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mc="@firebase/app",nd="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new ou("@firebase/app"),kw="@firebase/app-compat",Vw="@firebase/analytics-compat",Dw="@firebase/analytics",Ow="@firebase/app-check-compat",xw="@firebase/app-check",Lw="@firebase/auth",Mw="@firebase/auth-compat",Fw="@firebase/database",Uw="@firebase/data-connect",Bw="@firebase/database-compat",jw="@firebase/functions",qw="@firebase/functions-compat",$w="@firebase/installations",Hw="@firebase/installations-compat",Ww="@firebase/messaging",Kw="@firebase/messaging-compat",Gw="@firebase/performance",zw="@firebase/performance-compat",Qw="@firebase/remote-config",Jw="@firebase/remote-config-compat",Yw="@firebase/storage",Xw="@firebase/storage-compat",Zw="@firebase/firestore",eA="@firebase/vertexai-preview",tA="@firebase/firestore-compat",nA="firebase",rA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="[DEFAULT]",sA={[mc]:"fire-core",[kw]:"fire-core-compat",[Dw]:"fire-analytics",[Vw]:"fire-analytics-compat",[xw]:"fire-app-check",[Ow]:"fire-app-check-compat",[Lw]:"fire-auth",[Mw]:"fire-auth-compat",[Fw]:"fire-rtdb",[Uw]:"fire-data-connect",[Bw]:"fire-rtdb-compat",[jw]:"fire-fn",[qw]:"fire-fn-compat",[$w]:"fire-iid",[Hw]:"fire-iid-compat",[Ww]:"fire-fcm",[Kw]:"fire-fcm-compat",[Gw]:"fire-perf",[zw]:"fire-perf-compat",[Qw]:"fire-rc",[Jw]:"fire-rc-compat",[Yw]:"fire-gcs",[Xw]:"fire-gcs-compat",[Zw]:"fire-fst",[tA]:"fire-fst-compat",[eA]:"fire-vertex","fire-js":"fire-js",[nA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=new Map,iA=new Map,yc=new Map;function rd(t,e){try{t.container.addComponent(e)}catch(n){On.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Es(t){const e=t.name;if(yc.has(e))return On.debug(`There were multiple attempts to register component ${e}.`),!1;yc.set(e,t);for(const n of ia.values())rd(n,t);for(const n of iA.values())rd(n,t);return!0}function lu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function on(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ar=new Wi("app","Firebase",oA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=rA;function nm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_c,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ar.create("bad-app-name",{appName:String(s)});if(n||(n=Xg()),!n)throw ar.create("no-options");const i=ia.get(s);if(i){if(sa(n,i.options)&&sa(r,i.config))return i;throw ar.create("duplicate-app",{appName:s})}const o=new dw(s);for(const c of yc.values())o.addComponent(c);const l=new aA(n,r,o);return ia.set(s,l),l}function rm(t=_c){const e=ia.get(t);if(!e&&t===_c&&Xg())return nm();if(!e)throw ar.create("no-app",{appName:t});return e}function lr(t,e,n){var r;let s=(r=sA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),On.warn(l.join(" "));return}Es(new Br(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA="firebase-heartbeat-database",cA=1,Ni="firebase-heartbeat-store";let ql=null;function sm(){return ql||(ql=bw(lA,cA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ni)}catch(n){console.warn(n)}}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),ql}async function uA(t){try{const n=(await sm()).transaction(Ni),r=await n.objectStore(Ni).get(im(t));return await n.done,r}catch(e){if(e instanceof Un)On.warn(e.message);else{const n=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});On.warn(n.message)}}}async function sd(t,e){try{const r=(await sm()).transaction(Ni,"readwrite");await r.objectStore(Ni).put(e,im(t)),await r.done}catch(n){if(n instanceof Un)On.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});On.warn(r.message)}}}function im(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=1024,fA=30*24*60*60*1e3;class dA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=id();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=fA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){On.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=id(),{heartbeatsToSend:r,unsentEntries:s}=pA(this._heartbeatsCache.heartbeats),i=ra(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return On.warn(n),""}}}function id(){return new Date().toISOString().substring(0,10)}function pA(t,e=hA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),od(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),od(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tw()?nw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return sd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return sd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function od(t){return ra(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t){Es(new Br("platform-logger",e=>new Cw(e),"PRIVATE")),Es(new Br("heartbeat",e=>new dA(e),"PRIVATE")),lr(mc,nd,t),lr(mc,nd,"esm2017"),lr("fire-js","")}mA("");function cu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function om(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _A=om,am=new Wi("auth","Firebase",om());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=new ou("@firebase/auth");function yA(t,...e){oa.logLevel<=ye.WARN&&oa.warn(`Auth (${Ps}): ${t}`,...e)}function Mo(t,...e){oa.logLevel<=ye.ERROR&&oa.error(`Auth (${Ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw uu(t,...e)}function cn(t,...e){return uu(t,...e)}function lm(t,e,n){const r=Object.assign(Object.assign({},_A()),{[e]:n});return new Wi("auth","Firebase",r).create(e,{appName:t.name})}function Cn(t){return lm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return am.create(t,...e)}function le(t,e,...n){if(!t)throw uu(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mo(e),new Error(e)}function xn(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vA(){return ad()==="http:"||ad()==="https:"}function ad(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vA()||YI()||"connection"in navigator)?navigator.onLine:!0}function TA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this.shortDelay=e,this.longDelay=n,xn(n>e,"Short delay should be less than long delay!"),this.isMobile=zI()||XI()}get(){return EA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t,e){xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=new Gi(3e4,6e4);function mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _r(t,e,n,r,s={}){return um(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ki(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return JI()||(u.referrerPolicy="no-referrer"),cm.fetch()(hm(t,t.config.apiHost,n,l),u)})}async function um(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},IA),e);try{const s=new RA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Po(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Po(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Po(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Po(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw lm(t,f,u);Yt(t,f)}}catch(s){if(s instanceof Un)throw s;Yt(t,"network-request-failed",{message:String(s)})}}async function zi(t,e,n,r,s={}){const i=await _r(t,e,n,r,s);return"mfaPendingCredential"in i&&Yt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function hm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?hu(t.config,s):`${t.config.apiScheme}://${s}`}function AA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class RA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),wA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Po(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=cn(t,e,r);return s.customData._tokenResponse=n,s}function ld(t){return t!==void 0&&t.enterprise!==void 0}class bA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return AA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function SA(t,e){return _r(t,"GET","/v2/recaptchaConfig",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PA(t,e){return _r(t,"POST","/v1/accounts:delete",e)}async function fm(t,e){return _r(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CA(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),s=fu(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:gi($l(s.auth_time)),issuedAtTime:gi($l(s.iat)),expirationTime:gi($l(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $l(t){return Number(t)*1e3}function fu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Mo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Jg(n);return s?JSON.parse(s):(Mo("Failed to decode base64 JWT payload"),null)}catch(s){return Mo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function cd(t){const e=fu(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&NA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gi(this.lastLoginAt),this.creationTime=gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ki(t,fm(n,{idToken:r}));le(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?dm(i.providerUserInfo):[],l=DA(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ec(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function VA(t){const e=Ze(t);await aa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function dm(t){return t.map(e=>{var{providerId:n}=e,r=cu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(t,e){const n=await um(t,{},async()=>{const r=Ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=hm(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",cm.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xA(t,e){return _r(t,"POST","/v2/accounts:revokeToken",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=cd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await OA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ds;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ds,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=cu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ec(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ki(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CA(this,e)}reload(){return VA(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await aa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(on(this.auth.app))return Promise.reject(Cn(this.auth));const e=await this.getIdToken();return await ki(this,PA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,q=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:$,isAnonymous:X,providerData:re,stsTokenManager:w}=n;le(j&&w,e,"internal-error");const y=ds.fromJSON(this.name,w);le(typeof j=="string",e,"internal-error"),Gn(p,e.name),Gn(g,e.name),le(typeof $=="boolean",e,"internal-error"),le(typeof X=="boolean",e,"internal-error"),Gn(v,e.name),Gn(P,e.name),Gn(N,e.name),Gn(k,e.name),Gn(q,e.name),Gn(x,e.name);const _=new bn({uid:j,auth:e,email:g,emailVerified:$,displayName:p,isAnonymous:X,photoURL:P,phoneNumber:v,tenantId:N,stsTokenManager:y,createdAt:q,lastLoginAt:x});return re&&Array.isArray(re)&&(_.providerData=re.map(I=>Object.assign({},I))),k&&(_._redirectEventId=k),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new ds;s.updateFromServerResponse(n);const i=new bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await aa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?dm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ds;l.updateFromIdToken(r);const c=new bn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ec(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=new Map;function Sn(t){xn(t instanceof Function,"Expected a class definition");let e=ud.get(t);return e?(xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ud.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pm.type="NONE";const hd=pm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t,e,n){return`firebase:${t}:${e}:${n}`}class ps{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Fo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ps(Sn(hd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Sn(hd);const o=Fo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){const p=bn._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ps(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ps(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ym(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Em(e))return"Blackberry";if(Tm(e))return"Webos";if(mm(e))return"Safari";if((e.includes("chrome/")||_m(e))&&!e.includes("edge/"))return"Chrome";if(vm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gm(t=mt()){return/firefox\//i.test(t)}function mm(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _m(t=mt()){return/crios\//i.test(t)}function ym(t=mt()){return/iemobile/i.test(t)}function vm(t=mt()){return/android/i.test(t)}function Em(t=mt()){return/blackberry/i.test(t)}function Tm(t=mt()){return/webos/i.test(t)}function du(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LA(t=mt()){var e;return du(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function MA(){return ZI()&&document.documentMode===10}function Im(t=mt()){return du(t)||vm(t)||Tm(t)||Em(t)||/windows phone/i.test(t)||ym(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t,e=[]){let n;switch(t){case"Browser":n=fd(mt());break;case"Worker":n=`${fd(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UA(t,e={}){return _r(t,"GET","/v2/passwordPolicy",mr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=6;class jA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:BA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dd(this),this.idTokenSubscription=new dd(this),this.beforeStateQueue=new FA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=am,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ps.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await fm(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(on(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await aa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(on(this.app))return Promise.reject(Cn(this));const n=e?Ze(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return on(this.app)?Promise.reject(Cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return on(this.app)?Promise.reject(Cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await UA(this),n=new jA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await xA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&yA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gr(t){return Ze(t)}class dd{constructor(e){this.auth=e,this.observer=null,this.addObserver=aw(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $A(t){Ua=t}function Am(t){return Ua.loadJS(t)}function HA(){return Ua.recaptchaEnterpriseScript}function WA(){return Ua.gapiScript}function KA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const GA="recaptcha-enterprise",zA="NO_RECAPTCHA";class QA{constructor(e){this.type=GA,this.auth=Gr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{SA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new bA(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;ld(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(zA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&ld(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=HA();c.length!==0&&(c+=l),Am(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function pd(t,e,n,r=!1){const s=new QA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Tc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await pd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await pd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t,e){const n=lu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(sa(i,e??{}))return s;Yt(s,"already-initialized")}return n.initialize({options:e})}function YA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function XA(t,e,n){const r=Gr(t);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Rm(e),{host:o,port:l}=ZA(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),eR()}function Rm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZA(t){const e=Rm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:gd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:gd(o)}}}function gd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}async function tR(t,e){return _r(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(t,e){return zi(t,"POST","/v1/accounts:signInWithPassword",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rR(t,e){return zi(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}async function sR(t,e){return zi(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends pu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Vi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Vi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tc(e,n,"signInWithPassword",nR);case"emailLink":return rR(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tc(e,r,"signUpPassword",tR);case"emailLink":return sR(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t,e){return zi(t,"POST","/v1/accounts:signInWithIdp",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR="http://localhost";class jr extends pu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=cu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new jr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gs(e,n)}buildRequest(){const e={requestUri:iR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ki(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aR(t){const e=ti(ni(t)).link,n=e?ti(ni(e)).deep_link_id:null,r=ti(ni(t)).deep_link_id;return(r?ti(ni(r)).link:null)||r||n||e||t}class gu{constructor(e){var n,r,s,i,o,l;const c=ti(ni(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=oR((s=c.mode)!==null&&s!==void 0?s:null);le(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=aR(e);try{return new gu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.providerId=Cs.PROVIDER_ID}static credential(e,n){return Vi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gu.parseLink(n);return le(r,"argument-error"),Vi._fromEmailAndCode(e,r.code,r.tenantId)}}Cs.PROVIDER_ID="password";Cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends bm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Qi{constructor(){super("facebook.com")}static credential(e){return jr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return er.credential(n,r)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Qi{constructor(){super("github.com")}static credential(e){return jr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Qi{constructor(){super("twitter.com")}static credential(e,n){return jr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(t,e){return zi(t,"POST","/v1/accounts:signUp",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await bn._fromIdTokenResponse(e,r,s),o=md(r);return new qr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=md(r);return new qr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function md(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends Un{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,la.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new la(e,n,r,s)}}function Sm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?la._fromErrorAndOperation(t,i,e,r):i})}async function cR(t,e,n=!1){const r=await ki(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uR(t,e,n=!1){const{auth:r}=t;if(on(r.app))return Promise.reject(Cn(r));const s="reauthenticate";try{const i=await ki(t,Sm(r,s,e,t),n);le(i.idToken,r,"internal-error");const o=fu(i.idToken);le(o,r,"internal-error");const{sub:l}=o;return le(t.uid===l,r,"user-mismatch"),qr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pm(t,e,n=!1){if(on(t.app))return Promise.reject(Cn(t));const r="signIn",s=await Sm(t,r,e),i=await qr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function hR(t,e){return Pm(Gr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cm(t){const e=Gr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function YP(t,e,n){if(on(t.app))return Promise.reject(Cn(t));const r=Gr(t),o=await Tc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lR).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Cm(t),c}),l=await qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function _d(t,e,n){return on(t.app)?Promise.reject(Cn(t)):hR(Ze(t),Cs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Cm(t),r})}function fR(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function dR(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function pR(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}function gR(t){return Ze(t).signOut()}const ca="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ca,"1"),this.storage.removeItem(ca),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=1e3,_R=10;class km extends Nm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Im(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);MA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_R):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}km.type="LOCAL";const yR=km;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm extends Nm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vm.type="SESSION";const Dm=Vm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ba(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await vR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ba.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=mu("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function TR(t){un().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function IR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AR(){return Om()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="firebaseLocalStorageDb",RR=1,ua="firebaseLocalStorage",Lm="fbase_key";class Ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ja(t,e){return t.transaction([ua],e?"readwrite":"readonly").objectStore(ua)}function bR(){const t=indexedDB.deleteDatabase(xm);return new Ji(t).toPromise()}function Ic(){const t=indexedDB.open(xm,RR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ua,{keyPath:Lm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ua)?e(r):(r.close(),await bR(),e(await Ic()))})})}async function yd(t,e,n){const r=ja(t,!0).put({[Lm]:e,value:n});return new Ji(r).toPromise()}async function SR(t,e){const n=ja(t,!1).get(e),r=await new Ji(n).toPromise();return r===void 0?null:r.value}function vd(t,e){const n=ja(t,!0).delete(e);return new Ji(n).toPromise()}const PR=800,CR=3;class Mm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ic(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>CR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Om()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ba._getInstance(AR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await IR(),!this.activeServiceWorker)return;this.sender=new ER(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ic();return await yd(e,ca,"1"),await vd(e,ca),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>SR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ja(s,!1).getAll();return new Ji(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mm.type="LOCAL";const NR=Mm;new Gi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(t,e){return e?Sn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u extends pu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VR(t){return Pm(t.auth,new _u(t),t.bypassAuthState)}function DR(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),uR(n,new _u(t),t.bypassAuthState)}async function OR(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),cR(n,new _u(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VR;case"linkViaPopup":case"linkViaRedirect":return OR;case"reauthViaPopup":case"reauthViaRedirect":return DR;default:Yt(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=new Gi(2e3,1e4);class us extends Fm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=mu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xR.get())};e()}}us.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="pendingRedirect",Uo=new Map;class MR extends Fm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Uo.get(this.auth._key());if(!e){try{const r=await FR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Uo.set(this.auth._key(),e)}return this.bypassAuthState||Uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FR(t,e){const n=jR(e),r=BR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function UR(t,e){Uo.set(t._key(),e)}function BR(t){return Sn(t._redirectPersistence)}function jR(t){return Fo(LR,t.config.apiKey,t.name)}async function qR(t,e,n=!1){if(on(t.app))return Promise.reject(Cn(t));const r=Gr(t),s=kR(r,e),o=await new MR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=10*60*1e3;class HR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Um(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$R&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ed(e))}saveEventToCache(e){this.cachedEventUids.add(Ed(e)),this.lastProcessedEventTime=Date.now()}}function Ed(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Um({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Um(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KR(t,e={}){return _r(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zR=/^https?/;async function QR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await KR(t);for(const n of e)try{if(JR(n))return}catch{}Yt(t,"unauthorized-domain")}function JR(t){const e=vc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zR.test(n))return!1;if(GR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=new Gi(3e4,6e4);function Td(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XR(t){return new Promise((e,n)=>{var r,s,i;function o(){Td(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Td(),n(cn(t,"network-request-failed"))},timeout:YR.get()})}if(!((s=(r=un().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=un().gapi)===null||i===void 0)&&i.load)o();else{const l=KA("iframefcb");return un()[l]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},Am(`${WA()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Bo=null,e})}let Bo=null;function ZR(t){return Bo=Bo||XR(t),Bo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=new Gi(5e3,15e3),t0="__/auth/iframe",n0="emulator/auth/iframe",r0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},s0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function i0(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hu(e,n0):`https://${t.config.authDomain}/${t0}`,r={apiKey:e.apiKey,appName:t.name,v:Ps},s=s0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ki(r).slice(1)}`}async function o0(t){const e=await ZR(t),n=un().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:i0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:r0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),l=un().setTimeout(()=>{i(o)},e0.get());function c(){un().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},l0=500,c0=600,u0="_blank",h0="http://localhost";class Id{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function f0(t,e,n,r=l0,s=c0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},a0),{width:r.toString(),height:s.toString(),top:i,left:o}),u=mt().toLowerCase();n&&(l=_m(u)?u0:n),gm(u)&&(e=e||h0,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[v,P])=>`${g}${v}=${P},`,"");if(LA(u)&&l!=="_self")return d0(e||"",l),new Id(null);const p=window.open(e||"",l,f);le(p,t,"popup-blocked");try{p.focus()}catch{}return new Id(p)}function d0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="__/auth/handler",g0="emulator/auth/handler",m0=encodeURIComponent("fac");async function wd(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ps,eventId:s};if(e instanceof bm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ow(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Qi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${m0}=${encodeURIComponent(c)}`:"";return`${_0(t)}?${Ki(l).slice(1)}${u}`}function _0({config:t}){return t.emulator?hu(t,g0):`https://${t.authDomain}/${p0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="webStorageSupport";class y0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dm,this._completeRedirectFn=qR,this._overrideRedirectResult=UR}async _openPopup(e,n,r,s){var i;xn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await wd(e,n,r,vc(),s);return f0(e,o,mu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await wd(e,n,r,vc(),s);return TR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(xn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await o0(e),r=new HR(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hl,{type:Hl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Hl];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Im()||mm()||du()}}const v0=y0;var Ad="@firebase/auth",Rd="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function I0(t){Es(new Br("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wm(t)},u=new qA(r,s,i,c);return YA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Es(new Br("auth-internal",e=>{const n=Gr(e.getProvider("auth").getImmediate());return(r=>new E0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lr(Ad,Rd,T0(t)),lr(Ad,Rd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=5*60,A0=Zg("authIdTokenMaxAge")||w0;let bd=null;const R0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>A0)return;const s=n==null?void 0:n.token;bd!==s&&(bd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function b0(t=rm()){const e=lu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JA(t,{popupRedirectResolver:v0,persistence:[NR,yR,Dm]}),r=Zg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=R0(i.toString());dR(n,o,()=>o(n.currentUser)),fR(n,l=>o(l))}}const s=Yg("auth");return s&&XA(n,`http://${s}`),n}function S0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}$A({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",S0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});I0("Browser");var P0="firebase",C0="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lr(P0,C0,"app");var Sd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ur,Bm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function _(){}_.prototype=y.prototype,w.D=y.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(I,b,A){for(var T=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)T[ve-2]=arguments[ve];return y.prototype[b].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,_){_||(_=0);var I=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)I[b]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(b=0;16>b;++b)I[b]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=w.g[0],_=w.g[1],b=w.g[2];var A=w.g[3],T=y+(A^_&(b^A))+I[0]+3614090360&4294967295;y=_+(T<<7&4294967295|T>>>25),T=A+(b^y&(_^b))+I[1]+3905402710&4294967295,A=y+(T<<12&4294967295|T>>>20),T=b+(_^A&(y^_))+I[2]+606105819&4294967295,b=A+(T<<17&4294967295|T>>>15),T=_+(y^b&(A^y))+I[3]+3250441966&4294967295,_=b+(T<<22&4294967295|T>>>10),T=y+(A^_&(b^A))+I[4]+4118548399&4294967295,y=_+(T<<7&4294967295|T>>>25),T=A+(b^y&(_^b))+I[5]+1200080426&4294967295,A=y+(T<<12&4294967295|T>>>20),T=b+(_^A&(y^_))+I[6]+2821735955&4294967295,b=A+(T<<17&4294967295|T>>>15),T=_+(y^b&(A^y))+I[7]+4249261313&4294967295,_=b+(T<<22&4294967295|T>>>10),T=y+(A^_&(b^A))+I[8]+1770035416&4294967295,y=_+(T<<7&4294967295|T>>>25),T=A+(b^y&(_^b))+I[9]+2336552879&4294967295,A=y+(T<<12&4294967295|T>>>20),T=b+(_^A&(y^_))+I[10]+4294925233&4294967295,b=A+(T<<17&4294967295|T>>>15),T=_+(y^b&(A^y))+I[11]+2304563134&4294967295,_=b+(T<<22&4294967295|T>>>10),T=y+(A^_&(b^A))+I[12]+1804603682&4294967295,y=_+(T<<7&4294967295|T>>>25),T=A+(b^y&(_^b))+I[13]+4254626195&4294967295,A=y+(T<<12&4294967295|T>>>20),T=b+(_^A&(y^_))+I[14]+2792965006&4294967295,b=A+(T<<17&4294967295|T>>>15),T=_+(y^b&(A^y))+I[15]+1236535329&4294967295,_=b+(T<<22&4294967295|T>>>10),T=y+(b^A&(_^b))+I[1]+4129170786&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^b&(y^_))+I[6]+3225465664&4294967295,A=y+(T<<9&4294967295|T>>>23),T=b+(y^_&(A^y))+I[11]+643717713&4294967295,b=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(b^A))+I[0]+3921069994&4294967295,_=b+(T<<20&4294967295|T>>>12),T=y+(b^A&(_^b))+I[5]+3593408605&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^b&(y^_))+I[10]+38016083&4294967295,A=y+(T<<9&4294967295|T>>>23),T=b+(y^_&(A^y))+I[15]+3634488961&4294967295,b=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(b^A))+I[4]+3889429448&4294967295,_=b+(T<<20&4294967295|T>>>12),T=y+(b^A&(_^b))+I[9]+568446438&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^b&(y^_))+I[14]+3275163606&4294967295,A=y+(T<<9&4294967295|T>>>23),T=b+(y^_&(A^y))+I[3]+4107603335&4294967295,b=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(b^A))+I[8]+1163531501&4294967295,_=b+(T<<20&4294967295|T>>>12),T=y+(b^A&(_^b))+I[13]+2850285829&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^b&(y^_))+I[2]+4243563512&4294967295,A=y+(T<<9&4294967295|T>>>23),T=b+(y^_&(A^y))+I[7]+1735328473&4294967295,b=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(b^A))+I[12]+2368359562&4294967295,_=b+(T<<20&4294967295|T>>>12),T=y+(_^b^A)+I[5]+4294588738&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^b)+I[8]+2272392833&4294967295,A=y+(T<<11&4294967295|T>>>21),T=b+(A^y^_)+I[11]+1839030562&4294967295,b=A+(T<<16&4294967295|T>>>16),T=_+(b^A^y)+I[14]+4259657740&4294967295,_=b+(T<<23&4294967295|T>>>9),T=y+(_^b^A)+I[1]+2763975236&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^b)+I[4]+1272893353&4294967295,A=y+(T<<11&4294967295|T>>>21),T=b+(A^y^_)+I[7]+4139469664&4294967295,b=A+(T<<16&4294967295|T>>>16),T=_+(b^A^y)+I[10]+3200236656&4294967295,_=b+(T<<23&4294967295|T>>>9),T=y+(_^b^A)+I[13]+681279174&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^b)+I[0]+3936430074&4294967295,A=y+(T<<11&4294967295|T>>>21),T=b+(A^y^_)+I[3]+3572445317&4294967295,b=A+(T<<16&4294967295|T>>>16),T=_+(b^A^y)+I[6]+76029189&4294967295,_=b+(T<<23&4294967295|T>>>9),T=y+(_^b^A)+I[9]+3654602809&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^b)+I[12]+3873151461&4294967295,A=y+(T<<11&4294967295|T>>>21),T=b+(A^y^_)+I[15]+530742520&4294967295,b=A+(T<<16&4294967295|T>>>16),T=_+(b^A^y)+I[2]+3299628645&4294967295,_=b+(T<<23&4294967295|T>>>9),T=y+(b^(_|~A))+I[0]+4096336452&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~b))+I[7]+1126891415&4294967295,A=y+(T<<10&4294967295|T>>>22),T=b+(y^(A|~_))+I[14]+2878612391&4294967295,b=A+(T<<15&4294967295|T>>>17),T=_+(A^(b|~y))+I[5]+4237533241&4294967295,_=b+(T<<21&4294967295|T>>>11),T=y+(b^(_|~A))+I[12]+1700485571&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~b))+I[3]+2399980690&4294967295,A=y+(T<<10&4294967295|T>>>22),T=b+(y^(A|~_))+I[10]+4293915773&4294967295,b=A+(T<<15&4294967295|T>>>17),T=_+(A^(b|~y))+I[1]+2240044497&4294967295,_=b+(T<<21&4294967295|T>>>11),T=y+(b^(_|~A))+I[8]+1873313359&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~b))+I[15]+4264355552&4294967295,A=y+(T<<10&4294967295|T>>>22),T=b+(y^(A|~_))+I[6]+2734768916&4294967295,b=A+(T<<15&4294967295|T>>>17),T=_+(A^(b|~y))+I[13]+1309151649&4294967295,_=b+(T<<21&4294967295|T>>>11),T=y+(b^(_|~A))+I[4]+4149444226&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~b))+I[11]+3174756917&4294967295,A=y+(T<<10&4294967295|T>>>22),T=b+(y^(A|~_))+I[2]+718787259&4294967295,b=A+(T<<15&4294967295|T>>>17),T=_+(A^(b|~y))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var _=y-this.blockSize,I=this.B,b=this.h,A=0;A<y;){if(b==0)for(;A<=_;)s(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<y;)if(I[b++]=w.charCodeAt(A++),b==this.blockSize){s(this,I),b=0;break}}else for(;A<y;)if(I[b++]=w[A++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var _=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=_&255,_/=256;for(this.u(w),w=Array(16),y=_=0;4>y;++y)for(var I=0;32>I;I+=8)w[_++]=this.g[y]>>>I&255;return w};function i(w,y){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=y(w)}function o(w,y){this.h=y;for(var _=[],I=!0,b=w.length-1;0<=b;b--){var A=w[b]|0;I&&A==y||(_[b]=A,I=!1)}this.g=_}var l={};function c(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return k(u(-w));for(var y=[],_=1,I=0;w>=_;I++)y[I]=w/_|0,_*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return k(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),I=p,b=0;b<w.length;b+=8){var A=Math.min(8,w.length-b),T=parseInt(w.substring(b,b+A),y);8>A?(A=u(Math.pow(y,A)),I=I.j(A).add(u(T))):(I=I.j(_),I=I.add(u(T)))}return I}var p=c(0),g=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(N(this))return-k(this).m();for(var w=0,y=1,_=0;_<this.g.length;_++){var I=this.i(_);w+=(0<=I?I:4294967296+I)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(N(this))return"-"+k(this).toString(w);for(var y=u(Math.pow(w,6)),_=this,I="";;){var b=$(_,y).g;_=q(_,b.j(y));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=b,P(_))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function N(w){return w.h==-1}t.l=function(w){return w=q(this,w),N(w)?-1:P(w)?0:1};function k(w){for(var y=w.g.length,_=[],I=0;I<y;I++)_[I]=~w.g[I];return new o(_,~w.h).add(g)}t.abs=function(){return N(this)?k(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],I=0,b=0;b<=y;b++){var A=I+(this.i(b)&65535)+(w.i(b)&65535),T=(A>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);I=T>>>16,A&=65535,T&=65535,_[b]=T<<16|A}return new o(_,_[_.length-1]&-2147483648?-1:0)};function q(w,y){return w.add(k(y))}t.j=function(w){if(P(this)||P(w))return p;if(N(this))return N(w)?k(this).j(k(w)):k(k(this).j(w));if(N(w))return k(this.j(k(w)));if(0>this.l(v)&&0>w.l(v))return u(this.m()*w.m());for(var y=this.g.length+w.g.length,_=[],I=0;I<2*y;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<w.g.length;b++){var A=this.i(I)>>>16,T=this.i(I)&65535,ve=w.i(b)>>>16,$e=w.i(b)&65535;_[2*I+2*b]+=T*$e,x(_,2*I+2*b),_[2*I+2*b+1]+=A*$e,x(_,2*I+2*b+1),_[2*I+2*b+1]+=T*ve,x(_,2*I+2*b+1),_[2*I+2*b+2]+=A*ve,x(_,2*I+2*b+2)}for(I=0;I<y;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=y;I<2*y;I++)_[I]=0;return new o(_,0)};function x(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function j(w,y){this.g=w,this.h=y}function $(w,y){if(P(y))throw Error("division by zero");if(P(w))return new j(p,p);if(N(w))return y=$(k(w),y),new j(k(y.g),k(y.h));if(N(y))return y=$(w,k(y)),new j(k(y.g),y.h);if(30<w.g.length){if(N(w)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,I=y;0>=I.l(w);)_=X(_),I=X(I);var b=re(_,1),A=re(I,1);for(I=re(I,2),_=re(_,2);!P(I);){var T=A.add(I);0>=T.l(w)&&(b=b.add(_),A=T),I=re(I,1),_=re(_,1)}return y=q(w,b.j(y)),new j(b,y)}for(b=p;0<=w.l(y);){for(_=Math.max(1,Math.floor(w.m()/y.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=u(_),T=A.j(y);N(T)||0<T.l(w);)_-=I,A=u(_),T=A.j(y);P(A)&&(A=g),b=b.add(A),w=q(w,T)}return new j(b,w)}t.A=function(w){return $(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)&w.i(I);return new o(_,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)|w.i(I);return new o(_,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)^w.i(I);return new o(_,this.h^w.h)};function X(w){for(var y=w.g.length+1,_=[],I=0;I<y;I++)_[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(_,w.h)}function re(w,y){var _=y>>5;y%=32;for(var I=w.g.length-_,b=[],A=0;A<I;A++)b[A]=0<y?w.i(A+_)>>>y|w.i(A+_+1)<<32-y:w.i(A+_);return new o(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Bm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Ur=o}).apply(typeof Sd<"u"?Sd:typeof self<"u"?self:typeof window<"u"?window:{});var Co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jm,ri,qm,jo,wc,$m,Hm,Wm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Co=="object"&&Co];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in d))break e;d=d[C]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,m=!1,C={next:function(){if(!m&&d<a.length){var V=d++;return{value:h(V,a[V]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function g(a,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function v(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function P(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,C,V){for(var K=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)K[Ne-2]=arguments[Ne];return h.prototype[C].apply(m,K)}}function N(a){const h=a.length;if(0<h){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function k(a,h){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const C=a.length||0,V=m.length||0;a.length=C+V;for(let K=0;K<V;K++)a[C+K]=m[K]}else a.push(m)}}class q{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var X=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function re(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function w(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)a[d]=m[d];for(let V=0;V<_.length;V++)d=_[V],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function b(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function A(a){l.setTimeout(()=>{throw a},0)}function T(){var a=St;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ve{constructor(){this.h=this.g=null}add(h,d){const m=$e.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var $e=new q(()=>new Pe,a=>a.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,me=!1,St=new ve,Wt=()=>{const a=l.Promise.resolve(void 0);ce=()=>{a.then(Mt)}};var Mt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){A(d)}var h=$e;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}me=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var Bn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function Pt(a,h){if(Me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(X){e:{try{$(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Rt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Pt.aa.h.call(this)}}P(Pt,Me);var Rt={2:"touch",3:"pen",4:"mouse"};Pt.prototype.h=function(){Pt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),Y=0;function z(a,h,d,m,C){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=C,this.key=++Y,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ge(a){this.src=a,this.g={},this.h=0}ge.prototype.add=function(a,h,d,m,C){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var K=R(a,h,m,C);return-1<K?(h=a[K],d||(h.fa=!1)):(h=new z(h,this.src,V,!!m,C),h.fa=d,a.push(h)),h};function E(a,h){var d=h.type;if(d in a.g){var m=a.g[d],C=Array.prototype.indexOf.call(m,h,void 0),V;(V=0<=C)&&Array.prototype.splice.call(m,C,1),V&&(ee(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function R(a,h,d,m){for(var C=0;C<a.length;++C){var V=a[C];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==m)return C}return-1}var S="closure_lm_"+(1e6*Math.random()|0),D={};function M(a,h,d,m,C){if(Array.isArray(h)){for(var V=0;V<h.length;V++)M(a,h[V],d,m,C);return null}return d=ae(d),a&&a[L]?a.K(h,d,u(m)?!!m.capture:!1,C):O(a,h,d,!1,m,C)}function O(a,h,d,m,C,V){if(!h)throw Error("Invalid event type");var K=u(C)?!!C.capture:!!C,Ne=Q(a);if(Ne||(a[S]=Ne=new ge(a)),d=Ne.add(h,d,m,K,V),d.proxy)return d;if(m=G(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)Bn||(C=K),C===void 0&&(C=!1),a.addEventListener(h.toString(),m,C);else if(a.attachEvent)a.attachEvent(U(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return h.call(a.src,a.listener,d)}const h=ie;return a}function W(a,h,d,m,C){if(Array.isArray(h))for(var V=0;V<h.length;V++)W(a,h[V],d,m,C);else m=u(m)?!!m.capture:!!m,d=ae(d),a&&a[L]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],d=R(V,d,m,C),-1<d&&(ee(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Q(a))&&(h=a.g[h.toString()],a=-1,h&&(a=R(h,d,m,C)),(d=-1<a?h[a]:null)&&H(d))}function H(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[L])E(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(U(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=Q(h))?(E(d,a),d.h==0&&(d.src=null,h[S]=null)):ee(a)}}}function U(a){return a in D?D[a]:D[a]="on"+a}function ie(a,h){if(a.da)a=!0;else{h=new Pt(h,this);var d=a.listener,m=a.ha||a.src;a.fa&&H(a),a=d.call(m,h)}return a}function Q(a){return a=a[S],a instanceof ge?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[te]||(a[te]=function(h){return a.handleEvent(h)}),a[te])}function oe(){xe.call(this),this.i=new ge(this),this.M=this,this.F=null}P(oe,xe),oe.prototype[L]=!0,oe.prototype.removeEventListener=function(a,h,d,m){W(this,a,h,d,m)};function pe(a,h){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new Me(h,a);else if(h instanceof Me)h.target=h.target||a;else{var C=h;h=new Me(m,a),I(h,C)}if(C=!0,d)for(var V=d.length-1;0<=V;V--){var K=h.g=d[V];C=Te(K,m,!0,h)&&C}if(K=h.g=a,C=Te(K,m,!0,h)&&C,C=Te(K,m,!1,h)&&C,d)for(V=0;V<d.length;V++)K=h.g=d[V],C=Te(K,m,!1,h)&&C}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],m=0;m<d.length;m++)ee(d[m]);delete a.g[h],a.h--}}this.F=null},oe.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},oe.prototype.L=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function Te(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,V=0;V<h.length;++V){var K=h[V];if(K&&!K.da&&K.capture==d){var Ne=K.listener,tt=K.ha||K.src;K.fa&&E(a.i,K),C=Ne.call(tt,m)!==!1&&C}}return C&&!m.defaultPrevented}function Fe(a,h,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function We(a){a.g=Fe(()=>{a.g=null,a.i&&(a.i=!1,We(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ft extends xe{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:We(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function at(a){xe.call(this),this.h=a,this.g={}}P(at,xe);var jn=[];function Os(a){re(a.g,function(h,d){this.g.hasOwnProperty(d)&&H(h)},a),a.g={}}at.prototype.N=function(){at.aa.N.call(this),Os(this)},at.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var et=l.JSON.stringify,Ut=l.JSON.parse,so=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Xr(){}Xr.prototype.h=null;function Zu(a){return a.h||(a.h=a.i())}function eh(){}var xs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ol(){Me.call(this,"d")}P(ol,Me);function al(){Me.call(this,"c")}P(al,Me);var vr={},th=null;function io(){return th=th||new oe}vr.La="serverreachability";function nh(a){Me.call(this,vr.La,a)}P(nh,Me);function Ls(a){const h=io();pe(h,new nh(h))}vr.STAT_EVENT="statevent";function rh(a,h){Me.call(this,vr.STAT_EVENT,a),this.stat=h}P(rh,Me);function _t(a){const h=io();pe(h,new rh(h,a))}vr.Ma="timingevent";function sh(a,h){Me.call(this,vr.Ma,a),this.size=h}P(sh,Me);function Ms(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Fs(){this.g=!0}Fs.prototype.xa=function(){this.g=!1};function dy(a,h,d,m,C,V){a.info(function(){if(a.g)if(V)for(var K="",Ne=V.split("&"),tt=0;tt<Ne.length;tt++){var we=Ne[tt].split("=");if(1<we.length){var lt=we[0];we=we[1];var ct=lt.split("_");K=2<=ct.length&&ct[1]=="type"?K+(lt+"="+we+"&"):K+(lt+"=redacted&")}}else K=null;else K=V;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+h+`
`+d+`
`+K})}function py(a,h,d,m,C,V,K){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+h+`
`+d+`
`+V+" "+K})}function Zr(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+my(a,d)+(m?" "+m:"")})}function gy(a,h){a.info(function(){return"TIMEOUT: "+h})}Fs.prototype.info=function(){};function my(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var V=C[0];if(V!="noop"&&V!="stop"&&V!="close")for(var K=1;K<C.length;K++)C[K]=""}}}}return et(d)}catch{return h}}var oo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ih={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ll;function ao(){}P(ao,Xr),ao.prototype.g=function(){return new XMLHttpRequest},ao.prototype.i=function(){return{}},ll=new ao;function qn(a,h,d,m){this.j=a,this.i=h,this.l=d,this.R=m||1,this.U=new at(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new oh}function oh(){this.i=null,this.g="",this.h=!1}var ah={},cl={};function ul(a,h,d){a.L=1,a.v=ho(gn(h)),a.m=d,a.P=!0,lh(a,null)}function lh(a,h){a.F=Date.now(),lo(a),a.A=gn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Ih(d.i,"t",m),a.C=0,d=a.j.J,a.h=new oh,a.g=Bh(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Ft(g(a.Y,a,a.g),a.O)),h=a.U,d=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(jn[0]=C.toString()),C=jn);for(var V=0;V<C.length;V++){var K=M(d,C[V],m||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ls(),dy(a.i,a.u,a.A,a.l,a.R,a.m)}qn.prototype.ca=function(a){a=a.target;const h=this.M;h&&mn(a)==3?h.j():this.Y(a)},qn.prototype.Y=function(a){try{if(a==this.g)e:{const ct=mn(this.g);var h=this.g.Ba();const ns=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||Ch(this.g)))){this.J||ct!=4||h==7||(h==8||0>=ns?Ls(3):Ls(2)),hl(this);var d=this.g.Z();this.X=d;t:if(ch(this)){var m=Ch(this.g);a="";var C=m.length,V=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Er(this),Us(this);var K="";break t}this.h.i=new l.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(V&&h==C-1)});m.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=d==200,py(this.i,this.u,this.A,this.l,this.R,ct,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,tt=this.g;if((Ne=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Ne)){var we=Ne;break t}}we=null}if(d=we)Zr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fl(this,d);else{this.o=!1,this.s=3,_t(12),Er(this),Us(this);break e}}if(this.P){d=!0;let Kt;for(;!this.J&&this.C<K.length;)if(Kt=_y(this,K),Kt==cl){ct==4&&(this.s=4,_t(14),d=!1),Zr(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==ah){this.s=4,_t(15),Zr(this.i,this.l,K,"[Invalid Chunk]"),d=!1;break}else Zr(this.i,this.l,Kt,null),fl(this,Kt);if(ch(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||K.length!=0||this.h.h||(this.s=1,_t(16),d=!1),this.o=this.o&&d,!d)Zr(this.i,this.l,K,"[Invalid Chunked Response]"),Er(this),Us(this);else if(0<K.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),yl(lt),lt.M=!0,_t(11))}}else Zr(this.i,this.l,K,null),fl(this,K);ct==4&&Er(this),this.o&&!this.J&&(ct==4?Lh(this.j,this):(this.o=!1,lo(this)))}else Oy(this.g),d==400&&0<K.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Er(this),Us(this)}}}catch{}finally{}};function ch(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function _y(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?cl:(d=Number(h.substring(d,m)),isNaN(d)?ah:(m+=1,m+d>h.length?cl:(h=h.slice(m,m+d),a.C=m+d,h)))}qn.prototype.cancel=function(){this.J=!0,Er(this)};function lo(a){a.S=Date.now()+a.I,uh(a,a.I)}function uh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ms(g(a.ba,a),h)}function hl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(gy(this.i,this.A),this.L!=2&&(Ls(),_t(17)),Er(this),this.s=2,Us(this)):uh(this,this.S-a)};function Us(a){a.j.G==0||a.J||Lh(a.j,a)}function Er(a){hl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Os(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function fl(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||dl(d.h,a))){if(!a.K&&dl(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)yo(d),mo(d);else break e;_l(d),_t(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ms(g(d.Za,d),6e3));if(1>=dh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ir(d,11)}else if((a.K||d.g==a)&&yo(d),!x(h))for(C=d.Da.g.parse(h),h=0;h<C.length;h++){let we=C[h];if(d.T=we[0],we=we[1],d.G==2)if(we[0]=="c"){d.K=we[1],d.ia=we[2];const lt=we[3];lt!=null&&(d.la=lt,d.j.info("VER="+d.la));const ct=we[4];ct!=null&&(d.Aa=ct,d.j.info("SVER="+d.Aa));const ns=we[5];ns!=null&&typeof ns=="number"&&0<ns&&(m=1.5*ns,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Kt=a.g;if(Kt){const Eo=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Eo){var V=m.h;V.g||Eo.indexOf("spdy")==-1&&Eo.indexOf("quic")==-1&&Eo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(pl(V,V.h),V.h=null))}if(m.D){const vl=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;vl&&(m.ya=vl,De(m.I,m.D,vl))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var K=a;if(m.qa=Uh(m,m.J?m.ia:null,m.W),K.K){ph(m.h,K);var Ne=K,tt=m.L;tt&&(Ne.I=tt),Ne.B&&(hl(Ne),lo(Ne)),m.g=K}else Oh(m);0<d.i.length&&_o(d)}else we[0]!="stop"&&we[0]!="close"||Ir(d,7);else d.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?Ir(d,7):ml(d):we[0]!="noop"&&d.l&&d.l.ta(we),d.v=0)}}Ls(4)}catch{}}var yy=class{constructor(a,h){this.g=a,this.map=h}};function hh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function dh(a){return a.h?1:a.g?a.g.size:0}function dl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function pl(a,h){a.g?a.g.add(h):a.h=h}function ph(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}hh.prototype.cancel=function(){if(this.i=gh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function gh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return N(a.i)}function vy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,m=0;m<d;m++)h.push(a[m]);return h}h=[],d=0;for(m in a)h[d++]=a[m];return h}function Ey(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const m in a)h[d++]=m;return h}}}function mh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=Ey(a),m=vy(a),C=m.length,V=0;V<C;V++)h.call(void 0,m[V],d&&d[V],a)}var _h=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ty(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),C=null;if(0<=m){var V=a[d].substring(0,m);C=a[d].substring(m+1)}else V=a[d];h(V,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Tr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Tr){this.h=a.h,co(this,a.j),this.o=a.o,this.g=a.g,uo(this,a.s),this.l=a.l;var h=a.i,d=new qs;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),yh(this,d),this.m=a.m}else a&&(h=String(a).match(_h))?(this.h=!1,co(this,h[1]||"",!0),this.o=Bs(h[2]||""),this.g=Bs(h[3]||"",!0),uo(this,h[4]),this.l=Bs(h[5]||"",!0),yh(this,h[6]||"",!0),this.m=Bs(h[7]||"")):(this.h=!1,this.i=new qs(null,this.h))}Tr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(js(h,vh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(js(h,vh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(js(d,d.charAt(0)=="/"?Ay:wy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",js(d,by)),a.join("")};function gn(a){return new Tr(a)}function co(a,h,d){a.j=d?Bs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function uo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function yh(a,h,d){h instanceof qs?(a.i=h,Sy(a.i,a.h)):(d||(h=js(h,Ry)),a.i=new qs(h,a.h))}function De(a,h,d){a.i.set(h,d)}function ho(a){return De(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Bs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function js(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,Iy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Iy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var vh=/[#\/\?@]/g,wy=/[#\?:]/g,Ay=/[#\?]/g,Ry=/[#\?@]/g,by=/#/g;function qs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function $n(a){a.g||(a.g=new Map,a.h=0,a.i&&Ty(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=qs.prototype,t.add=function(a,h){$n(this),this.i=null,a=es(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Eh(a,h){$n(a),h=es(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Th(a,h){return $n(a),h=es(a,h),a.g.has(h)}t.forEach=function(a,h){$n(this),this.g.forEach(function(d,m){d.forEach(function(C){a.call(h,C,m,this)},this)},this)},t.na=function(){$n(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let m=0;m<h.length;m++){const C=a[m];for(let V=0;V<C.length;V++)d.push(h[m])}return d},t.V=function(a){$n(this);let h=[];if(typeof a=="string")Th(this,a)&&(h=h.concat(this.g.get(es(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return $n(this),this.i=null,a=es(this,a),Th(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Ih(a,h,d){Eh(a,h),0<d.length&&(a.i=null,a.g.set(es(a,h),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var m=h[d];const V=encodeURIComponent(String(m)),K=this.V(m);for(m=0;m<K.length;m++){var C=V;K[m]!==""&&(C+="="+encodeURIComponent(String(K[m]))),a.push(C)}}return this.i=a.join("&")};function es(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Sy(a,h){h&&!a.j&&($n(a),a.i=null,a.g.forEach(function(d,m){var C=m.toLowerCase();m!=C&&(Eh(this,m),Ih(this,C,d))},a)),a.j=h}function Py(a,h){const d=new Fs;if(l.Image){const m=new Image;m.onload=v(Hn,d,"TestLoadImage: loaded",!0,h,m),m.onerror=v(Hn,d,"TestLoadImage: error",!1,h,m),m.onabort=v(Hn,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=v(Hn,d,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Cy(a,h){const d=new Fs,m=new AbortController,C=setTimeout(()=>{m.abort(),Hn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(V=>{clearTimeout(C),V.ok?Hn(d,"TestPingServer: ok",!0,h):Hn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Hn(d,"TestPingServer: error",!1,h)})}function Hn(a,h,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function Ny(){this.g=new so}function ky(a,h,d){const m=d||"";try{mh(a,function(C,V){let K=C;u(C)&&(K=et(C)),h.push(m+V+"="+encodeURIComponent(K))})}catch(C){throw h.push(m+"type="+encodeURIComponent("_badmap")),C}}function fo(a){this.l=a.Ub||null,this.j=a.eb||!1}P(fo,Xr),fo.prototype.g=function(){return new po(this.l,this.j)},fo.prototype.i=function(a){return function(){return a}}({});function po(a,h){oe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(po,oe),t=po.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Hs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$s(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function wh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?$s(this):Hs(this),this.readyState==3&&wh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,$s(this))},t.Qa=function(a){this.g&&(this.response=a,$s(this))},t.ga=function(){this.g&&$s(this)};function $s(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Hs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Hs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(po.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ah(a){let h="";return re(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function gl(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Ah(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):De(a,h,d))}function Be(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Be,oe);var Vy=/^https?$/i,Dy=["POST","PUT"];t=Be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ll.g(),this.v=this.o?Zu(this.o):Zu(ll),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Rh(this,V);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())d.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Dy,h,void 0))||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,K]of d)this.g.setRequestHeader(V,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ph(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Rh(this,V)}};function Rh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,bh(a),go(a)}function bh(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pe(this,"complete"),pe(this,"abort"),go(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),go(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Sh(this):this.bb())},t.bb=function(){Sh(this)};function Sh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||mn(a)!=4||a.Z()!=2)){if(a.u&&mn(a)==4)Fe(a.Ea,0,a);else if(pe(a,"readystatechange"),mn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=K===0){var C=String(a.D).match(_h)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!Vy.test(C?C.toLowerCase():"")}d=m}if(d)pe(a,"complete"),pe(a,"success");else{a.m=6;try{var V=2<mn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",bh(a)}}finally{go(a)}}}}function go(a,h){if(a.g){Ph(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||pe(a,"ready");try{d.onreadystatechange=m}catch{}}}function Ph(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function mn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ut(h)}};function Ch(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Oy(a){const h={};a=(a.g&&2<=mn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(x(a[m]))continue;var d=b(a[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[C]||[];h[C]=V,V.push(d)}w(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ws(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Nh(a){this.Aa=0,this.i=[],this.j=new Fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ws("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ws("baseRetryDelayMs",5e3,a),this.cb=Ws("retryDelaySeedMs",1e4,a),this.Wa=Ws("forwardChannelMaxRetries",2,a),this.wa=Ws("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new hh(a&&a.concurrentRequestLimit),this.Da=new Ny,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Nh.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,m){_t(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Uh(this,null,this.W),_o(this)};function ml(a){if(kh(a),a.G==3){var h=a.U++,d=gn(a.I);if(De(d,"SID",a.K),De(d,"RID",h),De(d,"TYPE","terminate"),Ks(a,d),h=new qn(a,a.j,h),h.L=2,h.v=ho(gn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=Bh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),lo(h)}Fh(a)}function mo(a){a.g&&(yl(a),a.g.cancel(),a.g=null)}function kh(a){mo(a),a.u&&(l.clearTimeout(a.u),a.u=null),yo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function _o(a){if(!fh(a.h)&&!a.s){a.s=!0;var h=a.Ga;ce||Wt(),me||(ce(),me=!0),St.add(h,a),a.B=0}}function xy(a,h){return dh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ms(g(a.Ga,a,h),Mh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new qn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),I(V,this.S)):V=this.S),this.m!==null||this.O||(C.H=V,V=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Dh(this,C,h),d=gn(this.I),De(d,"RID",a),De(d,"CVER",22),this.D&&De(d,"X-HTTP-Session-Id",this.D),Ks(this,d),V&&(this.O?h="headers="+encodeURIComponent(String(Ah(V)))+"&"+h:this.m&&gl(d,this.m,V)),pl(this.h,C),this.Ua&&De(d,"TYPE","init"),this.P?(De(d,"$req",h),De(d,"SID","null"),C.T=!0,ul(C,d,null)):ul(C,d,h),this.G=2}}else this.G==3&&(a?Vh(this,a):this.i.length==0||fh(this.h)||Vh(this))};function Vh(a,h){var d;h?d=h.l:d=a.U++;const m=gn(a.I);De(m,"SID",a.K),De(m,"RID",d),De(m,"AID",a.T),Ks(a,m),a.m&&a.o&&gl(m,a.m,a.o),d=new qn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Dh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),pl(a.h,d),ul(d,m,h)}function Ks(a,h){a.H&&re(a.H,function(d,m){De(h,m,d)}),a.l&&mh({},function(d,m){De(h,m,d)})}function Dh(a,h,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let V=-1;for(;;){const K=["count="+d];V==-1?0<d?(V=C[0].g,K.push("ofs="+V)):V=0:K.push("ofs="+V);let Ne=!0;for(let tt=0;tt<d;tt++){let we=C[tt].g;const lt=C[tt].map;if(we-=V,0>we)V=Math.max(0,C[tt].g-100),Ne=!1;else try{ky(lt,K,"req"+we+"_")}catch{m&&m(lt)}}if(Ne){m=K.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,m}function Oh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ce||Wt(),me||(ce(),me=!0),St.add(h,a),a.v=0}}function _l(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ms(g(a.Fa,a),Mh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,xh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ms(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),mo(this),xh(this))};function yl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function xh(a){a.g=new qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=gn(a.qa);De(h,"RID","rpc"),De(h,"SID",a.K),De(h,"AID",a.T),De(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&De(h,"TO",a.ja),De(h,"TYPE","xmlhttp"),Ks(a,h),a.m&&a.o&&gl(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ho(gn(h)),d.m=null,d.P=!0,lh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,mo(this),_l(this),_t(19))};function yo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Lh(a,h){var d=null;if(a.g==h){yo(a),yl(a),a.g=null;var m=2}else if(dl(a.h,h))d=h.D,ph(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;m=io(),pe(m,new sh(m,d)),_o(a)}else Oh(a);else if(C=h.s,C==3||C==0&&0<h.X||!(m==1&&xy(a,h)||m==2&&_l(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),C){case 1:Ir(a,5);break;case 4:Ir(a,10);break;case 3:Ir(a,6);break;default:Ir(a,2)}}}function Mh(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Ir(a,h){if(a.j.info("Error code "+h),h==2){var d=g(a.fb,a),m=a.Xa;const C=!m;m=new Tr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||co(m,"https"),ho(m),C?Py(m.toString(),d):Cy(m.toString(),d)}else _t(2);a.G=0,a.l&&a.l.sa(h),Fh(a),kh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Fh(a){if(a.G=0,a.ka=[],a.l){const h=gh(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ka,h),k(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Uh(a,h,d){var m=d instanceof Tr?gn(d):new Tr(d);if(m.g!="")h&&(m.g=h+"."+m.g),uo(m,m.s);else{var C=l.location;m=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var V=new Tr(null);m&&co(V,m),h&&(V.g=h),C&&uo(V,C),d&&(V.l=d),m=V}return d=a.D,h=a.ya,d&&h&&De(m,d,h),De(m,"VER",a.la),Ks(a,m),m}function Bh(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Be(new fo({eb:d})):new Be(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function jh(){}t=jh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function vo(){}vo.prototype.g=function(a,h){return new Ct(a,h)};function Ct(a,h){oe.call(this),this.g=new Nh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!x(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ts(this)}P(Ct,oe),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){ml(this.g)},Ct.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=et(a),a=d);h.i.push(new yy(h.Ya++,a)),h.G==3&&_o(h)},Ct.prototype.N=function(){this.g.l=null,delete this.j,ml(this.g),delete this.g,Ct.aa.N.call(this)};function qh(a){ol.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(qh,ol);function $h(){al.call(this),this.status=1}P($h,al);function ts(a){this.g=a}P(ts,jh),ts.prototype.ua=function(){pe(this.g,"a")},ts.prototype.ta=function(a){pe(this.g,new qh(a))},ts.prototype.sa=function(a){pe(this.g,new $h)},ts.prototype.ra=function(){pe(this.g,"b")},vo.prototype.createWebChannel=vo.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,Wm=function(){return new vo},Hm=function(){return io()},$m=vr,wc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},oo.NO_ERROR=0,oo.TIMEOUT=8,oo.HTTP_ERROR=6,jo=oo,ih.COMPLETE="complete",qm=ih,eh.EventType=xs,xs.OPEN="a",xs.CLOSE="b",xs.ERROR="c",xs.MESSAGE="d",oe.prototype.listen=oe.prototype.K,ri=eh,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,jm=Be}).apply(typeof Co<"u"?Co:typeof self<"u"?self:typeof window<"u"?window:{});const Pd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new ou("@firebase/firestore");function Ys(){return $r.logLevel}function Z(t,...e){if($r.logLevel<=ye.DEBUG){const n=e.map(yu);$r.debug(`Firestore (${Ns}): ${t}`,...n)}}function Ln(t,...e){if($r.logLevel<=ye.ERROR){const n=e.map(yu);$r.error(`Firestore (${Ns}): ${t}`,...n)}}function Ts(t,...e){if($r.logLevel<=ye.WARN){const n=e.map(yu);$r.warn(`Firestore (${Ns}): ${t}`,...n)}}function yu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: `+t;throw Ln(e),new Error(e)}function Ce(t,e){t||ue()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class N0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class k0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class V0{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new Km(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new ht(e)}}class D0{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class O0{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new D0(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class x0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ce(this.o===void 0);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new x0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=M0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function Is(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new Je(0,0))}static max(){return new he(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Di.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Di?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends Di{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const F0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends Di{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return F0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new J(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new J(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new J(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Oe.fromString(e))}static fromName(e){return new se(Oe.fromString(e).popFirst(5))}static empty(){return new se(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Oe(e.slice()))}}function U0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new dr(s,se.empty(),e)}function B0(t){return new dr(t.readTime,t.key,-1)}class dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new dr(he.min(),se.empty(),-1)}static max(){return new dr(he.max(),se.empty(),-1)}}function j0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==q0)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function H0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}vu.oe=-1;function qa(t){return t==null}function ha(t){return t===0&&1/t==-1/0}function W0(t){return typeof t=="number"&&Number.isInteger(t)&&!ha(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||nt.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new No(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new No(this.root,e,this.comparator,!1)}getReverseIterator(){return new No(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new No(this.root,e,this.comparator,!0)}}class No{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??nt.RED,this.left=s??nt.EMPTY,this.right=i??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new nt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,i){return this}insert(e,n,r){return new nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nd(this.data.getIterator())}getIteratorFrom(e){return new Nd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class Nd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new it(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Is(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Qm("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const K0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=K0.exec(t);if(Ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Tu(t){const e=t.mapValue.fields.__previous_value__;return Eu(e)?Tu(e):e}function Oi(t){const e=pr(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class xi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko={mapValue:{}};function Wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Eu(t)?4:Q0(t)?9007199254740991:z0(t)?10:11:ue()}function pn(t,e){if(t===e)return!0;const n=Wr(t);if(n!==Wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oi(t).isEqual(Oi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=pr(s.timestampValue),l=pr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Hr(s.bytesValue).isEqual(Hr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=He(s.doubleValue),l=He(i.doubleValue);return o===l?ha(o)===ha(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Is(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Cd(o)!==Cd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!pn(o[c],l[c])))return!1;return!0}(t,e);default:return ue()}}function Li(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function ws(t,e){if(t===e)return 0;const n=Wr(t),r=Wr(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=He(i.integerValue||i.doubleValue),c=He(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return kd(t.timestampValue,e.timestampValue);case 4:return kd(Oi(t),Oi(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Hr(i),c=Hr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Ae(l[u],c[u]);if(f!==0)return f}return Ae(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ae(He(i.latitude),He(o.latitude));return l!==0?l:Ae(He(i.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Vd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,f;const p=i.fields||{},g=o.fields||{},v=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=(c=g.value)===null||c===void 0?void 0:c.arrayValue,N=Ae(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Vd(v,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ko.mapValue&&o===ko.mapValue)return 0;if(i===ko.mapValue)return 1;if(o===ko.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=Ae(c[p],f[p]);if(g!==0)return g;const v=ws(l[c[p]],u[f[p]]);if(v!==0)return v}return Ae(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ue()}}function kd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=pr(t),r=pr(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function Vd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ws(n[s],r[s]);if(i)return i}return Ae(n.length,r.length)}function As(t){return Ac(t)}function Ac(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Hr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ac(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ac(n.fields[o])}`;return s+"}"}(t.mapValue):ue()}function Dd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Rc(t){return!!t&&"integerValue"in t}function Iu(t){return!!t&&"arrayValue"in t}function Od(t){return!!t&&"nullValue"in t}function xd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qo(t){return!!t&&"mapValue"in t}function z0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function mi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=mi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Q0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mi(n)}setAll(e){let n=rt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=mi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());qo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];qo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){zr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new bt(mi(this.value))}}function Jm(t){const e=[];return zr(t.fields,(n,r)=>{const s=new rt([n]);if(qo(r)){const i=Jm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new dt(e,0,he.min(),he.min(),he.min(),bt.empty(),0)}static newFoundDocument(e,n,r,s){return new dt(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new dt(e,2,n,he.min(),he.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,he.min(),he.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n){this.position=e,this.inclusive=n}}function Ld(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=ws(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Md(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n="asc"){this.field=e,this.dir=n}}function J0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{}class Ge extends Ym{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new X0(e,n,r):n==="array-contains"?new tb(e,r):n==="in"?new nb(e,r):n==="not-in"?new rb(e,r):n==="array-contains-any"?new sb(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Z0(e,r):new eb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ws(n,this.value)):n!==null&&Wr(this.value)===Wr(n)&&this.matchesComparison(ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends Ym{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Xt(e,n)}matches(e){return Xm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Xm(t){return t.op==="and"}function Zm(t){return Y0(t)&&Xm(t)}function Y0(t){for(const e of t.filters)if(e instanceof Xt)return!1;return!0}function bc(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+As(t.value);if(Zm(t))return t.filters.map(e=>bc(e)).join(",");{const e=t.filters.map(n=>bc(n)).join(",");return`${t.op}(${e})`}}function e_(t,e){return t instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&pn(r.value,s.value)}(t,e):t instanceof Xt?function(r,s){return s instanceof Xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&e_(o,s.filters[l]),!0):!1}(t,e):void ue()}function t_(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${As(n.value)}`}(t):t instanceof Xt?function(n){return n.op.toString()+" {"+n.getFilters().map(t_).join(" ,")+"}"}(t):"Filter"}class X0 extends Ge{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class Z0 extends Ge{constructor(e,n){super(e,"in",n),this.keys=n_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class eb extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=n_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function n_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class tb extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Iu(n)&&Li(n.arrayValue,this.value)}}class nb extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Li(this.value.arrayValue,n)}}class rb extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Li(this.value.arrayValue,n)}}class sb extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Iu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Li(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Fd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ib(t,e,n,r,s,i,o)}function wu(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>bc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),qa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>As(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>As(r)).join(",")),e.ue=n}return e.ue}function Au(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!J0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!e_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Md(t.startAt,e.startAt)&&Md(t.endAt,e.endAt)}function Sc(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ob(t,e,n,r,s,i,o,l){return new ks(t,e,n,r,s,i,o,l)}function Ru(t){return new ks(t)}function Ud(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function r_(t){return t.collectionGroup!==null}function _i(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new it(rt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Mi(i,r))}),n.has(rt.keyField().canonicalString())||e.ce.push(new Mi(rt.keyField(),r))}return e.ce}function hn(t){const e=de(t);return e.le||(e.le=ab(e,_i(t))),e.le}function ab(t,e){if(t.limitType==="F")return Fd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Mi(s.field,i)});const n=t.endAt?new fa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fa(t.startAt.position,t.startAt.inclusive):null;return Fd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Pc(t,e){const n=t.filters.concat([e]);return new ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Cc(t,e,n){return new ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $a(t,e){return Au(hn(t),hn(e))&&t.limitType===e.limitType}function s_(t){return`${wu(hn(t))}|lt:${t.limitType}`}function as(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>t_(s)).join(", ")}]`),qa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>As(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>As(s)).join(",")),`Target(${r})`}(hn(t))}; limitType=${t.limitType})`}function Ha(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of _i(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Ld(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,_i(r),s)||r.endAt&&!function(o,l,c){const u=Ld(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,_i(r),s))}(t,e)}function lb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function i_(t){return(e,n)=>{let r=!1;for(const s of _i(t)){const i=cb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function cb(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?ws(c,u):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return zm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=new Ue(se.comparator);function Mn(){return ub}const o_=new Ue(se.comparator);function si(...t){let e=o_;for(const n of t)e=e.insert(n.key,n);return e}function a_(t){let e=o_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xr(){return yi()}function l_(){return yi()}function yi(){return new Vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const hb=new Ue(se.comparator),fb=new it(se.comparator);function _e(...t){let e=fb;for(const n of t)e=e.add(n);return e}const db=new it(Ae);function pb(){return db}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ha(e)?"-0":e}}function c_(t){return{integerValue:""+t}}function gb(t,e){return W0(e)?c_(e):bu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(){this._=void 0}}function mb(t,e,n){return t instanceof Fi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Eu(i)&&(i=Tu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ui?h_(t,e):t instanceof Bi?f_(t,e):function(s,i){const o=u_(s,i),l=Bd(o)+Bd(s.Pe);return Rc(o)&&Rc(s.Pe)?c_(l):bu(s.serializer,l)}(t,e)}function _b(t,e,n){return t instanceof Ui?h_(t,e):t instanceof Bi?f_(t,e):n}function u_(t,e){return t instanceof da?function(r){return Rc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Fi extends Wa{}class Ui extends Wa{constructor(e){super(),this.elements=e}}function h_(t,e){const n=d_(e);for(const r of t.elements)n.some(s=>pn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Bi extends Wa{constructor(e){super(),this.elements=e}}function f_(t,e){let n=d_(e);for(const r of t.elements)n=n.filter(s=>!pn(s,r));return{arrayValue:{values:n}}}class da extends Wa{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Bd(t){return He(t.integerValue||t.doubleValue)}function d_(t){return Iu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,n){this.field=e,this.transform=n}}function vb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ui&&s instanceof Ui||r instanceof Bi&&s instanceof Bi?Is(r.elements,s.elements,pn):r instanceof da&&s instanceof da?pn(r.Pe,s.Pe):r instanceof Fi&&s instanceof Fi}(t.transform,e.transform)}class Eb{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $o(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ka{}function p_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Su(t.key,qt.none()):new Zi(t.key,t.data,qt.none());{const n=t.data,r=bt.empty();let s=new it(rt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new yr(t.key,r,new Ot(s.toArray()),qt.none())}}function Tb(t,e,n){t instanceof Zi?function(s,i,o){const l=s.value.clone(),c=qd(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof yr?function(s,i,o){if(!$o(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=qd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(g_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function vi(t,e,n,r){return t instanceof Zi?function(i,o,l,c){if(!$o(i.precondition,o))return l;const u=i.value.clone(),f=$d(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof yr?function(i,o,l,c){if(!$o(i.precondition,o))return l;const u=$d(i.fieldTransforms,c,o),f=o.data;return f.setAll(g_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return $o(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Ib(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=u_(r.transform,s||null);i!=null&&(n===null&&(n=bt.empty()),n.set(r.field,i))}return n||null}function jd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Is(r,s,(i,o)=>vb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zi extends Ka{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class yr extends Ka{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function g_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function qd(t,e,n){const r=new Map;Ce(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,_b(o,l,n[s]))}return r}function $d(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,mb(i,o,e))}return r}class Su extends Ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wb extends Ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Tb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=l_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=p_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&Is(this.mutations,e.mutations,(n,r)=>jd(n,r))&&Is(this.baseMutations,e.baseMutations,(n,r)=>jd(n,r))}}class Pu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length);let s=function(){return hb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Pu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,Ee;function Sb(t){switch(t){default:return ue();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function m_(t){if(t===void 0)return Ln("GRPC error has no .code"),F.UNKNOWN;switch(t){case Ke.OK:return F.OK;case Ke.CANCELLED:return F.CANCELLED;case Ke.UNKNOWN:return F.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return F.INTERNAL;case Ke.UNAVAILABLE:return F.UNAVAILABLE;case Ke.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Ke.NOT_FOUND:return F.NOT_FOUND;case Ke.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Ke.ABORTED:return F.ABORTED;case Ke.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Ke.DATA_LOSS:return F.DATA_LOSS;default:return ue()}}(Ee=Ke||(Ke={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=new Ur([4294967295,4294967295],0);function Hd(t){const e=Pb().encode(t),n=new Bm;return n.update(e),new Uint8Array(n.digest())}function Wd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ur([n,r],0),new Ur([s,i],0)]}class Cu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ii(`Invalid padding: ${n}`);if(r<0)throw new ii(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ii(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ii(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ur.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Ur.fromNumber(r)));return s.compare(Cb)===1&&(s=new Ur([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Hd(e),[r,s]=Wd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Cu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Hd(e),[r,s]=Wd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ii extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,eo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ga(he.min(),s,new Ue(Ae),Mn(),_e())}}class eo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new eo(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class __{constructor(e,n){this.targetId=e,this.me=n}}class y_{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Kd{constructor(){this.fe=0,this.ge=zd(),this.pe=ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),n=_e(),r=_e();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue()}}),new eo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=zd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Nb{constructor(e){this.Le=e,this.Be=new Map,this.ke=Mn(),this.qe=Gd(),this.Qe=new Ue(Ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Sc(i))if(r===0){const o=new se(i.path);this.Ue(n,o,dt.newNoDocument(o,he.min()))}else Ce(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Hr(r).toUint8Array()}catch(c){if(c instanceof Qm)return Ts("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Cu(o,s,i)}catch(c){return Ts(c instanceof ii?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Sc(l.target)){const c=new se(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,dt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=_e();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ga(e,n,this.Qe,this.ke,r);return this.ke=Mn(),this.qe=Gd(),this.Qe=new Ue(Ae),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Kd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new it(Ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Kd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Gd(){return new Ue(se.comparator)}function zd(){return new Ue(se.comparator)}const kb={asc:"ASCENDING",desc:"DESCENDING"},Vb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Db={and:"AND",or:"OR"};class Ob{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Nc(t,e){return t.useProto3Json||qa(e)?e:{value:e}}function pa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function v_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xb(t,e){return pa(t,e.toTimestamp())}function fn(t){return Ce(!!t),he.fromTimestamp(function(n){const r=pr(n);return new Je(r.seconds,r.nanos)}(t))}function Nu(t,e){return kc(t,e).canonicalString()}function kc(t,e){const n=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function E_(t){const e=Oe.fromString(t);return Ce(R_(e)),e}function Vc(t,e){return Nu(t.databaseId,e.path)}function Wl(t,e){const n=E_(e);if(n.get(1)!==t.databaseId.projectId)throw new J(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(I_(n))}function T_(t,e){return Nu(t.databaseId,e)}function Lb(t){const e=E_(t);return e.length===4?Oe.emptyPath():I_(e)}function Dc(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function I_(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qd(t,e,n){return{name:Vc(t,e),fields:n.value.mapValue.fields}}function Mb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Ce(f===void 0||typeof f=="string"),ot.fromBase64String(f||"")):(Ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ot.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?F.UNKNOWN:m_(u.code);return new J(f,u.message||"")}(o);n=new y_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Wl(t,r.document.name),i=fn(r.document.updateTime),o=r.document.createTime?fn(r.document.createTime):he.min(),l=new bt({mapValue:{fields:r.document.fields}}),c=dt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Ho(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Wl(t,r.document),i=r.readTime?fn(r.readTime):he.min(),o=dt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ho([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Wl(t,r.document),i=r.removedTargetIds||[];n=new Ho([],i,s,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new bb(s,i),l=r.targetId;n=new __(l,o)}}return n}function Fb(t,e){let n;if(e instanceof Zi)n={update:Qd(t,e.key,e.value)};else if(e instanceof Su)n={delete:Vc(t,e.key)};else if(e instanceof yr)n={update:Qd(t,e.key,e.data),updateMask:Gb(e.fieldMask)};else{if(!(e instanceof wb))return ue();n={verify:Vc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Fi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ui)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Bi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof da)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:xb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(t,e.precondition)),n}function Ub(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?fn(s.updateTime):fn(i);return o.isEqual(he.min())&&(o=fn(i)),new Eb(o,s.transformResults||[])}(n,e))):[]}function Bb(t,e){return{documents:[T_(t,e.path)]}}function jb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=T_(t,s);const i=function(u){if(u.length!==0)return A_(Xt.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(g){return{field:ls(g.field),direction:Hb(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Nc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function qb(t){let e=Lb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=w_(p);return g instanceof Xt&&Zm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(P){return new Mi(cs(P.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,qa(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,v=p.values||[];return new fa(v,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,v=p.values||[];return new fa(v,g)}(n.endAt)),ob(e,s,o,i,l,"F",c,u)}function $b(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function w_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=cs(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=cs(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=cs(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=cs(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(cs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Xt.create(n.compositeFilter.filters.map(r=>w_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function Hb(t){return kb[t]}function Wb(t){return Vb[t]}function Kb(t){return Db[t]}function ls(t){return{fieldPath:t.canonicalString()}}function cs(t){return rt.fromServerFormat(t.fieldPath)}function A_(t){return t instanceof Ge?function(n){if(n.op==="=="){if(xd(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NAN"}};if(Od(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xd(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NAN"}};if(Od(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ls(n.field),op:Wb(n.op),value:n.value}}}(t):t instanceof Xt?function(n){const r=n.getFilters().map(s=>A_(s));return r.length===1?r[0]:{compositeFilter:{op:Kb(n.op),filters:r}}}(t):ue()}function Gb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function R_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r,s,i=he.min(),o=he.min(),l=ot.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.ct=e}}function Qb(t){const e=qb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(){this.un=new Yb}addToCollectionParentIndex(e,n){return this.un.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(dr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(dr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class Yb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new it(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new it(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Rs(0)}static kn(){return new Rs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(){this.changes=new Vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&vi(r.mutation,s,Ot.empty(),Je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=xr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=si();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Mn();const o=yi(),l=function(){return yi()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof yr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),vi(f.mutation,u,f.mutation.getFieldMask(),Je.now())):o.set(u.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return l.set(u,new Zb(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=yi();let s=new Ue((o,l)=>o-l),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Ot.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||_e()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=l_();f.forEach(g=>{if(!i.has(g)){const v=p_(n.get(g),r.get(g));v!==null&&p.set(g,v),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):r_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(xr());let l=-1,c=i;return o.next(u=>B.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,_e())).next(f=>({batchId:l,changes:a_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=si();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=si();return this.indexManager.getCollectionParents(e,i).next(l=>B.forEach(l,c=>{const u=function(p,g){return new ks(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,dt.newInvalidDocument(f)))});let l=si();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&vi(f.mutation,u,Ot.empty(),Je.now()),Ha(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return B.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:fn(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:Qb(s.bundledQuery),readTime:fn(s.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(){this.overlays=new Ue(se.comparator),this.Ir=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xr();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=xr(),i=n.length+1,o=new se(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ue((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=xr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=xr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return B.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Rb(n,r));let i=this.Ir.get(n);i===void 0&&(i=_e(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(){this.Tr=new it(Xe.Er),this.dr=new it(Xe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Xe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new se(new Oe([])),r=new Xe(n,e),s=new Xe(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new se(new Oe([])),r=new Xe(n,e),s=new Xe(n,e+1);let i=_e();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Xe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return se.comparator(e.key,n.key)||Ae(e.wr,n.wr)}static Ar(e,n){return Ae(e.wr,n.wr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new it(Xe.Er)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ab(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Xe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),s=new Xe(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(Ae);return n.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new se(i),0);let l=new it(Ae);return this.br.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.wr)),!0)},o),B.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return B.forEach(n.mutations,s=>{const i=new Xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Xe(n,0),s=this.br.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.Mr=e,this.docs=function(){return new Ue(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=Mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():dt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Mn();const o=n.path,l=new se(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||j0(B0(f),r)<=0||(s.has(f.key)||Ha(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue()}Or(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new oS(this)}getSize(e){return B.resolve(this.size)}}class oS extends Xb{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.persistence=e,this.Nr=new Vs(n=>wu(n),Au),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ku,this.targetCount=0,this.kr=Rs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),B.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Rs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Kn(n),B.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n){this.qr={},this.overlays={},this.Qr=new vu(0),this.Kr=!1,this.Kr=!0,this.$r=new rS,this.referenceDelegate=e(this),this.Ur=new aS(this),this.indexManager=new Jb,this.remoteDocumentCache=function(s){return new iS(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new zb(n),this.Gr=new tS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new sS(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new cS(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return B.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class cS extends $0{constructor(e){super(),this.currentSequenceNumber=e}}class Vu{constructor(e){this.persistence=e,this.Jr=new ku,this.Yr=null}static Zr(e){return new Vu(e)}get Xr(){if(this.Yr)return this.Yr;throw ue()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,r=>{const s=se.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return B.or([()=>B.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Du(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ew()?8:H0(mt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new uS;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Ys()<=ye.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",as(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(Ys()<=ye.DEBUG&&Z("QueryEngine","Query:",as(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ys()<=ye.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",as(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hn(n))):B.resolve())}Yi(e,n){if(Ud(n))return B.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Cc(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ts(n,l);return this.ns(n,u,o,c.readTime)?this.Yi(e,Cc(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,r,s){return Ud(n)||s.isEqual(he.min())?B.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?B.resolve(null):(Ys()<=ye.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),as(n)),this.rs(e,o,n,U0(s,-1)).next(l=>l))})}ts(e,n){let r=new it(i_(e));return n.forEach((s,i)=>{Ha(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Ys()<=ye.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",as(n)),this.Ji.getDocumentsMatchingQuery(e,n,dr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ue(Ae),this._s=new Vs(i=>wu(i),Au),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eS(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function dS(t,e,n,r){return new fS(t,e,n,r)}async function b_(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=_e();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:l}))})})}function pS(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,g=p.keys();let v=B.resolve();return g.forEach(P=>{v=v.next(()=>f.getEntry(c,P)).next(N=>{const k=u.docVersions.get(P);Ce(k!==null),N.version.compareTo(k)<0&&(p.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),f.addEntry(N)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=_e();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function S_(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function gS(t,e){const n=de(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let v=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(ot.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),s=s.insert(p,v),function(N,k,q){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(g,v,f)&&l.push(n.Ur.updateTargetData(i,v))});let c=Mn(),u=_e();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(mS(i,o,e.documentUpdates).next(f=>{c=f.Ps,u=f.Is})),!r.isEqual(he.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return B.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.os=s,i))}function mS(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Mn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(he.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function _S(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yS(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new rr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Oc(t,e,n){const r=de(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Xi(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Jd(t,e,n){const r=de(t);let s=he.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const p=de(c),g=p._s.get(f);return g!==void 0?B.resolve(p.os.get(g)):p.Ur.getTargetData(u,f)}(r,o,hn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:_e())).next(l=>(vS(r,lb(e),l),{documents:l,Ts:i})))}function vS(t,e,n){let r=t.us.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Yd{constructor(){this.activeTargetIds=pb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ES{constructor(){this.so=new Yd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Yd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo=null;function Kl(){return Vo===null?Vo=function(){return 268435456+Math.round(2147483648*Math.random())}():Vo++,"0x"+Vo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class AS extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Kl(),c=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,c,u,s).then(f=>(Z("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Ts("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ns}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=IS[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Kl();return new Promise((o,l)=>{const c=new jm;c.setWithCredentials(!0),c.listenOnce(qm.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case jo.NO_ERROR:const f=c.getResponseJson();Z(ut,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case jo.TIMEOUT:Z(ut,`RPC '${e}' ${i} timed out`),l(new J(F.DEADLINE_EXCEEDED,"Request time out"));break;case jo.HTTP_ERROR:const p=c.getStatus();if(Z(ut,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const P=function(k){const q=k.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(q)>=0?q:F.UNKNOWN}(v.status);l(new J(P,v.message))}else l(new J(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new J(F.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{Z(ut,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);Z(ut,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=Kl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Wm(),l=Hm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Z(ut,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);let g=!1,v=!1;const P=new wS({Io:k=>{v?Z(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(g||(Z(ut,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Z(ut,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},To:()=>p.close()}),N=(k,q,x)=>{k.listen(q,j=>{try{x(j)}catch($){setTimeout(()=>{throw $},0)}})};return N(p,ri.EventType.OPEN,()=>{v||(Z(ut,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),N(p,ri.EventType.CLOSE,()=>{v||(v=!0,Z(ut,`RPC '${e}' stream ${s} transport closed`),P.So())}),N(p,ri.EventType.ERROR,k=>{v||(v=!0,Ts(ut,`RPC '${e}' stream ${s} transport errored:`,k),P.So(new J(F.UNAVAILABLE,"The operation could not be completed")))}),N(p,ri.EventType.MESSAGE,k=>{var q;if(!v){const x=k.data[0];Ce(!!x);const j=x,$=j.error||((q=j[0])===null||q===void 0?void 0:q.error);if($){Z(ut,`RPC '${e}' stream ${s} received error:`,$);const X=$.status;let re=function(_){const I=Ke[_];if(I!==void 0)return m_(I)}(X),w=$.message;re===void 0&&(re=F.INTERNAL,w="Unknown error status: "+X+" with message "+$.message),v=!0,P.So(new J(re,w)),p.close()}else Z(ut,`RPC '${e}' stream ${s} received:`,x),P.bo(x)}}),N(l,$m.STAT_EVENT,k=>{k.stat===wc.PROXY?Z(ut,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===wc.NOPROXY&&Z(ut,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Gl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){return new Ob(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new P_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new J(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RS extends C_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Mb(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?fn(o.readTime):he.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Dc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Sc(c)?{documents:Bb(i,c)}:{query:jb(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=v_(i,o.resumeToken);const u=Nc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){l.readTime=pa(i,o.snapshotVersion.toTimestamp());const u=Nc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=$b(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Dc(this.serializer),n.removeTarget=e,this.a_(n)}}class bS extends C_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Ub(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Dc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Fb(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new J(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,kc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(F.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,kc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class PS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ln(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Qr(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=de(c);u.L_.add(4),await to(u),u.q_.set("Unknown"),u.L_.delete(4),await Qa(u)}(this))})}),this.q_=new PS(r,s)}}async function Qa(t){if(Qr(t))for(const e of t.B_)await e(!0)}async function to(t){for(const e of t.B_)await e(!1)}function N_(t,e){const n=de(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Mu(n)?Lu(n):Ds(n).r_()&&xu(n,e))}function Ou(t,e){const n=de(t),r=Ds(n);n.N_.delete(e),r.r_()&&k_(n,e),n.N_.size===0&&(r.r_()?r.o_():Qr(n)&&n.q_.set("Unknown"))}function xu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ds(t).A_(e)}function k_(t,e){t.Q_.xe(e),Ds(t).R_(e)}function Lu(t){t.Q_=new Nb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ds(t).start(),t.q_.v_()}function Mu(t){return Qr(t)&&!Ds(t).n_()&&t.N_.size>0}function Qr(t){return de(t).L_.size===0}function V_(t){t.Q_=void 0}async function NS(t){t.q_.set("Online")}async function kS(t){t.N_.forEach((e,n)=>{xu(t,e)})}async function VS(t,e){V_(t),Mu(t)?(t.q_.M_(e),Lu(t)):t.q_.set("Unknown")}async function DS(t,e,n){if(t.q_.set("Online"),e instanceof y_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ga(t,r)}else if(e instanceof Ho?t.Q_.Ke(e):e instanceof __?t.Q_.He(e):t.Q_.We(e),!n.isEqual(he.min()))try{const r=await S_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(u);f&&i.N_.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(ot.EMPTY_BYTE_STRING,f.snapshotVersion)),k_(i,c);const p=new rr(f.target,c,u,f.sequenceNumber);xu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await ga(t,r)}}async function ga(t,e,n){if(!Xi(e))throw e;t.L_.add(1),await to(t),t.q_.set("Offline"),n||(n=()=>S_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Qa(t)})}function D_(t,e){return e().catch(n=>ga(t,n,e))}async function Ja(t){const e=de(t),n=gr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;OS(e);)try{const s=await _S(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,xS(e,s)}catch(s){await ga(e,s)}O_(e)&&x_(e)}function OS(t){return Qr(t)&&t.O_.length<10}function xS(t,e){t.O_.push(e);const n=gr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function O_(t){return Qr(t)&&!gr(t).n_()&&t.O_.length>0}function x_(t){gr(t).start()}async function LS(t){gr(t).p_()}async function MS(t){const e=gr(t);for(const n of t.O_)e.m_(n.mutations)}async function FS(t,e,n){const r=t.O_.shift(),s=Pu.from(r,e,n);await D_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ja(t)}async function US(t,e){e&&gr(t).V_&&await async function(r,s){if(function(o){return Sb(o)&&o!==F.ABORTED}(s.code)){const i=r.O_.shift();gr(r).s_(),await D_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ja(r)}}(t,e),O_(t)&&x_(t)}async function Zd(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Qr(n);n.L_.add(3),await to(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Qa(n)}async function BS(t,e){const n=de(t);e?(n.L_.delete(2),await Qa(n)):e||(n.L_.add(2),await to(n),n.q_.set("Unknown"))}function Ds(t){return t.K_||(t.K_=function(n,r,s){const i=de(n);return i.w_(),new RS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:NS.bind(null,t),Ro:kS.bind(null,t),mo:VS.bind(null,t),d_:DS.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Mu(t)?Lu(t):t.q_.set("Unknown")):(await t.K_.stop(),V_(t))})),t.K_}function gr(t){return t.U_||(t.U_=function(n,r,s){const i=de(n);return i.w_(),new bS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:LS.bind(null,t),mo:US.bind(null,t),f_:MS.bind(null,t),g_:FS.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ja(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Fu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uu(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),Xi(t))return new J(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=si(),this.sortedSet=new Ue(this.comparator)}static emptySet(e){return new ms(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ms;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.W_=new Ue(se.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ue():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class bs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new bs(e,n,ms.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$a(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class qS{constructor(){this.queries=tp(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=tp(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new J(F.ABORTED,"Firestore shutting down"))}}function tp(){return new Vs(t=>s_(t),$a)}async function L_(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new jS,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Uu(o,`Initialization of query '${as(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Bu(n)}async function M_(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function $S(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Bu(n)}function HS(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Bu(t){t.Y_.forEach(e=>{e.next()})}var xc,np;(np=xc||(xc={})).ea="default",np.Cache="cache";class F_{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new bs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==xc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.key=e}}class B_{constructor(e){this.key=e}}class WS{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=_e(),this.mutatedKeys=_e(),this.Aa=i_(e),this.Ra=new ms(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new ep,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),v=Ha(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),N=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let k=!1;g&&v?g.data.isEqual(v.data)?P!==N&&(r.track({type:3,doc:v}),k=!0):this.ga(g,v)||(r.track({type:2,doc:v}),k=!0,(c&&this.Aa(v,c)>0||u&&this.Aa(v,u)<0)&&(l=!0)):!g&&v?(r.track({type:0,doc:v}),k=!0):g&&!v&&(r.track({type:1,doc:g}),k=!0,(c||u)&&(l=!0)),k&&(v?(o=o.add(v),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(v,P){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return N(v)-N(P)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new bs(this.query,e.Ra,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ep,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=_e(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new B_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new U_(r))}),n}ba(e){this.Ta=e.Ts,this.da=_e();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return bs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class KS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class GS{constructor(e){this.key=e,this.va=!1}}class zS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Vs(l=>s_(l),$a),this.Ma=new Map,this.xa=new Set,this.Oa=new Ue(se.comparator),this.Na=new Map,this.La=new ku,this.Ba={},this.ka=new Map,this.qa=Rs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function QS(t,e,n=!0){const r=K_(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await j_(r,e,n,!0),s}async function JS(t,e){const n=K_(t);await j_(n,e,!0,!1)}async function j_(t,e,n,r){const s=await yS(t.localStore,hn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await YS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&N_(t.remoteStore,s),l}async function YS(t,e,n,r,s){t.Ka=(p,g,v)=>async function(N,k,q,x){let j=k.view.ma(q);j.ns&&(j=await Jd(N.localStore,k.query,!1).then(({documents:w})=>k.view.ma(w,j)));const $=x&&x.targetChanges.get(k.targetId),X=x&&x.targetMismatches.get(k.targetId)!=null,re=k.view.applyChanges(j,N.isPrimaryClient,$,X);return sp(N,k.targetId,re.wa),re.snapshot}(t,p,g,v);const i=await Jd(t.localStore,e,!0),o=new WS(e,i.Ts),l=o.ma(i.documents),c=eo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);sp(t,n,u.wa);const f=new KS(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function XS(t,e,n){const r=de(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!$a(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Oc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ou(r.remoteStore,s.targetId),Lc(r,s.targetId)}).catch(Yi)):(Lc(r,s.targetId),await Oc(r.localStore,s.targetId,!0))}async function ZS(t,e){const n=de(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ou(n.remoteStore,r.targetId))}async function eP(t,e,n){const r=aP(t);try{const s=await function(o,l){const c=de(o),u=Je.now(),f=l.reduce((v,P)=>v.add(P.key),_e());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let P=Mn(),N=_e();return c.cs.getEntries(v,f).next(k=>{P=k,P.forEach((q,x)=>{x.isValidDocument()||(N=N.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,P)).next(k=>{p=k;const q=[];for(const x of l){const j=Ib(x,p.get(x.key).overlayedDocument);j!=null&&q.push(new yr(x.key,j,Jm(j.value.mapValue),qt.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,q,l)}).next(k=>{g=k;const q=k.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(v,k.batchId,q)})}).then(()=>({batchId:g.batchId,changes:a_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new Ue(Ae)),u=u.insert(l,c),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await no(r,s.changes),await Ja(r.remoteStore)}catch(s){const i=Uu(s,"Failed to persist write");n.reject(i)}}async function q_(t,e){const n=de(t);try{const r=await gS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ce(o.va):s.removedDocuments.size>0&&(Ce(o.va),o.va=!1))}),await no(n,r,e)}catch(r){await Yi(r)}}function rp(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=de(o);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(l)&&(u=!0)}),u&&Bu(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tP(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ue(se.comparator);o=o.insert(i,dt.newNoDocument(i,he.min()));const l=_e().add(i),c=new Ga(he.min(),new Map,new Ue(Ae),o,l);await q_(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),ju(r)}else await Oc(r.localStore,e,!1).then(()=>Lc(r,e,n)).catch(Yi)}async function nP(t,e){const n=de(t),r=e.batch.batchId;try{const s=await pS(n.localStore,e);H_(n,r,null),$_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await no(n,s)}catch(s){await Yi(s)}}async function rP(t,e,n){const r=de(t);try{const s=await function(o,l){const c=de(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Ce(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);H_(r,e,n),$_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await no(r,s)}catch(s){await Yi(s)}}function $_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function H_(t,e,n){const r=de(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Lc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||W_(t,r)})}function W_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Ou(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),ju(t))}function sp(t,e,n){for(const r of n)r instanceof U_?(t.La.addReference(r.key,e),sP(t,r)):r instanceof B_?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||W_(t,r.key)):ue()}function sP(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),ju(t))}function ju(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new se(Oe.fromString(e)),r=t.qa.next();t.Na.set(r,new GS(n)),t.Oa=t.Oa.insert(n,r),N_(t.remoteStore,new rr(hn(Ru(n.path)),r,"TargetPurposeLimboResolution",vu.oe))}}async function no(t,e,n){const r=de(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Du.Wi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,u){const f=de(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>B.forEach(u,g=>B.forEach(g.$i,v=>f.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>B.forEach(g.Ui,v=>f.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!Xi(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const v=f.os.get(g),P=v.snapshotVersion,N=v.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(g,N)}}}(r.localStore,i))}async function iP(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await b_(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new J(F.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await no(n,r.hs)}}function oP(t,e){const n=de(t),r=n.Na.get(e);if(r&&r.va)return _e().add(r.key);{let s=_e();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function K_(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=q_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tP.bind(null,e),e.Ca.d_=$S.bind(null,e.eventManager),e.Ca.$a=HS.bind(null,e.eventManager),e}function aP(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rP.bind(null,e),e}class ma{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=za(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return dS(this.persistence,new hS,e.initialUser,this.serializer)}Ga(e){return new lS(Vu.Zr,this.serializer)}Wa(e){return new ES}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ma.provider={build:()=>new ma};class Mc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iP.bind(null,this.syncEngine),await BS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qS}()}createDatastore(e){const n=za(e.databaseInfo.databaseId),r=function(i){return new AS(i)}(e.databaseInfo);return function(i,o,l,c){return new SS(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new CS(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>rp(this.syncEngine,n,0),function(){return Xd.D()?new Xd:new TS}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,f){const p=new zS(s,i,o,l,c,u);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);Z("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await to(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Mc.provider={build:()=>new Mc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=Gm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Uu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function zl(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await b_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ip(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cP(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Zd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Zd(e.remoteStore,s)),t._onlineComponents=e}async function cP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await zl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ts("Error using user provided cache. Falling back to memory cache: "+n),await zl(t,new ma)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await zl(t,new ma);return t._offlineComponents}async function z_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await ip(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await ip(t,new Mc))),t._onlineComponents}function uP(t){return z_(t).then(e=>e.syncEngine)}async function Q_(t){const e=await z_(t),n=e.eventManager;return n.onListen=QS.bind(null,e.syncEngine),n.onUnlisten=XS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=JS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ZS.bind(null,e.syncEngine),n}function hP(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new G_({next:g=>{f.Za(),o.enqueueAndForget(()=>M_(i,p));const v=g.docs.has(l);!v&&g.fromCache?u.reject(new J(F.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&c&&c.source==="server"?u.reject(new J(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new F_(Ru(l.path),f,{includeMetadataChanges:!0,_a:!0});return L_(i,p)}(await Q_(t),t.asyncQueue,e,n,r)),r.promise}function fP(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new G_({next:g=>{f.Za(),o.enqueueAndForget(()=>M_(i,p)),g.fromCache&&c.source==="server"?u.reject(new J(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new F_(l,f,{includeMetadataChanges:!0,_a:!0});return L_(i,p)}(await Q_(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t,e,n){if(!n)throw new J(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dP(t,e,n,r){if(e===!0&&r===!0)throw new J(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ap(t){if(!se.isDocumentKey(t))throw new J(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function lp(t){if(se.isDocumentKey(t))throw new J(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ya(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function Zt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ya(t);throw new J(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=J_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new N0;switch(r.type){case"firstParty":return new O0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=op.get(n);r&&(Z("ComponentProvider","Removing Datastore"),op.delete(n),r.terminate())}(this),Promise.resolve()}}function pP(t,e,n,r={}){var s;const i=(t=Zt(t,Xa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=ht.MOCK_USER;else{l=GI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new J(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ht(u)}t._authCredentials=new k0(new Km(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jr(this.firestore,e,this._query)}}class At{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class cr extends Jr{constructor(e,n,r){super(e,n,Ru(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new se(e))}withConverter(e){return new cr(this.firestore,e,this._path)}}function tC(t,e,...n){if(t=Ze(t),Y_("collection","path",e),t instanceof Xa){const r=Oe.fromString(e,...n);return lp(r),new cr(t,null,r)}{if(!(t instanceof At||t instanceof cr))throw new J(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return lp(r),new cr(t.firestore,null,r)}}function gP(t,e,...n){if(t=Ze(t),arguments.length===1&&(e=Gm.newId()),Y_("doc","path",e),t instanceof Xa){const r=Oe.fromString(e,...n);return ap(r),new At(t,null,new se(r))}{if(!(t instanceof At||t instanceof cr))throw new J(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return ap(r),new At(t.firestore,t instanceof cr?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new P_(this,"async_queue_retry"),this.Vu=()=>{const r=Gl();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Gl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Gl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Nn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Xi(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Ln("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Fu.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ue()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Yr extends Xa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new up,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new up(e),this._firestoreClient=void 0,await e}}}function mP(t,e){const n=typeof t=="object"?t:rm(),r=typeof t=="string"?t:"(default)",s=lu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=WI("firestore");i&&pP(s,...i)}return s}function qu(t){if(t._terminated)throw new J(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||_P(t),t._firestoreClient}function _P(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,f){return new G0(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,J_(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new lP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ss(ot.fromBase64String(e))}catch(n){throw new J(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ss(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=/^__.*__$/;class vP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zi(e,this.data,n,this.fieldTransforms)}}class X_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new yr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Z_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class Wu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Wu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return _a(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Z_(this.Cu)&&yP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class EP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||za(e)}Qu(e,n,r,s=!1){return new Wu({Cu:e,methodName:n,qu:r,path:rt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tl(t){const e=t._freezeSettings(),n=za(t._databaseId);return new EP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ey(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Gu("Data must be an object, but it was:",o,r);const l=ty(r,o);let c,u;if(i.merge)c=new Ot(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Fc(e,p,n);if(!o.contains(g))throw new J(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);ry(f,g)||f.push(g)}c=new Ot(f),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new vP(new bt(l),c,u)}class nl extends el{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nl}}class Ku extends el{_toFieldTransform(e){return new yb(e.path,new Fi)}isEqual(e){return e instanceof Ku}}function TP(t,e,n,r){const s=t.Qu(1,e,n);Gu("Data must be an object, but it was:",s,r);const i=[],o=bt.empty();zr(r,(c,u)=>{const f=zu(e,c,n);u=Ze(u);const p=s.Nu(f);if(u instanceof nl)i.push(f);else{const g=ro(u,p);g!=null&&(i.push(f),o.set(f,g))}});const l=new Ot(i);return new X_(o,l,s.fieldTransforms)}function IP(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[Fc(e,r,n)],c=[s];if(i.length%2!=0)throw new J(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Fc(e,i[g])),c.push(i[g+1]);const u=[],f=bt.empty();for(let g=l.length-1;g>=0;--g)if(!ry(u,l[g])){const v=l[g];let P=c[g];P=Ze(P);const N=o.Nu(v);if(P instanceof nl)u.push(v);else{const k=ro(P,N);k!=null&&(u.push(v),f.set(v,k))}}const p=new Ot(u);return new X_(f,p,o.fieldTransforms)}function wP(t,e,n,r=!1){return ro(n,t.Qu(r?4:3,e))}function ro(t,e){if(ny(t=Ze(t)))return Gu("Unsupported field value:",e,t),ty(t,e);if(t instanceof el)return function(r,s){if(!Z_(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=ro(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Je.fromDate(r);return{timestampValue:pa(s.serializer,i)}}if(r instanceof Je){const i=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pa(s.serializer,i)}}if(r instanceof $u)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ss)return{bytesValue:v_(s.serializer,r._byteString)};if(r instanceof At){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Nu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Hu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return bu(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ya(r)}`)}(t,e)}function ty(t,e){const n={};return zm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(t,(r,s)=>{const i=ro(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ny(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof $u||t instanceof Ss||t instanceof At||t instanceof el||t instanceof Hu)}function Gu(t,e,n){if(!ny(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ya(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Fc(t,e,n){if((e=Ze(e))instanceof Za)return e._internalPath;if(typeof e=="string")return zu(t,e);throw _a("Field path arguments must be of type string or ",t,!1,void 0,n)}const AP=new RegExp("[~\\*/\\[\\]]");function zu(t,e,n){if(e.search(AP)>=0)throw _a(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Za(...e.split("."))._internalPath}catch{throw _a(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _a(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new J(F.INVALID_ARGUMENT,l+t+c)}function ry(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class RP extends sy{data(){return super.data()}}function rl(t,e){return typeof e=="string"?zu(t,e):e instanceof Za?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qu{}class iy extends Qu{}function nC(t,e,...n){let r=[];e instanceof Qu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Ju).length,l=i.filter(c=>c instanceof sl).length;if(o>1||o>0&&l>0)throw new J(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class sl extends iy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new sl(e,n,r)}_apply(e){const n=this._parse(e);return oy(e._query,n),new Jr(e.firestore,e.converter,Pc(e._query,n))}_parse(e){const n=tl(e.firestore);return function(i,o,l,c,u,f,p){let g;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new J(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){fp(p,f);const v=[];for(const P of p)v.push(hp(c,i,P));g={arrayValue:{values:v}}}else g=hp(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||fp(p,f),g=wP(l,o,p,f==="in"||f==="not-in");return Ge.create(u,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function rC(t,e,n){const r=e,s=rl("where",t);return sl._create(s,r,n)}class Ju extends Qu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ju(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Xt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)oy(o,c),o=Pc(o,c)}(e._query,n),new Jr(e.firestore,e.converter,Pc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yu extends iy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Yu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new J(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new J(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mi(i,o)}(e._query,this._field,this._direction);return new Jr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ks(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function sC(t,e="asc"){const n=e,r=rl("orderBy",t);return Yu._create(r,n)}function hp(t,e,n){if(typeof(n=Ze(n))=="string"){if(n==="")throw new J(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!r_(e)&&n.indexOf("/")!==-1)throw new J(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!se.isDocumentKey(r))throw new J(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Dd(t,new se(r))}if(n instanceof At)return Dd(t,n._key);throw new J(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ya(n)}.`)}function fp(t,e){if(!Array.isArray(t)||t.length===0)throw new J(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oy(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class SP{convertValue(e,n="none"){switch(Wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return zr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>He(o.doubleValue));return new Hu(i)}convertGeoPoint(e){return new $u(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Tu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oi(e));default:return null}}convertTimestamp(e){const n=pr(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Ce(R_(r));const s=new xi(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||Ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ly extends sy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Wo extends ly{data(e={}){return super.data(e)}}class PP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new oi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Wo(this._firestore,this._userDataWriter,r.key,r,new oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Wo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new oi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Wo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new oi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:CP(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function CP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(t){t=Zt(t,At);const e=Zt(t.firestore,Yr);return hP(qu(e),t._key).then(n=>NP(e,t,n))}class cy extends SP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ss(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function oC(t){t=Zt(t,Jr);const e=Zt(t.firestore,Yr),n=qu(e),r=new cy(e);return bP(t._query),fP(n,t._query).then(s=>new PP(e,r,t,s))}function aC(t,e,n){t=Zt(t,At);const r=Zt(t.firestore,Yr),s=ay(t.converter,e,n);return il(r,[ey(tl(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,qt.none())])}function lC(t,e,n,...r){t=Zt(t,At);const s=Zt(t.firestore,Yr),i=tl(s);let o;return o=typeof(e=Ze(e))=="string"||e instanceof Za?IP(i,"updateDoc",t._key,e,n,r):TP(i,"updateDoc",t._key,e),il(s,[o.toMutation(t._key,qt.exists(!0))])}function cC(t){return il(Zt(t.firestore,Yr),[new Su(t._key,qt.none())])}function uC(t,e){const n=Zt(t.firestore,Yr),r=gP(t),s=ay(t.converter,e);return il(n,[ey(tl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function il(t,e){return function(r,s){const i=new Nn;return r.asyncQueue.enqueueAndForget(async()=>eP(await uP(r),s,i)),i.promise}(qu(t),e)}function NP(t,e,n){const r=n.docs.get(e._key),s=new cy(t);return new ly(t,s,e._key,r,new oi(n.hasPendingWrites,n.fromCache),e.converter)}function hC(){return new Ku("serverTimestamp")}(function(e,n=!0){(function(s){Ns=s})(Ps),Es(new Br("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Yr(new V0(r.getProvider("auth-internal")),new L0(r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new J(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),lr(Pd,"4.7.3",e),lr(Pd,"4.7.3","esm2017")})();const kP={apiKey:"AIzaSyA7C5UUFIf7pPpatI6YURsnJr-bZ0VVMt4",authDomain:"kasndb-25448.firebaseapp.com",projectId:"kasndb-25448",storageBucket:"kasndb-25448.firebasestorage.app",messagingSenderId:"574454150358",appId:"1:574454150358:web:f7ef160ca551f3362c0577",measurementId:"G-T75ELH2NS2"},uy=nm(kP),Do=b0(uy),fC=mP(uy),hy=kT("auth",()=>{const t=Vr(null),e=Vr(!1),n=Vr(!0),r=Vr(null),s=kt(()=>!!t.value);async function i(f,p){r.value=null,n.value=!0;try{const g=`${f.toLowerCase()}@kasndb.app`,v=await _d(Do,g,p);return t.value=v.user,e.value=!1,v.user}catch(g){throw r.value=u(g.code),g}finally{n.value=!1}}async function o(f){r.value=null,n.value=!0;try{const p=await _d(Do,"admin@kasndb.app",f);return t.value=p.user,e.value=!0,p.user}catch(p){throw r.value=u(p.code),p}finally{n.value=!1}}async function l(){try{await gR(Do),t.value=null,e.value=!1}catch(f){throw r.value="Gagal keluar. Silakan coba lagi.",f}}function c(){return new Promise(f=>{pR(Do,p=>{p?(t.value=p,e.value=p.email==="admin@kasndb.app"):(t.value=null,e.value=!1),n.value=!1,f(p)})})}function u(f){return{"auth/user-not-found":"Pengguna tidak ditemukan. Periksa nomor rumah Anda.","auth/wrong-password":"Kata sandi salah. Silakan coba lagi.","auth/invalid-credential":"Nomor rumah atau nama depan tidak valid.","auth/invalid-email":"Format email tidak valid.","auth/too-many-requests":"Terlalu banyak percobaan login. Coba lagi nanti.","auth/network-request-failed":"Koneksi internet bermasalah. Periksa jaringan Anda.","auth/user-disabled":"Akun ini telah dinonaktifkan."}[f]||"Terjadi kesalahan. Silakan coba lagi."}return{user:t,isAdmin:e,loading:n,error:r,isAuthenticated:s,login:i,loginAdmin:o,logout:l,init:c}}),VP={class:"flex items-center justify-center p-4"},DP={__name:"LoadingSpinner",setup(t){return(e,n)=>(Fr(),oc("div",VP,[...n[0]||(n[0]=[Dr("div",{class:"w-8 h-8 border-3 border-gray-200 border-t-primary-600 rounded-full animate-spin",style:{"border-width":"3px"}},null,-1)])]))}},OP={class:"min-h-screen bg-gray-50 font-sans"},xP={key:1,class:"min-h-screen flex items-center justify-center bg-gray-50"},LP={class:"text-center"},MP={class:"mt-3"},FP={__name:"App",setup(t){const e=hy(),n=Vr(!0);return Xc(async()=>{await e.init(),n.value=!1}),(r,s)=>(Fr(),oc("div",OP,[n.value?(Fr(),oc("div",xP,[Dr("div",LP,[s[0]||(s[0]=Dr("div",{class:"text-5xl mb-4"},"🏠",-1)),s[1]||(s[1]=Dr("div",{class:"text-xl font-semibold text-primary-700"},"KasNDB",-1)),Dr("div",MP,[It(DP)])])])):(Fr(),ea(ir(Gg),{key:0}))]))}},UP="modulepreload",BP=function(t){return"/KasNDB/"+t},dp={},zn=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=BP(c),c in dp)return;dp[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":UP,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((g,v)=>{p.addEventListener("load",g),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},jP=[{path:"/login",name:"Login",component:()=>zn(()=>import("./LoginView-Dj7fXHPJ.js"),[]),meta:{requiresGuest:!0}},{path:"/",name:"Dashboard",component:()=>zn(()=>import("./DashboardView-BuhM9TOl.js"),__vite__mapDeps([0,1,2,3,4])),meta:{requiresAuth:!0,requiresWarga:!0}},{path:"/admin",name:"AdminDashboard",component:()=>zn(()=>import("./AdminDashboard-B0fM4-mq.js"),__vite__mapDeps([5,1,2,3,4])),meta:{requiresAuth:!0,requiresAdmin:!0}},{path:"/admin/warga",name:"WargaView",component:()=>zn(()=>import("./WargaView-wttxy1rL.js"),__vite__mapDeps([6,1,4,7,8,9,10])),meta:{requiresAuth:!0,requiresAdmin:!0}},{path:"/admin/pembayaran",name:"PembayaranView",component:()=>zn(()=>import("./PembayaranView-CziRv7gN.js"),__vite__mapDeps([11,1,2,4,7,8])),meta:{requiresAuth:!0,requiresAdmin:!0}},{path:"/admin/pengeluaran",name:"PengeluaranView",component:()=>zn(()=>import("./PengeluaranView-COs76P09.js"),__vite__mapDeps([12,3,4,7,8,9,10])),meta:{requiresAuth:!0,requiresAdmin:!0}},{path:"/laporan",name:"Laporan",component:()=>zn(()=>import("./LaporanView-ociDJj4D.js"),__vite__mapDeps([13,1,2,3,4])),meta:{requiresAuth:!0}},{path:"/profil",name:"Profil",component:()=>zn(()=>import("./ProfilView-o-fkPQlv.js"),__vite__mapDeps([14,1,2,4])),meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",redirect:"/login"}],fy=MI({history:mI("/KasNDB/"),routes:jP});fy.beforeEach(async(t,e,n)=>{const r=hy();r.loading&&await new Promise(o=>{const l=r.$subscribe(()=>{r.loading||(l(),o())});setTimeout(o,3e3)});const s=!!r.user,i=r.isAdmin;if(t.meta.requiresAuth&&!s)return n("/login");if(t.meta.requiresGuest&&s)return n(i?"/admin":"/");if(t.meta.requiresAdmin&&!i)return n("/");if(t.meta.requiresWarga&&i)return n("/admin");n()});const Xu=IT(FP);Xu.use(RT());Xu.use(fy);Xu.mount("#app");export{zn as A,kT as B,Je as C,nC as D,tC as E,Nt as F,fC as G,rC as H,sC as I,oC as J,hC as K,uC as L,gP as M,lC as N,cC as O,iC as P,aC as Q,YP as R,Do as S,GP as T,_d as U,DP as _,Dr as a,qP as b,oc as c,zP as d,SE as e,bE as f,JP as g,Xc as h,ir as i,It as j,WP as k,Pv as l,kt as m,qc as n,Fr as o,HP as p,jc as q,Vr as r,gT as s,Qy as t,hy as u,Cf as v,QP as w,ea as x,$P as y,KP as z};
