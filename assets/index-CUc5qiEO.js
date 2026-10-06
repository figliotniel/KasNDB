const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginView-Ca_iZNFy.js","assets/Modal-Ch45gxE9.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/Modal-CcYlVwqx.css","assets/DashboardView-BjajZwDJ.js","assets/warga-CzfbN2i1.js","assets/kas-DfLy-UxT.js","assets/pengeluaran-C95TJyiP.js","assets/BottomNav-ZAERha2Z.js","assets/StatusBadge-B1NYfjrn.js","assets/AdminDashboard-Cs11jlp0.js","assets/WargaView-Cw4e6MIU.js","assets/ConfirmDialog-Bn4BLwaO.js","assets/ConfirmDialog-BpZ-fwG_.css","assets/PembayaranView-DRiAyo2f.js","assets/PengeluaranView-DgRrb26F.js","assets/LaporanView-Dv5SYbXS.js","assets/ProfilView-BweuUk8f.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},Or=[],un=()=>{},gp=()=>!1,va=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ea=t=>t.startsWith("onUpdate:"),et=Object.assign,qc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Fy=Object.prototype.hasOwnProperty,Pe=(t,e)=>Fy.call(t,e),ne=Array.isArray,ar=t=>$i(t)==="[object Map]",On=t=>$i(t)==="[object Set]",Wh=t=>$i(t)==="[object Date]",fe=t=>typeof t=="function",Fe=t=>typeof t=="string",Ut=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",_p=t=>(Ce(t)||fe(t))&&fe(t.then)&&fe(t.catch),yp=Object.prototype.toString,$i=t=>yp.call(t),Uy=t=>$i(t).slice(8,-1),vp=t=>$i(t)==="[object Object]",Ta=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ci=jc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},By=/-\w/g,St=Ia(t=>t.replace(By,e=>e.slice(1).toUpperCase())),jy=/\B([A-Z])/g,Kr=Ia(t=>t.replace(jy,"-$1").toLowerCase()),wa=Ia(t=>t.charAt(0).toUpperCase()+t.slice(1)),Il=Ia(t=>t?`on${wa(t)}`:""),ln=(t,e)=>!Object.is(t,e),Mo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ep=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Aa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},qy=t=>{const e=Fe(t)?Number(t):NaN;return isNaN(e)?t:e};let Kh;const Ra=()=>Kh||(Kh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $c(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Fe(r)?Ky(r):$c(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Fe(t)||Ce(t))return t}const $y=/;(?![^(]*\))/g,Hy=/:([^]+)/,Wy=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Ky(t){const e={};return t.replace(Wy,n=>n.startsWith("/*")?"":n).split($y).forEach(n=>{if(n){const r=n.split(Hy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ba(t){let e="";if(Fe(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const r=ba(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Gy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zy=jc(Gy);function Tp(t){return!!t||t===""}function Qy(t,e,n){if(t.length!==e.length)return!1;let r=!0;for(let s=0;r&&s<t.length;s++)r=Xt(t[s],e[s],n);return r}function Gh(t,e,n){if(t.size!==e.size)return!1;const r=Array.from(e),s=new Uint8Array(r.length);for(const i of t){let o=-1;for(let l=0;l<r.length;l++)if(!s[l]&&Xt(i,r[l],n)){o=l;break}if(o<0)return!1;s[o]=1}return!0}function Yy(t,e,n){let r=ar(t),s=ar(e);if(r||s||(r=On(t),s=On(e),r||s))return r&&s?Gh(t,e,n):!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const l in t){const c=t.hasOwnProperty(l),u=e.hasOwnProperty(l);if(c&&!u||!c&&u||!Xt(t[l],e[l],n))return!1}return String(t)===String(e)}function zh(t,e,n,r){n||(n=[new Map,new Map]);const[s,i]=n;if(s.has(t)||i.has(e))return s.get(t)===e&&i.get(e)===t;s.set(t,e),i.set(e,t);const o=r(t,e,n);return s.delete(t),i.delete(e),o}function Xt(t,e,n){if(t===e)return!0;let r=Wh(t),s=Wh(e);return r||s?r&&s?t.getTime()===e.getTime():!1:(r=Ut(t),s=Ut(e),r||s?t===e:(r=ne(t),s=ne(e),r||s?r&&s?zh(t,e,n,Qy):!1:(r=Ce(t),s=Ce(e),r||s?!r||!s?!1:zh(t,e,n,Yy):String(t)===String(e))))}function Hc(t,e){return t.findIndex(n=>Xt(n,e))}const Ip=t=>!!(t&&t.__v_isRef===!0),Jy=t=>Fe(t)?t:t==null?"":ne(t)||Ce(t)&&(t.toString===yp||!fe(t.toString))?Ip(t)?Jy(t.value):JSON.stringify(t,wp,2):String(t),wp=(t,e)=>Ip(e)?wp(t,e.value):ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[wl(r,i)+" =>"]=s,n),{})}:On(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>wl(n))}:Ut(e)?wl(e):Ce(e)&&!ne(e)&&!vp(e)?String(e):e,wl=(t,e="")=>{var n;return Ut(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xe;class Ap{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Xe&&(Xe.active?(this.parent=Xe,this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=Xe;try{return Xe=this,e()}finally{Xe=n}}}on(){++this._on===1&&(this.prevScope=Xe,Xe=this)}off(){if(this._on>0&&--this._on===0){if(Xe===this)Xe=this.prevScope;else{let e=Xe;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Rp(t){return new Ap(t)}function bp(){return Xe}function Xy(t,e=!1){Xe&&Xe.cleanups.push(t)}let Oe;const Al=new WeakSet;class Sp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xe&&(Xe.active?Xe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Al.has(this)&&(Al.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Cp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qh(this),kp(this);const e=Oe,n=Yt;Oe=this,Yt=!0;try{return this.fn()}finally{Np(this),Oe=e,Yt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Gc(e);this.deps=this.depsTail=void 0,Qh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Al.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Jl(this)&&this.run()}get dirty(){return Jl(this)}}let Pp=0,ui,hi;function Cp(t,e=!1){if(t.flags|=8,e){t.next=hi,hi=t;return}t.next=ui,ui=t}function Wc(){Pp++}function Kc(){if(--Pp>0)return;if(hi){let e=hi;for(hi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ui;){let e=ui;for(ui=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function kp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Np(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Gc(r),Zy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Jl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Vp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Vp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ii)||(t.globalVersion=Ii,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Jl(t))))return;t.flags|=2;const e=t.dep,n=Oe,r=Yt;Oe=t,Yt=!0;try{kp(t);const s=t.fn(t._value);(e.version===0||ln(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Oe=n,Yt=r,Np(t),t.flags&=-3}}function Gc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Gc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Zy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Yt=!0;const Dp=[];function xn(){Dp.push(Yt),Yt=!1}function Mn(){const t=Dp.pop();Yt=t===void 0?!0:t}function Qh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let Ii=0;class ev{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Oe||!Yt||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new ev(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,Op(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=r)}return n}trigger(e){this.version++,Ii++,this.notify(e)}notify(e){Wc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Kc()}}}function Op(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Op(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const zo=new WeakMap,Lr=Symbol(""),Xl=Symbol(""),wi=Symbol("");function gt(t,e,n){if(Yt&&Oe){let r=zo.get(t);r||zo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new zc),s.map=r,s.key=n),s.track()}}function Rn(t,e,n,r,s,i){const o=zo.get(t);if(!o){Ii++;return}const l=c=>{c&&c.trigger()};if(Wc(),e==="clear")o.forEach(l);else{const c=ne(t),u=c&&Ta(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===wi||!Ut(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(wi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Lr)),ar(t)&&l(o.get(Xl)));break;case"delete":c||(l(o.get(Lr)),ar(t)&&l(o.get(Xl)));break;case"set":ar(t)&&l(o.get(Lr));break}}Kc()}function tv(t,e){const n=zo.get(t);return n&&n.get(e)}function rs(t){const e=Ae(t);return e===t||(gt(e,"iterate",wi),Ft(t))?e:gn(t)?hn(t)?e.map(n=>dr(Kt(n))):e.map(dr):e.map(Kt)}function Sa(t){return gt(t=Ae(t),"iterate",wi),t}function on(t,e){return gn(t)?dr(hn(t)?Kt(e):e):Kt(e)}const nv={__proto__:null,[Symbol.iterator](){return Rl(this,Symbol.iterator,t=>on(this,t))},concat(...t){return rs(this).concat(...t.map(e=>ne(e)?rs(e):e))},entries(){return Rl(this,"entries",t=>(t[1]=on(this,t[1]),t))},every(t,e){return En(this,"every",t,e,void 0,arguments)},filter(t,e){return En(this,"filter",t,e,n=>n.map(r=>on(this,r)),arguments)},find(t,e){return En(this,"find",t,e,n=>on(this,n),arguments)},findIndex(t,e){return En(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return En(this,"findLast",t,e,n=>on(this,n),arguments)},findLastIndex(t,e){return En(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return En(this,"forEach",t,e,void 0,arguments)},includes(...t){return bl(this,"includes",t)},indexOf(...t){return bl(this,"indexOf",t)},join(t){return rs(this).join(t)},lastIndexOf(...t){return bl(this,"lastIndexOf",t)},map(t,e){return En(this,"map",t,e,void 0,arguments)},pop(){return Qs(this,"pop")},push(...t){return Qs(this,"push",t)},reduce(t,...e){return Yh(this,"reduce",t,e)},reduceRight(t,...e){return Yh(this,"reduceRight",t,e)},shift(){return Qs(this,"shift")},some(t,e){return En(this,"some",t,e,void 0,arguments)},splice(...t){return Qs(this,"splice",t)},toReversed(){return rs(this).toReversed()},toSorted(t){return rs(this).toSorted(t)},toSpliced(...t){return rs(this).toSpliced(...t)},unshift(...t){return Qs(this,"unshift",t)},values(){return Rl(this,"values",t=>on(this,t))}};function Rl(t,e,n){const r=Sa(t),s=r[e]();return r!==t&&!Ft(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const rv=Array.prototype;function En(t,e,n,r,s,i){const o=Sa(t),l=o!==t&&!Ft(t),c=o[e];if(c!==rv[e]){const p=c.apply(t,i);return l?Kt(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,on(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function Yh(t,e,n,r){const s=Sa(t),i=s!==t&&!Ft(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(u,f,p){return l&&(l=!1,u=on(t,u)),n.call(this,u,on(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const c=s[e](o,...r);return l?on(t,c):c}function bl(t,e,n){const r=Ae(t);gt(r,"iterate",wi);const s=r[e](...n);return(s===-1||s===!1)&&Pa(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Qs(t,e,n=[]){xn(),Wc();const r=Ae(t)[e].apply(t,n);return Kc(),Mn(),r}const sv=jc("__proto__,__v_isRef,__isVue"),xp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ut));function iv(t){Ut(t)||(t=String(t));const e=Ae(this);return gt(e,"has",t),e.hasOwnProperty(t)}class Mp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?mv:Bp:i?Up:Fp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ne(e);if(!s){let c;if(o&&(c=nv[n]))return c;if(n==="hasOwnProperty")return iv}const l=Reflect.get(e,n,We(e)?e:r);if((Ut(n)?xp.has(n):sv(n))||(s||gt(e,"get",n),i))return l;if(We(l)){const c=o&&Ta(n)?l:l.value;return s&&Ce(c)?ec(c):c}return Ce(l)?s?ec(l):Hi(l):l}}class Lp extends Mp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ne(e)&&Ta(n);if(!this._isShallow){const u=gn(i);if(!Ft(r)&&!gn(r)&&(i=Ae(i),r=Ae(r)),!o&&We(i)&&!We(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:Pe(e,n),c=Reflect.set(e,n,r,We(e)?e:s);return e===Ae(s)&&c&&(l?ln(r,i)&&Rn(e,"set",n,r):Rn(e,"add",n,r)),c}deleteProperty(e,n){const r=Pe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Rn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ut(n)||!xp.has(n))&&gt(e,"has",n),r}ownKeys(e){return gt(e,"iterate",ne(e)?"length":Lr),Reflect.ownKeys(e)}}class ov extends Mp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const av=new Lp,lv=new ov,cv=new Lp(!0);const Zl=t=>t,wo=t=>Reflect.getPrototypeOf(t);function uv(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=ar(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?Zl:e?dr:Kt;return!e&&gt(i,"iterate",c?Xl:Lr),et(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function Ao(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function hv(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);t||(ln(s,l)&&gt(o,"get",s),gt(o,"get",l));const{has:c}=wo(o),u=e?Zl:t?dr:Kt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&gt(Ae(s),"iterate",Lr),s.size},has(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);return t||(ln(s,l)&&gt(o,"has",s),gt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ae(l),u=e?Zl:t?dr:Kt;return!t&&gt(c,"iterate",Lr),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return et(n,t?{add:Ao("add"),set:Ao("set"),delete:Ao("delete"),clear:Ao("clear")}:{add(s){const i=Ae(this),o=wo(i),l=Ae(s),c=!e&&!Ft(s)&&!gn(s)?l:s;return o.has.call(i,c)||ln(s,c)&&o.has.call(i,s)||ln(l,c)&&o.has.call(i,l)||(i.add(c),Rn(i,"add",c,c)),this},set(s,i){!e&&!Ft(i)&&!gn(i)&&(i=Ae(i));const o=Ae(this),{has:l,get:c}=wo(o);let u=l.call(o,s);u||(s=Ae(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?ln(i,f)&&Rn(o,"set",s,i):Rn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:l}=wo(i);let c=o.call(i,s);c||(s=Ae(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Rn(i,"delete",s,void 0),u},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&Rn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=uv(s,t,e)}),n}function Qc(t,e){const n=hv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Pe(n,s)&&s in r?n:r,s,i)}const fv={get:Qc(!1,!1)},dv={get:Qc(!1,!0)},pv={get:Qc(!0,!1)};const Fp=new WeakMap,Up=new WeakMap,Bp=new WeakMap,mv=new WeakMap;function gv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hi(t){return gn(t)?t:Yc(t,!1,av,fv,Fp)}function jp(t){return Yc(t,!1,cv,dv,Up)}function ec(t){return Yc(t,!0,lv,pv,Bp)}function Yc(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=gv(Uy(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function hn(t){return gn(t)?hn(t.__v_raw):!!(t&&t.__v_isReactive)}function gn(t){return!!(t&&t.__v_isReadonly)}function Ft(t){return!!(t&&t.__v_isShallow)}function Pa(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function Jc(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&Ep(t,"__v_skip",!0),t}const Kt=t=>Ce(t)?Hi(t):t,dr=t=>Ce(t)?ec(t):t;function We(t){return t?t.__v_isRef===!0:!1}function us(t){return qp(t,!1)}function _v(t){return qp(t,!0)}function qp(t,e){return We(t)?t:new yv(t,e)}class yv{constructor(e,n){this.dep=new zc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:Kt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ft(e)||gn(e);e=r?e:Ae(e),ln(e,n)&&(this._rawValue=e,this._value=r?e:Kt(e),this.dep.trigger())}}function lr(t){return We(t)?t.value:t}const vv={get:(t,e,n)=>e==="__v_raw"?t:lr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return We(s)&&!We(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function $p(t){return hn(t)?t:new Proxy(t,vv)}function Ev(t){const e=ne(t)?new Array(t.length):{};for(const n in t)e[n]=Iv(t,n);return e}class Tv{constructor(e,n,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=Ut(n)?n:String(n),this._raw=Ae(e);let s=!0,i=e;if(!ne(e)||Ut(this._key)||!Ta(this._key))do s=!Pa(i)||Ft(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=lr(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&We(this._raw[this._key])){const n=this._object[this._key];if(We(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return tv(this._raw,this._key)}}function Iv(t,e,n){return new Tv(t,e,n)}class wv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new zc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ii-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return Cp(this,!0),!0}get value(){const e=this.dep.track();return Vp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Av(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new wv(r,s,n)}const Ro={},Qo=new WeakMap;let kr;function Rv(t,e=!1,n=kr){if(n){let r=Qo.get(n);r||Qo.set(n,r=[]),r.push(t)}}function bv(t,e,n=De){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=$=>s?$:Ft($)||s===!1||s===0?bn($,1):bn($);let f,p,m,v,S=!1,k=!1;if(We(t)?(p=()=>t.value,S=Ft(t)):hn(t)?(p=()=>u(t),S=!0):ne(t)?(k=!0,S=t.some($=>hn($)||Ft($)),p=()=>t.map($=>{if(We($))return $.value;if(hn($))return u($);if(fe($))return c?c($,2):$()})):fe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){xn();try{m()}finally{Mn()}}const $=kr;kr=f;try{return c?c(t,3,[v]):t(v)}finally{kr=$}}:p=un,e&&s){const $=p,X=s===!0?1/0:s;p=()=>bn($(),X)}const N=bp(),B=()=>{f.stop(),N&&N.active&&qc(N.effects,f)};if(i&&e){const $=e;e=(...X)=>{const re=$(...X);return B(),re}}let x=k?new Array(t.length).fill(Ro):Ro;const q=$=>{if(!(!(f.flags&1)||!f.dirty&&!$))if(e){const X=f.run();if($||s||S||(k?X.some((re,w)=>ln(re,x[w])):ln(X,x))){m&&m();const re=kr;kr=f;try{const w=[X,x===Ro?void 0:k&&x[0]===Ro?[]:x,v];x=X,c?c(e,3,w):e(...w)}finally{kr=re}}}else f.run()};return l&&l(q),f=new Sp(p),f.scheduler=o?()=>o(q,!1):q,v=$=>Rv($,!1,f),m=f.onStop=()=>{const $=Qo.get(f);if($){if(c)c($,4);else for(const X of $)X();Qo.delete(f)}},e?r?q(!0):x=f.run():o?o(q.bind(null,!0),!0):f.run(),B.pause=f.pause.bind(f),B.resume=f.resume.bind(f),B.stop=B,B}function bn(t,e=1/0,n){if(e<=0||!Ce(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,We(t))bn(t.value,e,n);else if(ne(t))for(let r=0;r<t.length;r++)bn(t[r],e,n);else if(On(t)||ar(t))t.forEach(r=>{bn(r,e,n)});else if(vp(t)){for(const r in t)bn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&bn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wi(t,e,n,r){try{return r?t(...r):t()}catch(s){Ca(s,e,n)}}function Gt(t,e,n,r){if(fe(t)){const s=Wi(t,e,n,r);return s&&_p(s)&&s.catch(i=>{Ca(i,e,n)}),s}if(ne(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Gt(t[i],e,n,r));return s}}function Ca(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||De;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(i){xn(),Wi(i,null,10,[t,c,u]),Mn();return}}Sv(t,n,s,r,o)}function Sv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const bt=[];let sn=-1;const fs=[];let er=null,is=0;const Hp=Promise.resolve();let Yo=null;function ka(t){const e=Yo||Hp;return t?e.then(this?t.bind(this):t):e}function Pv(t){let e=sn+1,n=bt.length;for(;e<n;){const r=e+n>>>1,s=bt[r],i=Ai(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Xc(t){if(!(t.flags&1)){const e=Ai(t),n=bt[bt.length-1];!n||!(t.flags&2)&&e>=Ai(n)?bt.push(t):bt.splice(Pv(e),0,t),t.flags|=1,Wp()}}function Wp(){Yo||(Yo=Hp.then(Gp))}function Cv(t){if(!ne(t))er&&t.id===-1?er.splice(is+1,0,t):t.flags&1||(fs.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)fs.push(t[e]);Wp()}function Jh(t,e,n=sn+1){for(;n<bt.length;n++){const r=bt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;bt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Kp(t){if(fs.length){const e=[...new Set(fs)].sort((n,r)=>Ai(n)-Ai(r));if(fs.length=0,er){for(let n=0;n<e.length;n++)er.push(e[n]);return}for(er=e,is=0;is<er.length;is++){const n=er[is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}er=null,is=0}}const Ai=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Gp(t){try{for(sn=0;sn<bt.length;sn++){const e=bt[sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Wi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;sn<bt.length;sn++){const e=bt[sn];e&&(e.flags&=-2)}sn=-1,bt.length=0,Kp(),Yo=null,(bt.length||fs.length)&&Gp()}}let lt=null,zp=null;function Jo(t){const e=lt;return lt=t,zp=t&&t.type.__scopeId||null,e}function kv(t,e=lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ta(-1);const i=Jo(e),o=Nn.length;let l;try{l=t(...s)}finally{for(let c=Nn.length;c>o;c--)ru();Jo(i),r._d&&ta(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function TC(t,e){if(lt===null)return t;const n=Ma(lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=De]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&bn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function br(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(xn(),Gt(c,n,8,[t.el,l,t,e]),Mn())}}function Lo(t,e){if(vt){let n=vt.provides;const r=vt.parent&&vt.parent.provides;r===n&&(n=vt.provides=Object.create(r)),n[t]=e}}function Jt(t,e,n=!1){const r=su();if(r||Fr){let s=Fr?Fr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function Nv(){return!!(su()||Fr)}const Vv=Symbol.for("v-scx"),Dv=()=>Jt(Vv);function fi(t,e,n){return Qp(t,e,n)}function Qp(t,e,n=De){const{immediate:r,deep:s,flush:i,once:o}=n,l=et({},n),c=e&&r||!e&&i!=="post";let u;if(Ci){if(i==="sync"){const v=Dv();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=un,v.resume=un,v.pause=un,v}}const f=vt;l.call=(v,S,k)=>Gt(v,f,S,k);let p=!1;i==="post"?l.scheduler=v=>{At(v,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(v,S)=>{S?v():Xc(v)}),l.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,f&&(v.id=f.uid,v.i=f))};const m=bv(t,e,l);return Ci&&(u?u.push(m):c&&m()),m}function Ov(t,e,n){const r=this.proxy,s=Fe(t)?t.includes(".")?Yp(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Ki(this),l=Qp(s,i.bind(r),n);return o(),l}function Yp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Xn=new WeakMap,Jp=Symbol("_vte"),Na=t=>t.__isTeleport,Vr=t=>t&&(t.disabled||t.disabled===""),xv=t=>t&&(t.defer||t.defer===""),Xh=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Zh=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,tc=(t,e)=>{const n=t&&t.to;return Fe(n)?e?e(n):null:n},Mv={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,u){const{mc:f,pc:p,pbc:m,o:{insert:v,querySelector:S,createText:k,createComment:N,parentNode:B}}=u,x=Vr(e.props);let{dynamicChildren:q}=e;const $=(w,y,_)=>{w.shapeFlag&16&&f(w.children,y,_,s,i,o,l,c)},X=(w=e)=>{const y=Vr(w.props),_=w.target=tc(w.props,S),I=nc(_,w,k,v);_&&(o!=="svg"&&Xh(_)?o="svg":o!=="mathml"&&Zh(_)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(_),y||($(w,_,I),ei(w,!1)))},re=w=>{const y=()=>{if(Xn.get(w)===y){if(Xn.delete(w),Vr(w.props)){const _=B(w.el)||n;$(w,_,w.anchor),ei(w,!0)}X(w)}};Xn.set(w,y),At(y,i)};if(t==null){const w=e.el=k(""),y=e.anchor=k("");if(v(w,n,r),v(y,n,r),xv(e.props)||i&&i.pendingBranch){re(e);return}x&&($(e,n,y),ei(e,!0)),X()}else{e.el=t.el;const w=e.anchor=t.anchor,y=Xn.get(t);if(y){y.flags|=8,Xn.delete(t),re(e);return}e.targetStart=t.targetStart;const _=e.target=t.target,I=e.targetAnchor=t.targetAnchor,b=Vr(t.props),A=b?n:_,T=b?w:I;if(o==="svg"||Xh(_)?o="svg":(o==="mathml"||Zh(_))&&(o="mathml"),q?(m(t.dynamicChildren,q,A,s,i,o,l),nu(t,e,!0)):c||p(t,e,A,T,s,i,o,l,!1),x)b?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):bo(e,n,w,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Ee=tc(e.props,S);Ee&&(e.target=Ee,bo(e,Ee,null,u,0))}else b&&bo(e,_,I,u,1);ei(e,x)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:u,targetAnchor:f,target:p,props:m}=t,v=Vr(m),S=i||!v,k=Xn.get(t);if(k&&(k.flags|=8,Xn.delete(t)),p&&(s(u),s(f)),i&&s(c),!k&&(v||p)&&o&16)for(let N=0;N<l.length;N++){const B=l[N];r(B,e,n,S,!!B.dynamicChildren)}},move:bo,hydrate:Lv};function bo(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:u,props:f}=t,p=i===2;if(p&&r(o,e,n),!Xn.has(t)&&(!p||Vr(f))&&c&16)for(let m=0;m<u.length;m++)s(u[m],e,n,2);p&&r(l,e,n)}function Lv(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:u,createText:f}},p){function m(N,B){let x=B;for(;x;){if(x&&x.nodeType===8){if(x.data==="teleport start anchor")e.targetStart=x;else if(x.data==="teleport anchor"){e.targetAnchor=x,N._lpa=e.targetAnchor&&o(e.targetAnchor);break}}x=o(x)}}function v(N,B){B.anchor=p(o(N),B,l(N),n,r,s,i)}const S=e.target=tc(e.props,c),k=Vr(e.props);if(S){const N=S._lpa||S.firstChild;e.shapeFlag&16&&(k?(v(t,e),m(S,N),e.targetAnchor||nc(S,e,f,u,l(t)===S?t:null)):(e.anchor=o(t),m(S,N),e.targetAnchor||nc(S,e,f,u),p(N&&o(N),e,S,n,r,s,i))),ei(e,k)}else k&&e.shapeFlag&16&&(v(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const IC=Mv;function ei(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function nc(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[Jp]=o,t&&(r(i,t,s),r(o,t,s)),o}const Ht=Symbol("_leaveCb"),Ys=Symbol("_enterCb");function Fv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Zc(()=>{t.isMounted=!0}),om(()=>{t.isUnmounting=!0}),t}const $t=[Function,Array],Xp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t},Zp=t=>{const e=t.subTree;return e.component?Zp(e.component):e},Uv={name:"BaseTransition",props:Xp,setup(t,{slots:e}){const n=su(),r=Fv();return()=>{const s=e.default&&nm(e.default(),!0),i=s&&s.length?em(s):n.subTree?CE():void 0;if(!i)return;const o=Ae(t),{mode:l}=o;if(r.isLeaving)return Sl(i);const c=Xo(i);if(!c)return Sl(i);let u=rc(c,o,r,n,p=>u=p);c.type!==yt&&Ri(c,u);let f=n.subTree&&Xo(n.subTree);if(f&&f.type!==yt&&!Dr(f,c)&&Zp(n).type!==yt){let p=rc(f,o,r,n);if(Ri(f,p),l==="out-in"&&c.type!==yt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Sl(i);l==="in-out"&&c.type!==yt?p.delayLeave=(m,v,S)=>{const k=tm(r,f);k[String(f.key)]=f,m[Ht]=()=>{v(),m[Ht]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{S(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function em(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==yt){e=n;break}}return e}const Bv=Uv;function tm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function rc(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:v,onAfterLeave:S,onLeaveCancelled:k,onBeforeAppear:N,onAppear:B,onAfterAppear:x,onAppearCancelled:q}=e,$=String(t.key),X=tm(n,t),re=(_,I)=>{_&&Gt(_,r,9,I)},w=(_,I)=>{const b=I[1];re(_,I),ne(_)?_.every(A=>A.length<=1)&&b():_.length<=1&&b()},y={mode:o,persisted:l,beforeEnter(_){let I=c;if(!n.isMounted)if(i)I=N||c;else return;_[Ht]&&_[Ht](!0);const b=X[$];b&&Dr(t,b)&&b.el[Ht]&&b.el[Ht](),re(I,[_])},enter(_){if(X[$]===t)return;let I=u,b=f,A=p;if(!n.isMounted)if(i)I=B||u,b=x||f,A=q||p;else return;let T=!1;_[Ys]=Ke=>{T||(T=!0,Ke?re(A,[_]):re(b,[_]),y.delayedLeave&&y.delayedLeave(),_[Ys]=void 0)};const Ee=_[Ys].bind(null,!1);I?w(I,[_,Ee]):Ee()},leave(_,I){const b=String(t.key);if(_[Ys]&&_[Ys](!0),n.isUnmounting)return I();re(m,[_]);let A=!1;_[Ht]=Ee=>{A||(A=!0,I(),Ee?re(k,[_]):re(S,[_]),_[Ht]=void 0,X[b]===t&&delete X[b])};const T=_[Ht].bind(null,!1);X[b]=t,v?w(v,[_,T]):T()},clone(_){const I=rc(_,e,n,r,s);return s&&s(I),I}};return y}function Sl(t){if(Va(t))return t=pr(t),t.children=null,t}function Xo(t){if(!Va(t))return Na(t.type)&&t.children?em(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function Ri(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;Ri(Na(n.type)&&Xo(n)||n,e)}else t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function nm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ot?(o.patchFlag&128&&s++,r=r.concat(nm(o.children,e,l))):(e||o.type!==yt)&&r.push(l!=null?pr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function rm(t,e){return fe(t)?et({name:t.name},e,{setup:t}):t}function sm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ef(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Zo=new WeakMap;function di(t,e,n,r,s=!1){if(ne(t)){t.forEach((k,N)=>di(k,e&&(ne(e)?e[N]:e),n,r,s));return}if(ds(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&di(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ma(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===De?l.refs={}:l.refs,p=l.setupState,m=Ae(p),v=p===De?gp:k=>ef(f,k)?!1:Pe(m,k),S=(k,N)=>!(N&&ef(f,N));if(u!=null&&u!==c){if(tf(e),Fe(u))f[u]=null,v(u)&&(p[u]=null);else if(We(u)){const k=e;S(u,k.k)&&(u.value=null),k.k&&(f[k.k]=null)}}if(fe(c))Wi(c,l,12,[o,f]);else{const k=Fe(c),N=We(c);if(k||N){const B=()=>{if(t.f){const x=k?v(c)?p[c]:f[c]:S()||!t.k?c.value:f[t.k];if(s)ne(x)&&qc(x,i);else if(ne(x))x.includes(i)||x.push(i);else if(k)f[c]=[i],v(c)&&(p[c]=f[c]);else{const q=[i];S(c,t.k)&&(c.value=q),t.k&&(f[t.k]=q)}}else k?(f[c]=o,v(c)&&(p[c]=o)):N&&(S(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const x=()=>{B(),Zo.delete(t)};x.id=-1,Zo.set(t,x),At(x,n)}else tf(t),B()}}}function tf(t){const e=Zo.get(t);e&&(e.flags|=8,Zo.delete(t))}Ra().requestIdleCallback;Ra().cancelIdleCallback;const ds=t=>!!t.type.__asyncLoader,Va=t=>t.type.__isKeepAlive;function jv(t,e){im(t,"a",e)}function qv(t,e){im(t,"da",e)}function im(t,e,n=vt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Da(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Va(s.parent.vnode)&&$v(r,e,n,s),s=s.parent}}function $v(t,e,n,r){const s=Da(e,t,r,!0);am(()=>{qc(r[e],s)},n)}function Da(t,e,n=vt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{xn();const l=Ki(n),c=Gt(e,n,t,o);return l(),Mn(),c});return r?s.unshift(i):s.push(i),i}}const jn=t=>(e,n=vt)=>{(!Ci||t==="sp")&&Da(t,(...r)=>e(...r),n)},Hv=jn("bm"),Zc=jn("m"),Wv=jn("bu"),Kv=jn("u"),om=jn("bum"),am=jn("um"),Gv=jn("sp"),zv=jn("rtg"),Qv=jn("rtc");function Yv(t,e=vt){Da("ec",t,e)}const Jv="components";function wC(t,e){return Zv(Jv,t,!0,e)||t}const Xv=Symbol.for("v-ndc");function Zv(t,e,n=!0,r=!1){const s=lt||vt;if(s){const i=s.type;{const l=FE(i,!1);if(l&&(l===e||l===St(e)||l===wa(St(e))))return i}const o=nf(s[t]||i[t],e)||nf(s.appContext[t],e);return!o&&r?i:o}}function nf(t,e){return t&&(t[e]||t[St(e)]||t[wa(St(e))])}function AC(t,e,n,r){let s;const i=n,o=ne(t);if(o||Fe(t)){const l=o&&hn(t);let c=!1,u=!1;l&&(c=!Ft(t),u=gn(t),t=Sa(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?dr(Kt(t[f])):Kt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}function RC(t,e,n,r,s,i){if(n==null&&(n={}),lt.ce||lt.parent&&ds(lt.parent)&&lt.parent.ce){const u=n,f=Object.keys(u).length>0;return ge(),na(Ot,null,[Et("slot",u,r)],f?-2:64)}let o=t[e];o&&o._c&&(o._d=!1);const l=Nn.length;ge();let c;try{const u=o&&lm(o(n)),f=n.key||i||u&&u.key;c=na(Ot,{key:(f&&!Ut(f)?f:`_${e}`)+(!u&&r?"_fb":"")},u||(r?r():[]),u&&t._===1?64:-2)}catch(u){for(let f=Nn.length;f>l;f--)ru();throw u}finally{o&&o._c&&(o._d=!0)}return c}function lm(t){return t.some(e=>Si(e)?!(e.type===yt||e.type===Ot&&!lm(e.children)):!0)?t:null}const sc=t=>t?Sm(t)?Ma(t):sc(t.parent):null,pi=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>sc(t.parent),$root:t=>sc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>um(t),$forceUpdate:t=>t.f||(t.f=()=>{Xc(t.update)}),$nextTick:t=>t.n||(t.n=ka.bind(t.proxy)),$watch:t=>Ov.bind(t)}),Pl=(t,e)=>t!==De&&!t.__isScriptSetup&&Pe(t,e),eE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Pl(r,e))return o[e]=1,r[e];if(s!==De&&Pe(s,e))return o[e]=2,s[e];if(Pe(i,e))return o[e]=3,i[e];if(n!==De&&Pe(n,e))return o[e]=4,n[e];ic&&(o[e]=0)}}const u=pi[e];let f,p;if(u)return e==="$attrs"&&gt(t.attrs,"get",""),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==De&&Pe(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Pe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Pl(s,e)?(s[e]=n,!0):r!==De&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==De&&l[0]!=="$"&&Pe(t,l)||Pl(e,l)||Pe(i,l)||Pe(r,l)||Pe(pi,l)||Pe(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rf(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ic=!0;function tE(t){const e=um(t),n=t.proxy,r=t.ctx;ic=!1,e.beforeCreate&&sf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:v,updated:S,activated:k,deactivated:N,beforeDestroy:B,beforeUnmount:x,destroyed:q,unmounted:$,render:X,renderTracked:re,renderTriggered:w,errorCaptured:y,serverPrefetch:_,expose:I,inheritAttrs:b,components:A,directives:T,filters:Ee}=e;if(u&&nE(u,r,null),o)for(const ce in o){const _e=o[ce];fe(_e)&&(r[ce]=_e.bind(n))}if(s){const ce=s.call(n,n);Ce(ce)&&(t.data=Hi(ce))}if(ic=!0,i)for(const ce in i){const _e=i[ce],Nt=fe(_e)?_e.bind(n,n):fe(_e.get)?_e.get.bind(n,n):un,zt=!fe(_e)&&fe(_e.set)?_e.set.bind(n):un,Bt=ot({get:Nt,set:zt});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:Le=>Bt.value=Le})}if(l)for(const ce in l)cm(l[ce],r,n,ce);if(c){const ce=fe(c)?c.call(n):c;Reflect.ownKeys(ce).forEach(_e=>{Lo(_e,ce[_e])})}f&&sf(f,t,"c");function ke(ce,_e){ne(_e)?_e.forEach(Nt=>ce(Nt.bind(n))):_e&&ce(_e.bind(n))}if(ke(Hv,p),ke(Zc,m),ke(Wv,v),ke(Kv,S),ke(jv,k),ke(qv,N),ke(Yv,y),ke(Qv,re),ke(zv,w),ke(om,x),ke(am,$),ke(Gv,_),ne(I))if(I.length){const ce=t.exposed||(t.exposed={});I.forEach(_e=>{Object.defineProperty(ce,_e,{get:()=>n[_e],set:Nt=>n[_e]=Nt,enumerable:!0})})}else t.exposed||(t.exposed={});X&&t.render===un&&(t.render=X),b!=null&&(t.inheritAttrs=b),A&&(t.components=A),T&&(t.directives=T),_&&sm(t)}function nE(t,e,n=un){ne(t)&&(t=oc(t));for(const r in t){const s=t[r];let i;Ce(s)?"default"in s?i=Jt(s.from||r,s.default,!0):i=Jt(s.from||r):i=Jt(s),We(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function sf(t,e,n){Gt(ne(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function cm(t,e,n,r){let s=r.includes(".")?Yp(n,r):()=>n[r];if(Fe(t)){const i=e[t];fe(i)&&fi(s,i)}else if(fe(t))fi(s,t.bind(n));else if(Ce(t))if(ne(t))t.forEach(i=>cm(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&fi(s,i,t)}}function um(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ea(c,u,o,!0)),ea(c,e,o)),Ce(e)&&i.set(e,c),c}function ea(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ea(t,i,n,!0),s&&s.forEach(o=>ea(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=rE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const rE={data:of,props:af,emits:af,methods:ti,computed:ti,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:ti,directives:ti,watch:iE,provide:of,inject:sE};function of(t,e){return e?t?function(){return et(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function sE(t,e){return ti(oc(t),oc(e))}function oc(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function ti(t,e){return t?et(Object.create(null),t,e):e}function af(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:et(Object.create(null),rf(t),rf(e??{})):e}function iE(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const r in e)n[r]=wt(t[r],e[r]);return n}function hm(){return{app:null,config:{isNativeTag:gp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oE=0;function aE(t,e){return function(r,s=null){fe(r)||(r=et({},r)),s!=null&&!Ce(s)&&(s=null);const i=hm(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:oE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:BE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&fe(f.install)?(o.add(f),f.install(u,...p)):fe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const v=u._ceVNode||Et(r,s);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(v,f,m),c=!0,u._container=f,f.__vue_app__=u,Ma(v.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Gt(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Fr;Fr=u;try{return f()}finally{Fr=p}}};return u}}let Fr=null;const lE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${St(e)}Modifiers`]||t[`${Kr(e)}Modifiers`];function cE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),o=i&&lE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Fe(f)?f.trim():f)),o.number&&(s=s.map(Aa)));let l,c=r[l=Il(e)]||r[l=Il(St(e))];!c&&i&&(c=r[l=Il(Kr(e))]),c&&Gt(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Gt(u,t,6,s)}}const uE=new WeakMap;function fm(t,e,n=!1){const r=n?uE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!fe(t)){const c=u=>{const f=fm(u,e,!0);f&&(l=!0,et(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ce(t)&&r.set(t,null),null):(ne(i)?i.forEach(c=>o[c]=null):et(o,i),Ce(t)&&r.set(t,o),o)}function Oa(t,e){return!t||!va(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,Kr(e))||Pe(t,e))}function lf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:v,ctx:S,inheritAttrs:k}=t,N=Jo(t);let B,x;try{if(n.shapeFlag&4){const $=s||r,X=$;B=an(u.call(X,$,f,p,v,m,S)),x=l}else{const $=e;B=an($.length>1?$(p,{attrs:l,slots:o,emit:c}):$(p,null)),x=e.props?l:hE(l)}}catch($){Nn.length=0,Ca($,t,1),B=Et(yt)}let q=B;if(x&&k!==!1){const $=Object.keys(x),{shapeFlag:X}=q;$.length&&X&7&&(i&&$.some(Ea)&&(x=fE(x,i)),q=pr(q,x,!1,!0))}if(n.dirs&&(q=pr(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition){const $=Na(q.type)&&Xo(q)||q;Ri($,n.transition)}return B=q,Jo(N),B}const hE=t=>{let e;for(const n in t)(n==="class"||n==="style"||va(n))&&((e||(e={}))[n]=t[n]);return e},fE=(t,e)=>{const n={};for(const r in t)(!Ea(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function dE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?cf(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(dm(o,r,m)&&!Oa(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?cf(r,o,u):!0:!!o;return!1}function cf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(dm(e,t,i)&&!Oa(n,i))return!0}return!1}function dm(t,e,n){const r=t[n],s=e[n];return n==="style"&&Ce(r)&&Ce(s)?!Xt(r,s):r!==s}function pE({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const pm={},mm=()=>Object.create(pm),gm=t=>Object.getPrototypeOf(t)===pm;function mE(t,e,n,r=!1){const s={},i=mm();t.propsDefaults=Object.create(null),_m(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:jp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function gE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ae(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Oa(t.emitsOptions,m))continue;const v=e[m];if(c)if(Pe(i,m))v!==i[m]&&(i[m]=v,u=!0);else{const S=St(m);s[S]=ac(c,l,S,v,t,!1)}else v!==i[m]&&(i[m]=v,u=!0)}}}else{_m(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!Pe(e,p)&&((f=Kr(p))===p||!Pe(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=ac(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Pe(e,p))&&(delete i[p],u=!0)}u&&Rn(t.attrs,"set","")}function _m(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ci(c))continue;const u=e[c];let f;s&&Pe(s,f=St(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:Oa(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ae(n),u=l||De;for(let f=0;f<i.length;f++){const p=i[f];n[p]=ac(s,c,p,u[p],t,!Pe(u,p))}}return o}function ac(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Pe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Ki(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Kr(n))&&(r=!0))}return r}const _E=new WeakMap;function ym(t,e,n=!1){const r=n?_E:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!fe(t)){const f=p=>{c=!0;const[m,v]=ym(p,e,!0);et(o,m),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Ce(t)&&r.set(t,Or),Or;if(ne(i))for(let f=0;f<i.length;f++){const p=St(i[f]);uf(p)&&(o[p]=De)}else if(i)for(const f in i){const p=St(f);if(uf(p)){const m=i[f],v=o[p]=ne(m)||fe(m)?{type:m}:et({},m),S=v.type;let k=!1,N=!0;if(ne(S))for(let B=0;B<S.length;++B){const x=S[B],q=fe(x)&&x.name;if(q==="Boolean"){k=!0;break}else q==="String"&&(N=!1)}else k=fe(S)&&S.name==="Boolean";v[0]=k,v[1]=N,(k||Pe(v,"default"))&&l.push(p)}}const u=[o,l];return Ce(t)&&r.set(t,u),u}function uf(t){return t[0]!=="$"&&!ci(t)}const eu=t=>t==="_"||t==="_ctx"||t==="$stable",tu=t=>ne(t)?t.map(an):[an(t)],yE=(t,e,n)=>{if(e._n)return e;const r=kv((...s)=>tu(e(...s)),n);return r._c=!1,r},vm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(eu(s))continue;const i=t[s];if(fe(i))e[s]=yE(s,i,r);else if(i!=null){const o=tu(i);e[s]=()=>o}}},Em=(t,e)=>{const n=tu(e);t.slots.default=()=>n},Tm=(t,e,n)=>{for(const r in e)(n||!eu(r))&&(t[r]=e[r])},vE=(t,e,n)=>{const r=t.slots=mm();if(t.vnode.shapeFlag&32){const s=e._;s?(Tm(r,e,n),n&&Ep(r,"_",s,!0)):vm(e,r)}else e&&Em(t,e)},EE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=De;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Tm(s,e,n):(i=!e.$stable,vm(e,s)),o=e}else e&&(Em(t,e),o={default:1});if(i)for(const l in s)!eu(l)&&o[l]==null&&delete s[l]},At=RE;function TE(t){return IE(t)}function IE(t,e){const n=Ra();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:v=un,insertStaticContent:S}=t,k=(E,R,P,D=null,L=null,O=null,G=void 0,W=null,H=!!R.dynamicChildren)=>{if(E===R)return;E&&!Dr(E,R)&&(D=M(E),Le(E,L,O,!0),E=null),R.patchFlag===-2&&(H=!1,R.dynamicChildren=null),R.dynamicChildren&&E&&E.dynamicChildren&&E.dynamicChildren.hasOnce&&(R.dynamicChildren===Or&&(R.dynamicChildren=[]),R.dynamicChildren.hasOnce=!0);const{type:U,ref:ie,shapeFlag:Q}=R;switch(U){case xa:N(E,R,P,D);break;case yt:B(E,R,P,D);break;case kl:E==null&&x(R,P,D,G);break;case Ot:A(E,R,P,D,L,O,G,W,H);break;default:Q&1?X(E,R,P,D,L,O,G,W,H):Q&6?T(E,R,P,D,L,O,G,W,H):(Q&64||Q&128)&&U.process(E,R,P,D,L,O,G,W,H,ee)}ie!=null&&L?di(ie,E&&E.ref,O,R||E,!R):ie==null&&E&&E.ref!=null&&di(E.ref,null,O,E,!0)},N=(E,R,P,D)=>{if(E==null)r(R.el=l(R.children),P,D);else{const L=R.el=E.el;R.children!==E.children&&u(L,R.children)}},B=(E,R,P,D)=>{E==null?r(R.el=c(R.children||""),P,D):R.el=E.el},x=(E,R,P,D)=>{[E.el,E.anchor]=S(E.children,R,P,D,E.el,E.anchor)},q=({el:E,anchor:R},P,D)=>{let L;for(;E&&E!==R;)L=m(E),r(E,P,D),E=L;r(R,P,D)},$=({el:E,anchor:R})=>{let P;for(;E&&E!==R;)P=m(E),s(E),E=P;s(R)},X=(E,R,P,D,L,O,G,W,H)=>{if(R.type==="svg"?G="svg":R.type==="math"&&(G="mathml"),E==null)re(R,P,D,L,O,G,W,H);else{const U=E.el&&E.el._isVueCE?E.el:null;try{U&&U._beginPatch(),_(E,R,L,O,G,W,H)}finally{U&&U._endPatch()}}},re=(E,R,P,D,L,O,G,W)=>{let H,U;const{props:ie,shapeFlag:Q,transition:te,dirs:ae}=E;if(H=E.el=o(E.type,O,ie&&ie.is,ie),Q&8?f(H,E.children):Q&16&&y(E.children,H,null,D,L,Cl(E,O),G,W),ae&&br(E,null,D,"created"),w(H,E,E.scopeId,G,D),ie){for(const pe in ie)pe!=="value"&&!ci(pe)&&i(H,pe,null,ie[pe],O,D);"value"in ie&&i(H,"value",null,ie.value,O),(U=ie.onVnodeBeforeMount)&&rn(U,D,E)}ae&&br(E,null,D,"beforeMount");const oe=wE(L,te);oe&&te.beforeEnter(H),r(H,R,P),((U=ie&&ie.onVnodeMounted)||oe||ae)&&At(()=>{try{U&&rn(U,D,E),oe&&te.enter(H),ae&&br(E,null,D,"mounted")}finally{}},L)},w=(E,R,P,D,L)=>{if(P&&v(E,P),D)for(let O=0;O<D.length;O++)v(E,D[O]);if(L){let O=L.subTree;if(R===O||Am(O.type)&&(O.ssContent===R||O.ssFallback===R)){const G=L.vnode;w(E,G,G.scopeId,G.slotScopeIds,L.parent)}}},y=(E,R,P,D,L,O,G,W,H=0)=>{for(let U=H;U<E.length;U++){const ie=E[U]=W?An(E[U]):an(E[U]);k(null,ie,R,P,D,L,O,G,W)}},_=(E,R,P,D,L,O,G)=>{const W=R.el=E.el;let{patchFlag:H,dynamicChildren:U,dirs:ie}=R;H|=E.patchFlag&16;const Q=E.props||De,te=R.props||De;let ae;if(P&&Sr(P,!1),(ae=te.onVnodeBeforeUpdate)&&rn(ae,P,R,E),ie&&br(R,E,P,"beforeUpdate"),P&&Sr(P,!0),U&&(!E.dynamicChildren||E.dynamicChildren.length!==U.length)&&(H=0,G=!1,U=null),(Q.innerHTML&&te.innerHTML==null||Q.textContent&&te.textContent==null)&&f(W,""),U?I(E.dynamicChildren,U,W,P,D,Cl(R,L),O):G||_e(E,R,W,null,P,D,Cl(R,L),O,!1),H>0){if(H&16)b(W,Q,te,P,L);else if(H&2&&Q.class!==te.class&&i(W,"class",null,te.class,L),H&4&&i(W,"style",Q.style,te.style,L),H&8){const oe=R.dynamicProps;for(let pe=0;pe<oe.length;pe++){const Ie=oe[pe],Be=Q[Ie],ze=te[Ie];(ze!==Be||Ie==="value")&&i(W,Ie,Be,ze,L,P)}}H&1&&E.children!==R.children&&f(W,R.children)}else!G&&U==null&&b(W,Q,te,P,L);((ae=te.onVnodeUpdated)||ie)&&At(()=>{ae&&rn(ae,P,R,E),ie&&br(R,E,P,"updated")},D)},I=(E,R,P,D,L,O,G)=>{for(let W=0;W<R.length;W++){const H=E[W],U=R[W],ie=H.el&&(H.type===Ot||!Dr(H,U)||H.shapeFlag&198)?p(H.el):P;k(H,U,ie,null,D,L,O,G,!0)}},b=(E,R,P,D,L)=>{if(R!==P){if(R!==De)for(const O in R)!ci(O)&&!(O in P)&&i(E,O,R[O],null,L,D);for(const O in P){if(ci(O))continue;const G=P[O],W=R[O];G!==W&&O!=="value"&&i(E,O,W,G,L,D)}"value"in P&&i(E,"value",R.value,P.value,L)}},A=(E,R,P,D,L,O,G,W,H)=>{const U=R.el=E?E.el:l(""),ie=R.anchor=E?E.anchor:l("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:ae}=R;ae&&(W=W?W.concat(ae):ae),E==null?(r(U,P,D),r(ie,P,D),y(R.children||[],P,ie,L,O,G,W,H)):Q>0&&Q&64&&te&&E.dynamicChildren&&E.dynamicChildren.length===te.length?(I(E.dynamicChildren,te,P,L,O,G,W),(R.key!=null||L&&R===L.subTree)&&nu(E,R,!0)):_e(E,R,P,ie,L,O,G,W,H)},T=(E,R,P,D,L,O,G,W,H)=>{R.slotScopeIds=W,E==null?R.shapeFlag&512?L.ctx.activate(R,P,D,G,H):Ee(R,P,D,L,O,G,H):Ke(E,R,H)},Ee=(E,R,P,D,L,O,G)=>{const W=E.component=DE(E,D,L);if(Va(E)&&(W.ctx.renderer=ee),OE(W,!1,G),W.asyncDep){if(L&&L.registerDep(W,ke,G),!E.el){const H=W.subTree=Et(yt);B(null,H,R,P),E.placeholder=H.el}}else ke(W,E,R,P,L,O,G)},Ke=(E,R,P)=>{const D=R.component=E.component;if(dE(E,R,P))if(D.asyncDep&&!D.asyncResolved){R.el=E.el,ce(D,R,P);return}else D.next=R,D.update();else R.el=E.el,D.vnode=R},ke=(E,R,P,D,L,O,G)=>{const W=()=>{if(E.isMounted){let{next:Q,bu:te,u:ae,parent:oe,vnode:pe}=E;{const ht=Im(E);if(ht){Q&&(Q.el=pe.el,ce(E,Q,G)),ht.asyncDep.then(()=>{At(()=>{E.isUnmounted||U()},L)});return}}let Ie=Q,Be;Sr(E,!1),Q?(Q.el=pe.el,ce(E,Q,G)):Q=pe,te&&Mo(te),(Be=Q.props&&Q.props.onVnodeBeforeUpdate)&&rn(Be,oe,Q,pe),Sr(E,!0);const ze=lf(E),jt=E.subTree;E.subTree=ze,k(jt,ze,p(jt.el),M(jt),E,L,O),Q.el=ze.el,Ie===null&&pE(E,ze.el),ae&&At(ae,L),(Be=Q.props&&Q.props.onVnodeUpdated)&&At(()=>rn(Be,oe,Q,pe),L)}else{let Q;const{el:te,props:ae}=R,{bm:oe,m:pe,parent:Ie,root:Be,type:ze}=E,jt=ds(R);Sr(E,!1),oe&&Mo(oe),!jt&&(Q=ae&&ae.onVnodeBeforeMount)&&rn(Q,Ie,R),Sr(E,!0);{Be.ce&&Be.ce._hasShadowRoot()&&Be.ce._injectChildStyle(ze,E.parent?E.parent.type:void 0);const ht=E.subTree=lf(E);k(null,ht,P,D,E,L,O),R.el=ht.el}if(pe&&At(pe,L),!jt&&(Q=ae&&ae.onVnodeMounted)){const ht=R;At(()=>rn(Q,Ie,ht),L)}(R.shapeFlag&256||Ie&&ds(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&E.a&&At(E.a,L),E.isMounted=!0,R=P=D=null}};E.scope.on();const H=E.effect=new Sp(W);E.scope.off();const U=E.update=H.run.bind(H),ie=E.job=H.runIfDirty.bind(H);ie.i=E,ie.id=E.uid,H.scheduler=()=>Xc(ie),Sr(E,!0),U()},ce=(E,R,P)=>{R.component=E;const D=E.vnode.props;E.vnode=R,E.next=null,gE(E,R.props,D,P),EE(E,R.children,P),xn(),Jh(E),Mn()},_e=(E,R,P,D,L,O,G,W,H=!1)=>{const U=E&&E.children,ie=E?E.shapeFlag:0,Q=R.children,{patchFlag:te,shapeFlag:ae}=R;if(te>0){if(te&128){zt(U,Q,P,D,L,O,G,W,H);return}else if(te&256){Nt(U,Q,P,D,L,O,G,W,H);return}}ae&8?(ie&16&&Ct(U,L,O),Q!==U&&f(P,Q)):ie&16?ae&16?zt(U,Q,P,D,L,O,G,W,H):Ct(U,L,O,!0):(ie&8&&f(P,""),ae&16&&y(Q,P,D,L,O,G,W,H))},Nt=(E,R,P,D,L,O,G,W,H)=>{E=E||Or,R=R||Or;const U=E.length,ie=R.length,Q=Math.min(U,ie);let te;for(te=0;te<Q;te++){const ae=R[te]=H?An(R[te]):an(R[te]);k(E[te],ae,P,null,L,O,G,W,H)}U>ie?Ct(E,L,O,!0,!1,Q):y(R,P,D,L,O,G,W,H,Q)},zt=(E,R,P,D,L,O,G,W,H)=>{let U=0;const ie=R.length;let Q=E.length-1,te=ie-1;for(;U<=Q&&U<=te;){const ae=E[U],oe=R[U]=H?An(R[U]):an(R[U]);if(Dr(ae,oe))k(ae,oe,P,null,L,O,G,W,H);else break;U++}for(;U<=Q&&U<=te;){const ae=E[Q],oe=R[te]=H?An(R[te]):an(R[te]);if(Dr(ae,oe))k(ae,oe,P,null,L,O,G,W,H);else break;Q--,te--}if(U>Q){if(U<=te){const ae=te+1,oe=ae<ie?R[ae].el:D;for(;U<=te;)k(null,R[U]=H?An(R[U]):an(R[U]),P,oe,L,O,G,W,H),U++}}else if(U>te)for(;U<=Q;)Le(E[U],L,O,!0),U++;else{const ae=U,oe=U,pe=new Map;for(U=oe;U<=te;U++){const rt=R[U]=H?An(R[U]):an(R[U]);rt.key!=null&&pe.set(rt.key,U)}let Ie,Be=0;const ze=te-oe+1;let jt=!1,ht=0;const Hn=new Array(ze);for(U=0;U<ze;U++)Hn[U]=0;for(U=ae;U<=Q;U++){const rt=E[U];if(Be>=ze){Le(rt,L,O,!0);continue}let qt;if(rt.key!=null)qt=pe.get(rt.key);else for(Ie=oe;Ie<=te;Ie++)if(Hn[Ie-oe]===0&&Dr(rt,R[Ie])){qt=Ie;break}qt===void 0?Le(rt,L,O,!0):(Hn[qt-oe]=U+1,qt>=ht?ht=qt:jt=!0,k(rt,R[qt],P,null,L,O,G,W,H),Be++)}const Ms=jt?AE(Hn):Or;for(Ie=Ms.length-1,U=ze-1;U>=0;U--){const rt=oe+U,qt=R[rt],oo=R[rt+1],Xr=rt+1<ie?oo.el||wm(oo):D;Hn[U]===0?k(null,qt,P,Xr,L,O,G,W,H):jt&&(Ie<0||U!==Ms[Ie]?Bt(qt,P,Xr,2):Ie--)}}},Bt=(E,R,P,D,L=null)=>{const{el:O,type:G,transition:W,children:H,shapeFlag:U}=E;if(U&6){Bt(E.component.subTree,R,P,D);return}if(U&128){E.suspense.move(R,P,D);return}if(U&64){G.move(E,R,P,ee);return}if(G===Ot){r(O,R,P);for(let Q=0;Q<H.length;Q++)Bt(H[Q],R,P,D);r(E.anchor,R,P);return}if(G===kl){q(E,R,P);return}if(D!==2&&U&1&&W)if(D===0)W.persisted&&!O[Ht]?r(O,R,P):(W.beforeEnter(O),r(O,R,P),At(()=>W.enter(O),L));else{const{leave:Q,delayLeave:te,afterLeave:ae}=W,oe=()=>{E.ctx.isUnmounted?s(O):r(O,R,P)},pe=()=>{const Ie=O._isLeaving||!!O[Ht];O._isLeaving&&O[Ht](!0),W.persisted&&!Ie?oe():Q(O,()=>{oe(),ae&&ae()})};te?te(O,oe,pe):pe()}else r(O,R,P)},Le=(E,R,P,D=!1,L=!1)=>{const{type:O,props:G,ref:W,children:H,dynamicChildren:U,shapeFlag:ie,patchFlag:Q,dirs:te,cacheIndex:ae,memo:oe}=E;if((Q===-2||U&&U.hasOnce)&&(L=!1),W!=null&&(xn(),di(W,null,P,E,!0),Mn()),ae!=null&&(!E.ctx||E.ctx===R)&&(R.renderCache[ae]=void 0),ie&256){R.ctx.deactivate(E);return}const pe=ie&1&&te,Ie=!ds(E);let Be;if(Ie&&(Be=G&&G.onVnodeBeforeUnmount)&&rn(Be,R,E),ie&6)Vt(E.component,P,D);else{if(ie&128){E.suspense.unmount(P,D);return}pe&&br(E,null,R,"beforeUnmount"),ie&64?E.type.remove(E,R,P,ee,D):U&&!U.hasOnce&&(O!==Ot||Q>0&&Q&64)?Ct(U,R,P,!1,!0):(O===Ot&&Q&384||!L&&ie&16)&&Ct(H,R,P),D&&Ue(E)}const ze=oe!=null&&ae==null;(Ie&&(Be=G&&G.onVnodeUnmounted)||pe||ze)&&At(()=>{Be&&rn(Be,R,E),pe&&br(E,null,R,"unmounted"),ze&&(E.el=null)},P)},Ue=E=>{const{type:R,el:P,anchor:D,transition:L}=E;if(R===Ot){$n(P,D);return}if(R===kl){$(E),L&&!L.persisted&&L.afterLeave&&L.afterLeave();return}const O=()=>{s(P),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(E.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:W}=L,H=()=>G(P,O);W?W(E.el,O,H):H()}else O()},$n=(E,R)=>{let P;for(;E!==R;)P=m(E),s(E),E=P;s(R)},Vt=(E,R,P)=>{const{bum:D,scope:L,job:O,subTree:G,um:W,m:H,a:U}=E;hf(H),hf(U),D&&Mo(D),L.stop(),O?(O.flags|=8,Le(G,E,R,P)):E.vnode.el&&G&&(G.transition=E.vnode.transition,Le(G,E,R,P)),W&&At(W,R),At(()=>{E.isUnmounted=!0},R)},Ct=(E,R,P,D=!1,L=!1,O=0)=>{for(let G=O;G<E.length;G++)Le(E[G],R,P,D,L)},M=E=>{if(E.shapeFlag&6)return M(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const R=m(E.anchor||E.el),P=R&&R[Jp];return P?m(P):R};let J=!1;const z=(E,R,P)=>{let D;E==null?R._vnode&&(Le(R._vnode,null,null,!0),D=R._vnode.component):k(R._vnode||null,E,R,null,null,null,P),R._vnode=E,J||(J=!0,Jh(D),Kp(),J=!1)},ee={p:k,um:Le,m:Bt,r:Ue,mt:Ee,mc:y,pc:_e,pbc:I,n:M,o:t};return{render:z,hydrate:void 0,createApp:aE(z)}}function Cl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Sr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function wE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function nu(t,e,n=!1){const r=t.children,s=e.children;if(ne(r)&&ne(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=An(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&nu(o,l)),l.type===xa&&(l.patchFlag===-1&&(l=s[i]=An(l)),l.el=o.el),l.type===yt&&!l.el&&(l.el=o.el)}}function AE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Im(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Im(e)}function hf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function wm(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?wm(e.subTree):null}const Am=t=>t.__isSuspense;function RE(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):Cv(t)}const Ot=Symbol.for("v-fgt"),xa=Symbol.for("v-txt"),yt=Symbol.for("v-cmt"),kl=Symbol.for("v-stc"),Nn=[];let xt=null;function ge(t=!1){Nn.push(xt=t?null:[])}function ru(){Nn.pop(),xt=Nn[Nn.length-1]||null}let bi=1;function ta(t,e=!1){bi+=t,t<0&&xt&&e&&(xt.hasOnce=!0)}function Rm(t){return t.dynamicChildren=bi>0?xt||Or:null,ru(),bi>0&&xt&&xt.push(t),t}function we(t,e,n,r,s,i){return Rm($e(t,e,n,r,s,i,!0))}function na(t,e,n,r,s){return Rm(Et(t,e,n,r,s,!0))}function Si(t){return t?t.__v_isVNode===!0:!1}function Dr(t,e){return t.type===e.type&&t.key===e.key}const bm=({key:t})=>t??null,Fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||We(t)||fe(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function $e(t,e=null,n=null,r=0,s=null,i=t===Ot?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&bm(e),ref:e&&Fo(e),scopeId:zp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return l?(ra(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Fe(n)?8:16),bi>0&&!o&&xt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xt.push(c),c}const Et=bE;function bE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Xv)&&(t=yt),Si(t)){const l=pr(t,e,!0);return n&&ra(l,n),bi>0&&!i&&xt&&(l.shapeFlag&6?xt[xt.indexOf(t)]=l:xt.push(l)),l.patchFlag=-2,l}if(UE(t)&&(t=t.__vccOpts),e){e=SE(e);let{class:l,style:c}=e;l&&!Fe(l)&&(e.class=ba(l)),Ce(c)&&(Pa(c)&&!ne(c)&&(c=et({},c)),e.style=$c(c))}const o=Fe(t)?1:Am(t)?128:Na(t)?64:Ce(t)?4:fe(t)?2:0;return $e(t,e,n,r,s,o,i,!0)}function SE(t){return t?Pa(t)||gm(t)?et({},t):t:null}function pr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?kE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&bm(u),ref:e&&e.ref?n&&i?ne(i)?i.concat(Fo(e)):[i,Fo(e)]:Fo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ot?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pr(t.ssContent),ssFallback:t.ssFallback&&pr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return c&&r&&Ri(f,c.clone(f)),f}function PE(t=" ",e=0){return Et(xa,null,t,e)}function CE(t="",e=!1){return e?(ge(),na(yt,null,t)):Et(yt,null,t)}function an(t){return t==null||typeof t=="boolean"?Et(yt):ne(t)?Et(Ot,null,t.slice()):Si(t)?An(t):Et(xa,null,String(t))}function An(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:pr(t)}function ra(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ra(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!gm(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(fe(e)){if(r&65){ra(t,{default:e});return}e={default:e,_ctx:lt},n=32}else e=String(e),r&64?(n=16,e=[PE(e)]):n=8;t.children=e,t.shapeFlag|=n}function kE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ba([e.class,r.class]));else if(s==="style")e.style=$c([e.style,r.style]);else if(va(s)){const i=e[s],o=r[s];o&&i!==o&&!(ne(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!Ea(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function rn(t,e,n,r=null){Gt(t,e,7,[n,r])}const NE=hm();let VE=0;function DE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||NE,i={uid:VE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ap(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ym(r,s),emitsOptions:fm(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=cE.bind(null,i),t.ce&&t.ce(i),i}let vt=null;const su=()=>vt||lt;let sa,Pi;{const t=Ra(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};sa=e("__VUE_INSTANCE_SETTERS__",n=>vt=n),Pi=e("__VUE_SSR_SETTERS__",n=>Ci=n)}const Ki=t=>{const e=vt;return sa(t),t.scope.on(),()=>{t.scope.off(),sa(e)}},ff=()=>{vt&&vt.scope.off(),sa(null)};function Sm(t){return t.vnode.shapeFlag&4}let Ci=!1;function OE(t,e=!1,n=!1){e&&Pi(e);const{props:r,children:s}=t.vnode,i=Sm(t);mE(t,r,i,e),vE(t,s,n||e);const o=i?xE(t,e):void 0;return e&&Pi(!1),o}function xE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,eE);const{setup:r}=n;if(r){xn();const s=t.setupContext=r.length>1?LE(t):null,i=Ki(t),o=Wi(r,t,0,[t.props,s]),l=_p(o);if(Mn(),i(),(l||t.sp)&&!ds(t)&&sm(t),l){if(o.then(ff,ff),e)return o.then(c=>{Pi(!0);try{df(t,c,e)}finally{Pi(!1)}}).catch(c=>{Ca(c,t,0)});t.asyncDep=o}else df(t,o)}else Pm(t)}function df(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=$p(e)),Pm(t)}function Pm(t,e,n){const r=t.type;t.render||(t.render=r.render||un);{const s=Ki(t);xn();try{tE(t)}finally{Mn(),s()}}}const ME={get(t,e){return gt(t,"get",""),t[e]}};function LE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ME),slots:t.slots,emit:t.emit,expose:e}}function Ma(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy($p(Jc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in pi)return pi[n](t)},has(e,n){return n in e||n in pi}})):t.proxy}function FE(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function UE(t){return fe(t)&&"__vccOpts"in t}const ot=(t,e)=>Av(t,e,Ci);function iu(t,e,n){try{ta(-1);const r=arguments.length;return r===2?Ce(e)&&!ne(e)?Si(e)?Et(t,null,[e]):Et(t,e):Et(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Si(n)&&(n=[n]),Et(t,e,n))}finally{ta(1)}}const BE="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lc;const pf=typeof window<"u"&&window.trustedTypes;if(pf)try{lc=pf.createPolicy("vue",{createHTML:t=>t})}catch{}const Cm=lc?t=>lc.createHTML(t):t=>t,jE="http://www.w3.org/2000/svg",qE="http://www.w3.org/1998/Math/MathML",wn=typeof document<"u"?document:null,mf=wn&&wn.createElement("template"),$E={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?wn.createElementNS(jE,t):e==="mathml"?wn.createElementNS(qE,t):n?wn.createElement(t,{is:n}):wn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>wn.createTextNode(t),createComment:t=>wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mf.innerHTML=Cm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=mf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},zn="transition",Js="animation",ki=Symbol("_vtc"),km={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},HE=et({},Xp,km),WE=t=>(t.displayName="Transition",t.props=HE,t),bC=WE((t,{slots:e})=>iu(Bv,KE(t),e)),Pr=(t,e=[])=>{ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},gf=t=>t?ne(t)?t.some(e=>e.length>1):t.length>1:!1;function KE(t){const e={};for(const A in t)A in km||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,S=GE(s),k=S&&S[0],N=S&&S[1],{onBeforeEnter:B,onEnter:x,onEnterCancelled:q,onLeave:$,onLeaveCancelled:X,onBeforeAppear:re=B,onAppear:w=x,onAppearCancelled:y=q}=e,_=(A,T,Ee,Ke)=>{A._enterCancelled=Ke,Cr(A,T?f:l),Cr(A,T?u:o),Ee&&Ee()},I=(A,T)=>{A._isLeaving=!1,Cr(A,p),Cr(A,v),Cr(A,m),T&&T()},b=A=>(T,Ee)=>{const Ke=A?w:x,ke=()=>_(T,A,Ee);Pr(Ke,[T,ke]),_f(()=>{Cr(T,A?c:i),Tn(T,A?f:l),gf(Ke)||yf(T,r,k,ke)})};return et(e,{onBeforeEnter(A){Pr(B,[A]),Tn(A,i),Tn(A,o)},onBeforeAppear(A){Pr(re,[A]),Tn(A,c),Tn(A,u)},onEnter:b(!1),onAppear:b(!0),onLeave(A,T){A._isLeaving=!0;const Ee=()=>I(A,T);Tn(A,p),A._enterCancelled?(Tn(A,m),Tf(A)):(Tf(A),Tn(A,m)),_f(()=>{A._isLeaving&&(Cr(A,p),Tn(A,v),gf($)||yf(A,r,N,Ee))}),Pr($,[A,Ee])},onEnterCancelled(A){_(A,!1,void 0,!0),Pr(q,[A])},onAppearCancelled(A){_(A,!0,void 0,!0),Pr(y,[A])},onLeaveCancelled(A){I(A),Pr(X,[A])}})}function GE(t){if(t==null)return null;if(Ce(t))return[Nl(t.enter),Nl(t.leave)];{const e=Nl(t);return[e,e]}}function Nl(t){return qy(t)}function Tn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ki]||(t[ki]=new Set)).add(e)}function Cr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ki];n&&(n.delete(e),n.size||(t[ki]=void 0))}function _f(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let zE=0;function yf(t,e,n,r){const s=t._endId=++zE,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=QE(t,e);if(!o)return r();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,m),i()},m=v=>{v.target===t&&++f>=c&&p()};setTimeout(()=>{f<c&&p()},l+1),t.addEventListener(u,m)}function QE(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${zn}Delay`),i=r(`${zn}Duration`),o=vf(s,i),l=r(`${Js}Delay`),c=r(`${Js}Duration`),u=vf(l,c);let f=null,p=0,m=0;e===zn?o>0&&(f=zn,p=o,m=i.length):e===Js?u>0&&(f=Js,p=u,m=c.length):(p=Math.max(o,u),f=p>0?o>u?zn:Js:null,m=f?f===zn?i.length:c.length:0);const v=f===zn&&/\b(?:transform|all)(?:,|$)/.test(r(`${zn}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:v}}function vf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Ef(n)+Ef(t[r])))}function Ef(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Tf(t){return(t?t.ownerDocument:document).body.offsetHeight}function YE(t,e,n){const r=t[ki];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const If=Symbol("_vod"),JE=Symbol("_vsh"),XE=Symbol(""),ZE=/(?:^|;)\s*display\s*:/;function eT(t,e,n){const r=t.style,s=Fe(n);let i=!1;if(n&&!s){if(e)if(Fe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ni(r,l,"")}else for(const o in e)n[o]==null&&ni(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?nT(t,o,!Fe(e)&&e?e[o]:void 0,l)||ni(r,o,l):ni(r,o,"")}}else if(s){if(e!==n){const o=r[XE];o&&(n+=";"+o),r.cssText=n,i=ZE.test(n)}}else e&&t.removeAttribute("style");If in t&&(t[If]=i?r.display:"",t[JE]&&(r.display="none"))}const So=/\s*!important$/;function ni(t,e,n){if(ne(n))n.forEach(r=>ni(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))So.test(n)?t.setProperty(e,n.replace(So,""),"important"):t.setProperty(e,n);else{const r=tT(t,e);So.test(n)?t.setProperty(Kr(r),n.replace(So,""),"important"):t[r]=n}}const wf=["Webkit","Moz","ms"],Vl={};function tT(t,e){const n=Vl[e];if(n)return n;let r=St(e);if(r!=="filter"&&r in t)return Vl[e]=r;r=wa(r);for(let s=0;s<wf.length;s++){const i=wf[s]+r;if(i in t)return Vl[e]=i}return e}function nT(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Fe(r)&&n===r}const Af="http://www.w3.org/1999/xlink";function Rf(t,e,n,r,s,i=zy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Af,e.slice(6,e.length)):t.setAttributeNS(Af,e,n):n==null||i&&!Tp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ut(n)?String(n):n)}function bf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Cm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Tp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Sn(t,e,n,r){t.addEventListener(e,n,r)}function rT(t,e,n,r){t.removeEventListener(e,n,r)}const Sf=Symbol("_vei");function sT(t,e,n,r,s=null){const i=t[Sf]||(t[Sf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=aT(e);if(r){const u=i[e]=uT(r,s);Sn(t,l,u,c)}else o&&(rT(t,l,o,c),i[e]=void 0)}}const iT=/(Once|Passive|Capture)$/,oT=/^on:?(?:Once|Passive|Capture)$/;function aT(t){let e,n;for(;(n=t.match(iT))&&!oT.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):Kr(t.slice(2)),e]}let Dl=0;const lT=Promise.resolve(),cT=()=>Dl||(lT.then(()=>Dl=0),Dl=Date.now());function uT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(ne(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const u=o[c];u&&Gt(u,e,5,l)}}else Gt(s,e,5,[r])};return n.value=t,n.attached=cT(),n}const Pf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,hT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?YE(t,r,o):e==="style"?eT(t,n,r):va(e)?Ea(e)||sT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fT(t,e,r,o))?(bf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Rf(t,e,r,o,i,e!=="value")):t._isVueCE&&(dT(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Fe(r)))?bf(t,St(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Rf(t,e,r,o))};function fT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pf(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Pf(e)&&Fe(n)?!1:e in t}function dT(t,e){const n=t._def.props;if(!n)return!1;const r=St(e);return Array.isArray(n)?n.some(s=>St(s)===r):Object.keys(n).some(s=>St(s)===r)}const mr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>Mo(e,n):e};function pT(t){t.target.composing=!0}function Cf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Mt=Symbol("_assign"),Po=Symbol("_initialValue");function Ol(t,e,n){return e&&(t=t.trim()),n&&(t=Aa(t)),t}const kf={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t.parentNode&&(t.type==="text"?t[Po]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[Po]=t.defaultValue.replace(/\r\n?/g,`
`))),t[Mt]=mr(s);const i=r||s.props&&s.props.type==="number";Sn(t,e?"change":"input",o=>{o.target.composing||t[Mt](Ol(t.value,n,i))}),(n||i)&&Sn(t,"change",()=>{t.value=Ol(t.value,n,i)}),e||(Sn(t,"compositionstart",pT),Sn(t,"compositionend",Cf),Sn(t,"change",Cf))},mounted(t,{value:e,modifiers:{trim:n,number:r}}){const s=e??"",i=t[Po];delete t[Po],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[Mt](Ol(t.value,n,r)):t.value=s},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Mt]=mr(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Aa(t.value):t.value,c=e??"";if(l===c)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},mT={deep:!0,created(t,e,n){t[Mt]=mr(n),Sn(t,"change",()=>{const r=t._modelValue,s=ys(t),i=t.checked,o=t[Mt];if(ne(r)){const l=Hc(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(On(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Nm(t,i))})},mounted:Nf,beforeUpdate(t,e,n){t[Mt]=mr(n),Nf(t,e,n)}};function Nf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ne(e))s=Hc(e,r.props.value)>-1;else if(On(e))s=e.has(r.props.value);else{if(e===n)return;s=Xt(e,Nm(t,!0))}t.checked!==s&&(t.checked=s)}const gT={created(t,{value:e},n){t.checked=Xt(e,n.props.value),t[Mt]=mr(n),Sn(t,"change",()=>{t[Mt](ys(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Mt]=mr(r),e!==n&&(t.checked=Xt(e,r.props.value))}},_T={deep:!0,created(t,{value:e,modifiers:{number:n}},r){t._modelValue=e,Sn(t,"change",()=>{const s=Array.prototype.filter.call(t.options,c=>c.selected).map(c=>n?Aa(ys(c)):ys(c)),i=t.multiple,o=i?On(t._modelValue)?new Set(s):s:s[0],l=t._pendingValue=[i,i?ne(o)?s.slice():s:o];try{t[Mt](o)}finally{ka(()=>{t._pendingValue===l&&(t._pendingValue=void 0)})}}),t[Mt]=mr(r)},mounted(t,{value:e}){Vf(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[Mt]=mr(n)},updated(t,{value:e}){const n=t._pendingValue;t._pendingValue=void 0,(!n||n[0]!==t.multiple||!yT(e,n[1],n[0]))&&Vf(t,e)}};function yT(t,e,n){if(!n||ne(t))return Xt(t,e);if(On(t)){if(t.size!==e.length)return!1;for(const r of e)if(!t.has(r))return!1;return!0}return!1}function Vf(t,e){const n=t.multiple,r=ne(e);if(!(n&&!r&&!On(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=ys(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Hc(e,l)>-1}else o.selected=e.has(l);else if(Xt(ys(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ys(t){return"_value"in t?t._value:t.value}function Nm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const SC={created(t,e,n){Co(t,e,n,null,"created")},mounted(t,e,n){Co(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Co(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Co(t,e,n,r,"updated")}};function vT(t,e){switch(t){case"SELECT":return _T;case"TEXTAREA":return kf;default:switch(e){case"checkbox":return mT;case"radio":return gT;default:return kf}}}function Co(t,e,n,r,s){const o=vT(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const ET=["ctrl","shift","alt","meta"],TT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ET.some(n=>t[`${n}Key`]&&!e.includes(n))},PC=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=TT[e[o]];if(l&&l(s,e))return}return t(s,...i)})},IT=et({patchProp:hT},$E);let Df;function wT(){return Df||(Df=TE(IT))}const AT=(...t)=>{const e=wT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=bT(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,RT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function RT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function bT(t){return Fe(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Vm;const La=t=>Vm=t,Dm=Symbol();function cc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var mi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(mi||(mi={}));function ST(){const t=Rp(!0),e=t.run(()=>us({}));let n=[],r=[];const s=Jc({install(i){La(s),s._a=i,i.provide(Dm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Om=()=>{};function Of(t,e,n,r=Om){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&bp()&&Xy(s),s}function ss(t,...e){t.slice().forEach(n=>{n(...e)})}const PT=t=>t(),xf=Symbol(),xl=Symbol();function uc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];cc(s)&&cc(r)&&t.hasOwnProperty(n)&&!We(r)&&!hn(r)?t[n]=uc(s,r):t[n]=r}return t}const CT=Symbol();function kT(t){return!cc(t)||!t.hasOwnProperty(CT)}const{assign:Zn}=Object;function NT(t){return!!(We(t)&&t.effect)}function VT(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const f=Ev(n.state.value[t]);return Zn(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=Jc(ot(()=>{La(n);const v=n._s.get(t);return o[m].call(v,v)})),p),{}))}return c=xm(t,u,e,n,r,!0),c}function xm(t,e,n={},r,s,i){let o;const l=Zn({actions:{}},n),c={deep:!0};let u,f,p=[],m=[],v;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={});let k;function N(y){let _;u=f=!1,typeof y=="function"?(y(r.state.value[t]),_={type:mi.patchFunction,storeId:t,events:v}):(uc(r.state.value[t],y),_={type:mi.patchObject,payload:y,storeId:t,events:v});const I=k=Symbol();ka().then(()=>{k===I&&(u=!0)}),f=!0,ss(p,_,r.state.value[t])}const B=i?function(){const{state:_}=n,I=_?_():{};this.$patch(b=>{Zn(b,I)})}:Om;function x(){o.stop(),p=[],m=[],r._s.delete(t)}const q=(y,_="")=>{if(xf in y)return y[xl]=_,y;const I=function(){La(r);const b=Array.from(arguments),A=[],T=[];function Ee(ce){A.push(ce)}function Ke(ce){T.push(ce)}ss(m,{args:b,name:I[xl],store:X,after:Ee,onError:Ke});let ke;try{ke=y.apply(this&&this.$id===t?this:X,b)}catch(ce){throw ss(T,ce),ce}return ke instanceof Promise?ke.then(ce=>(ss(A,ce),ce)).catch(ce=>(ss(T,ce),Promise.reject(ce))):(ss(A,ke),ke)};return I[xf]=!0,I[xl]=_,I},$={_p:r,$id:t,$onAction:Of.bind(null,m),$patch:N,$reset:B,$subscribe(y,_={}){const I=Of(p,y,_.detached,()=>b()),b=o.run(()=>fi(()=>r.state.value[t],A=>{(_.flush==="sync"?f:u)&&y({storeId:t,type:mi.direct,events:v},A)},Zn({},c,_)));return I},$dispose:x},X=Hi($);r._s.set(t,X);const w=(r._a&&r._a.runWithContext||PT)(()=>r._e.run(()=>(o=Rp()).run(()=>e({action:q}))));for(const y in w){const _=w[y];if(We(_)&&!NT(_)||hn(_))i||(S&&kT(_)&&(We(_)?_.value=S[y]:uc(_,S[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const I=q(_,y);w[y]=I,l.actions[y]=_}}return Zn(X,w),Zn(Ae(X),w),Object.defineProperty(X,"$state",{get:()=>r.state.value[t],set:y=>{N(_=>{Zn(_,y)})}}),r._p.forEach(y=>{Zn(X,o.run(()=>y({store:X,app:r._a,pinia:r,options:l})))}),S&&i&&n.hydrate&&n.hydrate(X.$state,S),u=!0,f=!0,X}/*! #__NO_SIDE_EFFECTS__ */function DT(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(l,c){const u=Nv();return l=l||(u?Jt(Dm,null):null),l&&La(l),l=Vm,l._s.has(r)||(i?xm(r,e,s,l):VT(r,s,l)),l._s.get(r)}return o.$id=r,o}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const os=typeof document<"u";function Mm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function OT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Mm(t.default)}const Se=Object.assign;function Ml(t,e){const n={};for(const r in e){const s=e[r];n[r]=Zt(s)?s.map(t):t(s)}return n}const gi=()=>{},Zt=Array.isArray;function Mf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Lm=/#/g,xT=/&/g,MT=/\//g,LT=/=/g,FT=/\?/g,Fm=/\+/g,UT=/%5B/g,BT=/%5D/g,Um=/%5E/g,jT=/%60/g,Bm=/%7B/g,qT=/%7C/g,jm=/%7D/g,$T=/%20/g;function ou(t){return t==null?"":encodeURI(""+t).replace(qT,"|").replace(UT,"[").replace(BT,"]")}function HT(t){return ou(t).replace(Bm,"{").replace(jm,"}").replace(Um,"^")}function hc(t){return ou(t).replace(Fm,"%2B").replace($T,"+").replace(Lm,"%23").replace(xT,"%26").replace(jT,"`").replace(Bm,"{").replace(jm,"}").replace(Um,"^")}function WT(t){return hc(t).replace(LT,"%3D")}function KT(t){return ou(t).replace(Lm,"%23").replace(FT,"%3F")}function GT(t){return KT(t).replace(MT,"%2F")}function Ni(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const zT=/\/$/,QT=t=>t.replace(zT,"");function Ll(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=ZT(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Ni(o)}}function YT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Lf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function JT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&vs(e.matched[r],n.matched[s])&&qm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!XT(t[n],e[n]))return!1;return!0}function XT(t,e){return Zt(t)?Ff(t,e):Zt(e)?Ff(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Ff(t,e){return Zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ZT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let fc=function(t){return t.pop="pop",t.push="push",t}({}),Fl=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function eI(t){if(!t)if(os){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),QT(t)}const tI=/^[^#]+#/;function nI(t,e){return t.replace(tI,"#")+e}function rI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Fa=()=>({left:window.scrollX,top:window.scrollY});function sI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=rI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Uf(t,e){return(history.state?history.state.position-e:-1)+t}const dc=new Map;function iI(t,e){dc.set(t,e)}function oI(t){const e=dc.get(t);return dc.delete(t),e}function aI(t){return typeof t=="string"||t&&typeof t=="object"}function $m(t){return typeof t=="string"||typeof t=="symbol"}let He=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const Hm=Symbol("");He.MATCHER_NOT_FOUND+"",He.NAVIGATION_GUARD_REDIRECT+"",He.NAVIGATION_ABORTED+"",He.NAVIGATION_CANCELLED+"",He.NAVIGATION_DUPLICATED+"";function Es(t,e){return Se(new Error,{type:t,[Hm]:!0},e)}function In(t,e){return t instanceof Error&&Hm in t&&(e==null||!!(t.type&e))}const lI=["params","query","hash"];function cI(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of lI)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function uI(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Fm," "),i=s.indexOf("="),o=Ni(i<0?s:s.slice(0,i)),l=i<0?null:Ni(s.slice(i+1));if(o in e){let c=e[o];Zt(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Bf(t){let e="";for(let n in t){const r=t[n];if(n=WT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Zt(r)?r.map(s=>s&&hc(s)):[r&&hc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function hI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const fI=Symbol(""),jf=Symbol(""),Ua=Symbol(""),Wm=Symbol(""),pc=Symbol("");function Xs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function tr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Es(He.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?c(m):aI(m)?c(Es(He.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Ul(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Mm(c)){const u=(c.__vccOpts||c)[e];u&&i.push(tr(u,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=OT(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const m=(p.__vccOpts||p)[e];return m&&tr(m,n,r,o,l,s)()}))}}return i}function dI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>vs(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>vs(u,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let pI=()=>location.protocol+"//"+location.host;function Km(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),Lf(l,"")}return Lf(n,t)+r+s}function mI(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const v=Km(t,location),S=n.value,k=e.value;let N=0;if(m){if(n.value=v,e.value=m,o&&o===S){o=null;return}N=k?m.position-k.position:0}else r(v);s.forEach(B=>{B(n.value,S,{delta:N,type:fc.pop,direction:N?N>0?Fl.forward:Fl.back:Fl.unknown})})};function c(){o=n.value}function u(m){s.push(m);const v=()=>{const S=s.indexOf(m);S>-1&&s.splice(S,1)};return i.push(v),v}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Se({},m.state,{scroll:Fa()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:c,listen:u,destroy:p}}function qf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Fa():null}}function gI(t){const{history:e,location:n}=window,r={value:Km(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:pI()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(v){console.error(v),n[f?"replace":"assign"](m)}}function o(c,u){i(c,Se({},e.state,qf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=c}function l(c,u){const f=Se({},s.value,e.state,{forward:c,scroll:Fa()});i(f.current,f,!0),i(c,Se({},qf(r.value,c,null),{position:f.position+1},u),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function _I(t){t=eI(t);const e=gI(t),n=mI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:nI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function yI(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),_I(t)}let xr=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Je=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Je||{});const vI={type:xr.Static,value:""},EI=/[a-zA-Z0-9_]/;function TI(t){if(!t)return[[]];if(t==="/")return[[vI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=Je.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function p(){u&&(n===Je.Static?i.push({type:xr.Static,value:u}):n===Je.Param||n===Je.ParamRegExp||n===Je.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:xr.Param,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==Je.ParamRegExp){r=n,n=Je.EscapeNext;continue}switch(n){case Je.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=Je.Param):m();break;case Je.EscapeNext:m(),n=r;break;case Je.Param:c==="("?n=Je.ParamRegExp:EI.test(c)?m():(p(),n=Je.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Je.ParamRegExp:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=Je.ParamRegExpEnd:f+=c;break;case Je.ParamRegExpEnd:p(),n=Je.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===Je.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const $f="[^/]+?",II={sensitive:!1,strict:!1,start:!0,end:!0};var Rt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(Rt||{});const wI=/[.+*?^${}()[\]/\\]/g;function AI(t,e){const n=Se({},II,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[Rt.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let v=Rt.Segment+(n.sensitive?Rt.BonusCaseSensitive:0);if(m.type===xr.Static)p||(s+="/"),s+=m.value.replace(wI,"\\$&"),v+=Rt.Static;else if(m.type===xr.Param){const{value:S,repeatable:k,optional:N,regexp:B}=m;i.push({name:S,repeatable:k,optional:N});const x=B||$f;if(x!==$f){v+=Rt.BonusCustomRegExp;try{`${x}`}catch($){throw new Error(`Invalid custom RegExp for param "${S}" (${x}): `+$.message)}}let q=k?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;p||(q=N&&u.length<2?`(?:/${q})`:"/"+q),N&&(q+="?"),s+=q,v+=Rt.Dynamic,N&&(v+=Rt.BonusOptional),k&&(v+=Rt.BonusRepeatable),x===".*"&&(v+=Rt.BonusWildcard)}f.push(v)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Rt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const v=f[m]||"",S=i[m-1];p[S.name]=v&&S.repeatable?v.split("/"):v}return p}function c(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const v of m)if(v.type===xr.Static)f+=v.value;else if(v.type===xr.Param){const{value:S,repeatable:k,optional:N}=v,B=S in u?u[S]:"";if(Zt(B)&&!k)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const x=Zt(B)?B.join("/"):B;if(!x)if(N)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);f+=x}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function RI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Rt.Static+Rt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Rt.Static+Rt.Segment?1:-1:0}function Gm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=RI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Hf(r))return 1;if(Hf(s))return-1}return s.length-r.length}function Hf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const bI={strict:!1,end:!0,sensitive:!1};function SI(t,e,n){const r=AI(TI(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function PI(t,e){const n=[],r=new Map;e=Mf(bI,e);function s(p){return r.get(p)}function i(p,m,v){const S=!v,k=Kf(p);k.aliasOf=v&&v.record;const N=Mf(e,p),B=[k];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const X of $)B.push(Kf(Se({},k,{components:v?v.record.components:k.components,path:X,aliasOf:v?v.record:k})))}let x,q;for(const $ of B){const{path:X}=$;if(m&&X[0]!=="/"){const re=m.record.path,w=re[re.length-1]==="/"?"":"/";$.path=m.record.path+(X&&w+X)}if(x=SI($,m,N),v?v.alias.push(x):(q=q||x,q!==x&&q.alias.push(x),S&&p.name&&!Gf(x)&&o(p.name)),zm(x)&&c(x),k.children){const re=k.children;for(let w=0;w<re.length;w++)i(re[w],x,v&&v.children[w])}v=v||x}return q?()=>{o(q)}:gi}function o(p){if($m(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=NI(p,n);n.splice(m,0,p),p.record.name&&!Gf(p)&&r.set(p.record.name,p)}function u(p,m){let v,S={},k,N;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw Es(He.MATCHER_NOT_FOUND,{location:p});N=v.record.name,S=Se(Wf(m.params,v.keys.filter(q=>!q.optional).concat(v.parent?v.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&Wf(p.params,v.keys.map(q=>q.name))),k=v.stringify(S)}else if(p.path!=null)k=p.path,v=n.find(q=>q.re.test(k)),v&&(S=v.parse(k),N=v.record.name);else{if(v=m.name?r.get(m.name):n.find(q=>q.re.test(m.path)),!v)throw Es(He.MATCHER_NOT_FOUND,{location:p,currentLocation:m});N=v.record.name,S=Se({},m.params,p.params),k=v.stringify(S)}const B=[];let x=v;for(;x;)B.unshift(x.record),x=x.parent;return{name:N,path:k,params:S,matched:B,meta:kI(B)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Wf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Kf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:CI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function CI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Gf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function kI(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function NI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Gm(t,e[i])<0?r=i:n=i+1}const s=VI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function VI(t){let e=t;for(;e=e.parent;)if(zm(e)&&Gm(t,e)===0)return e}function zm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function zf(t){const e=Jt(Ua),n=Jt(Wm),r=ot(()=>{const c=lr(t.to);return e.resolve(c)}),s=ot(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(vs.bind(null,f));if(m>-1)return m;const v=Qf(c[u-2]);return u>1&&Qf(f)===v&&p[p.length-1].path!==v?p.findIndex(vs.bind(null,c[u-2])):m}),i=ot(()=>s.value>-1&&LI(n.params,r.value.params)),o=ot(()=>s.value>-1&&s.value===n.matched.length-1&&qm(n.params,r.value.params));function l(c={}){if(MI(c)){const u=e[lr(t.replace)?"replace":"push"](lr(t.to)).catch(gi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:ot(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function DI(t){return t.length===1?t[0]:t}const OI=rm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:zf,setup(t,{slots:e}){const n=Hi(zf(t)),{options:r}=Jt(Ua),s=ot(()=>({[Yf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Yf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&DI(e.default(n));return t.custom?i:iu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),xI=OI;function MI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function LI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Zt(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function Qf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yf=(t,e,n)=>t??e??n,FI=rm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Jt(pc),s=ot(()=>t.route||r.value),i=Jt(jf,0),o=ot(()=>{let u=lr(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=ot(()=>s.value.matched[o.value]);Lo(jf,ot(()=>o.value+1)),Lo(fI,l),Lo(pc,s);const c=us();return fi(()=>[c.value,l.value,t.name],([u,f,p],[m,v,S])=>{f&&(f.instances[p]=u,v&&v!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),u&&f&&(!v||!vs(f,v)||!m)&&(f.enterCallbacks[p]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=l.value,m=p&&p.components[f];if(!m)return Jf(n.default,{Component:m,route:u});const v=p.props[f],S=v?v===!0?u.params:typeof v=="function"?v(u):v:null,N=iu(m,Se({},S,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return Jf(n.default,{Component:N,route:u})||N}}});function Jf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Qm=FI;function UI(t){const e=PI(t.routes,t),n=t.parseQuery||uI,r=t.stringifyQuery||Bf,s=t.history,i=Xs(),o=Xs(),l=Xs(),c=_v(Qn);let u=Qn;os&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ml.bind(null,M=>""+M),p=Ml.bind(null,GT),m=Ml.bind(null,Ni);function v(M,J){let z,ee;return $m(M)?(z=e.getRecordMatcher(M),ee=J):ee=M,e.addRoute(ee,z)}function S(M){const J=e.getRecordMatcher(M);J&&e.removeRoute(J)}function k(){return e.getRoutes().map(M=>M.record)}function N(M){return!!e.getRecordMatcher(M)}function B(M,J){if(J=Se({},J||c.value),typeof M=="string"){const P=Ll(n,M,J.path),D=e.resolve({path:P.path},J),L=s.createHref(P.fullPath);return Se(P,D,{params:m(D.params),hash:Ni(P.hash),redirectedFrom:void 0,href:L})}let z;if(M.path!=null)z=Se({},M,{path:Ll(n,M.path,J.path).path});else{const P=Se({},M.params);for(const D in P)P[D]==null&&delete P[D];z=Se({},M,{params:p(P)}),J.params=p(J.params)}const ee=e.resolve(z,J),me=M.hash||"";ee.params=f(m(ee.params));const E=YT(r,Se({},M,{hash:HT(me),path:ee.path})),R=s.createHref(E);return Se({fullPath:E,hash:me,query:r===Bf?hI(M.query):M.query||{}},ee,{redirectedFrom:void 0,href:R})}function x(M){return typeof M=="string"?Ll(n,M,c.value.path):Se({},M)}function q(M,J){if(u!==M)return Es(He.NAVIGATION_CANCELLED,{from:J,to:M})}function $(M){return w(M)}function X(M){return $(Se(x(M),{replace:!0}))}function re(M,J){const z=M.matched[M.matched.length-1];if(z&&z.redirect){const{redirect:ee}=z;let me=typeof ee=="function"?ee(M,J):ee;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=x(me):{path:me},me.params={}),Se({query:M.query,hash:M.hash,params:me.path!=null?{}:M.params},me)}}function w(M,J){const z=u=B(M),ee=c.value,me=M.state,E=M.force,R=M.replace===!0,P=re(z,ee);if(P)return w(Se(x(P),{state:typeof P=="object"?Se({},me,P.state):me,force:E,replace:R}),J||z);const D=z;D.redirectedFrom=J;let L;return!E&&JT(r,ee,z)&&(L=Es(He.NAVIGATION_DUPLICATED,{to:D,from:ee}),Bt(ee,ee,!0,!1)),(L?Promise.resolve(L):I(D,ee)).catch(O=>In(O)?In(O,He.NAVIGATION_GUARD_REDIRECT)?O:zt(O):_e(O,D,ee)).then(O=>{if(O){if(In(O,He.NAVIGATION_GUARD_REDIRECT))return w(Se({replace:R},x(O.to),{state:typeof O.to=="object"?Se({},me,O.to.state):me,force:E}),J||D)}else O=A(D,ee,!0,R,me);return b(D,ee,O),O})}function y(M,J){const z=q(M,J);return z?Promise.reject(z):Promise.resolve()}function _(M){const J=$n.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(M):M()}function I(M,J){let z;const[ee,me,E]=dI(M,J);z=Ul(ee.reverse(),"beforeRouteLeave",M,J);for(const P of ee)P.leaveGuards.forEach(D=>{z.push(tr(D,M,J))});const R=y.bind(null,M,J);return z.push(R),Ct(z).then(()=>{z=[];for(const P of i.list())z.push(tr(P,M,J));return z.push(R),Ct(z)}).then(()=>{z=Ul(me,"beforeRouteUpdate",M,J);for(const P of me)P.updateGuards.forEach(D=>{z.push(tr(D,M,J))});return z.push(R),Ct(z)}).then(()=>{z=[];for(const P of E)if(P.beforeEnter)if(Zt(P.beforeEnter))for(const D of P.beforeEnter)z.push(tr(D,M,J));else z.push(tr(P.beforeEnter,M,J));return z.push(R),Ct(z)}).then(()=>(M.matched.forEach(P=>P.enterCallbacks={}),z=Ul(E,"beforeRouteEnter",M,J,_),z.push(R),Ct(z))).then(()=>{z=[];for(const P of o.list())z.push(tr(P,M,J));return z.push(R),Ct(z)}).catch(P=>In(P,He.NAVIGATION_CANCELLED)?P:Promise.reject(P))}function b(M,J,z){l.list().forEach(ee=>_(()=>ee(M,J,z)))}function A(M,J,z,ee,me){const E=q(M,J);if(E)return E;const R=J===Qn,P=os?history.state:{};z&&(ee||R?s.replace(M.fullPath,Se({scroll:R&&P&&P.scroll},me)):s.push(M.fullPath,me)),c.value=M,Bt(M,J,z,R),zt()}let T;function Ee(){T||(T=s.listen((M,J,z)=>{if(!Vt.listening)return;const ee=B(M),me=re(ee,Vt.currentRoute.value);if(me){w(Se(me,{replace:!0,force:!0}),ee).catch(gi);return}u=ee;const E=c.value;os&&iI(Uf(E.fullPath,z.delta),Fa()),I(ee,E).catch(R=>In(R,He.NAVIGATION_ABORTED|He.NAVIGATION_CANCELLED)?R:In(R,He.NAVIGATION_GUARD_REDIRECT)?(w(Se(x(R.to),{force:!0}),ee).then(P=>{In(P,He.NAVIGATION_ABORTED|He.NAVIGATION_DUPLICATED)&&!z.delta&&z.type===fc.pop&&s.go(-1,!1)}).catch(gi),Promise.reject()):(z.delta&&s.go(-z.delta,!1),_e(R,ee,E))).then(R=>{R=R||A(ee,E,!1),R&&(z.delta&&!In(R,He.NAVIGATION_CANCELLED)?s.go(-z.delta,!1):z.type===fc.pop&&In(R,He.NAVIGATION_ABORTED|He.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(ee,E,R)}).catch(gi)}))}let Ke=Xs(),ke=Xs(),ce;function _e(M,J,z){zt(M);const ee=ke.list();return ee.length?ee.forEach(me=>me(M,J,z)):console.error(M),Promise.reject(M)}function Nt(){return ce&&c.value!==Qn?Promise.resolve():new Promise((M,J)=>{Ke.add([M,J])})}function zt(M){return ce||(ce=!M,Ee(),Ke.list().forEach(([J,z])=>M?z(M):J()),Ke.reset()),M}function Bt(M,J,z,ee){const{scrollBehavior:me}=t;if(!os||!me)return Promise.resolve();const E=!z&&oI(Uf(M.fullPath,0))||(ee||!z)&&history.state&&history.state.scroll||null;return ka().then(()=>me(M,J,E)).then(R=>R&&sI(R)).catch(R=>_e(R,M,J))}const Le=M=>s.go(M);let Ue;const $n=new Set,Vt={currentRoute:c,listening:!0,addRoute:v,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:k,resolve:B,options:t,push:$,replace:X,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:ke.add,isReady:Nt,install(M){M.component("RouterLink",xI),M.component("RouterView",Qm),M.config.globalProperties.$router=Vt,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>lr(c)}),os&&!Ue&&c.value===Qn&&(Ue=!0,$(s.location).catch(ee=>{}));const J={};for(const ee in Qn)Object.defineProperty(J,ee,{get:()=>c.value[ee],enumerable:!0});M.provide(Ua,Vt),M.provide(Wm,jp(J)),M.provide(pc,c);const z=M.unmount;$n.add(M),M.unmount=function(){$n.delete(M),$n.size<1&&(u=Qn,T&&T(),T=null,c.value=Qn,Ue=!1,ce=!1),z()}}};function Ct(M){return M.reduce((J,z)=>J.then(()=>_(z)),Promise.resolve())}return Vt}function CC(){return Jt(Ua)}var Xf={};/**
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
 */const Ym=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},BI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Jm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(m=64)),r.push(n[f],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ym(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new jI;const m=i<<2|l>>4;if(r.push(m),u!==64){const v=l<<4&240|u>>2;if(r.push(v),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qI=function(t){const e=Ym(t);return Jm.encodeByteArray(e,!0)},ia=function(t){return qI(t).replace(/\./g,"")},Xm=function(t){try{return Jm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $I(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const HI=()=>$I().__FIREBASE_DEFAULTS__,WI=()=>{if(typeof process>"u"||typeof Xf>"u")return;const t=Xf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xm(t[1]);return e&&JSON.parse(e)},Ba=()=>{try{return HI()||WI()||KI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zm=t=>{var e,n;return(n=(e=Ba())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},GI=t=>{const e=Zm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},eg=()=>{var t;return(t=Ba())===null||t===void 0?void 0:t.config},tg=t=>{var e;return(e=Ba())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class zI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function QI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ia(JSON.stringify(n)),ia(JSON.stringify(o)),""].join(".")}/**
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
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function JI(){var t;const e=(t=Ba())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function XI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ZI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ew(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tw(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nw(){return!JI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rw(){try{return typeof indexedDB=="object"}catch{return!1}}function sw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const iw="FirebaseError";class qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=iw,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gi.prototype.create)}}class Gi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ow(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new qn(s,l,r)}}function ow(t,e){return t.replace(aw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const aw=/\{\$([^}]+)}/g;function lw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Zf(i)&&Zf(o)){if(!oa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Zf(t){return t!==null&&typeof t=="object"}/**
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
 */function zi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ri(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function si(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function cw(t,e){const n=new uw(t,e);return n.subscribe.bind(n)}class uw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Bl),s.error===void 0&&(s.error=Bl),s.complete===void 0&&(s.complete=Bl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bl(){}/**
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
 */function nt(t){return t&&t._delegate?t._delegate:t}class Br{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nr="[DEFAULT]";/**
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
 */class fw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pw(e))try{this.getOrInitializeService({instanceIdentifier:Nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nr){return this.instances.has(e)}getOptions(e=Nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nr){return this.component?this.component.multipleInstances?e:Nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dw(t){return t===Nr?void 0:t}function pw(t){return t.instantiationMode==="EAGER"}/**
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
 */class mw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const gw={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},_w=ve.INFO,yw={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},vw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=yw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class au{constructor(e){this.name=e,this._logLevel=_w,this._logHandler=vw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const Ew=(t,e)=>e.some(n=>t instanceof n);let ed,td;function Tw(){return ed||(ed=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Iw(){return td||(td=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ng=new WeakMap,mc=new WeakMap,rg=new WeakMap,jl=new WeakMap,lu=new WeakMap;function ww(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(cr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ng.set(n,t)}).catch(()=>{}),lu.set(e,t),e}function Aw(t){if(mc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});mc.set(t,e)}let gc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rw(t){gc=t(gc)}function bw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ql(this),e,...n);return rg.set(r,e.sort?e.sort():[e]),cr(r)}:Iw().includes(t)?function(...e){return t.apply(ql(this),e),cr(ng.get(this))}:function(...e){return cr(t.apply(ql(this),e))}}function Sw(t){return typeof t=="function"?bw(t):(t instanceof IDBTransaction&&Aw(t),Ew(t,Tw())?new Proxy(t,gc):t)}function cr(t){if(t instanceof IDBRequest)return ww(t);if(jl.has(t))return jl.get(t);const e=Sw(t);return e!==t&&(jl.set(t,e),lu.set(e,t)),e}const ql=t=>lu.get(t);function Pw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=cr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(cr(o.result),c.oldVersion,c.newVersion,cr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Cw=["get","getKey","getAll","getAllKeys","count"],kw=["put","add","delete","clear"],$l=new Map;function nd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($l.get(e))return $l.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=kw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Cw.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return $l.set(e,i),i}Rw(t=>({...t,get:(e,n,r)=>nd(e,n)||t.get(e,n,r),has:(e,n)=>!!nd(e,n)||t.has(e,n)}));/**
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
 */class Nw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Vw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _c="@firebase/app",rd="0.10.13";/**
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
 */const Ln=new au("@firebase/app"),Dw="@firebase/app-compat",Ow="@firebase/analytics-compat",xw="@firebase/analytics",Mw="@firebase/app-check-compat",Lw="@firebase/app-check",Fw="@firebase/auth",Uw="@firebase/auth-compat",Bw="@firebase/database",jw="@firebase/data-connect",qw="@firebase/database-compat",$w="@firebase/functions",Hw="@firebase/functions-compat",Ww="@firebase/installations",Kw="@firebase/installations-compat",Gw="@firebase/messaging",zw="@firebase/messaging-compat",Qw="@firebase/performance",Yw="@firebase/performance-compat",Jw="@firebase/remote-config",Xw="@firebase/remote-config-compat",Zw="@firebase/storage",eA="@firebase/storage-compat",tA="@firebase/firestore",nA="@firebase/vertexai-preview",rA="@firebase/firestore-compat",sA="firebase",iA="10.14.1";/**
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
 */const yc="[DEFAULT]",oA={[_c]:"fire-core",[Dw]:"fire-core-compat",[xw]:"fire-analytics",[Ow]:"fire-analytics-compat",[Lw]:"fire-app-check",[Mw]:"fire-app-check-compat",[Fw]:"fire-auth",[Uw]:"fire-auth-compat",[Bw]:"fire-rtdb",[jw]:"fire-data-connect",[qw]:"fire-rtdb-compat",[$w]:"fire-fn",[Hw]:"fire-fn-compat",[Ww]:"fire-iid",[Kw]:"fire-iid-compat",[Gw]:"fire-fcm",[zw]:"fire-fcm-compat",[Qw]:"fire-perf",[Yw]:"fire-perf-compat",[Jw]:"fire-rc",[Xw]:"fire-rc-compat",[Zw]:"fire-gcs",[eA]:"fire-gcs-compat",[tA]:"fire-fst",[rA]:"fire-fst-compat",[nA]:"fire-vertex","fire-js":"fire-js",[sA]:"fire-js-all"};/**
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
 */const Ts=new Map,vc=new Map,Ec=new Map;function sd(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Is(t){const e=t.name;if(Ec.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;Ec.set(e,t);for(const n of Ts.values())sd(n,t);for(const n of vc.values())sd(n,t);return!0}function cu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cn(t){return t.settings!==void 0}/**
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
 */const aA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new Gi("app","Firebase",aA);/**
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
 */class lA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
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
 */const ks=iA;function sg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ur.create("bad-app-name",{appName:String(s)});if(n||(n=eg()),!n)throw ur.create("no-options");const i=Ts.get(s);if(i){if(oa(n,i.options)&&oa(r,i.config))return i;throw ur.create("duplicate-app",{appName:s})}const o=new mw(s);for(const c of Ec.values())o.addComponent(c);const l=new lA(n,r,o);return Ts.set(s,l),l}function ig(t=yc){const e=Ts.get(t);if(!e&&t===yc&&eg())return sg();if(!e)throw ur.create("no-app",{appName:t});return e}async function kC(t){let e=!1;const n=t.name;Ts.has(n)?(e=!0,Ts.delete(n)):vc.has(n)&&t.decRefCount()<=0&&(vc.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function hr(t,e,n){var r;let s=(r=oA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(l.join(" "));return}Is(new Br(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const cA="firebase-heartbeat-database",uA=1,Vi="firebase-heartbeat-store";let Hl=null;function og(){return Hl||(Hl=Pw(cA,uA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vi)}catch(n){console.warn(n)}}}}).catch(t=>{throw ur.create("idb-open",{originalErrorMessage:t.message})})),Hl}async function hA(t){try{const n=(await og()).transaction(Vi),r=await n.objectStore(Vi).get(ag(t));return await n.done,r}catch(e){if(e instanceof qn)Ln.warn(e.message);else{const n=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function id(t,e){try{const r=(await og()).transaction(Vi,"readwrite");await r.objectStore(Vi).put(e,ag(t)),await r.done}catch(n){if(n instanceof qn)Ln.warn(n.message);else{const r=ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function ag(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fA=1024,dA=30*24*60*60*1e3;class pA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=od();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=dA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=od(),{heartbeatsToSend:r,unsentEntries:s}=mA(this._heartbeatsCache.heartbeats),i=ia(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Ln.warn(n),""}}}function od(){return new Date().toISOString().substring(0,10)}function mA(t,e=fA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ad(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ad(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rw()?sw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return id(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return id(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ad(t){return ia(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function _A(t){Is(new Br("platform-logger",e=>new Nw(e),"PRIVATE")),Is(new Br("heartbeat",e=>new pA(e),"PRIVATE")),hr(_c,rd,t),hr(_c,rd,"esm2017"),hr("fire-js","")}_A("");function uu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function lg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yA=lg,cg=new Gi("auth","Firebase",lg());/**
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
 */const aa=new au("@firebase/auth");function vA(t,...e){aa.logLevel<=ve.WARN&&aa.warn(`Auth (${ks}): ${t}`,...e)}function Uo(t,...e){aa.logLevel<=ve.ERROR&&aa.error(`Auth (${ks}): ${t}`,...e)}/**
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
 */function en(t,...e){throw hu(t,...e)}function fn(t,...e){return hu(t,...e)}function ug(t,e,n){const r=Object.assign(Object.assign({},yA()),{[e]:n});return new Gi("auth","Firebase",r).create(e,{appName:t.name})}function Vn(t){return ug(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cg.create(t,...e)}function le(t,e,...n){if(!t)throw hu(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Uo(e),new Error(e)}function Fn(t,e){t||Pn(e)}/**
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
 */function Tc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function EA(){return ld()==="http:"||ld()==="https:"}function ld(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function TA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EA()||ZI()||"connection"in navigator)?navigator.onLine:!0}function IA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=YI()||ew()}get(){return TA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fu(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class hg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const AA=new Qi(3e4,6e4);function vr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Er(t,e,n,r,s={}){return fg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=zi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return XI()||(u.referrerPolicy="no-referrer"),hg.fetch()(dg(t,t.config.apiHost,n,l),u)})}async function fg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wA),e);try{const s=new bA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ko(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ko(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ko(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ko(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ug(t,f,u);en(t,f)}}catch(s){if(s instanceof qn)throw s;en(t,"network-request-failed",{message:String(s)})}}async function Yi(t,e,n,r,s={}){const i=await Er(t,e,n,r,s);return"mfaPendingCredential"in i&&en(t,"multi-factor-auth-required",{_serverResponse:i}),i}function dg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?fu(t.config,s):`${t.config.apiScheme}://${s}`}function RA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),AA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ko(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=fn(t,e,r);return s.customData._tokenResponse=n,s}function cd(t){return t!==void 0&&t.enterprise!==void 0}class SA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return RA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function PA(t,e){return Er(t,"GET","/v2/recaptchaConfig",vr(t,e))}/**
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
 */async function CA(t,e){return Er(t,"POST","/v1/accounts:delete",e)}async function pg(t,e){return Er(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function _i(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kA(t,e=!1){const n=nt(t),r=await n.getIdToken(e),s=du(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:_i(Wl(s.auth_time)),issuedAtTime:_i(Wl(s.iat)),expirationTime:_i(Wl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Wl(t){return Number(t)*1e3}function du(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Uo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xm(n);return s?JSON.parse(s):(Uo("Failed to decode base64 JWT payload"),null)}catch(s){return Uo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ud(t){const e=du(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qn&&NA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class VA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ic{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_i(this.lastLoginAt),this.creationTime=_i(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function la(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Di(t,pg(n,{idToken:r}));le(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?mg(i.providerUserInfo):[],l=OA(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ic(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function DA(t){const e=nt(t);await la(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function mg(t){return t.map(e=>{var{providerId:n}=e,r=uu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function xA(t,e){const n=await fg(t,{},async()=>{const r=zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=dg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",hg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function MA(t,e){return Er(t,"POST","/v2/accounts:revokeToken",vr(t,e))}/**
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
 */class ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ud(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=ud(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await xA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ps;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ps,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Yn(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=uu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ic(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Di(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kA(this,e)}reload(){return DA(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await la(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(Vn(this.auth));const e=await this.getIdToken();return await Di(this,CA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,B=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:$,isAnonymous:X,providerData:re,stsTokenManager:w}=n;le(q&&w,e,"internal-error");const y=ps.fromJSON(this.name,w);le(typeof q=="string",e,"internal-error"),Yn(p,e.name),Yn(m,e.name),le(typeof $=="boolean",e,"internal-error"),le(typeof X=="boolean",e,"internal-error"),Yn(v,e.name),Yn(S,e.name),Yn(k,e.name),Yn(N,e.name),Yn(B,e.name),Yn(x,e.name);const _=new Cn({uid:q,auth:e,email:m,emailVerified:$,displayName:p,isAnonymous:X,photoURL:S,phoneNumber:v,tenantId:k,stsTokenManager:y,createdAt:B,lastLoginAt:x});return re&&Array.isArray(re)&&(_.providerData=re.map(I=>Object.assign({},I))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new ps;s.updateFromServerResponse(n);const i=new Cn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await la(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?mg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ps;l.updateFromIdToken(r);const c=new Cn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ic(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const hd=new Map;function kn(t){Fn(t instanceof Function,"Expected a class definition");let e=hd.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hd.set(t,e),e)}/**
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
 */class gg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gg.type="NONE";const fd=gg;/**
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
 */function Bo(t,e,n){return`firebase:${t}:${e}:${n}`}class ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Bo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Bo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ms(kn(fd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||kn(fd);const o=Bo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){const p=Cn._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ms(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ms(i,e,r))}}/**
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
 */function dd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Eg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_g(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ig(e))return"Blackberry";if(wg(e))return"Webos";if(yg(e))return"Safari";if((e.includes("chrome/")||vg(e))&&!e.includes("edge/"))return"Chrome";if(Tg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _g(t=Tt()){return/firefox\//i.test(t)}function yg(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vg(t=Tt()){return/crios\//i.test(t)}function Eg(t=Tt()){return/iemobile/i.test(t)}function Tg(t=Tt()){return/android/i.test(t)}function Ig(t=Tt()){return/blackberry/i.test(t)}function wg(t=Tt()){return/webos/i.test(t)}function pu(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LA(t=Tt()){var e;return pu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FA(){return tw()&&document.documentMode===10}function Ag(t=Tt()){return pu(t)||Tg(t)||wg(t)||Ig(t)||/windows phone/i.test(t)||Eg(t)}/**
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
 */function Rg(t,e=[]){let n;switch(t){case"Browser":n=dd(Tt());break;case"Worker":n=`${dd(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ks}/${r}`}/**
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
 */class UA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function BA(t,e={}){return Er(t,"GET","/v2/passwordPolicy",vr(t,e))}/**
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
 */const jA=6;class qA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:jA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class $A{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pd(this),this.idTokenSubscription=new pd(this),this.beforeStateQueue=new UA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ms.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pg(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await la(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(Vn(this));const n=e?nt(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(Vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(Vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BA(this),n=new qA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await MA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await ms.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gr(t){return nt(t)}class pd{constructor(e){this.auth=e,this.observer=null,this.addObserver=cw(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ja={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HA(t){ja=t}function bg(t){return ja.loadJS(t)}function WA(){return ja.recaptchaEnterpriseScript}function KA(){return ja.gapiScript}function GA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const zA="recaptcha-enterprise",QA="NO_RECAPTCHA";class YA{constructor(e){this.type=zA,this.auth=Gr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{PA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new SA(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;cd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(QA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&cd(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=WA();c.length!==0&&(c+=l),bg(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function md(t,e,n,r=!1){const s=new YA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function wc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await md(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await md(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function JA(t,e){const n=cu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(oa(i,e??{}))return s;en(s,"already-initialized")}return n.initialize({options:e})}function XA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZA(t,e,n){const r=Gr(t);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Sg(e),{host:o,port:l}=e0(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),t0()}function Sg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function e0(t){const e=Sg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:gd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:gd(o)}}}function gd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function t0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class mu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function n0(t,e){return Er(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function r0(t,e){return Yi(t,"POST","/v1/accounts:signInWithPassword",vr(t,e))}/**
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
 */async function s0(t,e){return Yi(t,"POST","/v1/accounts:signInWithEmailLink",vr(t,e))}async function i0(t,e){return Yi(t,"POST","/v1/accounts:signInWithEmailLink",vr(t,e))}/**
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
 */class Oi extends mu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Oi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Oi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wc(e,n,"signInWithPassword",r0);case"emailLink":return s0(e,{email:this._email,oobCode:this._password});default:en(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wc(e,r,"signUpPassword",n0);case"emailLink":return i0(e,{idToken:n,email:this._email,oobCode:this._password});default:en(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function gs(t,e){return Yi(t,"POST","/v1/accounts:signInWithIdp",vr(t,e))}/**
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
 */const o0="http://localhost";class jr extends mu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=uu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new jr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gs(e,n)}buildRequest(){const e={requestUri:o0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zi(n)}return e}}/**
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
 */function a0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function l0(t){const e=ri(si(t)).link,n=e?ri(si(e)).deep_link_id:null,r=ri(si(t)).deep_link_id;return(r?ri(si(r)).link:null)||r||n||e||t}class gu{constructor(e){var n,r,s,i,o,l;const c=ri(si(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=a0((s=c.mode)!==null&&s!==void 0?s:null);le(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=l0(e);try{return new gu(n)}catch{return null}}}/**
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
 */class Ns{constructor(){this.providerId=Ns.PROVIDER_ID}static credential(e,n){return Oi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gu.parseLink(n);return le(r,"argument-error"),Oi._fromEmailAndCode(e,r.code,r.tenantId)}}Ns.PROVIDER_ID="password";Ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Pg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ji extends Pg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class nr extends Ji{constructor(){super("facebook.com")}static credential(e){return jr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
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
 */class rr extends Ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
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
 */class sr extends Ji{constructor(){super("github.com")}static credential(e){return jr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
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
 */class ir extends Ji{constructor(){super("twitter.com")}static credential(e,n){return jr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
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
 */async function c0(t,e){return Yi(t,"POST","/v1/accounts:signUp",vr(t,e))}/**
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
 */class qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Cn._fromIdTokenResponse(e,r,s),o=_d(r);return new qr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=_d(r);return new qr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function _d(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ca extends qn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ca.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ca(e,n,r,s)}}function Cg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ca._fromErrorAndOperation(t,i,e,r):i})}async function u0(t,e,n=!1){const r=await Di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qr._forOperation(t,"link",r)}/**
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
 */async function h0(t,e,n=!1){const{auth:r}=t;if(cn(r.app))return Promise.reject(Vn(r));const s="reauthenticate";try{const i=await Di(t,Cg(r,s,e,t),n);le(i.idToken,r,"internal-error");const o=du(i.idToken);le(o,r,"internal-error");const{sub:l}=o;return le(t.uid===l,r,"user-mismatch"),qr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&en(r,"user-mismatch"),i}}/**
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
 */async function kg(t,e,n=!1){if(cn(t.app))return Promise.reject(Vn(t));const r="signIn",s=await Cg(t,r,e),i=await qr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function f0(t,e){return kg(Gr(t),e)}/**
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
 */async function Ng(t){const e=Gr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function NC(t,e,n){if(cn(t.app))return Promise.reject(Vn(t));const r=Gr(t),o=await wc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",c0).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Ng(t),c}),l=await qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function yd(t,e,n){return cn(t.app)?Promise.reject(Vn(t)):f0(nt(t),Ns.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ng(t),r})}function d0(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function p0(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function m0(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}function g0(t){return nt(t).signOut()}const ua="__sak";/**
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
 */class Vg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ua,"1"),this.storage.removeItem(ua),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _0=1e3,y0=10;class Dg extends Vg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ag(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);FA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,y0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dg.type="LOCAL";const v0=Dg;/**
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
 */class Og extends Vg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Og.type="SESSION";const xg=Og;/**
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
 */function E0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new qa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await E0(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qa.receivers=[];/**
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
 */function _u(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class T0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=_u("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function dn(){return window}function I0(t){dn().location.href=t}/**
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
 */function Mg(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function w0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function A0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function R0(){return Mg()?self:null}/**
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
 */const Lg="firebaseLocalStorageDb",b0=1,ha="firebaseLocalStorage",Fg="fbase_key";class Xi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $a(t,e){return t.transaction([ha],e?"readwrite":"readonly").objectStore(ha)}function S0(){const t=indexedDB.deleteDatabase(Lg);return new Xi(t).toPromise()}function Ac(){const t=indexedDB.open(Lg,b0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ha,{keyPath:Fg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ha)?e(r):(r.close(),await S0(),e(await Ac()))})})}async function vd(t,e,n){const r=$a(t,!0).put({[Fg]:e,value:n});return new Xi(r).toPromise()}async function P0(t,e){const n=$a(t,!1).get(e),r=await new Xi(n).toPromise();return r===void 0?null:r.value}function Ed(t,e){const n=$a(t,!0).delete(e);return new Xi(n).toPromise()}const C0=800,k0=3;class Ug{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ac(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>k0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qa._getInstance(R0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await w0(),!this.activeServiceWorker)return;this.sender=new T0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||A0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ac();return await vd(e,ua,"1"),await Ed(e,ua),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>P0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ed(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$a(s,!1).getAll();return new Xi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),C0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ug.type="LOCAL";const N0=Ug;new Qi(3e4,6e4);/**
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
 */function V0(t,e){return e?kn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yu extends mu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function D0(t){return kg(t.auth,new yu(t),t.bypassAuthState)}function O0(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),h0(n,new yu(t),t.bypassAuthState)}async function x0(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),u0(n,new yu(t),t.bypassAuthState)}/**
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
 */class Bg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return D0;case"linkViaPopup":case"linkViaRedirect":return x0;case"reauthViaPopup":case"reauthViaRedirect":return O0;default:en(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const M0=new Qi(2e3,1e4);class hs extends Bg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,hs.currentPopupAction&&hs.currentPopupAction.cancel(),hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=_u();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,M0.get())};e()}}hs.currentPopupAction=null;/**
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
 */const L0="pendingRedirect",jo=new Map;class F0 extends Bg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=jo.get(this.auth._key());if(!e){try{const r=await U0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}jo.set(this.auth._key(),e)}return this.bypassAuthState||jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function U0(t,e){const n=q0(e),r=j0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function B0(t,e){jo.set(t._key(),e)}function j0(t){return kn(t._redirectPersistence)}function q0(t){return Bo(L0,t.config.apiKey,t.name)}async function $0(t,e,n=!1){if(cn(t.app))return Promise.reject(Vn(t));const r=Gr(t),s=V0(r,e),o=await new F0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const H0=10*60*1e3;class W0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!K0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=H0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Td(e))}saveEventToCache(e){this.cachedEventUids.add(Td(e)),this.lastProcessedEventTime=Date.now()}}function Td(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function K0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jg(t);default:return!1}}/**
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
 */async function G0(t,e={}){return Er(t,"GET","/v1/projects",e)}/**
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
 */const z0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Q0=/^https?/;async function Y0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await G0(t);for(const n of e)try{if(J0(n))return}catch{}en(t,"unauthorized-domain")}function J0(t){const e=Tc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Q0.test(n))return!1;if(z0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const X0=new Qi(3e4,6e4);function Id(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Z0(t){return new Promise((e,n)=>{var r,s,i;function o(){Id(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Id(),n(fn(t,"network-request-failed"))},timeout:X0.get()})}if(!((s=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=dn().gapi)===null||i===void 0)&&i.load)o();else{const l=GA("iframefcb");return dn()[l]=()=>{gapi.load?o():n(fn(t,"network-request-failed"))},bg(`${KA()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw qo=null,e})}let qo=null;function eR(t){return qo=qo||Z0(t),qo}/**
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
 */const tR=new Qi(5e3,15e3),nR="__/auth/iframe",rR="emulator/auth/iframe",sR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oR(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fu(e,rR):`https://${t.config.authDomain}/${nR}`,r={apiKey:e.apiKey,appName:t.name,v:ks},s=iR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${zi(r).slice(1)}`}async function aR(t){const e=await eR(t),n=dn().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:oR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),l=dn().setTimeout(()=>{i(o)},tR.get());function c(){dn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const lR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cR=500,uR=600,hR="_blank",fR="http://localhost";class wd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dR(t,e,n,r=cR,s=uR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},lR),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Tt().toLowerCase();n&&(l=vg(u)?hR:n),_g(u)&&(e=e||fR,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[v,S])=>`${m}${v}=${S},`,"");if(LA(u)&&l!=="_self")return pR(e||"",l),new wd(null);const p=window.open(e||"",l,f);le(p,t,"popup-blocked");try{p.focus()}catch{}return new wd(p)}function pR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const mR="__/auth/handler",gR="emulator/auth/handler",_R=encodeURIComponent("fac");async function Ad(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ks,eventId:s};if(e instanceof Pg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ji){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${_R}=${encodeURIComponent(c)}`:"";return`${yR(t)}?${zi(l).slice(1)}${u}`}function yR({config:t}){return t.emulator?fu(t,gR):`https://${t.authDomain}/${mR}`}/**
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
 */const Kl="webStorageSupport";class vR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xg,this._completeRedirectFn=$0,this._overrideRedirectResult=B0}async _openPopup(e,n,r,s){var i;Fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ad(e,n,r,Tc(),s);return dR(e,o,_u())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ad(e,n,r,Tc(),s);return I0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await aR(e),r=new W0(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kl,{type:Kl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Kl];o!==void 0&&n(!!o),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Y0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ag()||yg()||pu()}}const ER=vR;var Rd="@firebase/auth",bd="1.7.9";/**
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
 */class TR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function IR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wR(t){Is(new Br("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rg(t)},u=new $A(r,s,i,c);return XA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Is(new Br("auth-internal",e=>{const n=Gr(e.getProvider("auth").getImmediate());return(r=>new TR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hr(Rd,bd,IR(t)),hr(Rd,bd,"esm2017")}/**
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
 */const AR=5*60,RR=tg("authIdTokenMaxAge")||AR;let Sd=null;const bR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RR)return;const s=n==null?void 0:n.token;Sd!==s&&(Sd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function SR(t=ig()){const e=cu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JA(t,{popupRedirectResolver:ER,persistence:[N0,v0,xg]}),r=tg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=bR(i.toString());p0(n,o,()=>o(n.currentUser)),d0(n,l=>o(l))}}const s=Zm("auth");return s&&ZA(n,`http://${s}`),n}function PR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}HA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",PR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wR("Browser");var CR="firebase",kR="10.14.1";/**
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
 */hr(CR,kR,"app");var Pd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ur,qg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function _(){}_.prototype=y.prototype,w.D=y.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(I,b,A){for(var T=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)T[Ee-2]=arguments[Ee];return y.prototype[b].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,_){_||(_=0);var I=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)I[b]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(b=0;16>b;++b)I[b]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=w.g[0],_=w.g[1],b=w.g[2];var A=w.g[3],T=y+(A^_&(b^A))+I[0]+3614090360&4294967295;y=_+(T<<7&4294967295|T>>>25),T=A+(b^y&(_^b))+I[1]+3905402710&4294967295,A=y+(T<<12&4294967295|T>>>20),T=b+(_^A&(y^_))+I[2]+606105819&4294967295,b=A+(T<<17&4294967295|T>>>15),T=_+(y^b&(A^y))+I[3]+3250441966&4294967295,_=b+(T<<22&4294967295|T>>>10),T=y+(A^_&(b^A))+I[4]+4118548399&4294967295,y=_+(T<<7&4294967295|T>>>25),T=A+(b^y&(_^b))+I[5]+1200080426&4294967295,A=y+(T<<12&4294967295|T>>>20),T=b+(_^A&(y^_))+I[6]+2821735955&4294967295,b=A+(T<<17&4294967295|T>>>15),T=_+(y^b&(A^y))+I[7]+4249261313&4294967295,_=b+(T<<22&4294967295|T>>>10),T=y+(A^_&(b^A))+I[8]+1770035416&4294967295,y=_+(T<<7&4294967295|T>>>25),T=A+(b^y&(_^b))+I[9]+2336552879&4294967295,A=y+(T<<12&4294967295|T>>>20),T=b+(_^A&(y^_))+I[10]+4294925233&4294967295,b=A+(T<<17&4294967295|T>>>15),T=_+(y^b&(A^y))+I[11]+2304563134&4294967295,_=b+(T<<22&4294967295|T>>>10),T=y+(A^_&(b^A))+I[12]+1804603682&4294967295,y=_+(T<<7&4294967295|T>>>25),T=A+(b^y&(_^b))+I[13]+4254626195&4294967295,A=y+(T<<12&4294967295|T>>>20),T=b+(_^A&(y^_))+I[14]+2792965006&4294967295,b=A+(T<<17&4294967295|T>>>15),T=_+(y^b&(A^y))+I[15]+1236535329&4294967295,_=b+(T<<22&4294967295|T>>>10),T=y+(b^A&(_^b))+I[1]+4129170786&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^b&(y^_))+I[6]+3225465664&4294967295,A=y+(T<<9&4294967295|T>>>23),T=b+(y^_&(A^y))+I[11]+643717713&4294967295,b=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(b^A))+I[0]+3921069994&4294967295,_=b+(T<<20&4294967295|T>>>12),T=y+(b^A&(_^b))+I[5]+3593408605&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^b&(y^_))+I[10]+38016083&4294967295,A=y+(T<<9&4294967295|T>>>23),T=b+(y^_&(A^y))+I[15]+3634488961&4294967295,b=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(b^A))+I[4]+3889429448&4294967295,_=b+(T<<20&4294967295|T>>>12),T=y+(b^A&(_^b))+I[9]+568446438&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^b&(y^_))+I[14]+3275163606&4294967295,A=y+(T<<9&4294967295|T>>>23),T=b+(y^_&(A^y))+I[3]+4107603335&4294967295,b=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(b^A))+I[8]+1163531501&4294967295,_=b+(T<<20&4294967295|T>>>12),T=y+(b^A&(_^b))+I[13]+2850285829&4294967295,y=_+(T<<5&4294967295|T>>>27),T=A+(_^b&(y^_))+I[2]+4243563512&4294967295,A=y+(T<<9&4294967295|T>>>23),T=b+(y^_&(A^y))+I[7]+1735328473&4294967295,b=A+(T<<14&4294967295|T>>>18),T=_+(A^y&(b^A))+I[12]+2368359562&4294967295,_=b+(T<<20&4294967295|T>>>12),T=y+(_^b^A)+I[5]+4294588738&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^b)+I[8]+2272392833&4294967295,A=y+(T<<11&4294967295|T>>>21),T=b+(A^y^_)+I[11]+1839030562&4294967295,b=A+(T<<16&4294967295|T>>>16),T=_+(b^A^y)+I[14]+4259657740&4294967295,_=b+(T<<23&4294967295|T>>>9),T=y+(_^b^A)+I[1]+2763975236&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^b)+I[4]+1272893353&4294967295,A=y+(T<<11&4294967295|T>>>21),T=b+(A^y^_)+I[7]+4139469664&4294967295,b=A+(T<<16&4294967295|T>>>16),T=_+(b^A^y)+I[10]+3200236656&4294967295,_=b+(T<<23&4294967295|T>>>9),T=y+(_^b^A)+I[13]+681279174&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^b)+I[0]+3936430074&4294967295,A=y+(T<<11&4294967295|T>>>21),T=b+(A^y^_)+I[3]+3572445317&4294967295,b=A+(T<<16&4294967295|T>>>16),T=_+(b^A^y)+I[6]+76029189&4294967295,_=b+(T<<23&4294967295|T>>>9),T=y+(_^b^A)+I[9]+3654602809&4294967295,y=_+(T<<4&4294967295|T>>>28),T=A+(y^_^b)+I[12]+3873151461&4294967295,A=y+(T<<11&4294967295|T>>>21),T=b+(A^y^_)+I[15]+530742520&4294967295,b=A+(T<<16&4294967295|T>>>16),T=_+(b^A^y)+I[2]+3299628645&4294967295,_=b+(T<<23&4294967295|T>>>9),T=y+(b^(_|~A))+I[0]+4096336452&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~b))+I[7]+1126891415&4294967295,A=y+(T<<10&4294967295|T>>>22),T=b+(y^(A|~_))+I[14]+2878612391&4294967295,b=A+(T<<15&4294967295|T>>>17),T=_+(A^(b|~y))+I[5]+4237533241&4294967295,_=b+(T<<21&4294967295|T>>>11),T=y+(b^(_|~A))+I[12]+1700485571&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~b))+I[3]+2399980690&4294967295,A=y+(T<<10&4294967295|T>>>22),T=b+(y^(A|~_))+I[10]+4293915773&4294967295,b=A+(T<<15&4294967295|T>>>17),T=_+(A^(b|~y))+I[1]+2240044497&4294967295,_=b+(T<<21&4294967295|T>>>11),T=y+(b^(_|~A))+I[8]+1873313359&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~b))+I[15]+4264355552&4294967295,A=y+(T<<10&4294967295|T>>>22),T=b+(y^(A|~_))+I[6]+2734768916&4294967295,b=A+(T<<15&4294967295|T>>>17),T=_+(A^(b|~y))+I[13]+1309151649&4294967295,_=b+(T<<21&4294967295|T>>>11),T=y+(b^(_|~A))+I[4]+4149444226&4294967295,y=_+(T<<6&4294967295|T>>>26),T=A+(_^(y|~b))+I[11]+3174756917&4294967295,A=y+(T<<10&4294967295|T>>>22),T=b+(y^(A|~_))+I[2]+718787259&4294967295,b=A+(T<<15&4294967295|T>>>17),T=_+(A^(b|~y))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var _=y-this.blockSize,I=this.B,b=this.h,A=0;A<y;){if(b==0)for(;A<=_;)s(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<y;)if(I[b++]=w.charCodeAt(A++),b==this.blockSize){s(this,I),b=0;break}}else for(;A<y;)if(I[b++]=w[A++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var _=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=_&255,_/=256;for(this.u(w),w=Array(16),y=_=0;4>y;++y)for(var I=0;32>I;I+=8)w[_++]=this.g[y]>>>I&255;return w};function i(w,y){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=y(w)}function o(w,y){this.h=y;for(var _=[],I=!0,b=w.length-1;0<=b;b--){var A=w[b]|0;I&&A==y||(_[b]=A,I=!1)}this.g=_}var l={};function c(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return N(u(-w));for(var y=[],_=1,I=0;w>=_;I++)y[I]=w/_|0,_*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return N(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),I=p,b=0;b<w.length;b+=8){var A=Math.min(8,w.length-b),T=parseInt(w.substring(b,b+A),y);8>A?(A=u(Math.pow(y,A)),I=I.j(A).add(u(T))):(I=I.j(_),I=I.add(u(T)))}return I}var p=c(0),m=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-N(this).m();for(var w=0,y=1,_=0;_<this.g.length;_++){var I=this.i(_);w+=(0<=I?I:4294967296+I)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(k(this))return"-"+N(this).toString(w);for(var y=u(Math.pow(w,6)),_=this,I="";;){var b=$(_,y).g;_=B(_,b.j(y));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=b,S(_))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function k(w){return w.h==-1}t.l=function(w){return w=B(this,w),k(w)?-1:S(w)?0:1};function N(w){for(var y=w.g.length,_=[],I=0;I<y;I++)_[I]=~w.g[I];return new o(_,~w.h).add(m)}t.abs=function(){return k(this)?N(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],I=0,b=0;b<=y;b++){var A=I+(this.i(b)&65535)+(w.i(b)&65535),T=(A>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);I=T>>>16,A&=65535,T&=65535,_[b]=T<<16|A}return new o(_,_[_.length-1]&-2147483648?-1:0)};function B(w,y){return w.add(N(y))}t.j=function(w){if(S(this)||S(w))return p;if(k(this))return k(w)?N(this).j(N(w)):N(N(this).j(w));if(k(w))return N(this.j(N(w)));if(0>this.l(v)&&0>w.l(v))return u(this.m()*w.m());for(var y=this.g.length+w.g.length,_=[],I=0;I<2*y;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<w.g.length;b++){var A=this.i(I)>>>16,T=this.i(I)&65535,Ee=w.i(b)>>>16,Ke=w.i(b)&65535;_[2*I+2*b]+=T*Ke,x(_,2*I+2*b),_[2*I+2*b+1]+=A*Ke,x(_,2*I+2*b+1),_[2*I+2*b+1]+=T*Ee,x(_,2*I+2*b+1),_[2*I+2*b+2]+=A*Ee,x(_,2*I+2*b+2)}for(I=0;I<y;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=y;I<2*y;I++)_[I]=0;return new o(_,0)};function x(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function q(w,y){this.g=w,this.h=y}function $(w,y){if(S(y))throw Error("division by zero");if(S(w))return new q(p,p);if(k(w))return y=$(N(w),y),new q(N(y.g),N(y.h));if(k(y))return y=$(w,N(y)),new q(N(y.g),y.h);if(30<w.g.length){if(k(w)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,I=y;0>=I.l(w);)_=X(_),I=X(I);var b=re(_,1),A=re(I,1);for(I=re(I,2),_=re(_,2);!S(I);){var T=A.add(I);0>=T.l(w)&&(b=b.add(_),A=T),I=re(I,1),_=re(_,1)}return y=B(w,b.j(y)),new q(b,y)}for(b=p;0<=w.l(y);){for(_=Math.max(1,Math.floor(w.m()/y.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=u(_),T=A.j(y);k(T)||0<T.l(w);)_-=I,A=u(_),T=A.j(y);S(A)&&(A=m),b=b.add(A),w=B(w,T)}return new q(b,w)}t.A=function(w){return $(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)&w.i(I);return new o(_,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)|w.i(I);return new o(_,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)^w.i(I);return new o(_,this.h^w.h)};function X(w){for(var y=w.g.length+1,_=[],I=0;I<y;I++)_[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(_,w.h)}function re(w,y){var _=y>>5;y%=32;for(var I=w.g.length-_,b=[],A=0;A<I;A++)b[A]=0<y?w.i(A+_)>>>y|w.i(A+_+1)<<32-y:w.i(A+_);return new o(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,qg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Ur=o}).apply(typeof Pd<"u"?Pd:typeof self<"u"?self:typeof window<"u"?window:{});var No=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $g,ii,Hg,$o,Rc,Wg,Kg,Gg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof No=="object"&&No];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in d))break e;d=d[C]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,C={next:function(){if(!g&&d<a.length){var V=d++;return{value:h(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function v(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,C,V){for(var K=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)K[Ve-2]=arguments[Ve];return h.prototype[C].apply(g,K)}}function k(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function N(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const C=a.length||0,V=g.length||0;a.length=C+V;for(let K=0;K<V;K++)a[C+K]=g[K]}else a.push(g)}}class B{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var X=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function re(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function w(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let d,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(d in g)a[d]=g[d];for(let V=0;V<_.length;V++)d=_[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function b(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function A(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Nt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ee{constructor(){this.h=this.g=null}add(h,d){const g=Ke.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Ke=new B(()=>new ke,a=>a.reset());class ke{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,_e=!1,Nt=new Ee,zt=()=>{const a=l.Promise.resolve(void 0);ce=()=>{a.then(Bt)}};var Bt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){A(d)}var h=Ke;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}_e=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var $n=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function Vt(a,h){if(Ue.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(X){e:{try{$(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ct[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Vt.aa.h.call(this)}}S(Vt,Ue);var Ct={2:"touch",3:"pen",4:"mouse"};Vt.prototype.h=function(){Vt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),J=0;function z(a,h,d,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=C,this.key=++J,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function me(a){this.src=a,this.g={},this.h=0}me.prototype.add=function(a,h,d,g,C){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var K=R(a,h,g,C);return-1<K?(h=a[K],d||(h.fa=!1)):(h=new z(h,this.src,V,!!g,C),h.fa=d,a.push(h)),h};function E(a,h){var d=h.type;if(d in a.g){var g=a.g[d],C=Array.prototype.indexOf.call(g,h,void 0),V;(V=0<=C)&&Array.prototype.splice.call(g,C,1),V&&(ee(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function R(a,h,d,g){for(var C=0;C<a.length;++C){var V=a[C];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==g)return C}return-1}var P="closure_lm_"+(1e6*Math.random()|0),D={};function L(a,h,d,g,C){if(Array.isArray(h)){for(var V=0;V<h.length;V++)L(a,h[V],d,g,C);return null}return d=ae(d),a&&a[M]?a.K(h,d,u(g)?!!g.capture:!1,C):O(a,h,d,!1,g,C)}function O(a,h,d,g,C,V){if(!h)throw Error("Invalid event type");var K=u(C)?!!C.capture:!!C,Ve=Q(a);if(Ve||(a[P]=Ve=new me(a)),d=Ve.add(h,d,g,K,V),d.proxy)return d;if(g=G(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)$n||(C=K),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(U(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return h.call(a.src,a.listener,d)}const h=ie;return a}function W(a,h,d,g,C){if(Array.isArray(h))for(var V=0;V<h.length;V++)W(a,h[V],d,g,C);else g=u(g)?!!g.capture:!!g,d=ae(d),a&&a[M]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],d=R(V,d,g,C),-1<d&&(ee(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Q(a))&&(h=a.g[h.toString()],a=-1,h&&(a=R(h,d,g,C)),(d=-1<a?h[a]:null)&&H(d))}function H(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[M])E(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(U(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Q(h))?(E(d,a),d.h==0&&(d.src=null,h[P]=null)):ee(a)}}}function U(a){return a in D?D[a]:D[a]="on"+a}function ie(a,h){if(a.da)a=!0;else{h=new Vt(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&H(a),a=d.call(g,h)}return a}function Q(a){return a=a[P],a instanceof me?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[te]||(a[te]=function(h){return a.handleEvent(h)}),a[te])}function oe(){Le.call(this),this.i=new me(this),this.M=this,this.F=null}S(oe,Le),oe.prototype[M]=!0,oe.prototype.removeEventListener=function(a,h,d,g){W(this,a,h,d,g)};function pe(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ue(h,a);else if(h instanceof Ue)h.target=h.target||a;else{var C=h;h=new Ue(g,a),I(h,C)}if(C=!0,d)for(var V=d.length-1;0<=V;V--){var K=h.g=d[V];C=Ie(K,g,!0,h)&&C}if(K=h.g=a,C=Ie(K,g,!0,h)&&C,C=Ie(K,g,!1,h)&&C,d)for(V=0;V<d.length;V++)K=h.g=d[V],C=Ie(K,g,!1,h)&&C}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)ee(d[g]);delete a.g[h],a.h--}}this.F=null},oe.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},oe.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function Ie(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,V=0;V<h.length;++V){var K=h[V];if(K&&!K.da&&K.capture==d){var Ve=K.listener,st=K.ha||K.src;K.fa&&E(a.i,K),C=Ve.call(st,g)!==!1&&C}}return C&&!g.defaultPrevented}function Be(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function ze(a){a.g=Be(()=>{a.g=null,a.i&&(a.i=!1,ze(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class jt extends Le{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ze(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ht(a){Le.call(this),this.h=a,this.g={}}S(ht,Le);var Hn=[];function Ms(a){re(a.g,function(h,d){this.g.hasOwnProperty(d)&&H(h)},a),a.g={}}ht.prototype.N=function(){ht.aa.N.call(this),Ms(this)},ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rt=l.JSON.stringify,qt=l.JSON.parse,oo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Xr(){}Xr.prototype.h=null;function eh(a){return a.h||(a.h=a.i())}function th(){}var Ls={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ll(){Ue.call(this,"d")}S(ll,Ue);function cl(){Ue.call(this,"c")}S(cl,Ue);var Ir={},nh=null;function ao(){return nh=nh||new oe}Ir.La="serverreachability";function rh(a){Ue.call(this,Ir.La,a)}S(rh,Ue);function Fs(a){const h=ao();pe(h,new rh(h))}Ir.STAT_EVENT="statevent";function sh(a,h){Ue.call(this,Ir.STAT_EVENT,a),this.stat=h}S(sh,Ue);function It(a){const h=ao();pe(h,new sh(h,a))}Ir.Ma="timingevent";function ih(a,h){Ue.call(this,Ir.Ma,a),this.size=h}S(ih,Ue);function Us(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Bs(){this.g=!0}Bs.prototype.xa=function(){this.g=!1};function my(a,h,d,g,C,V){a.info(function(){if(a.g)if(V)for(var K="",Ve=V.split("&"),st=0;st<Ve.length;st++){var Re=Ve[st].split("=");if(1<Re.length){var ft=Re[0];Re=Re[1];var dt=ft.split("_");K=2<=dt.length&&dt[1]=="type"?K+(ft+"="+Re+"&"):K+(ft+"=redacted&")}}else K=null;else K=V;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+d+`
`+K})}function gy(a,h,d,g,C,V,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+d+`
`+V+" "+K})}function Zr(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+yy(a,d)+(g?" "+g:"")})}function _y(a,h){a.info(function(){return"TIMEOUT: "+h})}Bs.prototype.info=function(){};function yy(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var V=C[0];if(V!="noop"&&V!="stop"&&V!="close")for(var K=1;K<C.length;K++)C[K]=""}}}}return rt(d)}catch{return h}}var lo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},oh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ul;function co(){}S(co,Xr),co.prototype.g=function(){return new XMLHttpRequest},co.prototype.i=function(){return{}},ul=new co;function Wn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new ht(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ah}function ah(){this.i=null,this.g="",this.h=!1}var lh={},hl={};function fl(a,h,d){a.L=1,a.v=po(yn(h)),a.m=d,a.P=!0,ch(a,null)}function ch(a,h){a.F=Date.now(),uo(a),a.A=yn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),wh(d.i,"t",g),a.C=0,d=a.j.J,a.h=new ah,a.g=jh(a.j,d?h:null,!a.m),0<a.O&&(a.M=new jt(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Hn[0]=C.toString()),C=Hn);for(var V=0;V<C.length;V++){var K=L(d,C[V],g||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Fs(),my(a.i,a.u,a.A,a.l,a.R,a.m)}Wn.prototype.ca=function(a){a=a.target;const h=this.M;h&&vn(a)==3?h.j():this.Y(a)},Wn.prototype.Y=function(a){try{if(a==this.g)e:{const dt=vn(this.g);var h=this.g.Ba();const ns=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||kh(this.g)))){this.J||dt!=4||h==7||(h==8||0>=ns?Fs(3):Fs(2)),dl(this);var d=this.g.Z();this.X=d;t:if(uh(this)){var g=kh(this.g);a="";var C=g.length,V=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wr(this),js(this);var K="";break t}this.h.i=new l.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(V&&h==C-1)});g.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=d==200,gy(this.i,this.u,this.A,this.l,this.R,dt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,st=this.g;if((Ve=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Ve)){var Re=Ve;break t}}Re=null}if(d=Re)Zr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pl(this,d);else{this.o=!1,this.s=3,It(12),wr(this),js(this);break e}}if(this.P){d=!0;let Qt;for(;!this.J&&this.C<K.length;)if(Qt=vy(this,K),Qt==hl){dt==4&&(this.s=4,It(14),d=!1),Zr(this.i,this.l,null,"[Incomplete Response]");break}else if(Qt==lh){this.s=4,It(15),Zr(this.i,this.l,K,"[Invalid Chunk]"),d=!1;break}else Zr(this.i,this.l,Qt,null),pl(this,Qt);if(uh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||K.length!=0||this.h.h||(this.s=1,It(16),d=!1),this.o=this.o&&d,!d)Zr(this.i,this.l,K,"[Invalid Chunked Response]"),wr(this),js(this);else if(0<K.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),El(ft),ft.M=!0,It(11))}}else Zr(this.i,this.l,K,null),pl(this,K);dt==4&&wr(this),this.o&&!this.J&&(dt==4?Lh(this.j,this):(this.o=!1,uo(this)))}else My(this.g),d==400&&0<K.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),wr(this),js(this)}}}catch{}finally{}};function uh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function vy(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?hl:(d=Number(h.substring(d,g)),isNaN(d)?lh:(g+=1,g+d>h.length?hl:(h=h.slice(g,g+d),a.C=g+d,h)))}Wn.prototype.cancel=function(){this.J=!0,wr(this)};function uo(a){a.S=Date.now()+a.I,hh(a,a.I)}function hh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Us(m(a.ba,a),h)}function dl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Wn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(_y(this.i,this.A),this.L!=2&&(Fs(),It(17)),wr(this),this.s=2,js(this)):hh(this,this.S-a)};function js(a){a.j.G==0||a.J||Lh(a.j,a)}function wr(a){dl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Ms(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function pl(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||ml(d.h,a))){if(!a.K&&ml(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Eo(d),yo(d);else break e;vl(d),It(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Us(m(d.Za,d),6e3));if(1>=ph(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Rr(d,11)}else if((a.K||d.g==a)&&Eo(d),!x(h))for(C=d.Da.g.parse(h),h=0;h<C.length;h++){let Re=C[h];if(d.T=Re[0],Re=Re[1],d.G==2)if(Re[0]=="c"){d.K=Re[1],d.ia=Re[2];const ft=Re[3];ft!=null&&(d.la=ft,d.j.info("VER="+d.la));const dt=Re[4];dt!=null&&(d.Aa=dt,d.j.info("SVER="+d.Aa));const ns=Re[5];ns!=null&&typeof ns=="number"&&0<ns&&(g=1.5*ns,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Qt=a.g;if(Qt){const Io=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Io){var V=g.h;V.g||Io.indexOf("spdy")==-1&&Io.indexOf("quic")==-1&&Io.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(gl(V,V.h),V.h=null))}if(g.D){const Tl=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Tl&&(g.ya=Tl,xe(g.I,g.D,Tl))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var K=a;if(g.qa=Bh(g,g.J?g.ia:null,g.W),K.K){mh(g.h,K);var Ve=K,st=g.L;st&&(Ve.I=st),Ve.B&&(dl(Ve),uo(Ve)),g.g=K}else xh(g);0<d.i.length&&vo(d)}else Re[0]!="stop"&&Re[0]!="close"||Rr(d,7);else d.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Rr(d,7):yl(d):Re[0]!="noop"&&d.l&&d.l.ta(Re),d.v=0)}}Fs(4)}catch{}}var Ey=class{constructor(a,h){this.g=a,this.map=h}};function fh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function dh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ph(a){return a.h?1:a.g?a.g.size:0}function ml(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function gl(a,h){a.g?a.g.add(h):a.h=h}function mh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}fh.prototype.cancel=function(){if(this.i=gh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function gh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return k(a.i)}function Ty(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function Iy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function _h(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=Iy(a),g=Ty(a),C=g.length,V=0;V<C;V++)h.call(void 0,g[V],d&&d[V],a)}var yh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wy(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),C=null;if(0<=g){var V=a[d].substring(0,g);C=a[d].substring(g+1)}else V=a[d];h(V,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Ar(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ar){this.h=a.h,ho(this,a.j),this.o=a.o,this.g=a.g,fo(this,a.s),this.l=a.l;var h=a.i,d=new Hs;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),vh(this,d),this.m=a.m}else a&&(h=String(a).match(yh))?(this.h=!1,ho(this,h[1]||"",!0),this.o=qs(h[2]||""),this.g=qs(h[3]||"",!0),fo(this,h[4]),this.l=qs(h[5]||"",!0),vh(this,h[6]||"",!0),this.m=qs(h[7]||"")):(this.h=!1,this.i=new Hs(null,this.h))}Ar.prototype.toString=function(){var a=[],h=this.j;h&&a.push($s(h,Eh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push($s(h,Eh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push($s(d,d.charAt(0)=="/"?by:Ry,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",$s(d,Py)),a.join("")};function yn(a){return new Ar(a)}function ho(a,h,d){a.j=d?qs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function fo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function vh(a,h,d){h instanceof Hs?(a.i=h,Cy(a.i,a.h)):(d||(h=$s(h,Sy)),a.i=new Hs(h,a.h))}function xe(a,h,d){a.i.set(h,d)}function po(a){return xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function qs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function $s(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,Ay),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Ay(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Eh=/[#\/\?@]/g,Ry=/[#\?:]/g,by=/[#\?]/g,Sy=/[#\?@]/g,Py=/#/g;function Hs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Kn(a){a.g||(a.g=new Map,a.h=0,a.i&&wy(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Hs.prototype,t.add=function(a,h){Kn(this),this.i=null,a=es(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Th(a,h){Kn(a),h=es(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ih(a,h){return Kn(a),h=es(a,h),a.g.has(h)}t.forEach=function(a,h){Kn(this),this.g.forEach(function(d,g){d.forEach(function(C){a.call(h,C,g,this)},this)},this)},t.na=function(){Kn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const C=a[g];for(let V=0;V<C.length;V++)d.push(h[g])}return d},t.V=function(a){Kn(this);let h=[];if(typeof a=="string")Ih(this,a)&&(h=h.concat(this.g.get(es(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Kn(this),this.i=null,a=es(this,a),Ih(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function wh(a,h,d){Th(a,h),0<d.length&&(a.i=null,a.g.set(es(a,h),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const V=encodeURIComponent(String(g)),K=this.V(g);for(g=0;g<K.length;g++){var C=V;K[g]!==""&&(C+="="+encodeURIComponent(String(K[g]))),a.push(C)}}return this.i=a.join("&")};function es(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Cy(a,h){h&&!a.j&&(Kn(a),a.i=null,a.g.forEach(function(d,g){var C=g.toLowerCase();g!=C&&(Th(this,g),wh(this,C,d))},a)),a.j=h}function ky(a,h){const d=new Bs;if(l.Image){const g=new Image;g.onload=v(Gn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=v(Gn,d,"TestLoadImage: error",!1,h,g),g.onabort=v(Gn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=v(Gn,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Ny(a,h){const d=new Bs,g=new AbortController,C=setTimeout(()=>{g.abort(),Gn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(C),V.ok?Gn(d,"TestPingServer: ok",!0,h):Gn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Gn(d,"TestPingServer: error",!1,h)})}function Gn(a,h,d,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(d)}catch{}}function Vy(){this.g=new oo}function Dy(a,h,d){const g=d||"";try{_h(a,function(C,V){let K=C;u(C)&&(K=rt(C)),h.push(g+V+"="+encodeURIComponent(K))})}catch(C){throw h.push(g+"type="+encodeURIComponent("_badmap")),C}}function mo(a){this.l=a.Ub||null,this.j=a.eb||!1}S(mo,Xr),mo.prototype.g=function(){return new go(this.l,this.j)},mo.prototype.i=function(a){return function(){return a}}({});function go(a,h){oe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(go,oe),t=go.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ks(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ws(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ks(this)),this.g&&(this.readyState=3,Ks(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ah(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ah(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ws(this):Ks(this),this.readyState==3&&Ah(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ws(this))},t.Qa=function(a){this.g&&(this.response=a,Ws(this))},t.ga=function(){this.g&&Ws(this)};function Ws(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ks(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ks(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(go.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Rh(a){let h="";return re(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function _l(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Rh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):xe(a,h,d))}function qe(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(qe,oe);var Oy=/^https?$/i,xy=["POST","PUT"];t=qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ul.g(),this.v=this.o?eh(this.o):eh(ul),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){bh(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)d.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(xy,h,void 0))||g||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,K]of d)this.g.setRequestHeader(V,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ch(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){bh(this,V)}};function bh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Sh(a),_o(a)}function Sh(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pe(this,"complete"),pe(this,"abort"),_o(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_o(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ph(this):this.bb())},t.bb=function(){Ph(this)};function Ph(a){if(a.h&&typeof o<"u"&&(!a.v[1]||vn(a)!=4||a.Z()!=2)){if(a.u&&vn(a)==4)Be(a.Ea,0,a);else if(pe(a,"readystatechange"),vn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=K===0){var C=String(a.D).match(yh)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!Oy.test(C?C.toLowerCase():"")}d=g}if(d)pe(a,"complete"),pe(a,"success");else{a.m=6;try{var V=2<vn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Sh(a)}}finally{_o(a)}}}}function _o(a,h){if(a.g){Ch(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||pe(a,"ready");try{d.onreadystatechange=g}catch{}}}function Ch(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function vn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),qt(h)}};function kh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function My(a){const h={};a=(a.g&&2<=vn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(x(a[g]))continue;var d=b(a[g]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[C]||[];h[C]=V,V.push(d)}w(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Nh(a){this.Aa=0,this.i=[],this.j=new Bs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gs("baseRetryDelayMs",5e3,a),this.cb=Gs("retryDelaySeedMs",1e4,a),this.Wa=Gs("forwardChannelMaxRetries",2,a),this.wa=Gs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new fh(a&&a.concurrentRequestLimit),this.Da=new Vy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Nh.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){It(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Bh(this,null,this.W),vo(this)};function yl(a){if(Vh(a),a.G==3){var h=a.U++,d=yn(a.I);if(xe(d,"SID",a.K),xe(d,"RID",h),xe(d,"TYPE","terminate"),zs(a,d),h=new Wn(a,a.j,h),h.L=2,h.v=po(yn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=jh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),uo(h)}Uh(a)}function yo(a){a.g&&(El(a),a.g.cancel(),a.g=null)}function Vh(a){yo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Eo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function vo(a){if(!dh(a.h)&&!a.s){a.s=!0;var h=a.Ga;ce||zt(),_e||(ce(),_e=!0),Nt.add(h,a),a.B=0}}function Ly(a,h){return ph(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Us(m(a.Ga,a,h),Fh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Wn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),I(V,this.S)):V=this.S),this.m!==null||this.O||(C.H=V,V=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Oh(this,C,h),d=yn(this.I),xe(d,"RID",a),xe(d,"CVER",22),this.D&&xe(d,"X-HTTP-Session-Id",this.D),zs(this,d),V&&(this.O?h="headers="+encodeURIComponent(String(Rh(V)))+"&"+h:this.m&&_l(d,this.m,V)),gl(this.h,C),this.Ua&&xe(d,"TYPE","init"),this.P?(xe(d,"$req",h),xe(d,"SID","null"),C.T=!0,fl(C,d,null)):fl(C,d,h),this.G=2}}else this.G==3&&(a?Dh(this,a):this.i.length==0||dh(this.h)||Dh(this))};function Dh(a,h){var d;h?d=h.l:d=a.U++;const g=yn(a.I);xe(g,"SID",a.K),xe(g,"RID",d),xe(g,"AID",a.T),zs(a,g),a.m&&a.o&&_l(g,a.m,a.o),d=new Wn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Oh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),gl(a.h,d),fl(d,g,h)}function zs(a,h){a.H&&re(a.H,function(d,g){xe(h,g,d)}),a.l&&_h({},function(d,g){xe(h,g,d)})}function Oh(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let V=-1;for(;;){const K=["count="+d];V==-1?0<d?(V=C[0].g,K.push("ofs="+V)):V=0:K.push("ofs="+V);let Ve=!0;for(let st=0;st<d;st++){let Re=C[st].g;const ft=C[st].map;if(Re-=V,0>Re)V=Math.max(0,C[st].g-100),Ve=!1;else try{Dy(ft,K,"req"+Re+"_")}catch{g&&g(ft)}}if(Ve){g=K.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function xh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ce||zt(),_e||(ce(),_e=!0),Nt.add(h,a),a.v=0}}function vl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Us(m(a.Fa,a),Fh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Mh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Us(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),yo(this),Mh(this))};function El(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Mh(a){a.g=new Wn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=yn(a.qa);xe(h,"RID","rpc"),xe(h,"SID",a.K),xe(h,"AID",a.T),xe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&xe(h,"TO",a.ja),xe(h,"TYPE","xmlhttp"),zs(a,h),a.m&&a.o&&_l(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=po(yn(h)),d.m=null,d.P=!0,ch(d,a)}t.Za=function(){this.C!=null&&(this.C=null,yo(this),vl(this),It(19))};function Eo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Lh(a,h){var d=null;if(a.g==h){Eo(a),El(a),a.g=null;var g=2}else if(ml(a.h,h))d=h.D,mh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;g=ao(),pe(g,new ih(g,d)),vo(a)}else xh(a);else if(C=h.s,C==3||C==0&&0<h.X||!(g==1&&Ly(a,h)||g==2&&vl(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),C){case 1:Rr(a,5);break;case 4:Rr(a,10);break;case 3:Rr(a,6);break;default:Rr(a,2)}}}function Fh(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Rr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const C=!g;g=new Ar(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ho(g,"https"),po(g),C?ky(g.toString(),d):Ny(g.toString(),d)}else It(2);a.G=0,a.l&&a.l.sa(h),Uh(a),Vh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Uh(a){if(a.G=0,a.ka=[],a.l){const h=gh(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Bh(a,h,d){var g=d instanceof Ar?yn(d):new Ar(d);if(g.g!="")h&&(g.g=h+"."+g.g),fo(g,g.s);else{var C=l.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var V=new Ar(null);g&&ho(V,g),h&&(V.g=h),C&&fo(V,C),d&&(V.l=d),g=V}return d=a.D,h=a.ya,d&&h&&xe(g,d,h),xe(g,"VER",a.la),zs(a,g),g}function jh(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new qe(new mo({eb:d})):new qe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function qh(){}t=qh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function To(){}To.prototype.g=function(a,h){return new Dt(a,h)};function Dt(a,h){oe.call(this),this.g=new Nh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!x(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ts(this)}S(Dt,oe),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){yl(this.g)},Dt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=rt(a),a=d);h.i.push(new Ey(h.Ya++,a)),h.G==3&&vo(h)},Dt.prototype.N=function(){this.g.l=null,delete this.j,yl(this.g),delete this.g,Dt.aa.N.call(this)};function $h(a){ll.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S($h,ll);function Hh(){cl.call(this),this.status=1}S(Hh,cl);function ts(a){this.g=a}S(ts,qh),ts.prototype.ua=function(){pe(this.g,"a")},ts.prototype.ta=function(a){pe(this.g,new $h(a))},ts.prototype.sa=function(a){pe(this.g,new Hh)},ts.prototype.ra=function(){pe(this.g,"b")},To.prototype.createWebChannel=To.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,Gg=function(){return new To},Kg=function(){return ao()},Wg=Ir,Rc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},lo.NO_ERROR=0,lo.TIMEOUT=8,lo.HTTP_ERROR=6,$o=lo,oh.COMPLETE="complete",Hg=oh,th.EventType=Ls,Ls.OPEN="a",Ls.CLOSE="b",Ls.ERROR="c",Ls.MESSAGE="d",oe.prototype.listen=oe.prototype.K,ii=th,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,$g=qe}).apply(typeof No<"u"?No:typeof self<"u"?self:typeof window<"u"?window:{});const Cd="@firebase/firestore";/**
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
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
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
 */let Vs="10.14.0";/**
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
 */const $r=new au("@firebase/firestore");function Zs(){return $r.logLevel}function Z(t,...e){if($r.logLevel<=ve.DEBUG){const n=e.map(vu);$r.debug(`Firestore (${Vs}): ${t}`,...n)}}function Un(t,...e){if($r.logLevel<=ve.ERROR){const n=e.map(vu);$r.error(`Firestore (${Vs}): ${t}`,...n)}}function ws(t,...e){if($r.logLevel<=ve.WARN){const n=e.map(vu);$r.warn(`Firestore (${Vs}): ${t}`,...n)}}function vu(t){if(typeof t=="string")return t;try{/**
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
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${Vs}) INTERNAL ASSERTION FAILED: `+t;throw Un(e),new Error(e)}function Ne(t,e){t||ue()}function de(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class zg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class VR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DR{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new zg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new mt(e)}}class OR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new OR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ne(this.o===void 0);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new MR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function FR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Qg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=FR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function As(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new Ze(0,0))}static max(){return new he(new Ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class xi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Me extends xi{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Me(n)}static emptyPath(){return new Me([])}}const UR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends xi{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return UR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Y(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Me.fromString(e))}static fromName(e){return new se(Me.fromString(e).popFirst(5))}static empty(){return new se(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Me(e.slice()))}}function BR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Ze(n+1,0):new Ze(n,r));return new gr(s,se.empty(),e)}function jR(t){return new gr(t.readTime,t.key,-1)}class gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gr(he.min(),se.empty(),-1)}static max(){return new gr(he.max(),se.empty(),-1)}}function qR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const $R="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Zi(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==$R)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function WR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function eo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Eu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Eu.oe=-1;function Ha(t){return t==null}function fa(t){return t===0&&1/t==-1/0}function KR(t){return typeof t=="number"&&Number.isInteger(t)&&!fa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function kd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Yg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class je{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vo(this.root,e,this.comparator,!0)}}class Vo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=i??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new it(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,i){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nd(this.data.getIterator())}getIteratorFrom(e){return new Nd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class Nd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new ct(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return As(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Jg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Jg("Invalid base64 string: "+i):i}}(e);return new ut(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const GR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=GR.exec(t);if(Ne(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hr(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
 */function Tu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Iu(t){const e=t.mapValue.fields.__previous_value__;return Tu(e)?Iu(e):e}function Mi(t){const e=_r(t.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}/**
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
 */class zR{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Li{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Li("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Li&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Do={mapValue:{}};function Wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tu(t)?4:YR(t)?9007199254740991:QR(t)?10:11:ue()}function _n(t,e){if(t===e)return!0;const n=Wr(t);if(n!==Wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mi(t).isEqual(Mi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=_r(s.timestampValue),l=_r(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Hr(s.bytesValue).isEqual(Hr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),l=Ge(i.doubleValue);return o===l?fa(o)===fa(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return As(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(kd(o)!==kd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!_n(o[c],l[c])))return!1;return!0}(t,e);default:return ue()}}function Fi(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=Wr(t),r=Wr(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ge(i.integerValue||i.doubleValue),c=Ge(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Vd(t.timestampValue,e.timestampValue);case 4:return Vd(Mi(t),Mi(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Hr(i),c=Hr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=be(l[u],c[u]);if(f!==0)return f}return be(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=be(Ge(i.latitude),Ge(o.latitude));return l!==0?l:be(Ge(i.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Dd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,f;const p=i.fields||{},m=o.fields||{},v=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=(c=m.value)===null||c===void 0?void 0:c.arrayValue,k=be(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Dd(v,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Do.mapValue&&o===Do.mapValue)return 0;if(i===Do.mapValue)return 1;if(o===Do.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=be(c[p],f[p]);if(m!==0)return m;const v=Rs(l[c[p]],u[f[p]]);if(v!==0)return v}return be(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ue()}}function Vd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=_r(t),r=_r(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function Dd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Rs(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function bs(t){return bc(t)}function bc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_r(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Hr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=bc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${bc(n.fields[o])}`;return s+"}"}(t.mapValue):ue()}function Od(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sc(t){return!!t&&"integerValue"in t}function wu(t){return!!t&&"arrayValue"in t}function xd(t){return!!t&&"nullValue"in t}function Md(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ho(t){return!!t&&"mapValue"in t}function QR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ho(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yi(n)}setAll(e){let n=at.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=yi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ho(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ho(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){zr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(yi(this.value))}}function Xg(t){const e=[];return zr(t.fields,(n,r)=>{const s=new at([n]);if(Ho(r)){const i=Xg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Lt(e)}/**
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
 */class _t{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new _t(e,0,he.min(),he.min(),he.min(),kt.empty(),0)}static newFoundDocument(e,n,r,s){return new _t(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new _t(e,2,n,he.min(),he.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,he.min(),he.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class da{constructor(e,n){this.position=e,this.inclusive=n}}function Ld(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ui{constructor(e,n="asc"){this.field=e,this.dir=n}}function JR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Zg{}class Ye extends Zg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ZR(e,n,r):n==="array-contains"?new nb(e,r):n==="in"?new rb(e,r):n==="not-in"?new sb(e,r):n==="array-contains-any"?new ib(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new eb(e,r):new tb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&Wr(this.value)===Wr(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends Zg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new tn(e,n)}matches(e){return e_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function e_(t){return t.op==="and"}function t_(t){return XR(t)&&e_(t)}function XR(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function Pc(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+bs(t.value);if(t_(t))return t.filters.map(e=>Pc(e)).join(",");{const e=t.filters.map(n=>Pc(n)).join(",");return`${t.op}(${e})`}}function n_(t,e){return t instanceof Ye?function(r,s){return s instanceof Ye&&r.op===s.op&&r.field.isEqual(s.field)&&_n(r.value,s.value)}(t,e):t instanceof tn?function(r,s){return s instanceof tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&n_(o,s.filters[l]),!0):!1}(t,e):void ue()}function r_(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${bs(n.value)}`}(t):t instanceof tn?function(n){return n.op.toString()+" {"+n.getFilters().map(r_).join(" ,")+"}"}(t):"Filter"}class ZR extends Ye{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class eb extends Ye{constructor(e,n){super(e,"in",n),this.keys=s_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tb extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=s_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function s_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class nb extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wu(n)&&Fi(n.arrayValue,this.value)}}class rb extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fi(this.value.arrayValue,n)}}class sb extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fi(this.value.arrayValue,n)}}class ib extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fi(this.value.arrayValue,r))}}/**
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
 */class ob{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Ud(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ob(t,e,n,r,s,i,o)}function Au(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ha(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>bs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>bs(r)).join(",")),e.ue=n}return e.ue}function Ru(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!n_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fd(t.startAt,e.startAt)&&Fd(t.endAt,e.endAt)}function Cc(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ds{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ab(t,e,n,r,s,i,o,l){return new Ds(t,e,n,r,s,i,o,l)}function bu(t){return new Ds(t)}function Bd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function i_(t){return t.collectionGroup!==null}function vi(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ct(at.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ui(i,r))}),n.has(at.keyField().canonicalString())||e.ce.push(new Ui(at.keyField(),r))}return e.ce}function pn(t){const e=de(t);return e.le||(e.le=lb(e,vi(t))),e.le}function lb(t,e){if(t.limitType==="F")return Ud(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ui(s.field,i)});const n=t.endAt?new da(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new da(t.startAt.position,t.startAt.inclusive):null;return Ud(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kc(t,e){const n=t.filters.concat([e]);return new Ds(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Nc(t,e,n){return new Ds(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wa(t,e){return Ru(pn(t),pn(e))&&t.limitType===e.limitType}function o_(t){return`${Au(pn(t))}|lt:${t.limitType}`}function as(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>r_(s)).join(", ")}]`),Ha(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>bs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>bs(s)).join(",")),`Target(${r})`}(pn(t))}; limitType=${t.limitType})`}function Ka(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of vi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Ld(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,vi(r),s)||r.endAt&&!function(o,l,c){const u=Ld(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,vi(r),s))}(t,e)}function cb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function a_(t){return(e,n)=>{let r=!1;for(const s of vi(t)){const i=ub(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ub(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Rs(c,u):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
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
 */class Os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Yg(this.inner)}size(){return this.innerSize}}/**
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
 */const hb=new je(se.comparator);function Bn(){return hb}const l_=new je(se.comparator);function oi(...t){let e=l_;for(const n of t)e=e.insert(n.key,n);return e}function c_(t){let e=l_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Mr(){return Ei()}function u_(){return Ei()}function Ei(){return new Os(t=>t.toString(),(t,e)=>t.isEqual(e))}const fb=new je(se.comparator),db=new ct(se.comparator);function ye(...t){let e=db;for(const n of t)e=e.add(n);return e}const pb=new ct(be);function mb(){return pb}/**
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
 */function Su(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fa(e)?"-0":e}}function h_(t){return{integerValue:""+t}}function gb(t,e){return KR(e)?h_(e):Su(t,e)}/**
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
 */class Ga{constructor(){this._=void 0}}function _b(t,e,n){return t instanceof Bi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Tu(i)&&(i=Iu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ji?d_(t,e):t instanceof qi?p_(t,e):function(s,i){const o=f_(s,i),l=jd(o)+jd(s.Pe);return Sc(o)&&Sc(s.Pe)?h_(l):Su(s.serializer,l)}(t,e)}function yb(t,e,n){return t instanceof ji?d_(t,e):t instanceof qi?p_(t,e):n}function f_(t,e){return t instanceof pa?function(r){return Sc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Bi extends Ga{}class ji extends Ga{constructor(e){super(),this.elements=e}}function d_(t,e){const n=m_(e);for(const r of t.elements)n.some(s=>_n(s,r))||n.push(r);return{arrayValue:{values:n}}}class qi extends Ga{constructor(e){super(),this.elements=e}}function p_(t,e){let n=m_(e);for(const r of t.elements)n=n.filter(s=>!_n(s,r));return{arrayValue:{values:n}}}class pa extends Ga{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function jd(t){return Ge(t.integerValue||t.doubleValue)}function m_(t){return wu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class vb{constructor(e,n){this.field=e,this.transform=n}}function Eb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ji&&s instanceof ji||r instanceof qi&&s instanceof qi?As(r.elements,s.elements,_n):r instanceof pa&&s instanceof pa?_n(r.Pe,s.Pe):r instanceof Bi&&s instanceof Bi}(t.transform,e.transform)}class Tb{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class za{}function g_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Pu(t.key,Wt.none()):new to(t.key,t.data,Wt.none());{const n=t.data,r=kt.empty();let s=new ct(at.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Tr(t.key,r,new Lt(s.toArray()),Wt.none())}}function Ib(t,e,n){t instanceof to?function(s,i,o){const l=s.value.clone(),c=$d(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Tr?function(s,i,o){if(!Wo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=$d(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(__(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ti(t,e,n,r){return t instanceof to?function(i,o,l,c){if(!Wo(i.precondition,o))return l;const u=i.value.clone(),f=Hd(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Tr?function(i,o,l,c){if(!Wo(i.precondition,o))return l;const u=Hd(i.fieldTransforms,c,o),f=o.data;return f.setAll(__(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Wo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function wb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=f_(r.transform,s||null);i!=null&&(n===null&&(n=kt.empty()),n.set(r.field,i))}return n||null}function qd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&As(r,s,(i,o)=>Eb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class to extends za{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Tr extends za{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function __(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $d(t,e,n){const r=new Map;Ne(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,yb(o,l,n[s]))}return r}function Hd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,_b(i,o,e))}return r}class Pu extends za{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ab extends za{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Rb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Ib(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ti(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ti(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=u_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=g_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&As(this.mutations,e.mutations,(n,r)=>qd(n,r))&&As(this.baseMutations,e.baseMutations,(n,r)=>qd(n,r))}}class Cu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length);let s=function(){return fb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Cu(e,n,r,s)}}/**
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
 */class bb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Sb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Qe,Te;function Pb(t){switch(t){default:return ue();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function y_(t){if(t===void 0)return Un("GRPC error has no .code"),F.UNKNOWN;switch(t){case Qe.OK:return F.OK;case Qe.CANCELLED:return F.CANCELLED;case Qe.UNKNOWN:return F.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return F.INTERNAL;case Qe.UNAVAILABLE:return F.UNAVAILABLE;case Qe.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Qe.NOT_FOUND:return F.NOT_FOUND;case Qe.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Qe.ABORTED:return F.ABORTED;case Qe.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Qe.DATA_LOSS:return F.DATA_LOSS;default:return ue()}}(Te=Qe||(Qe={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Cb(){return new TextEncoder}/**
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
 */const kb=new Ur([4294967295,4294967295],0);function Wd(t){const e=Cb().encode(t),n=new qg;return n.update(e),new Uint8Array(n.digest())}function Kd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ur([n,r],0),new Ur([s,i],0)]}class ku{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ai(`Invalid padding: ${n}`);if(r<0)throw new ai(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ai(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ai(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ur.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Ur.fromNumber(r)));return s.compare(kb)===1&&(s=new Ur([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Wd(e),[r,s]=Kd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ku(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Wd(e),[r,s]=Kd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ai extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Qa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,no.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Qa(he.min(),s,new je(be),Bn(),ye())}}class no{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new no(r,n,ye(),ye(),ye())}}/**
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
 */class Ko{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class v_{constructor(e,n){this.targetId=e,this.me=n}}class E_{constructor(e,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Gd{constructor(){this.fe=0,this.ge=Qd(),this.pe=ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ye(),n=ye(),r=ye();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue()}}),new no(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Qd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Nb{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bn(),this.qe=zd(),this.Qe=new je(be)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Cc(i))if(r===0){const o=new se(i.path);this.Ue(n,o,_t.newNoDocument(o,he.min()))}else Ne(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Hr(r).toUint8Array()}catch(c){if(c instanceof Jg)return ws("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new ku(o,s,i)}catch(c){return ws(c instanceof ai?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Cc(l.target)){const c=new se(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,_t.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ye();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Qa(e,n,this.Qe,this.ke,r);return this.ke=Bn(),this.qe=zd(),this.Qe=new je(be),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Gd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ct(be),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Gd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function zd(){return new je(se.comparator)}function Qd(){return new je(se.comparator)}const Vb={asc:"ASCENDING",desc:"DESCENDING"},Db={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ob={and:"AND",or:"OR"};class xb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vc(t,e){return t.useProto3Json||Ha(e)?e:{value:e}}function ma(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function T_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Mb(t,e){return ma(t,e.toTimestamp())}function mn(t){return Ne(!!t),he.fromTimestamp(function(n){const r=_r(n);return new Ze(r.seconds,r.nanos)}(t))}function Nu(t,e){return Dc(t,e).canonicalString()}function Dc(t,e){const n=function(s){return new Me(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function I_(t){const e=Me.fromString(t);return Ne(S_(e)),e}function Oc(t,e){return Nu(t.databaseId,e.path)}function Gl(t,e){const n=I_(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(A_(n))}function w_(t,e){return Nu(t.databaseId,e)}function Lb(t){const e=I_(t);return e.length===4?Me.emptyPath():A_(e)}function xc(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function A_(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Yd(t,e,n){return{name:Oc(t,e),fields:n.value.mapValue.fields}}function Fb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Ne(f===void 0||typeof f=="string"),ut.fromBase64String(f||"")):(Ne(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ut.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?F.UNKNOWN:y_(u.code);return new Y(f,u.message||"")}(o);n=new E_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Gl(t,r.document.name),i=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):he.min(),l=new kt({mapValue:{fields:r.document.fields}}),c=_t.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Ko(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Gl(t,r.document),i=r.readTime?mn(r.readTime):he.min(),o=_t.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ko([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Gl(t,r.document),i=r.removedTargetIds||[];n=new Ko([],i,s,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Sb(s,i),l=r.targetId;n=new v_(l,o)}}return n}function Ub(t,e){let n;if(e instanceof to)n={update:Yd(t,e.key,e.value)};else if(e instanceof Pu)n={delete:Oc(t,e.key)};else if(e instanceof Tr)n={update:Yd(t,e.key,e.data),updateMask:zb(e.fieldMask)};else{if(!(e instanceof Ab))return ue();n={verify:Oc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Bi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ji)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof qi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof pa)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Mb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(t,e.precondition)),n}function Bb(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?mn(s.updateTime):mn(i);return o.isEqual(he.min())&&(o=mn(i)),new Tb(o,s.transformResults||[])}(n,e))):[]}function jb(t,e){return{documents:[w_(t,e.path)]}}function qb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=w_(t,s);const i=function(u){if(u.length!==0)return b_(tn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:ls(m.field),direction:Wb(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Vc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function $b(t){let e=Lb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=R_(p);return m instanceof tn&&t_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(S){return new Ui(cs(S.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Ha(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,v=p.values||[];return new da(v,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,v=p.values||[];return new da(v,m)}(n.endAt)),ab(e,s,o,i,l,"F",c,u)}function Hb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function R_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=cs(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=cs(n.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=cs(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=cs(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(cs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return tn.create(n.compositeFilter.filters.map(r=>R_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function Wb(t){return Vb[t]}function Kb(t){return Db[t]}function Gb(t){return Ob[t]}function ls(t){return{fieldPath:t.canonicalString()}}function cs(t){return at.fromServerFormat(t.fieldPath)}function b_(t){return t instanceof Ye?function(n){if(n.op==="=="){if(Md(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NAN"}};if(xd(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Md(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NAN"}};if(xd(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ls(n.field),op:Kb(n.op),value:n.value}}}(t):t instanceof tn?function(n){const r=n.getFilters().map(s=>b_(s));return r.length===1?r[0]:{compositeFilter:{op:Gb(n.op),filters:r}}}(t):ue()}function zb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function S_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class or{constructor(e,n,r,s,i=he.min(),o=he.min(),l=ut.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Qb{constructor(e){this.ct=e}}function Yb(t){const e=$b({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nc(e,e.limit,"L"):e}/**
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
 */class Jb{constructor(){this.un=new Xb}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(gr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(gr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class Xb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ct(Me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ct(Me.comparator)).toArray()}}/**
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
 */class Ss{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ss(0)}static kn(){return new Ss(-1)}}/**
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
 */class Zb{constructor(){this.changes=new Os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class eS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class tS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ti(r.mutation,s,Lt.empty(),Ze.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=Mr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=oi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Bn();const o=Ei(),l=function(){return Ei()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Tr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Ti(f.mutation,u,f.mutation.getFieldMask(),Ze.now())):o.set(u.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return l.set(u,new eS(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ei();let s=new je((o,l)=>o-l),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Lt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||ye()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=u_();f.forEach(m=>{if(!i.has(m)){const v=g_(n.get(m),r.get(m));v!==null&&p.set(m,v),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):i_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(Mr());let l=-1,c=i;return o.next(u=>j.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ye())).next(f=>({batchId:l,changes:c_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=oi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=oi();return this.indexManager.getCollectionParents(e,i).next(l=>j.forEach(l,c=>{const u=function(p,m){return new Ds(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,_t.newInvalidDocument(f)))});let l=oi();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&Ti(f.mutation,u,Lt.empty(),Ze.now()),Ka(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class nS{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:mn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:Yb(s.bundledQuery),readTime:mn(s.readTime)}}(n)),j.resolve()}}/**
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
 */class rS{constructor(){this.overlays=new je(se.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Mr();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=Mr(),i=n.length+1,o=new se(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Mr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Mr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return j.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new bb(n,r));let i=this.Ir.get(n);i===void 0&&(i=ye(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class sS{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class Vu{constructor(){this.Tr=new ct(tt.Er),this.dr=new ct(tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new tt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new se(new Me([])),r=new tt(n,e),s=new tt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new se(new Me([])),r=new tt(n,e),s=new tt(n,e+1);let i=ye();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new tt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return se.comparator(e.key,n.key)||be(e.wr,n.wr)}static Ar(e,n){return be(e.wr,n.wr)||se.comparator(e.key,n.key)}}/**
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
 */class iS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ct(tt.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Rb(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new tt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),s=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ct(be);return n.forEach(s=>{const i=new tt(s,0),o=new tt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new tt(new se(i),0);let l=new ct(be);return this.br.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.wr)),!0)},o),j.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,s=>{const i=new tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new tt(n,0),s=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class oS{constructor(e){this.Mr=e,this.docs=function(){return new je(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():_t.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Bn();const o=n.path,l=new se(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||qR(jR(f),r)<=0||(s.has(f.key)||Ka(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new aS(this)}getSize(e){return j.resolve(this.size)}}class aS extends Zb{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class lS{constructor(e){this.persistence=e,this.Nr=new Os(n=>Au(n),Ru),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Vu,this.targetCount=0,this.kr=Ss.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ss(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
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
 */class cS{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Eu(0),this.Kr=!1,this.Kr=!0,this.$r=new sS,this.referenceDelegate=e(this),this.Ur=new lS(this),this.indexManager=new Jb,this.remoteDocumentCache=function(s){return new oS(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Qb(n),this.Gr=new nS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new iS(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new uS(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class uS extends HR{constructor(e){super(),this.currentSequenceNumber=e}}class Du{constructor(e){this.persistence=e,this.Jr=new Vu,this.Yr=null}static Zr(e){return new Du(e)}get Xr(){if(this.Yr)return this.Yr;throw ue()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const s=se.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Ou{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ou(e,n.fromCache,r,s)}}/**
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
 */class hS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class fS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return nw()?8:WR(Tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new hS;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Zs()<=ve.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",as(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(Zs()<=ve.DEBUG&&Z("QueryEngine","Query:",as(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Zs()<=ve.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",as(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):j.resolve())}Yi(e,n){if(Bd(n))return j.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Nc(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ye(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ts(n,l);return this.ns(n,u,o,c.readTime)?this.Yi(e,Nc(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,r,s){return Bd(n)||s.isEqual(he.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?j.resolve(null):(Zs()<=ve.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),as(n)),this.rs(e,o,n,BR(s,-1)).next(l=>l))})}ts(e,n){let r=new ct(a_(e));return n.forEach((s,i)=>{Ka(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Zs()<=ve.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",as(n)),this.Ji.getDocumentsMatchingQuery(e,n,gr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class dS{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new je(be),this._s=new Os(i=>Au(i),Ru),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tS(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function pS(t,e,n,r){return new dS(t,e,n,r)}async function P_(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ye();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:l}))})})}function mS(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,m=p.keys();let v=j.resolve();return m.forEach(S=>{v=v.next(()=>f.getEntry(c,S)).next(k=>{const N=u.docVersions.get(S);Ne(N!==null),k.version.compareTo(N)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ye();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function C_(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function gS(t,e){const n=de(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let v=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(ut.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),s=s.insert(p,v),function(k,N,B){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(m,v,f)&&l.push(n.Ur.updateTargetData(i,v))});let c=Bn(),u=ye();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(_S(i,o,e.documentUpdates).next(f=>{c=f.Ps,u=f.Is})),!r.isEqual(he.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return j.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.os=s,i))}function _S(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Bn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(he.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function yS(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vS(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Mc(t,e,n){const r=de(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!eo(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Jd(t,e,n){const r=de(t);let s=he.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const p=de(c),m=p._s.get(f);return m!==void 0?j.resolve(p.os.get(m)):p.Ur.getTargetData(u,f)}(r,o,pn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:ye())).next(l=>(ES(r,cb(e),l),{documents:l,Ts:i})))}function ES(t,e,n){let r=t.us.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Xd{constructor(){this.activeTargetIds=mb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TS{constructor(){this.so=new Xd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Xd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class IS{_o(e){}shutdown(){}}/**
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
 */class Zd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oo=null;function zl(){return Oo===null?Oo=function(){return 268435456+Math.round(2147483648*Math.random())}():Oo++,"0x"+Oo.toString(16)}/**
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
 */const wS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class AS{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const pt="WebChannelConnection";class RS extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=zl(),c=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,c,u,s).then(f=>(Z("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw ws("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=wS[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=zl();return new Promise((o,l)=>{const c=new $g;c.setWithCredentials(!0),c.listenOnce(Hg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case $o.NO_ERROR:const f=c.getResponseJson();Z(pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case $o.TIMEOUT:Z(pt,`RPC '${e}' ${i} timed out`),l(new Y(F.DEADLINE_EXCEEDED,"Request time out"));break;case $o.HTTP_ERROR:const p=c.getStatus();if(Z(pt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const S=function(N){const B=N.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(B)>=0?B:F.UNKNOWN}(v.status);l(new Y(S,v.message))}else l(new Y(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Y(F.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{Z(pt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);Z(pt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=zl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Gg(),l=Kg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Z(pt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);let m=!1,v=!1;const S=new AS({Io:N=>{v?Z(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(Z(pt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(pt,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},To:()=>p.close()}),k=(N,B,x)=>{N.listen(B,q=>{try{x(q)}catch($){setTimeout(()=>{throw $},0)}})};return k(p,ii.EventType.OPEN,()=>{v||(Z(pt,`RPC '${e}' stream ${s} transport opened.`),S.yo())}),k(p,ii.EventType.CLOSE,()=>{v||(v=!0,Z(pt,`RPC '${e}' stream ${s} transport closed`),S.So())}),k(p,ii.EventType.ERROR,N=>{v||(v=!0,ws(pt,`RPC '${e}' stream ${s} transport errored:`,N),S.So(new Y(F.UNAVAILABLE,"The operation could not be completed")))}),k(p,ii.EventType.MESSAGE,N=>{var B;if(!v){const x=N.data[0];Ne(!!x);const q=x,$=q.error||((B=q[0])===null||B===void 0?void 0:B.error);if($){Z(pt,`RPC '${e}' stream ${s} received error:`,$);const X=$.status;let re=function(_){const I=Qe[_];if(I!==void 0)return y_(I)}(X),w=$.message;re===void 0&&(re=F.INTERNAL,w="Unknown error status: "+X+" with message "+$.message),v=!0,S.So(new Y(re,w)),p.close()}else Z(pt,`RPC '${e}' stream ${s} received:`,x),S.bo(x)}}),k(l,Wg.STAT_EVENT,N=>{N.stat===Rc.PROXY?Z(pt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Rc.NOPROXY&&Z(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Ql(){return typeof document<"u"?document:null}/**
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
 */function Ya(t){return new xb(t,!0)}/**
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
 */class k_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class N_{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new k_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Un(n.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Y(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bS extends N_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Fb(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?mn(o.readTime):he.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=xc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Cc(c)?{documents:jb(i,c)}:{query:qb(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=T_(i,o.resumeToken);const u=Vc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){l.readTime=ma(i,o.snapshotVersion.toTimestamp());const u=Vc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=Hb(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=xc(this.serializer),n.removeTarget=e,this.a_(n)}}class SS extends N_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Bb(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=xc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ub(this.serializer,r))};this.a_(n)}}/**
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
 */class PS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Y(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Dc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(F.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Dc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class CS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Un(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class kS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Qr(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=de(c);u.L_.add(4),await ro(u),u.q_.set("Unknown"),u.L_.delete(4),await Ja(u)}(this))})}),this.q_=new CS(r,s)}}async function Ja(t){if(Qr(t))for(const e of t.B_)await e(!0)}async function ro(t){for(const e of t.B_)await e(!1)}function V_(t,e){const n=de(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Fu(n)?Lu(n):xs(n).r_()&&Mu(n,e))}function xu(t,e){const n=de(t),r=xs(n);n.N_.delete(e),r.r_()&&D_(n,e),n.N_.size===0&&(r.r_()?r.o_():Qr(n)&&n.q_.set("Unknown"))}function Mu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xs(t).A_(e)}function D_(t,e){t.Q_.xe(e),xs(t).R_(e)}function Lu(t){t.Q_=new Nb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),xs(t).start(),t.q_.v_()}function Fu(t){return Qr(t)&&!xs(t).n_()&&t.N_.size>0}function Qr(t){return de(t).L_.size===0}function O_(t){t.Q_=void 0}async function NS(t){t.q_.set("Online")}async function VS(t){t.N_.forEach((e,n)=>{Mu(t,e)})}async function DS(t,e){O_(t),Fu(t)?(t.q_.M_(e),Lu(t)):t.q_.set("Unknown")}async function OS(t,e,n){if(t.q_.set("Online"),e instanceof E_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ga(t,r)}else if(e instanceof Ko?t.Q_.Ke(e):e instanceof v_?t.Q_.He(e):t.Q_.We(e),!n.isEqual(he.min()))try{const r=await C_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(u);f&&i.N_.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(ut.EMPTY_BYTE_STRING,f.snapshotVersion)),D_(i,c);const p=new or(f.target,c,u,f.sequenceNumber);Mu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await ga(t,r)}}async function ga(t,e,n){if(!eo(e))throw e;t.L_.add(1),await ro(t),t.q_.set("Offline"),n||(n=()=>C_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ja(t)})}function x_(t,e){return e().catch(n=>ga(t,n,e))}async function Xa(t){const e=de(t),n=yr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;xS(e);)try{const s=await yS(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,MS(e,s)}catch(s){await ga(e,s)}M_(e)&&L_(e)}function xS(t){return Qr(t)&&t.O_.length<10}function MS(t,e){t.O_.push(e);const n=yr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function M_(t){return Qr(t)&&!yr(t).n_()&&t.O_.length>0}function L_(t){yr(t).start()}async function LS(t){yr(t).p_()}async function FS(t){const e=yr(t);for(const n of t.O_)e.m_(n.mutations)}async function US(t,e,n){const r=t.O_.shift(),s=Cu.from(r,e,n);await x_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Xa(t)}async function BS(t,e){e&&yr(t).V_&&await async function(r,s){if(function(o){return Pb(o)&&o!==F.ABORTED}(s.code)){const i=r.O_.shift();yr(r).s_(),await x_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Xa(r)}}(t,e),M_(t)&&L_(t)}async function ep(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Qr(n);n.L_.add(3),await ro(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ja(n)}async function jS(t,e){const n=de(t);e?(n.L_.delete(2),await Ja(n)):e||(n.L_.add(2),await ro(n),n.q_.set("Unknown"))}function xs(t){return t.K_||(t.K_=function(n,r,s){const i=de(n);return i.w_(),new bS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:NS.bind(null,t),Ro:VS.bind(null,t),mo:DS.bind(null,t),d_:OS.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Fu(t)?Lu(t):t.q_.set("Unknown")):(await t.K_.stop(),O_(t))})),t.K_}function yr(t){return t.U_||(t.U_=function(n,r,s){const i=de(n);return i.w_(),new SS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:LS.bind(null,t),mo:BS.bind(null,t),f_:FS.bind(null,t),g_:US.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Xa(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Uu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Uu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bu(t,e){if(Un("AsyncQueue",`${e}: ${t}`),eo(t))return new Y(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class _s{constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=oi(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new _s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class tp{constructor(){this.W_=new je(se.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ue():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ps{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ps(e,n,_s.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class qS{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class $S{constructor(){this.queries=np(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=np(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new Y(F.ABORTED,"Firestore shutting down"))}}function np(){return new Os(t=>o_(t),Wa)}async function F_(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new qS,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Bu(o,`Initialization of query '${as(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&ju(n)}async function U_(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function HS(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&ju(n)}function WS(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function ju(t){t.Y_.forEach(e=>{e.next()})}var Lc,rp;(rp=Lc||(Lc={})).ea="default",rp.Cache="cache";class B_{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Lc.Cache}}/**
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
 */class j_{constructor(e){this.key=e}}class q_{constructor(e){this.key=e}}class KS{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ye(),this.mutatedKeys=ye(),this.Aa=a_(e),this.Ra=new _s(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new tp,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),v=Ka(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),k=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let N=!1;m&&v?m.data.isEqual(v.data)?S!==k&&(r.track({type:3,doc:v}),N=!0):this.ga(m,v)||(r.track({type:2,doc:v}),N=!0,(c&&this.Aa(v,c)>0||u&&this.Aa(v,u)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),N=!0):m&&!v&&(r.track({type:1,doc:m}),N=!0,(c||u)&&(l=!0)),N&&(v?(o=o.add(v),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(v,S){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return k(v)-k(S)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new Ps(this.query,e.Ra,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new tp,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ye(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new q_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new j_(r))}),n}ba(e){this.Ta=e.Ts,this.da=ye();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ps.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class GS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zS{constructor(e){this.key=e,this.va=!1}}class QS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Os(l=>o_(l),Wa),this.Ma=new Map,this.xa=new Set,this.Oa=new je(se.comparator),this.Na=new Map,this.La=new Vu,this.Ba={},this.ka=new Map,this.qa=Ss.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function YS(t,e,n=!0){const r=z_(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await $_(r,e,n,!0),s}async function JS(t,e){const n=z_(t);await $_(n,e,!0,!1)}async function $_(t,e,n,r){const s=await vS(t.localStore,pn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await XS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&V_(t.remoteStore,s),l}async function XS(t,e,n,r,s){t.Ka=(p,m,v)=>async function(k,N,B,x){let q=N.view.ma(B);q.ns&&(q=await Jd(k.localStore,N.query,!1).then(({documents:w})=>N.view.ma(w,q)));const $=x&&x.targetChanges.get(N.targetId),X=x&&x.targetMismatches.get(N.targetId)!=null,re=N.view.applyChanges(q,k.isPrimaryClient,$,X);return ip(k,N.targetId,re.wa),re.snapshot}(t,p,m,v);const i=await Jd(t.localStore,e,!0),o=new KS(e,i.Ts),l=o.ma(i.documents),c=no.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);ip(t,n,u.wa);const f=new GS(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function ZS(t,e,n){const r=de(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Wa(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Mc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&xu(r.remoteStore,s.targetId),Fc(r,s.targetId)}).catch(Zi)):(Fc(r,s.targetId),await Mc(r.localStore,s.targetId,!0))}async function eP(t,e){const n=de(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xu(n.remoteStore,r.targetId))}async function tP(t,e,n){const r=lP(t);try{const s=await function(o,l){const c=de(o),u=Ze.now(),f=l.reduce((v,S)=>v.add(S.key),ye());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let S=Bn(),k=ye();return c.cs.getEntries(v,f).next(N=>{S=N,S.forEach((B,x)=>{x.isValidDocument()||(k=k.add(B))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,S)).next(N=>{p=N;const B=[];for(const x of l){const q=wb(x,p.get(x.key).overlayedDocument);q!=null&&B.push(new Tr(x.key,q,Xg(q.value.mapValue),Wt.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,B,l)}).next(N=>{m=N;const B=N.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(v,N.batchId,B)})}).then(()=>({batchId:m.batchId,changes:c_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new je(be)),u=u.insert(l,c),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await so(r,s.changes),await Xa(r.remoteStore)}catch(s){const i=Bu(s,"Failed to persist write");n.reject(i)}}async function H_(t,e){const n=de(t);try{const r=await gS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ne(o.va):s.removedDocuments.size>0&&(Ne(o.va),o.va=!1))}),await so(n,r,e)}catch(r){await Zi(r)}}function sp(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=de(o);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(l)&&(u=!0)}),u&&ju(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nP(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new je(se.comparator);o=o.insert(i,_t.newNoDocument(i,he.min()));const l=ye().add(i),c=new Qa(he.min(),new Map,new je(be),o,l);await H_(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),qu(r)}else await Mc(r.localStore,e,!1).then(()=>Fc(r,e,n)).catch(Zi)}async function rP(t,e){const n=de(t),r=e.batch.batchId;try{const s=await mS(n.localStore,e);K_(n,r,null),W_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await so(n,s)}catch(s){await Zi(s)}}async function sP(t,e,n){const r=de(t);try{const s=await function(o,l){const c=de(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Ne(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);K_(r,e,n),W_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await so(r,s)}catch(s){await Zi(s)}}function W_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function K_(t,e,n){const r=de(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Fc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||G_(t,r)})}function G_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(xu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),qu(t))}function ip(t,e,n){for(const r of n)r instanceof j_?(t.La.addReference(r.key,e),iP(t,r)):r instanceof q_?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||G_(t,r.key)):ue()}function iP(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),qu(t))}function qu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new se(Me.fromString(e)),r=t.qa.next();t.Na.set(r,new zS(n)),t.Oa=t.Oa.insert(n,r),V_(t.remoteStore,new or(pn(bu(n.path)),r,"TargetPurposeLimboResolution",Eu.oe))}}async function so(t,e,n){const r=de(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Ou.Wi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,u){const f=de(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>j.forEach(u,m=>j.forEach(m.$i,v=>f.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>j.forEach(m.Ui,v=>f.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!eo(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const v=f.os.get(m),S=v.snapshotVersion,k=v.withLastLimboFreeSnapshotVersion(S);f.os=f.os.insert(m,k)}}}(r.localStore,i))}async function oP(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await P_(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new Y(F.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await so(n,r.hs)}}function aP(t,e){const n=de(t),r=n.Na.get(e);if(r&&r.va)return ye().add(r.key);{let s=ye();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function z_(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=H_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nP.bind(null,e),e.Ca.d_=HS.bind(null,e.eventManager),e.Ca.$a=WS.bind(null,e.eventManager),e}function lP(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sP.bind(null,e),e}class _a{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ya(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return pS(this.persistence,new fS,e.initialUser,this.serializer)}Ga(e){return new cS(Du.Zr,this.serializer)}Wa(e){return new TS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_a.provider={build:()=>new _a};class Uc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oP.bind(null,this.syncEngine),await jS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $S}()}createDatastore(e){const n=Ya(e.databaseInfo.databaseId),r=function(i){return new RS(i)}(e.databaseInfo);return function(i,o,l,c){return new PS(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new kS(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>sp(this.syncEngine,n,0),function(){return Zd.D()?new Zd:new IS}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,f){const p=new QS(s,i,o,l,c,u);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);Z("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ro(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Uc.provider={build:()=>new Uc};/**
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
 */class Q_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class cP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=Qg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Bu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yl(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await P_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function op(t,e){t.asyncQueue.verifyOperationInProgress();const n=await uP(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ep(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ep(e.remoteStore,s)),t._onlineComponents=e}async function uP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ws("Error using user provided cache. Falling back to memory cache: "+n),await Yl(t,new _a)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await Yl(t,new _a);return t._offlineComponents}async function Y_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await op(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await op(t,new Uc))),t._onlineComponents}function hP(t){return Y_(t).then(e=>e.syncEngine)}async function J_(t){const e=await Y_(t),n=e.eventManager;return n.onListen=YS.bind(null,e.syncEngine),n.onUnlisten=ZS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=JS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eP.bind(null,e.syncEngine),n}function fP(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new Q_({next:m=>{f.Za(),o.enqueueAndForget(()=>U_(i,p));const v=m.docs.has(l);!v&&m.fromCache?u.reject(new Y(F.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&c&&c.source==="server"?u.reject(new Y(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new B_(bu(l.path),f,{includeMetadataChanges:!0,_a:!0});return F_(i,p)}(await J_(t),t.asyncQueue,e,n,r)),r.promise}function dP(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new Q_({next:m=>{f.Za(),o.enqueueAndForget(()=>U_(i,p)),m.fromCache&&c.source==="server"?u.reject(new Y(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new B_(l,f,{includeMetadataChanges:!0,_a:!0});return F_(i,p)}(await J_(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function X_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const ap=new Map;/**
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
 */function Z_(t,e,n){if(!n)throw new Y(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pP(t,e,n,r){if(e===!0&&r===!0)throw new Y(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lp(t){if(!se.isDocumentKey(t))throw new Y(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cp(t){if(se.isDocumentKey(t))throw new Y(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Za(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function nn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Za(t);throw new Y(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class up{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=X_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class el{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new up({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new up(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new NR;switch(r.type){case"firstParty":return new xR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ap.get(n);r&&(Z("ComponentProvider","Removing Datastore"),ap.delete(n),r.terminate())}(this),Promise.resolve()}}function mP(t,e,n,r={}){var s;const i=(t=nn(t,el))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=mt.MOCK_USER;else{l=QI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Y(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new mt(u)}t._authCredentials=new VR(new zg(l,c))}}/**
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
 */class Yr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yr(this.firestore,e,this._query)}}class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class fr extends Yr{constructor(e,n,r){super(e,n,bu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new se(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function xC(t,e,...n){if(t=nt(t),Z_("collection","path",e),t instanceof el){const r=Me.fromString(e,...n);return cp(r),new fr(t,null,r)}{if(!(t instanceof Pt||t instanceof fr))throw new Y(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return cp(r),new fr(t.firestore,null,r)}}function gP(t,e,...n){if(t=nt(t),arguments.length===1&&(e=Qg.newId()),Z_("doc","path",e),t instanceof el){const r=Me.fromString(e,...n);return lp(r),new Pt(t,null,new se(r))}{if(!(t instanceof Pt||t instanceof fr))throw new Y(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return lp(r),new Pt(t.firestore,t instanceof fr?t.converter:null,new se(r))}}/**
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
 */class hp{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new k_(this,"async_queue_retry"),this.Vu=()=>{const r=Ql();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Ql();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Ql();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Dn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!eo(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Un("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Uu.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ue()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Jr extends el{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new hp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hp(e),this._firestoreClient=void 0,await e}}}function _P(t,e){const n=typeof t=="object"?t:ig(),r=typeof t=="string"?t:"(default)",s=cu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=GI("firestore");i&&mP(s,...i)}return s}function $u(t){if(t._terminated)throw new Y(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||yP(t),t._firestoreClient}function yP(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,f){return new zR(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,X_(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new cP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cs(ut.fromBase64String(e))}catch(n){throw new Y(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cs(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class tl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class nl{constructor(e){this._methodName=e}}/**
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
 */class Hu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */class Wu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const vP=/^__.*__$/;class EP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms):new to(e,this.data,n,this.fieldTransforms)}}class ey{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ty(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class Ku{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ku(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ya(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ty(this.Cu)&&vP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class TP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ya(e)}Qu(e,n,r,s=!1){return new Ku({Cu:e,methodName:n,qu:r,path:at.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rl(t){const e=t._freezeSettings(),n=Ya(t._databaseId);return new TP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ny(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);zu("Data must be an object, but it was:",o,r);const l=ry(r,o);let c,u;if(i.merge)c=new Lt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Bc(e,p,n);if(!o.contains(m))throw new Y(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);iy(f,m)||f.push(m)}c=new Lt(f),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new EP(new kt(l),c,u)}class sl extends nl{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sl}}class Gu extends nl{_toFieldTransform(e){return new vb(e.path,new Bi)}isEqual(e){return e instanceof Gu}}function IP(t,e,n,r){const s=t.Qu(1,e,n);zu("Data must be an object, but it was:",s,r);const i=[],o=kt.empty();zr(r,(c,u)=>{const f=Qu(e,c,n);u=nt(u);const p=s.Nu(f);if(u instanceof sl)i.push(f);else{const m=io(u,p);m!=null&&(i.push(f),o.set(f,m))}});const l=new Lt(i);return new ey(o,l,s.fieldTransforms)}function wP(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[Bc(e,r,n)],c=[s];if(i.length%2!=0)throw new Y(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Bc(e,i[m])),c.push(i[m+1]);const u=[],f=kt.empty();for(let m=l.length-1;m>=0;--m)if(!iy(u,l[m])){const v=l[m];let S=c[m];S=nt(S);const k=o.Nu(v);if(S instanceof sl)u.push(v);else{const N=io(S,k);N!=null&&(u.push(v),f.set(v,N))}}const p=new Lt(u);return new ey(f,p,o.fieldTransforms)}function AP(t,e,n,r=!1){return io(n,t.Qu(r?4:3,e))}function io(t,e){if(sy(t=nt(t)))return zu("Unsupported field value:",e,t),ry(t,e);if(t instanceof nl)return function(r,s){if(!ty(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=io(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ze.fromDate(r);return{timestampValue:ma(s.serializer,i)}}if(r instanceof Ze){const i=new Ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ma(s.serializer,i)}}if(r instanceof Hu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Cs)return{bytesValue:T_(s.serializer,r._byteString)};if(r instanceof Pt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Nu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Wu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Su(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Za(r)}`)}(t,e)}function ry(t,e){const n={};return Yg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(t,(r,s)=>{const i=io(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function sy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof Hu||t instanceof Cs||t instanceof Pt||t instanceof nl||t instanceof Wu)}function zu(t,e,n){if(!sy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Za(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Bc(t,e,n){if((e=nt(e))instanceof tl)return e._internalPath;if(typeof e=="string")return Qu(t,e);throw ya("Field path arguments must be of type string or ",t,!1,void 0,n)}const RP=new RegExp("[~\\*/\\[\\]]");function Qu(t,e,n){if(e.search(RP)>=0)throw ya(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new tl(...e.split("."))._internalPath}catch{throw ya(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ya(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Y(F.INVALID_ARGUMENT,l+t+c)}function iy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class oy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(il("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bP extends oy{data(){return super.data()}}function il(t,e){return typeof e=="string"?Qu(t,e):e instanceof tl?e._internalPath:e._delegate._internalPath}/**
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
 */function SP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yu{}class ay extends Yu{}function MC(t,e,...n){let r=[];e instanceof Yu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Ju).length,l=i.filter(c=>c instanceof ol).length;if(o>1||o>0&&l>0)throw new Y(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ol extends ay{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ol(e,n,r)}_apply(e){const n=this._parse(e);return ly(e._query,n),new Yr(e.firestore,e.converter,kc(e._query,n))}_parse(e){const n=rl(e.firestore);return function(i,o,l,c,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Y(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){dp(p,f);const v=[];for(const S of p)v.push(fp(c,i,S));m={arrayValue:{values:v}}}else m=fp(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||dp(p,f),m=AP(l,o,p,f==="in"||f==="not-in");return Ye.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function LC(t,e,n){const r=e,s=il("where",t);return ol._create(s,r,n)}class Ju extends Yu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ju(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)ly(o,c),o=kc(o,c)}(e._query,n),new Yr(e.firestore,e.converter,kc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xu extends ay{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Xu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Y(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Y(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ui(i,o)}(e._query,this._field,this._direction);return new Yr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ds(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function FC(t,e="asc"){const n=e,r=il("orderBy",t);return Xu._create(r,n)}function fp(t,e,n){if(typeof(n=nt(n))=="string"){if(n==="")throw new Y(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!i_(e)&&n.indexOf("/")!==-1)throw new Y(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Me.fromString(n));if(!se.isDocumentKey(r))throw new Y(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Od(t,new se(r))}if(n instanceof Pt)return Od(t,n._key);throw new Y(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Za(n)}.`)}function dp(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ly(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class PP{convertValue(e,n="none"){switch(Wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return zr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ge(o.doubleValue));return new Wu(i)}convertGeoPoint(e){return new Hu(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Iu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Mi(e));default:return null}}convertTimestamp(e){const n=_r(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);Ne(S_(r));const s=new Li(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||Un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function cy(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class li{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uy extends oy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Go(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(il("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Go extends uy{data(e={}){return super.data(e)}}class CP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new li(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Go(this._firestore,this._userDataWriter,r.key,r,new li(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Go(s._firestore,s._userDataWriter,l.doc.key,l.doc,new li(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Go(s._firestore,s._userDataWriter,l.doc.key,l.doc,new li(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:kP(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
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
 */function UC(t){t=nn(t,Pt);const e=nn(t.firestore,Jr);return fP($u(e),t._key).then(n=>NP(e,t,n))}class hy extends PP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function BC(t){t=nn(t,Yr);const e=nn(t.firestore,Jr),n=$u(e),r=new hy(e);return SP(t._query),dP(n,t._query).then(s=>new CP(e,r,t,s))}function jC(t,e,n){t=nn(t,Pt);const r=nn(t.firestore,Jr),s=cy(t.converter,e,n);return al(r,[ny(rl(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Wt.none())])}function qC(t,e,n,...r){t=nn(t,Pt);const s=nn(t.firestore,Jr),i=rl(s);let o;return o=typeof(e=nt(e))=="string"||e instanceof tl?wP(i,"updateDoc",t._key,e,n,r):IP(i,"updateDoc",t._key,e),al(s,[o.toMutation(t._key,Wt.exists(!0))])}function $C(t){return al(nn(t.firestore,Jr),[new Pu(t._key,Wt.none())])}function HC(t,e){const n=nn(t.firestore,Jr),r=gP(t),s=cy(t.converter,e);return al(n,[ny(rl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then(()=>r)}function al(t,e){return function(r,s){const i=new Dn;return r.asyncQueue.enqueueAndForget(async()=>tP(await hP(r),s,i)),i.promise}($u(t),e)}function NP(t,e,n){const r=n.docs.get(e._key),s=new hy(t);return new uy(t,s,e._key,r,new li(n.hasPendingWrites,n.fromCache),e.converter)}function WC(){return new Gu("serverTimestamp")}(function(e,n=!0){(function(s){Vs=s})(ks),Is(new Br("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Jr(new DR(r.getProvider("auth-internal")),new LR(r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Y(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Li(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),hr(Cd,"4.7.3",e),hr(Cd,"4.7.3","esm2017")})();const VP={apiKey:"AIzaSyA7C5UUFIf7pPpatI6YURsnJr-bZ0VVMt4",authDomain:"kasndb-25448.firebaseapp.com",projectId:"kasndb-25448",storageBucket:"kasndb-25448.firebasestorage.app",messagingSenderId:"574454150358",appId:"1:574454150358:web:f7ef160ca551f3362c0577",measurementId:"G-T75ELH2NS2"},fy=sg(VP),xo=SR(fy),KC=_P(fy),pp="admin@kasndb.app".toLowerCase(),dy=DT("auth",()=>{const t=us(null),e=us(!1),n=us(!0),r=us(null),s=ot(()=>!!t.value);async function i(m,v){r.value=null,n.value=!0;try{const S=(m||"").trim().replace(/\s+/g,"").toLowerCase(),k=(v||"").trim(),N=`${S}@kasndb.app`,B=await yd(xo,N,k);return t.value=B.user,e.value=!1,B.user}catch(S){throw r.value=p(S.code),S}finally{n.value=!1}}async function o(m){r.value=null,n.value=!0;try{const v=await yd(xo,pp,m);return t.value=v.user,e.value=!0,v.user}catch(v){throw r.value=p(v.code),v}finally{n.value=!1}}async function l(){try{await g0(xo),t.value=null,e.value=!1}catch(m){throw r.value="Gagal keluar. Silakan coba lagi.",m}}let c=null,u=null;function f(){return u||(u=new Promise(m=>{c&&c(),c=m0(xo,v=>{var S;v?(t.value=v,e.value=((S=v.email)==null?void 0:S.toLowerCase())===pp):(t.value=null,e.value=!1),n.value=!1,m(v)})}),u)}function p(m){return{"auth/user-not-found":"Pengguna tidak ditemukan. Periksa nomor rumah Anda.","auth/wrong-password":"Kata sandi salah. Silakan coba lagi.","auth/invalid-credential":"Nomor rumah atau nama depan tidak valid.","auth/invalid-email":"Format email tidak valid.","auth/too-many-requests":"Terlalu banyak percobaan login. Coba lagi nanti.","auth/network-request-failed":"Koneksi internet bermasalah. Periksa jaringan Anda.","auth/user-disabled":"Akun ini telah dinonaktifkan."}[m]||"Terjadi kesalahan. Silakan coba lagi."}return{user:t,isAdmin:e,loading:n,error:r,isAuthenticated:s,login:i,loginAdmin:o,logout:l,init:f}}),DP={class:"flex items-center justify-center p-4"},OP={__name:"LoadingSpinner",setup(t){return(e,n)=>(ge(),we("div",DP,[...n[0]||(n[0]=[$e("div",{class:"w-8 h-8 border-3 border-gray-200 border-t-primary-600 rounded-full animate-spin",style:{"border-width":"3px"}},null,-1)])]))}},xP=["viewBox","stroke","stroke-width"],MP={key:0,d:"M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6H4a1 1 0 0 1-1-1v-9.5z"},LP={key:1,d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"},FP={key:2,d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"},UP={key:3,d:"M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3zm-5-1a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3z"},BP={key:4,d:"M9 14h6m-6-4h6m-9 9l3-2 3 2 3-2 3 2 3-2 3 2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16z"},jP={key:5,d:"M3 3v18h18M18 17V9m-5 8V5m-5 12v-6"},qP={key:6,d:"M7 17L17 7M7 7h10v10"},$P={key:7,d:"M17 7L7 17M17 17H7V7"},HP={key:8,d:"M20 6L9 17l-5-5"},WP={key:9},KP={key:10,d:"M18 6L6 18M6 6l12 12"},GP={key:11},zP={key:12,d:"M12 5v14M5 12h14"},QP={key:13,d:"M21 21l-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"},YP={key:14,d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"},JP={key:15,d:"M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"},XP={key:16,d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"},ZP={key:17},eC={key:18,d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22"},tC={key:19,d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"},nC={key:20,d:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.4 0a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"},rC={key:21,fill:"currentColor",d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.411z"},sC={key:22,d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},iC={key:23},oC={key:24},aC={key:25,d:"M6 9l6 6 6-6"},lC={key:26,d:"M9 18l6-6-6-6"},cC={key:27,d:"M3 21h18M9 8h1m4 0h1m-5 4h1m4 0h1m-5 4h1m4 0h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"},uC={key:28,cx:"12",cy:"12",r:"8"},hC={__name:"AppIcon",props:{name:{type:String,required:!0},className:{type:String,default:"w-5 h-5"},strokeWidth:{type:[Number,String],default:1.8}},setup(t){const e=t,n=ot(()=>e.name==="whatsapp"),r=ot(()=>(e.name==="whatsapp","0 0 24 24")),s=ot(()=>e.className||"w-5 h-5");return(i,o)=>(ge(),we("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:r.value,class:ba(s.value),fill:"none",stroke:n.value?"none":"currentColor","stroke-width":n.value?"0":t.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[t.name==="home"?(ge(),we("path",MP)):t.name==="users"?(ge(),we("path",LP)):t.name==="user"?(ge(),we("path",FP)):t.name==="wallet"?(ge(),we("path",UP)):t.name==="receipt"?(ge(),we("path",BP)):t.name==="chart"?(ge(),we("path",jP)):t.name==="arrow-up-right"?(ge(),we("path",qP)):t.name==="arrow-down-left"?(ge(),we("path",$P)):t.name==="check"?(ge(),we("path",HP)):t.name==="check-circle"?(ge(),we("g",WP,[...o[0]||(o[0]=[$e("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},null,-1),$e("polyline",{points:"22 4 12 14.01 9 11.01"},null,-1)])])):t.name==="x"?(ge(),we("path",KP)):t.name==="x-circle"?(ge(),we("g",GP,[...o[1]||(o[1]=[$e("circle",{cx:"12",cy:"12",r:"10"},null,-1),$e("line",{x1:"15",y1:"9",x2:"9",y2:"15"},null,-1),$e("line",{x1:"9",y1:"9",x2:"15",y2:"15"},null,-1)])])):t.name==="plus"?(ge(),we("path",zP)):t.name==="search"?(ge(),we("path",QP)):t.name==="pencil"?(ge(),we("path",YP)):t.name==="trash"?(ge(),we("path",JP)):t.name==="download"?(ge(),we("path",XP)):t.name==="eye"?(ge(),we("g",ZP,[...o[2]||(o[2]=[$e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),$e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):t.name==="eye-off"?(ge(),we("path",eC)):t.name==="logout"?(ge(),we("path",tC)):t.name==="cog"?(ge(),we("path",nC)):t.name==="whatsapp"?(ge(),we("path",rC)):t.name==="shield"?(ge(),we("path",sC)):t.name==="calendar"?(ge(),we("g",iC,[...o[3]||(o[3]=[$e("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},null,-1),$e("line",{x1:"16",y1:"2",x2:"16",y2:"6"},null,-1),$e("line",{x1:"8",y1:"2",x2:"8",y2:"6"},null,-1),$e("line",{x1:"3",y1:"10",x2:"21",y2:"10"},null,-1)])])):t.name==="info"?(ge(),we("g",oC,[...o[4]||(o[4]=[$e("circle",{cx:"12",cy:"12",r:"10"},null,-1),$e("line",{x1:"12",y1:"16",x2:"12",y2:"12"},null,-1),$e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"},null,-1)])])):t.name==="chevron-down"?(ge(),we("path",aC)):t.name==="chevron-right"?(ge(),we("path",lC)):t.name==="building"?(ge(),we("path",cC)):(ge(),we("circle",uC))],10,xP))}},fC={class:"min-h-[100dvh] bg-zinc-50 font-sans text-zinc-900 flex flex-col selection:bg-emerald-100 selection:text-emerald-900"},dC={key:1,class:"min-h-[100dvh] flex items-center justify-center bg-zinc-50 px-4"},pC={class:"text-center flex flex-col items-center"},mC={class:"w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/20 mb-4 animate-pulse"},gC={class:"mt-3"},_C={__name:"App",setup(t){const e=dy(),n=ot(()=>e.loading);return Zc(async()=>{await e.init()}),(r,s)=>(ge(),we("div",fC,[n.value?(ge(),we("div",dC,[$e("div",pC,[$e("div",mC,[Et(hC,{name:"building",className:"w-7 h-7"})]),s[0]||(s[0]=$e("div",{class:"text-lg font-bold text-zinc-900 tracking-tight"},"KasNDB",-1)),s[1]||(s[1]=$e("p",{class:"text-xs text-zinc-500 mt-0.5"},"Memuat sistem kas...",-1)),$e("div",gC,[Et(OP)])])])):(ge(),na(lr(Qm),{key:0}))]))}},yC="modulepreload",vC=function(t){return"/KasNDB/"+t},mp={},Jn=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=vC(c),c in mp)return;mp[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":yC,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((m,v)=>{p.addEventListener("load",m),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},EC=[{path:"/login",name:"Login",component:()=>Jn(()=>import("./LoginView-Ca_iZNFy.js"),__vite__mapDeps([0,1,2,3])),meta:{requiresGuest:!0}},{path:"/",name:"Dashboard",component:()=>Jn(()=>import("./DashboardView-BjajZwDJ.js"),__vite__mapDeps([4,5,6,7,8,9,1,2,3])),meta:{requiresAuth:!0,requiresWarga:!0}},{path:"/admin",name:"AdminDashboard",component:()=>Jn(()=>import("./AdminDashboard-Cs11jlp0.js"),__vite__mapDeps([10,5,6,7,8,1,2,3])),meta:{requiresAuth:!0,requiresAdmin:!0}},{path:"/admin/warga",name:"WargaView",component:()=>Jn(()=>import("./WargaView-Cw4e6MIU.js"),__vite__mapDeps([11,5,8,1,2,3,12,13])),meta:{requiresAuth:!0,requiresAdmin:!0}},{path:"/admin/pembayaran",name:"PembayaranView",component:()=>Jn(()=>import("./PembayaranView-DRiAyo2f.js"),__vite__mapDeps([14,5,6,8,1,2,3,12,13,9])),meta:{requiresAuth:!0,requiresAdmin:!0}},{path:"/admin/pengeluaran",name:"PengeluaranView",component:()=>Jn(()=>import("./PengeluaranView-DgRrb26F.js"),__vite__mapDeps([15,7,8,1,2,3,12,13])),meta:{requiresAuth:!0,requiresAdmin:!0}},{path:"/laporan",name:"Laporan",component:()=>Jn(()=>import("./LaporanView-Dv5SYbXS.js"),__vite__mapDeps([16,5,6,7,8])),meta:{requiresAuth:!0}},{path:"/profil",name:"Profil",component:()=>Jn(()=>import("./ProfilView-BweuUk8f.js"),__vite__mapDeps([17,5,6,8,9,12,2,13])),meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",redirect:"/login"}],py=UI({history:yI("/KasNDB/"),routes:EC});py.beforeEach(async(t,e,n)=>{const r=dy();r.loading&&await r.init();const s=!!r.user,i=r.isAdmin;if(t.meta.requiresAuth&&!s)return n("/login");if(t.meta.requiresGuest&&s)return n(i?"/admin":"/");if(t.meta.requiresAdmin&&!i)return n("/");if(t.meta.requiresWarga&&i)return n("/admin");n()});const Zu=AT(_C);Zu.use(ST());Zu.use(py);Zu.mount("#app");export{wC as A,OP as B,na as C,_T as D,RC as E,Ot as F,IC as G,Jn as H,DT as I,Ze as J,WC as K,HC as L,gP as M,qC as N,$C as O,UC as P,jC as Q,FC as R,sg as S,bC as T,fy as U,SR as V,NC as W,g0 as X,kC as Y,hC as _,$e as a,Et as b,we as c,TC as d,SC as e,CE as f,kv as g,CC as h,PE as i,Zc as j,xC as k,KC as l,LC as m,ba as n,ge as o,BC as p,MC as q,us as r,lr as s,Jy as t,dy as u,kf as v,PC as w,$c as x,AC as y,ot as z};
