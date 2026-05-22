(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function vv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Zd={exports:{}},el={},ef={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function Ux(){if(py)return ke;py=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function I(M){return M===null||typeof M!="object"?null:(M=x&&M[x]||M["@@iterator"],typeof M=="function"?M:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,F={};function N(M,Y,Re){this.props=M,this.context=Y,this.refs=F,this.updater=Re||V}N.prototype.isReactComponent={},N.prototype.setState=function(M,Y){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Y,"setState")},N.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function Q(){}Q.prototype=N.prototype;function J(M,Y,Re){this.props=M,this.context=Y,this.refs=F,this.updater=Re||V}var re=J.prototype=new Q;re.constructor=J,L(re,N.prototype),re.isPureReactComponent=!0;var me=Array.isArray,_e=Object.prototype.hasOwnProperty,we={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function R(M,Y,Re){var Ae,Ne={},De=null,Be=null;if(Y!=null)for(Ae in Y.ref!==void 0&&(Be=Y.ref),Y.key!==void 0&&(De=""+Y.key),Y)_e.call(Y,Ae)&&!k.hasOwnProperty(Ae)&&(Ne[Ae]=Y[Ae]);var Me=arguments.length-2;if(Me===1)Ne.children=Re;else if(1<Me){for(var qe=Array(Me),Qt=0;Qt<Me;Qt++)qe[Qt]=arguments[Qt+2];Ne.children=qe}if(M&&M.defaultProps)for(Ae in Me=M.defaultProps,Me)Ne[Ae]===void 0&&(Ne[Ae]=Me[Ae]);return{$$typeof:n,type:M,key:De,ref:Be,props:Ne,_owner:we.current}}function A(M,Y){return{$$typeof:n,type:M.type,key:Y,ref:M.ref,props:M.props,_owner:M._owner}}function D(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function b(M){var Y={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(Re){return Y[Re]})}var j=/\/+/g;function C(M,Y){return typeof M=="object"&&M!==null&&M.key!=null?b(""+M.key):Y.toString(36)}function Ke(M,Y,Re,Ae,Ne){var De=typeof M;(De==="undefined"||De==="boolean")&&(M=null);var Be=!1;if(M===null)Be=!0;else switch(De){case"string":case"number":Be=!0;break;case"object":switch(M.$$typeof){case n:case e:Be=!0}}if(Be)return Be=M,Ne=Ne(Be),M=Ae===""?"."+C(Be,0):Ae,me(Ne)?(Re="",M!=null&&(Re=M.replace(j,"$&/")+"/"),Ke(Ne,Y,Re,"",function(Qt){return Qt})):Ne!=null&&(D(Ne)&&(Ne=A(Ne,Re+(!Ne.key||Be&&Be.key===Ne.key?"":(""+Ne.key).replace(j,"$&/")+"/")+M)),Y.push(Ne)),1;if(Be=0,Ae=Ae===""?".":Ae+":",me(M))for(var Me=0;Me<M.length;Me++){De=M[Me];var qe=Ae+C(De,Me);Be+=Ke(De,Y,Re,qe,Ne)}else if(qe=I(M),typeof qe=="function")for(M=qe.call(M),Me=0;!(De=M.next()).done;)De=De.value,qe=Ae+C(De,Me++),Be+=Ke(De,Y,Re,qe,Ne);else if(De==="object")throw Y=String(M),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return Be}function Tt(M,Y,Re){if(M==null)return M;var Ae=[],Ne=0;return Ke(M,Ae,"","",function(De){return Y.call(Re,De,Ne++)}),Ae}function jt(M){if(M._status===-1){var Y=M._result;Y=Y(),Y.then(function(Re){(M._status===0||M._status===-1)&&(M._status=1,M._result=Re)},function(Re){(M._status===0||M._status===-1)&&(M._status=2,M._result=Re)}),M._status===-1&&(M._status=0,M._result=Y)}if(M._status===1)return M._result.default;throw M._result}var et={current:null},ie={transition:null},pe={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:ie,ReactCurrentOwner:we};function le(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:Tt,forEach:function(M,Y,Re){Tt(M,function(){Y.apply(this,arguments)},Re)},count:function(M){var Y=0;return Tt(M,function(){Y++}),Y},toArray:function(M){return Tt(M,function(Y){return Y})||[]},only:function(M){if(!D(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},ke.Component=N,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=J,ke.StrictMode=i,ke.Suspense=p,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,ke.act=le,ke.cloneElement=function(M,Y,Re){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var Ae=L({},M.props),Ne=M.key,De=M.ref,Be=M._owner;if(Y!=null){if(Y.ref!==void 0&&(De=Y.ref,Be=we.current),Y.key!==void 0&&(Ne=""+Y.key),M.type&&M.type.defaultProps)var Me=M.type.defaultProps;for(qe in Y)_e.call(Y,qe)&&!k.hasOwnProperty(qe)&&(Ae[qe]=Y[qe]===void 0&&Me!==void 0?Me[qe]:Y[qe])}var qe=arguments.length-2;if(qe===1)Ae.children=Re;else if(1<qe){Me=Array(qe);for(var Qt=0;Qt<qe;Qt++)Me[Qt]=arguments[Qt+2];Ae.children=Me}return{$$typeof:n,type:M.type,key:Ne,ref:De,props:Ae,_owner:Be}},ke.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:l,_context:M},M.Consumer=M},ke.createElement=R,ke.createFactory=function(M){var Y=R.bind(null,M);return Y.type=M,Y},ke.createRef=function(){return{current:null}},ke.forwardRef=function(M){return{$$typeof:d,render:M}},ke.isValidElement=D,ke.lazy=function(M){return{$$typeof:_,_payload:{_status:-1,_result:M},_init:jt}},ke.memo=function(M,Y){return{$$typeof:y,type:M,compare:Y===void 0?null:Y}},ke.startTransition=function(M){var Y=ie.transition;ie.transition={};try{M()}finally{ie.transition=Y}},ke.unstable_act=le,ke.useCallback=function(M,Y){return et.current.useCallback(M,Y)},ke.useContext=function(M){return et.current.useContext(M)},ke.useDebugValue=function(){},ke.useDeferredValue=function(M){return et.current.useDeferredValue(M)},ke.useEffect=function(M,Y){return et.current.useEffect(M,Y)},ke.useId=function(){return et.current.useId()},ke.useImperativeHandle=function(M,Y,Re){return et.current.useImperativeHandle(M,Y,Re)},ke.useInsertionEffect=function(M,Y){return et.current.useInsertionEffect(M,Y)},ke.useLayoutEffect=function(M,Y){return et.current.useLayoutEffect(M,Y)},ke.useMemo=function(M,Y){return et.current.useMemo(M,Y)},ke.useReducer=function(M,Y,Re){return et.current.useReducer(M,Y,Re)},ke.useRef=function(M){return et.current.useRef(M)},ke.useState=function(M){return et.current.useState(M)},ke.useSyncExternalStore=function(M,Y,Re){return et.current.useSyncExternalStore(M,Y,Re)},ke.useTransition=function(){return et.current.useTransition()},ke.version="18.3.1",ke}var my;function tp(){return my||(my=1,ef.exports=Ux()),ef.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function Bx(){if(gy)return el;gy=1;var n=tp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,y){var _,x={},I=null,V=null;y!==void 0&&(I=""+y),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(V=p.ref);for(_ in p)i.call(p,_)&&!l.hasOwnProperty(_)&&(x[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)x[_]===void 0&&(x[_]=p[_]);return{$$typeof:e,type:d,key:I,ref:V,props:x,_owner:o.current}}return el.Fragment=t,el.jsx=u,el.jsxs=u,el}var yy;function zx(){return yy||(yy=1,Zd.exports=Bx()),Zd.exports}var w=zx(),W=tp();const $x=vv(W);var oc={},tf={exports:{}},rn={},nf={exports:{}},rf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y;function Hx(){return _y||(_y=1,(function(n){function e(ie,pe){var le=ie.length;ie.push(pe);e:for(;0<le;){var M=le-1>>>1,Y=ie[M];if(0<o(Y,pe))ie[M]=pe,ie[le]=Y,le=M;else break e}}function t(ie){return ie.length===0?null:ie[0]}function i(ie){if(ie.length===0)return null;var pe=ie[0],le=ie.pop();if(le!==pe){ie[0]=le;e:for(var M=0,Y=ie.length,Re=Y>>>1;M<Re;){var Ae=2*(M+1)-1,Ne=ie[Ae],De=Ae+1,Be=ie[De];if(0>o(Ne,le))De<Y&&0>o(Be,Ne)?(ie[M]=Be,ie[De]=le,M=De):(ie[M]=Ne,ie[Ae]=le,M=Ae);else if(De<Y&&0>o(Be,le))ie[M]=Be,ie[De]=le,M=De;else break e}}return pe}function o(ie,pe){var le=ie.sortIndex-pe.sortIndex;return le!==0?le:ie.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var p=[],y=[],_=1,x=null,I=3,V=!1,L=!1,F=!1,N=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function re(ie){for(var pe=t(y);pe!==null;){if(pe.callback===null)i(y);else if(pe.startTime<=ie)i(y),pe.sortIndex=pe.expirationTime,e(p,pe);else break;pe=t(y)}}function me(ie){if(F=!1,re(ie),!L)if(t(p)!==null)L=!0,jt(_e);else{var pe=t(y);pe!==null&&et(me,pe.startTime-ie)}}function _e(ie,pe){L=!1,F&&(F=!1,Q(R),R=-1),V=!0;var le=I;try{for(re(pe),x=t(p);x!==null&&(!(x.expirationTime>pe)||ie&&!b());){var M=x.callback;if(typeof M=="function"){x.callback=null,I=x.priorityLevel;var Y=M(x.expirationTime<=pe);pe=n.unstable_now(),typeof Y=="function"?x.callback=Y:x===t(p)&&i(p),re(pe)}else i(p);x=t(p)}if(x!==null)var Re=!0;else{var Ae=t(y);Ae!==null&&et(me,Ae.startTime-pe),Re=!1}return Re}finally{x=null,I=le,V=!1}}var we=!1,k=null,R=-1,A=5,D=-1;function b(){return!(n.unstable_now()-D<A)}function j(){if(k!==null){var ie=n.unstable_now();D=ie;var pe=!0;try{pe=k(!0,ie)}finally{pe?C():(we=!1,k=null)}}else we=!1}var C;if(typeof J=="function")C=function(){J(j)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,Tt=Ke.port2;Ke.port1.onmessage=j,C=function(){Tt.postMessage(null)}}else C=function(){N(j,0)};function jt(ie){k=ie,we||(we=!0,C())}function et(ie,pe){R=N(function(){ie(n.unstable_now())},pe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){L||V||(L=!0,jt(_e))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ie){switch(I){case 1:case 2:case 3:var pe=3;break;default:pe=I}var le=I;I=pe;try{return ie()}finally{I=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,pe){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var le=I;I=ie;try{return pe()}finally{I=le}},n.unstable_scheduleCallback=function(ie,pe,le){var M=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?M+le:M):le=M,ie){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=le+Y,ie={id:_++,callback:pe,priorityLevel:ie,startTime:le,expirationTime:Y,sortIndex:-1},le>M?(ie.sortIndex=le,e(y,ie),t(p)===null&&ie===t(y)&&(F?(Q(R),R=-1):F=!0,et(me,le-M))):(ie.sortIndex=Y,e(p,ie),L||V||(L=!0,jt(_e))),ie},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(ie){var pe=I;return function(){var le=I;I=pe;try{return ie.apply(this,arguments)}finally{I=le}}}})(rf)),rf}var vy;function qx(){return vy||(vy=1,nf.exports=Hx()),nf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy;function Wx(){if(wy)return rn;wy=1;var n=tp(),e=qx();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){u(r,s),u(r+"Capture",s)}function u(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function I(r){return p.call(x,r)?!0:p.call(_,r)?!1:y.test(r)?x[r]=!0:(_[r]=!0,!1)}function V(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function L(r,s,a,h){if(s===null||typeof s>"u"||V(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function F(r,s,a,h,f,m,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=m,this.removeEmptyString=E}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){N[r]=new F(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];N[s]=new F(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){N[r]=new F(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){N[r]=new F(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){N[r]=new F(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){N[r]=new F(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){N[r]=new F(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){N[r]=new F(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){N[r]=new F(r,5,!1,r.toLowerCase(),null,!1,!1)});var Q=/[\-:]([a-z])/g;function J(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(Q,J);N[s]=new F(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(Q,J);N[s]=new F(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(Q,J);N[s]=new F(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){N[r]=new F(r,1,!1,r.toLowerCase(),null,!1,!1)}),N.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){N[r]=new F(r,1,!1,r.toLowerCase(),null,!0,!0)});function re(r,s,a,h){var f=N.hasOwnProperty(s)?N[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(L(s,a,f,h)&&(a=null),h||f===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,h=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var me=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_e=Symbol.for("react.element"),we=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),b=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),Tt=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),et=Symbol.for("react.offscreen"),ie=Symbol.iterator;function pe(r){return r===null||typeof r!="object"?null:(r=ie&&r[ie]||r["@@iterator"],typeof r=="function"?r:null)}var le=Object.assign,M;function Y(r){if(M===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);M=s&&s[1]||""}return`
`+M+r}var Re=!1;function Ae(r,s){if(!r||Re)return"";Re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch($){var h=$}Reflect.construct(r,[],s)}else{try{s.call()}catch($){h=$}r.call(s.prototype)}else{try{throw Error()}catch($){h=$}r()}}catch($){if($&&h&&typeof $.stack=="string"){for(var f=$.stack.split(`
`),m=h.stack.split(`
`),E=f.length-1,S=m.length-1;1<=E&&0<=S&&f[E]!==m[S];)S--;for(;1<=E&&0<=S;E--,S--)if(f[E]!==m[S]){if(E!==1||S!==1)do if(E--,S--,0>S||f[E]!==m[S]){var P=`
`+f[E].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=E&&0<=S);break}}}finally{Re=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?Y(r):""}function Ne(r){switch(r.tag){case 5:return Y(r.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return r=Ae(r.type,!1),r;case 11:return r=Ae(r.type.render,!1),r;case 1:return r=Ae(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case k:return"Fragment";case we:return"Portal";case A:return"Profiler";case R:return"StrictMode";case C:return"Suspense";case Ke:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case b:return(r.displayName||"Context")+".Consumer";case D:return(r._context.displayName||"Context")+".Provider";case j:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Tt:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case jt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Be(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Me(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function qe(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Qt(r){var s=qe(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(E){h=""+E,m.call(this,E)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function zs(r){r._valueTracker||(r._valueTracker=Qt(r))}function oa(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=qe(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function ei(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function $s(r,s){var a=s.checked;return le({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function ql(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=Me(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Hs(r,s){s=s.checked,s!=null&&re(r,"checked",s,!1)}function Zi(r,s){Hs(r,s);var a=Me(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?pt(r,s.type,a):s.hasOwnProperty("defaultValue")&&pt(r,s.type,Me(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function aa(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function pt(r,s,a){(s!=="number"||ei(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var ut=Array.isArray;function kn(r,s,a,h){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&h&&(r[a].defaultSelected=!0)}else{for(a=""+Me(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,h&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function la(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function ua(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(ut(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Me(a)}}function Wl(r,s){var a=Me(s.value),h=Me(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function ti(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ca(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qs(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ca(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var ni,Kl=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,f)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(ni=ni||document.createElement("div"),ni.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=ni.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function es(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gl=["Webkit","ms","Moz","O"];Object.keys(ri).forEach(function(r){Gl.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),ri[s]=ri[r]})});function ii(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||ri.hasOwnProperty(r)&&ri[r]?(""+s).trim():s+"px"}function Ws(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,f=ii(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,f):r[a]=f}}var ha=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pn(r,s){if(s){if(ha[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ks(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var si=null;function Gs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var xr=null,Tr=null,ot=null;function da(r){if(r=Fa(r)){if(typeof xr!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Eu(s),xr(r.stateNode,r.type,s))}}function oi(r){Tr?ot?ot.push(r):ot=[r]:Tr=r}function ai(){if(Tr){var r=Tr,s=ot;if(ot=Tr=null,da(r),s)for(r=0;r<s.length;r++)da(s[r])}}function Ql(r,s){return r(s)}function Jl(){}var Kn=!1;function Yl(r,s,a){if(Kn)return r(s,a);Kn=!0;try{return Ql(r,s,a)}finally{Kn=!1,(Tr!==null||ot!==null)&&(Jl(),ai())}}function ts(r,s){var a=r.stateNode;if(a===null)return null;var h=Eu(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var li=!1;if(d)try{var ui={};Object.defineProperty(ui,"passive",{get:function(){li=!0}}),window.addEventListener("test",ui,ui),window.removeEventListener("test",ui,ui)}catch{li=!1}function Xl(r,s,a,h,f,m,E,S,P){var $=Array.prototype.slice.call(arguments,3);try{s.apply(a,$)}catch(Z){this.onError(Z)}}var Sr=!1,Gn=null,Qs=!1,wn=null,Zl={onError:function(r){Sr=!0,Gn=r}};function eu(r,s,a,h,f,m,E,S,P){Sr=!1,Gn=null,Xl.apply(Zl,arguments)}function fa(r,s,a,h,f,m,E,S,P){if(eu.apply(this,arguments),Sr){if(Sr){var $=Gn;Sr=!1,Gn=null}else throw Error(t(198));Qs||(Qs=!0,wn=$)}}function bn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function pa(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function tu(r){if(bn(r)!==r)throw Error(t(188))}function nu(r){var s=r.alternate;if(!s){if(s=bn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(h=f.return,h!==null){a=h;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return tu(f),r;if(m===h)return tu(f),s;m=m.sibling}throw Error(t(188))}if(a.return!==h.return)a=f,h=m;else{for(var E=!1,S=f.child;S;){if(S===a){E=!0,a=f,h=m;break}if(S===h){E=!0,h=f,a=m;break}S=S.sibling}if(!E){for(S=m.child;S;){if(S===a){E=!0,a=m,h=f;break}if(S===h){E=!0,h=m,a=f;break}S=S.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ru(r){return r=nu(r),r!==null?ns(r):null}function ns(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=ns(r);if(s!==null)return s;r=r.sibling}return null}var ma=e.unstable_scheduleCallback,Js=e.unstable_cancelCallback,rs=e.unstable_shouldYield,Ir=e.unstable_requestPaint,Je=e.unstable_now,Ph=e.unstable_getCurrentPriorityLevel,Ys=e.unstable_ImmediatePriority,ga=e.unstable_UserBlockingPriority,is=e.unstable_NormalPriority,ya=e.unstable_LowPriority,Xs=e.unstable_IdlePriority,ss=null,un=null;function iu(r){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(ss,r,void 0,(r.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:os,Qn=Math.log,En=Math.LN2;function os(r){return r>>>=0,r===0?32:31-(Qn(r)/En|0)|0}var Jn=64,ci=4194304;function Ue(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Rr(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,f=r.suspendedLanes,m=r.pingedLanes,E=a&268435455;if(E!==0){var S=E&~f;S!==0?h=Ue(S):(m&=E,m!==0&&(h=Ue(m)))}else E=a&~f,E!==0?h=Ue(E):m!==0&&(h=Ue(m));if(h===0)return 0;if(s!==0&&s!==h&&(s&f)===0&&(f=h&-h,m=s&-s,f>=m||f===16&&(m&4194240)!==0))return s;if((h&4)!==0&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-cn(s),f=1<<a,h|=r[a],s&=~f;return h}function as(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ls(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,f=r.expirationTimes,m=r.pendingLanes;0<m;){var E=31-cn(m),S=1<<E,P=f[E];P===-1?((S&a)===0||(S&h)!==0)&&(f[E]=as(S,s)):P<=s&&(r.expiredLanes|=S),m&=~S}}function _a(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function va(){var r=Jn;return Jn<<=1,(Jn&4194240)===0&&(Jn=64),r}function wa(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function us(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-cn(s),r[s]=a}function bh(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-cn(a),m=1<<f;s[f]=0,h[f]=-1,r[f]=-1,a&=~m}}function Ea(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-cn(a),f=1<<h;f&s|r[h]&s&&(r[h]|=s),a&=~f}}var Le=0;function Yn(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var xa,Zs,Ta,Sa,Ia,Xn=!1,eo=[],Zn=null,er=null,Pt=null,cs=new Map,Ar=new Map,hn=[],su="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hi(r,s){switch(r){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":cs.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ar.delete(s.pointerId)}}function Nn(r,s,a,h,f,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:m,targetContainers:[f]},s!==null&&(s=Fa(s),s!==null&&Zs(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function ou(r,s,a,h,f){switch(s){case"focusin":return Zn=Nn(Zn,r,s,a,h,f),!0;case"dragenter":return er=Nn(er,r,s,a,h,f),!0;case"mouseover":return Pt=Nn(Pt,r,s,a,h,f),!0;case"pointerover":var m=f.pointerId;return cs.set(m,Nn(cs.get(m)||null,r,s,a,h,f)),!0;case"gotpointercapture":return m=f.pointerId,Ar.set(m,Nn(Ar.get(m)||null,r,s,a,h,f)),!0}return!1}function to(r){var s=ps(r.target);if(s!==null){var a=bn(s);if(a!==null){if(s=a.tag,s===13){if(s=pa(a),s!==null){r.blockedOn=s,Ia(r.priority,function(){Ta(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function We(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=no(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);si=h,a.target.dispatchEvent(h),si=null}else return s=Fa(a),s!==null&&Zs(s),r.blockedOn=a,!1;s.shift()}return!0}function au(r,s,a){We(r)&&a.delete(s)}function Nh(){Xn=!1,Zn!==null&&We(Zn)&&(Zn=null),er!==null&&We(er)&&(er=null),Pt!==null&&We(Pt)&&(Pt=null),cs.forEach(au),Ar.forEach(au)}function di(r,s){r.blockedOn===s&&(r.blockedOn=null,Xn||(Xn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Nh)))}function fi(r){function s(f){return di(f,r)}if(0<eo.length){di(eo[0],r);for(var a=1;a<eo.length;a++){var h=eo[a];h.blockedOn===r&&(h.blockedOn=null)}}for(Zn!==null&&di(Zn,r),er!==null&&di(er,r),Pt!==null&&di(Pt,r),cs.forEach(s),Ar.forEach(s),a=0;a<hn.length;a++)h=hn[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<hn.length&&(a=hn[0],a.blockedOn===null);)to(a),a.blockedOn===null&&hn.shift()}var Cr=me.ReactCurrentBatchConfig,kr=!0;function tr(r,s,a,h){var f=Le,m=Cr.transition;Cr.transition=null;try{Le=1,Ra(r,s,a,h)}finally{Le=f,Cr.transition=m}}function lu(r,s,a,h){var f=Le,m=Cr.transition;Cr.transition=null;try{Le=4,Ra(r,s,a,h)}finally{Le=f,Cr.transition=m}}function Ra(r,s,a,h){if(kr){var f=no(r,s,a,h);if(f===null)$h(r,s,h,nr,a),hi(r,h);else if(ou(f,r,s,a,h))h.stopPropagation();else if(hi(r,h),s&4&&-1<su.indexOf(r)){for(;f!==null;){var m=Fa(f);if(m!==null&&xa(m),m=no(r,s,a,h),m===null&&$h(r,s,h,nr,a),m===f)break;f=m}f!==null&&h.stopPropagation()}else $h(r,s,h,null,a)}}var nr=null;function no(r,s,a,h){if(nr=null,r=Gs(h),r=ps(r),r!==null)if(s=bn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=pa(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return nr=r,null}function ro(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ph()){case Ys:return 1;case ga:return 4;case is:case ya:return 16;case Xs:return 536870912;default:return 16}default:return 16}}var dn=null,io=null,Pr=null;function uu(){if(Pr)return Pr;var r,s=io,a=s.length,h,f="value"in dn?dn.value:dn.textContent,m=f.length;for(r=0;r<a&&s[r]===f[r];r++);var E=a-r;for(h=1;h<=E&&s[a-h]===f[m-h];h++);return Pr=f.slice(r,1<h?1-h:void 0)}function hs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function rr(){return!0}function Aa(){return!1}function Ft(r){function s(a,h,f,m,E){this._reactName=a,this._targetInst=f,this.type=h,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?rr:Aa,this.isPropagationStopped=Aa,this}return le(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),s}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ds=Ft(ir),pi=le({},ir,{view:0,detail:0}),so=Ft(pi),oo,ao,fn,fs=le({},pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Se,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==fn&&(fn&&r.type==="mousemove"?(oo=r.screenX-fn.screenX,ao=r.screenY-fn.screenY):ao=oo=0,fn=r),oo)},movementY:function(r){return"movementY"in r?r.movementY:ao}}),Ca=Ft(fs),cu=le({},fs,{dataTransfer:0}),hu=Ft(cu),lo=le({},pi,{relatedTarget:0}),bt=Ft(lo),du=le({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),fu=Ft(du),mi=le({},ir,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),c=Ft(mi),g=le({},ir,{data:0}),v=Ft(g),T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ne(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=H[r])?!!s[r]:!1}function Se(){return ne}var ct=le({},pi,{key:function(r){if(r.key){var s=T[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=hs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?B[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Se,charCode:function(r){return r.type==="keypress"?hs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?hs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),$e=Ft(ct),mt=le({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pn=Ft(mt),br=le({},pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Se}),sr=Ft(br),or=le({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),uo=Ft(or),ka=le({},fs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),OE=Ft(ka),LE=[9,13,27,32],Dh=d&&"CompositionEvent"in window,Pa=null;d&&"documentMode"in document&&(Pa=document.documentMode);var VE=d&&"TextEvent"in window&&!Pa,om=d&&(!Dh||Pa&&8<Pa&&11>=Pa),am=" ",lm=!1;function um(r,s){switch(r){case"keyup":return LE.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var co=!1;function ME(r,s){switch(r){case"compositionend":return cm(s);case"keypress":return s.which!==32?null:(lm=!0,am);case"textInput":return r=s.data,r===am&&lm?null:r;default:return null}}function jE(r,s){if(co)return r==="compositionend"||!Dh&&um(r,s)?(r=uu(),Pr=io=dn=null,co=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return om&&s.locale!=="ko"?null:s.data;default:return null}}var FE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!FE[r.type]:s==="textarea"}function dm(r,s,a,h){oi(h),s=_u(s,"onChange"),0<s.length&&(a=new ds("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var ba=null,Na=null;function UE(r){Pm(r,0)}function pu(r){var s=go(r);if(oa(s))return r}function BE(r,s){if(r==="change")return s}var fm=!1;if(d){var Oh;if(d){var Lh="oninput"in document;if(!Lh){var pm=document.createElement("div");pm.setAttribute("oninput","return;"),Lh=typeof pm.oninput=="function"}Oh=Lh}else Oh=!1;fm=Oh&&(!document.documentMode||9<document.documentMode)}function mm(){ba&&(ba.detachEvent("onpropertychange",gm),Na=ba=null)}function gm(r){if(r.propertyName==="value"&&pu(Na)){var s=[];dm(s,Na,r,Gs(r)),Yl(UE,s)}}function zE(r,s,a){r==="focusin"?(mm(),ba=s,Na=a,ba.attachEvent("onpropertychange",gm)):r==="focusout"&&mm()}function $E(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return pu(Na)}function HE(r,s){if(r==="click")return pu(s)}function qE(r,s){if(r==="input"||r==="change")return pu(s)}function WE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Dn=typeof Object.is=="function"?Object.is:WE;function Da(r,s){if(Dn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var f=a[h];if(!p.call(s,f)||!Dn(r[f],s[f]))return!1}return!0}function ym(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function _m(r,s){var a=ym(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ym(a)}}function vm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?vm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function wm(){for(var r=window,s=ei();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=ei(r.document)}return s}function Vh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function KE(r){var s=wm(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&vm(a.ownerDocument.documentElement,a)){if(h!==null&&Vh(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,m=Math.min(h.start,f);h=h.end===void 0?m:Math.min(h.end,f),!r.extend&&m>h&&(f=h,h=m,m=f),f=_m(a,m);var E=_m(a,h);f&&E&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==E.node||r.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),m>h?(r.addRange(s),r.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var GE=d&&"documentMode"in document&&11>=document.documentMode,ho=null,Mh=null,Oa=null,jh=!1;function Em(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jh||ho==null||ho!==ei(h)||(h=ho,"selectionStart"in h&&Vh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Oa&&Da(Oa,h)||(Oa=h,h=_u(Mh,"onSelect"),0<h.length&&(s=new ds("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=ho)))}function mu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var fo={animationend:mu("Animation","AnimationEnd"),animationiteration:mu("Animation","AnimationIteration"),animationstart:mu("Animation","AnimationStart"),transitionend:mu("Transition","TransitionEnd")},Fh={},xm={};d&&(xm=document.createElement("div").style,"AnimationEvent"in window||(delete fo.animationend.animation,delete fo.animationiteration.animation,delete fo.animationstart.animation),"TransitionEvent"in window||delete fo.transitionend.transition);function gu(r){if(Fh[r])return Fh[r];if(!fo[r])return r;var s=fo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in xm)return Fh[r]=s[a];return r}var Tm=gu("animationend"),Sm=gu("animationiteration"),Im=gu("animationstart"),Rm=gu("transitionend"),Am=new Map,Cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gi(r,s){Am.set(r,s),l(s,[r])}for(var Uh=0;Uh<Cm.length;Uh++){var Bh=Cm[Uh],QE=Bh.toLowerCase(),JE=Bh[0].toUpperCase()+Bh.slice(1);gi(QE,"on"+JE)}gi(Tm,"onAnimationEnd"),gi(Sm,"onAnimationIteration"),gi(Im,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(Rm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YE=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function km(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,fa(h,s,void 0,r),r.currentTarget=null}function Pm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],f=h.event;h=h.listeners;e:{var m=void 0;if(s)for(var E=h.length-1;0<=E;E--){var S=h[E],P=S.instance,$=S.currentTarget;if(S=S.listener,P!==m&&f.isPropagationStopped())break e;km(f,S,$),m=P}else for(E=0;E<h.length;E++){if(S=h[E],P=S.instance,$=S.currentTarget,S=S.listener,P!==m&&f.isPropagationStopped())break e;km(f,S,$),m=P}}}if(Qs)throw r=wn,Qs=!1,wn=null,r}function Ye(r,s){var a=s[Qh];a===void 0&&(a=s[Qh]=new Set);var h=r+"__bubble";a.has(h)||(bm(s,r,2,!1),a.add(h))}function zh(r,s,a){var h=0;s&&(h|=4),bm(a,r,h,s)}var yu="_reactListening"+Math.random().toString(36).slice(2);function Va(r){if(!r[yu]){r[yu]=!0,i.forEach(function(a){a!=="selectionchange"&&(YE.has(a)||zh(a,!1,r),zh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[yu]||(s[yu]=!0,zh("selectionchange",!1,s))}}function bm(r,s,a,h){switch(ro(s)){case 1:var f=tr;break;case 4:f=lu;break;default:f=Ra}a=f.bind(null,s,a,r),f=void 0,!li||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function $h(r,s,a,h,f){var m=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var S=h.stateNode.containerInfo;if(S===f||S.nodeType===8&&S.parentNode===f)break;if(E===4)for(E=h.return;E!==null;){var P=E.tag;if((P===3||P===4)&&(P=E.stateNode.containerInfo,P===f||P.nodeType===8&&P.parentNode===f))return;E=E.return}for(;S!==null;){if(E=ps(S),E===null)return;if(P=E.tag,P===5||P===6){h=m=E;continue e}S=S.parentNode}}h=h.return}Yl(function(){var $=m,Z=Gs(a),ee=[];e:{var X=Am.get(r);if(X!==void 0){var ae=ds,ce=r;switch(r){case"keypress":if(hs(a)===0)break e;case"keydown":case"keyup":ae=$e;break;case"focusin":ce="focus",ae=bt;break;case"focusout":ce="blur",ae=bt;break;case"beforeblur":case"afterblur":ae=bt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=Ca;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=hu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=sr;break;case Tm:case Sm:case Im:ae=fu;break;case Rm:ae=uo;break;case"scroll":ae=so;break;case"wheel":ae=OE;break;case"copy":case"cut":case"paste":ae=c;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=pn}var he=(s&4)!==0,ht=!he&&r==="scroll",U=he?X!==null?X+"Capture":null:X;he=[];for(var O=$,z;O!==null;){z=O;var te=z.stateNode;if(z.tag===5&&te!==null&&(z=te,U!==null&&(te=ts(O,U),te!=null&&he.push(Ma(O,te,z)))),ht)break;O=O.return}0<he.length&&(X=new ae(X,ce,null,a,Z),ee.push({event:X,listeners:he}))}}if((s&7)===0){e:{if(X=r==="mouseover"||r==="pointerover",ae=r==="mouseout"||r==="pointerout",X&&a!==si&&(ce=a.relatedTarget||a.fromElement)&&(ps(ce)||ce[Nr]))break e;if((ae||X)&&(X=Z.window===Z?Z:(X=Z.ownerDocument)?X.defaultView||X.parentWindow:window,ae?(ce=a.relatedTarget||a.toElement,ae=$,ce=ce?ps(ce):null,ce!==null&&(ht=bn(ce),ce!==ht||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(ae=null,ce=$),ae!==ce)){if(he=Ca,te="onMouseLeave",U="onMouseEnter",O="mouse",(r==="pointerout"||r==="pointerover")&&(he=pn,te="onPointerLeave",U="onPointerEnter",O="pointer"),ht=ae==null?X:go(ae),z=ce==null?X:go(ce),X=new he(te,O+"leave",ae,a,Z),X.target=ht,X.relatedTarget=z,te=null,ps(Z)===$&&(he=new he(U,O+"enter",ce,a,Z),he.target=z,he.relatedTarget=ht,te=he),ht=te,ae&&ce)t:{for(he=ae,U=ce,O=0,z=he;z;z=po(z))O++;for(z=0,te=U;te;te=po(te))z++;for(;0<O-z;)he=po(he),O--;for(;0<z-O;)U=po(U),z--;for(;O--;){if(he===U||U!==null&&he===U.alternate)break t;he=po(he),U=po(U)}he=null}else he=null;ae!==null&&Nm(ee,X,ae,he,!1),ce!==null&&ht!==null&&Nm(ee,ht,ce,he,!0)}}e:{if(X=$?go($):window,ae=X.nodeName&&X.nodeName.toLowerCase(),ae==="select"||ae==="input"&&X.type==="file")var de=BE;else if(hm(X))if(fm)de=qE;else{de=$E;var ge=zE}else(ae=X.nodeName)&&ae.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(de=HE);if(de&&(de=de(r,$))){dm(ee,de,a,Z);break e}ge&&ge(r,X,$),r==="focusout"&&(ge=X._wrapperState)&&ge.controlled&&X.type==="number"&&pt(X,"number",X.value)}switch(ge=$?go($):window,r){case"focusin":(hm(ge)||ge.contentEditable==="true")&&(ho=ge,Mh=$,Oa=null);break;case"focusout":Oa=Mh=ho=null;break;case"mousedown":jh=!0;break;case"contextmenu":case"mouseup":case"dragend":jh=!1,Em(ee,a,Z);break;case"selectionchange":if(GE)break;case"keydown":case"keyup":Em(ee,a,Z)}var ye;if(Dh)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else co?um(r,a)&&(Ee="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(om&&a.locale!=="ko"&&(co||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&co&&(ye=uu()):(dn=Z,io="value"in dn?dn.value:dn.textContent,co=!0)),ge=_u($,Ee),0<ge.length&&(Ee=new v(Ee,r,null,a,Z),ee.push({event:Ee,listeners:ge}),ye?Ee.data=ye:(ye=cm(a),ye!==null&&(Ee.data=ye)))),(ye=VE?ME(r,a):jE(r,a))&&($=_u($,"onBeforeInput"),0<$.length&&(Z=new v("onBeforeInput","beforeinput",null,a,Z),ee.push({event:Z,listeners:$}),Z.data=ye))}Pm(ee,s)})}function Ma(r,s,a){return{instance:r,listener:s,currentTarget:a}}function _u(r,s){for(var a=s+"Capture",h=[];r!==null;){var f=r,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=ts(r,a),m!=null&&h.unshift(Ma(r,m,f)),m=ts(r,s),m!=null&&h.push(Ma(r,m,f))),r=r.return}return h}function po(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Nm(r,s,a,h,f){for(var m=s._reactName,E=[];a!==null&&a!==h;){var S=a,P=S.alternate,$=S.stateNode;if(P!==null&&P===h)break;S.tag===5&&$!==null&&(S=$,f?(P=ts(a,m),P!=null&&E.unshift(Ma(a,P,S))):f||(P=ts(a,m),P!=null&&E.push(Ma(a,P,S)))),a=a.return}E.length!==0&&r.push({event:s,listeners:E})}var XE=/\r\n?/g,ZE=/\u0000|\uFFFD/g;function Dm(r){return(typeof r=="string"?r:""+r).replace(XE,`
`).replace(ZE,"")}function vu(r,s,a){if(s=Dm(s),Dm(r)!==s&&a)throw Error(t(425))}function wu(){}var Hh=null,qh=null;function Wh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Kh=typeof setTimeout=="function"?setTimeout:void 0,ex=typeof clearTimeout=="function"?clearTimeout:void 0,Om=typeof Promise=="function"?Promise:void 0,tx=typeof queueMicrotask=="function"?queueMicrotask:typeof Om<"u"?function(r){return Om.resolve(null).then(r).catch(nx)}:Kh;function nx(r){setTimeout(function(){throw r})}function Gh(r,s){var a=s,h=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(h===0){r.removeChild(f),fi(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=f}while(a);fi(s)}function yi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Lm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var mo=Math.random().toString(36).slice(2),ar="__reactFiber$"+mo,ja="__reactProps$"+mo,Nr="__reactContainer$"+mo,Qh="__reactEvents$"+mo,rx="__reactListeners$"+mo,ix="__reactHandles$"+mo;function ps(r){var s=r[ar];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Nr]||a[ar]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Lm(r);r!==null;){if(a=r[ar])return a;r=Lm(r)}return s}r=a,a=r.parentNode}return null}function Fa(r){return r=r[ar]||r[Nr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function go(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Eu(r){return r[ja]||null}var Jh=[],yo=-1;function _i(r){return{current:r}}function Xe(r){0>yo||(r.current=Jh[yo],Jh[yo]=null,yo--)}function Ge(r,s){yo++,Jh[yo]=r.current,r.current=s}var vi={},Ut=_i(vi),Xt=_i(!1),ms=vi;function _o(r,s){var a=r.type.contextTypes;if(!a)return vi;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in a)f[m]=s[m];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function Zt(r){return r=r.childContextTypes,r!=null}function xu(){Xe(Xt),Xe(Ut)}function Vm(r,s,a){if(Ut.current!==vi)throw Error(t(168));Ge(Ut,s),Ge(Xt,a)}function Mm(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,Be(r)||"Unknown",f));return le({},a,h)}function Tu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||vi,ms=Ut.current,Ge(Ut,r),Ge(Xt,Xt.current),!0}function jm(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=Mm(r,s,ms),h.__reactInternalMemoizedMergedChildContext=r,Xe(Xt),Xe(Ut),Ge(Ut,r)):Xe(Xt),Ge(Xt,a)}var Dr=null,Su=!1,Yh=!1;function Fm(r){Dr===null?Dr=[r]:Dr.push(r)}function sx(r){Su=!0,Fm(r)}function wi(){if(!Yh&&Dr!==null){Yh=!0;var r=0,s=Le;try{var a=Dr;for(Le=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}Dr=null,Su=!1}catch(f){throw Dr!==null&&(Dr=Dr.slice(r+1)),ma(Ys,wi),f}finally{Le=s,Yh=!1}}return null}var vo=[],wo=0,Iu=null,Ru=0,xn=[],Tn=0,gs=null,Or=1,Lr="";function ys(r,s){vo[wo++]=Ru,vo[wo++]=Iu,Iu=r,Ru=s}function Um(r,s,a){xn[Tn++]=Or,xn[Tn++]=Lr,xn[Tn++]=gs,gs=r;var h=Or;r=Lr;var f=32-cn(h)-1;h&=~(1<<f),a+=1;var m=32-cn(s)+f;if(30<m){var E=f-f%5;m=(h&(1<<E)-1).toString(32),h>>=E,f-=E,Or=1<<32-cn(s)+f|a<<f|h,Lr=m+r}else Or=1<<m|a<<f|h,Lr=r}function Xh(r){r.return!==null&&(ys(r,1),Um(r,1,0))}function Zh(r){for(;r===Iu;)Iu=vo[--wo],vo[wo]=null,Ru=vo[--wo],vo[wo]=null;for(;r===gs;)gs=xn[--Tn],xn[Tn]=null,Lr=xn[--Tn],xn[Tn]=null,Or=xn[--Tn],xn[Tn]=null}var mn=null,gn=null,tt=!1,On=null;function Bm(r,s){var a=An(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function zm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,mn=r,gn=yi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,mn=r,gn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=gs!==null?{id:Or,overflow:Lr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=An(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,mn=r,gn=null,!0):!1;default:return!1}}function ed(r){return(r.mode&1)!==0&&(r.flags&128)===0}function td(r){if(tt){var s=gn;if(s){var a=s;if(!zm(r,s)){if(ed(r))throw Error(t(418));s=yi(a.nextSibling);var h=mn;s&&zm(r,s)?Bm(h,a):(r.flags=r.flags&-4097|2,tt=!1,mn=r)}}else{if(ed(r))throw Error(t(418));r.flags=r.flags&-4097|2,tt=!1,mn=r}}}function $m(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;mn=r}function Au(r){if(r!==mn)return!1;if(!tt)return $m(r),tt=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Wh(r.type,r.memoizedProps)),s&&(s=gn)){if(ed(r))throw Hm(),Error(t(418));for(;s;)Bm(r,s),s=yi(s.nextSibling)}if($m(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){gn=yi(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}gn=null}}else gn=mn?yi(r.stateNode.nextSibling):null;return!0}function Hm(){for(var r=gn;r;)r=yi(r.nextSibling)}function Eo(){gn=mn=null,tt=!1}function nd(r){On===null?On=[r]:On.push(r)}var ox=me.ReactCurrentBatchConfig;function Ua(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var f=h,m=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(E){var S=f.refs;E===null?delete S[m]:S[m]=E},s._stringRef=m,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function Cu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function qm(r){var s=r._init;return s(r._payload)}function Wm(r){function s(U,O){if(r){var z=U.deletions;z===null?(U.deletions=[O],U.flags|=16):z.push(O)}}function a(U,O){if(!r)return null;for(;O!==null;)s(U,O),O=O.sibling;return null}function h(U,O){for(U=new Map;O!==null;)O.key!==null?U.set(O.key,O):U.set(O.index,O),O=O.sibling;return U}function f(U,O){return U=Ci(U,O),U.index=0,U.sibling=null,U}function m(U,O,z){return U.index=z,r?(z=U.alternate,z!==null?(z=z.index,z<O?(U.flags|=2,O):z):(U.flags|=2,O)):(U.flags|=1048576,O)}function E(U){return r&&U.alternate===null&&(U.flags|=2),U}function S(U,O,z,te){return O===null||O.tag!==6?(O=Kd(z,U.mode,te),O.return=U,O):(O=f(O,z),O.return=U,O)}function P(U,O,z,te){var de=z.type;return de===k?Z(U,O,z.props.children,te,z.key):O!==null&&(O.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===jt&&qm(de)===O.type)?(te=f(O,z.props),te.ref=Ua(U,O,z),te.return=U,te):(te=Xu(z.type,z.key,z.props,null,U.mode,te),te.ref=Ua(U,O,z),te.return=U,te)}function $(U,O,z,te){return O===null||O.tag!==4||O.stateNode.containerInfo!==z.containerInfo||O.stateNode.implementation!==z.implementation?(O=Gd(z,U.mode,te),O.return=U,O):(O=f(O,z.children||[]),O.return=U,O)}function Z(U,O,z,te,de){return O===null||O.tag!==7?(O=Is(z,U.mode,te,de),O.return=U,O):(O=f(O,z),O.return=U,O)}function ee(U,O,z){if(typeof O=="string"&&O!==""||typeof O=="number")return O=Kd(""+O,U.mode,z),O.return=U,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case _e:return z=Xu(O.type,O.key,O.props,null,U.mode,z),z.ref=Ua(U,null,O),z.return=U,z;case we:return O=Gd(O,U.mode,z),O.return=U,O;case jt:var te=O._init;return ee(U,te(O._payload),z)}if(ut(O)||pe(O))return O=Is(O,U.mode,z,null),O.return=U,O;Cu(U,O)}return null}function X(U,O,z,te){var de=O!==null?O.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return de!==null?null:S(U,O,""+z,te);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case _e:return z.key===de?P(U,O,z,te):null;case we:return z.key===de?$(U,O,z,te):null;case jt:return de=z._init,X(U,O,de(z._payload),te)}if(ut(z)||pe(z))return de!==null?null:Z(U,O,z,te,null);Cu(U,z)}return null}function ae(U,O,z,te,de){if(typeof te=="string"&&te!==""||typeof te=="number")return U=U.get(z)||null,S(O,U,""+te,de);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case _e:return U=U.get(te.key===null?z:te.key)||null,P(O,U,te,de);case we:return U=U.get(te.key===null?z:te.key)||null,$(O,U,te,de);case jt:var ge=te._init;return ae(U,O,z,ge(te._payload),de)}if(ut(te)||pe(te))return U=U.get(z)||null,Z(O,U,te,de,null);Cu(O,te)}return null}function ce(U,O,z,te){for(var de=null,ge=null,ye=O,Ee=O=0,Rt=null;ye!==null&&Ee<z.length;Ee++){ye.index>Ee?(Rt=ye,ye=null):Rt=ye.sibling;var Fe=X(U,ye,z[Ee],te);if(Fe===null){ye===null&&(ye=Rt);break}r&&ye&&Fe.alternate===null&&s(U,ye),O=m(Fe,O,Ee),ge===null?de=Fe:ge.sibling=Fe,ge=Fe,ye=Rt}if(Ee===z.length)return a(U,ye),tt&&ys(U,Ee),de;if(ye===null){for(;Ee<z.length;Ee++)ye=ee(U,z[Ee],te),ye!==null&&(O=m(ye,O,Ee),ge===null?de=ye:ge.sibling=ye,ge=ye);return tt&&ys(U,Ee),de}for(ye=h(U,ye);Ee<z.length;Ee++)Rt=ae(ye,U,Ee,z[Ee],te),Rt!==null&&(r&&Rt.alternate!==null&&ye.delete(Rt.key===null?Ee:Rt.key),O=m(Rt,O,Ee),ge===null?de=Rt:ge.sibling=Rt,ge=Rt);return r&&ye.forEach(function(ki){return s(U,ki)}),tt&&ys(U,Ee),de}function he(U,O,z,te){var de=pe(z);if(typeof de!="function")throw Error(t(150));if(z=de.call(z),z==null)throw Error(t(151));for(var ge=de=null,ye=O,Ee=O=0,Rt=null,Fe=z.next();ye!==null&&!Fe.done;Ee++,Fe=z.next()){ye.index>Ee?(Rt=ye,ye=null):Rt=ye.sibling;var ki=X(U,ye,Fe.value,te);if(ki===null){ye===null&&(ye=Rt);break}r&&ye&&ki.alternate===null&&s(U,ye),O=m(ki,O,Ee),ge===null?de=ki:ge.sibling=ki,ge=ki,ye=Rt}if(Fe.done)return a(U,ye),tt&&ys(U,Ee),de;if(ye===null){for(;!Fe.done;Ee++,Fe=z.next())Fe=ee(U,Fe.value,te),Fe!==null&&(O=m(Fe,O,Ee),ge===null?de=Fe:ge.sibling=Fe,ge=Fe);return tt&&ys(U,Ee),de}for(ye=h(U,ye);!Fe.done;Ee++,Fe=z.next())Fe=ae(ye,U,Ee,Fe.value,te),Fe!==null&&(r&&Fe.alternate!==null&&ye.delete(Fe.key===null?Ee:Fe.key),O=m(Fe,O,Ee),ge===null?de=Fe:ge.sibling=Fe,ge=Fe);return r&&ye.forEach(function(Fx){return s(U,Fx)}),tt&&ys(U,Ee),de}function ht(U,O,z,te){if(typeof z=="object"&&z!==null&&z.type===k&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case _e:e:{for(var de=z.key,ge=O;ge!==null;){if(ge.key===de){if(de=z.type,de===k){if(ge.tag===7){a(U,ge.sibling),O=f(ge,z.props.children),O.return=U,U=O;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===jt&&qm(de)===ge.type){a(U,ge.sibling),O=f(ge,z.props),O.ref=Ua(U,ge,z),O.return=U,U=O;break e}a(U,ge);break}else s(U,ge);ge=ge.sibling}z.type===k?(O=Is(z.props.children,U.mode,te,z.key),O.return=U,U=O):(te=Xu(z.type,z.key,z.props,null,U.mode,te),te.ref=Ua(U,O,z),te.return=U,U=te)}return E(U);case we:e:{for(ge=z.key;O!==null;){if(O.key===ge)if(O.tag===4&&O.stateNode.containerInfo===z.containerInfo&&O.stateNode.implementation===z.implementation){a(U,O.sibling),O=f(O,z.children||[]),O.return=U,U=O;break e}else{a(U,O);break}else s(U,O);O=O.sibling}O=Gd(z,U.mode,te),O.return=U,U=O}return E(U);case jt:return ge=z._init,ht(U,O,ge(z._payload),te)}if(ut(z))return ce(U,O,z,te);if(pe(z))return he(U,O,z,te);Cu(U,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,O!==null&&O.tag===6?(a(U,O.sibling),O=f(O,z),O.return=U,U=O):(a(U,O),O=Kd(z,U.mode,te),O.return=U,U=O),E(U)):a(U,O)}return ht}var xo=Wm(!0),Km=Wm(!1),ku=_i(null),Pu=null,To=null,rd=null;function id(){rd=To=Pu=null}function sd(r){var s=ku.current;Xe(ku),r._currentValue=s}function od(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function So(r,s){Pu=r,rd=To=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(en=!0),r.firstContext=null)}function Sn(r){var s=r._currentValue;if(rd!==r)if(r={context:r,memoizedValue:s,next:null},To===null){if(Pu===null)throw Error(t(308));To=r,Pu.dependencies={lanes:0,firstContext:r}}else To=To.next=r;return s}var _s=null;function ad(r){_s===null?_s=[r]:_s.push(r)}function Gm(r,s,a,h){var f=s.interleaved;return f===null?(a.next=a,ad(s)):(a.next=f.next,f.next=a),s.interleaved=a,Vr(r,h)}function Vr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var Ei=!1;function ld(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Mr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function xi(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(je&2)!==0){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Vr(r,a)}return f=h.interleaved,f===null?(s.next=s,ad(h)):(s.next=f.next,f.next=s),h.interleaved=s,Vr(r,a)}function bu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,Ea(r,a)}}function Jm(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?f=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?f=m=s:m=m.next=s}else f=m=s;a={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Nu(r,s,a,h){var f=r.updateQueue;Ei=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var P=S,$=P.next;P.next=null,E===null?m=$:E.next=$,E=P;var Z=r.alternate;Z!==null&&(Z=Z.updateQueue,S=Z.lastBaseUpdate,S!==E&&(S===null?Z.firstBaseUpdate=$:S.next=$,Z.lastBaseUpdate=P))}if(m!==null){var ee=f.baseState;E=0,Z=$=P=null,S=m;do{var X=S.lane,ae=S.eventTime;if((h&X)===X){Z!==null&&(Z=Z.next={eventTime:ae,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ce=r,he=S;switch(X=s,ae=a,he.tag){case 1:if(ce=he.payload,typeof ce=="function"){ee=ce.call(ae,ee,X);break e}ee=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=he.payload,X=typeof ce=="function"?ce.call(ae,ee,X):ce,X==null)break e;ee=le({},ee,X);break e;case 2:Ei=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,X=f.effects,X===null?f.effects=[S]:X.push(S))}else ae={eventTime:ae,lane:X,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Z===null?($=Z=ae,P=ee):Z=Z.next=ae,E|=X;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;X=S,S=X.next,X.next=null,f.lastBaseUpdate=X,f.shared.pending=null}}while(!0);if(Z===null&&(P=ee),f.baseState=P,f.firstBaseUpdate=$,f.lastBaseUpdate=Z,s=f.shared.interleaved,s!==null){f=s;do E|=f.lane,f=f.next;while(f!==s)}else m===null&&(f.shared.lanes=0);Es|=E,r.lanes=E,r.memoizedState=ee}}function Ym(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],f=h.callback;if(f!==null){if(h.callback=null,h=a,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var Ba={},lr=_i(Ba),za=_i(Ba),$a=_i(Ba);function vs(r){if(r===Ba)throw Error(t(174));return r}function ud(r,s){switch(Ge($a,s),Ge(za,r),Ge(lr,Ba),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:qs(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=qs(s,r)}Xe(lr),Ge(lr,s)}function Io(){Xe(lr),Xe(za),Xe($a)}function Xm(r){vs($a.current);var s=vs(lr.current),a=qs(s,r.type);s!==a&&(Ge(za,r),Ge(lr,a))}function cd(r){za.current===r&&(Xe(lr),Xe(za))}var rt=_i(0);function Du(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var hd=[];function dd(){for(var r=0;r<hd.length;r++)hd[r]._workInProgressVersionPrimary=null;hd.length=0}var Ou=me.ReactCurrentDispatcher,fd=me.ReactCurrentBatchConfig,ws=0,it=null,wt=null,St=null,Lu=!1,Ha=!1,qa=0,ax=0;function Bt(){throw Error(t(321))}function pd(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Dn(r[a],s[a]))return!1;return!0}function md(r,s,a,h,f,m){if(ws=m,it=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ou.current=r===null||r.memoizedState===null?hx:dx,r=a(h,f),Ha){m=0;do{if(Ha=!1,qa=0,25<=m)throw Error(t(301));m+=1,St=wt=null,s.updateQueue=null,Ou.current=fx,r=a(h,f)}while(Ha)}if(Ou.current=ju,s=wt!==null&&wt.next!==null,ws=0,St=wt=it=null,Lu=!1,s)throw Error(t(300));return r}function gd(){var r=qa!==0;return qa=0,r}function ur(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?it.memoizedState=St=r:St=St.next=r,St}function In(){if(wt===null){var r=it.alternate;r=r!==null?r.memoizedState:null}else r=wt.next;var s=St===null?it.memoizedState:St.next;if(s!==null)St=s,wt=r;else{if(r===null)throw Error(t(310));wt=r,r={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},St===null?it.memoizedState=St=r:St=St.next=r}return St}function Wa(r,s){return typeof s=="function"?s(r):s}function yd(r){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=wt,f=h.baseQueue,m=a.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}h.baseQueue=f=m,a.pending=null}if(f!==null){m=f.next,h=h.baseState;var S=E=null,P=null,$=m;do{var Z=$.lane;if((ws&Z)===Z)P!==null&&(P=P.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),h=$.hasEagerState?$.eagerState:r(h,$.action);else{var ee={lane:Z,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};P===null?(S=P=ee,E=h):P=P.next=ee,it.lanes|=Z,Es|=Z}$=$.next}while($!==null&&$!==m);P===null?E=h:P.next=S,Dn(h,s.memoizedState)||(en=!0),s.memoizedState=h,s.baseState=E,s.baseQueue=P,a.lastRenderedState=h}if(r=a.interleaved,r!==null){f=r;do m=f.lane,it.lanes|=m,Es|=m,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function _d(r){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,f=a.pending,m=s.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do m=r(m,E.action),E=E.next;while(E!==f);Dn(m,s.memoizedState)||(en=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,h]}function Zm(){}function eg(r,s){var a=it,h=In(),f=s(),m=!Dn(h.memoizedState,f);if(m&&(h.memoizedState=f,en=!0),h=h.queue,vd(rg.bind(null,a,h,r),[r]),h.getSnapshot!==s||m||St!==null&&St.memoizedState.tag&1){if(a.flags|=2048,Ka(9,ng.bind(null,a,h,f,s),void 0,null),It===null)throw Error(t(349));(ws&30)!==0||tg(a,s,f)}return f}function tg(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=it.updateQueue,s===null?(s={lastEffect:null,stores:null},it.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function ng(r,s,a,h){s.value=a,s.getSnapshot=h,ig(s)&&sg(r)}function rg(r,s,a){return a(function(){ig(s)&&sg(r)})}function ig(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Dn(r,a)}catch{return!0}}function sg(r){var s=Vr(r,1);s!==null&&jn(s,r,1,-1)}function og(r){var s=ur();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:r},s.queue=r,r=r.dispatch=cx.bind(null,it,r),[s.memoizedState,r]}function Ka(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=it.updateQueue,s===null?(s={lastEffect:null,stores:null},it.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function ag(){return In().memoizedState}function Vu(r,s,a,h){var f=ur();it.flags|=r,f.memoizedState=Ka(1|s,a,void 0,h===void 0?null:h)}function Mu(r,s,a,h){var f=In();h=h===void 0?null:h;var m=void 0;if(wt!==null){var E=wt.memoizedState;if(m=E.destroy,h!==null&&pd(h,E.deps)){f.memoizedState=Ka(s,a,m,h);return}}it.flags|=r,f.memoizedState=Ka(1|s,a,m,h)}function lg(r,s){return Vu(8390656,8,r,s)}function vd(r,s){return Mu(2048,8,r,s)}function ug(r,s){return Mu(4,2,r,s)}function cg(r,s){return Mu(4,4,r,s)}function hg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function dg(r,s,a){return a=a!=null?a.concat([r]):null,Mu(4,4,hg.bind(null,s,r),a)}function wd(){}function fg(r,s){var a=In();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&pd(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function pg(r,s){var a=In();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&pd(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function mg(r,s,a){return(ws&21)===0?(r.baseState&&(r.baseState=!1,en=!0),r.memoizedState=a):(Dn(a,s)||(a=va(),it.lanes|=a,Es|=a,r.baseState=!0),s)}function lx(r,s){var a=Le;Le=a!==0&&4>a?a:4,r(!0);var h=fd.transition;fd.transition={};try{r(!1),s()}finally{Le=a,fd.transition=h}}function gg(){return In().memoizedState}function ux(r,s,a){var h=Ri(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},yg(r))_g(s,a);else if(a=Gm(r,s,a,h),a!==null){var f=Yt();jn(a,r,h,f),vg(a,s,h)}}function cx(r,s,a){var h=Ri(r),f={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(yg(r))_g(s,f);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var E=s.lastRenderedState,S=m(E,a);if(f.hasEagerState=!0,f.eagerState=S,Dn(S,E)){var P=s.interleaved;P===null?(f.next=f,ad(s)):(f.next=P.next,P.next=f),s.interleaved=f;return}}catch{}finally{}a=Gm(r,s,f,h),a!==null&&(f=Yt(),jn(a,r,h,f),vg(a,s,h))}}function yg(r){var s=r.alternate;return r===it||s!==null&&s===it}function _g(r,s){Ha=Lu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function vg(r,s,a){if((a&4194240)!==0){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,Ea(r,a)}}var ju={readContext:Sn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},hx={readContext:Sn,useCallback:function(r,s){return ur().memoizedState=[r,s===void 0?null:s],r},useContext:Sn,useEffect:lg,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Vu(4194308,4,hg.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Vu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Vu(4,2,r,s)},useMemo:function(r,s){var a=ur();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=ur();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=ux.bind(null,it,r),[h.memoizedState,r]},useRef:function(r){var s=ur();return r={current:r},s.memoizedState=r},useState:og,useDebugValue:wd,useDeferredValue:function(r){return ur().memoizedState=r},useTransition:function(){var r=og(!1),s=r[0];return r=lx.bind(null,r[1]),ur().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=it,f=ur();if(tt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),It===null)throw Error(t(349));(ws&30)!==0||tg(h,s,a)}f.memoizedState=a;var m={value:a,getSnapshot:s};return f.queue=m,lg(rg.bind(null,h,m,r),[r]),h.flags|=2048,Ka(9,ng.bind(null,h,m,a,s),void 0,null),a},useId:function(){var r=ur(),s=It.identifierPrefix;if(tt){var a=Lr,h=Or;a=(h&~(1<<32-cn(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=qa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=ax++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},dx={readContext:Sn,useCallback:fg,useContext:Sn,useEffect:vd,useImperativeHandle:dg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:pg,useReducer:yd,useRef:ag,useState:function(){return yd(Wa)},useDebugValue:wd,useDeferredValue:function(r){var s=In();return mg(s,wt.memoizedState,r)},useTransition:function(){var r=yd(Wa)[0],s=In().memoizedState;return[r,s]},useMutableSource:Zm,useSyncExternalStore:eg,useId:gg,unstable_isNewReconciler:!1},fx={readContext:Sn,useCallback:fg,useContext:Sn,useEffect:vd,useImperativeHandle:dg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:pg,useReducer:_d,useRef:ag,useState:function(){return _d(Wa)},useDebugValue:wd,useDeferredValue:function(r){var s=In();return wt===null?s.memoizedState=r:mg(s,wt.memoizedState,r)},useTransition:function(){var r=_d(Wa)[0],s=In().memoizedState;return[r,s]},useMutableSource:Zm,useSyncExternalStore:eg,useId:gg,unstable_isNewReconciler:!1};function Ln(r,s){if(r&&r.defaultProps){s=le({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Ed(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:le({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Fu={isMounted:function(r){return(r=r._reactInternals)?bn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=Yt(),f=Ri(r),m=Mr(h,f);m.payload=s,a!=null&&(m.callback=a),s=xi(r,m,f),s!==null&&(jn(s,r,f,h),bu(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=Yt(),f=Ri(r),m=Mr(h,f);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=xi(r,m,f),s!==null&&(jn(s,r,f,h),bu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Yt(),h=Ri(r),f=Mr(a,h);f.tag=2,s!=null&&(f.callback=s),s=xi(r,f,h),s!==null&&(jn(s,r,h,a),bu(s,r,h))}};function wg(r,s,a,h,f,m,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,m,E):s.prototype&&s.prototype.isPureReactComponent?!Da(a,h)||!Da(f,m):!0}function Eg(r,s,a){var h=!1,f=vi,m=s.contextType;return typeof m=="object"&&m!==null?m=Sn(m):(f=Zt(s)?ms:Ut.current,h=s.contextTypes,m=(h=h!=null)?_o(r,f):vi),s=new s(a,m),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Fu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=m),s}function xg(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&Fu.enqueueReplaceState(s,s.state,null)}function xd(r,s,a,h){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},ld(r);var m=s.contextType;typeof m=="object"&&m!==null?f.context=Sn(m):(m=Zt(s)?ms:Ut.current,f.context=_o(r,m)),f.state=r.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(Ed(r,s,m,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&Fu.enqueueReplaceState(f,f.state,null),Nu(r,a,f,h),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function Ro(r,s){try{var a="",h=s;do a+=Ne(h),h=h.return;while(h);var f=a}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:r,source:s,stack:f,digest:null}}function Td(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Sd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var px=typeof WeakMap=="function"?WeakMap:Map;function Tg(r,s,a){a=Mr(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){Wu||(Wu=!0,Fd=h),Sd(r,s)},a}function Sg(r,s,a){a=Mr(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;a.payload=function(){return h(f)},a.callback=function(){Sd(r,s)}}var m=r.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Sd(r,s),typeof h!="function"&&(Si===null?Si=new Set([this]):Si.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),a}function Ig(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new px;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(a)||(f.add(a),r=Cx.bind(null,r,s,a),s.then(r,r))}function Rg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Ag(r,s,a,h,f){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Mr(-1,1),s.tag=2,xi(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=f,r)}var mx=me.ReactCurrentOwner,en=!1;function Jt(r,s,a,h){s.child=r===null?Km(s,null,a,h):xo(s,r.child,a,h)}function Cg(r,s,a,h,f){a=a.render;var m=s.ref;return So(s,f),h=md(r,s,a,h,m,f),a=gd(),r!==null&&!en?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,jr(r,s,f)):(tt&&a&&Xh(s),s.flags|=1,Jt(r,s,h,f),s.child)}function kg(r,s,a,h,f){if(r===null){var m=a.type;return typeof m=="function"&&!Wd(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,Pg(r,s,m,h,f)):(r=Xu(a.type,null,h,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,(r.lanes&f)===0){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:Da,a(E,h)&&r.ref===s.ref)return jr(r,s,f)}return s.flags|=1,r=Ci(m,h),r.ref=s.ref,r.return=s,s.child=r}function Pg(r,s,a,h,f){if(r!==null){var m=r.memoizedProps;if(Da(m,h)&&r.ref===s.ref)if(en=!1,s.pendingProps=h=m,(r.lanes&f)!==0)(r.flags&131072)!==0&&(en=!0);else return s.lanes=r.lanes,jr(r,s,f)}return Id(r,s,a,h,f)}function bg(r,s,a){var h=s.pendingProps,f=h.children,m=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(Co,yn),yn|=a;else{if((a&1073741824)===0)return r=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ge(Co,yn),yn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=m!==null?m.baseLanes:a,Ge(Co,yn),yn|=h}else m!==null?(h=m.baseLanes|a,s.memoizedState=null):h=a,Ge(Co,yn),yn|=h;return Jt(r,s,f,a),s.child}function Ng(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Id(r,s,a,h,f){var m=Zt(a)?ms:Ut.current;return m=_o(s,m),So(s,f),a=md(r,s,a,h,m,f),h=gd(),r!==null&&!en?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,jr(r,s,f)):(tt&&h&&Xh(s),s.flags|=1,Jt(r,s,a,f),s.child)}function Dg(r,s,a,h,f){if(Zt(a)){var m=!0;Tu(s)}else m=!1;if(So(s,f),s.stateNode===null)Bu(r,s),Eg(s,a,h),xd(s,a,h,f),h=!0;else if(r===null){var E=s.stateNode,S=s.memoizedProps;E.props=S;var P=E.context,$=a.contextType;typeof $=="object"&&$!==null?$=Sn($):($=Zt(a)?ms:Ut.current,$=_o(s,$));var Z=a.getDerivedStateFromProps,ee=typeof Z=="function"||typeof E.getSnapshotBeforeUpdate=="function";ee||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(S!==h||P!==$)&&xg(s,E,h,$),Ei=!1;var X=s.memoizedState;E.state=X,Nu(s,h,E,f),P=s.memoizedState,S!==h||X!==P||Xt.current||Ei?(typeof Z=="function"&&(Ed(s,a,Z,h),P=s.memoizedState),(S=Ei||wg(s,a,S,h,X,P,$))?(ee||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=P),E.props=h,E.state=P,E.context=$,h=S):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{E=s.stateNode,Qm(r,s),S=s.memoizedProps,$=s.type===s.elementType?S:Ln(s.type,S),E.props=$,ee=s.pendingProps,X=E.context,P=a.contextType,typeof P=="object"&&P!==null?P=Sn(P):(P=Zt(a)?ms:Ut.current,P=_o(s,P));var ae=a.getDerivedStateFromProps;(Z=typeof ae=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(S!==ee||X!==P)&&xg(s,E,h,P),Ei=!1,X=s.memoizedState,E.state=X,Nu(s,h,E,f);var ce=s.memoizedState;S!==ee||X!==ce||Xt.current||Ei?(typeof ae=="function"&&(Ed(s,a,ae,h),ce=s.memoizedState),($=Ei||wg(s,a,$,h,X,ce,P)||!1)?(Z||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,ce,P),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,ce,P)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||S===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=ce),E.props=h,E.state=ce,E.context=P,h=$):(typeof E.componentDidUpdate!="function"||S===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),h=!1)}return Rd(r,s,a,h,m,f)}function Rd(r,s,a,h,f,m){Ng(r,s);var E=(s.flags&128)!==0;if(!h&&!E)return f&&jm(s,a,!1),jr(r,s,m);h=s.stateNode,mx.current=s;var S=E&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&E?(s.child=xo(s,r.child,null,m),s.child=xo(s,null,S,m)):Jt(r,s,S,m),s.memoizedState=h.state,f&&jm(s,a,!0),s.child}function Og(r){var s=r.stateNode;s.pendingContext?Vm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Vm(r,s.context,!1),ud(r,s.containerInfo)}function Lg(r,s,a,h,f){return Eo(),nd(f),s.flags|=256,Jt(r,s,a,h),s.child}var Ad={dehydrated:null,treeContext:null,retryLane:0};function Cd(r){return{baseLanes:r,cachePool:null,transitions:null}}function Vg(r,s,a){var h=s.pendingProps,f=rt.current,m=!1,E=(s.flags&128)!==0,S;if((S=E)||(S=r!==null&&r.memoizedState===null?!1:(f&2)!==0),S?(m=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),Ge(rt,f&1),r===null)return td(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=h.children,r=h.fallback,m?(h=s.mode,m=s.child,E={mode:"hidden",children:E},(h&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=Zu(E,h,0,null),r=Is(r,h,a,null),m.return=s,r.return=s,m.sibling=r,s.child=m,s.child.memoizedState=Cd(a),s.memoizedState=Ad,r):kd(s,E));if(f=r.memoizedState,f!==null&&(S=f.dehydrated,S!==null))return gx(r,s,E,h,S,f,a);if(m){m=h.fallback,E=s.mode,f=r.child,S=f.sibling;var P={mode:"hidden",children:h.children};return(E&1)===0&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=P,s.deletions=null):(h=Ci(f,P),h.subtreeFlags=f.subtreeFlags&14680064),S!==null?m=Ci(S,m):(m=Is(m,E,a,null),m.flags|=2),m.return=s,h.return=s,h.sibling=m,s.child=h,h=m,m=s.child,E=r.child.memoizedState,E=E===null?Cd(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=r.childLanes&~a,s.memoizedState=Ad,h}return m=r.child,r=m.sibling,h=Ci(m,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function kd(r,s){return s=Zu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Uu(r,s,a,h){return h!==null&&nd(h),xo(s,r.child,null,a),r=kd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function gx(r,s,a,h,f,m,E){if(a)return s.flags&256?(s.flags&=-257,h=Td(Error(t(422))),Uu(r,s,E,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(m=h.fallback,f=s.mode,h=Zu({mode:"visible",children:h.children},f,0,null),m=Is(m,f,E,null),m.flags|=2,h.return=s,m.return=s,h.sibling=m,s.child=h,(s.mode&1)!==0&&xo(s,r.child,null,E),s.child.memoizedState=Cd(E),s.memoizedState=Ad,m);if((s.mode&1)===0)return Uu(r,s,E,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var S=h.dgst;return h=S,m=Error(t(419)),h=Td(m,h,void 0),Uu(r,s,E,h)}if(S=(E&r.childLanes)!==0,en||S){if(h=It,h!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(h.suspendedLanes|E))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Vr(r,f),jn(h,r,f,-1))}return qd(),h=Td(Error(t(421))),Uu(r,s,E,h)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=kx.bind(null,r),f._reactRetry=s,null):(r=m.treeContext,gn=yi(f.nextSibling),mn=s,tt=!0,On=null,r!==null&&(xn[Tn++]=Or,xn[Tn++]=Lr,xn[Tn++]=gs,Or=r.id,Lr=r.overflow,gs=s),s=kd(s,h.children),s.flags|=4096,s)}function Mg(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),od(r.return,s,a)}function Pd(r,s,a,h,f){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:f}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=h,m.tail=a,m.tailMode=f)}function jg(r,s,a){var h=s.pendingProps,f=h.revealOrder,m=h.tail;if(Jt(r,s,h.children,a),h=rt.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Mg(r,a,s);else if(r.tag===19)Mg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(Ge(rt,h),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&Du(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),Pd(s,!1,f,a,m);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Du(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}Pd(s,!0,a,null,m);break;case"together":Pd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Bu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function jr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),Es|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=Ci(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Ci(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function yx(r,s,a){switch(s.tag){case 3:Og(s),Eo();break;case 5:Xm(s);break;case 1:Zt(s.type)&&Tu(s);break;case 4:ud(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;Ge(ku,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(Ge(rt,rt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Vg(r,s,a):(Ge(rt,rt.current&1),r=jr(r,s,a),r!==null?r.sibling:null);Ge(rt,rt.current&1);break;case 19:if(h=(a&s.childLanes)!==0,(r.flags&128)!==0){if(h)return jg(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ge(rt,rt.current),h)break;return null;case 22:case 23:return s.lanes=0,bg(r,s,a)}return jr(r,s,a)}var Fg,bd,Ug,Bg;Fg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},bd=function(){},Ug=function(r,s,a,h){var f=r.memoizedProps;if(f!==h){r=s.stateNode,vs(lr.current);var m=null;switch(a){case"input":f=$s(r,f),h=$s(r,h),m=[];break;case"select":f=le({},f,{value:void 0}),h=le({},h,{value:void 0}),m=[];break;case"textarea":f=la(r,f),h=la(r,h),m=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=wu)}Pn(a,h);var E;a=null;for($ in f)if(!h.hasOwnProperty($)&&f.hasOwnProperty($)&&f[$]!=null)if($==="style"){var S=f[$];for(E in S)S.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(o.hasOwnProperty($)?m||(m=[]):(m=m||[]).push($,null));for($ in h){var P=h[$];if(S=f?.[$],h.hasOwnProperty($)&&P!==S&&(P!=null||S!=null))if($==="style")if(S){for(E in S)!S.hasOwnProperty(E)||P&&P.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in P)P.hasOwnProperty(E)&&S[E]!==P[E]&&(a||(a={}),a[E]=P[E])}else a||(m||(m=[]),m.push($,a)),a=P;else $==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(m=m||[]).push($,P)):$==="children"?typeof P!="string"&&typeof P!="number"||(m=m||[]).push($,""+P):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(o.hasOwnProperty($)?(P!=null&&$==="onScroll"&&Ye("scroll",r),m||S===P||(m=[])):(m=m||[]).push($,P))}a&&(m=m||[]).push("style",a);var $=m;(s.updateQueue=$)&&(s.flags|=4)}},Bg=function(r,s,a,h){a!==h&&(s.flags|=4)};function Ga(r,s){if(!tt)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function zt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function _x(r,s,a){var h=s.pendingProps;switch(Zh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(s),null;case 1:return Zt(s.type)&&xu(),zt(s),null;case 3:return h=s.stateNode,Io(),Xe(Xt),Xe(Ut),dd(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(Au(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,On!==null&&(zd(On),On=null))),bd(r,s),zt(s),null;case 5:cd(s);var f=vs($a.current);if(a=s.type,r!==null&&s.stateNode!=null)Ug(r,s,a,h,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return zt(s),null}if(r=vs(lr.current),Au(s)){h=s.stateNode,a=s.type;var m=s.memoizedProps;switch(h[ar]=s,h[ja]=m,r=(s.mode&1)!==0,a){case"dialog":Ye("cancel",h),Ye("close",h);break;case"iframe":case"object":case"embed":Ye("load",h);break;case"video":case"audio":for(f=0;f<La.length;f++)Ye(La[f],h);break;case"source":Ye("error",h);break;case"img":case"image":case"link":Ye("error",h),Ye("load",h);break;case"details":Ye("toggle",h);break;case"input":ql(h,m),Ye("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!m.multiple},Ye("invalid",h);break;case"textarea":ua(h,m),Ye("invalid",h)}Pn(a,m),f=null;for(var E in m)if(m.hasOwnProperty(E)){var S=m[E];E==="children"?typeof S=="string"?h.textContent!==S&&(m.suppressHydrationWarning!==!0&&vu(h.textContent,S,r),f=["children",S]):typeof S=="number"&&h.textContent!==""+S&&(m.suppressHydrationWarning!==!0&&vu(h.textContent,S,r),f=["children",""+S]):o.hasOwnProperty(E)&&S!=null&&E==="onScroll"&&Ye("scroll",h)}switch(a){case"input":zs(h),aa(h,m,!0);break;case"textarea":zs(h),ti(h);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(h.onclick=wu)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ca(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=E.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=E.createElement(a,{is:h.is}):(r=E.createElement(a),a==="select"&&(E=r,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):r=E.createElementNS(r,a),r[ar]=s,r[ja]=h,Fg(r,s,!1,!1),s.stateNode=r;e:{switch(E=Ks(a,h),a){case"dialog":Ye("cancel",r),Ye("close",r),f=h;break;case"iframe":case"object":case"embed":Ye("load",r),f=h;break;case"video":case"audio":for(f=0;f<La.length;f++)Ye(La[f],r);f=h;break;case"source":Ye("error",r),f=h;break;case"img":case"image":case"link":Ye("error",r),Ye("load",r),f=h;break;case"details":Ye("toggle",r),f=h;break;case"input":ql(r,h),f=$s(r,h),Ye("invalid",r);break;case"option":f=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},f=le({},h,{value:void 0}),Ye("invalid",r);break;case"textarea":ua(r,h),f=la(r,h),Ye("invalid",r);break;default:f=h}Pn(a,f),S=f;for(m in S)if(S.hasOwnProperty(m)){var P=S[m];m==="style"?Ws(r,P):m==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Kl(r,P)):m==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&es(r,P):typeof P=="number"&&es(r,""+P):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?P!=null&&m==="onScroll"&&Ye("scroll",r):P!=null&&re(r,m,P,E))}switch(a){case"input":zs(r),aa(r,h,!1);break;case"textarea":zs(r),ti(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Me(h.value));break;case"select":r.multiple=!!h.multiple,m=h.value,m!=null?kn(r,!!h.multiple,m,!1):h.defaultValue!=null&&kn(r,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=wu)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return zt(s),null;case 6:if(r&&s.stateNode!=null)Bg(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=vs($a.current),vs(lr.current),Au(s)){if(h=s.stateNode,a=s.memoizedProps,h[ar]=s,(m=h.nodeValue!==a)&&(r=mn,r!==null))switch(r.tag){case 3:vu(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&vu(h.nodeValue,a,(r.mode&1)!==0)}m&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[ar]=s,s.stateNode=h}return zt(s),null;case 13:if(Xe(rt),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(tt&&gn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Hm(),Eo(),s.flags|=98560,m=!1;else if(m=Au(s),h!==null&&h.dehydrated!==null){if(r===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[ar]=s}else Eo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;zt(s),m=!1}else On!==null&&(zd(On),On=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(rt.current&1)!==0?Et===0&&(Et=3):qd())),s.updateQueue!==null&&(s.flags|=4),zt(s),null);case 4:return Io(),bd(r,s),r===null&&Va(s.stateNode.containerInfo),zt(s),null;case 10:return sd(s.type._context),zt(s),null;case 17:return Zt(s.type)&&xu(),zt(s),null;case 19:if(Xe(rt),m=s.memoizedState,m===null)return zt(s),null;if(h=(s.flags&128)!==0,E=m.rendering,E===null)if(h)Ga(m,!1);else{if(Et!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(E=Du(r),E!==null){for(s.flags|=128,Ga(m,!1),h=E.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)m=a,r=h,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=r,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,r=E.dependencies,m.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Ge(rt,rt.current&1|2),s.child}r=r.sibling}m.tail!==null&&Je()>ko&&(s.flags|=128,h=!0,Ga(m,!1),s.lanes=4194304)}else{if(!h)if(r=Du(E),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ga(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!tt)return zt(s),null}else 2*Je()-m.renderingStartTime>ko&&a!==1073741824&&(s.flags|=128,h=!0,Ga(m,!1),s.lanes=4194304);m.isBackwards?(E.sibling=s.child,s.child=E):(a=m.last,a!==null?a.sibling=E:s.child=E,m.last=E)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=Je(),s.sibling=null,a=rt.current,Ge(rt,h?a&1|2:a&1),s):(zt(s),null);case 22:case 23:return Hd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(yn&1073741824)!==0&&(zt(s),s.subtreeFlags&6&&(s.flags|=8192)):zt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function vx(r,s){switch(Zh(s),s.tag){case 1:return Zt(s.type)&&xu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Io(),Xe(Xt),Xe(Ut),dd(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return cd(s),null;case 13:if(Xe(rt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Eo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Xe(rt),null;case 4:return Io(),null;case 10:return sd(s.type._context),null;case 22:case 23:return Hd(),null;case 24:return null;default:return null}}var zu=!1,$t=!1,wx=typeof WeakSet=="function"?WeakSet:Set,ue=null;function Ao(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){at(r,s,h)}else a.current=null}function Nd(r,s,a){try{a()}catch(h){at(r,s,h)}}var zg=!1;function Ex(r,s){if(Hh=kr,r=wm(),Vh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var f=h.anchorOffset,m=h.focusNode;h=h.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,S=-1,P=-1,$=0,Z=0,ee=r,X=null;t:for(;;){for(var ae;ee!==a||f!==0&&ee.nodeType!==3||(S=E+f),ee!==m||h!==0&&ee.nodeType!==3||(P=E+h),ee.nodeType===3&&(E+=ee.nodeValue.length),(ae=ee.firstChild)!==null;)X=ee,ee=ae;for(;;){if(ee===r)break t;if(X===a&&++$===f&&(S=E),X===m&&++Z===h&&(P=E),(ae=ee.nextSibling)!==null)break;ee=X,X=ee.parentNode}ee=ae}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(qh={focusedElem:r,selectionRange:a},kr=!1,ue=s;ue!==null;)if(s=ue,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ue=r;else for(;ue!==null;){s=ue;try{var ce=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var he=ce.memoizedProps,ht=ce.memoizedState,U=s.stateNode,O=U.getSnapshotBeforeUpdate(s.elementType===s.type?he:Ln(s.type,he),ht);U.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var z=s.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){at(s,s.return,te)}if(r=s.sibling,r!==null){r.return=s.return,ue=r;break}ue=s.return}return ce=zg,zg=!1,ce}function Qa(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&r)===r){var m=f.destroy;f.destroy=void 0,m!==void 0&&Nd(s,a,m)}f=f.next}while(f!==h)}}function $u(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function Dd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function $g(r){var s=r.alternate;s!==null&&(r.alternate=null,$g(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[ar],delete s[ja],delete s[Qh],delete s[rx],delete s[ix])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Hg(r){return r.tag===5||r.tag===3||r.tag===4}function qg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Hg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Od(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=wu));else if(h!==4&&(r=r.child,r!==null))for(Od(r,s,a),r=r.sibling;r!==null;)Od(r,s,a),r=r.sibling}function Ld(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(Ld(r,s,a),r=r.sibling;r!==null;)Ld(r,s,a),r=r.sibling}var Nt=null,Vn=!1;function Ti(r,s,a){for(a=a.child;a!==null;)Wg(r,s,a),a=a.sibling}function Wg(r,s,a){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(ss,a)}catch{}switch(a.tag){case 5:$t||Ao(a,s);case 6:var h=Nt,f=Vn;Nt=null,Ti(r,s,a),Nt=h,Vn=f,Nt!==null&&(Vn?(r=Nt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Nt.removeChild(a.stateNode));break;case 18:Nt!==null&&(Vn?(r=Nt,a=a.stateNode,r.nodeType===8?Gh(r.parentNode,a):r.nodeType===1&&Gh(r,a),fi(r)):Gh(Nt,a.stateNode));break;case 4:h=Nt,f=Vn,Nt=a.stateNode.containerInfo,Vn=!0,Ti(r,s,a),Nt=h,Vn=f;break;case 0:case 11:case 14:case 15:if(!$t&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var m=f,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&Nd(a,s,E),f=f.next}while(f!==h)}Ti(r,s,a);break;case 1:if(!$t&&(Ao(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(S){at(a,s,S)}Ti(r,s,a);break;case 21:Ti(r,s,a);break;case 22:a.mode&1?($t=(h=$t)||a.memoizedState!==null,Ti(r,s,a),$t=h):Ti(r,s,a);break;default:Ti(r,s,a)}}function Kg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new wx),s.forEach(function(h){var f=Px.bind(null,r,h);a.has(h)||(a.add(h),h.then(f,f))})}}function Mn(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var f=a[h];try{var m=r,E=s,S=E;e:for(;S!==null;){switch(S.tag){case 5:Nt=S.stateNode,Vn=!1;break e;case 3:Nt=S.stateNode.containerInfo,Vn=!0;break e;case 4:Nt=S.stateNode.containerInfo,Vn=!0;break e}S=S.return}if(Nt===null)throw Error(t(160));Wg(m,E,f),Nt=null,Vn=!1;var P=f.alternate;P!==null&&(P.return=null),f.return=null}catch($){at(f,s,$)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Gg(s,r),s=s.sibling}function Gg(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Mn(s,r),cr(r),h&4){try{Qa(3,r,r.return),$u(3,r)}catch(he){at(r,r.return,he)}try{Qa(5,r,r.return)}catch(he){at(r,r.return,he)}}break;case 1:Mn(s,r),cr(r),h&512&&a!==null&&Ao(a,a.return);break;case 5:if(Mn(s,r),cr(r),h&512&&a!==null&&Ao(a,a.return),r.flags&32){var f=r.stateNode;try{es(f,"")}catch(he){at(r,r.return,he)}}if(h&4&&(f=r.stateNode,f!=null)){var m=r.memoizedProps,E=a!==null?a.memoizedProps:m,S=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{S==="input"&&m.type==="radio"&&m.name!=null&&Hs(f,m),Ks(S,E);var $=Ks(S,m);for(E=0;E<P.length;E+=2){var Z=P[E],ee=P[E+1];Z==="style"?Ws(f,ee):Z==="dangerouslySetInnerHTML"?Kl(f,ee):Z==="children"?es(f,ee):re(f,Z,ee,$)}switch(S){case"input":Zi(f,m);break;case"textarea":Wl(f,m);break;case"select":var X=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var ae=m.value;ae!=null?kn(f,!!m.multiple,ae,!1):X!==!!m.multiple&&(m.defaultValue!=null?kn(f,!!m.multiple,m.defaultValue,!0):kn(f,!!m.multiple,m.multiple?[]:"",!1))}f[ja]=m}catch(he){at(r,r.return,he)}}break;case 6:if(Mn(s,r),cr(r),h&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,m=r.memoizedProps;try{f.nodeValue=m}catch(he){at(r,r.return,he)}}break;case 3:if(Mn(s,r),cr(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{fi(s.containerInfo)}catch(he){at(r,r.return,he)}break;case 4:Mn(s,r),cr(r);break;case 13:Mn(s,r),cr(r),f=r.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(jd=Je())),h&4&&Kg(r);break;case 22:if(Z=a!==null&&a.memoizedState!==null,r.mode&1?($t=($=$t)||Z,Mn(s,r),$t=$):Mn(s,r),cr(r),h&8192){if($=r.memoizedState!==null,(r.stateNode.isHidden=$)&&!Z&&(r.mode&1)!==0)for(ue=r,Z=r.child;Z!==null;){for(ee=ue=Z;ue!==null;){switch(X=ue,ae=X.child,X.tag){case 0:case 11:case 14:case 15:Qa(4,X,X.return);break;case 1:Ao(X,X.return);var ce=X.stateNode;if(typeof ce.componentWillUnmount=="function"){h=X,a=X.return;try{s=h,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(he){at(h,a,he)}}break;case 5:Ao(X,X.return);break;case 22:if(X.memoizedState!==null){Yg(ee);continue}}ae!==null?(ae.return=X,ue=ae):Yg(ee)}Z=Z.sibling}e:for(Z=null,ee=r;;){if(ee.tag===5){if(Z===null){Z=ee;try{f=ee.stateNode,$?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(S=ee.stateNode,P=ee.memoizedProps.style,E=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=ii("display",E))}catch(he){at(r,r.return,he)}}}else if(ee.tag===6){if(Z===null)try{ee.stateNode.nodeValue=$?"":ee.memoizedProps}catch(he){at(r,r.return,he)}}else if((ee.tag!==22&&ee.tag!==23||ee.memoizedState===null||ee===r)&&ee.child!==null){ee.child.return=ee,ee=ee.child;continue}if(ee===r)break e;for(;ee.sibling===null;){if(ee.return===null||ee.return===r)break e;Z===ee&&(Z=null),ee=ee.return}Z===ee&&(Z=null),ee.sibling.return=ee.return,ee=ee.sibling}}break;case 19:Mn(s,r),cr(r),h&4&&Kg(r);break;case 21:break;default:Mn(s,r),cr(r)}}function cr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Hg(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(es(f,""),h.flags&=-33);var m=qg(r);Ld(r,m,f);break;case 3:case 4:var E=h.stateNode.containerInfo,S=qg(r);Od(r,S,E);break;default:throw Error(t(161))}}catch(P){at(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function xx(r,s,a){ue=r,Qg(r)}function Qg(r,s,a){for(var h=(r.mode&1)!==0;ue!==null;){var f=ue,m=f.child;if(f.tag===22&&h){var E=f.memoizedState!==null||zu;if(!E){var S=f.alternate,P=S!==null&&S.memoizedState!==null||$t;S=zu;var $=$t;if(zu=E,($t=P)&&!$)for(ue=f;ue!==null;)E=ue,P=E.child,E.tag===22&&E.memoizedState!==null?Xg(f):P!==null?(P.return=E,ue=P):Xg(f);for(;m!==null;)ue=m,Qg(m),m=m.sibling;ue=f,zu=S,$t=$}Jg(r)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,ue=m):Jg(r)}}function Jg(r){for(;ue!==null;){var s=ue;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:$t||$u(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!$t)if(a===null)h.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Ln(s.type,a.memoizedProps);h.componentDidUpdate(f,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&Ym(s,m,h);break;case 3:var E=s.updateQueue;if(E!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Ym(s,E,a)}break;case 5:var S=s.stateNode;if(a===null&&s.flags&4){a=S;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var $=s.alternate;if($!==null){var Z=$.memoizedState;if(Z!==null){var ee=Z.dehydrated;ee!==null&&fi(ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}$t||s.flags&512&&Dd(s)}catch(X){at(s,s.return,X)}}if(s===r){ue=null;break}if(a=s.sibling,a!==null){a.return=s.return,ue=a;break}ue=s.return}}function Yg(r){for(;ue!==null;){var s=ue;if(s===r){ue=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ue=a;break}ue=s.return}}function Xg(r){for(;ue!==null;){var s=ue;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{$u(4,s)}catch(P){at(s,a,P)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(P){at(s,f,P)}}var m=s.return;try{Dd(s)}catch(P){at(s,m,P)}break;case 5:var E=s.return;try{Dd(s)}catch(P){at(s,E,P)}}}catch(P){at(s,s.return,P)}if(s===r){ue=null;break}var S=s.sibling;if(S!==null){S.return=s.return,ue=S;break}ue=s.return}}var Tx=Math.ceil,Hu=me.ReactCurrentDispatcher,Vd=me.ReactCurrentOwner,Rn=me.ReactCurrentBatchConfig,je=0,It=null,gt=null,Dt=0,yn=0,Co=_i(0),Et=0,Ja=null,Es=0,qu=0,Md=0,Ya=null,tn=null,jd=0,ko=1/0,Fr=null,Wu=!1,Fd=null,Si=null,Ku=!1,Ii=null,Gu=0,Xa=0,Ud=null,Qu=-1,Ju=0;function Yt(){return(je&6)!==0?Je():Qu!==-1?Qu:Qu=Je()}function Ri(r){return(r.mode&1)===0?1:(je&2)!==0&&Dt!==0?Dt&-Dt:ox.transition!==null?(Ju===0&&(Ju=va()),Ju):(r=Le,r!==0||(r=window.event,r=r===void 0?16:ro(r.type)),r)}function jn(r,s,a,h){if(50<Xa)throw Xa=0,Ud=null,Error(t(185));us(r,a,h),((je&2)===0||r!==It)&&(r===It&&((je&2)===0&&(qu|=a),Et===4&&Ai(r,Dt)),nn(r,h),a===1&&je===0&&(s.mode&1)===0&&(ko=Je()+500,Su&&wi()))}function nn(r,s){var a=r.callbackNode;ls(r,s);var h=Rr(r,r===It?Dt:0);if(h===0)a!==null&&Js(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&Js(a),s===1)r.tag===0?sx(ey.bind(null,r)):Fm(ey.bind(null,r)),tx(function(){(je&6)===0&&wi()}),a=null;else{switch(Yn(h)){case 1:a=Ys;break;case 4:a=ga;break;case 16:a=is;break;case 536870912:a=Xs;break;default:a=is}a=ly(a,Zg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Zg(r,s){if(Qu=-1,Ju=0,(je&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Po()&&r.callbackNode!==a)return null;var h=Rr(r,r===It?Dt:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||s)s=Yu(r,h);else{s=h;var f=je;je|=2;var m=ny();(It!==r||Dt!==s)&&(Fr=null,ko=Je()+500,Ts(r,s));do try{Rx();break}catch(S){ty(r,S)}while(!0);id(),Hu.current=m,je=f,gt!==null?s=0:(It=null,Dt=0,s=Et)}if(s!==0){if(s===2&&(f=_a(r),f!==0&&(h=f,s=Bd(r,f))),s===1)throw a=Ja,Ts(r,0),Ai(r,h),nn(r,Je()),a;if(s===6)Ai(r,h);else{if(f=r.current.alternate,(h&30)===0&&!Sx(f)&&(s=Yu(r,h),s===2&&(m=_a(r),m!==0&&(h=m,s=Bd(r,m))),s===1))throw a=Ja,Ts(r,0),Ai(r,h),nn(r,Je()),a;switch(r.finishedWork=f,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:Ss(r,tn,Fr);break;case 3:if(Ai(r,h),(h&130023424)===h&&(s=jd+500-Je(),10<s)){if(Rr(r,0)!==0)break;if(f=r.suspendedLanes,(f&h)!==h){Yt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=Kh(Ss.bind(null,r,tn,Fr),s);break}Ss(r,tn,Fr);break;case 4:if(Ai(r,h),(h&4194240)===h)break;for(s=r.eventTimes,f=-1;0<h;){var E=31-cn(h);m=1<<E,E=s[E],E>f&&(f=E),h&=~m}if(h=f,h=Je()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*Tx(h/1960))-h,10<h){r.timeoutHandle=Kh(Ss.bind(null,r,tn,Fr),h);break}Ss(r,tn,Fr);break;case 5:Ss(r,tn,Fr);break;default:throw Error(t(329))}}}return nn(r,Je()),r.callbackNode===a?Zg.bind(null,r):null}function Bd(r,s){var a=Ya;return r.current.memoizedState.isDehydrated&&(Ts(r,s).flags|=256),r=Yu(r,s),r!==2&&(s=tn,tn=a,s!==null&&zd(s)),r}function zd(r){tn===null?tn=r:tn.push.apply(tn,r)}function Sx(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var f=a[h],m=f.getSnapshot;f=f.value;try{if(!Dn(m(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ai(r,s){for(s&=~Md,s&=~qu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-cn(s),h=1<<a;r[a]=-1,s&=~h}}function ey(r){if((je&6)!==0)throw Error(t(327));Po();var s=Rr(r,0);if((s&1)===0)return nn(r,Je()),null;var a=Yu(r,s);if(r.tag!==0&&a===2){var h=_a(r);h!==0&&(s=h,a=Bd(r,h))}if(a===1)throw a=Ja,Ts(r,0),Ai(r,s),nn(r,Je()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Ss(r,tn,Fr),nn(r,Je()),null}function $d(r,s){var a=je;je|=1;try{return r(s)}finally{je=a,je===0&&(ko=Je()+500,Su&&wi())}}function xs(r){Ii!==null&&Ii.tag===0&&(je&6)===0&&Po();var s=je;je|=1;var a=Rn.transition,h=Le;try{if(Rn.transition=null,Le=1,r)return r()}finally{Le=h,Rn.transition=a,je=s,(je&6)===0&&wi()}}function Hd(){yn=Co.current,Xe(Co)}function Ts(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,ex(a)),gt!==null)for(a=gt.return;a!==null;){var h=a;switch(Zh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&xu();break;case 3:Io(),Xe(Xt),Xe(Ut),dd();break;case 5:cd(h);break;case 4:Io();break;case 13:Xe(rt);break;case 19:Xe(rt);break;case 10:sd(h.type._context);break;case 22:case 23:Hd()}a=a.return}if(It=r,gt=r=Ci(r.current,null),Dt=yn=s,Et=0,Ja=null,Md=qu=Es=0,tn=Ya=null,_s!==null){for(s=0;s<_s.length;s++)if(a=_s[s],h=a.interleaved,h!==null){a.interleaved=null;var f=h.next,m=a.pending;if(m!==null){var E=m.next;m.next=f,h.next=E}a.pending=h}_s=null}return r}function ty(r,s){do{var a=gt;try{if(id(),Ou.current=ju,Lu){for(var h=it.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}Lu=!1}if(ws=0,St=wt=it=null,Ha=!1,qa=0,Vd.current=null,a===null||a.return===null){Et=1,Ja=s,gt=null;break}e:{var m=r,E=a.return,S=a,P=s;if(s=Dt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var $=P,Z=S,ee=Z.tag;if((Z.mode&1)===0&&(ee===0||ee===11||ee===15)){var X=Z.alternate;X?(Z.updateQueue=X.updateQueue,Z.memoizedState=X.memoizedState,Z.lanes=X.lanes):(Z.updateQueue=null,Z.memoizedState=null)}var ae=Rg(E);if(ae!==null){ae.flags&=-257,Ag(ae,E,S,m,s),ae.mode&1&&Ig(m,$,s),s=ae,P=$;var ce=s.updateQueue;if(ce===null){var he=new Set;he.add(P),s.updateQueue=he}else ce.add(P);break e}else{if((s&1)===0){Ig(m,$,s),qd();break e}P=Error(t(426))}}else if(tt&&S.mode&1){var ht=Rg(E);if(ht!==null){(ht.flags&65536)===0&&(ht.flags|=256),Ag(ht,E,S,m,s),nd(Ro(P,S));break e}}m=P=Ro(P,S),Et!==4&&(Et=2),Ya===null?Ya=[m]:Ya.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var U=Tg(m,P,s);Jm(m,U);break e;case 1:S=P;var O=m.type,z=m.stateNode;if((m.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(Si===null||!Si.has(z)))){m.flags|=65536,s&=-s,m.lanes|=s;var te=Sg(m,S,s);Jm(m,te);break e}}m=m.return}while(m!==null)}iy(a)}catch(de){s=de,gt===a&&a!==null&&(gt=a=a.return);continue}break}while(!0)}function ny(){var r=Hu.current;return Hu.current=ju,r===null?ju:r}function qd(){(Et===0||Et===3||Et===2)&&(Et=4),It===null||(Es&268435455)===0&&(qu&268435455)===0||Ai(It,Dt)}function Yu(r,s){var a=je;je|=2;var h=ny();(It!==r||Dt!==s)&&(Fr=null,Ts(r,s));do try{Ix();break}catch(f){ty(r,f)}while(!0);if(id(),je=a,Hu.current=h,gt!==null)throw Error(t(261));return It=null,Dt=0,Et}function Ix(){for(;gt!==null;)ry(gt)}function Rx(){for(;gt!==null&&!rs();)ry(gt)}function ry(r){var s=ay(r.alternate,r,yn);r.memoizedProps=r.pendingProps,s===null?iy(r):gt=s,Vd.current=null}function iy(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=_x(a,s,yn),a!==null){gt=a;return}}else{if(a=vx(a,s),a!==null){a.flags&=32767,gt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Et=6,gt=null;return}}if(s=s.sibling,s!==null){gt=s;return}gt=s=r}while(s!==null);Et===0&&(Et=5)}function Ss(r,s,a){var h=Le,f=Rn.transition;try{Rn.transition=null,Le=1,Ax(r,s,a,h)}finally{Rn.transition=f,Le=h}return null}function Ax(r,s,a,h){do Po();while(Ii!==null);if((je&6)!==0)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var m=a.lanes|a.childLanes;if(bh(r,m),r===It&&(gt=It=null,Dt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ku||(Ku=!0,ly(is,function(){return Po(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Rn.transition,Rn.transition=null;var E=Le;Le=1;var S=je;je|=4,Vd.current=null,Ex(r,a),Gg(a,r),KE(qh),kr=!!Hh,qh=Hh=null,r.current=a,xx(a),Ir(),je=S,Le=E,Rn.transition=m}else r.current=a;if(Ku&&(Ku=!1,Ii=r,Gu=f),m=r.pendingLanes,m===0&&(Si=null),iu(a.stateNode),nn(r,Je()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],h(f.value,{componentStack:f.stack,digest:f.digest});if(Wu)throw Wu=!1,r=Fd,Fd=null,r;return(Gu&1)!==0&&r.tag!==0&&Po(),m=r.pendingLanes,(m&1)!==0?r===Ud?Xa++:(Xa=0,Ud=r):Xa=0,wi(),null}function Po(){if(Ii!==null){var r=Yn(Gu),s=Rn.transition,a=Le;try{if(Rn.transition=null,Le=16>r?16:r,Ii===null)var h=!1;else{if(r=Ii,Ii=null,Gu=0,(je&6)!==0)throw Error(t(331));var f=je;for(je|=4,ue=r.current;ue!==null;){var m=ue,E=m.child;if((ue.flags&16)!==0){var S=m.deletions;if(S!==null){for(var P=0;P<S.length;P++){var $=S[P];for(ue=$;ue!==null;){var Z=ue;switch(Z.tag){case 0:case 11:case 15:Qa(8,Z,m)}var ee=Z.child;if(ee!==null)ee.return=Z,ue=ee;else for(;ue!==null;){Z=ue;var X=Z.sibling,ae=Z.return;if($g(Z),Z===$){ue=null;break}if(X!==null){X.return=ae,ue=X;break}ue=ae}}}var ce=m.alternate;if(ce!==null){var he=ce.child;if(he!==null){ce.child=null;do{var ht=he.sibling;he.sibling=null,he=ht}while(he!==null)}}ue=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,ue=E;else e:for(;ue!==null;){if(m=ue,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Qa(9,m,m.return)}var U=m.sibling;if(U!==null){U.return=m.return,ue=U;break e}ue=m.return}}var O=r.current;for(ue=O;ue!==null;){E=ue;var z=E.child;if((E.subtreeFlags&2064)!==0&&z!==null)z.return=E,ue=z;else e:for(E=O;ue!==null;){if(S=ue,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:$u(9,S)}}catch(de){at(S,S.return,de)}if(S===E){ue=null;break e}var te=S.sibling;if(te!==null){te.return=S.return,ue=te;break e}ue=S.return}}if(je=f,wi(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(ss,r)}catch{}h=!0}return h}finally{Le=a,Rn.transition=s}}return!1}function sy(r,s,a){s=Ro(a,s),s=Tg(r,s,1),r=xi(r,s,1),s=Yt(),r!==null&&(us(r,1,s),nn(r,s))}function at(r,s,a){if(r.tag===3)sy(r,r,a);else for(;s!==null;){if(s.tag===3){sy(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Si===null||!Si.has(h))){r=Ro(a,r),r=Sg(s,r,1),s=xi(s,r,1),r=Yt(),s!==null&&(us(s,1,r),nn(s,r));break}}s=s.return}}function Cx(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=Yt(),r.pingedLanes|=r.suspendedLanes&a,It===r&&(Dt&a)===a&&(Et===4||Et===3&&(Dt&130023424)===Dt&&500>Je()-jd?Ts(r,0):Md|=a),nn(r,s)}function oy(r,s){s===0&&((r.mode&1)===0?s=1:(s=ci,ci<<=1,(ci&130023424)===0&&(ci=4194304)));var a=Yt();r=Vr(r,s),r!==null&&(us(r,s,a),nn(r,a))}function kx(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),oy(r,a)}function Px(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),oy(r,a)}var ay;ay=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Xt.current)en=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return en=!1,yx(r,s,a);en=(r.flags&131072)!==0}else en=!1,tt&&(s.flags&1048576)!==0&&Um(s,Ru,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Bu(r,s),r=s.pendingProps;var f=_o(s,Ut.current);So(s,a),f=md(null,s,h,r,f,a);var m=gd();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Zt(h)?(m=!0,Tu(s)):m=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,ld(s),f.updater=Fu,s.stateNode=f,f._reactInternals=s,xd(s,h,r,a),s=Rd(null,s,h,!0,m,a)):(s.tag=0,tt&&m&&Xh(s),Jt(null,s,f,a),s=s.child),s;case 16:h=s.elementType;e:{switch(Bu(r,s),r=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=Nx(h),r=Ln(h,r),f){case 0:s=Id(null,s,h,r,a);break e;case 1:s=Dg(null,s,h,r,a);break e;case 11:s=Cg(null,s,h,r,a);break e;case 14:s=kg(null,s,h,Ln(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Ln(h,f),Id(r,s,h,f,a);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Ln(h,f),Dg(r,s,h,f,a);case 3:e:{if(Og(s),r===null)throw Error(t(387));h=s.pendingProps,m=s.memoizedState,f=m.element,Qm(r,s),Nu(s,h,null,a);var E=s.memoizedState;if(h=E.element,m.isDehydrated)if(m={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){f=Ro(Error(t(423)),s),s=Lg(r,s,h,a,f);break e}else if(h!==f){f=Ro(Error(t(424)),s),s=Lg(r,s,h,a,f);break e}else for(gn=yi(s.stateNode.containerInfo.firstChild),mn=s,tt=!0,On=null,a=Km(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Eo(),h===f){s=jr(r,s,a);break e}Jt(r,s,h,a)}s=s.child}return s;case 5:return Xm(s),r===null&&td(s),h=s.type,f=s.pendingProps,m=r!==null?r.memoizedProps:null,E=f.children,Wh(h,f)?E=null:m!==null&&Wh(h,m)&&(s.flags|=32),Ng(r,s),Jt(r,s,E,a),s.child;case 6:return r===null&&td(s),null;case 13:return Vg(r,s,a);case 4:return ud(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=xo(s,null,h,a):Jt(r,s,h,a),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Ln(h,f),Cg(r,s,h,f,a);case 7:return Jt(r,s,s.pendingProps,a),s.child;case 8:return Jt(r,s,s.pendingProps.children,a),s.child;case 12:return Jt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,m=s.memoizedProps,E=f.value,Ge(ku,h._currentValue),h._currentValue=E,m!==null)if(Dn(m.value,E)){if(m.children===f.children&&!Xt.current){s=jr(r,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var S=m.dependencies;if(S!==null){E=m.child;for(var P=S.firstContext;P!==null;){if(P.context===h){if(m.tag===1){P=Mr(-1,a&-a),P.tag=2;var $=m.updateQueue;if($!==null){$=$.shared;var Z=$.pending;Z===null?P.next=P:(P.next=Z.next,Z.next=P),$.pending=P}}m.lanes|=a,P=m.alternate,P!==null&&(P.lanes|=a),od(m.return,a,s),S.lanes|=a;break}P=P.next}}else if(m.tag===10)E=m.type===s.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=a,S=E.alternate,S!==null&&(S.lanes|=a),od(E,a,s),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===s){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}Jt(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,So(s,a),f=Sn(f),h=h(f),s.flags|=1,Jt(r,s,h,a),s.child;case 14:return h=s.type,f=Ln(h,s.pendingProps),f=Ln(h.type,f),kg(r,s,h,f,a);case 15:return Pg(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Ln(h,f),Bu(r,s),s.tag=1,Zt(h)?(r=!0,Tu(s)):r=!1,So(s,a),Eg(s,h,f),xd(s,h,f,a),Rd(null,s,h,!0,r,a);case 19:return jg(r,s,a);case 22:return bg(r,s,a)}throw Error(t(156,s.tag))};function ly(r,s){return ma(r,s)}function bx(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(r,s,a,h){return new bx(r,s,a,h)}function Wd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Nx(r){if(typeof r=="function")return Wd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===j)return 11;if(r===Tt)return 14}return 2}function Ci(r,s){var a=r.alternate;return a===null?(a=An(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Xu(r,s,a,h,f,m){var E=2;if(h=r,typeof r=="function")Wd(r)&&(E=1);else if(typeof r=="string")E=5;else e:switch(r){case k:return Is(a.children,f,m,s);case R:E=8,f|=8;break;case A:return r=An(12,a,s,f|2),r.elementType=A,r.lanes=m,r;case C:return r=An(13,a,s,f),r.elementType=C,r.lanes=m,r;case Ke:return r=An(19,a,s,f),r.elementType=Ke,r.lanes=m,r;case et:return Zu(a,f,m,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case D:E=10;break e;case b:E=9;break e;case j:E=11;break e;case Tt:E=14;break e;case jt:E=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=An(E,a,s,f),s.elementType=r,s.type=h,s.lanes=m,s}function Is(r,s,a,h){return r=An(7,r,h,s),r.lanes=a,r}function Zu(r,s,a,h){return r=An(22,r,h,s),r.elementType=et,r.lanes=a,r.stateNode={isHidden:!1},r}function Kd(r,s,a){return r=An(6,r,null,s),r.lanes=a,r}function Gd(r,s,a){return s=An(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function Dx(r,s,a,h,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wa(0),this.expirationTimes=wa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wa(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Qd(r,s,a,h,f,m,E,S,P){return r=new Dx(r,s,a,S,P),s===1?(s=1,m===!0&&(s|=8)):s=0,m=An(3,null,null,s),r.current=m,m.stateNode=r,m.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ld(m),r}function Ox(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:we,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function uy(r){if(!r)return vi;r=r._reactInternals;e:{if(bn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Zt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Zt(a))return Mm(r,a,s)}return s}function cy(r,s,a,h,f,m,E,S,P){return r=Qd(a,h,!0,r,f,m,E,S,P),r.context=uy(null),a=r.current,h=Yt(),f=Ri(a),m=Mr(h,f),m.callback=s??null,xi(a,m,f),r.current.lanes=f,us(r,f,h),nn(r,h),r}function ec(r,s,a,h){var f=s.current,m=Yt(),E=Ri(f);return a=uy(a),s.context===null?s.context=a:s.pendingContext=a,s=Mr(m,E),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=xi(f,s,E),r!==null&&(jn(r,f,E,m),bu(r,f,E)),E}function tc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function hy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Jd(r,s){hy(r,s),(r=r.alternate)&&hy(r,s)}function Lx(){return null}var dy=typeof reportError=="function"?reportError:function(r){console.error(r)};function Yd(r){this._internalRoot=r}nc.prototype.render=Yd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));ec(r,s,null,null)},nc.prototype.unmount=Yd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;xs(function(){ec(null,r,null,null)}),s[Nr]=null}};function nc(r){this._internalRoot=r}nc.prototype.unstable_scheduleHydration=function(r){if(r){var s=Sa();r={blockedOn:null,target:r,priority:s};for(var a=0;a<hn.length&&s!==0&&s<hn[a].priority;a++);hn.splice(a,0,r),a===0&&to(r)}};function Xd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function rc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function fy(){}function Vx(r,s,a,h,f){if(f){if(typeof h=="function"){var m=h;h=function(){var $=tc(E);m.call($)}}var E=cy(s,h,r,0,null,!1,!1,"",fy);return r._reactRootContainer=E,r[Nr]=E.current,Va(r.nodeType===8?r.parentNode:r),xs(),E}for(;f=r.lastChild;)r.removeChild(f);if(typeof h=="function"){var S=h;h=function(){var $=tc(P);S.call($)}}var P=Qd(r,0,!1,null,null,!1,!1,"",fy);return r._reactRootContainer=P,r[Nr]=P.current,Va(r.nodeType===8?r.parentNode:r),xs(function(){ec(s,P,a,h)}),P}function ic(r,s,a,h,f){var m=a._reactRootContainer;if(m){var E=m;if(typeof f=="function"){var S=f;f=function(){var P=tc(E);S.call(P)}}ec(s,E,r,f)}else E=Vx(a,s,r,f,h);return tc(E)}xa=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Ue(s.pendingLanes);a!==0&&(Ea(s,a|1),nn(s,Je()),(je&6)===0&&(ko=Je()+500,wi()))}break;case 13:xs(function(){var h=Vr(r,1);if(h!==null){var f=Yt();jn(h,r,1,f)}}),Jd(r,1)}},Zs=function(r){if(r.tag===13){var s=Vr(r,134217728);if(s!==null){var a=Yt();jn(s,r,134217728,a)}Jd(r,134217728)}},Ta=function(r){if(r.tag===13){var s=Ri(r),a=Vr(r,s);if(a!==null){var h=Yt();jn(a,r,s,h)}Jd(r,s)}},Sa=function(){return Le},Ia=function(r,s){var a=Le;try{return Le=r,s()}finally{Le=a}},xr=function(r,s,a){switch(s){case"input":if(Zi(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var f=Eu(h);if(!f)throw Error(t(90));oa(h),Zi(h,f)}}}break;case"textarea":Wl(r,a);break;case"select":s=a.value,s!=null&&kn(r,!!a.multiple,s,!1)}},Ql=$d,Jl=xs;var Mx={usingClientEntryPoint:!1,Events:[Fa,go,Eu,oi,ai,$d]},Za={findFiberByHostInstance:ps,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jx={bundleType:Za.bundleType,version:Za.version,rendererPackageName:Za.rendererPackageName,rendererConfig:Za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:me.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ru(r),r===null?null:r.stateNode},findFiberByHostInstance:Za.findFiberByHostInstance||Lx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{ss=sc.inject(jx),un=sc}catch{}}return rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mx,rn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(s))throw Error(t(200));return Ox(r,s,null,a)},rn.createRoot=function(r,s){if(!Xd(r))throw Error(t(299));var a=!1,h="",f=dy;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=Qd(r,1,!1,null,null,a,!1,h,f),r[Nr]=s.current,Va(r.nodeType===8?r.parentNode:r),new Yd(s)},rn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ru(s),r=r===null?null:r.stateNode,r},rn.flushSync=function(r){return xs(r)},rn.hydrate=function(r,s,a){if(!rc(s))throw Error(t(200));return ic(null,r,s,!0,a)},rn.hydrateRoot=function(r,s,a){if(!Xd(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,f=!1,m="",E=dy;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),s=cy(s,null,r,1,a??null,f,!1,m,E),r[Nr]=s.current,Va(r),h)for(r=0;r<h.length;r++)a=h[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new nc(s)},rn.render=function(r,s,a){if(!rc(s))throw Error(t(200));return ic(null,r,s,!1,a)},rn.unmountComponentAtNode=function(r){if(!rc(r))throw Error(t(40));return r._reactRootContainer?(xs(function(){ic(null,null,r,!1,function(){r._reactRootContainer=null,r[Nr]=null})}),!0):!1},rn.unstable_batchedUpdates=$d,rn.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!rc(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return ic(r,s,a,!1,h)},rn.version="18.3.1-next-f1338f8080-20240426",rn}var Ey;function Kx(){if(Ey)return tf.exports;Ey=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),tf.exports=Wx(),tf.exports}var xy;function Gx(){if(xy)return oc;xy=1;var n=Kx();return oc.createRoot=n.createRoot,oc.hydrateRoot=n.hydrateRoot,oc}var Qx=Gx();const Jx=vv(Qx);/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ty="popstate";function Yx(n={}){function e(i,o){let{pathname:l,search:u,hash:d}=i.location;return xf("",{pathname:l,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:fl(o)}return Zx(e,t,null,n)}function st(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function _r(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Xx(){return Math.random().toString(36).substring(2,10)}function Sy(n,e){return{usr:n.state,key:n.key,idx:e}}function xf(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Qo(e):e,state:t,key:e&&e.key||i||Xx()}}function fl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Qo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function Zx(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,u=o.history,d="POP",p=null,y=_();y==null&&(y=0,u.replaceState({...u.state,idx:y},""));function _(){return(u.state||{idx:null}).idx}function x(){d="POP";let N=_(),Q=N==null?null:N-y;y=N,p&&p({action:d,location:F.location,delta:Q})}function I(N,Q){d="PUSH";let J=xf(F.location,N,Q);y=_()+1;let re=Sy(J,y),me=F.createHref(J);try{u.pushState(re,"",me)}catch(_e){if(_e instanceof DOMException&&_e.name==="DataCloneError")throw _e;o.location.assign(me)}l&&p&&p({action:d,location:F.location,delta:1})}function V(N,Q){d="REPLACE";let J=xf(F.location,N,Q);y=_();let re=Sy(J,y),me=F.createHref(J);u.replaceState(re,"",me),l&&p&&p({action:d,location:F.location,delta:0})}function L(N){return eT(N)}let F={get action(){return d},get location(){return n(o,u)},listen(N){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Ty,x),p=N,()=>{o.removeEventListener(Ty,x),p=null}},createHref(N){return e(o,N)},createURL:L,encodeLocation(N){let Q=L(N);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:I,replace:V,go(N){return u.go(N)}};return F}function eT(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),st(t,"No window.location.(origin|href) available to create URL");let i=typeof n=="string"?n:fl(n);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function wv(n,e,t="/"){return tT(n,e,t,!1)}function tT(n,e,t,i){let o=typeof e=="string"?Qo(e):e,l=qr(o.pathname||"/",t);if(l==null)return null;let u=Ev(n);nT(u);let d=null;for(let p=0;d==null&&p<u.length;++p){let y=fT(l);d=hT(u[p],y,i)}return d}function Ev(n,e=[],t=[],i="",o=!1){let l=(u,d,p=o,y)=>{let _={relativePath:y===void 0?u.path||"":y,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(i)&&p)return;st(_.relativePath.startsWith(i),`Absolute route path "${_.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(i.length)}let x=$r([i,_.relativePath]),I=t.concat(_);u.children&&u.children.length>0&&(st(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Ev(u.children,e,I,x,p)),!(u.path==null&&!u.index)&&e.push({path:x,score:uT(x,u.index),routesMeta:I})};return n.forEach((u,d)=>{if(u.path===""||!u.path?.includes("?"))l(u,d);else for(let p of xv(u.path))l(u,d,!0,p)}),e}function xv(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let u=xv(i.join("/")),d=[];return d.push(...u.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...u),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function nT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:cT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var rT=/^:[\w-]+$/,iT=3,sT=2,oT=1,aT=10,lT=-2,Iy=n=>n==="*";function uT(n,e){let t=n.split("/"),i=t.length;return t.some(Iy)&&(i+=lT),e&&(i+=sT),t.filter(o=>!Iy(o)).reduce((o,l)=>o+(rT.test(l)?iT:l===""?oT:aT),i)}function cT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function hT(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",u=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,_=l==="/"?e:e.slice(l.length)||"/",x=bc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},_),I=p.route;if(!x&&y&&t&&!i[i.length-1].route.index&&(x=bc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!x)return null;Object.assign(o,x.params),u.push({params:o,pathname:$r([l,x.pathname]),pathnameBase:yT($r([l,x.pathnameBase])),route:I}),x.pathnameBase!=="/"&&(l=$r([l,x.pathnameBase]))}return u}function bc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=dT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,{paramName:_,isOptional:x},I)=>{if(_==="*"){let L=d[I]||"";u=l.slice(0,l.length-L.length).replace(/(.)\/+$/,"$1")}const V=d[I];return x&&!V?y[_]=void 0:y[_]=(V||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:u,pattern:n}}function dT(n,e=!1,t=!0){_r(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function fT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return _r(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function qr(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function pT(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Qo(n):n;return{pathname:t?t.startsWith("/")?t:mT(t,e):e,search:_T(i),hash:vT(o)}}function mT(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function sf(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Tv(n){let e=gT(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Sv(n,e,t,i=!1){let o;typeof n=="string"?o=Qo(n):(o={...n},st(!o.pathname||!o.pathname.includes("?"),sf("?","pathname","search",o)),st(!o.pathname||!o.pathname.includes("#"),sf("#","pathname","hash",o)),st(!o.search||!o.search.includes("#"),sf("#","search","hash",o)));let l=n===""||o.pathname==="",u=l?"/":o.pathname,d;if(u==null)d=t;else{let x=e.length-1;if(!i&&u.startsWith("..")){let I=u.split("/");for(;I[0]==="..";)I.shift(),x-=1;o.pathname=I.join("/")}d=x>=0?e[x]:"/"}let p=pT(o,d),y=u&&u!=="/"&&u.endsWith("/"),_=(l||u===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||_)&&(p.pathname+="/"),p}var $r=n=>n.join("/").replace(/\/\/+/g,"/"),yT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),_T=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,vT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function wT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Iv=["POST","PUT","PATCH","DELETE"];new Set(Iv);var ET=["GET",...Iv];new Set(ET);var Jo=W.createContext(null);Jo.displayName="DataRouter";var th=W.createContext(null);th.displayName="DataRouterState";W.createContext(!1);var Rv=W.createContext({isTransitioning:!1});Rv.displayName="ViewTransition";var xT=W.createContext(new Map);xT.displayName="Fetchers";var TT=W.createContext(null);TT.displayName="Await";var Er=W.createContext(null);Er.displayName="Navigation";var Sl=W.createContext(null);Sl.displayName="Location";var Yr=W.createContext({outlet:null,matches:[],isDataRoute:!1});Yr.displayName="Route";var np=W.createContext(null);np.displayName="RouteError";function ST(n,{relative:e}={}){st(Il(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=W.useContext(Er),{hash:o,pathname:l,search:u}=Rl(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:$r([t,l])),i.createHref({pathname:d,search:u,hash:o})}function Il(){return W.useContext(Sl)!=null}function Qi(){return st(Il(),"useLocation() may be used only in the context of a <Router> component."),W.useContext(Sl).location}var Av="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Cv(n){W.useContext(Er).static||W.useLayoutEffect(n)}function Fs(){let{isDataRoute:n}=W.useContext(Yr);return n?MT():IT()}function IT(){st(Il(),"useNavigate() may be used only in the context of a <Router> component.");let n=W.useContext(Jo),{basename:e,navigator:t}=W.useContext(Er),{matches:i}=W.useContext(Yr),{pathname:o}=Qi(),l=JSON.stringify(Tv(i)),u=W.useRef(!1);return Cv(()=>{u.current=!0}),W.useCallback((p,y={})=>{if(_r(u.current,Av),!u.current)return;if(typeof p=="number"){t.go(p);return}let _=Sv(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:$r([e,_.pathname])),(y.replace?t.replace:t.push)(_,y.state,y)},[e,t,l,o,n])}W.createContext(null);function Rl(n,{relative:e}={}){let{matches:t}=W.useContext(Yr),{pathname:i}=Qi(),o=JSON.stringify(Tv(t));return W.useMemo(()=>Sv(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function RT(n,e){return kv(n,e)}function kv(n,e,t,i,o){st(Il(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=W.useContext(Er),{matches:u}=W.useContext(Yr),d=u[u.length-1],p=d?d.params:{},y=d?d.pathname:"/",_=d?d.pathnameBase:"/",x=d&&d.route;{let J=x&&x.path||"";Pv(y,!x||J.endsWith("*")||J.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${J}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${J}"> to <Route path="${J==="/"?"*":`${J}/*`}">.`)}let I=Qi(),V;if(e){let J=typeof e=="string"?Qo(e):e;st(_==="/"||J.pathname?.startsWith(_),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${J.pathname}" was given in the \`location\` prop.`),V=J}else V=I;let L=V.pathname||"/",F=L;if(_!=="/"){let J=_.replace(/^\//,"").split("/");F="/"+L.replace(/^\//,"").split("/").slice(J.length).join("/")}let N=wv(n,{pathname:F});_r(x||N!=null,`No routes matched location "${V.pathname}${V.search}${V.hash}" `),_r(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${V.pathname}${V.search}${V.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=bT(N&&N.map(J=>Object.assign({},J,{params:Object.assign({},p,J.params),pathname:$r([_,l.encodeLocation?l.encodeLocation(J.pathname).pathname:J.pathname]),pathnameBase:J.pathnameBase==="/"?_:$r([_,l.encodeLocation?l.encodeLocation(J.pathnameBase).pathname:J.pathnameBase])})),u,t,i,o);return e&&Q?W.createElement(Sl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...V},navigationType:"POP"}},Q):Q}function AT(){let n=VT(),e=wT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=W.createElement(W.Fragment,null,W.createElement("p",null,"💿 Hey developer 👋"),W.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",W.createElement("code",{style:l},"ErrorBoundary")," or"," ",W.createElement("code",{style:l},"errorElement")," prop on your route.")),W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:o},t):null,u)}var CT=W.createElement(AT,null),kT=class extends W.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.unstable_onError?this.props.unstable_onError(n,e):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?W.createElement(Yr.Provider,{value:this.props.routeContext},W.createElement(np.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function PT({routeContext:n,match:e,children:t}){let i=W.useContext(Jo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),W.createElement(Yr.Provider,{value:n},t)}function bT(n,e=[],t=null,i=null,o=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let l=n,u=t?.errors;if(u!=null){let y=l.findIndex(_=>_.route.id&&u?.[_.route.id]!==void 0);st(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,y+1))}let d=!1,p=-1;if(t)for(let y=0;y<l.length;y++){let _=l[y];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=y),_.route.id){let{loaderData:x,errors:I}=t,V=_.route.loader&&!x.hasOwnProperty(_.route.id)&&(!I||I[_.route.id]===void 0);if(_.route.lazy||V){d=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((y,_,x)=>{let I,V=!1,L=null,F=null;t&&(I=u&&_.route.id?u[_.route.id]:void 0,L=_.route.errorElement||CT,d&&(p<0&&x===0?(Pv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),V=!0,F=null):p===x&&(V=!0,F=_.route.hydrateFallbackElement||null)));let N=e.concat(l.slice(0,x+1)),Q=()=>{let J;return I?J=L:V?J=F:_.route.Component?J=W.createElement(_.route.Component,null):_.route.element?J=_.route.element:J=y,W.createElement(PT,{match:_,routeContext:{outlet:y,matches:N,isDataRoute:t!=null},children:J})};return t&&(_.route.ErrorBoundary||_.route.errorElement||x===0)?W.createElement(kT,{location:t.location,revalidation:t.revalidation,component:L,error:I,children:Q(),routeContext:{outlet:null,matches:N,isDataRoute:!0},unstable_onError:i}):Q()},null)}function rp(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function NT(n){let e=W.useContext(Jo);return st(e,rp(n)),e}function DT(n){let e=W.useContext(th);return st(e,rp(n)),e}function OT(n){let e=W.useContext(Yr);return st(e,rp(n)),e}function ip(n){let e=OT(n),t=e.matches[e.matches.length-1];return st(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function LT(){return ip("useRouteId")}function VT(){let n=W.useContext(np),e=DT("useRouteError"),t=ip("useRouteError");return n!==void 0?n:e.errors?.[t]}function MT(){let{router:n}=NT("useNavigate"),e=ip("useNavigate"),t=W.useRef(!1);return Cv(()=>{t.current=!0}),W.useCallback(async(o,l={})=>{_r(t.current,Av),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var Ry={};function Pv(n,e,t){!e&&!Ry[n]&&(Ry[n]=!0,_r(!1,t))}W.memo(jT);function jT({routes:n,future:e,state:t,unstable_onError:i}){return kv(n,void 0,t,i,e)}function Fn(n){st(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function FT({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){st(!Il(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),d=W.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l]);typeof t=="string"&&(t=Qo(t));let{pathname:p="/",search:y="",hash:_="",state:x=null,key:I="default"}=t,V=W.useMemo(()=>{let L=qr(p,u);return L==null?null:{location:{pathname:L,search:y,hash:_,state:x,key:I},navigationType:i}},[u,p,y,_,x,I,i]);return _r(V!=null,`<Router basename="${u}"> is not able to match the URL "${p}${y}${_}" because it does not start with the basename, so the <Router> won't render anything.`),V==null?null:W.createElement(Er.Provider,{value:d},W.createElement(Sl.Provider,{children:e,value:V}))}function UT({children:n,location:e}){return RT(Tf(n),e)}function Tf(n,e=[]){let t=[];return W.Children.forEach(n,(i,o)=>{if(!W.isValidElement(i))return;let l=[...e,o];if(i.type===W.Fragment){t.push.apply(t,Tf(i.props.children,l));return}st(i.type===Fn,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),st(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=Tf(i.props.children,l)),t.push(u)}),t}var gc="get",yc="application/x-www-form-urlencoded";function nh(n){return n!=null&&typeof n.tagName=="string"}function BT(n){return nh(n)&&n.tagName.toLowerCase()==="button"}function zT(n){return nh(n)&&n.tagName.toLowerCase()==="form"}function $T(n){return nh(n)&&n.tagName.toLowerCase()==="input"}function HT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function qT(n,e){return n.button===0&&(!e||e==="_self")&&!HT(n)}var ac=null;function WT(){if(ac===null)try{new FormData(document.createElement("form"),0),ac=!1}catch{ac=!0}return ac}var KT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function of(n){return n!=null&&!KT.has(n)?(_r(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yc}"`),null):n}function GT(n,e){let t,i,o,l,u;if(zT(n)){let d=n.getAttribute("action");i=d?qr(d,e):null,t=n.getAttribute("method")||gc,o=of(n.getAttribute("enctype"))||yc,l=new FormData(n)}else if(BT(n)||$T(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?qr(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||gc,o=of(n.getAttribute("formenctype"))||of(d.getAttribute("enctype"))||yc,l=new FormData(d,n),!WT()){let{name:y,type:_,value:x}=n;if(_==="image"){let I=y?`${y}.`:"";l.append(`${I}x`,"0"),l.append(`${I}y`,"0")}else y&&l.append(y,x)}}else{if(nh(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=gc,i=null,o=yc,u=n}return l&&o==="text/plain"&&(u=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function sp(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function QT(n,e,t){let i=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return i.pathname==="/"?i.pathname=`_root.${t}`:e&&qr(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${t}`,i}async function JT(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function YT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function XT(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let u=await JT(l,t);return u.links?u.links():[]}return[]}));return nS(i.flat(1).filter(YT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Ay(n,e,t,i,o,l){let u=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,d=(p,y)=>t[y].pathname!==p.pathname||t[y].route.path?.endsWith("*")&&t[y].params["*"]!==p.params["*"];return l==="assets"?e.filter((p,y)=>u(p,y)||d(p,y)):l==="data"?e.filter((p,y)=>{let _=i.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(u(p,y)||d(p,y))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function ZT(n,e,{includeHydrateFallback:t}={}){return eS(n.map(i=>{let o=e.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function eS(n){return[...new Set(n)]}function tS(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function nS(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(tS(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function bv(){let n=W.useContext(Jo);return sp(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function rS(){let n=W.useContext(th);return sp(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var op=W.createContext(void 0);op.displayName="FrameworkContext";function Nv(){let n=W.useContext(op);return sp(n,"You must render this element inside a <HydratedRouter> element"),n}function iS(n,e){let t=W.useContext(op),[i,o]=W.useState(!1),[l,u]=W.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:y,onMouseLeave:_,onTouchStart:x}=e,I=W.useRef(null);W.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let F=Q=>{Q.forEach(J=>{u(J.isIntersecting)})},N=new IntersectionObserver(F,{threshold:.5});return I.current&&N.observe(I.current),()=>{N.disconnect()}}},[n]),W.useEffect(()=>{if(i){let F=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(F)}}},[i]);let V=()=>{o(!0)},L=()=>{o(!1),u(!1)};return t?n!=="intent"?[l,I,{}]:[l,I,{onFocus:tl(d,V),onBlur:tl(p,L),onMouseEnter:tl(y,V),onMouseLeave:tl(_,L),onTouchStart:tl(x,V)}]:[!1,I,{}]}function tl(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function sS({page:n,...e}){let{router:t}=bv(),i=W.useMemo(()=>wv(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?W.createElement(aS,{page:n,matches:i,...e}):null}function oS(n){let{manifest:e,routeModules:t}=Nv(),[i,o]=W.useState([]);return W.useEffect(()=>{let l=!1;return XT(n,e,t).then(u=>{l||o(u)}),()=>{l=!0}},[n,e,t]),i}function aS({page:n,matches:e,...t}){let i=Qi(),{manifest:o,routeModules:l}=Nv(),{basename:u}=bv(),{loaderData:d,matches:p}=rS(),y=W.useMemo(()=>Ay(n,e,p,o,i,"data"),[n,e,p,o,i]),_=W.useMemo(()=>Ay(n,e,p,o,i,"assets"),[n,e,p,o,i]),x=W.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let L=new Set,F=!1;if(e.forEach(Q=>{let J=o.routes[Q.route.id];!J||!J.hasLoader||(!y.some(re=>re.route.id===Q.route.id)&&Q.route.id in d&&l[Q.route.id]?.shouldRevalidate||J.hasClientLoader?F=!0:L.add(Q.route.id))}),L.size===0)return[];let N=QT(n,u,"data");return F&&L.size>0&&N.searchParams.set("_routes",e.filter(Q=>L.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[N.pathname+N.search]},[u,d,i,o,y,e,n,l]),I=W.useMemo(()=>ZT(_,o),[_,o]),V=oS(_);return W.createElement(W.Fragment,null,x.map(L=>W.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...t})),I.map(L=>W.createElement("link",{key:L,rel:"modulepreload",href:L,...t})),V.map(({key:L,link:F})=>W.createElement("link",{key:L,nonce:t.nonce,...F})))}function lS(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Dv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Dv&&(window.__reactRouterVersion="7.8.2")}catch{}function uS({basename:n,children:e,window:t}){let i=W.useRef();i.current==null&&(i.current=Yx({window:t,v5Compat:!0}));let o=i.current,[l,u]=W.useState({action:o.action,location:o.location}),d=W.useCallback(p=>{W.startTransition(()=>u(p))},[u]);return W.useLayoutEffect(()=>o.listen(d),[o,d]),W.createElement(FT,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var Ov=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ot=W.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:u,state:d,target:p,to:y,preventScrollReset:_,viewTransition:x,...I},V){let{basename:L}=W.useContext(Er),F=typeof y=="string"&&Ov.test(y),N,Q=!1;if(typeof y=="string"&&F&&(N=y,Dv))try{let A=new URL(window.location.href),D=y.startsWith("//")?new URL(A.protocol+y):new URL(y),b=qr(D.pathname,L);D.origin===A.origin&&b!=null?y=b+D.search+D.hash:Q=!0}catch{_r(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=ST(y,{relative:o}),[re,me,_e]=iS(i,I),we=fS(y,{replace:u,state:d,target:p,preventScrollReset:_,relative:o,viewTransition:x});function k(A){e&&e(A),A.defaultPrevented||we(A)}let R=W.createElement("a",{...I,..._e,href:N||J,onClick:Q||l?e:k,ref:lS(V,me),target:p,"data-discover":!F&&t==="render"?"true":void 0});return re&&!F?W.createElement(W.Fragment,null,R,W.createElement(sS,{page:J})):R});Ot.displayName="Link";var cS=W.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:u,viewTransition:d,children:p,...y},_){let x=Rl(u,{relative:y.relative}),I=Qi(),V=W.useContext(th),{navigator:L,basename:F}=W.useContext(Er),N=V!=null&&_S(x)&&d===!0,Q=L.encodeLocation?L.encodeLocation(x).pathname:x.pathname,J=I.pathname,re=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;t||(J=J.toLowerCase(),re=re?re.toLowerCase():null,Q=Q.toLowerCase()),re&&F&&(re=qr(re,F)||re);const me=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let _e=J===Q||!o&&J.startsWith(Q)&&J.charAt(me)==="/",we=re!=null&&(re===Q||!o&&re.startsWith(Q)&&re.charAt(Q.length)==="/"),k={isActive:_e,isPending:we,isTransitioning:N},R=_e?e:void 0,A;typeof i=="function"?A=i(k):A=[i,_e?"active":null,we?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let D=typeof l=="function"?l(k):l;return W.createElement(Ot,{...y,"aria-current":R,className:A,ref:_,style:D,to:u,viewTransition:d},typeof p=="function"?p(k):p)});cS.displayName="NavLink";var hS=W.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:u=gc,action:d,onSubmit:p,relative:y,preventScrollReset:_,viewTransition:x,...I},V)=>{let L=gS(),F=yS(d,{relative:y}),N=u.toLowerCase()==="get"?"get":"post",Q=typeof d=="string"&&Ov.test(d),J=re=>{if(p&&p(re),re.defaultPrevented)return;re.preventDefault();let me=re.nativeEvent.submitter,_e=me?.getAttribute("formmethod")||u;L(me||re.currentTarget,{fetcherKey:e,method:_e,navigate:t,replace:o,state:l,relative:y,preventScrollReset:_,viewTransition:x})};return W.createElement("form",{ref:V,method:N,action:F,onSubmit:i?p:J,...I,"data-discover":!Q&&n==="render"?"true":void 0})});hS.displayName="Form";function dS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lv(n){let e=W.useContext(Jo);return st(e,dS(n)),e}function fS(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:u}={}){let d=Fs(),p=Qi(),y=Rl(n,{relative:l});return W.useCallback(_=>{if(qT(_,e)){_.preventDefault();let x=t!==void 0?t:fl(p)===fl(y);d(n,{replace:x,state:i,preventScrollReset:o,relative:l,viewTransition:u})}},[p,d,y,t,i,e,n,o,l,u])}var pS=0,mS=()=>`__${String(++pS)}__`;function gS(){let{router:n}=Lv("useSubmit"),{basename:e}=W.useContext(Er),t=LT();return W.useCallback(async(i,o={})=>{let{action:l,method:u,encType:d,formData:p,body:y}=GT(i,e);if(o.navigate===!1){let _=o.fetcherKey||mS();await n.fetch(_,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||u,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||u,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function yS(n,{relative:e}={}){let{basename:t}=W.useContext(Er),i=W.useContext(Yr);st(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...Rl(n||".",{relative:e})},u=Qi();if(n==null){l.search=u.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(_=>_==="")){d.delete("index"),p.filter(x=>x).forEach(x=>d.append("index",x));let _=d.toString();l.search=_?`?${_}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:$r([t,l.pathname])),fl(l)}function _S(n,{relative:e}={}){let t=W.useContext(Rv);st(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Lv("useViewTransitionState"),o=Rl(n,{relative:e});if(!t.isTransitioning)return!1;let l=qr(t.currentLocation.pathname,i)||t.currentLocation.pathname,u=qr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return bc(o.pathname,u)!=null||bc(o.pathname,l)!=null}const vS=()=>w.jsxs("nav",{className:"navbar",children:[w.jsxs("div",{className:"container",children:[w.jsx("div",{className:"left",children:w.jsxs(Ot,{to:"/",className:"logo",children:["Blood",w.jsx("span",{children:"Line❤️"})]})}),w.jsx("div",{className:"middle",children:[{name:"Home",path:"/"},{name:"Find Donor",path:"/search"},{name:"About Us",path:"/aboutus"}].map(n=>w.jsxs(Ot,{to:n.path,className:"nav-link",children:[w.jsx("span",{children:n.name}),w.jsx("span",{className:"underline"})]},n.name))}),w.jsxs("div",{className:"right",children:[w.jsx(Ot,{to:"/login",className:"login",children:"Login"}),w.jsx(Ot,{to:"/register",className:"join",children:"Join Now"})]})]}),w.jsx("style",{children:`
        *{ box-sizing:border-box; }

        .navbar{
          position:fixed;
          top:0;
          width:100%;
          z-index:100;
          background:#000;
          padding:18px 20px;
          box-shadow:0 10px 30px rgba(0,0,0,0.4);
        }

        .container{
          max-width:1800px;
          margin:0 auto;
          display:grid;
          grid-template-columns:1fr 2fr 1fr;
          align-items:center;
        }

        /* LEFT */
        .logo{
          font-size:28px;
          font-weight:900;
          font-style:italic;
          text-transform:uppercase;
          color:#fff;
          text-decoration:none;
        }

        .logo span{
          color:#dc2626;
        }

        /* MIDDLE */
        .middle{
          display:flex;
          justify-content:center;
          gap:40px;
          font-size:11px;
          font-weight:900;
          letter-spacing:0.3em;
          text-transform:uppercase;
        }

        .nav-link{
          position:relative;
          color:rgba(255,255,255,0.8);
          text-decoration:none;
          padding:6px 0;
        }

        .nav-link:hover span{
          color:#ef4444;
        }

        .underline{
          position:absolute;
          bottom:0;
          left:0;
          width:100%;
          height:2px;
          background:#ef4444;
          transform:scaleX(0);
          transform-origin:left;
          transition:0.3s;
        }

        .nav-link:hover .underline{
          transform:scaleX(1);
        }

        /* RIGHT */
        .right{
          display:flex;
          justify-content:flex-end;
          align-items:center;
          gap:25px;
        }

        .login{
          font-size:11px;
          font-weight:900;
          text-transform:uppercase;
          letter-spacing:0.2em;
          color:#fff;
          text-decoration:none;
        }

        .login:hover{
          color:#ef4444;
        }

        .join{
          background:#dc2626;
          color:#fff;
          padding:10px 18px;
          border-radius:12px;
          font-size:10px;
          font-weight:900;
          text-transform:uppercase;
          letter-spacing:0.2em;
          text-decoration:none;
          transition:0.3s;
        }

        .join:hover{
          background:#fff;
          color:#dc2626;
        }

        /* TABLET */
        @media (max-width: 992px){
          .container{
            grid-template-columns:1fr 1fr;
          }

          .middle{
            display:none;
          }
        }

        /* MOBILE */
        @media (max-width: 768px){
          .navbar{
            padding:14px 15px;
          }

          .logo{
            font-size:22px;
          }

          .right{
            gap:15px;
          }

          .join{
            padding:8px 14px;
            font-size:9px;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px){
          .logo{
            font-size:18px;
          }

          .right{
            gap:10px;
          }

          .login{
            font-size:10px;
          }
        }
      `})]}),wS=()=>{const n=Fs();return w.jsxs("footer",{className:"footer",children:[w.jsx("div",{className:"glow"}),w.jsxs("div",{className:"container",children:[w.jsxs("div",{className:"grid",children:[w.jsxs("div",{className:"brand",children:[w.jsxs("div",{className:"logo",onClick:()=>n("/"),children:[w.jsx("div",{className:"icon",children:"❤️"}),w.jsxs("h2",{children:["Blood",w.jsx("span",{children:"Line"})]})]}),w.jsx("p",{className:"desc",children:"Every drop counts. Join our mission to make Pakistan blood-sufficient."}),w.jsxs("div",{className:"newsletter",children:[w.jsx("input",{type:"email",placeholder:"Update and Type E-mail"}),w.jsx("button",{onClick:()=>alert("Subscribed!"),children:"Join"})]})]}),w.jsxs("div",{className:"links",children:[w.jsxs("div",{children:[w.jsx("h4",{children:"Navigation"}),w.jsxs("ul",{children:[w.jsx("li",{onClick:()=>n("/search"),children:"🔴 Find a Donor"}),w.jsx("li",{onClick:()=>n("/register"),children:"⚪ Register as Donor"}),w.jsx("li",{onClick:()=>n("/blood-banks"),children:"⚪ Blood Banks List"})]})]}),w.jsxs("div",{children:[w.jsx("h4",{children:"Availability"}),w.jsxs("ul",{children:[w.jsxs("li",{children:[w.jsx("span",{children:"Mon - Sun"}),w.jsx("span",{className:"green",children:"24 Hours"})]}),w.jsxs("li",{children:[w.jsx("span",{children:"Support"}),w.jsx("span",{children:"Active"})]}),w.jsx("li",{className:"location",children:"📍 Lahore, Pakistan"})]})]})]}),w.jsx("div",{className:"emergency",children:w.jsxs("div",{className:"card",children:[w.jsx("h4",{children:"Emergency Line"}),w.jsx("a",{href:"tel:080078601",children:"0800-78601"}),w.jsxs("div",{className:"social",children:[w.jsx("div",{onClick:()=>window.open("https://facebook.com"),children:"📘"}),w.jsx("div",{onClick:()=>window.open("https://instagram.com"),children:"📸"}),w.jsx("div",{onClick:()=>window.open("https://twitter.com"),children:"🐦"})]})]})})]}),w.jsxs("div",{className:"bottom",children:[w.jsxs("div",{className:"status",children:[w.jsx("span",{className:"dot"}),"All Systems Operational"]}),w.jsxs("div",{className:"legal",children:[w.jsx("span",{onClick:()=>n("/privacy"),children:"Privacy"}),w.jsx("span",{onClick:()=>n("/terms"),children:"Terms"}),w.jsx("span",{onClick:()=>n("/cookies"),children:"Cookies"})]})]})]}),w.jsx("style",{children:`
        *{ box-sizing:border-box; }

        .footer{
          position:relative;
          background:#0B0C0E;
          color:#fff;
          padding:100px 20px 40px;
          overflow:hidden;
        }

        .glow{
          position:absolute;
          top:0;
          right:0;
          width:350px;
          height:350px;
          background:rgba(230,57,70,0.08);
          filter:blur(100px);
          border-radius:50%;
        }

        .container{
          max-width:1200px;
          margin:0 auto;
          position:relative;
          z-index:2;
        }

        .grid{
          display:grid;
          grid-template-columns:2fr 2fr 1.5fr;
          gap:60px;
          margin-bottom:60px;
        }

        .logo{
          display:flex;
          align-items:center;
          gap:12px;
          cursor:pointer;
        }

        .icon{
          width:45px;
          height:45px;
          background:#e63946;
          display:flex;
          justify-content:center;
          align-items:center;
          border-radius:14px;
        }

        .logo h2{
          font-size:28px;
          font-weight:900;
        }

        .logo span{
          color:#e63946;
        }

        .desc{
          margin-top:20px;
          color:#cbd5e1;
          line-height:1.6;
        }

        .newsletter{
          margin-top:20px;
          display:flex;
          position:relative;
        }

        .newsletter input{
          width:100%;
          padding:14px;
          border-radius:14px;
          border:1px solid rgba(255,255,255,0.1);
          background:rgba(255,255,255,0.05);
          color:#fff;
          outline:none;
        }

        .newsletter button{
          position:absolute;
          right:6px;
          top:6px;
          bottom:6px;
          background:#e63946;
          border:none;
          color:#fff;
          padding:0 14px;
          border-radius:10px;
          cursor:pointer;
          font-weight:800;
        }

        .links{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:40px;
        }

        h4{
          font-size:11px;
          letter-spacing:0.3em;
          color:#e63946;
          margin-bottom:20px;
          text-transform:uppercase;
        }

        ul{
          list-style:none;
          padding:0;
          margin:0;
        }

        li{
          margin-bottom:14px;
          cursor:pointer;
          font-weight:700;
          font-size:14px;
        }

        li:hover{
          color:#e63946;
        }

        .green{ color:#22c55e; }

        .emergency .card{
          background:linear-gradient(145deg,#1a1f26,#0b0c0e);
          border:1px solid rgba(255,255,255,0.1);
          padding:30px;
          border-radius:30px;
        }

        .emergency a{
          font-size:28px;
          font-weight:900;
          color:#fff;
          display:block;
          margin-bottom:20px;
          text-decoration:none;
        }

        .social{
          display:flex;
          gap:10px;
        }

        .social div{
          width:40px;
          height:40px;
          display:flex;
          justify-content:center;
          align-items:center;
          background:rgba(255,255,255,0.05);
          border-radius:12px;
          cursor:pointer;
        }

        .bottom{
          display:flex;
          justify-content:space-between;
          align-items:center;
          border-top:1px solid rgba(255,255,255,0.05);
          padding-top:30px;
          flex-wrap:wrap;
          gap:20px;
        }

        .status{
          display:flex;
          align-items:center;
          gap:10px;
          font-size:10px;
          letter-spacing:0.3em;
          font-weight:900;
        }

        .dot{
          width:8px;
          height:8px;
          background:#22c55e;
          border-radius:50%;
          animation:pulse 1.5s infinite;
        }

        .legal{
          display:flex;
          gap:25px;
          font-size:10px;
          letter-spacing:0.2em;
          font-weight:900;
        }

        .legal span{
          cursor:pointer;
        }

        @keyframes pulse{
          0%{transform:scale(1); opacity:1;}
          50%{transform:scale(1.4); opacity:0.6;}
          100%{transform:scale(1); opacity:1;}
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px){
          .grid{
            grid-template-columns:1fr;
            gap:40px;
          }

          .links{
            grid-template-columns:1fr;
          }

          .logo h2{
            font-size:22px;
          }

          .emergency a{
            font-size:22px;
          }

          .bottom{
            flex-direction:column;
            align-items:flex-start;
          }

          .legal{
            flex-wrap:wrap;
            gap:15px;
          }
        }

        @media (max-width: 480px){
          .footer{
            padding:80px 15px 30px;
          }

          .newsletter input{
            font-size:12px;
          }

          .newsletter button{
            font-size:10px;
          }
        }
      `})]})},ES=({onFinish:n})=>{const[e,t]=W.useState(!1),i=()=>{t(!0),setTimeout(()=>{n()},800)};return w.jsxs(w.Fragment,{children:[w.jsx("style",{children:`
          .splash-container {
            position: fixed;
            inset: 0;
            background: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            overflow: hidden;
            transition: opacity 0.8s ease-in-out, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .fade-out {
            opacity: 0;
            transform: scale(1.2);
            filter: blur(10px);
            pointer-events: none;
          }

          .background-fx {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            background:
              radial-gradient(circle at 50% 50%, rgba(180, 0, 0, 0.45) 0%, rgba(20, 0, 0, 0.8) 50%, #000 100%),
              linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9));
          }

          .blood-cloud {
            position: absolute;
            width: 80vw;
            height: 80vw;
            background: radial-gradient(circle, rgba(255, 0, 0, 0.15) 0%, transparent 60%);
            filter: blur(120px);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: breathe 8s infinite alternate ease-in-out;
            z-index: 2;
          }

          @keyframes breathe {
            0% { opacity: 0.4; transform: translate(-50%, -50%) scale(0.8); }
            100% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
          }

          .glass-panel {
            position: relative;
            z-index: 10;
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            border: 1px solid rgba(255, 0, 0, 0.3);
            padding: 5rem 3rem;
            border-radius: 40px;
            text-align: center;
            max-width: 600px;
            width: 90%;
            box-shadow: 0 0 150px rgba(139, 0, 0, 0.4);
          }

          .bloodline-logo {
            color: #ffffff;
            font-size: clamp(2rem, 7vw, 4.5rem);
            font-weight: 900;
            letter-spacing: 18px;
            margin-bottom: 15px;
            text-transform: uppercase;
            text-shadow: 0 0 20px rgba(255, 0, 0, 0.8), 0 0 40px rgba(139, 0, 0, 0.6);
          }

          .tagline-text {
            color: #d1d1d1;
            font-size: 0.95rem;
            line-height: 1.8;
            margin-bottom: 3rem;
            letter-spacing: 2px;
            font-weight: 400;
            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          }

          .legacy-btn {
            background: rgba(139, 0, 0, 0.1);
            color: #fff;
            border: 2px solid #ff0000;
            padding: 16px 50px;
            font-size: 0.9rem;
            font-weight: 700;
            letter-spacing: 5px;
            border-radius: 50px;
            cursor: pointer;
            text-transform: uppercase;
            transition: all 0.4s ease;
            box-shadow: inset 0 0 10px rgba(255, 0, 0, 0.2);
          }

          .legacy-btn:hover {
            background: #ff0000;
            color: #000;
            box-shadow: 0 0 50px rgba(255, 0, 0, 0.9);
            transform: translateY(-5px);
          }

          /* ================= RESPONSIVE ONLY ================= */

          @media (max-width: 768px) {
            .glass-panel {
              padding: 3rem 1.5rem;
              border-radius: 25px;
              width: 92%;
            }

            .bloodline-logo {
              letter-spacing: 8px;
              font-size: clamp(1.8rem, 6vw, 3rem);
            }

            .tagline-text {
              font-size: 0.85rem;
              letter-spacing: 1px;
              margin-bottom: 2rem;
            }

            .legacy-btn {
              padding: 14px 30px;
              font-size: 0.75rem;
              letter-spacing: 3px;
            }

            .blood-cloud {
              width: 100vw;
              height: 100vw;
              filter: blur(90px);
            }
          }

          @media (max-width: 480px) {
            .glass-panel {
              padding: 2.2rem 1rem;
            }

            .bloodline-logo {
              letter-spacing: 6px;
            }
          }
        `}),w.jsxs("div",{className:`splash-container ${e?"fade-out":""}`,children:[w.jsx("div",{className:"background-fx"}),w.jsx("div",{className:"blood-cloud"}),w.jsxs("div",{className:"glass-panel",children:[w.jsx("h1",{className:"bloodline-logo",children:"BLOODLINE"}),w.jsxs("p",{className:"tagline-text",children:["BOUND BY BLOOD, DRIVEN BY DESTINY. ",w.jsx("br",{}),"YOUR CONTRIBUTION SAVES LIVES."]}),w.jsx("button",{className:"legacy-btn",onClick:i,children:"ENTER THE LEGACY"})]})]})]})},xS=()=>w.jsxs("section",{className:"hero",children:[w.jsx("img",{src:"https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=1600",alt:"Professional Hospital",className:"hero-img"}),w.jsx("div",{className:"overlay"}),w.jsx("div",{className:"content-wrapper",children:w.jsxs("div",{className:"content",children:[w.jsxs("h2",{children:["Every Drop ",w.jsx("br",{}),w.jsx("span",{children:" Saves A Life."})]}),w.jsx("p",{children:"Pakistan's most trusted emergency blood donation platform. Connecting verified heroes with patients in seconds."}),w.jsxs("div",{className:"btn-group",children:[w.jsx(Ot,{to:"/search",className:"btn primary",children:"Find A Donor"}),w.jsx(Ot,{to:"/register",className:"btn secondary",children:"Register Now"})]})]})}),w.jsx("style",{children:`
        *{
          box-sizing:border-box;
        }

        .hero{
          position:relative;
          height:600px;
          width:100%;
          overflow:hidden;
          background:#0f172a;
        }

        .hero-img{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          object-fit:cover;
          opacity:0.7;
        }

        .overlay{
          position:absolute;
          inset:0;
          background:linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5), transparent);
        }

        .content-wrapper{
          position:relative;
          z-index:10;
          height:100%;
          max-width:1200px;
          margin:0 auto;
          display:flex;
          align-items:center;
          padding:0 60px;
        }

        .content{
          max-width:600px;
          color:#fff;
        }

        h2{
          font-size:56px;
          font-weight:900;
          margin-bottom:20px;
          line-height:1.1;
          text-transform:uppercase;
          font-style:italic;
        }

        h2 span{
          color:#ef4444;
        }

        p{
          font-size:18px;
          margin-bottom:35px;
          opacity:0.9;
          line-height:1.6;
        }

        .btn-group{
          display:flex;
          gap:15px;
        }

        .btn{
          padding:16px 28px;
          border-radius:16px;
          font-weight:800;
          text-transform:uppercase;
          font-size:11px;
          letter-spacing:1px;
          transition:0.3s;
          text-decoration:none;
          display:inline-block;
        }

        .primary{
          background:#ef4444;
          color:#fff;
        }

        .primary:hover{
          background:#dc2626;
          transform:scale(1.05);
        }

        .secondary{
          background:rgba(255,255,255,0.1);
          border:1px solid rgba(255,255,255,0.2);
          color:#fff;
        }

        .secondary:hover{
          background:rgba(255,255,255,0.2);
          transform:scale(1.05);
        }

        /* TABLET */
        @media (max-width: 992px){
          .content-wrapper{
            padding:0 40px;
          }

          h2{
            font-size:44px;
          }

          p{
            font-size:16px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px){
          .hero{
            height:520px;
          }

          .content-wrapper{
            padding:0 20px;
            justify-content:center;
            text-align:center;
          }

          h2{
            font-size:34px;
          }

          p{
            font-size:15px;
          }

          .btn-group{
            flex-direction:column;
            width:100%;
          }

          .btn{
            width:100%;
            text-align:center;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px){
          .hero{
            height:480px;
          }

          h2{
            font-size:28px;
          }

          p{
            font-size:14px;
          }
        }
      `})]}),TS=()=>{const[n,e]=W.useState(null),t=Fs(),i=[{q:"Who can donate blood?",a:"Anyone between 18-65 years, weighing over 50kg, and in good health can generally donate blood."},{q:"How often can I donate?",a:"You can safely donate blood every 3 months (90 days). This allows your body to fully replenish its iron levels."},{q:"Is blood donation safe?",a:"Absolutely. We use sterile, disposable equipment for every donor, so there is no risk of catching any infection."},{q:"How long does it take?",a:"The actual donation takes only 8-10 minutes, but the whole process (registration + rest) takes about 30-45 minutes."}],o=[{title:"Save 3 Lives",icon:"🩸"},{title:"Health Check",icon:"🛡️"},{title:"Heart Health",icon:"🩺"},{title:"Iron Balance",icon:"⚖️"}];return w.jsxs("div",{className:"min-h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-x-hidden",children:[w.jsx(xS,{}),w.jsx("section",{className:"py-12 md:py-20 px-4 md:px-6 bg-gradient-to-r from-white to-slate-50",children:w.jsxs("div",{className:"max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between bg-white/80 backdrop-blur-md p-6 md:p-16 rounded-3xl shadow-xl border border-slate-200",children:[w.jsxs("div",{className:"md:w-2/3 text-center md:text-left mb-6 md:mb-0",children:[w.jsxs("h2",{className:"text-2xl md:text-4xl font-extrabold text-[#1a237e] mb-4 leading-tight",children:["Make an ",w.jsx("span",{className:"text-red-600",children:"Impact Today"})]}),w.jsx("p",{className:"text-slate-700 text-base md:text-xl mb-6",children:"Join Pakistan's trusted network of blood donors and help save lives."}),w.jsx("button",{onClick:()=>t("/register"),className:"bg-red-600 hover:bg-red-700 text-white px-6 md:px-14 py-3 md:py-4 rounded-2xl font-bold uppercase text-xs md:text-sm tracking-widest",children:"Become a Donor"})]}),w.jsx("div",{className:"text-6xl md:text-9xl text-red-500 animate-bounce select-none",children:"🩸"})]})}),w.jsx("section",{className:"py-12 md:py-20 px-4 md:px-6 bg-slate-50",children:w.jsx("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8",children:[{title:"Save Lives",desc:"Your donation can help multiple patients.",icon:"🩸"},{title:"Health Benefits",desc:"Improves heart health and iron balance.",icon:"🩺"},{title:"Community Impact",desc:"Be part of a national donor network.",icon:"🌟"}].map((l,u)=>w.jsxs("div",{className:"bg-white rounded-3xl p-6 md:p-10 shadow-lg text-center",children:[w.jsx("div",{className:"text-4xl md:text-5xl mb-4",children:l.icon}),w.jsx("h3",{className:"text-lg md:text-xl font-black text-[#1a237e]",children:l.title}),w.jsx("p",{className:"text-sm text-slate-500",children:l.desc})]},u))})}),w.jsx("section",{className:"py-10 bg-white",children:w.jsx("div",{className:"max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center",children:[{num:"25k+",label:"Happy Donors"},{num:"150+",label:"Hospitals"},{num:"10k+",label:"Lives Saved"},{num:"40+",label:"Cities"}].map((l,u)=>w.jsxs("div",{children:[w.jsx("div",{className:"text-3xl md:text-5xl font-black text-[#1a237e]",children:l.num}),w.jsx("div",{className:"text-xs uppercase text-slate-400",children:l.label})]},u))})}),w.jsxs("section",{className:"py-12 md:py-20 px-4 md:px-6 text-center",children:[w.jsxs("h2",{className:"text-2xl md:text-4xl font-black text-[#1a237e] mb-10",children:["Why Donate ",w.jsx("span",{className:"text-red-600",children:"Blood?"})]}),w.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto",children:o.map((l,u)=>w.jsxs("div",{className:"bg-white p-6 md:p-10 rounded-3xl shadow",children:[w.jsx("div",{className:"text-4xl mb-3",children:l.icon}),w.jsx("h4",{className:"text-xs md:text-sm font-bold text-[#1a237e]",children:l.title})]},u))})]}),w.jsxs("section",{className:"relative h-[400px] md:h-[600px] flex items-center justify-center text-center",children:[w.jsx("img",{src:"https://images.pexels.com/photos/3985161/pexels-photo-3985161.jpeg",className:"absolute w-full h-full object-cover",alt:""}),w.jsx("div",{className:"absolute inset-0 bg-black/60"}),w.jsxs("div",{className:"relative z-10 px-4",children:[w.jsx("h2",{className:"text-3xl md:text-6xl font-black text-white",children:"Ready to be a Blood Hero?"}),w.jsx("button",{onClick:()=>t("/register"),className:"mt-6 bg-red-600 text-white px-6 md:px-16 py-3 md:py-5 rounded-xl font-bold",children:"Register"})]})]}),w.jsx("section",{className:"py-12 md:py-20 bg-slate-50 px-4",children:w.jsxs("div",{className:"max-w-4xl mx-auto",children:[w.jsxs("h2",{className:"text-2xl md:text-3xl font-black text-center text-[#1a237e] mb-10",children:["Common ",w.jsx("span",{className:"text-red-600",children:"Questions"})]}),w.jsx("div",{className:"space-y-4",children:i.map((l,u)=>w.jsxs("div",{className:"bg-white rounded-2xl shadow",children:[w.jsxs("button",{onClick:()=>e(n===u?null:u),className:"w-full p-4 md:p-6 flex justify-between text-left",children:[w.jsx("span",{className:"text-sm font-bold text-[#1a237e]",children:l.q}),w.jsx("span",{className:"text-red-600 font-bold",children:n===u?"−":"+"})]}),n===u&&w.jsx("div",{className:"px-4 md:px-6 pb-4 text-sm text-slate-500",children:l.a})]},u))})]})})]})},SS=()=>{};var Cy={};/**
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
 */const Vv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},IS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],u=n[t++],d=n[t++],p=((o&7)<<18|(l&63)<<12|(u&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],u=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|u&63)}}return e.join("")},Mv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],u=o+1<n.length,d=u?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,_=l>>2,x=(l&3)<<4|d>>4;let I=(d&15)<<2|y>>6,V=y&63;p||(V=64,u||(I=64)),i.push(t[_],t[x],t[I],t[V])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Vv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):IS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const x=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||x==null)throw new RS;const I=l<<2|d>>4;if(i.push(I),y!==64){const V=d<<4&240|y>>2;if(i.push(V),x!==64){const L=y<<6&192|x;i.push(L)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class RS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AS=function(n){const e=Vv(n);return Mv.encodeByteArray(e,!0)},Nc=function(n){return AS(n).replace(/\./g,"")},jv=function(n){try{return Mv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function CS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kS=()=>CS().__FIREBASE_DEFAULTS__,PS=()=>{if(typeof process>"u"||typeof Cy>"u")return;const n=Cy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},bS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jv(n[1]);return e&&JSON.parse(e)},rh=()=>{try{return SS()||kS()||PS()||bS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Fv=n=>rh()?.emulatorHosts?.[n],NS=n=>{const e=Fv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Uv=()=>rh()?.config,Bv=n=>rh()?.[`_${n}`];/**
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
 */class DS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function OS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Nc(JSON.stringify(t)),Nc(JSON.stringify(u)),""].join(".")}/**
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
 */function Gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function LS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gt())}function VS(){const n=rh()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function MS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function FS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function US(){const n=Gt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function BS(){return!VS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zS(){try{return typeof indexedDB=="object"}catch{return!1}}function $S(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const HS="FirebaseError";class Xr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=HS,Object.setPrototypeOf(this,Xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Al.prototype.create)}}class Al{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],u=l?qS(l,i):"Error",d=`${this.serviceName}: ${u} (${o}).`;return new Xr(o,d,i)}}function qS(n,e){return n.replace(WS,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const WS=/\{\$([^}]+)}/g;function KS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ns(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],u=e[o];if(ky(l)&&ky(u)){if(!Ns(l,u))return!1}else if(l!==u)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function ky(n){return n!==null&&typeof n=="object"}/**
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
 */function Cl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function GS(n,e){const t=new QS(n,e);return t.subscribe.bind(t)}class QS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");JS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=af),o.error===void 0&&(o.error=af),o.complete===void 0&&(o.complete=af);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function af(){}/**
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
 */function kt(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function zv(n){return(await fetch(n,{credentials:"include"})).ok}class Ds{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rs="[DEFAULT]";/**
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
 */class YS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new DS;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZS(e))try{this.getOrInitializeService({instanceIdentifier:Rs})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Rs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rs){return this.instances.has(e)}getOptions(e=Rs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&u.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:XS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Rs){return this.component?this.component.multipleInstances?e:Rs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XS(n){return n===Rs?void 0:n}function ZS(n){return n.instantiationMode==="EAGER"}/**
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
 */class eI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new YS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Oe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Oe||(Oe={}));const tI={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},nI=Oe.INFO,rI={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},iI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=rI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ap{constructor(e){this.name=e,this._logLevel=nI,this._logHandler=iI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const sI=(n,e)=>e.some(t=>n instanceof t);let Py,by;function oI(){return Py||(Py=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aI(){return by||(by=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $v=new WeakMap,Sf=new WeakMap,Hv=new WeakMap,lf=new WeakMap,lp=new WeakMap;function lI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",u)},l=()=>{t(Li(n.result)),o()},u=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&$v.set(t,n)}).catch(()=>{}),lp.set(e,n),e}function uI(n){if(Sf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",u),n.removeEventListener("abort",u)},l=()=>{t(),o()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",u),n.addEventListener("abort",u)});Sf.set(n,e)}let If={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Hv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Li(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function cI(n){If=n(If)}function hI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(uf(this),e,...t);return Hv.set(i,e.sort?e.sort():[e]),Li(i)}:aI().includes(n)?function(...e){return n.apply(uf(this),e),Li($v.get(this))}:function(...e){return Li(n.apply(uf(this),e))}}function dI(n){return typeof n=="function"?hI(n):(n instanceof IDBTransaction&&uI(n),sI(n,oI())?new Proxy(n,If):n)}function Li(n){if(n instanceof IDBRequest)return lI(n);if(lf.has(n))return lf.get(n);const e=dI(n);return e!==n&&(lf.set(n,e),lp.set(e,n)),e}const uf=n=>lp.get(n);function fI(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const u=indexedDB.open(n,e),d=Li(u);return i&&u.addEventListener("upgradeneeded",p=>{i(Li(u.result),p.oldVersion,p.newVersion,Li(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const pI=["get","getKey","getAll","getAllKeys","count"],mI=["put","add","delete","clear"],cf=new Map;function Ny(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(cf.get(e))return cf.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=mI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||pI.includes(t)))return;const l=async function(u,...d){const p=this.transaction(u,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return cf.set(e,l),l}cI(n=>({...n,get:(e,t,i)=>Ny(e,t)||n.get(e,t,i),has:(e,t)=>!!Ny(e,t)||n.has(e,t)}));/**
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
 */class gI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function yI(n){return n.getComponent()?.type==="VERSION"}const Rf="@firebase/app",Dy="0.14.12";/**
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
 */const Wr=new ap("@firebase/app"),_I="@firebase/app-compat",vI="@firebase/analytics-compat",wI="@firebase/analytics",EI="@firebase/app-check-compat",xI="@firebase/app-check",TI="@firebase/auth",SI="@firebase/auth-compat",II="@firebase/database",RI="@firebase/data-connect",AI="@firebase/database-compat",CI="@firebase/functions",kI="@firebase/functions-compat",PI="@firebase/installations",bI="@firebase/installations-compat",NI="@firebase/messaging",DI="@firebase/messaging-compat",OI="@firebase/performance",LI="@firebase/performance-compat",VI="@firebase/remote-config",MI="@firebase/remote-config-compat",jI="@firebase/storage",FI="@firebase/storage-compat",UI="@firebase/firestore",BI="@firebase/ai",zI="@firebase/firestore-compat",$I="firebase",HI="12.13.0";/**
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
 */const Af="[DEFAULT]",qI={[Rf]:"fire-core",[_I]:"fire-core-compat",[wI]:"fire-analytics",[vI]:"fire-analytics-compat",[xI]:"fire-app-check",[EI]:"fire-app-check-compat",[TI]:"fire-auth",[SI]:"fire-auth-compat",[II]:"fire-rtdb",[RI]:"fire-data-connect",[AI]:"fire-rtdb-compat",[CI]:"fire-fn",[kI]:"fire-fn-compat",[PI]:"fire-iid",[bI]:"fire-iid-compat",[NI]:"fire-fcm",[DI]:"fire-fcm-compat",[OI]:"fire-perf",[LI]:"fire-perf-compat",[VI]:"fire-rc",[MI]:"fire-rc-compat",[jI]:"fire-gcs",[FI]:"fire-gcs-compat",[UI]:"fire-fst",[zI]:"fire-fst-compat",[BI]:"fire-vertex","fire-js":"fire-js",[$I]:"fire-js-all"};/**
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
 */const Dc=new Map,WI=new Map,Cf=new Map;function Oy(n,e){try{n.container.addComponent(e)}catch(t){Wr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Bo(n){const e=n.name;if(Cf.has(e))return Wr.debug(`There were multiple attempts to register component ${e}.`),!1;Cf.set(e,n);for(const t of Dc.values())Oy(t,n);for(const t of WI.values())Oy(t,n);return!0}function up(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Bn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const KI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vi=new Al("app","Firebase",KI);/**
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
 */class GI{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ds("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vi.create("app-deleted",{appName:this._name})}}/**
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
 */const Yo=HI;function qv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Af,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw Vi.create("bad-app-name",{appName:String(o)});if(t||(t=Uv()),!t)throw Vi.create("no-options");const l=Dc.get(o);if(l){if(Ns(t,l.options)&&Ns(i,l.config))return l;throw Vi.create("duplicate-app",{appName:o})}const u=new eI(o);for(const p of Cf.values())u.addComponent(p);const d=new GI(t,i,u);return Dc.set(o,d),d}function Wv(n=Af){const e=Dc.get(n);if(!e&&n===Af&&Uv())return qv();if(!e)throw Vi.create("no-app",{appName:n});return e}function Mi(n,e,t){let i=qI[n]??n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wr.warn(u.join(" "));return}Bo(new Ds(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const QI="firebase-heartbeat-database",JI=1,pl="firebase-heartbeat-store";let hf=null;function Kv(){return hf||(hf=fI(QI,JI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(pl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vi.create("idb-open",{originalErrorMessage:n.message})})),hf}async function YI(n){try{const t=(await Kv()).transaction(pl),i=await t.objectStore(pl).get(Gv(n));return await t.done,i}catch(e){if(e instanceof Xr)Wr.warn(e.message);else{const t=Vi.create("idb-get",{originalErrorMessage:e?.message});Wr.warn(t.message)}}}async function Ly(n,e){try{const i=(await Kv()).transaction(pl,"readwrite");await i.objectStore(pl).put(e,Gv(n)),await i.done}catch(t){if(t instanceof Xr)Wr.warn(t.message);else{const i=Vi.create("idb-set",{originalErrorMessage:t?.message});Wr.warn(i.message)}}}function Gv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const XI=1024,ZI=30;class e1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new n1(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vy();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>ZI){const o=r1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Wr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vy(),{heartbeatsToSend:t,unsentEntries:i}=t1(this._heartbeatsCache.heartbeats),o=Nc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Wr.warn(e),""}}}function Vy(){return new Date().toISOString().substring(0,10)}function t1(n,e=XI){const t=[];let i=n.slice();for(const o of n){const l=t.find(u=>u.agent===o.agent);if(l){if(l.dates.push(o.date),My(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),My(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class n1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zS()?$S().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await YI(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ly(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ly(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function My(n){return Nc(JSON.stringify({version:2,heartbeats:n})).length}function r1(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function i1(n){Bo(new Ds("platform-logger",e=>new gI(e),"PRIVATE")),Bo(new Ds("heartbeat",e=>new e1(e),"PRIVATE")),Mi(Rf,Dy,n),Mi(Rf,Dy,"esm2020"),Mi("fire-js","")}i1("");var s1="firebase",o1="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mi(s1,o1,"app");function Qv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const a1=Qv,Jv=new Al("auth","Firebase",Qv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=new ap("@firebase/auth");function l1(n,...e){Oc.logLevel<=Oe.WARN&&Oc.warn(`Auth (${Yo}): ${n}`,...e)}function _c(n,...e){Oc.logLevel<=Oe.ERROR&&Oc.error(`Auth (${Yo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(n,...e){throw cp(n,...e)}function fr(n,...e){return cp(n,...e)}function Yv(n,e,t){const i={...a1(),[e]:t};return new Al("auth","Firebase",i).create(e,{appName:n.name})}function ji(n){return Yv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Jv.create(n,...e)}function xe(n,e,...t){if(!n)throw cp(e,...t)}function Ur(n){const e="INTERNAL ASSERTION FAILED: "+n;throw _c(e),new Error(e)}function Gr(n,e){n||Ur(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(){return typeof self<"u"&&self.location?.href||""}function u1(){return jy()==="http:"||jy()==="https:"}function jy(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(u1()||jS()||"connection"in navigator)?navigator.onLine:!0}function h1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Gr(t>e,"Short delay should be less than long delay!"),this.isMobile=LS()||FS()}get(){return c1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(n,e){Gr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],p1=new Pl(3e4,6e4);function bl(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ji(n,e,t,i,o={}){return Zv(n,o,async()=>{let l={},u={};i&&(e==="GET"?u=i:l={body:JSON.stringify(i)});const d=Cl({key:n.config.apiKey,...u}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y={method:e,headers:p,...l};return MS()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&kl(n.emulatorConfig.host)&&(y.credentials="include"),Xv.fetch()(await t0(n,n.config.apiHost,t,d),y)})}async function Zv(n,e,t){n._canInitEmulator=!1;const i={...d1,...e};try{const o=new g1(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw lc(n,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const d=l.ok?u.errorMessage:u.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw lc(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw lc(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw lc(n,"user-disabled",u);const _=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Yv(n,_,y);Kr(n,_)}}catch(o){if(o instanceof Xr)throw o;Kr(n,"network-request-failed",{message:String(o)})}}async function e0(n,e,t,i,o={}){const l=await Ji(n,e,t,i,o);return"mfaPendingCredential"in l&&Kr(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function t0(n,e,t,i){const o=`${e}${t}?${i}`,l=n,u=l.config.emulator?hp(n.config,o):`${n.config.apiScheme}://${o}`;return f1.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function m1(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class g1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(fr(this.auth,"network-request-failed")),p1.get())})}}function lc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=fr(n,e,i);return o.customData._tokenResponse=t,o}function Fy(n){return n!==void 0&&n.enterprise!==void 0}class y1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return m1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _1(n,e){return Ji(n,"GET","/v2/recaptchaConfig",bl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v1(n,e){return Ji(n,"POST","/v1/accounts:delete",e)}async function Lc(n,e){return Ji(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function w1(n,e=!1){const t=kt(n),i=await t.getIdToken(e),o=dp(i);xe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,u=l?.sign_in_provider;return{claims:o,token:i,authTime:ll(df(o.auth_time)),issuedAtTime:ll(df(o.iat)),expirationTime:ll(df(o.exp)),signInProvider:u||null,signInSecondFactor:l?.sign_in_second_factor||null}}function df(n){return Number(n)*1e3}function dp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return _c("JWT malformed, contained fewer than 3 sections"),null;try{const o=jv(t);return o?JSON.parse(o):(_c("Failed to decode base64 JWT payload"),null)}catch(o){return _c("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Uy(n){const e=dp(n);return xe(e,"internal-error"),xe(typeof e.exp<"u","internal-error"),xe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Xr&&E1(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function E1({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ll(this.lastLoginAt),this.creationTime=ll(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vc(n){const e=n.auth,t=await n.getIdToken(),i=await zo(n,Lc(e,{idToken:t}));xe(i?.users.length,e,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const l=o.providerUserInfo?.length?n0(o.providerUserInfo):[],u=S1(n.providerData,l),d=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!u?.length,y=d?p:!1,_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Pf(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,_)}async function T1(n){const e=kt(n);await Vc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function S1(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function n0(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I1(n,e){const t=await Zv(n,{},async()=>{const i=Cl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,u=await t0(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:i};return n.emulatorConfig&&kl(n.emulatorConfig.host)&&(p.credentials="include"),Xv.fetch()(u,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function R1(n,e){return Ji(n,"POST","/v2/accounts:revokeToken",bl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){xe(e.idToken,"internal-error"),xe(typeof e.idToken<"u","internal-error"),xe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){xe(e.length!==0,"internal-error");const t=Uy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(xe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await I1(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,u=new Vo;return i&&(xe(typeof i=="string","internal-error",{appName:e}),u.refreshToken=i),o&&(xe(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),l&&(xe(typeof l=="number","internal-error",{appName:e}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vo,this.toJSON())}_performRefresh(){return Ur("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(n,e){xe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class zn{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new x1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Pf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await zo(this,this.stsTokenManager.getToken(this.auth,e));return xe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return w1(this,e)}reload(){return T1(this)}_assign(e){this!==e&&(xe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){xe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Vc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bn(this.auth.app))return Promise.reject(ji(this.auth));const e=await this.getIdToken();return await zo(this,v1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,u=t.photoURL??void 0,d=t.tenantId??void 0,p=t._redirectEventId??void 0,y=t.createdAt??void 0,_=t.lastLoginAt??void 0,{uid:x,emailVerified:I,isAnonymous:V,providerData:L,stsTokenManager:F}=t;xe(x&&F,e,"internal-error");const N=Vo.fromJSON(this.name,F);xe(typeof x=="string",e,"internal-error"),Pi(i,e.name),Pi(o,e.name),xe(typeof I=="boolean",e,"internal-error"),xe(typeof V=="boolean",e,"internal-error"),Pi(l,e.name),Pi(u,e.name),Pi(d,e.name),Pi(p,e.name),Pi(y,e.name),Pi(_,e.name);const Q=new zn({uid:x,auth:e,email:o,emailVerified:I,displayName:i,isAnonymous:V,photoURL:u,phoneNumber:l,tenantId:d,stsTokenManager:N,createdAt:y,lastLoginAt:_});return L&&Array.isArray(L)&&(Q.providerData=L.map(J=>({...J}))),p&&(Q._redirectEventId=p),Q}static async _fromIdTokenResponse(e,t,i=!1){const o=new Vo;o.updateFromServerResponse(t);const l=new zn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Vc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];xe(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?n0(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!l?.length,d=new Vo;d.updateFromIdToken(i);const p=new zn({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:u}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Pf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=new Map;function Br(n){Gr(n instanceof Function,"Expected a class definition");let e=By.get(n);return e?(Gr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,By.set(n,e),e)}/**
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
 */class r0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}r0.type="NONE";const zy=r0;/**
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
 */function vc(n,e,t){return`firebase:${n}:${e}:${t}`}class Mo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=vc(this.userKey,o.apiKey,l),this.fullPersistenceKey=vc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Lc(this.auth,{idToken:e}).catch(()=>{});return t?zn._fromGetAccountInfoResponse(this.auth,t,e):null}return zn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Mo(Br(zy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Br(zy);const u=vc(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const _=await y._get(u);if(_){let x;if(typeof _=="string"){const I=await Lc(e,{idToken:_}).catch(()=>{});if(!I)break;x=await zn._fromGetAccountInfoResponse(e,I,_)}else x=zn._fromJSON(e,_);y!==l&&(d=x),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Mo(l,e,i):(l=p[0],d&&await l._set(u,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(u)}catch{}})),new Mo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(a0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(i0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(u0(e))return"Blackberry";if(c0(e))return"Webos";if(s0(e))return"Safari";if((e.includes("chrome/")||o0(e))&&!e.includes("edge/"))return"Chrome";if(l0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function i0(n=Gt()){return/firefox\//i.test(n)}function s0(n=Gt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function o0(n=Gt()){return/crios\//i.test(n)}function a0(n=Gt()){return/iemobile/i.test(n)}function l0(n=Gt()){return/android/i.test(n)}function u0(n=Gt()){return/blackberry/i.test(n)}function c0(n=Gt()){return/webos/i.test(n)}function fp(n=Gt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function A1(n=Gt()){return fp(n)&&!!window.navigator?.standalone}function C1(){return US()&&document.documentMode===10}function h0(n=Gt()){return fp(n)||l0(n)||c0(n)||u0(n)||/windows phone/i.test(n)||a0(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(n,e=[]){let t;switch(n){case"Browser":t=$y(Gt());break;case"Worker":t=`${$y(Gt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Yo}/${i}`}/**
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
 */class k1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((u,d)=>{try{const p=e(l);u(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function P1(n,e={}){return Ji(n,"GET","/v2/passwordPolicy",bl(n,e))}/**
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
 */const b1=6;class N1{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??b1,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hy(this),this.idTokenSubscription=new Hy(this),this.beforeStateQueue=new k1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Br(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Mo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lc(this,{idToken:e}),i=await zn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Bn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,u=i?._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===u)&&d?.user&&(i=d.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return xe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=h1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bn(this.app))return Promise.reject(ji(this));const t=e?kt(e):null;return t&&xe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&xe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bn(this.app)?Promise.reject(ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bn(this.app)?Promise.reject(ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await P1(this),t=new N1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Al("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await R1(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Br(e)||this._popupRedirectResolver;xe(t,this,"argument-error"),this.redirectPersistenceManager=await Mo.create(this,[Br(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(xe(d,this,"internal-error"),d.then(()=>{u||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return xe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=d0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(Bn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&l1(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Xo(n){return kt(n)}class Hy{constructor(e){this.auth=e,this.observer=null,this.addObserver=GS(t=>this.observer=t)}get next(){return xe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ih={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function O1(n){ih=n}function f0(n){return ih.loadJS(n)}function L1(){return ih.recaptchaEnterpriseScript}function V1(){return ih.gapiScript}function M1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class j1{constructor(){this.enterprise=new F1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class F1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const U1="recaptcha-enterprise",p0="NO_RECAPTCHA";class B1{constructor(e){this.type=U1,this.auth=Xo(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,d)=>{_1(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new y1(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,u(y.siteKey)}}).catch(p=>{d(p)})})}function o(l,u,d){const p=window.grecaptcha;Fy(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{u(y)}).catch(()=>{u(p0)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new j1().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{i(this.auth).then(d=>{if(!t&&Fy(window.grecaptcha))o(d,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=L1();p.length!==0&&(p+=d),f0(p).then(()=>{o(d,l,u)}).catch(y=>{u(y)})}}).catch(d=>{u(d)})})}}async function qy(n,e,t,i=!1,o=!1){const l=new B1(n);let u;if(o)u=p0;else try{u=await l.verify(t)}catch{u=await l.verify(t,!0)}const d={...e};return i?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function z1(n,e,t,i,o){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await qy(n,e,t,t==="getOobCode");return i(n,l)}else return i(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await qy(n,e,t,t==="getOobCode");return i(n,u)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(n,e){const t=up(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ns(l,e??{}))return o;Kr(o,"already-initialized")}return t.initialize({options:e})}function H1(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Br);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function q1(n,e,t){const i=Xo(n);xe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=m0(e),{host:u,port:d}=W1(e),p=d===null?"":`:${d}`,y={url:`${l}//${u}${p}/`},_=Object.freeze({host:u,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){xe(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),xe(Ns(y,i.config.emulator)&&Ns(_,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=_,i.settings.appVerificationDisabledForTesting=!0,kl(u)?zv(`${l}//${u}${p}`):K1()}function m0(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function W1(n){const e=m0(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Wy(i.substr(l.length+1))}}else{const[l,u]=i.split(":");return{host:l,port:Wy(u)}}}function Wy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function K1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ur("not implemented")}_getIdTokenResponse(e){return Ur("not implemented")}_linkToIdToken(e,t){return Ur("not implemented")}_getReauthenticationResolver(e){return Ur("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(n,e){return e0(n,"POST","/v1/accounts:signInWithIdp",bl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1="http://localhost";class Os extends g0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Kr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const u=new Os(i,o);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return jo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,jo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jo(e,t)}buildRequest(){const e={requestUri:G1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Cl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Nl extends y0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends Nl{constructor(){super("facebook.com")}static credential(e){return Os._fromParams({providerId:bi.PROVIDER_ID,signInMethod:bi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bi.credentialFromTaggedObject(e)}static credentialFromError(e){return bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bi.credential(e.oauthAccessToken)}catch{return null}}}bi.FACEBOOK_SIGN_IN_METHOD="facebook.com";bi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Nl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Os._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ni.credentialFromTaggedObject(e)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ni.credential(t,i)}catch{return null}}}Ni.GOOGLE_SIGN_IN_METHOD="google.com";Ni.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends Nl{constructor(){super("github.com")}static credential(e){return Os._fromParams({providerId:Di.PROVIDER_ID,signInMethod:Di.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Di.credentialFromTaggedObject(e)}static credentialFromError(e){return Di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Di.credential(e.oauthAccessToken)}catch{return null}}}Di.GITHUB_SIGN_IN_METHOD="github.com";Di.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends Nl{constructor(){super("twitter.com")}static credential(e,t){return Os._fromParams({providerId:Oi.PROVIDER_ID,signInMethod:Oi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Oi.credentialFromTaggedObject(e)}static credentialFromError(e){return Oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Oi.credential(t,i)}catch{return null}}}Oi.TWITTER_SIGN_IN_METHOD="twitter.com";Oi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q1(n,e){return e0(n,"POST","/v1/accounts:signUp",bl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await zn._fromIdTokenResponse(e,i,o),u=Ky(i);return new Ls({user:l,providerId:u,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Ky(i);return new Ls({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Ky(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc extends Xr{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Mc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Mc(e,t,i,o)}}function _0(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Mc._fromErrorAndOperation(n,l,e,i):l})}async function J1(n,e,t=!1){const i=await zo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ls._forOperation(n,"link",i)}/**
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
 */async function Y1(n,e,t=!1){const{auth:i}=n;if(Bn(i.app))return Promise.reject(ji(i));const o="reauthenticate";try{const l=await zo(n,_0(i,o,e,n),t);xe(l.idToken,i,"internal-error");const u=dp(l.idToken);xe(u,i,"internal-error");const{sub:d}=u;return xe(n.uid===d,i,"user-mismatch"),Ls._forOperation(n,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&Kr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X1(n,e,t=!1){if(Bn(n.app))return Promise.reject(ji(n));const i="signIn",o=await _0(n,i,e),l=await Ls._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z1(n){const e=Xo(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eR(n,e,t){if(Bn(n.app))return Promise.reject(ji(n));const i=Xo(n),u=await z1(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Q1).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Z1(n),p}),d=await Ls._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(d.user),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(n,e){return Ji(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=kt(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await zo(i,tR(i.auth,l));i.displayName=u.displayName||null,i.photoURL=u.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(u)}function rR(n,e,t,i){return kt(n).onIdTokenChanged(e,t,i)}function iR(n,e,t){return kt(n).beforeAuthStateChanged(e,t)}function v0(n,e,t,i){return kt(n).onAuthStateChanged(e,t,i)}const jc="__sak";/**
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
 */class w0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(jc,"1"),this.storage.removeItem(jc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=1e3,oR=10;class E0 extends w0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=h0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,p)=>{this.notifyListeners(u,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(i);!t&&this.localCache[i]===u||this.notifyListeners(i,u)},l=this.storage.getItem(i);C1()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,oR):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},sR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}E0.type="LOCAL";const aR=E0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0 extends w0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}x0.type="SESSION";const T0=x0;/**
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
 */function lR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class sh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new sh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,u=this.handlersMap[o];if(!u?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(u).map(async y=>y(t.origin,l)),p=await lR(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class uR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,u;return new Promise((d,p)=>{const y=pp("",20);o.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},i);u={messageChannel:o,onMessage(x){const I=x;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(I.data.response);break;default:clearTimeout(_),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(){return window}function cR(n){pr().location.href=n}/**
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
 */function S0(){return typeof pr().WorkerGlobalScope<"u"&&typeof pr().importScripts=="function"}async function hR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dR(){return navigator?.serviceWorker?.controller||null}function fR(){return S0()?self:null}/**
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
 */const I0="firebaseLocalStorageDb",pR=1,Fc="firebaseLocalStorage",R0="fbase_key";class Dl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function oh(n,e){return n.transaction([Fc],e?"readwrite":"readonly").objectStore(Fc)}function mR(){const n=indexedDB.deleteDatabase(I0);return new Dl(n).toPromise()}function bf(){const n=indexedDB.open(I0,pR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Fc,{keyPath:R0})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Fc)?e(i):(i.close(),await mR(),e(await bf()))})})}async function Gy(n,e,t){const i=oh(n,!0).put({[R0]:e,value:t});return new Dl(i).toPromise()}async function gR(n,e){const t=oh(n,!1).get(e),i=await new Dl(t).toPromise();return i===void 0?null:i.value}function Qy(n,e){const t=oh(n,!0).delete(e);return new Dl(t).toPromise()}const yR=800,_R=3;class A0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>_R)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return S0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sh._getInstance(fR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await hR(),!this.activeServiceWorker)return;this.sender=new uR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bf();return await Gy(e,jc,"1"),await Qy(e,jc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Gy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>gR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Qy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=oh(o,!1).getAll();return new Dl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}A0.type="LOCAL";const vR=A0;new Pl(3e4,6e4);/**
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
 */function wR(n,e){return e?Br(e):(xe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class mp extends g0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ER(n){return X1(n.auth,new mp(n),n.bypassAuthState)}function xR(n){const{auth:e,user:t}=n;return xe(t,e,"internal-error"),Y1(t,new mp(n),n.bypassAuthState)}async function TR(n){const{auth:e,user:t}=n;return xe(t,e,"internal-error"),J1(t,new mp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:u,type:d}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ER;case"linkViaPopup":case"linkViaRedirect":return TR;case"reauthViaPopup":case"reauthViaRedirect":return xR;default:Kr(this.auth,"internal-error")}}resolve(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=new Pl(2e3,1e4);class Lo extends C0{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Lo.currentPopupAction&&Lo.currentPopupAction.cancel(),Lo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return xe(e,this.auth,"internal-error"),e}async onExecution(){Gr(this.filter.length===1,"Popup operations only handle one event");const e=pp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(fr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(fr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lo.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SR.get())};e()}}Lo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR="pendingRedirect",wc=new Map;class RR extends C0{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=wc.get(this.auth._key());if(!e){try{const i=await AR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}wc.set(this.auth._key(),e)}return this.bypassAuthState||wc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AR(n,e){const t=PR(e),i=kR(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function CR(n,e){wc.set(n._key(),e)}function kR(n){return Br(n._redirectPersistence)}function PR(n){return vc(IR,n.config.apiKey,n.name)}async function bR(n,e,t=!1){if(Bn(n.app))return Promise.reject(ji(n));const i=Xo(n),o=wR(i,e),u=await new RR(i,o,t).execute();return u&&!t&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=600*1e3;class DR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!k0(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(fr(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jy(e))}saveEventToCache(e){this.cachedEventUids.add(Jy(e)),this.lastProcessedEventTime=Date.now()}}function Jy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function k0({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function OR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return k0(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR(n,e={}){return Ji(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MR=/^https?/;async function jR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await LR(n);for(const t of e)try{if(FR(t))return}catch{}Kr(n,"unauthorized-domain")}function FR(n){const e=kf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===i}if(!MR.test(t))return!1;if(VR.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const UR=new Pl(3e4,6e4);function Yy(){const n=pr().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function BR(n){return new Promise((e,t)=>{function i(){Yy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yy(),t(fr(n,"network-request-failed"))},timeout:UR.get()})}if(pr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(pr().gapi?.load)i();else{const o=M1("iframefcb");return pr()[o]=()=>{gapi.load?i():t(fr(n,"network-request-failed"))},f0(`${V1()}?onload=${o}`).catch(l=>t(l))}}).catch(e=>{throw Ec=null,e})}let Ec=null;function zR(n){return Ec=Ec||BR(n),Ec}/**
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
 */const $R=new Pl(5e3,15e3),HR="__/auth/iframe",qR="emulator/auth/iframe",WR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GR(n){const e=n.config;xe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?hp(e,qR):`https://${n.config.authDomain}/${HR}`,i={apiKey:e.apiKey,appName:n.name,v:Yo},o=KR.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Cl(i).slice(1)}`}async function QR(n){const e=await zR(n),t=pr().gapi;return xe(t,n,"internal-error"),e.open({where:document.body,url:GR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WR,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const u=fr(n,"network-request-failed"),d=pr().setTimeout(()=>{l(u)},$R.get());function p(){pr().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{l(u)})}))}/**
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
 */const JR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YR=500,XR=600,ZR="_blank",eA="http://localhost";class Xy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tA(n,e,t,i=YR,o=XR){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p={...JR,width:i.toString(),height:o.toString(),top:l,left:u},y=Gt().toLowerCase();t&&(d=o0(y)?ZR:t),i0(y)&&(e=e||eA,p.scrollbars="yes");const _=Object.entries(p).reduce((I,[V,L])=>`${I}${V}=${L},`,"");if(A1(y)&&d!=="_self")return nA(e||"",d),new Xy(null);const x=window.open(e||"",d,_);xe(x,n,"popup-blocked");try{x.focus()}catch{}return new Xy(x)}function nA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const rA="__/auth/handler",iA="emulator/auth/handler",sA=encodeURIComponent("fac");async function Zy(n,e,t,i,o,l){xe(n.config.authDomain,n,"auth-domain-config-required"),xe(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Yo,eventId:o};if(e instanceof y0){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",KS(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,x]of Object.entries({}))u[_]=x}if(e instanceof Nl){const _=e.getScopes().filter(x=>x!=="");_.length>0&&(u.scopes=_.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const _ of Object.keys(d))d[_]===void 0&&delete d[_];const p=await n._getAppCheckToken(),y=p?`#${sA}=${encodeURIComponent(p)}`:"";return`${oA(n)}?${Cl(d).slice(1)}${y}`}function oA({config:n}){return n.emulator?hp(n,iA):`https://${n.authDomain}/${rA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="webStorageSupport";class aA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=T0,this._completeRedirectFn=bR,this._overrideRedirectResult=CR}async _openPopup(e,t,i,o){Gr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await Zy(e,t,i,kf(),o);return tA(e,l,pp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Zy(e,t,i,kf(),o);return cR(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Gr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await QR(e),i=new DR(e);return t.register("authEvent",o=>(xe(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ff,{type:ff},o=>{const l=o?.[0]?.[ff];l!==void 0&&t(!!l),Kr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return h0()||s0()||fp()}}const lA=aA;var e_="@firebase/auth",t_="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){xe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hA(n){Bo(new Ds("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=i.options;xe(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:d0(n)},y=new D1(i,o,l,p);return H1(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Bo(new Ds("auth-internal",e=>{const t=Xo(e.getProvider("auth").getImmediate());return(i=>new uA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mi(e_,t_,cA(n)),Mi(e_,t_,"esm2020")}/**
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
 */const dA=300,fA=Bv("authIdTokenMaxAge")||dA;let n_=null;const pA=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>fA)return;const o=t?.token;n_!==o&&(n_=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function mA(n=Wv()){const e=up(n,"auth");if(e.isInitialized())return e.getImmediate();const t=$1(n,{popupRedirectResolver:lA,persistence:[vR,aR,T0]}),i=Bv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const u=pA(l.toString());iR(t,u,()=>u(t.currentUser)),rR(t,d=>u(d))}}const o=Fv("auth");return o&&q1(t,`http://${o}`),t}function gA(){return document.getElementsByTagName("head")?.[0]??document}O1({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=fr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",gA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hA("Browser");var r_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fi,P0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,R){function A(){}A.prototype=R.prototype,k.F=R.prototype,k.prototype=new A,k.prototype.constructor=k,k.D=function(D,b,j){for(var C=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)C[Ke-2]=arguments[Ke];return R.prototype[b].apply(D,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,R,A){A||(A=0);const D=Array(16);if(typeof R=="string")for(var b=0;b<16;++b)D[b]=R.charCodeAt(A++)|R.charCodeAt(A++)<<8|R.charCodeAt(A++)<<16|R.charCodeAt(A++)<<24;else for(b=0;b<16;++b)D[b]=R[A++]|R[A++]<<8|R[A++]<<16|R[A++]<<24;R=k.g[0],A=k.g[1],b=k.g[2];let j=k.g[3],C;C=R+(j^A&(b^j))+D[0]+3614090360&4294967295,R=A+(C<<7&4294967295|C>>>25),C=j+(b^R&(A^b))+D[1]+3905402710&4294967295,j=R+(C<<12&4294967295|C>>>20),C=b+(A^j&(R^A))+D[2]+606105819&4294967295,b=j+(C<<17&4294967295|C>>>15),C=A+(R^b&(j^R))+D[3]+3250441966&4294967295,A=b+(C<<22&4294967295|C>>>10),C=R+(j^A&(b^j))+D[4]+4118548399&4294967295,R=A+(C<<7&4294967295|C>>>25),C=j+(b^R&(A^b))+D[5]+1200080426&4294967295,j=R+(C<<12&4294967295|C>>>20),C=b+(A^j&(R^A))+D[6]+2821735955&4294967295,b=j+(C<<17&4294967295|C>>>15),C=A+(R^b&(j^R))+D[7]+4249261313&4294967295,A=b+(C<<22&4294967295|C>>>10),C=R+(j^A&(b^j))+D[8]+1770035416&4294967295,R=A+(C<<7&4294967295|C>>>25),C=j+(b^R&(A^b))+D[9]+2336552879&4294967295,j=R+(C<<12&4294967295|C>>>20),C=b+(A^j&(R^A))+D[10]+4294925233&4294967295,b=j+(C<<17&4294967295|C>>>15),C=A+(R^b&(j^R))+D[11]+2304563134&4294967295,A=b+(C<<22&4294967295|C>>>10),C=R+(j^A&(b^j))+D[12]+1804603682&4294967295,R=A+(C<<7&4294967295|C>>>25),C=j+(b^R&(A^b))+D[13]+4254626195&4294967295,j=R+(C<<12&4294967295|C>>>20),C=b+(A^j&(R^A))+D[14]+2792965006&4294967295,b=j+(C<<17&4294967295|C>>>15),C=A+(R^b&(j^R))+D[15]+1236535329&4294967295,A=b+(C<<22&4294967295|C>>>10),C=R+(b^j&(A^b))+D[1]+4129170786&4294967295,R=A+(C<<5&4294967295|C>>>27),C=j+(A^b&(R^A))+D[6]+3225465664&4294967295,j=R+(C<<9&4294967295|C>>>23),C=b+(R^A&(j^R))+D[11]+643717713&4294967295,b=j+(C<<14&4294967295|C>>>18),C=A+(j^R&(b^j))+D[0]+3921069994&4294967295,A=b+(C<<20&4294967295|C>>>12),C=R+(b^j&(A^b))+D[5]+3593408605&4294967295,R=A+(C<<5&4294967295|C>>>27),C=j+(A^b&(R^A))+D[10]+38016083&4294967295,j=R+(C<<9&4294967295|C>>>23),C=b+(R^A&(j^R))+D[15]+3634488961&4294967295,b=j+(C<<14&4294967295|C>>>18),C=A+(j^R&(b^j))+D[4]+3889429448&4294967295,A=b+(C<<20&4294967295|C>>>12),C=R+(b^j&(A^b))+D[9]+568446438&4294967295,R=A+(C<<5&4294967295|C>>>27),C=j+(A^b&(R^A))+D[14]+3275163606&4294967295,j=R+(C<<9&4294967295|C>>>23),C=b+(R^A&(j^R))+D[3]+4107603335&4294967295,b=j+(C<<14&4294967295|C>>>18),C=A+(j^R&(b^j))+D[8]+1163531501&4294967295,A=b+(C<<20&4294967295|C>>>12),C=R+(b^j&(A^b))+D[13]+2850285829&4294967295,R=A+(C<<5&4294967295|C>>>27),C=j+(A^b&(R^A))+D[2]+4243563512&4294967295,j=R+(C<<9&4294967295|C>>>23),C=b+(R^A&(j^R))+D[7]+1735328473&4294967295,b=j+(C<<14&4294967295|C>>>18),C=A+(j^R&(b^j))+D[12]+2368359562&4294967295,A=b+(C<<20&4294967295|C>>>12),C=R+(A^b^j)+D[5]+4294588738&4294967295,R=A+(C<<4&4294967295|C>>>28),C=j+(R^A^b)+D[8]+2272392833&4294967295,j=R+(C<<11&4294967295|C>>>21),C=b+(j^R^A)+D[11]+1839030562&4294967295,b=j+(C<<16&4294967295|C>>>16),C=A+(b^j^R)+D[14]+4259657740&4294967295,A=b+(C<<23&4294967295|C>>>9),C=R+(A^b^j)+D[1]+2763975236&4294967295,R=A+(C<<4&4294967295|C>>>28),C=j+(R^A^b)+D[4]+1272893353&4294967295,j=R+(C<<11&4294967295|C>>>21),C=b+(j^R^A)+D[7]+4139469664&4294967295,b=j+(C<<16&4294967295|C>>>16),C=A+(b^j^R)+D[10]+3200236656&4294967295,A=b+(C<<23&4294967295|C>>>9),C=R+(A^b^j)+D[13]+681279174&4294967295,R=A+(C<<4&4294967295|C>>>28),C=j+(R^A^b)+D[0]+3936430074&4294967295,j=R+(C<<11&4294967295|C>>>21),C=b+(j^R^A)+D[3]+3572445317&4294967295,b=j+(C<<16&4294967295|C>>>16),C=A+(b^j^R)+D[6]+76029189&4294967295,A=b+(C<<23&4294967295|C>>>9),C=R+(A^b^j)+D[9]+3654602809&4294967295,R=A+(C<<4&4294967295|C>>>28),C=j+(R^A^b)+D[12]+3873151461&4294967295,j=R+(C<<11&4294967295|C>>>21),C=b+(j^R^A)+D[15]+530742520&4294967295,b=j+(C<<16&4294967295|C>>>16),C=A+(b^j^R)+D[2]+3299628645&4294967295,A=b+(C<<23&4294967295|C>>>9),C=R+(b^(A|~j))+D[0]+4096336452&4294967295,R=A+(C<<6&4294967295|C>>>26),C=j+(A^(R|~b))+D[7]+1126891415&4294967295,j=R+(C<<10&4294967295|C>>>22),C=b+(R^(j|~A))+D[14]+2878612391&4294967295,b=j+(C<<15&4294967295|C>>>17),C=A+(j^(b|~R))+D[5]+4237533241&4294967295,A=b+(C<<21&4294967295|C>>>11),C=R+(b^(A|~j))+D[12]+1700485571&4294967295,R=A+(C<<6&4294967295|C>>>26),C=j+(A^(R|~b))+D[3]+2399980690&4294967295,j=R+(C<<10&4294967295|C>>>22),C=b+(R^(j|~A))+D[10]+4293915773&4294967295,b=j+(C<<15&4294967295|C>>>17),C=A+(j^(b|~R))+D[1]+2240044497&4294967295,A=b+(C<<21&4294967295|C>>>11),C=R+(b^(A|~j))+D[8]+1873313359&4294967295,R=A+(C<<6&4294967295|C>>>26),C=j+(A^(R|~b))+D[15]+4264355552&4294967295,j=R+(C<<10&4294967295|C>>>22),C=b+(R^(j|~A))+D[6]+2734768916&4294967295,b=j+(C<<15&4294967295|C>>>17),C=A+(j^(b|~R))+D[13]+1309151649&4294967295,A=b+(C<<21&4294967295|C>>>11),C=R+(b^(A|~j))+D[4]+4149444226&4294967295,R=A+(C<<6&4294967295|C>>>26),C=j+(A^(R|~b))+D[11]+3174756917&4294967295,j=R+(C<<10&4294967295|C>>>22),C=b+(R^(j|~A))+D[2]+718787259&4294967295,b=j+(C<<15&4294967295|C>>>17),C=A+(j^(b|~R))+D[9]+3951481745&4294967295,k.g[0]=k.g[0]+R&4294967295,k.g[1]=k.g[1]+(b+(C<<21&4294967295|C>>>11))&4294967295,k.g[2]=k.g[2]+b&4294967295,k.g[3]=k.g[3]+j&4294967295}i.prototype.v=function(k,R){R===void 0&&(R=k.length);const A=R-this.blockSize,D=this.C;let b=this.h,j=0;for(;j<R;){if(b==0)for(;j<=A;)o(this,k,j),j+=this.blockSize;if(typeof k=="string"){for(;j<R;)if(D[b++]=k.charCodeAt(j++),b==this.blockSize){o(this,D),b=0;break}}else for(;j<R;)if(D[b++]=k[j++],b==this.blockSize){o(this,D),b=0;break}}this.h=b,this.o+=R},i.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var R=1;R<k.length-8;++R)k[R]=0;R=this.o*8;for(var A=k.length-8;A<k.length;++A)k[A]=R&255,R/=256;for(this.v(k),k=Array(16),R=0,A=0;A<4;++A)for(let D=0;D<32;D+=8)k[R++]=this.g[A]>>>D&255;return k};function l(k,R){var A=d;return Object.prototype.hasOwnProperty.call(A,k)?A[k]:A[k]=R(k)}function u(k,R){this.h=R;const A=[];let D=!0;for(let b=k.length-1;b>=0;b--){const j=k[b]|0;D&&j==R||(A[b]=j,D=!1)}this.g=A}var d={};function p(k){return-128<=k&&k<128?l(k,function(R){return new u([R|0],R<0?-1:0)}):new u([k|0],k<0?-1:0)}function y(k){if(isNaN(k)||!isFinite(k))return x;if(k<0)return N(y(-k));const R=[];let A=1;for(let D=0;k>=A;D++)R[D]=k/A|0,A*=4294967296;return new u(R,0)}function _(k,R){if(k.length==0)throw Error("number format error: empty string");if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(k.charAt(0)=="-")return N(_(k.substring(1),R));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const A=y(Math.pow(R,8));let D=x;for(let j=0;j<k.length;j+=8){var b=Math.min(8,k.length-j);const C=parseInt(k.substring(j,j+b),R);b<8?(b=y(Math.pow(R,b)),D=D.j(b).add(y(C))):(D=D.j(A),D=D.add(y(C)))}return D}var x=p(0),I=p(1),V=p(16777216);n=u.prototype,n.m=function(){if(F(this))return-N(this).m();let k=0,R=1;for(let A=0;A<this.g.length;A++){const D=this.i(A);k+=(D>=0?D:4294967296+D)*R,R*=4294967296}return k},n.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(L(this))return"0";if(F(this))return"-"+N(this).toString(k);const R=y(Math.pow(k,6));var A=this;let D="";for(;;){const b=me(A,R).g;A=Q(A,b.j(R));let j=((A.g.length>0?A.g[0]:A.h)>>>0).toString(k);if(A=b,L(A))return j+D;for(;j.length<6;)j="0"+j;D=j+D}},n.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function L(k){if(k.h!=0)return!1;for(let R=0;R<k.g.length;R++)if(k.g[R]!=0)return!1;return!0}function F(k){return k.h==-1}n.l=function(k){return k=Q(this,k),F(k)?-1:L(k)?0:1};function N(k){const R=k.g.length,A=[];for(let D=0;D<R;D++)A[D]=~k.g[D];return new u(A,~k.h).add(I)}n.abs=function(){return F(this)?N(this):this},n.add=function(k){const R=Math.max(this.g.length,k.g.length),A=[];let D=0;for(let b=0;b<=R;b++){let j=D+(this.i(b)&65535)+(k.i(b)&65535),C=(j>>>16)+(this.i(b)>>>16)+(k.i(b)>>>16);D=C>>>16,j&=65535,C&=65535,A[b]=C<<16|j}return new u(A,A[A.length-1]&-2147483648?-1:0)};function Q(k,R){return k.add(N(R))}n.j=function(k){if(L(this)||L(k))return x;if(F(this))return F(k)?N(this).j(N(k)):N(N(this).j(k));if(F(k))return N(this.j(N(k)));if(this.l(V)<0&&k.l(V)<0)return y(this.m()*k.m());const R=this.g.length+k.g.length,A=[];for(var D=0;D<2*R;D++)A[D]=0;for(D=0;D<this.g.length;D++)for(let b=0;b<k.g.length;b++){const j=this.i(D)>>>16,C=this.i(D)&65535,Ke=k.i(b)>>>16,Tt=k.i(b)&65535;A[2*D+2*b]+=C*Tt,J(A,2*D+2*b),A[2*D+2*b+1]+=j*Tt,J(A,2*D+2*b+1),A[2*D+2*b+1]+=C*Ke,J(A,2*D+2*b+1),A[2*D+2*b+2]+=j*Ke,J(A,2*D+2*b+2)}for(k=0;k<R;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=R;k<2*R;k++)A[k]=0;return new u(A,0)};function J(k,R){for(;(k[R]&65535)!=k[R];)k[R+1]+=k[R]>>>16,k[R]&=65535,R++}function re(k,R){this.g=k,this.h=R}function me(k,R){if(L(R))throw Error("division by zero");if(L(k))return new re(x,x);if(F(k))return R=me(N(k),R),new re(N(R.g),N(R.h));if(F(R))return R=me(k,N(R)),new re(N(R.g),R.h);if(k.g.length>30){if(F(k)||F(R))throw Error("slowDivide_ only works with positive integers.");for(var A=I,D=R;D.l(k)<=0;)A=_e(A),D=_e(D);var b=we(A,1),j=we(D,1);for(D=we(D,2),A=we(A,2);!L(D);){var C=j.add(D);C.l(k)<=0&&(b=b.add(A),j=C),D=we(D,1),A=we(A,1)}return R=Q(k,b.j(R)),new re(b,R)}for(b=x;k.l(R)>=0;){for(A=Math.max(1,Math.floor(k.m()/R.m())),D=Math.ceil(Math.log(A)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),j=y(A),C=j.j(R);F(C)||C.l(k)>0;)A-=D,j=y(A),C=j.j(R);L(j)&&(j=I),b=b.add(j),k=Q(k,C)}return new re(b,k)}n.B=function(k){return me(this,k).h},n.and=function(k){const R=Math.max(this.g.length,k.g.length),A=[];for(let D=0;D<R;D++)A[D]=this.i(D)&k.i(D);return new u(A,this.h&k.h)},n.or=function(k){const R=Math.max(this.g.length,k.g.length),A=[];for(let D=0;D<R;D++)A[D]=this.i(D)|k.i(D);return new u(A,this.h|k.h)},n.xor=function(k){const R=Math.max(this.g.length,k.g.length),A=[];for(let D=0;D<R;D++)A[D]=this.i(D)^k.i(D);return new u(A,this.h^k.h)};function _e(k){const R=k.g.length+1,A=[];for(let D=0;D<R;D++)A[D]=k.i(D)<<1|k.i(D-1)>>>31;return new u(A,k.h)}function we(k,R){const A=R>>5;R%=32;const D=k.g.length-A,b=[];for(let j=0;j<D;j++)b[j]=R>0?k.i(j+A)>>>R|k.i(j+A+1)<<32-R:k.i(j+A);return new u(b,k.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,P0=i,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=y,u.fromString=_,Fi=u}).apply(typeof r_<"u"?r_:typeof self<"u"?self:typeof window<"u"?window:{});var uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var b0,il,N0,xc,Nf,D0,O0,L0;(function(){var n,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof uc=="object"&&uc];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function o(c,g){if(g)e:{var v=i;c=c.split(".");for(var T=0;T<c.length-1;T++){var B=c[T];if(!(B in v))break e;v=v[B]}c=c[c.length-1],T=v[c],g=g(T),g!=T&&g!=null&&e(v,c,{configurable:!0,writable:!0,value:g})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(g){var v=[],T;for(T in g)Object.prototype.hasOwnProperty.call(g,T)&&v.push([T,g[T]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function d(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function p(c,g,v){return c.call.apply(c.bind,arguments)}function y(c,g,v){return y=p,y.apply(null,arguments)}function _(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var T=v.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function x(c,g){function v(){}v.prototype=g.prototype,c.Z=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Ob=function(T,B,H){for(var ne=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)ne[Se-2]=arguments[Se];return g.prototype[B].apply(T,ne)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function V(c){const g=c.length;if(g>0){const v=Array(g);for(let T=0;T<g;T++)v[T]=c[T];return v}return[]}function L(c,g){for(let T=1;T<arguments.length;T++){const B=arguments[T];var v=typeof B;if(v=v!="object"?v:B?Array.isArray(B)?"array":v:"null",v=="array"||v=="object"&&typeof B.length=="number"){v=c.length||0;const H=B.length||0;c.length=v+H;for(let ne=0;ne<H;ne++)c[v+ne]=B[ne]}else c.push(B)}}class F{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return this.h>0?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function N(c){u.setTimeout(()=>{throw c},0)}function Q(){var c=k;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class J{constructor(){this.h=this.g=null}add(g,v){const T=re.get();T.set(g,v),this.h?this.h.next=T:this.g=T,this.h=T}}var re=new F(()=>new me,c=>c.reset());class me{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let _e,we=!1,k=new J,R=()=>{const c=Promise.resolve(void 0);_e=()=>{c.then(A)}};function A(){for(var c;c=Q();){try{c.h.call(c.g)}catch(v){N(v)}var g=re;g.j(c),g.h<100&&(g.h++,c.next=g.g,g.g=c)}we=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var j=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};u.addEventListener("test",v,g),u.removeEventListener("test",v,g)}catch{}return c})();function C(c){return/^[\s\xa0]*$/.test(c)}function Ke(c,g){b.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,g)}x(Ke,b),Ke.prototype.init=function(c,g){const v=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget,g||(v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement)),this.relatedTarget=g,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Ke.Z.h.call(this)},Ke.prototype.h=function(){Ke.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Tt="closure_listenable_"+(Math.random()*1e6|0),jt=0;function et(c,g,v,T,B){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!T,this.ha=B,this.key=++jt,this.da=this.fa=!1}function ie(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function pe(c,g,v){for(const T in c)g.call(v,c[T],T,c)}function le(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function M(c){const g={};for(const v in c)g[v]=c[v];return g}const Y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Re(c,g){let v,T;for(let B=1;B<arguments.length;B++){T=arguments[B];for(v in T)c[v]=T[v];for(let H=0;H<Y.length;H++)v=Y[H],Object.prototype.hasOwnProperty.call(T,v)&&(c[v]=T[v])}}function Ae(c){this.src=c,this.g={},this.h=0}Ae.prototype.add=function(c,g,v,T,B){const H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);const ne=De(c,g,T,B);return ne>-1?(g=c[ne],v||(g.fa=!1)):(g=new et(g,this.src,H,!!T,B),g.fa=v,c.push(g)),g};function Ne(c,g){const v=g.type;if(v in c.g){var T=c.g[v],B=Array.prototype.indexOf.call(T,g,void 0),H;(H=B>=0)&&Array.prototype.splice.call(T,B,1),H&&(ie(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function De(c,g,v,T){for(let B=0;B<c.length;++B){const H=c[B];if(!H.da&&H.listener==g&&H.capture==!!v&&H.ha==T)return B}return-1}var Be="closure_lm_"+(Math.random()*1e6|0),Me={};function qe(c,g,v,T,B){if(Array.isArray(g)){for(let H=0;H<g.length;H++)qe(c,g[H],v,T,B);return null}return v=aa(v),c&&c[Tt]?c.J(g,v,d(T)?!!T.capture:!1,B):Qt(c,g,v,!1,T,B)}function Qt(c,g,v,T,B,H){if(!g)throw Error("Invalid event type");const ne=d(B)?!!B.capture:!!B;let Se=Hs(c);if(Se||(c[Be]=Se=new Ae(c)),v=Se.add(g,v,T,ne,H),v.proxy)return v;if(T=zs(),v.proxy=T,T.src=c,T.listener=v,c.addEventListener)j||(B=ne),B===void 0&&(B=!1),c.addEventListener(g.toString(),T,B);else if(c.attachEvent)c.attachEvent($s(g.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return v}function zs(){function c(v){return g.call(c.src,c.listener,v)}const g=ql;return c}function oa(c,g,v,T,B){if(Array.isArray(g))for(var H=0;H<g.length;H++)oa(c,g[H],v,T,B);else T=d(T)?!!T.capture:!!T,v=aa(v),c&&c[Tt]?(c=c.i,H=String(g).toString(),H in c.g&&(g=c.g[H],v=De(g,v,T,B),v>-1&&(ie(g[v]),Array.prototype.splice.call(g,v,1),g.length==0&&(delete c.g[H],c.h--)))):c&&(c=Hs(c))&&(g=c.g[g.toString()],c=-1,g&&(c=De(g,v,T,B)),(v=c>-1?g[c]:null)&&ei(v))}function ei(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[Tt])Ne(g.i,c);else{var v=c.type,T=c.proxy;g.removeEventListener?g.removeEventListener(v,T,c.capture):g.detachEvent?g.detachEvent($s(v),T):g.addListener&&g.removeListener&&g.removeListener(T),(v=Hs(g))?(Ne(v,c),v.h==0&&(v.src=null,g[Be]=null)):ie(c)}}}function $s(c){return c in Me?Me[c]:Me[c]="on"+c}function ql(c,g){if(c.da)c=!0;else{g=new Ke(g,this);const v=c.listener,T=c.ha||c.src;c.fa&&ei(c),c=v.call(T,g)}return c}function Hs(c){return c=c[Be],c instanceof Ae?c:null}var Zi="__closure_events_fn_"+(Math.random()*1e9>>>0);function aa(c){return typeof c=="function"?c:(c[Zi]||(c[Zi]=function(g){return c.handleEvent(g)}),c[Zi])}function pt(){D.call(this),this.i=new Ae(this),this.M=this,this.G=null}x(pt,D),pt.prototype[Tt]=!0,pt.prototype.removeEventListener=function(c,g,v,T){oa(this,c,g,v,T)};function ut(c,g){var v,T=c.G;if(T)for(v=[];T;T=T.G)v.push(T);if(c=c.M,T=g.type||g,typeof g=="string")g=new b(g,c);else if(g instanceof b)g.target=g.target||c;else{var B=g;g=new b(T,c),Re(g,B)}B=!0;let H,ne;if(v)for(ne=v.length-1;ne>=0;ne--)H=g.g=v[ne],B=kn(H,T,!0,g)&&B;if(H=g.g=c,B=kn(H,T,!0,g)&&B,B=kn(H,T,!1,g)&&B,v)for(ne=0;ne<v.length;ne++)H=g.g=v[ne],B=kn(H,T,!1,g)&&B}pt.prototype.N=function(){if(pt.Z.N.call(this),this.i){var c=this.i;for(const g in c.g){const v=c.g[g];for(let T=0;T<v.length;T++)ie(v[T]);delete c.g[g],c.h--}}this.G=null},pt.prototype.J=function(c,g,v,T){return this.i.add(String(c),g,!1,v,T)},pt.prototype.K=function(c,g,v,T){return this.i.add(String(c),g,!0,v,T)};function kn(c,g,v,T){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();let B=!0;for(let H=0;H<g.length;++H){const ne=g[H];if(ne&&!ne.da&&ne.capture==v){const Se=ne.listener,ct=ne.ha||ne.src;ne.fa&&Ne(c.i,ne),B=Se.call(ct,T)!==!1&&B}}return B&&!T.defaultPrevented}function la(c,g){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=y(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(g)>2147483647?-1:u.setTimeout(c,g||0)}function ua(c){c.g=la(()=>{c.g=null,c.i&&(c.i=!1,ua(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Wl extends D{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:ua(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ti(c){D.call(this),this.h=c,this.g={}}x(ti,D);var ca=[];function qs(c){pe(c.g,function(g,v){this.g.hasOwnProperty(v)&&ei(g)},c),c.g={}}ti.prototype.N=function(){ti.Z.N.call(this),qs(this)},ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ni=u.JSON.stringify,Kl=u.JSON.parse,es=class{stringify(c){return u.JSON.stringify(c,void 0)}parse(c){return u.JSON.parse(c,void 0)}};function ri(){}function Gl(){}var ii={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ws(){b.call(this,"d")}x(Ws,b);function ha(){b.call(this,"c")}x(ha,b);var Pn={},Ks=null;function si(){return Ks=Ks||new pt}Pn.Ia="serverreachability";function Gs(c){b.call(this,Pn.Ia,c)}x(Gs,b);function xr(c){const g=si();ut(g,new Gs(g))}Pn.STAT_EVENT="statevent";function Tr(c,g){b.call(this,Pn.STAT_EVENT,c),this.stat=g}x(Tr,b);function ot(c){const g=si();ut(g,new Tr(g,c))}Pn.Ja="timingevent";function da(c,g){b.call(this,Pn.Ja,c),this.size=g}x(da,b);function oi(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){c()},g)}function ai(){this.g=!0}ai.prototype.ua=function(){this.g=!1};function Ql(c,g,v,T,B,H){c.info(function(){if(c.g)if(H){var ne="",Se=H.split("&");for(let $e=0;$e<Se.length;$e++){var ct=Se[$e].split("=");if(ct.length>1){const mt=ct[0];ct=ct[1];const pn=mt.split("_");ne=pn.length>=2&&pn[1]=="type"?ne+(mt+"="+ct+"&"):ne+(mt+"=redacted&")}}}else ne=null;else ne=H;return"XMLHTTP REQ ("+T+") [attempt "+B+"]: "+g+`
`+v+`
`+ne})}function Jl(c,g,v,T,B,H,ne){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+B+"]: "+g+`
`+v+`
`+H+" "+ne})}function Kn(c,g,v,T){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+ts(c,v)+(T?" "+T:"")})}function Yl(c,g){c.info(function(){return"TIMEOUT: "+g})}ai.prototype.info=function(){};function ts(c,g){if(!c.g)return g;if(!g)return null;try{const H=JSON.parse(g);if(H){for(c=0;c<H.length;c++)if(Array.isArray(H[c])){var v=H[c];if(!(v.length<2)){var T=v[1];if(Array.isArray(T)&&!(T.length<1)){var B=T[0];if(B!="noop"&&B!="stop"&&B!="close")for(let ne=1;ne<T.length;ne++)T[ne]=""}}}}return ni(H)}catch{return g}}var li={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ui={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Xl;function Sr(){}x(Sr,ri),Sr.prototype.g=function(){return new XMLHttpRequest},Xl=new Sr;function Gn(c){return encodeURIComponent(String(c))}function Qs(c){var g=1;c=c.split(":");const v=[];for(;g>0&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function wn(c,g,v,T){this.j=c,this.i=g,this.l=v,this.S=T||1,this.V=new ti(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Zl}function Zl(){this.i=null,this.g="",this.h=!1}var eu={},fa={};function bn(c,g,v){c.M=1,c.A=Rr(En(g)),c.u=v,c.R=!0,pa(c,null)}function pa(c,g){c.F=Date.now(),ns(c),c.B=En(c.A);var v=c.B,T=c.S;Array.isArray(T)||(T=[String(T)]),Sa(v.i,"t",T),c.C=0,v=c.j.L,c.h=new Zl,c.g=cu(c.j,v?g:null,!c.u),c.P>0&&(c.O=new Wl(y(c.Y,c,c.g),c.P)),g=c.V,v=c.g,T=c.ba;var B="readystatechange";Array.isArray(B)||(B&&(ca[0]=B.toString()),B=ca);for(let H=0;H<B.length;H++){const ne=qe(v,B[H],T||g.handleEvent,!1,g.h||g);if(!ne)break;g.g[ne.key]=ne}g=c.J?M(c.J):{},c.u?(c.v||(c.v="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,g)):(c.v="GET",c.g.ea(c.B,c.v,null,g)),xr(),Ql(c.i,c.v,c.B,c.l,c.S,c.u)}wn.prototype.ba=function(c){c=c.target;const g=this.O;g&&tr(c)==3?g.j():this.Y(c)},wn.prototype.Y=function(c){try{if(c==this.g)e:{const Se=tr(this.g),ct=this.g.ya(),$e=this.g.ca();if(!(Se<3)&&(Se!=3||this.g&&(this.h.h||this.g.la()||lu(this.g)))){this.K||Se!=4||ct==7||(ct==8||$e<=0?xr(3):xr(2)),Js(this);var g=this.g.ca();this.X=g;var v=tu(this);if(this.o=g==200,Jl(this.i,this.v,this.B,this.l,this.S,Se,g),this.o){if(this.U&&!this.L){t:{if(this.g){var T,B=this.g;if((T=B.g?B.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(T)){var H=T;break t}}H=null}if(c=H)Kn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Je(this,c);else{this.o=!1,this.m=3,ot(12),Ir(this),rs(this);break e}}if(this.R){c=!0;let mt;for(;!this.K&&this.C<v.length;)if(mt=ru(this,v),mt==fa){Se==4&&(this.m=4,ot(14),c=!1),Kn(this.i,this.l,null,"[Incomplete Response]");break}else if(mt==eu){this.m=4,ot(15),Kn(this.i,this.l,v,"[Invalid Chunk]"),c=!1;break}else Kn(this.i,this.l,mt,null),Je(this,mt);if(nu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||v.length!=0||this.h.h||(this.m=1,ot(16),c=!1),this.o=this.o&&c,!c)Kn(this.i,this.l,v,"[Invalid Chunked Response]"),Ir(this),rs(this);else if(v.length>0&&!this.W){this.W=!0;var ne=this.j;ne.g==this&&ne.aa&&!ne.P&&(ne.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),ds(ne),ne.P=!0,ot(11))}}else Kn(this.i,this.l,v,null),Je(this,v);Se==4&&Ir(this),this.o&&!this.K&&(Se==4?oo(this.j,this):(this.o=!1,ns(this)))}else Ra(this.g),g==400&&v.indexOf("Unknown SID")>0?(this.m=3,ot(12)):(this.m=0,ot(13)),Ir(this),rs(this)}}}catch{}finally{}};function tu(c){if(!nu(c))return c.g.la();const g=lu(c.g);if(g==="")return"";let v="";const T=g.length,B=tr(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Ir(c),rs(c),"";c.h.i=new u.TextDecoder}for(let H=0;H<T;H++)c.h.h=!0,v+=c.h.i.decode(g[H],{stream:!(B&&H==T-1)});return g.length=0,c.h.g+=v,c.C=0,c.h.g}function nu(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function ru(c,g){var v=c.C,T=g.indexOf(`
`,v);return T==-1?fa:(v=Number(g.substring(v,T)),isNaN(v)?eu:(T+=1,T+v>g.length?fa:(g=g.slice(T,T+v),c.C=T+v,g)))}wn.prototype.cancel=function(){this.K=!0,Ir(this)};function ns(c){c.T=Date.now()+c.H,ma(c,c.H)}function ma(c,g){if(c.D!=null)throw Error("WatchDog timer not null");c.D=oi(y(c.aa,c),g)}function Js(c){c.D&&(u.clearTimeout(c.D),c.D=null)}wn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(Yl(this.i,this.B),this.M!=2&&(xr(),ot(17)),Ir(this),this.m=2,rs(this)):ma(this,this.T-c)};function rs(c){c.j.I==0||c.K||oo(c.j,c)}function Ir(c){Js(c);var g=c.O;g&&typeof g.dispose=="function"&&g.dispose(),c.O=null,qs(c.V),c.g&&(g=c.g,c.g=null,g.abort(),g.dispose())}function Je(c,g){try{var v=c.j;if(v.I!=0&&(v.g==c||ya(v.h,c))){if(!c.L&&ya(v.h,c)&&v.I==3){try{var T=v.Ba.g.parse(g)}catch{T=null}if(Array.isArray(T)&&T.length==3){var B=T;if(B[0]==0){e:if(!v.v){if(v.g)if(v.g.F+3e3<c.F)so(v),dn(v);else break e;ir(v),ot(18)}}else v.xa=B[1],0<v.xa-v.K&&B[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=oi(y(v.Va,v),6e3));is(v.h)<=1&&v.ta&&(v.ta=void 0)}else fn(v,11)}else if((c.L||v.g==c)&&so(v),!C(g))for(B=v.Ba.g.parse(g),g=0;g<B.length;g++){let $e=B[g];const mt=$e[0];if(!(mt<=v.K))if(v.K=mt,$e=$e[1],v.I==2)if($e[0]=="c"){v.M=$e[1],v.ba=$e[2];const pn=$e[3];pn!=null&&(v.ka=pn,v.j.info("VER="+v.ka));const br=$e[4];br!=null&&(v.za=br,v.j.info("SVER="+v.za));const sr=$e[5];sr!=null&&typeof sr=="number"&&sr>0&&(T=1.5*sr,v.O=T,v.j.info("backChannelRequestTimeoutMs_="+T)),T=v;const or=c.g;if(or){const uo=or.g?or.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(uo){var H=T.h;H.g||uo.indexOf("spdy")==-1&&uo.indexOf("quic")==-1&&uo.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Xs(H,H.h),H.h=null))}if(T.G){const ka=or.g?or.g.getResponseHeader("X-HTTP-Session-Id"):null;ka&&(T.wa=ka,Ue(T.J,T.G,ka))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-c.F,v.j.info("Handshake RTT: "+v.T+"ms")),T=v;var ne=c;if(T.na=Ca(T,T.L?T.ba:null,T.W),ne.L){ss(T.h,ne);var Se=ne,ct=T.O;ct&&(Se.H=ct),Se.D&&(Js(Se),ns(Se)),T.g=ne}else Ft(T);v.i.length>0&&Pr(v)}else $e[0]!="stop"&&$e[0]!="close"||fn(v,7);else v.I==3&&($e[0]=="stop"||$e[0]=="close"?$e[0]=="stop"?fn(v,7):ro(v):$e[0]!="noop"&&v.l&&v.l.qa($e),v.A=0)}}xr(4)}catch{}}var Ph=class{constructor(c,g){this.g=c,this.map=g}};function Ys(c){this.l=c||10,u.PerformanceNavigationTiming?(c=u.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ga(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function is(c){return c.h?1:c.g?c.g.size:0}function ya(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Xs(c,g){c.g?c.g.add(g):c.h=g}function ss(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Ys.prototype.cancel=function(){if(this.i=un(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function un(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.G);return g}return V(c.i)}var iu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cn(c,g){if(c){c=c.split("&");for(let v=0;v<c.length;v++){const T=c[v].indexOf("=");let B,H=null;T>=0?(B=c[v].substring(0,T),H=c[v].substring(T+1)):B=c[v],g(B,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function Qn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let g;c instanceof Qn?(this.l=c.l,os(this,c.j),this.o=c.o,this.g=c.g,Jn(this,c.u),this.h=c.h,ci(this,Ia(c.i)),this.m=c.m):c&&(g=String(c).match(iu))?(this.l=!1,os(this,g[1]||"",!0),this.o=as(g[2]||""),this.g=as(g[3]||"",!0),Jn(this,g[4]),this.h=as(g[5]||"",!0),ci(this,g[6]||"",!0),this.m=as(g[7]||"")):(this.l=!1,this.i=new Le(null,this.l))}Qn.prototype.toString=function(){const c=[];var g=this.j;g&&c.push(ls(g,va,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(ls(g,va,!0),"@"),c.push(Gn(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&c.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(ls(v,v.charAt(0)=="/"?us:wa,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",ls(v,Ea)),c.join("")},Qn.prototype.resolve=function(c){const g=En(this);let v=!!c.j;v?os(g,c.j):v=!!c.o,v?g.o=c.o:v=!!c.g,v?g.g=c.g:v=c.u!=null;var T=c.h;if(v)Jn(g,c.u);else if(v=!!c.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var B=g.h.lastIndexOf("/");B!=-1&&(T=g.h.slice(0,B+1)+T)}if(B=T,B==".."||B==".")T="";else if(B.indexOf("./")!=-1||B.indexOf("/.")!=-1){T=B.lastIndexOf("/",0)==0,B=B.split("/");const H=[];for(let ne=0;ne<B.length;){const Se=B[ne++];Se=="."?T&&ne==B.length&&H.push(""):Se==".."?((H.length>1||H.length==1&&H[0]!="")&&H.pop(),T&&ne==B.length&&H.push("")):(H.push(Se),T=!0)}T=H.join("/")}else T=B}return v?g.h=T:v=c.i.toString()!=="",v?ci(g,Ia(c.i)):v=!!c.m,v&&(g.m=c.m),g};function En(c){return new Qn(c)}function os(c,g,v){c.j=v?as(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Jn(c,g){if(g){if(g=Number(g),isNaN(g)||g<0)throw Error("Bad port number "+g);c.u=g}else c.u=null}function ci(c,g,v){g instanceof Le?(c.i=g,eo(c.i,c.l)):(v||(g=ls(g,bh)),c.i=new Le(g,c.l))}function Ue(c,g,v){c.i.set(g,v)}function Rr(c){return Ue(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function as(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ls(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,_a),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function _a(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var va=/[#\/\?@]/g,wa=/[#\?:]/g,us=/[#\?]/g,bh=/[#\?@]/g,Ea=/#/g;function Le(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Yn(c){c.g||(c.g=new Map,c.h=0,c.i&&cn(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}n=Le.prototype,n.add=function(c,g){Yn(this),this.i=null,c=Xn(this,c);let v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function xa(c,g){Yn(c),g=Xn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Zs(c,g){return Yn(c),g=Xn(c,g),c.g.has(g)}n.forEach=function(c,g){Yn(this),this.g.forEach(function(v,T){v.forEach(function(B){c.call(g,B,T,this)},this)},this)};function Ta(c,g){Yn(c);let v=[];if(typeof g=="string")Zs(c,g)&&(v=v.concat(c.g.get(Xn(c,g))));else for(c=Array.from(c.g.values()),g=0;g<c.length;g++)v=v.concat(c[g]);return v}n.set=function(c,g){return Yn(this),this.i=null,c=Xn(this,c),Zs(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=Ta(this,c),c.length>0?String(c[0]):g):g};function Sa(c,g,v){xa(c,g),v.length>0&&(c.i=null,c.g.set(Xn(c,g),V(v)),c.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(let T=0;T<g.length;T++){var v=g[T];const B=Gn(v);v=Ta(this,v);for(let H=0;H<v.length;H++){let ne=B;v[H]!==""&&(ne+="="+Gn(v[H])),c.push(ne)}}return this.i=c.join("&")};function Ia(c){const g=new Le;return g.i=c.i,c.g&&(g.g=new Map(c.g),g.h=c.h),g}function Xn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function eo(c,g){g&&!c.j&&(Yn(c),c.i=null,c.g.forEach(function(v,T){const B=T.toLowerCase();T!=B&&(xa(this,T),Sa(this,B,v))},c)),c.j=g}function Zn(c,g){const v=new ai;if(u.Image){const T=new Image;T.onload=_(Pt,v,"TestLoadImage: loaded",!0,g,T),T.onerror=_(Pt,v,"TestLoadImage: error",!1,g,T),T.onabort=_(Pt,v,"TestLoadImage: abort",!1,g,T),T.ontimeout=_(Pt,v,"TestLoadImage: timeout",!1,g,T),u.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else g(!1)}function er(c,g){const v=new ai,T=new AbortController,B=setTimeout(()=>{T.abort(),Pt(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:T.signal}).then(H=>{clearTimeout(B),H.ok?Pt(v,"TestPingServer: ok",!0,g):Pt(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(B),Pt(v,"TestPingServer: error",!1,g)})}function Pt(c,g,v,T,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),T(v)}catch{}}function cs(){this.g=new es}function Ar(c){this.i=c.Sb||null,this.h=c.ab||!1}x(Ar,ri),Ar.prototype.g=function(){return new hn(this.i,this.h)};function hn(c,g){pt.call(this),this.H=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}x(hn,pt),n=hn.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=g,this.readyState=1,Nn(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const g={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(g.body=c),(this.H||u).fetch(new Request(this.D,g)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,hi(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;su(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function su(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.B.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?hi(this):Nn(this),this.readyState==3&&su(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,hi(this))},n.Na=function(c){this.g&&(this.response=c,hi(this))},n.ga=function(){this.g&&hi(this)};function hi(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Nn(c)}n.setRequestHeader=function(c,g){this.A.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function Nn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(hn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function ou(c){let g="";return pe(c,function(v,T){g+=T,g+=":",g+=v,g+=`\r
`}),g}function to(c,g,v){e:{for(T in v){var T=!1;break e}T=!0}T||(v=ou(v),typeof c=="string"?v!=null&&Gn(v):Ue(c,g,v))}function We(c){pt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}x(We,pt);var au=/^https?$/i,Nh=["POST","PUT"];n=We.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,g,v,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Xl.g(),this.g.onreadystatechange=I(y(this.Ca,this));try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(H){di(this,H);return}if(c=v||"",v=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var B in T)v.set(B,T[B]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const H of T.keys())v.set(H,T.get(H));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(v.keys()).find(H=>H.toLowerCase()=="content-type"),B=u.FormData&&c instanceof u.FormData,!(Array.prototype.indexOf.call(Nh,g,void 0)>=0)||T||B||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ne]of v)this.g.setRequestHeader(H,ne);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(H){di(this,H)}};function di(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.o=5,fi(c),kr(c)}function fi(c){c.A||(c.A=!0,ut(c,"complete"),ut(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,ut(this,"complete"),ut(this,"abort"),kr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kr(this,!0)),We.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Cr(this):this.Xa())},n.Xa=function(){Cr(this)};function Cr(c){if(c.h&&typeof l<"u"){if(c.v&&tr(c)==4)setTimeout(c.Ca.bind(c),0);else if(ut(c,"readystatechange"),tr(c)==4){c.h=!1;try{const H=c.ca();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var T;if(T=H===0){let ne=String(c.D).match(iu)[1]||null;!ne&&u.self&&u.self.location&&(ne=u.self.location.protocol.slice(0,-1)),T=!au.test(ne?ne.toLowerCase():"")}v=T}if(v)ut(c,"complete"),ut(c,"success");else{c.o=6;try{var B=tr(c)>2?c.g.statusText:""}catch{B=""}c.l=B+" ["+c.ca()+"]",fi(c)}}finally{kr(c)}}}}function kr(c,g){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const v=c.g;c.g=null,g||ut(c,"ready");try{v.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function tr(c){return c.g?c.g.readyState:0}n.ca=function(){try{return tr(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Kl(g)}};function lu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ra(c){const g={};c=(c.g&&tr(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(C(c[T]))continue;var v=Qs(c[T]);const B=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const H=g[B]||[];g[B]=H,H.push(v)}le(g,function(T){return T.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function nr(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function no(c){this.za=0,this.i=[],this.j=new ai,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=nr("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=nr("baseRetryDelayMs",5e3,c),this.Za=nr("retryDelaySeedMs",1e4,c),this.Ta=nr("forwardChannelMaxRetries",2,c),this.va=nr("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Ys(c&&c.concurrentRequestLimit),this.Ba=new cs,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=no.prototype,n.ka=8,n.I=1,n.connect=function(c,g,v,T){ot(0),this.W=c,this.H=g||{},v&&T!==void 0&&(this.H.OSID=v,this.H.OAID=T),this.F=this.X,this.J=Ca(this,null,this.W),Pr(this)};function ro(c){if(io(c),c.I==3){var g=c.V++,v=En(c.J);if(Ue(v,"SID",c.M),Ue(v,"RID",g),Ue(v,"TYPE","terminate"),rr(c,v),g=new wn(c,c.j,g),g.M=2,g.A=Rr(En(v)),v=!1,u.navigator&&u.navigator.sendBeacon)try{v=u.navigator.sendBeacon(g.A.toString(),"")}catch{}!v&&u.Image&&(new Image().src=g.A,v=!0),v||(g.g=cu(g.j,null),g.g.ea(g.A)),g.F=Date.now(),ns(g)}fs(c)}function dn(c){c.g&&(ds(c),c.g.cancel(),c.g=null)}function io(c){dn(c),c.v&&(u.clearTimeout(c.v),c.v=null),so(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&u.clearTimeout(c.m),c.m=null)}function Pr(c){if(!ga(c.h)&&!c.m){c.m=!0;var g=c.Ea;_e||R(),we||(_e(),we=!0),k.add(g,c),c.D=0}}function uu(c,g){return is(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=g.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=oi(y(c.Ea,c,g),ao(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const B=new wn(this,this.j,c);let H=this.o;if(this.U&&(H?(H=M(H),Re(H,this.U)):H=this.U),this.u!==null||this.R||(B.J=H,H=null),this.S)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var T=this.i[v];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(g+=T,g>4096){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=Aa(this,B,g),v=En(this.J),Ue(v,"RID",c),Ue(v,"CVER",22),this.G&&Ue(v,"X-HTTP-Session-Id",this.G),rr(this,v),H&&(this.R?g="headers="+Gn(ou(H))+"&"+g:this.u&&to(v,this.u,H)),Xs(this.h,B),this.Ra&&Ue(v,"TYPE","init"),this.S?(Ue(v,"$req",g),Ue(v,"SID","null"),B.U=!0,bn(B,v,null)):bn(B,v,g),this.I=2}}else this.I==3&&(c?hs(this,c):this.i.length==0||ga(this.h)||hs(this))};function hs(c,g){var v;g?v=g.l:v=c.V++;const T=En(c.J);Ue(T,"SID",c.M),Ue(T,"RID",v),Ue(T,"AID",c.K),rr(c,T),c.u&&c.o&&to(T,c.u,c.o),v=new wn(c,c.j,v,c.D+1),c.u===null&&(v.J=c.o),g&&(c.i=g.G.concat(c.i)),g=Aa(c,v,1e3),v.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Xs(c.h,v),bn(v,T,g)}function rr(c,g){c.H&&pe(c.H,function(v,T){Ue(g,T,v)}),c.l&&pe({},function(v,T){Ue(g,T,v)})}function Aa(c,g,v){v=Math.min(c.i.length,v);const T=c.l?y(c.l.Ka,c.l,c):null;e:{var B=c.i;let Se=-1;for(;;){const ct=["count="+v];Se==-1?v>0?(Se=B[0].g,ct.push("ofs="+Se)):Se=0:ct.push("ofs="+Se);let $e=!0;for(let mt=0;mt<v;mt++){var H=B[mt].g;const pn=B[mt].map;if(H-=Se,H<0)Se=Math.max(0,B[mt].g-100),$e=!1;else try{H="req"+H+"_"||"";try{var ne=pn instanceof Map?pn:Object.entries(pn);for(const[br,sr]of ne){let or=sr;d(sr)&&(or=ni(sr)),ct.push(H+br+"="+encodeURIComponent(or))}}catch(br){throw ct.push(H+"type="+encodeURIComponent("_badmap")),br}}catch{T&&T(pn)}}if($e){ne=ct.join("&");break e}}ne=void 0}return c=c.i.splice(0,v),g.G=c,ne}function Ft(c){if(!c.g&&!c.v){c.Y=1;var g=c.Da;_e||R(),we||(_e(),we=!0),k.add(g,c),c.A=0}}function ir(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=oi(y(c.Da,c),ao(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,pi(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=oi(y(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ot(10),dn(this),pi(this))};function ds(c){c.B!=null&&(u.clearTimeout(c.B),c.B=null)}function pi(c){c.g=new wn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var g=En(c.na);Ue(g,"RID","rpc"),Ue(g,"SID",c.M),Ue(g,"AID",c.K),Ue(g,"CI",c.F?"0":"1"),!c.F&&c.ia&&Ue(g,"TO",c.ia),Ue(g,"TYPE","xmlhttp"),rr(c,g),c.u&&c.o&&to(g,c.u,c.o),c.O&&(c.g.H=c.O);var v=c.g;c=c.ba,v.M=1,v.A=Rr(En(g)),v.u=null,v.R=!0,pa(v,c)}n.Va=function(){this.C!=null&&(this.C=null,dn(this),ir(this),ot(19))};function so(c){c.C!=null&&(u.clearTimeout(c.C),c.C=null)}function oo(c,g){var v=null;if(c.g==g){so(c),ds(c),c.g=null;var T=2}else if(ya(c.h,g))v=g.G,ss(c.h,g),T=1;else return;if(c.I!=0){if(g.o)if(T==1){v=g.u?g.u.length:0,g=Date.now()-g.F;var B=c.D;T=si(),ut(T,new da(T,v)),Pr(c)}else Ft(c);else if(B=g.m,B==3||B==0&&g.X>0||!(T==1&&uu(c,g)||T==2&&ir(c)))switch(v&&v.length>0&&(g=c.h,g.i=g.i.concat(v)),B){case 1:fn(c,5);break;case 4:fn(c,10);break;case 3:fn(c,6);break;default:fn(c,2)}}}function ao(c,g){let v=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(v*=2),v*g}function fn(c,g){if(c.j.info("Error code "+g),g==2){var v=y(c.bb,c),T=c.Ua;const B=!T;T=new Qn(T||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||os(T,"https"),Rr(T),B?Zn(T.toString(),v):er(T.toString(),v)}else ot(2);c.I=0,c.l&&c.l.pa(g),fs(c),io(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function fs(c){if(c.I=0,c.ja=[],c.l){const g=un(c.h);(g.length!=0||c.i.length!=0)&&(L(c.ja,g),L(c.ja,c.i),c.h.i.length=0,V(c.i),c.i.length=0),c.l.oa()}}function Ca(c,g,v){var T=v instanceof Qn?En(v):new Qn(v);if(T.g!="")g&&(T.g=g+"."+T.g),Jn(T,T.u);else{var B=u.location;T=B.protocol,g=g?g+"."+B.hostname:B.hostname,B=+B.port;const H=new Qn(null);T&&os(H,T),g&&(H.g=g),B&&Jn(H,B),v&&(H.h=v),T=H}return v=c.G,g=c.wa,v&&g&&Ue(T,v,g),Ue(T,"VER",c.ka),rr(c,T),T}function cu(c,g,v){if(g&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Aa&&!c.ma?new We(new Ar({ab:v})):new We(c.ma),g.Fa(c.L),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function hu(){}n=hu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function lo(){}lo.prototype.g=function(c,g){return new bt(c,g)};function bt(c,g){pt.call(this),this.g=new no(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.sa&&(c?c["X-WebChannel-Client-Profile"]=g.sa:c={"X-WebChannel-Client-Profile":g.sa}),this.g.U=c,(c=g&&g.Qb)&&!C(c)&&(this.g.u=c),this.A=g&&g.supportsCrossDomainXhr||!1,this.v=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!C(g)&&(this.g.G=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new mi(this)}x(bt,pt),bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){ro(this.g)},bt.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.v&&(v={},v.__data__=ni(c),c=v);g.i.push(new Ph(g.Ya++,c)),g.I==3&&Pr(g)},bt.prototype.N=function(){this.g.l=null,delete this.j,ro(this.g),delete this.g,bt.Z.N.call(this)};function du(c){Ws.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const v in g){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}x(du,Ws);function fu(){ha.call(this),this.status=1}x(fu,ha);function mi(c){this.g=c}x(mi,hu),mi.prototype.ra=function(){ut(this.g,"a")},mi.prototype.qa=function(c){ut(this.g,new du(c))},mi.prototype.pa=function(c){ut(this.g,new fu)},mi.prototype.oa=function(){ut(this.g,"b")},lo.prototype.createWebChannel=lo.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,L0=function(){return new lo},O0=function(){return si()},D0=Pn,Nf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},li.NO_ERROR=0,li.TIMEOUT=8,li.HTTP_ERROR=6,xc=li,ui.COMPLETE="complete",N0=ui,Gl.EventType=ii,ii.OPEN="a",ii.CLOSE="b",ii.ERROR="c",ii.MESSAGE="d",pt.prototype.listen=pt.prototype.J,il=Gl,We.prototype.listenOnce=We.prototype.K,We.prototype.getLastError=We.prototype.Ha,We.prototype.getLastErrorCode=We.prototype.ya,We.prototype.getStatus=We.prototype.ca,We.prototype.getResponseJson=We.prototype.La,We.prototype.getResponseText=We.prototype.la,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Fa,b0=We}).apply(typeof uc<"u"?uc:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qt.UNAUTHENTICATED=new qt(null),qt.GOOGLE_CREDENTIALS=new qt("google-credentials-uid"),qt.FIRST_PARTY=new qt("first-party-uid"),qt.MOCK_USER=new qt("mock-user");/**
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
 */let Zo="12.13.0";function yA(n){Zo=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Vs=new ap("@firebase/firestore");function bo(){return Vs.logLevel}function oe(n,...e){if(Vs.logLevel<=Oe.DEBUG){const t=e.map(gp);Vs.debug(`Firestore (${Zo}): ${n}`,...t)}}function Qr(n,...e){if(Vs.logLevel<=Oe.ERROR){const t=e.map(gp);Vs.error(`Firestore (${Zo}): ${n}`,...t)}}function Ms(n,...e){if(Vs.logLevel<=Oe.WARN){const t=e.map(gp);Vs.warn(`Firestore (${Zo}): ${n}`,...t)}}function gp(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function ve(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,V0(n,i,t)}function V0(n,e,t){let i=`FIRESTORE (${Zo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Qr(i),new Error(i)}function ze(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||V0(e,o,i)}function Ie(n,e){return n}/**
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
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Xr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Hr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class M0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(qt.UNAUTHENTICATED)))}shutdown(){}}class vA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class wA{constructor(e){this.t=e,this.currentUser=qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Hr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Hr,e.enqueueRetryable((()=>o(this.currentUser)))};const u=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},d=p=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Hr)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ze(typeof i.accessToken=="string",31837,{l:i}),new M0(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new qt(e)}}class EA{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=qt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class xA{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new EA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(qt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class i_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Bn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const i=l=>{l.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const u=l.token!==this.m;return this.m=l.token,oe("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new i_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new i_(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class yp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=SA(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Pe(n,e){return n<e?-1:n>e?1:0}function Df(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const o=n.charAt(i),l=e.charAt(i);if(o!==l)return pf(o)===pf(l)?Pe(o,l):pf(o)?1:-1}return Pe(n.length,e.length)}const IA=55296,RA=57343;function pf(n){const e=n.charCodeAt(0);return e>=IA&&e<=RA}function $o(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
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
 */const s_="__name__";class dr{constructor(e,t,i){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&ve(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return dr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof dr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=dr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Pe(e.length,t.length)}static compareSegments(e,t){const i=dr.isNumericId(e),o=dr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?dr.extractNumericId(e).compare(dr.extractNumericId(t)):Df(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Fi.fromString(e.substring(4,e.length-2))}}class Qe extends dr{construct(e,t,i){return new Qe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new se(K.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Qe(t)}static emptyPath(){return new Qe([])}}const AA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vt extends dr{construct(e,t,i){return new Vt(e,t,i)}static isValidIdentifier(e){return AA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===s_}static keyField(){return new Vt([s_])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new se(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let u=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new se(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new se(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(u=!u,o++):d!=="."||u?(i+=d,o++):(l(),o++)}if(l(),u)throw new se(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Vt(t)}static emptyPath(){return new Vt([])}}/**
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
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(Qe.fromString(e))}static fromName(e){return new fe(Qe.fromString(e).popFirst(5))}static empty(){return new fe(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new Qe(e.slice()))}}/**
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
 */function j0(n,e,t){if(!t)throw new se(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function CA(n,e,t,i){if(e===!0&&i===!0)throw new se(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function o_(n){if(!fe.isDocumentKey(n))throw new se(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function a_(n){if(fe.isDocumentKey(n))throw new se(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function F0(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ah(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ve(12329,{type:typeof n})}function vn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new se(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ah(n);throw new se(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ol(n,e){if(!F0(n))throw new se(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const u=n[i];if(o&&typeof u!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&u!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new se(K.INVALID_ARGUMENT,t);return!0}/**
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
 */const l_=-62135596800,u_=1e6;class Ze{static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*u_);return new Ze(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<l_)throw new se(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/u_}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ze._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ol(e,Ze._jsonSchema))return new Ze(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-l_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ze._jsonSchemaVersion="firestore/timestamp/1.0",Ze._jsonSchema={type:vt("string",Ze._jsonSchemaVersion),seconds:vt("number"),nanoseconds:vt("number")};/**
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
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Ze(0,0))}static max(){return new Te(new Ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ml=-1;function kA(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(i===1e9?new Ze(t+1,0):new Ze(t,i));return new Bi(o,fe.empty(),e)}function PA(n){return new Bi(n.readTime,n.key,ml)}class Bi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Bi(Te.min(),fe.empty(),ml)}static max(){return new Bi(Te.max(),fe.empty(),ml)}}function bA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(n.documentKey,e.documentKey),t!==0?t:Pe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ea(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==NA)throw n;oe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):G.reject(t)}static resolve(e){return new G(((t,i)=>{t(e)}))}static reject(e){return new G(((t,i)=>{i(e)}))}static waitFor(e){return new G(((t,i)=>{let o=0,l=0,u=!1;e.forEach((d=>{++o,d.next((()=>{++l,u&&l===o&&t()}),(p=>i(p)))})),u=!0,l===o&&t()}))}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next((o=>o?G.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new G(((i,o)=>{const l=e.length,u=new Array(l);let d=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next((_=>{u[y]=_,++d,d===l&&i(u)}),(_=>o(_)))}}))}static doWhile(e,t){return new G(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function OA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ta(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class lh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}lh.ce=-1;/**
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
 */const _p=-1;function uh(n){return n==null}function Uc(n){return n===0&&1/n==-1/0}function LA(n){return typeof n=="number"&&Number.isInteger(n)&&!Uc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const U0="";function VA(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=c_(e)),e=MA(n.get(t),e);return c_(e)}function MA(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case U0:t+="";break;default:t+=l}}return t}function c_(n){return n+U0+""}/**
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
 */function h_(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Yi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function B0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Lt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cc(this.root,e,this.comparator,!1)}getReverseIterator(){return new cc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cc(this.root,e,this.comparator,!0)}}class cc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Lt.RED,this.left=o??Lt.EMPTY,this.right=l??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Lt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Lt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Lt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new d_(this.data.getIterator())}getIteratorFrom(e){return new d_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new xt(this.comparator);return t.data=e,t}}class d_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.fields=e,e.sort(Vt.comparator)}static empty(){return new _n([])}unionWith(e){let t=new xt(Vt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new _n(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $o(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class z0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new z0("Invalid base64 string: "+l):l}})(e);return new Mt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let u=0;u<o.length;++u)l+=String.fromCharCode(o[u]);return l})(e);return new Mt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const jA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zi(n){if(ze(!!n,39018),typeof n=="string"){let e=0;const t=jA.exec(n);if(ze(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function $i(n){return typeof n=="string"?Mt.fromBase64String(n):Mt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="server_timestamp",H0="__type__",q0="__previous_value__",W0="__local_write_time__";function vp(n){return(n?.mapValue?.fields||{})[H0]?.stringValue===$0}function ch(n){const e=n.mapValue.fields[q0];return vp(e)?ch(e):e}function gl(n){const e=zi(n.mapValue.fields[W0].timestampValue);return new Ze(e.seconds,e.nanos)}/**
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
 */class FA{constructor(e,t,i,o,l,u,d,p,y,_,x){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=_,this.apiKey=x}}const Bc="(default)";class yl{constructor(e,t){this.projectId=e,this.database=t||Bc}static empty(){return new yl("","")}get isDefaultDatabase(){return this.database===Bc}isEqual(e){return e instanceof yl&&e.projectId===this.projectId&&e.database===this.database}}function UA(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new se(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yl(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="__type__",BA="__max__",hc={mapValue:{}},G0="__vector__",zc="value";function Hi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?vp(n)?4:$A(n)?9007199254740991:zA(n)?10:11:ve(28295,{value:n})}function vr(n,e){if(n===e)return!0;const t=Hi(n);if(t!==Hi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gl(n).isEqual(gl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const u=zi(o.timestampValue),d=zi(l.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return $i(o.bytesValue).isEqual($i(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return dt(o.geoPointValue.latitude)===dt(l.geoPointValue.latitude)&&dt(o.geoPointValue.longitude)===dt(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return dt(o.integerValue)===dt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const u=dt(o.doubleValue),d=dt(l.doubleValue);return u===d?Uc(u)===Uc(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return $o(n.arrayValue.values||[],e.arrayValue.values||[],vr);case 10:case 11:return(function(o,l){const u=o.mapValue.fields||{},d=l.mapValue.fields||{};if(h_(u)!==h_(d))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(d[p]===void 0||!vr(u[p],d[p])))return!1;return!0})(n,e);default:return ve(52216,{left:n})}}function _l(n,e){return(n.values||[]).find((t=>vr(t,e)))!==void 0}function Ho(n,e){if(n===e)return 0;const t=Hi(n),i=Hi(e);if(t!==i)return Pe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(n.booleanValue,e.booleanValue);case 2:return(function(l,u){const d=dt(l.integerValue||l.doubleValue),p=dt(u.integerValue||u.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return f_(n.timestampValue,e.timestampValue);case 4:return f_(gl(n),gl(e));case 5:return Df(n.stringValue,e.stringValue);case 6:return(function(l,u){const d=$i(l),p=$i(u);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,u){const d=l.split("/"),p=u.split("/");for(let y=0;y<d.length&&y<p.length;y++){const _=Pe(d[y],p[y]);if(_!==0)return _}return Pe(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,u){const d=Pe(dt(l.latitude),dt(u.latitude));return d!==0?d:Pe(dt(l.longitude),dt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return p_(n.arrayValue,e.arrayValue);case 10:return(function(l,u){const d=l.fields||{},p=u.fields||{},y=d[zc]?.arrayValue,_=p[zc]?.arrayValue,x=Pe(y?.values?.length||0,_?.values?.length||0);return x!==0?x:p_(y,_)})(n.mapValue,e.mapValue);case 11:return(function(l,u){if(l===hc.mapValue&&u===hc.mapValue)return 0;if(l===hc.mapValue)return 1;if(u===hc.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),y=u.fields||{},_=Object.keys(y);p.sort(),_.sort();for(let x=0;x<p.length&&x<_.length;++x){const I=Df(p[x],_[x]);if(I!==0)return I;const V=Ho(d[p[x]],y[_[x]]);if(V!==0)return V}return Pe(p.length,_.length)})(n.mapValue,e.mapValue);default:throw ve(23264,{he:t})}}function f_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Pe(n,e);const t=zi(n),i=zi(e),o=Pe(t.seconds,i.seconds);return o!==0?o:Pe(t.nanos,i.nanos)}function p_(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Ho(t[o],i[o]);if(l)return l}return Pe(t.length,i.length)}function qo(n){return Of(n)}function Of(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=zi(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return $i(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return fe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Of(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const u of i)l?l=!1:o+=",",o+=`${u}:${Of(t.fields[u])}`;return o+"}"})(n.mapValue):ve(61005,{value:n})}function Tc(n){switch(Hi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ch(n);return e?16+Tc(e):16;case 5:return 2*n.stringValue.length;case 6:return $i(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+Tc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return Yi(i.fields,((l,u)=>{o+=l.length+Tc(u)})),o})(n.mapValue);default:throw ve(13486,{value:n})}}function m_(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Lf(n){return!!n&&"integerValue"in n}function wp(n){return!!n&&"arrayValue"in n}function g_(n){return!!n&&"nullValue"in n}function y_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Sc(n){return!!n&&"mapValue"in n}function zA(n){return(n?.mapValue?.fields||{})[K0]?.stringValue===G0}function ul(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Yi(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=ul(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ul(n.arrayValue.values[t]);return e}return{...n}}function $A(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===BA}/**
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
 */class on{constructor(e){this.value=e}static empty(){return new on({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Sc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ul(t)}setAll(e){let t=Vt.emptyPath(),i={},o=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}u?i[d.lastSegment()]=ul(u):o.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Sc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Sc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Yi(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new on(ul(this.value))}}function Q0(n){const e=[];return Yi(n.fields,((t,i)=>{const o=new Vt([t]);if(Sc(i)){const l=Q0(i.mapValue).fields;if(l.length===0)e.push(o);else for(const u of l)e.push(o.child(u))}else e.push(o)})),new _n(e)}/**
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
 */class Wt{constructor(e,t,i,o,l,u,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=u,this.documentState=d}static newInvalidDocument(e){return new Wt(e,0,Te.min(),Te.min(),Te.min(),on.empty(),0)}static newFoundDocument(e,t,i,o){return new Wt(e,1,t,Te.min(),i,o,0)}static newNoDocument(e,t){return new Wt(e,2,t,Te.min(),Te.min(),on.empty(),0)}static newUnknownDocument(e,t){return new Wt(e,3,t,Te.min(),Te.min(),on.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=on.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=on.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $c{constructor(e,t){this.position=e,this.inclusive=t}}function __(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],u=n.position[o];if(l.field.isKeyField()?i=fe.comparator(fe.fromName(u.referenceValue),t.key):i=Ho(u,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function v_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!vr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class vl{constructor(e,t="asc"){this.field=e,this.dir=t}}function HA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class J0{}class _t extends J0{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new WA(e,t,i):t==="array-contains"?new QA(e,i):t==="in"?new JA(e,i):t==="not-in"?new YA(e,i):t==="array-contains-any"?new XA(e,i):new _t(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new KA(e,i):new GA(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ho(t,this.value)):t!==null&&Hi(this.value)===Hi(t)&&this.matchesComparison(Ho(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qn extends J0{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new qn(e,t)}matches(e){return Y0(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Y0(n){return n.op==="and"}function X0(n){return qA(n)&&Y0(n)}function qA(n){for(const e of n.filters)if(e instanceof qn)return!1;return!0}function Vf(n){if(n instanceof _t)return n.field.canonicalString()+n.op.toString()+qo(n.value);if(X0(n))return n.filters.map((e=>Vf(e))).join(",");{const e=n.filters.map((t=>Vf(t))).join(",");return`${n.op}(${e})`}}function Z0(n,e){return n instanceof _t?(function(i,o){return o instanceof _t&&i.op===o.op&&i.field.isEqual(o.field)&&vr(i.value,o.value)})(n,e):n instanceof qn?(function(i,o){return o instanceof qn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,u,d)=>l&&Z0(u,o.filters[d])),!0):!1})(n,e):void ve(19439)}function ew(n){return n instanceof _t?(function(t){return`${t.field.canonicalString()} ${t.op} ${qo(t.value)}`})(n):n instanceof qn?(function(t){return t.op.toString()+" {"+t.getFilters().map(ew).join(" ,")+"}"})(n):"Filter"}class WA extends _t{constructor(e,t,i){super(e,t,i),this.key=fe.fromName(i.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class KA extends _t{constructor(e,t){super(e,"in",t),this.keys=tw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class GA extends _t{constructor(e,t){super(e,"not-in",t),this.keys=tw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function tw(n,e){return(e.arrayValue?.values||[]).map((t=>fe.fromName(t.referenceValue)))}class QA extends _t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wp(t)&&_l(t.arrayValue,this.value)}}class JA extends _t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&_l(this.value.arrayValue,t)}}class YA extends _t{constructor(e,t){super(e,"not-in",t)}matches(e){if(_l(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!_l(this.value.arrayValue,t)}}class XA extends _t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>_l(this.value.arrayValue,i)))}}/**
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
 */class ZA{constructor(e,t=null,i=[],o=[],l=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=u,this.endAt=d,this.Te=null}}function w_(n,e=null,t=[],i=[],o=null,l=null,u=null){return new ZA(n,e,t,i,o,l,u)}function Ep(n){const e=Ie(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Vf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),uh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>qo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>qo(i))).join(",")),e.Te=t}return e.Te}function xp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!HA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Z0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!v_(n.startAt,e.startAt)&&v_(n.endAt,e.endAt)}function Mf(n){return fe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class na{constructor(e,t=null,i=[],o=[],l=null,u="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=u,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function eC(n,e,t,i,o,l,u,d){return new na(n,e,t,i,o,l,u,d)}function hh(n){return new na(n)}function E_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function tC(n){return fe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function nw(n){return n.collectionGroup!==null}function cl(n){const e=Ie(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new xt(Vt.comparator);return u.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(d=d.add(y.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new vl(l,i))})),t.has(Vt.keyField().canonicalString())||e.Ie.push(new vl(Vt.keyField(),i))}return e.Ie}function mr(n){const e=Ie(n);return e.Ee||(e.Ee=nC(e,cl(n))),e.Ee}function nC(n,e){if(n.limitType==="F")return w_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new vl(o.field,l)}));const t=n.endAt?new $c(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new $c(n.startAt.position,n.startAt.inclusive):null;return w_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function jf(n,e){const t=n.filters.concat([e]);return new na(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function rC(n,e){const t=n.explicitOrderBy.concat([e]);return new na(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Hc(n,e,t){return new na(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function dh(n,e){return xp(mr(n),mr(e))&&n.limitType===e.limitType}function rw(n){return`${Ep(mr(n))}|lt:${n.limitType}`}function No(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>ew(o))).join(", ")}]`),uh(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>qo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>qo(o))).join(",")),`Target(${i})`})(mr(n))}; limitType=${n.limitType})`}function fh(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):fe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of cl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(u,d,p){const y=__(u,d,p);return u.inclusive?y<=0:y<0})(i.startAt,cl(i),o)||i.endAt&&!(function(u,d,p){const y=__(u,d,p);return u.inclusive?y>=0:y>0})(i.endAt,cl(i),o))})(n,e)}function iC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function iw(n){return(e,t)=>{let i=!1;for(const o of cl(n)){const l=sC(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function sC(n,e,t){const i=n.field.isKeyField()?fe.comparator(e.key,t.key):(function(l,u,d){const p=u.data.field(l),y=d.data.field(l);return p!==null&&y!==null?Ho(p,y):ve(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return ve(19790,{direction:n.dir})}}/**
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
 */class Us{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Yi(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return B0(this.inner)}size(){return this.innerSize}}/**
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
 */const oC=new nt(fe.comparator);function Jr(){return oC}const sw=new nt(fe.comparator);function sl(...n){let e=sw;for(const t of n)e=e.insert(t.key,t);return e}function ow(n){let e=sw;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function As(){return hl()}function aw(){return hl()}function hl(){return new Us((n=>n.toString()),((n,e)=>n.isEqual(e)))}const aC=new nt(fe.comparator),lC=new xt(fe.comparator);function be(...n){let e=lC;for(const t of n)e=e.add(t);return e}const uC=new xt(Pe);function cC(){return uC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uc(e)?"-0":e}}function lw(n){return{integerValue:""+n}}function hC(n,e){return LA(e)?lw(e):Tp(n,e)}/**
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
 */class ph{constructor(){this._=void 0}}function dC(n,e,t){return n instanceof wl?(function(o,l){const u={fields:{[H0]:{stringValue:$0},[W0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&vp(l)&&(l=ch(l)),l&&(u.fields[q0]=l),{mapValue:u}})(t,e):n instanceof El?cw(n,e):n instanceof xl?hw(n,e):(function(o,l){const u=uw(o,l),d=x_(u)+x_(o.Ae);return Lf(u)&&Lf(o.Ae)?lw(d):Tp(o.serializer,d)})(n,e)}function fC(n,e,t){return n instanceof El?cw(n,e):n instanceof xl?hw(n,e):t}function uw(n,e){return n instanceof qc?(function(i){return Lf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class wl extends ph{}class El extends ph{constructor(e){super(),this.elements=e}}function cw(n,e){const t=dw(e);for(const i of n.elements)t.some((o=>vr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class xl extends ph{constructor(e){super(),this.elements=e}}function hw(n,e){let t=dw(e);for(const i of n.elements)t=t.filter((o=>!vr(o,i)));return{arrayValue:{values:t}}}class qc extends ph{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function x_(n){return dt(n.integerValue||n.doubleValue)}function dw(n){return wp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class pC{constructor(e,t){this.field=e,this.transform=t}}function mC(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof El&&o instanceof El||i instanceof xl&&o instanceof xl?$o(i.elements,o.elements,vr):i instanceof qc&&o instanceof qc?vr(i.Ae,o.Ae):i instanceof wl&&o instanceof wl})(n.transform,e.transform)}class gC{constructor(e,t){this.version=e,this.transformResults=t}}class $n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ic(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class mh{}function fw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new mw(n.key,$n.none()):new Ll(n.key,n.data,$n.none());{const t=n.data,i=on.empty();let o=new xt(Vt.comparator);for(let l of e.fields)if(!o.has(l)){let u=t.field(l);u===null&&l.length>1&&(l=l.popLast(),u=t.field(l)),u===null?i.delete(l):i.set(l,u),o=o.add(l)}return new Xi(n.key,i,new _n(o.toArray()),$n.none())}}function yC(n,e,t){n instanceof Ll?(function(o,l,u){const d=o.value.clone(),p=S_(o.fieldTransforms,l,u.transformResults);d.setAll(p),l.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Xi?(function(o,l,u){if(!Ic(o.precondition,l))return void l.convertToUnknownDocument(u.version);const d=S_(o.fieldTransforms,l,u.transformResults),p=l.data;p.setAll(pw(o)),p.setAll(d),l.convertToFoundDocument(u.version,p).setHasCommittedMutations()})(n,e,t):(function(o,l,u){l.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function dl(n,e,t,i){return n instanceof Ll?(function(l,u,d,p){if(!Ic(l.precondition,u))return d;const y=l.value.clone(),_=I_(l.fieldTransforms,p,u);return y.setAll(_),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof Xi?(function(l,u,d,p){if(!Ic(l.precondition,u))return d;const y=I_(l.fieldTransforms,p,u),_=u.data;return _.setAll(pw(l)),_.setAll(y),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((x=>x.field)))})(n,e,t,i):(function(l,u,d){return Ic(l.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function _C(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=uw(i.transform,o||null);l!=null&&(t===null&&(t=on.empty()),t.set(i.field,l))}return t||null}function T_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&$o(i,o,((l,u)=>mC(l,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ll extends mh{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Xi extends mh{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function pw(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function S_(n,e,t){const i=new Map;ze(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let o=0;o<t.length;o++){const l=n[o],u=l.transform,d=e.data.field(l.field);i.set(l.field,fC(u,d,t[o]))}return i}function I_(n,e,t){const i=new Map;for(const o of n){const l=o.transform,u=t.data.field(o.field);i.set(o.field,dC(l,u,e))}return i}class mw extends mh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vC extends mh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&yC(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=dl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=dl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=aw();return this.mutations.forEach((o=>{const l=e.get(o.key),u=l.overlayedDocument;let d=this.applyToLocalView(u,l.mutatedFields);d=t.has(o.key)?null:d;const p=fw(u,d);p!==null&&i.set(o.key,p),u.isValidDocument()||u.convertToNoDocument(Te.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),be())}isEqual(e){return this.batchId===e.batchId&&$o(this.mutations,e.mutations,((t,i)=>T_(t,i)))&&$o(this.baseMutations,e.baseMutations,((t,i)=>T_(t,i)))}}class Sp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){ze(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return aC})();const l=e.mutations;for(let u=0;u<l.length;u++)o=o.insert(l[u].key,i[u].version);return new Sp(e,t,i,o)}}/**
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
 */class EC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var yt,Ve;function TC(n){switch(n){case K.OK:return ve(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return ve(15467,{code:n})}}function gw(n){if(n===void 0)return Qr("GRPC error has no .code"),K.UNKNOWN;switch(n){case yt.OK:return K.OK;case yt.CANCELLED:return K.CANCELLED;case yt.UNKNOWN:return K.UNKNOWN;case yt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case yt.INTERNAL:return K.INTERNAL;case yt.UNAVAILABLE:return K.UNAVAILABLE;case yt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case yt.NOT_FOUND:return K.NOT_FOUND;case yt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case yt.ABORTED:return K.ABORTED;case yt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case yt.DATA_LOSS:return K.DATA_LOSS;default:return ve(39323,{code:n})}}(Ve=yt||(yt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function SC(){return new TextEncoder}/**
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
 */const IC=new Fi([4294967295,4294967295],0);function R_(n){const e=SC().encode(n),t=new P0;return t.update(e),new Uint8Array(t.digest())}function A_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Fi([t,i],0),new Fi([o,l],0)]}class Ip{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new ol(`Invalid padding: ${t}`);if(i<0)throw new ol(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new ol(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new ol(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Fi.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(Fi.fromNumber(i)));return o.compare(IC)===1&&(o=new Fi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=R_(e),[i,o]=A_(t);for(let l=0;l<this.hashCount;l++){const u=this.ye(i,o,l);if(!this.we(u))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),u=new Ip(l,o,t);return i.forEach((d=>u.insert(d))),u}insert(e){if(this.ge===0)return;const t=R_(e),[i,o]=A_(t);for(let l=0;l<this.hashCount;l++){const u=this.ye(i,o,l);this.Se(u)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class ol extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Vl{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Ml.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Vl(Te.min(),o,new nt(Pe),Jr(),be())}}class Ml{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Ml(i,t,be(),be(),be())}}/**
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
 */class Rc{constructor(e,t,i,o){this.be=e,this.removedTargetIds=t,this.key=i,this.De=o}}class yw{constructor(e,t){this.targetId=e,this.Ce=t}}class _w{constructor(e,t,i=Mt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class C_{constructor(){this.ve=0,this.Fe=k_(),this.Me=Mt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=be(),t=be(),i=be();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:ve(38017,{changeType:l})}})),new Ml(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=k_()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class RC{constructor(e){this.Ge=e,this.ze=new Map,this.je=Jr(),this.Je=dc(),this.He=dc(),this.Ze=new nt(Pe)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(Mf(l))if(i===0){const u=new fe(l.path);this.et(t,u,Wt.newNoDocument(u,Te.min()))}else ze(i===1,20013,{expectedCount:i});else{const u=this._t(t);if(u!==i){const d=this.ut(e),p=d?this.ct(d,e,u):1;if(p!==0){this.it(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let u,d;try{u=$i(i).toUint8Array()}catch(p){if(p instanceof z0)return Ms("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Ip(u,o,l)}catch(p){return Ms(p instanceof ol?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const u=this.Ge.ht(),d=`projects/${u.projectId}/databases/${u.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,u)=>{const d=this.ot(u);if(d){if(l.current&&Mf(d.target)){const p=new fe(d.target.path);this.It(p).has(u)||this.Et(u,p)||this.et(u,p,Wt.newNoDocument(p,e))}l.Be&&(t.set(u,l.ke()),l.Ke())}}));let i=be();this.He.forEach(((l,u)=>{let d=!0;u.forEachWhile((p=>{const y=this.ot(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(i=i.add(l))})),this.je.forEach(((l,u)=>u.setReadTime(e)));const o=new Vl(e,t,this.Ze,this.je,i);return this.je=Jr(),this.Je=dc(),this.He=dc(),this.Ze=new nt(Pe),o}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new C_,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new xt(Pe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new xt(Pe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new C_),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function dc(){return new nt(fe.comparator)}function k_(){return new nt(fe.comparator)}const AC={asc:"ASCENDING",desc:"DESCENDING"},CC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kC={and:"AND",or:"OR"};class PC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ff(n,e){return n.useProto3Json||uh(e)?e:{value:e}}function Wc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function bC(n,e){return Wc(n,e.toTimestamp())}function gr(n){return ze(!!n,49232),Te.fromTimestamp((function(t){const i=zi(t);return new Ze(i.seconds,i.nanos)})(n))}function Rp(n,e){return Uf(n,e).canonicalString()}function Uf(n,e){const t=(function(o){return new Qe(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function ww(n){const e=Qe.fromString(n);return ze(Iw(e),10190,{key:e.toString()}),e}function Bf(n,e){return Rp(n.databaseId,e.path)}function mf(n,e){const t=ww(e);if(t.get(1)!==n.databaseId.projectId)throw new se(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new se(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new fe(xw(t))}function Ew(n,e){return Rp(n.databaseId,e)}function NC(n){const e=ww(n);return e.length===4?Qe.emptyPath():xw(e)}function zf(n){return new Qe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function xw(n){return ze(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function P_(n,e,t){return{name:Bf(n,e),fields:t.value.mapValue.fields}}function DC(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:ve(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,_){return y.useProto3Json?(ze(_===void 0||typeof _=="string",58123),Mt.fromBase64String(_||"")):(ze(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),Mt.fromUint8Array(_||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(y){const _=y.code===void 0?K.UNKNOWN:gw(y.code);return new se(_,y.message||"")})(u);t=new _w(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=mf(n,i.document.name),l=gr(i.document.updateTime),u=i.document.createTime?gr(i.document.createTime):Te.min(),d=new on({mapValue:{fields:i.document.fields}}),p=Wt.newFoundDocument(o,l,u,d),y=i.targetIds||[],_=i.removedTargetIds||[];t=new Rc(y,_,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=mf(n,i.document),l=i.readTime?gr(i.readTime):Te.min(),u=Wt.newNoDocument(o,l),d=i.removedTargetIds||[];t=new Rc([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=mf(n,i.document),l=i.removedTargetIds||[];t=new Rc([],l,o,null)}else{if(!("filter"in e))return ve(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,u=new xC(o,l),d=i.targetId;t=new yw(d,u)}}return t}function OC(n,e){let t;if(e instanceof Ll)t={update:P_(n,e.key,e.value)};else if(e instanceof mw)t={delete:Bf(n,e.key)};else if(e instanceof Xi)t={update:P_(n,e.key,e.data),updateMask:$C(e.fieldMask)};else{if(!(e instanceof vC))return ve(16599,{dt:e.type});t={verify:Bf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,u){const d=u.transform;if(d instanceof wl)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof El)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof xl)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof qc)return{fieldPath:u.field.canonicalString(),increment:d.Ae};throw ve(20930,{transform:u.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:bC(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ve(27497)})(n,e.precondition)),t}function LC(n,e){return n&&n.length>0?(ze(e!==void 0,14353),n.map((t=>(function(o,l){let u=o.updateTime?gr(o.updateTime):gr(l);return u.isEqual(Te.min())&&(u=gr(l)),new gC(u,o.transformResults||[])})(t,e)))):[]}function VC(n,e){return{documents:[Ew(n,e.path)]}}function MC(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Ew(n,o);const l=(function(y){if(y.length!==0)return Sw(qn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const u=(function(y){if(y.length!==0)return y.map((_=>(function(I){return{field:Do(I.field),direction:UC(I.dir)}})(_)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Ff(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function jC(n){let e=NC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){ze(i===1,65062);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let l=[];t.where&&(l=(function(x){const I=Tw(x);return I instanceof qn&&X0(I)?I.getFilters():[I]})(t.where));let u=[];t.orderBy&&(u=(function(x){return x.map((I=>(function(L){return new vl(Oo(L.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(L.direction))})(I)))})(t.orderBy));let d=null;t.limit&&(d=(function(x){let I;return I=typeof x=="object"?x.value:x,uh(I)?null:I})(t.limit));let p=null;t.startAt&&(p=(function(x){const I=!!x.before,V=x.values||[];return new $c(V,I)})(t.startAt));let y=null;return t.endAt&&(y=(function(x){const I=!x.before,V=x.values||[];return new $c(V,I)})(t.endAt)),eC(e,o,u,l,d,"F",p,y)}function FC(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Tw(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Oo(t.unaryFilter.field);return _t.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Oo(t.unaryFilter.field);return _t.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Oo(t.unaryFilter.field);return _t.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Oo(t.unaryFilter.field);return _t.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(n):n.fieldFilter!==void 0?(function(t){return _t.create(Oo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return qn.create(t.compositeFilter.filters.map((i=>Tw(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(t.compositeFilter.op))})(n):ve(30097,{filter:n})}function UC(n){return AC[n]}function BC(n){return CC[n]}function zC(n){return kC[n]}function Do(n){return{fieldPath:n.canonicalString()}}function Oo(n){return Vt.fromServerFormat(n.fieldPath)}function Sw(n){return n instanceof _t?(function(t){if(t.op==="=="){if(y_(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NAN"}};if(g_(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(y_(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NOT_NAN"}};if(g_(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Do(t.field),op:BC(t.op),value:t.value}}})(n):n instanceof qn?(function(t){const i=t.getFilters().map((o=>Sw(o)));return i.length===1?i[0]:{compositeFilter:{op:zC(t.op),filters:i}}})(n):ve(54877,{filter:n})}function $C(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Iw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Rw(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class zr{constructor(e,t,i,o,l=Te.min(),u=Te.min(),d=Mt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class HC{constructor(e){this.yt=e}}function qC(n){const e=jC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Hc(e,e.limit,"L"):e}/**
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
 */class WC{constructor(){this.bn=new KC}addToCollectionParentIndex(e,t){return this.bn.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Bi.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Bi.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class KC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new xt(Qe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new xt(Qe.comparator)).toArray()}}/**
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
 */const b_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Aw=41943040;class sn{static withCacheSize(e){return new sn(e,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */sn.DEFAULT_COLLECTION_PERCENTILE=10,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sn.DEFAULT=new sn(Aw,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sn.DISABLED=new sn(-1,0,0);/**
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
 */class qi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new qi(0)}static ar(){return new qi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="LruGarbageCollector",GC=1048576;function D_([n,e],[t,i]){const o=Pe(n,t);return o===0?Pe(e,i):o}class QC{constructor(e){this.Pr=e,this.buffer=new xt(D_),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();D_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class JC{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){oe(N_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ta(t)?oe(N_,"Ignoring IndexedDB error during garbage collection: ",t):await ea(t)}await this.Ar(3e5)}))}}class YC{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return G.resolve(lh.ce);const i=new QC(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(b_)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),b_):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,o,l,u,d,p,y;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((x=>(x>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${x}`),o=this.params.maximumSequenceNumbersToCollect):o=x,u=Date.now(),this.nthSequenceNumber(e,o)))).next((x=>(i=x,d=Date.now(),this.removeTargets(e,i,t)))).next((x=>(l=x,p=Date.now(),this.removeOrphanedDocuments(e,i)))).next((x=>(y=Date.now(),bo()<=Oe.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${o} in `+(d-u)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${x} documents in `+(y-p)+`ms
Total Duration: ${y-_}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:x}))))}}function XC(n,e){return new YC(n,e)}/**
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
 */class ZC{constructor(){this.changes=new Us((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Wt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ek{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class tk{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&dl(i.mutation,o,_n.empty(),Ze.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,be()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=be()){const o=As();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let u=sl();return l.forEach(((d,p)=>{u=u.insert(d,p.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const i=As();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,be())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,i,o){let l=Jr();const u=hl(),d=(function(){return hl()})();return t.forEach(((p,y)=>{const _=i.get(y.key);o.has(y.key)&&(_===void 0||_.mutation instanceof Xi)?l=l.insert(y.key,y):_!==void 0?(u.set(y.key,_.mutation.getFieldMask()),dl(_.mutation,y,_.mutation.getFieldMask(),Ze.now())):u.set(y.key,_n.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((y,_)=>u.set(y,_))),t.forEach(((y,_)=>d.set(y,new ek(_,u.get(y)??null)))),d)))}recalculateAndSaveOverlays(e,t){const i=hl();let o=new nt(((u,d)=>u-d)),l=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((p=>{const y=t.get(p);if(y===null)return;let _=i.get(p)||_n.empty();_=d.applyToLocalView(y,_),i.set(p,_);const x=(o.get(d.batchId)||be()).add(p);o=o.insert(d.batchId,x)}))})).next((()=>{const u=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,_=p.value,x=aw();_.forEach((I=>{if(!l.has(I)){const V=fw(t.get(I),i.get(I));V!==null&&x.set(I,V),l=l.add(I)}})),u.push(this.documentOverlayCache.saveOverlays(e,y,x))}return G.waitFor(u)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return tC(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const u=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):G.resolve(As());let d=ml,p=l;return u.next((y=>G.forEach(y,((_,x)=>(d<x.largestBatchId&&(d=x.largestBatchId),l.get(_)?G.resolve():this.remoteDocumentCache.getEntry(e,_).next((I=>{p=p.insert(_,I)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,p,y,be()))).next((_=>({batchId:d,changes:ow(_)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((i=>{let o=sl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let u=sl();return this.indexManager.getCollectionParents(e,l).next((d=>G.forEach(d,(p=>{const y=(function(x,I){return new na(I,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((_=>{_.forEach(((x,I)=>{u=u.insert(x,I)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((u=>(l=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((u=>{l.forEach(((p,y)=>{const _=y.getKey();u.get(_)===null&&(u=u.insert(_,Wt.newInvalidDocument(_)))}));let d=sl();return u.forEach(((p,y)=>{const _=l.get(p);_!==void 0&&dl(_.mutation,y,_n.empty(),Ze.now()),fh(t,y)&&(d=d.insert(p,y))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return G.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:gr(o.createTime)}})(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:qC(o.bundledQuery),readTime:gr(o.readTime)}})(t)),G.resolve()}}/**
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
 */class rk{constructor(){this.overlays=new nt(fe.comparator),this.Lr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=As();return G.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.St(e,t,l)})),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Lr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=As(),l=t.length+1,u=new fe(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new nt(((y,_)=>y-_));const u=this.overlays.getIterator();for(;u.hasNext();){const y=u.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let _=l.get(y.largestBatchId);_===null&&(_=As(),l=l.insert(y.largestBatchId,_)),_.set(y.getKey(),y)}}const d=As(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,_)=>d.set(y,_))),!(d.size()>=o)););return G.resolve(d)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const u=this.Lr.get(o.largestBatchId).delete(i.key);this.Lr.set(o.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new EC(t,i));let l=this.Lr.get(t);l===void 0&&(l=be(),this.Lr.set(t,l)),this.Lr.set(t,l.add(i.key))}}/**
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
 */class ik{constructor(){this.sessionToken=Mt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
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
 */class Ap{constructor(){this.kr=new xt(Ct.Kr),this.qr=new xt(Ct.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new Ct(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Ct(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new fe(new Qe([])),i=new Ct(t,e),o=new Ct(t,e+1),l=[];return this.qr.forEachInRange([i,o],(u=>{this.Wr(u),l.push(u.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new fe(new Qe([])),i=new Ct(t,e),o=new Ct(t,e+1);let l=be();return this.qr.forEachInRange([i,o],(u=>{l=l.add(u.key)})),l}containsKey(e){const t=new Ct(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Ct{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return fe.comparator(e.key,t.key)||Pe(e.Jr,t.Jr)}static Ur(e,t){return Pe(e.Jr,t.Jr)||fe.comparator(e.key,t.key)}}/**
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
 */class sk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new xt(Ct.Kr)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new wC(l,t,i,o);this.mutationQueue.push(u);for(const d of o)this.Hr=this.Hr.add(new Ct(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return G.resolve(u)}lookupMutationBatch(e,t){return G.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return G.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?_p:this.Yn-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Ct(t,0),o=new Ct(t,Number.POSITIVE_INFINITY),l=[];return this.Hr.forEachInRange([i,o],(u=>{const d=this.Zr(u.Jr);l.push(d)})),G.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new xt(Pe);return t.forEach((o=>{const l=new Ct(o,0),u=new Ct(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([l,u],(d=>{i=i.add(d.Jr)}))})),G.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;fe.isDocumentKey(l)||(l=l.child(""));const u=new Ct(new fe(l),0);let d=new xt(Pe);return this.Hr.forEachWhile((p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.Jr)),!0)}),u),G.resolve(this.Yr(d))}Yr(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Hr;return G.forEach(t.mutations,(o=>{const l=new Ct(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=i}))}nr(e){}containsKey(e,t){const i=new Ct(t,0),o=this.Hr.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class ok{constructor(e){this.ti=e,this.docs=(function(){return new nt(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,u=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:u}),this.size+=u-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():Wt.newInvalidDocument(t))}getEntries(e,t){let i=Jr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Wt.newInvalidDocument(o))})),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Jr();const u=t.path,d=new fe(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:_}}=p.getNext();if(!u.isPrefixOf(y.path))break;y.path.length>u.length+1||bA(PA(_),i)<=0||(o.has(_.key)||fh(t,_))&&(l=l.insert(_.key,_.mutableCopy()))}return G.resolve(l)}getAllFromCollectionGroup(e,t,i,o){ve(9500)}ni(e,t){return G.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new ak(this)}getSize(e){return G.resolve(this.size)}}class ak extends ZC{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(i)})),G.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class lk{constructor(e){this.persistence=e,this.ri=new Us((t=>Ep(t)),xp),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.ii=0,this.si=new Ap,this.targetCount=0,this.oi=qi._r()}forEachTarget(e,t){return this.ri.forEach(((i,o)=>t(o))),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),G.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new qi(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.lr(t),G.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ri.forEach(((u,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.ri.delete(u),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)})),G.waitFor(l).next((()=>o))}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),G.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((u=>{l.push(o.markPotentiallyOrphaned(e,u))})),G.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this.si.containsKey(t))}}/**
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
 */class Cw{constructor(e,t){this._i={},this.overlays={},this.ai=new lh(0),this.ui=!1,this.ui=!0,this.ci=new ik,this.referenceDelegate=e(this),this.li=new lk(this),this.indexManager=new WC,this.remoteDocumentCache=(function(o){return new ok(o)})((i=>this.referenceDelegate.hi(i))),this.serializer=new HC(t),this.Pi=new nk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new sk(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){oe("MemoryPersistence","Starting transaction:",e);const o=new uk(this.ai.next());return this.referenceDelegate.Ti(),i(o).next((l=>this.referenceDelegate.Ii(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return G.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class uk extends DA{constructor(e){super(),this.currentSequenceNumber=e}}class Cp{constructor(e){this.persistence=e,this.Ri=new Ap,this.Ai=null}static Vi(e){return new Cp(e)}get di(){if(this.Ai)return this.Ai;throw ve(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),G.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.di.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.di,(i=>{const o=fe.fromPath(i);return this.mi(e,o).next((l=>{l||t.removeEntry(o,Te.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return G.or([()=>G.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Kc{constructor(e,t){this.persistence=e,this.fi=new Us((i=>VA(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=XC(this,t)}static Vi(e,t){return new Kc(e,t)}Ti(){}Ii(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return G.forEach(this.fi,((i,o)=>this.wr(e,i,o).next((l=>l?G.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ni(e,(u=>this.wr(e,u,t).next((d=>{d||(i++,l.removeEntry(u,Te.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),G.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),G.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Tc(e.data.value)),t}wr(e,t,i){return G.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return G.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class kp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=o}static Es(e,t){let i=be(),o=be();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new kp(e,t.fromCache,i,o)}}/**
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
 */class ck{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class hk{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return BS()?8:OA(Gt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.gs(e,t).next((u=>{l.result=u})).next((()=>{if(!l.result)return this.ps(e,t,o,i).next((u=>{l.result=u}))})).next((()=>{if(l.result)return;const u=new ck;return this.ys(e,t,u).next((d=>{if(l.result=d,this.As)return this.ws(e,t,u,d.size)}))})).next((()=>l.result))}ws(e,t,i,o){return i.documentReadCount<this.Vs?(bo()<=Oe.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",No(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),G.resolve()):(bo()<=Oe.DEBUG&&oe("QueryEngine","Query:",No(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ds*o?(bo()<=Oe.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",No(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mr(t))):G.resolve())}gs(e,t){if(E_(t))return G.resolve(null);let i=mr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Hc(t,null,"F"),i=mr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const u=be(...l);return this.fs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,i).next((p=>{const y=this.Ss(t,d);return this.bs(t,y,u,p.readTime)?this.gs(e,Hc(t,null,"F")):this.Ds(e,y,t,p)}))))})))))}ps(e,t,i,o){return E_(t)||o.isEqual(Te.min())?G.resolve(null):this.fs.getDocuments(e,i).next((l=>{const u=this.Ss(t,l);return this.bs(t,u,i,o)?G.resolve(null):(bo()<=Oe.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),No(t)),this.Ds(e,u,t,kA(o,ml)).next((d=>d)))}))}Ss(e,t){let i=new xt(iw(e));return t.forEach(((o,l)=>{fh(e,l)&&(i=i.add(l))})),i}bs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ys(e,t,i){return bo()<=Oe.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",No(t)),this.fs.getDocumentsMatchingQuery(e,t,Bi.min(),i)}Ds(e,t,i,o){return this.fs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((u=>{l=l.insert(u.key,u)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="LocalStore",dk=3e8;class fk{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new nt(Pe),this.Fs=new Us((l=>Ep(l)),xp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tk(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function pk(n,e,t,i){return new fk(n,e,t,i)}async function kw(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const u=[],d=[];let p=be();for(const y of o){u.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}for(const y of l){d.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}return t.localDocuments.getDocuments(i,p).next((y=>({Ns:y,removedBatchIds:u,addedBatchIds:d})))}))}))}function mk(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(d,p,y,_){const x=y.batch,I=x.keys();let V=G.resolve();return I.forEach((L=>{V=V.next((()=>_.getEntry(p,L))).next((F=>{const N=y.docVersions.get(L);ze(N!==null,48541),F.version.compareTo(N)<0&&(x.applyToRemoteDocument(F,y),F.isValidDocument()&&(F.setReadTime(y.commitVersion),_.addEntry(F)))}))})),V.next((()=>d.mutationQueue.removeMutationBatch(p,x)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(d){let p=be();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function Pw(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function gk(n,e){const t=Ie(n),i=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const u=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const d=[];e.targetChanges.forEach(((_,x)=>{const I=o.get(x);if(!I)return;d.push(t.li.removeMatchingKeys(l,_.removedDocuments,x).next((()=>t.li.addMatchingKeys(l,_.addedDocuments,x))));let V=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(x)!==null?V=V.withResumeToken(Mt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):_.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(_.resumeToken,i)),o=o.insert(x,V),(function(F,N,Q){return F.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=dk?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0})(I,V,_)&&d.push(t.li.updateTargetData(l,V))}));let p=Jr(),y=be();if(e.documentUpdates.forEach((_=>{e.resolvedLimboDocuments.has(_)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,_))})),d.push(yk(l,u,e.documentUpdates).next((_=>{p=_.Bs,y=_.Ls}))),!i.isEqual(Te.min())){const _=t.li.getLastRemoteSnapshotVersion(l).next((x=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,i)));d.push(_)}return G.waitFor(d).next((()=>u.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,y))).next((()=>p))})).then((l=>(t.vs=o,l)))}function yk(n,e,t){let i=be(),o=be();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let u=Jr();return t.forEach(((d,p)=>{const y=l.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Te.min())?(e.removeEntry(d,p.readTime),u=u.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),u=u.insert(d,p)):oe(Pp,"Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)})),{Bs:u,Ls:o}}))}function _k(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=_p),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function vk(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.li.getTargetData(i,e).next((l=>l?(o=l,G.resolve(o)):t.li.allocateTargetId(i).next((u=>(o=new zr(e,u,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.vs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function $f(n,e,t){const i=Ie(n),o=i.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(u=>i.persistence.referenceDelegate.removeTarget(u,o)))}catch(u){if(!ta(u))throw u;oe(Pp,`Failed to update sequence numbers for target ${e}: ${u}`)}i.vs=i.vs.remove(e),i.Fs.delete(o.target)}function O_(n,e,t){const i=Ie(n);let o=Te.min(),l=be();return i.persistence.runTransaction("Execute query","readwrite",(u=>(function(p,y,_){const x=Ie(p),I=x.Fs.get(_);return I!==void 0?G.resolve(x.vs.get(I)):x.li.getTargetData(y,_)})(i,u,mr(e)).next((d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(u,d.targetId).next((p=>{l=p}))})).next((()=>i.Cs.getDocumentsMatchingQuery(u,e,t?o:Te.min(),t?l:be()))).next((d=>(wk(i,iC(e),d),{documents:d,ks:l})))))}function wk(n,e,t){let i=n.Ms.get(e)||Te.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.Ms.set(e,i)}class L_{constructor(){this.activeTargetIds=cC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ek{constructor(){this.vo=new L_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new L_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xk{Mo(e){}shutdown(){}}/**
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
 */const V_="ConnectivityMonitor";class M_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){oe(V_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){oe(V_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fc=null;function Hf(){return fc===null?fc=(function(){return 268435456+Math.round(2147483648*Math.random())})():fc++,"0x"+fc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="RestConnection",Tk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Sk{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.$o=this.databaseId.database===Bc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const u=Hf(),d=this.Qo(e,t.toUriEncodedString());oe(gf,`Sending RPC '${e}' ${u}:`,d,i);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(p,o,l);const{host:y}=new URL(d),_=kl(y);return this.zo(e,d,p,i,_).then((x=>(oe(gf,`Received RPC '${e}' ${u}: `,x),x)),(x=>{throw Ms(gf,`RPC '${e}' ${u} failed with error: `,x,"url: ",d,"request:",i),x}))}jo(e,t,i,o,l,u){return this.Wo(e,t,i,o,l)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Zo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Qo(e,t){const i=Tk[e];let o=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class Ik{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ht="WebChannelConnection",nl=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(o){setTimeout((()=>{throw o}),0)}}))};class Fo extends Sk{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Fo.c_){const e=O0();nl(e,D0.STAT_EVENT,(t=>{t.stat===Nf.PROXY?oe(Ht,"STAT_EVENT: detected buffering proxy"):t.stat===Nf.NOPROXY&&oe(Ht,"STAT_EVENT: detected no buffering proxy")})),Fo.c_=!0}}zo(e,t,i,o,l){const u=Hf();return new Promise(((d,p)=>{const y=new b0;y.setWithCredentials(!0),y.listenOnce(N0.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case xc.NO_ERROR:const x=y.getResponseJson();oe(Ht,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(x)),d(x);break;case xc.TIMEOUT:oe(Ht,`RPC '${e}' ${u} timed out`),p(new se(K.DEADLINE_EXCEEDED,"Request time out"));break;case xc.HTTP_ERROR:const I=y.getStatus();if(oe(Ht,`RPC '${e}' ${u} failed with status:`,I,"response text:",y.getResponseText()),I>0){let V=y.getResponseJson();Array.isArray(V)&&(V=V[0]);const L=V?.error;if(L&&L.status&&L.message){const F=(function(Q){const J=Q.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(J)>=0?J:K.UNKNOWN})(L.status);p(new se(F,L.message))}else p(new se(K.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new se(K.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{l_:e,streamId:u,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{oe(Ht,`RPC '${e}' ${u} completed.`)}}));const _=JSON.stringify(o);oe(Ht,`RPC '${e}' ${u} sending request:`,o),y.send(t,"POST",_,i,15)}))}T_(e,t,i){const o=Hf(),l=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=this.createWebChannelTransport(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(d.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Go(d.initMessageHeaders,t,i),d.encodeInitMessageHeaders=!0;const y=l.join("");oe(Ht,`Creating RPC '${e}' stream ${o}: ${y}`,d);const _=u.createWebChannel(y,d);this.I_(_);let x=!1,I=!1;const V=new Ik({Jo:L=>{I?oe(Ht,`Not sending because RPC '${e}' stream ${o} is closed:`,L):(x||(oe(Ht,`Opening RPC '${e}' stream ${o} transport.`),_.open(),x=!0),oe(Ht,`RPC '${e}' stream ${o} sending:`,L),_.send(L))},Ho:()=>_.close()});return nl(_,il.EventType.OPEN,(()=>{I||(oe(Ht,`RPC '${e}' stream ${o} transport opened.`),V.i_())})),nl(_,il.EventType.CLOSE,(()=>{I||(I=!0,oe(Ht,`RPC '${e}' stream ${o} transport closed`),V.o_(),this.E_(_))})),nl(_,il.EventType.ERROR,(L=>{I||(I=!0,Ms(Ht,`RPC '${e}' stream ${o} transport errored. Name:`,L.name,"Message:",L.message),V.o_(new se(K.UNAVAILABLE,"The operation could not be completed")))})),nl(_,il.EventType.MESSAGE,(L=>{if(!I){const F=L.data[0];ze(!!F,16349);const N=F,Q=N?.error||N[0]?.error;if(Q){oe(Ht,`RPC '${e}' stream ${o} received error:`,Q);const J=Q.status;let re=(function(we){const k=yt[we];if(k!==void 0)return gw(k)})(J),me=Q.message;J==="NOT_FOUND"&&me.includes("database")&&me.includes("does not exist")&&me.includes(this.databaseId.database)&&Ms(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),re===void 0&&(re=K.INTERNAL,me="Unknown error status: "+J+" with message "+Q.message),I=!0,V.o_(new se(re,me)),_.close()}else oe(Ht,`RPC '${e}' stream ${o} received:`,F),V.__(F)}})),Fo.u_(),setTimeout((()=>{V.s_()}),0),V}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return L0()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(n){return new Fo(n)}function yf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(n){return new PC(n,!0)}/**
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
 */Fo.c_=!1;class bw{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const j_="PersistentStream";class Nw{constructor(e,t,i,o,l,u,d,p){this.Ci=e,this.S_=i,this.b_=o,this.connection=l,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new bw(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(Qr(t.toString()),Qr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new se(K.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return oe(j_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(oe(j_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ak extends Nw{constructor(e,t,i,o,l,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,u),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=DC(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Te.min();const u=l.targetChange;return u.targetIds&&u.targetIds.length?Te.min():u.readTime?gr(u.readTime):Te.min()})(e);return this.listener.H_(t,i)}Z_(e){const t={};t.database=zf(this.serializer),t.addTarget=(function(l,u){let d;const p=u.target;if(d=Mf(p)?{documents:VC(l,p)}:{query:MC(l,p).ft},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=vw(l,u.resumeToken);const y=Ff(l,u.expectedCount);y!==null&&(d.expectedCount=y)}else if(u.snapshotVersion.compareTo(Te.min())>0){d.readTime=Wc(l,u.snapshotVersion.toTimestamp());const y=Ff(l,u.expectedCount);y!==null&&(d.expectedCount=y)}return d})(this.serializer,e);const i=FC(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=zf(this.serializer),t.removeTarget=e,this.K_(t)}}class Ck extends Nw{constructor(e,t,i,o,l,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,u),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=LC(e.writeResults,e.commitTime),i=gr(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=zf(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>OC(this.serializer,i)))};this.K_(t)}}/**
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
 */class kk{}class Pk extends kk{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new se(K.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,u])=>this.connection.Wo(e,Uf(t,i),o,l,u))).catch((l=>{throw l.name==="FirebaseError"?(l.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new se(K.UNKNOWN,l.toString())}))}jo(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.jo(e,Uf(t,i),o,u,d,l))).catch((u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new se(K.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function bk(n,e,t,i){return new Pk(n,e,t,i)}class Nk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Qr(t),this.aa=!1):oe("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const wr="RemoteStore";class Dk{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new qi(1e3),this.Va=new qi(1001),this.da=new Set,this.ma=[],this.fa=l,this.fa.Mo((u=>{i.enqueueAndForget((async()=>{Bs(this)&&(oe(wr,"Restarting streams for network reachability change."),await(async function(p){const y=Ie(p);y.da.add(4),await jl(y),y.ga.set("Unknown"),y.da.delete(4),await yh(y)})(this))}))})),this.ga=new Nk(i,o)}}async function yh(n){if(Bs(n))for(const e of n.ma)await e(!0)}async function jl(n){for(const e of n.ma)await e(!1)}function qf(n,e){return n.Ea.get(e)||void 0}function Dw(n,e){const t=Ie(n),i=qf(t,e.targetId);if(i!==void 0&&t.Ia.has(i))return;const o=(function(d,p){const y=qf(d,p);y!==void 0&&d.Ra.delete(y);const _=(function(I,V){return V%2!=0?I.Va.next():I.Aa.next()})(d,p);return d.Ea.set(p,_),d.Ra.set(_,p),_})(t,e.targetId);oe(wr,"remoteStoreListen mapping SDK target ID to remote",e.targetId,o);const l=new zr(e.target,o,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(o,l),Op(t)?Dp(t):ra(t).O_()&&Np(t,l)}function bp(n,e){const t=Ie(n),i=ra(t),o=qf(t,e);oe(wr,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,o),t.Ia.delete(o),t.Ea.delete(e),t.Ra.delete(o),i.O_()&&Ow(t,o),t.Ia.size===0&&(i.O_()?i.L_():Bs(t)&&t.ga.set("Unknown"))}function Np(n,e){if(n.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=n.Ra.get(e.targetId);if(t===void 0)return void oe(wr,"SDK target ID not found for remote ID: "+e.targetId);const i=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(i)}ra(n).Z_(e)}function Ow(n,e){n.pa.$e(e),ra(n).X_(e)}function Dp(n){n.pa=new RC({getRemoteKeysForTarget:e=>{const t=n.Ra.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):be()},At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ra(n).start(),n.ga.ua()}function Op(n){return Bs(n)&&!ra(n).x_()&&n.Ia.size>0}function Bs(n){return Ie(n).da.size===0}function Lw(n){n.pa=void 0}async function Ok(n){n.ga.set("Online")}async function Lk(n){n.Ia.forEach(((e,t)=>{Np(n,e)}))}async function Vk(n,e){Lw(n),Op(n)?(n.ga.ha(e),Dp(n)):n.ga.set("Unknown")}async function Mk(n,e,t){if(n.ga.set("Online"),e instanceof _w&&e.state===2&&e.cause)try{await(async function(o,l){const u=l.cause;for(const d of l.targetIds){if(o.Ia.has(d)){const p=o.Ra.get(d);p!==void 0&&(await o.remoteSyncer.rejectListen(p,u),o.Ea.delete(p),o.Ra.delete(d)),o.Ia.delete(d)}o.pa.removeTarget(d)}})(n,e)}catch(i){oe(wr,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Gc(n,i)}else if(e instanceof Rc?n.pa.Xe(e):e instanceof yw?n.pa.st(e):n.pa.tt(e),!t.isEqual(Te.min()))try{const i=await Pw(n.localStore);t.compareTo(i)>=0&&await(function(l,u){const d=l.pa.Tt(u);d.targetChanges.forEach(((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const x=l.Ia.get(_);x&&l.Ia.set(_,x.withResumeToken(y.resumeToken,u))}})),d.targetMismatches.forEach(((y,_)=>{const x=l.Ia.get(y);if(!x)return;l.Ia.set(y,x.withResumeToken(Mt.EMPTY_BYTE_STRING,x.snapshotVersion)),Ow(l,y);const I=new zr(x.target,y,_,x.sequenceNumber);Np(l,I)}));const p=(function(_,x){const I=new Map;x.targetChanges.forEach(((L,F)=>{const N=_.Ra.get(F);N!==void 0&&I.set(N,L)}));let V=new nt(Pe);return x.targetMismatches.forEach(((L,F)=>{const N=_.Ra.get(L);N!==void 0&&(V=V.insert(N,F))})),new Vl(x.snapshotVersion,I,V,x.documentUpdates,x.resolvedLimboDocuments)})(l,d);return l.remoteSyncer.applyRemoteEvent(p)})(n,t)}catch(i){oe(wr,"Failed to raise snapshot:",i),await Gc(n,i)}}async function Gc(n,e,t){if(!ta(e))throw e;n.da.add(1),await jl(n),n.ga.set("Offline"),t||(t=()=>Pw(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{oe(wr,"Retrying IndexedDB access"),await t(),n.da.delete(1),await yh(n)}))}function Vw(n,e){return e().catch((t=>Gc(n,t,e)))}async function _h(n){const e=Ie(n),t=Wi(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:_p;for(;jk(e);)try{const o=await _k(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,Fk(e,o)}catch(o){await Gc(e,o)}Mw(e)&&jw(e)}function jk(n){return Bs(n)&&n.Ta.length<10}function Fk(n,e){n.Ta.push(e);const t=Wi(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Mw(n){return Bs(n)&&!Wi(n).x_()&&n.Ta.length>0}function jw(n){Wi(n).start()}async function Uk(n){Wi(n).ra()}async function Bk(n){const e=Wi(n);for(const t of n.Ta)e.ea(t.mutations)}async function zk(n,e,t){const i=n.Ta.shift(),o=Sp.from(i,e,t);await Vw(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await _h(n)}async function $k(n,e){e&&Wi(n).Y_&&await(async function(i,o){if((function(u){return TC(u)&&u!==K.ABORTED})(o.code)){const l=i.Ta.shift();Wi(i).B_(),await Vw(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await _h(i)}})(n,e),Mw(n)&&jw(n)}async function F_(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),oe(wr,"RemoteStore received new credentials");const i=Bs(t);t.da.add(3),await jl(t),i&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await yh(t)}async function Hk(n,e){const t=Ie(n);e?(t.da.delete(2),await yh(t)):e||(t.da.add(2),await jl(t),t.ga.set("Unknown"))}function ra(n){return n.ya||(n.ya=(function(t,i,o){const l=Ie(t);return l.sa(),new Ak(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:Ok.bind(null,n),Yo:Lk.bind(null,n),t_:Vk.bind(null,n),H_:Mk.bind(null,n)}),n.ma.push((async e=>{e?(n.ya.B_(),Op(n)?Dp(n):n.ga.set("Unknown")):(await n.ya.stop(),Lw(n))}))),n.ya}function Wi(n){return n.wa||(n.wa=(function(t,i,o){const l=Ie(t);return l.sa(),new Ck(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Uk.bind(null,n),t_:$k.bind(null,n),ta:Bk.bind(null,n),na:zk.bind(null,n)}),n.ma.push((async e=>{e?(n.wa.B_(),await _h(n)):(await n.wa.stop(),n.Ta.length>0&&(oe(wr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.wa}/**
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
 */class Lp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const u=Date.now()+i,d=new Lp(e,t,u,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vp(n,e){if(Qr("AsyncQueue",`${e}: ${n}`),ta(n))return new se(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Uo{static emptySet(e){return new Uo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||fe.comparator(t.key,i.key):(t,i)=>fe.comparator(t.key,i.key),this.keyedMap=sl(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Uo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Uo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class U_{constructor(){this.Sa=new nt(fe.comparator)}track(e){const t=e.doc.key,i=this.Sa.get(t);i?e.type!==0&&i.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&i.type!==1?this.Sa=this.Sa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Sa=this.Sa.remove(t):e.type===1&&i.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):ve(63341,{Vt:e,ba:i}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Wo{constructor(e,t,i,o,l,u,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new Wo(e,t,Uo.emptySet(t),u,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class qk{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some((e=>e.Ma()))}}class Wk{constructor(){this.queries=B_(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,i){const o=Ie(t),l=o.queries;o.queries=B_(),l.forEach(((u,d)=>{for(const p of d.va)p.onError(i)}))})(this,new se(K.ABORTED,"Firestore shutting down"))}}function B_(){return new Us((n=>rw(n)),dh)}async function Mp(n,e){const t=Ie(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Fa()&&e.Ma()&&(i=2):(l=new qk,i=e.Ma()?0:1);try{switch(i){case 0:l.Ca=await t.onListen(o,!0);break;case 1:l.Ca=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(u){const d=Vp(u,`Initialization of query '${No(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.va.push(e),e.Oa(t.onlineState),l.Ca&&e.Na(l.Ca)&&Fp(t)}async function jp(n,e){const t=Ie(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const u=l.va.indexOf(e);u>=0&&(l.va.splice(u,1),l.va.length===0?o=e.Ma()?0:1:!l.Fa()&&e.Ma()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Kk(n,e){const t=Ie(n);let i=!1;for(const o of e){const l=o.query,u=t.queries.get(l);if(u){for(const d of u.va)d.Na(o)&&(i=!0);u.Ca=o}}i&&Fp(t)}function Gk(n,e,t){const i=Ie(n),o=i.queries.get(e);if(o)for(const l of o.va)l.onError(t);i.queries.delete(e)}function Fp(n){n.xa.forEach((e=>{e.next()}))}var Wf,z_;(z_=Wf||(Wf={})).Ba="default",z_.Cache="cache";class Up{constructor(e,t,i){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=i||{}}Na(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Wo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const i=t!=="Offline";return(!this.options.Wa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=Wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Wf.Cache}}/**
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
 */class Fw{constructor(e){this.key=e}}class Uw{constructor(e){this.key=e}}class Qk{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=be(),this.mutatedKeys=be(),this.iu=iw(e),this.su=new Uo(this.iu)}get ou(){return this.tu}_u(e,t){const i=t?t.au:new U_,o=t?t.su:this.su;let l=t?t.mutatedKeys:this.mutatedKeys,u=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((_,x)=>{const I=o.get(_),V=fh(this.query,x)?x:null,L=!!I&&this.mutatedKeys.has(I.key),F=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let N=!1;I&&V?I.data.isEqual(V.data)?L!==F&&(i.track({type:3,doc:V}),N=!0):this.uu(I,V)||(i.track({type:2,doc:V}),N=!0,(p&&this.iu(V,p)>0||y&&this.iu(V,y)<0)&&(d=!0)):!I&&V?(i.track({type:0,doc:V}),N=!0):I&&!V&&(i.track({type:1,doc:I}),N=!0,(p||y)&&(d=!0)),N&&(V?(u=u.add(V),l=F?l.add(_):l.delete(_)):(u=u.delete(_),l=l.delete(_)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),l=l.delete(_.key),i.track({type:1,doc:_})}return{su:u,au:i,bs:d,mutatedKeys:l}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const u=e.au.Da();u.sort(((_,x)=>(function(V,L){const F=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{Vt:N})}};return F(V)-F(L)})(_.type,x.type)||this.iu(_.doc,x.doc))),this.cu(i),o=o??!1;const d=t&&!o?this.lu():[],p=this.ru.size===0&&this.current&&!o?1:0,y=p!==this.nu;return this.nu=p,u.length!==0||y?{snapshot:new Wo(this.query,e.su,l,u,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),hu:d}:{hu:d}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new U_,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach((t=>this.tu=this.tu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.tu=this.tu.delete(t))),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=be(),this.su.forEach((i=>{this.Pu(i.key)&&(this.ru=this.ru.add(i.key))}));const t=[];return e.forEach((i=>{this.ru.has(i)||t.push(new Uw(i))})),this.ru.forEach((i=>{e.has(i)||t.push(new Fw(i))})),t}Tu(e){this.tu=e.ks,this.ru=be();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return Wo.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Bp="SyncEngine";class Jk{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Yk{constructor(e){this.key=e,this.Eu=!1}}class Xk{constructor(e,t,i,o,l,u){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=u,this.Ru={},this.Au=new Us((d=>rw(d)),dh),this.Vu=new Map,this.du=new Set,this.mu=new nt(fe.comparator),this.fu=new Map,this.gu=new Ap,this.pu={},this.yu=new Map,this.wu=qi.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function Zk(n,e,t=!0){const i=Ww(n);let o;const l=i.Au.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Iu()):o=await Bw(i,e,t,!0),o}async function eP(n,e){const t=Ww(n);await Bw(t,e,!0,!1)}async function Bw(n,e,t,i){const o=await vk(n.localStore,mr(e)),l=o.targetId,u=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await tP(n,e,l,u==="current",o.resumeToken)),n.isPrimaryClient&&t&&Dw(n.remoteStore,o),d}async function tP(n,e,t,i,o){n.bu=(x,I,V)=>(async function(F,N,Q,J){let re=N.view._u(Q);re.bs&&(re=await O_(F.localStore,N.query,!1).then((({documents:k})=>N.view._u(k,re))));const me=J&&J.targetChanges.get(N.targetId),_e=J&&J.targetMismatches.get(N.targetId)!=null,we=N.view.applyChanges(re,F.isPrimaryClient,me,_e);return H_(F,N.targetId,we.hu),we.snapshot})(n,x,I,V);const l=await O_(n.localStore,e,!0),u=new Qk(e,l.ks),d=u._u(l.documents),p=Ml.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=u.applyChanges(d,n.isPrimaryClient,p);H_(n,t,y.hu);const _=new Jk(e,t,u);return n.Au.set(e,_),n.Vu.has(t)?n.Vu.get(t).push(e):n.Vu.set(t,[e]),y.snapshot}async function nP(n,e,t){const i=Ie(n),o=i.Au.get(e),l=i.Vu.get(o.targetId);if(l.length>1)return i.Vu.set(o.targetId,l.filter((u=>!dh(u,e)))),void i.Au.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await $f(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&bp(i.remoteStore,o.targetId),Kf(i,o.targetId)})).catch(ea)):(Kf(i,o.targetId),await $f(i.localStore,o.targetId,!0))}async function rP(n,e){const t=Ie(n),i=t.Au.get(e),o=t.Vu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),bp(t.remoteStore,i.targetId))}async function iP(n,e,t){const i=hP(n);try{const o=await(function(u,d){const p=Ie(u),y=Ze.now(),_=d.reduce(((V,L)=>V.add(L.key)),be());let x,I;return p.persistence.runTransaction("Locally write mutations","readwrite",(V=>{let L=Jr(),F=be();return p.xs.getEntries(V,_).next((N=>{L=N,L.forEach(((Q,J)=>{J.isValidDocument()||(F=F.add(Q))}))})).next((()=>p.localDocuments.getOverlayedDocuments(V,L))).next((N=>{x=N;const Q=[];for(const J of d){const re=_C(J,x.get(J.key).overlayedDocument);re!=null&&Q.push(new Xi(J.key,re,Q0(re.value.mapValue),$n.exists(!0)))}return p.mutationQueue.addMutationBatch(V,y,Q,d)})).next((N=>{I=N;const Q=N.applyToLocalDocumentSet(x,F);return p.documentOverlayCache.saveOverlays(V,N.batchId,Q)}))})).then((()=>({batchId:I.batchId,changes:ow(x)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(u,d,p){let y=u.pu[u.currentUser.toKey()];y||(y=new nt(Pe)),y=y.insert(d,p),u.pu[u.currentUser.toKey()]=y})(i,o.batchId,t),await Fl(i,o.changes),await _h(i.remoteStore)}catch(o){const l=Vp(o,"Failed to persist write");t.reject(l)}}async function zw(n,e){const t=Ie(n);try{const i=await gk(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const u=t.fu.get(l);u&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?u.Eu=!0:o.modifiedDocuments.size>0?ze(u.Eu,14607):o.removedDocuments.size>0&&(ze(u.Eu,42227),u.Eu=!1))})),await Fl(t,i,e)}catch(i){await ea(i)}}function $_(n,e,t){const i=Ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Au.forEach(((l,u)=>{const d=u.view.Oa(e);d.snapshot&&o.push(d.snapshot)})),(function(u,d){const p=Ie(u);p.onlineState=d;let y=!1;p.queries.forEach(((_,x)=>{for(const I of x.va)I.Oa(d)&&(y=!0)})),y&&Fp(p)})(i.eventManager,e),o.length&&i.Ru.H_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function sP(n,e,t){const i=Ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.fu.get(e),l=o&&o.key;if(l){let u=new nt(fe.comparator);u=u.insert(l,Wt.newNoDocument(l,Te.min()));const d=be().add(l),p=new Vl(Te.min(),new Map,new nt(Pe),u,d);await zw(i,p),i.mu=i.mu.remove(l),i.fu.delete(e),zp(i)}else await $f(i.localStore,e,!1).then((()=>Kf(i,e,t))).catch(ea)}async function oP(n,e){const t=Ie(n),i=e.batch.batchId;try{const o=await mk(t.localStore,e);Hw(t,i,null),$w(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Fl(t,o)}catch(o){await ea(o)}}async function aP(n,e,t){const i=Ie(n);try{const o=await(function(u,d){const p=Ie(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let _;return p.mutationQueue.lookupMutationBatch(y,d).next((x=>(ze(x!==null,37113),_=x.keys(),p.mutationQueue.removeMutationBatch(y,x)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,_,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,_))).next((()=>p.localDocuments.getDocuments(y,_)))}))})(i.localStore,e);Hw(i,e,t),$w(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Fl(i,o)}catch(o){await ea(o)}}function $w(n,e){(n.yu.get(e)||[]).forEach((t=>{t.resolve()})),n.yu.delete(e)}function Hw(n,e,t){const i=Ie(n);let o=i.pu[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.pu[i.currentUser.toKey()]=o}}function Kf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Vu.get(e))n.Au.delete(i),t&&n.Ru.Du(i,t);n.Vu.delete(e),n.isPrimaryClient&&n.gu.Gr(e).forEach((i=>{n.gu.containsKey(i)||qw(n,i)}))}function qw(n,e){n.du.delete(e.path.canonicalString());const t=n.mu.get(e);t!==null&&(bp(n.remoteStore,t),n.mu=n.mu.remove(e),n.fu.delete(t),zp(n))}function H_(n,e,t){for(const i of t)i instanceof Fw?(n.gu.addReference(i.key,e),lP(n,i)):i instanceof Uw?(oe(Bp,"Document no longer in limbo: "+i.key),n.gu.removeReference(i.key,e),n.gu.containsKey(i.key)||qw(n,i.key)):ve(19791,{Cu:i})}function lP(n,e){const t=e.key,i=t.path.canonicalString();n.mu.get(t)||n.du.has(i)||(oe(Bp,"New document in limbo: "+t),n.du.add(i),zp(n))}function zp(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const e=n.du.values().next().value;n.du.delete(e);const t=new fe(Qe.fromString(e)),i=n.wu.next();n.fu.set(i,new Yk(t)),n.mu=n.mu.insert(t,i),Dw(n.remoteStore,new zr(mr(hh(t.path)),i,"TargetPurposeLimboResolution",lh.ce))}}async function Fl(n,e,t){const i=Ie(n),o=[],l=[],u=[];i.Au.isEmpty()||(i.Au.forEach(((d,p)=>{u.push(i.bu(p,e,t).then((y=>{if((y||t)&&i.isPrimaryClient){const _=y?!y.fromCache:t?.targetChanges.get(p.targetId)?.current;i.sharedClientState.updateQueryState(p.targetId,_?"current":"not-current")}if(y){o.push(y);const _=kp.Es(p.targetId,y);l.push(_)}})))})),await Promise.all(u),i.Ru.H_(o),await(async function(p,y){const _=Ie(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(x=>G.forEach(y,(I=>G.forEach(I.Ts,(V=>_.persistence.referenceDelegate.addReference(x,I.targetId,V))).next((()=>G.forEach(I.Is,(V=>_.persistence.referenceDelegate.removeReference(x,I.targetId,V)))))))))}catch(x){if(!ta(x))throw x;oe(Pp,"Failed to update sequence numbers: "+x)}for(const x of y){const I=x.targetId;if(!x.fromCache){const V=_.vs.get(I),L=V.snapshotVersion,F=V.withLastLimboFreeSnapshotVersion(L);_.vs=_.vs.insert(I,F)}}})(i.localStore,l))}async function uP(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){oe(Bp,"User change. New user:",e.toKey());const i=await kw(t.localStore,e);t.currentUser=e,(function(l,u){l.yu.forEach((d=>{d.forEach((p=>{p.reject(new se(K.CANCELLED,u))}))})),l.yu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Fl(t,i.Ns)}}function cP(n,e){const t=Ie(n),i=t.fu.get(e);if(i&&i.Eu)return be().add(i.key);{let o=be();const l=t.Vu.get(e);if(!l)return o;for(const u of l){const d=t.Au.get(u);o=o.unionWith(d.view.ou)}return o}}function Ww(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=zw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sP.bind(null,e),e.Ru.H_=Kk.bind(null,e.eventManager),e.Ru.Du=Gk.bind(null,e.eventManager),e}function hP(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aP.bind(null,e),e}class Qc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gh(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return pk(this.persistence,new hk,e.initialUser,this.serializer)}xu(e){return new Cw(Cp.Vi,this.serializer)}Mu(e){return new Ek}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qc.provider={build:()=>new Qc};class dP extends Qc{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){ze(this.persistence.referenceDelegate instanceof Kc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new JC(i,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?sn.withCacheSize(this.cacheSizeBytes):sn.DEFAULT;return new Cw((i=>Kc.Vi(i,t)),this.serializer)}}class Gf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>$_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=uP.bind(null,this.syncEngine),await Hk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Wk})()}createDatastore(e){const t=gh(e.databaseInfo.databaseId),i=Rk(e.databaseInfo);return bk(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,u,d){return new Dk(i,o,l,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>$_(this.syncEngine,t,0)),(function(){return M_.v()?new M_:new xk})())}createSyncEngine(e,t){return(function(o,l,u,d,p,y,_){const x=new Xk(o,l,u,d,p,y);return _&&(x.Su=!0),x})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const i=Ie(t);oe(wr,"RemoteStore shutting down."),i.da.add(5),await jl(i),i.fa.shutdown(),i.ga.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Gf.provider={build:()=>new Gf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $p{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Qr("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ki="FirestoreClient";class fP{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=o,this.user=qt.UNAUTHENTICATED,this.clientId=yp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async u=>{oe(Ki,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(i,(u=>(oe(Ki,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Vp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function _f(n,e){n.asyncQueue.verifyOperationInProgress(),oe(Ki,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await kw(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function q_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await pP(n);oe(Ki,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>F_(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>F_(e.remoteStore,o))),n._onlineComponents=e}async function pP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){oe(Ki,"Using user provided OfflineComponentProvider");try{await _f(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ms("Error using user provided cache. Falling back to memory cache: "+t),await _f(n,new Qc)}}else oe(Ki,"Using default OfflineComponentProvider"),await _f(n,new dP(void 0));return n._offlineComponents}async function Kw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(oe(Ki,"Using user provided OnlineComponentProvider"),await q_(n,n._uninitializedComponentsProvider._online)):(oe(Ki,"Using default OnlineComponentProvider"),await q_(n,new Gf))),n._onlineComponents}function mP(n){return Kw(n).then((e=>e.syncEngine))}async function Jc(n){const e=await Kw(n),t=e.eventManager;return t.onListen=Zk.bind(null,e.syncEngine),t.onUnlisten=nP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=eP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=rP.bind(null,e.syncEngine),t}function gP(n,e,t,i){const o=new $p(i),l=new Up(e,o,t);return n.asyncQueue.enqueueAndForget((async()=>Mp(await Jc(n),l))),()=>{o.Ku(),n.asyncQueue.enqueueAndForget((async()=>jp(await Jc(n),l)))}}function yP(n,e,t={}){const i=new Hr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,u,d,p,y){const _=new $p({next:I=>{_.Ku(),u.enqueueAndForget((()=>jp(l,x)));const V=I.docs.has(d);!V&&I.fromCache?y.reject(new se(K.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&I.fromCache&&p&&p.source==="server"?y.reject(new se(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),x=new Up(hh(d.path),_,{includeMetadataChanges:!0,Wa:!0});return Mp(l,x)})(await Jc(n),n.asyncQueue,e,t,i))),i.promise}function _P(n,e,t={}){const i=new Hr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,u,d,p,y){const _=new $p({next:I=>{_.Ku(),u.enqueueAndForget((()=>jp(l,x))),I.fromCache&&p.source==="server"?y.reject(new se(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(I)},error:I=>y.reject(I)}),x=new Up(d,_,{includeMetadataChanges:!0,Wa:!0});return Mp(l,x)})(await Jc(n),n.asyncQueue,e,t,i))),i.promise}function vP(n,e){const t=new Hr;return n.asyncQueue.enqueueAndForget((async()=>iP(await mP(n),e,t))),t.promise}/**
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
 */function Gw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP="ComponentProvider",W_=new Map;function EP(n,e,t,i,o){return new FA(n,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,Gw(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="firestore.googleapis.com",K_=!0;class G_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new se(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Qw,this.ssl=K_}else this.host=e.host,this.ssl=e.ssl??K_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Aw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<GC)throw new se(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gw(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new se(K.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new se(K.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new se(K.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new G_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new G_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new _A;switch(i.type){case"firstParty":return new xA(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new se(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=W_.get(t);i&&(oe(wP,"Removing Datastore"),W_.delete(t),i.terminate())})(this),Promise.resolve()}}function xP(n,e,t,i={}){n=vn(n,vh);const o=kl(e),l=n._getSettings(),u={...l,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;o&&zv(`https://${d}`),l.host!==Qw&&l.host!==d&&Ms("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:o,emulatorOptions:i};if(!Ns(p,u)&&(n._setSettings(p),i.mockUserToken)){let y,_;if(typeof i.mockUserToken=="string")y=i.mockUserToken,_=qt.MOCK_USER;else{y=OS(i.mockUserToken,n._app?.options.projectId);const x=i.mockUserToken.sub||i.mockUserToken.user_id;if(!x)throw new se(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new qt(x)}n._authCredentials=new vA(new M0(y,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Zr(this.firestore,e,this._query)}}class lt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}toJSON(){return{type:lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Ol(t,lt._jsonSchema))return new lt(e,i||null,new fe(Qe.fromString(t.referencePath)))}}lt._jsonSchemaVersion="firestore/documentReference/1.0",lt._jsonSchema={type:vt("string",lt._jsonSchemaVersion),referencePath:vt("string")};class Ui extends Zr{constructor(e,t,i){super(e,t,hh(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new fe(e))}withConverter(e){return new Ui(this.firestore,e,this._path)}}function Hp(n,e,...t){if(n=kt(n),j0("collection","path",e),n instanceof vh){const i=Qe.fromString(e,...t);return a_(i),new Ui(n,null,i)}{if(!(n instanceof lt||n instanceof Ui))throw new se(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return a_(i),new Ui(n.firestore,null,i)}}function Yc(n,e,...t){if(n=kt(n),arguments.length===1&&(e=yp.newId()),j0("doc","path",e),n instanceof vh){const i=Qe.fromString(e,...t);return o_(i),new lt(n,null,new fe(i))}{if(!(n instanceof lt||n instanceof Ui))throw new se(K.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return o_(i),new lt(n.firestore,n instanceof Ui?n.converter:null,new fe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_="AsyncQueue";class J_{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new bw(this,"async_queue_retry"),this.lc=()=>{const i=yf();i&&oe(Q_,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.hc=e;const t=yf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=yf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise((()=>{}));const t=new Hr;return this.Tc((()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.rc.push(e),this.Ic())))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!ta(e))throw e;oe(Q_,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_((()=>this.Ic()))}}Tc(e){const t=this.hc.then((()=>(this.ac=!0,e().catch((i=>{throw this._c=i,this.ac=!1,Qr("INTERNAL UNHANDLED ERROR: ",Y_(i)),i})).then((i=>(this.ac=!1,i))))));return this.hc=t,t}enqueueAfterDelay(e,t,i){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const o=Lp.createAndSchedule(this,e,t,i,(l=>this.Ec(l)));return this.oc.push(o),o}Pc(){this._c&&ve(47125,{Rc:Y_(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then((()=>{this.oc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()}))}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function Y_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Gi extends vh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new J_,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new J_(e),this._firestoreClient=void 0,await e}}}function TP(n,e){const t=typeof n=="object"?n:Wv(),i=typeof n=="string"?n:Bc,o=up(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=NS("firestore");l&&xP(o,...l)}return o}function wh(n){if(n._terminated)throw new se(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||SP(n),n._firestoreClient}function SP(n){const e=n._freezeSettings(),t=EP(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new fP(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(o){const l=o?._online.build();return{_offline:o?._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cn(Mt.fromBase64String(e))}catch(t){throw new se(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Cn(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Cn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ol(e,Cn._jsonSchema))return Cn.fromBase64String(e.bytes)}}Cn._jsonSchemaVersion="firestore/bytes/1.0",Cn._jsonSchema={type:vt("string",Cn._jsonSchemaVersion),bytes:vt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e){this._methodName=e}}/**
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
 */class yr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:yr._jsonSchemaVersion}}static fromJSON(e){if(Ol(e,yr._jsonSchema))return new yr(e.latitude,e.longitude)}}yr._jsonSchemaVersion="firestore/geoPoint/1.0",yr._jsonSchema={type:vt("string",yr._jsonSchemaVersion),latitude:vt("number"),longitude:vt("number")};/**
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
 */class Hn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Hn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ol(e,Hn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Hn(e.vectorValues);throw new se(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Hn._jsonSchemaVersion="firestore/vectorValue/1.0",Hn._jsonSchema={type:vt("string",Hn._jsonSchemaVersion),vectorValues:vt("object")};/**
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
 */const IP=/^__.*__$/;class RP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Xi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ll(e,this.data,t,this.fieldTransforms)}}class Jw{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Xi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Yw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{dataSource:n})}}class Wp{constructor(e,t,i,o,l,u){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.fc(),this.fieldTransforms=l||[],this.fieldMask=u||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Wp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){const t=this.path?.child(e),i=this.i({path:t,arrayElement:!1});return i.wc(e),i}Sc(e){const t=this.path?.child(e),i=this.i({path:t,arrayElement:!1});return i.fc(),i}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Xc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Yw(this.dataSource)&&IP.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class AP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||gh(e)}V(e,t,i,o=!1){return new Wp({dataSource:e,methodName:t,targetDoc:i,path:Vt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xh(n){const e=n._freezeSettings(),t=gh(n._databaseId);return new AP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Xw(n,e,t,i,o,l={}){const u=n.V(l.merge||l.mergeFields?2:0,e,t,o);Gp("Data must be an object, but it was:",u,i);const d=Zw(i,u);let p,y;if(l.merge)p=new _n(u.fieldMask),y=u.fieldTransforms;else if(l.mergeFields){const _=[];for(const x of l.mergeFields){const I=Ko(e,x,t);if(!u.contains(I))throw new se(K.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);nE(_,I)||_.push(I)}p=new _n(_),y=u.fieldTransforms.filter((x=>p.covers(x.field)))}else p=null,y=u.fieldTransforms;return new RP(new on(d),p,y)}class Th extends Eh{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Th}}class Kp extends Eh{_toFieldTransform(e){return new pC(e.path,new wl)}isEqual(e){return e instanceof Kp}}function CP(n,e,t,i){const o=n.V(1,e,t);Gp("Data must be an object, but it was:",o,i);const l=[],u=on.empty();Yi(i,((p,y)=>{const _=tE(e,p,t);y=kt(y);const x=o.Sc(_);if(y instanceof Th)l.push(_);else{const I=Ul(y,x);I!=null&&(l.push(_),u.set(_,I))}}));const d=new _n(l);return new Jw(u,d,o.fieldTransforms)}function kP(n,e,t,i,o,l){const u=n.V(1,e,t),d=[Ko(e,i,t)],p=[o];if(l.length%2!=0)throw new se(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)d.push(Ko(e,l[I])),p.push(l[I+1]);const y=[],_=on.empty();for(let I=d.length-1;I>=0;--I)if(!nE(y,d[I])){const V=d[I];let L=p[I];L=kt(L);const F=u.Sc(V);if(L instanceof Th)y.push(V);else{const N=Ul(L,F);N!=null&&(y.push(V),_.set(V,N))}}const x=new _n(y);return new Jw(_,x,u.fieldTransforms)}function PP(n,e,t,i=!1){return Ul(t,n.V(i?4:3,e))}function Ul(n,e){if(eE(n=kt(n)))return Gp("Unsupported field value:",e,n),Zw(n,e);if(n instanceof Eh)return(function(i,o){if(!Yw(o.dataSource))throw o.Dc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Dc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return(function(i,o){const l=[];let u=0;for(const d of i){let p=Ul(d,o.bc(u));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),u++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=kt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return hC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Ze.fromDate(i);return{timestampValue:Wc(o.serializer,l)}}if(i instanceof Ze){const l=new Ze(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Wc(o.serializer,l)}}if(i instanceof yr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Cn)return{bytesValue:vw(o.serializer,i._byteString)};if(i instanceof lt){const l=o.databaseId,u=i.firestore._databaseId;if(!u.isEqual(l))throw o.Dc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Rp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Hn)return(function(u,d){const p=u instanceof Hn?u.toArray():u;return{mapValue:{fields:{[K0]:{stringValue:G0},[zc]:{arrayValue:{values:p.map((_=>{if(typeof _!="number")throw d.Dc("VectorValues must only contain numeric values.");return Tp(d.serializer,_)}))}}}}}})(i,o);if(Rw(i))return i._toProto(o.serializer);throw o.Dc(`Unsupported field value: ${ah(i)}`)})(n,e)}function Zw(n,e){const t={};return B0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yi(n,((i,o)=>{const l=Ul(o,e.yc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function eE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ze||n instanceof yr||n instanceof Cn||n instanceof lt||n instanceof Eh||n instanceof Hn||Rw(n))}function Gp(n,e,t){if(!eE(t)||!F0(t)){const i=ah(t);throw i==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+i)}}function Ko(n,e,t){if((e=kt(e))instanceof qp)return e._internalPath;if(typeof e=="string")return tE(n,e);throw Xc("Field path arguments must be of type string or ",n,!1,void 0,t)}const bP=new RegExp("[~\\*/\\[\\]]");function tE(n,e,t){if(e.search(bP)>=0)throw Xc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new qp(...e.split("."))._internalPath}catch{throw Xc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Xc(n,e,t,i,o){const l=i&&!i.isEmpty(),u=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||u)&&(p+=" (found",l&&(p+=` in field ${i}`),u&&(p+=` in document ${o}`),p+=")"),new se(K.INVALID_ARGUMENT,d+n+p)}function nE(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{convertValue(e,t="none"){switch(Hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Yi(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){const t=e.fields?.[zc].arrayValue?.values?.map((i=>dt(i.doubleValue)));return new Hn(t)}convertGeoPoint(e){return new yr(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=ch(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(gl(e));default:return null}}convertTimestamp(e){const t=zi(e);return new Ze(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Qe.fromString(e);ze(Iw(i),9688,{name:e});const o=new yl(i.get(1),i.get(3)),l=new fe(i.popFirst(5));return o.isEqual(t)||Qr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */class Qp extends NP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,t)}}function DP(){return new Kp("serverTimestamp")}const X_="@firebase/firestore",Z_="4.14.1";/**
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
 */function ev(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(Ko("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class OP extends rE{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new se(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jp{}class Yp extends Jp{}function LP(n,e,...t){let i=[];e instanceof Jp&&i.push(e),i=i.concat(t),(function(l){const u=l.filter((p=>p instanceof Zp)).length,d=l.filter((p=>p instanceof Xp)).length;if(u>1||u>0&&d>0)throw new se(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class Xp extends Yp{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Xp(e,t,i)}_apply(e){const t=this._parse(e);return sE(e._query,t),new Zr(e.firestore,e.converter,jf(e._query,t))}_parse(e){const t=xh(e.firestore);return(function(l,u,d,p,y,_,x){let I;if(y.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new se(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){nv(x,_);const L=[];for(const F of x)L.push(tv(p,l,F));I={arrayValue:{values:L}}}else I=tv(p,l,x)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||nv(x,_),I=PP(d,u,x,_==="in"||_==="not-in");return _t.create(y,_,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Zp extends Jp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Zp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:qn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let u=o;const d=l.getFlattenedFilters();for(const p of d)sE(u,p),u=jf(u,p)})(e._query,t),new Zr(e.firestore,e.converter,jf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class em extends Yp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new em(e,t)}_apply(e){const t=(function(o,l,u){if(o.startAt!==null)throw new se(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new se(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vl(l,u)})(e._query,this._field,this._direction);return new Zr(e.firestore,e.converter,rC(e._query,t))}}function VP(n,e="asc"){const t=e,i=Ko("orderBy",n);return em._create(i,t)}class tm extends Yp{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new tm(e,t,i)}_apply(e){return new Zr(e.firestore,e.converter,Hc(e._query,this._limit,this._limitType))}}function MP(n){return tm._create("limit",n,"F")}function tv(n,e,t){if(typeof(t=kt(t))=="string"){if(t==="")throw new se(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nw(e)&&t.indexOf("/")!==-1)throw new se(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Qe.fromString(t));if(!fe.isDocumentKey(i))throw new se(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return m_(n,new fe(i))}if(t instanceof lt)return m_(n,t._key);throw new se(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ah(t)}.`)}function nv(n,e){if(!Array.isArray(n)||n.length===0)throw new se(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sE(n,e){const t=(function(o,l){for(const u of o)for(const d of u.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function oE(n,e,t){let i;return i=n?n.toFirestore(e):e,i}class al{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ks extends rE{constructor(e,t,i,o,l,u){super(e,t,i,o,u),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ac(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Ko("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ks._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ks._jsonSchemaVersion="firestore/documentSnapshot/1.0",ks._jsonSchema={type:vt("string",ks._jsonSchemaVersion),bundleSource:vt("string","DocumentSnapshot"),bundleName:vt("string"),bundle:vt("string")};class Ac extends ks{data(e={}){return super.data(e)}}class Ps{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new al(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Ac(this._firestore,this._userDataWriter,i.key,i,new al(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let u=0;return o._snapshot.docChanges.map((d=>{const p=new Ac(o._firestore,o._userDataWriter,d.doc.key,d.doc,new al(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}}))}{let u=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const p=new Ac(o._firestore,o._userDataWriter,d.doc.key,d.doc,new al(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,_=-1;return d.type!==0&&(y=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),_=u.indexOf(d.doc.key)),{type:jP(d.type),doc:p,oldIndex:y,newIndex:_}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ps._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=yp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function jP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:n})}}/**
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
 */Ps._jsonSchemaVersion="firestore/querySnapshot/1.0",Ps._jsonSchema={type:vt("string",Ps._jsonSchemaVersion),bundleSource:vt("string","QuerySnapshot"),bundleName:vt("string"),bundle:vt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(n){n=vn(n,lt);const e=vn(n.firestore,Gi),t=wh(e);return yP(t,n._key).then((i=>aE(e,n,i)))}function UP(n){n=vn(n,Zr);const e=vn(n.firestore,Gi),t=wh(e),i=new Qp(e);return iE(n._query),_P(t,n._query).then((o=>new Ps(e,i,n,o)))}function BP(n,e,t){n=vn(n,lt);const i=vn(n.firestore,Gi),o=oE(n.converter,e),l=xh(i);return nm(i,[Xw(l,"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,$n.none())])}function zP(n,e,t,...i){n=vn(n,lt);const o=vn(n.firestore,Gi),l=xh(o);let u;return u=typeof(e=kt(e))=="string"||e instanceof qp?kP(l,"updateDoc",n._key,e,t,i):CP(l,"updateDoc",n._key,e),nm(o,[u.toMutation(n._key,$n.exists(!0))])}function $P(n,e){const t=vn(n.firestore,Gi),i=Yc(n),o=oE(n.converter,e),l=xh(n.firestore);return nm(t,[Xw(l,"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,$n.exists(!1))]).then((()=>i))}function HP(n,...e){n=kt(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||ev(e[i])||(t=e[i++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(ev(e[i])){const y=e[i];e[i]=y.next?.bind(y),e[i+1]=y.error?.bind(y),e[i+2]=y.complete?.bind(y)}let l,u,d;if(n instanceof lt)u=vn(n.firestore,Gi),d=hh(n._key.path),l={next:y=>{e[i]&&e[i](aE(u,n,y))},error:e[i+1],complete:e[i+2]};else{const y=vn(n,Zr);u=vn(y.firestore,Gi),d=y._query;const _=new Qp(u);l={next:x=>{e[i]&&e[i](new Ps(u,_,y,x))},error:e[i+1],complete:e[i+2]},iE(n._query)}const p=wh(u);return gP(p,d,o,l)}function nm(n,e){const t=wh(n);return vP(t,e)}function aE(n,e,t){const i=t.docs.get(e._key),o=new Qp(n);return new ks(n,o,e._key,i,new al(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){yA(Yo),Bo(new Ds("firestore",((i,{instanceIdentifier:o,options:l})=>{const u=i.getProvider("app").getImmediate(),d=new Gi(new wA(i.getProvider("auth-internal")),new TA(u,i.getProvider("app-check-internal")),UA(u,o),u);return l={useFetchStreams:t,...l},d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),Mi(X_,Z_,e),Mi(X_,Z_,"esm2020")})();const qP={apiKey:"AIzaSyC_Sv76gBPCoEvyt_Y35-_jqyWGd_71zRU",authDomain:"bloodline-app-257ff.firebaseapp.com",projectId:"bloodline-app-257ff",storageBucket:"bloodline-app-257ff.firebasestorage.app",messagingSenderId:"913270679176",appId:"1:913270679176:web:c88974b595ff54b2dba13d"},lE=qv(qP),Un=mA(lE),Go=TP(lE),WP=()=>{const[n,e]=W.useState({name:"",email:"",password:"",bloodGroup:"",city:"",phone:""}),[t,i]=W.useState(!1),[o,l]=W.useState(!1),u=Fs(),d=async p=>{p.preventDefault(),l(!0);try{const y=await eR(Un,n.email,n.password);await nR(y.user,{displayName:n.name}),await BP(Yc(Go,"users",y.user.uid),{name:n.name,email:n.email,bloodGroup:n.bloodGroup,city:n.city,phone:n.phone,uid:y.user.uid,role:"donor",createdAt:new Date}),alert("Account Created Successfully! ❤️"),u("/dashboard")}catch(y){alert("Registration Error: "+y.message)}l(!1)};return w.jsxs("div",{style:rv,children:[w.jsx("style",{children:`
        *{
          box-sizing:border-box;
        }

        .form-card{
          display:flex;
          width:100%;
          max-width:850px;
          background:#fff;
          border-radius:25px;
          overflow:hidden;
          box-shadow:0 15px 40px rgba(0,0,0,0.12);
        }

        .left-box{
          flex:1;
          background:#000;
          color:#fff;
          padding:40px;
          display:flex;
          flex-direction:column;
          justify-content:center;
        }

        .right-box{
          flex:1.4;
          padding:40px;
        }

        input, select{
          width:100%;
          padding:14px;
          border:none;
          background:#f1f3f8;
          border-radius:10px;
          outline:none;
          font-size:14px;
        }

        button{
          width:100%;
          padding:16px;
          background:#e63946;
          color:#fff;
          border:none;
          border-radius:10px;
          font-weight:bold;
          cursor:pointer;
          font-size:16px;
          margin-top:10px;
        }

        /* TABLET */
        @media (max-width: 992px){
          .left-box{
            padding:30px;
          }

          .right-box{
            padding:30px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px){
          .form-card{
            flex-direction:column;
            border-radius:20px;
          }

          .left-box{
            padding:25px;
            text-align:center;
          }

          .right-box{
            padding:25px;
          }

          h1{
            font-size:28px !important;
          }

          .row-flex{
            flex-direction:column !important;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px){
          .left-box,
          .right-box{
            padding:20px;
          }
        }
      `}),w.jsx("div",{style:rv,children:w.jsxs("div",{className:"form-card",children:[w.jsxs("div",{className:"left-box",children:[w.jsxs("h1",{style:{fontSize:"40px",margin:"0",fontWeight:"bold"},children:["BECOME A ",w.jsx("br",{})," ",w.jsx("span",{style:{color:"#e63946"},children:"HERO"})]}),w.jsx("p",{style:{opacity:"0.8",marginTop:"10px"},children:"Join BloodLine and save lives in your city."})]}),w.jsxs("div",{className:"right-box",children:[w.jsxs("h2",{style:{fontStyle:"italic",marginBottom:"20px",fontWeight:"bold"},children:["USER ",w.jsx("span",{style:{color:"#e63946"},children:"REGISTER"})]}),w.jsxs("form",{onSubmit:d,style:{display:"flex",flexDirection:"column",gap:"12px"},children:[w.jsx("input",{type:"text",placeholder:"Full Name",required:!0,onChange:p=>e({...n,name:p.target.value})}),w.jsx("input",{type:"email",placeholder:"Email",required:!0,onChange:p=>e({...n,email:p.target.value})}),w.jsxs("div",{className:"row-flex",style:{display:"flex",gap:"10px"},children:[w.jsxs("select",{required:!0,onChange:p=>e({...n,bloodGroup:p.target.value}),children:[w.jsx("option",{value:"",children:"Blood Group"}),["A+","A-","B+","B-","O+","O-","AB+","AB-"].map(p=>w.jsx("option",{value:p,children:p},p))]}),w.jsx("input",{type:"text",placeholder:"City (e.g. Lahore)",required:!0,onChange:p=>e({...n,city:p.target.value})})]}),w.jsx("input",{type:"tel",placeholder:"Phone Number (03xxxxxxxxx)",required:!0,onChange:p=>e({...n,phone:p.target.value})}),w.jsxs("div",{style:{position:"relative",width:"100%"},children:[w.jsx("input",{type:t?"text":"password",placeholder:"Password (Min 6 chars)",required:!0,onChange:p=>e({...n,password:p.target.value})}),w.jsx("div",{onClick:()=>i(!t),style:{position:"absolute",right:"15px",top:"50%",transform:"translateY(-50%)",cursor:"pointer",fontSize:"10px",fontWeight:"bold",color:"#e63946"},children:t?"HIDE":"SHOW"})]}),w.jsx("button",{type:"submit",disabled:o,children:o?"Creating Account...":"REGISTER NOW"})]}),w.jsxs("p",{style:{fontSize:"12px",marginTop:"20px",textAlign:"center",fontWeight:"bold"},children:["ALREADY A MEMBER?",w.jsx("span",{onClick:()=>u("/login"),style:{color:"#e63946",cursor:"pointer",textDecoration:"underline",marginLeft:"5px"},children:"LOGIN"})]})]})]})})]})},rv={minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"#f0f2f5",padding:"20px"};function uE(n,e){return function(){return n.apply(e,arguments)}}const{toString:KP}=Object.prototype,{getPrototypeOf:rm}=Object,{iterator:Sh,toStringTag:cE}=Symbol,Ih=(n=>e=>{const t=KP.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Wn=n=>(n=n.toLowerCase(),e=>Ih(e)===n),Rh=n=>e=>typeof e===n,{isArray:ia}=Array,Tl=Rh("undefined");function Bl(n){return n!==null&&!Tl(n)&&n.constructor!==null&&!Tl(n.constructor)&&an(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const hE=Wn("ArrayBuffer");function GP(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&hE(n.buffer),e}const QP=Rh("string"),an=Rh("function"),dE=Rh("number"),zl=n=>n!==null&&typeof n=="object",JP=n=>n===!0||n===!1,Cc=n=>{if(Ih(n)!=="object")return!1;const e=rm(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(cE in n)&&!(Sh in n)},YP=n=>{if(!zl(n)||Bl(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},XP=Wn("Date"),ZP=Wn("File"),eb=Wn("Blob"),tb=Wn("FileList"),nb=n=>zl(n)&&an(n.pipe),rb=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||an(n.append)&&((e=Ih(n))==="formdata"||e==="object"&&an(n.toString)&&n.toString()==="[object FormData]"))},ib=Wn("URLSearchParams"),[sb,ob,ab,lb]=["ReadableStream","Request","Response","Headers"].map(Wn),ub=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $l(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,o;if(typeof n!="object"&&(n=[n]),ia(n))for(i=0,o=n.length;i<o;i++)e.call(null,n[i],i,n);else{if(Bl(n))return;const l=t?Object.getOwnPropertyNames(n):Object.keys(n),u=l.length;let d;for(i=0;i<u;i++)d=l[i],e.call(null,n[d],d,n)}}function fE(n,e){if(Bl(n))return null;e=e.toLowerCase();const t=Object.keys(n);let i=t.length,o;for(;i-- >0;)if(o=t[i],e===o.toLowerCase())return o;return null}const Cs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,pE=n=>!Tl(n)&&n!==Cs;function Qf(){const{caseless:n}=pE(this)&&this||{},e={},t=(i,o)=>{const l=n&&fE(e,o)||o;Cc(e[l])&&Cc(i)?e[l]=Qf(e[l],i):Cc(i)?e[l]=Qf({},i):ia(i)?e[l]=i.slice():e[l]=i};for(let i=0,o=arguments.length;i<o;i++)arguments[i]&&$l(arguments[i],t);return e}const cb=(n,e,t,{allOwnKeys:i}={})=>($l(e,(o,l)=>{t&&an(o)?n[l]=uE(o,t):n[l]=o},{allOwnKeys:i}),n),hb=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),db=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},fb=(n,e,t,i)=>{let o,l,u;const d={};if(e=e||{},n==null)return e;do{for(o=Object.getOwnPropertyNames(n),l=o.length;l-- >0;)u=o[l],(!i||i(u,n,e))&&!d[u]&&(e[u]=n[u],d[u]=!0);n=t!==!1&&rm(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},pb=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},mb=n=>{if(!n)return null;if(ia(n))return n;let e=n.length;if(!dE(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},gb=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&rm(Uint8Array)),yb=(n,e)=>{const i=(n&&n[Sh]).call(n);let o;for(;(o=i.next())&&!o.done;){const l=o.value;e.call(n,l[0],l[1])}},_b=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},vb=Wn("HTMLFormElement"),wb=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,o){return i.toUpperCase()+o}),iv=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),Eb=Wn("RegExp"),mE=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};$l(t,(o,l)=>{let u;(u=e(o,l,n))!==!1&&(i[l]=u||o)}),Object.defineProperties(n,i)},xb=n=>{mE(n,(e,t)=>{if(an(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(an(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Tb=(n,e)=>{const t={},i=o=>{o.forEach(l=>{t[l]=!0})};return ia(n)?i(n):i(String(n).split(e)),t},Sb=()=>{},Ib=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function Rb(n){return!!(n&&an(n.append)&&n[cE]==="FormData"&&n[Sh])}const Ab=n=>{const e=new Array(10),t=(i,o)=>{if(zl(i)){if(e.indexOf(i)>=0)return;if(Bl(i))return i;if(!("toJSON"in i)){e[o]=i;const l=ia(i)?[]:{};return $l(i,(u,d)=>{const p=t(u,o+1);!Tl(p)&&(l[d]=p)}),e[o]=void 0,l}}return i};return t(n,0)},Cb=Wn("AsyncFunction"),kb=n=>n&&(zl(n)||an(n))&&an(n.then)&&an(n.catch),gE=((n,e)=>n?setImmediate:e?((t,i)=>(Cs.addEventListener("message",({source:o,data:l})=>{o===Cs&&l===t&&i.length&&i.shift()()},!1),o=>{i.push(o),Cs.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",an(Cs.postMessage)),Pb=typeof queueMicrotask<"u"?queueMicrotask.bind(Cs):typeof process<"u"&&process.nextTick||gE,bb=n=>n!=null&&an(n[Sh]),q={isArray:ia,isArrayBuffer:hE,isBuffer:Bl,isFormData:rb,isArrayBufferView:GP,isString:QP,isNumber:dE,isBoolean:JP,isObject:zl,isPlainObject:Cc,isEmptyObject:YP,isReadableStream:sb,isRequest:ob,isResponse:ab,isHeaders:lb,isUndefined:Tl,isDate:XP,isFile:ZP,isBlob:eb,isRegExp:Eb,isFunction:an,isStream:nb,isURLSearchParams:ib,isTypedArray:gb,isFileList:tb,forEach:$l,merge:Qf,extend:cb,trim:ub,stripBOM:hb,inherits:db,toFlatObject:fb,kindOf:Ih,kindOfTest:Wn,endsWith:pb,toArray:mb,forEachEntry:yb,matchAll:_b,isHTMLForm:vb,hasOwnProperty:iv,hasOwnProp:iv,reduceDescriptors:mE,freezeMethods:xb,toObjectSet:Tb,toCamelCase:wb,noop:Sb,toFiniteNumber:Ib,findKey:fE,global:Cs,isContextDefined:pE,isSpecCompliantForm:Rb,toJSONObject:Ab,isAsyncFn:Cb,isThenable:kb,setImmediate:gE,asap:Pb,isIterable:bb};function Ce(n,e,t,i,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),o&&(this.response=o,this.status=o.status?o.status:null)}q.inherits(Ce,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.status}}});const yE=Ce.prototype,_E={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{_E[n]={value:n}});Object.defineProperties(Ce,_E);Object.defineProperty(yE,"isAxiosError",{value:!0});Ce.from=(n,e,t,i,o,l)=>{const u=Object.create(yE);return q.toFlatObject(n,u,function(p){return p!==Error.prototype},d=>d!=="isAxiosError"),Ce.call(u,n.message,e,t,i,o),u.cause=n,u.name=n.name,l&&Object.assign(u,l),u};const Nb=null;function Jf(n){return q.isPlainObject(n)||q.isArray(n)}function vE(n){return q.endsWith(n,"[]")?n.slice(0,-2):n}function sv(n,e,t){return n?n.concat(e).map(function(o,l){return o=vE(o),!t&&l?"["+o+"]":o}).join(t?".":""):e}function Db(n){return q.isArray(n)&&!n.some(Jf)}const Ob=q.toFlatObject(q,{},null,function(e){return/^is[A-Z]/.test(e)});function Ah(n,e,t){if(!q.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=q.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(F,N){return!q.isUndefined(N[F])});const i=t.metaTokens,o=t.visitor||_,l=t.dots,u=t.indexes,p=(t.Blob||typeof Blob<"u"&&Blob)&&q.isSpecCompliantForm(e);if(!q.isFunction(o))throw new TypeError("visitor must be a function");function y(L){if(L===null)return"";if(q.isDate(L))return L.toISOString();if(q.isBoolean(L))return L.toString();if(!p&&q.isBlob(L))throw new Ce("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(L)||q.isTypedArray(L)?p&&typeof Blob=="function"?new Blob([L]):Buffer.from(L):L}function _(L,F,N){let Q=L;if(L&&!N&&typeof L=="object"){if(q.endsWith(F,"{}"))F=i?F:F.slice(0,-2),L=JSON.stringify(L);else if(q.isArray(L)&&Db(L)||(q.isFileList(L)||q.endsWith(F,"[]"))&&(Q=q.toArray(L)))return F=vE(F),Q.forEach(function(re,me){!(q.isUndefined(re)||re===null)&&e.append(u===!0?sv([F],me,l):u===null?F:F+"[]",y(re))}),!1}return Jf(L)?!0:(e.append(sv(N,F,l),y(L)),!1)}const x=[],I=Object.assign(Ob,{defaultVisitor:_,convertValue:y,isVisitable:Jf});function V(L,F){if(!q.isUndefined(L)){if(x.indexOf(L)!==-1)throw Error("Circular reference detected in "+F.join("."));x.push(L),q.forEach(L,function(Q,J){(!(q.isUndefined(Q)||Q===null)&&o.call(e,Q,q.isString(J)?J.trim():J,F,I))===!0&&V(Q,F?F.concat(J):[J])}),x.pop()}}if(!q.isObject(n))throw new TypeError("data must be an object");return V(n),e}function ov(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function im(n,e){this._pairs=[],n&&Ah(n,this,e)}const wE=im.prototype;wE.append=function(e,t){this._pairs.push([e,t])};wE.toString=function(e){const t=e?function(i){return e.call(this,i,ov)}:ov;return this._pairs.map(function(o){return t(o[0])+"="+t(o[1])},"").join("&")};function Lb(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function EE(n,e,t){if(!e)return n;const i=t&&t.encode||Lb;q.isFunction(t)&&(t={serialize:t});const o=t&&t.serialize;let l;if(o?l=o(e,t):l=q.isURLSearchParams(e)?e.toString():new im(e,t).toString(i),l){const u=n.indexOf("#");u!==-1&&(n=n.slice(0,u)),n+=(n.indexOf("?")===-1?"?":"&")+l}return n}class av{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){q.forEach(this.handlers,function(i){i!==null&&e(i)})}}const xE={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Vb=typeof URLSearchParams<"u"?URLSearchParams:im,Mb=typeof FormData<"u"?FormData:null,jb=typeof Blob<"u"?Blob:null,Fb={isBrowser:!0,classes:{URLSearchParams:Vb,FormData:Mb,Blob:jb},protocols:["http","https","file","blob","url","data"]},sm=typeof window<"u"&&typeof document<"u",Yf=typeof navigator=="object"&&navigator||void 0,Ub=sm&&(!Yf||["ReactNative","NativeScript","NS"].indexOf(Yf.product)<0),Bb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",zb=sm&&window.location.href||"http://localhost",$b=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:sm,hasStandardBrowserEnv:Ub,hasStandardBrowserWebWorkerEnv:Bb,navigator:Yf,origin:zb},Symbol.toStringTag,{value:"Module"})),Kt={...$b,...Fb};function Hb(n,e){return Ah(n,new Kt.classes.URLSearchParams,{visitor:function(t,i,o,l){return Kt.isNode&&q.isBuffer(t)?(this.append(i,t.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)},...e})}function qb(n){return q.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Wb(n){const e={},t=Object.keys(n);let i;const o=t.length;let l;for(i=0;i<o;i++)l=t[i],e[l]=n[l];return e}function TE(n){function e(t,i,o,l){let u=t[l++];if(u==="__proto__")return!0;const d=Number.isFinite(+u),p=l>=t.length;return u=!u&&q.isArray(o)?o.length:u,p?(q.hasOwnProp(o,u)?o[u]=[o[u],i]:o[u]=i,!d):((!o[u]||!q.isObject(o[u]))&&(o[u]=[]),e(t,i,o[u],l)&&q.isArray(o[u])&&(o[u]=Wb(o[u])),!d)}if(q.isFormData(n)&&q.isFunction(n.entries)){const t={};return q.forEachEntry(n,(i,o)=>{e(qb(i),o,t,0)}),t}return null}function Kb(n,e,t){if(q.isString(n))try{return(e||JSON.parse)(n),q.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const Hl={transitional:xE,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const i=t.getContentType()||"",o=i.indexOf("application/json")>-1,l=q.isObject(e);if(l&&q.isHTMLForm(e)&&(e=new FormData(e)),q.isFormData(e))return o?JSON.stringify(TE(e)):e;if(q.isArrayBuffer(e)||q.isBuffer(e)||q.isStream(e)||q.isFile(e)||q.isBlob(e)||q.isReadableStream(e))return e;if(q.isArrayBufferView(e))return e.buffer;if(q.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let d;if(l){if(i.indexOf("application/x-www-form-urlencoded")>-1)return Hb(e,this.formSerializer).toString();if((d=q.isFileList(e))||i.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return Ah(d?{"files[]":e}:e,p&&new p,this.formSerializer)}}return l||o?(t.setContentType("application/json",!1),Kb(e)):e}],transformResponse:[function(e){const t=this.transitional||Hl.transitional,i=t&&t.forcedJSONParsing,o=this.responseType==="json";if(q.isResponse(e)||q.isReadableStream(e))return e;if(e&&q.isString(e)&&(i&&!this.responseType||o)){const u=!(t&&t.silentJSONParsing)&&o;try{return JSON.parse(e)}catch(d){if(u)throw d.name==="SyntaxError"?Ce.from(d,Ce.ERR_BAD_RESPONSE,this,null,this.response):d}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Kt.classes.FormData,Blob:Kt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};q.forEach(["delete","get","head","post","put","patch"],n=>{Hl.headers[n]={}});const Gb=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Qb=n=>{const e={};let t,i,o;return n&&n.split(`
`).forEach(function(u){o=u.indexOf(":"),t=u.substring(0,o).trim().toLowerCase(),i=u.substring(o+1).trim(),!(!t||e[t]&&Gb[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},lv=Symbol("internals");function rl(n){return n&&String(n).trim().toLowerCase()}function kc(n){return n===!1||n==null?n:q.isArray(n)?n.map(kc):String(n)}function Jb(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const Yb=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function vf(n,e,t,i,o){if(q.isFunction(i))return i.call(this,e,t);if(o&&(e=t),!!q.isString(e)){if(q.isString(i))return e.indexOf(i)!==-1;if(q.isRegExp(i))return i.test(e)}}function Xb(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function Zb(n,e){const t=q.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(o,l,u){return this[i].call(this,e,o,l,u)},configurable:!0})})}let ln=class{constructor(e){e&&this.set(e)}set(e,t,i){const o=this;function l(d,p,y){const _=rl(p);if(!_)throw new Error("header name must be a non-empty string");const x=q.findKey(o,_);(!x||o[x]===void 0||y===!0||y===void 0&&o[x]!==!1)&&(o[x||p]=kc(d))}const u=(d,p)=>q.forEach(d,(y,_)=>l(y,_,p));if(q.isPlainObject(e)||e instanceof this.constructor)u(e,t);else if(q.isString(e)&&(e=e.trim())&&!Yb(e))u(Qb(e),t);else if(q.isObject(e)&&q.isIterable(e)){let d={},p,y;for(const _ of e){if(!q.isArray(_))throw TypeError("Object iterator must return a key-value pair");d[y=_[0]]=(p=d[y])?q.isArray(p)?[...p,_[1]]:[p,_[1]]:_[1]}u(d,t)}else e!=null&&l(t,e,i);return this}get(e,t){if(e=rl(e),e){const i=q.findKey(this,e);if(i){const o=this[i];if(!t)return o;if(t===!0)return Jb(o);if(q.isFunction(t))return t.call(this,o,i);if(q.isRegExp(t))return t.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=rl(e),e){const i=q.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||vf(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let o=!1;function l(u){if(u=rl(u),u){const d=q.findKey(i,u);d&&(!t||vf(i,i[d],d,t))&&(delete i[d],o=!0)}}return q.isArray(e)?e.forEach(l):l(e),o}clear(e){const t=Object.keys(this);let i=t.length,o=!1;for(;i--;){const l=t[i];(!e||vf(this,this[l],l,e,!0))&&(delete this[l],o=!0)}return o}normalize(e){const t=this,i={};return q.forEach(this,(o,l)=>{const u=q.findKey(i,l);if(u){t[u]=kc(o),delete t[l];return}const d=e?Xb(l):String(l).trim();d!==l&&delete t[l],t[d]=kc(o),i[d]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return q.forEach(this,(i,o)=>{i!=null&&i!==!1&&(t[o]=e&&q.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(o=>i.set(o)),i}static accessor(e){const i=(this[lv]=this[lv]={accessors:{}}).accessors,o=this.prototype;function l(u){const d=rl(u);i[d]||(Zb(o,u),i[d]=!0)}return q.isArray(e)?e.forEach(l):l(e),this}};ln.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.reduceDescriptors(ln.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});q.freezeMethods(ln);function wf(n,e){const t=this||Hl,i=e||t,o=ln.from(i.headers);let l=i.data;return q.forEach(n,function(d){l=d.call(t,l,o.normalize(),e?e.status:void 0)}),o.normalize(),l}function SE(n){return!!(n&&n.__CANCEL__)}function sa(n,e,t){Ce.call(this,n??"canceled",Ce.ERR_CANCELED,e,t),this.name="CanceledError"}q.inherits(sa,Ce,{__CANCEL__:!0});function IE(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new Ce("Request failed with status code "+t.status,[Ce.ERR_BAD_REQUEST,Ce.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function eN(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function tN(n,e){n=n||10;const t=new Array(n),i=new Array(n);let o=0,l=0,u;return e=e!==void 0?e:1e3,function(p){const y=Date.now(),_=i[l];u||(u=y),t[o]=p,i[o]=y;let x=l,I=0;for(;x!==o;)I+=t[x++],x=x%n;if(o=(o+1)%n,o===l&&(l=(l+1)%n),y-u<e)return;const V=_&&y-_;return V?Math.round(I*1e3/V):void 0}}function nN(n,e){let t=0,i=1e3/e,o,l;const u=(y,_=Date.now())=>{t=_,o=null,l&&(clearTimeout(l),l=null),n(...y)};return[(...y)=>{const _=Date.now(),x=_-t;x>=i?u(y,_):(o=y,l||(l=setTimeout(()=>{l=null,u(o)},i-x)))},()=>o&&u(o)]}const Zc=(n,e,t=3)=>{let i=0;const o=tN(50,250);return nN(l=>{const u=l.loaded,d=l.lengthComputable?l.total:void 0,p=u-i,y=o(p),_=u<=d;i=u;const x={loaded:u,total:d,progress:d?u/d:void 0,bytes:p,rate:y||void 0,estimated:y&&d&&_?(d-u)/y:void 0,event:l,lengthComputable:d!=null,[e?"download":"upload"]:!0};n(x)},t)},uv=(n,e)=>{const t=n!=null;return[i=>e[0]({lengthComputable:t,total:n,loaded:i}),e[1]]},cv=n=>(...e)=>q.asap(()=>n(...e)),rN=Kt.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,Kt.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(Kt.origin),Kt.navigator&&/(msie|trident)/i.test(Kt.navigator.userAgent)):()=>!0,iN=Kt.hasStandardBrowserEnv?{write(n,e,t,i,o,l){const u=[n+"="+encodeURIComponent(e)];q.isNumber(t)&&u.push("expires="+new Date(t).toGMTString()),q.isString(i)&&u.push("path="+i),q.isString(o)&&u.push("domain="+o),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function sN(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function oN(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function RE(n,e,t){let i=!sN(e);return n&&(i||t==!1)?oN(n,e):e}const hv=n=>n instanceof ln?{...n}:n;function js(n,e){e=e||{};const t={};function i(y,_,x,I){return q.isPlainObject(y)&&q.isPlainObject(_)?q.merge.call({caseless:I},y,_):q.isPlainObject(_)?q.merge({},_):q.isArray(_)?_.slice():_}function o(y,_,x,I){if(q.isUndefined(_)){if(!q.isUndefined(y))return i(void 0,y,x,I)}else return i(y,_,x,I)}function l(y,_){if(!q.isUndefined(_))return i(void 0,_)}function u(y,_){if(q.isUndefined(_)){if(!q.isUndefined(y))return i(void 0,y)}else return i(void 0,_)}function d(y,_,x){if(x in e)return i(y,_);if(x in n)return i(void 0,y)}const p={url:l,method:l,data:l,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,withXSRFToken:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:d,headers:(y,_,x)=>o(hv(y),hv(_),x,!0)};return q.forEach(Object.keys({...n,...e}),function(_){const x=p[_]||o,I=x(n[_],e[_],_);q.isUndefined(I)&&x!==d||(t[_]=I)}),t}const AE=n=>{const e=js({},n);let{data:t,withXSRFToken:i,xsrfHeaderName:o,xsrfCookieName:l,headers:u,auth:d}=e;e.headers=u=ln.from(u),e.url=EE(RE(e.baseURL,e.url,e.allowAbsoluteUrls),n.params,n.paramsSerializer),d&&u.set("Authorization","Basic "+btoa((d.username||"")+":"+(d.password?unescape(encodeURIComponent(d.password)):"")));let p;if(q.isFormData(t)){if(Kt.hasStandardBrowserEnv||Kt.hasStandardBrowserWebWorkerEnv)u.setContentType(void 0);else if((p=u.getContentType())!==!1){const[y,..._]=p?p.split(";").map(x=>x.trim()).filter(Boolean):[];u.setContentType([y||"multipart/form-data",..._].join("; "))}}if(Kt.hasStandardBrowserEnv&&(i&&q.isFunction(i)&&(i=i(e)),i||i!==!1&&rN(e.url))){const y=o&&l&&iN.read(l);y&&u.set(o,y)}return e},aN=typeof XMLHttpRequest<"u",lN=aN&&function(n){return new Promise(function(t,i){const o=AE(n);let l=o.data;const u=ln.from(o.headers).normalize();let{responseType:d,onUploadProgress:p,onDownloadProgress:y}=o,_,x,I,V,L;function F(){V&&V(),L&&L(),o.cancelToken&&o.cancelToken.unsubscribe(_),o.signal&&o.signal.removeEventListener("abort",_)}let N=new XMLHttpRequest;N.open(o.method.toUpperCase(),o.url,!0),N.timeout=o.timeout;function Q(){if(!N)return;const re=ln.from("getAllResponseHeaders"in N&&N.getAllResponseHeaders()),_e={data:!d||d==="text"||d==="json"?N.responseText:N.response,status:N.status,statusText:N.statusText,headers:re,config:n,request:N};IE(function(k){t(k),F()},function(k){i(k),F()},_e),N=null}"onloadend"in N?N.onloadend=Q:N.onreadystatechange=function(){!N||N.readyState!==4||N.status===0&&!(N.responseURL&&N.responseURL.indexOf("file:")===0)||setTimeout(Q)},N.onabort=function(){N&&(i(new Ce("Request aborted",Ce.ECONNABORTED,n,N)),N=null)},N.onerror=function(){i(new Ce("Network Error",Ce.ERR_NETWORK,n,N)),N=null},N.ontimeout=function(){let me=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const _e=o.transitional||xE;o.timeoutErrorMessage&&(me=o.timeoutErrorMessage),i(new Ce(me,_e.clarifyTimeoutError?Ce.ETIMEDOUT:Ce.ECONNABORTED,n,N)),N=null},l===void 0&&u.setContentType(null),"setRequestHeader"in N&&q.forEach(u.toJSON(),function(me,_e){N.setRequestHeader(_e,me)}),q.isUndefined(o.withCredentials)||(N.withCredentials=!!o.withCredentials),d&&d!=="json"&&(N.responseType=o.responseType),y&&([I,L]=Zc(y,!0),N.addEventListener("progress",I)),p&&N.upload&&([x,V]=Zc(p),N.upload.addEventListener("progress",x),N.upload.addEventListener("loadend",V)),(o.cancelToken||o.signal)&&(_=re=>{N&&(i(!re||re.type?new sa(null,n,N):re),N.abort(),N=null)},o.cancelToken&&o.cancelToken.subscribe(_),o.signal&&(o.signal.aborted?_():o.signal.addEventListener("abort",_)));const J=eN(o.url);if(J&&Kt.protocols.indexOf(J)===-1){i(new Ce("Unsupported protocol "+J+":",Ce.ERR_BAD_REQUEST,n));return}N.send(l||null)})},uN=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let i=new AbortController,o;const l=function(y){if(!o){o=!0,d();const _=y instanceof Error?y:this.reason;i.abort(_ instanceof Ce?_:new sa(_ instanceof Error?_.message:_))}};let u=e&&setTimeout(()=>{u=null,l(new Ce(`timeout ${e} of ms exceeded`,Ce.ETIMEDOUT))},e);const d=()=>{n&&(u&&clearTimeout(u),u=null,n.forEach(y=>{y.unsubscribe?y.unsubscribe(l):y.removeEventListener("abort",l)}),n=null)};n.forEach(y=>y.addEventListener("abort",l));const{signal:p}=i;return p.unsubscribe=()=>q.asap(d),p}},cN=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let i=0,o;for(;i<t;)o=i+e,yield n.slice(i,o),i=o},hN=async function*(n,e){for await(const t of dN(n))yield*cN(t,e)},dN=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:i}=await e.read();if(t)break;yield i}}finally{await e.cancel()}},dv=(n,e,t,i)=>{const o=hN(n,e);let l=0,u,d=p=>{u||(u=!0,i&&i(p))};return new ReadableStream({async pull(p){try{const{done:y,value:_}=await o.next();if(y){d(),p.close();return}let x=_.byteLength;if(t){let I=l+=x;t(I)}p.enqueue(new Uint8Array(_))}catch(y){throw d(y),y}},cancel(p){return d(p),o.return()}},{highWaterMark:2})},Ch=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",CE=Ch&&typeof ReadableStream=="function",fN=Ch&&(typeof TextEncoder=="function"?(n=>e=>n.encode(e))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),kE=(n,...e)=>{try{return!!n(...e)}catch{return!1}},pN=CE&&kE(()=>{let n=!1;const e=new Request(Kt.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!e}),fv=64*1024,Xf=CE&&kE(()=>q.isReadableStream(new Response("").body)),eh={stream:Xf&&(n=>n.body)};Ch&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!eh[e]&&(eh[e]=q.isFunction(n[e])?t=>t[e]():(t,i)=>{throw new Ce(`Response type '${e}' is not supported`,Ce.ERR_NOT_SUPPORT,i)})})})(new Response);const mN=async n=>{if(n==null)return 0;if(q.isBlob(n))return n.size;if(q.isSpecCompliantForm(n))return(await new Request(Kt.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(q.isArrayBufferView(n)||q.isArrayBuffer(n))return n.byteLength;if(q.isURLSearchParams(n)&&(n=n+""),q.isString(n))return(await fN(n)).byteLength},gN=async(n,e)=>{const t=q.toFiniteNumber(n.getContentLength());return t??mN(e)},yN=Ch&&(async n=>{let{url:e,method:t,data:i,signal:o,cancelToken:l,timeout:u,onDownloadProgress:d,onUploadProgress:p,responseType:y,headers:_,withCredentials:x="same-origin",fetchOptions:I}=AE(n);y=y?(y+"").toLowerCase():"text";let V=uN([o,l&&l.toAbortSignal()],u),L;const F=V&&V.unsubscribe&&(()=>{V.unsubscribe()});let N;try{if(p&&pN&&t!=="get"&&t!=="head"&&(N=await gN(_,i))!==0){let _e=new Request(e,{method:"POST",body:i,duplex:"half"}),we;if(q.isFormData(i)&&(we=_e.headers.get("content-type"))&&_.setContentType(we),_e.body){const[k,R]=uv(N,Zc(cv(p)));i=dv(_e.body,fv,k,R)}}q.isString(x)||(x=x?"include":"omit");const Q="credentials"in Request.prototype;L=new Request(e,{...I,signal:V,method:t.toUpperCase(),headers:_.normalize().toJSON(),body:i,duplex:"half",credentials:Q?x:void 0});let J=await fetch(L,I);const re=Xf&&(y==="stream"||y==="response");if(Xf&&(d||re&&F)){const _e={};["status","statusText","headers"].forEach(A=>{_e[A]=J[A]});const we=q.toFiniteNumber(J.headers.get("content-length")),[k,R]=d&&uv(we,Zc(cv(d),!0))||[];J=new Response(dv(J.body,fv,k,()=>{R&&R(),F&&F()}),_e)}y=y||"text";let me=await eh[q.findKey(eh,y)||"text"](J,n);return!re&&F&&F(),await new Promise((_e,we)=>{IE(_e,we,{data:me,headers:ln.from(J.headers),status:J.status,statusText:J.statusText,config:n,request:L})})}catch(Q){throw F&&F(),Q&&Q.name==="TypeError"&&/Load failed|fetch/i.test(Q.message)?Object.assign(new Ce("Network Error",Ce.ERR_NETWORK,n,L),{cause:Q.cause||Q}):Ce.from(Q,Q&&Q.code,n,L)}}),Zf={http:Nb,xhr:lN,fetch:yN};q.forEach(Zf,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const pv=n=>`- ${n}`,_N=n=>q.isFunction(n)||n===null||n===!1,PE={getAdapter:n=>{n=q.isArray(n)?n:[n];const{length:e}=n;let t,i;const o={};for(let l=0;l<e;l++){t=n[l];let u;if(i=t,!_N(t)&&(i=Zf[(u=String(t)).toLowerCase()],i===void 0))throw new Ce(`Unknown adapter '${u}'`);if(i)break;o[u||"#"+l]=i}if(!i){const l=Object.entries(o).map(([d,p])=>`adapter ${d} `+(p===!1?"is not supported by the environment":"is not available in the build"));let u=e?l.length>1?`since :
`+l.map(pv).join(`
`):" "+pv(l[0]):"as no adapter specified";throw new Ce("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return i},adapters:Zf};function Ef(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new sa(null,n)}function mv(n){return Ef(n),n.headers=ln.from(n.headers),n.data=wf.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),PE.getAdapter(n.adapter||Hl.adapter)(n).then(function(i){return Ef(n),i.data=wf.call(n,n.transformResponse,i),i.headers=ln.from(i.headers),i},function(i){return SE(i)||(Ef(n),i&&i.response&&(i.response.data=wf.call(n,n.transformResponse,i.response),i.response.headers=ln.from(i.response.headers))),Promise.reject(i)})}const bE="1.11.0",kh={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{kh[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const gv={};kh.transitional=function(e,t,i){function o(l,u){return"[Axios v"+bE+"] Transitional option '"+l+"'"+u+(i?". "+i:"")}return(l,u,d)=>{if(e===!1)throw new Ce(o(u," has been removed"+(t?" in "+t:"")),Ce.ERR_DEPRECATED);return t&&!gv[u]&&(gv[u]=!0,console.warn(o(u," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(l,u,d):!0}};kh.spelling=function(e){return(t,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function vN(n,e,t){if(typeof n!="object")throw new Ce("options must be an object",Ce.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let o=i.length;for(;o-- >0;){const l=i[o],u=e[l];if(u){const d=n[l],p=d===void 0||u(d,l,n);if(p!==!0)throw new Ce("option "+l+" must be "+p,Ce.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Ce("Unknown option "+l,Ce.ERR_BAD_OPTION)}}const Pc={assertOptions:vN,validators:kh},hr=Pc.validators;let bs=class{constructor(e){this.defaults=e||{},this.interceptors={request:new av,response:new av}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const l=o.stack?o.stack.replace(/^.+\n/,""):"";try{i.stack?l&&!String(i.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+l):i.stack=l}catch{}}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=js(this.defaults,t);const{transitional:i,paramsSerializer:o,headers:l}=t;i!==void 0&&Pc.assertOptions(i,{silentJSONParsing:hr.transitional(hr.boolean),forcedJSONParsing:hr.transitional(hr.boolean),clarifyTimeoutError:hr.transitional(hr.boolean)},!1),o!=null&&(q.isFunction(o)?t.paramsSerializer={serialize:o}:Pc.assertOptions(o,{encode:hr.function,serialize:hr.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Pc.assertOptions(t,{baseUrl:hr.spelling("baseURL"),withXsrfToken:hr.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let u=l&&q.merge(l.common,l[t.method]);l&&q.forEach(["delete","get","head","post","put","patch","common"],L=>{delete l[L]}),t.headers=ln.concat(u,l);const d=[];let p=!0;this.interceptors.request.forEach(function(F){typeof F.runWhen=="function"&&F.runWhen(t)===!1||(p=p&&F.synchronous,d.unshift(F.fulfilled,F.rejected))});const y=[];this.interceptors.response.forEach(function(F){y.push(F.fulfilled,F.rejected)});let _,x=0,I;if(!p){const L=[mv.bind(this),void 0];for(L.unshift(...d),L.push(...y),I=L.length,_=Promise.resolve(t);x<I;)_=_.then(L[x++],L[x++]);return _}I=d.length;let V=t;for(x=0;x<I;){const L=d[x++],F=d[x++];try{V=L(V)}catch(N){F.call(this,N);break}}try{_=mv.call(this,V)}catch(L){return Promise.reject(L)}for(x=0,I=y.length;x<I;)_=_.then(y[x++],y[x++]);return _}getUri(e){e=js(this.defaults,e);const t=RE(e.baseURL,e.url,e.allowAbsoluteUrls);return EE(t,e.params,e.paramsSerializer)}};q.forEach(["delete","get","head","options"],function(e){bs.prototype[e]=function(t,i){return this.request(js(i||{},{method:e,url:t,data:(i||{}).data}))}});q.forEach(["post","put","patch"],function(e){function t(i){return function(l,u,d){return this.request(js(d||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:l,data:u}))}}bs.prototype[e]=t(),bs.prototype[e+"Form"]=t(!0)});let wN=class NE{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(l){t=l});const i=this;this.promise.then(o=>{if(!i._listeners)return;let l=i._listeners.length;for(;l-- >0;)i._listeners[l](o);i._listeners=null}),this.promise.then=o=>{let l;const u=new Promise(d=>{i.subscribe(d),l=d}).then(o);return u.cancel=function(){i.unsubscribe(l)},u},e(function(l,u,d){i.reason||(i.reason=new sa(l,u,d),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=i=>{e.abort(i)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new NE(function(o){e=o}),cancel:e}}};function EN(n){return function(t){return n.apply(null,t)}}function xN(n){return q.isObject(n)&&n.isAxiosError===!0}const ep={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ep).forEach(([n,e])=>{ep[e]=n});function DE(n){const e=new bs(n),t=uE(bs.prototype.request,e);return q.extend(t,bs.prototype,e,{allOwnKeys:!0}),q.extend(t,e,null,{allOwnKeys:!0}),t.create=function(o){return DE(js(n,o))},t}const ft=DE(Hl);ft.Axios=bs;ft.CanceledError=sa;ft.CancelToken=wN;ft.isCancel=SE;ft.VERSION=bE;ft.toFormData=Ah;ft.AxiosError=Ce;ft.Cancel=ft.CanceledError;ft.all=function(e){return Promise.all(e)};ft.spread=EN;ft.isAxiosError=xN;ft.mergeConfig=js;ft.AxiosHeaders=ln;ft.formToJSON=n=>TE(q.isHTMLForm(n)?new FormData(n):n);ft.getAdapter=PE.getAdapter;ft.HttpStatusCode=ep;ft.default=ft;const{Axios:KN,AxiosError:GN,CanceledError:QN,isCancel:JN,CancelToken:YN,VERSION:XN,all:ZN,Cancel:e2,isAxiosError:t2,spread:n2,toFormData:r2,AxiosHeaders:i2,HttpStatusCode:s2,formToJSON:o2,getAdapter:a2,mergeConfig:l2}=ft,TN=()=>{const[n,e]=W.useState(""),[t,i]=W.useState(""),o=Fs(),l=async u=>{u.preventDefault();try{const d=await ft.post("http://localhost:5000/api/auth/login",{phone:n,password:t});alert("Login Successful! Welcome Back."),console.log(d.data),localStorage.setItem("user",JSON.stringify(d.data.donor)),o("/search")}catch(d){alert(d.response?.data?.msg||"Login fail ho gaya. Details check karein.")}};return w.jsxs("div",{className:"min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-6",children:[w.jsx("style",{children:`
        .login-wrapper{
          display:flex;
          max-width:1000px;
          width:100%;
          background:#fff;
          border-radius:40px;
          overflow:hidden;
          box-shadow:0 20px 60px rgba(0,0,0,0.15);
        }

        .left-panel{
          width:35%;
          background:#000;
          padding:50px;
          display:flex;
          flex-direction:column;
          justify-content:center;
        }

        .right-panel{
          width:65%;
          padding:50px;
          display:flex;
          flex-direction:column;
          justify-content:center;
        }

        input{
          width:100%;
          padding:16px;
          background:rgba(59,130,246,0.08);
          border-radius:12px;
          font-weight:bold;
          outline:none;
          border:none;
        }

        button{
          width:100%;
          padding:16px;
          border-radius:12px;
          font-weight:900;
          text-transform:uppercase;
          letter-spacing:2px;
          cursor:pointer;
          transition:0.3s;
        }

        button:hover{
          background:#000;
        }

        /* TABLET */
        @media (max-width: 992px){
          .left-panel{
            padding:40px;
          }

          .right-panel{
            padding:40px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px){
          .login-wrapper{
            flex-direction:column;
            border-radius:25px;
          }

          .left-panel{
            width:100%;
            padding:30px;
            text-align:center;
          }

          .right-panel{
            width:100%;
            padding:30px;
          }

          h1{
            font-size:32px !important;
          }
        }
      `}),w.jsxs("div",{className:"login-wrapper",children:[w.jsxs("div",{className:"left-panel",children:[w.jsxs("h1",{className:"text-white text-5xl font-[1000] italic leading-tight uppercase tracking-tighter",children:["WELCOME ",w.jsx("br",{})," ",w.jsx("span",{className:"text-red-600",children:"BACK"})]}),w.jsx("p",{className:"text-gray-400 font-bold mt-6 text-xs leading-relaxed uppercase tracking-widest",children:"Log in to manage your donor profile and availability."})]}),w.jsxs("div",{className:"right-panel",children:[w.jsxs("h2",{className:"text-2xl font-[1000] italic uppercase mb-8",children:["USER ",w.jsx("span",{className:"text-red-600",children:"LOGIN"})]}),w.jsxs("form",{onSubmit:l,className:"space-y-6",children:[w.jsx("input",{type:"text",placeholder:"PHONE NUMBER OR EMAIL",onChange:u=>e(u.target.value),required:!0}),w.jsx("input",{type:"password",placeholder:"PASSWORD",onChange:u=>i(u.target.value),required:!0}),w.jsx("button",{type:"submit",className:"bg-red-600 text-white hover:bg-black",children:"SIGN IN"})]}),w.jsxs("p",{className:"text-center text-gray-400 font-bold mt-8 text-xs tracking-widest uppercase",children:["NEW TO BLOODLINE?",w.jsx(Ot,{to:"/register",className:"text-red-600 border-b-2 border-red-600 pb-0.5 ml-1",children:"REGISTER NOW"})]})]})]})]})},SN=()=>{const[n,e]=W.useState([]),[t,i]=W.useState(""),[o,l]=W.useState(!0);W.useEffect(()=>{(async()=>{l(!0);try{const y=(await UP(Hp(Go,"users"))).docs.map(_=>({id:_.id,..._.data()}));e(y)}catch(p){console.error("Firebase Error:",p)}l(!1)})()},[]);const u=n.filter(d=>{const p=t.toLowerCase();return d.name?.toLowerCase().includes(p)||d.city?.toLowerCase().includes(p)||d.bloodGroup?.toLowerCase().includes(p)});return w.jsxs("div",{style:IN.page,children:[w.jsx("style",{children:`
        * { box-sizing: border-box; }

        .container { max-width: 1200px; margin: 0 auto; }

        /* HEADER */
        .header { display: flex; justify-content: space-between; align-items: center; gap: 40px; flex-wrap: wrap; margin-bottom: 50px; }
        .textBox { flex: 1; min-width: 280px; }
        .title { font-size: 60px; font-weight: 900; line-height: 1.1; }
        .subtitle { color: #e2e8f0; font-size: 20px; margin-top: 10px; }

        /* SEARCH */
        .searchBox { flex: 1; display: flex; justify-content: flex-end; align-items: center; min-width: 280px; }
        .search { width: 100%; max-width: 520px; }
        .input { width: 100%; padding: 20px 26px; border-radius: 100px; border: 2px solid #ff4d4d; font-size: 16px; outline: none; }

        /* GRID */
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 30px; }
        .card { background: rgba(255,255,255,0.95); border-radius: 35px; padding: 35px; text-align: center; }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .header { flex-direction: column; text-align: center; }
          .title { font-size: 34px; }
          .subtitle { font-size: 16px; }
          .searchBox { justify-content: center; width: 100%; }
          .search { max-width: 100%; }
        }
      `}),w.jsxs("div",{className:"container",children:[w.jsxs("div",{className:"header",children:[w.jsxs("div",{className:"textBox",children:[w.jsxs("h1",{className:"title",children:[w.jsx("span",{style:{color:"#fff"},children:"Global "}),w.jsx("span",{style:{color:"#ff4d4d"},children:"Hero Network"})]}),w.jsx("p",{className:"subtitle",children:"Live tracking verified blood donors across the globe."})]}),w.jsx("div",{className:"searchBox",children:w.jsx("div",{className:"search",children:w.jsx("input",{type:"text",placeholder:"Search by city, name, blood group...",value:t,onChange:d=>i(d.target.value),className:"input"})})})]}),o?w.jsx("div",{style:{color:"#ff4d4d",textAlign:"center",fontSize:"20px"},children:"Accessing GPS Data..."}):u.length>0?w.jsx("div",{className:"grid",children:u.map(d=>w.jsxs("div",{className:"card",children:[w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"25px"},children:[w.jsx("div",{style:{background:"#ff4d4d",color:"#fff",padding:"10px 22px",borderRadius:"15px"},children:d.bloodGroup||"N/A"}),w.jsx("div",{style:{width:"12px",height:"12px",background:"#22c55e",borderRadius:"50%"}})]}),w.jsx("h3",{style:{fontSize:"22px",fontWeight:"800"},children:d.name}),w.jsx("p",{style:{marginTop:"10px"},children:d.city}),w.jsx("button",{style:{marginTop:"15px",width:"100%",padding:"16px",borderRadius:"20px",background:"#0f172a",color:"#fff",border:"none",fontWeight:"800",cursor:"pointer"},onClick:()=>d.phone?window.location.href=`tel:${d.phone}`:alert("Phone not shared"),children:"Connect Now"})]},d.id))}):w.jsx("div",{style:{textAlign:"center",color:"#fff",marginTop:"60px",fontSize:"20px"},children:"No donors found"})]})]})},IN={page:{minHeight:"100vh",padding:"120px 20px 80px",backgroundImage:"linear-gradient(rgba(10,15,26,0.55), rgba(10,15,26,0.65)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",backgroundSize:"cover",backgroundPosition:"center",fontFamily:"'Inter', sans-serif"}},RN=()=>{const[n,e]=W.useState([]),t=Fs(),i=Qi();return W.useEffect(()=>{const o=LP(Hp(Go,"requests"),VP("createdAt","desc"),MP(5)),l=HP(o,u=>{const d=u.docs.map(p=>({id:p.id,...p.data()}));e(d)});return()=>l()},[]),w.jsxs("div",{className:"app-container",children:[w.jsx("style",{children:`
        *{
          box-sizing:border-box;
        }

        body{
          margin:0;
          padding:0;
        }

        .app-container{
          display:flex;
          min-height:100vh;
          background:#f8f9fa;
          font-family:'Poppins',sans-serif;
          overflow-x:hidden;
        }

        /* DESKTOP SIDEBAR */
        .desktop-sidebar{
          width:280px;
          background:#111;
          color:#fff;
          display:flex;
          flex-direction:column;
          padding:30px 20px;
          flex-shrink:0;
        }

        .nav-links{
          display:flex;
          flex-direction:column;
          gap:12px;
          flex:1;
          margin-top:40px;
        }

        .nav-item{
          text-decoration:none;
          color:#999;
          padding:15px 20px;
          border-radius:12px;
          display:flex;
          align-items:center;
          gap:12px;
          transition:0.3s;
        }

        .nav-item.active{
          background:#e63946;
          color:#fff;
          font-weight:bold;
          box-shadow:0 4px 15px rgba(230,57,70,0.3);
        }

        .nav-item:hover:not(.active){
          background:#222;
          color:#fff;
        }

        /* MAIN CONTENT */
        .main-wrapper{
          flex:1;
          display:flex;
          flex-direction:column;
          width:100%;
          min-height:100vh;
        }

        .top-nav{
          background:#fff;
          padding:15px 40px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          border-bottom:1px solid #eee;
          position:sticky;
          top:0;
          z-index:100;
        }

        .dashboard-body{
          padding:40px;
          width:100%;
        }

        .welcome-banner{
          background:linear-gradient(135deg,#e63946 0%,#a3212b 100%);
          color:#fff;
          padding:40px;
          border-radius:30px;
          margin-bottom:30px;
          box-shadow:0 10px 30px rgba(230,57,70,0.2);
        }

        .layout-grid{
          display:grid;
          grid-template-columns:1.8fr 1fr;
          gap:30px;
          width:100%;
        }

        .content-card{
          background:#fff;
          padding:30px;
          border-radius:25px;
          border:1px solid #eee;
          box-shadow:0 5px 15px rgba(0,0,0,0.02);
        }

        .mobile-bottom-nav{
          display:none;
        }

        /* HELPER */
        .blood-item{
          display:flex;
          align-items:center;
          gap:15px;
          padding:15px;
          border-bottom:1px solid #f2f2f2;
          transition:0.2s;
        }

        .blood-item:hover{
          background:#fcfcfc;
        }

        .blood-tag{
          width:45px;
          height:45px;
          background:#fff0f0;
          color:#e63946;
          border-radius:12px;
          display:flex;
          justify-content:center;
          align-items:center;
          font-weight:bold;
          border:1px solid #f0f0f0;
          flex-shrink:0;
        }

        .call-action-btn{
          background:#2ecc71;
          color:#fff;
          border:none;
          padding:10px 18px;
          border-radius:10px;
          cursor:pointer;
          font-weight:bold;
          transition:0.3s;
          white-space:nowrap;
        }

        .call-action-btn:hover{
          transform:scale(1.05);
        }

        button{
          max-width:100%;
        }

        .user-details{
          text-align:right;
        }

        /* TABLET */
        @media (max-width:992px){

          .layout-grid{
            grid-template-columns:1fr;
          }

        }

        /* MOBILE */
        @media (max-width:768px){

          .desktop-sidebar{
            display:none;
          }

          .top-nav{
            padding:15px 20px;
          }

          .dashboard-body{
            padding:20px;
            padding-bottom:100px;
          }

          .welcome-banner{
            padding:25px;
            border-radius:20px;
          }

          .content-card{
            padding:20px;
            border-radius:20px;
          }

          .blood-item{
            flex-direction:column;
            align-items:flex-start;
          }

          .call-action-btn{
            width:100%;
          }

          .user-details{
            display:none;
          }

          .mobile-bottom-nav{
            display:flex;
            position:fixed;
            bottom:0;
            left:0;
            right:0;
            height:75px;
            background:#111;
            justify-content:space-around;
            align-items:center;
            z-index:1000;
            padding:0 10px;
            border-top:1px solid #333;
          }

          .mobile-bottom-nav .nav-item{
            flex-direction:column;
            gap:4px;
            padding:10px;
            font-size:10px;
            flex:1;
            justify-content:center;
            align-items:center;
          }

          .mobile-bottom-nav .nav-item span{
            font-size:20px;
          }

          .top-nav h3{
            font-size:18px;
          }

          .welcome-banner p{
            font-size:14px;
          }

        }
      `}),w.jsxs("aside",{className:"desktop-sidebar",children:[w.jsxs("h2",{style:{color:"#e63946",letterSpacing:"1px"},children:["BLOOD",w.jsx("span",{style:{color:"#fff"},children:"LINE"})]}),w.jsxs("div",{className:"nav-links",children:[w.jsxs(Ot,{to:"/dashboard",className:`nav-item ${i.pathname==="/dashboard"?"active":""}`,children:[w.jsx("span",{children:"📊"}),"Dashboard"]}),w.jsxs(Ot,{to:"/search",className:`nav-item ${i.pathname==="/search"?"active":""}`,children:[w.jsx("span",{children:"🔍"}),"Donor Search"]}),w.jsxs(Ot,{to:"/post-request",className:`nav-item ${i.pathname==="/post-request"?"active":""}`,children:[w.jsx("span",{children:"📢"}),"Request Blood"]}),w.jsxs(Ot,{to:"/profile",className:`nav-item ${i.pathname==="/profile"?"active":""}`,children:[w.jsx("span",{children:"👤"}),"My Profile"]})]}),w.jsx("button",{onClick:()=>Un.signOut(),style:{background:"none",border:"1px solid #e63946",color:"#e63946",padding:"12px",borderRadius:"12px",cursor:"pointer",marginTop:"20px"},children:"Sign Out"})]}),w.jsxs("main",{className:"main-wrapper",children:[w.jsxs("header",{className:"top-nav",children:[w.jsx("h3",{style:{margin:0,color:"#333"},children:"Overview"}),w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[w.jsxs("div",{className:"user-details",children:[w.jsx("div",{style:{fontWeight:"bold",fontSize:"14px"},children:Un.currentUser?.displayName||"Hero"}),w.jsx("div",{style:{fontSize:"11px",color:"#999"},children:Un.currentUser?.email})]}),w.jsx("div",{style:{width:"40px",height:"40px",background:"#111",color:"#fff",borderRadius:"12px",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold"},children:Un.currentUser?.displayName?.charAt(0)||"U"})]})]}),w.jsxs("div",{className:"dashboard-body",children:[w.jsxs("section",{className:"welcome-banner",children:[w.jsxs("h1",{style:{margin:0,fontSize:"clamp(24px, 4vw, 36px)"},children:["Hi, ",Un.currentUser?.displayName||"Hero","! 👋"]}),w.jsx("p",{style:{marginTop:"10px",opacity:.9,fontSize:"1.1rem"},children:"Saving lives starts with a small gesture."}),w.jsxs("div",{style:{marginTop:"20px",display:"inline-flex",background:"rgba(255,255,255,0.2)",padding:"8px 20px",borderRadius:"12px",fontSize:"14px"},children:["Blood Group: ",Un.currentUser?.bloodGroup||"O+"]})]}),w.jsxs("div",{className:"layout-grid",children:[w.jsxs("div",{className:"content-card",children:[w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"25px"},children:[w.jsx("h3",{style:{margin:0},children:"Urgent Requests 🚨"}),w.jsx("span",{style:{color:"#e63946",fontWeight:"bold",fontSize:"12px",letterSpacing:"1px"},children:"LIVE FEED"})]}),n.length>0?n.map(o=>w.jsxs("div",{className:"blood-item",children:[w.jsx("div",{className:"blood-tag",children:o.bloodGroup}),w.jsxs("div",{style:{flex:1},children:[w.jsx("h4",{style:{margin:0,fontSize:"15px"},children:o.hospital}),w.jsxs("p",{style:{margin:"3px 0 0",fontSize:"12px",color:"#777"},children:["Contact: ",o.phone]})]}),w.jsx("button",{className:"call-action-btn",onClick:()=>window.location.href=`tel:${o.phone}`,children:"Call"})]},o.id)):w.jsx("p",{style:{textAlign:"center",color:"#999",padding:"40px 0"},children:"No live blood requests found."})]}),w.jsxs("div",{className:"content-card",style:{height:"fit-content"},children:[w.jsx("h3",{style:{margin:"0 0 20px 0"},children:"Insights"}),w.jsxs("div",{style:{display:"flex",gap:"15px",marginBottom:"25px"},children:[w.jsxs("div",{style:{flex:1,background:"#f8f9fa",padding:"15px",borderRadius:"20px",textAlign:"center"},children:[w.jsx("span",{style:{fontSize:"20px",fontWeight:"bold"},children:"24/7"}),w.jsx("br",{}),w.jsx("small",{style:{color:"#888"},children:"Support"})]}),w.jsxs("div",{style:{flex:1,background:"#f8f9fa",padding:"15px",borderRadius:"20px",textAlign:"center"},children:[w.jsx("span",{style:{fontSize:"20px",fontWeight:"bold"},children:"100%"}),w.jsx("br",{}),w.jsx("small",{style:{color:"#888"},children:"Secure"})]})]}),w.jsx("button",{onClick:()=>t("/post-request"),style:{width:"100%",background:"#111",color:"#fff",border:"none",padding:"16px",borderRadius:"15px",fontWeight:"bold",cursor:"pointer",fontSize:"15px"},children:"📢 Post New Request"})]})]})]})]}),w.jsxs("nav",{className:"mobile-bottom-nav",children:[w.jsxs(Ot,{to:"/dashboard",className:`nav-item ${i.pathname==="/dashboard"?"active":""}`,children:[w.jsx("span",{children:"📊"}),"Home"]}),w.jsxs(Ot,{to:"/search",className:`nav-item ${i.pathname==="/search"?"active":""}`,children:[w.jsx("span",{children:"🔍"}),"Search"]}),w.jsxs(Ot,{to:"/post-request",className:`nav-item ${i.pathname==="/post-request"?"active":""}`,children:[w.jsx("span",{children:"📢"}),"Request"]}),w.jsxs(Ot,{to:"/profile",className:`nav-item ${i.pathname==="/profile"?"active":""}`,children:[w.jsx("span",{children:"👤"}),"Profile"]})]})]})},AN=()=>{const[n,e]=W.useState(""),[t,i]=W.useState(""),[o,l]=W.useState(""),[u,d]=W.useState(""),[p,y]=W.useState(!1),[_,x]=W.useState(null),I=Fs();W.useEffect(()=>{const L=v0(Un,F=>{F?x(F):(alert("Please login first to post a request!"),I("/login"))});return()=>L()},[I]);const V=async L=>{if(L.preventDefault(),!_){alert("Error: User not found. Please login again.");return}if(!n||!t||!o){alert("Please fill all required fields! 🩸");return}y(!0);try{await $P(Hp(Go,"requests"),{bloodGroup:n,hospital:t,phone:o,description:u||"Urgent",userId:_.uid,userName:_.displayName||"Blood Hero",userEmail:_.email,createdAt:DP()}),alert("Request Broadcasted Successfully! 📢"),I("/dashboard")}catch(F){console.error(F),alert("Database Error: "+F.message)}y(!1)};return w.jsxs("div",{className:"post-container",children:[w.jsx("style",{children:`
        *{
          box-sizing:border-box;
        }

        .post-container{
          margin-top:80px;
          min-height:calc(100vh - 80px);
          background:#f4f7f6;
          display:flex;
          justify-content:center;
          align-items:center;
          padding:20px;
          font-family:'Poppins',sans-serif;
        }

        .post-card{
          background:#fff;
          width:100%;
          max-width:500px;
          padding:35px;
          border-radius:25px;
          box-shadow:0 15px 35px rgba(0,0,0,0.1);
        }

        .header{
          text-align:center;
          margin-bottom:30px;
        }

        .header h2{
          color:#e63946;
          margin:0;
        }

        .input-group{
          margin-bottom:20px;
        }

        .input-group label{
          display:block;
          margin-bottom:8px;
          font-weight:600;
          color:#333;
        }

        .input-group input,
        .input-group select,
        .input-group textarea{
          width:100%;
          padding:12px;
          border:2px solid #eee;
          border-radius:12px;
          outline:none;
          transition:0.3s;
          font-size:14px;
        }

        .input-group input:focus,
        .input-group select:focus,
        .input-group textarea:focus{
          border-color:#e63946;
        }

        .broadcast-btn{
          width:100%;
          padding:15px;
          background:#111;
          color:#fff;
          border:none;
          border-radius:12px;
          font-weight:bold;
          cursor:pointer;
          transition:0.3s;
        }

        .broadcast-btn:hover{
          background:#e63946;
          transform:translateY(-2px);
        }

        .broadcast-btn:disabled{
          background:#ccc;
          cursor:not-allowed;
        }

        /* TABLET */
        @media (max-width: 992px){
          .post-card{
            max-width:450px;
            padding:30px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px){
          .post-container{
            margin-top:60px;
            padding:15px;
          }

          .post-card{
            padding:25px;
            border-radius:18px;
          }

          .header h2{
            font-size:20px;
          }

          .input-group input,
          .input-group select,
          .input-group textarea{
            font-size:13px;
            padding:10px;
          }

          .broadcast-btn{
            padding:14px;
            font-size:14px;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px){
          .post-card{
            padding:20px;
          }

          .header p{
            font-size:12px;
          }
        }
      `}),w.jsxs("div",{className:"post-card",children:[w.jsxs("div",{className:"header",children:[w.jsx("h2",{children:"New Blood Request 🩸"}),w.jsxs("p",{style:{color:"#777",fontSize:"14px"},children:["Posting as: ",_?.email||"Loading..."]})]}),w.jsxs("form",{onSubmit:V,children:[w.jsxs("div",{className:"input-group",children:[w.jsx("label",{children:"Blood Group *"}),w.jsxs("select",{value:n,onChange:L=>e(L.target.value),required:!0,children:[w.jsx("option",{value:"",children:"Select Blood Type"}),["A+","A-","B+","B-","O+","O-","AB+","AB-"].map(L=>w.jsx("option",{value:L,children:L},L))]})]}),w.jsxs("div",{className:"input-group",children:[w.jsx("label",{children:"Hospital & City *"}),w.jsx("input",{type:"text",placeholder:"e.g. Jinnah Hospital, Lahore",value:t,onChange:L=>i(L.target.value),required:!0})]}),w.jsxs("div",{className:"input-group",children:[w.jsx("label",{children:"Contact Number *"}),w.jsx("input",{type:"tel",placeholder:"03xxxxxxxxx",value:o,onChange:L=>l(L.target.value),required:!0})]}),w.jsxs("div",{className:"input-group",children:[w.jsx("label",{children:"More Info (Optional)"}),w.jsx("textarea",{rows:"2",placeholder:"Any specific instructions...",value:u,onChange:L=>d(L.target.value)})]}),w.jsx("button",{type:"submit",className:"broadcast-btn",disabled:p,children:p?"Connecting to Firebase...":"📢 Broadcast Request"})]})]})]})},CN=()=>{const[n,e]=W.useState({name:"",bloodGroup:"",city:"",phone:""}),[t,i]=W.useState(!0),[o,l]=W.useState(!1);W.useEffect(()=>{const d=v0(Un,async p=>{if(p){const y=Yc(Go,"users",p.uid),_=await FP(y);_.exists()&&e(_.data())}i(!1)});return()=>d()},[]);const u=async d=>{d.preventDefault(),l(!0);try{const p=Yc(Go,"users",Un.currentUser.uid);await zP(p,n),alert("Profile Saved! ✨")}catch(p){alert("Error: "+p.message)}l(!1)};return t?w.jsx("div",{style:ON,children:"Loading..."}):w.jsxs("div",{style:yv,children:[w.jsx("style",{children:`
        *{
          box-sizing:border-box;
        }

        .profile-card{
          background:rgba(255,255,255,0.95);
          backdrop-filter:blur(10px);
          width:100%;
          max-width:550px;
          border-radius:40px;
          padding:50px;
          box-shadow:0 25px 50px -12px rgba(0,0,0,0.08);
          border:1px solid #fff;
        }

        .input-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:20px;
        }

        input, select{
          padding:14px 18px;
          border-radius:16px;
          border:1px solid #e2e8f0;
          background:#f8fafc;
          font-size:15px;
          outline:none;
          width:100%;
        }

        button{
          width:100%;
          padding:18px;
          background:#1a1a1a;
          color:#fff;
          border:none;
          border-radius:18px;
          font-weight:700;
          font-size:16px;
          cursor:pointer;
        }

        /* TABLET */
        @media (max-width: 992px){
          .profile-card{
            padding:40px;
            border-radius:30px;
          }

          .input-grid{
            gap:15px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px){
          .profile-card{
            padding:25px;
            border-radius:25px;
          }

          .input-grid{
            grid-template-columns:1fr;
          }

          .user-name{
            font-size:22px !important;
          }

          .avatar{
            width:80px !important;
            height:80px !important;
            font-size:32px !important;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px){
          .profile-card{
            padding:20px;
          }
        }
      `}),w.jsx("div",{style:yv,children:w.jsxs("div",{className:"profile-card",children:[w.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[w.jsxs("div",{style:kN,className:"avatar",children:[n.name?.charAt(0).toUpperCase(),w.jsx("div",{style:PN})]}),w.jsx("h2",{style:bN,className:"user-name",children:n.name}),w.jsx("p",{style:NN,children:Un.currentUser?.email}),w.jsxs("div",{style:DN,children:[n.bloodGroup," Donor"]})]}),w.jsxs("form",{onSubmit:u,style:{display:"flex",flexDirection:"column",gap:"25px"},children:[w.jsxs("div",{className:"input-grid",children:[w.jsxs("div",{style:pc,children:[w.jsx("label",{style:mc,children:"Full Name"}),w.jsx("input",{type:"text",value:n.name,onChange:d=>e({...n,name:d.target.value})})]}),w.jsxs("div",{style:pc,children:[w.jsx("label",{style:mc,children:"Blood Group"}),w.jsx("select",{value:n.bloodGroup,onChange:d=>e({...n,bloodGroup:d.target.value}),children:["A+","A-","B+","B-","O+","O-","AB+","AB-"].map(d=>w.jsx("option",{value:d,children:d},d))})]}),w.jsxs("div",{style:pc,children:[w.jsx("label",{style:mc,children:"City"}),w.jsx("input",{type:"text",value:n.city,onChange:d=>e({...n,city:d.target.value})})]}),w.jsxs("div",{style:pc,children:[w.jsx("label",{style:mc,children:"Phone"}),w.jsx("input",{type:"tel",value:n.phone,onChange:d=>e({...n,phone:d.target.value})})]})]}),w.jsx("button",{type:"submit",disabled:o,children:o?"Saving Changes...":"Save Profile Details"})]})]})})]})},yv={minHeight:"100vh",background:"linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",display:"flex",justifyContent:"center",alignItems:"center",padding:"40px 20px"},kN={width:"100px",height:"100px",background:"linear-gradient(45deg, #e63946, #b91c1c)",color:"#fff",borderRadius:"35px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"40px",fontWeight:"800",margin:"0 auto",position:"relative"},PN={width:"18px",height:"18px",background:"#22c55e",border:"3px solid #fff",borderRadius:"50%",position:"absolute",bottom:"-2px",right:"-2px"},bN={margin:"20px 0 5px",fontSize:"28px",color:"#1a1a1a"},NN={color:"#64748b",fontSize:"15px",marginBottom:"15px"},DN={display:"inline-block",padding:"6px 16px",background:"#fee2e2",color:"#e63946",borderRadius:"20px",fontSize:"13px",fontWeight:"bold"},pc={display:"flex",flexDirection:"column",gap:"8px"},mc={fontSize:"13px",fontWeight:"700",color:"#475569",marginLeft:"4px"},ON={display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontSize:"20px",fontWeight:"bold"},LN=()=>{const[n,e]=W.useState(""),i=[{name:"Sundas Foundation",city:"Lahore",phone:"042-37422131",address:"Shadman, Lahore",status:"Open 24/7"},{name:"Fatimid Foundation",city:"Karachi",phone:"021-32225284",address:"Garden West, Karachi",status:"Open 24/7"},{name:"Red Crescent (Hilal-e-Ahmar)",city:"Islamabad",phone:"051-9250404",address:"H-8, Islamabad",status:"Open 24/7"},{name:"Shaukat Khanum Blood Bank",city:"Lahore",phone:"042-35905000",address:"Johar Town, Lahore",status:"Limited Hours"},{name:"Indus Hospital Blood Center",city:"Karachi",phone:"021-35112709",address:"Korangi, Karachi",status:"Open 24/7"}].filter(o=>o.city.toLowerCase().includes(n.toLowerCase())||o.name.toLowerCase().includes(n.toLowerCase()));return w.jsxs("div",{style:At.pageWrapper,children:[w.jsxs("div",{style:At.headerSection,children:[w.jsx("div",{style:At.pill,children:"🏥 Certified Network"}),w.jsxs("h1",{style:At.mainTitle,children:["Blood Banks ",w.jsx("span",{style:At.red,children:"Directory"})]}),w.jsx("p",{style:At.subTitle,children:"Access verified blood banks across Pakistan."}),w.jsx("div",{style:At.searchBarWrapper,children:w.jsx("input",{type:"text",placeholder:"Search by city or bank name...",style:At.searchField,onChange:o=>e(o.target.value)})})]}),w.jsx("div",{style:At.gridContainer,children:i.length>0?i.map((o,l)=>w.jsxs("div",{style:At.bankCard,children:[w.jsxs("div",{style:At.cardHeader,children:[w.jsx("span",{style:At.statusTag,children:o.status}),w.jsx("div",{style:At.iconCircle,children:"🏢"})]}),w.jsx("h3",{style:At.bankTitle,children:o.name}),w.jsxs("div",{style:At.detailRow,children:["📍 ",w.jsx("span",{children:o.address})]}),w.jsxs("div",{style:At.detailRow,children:["📞 ",w.jsx("span",{children:o.phone})]}),w.jsx("button",{onClick:()=>window.location.href=`tel:${o.phone}`,style:At.actionBtn,children:"Contact Now"})]},l)):w.jsx("div",{style:At.noData,children:"No banks found."})})]})},At={pageWrapper:{minHeight:"100vh",padding:"80px 16px",background:"#fcfcfc",fontFamily:"'Inter', sans-serif",overflowX:"hidden"},headerSection:{textAlign:"center",maxWidth:"800px",margin:"0 auto 40px"},pill:{display:"inline-block",padding:"6px 14px",background:"#fee2e2",color:"#e63946",borderRadius:"20px",fontSize:"11px",fontWeight:"bold",marginBottom:"16px",textTransform:"uppercase"},mainTitle:{fontSize:"clamp(26px, 5vw, 48px)",fontWeight:"900",color:"#111",marginBottom:"12px"},red:{color:"#e63946"},subTitle:{color:"#64748b",fontSize:"16px",lineHeight:"1.6"},searchBarWrapper:{marginTop:"20px",display:"flex",justifyContent:"center"},searchField:{width:"100%",maxWidth:"500px",padding:"14px 18px",borderRadius:"16px",border:"1px solid #e2e8f0",fontSize:"15px"},gridContainer:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"18px",maxWidth:"1200px",margin:"0 auto"},bankCard:{background:"#fff",padding:"22px",borderRadius:"24px",border:"1px solid #f1f5f9",boxShadow:"0 10px 25px rgba(0,0,0,0.05)"},cardHeader:{display:"flex",justifyContent:"space-between",marginBottom:"12px"},statusTag:{fontSize:"10px",fontWeight:"bold",color:"#22c55e",background:"#f0fdf4",padding:"4px 8px",borderRadius:"8px"},iconCircle:{width:"40px",height:"40px",background:"#f8fafc",borderRadius:"12px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"},bankTitle:{fontSize:"18px",fontWeight:"800",marginBottom:"10px",color:"#1e293b"},detailRow:{fontSize:"13px",color:"#64748b",marginBottom:"6px"},actionBtn:{width:"100%",marginTop:"14px",padding:"12px",background:"#111",color:"#fff",border:"none",borderRadius:"12px",fontWeight:"bold",fontSize:"13px"},noData:{textAlign:"center",color:"#999",width:"100%"}},VN=({onSearchChange:n})=>{const[e,t]=W.useState(!1);return w.jsxs("div",{style:MN,children:[w.jsxs("div",{style:{...jN,width:e?"600px":"450px",borderColor:e?"#e63946":"rgba(0,0,0,0.1)"},children:[w.jsx("span",{style:UN,children:"🔍"}),w.jsx("input",{type:"text",placeholder:"Search by city, name, or blood group...",style:FN,onFocus:()=>t(!0),onBlur:()=>t(!1),onChange:i=>n(i.target.value)}),w.jsxs("div",{style:BN,children:[w.jsx("span",{style:_v,children:"ALT"})," + ",w.jsx("span",{style:_v,children:"S"})]})]}),w.jsx("style",{children:`
        @media (max-width: 768px) {
          .searchBox {
            width: 90% !important;
            padding: 12px 16px !important;
          }

          .searchInput {
            font-size: 14px !important;
          }

          .badge {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .searchBox {
            width: 95% !important;
          }
        }
      `})]})},MN={display:"flex",justifyContent:"center",margin:"40px 0"},jN={display:"flex",alignItems:"center",padding:"12px 25px",background:"rgba(255, 255, 255, 0.8)",backdropFilter:"blur(10px)",borderRadius:"30px",border:"1px solid",transition:"all 0.4s ease",boxShadow:"0 10px 30px rgba(0,0,0,0.05)",maxWidth:"100%"},FN={border:"none",background:"transparent",width:"100%",outline:"none",fontSize:"16px",fontWeight:"500",padding:"0 15px"},UN={fontSize:"20px",opacity:.5},BN={display:"flex",gap:"5px",opacity:.4,fontSize:"10px"},_v={background:"#eee",padding:"2px 6px",borderRadius:"5px",border:"1px solid #ccc"},zN=()=>w.jsx("div",{style:He.pageWrapper,children:w.jsxs("div",{style:He.container,children:[w.jsxs("div",{style:He.headerBox,children:[w.jsx("div",{style:He.badge,children:"Innovation & Compassion"}),w.jsxs("h1",{style:He.mainTitle,children:["Building a ",w.jsx("span",{style:He.redText,children:"Smarter"})," Network ",w.jsx("br",{}),"to Save Lives"]}),w.jsx("div",{style:He.orangeLine})]}),w.jsx("div",{style:He.textContainer,children:w.jsxs("p",{style:He.description,children:["At ",w.jsx("strong",{children:"BloodLine"}),", we leverage cutting-edge technology to connect donors to recipients in real-time, ensuring rapid, efficient, and transparent support across Pakistan."]})}),w.jsxs("div",{style:He.statsGrid,children:[w.jsxs("div",{style:He.statCard,children:[w.jsx("h2",{style:He.statNumber,children:"50K+"}),w.jsx("p",{style:He.statLabel,children:"Lives Empowered"})]}),w.jsxs("div",{style:He.statCard,children:[w.jsx("h2",{style:He.statNumber,children:"99.9%"}),w.jsx("p",{style:He.statLabel,children:"System Uptime"})]}),w.jsxs("div",{style:He.statCard,children:[w.jsx("h2",{style:He.statNumber,children:"200+"}),w.jsx("p",{style:He.statLabel,children:"Cities Covered"})]}),w.jsxs("div",{style:He.statCard,children:[w.jsx("h2",{style:He.statNumber,children:"1M+"}),w.jsx("p",{style:He.statLabel,children:"Total Interactions"})]}),w.jsxs("div",{style:He.statCard,children:[w.jsx("h2",{style:He.statNumber,children:"< 5 min"}),w.jsx("p",{style:He.statLabel,children:"Successful Connections"})]}),w.jsxs("div",{style:He.statCard,children:[w.jsx("h2",{style:He.statNumber,children:"24/7"}),w.jsx("p",{style:He.statLabel,children:"Emergency Support"})]})]})]})}),He={pageWrapper:{minHeight:"100vh",width:"100%",padding:"80px 16px",backgroundColor:"#0a0f1a",backgroundImage:`linear-gradient(rgba(10, 15, 26, 0.55), rgba(10, 15, 26, 0.65)),
        url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed",display:"flex",justifyContent:"center",fontFamily:"'Inter', sans-serif",overflowX:"hidden"},container:{maxWidth:"1200px",width:"100%"},headerBox:{marginBottom:"30px"},badge:{display:"inline-block",padding:"6px 14px",borderRadius:"8px",border:"1.5px solid #ff4d4d",color:"#ff4d4d",fontSize:"12px",fontWeight:"700",marginBottom:"16px",textTransform:"uppercase"},mainTitle:{fontSize:"clamp(24px, 5vw, 65px)",fontWeight:"900",color:"#ffffff",lineHeight:"1.1",letterSpacing:"-1px",marginBottom:"20px"},redText:{color:"#ff4d4d"},orangeLine:{width:"120px",height:"5px",background:"linear-gradient(90deg, #ff4d4d, #f97316)",borderRadius:"10px",marginBottom:"30px"},textContainer:{maxWidth:"750px",marginBottom:"40px"},description:{fontSize:"16px",color:"#94a3b8",lineHeight:"1.7"},statsGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"16px"},statCard:{background:"rgba(255, 255, 255, 0.03)",backdropFilter:"blur(10px)",padding:"30px 20px",borderRadius:"20px",textAlign:"center",border:"1px solid rgba(255, 255, 255, 0.08)",transition:"all 0.3s ease"},statNumber:{fontSize:"36px",fontWeight:"900",color:"#ffffff",marginBottom:"6px"},statLabel:{fontSize:"12px",fontWeight:"600",color:"#ff4d4d",textTransform:"uppercase",letterSpacing:"1px"}};function $N(){const[n,e]=W.useState(!0);return w.jsxs("div",{className:"flex flex-col min-h-screen",children:[!n&&w.jsx(vS,{}),w.jsx("main",{className:n?"flex-grow":"flex-grow pt-20",children:n?w.jsx(ES,{onFinish:()=>e(!1)}):w.jsxs(UT,{children:[w.jsx(Fn,{path:"/",element:w.jsx(TS,{})}),w.jsx(Fn,{path:"/aboutus",element:w.jsx(zN,{})}),w.jsx(Fn,{path:"/register",element:w.jsx(WP,{})}),w.jsx(Fn,{path:"/login",element:w.jsx(TN,{})}),w.jsx(Fn,{path:"/search",element:w.jsx(SN,{})}),w.jsx(Fn,{path:"/dashboard",element:w.jsx(RN,{})}),w.jsx(Fn,{path:"/post-request",element:w.jsx(AN,{})}),w.jsx(Fn,{path:"/profile",element:w.jsx(CN,{})}),w.jsx(Fn,{path:"/blood-banks",element:w.jsx(LN,{})}),w.jsx(Fn,{path:"/test-search",element:w.jsx(VN,{})})]})}),!n&&w.jsx(wS,{})]})}Jx.createRoot(document.getElementById("root")).render(w.jsx($x.StrictMode,{children:w.jsx(uS,{basename:"/BloodLine",children:w.jsx($N,{})})}));
