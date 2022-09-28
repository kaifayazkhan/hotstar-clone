function AA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var nc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function CI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function PA(t){var e=t.default;if(typeof e=="function"){var n=function(){return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var B={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=Symbol.for("react.element"),RA=Symbol.for("react.portal"),NA=Symbol.for("react.fragment"),DA=Symbol.for("react.strict_mode"),LA=Symbol.for("react.profiler"),$A=Symbol.for("react.provider"),MA=Symbol.for("react.context"),FA=Symbol.for("react.forward_ref"),UA=Symbol.for("react.suspense"),VA=Symbol.for("react.memo"),jA=Symbol.for("react.lazy"),A0=Symbol.iterator;function zA(t){return t===null||typeof t!="object"?null:(t=A0&&t[A0]||t["@@iterator"],typeof t=="function"?t:null)}var OI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},AI=Object.assign,PI={};function ra(t,e,n){this.props=t,this.context=e,this.refs=PI,this.updater=n||OI}ra.prototype.isReactComponent={};ra.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ra.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function RI(){}RI.prototype=ra.prototype;function xy(t,e,n){this.props=t,this.context=e,this.refs=PI,this.updater=n||OI}var Cy=xy.prototype=new RI;Cy.constructor=xy;AI(Cy,ra.prototype);Cy.isPureReactComponent=!0;var P0=Array.isArray,NI=Object.prototype.hasOwnProperty,Oy={current:null},DI={key:!0,ref:!0,__self:!0,__source:!0};function LI(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)NI.call(e,r)&&!DI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:_l,type:t,key:s,ref:o,props:i,_owner:Oy.current}}function BA(t,e){return{$$typeof:_l,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ay(t){return typeof t=="object"&&t!==null&&t.$$typeof===_l}function qA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var R0=/\/+/g;function ap(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qA(""+t.key):e.toString(36)}function Dc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _l:case RA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ap(o,0):r,P0(i)?(n="",t!=null&&(n=t.replace(R0,"$&/")+"/"),Dc(i,e,n,"",function(l){return l})):i!=null&&(Ay(i)&&(i=BA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(R0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",P0(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+ap(s,a);o+=Dc(s,e,n,u,i)}else if(u=zA(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+ap(s,a++),o+=Dc(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function rc(t,e,n){if(t==null)return t;var r=[],i=0;return Dc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function WA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Lc={transition:null},HA={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Lc,ReactCurrentOwner:Oy};he.Children={map:rc,forEach:function(t,e,n){rc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return rc(t,function(){e++}),e},toArray:function(t){return rc(t,function(e){return e})||[]},only:function(t){if(!Ay(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=ra;he.Fragment=NA;he.Profiler=LA;he.PureComponent=xy;he.StrictMode=DA;he.Suspense=UA;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HA;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=AI({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Oy.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)NI.call(e,u)&&!DI.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:_l,type:t.type,key:i,ref:s,props:r,_owner:o}};he.createContext=function(t){return t={$$typeof:MA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$A,_context:t},t.Consumer=t};he.createElement=LI;he.createFactory=function(t){var e=LI.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:FA,render:t}};he.isValidElement=Ay;he.lazy=function(t){return{$$typeof:jA,_payload:{_status:-1,_result:t},_init:WA}};he.memo=function(t,e){return{$$typeof:VA,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=Lc.transition;Lc.transition={};try{t()}finally{Lc.transition=e}};he.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};he.useCallback=function(t,e){return Zt.current.useCallback(t,e)};he.useContext=function(t){return Zt.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};he.useEffect=function(t,e){return Zt.current.useEffect(t,e)};he.useId=function(){return Zt.current.useId()};he.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return Zt.current.useMemo(t,e)};he.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};he.useRef=function(t){return Zt.current.useRef(t)};he.useState=function(t){return Zt.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return Zt.current.useTransition()};he.version="18.2.0";(function(t){t.exports=he})(B);const ia=CI(B.exports),Sm=AA({__proto__:null,default:ia},[B.exports]);var _m={},Py={exports:{}},Tn={},$I={exports:{}},MI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,J){var X=L.length;L.push(J);e:for(;0<X;){var _e=X-1>>>1,$=L[_e];if(0<i($,J))L[_e]=J,L[X]=$,X=_e;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var J=L[0],X=L.pop();if(X!==J){L[0]=X;e:for(var _e=0,$=L.length,z=$>>>1;_e<z;){var j=2*(_e+1)-1,ne=L[j],E=j+1,fe=L[E];if(0>i(ne,X))E<$&&0>i(fe,ne)?(L[_e]=fe,L[E]=X,_e=E):(L[_e]=ne,L[j]=X,_e=j);else if(E<$&&0>i(fe,X))L[_e]=fe,L[E]=X,_e=E;else break e}}return J}function i(L,J){var X=L.sortIndex-J.sortIndex;return X!==0?X:L.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],l=[],c=1,d=null,h=3,p=!1,m=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var J=n(l);J!==null;){if(J.callback===null)r(l);else if(J.startTime<=L)r(l),J.sortIndex=J.expirationTime,e(u,J);else break;J=n(l)}}function S(L){if(y=!1,v(L),!m)if(n(u)!==null)m=!0,st(I);else{var J=n(l);J!==null&&We(S,J.startTime-L)}}function I(L,J){m=!1,y&&(y=!1,g(b),b=-1),p=!0;var X=h;try{for(v(J),d=n(u);d!==null&&(!(d.expirationTime>J)||L&&!Q());){var _e=d.callback;if(typeof _e=="function"){d.callback=null,h=d.priorityLevel;var $=_e(d.expirationTime<=J);J=t.unstable_now(),typeof $=="function"?d.callback=$:d===n(u)&&r(u),v(J)}else r(u);d=n(u)}if(d!==null)var z=!0;else{var j=n(l);j!==null&&We(S,j.startTime-J),z=!1}return z}finally{d=null,h=X,p=!1}}var k=!1,C=null,b=-1,P=5,D=-1;function Q(){return!(t.unstable_now()-D<P)}function W(){if(C!==null){var L=t.unstable_now();D=L;var J=!0;try{J=C(!0,L)}finally{J?H():(k=!1,C=null)}}else k=!1}var H;if(typeof f=="function")H=function(){f(W)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,ge=Xe.port2;Xe.port1.onmessage=W,H=function(){ge.postMessage(null)}}else H=function(){w(W,0)};function st(L){C=L,k||(k=!0,H())}function We(L,J){b=w(function(){L(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,st(I))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var J=3;break;default:J=h}var X=h;h=J;try{return L()}finally{h=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,J){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var X=h;h=L;try{return J()}finally{h=X}},t.unstable_scheduleCallback=function(L,J,X){var _e=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?_e+X:_e):X=_e,L){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=X+$,L={id:c++,callback:J,priorityLevel:L,startTime:X,expirationTime:$,sortIndex:-1},X>_e?(L.sortIndex=X,e(l,L),n(u)===null&&L===n(l)&&(y?(g(b),b=-1):y=!0,We(S,X-_e))):(L.sortIndex=$,e(u,L),m||p||(m=!0,st(I))),L},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(L){var J=h;return function(){var X=h;h=J;try{return L.apply(this,arguments)}finally{h=X}}}})(MI);(function(t){t.exports=MI})($I);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FI=B.exports,_n=$I.exports;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var UI=new Set,bu={};function $s(t,e){Po(t,e),Po(t+"Capture",e)}function Po(t,e){for(bu[t]=e,t=0;t<e.length;t++)UI.add(e[t])}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Im=Object.prototype.hasOwnProperty,GA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N0={},D0={};function KA(t){return Im.call(D0,t)?!0:Im.call(N0,t)?!1:GA.test(t)?D0[t]=!0:(N0[t]=!0,!1)}function QA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function YA(t,e,n,r){if(e===null||typeof e>"u"||QA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ry=/[\-:]([a-z])/g;function Ny(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ry,Ny);Nt[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ry,Ny);Nt[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ry,Ny);Nt[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dy(t,e,n,r){var i=Nt.hasOwnProperty(e)?Nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(YA(e,n,i,r)&&(n=null),r||i===null?KA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dr=FI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ic=Symbol.for("react.element"),Zs=Symbol.for("react.portal"),eo=Symbol.for("react.fragment"),Ly=Symbol.for("react.strict_mode"),Em=Symbol.for("react.profiler"),VI=Symbol.for("react.provider"),jI=Symbol.for("react.context"),$y=Symbol.for("react.forward_ref"),bm=Symbol.for("react.suspense"),Tm=Symbol.for("react.suspense_list"),My=Symbol.for("react.memo"),Hr=Symbol.for("react.lazy"),zI=Symbol.for("react.offscreen"),L0=Symbol.iterator;function xa(t){return t===null||typeof t!="object"?null:(t=L0&&t[L0]||t["@@iterator"],typeof t=="function"?t:null)}var Be=Object.assign,up;function Ha(t){if(up===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);up=e&&e[1]||""}return`
`+up+t}var lp=!1;function cp(t,e){if(!t||lp)return"";lp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{lp=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ha(t):""}function XA(t){switch(t.tag){case 5:return Ha(t.type);case 16:return Ha("Lazy");case 13:return Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 2:case 15:return t=cp(t.type,!1),t;case 11:return t=cp(t.type.render,!1),t;case 1:return t=cp(t.type,!0),t;default:return""}}function km(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case eo:return"Fragment";case Zs:return"Portal";case Em:return"Profiler";case Ly:return"StrictMode";case bm:return"Suspense";case Tm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jI:return(t.displayName||"Context")+".Consumer";case VI:return(t._context.displayName||"Context")+".Provider";case $y:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case My:return e=t.displayName||null,e!==null?e:km(t.type)||"Memo";case Hr:e=t._payload,t=t._init;try{return km(t(e))}catch{}}return null}function JA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return km(e);case 8:return e===Ly?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function BI(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ZA(t){var e=BI(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sc(t){t._valueTracker||(t._valueTracker=ZA(t))}function qI(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=BI(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function id(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xm(t,e){var n=e.checked;return Be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function $0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function WI(t,e){e=e.checked,e!=null&&Dy(t,"checked",e,!1)}function Cm(t,e){WI(t,e);var n=yi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Om(t,e.type,n):e.hasOwnProperty("defaultValue")&&Om(t,e.type,yi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function M0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Om(t,e,n){(e!=="number"||id(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ga=Array.isArray;function go(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Am(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return Be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function F0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(Ga(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yi(n)}}function HI(t,e){var n=yi(e.value),r=yi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function U0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function GI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?GI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oc,KI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oc=oc||document.createElement("div"),oc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Tu(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ru={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eP=["Webkit","ms","Moz","O"];Object.keys(ru).forEach(function(t){eP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ru[e]=ru[t]})});function QI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ru.hasOwnProperty(t)&&ru[t]?(""+e).trim():e+"px"}function YI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=QI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var tP=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rm(t,e){if(e){if(tP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function Nm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dm=null;function Fy(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lm=null,yo=null,vo=null;function V0(t){if(t=bl(t)){if(typeof Lm!="function")throw Error(R(280));var e=t.stateNode;e&&(e=Th(e),Lm(t.stateNode,t.type,e))}}function XI(t){yo?vo?vo.push(t):vo=[t]:yo=t}function JI(){if(yo){var t=yo,e=vo;if(vo=yo=null,V0(t),e)for(t=0;t<e.length;t++)V0(e[t])}}function ZI(t,e){return t(e)}function eE(){}var dp=!1;function tE(t,e,n){if(dp)return t(e,n);dp=!0;try{return ZI(t,e,n)}finally{dp=!1,(yo!==null||vo!==null)&&(eE(),JI())}}function ku(t,e){var n=t.stateNode;if(n===null)return null;var r=Th(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var $m=!1;if(kr)try{var Ca={};Object.defineProperty(Ca,"passive",{get:function(){$m=!0}}),window.addEventListener("test",Ca,Ca),window.removeEventListener("test",Ca,Ca)}catch{$m=!1}function nP(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var iu=!1,sd=null,od=!1,Mm=null,rP={onError:function(t){iu=!0,sd=t}};function iP(t,e,n,r,i,s,o,a,u){iu=!1,sd=null,nP.apply(rP,arguments)}function sP(t,e,n,r,i,s,o,a,u){if(iP.apply(this,arguments),iu){if(iu){var l=sd;iu=!1,sd=null}else throw Error(R(198));od||(od=!0,Mm=l)}}function Ms(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function nE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function j0(t){if(Ms(t)!==t)throw Error(R(188))}function oP(t){var e=t.alternate;if(!e){if(e=Ms(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return j0(i),t;if(s===r)return j0(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function rE(t){return t=oP(t),t!==null?iE(t):null}function iE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=iE(t);if(e!==null)return e;t=t.sibling}return null}var sE=_n.unstable_scheduleCallback,z0=_n.unstable_cancelCallback,aP=_n.unstable_shouldYield,uP=_n.unstable_requestPaint,Ze=_n.unstable_now,lP=_n.unstable_getCurrentPriorityLevel,Uy=_n.unstable_ImmediatePriority,oE=_n.unstable_UserBlockingPriority,ad=_n.unstable_NormalPriority,cP=_n.unstable_LowPriority,aE=_n.unstable_IdlePriority,_h=null,ar=null;function dP(t){if(ar&&typeof ar.onCommitFiberRoot=="function")try{ar.onCommitFiberRoot(_h,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:pP,hP=Math.log,fP=Math.LN2;function pP(t){return t>>>=0,t===0?32:31-(hP(t)/fP|0)|0}var ac=64,uc=4194304;function Ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ud(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ka(a):(s&=o,s!==0&&(r=Ka(s)))}else o=n&~i,o!==0?r=Ka(o):s!==0&&(r=Ka(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qn(e),i=1<<n,r|=t[n],e&=~i;return r}function mP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,u=i[o];u===-1?((a&n)===0||(a&r)!==0)&&(i[o]=mP(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Fm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function uE(){var t=ac;return ac<<=1,(ac&4194240)===0&&(ac=64),t}function hp(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Il(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function yP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Vy(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Te=0;function lE(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var cE,jy,dE,hE,fE,Um=!1,lc=[],si=null,oi=null,ai=null,xu=new Map,Cu=new Map,Qr=[],vP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function B0(t,e){switch(t){case"focusin":case"focusout":si=null;break;case"dragenter":case"dragleave":oi=null;break;case"mouseover":case"mouseout":ai=null;break;case"pointerover":case"pointerout":xu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cu.delete(e.pointerId)}}function Oa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=bl(e),e!==null&&jy(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function wP(t,e,n,r,i){switch(e){case"focusin":return si=Oa(si,t,e,n,r,i),!0;case"dragenter":return oi=Oa(oi,t,e,n,r,i),!0;case"mouseover":return ai=Oa(ai,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return xu.set(s,Oa(xu.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Cu.set(s,Oa(Cu.get(s)||null,t,e,n,r,i)),!0}return!1}function pE(t){var e=es(t.target);if(e!==null){var n=Ms(e);if(n!==null){if(e=n.tag,e===13){if(e=nE(n),e!==null){t.blockedOn=e,fE(t.priority,function(){dE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $c(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Dm=r,n.target.dispatchEvent(r),Dm=null}else return e=bl(n),e!==null&&jy(e),t.blockedOn=n,!1;e.shift()}return!0}function q0(t,e,n){$c(t)&&n.delete(e)}function SP(){Um=!1,si!==null&&$c(si)&&(si=null),oi!==null&&$c(oi)&&(oi=null),ai!==null&&$c(ai)&&(ai=null),xu.forEach(q0),Cu.forEach(q0)}function Aa(t,e){t.blockedOn===e&&(t.blockedOn=null,Um||(Um=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,SP)))}function Ou(t){function e(i){return Aa(i,t)}if(0<lc.length){Aa(lc[0],t);for(var n=1;n<lc.length;n++){var r=lc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(si!==null&&Aa(si,t),oi!==null&&Aa(oi,t),ai!==null&&Aa(ai,t),xu.forEach(e),Cu.forEach(e),n=0;n<Qr.length;n++)r=Qr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qr.length&&(n=Qr[0],n.blockedOn===null);)pE(n),n.blockedOn===null&&Qr.shift()}var wo=Dr.ReactCurrentBatchConfig,ld=!0;function _P(t,e,n,r){var i=Te,s=wo.transition;wo.transition=null;try{Te=1,zy(t,e,n,r)}finally{Te=i,wo.transition=s}}function IP(t,e,n,r){var i=Te,s=wo.transition;wo.transition=null;try{Te=4,zy(t,e,n,r)}finally{Te=i,wo.transition=s}}function zy(t,e,n,r){if(ld){var i=Vm(t,e,n,r);if(i===null)Ip(t,e,r,cd,n),B0(t,r);else if(wP(i,t,e,n,r))r.stopPropagation();else if(B0(t,r),e&4&&-1<vP.indexOf(t)){for(;i!==null;){var s=bl(i);if(s!==null&&cE(s),s=Vm(t,e,n,r),s===null&&Ip(t,e,r,cd,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ip(t,e,r,null,n)}}var cd=null;function Vm(t,e,n,r){if(cd=null,t=Fy(r),t=es(t),t!==null)if(e=Ms(t),e===null)t=null;else if(n=e.tag,n===13){if(t=nE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cd=t,null}function mE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lP()){case Uy:return 1;case oE:return 4;case ad:case cP:return 16;case aE:return 536870912;default:return 16}default:return 16}}var ei=null,By=null,Mc=null;function gE(){if(Mc)return Mc;var t,e=By,n=e.length,r,i="value"in ei?ei.value:ei.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Mc=i.slice(t,1<r?1-r:void 0)}function Fc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cc(){return!0}function W0(){return!1}function kn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cc:W0,this.isPropagationStopped=W0,this}return Be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cc)},persist:function(){},isPersistent:cc}),e}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qy=kn(sa),El=Be({},sa,{view:0,detail:0}),EP=kn(El),fp,pp,Pa,Ih=Be({},El,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wy,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pa&&(Pa&&t.type==="mousemove"?(fp=t.screenX-Pa.screenX,pp=t.screenY-Pa.screenY):pp=fp=0,Pa=t),fp)},movementY:function(t){return"movementY"in t?t.movementY:pp}}),H0=kn(Ih),bP=Be({},Ih,{dataTransfer:0}),TP=kn(bP),kP=Be({},El,{relatedTarget:0}),mp=kn(kP),xP=Be({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),CP=kn(xP),OP=Be({},sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),AP=kn(OP),PP=Be({},sa,{data:0}),G0=kn(PP),RP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function LP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=DP[t])?!!e[t]:!1}function Wy(){return LP}var $P=Be({},El,{key:function(t){if(t.key){var e=RP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wy,charCode:function(t){return t.type==="keypress"?Fc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),MP=kn($P),FP=Be({},Ih,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),K0=kn(FP),UP=Be({},El,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wy}),VP=kn(UP),jP=Be({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),zP=kn(jP),BP=Be({},Ih,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qP=kn(BP),WP=[9,13,27,32],Hy=kr&&"CompositionEvent"in window,su=null;kr&&"documentMode"in document&&(su=document.documentMode);var HP=kr&&"TextEvent"in window&&!su,yE=kr&&(!Hy||su&&8<su&&11>=su),Q0=String.fromCharCode(32),Y0=!1;function vE(t,e){switch(t){case"keyup":return WP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var to=!1;function GP(t,e){switch(t){case"compositionend":return wE(e);case"keypress":return e.which!==32?null:(Y0=!0,Q0);case"textInput":return t=e.data,t===Q0&&Y0?null:t;default:return null}}function KP(t,e){if(to)return t==="compositionend"||!Hy&&vE(t,e)?(t=gE(),Mc=By=ei=null,to=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yE&&e.locale!=="ko"?null:e.data;default:return null}}var QP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function X0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!QP[t.type]:e==="textarea"}function SE(t,e,n,r){XI(r),e=dd(e,"onChange"),0<e.length&&(n=new qy("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ou=null,Au=null;function YP(t){PE(t,0)}function Eh(t){var e=io(t);if(qI(e))return t}function XP(t,e){if(t==="change")return e}var _E=!1;if(kr){var gp;if(kr){var yp="oninput"in document;if(!yp){var J0=document.createElement("div");J0.setAttribute("oninput","return;"),yp=typeof J0.oninput=="function"}gp=yp}else gp=!1;_E=gp&&(!document.documentMode||9<document.documentMode)}function Z0(){ou&&(ou.detachEvent("onpropertychange",IE),Au=ou=null)}function IE(t){if(t.propertyName==="value"&&Eh(Au)){var e=[];SE(e,Au,t,Fy(t)),tE(YP,e)}}function JP(t,e,n){t==="focusin"?(Z0(),ou=e,Au=n,ou.attachEvent("onpropertychange",IE)):t==="focusout"&&Z0()}function ZP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Eh(Au)}function eR(t,e){if(t==="click")return Eh(e)}function tR(t,e){if(t==="input"||t==="change")return Eh(e)}function nR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:nR;function Pu(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Im.call(e,i)||!Kn(t[i],e[i]))return!1}return!0}function e1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function t1(t,e){var n=e1(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=e1(n)}}function EE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?EE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bE(){for(var t=window,e=id();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=id(t.document)}return e}function Gy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rR(t){var e=bE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&EE(n.ownerDocument.documentElement,n)){if(r!==null&&Gy(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=t1(n,s);var o=t1(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iR=kr&&"documentMode"in document&&11>=document.documentMode,no=null,jm=null,au=null,zm=!1;function n1(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zm||no==null||no!==id(r)||(r=no,"selectionStart"in r&&Gy(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),au&&Pu(au,r)||(au=r,r=dd(jm,"onSelect"),0<r.length&&(e=new qy("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=no)))}function dc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ro={animationend:dc("Animation","AnimationEnd"),animationiteration:dc("Animation","AnimationIteration"),animationstart:dc("Animation","AnimationStart"),transitionend:dc("Transition","TransitionEnd")},vp={},TE={};kr&&(TE=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function bh(t){if(vp[t])return vp[t];if(!ro[t])return t;var e=ro[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in TE)return vp[t]=e[n];return t}var kE=bh("animationend"),xE=bh("animationiteration"),CE=bh("animationstart"),OE=bh("transitionend"),AE=new Map,r1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ri(t,e){AE.set(t,e),$s(e,[t])}for(var wp=0;wp<r1.length;wp++){var Sp=r1[wp],sR=Sp.toLowerCase(),oR=Sp[0].toUpperCase()+Sp.slice(1);Ri(sR,"on"+oR)}Ri(kE,"onAnimationEnd");Ri(xE,"onAnimationIteration");Ri(CE,"onAnimationStart");Ri("dblclick","onDoubleClick");Ri("focusin","onFocus");Ri("focusout","onBlur");Ri(OE,"onTransitionEnd");Po("onMouseEnter",["mouseout","mouseover"]);Po("onMouseLeave",["mouseout","mouseover"]);Po("onPointerEnter",["pointerout","pointerover"]);Po("onPointerLeave",["pointerout","pointerover"]);$s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$s("onBeforeInput",["compositionend","keypress","textInput","paste"]);$s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function i1(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,sP(r,e,void 0,t),t.currentTarget=null}function PE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;i1(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;i1(i,a,l),s=u}}}if(od)throw t=Mm,od=!1,Mm=null,t}function Pe(t,e){var n=e[Gm];n===void 0&&(n=e[Gm]=new Set);var r=t+"__bubble";n.has(r)||(RE(e,t,2,!1),n.add(r))}function _p(t,e,n){var r=0;e&&(r|=4),RE(n,t,r,e)}var hc="_reactListening"+Math.random().toString(36).slice(2);function Ru(t){if(!t[hc]){t[hc]=!0,UI.forEach(function(n){n!=="selectionchange"&&(aR.has(n)||_p(n,!1,t),_p(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hc]||(e[hc]=!0,_p("selectionchange",!1,e))}}function RE(t,e,n,r){switch(mE(e)){case 1:var i=_P;break;case 4:i=IP;break;default:i=zy}n=i.bind(null,e,n,t),i=void 0,!$m||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ip(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=es(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}tE(function(){var l=s,c=Fy(n),d=[];e:{var h=AE.get(t);if(h!==void 0){var p=qy,m=t;switch(t){case"keypress":if(Fc(n)===0)break e;case"keydown":case"keyup":p=MP;break;case"focusin":m="focus",p=mp;break;case"focusout":m="blur",p=mp;break;case"beforeblur":case"afterblur":p=mp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=H0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=TP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=VP;break;case kE:case xE:case CE:p=CP;break;case OE:p=zP;break;case"scroll":p=EP;break;case"wheel":p=qP;break;case"copy":case"cut":case"paste":p=AP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=K0}var y=(e&4)!==0,w=!y&&t==="scroll",g=y?h!==null?h+"Capture":null:h;y=[];for(var f=l,v;f!==null;){v=f;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,g!==null&&(S=ku(f,g),S!=null&&y.push(Nu(f,S,v)))),w)break;f=f.return}0<y.length&&(h=new p(h,m,null,n,c),d.push({event:h,listeners:y}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Dm&&(m=n.relatedTarget||n.fromElement)&&(es(m)||m[xr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=l,m=m?es(m):null,m!==null&&(w=Ms(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=l),p!==m)){if(y=H0,S="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=K0,S="onPointerLeave",g="onPointerEnter",f="pointer"),w=p==null?h:io(p),v=m==null?h:io(m),h=new y(S,f+"leave",p,n,c),h.target=w,h.relatedTarget=v,S=null,es(c)===l&&(y=new y(g,f+"enter",m,n,c),y.target=v,y.relatedTarget=w,S=y),w=S,p&&m)t:{for(y=p,g=m,f=0,v=y;v;v=Gs(v))f++;for(v=0,S=g;S;S=Gs(S))v++;for(;0<f-v;)y=Gs(y),f--;for(;0<v-f;)g=Gs(g),v--;for(;f--;){if(y===g||g!==null&&y===g.alternate)break t;y=Gs(y),g=Gs(g)}y=null}else y=null;p!==null&&s1(d,h,p,y,!1),m!==null&&w!==null&&s1(d,w,m,y,!0)}}e:{if(h=l?io(l):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var I=XP;else if(X0(h))if(_E)I=tR;else{I=ZP;var k=JP}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=eR);if(I&&(I=I(t,l))){SE(d,I,n,c);break e}k&&k(t,h,l),t==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&Om(h,"number",h.value)}switch(k=l?io(l):window,t){case"focusin":(X0(k)||k.contentEditable==="true")&&(no=k,jm=l,au=null);break;case"focusout":au=jm=no=null;break;case"mousedown":zm=!0;break;case"contextmenu":case"mouseup":case"dragend":zm=!1,n1(d,n,c);break;case"selectionchange":if(iR)break;case"keydown":case"keyup":n1(d,n,c)}var C;if(Hy)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else to?vE(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(yE&&n.locale!=="ko"&&(to||b!=="onCompositionStart"?b==="onCompositionEnd"&&to&&(C=gE()):(ei=c,By="value"in ei?ei.value:ei.textContent,to=!0)),k=dd(l,b),0<k.length&&(b=new G0(b,t,null,n,c),d.push({event:b,listeners:k}),C?b.data=C:(C=wE(n),C!==null&&(b.data=C)))),(C=HP?GP(t,n):KP(t,n))&&(l=dd(l,"onBeforeInput"),0<l.length&&(c=new G0("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:l}),c.data=C))}PE(d,e)})}function Nu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ku(t,n),s!=null&&r.unshift(Nu(t,s,i)),s=ku(t,e),s!=null&&r.push(Nu(t,s,i))),t=t.return}return r}function Gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function s1(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=ku(n,s),u!=null&&o.unshift(Nu(n,u,a))):i||(u=ku(n,s),u!=null&&o.push(Nu(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var uR=/\r\n?/g,lR=/\u0000|\uFFFD/g;function o1(t){return(typeof t=="string"?t:""+t).replace(uR,`
`).replace(lR,"")}function fc(t,e,n){if(e=o1(e),o1(t)!==e&&n)throw Error(R(425))}function hd(){}var Bm=null,qm=null;function Wm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hm=typeof setTimeout=="function"?setTimeout:void 0,cR=typeof clearTimeout=="function"?clearTimeout:void 0,a1=typeof Promise=="function"?Promise:void 0,dR=typeof queueMicrotask=="function"?queueMicrotask:typeof a1<"u"?function(t){return a1.resolve(null).then(t).catch(hR)}:Hm;function hR(t){setTimeout(function(){throw t})}function Ep(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ou(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ou(e)}function ui(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function u1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oa=Math.random().toString(36).slice(2),Jn="__reactFiber$"+oa,Du="__reactProps$"+oa,xr="__reactContainer$"+oa,Gm="__reactEvents$"+oa,fR="__reactListeners$"+oa,pR="__reactHandles$"+oa;function es(t){var e=t[Jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xr]||n[Jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=u1(t);t!==null;){if(n=t[Jn])return n;t=u1(t)}return e}t=n,n=t.parentNode}return null}function bl(t){return t=t[Jn]||t[xr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function io(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function Th(t){return t[Du]||null}var Km=[],so=-1;function Ni(t){return{current:t}}function Re(t){0>so||(t.current=Km[so],Km[so]=null,so--)}function Ae(t,e){so++,Km[so]=t.current,t.current=e}var vi={},Bt=Ni(vi),cn=Ni(!1),ms=vi;function Ro(t,e){var n=t.type.contextTypes;if(!n)return vi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function dn(t){return t=t.childContextTypes,t!=null}function fd(){Re(cn),Re(Bt)}function l1(t,e,n){if(Bt.current!==vi)throw Error(R(168));Ae(Bt,e),Ae(cn,n)}function NE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,JA(t)||"Unknown",i));return Be({},n,r)}function pd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vi,ms=Bt.current,Ae(Bt,t),Ae(cn,cn.current),!0}function c1(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=NE(t,e,ms),r.__reactInternalMemoizedMergedChildContext=t,Re(cn),Re(Bt),Ae(Bt,t)):Re(cn),Ae(cn,n)}var yr=null,kh=!1,bp=!1;function DE(t){yr===null?yr=[t]:yr.push(t)}function mR(t){kh=!0,DE(t)}function Di(){if(!bp&&yr!==null){bp=!0;var t=0,e=Te;try{var n=yr;for(Te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yr=null,kh=!1}catch(i){throw yr!==null&&(yr=yr.slice(t+1)),sE(Uy,Di),i}finally{Te=e,bp=!1}}return null}var oo=[],ao=0,md=null,gd=0,Cn=[],On=0,gs=null,vr=1,wr="";function qi(t,e){oo[ao++]=gd,oo[ao++]=md,md=t,gd=e}function LE(t,e,n){Cn[On++]=vr,Cn[On++]=wr,Cn[On++]=gs,gs=t;var r=vr;t=wr;var i=32-qn(r)-1;r&=~(1<<i),n+=1;var s=32-qn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vr=1<<32-qn(e)+i|n<<i|r,wr=s+t}else vr=1<<s|n<<i|r,wr=t}function Ky(t){t.return!==null&&(qi(t,1),LE(t,1,0))}function Qy(t){for(;t===md;)md=oo[--ao],oo[ao]=null,gd=oo[--ao],oo[ao]=null;for(;t===gs;)gs=Cn[--On],Cn[On]=null,wr=Cn[--On],Cn[On]=null,vr=Cn[--On],Cn[On]=null}var wn=null,yn=null,$e=!1,jn=null;function $E(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function d1(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wn=t,yn=ui(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gs!==null?{id:vr,overflow:wr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wn=t,yn=null,!0):!1;default:return!1}}function Qm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ym(t){if($e){var e=yn;if(e){var n=e;if(!d1(t,e)){if(Qm(t))throw Error(R(418));e=ui(n.nextSibling);var r=wn;e&&d1(t,e)?$E(r,n):(t.flags=t.flags&-4097|2,$e=!1,wn=t)}}else{if(Qm(t))throw Error(R(418));t.flags=t.flags&-4097|2,$e=!1,wn=t}}}function h1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function pc(t){if(t!==wn)return!1;if(!$e)return h1(t),$e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wm(t.type,t.memoizedProps)),e&&(e=yn)){if(Qm(t))throw ME(),Error(R(418));for(;e;)$E(t,e),e=ui(e.nextSibling)}if(h1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=ui(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=wn?ui(t.stateNode.nextSibling):null;return!0}function ME(){for(var t=yn;t;)t=ui(t.nextSibling)}function No(){yn=wn=null,$e=!1}function Yy(t){jn===null?jn=[t]:jn.push(t)}var gR=Dr.ReactCurrentBatchConfig;function Un(t,e){if(t&&t.defaultProps){e=Be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var yd=Ni(null),vd=null,uo=null,Xy=null;function Jy(){Xy=uo=vd=null}function Zy(t){var e=yd.current;Re(yd),t._currentValue=e}function Xm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function So(t,e){vd=t,Xy=uo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(an=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(Xy!==t)if(t={context:t,memoizedValue:e,next:null},uo===null){if(vd===null)throw Error(R(308));uo=t,vd.dependencies={lanes:0,firstContext:t}}else uo=uo.next=t;return e}var ts=null;function ev(t){ts===null?ts=[t]:ts.push(t)}function FE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ev(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cr(t,r)}function Cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gr=!1;function tv(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function UE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function br(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function li(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ve&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cr(t,n)}return i=r.interleaved,i===null?(e.next=e,ev(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cr(t,n)}function Uc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vy(t,n)}}function f1(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wd(t,e,n,r){var i=t.updateQueue;Gr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(s!==null){var d=i.baseState;o=0,c=l=u=null,a=s;do{var h=a.lane,p=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,y=a;switch(h=e,p=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){d=m.call(p,d,h);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,h=typeof m=="function"?m.call(p,d,h):m,h==null)break e;d=Be({},d,h);break e;case 2:Gr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=p,u=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(u=d),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);vs|=o,t.lanes=o,t.memoizedState=d}}function p1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var VE=new FI.Component().refs;function Jm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xh={isMounted:function(t){return(t=t._reactInternals)?Ms(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Yt(),i=di(t),s=br(r,i);s.payload=e,n!=null&&(s.callback=n),e=li(t,s,i),e!==null&&(Wn(e,t,i,r),Uc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Yt(),i=di(t),s=br(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=li(t,s,i),e!==null&&(Wn(e,t,i,r),Uc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),r=di(t),i=br(n,r);i.tag=2,e!=null&&(i.callback=e),e=li(t,i,r),e!==null&&(Wn(e,t,r,n),Uc(e,t,r))}};function m1(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Pu(n,r)||!Pu(i,s):!0}function jE(t,e,n){var r=!1,i=vi,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(i=dn(e)?ms:Bt.current,r=e.contextTypes,s=(r=r!=null)?Ro(t,i):vi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function g1(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&xh.enqueueReplaceState(e,e.state,null)}function Zm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=VE,tv(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Nn(s):(s=dn(e)?ms:Bt.current,i.context=Ro(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&xh.enqueueReplaceState(i,i.state,null),wd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ra(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===VE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function mc(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function y1(t){var e=t._init;return e(t._payload)}function zE(t){function e(g,f){if(t){var v=g.deletions;v===null?(g.deletions=[f],g.flags|=16):v.push(f)}}function n(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=hi(g,f),g.index=0,g.sibling=null,g}function s(g,f,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<f?(g.flags|=2,f):v):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,f,v,S){return f===null||f.tag!==6?(f=Pp(v,g.mode,S),f.return=g,f):(f=i(f,v),f.return=g,f)}function u(g,f,v,S){var I=v.type;return I===eo?c(g,f,v.props.children,S,v.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Hr&&y1(I)===f.type)?(S=i(f,v.props),S.ref=Ra(g,f,v),S.return=g,S):(S=Wc(v.type,v.key,v.props,null,g.mode,S),S.ref=Ra(g,f,v),S.return=g,S)}function l(g,f,v,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Rp(v,g.mode,S),f.return=g,f):(f=i(f,v.children||[]),f.return=g,f)}function c(g,f,v,S,I){return f===null||f.tag!==7?(f=ls(v,g.mode,S,I),f.return=g,f):(f=i(f,v),f.return=g,f)}function d(g,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Pp(""+f,g.mode,v),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ic:return v=Wc(f.type,f.key,f.props,null,g.mode,v),v.ref=Ra(g,null,f),v.return=g,v;case Zs:return f=Rp(f,g.mode,v),f.return=g,f;case Hr:var S=f._init;return d(g,S(f._payload),v)}if(Ga(f)||xa(f))return f=ls(f,g.mode,v,null),f.return=g,f;mc(g,f)}return null}function h(g,f,v,S){var I=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return I!==null?null:a(g,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ic:return v.key===I?u(g,f,v,S):null;case Zs:return v.key===I?l(g,f,v,S):null;case Hr:return I=v._init,h(g,f,I(v._payload),S)}if(Ga(v)||xa(v))return I!==null?null:c(g,f,v,S,null);mc(g,v)}return null}function p(g,f,v,S,I){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(v)||null,a(f,g,""+S,I);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ic:return g=g.get(S.key===null?v:S.key)||null,u(f,g,S,I);case Zs:return g=g.get(S.key===null?v:S.key)||null,l(f,g,S,I);case Hr:var k=S._init;return p(g,f,v,k(S._payload),I)}if(Ga(S)||xa(S))return g=g.get(v)||null,c(f,g,S,I,null);mc(f,S)}return null}function m(g,f,v,S){for(var I=null,k=null,C=f,b=f=0,P=null;C!==null&&b<v.length;b++){C.index>b?(P=C,C=null):P=C.sibling;var D=h(g,C,v[b],S);if(D===null){C===null&&(C=P);break}t&&C&&D.alternate===null&&e(g,C),f=s(D,f,b),k===null?I=D:k.sibling=D,k=D,C=P}if(b===v.length)return n(g,C),$e&&qi(g,b),I;if(C===null){for(;b<v.length;b++)C=d(g,v[b],S),C!==null&&(f=s(C,f,b),k===null?I=C:k.sibling=C,k=C);return $e&&qi(g,b),I}for(C=r(g,C);b<v.length;b++)P=p(C,g,b,v[b],S),P!==null&&(t&&P.alternate!==null&&C.delete(P.key===null?b:P.key),f=s(P,f,b),k===null?I=P:k.sibling=P,k=P);return t&&C.forEach(function(Q){return e(g,Q)}),$e&&qi(g,b),I}function y(g,f,v,S){var I=xa(v);if(typeof I!="function")throw Error(R(150));if(v=I.call(v),v==null)throw Error(R(151));for(var k=I=null,C=f,b=f=0,P=null,D=v.next();C!==null&&!D.done;b++,D=v.next()){C.index>b?(P=C,C=null):P=C.sibling;var Q=h(g,C,D.value,S);if(Q===null){C===null&&(C=P);break}t&&C&&Q.alternate===null&&e(g,C),f=s(Q,f,b),k===null?I=Q:k.sibling=Q,k=Q,C=P}if(D.done)return n(g,C),$e&&qi(g,b),I;if(C===null){for(;!D.done;b++,D=v.next())D=d(g,D.value,S),D!==null&&(f=s(D,f,b),k===null?I=D:k.sibling=D,k=D);return $e&&qi(g,b),I}for(C=r(g,C);!D.done;b++,D=v.next())D=p(C,g,b,D.value,S),D!==null&&(t&&D.alternate!==null&&C.delete(D.key===null?b:D.key),f=s(D,f,b),k===null?I=D:k.sibling=D,k=D);return t&&C.forEach(function(W){return e(g,W)}),$e&&qi(g,b),I}function w(g,f,v,S){if(typeof v=="object"&&v!==null&&v.type===eo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ic:e:{for(var I=v.key,k=f;k!==null;){if(k.key===I){if(I=v.type,I===eo){if(k.tag===7){n(g,k.sibling),f=i(k,v.props.children),f.return=g,g=f;break e}}else if(k.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Hr&&y1(I)===k.type){n(g,k.sibling),f=i(k,v.props),f.ref=Ra(g,k,v),f.return=g,g=f;break e}n(g,k);break}else e(g,k);k=k.sibling}v.type===eo?(f=ls(v.props.children,g.mode,S,v.key),f.return=g,g=f):(S=Wc(v.type,v.key,v.props,null,g.mode,S),S.ref=Ra(g,f,v),S.return=g,g=S)}return o(g);case Zs:e:{for(k=v.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(g,f.sibling),f=i(f,v.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else e(g,f);f=f.sibling}f=Rp(v,g.mode,S),f.return=g,g=f}return o(g);case Hr:return k=v._init,w(g,f,k(v._payload),S)}if(Ga(v))return m(g,f,v,S);if(xa(v))return y(g,f,v,S);mc(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,v),f.return=g,g=f):(n(g,f),f=Pp(v,g.mode,S),f.return=g,g=f),o(g)):n(g,f)}return w}var Do=zE(!0),BE=zE(!1),Tl={},ur=Ni(Tl),Lu=Ni(Tl),$u=Ni(Tl);function ns(t){if(t===Tl)throw Error(R(174));return t}function nv(t,e){switch(Ae($u,e),Ae(Lu,t),Ae(ur,Tl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pm(e,t)}Re(ur),Ae(ur,e)}function Lo(){Re(ur),Re(Lu),Re($u)}function qE(t){ns($u.current);var e=ns(ur.current),n=Pm(e,t.type);e!==n&&(Ae(Lu,t),Ae(ur,n))}function rv(t){Lu.current===t&&(Re(ur),Re(Lu))}var je=Ni(0);function Sd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tp=[];function iv(){for(var t=0;t<Tp.length;t++)Tp[t]._workInProgressVersionPrimary=null;Tp.length=0}var Vc=Dr.ReactCurrentDispatcher,kp=Dr.ReactCurrentBatchConfig,ys=0,ze=null,ot=null,ht=null,_d=!1,uu=!1,Mu=0,yR=0;function Mt(){throw Error(R(321))}function sv(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function ov(t,e,n,r,i,s){if(ys=s,ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vc.current=t===null||t.memoizedState===null?_R:IR,t=n(r,i),uu){s=0;do{if(uu=!1,Mu=0,25<=s)throw Error(R(301));s+=1,ht=ot=null,e.updateQueue=null,Vc.current=ER,t=n(r,i)}while(uu)}if(Vc.current=Id,e=ot!==null&&ot.next!==null,ys=0,ht=ot=ze=null,_d=!1,e)throw Error(R(300));return t}function av(){var t=Mu!==0;return Mu=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?ze.memoizedState=ht=t:ht=ht.next=t,ht}function Dn(){if(ot===null){var t=ze.alternate;t=t!==null?t.memoizedState:null}else t=ot.next;var e=ht===null?ze.memoizedState:ht.next;if(e!==null)ht=e,ot=t;else{if(t===null)throw Error(R(310));ot=t,t={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},ht===null?ze.memoizedState=ht=t:ht=ht.next=t}return ht}function Fu(t,e){return typeof e=="function"?e(t):e}function xp(t){var e=Dn(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=ot,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((ys&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:t(r,l.action);else{var d={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=d,o=r):u=u.next=d,ze.lanes|=c,vs|=c}l=l.next}while(l!==null&&l!==s);u===null?o=r:u.next=a,Kn(r,e.memoizedState)||(an=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ze.lanes|=s,vs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cp(t){var e=Dn(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Kn(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function WE(){}function HE(t,e){var n=ze,r=Dn(),i=e(),s=!Kn(r.memoizedState,i);if(s&&(r.memoizedState=i,an=!0),r=r.queue,uv(QE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,Uu(9,KE.bind(null,n,r,i,e),void 0,null),pt===null)throw Error(R(349));(ys&30)!==0||GE(n,e,i)}return i}function GE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function KE(t,e,n,r){e.value=n,e.getSnapshot=r,YE(e)&&XE(t)}function QE(t,e,n){return n(function(){YE(e)&&XE(t)})}function YE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function XE(t){var e=Cr(t,1);e!==null&&Wn(e,t,1,-1)}function v1(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fu,lastRenderedState:t},e.queue=t,t=t.dispatch=SR.bind(null,ze,t),[e.memoizedState,t]}function Uu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function JE(){return Dn().memoizedState}function jc(t,e,n,r){var i=Xn();ze.flags|=t,i.memoizedState=Uu(1|e,n,void 0,r===void 0?null:r)}function Ch(t,e,n,r){var i=Dn();r=r===void 0?null:r;var s=void 0;if(ot!==null){var o=ot.memoizedState;if(s=o.destroy,r!==null&&sv(r,o.deps)){i.memoizedState=Uu(e,n,s,r);return}}ze.flags|=t,i.memoizedState=Uu(1|e,n,s,r)}function w1(t,e){return jc(8390656,8,t,e)}function uv(t,e){return Ch(2048,8,t,e)}function ZE(t,e){return Ch(4,2,t,e)}function eb(t,e){return Ch(4,4,t,e)}function tb(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nb(t,e,n){return n=n!=null?n.concat([t]):null,Ch(4,4,tb.bind(null,e,t),n)}function lv(){}function rb(t,e){var n=Dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sv(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ib(t,e){var n=Dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sv(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function sb(t,e,n){return(ys&21)===0?(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n):(Kn(n,e)||(n=uE(),ze.lanes|=n,vs|=n,t.baseState=!0),e)}function vR(t,e){var n=Te;Te=n!==0&&4>n?n:4,t(!0);var r=kp.transition;kp.transition={};try{t(!1),e()}finally{Te=n,kp.transition=r}}function ob(){return Dn().memoizedState}function wR(t,e,n){var r=di(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ab(t))ub(e,n);else if(n=FE(t,e,n,r),n!==null){var i=Yt();Wn(n,t,r,i),lb(n,e,r)}}function SR(t,e,n){var r=di(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ab(t))ub(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Kn(a,o)){var u=e.interleaved;u===null?(i.next=i,ev(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=FE(t,e,i,r),n!==null&&(i=Yt(),Wn(n,t,r,i),lb(n,e,r))}}function ab(t){var e=t.alternate;return t===ze||e!==null&&e===ze}function ub(t,e){uu=_d=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lb(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vy(t,n)}}var Id={readContext:Nn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},_R={readContext:Nn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:w1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,jc(4194308,4,tb.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jc(4194308,4,t,e)},useInsertionEffect:function(t,e){return jc(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=wR.bind(null,ze,t),[r.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:v1,useDebugValue:lv,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=v1(!1),e=t[0];return t=vR.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ze,i=Xn();if($e){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),pt===null)throw Error(R(349));(ys&30)!==0||GE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,w1(QE.bind(null,r,s,t),[t]),r.flags|=2048,Uu(9,KE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=pt.identifierPrefix;if($e){var n=wr,r=vr;n=(r&~(1<<32-qn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Mu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},IR={readContext:Nn,useCallback:rb,useContext:Nn,useEffect:uv,useImperativeHandle:nb,useInsertionEffect:ZE,useLayoutEffect:eb,useMemo:ib,useReducer:xp,useRef:JE,useState:function(){return xp(Fu)},useDebugValue:lv,useDeferredValue:function(t){var e=Dn();return sb(e,ot.memoizedState,t)},useTransition:function(){var t=xp(Fu)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:WE,useSyncExternalStore:HE,useId:ob,unstable_isNewReconciler:!1},ER={readContext:Nn,useCallback:rb,useContext:Nn,useEffect:uv,useImperativeHandle:nb,useInsertionEffect:ZE,useLayoutEffect:eb,useMemo:ib,useReducer:Cp,useRef:JE,useState:function(){return Cp(Fu)},useDebugValue:lv,useDeferredValue:function(t){var e=Dn();return ot===null?e.memoizedState=t:sb(e,ot.memoizedState,t)},useTransition:function(){var t=Cp(Fu)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:WE,useSyncExternalStore:HE,useId:ob,unstable_isNewReconciler:!1};function $o(t,e){try{var n="",r=e;do n+=XA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Op(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function eg(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bR=typeof WeakMap=="function"?WeakMap:Map;function cb(t,e,n){n=br(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){bd||(bd=!0,cg=r),eg(t,e)},n}function db(t,e,n){n=br(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){eg(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){eg(t,e),typeof r!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function S1(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new bR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=FR.bind(null,t,e,n),e.then(t,t))}function _1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function I1(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=br(-1,1),e.tag=2,li(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var TR=Dr.ReactCurrentOwner,an=!1;function Ht(t,e,n,r){e.child=t===null?BE(e,null,n,r):Do(e,t.child,n,r)}function E1(t,e,n,r,i){n=n.render;var s=e.ref;return So(e,i),r=ov(t,e,n,r,s,i),n=av(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Or(t,e,i)):($e&&n&&Ky(e),e.flags|=1,Ht(t,e,r,i),e.child)}function b1(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!yv(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hb(t,e,s,r,i)):(t=Wc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pu,n(o,r)&&t.ref===e.ref)return Or(t,e,i)}return e.flags|=1,t=hi(s,r),t.ref=e.ref,t.return=e,e.child=t}function hb(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Pu(s,r)&&t.ref===e.ref)if(an=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(an=!0);else return e.lanes=t.lanes,Or(t,e,i)}return tg(t,e,n,r,i)}function fb(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(co,mn),mn|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ae(co,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ae(co,mn),mn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ae(co,mn),mn|=r;return Ht(t,e,i,n),e.child}function pb(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tg(t,e,n,r,i){var s=dn(n)?ms:Bt.current;return s=Ro(e,s),So(e,i),n=ov(t,e,n,r,s,i),r=av(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Or(t,e,i)):($e&&r&&Ky(e),e.flags|=1,Ht(t,e,n,i),e.child)}function T1(t,e,n,r,i){if(dn(n)){var s=!0;pd(e)}else s=!1;if(So(e,i),e.stateNode===null)zc(t,e),jE(e,n,r),Zm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Nn(l):(l=dn(n)?ms:Bt.current,l=Ro(e,l));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&g1(e,o,r,l),Gr=!1;var h=e.memoizedState;o.state=h,wd(e,r,o,i),u=e.memoizedState,a!==r||h!==u||cn.current||Gr?(typeof c=="function"&&(Jm(e,n,c,r),u=e.memoizedState),(a=Gr||m1(e,n,a,r,h,u,l))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,UE(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:Un(e.type,a),o.props=l,d=e.pendingProps,h=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Nn(u):(u=dn(n)?ms:Bt.current,u=Ro(e,u));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==u)&&g1(e,o,r,u),Gr=!1,h=e.memoizedState,o.state=h,wd(e,r,o,i);var m=e.memoizedState;a!==d||h!==m||cn.current||Gr?(typeof p=="function"&&(Jm(e,n,p,r),m=e.memoizedState),(l=Gr||m1(e,n,l,r,h,m,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return ng(t,e,n,r,s,i)}function ng(t,e,n,r,i,s){pb(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&c1(e,n,!1),Or(t,e,s);r=e.stateNode,TR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Do(e,t.child,null,s),e.child=Do(e,null,a,s)):Ht(t,e,a,s),e.memoizedState=r.state,i&&c1(e,n,!0),e.child}function mb(t){var e=t.stateNode;e.pendingContext?l1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&l1(t,e.context,!1),nv(t,e.containerInfo)}function k1(t,e,n,r,i){return No(),Yy(i),e.flags|=256,Ht(t,e,n,r),e.child}var rg={dehydrated:null,treeContext:null,retryLane:0};function ig(t){return{baseLanes:t,cachePool:null,transitions:null}}function gb(t,e,n){var r=e.pendingProps,i=je.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ae(je,i&1),t===null)return Ym(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ph(o,r,0,null),t=ls(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ig(n),e.memoizedState=rg,t):cv(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return kR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=hi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=hi(a,s):(s=ls(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ig(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rg,r}return s=t.child,t=s.sibling,r=hi(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cv(t,e){return e=Ph({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gc(t,e,n,r){return r!==null&&Yy(r),Do(e,t.child,null,n),t=cv(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Op(Error(R(422))),gc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ph({mode:"visible",children:r.children},i,0,null),s=ls(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Do(e,t.child,null,o),e.child.memoizedState=ig(o),e.memoizedState=rg,s);if((e.mode&1)===0)return gc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=Op(s,r,void 0),gc(t,e,o,r)}if(a=(o&t.childLanes)!==0,an||a){if(r=pt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Cr(t,i),Wn(r,t,i,-1))}return gv(),r=Op(Error(R(421))),gc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=UR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,yn=ui(i.nextSibling),wn=e,$e=!0,jn=null,t!==null&&(Cn[On++]=vr,Cn[On++]=wr,Cn[On++]=gs,vr=t.id,wr=t.overflow,gs=e),e=cv(e,r.children),e.flags|=4096,e)}function x1(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xm(t.return,e,n)}function Ap(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function yb(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ht(t,e,r.children,n),r=je.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&x1(t,n,e);else if(t.tag===19)x1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ae(je,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Sd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ap(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Sd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ap(e,!0,n,null,s);break;case"together":Ap(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zc(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Or(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vs|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=hi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xR(t,e,n){switch(e.tag){case 3:mb(e),No();break;case 5:qE(e);break;case 1:dn(e.type)&&pd(e);break;case 4:nv(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ae(yd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ae(je,je.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?gb(t,e,n):(Ae(je,je.current&1),t=Or(t,e,n),t!==null?t.sibling:null);Ae(je,je.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return yb(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ae(je,je.current),r)break;return null;case 22:case 23:return e.lanes=0,fb(t,e,n)}return Or(t,e,n)}var vb,sg,wb,Sb;vb=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sg=function(){};wb=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ns(ur.current);var s=null;switch(n){case"input":i=xm(t,i),r=xm(t,r),s=[];break;case"select":i=Be({},i,{value:void 0}),r=Be({},r,{value:void 0}),s=[];break;case"textarea":i=Am(t,i),r=Am(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hd)}Rm(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(bu.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(bu.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&Pe("scroll",t),s||a===u||(s=[])):(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};Sb=function(t,e,n,r){n!==r&&(e.flags|=4)};function Na(t,e){if(!$e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function CR(t,e,n){var r=e.pendingProps;switch(Qy(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return dn(e.type)&&fd(),Ft(e),null;case 3:return r=e.stateNode,Lo(),Re(cn),Re(Bt),iv(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,jn!==null&&(fg(jn),jn=null))),sg(t,e),Ft(e),null;case 5:rv(e);var i=ns($u.current);if(n=e.type,t!==null&&e.stateNode!=null)wb(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return Ft(e),null}if(t=ns(ur.current),pc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Jn]=e,r[Du]=s,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(i=0;i<Qa.length;i++)Pe(Qa[i],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":$0(r,s),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Pe("invalid",r);break;case"textarea":F0(r,s),Pe("invalid",r)}Rm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&fc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fc(r.textContent,a,t),i=["children",""+a]):bu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":sc(r),M0(r,s,!0);break;case"textarea":sc(r),U0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=GI(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Jn]=e,t[Du]=r,vb(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nm(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),i=r;break;case"iframe":case"object":case"embed":Pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Qa.length;i++)Pe(Qa[i],t);i=r;break;case"source":Pe("error",t),i=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),i=r;break;case"details":Pe("toggle",t),i=r;break;case"input":$0(t,r),i=xm(t,r),Pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Be({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":F0(t,r),i=Am(t,r),Pe("invalid",t);break;default:i=r}Rm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?YI(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&KI(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Tu(t,u):typeof u=="number"&&Tu(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bu.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Pe("scroll",t):u!=null&&Dy(t,s,u,o))}switch(n){case"input":sc(t),M0(t,r,!1);break;case"textarea":sc(t),U0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?go(t,!!r.multiple,s,!1):r.defaultValue!=null&&go(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=hd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)Sb(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=ns($u.current),ns(ur.current),pc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Jn]=e,(s=r.nodeValue!==n)&&(t=wn,t!==null))switch(t.tag){case 3:fc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jn]=e,e.stateNode=r}return Ft(e),null;case 13:if(Re(je),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($e&&yn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)ME(),No(),e.flags|=98560,s=!1;else if(s=pc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[Jn]=e}else No(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else jn!==null&&(fg(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(je.current&1)!==0?ut===0&&(ut=3):gv())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return Lo(),sg(t,e),t===null&&Ru(e.stateNode.containerInfo),Ft(e),null;case 10:return Zy(e.type._context),Ft(e),null;case 17:return dn(e.type)&&fd(),Ft(e),null;case 19:if(Re(je),s=e.memoizedState,s===null)return Ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Na(s,!1);else{if(ut!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Sd(t),o!==null){for(e.flags|=128,Na(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ae(je,je.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ze()>Mo&&(e.flags|=128,r=!0,Na(s,!1),e.lanes=4194304)}else{if(!r)if(t=Sd(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$e)return Ft(e),null}else 2*Ze()-s.renderingStartTime>Mo&&n!==1073741824&&(e.flags|=128,r=!0,Na(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ze(),e.sibling=null,n=je.current,Ae(je,r?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return mv(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(mn&1073741824)!==0&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function OR(t,e){switch(Qy(e),e.tag){case 1:return dn(e.type)&&fd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Lo(),Re(cn),Re(Bt),iv(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return rv(e),null;case 13:if(Re(je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));No()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(je),null;case 4:return Lo(),null;case 10:return Zy(e.type._context),null;case 22:case 23:return mv(),null;case 24:return null;default:return null}}var yc=!1,Vt=!1,AR=typeof WeakSet=="function"?WeakSet:Set,q=null;function lo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ge(t,e,r)}else n.current=null}function og(t,e,n){try{n()}catch(r){Ge(t,e,r)}}var C1=!1;function PR(t,e){if(Bm=ld,t=bE(),Gy(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(u=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++l===i&&(a=o),h===s&&++c===r&&(u=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(qm={focusedElem:t,selectionRange:n},ld=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var m=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,w=m.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:Un(e.type,y),w);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(S){Ge(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return m=C1,C1=!1,m}function lu(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&og(e,n,s)}i=i.next}while(i!==r)}}function Oh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ag(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _b(t){var e=t.alternate;e!==null&&(t.alternate=null,_b(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jn],delete e[Du],delete e[Gm],delete e[fR],delete e[pR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ib(t){return t.tag===5||t.tag===3||t.tag===4}function O1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ib(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ug(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hd));else if(r!==4&&(t=t.child,t!==null))for(ug(t,e,n),t=t.sibling;t!==null;)ug(t,e,n),t=t.sibling}function lg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(lg(t,e,n),t=t.sibling;t!==null;)lg(t,e,n),t=t.sibling}var kt=null,Vn=!1;function zr(t,e,n){for(n=n.child;n!==null;)Eb(t,e,n),n=n.sibling}function Eb(t,e,n){if(ar&&typeof ar.onCommitFiberUnmount=="function")try{ar.onCommitFiberUnmount(_h,n)}catch{}switch(n.tag){case 5:Vt||lo(n,e);case 6:var r=kt,i=Vn;kt=null,zr(t,e,n),kt=r,Vn=i,kt!==null&&(Vn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Vn?(t=kt,n=n.stateNode,t.nodeType===8?Ep(t.parentNode,n):t.nodeType===1&&Ep(t,n),Ou(t)):Ep(kt,n.stateNode));break;case 4:r=kt,i=Vn,kt=n.stateNode.containerInfo,Vn=!0,zr(t,e,n),kt=r,Vn=i;break;case 0:case 11:case 14:case 15:if(!Vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&og(n,e,o),i=i.next}while(i!==r)}zr(t,e,n);break;case 1:if(!Vt&&(lo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ge(n,e,a)}zr(t,e,n);break;case 21:zr(t,e,n);break;case 22:n.mode&1?(Vt=(r=Vt)||n.memoizedState!==null,zr(t,e,n),Vt=r):zr(t,e,n);break;default:zr(t,e,n)}}function A1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new AR),e.forEach(function(r){var i=VR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Vn=!1;break e;case 3:kt=a.stateNode.containerInfo,Vn=!0;break e;case 4:kt=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(kt===null)throw Error(R(160));Eb(s,o,i),kt=null,Vn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){Ge(i,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bb(e,t),e=e.sibling}function bb(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Yn(t),r&4){try{lu(3,t,t.return),Oh(3,t)}catch(y){Ge(t,t.return,y)}try{lu(5,t,t.return)}catch(y){Ge(t,t.return,y)}}break;case 1:Fn(e,t),Yn(t),r&512&&n!==null&&lo(n,n.return);break;case 5:if(Fn(e,t),Yn(t),r&512&&n!==null&&lo(n,n.return),t.flags&32){var i=t.stateNode;try{Tu(i,"")}catch(y){Ge(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&WI(i,s),Nm(a,o);var l=Nm(a,s);for(o=0;o<u.length;o+=2){var c=u[o],d=u[o+1];c==="style"?YI(i,d):c==="dangerouslySetInnerHTML"?KI(i,d):c==="children"?Tu(i,d):Dy(i,c,d,l)}switch(a){case"input":Cm(i,s);break;case"textarea":HI(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?go(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?go(i,!!s.multiple,s.defaultValue,!0):go(i,!!s.multiple,s.multiple?[]:"",!1))}i[Du]=s}catch(y){Ge(t,t.return,y)}}break;case 6:if(Fn(e,t),Yn(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){Ge(t,t.return,y)}}break;case 3:if(Fn(e,t),Yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ou(e.containerInfo)}catch(y){Ge(t,t.return,y)}break;case 4:Fn(e,t),Yn(t);break;case 13:Fn(e,t),Yn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(fv=Ze())),r&4&&A1(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(l=Vt)||c,Fn(e,t),Vt=l):Fn(e,t),Yn(t),r&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!c&&(t.mode&1)!==0)for(q=t,c=t.child;c!==null;){for(d=q=c;q!==null;){switch(h=q,p=h.child,h.tag){case 0:case 11:case 14:case 15:lu(4,h,h.return);break;case 1:lo(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){Ge(r,n,y)}}break;case 5:lo(h,h.return);break;case 22:if(h.memoizedState!==null){R1(d);continue}}p!==null?(p.return=h,q=p):R1(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,l?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,u=d.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=QI("display",o))}catch(y){Ge(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(y){Ge(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Fn(e,t),Yn(t),r&4&&A1(t);break;case 21:break;default:Fn(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ib(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Tu(i,""),r.flags&=-33);var s=O1(t);lg(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=O1(t);ug(t,a,o);break;default:throw Error(R(161))}}catch(u){Ge(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function RR(t,e,n){q=t,Tb(t)}function Tb(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||yc;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Vt;a=yc;var l=Vt;if(yc=o,(Vt=u)&&!l)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?N1(i):u!==null?(u.return=o,q=u):N1(i);for(;s!==null;)q=s,Tb(s),s=s.sibling;q=i,yc=a,Vt=l}P1(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,q=s):P1(t)}}function P1(t){for(;q!==null;){var e=q;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Vt||Oh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&p1(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}p1(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ou(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Vt||e.flags&512&&ag(e)}catch(h){Ge(e,e.return,h)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function R1(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function N1(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Oh(4,e)}catch(u){Ge(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ge(e,i,u)}}var s=e.return;try{ag(e)}catch(u){Ge(e,s,u)}break;case 5:var o=e.return;try{ag(e)}catch(u){Ge(e,o,u)}}}catch(u){Ge(e,e.return,u)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var NR=Math.ceil,Ed=Dr.ReactCurrentDispatcher,dv=Dr.ReactCurrentOwner,Rn=Dr.ReactCurrentBatchConfig,ve=0,pt=null,rt=null,At=0,mn=0,co=Ni(0),ut=0,Vu=null,vs=0,Ah=0,hv=0,cu=null,on=null,fv=0,Mo=1/0,gr=null,bd=!1,cg=null,ci=null,vc=!1,ti=null,Td=0,du=0,dg=null,Bc=-1,qc=0;function Yt(){return(ve&6)!==0?Ze():Bc!==-1?Bc:Bc=Ze()}function di(t){return(t.mode&1)===0?1:(ve&2)!==0&&At!==0?At&-At:gR.transition!==null?(qc===0&&(qc=uE()),qc):(t=Te,t!==0||(t=window.event,t=t===void 0?16:mE(t.type)),t)}function Wn(t,e,n,r){if(50<du)throw du=0,dg=null,Error(R(185));Il(t,n,r),((ve&2)===0||t!==pt)&&(t===pt&&((ve&2)===0&&(Ah|=n),ut===4&&Yr(t,At)),hn(t,r),n===1&&ve===0&&(e.mode&1)===0&&(Mo=Ze()+500,kh&&Di()))}function hn(t,e){var n=t.callbackNode;gP(t,e);var r=ud(t,t===pt?At:0);if(r===0)n!==null&&z0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&z0(n),e===1)t.tag===0?mR(D1.bind(null,t)):DE(D1.bind(null,t)),dR(function(){(ve&6)===0&&Di()}),n=null;else{switch(lE(r)){case 1:n=Uy;break;case 4:n=oE;break;case 16:n=ad;break;case 536870912:n=aE;break;default:n=ad}n=Nb(n,kb.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kb(t,e){if(Bc=-1,qc=0,(ve&6)!==0)throw Error(R(327));var n=t.callbackNode;if(_o()&&t.callbackNode!==n)return null;var r=ud(t,t===pt?At:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=kd(t,r);else{e=r;var i=ve;ve|=2;var s=Cb();(pt!==t||At!==e)&&(gr=null,Mo=Ze()+500,us(t,e));do try{$R();break}catch(a){xb(t,a)}while(1);Jy(),Ed.current=s,ve=i,rt!==null?e=0:(pt=null,At=0,e=ut)}if(e!==0){if(e===2&&(i=Fm(t),i!==0&&(r=i,e=hg(t,i))),e===1)throw n=Vu,us(t,0),Yr(t,r),hn(t,Ze()),n;if(e===6)Yr(t,r);else{if(i=t.current.alternate,(r&30)===0&&!DR(i)&&(e=kd(t,r),e===2&&(s=Fm(t),s!==0&&(r=s,e=hg(t,s))),e===1))throw n=Vu,us(t,0),Yr(t,r),hn(t,Ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:Wi(t,on,gr);break;case 3:if(Yr(t,r),(r&130023424)===r&&(e=fv+500-Ze(),10<e)){if(ud(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Hm(Wi.bind(null,t,on,gr),e);break}Wi(t,on,gr);break;case 4:if(Yr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-qn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*NR(r/1960))-r,10<r){t.timeoutHandle=Hm(Wi.bind(null,t,on,gr),r);break}Wi(t,on,gr);break;case 5:Wi(t,on,gr);break;default:throw Error(R(329))}}}return hn(t,Ze()),t.callbackNode===n?kb.bind(null,t):null}function hg(t,e){var n=cu;return t.current.memoizedState.isDehydrated&&(us(t,e).flags|=256),t=kd(t,e),t!==2&&(e=on,on=n,e!==null&&fg(e)),t}function fg(t){on===null?on=t:on.push.apply(on,t)}function DR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yr(t,e){for(e&=~hv,e&=~Ah,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),r=1<<n;t[n]=-1,e&=~r}}function D1(t){if((ve&6)!==0)throw Error(R(327));_o();var e=ud(t,0);if((e&1)===0)return hn(t,Ze()),null;var n=kd(t,e);if(t.tag!==0&&n===2){var r=Fm(t);r!==0&&(e=r,n=hg(t,r))}if(n===1)throw n=Vu,us(t,0),Yr(t,e),hn(t,Ze()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wi(t,on,gr),hn(t,Ze()),null}function pv(t,e){var n=ve;ve|=1;try{return t(e)}finally{ve=n,ve===0&&(Mo=Ze()+500,kh&&Di())}}function ws(t){ti!==null&&ti.tag===0&&(ve&6)===0&&_o();var e=ve;ve|=1;var n=Rn.transition,r=Te;try{if(Rn.transition=null,Te=1,t)return t()}finally{Te=r,Rn.transition=n,ve=e,(ve&6)===0&&Di()}}function mv(){mn=co.current,Re(co)}function us(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cR(n)),rt!==null)for(n=rt.return;n!==null;){var r=n;switch(Qy(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fd();break;case 3:Lo(),Re(cn),Re(Bt),iv();break;case 5:rv(r);break;case 4:Lo();break;case 13:Re(je);break;case 19:Re(je);break;case 10:Zy(r.type._context);break;case 22:case 23:mv()}n=n.return}if(pt=t,rt=t=hi(t.current,null),At=mn=e,ut=0,Vu=null,hv=Ah=vs=0,on=cu=null,ts!==null){for(e=0;e<ts.length;e++)if(n=ts[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ts=null}return t}function xb(t,e){do{var n=rt;try{if(Jy(),Vc.current=Id,_d){for(var r=ze.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_d=!1}if(ys=0,ht=ot=ze=null,uu=!1,Mu=0,dv.current=null,n===null||n.return===null){ut=1,Vu=e,rt=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=At,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=_1(o);if(p!==null){p.flags&=-257,I1(p,o,a,s,e),p.mode&1&&S1(s,l,e),e=p,u=l;var m=e.updateQueue;if(m===null){var y=new Set;y.add(u),e.updateQueue=y}else m.add(u);break e}else{if((e&1)===0){S1(s,l,e),gv();break e}u=Error(R(426))}}else if($e&&a.mode&1){var w=_1(o);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),I1(w,o,a,s,e),Yy($o(u,a));break e}}s=u=$o(u,a),ut!==4&&(ut=2),cu===null?cu=[s]:cu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=cb(s,u,e);f1(s,g);break e;case 1:a=u;var f=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ci===null||!ci.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=db(s,a,e);f1(s,S);break e}}s=s.return}while(s!==null)}Ab(n)}catch(I){e=I,rt===n&&n!==null&&(rt=n=n.return);continue}break}while(1)}function Cb(){var t=Ed.current;return Ed.current=Id,t===null?Id:t}function gv(){(ut===0||ut===3||ut===2)&&(ut=4),pt===null||(vs&268435455)===0&&(Ah&268435455)===0||Yr(pt,At)}function kd(t,e){var n=ve;ve|=2;var r=Cb();(pt!==t||At!==e)&&(gr=null,us(t,e));do try{LR();break}catch(i){xb(t,i)}while(1);if(Jy(),ve=n,Ed.current=r,rt!==null)throw Error(R(261));return pt=null,At=0,ut}function LR(){for(;rt!==null;)Ob(rt)}function $R(){for(;rt!==null&&!aP();)Ob(rt)}function Ob(t){var e=Rb(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?Ab(t):rt=e,dv.current=null}function Ab(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=CR(n,e,mn),n!==null){rt=n;return}}else{if(n=OR(n,e),n!==null){n.flags&=32767,rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ut=6,rt=null;return}}if(e=e.sibling,e!==null){rt=e;return}rt=e=t}while(e!==null);ut===0&&(ut=5)}function Wi(t,e,n){var r=Te,i=Rn.transition;try{Rn.transition=null,Te=1,MR(t,e,n,r)}finally{Rn.transition=i,Te=r}return null}function MR(t,e,n,r){do _o();while(ti!==null);if((ve&6)!==0)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yP(t,s),t===pt&&(rt=pt=null,At=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||vc||(vc=!0,Nb(ad,function(){return _o(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Rn.transition,Rn.transition=null;var o=Te;Te=1;var a=ve;ve|=4,dv.current=null,PR(t,n),bb(n,t),rR(qm),ld=!!Bm,qm=Bm=null,t.current=n,RR(n),uP(),ve=a,Te=o,Rn.transition=s}else t.current=n;if(vc&&(vc=!1,ti=t,Td=i),s=t.pendingLanes,s===0&&(ci=null),dP(n.stateNode),hn(t,Ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bd)throw bd=!1,t=cg,cg=null,t;return(Td&1)!==0&&t.tag!==0&&_o(),s=t.pendingLanes,(s&1)!==0?t===dg?du++:(du=0,dg=t):du=0,Di(),null}function _o(){if(ti!==null){var t=lE(Td),e=Rn.transition,n=Te;try{if(Rn.transition=null,Te=16>t?16:t,ti===null)var r=!1;else{if(t=ti,ti=null,Td=0,(ve&6)!==0)throw Error(R(331));var i=ve;for(ve|=4,q=t.current;q!==null;){var s=q,o=s.child;if((q.flags&16)!==0){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(q=l;q!==null;){var c=q;switch(c.tag){case 0:case 11:case 15:lu(8,c,s)}var d=c.child;if(d!==null)d.return=c,q=d;else for(;q!==null;){c=q;var h=c.sibling,p=c.return;if(_b(c),c===l){q=null;break}if(h!==null){h.return=p,q=h;break}q=p}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}q=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:lu(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,q=g;break e}q=s.return}}var f=t.current;for(q=f;q!==null;){o=q;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,q=v;else e:for(o=f;q!==null;){if(a=q,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Oh(9,a)}}catch(I){Ge(a,a.return,I)}if(a===o){q=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,q=S;break e}q=a.return}}if(ve=i,Di(),ar&&typeof ar.onPostCommitFiberRoot=="function")try{ar.onPostCommitFiberRoot(_h,t)}catch{}r=!0}return r}finally{Te=n,Rn.transition=e}}return!1}function L1(t,e,n){e=$o(n,e),e=cb(t,e,1),t=li(t,e,1),e=Yt(),t!==null&&(Il(t,1,e),hn(t,e))}function Ge(t,e,n){if(t.tag===3)L1(t,t,n);else for(;e!==null;){if(e.tag===3){L1(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ci===null||!ci.has(r))){t=$o(n,t),t=db(e,t,1),e=li(e,t,1),t=Yt(),e!==null&&(Il(e,1,t),hn(e,t));break}}e=e.return}}function FR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,pt===t&&(At&n)===n&&(ut===4||ut===3&&(At&130023424)===At&&500>Ze()-fv?us(t,0):hv|=n),hn(t,e)}function Pb(t,e){e===0&&((t.mode&1)===0?e=1:(e=uc,uc<<=1,(uc&130023424)===0&&(uc=4194304)));var n=Yt();t=Cr(t,e),t!==null&&(Il(t,e,n),hn(t,n))}function UR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Pb(t,n)}function VR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),Pb(t,n)}var Rb;Rb=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)an=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return an=!1,xR(t,e,n);an=(t.flags&131072)!==0}else an=!1,$e&&(e.flags&1048576)!==0&&LE(e,gd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;zc(t,e),t=e.pendingProps;var i=Ro(e,Bt.current);So(e,n),i=ov(null,e,r,t,i,n);var s=av();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(r)?(s=!0,pd(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tv(e),i.updater=xh,e.stateNode=i,i._reactInternals=e,Zm(e,r,t,n),e=ng(null,e,r,!0,s,n)):(e.tag=0,$e&&s&&Ky(e),Ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(zc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=zR(r),t=Un(r,t),i){case 0:e=tg(null,e,r,t,n);break e;case 1:e=T1(null,e,r,t,n);break e;case 11:e=E1(null,e,r,t,n);break e;case 14:e=b1(null,e,r,Un(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Un(r,i),tg(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Un(r,i),T1(t,e,r,i,n);case 3:e:{if(mb(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,UE(t,e),wd(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=$o(Error(R(423)),e),e=k1(t,e,r,n,i);break e}else if(r!==i){i=$o(Error(R(424)),e),e=k1(t,e,r,n,i);break e}else for(yn=ui(e.stateNode.containerInfo.firstChild),wn=e,$e=!0,jn=null,n=BE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(No(),r===i){e=Or(t,e,n);break e}Ht(t,e,r,n)}e=e.child}return e;case 5:return qE(e),t===null&&Ym(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Wm(r,i)?o=null:s!==null&&Wm(r,s)&&(e.flags|=32),pb(t,e),Ht(t,e,o,n),e.child;case 6:return t===null&&Ym(e),null;case 13:return gb(t,e,n);case 4:return nv(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Do(e,null,r,n):Ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Un(r,i),E1(t,e,r,i,n);case 7:return Ht(t,e,e.pendingProps,n),e.child;case 8:return Ht(t,e,e.pendingProps.children,n),e.child;case 12:return Ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ae(yd,r._currentValue),r._currentValue=o,s!==null)if(Kn(s.value,o)){if(s.children===i.children&&!cn.current){e=Or(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=br(-1,n&-n),u.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Xm(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Xm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,So(e,n),i=Nn(i),r=r(i),e.flags|=1,Ht(t,e,r,n),e.child;case 14:return r=e.type,i=Un(r,e.pendingProps),i=Un(r.type,i),b1(t,e,r,i,n);case 15:return hb(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Un(r,i),zc(t,e),e.tag=1,dn(r)?(t=!0,pd(e)):t=!1,So(e,n),jE(e,r,i),Zm(e,r,i,n),ng(null,e,r,!0,t,n);case 19:return yb(t,e,n);case 22:return fb(t,e,n)}throw Error(R(156,e.tag))};function Nb(t,e){return sE(t,e)}function jR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,r){return new jR(t,e,n,r)}function yv(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zR(t){if(typeof t=="function")return yv(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$y)return 11;if(t===My)return 14}return 2}function hi(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yv(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case eo:return ls(n.children,i,s,e);case Ly:o=8,i|=8;break;case Em:return t=An(12,n,e,i|2),t.elementType=Em,t.lanes=s,t;case bm:return t=An(13,n,e,i),t.elementType=bm,t.lanes=s,t;case Tm:return t=An(19,n,e,i),t.elementType=Tm,t.lanes=s,t;case zI:return Ph(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case VI:o=10;break e;case jI:o=9;break e;case $y:o=11;break e;case My:o=14;break e;case Hr:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=An(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ls(t,e,n,r){return t=An(7,t,r,e),t.lanes=n,t}function Ph(t,e,n,r){return t=An(22,t,r,e),t.elementType=zI,t.lanes=n,t.stateNode={isHidden:!1},t}function Pp(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function Rp(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function BR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hp(0),this.expirationTimes=hp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hp(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vv(t,e,n,r,i,s,o,a,u){return t=new BR(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tv(s),t}function qR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Db(t){if(!t)return vi;t=t._reactInternals;e:{if(Ms(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(dn(n))return NE(t,n,e)}return e}function Lb(t,e,n,r,i,s,o,a,u){return t=vv(n,r,!0,t,i,s,o,a,u),t.context=Db(null),n=t.current,r=Yt(),i=di(n),s=br(r,i),s.callback=e!=null?e:null,li(n,s,i),t.current.lanes=i,Il(t,i,r),hn(t,r),t}function Rh(t,e,n,r){var i=e.current,s=Yt(),o=di(i);return n=Db(n),e.context===null?e.context=n:e.pendingContext=n,e=br(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=li(i,e,o),t!==null&&(Wn(t,i,o,s),Uc(t,i,o)),o}function xd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wv(t,e){$1(t,e),(t=t.alternate)&&$1(t,e)}function WR(){return null}var $b=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sv(t){this._internalRoot=t}Nh.prototype.render=Sv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));Rh(t,e,null,null)};Nh.prototype.unmount=Sv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ws(function(){Rh(null,t,null,null)}),e[xr]=null}};function Nh(t){this._internalRoot=t}Nh.prototype.unstable_scheduleHydration=function(t){if(t){var e=hE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qr.length&&e!==0&&e<Qr[n].priority;n++);Qr.splice(n,0,t),n===0&&pE(t)}};function _v(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Dh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function M1(){}function HR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var l=xd(o);s.call(l)}}var o=Lb(e,r,t,0,null,!1,!1,"",M1);return t._reactRootContainer=o,t[xr]=o.current,Ru(t.nodeType===8?t.parentNode:t),ws(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=xd(u);a.call(l)}}var u=vv(t,0,!1,null,null,!1,!1,"",M1);return t._reactRootContainer=u,t[xr]=u.current,Ru(t.nodeType===8?t.parentNode:t),ws(function(){Rh(e,u,n,r)}),u}function Lh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=xd(o);a.call(u)}}Rh(e,o,t,i)}else o=HR(n,e,t,i,r);return xd(o)}cE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ka(e.pendingLanes);n!==0&&(Vy(e,n|1),hn(e,Ze()),(ve&6)===0&&(Mo=Ze()+500,Di()))}break;case 13:ws(function(){var r=Cr(t,1);if(r!==null){var i=Yt();Wn(r,t,1,i)}}),wv(t,1)}};jy=function(t){if(t.tag===13){var e=Cr(t,134217728);if(e!==null){var n=Yt();Wn(e,t,134217728,n)}wv(t,134217728)}};dE=function(t){if(t.tag===13){var e=di(t),n=Cr(t,e);if(n!==null){var r=Yt();Wn(n,t,e,r)}wv(t,e)}};hE=function(){return Te};fE=function(t,e){var n=Te;try{return Te=t,e()}finally{Te=n}};Lm=function(t,e,n){switch(e){case"input":if(Cm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Th(r);if(!i)throw Error(R(90));qI(r),Cm(r,i)}}}break;case"textarea":HI(t,n);break;case"select":e=n.value,e!=null&&go(t,!!n.multiple,e,!1)}};ZI=pv;eE=ws;var GR={usingClientEntryPoint:!1,Events:[bl,io,Th,XI,JI,pv]},Da={findFiberByHostInstance:es,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},KR={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rE(t),t===null?null:t.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||WR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wc.isDisabled&&wc.supportsFiber)try{_h=wc.inject(KR),ar=wc}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GR;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_v(e))throw Error(R(200));return qR(t,e,null,n)};Tn.createRoot=function(t,e){if(!_v(t))throw Error(R(299));var n=!1,r="",i=$b;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vv(t,1,!1,null,null,n,!1,r,i),t[xr]=e.current,Ru(t.nodeType===8?t.parentNode:t),new Sv(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=rE(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return ws(t)};Tn.hydrate=function(t,e,n){if(!Dh(e))throw Error(R(200));return Lh(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!_v(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$b;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Lb(e,null,t,1,n!=null?n:null,i,!1,s,o),t[xr]=e.current,Ru(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Nh(e)};Tn.render=function(t,e,n){if(!Dh(e))throw Error(R(200));return Lh(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!Dh(t))throw Error(R(40));return t._reactRootContainer?(ws(function(){Lh(null,null,t,!1,function(){t._reactRootContainer=null,t[xr]=null})}),!0):!1};Tn.unstable_batchedUpdates=pv;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Dh(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return Lh(t,e,n,!1,r)};Tn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Tn})(Py);var F1=Py.exports;_m.createRoot=F1.createRoot,_m.hydrateRoot=F1.hydrateRoot;var Mb={exports:{}},Fb={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=B.exports;function QR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var YR=typeof Object.is=="function"?Object.is:QR,XR=Fo.useState,JR=Fo.useEffect,ZR=Fo.useLayoutEffect,eN=Fo.useDebugValue;function tN(t,e){var n=e(),r=XR({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return ZR(function(){i.value=n,i.getSnapshot=e,Np(i)&&s({inst:i})},[t,n,e]),JR(function(){return Np(i)&&s({inst:i}),t(function(){Np(i)&&s({inst:i})})},[t]),eN(n),n}function Np(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!YR(t,n)}catch{return!0}}function nN(t,e){return e()}var rN=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?nN:tN;Fb.useSyncExternalStore=Fo.useSyncExternalStore!==void 0?Fo.useSyncExternalStore:rN;(function(t){t.exports=Fb})(Mb);var Ub={exports:{}},Vb={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h=B.exports,iN=Mb.exports;function sN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oN=typeof Object.is=="function"?Object.is:sN,aN=iN.useSyncExternalStore,uN=$h.useRef,lN=$h.useEffect,cN=$h.useMemo,dN=$h.useDebugValue;Vb.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=uN(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=cN(function(){function u(p){if(!l){if(l=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var m=o.value;if(i(m,p))return d=m}return d=p}if(m=d,oN(c,p))return m;var y=r(p);return i!==void 0&&i(m,y)?m:(c=p,d=y)}var l=!1,c,d,h=n===void 0?null:n;return[function(){return u(e())},h===null?void 0:function(){return u(h())}]},[e,n,r,i]);var a=aN(t,s[0],s[1]);return lN(function(){o.hasValue=!0,o.value=a},[a]),dN(a),a};(function(t){t.exports=Vb})(Ub);function hN(t){t()}let jb=hN;const fN=t=>jb=t,pN=()=>jb,wi=B.exports.createContext(null);function zb(){return B.exports.useContext(wi)}const mN=()=>{throw new Error("uSES not initialized!")};let Bb=mN;const gN=t=>{Bb=t},yN=(t,e)=>t===e;function vN(t=wi){const e=t===wi?zb:()=>B.exports.useContext(t);return function(r,i=yN){const{store:s,subscription:o,getServerState:a}=e(),u=Bb(o.addNestedSub,s.getState,a||s.getState,r,i);return B.exports.useDebugValue(u),u}}const Ss=vN();var Mh={exports:{}},ke={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wt=typeof Symbol=="function"&&Symbol.for,Iv=wt?Symbol.for("react.element"):60103,Ev=wt?Symbol.for("react.portal"):60106,Fh=wt?Symbol.for("react.fragment"):60107,Uh=wt?Symbol.for("react.strict_mode"):60108,Vh=wt?Symbol.for("react.profiler"):60114,jh=wt?Symbol.for("react.provider"):60109,zh=wt?Symbol.for("react.context"):60110,bv=wt?Symbol.for("react.async_mode"):60111,Bh=wt?Symbol.for("react.concurrent_mode"):60111,qh=wt?Symbol.for("react.forward_ref"):60112,Wh=wt?Symbol.for("react.suspense"):60113,wN=wt?Symbol.for("react.suspense_list"):60120,Hh=wt?Symbol.for("react.memo"):60115,Gh=wt?Symbol.for("react.lazy"):60116,SN=wt?Symbol.for("react.block"):60121,_N=wt?Symbol.for("react.fundamental"):60117,IN=wt?Symbol.for("react.responder"):60118,EN=wt?Symbol.for("react.scope"):60119;function xn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Iv:switch(t=t.type,t){case bv:case Bh:case Fh:case Vh:case Uh:case Wh:return t;default:switch(t=t&&t.$$typeof,t){case zh:case qh:case Gh:case Hh:case jh:return t;default:return e}}case Ev:return e}}}function qb(t){return xn(t)===Bh}ke.AsyncMode=bv;ke.ConcurrentMode=Bh;ke.ContextConsumer=zh;ke.ContextProvider=jh;ke.Element=Iv;ke.ForwardRef=qh;ke.Fragment=Fh;ke.Lazy=Gh;ke.Memo=Hh;ke.Portal=Ev;ke.Profiler=Vh;ke.StrictMode=Uh;ke.Suspense=Wh;ke.isAsyncMode=function(t){return qb(t)||xn(t)===bv};ke.isConcurrentMode=qb;ke.isContextConsumer=function(t){return xn(t)===zh};ke.isContextProvider=function(t){return xn(t)===jh};ke.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Iv};ke.isForwardRef=function(t){return xn(t)===qh};ke.isFragment=function(t){return xn(t)===Fh};ke.isLazy=function(t){return xn(t)===Gh};ke.isMemo=function(t){return xn(t)===Hh};ke.isPortal=function(t){return xn(t)===Ev};ke.isProfiler=function(t){return xn(t)===Vh};ke.isStrictMode=function(t){return xn(t)===Uh};ke.isSuspense=function(t){return xn(t)===Wh};ke.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Fh||t===Bh||t===Vh||t===Uh||t===Wh||t===wN||typeof t=="object"&&t!==null&&(t.$$typeof===Gh||t.$$typeof===Hh||t.$$typeof===jh||t.$$typeof===zh||t.$$typeof===qh||t.$$typeof===_N||t.$$typeof===IN||t.$$typeof===EN||t.$$typeof===SN)};ke.typeOf=xn;(function(t){t.exports=ke})(Mh);var Tv=Mh.exports,bN={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},TN={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kN={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kv={};kv[Tv.ForwardRef]=kN;kv[Tv.Memo]=Wb;function U1(t){return Tv.isMemo(t)?Wb:kv[t.$$typeof]||bN}var xN=Object.defineProperty,CN=Object.getOwnPropertyNames,V1=Object.getOwnPropertySymbols,ON=Object.getOwnPropertyDescriptor,AN=Object.getPrototypeOf,j1=Object.prototype;function Hb(t,e,n){if(typeof e!="string"){if(j1){var r=AN(e);r&&r!==j1&&Hb(t,r,n)}var i=CN(e);V1&&(i=i.concat(V1(e)));for(var s=U1(t),o=U1(e),a=0;a<i.length;++a){var u=i[a];if(!TN[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var l=ON(e,u);try{xN(t,u,l)}catch{}}}}return t}var PN=Hb,RN={exports:{}},xe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv=Symbol.for("react.element"),Cv=Symbol.for("react.portal"),Kh=Symbol.for("react.fragment"),Qh=Symbol.for("react.strict_mode"),Yh=Symbol.for("react.profiler"),Xh=Symbol.for("react.provider"),Jh=Symbol.for("react.context"),NN=Symbol.for("react.server_context"),Zh=Symbol.for("react.forward_ref"),ef=Symbol.for("react.suspense"),tf=Symbol.for("react.suspense_list"),nf=Symbol.for("react.memo"),rf=Symbol.for("react.lazy"),DN=Symbol.for("react.offscreen"),Gb;Gb=Symbol.for("react.module.reference");function $n(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case xv:switch(t=t.type,t){case Kh:case Yh:case Qh:case ef:case tf:return t;default:switch(t=t&&t.$$typeof,t){case NN:case Jh:case Zh:case rf:case nf:case Xh:return t;default:return e}}case Cv:return e}}}xe.ContextConsumer=Jh;xe.ContextProvider=Xh;xe.Element=xv;xe.ForwardRef=Zh;xe.Fragment=Kh;xe.Lazy=rf;xe.Memo=nf;xe.Portal=Cv;xe.Profiler=Yh;xe.StrictMode=Qh;xe.Suspense=ef;xe.SuspenseList=tf;xe.isAsyncMode=function(){return!1};xe.isConcurrentMode=function(){return!1};xe.isContextConsumer=function(t){return $n(t)===Jh};xe.isContextProvider=function(t){return $n(t)===Xh};xe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===xv};xe.isForwardRef=function(t){return $n(t)===Zh};xe.isFragment=function(t){return $n(t)===Kh};xe.isLazy=function(t){return $n(t)===rf};xe.isMemo=function(t){return $n(t)===nf};xe.isPortal=function(t){return $n(t)===Cv};xe.isProfiler=function(t){return $n(t)===Yh};xe.isStrictMode=function(t){return $n(t)===Qh};xe.isSuspense=function(t){return $n(t)===ef};xe.isSuspenseList=function(t){return $n(t)===tf};xe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Kh||t===Yh||t===Qh||t===ef||t===tf||t===DN||typeof t=="object"&&t!==null&&(t.$$typeof===rf||t.$$typeof===nf||t.$$typeof===Xh||t.$$typeof===Jh||t.$$typeof===Zh||t.$$typeof===Gb||t.getModuleId!==void 0)};xe.typeOf=$n;(function(t){t.exports=xe})(RN);function LN(){const t=pN();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const z1={notify(){},get:()=>[]};function $N(t,e){let n,r=z1;function i(d){return u(),r.subscribe(d)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return Boolean(n)}function u(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=LN())}function l(){n&&(n(),n=void 0,r.clear(),r=z1)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:u,tryUnsubscribe:l,getListeners:()=>r};return c}const MN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",FN=MN?B.exports.useLayoutEffect:B.exports.useEffect;var sf={exports:{}},of={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UN=B.exports,VN=Symbol.for("react.element"),jN=Symbol.for("react.fragment"),zN=Object.prototype.hasOwnProperty,BN=UN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qN={key:!0,ref:!0,__self:!0,__source:!0};function Kb(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)zN.call(e,r)&&!qN.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:VN,type:t,key:s,ref:o,props:i,_owner:BN.current}}of.Fragment=jN;of.jsx=Kb;of.jsxs=Kb;(function(t){t.exports=of})(sf);const Qb=sf.exports.Fragment,x=sf.exports.jsx,le=sf.exports.jsxs;function WN({store:t,context:e,children:n,serverState:r}){const i=B.exports.useMemo(()=>{const a=$N(t);return{store:t,subscription:a,getServerState:r?()=>r:void 0}},[t,r]),s=B.exports.useMemo(()=>t.getState(),[t]);return FN(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==t.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]),x((e||wi).Provider,{value:i,children:n})}function Yb(t=wi){const e=t===wi?zb:()=>B.exports.useContext(t);return function(){const{store:r}=e();return r}}const HN=Yb();function GN(t=wi){const e=t===wi?HN:Yb(t);return function(){return e().dispatch}}const Xb=GN();gN(Ub.exports.useSyncExternalStoreWithSelector);fN(Py.exports.unstable_batchedUpdates);/**
 * @remix-run/router v1.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cd(){return Cd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cd.apply(this,arguments)}var ni;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ni||(ni={}));const B1="popstate";function KN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return pg("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:mg(i)}return YN(e,n,null,t)}function QN(){return Math.random().toString(36).substr(2,8)}function q1(t){return{usr:t.state,key:t.key}}function pg(t,e,n,r){return n===void 0&&(n=null),Cd({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?aa(e):e,{state:n,key:e&&e.key||r||QN()})}function mg(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function aa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function YN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ni.Pop,u=null;function l(){a=ni.Pop,u&&u({action:a,location:h.location})}function c(p,m){a=ni.Push;let y=pg(h.location,p,m);n&&n(y,p);let w=q1(y),g=h.createHref(y);try{o.pushState(w,"",g)}catch{i.location.assign(g)}s&&u&&u({action:a,location:y})}function d(p,m){a=ni.Replace;let y=pg(h.location,p,m);n&&n(y,p);let w=q1(y),g=h.createHref(y);o.replaceState(w,"",g),s&&u&&u({action:a,location:y})}let h={get action(){return a},get location(){return t(i,o)},listen(p){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(B1,l),u=p,()=>{i.removeEventListener(B1,l),u=null}},createHref(p){return e(i,p)},push:c,replace:d,go(p){return o.go(p)}};return h}var W1;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(W1||(W1={}));function XN(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?aa(e):e,i=Zb(r.pathname||"/",n);if(i==null)return null;let s=Jb(t);JN(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=aD(s[a],i);return o}function Jb(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(fn(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=fi([r,o.relativePath]),u=n.concat(o);i.children&&i.children.length>0&&(fn(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),Jb(i.children,e,u,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:sD(a,i.index),routesMeta:u})}),e}function JN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:oD(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ZN=/^:\w+$/,eD=3,tD=2,nD=1,rD=10,iD=-2,H1=t=>t==="*";function sD(t,e){let n=t.split("/"),r=n.length;return n.some(H1)&&(r+=iD),e&&(r+=tD),n.filter(i=>!H1(i)).reduce((i,s)=>i+(ZN.test(s)?eD:s===""?nD:rD),r)}function oD(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function aD(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,l=i==="/"?e:e.slice(i.length)||"/",c=uD({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},l);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:fi([i,c.pathname]),pathnameBase:fD(fi([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=fi([i,c.pathnameBase]))}return s}function uD(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=lD(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((l,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return l[c]=cD(a[d]||"",c),l},{}),pathname:s,pathnameBase:o,pattern:t}}function lD(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),eT(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function cD(t,e){try{return decodeURIComponent(t)}catch(n){return eT(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Zb(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function fn(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function eT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dD(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?aa(t):t;return{pathname:n?n.startsWith("/")?n:hD(n,e):e,search:pD(r),hash:mD(i)}}function hD(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function tT(t,e,n,r){r===void 0&&(r=!1);let i=typeof t=="string"?aa(t):Cd({},t),s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let u=dD(i,a),l=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(l||c)&&(u.pathname+="/"),u}const fi=t=>t.join("/").replace(/\/\/+/g,"/"),fD=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),pD=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,mD=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class gD{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function yD(t){return t instanceof gD}/**
 * React Router v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gg(){return gg=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gg.apply(this,arguments)}function vD(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const wD=typeof Object.is=="function"?Object.is:vD,{useState:SD,useEffect:_D,useLayoutEffect:ID,useDebugValue:ED}=Sm;function bD(t,e,n){const r=e(),[{inst:i},s]=SD({inst:{value:r,getSnapshot:e}});return ID(()=>{i.value=r,i.getSnapshot=e,Dp(i)&&s({inst:i})},[t,r,e]),_D(()=>(Dp(i)&&s({inst:i}),t(()=>{Dp(i)&&s({inst:i})})),[t]),ED(r),r}function Dp(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!wD(n,r)}catch{return!0}}function TD(t,e,n){return e()}const kD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xD=!kD,CD=xD?TD:bD;"useSyncExternalStore"in Sm&&(t=>t.useSyncExternalStore)(Sm);const OD=B.exports.createContext(null),AD=B.exports.createContext(null),nT=B.exports.createContext(null),Ov=B.exports.createContext(null),af=B.exports.createContext(null),ua=B.exports.createContext({outlet:null,matches:[]}),rT=B.exports.createContext(null);function PD(t,e){let{relative:n}=e===void 0?{}:e;kl()||fn(!1);let{basename:r,navigator:i}=B.exports.useContext(Ov),{hash:s,pathname:o,search:a}=oT(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:fi([r,o])),i.createHref({pathname:u,search:a,hash:s})}function kl(){return B.exports.useContext(af)!=null}function uf(){return kl()||fn(!1),B.exports.useContext(af).location}function iT(t){return t.filter((e,n)=>n===0||!e.route.index&&e.pathnameBase!==t[n-1].pathnameBase)}function sT(){kl()||fn(!1);let{basename:t,navigator:e}=B.exports.useContext(Ov),{matches:n}=B.exports.useContext(ua),{pathname:r}=uf(),i=JSON.stringify(iT(n).map(a=>a.pathnameBase)),s=B.exports.useRef(!1);return B.exports.useEffect(()=>{s.current=!0}),B.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let l=tT(a,JSON.parse(i),r,u.relative==="path");t!=="/"&&(l.pathname=l.pathname==="/"?t:fi([t,l.pathname])),(u.replace?e.replace:e.push)(l,u.state,u)},[t,e,i,r])}function RD(){let{matches:t}=B.exports.useContext(ua),e=t[t.length-1];return e?e.params:{}}function oT(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=B.exports.useContext(ua),{pathname:i}=uf(),s=JSON.stringify(iT(r).map(o=>o.pathnameBase));return B.exports.useMemo(()=>tT(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function ND(t,e){kl()||fn(!1);let n=B.exports.useContext(nT),{matches:r}=B.exports.useContext(ua),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=uf(),u;if(e){var l;let m=typeof e=="string"?aa(e):e;o==="/"||((l=m.pathname)==null?void 0:l.startsWith(o))||fn(!1),u=m}else u=a;let c=u.pathname||"/",d=o==="/"?c:c.slice(o.length)||"/",h=XN(t,{pathname:d}),p=MD(h&&h.map(m=>Object.assign({},m,{params:Object.assign({},s,m.params),pathname:fi([o,m.pathname]),pathnameBase:m.pathnameBase==="/"?o:fi([o,m.pathnameBase])})),r,n||void 0);return e?x(af.Provider,{value:{location:gg({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ni.Pop},children:p}):p}function DD(){let t=UD(),e=yD(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return le(Qb,{children:[x("h2",{children:"Unhandled Thrown Error!"}),x("h3",{style:{fontStyle:"italic"},children:e}),n?x("pre",{style:i,children:n}):null,x("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),le("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",x("code",{style:s,children:"errorElement"})," props on\xA0",x("code",{style:s,children:"<Route>"})]})]})}class LD extends B.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?x(rT.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function $D(t){let{routeContext:e,match:n,children:r}=t,i=B.exports.useContext(OD);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),x(ua.Provider,{value:e,children:r})}function MD(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||fn(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let u=o.route.id?i==null?void 0:i[o.route.id]:null,l=n?o.route.errorElement||x(DD,{}):null,c=()=>x($D,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))},children:u?l:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?x(LD,{location:n.location,component:l,error:u,children:c()}):c()},null)}var yg;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(yg||(yg={}));function FD(t){let e=B.exports.useContext(nT);return e||fn(!1),e}function UD(){var t;let e=B.exports.useContext(rT),n=FD(yg.UseRouteError),r=B.exports.useContext(ua),i=r.matches[r.matches.length-1];return e||(r||fn(!1),i.route.id||fn(!1),(t=n.errors)==null?void 0:t[i.route.id])}function Hc(t){fn(!1)}function VD(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ni.Pop,navigator:s,static:o=!1}=t;kl()&&fn(!1);let a=e.replace(/^\/*/,"/"),u=B.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=aa(r));let{pathname:l="/",search:c="",hash:d="",state:h=null,key:p="default"}=r,m=B.exports.useMemo(()=>{let y=Zb(l,a);return y==null?null:{pathname:y,search:c,hash:d,state:h,key:p}},[a,l,c,d,h,p]);return m==null?null:x(Ov.Provider,{value:u,children:x(af.Provider,{children:n,value:{location:m,navigationType:i}})})}function jD(t){let{children:e,location:n}=t,r=B.exports.useContext(AD),i=r&&!e?r.router.routes:vg(e);return ND(i,n)}var G1;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(G1||(G1={}));new Promise(()=>{});function vg(t,e){e===void 0&&(e=[]);let n=[];return B.exports.Children.forEach(t,(r,i)=>{if(!B.exports.isValidElement(r))return;if(r.type===B.exports.Fragment){n.push.apply(n,vg(r.props.children,e));return}r.type!==Hc&&fn(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=vg(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function BD(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function qD(t,e){return t.button===0&&(!e||e==="_self")&&!BD(t)}const WD=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function HD(t){let{basename:e,children:n,window:r}=t,i=B.exports.useRef();i.current==null&&(i.current=KN({window:r,v5Compat:!0}));let s=i.current,[o,a]=B.exports.useState({action:s.action,location:s.location});return B.exports.useLayoutEffect(()=>s.listen(a),[s]),x(VD,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const lf=B.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:l,preventScrollReset:c}=e,d=zD(e,WD),h=PD(l,{relative:i}),p=GD(l,{replace:o,state:a,target:u,preventScrollReset:c,relative:i});function m(y){r&&r(y),y.defaultPrevented||p(y)}return x("a",{...d,href:h,onClick:s?r:m,ref:n,target:u})});function GD(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=sT(),u=uf(),l=oT(t,{relative:o});return B.exports.useCallback(c=>{if(qD(c,n)){c.preventDefault();let d=r!==void 0?r:mg(u)===mg(l);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[u,a,l,r,i,n,t,s,o])}function KD(t){function e($,z,j,ne,E){for(var fe=0,F=0,He=0,Ie=0,be,ue,Et=0,tn=0,Se,$t=Se=be=0,Ee=0,bt=0,Ta=0,Tt=0,tc=j.length,ka=tc-1,Mn,ie="",Je="",sp="",op="",jr;Ee<tc;){if(ue=j.charCodeAt(Ee),Ee===ka&&F+Ie+He+fe!==0&&(F!==0&&(ue=F===47?10:47),Ie=He=fe=0,tc++,ka++),F+Ie+He+fe===0){if(Ee===ka&&(0<bt&&(ie=ie.replace(h,"")),0<ie.trim().length)){switch(ue){case 32:case 9:case 59:case 13:case 10:break;default:ie+=j.charAt(Ee)}ue=59}switch(ue){case 123:for(ie=ie.trim(),be=ie.charCodeAt(0),Se=1,Tt=++Ee;Ee<tc;){switch(ue=j.charCodeAt(Ee)){case 123:Se++;break;case 125:Se--;break;case 47:switch(ue=j.charCodeAt(Ee+1)){case 42:case 47:e:{for($t=Ee+1;$t<ka;++$t)switch(j.charCodeAt($t)){case 47:if(ue===42&&j.charCodeAt($t-1)===42&&Ee+2!==$t){Ee=$t+1;break e}break;case 10:if(ue===47){Ee=$t+1;break e}}Ee=$t}}break;case 91:ue++;case 40:ue++;case 34:case 39:for(;Ee++<ka&&j.charCodeAt(Ee)!==ue;);}if(Se===0)break;Ee++}switch(Se=j.substring(Tt,Ee),be===0&&(be=(ie=ie.replace(d,"").trim()).charCodeAt(0)),be){case 64:switch(0<bt&&(ie=ie.replace(h,"")),ue=ie.charCodeAt(1),ue){case 100:case 109:case 115:case 45:bt=z;break;default:bt=st}if(Se=e(z,bt,Se,ue,E+1),Tt=Se.length,0<L&&(bt=n(st,ie,Ta),jr=a(3,Se,bt,z,H,W,Tt,ue,E,ne),ie=bt.join(""),jr!==void 0&&(Tt=(Se=jr.trim()).length)===0&&(ue=0,Se="")),0<Tt)switch(ue){case 115:ie=ie.replace(k,o);case 100:case 109:case 45:Se=ie+"{"+Se+"}";break;case 107:ie=ie.replace(f,"$1 $2"),Se=ie+"{"+Se+"}",Se=ge===1||ge===2&&s("@"+Se,3)?"@-webkit-"+Se+"@"+Se:"@"+Se;break;default:Se=ie+Se,ne===112&&(Se=(Je+=Se,""))}else Se="";break;default:Se=e(z,n(z,ie,Ta),Se,ne,E+1)}sp+=Se,Se=Ta=bt=$t=be=0,ie="",ue=j.charCodeAt(++Ee);break;case 125:case 59:if(ie=(0<bt?ie.replace(h,""):ie).trim(),1<(Tt=ie.length))switch($t===0&&(be=ie.charCodeAt(0),be===45||96<be&&123>be)&&(Tt=(ie=ie.replace(" ",":")).length),0<L&&(jr=a(1,ie,z,$,H,W,Je.length,ne,E,ne))!==void 0&&(Tt=(ie=jr.trim()).length)===0&&(ie="\0\0"),be=ie.charCodeAt(0),ue=ie.charCodeAt(1),be){case 0:break;case 64:if(ue===105||ue===99){op+=ie+j.charAt(Ee);break}default:ie.charCodeAt(Tt-1)!==58&&(Je+=i(ie,be,ue,ie.charCodeAt(2)))}Ta=bt=$t=be=0,ie="",ue=j.charCodeAt(++Ee)}}switch(ue){case 13:case 10:F===47?F=0:1+be===0&&ne!==107&&0<ie.length&&(bt=1,ie+="\0"),0<L*X&&a(0,ie,z,$,H,W,Je.length,ne,E,ne),W=1,H++;break;case 59:case 125:if(F+Ie+He+fe===0){W++;break}default:switch(W++,Mn=j.charAt(Ee),ue){case 9:case 32:if(Ie+fe+F===0)switch(Et){case 44:case 58:case 9:case 32:Mn="";break;default:ue!==32&&(Mn=" ")}break;case 0:Mn="\\0";break;case 12:Mn="\\f";break;case 11:Mn="\\v";break;case 38:Ie+F+fe===0&&(bt=Ta=1,Mn="\f"+Mn);break;case 108:if(Ie+F+fe+Xe===0&&0<$t)switch(Ee-$t){case 2:Et===112&&j.charCodeAt(Ee-3)===58&&(Xe=Et);case 8:tn===111&&(Xe=tn)}break;case 58:Ie+F+fe===0&&($t=Ee);break;case 44:F+He+Ie+fe===0&&(bt=1,Mn+="\r");break;case 34:case 39:F===0&&(Ie=Ie===ue?0:Ie===0?ue:Ie);break;case 91:Ie+F+He===0&&fe++;break;case 93:Ie+F+He===0&&fe--;break;case 41:Ie+F+fe===0&&He--;break;case 40:if(Ie+F+fe===0){if(be===0)switch(2*Et+3*tn){case 533:break;default:be=1}He++}break;case 64:F+He+Ie+fe+$t+Se===0&&(Se=1);break;case 42:case 47:if(!(0<Ie+fe+He))switch(F){case 0:switch(2*ue+3*j.charCodeAt(Ee+1)){case 235:F=47;break;case 220:Tt=Ee,F=42}break;case 42:ue===47&&Et===42&&Tt+2!==Ee&&(j.charCodeAt(Tt+2)===33&&(Je+=j.substring(Tt,Ee+1)),Mn="",F=0)}}F===0&&(ie+=Mn)}tn=Et,Et=ue,Ee++}if(Tt=Je.length,0<Tt){if(bt=z,0<L&&(jr=a(2,Je,bt,$,H,W,Tt,ne,E,ne),jr!==void 0&&(Je=jr).length===0))return op+Je+sp;if(Je=bt.join(",")+"{"+Je+"}",ge*Xe!==0){switch(ge!==2||s(Je,2)||(Xe=0),Xe){case 111:Je=Je.replace(S,":-moz-$1")+Je;break;case 112:Je=Je.replace(v,"::-webkit-input-$1")+Je.replace(v,"::-moz-$1")+Je.replace(v,":-ms-input-$1")+Je}Xe=0}}return op+Je+sp}function n($,z,j){var ne=z.trim().split(w);z=ne;var E=ne.length,fe=$.length;switch(fe){case 0:case 1:var F=0;for($=fe===0?"":$[0]+" ";F<E;++F)z[F]=r($,z[F],j).trim();break;default:var He=F=0;for(z=[];F<E;++F)for(var Ie=0;Ie<fe;++Ie)z[He++]=r($[Ie]+" ",ne[F],j).trim()}return z}function r($,z,j){var ne=z.charCodeAt(0);switch(33>ne&&(ne=(z=z.trim()).charCodeAt(0)),ne){case 38:return z.replace(g,"$1"+$.trim());case 58:return $.trim()+z.replace(g,"$1"+$.trim());default:if(0<1*j&&0<z.indexOf("\f"))return z.replace(g,($.charCodeAt(0)===58?"":"$1")+$.trim())}return $+z}function i($,z,j,ne){var E=$+";",fe=2*z+3*j+4*ne;if(fe===944){$=E.indexOf(":",9)+1;var F=E.substring($,E.length-1).trim();return F=E.substring(0,$).trim()+F+";",ge===1||ge===2&&s(F,1)?"-webkit-"+F+F:F}if(ge===0||ge===2&&!s(E,1))return E;switch(fe){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(Q,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return F=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+F+"-webkit-"+E+"-ms-flex-pack"+F+E;case 1005:return m.test(E)?E.replace(p,":-webkit-")+E.replace(p,":-moz-")+E:E;case 1e3:switch(F=E.substring(13).trim(),z=F.indexOf("-")+1,F.charCodeAt(0)+F.charCodeAt(z)){case 226:F=E.replace(I,"tb");break;case 232:F=E.replace(I,"tb-rl");break;case 220:F=E.replace(I,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+F+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch(z=(E=$).length-10,F=(E.charCodeAt(z)===33?E.substring(0,z):E).substring($.indexOf(":",7)+1).trim(),fe=F.charCodeAt(0)+(F.charCodeAt(7)|0)){case 203:if(111>F.charCodeAt(8))break;case 115:E=E.replace(F,"-webkit-"+F)+";"+E;break;case 207:case 102:E=E.replace(F,"-webkit-"+(102<fe?"inline-":"")+"box")+";"+E.replace(F,"-webkit-"+F)+";"+E.replace(F,"-ms-"+F+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return F=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+F+"-ms-flex-"+F+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(b,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(b,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(D.test($)===!0)return(F=$.substring($.indexOf(":")+1)).charCodeAt(0)===115?i($.replace("stretch","fill-available"),z,j,ne).replace(":fill-available",":stretch"):E.replace(F,"-webkit-"+F)+E.replace(F,"-moz-"+F.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,j+ne===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+E}return E}function s($,z){var j=$.indexOf(z===1?":":"{"),ne=$.substring(0,z!==3?j:10);return j=$.substring(j+1,$.length-1),J(z!==2?ne:ne.replace(P,"$1"),j,z)}function o($,z){var j=i(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return j!==z+";"?j.replace(C," or ($1)").substring(4):"("+z+")"}function a($,z,j,ne,E,fe,F,He,Ie,be){for(var ue=0,Et=z,tn;ue<L;++ue)switch(tn=We[ue].call(c,$,Et,j,ne,E,fe,F,He,Ie,be)){case void 0:case!1:case!0:case null:break;default:Et=tn}if(Et!==z)return Et}function u($){switch($){case void 0:case null:L=We.length=0;break;default:if(typeof $=="function")We[L++]=$;else if(typeof $=="object")for(var z=0,j=$.length;z<j;++z)u($[z]);else X=!!$|0}return u}function l($){return $=$.prefix,$!==void 0&&(J=null,$?typeof $!="function"?ge=1:(ge=2,J=$):ge=0),l}function c($,z){var j=$;if(33>j.charCodeAt(0)&&(j=j.trim()),_e=j,j=[_e],0<L){var ne=a(-1,z,j,j,H,W,0,0,0,0);ne!==void 0&&typeof ne=="string"&&(z=ne)}var E=e(st,j,z,0,0);return 0<L&&(ne=a(-2,E,j,j,H,W,E.length,0,0,0),ne!==void 0&&(E=ne)),_e="",Xe=0,W=H=1,E}var d=/^\0+/g,h=/[\0\r\f]/g,p=/: */g,m=/zoo|gra/,y=/([,: ])(transform)/g,w=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,S=/:(read-only)/g,I=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,b=/-self|flex-/g,P=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,Q=/([^-])(image-set\()/,W=1,H=1,Xe=0,ge=1,st=[],We=[],L=0,J=null,X=0,_e="";return c.use=u,c.set=l,t!==void 0&&l(t),c}var QD={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function YD(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var XD=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,K1=YD(function(t){return XD.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function Sr(){return(Sr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var Q1=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},wg=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Mh.exports.typeOf(t)},Od=Object.freeze([]),pi=Object.freeze({});function ju(t){return typeof t=="function"}function Y1(t){return t.displayName||t.name||"Component"}function Av(t){return t&&typeof t.styledComponentId=="string"}var Uo=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Pv=typeof window<"u"&&"HTMLElement"in window,JD=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function xl(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var ZD=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&xl(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),l=0,c=r.length;l<c;l++)this.tag.insertRule(u,r[l])&&(this.groupSizes[n]++,u++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Gc=new Map,Ad=new Map,hu=1,Sc=function(t){if(Gc.has(t))return Gc.get(t);for(;Ad.has(hu);)hu++;var e=hu++;return Gc.set(t,e),Ad.set(e,t),e},eL=function(t){return Ad.get(t)},tL=function(t,e){e>=hu&&(hu=e+1),Gc.set(t,e),Ad.set(e,t)},nL="style["+Uo+'][data-styled-version="5.3.5"]',rL=new RegExp("^"+Uo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),iL=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},sL=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(rL);if(a){var u=0|parseInt(a[1],10),l=a[2];u!==0&&(tL(l,u),iL(t,l,a[3]),t.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}},oL=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},aT=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,l=u.length;l>=0;l--){var c=u[l];if(c&&c.nodeType===1&&c.hasAttribute(Uo))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Uo,"active"),r.setAttribute("data-styled-version","5.3.5");var o=oL();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},aL=function(){function t(n){var r=this.element=aT(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var u=s[o];if(u.ownerNode===i)return u}xl(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),uL=function(){function t(n){var r=this.element=aT(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),lL=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),X1=Pv,cL={isServer:!Pv,useCSSOMInjection:!JD},uT=function(){function t(n,r,i){n===void 0&&(n=pi),r===void 0&&(r={}),this.options=Sr({},cL,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Pv&&X1&&(X1=!1,function(s){for(var o=document.querySelectorAll(nL),a=0,u=o.length;a<u;a++){var l=o[a];l&&l.getAttribute(Uo)!=="active"&&(sL(s,l),l.parentNode&&l.parentNode.removeChild(l))}}(this))}t.registerId=function(n){return Sc(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Sr({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new lL(o):s?new aL(o):new uL(o),new ZD(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Sc(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Sc(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Sc(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=eL(o);if(a!==void 0){var u=n.names.get(a),l=r.getGroup(o);if(u&&l&&u.size){var c=Uo+".g"+o+'[id="'+a+'"]',d="";u!==void 0&&u.forEach(function(h){h.length>0&&(d+=h+",")}),s+=""+l+c+'{content:"'+d+`"}/*!sc*/
`}}}return s}(this)},t}(),dL=/(a)(d)/gi,J1=function(t){return String.fromCharCode(t+(t>25?39:97))};function Sg(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=J1(e%52)+n;return(J1(e%52)+n).replace(dL,"$1-$2")}var ho=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},lT=function(t){return ho(5381,t)};function hL(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ju(n)&&!Av(n))return!1}return!0}var fL=lT("5.3.5"),pL=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&hL(e),this.componentId=n,this.baseHash=ho(fL,n),this.baseStyle=r,uT.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Vo(this.rules,e,n,r).join(""),a=Sg(ho(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var u=r(o,"."+a,void 0,i);n.insertRules(i,a,u)}s.push(a),this.staticRulesId=a}else{for(var l=this.rules.length,c=ho(this.baseHash,r.hash),d="",h=0;h<l;h++){var p=this.rules[h];if(typeof p=="string")d+=p;else if(p){var m=Vo(p,e,n,r),y=Array.isArray(m)?m.join(""):m;c=ho(c,y+h),d+=y}}if(d){var w=Sg(c>>>0);if(!n.hasNameForId(i,w)){var g=r(d,"."+w,void 0,i);n.insertRules(i,w,g)}s.push(w)}}return s.join(" ")},t}(),mL=/^\s*\/\/.*$/gm,gL=[":","[",".","#"];function yL(t){var e,n,r,i,s=t===void 0?pi:t,o=s.options,a=o===void 0?pi:o,u=s.plugins,l=u===void 0?Od:u,c=new KD(a),d=[],h=function(y){function w(g){if(g)try{y(g+"}")}catch{}}return function(g,f,v,S,I,k,C,b,P,D){switch(g){case 1:if(P===0&&f.charCodeAt(0)===64)return y(f+";"),"";break;case 2:if(b===0)return f+"/*|*/";break;case 3:switch(b){case 102:case 112:return y(v[0]+f),"";default:return f+(D===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(w)}}}(function(y){d.push(y)}),p=function(y,w,g){return w===0&&gL.indexOf(g[n.length])!==-1||g.match(i)?y:"."+e};function m(y,w,g,f){f===void 0&&(f="&");var v=y.replace(mL,""),S=w&&g?g+" "+w+" { "+v+" }":v;return e=f,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(g||!w?"":w,S)}return c.use([].concat(l,[function(y,w,g){y===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,p))},h,function(y){if(y===-2){var w=d;return d=[],w}}])),m.hash=l.length?l.reduce(function(y,w){return w.name||xl(15),ho(y,w.name)},5381).toString():"",m}var cT=ia.createContext();cT.Consumer;var dT=ia.createContext(),vL=(dT.Consumer,new uT),_g=yL();function wL(){return B.exports.useContext(cT)||vL}function SL(){return B.exports.useContext(dT)||_g}var _L=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=_g);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return xl(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=_g),this.name+e.hash},t}(),IL=/([A-Z])/,EL=/([A-Z])/g,bL=/^ms-/,TL=function(t){return"-"+t.toLowerCase()};function Z1(t){return IL.test(t)?t.replace(EL,TL).replace(bL,"-ms-"):t}var eS=function(t){return t==null||t===!1||t===""};function Vo(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Vo(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(eS(t))return"";if(Av(t))return"."+t.styledComponentId;if(ju(t)){if(typeof(l=t)!="function"||l.prototype&&l.prototype.isReactComponent||!e)return t;var u=t(e);return Vo(u,e,n,r)}var l;return t instanceof _L?n?(t.inject(n,r),t.getName(r)):t:wg(t)?function c(d,h){var p,m,y=[];for(var w in d)d.hasOwnProperty(w)&&!eS(d[w])&&(Array.isArray(d[w])&&d[w].isCss||ju(d[w])?y.push(Z1(w)+":",d[w],";"):wg(d[w])?y.push.apply(y,c(d[w],w)):y.push(Z1(w)+": "+(p=w,(m=d[w])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||p in QD?String(m).trim():m+"px")+";"));return h?[h+" {"].concat(y,["}"]):y}(t):t.toString()}var tS=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function kL(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return ju(t)||wg(t)?tS(Vo(Q1(Od,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:tS(Vo(Q1(t,n)))}var xL=function(t,e,n){return n===void 0&&(n=pi),t.theme!==n.theme&&t.theme||e||n.theme},CL=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,OL=/(^-|-$)/g;function Lp(t){return t.replace(CL,"-").replace(OL,"")}var AL=function(t){return Sg(lT(t)>>>0)};function _c(t){return typeof t=="string"&&!0}var Ig=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},PL=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function RL(t,e,n){var r=t[n];Ig(e)&&Ig(r)?hT(r,e):t[n]=e}function hT(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Ig(o))for(var a in o)PL(a)&&RL(t,o[a],a)}return t}var fT=ia.createContext();fT.Consumer;var $p={};function pT(t,e,n){var r=Av(t),i=!_c(t),s=e.attrs,o=s===void 0?Od:s,a=e.componentId,u=a===void 0?function(f,v){var S=typeof f!="string"?"sc":Lp(f);$p[S]=($p[S]||0)+1;var I=S+"-"+AL("5.3.5"+S+$p[S]);return v?v+"-"+I:I}(e.displayName,e.parentComponentId):a,l=e.displayName,c=l===void 0?function(f){return _c(f)?"styled."+f:"Styled("+Y1(f)+")"}(t):l,d=e.displayName&&e.componentId?Lp(e.displayName)+"-"+e.componentId:e.componentId||u,h=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,v,S){return t.shouldForwardProp(f,v,S)&&e.shouldForwardProp(f,v,S)}:t.shouldForwardProp);var m,y=new pL(n,d,r?t.componentStyle:void 0),w=y.isStatic&&o.length===0,g=function(f,v){return function(S,I,k,C){var b=S.attrs,P=S.componentStyle,D=S.defaultProps,Q=S.foldedComponentIds,W=S.shouldForwardProp,H=S.styledComponentId,Xe=S.target,ge=function(ne,E,fe){ne===void 0&&(ne=pi);var F=Sr({},E,{theme:ne}),He={};return fe.forEach(function(Ie){var be,ue,Et,tn=Ie;for(be in ju(tn)&&(tn=tn(F)),tn)F[be]=He[be]=be==="className"?(ue=He[be],Et=tn[be],ue&&Et?ue+" "+Et:ue||Et):tn[be]}),[F,He]}(xL(I,B.exports.useContext(fT),D)||pi,I,b),st=ge[0],We=ge[1],L=function(ne,E,fe,F){var He=wL(),Ie=SL(),be=E?ne.generateAndInjectStyles(pi,He,Ie):ne.generateAndInjectStyles(fe,He,Ie);return be}(P,C,st),J=k,X=We.$as||I.$as||We.as||I.as||Xe,_e=_c(X),$=We!==I?Sr({},I,{},We):I,z={};for(var j in $)j[0]!=="$"&&j!=="as"&&(j==="forwardedAs"?z.as=$[j]:(W?W(j,K1,X):!_e||K1(j))&&(z[j]=$[j]));return I.style&&We.style!==I.style&&(z.style=Sr({},I.style,{},We.style)),z.className=Array.prototype.concat(Q,H,L!==H?L:null,I.className,We.className).filter(Boolean).join(" "),z.ref=J,B.exports.createElement(X,z)}(m,f,v,w)};return g.displayName=c,(m=ia.forwardRef(g)).attrs=h,m.componentStyle=y,m.displayName=c,m.shouldForwardProp=p,m.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Od,m.styledComponentId=d,m.target=r?t.target:t,m.withComponent=function(f){var v=e.componentId,S=function(k,C){if(k==null)return{};var b,P,D={},Q=Object.keys(k);for(P=0;P<Q.length;P++)b=Q[P],C.indexOf(b)>=0||(D[b]=k[b]);return D}(e,["componentId"]),I=v&&v+"-"+(_c(f)?f:Lp(Y1(f)));return pT(f,Sr({},S,{attrs:h,componentId:I}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?hT({},t.defaultProps,f):f}}),m.toString=function(){return"."+m.styledComponentId},i&&PN(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var Eg=function(t){return function e(n,r,i){if(i===void 0&&(i=pi),!Mh.exports.isValidElementType(r))return xl(1,String(r));var s=function(){return n(r,i,kL.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Sr({},i,{},o))},s.attrs=function(o){return e(n,r,Sr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(pT,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Eg[t]=Eg(t)});const se=Eg;/**
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
 */const mT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},NL=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,p=l&63;u||(p=64,o||(h=64)),r.push(n[c],n[d],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NL(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||d==null)throw Error();const h=s<<2|a>>4;if(r.push(h),l!==64){const p=a<<4&240|l>>2;if(r.push(p),d!==64){const m=l<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},DL=function(t){const e=mT(t);return gT.encodeByteArray(e,!0)},Pd=function(t){return DL(t).replace(/\./g,"")},LL=function(t){try{return gT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Rd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!$L(n)||(t[n]=Rd(t[n],e[n]));return t}function $L(t){return t!=="__proto__"}/**
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
 */class ML{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function FL(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Pd(JSON.stringify(n)),Pd(JSON.stringify(o)),a].join(".")}/**
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
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function UL(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function Rv(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function VL(){return typeof self=="object"&&self.self===self}function yT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Nv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vT(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jL(){return!Rv()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zu(){return typeof indexedDB=="object"}function zL(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const BL="FirebaseError";class Xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=BL,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fs.prototype.create)}}class Fs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qL(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xt(i,a,r)}}function qL(t,e){return t.replace(WL,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const WL=/\{\$([^}]+)}/g;/**
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
 */function nS(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function HL(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bg(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(rS(s)&&rS(o)){if(!bg(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function rS(t){return t!==null&&typeof t=="object"}/**
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
 */function la(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ya(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wT(t,e){const n=new GL(t,e);return n.subscribe.bind(n)}class GL{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");KL(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Mp),i.error===void 0&&(i.error=Mp),i.complete===void 0&&(i.complete=Mp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KL(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mp(){}/**
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
 */function Y(t){return t&&t._delegate?t._delegate:t}class hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hi="[DEFAULT]";/**
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
 */class QL{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ML;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XL(e))try{this.getOrInitializeService({instanceIdentifier:Hi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Hi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hi){return this.instances.has(e)}getOptions(e=Hi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YL(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hi){return this.component?this.component.multipleInstances?e:Hi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YL(t){return t===Hi?void 0:t}function XL(t){return t.instantiationMode==="EAGER"}/**
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
 */class JL{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QL(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Dv=[];var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const ST={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},ZL=ye.INFO,e$={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},t$=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=e$[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cf{constructor(e){this.name=e,this._logLevel=ZL,this._logHandler=t$,this._userLogHandler=null,Dv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ST[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}function n$(t){Dv.forEach(e=>{e.setLogLevel(t)})}function r$(t,e){for(const n of Dv){let r=null;e&&e.level&&(r=ST[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:ye[s].toLowerCase(),message:a,args:o,type:i.name})}}}const i$=(t,e)=>e.some(n=>t instanceof n);let iS,sS;function s$(){return iS||(iS=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function o$(){return sS||(sS=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _T=new WeakMap,Tg=new WeakMap,IT=new WeakMap,Fp=new WeakMap,Lv=new WeakMap;function a$(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(mi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_T.set(n,t)}).catch(()=>{}),Lv.set(e,t),e}function u$(t){if(Tg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Tg.set(t,e)}let kg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||IT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function l$(t){kg=t(kg)}function c$(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Up(this),e,...n);return IT.set(r,e.sort?e.sort():[e]),mi(r)}:o$().includes(t)?function(...e){return t.apply(Up(this),e),mi(_T.get(this))}:function(...e){return mi(t.apply(Up(this),e))}}function d$(t){return typeof t=="function"?c$(t):(t instanceof IDBTransaction&&u$(t),i$(t,s$())?new Proxy(t,kg):t)}function mi(t){if(t instanceof IDBRequest)return a$(t);if(Fp.has(t))return Fp.get(t);const e=d$(t);return e!==t&&(Fp.set(t,e),Lv.set(e,t)),e}const Up=t=>Lv.get(t);function h$(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=mi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(mi(o.result),u.oldVersion,u.newVersion,mi(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const f$=["get","getKey","getAll","getAllKeys","count"],p$=["put","add","delete","clear"],Vp=new Map;function oS(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vp.get(e))return Vp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=p$.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||f$.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return Vp.set(e,s),s}l$(t=>({...t,get:(e,n,r)=>oS(e,n)||t.get(e,n,r),has:(e,n)=>!!oS(e,n)||t.has(e,n)}));/**
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
 */class m${constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(g$(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function g$(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xg="@firebase/app",aS="0.7.33";/**
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
 */const _s=new cf("@firebase/app"),y$="@firebase/app-compat",v$="@firebase/analytics-compat",w$="@firebase/analytics",S$="@firebase/app-check-compat",_$="@firebase/app-check",I$="@firebase/auth",E$="@firebase/auth-compat",b$="@firebase/database",T$="@firebase/database-compat",k$="@firebase/functions",x$="@firebase/functions-compat",C$="@firebase/installations",O$="@firebase/installations-compat",A$="@firebase/messaging",P$="@firebase/messaging-compat",R$="@firebase/performance",N$="@firebase/performance-compat",D$="@firebase/remote-config",L$="@firebase/remote-config-compat",$$="@firebase/storage",M$="@firebase/storage-compat",F$="@firebase/firestore",U$="@firebase/firestore-compat",V$="firebase",j$="9.10.0";/**
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
 */const Is="[DEFAULT]",z$={[xg]:"fire-core",[y$]:"fire-core-compat",[w$]:"fire-analytics",[v$]:"fire-analytics-compat",[_$]:"fire-app-check",[S$]:"fire-app-check-compat",[I$]:"fire-auth",[E$]:"fire-auth-compat",[b$]:"fire-rtdb",[T$]:"fire-rtdb-compat",[k$]:"fire-fn",[x$]:"fire-fn-compat",[C$]:"fire-iid",[O$]:"fire-iid-compat",[A$]:"fire-fcm",[P$]:"fire-fcm-compat",[R$]:"fire-perf",[N$]:"fire-perf-compat",[D$]:"fire-rc",[L$]:"fire-rc-compat",[$$]:"fire-gcs",[M$]:"fire-gcs-compat",[F$]:"fire-fst",[U$]:"fire-fst-compat","fire-js":"fire-js",[V$]:"fire-js-all"};/**
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
 */const Si=new Map,Bu=new Map;function Nd(t,e){try{t.container.addComponent(e)}catch(n){_s.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ET(t,e){t.container.addOrOverwriteComponent(e)}function _i(t){const e=t.name;if(Bu.has(e))return _s.debug(`There were multiple attempts to register component ${e}.`),!1;Bu.set(e,t);for(const n of Si.values())Nd(n,t);return!0}function bT(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function B$(t,e,n=Is){bT(t,e).clearInstance(n)}function q$(){Bu.clear()}/**
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
 */const W$={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ii=new Fs("app","Firebase",W$);/**
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
 */class H${constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ii.create("app-deleted",{appName:this._name})}}/**
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
 */const Us=j$;function TT(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Is,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Ii.create("bad-app-name",{appName:String(r)});const i=Si.get(r);if(i){if(bg(t,i.options)&&bg(n,i.config))return i;throw Ii.create("duplicate-app",{appName:r})}const s=new JL(r);for(const a of Bu.values())s.addComponent(a);const o=new H$(t,n,s);return Si.set(r,o),o}function G$(t=Is){const e=Si.get(t);if(!e)throw Ii.create("no-app",{appName:t});return e}function K$(){return Array.from(Si.values())}async function kT(t){const e=t.name;Si.has(e)&&(Si.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Hn(t,e,n){var r;let i=(r=z$[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_s.warn(a.join(" "));return}_i(new hr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function xT(t,e){if(t!==null&&typeof t!="function")throw Ii.create("invalid-log-argument");r$(t,e)}function CT(t){n$(t)}/**
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
 */const Q$="firebase-heartbeat-database",Y$=1,qu="firebase-heartbeat-store";let jp=null;function OT(){return jp||(jp=h$(Q$,Y$,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qu)}}}).catch(t=>{throw Ii.create("idb-open",{originalErrorMessage:t.message})})),jp}async function X$(t){var e;try{return(await OT()).transaction(qu).objectStore(qu).get(AT(t))}catch(n){if(n instanceof Xt)_s.warn(n.message);else{const r=Ii.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});_s.warn(r.message)}}}async function uS(t,e){var n;try{const i=(await OT()).transaction(qu,"readwrite");return await i.objectStore(qu).put(e,AT(t)),i.done}catch(r){if(r instanceof Xt)_s.warn(r.message);else{const i=Ii.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});_s.warn(i.message)}}}function AT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const J$=1024,Z$=30*24*60*60*1e3;class eM{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nM(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=lS();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Z$}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lS(),{heartbeatsToSend:n,unsentEntries:r}=tM(this._heartbeatsCache.heartbeats),i=Pd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function lS(){return new Date().toISOString().substring(0,10)}function tM(t,e=J$){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cS(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cS(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zu()?zL().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await X$(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uS(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uS(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cS(t){return Pd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function rM(t){_i(new hr("platform-logger",e=>new m$(e),"PRIVATE")),_i(new hr("heartbeat",e=>new eM(e),"PRIVATE")),Hn(xg,aS,t),Hn(xg,aS,"esm2017"),Hn("fire-js","")}rM("");const iM=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Us,_DEFAULT_ENTRY_NAME:Is,_addComponent:Nd,_addOrOverwriteComponent:ET,_apps:Si,_clearComponents:q$,_components:Bu,_getProvider:bT,_registerComponent:_i,_removeServiceInstance:B$,deleteApp:kT,getApp:G$,getApps:K$,initializeApp:TT,onLog:xT,registerVersion:Hn,setLogLevel:CT,FirebaseError:Xt},Symbol.toStringTag,{value:"Module"}));/**
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
 */class sM{constructor(e,n){this._delegate=e,this.firebase=n,Nd(e,new hr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),kT(this._delegate)))}_getService(e,n=Is){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Is){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Nd(this._delegate,e)}_addOrOverwriteComponent(e){ET(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const oM={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},dS=new Fs("app-compat","Firebase",oM);/**
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
 */function aM(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Hn,setLogLevel:CT,onLog:xT,apps:null,SDK_VERSION:Us,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:iM}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Is,!nS(e,l))throw dS.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const d=TT(l,c);if(nS(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,d=c.replace("-compat","");if(_i(l)&&l.type==="PUBLIC"){const h=(p=i())=>{if(typeof p[d]!="function")throw dS.create("invalid-app-argument",{appName:c});return p[d]()};l.serviceProps!==void 0&&Rd(h,l.serviceProps),n[d]=h,t.prototype[d]=function(...p){return this._getService.bind(this,c).apply(this,l.multipleInstances?p:[])}}return l.type==="PUBLIC"?n[d]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
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
 */function PT(){const t=aM(sM);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:PT,extendNamespace:e,createSubscribe:wT,ErrorFactory:Fs,deepExtend:Rd});function e(n){Rd(t,n)}return t}const uM=PT();/**
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
 */const hS=new cf("@firebase/app-compat"),lM="@firebase/app-compat",cM="0.1.34";/**
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
 */function dM(t){Hn(lM,cM,t)}/**
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
 */if(VL()&&self.firebase!==void 0){hS.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&hS.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Lr=uM;dM();var hM="firebase",fM="9.10.0";/**
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
 */Lr.registerVersion(hM,fM,"app-compat");function $v(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const La={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ks={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function pM(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function RT(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mM=pM,gM=RT,NT=new Fs("auth","Firebase",RT());/**
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
 */const fS=new cf("@firebase/auth");function Kc(t,...e){fS.logLevel<=ye.ERROR&&fS.error(`Auth (${Us}): ${t}`,...e)}/**
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
 */function Dt(t,...e){throw Mv(t,...e)}function Pt(t,...e){return Mv(t,...e)}function DT(t,e,n){const r=Object.assign(Object.assign({},gM()),{[e]:n});return new Fs("auth","Firebase",r).create(e,{appName:t.name})}function ca(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Dt(t,"argument-error"),DT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Mv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return NT.create(t,...e)}function N(t,e,...n){if(!t)throw Mv(e,...n)}function ir(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Kc(e),new Error(e)}function Qn(t,e){t||ir(e)}/**
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
 */const pS=new Map;function vn(t){Qn(t instanceof Function,"Expected a class definition");let e=pS.get(t);return e?(Qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pS.set(t,e),e)}function yM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Wu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Fv(){return mS()==="http:"||mS()==="https:"}function mS(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function vM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fv()||yT()||"connection"in navigator)?navigator.onLine:!0}function wM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Cl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qn(n>e,"Short delay should be less than long delay!"),this.isMobile=UL()||Nv()}get(){return vM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Uv(t,e){Qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class LT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const _M=new Cl(3e4,6e4);function ct(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function St(t,e,n,r,i={}){return $T(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=la(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),LT.fetch()(MT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function $T(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},SM),e);try{const i=new IM(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Xa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Xa(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw DT(t,c,l);Dt(t,c)}}catch(i){if(i instanceof Xt)throw i;Dt(t,"network-request-failed")}}async function $r(t,e,n,r,i={}){const s=await St(t,e,n,r,i);return"mfaPendingCredential"in s&&Dt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function MT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Uv(t.config,i):`${t.config.apiScheme}://${i}`}class IM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pt(this.auth,"network-request-failed")),_M.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function EM(t,e){return St(t,"POST","/v1/accounts:delete",e)}async function bM(t,e){return St(t,"POST","/v1/accounts:update",e)}async function TM(t,e){return St(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function fu(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kM(t,e=!1){const n=Y(t),r=await n.getIdToken(e),i=df(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fu(zp(i.auth_time)),issuedAtTime:fu(zp(i.iat)),expirationTime:fu(zp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function zp(t){return Number(t)*1e3}function df(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Kc("JWT malformed, contained fewer than 3 sections"),null;try{const s=LL(r);return s?JSON.parse(s):(Kc("Failed to decode base64 JWT payload"),null)}catch(s){return Kc("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function xM(t){const e=df(t);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ar(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xt&&CM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class OM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class FT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fu(this.lastLoginAt),this.creationTime=fu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ar(t,TM(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?RM(s.providerUserInfo):[],a=PM(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new FT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function AM(t){const e=Y(t);await Hu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PM(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function RM(t){return t.map(e=>{var{providerId:n}=e,r=$v(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function NM(t,e){const n=await $T(t,{},async()=>{const r=la({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=MT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",LT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Gu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xM(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await NM(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Gu;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gu,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
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
 */function Br(t,e){N(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cs{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=$v(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new FT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ar(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kM(this,e)}reload(){return AM(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new cs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ar(this,EM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,g=(l=n.createdAt)!==null&&l!==void 0?l:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:S,isAnonymous:I,providerData:k,stsTokenManager:C}=n;N(v&&C,e,"internal-error");const b=Gu.fromJSON(this.name,C);N(typeof v=="string",e,"internal-error"),Br(d,e.name),Br(h,e.name),N(typeof S=="boolean",e,"internal-error"),N(typeof I=="boolean",e,"internal-error"),Br(p,e.name),Br(m,e.name),Br(y,e.name),Br(w,e.name),Br(g,e.name),Br(f,e.name);const P=new cs({uid:v,auth:e,email:h,emailVerified:S,displayName:d,isAnonymous:I,photoURL:m,phoneNumber:p,tenantId:y,stsTokenManager:b,createdAt:g,lastLoginAt:f});return k&&Array.isArray(k)&&(P.providerData=k.map(D=>Object.assign({},D))),w&&(P._redirectEventId=w),P}static async _fromIdTokenResponse(e,n,r=!1){const i=new Gu;i.updateFromServerResponse(n);const s=new cs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Hu(s),s}}/**
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
 */class UT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}UT.type="NONE";const jo=UT;/**
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
 */function ds(t,e,n){return`firebase:${t}:${e}:${n}`}class Io{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ds(this.userKey,i.apiKey,s),this.fullPersistenceKey=ds("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Io(vn(jo),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||vn(jo);const o=ds(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const d=cs._fromJSON(e,c);l!==s&&(a=d),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Io(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Io(s,e,r))}}/**
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
 */function gS(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(BT(e))return"Blackberry";if(qT(e))return"Webos";if(Vv(e))return"Safari";if((e.includes("chrome/")||jT(e))&&!e.includes("edge/"))return"Chrome";if(Ol(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function VT(t=qe()){return/firefox\//i.test(t)}function Vv(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jT(t=qe()){return/crios\//i.test(t)}function zT(t=qe()){return/iemobile/i.test(t)}function Ol(t=qe()){return/android/i.test(t)}function BT(t=qe()){return/blackberry/i.test(t)}function qT(t=qe()){return/webos/i.test(t)}function da(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DM(t=qe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function LM(t=qe()){var e;return da(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $M(){return vT()&&document.documentMode===10}function WT(t=qe()){return da(t)||Ol(t)||qT(t)||BT(t)||/windows phone/i.test(t)||zT(t)}function MM(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function HT(t,e=[]){let n;switch(t){case"Browser":n=gS(qe());break;case"Worker":n=`${gS(qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Us}/${r}`}/**
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
 */class FM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class UM{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yS(this),this.idTokenSubscription=new yS(this),this.beforeStateQueue=new FM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NT,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Io.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u==null?void 0:u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Hu(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Y(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Io.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=HT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function yt(t){return Y(t)}class yS{constructor(e){this.auth=e,this.observer=null,this.addObserver=wT(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function VM(t,e,n){const r=yt(t);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=GT(e),{host:o,port:a}=jM(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||zM()}function GT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jM(t){const e=GT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:vS(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:vS(o)}}}function vS(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ha{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ir("not implemented")}_getIdTokenResponse(e){return ir("not implemented")}_linkToIdToken(e,n){return ir("not implemented")}_getReauthenticationResolver(e){return ir("not implemented")}}/**
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
 */async function KT(t,e){return St(t,"POST","/v1/accounts:resetPassword",ct(t,e))}async function QT(t,e){return St(t,"POST","/v1/accounts:update",e)}async function BM(t,e){return St(t,"POST","/v1/accounts:update",ct(t,e))}/**
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
 */async function qM(t,e){return $r(t,"POST","/v1/accounts:signInWithPassword",ct(t,e))}async function hf(t,e){return St(t,"POST","/v1/accounts:sendOobCode",ct(t,e))}async function WM(t,e){return hf(t,e)}async function HM(t,e){return hf(t,e)}async function GM(t,e){return hf(t,e)}async function KM(t,e){return hf(t,e)}/**
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
 */async function QM(t,e){return $r(t,"POST","/v1/accounts:signInWithEmailLink",ct(t,e))}async function YM(t,e){return $r(t,"POST","/v1/accounts:signInWithEmailLink",ct(t,e))}/**
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
 */class Ku extends ha{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ku(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ku(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return qM(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return QM(e,{email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return QT(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return YM(e,{idToken:n,email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Tr(t,e){return $r(t,"POST","/v1/accounts:signInWithIdp",ct(t,e))}/**
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
 */const XM="http://localhost";class fr extends ha{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=$v(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Tr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Tr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Tr(e,n)}buildRequest(){const e={requestUri:XM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=la(n)}return e}}/**
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
 */async function JM(t,e){return St(t,"POST","/v1/accounts:sendVerificationCode",ct(t,e))}async function ZM(t,e){return $r(t,"POST","/v1/accounts:signInWithPhoneNumber",ct(t,e))}async function e2(t,e){const n=await $r(t,"POST","/v1/accounts:signInWithPhoneNumber",ct(t,e));if(n.temporaryProof)throw Xa(t,"account-exists-with-different-credential",n);return n}const t2={USER_NOT_FOUND:"user-not-found"};async function n2(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return $r(t,"POST","/v1/accounts:signInWithPhoneNumber",ct(t,n),t2)}/**
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
 */class hs extends ha{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new hs({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new hs({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return ZM(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return e2(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return n2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new hs({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function r2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function i2(t){const e=fo(Ya(t)).link,n=e?fo(Ya(e)).deep_link_id:null,r=fo(Ya(t)).deep_link_id;return(r?fo(Ya(r)).link:null)||r||n||e||t}class ff{constructor(e){var n,r,i,s,o,a;const u=fo(Ya(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,d=r2((i=u.mode)!==null&&i!==void 0?i:null);N(l&&c&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=i2(e);try{return new ff(n)}catch{return null}}}/**
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
 */class Li{constructor(){this.providerId=Li.PROVIDER_ID}static credential(e,n){return Ku._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ff.parseLink(n);return N(r,"argument-error"),Ku._fromEmailAndCode(e,r.code,r.tenantId)}}Li.PROVIDER_ID="password";Li.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Li.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Mr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fa extends Mr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Eo extends fa{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return N("providerId"in n&&"signInMethod"in n,"argument-error"),fr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return N(e.idToken||e.accessToken,"argument-error"),fr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Eo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Eo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Eo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Zn extends fa{constructor(){super("facebook.com")}static credential(e){return fr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zn.PROVIDER_ID="facebook.com";/**
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
 */class er extends fa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return er.credential(n,r)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
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
 */class tr extends fa{constructor(){super("github.com")}static credential(e){return fr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
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
 */const s2="http://localhost";class zo extends ha{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Tr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Tr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Tr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new zo(r,s)}static _create(e,n){return new zo(e,n)}buildRequest(){return{requestUri:s2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const o2="saml.";class Dd extends Mr{constructor(e){N(e.startsWith(o2),"argument-error"),super(e)}static credentialFromResult(e){return Dd.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Dd.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=zo.fromJSON(e);return N(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return zo._create(r,n)}catch{return null}}}/**
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
 */class nr extends fa{constructor(){super("twitter.com")}static credential(e,n){return fr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
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
 */async function YT(t,e){return $r(t,"POST","/v1/accounts:signUp",ct(t,e))}/**
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
 */class Ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await cs._fromIdTokenResponse(e,r,i),o=wS(r);return new Ln({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=wS(r);return new Ln({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function wS(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function a2(t){var e;const n=yt(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ln({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await YT(n,{returnSecureToken:!0}),i=await Ln._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Ld extends Xt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ld.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ld(e,n,r,i)}}function XT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ld._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function JT(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function u2(t,e){const n=Y(t);await pf(!0,n,e);const{providerUserInfo:r}=await bM(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=JT(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function jv(t,e,n=!1){const r=await Ar(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ln._forOperation(t,"link",r)}async function pf(t,e,n){await Hu(e);const r=JT(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";N(r.has(n)===t,e.auth,i)}/**
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
 */async function ZT(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Ar(t,XT(i,s,e,t),n);N(o.idToken,i,"internal-error");const a=df(o.idToken);N(a,i,"internal-error");const{sub:u}=a;return N(t.uid===u,i,"user-mismatch"),Ln._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Dt(i,"user-mismatch"),o}}/**
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
 */async function ek(t,e,n=!1){const r="signIn",i=await XT(t,r,e),s=await Ln._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function mf(t,e){return ek(yt(t),e)}async function tk(t,e){const n=Y(t);return await pf(!1,n,e.providerId),jv(n,e)}async function nk(t,e){return ZT(Y(t),e)}/**
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
 */async function l2(t,e){return $r(t,"POST","/v1/accounts:signInWithCustomToken",ct(t,e))}/**
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
 */async function c2(t,e){const n=yt(t),r=await l2(n,{token:e,returnSecureToken:!0}),i=await Ln._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class gf{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?zv._fromServerResponse(e,n):Dt(e,"internal-error")}}class zv extends gf{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new zv(n)}}/**
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
 */function yf(t,e,n){var r;N(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),N(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(N(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(N(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function d2(t,e,n){const r=Y(t),i={requestType:"PASSWORD_RESET",email:e};n&&yf(r,i,n),await HM(r,i)}async function h2(t,e,n){await KT(Y(t),{oobCode:e,newPassword:n})}async function f2(t,e){await BM(Y(t),{oobCode:e})}async function rk(t,e){const n=Y(t),r=await KT(n,{oobCode:e}),i=r.requestType;switch(N(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":N(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":N(r.mfaInfo,n,"internal-error");default:N(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=gf._fromServerResponse(yt(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function p2(t,e){const{data:n}=await rk(Y(t),e);return n.email}async function m2(t,e,n){const r=yt(t),i=await YT(r,{returnSecureToken:!0,email:e,password:n}),s=await Ln._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function g2(t,e,n){return mf(Y(t),Li.credential(e,n))}/**
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
 */async function y2(t,e,n){const r=Y(t),i={requestType:"EMAIL_SIGNIN",email:e};N(n.handleCodeInApp,r,"argument-error"),n&&yf(r,i,n),await GM(r,i)}function v2(t,e){const n=ff.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function w2(t,e,n){const r=Y(t),i=Li.credentialWithLink(e,n||Wu());return N(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),mf(r,i)}/**
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
 */async function S2(t,e){return St(t,"POST","/v1/accounts:createAuthUri",ct(t,e))}/**
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
 */async function _2(t,e){const n=Fv()?Wu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await S2(Y(t),r);return i||[]}async function I2(t,e){const n=Y(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&yf(n.auth,i,e);const{email:s}=await WM(n.auth,i);s!==t.email&&await t.reload()}async function E2(t,e,n){const r=Y(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&yf(r.auth,s,n);const{email:o}=await KM(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function b2(t,e){return St(t,"POST","/v1/accounts:update",e)}/**
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
 */async function T2(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Y(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ar(r,b2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function k2(t,e){return ik(Y(t),e,null)}function x2(t,e){return ik(Y(t),null,e)}async function ik(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Ar(t,QT(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function C2(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=df(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new bo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new O2(s,i);case"github.com":return new A2(s,i);case"google.com":return new P2(s,i);case"twitter.com":return new R2(s,i,t.screenName||null);case"custom":case"anonymous":return new bo(s,null);default:return new bo(s,r,i)}}class bo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class sk extends bo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class O2 extends bo{constructor(e,n){super(e,"facebook.com",n)}}class A2 extends sk{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class P2 extends bo{constructor(e,n){super(e,"google.com",n)}}class R2 extends sk{constructor(e,n,r){super(e,"twitter.com",n,r)}}function N2(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:C2(n)}class rs{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new rs("enroll",e,n)}static _fromMfaPendingCredential(e){return new rs("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return rs._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return rs._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Bv{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=yt(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>gf._fromServerResponse(r,a));N(i.mfaPendingCredential,r,"internal-error");const o=rs._fromMfaPendingCredential(i.mfaPendingCredential);return new Bv(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const c=await Ln._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return N(n.user,r,"internal-error"),Ln._forOperation(n.user,n.operationType,l);default:Dt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function D2(t,e){var n;const r=Y(t),i=e;return N(e.customData.operationType,r,"argument-error"),N((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Bv._fromError(r,i)}/**
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
 */function L2(t,e){return St(t,"POST","/v2/accounts/mfaEnrollment:start",ct(t,e))}function $2(t,e){return St(t,"POST","/v2/accounts/mfaEnrollment:finalize",ct(t,e))}function M2(t,e){return St(t,"POST","/v2/accounts/mfaEnrollment:withdraw",ct(t,e))}class qv{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>gf._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new qv(e)}async getSession(){return rs._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Ar(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){var n;const r=typeof e=="string"?e:e.uid,i=await this.user.getIdToken(),s=await Ar(this.user,M2(this.user.auth,{idToken:i,mfaEnrollmentId:r}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==r),await this.user._updateTokensIfNecessary(s);try{await this.user.reload()}catch(o){if(((n=o)===null||n===void 0?void 0:n.code)!=="auth/user-token-expired")throw o}}}const Bp=new WeakMap;function F2(t){const e=Y(t);return Bp.has(e)||Bp.set(e,qv._fromUser(e)),Bp.get(e)}const $d="__sak";/**
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
 */class ok{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($d,"1"),this.storage.removeItem($d),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function U2(){const t=qe();return Vv(t)||da(t)}const V2=1e3,j2=10;class ak extends ok{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=U2()&&MM(),this.fallbackToPolling=WT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);$M()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,j2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},V2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ak.type="LOCAL";const Wv=ak;/**
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
 */class uk extends ok{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uk.type="SESSION";const Es=uk;/**
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
 */function z2(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new vf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await z2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vf.receivers=[];/**
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
 */function Al(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class B2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Al("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function at(){return window}function q2(t){at().location.href=t}/**
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
 */function Hv(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function W2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function H2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function G2(){return Hv()?self:null}/**
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
 */const lk="firebaseLocalStorageDb",K2=1,Md="firebaseLocalStorage",ck="fbase_key";class Pl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wf(t,e){return t.transaction([Md],e?"readwrite":"readonly").objectStore(Md)}function Q2(){const t=indexedDB.deleteDatabase(lk);return new Pl(t).toPromise()}function Cg(){const t=indexedDB.open(lk,K2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Md,{keyPath:ck})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Md)?e(r):(r.close(),await Q2(),e(await Cg()))})})}async function SS(t,e,n){const r=wf(t,!0).put({[ck]:e,value:n});return new Pl(r).toPromise()}async function Y2(t,e){const n=wf(t,!1).get(e),r=await new Pl(n).toPromise();return r===void 0?null:r.value}function _S(t,e){const n=wf(t,!0).delete(e);return new Pl(n).toPromise()}const X2=800,J2=3;class dk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>J2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vf._getInstance(G2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await W2(),!this.activeServiceWorker)return;this.sender=new B2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||H2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cg();return await SS(e,$d,"1"),await _S(e,$d),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>SS(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Y2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_S(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=wf(i,!1).getAll();return new Pl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),X2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dk.type="LOCAL";const Qu=dk;/**
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
 */function Z2(t,e){return St(t,"POST","/v2/accounts/mfaSignIn:start",ct(t,e))}function eF(t,e){return St(t,"POST","/v2/accounts/mfaSignIn:finalize",ct(t,e))}/**
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
 */async function tF(t){return(await St(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function nF(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function hk(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Pt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nF().appendChild(r)})}function fk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const rF=500,iF=6e4,Ic=1e12;class sF{constructor(e){this.auth=e,this.counter=Ic,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new oF(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Ic;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Ic;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Ic;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class oF{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;N(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=aF(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},iF)},rF))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function aF(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const qp=fk("rcb"),uF=new Cl(3e4,6e4),lF="https://www.google.com/recaptcha/api.js?";class cF{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=at().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return N(dF(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(at().grecaptcha):new Promise((r,i)=>{const s=at().setTimeout(()=>{i(Pt(e,"network-request-failed"))},uF.get());at()[qp]=()=>{at().clearTimeout(s),delete at()[qp];const a=at().grecaptcha;if(!a){i(Pt(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const d=u(l,c);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${lF}?${la({onload:qp,render:"explicit",hl:n})}`;hk(o).catch(()=>{clearTimeout(s),i(Pt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=at().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function dF(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class hF{async load(e){return new sF(e)}clearedOneInstance(){}}/**
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
 */const pk="recaptcha",fF={theme:"light",type:"image"};class pF{constructor(e,n=Object.assign({},fF),r){this.parameters=n,this.type=pk,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=yt(r),this.isInvisible=this.parameters.size==="invisible",N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;N(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new hF:new cF,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){N(!this.parameters.sitekey,this.auth,"argument-error"),N(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=at()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){N(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){N(Fv()&&!Hv(),this.auth,"internal-error"),await mF(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await tF(this.auth);N(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return N(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function mF(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Gv{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=hs._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function gF(t,e,n){const r=yt(t),i=await Sf(r,e,Y(n));return new Gv(i,s=>mf(r,s))}async function yF(t,e,n){const r=Y(t);await pf(!1,r,"phone");const i=await Sf(r.auth,e,Y(n));return new Gv(i,s=>tk(r,s))}async function vF(t,e,n){const r=Y(t),i=await Sf(r.auth,e,Y(n));return new Gv(i,s=>nk(r,s))}async function Sf(t,e,n){var r;const i=await n.verify();try{N(typeof i=="string",t,"argument-error"),N(n.type===pk,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return N(o.type==="enroll",t,"internal-error"),(await L2(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{N(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return N(a,t,"missing-multi-factor-info"),(await Z2(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await JM(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function wF(t,e){await jv(Y(t),e)}/**
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
 */class Gn{constructor(e){this.providerId=Gn.PROVIDER_ID,this.auth=yt(e)}verifyPhoneNumber(e,n){return Sf(this.auth,e,Y(n))}static credential(e,n){return hs._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Gn.credentialFromTaggedObject(n)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?hs._fromTokenResponse(n,r):null}}Gn.PROVIDER_ID="phone";Gn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Vs(t,e){return e?vn(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Kv extends ha{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Tr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SF(t){return ek(t.auth,new Kv(t),t.bypassAuthState)}function _F(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),ZT(n,new Kv(t),t.bypassAuthState)}async function IF(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),jv(n,new Kv(t),t.bypassAuthState)}/**
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
 */class mk{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SF;case"linkViaPopup":case"linkViaRedirect":return IF;case"reauthViaPopup":case"reauthViaRedirect":return _F;default:Dt(this.auth,"internal-error")}}resolve(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const EF=new Cl(2e3,1e4);async function bF(t,e,n){const r=yt(t);ca(t,e,Mr);const i=Vs(r,n);return new _r(r,"signInViaPopup",e,i).executeNotNull()}async function TF(t,e,n){const r=Y(t);ca(r.auth,e,Mr);const i=Vs(r.auth,n);return new _r(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function kF(t,e,n){const r=Y(t);ca(r.auth,e,Mr);const i=Vs(r.auth,n);return new _r(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class _r extends mk{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,_r.currentPopupAction&&_r.currentPopupAction.cancel(),_r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const e=Al();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,EF.get())};e()}}_r.currentPopupAction=null;/**
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
 */const xF="pendingRedirect",pu=new Map;class CF extends mk{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=pu.get(this.auth._key());if(!e){try{const r=await OF(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}pu.set(this.auth._key(),e)}return this.bypassAuthState||pu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OF(t,e){const n=yk(e),r=gk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Qv(t,e){return gk(t)._set(yk(e),"true")}function AF(){pu.clear()}function Yv(t,e){pu.set(t._key(),e)}function gk(t){return vn(t._redirectPersistence)}function yk(t){return ds(xF,t.config.apiKey,t.name)}/**
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
 */function PF(t,e,n){return RF(t,e,n)}async function RF(t,e,n){const r=yt(t);ca(t,e,Mr);const i=Vs(r,n);return await Qv(i,r),i._openRedirect(r,e,"signInViaRedirect")}function NF(t,e,n){return DF(t,e,n)}async function DF(t,e,n){const r=Y(t);ca(r.auth,e,Mr);const i=Vs(r.auth,n);await Qv(i,r.auth);const s=await vk(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function LF(t,e,n){return $F(t,e,n)}async function $F(t,e,n){const r=Y(t);ca(r.auth,e,Mr);const i=Vs(r.auth,n);await pf(!1,r,e.providerId),await Qv(i,r.auth);const s=await vk(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function MF(t,e){return await yt(t)._initializationPromise,_f(t,e,!1)}async function _f(t,e,n=!1){const r=yt(t),i=Vs(r,e),o=await new CF(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function vk(t){const e=Al(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const FF=10*60*1e3;class wk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UF(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Sk(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FF&&this.cachedEventUids.clear(),this.cachedEventUids.has(IS(e))}saveEventToCache(e){this.cachedEventUids.add(IS(e)),this.lastProcessedEventTime=Date.now()}}function IS(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sk({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UF(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sk(t);default:return!1}}/**
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
 */async function _k(t,e={}){return St(t,"GET","/v1/projects",e)}/**
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
 */const VF=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jF=/^https?/;async function zF(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _k(t);for(const n of e)try{if(BF(n))return}catch{}Dt(t,"unauthorized-domain")}function BF(t){const e=Wu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jF.test(n))return!1;if(VF.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const qF=new Cl(3e4,6e4);function ES(){const t=at().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WF(t){return new Promise((e,n)=>{var r,i,s;function o(){ES(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ES(),n(Pt(t,"network-request-failed"))},timeout:qF.get()})}if(!((i=(r=at().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=at().gapi)===null||s===void 0)&&s.load)o();else{const a=fk("iframefcb");return at()[a]=()=>{gapi.load?o():n(Pt(t,"network-request-failed"))},hk(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Qc=null,e})}let Qc=null;function HF(t){return Qc=Qc||WF(t),Qc}/**
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
 */const GF=new Cl(5e3,15e3),KF="__/auth/iframe",QF="emulator/auth/iframe",YF={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XF=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JF(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Uv(e,QF):`https://${t.config.authDomain}/${KF}`,r={apiKey:e.apiKey,appName:t.name,v:Us},i=XF.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${la(r).slice(1)}`}async function ZF(t){const e=await HF(t),n=at().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:JF(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YF,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Pt(t,"network-request-failed"),a=at().setTimeout(()=>{s(o)},GF.get());function u(){at().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const eU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tU=500,nU=600,rU="_blank",iU="http://localhost";class bS{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sU(t,e,n,r=tU,i=nU){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},eU),{width:r.toString(),height:i.toString(),top:s,left:o}),l=qe().toLowerCase();n&&(a=jT(l)?rU:n),VT(l)&&(e=e||iU,u.scrollbars="yes");const c=Object.entries(u).reduce((h,[p,m])=>`${h}${p}=${m},`,"");if(LM(l)&&a!=="_self")return oU(e||"",a),new bS(null);const d=window.open(e||"",a,c);N(d,t,"popup-blocked");try{d.focus()}catch{}return new bS(d)}function oU(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const aU="__/auth/handler",uU="emulator/auth/handler";function Og(t,e,n,r,i,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Us,eventId:i};if(e instanceof Mr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",HL(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof fa){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${lU(t)}?${la(a).slice(1)}`}function lU({config:t}){return t.emulator?Uv(t,uU):`https://${t.authDomain}/${aU}`}/**
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
 */const Wp="webStorageSupport";class cU{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Es,this._completeRedirectFn=_f,this._overrideRedirectResult=Yv}async _openPopup(e,n,r,i){var s;Qn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Og(e,n,r,Wu(),i);return sU(e,o,Al())}async _openRedirect(e,n,r,i){return await this._originValidation(e),q2(Og(e,n,r,Wu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZF(e),r=new wk(e);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wp,{type:Wp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Wp];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zF(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return WT()||Vv()||da()}}const dU=cU;class hU{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return ir("unexpected MultiFactorSessionType")}}}class Xv extends hU{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Xv(e)}_finalizeEnroll(e,n,r){return $2(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return eF(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ik{constructor(){}static assertion(e){return Xv._fromCredential(e)}}Ik.FACTOR_ID="phone";var TS="@firebase/auth",kS="0.20.7";/**
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
 */class fU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pU(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mU(t){_i(new hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,u)=>{N(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),N(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:HT(t)},c=new UM(a,u,l);return yM(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_i(new hr("auth-internal",e=>{const n=yt(e.getProvider("auth").getImmediate());return(r=>new fU(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(TS,kS,pU(t)),Hn(TS,kS,"esm2017")}mU("Browser");/**
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
 */function bs(){return window}/**
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
 */const gU=2e3;async function yU(t,e,n){var r;const{BuildInfo:i}=bs();Qn(e.sessionId,"AuthEvent did not contain a session ID");const s=await IU(e.sessionId),o={};return da()?o.ibi=i.packageName:Ol()?o.apn=i.packageName:Dt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Og(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function vU(t){const{BuildInfo:e}=bs(),n={};da()?n.iosBundleId=e.packageName:Ol()?n.androidPackageName=e.packageName:Dt(t,"operation-not-supported-in-this-environment"),await _k(t,n)}function wU(t){const{cordova:e}=bs();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,DM()?"_blank":"_system","location=yes"),n(i)})})}async function SU(t,e,n){const{cordova:r}=bs();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var d;s();const h=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(Pt(t,"redirect-cancelled-by-user"))},gU))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),Ol()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function _U(t){var e,n,r,i,s,o,a,u,l,c;const d=bs();N(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),N(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),N(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((u=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((c=(l=d==null?void 0:d.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function IU(t){const e=EU(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function EU(t){if(Qn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const bU=20;class TU extends wk{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function kU(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:OU(),postBody:null,tenantId:t.tenantId,error:Pt(t,"no-auth-event")}}function xU(t,e){return Ag()._set(Pg(t),e)}async function xS(t){const e=await Ag()._get(Pg(t));return e&&await Ag()._remove(Pg(t)),e}function CU(t,e){var n,r;const i=PU(e);if(i.includes("/__/auth/callback")){const s=Yc(i),o=s.firebaseError?AU(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?Pt(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function OU(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<bU;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Ag(){return vn(Wv)}function Pg(t){return ds("authEvent",t.config.apiKey,t.name)}function AU(t){try{return JSON.parse(t)}catch{return null}}function PU(t){const e=Yc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Yc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Yc(i).link||i||r||n||t}function Yc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return fo(n.join("?"))}/**
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
 */const RU=500;class NU{constructor(){this._redirectPersistence=Es,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=_f,this._overrideRedirectResult=Yv}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new TU(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Dt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){_U(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),AF(),await this._originValidation(e);const o=kU(e,r,i);await xU(e,o);const a=await yU(e,o,n),u=await wU(a);return SU(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vU(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=bs(),o=setTimeout(async()=>{await xS(e),n.onEvent(CS())},RU),a=async c=>{clearTimeout(o);const d=await xS(e);let h=null;d&&(c==null?void 0:c.url)&&(h=CU(d,c.url)),n.onEvent(h||CS())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;bs().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(d){console.error(d)}}}}const DU=NU;function CS(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Pt("no-auth-event")}}/**
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
 */function LU(t,e){yt(t)._logFramework(e)}var $U="@firebase/auth-compat",MU="0.2.20";/**
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
 */const FU=1e3;function mu(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function UU(){return mu()==="http:"||mu()==="https:"}function Ek(t=qe()){return!!((mu()==="file:"||mu()==="ionic:"||mu()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function VU(){return Nv()||Rv()}function jU(){return vT()&&(document==null?void 0:document.documentMode)===11}function zU(t=qe()){return/Edge\/\d+/.test(t)}function BU(t=qe()){return jU()||zU(t)}function bk(){try{const t=self.localStorage,e=Al();if(t)return t.setItem(e,"1"),t.removeItem(e),BU()?zu():!0}catch{return Jv()&&zu()}return!1}function Jv(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Hp(){return(UU()||yT()||Ek())&&!VU()&&bk()&&!Jv()}function Tk(){return Ek()&&typeof document<"u"}async function qU(){return Tk()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},FU);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function WU(){return typeof window<"u"?window:null}/**
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
 */const gn={LOCAL:"local",NONE:"none",SESSION:"session"},$a=N,kk="persistence";function HU(t,e){if($a(Object.values(gn).includes(e),t,"invalid-persistence-type"),Nv()){$a(e!==gn.SESSION,t,"unsupported-persistence-type");return}if(Rv()){$a(e===gn.NONE,t,"unsupported-persistence-type");return}if(Jv()){$a(e===gn.NONE||e===gn.LOCAL&&zu(),t,"unsupported-persistence-type");return}$a(e===gn.NONE||bk(),t,"unsupported-persistence-type")}async function Rg(t){await t._initializationPromise;const e=xk(),n=ds(kk,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function GU(t,e){const n=xk();if(!n)return[];const r=ds(kk,t,e);switch(n.getItem(r)){case gn.NONE:return[jo];case gn.LOCAL:return[Qu,Es];case gn.SESSION:return[Es];default:return[]}}function xk(){var t;try{return((t=WU())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const KU=N;class ri{constructor(){this.browserResolver=vn(dU),this.cordovaResolver=vn(DU),this.underlyingResolver=null,this._redirectPersistence=Es,this._completeRedirectFn=_f,this._overrideRedirectResult=Yv}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Tk()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return KU(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await qU();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Ck(t){return t.unwrap()}function QU(t){return t.wrapped()}/**
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
 */function YU(t){return Ok(t)}function XU(t,e){var n,r;const i=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(((r=e)===null||r===void 0?void 0:r.code)==="auth/multi-factor-auth-required"){const s=e;s.resolver=new JU(t,D2(t,e))}else if(i){const s=Ok(e),o=e;s&&(o.credential=s,o.tenantId=i.tenantId||void 0,o.email=i.email||void 0,o.phoneNumber=i.phoneNumber||void 0)}}function Ok(t){const{_tokenResponse:e}=t instanceof Xt?t.customData:t;if(!e)return null;if(!(t instanceof Xt)&&"temporaryProof"in e&&"phoneNumber"in e)return Gn.credentialFromResult(t);const n=e.providerId;if(!n||n===La.PASSWORD)return null;let r;switch(n){case La.GOOGLE:r=er;break;case La.FACEBOOK:r=Zn;break;case La.GITHUB:r=tr;break;case La.TWITTER:r=nr;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?zo._create(n,a):fr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Eo(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof Xt?r.credentialFromError(t):r.credentialFromResult(t)}function rn(t,e){return e.catch(n=>{throw n instanceof Xt&&XU(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:YU(n),additionalUserInfo:N2(n),user:Ir.getOrCreate(i)}})}async function Ng(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>rn(t,n.confirm(r))}}class JU{constructor(e,n){this.resolver=n,this.auth=QU(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return rn(Ck(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Ir{constructor(e){this._delegate=e,this.multiFactor=F2(e)}static getOrCreate(e){return Ir.USER_MAP.has(e)||Ir.USER_MAP.set(e,new Ir(e)),Ir.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return rn(this.auth,tk(this._delegate,e))}async linkWithPhoneNumber(e,n){return Ng(this.auth,yF(this._delegate,e,n))}async linkWithPopup(e){return rn(this.auth,kF(this._delegate,e,ri))}async linkWithRedirect(e){return await Rg(yt(this.auth)),LF(this._delegate,e,ri)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return rn(this.auth,nk(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Ng(this.auth,vF(this._delegate,e,n))}reauthenticateWithPopup(e){return rn(this.auth,TF(this._delegate,e,ri))}async reauthenticateWithRedirect(e){return await Rg(yt(this.auth)),NF(this._delegate,e,ri)}sendEmailVerification(e){return I2(this._delegate,e)}async unlink(e){return await u2(this._delegate,e),this}updateEmail(e){return k2(this._delegate,e)}updatePassword(e){return x2(this._delegate,e)}updatePhoneNumber(e){return wF(this._delegate,e)}updateProfile(e){return T2(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return E2(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Ir.USER_MAP=new WeakMap;/**
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
 */const Ma=N;class Dg{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Ma(r,"invalid-api-key",{appName:e.name}),Ma(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?ri:void 0;this._delegate=n.initialize({options:{persistence:ZU(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(mM),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Ir.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){VM(this._delegate,e,n)}applyActionCode(e){return f2(this._delegate,e)}checkActionCode(e){return rk(this._delegate,e)}confirmPasswordReset(e,n){return h2(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return rn(this._delegate,m2(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return _2(this._delegate,e)}isSignInWithEmailLink(e){return v2(this._delegate,e)}async getRedirectResult(){Ma(Hp(),this._delegate,"operation-not-supported-in-this-environment");const e=await MF(this._delegate,ri);return e?rn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){LU(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=OS(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=OS(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return y2(this._delegate,e,n)}sendPasswordResetEmail(e,n){return d2(this._delegate,e,n||void 0)}async setPersistence(e){HU(this._delegate,e);let n;switch(e){case gn.SESSION:n=Es;break;case gn.LOCAL:n=await vn(Qu)._isAvailable()?Qu:Wv;break;case gn.NONE:n=jo;break;default:return Dt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return rn(this._delegate,a2(this._delegate))}signInWithCredential(e){return rn(this._delegate,mf(this._delegate,e))}signInWithCustomToken(e){return rn(this._delegate,c2(this._delegate,e))}signInWithEmailAndPassword(e,n){return rn(this._delegate,g2(this._delegate,e,n))}signInWithEmailLink(e,n){return rn(this._delegate,w2(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Ng(this._delegate,gF(this._delegate,e,n))}async signInWithPopup(e){return Ma(Hp(),this._delegate,"operation-not-supported-in-this-environment"),rn(this._delegate,bF(this._delegate,e,ri))}async signInWithRedirect(e){return Ma(Hp(),this._delegate,"operation-not-supported-in-this-environment"),await Rg(this._delegate),PF(this._delegate,e,ri)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return p2(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Dg.Persistence=gn;function OS(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Ir.getOrCreate(o)),error:e,complete:n}}function ZU(t,e){const n=GU(t,e);if(typeof self<"u"&&!n.includes(Qu)&&n.push(Qu),typeof window<"u")for(const r of[Wv,Es])n.includes(r)||n.push(r);return n.includes(jo)||n.push(jo),n}/**
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
 */class Zv{constructor(){this.providerId="phone",this._delegate=new Gn(Ck(Lr.auth()))}static credential(e,n){return Gn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Zv.PHONE_SIGN_IN_METHOD=Gn.PHONE_SIGN_IN_METHOD;Zv.PROVIDER_ID=Gn.PROVIDER_ID;/**
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
 */const eV=N;class tV{constructor(e,n,r=Lr.app()){var i;eV((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new pF(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const nV="auth-compat";function rV(t){t.INTERNAL.registerComponent(new hr(nV,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Dg(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ks.EMAIL_SIGNIN,PASSWORD_RESET:Ks.PASSWORD_RESET,RECOVER_EMAIL:Ks.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ks.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ks.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ks.VERIFY_EMAIL}},EmailAuthProvider:Li,FacebookAuthProvider:Zn,GithubAuthProvider:tr,GoogleAuthProvider:er,OAuthProvider:Eo,SAMLAuthProvider:Dd,PhoneAuthProvider:Zv,PhoneMultiFactorGenerator:Ik,RecaptchaVerifier:tV,TwitterAuthProvider:nr,Auth:Dg,AuthCredential:ha,Error:Xt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion($U,MU)}rV(Lr);var iV=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K,ew=ew||{},re=iV||self;function Fd(){}function If(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Rl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function sV(t){return Object.prototype.hasOwnProperty.call(t,Gp)&&t[Gp]||(t[Gp]=++oV)}var Gp="closure_uid_"+(1e9*Math.random()>>>0),oV=0;function aV(t,e,n){return t.call.apply(t.bind,arguments)}function uV(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function jt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?jt=aV:jt=uV,jt.apply(null,arguments)}function Ec(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Lt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function $i(){this.s=this.s,this.o=this.o}var lV=0;$i.prototype.s=!1;$i.prototype.na=function(){!this.s&&(this.s=!0,this.M(),lV!=0)&&sV(this)};$i.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ak=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function tw(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function AS(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(If(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function zt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}zt.prototype.h=function(){this.defaultPrevented=!0};var cV=function(){if(!re.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{re.addEventListener("test",Fd,e),re.removeEventListener("test",Fd,e)}catch{}return t}();function Ud(t){return/^[\s\xa0]*$/.test(t)}var PS=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Kp(t,e){return t<e?-1:t>e?1:0}function Ef(){var t=re.navigator;return t&&(t=t.userAgent)?t:""}function rr(t){return Ef().indexOf(t)!=-1}function nw(t){return nw[" "](t),t}nw[" "]=Fd;function dV(t){var e=pV;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var hV=rr("Opera"),Bo=rr("Trident")||rr("MSIE"),Pk=rr("Edge"),Lg=Pk||Bo,Rk=rr("Gecko")&&!(Ef().toLowerCase().indexOf("webkit")!=-1&&!rr("Edge"))&&!(rr("Trident")||rr("MSIE"))&&!rr("Edge"),fV=Ef().toLowerCase().indexOf("webkit")!=-1&&!rr("Edge");function Nk(){var t=re.document;return t?t.documentMode:void 0}var Vd;e:{var Qp="",Yp=function(){var t=Ef();if(Rk)return/rv:([^\);]+)(\)|;)/.exec(t);if(Pk)return/Edge\/([\d\.]+)/.exec(t);if(Bo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(fV)return/WebKit\/(\S+)/.exec(t);if(hV)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Yp&&(Qp=Yp?Yp[1]:""),Bo){var Xp=Nk();if(Xp!=null&&Xp>parseFloat(Qp)){Vd=String(Xp);break e}}Vd=Qp}var pV={};function mV(){return dV(function(){let t=0;const e=PS(String(Vd)).split("."),n=PS("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Kp(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Kp(i[2].length==0,s[2].length==0)||Kp(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var $g;if(re.document&&Bo){var RS=Nk();$g=RS||parseInt(Vd,10)||void 0}else $g=void 0;var gV=$g;function Yu(t,e){if(zt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Rk){e:{try{nw(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:yV[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Yu.X.h.call(this)}}Lt(Yu,zt);var yV={2:"touch",3:"pen",4:"mouse"};Yu.prototype.h=function(){Yu.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Nl="closure_listenable_"+(1e6*Math.random()|0),vV=0;function wV(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++vV,this.ba=this.ea=!1}function bf(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function rw(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Dk(t){const e={};for(const n in t)e[n]=t[n];return e}const NS="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lk(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<NS.length;s++)n=NS[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Tf(t){this.src=t,this.g={},this.h=0}Tf.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Fg(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new wV(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Mg(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Ak(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(bf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Fg(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var iw="closure_lm_"+(1e6*Math.random()|0),Jp={};function $k(t,e,n,r,i){if(r&&r.once)return Fk(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)$k(t,e[s],n,r,i);return null}return n=aw(n),t&&t[Nl]?t.N(e,n,Rl(r)?!!r.capture:!!r,i):Mk(t,e,n,!1,r,i)}function Mk(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Rl(i)?!!i.capture:!!i,a=ow(t);if(a||(t[iw]=a=new Tf(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=SV(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)cV||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Vk(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function SV(){function t(n){return e.call(t.src,t.listener,n)}const e=_V;return t}function Fk(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Fk(t,e[s],n,r,i);return null}return n=aw(n),t&&t[Nl]?t.O(e,n,Rl(r)?!!r.capture:!!r,i):Mk(t,e,n,!0,r,i)}function Uk(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Uk(t,e[s],n,r,i);else r=Rl(r)?!!r.capture:!!r,n=aw(n),t&&t[Nl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Fg(s,n,r,i),-1<n&&(bf(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ow(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Fg(e,n,r,i)),(n=-1<t?e[t]:null)&&sw(n))}function sw(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Nl])Mg(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Vk(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ow(e))?(Mg(n,t),n.h==0&&(n.src=null,e[iw]=null)):bf(t)}}}function Vk(t){return t in Jp?Jp[t]:Jp[t]="on"+t}function _V(t,e){if(t.ba)t=!0;else{e=new Yu(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&sw(t),t=n.call(r,e)}return t}function ow(t){return t=t[iw],t instanceof Tf?t:null}var Zp="__closure_events_fn_"+(1e9*Math.random()>>>0);function aw(t){return typeof t=="function"?t:(t[Zp]||(t[Zp]=function(e){return t.handleEvent(e)}),t[Zp])}function vt(){$i.call(this),this.i=new Tf(this),this.P=this,this.I=null}Lt(vt,$i);vt.prototype[Nl]=!0;vt.prototype.removeEventListener=function(t,e,n,r){Uk(this,t,e,n,r)};function Rt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new zt(e,t);else if(e instanceof zt)e.target=e.target||t;else{var i=e;e=new zt(r,t),Lk(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=bc(o,r,!0,e)&&i}if(o=e.g=t,i=bc(o,r,!0,e)&&i,i=bc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=bc(o,r,!1,e)&&i}vt.prototype.M=function(){if(vt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)bf(n[r]);delete t.g[e],t.h--}}this.I=null};vt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};vt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function bc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&Mg(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var uw=re.JSON.stringify;function IV(){var t=Bk;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class EV{constructor(){this.h=this.g=null}add(e,n){const r=jk.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var jk=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new bV,t=>t.reset());class bV{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function TV(t){re.setTimeout(()=>{throw t},0)}function zk(t,e){Ug||kV(),Vg||(Ug(),Vg=!0),Bk.add(t,e)}var Ug;function kV(){var t=re.Promise.resolve(void 0);Ug=function(){t.then(xV)}}var Vg=!1,Bk=new EV;function xV(){for(var t;t=IV();){try{t.h.call(t.g)}catch(n){TV(n)}var e=jk;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vg=!1}function kf(t,e){vt.call(this),this.h=t||1,this.g=e||re,this.j=jt(this.kb,this),this.l=Date.now()}Lt(kf,vt);K=kf.prototype;K.ca=!1;K.R=null;K.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Rt(this,"tick"),this.ca&&(lw(this),this.start()))}};K.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function lw(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}K.M=function(){kf.X.M.call(this),lw(this),delete this.g};function cw(t,e,n){if(typeof t=="function")n&&(t=jt(t,n));else if(t&&typeof t.handleEvent=="function")t=jt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:re.setTimeout(t,e||0)}function qk(t){t.g=cw(()=>{t.g=null,t.i&&(t.i=!1,qk(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class CV extends $i{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:qk(this)}M(){super.M(),this.g&&(re.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xu(t){$i.call(this),this.h=t,this.g={}}Lt(Xu,$i);var DS=[];function Wk(t,e,n,r){Array.isArray(n)||(n&&(DS[0]=n.toString()),n=DS);for(var i=0;i<n.length;i++){var s=$k(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Hk(t){rw(t.g,function(e,n){this.g.hasOwnProperty(n)&&sw(e)},t),t.g={}}Xu.prototype.M=function(){Xu.X.M.call(this),Hk(this)};Xu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xf(){this.g=!0}xf.prototype.Aa=function(){this.g=!1};function OV(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function AV(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function po(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+RV(t,n)+(r?" "+r:"")})}function PV(t,e){t.info(function(){return"TIMEOUT: "+e})}xf.prototype.info=function(){};function RV(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return uw(n)}catch{return e}}var js={},LS=null;function Cf(){return LS=LS||new vt}js.Oa="serverreachability";function Gk(t){zt.call(this,js.Oa,t)}Lt(Gk,zt);function Ju(t){const e=Cf();Rt(e,new Gk(e))}js.STAT_EVENT="statevent";function Kk(t,e){zt.call(this,js.STAT_EVENT,t),this.stat=e}Lt(Kk,zt);function Qt(t){const e=Cf();Rt(e,new Kk(e,t))}js.Pa="timingevent";function Qk(t,e){zt.call(this,js.Pa,t),this.size=e}Lt(Qk,zt);function Dl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return re.setTimeout(function(){t()},e)}var Of={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},Yk={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function dw(){}dw.prototype.h=null;function $S(t){return t.h||(t.h=t.i())}function Xk(){}var Ll={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function hw(){zt.call(this,"d")}Lt(hw,zt);function fw(){zt.call(this,"c")}Lt(fw,zt);var jg;function Af(){}Lt(Af,dw);Af.prototype.g=function(){return new XMLHttpRequest};Af.prototype.i=function(){return{}};jg=new Af;function $l(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Xu(this),this.O=NV,t=Lg?125:void 0,this.T=new kf(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Jk}function Jk(){this.i=null,this.g="",this.h=!1}var NV=45e3,zg={},jd={};K=$l.prototype;K.setTimeout=function(t){this.O=t};function Bg(t,e,n){t.K=1,t.v=Rf(Pr(e)),t.s=n,t.P=!0,Zk(t,null)}function Zk(t,e){t.F=Date.now(),Ml(t),t.A=Pr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),ax(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Jk,t.g=Cx(t.l,n?e:null,!t.s),0<t.N&&(t.L=new CV(jt(t.Ka,t,t.g),t.N)),Wk(t.S,t.g,"readystatechange",t.hb),e=t.H?Dk(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ju(),OV(t.j,t.u,t.A,t.m,t.U,t.s)}K.hb=function(t){t=t.target;const e=this.L;e&&Er(t)==3?e.l():this.Ka(t)};K.Ka=function(t){try{if(t==this.g)e:{const c=Er(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>c)&&(c!=3||Lg||this.g&&(this.h.h||this.g.fa()||VS(this.g)))){this.I||c!=4||e==7||(e==8||0>=d?Ju(3):Ju(2)),Pf(this);var n=this.g.aa();this.Y=n;t:if(ex(this)){var r=VS(this.g);t="";var i=r.length,s=Er(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){is(this),gu(this);var o="";break t}this.h.i=new re.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,AV(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ud(a)){var l=a;break t}}l=null}if(n=l)po(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,qg(this,n);else{this.i=!1,this.o=3,Qt(12),is(this),gu(this);break e}}this.P?(tx(this,c,o),Lg&&this.i&&c==3&&(Wk(this.S,this.T,"tick",this.gb),this.T.start())):(po(this.j,this.m,o,null),qg(this,o)),c==4&&is(this),this.i&&!this.I&&(c==4?bx(this.l,this):(this.i=!1,Ml(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Qt(12)):(this.o=0,Qt(13)),is(this),gu(this)}}}catch{}finally{}};function ex(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function tx(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=DV(t,n),i==jd){e==4&&(t.o=4,Qt(14),r=!1),po(t.j,t.m,null,"[Incomplete Response]");break}else if(i==zg){t.o=4,Qt(15),po(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else po(t.j,t.m,i,null),qg(t,i);ex(t)&&i!=jd&&i!=zg&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Qt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Sw(e),e.K=!0,Qt(11))):(po(t.j,t.m,n,"[Invalid Chunked Response]"),is(t),gu(t))}K.gb=function(){if(this.g){var t=Er(this.g),e=this.g.fa();this.C<e.length&&(Pf(this),tx(this,t,e),this.i&&t!=4&&Ml(this))}};function DV(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?jd:(n=Number(e.substring(n,r)),isNaN(n)?zg:(r+=1,r+n>e.length?jd:(e=e.substr(r,n),t.C=r+n,e)))}K.cancel=function(){this.I=!0,is(this)};function Ml(t){t.V=Date.now()+t.O,nx(t,t.O)}function nx(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Dl(jt(t.fb,t),e)}function Pf(t){t.B&&(re.clearTimeout(t.B),t.B=null)}K.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(PV(this.j,this.A),this.K!=2&&(Ju(),Qt(17)),is(this),this.o=2,gu(this)):nx(this,this.V-t)};function gu(t){t.l.G==0||t.I||bx(t.l,t)}function is(t){Pf(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,lw(t.T),Hk(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function qg(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Wg(n.h,t))){if(!t.J&&Wg(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)qd(n),Lf(n);else break e;ww(n),Qt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Dl(jt(n.bb,n),6e3));if(1>=cx(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ss(n,11)}else if((t.J||n.g==t)&&qd(n),!Ud(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const c=l[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const d=l[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.h;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(pw(s,s.h),s.h=null))}if(r.D){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,Me(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=xx(r,r.H?r.ka:null,r.V),o.J){dx(r.h,o);var a=o,u=r.J;u&&a.setTimeout(u),a.B&&(Pf(a),Ml(a)),r.g=o}else Ix(r);0<n.i.length&&$f(n)}else l[0]!="stop"&&l[0]!="close"||ss(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ss(n,7):vw(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Ju(4)}catch{}}function LV(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(If(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function $V(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(If(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function rx(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(If(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=$V(t),r=LV(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var ix=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function MV(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function fs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof fs){this.h=e!==void 0?e:t.h,zd(this,t.j),this.s=t.s,this.g=t.g,Bd(this,t.m),this.l=t.l,e=t.i;var n=new Zu;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),MS(this,n),this.o=t.o}else t&&(n=String(t).match(ix))?(this.h=!!e,zd(this,n[1]||"",!0),this.s=Ja(n[2]||""),this.g=Ja(n[3]||"",!0),Bd(this,n[4]),this.l=Ja(n[5]||"",!0),MS(this,n[6]||"",!0),this.o=Ja(n[7]||"")):(this.h=!!e,this.i=new Zu(null,this.h))}fs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Za(e,FS,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Za(e,FS,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Za(n,n.charAt(0)=="/"?VV:UV,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Za(n,zV)),t.join("")};function Pr(t){return new fs(t)}function zd(t,e,n){t.j=n?Ja(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Bd(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function MS(t,e,n){e instanceof Zu?(t.i=e,BV(t.i,t.h)):(n||(e=Za(e,jV)),t.i=new Zu(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function Rf(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ja(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Za(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,FV),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function FV(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var FS=/[#\/\?@]/g,UV=/[#\?:]/g,VV=/[#\?]/g,jV=/[#\?@]/g,zV=/#/g;function Zu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Mi(t){t.g||(t.g=new Map,t.h=0,t.i&&MV(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}K=Zu.prototype;K.add=function(t,e){Mi(this),this.i=null,t=pa(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function sx(t,e){Mi(t),e=pa(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ox(t,e){return Mi(t),e=pa(t,e),t.g.has(e)}K.forEach=function(t,e){Mi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};K.oa=function(){Mi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};K.W=function(t){Mi(this);let e=[];if(typeof t=="string")ox(this,t)&&(e=e.concat(this.g.get(pa(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};K.set=function(t,e){return Mi(this),this.i=null,t=pa(this,t),ox(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};K.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function ax(t,e,n){sx(t,e),0<n.length&&(t.i=null,t.g.set(pa(t,e),tw(n)),t.h+=n.length)}K.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function pa(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function BV(t,e){e&&!t.j&&(Mi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(sx(this,r),ax(this,i,n))},t)),t.j=e}var qV=class{constructor(t,e){this.h=t,this.g=e}};function ux(t){this.l=t||WV,re.PerformanceNavigationTiming?(t=re.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(re.g&&re.g.Ga&&re.g.Ga()&&re.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var WV=10;function lx(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function cx(t){return t.h?1:t.g?t.g.size:0}function Wg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function pw(t,e){t.g?t.g.add(e):t.h=e}function dx(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ux.prototype.cancel=function(){if(this.i=hx(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function hx(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return tw(t.i)}function mw(){}mw.prototype.stringify=function(t){return re.JSON.stringify(t,void 0)};mw.prototype.parse=function(t){return re.JSON.parse(t,void 0)};function HV(){this.g=new mw}function GV(t,e,n){const r=n||"";try{rx(t,function(i,s){let o=i;Rl(i)&&(o=uw(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function KV(t,e){const n=new xf;if(re.Image){const r=new Image;r.onload=Ec(Tc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ec(Tc,n,r,"TestLoadImage: error",!1,e),r.onabort=Ec(Tc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ec(Tc,n,r,"TestLoadImage: timeout",!1,e),re.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Tc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Fl(t){this.l=t.$b||null,this.j=t.ib||!1}Lt(Fl,dw);Fl.prototype.g=function(){return new Nf(this.l,this.j)};Fl.prototype.i=function(t){return function(){return t}}({});function Nf(t,e){vt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=gw,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Lt(Nf,vt);var gw=0;K=Nf.prototype;K.open=function(t,e){if(this.readyState!=gw)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,el(this)};K.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||re).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))};K.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ul(this)),this.readyState=gw};K.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,el(this)),this.g&&(this.readyState=3,el(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof re.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fx(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))};function fx(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}K.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ul(this):el(this),this.readyState==3&&fx(this)}};K.Ua=function(t){this.g&&(this.response=this.responseText=t,Ul(this))};K.Ta=function(t){this.g&&(this.response=t,Ul(this))};K.ga=function(){this.g&&Ul(this)};function Ul(t){t.readyState=4,t.l=null,t.j=null,t.A=null,el(t)}K.setRequestHeader=function(t,e){this.v.append(t,e)};K.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};K.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function el(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Nf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var QV=re.JSON.parse;function it(t){vt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=px,this.K=this.L=!1}Lt(it,vt);var px="",YV=/^https?$/i,XV=["POST","PUT"];K=it.prototype;K.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():jg.g(),this.C=this.u?$S(this.u):$S(jg),this.g.onreadystatechange=jt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){US(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=re.FormData&&t instanceof re.FormData,!(0<=Ak(XV,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{yx(this),0<this.B&&((this.K=JV(this.g))?(this.g.timeout=this.B,this.g.ontimeout=jt(this.qa,this)):this.A=cw(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){US(this,s)}};function JV(t){return Bo&&mV()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}K.qa=function(){typeof ew<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Rt(this,"timeout"),this.abort(8))};function US(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,mx(t),Df(t)}function mx(t){t.D||(t.D=!0,Rt(t,"complete"),Rt(t,"error"))}K.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Rt(this,"complete"),Rt(this,"abort"),Df(this))};K.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Df(this,!0)),it.X.M.call(this)};K.Ha=function(){this.s||(this.F||this.v||this.l?gx(this):this.eb())};K.eb=function(){gx(this)};function gx(t){if(t.h&&typeof ew<"u"&&(!t.C[1]||Er(t)!=4||t.aa()!=2)){if(t.v&&Er(t)==4)cw(t.Ha,0,t);else if(Rt(t,"readystatechange"),Er(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(ix)[1]||null;if(!i&&re.self&&re.self.location){var s=re.self.location.protocol;i=s.substr(0,s.length-1)}r=!YV.test(i?i.toLowerCase():"")}n=r}if(n)Rt(t,"complete"),Rt(t,"success");else{t.m=6;try{var o=2<Er(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",mx(t)}}finally{Df(t)}}}}function Df(t,e){if(t.g){yx(t);const n=t.g,r=t.C[0]?Fd:null;t.g=null,t.C=null,e||Rt(t,"ready");try{n.onreadystatechange=r}catch{}}}function yx(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(re.clearTimeout(t.A),t.A=null)}function Er(t){return t.g?t.g.readyState:0}K.aa=function(){try{return 2<Er(this)?this.g.status:-1}catch{return-1}};K.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};K.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),QV(e)}};function VS(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case px:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}K.Ea=function(){return this.m};K.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function vx(t){let e="";return rw(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function yw(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=vx(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Me(t,e,n))}function Fa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function wx(t){this.Ca=0,this.i=[],this.j=new xf,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=Fa("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=Fa("baseRetryDelayMs",5e3,t),this.ab=Fa("retryDelaySeedMs",1e4,t),this.Za=Fa("forwardChannelMaxRetries",2,t),this.ta=Fa("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ux(t&&t.concurrentRequestLimit),this.Fa=new HV,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}K=wx.prototype;K.ma=8;K.G=1;function vw(t){if(Sx(t),t.G==3){var e=t.U++,n=Pr(t.F);Me(n,"SID",t.I),Me(n,"RID",e),Me(n,"TYPE","terminate"),Vl(t,n),e=new $l(t,t.j,e,void 0),e.K=2,e.v=Rf(Pr(n)),n=!1,re.navigator&&re.navigator.sendBeacon&&(n=re.navigator.sendBeacon(e.v.toString(),"")),!n&&re.Image&&(new Image().src=e.v,n=!0),n||(e.g=Cx(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ml(e)}kx(t)}function Lf(t){t.g&&(Sw(t),t.g.cancel(),t.g=null)}function Sx(t){Lf(t),t.u&&(re.clearTimeout(t.u),t.u=null),qd(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&re.clearTimeout(t.m),t.m=null)}function $f(t){lx(t.h)||t.m||(t.m=!0,zk(t.Ja,t),t.C=0)}function ZV(t,e){return cx(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Ya?0:t.Za)?!1:(t.m=Dl(jt(t.Ja,t,e),Tx(t,t.C)),t.C++,!0)}K.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new $l(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Dk(s),Lk(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=_x(this,i,e),n=Pr(this.F),Me(n,"RID",t),Me(n,"CVER",22),this.D&&Me(n,"X-HTTP-Session-Id",this.D),Vl(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(vx(s)))+"&"+e:this.o&&yw(n,this.o,s)),pw(this.h,i),this.Xa&&Me(n,"TYPE","init"),this.O?(Me(n,"$req",e),Me(n,"SID","null"),i.Z=!0,Bg(i,n,null)):Bg(i,n,e),this.G=2}}else this.G==3&&(t?jS(this,t):this.i.length==0||lx(this.h)||jS(this))};function jS(t,e){var n;e?n=e.m:n=t.U++;const r=Pr(t.F);Me(r,"SID",t.I),Me(r,"RID",n),Me(r,"AID",t.T),Vl(t,r),t.o&&t.s&&yw(r,t.o,t.s),n=new $l(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=_x(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),pw(t.h,n),Bg(n,r,e)}function Vl(t,e){t.ia&&rw(t.ia,function(n,r){Me(e,r,n)}),t.l&&rx({},function(n,r){Me(e,r,n)})}function _x(t,e,n){n=Math.min(t.i.length,n);var r=t.l?jt(t.l.Qa,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{GV(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function Ix(t){t.g||t.u||(t.Z=1,zk(t.Ia,t),t.A=0)}function ww(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Dl(jt(t.Ia,t),Tx(t,t.A)),t.A++,!0)}K.Ia=function(){if(this.u=null,Ex(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Dl(jt(this.cb,this),t)}};K.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Qt(10),Lf(this),Ex(this))};function Sw(t){t.B!=null&&(re.clearTimeout(t.B),t.B=null)}function Ex(t){t.g=new $l(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Pr(t.sa);Me(e,"RID","rpc"),Me(e,"SID",t.I),Me(e,"CI",t.L?"0":"1"),Me(e,"AID",t.T),Me(e,"TYPE","xmlhttp"),Vl(t,e),t.o&&t.s&&yw(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Rf(Pr(e)),n.s=null,n.P=!0,Zk(n,t)}K.bb=function(){this.v!=null&&(this.v=null,Lf(this),ww(this),Qt(19))};function qd(t){t.v!=null&&(re.clearTimeout(t.v),t.v=null)}function bx(t,e){var n=null;if(t.g==e){qd(t),Sw(t),t.g=null;var r=2}else if(Wg(t.h,e))n=e.D,dx(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Cf(),Rt(r,new Qk(r,n)),$f(t)}else Ix(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&ZV(t,e)||r==2&&ww(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ss(t,5);break;case 4:ss(t,10);break;case 3:ss(t,6);break;default:ss(t,2)}}}function Tx(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function ss(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=jt(t.jb,t);n||(n=new fs("//www.google.com/images/cleardot.gif"),re.location&&re.location.protocol=="http"||zd(n,"https"),Rf(n)),KV(n.toString(),r)}else Qt(2);t.G=0,t.l&&t.l.va(e),kx(t),Sx(t)}K.jb=function(t){t?(this.j.info("Successfully pinged google.com"),Qt(2)):(this.j.info("Failed to ping google.com"),Qt(1))};function kx(t){if(t.G=0,t.la=[],t.l){const e=hx(t.h);(e.length!=0||t.i.length!=0)&&(AS(t.la,e),AS(t.la,t.i),t.h.i.length=0,tw(t.i),t.i.length=0),t.l.ua()}}function xx(t,e,n){var r=n instanceof fs?Pr(n):new fs(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Bd(r,r.m);else{var i=re.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new fs(null,void 0);r&&zd(s,r),e&&(s.g=e),i&&Bd(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Me(r,n,e),Me(r,"VER",t.ma),Vl(t,r),r}function Cx(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new it(new Fl({ib:!0})):new it(t.ra),e.L=t.H,e}function Ox(){}K=Ox.prototype;K.xa=function(){};K.wa=function(){};K.va=function(){};K.ua=function(){};K.Qa=function(){};function Wd(){if(Bo&&!(10<=Number(gV)))throw Error("Environmental error: no available transport.")}Wd.prototype.g=function(t,e){return new In(t,e)};function In(t,e){vt.call(this),this.g=new wx(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!Ud(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ud(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ma(this)}Lt(In,vt);In.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Qt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=xx(t,null,t.V),$f(t)};In.prototype.close=function(){vw(this.g)};In.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=uw(t),t=n);e.i.push(new qV(e.$a++,t)),e.G==3&&$f(e)};In.prototype.M=function(){this.g.l=null,delete this.j,vw(this.g),delete this.g,In.X.M.call(this)};function Ax(t){hw.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Lt(Ax,hw);function Px(){fw.call(this),this.status=1}Lt(Px,fw);function ma(t){this.g=t}Lt(ma,Ox);ma.prototype.xa=function(){Rt(this.g,"a")};ma.prototype.wa=function(t){Rt(this.g,new Ax(t))};ma.prototype.va=function(t){Rt(this.g,new Px)};ma.prototype.ua=function(){Rt(this.g,"b")};Wd.prototype.createWebChannel=Wd.prototype.g;In.prototype.send=In.prototype.u;In.prototype.open=In.prototype.m;In.prototype.close=In.prototype.close;Of.NO_ERROR=0;Of.TIMEOUT=8;Of.HTTP_ERROR=6;Yk.COMPLETE="complete";Xk.EventType=Ll;Ll.OPEN="a";Ll.CLOSE="b";Ll.ERROR="c";Ll.MESSAGE="d";vt.prototype.listen=vt.prototype.N;it.prototype.listenOnce=it.prototype.O;it.prototype.getLastError=it.prototype.Na;it.prototype.getLastErrorCode=it.prototype.Ea;it.prototype.getStatus=it.prototype.aa;it.prototype.getResponseJson=it.prototype.Ra;it.prototype.getResponseText=it.prototype.fa;it.prototype.send=it.prototype.da;var ej=function(){return new Wd},tj=function(){return Cf()},em=Of,nj=Yk,rj=js,zS={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ij=Fl,kc=Xk,sj=it;const BS="@firebase/firestore";/**
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
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let ga="9.10.0";/**
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
 */const Ei=new cf("@firebase/firestore");function Hg(){return Ei.logLevel}function oj(t){Ei.setLogLevel(t)}function A(t,...e){if(Ei.logLevel<=ye.DEBUG){const n=e.map(_w);Ei.debug(`Firestore (${ga}): ${t}`,...n)}}function et(t,...e){if(Ei.logLevel<=ye.ERROR){const n=e.map(_w);Ei.error(`Firestore (${ga}): ${t}`,...n)}}function qo(t,...e){if(Ei.logLevel<=ye.WARN){const n=e.map(_w);Ei.warn(`Firestore (${ga}): ${t}`,...n)}}function _w(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${ga}) INTERNAL ASSERTION FAILED: `+t;throw et(e),new Error(e)}function te(t,e){t||G()}function aj(t,e){t||G()}function U(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Xt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Rx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uj{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class lj{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cj{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new mt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new mt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string"),new Rx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new ft(e)}}class dj{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(te(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class hj{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new dj(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fj{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pj{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,A("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(te(typeof n.token=="string"),this.A=n.token,new fj(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function mj(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Nx{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=mj(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Wo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function Dx(t){return t+"\0"}/**
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
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ue(0,0))}static max(){return new ee(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class tl{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends tl{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const gj=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends tl{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return gj.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new O(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new O(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(me.fromString(e))}static fromName(e){return new M(me.fromString(e).popFirst(5))}static empty(){return new M(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new me(e.slice()))}}/**
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
 */class Lx{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Gg(t){return t.fields.find(e=>e.kind===2)}function Gi(t){return t.fields.filter(e=>e.kind!==2)}Lx.UNKNOWN_ID=-1;class yj{constructor(e,n){this.fieldPath=e,this.kind=n}}class Hd{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Hd(0,En.min())}}function $x(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new En(i,M.empty(),e)}function Mx(t){return new En(t.readTime,t.key,-1)}class En{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new En(ee.min(),M.empty(),-1)}static max(){return new En(ee.max(),M.empty(),-1)}}function Iw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const Fx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ux{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Fi(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==Fx)throw t;A("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new _((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new _((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Mf{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new mt,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new yu(e,n.error)):this.P.resolve()},this.transaction.onerror=r=>{const i=Ew(r.target.error);this.P.reject(new yu(e,i))}}static open(e,n,r,i){try{return new Mf(n,e.transaction(i,r))}catch(s){throw new yu(n,s)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(A("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new wj(n)}}class Bn{constructor(e,n,r){this.name=e,this.version=n,this.S=r,Bn.D(qe())===12.2&&et("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return A("SimpleDb","Removing database:",e),Qi(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!zu())return!1;if(Bn.N())return!0;const e=qe(),n=Bn.D(e),r=0<n&&n<10,i=Bn.k(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async F(e){return this.db||(A("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new yu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new O(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new O(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new yu(e,o))},i.onupgradeneeded=s=>{A("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.$(o,i.transaction,s.oldVersion,this.version).next(()=>{A("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=Mf.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(l=>(a.V(),l)).catch(l=>(a.abort(l),_.reject(l))).toPromise();return u.catch(()=>{}),await a.v,u}catch(a){const u=a,l=u.name!=="FirebaseError"&&o<3;if(A("SimpleDb","Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class vj{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return Qi(this.U.delete())}}class yu extends O{constructor(e,n){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ui(t){return t.name==="IndexedDbTransactionError"}class wj{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(A("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(A("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Qi(r)}add(e){return A("SimpleDb","ADD",this.store.name,e,e),Qi(this.store.add(e))}get(e){return Qi(this.store.get(e)).next(n=>(n===void 0&&(n=null),A("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return A("SimpleDb","DELETE",this.store.name,e),Qi(this.store.delete(e))}count(){return A("SimpleDb","COUNT",this.store.name),Qi(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.H(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new _((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}J(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new _((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,n){A("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.X=!1;const i=this.cursor(r);return this.H(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.H(i,n)}tt(e){const n=this.cursor({});return new _((r,i)=>{n.onerror=s=>{const o=Ew(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,n){const r=[];return new _((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new vj(a),l=n(a.primaryKey,a.value,u);if(l instanceof _){const c=l.catch(d=>(u.done(),_.reject(d)));r.push(c)}u.isDone?i():u.G===null?a.continue():a.continue(u.G)}}).next(()=>_.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Qi(t){return new _((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Ew(r.target.error);n(i)}})}let qS=!1;function Ew(t){const e=Bn.D(qe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return qS||(qS=!0,setTimeout(()=>{throw r},0)),r}}return t}class Sj{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){A("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{A("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){Ui(n)?A("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Fi(n)}await this.nt(6e4)})}}class _j{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const r=new Set;let i=n,s=!0;return _.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return A("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}rt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(i,s)).next(a=>(A("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=Mx(s);Iw(o,r)>0&&(r=o)}),new En(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class un{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function WS(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Vx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */un.at=-1;class Qe{constructor(e,n){this.comparator=e,this.root=n||xt.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xc(this.root,e,this.comparator,!1)}getReverseIterator(){return new xc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xc(this.root,e,this.comparator,!0)}}class xc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:xt.RED,this.left=i!=null?i:xt.EMPTY,this.right=s!=null?s:xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new xt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return xt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,i){return this}insert(t,e,n){return new xt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ce{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new HS(this.data.getIterator())}getIteratorFrom(e){return new HS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ce(this.comparator);return n.data=e,n}}class HS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Qs(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Sn{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Sn([])}unionWith(e){let n=new Ce(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Wo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */function Ij(){return typeof atob<"u"}/**
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
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new lt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Ej=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bi(t){if(te(!!t),typeof t=="string"){let e=0;const n=Ej.exec(t);if(te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ts(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
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
 */function bw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jx(t){const e=t.mapValue.fields.__previous_value__;return bw(e)?jx(e):e}function nl(t){const e=bi(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class bj{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Ti{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ti("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ti&&e.projectId===this.projectId&&e.database===this.database}}function jl(t){return t==null}function rl(t){return t===0&&1/t==-1/0}function zx(t){return typeof t=="number"&&Number.isInteger(t)&&!rl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const ii={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Xc={nullValue:"NULL_VALUE"};function ks(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bw(t)?4:Bx(t)?9007199254740991:10:G()}function pr(t,e){if(t===e)return!0;const n=ks(t);if(n!==ks(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return nl(t).isEqual(nl(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=bi(r.timestampValue),o=bi(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ts(r.bytesValue).isEqual(Ts(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ke(r.geoPointValue.latitude)===Ke(i.geoPointValue.latitude)&&Ke(r.geoPointValue.longitude)===Ke(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ke(r.integerValue)===Ke(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ke(r.doubleValue),o=Ke(i.doubleValue);return s===o?rl(s)===rl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Wo(t.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(WS(s)!==WS(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!pr(s[a],o[a])))return!1;return!0}(t,e);default:return G()}}function il(t,e){return(t.values||[]).find(n=>pr(n,e))!==void 0}function ki(t,e){if(t===e)return 0;const n=ks(t),r=ks(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ke(i.integerValue||i.doubleValue),a=Ke(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return GS(t.timestampValue,e.timestampValue);case 4:return GS(nl(t),nl(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ts(i),a=Ts(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=oe(o[u],a[u]);if(l!==0)return l}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=oe(Ke(i.latitude),Ke(s.latitude));return o!==0?o:oe(Ke(i.longitude),Ke(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=ki(o[u],a[u]);if(l)return l}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ii.mapValue&&s===ii.mapValue)return 0;if(i===ii.mapValue)return 1;if(s===ii.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const d=oe(a[c],l[c]);if(d!==0)return d;const h=ki(o[a[c]],u[l[c]]);if(h!==0)return h}return oe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function GS(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=bi(t),r=bi(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function To(t){return Kg(t)}function Kg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=bi(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ts(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Kg(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Kg(r.fields[a])}`;return s+"}"}(t.mapValue):G();var e,n}function xs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Qg(t){return!!t&&"integerValue"in t}function sl(t){return!!t&&"arrayValue"in t}function KS(t){return!!t&&"nullValue"in t}function QS(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Jc(t){return!!t&&"mapValue"in t}function vu(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vu(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vu(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Bx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function Tj(t){return"nullValue"in t?Xc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?xs(Ti.empty(),M.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:G()}function kj(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?xs(Ti.empty(),M.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?ii:G()}function YS(t,e){const n=ki(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function XS(t,e){const n=ki(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Jc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vu(n)}setAll(e){let n=tt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=vu(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Jc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Jc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){zs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ct(vu(this.value))}}function qx(t){const e=[];return zs(t.fields,(n,r)=>{const i=new tt([n]);if(Jc(r)){const s=qx(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Sn(e)}/**
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
 */class Oe{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Oe(e,0,ee.min(),ee.min(),Ct.empty(),0)}static newFoundDocument(e,n,r){return new Oe(e,1,n,ee.min(),r,0)}static newNoDocument(e,n){return new Oe(e,2,n,ee.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new Oe(e,3,n,ee.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xj{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function JS(t,e=null,n=[],r=[],i=null,s=null,o=null){return new xj(t,e,n,r,i,s,o)}function Cs(t){const e=U(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+To(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),jl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>To(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>To(r)).join(",")),e.ht=n}return e.ht}function Cj(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${To(r.value)}`;var r}).join(", ")}]`),jl(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>To(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>To(n)).join(",")),`Target(${e})`}function zl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!$j(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!pr(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!n_(t.startAt,e.startAt)&&n_(t.endAt,e.endAt)}function Gd(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Kd(t,e){return t.filters.filter(n=>n instanceof Ot&&n.field.isEqual(e))}function ZS(t,e,n){let r=Xc,i=!0;for(const s of Kd(t,e)){let o=Xc,a=!0;switch(s.op){case"<":case"<=":o=Tj(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Xc}YS({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];YS({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function e_(t,e,n){let r=ii,i=!0;for(const s of Kd(t,e)){let o=ii,a=!0;switch(s.op){case">=":case">":o=kj(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=ii}XS({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];XS({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}class Ot extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new Oj(e,n,r):n==="array-contains"?new Rj(e,r):n==="in"?new Nj(e,r):n==="not-in"?new Dj(e,r):n==="array-contains-any"?new Lj(e,r):new Ot(e,n,r)}static lt(e,n,r){return n==="in"?new Aj(e,r):new Pj(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ki(n,this.value)):n!==null&&ks(this.value)===ks(n)&&this.ft(ki(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Oj extends Ot{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.ft(n)}}class Aj extends Ot{constructor(e,n){super(e,"in",n),this.keys=Wx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Pj extends Ot{constructor(e,n){super(e,"not-in",n),this.keys=Wx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Wx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class Rj extends Ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sl(n)&&il(n.arrayValue,this.value)}}class Nj extends Ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&il(this.value.arrayValue,n)}}class Dj extends Ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(il(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!il(this.value.arrayValue,n)}}class Lj extends Ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>il(this.value.arrayValue,r))}}class xi{constructor(e,n){this.position=e,this.inclusive=n}}class ko{constructor(e,n="asc"){this.field=e,this.dir=n}}function $j(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function t_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=ki(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function n_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Fr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this._t=null,this.wt=null,this.startAt,this.endAt}}function Hx(t,e,n,r,i,s,o,a){return new Fr(t,e,n,r,i,s,o,a)}function ya(t){return new Fr(t)}function r_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Tw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function kw(t){for(const e of t.filters)if(e.dt())return e.field;return null}function xw(t){return t.collectionGroup!==null}function Ho(t){const e=U(t);if(e._t===null){e._t=[];const n=kw(e),r=Tw(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new ko(n)),e._t.push(new ko(tt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new ko(tt.keyField(),s))}}}return e._t}function pn(t){const e=U(t);if(!e.wt)if(e.limitType==="F")e.wt=JS(e.path,e.collectionGroup,Ho(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ho(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ko(s.field,o))}const r=e.endAt?new xi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new xi(e.startAt.position,e.startAt.inclusive):null;e.wt=JS(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Qd(t,e,n){return new Fr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bl(t,e){return zl(pn(t),pn(e))&&t.limitType===e.limitType}function Gx(t){return`${Cs(pn(t))}|lt:${t.limitType}`}function Yg(t){return`Query(target=${Cj(pn(t))}; limitType=${t.limitType})`}function Cw(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=t_(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ho(n),r)||n.endAt&&!function(i,s,o){const a=t_(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ho(n),r))}(t,e)}function Kx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qx(t){return(e,n)=>{let r=!1;for(const i of Ho(t)){const s=Mj(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Mj(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?ki(a,u):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */function Yx(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rl(e)?"-0":e}}function Xx(t){return{integerValue:""+t}}function Jx(t,e){return zx(e)?Xx(e):Yx(t,e)}/**
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
 */class Ff{constructor(){this._=void 0}}function Fj(t,e,n){return t instanceof Go?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Os?eC(t,e):t instanceof As?tC(t,e):function(r,i){const s=Zx(r,i),o=i_(s)+i_(r.yt);return Qg(s)&&Qg(r.yt)?Xx(o):Yx(r.It,o)}(t,e)}function Uj(t,e,n){return t instanceof Os?eC(t,e):t instanceof As?tC(t,e):n}function Zx(t,e){return t instanceof Ko?Qg(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Go extends Ff{}class Os extends Ff{constructor(e){super(),this.elements=e}}function eC(t,e){const n=nC(e);for(const r of t.elements)n.some(i=>pr(i,r))||n.push(r);return{arrayValue:{values:n}}}class As extends Ff{constructor(e){super(),this.elements=e}}function tC(t,e){let n=nC(e);for(const r of t.elements)n=n.filter(i=>!pr(i,r));return{arrayValue:{values:n}}}class Ko extends Ff{constructor(e,n){super(),this.It=e,this.yt=n}}function i_(t){return Ke(t.integerValue||t.doubleValue)}function nC(t){return sl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class ql{constructor(e,n){this.field=e,this.transform=n}}function Vj(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Os&&r instanceof Os||n instanceof As&&r instanceof As?Wo(n.elements,r.elements,pr):n instanceof Ko&&r instanceof Ko?pr(n.yt,r.yt):n instanceof Go&&r instanceof Go}(t.transform,e.transform)}class jj{constructor(e,n){this.version=e,this.transformResults=n}}class Fe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fe}static exists(e){return new Fe(void 0,e)}static updateTime(e){return new Fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Uf{}function rC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wa(t.key,Fe.none()):new va(t.key,t.data,Fe.none());{const n=t.data,r=Ct.empty();let i=new Ce(tt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ur(t.key,r,new Sn(i.toArray()),Fe.none())}}function zj(t,e,n){t instanceof va?function(r,i,s){const o=r.value.clone(),a=o_(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ur?function(r,i,s){if(!Zc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=o_(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(iC(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function wu(t,e,n,r){return t instanceof va?function(i,s,o,a){if(!Zc(i.precondition,s))return o;const u=i.value.clone(),l=a_(i.fieldTransforms,a,s);return u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ur?function(i,s,o,a){if(!Zc(i.precondition,s))return o;const u=a_(i.fieldTransforms,a,s),l=s.data;return l.setAll(iC(i)),l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Zc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Bj(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Zx(r.transform,i||null);s!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,s))}return n||null}function s_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Wo(n,r,(i,s)=>Vj(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class va extends Uf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ur extends Uf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function iC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function o_(t,e,n){const r=new Map;te(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Uj(o,a,n[i]))}return r}function a_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Fj(s,o,e))}return r}class wa extends Uf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ow extends Uf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class qj{constructor(e){this.count=e}}/**
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
 */var nt,pe;function sC(t){switch(t){default:return G();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function oC(t){if(t===void 0)return et("GRPC error has no .code"),T.UNKNOWN;switch(t){case nt.OK:return T.OK;case nt.CANCELLED:return T.CANCELLED;case nt.UNKNOWN:return T.UNKNOWN;case nt.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case nt.INTERNAL:return T.INTERNAL;case nt.UNAVAILABLE:return T.UNAVAILABLE;case nt.UNAUTHENTICATED:return T.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case nt.NOT_FOUND:return T.NOT_FOUND;case nt.ALREADY_EXISTS:return T.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return T.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case nt.ABORTED:return T.ABORTED;case nt.OUT_OF_RANGE:return T.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return T.UNIMPLEMENTED;case nt.DATA_LOSS:return T.DATA_LOSS;default:return G()}}(pe=nt||(nt={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Vi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){zs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Vx(this.inner)}size(){return this.innerSize}}/**
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
 */const Wj=new Qe(M.comparator);function ln(){return Wj}const aC=new Qe(M.comparator);function eu(...t){let e=aC;for(const n of t)e=e.insert(n.key,n);return e}function uC(t){let e=aC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function sr(){return Su()}function lC(){return Su()}function Su(){return new Vi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Hj=new Qe(M.comparator),Gj=new Ce(M.comparator);function ae(...t){let e=Gj;for(const n of t)e=e.add(n);return e}const Kj=new Ce(oe);function Vf(){return Kj}/**
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
 */class Wl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Hl.createSynthesizedTargetChangeForCurrentChange(e,n)),new Wl(ee.min(),r,Vf(),ln(),ae())}}class Hl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Hl(lt.EMPTY_BYTE_STRING,n,ae(),ae(),ae())}}/**
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
 */class ed{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class cC{constructor(e,n){this.targetId=e,this.At=n}}class dC{constructor(e,n,r=lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class u_{constructor(){this.Rt=0,this.bt=c_(),this.Pt=lt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=ae(),n=ae(),r=ae();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Hl(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=c_()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Qj{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=ln(),this.qt=l_(),this.Kt=new Ce(oe)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(Gd(s))if(r===0){const o=new M(s.path);this.jt(n,o,Oe.newNoDocument(o,ee.min()))}else te(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Gd(a.target)){const u=new M(a.target.path);this.Ut.get(u)!==null||this.ee(o,u)||this.jt(o,u,Oe.newNoDocument(u,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=ae();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Xt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Wl(e,n,this.Kt,this.Ut,r);return this.Ut=ln(),this.qt=l_(),this.Kt=new Ce(oe),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new u_,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Ce(oe),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||A("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new u_),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function l_(){return new Qe(M.comparator)}function c_(){return new Qe(M.comparator)}/**
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
 */const Yj=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Xj=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Jj{constructor(e,n){this.databaseId=e,this.gt=n}}function ol(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hC(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Zj(t,e){return ol(t,e.toTimestamp())}function gt(t){return te(!!t),ee.fromTimestamp(function(e){const n=bi(e);return new Ue(n.seconds,n.nanos)}(t))}function Aw(t,e){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function fC(t){const e=me.fromString(t);return te(_C(e)),e}function al(t,e){return Aw(t.databaseId,e.path)}function lr(t,e){const n=fC(e);if(n.get(1)!==t.databaseId.projectId)throw new O(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(mC(n))}function Xg(t,e){return Aw(t.databaseId,e)}function pC(t){const e=fC(t);return e.length===4?me.emptyPath():mC(e)}function ul(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mC(t){return te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function d_(t,e,n){return{name:al(t,e),fields:n.value.mapValue.fields}}function gC(t,e,n){const r=lr(t,e.name),i=gt(e.updateTime),s=new Ct({mapValue:{fields:e.fields}}),o=Oe.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function ez(t,e){return"found"in e?function(n,r){te(!!r.found),r.found.name,r.found.updateTime;const i=lr(n,r.found.name),s=gt(r.found.updateTime),o=new Ct({mapValue:{fields:r.found.fields}});return Oe.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){te(!!r.missing),te(!!r.readTime);const i=lr(n,r.missing),s=gt(r.readTime);return Oe.newNoDocument(i,s)}(t,e):G()}function tz(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.gt?(te(l===void 0||typeof l=="string"),lt.fromBase64String(l||"")):(te(l===void 0||l instanceof Uint8Array),lt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?T.UNKNOWN:oC(u.code);return new O(l,u.message||"")}(o);n=new dC(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=lr(t,r.document.name),s=gt(r.document.updateTime),o=new Ct({mapValue:{fields:r.document.fields}}),a=Oe.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new ed(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=lr(t,r.document),s=r.readTime?gt(r.readTime):ee.min(),o=Oe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ed([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=lr(t,r.document),s=r.removedTargetIds||[];n=new ed([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new qj(i),o=r.targetId;n=new cC(o,s)}}return n}function ll(t,e){let n;if(e instanceof va)n={update:d_(t,e.key,e.value)};else if(e instanceof wa)n={delete:al(t,e.key)};else if(e instanceof Ur)n={update:d_(t,e.key,e.data),updateMask:uz(e.fieldMask)};else{if(!(e instanceof Ow))return G();n={verify:al(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Go)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Os)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof As)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ko)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Zj(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function Jg(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Fe.updateTime(gt(i.updateTime)):i.exists!==void 0?Fe.exists(i.exists):Fe.none()}(e.currentDocument):Fe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)te(o.setToServerValue==="REQUEST_TIME"),a=new Go;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new Os(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new As(l)}else"increment"in o?a=new Ko(s,o.increment):G();const u=tt.fromServerFormat(o.fieldPath);return new ql(u,a)}(t,i)):[];if(e.update){e.update.name;const i=lr(t,e.update.name),s=new Ct({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new Sn(u.map(l=>tt.fromServerFormat(l)))}(e.updateMask);return new Ur(i,s,o,n,r)}return new va(i,s,n,r)}if(e.delete){const i=lr(t,e.delete);return new wa(i,n)}if(e.verify){const i=lr(t,e.verify);return new Ow(i,n)}return G()}function nz(t,e){return t&&t.length>0?(te(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?gt(r.updateTime):gt(i);return s.isEqual(ee.min())&&(s=gt(i)),new jj(s,r.transformResults||[])}(n,e))):[]}function yC(t,e){return{documents:[Xg(t,e.path)]}}function vC(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Xg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length===0)return;const l=u.map(c=>function(d){if(d.op==="=="){if(QS(d.value))return{unaryFilter:{field:Ys(d.field),op:"IS_NAN"}};if(KS(d.value))return{unaryFilter:{field:Ys(d.field),op:"IS_NULL"}}}else if(d.op==="!="){if(QS(d.value))return{unaryFilter:{field:Ys(d.field),op:"IS_NOT_NAN"}};if(KS(d.value))return{unaryFilter:{field:Ys(d.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ys(d.field),op:sz(d.op),value:d.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:Ys(c.field),direction:iz(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(u,l){return u.gt||jl(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function wC(t){let e=pC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){te(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=SC(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new ko(mo(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,jl(d)?null:d}(n.limit));let u=null;n.startAt&&(u=function(c){const d=!!c.before,h=c.values||[];return new xi(h,d)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const d=!c.before,h=c.values||[];return new xi(h,d)}(n.endAt)),Hx(e,i,o,s,a,"F",u,l)}function rz(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function SC(t){return t?t.unaryFilter!==void 0?[az(t)]:t.fieldFilter!==void 0?[oz(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>SC(e)).reduce((e,n)=>e.concat(n)):G():[]}function iz(t){return Yj[t]}function sz(t){return Xj[t]}function Ys(t){return{fieldPath:t.canonicalString()}}function mo(t){return tt.fromServerFormat(t.fieldPath)}function oz(t){return Ot.create(mo(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}function az(t){switch(t.unaryFilter.op){case"IS_NAN":const e=mo(t.unaryFilter.field);return Ot.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=mo(t.unaryFilter.field);return Ot.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=mo(t.unaryFilter.field);return Ot.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=mo(t.unaryFilter.field);return Ot.create(i,"!=",{nullValue:"NULL_VALUE"});default:return G()}}function uz(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _C(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function Jt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=h_(e)),e=lz(t.get(n),e);return h_(e)}function lz(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function h_(t){return t+""}function or(t){const e=t.length;if(te(e>=2),e===2)return te(t.charAt(0)===""&&t.charAt(1)===""),me.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&G(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:G()}s=o+2}return new me(r)}/**
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
 */const f_=["userId","batchId"];/**
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
 */function td(t,e){return[t,Jt(e)]}function IC(t,e,n){return[t,Jt(e),n]}const cz={},dz=["prefixPath","collectionGroup","readTime","documentId"],hz=["prefixPath","collectionGroup","documentId"],fz=["collectionGroup","readTime","prefixPath","documentId"],pz=["canonicalId","targetId"],mz=["targetId","path"],gz=["path","targetId"],yz=["collectionId","parent"],vz=["indexId","uid"],wz=["uid","sequenceNumber"],Sz=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],_z=["indexId","uid","orderedDocumentKey"],Iz=["userId","collectionPath","documentId"],Ez=["userId","collectionPath","largestBatchId"],bz=["userId","collectionGroup","largestBatchId"],EC=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Tz=[...EC,"documentOverlays"],bC=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],TC=bC,kz=[...TC,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Zg extends Ux{constructor(e,n){super(),this.ie=e,this.currentSequenceNumber=n}}function _t(t,e){const n=U(t);return Bn.O(n.ie,e)}/**
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
 */class Pw{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&zj(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wu(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wu(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lC();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=rC(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&Wo(this.mutations,e.mutations,(n,r)=>s_(n,r))&&Wo(this.baseMutations,e.baseMutations,(n,r)=>s_(n,r))}}class Rw{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){te(e.mutations.length===r.length);let i=Hj;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Rw(e,n,r,i)}}/**
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
 */class Nw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gi{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=lt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class kC{constructor(e){this.re=e}}function xz(t,e){let n;if(e.document)n=gC(t.re,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=M.fromSegments(e.noDocument.path),i=Rs(e.noDocument.readTime);n=Oe.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return G();{const r=M.fromSegments(e.unknownDocument.path),i=Rs(e.unknownDocument.version);n=Oe.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new Ue(r[0],r[1]);return ee.fromTimestamp(i)}(e.readTime)),n}function p_(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Yd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:al(i,s.key),fields:s.data.value.mapValue.fields,updateTime:ol(i,s.version.toTimestamp())}}(t.re,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ps(e.version)};else{if(!e.isUnknownDocument())return G();r.unknownDocument={path:n.path.toArray(),version:Ps(e.version)}}return r}function Yd(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ps(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Rs(t){const e=new Ue(t.seconds,t.nanoseconds);return ee.fromTimestamp(e)}function Yi(t,e){const n=(e.baseMutations||[]).map(s=>Jg(t.re,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Jg(t.re,s)),i=Ue.fromMillis(e.localWriteTimeMs);return new Pw(e.batchId,i,n,r)}function tu(t){const e=Rs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Rs(t.lastLimboFreeSnapshotVersion):ee.min();let r;var i;return t.query.documents!==void 0?(te((i=t.query).documents.length===1),r=pn(ya(pC(i.documents[0])))):r=function(s){return pn(wC(s))}(t.query),new gi(r,t.targetId,0,t.lastListenSequenceNumber,e,n,lt.fromBase64String(t.resumeToken))}function xC(t,e){const n=Ps(e.snapshotVersion),r=Ps(e.lastLimboFreeSnapshotVersion);let i;i=Gd(e.target)?yC(t.re,e.target):vC(t.re,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Cs(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Dw(t){const e=wC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qd(e,e.limit,"L"):e}function tm(t,e){return new Nw(e.largestBatchId,Jg(t.re,e.overlayMutation))}function m_(t,e){const n=e.path.lastSegment();return[t,Jt(e.path.popLast()),n]}function g_(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Ps(r.readTime),documentKey:Jt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class Cz{getBundleMetadata(e,n){return y_(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Rs(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return y_(e).put({bundleId:(r=n).id,createTime:Ps(gt(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return v_(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:Dw(i.bundledQuery),readTime:Rs(i.readTime)};var i})}saveNamedQuery(e,n){return v_(e).put(function(r){return{name:r.name,readTime:Ps(gt(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function y_(t){return _t(t,"bundles")}function v_(t){return _t(t,"namedQueries")}/**
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
 */class jf{constructor(e,n){this.It=e,this.userId=n}static oe(e,n){const r=n.uid||"";return new jf(e,r)}getOverlay(e,n){return Ua(e).get(m_(this.userId,n)).next(r=>r?tm(this.It,r):null)}getOverlays(e,n){const r=sr();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Nw(n,o);i.push(this.ue(e,a))}),_.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Jt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Ua(e).Y("collectionPathOverlayIndex",a))}),_.waitFor(s)}getOverlaysForCollection(e,n,r){const i=sr(),s=Jt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ua(e).W("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const l=tm(this.It,u);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=sr();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Ua(e).Z({index:"collectionGroupOverlayIndex",range:a},(u,l,c)=>{const d=tm(this.It,l);s.size()<i||d.largestBatchId===o?(s.set(d.getKey(),d),o=d.largestBatchId):c.done()}).next(()=>s)}ue(e,n){return Ua(e).put(function(r,i,s){const[o,a,u]=m_(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:u,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:ll(r.re,s.mutation)}}(this.It,this.userId,n))}}function Ua(t){return _t(t,"documentOverlays")}/**
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
 */class Xi{constructor(){}ce(e,n){this.ae(e,n),n.he()}ae(e,n){if("nullValue"in e)this.le(n,5);else if("booleanValue"in e)this.le(n,10),n.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(n,15),n.fe(Ke(e.integerValue));else if("doubleValue"in e){const r=Ke(e.doubleValue);isNaN(r)?this.le(n,13):(this.le(n,15),rl(r)?n.fe(0):n.fe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.le(n,20),typeof r=="string"?n.de(r):(n.de(`${r.seconds||""}`),n.fe(r.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,n),this.we(n);else if("bytesValue"in e)this.le(n,30),n.me(Ts(e.bytesValue)),this.we(n);else if("referenceValue"in e)this.ge(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.le(n,45),n.fe(r.latitude||0),n.fe(r.longitude||0)}else"mapValue"in e?Bx(e)?this.le(n,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,n),this.we(n)):"arrayValue"in e?(this.pe(e.arrayValue,n),this.we(n)):G()}_e(e,n){this.le(n,25),this.Ie(e,n)}Ie(e,n){n.de(e)}ye(e,n){const r=e.fields||{};this.le(n,55);for(const i of Object.keys(r))this._e(i,n),this.ae(r[i],n)}pe(e,n){const r=e.values||[];this.le(n,50);for(const i of r)this.ae(i,n)}ge(e,n){this.le(n,37),M.fromName(e).path.forEach(r=>{this.le(n,60),this.Ie(r,n)})}le(e,n){e.fe(n)}we(e){e.fe(2)}}Xi.Te=new Xi;function Oz(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function w_(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=Oz(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class Az{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ae(r.value),r=n.next();this.Re()}be(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Pe(r.value),r=n.next();this.ve()}Ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ae(r);else if(r<2048)this.Ae(960|r>>>6),this.Ae(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ae(480|r>>>12),this.Ae(128|63&r>>>6),this.Ae(128|63&r);else{const i=n.codePointAt(0);this.Ae(240|i>>>18),this.Ae(128|63&i>>>12),this.Ae(128|63&i>>>6),this.Ae(128|63&i)}}this.Re()}Se(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Pe(r);else if(r<2048)this.Pe(960|r>>>6),this.Pe(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Pe(480|r>>>12),this.Pe(128|63&r>>>6),this.Pe(128|63&r);else{const i=n.codePointAt(0);this.Pe(240|i>>>18),this.Pe(128|63&i>>>12),this.Pe(128|63&i>>>6),this.Pe(128|63&i)}}this.ve()}De(e){const n=this.Ce(e),r=w_(n);this.xe(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Ne(e){const n=this.Ce(e),r=w_(n);this.xe(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}ke(){this.Me(255),this.Me(255)}Oe(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ae(e){const n=255&e;n===0?(this.Me(0),this.Me(255)):n===255?(this.Me(255),this.Me(0)):this.Me(n)}Pe(e){const n=255&e;n===0?(this.Fe(0),this.Fe(255)):n===255?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Me(0),this.Me(1)}ve(){this.Fe(0),this.Fe(1)}Me(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class Pz{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class Rz{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Oe()}}class Va{constructor(){this.Be=new Az,this.Le=new Pz(this.Be),this.Ue=new Rz(this.Be)}seed(e){this.Be.seed(e)}qe(e){return e===0?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
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
 */class Ji{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ke(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ji(this.indexId,this.documentKey,this.arrayValue,r)}}function zi(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=S_(t.arrayValue,e.arrayValue),n!==0?n:(n=S_(t.directionalValue,e.directionalValue),n!==0?n:M.comparator(t.documentKey,e.documentKey)))}function S_(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class Nz{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const n of e.filters){const r=n;r.dt()?this.je=r:this.Qe.push(r)}}We(e){const n=Gg(e);if(n!==void 0&&!this.ze(n))return!1;const r=Gi(e);let i=0,s=0;for(;i<r.length&&this.ze(r[i]);++i);if(i===r.length)return!0;if(this.je!==void 0){const o=r[i];if(!this.He(this.je,o)||!this.Je(this.Ge[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ge.length||!this.Je(this.Ge[s++],o))return!1}return!0}ze(e){for(const n of this.Qe)if(this.He(n,e))return!0;return!1}He(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}Je(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */class Dz{constructor(){this.Ye=new Lw}addToCollectionParentIndex(e,n){return this.Ye.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(En.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(En.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class Lw{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ce(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ce(me.comparator)).toArray()}}/**
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
 */const Cc=new Uint8Array(0);class Lz{constructor(e,n){this.user=e,this.databaseId=n,this.Xe=new Lw,this.Ze=new Vi(r=>Cs(r),(r,i)=>zl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Xe.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Xe.add(n)});const s={collectionId:r,parent:Jt(i)};return __(e).put(s)}return _.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[Dx(n),""],!1,!0);return __(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(or(o.parent))}return r})}addFieldIndex(e,n){const r=Oc(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=za(e);return s.next(a=>{o.put(g_(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Oc(e),i=za(e),s=ja(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=ja(e);let i=!0;const s=new Map;return _.forEach(this.tn(n),o=>this.en(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ae();const a=[];return _.forEach(s,(u,l)=>{var c;A("IndexedDbIndexManager",`Using index ${c=u,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(v=>`${v.fieldPath}:${v.kind}`).join(",")}`} to execute ${Cs(n)}`);const d=function(v,S){const I=Gg(S);if(I===void 0)return null;for(const k of Kd(v,I.fieldPath))switch(k.op){case"array-contains-any":return k.value.arrayValue.values||[];case"array-contains":return[k.value]}return null}(l,u),h=function(v,S){const I=new Map;for(const k of Gi(S))for(const C of Kd(v,k.fieldPath))switch(C.op){case"==":case"in":I.set(k.fieldPath.canonicalString(),C.value);break;case"not-in":case"!=":return I.set(k.fieldPath.canonicalString(),C.value),Array.from(I.values())}return null}(l,u),p=function(v,S){const I=[];let k=!0;for(const C of Gi(S)){const b=C.kind===0?ZS(v,C.fieldPath,v.startAt):e_(v,C.fieldPath,v.startAt);I.push(b.value),k&&(k=b.inclusive)}return new xi(I,k)}(l,u),m=function(v,S){const I=[];let k=!0;for(const C of Gi(S)){const b=C.kind===0?e_(v,C.fieldPath,v.endAt):ZS(v,C.fieldPath,v.endAt);I.push(b.value),k&&(k=b.inclusive)}return new xi(I,k)}(l,u),y=this.nn(u,l,p),w=this.nn(u,l,m),g=this.sn(u,l,h),f=this.rn(u.indexId,d,y,p.inclusive,w,m.inclusive,g);return _.forEach(f,v=>r.J(v,n.limit).next(S=>{S.forEach(I=>{const k=M.fromSegments(I.documentKey);o.has(k)||(o=o.add(k),a.push(k))})}))}).next(()=>a)}return _.resolve(null)})}tn(e){let n=this.Ze.get(e);return n||(n=[e],this.Ze.set(e,n),n)}rn(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),l=u/(n!=null?n.length:1),c=[];for(let d=0;d<u;++d){const h=n?this.on(n[d/l]):Cc,p=this.un(e,h,r[d%l],i),m=this.cn(e,h,s[d%l],o),y=a.map(w=>this.un(e,h,w,!0));c.push(...this.createRange(p,m,y))}return c}un(e,n,r,i){const s=new Ji(e,M.empty(),n,r);return i?s:s.Ke()}cn(e,n,r,i){const s=new Ji(e,M.empty(),n,r);return i?s.Ke():s}en(e,n){const r=new Nz(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.We(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;return _.forEach(this.tn(n),i=>this.en(e,i).next(s=>{s?r!==0&&s.fields.length<function(o){let a=new Ce(tt.comparator),u=!1;for(const l of o.filters){const c=l;c.field.isKeyField()||(c.op==="array-contains"||c.op==="array-contains-any"?u=!0:a=a.add(c.field))}for(const l of o.orderBy)l.field.isKeyField()||(a=a.add(l.field));return a.size+(u?1:0)}(i)&&(r=1):r=0})).next(()=>r)}an(e,n){const r=new Va;for(const i of Gi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.qe(i.kind);Xi.Te.ce(s,o)}return r.$e()}on(e){const n=new Va;return Xi.Te.ce(e,n.qe(0)),n.$e()}hn(e,n){const r=new Va;return Xi.Te.ce(xs(this.databaseId,n),r.qe(function(i){const s=Gi(i);return s.length===0?0:s[s.length-1].kind}(e))),r.$e()}sn(e,n,r){if(r===null)return[];let i=[];i.push(new Va);let s=0;for(const o of Gi(e)){const a=r[s++];for(const u of i)if(this.ln(n,o.fieldPath)&&sl(a))i=this.fn(i,o,a);else{const l=u.qe(o.kind);Xi.Te.ce(a,l)}}return this.dn(i)}nn(e,n,r){return this.sn(e,n,r.position)}dn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].$e();return n}fn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new Va;u.seed(a.$e()),Xi.Te.ce(o,u.qe(n.kind)),s.push(u)}return s}ln(e,n){return!!e.filters.find(r=>r instanceof Ot&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Oc(e),i=za(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return _.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(l,c){const d=c?new Hd(c.sequenceNumber,new En(Rs(c.readTime),new M(or(c.documentKey)),c.largestBatchId)):Hd.empty(),h=l.fields.map(([p,m])=>new yj(tt.fromServerFormat(p),m));return new Lx(l.indexId,l.collectionGroup,h,d)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:oe(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Oc(e),s=za(e);return this._n(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>_.forEach(a,u=>s.put(g_(u.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return _.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?_.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),_.forEach(a,u=>this.wn(e,i,u).next(l=>{const c=this.mn(s,u);return l.isEqual(c)?_.resolve():this.gn(e,s,u,l,c)}))))})}yn(e,n,r,i){return ja(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.hn(r,n.key),documentKey:n.key.path.toArray()})}pn(e,n,r,i){return ja(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.hn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=ja(e);let s=new Ce(zi);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.hn(r,n)])},(o,a)=>{s=s.add(new Ji(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}mn(e,n){let r=new Ce(zi);const i=this.an(n,e);if(i==null)return r;const s=Gg(n);if(s!=null){const o=e.data.field(s.fieldPath);if(sl(o))for(const a of o.arrayValue.values||[])r=r.add(new Ji(n.indexId,e.key,this.on(a),i))}else r=r.add(new Ji(n.indexId,e.key,Cc,i));return r}gn(e,n,r,i,s){A("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,u,l,c,d){const h=a.getIterator(),p=u.getIterator();let m=Qs(h),y=Qs(p);for(;m||y;){let w=!1,g=!1;if(m&&y){const f=l(m,y);f<0?g=!0:f>0&&(w=!0)}else m!=null?g=!0:w=!0;w?(c(y),y=Qs(p)):g?(d(m),m=Qs(h)):(m=Qs(h),y=Qs(p))}}(i,s,zi,a=>{o.push(this.yn(e,n,r,a))},a=>{o.push(this.pn(e,n,r,a))}),_.waitFor(o)}_n(e){let n=1;return za(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>zi(o,a)).filter((o,a,u)=>!a||zi(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=zi(o,e),u=zi(o,n);if(a===0)i[0]=e.Ke();else if(a>0&&u<0)i.push(o),i.push(o.Ke());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2)s.push(IDBKeyRange.bound([i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Cc,[]],[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Cc,[]]));return s}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(I_)}getMinOffset(e,n){return _.mapArray(this.tn(n),r=>this.en(e,r).next(i=>i||G())).next(I_)}}function __(t){return _t(t,"collectionParents")}function ja(t){return _t(t,"indexEntries")}function Oc(t){return _t(t,"indexConfiguration")}function za(t){return _t(t,"indexState")}function I_(t){te(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Iw(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new En(e.readTime,e.documentKey,n)}/**
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
 */const E_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class sn{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new sn(e,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function CC(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Z({range:o},(c,d,h)=>(a++,h.delete()));s.push(u.next(()=>{te(a===1)}));const l=[];for(const c of n.mutations){const d=IC(e,c.key.path,n.batchId);s.push(i.delete(d)),l.push(c.key)}return _.waitFor(s).next(()=>l)}function Xd(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw G();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */sn.DEFAULT_COLLECTION_PERCENTILE=10,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sn.DEFAULT=new sn(41943040,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sn.DISABLED=new sn(-1,0,0);class zf{constructor(e,n,r,i){this.userId=e,this.It=n,this.indexManager=r,this.referenceDelegate=i,this.In={}}static oe(e,n,r,i){te(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new zf(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return qr(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Js(e),o=qr(e);return o.add({}).next(a=>{te(typeof a=="number");const u=new Pw(a,n,r,i),l=function(h,p,m){const y=m.baseMutations.map(g=>ll(h.re,g)),w=m.mutations.map(g=>ll(h.re,g));return{userId:p,batchId:m.batchId,localWriteTimeMs:m.localWriteTime.toMillis(),baseMutations:y,mutations:w}}(this.It,this.userId,u),c=[];let d=new Ce((h,p)=>oe(h.canonicalString(),p.canonicalString()));for(const h of i){const p=IC(this.userId,h.key.path,a);d=d.add(h.key.path.popLast()),c.push(o.put(l)),c.push(s.put(p,cz))}return d.forEach(h=>{c.push(this.indexManager.addToCollectionParentIndex(e,h))}),e.addOnCommittedListener(()=>{this.In[a]=u.keys()}),_.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return qr(e).get(n).next(r=>r?(te(r.userId===this.userId),Yi(this.It,r)):null)}Tn(e,n){return this.In[n]?_.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.In[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return qr(e).Z({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(te(a.batchId>=r),s=Yi(this.It,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return qr(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return qr(e).W("userMutationsIndex",n).next(r=>r.map(i=>Yi(this.It,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=td(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Js(e).Z({range:i},(o,a,u)=>{const[l,c,d]=o,h=or(c);if(l===this.userId&&n.path.isEqual(h))return qr(e).get(d).next(p=>{if(!p)throw G();te(p.userId===this.userId),s.push(Yi(this.It,p))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ce(oe);const i=[];return n.forEach(s=>{const o=td(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Js(e).Z({range:a},(l,c,d)=>{const[h,p,m]=l,y=or(p);h===this.userId&&s.path.isEqual(y)?r=r.add(m):d.done()});i.push(u)}),_.waitFor(i).next(()=>this.En(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=td(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ce(oe);return Js(e).Z({range:o},(u,l,c)=>{const[d,h,p]=u,m=or(h);d===this.userId&&r.isPrefixOf(m)?m.length===i&&(a=a.add(p)):c.done()}).next(()=>this.En(e,a))}En(e,n){const r=[],i=[];return n.forEach(s=>{i.push(qr(e).get(s).next(o=>{if(o===null)throw G();te(o.userId===this.userId),r.push(Yi(this.It,o))}))}),_.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return CC(e.ie,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),_.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return _.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return Js(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=or(s[1]);i.push(u)}else a.done()}).next(()=>{te(i.length===0)})})}containsKey(e,n){return OC(e,this.userId,n)}Rn(e){return AC(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function OC(t,e,n){const r=td(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Js(t).Z({range:s,X:!0},(a,u,l)=>{const[c,d,h]=a;c===e&&d===i&&(o=!0),l.done()}).next(()=>o)}function qr(t){return _t(t,"mutations")}function Js(t){return _t(t,"documentMutations")}function AC(t){return _t(t,"mutationQueues")}/**
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
 */class Ns{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ns(0)}static vn(){return new Ns(-1)}}/**
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
 */class $z{constructor(e,n){this.referenceDelegate=e,this.It=n}allocateTargetId(e){return this.Vn(e).next(n=>{const r=new Ns(n.highestTargetId);return n.highestTargetId=r.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>ee.fromTimestamp(new Ue(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Vn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Sn(e,i)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(r=>(r.targetCount+=1,this.Cn(n,r),this.Sn(e,r))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Xs(e).delete(n.targetId)).next(()=>this.Vn(e)).next(r=>(te(r.targetCount>0),r.targetCount-=1,this.Sn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Xs(e).Z((o,a)=>{const u=tu(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>_.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Xs(e).Z((r,i)=>{const s=tu(i);n(s)})}Vn(e){return b_(e).get("targetGlobalKey").next(n=>(te(n!==null),n))}Sn(e,n){return b_(e).put("targetGlobalKey",n)}Dn(e,n){return Xs(e).put(xC(this.It,n))}Cn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Cs(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Xs(e).Z({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const l=tu(a);zl(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Xr(e);return n.forEach(o=>{const a=Jt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),_.waitFor(i)}removeMatchingKeys(e,n,r){const i=Xr(e);return _.forEach(n,s=>{const o=Jt(s.path);return _.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Xr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Xr(e);let s=ae();return i.Z({range:r,X:!0},(o,a,u)=>{const l=or(o[1]),c=new M(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Jt(n.path),i=IDBKeyRange.bound([r],[Dx(r)],!1,!0);let s=0;return Xr(e).Z({index:"documentTargetsIndex",X:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}se(e,n){return Xs(e).get(n).next(r=>r?tu(r):null)}}function Xs(t){return _t(t,"targets")}function b_(t){return _t(t,"targetGlobal")}function Xr(t){return _t(t,"targetDocuments")}/**
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
 */function T_([t,e],[n,r]){const i=oe(t,n);return i===0?oe(e,r):i}class Mz{constructor(e){this.xn=e,this.buffer=new Ce(T_),this.Nn=0}kn(){return++this.Nn}Mn(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();T_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Fz{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.On=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return this.On!==null}Fn(e){A("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ui(n)?A("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Fi(n)}await this.Fn(3e5)})}}class Uz{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return _.resolve(un.at);const r=new Mz(n);return this.$n.forEachTarget(e,i=>r.Mn(i.sequenceNumber)).next(()=>this.$n.Ln(e,i=>r.Mn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.$n.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(A("LruGarbageCollector","Garbage collection skipped; disabled"),_.resolve(E_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),E_):this.Un(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(A("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(l=Date.now(),Hg()<=ye.DEBUG&&A("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${d} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),_.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}/**
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
 */class Vz{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new Uz(r,i)}(this,n)}Bn(e){const n=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}qn(e){let n=0;return this.Ln(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(r,i)=>n(i))}addReference(e,n,r){return Ac(e,r)}removeReference(e,n,r){return Ac(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Ac(e,n)}Gn(e,n){return function(r,i){let s=!1;return AC(r).tt(o=>OC(r,o,i).next(a=>(a&&(s=!0),_.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Kn(e,(o,a)=>{if(a<=n){const u=this.Gn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,ee.min()),Xr(e).delete([0,Jt(o.path)])))});i.push(u)}}).next(()=>_.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Ac(e,n)}Kn(e,n){const r=Xr(e);let i,s=un.at;return r.Z({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==un.at&&n(new M(or(i)),s),s=l,i=u):s=un.at}).next(()=>{s!==un.at&&n(new M(or(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ac(t,e){return Xr(t).put(function(n,r){return{targetId:0,path:Jt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class PC{constructor(){this.changes=new Vi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class jz{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Bi(e).put(r)}removeEntry(e,n,r){return Bi(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Yd(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Qn(e,r)))}getEntry(e,n){let r=Oe.newInvalidDocument(n);return Bi(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ba(n))},(i,s)=>{r=this.jn(n,s)}).next(()=>r)}Wn(e,n){let r={size:0,document:Oe.newInvalidDocument(n)};return Bi(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ba(n))},(i,s)=>{r={document:this.jn(n,s),size:Xd(s)}}).next(()=>r)}getEntries(e,n){let r=ln();return this.zn(e,n,(i,s)=>{const o=this.jn(i,s);r=r.insert(i,o)}).next(()=>r)}Hn(e,n){let r=ln(),i=new Qe(M.comparator);return this.zn(e,n,(s,o)=>{const a=this.jn(s,o);r=r.insert(s,a),i=i.insert(s,Xd(o))}).next(()=>({documents:r,Jn:i}))}zn(e,n,r){if(n.isEmpty())return _.resolve();let i=new Ce(C_);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Ba(i.first()),Ba(i.last())),o=i.getIterator();let a=o.getNext();return Bi(e).Z({index:"documentKeyIndex",range:s},(u,l,c)=>{const d=M.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&C_(a,d)<0;)r(a,null),a=o.getNext();a&&a.isEqual(d)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?c.j(Ba(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,n,r){const i=[n.popLast().toArray(),n.lastSegment(),Yd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],s=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Bi(e).W(IDBKeyRange.bound(i,s,!0)).next(o=>{let a=ln();for(const u of o){const l=this.jn(M.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);a=a.insert(l.key,l)}return a})}getAllFromCollectionGroup(e,n,r,i){let s=ln();const o=x_(n,r),a=x_(n,En.max());return Bi(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,l,c)=>{const d=this.jn(M.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(d.key,d),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new zz(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return k_(e).get("remoteDocumentGlobalKey").next(n=>(te(!!n),n))}Qn(e,n){return k_(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const r=xz(this.It,n);if(!(r.isNoDocument()&&r.version.isEqual(ee.min())))return r}return Oe.newInvalidDocument(e)}}function RC(t){return new jz(t)}class zz extends PC{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new Vi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Ce((s,o)=>oe(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Xn.get(s);if(n.push(this.Yn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=p_(this.Yn.It,o);i=i.add(s.path.popLast()),r+=Xd(u)-a.size,n.push(this.Yn.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=p_(this.Yn.It,o.convertToNoDocument(ee.min()));n.push(this.Yn.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Yn.updateMetadata(e,r)),_.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(r=>(this.Xn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:r,Jn:i})=>(i.forEach((s,o)=>{this.Xn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function k_(t){return _t(t,"remoteDocumentGlobal")}function Bi(t){return _t(t,"remoteDocumentsV14")}function Ba(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function x_(t,e){const n=e.documentKey.path.toArray();return[t,Yd(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function C_(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=oe(n[s],r[s]),i)return i;return i=oe(n.length,r.length),i||(i=oe(n[n.length-2],r[r.length-2]),i||oe(n[n.length-1],r[r.length-1]))}/**
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
 */class Bz{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class NC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&wu(r.mutation,i,Sn.empty(),Ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const i=sr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=eu();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ln();const o=Su(),a=Su();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof Ur)?s=s.insert(l.key,l):c!==void 0&&(o.set(l.key,c.mutation.getFieldMask()),wu(c.mutation,l,c.mutation.getFieldMask(),Ue.now()))}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var d;return a.set(l,new Bz(c,(d=o.get(l))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Su();let i=new Qe((o,a)=>o-a),s=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||Sn.empty();c=a.applyToLocalView(l,c),r.set(u,c);const d=(i.get(a.batchId)||ae()).add(u);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,d=lC();c.forEach(h=>{if(!s.has(h)){const p=rC(n.get(h),r.get(h));p!==null&&d.set(h,p),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,d))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return M.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):_.resolve(sr());let a=-1,u=s;return o.next(l=>_.forEach(l,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?_.resolve():this.getBaseDocument(e,c,d).next(h=>{u=u.insert(c,h)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,ae())).next(c=>({batchId:a,changes:uC(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(r=>{let i=eu();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=eu();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const u=function(l,c){return new Fr(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,u)=>{const l=u.getKey();i.get(l)===null&&(i=i.insert(l,Oe.newInvalidDocument(l)))});let o=eu();return i.forEach((a,u)=>{const l=s.get(a);l!==void 0&&wu(l.mutation,u,Sn.empty(),Ue.now()),Cw(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):_.resolve(Oe.newInvalidDocument(n))}}/**
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
 */class qz{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return _.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:gt(r.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:Dw(r.bundledQuery),readTime:gt(r.readTime)}}(n)),_.resolve()}}/**
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
 */class Wz{constructor(){this.overlays=new Qe(M.comparator),this.es=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=sr();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const i=sr(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Qe((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=sr(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=sr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return _.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Nw(n,r));let s=this.es.get(n);s===void 0&&(s=ae(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class $w{constructor(){this.ns=new Ce(dt.ss),this.rs=new Ce(dt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new dt(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new dt(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new M(new me([])),r=new dt(n,e),i=new dt(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new M(new me([])),r=new dt(n,e),i=new dt(n,e+1);let s=ae();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new dt(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return M.comparator(e.key,n.key)||oe(e._s,n._s)}static os(e,n){return oe(e._s,n._s)||M.comparator(e.key,n.key)}}/**
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
 */class Hz{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ce(dt.ss)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Pw(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new dt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new dt(n,0),i=new dt(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ce(oe);return n.forEach(i=>{const s=new dt(i,0),o=new dt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),_.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new dt(new M(s),0);let a=new Ce(oe);return this.gs.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u._s)),!0)},o),_.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){te(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return _.forEach(n.mutations,i=>{const s=new dt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new dt(n,0),i=this.gs.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Gz{constructor(e){this.Es=e,this.docs=new Qe(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(n))}getEntries(e,n){let r=ln();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Oe.newInvalidDocument(i))}),_.resolve(r)}getAllFromCollection(e,n,r){let i=ln();const s=new M(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Iw(Mx(u),r)<=0||(i=i.insert(u.key,u.mutableCopy()))}return _.resolve(i)}getAllFromCollectionGroup(e,n,r,i){G()}As(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Kz(this)}getSize(e){return _.resolve(this.size)}}class Kz extends PC{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class Qz{constructor(e){this.persistence=e,this.Rs=new Vi(n=>Cs(n),zl),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.bs=0,this.Ps=new $w,this.targetCount=0,this.vs=Ns.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),_.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ns(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.Dn(n),_.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.Ps.containsKey(n))}}/**
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
 */class DC{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new un(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Qz(this),this.indexManager=new Dz,this.remoteDocumentCache=function(r){return new Gz(r)}(r=>this.referenceDelegate.xs(r)),this.It=new kC(n),this.Ns=new qz(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Wz,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new Hz(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){A("MemoryPersistence","Starting transaction:",e);const i=new Yz(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Ms(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return _.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class Yz extends Ux{constructor(e){super(),this.currentSequenceNumber=e}}class Bf{constructor(e){this.persistence=e,this.Fs=new $w,this.$s=null}static Bs(e){return new Bf(e)}get Ls(){if(this.$s)return this.$s;throw G()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),_.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Ls,r=>{const i=M.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return _.or([()=>_.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Xz{constructor(e){this.It=e}$(e,n,r,i){const s=new Mf("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",f_,{unique:!0}),a.createObjectStore("documentMutations")}(e),O_(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=_.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),O_(e)),o=o.next(()=>function(a){const u=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ee.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store("mutations").W().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",f_,{unique:!0});const c=u.store("mutations"),d=l.map(h=>c.put(h));return _.waitFor(d)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.qs(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(s)))),r<7&&i>=7&&(o=o.next(()=>this.Gs(s))),r<8&&i>=8&&(o=o.next(()=>this.Qs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.js(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const u=a.createObjectStore("documentOverlays",{keyPath:Iz});u.createIndex("collectionPathOverlayIndex",Ez,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",bz,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const u=a.createObjectStore("remoteDocumentsV14",{keyPath:dz});u.createIndex("documentKeyIndex",hz),u.createIndex("collectionGroupIndex",fz)}(e)).next(()=>this.Ws(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.zs(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:vz}).createIndex("sequenceNumberIndex",wz,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:Sz}).createIndex("documentKeyIndex",_z,{unique:!1})}(e))),o}Ks(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=Xd(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}qs(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>_.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>_.forEach(a,u=>{te(u.userId===s.userId);const l=Yi(this.It,u);return CC(e,s.userId,l).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const u=new me(o),l=function(c){return[0,Jt(c)]}(u);s.push(n.get(l).next(c=>c?_.resolve():(d=>n.put({targetId:0,path:Jt(d),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>_.waitFor(s))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:yz});const r=n.store("collectionParents"),i=new Lw,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Jt(u)})}};return n.store("remoteDocuments").Z({X:!0},(o,a)=>{const u=new me(o);return s(u.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([o,a,u],l)=>{const c=or(a);return s(c.popLast())}))}js(e){const n=e.store("targets");return n.Z((r,i)=>{const s=tu(i),o=xC(this.It,s);return n.put(o)})}Ws(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),u=(l=o,l.document?new M(me.fromString(l.document.name).popFirst(5)):l.noDocument?M.fromSegments(l.noDocument.path):l.unknownDocument?M.fromSegments(l.unknownDocument.path):G()).path.toArray();var l;/**
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
*/const c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>_.waitFor(i))}zs(e,n){const r=n.store("mutations"),i=RC(this.It),s=new DC(Bf.Bs,this.It.re);return r.W().next(o=>{const a=new Map;return o.forEach(u=>{var l;let c=(l=a.get(u.userId))!==null&&l!==void 0?l:ae();Yi(this.It,u).keys().forEach(d=>c=c.add(d)),a.set(u.userId,c)}),_.forEach(a,(u,l)=>{const c=new ft(l),d=jf.oe(this.It,c),h=s.getIndexManager(c),p=zf.oe(c,this.It,h,s.referenceDelegate);return new NC(i,p,d,h).recalculateAndSaveOverlaysForDocumentKeys(new Zg(n,un.at),u).next()})})}}function O_(t){t.createObjectStore("targetDocuments",{keyPath:mz}).createIndex("documentTargetsIndex",gz,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",pz,{unique:!0}),t.createObjectStore("targetGlobal")}const nm="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Mw{constructor(e,n,r,i,s,o,a,u,l,c,d=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Hs=s,this.window=o,this.document=a,this.Js=l,this.Ys=c,this.Xs=d,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=h=>Promise.resolve(),!Mw.C())throw new O(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Vz(this,i),this.ii=n+"main",this.It=new kC(u),this.ri=new Bn(this.ii,this.Xs,new Xz(this.It)),this.Cs=new $z(this.referenceDelegate,this.It),this.remoteDocumentCache=RC(this.It),this.Ns=new Cz,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,c===!1&&et("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new O(T.FAILED_PRECONDITION,nm);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new un(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Pc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Ui(e))return A("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return A("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return qa(e).get("owner").next(n=>_.resolve(this.mi(n)))}gi(e){return Pc(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=_t(n,"clientMetadata");return r.W().next(i=>{const s=this.Ii(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return _.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?_.resolve(!0):qa(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new O(T.FAILED_PRECONDITION,nm);return!1}}return!(!this.networkEnabled||!this.inForeground)||Pc(e).W().next(r=>this.Ii(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&A("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Zg(e,un.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(r=>this.pi(r.updateTimeMs,n)&&!this.Ei(r.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>Pc(e).W().next(n=>this.Ii(n,18e5).map(r=>r.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return zf.oe(e,this.It,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Lz(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return jf.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,n,r){A("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.Xs)===15?kz:o===14?TC:o===13?bC:o===12?Tz:o===11?EC:void G();var o;let a;return this.ri.runTransaction(e,i,s,u=>(a=new Zg(u,this.Ss?this.Ss.next():un.at),n==="readwrite-primary"?this.fi(a).next(l=>!!l||this.di(a)).next(l=>{if(!l)throw et(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new O(T.FAILED_PRECONDITION,Fx);return r(a)}).next(l=>this.wi(a).next(()=>l)):this.Vi(a).next(()=>r(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Vi(e){return qa(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new O(T.FAILED_PRECONDITION,nm)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return qa(e).put("owner",n)}static C(){return Bn.C()}_i(e){const n=qa(e);return n.get("owner").next(r=>this.mi(r)?(A("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):_.resolve())}pi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(et(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),jL()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const r=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return A("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return et("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){et("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function qa(t){return _t(t,"owner")}function Pc(t){return _t(t,"clientMetadata")}function Fw(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Uw{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=ae(),i=ae();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Uw(e,n.fromCache,r,i)}}/**
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
 */class LC{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Mi(e,n,i,r)).next(s=>s||this.Oi(e,n))}ki(e,n){if(r_(n))return _.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Qd(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ae(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.Fi(n,a);return this.$i(n,l,o,u.readTime)?this.ki(e,Qd(n,null,"F")):this.Bi(e,l,n,u)}))})))}Mi(e,n,r,i){return r_(n)||i.isEqual(ee.min())?this.Oi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Oi(e,n):(Hg()<=ye.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yg(n)),this.Bi(e,o,n,$x(i,-1)))})}Fi(e,n){let r=new Ce(Qx(e));return n.forEach((i,s)=>{Cw(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return Hg()<=ye.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",Yg(n)),this.Ni.getDocumentsMatchingQuery(e,n,En.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Jz{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Qe(oe),this.qi=new Vi(s=>Cs(s),zl),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NC(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function $C(t,e,n,r){return new Jz(t,e,n,r)}async function MC(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ae();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function Zz(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,d=c.keys();let h=_.resolve();return d.forEach(p=>{h=h.next(()=>l.getEntry(a,p)).next(m=>{const y=u.docVersions.get(p);te(y!==null),m.version.compareTo(y)<0&&(c.applyToRemoteDocument(m,u),m.isValidDocument()&&(m.setReadTime(u.commitVersion),l.addEntry(m)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ae();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function FC(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function eB(t,e){const n=U(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,d)));let p=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(d)?p=p.withResumeToken(lt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(d,p),function(m,y,w){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(h,p,c)&&a.push(n.Cs.updateTargetData(s,p))});let u=ln(),l=ae();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(UC(s,o,e.documentUpdates).next(c=>{u=c.Wi,l=c.zi})),!r.isEqual(ee.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(d=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.Ui=i,s))}function UC(t,e,n){let r=ae(),i=ae();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ln();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):A("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function tB(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Qo(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,_.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new gi(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Yo(t,e,n){const r=U(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ui(o))throw o;A("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function Jd(t,e,n){const r=U(t);let i=ee.min(),s=ae();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=U(a),d=c.qi.get(l);return d!==void 0?_.resolve(c.Ui.get(d)):c.Cs.getTargetData(u,l)}(r,o,pn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:ae())).next(a=>(zC(r,Kx(e),a),{documents:a,Hi:s})))}function VC(t,e){const n=U(t),r=U(n.Cs),i=n.Ui.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.se(s,e).next(o=>o?o.target:null))}function jC(t,e){const n=U(t),r=n.Ki.get(e)||ee.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Gi.getAllFromCollectionGroup(i,e,$x(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(zC(n,e,i),i))}function zC(t,e,n){let r=ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}async function nB(t,e,n,r){const i=U(t);let s=ae(),o=ln();for(const l of n){const c=e.Ji(l.metadata.name);l.document&&(s=s.add(c));const d=e.Yi(l);d.setReadTime(e.Xi(l.metadata.readTime)),o=o.insert(c,d)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),u=await Qo(i,function(l){return pn(ya(me.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>UC(l,a,o).next(c=>(a.apply(l),c)).next(c=>i.Cs.removeMatchingKeysForTargetId(l,u.targetId).next(()=>i.Cs.addMatchingKeys(l,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,c.Wi,c.zi)).next(()=>c.Wi)))}async function rB(t,e,n=ae()){const r=await Qo(t,pn(Dw(e.bundledQuery))),i=U(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=gt(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ns.saveNamedQuery(s,e);const a=r.withResumeToken(lt.EMPTY_BYTE_STRING,o);return i.Ui=i.Ui.insert(a.targetId,a),i.Cs.updateTargetData(s,a).next(()=>i.Cs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Cs.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ns.saveNamedQuery(s,e))})}function A_(t,e){return`firestore_clients_${t}_${e}`}function P_(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function rm(t,e){return`firestore_targets_${t}_${e}`}class Zd{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Zi(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new O(i.error.code,i.error.message))),o?new Zd(e,n,i.state,s):(et("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class _u{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Zi(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new O(r.error.code,r.error.message))),s?new _u(e,r.state,i):(et("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class eh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Zi(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Vf();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=zx(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new eh(e,s):(et("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Vw{constructor(e,n){this.clientId=e,this.onlineState=n}static Zi(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Vw(n.clientId,n.onlineState):(et("SharedClientState",`Failed to parse online state: ${e}`),null)}}class ey{constructor(){this.activeTargetIds=Vf()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class im{constructor(e,n,r,i,s){this.window=e,this.Hs=n,this.persistenceKey=r,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Qe(oe),this.started=!1,this.cr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ar=A_(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new ey),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const r of e){if(r===this.sr)continue;const i=this.getItem(A_(this.persistenceKey,r));if(i){const s=eh.Zi(r,i);s&&(this.ur=this.ur.insert(s.clientId,s))}}this.gr();const n=this.storage.getItem(this.wr);if(n){const r=this.yr(n);r&&this.pr(r)}for(const r of this.cr)this.rr(r);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let n=!1;return this.ur.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,n,r){this.Tr(e,n,r),this.Er(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(rm(this.persistenceKey,e));if(r){const i=_u.Zi(e,r);i&&(n=i.state)}}return this.Ar.er(e),this.gr(),n}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(rm(this.persistenceKey,e))}updateQueryState(e,n,r){this.Rr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Er(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return A("SharedClientState","READ",e,n),n}setItem(e,n){A("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){A("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const n=e;if(n.storageArea===this.storage){if(A("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ar)return void et("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.lr.test(n.key)){if(n.newValue==null){const r=this.vr(n.key);return this.Vr(r,null)}{const r=this.Sr(n.key,n.newValue);if(r)return this.Vr(r.clientId,r)}}else if(this.dr.test(n.key)){if(n.newValue!==null){const r=this.Dr(n.key,n.newValue);if(r)return this.Cr(r)}}else if(this._r.test(n.key)){if(n.newValue!==null){const r=this.Nr(n.key,n.newValue);if(r)return this.kr(r)}}else if(n.key===this.wr){if(n.newValue!==null){const r=this.yr(n.newValue);if(r)return this.pr(r)}}else if(n.key===this.hr){const r=function(i){let s=un.at;if(i!=null)try{const o=JSON.parse(i);te(typeof o=="number"),s=o}catch(o){et("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==un.at&&this.sequenceNumberHandler(r)}else if(n.key===this.mr){const r=this.Mr(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Or(i)))}}}else this.cr.push(n)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,n,r){const i=new Zd(this.currentUser,e,n,r),s=P_(this.persistenceKey,this.currentUser,e);this.setItem(s,i.tr())}Er(e){const n=P_(this.persistenceKey,this.currentUser,e);this.removeItem(n)}br(e){const n={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(n))}Rr(e,n,r){const i=rm(this.persistenceKey,e),s=new _u(e,n,r);this.setItem(i,s.tr())}Pr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.mr,n)}vr(e){const n=this.lr.exec(e);return n?n[1]:null}Sr(e,n){const r=this.vr(e);return eh.Zi(r,n)}Dr(e,n){const r=this.dr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Zd.Zi(new ft(s),i,n)}Nr(e,n){const r=this._r.exec(e),i=Number(r[1]);return _u.Zi(i,n)}yr(e){return Vw.Zi(e)}Mr(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);A("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,n){const r=n?this.ur.insert(e,n):this.ur.remove(e),i=this.Ir(this.ur),s=this.Ir(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.Br(o,a).then(()=>{this.ur=r})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let n=Vf();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class BC{constructor(){this.Lr=new ey,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new ey,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class iB{qr(e){}shutdown(){}}/**
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
 */class R_{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const sB={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class oB{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class aB extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,i,s){const o=this.ao(e,n);A("RestConnection","Sending: ",o,r);const a={};return this.ho(a,i,s),this.lo(e,o,a,r).then(u=>(A("RestConnection","Received: ",u),u),u=>{throw qo("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ga,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=sB[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){return new Promise((s,o)=>{const a=new sj;a.listenOnce(nj.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case em.NO_ERROR:const l=a.getResponseJson();A("Connection","XHR received:",JSON.stringify(l)),s(l);break;case em.TIMEOUT:A("Connection",'RPC "'+e+'" timed out'),o(new O(T.DEADLINE_EXCEEDED,"Request time out"));break;case em.HTTP_ERROR:const c=a.getStatus();if(A("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const d=a.getResponseJson().error;if(d&&d.status&&d.message){const h=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(m)>=0?m:T.UNKNOWN}(d.status);o(new O(h,d.message))}else o(new O(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new O(T.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{A("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}_o(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=ej(),o=tj(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ij({})),this.ho(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");A("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let c=!1,d=!1;const h=new oB({Hr:m=>{d?A("Connection","Not sending because WebChannel is closed:",m):(c||(A("Connection","Opening WebChannel transport."),l.open(),c=!0),A("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),p=(m,y,w)=>{m.listen(y,g=>{try{w(g)}catch(f){setTimeout(()=>{throw f},0)}})};return p(l,kc.EventType.OPEN,()=>{d||A("Connection","WebChannel transport opened.")}),p(l,kc.EventType.CLOSE,()=>{d||(d=!0,A("Connection","WebChannel transport closed"),h.io())}),p(l,kc.EventType.ERROR,m=>{d||(d=!0,qo("Connection","WebChannel transport errored:",m),h.io(new O(T.UNAVAILABLE,"The operation could not be completed")))}),p(l,kc.EventType.MESSAGE,m=>{var y;if(!d){const w=m.data[0];te(!!w);const g=w,f=g.error||((y=g[0])===null||y===void 0?void 0:y.error);if(f){A("Connection","WebChannel received error:",f);const v=f.status;let S=function(k){const C=nt[k];if(C!==void 0)return oC(C)}(v),I=f.message;S===void 0&&(S=T.INTERNAL,I="Unknown error status: "+v+" with message "+f.message),d=!0,h.io(new O(S,I)),l.close()}else A("Connection","WebChannel received:",w),h.ro(w)}}),p(o,rj.STAT_EVENT,m=>{m.stat===zS.PROXY?A("Connection","Detected buffering proxy"):m.stat===zS.NOPROXY&&A("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.so()},0),h}}/**
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
 */function qC(){return typeof window<"u"?window:null}function nd(){return typeof document<"u"?document:null}/**
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
 */function Gl(t){return new Jj(t,!0)}class jw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.wo=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&A("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class WC{constructor(e,n,r,i,s,o,a,u){this.Hs=e,this.Po=r,this.vo=i,this.Vo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new jw(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(et(n.toString()),et("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new O(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return A("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uB extends WC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=tz(this.It,e),r=function(i){if(!("targetChange"in i))return ee.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ee.min():s.readTime?gt(s.readTime):ee.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=ul(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Gd(a)?{documents:yC(i,a)}:{query:vC(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=hC(i,s.resumeToken):s.snapshotVersion.compareTo(ee.min())>0&&(o.readTime=ol(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=rz(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=ul(this.It),n.removeTarget=e,this.Bo(n)}}class lB extends WC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=nz(e.writeResults,e.commitTime),r=gt(e.commitTime);return this.listener.Zo(r,n)}return te(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ul(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ll(this.It,r))};this.Bo(n)}}/**
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
 */class cB extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new O(T.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.Vo.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(T.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.Vo.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(T.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class dB{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(et(n),this.ou=!1):A("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class hB{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{ji(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=U(a);u._u.add(4),await Sa(u),u.gu.set("Unknown"),u._u.delete(4),await Kl(u)}(this))})}),this.gu=new dB(r,i)}}async function Kl(t){if(ji(t))for(const e of t.wu)await e(!0)}async function Sa(t){for(const e of t.wu)await e(!1)}function qf(t,e){const n=U(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),qw(n)?Bw(n):Ia(n).ko()&&zw(n,e))}function cl(t,e){const n=U(t),r=Ia(n);n.du.delete(e),r.ko()&&HC(n,e),n.du.size===0&&(r.ko()?r.Fo():ji(n)&&n.gu.set("Unknown"))}function zw(t,e){t.yu.Ot(e.targetId),Ia(t).zo(e)}function HC(t,e){t.yu.Ot(e),Ia(t).Ho(e)}function Bw(t){t.yu=new Qj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Ia(t).start(),t.gu.uu()}function qw(t){return ji(t)&&!Ia(t).No()&&t.du.size>0}function ji(t){return U(t)._u.size===0}function GC(t){t.yu=void 0}async function fB(t){t.du.forEach((e,n)=>{zw(t,e)})}async function pB(t,e){GC(t),qw(t)?(t.gu.hu(e),Bw(t)):t.gu.set("Unknown")}async function mB(t,e,n){if(t.gu.set("Online"),e instanceof dC&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){A("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await th(t,r)}else if(e instanceof ed?t.yu.Gt(e):e instanceof cC?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(ee.min()))try{const r=await FC(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(u);l&&i.du.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.du.get(a);if(!u)return;i.du.set(a,u.withResumeToken(lt.EMPTY_BYTE_STRING,u.snapshotVersion)),HC(i,a);const l=new gi(u.target,a,1,u.sequenceNumber);zw(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){A("RemoteStore","Failed to raise snapshot:",r),await th(t,r)}}async function th(t,e,n){if(!Ui(e))throw e;t._u.add(1),await Sa(t),t.gu.set("Offline"),n||(n=()=>FC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Kl(t)})}function KC(t,e){return e().catch(n=>th(t,n,e))}async function _a(t){const e=U(t),n=Ci(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;gB(e);)try{const i=await tB(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,yB(e,i)}catch(i){await th(e,i)}QC(e)&&YC(e)}function gB(t){return ji(t)&&t.fu.length<10}function yB(t,e){t.fu.push(e);const n=Ci(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function QC(t){return ji(t)&&!Ci(t).No()&&t.fu.length>0}function YC(t){Ci(t).start()}async function vB(t){Ci(t).eu()}async function wB(t){const e=Ci(t);for(const n of t.fu)e.Xo(n.mutations)}async function SB(t,e,n){const r=t.fu.shift(),i=Rw.from(r,e,n);await KC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await _a(t)}async function _B(t,e){e&&Ci(t).Yo&&await async function(n,r){if(i=r.code,sC(i)&&i!==T.ABORTED){const s=n.fu.shift();Ci(n).Oo(),await KC(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await _a(n)}var i}(t,e),QC(t)&&YC(t)}async function N_(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const r=ji(n);n._u.add(3),await Sa(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Kl(n)}async function ty(t,e){const n=U(t);e?(n._u.delete(2),await Kl(n)):e||(n._u.add(2),await Sa(n),n.gu.set("Unknown"))}function Ia(t){return t.pu||(t.pu=function(e,n,r){const i=U(e);return i.su(),new uB(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:fB.bind(null,t),Zr:pB.bind(null,t),Wo:mB.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),qw(t)?Bw(t):t.gu.set("Unknown")):(await t.pu.stop(),GC(t))})),t.pu}function Ci(t){return t.Iu||(t.Iu=function(e,n,r){const i=U(e);return i.su(),new lB(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:vB.bind(null,t),Zr:_B.bind(null,t),tu:wB.bind(null,t),Zo:SB.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await _a(t)):(await t.Iu.stop(),t.fu.length>0&&(A("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Ww{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ww(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ea(t,e){if(et("AsyncQueue",`${e}: ${t}`),Ui(t))return new O(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class xo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=eu(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new xo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class D_{constructor(){this.Tu=new Qe(M.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):G():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xo{constructor(e,n,r,i,s,o,a,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Xo(e,n,xo.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class IB{constructor(){this.Au=void 0,this.listeners=[]}}class EB{constructor(){this.queries=new Vi(e=>Gx(e),Bl),this.onlineState="Unknown",this.Ru=new Set}}async function Hw(t,e){const n=U(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new IB),i)try{s.Au=await n.onListen(r)}catch(o){const a=Ea(o,`Initialization of query '${Yg(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Kw(n)}async function Gw(t,e){const n=U(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function bB(t,e){const n=U(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Kw(n)}function TB(t,e,n){const r=U(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Kw(t){t.Ru.forEach(e=>{e.next()})}class Qw{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Xo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
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
 */class kB{constructor(e,n){this.payload=e,this.byteLength=n}ku(){return"metadata"in this.payload}}/**
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
 */class L_{constructor(e){this.It=e}Ji(e){return lr(this.It,e)}Yi(e){return e.metadata.exists?gC(this.It,e.document,!1):Oe.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return gt(e)}}class xB{constructor(e,n,r){this.Mu=e,this.localStore=n,this.It=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=XC(e)}Ou(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++n;const r=me.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Fu(e){const n=new Map,r=new L_(this.It);for(const i of e)if(i.metadata.queries){const s=r.Ji(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ae()).add(s);n.set(o,a)}}return n}async complete(){const e=await nB(this.localStore,new L_(this.It),this.documents,this.Mu.id),n=this.Fu(this.documents);for(const r of this.queries)await rB(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,$u:this.collectionGroups,Bu:e}}}function XC(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class JC{constructor(e){this.key=e}}class ZC{constructor(e){this.key=e}}class eO{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=ae(),this.mutatedKeys=ae(),this.Ku=Qx(e),this.Gu=new xo(this.Ku)}get Qu(){return this.Lu}ju(e,n){const r=n?n.Wu:new D_,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),p=Cw(this.query,d)?d:null,m=!!h&&this.mutatedKeys.has(h.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;h&&p?h.data.isEqual(p.data)?m!==y&&(r.track({type:3,doc:p}),w=!0):this.zu(h,p)||(r.track({type:2,doc:p}),w=!0,(u&&this.Ku(p,u)>0||l&&this.Ku(p,l)<0)&&(a=!0)):!h&&p?(r.track({type:0,doc:p}),w=!0):h&&!p&&(r.track({type:1,doc:h}),w=!0,(u||l)&&(a=!0)),w&&(p?(o=o.add(p),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,Wu:r,$i:a,mutatedKeys:s}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.Wu.Eu();s.sort((l,c)=>function(d,h){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return p(d)-p(h)}(l.type,c.type)||this.Ku(l.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,u=a!==this.Uu;return this.Uu=a,s.length!==0||u?{snapshot:new Xo(this.query,e.Gu,i,s,e.mutatedKeys,a===0,u,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new D_,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=ae(),this.Gu.forEach(r=>{this.Xu(r.key)&&(this.qu=this.qu.add(r.key))});const n=[];return e.forEach(r=>{this.qu.has(r)||n.push(new ZC(r))}),this.qu.forEach(r=>{e.has(r)||n.push(new JC(r))}),n}Zu(e){this.Lu=e.Hi,this.qu=ae();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return Xo.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class CB{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class OB{constructor(e){this.key=e,this.ec=!1}}class AB{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Vi(a=>Gx(a),Bl),this.ic=new Map,this.rc=new Set,this.oc=new Qe(M.comparator),this.uc=new Map,this.cc=new $w,this.ac={},this.hc=new Map,this.lc=Ns.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function PB(t,e){const n=e0(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await Qo(n.localStore,pn(e));n.isPrimaryClient&&qf(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Yw(n,e,r,a==="current")}return i}async function Yw(t,e,n,r){t.dc=(c,d,h)=>async function(p,m,y,w){let g=m.view.ju(y);g.$i&&(g=await Jd(p.localStore,m.query,!1).then(({documents:S})=>m.view.ju(S,g)));const f=w&&w.targetChanges.get(m.targetId),v=m.view.applyChanges(g,p.isPrimaryClient,f);return ny(p,m.targetId,v.Yu),v.snapshot}(t,c,d,h);const i=await Jd(t.localStore,e,!0),s=new eO(e,i.Hi),o=s.ju(i.documents),a=Hl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),u=s.applyChanges(o,t.isPrimaryClient,a);ny(t,n,u.Yu);const l=new CB(e,n,s);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function RB(t,e){const n=U(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!Bl(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Yo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),cl(n.remoteStore,r.targetId),Jo(n,r.targetId)}).catch(Fi)):(Jo(n,r.targetId),await Yo(n.localStore,r.targetId,!0))}async function NB(t,e,n){const r=t0(t);try{const i=await function(s,o){const a=U(s),u=Ue.now(),l=o.reduce((h,p)=>h.add(p.key),ae());let c,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let p=ln(),m=ae();return a.Gi.getEntries(h,l).next(y=>{p=y,p.forEach((w,g)=>{g.isValidDocument()||(m=m.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,p)).next(y=>{c=y;const w=[];for(const g of o){const f=Bj(g,c.get(g.key).overlayedDocument);f!=null&&w.push(new Ur(g.key,f,qx(f.value.mapValue),Fe.exists(!0)))}return a.mutationQueue.addMutationBatch(h,u,w,o)}).next(y=>{d=y;const w=y.applyToLocalDocumentSet(c,m);return a.documentOverlayCache.saveOverlays(h,y.batchId,w)})}).then(()=>({batchId:d.batchId,changes:uC(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.ac[s.currentUser.toKey()];u||(u=new Qe(oe)),u=u.insert(o,a),s.ac[s.currentUser.toKey()]=u}(r,i.batchId,n),await Vr(r,i.changes),await _a(r.remoteStore)}catch(i){const s=Ea(i,"Failed to persist write");n.reject(s)}}async function tO(t,e){const n=U(t);try{const r=await eB(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?te(o.ec):i.removedDocuments.size>0&&(te(o.ec),o.ec=!1))}),await Vr(n,r,e)}catch(r){await Fi(r)}}function $_(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=U(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const d of c.listeners)d.bu(o)&&(u=!0)}),u&&Kw(a)}(r.eventManager,e),i.length&&r.nc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DB(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new Qe(M.comparator);o=o.insert(s,Oe.newNoDocument(s,ee.min()));const a=ae().add(s),u=new Wl(ee.min(),new Map,new Ce(oe),o,a);await tO(r,u),r.oc=r.oc.remove(s),r.uc.delete(e),Zw(r)}else await Yo(r.localStore,e,!1).then(()=>Jo(r,e,n)).catch(Fi)}async function LB(t,e){const n=U(t),r=e.batch.batchId;try{const i=await Zz(n.localStore,e);Jw(n,r,null),Xw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vr(n,i)}catch(i){await Fi(i)}}async function $B(t,e,n){const r=U(t);try{const i=await function(s,o){const a=U(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(te(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(r.localStore,e);Jw(r,e,n),Xw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Vr(r,i)}catch(i){await Fi(i)}}async function MB(t,e){const n=U(t);ji(n.remoteStore)||A("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=U(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.hc.get(r)||[];i.push(e),n.hc.set(r,i)}catch(r){const i=Ea(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Xw(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Jw(t,e,n){const r=U(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function Jo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc._c(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(r=>{t.cc.containsKey(r)||nO(t,r)})}function nO(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(cl(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Zw(t))}function ny(t,e,n){for(const r of n)r instanceof JC?(t.cc.addReference(r.key,e),FB(t,r)):r instanceof ZC?(A("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||nO(t,r.key)):G()}function FB(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(A("SyncEngine","New document in limbo: "+n),t.rc.add(r),Zw(t))}function Zw(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new M(me.fromString(e)),r=t.lc.next();t.uc.set(r,new OB(n)),t.oc=t.oc.insert(n,r),qf(t.remoteStore,new gi(pn(ya(n.path)),r,2,un.at))}}async function Vr(t,e,n){const r=U(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,u)=>{o.push(r.dc(u,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l.fromCache?"not-current":"current"),i.push(l);const c=Uw.Ci(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.nc.Wo(i),await async function(a,u){const l=U(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>_.forEach(u,d=>_.forEach(d.Si,h=>l.persistence.referenceDelegate.addReference(c,d.targetId,h)).next(()=>_.forEach(d.Di,h=>l.persistence.referenceDelegate.removeReference(c,d.targetId,h)))))}catch(c){if(!Ui(c))throw c;A("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const d=c.targetId;if(!c.fromCache){const h=l.Ui.get(d),p=h.snapshotVersion,m=h.withLastLimboFreeSnapshotVersion(p);l.Ui=l.Ui.insert(d,m)}}}(r.localStore,s))}async function UB(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){A("SyncEngine","User change. New user:",e.toKey());const r=await MC(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new O(T.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vr(n,r.ji)}}function VB(t,e){const n=U(t),r=n.uc.get(e);if(r&&r.ec)return ae().add(r.key);{let i=ae();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}async function jB(t,e){const n=U(t),r=await Jd(n.localStore,e.query,!0),i=e.view.Zu(r);return n.isPrimaryClient&&ny(n,e.targetId,i.Yu),i}async function zB(t,e){const n=U(t);return jC(n.localStore,e).then(r=>Vr(n,r))}async function BB(t,e,n,r){const i=U(t),s=await function(o,a){const u=U(o),l=U(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.Tn(c,a).next(d=>d?u.localDocuments.getDocuments(c,d):_.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await _a(i.remoteStore):n==="acknowledged"||n==="rejected"?(Jw(i,e,r||null),Xw(i,e),function(o,a){U(U(o).mutationQueue).An(a)}(i.localStore,e)):G(),await Vr(i,s)):A("SyncEngine","Cannot apply mutation batch with id: "+e)}async function qB(t,e){const n=U(t);if(e0(n),t0(n),e===!0&&n.fc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await M_(n,r.toArray());n.fc=!0,await ty(n.remoteStore,!0);for(const s of i)qf(n.remoteStore,s)}else if(e===!1&&n.fc!==!1){const r=[];let i=Promise.resolve();n.ic.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Jo(n,o),Yo(n.localStore,o,!0))),cl(n.remoteStore,o)}),await i,await M_(n,r),function(s){const o=U(s);o.uc.forEach((a,u)=>{cl(o.remoteStore,u)}),o.cc.fs(),o.uc=new Map,o.oc=new Qe(M.comparator)}(n),n.fc=!1,await ty(n.remoteStore,!1)}}async function M_(t,e,n){const r=U(t),i=[],s=[];for(const o of e){let a;const u=r.ic.get(o);if(u&&u.length!==0){a=await Qo(r.localStore,pn(u[0]));for(const l of u){const c=r.sc.get(l),d=await jB(r,c);d.snapshot&&s.push(d.snapshot)}}else{const l=await VC(r.localStore,o);a=await Qo(r.localStore,l),await Yw(r,rO(l),o,!1)}i.push(a)}return r.nc.Wo(s),i}function rO(t){return Hx(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function WB(t){const e=U(t);return U(U(e.localStore).persistence).vi()}async function HB(t,e,n,r){const i=U(t);if(i.fc)return void A("SyncEngine","Ignoring unexpected query state notification.");const s=i.ic.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await jC(i.localStore,Kx(s[0])),a=Wl.createSynthesizedRemoteEventForCurrentChange(e,n==="current");await Vr(i,o,a);break}case"rejected":await Yo(i.localStore,e,!0),Jo(i,e,r);break;default:G()}}async function GB(t,e,n){const r=e0(t);if(r.fc){for(const i of e){if(r.ic.has(i)){A("SyncEngine","Adding an already active target "+i);continue}const s=await VC(r.localStore,i),o=await Qo(r.localStore,s);await Yw(r,rO(s),o.targetId,!1),qf(r.remoteStore,o)}for(const i of n)r.ic.has(i)&&await Yo(r.localStore,i,!1).then(()=>{cl(r.remoteStore,i),Jo(r,i)}).catch(Fi)}}function e0(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tO.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VB.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DB.bind(null,e),e.nc.Wo=bB.bind(null,e.eventManager),e.nc._c=TB.bind(null,e.eventManager),e}function t0(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LB.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$B.bind(null,e),e}function KB(t,e,n){const r=U(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(d,h){const p=U(d),m=gt(h.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",y=>p.Ns.getBundleMetadata(y,h.id)).then(y=>!!y&&y.createTime.compareTo(m)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(d){return{taskState:"Success",documentsLoaded:d.totalDocuments,bytesLoaded:d.totalBytes,totalDocuments:d.totalDocuments,totalBytes:d.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(XC(a));const u=new xB(a,i.localStore,s.It);let l=await s.wc();for(;l;){const d=await u.Ou(l);d&&o._updateProgress(d),l=await s.wc()}const c=await u.complete();return await Vr(i,c.Bu,void 0),await function(d,h){const p=U(d);return p.persistence.runTransaction("Save bundle","readwrite",m=>p.Ns.saveBundleMetadata(m,h))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.$u)}catch(a){return qo("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class iO{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Gl(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return $C(this.persistence,new LC,e.initialUser,this.It)}gc(e){return new DC(Bf.Bs,this.It)}mc(e){return new BC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sO extends iO{constructor(e,n,r){super(),this.Ec=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ec.initialize(this,e),await t0(this.Ec.syncEngine),await _a(this.Ec.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}yc(e){return $C(this.persistence,new LC,e.initialUser,this.It)}Ic(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new Fz(r,e.asyncQueue,n)}Tc(e,n){const r=new _j(n,this.persistence);return new Sj(e.asyncQueue,r)}gc(e){const n=Fw(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?sn.withCacheSize(this.cacheSizeBytes):sn.DEFAULT;return new Mw(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,qC(),nd(),this.It,this.sharedClientState,!!this.forceOwnership)}mc(e){return new BC}}class QB extends sO{constructor(e,n){super(e,n,!1),this.Ec=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ec.syncEngine;this.sharedClientState instanceof im&&(this.sharedClientState.syncEngine={Fr:BB.bind(null,n),$r:HB.bind(null,n),Br:GB.bind(null,n),vi:WB.bind(null,n),Or:zB.bind(null,n)},await this.sharedClientState.start()),await this.persistence.li(async r=>{await qB(this.Ec.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}mc(e){const n=qC();if(!im.C(n))throw new O(T.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Fw(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new im(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class n0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=UB.bind(null,this.syncEngine),await ty(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new EB}createDatastore(e){const n=Gl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new aB(i));var i;return function(s,o,a,u){return new cB(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>$_(this.syncEngine,a,0),o=R_.C()?new R_:new iB,new hB(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new AB(r,i,s,o,a,u);return l&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);A("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Sa(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function F_(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 */class Wf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):et("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class YB{constructor(e,n){this.bc=e,this.It=n,this.metadata=new mt,this.buffer=new Uint8Array,this.Pc=new TextDecoder("utf-8"),this.vc().then(r=>{r&&r.ku()?this.metadata.resolve(r.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.payload)}`))},r=>this.metadata.reject(r))}close(){return this.bc.cancel()}async getMetadata(){return this.metadata.promise}async wc(){return await this.getMetadata(),this.vc()}async vc(){const e=await this.Vc();if(e===null)return null;const n=this.Pc.decode(e),r=Number(n);isNaN(r)&&this.Sc(`length string (${n}) is not valid number`);const i=await this.Dc(r);return new kB(JSON.parse(i),e.length+r)}Cc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Vc(){for(;this.Cc()<0&&!await this.xc(););if(this.buffer.length===0)return null;const e=this.Cc();e<0&&this.Sc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Dc(e){for(;this.buffer.length<e;)await this.xc()&&this.Sc("Reached the end of bundle when more is expected.");const n=this.Pc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Sc(e){throw this.bc.cancel(),new Error(`Invalid bundle format: ${e}`)}async xc(){const e=await this.bc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class XB{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new O(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=U(r),o=ul(s.It)+"/documents",a={documents:i.map(d=>al(s.It,d))},u=await s.fo("BatchGetDocuments",o,a,i.length),l=new Map;u.forEach(d=>{const h=ez(s.It,d);l.set(h.key.toString(),h)});const c=[];return i.forEach(d=>{const h=l.get(d.toString());te(!!h),c.push(h)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new wa(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=M.fromPath(r);this.mutations.push(new Ow(i,this.precondition(i)))}),await async function(n,r){const i=U(n),s=ul(i.It)+"/documents",o={writes:r.map(a=>ll(i.It,a))};await i.co("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw G();n=ee.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new O(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ee.min())?Fe.exists(!1):Fe.updateTime(n):Fe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ee.min()))throw new O(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Fe.updateTime(n)}return Fe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class JB{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Nc=r.maxAttempts,this.xo=new jw(this.asyncQueue,"transaction_retry")}run(){this.Nc-=1,this.kc()}kc(){this.xo.Ao(async()=>{const e=new XB(this.datastore),n=this.Mc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Oc(i)}))}).catch(r=>{this.Oc(r)})})}Mc(e){try{const n=this.updateFunction(e);return!jl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Oc(e){this.Nc>0&&this.Fc(e)?(this.Nc-=1,this.asyncQueue.enqueueAndForget(()=>(this.kc(),Promise.resolve()))):this.deferred.reject(e)}Fc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!sC(n)}return!1}}/**
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
 */class ZB{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=Nx.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{A("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(A("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ea(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function oO(t,e){t.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await MC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function aO(t,e){t.asyncQueue.verifyOperationInProgress();const n=await r0(t);A("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>N_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>N_(e.remoteStore,s)),t.onlineComponents=e}async function r0(t){return t.offlineComponents||(A("FirestoreClient","Using default OfflineComponentProvider"),await oO(t,new iO)),t.offlineComponents}async function Hf(t){return t.onlineComponents||(A("FirestoreClient","Using default OnlineComponentProvider"),await aO(t,new n0)),t.onlineComponents}function uO(t){return r0(t).then(e=>e.persistence)}function i0(t){return r0(t).then(e=>e.localStore)}function lO(t){return Hf(t).then(e=>e.remoteStore)}function s0(t){return Hf(t).then(e=>e.syncEngine)}async function Zo(t){const e=await Hf(t),n=e.eventManager;return n.onListen=PB.bind(null,e.syncEngine),n.onUnlisten=RB.bind(null,e.syncEngine),n}function e4(t){return t.asyncQueue.enqueue(async()=>{const e=await uO(t),n=await lO(t);return e.setNetworkEnabled(!0),function(r){const i=U(r);return i._u.delete(0),Kl(i)}(n)})}function t4(t){return t.asyncQueue.enqueue(async()=>{const e=await uO(t),n=await lO(t);return e.setNetworkEnabled(!1),async function(r){const i=U(r);i._u.add(0),await Sa(i),i.gu.set("Offline")}(n)})}function n4(t,e){const n=new mt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=U(a);return l.persistence.runTransaction("read document","readonly",c=>l.localDocuments.getDocument(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new O(T.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Ea(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await i0(t),e,n)),n.promise}function cO(t,e,n={}){const r=new mt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Wf({next:d=>{s.enqueueAndForget(()=>Gw(i,c));const h=d.docs.has(o);!h&&d.fromCache?u.reject(new O(T.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&d.fromCache&&a&&a.source==="server"?u.reject(new O(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),c=new Qw(ya(o.path),l,{includeMetadataChanges:!0,Nu:!0});return Hw(i,c)}(await Zo(t),t.asyncQueue,e,n,r)),r.promise}function r4(t,e){const n=new mt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Jd(r,i,!0),a=new eO(i,o.Hi),u=a.ju(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=Ea(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await i0(t),e,n)),n.promise}function dO(t,e,n={}){const r=new mt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Wf({next:d=>{s.enqueueAndForget(()=>Gw(i,c)),d.fromCache&&a.source==="server"?u.reject(new O(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),c=new Qw(o,l,{includeMetadataChanges:!0,Nu:!0});return Hw(i,c)}(await Zo(t),t.asyncQueue,e,n,r)),r.promise}function i4(t,e){const n=new Wf(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){U(r).Ru.add(i),i.next()}(await Zo(t),n)),()=>{n.Rc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){U(r).Ru.delete(i)}(await Zo(t),n))}}function s4(t,e,n){const r=new mt;return t.asyncQueue.enqueueAndForget(async()=>{const i=await function(s){return Hf(s).then(o=>o.datastore)}(t);new JB(t.asyncQueue,i,n,e,r).run()}),r.promise}function o4(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(u,l){return new YB(u,l)}(function(u,l){if(u instanceof Uint8Array)return F_(u,l);if(u instanceof ArrayBuffer)return F_(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Gl(e));t.asyncQueue.enqueueAndForget(async()=>{KB(await s0(t),i,r)})}function a4(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=U(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ns.getNamedQuery(s,r))}(await i0(t),e))}const U_=new Map;/**
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
 */function o0(t,e,n){if(!n)throw new O(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hO(t,e,n,r){if(e===!0&&r===!0)throw new O(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function V_(t){if(!M.isDocumentKey(t))throw new O(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function j_(t){if(M.isDocumentKey(t))throw new O(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function we(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gf(t);throw new O(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function fO(t,e){if(e<=0)throw new O(T.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class z_{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new O(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,hO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ql{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new z_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new z_(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new uj;switch(n.type){case"gapi":const r=n.client;return new hj(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=U_.get(e);n&&(A("ComponentProvider","Removing Datastore"),U_.delete(e),n.terminate())}(this),Promise.resolve()}}function u4(t,e,n,r={}){var i;const s=(t=we(t,Ql))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&qo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ft.MOCK_USER;else{o=FL(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new O(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ft(u)}t._authCredentials=new lj(new Rx(o,a))}}/**
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
 */class Ne{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}}class qt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qt(this.firestore,e,this._query)}}class cr extends qt{constructor(e,n,r){super(e,n,ya(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new M(e))}withConverter(e){return new cr(this.firestore,e,this._path)}}function pO(t,e,...n){if(t=Y(t),o0("collection","path",e),t instanceof Ql){const r=me.fromString(e,...n);return j_(r),new cr(t,null,r)}{if(!(t instanceof Ne||t instanceof cr))throw new O(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return j_(r),new cr(t.firestore,null,r)}}function l4(t,e){if(t=we(t,Ql),o0("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new O(T.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new qt(t,null,function(n){return new Fr(me.emptyPath(),n)}(e))}function nh(t,e,...n){if(t=Y(t),arguments.length===1&&(e=Nx.R()),o0("doc","path",e),t instanceof Ql){const r=me.fromString(e,...n);return V_(r),new Ne(t,null,new M(r))}{if(!(t instanceof Ne||t instanceof cr))throw new O(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return V_(r),new Ne(t.firestore,t instanceof cr?t.converter:null,new M(r))}}function mO(t,e){return t=Y(t),e=Y(e),(t instanceof Ne||t instanceof cr)&&(e instanceof Ne||e instanceof cr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function gO(t,e){return t=Y(t),e=Y(e),t instanceof qt&&e instanceof qt&&t.firestore===e.firestore&&Bl(t._query,e._query)&&t.converter===e.converter}/**
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
 */class c4{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new jw(this,"async_queue_retry"),this.jc=()=>{const n=nd();n&&A("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=nd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=nd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new mt;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Ui(e))throw e;A("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(r=>{this.qc=r,this.Kc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw et("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Kc=!1,r))));return this.$c=n,n}enqueueAfterDelay(e,n,r){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const i=Ww.createAndSchedule(this,e,n,r,s=>this.Jc(s));return this.Uc.push(i),i}Wc(){this.qc&&G()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function ry(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class d4{constructor(){this._progressObserver={},this._taskCompletionResolver=new mt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const h4=-1;class Ye extends Ql{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new c4,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yO(this),this._firestoreClient.terminate()}}function It(t){return t._firestoreClient||yO(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yO(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new bj(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ZB(t._authCredentials,t._appCheckCredentials,t._queue,r)}function f4(t,e){wO(t=we(t,Ye));const n=It(t),r=t._freezeSettings(),i=new n0;return vO(n,i,new sO(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function p4(t){wO(t=we(t,Ye));const e=It(t),n=t._freezeSettings(),r=new n0;return vO(e,r,new QB(r,n.cacheSizeBytes))}function vO(t,e,n){const r=new mt;return t.asyncQueue.enqueue(async()=>{try{await oO(t,n),await aO(t,e),r.resolve()}catch(i){const s=i;if(!function(o){return o.name==="FirebaseError"?o.code===T.FAILED_PRECONDITION||o.code===T.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(s))throw s;qo("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function m4(t){if(t._initialized&&!t._terminated)throw new O(T.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new mt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Bn.C())return Promise.resolve();const r=n+"main";await Bn.delete(r)}(Fw(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function g4(t){return function(e){const n=new mt;return e.asyncQueue.enqueueAndForget(async()=>MB(await s0(e),n)),n.promise}(It(t=we(t,Ye)))}function y4(t){return e4(It(t=we(t,Ye)))}function v4(t){return t4(It(t=we(t,Ye)))}function w4(t,e){const n=It(t=we(t,Ye)),r=new d4;return o4(n,t._databaseId,e,r),r}function S4(t,e){return a4(It(t=we(t,Ye)),e).then(n=>n?new qt(t,null,n.query):null)}function wO(t){if(t._initialized||t._terminated)throw new O(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Oi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class mr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mr(lt.fromBase64String(e))}catch(n){throw new O(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new mr(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Bs{constructor(e){this._methodName=e}}/**
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
 */class Kf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */const _4=/^__.*__$/;class I4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new va(e,this.data,n,this.fieldTransforms)}}class SO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _O(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Qf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ea(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new Qf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.oa(e),i}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.ea(),i}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return rh(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(_O(this.na)&&_4.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class E4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Gl(e)}fa(e,n,r,i=!1){return new Qf({na:e,methodName:n,la:r,path:tt.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function qs(t){const e=t._freezeSettings(),n=Gl(t._databaseId);return new E4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Yf(t,e,n,r,i,s={}){const o=t.fa(s.merge||s.mergeFields?2:0,e,n,i);c0("Data must be an object, but it was:",o,r);const a=bO(r,o);let u,l;if(s.merge)u=new Sn(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=iy(e,d,n);if(!o.contains(h))throw new O(T.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);kO(c,h)||c.push(h)}u=new Sn(c),l=o.fieldTransforms.filter(d=>u.covers(d.field))}else u=null,l=o.fieldTransforms;return new I4(new Ct(a),u,l)}class Yl extends Bs{_toFieldTransform(e){if(e.na!==2)throw e.na===1?e.aa(`${this._methodName}() can only appear at the top level of your update data`):e.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yl}}function IO(t,e,n){return new Qf({na:3,la:e.settings.la,methodName:t._methodName,ra:n},e.databaseId,e.It,e.ignoreUndefinedProperties)}class a0 extends Bs{_toFieldTransform(e){return new ql(e.path,new Go)}isEqual(e){return e instanceof a0}}class b4 extends Bs{constructor(e,n){super(e),this.da=n}_toFieldTransform(e){const n=IO(this,e,!0),r=this.da.map(s=>Ws(s,n)),i=new Os(r);return new ql(e.path,i)}isEqual(e){return this===e}}class T4 extends Bs{constructor(e,n){super(e),this.da=n}_toFieldTransform(e){const n=IO(this,e,!0),r=this.da.map(s=>Ws(s,n)),i=new As(r);return new ql(e.path,i)}isEqual(e){return this===e}}class k4 extends Bs{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=new Ko(e.It,Jx(e.It,this._a));return new ql(e.path,n)}isEqual(e){return this===e}}function u0(t,e,n,r){const i=t.fa(1,e,n);c0("Data must be an object, but it was:",i,r);const s=[],o=Ct.empty();zs(r,(u,l)=>{const c=d0(e,u,n);l=Y(l);const d=i.ua(c);if(l instanceof Yl)s.push(c);else{const h=Ws(l,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new Sn(s);return new SO(o,a,i.fieldTransforms)}function l0(t,e,n,r,i,s){const o=t.fa(1,e,n),a=[iy(e,r,n)],u=[i];if(s.length%2!=0)throw new O(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(iy(e,s[h])),u.push(s[h+1]);const l=[],c=Ct.empty();for(let h=a.length-1;h>=0;--h)if(!kO(l,a[h])){const p=a[h];let m=u[h];m=Y(m);const y=o.ua(p);if(m instanceof Yl)l.push(p);else{const w=Ws(m,y);w!=null&&(l.push(p),c.set(p,w))}}const d=new Sn(l);return new SO(c,d,o.fieldTransforms)}function EO(t,e,n,r=!1){return Ws(n,t.fa(r?4:3,e))}function Ws(t,e){if(TO(t=Y(t)))return c0("Unsupported field value:",e,t),bO(t,e);if(t instanceof Bs)return function(n,r){if(!_O(r.na))throw r.aa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.aa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Ws(o,r.ca(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Y(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Jx(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ue.fromDate(n);return{timestampValue:ol(r.It,i)}}if(n instanceof Ue){const i=new Ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ol(r.It,i)}}if(n instanceof Kf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof mr)return{bytesValue:hC(r.It,n._byteString)};if(n instanceof Ne){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.aa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Aw(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.aa(`Unsupported field value: ${Gf(n)}`)}(t,e)}function bO(t,e){const n={};return Vx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zs(t,(r,i)=>{const s=Ws(i,e.ia(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function TO(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof Kf||t instanceof mr||t instanceof Ne||t instanceof Bs)}function c0(t,e,n){if(!TO(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Gf(n);throw r==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+r)}}function iy(t,e,n){if((e=Y(e))instanceof Oi)return e._internalPath;if(typeof e=="string")return d0(t,e);throw rh("Field path arguments must be of type string or ",t,!1,void 0,n)}const x4=new RegExp("[~\\*/\\[\\]]");function d0(t,e,n){if(e.search(x4)>=0)throw rh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Oi(...e.split("."))._internalPath}catch{throw rh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new O(T.INVALID_ARGUMENT,a+t+u)}function kO(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class dl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new C4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class C4 extends dl{data(){return super.data()}}function Xf(t,e){return typeof e=="string"?d0(t,e):e instanceof Oi?e._internalPath:e._delegate._internalPath}/**
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
 */class os{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rr extends dl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Iu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Xf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Iu extends Rr{data(e={}){return super.data(e)}}class Ai{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new os(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Iu(this._firestore,this._userDataWriter,r.key,r,new os(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new O(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Iu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new os(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Iu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new os(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:O4(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function O4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}function xO(t,e){return t instanceof Rr&&e instanceof Rr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Ai&&e instanceof Ai&&t._firestore===e._firestore&&gO(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function CO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new O(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xl{}function Wr(t,...e){for(const n of e)t=n._apply(t);return t}class A4 extends Xl{constructor(e,n,r){super(),this.wa=e,this.ma=n,this.ga=r,this.type="where"}_apply(e){const n=qs(e.firestore),r=function(i,s,o,a,u,l,c){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new O(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){q_(c,l);const p=[];for(const m of c)p.push(B_(a,i,m));d={arrayValue:{values:p}}}else d=B_(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||q_(c,l),d=EO(o,s,c,l==="in"||l==="not-in");const h=Ot.create(u,l,d);return function(p,m){if(m.dt()){const w=kw(p);if(w!==null&&!w.isEqual(m.field))throw new O(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${w.toString()}' and '${m.field.toString()}'`);const g=Tw(p);g!==null&&NO(p,m.field,g)}const y=function(w,g){for(const f of w.filters)if(g.indexOf(f.op)>=0)return f.op;return null}(p,function(w){switch(w){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(y!==null)throw y===m.op?new O(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new O(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${y.toString()}' filters.`)}(i,h),h}(e._query,"where",n,e.firestore._databaseId,this.wa,this.ma,this.ga);return new qt(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new Fr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function P4(t,e,n){const r=e,i=Xf("where",t);return new A4(i,r,n)}class R4 extends Xl{constructor(e,n){super(),this.wa=e,this.ya=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new O(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new O(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ko(i,s);return function(a,u){if(Tw(a)===null){const l=kw(a);l!==null&&NO(a,l,u.field)}}(r,o),o}(e._query,this.wa,this.ya);return new qt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Fr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function N4(t,e="asc"){const n=e,r=Xf("orderBy",t);return new R4(r,n)}class OO extends Xl{constructor(e,n,r){super(),this.type=e,this.pa=n,this.Ia=r}_apply(e){return new qt(e.firestore,e.converter,Qd(e._query,this.pa,this.Ia))}}function D4(t){return fO("limit",t),new OO("limit",t,"F")}function L4(t){return fO("limitToLast",t),new OO("limitToLast",t,"L")}class AO extends Xl{constructor(e,n,r){super(),this.type=e,this.Ta=n,this.Ea=r}_apply(e){const n=RO(e,this.type,this.Ta,this.Ea);return new qt(e.firestore,e.converter,function(r,i){return new Fr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function $4(...t){return new AO("startAt",t,!0)}function M4(...t){return new AO("startAfter",t,!1)}class PO extends Xl{constructor(e,n,r){super(),this.type=e,this.Ta=n,this.Ea=r}_apply(e){const n=RO(e,this.type,this.Ta,this.Ea);return new qt(e.firestore,e.converter,function(r,i){return new Fr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function F4(...t){return new PO("endBefore",t,!1)}function U4(...t){return new PO("endAt",t,!0)}function RO(t,e,n,r){if(n[0]=Y(n[0]),n[0]instanceof dl)return function(i,s,o,a,u){if(!a)throw new O(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of Ho(i))if(c.field.isKeyField())l.push(xs(s,a.key));else{const d=a.data.field(c.field);if(bw(d))throw new O(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const h=c.field.canonicalString();throw new O(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${h}' (used as the orderBy) does not exist.`)}l.push(d)}return new xi(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=qs(t.firestore);return function(s,o,a,u,l,c){const d=s.explicitOrderBy;if(l.length>d.length)throw new O(T.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const h=[];for(let p=0;p<l.length;p++){const m=l[p];if(d[p].field.isKeyField()){if(typeof m!="string")throw new O(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof m}`);if(!xw(s)&&m.indexOf("/")!==-1)throw new O(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${m}' contains a slash.`);const y=s.path.child(me.fromString(m));if(!M.isDocumentKey(y))throw new O(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const w=new M(y);h.push(xs(o,w))}else{const y=EO(a,u,m);h.push(y)}}return new xi(h,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function B_(t,e,n){if(typeof(n=Y(n))=="string"){if(n==="")throw new O(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xw(e)&&n.indexOf("/")!==-1)throw new O(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!M.isDocumentKey(r))throw new O(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xs(t,new M(r))}if(n instanceof Ne)return xs(t,n._key);throw new O(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gf(n)}.`)}function q_(t,e){if(!Array.isArray(t)||t.length===0)throw new O(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new O(T.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function NO(t,e,n){if(!n.isEqual(e))throw new O(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */const V4={maxAttempts:5};/**
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
 */class h0{convertValue(e,n="none"){switch(ks(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const r={};return zs(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Kf(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=jx(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(nl(e));default:return null}}convertTimestamp(e){const n=bi(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);te(_C(r));const i=new Ti(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||et(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Jf(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class j4 extends h0{constructor(e){super(),this.firestore=e}convertBytes(e){return new mr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}/**
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
 */class z4{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=qs(e)}set(e,n,r){this._verifyNotCommitted();const i=Jr(e,this._firestore),s=Jf(i.converter,n,r),o=Yf(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Fe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Jr(e,this._firestore);let o;return o=typeof(n=Y(n))=="string"||n instanceof Oi?l0(this._dataReader,"WriteBatch.update",s._key,n,r,i):u0(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Fe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Jr(e,this._firestore);return this._mutations=this._mutations.concat(new wa(n._key,Fe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new O(T.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Jr(t,e){if((t=Y(t)).firestore!==e)throw new O(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function B4(t){t=we(t,Ne);const e=we(t.firestore,Ye);return cO(It(e),t._key).then(n=>f0(e,t,n))}class Hs extends h0{constructor(e){super(),this.firestore=e}convertBytes(e){return new mr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function q4(t){t=we(t,Ne);const e=we(t.firestore,Ye),n=It(e),r=new Hs(e);return n4(n,t._key).then(i=>new Rr(e,r,t._key,i,new os(i!==null&&i.hasLocalMutations,!0),t.converter))}function W4(t){t=we(t,Ne);const e=we(t.firestore,Ye);return cO(It(e),t._key,{source:"server"}).then(n=>f0(e,t,n))}function H4(t){t=we(t,qt);const e=we(t.firestore,Ye),n=It(e),r=new Hs(e);return CO(t._query),dO(n,t._query).then(i=>new Ai(e,r,t,i))}function G4(t){t=we(t,qt);const e=we(t.firestore,Ye),n=It(e),r=new Hs(e);return r4(n,t._query).then(i=>new Ai(e,r,t,i))}function K4(t){t=we(t,qt);const e=we(t.firestore,Ye),n=It(e),r=new Hs(e);return dO(n,t._query,{source:"server"}).then(i=>new Ai(e,r,t,i))}function W_(t,e,n){t=we(t,Ne);const r=we(t.firestore,Ye),i=Jf(t.converter,e,n);return Jl(r,[Yf(qs(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Fe.none())])}function H_(t,e,n,...r){t=we(t,Ne);const i=we(t.firestore,Ye),s=qs(i);let o;return o=typeof(e=Y(e))=="string"||e instanceof Oi?l0(s,"updateDoc",t._key,e,n,r):u0(s,"updateDoc",t._key,e),Jl(i,[o.toMutation(t._key,Fe.exists(!0))])}function Q4(t){return Jl(we(t.firestore,Ye),[new wa(t._key,Fe.none())])}function Y4(t,e){const n=we(t.firestore,Ye),r=nh(t),i=Jf(t.converter,e);return Jl(n,[Yf(qs(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Fe.exists(!1))]).then(()=>r)}function DO(t,...e){var n,r,i;t=Y(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ry(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(ry(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let u,l,c;if(t instanceof Ne)l=we(t.firestore,Ye),c=ya(t._key.path),u={next:d=>{e[o]&&e[o](f0(l,t,d))},error:e[o+1],complete:e[o+2]};else{const d=we(t,qt);l=we(d.firestore,Ye),c=d._query;const h=new Hs(l);u={next:p=>{e[o]&&e[o](new Ai(l,h,d,p))},error:e[o+1],complete:e[o+2]},CO(t._query)}return function(d,h,p,m){const y=new Wf(m),w=new Qw(h,y,p);return d.asyncQueue.enqueueAndForget(async()=>Hw(await Zo(d),w)),()=>{y.Rc(),d.asyncQueue.enqueueAndForget(async()=>Gw(await Zo(d),w))}}(It(l),c,a,u)}function X4(t,e){return i4(It(t=we(t,Ye)),ry(e)?e:{next:e})}function Jl(t,e){return function(n,r){const i=new mt;return n.asyncQueue.enqueueAndForget(async()=>NB(await s0(n),r,i)),i.promise}(It(t),e)}function f0(t,e,n){const r=n.docs.get(e._key),i=new Hs(t);return new Rr(t,i,e._key,r,new os(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class J4 extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=qs(e)}get(e){const n=Jr(e,this._firestore),r=new j4(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return G();const s=i[0];if(s.isFoundDocument())return new dl(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new dl(this._firestore,r,n._key,null,n.converter);throw G()})}set(e,n,r){const i=Jr(e,this._firestore),s=Jf(i.converter,n,r),o=Yf(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Jr(e,this._firestore);let o;return o=typeof(n=Y(n))=="string"||n instanceof Oi?l0(this._dataReader,"Transaction.update",s._key,n,r,i):u0(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Jr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Jr(e,this._firestore),r=new Hs(this._firestore);return super.get(e).then(i=>new Rr(this._firestore,r,n._key,i._document,new os(!1,!1),n.converter))}}function Z4(t,e,n){t=we(t,Ye);const r=Object.assign(Object.assign({},V4),n);return function(i){if(i.maxAttempts<1)throw new O(T.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),s4(It(t),i=>e(new J4(t,i)),r)}/**
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
 */function e3(){return new Yl("deleteField")}function t3(){return new a0("serverTimestamp")}function n3(...t){return new b4("arrayUnion",t)}function r3(...t){return new T4("arrayRemove",t)}function i3(t){return new k4("increment",t)}(function(t,e=!0){(function(n){ga=n})(Us),_i(new hr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ye(new cj(n.getProvider("auth-internal")),new pj(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new O(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ti(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Hn(BS,"3.5.0",t),Hn(BS,"3.5.0","esm2017")})();const s3="@firebase/firestore-compat",o3="0.1.25";/**
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
 */function p0(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new O("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function G_(){if(typeof Uint8Array>"u")throw new O("unimplemented","Uint8Arrays are not available in this environment.")}function K_(){if(!Ij())throw new O("unimplemented","Blobs are unavailable in Firestore in this environment.")}class hl{constructor(e){this._delegate=e}static fromBase64String(e){return K_(),new hl(mr.fromBase64String(e))}static fromUint8Array(e){return G_(),new hl(mr.fromUint8Array(e))}toBase64(){return K_(),this._delegate.toBase64()}toUint8Array(){return G_(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function sy(t){return a3(t,["next","error","complete"])}function a3(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class u3{enableIndexedDbPersistence(e,n){return f4(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return p4(e._delegate)}clearIndexedDbPersistence(e){return m4(e._delegate)}}class LO{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ti||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&qo("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){u4(this._delegate,e,n,r)}enableNetwork(){return y4(this._delegate)}disableNetwork(){return v4(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,hO("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return g4(this._delegate)}onSnapshotsInSync(e){return X4(this._delegate,e)}get app(){if(!this._appCompat)throw new O("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ea(this,pO(this._delegate,e))}catch(n){throw Kt(n,"collection()","Firestore.collection()")}}doc(e){try{return new Pn(this,nh(this._delegate,e))}catch(n){throw Kt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Gt(this,l4(this._delegate,e))}catch(n){throw Kt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Z4(this._delegate,n=>e(new $O(this,n)))}batch(){return It(this._delegate),new MO(new z4(this._delegate,e=>Jl(this._delegate,e)))}loadBundle(e){return w4(this._delegate,e)}namedQuery(e){return S4(this._delegate,e).then(n=>n?new Gt(this,n):null)}}class Zf extends h0{constructor(e){super(),this.firestore=e}convertBytes(e){return new hl(new mr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Pn.forKey(n,this.firestore,null)}}function l3(t){oj(t)}class $O{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Zf(e)}get(e){const n=as(e);return this._delegate.get(n).then(r=>new fl(this._firestore,new Rr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=as(e);return r?(p0("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=as(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=as(e);return this._delegate.delete(n),this}}class MO{constructor(e){this._delegate=e}set(e,n,r){const i=as(e);return r?(p0("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=as(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=as(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Ds{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Iu(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new pl(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Ds.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Ds(e,new Zf(e),n),i.set(n,s)),s}}Ds.INSTANCES=new WeakMap;class Pn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Zf(e)}static forPath(e,n,r){if(e.length%2!==0)throw new O("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Pn(n,new Ne(n._delegate,r,new M(e)))}static forKey(e,n,r){return new Pn(n,new Ne(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ea(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ea(this.firestore,pO(this._delegate,e))}catch(n){throw Kt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Y(e),e instanceof Ne?mO(this._delegate,e):!1}set(e,n){n=p0("DocumentReference.set",n);try{return n?W_(this._delegate,e,n):W_(this._delegate,e)}catch(r){throw Kt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?H_(this._delegate,e):H_(this._delegate,e,n,...r)}catch(i){throw Kt(i,"updateDoc()","DocumentReference.update()")}}delete(){return Q4(this._delegate)}onSnapshot(...e){const n=FO(e),r=UO(e,i=>new fl(this.firestore,new Rr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return DO(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=q4(this._delegate):(e==null?void 0:e.source)==="server"?n=W4(this._delegate):n=B4(this._delegate),n.then(r=>new fl(this.firestore,new Rr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Pn(this.firestore,e?this._delegate.withConverter(Ds.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Kt(t,e,n){return t.message=t.message.replace(e,n),t}function FO(t){for(const e of t)if(typeof e=="object"&&!sy(e))return e;return{}}function UO(t,e){var n,r;let i;return sy(t[0])?i=t[0]:sy(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class fl{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Pn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return xO(this._delegate,e._delegate)}}class pl extends fl{data(e){const n=this._delegate.data(e);return aj(n!==void 0),n}}class Gt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Zf(e)}where(e,n,r){try{return new Gt(this.firestore,Wr(this._delegate,P4(e,n,r)))}catch(i){throw Kt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Gt(this.firestore,Wr(this._delegate,N4(e,n)))}catch(r){throw Kt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Gt(this.firestore,Wr(this._delegate,D4(e)))}catch(n){throw Kt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Gt(this.firestore,Wr(this._delegate,L4(e)))}catch(n){throw Kt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Gt(this.firestore,Wr(this._delegate,$4(...e)))}catch(n){throw Kt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Gt(this.firestore,Wr(this._delegate,M4(...e)))}catch(n){throw Kt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Gt(this.firestore,Wr(this._delegate,F4(...e)))}catch(n){throw Kt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Gt(this.firestore,Wr(this._delegate,U4(...e)))}catch(n){throw Kt(n,"endAt()","Query.endAt()")}}isEqual(e){return gO(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=G4(this._delegate):(e==null?void 0:e.source)==="server"?n=K4(this._delegate):n=H4(this._delegate),n.then(r=>new oy(this.firestore,new Ai(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=FO(e),r=UO(e,i=>new oy(this.firestore,new Ai(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return DO(this._delegate,n,r)}withConverter(e){return new Gt(this.firestore,e?this._delegate.withConverter(Ds.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class c3{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new pl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class oy{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Gt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new pl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new c3(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new pl(this._firestore,r))})}isEqual(e){return xO(this._delegate,e._delegate)}}class ea extends Gt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Pn(this.firestore,e):null}doc(e){try{return e===void 0?new Pn(this.firestore,nh(this._delegate)):new Pn(this.firestore,nh(this._delegate,e))}catch(n){throw Kt(n,"doc()","CollectionReference.doc()")}}add(e){return Y4(this._delegate,e).then(n=>new Pn(this.firestore,n))}isEqual(e){return mO(this._delegate,e._delegate)}withConverter(e){return new ea(this.firestore,e?this._delegate.withConverter(Ds.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function as(t){return we(t,Ne)}/**
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
 */class m0{constructor(...e){this._delegate=new Oi(...e)}static documentId(){return new m0(tt.keyField().canonicalString())}isEqual(e){return e=Y(e),e instanceof Oi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Zi{constructor(e){this._delegate=e}static serverTimestamp(){const e=t3();return e._methodName="FieldValue.serverTimestamp",new Zi(e)}static delete(){const e=e3();return e._methodName="FieldValue.delete",new Zi(e)}static arrayUnion(...e){const n=n3(...e);return n._methodName="FieldValue.arrayUnion",new Zi(n)}static arrayRemove(...e){const n=r3(...e);return n._methodName="FieldValue.arrayRemove",new Zi(n)}static increment(e){const n=i3(e);return n._methodName="FieldValue.increment",new Zi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const d3={Firestore:LO,GeoPoint:Kf,Timestamp:Ue,Blob:hl,Transaction:$O,WriteBatch:MO,DocumentReference:Pn,DocumentSnapshot:fl,Query:Gt,QueryDocumentSnapshot:pl,QuerySnapshot:oy,CollectionReference:ea,FieldPath:m0,FieldValue:Zi,setLogLevel:l3,CACHE_SIZE_UNLIMITED:h4};function h3(t,e){t.INTERNAL.registerComponent(new hr("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},d3)))}/**
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
 */function f3(t){h3(t,(e,n)=>new LO(e,n,new u3)),t.registerVersion(s3,o3)}f3(Lr);var p3="firebase",m3="9.10.0";/**
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
 */Hn(p3,m3,"app");const g3={apiKey:"AIzaSyAO335otS2D5inXElJoQlqqe6SG0YsB_TY",authDomain:"disney-plus-hotstar-clon-d1049.firebaseapp.com",projectId:"disney-plus-hotstar-clon-d1049",storageBucket:"disney-plus-hotstar-clon-d1049.appspot.com",messagingSenderId:"345926488857",appId:"1:345926488857:web:e8b5b7ccc86884d39e6b88"},y3=Lr.initializeApp(g3),ay=y3.firestore(),rd=Lr.auth(),v3=new Lr.auth.GoogleAuthProvider(rd);Lr.storage;function zn(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Pi(t){return!!t&&!!t[Le]}function Nr(t){return!!t&&(function(e){if(!e||typeof e!="object")return!1;var n=Object.getPrototypeOf(e);if(n===null)return!0;var r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object||typeof r=="function"&&Function.toString.call(r)===x3}(t)||Array.isArray(t)||!!t[tI]||!!t.constructor[tI]||g0(t)||y0(t))}function Ls(t,e,n){n===void 0&&(n=!1),ba(t)===0?(n?Object.keys:Oo)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function ba(t){var e=t[Le];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:g0(t)?2:y0(t)?3:0}function Co(t,e){return ba(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function w3(t,e){return ba(t)===2?t.get(e):t[e]}function VO(t,e,n){var r=ba(t);r===2?t.set(e,n):r===3?(t.delete(e),t.add(n)):t[e]=n}function jO(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function g0(t){return T3&&t instanceof Map}function y0(t){return k3&&t instanceof Set}function Ki(t){return t.o||t.t}function v0(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=BO(t);delete e[Le];for(var n=Oo(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function w0(t,e){return e===void 0&&(e=!1),S0(t)||Pi(t)||!Nr(t)||(ba(t)>1&&(t.set=t.add=t.clear=t.delete=S3),Object.freeze(t),e&&Ls(t,function(n,r){return w0(r,!0)},!0)),t}function S3(){zn(2)}function S0(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function dr(t){var e=dy[t];return e||zn(18,t),e}function _3(t,e){dy[t]||(dy[t]=e)}function uy(){return ml}function sm(t,e){e&&(dr("Patches"),t.u=[],t.s=[],t.v=e)}function ih(t){ly(t),t.p.forEach(I3),t.p=null}function ly(t){t===ml&&(ml=t.l)}function Q_(t){return ml={p:[],l:ml,h:t,m:!0,_:0}}function I3(t){var e=t[Le];e.i===0||e.i===1?e.j():e.O=!0}function om(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.g||dr("ES5").S(e,t,r),r?(n[Le].P&&(ih(e),zn(4)),Nr(t)&&(t=sh(e,t),e.l||oh(e,t)),e.u&&dr("Patches").M(n[Le].t,t,e.u,e.s)):t=sh(e,n,[]),ih(e),e.u&&e.v(e.u,e.s),t!==zO?t:void 0}function sh(t,e,n){if(S0(e))return e;var r=e[Le];if(!r)return Ls(e,function(s,o){return Y_(t,r,e,s,o,n)},!0),e;if(r.A!==t)return e;if(!r.P)return oh(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=v0(r.k):r.o;Ls(r.i===3?new Set(i):i,function(s,o){return Y_(t,r,i,s,o,n)}),oh(t,i,!1),n&&t.u&&dr("Patches").R(r,n,t.u,t.s)}return r.o}function Y_(t,e,n,r,i,s){if(Pi(i)){var o=sh(t,i,s&&e&&e.i!==3&&!Co(e.D,r)?s.concat(r):void 0);if(VO(n,r,o),!Pi(o))return;t.m=!1}if(Nr(i)&&!S0(i)){if(!t.h.F&&t._<1)return;sh(t,i),e&&e.A.l||oh(t,i)}}function oh(t,e,n){n===void 0&&(n=!1),t.h.F&&t.m&&w0(e,n)}function am(t,e){var n=t[Le];return(n?Ki(n):t)[e]}function X_(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Zr(t){t.P||(t.P=!0,t.l&&Zr(t.l))}function um(t){t.o||(t.o=v0(t.t))}function cy(t,e,n){var r=g0(e)?dr("MapSet").N(e,n):y0(e)?dr("MapSet").T(e,n):t.g?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:uy(),P:!1,I:!1,D:{},l:s,t:i,k:null,o:null,j:null,C:!1},u=a,l=gl;o&&(u=[a],l=nu);var c=Proxy.revocable(u,l),d=c.revoke,h=c.proxy;return a.k=h,a.j=d,h}(e,n):dr("ES5").J(e,n);return(n?n.A:uy()).p.push(r),r}function E3(t){return Pi(t)||zn(22,t),function e(n){if(!Nr(n))return n;var r,i=n[Le],s=ba(n);if(i){if(!i.P&&(i.i<4||!dr("ES5").K(i)))return i.t;i.I=!0,r=J_(n,s),i.I=!1}else r=J_(n,s);return Ls(r,function(o,a){i&&w3(i.t,o)===a||VO(r,o,e(a))}),s===3?new Set(r):r}(t)}function J_(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return v0(t)}function b3(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var u=this[Le];return gl.get(u,s)},set:function(u){var l=this[Le];gl.set(l,s,u)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][Le];if(!a.P)switch(a.i){case 5:r(a)&&Zr(a);break;case 4:n(a)&&Zr(a)}}}function n(s){for(var o=s.t,a=s.k,u=Oo(a),l=u.length-1;l>=0;l--){var c=u[l];if(c!==Le){var d=o[c];if(d===void 0&&!Co(o,c))return!0;var h=a[c],p=h&&h[Le];if(p?p.t!==d:!jO(h,d))return!0}}var m=!!o[Le];return u.length!==Oo(o).length+(m?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var u=0;u<o.length;u++)if(!o.hasOwnProperty(u))return!0;return!1}var i={};_3("ES5",{J:function(s,o){var a=Array.isArray(s),u=function(c,d){if(c){for(var h=Array(d.length),p=0;p<d.length;p++)Object.defineProperty(h,""+p,t(p,!0));return h}var m=BO(d);delete m[Le];for(var y=Oo(m),w=0;w<y.length;w++){var g=y[w];m[g]=t(g,c||!!m[g].enumerable)}return Object.create(Object.getPrototypeOf(d),m)}(a,s),l={i:a?5:4,A:o?o.A:uy(),P:!1,I:!1,D:{},l:o,t:s,k:u,o:null,O:!1,C:!1};return Object.defineProperty(u,Le,{value:l,writable:!0}),u},S:function(s,o,a){a?Pi(o)&&o[Le].A===s&&e(s.p):(s.u&&function u(l){if(l&&typeof l=="object"){var c=l[Le];if(c){var d=c.t,h=c.k,p=c.D,m=c.i;if(m===4)Ls(h,function(v){v!==Le&&(d[v]!==void 0||Co(d,v)?p[v]||u(h[v]):(p[v]=!0,Zr(c)))}),Ls(d,function(v){h[v]!==void 0||Co(h,v)||(p[v]=!1,Zr(c))});else if(m===5){if(r(c)&&(Zr(c),p.length=!0),h.length<d.length)for(var y=h.length;y<d.length;y++)p[y]=!1;else for(var w=d.length;w<h.length;w++)p[w]=!0;for(var g=Math.min(h.length,d.length),f=0;f<g;f++)h.hasOwnProperty(f)||(p[f]=!0),p[f]===void 0&&u(h[f])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var Z_,ml,_0=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",T3=typeof Map<"u",k3=typeof Set<"u",eI=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",zO=_0?Symbol.for("immer-nothing"):((Z_={})["immer-nothing"]=!0,Z_),tI=_0?Symbol.for("immer-draftable"):"__$immer_draftable",Le=_0?Symbol.for("immer-state"):"__$immer_state",x3=""+Object.prototype.constructor,Oo=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,BO=Object.getOwnPropertyDescriptors||function(t){var e={};return Oo(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},dy={},gl={get:function(t,e){if(e===Le)return t;var n=Ki(t);if(!Co(n,e))return function(i,s,o){var a,u=X_(s,o);return u?"value"in u?u.value:(a=u.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!Nr(r)?r:r===am(t.t,e)?(um(t),t.o[e]=cy(t.A.h,r,t)):r},has:function(t,e){return e in Ki(t)},ownKeys:function(t){return Reflect.ownKeys(Ki(t))},set:function(t,e,n){var r=X_(Ki(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=am(Ki(t),e),s=i==null?void 0:i[Le];if(s&&s.t===n)return t.o[e]=n,t.D[e]=!1,!0;if(jO(n,i)&&(n!==void 0||Co(t.t,e)))return!0;um(t),Zr(t)}return t.o[e]===n&&typeof n!="number"&&(n!==void 0||e in t.o)||(t.o[e]=n,t.D[e]=!0,!0)},deleteProperty:function(t,e){return am(t.t,e)!==void 0||e in t.t?(t.D[e]=!1,um(t),Zr(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=Ki(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){zn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){zn(12)}},nu={};Ls(gl,function(t,e){nu[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),nu.deleteProperty=function(t,e){return nu.set.call(this,t,e,void 0)},nu.set=function(t,e,n){return gl.set.call(this,t[0],e,n,t[0])};var C3=function(){function t(n){var r=this;this.g=eI,this.F=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var u=r;return function(y){var w=this;y===void 0&&(y=a);for(var g=arguments.length,f=Array(g>1?g-1:0),v=1;v<g;v++)f[v-1]=arguments[v];return u.produce(y,function(S){var I;return(I=s).call.apply(I,[w,S].concat(f))})}}var l;if(typeof s!="function"&&zn(6),o!==void 0&&typeof o!="function"&&zn(7),Nr(i)){var c=Q_(r),d=cy(r,i,void 0),h=!0;try{l=s(d),h=!1}finally{h?ih(c):ly(c)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(y){return sm(c,o),om(y,c)},function(y){throw ih(c),y}):(sm(c,o),om(l,c))}if(!i||typeof i!="object"){if((l=s(i))===void 0&&(l=i),l===zO&&(l=void 0),r.F&&w0(l,!0),o){var p=[],m=[];dr("Patches").M(i,l,p,m),o(p,m)}return l}zn(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(l){for(var c=arguments.length,d=Array(c>1?c-1:0),h=1;h<c;h++)d[h-1]=arguments[h];return r.produceWithPatches(l,function(p){return i.apply(void 0,[p].concat(d))})};var o,a,u=r.produce(i,s,function(l,c){o=l,a=c});return typeof Promise<"u"&&u instanceof Promise?u.then(function(l){return[l,o,a]}):[u,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){Nr(n)||zn(8),Pi(n)&&(n=E3(n));var r=Q_(this),i=cy(this,n,void 0);return i[Le].C=!0,ly(r),i},e.finishDraft=function(n,r){var i=n&&n[Le],s=i.A;return sm(s,r),om(void 0,s)},e.setAutoFreeze=function(n){this.F=n},e.setUseProxies=function(n){n&&!eI&&zn(20),this.g=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=dr("Patches").$;return Pi(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),bn=new C3,qO=bn.produce;bn.produceWithPatches.bind(bn);bn.setAutoFreeze.bind(bn);bn.setUseProxies.bind(bn);bn.applyPatches.bind(bn);bn.createDraft.bind(bn);bn.finishDraft.bind(bn);function O3(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function nI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function rI(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?nI(Object(n),!0).forEach(function(r){O3(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nI(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ut(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var iI=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),lm=function(){return Math.random().toString(36).substring(7).split("").join(".")},ah={INIT:"@@redux/INIT"+lm(),REPLACE:"@@redux/REPLACE"+lm(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+lm()}};function A3(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function WO(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ut(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ut(1));return n(WO)(t,e)}if(typeof t!="function")throw new Error(Ut(2));var i=t,s=e,o=[],a=o,u=!1;function l(){a===o&&(a=o.slice())}function c(){if(u)throw new Error(Ut(3));return s}function d(y){if(typeof y!="function")throw new Error(Ut(4));if(u)throw new Error(Ut(5));var w=!0;return l(),a.push(y),function(){if(!!w){if(u)throw new Error(Ut(6));w=!1,l();var f=a.indexOf(y);a.splice(f,1),o=null}}}function h(y){if(!A3(y))throw new Error(Ut(7));if(typeof y.type>"u")throw new Error(Ut(8));if(u)throw new Error(Ut(9));try{u=!0,s=i(s,y)}finally{u=!1}for(var w=o=a,g=0;g<w.length;g++){var f=w[g];f()}return y}function p(y){if(typeof y!="function")throw new Error(Ut(10));i=y,h({type:ah.REPLACE})}function m(){var y,w=d;return y={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(Ut(11));function v(){f.next&&f.next(c())}v();var S=w(v);return{unsubscribe:S}}},y[iI]=function(){return this},y}return h({type:ah.INIT}),r={dispatch:h,subscribe:d,getState:c,replaceReducer:p},r[iI]=m,r}function P3(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:ah.INIT});if(typeof r>"u")throw new Error(Ut(12));if(typeof n(void 0,{type:ah.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ut(13))})}function R3(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{P3(n)}catch(a){o=a}return function(u,l){if(u===void 0&&(u={}),o)throw o;for(var c=!1,d={},h=0;h<s.length;h++){var p=s[h],m=n[p],y=u[p],w=m(y,l);if(typeof w>"u")throw l&&l.type,new Error(Ut(14));d[p]=w,c=c||w!==y}return c=c||s.length!==Object.keys(u).length,c?d:u}}function uh(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function N3(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(Ut(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(u){return u(o)});return s=uh.apply(void 0,a)(i.dispatch),rI(rI({},i),{},{dispatch:s})}}}function HO(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var GO=HO();GO.withExtraArgument=HO;const sI=GO;var D3=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();globalThis&&globalThis.__generator;var lh=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},L3=Object.defineProperty,oI=Object.getOwnPropertySymbols,$3=Object.prototype.hasOwnProperty,M3=Object.prototype.propertyIsEnumerable,aI=function(t,e,n){return e in t?L3(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},yl=function(t,e){for(var n in e||(e={}))$3.call(e,n)&&aI(t,n,e[n]);if(oI)for(var r=0,i=oI(e);r<i.length;r++){var n=i[r];M3.call(e,n)&&aI(t,n,e[n])}return t},F3=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?uh:uh.apply(null,arguments)};function U3(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var V3=function(t){D3(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,lh([void 0],n[0].concat(this)))):new(e.bind.apply(e,lh([void 0],n.concat(this))))},e}(Array);function hy(t){return Nr(t)?qO(t,function(){}):t}function j3(t){return typeof t=="boolean"}function z3(){return function(e){return B3(e)}}function B3(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new V3;return n&&(j3(n)?r.push(sI):r.push(sI.withExtraArgument(n.extraArgument))),r}var q3=!0;function W3(t){var e=z3(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,u=a===void 0?!0:a,l=n.preloadedState,c=l===void 0?void 0:l,d=n.enhancers,h=d===void 0?void 0:d,p;if(typeof i=="function")p=i;else if(U3(i))p=R3(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var m=o;typeof m=="function"&&(m=m(e));var y=N3.apply(void 0,m),w=uh;u&&(w=F3(yl({trace:!q3},typeof u=="object"&&u)));var g=[y];Array.isArray(h)?g=lh([y],h):typeof h=="function"&&(g=h(g));var f=w.apply(void 0,g);return WO(p,c,f)}function vl(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return yl(yl({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function KO(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function H3(t){return typeof t=="function"}function G3(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?KO(e):[e,n,r],s=i[0],o=i[1],a=i[2],u;if(H3(t))u=function(){return hy(t())};else{var l=hy(t);u=function(){return l}}function c(d,h){d===void 0&&(d=u());var p=lh([s[h.type]],o.filter(function(m){var y=m.matcher;return y(h)}).map(function(m){var y=m.reducer;return y}));return p.filter(function(m){return!!m}).length===0&&(p=[a]),p.reduce(function(m,y){if(y)if(Pi(m)){var w=m,g=y(w,h);return g===void 0?m:g}else{if(Nr(m))return qO(m,function(f){return y(f,h)});var g=y(m,h);if(g===void 0){if(m===null)return m;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return m},d)}return c.getInitialState=u,c}function K3(t,e){return t+"/"+e}function QO(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:hy(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var d=r[c],h=K3(e,c),p,m;"reducer"in d?(p=d.reducer,m=d.prepare):p=d,s[c]=p,o[h]=p,a[c]=m?vl(h,m):vl(h)});function u(){var c=typeof t.extraReducers=="function"?KO(t.extraReducers):[t.extraReducers],d=c[0],h=d===void 0?{}:d,p=c[1],m=p===void 0?[]:p,y=c[2],w=y===void 0?void 0:y,g=yl(yl({},h),o);return G3(n,g,m,w)}var l;return{name:e,reducer:function(c,d){return l||(l=u()),l(c,d)},actions:a,caseReducers:s,getInitialState:function(){return l||(l=u()),l.getInitialState()}}}var I0="listenerMiddleware";vl(I0+"/add");vl(I0+"/removeAll");vl(I0+"/remove");b3();const Q3={name:"",email:"",photo:""},YO=QO({name:"user",initialState:Q3,reducers:{setUserLoginDetails:(t,e)=>{t.name=e.payload.name,t.email=e.payload.email,t.photo=e.payload.photo},setSignOutState:t=>{t.name=null,t.email=null,t.photo=null}}}),{setUserLoginDetails:Y3,setSignOutState:X3}=YO.actions,XO=t=>t.user.name,J3=t=>t.user.photo,Z3=YO.reducer,eq=()=>{const t=Xb(),e=sT(),n=Ss(XO),r=Ss(J3);B.exports.useEffect(()=>{rd.onAuthStateChanged(async o=>{o&&(s(o),e("/home"))})},[n]);const i=()=>{n?n&&rd.signOut().then(()=>{t(X3()),e("/")}).catch(o=>{alert(o)}):rd.signInWithPopup(v3).then(o=>{s(o.user)}).catch(o=>{alert(o)})},s=o=>{t(Y3({name:o.displayName,email:o.email,photo:o.photoURL}))};return le(tq,{children:[x(nq,{children:x("img",{src:"/images/logo.svg",alt:"Disney+"})}),n?le(Qb,{children:[le(rq,{children:[le("a",{href:"/home",children:[x("img",{src:"/images/home-icon.svg",alt:"HOME"}),x("span",{children:"Home"})]}),le("a",{children:[x("img",{src:"/images/search-icon.svg",alt:"SEARCH"}),x("span",{children:"SEARCH"})]}),le("a",{children:[x("img",{src:"/images/watchlist-icon.svg",alt:"WATCHLIST"}),x("span",{children:"WATCHLIST"})]}),le("a",{children:[x("img",{src:"/images/original-icon.svg",alt:"ORIGINALS"}),x("span",{children:"ORIGINALS"})]}),le("a",{children:[x("img",{src:"/images/movie-icon.svg",alt:"MOVIES"}),x("span",{children:"MOVIES"})]}),le("a",{children:[x("img",{src:"/images/series-icon.svg",alt:"SERIES"}),x("span",{children:"SERIES"})]})]}),le(sq,{children:[x(JO,{src:r,alt:n}),x(ZO,{children:x("span",{onClick:i,children:"SignOut"})})]})]}):x(iq,{onClick:i,children:"Login"})]})},tq=se.nav`
    width:100%;
    position:fixed;
    top:0;
    left:0;
    right:0;
    height:70px;
    background-color:#090b13;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 36px;
    letter-spacing:16px;
    z-index:3;
`,nq=se.a`
    padding:0;
    width:80px;
    margin-top:4px;
    max-height:70px;
    font-size:0;
    display:inline-block;
    img{
        display:block;
        width:100%;
    }
`,rq=se.div`
    display:flex;
    align-items:center;
    flex-flow:row nowrap;
    height:100%;
    justify-content:flex-end;
    margin:0;
    padding:0;
    position:relative;
    margin-right:auto;
    margin-left:25px;

    a{
        display:flex;
        align-items:center;
        padding:0 12px;

        img{
            height:20px;
            min-width:20px;
            width:20px;
            z-index:auto;
        }

        span{
            color:rgb(249,249,249);
            font-size:13px;
            letter-spacing:1.42px;
            line-height:1.08;
            padding:2px 0px;
            white-space:nowrap;
            position:relative;

        &:before{
            content:'';
            background-color:rgb(249,249,249);
            border-radius:0 0 4px 4px;
            bottom:-6px;
            height:2px;
            opacity:0;
            position:absolute;
            right:0;
            left:0;
            transform-origin:left center;
            transform:scaleX(0);
            transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            visibility:hidden;
            width:auto;
        }        
        }

        &:hover{
            span:before{
                transform:scaleX(1);
                visibility:visible;
                opacity:1;
            }
        }
    }

    @media (max-width:768px){
        display:none;;
    }
`,iq=se.a`
    background-color:rgba(0,0,0,0.6);
    padding:8px 16px;
    text-transform:uppercase;
    letter-spacing:1.5px;
    border:1px solid #f9f9f9;
    border-radius:4px;
    transition:all 0.2s ease-out;
    cursor:pointer;

    &:hover{
        background-color:#f9f9f9;
        color:black;
        border-color:transparent;
    }
`,JO=se.img`
`,ZO=se.div`
    position:absolute;
    top:48px;
    right:0;
    background-color:rgb(19,19,19);
    border:1px solid rgb(151,151,151,0.34);
    border-radius:4px;
    box-shadow:rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding:10px;
    font-size:14px;
    letter-spacing:3px;
    opacity:0;
    width:100px;

`,sq=se.div`
    position:relative;
    height:48px;
    width:48px;
    display:flex;
    cursor:pointer;
    align-items:center;
    justify-content:center;

    ${JO}{
        border-radius:50%;
        width:100%;
        height:100%;
    }

    &:hover{
        ${ZO}{
            opacity:1;
            transition-duration:1s;
        }
    }

`,oq=()=>x(aq,{children:le(uq,{children:[le(cq,{children:[x(dq,{src:"/images/cta-logo-one.svg",alt:""}),x(hq,{children:"GET ALL THERE"}),x(fq,{children:"Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1."}),x(pq,{src:"/images/cta-logo-two.png",alt:""})]}),x(lq,{})]})}),aq=se.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height:100vh;
`,uq=se.div`
    margin-bottom:10vw;
    width:100%;
    position:relative;
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    box-sizing:border-box;
    flex-direction:column;
    padding:80px 40px;
    height:100%;
`,lq=se.div`
    width:100%;
    background-position:top;
    background-size:cover;
    background-repeat:no-repeat;
    height:100vh;
    position:absolute;
    top:0;
    left:0;
    right:0;
    z-index:-1;
    background-image: url('/images/login-background.jpg');
`,cq=se.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`,dq=se.img`
    margin-bottom:12px;
    max-width:600px;
    min-height:1px;
    display:block;
    width:100%;
`,hq=se.a`
    font-weight:bold;
    color:#f9f9f9;
    background-color:#0063e5;
    margin-bottom:12px;
    width:100%;
    letter-spacing:1.5px;
    font-size:18px;
    padding:16.5px 0;
    border:1px solid transparent;
    border-radius:4px;

    &:hover{
        background-color:#0483ee;
    }
`,fq=se.p`
    color:hsla(0,0%,95.3%,1);
    font-size:11px;
    margin: 0 0 24px;
    line-height:1.5;
    letter-spacing:1.5px;
`,pq=se.img`
    max-width:600px;
    margin-bottom:20px;
    display: inline-block;
    vertical-align: bottom;
    width:100%;
`;var eA={},tA={},ep={},nA={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=e;t.default=n})(nA);var mq="Expected a function",uI=0/0,gq="[object Symbol]",yq=/^\s+|\s+$/g,vq=/^[-+]0x[0-9a-f]+$/i,wq=/^0b[01]+$/i,Sq=/^0o[0-7]+$/i,_q=parseInt,Iq=typeof nc=="object"&&nc&&nc.Object===Object&&nc,Eq=typeof self=="object"&&self&&self.Object===Object&&self,bq=Iq||Eq||Function("return this")(),Tq=Object.prototype,kq=Tq.toString,xq=Math.max,Cq=Math.min,cm=function(){return bq.Date.now()};function Oq(t,e,n){var r,i,s,o,a,u,l=0,c=!1,d=!1,h=!0;if(typeof t!="function")throw new TypeError(mq);e=lI(e)||0,fy(n)&&(c=!!n.leading,d="maxWait"in n,s=d?xq(lI(n.maxWait)||0,e):s,h="trailing"in n?!!n.trailing:h);function p(k){var C=r,b=i;return r=i=void 0,l=k,o=t.apply(b,C),o}function m(k){return l=k,a=setTimeout(g,e),c?p(k):o}function y(k){var C=k-u,b=k-l,P=e-C;return d?Cq(P,s-b):P}function w(k){var C=k-u,b=k-l;return u===void 0||C>=e||C<0||d&&b>=s}function g(){var k=cm();if(w(k))return f(k);a=setTimeout(g,y(k))}function f(k){return a=void 0,h&&r?p(k):(r=i=void 0,o)}function v(){a!==void 0&&clearTimeout(a),l=0,r=u=i=a=void 0}function S(){return a===void 0?o:f(cm())}function I(){var k=cm(),C=w(k);if(r=arguments,i=this,u=k,C){if(a===void 0)return m(u);if(d)return a=setTimeout(g,e),p(u)}return a===void 0&&(a=setTimeout(g,e)),o}return I.cancel=v,I.flush=S,I}function fy(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Aq(t){return!!t&&typeof t=="object"}function Pq(t){return typeof t=="symbol"||Aq(t)&&kq.call(t)==gq}function lI(t){if(typeof t=="number")return t;if(Pq(t))return uI;if(fy(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=fy(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(yq,"");var n=wq.test(t);return n||Sq.test(t)?_q(t.slice(2),n?2:8):vq.test(t)?uI:+t}var Rq=Oq,Zl={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(!!s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var u in s)e.call(s,u)&&s[u]&&r.push(u)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Zl);var V={};Object.defineProperty(V,"__esModule",{value:!0});V.checkSpecKeys=V.checkNavigable=V.changeSlide=V.canUseDOM=V.canGoNext=void 0;V.clamp=rA;V.swipeStart=V.swipeMove=V.swipeEnd=V.slidesOnRight=V.slidesOnLeft=V.slideHandler=V.siblingDirection=V.safePreventDefault=V.lazyStartIndex=V.lazySlidesOnRight=V.lazySlidesOnLeft=V.lazyEndIndex=V.keyHandler=V.initializedState=V.getWidth=V.getTrackLeft=V.getTrackCSS=V.getTrackAnimateCSS=V.getTotalSlides=V.getSwipeDirection=V.getSlideCount=V.getRequiredLazySlides=V.getPreClones=V.getPostClones=V.getOnDemandLazySlides=V.getNavigableIndexes=V.getHeight=V.extractObject=void 0;var Nq=Dq(B.exports);function Dq(t){return t&&t.__esModule?t:{default:t}}function cI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function De(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?cI(Object(n),!0).forEach(function(r){Lq(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):cI(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Lq(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function rA(t,e,n){return Math.max(e,Math.min(t,n))}var ps=function(e){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(e._reactName)||e.preventDefault()};V.safePreventDefault=ps;var E0=function(e){for(var n=[],r=b0(e),i=T0(e),s=r;s<i;s++)e.lazyLoadedList.indexOf(s)<0&&n.push(s);return n};V.getOnDemandLazySlides=E0;var $q=function(e){for(var n=[],r=b0(e),i=T0(e),s=r;s<i;s++)n.push(s);return n};V.getRequiredLazySlides=$q;var b0=function(e){return e.currentSlide-iA(e)};V.lazyStartIndex=b0;var T0=function(e){return e.currentSlide+sA(e)};V.lazyEndIndex=T0;var iA=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0};V.lazySlidesOnLeft=iA;var sA=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow};V.lazySlidesOnRight=sA;var ch=function(e){return e&&e.offsetWidth||0};V.getWidth=ch;var k0=function(e){return e&&e.offsetHeight||0};V.getHeight=k0;var x0=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,s,o;return r=e.startX-e.curX,i=e.startY-e.curY,s=Math.atan2(i,r),o=Math.round(s*180/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":n===!0?o>=35&&o<=135?"up":"down":"vertical"};V.getSwipeDirection=x0;var C0=function(e){var n=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(n=!1),n};V.canGoNext=C0;var Mq=function(e,n){var r={};return n.forEach(function(i){return r[i]=e[i]}),r};V.extractObject=Mq;var Fq=function(e){var n=Nq.default.Children.count(e.children),r=e.listRef,i=Math.ceil(ch(r)),s=e.trackRef&&e.trackRef.node,o=Math.ceil(ch(s)),a;if(e.vertical)a=i;else{var u=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(u*=i/100),a=Math.ceil((i-u)/e.slidesToShow)}var l=r&&k0(r.querySelector('[data-index="0"]')),c=l*e.slidesToShow,d=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(d=n-1-e.initialSlide);var h=e.lazyLoadedList||[],p=E0(De(De({},e),{},{currentSlide:d,lazyLoadedList:h}));h=h.concat(p);var m={slideCount:n,slideWidth:a,listWidth:i,trackWidth:o,currentSlide:d,slideHeight:l,listHeight:c,lazyLoadedList:h};return e.autoplaying===null&&e.autoplay&&(m.autoplaying="playing"),m};V.initializedState=Fq;var Uq=function(e){var n=e.waitForAnimate,r=e.animating,i=e.fade,s=e.infinite,o=e.index,a=e.slideCount,u=e.lazyLoad,l=e.currentSlide,c=e.centerMode,d=e.slidesToScroll,h=e.slidesToShow,p=e.useCSS,m=e.lazyLoadedList;if(n&&r)return{};var y=o,w,g,f,v={},S={},I=s?o:rA(o,0,a-1);if(i){if(!s&&(o<0||o>=a))return{};o<0?y=o+a:o>=a&&(y=o-a),u&&m.indexOf(y)<0&&(m=m.concat(y)),v={animating:!0,currentSlide:y,lazyLoadedList:m,targetSlide:y},S={animating:!1,targetSlide:y}}else w=y,y<0?(w=y+a,s?a%d!==0&&(w=a-a%d):w=0):!C0(e)&&y>l?y=w=l:c&&y>=a?(y=s?a:a-1,w=s?0:a-1):y>=a&&(w=y-a,s?a%d!==0&&(w=0):w=a-h),!s&&y+h>=a&&(w=a-h),g=Sl(De(De({},e),{},{slideIndex:y})),f=Sl(De(De({},e),{},{slideIndex:w})),s||(g===f&&(y=w),g=f),u&&(m=m.concat(E0(De(De({},e),{},{currentSlide:y})))),p?(v={animating:!0,currentSlide:w,trackStyle:O0(De(De({},e),{},{left:g})),lazyLoadedList:m,targetSlide:I},S={animating:!1,currentSlide:w,trackStyle:wl(De(De({},e),{},{left:f})),swipeLeft:null,targetSlide:I}):v={currentSlide:w,trackStyle:wl(De(De({},e),{},{left:f})),lazyLoadedList:m,targetSlide:I};return{state:v,nextState:S}};V.slideHandler=Uq;var Vq=function(e,n){var r,i,s,o,a,u=e.slidesToScroll,l=e.slidesToShow,c=e.slideCount,d=e.currentSlide,h=e.targetSlide,p=e.lazyLoad,m=e.infinite;if(o=c%u!==0,r=o?0:(c-d)%u,n.message==="previous")s=r===0?u:l-r,a=d-s,p&&!m&&(i=d-s,a=i===-1?c-1:i),m||(a=h-u);else if(n.message==="next")s=r===0?u:r,a=d+s,p&&!m&&(a=(d+u)%c+r),m||(a=h+u);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,m){var y=lA(De(De({},e),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-c:a<n.currentSlide&&y==="right"&&(a=a+c)}}else n.message==="index"&&(a=Number(n.index));return a};V.changeSlide=Vq;var jq=function(e,n,r){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":e.keyCode===37?r?"next":"previous":e.keyCode===39?r?"previous":"next":""};V.keyHandler=jq;var zq=function(e,n,r){return e.target.tagName==="IMG"&&ps(e),!n||!r&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};V.swipeStart=zq;var Bq=function(e,n){var r=n.scrolling,i=n.animating,s=n.vertical,o=n.swipeToSlide,a=n.verticalSwiping,u=n.rtl,l=n.currentSlide,c=n.edgeFriction,d=n.edgeDragged,h=n.onEdge,p=n.swiped,m=n.swiping,y=n.slideCount,w=n.slidesToScroll,g=n.infinite,f=n.touchObject,v=n.swipeEvent,S=n.listHeight,I=n.listWidth;if(!r){if(i)return ps(e);s&&o&&a&&ps(e);var k,C={},b=Sl(n);f.curX=e.touches?e.touches[0].pageX:e.clientX,f.curY=e.touches?e.touches[0].pageY:e.clientY,f.swipeLength=Math.round(Math.sqrt(Math.pow(f.curX-f.startX,2)));var P=Math.round(Math.sqrt(Math.pow(f.curY-f.startY,2)));if(!a&&!m&&P>10)return{scrolling:!0};a&&(f.swipeLength=P);var D=(u?-1:1)*(f.curX>f.startX?1:-1);a&&(D=f.curY>f.startY?1:-1);var Q=Math.ceil(y/w),W=x0(n.touchObject,a),H=f.swipeLength;return g||(l===0&&(W==="right"||W==="down")||l+1>=Q&&(W==="left"||W==="up")||!C0(n)&&(W==="left"||W==="up"))&&(H=f.swipeLength*c,d===!1&&h&&(h(W),C.edgeDragged=!0)),!p&&v&&(v(W),C.swiped=!0),s?k=b+H*(S/I)*D:u?k=b-H*D:k=b+H*D,a&&(k=b+H*D),C=De(De({},C),{},{touchObject:f,swipeLeft:k,trackStyle:wl(De(De({},n),{},{left:k}))}),Math.abs(f.curX-f.startX)<Math.abs(f.curY-f.startY)*.8||f.swipeLength>10&&(C.swiping=!0,ps(e)),C}};V.swipeMove=Bq;var qq=function(e,n){var r=n.dragging,i=n.swipe,s=n.touchObject,o=n.listWidth,a=n.touchThreshold,u=n.verticalSwiping,l=n.listHeight,c=n.swipeToSlide,d=n.scrolling,h=n.onSwipe,p=n.targetSlide,m=n.currentSlide,y=n.infinite;if(!r)return i&&ps(e),{};var w=u?l/a:o/a,g=x0(s,u),f={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(d||!s.swipeLength)return f;if(s.swipeLength>w){ps(e),h&&h(g);var v,S,I=y?m:p;switch(g){case"left":case"up":S=I+my(n),v=c?py(n,S):S,f.currentDirection=0;break;case"right":case"down":S=I-my(n),v=c?py(n,S):S,f.currentDirection=1;break;default:v=I}f.triggerSlideHandler=v}else{var k=Sl(n);f.trackStyle=O0(De(De({},n),{},{left:k}))}return f};V.swipeEnd=qq;var oA=function(e){for(var n=e.infinite?e.slideCount*2:e.slideCount,r=e.infinite?e.slidesToShow*-1:0,i=e.infinite?e.slidesToShow*-1:0,s=[];r<n;)s.push(r),r=i+e.slidesToScroll,i+=Math.min(e.slidesToScroll,e.slidesToShow);return s};V.getNavigableIndexes=oA;var py=function(e,n){var r=oA(e),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var s in r){if(n<r[s]){n=i;break}i=r[s]}return n};V.checkNavigable=py;var my=function(e){var n=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var r,i=e.listRef,s=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(s).every(function(u){if(e.vertical){if(u.offsetTop+k0(u)/2>e.swipeLeft*-1)return r=u,!1}else if(u.offsetLeft-n+ch(u)/2>e.swipeLeft*-1)return r=u,!1;return!0}),!r)return 0;var o=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,a=Math.abs(r.dataset.index-o)||1;return a}else return e.slidesToScroll};V.getSlideCount=my;var tp=function(e,n){return n.reduce(function(r,i){return r&&e.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",e)};V.checkSpecKeys=tp;var wl=function(e){tp(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=e.slideCount+2*e.slidesToShow;e.vertical?r=i*e.slideHeight:n=uA(e)*e.slideWidth;var s={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",u=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";s=De(De({},s),{},{WebkitTransform:o,transform:a,msTransform:u})}else e.vertical?s.top=e.left:s.left=e.left;return e.fade&&(s={opacity:1}),n&&(s.width=n),r&&(s.height=r),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?s.marginTop=e.left+"px":s.marginLeft=e.left+"px"),s};V.getTrackCSS=wl;var O0=function(e){tp(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=wl(e);return e.useTransform?(n.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,n.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?n.transition="top "+e.speed+"ms "+e.cssEase:n.transition="left "+e.speed+"ms "+e.cssEase,n};V.getTrackAnimateCSS=O0;var Sl=function(e){if(e.unslick)return 0;tp(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=e.slideIndex,r=e.trackRef,i=e.infinite,s=e.centerMode,o=e.slideCount,a=e.slidesToShow,u=e.slidesToScroll,l=e.slideWidth,c=e.listWidth,d=e.variableWidth,h=e.slideHeight,p=e.fade,m=e.vertical,y=0,w,g,f=0;if(p||e.slideCount===1)return 0;var v=0;if(i?(v=-Eu(e),o%u!==0&&n+u>o&&(v=-(n>o?a-(n-o):o%u)),s&&(v+=parseInt(a/2))):(o%u!==0&&n+u>o&&(v=a-o%u),s&&(v=parseInt(a/2))),y=v*l,f=v*h,m?w=n*h*-1+f:w=n*l*-1+y,d===!0){var S,I=r&&r.node;if(S=n+Eu(e),g=I&&I.childNodes[S],w=g?g.offsetLeft*-1:0,s===!0){S=i?n+Eu(e):n,g=I&&I.children[S],w=0;for(var k=0;k<S;k++)w-=I&&I.children[k]&&I.children[k].offsetWidth;w-=parseInt(e.centerPadding),w+=g&&(c-g.offsetWidth)/2}}return w};V.getTrackLeft=Sl;var Eu=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)};V.getPreClones=Eu;var aA=function(e){return e.unslick||!e.infinite?0:e.slideCount};V.getPostClones=aA;var uA=function(e){return e.slideCount===1?1:Eu(e)+e.slideCount+aA(e)};V.getTotalSlides=uA;var lA=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+cA(e)?"left":"right":e.targetSlide<e.currentSlide-dA(e)?"right":"left"};V.siblingDirection=lA;var cA=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),i&&n%2===0&&(o+=1),o}return i?0:n-1};V.slidesOnRight=cA;var dA=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),!i&&n%2===0&&(o+=1),o}return i?n-1:0};V.slidesOnLeft=dA;var Wq=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};V.canUseDOM=Wq;var np={};function gy(t){return gy=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gy(t)}Object.defineProperty(np,"__esModule",{value:!0});np.Track=void 0;var Kr=hA(B.exports),dm=hA(Zl.exports),hm=V;function hA(t){return t&&t.__esModule?t:{default:t}}function yy(){return yy=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yy.apply(this,arguments)}function Hq(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function dI(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Gq(t,e,n){return e&&dI(t.prototype,e),n&&dI(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Kq(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&vy(t,e)}function vy(t,e){return vy=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},vy(t,e)}function Qq(t){var e=Xq();return function(){var r=dh(t),i;if(e){var s=dh(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return Yq(this,i)}}function Yq(t,e){if(e&&(gy(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wy(t)}function wy(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Xq(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function dh(t){return dh=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},dh(t)}function hI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function nn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?hI(Object(n),!0).forEach(function(r){Sy(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):hI(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Sy(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var fm=function(e){var n,r,i,s,o;e.rtl?o=e.slideCount-1-e.index:o=e.index,i=o<0||o>=e.slideCount,e.centerMode?(s=Math.floor(e.slidesToShow/2),r=(o-e.currentSlide)%e.slideCount===0,o>e.currentSlide-s-1&&o<=e.currentSlide+s&&(n=!0)):n=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow;var a;e.targetSlide<0?a=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?a=e.targetSlide-e.slideCount:a=e.targetSlide;var u=o===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":u}},Jq=function(e){var n={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(n.width=e.slideWidth),e.fade&&(n.position="relative",e.vertical?n.top=-e.index*parseInt(e.slideHeight):n.left=-e.index*parseInt(e.slideWidth),n.opacity=e.currentSlide===e.index?1:0,e.useCSS&&(n.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),n},pm=function(e,n){return e.key||n},Zq=function(e){var n,r=[],i=[],s=[],o=Kr.default.Children.count(e.children),a=(0,hm.lazyStartIndex)(e),u=(0,hm.lazyEndIndex)(e);return Kr.default.Children.forEach(e.children,function(l,c){var d,h={message:"children",index:c,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(c)>=0?d=l:d=Kr.default.createElement("div",null);var p=Jq(nn(nn({},e),{},{index:c})),m=d.props.className||"",y=fm(nn(nn({},e),{},{index:c}));if(r.push(Kr.default.cloneElement(d,{key:"original"+pm(d,c),"data-index":c,className:(0,dm.default)(y,m),tabIndex:"-1","aria-hidden":!y["slick-active"],style:nn(nn({outline:"none"},d.props.style||{}),p),onClick:function(f){d.props&&d.props.onClick&&d.props.onClick(f),e.focusOnSelect&&e.focusOnSelect(h)}})),e.infinite&&e.fade===!1){var w=o-c;w<=(0,hm.getPreClones)(e)&&o!==e.slidesToShow&&(n=-w,n>=a&&(d=l),y=fm(nn(nn({},e),{},{index:n})),i.push(Kr.default.cloneElement(d,{key:"precloned"+pm(d,n),"data-index":n,tabIndex:"-1",className:(0,dm.default)(y,m),"aria-hidden":!y["slick-active"],style:nn(nn({},d.props.style||{}),p),onClick:function(f){d.props&&d.props.onClick&&d.props.onClick(f),e.focusOnSelect&&e.focusOnSelect(h)}}))),o!==e.slidesToShow&&(n=o+c,n<u&&(d=l),y=fm(nn(nn({},e),{},{index:n})),s.push(Kr.default.cloneElement(d,{key:"postcloned"+pm(d,n),"data-index":n,tabIndex:"-1",className:(0,dm.default)(y,m),"aria-hidden":!y["slick-active"],style:nn(nn({},d.props.style||{}),p),onClick:function(f){d.props&&d.props.onClick&&d.props.onClick(f),e.focusOnSelect&&e.focusOnSelect(h)}})))}}),e.rtl?i.concat(r,s).reverse():i.concat(r,s)},eW=function(t){Kq(n,t);var e=Qq(n);function n(){var r;Hq(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Sy(wy(r),"node",null),Sy(wy(r),"handleRef",function(a){r.node=a}),r}return Gq(n,[{key:"render",value:function(){var i=Zq(this.props),s=this.props,o=s.onMouseEnter,a=s.onMouseOver,u=s.onMouseLeave,l={onMouseEnter:o,onMouseOver:a,onMouseLeave:u};return Kr.default.createElement("div",yy({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},l),i)}}]),n}(Kr.default.PureComponent);np.Track=eW;var rp={};function _y(t){return _y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_y(t)}Object.defineProperty(rp,"__esModule",{value:!0});rp.Dots=void 0;var Rc=fA(B.exports),tW=fA(Zl.exports),fI=V;function fA(t){return t&&t.__esModule?t:{default:t}}function pI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function nW(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?pI(Object(n),!0).forEach(function(r){rW(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pI(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function rW(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function iW(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function mI(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function sW(t,e,n){return e&&mI(t.prototype,e),n&&mI(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function oW(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Iy(t,e)}function Iy(t,e){return Iy=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Iy(t,e)}function aW(t){var e=cW();return function(){var r=hh(t),i;if(e){var s=hh(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return uW(this,i)}}function uW(t,e){if(e&&(_y(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return lW(t)}function lW(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function cW(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function hh(t){return hh=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},hh(t)}var dW=function(e){var n;return e.infinite?n=Math.ceil(e.slideCount/e.slidesToScroll):n=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,n},hW=function(t){oW(n,t);var e=aW(n);function n(){return iW(this,n),e.apply(this,arguments)}return sW(n,[{key:"clickHandler",value:function(i,s){s.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,s=i.onMouseEnter,o=i.onMouseOver,a=i.onMouseLeave,u=i.infinite,l=i.slidesToScroll,c=i.slidesToShow,d=i.slideCount,h=i.currentSlide,p=dW({slideCount:d,slidesToScroll:l,slidesToShow:c,infinite:u}),m={onMouseEnter:s,onMouseOver:o,onMouseLeave:a},y=[],w=0;w<p;w++){var g=(w+1)*l-1,f=u?g:(0,fI.clamp)(g,0,d-1),v=f-(l-1),S=u?v:(0,fI.clamp)(v,0,d-1),I=(0,tW.default)({"slick-active":u?h>=S&&h<=f:h===S}),k={message:"dots",index:w,slidesToScroll:l,currentSlide:h},C=this.clickHandler.bind(this,k);y=y.concat(Rc.default.createElement("li",{key:w,className:I},Rc.default.cloneElement(this.props.customPaging(w),{onClick:C})))}return Rc.default.cloneElement(this.props.appendDots(y),nW({className:this.props.dotsClass},m))}}]),n}(Rc.default.PureComponent);rp.Dots=hW;var ta={};function Ey(t){return Ey=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ey(t)}Object.defineProperty(ta,"__esModule",{value:!0});ta.PrevArrow=ta.NextArrow=void 0;var Ao=mA(B.exports),pA=mA(Zl.exports),fW=V;function mA(t){return t&&t.__esModule?t:{default:t}}function fh(){return fh=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fh.apply(this,arguments)}function gI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ph(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?gI(Object(n),!0).forEach(function(r){pW(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gI(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function pW(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function gA(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function yI(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function yA(t,e,n){return e&&yI(t.prototype,e),n&&yI(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function vA(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&by(t,e)}function by(t,e){return by=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},by(t,e)}function wA(t){var e=yW();return function(){var r=mh(t),i;if(e){var s=mh(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return mW(this,i)}}function mW(t,e){if(e&&(Ey(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return gW(t)}function gW(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function yW(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function mh(t){return mh=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},mh(t)}var vW=function(t){vA(n,t);var e=wA(n);function n(){return gA(this,n),e.apply(this,arguments)}return yA(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},s=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,s=null);var o={key:"0","data-role":"none",className:(0,pA.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},u;return this.props.prevArrow?u=Ao.default.cloneElement(this.props.prevArrow,ph(ph({},o),a)):u=Ao.default.createElement("button",fh({key:"0",type:"button"},o)," ","Previous"),u}}]),n}(Ao.default.PureComponent);ta.PrevArrow=vW;var wW=function(t){vA(n,t);var e=wA(n);function n(){return gA(this,n),e.apply(this,arguments)}return yA(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},s=this.clickHandler.bind(this,{message:"next"});(0,fW.canGoNext)(this.props)||(i["slick-disabled"]=!0,s=null);var o={key:"1","data-role":"none",className:(0,pA.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},u;return this.props.nextArrow?u=Ao.default.cloneElement(this.props.nextArrow,ph(ph({},o),a)):u=Ao.default.createElement("button",fh({key:"1",type:"button"},o)," ","Next"),u}}]),n}(Ao.default.PureComponent);ta.NextArrow=wW;var SA=function(){if(typeof Map<"u")return Map;function t(e,n){var r=-1;return e.some(function(i,s){return i[0]===n?(r=s,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var r=t(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},e.prototype.set=function(n,r){var i=t(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},e.prototype.delete=function(n){var r=this.__entries__,i=t(r,n);~i&&r.splice(i,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,s=this.__entries__;i<s.length;i++){var o=s[i];n.call(r,o[1],o[0])}},e}()}(),Ty=typeof window<"u"&&typeof document<"u"&&window.document===document,gh=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),SW=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(gh):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),_W=2;function IW(t,e){var n=!1,r=!1,i=0;function s(){n&&(n=!1,t()),r&&a()}function o(){SW(s)}function a(){var u=Date.now();if(n){if(u-i<_W)return;r=!0}else n=!0,r=!1,setTimeout(o,e);i=u}return a}var EW=20,bW=["top","right","bottom","left","width","height","size","weight"],TW=typeof MutationObserver<"u",kW=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=IW(this.refresh.bind(this),EW)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,r=n.indexOf(e);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!Ty||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),TW?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!Ty||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,r=n===void 0?"":n,i=bW.some(function(s){return!!~r.indexOf(s)});i&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),_A=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},na=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||gh},IA=ip(0,0,0,0);function yh(t){return parseFloat(t)||0}function vI(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(r,i){var s=t["border-"+i+"-width"];return r+yh(s)},0)}function xW(t){for(var e=["top","right","bottom","left"],n={},r=0,i=e;r<i.length;r++){var s=i[r],o=t["padding-"+s];n[s]=yh(o)}return n}function CW(t){var e=t.getBBox();return ip(0,0,e.width,e.height)}function OW(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return IA;var r=na(t).getComputedStyle(t),i=xW(r),s=i.left+i.right,o=i.top+i.bottom,a=yh(r.width),u=yh(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+s)!==e&&(a-=vI(r,"left","right")+s),Math.round(u+o)!==n&&(u-=vI(r,"top","bottom")+o)),!PW(t)){var l=Math.round(a+s)-e,c=Math.round(u+o)-n;Math.abs(l)!==1&&(a-=l),Math.abs(c)!==1&&(u-=c)}return ip(i.left,i.top,a,u)}var AW=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof na(t).SVGGraphicsElement}:function(t){return t instanceof na(t).SVGElement&&typeof t.getBBox=="function"}}();function PW(t){return t===na(t).document.documentElement}function RW(t){return Ty?AW(t)?CW(t):OW(t):IA}function NW(t){var e=t.x,n=t.y,r=t.width,i=t.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(s.prototype);return _A(o,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),o}function ip(t,e,n,r){return{x:t,y:e,width:n,height:r}}var DW=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ip(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=RW(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),LW=function(){function t(e,n){var r=NW(n);_A(this,{target:e,contentRect:r})}return t}(),$W=function(){function t(e,n,r){if(this.activeObservations_=[],this.observations_=new SA,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof na(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new DW(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof na(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;!n.has(e)||(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(!!this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new LW(r.target,r.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),EA=typeof WeakMap<"u"?new WeakMap:new SA,bA=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=kW.getInstance(),r=new $W(e,n,this);EA.set(this,r)}return t}();["observe","unobserve","disconnect"].forEach(function(t){bA.prototype[t]=function(){var e;return(e=EA.get(this))[t].apply(e,arguments)}});var MW=function(){return typeof gh.ResizeObserver<"u"?gh.ResizeObserver:bA}();const FW=Object.freeze(Object.defineProperty({__proto__:null,default:MW},Symbol.toStringTag,{value:"Module"})),UW=PA(FW);Object.defineProperty(ep,"__esModule",{value:!0});ep.InnerSlider=void 0;var Wt=ec(B.exports),VW=ec(nA),jW=ec(Rq),zW=ec(Zl.exports),Ve=V,BW=np,qW=rp,wI=ta,WW=ec(UW);function ec(t){return t&&t.__esModule?t:{default:t}}function vh(t){return vh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vh(t)}function wh(){return wh=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wh.apply(this,arguments)}function HW(t,e){if(t==null)return{};var n=GW(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function GW(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function SI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?SI(Object(n),!0).forEach(function(r){de(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):SI(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function KW(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function QW(t,e,n){return e&&_I(t.prototype,e),n&&_I(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function YW(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ky(t,e)}function ky(t,e){return ky=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ky(t,e)}function XW(t){var e=ZW();return function(){var r=Sh(t),i;if(e){var s=Sh(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return JW(this,i)}}function JW(t,e){if(e&&(vh(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ce(t)}function ce(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ZW(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Sh(t){return Sh=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Sh(t)}function de(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var eH=function(t){YW(n,t);var e=XW(n);function n(r){var i;KW(this,n),i=e.call(this,r),de(ce(i),"listRefHandler",function(o){return i.list=o}),de(ce(i),"trackRefHandler",function(o){return i.track=o}),de(ce(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var o=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,Ve.getHeight)(o)+"px"}}),de(ce(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var o=(0,Ve.getOnDemandLazySlides)(Z(Z({},i.props),i.state));o.length>0&&(i.setState(function(u){return{lazyLoadedList:u.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o))}var a=Z({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new WW.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(u){u.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,u.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),de(ce(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(o){return clearTimeout(o)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),de(ce(i),"componentDidUpdate",function(o){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,Ve.getOnDemandLazySlides)(Z(Z({},i.props),i.state));a.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var u=Z(Z({listRef:i.list,trackRef:i.track},i.props),i.state),l=i.didPropsChange(o);l&&i.updateState(u,l,function(){i.state.currentSlide>=Wt.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Wt.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),de(ce(i),"onWindowResized",function(o){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,jW.default)(function(){return i.resizeWindow(o)},50),i.debouncedResize()}),de(ce(i),"resizeWindow",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=Boolean(i.track&&i.track.node);if(!!a){var u=Z(Z({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(u,o,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),de(ce(i),"updateState",function(o,a,u){var l=(0,Ve.initializedState)(o);o=Z(Z(Z({},o),l),{},{slideIndex:l.currentSlide});var c=(0,Ve.getTrackLeft)(o);o=Z(Z({},o),{},{left:c});var d=(0,Ve.getTrackCSS)(o);(a||Wt.default.Children.count(i.props.children)!==Wt.default.Children.count(o.children))&&(l.trackStyle=d),i.setState(l,u)}),de(ce(i),"ssrInit",function(){if(i.props.variableWidth){var o=0,a=0,u=[],l=(0,Ve.getPreClones)(Z(Z(Z({},i.props),i.state),{},{slideCount:i.props.children.length})),c=(0,Ve.getPostClones)(Z(Z(Z({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(C){u.push(C.props.style.width),o+=C.props.style.width});for(var d=0;d<l;d++)a+=u[u.length-1-d],o+=u[u.length-1-d];for(var h=0;h<c;h++)o+=u[h];for(var p=0;p<i.state.currentSlide;p++)a+=u[p];var m={width:o+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(u[i.state.currentSlide],"px");m.left="calc(".concat(m.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:m}}var w=Wt.default.Children.count(i.props.children),g=Z(Z(Z({},i.props),i.state),{},{slideCount:w}),f=(0,Ve.getPreClones)(g)+(0,Ve.getPostClones)(g)+w,v=100/i.props.slidesToShow*f,S=100/f,I=-S*((0,Ve.getPreClones)(g)+i.state.currentSlide)*v/100;i.props.centerMode&&(I+=(100-S*v/100)/2);var k={width:v+"%",left:I+"%"};return{slideWidth:S+"%",trackStyle:k}}),de(ce(i),"checkImagesLoad",function(){var o=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=o.length,u=0;Array.prototype.forEach.call(o,function(l){var c=function(){return++u&&u>=a&&i.onWindowResized()};if(!l.onclick)l.onclick=function(){return l.parentNode.focus()};else{var d=l.onclick;l.onclick=function(){d(),l.parentNode.focus()}}l.onload||(i.props.lazyLoad?l.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(l.onload=c,l.onerror=function(){c(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),de(ce(i),"progressiveLazyLoad",function(){for(var o=[],a=Z(Z({},i.props),i.state),u=i.state.currentSlide;u<i.state.slideCount+(0,Ve.getPostClones)(a);u++)if(i.state.lazyLoadedList.indexOf(u)<0){o.push(u);break}for(var l=i.state.currentSlide-1;l>=-(0,Ve.getPreClones)(a);l--)if(i.state.lazyLoadedList.indexOf(l)<0){o.push(l);break}o.length>0?(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),de(ce(i),"slideHandler",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=i.props,l=u.asNavFor,c=u.beforeChange,d=u.onLazyLoad,h=u.speed,p=u.afterChange,m=i.state.currentSlide,y=(0,Ve.slideHandler)(Z(Z(Z({index:o},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),w=y.state,g=y.nextState;if(!!w){c&&c(m,w.currentSlide);var f=w.lazyLoadedList.filter(function(v){return i.state.lazyLoadedList.indexOf(v)<0});d&&f.length>0&&d(f),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),p&&p(m),delete i.animationEndCallback),i.setState(w,function(){l&&i.asNavForIndex!==o&&(i.asNavForIndex=o,l.innerSlider.slideHandler(o)),g&&(i.animationEndCallback=setTimeout(function(){var v=g.animating,S=HW(g,["animating"]);i.setState(S,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:v})},10)),p&&p(w.currentSlide),delete i.animationEndCallback})},h))})}}),de(ce(i),"changeSlide",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=Z(Z({},i.props),i.state),l=(0,Ve.changeSlide)(u,o);if(!(l!==0&&!l)&&(a===!0?i.slideHandler(l,a):i.slideHandler(l),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var c=i.list.querySelectorAll(".slick-current");c[0]&&c[0].focus()}}),de(ce(i),"clickHandler",function(o){i.clickable===!1&&(o.stopPropagation(),o.preventDefault()),i.clickable=!0}),de(ce(i),"keyHandler",function(o){var a=(0,Ve.keyHandler)(o,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),de(ce(i),"selectHandler",function(o){i.changeSlide(o)}),de(ce(i),"disableBodyScroll",function(){var o=function(u){u=u||window.event,u.preventDefault&&u.preventDefault(),u.returnValue=!1};window.ontouchmove=o}),de(ce(i),"enableBodyScroll",function(){window.ontouchmove=null}),de(ce(i),"swipeStart",function(o){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,Ve.swipeStart)(o,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),de(ce(i),"swipeMove",function(o){var a=(0,Ve.swipeMove)(o,Z(Z(Z({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));!a||(a.swiping&&(i.clickable=!1),i.setState(a))}),de(ce(i),"swipeEnd",function(o){var a=(0,Ve.swipeEnd)(o,Z(Z(Z({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(!!a){var u=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),u!==void 0&&(i.slideHandler(u),i.props.verticalSwiping&&i.enableBodyScroll())}}),de(ce(i),"touchEnd",function(o){i.swipeEnd(o),i.clickable=!0}),de(ce(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),de(ce(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),de(ce(i),"slickGoTo",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o=Number(o),isNaN(o))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:o,currentSlide:i.state.currentSlide},a)},0))}),de(ce(i),"play",function(){var o;if(i.props.rtl)o=i.state.currentSlide-i.props.slidesToScroll;else if((0,Ve.canGoNext)(Z(Z({},i.props),i.state)))o=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(o)}),de(ce(i),"autoPlay",function(o){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(o==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(o==="leave"){if(a==="paused"||a==="focused")return}else if(o==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),de(ce(i),"pause",function(o){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;o==="paused"?i.setState({autoplaying:"paused"}):o==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),de(ce(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),de(ce(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),de(ce(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),de(ce(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),de(ce(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),de(ce(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),de(ce(i),"render",function(){var o=(0,zW.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=Z(Z({},i.props),i.state),u=(0,Ve.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),l=i.props.pauseOnHover;u=Z(Z({},u),{},{onMouseEnter:l?i.onTrackOver:null,onMouseLeave:l?i.onTrackLeave:null,onMouseOver:l?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var c;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var d=(0,Ve.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),h=i.props.pauseOnDotsHover;d=Z(Z({},d),{},{clickHandler:i.changeSlide,onMouseEnter:h?i.onDotsLeave:null,onMouseOver:h?i.onDotsOver:null,onMouseLeave:h?i.onDotsLeave:null}),c=Wt.default.createElement(qW.Dots,d)}var p,m,y=(0,Ve.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(p=Wt.default.createElement(wI.PrevArrow,y),m=Wt.default.createElement(wI.NextArrow,y));var w=null;i.props.vertical&&(w={height:i.state.listHeight});var g=null;i.props.vertical===!1?i.props.centerMode===!0&&(g={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(g={padding:i.props.centerPadding+" 0px"});var f=Z(Z({},w),g),v=i.props.touchMove,S={className:"slick-list",style:f,onClick:i.clickHandler,onMouseDown:v?i.swipeStart:null,onMouseMove:i.state.dragging&&v?i.swipeMove:null,onMouseUp:v?i.swipeEnd:null,onMouseLeave:i.state.dragging&&v?i.swipeEnd:null,onTouchStart:v?i.swipeStart:null,onTouchMove:i.state.dragging&&v?i.swipeMove:null,onTouchEnd:v?i.touchEnd:null,onTouchCancel:i.state.dragging&&v?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},I={className:o,dir:"ltr",style:i.props.style};return i.props.unslick&&(S={className:"slick-list"},I={className:o}),Wt.default.createElement("div",I,i.props.unslick?"":p,Wt.default.createElement("div",wh({ref:i.listRefHandler},S),Wt.default.createElement(BW.Track,wh({ref:i.trackRefHandler},u),i.props.children)),i.props.unslick?"":m,i.props.unslick?"":c)}),i.list=null,i.track=null,i.state=Z(Z({},VW.default),{},{currentSlide:i.props.initialSlide,slideCount:Wt.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var s=i.ssrInit();return i.state=Z(Z({},i.state),s),i}return QW(n,[{key:"didPropsChange",value:function(i){for(var s=!1,o=0,a=Object.keys(this.props);o<a.length;o++){var u=a[o];if(!i.hasOwnProperty(u)){s=!0;break}if(!(vh(i[u])==="object"||typeof i[u]=="function")&&i[u]!==this.props[u]){s=!0;break}}return s||Wt.default.Children.count(this.props.children)!==Wt.default.Children.count(i.children)}}]),n}(Wt.default.Component);ep.InnerSlider=eH;var tH=function(t){return t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},nH=tH,rH=nH,iH=function(t){var e=/[height|width]$/;return e.test(t)},II=function(t){var e="",n=Object.keys(t);return n.forEach(function(r,i){var s=t[r];r=rH(r),iH(r)&&typeof s=="number"&&(s=s+"px"),s===!0?e+=r:s===!1?e+="not "+r:e+="("+r+": "+s+")",i<n.length-1&&(e+=" and ")}),e},sH=function(t){var e="";return typeof t=="string"?t:t instanceof Array?(t.forEach(function(n,r){e+=II(n),r<t.length-1&&(e+=", ")}),e):II(t)},oH=sH,TA={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(B.exports);function n(s){return s&&s.__esModule?s:{default:s}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(o){return e.default.createElement("ul",{style:{display:"block"}},o)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(o){return e.default.createElement("button",null,o+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;t.default=i})(TA);var mm,EI;function aH(){if(EI)return mm;EI=1;function t(e){this.options=e,!e.deferSetup&&this.setup()}return t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},mm=t,mm}var gm,bI;function kA(){if(bI)return gm;bI=1;function t(r,i){var s=0,o=r.length,a;for(s;s<o&&(a=i(r[s],s),a!==!1);s++);}function e(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return gm={isFunction:n,isArray:e,each:t},gm}var ym,TI;function uH(){if(TI)return ym;TI=1;var t=aH(),e=kA().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var s=this;this.listener=function(o){s.mql=o.currentTarget||o,s.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new t(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;e(i,function(s,o){if(s.equals(r))return s.destroy(),!i.splice(o,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";e(this.handlers,function(i){i[r]()})}},ym=n,ym}var vm,kI;function lH(){if(kI)return vm;kI=1;var t=uH(),e=kA(),n=e.each,r=e.isFunction,i=e.isArray;function s(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return s.prototype={constructor:s,register:function(o,a,u){var l=this.queries,c=u&&this.browserIsIncapable;return l[o]||(l[o]=new t(o,c)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(d){r(d)&&(d={match:d}),l[o].addHandler(d)}),this},unregister:function(o,a){var u=this.queries[o];return u&&(a?u.removeHandler(a):(u.clear(),delete this.queries[o])),this}},vm=s,vm}var wm,xI;function cH(){if(xI)return wm;xI=1;var t=lH();return wm=new t,wm}(function(t){function e(b){return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},e(b)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(B.exports),r=ep,i=a(oH),s=a(TA),o=V;function a(b){return b&&b.__esModule?b:{default:b}}function u(){return u=Object.assign||function(b){for(var P=1;P<arguments.length;P++){var D=arguments[P];for(var Q in D)Object.prototype.hasOwnProperty.call(D,Q)&&(b[Q]=D[Q])}return b},u.apply(this,arguments)}function l(b,P){var D=Object.keys(b);if(Object.getOwnPropertySymbols){var Q=Object.getOwnPropertySymbols(b);P&&(Q=Q.filter(function(W){return Object.getOwnPropertyDescriptor(b,W).enumerable})),D.push.apply(D,Q)}return D}function c(b){for(var P=1;P<arguments.length;P++){var D=arguments[P]!=null?arguments[P]:{};P%2?l(Object(D),!0).forEach(function(Q){I(b,Q,D[Q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(D)):l(Object(D)).forEach(function(Q){Object.defineProperty(b,Q,Object.getOwnPropertyDescriptor(D,Q))})}return b}function d(b,P){if(!(b instanceof P))throw new TypeError("Cannot call a class as a function")}function h(b,P){for(var D=0;D<P.length;D++){var Q=P[D];Q.enumerable=Q.enumerable||!1,Q.configurable=!0,"value"in Q&&(Q.writable=!0),Object.defineProperty(b,Q.key,Q)}}function p(b,P,D){return P&&h(b.prototype,P),D&&h(b,D),Object.defineProperty(b,"prototype",{writable:!1}),b}function m(b,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(P&&P.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),Object.defineProperty(b,"prototype",{writable:!1}),P&&y(b,P)}function y(b,P){return y=Object.setPrototypeOf||function(Q,W){return Q.__proto__=W,Q},y(b,P)}function w(b){var P=v();return function(){var Q=S(b),W;if(P){var H=S(this).constructor;W=Reflect.construct(Q,arguments,H)}else W=Q.apply(this,arguments);return g(this,W)}}function g(b,P){if(P&&(e(P)==="object"||typeof P=="function"))return P;if(P!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return f(b)}function f(b){if(b===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b}function v(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function S(b){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(D){return D.__proto__||Object.getPrototypeOf(D)},S(b)}function I(b,P,D){return P in b?Object.defineProperty(b,P,{value:D,enumerable:!0,configurable:!0,writable:!0}):b[P]=D,b}var k=(0,o.canUseDOM)()&&cH(),C=function(b){m(D,b);var P=w(D);function D(Q){var W;return d(this,D),W=P.call(this,Q),I(f(W),"innerSliderRefHandler",function(H){return W.innerSlider=H}),I(f(W),"slickPrev",function(){return W.innerSlider.slickPrev()}),I(f(W),"slickNext",function(){return W.innerSlider.slickNext()}),I(f(W),"slickGoTo",function(H){var Xe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return W.innerSlider.slickGoTo(H,Xe)}),I(f(W),"slickPause",function(){return W.innerSlider.pause("paused")}),I(f(W),"slickPlay",function(){return W.innerSlider.autoPlay("play")}),W.state={breakpoint:null},W._responsiveMediaHandlers=[],W}return p(D,[{key:"media",value:function(W,H){k.register(W,H),this._responsiveMediaHandlers.push({query:W,handler:H})}},{key:"componentDidMount",value:function(){var W=this;if(this.props.responsive){var H=this.props.responsive.map(function(ge){return ge.breakpoint});H.sort(function(ge,st){return ge-st}),H.forEach(function(ge,st){var We;st===0?We=(0,i.default)({minWidth:0,maxWidth:ge}):We=(0,i.default)({minWidth:H[st-1]+1,maxWidth:ge}),(0,o.canUseDOM)()&&W.media(We,function(){W.setState({breakpoint:ge})})});var Xe=(0,i.default)({minWidth:H.slice(-1)[0]});(0,o.canUseDOM)()&&this.media(Xe,function(){W.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(W){k.unregister(W.query,W.handler)})}},{key:"render",value:function(){var W=this,H,Xe;this.state.breakpoint?(Xe=this.props.responsive.filter(function(j){return j.breakpoint===W.state.breakpoint}),H=Xe[0].settings==="unslick"?"unslick":c(c(c({},s.default),this.props),Xe[0].settings)):H=c(c({},s.default),this.props),H.centerMode&&(H.slidesToScroll>1,H.slidesToScroll=1),H.fade&&(H.slidesToShow>1,H.slidesToScroll>1,H.slidesToShow=1,H.slidesToScroll=1);var ge=n.default.Children.toArray(this.props.children);ge=ge.filter(function(j){return typeof j=="string"?!!j.trim():!!j}),H.variableWidth&&(H.rows>1||H.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),H.variableWidth=!1);for(var st=[],We=null,L=0;L<ge.length;L+=H.rows*H.slidesPerRow){for(var J=[],X=L;X<L+H.rows*H.slidesPerRow;X+=H.slidesPerRow){for(var _e=[],$=X;$<X+H.slidesPerRow&&(H.variableWidth&&ge[$].props.style&&(We=ge[$].props.style.width),!($>=ge.length));$+=1)_e.push(n.default.cloneElement(ge[$],{key:100*L+10*X+$,tabIndex:-1,style:{width:"".concat(100/H.slidesPerRow,"%"),display:"inline-block"}}));J.push(n.default.createElement("div",{key:10*L+X},_e))}H.variableWidth?st.push(n.default.createElement("div",{key:L,style:{width:We}},J)):st.push(n.default.createElement("div",{key:L},J))}if(H==="unslick"){var z="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:z},ge)}else st.length<=H.slidesToShow&&(H.unslick=!0);return n.default.createElement(r.InnerSlider,u({style:this.props.style,ref:this.innerSliderRefHandler},H),st)}}]),D}(n.default.Component);t.default=C})(tA);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(tA);function n(i){return i&&i.__esModule?i:{default:i}}var r=e.default;t.default=r})(eA);const dH=CI(eA),hH=()=>le(fH,{...{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0},children:[x(Nc,{children:x("a",{children:x("img",{src:"/images/slider-badging.jpg",alt:""})})}),x(Nc,{children:x("a",{children:x("img",{src:"/images/slider-badag.jpg",alt:""})})}),x(Nc,{children:x("a",{children:x("img",{src:"/images/slider-scale.jpg",alt:""})})}),x(Nc,{children:x("a",{children:x("img",{src:"/images/slider-scales.jpg",alt:""})})})]}),fH=se(dH)`
    margin-top: 20px;
    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -75px;
    }

    .slick-next {
        right: -75px;
    }

`,Nc=se.div`
    cursor: pointer;
    border-radius:4px;
    position: relative;
    a {
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;
    }
    img{
        width: 100%;
        height: 100%;
    }

    &:hover {
        padding: 0;
        border: 4px solid rgba(249, 249, 249, 0.8);
        transition-duration: 300ms;
    }


`,pH=()=>le(mH,{children:[le(Wa,{children:[x("img",{src:"/images/viewers-disney.png",alt:""}),x("video",{autoPlay:!0,loop:!0,playsInline:!0,children:x("source",{src:"/videos/1564674844-disney.mp4",type:"video/mp4"})})]}),le(Wa,{children:[x("img",{src:"/images/viewers-pixar.png",alt:""}),x("video",{autoPlay:!0,loop:!0,playsInline:!0,children:x("source",{src:"/videos/1564676714-pixar.mp4",type:"video/mp4"})})]}),le(Wa,{children:[x("img",{src:"/images/viewers-marvel.png",alt:""}),x("video",{autoPlay:!0,loop:!0,playsInline:!0,children:x("source",{src:"/videos/1564676115-marvel.mp4",type:"video/mp4"})})]}),le(Wa,{children:[x("img",{src:"/images/viewers-starwars.png",alt:""}),x("video",{autoPlay:!0,loop:!0,playsInline:!0,children:x("source",{src:"/videos/1608229455-star-wars.mp4",type:"video/mp4"})})]}),le(Wa,{children:[x("img",{src:"/images/viewers-national.png",alt:""}),x("video",{autoPlay:!0,loop:!0,playsInline:!0,children:x("source",{src:"/videos/1564676296-national-geographic.mp4",type:"video/mp4"})})]})]}),mH=se.div`
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

`,Wa=se.div`
    padding-top:56.25%;
    border-radius: 10px;
    cursor: pointer;
    position:relative;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img {
        inset: 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        opacity:1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        z-index: 1;
        top: 0;
    }

    video{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;

        border-color: rgba(249, 249, 249, 0.8);
        video{
            opacity: 1;
        }
    }
`,gH={recomended:null,newDisney:null,original:null,trending:null},xA=QO({name:"movie",initialState:gH,reducers:{setMovies:(t,e)=>{t.recomended=e.payload.recomended,t.newDisney=e.payload.newDisney,t.original=e.payload.original,t.trending=e.payload.trending}}}),{setMovies:yH}=xA.actions,vH=t=>t.movie.recomended,wH=t=>t.movie.newDisney,SH=t=>t.movie.original,_H=t=>t.movie.trending,IH=xA.reducer,EH=()=>{const t=Ss(vH);return le(bH,{children:[x("h4",{children:"Recommended for You"}),x(TH,{children:t&&t.map((e,n)=>le(kH,{children:[e.id,x(lf,{to:`/detail/${e.id}`,children:x("img",{src:e.cardImg,alt:e.title})})]},n))})]})},bH=se.div`
    padding: 0 0 26px;
        h4{
        margin-bottom:20px;
    }
`,TH=se.div`
    display:grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`,kH=se.div`
    padding-top:56.25%;
    border-radius: 10px;
    cursor: pointer;
    position:relative;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img {
        inset: 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        opacity:1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        z-index: 1;
        top: 0;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;

        border-color: rgba(249, 249, 249, 0.8);
        img{
            opacity: 0.3;
        }
    }
`,xH=()=>{const t=Ss(wH);return le(CH,{children:[x("h4",{children:"New on Disney"}),x(OH,{children:t&&t.map((e,n)=>le(AH,{children:[e.id,x(lf,{to:`/detail/${e.id}`,children:x("img",{src:e.cardImg,alt:e.title})})]},n))})]})},CH=se.div`
    padding: 0 0 26px;
        h4{
        margin-bottom:20px;
    }
`,OH=se.div`
    display:grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`,AH=se.div`
    padding-top:56.25%;
    border-radius: 10px;
    cursor: pointer;
    position:relative;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img {
        inset: 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        opacity:1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        z-index: 1;
        top: 0;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;

        border-color: rgba(249, 249, 249, 0.8);
        img{
            opacity: 0.3;
        }
    }
`,PH=()=>{const t=Ss(SH);return le(RH,{children:[x("h4",{children:"Originals"}),x(NH,{children:t&&t.map((e,n)=>le(DH,{children:[e.id,x(lf,{to:`/detail/${e.id}`,children:x("img",{src:e.cardImg,alt:e.title})})]},n))})]})},RH=se.div`
    padding: 0 0 26px;
    h4{
        margin-bottom:20px;
    }
`,NH=se.div`
    display:grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`,DH=se.div`
    padding-top:56.25%;
    border-radius: 10px;
    cursor: pointer;
    position:relative;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img {
        inset: 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        opacity:1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        z-index: 1;
        top: 0;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;

        border-color: rgba(249, 249, 249, 0.8);
        img{
            opacity: 0.3;
        }
    }
`,LH=()=>{const t=Ss(_H);return le($H,{children:[x("h4",{children:"Trendings"}),x(MH,{children:t&&t.map((e,n)=>le(FH,{children:[e.id,x(lf,{to:`/detail/${e.id}`,children:x("img",{src:e.cardImg,alt:e.title})})]},n))})]})},$H=se.div`
    padding: 0 0 26px;
        h4{
        margin-bottom:20px;
    }
`,MH=se.div`
    display:grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`,FH=se.div`
    padding-top:56.25%;
    border-radius: 10px;
    cursor: pointer;
    position:relative;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img {
        inset: 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        opacity:1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        z-index: 1;
        top: 0;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;

        border-color: rgba(249, 249, 249, 0.8);
        img{
            opacity: 0.3;
        }
    }
`,UH=()=>{const t=Xb(),e=Ss(XO);let n=[],r=[],i=[],s=[];return B.exports.useEffect(()=>{ay.collection("movies").onSnapshot(o=>{o.docs.map(a=>{switch(a.data().type){case"recommend":n=[...n,{id:a.id,...a.data()}];break;case"new":r=[...r,{id:a.id,...a.data()}];break;case"original":i=[...i,{id:a.id,...a.data()}];break;case"trending":s=[...s,{id:a.id,...a.data()}];break}}),t(yH({recomended:n,newDisney:r,original:i,trending:s}))})},[e]),le(VH,{children:[x(hH,{}),x(pH,{}),x(EH,{}),x(xH,{}),x(PH,{}),x(LH,{})]})},VH=se.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    &:after{
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`,jH=()=>{const{id:t}=RD(),[e,n]=B.exports.useState({});return console.log(ay.collection("movies").doc(t)),B.exports.useEffect(()=>{ay.collection("movies").doc(t).get().then(r=>{r.exists?n(r.data()):console.log("No such document!")}).catch(r=>{console.log("Error getting document:",r)})},[t]),le(zH,{children:[x(BH,{children:x("img",{src:e.backgroundImg,alt:e.title})}),x(qH,{children:x("img",{src:e.cardImg,alt:""})}),le(WH,{children:[le(HH,{children:[le(CA,{children:[x("img",{src:"/images/play-icon-black.png",alt:""}),x("span",{children:"Play"})]}),le(GH,{children:[x("img",{src:"/images/play-icon-white.png",alt:""}),x("span",{children:"Trailer"})]}),le(OA,{children:[x("span",{}),x("span",{})]}),x(KH,{children:x("div",{children:x("img",{src:"/images/group-icon.png",alt:""})})})]}),x(QH,{children:e.subTitle}),x(YH,{children:e.description})]})]})},zH=se.div`
    position:relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display:block;
    top:72px;
    padding: 0 calc(3.5vw + 5px);
`,BH=se.div`
    left: 0;
    opacity: 0.8;
    position: fixed;
    right: 0;
    top: 0;
    z-index: -1;
    img {
        width: 100vw;
        height: 100vh;
        @media (max-width: 768px) {
            width: initial;
        }

    }
`,qH=se.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0 auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;
    img {
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }

`,WH=se.div`
    max-width: 874px;    
`,HH=se.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0;
    min-height: 56px;

`,CA=se.button`
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    cursor: pointer;
    text-transform: uppercase;
    background: rgb(249, 249, 249);
    border: none;
    color: rgb(0, 0, 0);
    img {
        width: 32px;
    }
    &:hover {
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        margin: 0px 10px 0px 0px;
        font-size: 12px;
        letter-spacing: 1.42px;
        img {
            width: 25px;
        }
    }

`,GH=se(CA)`
    background: rgba(0, 0, 0, 0.3);
    border: 2px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);

`,OA=se.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    span {
        background-color: rgb(249, 249, 249);
        display: inline-block;
        &:first-child {
            height: 2px;
            transform: translate(1px, 0px) rotate(0deg);
            width: 16px;
        }
        &:nth-child(2) {
            height: 16px;
            transform: translateX(-8px) rotate(0deg);
            width: 2px;
        }
    }
`,KH=se(OA)`
`,QH=se.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`,YH=se.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);
    max-width: 760px;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`,XH=()=>x("div",{className:"App",children:le(HD,{children:[x(eq,{}),le(jD,{children:[x(Hc,{excat:!0,path:"/",element:x(oq,{})}),x(Hc,{path:"/home",element:x(UH,{})}),x(Hc,{path:"/detail/:id",element:x(jH,{})})]})]})}),JH=W3({reducer:{user:Z3,movie:IH}});_m.createRoot(document.getElementById("root")).render(x(ia.StrictMode,{children:x(WN,{store:JH,children:x(XH,{})})}));
