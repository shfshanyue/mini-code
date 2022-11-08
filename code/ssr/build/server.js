/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var node_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var node_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var serve_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var serve_handler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(serve_handler__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41);
var _jsxFileName = "/Users/xiange/Documents/mini-code/code/ssr/server.js",
    _this = undefined;






var server = node_http__WEBPACK_IMPORTED_MODULE_0___default().createServer(function (req, res) {
  if (req.url === '/') {
    res.end("<!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n          <meta charset=\"UTF-8\" />\n          <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n          <title>Document</title>\n        </head>\n        <body>\n          <div id=\"root\">\n            ".concat((0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "SSR DEMO"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 30
    }, _this)), "      \n          </div>\n          <script src=\"main.js\"></script>\n        </body>\n        </html>\n      "));
  } else {
    serve_handler__WEBPACK_IMPORTED_MODULE_2___default()(req, res, {
      "public": './build'
    });
  }
});
server.listen(3000);

/***/ }),
/* 1 */
/***/ ((module) => {

"use strict";
module.exports = require("node:http");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var l, s;
if (process.env.NODE_ENV === 'production') {
  l = __webpack_require__(3);
  s = __webpack_require__(8);
} else {
  l = __webpack_require__(10);
  s = __webpack_require__(11);
}

exports.version = l.version;
exports.renderToString = l.renderToString;
exports.renderToStaticMarkup = l.renderToStaticMarkup;
exports.renderToNodeStream = l.renderToNodeStream;
exports.renderToStaticNodeStream = l.renderToStaticNodeStream;
exports.renderToPipeableStream = s.renderToPipeableStream;


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-dom-server-legacy.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa=__webpack_require__(4),ba=__webpack_require__(7);function ca(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a;a.__proto__=b}var da=!1;function h(a,b){da&&(da=!1,"<"!==b[0]&&a.push("\x3c!-- --\x3e"));return"\x3c!-- --\x3e"===b?da=!0:a.push(b)}
var p=Object.prototype.hasOwnProperty,ea=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fa={},ha={};
function ia(a){if(p.call(ha,a))return!0;if(p.call(fa,a))return!1;if(ea.test(a))return ha[a]=!0;fa[a]=!0;return!1}function q(a,b,c,d,f,e,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=e;this.removeEmptyString=g}var r={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){r[a]=new q(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];r[b]=new q(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){r[a]=new q(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){r[a]=new q(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){r[a]=new q(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){r[a]=new q(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){r[a]=new q(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){r[a]=new q(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){r[a]=new q(a,5,!1,a.toLowerCase(),null,!1,!1)});var ja=/[\-:]([a-z])/g;function ka(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ja,
ka);r[b]=new q(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ja,ka);r[b]=new q(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ja,ka);r[b]=new q(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){r[a]=new q(a,1,!1,a.toLowerCase(),null,!1,!1)});
r.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){r[a]=new q(a,1,!1,a.toLowerCase(),null,!0,!0)});
var t={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},la=["Webkit","ms","Moz","O"];Object.keys(t).forEach(function(a){la.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);t[b]=t[a]})});var ma=/["'&<>]/;
function u(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=ma.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}var na=/([A-Z])/g,oa=/^ms-/,pa=Array.isArray;function v(a,b){return{insertionMode:a,selectedValue:b}}
function qa(a,b,c){switch(b){case "select":return v(1,null!=c.value?c.value:c.defaultValue);case "svg":return v(2,null);case "math":return v(3,null);case "foreignObject":return v(1,null);case "table":return v(4,null);case "thead":case "tbody":case "tfoot":return v(5,null);case "colgroup":return v(7,null);case "tr":return v(6,null)}return 4<=a.insertionMode||0===a.insertionMode?v(1,null):a}function ra(a,b){""!==b&&a.push(u(b),"\x3c!-- --\x3e")}var sa=new Map;
function ta(a,b,c){if("object"!==typeof c)throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");b=!0;for(var d in c)if(p.call(c,d)){var f=c[d];if(null!=f&&"boolean"!==typeof f&&""!==f){if(0===d.indexOf("--")){var e=u(d);f=u((""+f).trim())}else{e=d;var g=sa.get(e);void 0!==g?e=g:(g=u(e.replace(na,"-$1").toLowerCase().replace(oa,"-ms-")),sa.set(e,g),e=g);f="number"===typeof f?0===f||p.call(t,
d)?""+f:f+"px":u((""+f).trim())}b?(b=!1,a.push(' style="',e,":",f)):a.push(";",e,":",f)}}b||a.push('"')}
function x(a,b,c,d){switch(c){case "style":ta(a,b,d);return;case "defaultValue":case "defaultChecked":case "innerHTML":case "suppressContentEditableWarning":case "suppressHydrationWarning":return}if(!(2<c.length)||"o"!==c[0]&&"O"!==c[0]||"n"!==c[1]&&"N"!==c[1])if(b=r.hasOwnProperty(c)?r[c]:null,null!==b){switch(typeof d){case "function":case "symbol":return;case "boolean":if(!b.acceptsBooleans)return}c=b.attributeName;switch(b.type){case 3:d&&a.push(" ",c,'=""');break;case 4:!0===d?a.push(" ",c,'=""'):
!1!==d&&a.push(" ",c,'="',u(d),'"');break;case 5:isNaN(d)||a.push(" ",c,'="',u(d),'"');break;case 6:!isNaN(d)&&1<=d&&a.push(" ",c,'="',u(d),'"');break;default:b.sanitizeURL&&(d=""+d),a.push(" ",c,'="',u(d),'"')}}else if(ia(c)){switch(typeof d){case "function":case "symbol":return;case "boolean":if(b=c.toLowerCase().slice(0,5),"data-"!==b&&"aria-"!==b)return}a.push(" ",c,'="',u(d),'"')}}
function z(a,b,c){if(null!=b){if(null!=c)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if("object"!==typeof b||!("__html"in b))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");b=b.__html;null!==b&&void 0!==b&&a.push(""+b)}}function ua(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function va(a,b,c,d){a.push(A(c));var f=c=null,e;for(e in b)if(p.call(b,e)){var g=b[e];if(null!=g)switch(e){case "children":c=g;break;case "dangerouslySetInnerHTML":f=g;break;default:x(a,d,e,g)}}a.push(">");z(a,f,c);return"string"===typeof c?(a.push(u(c)),null):c}var wa=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,xa=new Map;function A(a){var b=xa.get(a);if(void 0===b){if(!wa.test(a))throw Error("Invalid tag: "+a);b="<"+a;xa.set(a,b)}return b}
function ya(a,b,c,d,f){switch(b){case "select":a.push(A("select"));var e=null,g=null;for(m in c)if(p.call(c,m)){var k=c[m];if(null!=k)switch(m){case "children":e=k;break;case "dangerouslySetInnerHTML":g=k;break;case "defaultValue":case "value":break;default:x(a,d,m,k)}}a.push(">");z(a,g,e);return e;case "option":g=f.selectedValue;a.push(A("option"));var l=k=null,n=null;var m=null;for(e in c)if(p.call(c,e)&&(b=c[e],null!=b))switch(e){case "children":k=b;break;case "selected":n=b;break;case "dangerouslySetInnerHTML":m=
b;break;case "value":l=b;default:x(a,d,e,b)}if(null!=g)if(c=null!==l?""+l:ua(k),pa(g))for(d=0;d<g.length;d++){if(""+g[d]===c){a.push(' selected=""');break}}else""+g===c&&a.push(' selected=""');else n&&a.push(' selected=""');a.push(">");z(a,m,k);return k;case "textarea":a.push(A("textarea"));m=g=e=null;for(k in c)if(p.call(c,k)&&(l=c[k],null!=l))switch(k){case "children":m=l;break;case "value":e=l;break;case "defaultValue":g=l;break;case "dangerouslySetInnerHTML":throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
default:x(a,d,k,l)}null===e&&null!==g&&(e=g);a.push(">");if(null!=m){if(null!=e)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(pa(m)&&1<m.length)throw Error("<textarea> can only have at most one child.");e=""+m}"string"===typeof e&&"\n"===e[0]&&a.push("\n");null!==e&&a.push(u(""+e));return null;case "input":a.push(A("input"));l=m=k=e=null;for(g in c)if(p.call(c,g)&&(n=c[g],null!=n))switch(g){case "children":case "dangerouslySetInnerHTML":throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
case "defaultChecked":l=n;break;case "defaultValue":k=n;break;case "checked":m=n;break;case "value":e=n;break;default:x(a,d,g,n)}null!==m?x(a,d,"checked",m):null!==l&&x(a,d,"checked",l);null!==e?x(a,d,"value",e):null!==k&&x(a,d,"value",k);a.push("/>");return null;case "menuitem":a.push(A("menuitem"));for(var y in c)if(p.call(c,y)&&(e=c[y],null!=e))switch(y){case "children":case "dangerouslySetInnerHTML":throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");default:x(a,d,y,
e)}a.push(">");return null;case "listing":case "pre":a.push(A(b));g=e=null;for(l in c)if(p.call(c,l)&&(k=c[l],null!=k))switch(l){case "children":e=k;break;case "dangerouslySetInnerHTML":g=k;break;default:x(a,d,l,k)}a.push(">");if(null!=g){if(null!=e)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if("object"!==typeof g||!("__html"in g))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
c=g.__html;null!==c&&void 0!==c&&("string"===typeof c&&0<c.length&&"\n"===c[0]?a.push("\n",c):a.push(""+c))}"string"===typeof e&&"\n"===e[0]&&a.push("\n");return e;case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":a.push(A(b));for(var B in c)if(p.call(c,B)&&(e=c[B],null!=e))switch(B){case "children":case "dangerouslySetInnerHTML":throw Error(b+" is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
default:x(a,d,B,e)}a.push("/>");return null;case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return va(a,c,b,d);case "html":return 0===f.insertionMode&&a.push("<!DOCTYPE html>"),va(a,c,b,d);default:if(-1===b.indexOf("-")&&"string"!==typeof c.is)return va(a,c,b,d);a.push(A(b));g=e=null;for(n in c)if(p.call(c,n)&&(k=c[n],null!=k))switch(n){case "children":e=k;break;case "dangerouslySetInnerHTML":g=
k;break;case "style":ta(a,d,k);break;case "suppressContentEditableWarning":case "suppressHydrationWarning":break;default:ia(n)&&"function"!==typeof k&&"symbol"!==typeof k&&a.push(" ",n,'="',u(k),'"')}a.push(">");z(a,g,e);return e}}function za(a,b,c){h(a,'\x3c!--$?--\x3e<template id="');if(null===c)throw Error("An ID must have been assigned before we can complete the boundary.");h(a,c);return h(a,'"></template>')}
function Aa(a,b,c,d){switch(c.insertionMode){case 0:case 1:return h(a,'<div hidden id="'),h(a,b.segmentPrefix),b=d.toString(16),h(a,b),h(a,'">');case 2:return h(a,'<svg aria-hidden="true" style="display:none" id="'),h(a,b.segmentPrefix),b=d.toString(16),h(a,b),h(a,'">');case 3:return h(a,'<math aria-hidden="true" style="display:none" id="'),h(a,b.segmentPrefix),b=d.toString(16),h(a,b),h(a,'">');case 4:return h(a,'<table hidden id="'),h(a,b.segmentPrefix),b=d.toString(16),h(a,b),h(a,'">');case 5:return h(a,
'<table hidden><tbody id="'),h(a,b.segmentPrefix),b=d.toString(16),h(a,b),h(a,'">');case 6:return h(a,'<table hidden><tr id="'),h(a,b.segmentPrefix),b=d.toString(16),h(a,b),h(a,'">');case 7:return h(a,'<table hidden><colgroup id="'),h(a,b.segmentPrefix),b=d.toString(16),h(a,b),h(a,'">');default:throw Error("Unknown insertion mode. This is a bug in React.");}}
function Ba(a,b){switch(b.insertionMode){case 0:case 1:return h(a,"</div>");case 2:return h(a,"</svg>");case 3:return h(a,"</math>");case 4:return h(a,"</table>");case 5:return h(a,"</tbody></table>");case 6:return h(a,"</tr></table>");case 7:return h(a,"</colgroup></table>");default:throw Error("Unknown insertion mode. This is a bug in React.");}}
function Ca(a,b){b=void 0===b?"":b;return{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:b+"P:",segmentPrefix:b+"S:",boundaryPrefix:b+"B:",idPrefix:b,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:a}}function Da(){return{insertionMode:1,selectedValue:null}}
var C=Object.assign,Ea=Symbol.for("react.element"),Fa=Symbol.for("react.portal"),Ga=Symbol.for("react.fragment"),Ha=Symbol.for("react.strict_mode"),Ia=Symbol.for("react.profiler"),Ja=Symbol.for("react.provider"),Ka=Symbol.for("react.context"),La=Symbol.for("react.forward_ref"),Ma=Symbol.for("react.suspense"),Na=Symbol.for("react.suspense_list"),Oa=Symbol.for("react.memo"),Pa=Symbol.for("react.lazy"),Qa=Symbol.for("react.scope"),Ra=Symbol.for("react.debug_trace_mode"),Sa=Symbol.for("react.legacy_hidden"),
Ta=Symbol.for("react.default_value"),Ua=Symbol.iterator;
function Va(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Ga:return"Fragment";case Fa:return"Portal";case Ia:return"Profiler";case Ha:return"StrictMode";case Ma:return"Suspense";case Na:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ka:return(a.displayName||"Context")+".Consumer";case Ja:return(a._context.displayName||"Context")+".Provider";case La:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Oa:return b=a.displayName||null,null!==b?b:Va(a.type)||"Memo";case Pa:b=a._payload;a=a._init;try{return Va(a(b))}catch(c){}}return null}var Wa={};function Xa(a,b){a=a.contextTypes;if(!a)return Wa;var c={},d;for(d in a)c[d]=b[d];return c}var D=null;
function E(a,b){if(a!==b){a.context._currentValue2=a.parentValue;a=a.parent;var c=b.parent;if(null===a){if(null!==c)throw Error("The stacks must reach the root at the same time. This is a bug in React.");}else{if(null===c)throw Error("The stacks must reach the root at the same time. This is a bug in React.");E(a,c)}b.context._currentValue2=b.value}}function Ya(a){a.context._currentValue2=a.parentValue;a=a.parent;null!==a&&Ya(a)}
function Za(a){var b=a.parent;null!==b&&Za(b);a.context._currentValue2=a.value}function $a(a,b){a.context._currentValue2=a.parentValue;a=a.parent;if(null===a)throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");a.depth===b.depth?E(a,b):$a(a,b)}
function ab(a,b){var c=b.parent;if(null===c)throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");a.depth===c.depth?E(a,c):ab(a,c);b.context._currentValue2=b.value}function F(a){var b=D;b!==a&&(null===b?Za(a):null===a?Ya(b):b.depth===a.depth?E(b,a):b.depth>a.depth?$a(b,a):ab(b,a),D=a)}
var bb={isMounted:function(){return!1},enqueueSetState:function(a,b){a=a._reactInternals;null!==a.queue&&a.queue.push(b)},enqueueReplaceState:function(a,b){a=a._reactInternals;a.replace=!0;a.queue=[b]},enqueueForceUpdate:function(){}};
function cb(a,b,c,d){var f=void 0!==a.state?a.state:null;a.updater=bb;a.props=c;a.state=f;var e={queue:[],replace:!1};a._reactInternals=e;var g=b.contextType;a.context="object"===typeof g&&null!==g?g._currentValue2:d;g=b.getDerivedStateFromProps;"function"===typeof g&&(g=g(c,f),f=null===g||void 0===g?f:C({},f,g),a.state=f);if("function"!==typeof b.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate&&("function"===typeof a.UNSAFE_componentWillMount||"function"===typeof a.componentWillMount))if(b=
a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),b!==a.state&&bb.enqueueReplaceState(a,a.state,null),null!==e.queue&&0<e.queue.length)if(b=e.queue,g=e.replace,e.queue=null,e.replace=!1,g&&1===b.length)a.state=b[0];else{e=g?b[0]:a.state;f=!0;for(g=g?1:0;g<b.length;g++){var k=b[g];k="function"===typeof k?k.call(a,e,c,d):k;null!=k&&(f?(f=!1,e=C({},e,k)):C(e,k))}a.state=e}else e.queue=null}
var db={id:1,overflow:""};function eb(a,b,c){var d=a.id;a=a.overflow;var f=32-G(d)-1;d&=~(1<<f);c+=1;var e=32-G(b)+f;if(30<e){var g=f-f%5;e=(d&(1<<g)-1).toString(32);d>>=g;f-=g;return{id:1<<32-G(b)+f|c<<f|d,overflow:e+a}}return{id:1<<e|c<<f|d,overflow:a}}var G=Math.clz32?Math.clz32:fb,gb=Math.log,hb=Math.LN2;function fb(a){a>>>=0;return 0===a?32:31-(gb(a)/hb|0)|0}function ib(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var jb="function"===typeof Object.is?Object.is:ib,H=null,kb=null,I=null,J=null,K=!1,L=!1,M=0,N=null,O=0;
function P(){if(null===H)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");return H}
function lb(){if(0<O)throw Error("Rendered more hooks than during the previous render");return{memoizedState:null,queue:null,next:null}}function mb(){null===J?null===I?(K=!1,I=J=lb()):(K=!0,J=I):null===J.next?(K=!1,J=J.next=lb()):(K=!0,J=J.next);return J}function nb(){kb=H=null;L=!1;I=null;O=0;J=N=null}function ob(a,b){return"function"===typeof b?b(a):b}
function pb(a,b,c){H=P();J=mb();if(K){var d=J.queue;b=d.dispatch;if(null!==N&&(c=N.get(d),void 0!==c)){N.delete(d);d=J.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);J.memoizedState=d;return[d,b]}return[J.memoizedState,b]}a=a===ob?"function"===typeof b?b():b:void 0!==c?c(b):b;J.memoizedState=a;a=J.queue={last:null,dispatch:null};a=a.dispatch=qb.bind(null,H,a);return[J.memoizedState,a]}
function rb(a,b){H=P();J=mb();b=void 0===b?null:b;if(null!==J){var c=J.memoizedState;if(null!==c&&null!==b){var d=c[1];a:if(null===d)d=!1;else{for(var f=0;f<d.length&&f<b.length;f++)if(!jb(b[f],d[f])){d=!1;break a}d=!0}if(d)return c[0]}}a=a();J.memoizedState=[a,b];return a}
function qb(a,b,c){if(25<=O)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(a===H)if(L=!0,a={action:c,next:null},null===N&&(N=new Map),c=N.get(b),void 0===c)N.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}}function sb(){throw Error("startTransition cannot be called during server rendering.");}function Q(){}
var tb={readContext:function(a){return a._currentValue2},useContext:function(a){P();return a._currentValue2},useMemo:rb,useReducer:pb,useRef:function(a){H=P();J=mb();var b=J.memoizedState;return null===b?(a={current:a},J.memoizedState=a):b},useState:function(a){return pb(ob,a)},useInsertionEffect:Q,useLayoutEffect:function(){},useCallback:function(a,b){return rb(function(){return a},b)},useImperativeHandle:Q,useEffect:Q,useDebugValue:Q,useDeferredValue:function(a){P();return a},useTransition:function(){P();
return[!1,sb]},useId:function(){var a=kb.treeContext;var b=a.overflow;a=a.id;a=(a&~(1<<32-G(a)-1)).toString(32)+b;var c=R;if(null===c)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");b=M++;a=":"+c.idPrefix+"R"+a;0<b&&(a+="H"+b.toString(32));return a+":"},useMutableSource:function(a,b){P();return b(a._source)},useSyncExternalStore:function(a,b,c){if(void 0===c)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
return c()}},R=null,ub=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function vb(a){console.error(a)}function S(){}
function wb(a,b,c,d,f,e,g,k,l){var n=[],m=new Set;b={destination:null,responseState:b,progressiveChunkSize:void 0===d?12800:d,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:m,pingedTasks:n,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:void 0===f?vb:f,onAllReady:void 0===e?S:e,onShellReady:void 0===g?S:g,onShellError:void 0===k?S:k,onFatalError:void 0===l?S:l};c=T(b,0,null,c);c.parentFlushed=!0;
a=xb(b,a,null,c,m,Wa,null,db);n.push(a);return b}function xb(a,b,c,d,f,e,g,k){a.allPendingTasks++;null===c?a.pendingRootTasks++:c.pendingTasks++;var l={node:b,ping:function(){var b=a.pingedTasks;b.push(l);1===b.length&&yb(a)},blockedBoundary:c,blockedSegment:d,abortSet:f,legacyContext:e,context:g,treeContext:k};f.add(l);return l}function T(a,b,c,d){return{status:0,id:-1,index:b,parentFlushed:!1,chunks:[],children:[],formatContext:d,boundary:c}}function U(a,b){a=a.onError;a(b)}
function V(a,b){var c=a.onShellError;c(b);c=a.onFatalError;c(b);null!==a.destination?(a.status=2,a.destination.destroy(b)):(a.status=1,a.fatalError=b)}function zb(a,b,c,d,f){H={};kb=b;M=0;for(a=c(d,f);L;)L=!1,M=0,O+=1,J=null,a=c(d,f);nb();return a}
function Ab(a,b,c,d){var f=c.render(),e=d.childContextTypes;if(null!==e&&void 0!==e){var g=b.legacyContext;if("function"!==typeof c.getChildContext)d=g;else{c=c.getChildContext();for(var k in c)if(!(k in e))throw Error((Va(d)||"Unknown")+'.getChildContext(): key "'+k+'" is not defined in childContextTypes.');d=C({},g,c)}b.legacyContext=d;W(a,b,f);b.legacyContext=g}else W(a,b,f)}
function Bb(a,b){if(a&&a.defaultProps){b=C({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}
function Cb(a,b,c,d,f){if("function"===typeof c)if(c.prototype&&c.prototype.isReactComponent){f=Xa(c,b.legacyContext);var e=c.contextType;e=new c(d,"object"===typeof e&&null!==e?e._currentValue2:f);cb(e,c,d,f);Ab(a,b,e,c)}else{e=Xa(c,b.legacyContext);f=zb(a,b,c,d,e);var g=0!==M;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof)cb(f,c,d,e),Ab(a,b,f,c);else if(g){d=b.treeContext;b.treeContext=eb(d,1,0);try{W(a,b,f)}finally{b.treeContext=d}}else W(a,b,f)}else if("string"===
typeof c)switch(f=b.blockedSegment,e=ya(f.chunks,c,d,a.responseState,f.formatContext),g=f.formatContext,f.formatContext=qa(g,c,d),Db(a,b,e),f.formatContext=g,c){case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "input":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":break;default:f.chunks.push("</",c,">")}else{switch(c){case Sa:case Ra:case Ha:case Ia:case Ga:W(a,b,d.children);return;case Na:W(a,b,d.children);return;case Qa:throw Error("ReactDOMServer does not yet support scope components.");
case Ma:a:{c=b.blockedBoundary;f=b.blockedSegment;e=d.fallback;d=d.children;g=new Set;var k={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:g},l=T(a,f.chunks.length,k,f.formatContext);f.children.push(l);var n=T(a,0,null,f.formatContext);n.parentFlushed=!0;b.blockedBoundary=k;b.blockedSegment=n;try{if(Db(a,b,d),n.status=1,X(k,n),0===k.pendingTasks)break a}catch(m){n.status=4,U(a,m),k.forceClientRender=!0}finally{b.blockedBoundary=
c,b.blockedSegment=f}b=xb(a,e,c,l,g,b.legacyContext,b.context,b.treeContext);a.pingedTasks.push(b)}return}if("object"===typeof c&&null!==c)switch(c.$$typeof){case La:d=zb(a,b,c.render,d,f);if(0!==M){c=b.treeContext;b.treeContext=eb(c,1,0);try{W(a,b,d)}finally{b.treeContext=c}}else W(a,b,d);return;case Oa:c=c.type;d=Bb(c,d);Cb(a,b,c,d,f);return;case Ja:f=d.children;c=c._context;d=d.value;e=c._currentValue2;c._currentValue2=d;g=D;D=d={parent:g,depth:null===g?0:g.depth+1,context:c,parentValue:e,value:d};
b.context=d;W(a,b,f);a=D;if(null===a)throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");d=a.parentValue;a.context._currentValue2=d===Ta?a.context._defaultValue:d;a=D=a.parent;b.context=a;return;case Ka:d=d.children;d=d(c._currentValue2);W(a,b,d);return;case Pa:f=c._init;c=f(c._payload);d=Bb(c,d);Cb(a,b,c,d,void 0);return}throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+((null==
c?c:typeof c)+"."));}}
function W(a,b,c){b.node=c;if("object"===typeof c&&null!==c){switch(c.$$typeof){case Ea:Cb(a,b,c.type,c.props,c.ref);return;case Fa:throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");case Pa:var d=c._init;c=d(c._payload);W(a,b,c);return}if(pa(c)){Eb(a,b,c);return}null===c||"object"!==typeof c?d=null:(d=Ua&&c[Ua]||c["@@iterator"],d="function"===typeof d?d:null);if(d&&(d=d.call(c))){c=d.next();if(!c.done){var f=
[];do f.push(c.value),c=d.next();while(!c.done);Eb(a,b,f)}return}a=Object.prototype.toString.call(c);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===a?"object with keys {"+Object.keys(c).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");}"string"===typeof c?(b=b.blockedSegment.chunks,a.responseState.generateStaticMarkup?b.push(u(c)):ra(b,c)):"number"===typeof c&&(b=b.blockedSegment.chunks,c=""+c,a.responseState.generateStaticMarkup?
b.push(u(c)):ra(b,c))}function Eb(a,b,c){for(var d=c.length,f=0;f<d;f++){var e=b.treeContext;b.treeContext=eb(e,d,f);try{Db(a,b,c[f])}finally{b.treeContext=e}}}
function Db(a,b,c){var d=b.blockedSegment.formatContext,f=b.legacyContext,e=b.context;try{return W(a,b,c)}catch(l){if(nb(),"object"===typeof l&&null!==l&&"function"===typeof l.then){c=l;var g=b.blockedSegment,k=T(a,g.chunks.length,null,g.formatContext);g.children.push(k);a=xb(a,b.node,b.blockedBoundary,k,b.abortSet,b.legacyContext,b.context,b.treeContext).ping;c.then(a,a);b.blockedSegment.formatContext=d;b.legacyContext=f;b.context=e;F(e)}else throw b.blockedSegment.formatContext=d,b.legacyContext=
f,b.context=e,F(e),l;}}function Fb(a){var b=a.blockedBoundary;a=a.blockedSegment;a.status=3;Gb(this,b,a)}
function Hb(a){var b=a.blockedBoundary;a.blockedSegment.status=3;null===b?(this.allPendingTasks--,2!==this.status&&(this.status=2,null!==this.destination&&this.destination.push(null))):(b.pendingTasks--,b.forceClientRender||(b.forceClientRender=!0,b.parentFlushed&&this.clientRenderedBoundaries.push(b)),b.fallbackAbortableTasks.forEach(Hb,this),b.fallbackAbortableTasks.clear(),this.allPendingTasks--,0===this.allPendingTasks&&(a=this.onAllReady,a()))}
function X(a,b){if(0===b.chunks.length&&1===b.children.length&&null===b.children[0].boundary){var c=b.children[0];c.id=b.id;c.parentFlushed=!0;1===c.status&&X(a,c)}else a.completedSegments.push(b)}
function Gb(a,b,c){if(null===b){if(c.parentFlushed){if(null!==a.completedRootSegment)throw Error("There can only be one root segment. This is a bug in React.");a.completedRootSegment=c}a.pendingRootTasks--;0===a.pendingRootTasks&&(a.onShellError=S,b=a.onShellReady,b())}else b.pendingTasks--,b.forceClientRender||(0===b.pendingTasks?(c.parentFlushed&&1===c.status&&X(b,c),b.parentFlushed&&a.completedBoundaries.push(b),b.fallbackAbortableTasks.forEach(Fb,a),b.fallbackAbortableTasks.clear()):c.parentFlushed&&
1===c.status&&(X(b,c),1===b.completedSegments.length&&b.parentFlushed&&a.partialBoundaries.push(b)));a.allPendingTasks--;0===a.allPendingTasks&&(a=a.onAllReady,a())}
function yb(a){if(2!==a.status){var b=D,c=ub.current;ub.current=tb;var d=R;R=a.responseState;try{var f=a.pingedTasks,e;for(e=0;e<f.length;e++){var g=f[e];var k=a,l=g.blockedSegment;if(0===l.status){F(g.context);try{W(k,g,g.node),g.abortSet.delete(g),l.status=1,Gb(k,g.blockedBoundary,l)}catch(w){if(nb(),"object"===typeof w&&null!==w&&"function"===typeof w.then){var n=g.ping;w.then(n,n)}else{g.abortSet.delete(g);l.status=4;var m=g.blockedBoundary,y=w;U(k,y);null===m?V(k,y):(m.pendingTasks--,m.forceClientRender||
(m.forceClientRender=!0,m.parentFlushed&&k.clientRenderedBoundaries.push(m)));k.allPendingTasks--;if(0===k.allPendingTasks){var B=k.onAllReady;B()}}}finally{}}}f.splice(0,e);null!==a.destination&&Ib(a,a.destination)}catch(w){U(a,w),V(a,w)}finally{R=d,ub.current=c,c===tb&&F(b)}}}
function Y(a,b,c){c.parentFlushed=!0;switch(c.status){case 0:var d=c.id=a.nextSegmentId++;a=a.responseState;h(b,'<template id="');h(b,a.placeholderPrefix);a=d.toString(16);h(b,a);return h(b,'"></template>');case 1:c.status=2;var f=!0;d=c.chunks;var e=0;c=c.children;for(var g=0;g<c.length;g++){for(f=c[g];e<f.index;e++)h(b,d[e]);f=Z(a,b,f)}for(;e<d.length-1;e++)h(b,d[e]);e<d.length&&(f=h(b,d[e]));return f;default:throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
}}
function Z(a,b,c){var d=c.boundary;if(null===d)return Y(a,b,c);d.parentFlushed=!0;if(d.forceClientRender)return a.responseState.generateStaticMarkup||h(b,"\x3c!--$!--\x3e"),Y(a,b,c),a=a.responseState.generateStaticMarkup?!0:h(b,"\x3c!--/$--\x3e"),a;if(0<d.pendingTasks){d.rootSegmentID=a.nextSegmentId++;0<d.completedSegments.length&&a.partialBoundaries.push(d);var f=a.responseState;var e=f.nextSuspenseID++;f=f.boundaryPrefix+e.toString(16);d=d.id=f;za(b,a.responseState,d);Y(a,b,c);return h(b,"\x3c!--/$--\x3e")}if(d.byteSize>a.progressiveChunkSize)return d.rootSegmentID=
a.nextSegmentId++,a.completedBoundaries.push(d),za(b,a.responseState,d.id),Y(a,b,c),h(b,"\x3c!--/$--\x3e");a.responseState.generateStaticMarkup||h(b,"\x3c!--$--\x3e");c=d.completedSegments;if(1!==c.length)throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");Z(a,b,c[0]);a=a.responseState.generateStaticMarkup?!0:h(b,"\x3c!--/$--\x3e");return a}function Jb(a,b,c){Aa(b,a.responseState,c.formatContext,c.id);Z(a,b,c);return Ba(b,c.formatContext)}
function Kb(a,b,c){for(var d=c.completedSegments,f=0;f<d.length;f++)Lb(a,b,c,d[f]);d.length=0;a=a.responseState;d=c.id;c=c.rootSegmentID;h(b,a.startInlineScript);a.sentCompleteBoundaryFunction?h(b,'$RC("'):(a.sentCompleteBoundaryFunction=!0,h(b,'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));
if(null===d)throw Error("An ID must have been assigned before we can complete the boundary.");c=c.toString(16);h(b,d);h(b,'","');h(b,a.segmentPrefix);h(b,c);return h(b,'")\x3c/script>')}
function Lb(a,b,c,d){if(2===d.status)return!0;var f=d.id;if(-1===f){if(-1===(d.id=c.rootSegmentID))throw Error("A root segment ID must have been assigned by now. This is a bug in React.");return Jb(a,b,d)}Jb(a,b,d);a=a.responseState;h(b,a.startInlineScript);a.sentCompleteSegmentFunction?h(b,'$RS("'):(a.sentCompleteSegmentFunction=!0,h(b,'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));
h(b,a.segmentPrefix);f=f.toString(16);h(b,f);h(b,'","');h(b,a.placeholderPrefix);h(b,f);return h(b,'")\x3c/script>')}
function Ib(a,b){try{var c=a.completedRootSegment;if(null!==c&&0===a.pendingRootTasks){Z(a,b,c);a.completedRootSegment=null;var d=a.responseState.bootstrapChunks;for(c=0;c<d.length-1;c++)h(b,d[c]);c<d.length&&h(b,d[c])}var f=a.clientRenderedBoundaries,e;for(e=0;e<f.length;e++){d=b;var g=a.responseState,k=f[e].id;h(d,g.startInlineScript);g.sentClientRenderFunction?h(d,'$RX("'):(g.sentClientRenderFunction=!0,h(d,'function $RX(a){if(a=document.getElementById(a))a=a.previousSibling,a.data="$!",a._reactRetry&&a._reactRetry()};$RX("'));
if(null===k)throw Error("An ID must have been assigned before we can complete the boundary.");h(d,k);if(!h(d,'")\x3c/script>')){a.destination=null;e++;f.splice(0,e);return}}f.splice(0,e);var l=a.completedBoundaries;for(e=0;e<l.length;e++)if(!Kb(a,b,l[e])){a.destination=null;e++;l.splice(0,e);return}l.splice(0,e);var n=a.partialBoundaries;for(e=0;e<n.length;e++){var m=n[e];a:{f=a;g=b;var y=m.completedSegments;for(k=0;k<y.length;k++)if(!Lb(f,g,m,y[k])){k++;y.splice(0,k);var B=!1;break a}y.splice(0,
k);B=!0}if(!B){a.destination=null;e++;n.splice(0,e);return}}n.splice(0,e);var w=a.completedBoundaries;for(e=0;e<w.length;e++)if(!Kb(a,b,w[e])){a.destination=null;e++;w.splice(0,e);return}w.splice(0,e)}finally{0===a.allPendingTasks&&0===a.pingedTasks.length&&0===a.clientRenderedBoundaries.length&&0===a.completedBoundaries.length&&b.push(null)}}
function Mb(a,b){if(1===a.status)a.status=2,b.destroy(a.fatalError);else if(2!==a.status&&null===a.destination){a.destination=b;try{Ib(a,b)}catch(c){U(a,c),V(a,c)}}}function Nb(a){try{var b=a.abortableTasks;b.forEach(Hb,a);b.clear();null!==a.destination&&Ib(a,a.destination)}catch(c){U(a,c),V(a,c)}}function Ob(){}
function Pb(a,b,c){var d=!1,f=null,e="",g=!1;a=wb(a,Ca(c,b?b.identifierPrefix:void 0),Da(),Infinity,Ob,void 0,function(){g=!0},void 0,void 0);yb(a);Nb(a);Mb(a,{push:function(a){null!==a&&(e+=a);return!0},destroy:function(a){d=!0;f=a}});if(d)throw f;if(!g)throw Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");return e}
var Qb=function(a){function b(){var b=a.call(this,{})||this;b.request=null;b.startedFlowing=!1;return b}ca(b,a);var c=b.prototype;c._destroy=function(a,b){Nb(this.request);b(a)};c._read=function(){this.startedFlowing&&Mb(this.request,this)};return b}(ba.Readable);function Rb(){}function Sb(a,b){var c=new Qb,d=wb(a,Ca(!1,b?b.identifierPrefix:void 0),Da(),Infinity,Rb,function(){c.startedFlowing=!0;Mb(d,c)},void 0,void 0);c.request=d;yb(d);return c}
exports.renderToNodeStream=function(a,b){return Sb(a,b)};exports.renderToStaticMarkup=function(a,b){return Pb(a,b,!0)};exports.renderToStaticNodeStream=function(a,b){return Sb(a,b)};exports.renderToString=function(a,b){return Pb(a,b,!1)};exports.version="18.1.0";


/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(5);
} else {
  module.exports = __webpack_require__(6);
}


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;
exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
exports.useTransition=function(){return U.current.useTransition()};exports.version="18.1.0";


/***/ }),
/* 6 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var ReactVersion = '18.1.0';

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

// ATTENTION

var REACT_ELEMENT_TYPE =  Symbol.for('react.element');
var REACT_PORTAL_TYPE =  Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE =  Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE =  Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE =  Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE =  Symbol.for('react.provider');
var REACT_CONTEXT_TYPE =  Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE =  Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE =  Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE =  Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE =  Symbol.for('react.memo');
var REACT_LAZY_TYPE =  Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE =  Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL =  Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: null
};

var ReactCurrentActQueue = {
  current: null,
  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
  isBatchingLegacy: false,
  didScheduleLegacyUpdate: false
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      printWarning('warn', format, args);
    }
  }
}
function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var assign = Object.assign;

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (element === null || element === undefined) {
    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
  }

  var propName; // Original props are copied

  var props = assign({}, element.props); // Reserved names are extracted

  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    {
      checkKeyStringCoercion(element.key);
    }

    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        {
          // The `if` statement here prevents auto-disabling of the safe
          // coercion ESLint rule, so we must manually disable it below.
          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
            checkKeyStringCoercion(mappedChild.key);
          }
        }

        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        // eslint-disable-next-line react-internal/safe-string-coercion
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      // eslint-disable-next-line react-internal/safe-string-coercion
      var childrenString = String(children);
      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    throw new Error('React.Children.only expected to receive a single React element child.');
  }

  return children;
}

function createContext(defaultValue) {
  // TODO: Second argument used to be an optional `calculateChangedBits`
  // function. Warn to reserve for future use?
  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null,
    // Add these to use same hidden class in VM as ServerContext
    _defaultValue: null,
    _globalName: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.
    // This might throw either because it's missing or throws. If so, we treat it
    // as still uninitialized and try again next time. Which is the same as what
    // happens if the ctor or any wrappers processing the ctor throws. This might
    // end up fixing it if the resolution was a concurrency bug.

    thenable.then(function (moduleObject) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = moduleObject;
      }
    }, function (error) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });

    if (payload._status === Uninitialized) {
      // In case, we're still uninitialized, then we're waiting for the thenable
      // to resolve. Set it as pending in the meantime.
      var pending = payload;
      pending._status = Pending;
      pending._result = thenable;
    }
  }

  if (payload._status === Resolved) {
    var moduleObject = payload._result;

    {
      if (moduleObject === undefined) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
      }
    }

    {
      if (!('default' in moduleObject)) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
      }
    }

    return moduleObject.default;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: Uninitialized,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.forwardRef((props, ref) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!render.name && !render.displayName) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.memo((props) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!type.name && !type.displayName) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  {
    if (dispatcher === null) {
      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
    }
  } // Will result in a null access error if accessed outside render phase. We
  // intentionally don't throw our own error because this is in a hot path.
  // Also helps ensure this is inlined.


  return dispatcher;
}
function useContext(Context) {
  var dispatcher = resolveDispatcher();

  {
    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useInsertionEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useInsertionEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}
function useTransition() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useTransition();
}
function useDeferredValue(value) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useDeferredValue(value);
}
function useId() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useId();
}
function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

function startTransition(scope, options) {
  var prevTransition = ReactCurrentBatchConfig.transition;
  ReactCurrentBatchConfig.transition = {};
  var currentTransition = ReactCurrentBatchConfig.transition;

  {
    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
  }

  try {
    scope();
  } finally {
    ReactCurrentBatchConfig.transition = prevTransition;

    {
      if (prevTransition === null && currentTransition._updatedFibers) {
        var updatedFibersCount = currentTransition._updatedFibers.size;

        if (updatedFibersCount > 10) {
          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
        }

        currentTransition._updatedFibers.clear();
      }
    }
  }
}

var didWarnAboutMessageChannel = false;
var enqueueTaskImpl = null;
function enqueueTask(task) {
  if (enqueueTaskImpl === null) {
    try {
      // read require off the module object to get around the bundlers.
      // we don't want them to detect a require and bundle a Node polyfill.
      var requireString = ('require' + Math.random()).slice(0, 7);
      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
      // version of setImmediate, bypassing fake timers if any.

      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
    } catch (_err) {
      // we're in a browser
      // we can't use regular timers because they may still be faked
      // so we try MessageChannel+postMessage instead
      enqueueTaskImpl = function (callback) {
        {
          if (didWarnAboutMessageChannel === false) {
            didWarnAboutMessageChannel = true;

            if (typeof MessageChannel === 'undefined') {
              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
            }
          }
        }

        var channel = new MessageChannel();
        channel.port1.onmessage = callback;
        channel.port2.postMessage(undefined);
      };
    }
  }

  return enqueueTaskImpl(task);
}

var actScopeDepth = 0;
var didWarnNoAwaitAct = false;
function act(callback) {
  {
    // `act` calls can be nested, so we track the depth. This represents the
    // number of `act` scopes on the stack.
    var prevActScopeDepth = actScopeDepth;
    actScopeDepth++;

    if (ReactCurrentActQueue.current === null) {
      // This is the outermost `act` scope. Initialize the queue. The reconciler
      // will detect the queue and use it instead of Scheduler.
      ReactCurrentActQueue.current = [];
    }

    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
    var result;

    try {
      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
      // set to `true` while the given callback is executed, not for updates
      // triggered during an async event, because this is how the legacy
      // implementation of `act` behaved.
      ReactCurrentActQueue.isBatchingLegacy = true;
      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
      // which flushed updates immediately after the scope function exits, even
      // if it's an async function.

      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
        var queue = ReactCurrentActQueue.current;

        if (queue !== null) {
          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
          flushActQueue(queue);
        }
      }
    } catch (error) {
      popActScope(prevActScopeDepth);
      throw error;
    } finally {
      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
    }

    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
      // for it to resolve before exiting the current scope.

      var wasAwaited = false;
      var thenable = {
        then: function (resolve, reject) {
          wasAwaited = true;
          thenableResult.then(function (returnValue) {
            popActScope(prevActScopeDepth);

            if (actScopeDepth === 0) {
              // We've exited the outermost act scope. Recursively flush the
              // queue until there's no remaining work.
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }, function (error) {
            // The callback threw an error.
            popActScope(prevActScopeDepth);
            reject(error);
          });
        }
      };

      {
        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
          // eslint-disable-next-line no-undef
          Promise.resolve().then(function () {}).then(function () {
            if (!wasAwaited) {
              didWarnNoAwaitAct = true;

              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
            }
          });
        }
      }

      return thenable;
    } else {
      var returnValue = result; // The callback is not an async function. Exit the current scope
      // immediately, without awaiting.

      popActScope(prevActScopeDepth);

      if (actScopeDepth === 0) {
        // Exiting the outermost act scope. Flush the queue.
        var _queue = ReactCurrentActQueue.current;

        if (_queue !== null) {
          flushActQueue(_queue);
          ReactCurrentActQueue.current = null;
        } // Return a thenable. If the user awaits it, we'll flush again in
        // case additional work was scheduled by a microtask.


        var _thenable = {
          then: function (resolve, reject) {
            // Confirm we haven't re-entered another `act` scope, in case
            // the user does something weird like await the thenable
            // multiple times.
            if (ReactCurrentActQueue.current === null) {
              // Recursively flush the queue until there's no remaining work.
              ReactCurrentActQueue.current = [];
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }
        };
        return _thenable;
      } else {
        // Since we're inside a nested `act` scope, the returned thenable
        // immediately resolves. The outer scope will flush the queue.
        var _thenable2 = {
          then: function (resolve, reject) {
            resolve(returnValue);
          }
        };
        return _thenable2;
      }
    }
  }
}

function popActScope(prevActScopeDepth) {
  {
    if (prevActScopeDepth !== actScopeDepth - 1) {
      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
    }

    actScopeDepth = prevActScopeDepth;
  }
}

function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
  {
    var queue = ReactCurrentActQueue.current;

    if (queue !== null) {
      try {
        flushActQueue(queue);
        enqueueTask(function () {
          if (queue.length === 0) {
            // No additional work was scheduled. Finish.
            ReactCurrentActQueue.current = null;
            resolve(returnValue);
          } else {
            // Keep flushing work until there's none left.
            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
          }
        });
      } catch (error) {
        reject(error);
      }
    } else {
      resolve(returnValue);
    }
  }
}

var isFlushing = false;

function flushActQueue(queue) {
  {
    if (!isFlushing) {
      // Prevent re-entrance.
      isFlushing = true;
      var i = 0;

      try {
        for (; i < queue.length; i++) {
          var callback = queue[i];

          do {
            callback = callback(true);
          } while (callback !== null);
        }

        queue.length = 0;
      } catch (error) {
        // If something throws, leave the remaining callbacks on the queue.
        queue = queue.slice(i + 1);
        throw error;
      } finally {
        isFlushing = false;
      }
    }
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.startTransition = startTransition;
exports.unstable_act = act;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useDeferredValue = useDeferredValue;
exports.useEffect = useEffect;
exports.useId = useId;
exports.useImperativeHandle = useImperativeHandle;
exports.useInsertionEffect = useInsertionEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.useSyncExternalStore = useSyncExternalStore;
exports.useTransition = useTransition;
exports.version = ReactVersion;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa=__webpack_require__(9),ba=__webpack_require__(4),k=null,l=0,q=!0;
function r(a,b){if("string"===typeof b){if(0!==b.length)if(2048<3*b.length)0<l&&(t(a,k.subarray(0,l)),k=new Uint8Array(2048),l=0),t(a,u.encode(b));else{var c=k;0<l&&(c=k.subarray(l));c=u.encodeInto(b,c);var d=c.read;l+=c.written;d<b.length&&(t(a,k),k=new Uint8Array(2048),l=u.encodeInto(b.slice(d),k).written);2048===l&&(t(a,k),k=new Uint8Array(2048),l=0)}}else 0!==b.byteLength&&(2048<b.byteLength?(0<l&&(t(a,k.subarray(0,l)),k=new Uint8Array(2048),l=0),t(a,b)):(c=k.length-l,c<b.byteLength&&(0===c?t(a,
k):(k.set(b.subarray(0,c),l),l+=c,t(a,k),b=b.subarray(c)),k=new Uint8Array(2048),l=0),k.set(b,l),l+=b.byteLength,2048===l&&(t(a,k),k=new Uint8Array(2048),l=0)))}function t(a,b){a=a.write(b);q=q&&a}function v(a,b){r(a,b);return q}function ca(a){k&&0<l&&a.write(k.subarray(0,l));k=null;l=0;q=!0}var u=new aa.TextEncoder;function w(a){return u.encode(a)}
var x=Object.prototype.hasOwnProperty,da=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ea={},fa={};
function ha(a){if(x.call(fa,a))return!0;if(x.call(ea,a))return!1;if(da.test(a))return fa[a]=!0;ea[a]=!0;return!1}function y(a,b,c,d,f,e,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=e;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new y(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new y(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new y(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new y(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new y(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new y(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new y(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new y(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new y(a,5,!1,a.toLowerCase(),null,!1,!1)});var ia=/[\-:]([a-z])/g;function ja(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ia,
ja);z[b]=new y(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ia,ja);z[b]=new y(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ia,ja);z[b]=new y(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new y(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new y(a,1,!1,a.toLowerCase(),null,!0,!0)});
var B={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ka=["Webkit","ms","Moz","O"];Object.keys(B).forEach(function(a){ka.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);B[b]=B[a]})});var la=/["'&<>]/;
function D(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=la.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}
var ma=/([A-Z])/g,na=/^ms-/,oa=Array.isArray,pa=w("<script>"),qa=w("\x3c/script>"),ra=w('<script src="'),sa=w('<script type="module" src="'),ta=w('" async="">\x3c/script>'),ua=/(<\/|<)(s)(cript)/gi;function va(a,b,c,d){return""+b+("s"===c?"\\u0073":"\\u0053")+d}function E(a,b){return{insertionMode:a,selectedValue:b}}
function wa(a,b,c){switch(b){case "select":return E(1,null!=c.value?c.value:c.defaultValue);case "svg":return E(2,null);case "math":return E(3,null);case "foreignObject":return E(1,null);case "table":return E(4,null);case "thead":case "tbody":case "tfoot":return E(5,null);case "colgroup":return E(7,null);case "tr":return E(6,null)}return 4<=a.insertionMode||0===a.insertionMode?E(1,null):a}var xa=w("\x3c!-- --\x3e"),ya=new Map,za=w(' style="'),Aa=w(":"),Ba=w(";");
function Ca(a,b,c){if("object"!==typeof c)throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");b=!0;for(var d in c)if(x.call(c,d)){var f=c[d];if(null!=f&&"boolean"!==typeof f&&""!==f){if(0===d.indexOf("--")){var e=D(d);f=D((""+f).trim())}else{e=d;var g=ya.get(e);void 0!==g?e=g:(g=w(D(e.replace(ma,"-$1").toLowerCase().replace(na,"-ms-"))),ya.set(e,g),e=g);f="number"===typeof f?0===f||x.call(B,
d)?""+f:f+"px":D((""+f).trim())}b?(b=!1,a.push(za,e,Aa,f)):a.push(Ba,e,Aa,f)}}b||a.push(F)}var H=w(" "),I=w('="'),F=w('"'),Da=w('=""');
function J(a,b,c,d){switch(c){case "style":Ca(a,b,d);return;case "defaultValue":case "defaultChecked":case "innerHTML":case "suppressContentEditableWarning":case "suppressHydrationWarning":return}if(!(2<c.length)||"o"!==c[0]&&"O"!==c[0]||"n"!==c[1]&&"N"!==c[1])if(b=z.hasOwnProperty(c)?z[c]:null,null!==b){switch(typeof d){case "function":case "symbol":return;case "boolean":if(!b.acceptsBooleans)return}c=b.attributeName;switch(b.type){case 3:d&&a.push(H,c,Da);break;case 4:!0===d?a.push(H,c,Da):!1!==
d&&a.push(H,c,I,D(d),F);break;case 5:isNaN(d)||a.push(H,c,I,D(d),F);break;case 6:!isNaN(d)&&1<=d&&a.push(H,c,I,D(d),F);break;default:b.sanitizeURL&&(d=""+d),a.push(H,c,I,D(d),F)}}else if(ha(c)){switch(typeof d){case "function":case "symbol":return;case "boolean":if(b=c.toLowerCase().slice(0,5),"data-"!==b&&"aria-"!==b)return}a.push(H,c,I,D(d),F)}}var K=w(">"),Ea=w("/>");
function L(a,b,c){if(null!=b){if(null!=c)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if("object"!==typeof b||!("__html"in b))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");b=b.__html;null!==b&&void 0!==b&&a.push(""+b)}}function Fa(a){var b="";ba.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}var Ga=w(' selected=""');
function Ha(a,b,c,d){a.push(M(c));var f=c=null,e;for(e in b)if(x.call(b,e)){var g=b[e];if(null!=g)switch(e){case "children":c=g;break;case "dangerouslySetInnerHTML":f=g;break;default:J(a,d,e,g)}}a.push(K);L(a,f,c);return"string"===typeof c?(a.push(D(c)),null):c}var Ia=w("\n"),Ja=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Ka=new Map;function M(a){var b=Ka.get(a);if(void 0===b){if(!Ja.test(a))throw Error("Invalid tag: "+a);b=w("<"+a);Ka.set(a,b)}return b}var La=w("<!DOCTYPE html>");
function Ma(a,b,c,d,f){switch(b){case "select":a.push(M("select"));var e=null,g=null;for(p in c)if(x.call(c,p)){var h=c[p];if(null!=h)switch(p){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "defaultValue":case "value":break;default:J(a,d,p,h)}}a.push(K);L(a,g,e);return e;case "option":g=f.selectedValue;a.push(M("option"));var m=h=null,n=null;var p=null;for(e in c)if(x.call(c,e)&&(b=c[e],null!=b))switch(e){case "children":h=b;break;case "selected":n=b;break;case "dangerouslySetInnerHTML":p=
b;break;case "value":m=b;default:J(a,d,e,b)}if(null!=g)if(c=null!==m?""+m:Fa(h),oa(g))for(d=0;d<g.length;d++){if(""+g[d]===c){a.push(Ga);break}}else""+g===c&&a.push(Ga);else n&&a.push(Ga);a.push(K);L(a,p,h);return h;case "textarea":a.push(M("textarea"));p=g=e=null;for(h in c)if(x.call(c,h)&&(m=c[h],null!=m))switch(h){case "children":p=m;break;case "value":e=m;break;case "defaultValue":g=m;break;case "dangerouslySetInnerHTML":throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
default:J(a,d,h,m)}null===e&&null!==g&&(e=g);a.push(K);if(null!=p){if(null!=e)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(oa(p)&&1<p.length)throw Error("<textarea> can only have at most one child.");e=""+p}"string"===typeof e&&"\n"===e[0]&&a.push(Ia);null!==e&&a.push(D(""+e));return null;case "input":a.push(M("input"));m=p=h=e=null;for(g in c)if(x.call(c,g)&&(n=c[g],null!=n))switch(g){case "children":case "dangerouslySetInnerHTML":throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
case "defaultChecked":m=n;break;case "defaultValue":h=n;break;case "checked":p=n;break;case "value":e=n;break;default:J(a,d,g,n)}null!==p?J(a,d,"checked",p):null!==m&&J(a,d,"checked",m);null!==e?J(a,d,"value",e):null!==h&&J(a,d,"value",h);a.push(Ea);return null;case "menuitem":a.push(M("menuitem"));for(var C in c)if(x.call(c,C)&&(e=c[C],null!=e))switch(C){case "children":case "dangerouslySetInnerHTML":throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");default:J(a,d,C,e)}a.push(K);
return null;case "listing":case "pre":a.push(M(b));g=e=null;for(m in c)if(x.call(c,m)&&(h=c[m],null!=h))switch(m){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;default:J(a,d,m,h)}a.push(K);if(null!=g){if(null!=e)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if("object"!==typeof g||!("__html"in g))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
c=g.__html;null!==c&&void 0!==c&&("string"===typeof c&&0<c.length&&"\n"===c[0]?a.push(Ia,c):a.push(""+c))}"string"===typeof e&&"\n"===e[0]&&a.push(Ia);return e;case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":a.push(M(b));for(var G in c)if(x.call(c,G)&&(e=c[G],null!=e))switch(G){case "children":case "dangerouslySetInnerHTML":throw Error(b+" is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
default:J(a,d,G,e)}a.push(Ea);return null;case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return Ha(a,c,b,d);case "html":return 0===f.insertionMode&&a.push(La),Ha(a,c,b,d);default:if(-1===b.indexOf("-")&&"string"!==typeof c.is)return Ha(a,c,b,d);a.push(M(b));g=e=null;for(n in c)if(x.call(c,n)&&(h=c[n],null!=h))switch(n){case "children":e=h;break;case "dangerouslySetInnerHTML":g=
h;break;case "style":Ca(a,d,h);break;case "suppressContentEditableWarning":case "suppressHydrationWarning":break;default:ha(n)&&"function"!==typeof h&&"symbol"!==typeof h&&a.push(H,n,I,D(h),F)}a.push(K);L(a,g,e);return e}}var Na=w("</"),Oa=w(">"),Pa=w('<template id="'),Qa=w('"></template>'),Ra=w("\x3c!--$--\x3e"),Sa=w('\x3c!--$?--\x3e<template id="'),Ta=w('"></template>'),Ua=w("\x3c!--$!--\x3e"),Va=w("\x3c!--/$--\x3e");
function Wa(a,b,c){r(a,Sa);if(null===c)throw Error("An ID must have been assigned before we can complete the boundary.");r(a,c);return v(a,Ta)}
var Xa=w('<div hidden id="'),Ya=w('">'),Za=w("</div>"),$a=w('<svg aria-hidden="true" style="display:none" id="'),ab=w('">'),bb=w("</svg>"),cb=w('<math aria-hidden="true" style="display:none" id="'),db=w('">'),eb=w("</math>"),fb=w('<table hidden id="'),gb=w('">'),hb=w("</table>"),ib=w('<table hidden><tbody id="'),jb=w('">'),kb=w("</tbody></table>"),lb=w('<table hidden><tr id="'),mb=w('">'),nb=w("</tr></table>"),ob=w('<table hidden><colgroup id="'),pb=w('">'),qb=w("</colgroup></table>");
function rb(a,b,c,d){switch(c.insertionMode){case 0:case 1:return r(a,Xa),r(a,b.segmentPrefix),r(a,d.toString(16)),v(a,Ya);case 2:return r(a,$a),r(a,b.segmentPrefix),r(a,d.toString(16)),v(a,ab);case 3:return r(a,cb),r(a,b.segmentPrefix),r(a,d.toString(16)),v(a,db);case 4:return r(a,fb),r(a,b.segmentPrefix),r(a,d.toString(16)),v(a,gb);case 5:return r(a,ib),r(a,b.segmentPrefix),r(a,d.toString(16)),v(a,jb);case 6:return r(a,lb),r(a,b.segmentPrefix),r(a,d.toString(16)),v(a,mb);case 7:return r(a,ob),r(a,
b.segmentPrefix),r(a,d.toString(16)),v(a,pb);default:throw Error("Unknown insertion mode. This is a bug in React.");}}function sb(a,b){switch(b.insertionMode){case 0:case 1:return v(a,Za);case 2:return v(a,bb);case 3:return v(a,eb);case 4:return v(a,hb);case 5:return v(a,kb);case 6:return v(a,nb);case 7:return v(a,qb);default:throw Error("Unknown insertion mode. This is a bug in React.");}}
var tb=w('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),ub=w('$RS("'),vb=w('","'),wb=w('")\x3c/script>'),xb=w('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),
yb=w('$RC("'),zb=w('","'),Ab=w('")\x3c/script>'),Bb=w('function $RX(a){if(a=document.getElementById(a))a=a.previousSibling,a.data="$!",a._reactRetry&&a._reactRetry()};$RX("'),Cb=w('$RX("'),Db=w('")\x3c/script>'),N=Object.assign,Eb=Symbol.for("react.element"),Fb=Symbol.for("react.portal"),Gb=Symbol.for("react.fragment"),Hb=Symbol.for("react.strict_mode"),Ib=Symbol.for("react.profiler"),Jb=Symbol.for("react.provider"),Kb=Symbol.for("react.context"),Lb=Symbol.for("react.forward_ref"),Mb=Symbol.for("react.suspense"),
Nb=Symbol.for("react.suspense_list"),Ob=Symbol.for("react.memo"),Pb=Symbol.for("react.lazy"),Qb=Symbol.for("react.scope"),Rb=Symbol.for("react.debug_trace_mode"),Sb=Symbol.for("react.legacy_hidden"),Tb=Symbol.for("react.default_value"),Ub=Symbol.iterator;
function Vb(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Gb:return"Fragment";case Fb:return"Portal";case Ib:return"Profiler";case Hb:return"StrictMode";case Mb:return"Suspense";case Nb:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Kb:return(a.displayName||"Context")+".Consumer";case Jb:return(a._context.displayName||"Context")+".Provider";case Lb:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ob:return b=a.displayName||null,null!==b?b:Vb(a.type)||"Memo";case Pb:b=a._payload;a=a._init;try{return Vb(a(b))}catch(c){}}return null}var Wb={};function Xb(a,b){a=a.contextTypes;if(!a)return Wb;var c={},d;for(d in a)c[d]=b[d];return c}var O=null;
function P(a,b){if(a!==b){a.context._currentValue=a.parentValue;a=a.parent;var c=b.parent;if(null===a){if(null!==c)throw Error("The stacks must reach the root at the same time. This is a bug in React.");}else{if(null===c)throw Error("The stacks must reach the root at the same time. This is a bug in React.");P(a,c)}b.context._currentValue=b.value}}function Yb(a){a.context._currentValue=a.parentValue;a=a.parent;null!==a&&Yb(a)}
function Zb(a){var b=a.parent;null!==b&&Zb(b);a.context._currentValue=a.value}function $b(a,b){a.context._currentValue=a.parentValue;a=a.parent;if(null===a)throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");a.depth===b.depth?P(a,b):$b(a,b)}
function ac(a,b){var c=b.parent;if(null===c)throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");a.depth===c.depth?P(a,c):ac(a,c);b.context._currentValue=b.value}function Q(a){var b=O;b!==a&&(null===b?Zb(a):null===a?Yb(b):b.depth===a.depth?P(b,a):b.depth>a.depth?$b(b,a):ac(b,a),O=a)}
var bc={isMounted:function(){return!1},enqueueSetState:function(a,b){a=a._reactInternals;null!==a.queue&&a.queue.push(b)},enqueueReplaceState:function(a,b){a=a._reactInternals;a.replace=!0;a.queue=[b]},enqueueForceUpdate:function(){}};
function cc(a,b,c,d){var f=void 0!==a.state?a.state:null;a.updater=bc;a.props=c;a.state=f;var e={queue:[],replace:!1};a._reactInternals=e;var g=b.contextType;a.context="object"===typeof g&&null!==g?g._currentValue:d;g=b.getDerivedStateFromProps;"function"===typeof g&&(g=g(c,f),f=null===g||void 0===g?f:N({},f,g),a.state=f);if("function"!==typeof b.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate&&("function"===typeof a.UNSAFE_componentWillMount||"function"===typeof a.componentWillMount))if(b=
a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),b!==a.state&&bc.enqueueReplaceState(a,a.state,null),null!==e.queue&&0<e.queue.length)if(b=e.queue,g=e.replace,e.queue=null,e.replace=!1,g&&1===b.length)a.state=b[0];else{e=g?b[0]:a.state;f=!0;for(g=g?1:0;g<b.length;g++){var h=b[g];h="function"===typeof h?h.call(a,e,c,d):h;null!=h&&(f?(f=!1,e=N({},e,h)):N(e,h))}a.state=e}else e.queue=null}
var dc={id:1,overflow:""};function ec(a,b,c){var d=a.id;a=a.overflow;var f=32-fc(d)-1;d&=~(1<<f);c+=1;var e=32-fc(b)+f;if(30<e){var g=f-f%5;e=(d&(1<<g)-1).toString(32);d>>=g;f-=g;return{id:1<<32-fc(b)+f|c<<f|d,overflow:e+a}}return{id:1<<e|c<<f|d,overflow:a}}var fc=Math.clz32?Math.clz32:gc,hc=Math.log,ic=Math.LN2;function gc(a){a>>>=0;return 0===a?32:31-(hc(a)/ic|0)|0}function jc(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var kc="function"===typeof Object.is?Object.is:jc,R=null,lc=null,mc=null,S=null,T=!1,nc=!1,U=0,V=null,oc=0;
function W(){if(null===R)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");return R}
function pc(){if(0<oc)throw Error("Rendered more hooks than during the previous render");return{memoizedState:null,queue:null,next:null}}function qc(){null===S?null===mc?(T=!1,mc=S=pc()):(T=!0,S=mc):null===S.next?(T=!1,S=S.next=pc()):(T=!0,S=S.next);return S}function rc(){lc=R=null;nc=!1;mc=null;oc=0;S=V=null}function sc(a,b){return"function"===typeof b?b(a):b}
function tc(a,b,c){R=W();S=qc();if(T){var d=S.queue;b=d.dispatch;if(null!==V&&(c=V.get(d),void 0!==c)){V.delete(d);d=S.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);S.memoizedState=d;return[d,b]}return[S.memoizedState,b]}a=a===sc?"function"===typeof b?b():b:void 0!==c?c(b):b;S.memoizedState=a;a=S.queue={last:null,dispatch:null};a=a.dispatch=uc.bind(null,R,a);return[S.memoizedState,a]}
function vc(a,b){R=W();S=qc();b=void 0===b?null:b;if(null!==S){var c=S.memoizedState;if(null!==c&&null!==b){var d=c[1];a:if(null===d)d=!1;else{for(var f=0;f<d.length&&f<b.length;f++)if(!kc(b[f],d[f])){d=!1;break a}d=!0}if(d)return c[0]}}a=a();S.memoizedState=[a,b];return a}
function uc(a,b,c){if(25<=oc)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(a===R)if(nc=!0,a={action:c,next:null},null===V&&(V=new Map),c=V.get(b),void 0===c)V.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}}function wc(){throw Error("startTransition cannot be called during server rendering.");}function xc(){}
var zc={readContext:function(a){return a._currentValue},useContext:function(a){W();return a._currentValue},useMemo:vc,useReducer:tc,useRef:function(a){R=W();S=qc();var b=S.memoizedState;return null===b?(a={current:a},S.memoizedState=a):b},useState:function(a){return tc(sc,a)},useInsertionEffect:xc,useLayoutEffect:function(){},useCallback:function(a,b){return vc(function(){return a},b)},useImperativeHandle:xc,useEffect:xc,useDebugValue:xc,useDeferredValue:function(a){W();return a},useTransition:function(){W();
return[!1,wc]},useId:function(){var a=lc.treeContext;var b=a.overflow;a=a.id;a=(a&~(1<<32-fc(a)-1)).toString(32)+b;var c=yc;if(null===c)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");b=U++;a=":"+c.idPrefix+"R"+a;0<b&&(a+="H"+b.toString(32));return a+":"},useMutableSource:function(a,b){W();return b(a._source)},useSyncExternalStore:function(a,b,c){if(void 0===c)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
return c()}},yc=null,Ac=ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function Bc(a){console.error(a)}function X(){}function Cc(a,b){var c=a.pingedTasks;c.push(b);1===c.length&&setImmediate(function(){return Dc(a)})}function Ec(a,b,c,d,f,e,g,h){a.allPendingTasks++;null===c?a.pendingRootTasks++:c.pendingTasks++;var m={node:b,ping:function(){return Cc(a,m)},blockedBoundary:c,blockedSegment:d,abortSet:f,legacyContext:e,context:g,treeContext:h};f.add(m);return m}
function Fc(a,b,c,d){return{status:0,id:-1,index:b,parentFlushed:!1,chunks:[],children:[],formatContext:d,boundary:c}}function Y(a,b){a=a.onError;a(b)}function Gc(a,b){var c=a.onShellError;c(b);c=a.onFatalError;c(b);null!==a.destination?(a.status=2,a.destination.destroy(b)):(a.status=1,a.fatalError=b)}function Hc(a,b,c,d,f){R={};lc=b;U=0;for(a=c(d,f);nc;)nc=!1,U=0,oc+=1,S=null,a=c(d,f);rc();return a}
function Ic(a,b,c,d){var f=c.render(),e=d.childContextTypes;if(null!==e&&void 0!==e){var g=b.legacyContext;if("function"!==typeof c.getChildContext)d=g;else{c=c.getChildContext();for(var h in c)if(!(h in e))throw Error((Vb(d)||"Unknown")+'.getChildContext(): key "'+h+'" is not defined in childContextTypes.');d=N({},g,c)}b.legacyContext=d;Z(a,b,f);b.legacyContext=g}else Z(a,b,f)}
function Jc(a,b){if(a&&a.defaultProps){b=N({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}
function Kc(a,b,c,d,f){if("function"===typeof c)if(c.prototype&&c.prototype.isReactComponent){f=Xb(c,b.legacyContext);var e=c.contextType;e=new c(d,"object"===typeof e&&null!==e?e._currentValue:f);cc(e,c,d,f);Ic(a,b,e,c)}else{e=Xb(c,b.legacyContext);f=Hc(a,b,c,d,e);var g=0!==U;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof)cc(f,c,d,e),Ic(a,b,f,c);else if(g){d=b.treeContext;b.treeContext=ec(d,1,0);try{Z(a,b,f)}finally{b.treeContext=d}}else Z(a,b,f)}else if("string"===
typeof c)switch(f=b.blockedSegment,e=Ma(f.chunks,c,d,a.responseState,f.formatContext),g=f.formatContext,f.formatContext=wa(g,c,d),Lc(a,b,e),f.formatContext=g,c){case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "input":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":break;default:f.chunks.push(Na,c,Oa)}else{switch(c){case Sb:case Rb:case Hb:case Ib:case Gb:Z(a,b,d.children);return;case Nb:Z(a,b,d.children);return;case Qb:throw Error("ReactDOMServer does not yet support scope components.");
case Mb:a:{c=b.blockedBoundary;f=b.blockedSegment;e=d.fallback;d=d.children;g=new Set;var h={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:g},m=Fc(a,f.chunks.length,h,f.formatContext);f.children.push(m);var n=Fc(a,0,null,f.formatContext);n.parentFlushed=!0;b.blockedBoundary=h;b.blockedSegment=n;try{if(Lc(a,b,d),n.status=1,Mc(h,n),0===h.pendingTasks)break a}catch(p){n.status=4,Y(a,p),h.forceClientRender=!0}finally{b.blockedBoundary=
c,b.blockedSegment=f}b=Ec(a,e,c,m,g,b.legacyContext,b.context,b.treeContext);a.pingedTasks.push(b)}return}if("object"===typeof c&&null!==c)switch(c.$$typeof){case Lb:d=Hc(a,b,c.render,d,f);if(0!==U){c=b.treeContext;b.treeContext=ec(c,1,0);try{Z(a,b,d)}finally{b.treeContext=c}}else Z(a,b,d);return;case Ob:c=c.type;d=Jc(c,d);Kc(a,b,c,d,f);return;case Jb:f=d.children;c=c._context;d=d.value;e=c._currentValue;c._currentValue=d;g=O;O=d={parent:g,depth:null===g?0:g.depth+1,context:c,parentValue:e,value:d};
b.context=d;Z(a,b,f);a=O;if(null===a)throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");d=a.parentValue;a.context._currentValue=d===Tb?a.context._defaultValue:d;a=O=a.parent;b.context=a;return;case Kb:d=d.children;d=d(c._currentValue);Z(a,b,d);return;case Pb:f=c._init;c=f(c._payload);d=Jc(c,d);Kc(a,b,c,d,void 0);return}throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+((null==
c?c:typeof c)+"."));}}
function Z(a,b,c){b.node=c;if("object"===typeof c&&null!==c){switch(c.$$typeof){case Eb:Kc(a,b,c.type,c.props,c.ref);return;case Fb:throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");case Pb:var d=c._init;c=d(c._payload);Z(a,b,c);return}if(oa(c)){Nc(a,b,c);return}null===c||"object"!==typeof c?d=null:(d=Ub&&c[Ub]||c["@@iterator"],d="function"===typeof d?d:null);if(d&&(d=d.call(c))){c=d.next();if(!c.done){var f=
[];do f.push(c.value),c=d.next();while(!c.done);Nc(a,b,f)}return}b=Object.prototype.toString.call(c);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(c).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");}"string"===typeof c?""!==c&&b.blockedSegment.chunks.push(D(c),xa):"number"===typeof c&&(a=""+c,""!==a&&b.blockedSegment.chunks.push(D(a),xa))}
function Nc(a,b,c){for(var d=c.length,f=0;f<d;f++){var e=b.treeContext;b.treeContext=ec(e,d,f);try{Lc(a,b,c[f])}finally{b.treeContext=e}}}
function Lc(a,b,c){var d=b.blockedSegment.formatContext,f=b.legacyContext,e=b.context;try{return Z(a,b,c)}catch(m){if(rc(),"object"===typeof m&&null!==m&&"function"===typeof m.then){c=m;var g=b.blockedSegment,h=Fc(a,g.chunks.length,null,g.formatContext);g.children.push(h);a=Ec(a,b.node,b.blockedBoundary,h,b.abortSet,b.legacyContext,b.context,b.treeContext).ping;c.then(a,a);b.blockedSegment.formatContext=d;b.legacyContext=f;b.context=e;Q(e)}else throw b.blockedSegment.formatContext=d,b.legacyContext=
f,b.context=e,Q(e),m;}}function Oc(a){var b=a.blockedBoundary;a=a.blockedSegment;a.status=3;Pc(this,b,a)}
function Qc(a){var b=a.blockedBoundary;a.blockedSegment.status=3;null===b?(this.allPendingTasks--,2!==this.status&&(this.status=2,null!==this.destination&&this.destination.end())):(b.pendingTasks--,b.forceClientRender||(b.forceClientRender=!0,b.parentFlushed&&this.clientRenderedBoundaries.push(b)),b.fallbackAbortableTasks.forEach(Qc,this),b.fallbackAbortableTasks.clear(),this.allPendingTasks--,0===this.allPendingTasks&&(a=this.onAllReady,a()))}
function Mc(a,b){if(0===b.chunks.length&&1===b.children.length&&null===b.children[0].boundary){var c=b.children[0];c.id=b.id;c.parentFlushed=!0;1===c.status&&Mc(a,c)}else a.completedSegments.push(b)}
function Pc(a,b,c){if(null===b){if(c.parentFlushed){if(null!==a.completedRootSegment)throw Error("There can only be one root segment. This is a bug in React.");a.completedRootSegment=c}a.pendingRootTasks--;0===a.pendingRootTasks&&(a.onShellError=X,b=a.onShellReady,b())}else b.pendingTasks--,b.forceClientRender||(0===b.pendingTasks?(c.parentFlushed&&1===c.status&&Mc(b,c),b.parentFlushed&&a.completedBoundaries.push(b),b.fallbackAbortableTasks.forEach(Oc,a),b.fallbackAbortableTasks.clear()):c.parentFlushed&&
1===c.status&&(Mc(b,c),1===b.completedSegments.length&&b.parentFlushed&&a.partialBoundaries.push(b)));a.allPendingTasks--;0===a.allPendingTasks&&(a=a.onAllReady,a())}
function Dc(a){if(2!==a.status){var b=O,c=Ac.current;Ac.current=zc;var d=yc;yc=a.responseState;try{var f=a.pingedTasks,e;for(e=0;e<f.length;e++){var g=f[e];var h=a,m=g.blockedSegment;if(0===m.status){Q(g.context);try{Z(h,g,g.node),g.abortSet.delete(g),m.status=1,Pc(h,g.blockedBoundary,m)}catch(A){if(rc(),"object"===typeof A&&null!==A&&"function"===typeof A.then){var n=g.ping;A.then(n,n)}else{g.abortSet.delete(g);m.status=4;var p=g.blockedBoundary,C=A;Y(h,C);null===p?Gc(h,C):(p.pendingTasks--,p.forceClientRender||
(p.forceClientRender=!0,p.parentFlushed&&h.clientRenderedBoundaries.push(p)));h.allPendingTasks--;if(0===h.allPendingTasks){var G=h.onAllReady;G()}}}finally{}}}f.splice(0,e);null!==a.destination&&Rc(a,a.destination)}catch(A){Y(a,A),Gc(a,A)}finally{yc=d,Ac.current=c,c===zc&&Q(b)}}}
function Sc(a,b,c){c.parentFlushed=!0;switch(c.status){case 0:var d=c.id=a.nextSegmentId++;a=a.responseState;r(b,Pa);r(b,a.placeholderPrefix);a=d.toString(16);r(b,a);return v(b,Qa);case 1:c.status=2;var f=!0;d=c.chunks;var e=0;c=c.children;for(var g=0;g<c.length;g++){for(f=c[g];e<f.index;e++)r(b,d[e]);f=Tc(a,b,f)}for(;e<d.length-1;e++)r(b,d[e]);e<d.length&&(f=v(b,d[e]));return f;default:throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
}}
function Tc(a,b,c){var d=c.boundary;if(null===d)return Sc(a,b,c);d.parentFlushed=!0;if(d.forceClientRender)v(b,Ua),Sc(a,b,c);else if(0<d.pendingTasks){d.rootSegmentID=a.nextSegmentId++;0<d.completedSegments.length&&a.partialBoundaries.push(d);var f=a.responseState;var e=f.nextSuspenseID++;f=w(f.boundaryPrefix+e.toString(16));d=d.id=f;Wa(b,a.responseState,d);Sc(a,b,c)}else if(d.byteSize>a.progressiveChunkSize)d.rootSegmentID=a.nextSegmentId++,a.completedBoundaries.push(d),Wa(b,a.responseState,d.id),Sc(a,
b,c);else{v(b,Ra);c=d.completedSegments;if(1!==c.length)throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");Tc(a,b,c[0])}return v(b,Va)}function Uc(a,b,c){rb(b,a.responseState,c.formatContext,c.id);Tc(a,b,c);return sb(b,c.formatContext)}
function Vc(a,b,c){for(var d=c.completedSegments,f=0;f<d.length;f++)Wc(a,b,c,d[f]);d.length=0;a=a.responseState;d=c.id;c=c.rootSegmentID;r(b,a.startInlineScript);a.sentCompleteBoundaryFunction?r(b,yb):(a.sentCompleteBoundaryFunction=!0,r(b,xb));if(null===d)throw Error("An ID must have been assigned before we can complete the boundary.");c=c.toString(16);r(b,d);r(b,zb);r(b,a.segmentPrefix);r(b,c);return v(b,Ab)}
function Wc(a,b,c,d){if(2===d.status)return!0;var f=d.id;if(-1===f){if(-1===(d.id=c.rootSegmentID))throw Error("A root segment ID must have been assigned by now. This is a bug in React.");return Uc(a,b,d)}Uc(a,b,d);a=a.responseState;r(b,a.startInlineScript);a.sentCompleteSegmentFunction?r(b,ub):(a.sentCompleteSegmentFunction=!0,r(b,tb));r(b,a.segmentPrefix);f=f.toString(16);r(b,f);r(b,vb);r(b,a.placeholderPrefix);r(b,f);return v(b,wb)}
function Rc(a,b){k=new Uint8Array(2048);l=0;q=!0;try{var c=a.completedRootSegment;if(null!==c&&0===a.pendingRootTasks){Tc(a,b,c);a.completedRootSegment=null;var d=a.responseState.bootstrapChunks;for(c=0;c<d.length-1;c++)r(b,d[c]);c<d.length&&v(b,d[c])}var f=a.clientRenderedBoundaries,e;for(e=0;e<f.length;e++){d=b;var g=a.responseState,h=f[e].id;r(d,g.startInlineScript);g.sentClientRenderFunction?r(d,Cb):(g.sentClientRenderFunction=!0,r(d,Bb));if(null===h)throw Error("An ID must have been assigned before we can complete the boundary.");
r(d,h);if(!v(d,Db)){a.destination=null;e++;f.splice(0,e);return}}f.splice(0,e);var m=a.completedBoundaries;for(e=0;e<m.length;e++)if(!Vc(a,b,m[e])){a.destination=null;e++;m.splice(0,e);return}m.splice(0,e);ca(b);k=new Uint8Array(2048);l=0;q=!0;var n=a.partialBoundaries;for(e=0;e<n.length;e++){var p=n[e];a:{f=a;g=b;var C=p.completedSegments;for(h=0;h<C.length;h++)if(!Wc(f,g,p,C[h])){h++;C.splice(0,h);var G=!1;break a}C.splice(0,h);G=!0}if(!G){a.destination=null;e++;n.splice(0,e);return}}n.splice(0,
e);var A=a.completedBoundaries;for(e=0;e<A.length;e++)if(!Vc(a,b,A[e])){a.destination=null;e++;A.splice(0,e);return}A.splice(0,e)}finally{ca(b),"function"===typeof b.flush&&b.flush(),0===a.allPendingTasks&&0===a.pingedTasks.length&&0===a.clientRenderedBoundaries.length&&0===a.completedBoundaries.length&&b.end()}}function Xc(a){setImmediate(function(){return Dc(a)})}
function Yc(a,b){if(1===a.status)a.status=2,b.destroy(a.fatalError);else if(2!==a.status&&null===a.destination){a.destination=b;try{Rc(a,b)}catch(c){Y(a,c),Gc(a,c)}}}function Zc(a){try{var b=a.abortableTasks;b.forEach(Qc,a);b.clear();null!==a.destination&&Rc(a,a.destination)}catch(c){Y(a,c),Gc(a,c)}}function $c(a,b){return function(){return Yc(b,a)}}function ad(a){return function(){return Zc(a)}}
function bd(a,b){var c=b?b.identifierPrefix:void 0,d=b?b.nonce:void 0,f=b?b.bootstrapScriptContent:void 0,e=b?b.bootstrapScripts:void 0;var g=b?b.bootstrapModules:void 0;c=void 0===c?"":c;d=void 0===d?pa:w('<script nonce="'+D(d)+'">');var h=[];void 0!==f&&h.push(d,(""+f).replace(ua,va),qa);if(void 0!==e)for(f=0;f<e.length;f++)h.push(ra,D(e[f]),ta);if(void 0!==g)for(e=0;e<g.length;e++)h.push(sa,D(g[e]),ta);g={bootstrapChunks:h,startInlineScript:d,placeholderPrefix:w(c+"P:"),segmentPrefix:w(c+"S:"),
boundaryPrefix:c+"B:",idPrefix:c,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1};e=b?b.namespaceURI:void 0;e=E("http://www.w3.org/2000/svg"===e?2:"http://www.w3.org/1998/Math/MathML"===e?3:0,null);f=b?b.progressiveChunkSize:void 0;d=b?b.onError:void 0;h=b?b.onAllReady:void 0;var m=b?b.onShellReady:void 0,n=b?b.onShellError:void 0;b=[];c=new Set;g={destination:null,responseState:g,progressiveChunkSize:void 0===f?12800:f,status:0,fatalError:null,
nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:c,pingedTasks:b,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:void 0===d?Bc:d,onAllReady:void 0===h?X:h,onShellReady:void 0===m?X:m,onShellError:void 0===n?X:n,onFatalError:X};e=Fc(g,0,null,e);e.parentFlushed=!0;a=Ec(g,a,null,e,c,Wb,null,dc);b.push(a);return g}
exports.renderToPipeableStream=function(a,b){var c=bd(a,b),d=!1;Xc(c);return{pipe:function(a){if(d)throw Error("React currently only supports piping to one writable stream.");d=!0;Yc(c,a);a.on("drain",$c(a,c));a.on("close",ad(c));return a},abort:function(){Zc(c)}}};exports.version="18.1.0";


/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-dom-server-legacy.node.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

var React = __webpack_require__(4);
var stream = __webpack_require__(7);

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      printWarning('warn', format, args);
    }
  }
}
function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function scheduleWork(callback) {
  callback();
}
function beginWriting(destination) {}
var prevWasCommentSegmenter = false;
function writeChunk(destination, chunk) {
  writeChunkAndReturn(destination, chunk);
}
function writeChunkAndReturn(destination, chunk) {
  if (prevWasCommentSegmenter) {
    prevWasCommentSegmenter = false;

    if (chunk[0] !== '<') {
      destination.push('<!-- -->');
    }
  }

  if (chunk === '<!-- -->') {
    prevWasCommentSegmenter = true;
    return true;
  }

  return destination.push(chunk);
}
function completeWriting(destination) {}
function close(destination) {
  destination.push(null);
}
function stringToChunk(content) {
  return content;
}
function stringToPrecomputedChunk(content) {
  return content;
}
function closeWithError(destination, error) {
  // $FlowFixMe: This is an Error object or the destination accepts other types.
  destination.destroy(error);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}

function checkAttributeStringCoercion(value, attributeName) {
  {
    if (willCoercionThrow(value)) {
      error('The provided `%s` attribute is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', attributeName, typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}
function checkCSSPropertyStringCoercion(value, propName) {
  {
    if (willCoercionThrow(value)) {
      error('The provided `%s` CSS property is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', propName, typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}
function checkHtmlStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided HTML markup uses a value of unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
/* eslint-enable max-len */

var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
    return true;
  }

  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
    return false;
  }

  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }

  illegalAttributeNameCache[attributeName] = true;

  {
    error('Invalid attribute name: `%s`', attributeName);
  }

  return false;
}
function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }

  switch (typeof value) {
    case 'function': // $FlowIssue symbol is perfectly valid here

    case 'symbol':
      // eslint-disable-line
      return true;

    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }

        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }

    default:
      return false;
  }
}
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];

reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function (token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
  false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
  false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
false);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true, // sanitizeURL
  true);
});

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

var hasReadOnlyValue = {
  button: true,
  checkbox: true,
  image: true,
  hidden: true,
  radio: true,
  reset: true,
  submit: true
};
function checkControlledValueProps(tagName, props) {
  {
    if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
      error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }

    if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
      error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  }
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this list too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;

    default:
      return true;
  }
}

var ariaProperties = {
  'aria-current': 0,
  // state
  'aria-description': 0,
  'aria-details': 0,
  'aria-disabled': 0,
  // state
  'aria-hidden': 0,
  // state
  'aria-invalid': 0,
  // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

function validateProperty(tagName, name) {
  {
    if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
      return true;
    }

    if (rARIACamel.test(name)) {
      var ariaName = 'aria-' + name.slice(4).toLowerCase();
      var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (correctName == null) {
        error('Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);

        warnedProperties[name] = true;
        return true;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== correctName) {
        error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);

        warnedProperties[name] = true;
        return true;
      }
    }

    if (rARIA.test(name)) {
      var lowerCasedName = name.toLowerCase();
      var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (standardName == null) {
        warnedProperties[name] = true;
        return false;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== standardName) {
        error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties[name] = true;
        return true;
      }
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  {
    var invalidProps = [];

    for (var key in props) {
      var isValid = validateProperty(type, key);

      if (!isValid) {
        invalidProps.push(key);
      }
    }

    var unknownPropString = invalidProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (invalidProps.length === 1) {
      error('Invalid aria prop %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
    } else if (invalidProps.length > 1) {
      error('Invalid aria props %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
    }
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;
function validateProperties$1(type, props) {
  {
    if (type !== 'input' && type !== 'textarea' && type !== 'select') {
      return;
    }

    if (props != null && props.value === null && !didWarnValueNull) {
      didWarnValueNull = true;

      if (type === 'select' && props.multiple) {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
      } else {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
      }
    }
  }
}

// When adding attributes to the HTML or SVG allowed attribute list, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  disablepictureinpicture: 'disablePictureInPicture',
  disableremoteplayback: 'disableRemotePlayback',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  enterkeyhint: 'enterKeyHint',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  imagesizes: 'imageSizes',
  imagesrcset: 'imageSrcSet',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',
  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, eventRegistry) {
    if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();

    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');

      warnedProperties$1[name] = true;
      return true;
    } // We can't rely on the event system being injected on the server.


    if (eventRegistry != null) {
      var registrationNameDependencies = eventRegistry.registrationNameDependencies,
          possibleRegistrationNames = eventRegistry.possibleRegistrationNames;

      if (registrationNameDependencies.hasOwnProperty(name)) {
        return true;
      }

      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

      if (registrationName != null) {
        error('Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);

        warnedProperties$1[name] = true;
        return true;
      }

      if (EVENT_NAME_REGEX.test(name)) {
        error('Unknown event handler property `%s`. It will be ignored.', name);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        error('Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Let the ARIA attribute hook validate ARIA attributes


    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      error('Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      error('The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      error('Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      error('Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);

      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED; // Known attributes should match the casing specified in the property config.

    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];

      if (standardName !== name) {
        error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      error('React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
      } else {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Now that we've validated casing, do not validate
    // data types for reserved props


    if (isReserved) {
      return true;
    } // Warn when a known attribute is a bad type


    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    } // Warn when passing the strings 'false' or 'true' into a boolean prop


    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
      error('Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);

      warnedProperties$1[name] = true;
      return true;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, eventRegistry) {
  {
    var unknownProps = [];

    for (var key in props) {
      var isValid = validateProperty$1(type, key, props[key], eventRegistry);

      if (!isValid) {
        unknownProps.push(key);
      }
    }

    var unknownPropString = unknownProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (unknownProps.length === 1) {
      error('Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
    } else if (unknownProps.length > 1) {
      error('Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
    }
  }
};

function validateProperties$2(type, props, eventRegistry) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnUnknownProperties(type, props, eventRegistry);
}

var warnValidStyle = function () {};

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g; // style values shouldn't contain a semicolon

  var badStyleValueWithSemicolonPattern = /;\s*$/;
  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var camelize = function (string) {
    return string.replace(hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  };

  var warnHyphenatedStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported style property %s. Did you mean %s?', name, // As Andi Smith suggests
    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
    // is converted to lowercase `ms`.
    camelize(name.replace(msPattern, 'ms-')));
  };

  var warnBadVendoredStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
  };

  var warnStyleValueWithSemicolon = function (name, value) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;

    error("Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;

    error('`NaN` is an invalid value for the `%s` css style property.', name);
  };

  var warnStyleValueIsInfinity = function (name, value) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;

    error('`Infinity` is an invalid value for the `%s` css style property.', name);
  };

  warnValidStyle = function (name, value) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

// code copied and modified from escape-html
var matchHtmlRegExp = /["'&<>]/;
/**
 * Escapes special characters and HTML entities in a given html string.
 *
 * @param  {string} string HTML string to escape for later insertion
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  {
    checkHtmlStringCoercion(string);
  }

  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;

      case 38:
        // &
        escape = '&amp;';
        break;

      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'

        break;

      case 60:
        // <
        escape = '&lt;';
        break;

      case 62:
        // >
        escape = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
} // end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */


function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }

  return escapeHtml(text);
}

var uppercasePattern = /([A-Z])/g;
var msPattern$1 = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */

function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern$1, '-ms-');
}

// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space

/* eslint-disable max-len */

var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
var didWarn = false;

function sanitizeURL(url) {
  {
    if (!didWarn && isJavaScriptProtocol.test(url)) {
      didWarn = true;

      error('A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

var startInlineScript = stringToPrecomputedChunk('<script>');
var endInlineScript = stringToPrecomputedChunk('</script>');
var startScriptSrc = stringToPrecomputedChunk('<script src="');
var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
var endAsyncScript = stringToPrecomputedChunk('" async=""></script>');
/**
 * This escaping function is designed to work with bootstrapScriptContent only.
 * because we know we are escaping the entire script. We can avoid for instance
 * escaping html comment string sequences that are valid javascript as well because
 * if there are no sebsequent <script sequences the html parser will never enter
 * script data double escaped state (see: https://www.w3.org/TR/html53/syntax.html#script-data-double-escaped-state)
 *
 * While untrusted script content should be made safe before using this api it will
 * ensure that the script cannot be early terminated or never terminated state
 */

function escapeBootstrapScriptContent(scriptText) {
  {
    checkHtmlStringCoercion(scriptText);
  }

  return ('' + scriptText).replace(scriptRegex, scriptReplacer);
}

var scriptRegex = /(<\/|<)(s)(cript)/gi;

var scriptReplacer = function (match, prefix, s, suffix) {
  return "" + prefix + (s === 's' ? "\\u0073" : "\\u0053") + suffix;
}; // Allows us to keep track of what we've already written so we can refer back to it.


function createResponseState(identifierPrefix, nonce, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
  var idPrefix = identifierPrefix === undefined ? '' : identifierPrefix;
  var inlineScriptWithNonce = nonce === undefined ? startInlineScript : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">');
  var bootstrapChunks = [];

  if (bootstrapScriptContent !== undefined) {
    bootstrapChunks.push(inlineScriptWithNonce, stringToChunk(escapeBootstrapScriptContent(bootstrapScriptContent)), endInlineScript);
  }

  if (bootstrapScripts !== undefined) {
    for (var i = 0; i < bootstrapScripts.length; i++) {
      bootstrapChunks.push(startScriptSrc, stringToChunk(escapeTextForBrowser(bootstrapScripts[i])), endAsyncScript);
    }
  }

  if (bootstrapModules !== undefined) {
    for (var _i = 0; _i < bootstrapModules.length; _i++) {
      bootstrapChunks.push(startModuleSrc, stringToChunk(escapeTextForBrowser(bootstrapModules[_i])), endAsyncScript);
    }
  }

  return {
    bootstrapChunks: bootstrapChunks,
    startInlineScript: inlineScriptWithNonce,
    placeholderPrefix: stringToPrecomputedChunk(idPrefix + 'P:'),
    segmentPrefix: stringToPrecomputedChunk(idPrefix + 'S:'),
    boundaryPrefix: idPrefix + 'B:',
    idPrefix: idPrefix,
    nextSuspenseID: 0,
    sentCompleteSegmentFunction: false,
    sentCompleteBoundaryFunction: false,
    sentClientRenderFunction: false
  };
} // Constants for the insertion mode we're currently writing in. We don't encode all HTML5 insertion
// modes. We only include the variants as they matter for the sake of our purposes.
// We don't actually provide the namespace therefore we use constants instead of the string.

var ROOT_HTML_MODE = 0; // Used for the root most element tag.

var HTML_MODE = 1;
var SVG_MODE = 2;
var MATHML_MODE = 3;
var HTML_TABLE_MODE = 4;
var HTML_TABLE_BODY_MODE = 5;
var HTML_TABLE_ROW_MODE = 6;
var HTML_COLGROUP_MODE = 7; // We have a greater than HTML_TABLE_MODE check elsewhere. If you add more cases here, make sure it
// still makes sense

function createFormatContext(insertionMode, selectedValue) {
  return {
    insertionMode: insertionMode,
    selectedValue: selectedValue
  };
}
function getChildFormatContext(parentContext, type, props) {
  switch (type) {
    case 'select':
      return createFormatContext(HTML_MODE, props.value != null ? props.value : props.defaultValue);

    case 'svg':
      return createFormatContext(SVG_MODE, null);

    case 'math':
      return createFormatContext(MATHML_MODE, null);

    case 'foreignObject':
      return createFormatContext(HTML_MODE, null);
    // Table parents are special in that their children can only be created at all if they're
    // wrapped in a table parent. So we need to encode that we're entering this mode.

    case 'table':
      return createFormatContext(HTML_TABLE_MODE, null);

    case 'thead':
    case 'tbody':
    case 'tfoot':
      return createFormatContext(HTML_TABLE_BODY_MODE, null);

    case 'colgroup':
      return createFormatContext(HTML_COLGROUP_MODE, null);

    case 'tr':
      return createFormatContext(HTML_TABLE_ROW_MODE, null);
  }

  if (parentContext.insertionMode >= HTML_TABLE_MODE) {
    // Whatever tag this was, it wasn't a table parent or other special parent, so we must have
    // entered plain HTML again.
    return createFormatContext(HTML_MODE, null);
  }

  if (parentContext.insertionMode === ROOT_HTML_MODE) {
    // We've emitted the root and is now in plain HTML mode.
    return createFormatContext(HTML_MODE, null);
  }

  return parentContext;
}
var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
function assignSuspenseBoundaryID(responseState) {
  var generatedID = responseState.nextSuspenseID++;
  return stringToPrecomputedChunk(responseState.boundaryPrefix + generatedID.toString(16));
}
function makeId(responseState, treeId, localId) {
  var idPrefix = responseState.idPrefix;
  var id = ':' + idPrefix + 'R' + treeId; // Unless this is the first id at this level, append a number at the end
  // that represents the position of this useId hook among all the useId
  // hooks for this fiber.

  if (localId > 0) {
    id += 'H' + localId.toString(32);
  }

  return id + ':';
}

function encodeHTMLTextNode(text) {
  return escapeTextForBrowser(text);
}

var textSeparator = stringToPrecomputedChunk('<!-- -->');
function pushTextInstance(target, text, responseState) {
  if (text === '') {
    // Empty text doesn't have a DOM node representation and the hydration is aware of this.
    return;
  } // TODO: Avoid adding a text separator in common cases.


  target.push(stringToChunk(encodeHTMLTextNode(text)), textSeparator);
}
var styleNameCache = new Map();

function processStyleName(styleName) {
  var chunk = styleNameCache.get(styleName);

  if (chunk !== undefined) {
    return chunk;
  }

  var result = stringToPrecomputedChunk(escapeTextForBrowser(hyphenateStyleName(styleName)));
  styleNameCache.set(styleName, result);
  return result;
}

var styleAttributeStart = stringToPrecomputedChunk(' style="');
var styleAssign = stringToPrecomputedChunk(':');
var styleSeparator = stringToPrecomputedChunk(';');

function pushStyle(target, responseState, style) {
  if (typeof style !== 'object') {
    throw new Error('The `style` prop expects a mapping from style properties to values, ' + "not a string. For example, style={{marginRight: spacing + 'em'}} when " + 'using JSX.');
  }

  var isFirst = true;

  for (var styleName in style) {
    if (!hasOwnProperty.call(style, styleName)) {
      continue;
    } // If you provide unsafe user data here they can inject arbitrary CSS
    // which may be problematic (I couldn't repro this):
    // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
    // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
    // This is not an XSS hole but instead a potential CSS injection issue
    // which has lead to a greater discussion about how we're going to
    // trust URLs moving forward. See #2115901


    var styleValue = style[styleName];

    if (styleValue == null || typeof styleValue === 'boolean' || styleValue === '') {
      // TODO: We used to set empty string as a style with an empty value. Does that ever make sense?
      continue;
    }

    var nameChunk = void 0;
    var valueChunk = void 0;
    var isCustomProperty = styleName.indexOf('--') === 0;

    if (isCustomProperty) {
      nameChunk = stringToChunk(escapeTextForBrowser(styleName));

      {
        checkCSSPropertyStringCoercion(styleValue, styleName);
      }

      valueChunk = stringToChunk(escapeTextForBrowser(('' + styleValue).trim()));
    } else {
      {
        warnValidStyle$1(styleName, styleValue);
      }

      nameChunk = processStyleName(styleName);

      if (typeof styleValue === 'number') {
        if (styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName)) {
          valueChunk = stringToChunk(styleValue + 'px'); // Presumes implicit 'px' suffix for unitless numbers
        } else {
          valueChunk = stringToChunk('' + styleValue);
        }
      } else {
        {
          checkCSSPropertyStringCoercion(styleValue, styleName);
        }

        valueChunk = stringToChunk(escapeTextForBrowser(('' + styleValue).trim()));
      }
    }

    if (isFirst) {
      isFirst = false; // If it's first, we don't need any separators prefixed.

      target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk);
    } else {
      target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
    }
  }

  if (!isFirst) {
    target.push(attributeEnd);
  }
}

var attributeSeparator = stringToPrecomputedChunk(' ');
var attributeAssign = stringToPrecomputedChunk('="');
var attributeEnd = stringToPrecomputedChunk('"');
var attributeEmptyString = stringToPrecomputedChunk('=""');

function pushAttribute(target, responseState, name, value) {
  switch (name) {
    case 'style':
      {
        pushStyle(target, responseState, value);
        return;
      }

    case 'defaultValue':
    case 'defaultChecked': // These shouldn't be set as attributes on generic HTML elements.

    case 'innerHTML': // Must use dangerouslySetInnerHTML instead.

    case 'suppressContentEditableWarning':
    case 'suppressHydrationWarning':
      // Ignored. These are built-in to React on the client.
      return;
  }

  if ( // shouldIgnoreAttribute
  // We have already filtered out null/undefined and reserved words.
  name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return;
  }

  var propertyInfo = getPropertyInfo(name);

  if (propertyInfo !== null) {
    // shouldRemoveAttribute
    switch (typeof value) {
      case 'function': // $FlowIssue symbol is perfectly valid here

      case 'symbol':
        // eslint-disable-line
        return;

      case 'boolean':
        {
          if (!propertyInfo.acceptsBooleans) {
            return;
          }
        }
    }

    var attributeName = propertyInfo.attributeName;
    var attributeNameChunk = stringToChunk(attributeName); // TODO: If it's known we can cache the chunk.

    switch (propertyInfo.type) {
      case BOOLEAN:
        if (value) {
          target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
        }

        return;

      case OVERLOADED_BOOLEAN:
        if (value === true) {
          target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
        } else if (value === false) ; else {
          target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
        }

        return;

      case NUMERIC:
        if (!isNaN(value)) {
          target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
        }

        break;

      case POSITIVE_NUMERIC:
        if (!isNaN(value) && value >= 1) {
          target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
        }

        break;

      default:
        if (propertyInfo.sanitizeURL) {
          {
            checkAttributeStringCoercion(value, attributeName);
          }

          value = '' + value;
          sanitizeURL(value);
        }

        target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
    }
  } else if (isAttributeNameSafe(name)) {
    // shouldRemoveAttribute
    switch (typeof value) {
      case 'function': // $FlowIssue symbol is perfectly valid here

      case 'symbol':
        // eslint-disable-line
        return;

      case 'boolean':
        {
          var prefix = name.toLowerCase().slice(0, 5);

          if (prefix !== 'data-' && prefix !== 'aria-') {
            return;
          }
        }
    }

    target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
  }
}

var endOfStartTag = stringToPrecomputedChunk('>');
var endOfStartTagSelfClosing = stringToPrecomputedChunk('/>');

function pushInnerHTML(target, innerHTML, children) {
  if (innerHTML != null) {
    if (children != null) {
      throw new Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
    }

    if (typeof innerHTML !== 'object' || !('__html' in innerHTML)) {
      throw new Error('`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://reactjs.org/link/dangerously-set-inner-html ' + 'for more information.');
    }

    var html = innerHTML.__html;

    if (html !== null && html !== undefined) {
      {
        checkHtmlStringCoercion(html);
      }

      target.push(stringToChunk('' + html));
    }
  }
} // TODO: Move these to ResponseState so that we warn for every request.
// It would help debugging in stateful servers (e.g. service worker).


var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var didWarnInvalidOptionInnerHTML = false;
var didWarnSelectedSetOnOption = false;

function checkSelectProp(props, propName) {
  {
    var value = props[propName];

    if (value != null) {
      var array = isArray(value);

      if (props.multiple && !array) {
        error('The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
      } else if (!props.multiple && array) {
        error('The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
      }
    }
  }
}

function pushStartSelect(target, props, responseState) {
  {
    checkControlledValueProps('select', props);
    checkSelectProp(props, 'value');
    checkSelectProp(props, 'defaultValue');

    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
      error('Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');

      didWarnDefaultSelectValue = true;
    }
  }

  target.push(startChunkForTag('select'));
  var children = null;
  var innerHTML = null;

  for (var propKey in props) {
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];

      if (propValue == null) {
        continue;
      }

      switch (propKey) {
        case 'children':
          children = propValue;
          break;

        case 'dangerouslySetInnerHTML':
          // TODO: This doesn't really make sense for select since it can't use the controlled
          // value in the innerHTML.
          innerHTML = propValue;
          break;

        case 'defaultValue':
        case 'value':
          // These are set on the Context instead and applied to the nested options.
          break;

        default:
          pushAttribute(target, responseState, propKey, propValue);
          break;
      }
    }
  }

  target.push(endOfStartTag);
  pushInnerHTML(target, innerHTML, children);
  return children;
}

function flattenOptionChildren(children) {
  var content = ''; // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.

  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }

    content += child;

    {
      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
        didWarnInvalidOptionChildren = true;

        error('Cannot infer the option value of complex children. ' + 'Pass a `value` prop or use a plain string as children to <option>.');
      }
    }
  });
  return content;
}

var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');

function pushStartOption(target, props, responseState, formatContext) {
  var selectedValue = formatContext.selectedValue;
  target.push(startChunkForTag('option'));
  var children = null;
  var value = null;
  var selected = null;
  var innerHTML = null;

  for (var propKey in props) {
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];

      if (propValue == null) {
        continue;
      }

      switch (propKey) {
        case 'children':
          children = propValue;
          break;

        case 'selected':
          // ignore
          selected = propValue;

          {
            // TODO: Remove support for `selected` in <option>.
            if (!didWarnSelectedSetOnOption) {
              error('Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.');

              didWarnSelectedSetOnOption = true;
            }
          }

          break;

        case 'dangerouslySetInnerHTML':
          innerHTML = propValue;
          break;
        // eslint-disable-next-line-no-fallthrough

        case 'value':
          value = propValue;
        // We intentionally fallthrough to also set the attribute on the node.
        // eslint-disable-next-line-no-fallthrough

        default:
          pushAttribute(target, responseState, propKey, propValue);
          break;
      }
    }
  }

  if (selectedValue != null) {
    var stringValue;

    if (value !== null) {
      {
        checkAttributeStringCoercion(value, 'value');
      }

      stringValue = '' + value;
    } else {
      {
        if (innerHTML !== null) {
          if (!didWarnInvalidOptionInnerHTML) {
            didWarnInvalidOptionInnerHTML = true;

            error('Pass a `value` prop if you set dangerouslyInnerHTML so React knows ' + 'which value should be selected.');
          }
        }
      }

      stringValue = flattenOptionChildren(children);
    }

    if (isArray(selectedValue)) {
      // multiple
      for (var i = 0; i < selectedValue.length; i++) {
        {
          checkAttributeStringCoercion(selectedValue[i], 'value');
        }

        var v = '' + selectedValue[i];

        if (v === stringValue) {
          target.push(selectedMarkerAttribute);
          break;
        }
      }
    } else {
      {
        checkAttributeStringCoercion(selectedValue, 'select.value');
      }

      if ('' + selectedValue === stringValue) {
        target.push(selectedMarkerAttribute);
      }
    }
  } else if (selected) {
    target.push(selectedMarkerAttribute);
  }

  target.push(endOfStartTag);
  pushInnerHTML(target, innerHTML, children);
  return children;
}

function pushInput(target, props, responseState) {
  {
    checkControlledValueProps('input', props);

    if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
      error('%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);

      didWarnDefaultChecked = true;
    }

    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
      error('%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);

      didWarnDefaultInputValue = true;
    }
  }

  target.push(startChunkForTag('input'));
  var value = null;
  var defaultValue = null;
  var checked = null;
  var defaultChecked = null;

  for (var propKey in props) {
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];

      if (propValue == null) {
        continue;
      }

      switch (propKey) {
        case 'children':
        case 'dangerouslySetInnerHTML':
          throw new Error('input' + " is a self-closing tag and must neither have `children` nor " + 'use `dangerouslySetInnerHTML`.');
        // eslint-disable-next-line-no-fallthrough

        case 'defaultChecked':
          defaultChecked = propValue;
          break;

        case 'defaultValue':
          defaultValue = propValue;
          break;

        case 'checked':
          checked = propValue;
          break;

        case 'value':
          value = propValue;
          break;

        default:
          pushAttribute(target, responseState, propKey, propValue);
          break;
      }
    }
  }

  if (checked !== null) {
    pushAttribute(target, responseState, 'checked', checked);
  } else if (defaultChecked !== null) {
    pushAttribute(target, responseState, 'checked', defaultChecked);
  }

  if (value !== null) {
    pushAttribute(target, responseState, 'value', value);
  } else if (defaultValue !== null) {
    pushAttribute(target, responseState, 'value', defaultValue);
  }

  target.push(endOfStartTagSelfClosing);
  return null;
}

function pushStartTextArea(target, props, responseState) {
  {
    checkControlledValueProps('textarea', props);

    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
      error('Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');

      didWarnDefaultTextareaValue = true;
    }
  }

  target.push(startChunkForTag('textarea'));
  var value = null;
  var defaultValue = null;
  var children = null;

  for (var propKey in props) {
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];

      if (propValue == null) {
        continue;
      }

      switch (propKey) {
        case 'children':
          children = propValue;
          break;

        case 'value':
          value = propValue;
          break;

        case 'defaultValue':
          defaultValue = propValue;
          break;

        case 'dangerouslySetInnerHTML':
          throw new Error('`dangerouslySetInnerHTML` does not make sense on <textarea>.');
        // eslint-disable-next-line-no-fallthrough

        default:
          pushAttribute(target, responseState, propKey, propValue);
          break;
      }
    }
  }

  if (value === null && defaultValue !== null) {
    value = defaultValue;
  }

  target.push(endOfStartTag); // TODO (yungsters): Remove support for children content in <textarea>.

  if (children != null) {
    {
      error('Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
    }

    if (value != null) {
      throw new Error('If you supply `defaultValue` on a <textarea>, do not pass children.');
    }

    if (isArray(children)) {
      if (children.length > 1) {
        throw new Error('<textarea> can only have at most one child.');
      } // TODO: remove the coercion and the DEV check below because it will
      // always be overwritten by the coercion several lines below it. #22309


      {
        checkHtmlStringCoercion(children[0]);
      }

      value = '' + children[0];
    }

    {
      checkHtmlStringCoercion(children);
    }

    value = '' + children;
  }

  if (typeof value === 'string' && value[0] === '\n') {
    // text/html ignores the first character in these tags if it's a newline
    // Prefer to break application/xml over text/html (for now) by adding
    // a newline specifically to get eaten by the parser. (Alternately for
    // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
    // \r is normalized out by HTMLTextAreaElement#value.)
    // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
    // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
    // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
    // See: Parsing of "textarea" "listing" and "pre" elements
    //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
    target.push(leadingNewline);
  } // ToString and push directly instead of recurse over children.
  // We don't really support complex children in the value anyway.
  // This also currently avoids a trailing comment node which breaks textarea.


  if (value !== null) {
    {
      checkAttributeStringCoercion(value, 'value');
    }

    target.push(stringToChunk(encodeHTMLTextNode('' + value)));
  }

  return null;
}

function pushSelfClosing(target, props, tag, responseState) {
  target.push(startChunkForTag(tag));

  for (var propKey in props) {
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];

      if (propValue == null) {
        continue;
      }

      switch (propKey) {
        case 'children':
        case 'dangerouslySetInnerHTML':
          throw new Error(tag + " is a self-closing tag and must neither have `children` nor " + 'use `dangerouslySetInnerHTML`.');
        // eslint-disable-next-line-no-fallthrough

        default:
          pushAttribute(target, responseState, propKey, propValue);
          break;
      }
    }
  }

  target.push(endOfStartTagSelfClosing);
  return null;
}

function pushStartMenuItem(target, props, responseState) {
  target.push(startChunkForTag('menuitem'));

  for (var propKey in props) {
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];

      if (propValue == null) {
        continue;
      }

      switch (propKey) {
        case 'children':
        case 'dangerouslySetInnerHTML':
          throw new Error('menuitems cannot have `children` nor `dangerouslySetInnerHTML`.');
        // eslint-disable-next-line-no-fallthrough

        default:
          pushAttribute(target, responseState, propKey, propValue);
          break;
      }
    }
  }

  target.push(endOfStartTag);
  return null;
}

function pushStartGenericElement(target, props, tag, responseState) {
  target.push(startChunkForTag(tag));
  var children = null;
  var innerHTML = null;

  for (var propKey in props) {
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];

      if (propValue == null) {
        continue;
      }

      switch (propKey) {
        case 'children':
          children = propValue;
          break;

        case 'dangerouslySetInnerHTML':
          innerHTML = propValue;
          break;

        default:
          pushAttribute(target, responseState, propKey, propValue);
          break;
      }
    }
  }

  target.push(endOfStartTag);
  pushInnerHTML(target, innerHTML, children);

  if (typeof children === 'string') {
    // Special case children as a string to avoid the unnecessary comment.
    // TODO: Remove this special case after the general optimization is in place.
    target.push(stringToChunk(encodeHTMLTextNode(children)));
    return null;
  }

  return children;
}

function pushStartCustomElement(target, props, tag, responseState) {
  target.push(startChunkForTag(tag));
  var children = null;
  var innerHTML = null;

  for (var propKey in props) {
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];

      if (propValue == null) {
        continue;
      }

      switch (propKey) {
        case 'children':
          children = propValue;
          break;

        case 'dangerouslySetInnerHTML':
          innerHTML = propValue;
          break;

        case 'style':
          pushStyle(target, responseState, propValue);
          break;

        case 'suppressContentEditableWarning':
        case 'suppressHydrationWarning':
          // Ignored. These are built-in to React on the client.
          break;

        default:
          if (isAttributeNameSafe(propKey) && typeof propValue !== 'function' && typeof propValue !== 'symbol') {
            target.push(attributeSeparator, stringToChunk(propKey), attributeAssign, stringToChunk(escapeTextForBrowser(propValue)), attributeEnd);
          }

          break;
      }
    }
  }

  target.push(endOfStartTag);
  pushInnerHTML(target, innerHTML, children);
  return children;
}

var leadingNewline = stringToPrecomputedChunk('\n');

function pushStartPreformattedElement(target, props, tag, responseState) {
  target.push(startChunkForTag(tag));
  var children = null;
  var innerHTML = null;

  for (var propKey in props) {
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];

      if (propValue == null) {
        continue;
      }

      switch (propKey) {
        case 'children':
          children = propValue;
          break;

        case 'dangerouslySetInnerHTML':
          innerHTML = propValue;
          break;

        default:
          pushAttribute(target, responseState, propKey, propValue);
          break;
      }
    }
  }

  target.push(endOfStartTag); // text/html ignores the first character in these tags if it's a newline
  // Prefer to break application/xml over text/html (for now) by adding
  // a newline specifically to get eaten by the parser. (Alternately for
  // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
  // \r is normalized out by HTMLTextAreaElement#value.)
  // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
  // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
  // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
  // See: Parsing of "textarea" "listing" and "pre" elements
  //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
  // TODO: This doesn't deal with the case where the child is an array
  // or component that returns a string.

  if (innerHTML != null) {
    if (children != null) {
      throw new Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
    }

    if (typeof innerHTML !== 'object' || !('__html' in innerHTML)) {
      throw new Error('`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://reactjs.org/link/dangerously-set-inner-html ' + 'for more information.');
    }

    var html = innerHTML.__html;

    if (html !== null && html !== undefined) {
      if (typeof html === 'string' && html.length > 0 && html[0] === '\n') {
        target.push(leadingNewline, stringToChunk(html));
      } else {
        {
          checkHtmlStringCoercion(html);
        }

        target.push(stringToChunk('' + html));
      }
    }
  }

  if (typeof children === 'string' && children[0] === '\n') {
    target.push(leadingNewline);
  }

  return children;
} // We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name


var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset

var validatedTagCache = new Map();

function startChunkForTag(tag) {
  var tagStartChunk = validatedTagCache.get(tag);

  if (tagStartChunk === undefined) {
    if (!VALID_TAG_REGEX.test(tag)) {
      throw new Error("Invalid tag: " + tag);
    }

    tagStartChunk = stringToPrecomputedChunk('<' + tag);
    validatedTagCache.set(tag, tagStartChunk);
  }

  return tagStartChunk;
}

var DOCTYPE = stringToPrecomputedChunk('<!DOCTYPE html>');
function pushStartInstance(target, type, props, responseState, formatContext) {
  {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props, null);

    if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
      error('A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
    }

    if (formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE) {
      if (type.indexOf('-') === -1 && typeof props.is !== 'string' && type.toLowerCase() !== type) {
        error('<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', type);
      }
    }
  }

  switch (type) {
    // Special tags
    case 'select':
      return pushStartSelect(target, props, responseState);

    case 'option':
      return pushStartOption(target, props, responseState, formatContext);

    case 'textarea':
      return pushStartTextArea(target, props, responseState);

    case 'input':
      return pushInput(target, props, responseState);

    case 'menuitem':
      return pushStartMenuItem(target, props, responseState);
    // Newline eating tags

    case 'listing':
    case 'pre':
      {
        return pushStartPreformattedElement(target, props, type, responseState);
      }
    // Omitted close tags

    case 'area':
    case 'base':
    case 'br':
    case 'col':
    case 'embed':
    case 'hr':
    case 'img':
    case 'keygen':
    case 'link':
    case 'meta':
    case 'param':
    case 'source':
    case 'track':
    case 'wbr':
      {
        return pushSelfClosing(target, props, type, responseState);
      }
    // These are reserved SVG and MathML elements, that are never custom elements.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts

    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      {
        return pushStartGenericElement(target, props, type, responseState);
      }

    case 'html':
      {
        if (formatContext.insertionMode === ROOT_HTML_MODE) {
          // If we're rendering the html tag and we're at the root (i.e. not in foreignObject)
          // then we also emit the DOCTYPE as part of the root content as a convenience for
          // rendering the whole document.
          target.push(DOCTYPE);
        }

        return pushStartGenericElement(target, props, type, responseState);
      }

    default:
      {
        if (type.indexOf('-') === -1 && typeof props.is !== 'string') {
          // Generic element
          return pushStartGenericElement(target, props, type, responseState);
        } else {
          // Custom element
          return pushStartCustomElement(target, props, type, responseState);
        }
      }
  }
}
var endTag1 = stringToPrecomputedChunk('</');
var endTag2 = stringToPrecomputedChunk('>');
function pushEndInstance(target, type, props) {
  switch (type) {
    // Omitted close tags
    // TODO: Instead of repeating this switch we could try to pass a flag from above.
    // That would require returning a tuple. Which might be ok if it gets inlined.
    case 'area':
    case 'base':
    case 'br':
    case 'col':
    case 'embed':
    case 'hr':
    case 'img':
    case 'input':
    case 'keygen':
    case 'link':
    case 'meta':
    case 'param':
    case 'source':
    case 'track':
    case 'wbr':
      {
        // No close tag needed.
        break;
      }

    default:
      {
        target.push(endTag1, stringToChunk(type), endTag2);
      }
  }
}
function writeCompletedRoot(destination, responseState) {
  var bootstrapChunks = responseState.bootstrapChunks;
  var i = 0;

  for (; i < bootstrapChunks.length - 1; i++) {
    writeChunk(destination, bootstrapChunks[i]);
  }

  if (i < bootstrapChunks.length) {
    return writeChunkAndReturn(destination, bootstrapChunks[i]);
  }

  return true;
} // Structural Nodes
// A placeholder is a node inside a hidden partial tree that can be filled in later, but before
// display. It's never visible to users. We use the template tag because it can be used in every
// type of parent. <script> tags also work in every other tag except <colgroup>.

var placeholder1 = stringToPrecomputedChunk('<template id="');
var placeholder2 = stringToPrecomputedChunk('"></template>');
function writePlaceholder(destination, responseState, id) {
  writeChunk(destination, placeholder1);
  writeChunk(destination, responseState.placeholderPrefix);
  var formattedID = stringToChunk(id.toString(16));
  writeChunk(destination, formattedID);
  return writeChunkAndReturn(destination, placeholder2);
} // Suspense boundaries are encoded as comments.

var startCompletedSuspenseBoundary = stringToPrecomputedChunk('<!--$-->');
var startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="');
var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk('<!--$!-->');
var endSuspenseBoundary = stringToPrecomputedChunk('<!--/$-->');
function writeStartCompletedSuspenseBoundary(destination, responseState) {
  return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
}
function writeStartPendingSuspenseBoundary(destination, responseState, id) {
  writeChunk(destination, startPendingSuspenseBoundary1);

  if (id === null) {
    throw new Error('An ID must have been assigned before we can complete the boundary.');
  }

  writeChunk(destination, id);
  return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
}
function writeStartClientRenderedSuspenseBoundary(destination, responseState) {
  return writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
}
function writeEndCompletedSuspenseBoundary(destination, responseState) {
  return writeChunkAndReturn(destination, endSuspenseBoundary);
}
function writeEndPendingSuspenseBoundary(destination, responseState) {
  return writeChunkAndReturn(destination, endSuspenseBoundary);
}
function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
  return writeChunkAndReturn(destination, endSuspenseBoundary);
}
var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
var startSegmentHTML2 = stringToPrecomputedChunk('">');
var endSegmentHTML = stringToPrecomputedChunk('</div>');
var startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
var startSegmentSVG2 = stringToPrecomputedChunk('">');
var endSegmentSVG = stringToPrecomputedChunk('</svg>');
var startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
var startSegmentMathML2 = stringToPrecomputedChunk('">');
var endSegmentMathML = stringToPrecomputedChunk('</math>');
var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
var startSegmentTable2 = stringToPrecomputedChunk('">');
var endSegmentTable = stringToPrecomputedChunk('</table>');
var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
var startSegmentTableBody2 = stringToPrecomputedChunk('">');
var endSegmentTableBody = stringToPrecomputedChunk('</tbody></table>');
var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
var startSegmentTableRow2 = stringToPrecomputedChunk('">');
var endSegmentTableRow = stringToPrecomputedChunk('</tr></table>');
var startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="');
var startSegmentColGroup2 = stringToPrecomputedChunk('">');
var endSegmentColGroup = stringToPrecomputedChunk('</colgroup></table>');
function writeStartSegment(destination, responseState, formatContext, id) {
  switch (formatContext.insertionMode) {
    case ROOT_HTML_MODE:
    case HTML_MODE:
      {
        writeChunk(destination, startSegmentHTML);
        writeChunk(destination, responseState.segmentPrefix);
        writeChunk(destination, stringToChunk(id.toString(16)));
        return writeChunkAndReturn(destination, startSegmentHTML2);
      }

    case SVG_MODE:
      {
        writeChunk(destination, startSegmentSVG);
        writeChunk(destination, responseState.segmentPrefix);
        writeChunk(destination, stringToChunk(id.toString(16)));
        return writeChunkAndReturn(destination, startSegmentSVG2);
      }

    case MATHML_MODE:
      {
        writeChunk(destination, startSegmentMathML);
        writeChunk(destination, responseState.segmentPrefix);
        writeChunk(destination, stringToChunk(id.toString(16)));
        return writeChunkAndReturn(destination, startSegmentMathML2);
      }

    case HTML_TABLE_MODE:
      {
        writeChunk(destination, startSegmentTable);
        writeChunk(destination, responseState.segmentPrefix);
        writeChunk(destination, stringToChunk(id.toString(16)));
        return writeChunkAndReturn(destination, startSegmentTable2);
      }
    // TODO: For the rest of these, there will be extra wrapper nodes that never
    // get deleted from the document. We need to delete the table too as part
    // of the injected scripts. They are invisible though so it's not too terrible
    // and it's kind of an edge case to suspend in a table. Totally supported though.

    case HTML_TABLE_BODY_MODE:
      {
        writeChunk(destination, startSegmentTableBody);
        writeChunk(destination, responseState.segmentPrefix);
        writeChunk(destination, stringToChunk(id.toString(16)));
        return writeChunkAndReturn(destination, startSegmentTableBody2);
      }

    case HTML_TABLE_ROW_MODE:
      {
        writeChunk(destination, startSegmentTableRow);
        writeChunk(destination, responseState.segmentPrefix);
        writeChunk(destination, stringToChunk(id.toString(16)));
        return writeChunkAndReturn(destination, startSegmentTableRow2);
      }

    case HTML_COLGROUP_MODE:
      {
        writeChunk(destination, startSegmentColGroup);
        writeChunk(destination, responseState.segmentPrefix);
        writeChunk(destination, stringToChunk(id.toString(16)));
        return writeChunkAndReturn(destination, startSegmentColGroup2);
      }

    default:
      {
        throw new Error('Unknown insertion mode. This is a bug in React.');
      }
  }
}
function writeEndSegment(destination, formatContext) {
  switch (formatContext.insertionMode) {
    case ROOT_HTML_MODE:
    case HTML_MODE:
      {
        return writeChunkAndReturn(destination, endSegmentHTML);
      }

    case SVG_MODE:
      {
        return writeChunkAndReturn(destination, endSegmentSVG);
      }

    case MATHML_MODE:
      {
        return writeChunkAndReturn(destination, endSegmentMathML);
      }

    case HTML_TABLE_MODE:
      {
        return writeChunkAndReturn(destination, endSegmentTable);
      }

    case HTML_TABLE_BODY_MODE:
      {
        return writeChunkAndReturn(destination, endSegmentTableBody);
      }

    case HTML_TABLE_ROW_MODE:
      {
        return writeChunkAndReturn(destination, endSegmentTableRow);
      }

    case HTML_COLGROUP_MODE:
      {
        return writeChunkAndReturn(destination, endSegmentColGroup);
      }

    default:
      {
        throw new Error('Unknown insertion mode. This is a bug in React.');
      }
  }
} // Instruction Set
// The following code is the source scripts that we then minify and inline below,
// with renamed function names that we hope don't collide:
// const COMMENT_NODE = 8;
// const SUSPENSE_START_DATA = '$';
// const SUSPENSE_END_DATA = '/$';
// const SUSPENSE_PENDING_START_DATA = '$?';
// const SUSPENSE_FALLBACK_START_DATA = '$!';
//
// function clientRenderBoundary(suspenseBoundaryID) {
//   // Find the fallback's first element.
//   const suspenseIdNode = document.getElementById(suspenseBoundaryID);
//   if (!suspenseIdNode) {
//     // The user must have already navigated away from this tree.
//     // E.g. because the parent was hydrated.
//     return;
//   }
//   // Find the boundary around the fallback. This is always the previous node.
//   const suspenseNode = suspenseIdNode.previousSibling;
//   // Tag it to be client rendered.
//   suspenseNode.data = SUSPENSE_FALLBACK_START_DATA;
//   // Tell React to retry it if the parent already hydrated.
//   if (suspenseNode._reactRetry) {
//     suspenseNode._reactRetry();
//   }
// }
//
// function completeBoundary(suspenseBoundaryID, contentID) {
//   // Find the fallback's first element.
//   const suspenseIdNode = document.getElementById(suspenseBoundaryID);
//   const contentNode = document.getElementById(contentID);
//   // We'll detach the content node so that regardless of what happens next we don't leave in the tree.
//   // This might also help by not causing recalcing each time we move a child from here to the target.
//   contentNode.parentNode.removeChild(contentNode);
//   if (!suspenseIdNode) {
//     // The user must have already navigated away from this tree.
//     // E.g. because the parent was hydrated. That's fine there's nothing to do
//     // but we have to make sure that we already deleted the container node.
//     return;
//   }
//   // Find the boundary around the fallback. This is always the previous node.
//   const suspenseNode = suspenseIdNode.previousSibling;
//
//   // Clear all the existing children. This is complicated because
//   // there can be embedded Suspense boundaries in the fallback.
//   // This is similar to clearSuspenseBoundary in ReactDOMHostConfig.
//   // TODO: We could avoid this if we never emitted suspense boundaries in fallback trees.
//   // They never hydrate anyway. However, currently we support incrementally loading the fallback.
//   const parentInstance = suspenseNode.parentNode;
//   let node = suspenseNode.nextSibling;
//   let depth = 0;
//   do {
//     if (node && node.nodeType === COMMENT_NODE) {
//       const data = node.data;
//       if (data === SUSPENSE_END_DATA) {
//         if (depth === 0) {
//           break;
//         } else {
//           depth--;
//         }
//       } else if (
//         data === SUSPENSE_START_DATA ||
//         data === SUSPENSE_PENDING_START_DATA ||
//         data === SUSPENSE_FALLBACK_START_DATA
//       ) {
//         depth++;
//       }
//     }
//
//     const nextNode = node.nextSibling;
//     parentInstance.removeChild(node);
//     node = nextNode;
//   } while (node);
//
//   const endOfBoundary = node;
//
//   // Insert all the children from the contentNode between the start and end of suspense boundary.
//   while (contentNode.firstChild) {
//     parentInstance.insertBefore(contentNode.firstChild, endOfBoundary);
//   }
//   suspenseNode.data = SUSPENSE_START_DATA;
//   if (suspenseNode._reactRetry) {
//     suspenseNode._reactRetry();
//   }
// }
//
// function completeSegment(containerID, placeholderID) {
//   const segmentContainer = document.getElementById(containerID);
//   const placeholderNode = document.getElementById(placeholderID);
//   // We always expect both nodes to exist here because, while we might
//   // have navigated away from the main tree, we still expect the detached
//   // tree to exist.
//   segmentContainer.parentNode.removeChild(segmentContainer);
//   while (segmentContainer.firstChild) {
//     placeholderNode.parentNode.insertBefore(
//       segmentContainer.firstChild,
//       placeholderNode,
//     );
//   }
//   placeholderNode.parentNode.removeChild(placeholderNode);
// }

var completeSegmentFunction = 'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}';
var completeBoundaryFunction = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}';
var clientRenderFunction = 'function $RX(a){if(a=document.getElementById(a))a=a.previousSibling,a.data="$!",a._reactRetry&&a._reactRetry()}';
var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegmentFunction + ';$RS("');
var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
var completeSegmentScript2 = stringToPrecomputedChunk('","');
var completeSegmentScript3 = stringToPrecomputedChunk('")</script>');
function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
  writeChunk(destination, responseState.startInlineScript);

  if (!responseState.sentCompleteSegmentFunction) {
    // The first time we write this, we'll need to include the full implementation.
    responseState.sentCompleteSegmentFunction = true;
    writeChunk(destination, completeSegmentScript1Full);
  } else {
    // Future calls can just reuse the same function.
    writeChunk(destination, completeSegmentScript1Partial);
  }

  writeChunk(destination, responseState.segmentPrefix);
  var formattedID = stringToChunk(contentSegmentID.toString(16));
  writeChunk(destination, formattedID);
  writeChunk(destination, completeSegmentScript2);
  writeChunk(destination, responseState.placeholderPrefix);
  writeChunk(destination, formattedID);
  return writeChunkAndReturn(destination, completeSegmentScript3);
}
var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundaryFunction + ';$RC("');
var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
var completeBoundaryScript2 = stringToPrecomputedChunk('","');
var completeBoundaryScript3 = stringToPrecomputedChunk('")</script>');
function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID) {
  writeChunk(destination, responseState.startInlineScript);

  if (!responseState.sentCompleteBoundaryFunction) {
    // The first time we write this, we'll need to include the full implementation.
    responseState.sentCompleteBoundaryFunction = true;
    writeChunk(destination, completeBoundaryScript1Full);
  } else {
    // Future calls can just reuse the same function.
    writeChunk(destination, completeBoundaryScript1Partial);
  }

  if (boundaryID === null) {
    throw new Error('An ID must have been assigned before we can complete the boundary.');
  }

  var formattedContentID = stringToChunk(contentSegmentID.toString(16));
  writeChunk(destination, boundaryID);
  writeChunk(destination, completeBoundaryScript2);
  writeChunk(destination, responseState.segmentPrefix);
  writeChunk(destination, formattedContentID);
  return writeChunkAndReturn(destination, completeBoundaryScript3);
}
var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderFunction + ';$RX("');
var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
var clientRenderScript2 = stringToPrecomputedChunk('")</script>');
function writeClientRenderBoundaryInstruction(destination, responseState, boundaryID) {
  writeChunk(destination, responseState.startInlineScript);

  if (!responseState.sentClientRenderFunction) {
    // The first time we write this, we'll need to include the full implementation.
    responseState.sentClientRenderFunction = true;
    writeChunk(destination, clientRenderScript1Full);
  } else {
    // Future calls can just reuse the same function.
    writeChunk(destination, clientRenderScript1Partial);
  }

  if (boundaryID === null) {
    throw new Error('An ID must have been assigned before we can complete the boundary.');
  }

  writeChunk(destination, boundaryID);
  return writeChunkAndReturn(destination, clientRenderScript2);
}

function createResponseState$1(generateStaticMarkup, identifierPrefix) {
  var responseState = createResponseState(identifierPrefix, undefined);
  return {
    // Keep this in sync with ReactDOMServerFormatConfig
    bootstrapChunks: responseState.bootstrapChunks,
    startInlineScript: responseState.startInlineScript,
    placeholderPrefix: responseState.placeholderPrefix,
    segmentPrefix: responseState.segmentPrefix,
    boundaryPrefix: responseState.boundaryPrefix,
    idPrefix: responseState.idPrefix,
    nextSuspenseID: responseState.nextSuspenseID,
    sentCompleteSegmentFunction: responseState.sentCompleteSegmentFunction,
    sentCompleteBoundaryFunction: responseState.sentCompleteBoundaryFunction,
    sentClientRenderFunction: responseState.sentClientRenderFunction,
    // This is an extra field for the legacy renderer
    generateStaticMarkup: generateStaticMarkup
  };
}
function createRootFormatContext() {
  return {
    insertionMode: HTML_MODE,
    // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
    selectedValue: null
  };
}
function pushTextInstance$1(target, text, responseState) {
  if (responseState.generateStaticMarkup) {
    target.push(stringToChunk(escapeTextForBrowser(text)));
  } else {
    pushTextInstance(target, text);
  }
}
function writeStartCompletedSuspenseBoundary$1(destination, responseState) {
  if (responseState.generateStaticMarkup) {
    // A completed boundary is done and doesn't need a representation in the HTML
    // if we're not going to be hydrating it.
    return true;
  }

  return writeStartCompletedSuspenseBoundary(destination);
}
function writeStartClientRenderedSuspenseBoundary$1(destination, responseState) {
  if (responseState.generateStaticMarkup) {
    // A client rendered boundary is done and doesn't need a representation in the HTML
    // since we'll never hydrate it. This is arguably an error in static generation.
    return true;
  }

  return writeStartClientRenderedSuspenseBoundary(destination);
}
function writeEndCompletedSuspenseBoundary$1(destination, responseState) {
  if (responseState.generateStaticMarkup) {
    return true;
  }

  return writeEndCompletedSuspenseBoundary(destination);
}
function writeEndClientRenderedSuspenseBoundary$1(destination, responseState) {
  if (responseState.generateStaticMarkup) {
    return true;
  }

  return writeEndClientRenderedSuspenseBoundary(destination);
}

var assign = Object.assign;

// ATTENTION

var REACT_ELEMENT_TYPE =  Symbol.for('react.element');
var REACT_PORTAL_TYPE =  Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE =  Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE =  Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE =  Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE =  Symbol.for('react.provider');
var REACT_CONTEXT_TYPE =  Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE =  Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE =  Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE =  Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE =  Symbol.for('react.memo');
var REACT_LAZY_TYPE =  Symbol.for('react.lazy');
var REACT_SCOPE_TYPE =  Symbol.for('react.scope');
var REACT_DEBUG_TRACING_MODE_TYPE =  Symbol.for('react.debug_trace_mode');
var REACT_LEGACY_HIDDEN_TYPE =  Symbol.for('react.legacy_hidden');
var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED =  Symbol.for('react.default_value');
var MAYBE_ITERATOR_SYMBOL =  Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}

function describeClassComponentFrame(ctor, source, ownerFn) {
  {
    return describeNativeComponentFrame(ctor, true);
  }
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var warnedAboutMissingGetChildContext;

{
  warnedAboutMissingGetChildContext = {};
}

var emptyContextObject = {};

{
  Object.freeze(emptyContextObject);
}

function getMaskedContext(type, unmaskedContext) {
  {
    var contextTypes = type.contextTypes;

    if (!contextTypes) {
      return emptyContextObject;
    }

    var context = {};

    for (var key in contextTypes) {
      context[key] = unmaskedContext[key];
    }

    {
      var name = getComponentNameFromType(type) || 'Unknown';
      checkPropTypes(contextTypes, context, 'context', name);
    }

    return context;
  }
}
function processChildContext(instance, type, parentContext, childContextTypes) {
  {
    // TODO (bvaughn) Replace this behavior with an invariant() in the future.
    // It has only been added in Fiber to match the (unintentional) behavior in Stack.
    if (typeof instance.getChildContext !== 'function') {
      {
        var componentName = getComponentNameFromType(type) || 'Unknown';

        if (!warnedAboutMissingGetChildContext[componentName]) {
          warnedAboutMissingGetChildContext[componentName] = true;

          error('%s.childContextTypes is specified but there is no getChildContext() method ' + 'on the instance. You can either define getChildContext() on %s or remove ' + 'childContextTypes from it.', componentName, componentName);
        }
      }

      return parentContext;
    }

    var childContext = instance.getChildContext();

    for (var contextKey in childContext) {
      if (!(contextKey in childContextTypes)) {
        throw new Error((getComponentNameFromType(type) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes.");
      }
    }

    {
      var name = getComponentNameFromType(type) || 'Unknown';
      checkPropTypes(childContextTypes, childContext, 'child context', name);
    }

    return assign({}, parentContext, childContext);
  }
}

var rendererSigil;

{
  // Use this to detect multiple renderers using the same context
  rendererSigil = {};
} // Used to store the parent path of all context overrides in a shared linked list.
// Forming a reverse tree.


var rootContextSnapshot = null; // We assume that this runtime owns the "current" field on all ReactContext instances.
// This global (actually thread local) state represents what state all those "current",
// fields are currently in.

var currentActiveSnapshot = null;

function popNode(prev) {
  {
    prev.context._currentValue2 = prev.parentValue;
  }
}

function pushNode(next) {
  {
    next.context._currentValue2 = next.value;
  }
}

function popToNearestCommonAncestor(prev, next) {
  if (prev === next) ; else {
    popNode(prev);
    var parentPrev = prev.parent;
    var parentNext = next.parent;

    if (parentPrev === null) {
      if (parentNext !== null) {
        throw new Error('The stacks must reach the root at the same time. This is a bug in React.');
      }
    } else {
      if (parentNext === null) {
        throw new Error('The stacks must reach the root at the same time. This is a bug in React.');
      }

      popToNearestCommonAncestor(parentPrev, parentNext);
    } // On the way back, we push the new ones that weren't common.


    pushNode(next);
  }
}

function popAllPrevious(prev) {
  popNode(prev);
  var parentPrev = prev.parent;

  if (parentPrev !== null) {
    popAllPrevious(parentPrev);
  }
}

function pushAllNext(next) {
  var parentNext = next.parent;

  if (parentNext !== null) {
    pushAllNext(parentNext);
  }

  pushNode(next);
}

function popPreviousToCommonLevel(prev, next) {
  popNode(prev);
  var parentPrev = prev.parent;

  if (parentPrev === null) {
    throw new Error('The depth must equal at least at zero before reaching the root. This is a bug in React.');
  }

  if (parentPrev.depth === next.depth) {
    // We found the same level. Now we just need to find a shared ancestor.
    popToNearestCommonAncestor(parentPrev, next);
  } else {
    // We must still be deeper.
    popPreviousToCommonLevel(parentPrev, next);
  }
}

function popNextToCommonLevel(prev, next) {
  var parentNext = next.parent;

  if (parentNext === null) {
    throw new Error('The depth must equal at least at zero before reaching the root. This is a bug in React.');
  }

  if (prev.depth === parentNext.depth) {
    // We found the same level. Now we just need to find a shared ancestor.
    popToNearestCommonAncestor(prev, parentNext);
  } else {
    // We must still be deeper.
    popNextToCommonLevel(prev, parentNext);
  }

  pushNode(next);
} // Perform context switching to the new snapshot.
// To make it cheap to read many contexts, while not suspending, we make the switch eagerly by
// updating all the context's current values. That way reads, always just read the current value.
// At the cost of updating contexts even if they're never read by this subtree.


function switchContext(newSnapshot) {
  // The basic algorithm we need to do is to pop back any contexts that are no longer on the stack.
  // We also need to update any new contexts that are now on the stack with the deepest value.
  // The easiest way to update new contexts is to just reapply them in reverse order from the
  // perspective of the backpointers. To avoid allocating a lot when switching, we use the stack
  // for that. Therefore this algorithm is recursive.
  // 1) First we pop which ever snapshot tree was deepest. Popping old contexts as we go.
  // 2) Then we find the nearest common ancestor from there. Popping old contexts as we go.
  // 3) Then we reapply new contexts on the way back up the stack.
  var prev = currentActiveSnapshot;
  var next = newSnapshot;

  if (prev !== next) {
    if (prev === null) {
      // $FlowFixMe: This has to be non-null since it's not equal to prev.
      pushAllNext(next);
    } else if (next === null) {
      popAllPrevious(prev);
    } else if (prev.depth === next.depth) {
      popToNearestCommonAncestor(prev, next);
    } else if (prev.depth > next.depth) {
      popPreviousToCommonLevel(prev, next);
    } else {
      popNextToCommonLevel(prev, next);
    }

    currentActiveSnapshot = next;
  }
}
function pushProvider(context, nextValue) {
  var prevValue;

  {
    prevValue = context._currentValue2;
    context._currentValue2 = nextValue;

    {
      if (context._currentRenderer2 !== undefined && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil) {
        error('Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.');
      }

      context._currentRenderer2 = rendererSigil;
    }
  }

  var prevNode = currentActiveSnapshot;
  var newNode = {
    parent: prevNode,
    depth: prevNode === null ? 0 : prevNode.depth + 1,
    context: context,
    parentValue: prevValue,
    value: nextValue
  };
  currentActiveSnapshot = newNode;
  return newNode;
}
function popProvider(context) {
  var prevSnapshot = currentActiveSnapshot;

  if (prevSnapshot === null) {
    throw new Error('Tried to pop a Context at the root of the app. This is a bug in React.');
  }

  {
    if (prevSnapshot.context !== context) {
      error('The parent context is not the expected context. This is probably a bug in React.');
    }
  }

  {
    var _value = prevSnapshot.parentValue;

    if (_value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
      prevSnapshot.context._currentValue2 = prevSnapshot.context._defaultValue;
    } else {
      prevSnapshot.context._currentValue2 = _value;
    }

    {
      if (context._currentRenderer2 !== undefined && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil) {
        error('Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.');
      }

      context._currentRenderer2 = rendererSigil;
    }
  }

  return currentActiveSnapshot = prevSnapshot.parent;
}
function getActiveContext() {
  return currentActiveSnapshot;
}
function readContext(context) {
  var value =  context._currentValue2;
  return value;
}

/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 *
 * Note that this module is currently shared and assumed to be stateless.
 * If this becomes an actual Map, that will break.
 */
function get(key) {
  return key._reactInternals;
}
function set(key, value) {
  key._reactInternals = value;
}

var didWarnAboutNoopUpdateForComponent = {};
var didWarnAboutDeprecatedWillMount = {};
var didWarnAboutUninitializedState;
var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
var didWarnAboutLegacyLifecyclesAndDerivedState;
var didWarnAboutUndefinedDerivedState;
var warnOnUndefinedDerivedState;
var warnOnInvalidCallback;
var didWarnAboutDirectlyAssigningPropsToState;
var didWarnAboutContextTypeAndContextTypes;
var didWarnAboutInvalidateContextType;

{
  didWarnAboutUninitializedState = new Set();
  didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
  didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
  didWarnAboutDirectlyAssigningPropsToState = new Set();
  didWarnAboutUndefinedDerivedState = new Set();
  didWarnAboutContextTypeAndContextTypes = new Set();
  didWarnAboutInvalidateContextType = new Set();
  var didWarnOnInvalidCallback = new Set();

  warnOnInvalidCallback = function (callback, callerName) {
    if (callback === null || typeof callback === 'function') {
      return;
    }

    var key = callerName + '_' + callback;

    if (!didWarnOnInvalidCallback.has(key)) {
      didWarnOnInvalidCallback.add(key);

      error('%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, callback);
    }
  };

  warnOnUndefinedDerivedState = function (type, partialState) {
    if (partialState === undefined) {
      var componentName = getComponentNameFromType(type) || 'Component';

      if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
        didWarnAboutUndefinedDerivedState.add(componentName);

        error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', componentName);
      }
    }
  };
}

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && getComponentNameFromType(_constructor) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;

    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
      return;
    }

    error('%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);

    didWarnAboutNoopUpdateForComponent[warningKey] = true;
  }
}

var classComponentUpdater = {
  isMounted: function (inst) {
    return false;
  },
  enqueueSetState: function (inst, payload, callback) {
    var internals = get(inst);

    if (internals.queue === null) {
      warnNoop(inst, 'setState');
    } else {
      internals.queue.push(payload);

      {
        if (callback !== undefined && callback !== null) {
          warnOnInvalidCallback(callback, 'setState');
        }
      }
    }
  },
  enqueueReplaceState: function (inst, payload, callback) {
    var internals = get(inst);
    internals.replace = true;
    internals.queue = [payload];

    {
      if (callback !== undefined && callback !== null) {
        warnOnInvalidCallback(callback, 'setState');
      }
    }
  },
  enqueueForceUpdate: function (inst, callback) {
    var internals = get(inst);

    if (internals.queue === null) {
      warnNoop(inst, 'forceUpdate');
    } else {
      {
        if (callback !== undefined && callback !== null) {
          warnOnInvalidCallback(callback, 'setState');
        }
      }
    }
  }
};

function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
  var partialState = getDerivedStateFromProps(nextProps, prevState);

  {
    warnOnUndefinedDerivedState(ctor, partialState);
  } // Merge the partial state and the previous state.


  var newState = partialState === null || partialState === undefined ? prevState : assign({}, prevState, partialState);
  return newState;
}

function constructClassInstance(ctor, props, maskedLegacyContext) {
  var context = emptyContextObject;
  var contextType = ctor.contextType;

  {
    if ('contextType' in ctor) {
      var isValid = // Allow null for conditional declaration
      contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

      if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
        didWarnAboutInvalidateContextType.add(ctor);
        var addendum = '';

        if (contextType === undefined) {
          addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
        } else if (typeof contextType !== 'object') {
          addendum = ' However, it is set to a ' + typeof contextType + '.';
        } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
          addendum = ' Did you accidentally pass the Context.Provider instead?';
        } else if (contextType._context !== undefined) {
          // <Context.Consumer>
          addendum = ' Did you accidentally pass the Context.Consumer instead?';
        } else {
          addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
        }

        error('%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentNameFromType(ctor) || 'Component', addendum);
      }
    }
  }

  if (typeof contextType === 'object' && contextType !== null) {
    context = readContext(contextType);
  } else {
    context = maskedLegacyContext;
  }

  var instance = new ctor(props, context);

  {
    if (typeof ctor.getDerivedStateFromProps === 'function' && (instance.state === null || instance.state === undefined)) {
      var componentName = getComponentNameFromType(ctor) || 'Component';

      if (!didWarnAboutUninitializedState.has(componentName)) {
        didWarnAboutUninitializedState.add(componentName);

        error('`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, instance.state === null ? 'null' : 'undefined', componentName);
      }
    } // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Warn about these lifecycles if they are present.
    // Don't warn about react-lifecycles-compat polyfilled methods though.


    if (typeof ctor.getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function') {
      var foundWillMountName = null;
      var foundWillReceivePropsName = null;
      var foundWillUpdateName = null;

      if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true) {
        foundWillMountName = 'componentWillMount';
      } else if (typeof instance.UNSAFE_componentWillMount === 'function') {
        foundWillMountName = 'UNSAFE_componentWillMount';
      }

      if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
        foundWillReceivePropsName = 'componentWillReceiveProps';
      } else if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
      }

      if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
        foundWillUpdateName = 'componentWillUpdate';
      } else if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
        foundWillUpdateName = 'UNSAFE_componentWillUpdate';
      }

      if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
        var _componentName = getComponentNameFromType(ctor) || 'Component';

        var newApiName = typeof ctor.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';

        if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
          didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);

          error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + '%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n' + 'The above lifecycles should be removed. Learn more about this warning here:\n' + 'https://reactjs.org/link/unsafe-component-lifecycles', _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : '', foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : '', foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : '');
        }
      }
    }
  }

  return instance;
}

function checkClassInstance(instance, ctor, newProps) {
  {
    var name = getComponentNameFromType(ctor) || 'Component';
    var renderPresent = instance.render;

    if (!renderPresent) {
      if (ctor.prototype && typeof ctor.prototype.render === 'function') {
        error('%s(...): No `render` method found on the returned component ' + 'instance: did you accidentally return an object from the constructor?', name);
      } else {
        error('%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', name);
      }
    }

    if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
      error('getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', name);
    }

    if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', name);
    }

    if (instance.propTypes) {
      error('propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', name);
    }

    if (instance.contextType) {
      error('contextType was defined as an instance property on %s. Use a static ' + 'property to define contextType instead.', name);
    }

    {
      if (instance.contextTypes) {
        error('contextTypes was defined as an instance property on %s. Use a static ' + 'property to define contextTypes instead.', name);
      }

      if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
        didWarnAboutContextTypeAndContextTypes.add(ctor);

        error('%s declares both contextTypes and contextType static properties. ' + 'The legacy contextTypes property will be ignored.', name);
      }
    }

    if (typeof instance.componentShouldUpdate === 'function') {
      error('%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', name);
    }

    if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== 'undefined') {
      error('%s has a method called shouldComponentUpdate(). ' + 'shouldComponentUpdate should not be used when extending React.PureComponent. ' + 'Please extend React.Component if shouldComponentUpdate is used.', getComponentNameFromType(ctor) || 'A pure component');
    }

    if (typeof instance.componentDidUnmount === 'function') {
      error('%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', name);
    }

    if (typeof instance.componentDidReceiveProps === 'function') {
      error('%s has a method called ' + 'componentDidReceiveProps(). But there is no such lifecycle method. ' + 'If you meant to update the state in response to changing props, ' + 'use componentWillReceiveProps(). If you meant to fetch data or ' + 'run side-effects or mutations after React has updated the UI, use componentDidUpdate().', name);
    }

    if (typeof instance.componentWillRecieveProps === 'function') {
      error('%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', name);
    }

    if (typeof instance.UNSAFE_componentWillRecieveProps === 'function') {
      error('%s has a method called ' + 'UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?', name);
    }

    var hasMutatedProps = instance.props !== newProps;

    if (instance.props !== undefined && hasMutatedProps) {
      error('%s(...): When calling super() in `%s`, make sure to pass ' + "up the same props that your component's constructor was passed.", name, name);
    }

    if (instance.defaultProps) {
      error('Setting defaultProps as an instance property on %s is not supported and will be ignored.' + ' Instead, define defaultProps as a static property on %s.', name, name);
    }

    if (typeof instance.getSnapshotBeforeUpdate === 'function' && typeof instance.componentDidUpdate !== 'function' && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
      didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);

      error('%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). ' + 'This component defines getSnapshotBeforeUpdate() only.', getComponentNameFromType(ctor));
    }

    if (typeof instance.getDerivedStateFromProps === 'function') {
      error('%s: getDerivedStateFromProps() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name);
    }

    if (typeof instance.getDerivedStateFromError === 'function') {
      error('%s: getDerivedStateFromError() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name);
    }

    if (typeof ctor.getSnapshotBeforeUpdate === 'function') {
      error('%s: getSnapshotBeforeUpdate() is defined as a static method ' + 'and will be ignored. Instead, declare it as an instance method.', name);
    }

    var _state = instance.state;

    if (_state && (typeof _state !== 'object' || isArray(_state))) {
      error('%s.state: must be set to an object or null', name);
    }

    if (typeof instance.getChildContext === 'function' && typeof ctor.childContextTypes !== 'object') {
      error('%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', name);
    }
  }
}

function callComponentWillMount(type, instance) {
  var oldState = instance.state;

  if (typeof instance.componentWillMount === 'function') {
    {
      if ( instance.componentWillMount.__suppressDeprecationWarning !== true) {
        var componentName = getComponentNameFromType(type) || 'Unknown';

        if (!didWarnAboutDeprecatedWillMount[componentName]) {
          warn( // keep this warning in sync with ReactStrictModeWarning.js
          'componentWillMount has been renamed, and is not recommended for use. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move code from componentWillMount to componentDidMount (preferred in most cases) ' + 'or the constructor.\n' + '\nPlease update the following components: %s', componentName);

          didWarnAboutDeprecatedWillMount[componentName] = true;
        }
      }
    }

    instance.componentWillMount();
  }

  if (typeof instance.UNSAFE_componentWillMount === 'function') {
    instance.UNSAFE_componentWillMount();
  }

  if (oldState !== instance.state) {
    {
      error('%s.componentWillMount(): Assigning directly to this.state is ' + "deprecated (except inside a component's " + 'constructor). Use setState instead.', getComponentNameFromType(type) || 'Component');
    }

    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
  }
}

function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
  if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
    var oldQueue = internalInstance.queue;
    var oldReplace = internalInstance.replace;
    internalInstance.queue = null;
    internalInstance.replace = false;

    if (oldReplace && oldQueue.length === 1) {
      inst.state = oldQueue[0];
    } else {
      var nextState = oldReplace ? oldQueue[0] : inst.state;
      var dontMutate = true;

      for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
        var partial = oldQueue[i];
        var partialState = typeof partial === 'function' ? partial.call(inst, nextState, props, maskedLegacyContext) : partial;

        if (partialState != null) {
          if (dontMutate) {
            dontMutate = false;
            nextState = assign({}, nextState, partialState);
          } else {
            assign(nextState, partialState);
          }
        }
      }

      inst.state = nextState;
    }
  } else {
    internalInstance.queue = null;
  }
} // Invokes the mount life-cycles on a previously never rendered instance.


function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
  {
    checkClassInstance(instance, ctor, newProps);
  }

  var initialState = instance.state !== undefined ? instance.state : null;
  instance.updater = classComponentUpdater;
  instance.props = newProps;
  instance.state = initialState; // We don't bother initializing the refs object on the server, since we're not going to resolve them anyway.
  // The internal instance will be used to manage updates that happen during this mount.

  var internalInstance = {
    queue: [],
    replace: false
  };
  set(instance, internalInstance);
  var contextType = ctor.contextType;

  if (typeof contextType === 'object' && contextType !== null) {
    instance.context = readContext(contextType);
  } else {
    instance.context = maskedLegacyContext;
  }

  {
    if (instance.state === newProps) {
      var componentName = getComponentNameFromType(ctor) || 'Component';

      if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
        didWarnAboutDirectlyAssigningPropsToState.add(componentName);

        error('%s: It is not recommended to assign props directly to state ' + "because updates to props won't be reflected in state. " + 'In most cases, it is better to use props directly.', componentName);
      }
    }
  }

  var getDerivedStateFromProps = ctor.getDerivedStateFromProps;

  if (typeof getDerivedStateFromProps === 'function') {
    instance.state = applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, initialState, newProps);
  } // In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.


  if (typeof ctor.getDerivedStateFromProps !== 'function' && typeof instance.getSnapshotBeforeUpdate !== 'function' && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
    callComponentWillMount(ctor, instance); // If we had additional state updates during this life-cycle, let's
    // process them now.

    processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext);
  }
}

// Ids are base 32 strings whose binary representation corresponds to the
// position of a node in a tree.
// Every time the tree forks into multiple children, we add additional bits to
// the left of the sequence that represent the position of the child within the
// current level of children.
//
//      00101       00010001011010101
//      ╰─┬─╯       ╰───────┬───────╯
//   Fork 5 of 20       Parent id
//
// The leading 0s are important. In the above example, you only need 3 bits to
// represent slot 5. However, you need 5 bits to represent all the forks at
// the current level, so we must account for the empty bits at the end.
//
// For this same reason, slots are 1-indexed instead of 0-indexed. Otherwise,
// the zeroth id at a level would be indistinguishable from its parent.
//
// If a node has only one child, and does not materialize an id (i.e. does not
// contain a useId hook), then we don't need to allocate any space in the
// sequence. It's treated as a transparent indirection. For example, these two
// trees produce the same ids:
//
// <>                          <>
//   <Indirection>               <A />
//     <A />                     <B />
//   </Indirection>            </>
//   <B />
// </>
//
// However, we cannot skip any node that materializes an id. Otherwise, a parent
// id that does not fork would be indistinguishable from its child id. For
// example, this tree does not fork, but the parent and child must have
// different ids.
//
// <Parent>
//   <Child />
// </Parent>
//
// To handle this scenario, every time we materialize an id, we allocate a
// new level with a single slot. You can think of this as a fork with only one
// prong, or an array of children with length 1.
//
// It's possible for the size of the sequence to exceed 32 bits, the max
// size for bitwise operations. When this happens, we make more room by
// converting the right part of the id to a string and storing it in an overflow
// variable. We use a base 32 string representation, because 32 is the largest
// power of 2 that is supported by toString(). We want the base to be large so
// that the resulting ids are compact, and we want the base to be a power of 2
// because every log2(base) bits corresponds to a single character, i.e. every
// log2(32) = 5 bits. That means we can lop bits off the end 5 at a time without
// affecting the final result.
var emptyTreeContext = {
  id: 1,
  overflow: ''
};
function getTreeId(context) {
  var overflow = context.overflow;
  var idWithLeadingBit = context.id;
  var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
  return id.toString(32) + overflow;
}
function pushTreeContext(baseContext, totalChildren, index) {
  var baseIdWithLeadingBit = baseContext.id;
  var baseOverflow = baseContext.overflow; // The leftmost 1 marks the end of the sequence, non-inclusive. It's not part
  // of the id; we use it to account for leading 0s.

  var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
  var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
  var slot = index + 1;
  var length = getBitLength(totalChildren) + baseLength; // 30 is the max length we can store without overflowing, taking into
  // consideration the leading 1 we use to mark the end of the sequence.

  if (length > 30) {
    // We overflowed the bitwise-safe range. Fall back to slower algorithm.
    // This branch assumes the length of the base id is greater than 5; it won't
    // work for smaller ids, because you need 5 bits per character.
    //
    // We encode the id in multiple steps: first the base id, then the
    // remaining digits.
    //
    // Each 5 bit sequence corresponds to a single base 32 character. So for
    // example, if the current id is 23 bits long, we can convert 20 of those
    // bits into a string of 4 characters, with 3 bits left over.
    //
    // First calculate how many bits in the base id represent a complete
    // sequence of characters.
    var numberOfOverflowBits = baseLength - baseLength % 5; // Then create a bitmask that selects only those bits.

    var newOverflowBits = (1 << numberOfOverflowBits) - 1; // Select the bits, and convert them to a base 32 string.

    var newOverflow = (baseId & newOverflowBits).toString(32); // Now we can remove those bits from the base id.

    var restOfBaseId = baseId >> numberOfOverflowBits;
    var restOfBaseLength = baseLength - numberOfOverflowBits; // Finally, encode the rest of the bits using the normal algorithm. Because
    // we made more room, this time it won't overflow.

    var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
    var restOfNewBits = slot << restOfBaseLength;
    var id = restOfNewBits | restOfBaseId;
    var overflow = newOverflow + baseOverflow;
    return {
      id: 1 << restOfLength | id,
      overflow: overflow
    };
  } else {
    // Normal path
    var newBits = slot << baseLength;

    var _id = newBits | baseId;

    var _overflow = baseOverflow;
    return {
      id: 1 << length | _id,
      overflow: _overflow
    };
  }
}

function getBitLength(number) {
  return 32 - clz32(number);
}

function getLeadingBit(id) {
  return 1 << getBitLength(id) - 1;
} // TODO: Math.clz32 is supported in Node 12+. Maybe we can drop the fallback.


var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback; // Count leading zeros.
// Based on:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

var log = Math.log;
var LN2 = Math.LN2;

function clz32Fallback(x) {
  var asUint = x >>> 0;

  if (asUint === 0) {
    return 32;
  }

  return 31 - (log(asUint) / LN2 | 0) | 0;
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var currentlyRenderingComponent = null;
var currentlyRenderingTask = null;
var firstWorkInProgressHook = null;
var workInProgressHook = null; // Whether the work-in-progress hook is a re-rendered hook

var isReRender = false; // Whether an update was scheduled during the currently executing render pass.

var didScheduleRenderPhaseUpdate = false; // Counts the number of useId hooks in this component

var localIdCounter = 0; // Lazily created map of render-phase updates

var renderPhaseUpdates = null; // Counter to prevent infinite loops.

var numberOfReRenders = 0;
var RE_RENDER_LIMIT = 25;
var isInHookUserCodeInDev = false; // In DEV, this is the name of the currently executing primitive hook

var currentHookNameInDev;

function resolveCurrentlyRenderingComponent() {
  if (currentlyRenderingComponent === null) {
    throw new Error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
  }

  {
    if (isInHookUserCodeInDev) {
      error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://reactjs.org/link/rules-of-hooks');
    }
  }

  return currentlyRenderingComponent;
}

function areHookInputsEqual(nextDeps, prevDeps) {
  if (prevDeps === null) {
    {
      error('%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
    }

    return false;
  }

  {
    // Don't bother comparing lengths in prod because these arrays should be
    // passed inline.
    if (nextDeps.length !== prevDeps.length) {
      error('The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + nextDeps.join(', ') + "]", "[" + prevDeps.join(', ') + "]");
    }
  }

  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (objectIs(nextDeps[i], prevDeps[i])) {
      continue;
    }

    return false;
  }

  return true;
}

function createHook() {
  if (numberOfReRenders > 0) {
    throw new Error('Rendered more hooks than during the previous render');
  }

  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}

function createWorkInProgressHook() {
  if (workInProgressHook === null) {
    // This is the first hook in the list
    if (firstWorkInProgressHook === null) {
      isReRender = false;
      firstWorkInProgressHook = workInProgressHook = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = firstWorkInProgressHook;
    }
  } else {
    if (workInProgressHook.next === null) {
      isReRender = false; // Append to the end of the list

      workInProgressHook = workInProgressHook.next = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = workInProgressHook.next;
    }
  }

  return workInProgressHook;
}

function prepareToUseHooks(task, componentIdentity) {
  currentlyRenderingComponent = componentIdentity;
  currentlyRenderingTask = task;

  {
    isInHookUserCodeInDev = false;
  } // The following should have already been reset
  // didScheduleRenderPhaseUpdate = false;
  // localIdCounter = 0;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;


  localIdCounter = 0;
}
function finishHooks(Component, props, children, refOrContext) {
  // This must be called after every function component to prevent hooks from
  // being used in classes.
  while (didScheduleRenderPhaseUpdate) {
    // Updates were scheduled during the render phase. They are stored in
    // the `renderPhaseUpdates` map. Call the component again, reusing the
    // work-in-progress hooks and applying the additional updates on top. Keep
    // restarting until no more updates are scheduled.
    didScheduleRenderPhaseUpdate = false;
    localIdCounter = 0;
    numberOfReRenders += 1; // Start over from the beginning of the list

    workInProgressHook = null;
    children = Component(props, refOrContext);
  }

  resetHooksState();
  return children;
}
function checkDidRenderIdHook() {
  // This should be called immediately after every finishHooks call.
  // Conceptually, it's part of the return value of finishHooks; it's only a
  // separate function to avoid using an array tuple.
  var didRenderIdHook = localIdCounter !== 0;
  return didRenderIdHook;
} // Reset the internal hooks state if an error occurs while rendering a component

function resetHooksState() {
  {
    isInHookUserCodeInDev = false;
  }

  currentlyRenderingComponent = null;
  currentlyRenderingTask = null;
  didScheduleRenderPhaseUpdate = false;
  firstWorkInProgressHook = null;
  numberOfReRenders = 0;
  renderPhaseUpdates = null;
  workInProgressHook = null;
}

function readContext$1(context) {
  {
    if (isInHookUserCodeInDev) {
      error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
    }
  }

  return readContext(context);
}

function useContext(context) {
  {
    currentHookNameInDev = 'useContext';
  }

  resolveCurrentlyRenderingComponent();
  return readContext(context);
}

function basicStateReducer(state, action) {
  // $FlowFixMe: Flow doesn't like mixed types
  return typeof action === 'function' ? action(state) : action;
}

function useState(initialState) {
  {
    currentHookNameInDev = 'useState';
  }

  return useReducer(basicStateReducer, // useReducer has a special case to support lazy useState initializers
  initialState);
}
function useReducer(reducer, initialArg, init) {
  {
    if (reducer !== basicStateReducer) {
      currentHookNameInDev = 'useReducer';
    }
  }

  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();

  if (isReRender) {
    // This is a re-render. Apply the new render phase updates to the previous
    // current hook.
    var queue = workInProgressHook.queue;
    var dispatch = queue.dispatch;

    if (renderPhaseUpdates !== null) {
      // Render phase updates are stored in a map of queue -> linked list
      var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

      if (firstRenderPhaseUpdate !== undefined) {
        renderPhaseUpdates.delete(queue);
        var newState = workInProgressHook.memoizedState;
        var update = firstRenderPhaseUpdate;

        do {
          // Process this render phase update. We don't have to check the
          // priority because it will always be the same as the current
          // render's.
          var action = update.action;

          {
            isInHookUserCodeInDev = true;
          }

          newState = reducer(newState, action);

          {
            isInHookUserCodeInDev = false;
          }

          update = update.next;
        } while (update !== null);

        workInProgressHook.memoizedState = newState;
        return [newState, dispatch];
      }
    }

    return [workInProgressHook.memoizedState, dispatch];
  } else {
    {
      isInHookUserCodeInDev = true;
    }

    var initialState;

    if (reducer === basicStateReducer) {
      // Special case for `useState`.
      initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
    } else {
      initialState = init !== undefined ? init(initialArg) : initialArg;
    }

    {
      isInHookUserCodeInDev = false;
    }

    workInProgressHook.memoizedState = initialState;

    var _queue = workInProgressHook.queue = {
      last: null,
      dispatch: null
    };

    var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);

    return [workInProgressHook.memoizedState, _dispatch];
  }
}

function useMemo(nextCreate, deps) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var nextDeps = deps === undefined ? null : deps;

  if (workInProgressHook !== null) {
    var prevState = workInProgressHook.memoizedState;

    if (prevState !== null) {
      if (nextDeps !== null) {
        var prevDeps = prevState[1];

        if (areHookInputsEqual(nextDeps, prevDeps)) {
          return prevState[0];
        }
      }
    }
  }

  {
    isInHookUserCodeInDev = true;
  }

  var nextValue = nextCreate();

  {
    isInHookUserCodeInDev = false;
  }

  workInProgressHook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

function useRef(initialValue) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var previousRef = workInProgressHook.memoizedState;

  if (previousRef === null) {
    var ref = {
      current: initialValue
    };

    {
      Object.seal(ref);
    }

    workInProgressHook.memoizedState = ref;
    return ref;
  } else {
    return previousRef;
  }
}

function useLayoutEffect(create, inputs) {
  {
    currentHookNameInDev = 'useLayoutEffect';

    error('useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://reactjs.org/link/uselayouteffect-ssr for common fixes.');
  }
}

function dispatchAction(componentIdentity, queue, action) {
  if (numberOfReRenders >= RE_RENDER_LIMIT) {
    throw new Error('Too many re-renders. React limits the number of renders to prevent ' + 'an infinite loop.');
  }

  if (componentIdentity === currentlyRenderingComponent) {
    // This is a render phase update. Stash it in a lazily-created map of
    // queue -> linked list of updates. After this render pass, we'll restart
    // and apply the stashed updates on top of the work-in-progress hook.
    didScheduleRenderPhaseUpdate = true;
    var update = {
      action: action,
      next: null
    };

    if (renderPhaseUpdates === null) {
      renderPhaseUpdates = new Map();
    }

    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

    if (firstRenderPhaseUpdate === undefined) {
      renderPhaseUpdates.set(queue, update);
    } else {
      // Append the update to the end of the list.
      var lastRenderPhaseUpdate = firstRenderPhaseUpdate;

      while (lastRenderPhaseUpdate.next !== null) {
        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
      }

      lastRenderPhaseUpdate.next = update;
    }
  }
}

function useCallback(callback, deps) {
  return useMemo(function () {
    return callback;
  }, deps);
} // TODO Decide on how to implement this hook for server rendering.
// If a mutation occurs during render, consider triggering a Suspense boundary
// and falling back to client rendering.

function useMutableSource(source, getSnapshot, subscribe) {
  resolveCurrentlyRenderingComponent();
  return getSnapshot(source._source);
}

function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  if (getServerSnapshot === undefined) {
    throw new Error('Missing getServerSnapshot, which is required for ' + 'server-rendered content. Will revert to client rendering.');
  }

  return getServerSnapshot();
}

function useDeferredValue(value) {
  resolveCurrentlyRenderingComponent();
  return value;
}

function unsupportedStartTransition() {
  throw new Error('startTransition cannot be called during server rendering.');
}

function useTransition() {
  resolveCurrentlyRenderingComponent();
  return [false, unsupportedStartTransition];
}

function useId() {
  var task = currentlyRenderingTask;
  var treeId = getTreeId(task.treeContext);
  var responseState = currentResponseState;

  if (responseState === null) {
    throw new Error('Invalid hook call. Hooks can only be called inside of the body of a function component.');
  }

  var localId = localIdCounter++;
  return makeId(responseState, treeId, localId);
}

function noop() {}

var Dispatcher = {
  readContext: readContext$1,
  useContext: useContext,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  useInsertionEffect: noop,
  useLayoutEffect: useLayoutEffect,
  useCallback: useCallback,
  // useImperativeHandle is not run in the server environment
  useImperativeHandle: noop,
  // Effects are not run in the server environment.
  useEffect: noop,
  // Debugging effect
  useDebugValue: noop,
  useDeferredValue: useDeferredValue,
  useTransition: useTransition,
  useId: useId,
  // Subscriptions are not setup in a server environment.
  useMutableSource: useMutableSource,
  useSyncExternalStore: useSyncExternalStore
};

var currentResponseState = null;
function setCurrentResponseState(responseState) {
  currentResponseState = responseState;
}

function getStackByComponentStackNode(componentStack) {
  try {
    var info = '';
    var node = componentStack;

    do {
      switch (node.tag) {
        case 0:
          info += describeBuiltInComponentFrame(node.type, null, null);
          break;

        case 1:
          info += describeFunctionComponentFrame(node.type, null, null);
          break;

        case 2:
          info += describeClassComponentFrame(node.type, null, null);
          break;
      }

      node = node.parent;
    } while (node);

    return info;
  } catch (x) {
    return '\nError generating stack: ' + x.message + '\n' + x.stack;
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
var PENDING = 0;
var COMPLETED = 1;
var FLUSHED = 2;
var ABORTED = 3;
var ERRORED = 4;
var OPEN = 0;
var CLOSING = 1;
var CLOSED = 2;
// This is a default heuristic for how to split up the HTML content into progressive
// loading. Our goal is to be able to display additional new content about every 500ms.
// Faster than that is unnecessary and should be throttled on the client. It also
// adds unnecessary overhead to do more splits. We don't know if it's a higher or lower
// end device but higher end suffer less from the overhead than lower end does from
// not getting small enough pieces. We error on the side of low end.
// We base this on low end 3G speeds which is about 500kbits per second. We assume
// that there can be a reasonable drop off from max bandwidth which leaves you with
// as little as 80%. We can receive half of that each 500ms - at best. In practice,
// a little bandwidth is lost to processing and contention - e.g. CSS and images that
// are downloaded along with the main content. So we estimate about half of that to be
// the lower end throughput. In other words, we expect that you can at least show
// about 12.5kb of content per 500ms. Not counting starting latency for the first
// paint.
// 500 * 1024 / 8 * .8 * 0.5 / 2
var DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;

function defaultErrorHandler(error) {
  console['error'](error); // Don't transform to our wrapper
}

function noop$1() {}

function createRequest(children, responseState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError) {
  var pingedTasks = [];
  var abortSet = new Set();
  var request = {
    destination: null,
    responseState: responseState,
    progressiveChunkSize: progressiveChunkSize === undefined ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
    status: OPEN,
    fatalError: null,
    nextSegmentId: 0,
    allPendingTasks: 0,
    pendingRootTasks: 0,
    completedRootSegment: null,
    abortableTasks: abortSet,
    pingedTasks: pingedTasks,
    clientRenderedBoundaries: [],
    completedBoundaries: [],
    partialBoundaries: [],
    onError: onError === undefined ? defaultErrorHandler : onError,
    onAllReady: onAllReady === undefined ? noop$1 : onAllReady,
    onShellReady: onShellReady === undefined ? noop$1 : onShellReady,
    onShellError: onShellError === undefined ? noop$1 : onShellError,
    onFatalError: onFatalError === undefined ? noop$1 : onFatalError
  }; // This segment represents the root fallback.

  var rootSegment = createPendingSegment(request, 0, null, rootFormatContext); // There is no parent so conceptually, we're unblocked to flush this segment.

  rootSegment.parentFlushed = true;
  var rootTask = createTask(request, children, null, rootSegment, abortSet, emptyContextObject, rootContextSnapshot, emptyTreeContext);
  pingedTasks.push(rootTask);
  return request;
}

function pingTask(request, task) {
  var pingedTasks = request.pingedTasks;
  pingedTasks.push(task);

  if (pingedTasks.length === 1) {
    scheduleWork(function () {
      return performWork(request);
    });
  }
}

function createSuspenseBoundary(request, fallbackAbortableTasks) {
  return {
    id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
    rootSegmentID: -1,
    parentFlushed: false,
    pendingTasks: 0,
    forceClientRender: false,
    completedSegments: [],
    byteSize: 0,
    fallbackAbortableTasks: fallbackAbortableTasks
  };
}

function createTask(request, node, blockedBoundary, blockedSegment, abortSet, legacyContext, context, treeContext) {
  request.allPendingTasks++;

  if (blockedBoundary === null) {
    request.pendingRootTasks++;
  } else {
    blockedBoundary.pendingTasks++;
  }

  var task = {
    node: node,
    ping: function () {
      return pingTask(request, task);
    },
    blockedBoundary: blockedBoundary,
    blockedSegment: blockedSegment,
    abortSet: abortSet,
    legacyContext: legacyContext,
    context: context,
    treeContext: treeContext
  };

  {
    task.componentStack = null;
  }

  abortSet.add(task);
  return task;
}

function createPendingSegment(request, index, boundary, formatContext) {
  return {
    status: PENDING,
    id: -1,
    // lazily assigned later
    index: index,
    parentFlushed: false,
    chunks: [],
    children: [],
    formatContext: formatContext,
    boundary: boundary
  };
} // DEV-only global reference to the currently executing task


var currentTaskInDEV = null;

function getCurrentStackInDEV() {
  {
    if (currentTaskInDEV === null || currentTaskInDEV.componentStack === null) {
      return '';
    }

    return getStackByComponentStackNode(currentTaskInDEV.componentStack);
  }
}

function pushBuiltInComponentStackInDEV(task, type) {
  {
    task.componentStack = {
      tag: 0,
      parent: task.componentStack,
      type: type
    };
  }
}

function pushFunctionComponentStackInDEV(task, type) {
  {
    task.componentStack = {
      tag: 1,
      parent: task.componentStack,
      type: type
    };
  }
}

function pushClassComponentStackInDEV(task, type) {
  {
    task.componentStack = {
      tag: 2,
      parent: task.componentStack,
      type: type
    };
  }
}

function popComponentStackInDEV(task) {
  {
    if (task.componentStack === null) {
      error('Unexpectedly popped too many stack frames. This is a bug in React.');
    } else {
      task.componentStack = task.componentStack.parent;
    }
  }
}

function logRecoverableError(request, error) {
  // If this callback errors, we intentionally let that error bubble up to become a fatal error
  // so that someone fixes the error reporting instead of hiding it.
  var onError = request.onError;
  onError(error);
}

function fatalError(request, error) {
  // This is called outside error handling code such as if the root errors outside
  // a suspense boundary or if the root suspense boundary's fallback errors.
  // It's also called if React itself or its host configs errors.
  var onShellError = request.onShellError;
  onShellError(error);
  var onFatalError = request.onFatalError;
  onFatalError(error);

  if (request.destination !== null) {
    request.status = CLOSED;
    closeWithError(request.destination, error);
  } else {
    request.status = CLOSING;
    request.fatalError = error;
  }
}

function renderSuspenseBoundary(request, task, props) {
  pushBuiltInComponentStackInDEV(task, 'Suspense');
  var parentBoundary = task.blockedBoundary;
  var parentSegment = task.blockedSegment; // Each time we enter a suspense boundary, we split out into a new segment for
  // the fallback so that we can later replace that segment with the content.
  // This also lets us split out the main content even if it doesn't suspend,
  // in case it ends up generating a large subtree of content.

  var fallback = props.fallback;
  var content = props.children;
  var fallbackAbortSet = new Set();
  var newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
  var insertionIndex = parentSegment.chunks.length; // The children of the boundary segment is actually the fallback.

  var boundarySegment = createPendingSegment(request, insertionIndex, newBoundary, parentSegment.formatContext);
  parentSegment.children.push(boundarySegment); // This segment is the actual child content. We can start rendering that immediately.

  var contentRootSegment = createPendingSegment(request, 0, null, parentSegment.formatContext); // We mark the root segment as having its parent flushed. It's not really flushed but there is
  // no parent segment so there's nothing to wait on.

  contentRootSegment.parentFlushed = true; // Currently this is running synchronously. We could instead schedule this to pingedTasks.
  // I suspect that there might be some efficiency benefits from not creating the suspended task
  // and instead just using the stack if possible.
  // TODO: Call this directly instead of messing with saving and restoring contexts.
  // We can reuse the current context and task to render the content immediately without
  // context switching. We just need to temporarily switch which boundary and which segment
  // we're writing to. If something suspends, it'll spawn new suspended task with that context.

  task.blockedBoundary = newBoundary;
  task.blockedSegment = contentRootSegment;

  try {
    // We use the safe form because we don't handle suspending here. Only error handling.
    renderNode(request, task, content);
    contentRootSegment.status = COMPLETED;
    queueCompletedSegment(newBoundary, contentRootSegment);

    if (newBoundary.pendingTasks === 0) {
      // This must have been the last segment we were waiting on. This boundary is now complete.
      // Therefore we won't need the fallback. We early return so that we don't have to create
      // the fallback.
      popComponentStackInDEV(task);
      return;
    }
  } catch (error) {
    contentRootSegment.status = ERRORED;
    logRecoverableError(request, error);
    newBoundary.forceClientRender = true; // We don't need to decrement any task numbers because we didn't spawn any new task.
    // We don't need to schedule any task because we know the parent has written yet.
    // We do need to fallthrough to create the fallback though.
  } finally {
    task.blockedBoundary = parentBoundary;
    task.blockedSegment = parentSegment;
  } // We create suspended task for the fallback because we don't want to actually work
  // on it yet in case we finish the main content, so we queue for later.


  var suspendedFallbackTask = createTask(request, fallback, parentBoundary, boundarySegment, fallbackAbortSet, task.legacyContext, task.context, task.treeContext);

  {
    suspendedFallbackTask.componentStack = task.componentStack;
  } // TODO: This should be queued at a separate lower priority queue so that we only work
  // on preparing fallbacks if we don't have any more main content to task on.


  request.pingedTasks.push(suspendedFallbackTask);
  popComponentStackInDEV(task);
}

function renderHostElement(request, task, type, props) {
  pushBuiltInComponentStackInDEV(task, type);
  var segment = task.blockedSegment;
  var children = pushStartInstance(segment.chunks, type, props, request.responseState, segment.formatContext);
  var prevContext = segment.formatContext;
  segment.formatContext = getChildFormatContext(prevContext, type, props); // We use the non-destructive form because if something suspends, we still
  // need to pop back up and finish this subtree of HTML.

  renderNode(request, task, children); // We expect that errors will fatal the whole task and that we don't need
  // the correct context. Therefore this is not in a finally.

  segment.formatContext = prevContext;
  pushEndInstance(segment.chunks, type);
  popComponentStackInDEV(task);
}

function shouldConstruct$1(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function renderWithHooks(request, task, Component, props, secondArg) {
  var componentIdentity = {};
  prepareToUseHooks(task, componentIdentity);
  var result = Component(props, secondArg);
  return finishHooks(Component, props, result, secondArg);
}

function finishClassComponent(request, task, instance, Component, props) {
  var nextChildren = instance.render();

  {
    if (instance.props !== props) {
      if (!didWarnAboutReassigningProps) {
        error('It looks like %s is reassigning its own `this.props` while rendering. ' + 'This is not supported and can lead to confusing bugs.', getComponentNameFromType(Component) || 'a component');
      }

      didWarnAboutReassigningProps = true;
    }
  }

  {
    var childContextTypes = Component.childContextTypes;

    if (childContextTypes !== null && childContextTypes !== undefined) {
      var previousContext = task.legacyContext;
      var mergedContext = processChildContext(instance, Component, previousContext, childContextTypes);
      task.legacyContext = mergedContext;
      renderNodeDestructive(request, task, nextChildren);
      task.legacyContext = previousContext;
      return;
    }
  }

  renderNodeDestructive(request, task, nextChildren);
}

function renderClassComponent(request, task, Component, props) {
  pushClassComponentStackInDEV(task, Component);
  var maskedContext =  getMaskedContext(Component, task.legacyContext) ;
  var instance = constructClassInstance(Component, props, maskedContext);
  mountClassInstance(instance, Component, props, maskedContext);
  finishClassComponent(request, task, instance, Component, props);
  popComponentStackInDEV(task);
}

var didWarnAboutBadClass = {};
var didWarnAboutModulePatternComponent = {};
var didWarnAboutContextTypeOnFunctionComponent = {};
var didWarnAboutGetDerivedStateOnFunctionComponent = {};
var didWarnAboutReassigningProps = false;
var didWarnAboutGenerators = false;
var didWarnAboutMaps = false;
var hasWarnedAboutUsingContextAsConsumer = false; // This would typically be a function component but we still support module pattern
// components for some reason.

function renderIndeterminateComponent(request, task, Component, props) {
  var legacyContext;

  {
    legacyContext = getMaskedContext(Component, task.legacyContext);
  }

  pushFunctionComponentStackInDEV(task, Component);

  {
    if (Component.prototype && typeof Component.prototype.render === 'function') {
      var componentName = getComponentNameFromType(Component) || 'Unknown';

      if (!didWarnAboutBadClass[componentName]) {
        error("The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', componentName, componentName);

        didWarnAboutBadClass[componentName] = true;
      }
    }
  }

  var value = renderWithHooks(request, task, Component, props, legacyContext);
  var hasId = checkDidRenderIdHook();

  {
    // Support for module components is deprecated and is removed behind a flag.
    // Whether or not it would crash later, we want to show a good message in DEV first.
    if (typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
      var _componentName = getComponentNameFromType(Component) || 'Unknown';

      if (!didWarnAboutModulePatternComponent[_componentName]) {
        error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName, _componentName, _componentName);

        didWarnAboutModulePatternComponent[_componentName] = true;
      }
    }
  }

  if ( // Run these checks in production only if the flag is off.
  // Eventually we'll delete this branch altogether.
   typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
    {
      var _componentName2 = getComponentNameFromType(Component) || 'Unknown';

      if (!didWarnAboutModulePatternComponent[_componentName2]) {
        error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName2, _componentName2, _componentName2);

        didWarnAboutModulePatternComponent[_componentName2] = true;
      }
    }

    mountClassInstance(value, Component, props, legacyContext);
    finishClassComponent(request, task, value, Component, props);
  } else {

    {
      validateFunctionComponentInDev(Component);
    } // We're now successfully past this task, and we don't have to pop back to
    // the previous task every again, so we can use the destructive recursive form.


    if (hasId) {
      // This component materialized an id. We treat this as its own level, with
      // a single "child" slot.
      var prevTreeContext = task.treeContext;
      var totalChildren = 1;
      var index = 0;
      task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);

      try {
        renderNodeDestructive(request, task, value);
      } finally {
        task.treeContext = prevTreeContext;
      }
    } else {
      renderNodeDestructive(request, task, value);
    }
  }

  popComponentStackInDEV(task);
}

function validateFunctionComponentInDev(Component) {
  {
    if (Component) {
      if (Component.childContextTypes) {
        error('%s(...): childContextTypes cannot be defined on a function component.', Component.displayName || Component.name || 'Component');
      }
    }

    if (typeof Component.getDerivedStateFromProps === 'function') {
      var _componentName3 = getComponentNameFromType(Component) || 'Unknown';

      if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
        error('%s: Function components do not support getDerivedStateFromProps.', _componentName3);

        didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
      }
    }

    if (typeof Component.contextType === 'object' && Component.contextType !== null) {
      var _componentName4 = getComponentNameFromType(Component) || 'Unknown';

      if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
        error('%s: Function components do not support contextType.', _componentName4);

        didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
      }
    }
  }
}

function resolveDefaultProps(Component, baseProps) {
  if (Component && Component.defaultProps) {
    // Resolve default props. Taken from ReactElement
    var props = assign({}, baseProps);
    var defaultProps = Component.defaultProps;

    for (var propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }

    return props;
  }

  return baseProps;
}

function renderForwardRef(request, task, type, props, ref) {
  pushFunctionComponentStackInDEV(task, type.render);
  var children = renderWithHooks(request, task, type.render, props, ref);
  var hasId = checkDidRenderIdHook();

  if (hasId) {
    // This component materialized an id. We treat this as its own level, with
    // a single "child" slot.
    var prevTreeContext = task.treeContext;
    var totalChildren = 1;
    var index = 0;
    task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);

    try {
      renderNodeDestructive(request, task, children);
    } finally {
      task.treeContext = prevTreeContext;
    }
  } else {
    renderNodeDestructive(request, task, children);
  }

  popComponentStackInDEV(task);
}

function renderMemo(request, task, type, props, ref) {
  var innerType = type.type;
  var resolvedProps = resolveDefaultProps(innerType, props);
  renderElement(request, task, innerType, resolvedProps, ref);
}

function renderContextConsumer(request, task, context, props) {
  // The logic below for Context differs depending on PROD or DEV mode. In
  // DEV mode, we create a separate object for Context.Consumer that acts
  // like a proxy to Context. This proxy object adds unnecessary code in PROD
  // so we use the old behaviour (Context.Consumer references Context) to
  // reduce size and overhead. The separate object references context via
  // a property called "_context", which also gives us the ability to check
  // in DEV mode if this property exists or not and warn if it does not.
  {
    if (context._context === undefined) {
      // This may be because it's a Context (rather than a Consumer).
      // Or it may be because it's older React where they're the same thing.
      // We only want to warn if we're sure it's a new React.
      if (context !== context.Consumer) {
        if (!hasWarnedAboutUsingContextAsConsumer) {
          hasWarnedAboutUsingContextAsConsumer = true;

          error('Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
        }
      }
    } else {
      context = context._context;
    }
  }

  var render = props.children;

  {
    if (typeof render !== 'function') {
      error('A context consumer was rendered with multiple children, or a child ' + "that isn't a function. A context consumer expects a single child " + 'that is a function. If you did pass a function, make sure there ' + 'is no trailing or leading whitespace around it.');
    }
  }

  var newValue = readContext(context);
  var newChildren = render(newValue);
  renderNodeDestructive(request, task, newChildren);
}

function renderContextProvider(request, task, type, props) {
  var context = type._context;
  var value = props.value;
  var children = props.children;
  var prevSnapshot;

  {
    prevSnapshot = task.context;
  }

  task.context = pushProvider(context, value);
  renderNodeDestructive(request, task, children);
  task.context = popProvider(context);

  {
    if (prevSnapshot !== task.context) {
      error('Popping the context provider did not return back to the original snapshot. This is a bug in React.');
    }
  }
}

function renderLazyComponent(request, task, lazyComponent, props, ref) {
  pushBuiltInComponentStackInDEV(task, 'Lazy');
  var payload = lazyComponent._payload;
  var init = lazyComponent._init;
  var Component = init(payload);
  var resolvedProps = resolveDefaultProps(Component, props);
  renderElement(request, task, Component, resolvedProps, ref);
  popComponentStackInDEV(task);
}

function renderElement(request, task, type, props, ref) {
  if (typeof type === 'function') {
    if (shouldConstruct$1(type)) {
      renderClassComponent(request, task, type, props);
      return;
    } else {
      renderIndeterminateComponent(request, task, type, props);
      return;
    }
  }

  if (typeof type === 'string') {
    renderHostElement(request, task, type, props);
    return;
  }

  switch (type) {
    // TODO: LegacyHidden acts the same as a fragment. This only works
    // because we currently assume that every instance of LegacyHidden is
    // accompanied by a host component wrapper. In the hidden mode, the host
    // component is given a `hidden` attribute, which ensures that the
    // initial HTML is not visible. To support the use of LegacyHidden as a
    // true fragment, without an extra DOM node, we would have to hide the
    // initial HTML in some other way.
    // TODO: Add REACT_OFFSCREEN_TYPE here too with the same capability.
    case REACT_LEGACY_HIDDEN_TYPE:
    case REACT_DEBUG_TRACING_MODE_TYPE:
    case REACT_STRICT_MODE_TYPE:
    case REACT_PROFILER_TYPE:
    case REACT_FRAGMENT_TYPE:
      {
        renderNodeDestructive(request, task, props.children);
        return;
      }

    case REACT_SUSPENSE_LIST_TYPE:
      {
        pushBuiltInComponentStackInDEV(task, 'SuspenseList'); // TODO: SuspenseList should control the boundaries.

        renderNodeDestructive(request, task, props.children);
        popComponentStackInDEV(task);
        return;
      }

    case REACT_SCOPE_TYPE:
      {

        throw new Error('ReactDOMServer does not yet support scope components.');
      }
    // eslint-disable-next-line-no-fallthrough

    case REACT_SUSPENSE_TYPE:
      {
        {
          renderSuspenseBoundary(request, task, props);
        }

        return;
      }
  }

  if (typeof type === 'object' && type !== null) {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        {
          renderForwardRef(request, task, type, props, ref);
          return;
        }

      case REACT_MEMO_TYPE:
        {
          renderMemo(request, task, type, props, ref);
          return;
        }

      case REACT_PROVIDER_TYPE:
        {
          renderContextProvider(request, task, type, props);
          return;
        }

      case REACT_CONTEXT_TYPE:
        {
          renderContextConsumer(request, task, type, props);
          return;
        }

      case REACT_LAZY_TYPE:
        {
          renderLazyComponent(request, task, type, props);
          return;
        }
    }
  }

  var info = '';

  {
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
    }
  }

  throw new Error('Element type is invalid: expected a string (for built-in ' + 'components) or a class/function (for composite components) ' + ("but got: " + (type == null ? type : typeof type) + "." + info));
}

function validateIterable(iterable, iteratorFn) {
  {
    // We don't support rendering Generators because it's a mutation.
    // See https://github.com/facebook/react/issues/12995
    if (typeof Symbol === 'function' && // $FlowFixMe Flow doesn't know about toStringTag
    iterable[Symbol.toStringTag] === 'Generator') {
      if (!didWarnAboutGenerators) {
        error('Using Generators as children is unsupported and will likely yield ' + 'unexpected results because enumerating a generator mutates it. ' + 'You may convert it to an array with `Array.from()` or the ' + '`[...spread]` operator before rendering. Keep in mind ' + 'you might need to polyfill these features for older browsers.');
      }

      didWarnAboutGenerators = true;
    } // Warn about using Maps as children


    if (iterable.entries === iteratorFn) {
      if (!didWarnAboutMaps) {
        error('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
      }

      didWarnAboutMaps = true;
    }
  }
} // This function by it self renders a node and consumes the task by mutating it
// to update the current execution state.


function renderNodeDestructive(request, task, node) {
  // Stash the node we're working on. We'll pick up from this task in case
  // something suspends.
  task.node = node; // Handle object types

  if (typeof node === 'object' && node !== null) {
    switch (node.$$typeof) {
      case REACT_ELEMENT_TYPE:
        {
          var element = node;
          var type = element.type;
          var props = element.props;
          var ref = element.ref;
          renderElement(request, task, type, props, ref);
          return;
        }

      case REACT_PORTAL_TYPE:
        throw new Error('Portals are not currently supported by the server renderer. ' + 'Render them conditionally so that they only appear on the client render.');
      // eslint-disable-next-line-no-fallthrough

      case REACT_LAZY_TYPE:
        {
          var lazyNode = node;
          var payload = lazyNode._payload;
          var init = lazyNode._init;
          var resolvedNode = init(payload);
          renderNodeDestructive(request, task, resolvedNode);
          return;
        }
    }

    if (isArray(node)) {
      renderChildrenArray(request, task, node);
      return;
    }

    var iteratorFn = getIteratorFn(node);

    if (iteratorFn) {
      {
        validateIterable(node, iteratorFn);
      }

      var iterator = iteratorFn.call(node);

      if (iterator) {
        // We need to know how many total children are in this set, so that we
        // can allocate enough id slots to acommodate them. So we must exhaust
        // the iterator before we start recursively rendering the children.
        // TODO: This is not great but I think it's inherent to the id
        // generation algorithm.
        var step = iterator.next(); // If there are not entries, we need to push an empty so we start by checking that.

        if (!step.done) {
          var children = [];

          do {
            children.push(step.value);
            step = iterator.next();
          } while (!step.done);

          renderChildrenArray(request, task, children);
          return;
        }

        return;
      }
    }

    var childString = Object.prototype.toString.call(node);
    throw new Error("Objects are not valid as a React child (found: " + (childString === '[object Object]' ? 'object with keys {' + Object.keys(node).join(', ') + '}' : childString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
  }

  if (typeof node === 'string') {
    pushTextInstance$1(task.blockedSegment.chunks, node, request.responseState);
    return;
  }

  if (typeof node === 'number') {
    pushTextInstance$1(task.blockedSegment.chunks, '' + node, request.responseState);
    return;
  }

  {
    if (typeof node === 'function') {
      error('Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.');
    }
  }
}

function renderChildrenArray(request, task, children) {
  var totalChildren = children.length;

  for (var i = 0; i < totalChildren; i++) {
    var prevTreeContext = task.treeContext;
    task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i);

    try {
      // We need to use the non-destructive form so that we can safely pop back
      // up and render the sibling if something suspends.
      renderNode(request, task, children[i]);
    } finally {
      task.treeContext = prevTreeContext;
    }
  }
}

function spawnNewSuspendedTask(request, task, x) {
  // Something suspended, we'll need to create a new segment and resolve it later.
  var segment = task.blockedSegment;
  var insertionIndex = segment.chunks.length;
  var newSegment = createPendingSegment(request, insertionIndex, null, segment.formatContext);
  segment.children.push(newSegment);
  var newTask = createTask(request, task.node, task.blockedBoundary, newSegment, task.abortSet, task.legacyContext, task.context, task.treeContext);

  {
    if (task.componentStack !== null) {
      // We pop one task off the stack because the node that suspended will be tried again,
      // which will add it back onto the stack.
      newTask.componentStack = task.componentStack.parent;
    }
  }

  var ping = newTask.ping;
  x.then(ping, ping);
} // This is a non-destructive form of rendering a node. If it suspends it spawns
// a new task and restores the context of this task to what it was before.


function renderNode(request, task, node) {
  // TODO: Store segment.children.length here and reset it in case something
  // suspended partially through writing something.
  // Snapshot the current context in case something throws to interrupt the
  // process.
  var previousFormatContext = task.blockedSegment.formatContext;
  var previousLegacyContext = task.legacyContext;
  var previousContext = task.context;
  var previousComponentStack = null;

  {
    previousComponentStack = task.componentStack;
  }

  try {
    return renderNodeDestructive(request, task, node);
  } catch (x) {
    resetHooksState();

    if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
      spawnNewSuspendedTask(request, task, x); // Restore the context. We assume that this will be restored by the inner
      // functions in case nothing throws so we don't use "finally" here.

      task.blockedSegment.formatContext = previousFormatContext;
      task.legacyContext = previousLegacyContext;
      task.context = previousContext; // Restore all active ReactContexts to what they were before.

      switchContext(previousContext);

      {
        task.componentStack = previousComponentStack;
      }

      return;
    } else {
      // Restore the context. We assume that this will be restored by the inner
      // functions in case nothing throws so we don't use "finally" here.
      task.blockedSegment.formatContext = previousFormatContext;
      task.legacyContext = previousLegacyContext;
      task.context = previousContext; // Restore all active ReactContexts to what they were before.

      switchContext(previousContext);

      {
        task.componentStack = previousComponentStack;
      } // We assume that we don't need the correct context.
      // Let's terminate the rest of the tree and don't render any siblings.


      throw x;
    }
  }
}

function erroredTask(request, boundary, segment, error) {
  // Report the error to a global handler.
  logRecoverableError(request, error);

  if (boundary === null) {
    fatalError(request, error);
  } else {
    boundary.pendingTasks--;

    if (!boundary.forceClientRender) {
      boundary.forceClientRender = true; // Regardless of what happens next, this boundary won't be displayed,
      // so we can flush it, if the parent already flushed.

      if (boundary.parentFlushed) {
        // We don't have a preference where in the queue this goes since it's likely
        // to error on the client anyway. However, intentionally client-rendered
        // boundaries should be flushed earlier so that they can start on the client.
        // We reuse the same queue for errors.
        request.clientRenderedBoundaries.push(boundary);
      }
    }
  }

  request.allPendingTasks--;

  if (request.allPendingTasks === 0) {
    var onAllReady = request.onAllReady;
    onAllReady();
  }
}

function abortTaskSoft(task) {
  // This aborts task without aborting the parent boundary that it blocks.
  // It's used for when we didn't need this task to complete the tree.
  // If task was needed, then it should use abortTask instead.
  var request = this;
  var boundary = task.blockedBoundary;
  var segment = task.blockedSegment;
  segment.status = ABORTED;
  finishedTask(request, boundary, segment);
}

function abortTask(task) {
  // This aborts the task and aborts the parent that it blocks, putting it into
  // client rendered mode.
  var request = this;
  var boundary = task.blockedBoundary;
  var segment = task.blockedSegment;
  segment.status = ABORTED;

  if (boundary === null) {
    request.allPendingTasks--; // We didn't complete the root so we have nothing to show. We can close
    // the request;

    if (request.status !== CLOSED) {
      request.status = CLOSED;

      if (request.destination !== null) {
        close(request.destination);
      }
    }
  } else {
    boundary.pendingTasks--;

    if (!boundary.forceClientRender) {
      boundary.forceClientRender = true;

      if (boundary.parentFlushed) {
        request.clientRenderedBoundaries.push(boundary);
      }
    } // If this boundary was still pending then we haven't already cancelled its fallbacks.
    // We'll need to abort the fallbacks, which will also error that parent boundary.


    boundary.fallbackAbortableTasks.forEach(abortTask, request);
    boundary.fallbackAbortableTasks.clear();
    request.allPendingTasks--;

    if (request.allPendingTasks === 0) {
      var onAllReady = request.onAllReady;
      onAllReady();
    }
  }
}

function queueCompletedSegment(boundary, segment) {
  if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null) {
    // This is an empty segment. There's nothing to write, so we can instead transfer the ID
    // to the child. That way any existing references point to the child.
    var childSegment = segment.children[0];
    childSegment.id = segment.id;
    childSegment.parentFlushed = true;

    if (childSegment.status === COMPLETED) {
      queueCompletedSegment(boundary, childSegment);
    }
  } else {
    var completedSegments = boundary.completedSegments;
    completedSegments.push(segment);
  }
}

function finishedTask(request, boundary, segment) {
  if (boundary === null) {
    if (segment.parentFlushed) {
      if (request.completedRootSegment !== null) {
        throw new Error('There can only be one root segment. This is a bug in React.');
      }

      request.completedRootSegment = segment;
    }

    request.pendingRootTasks--;

    if (request.pendingRootTasks === 0) {
      // We have completed the shell so the shell can't error anymore.
      request.onShellError = noop$1;
      var onShellReady = request.onShellReady;
      onShellReady();
    }
  } else {
    boundary.pendingTasks--;

    if (boundary.forceClientRender) ; else if (boundary.pendingTasks === 0) {
      // This must have been the last segment we were waiting on. This boundary is now complete.
      if (segment.parentFlushed) {
        // Our parent segment already flushed, so we need to schedule this segment to be emitted.
        // If it is a segment that was aborted, we'll write other content instead so we don't need
        // to emit it.
        if (segment.status === COMPLETED) {
          queueCompletedSegment(boundary, segment);
        }
      }

      if (boundary.parentFlushed) {
        // The segment might be part of a segment that didn't flush yet, but if the boundary's
        // parent flushed, we need to schedule the boundary to be emitted.
        request.completedBoundaries.push(boundary);
      } // We can now cancel any pending task on the fallback since we won't need to show it anymore.
      // This needs to happen after we read the parentFlushed flags because aborting can finish
      // work which can trigger user code, which can start flushing, which can change those flags.


      boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request);
      boundary.fallbackAbortableTasks.clear();
    } else {
      if (segment.parentFlushed) {
        // Our parent already flushed, so we need to schedule this segment to be emitted.
        // If it is a segment that was aborted, we'll write other content instead so we don't need
        // to emit it.
        if (segment.status === COMPLETED) {
          queueCompletedSegment(boundary, segment);
          var completedSegments = boundary.completedSegments;

          if (completedSegments.length === 1) {
            // This is the first time since we last flushed that we completed anything.
            // We can schedule this boundary to emit its partially completed segments early
            // in case the parent has already been flushed.
            if (boundary.parentFlushed) {
              request.partialBoundaries.push(boundary);
            }
          }
        }
      }
    }
  }

  request.allPendingTasks--;

  if (request.allPendingTasks === 0) {
    // This needs to be called at the very end so that we can synchronously write the result
    // in the callback if needed.
    var onAllReady = request.onAllReady;
    onAllReady();
  }
}

function retryTask(request, task) {
  var segment = task.blockedSegment;

  if (segment.status !== PENDING) {
    // We completed this by other means before we had a chance to retry it.
    return;
  } // We restore the context to what it was when we suspended.
  // We don't restore it after we leave because it's likely that we'll end up
  // needing a very similar context soon again.


  switchContext(task.context);
  var prevTaskInDEV = null;

  {
    prevTaskInDEV = currentTaskInDEV;
    currentTaskInDEV = task;
  }

  try {
    // We call the destructive form that mutates this task. That way if something
    // suspends again, we can reuse the same task instead of spawning a new one.
    renderNodeDestructive(request, task, task.node);
    task.abortSet.delete(task);
    segment.status = COMPLETED;
    finishedTask(request, task.blockedBoundary, segment);
  } catch (x) {
    resetHooksState();

    if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
      // Something suspended again, let's pick it back up later.
      var ping = task.ping;
      x.then(ping, ping);
    } else {
      task.abortSet.delete(task);
      segment.status = ERRORED;
      erroredTask(request, task.blockedBoundary, segment, x);
    }
  } finally {
    {
      currentTaskInDEV = prevTaskInDEV;
    }
  }
}

function performWork(request) {
  if (request.status === CLOSED) {
    return;
  }

  var prevContext = getActiveContext();
  var prevDispatcher = ReactCurrentDispatcher$1.current;
  ReactCurrentDispatcher$1.current = Dispatcher;
  var prevGetCurrentStackImpl;

  {
    prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
    ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
  }

  var prevResponseState = currentResponseState;
  setCurrentResponseState(request.responseState);

  try {
    var pingedTasks = request.pingedTasks;
    var i;

    for (i = 0; i < pingedTasks.length; i++) {
      var task = pingedTasks[i];
      retryTask(request, task);
    }

    pingedTasks.splice(0, i);

    if (request.destination !== null) {
      flushCompletedQueues(request, request.destination);
    }
  } catch (error) {
    logRecoverableError(request, error);
    fatalError(request, error);
  } finally {
    setCurrentResponseState(prevResponseState);
    ReactCurrentDispatcher$1.current = prevDispatcher;

    {
      ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
    }

    if (prevDispatcher === Dispatcher) {
      // This means that we were in a reentrant work loop. This could happen
      // in a renderer that supports synchronous work like renderToString,
      // when it's called from within another renderer.
      // Normally we don't bother switching the contexts to their root/default
      // values when leaving because we'll likely need the same or similar
      // context again. However, when we're inside a synchronous loop like this
      // we'll to restore the context to what it was before returning.
      switchContext(prevContext);
    }
  }
}

function flushSubtree(request, destination, segment) {
  segment.parentFlushed = true;

  switch (segment.status) {
    case PENDING:
      {
        // We're emitting a placeholder for this segment to be filled in later.
        // Therefore we'll need to assign it an ID - to refer to it by.
        var segmentID = segment.id = request.nextSegmentId++;
        return writePlaceholder(destination, request.responseState, segmentID);
      }

    case COMPLETED:
      {
        segment.status = FLUSHED;
        var r = true;
        var chunks = segment.chunks;
        var chunkIdx = 0;
        var children = segment.children;

        for (var childIdx = 0; childIdx < children.length; childIdx++) {
          var nextChild = children[childIdx]; // Write all the chunks up until the next child.

          for (; chunkIdx < nextChild.index; chunkIdx++) {
            writeChunk(destination, chunks[chunkIdx]);
          }

          r = flushSegment(request, destination, nextChild);
        } // Finally just write all the remaining chunks


        for (; chunkIdx < chunks.length - 1; chunkIdx++) {
          writeChunk(destination, chunks[chunkIdx]);
        }

        if (chunkIdx < chunks.length) {
          r = writeChunkAndReturn(destination, chunks[chunkIdx]);
        }

        return r;
      }

    default:
      {
        throw new Error('Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.');
      }
  }
}

function flushSegment(request, destination, segment) {
  var boundary = segment.boundary;

  if (boundary === null) {
    // Not a suspense boundary.
    return flushSubtree(request, destination, segment);
  }

  boundary.parentFlushed = true; // This segment is a Suspense boundary. We need to decide whether to
  // emit the content or the fallback now.

  if (boundary.forceClientRender) {
    // Emit a client rendered suspense boundary wrapper.
    // We never queue the inner boundary so we'll never emit its content or partial segments.
    writeStartClientRenderedSuspenseBoundary$1(destination, request.responseState); // Flush the fallback.

    flushSubtree(request, destination, segment);
    return writeEndClientRenderedSuspenseBoundary$1(destination, request.responseState);
  } else if (boundary.pendingTasks > 0) {
    // This boundary is still loading. Emit a pending suspense boundary wrapper.
    // Assign an ID to refer to the future content by.
    boundary.rootSegmentID = request.nextSegmentId++;

    if (boundary.completedSegments.length > 0) {
      // If this is at least partially complete, we can queue it to be partially emitted early.
      request.partialBoundaries.push(boundary);
    } /// This is the first time we should have referenced this ID.


    var id = boundary.id = assignSuspenseBoundaryID(request.responseState);
    writeStartPendingSuspenseBoundary(destination, request.responseState, id); // Flush the fallback.

    flushSubtree(request, destination, segment);
    return writeEndPendingSuspenseBoundary(destination, request.responseState);
  } else if (boundary.byteSize > request.progressiveChunkSize) {
    // This boundary is large and will be emitted separately so that we can progressively show
    // other content. We add it to the queue during the flush because we have to ensure that
    // the parent flushes first so that there's something to inject it into.
    // We also have to make sure that it's emitted into the queue in a deterministic slot.
    // I.e. we can't insert it here when it completes.
    // Assign an ID to refer to the future content by.
    boundary.rootSegmentID = request.nextSegmentId++;
    request.completedBoundaries.push(boundary); // Emit a pending rendered suspense boundary wrapper.

    writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id); // Flush the fallback.

    flushSubtree(request, destination, segment);
    return writeEndPendingSuspenseBoundary(destination, request.responseState);
  } else {
    // We can inline this boundary's content as a complete boundary.
    writeStartCompletedSuspenseBoundary$1(destination, request.responseState);
    var completedSegments = boundary.completedSegments;

    if (completedSegments.length !== 1) {
      throw new Error('A previously unvisited boundary must have exactly one root segment. This is a bug in React.');
    }

    var contentSegment = completedSegments[0];
    flushSegment(request, destination, contentSegment);
    return writeEndCompletedSuspenseBoundary$1(destination, request.responseState);
  }
}

function flushClientRenderedBoundary(request, destination, boundary) {
  return writeClientRenderBoundaryInstruction(destination, request.responseState, boundary.id);
}

function flushSegmentContainer(request, destination, segment) {
  writeStartSegment(destination, request.responseState, segment.formatContext, segment.id);
  flushSegment(request, destination, segment);
  return writeEndSegment(destination, segment.formatContext);
}

function flushCompletedBoundary(request, destination, boundary) {
  var completedSegments = boundary.completedSegments;
  var i = 0;

  for (; i < completedSegments.length; i++) {
    var segment = completedSegments[i];
    flushPartiallyCompletedSegment(request, destination, boundary, segment);
  }

  completedSegments.length = 0;
  return writeCompletedBoundaryInstruction(destination, request.responseState, boundary.id, boundary.rootSegmentID);
}

function flushPartialBoundary(request, destination, boundary) {
  var completedSegments = boundary.completedSegments;
  var i = 0;

  for (; i < completedSegments.length; i++) {
    var segment = completedSegments[i];

    if (!flushPartiallyCompletedSegment(request, destination, boundary, segment)) {
      i++;
      completedSegments.splice(0, i); // Only write as much as the buffer wants. Something higher priority
      // might want to write later.

      return false;
    }
  }

  completedSegments.splice(0, i);
  return true;
}

function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
  if (segment.status === FLUSHED) {
    // We've already flushed this inline.
    return true;
  }

  var segmentID = segment.id;

  if (segmentID === -1) {
    // This segment wasn't previously referred to. This happens at the root of
    // a boundary. We make kind of a leap here and assume this is the root.
    var rootSegmentID = segment.id = boundary.rootSegmentID;

    if (rootSegmentID === -1) {
      throw new Error('A root segment ID must have been assigned by now. This is a bug in React.');
    }

    return flushSegmentContainer(request, destination, segment);
  } else {
    flushSegmentContainer(request, destination, segment);
    return writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
  }
}

function flushCompletedQueues(request, destination) {

  try {
    // The structure of this is to go through each queue one by one and write
    // until the sink tells us to stop. When we should stop, we still finish writing
    // that item fully and then yield. At that point we remove the already completed
    // items up until the point we completed them.
    // TODO: Emit preloading.
    // TODO: It's kind of unfortunate to keep checking this array after we've already
    // emitted the root.
    var completedRootSegment = request.completedRootSegment;

    if (completedRootSegment !== null && request.pendingRootTasks === 0) {
      flushSegment(request, destination, completedRootSegment);
      request.completedRootSegment = null;
      writeCompletedRoot(destination, request.responseState);
    } // We emit client rendering instructions for already emitted boundaries first.
    // This is so that we can signal to the client to start client rendering them as
    // soon as possible.


    var clientRenderedBoundaries = request.clientRenderedBoundaries;
    var i;

    for (i = 0; i < clientRenderedBoundaries.length; i++) {
      var boundary = clientRenderedBoundaries[i];

      if (!flushClientRenderedBoundary(request, destination, boundary)) {
        request.destination = null;
        i++;
        clientRenderedBoundaries.splice(0, i);
        return;
      }
    }

    clientRenderedBoundaries.splice(0, i); // Next we emit any complete boundaries. It's better to favor boundaries
    // that are completely done since we can actually show them, than it is to emit
    // any individual segments from a partially complete boundary.

    var completedBoundaries = request.completedBoundaries;

    for (i = 0; i < completedBoundaries.length; i++) {
      var _boundary = completedBoundaries[i];

      if (!flushCompletedBoundary(request, destination, _boundary)) {
        request.destination = null;
        i++;
        completedBoundaries.splice(0, i);
        return;
      }
    }

    completedBoundaries.splice(0, i); // Allow anything written so far to flush to the underlying sink before
    // we continue with lower priorities.

    completeWriting(destination);
    beginWriting(destination); // TODO: Here we'll emit data used by hydration.
    // Next we emit any segments of any boundaries that are partially complete
    // but not deeply complete.

    var partialBoundaries = request.partialBoundaries;

    for (i = 0; i < partialBoundaries.length; i++) {
      var _boundary2 = partialBoundaries[i];

      if (!flushPartialBoundary(request, destination, _boundary2)) {
        request.destination = null;
        i++;
        partialBoundaries.splice(0, i);
        return;
      }
    }

    partialBoundaries.splice(0, i); // Next we check the completed boundaries again. This may have had
    // boundaries added to it in case they were too larged to be inlined.
    // New ones might be added in this loop.

    var largeBoundaries = request.completedBoundaries;

    for (i = 0; i < largeBoundaries.length; i++) {
      var _boundary3 = largeBoundaries[i];

      if (!flushCompletedBoundary(request, destination, _boundary3)) {
        request.destination = null;
        i++;
        largeBoundaries.splice(0, i);
        return;
      }
    }

    largeBoundaries.splice(0, i);
  } finally {

    if (request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0 // We don't need to check any partially completed segments because
    // either they have pending task or they're complete.
    ) {
        {
          if (request.abortableTasks.size !== 0) {
            error('There was still abortable task at the root when we closed. This is a bug in React.');
          }
        } // We're done.


        close(destination);
      }
  }
}

function startWork(request) {
  scheduleWork(function () {
    return performWork(request);
  });
}
function startFlowing(request, destination) {
  if (request.status === CLOSING) {
    request.status = CLOSED;
    closeWithError(destination, request.fatalError);
    return;
  }

  if (request.status === CLOSED) {
    return;
  }

  if (request.destination !== null) {
    // We're already flowing.
    return;
  }

  request.destination = destination;

  try {
    flushCompletedQueues(request, destination);
  } catch (error) {
    logRecoverableError(request, error);
    fatalError(request, error);
  }
} // This is called to early terminate a request. It puts all pending boundaries in client rendered state.

function abort(request) {
  try {
    var abortableTasks = request.abortableTasks;
    abortableTasks.forEach(abortTask, request);
    abortableTasks.clear();

    if (request.destination !== null) {
      flushCompletedQueues(request, request.destination);
    }
  } catch (error) {
    logRecoverableError(request, error);
    fatalError(request, error);
  }
}

var ReactVersion = '18.1.0';

function onError() {// Non-fatal errors are ignored.
}

function renderToStringImpl(children, options, generateStaticMarkup) {
  var didFatal = false;
  var fatalError = null;
  var result = '';
  var destination = {
    push: function (chunk) {
      if (chunk !== null) {
        result += chunk;
      }

      return true;
    },
    destroy: function (error) {
      didFatal = true;
      fatalError = error;
    }
  };
  var readyToStream = false;

  function onShellReady() {
    readyToStream = true;
  }

  var request = createRequest(children, createResponseState$1(generateStaticMarkup, options ? options.identifierPrefix : undefined), createRootFormatContext(), Infinity, onError, undefined, onShellReady, undefined, undefined);
  startWork(request); // If anything suspended and is still pending, we'll abort it before writing.
  // That way we write only client-rendered boundaries from the start.

  abort(request);
  startFlowing(request, destination);

  if (didFatal) {
    throw fatalError;
  }

  if (!readyToStream) {
    // Note: This error message is the one we use on the client. It doesn't
    // really make sense here. But this is the legacy server renderer, anyway.
    // We're going to delete it soon.
    throw new Error('A component suspended while responding to synchronous input. This ' + 'will cause the UI to be replaced with a loading indicator. To fix, ' + 'updates that suspend should be wrapped with startTransition.');
  }

  return result;
}

function renderToString(children, options) {
  return renderToStringImpl(children, options, false);
}

function renderToStaticMarkup(children, options) {
  return renderToStringImpl(children, options, true);
}

var ReactMarkupReadableStream = /*#__PURE__*/function (_Readable) {
  _inheritsLoose(ReactMarkupReadableStream, _Readable);

  function ReactMarkupReadableStream() {
    var _this;

    // Calls the stream.Readable(options) constructor. Consider exposing built-in
    // features like highWaterMark in the future.
    _this = _Readable.call(this, {}) || this;
    _this.request = null;
    _this.startedFlowing = false;
    return _this;
  }

  var _proto = ReactMarkupReadableStream.prototype;

  _proto._destroy = function _destroy(err, callback) {
    abort(this.request); // $FlowFixMe: The type definition for the callback should allow undefined and null.

    callback(err);
  };

  _proto._read = function _read(size) {
    if (this.startedFlowing) {
      startFlowing(this.request, this);
    }
  };

  return ReactMarkupReadableStream;
}(stream.Readable);

function onError$1() {// Non-fatal errors are ignored.
}

function renderToNodeStreamImpl(children, options, generateStaticMarkup) {
  function onAllReady() {
    // We wait until everything has loaded before starting to write.
    // That way we only end up with fully resolved HTML even if we suspend.
    destination.startedFlowing = true;
    startFlowing(request, destination);
  }

  var destination = new ReactMarkupReadableStream();
  var request = createRequest(children, createResponseState$1(false, options ? options.identifierPrefix : undefined), createRootFormatContext(), Infinity, onError$1, onAllReady, undefined, undefined);
  destination.request = request;
  startWork(request);
  return destination;
}

function renderToNodeStream(children, options) {
  {
    error('renderToNodeStream is deprecated. Use renderToPipeableStream instead.');
  }

  return renderToNodeStreamImpl(children, options);
}

function renderToStaticNodeStream(children, options) {
  return renderToNodeStreamImpl(children, options);
}

exports.renderToNodeStream = renderToNodeStream;
exports.renderToStaticMarkup = renderToStaticMarkup;
exports.renderToStaticNodeStream = renderToStaticNodeStream;
exports.renderToString = renderToString;
exports.version = ReactVersion;
  })();
}


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-dom-server.node.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

var React = __webpack_require__(4);
var util = __webpack_require__(9);

var ReactVersion = '18.1.0';

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      printWarning('warn', format, args);
    }
  }
}
function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

function scheduleWork(callback) {
  setImmediate(callback);
}
function flushBuffered(destination) {
  // If we don't have any more data to send right now.
  // Flush whatever is in the buffer to the wire.
  if (typeof destination.flush === 'function') {
    // By convention the Zlib streams provide a flush function for this purpose.
    // For Express, compression middleware adds this method.
    destination.flush();
  }
}
var VIEW_SIZE = 2048;
var currentView = null;
var writtenBytes = 0;
var destinationHasCapacity = true;
function beginWriting(destination) {
  currentView = new Uint8Array(VIEW_SIZE);
  writtenBytes = 0;
  destinationHasCapacity = true;
}

function writeStringChunk(destination, stringChunk) {
  if (stringChunk.length === 0) {
    return;
  } // maximum possible view needed to encode entire string


  if (stringChunk.length * 3 > VIEW_SIZE) {
    if (writtenBytes > 0) {
      writeToDestination(destination, currentView.subarray(0, writtenBytes));
      currentView = new Uint8Array(VIEW_SIZE);
      writtenBytes = 0;
    }

    writeToDestination(destination, textEncoder.encode(stringChunk));
    return;
  }

  var target = currentView;

  if (writtenBytes > 0) {
    target = currentView.subarray(writtenBytes);
  }

  var _textEncoder$encodeIn = textEncoder.encodeInto(stringChunk, target),
      read = _textEncoder$encodeIn.read,
      written = _textEncoder$encodeIn.written;

  writtenBytes += written;

  if (read < stringChunk.length) {
    writeToDestination(destination, currentView);
    currentView = new Uint8Array(VIEW_SIZE);
    writtenBytes = textEncoder.encodeInto(stringChunk.slice(read), currentView).written;
  }

  if (writtenBytes === VIEW_SIZE) {
    writeToDestination(destination, currentView);
    currentView = new Uint8Array(VIEW_SIZE);
    writtenBytes = 0;
  }
}

function writeViewChunk(destination, chunk) {
  if (chunk.byteLength === 0) {
    return;
  }

  if (chunk.byteLength > VIEW_SIZE) {
    // this chunk may overflow a single view which implies it was not
    // one that is cached by the streaming renderer. We will enqueu
    // it directly and expect it is not re-used
    if (writtenBytes > 0) {
      writeToDestination(destination, currentView.subarray(0, writtenBytes));
      currentView = new Uint8Array(VIEW_SIZE);
      writtenBytes = 0;
    }

    writeToDestination(destination, chunk);
    return;
  }

  var bytesToWrite = chunk;
  var allowableBytes = currentView.length - writtenBytes;

  if (allowableBytes < bytesToWrite.byteLength) {
    // this chunk would overflow the current view. We enqueue a full view
    // and start a new view with the remaining chunk
    if (allowableBytes === 0) {
      // the current view is already full, send it
      writeToDestination(destination, currentView);
    } else {
      // fill up the current view and apply the remaining chunk bytes
      // to a new view.
      currentView.set(bytesToWrite.subarray(0, allowableBytes), writtenBytes);
      writtenBytes += allowableBytes;
      writeToDestination(destination, currentView);
      bytesToWrite = bytesToWrite.subarray(allowableBytes);
    }

    currentView = new Uint8Array(VIEW_SIZE);
    writtenBytes = 0;
  }

  currentView.set(bytesToWrite, writtenBytes);
  writtenBytes += bytesToWrite.byteLength;

  if (writtenBytes === VIEW_SIZE) {
    writeToDestination(destination, currentView);
    currentView = new Uint8Array(VIEW_SIZE);
    writtenBytes = 0;
  }
}

function writeChunk(destination, chunk) {
  if (typeof chunk === 'string') {
    writeStringChunk(destination, chunk);
  } else {
    writeViewChunk(destination, chunk);
  }
}

function writeToDestination(destination, view) {
  var currentHasCapacity = destination.write(view);
  destinationHasCapacity = destinationHasCapacity && currentHasCapacity;
}

function writeChunkAndReturn(destination, chunk) {
  writeChunk(destination, chunk);
  return destinationHasCapacity;
}
function completeWriting(destination) {
  if (currentView && writtenBytes > 0) {
    destination.write(currentView.subarray(0, writtenBytes));
  }

  currentView = null;
  writtenBytes = 0;
  destinationHasCapacity = true;
}
function close(destination) {
  destination.end();
}
var textEncoder = new util.TextEncoder();
function stringToChunk(content) {
  return content;
}
function stringToPrecomputedChunk(content) {
  return textEncoder.encode(content);
}
function closeWithError(destination, error) {
  // $FlowFixMe: This is an Error object or the destination accepts other types.
  destination.destroy(error);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}

function checkAttributeStringCoercion(value, attributeName) {
  {
    if (willCoercionThrow(value)) {
      error('The provided `%s` attribute is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', attributeName, typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}
function checkCSSPropertyStringCoercion(value, propName) {
  {
    if (willCoercionThrow(value)) {
      error('The provided `%s` CSS property is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', propName, typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}
function checkHtmlStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided HTML markup uses a value of unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
/* eslint-enable max-len */

var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
    return true;
  }

  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
    return false;
  }

  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }

  illegalAttributeNameCache[attributeName] = true;

  {
    error('Invalid attribute name: `%s`', attributeName);
  }

  return false;
}
function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }

  switch (typeof value) {
    case 'function': // $FlowIssue symbol is perfectly valid here

    case 'symbol':
      // eslint-disable-line
      return true;

    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }

        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }

    default:
      return false;
  }
}
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];

reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function (token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
  false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
  false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
false);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true, // sanitizeURL
  true);
});

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

var hasReadOnlyValue = {
  button: true,
  checkbox: true,
  image: true,
  hidden: true,
  radio: true,
  reset: true,
  submit: true
};
function checkControlledValueProps(tagName, props) {
  {
    if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
      error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }

    if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
      error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  }
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this list too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;

    default:
      return true;
  }
}

var ariaProperties = {
  'aria-current': 0,
  // state
  'aria-description': 0,
  'aria-details': 0,
  'aria-disabled': 0,
  // state
  'aria-hidden': 0,
  // state
  'aria-invalid': 0,
  // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

function validateProperty(tagName, name) {
  {
    if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
      return true;
    }

    if (rARIACamel.test(name)) {
      var ariaName = 'aria-' + name.slice(4).toLowerCase();
      var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (correctName == null) {
        error('Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);

        warnedProperties[name] = true;
        return true;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== correctName) {
        error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);

        warnedProperties[name] = true;
        return true;
      }
    }

    if (rARIA.test(name)) {
      var lowerCasedName = name.toLowerCase();
      var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (standardName == null) {
        warnedProperties[name] = true;
        return false;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== standardName) {
        error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties[name] = true;
        return true;
      }
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  {
    var invalidProps = [];

    for (var key in props) {
      var isValid = validateProperty(type, key);

      if (!isValid) {
        invalidProps.push(key);
      }
    }

    var unknownPropString = invalidProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (invalidProps.length === 1) {
      error('Invalid aria prop %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
    } else if (invalidProps.length > 1) {
      error('Invalid aria props %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
    }
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;
function validateProperties$1(type, props) {
  {
    if (type !== 'input' && type !== 'textarea' && type !== 'select') {
      return;
    }

    if (props != null && props.value === null && !didWarnValueNull) {
      didWarnValueNull = true;

      if (type === 'select' && props.multiple) {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
      } else {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
      }
    }
  }
}

// When adding attributes to the HTML or SVG allowed attribute list, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  disablepictureinpicture: 'disablePictureInPicture',
  disableremoteplayback: 'disableRemotePlayback',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  enterkeyhint: 'enterKeyHint',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  imagesizes: 'imageSizes',
  imagesrcset: 'imageSrcSet',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',
  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, eventRegistry) {
    if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();

    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');

      warnedProperties$1[name] = true;
      return true;
    } // We can't rely on the event system being injected on the server.


    if (eventRegistry != null) {
      var registrationNameDependencies = eventRegistry.registrationNameDependencies,
          possibleRegistrationNames = eventRegistry.possibleRegistrationNames;

      if (registrationNameDependencies.hasOwnProperty(name)) {
        return true;
      }

      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

      if (registrationName != null) {
        error('Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);

        warnedProperties$1[name] = true;
        return true;
      }

      if (EVENT_NAME_REGEX.test(name)) {
        error('Unknown event handler property `%s`. It will be ignored.', name);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        error('Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Let the ARIA attribute hook validate ARIA attributes


    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      error('Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      error('The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      error('Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      error('Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);

      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED; // Known attributes should match the casing specified in the property config.

    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];

      if (standardName !== name) {
        error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      error('React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
      } else {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Now that we've validated casing, do not validate
    // data types for reserved props


    if (isReserved) {
      return true;
    } // Warn when a known attribute is a bad type


    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    } // Warn when passing the strings 'false' or 'true' into a boolean prop


    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
      error('Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);

      warnedProperties$1[name] = true;
      return true;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, eventRegistry) {
  {
    var unknownProps = [];

    for (var key in props) {
      var isValid = validateProperty$1(type, key, props[key], eventRegistry);

      if (!isValid) {
        unknownProps.push(key);
      }
    }

    var unknownPropString = unknownProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (unknownProps.length === 1) {
      error('Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
    } else if (unknownProps.length > 1) {
      error('Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
    }
  }
};

function validateProperties$2(type, props, eventRegistry) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnUnknownProperties(type, props, eventRegistry);
}

var warnValidStyle = function () {};

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g; // style values shouldn't contain a semicolon

  var badStyleValueWithSemicolonPattern = /;\s*$/;
  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var camelize = function (string) {
    return string.replace(hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  };

  var warnHyphenatedStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported style property %s. Did you mean %s?', name, // As Andi Smith suggests
    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
    // is converted to lowercase `ms`.
    camelize(name.replace(msPattern, 'ms-')));
  };

  var warnBadVendoredStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
  };

  var warnStyleValueWithSemicolon = function (name, value) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;

    error("Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;

    error('`NaN` is an invalid value for the `%s` css style property.', name);
  };

  var warnStyleValueIsInfinity = function (name, value) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;

    error('`Infinity` is an invalid value for the `%s` css style property.', name);
  };

  warnValidStyle = function (name, value) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

// code copied and modified from escape-html
var matchHtmlRegExp = /["'&<>]/;
/**
 * Escapes special characters and HTML entities in a given html string.
 *
 * @param  {string} string HTML string to escape for later insertion
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  {
    checkHtmlStringCoercion(string);
  }

  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;

      case 38:
        // &
        escape = '&amp;';
        break;

      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'

        break;

      case 60:
        // <
        escape = '&lt;';
        break;

      case 62:
        // >
        escape = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
} // end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */


function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }

  return escapeHtml(text);
}

var uppercasePattern = /([A-Z])/g;
var msPattern$1 = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */

function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern$1, '-ms-');
}

// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space

/* eslint-disable max-len */

var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
var didWarn = false;

function sanitizeURL(url) {
  {
    if (!didWarn && isJavaScriptProtocol.test(url)) {
      didWarn = true;

      error('A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

var startInlineScript = stringToPrecomputedChunk('<script>');
var endInlineScript = stringToPrecomputedChunk('</script>');
var startScriptSrc = stringToPrecomputedChunk('<script src="');
var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
var endAsyncScript = stringToPrecomputedChunk('" async=""></script>');
/**
 * This escaping function is designed to work with bootstrapScriptContent only.
 * because we know we are escaping the entire script. We can avoid for instance
 * escaping html comment string sequences that are valid javascript as well because
 * if there are no sebsequent <script sequences the html parser will never enter
 * script data double escaped state (see: https://www.w3.org/TR/html53/syntax.html#script-data-double-escaped-state)
 *
 * While untrusted script content should be made safe before using this api it will
 * ensure that the script cannot be early terminated or never terminated state
 */

function escapeBootstrapScriptContent(scriptText) {
  {
    checkHtmlStringCoercion(scriptText);
  }

  return ('' + scriptText).replace(scriptRegex, scriptReplacer);
}

var scriptRegex = /(<\/|<)(s)(cript)/gi;

var scriptReplacer = function (match, prefix, s, suffix) {
  return "" + prefix + (s === 's' ? "\\u0073" : "\\u0053") + suffix;
}; // Allows us to keep track of what we've already written so we can refer back to it.


function createResponseState(identifierPrefix, nonce, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
  var idPrefix = identifierPrefix === undefined ? '' : identifierPrefix;
  var inlineScriptWithNonce = nonce === undefined ? startInlineScript : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">');
  var bootstrapChunks = [];

  if (bootstrapScriptContent !== undefined) {
    bootstrapChunks.push(inlineScriptWithNonce, stringToChunk(escapeBootstrapScriptContent(bootstrapScriptContent)), endInlineScript);
  }

  if (bootstrapScripts !== undefined) {
    for (var i = 0; i < bootstrapScripts.length; i++) {
      bootstrapChunks.push(startScriptSrc, stringToChunk(escapeTextForBrowser(bootstrapScripts[i])), endAsyncScript);
    }
  }

  if (bootstrapModules !== undefined) {
    for (var _i = 0; _i < bootstrapModules.length; _i++) {
      bootstrapChunks.push(startModuleSrc, stringToChunk(escapeTextForBrowser(bootstrapModules[_i])), endAsyncScript);
    }
  }

  return {
    bootstrapChunks: bootstrapChunks,
    startInlineScript: inlineScriptWithNonce,
    placeholderPrefix: stringToPrecomputedChunk(idPrefix + 'P:'),
    segmentPrefix: stringToPrecomputedChunk(idPrefix + 'S:'),
    boundaryPrefix: idPrefix + 'B:',
    idPrefix: idPrefix,
    nextSuspenseID: 0,
    sentCompleteSegmentFunction: false,
    sentCompleteBoundaryFunction: false,
    sentClientRenderFunction: false
  };
} // Constants for the insertion mode we're currently writing in. We don't encode all HTML5 insertion
// modes. We only include the variants as they matter for the sake of our purposes.
// We don't actually provide the namespace therefore we use constants instead of the string.

var ROOT_HTML_MODE = 0; // Used for the root most element tag.

var HTML_MODE = 1;
var SVG_MODE = 2;
var MATHML_MODE = 3;
var HTML_TABLE_MODE = 4;
var HTML_TABLE_BODY_MODE = 5;
var HTML_TABLE_ROW_MODE = 6;
var HTML_COLGROUP_MODE = 7; // We have a greater than HTML_TABLE_MODE check elsewhere. If you add more cases here, make sure it
// still makes sense

function createFormatContext(insertionMode, selectedValue) {
  return {
    insertionMode: insertionMode,
    selectedValue: selectedValue
  };
}

function createRootFormatContext(namespaceURI) {
  var insertionMode = namespaceURI === 'http://www.w3.org/2000/svg' ? SVG_MODE : namespaceURI === 'http://www.w3.org/1998/Math/MathML' ? MATHML_MODE : ROOT_HTML_MODE;
  return createFormatContext(insertionMode, null);
}
function getChildFormatContext(parentContext, type, props) {
  switch (type) {
    case 'select':
      return createFormatContext(HTML_MODE, props.value != null ? props.value : props.defaultValue);

    case 'svg':
      return createFormatContext(SVG_MODE, null);

    case 'math':
      return createFormatContext(MATHML_MODE, null);

    case 'foreignObject':
      return createFormatContext(HTML_MODE, null);
    // Table parents are special in that their children can only be created at all if they're
    // wrapped in a table parent. So we need to encode that we're entering this mode.

    case 'table':
      return createFormatContext(HTML_TABLE_MODE, null);

    case 'thead':
    case 'tbody':
    case 'tfoot':
      return createFormatContext(HTML_TABLE_BODY_MODE, null);

    case 'colgroup':
      return createFormatContext(HTML_COLGROUP_MODE, null);

    case 'tr':
      return createFormatContext(HTML_TABLE_ROW_MODE, null);
  }

  if (parentContext.insertionMode >= HTML_TABLE_MODE) {
    // Whatever tag this was, it wasn't a table parent or other special parent, so we must have
    // entered plain HTML again.
    return createFormatContext(HTML_MODE, null);
  }

  if (parentContext.insertionMode === ROOT_HTML_MODE) {
    // We've emitted the root and is now in plain HTML mode.
    return createFormatContext(HTML_MODE, null);
  }

  return parentContext;
}
var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
function assignSuspenseBoundaryID(responseState) {
  var generatedID = responseState.nextSuspenseID++;
  return stringToPrecomputedChunk(responseState.boundaryPrefix + generatedID.toString(16));
}
function makeId(responseState, treeId, localId) {
  var idPrefix = responseState.idPrefix;
  var id = ':' + idPrefix + 'R' + treeId; // Unless this is the first id at this level, append a number at the end
  // that represents the position of this useId hook among all the useId
  // hooks for this fiber.

  if (localId > 0) {
    id += 'H' + localId.toString(32);
  }

  return id + ':';
}

function encodeHTMLTextNode(text) {
  return escapeTextForBrowser(text);
}

var textSeparator = stringToPrecomputedChunk('<!-- -->');
function pushTextInstance(target, text, responseState) {
  if (text === '') {
    // Empty text doesn't have a DOM node representation and the hydration is aware of this.
    return;
  } // TODO: Avoid adding a text separator in common cases.


  target.push(stringToChunk(encodeHTMLTextNode(text)), textSeparator);
}
var styleNameCache = new Map();

function processStyleName(styleName) {
  var chunk = styleNameCache.get(styleName);

  if (chunk !== undefined) {
    return chunk;
  }

  var result = stringToPrecomputedChunk(escapeTextForBrowser(hyphenateStyleName(styleName)));
  styleNameCache.set(styleName, result);
  return result;
}

var styleAttributeStart = stringToPrecomputedChunk(' style="');
var styleAssign = stringToPrecomputedChunk(':');
var styleSeparator = stringToPrecomputedChunk(';');

function pushStyle(target, responseState, style) {
  if (typeof style !== 'object') {
    throw new Error('The `style` prop expects a mapping from style properties to values, ' + "not a string. For example, style={{marginRight: spacing + 'em'}} when " + 'using JSX.');
  }

  var isFirst = true;

  for (var styleName in style) {
    if (!hasOwnProperty.call(style, styleName)) {
      continue;
    } // If you provide unsafe user data here they can inject arbitrary CSS
    // which may be problematic (I couldn't repro this):
    // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
    // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
    // This is not an XSS hole but instead a potential CSS injection issue
    // which has lead to a greater discussion about how we're going to
    // trust URLs moving forward. See #2115901


    var styleValue = style[styleName];

    if (styleValue == null || typeof styleValue === 'boolean' || styleValue === '') {
      // TODO: We used to set empty string as a style with an empty value. Does that ever make sense?
      continue;
    }

    var nameChunk = void 0;
    var valueChunk = void 0;
    var isCustomProperty = styleName.indexOf('--') === 0;

    if (isCustomProperty) {
      nameChunk = stringToChunk(escapeTextForBrowser(styleName));

      {
        checkCSSPropertyStringCoercion(styleValue, styleName);
      }

      valueChunk = stringToChunk(escapeTextForBrowser(('' + styleValue).trim()));
    } else {
      {
        warnValidStyle$1(styleName, styleValue);
      }

      nameChunk = processStyleName(styleName);

      if (typeof styleValue === 'number') {
        if (styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName)) {
          valueChunk = stringToChunk(styleValue + 'px'); // Presumes implicit 'px' suffix for unitless numbers
        } else {
          valueChunk = stringToChunk('' + styleValue);
        }
      } else {
        {
          checkCSSPropertyStringCoercion(styleValue, styleName);
        }

        valueChunk = stringToChunk(escapeTextForBrowser(('' + styleValue).trim()));
      }
    }

    if (isFirst) {
      isFirst = false; // If it's first, we don't need any separators prefixed.

      target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk);
    } else {
      target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
    }
  }

  if (!isFirst) {
    target.push(attributeEnd);
  }
}

var attributeSeparator = stringToPrecomputedChunk(' ');
var attributeAssign = stringToPrecomputedChunk('="');
var attributeEnd = stringToPrecomputedChunk('"');
var attributeEmptyString = stringToPrecomputedChunk('=""');

function pushAttribute(target, responseState, name, value) {
  switch (name) {
    case 'style':
      {
        pushStyle(target, responseState, value);
        return;
      }

    case 'defaultValue':
    case 'defaultChecked': // These shouldn't be set as attributes on generic HTML elements.

    case 'innerHTML': // Must use dangerouslySetInnerHTML instead.

    case 'suppressContentEditableWarning':
    case 'suppressHydrationWarning':
      // Ignored. These are built-in to React on the client.
      return;
  }

  if ( // shouldIgnoreAttribute
  // We have already filtered out null/undefined and reserved words.
  name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return;
  }

  var propertyInfo = getPropertyInfo(name);

  if (propertyInfo !== null) {
    // shouldRemoveAttribute
    switch (typeof value) {
      case 'function': // $FlowIssue symbol is perfectly valid here

      case 'symbol':
        // eslint-disable-line
        return;

      case 'boolean':
        {
          if (!propertyInfo.acceptsBooleans) {
            return;
          }
        }
    }

    var attributeName = propertyInfo.attributeName;
    var attributeNameChunk = stringToChunk(attributeName); // TODO: If it's known we can cache the chunk.

    switch (propertyInfo.type) {
      case BOOLEAN:
        if (value) {
          target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
        }

        return;

      case OVERLOADED_BOOLEAN:
        if (value === true) {
          target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
        } else if (value === false) ; else {
          target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
        }

        return;

      case NUMERIC:
        if (!isNaN(value)) {
          target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
        }

        break;

      case POSITIVE_NUMERIC:
        if (!isNaN(value) && value >= 1) {
          target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
        }

        break;

      default:
        if (propertyInfo.sanitizeURL) {
          {
            checkAttributeStringCoercion(value, attributeName);
          }

          value = '' + value;
          sanitizeURL(value);
        }

        target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
    }
  } else if (isAttributeNameSafe(name)) {
    // shouldRemoveAttribute
    switch (typeof value) {
      case 'function': // $FlowIssue symbol is perfectly valid here

      case 'symbol':
        // eslint-disable-line
        return;

      case 'boolean':
        {
          var prefix = name.toLowerCase().slice(0, 5);

          if (prefix !== 'data-' && prefix !== 'aria-') {
            return;
          }
        }
    }

    target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
  }
}

var endOfStartTag = stringToPrecomputedChunk('>');
var endOfStartTagSelfClosing = stringToPrecomputedChunk('/>');

function pushInnerHTML(target, innerHTML, children) {
  if (innerHTML != null) {
    if (children != null) {
      throw new Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
    }

    if (typeof innerHTML !== 'object' || !('__html' in innerHTML)) {
      throw new Error('`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://reactjs.org/link/dangerously-set-inner-html ' + 'for more information.');
    }

    var html = innerHTML.__html;

    if (html !== null && html !== undefined) {
      {
        checkHtmlStringCoercion(html);
      }

      target.push(stringToChunk('' + html));
    }
  }
} // TODO: Move these to ResponseState so that we warn for every request.
// It would help debugging in stateful servers (e.g. service worker).


var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var didWarnInvalidOptionInnerHTML = false;
var didWarnSelectedSetOnOption = false;

function checkSelectProp(props, propName) {
  {
    var value = props[propName];

    if (value != null) {
      var array = isArray(value);

      if (props.multiple && !array) {
        error('The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
      } else if (!props.multiple && array) {
        error('The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
      }
    }
  }
}

function pushStartSelect(target, props, responseState) {
  {
    checkControlledValueProps('select', props);
    checkSelectProp(props, 'value');
    checkSelectProp(props, 'defaultValue');

    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
      error('Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');

      didWarnDefaultSelectValue = true;
    }
  }

  target.push(startChunkForTag('select'));
  var children = null;
  var innerHTML = null;

  for (var propKey in props) {
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];

      if (propValue == null) {
        continue;
      }

      switch (propKey) {
        case 'children':
          children = propValue;
          break;

        case 'dangerouslySetInnerHTML':
          // TODO: This doesn't really make sense for select since it can't use the controlled
          // value in the innerHTML.
          innerHTML = propValue;
          break;

        case 'defaultValue':
        case 'value':
          // These are set on the Context instead and applied to the nested options.
          break;

        default:
          pushAttribute(target, responseState, propKey, propValue);
          break;
      }
    }
  }

  target.push(endOfStartTag);
  pushInnerHTML(target, innerHTML, children);
  return children;
}

function flattenOptionChildren(children) {
  var content = ''; // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.

  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }

    content += child;

    {
      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
        didWarnInvalidOptionChildren = true;

        error('Cannot infer the option value of complex children. ' + 'Pass a `value` prop or use a plain string as children to <option>.');
      }
    }
  });
  return content;
}

var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');

function pushStartOption(target, props, responseState, formatContext) {
  var selectedValue = formatContext.selectedValue;
  target.push(startChunkForTag('option'));
  var children = null;
  var value = null;
  var selected = null;
  var innerHTML = null;

  for (var propKey in props) {
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];

      if (propValue == null) {
        continue;
      }

      switch (propKey) {
        case 'children':
          children = propValue;
          break;

        case 'selected':
          // ignore
          selected = propValue;

          {
            // TODO: Remove support for `selected` in <option>.
            if (!didWarnSelectedSetOnOption) {
              error('Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.');

              didWarnSelectedSetOnOption = true;
            }
          }

          break;

        case 'dangerouslySetInnerHTML':
          innerHTML = propValue;
          break;
        // eslint-disable-next-line-no-fallthrough

        case 'value':
          value = propValue;
        // We intentionally fallthrough to also set the attribute on the node.
        // eslint-disable-next-line-no-fallthrough

        default:
          pushAttribute(target, responseState, propKey, propValue);
          break;
      }
    }
  }

  if (selectedValue != null) {
    var stringValue;

    if (value !== null) {
      {
        checkAttributeStringCoercion(value, 'value');
      }

      stringValue = '' + value;
    } else {
      {
        if (innerHTML !== null) {
          if (!didWarnInvalidOptionInnerHTML) {
            didWarnInvalidOptionInnerHTML = true;

            error('Pass a `value` prop if you set dangerouslyInnerHTML so React knows ' + 'which value should be selected.');
          }
        }
      }

      stringValue = flattenOptionChildren(children);
    }

    if (isArray(selectedValue)) {
      // multiple
      for (var i = 0; i < selectedValue.length; i++) {
        {
          checkAttributeStringCoercion(selectedValue[i], 'value');
        }

        var v = '' + selectedValue[i];

        if (v === stringValue) {
          target.push(selectedMarkerAttribute);
          break;
        }
      }
    } else {
      {
        checkAttributeStringCoercion(selectedValue, 'select.value');
      }

      if ('' + selectedValue === stringValue) {
        target.push(selectedMarkerAttribute);
      }
    }
  } else if (selected) {
    target.push(selectedMarkerAttribute);
  }

  target.push(endOfStartTag);
  pushInnerHTML(target, innerHTML, children);
  return children;
}

function pushInput(target, props, responseState) {
  {
    checkControlledValueProps('input', props);

    if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
      error('%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);

      didWarnDefaultChecked = true;
    }

    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
      error('%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);

      didWarnDefaultInputValue = true;
    }
  }

  target.push(startChunkForTag('input'));
  var value = null;
  var defaultValue = null;
  var checked = null;
  var defaultChecked = null;

  for (var propKey in props) {
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];

      if (propValue == null) {
        continue;
      }

      switch (propKey) {
        case 'children':
        case 'dangerouslySetInnerHTML':
          throw new Error('input' + " is a self-closing tag and must neither have `children` nor " + 'use `dangerouslySetInnerHTML`.');
        // eslint-disable-next-line-no-fallthrough

        case 'defaultChecked':
          defaultChecked = propValue;
          break;

        case 'defaultValue':
          defaultValue = propValue;
          break;

        case 'checked':
          checked = propValue;
          break;

        case 'value':
          value = propValue;
          break;

        default:
          pushAttribute(target, responseState, propKey, propValue);
          break;
      }
    }
  }

  if (checked !== null) {
    pushAttribute(target, responseState, 'checked', checked);
  } else if (defaultChecked !== null) {
    pushAttribute(target, responseState, 'checked', defaultChecked);
  }

  if (value !== null) {
    pushAttribute(target, responseState, 'value', value);
  } else if (defaultValue !== null) {
    pushAttribute(target, responseState, 'value', defaultValue);
  }

  target.push(endOfStartTagSelfClosing);
  return null;
}

function pushStartTextArea(target, props, responseState) {
  {
    checkControlledValueProps('textarea', props);

    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
      error('Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');

      didWarnDefaultTextareaValue = true;
    }
  }

  target.push(startChunkForTag('textarea'));
  var value = null;
  var defaultValue = null;
  var children = null;

  for (var propKey in props) {
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];

      if (propValue == null) {
        continue;
      }

      switch (propKey) {
        case 'children':
          children = propValue;
          break;

        case 'value':
          value = propValue;
          break;

        case 'defaultValue':
          defaultValue = propValue;
          break;

        case 'dangerouslySetInnerHTML':
          throw new Error('`dangerouslySetInnerHTML` does not make sense on <textarea>.');
        // eslint-disable-next-line-no-fallthrough

        default:
          pushAttribute(target, responseState, propKey, propValue);
          break;
      }
    }
  }

  if (value === null && defaultValue !== null) {
    value = defaultValue;
  }

  target.push(endOfStartTag); // TODO (yungsters): Remove support for children content in <textarea>.

  if (children != null) {
    {
      error('Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
    }

    if (value != null) {
      throw new Error('If you supply `defaultValue` on a <textarea>, do not pass children.');
    }

    if (isArray(children)) {
      if (children.length > 1) {
        throw new Error('<textarea> can only have at most one child.');
      } // TODO: remove the coercion and the DEV check below because it will
      // always be overwritten by the coercion several lines below it. #22309


      {
        checkHtmlStringCoercion(children[0]);
      }

      value = '' + children[0];
    }

    {
      checkHtmlStringCoercion(children);
    }

    value = '' + children;
  }

  if (typeof value === 'string' && value[0] === '\n') {
    // text/html ignores the first character in these tags if it's a newline
    // Prefer to break application/xml over text/html (for now) by adding
    // a newline specifically to get eaten by the parser. (Alternately for
    // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
    // \r is normalized out by HTMLTextAreaElement#value.)
    // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
    // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
    // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
    // See: Parsing of "textarea" "listing" and "pre" elements
    //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
    target.push(leadingNewline);
  } // ToString and push directly instead of recurse over children.
  // We don't really support complex children in the value anyway.
  // This also currently avoids a trailing comment node which breaks textarea.


  if (value !== null) {
    {
      checkAttributeStringCoercion(value, 'value');
    }

    target.push(stringToChunk(encodeHTMLTextNode('' + value)));
  }

  return null;
}

function pushSelfClosing(target, props, tag, responseState) {
  target.push(startChunkForTag(tag));

  for (var propKey in props) {
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];

      if (propValue == null) {
        continue;
      }

      switch (propKey) {
        case 'children':
        case 'dangerouslySetInnerHTML':
          throw new Error(tag + " is a self-closing tag and must neither have `children` nor " + 'use `dangerouslySetInnerHTML`.');
        // eslint-disable-next-line-no-fallthrough

        default:
          pushAttribute(target, responseState, propKey, propValue);
          break;
      }
    }
  }

  target.push(endOfStartTagSelfClosing);
  return null;
}

function pushStartMenuItem(target, props, responseState) {
  target.push(startChunkForTag('menuitem'));

  for (var propKey in props) {
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];

      if (propValue == null) {
        continue;
      }

      switch (propKey) {
        case 'children':
        case 'dangerouslySetInnerHTML':
          throw new Error('menuitems cannot have `children` nor `dangerouslySetInnerHTML`.');
        // eslint-disable-next-line-no-fallthrough

        default:
          pushAttribute(target, responseState, propKey, propValue);
          break;
      }
    }
  }

  target.push(endOfStartTag);
  return null;
}

function pushStartGenericElement(target, props, tag, responseState) {
  target.push(startChunkForTag(tag));
  var children = null;
  var innerHTML = null;

  for (var propKey in props) {
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];

      if (propValue == null) {
        continue;
      }

      switch (propKey) {
        case 'children':
          children = propValue;
          break;

        case 'dangerouslySetInnerHTML':
          innerHTML = propValue;
          break;

        default:
          pushAttribute(target, responseState, propKey, propValue);
          break;
      }
    }
  }

  target.push(endOfStartTag);
  pushInnerHTML(target, innerHTML, children);

  if (typeof children === 'string') {
    // Special case children as a string to avoid the unnecessary comment.
    // TODO: Remove this special case after the general optimization is in place.
    target.push(stringToChunk(encodeHTMLTextNode(children)));
    return null;
  }

  return children;
}

function pushStartCustomElement(target, props, tag, responseState) {
  target.push(startChunkForTag(tag));
  var children = null;
  var innerHTML = null;

  for (var propKey in props) {
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];

      if (propValue == null) {
        continue;
      }

      switch (propKey) {
        case 'children':
          children = propValue;
          break;

        case 'dangerouslySetInnerHTML':
          innerHTML = propValue;
          break;

        case 'style':
          pushStyle(target, responseState, propValue);
          break;

        case 'suppressContentEditableWarning':
        case 'suppressHydrationWarning':
          // Ignored. These are built-in to React on the client.
          break;

        default:
          if (isAttributeNameSafe(propKey) && typeof propValue !== 'function' && typeof propValue !== 'symbol') {
            target.push(attributeSeparator, stringToChunk(propKey), attributeAssign, stringToChunk(escapeTextForBrowser(propValue)), attributeEnd);
          }

          break;
      }
    }
  }

  target.push(endOfStartTag);
  pushInnerHTML(target, innerHTML, children);
  return children;
}

var leadingNewline = stringToPrecomputedChunk('\n');

function pushStartPreformattedElement(target, props, tag, responseState) {
  target.push(startChunkForTag(tag));
  var children = null;
  var innerHTML = null;

  for (var propKey in props) {
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];

      if (propValue == null) {
        continue;
      }

      switch (propKey) {
        case 'children':
          children = propValue;
          break;

        case 'dangerouslySetInnerHTML':
          innerHTML = propValue;
          break;

        default:
          pushAttribute(target, responseState, propKey, propValue);
          break;
      }
    }
  }

  target.push(endOfStartTag); // text/html ignores the first character in these tags if it's a newline
  // Prefer to break application/xml over text/html (for now) by adding
  // a newline specifically to get eaten by the parser. (Alternately for
  // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
  // \r is normalized out by HTMLTextAreaElement#value.)
  // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
  // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
  // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
  // See: Parsing of "textarea" "listing" and "pre" elements
  //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
  // TODO: This doesn't deal with the case where the child is an array
  // or component that returns a string.

  if (innerHTML != null) {
    if (children != null) {
      throw new Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
    }

    if (typeof innerHTML !== 'object' || !('__html' in innerHTML)) {
      throw new Error('`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://reactjs.org/link/dangerously-set-inner-html ' + 'for more information.');
    }

    var html = innerHTML.__html;

    if (html !== null && html !== undefined) {
      if (typeof html === 'string' && html.length > 0 && html[0] === '\n') {
        target.push(leadingNewline, stringToChunk(html));
      } else {
        {
          checkHtmlStringCoercion(html);
        }

        target.push(stringToChunk('' + html));
      }
    }
  }

  if (typeof children === 'string' && children[0] === '\n') {
    target.push(leadingNewline);
  }

  return children;
} // We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name


var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset

var validatedTagCache = new Map();

function startChunkForTag(tag) {
  var tagStartChunk = validatedTagCache.get(tag);

  if (tagStartChunk === undefined) {
    if (!VALID_TAG_REGEX.test(tag)) {
      throw new Error("Invalid tag: " + tag);
    }

    tagStartChunk = stringToPrecomputedChunk('<' + tag);
    validatedTagCache.set(tag, tagStartChunk);
  }

  return tagStartChunk;
}

var DOCTYPE = stringToPrecomputedChunk('<!DOCTYPE html>');
function pushStartInstance(target, type, props, responseState, formatContext) {
  {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props, null);

    if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
      error('A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
    }

    if (formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE) {
      if (type.indexOf('-') === -1 && typeof props.is !== 'string' && type.toLowerCase() !== type) {
        error('<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', type);
      }
    }
  }

  switch (type) {
    // Special tags
    case 'select':
      return pushStartSelect(target, props, responseState);

    case 'option':
      return pushStartOption(target, props, responseState, formatContext);

    case 'textarea':
      return pushStartTextArea(target, props, responseState);

    case 'input':
      return pushInput(target, props, responseState);

    case 'menuitem':
      return pushStartMenuItem(target, props, responseState);
    // Newline eating tags

    case 'listing':
    case 'pre':
      {
        return pushStartPreformattedElement(target, props, type, responseState);
      }
    // Omitted close tags

    case 'area':
    case 'base':
    case 'br':
    case 'col':
    case 'embed':
    case 'hr':
    case 'img':
    case 'keygen':
    case 'link':
    case 'meta':
    case 'param':
    case 'source':
    case 'track':
    case 'wbr':
      {
        return pushSelfClosing(target, props, type, responseState);
      }
    // These are reserved SVG and MathML elements, that are never custom elements.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts

    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      {
        return pushStartGenericElement(target, props, type, responseState);
      }

    case 'html':
      {
        if (formatContext.insertionMode === ROOT_HTML_MODE) {
          // If we're rendering the html tag and we're at the root (i.e. not in foreignObject)
          // then we also emit the DOCTYPE as part of the root content as a convenience for
          // rendering the whole document.
          target.push(DOCTYPE);
        }

        return pushStartGenericElement(target, props, type, responseState);
      }

    default:
      {
        if (type.indexOf('-') === -1 && typeof props.is !== 'string') {
          // Generic element
          return pushStartGenericElement(target, props, type, responseState);
        } else {
          // Custom element
          return pushStartCustomElement(target, props, type, responseState);
        }
      }
  }
}
var endTag1 = stringToPrecomputedChunk('</');
var endTag2 = stringToPrecomputedChunk('>');
function pushEndInstance(target, type, props) {
  switch (type) {
    // Omitted close tags
    // TODO: Instead of repeating this switch we could try to pass a flag from above.
    // That would require returning a tuple. Which might be ok if it gets inlined.
    case 'area':
    case 'base':
    case 'br':
    case 'col':
    case 'embed':
    case 'hr':
    case 'img':
    case 'input':
    case 'keygen':
    case 'link':
    case 'meta':
    case 'param':
    case 'source':
    case 'track':
    case 'wbr':
      {
        // No close tag needed.
        break;
      }

    default:
      {
        target.push(endTag1, stringToChunk(type), endTag2);
      }
  }
}
function writeCompletedRoot(destination, responseState) {
  var bootstrapChunks = responseState.bootstrapChunks;
  var i = 0;

  for (; i < bootstrapChunks.length - 1; i++) {
    writeChunk(destination, bootstrapChunks[i]);
  }

  if (i < bootstrapChunks.length) {
    return writeChunkAndReturn(destination, bootstrapChunks[i]);
  }

  return true;
} // Structural Nodes
// A placeholder is a node inside a hidden partial tree that can be filled in later, but before
// display. It's never visible to users. We use the template tag because it can be used in every
// type of parent. <script> tags also work in every other tag except <colgroup>.

var placeholder1 = stringToPrecomputedChunk('<template id="');
var placeholder2 = stringToPrecomputedChunk('"></template>');
function writePlaceholder(destination, responseState, id) {
  writeChunk(destination, placeholder1);
  writeChunk(destination, responseState.placeholderPrefix);
  var formattedID = stringToChunk(id.toString(16));
  writeChunk(destination, formattedID);
  return writeChunkAndReturn(destination, placeholder2);
} // Suspense boundaries are encoded as comments.

var startCompletedSuspenseBoundary = stringToPrecomputedChunk('<!--$-->');
var startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="');
var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk('<!--$!-->');
var endSuspenseBoundary = stringToPrecomputedChunk('<!--/$-->');
function writeStartCompletedSuspenseBoundary(destination, responseState) {
  return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
}
function writeStartPendingSuspenseBoundary(destination, responseState, id) {
  writeChunk(destination, startPendingSuspenseBoundary1);

  if (id === null) {
    throw new Error('An ID must have been assigned before we can complete the boundary.');
  }

  writeChunk(destination, id);
  return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
}
function writeStartClientRenderedSuspenseBoundary(destination, responseState) {
  return writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
}
function writeEndCompletedSuspenseBoundary(destination, responseState) {
  return writeChunkAndReturn(destination, endSuspenseBoundary);
}
function writeEndPendingSuspenseBoundary(destination, responseState) {
  return writeChunkAndReturn(destination, endSuspenseBoundary);
}
function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
  return writeChunkAndReturn(destination, endSuspenseBoundary);
}
var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
var startSegmentHTML2 = stringToPrecomputedChunk('">');
var endSegmentHTML = stringToPrecomputedChunk('</div>');
var startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
var startSegmentSVG2 = stringToPrecomputedChunk('">');
var endSegmentSVG = stringToPrecomputedChunk('</svg>');
var startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
var startSegmentMathML2 = stringToPrecomputedChunk('">');
var endSegmentMathML = stringToPrecomputedChunk('</math>');
var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
var startSegmentTable2 = stringToPrecomputedChunk('">');
var endSegmentTable = stringToPrecomputedChunk('</table>');
var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
var startSegmentTableBody2 = stringToPrecomputedChunk('">');
var endSegmentTableBody = stringToPrecomputedChunk('</tbody></table>');
var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
var startSegmentTableRow2 = stringToPrecomputedChunk('">');
var endSegmentTableRow = stringToPrecomputedChunk('</tr></table>');
var startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="');
var startSegmentColGroup2 = stringToPrecomputedChunk('">');
var endSegmentColGroup = stringToPrecomputedChunk('</colgroup></table>');
function writeStartSegment(destination, responseState, formatContext, id) {
  switch (formatContext.insertionMode) {
    case ROOT_HTML_MODE:
    case HTML_MODE:
      {
        writeChunk(destination, startSegmentHTML);
        writeChunk(destination, responseState.segmentPrefix);
        writeChunk(destination, stringToChunk(id.toString(16)));
        return writeChunkAndReturn(destination, startSegmentHTML2);
      }

    case SVG_MODE:
      {
        writeChunk(destination, startSegmentSVG);
        writeChunk(destination, responseState.segmentPrefix);
        writeChunk(destination, stringToChunk(id.toString(16)));
        return writeChunkAndReturn(destination, startSegmentSVG2);
      }

    case MATHML_MODE:
      {
        writeChunk(destination, startSegmentMathML);
        writeChunk(destination, responseState.segmentPrefix);
        writeChunk(destination, stringToChunk(id.toString(16)));
        return writeChunkAndReturn(destination, startSegmentMathML2);
      }

    case HTML_TABLE_MODE:
      {
        writeChunk(destination, startSegmentTable);
        writeChunk(destination, responseState.segmentPrefix);
        writeChunk(destination, stringToChunk(id.toString(16)));
        return writeChunkAndReturn(destination, startSegmentTable2);
      }
    // TODO: For the rest of these, there will be extra wrapper nodes that never
    // get deleted from the document. We need to delete the table too as part
    // of the injected scripts. They are invisible though so it's not too terrible
    // and it's kind of an edge case to suspend in a table. Totally supported though.

    case HTML_TABLE_BODY_MODE:
      {
        writeChunk(destination, startSegmentTableBody);
        writeChunk(destination, responseState.segmentPrefix);
        writeChunk(destination, stringToChunk(id.toString(16)));
        return writeChunkAndReturn(destination, startSegmentTableBody2);
      }

    case HTML_TABLE_ROW_MODE:
      {
        writeChunk(destination, startSegmentTableRow);
        writeChunk(destination, responseState.segmentPrefix);
        writeChunk(destination, stringToChunk(id.toString(16)));
        return writeChunkAndReturn(destination, startSegmentTableRow2);
      }

    case HTML_COLGROUP_MODE:
      {
        writeChunk(destination, startSegmentColGroup);
        writeChunk(destination, responseState.segmentPrefix);
        writeChunk(destination, stringToChunk(id.toString(16)));
        return writeChunkAndReturn(destination, startSegmentColGroup2);
      }

    default:
      {
        throw new Error('Unknown insertion mode. This is a bug in React.');
      }
  }
}
function writeEndSegment(destination, formatContext) {
  switch (formatContext.insertionMode) {
    case ROOT_HTML_MODE:
    case HTML_MODE:
      {
        return writeChunkAndReturn(destination, endSegmentHTML);
      }

    case SVG_MODE:
      {
        return writeChunkAndReturn(destination, endSegmentSVG);
      }

    case MATHML_MODE:
      {
        return writeChunkAndReturn(destination, endSegmentMathML);
      }

    case HTML_TABLE_MODE:
      {
        return writeChunkAndReturn(destination, endSegmentTable);
      }

    case HTML_TABLE_BODY_MODE:
      {
        return writeChunkAndReturn(destination, endSegmentTableBody);
      }

    case HTML_TABLE_ROW_MODE:
      {
        return writeChunkAndReturn(destination, endSegmentTableRow);
      }

    case HTML_COLGROUP_MODE:
      {
        return writeChunkAndReturn(destination, endSegmentColGroup);
      }

    default:
      {
        throw new Error('Unknown insertion mode. This is a bug in React.');
      }
  }
} // Instruction Set
// The following code is the source scripts that we then minify and inline below,
// with renamed function names that we hope don't collide:
// const COMMENT_NODE = 8;
// const SUSPENSE_START_DATA = '$';
// const SUSPENSE_END_DATA = '/$';
// const SUSPENSE_PENDING_START_DATA = '$?';
// const SUSPENSE_FALLBACK_START_DATA = '$!';
//
// function clientRenderBoundary(suspenseBoundaryID) {
//   // Find the fallback's first element.
//   const suspenseIdNode = document.getElementById(suspenseBoundaryID);
//   if (!suspenseIdNode) {
//     // The user must have already navigated away from this tree.
//     // E.g. because the parent was hydrated.
//     return;
//   }
//   // Find the boundary around the fallback. This is always the previous node.
//   const suspenseNode = suspenseIdNode.previousSibling;
//   // Tag it to be client rendered.
//   suspenseNode.data = SUSPENSE_FALLBACK_START_DATA;
//   // Tell React to retry it if the parent already hydrated.
//   if (suspenseNode._reactRetry) {
//     suspenseNode._reactRetry();
//   }
// }
//
// function completeBoundary(suspenseBoundaryID, contentID) {
//   // Find the fallback's first element.
//   const suspenseIdNode = document.getElementById(suspenseBoundaryID);
//   const contentNode = document.getElementById(contentID);
//   // We'll detach the content node so that regardless of what happens next we don't leave in the tree.
//   // This might also help by not causing recalcing each time we move a child from here to the target.
//   contentNode.parentNode.removeChild(contentNode);
//   if (!suspenseIdNode) {
//     // The user must have already navigated away from this tree.
//     // E.g. because the parent was hydrated. That's fine there's nothing to do
//     // but we have to make sure that we already deleted the container node.
//     return;
//   }
//   // Find the boundary around the fallback. This is always the previous node.
//   const suspenseNode = suspenseIdNode.previousSibling;
//
//   // Clear all the existing children. This is complicated because
//   // there can be embedded Suspense boundaries in the fallback.
//   // This is similar to clearSuspenseBoundary in ReactDOMHostConfig.
//   // TODO: We could avoid this if we never emitted suspense boundaries in fallback trees.
//   // They never hydrate anyway. However, currently we support incrementally loading the fallback.
//   const parentInstance = suspenseNode.parentNode;
//   let node = suspenseNode.nextSibling;
//   let depth = 0;
//   do {
//     if (node && node.nodeType === COMMENT_NODE) {
//       const data = node.data;
//       if (data === SUSPENSE_END_DATA) {
//         if (depth === 0) {
//           break;
//         } else {
//           depth--;
//         }
//       } else if (
//         data === SUSPENSE_START_DATA ||
//         data === SUSPENSE_PENDING_START_DATA ||
//         data === SUSPENSE_FALLBACK_START_DATA
//       ) {
//         depth++;
//       }
//     }
//
//     const nextNode = node.nextSibling;
//     parentInstance.removeChild(node);
//     node = nextNode;
//   } while (node);
//
//   const endOfBoundary = node;
//
//   // Insert all the children from the contentNode between the start and end of suspense boundary.
//   while (contentNode.firstChild) {
//     parentInstance.insertBefore(contentNode.firstChild, endOfBoundary);
//   }
//   suspenseNode.data = SUSPENSE_START_DATA;
//   if (suspenseNode._reactRetry) {
//     suspenseNode._reactRetry();
//   }
// }
//
// function completeSegment(containerID, placeholderID) {
//   const segmentContainer = document.getElementById(containerID);
//   const placeholderNode = document.getElementById(placeholderID);
//   // We always expect both nodes to exist here because, while we might
//   // have navigated away from the main tree, we still expect the detached
//   // tree to exist.
//   segmentContainer.parentNode.removeChild(segmentContainer);
//   while (segmentContainer.firstChild) {
//     placeholderNode.parentNode.insertBefore(
//       segmentContainer.firstChild,
//       placeholderNode,
//     );
//   }
//   placeholderNode.parentNode.removeChild(placeholderNode);
// }

var completeSegmentFunction = 'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}';
var completeBoundaryFunction = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}';
var clientRenderFunction = 'function $RX(a){if(a=document.getElementById(a))a=a.previousSibling,a.data="$!",a._reactRetry&&a._reactRetry()}';
var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegmentFunction + ';$RS("');
var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
var completeSegmentScript2 = stringToPrecomputedChunk('","');
var completeSegmentScript3 = stringToPrecomputedChunk('")</script>');
function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
  writeChunk(destination, responseState.startInlineScript);

  if (!responseState.sentCompleteSegmentFunction) {
    // The first time we write this, we'll need to include the full implementation.
    responseState.sentCompleteSegmentFunction = true;
    writeChunk(destination, completeSegmentScript1Full);
  } else {
    // Future calls can just reuse the same function.
    writeChunk(destination, completeSegmentScript1Partial);
  }

  writeChunk(destination, responseState.segmentPrefix);
  var formattedID = stringToChunk(contentSegmentID.toString(16));
  writeChunk(destination, formattedID);
  writeChunk(destination, completeSegmentScript2);
  writeChunk(destination, responseState.placeholderPrefix);
  writeChunk(destination, formattedID);
  return writeChunkAndReturn(destination, completeSegmentScript3);
}
var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundaryFunction + ';$RC("');
var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
var completeBoundaryScript2 = stringToPrecomputedChunk('","');
var completeBoundaryScript3 = stringToPrecomputedChunk('")</script>');
function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID) {
  writeChunk(destination, responseState.startInlineScript);

  if (!responseState.sentCompleteBoundaryFunction) {
    // The first time we write this, we'll need to include the full implementation.
    responseState.sentCompleteBoundaryFunction = true;
    writeChunk(destination, completeBoundaryScript1Full);
  } else {
    // Future calls can just reuse the same function.
    writeChunk(destination, completeBoundaryScript1Partial);
  }

  if (boundaryID === null) {
    throw new Error('An ID must have been assigned before we can complete the boundary.');
  }

  var formattedContentID = stringToChunk(contentSegmentID.toString(16));
  writeChunk(destination, boundaryID);
  writeChunk(destination, completeBoundaryScript2);
  writeChunk(destination, responseState.segmentPrefix);
  writeChunk(destination, formattedContentID);
  return writeChunkAndReturn(destination, completeBoundaryScript3);
}
var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderFunction + ';$RX("');
var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
var clientRenderScript2 = stringToPrecomputedChunk('")</script>');
function writeClientRenderBoundaryInstruction(destination, responseState, boundaryID) {
  writeChunk(destination, responseState.startInlineScript);

  if (!responseState.sentClientRenderFunction) {
    // The first time we write this, we'll need to include the full implementation.
    responseState.sentClientRenderFunction = true;
    writeChunk(destination, clientRenderScript1Full);
  } else {
    // Future calls can just reuse the same function.
    writeChunk(destination, clientRenderScript1Partial);
  }

  if (boundaryID === null) {
    throw new Error('An ID must have been assigned before we can complete the boundary.');
  }

  writeChunk(destination, boundaryID);
  return writeChunkAndReturn(destination, clientRenderScript2);
}

var assign = Object.assign;

// ATTENTION

var REACT_ELEMENT_TYPE =  Symbol.for('react.element');
var REACT_PORTAL_TYPE =  Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE =  Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE =  Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE =  Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE =  Symbol.for('react.provider');
var REACT_CONTEXT_TYPE =  Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE =  Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE =  Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE =  Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE =  Symbol.for('react.memo');
var REACT_LAZY_TYPE =  Symbol.for('react.lazy');
var REACT_SCOPE_TYPE =  Symbol.for('react.scope');
var REACT_DEBUG_TRACING_MODE_TYPE =  Symbol.for('react.debug_trace_mode');
var REACT_LEGACY_HIDDEN_TYPE =  Symbol.for('react.legacy_hidden');
var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED =  Symbol.for('react.default_value');
var MAYBE_ITERATOR_SYMBOL =  Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}

function describeClassComponentFrame(ctor, source, ownerFn) {
  {
    return describeNativeComponentFrame(ctor, true);
  }
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var warnedAboutMissingGetChildContext;

{
  warnedAboutMissingGetChildContext = {};
}

var emptyContextObject = {};

{
  Object.freeze(emptyContextObject);
}

function getMaskedContext(type, unmaskedContext) {
  {
    var contextTypes = type.contextTypes;

    if (!contextTypes) {
      return emptyContextObject;
    }

    var context = {};

    for (var key in contextTypes) {
      context[key] = unmaskedContext[key];
    }

    {
      var name = getComponentNameFromType(type) || 'Unknown';
      checkPropTypes(contextTypes, context, 'context', name);
    }

    return context;
  }
}
function processChildContext(instance, type, parentContext, childContextTypes) {
  {
    // TODO (bvaughn) Replace this behavior with an invariant() in the future.
    // It has only been added in Fiber to match the (unintentional) behavior in Stack.
    if (typeof instance.getChildContext !== 'function') {
      {
        var componentName = getComponentNameFromType(type) || 'Unknown';

        if (!warnedAboutMissingGetChildContext[componentName]) {
          warnedAboutMissingGetChildContext[componentName] = true;

          error('%s.childContextTypes is specified but there is no getChildContext() method ' + 'on the instance. You can either define getChildContext() on %s or remove ' + 'childContextTypes from it.', componentName, componentName);
        }
      }

      return parentContext;
    }

    var childContext = instance.getChildContext();

    for (var contextKey in childContext) {
      if (!(contextKey in childContextTypes)) {
        throw new Error((getComponentNameFromType(type) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes.");
      }
    }

    {
      var name = getComponentNameFromType(type) || 'Unknown';
      checkPropTypes(childContextTypes, childContext, 'child context', name);
    }

    return assign({}, parentContext, childContext);
  }
}

var rendererSigil;

{
  // Use this to detect multiple renderers using the same context
  rendererSigil = {};
} // Used to store the parent path of all context overrides in a shared linked list.
// Forming a reverse tree.


var rootContextSnapshot = null; // We assume that this runtime owns the "current" field on all ReactContext instances.
// This global (actually thread local) state represents what state all those "current",
// fields are currently in.

var currentActiveSnapshot = null;

function popNode(prev) {
  {
    prev.context._currentValue = prev.parentValue;
  }
}

function pushNode(next) {
  {
    next.context._currentValue = next.value;
  }
}

function popToNearestCommonAncestor(prev, next) {
  if (prev === next) ; else {
    popNode(prev);
    var parentPrev = prev.parent;
    var parentNext = next.parent;

    if (parentPrev === null) {
      if (parentNext !== null) {
        throw new Error('The stacks must reach the root at the same time. This is a bug in React.');
      }
    } else {
      if (parentNext === null) {
        throw new Error('The stacks must reach the root at the same time. This is a bug in React.');
      }

      popToNearestCommonAncestor(parentPrev, parentNext);
    } // On the way back, we push the new ones that weren't common.


    pushNode(next);
  }
}

function popAllPrevious(prev) {
  popNode(prev);
  var parentPrev = prev.parent;

  if (parentPrev !== null) {
    popAllPrevious(parentPrev);
  }
}

function pushAllNext(next) {
  var parentNext = next.parent;

  if (parentNext !== null) {
    pushAllNext(parentNext);
  }

  pushNode(next);
}

function popPreviousToCommonLevel(prev, next) {
  popNode(prev);
  var parentPrev = prev.parent;

  if (parentPrev === null) {
    throw new Error('The depth must equal at least at zero before reaching the root. This is a bug in React.');
  }

  if (parentPrev.depth === next.depth) {
    // We found the same level. Now we just need to find a shared ancestor.
    popToNearestCommonAncestor(parentPrev, next);
  } else {
    // We must still be deeper.
    popPreviousToCommonLevel(parentPrev, next);
  }
}

function popNextToCommonLevel(prev, next) {
  var parentNext = next.parent;

  if (parentNext === null) {
    throw new Error('The depth must equal at least at zero before reaching the root. This is a bug in React.');
  }

  if (prev.depth === parentNext.depth) {
    // We found the same level. Now we just need to find a shared ancestor.
    popToNearestCommonAncestor(prev, parentNext);
  } else {
    // We must still be deeper.
    popNextToCommonLevel(prev, parentNext);
  }

  pushNode(next);
} // Perform context switching to the new snapshot.
// To make it cheap to read many contexts, while not suspending, we make the switch eagerly by
// updating all the context's current values. That way reads, always just read the current value.
// At the cost of updating contexts even if they're never read by this subtree.


function switchContext(newSnapshot) {
  // The basic algorithm we need to do is to pop back any contexts that are no longer on the stack.
  // We also need to update any new contexts that are now on the stack with the deepest value.
  // The easiest way to update new contexts is to just reapply them in reverse order from the
  // perspective of the backpointers. To avoid allocating a lot when switching, we use the stack
  // for that. Therefore this algorithm is recursive.
  // 1) First we pop which ever snapshot tree was deepest. Popping old contexts as we go.
  // 2) Then we find the nearest common ancestor from there. Popping old contexts as we go.
  // 3) Then we reapply new contexts on the way back up the stack.
  var prev = currentActiveSnapshot;
  var next = newSnapshot;

  if (prev !== next) {
    if (prev === null) {
      // $FlowFixMe: This has to be non-null since it's not equal to prev.
      pushAllNext(next);
    } else if (next === null) {
      popAllPrevious(prev);
    } else if (prev.depth === next.depth) {
      popToNearestCommonAncestor(prev, next);
    } else if (prev.depth > next.depth) {
      popPreviousToCommonLevel(prev, next);
    } else {
      popNextToCommonLevel(prev, next);
    }

    currentActiveSnapshot = next;
  }
}
function pushProvider(context, nextValue) {
  var prevValue;

  {
    prevValue = context._currentValue;
    context._currentValue = nextValue;

    {
      if (context._currentRenderer !== undefined && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
        error('Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.');
      }

      context._currentRenderer = rendererSigil;
    }
  }

  var prevNode = currentActiveSnapshot;
  var newNode = {
    parent: prevNode,
    depth: prevNode === null ? 0 : prevNode.depth + 1,
    context: context,
    parentValue: prevValue,
    value: nextValue
  };
  currentActiveSnapshot = newNode;
  return newNode;
}
function popProvider(context) {
  var prevSnapshot = currentActiveSnapshot;

  if (prevSnapshot === null) {
    throw new Error('Tried to pop a Context at the root of the app. This is a bug in React.');
  }

  {
    if (prevSnapshot.context !== context) {
      error('The parent context is not the expected context. This is probably a bug in React.');
    }
  }

  {
    var value = prevSnapshot.parentValue;

    if (value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
      prevSnapshot.context._currentValue = prevSnapshot.context._defaultValue;
    } else {
      prevSnapshot.context._currentValue = value;
    }

    {
      if (context._currentRenderer !== undefined && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
        error('Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.');
      }

      context._currentRenderer = rendererSigil;
    }
  }

  return currentActiveSnapshot = prevSnapshot.parent;
}
function getActiveContext() {
  return currentActiveSnapshot;
}
function readContext(context) {
  var value =  context._currentValue ;
  return value;
}

/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 *
 * Note that this module is currently shared and assumed to be stateless.
 * If this becomes an actual Map, that will break.
 */
function get(key) {
  return key._reactInternals;
}
function set(key, value) {
  key._reactInternals = value;
}

var didWarnAboutNoopUpdateForComponent = {};
var didWarnAboutDeprecatedWillMount = {};
var didWarnAboutUninitializedState;
var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
var didWarnAboutLegacyLifecyclesAndDerivedState;
var didWarnAboutUndefinedDerivedState;
var warnOnUndefinedDerivedState;
var warnOnInvalidCallback;
var didWarnAboutDirectlyAssigningPropsToState;
var didWarnAboutContextTypeAndContextTypes;
var didWarnAboutInvalidateContextType;

{
  didWarnAboutUninitializedState = new Set();
  didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
  didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
  didWarnAboutDirectlyAssigningPropsToState = new Set();
  didWarnAboutUndefinedDerivedState = new Set();
  didWarnAboutContextTypeAndContextTypes = new Set();
  didWarnAboutInvalidateContextType = new Set();
  var didWarnOnInvalidCallback = new Set();

  warnOnInvalidCallback = function (callback, callerName) {
    if (callback === null || typeof callback === 'function') {
      return;
    }

    var key = callerName + '_' + callback;

    if (!didWarnOnInvalidCallback.has(key)) {
      didWarnOnInvalidCallback.add(key);

      error('%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, callback);
    }
  };

  warnOnUndefinedDerivedState = function (type, partialState) {
    if (partialState === undefined) {
      var componentName = getComponentNameFromType(type) || 'Component';

      if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
        didWarnAboutUndefinedDerivedState.add(componentName);

        error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', componentName);
      }
    }
  };
}

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && getComponentNameFromType(_constructor) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;

    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
      return;
    }

    error('%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);

    didWarnAboutNoopUpdateForComponent[warningKey] = true;
  }
}

var classComponentUpdater = {
  isMounted: function (inst) {
    return false;
  },
  enqueueSetState: function (inst, payload, callback) {
    var internals = get(inst);

    if (internals.queue === null) {
      warnNoop(inst, 'setState');
    } else {
      internals.queue.push(payload);

      {
        if (callback !== undefined && callback !== null) {
          warnOnInvalidCallback(callback, 'setState');
        }
      }
    }
  },
  enqueueReplaceState: function (inst, payload, callback) {
    var internals = get(inst);
    internals.replace = true;
    internals.queue = [payload];

    {
      if (callback !== undefined && callback !== null) {
        warnOnInvalidCallback(callback, 'setState');
      }
    }
  },
  enqueueForceUpdate: function (inst, callback) {
    var internals = get(inst);

    if (internals.queue === null) {
      warnNoop(inst, 'forceUpdate');
    } else {
      {
        if (callback !== undefined && callback !== null) {
          warnOnInvalidCallback(callback, 'setState');
        }
      }
    }
  }
};

function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
  var partialState = getDerivedStateFromProps(nextProps, prevState);

  {
    warnOnUndefinedDerivedState(ctor, partialState);
  } // Merge the partial state and the previous state.


  var newState = partialState === null || partialState === undefined ? prevState : assign({}, prevState, partialState);
  return newState;
}

function constructClassInstance(ctor, props, maskedLegacyContext) {
  var context = emptyContextObject;
  var contextType = ctor.contextType;

  {
    if ('contextType' in ctor) {
      var isValid = // Allow null for conditional declaration
      contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

      if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
        didWarnAboutInvalidateContextType.add(ctor);
        var addendum = '';

        if (contextType === undefined) {
          addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
        } else if (typeof contextType !== 'object') {
          addendum = ' However, it is set to a ' + typeof contextType + '.';
        } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
          addendum = ' Did you accidentally pass the Context.Provider instead?';
        } else if (contextType._context !== undefined) {
          // <Context.Consumer>
          addendum = ' Did you accidentally pass the Context.Consumer instead?';
        } else {
          addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
        }

        error('%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentNameFromType(ctor) || 'Component', addendum);
      }
    }
  }

  if (typeof contextType === 'object' && contextType !== null) {
    context = readContext(contextType);
  } else {
    context = maskedLegacyContext;
  }

  var instance = new ctor(props, context);

  {
    if (typeof ctor.getDerivedStateFromProps === 'function' && (instance.state === null || instance.state === undefined)) {
      var componentName = getComponentNameFromType(ctor) || 'Component';

      if (!didWarnAboutUninitializedState.has(componentName)) {
        didWarnAboutUninitializedState.add(componentName);

        error('`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, instance.state === null ? 'null' : 'undefined', componentName);
      }
    } // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Warn about these lifecycles if they are present.
    // Don't warn about react-lifecycles-compat polyfilled methods though.


    if (typeof ctor.getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function') {
      var foundWillMountName = null;
      var foundWillReceivePropsName = null;
      var foundWillUpdateName = null;

      if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true) {
        foundWillMountName = 'componentWillMount';
      } else if (typeof instance.UNSAFE_componentWillMount === 'function') {
        foundWillMountName = 'UNSAFE_componentWillMount';
      }

      if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
        foundWillReceivePropsName = 'componentWillReceiveProps';
      } else if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
      }

      if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
        foundWillUpdateName = 'componentWillUpdate';
      } else if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
        foundWillUpdateName = 'UNSAFE_componentWillUpdate';
      }

      if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
        var _componentName = getComponentNameFromType(ctor) || 'Component';

        var newApiName = typeof ctor.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';

        if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
          didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);

          error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + '%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n' + 'The above lifecycles should be removed. Learn more about this warning here:\n' + 'https://reactjs.org/link/unsafe-component-lifecycles', _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : '', foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : '', foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : '');
        }
      }
    }
  }

  return instance;
}

function checkClassInstance(instance, ctor, newProps) {
  {
    var name = getComponentNameFromType(ctor) || 'Component';
    var renderPresent = instance.render;

    if (!renderPresent) {
      if (ctor.prototype && typeof ctor.prototype.render === 'function') {
        error('%s(...): No `render` method found on the returned component ' + 'instance: did you accidentally return an object from the constructor?', name);
      } else {
        error('%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', name);
      }
    }

    if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
      error('getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', name);
    }

    if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', name);
    }

    if (instance.propTypes) {
      error('propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', name);
    }

    if (instance.contextType) {
      error('contextType was defined as an instance property on %s. Use a static ' + 'property to define contextType instead.', name);
    }

    {
      if (instance.contextTypes) {
        error('contextTypes was defined as an instance property on %s. Use a static ' + 'property to define contextTypes instead.', name);
      }

      if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
        didWarnAboutContextTypeAndContextTypes.add(ctor);

        error('%s declares both contextTypes and contextType static properties. ' + 'The legacy contextTypes property will be ignored.', name);
      }
    }

    if (typeof instance.componentShouldUpdate === 'function') {
      error('%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', name);
    }

    if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== 'undefined') {
      error('%s has a method called shouldComponentUpdate(). ' + 'shouldComponentUpdate should not be used when extending React.PureComponent. ' + 'Please extend React.Component if shouldComponentUpdate is used.', getComponentNameFromType(ctor) || 'A pure component');
    }

    if (typeof instance.componentDidUnmount === 'function') {
      error('%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', name);
    }

    if (typeof instance.componentDidReceiveProps === 'function') {
      error('%s has a method called ' + 'componentDidReceiveProps(). But there is no such lifecycle method. ' + 'If you meant to update the state in response to changing props, ' + 'use componentWillReceiveProps(). If you meant to fetch data or ' + 'run side-effects or mutations after React has updated the UI, use componentDidUpdate().', name);
    }

    if (typeof instance.componentWillRecieveProps === 'function') {
      error('%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', name);
    }

    if (typeof instance.UNSAFE_componentWillRecieveProps === 'function') {
      error('%s has a method called ' + 'UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?', name);
    }

    var hasMutatedProps = instance.props !== newProps;

    if (instance.props !== undefined && hasMutatedProps) {
      error('%s(...): When calling super() in `%s`, make sure to pass ' + "up the same props that your component's constructor was passed.", name, name);
    }

    if (instance.defaultProps) {
      error('Setting defaultProps as an instance property on %s is not supported and will be ignored.' + ' Instead, define defaultProps as a static property on %s.', name, name);
    }

    if (typeof instance.getSnapshotBeforeUpdate === 'function' && typeof instance.componentDidUpdate !== 'function' && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
      didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);

      error('%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). ' + 'This component defines getSnapshotBeforeUpdate() only.', getComponentNameFromType(ctor));
    }

    if (typeof instance.getDerivedStateFromProps === 'function') {
      error('%s: getDerivedStateFromProps() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name);
    }

    if (typeof instance.getDerivedStateFromError === 'function') {
      error('%s: getDerivedStateFromError() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name);
    }

    if (typeof ctor.getSnapshotBeforeUpdate === 'function') {
      error('%s: getSnapshotBeforeUpdate() is defined as a static method ' + 'and will be ignored. Instead, declare it as an instance method.', name);
    }

    var _state = instance.state;

    if (_state && (typeof _state !== 'object' || isArray(_state))) {
      error('%s.state: must be set to an object or null', name);
    }

    if (typeof instance.getChildContext === 'function' && typeof ctor.childContextTypes !== 'object') {
      error('%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', name);
    }
  }
}

function callComponentWillMount(type, instance) {
  var oldState = instance.state;

  if (typeof instance.componentWillMount === 'function') {
    {
      if ( instance.componentWillMount.__suppressDeprecationWarning !== true) {
        var componentName = getComponentNameFromType(type) || 'Unknown';

        if (!didWarnAboutDeprecatedWillMount[componentName]) {
          warn( // keep this warning in sync with ReactStrictModeWarning.js
          'componentWillMount has been renamed, and is not recommended for use. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move code from componentWillMount to componentDidMount (preferred in most cases) ' + 'or the constructor.\n' + '\nPlease update the following components: %s', componentName);

          didWarnAboutDeprecatedWillMount[componentName] = true;
        }
      }
    }

    instance.componentWillMount();
  }

  if (typeof instance.UNSAFE_componentWillMount === 'function') {
    instance.UNSAFE_componentWillMount();
  }

  if (oldState !== instance.state) {
    {
      error('%s.componentWillMount(): Assigning directly to this.state is ' + "deprecated (except inside a component's " + 'constructor). Use setState instead.', getComponentNameFromType(type) || 'Component');
    }

    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
  }
}

function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
  if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
    var oldQueue = internalInstance.queue;
    var oldReplace = internalInstance.replace;
    internalInstance.queue = null;
    internalInstance.replace = false;

    if (oldReplace && oldQueue.length === 1) {
      inst.state = oldQueue[0];
    } else {
      var nextState = oldReplace ? oldQueue[0] : inst.state;
      var dontMutate = true;

      for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
        var partial = oldQueue[i];
        var partialState = typeof partial === 'function' ? partial.call(inst, nextState, props, maskedLegacyContext) : partial;

        if (partialState != null) {
          if (dontMutate) {
            dontMutate = false;
            nextState = assign({}, nextState, partialState);
          } else {
            assign(nextState, partialState);
          }
        }
      }

      inst.state = nextState;
    }
  } else {
    internalInstance.queue = null;
  }
} // Invokes the mount life-cycles on a previously never rendered instance.


function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
  {
    checkClassInstance(instance, ctor, newProps);
  }

  var initialState = instance.state !== undefined ? instance.state : null;
  instance.updater = classComponentUpdater;
  instance.props = newProps;
  instance.state = initialState; // We don't bother initializing the refs object on the server, since we're not going to resolve them anyway.
  // The internal instance will be used to manage updates that happen during this mount.

  var internalInstance = {
    queue: [],
    replace: false
  };
  set(instance, internalInstance);
  var contextType = ctor.contextType;

  if (typeof contextType === 'object' && contextType !== null) {
    instance.context = readContext(contextType);
  } else {
    instance.context = maskedLegacyContext;
  }

  {
    if (instance.state === newProps) {
      var componentName = getComponentNameFromType(ctor) || 'Component';

      if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
        didWarnAboutDirectlyAssigningPropsToState.add(componentName);

        error('%s: It is not recommended to assign props directly to state ' + "because updates to props won't be reflected in state. " + 'In most cases, it is better to use props directly.', componentName);
      }
    }
  }

  var getDerivedStateFromProps = ctor.getDerivedStateFromProps;

  if (typeof getDerivedStateFromProps === 'function') {
    instance.state = applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, initialState, newProps);
  } // In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.


  if (typeof ctor.getDerivedStateFromProps !== 'function' && typeof instance.getSnapshotBeforeUpdate !== 'function' && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
    callComponentWillMount(ctor, instance); // If we had additional state updates during this life-cycle, let's
    // process them now.

    processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext);
  }
}

// Ids are base 32 strings whose binary representation corresponds to the
// position of a node in a tree.
// Every time the tree forks into multiple children, we add additional bits to
// the left of the sequence that represent the position of the child within the
// current level of children.
//
//      00101       00010001011010101
//      ╰─┬─╯       ╰───────┬───────╯
//   Fork 5 of 20       Parent id
//
// The leading 0s are important. In the above example, you only need 3 bits to
// represent slot 5. However, you need 5 bits to represent all the forks at
// the current level, so we must account for the empty bits at the end.
//
// For this same reason, slots are 1-indexed instead of 0-indexed. Otherwise,
// the zeroth id at a level would be indistinguishable from its parent.
//
// If a node has only one child, and does not materialize an id (i.e. does not
// contain a useId hook), then we don't need to allocate any space in the
// sequence. It's treated as a transparent indirection. For example, these two
// trees produce the same ids:
//
// <>                          <>
//   <Indirection>               <A />
//     <A />                     <B />
//   </Indirection>            </>
//   <B />
// </>
//
// However, we cannot skip any node that materializes an id. Otherwise, a parent
// id that does not fork would be indistinguishable from its child id. For
// example, this tree does not fork, but the parent and child must have
// different ids.
//
// <Parent>
//   <Child />
// </Parent>
//
// To handle this scenario, every time we materialize an id, we allocate a
// new level with a single slot. You can think of this as a fork with only one
// prong, or an array of children with length 1.
//
// It's possible for the size of the sequence to exceed 32 bits, the max
// size for bitwise operations. When this happens, we make more room by
// converting the right part of the id to a string and storing it in an overflow
// variable. We use a base 32 string representation, because 32 is the largest
// power of 2 that is supported by toString(). We want the base to be large so
// that the resulting ids are compact, and we want the base to be a power of 2
// because every log2(base) bits corresponds to a single character, i.e. every
// log2(32) = 5 bits. That means we can lop bits off the end 5 at a time without
// affecting the final result.
var emptyTreeContext = {
  id: 1,
  overflow: ''
};
function getTreeId(context) {
  var overflow = context.overflow;
  var idWithLeadingBit = context.id;
  var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
  return id.toString(32) + overflow;
}
function pushTreeContext(baseContext, totalChildren, index) {
  var baseIdWithLeadingBit = baseContext.id;
  var baseOverflow = baseContext.overflow; // The leftmost 1 marks the end of the sequence, non-inclusive. It's not part
  // of the id; we use it to account for leading 0s.

  var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
  var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
  var slot = index + 1;
  var length = getBitLength(totalChildren) + baseLength; // 30 is the max length we can store without overflowing, taking into
  // consideration the leading 1 we use to mark the end of the sequence.

  if (length > 30) {
    // We overflowed the bitwise-safe range. Fall back to slower algorithm.
    // This branch assumes the length of the base id is greater than 5; it won't
    // work for smaller ids, because you need 5 bits per character.
    //
    // We encode the id in multiple steps: first the base id, then the
    // remaining digits.
    //
    // Each 5 bit sequence corresponds to a single base 32 character. So for
    // example, if the current id is 23 bits long, we can convert 20 of those
    // bits into a string of 4 characters, with 3 bits left over.
    //
    // First calculate how many bits in the base id represent a complete
    // sequence of characters.
    var numberOfOverflowBits = baseLength - baseLength % 5; // Then create a bitmask that selects only those bits.

    var newOverflowBits = (1 << numberOfOverflowBits) - 1; // Select the bits, and convert them to a base 32 string.

    var newOverflow = (baseId & newOverflowBits).toString(32); // Now we can remove those bits from the base id.

    var restOfBaseId = baseId >> numberOfOverflowBits;
    var restOfBaseLength = baseLength - numberOfOverflowBits; // Finally, encode the rest of the bits using the normal algorithm. Because
    // we made more room, this time it won't overflow.

    var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
    var restOfNewBits = slot << restOfBaseLength;
    var id = restOfNewBits | restOfBaseId;
    var overflow = newOverflow + baseOverflow;
    return {
      id: 1 << restOfLength | id,
      overflow: overflow
    };
  } else {
    // Normal path
    var newBits = slot << baseLength;

    var _id = newBits | baseId;

    var _overflow = baseOverflow;
    return {
      id: 1 << length | _id,
      overflow: _overflow
    };
  }
}

function getBitLength(number) {
  return 32 - clz32(number);
}

function getLeadingBit(id) {
  return 1 << getBitLength(id) - 1;
} // TODO: Math.clz32 is supported in Node 12+. Maybe we can drop the fallback.


var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback; // Count leading zeros.
// Based on:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

var log = Math.log;
var LN2 = Math.LN2;

function clz32Fallback(x) {
  var asUint = x >>> 0;

  if (asUint === 0) {
    return 32;
  }

  return 31 - (log(asUint) / LN2 | 0) | 0;
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var currentlyRenderingComponent = null;
var currentlyRenderingTask = null;
var firstWorkInProgressHook = null;
var workInProgressHook = null; // Whether the work-in-progress hook is a re-rendered hook

var isReRender = false; // Whether an update was scheduled during the currently executing render pass.

var didScheduleRenderPhaseUpdate = false; // Counts the number of useId hooks in this component

var localIdCounter = 0; // Lazily created map of render-phase updates

var renderPhaseUpdates = null; // Counter to prevent infinite loops.

var numberOfReRenders = 0;
var RE_RENDER_LIMIT = 25;
var isInHookUserCodeInDev = false; // In DEV, this is the name of the currently executing primitive hook

var currentHookNameInDev;

function resolveCurrentlyRenderingComponent() {
  if (currentlyRenderingComponent === null) {
    throw new Error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
  }

  {
    if (isInHookUserCodeInDev) {
      error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://reactjs.org/link/rules-of-hooks');
    }
  }

  return currentlyRenderingComponent;
}

function areHookInputsEqual(nextDeps, prevDeps) {
  if (prevDeps === null) {
    {
      error('%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
    }

    return false;
  }

  {
    // Don't bother comparing lengths in prod because these arrays should be
    // passed inline.
    if (nextDeps.length !== prevDeps.length) {
      error('The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + nextDeps.join(', ') + "]", "[" + prevDeps.join(', ') + "]");
    }
  }

  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (objectIs(nextDeps[i], prevDeps[i])) {
      continue;
    }

    return false;
  }

  return true;
}

function createHook() {
  if (numberOfReRenders > 0) {
    throw new Error('Rendered more hooks than during the previous render');
  }

  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}

function createWorkInProgressHook() {
  if (workInProgressHook === null) {
    // This is the first hook in the list
    if (firstWorkInProgressHook === null) {
      isReRender = false;
      firstWorkInProgressHook = workInProgressHook = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = firstWorkInProgressHook;
    }
  } else {
    if (workInProgressHook.next === null) {
      isReRender = false; // Append to the end of the list

      workInProgressHook = workInProgressHook.next = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = workInProgressHook.next;
    }
  }

  return workInProgressHook;
}

function prepareToUseHooks(task, componentIdentity) {
  currentlyRenderingComponent = componentIdentity;
  currentlyRenderingTask = task;

  {
    isInHookUserCodeInDev = false;
  } // The following should have already been reset
  // didScheduleRenderPhaseUpdate = false;
  // localIdCounter = 0;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;


  localIdCounter = 0;
}
function finishHooks(Component, props, children, refOrContext) {
  // This must be called after every function component to prevent hooks from
  // being used in classes.
  while (didScheduleRenderPhaseUpdate) {
    // Updates were scheduled during the render phase. They are stored in
    // the `renderPhaseUpdates` map. Call the component again, reusing the
    // work-in-progress hooks and applying the additional updates on top. Keep
    // restarting until no more updates are scheduled.
    didScheduleRenderPhaseUpdate = false;
    localIdCounter = 0;
    numberOfReRenders += 1; // Start over from the beginning of the list

    workInProgressHook = null;
    children = Component(props, refOrContext);
  }

  resetHooksState();
  return children;
}
function checkDidRenderIdHook() {
  // This should be called immediately after every finishHooks call.
  // Conceptually, it's part of the return value of finishHooks; it's only a
  // separate function to avoid using an array tuple.
  var didRenderIdHook = localIdCounter !== 0;
  return didRenderIdHook;
} // Reset the internal hooks state if an error occurs while rendering a component

function resetHooksState() {
  {
    isInHookUserCodeInDev = false;
  }

  currentlyRenderingComponent = null;
  currentlyRenderingTask = null;
  didScheduleRenderPhaseUpdate = false;
  firstWorkInProgressHook = null;
  numberOfReRenders = 0;
  renderPhaseUpdates = null;
  workInProgressHook = null;
}

function readContext$1(context) {
  {
    if (isInHookUserCodeInDev) {
      error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
    }
  }

  return readContext(context);
}

function useContext(context) {
  {
    currentHookNameInDev = 'useContext';
  }

  resolveCurrentlyRenderingComponent();
  return readContext(context);
}

function basicStateReducer(state, action) {
  // $FlowFixMe: Flow doesn't like mixed types
  return typeof action === 'function' ? action(state) : action;
}

function useState(initialState) {
  {
    currentHookNameInDev = 'useState';
  }

  return useReducer(basicStateReducer, // useReducer has a special case to support lazy useState initializers
  initialState);
}
function useReducer(reducer, initialArg, init) {
  {
    if (reducer !== basicStateReducer) {
      currentHookNameInDev = 'useReducer';
    }
  }

  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();

  if (isReRender) {
    // This is a re-render. Apply the new render phase updates to the previous
    // current hook.
    var queue = workInProgressHook.queue;
    var dispatch = queue.dispatch;

    if (renderPhaseUpdates !== null) {
      // Render phase updates are stored in a map of queue -> linked list
      var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

      if (firstRenderPhaseUpdate !== undefined) {
        renderPhaseUpdates.delete(queue);
        var newState = workInProgressHook.memoizedState;
        var update = firstRenderPhaseUpdate;

        do {
          // Process this render phase update. We don't have to check the
          // priority because it will always be the same as the current
          // render's.
          var action = update.action;

          {
            isInHookUserCodeInDev = true;
          }

          newState = reducer(newState, action);

          {
            isInHookUserCodeInDev = false;
          }

          update = update.next;
        } while (update !== null);

        workInProgressHook.memoizedState = newState;
        return [newState, dispatch];
      }
    }

    return [workInProgressHook.memoizedState, dispatch];
  } else {
    {
      isInHookUserCodeInDev = true;
    }

    var initialState;

    if (reducer === basicStateReducer) {
      // Special case for `useState`.
      initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
    } else {
      initialState = init !== undefined ? init(initialArg) : initialArg;
    }

    {
      isInHookUserCodeInDev = false;
    }

    workInProgressHook.memoizedState = initialState;

    var _queue = workInProgressHook.queue = {
      last: null,
      dispatch: null
    };

    var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);

    return [workInProgressHook.memoizedState, _dispatch];
  }
}

function useMemo(nextCreate, deps) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var nextDeps = deps === undefined ? null : deps;

  if (workInProgressHook !== null) {
    var prevState = workInProgressHook.memoizedState;

    if (prevState !== null) {
      if (nextDeps !== null) {
        var prevDeps = prevState[1];

        if (areHookInputsEqual(nextDeps, prevDeps)) {
          return prevState[0];
        }
      }
    }
  }

  {
    isInHookUserCodeInDev = true;
  }

  var nextValue = nextCreate();

  {
    isInHookUserCodeInDev = false;
  }

  workInProgressHook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

function useRef(initialValue) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var previousRef = workInProgressHook.memoizedState;

  if (previousRef === null) {
    var ref = {
      current: initialValue
    };

    {
      Object.seal(ref);
    }

    workInProgressHook.memoizedState = ref;
    return ref;
  } else {
    return previousRef;
  }
}

function useLayoutEffect(create, inputs) {
  {
    currentHookNameInDev = 'useLayoutEffect';

    error('useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://reactjs.org/link/uselayouteffect-ssr for common fixes.');
  }
}

function dispatchAction(componentIdentity, queue, action) {
  if (numberOfReRenders >= RE_RENDER_LIMIT) {
    throw new Error('Too many re-renders. React limits the number of renders to prevent ' + 'an infinite loop.');
  }

  if (componentIdentity === currentlyRenderingComponent) {
    // This is a render phase update. Stash it in a lazily-created map of
    // queue -> linked list of updates. After this render pass, we'll restart
    // and apply the stashed updates on top of the work-in-progress hook.
    didScheduleRenderPhaseUpdate = true;
    var update = {
      action: action,
      next: null
    };

    if (renderPhaseUpdates === null) {
      renderPhaseUpdates = new Map();
    }

    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

    if (firstRenderPhaseUpdate === undefined) {
      renderPhaseUpdates.set(queue, update);
    } else {
      // Append the update to the end of the list.
      var lastRenderPhaseUpdate = firstRenderPhaseUpdate;

      while (lastRenderPhaseUpdate.next !== null) {
        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
      }

      lastRenderPhaseUpdate.next = update;
    }
  }
}

function useCallback(callback, deps) {
  return useMemo(function () {
    return callback;
  }, deps);
} // TODO Decide on how to implement this hook for server rendering.
// If a mutation occurs during render, consider triggering a Suspense boundary
// and falling back to client rendering.

function useMutableSource(source, getSnapshot, subscribe) {
  resolveCurrentlyRenderingComponent();
  return getSnapshot(source._source);
}

function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  if (getServerSnapshot === undefined) {
    throw new Error('Missing getServerSnapshot, which is required for ' + 'server-rendered content. Will revert to client rendering.');
  }

  return getServerSnapshot();
}

function useDeferredValue(value) {
  resolveCurrentlyRenderingComponent();
  return value;
}

function unsupportedStartTransition() {
  throw new Error('startTransition cannot be called during server rendering.');
}

function useTransition() {
  resolveCurrentlyRenderingComponent();
  return [false, unsupportedStartTransition];
}

function useId() {
  var task = currentlyRenderingTask;
  var treeId = getTreeId(task.treeContext);
  var responseState = currentResponseState;

  if (responseState === null) {
    throw new Error('Invalid hook call. Hooks can only be called inside of the body of a function component.');
  }

  var localId = localIdCounter++;
  return makeId(responseState, treeId, localId);
}

function noop() {}

var Dispatcher = {
  readContext: readContext$1,
  useContext: useContext,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  useInsertionEffect: noop,
  useLayoutEffect: useLayoutEffect,
  useCallback: useCallback,
  // useImperativeHandle is not run in the server environment
  useImperativeHandle: noop,
  // Effects are not run in the server environment.
  useEffect: noop,
  // Debugging effect
  useDebugValue: noop,
  useDeferredValue: useDeferredValue,
  useTransition: useTransition,
  useId: useId,
  // Subscriptions are not setup in a server environment.
  useMutableSource: useMutableSource,
  useSyncExternalStore: useSyncExternalStore
};

var currentResponseState = null;
function setCurrentResponseState(responseState) {
  currentResponseState = responseState;
}

function getStackByComponentStackNode(componentStack) {
  try {
    var info = '';
    var node = componentStack;

    do {
      switch (node.tag) {
        case 0:
          info += describeBuiltInComponentFrame(node.type, null, null);
          break;

        case 1:
          info += describeFunctionComponentFrame(node.type, null, null);
          break;

        case 2:
          info += describeClassComponentFrame(node.type, null, null);
          break;
      }

      node = node.parent;
    } while (node);

    return info;
  } catch (x) {
    return '\nError generating stack: ' + x.message + '\n' + x.stack;
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
var PENDING = 0;
var COMPLETED = 1;
var FLUSHED = 2;
var ABORTED = 3;
var ERRORED = 4;
var OPEN = 0;
var CLOSING = 1;
var CLOSED = 2;
// This is a default heuristic for how to split up the HTML content into progressive
// loading. Our goal is to be able to display additional new content about every 500ms.
// Faster than that is unnecessary and should be throttled on the client. It also
// adds unnecessary overhead to do more splits. We don't know if it's a higher or lower
// end device but higher end suffer less from the overhead than lower end does from
// not getting small enough pieces. We error on the side of low end.
// We base this on low end 3G speeds which is about 500kbits per second. We assume
// that there can be a reasonable drop off from max bandwidth which leaves you with
// as little as 80%. We can receive half of that each 500ms - at best. In practice,
// a little bandwidth is lost to processing and contention - e.g. CSS and images that
// are downloaded along with the main content. So we estimate about half of that to be
// the lower end throughput. In other words, we expect that you can at least show
// about 12.5kb of content per 500ms. Not counting starting latency for the first
// paint.
// 500 * 1024 / 8 * .8 * 0.5 / 2
var DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;

function defaultErrorHandler(error) {
  console['error'](error); // Don't transform to our wrapper
}

function noop$1() {}

function createRequest(children, responseState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError) {
  var pingedTasks = [];
  var abortSet = new Set();
  var request = {
    destination: null,
    responseState: responseState,
    progressiveChunkSize: progressiveChunkSize === undefined ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
    status: OPEN,
    fatalError: null,
    nextSegmentId: 0,
    allPendingTasks: 0,
    pendingRootTasks: 0,
    completedRootSegment: null,
    abortableTasks: abortSet,
    pingedTasks: pingedTasks,
    clientRenderedBoundaries: [],
    completedBoundaries: [],
    partialBoundaries: [],
    onError: onError === undefined ? defaultErrorHandler : onError,
    onAllReady: onAllReady === undefined ? noop$1 : onAllReady,
    onShellReady: onShellReady === undefined ? noop$1 : onShellReady,
    onShellError: onShellError === undefined ? noop$1 : onShellError,
    onFatalError: onFatalError === undefined ? noop$1 : onFatalError
  }; // This segment represents the root fallback.

  var rootSegment = createPendingSegment(request, 0, null, rootFormatContext); // There is no parent so conceptually, we're unblocked to flush this segment.

  rootSegment.parentFlushed = true;
  var rootTask = createTask(request, children, null, rootSegment, abortSet, emptyContextObject, rootContextSnapshot, emptyTreeContext);
  pingedTasks.push(rootTask);
  return request;
}

function pingTask(request, task) {
  var pingedTasks = request.pingedTasks;
  pingedTasks.push(task);

  if (pingedTasks.length === 1) {
    scheduleWork(function () {
      return performWork(request);
    });
  }
}

function createSuspenseBoundary(request, fallbackAbortableTasks) {
  return {
    id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
    rootSegmentID: -1,
    parentFlushed: false,
    pendingTasks: 0,
    forceClientRender: false,
    completedSegments: [],
    byteSize: 0,
    fallbackAbortableTasks: fallbackAbortableTasks
  };
}

function createTask(request, node, blockedBoundary, blockedSegment, abortSet, legacyContext, context, treeContext) {
  request.allPendingTasks++;

  if (blockedBoundary === null) {
    request.pendingRootTasks++;
  } else {
    blockedBoundary.pendingTasks++;
  }

  var task = {
    node: node,
    ping: function () {
      return pingTask(request, task);
    },
    blockedBoundary: blockedBoundary,
    blockedSegment: blockedSegment,
    abortSet: abortSet,
    legacyContext: legacyContext,
    context: context,
    treeContext: treeContext
  };

  {
    task.componentStack = null;
  }

  abortSet.add(task);
  return task;
}

function createPendingSegment(request, index, boundary, formatContext) {
  return {
    status: PENDING,
    id: -1,
    // lazily assigned later
    index: index,
    parentFlushed: false,
    chunks: [],
    children: [],
    formatContext: formatContext,
    boundary: boundary
  };
} // DEV-only global reference to the currently executing task


var currentTaskInDEV = null;

function getCurrentStackInDEV() {
  {
    if (currentTaskInDEV === null || currentTaskInDEV.componentStack === null) {
      return '';
    }

    return getStackByComponentStackNode(currentTaskInDEV.componentStack);
  }
}

function pushBuiltInComponentStackInDEV(task, type) {
  {
    task.componentStack = {
      tag: 0,
      parent: task.componentStack,
      type: type
    };
  }
}

function pushFunctionComponentStackInDEV(task, type) {
  {
    task.componentStack = {
      tag: 1,
      parent: task.componentStack,
      type: type
    };
  }
}

function pushClassComponentStackInDEV(task, type) {
  {
    task.componentStack = {
      tag: 2,
      parent: task.componentStack,
      type: type
    };
  }
}

function popComponentStackInDEV(task) {
  {
    if (task.componentStack === null) {
      error('Unexpectedly popped too many stack frames. This is a bug in React.');
    } else {
      task.componentStack = task.componentStack.parent;
    }
  }
}

function logRecoverableError(request, error) {
  // If this callback errors, we intentionally let that error bubble up to become a fatal error
  // so that someone fixes the error reporting instead of hiding it.
  var onError = request.onError;
  onError(error);
}

function fatalError(request, error) {
  // This is called outside error handling code such as if the root errors outside
  // a suspense boundary or if the root suspense boundary's fallback errors.
  // It's also called if React itself or its host configs errors.
  var onShellError = request.onShellError;
  onShellError(error);
  var onFatalError = request.onFatalError;
  onFatalError(error);

  if (request.destination !== null) {
    request.status = CLOSED;
    closeWithError(request.destination, error);
  } else {
    request.status = CLOSING;
    request.fatalError = error;
  }
}

function renderSuspenseBoundary(request, task, props) {
  pushBuiltInComponentStackInDEV(task, 'Suspense');
  var parentBoundary = task.blockedBoundary;
  var parentSegment = task.blockedSegment; // Each time we enter a suspense boundary, we split out into a new segment for
  // the fallback so that we can later replace that segment with the content.
  // This also lets us split out the main content even if it doesn't suspend,
  // in case it ends up generating a large subtree of content.

  var fallback = props.fallback;
  var content = props.children;
  var fallbackAbortSet = new Set();
  var newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
  var insertionIndex = parentSegment.chunks.length; // The children of the boundary segment is actually the fallback.

  var boundarySegment = createPendingSegment(request, insertionIndex, newBoundary, parentSegment.formatContext);
  parentSegment.children.push(boundarySegment); // This segment is the actual child content. We can start rendering that immediately.

  var contentRootSegment = createPendingSegment(request, 0, null, parentSegment.formatContext); // We mark the root segment as having its parent flushed. It's not really flushed but there is
  // no parent segment so there's nothing to wait on.

  contentRootSegment.parentFlushed = true; // Currently this is running synchronously. We could instead schedule this to pingedTasks.
  // I suspect that there might be some efficiency benefits from not creating the suspended task
  // and instead just using the stack if possible.
  // TODO: Call this directly instead of messing with saving and restoring contexts.
  // We can reuse the current context and task to render the content immediately without
  // context switching. We just need to temporarily switch which boundary and which segment
  // we're writing to. If something suspends, it'll spawn new suspended task with that context.

  task.blockedBoundary = newBoundary;
  task.blockedSegment = contentRootSegment;

  try {
    // We use the safe form because we don't handle suspending here. Only error handling.
    renderNode(request, task, content);
    contentRootSegment.status = COMPLETED;
    queueCompletedSegment(newBoundary, contentRootSegment);

    if (newBoundary.pendingTasks === 0) {
      // This must have been the last segment we were waiting on. This boundary is now complete.
      // Therefore we won't need the fallback. We early return so that we don't have to create
      // the fallback.
      popComponentStackInDEV(task);
      return;
    }
  } catch (error) {
    contentRootSegment.status = ERRORED;
    logRecoverableError(request, error);
    newBoundary.forceClientRender = true; // We don't need to decrement any task numbers because we didn't spawn any new task.
    // We don't need to schedule any task because we know the parent has written yet.
    // We do need to fallthrough to create the fallback though.
  } finally {
    task.blockedBoundary = parentBoundary;
    task.blockedSegment = parentSegment;
  } // We create suspended task for the fallback because we don't want to actually work
  // on it yet in case we finish the main content, so we queue for later.


  var suspendedFallbackTask = createTask(request, fallback, parentBoundary, boundarySegment, fallbackAbortSet, task.legacyContext, task.context, task.treeContext);

  {
    suspendedFallbackTask.componentStack = task.componentStack;
  } // TODO: This should be queued at a separate lower priority queue so that we only work
  // on preparing fallbacks if we don't have any more main content to task on.


  request.pingedTasks.push(suspendedFallbackTask);
  popComponentStackInDEV(task);
}

function renderHostElement(request, task, type, props) {
  pushBuiltInComponentStackInDEV(task, type);
  var segment = task.blockedSegment;
  var children = pushStartInstance(segment.chunks, type, props, request.responseState, segment.formatContext);
  var prevContext = segment.formatContext;
  segment.formatContext = getChildFormatContext(prevContext, type, props); // We use the non-destructive form because if something suspends, we still
  // need to pop back up and finish this subtree of HTML.

  renderNode(request, task, children); // We expect that errors will fatal the whole task and that we don't need
  // the correct context. Therefore this is not in a finally.

  segment.formatContext = prevContext;
  pushEndInstance(segment.chunks, type);
  popComponentStackInDEV(task);
}

function shouldConstruct$1(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function renderWithHooks(request, task, Component, props, secondArg) {
  var componentIdentity = {};
  prepareToUseHooks(task, componentIdentity);
  var result = Component(props, secondArg);
  return finishHooks(Component, props, result, secondArg);
}

function finishClassComponent(request, task, instance, Component, props) {
  var nextChildren = instance.render();

  {
    if (instance.props !== props) {
      if (!didWarnAboutReassigningProps) {
        error('It looks like %s is reassigning its own `this.props` while rendering. ' + 'This is not supported and can lead to confusing bugs.', getComponentNameFromType(Component) || 'a component');
      }

      didWarnAboutReassigningProps = true;
    }
  }

  {
    var childContextTypes = Component.childContextTypes;

    if (childContextTypes !== null && childContextTypes !== undefined) {
      var previousContext = task.legacyContext;
      var mergedContext = processChildContext(instance, Component, previousContext, childContextTypes);
      task.legacyContext = mergedContext;
      renderNodeDestructive(request, task, nextChildren);
      task.legacyContext = previousContext;
      return;
    }
  }

  renderNodeDestructive(request, task, nextChildren);
}

function renderClassComponent(request, task, Component, props) {
  pushClassComponentStackInDEV(task, Component);
  var maskedContext =  getMaskedContext(Component, task.legacyContext) ;
  var instance = constructClassInstance(Component, props, maskedContext);
  mountClassInstance(instance, Component, props, maskedContext);
  finishClassComponent(request, task, instance, Component, props);
  popComponentStackInDEV(task);
}

var didWarnAboutBadClass = {};
var didWarnAboutModulePatternComponent = {};
var didWarnAboutContextTypeOnFunctionComponent = {};
var didWarnAboutGetDerivedStateOnFunctionComponent = {};
var didWarnAboutReassigningProps = false;
var didWarnAboutGenerators = false;
var didWarnAboutMaps = false;
var hasWarnedAboutUsingContextAsConsumer = false; // This would typically be a function component but we still support module pattern
// components for some reason.

function renderIndeterminateComponent(request, task, Component, props) {
  var legacyContext;

  {
    legacyContext = getMaskedContext(Component, task.legacyContext);
  }

  pushFunctionComponentStackInDEV(task, Component);

  {
    if (Component.prototype && typeof Component.prototype.render === 'function') {
      var componentName = getComponentNameFromType(Component) || 'Unknown';

      if (!didWarnAboutBadClass[componentName]) {
        error("The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', componentName, componentName);

        didWarnAboutBadClass[componentName] = true;
      }
    }
  }

  var value = renderWithHooks(request, task, Component, props, legacyContext);
  var hasId = checkDidRenderIdHook();

  {
    // Support for module components is deprecated and is removed behind a flag.
    // Whether or not it would crash later, we want to show a good message in DEV first.
    if (typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
      var _componentName = getComponentNameFromType(Component) || 'Unknown';

      if (!didWarnAboutModulePatternComponent[_componentName]) {
        error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName, _componentName, _componentName);

        didWarnAboutModulePatternComponent[_componentName] = true;
      }
    }
  }

  if ( // Run these checks in production only if the flag is off.
  // Eventually we'll delete this branch altogether.
   typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
    {
      var _componentName2 = getComponentNameFromType(Component) || 'Unknown';

      if (!didWarnAboutModulePatternComponent[_componentName2]) {
        error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName2, _componentName2, _componentName2);

        didWarnAboutModulePatternComponent[_componentName2] = true;
      }
    }

    mountClassInstance(value, Component, props, legacyContext);
    finishClassComponent(request, task, value, Component, props);
  } else {

    {
      validateFunctionComponentInDev(Component);
    } // We're now successfully past this task, and we don't have to pop back to
    // the previous task every again, so we can use the destructive recursive form.


    if (hasId) {
      // This component materialized an id. We treat this as its own level, with
      // a single "child" slot.
      var prevTreeContext = task.treeContext;
      var totalChildren = 1;
      var index = 0;
      task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);

      try {
        renderNodeDestructive(request, task, value);
      } finally {
        task.treeContext = prevTreeContext;
      }
    } else {
      renderNodeDestructive(request, task, value);
    }
  }

  popComponentStackInDEV(task);
}

function validateFunctionComponentInDev(Component) {
  {
    if (Component) {
      if (Component.childContextTypes) {
        error('%s(...): childContextTypes cannot be defined on a function component.', Component.displayName || Component.name || 'Component');
      }
    }

    if (typeof Component.getDerivedStateFromProps === 'function') {
      var _componentName3 = getComponentNameFromType(Component) || 'Unknown';

      if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
        error('%s: Function components do not support getDerivedStateFromProps.', _componentName3);

        didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
      }
    }

    if (typeof Component.contextType === 'object' && Component.contextType !== null) {
      var _componentName4 = getComponentNameFromType(Component) || 'Unknown';

      if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
        error('%s: Function components do not support contextType.', _componentName4);

        didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
      }
    }
  }
}

function resolveDefaultProps(Component, baseProps) {
  if (Component && Component.defaultProps) {
    // Resolve default props. Taken from ReactElement
    var props = assign({}, baseProps);
    var defaultProps = Component.defaultProps;

    for (var propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }

    return props;
  }

  return baseProps;
}

function renderForwardRef(request, task, type, props, ref) {
  pushFunctionComponentStackInDEV(task, type.render);
  var children = renderWithHooks(request, task, type.render, props, ref);
  var hasId = checkDidRenderIdHook();

  if (hasId) {
    // This component materialized an id. We treat this as its own level, with
    // a single "child" slot.
    var prevTreeContext = task.treeContext;
    var totalChildren = 1;
    var index = 0;
    task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);

    try {
      renderNodeDestructive(request, task, children);
    } finally {
      task.treeContext = prevTreeContext;
    }
  } else {
    renderNodeDestructive(request, task, children);
  }

  popComponentStackInDEV(task);
}

function renderMemo(request, task, type, props, ref) {
  var innerType = type.type;
  var resolvedProps = resolveDefaultProps(innerType, props);
  renderElement(request, task, innerType, resolvedProps, ref);
}

function renderContextConsumer(request, task, context, props) {
  // The logic below for Context differs depending on PROD or DEV mode. In
  // DEV mode, we create a separate object for Context.Consumer that acts
  // like a proxy to Context. This proxy object adds unnecessary code in PROD
  // so we use the old behaviour (Context.Consumer references Context) to
  // reduce size and overhead. The separate object references context via
  // a property called "_context", which also gives us the ability to check
  // in DEV mode if this property exists or not and warn if it does not.
  {
    if (context._context === undefined) {
      // This may be because it's a Context (rather than a Consumer).
      // Or it may be because it's older React where they're the same thing.
      // We only want to warn if we're sure it's a new React.
      if (context !== context.Consumer) {
        if (!hasWarnedAboutUsingContextAsConsumer) {
          hasWarnedAboutUsingContextAsConsumer = true;

          error('Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
        }
      }
    } else {
      context = context._context;
    }
  }

  var render = props.children;

  {
    if (typeof render !== 'function') {
      error('A context consumer was rendered with multiple children, or a child ' + "that isn't a function. A context consumer expects a single child " + 'that is a function. If you did pass a function, make sure there ' + 'is no trailing or leading whitespace around it.');
    }
  }

  var newValue = readContext(context);
  var newChildren = render(newValue);
  renderNodeDestructive(request, task, newChildren);
}

function renderContextProvider(request, task, type, props) {
  var context = type._context;
  var value = props.value;
  var children = props.children;
  var prevSnapshot;

  {
    prevSnapshot = task.context;
  }

  task.context = pushProvider(context, value);
  renderNodeDestructive(request, task, children);
  task.context = popProvider(context);

  {
    if (prevSnapshot !== task.context) {
      error('Popping the context provider did not return back to the original snapshot. This is a bug in React.');
    }
  }
}

function renderLazyComponent(request, task, lazyComponent, props, ref) {
  pushBuiltInComponentStackInDEV(task, 'Lazy');
  var payload = lazyComponent._payload;
  var init = lazyComponent._init;
  var Component = init(payload);
  var resolvedProps = resolveDefaultProps(Component, props);
  renderElement(request, task, Component, resolvedProps, ref);
  popComponentStackInDEV(task);
}

function renderElement(request, task, type, props, ref) {
  if (typeof type === 'function') {
    if (shouldConstruct$1(type)) {
      renderClassComponent(request, task, type, props);
      return;
    } else {
      renderIndeterminateComponent(request, task, type, props);
      return;
    }
  }

  if (typeof type === 'string') {
    renderHostElement(request, task, type, props);
    return;
  }

  switch (type) {
    // TODO: LegacyHidden acts the same as a fragment. This only works
    // because we currently assume that every instance of LegacyHidden is
    // accompanied by a host component wrapper. In the hidden mode, the host
    // component is given a `hidden` attribute, which ensures that the
    // initial HTML is not visible. To support the use of LegacyHidden as a
    // true fragment, without an extra DOM node, we would have to hide the
    // initial HTML in some other way.
    // TODO: Add REACT_OFFSCREEN_TYPE here too with the same capability.
    case REACT_LEGACY_HIDDEN_TYPE:
    case REACT_DEBUG_TRACING_MODE_TYPE:
    case REACT_STRICT_MODE_TYPE:
    case REACT_PROFILER_TYPE:
    case REACT_FRAGMENT_TYPE:
      {
        renderNodeDestructive(request, task, props.children);
        return;
      }

    case REACT_SUSPENSE_LIST_TYPE:
      {
        pushBuiltInComponentStackInDEV(task, 'SuspenseList'); // TODO: SuspenseList should control the boundaries.

        renderNodeDestructive(request, task, props.children);
        popComponentStackInDEV(task);
        return;
      }

    case REACT_SCOPE_TYPE:
      {

        throw new Error('ReactDOMServer does not yet support scope components.');
      }
    // eslint-disable-next-line-no-fallthrough

    case REACT_SUSPENSE_TYPE:
      {
        {
          renderSuspenseBoundary(request, task, props);
        }

        return;
      }
  }

  if (typeof type === 'object' && type !== null) {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        {
          renderForwardRef(request, task, type, props, ref);
          return;
        }

      case REACT_MEMO_TYPE:
        {
          renderMemo(request, task, type, props, ref);
          return;
        }

      case REACT_PROVIDER_TYPE:
        {
          renderContextProvider(request, task, type, props);
          return;
        }

      case REACT_CONTEXT_TYPE:
        {
          renderContextConsumer(request, task, type, props);
          return;
        }

      case REACT_LAZY_TYPE:
        {
          renderLazyComponent(request, task, type, props);
          return;
        }
    }
  }

  var info = '';

  {
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
    }
  }

  throw new Error('Element type is invalid: expected a string (for built-in ' + 'components) or a class/function (for composite components) ' + ("but got: " + (type == null ? type : typeof type) + "." + info));
}

function validateIterable(iterable, iteratorFn) {
  {
    // We don't support rendering Generators because it's a mutation.
    // See https://github.com/facebook/react/issues/12995
    if (typeof Symbol === 'function' && // $FlowFixMe Flow doesn't know about toStringTag
    iterable[Symbol.toStringTag] === 'Generator') {
      if (!didWarnAboutGenerators) {
        error('Using Generators as children is unsupported and will likely yield ' + 'unexpected results because enumerating a generator mutates it. ' + 'You may convert it to an array with `Array.from()` or the ' + '`[...spread]` operator before rendering. Keep in mind ' + 'you might need to polyfill these features for older browsers.');
      }

      didWarnAboutGenerators = true;
    } // Warn about using Maps as children


    if (iterable.entries === iteratorFn) {
      if (!didWarnAboutMaps) {
        error('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
      }

      didWarnAboutMaps = true;
    }
  }
} // This function by it self renders a node and consumes the task by mutating it
// to update the current execution state.


function renderNodeDestructive(request, task, node) {
  // Stash the node we're working on. We'll pick up from this task in case
  // something suspends.
  task.node = node; // Handle object types

  if (typeof node === 'object' && node !== null) {
    switch (node.$$typeof) {
      case REACT_ELEMENT_TYPE:
        {
          var element = node;
          var type = element.type;
          var props = element.props;
          var ref = element.ref;
          renderElement(request, task, type, props, ref);
          return;
        }

      case REACT_PORTAL_TYPE:
        throw new Error('Portals are not currently supported by the server renderer. ' + 'Render them conditionally so that they only appear on the client render.');
      // eslint-disable-next-line-no-fallthrough

      case REACT_LAZY_TYPE:
        {
          var lazyNode = node;
          var payload = lazyNode._payload;
          var init = lazyNode._init;
          var resolvedNode = init(payload);
          renderNodeDestructive(request, task, resolvedNode);
          return;
        }
    }

    if (isArray(node)) {
      renderChildrenArray(request, task, node);
      return;
    }

    var iteratorFn = getIteratorFn(node);

    if (iteratorFn) {
      {
        validateIterable(node, iteratorFn);
      }

      var iterator = iteratorFn.call(node);

      if (iterator) {
        // We need to know how many total children are in this set, so that we
        // can allocate enough id slots to acommodate them. So we must exhaust
        // the iterator before we start recursively rendering the children.
        // TODO: This is not great but I think it's inherent to the id
        // generation algorithm.
        var step = iterator.next(); // If there are not entries, we need to push an empty so we start by checking that.

        if (!step.done) {
          var children = [];

          do {
            children.push(step.value);
            step = iterator.next();
          } while (!step.done);

          renderChildrenArray(request, task, children);
          return;
        }

        return;
      }
    }

    var childString = Object.prototype.toString.call(node);
    throw new Error("Objects are not valid as a React child (found: " + (childString === '[object Object]' ? 'object with keys {' + Object.keys(node).join(', ') + '}' : childString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
  }

  if (typeof node === 'string') {
    pushTextInstance(task.blockedSegment.chunks, node, request.responseState);
    return;
  }

  if (typeof node === 'number') {
    pushTextInstance(task.blockedSegment.chunks, '' + node, request.responseState);
    return;
  }

  {
    if (typeof node === 'function') {
      error('Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.');
    }
  }
}

function renderChildrenArray(request, task, children) {
  var totalChildren = children.length;

  for (var i = 0; i < totalChildren; i++) {
    var prevTreeContext = task.treeContext;
    task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i);

    try {
      // We need to use the non-destructive form so that we can safely pop back
      // up and render the sibling if something suspends.
      renderNode(request, task, children[i]);
    } finally {
      task.treeContext = prevTreeContext;
    }
  }
}

function spawnNewSuspendedTask(request, task, x) {
  // Something suspended, we'll need to create a new segment and resolve it later.
  var segment = task.blockedSegment;
  var insertionIndex = segment.chunks.length;
  var newSegment = createPendingSegment(request, insertionIndex, null, segment.formatContext);
  segment.children.push(newSegment);
  var newTask = createTask(request, task.node, task.blockedBoundary, newSegment, task.abortSet, task.legacyContext, task.context, task.treeContext);

  {
    if (task.componentStack !== null) {
      // We pop one task off the stack because the node that suspended will be tried again,
      // which will add it back onto the stack.
      newTask.componentStack = task.componentStack.parent;
    }
  }

  var ping = newTask.ping;
  x.then(ping, ping);
} // This is a non-destructive form of rendering a node. If it suspends it spawns
// a new task and restores the context of this task to what it was before.


function renderNode(request, task, node) {
  // TODO: Store segment.children.length here and reset it in case something
  // suspended partially through writing something.
  // Snapshot the current context in case something throws to interrupt the
  // process.
  var previousFormatContext = task.blockedSegment.formatContext;
  var previousLegacyContext = task.legacyContext;
  var previousContext = task.context;
  var previousComponentStack = null;

  {
    previousComponentStack = task.componentStack;
  }

  try {
    return renderNodeDestructive(request, task, node);
  } catch (x) {
    resetHooksState();

    if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
      spawnNewSuspendedTask(request, task, x); // Restore the context. We assume that this will be restored by the inner
      // functions in case nothing throws so we don't use "finally" here.

      task.blockedSegment.formatContext = previousFormatContext;
      task.legacyContext = previousLegacyContext;
      task.context = previousContext; // Restore all active ReactContexts to what they were before.

      switchContext(previousContext);

      {
        task.componentStack = previousComponentStack;
      }

      return;
    } else {
      // Restore the context. We assume that this will be restored by the inner
      // functions in case nothing throws so we don't use "finally" here.
      task.blockedSegment.formatContext = previousFormatContext;
      task.legacyContext = previousLegacyContext;
      task.context = previousContext; // Restore all active ReactContexts to what they were before.

      switchContext(previousContext);

      {
        task.componentStack = previousComponentStack;
      } // We assume that we don't need the correct context.
      // Let's terminate the rest of the tree and don't render any siblings.


      throw x;
    }
  }
}

function erroredTask(request, boundary, segment, error) {
  // Report the error to a global handler.
  logRecoverableError(request, error);

  if (boundary === null) {
    fatalError(request, error);
  } else {
    boundary.pendingTasks--;

    if (!boundary.forceClientRender) {
      boundary.forceClientRender = true; // Regardless of what happens next, this boundary won't be displayed,
      // so we can flush it, if the parent already flushed.

      if (boundary.parentFlushed) {
        // We don't have a preference where in the queue this goes since it's likely
        // to error on the client anyway. However, intentionally client-rendered
        // boundaries should be flushed earlier so that they can start on the client.
        // We reuse the same queue for errors.
        request.clientRenderedBoundaries.push(boundary);
      }
    }
  }

  request.allPendingTasks--;

  if (request.allPendingTasks === 0) {
    var onAllReady = request.onAllReady;
    onAllReady();
  }
}

function abortTaskSoft(task) {
  // This aborts task without aborting the parent boundary that it blocks.
  // It's used for when we didn't need this task to complete the tree.
  // If task was needed, then it should use abortTask instead.
  var request = this;
  var boundary = task.blockedBoundary;
  var segment = task.blockedSegment;
  segment.status = ABORTED;
  finishedTask(request, boundary, segment);
}

function abortTask(task) {
  // This aborts the task and aborts the parent that it blocks, putting it into
  // client rendered mode.
  var request = this;
  var boundary = task.blockedBoundary;
  var segment = task.blockedSegment;
  segment.status = ABORTED;

  if (boundary === null) {
    request.allPendingTasks--; // We didn't complete the root so we have nothing to show. We can close
    // the request;

    if (request.status !== CLOSED) {
      request.status = CLOSED;

      if (request.destination !== null) {
        close(request.destination);
      }
    }
  } else {
    boundary.pendingTasks--;

    if (!boundary.forceClientRender) {
      boundary.forceClientRender = true;

      if (boundary.parentFlushed) {
        request.clientRenderedBoundaries.push(boundary);
      }
    } // If this boundary was still pending then we haven't already cancelled its fallbacks.
    // We'll need to abort the fallbacks, which will also error that parent boundary.


    boundary.fallbackAbortableTasks.forEach(abortTask, request);
    boundary.fallbackAbortableTasks.clear();
    request.allPendingTasks--;

    if (request.allPendingTasks === 0) {
      var onAllReady = request.onAllReady;
      onAllReady();
    }
  }
}

function queueCompletedSegment(boundary, segment) {
  if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null) {
    // This is an empty segment. There's nothing to write, so we can instead transfer the ID
    // to the child. That way any existing references point to the child.
    var childSegment = segment.children[0];
    childSegment.id = segment.id;
    childSegment.parentFlushed = true;

    if (childSegment.status === COMPLETED) {
      queueCompletedSegment(boundary, childSegment);
    }
  } else {
    var completedSegments = boundary.completedSegments;
    completedSegments.push(segment);
  }
}

function finishedTask(request, boundary, segment) {
  if (boundary === null) {
    if (segment.parentFlushed) {
      if (request.completedRootSegment !== null) {
        throw new Error('There can only be one root segment. This is a bug in React.');
      }

      request.completedRootSegment = segment;
    }

    request.pendingRootTasks--;

    if (request.pendingRootTasks === 0) {
      // We have completed the shell so the shell can't error anymore.
      request.onShellError = noop$1;
      var onShellReady = request.onShellReady;
      onShellReady();
    }
  } else {
    boundary.pendingTasks--;

    if (boundary.forceClientRender) ; else if (boundary.pendingTasks === 0) {
      // This must have been the last segment we were waiting on. This boundary is now complete.
      if (segment.parentFlushed) {
        // Our parent segment already flushed, so we need to schedule this segment to be emitted.
        // If it is a segment that was aborted, we'll write other content instead so we don't need
        // to emit it.
        if (segment.status === COMPLETED) {
          queueCompletedSegment(boundary, segment);
        }
      }

      if (boundary.parentFlushed) {
        // The segment might be part of a segment that didn't flush yet, but if the boundary's
        // parent flushed, we need to schedule the boundary to be emitted.
        request.completedBoundaries.push(boundary);
      } // We can now cancel any pending task on the fallback since we won't need to show it anymore.
      // This needs to happen after we read the parentFlushed flags because aborting can finish
      // work which can trigger user code, which can start flushing, which can change those flags.


      boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request);
      boundary.fallbackAbortableTasks.clear();
    } else {
      if (segment.parentFlushed) {
        // Our parent already flushed, so we need to schedule this segment to be emitted.
        // If it is a segment that was aborted, we'll write other content instead so we don't need
        // to emit it.
        if (segment.status === COMPLETED) {
          queueCompletedSegment(boundary, segment);
          var completedSegments = boundary.completedSegments;

          if (completedSegments.length === 1) {
            // This is the first time since we last flushed that we completed anything.
            // We can schedule this boundary to emit its partially completed segments early
            // in case the parent has already been flushed.
            if (boundary.parentFlushed) {
              request.partialBoundaries.push(boundary);
            }
          }
        }
      }
    }
  }

  request.allPendingTasks--;

  if (request.allPendingTasks === 0) {
    // This needs to be called at the very end so that we can synchronously write the result
    // in the callback if needed.
    var onAllReady = request.onAllReady;
    onAllReady();
  }
}

function retryTask(request, task) {
  var segment = task.blockedSegment;

  if (segment.status !== PENDING) {
    // We completed this by other means before we had a chance to retry it.
    return;
  } // We restore the context to what it was when we suspended.
  // We don't restore it after we leave because it's likely that we'll end up
  // needing a very similar context soon again.


  switchContext(task.context);
  var prevTaskInDEV = null;

  {
    prevTaskInDEV = currentTaskInDEV;
    currentTaskInDEV = task;
  }

  try {
    // We call the destructive form that mutates this task. That way if something
    // suspends again, we can reuse the same task instead of spawning a new one.
    renderNodeDestructive(request, task, task.node);
    task.abortSet.delete(task);
    segment.status = COMPLETED;
    finishedTask(request, task.blockedBoundary, segment);
  } catch (x) {
    resetHooksState();

    if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
      // Something suspended again, let's pick it back up later.
      var ping = task.ping;
      x.then(ping, ping);
    } else {
      task.abortSet.delete(task);
      segment.status = ERRORED;
      erroredTask(request, task.blockedBoundary, segment, x);
    }
  } finally {
    {
      currentTaskInDEV = prevTaskInDEV;
    }
  }
}

function performWork(request) {
  if (request.status === CLOSED) {
    return;
  }

  var prevContext = getActiveContext();
  var prevDispatcher = ReactCurrentDispatcher$1.current;
  ReactCurrentDispatcher$1.current = Dispatcher;
  var prevGetCurrentStackImpl;

  {
    prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
    ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
  }

  var prevResponseState = currentResponseState;
  setCurrentResponseState(request.responseState);

  try {
    var pingedTasks = request.pingedTasks;
    var i;

    for (i = 0; i < pingedTasks.length; i++) {
      var task = pingedTasks[i];
      retryTask(request, task);
    }

    pingedTasks.splice(0, i);

    if (request.destination !== null) {
      flushCompletedQueues(request, request.destination);
    }
  } catch (error) {
    logRecoverableError(request, error);
    fatalError(request, error);
  } finally {
    setCurrentResponseState(prevResponseState);
    ReactCurrentDispatcher$1.current = prevDispatcher;

    {
      ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
    }

    if (prevDispatcher === Dispatcher) {
      // This means that we were in a reentrant work loop. This could happen
      // in a renderer that supports synchronous work like renderToString,
      // when it's called from within another renderer.
      // Normally we don't bother switching the contexts to their root/default
      // values when leaving because we'll likely need the same or similar
      // context again. However, when we're inside a synchronous loop like this
      // we'll to restore the context to what it was before returning.
      switchContext(prevContext);
    }
  }
}

function flushSubtree(request, destination, segment) {
  segment.parentFlushed = true;

  switch (segment.status) {
    case PENDING:
      {
        // We're emitting a placeholder for this segment to be filled in later.
        // Therefore we'll need to assign it an ID - to refer to it by.
        var segmentID = segment.id = request.nextSegmentId++;
        return writePlaceholder(destination, request.responseState, segmentID);
      }

    case COMPLETED:
      {
        segment.status = FLUSHED;
        var r = true;
        var chunks = segment.chunks;
        var chunkIdx = 0;
        var children = segment.children;

        for (var childIdx = 0; childIdx < children.length; childIdx++) {
          var nextChild = children[childIdx]; // Write all the chunks up until the next child.

          for (; chunkIdx < nextChild.index; chunkIdx++) {
            writeChunk(destination, chunks[chunkIdx]);
          }

          r = flushSegment(request, destination, nextChild);
        } // Finally just write all the remaining chunks


        for (; chunkIdx < chunks.length - 1; chunkIdx++) {
          writeChunk(destination, chunks[chunkIdx]);
        }

        if (chunkIdx < chunks.length) {
          r = writeChunkAndReturn(destination, chunks[chunkIdx]);
        }

        return r;
      }

    default:
      {
        throw new Error('Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.');
      }
  }
}

function flushSegment(request, destination, segment) {
  var boundary = segment.boundary;

  if (boundary === null) {
    // Not a suspense boundary.
    return flushSubtree(request, destination, segment);
  }

  boundary.parentFlushed = true; // This segment is a Suspense boundary. We need to decide whether to
  // emit the content or the fallback now.

  if (boundary.forceClientRender) {
    // Emit a client rendered suspense boundary wrapper.
    // We never queue the inner boundary so we'll never emit its content or partial segments.
    writeStartClientRenderedSuspenseBoundary(destination, request.responseState); // Flush the fallback.

    flushSubtree(request, destination, segment);
    return writeEndClientRenderedSuspenseBoundary(destination, request.responseState);
  } else if (boundary.pendingTasks > 0) {
    // This boundary is still loading. Emit a pending suspense boundary wrapper.
    // Assign an ID to refer to the future content by.
    boundary.rootSegmentID = request.nextSegmentId++;

    if (boundary.completedSegments.length > 0) {
      // If this is at least partially complete, we can queue it to be partially emitted early.
      request.partialBoundaries.push(boundary);
    } /// This is the first time we should have referenced this ID.


    var id = boundary.id = assignSuspenseBoundaryID(request.responseState);
    writeStartPendingSuspenseBoundary(destination, request.responseState, id); // Flush the fallback.

    flushSubtree(request, destination, segment);
    return writeEndPendingSuspenseBoundary(destination, request.responseState);
  } else if (boundary.byteSize > request.progressiveChunkSize) {
    // This boundary is large and will be emitted separately so that we can progressively show
    // other content. We add it to the queue during the flush because we have to ensure that
    // the parent flushes first so that there's something to inject it into.
    // We also have to make sure that it's emitted into the queue in a deterministic slot.
    // I.e. we can't insert it here when it completes.
    // Assign an ID to refer to the future content by.
    boundary.rootSegmentID = request.nextSegmentId++;
    request.completedBoundaries.push(boundary); // Emit a pending rendered suspense boundary wrapper.

    writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id); // Flush the fallback.

    flushSubtree(request, destination, segment);
    return writeEndPendingSuspenseBoundary(destination, request.responseState);
  } else {
    // We can inline this boundary's content as a complete boundary.
    writeStartCompletedSuspenseBoundary(destination, request.responseState);
    var completedSegments = boundary.completedSegments;

    if (completedSegments.length !== 1) {
      throw new Error('A previously unvisited boundary must have exactly one root segment. This is a bug in React.');
    }

    var contentSegment = completedSegments[0];
    flushSegment(request, destination, contentSegment);
    return writeEndCompletedSuspenseBoundary(destination, request.responseState);
  }
}

function flushClientRenderedBoundary(request, destination, boundary) {
  return writeClientRenderBoundaryInstruction(destination, request.responseState, boundary.id);
}

function flushSegmentContainer(request, destination, segment) {
  writeStartSegment(destination, request.responseState, segment.formatContext, segment.id);
  flushSegment(request, destination, segment);
  return writeEndSegment(destination, segment.formatContext);
}

function flushCompletedBoundary(request, destination, boundary) {
  var completedSegments = boundary.completedSegments;
  var i = 0;

  for (; i < completedSegments.length; i++) {
    var segment = completedSegments[i];
    flushPartiallyCompletedSegment(request, destination, boundary, segment);
  }

  completedSegments.length = 0;
  return writeCompletedBoundaryInstruction(destination, request.responseState, boundary.id, boundary.rootSegmentID);
}

function flushPartialBoundary(request, destination, boundary) {
  var completedSegments = boundary.completedSegments;
  var i = 0;

  for (; i < completedSegments.length; i++) {
    var segment = completedSegments[i];

    if (!flushPartiallyCompletedSegment(request, destination, boundary, segment)) {
      i++;
      completedSegments.splice(0, i); // Only write as much as the buffer wants. Something higher priority
      // might want to write later.

      return false;
    }
  }

  completedSegments.splice(0, i);
  return true;
}

function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
  if (segment.status === FLUSHED) {
    // We've already flushed this inline.
    return true;
  }

  var segmentID = segment.id;

  if (segmentID === -1) {
    // This segment wasn't previously referred to. This happens at the root of
    // a boundary. We make kind of a leap here and assume this is the root.
    var rootSegmentID = segment.id = boundary.rootSegmentID;

    if (rootSegmentID === -1) {
      throw new Error('A root segment ID must have been assigned by now. This is a bug in React.');
    }

    return flushSegmentContainer(request, destination, segment);
  } else {
    flushSegmentContainer(request, destination, segment);
    return writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
  }
}

function flushCompletedQueues(request, destination) {
  beginWriting();

  try {
    // The structure of this is to go through each queue one by one and write
    // until the sink tells us to stop. When we should stop, we still finish writing
    // that item fully and then yield. At that point we remove the already completed
    // items up until the point we completed them.
    // TODO: Emit preloading.
    // TODO: It's kind of unfortunate to keep checking this array after we've already
    // emitted the root.
    var completedRootSegment = request.completedRootSegment;

    if (completedRootSegment !== null && request.pendingRootTasks === 0) {
      flushSegment(request, destination, completedRootSegment);
      request.completedRootSegment = null;
      writeCompletedRoot(destination, request.responseState);
    } // We emit client rendering instructions for already emitted boundaries first.
    // This is so that we can signal to the client to start client rendering them as
    // soon as possible.


    var clientRenderedBoundaries = request.clientRenderedBoundaries;
    var i;

    for (i = 0; i < clientRenderedBoundaries.length; i++) {
      var boundary = clientRenderedBoundaries[i];

      if (!flushClientRenderedBoundary(request, destination, boundary)) {
        request.destination = null;
        i++;
        clientRenderedBoundaries.splice(0, i);
        return;
      }
    }

    clientRenderedBoundaries.splice(0, i); // Next we emit any complete boundaries. It's better to favor boundaries
    // that are completely done since we can actually show them, than it is to emit
    // any individual segments from a partially complete boundary.

    var completedBoundaries = request.completedBoundaries;

    for (i = 0; i < completedBoundaries.length; i++) {
      var _boundary = completedBoundaries[i];

      if (!flushCompletedBoundary(request, destination, _boundary)) {
        request.destination = null;
        i++;
        completedBoundaries.splice(0, i);
        return;
      }
    }

    completedBoundaries.splice(0, i); // Allow anything written so far to flush to the underlying sink before
    // we continue with lower priorities.

    completeWriting(destination);
    beginWriting(destination); // TODO: Here we'll emit data used by hydration.
    // Next we emit any segments of any boundaries that are partially complete
    // but not deeply complete.

    var partialBoundaries = request.partialBoundaries;

    for (i = 0; i < partialBoundaries.length; i++) {
      var _boundary2 = partialBoundaries[i];

      if (!flushPartialBoundary(request, destination, _boundary2)) {
        request.destination = null;
        i++;
        partialBoundaries.splice(0, i);
        return;
      }
    }

    partialBoundaries.splice(0, i); // Next we check the completed boundaries again. This may have had
    // boundaries added to it in case they were too larged to be inlined.
    // New ones might be added in this loop.

    var largeBoundaries = request.completedBoundaries;

    for (i = 0; i < largeBoundaries.length; i++) {
      var _boundary3 = largeBoundaries[i];

      if (!flushCompletedBoundary(request, destination, _boundary3)) {
        request.destination = null;
        i++;
        largeBoundaries.splice(0, i);
        return;
      }
    }

    largeBoundaries.splice(0, i);
  } finally {
    completeWriting(destination);
    flushBuffered(destination);

    if (request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0 // We don't need to check any partially completed segments because
    // either they have pending task or they're complete.
    ) {
        {
          if (request.abortableTasks.size !== 0) {
            error('There was still abortable task at the root when we closed. This is a bug in React.');
          }
        } // We're done.


        close(destination);
      }
  }
}

function startWork(request) {
  scheduleWork(function () {
    return performWork(request);
  });
}
function startFlowing(request, destination) {
  if (request.status === CLOSING) {
    request.status = CLOSED;
    closeWithError(destination, request.fatalError);
    return;
  }

  if (request.status === CLOSED) {
    return;
  }

  if (request.destination !== null) {
    // We're already flowing.
    return;
  }

  request.destination = destination;

  try {
    flushCompletedQueues(request, destination);
  } catch (error) {
    logRecoverableError(request, error);
    fatalError(request, error);
  }
} // This is called to early terminate a request. It puts all pending boundaries in client rendered state.

function abort(request) {
  try {
    var abortableTasks = request.abortableTasks;
    abortableTasks.forEach(abortTask, request);
    abortableTasks.clear();

    if (request.destination !== null) {
      flushCompletedQueues(request, request.destination);
    }
  } catch (error) {
    logRecoverableError(request, error);
    fatalError(request, error);
  }
}

function createDrainHandler(destination, request) {
  return function () {
    return startFlowing(request, destination);
  };
}

function createAbortHandler(request) {
  return function () {
    return abort(request);
  };
}

function createRequestImpl(children, options) {
  return createRequest(children, createResponseState(options ? options.identifierPrefix : undefined, options ? options.nonce : undefined, options ? options.bootstrapScriptContent : undefined, options ? options.bootstrapScripts : undefined, options ? options.bootstrapModules : undefined), createRootFormatContext(options ? options.namespaceURI : undefined), options ? options.progressiveChunkSize : undefined, options ? options.onError : undefined, options ? options.onAllReady : undefined, options ? options.onShellReady : undefined, options ? options.onShellError : undefined, undefined);
}

function renderToPipeableStream(children, options) {
  var request = createRequestImpl(children, options);
  var hasStartedFlowing = false;
  startWork(request);
  return {
    pipe: function (destination) {
      if (hasStartedFlowing) {
        throw new Error('React currently only supports piping to one writable stream.');
      }

      hasStartedFlowing = true;
      startFlowing(request, destination);
      destination.on('drain', createDrainHandler(destination, request));
      destination.on('close', createAbortHandler(request));
      return destination;
    },
    abort: function () {
      abort(request);
    }
  };
}

exports.renderToPipeableStream = renderToPipeableStream;
exports.version = ReactVersion;
  })();
}


/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Native
const {promisify} = __webpack_require__(9);
const path = __webpack_require__(13);
const {createHash} = __webpack_require__(14);
const {realpath, lstat, createReadStream, readdir} = __webpack_require__(15);

// Packages
const url = __webpack_require__(16);
const slasher = __webpack_require__(19);
const minimatch = __webpack_require__(20);
const pathToRegExp = __webpack_require__(24);
const mime = __webpack_require__(25);
const bytes = __webpack_require__(28);
const contentDisposition = __webpack_require__(29);
const isPathInside = __webpack_require__(30);
const parseRange = __webpack_require__(31);

// Other
const directoryTemplate = __webpack_require__(32);
const errorTemplate = __webpack_require__(33);

const etags = new Map();

const calculateSha = (handlers, absolutePath) =>
	new Promise((resolve, reject) => {
		const hash = createHash('sha1');
		hash.update(path.extname(absolutePath));
		hash.update('-');
		const rs = handlers.createReadStream(absolutePath);
		rs.on('error', reject);
		rs.on('data', buf => hash.update(buf));
		rs.on('end', () => {
			const sha = hash.digest('hex');
			resolve(sha);
		});
	});

const sourceMatches = (source, requestPath, allowSegments) => {
	const keys = [];
	const slashed = slasher(source);
	const resolvedPath = path.posix.resolve(requestPath);

	let results = null;

	if (allowSegments) {
		const normalized = slashed.replace('*', '(.*)');
		const expression = pathToRegExp(normalized, keys);

		results = expression.exec(resolvedPath);

		if (!results) {
			// clear keys so that they are not used
			// later with empty results. this may
			// happen if minimatch returns true
			keys.length = 0;
		}
	}

	if (results || minimatch(resolvedPath, slashed)) {
		return {
			keys,
			results
		};
	}

	return null;
};

const toTarget = (source, destination, previousPath) => {
	const matches = sourceMatches(source, previousPath, true);

	if (!matches) {
		return null;
	}

	const {keys, results} = matches;

	const props = {};
	const {protocol} = url.parse(destination);
	const normalizedDest = protocol ? destination : slasher(destination);
	const toPath = pathToRegExp.compile(normalizedDest);

	for (let index = 0; index < keys.length; index++) {
		const {name} = keys[index];
		props[name] = results[index + 1];
	}

	return toPath(props);
};

const applyRewrites = (requestPath, rewrites = [], repetitive) => {
	// We need to copy the array, since we're going to modify it.
	const rewritesCopy = rewrites.slice();

	// If the method was called again, the path was already rewritten
	// so we need to make sure to return it.
	const fallback = repetitive ? requestPath : null;

	if (rewritesCopy.length === 0) {
		return fallback;
	}

	for (let index = 0; index < rewritesCopy.length; index++) {
		const {source, destination} = rewrites[index];
		const target = toTarget(source, destination, requestPath);

		if (target) {
			// Remove rules that were already applied
			rewritesCopy.splice(index, 1);

			// Check if there are remaining ones to be applied
			return applyRewrites(slasher(target), rewritesCopy, true);
		}
	}

	return fallback;
};

const ensureSlashStart = target => (target.startsWith('/') ? target : `/${target}`);

const shouldRedirect = (decodedPath, {redirects = [], trailingSlash}, cleanUrl) => {
	const slashing = typeof trailingSlash === 'boolean';
	const defaultType = 301;
	const matchHTML = /(\.html|\/index)$/g;

	if (redirects.length === 0 && !slashing && !cleanUrl) {
		return null;
	}

	// By stripping the HTML parts from the decoded
	// path *before* handling the trailing slash, we make
	// sure that only *one* redirect occurs if both
	// config options are used.
	if (cleanUrl && matchHTML.test(decodedPath)) {
		decodedPath = decodedPath.replace(matchHTML, '');
		if (decodedPath.indexOf('//') > -1) {
			decodedPath = decodedPath.replace(/\/+/g, '/');
		}
		return {
			target: ensureSlashStart(decodedPath),
			statusCode: defaultType
		};
	}

	if (slashing) {
		const {ext, name} = path.parse(decodedPath);
		const isTrailed = decodedPath.endsWith('/');
		const isDotfile = name.startsWith('.');

		let target = null;

		if (!trailingSlash && isTrailed) {
			target = decodedPath.slice(0, -1);
		} else if (trailingSlash && !isTrailed && !ext && !isDotfile) {
			target = `${decodedPath}/`;
		}

		if (decodedPath.indexOf('//') > -1) {
			target = decodedPath.replace(/\/+/g, '/');
		}

		if (target) {
			return {
				target: ensureSlashStart(target),
				statusCode: defaultType
			};
		}
	}

	// This is currently the fastest way to
	// iterate over an array
	for (let index = 0; index < redirects.length; index++) {
		const {source, destination, type} = redirects[index];
		const target = toTarget(source, destination, decodedPath);

		if (target) {
			return {
				target,
				statusCode: type || defaultType
			};
		}
	}

	return null;
};

const appendHeaders = (target, source) => {
	for (let index = 0; index < source.length; index++) {
		const {key, value} = source[index];
		target[key] = value;
	}
};

const getHeaders = async (handlers, config, current, absolutePath, stats) => {
	const {headers: customHeaders = [], etag = false} = config;
	const related = {};
	const {base} = path.parse(absolutePath);
	const relativePath = path.relative(current, absolutePath);

	if (customHeaders.length > 0) {
		// By iterating over all headers and never stopping, developers
		// can specify multiple header sources in the config that
		// might match a single path.
		for (let index = 0; index < customHeaders.length; index++) {
			const {source, headers} = customHeaders[index];

			if (sourceMatches(source, slasher(relativePath))) {
				appendHeaders(related, headers);
			}
		}
	}

	let defaultHeaders = {};

	if (stats) {
		defaultHeaders = {
			'Content-Length': stats.size,
			// Default to "inline", which always tries to render in the browser,
			// if that's not working, it will save the file. But to be clear: This
			// only happens if it cannot find a appropiate value.
			'Content-Disposition': contentDisposition(base, {
				type: 'inline'
			}),
			'Accept-Ranges': 'bytes'
		};

		if (etag) {
			let [mtime, sha] = etags.get(absolutePath) || [];
			if (Number(mtime) !== Number(stats.mtime)) {
				sha = await calculateSha(handlers, absolutePath);
				etags.set(absolutePath, [stats.mtime, sha]);
			}
			defaultHeaders['ETag'] = `"${sha}"`;
		} else {
			defaultHeaders['Last-Modified'] = stats.mtime.toUTCString();
		}

		const contentType = mime.contentType(base);

		if (contentType) {
			defaultHeaders['Content-Type'] = contentType;
		}
	}

	const headers = Object.assign(defaultHeaders, related);

	for (const key in headers) {
		if (headers.hasOwnProperty(key) && headers[key] === null) {
			delete headers[key];
		}
	}

	return headers;
};

const applicable = (decodedPath, configEntry) => {
	if (typeof configEntry === 'boolean') {
		return configEntry;
	}

	if (Array.isArray(configEntry)) {
		for (let index = 0; index < configEntry.length; index++) {
			const source = configEntry[index];

			if (sourceMatches(source, decodedPath)) {
				return true;
			}
		}

		return false;
	}

	return true;
};

const getPossiblePaths = (relativePath, extension) => [
	path.join(relativePath, `index${extension}`),
	relativePath.endsWith('/') ? relativePath.replace(/\/$/g, extension) : (relativePath + extension)
].filter(item => path.basename(item) !== extension);

const findRelated = async (current, relativePath, rewrittenPath, originalStat) => {
	const possible = rewrittenPath ? [rewrittenPath] : getPossiblePaths(relativePath, '.html');

	let stats = null;

	for (let index = 0; index < possible.length; index++) {
		const related = possible[index];
		const absolutePath = path.join(current, related);

		try {
			stats = await originalStat(absolutePath);
		} catch (err) {
			if (err.code !== 'ENOENT' && err.code !== 'ENOTDIR') {
				throw err;
			}
		}

		if (stats) {
			return {
				stats,
				absolutePath
			};
		}
	}

	return null;
};

const canBeListed = (excluded, file) => {
	const slashed = slasher(file);
	let whether = true;

	for (let mark = 0; mark < excluded.length; mark++) {
		const source = excluded[mark];

		if (sourceMatches(source, slashed)) {
			whether = false;
			break;
		}
	}

	return whether;
};

const renderDirectory = async (current, acceptsJSON, handlers, methods, config, paths) => {
	const {directoryListing, trailingSlash, unlisted = [], renderSingle} = config;
	const slashSuffix = typeof trailingSlash === 'boolean' ? (trailingSlash ? '/' : '') : '/';
	const {relativePath, absolutePath} = paths;

	const excluded = [
		'.DS_Store',
		'.git',
		...unlisted
	];

	if (!applicable(relativePath, directoryListing) && !renderSingle) {
		return {};
	}

	let files = await handlers.readdir(absolutePath);

	const canRenderSingle = renderSingle && (files.length === 1);

	for (let index = 0; index < files.length; index++) {
		const file = files[index];

		const filePath = path.resolve(absolutePath, file);
		const details = path.parse(filePath);

		// It's important to indicate that the `stat` call was
		// spawned by the directory listing, as Now is
		// simulating those calls and needs to special-case this.
		let stats = null;

		if (methods.lstat) {
			stats = await handlers.lstat(filePath, true);
		} else {
			stats = await handlers.lstat(filePath);
		}

		details.relative = path.join(relativePath, details.base);

		if (stats.isDirectory()) {
			details.base += slashSuffix;
			details.relative += slashSuffix;
			details.type = 'folder';
		} else {
			if (canRenderSingle) {
				return {
					singleFile: true,
					absolutePath: filePath,
					stats
				};
			}

			details.ext = details.ext.split('.')[1] || 'txt';
			details.type = 'file';

			details.size = bytes(stats.size, {
				unitSeparator: ' ',
				decimalPlaces: 0
			});
		}

		details.title = details.base;

		if (canBeListed(excluded, file)) {
			files[index] = details;
		} else {
			delete files[index];
		}
	}

	const toRoot = path.relative(current, absolutePath);
	const directory = path.join(path.basename(current), toRoot, slashSuffix);
	const pathParts = directory.split(path.sep).filter(Boolean);

	// Sort to list directories first, then sort alphabetically
	files = files.sort((a, b) => {
		const aIsDir = a.type === 'directory';
		const bIsDir = b.type === 'directory';

		/* istanbul ignore next */
		if (aIsDir && !bIsDir) {
			return -1;
		}

		if ((bIsDir && !aIsDir) || (a.base > b.base)) {
			return 1;
		}

		/* istanbul ignore next */
		if (a.base < b.base) {
			return -1;
		}

		/* istanbul ignore next */
		return 0;
	}).filter(Boolean);

	// Add parent directory to the head of the sorted files array
	if (toRoot.length > 0) {
		const directoryPath = [...pathParts].slice(1);
		const relative = path.join('/', ...directoryPath, '..', slashSuffix);

		files.unshift({
			type: 'directory',
			base: '..',
			relative,
			title: relative,
			ext: ''
		});
	}

	const subPaths = [];

	for (let index = 0; index < pathParts.length; index++) {
		const parents = [];
		const isLast = index === (pathParts.length - 1);

		let before = 0;

		while (before <= index) {
			parents.push(pathParts[before]);
			before++;
		}

		parents.shift();

		subPaths.push({
			name: pathParts[index] + (isLast ? slashSuffix : '/'),
			url: index === 0 ? '' : parents.join('/') + slashSuffix
		});
	}

	const spec = {
		files,
		directory,
		paths: subPaths
	};

	const output = acceptsJSON ? JSON.stringify(spec) : directoryTemplate(spec);

	return {directory: output};
};

const sendError = async (absolutePath, response, acceptsJSON, current, handlers, config, spec) => {
	const {err: original, message, code, statusCode} = spec;

	/* istanbul ignore next */
	if (original && process.env.NODE_ENV !== 'test') {
		console.error(original);
	}

	response.statusCode = statusCode;

	if (acceptsJSON) {
		response.setHeader('Content-Type', 'application/json; charset=utf-8');

		response.end(JSON.stringify({
			error: {
				code,
				message
			}
		}));

		return;
	}

	let stats = null;

	const errorPage = path.join(current, `${statusCode}.html`);

	try {
		stats = await handlers.lstat(errorPage);
	} catch (err) {
		if (err.code !== 'ENOENT') {
			console.error(err);
		}
	}

	if (stats) {
		let stream = null;

		try {
			stream = await handlers.createReadStream(errorPage);

			const headers = await getHeaders(handlers, config, current, errorPage, stats);

			response.writeHead(statusCode, headers);
			stream.pipe(response);

			return;
		} catch (err) {
			console.error(err);
		}
	}

	const headers = await getHeaders(handlers, config, current, absolutePath, null);
	headers['Content-Type'] = 'text/html; charset=utf-8';

	response.writeHead(statusCode, headers);
	response.end(errorTemplate({statusCode, message}));
};

const internalError = async (...args) => {
	const lastIndex = args.length - 1;
	const err = args[lastIndex];

	args[lastIndex] = {
		statusCode: 500,
		code: 'internal_server_error',
		message: 'A server error has occurred',
		err
	};

	return sendError(...args);
};

const getHandlers = methods => Object.assign({
	lstat: promisify(lstat),
	realpath: promisify(realpath),
	createReadStream,
	readdir: promisify(readdir),
	sendError
}, methods);

module.exports = async (request, response, config = {}, methods = {}) => {
	const cwd = process.cwd();
	const current = config.public ? path.resolve(cwd, config.public) : cwd;
	const handlers = getHandlers(methods);

	let relativePath = null;
	let acceptsJSON = null;

	if (request.headers.accept) {
		acceptsJSON = request.headers.accept.includes('application/json');
	}

	try {
		relativePath = decodeURIComponent(url.parse(request.url).pathname);
	} catch (err) {
		return sendError('/', response, acceptsJSON, current, handlers, config, {
			statusCode: 400,
			code: 'bad_request',
			message: 'Bad Request'
		});
	}

	let absolutePath = path.join(current, relativePath);

	// Prevent path traversal vulnerabilities. We could do this
	// by ourselves, but using the package covers all the edge cases.
	if (!isPathInside(absolutePath, current)) {
		return sendError(absolutePath, response, acceptsJSON, current, handlers, config, {
			statusCode: 400,
			code: 'bad_request',
			message: 'Bad Request'
		});
	}

	const cleanUrl = applicable(relativePath, config.cleanUrls);
	const redirect = shouldRedirect(relativePath, config, cleanUrl);

	if (redirect) {
		response.writeHead(redirect.statusCode, {
			Location: encodeURI(redirect.target)
		});

		response.end();
		return;
	}

	let stats = null;

	// It's extremely important that we're doing multiple stat calls. This one
	// right here could technically be removed, but then the program
	// would be slower. Because for directories, we always want to see if a related file
	// exists and then (after that), fetch the directory itself if no
	// related file was found. However (for files, of which most have extensions), we should
	// always stat right away.
	//
	// When simulating a file system without directory indexes, calculating whether a
	// directory exists requires loading all the file paths and then checking if
	// one of them includes the path of the directory. As that's a very
	// performance-expensive thing to do, we need to ensure it's not happening if not really necessary.

	if (path.extname(relativePath) !== '') {
		try {
			stats = await handlers.lstat(absolutePath);
		} catch (err) {
			if (err.code !== 'ENOENT' && err.code !== 'ENOTDIR') {
				return internalError(absolutePath, response, acceptsJSON, current, handlers, config, err);
			}
		}
	}

	const rewrittenPath = applyRewrites(relativePath, config.rewrites);

	if (!stats && (cleanUrl || rewrittenPath)) {
		try {
			const related = await findRelated(current, relativePath, rewrittenPath, handlers.lstat);

			if (related) {
				({stats, absolutePath} = related);
			}
		} catch (err) {
			if (err.code !== 'ENOENT' && err.code !== 'ENOTDIR') {
				return internalError(absolutePath, response, acceptsJSON, current, handlers, config, err);
			}
		}
	}

	if (!stats) {
		try {
			stats = await handlers.lstat(absolutePath);
		} catch (err) {
			if (err.code !== 'ENOENT' && err.code !== 'ENOTDIR') {
				return internalError(absolutePath, response, acceptsJSON, current, handlers, config, err);
			}
		}
	}

	if (stats && stats.isDirectory()) {
		let directory = null;
		let singleFile = null;

		try {
			const related = await renderDirectory(current, acceptsJSON, handlers, methods, config, {
				relativePath,
				absolutePath
			});

			if (related.singleFile) {
				({stats, absolutePath, singleFile} = related);
			} else {
				({directory} = related);
			}
		} catch (err) {
			if (err.code !== 'ENOENT') {
				return internalError(absolutePath, response, acceptsJSON, current, handlers, config, err);
			}
		}

		if (directory) {
			const contentType = acceptsJSON ? 'application/json; charset=utf-8' : 'text/html; charset=utf-8';

			response.statusCode = 200;
			response.setHeader('Content-Type', contentType);
			response.end(directory);

			return;
		}

		if (!singleFile) {
			// The directory listing is disabled, so we want to
			// render a 404 error.
			stats = null;
		}
	}

	const isSymLink = stats && stats.isSymbolicLink();

	// There are two scenarios in which we want to reply with
	// a 404 error: Either the path does not exist, or it is a
	// symlink while the `symlinks` option is disabled (which it is by default).
	if (!stats || (!config.symlinks && isSymLink)) {
		// allow for custom 404 handling
		return handlers.sendError(absolutePath, response, acceptsJSON, current, handlers, config, {
			statusCode: 404,
			code: 'not_found',
			message: 'The requested path could not be found'
		});
	}

	// If we figured out that the target is a symlink, we need to
	// resolve the symlink and run a new `stat` call just for the
	// target of that symlink.
	if (isSymLink) {
		absolutePath = await handlers.realpath(absolutePath);
		stats = await handlers.lstat(absolutePath);
	}

	const streamOpts = {};

	// TODO ? if-range
	if (request.headers.range && stats.size) {
		const range = parseRange(stats.size, request.headers.range);

		if (typeof range === 'object' && range.type === 'bytes') {
			const {start, end} = range[0];

			streamOpts.start = start;
			streamOpts.end = end;

			response.statusCode = 206;
		} else {
			response.statusCode = 416;
			response.setHeader('Content-Range', `bytes */${stats.size}`);
		}
	}

	// TODO ? multiple ranges

	let stream = null;

	try {
		stream = await handlers.createReadStream(absolutePath, streamOpts);
	} catch (err) {
		return internalError(absolutePath, response, acceptsJSON, current, handlers, config, err);
	}

	const headers = await getHeaders(handlers, config, current, absolutePath, stats);

	// eslint-disable-next-line no-undefined
	if (streamOpts.start !== undefined && streamOpts.end !== undefined) {
		headers['Content-Range'] = `bytes ${streamOpts.start}-${streamOpts.end}/${stats.size}`;
		headers['Content-Length'] = streamOpts.end - streamOpts.start + 1;
	}

	// We need to check for `headers.ETag` being truthy first, otherwise it will
	// match `undefined` being equal to `undefined`, which is true.
	//
	// Checking for `undefined` and `null` is also important, because `Range` can be `0`.
	//
	// eslint-disable-next-line no-eq-null
	if (request.headers.range == null && headers.ETag && headers.ETag === request.headers['if-none-match']) {
		response.statusCode = 304;
		response.end();

		return;
	}

	response.writeHead(response.statusCode || 200, headers);
	stream.pipe(response);
};


/***/ }),
/* 13 */
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),
/* 14 */
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),
/* 15 */
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/*
Copyright (c) 2014 Petka Antonov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
function Url() {
    //For more efficient internal representation and laziness.
    //The non-underscore versions of these properties are accessor functions
    //defined on the prototype.
    this._protocol = null;
    this._href = "";
    this._port = -1;
    this._query = null;

    this.auth = null;
    this.slashes = null;
    this.host = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.pathname = null;

    this._prependSlash = false;
}

var querystring = __webpack_require__(17);

Url.queryString = querystring;

Url.prototype.parse =
function Url$parse(str, parseQueryString, hostDenotesSlash, disableAutoEscapeChars) {
    if (typeof str !== "string") {
        throw new TypeError("Parameter 'url' must be a string, not " +
            typeof str);
    }
    var start = 0;
    var end = str.length - 1;

    //Trim leading and trailing ws
    while (str.charCodeAt(start) <= 0x20 /*' '*/) start++;
    while (str.charCodeAt(end) <= 0x20 /*' '*/) end--;

    start = this._parseProtocol(str, start, end);

    //Javascript doesn't have host
    if (this._protocol !== "javascript") {
        start = this._parseHost(str, start, end, hostDenotesSlash);
        var proto = this._protocol;
        if (!this.hostname &&
            (this.slashes || (proto && !slashProtocols[proto]))) {
            this.hostname = this.host = "";
        }
    }

    if (start <= end) {
        var ch = str.charCodeAt(start);

        if (ch === 0x2F /*'/'*/ || ch === 0x5C /*'\'*/) {
            this._parsePath(str, start, end, disableAutoEscapeChars);
        }
        else if (ch === 0x3F /*'?'*/) {
            this._parseQuery(str, start, end, disableAutoEscapeChars);
        }
        else if (ch === 0x23 /*'#'*/) {
          this._parseHash(str, start, end, disableAutoEscapeChars);
        }
        else if (this._protocol !== "javascript") {
            this._parsePath(str, start, end, disableAutoEscapeChars);
        }
        else { //For javascript the pathname is just the rest of it
            this.pathname = str.slice(start, end + 1 );
        }

    }

    if (!this.pathname && this.hostname &&
        this._slashProtocols[this._protocol]) {
        this.pathname = "/";
    }

    if (parseQueryString) {
        var search = this.search;
        if (search == null) {
            search = this.search = "";
        }
        if (search.charCodeAt(0) === 0x3F /*'?'*/) {
            search = search.slice(1);
        }
        //This calls a setter function, there is no .query data property
        this.query = Url.queryString.parse(search);
    }
};

Url.prototype.resolve = function Url$resolve(relative) {
    return this.resolveObject(Url.parse(relative, false, true)).format();
};

Url.prototype.format = function Url$format() {
    var auth = this.auth || "";

    if (auth) {
        auth = encodeURIComponent(auth);
        auth = auth.replace(/%3A/i, ":");
        auth += "@";
    }

    var protocol = this.protocol || "";
    var pathname = this.pathname || "";
    var hash = this.hash || "";
    var search = this.search || "";
    var query = "";
    var hostname = this.hostname || "";
    var port = this.port || "";
    var host = false;
    var scheme = "";

    //Cache the result of the getter function
    var q = this.query;
    if (q && typeof q === "object") {
        query = Url.queryString.stringify(q);
    }

    if (!search) {
        search = query ? "?" + query : "";
    }

    if (protocol && protocol.charCodeAt(protocol.length - 1) !== 0x3A /*':'*/)
        protocol += ":";

    if (this.host) {
        host = auth + this.host;
    }
    else if (hostname) {
        var ip6 = hostname.indexOf(":") > -1;
        if (ip6) hostname = "[" + hostname + "]";
        host = auth + hostname + (port ? ":" + port : "");
    }

    var slashes = this.slashes ||
        ((!protocol ||
        slashProtocols[protocol]) && host !== false);


    if (protocol) scheme = protocol + (slashes ? "//" : "");
    else if (slashes) scheme = "//";

    if (slashes && pathname && pathname.charCodeAt(0) !== 0x2F /*'/'*/) {
        pathname = "/" + pathname;
    }
    if (search && search.charCodeAt(0) !== 0x3F /*'?'*/)
        search = "?" + search;
    if (hash && hash.charCodeAt(0) !== 0x23 /*'#'*/)
        hash = "#" + hash;

    pathname = escapePathName(pathname);
    search = escapeSearch(search);

    return scheme + (host === false ? "" : host) + pathname + search + hash;
};

Url.prototype.resolveObject = function Url$resolveObject(relative) {
    if (typeof relative === "string")
        relative = Url.parse(relative, false, true);

    var result = this._clone();

    // hash is always overridden, no matter what.
    // even href="" will remove it.
    result.hash = relative.hash;

    // if the relative url is empty, then there"s nothing left to do here.
    if (!relative.href) {
        result._href = "";
        return result;
    }

    // hrefs like //foo/bar always cut to the protocol.
    if (relative.slashes && !relative._protocol) {
        relative._copyPropsTo(result, true);

        if (slashProtocols[result._protocol] &&
            result.hostname && !result.pathname) {
            result.pathname = "/";
        }
        result._href = "";
        return result;
    }

    if (relative._protocol && relative._protocol !== result._protocol) {
        // if it"s a known url protocol, then changing
        // the protocol does weird things
        // first, if it"s not file:, then we MUST have a host,
        // and if there was a path
        // to begin with, then we MUST have a path.
        // if it is file:, then the host is dropped,
        // because that"s known to be hostless.
        // anything else is assumed to be absolute.
        if (!slashProtocols[relative._protocol]) {
            relative._copyPropsTo(result, false);
            result._href = "";
            return result;
        }

        result._protocol = relative._protocol;
        if (!relative.host && relative._protocol !== "javascript") {
            var relPath = (relative.pathname || "").split("/");
            while (relPath.length && !(relative.host = relPath.shift()));
            if (!relative.host) relative.host = "";
            if (!relative.hostname) relative.hostname = "";
            if (relPath[0] !== "") relPath.unshift("");
            if (relPath.length < 2) relPath.unshift("");
            result.pathname = relPath.join("/");
        } else {
            result.pathname = relative.pathname;
        }

        result.search = relative.search;
        result.host = relative.host || "";
        result.auth = relative.auth;
        result.hostname = relative.hostname || relative.host;
        result._port = relative._port;
        result.slashes = result.slashes || relative.slashes;
        result._href = "";
        return result;
    }

    var isSourceAbs =
        (result.pathname && result.pathname.charCodeAt(0) === 0x2F /*'/'*/);
    var isRelAbs = (
            relative.host ||
            (relative.pathname &&
            relative.pathname.charCodeAt(0) === 0x2F /*'/'*/)
        );
    var mustEndAbs = (isRelAbs || isSourceAbs ||
                        (result.host && relative.pathname));

    var removeAllDots = mustEndAbs;

    var srcPath = result.pathname && result.pathname.split("/") || [];
    var relPath = relative.pathname && relative.pathname.split("/") || [];
    var psychotic = result._protocol && !slashProtocols[result._protocol];

    // if the url is a non-slashed url, then relative
    // links like ../.. should be able
    // to crawl up to the hostname, as well.  This is strange.
    // result.protocol has already been set by now.
    // Later on, put the first path part into the host field.
    if (psychotic) {
        result.hostname = "";
        result._port = -1;
        if (result.host) {
            if (srcPath[0] === "") srcPath[0] = result.host;
            else srcPath.unshift(result.host);
        }
        result.host = "";
        if (relative._protocol) {
            relative.hostname = "";
            relative._port = -1;
            if (relative.host) {
                if (relPath[0] === "") relPath[0] = relative.host;
                else relPath.unshift(relative.host);
            }
            relative.host = "";
        }
        mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
    }

    if (isRelAbs) {
        // it"s absolute.
        result.host = relative.host ?
            relative.host : result.host;
        result.hostname = relative.hostname ?
            relative.hostname : result.hostname;
        result.search = relative.search;
        srcPath = relPath;
        // fall through to the dot-handling below.
    } else if (relPath.length) {
        // it"s relative
        // throw away the existing file, and take the new path instead.
        if (!srcPath) srcPath = [];
        srcPath.pop();
        srcPath = srcPath.concat(relPath);
        result.search = relative.search;
    } else if (relative.search) {
        // just pull out the search.
        // like href="?foo".
        // Put this after the other two cases because it simplifies the booleans
        if (psychotic) {
            result.hostname = result.host = srcPath.shift();
            //occationaly the auth can get stuck only in host
            //this especialy happens in cases like
            //url.resolveObject("mailto:local1@domain1", "local2@domain2")
            var authInHost = result.host && result.host.indexOf("@") > 0 ?
                result.host.split("@") : false;
            if (authInHost) {
                result.auth = authInHost.shift();
                result.host = result.hostname = authInHost.shift();
            }
        }
        result.search = relative.search;
        result._href = "";
        return result;
    }

    if (!srcPath.length) {
        // no path at all.  easy.
        // we"ve already handled the other stuff above.
        result.pathname = null;
        result._href = "";
        return result;
    }

    // if a url ENDs in . or .., then it must get a trailing slash.
    // however, if it ends in anything else non-slashy,
    // then it must NOT get a trailing slash.
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (
        (result.host || relative.host) && (last === "." || last === "..") ||
        last === "");

    // strip single dots, resolve double dots to parent dir
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = srcPath.length; i >= 0; i--) {
        last = srcPath[i];
        if (last === ".") {
            srcPath.splice(i, 1);
        } else if (last === "..") {
            srcPath.splice(i, 1);
            up++;
        } else if (up) {
            srcPath.splice(i, 1);
            up--;
        }
    }

    // if the path is allowed to go above the root, restore leading ..s
    if (!mustEndAbs && !removeAllDots) {
        for (; up--; up) {
            srcPath.unshift("..");
        }
    }

    if (mustEndAbs && srcPath[0] !== "" &&
        (!srcPath[0] || srcPath[0].charCodeAt(0) !== 0x2F /*'/'*/)) {
        srcPath.unshift("");
    }

    if (hasTrailingSlash && (srcPath.join("/").substr(-1) !== "/")) {
        srcPath.push("");
    }

    var isAbsolute = srcPath[0] === "" ||
        (srcPath[0] && srcPath[0].charCodeAt(0) === 0x2F /*'/'*/);

    // put the host back
    if (psychotic) {
        result.hostname = result.host = isAbsolute ? "" :
            srcPath.length ? srcPath.shift() : "";
        //occationaly the auth can get stuck only in host
        //this especialy happens in cases like
        //url.resolveObject("mailto:local1@domain1", "local2@domain2")
        var authInHost = result.host && result.host.indexOf("@") > 0 ?
            result.host.split("@") : false;
        if (authInHost) {
            result.auth = authInHost.shift();
            result.host = result.hostname = authInHost.shift();
        }
    }

    mustEndAbs = mustEndAbs || (result.host && srcPath.length);

    if (mustEndAbs && !isAbsolute) {
        srcPath.unshift("");
    }

    result.pathname = srcPath.length === 0 ? null : srcPath.join("/");
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result._href = "";
    return result;
};

var punycode = __webpack_require__(18);
Url.prototype._hostIdna = function Url$_hostIdna(hostname) {
    // IDNA Support: Returns a punycoded representation of "domain".
    // It only converts parts of the domain name that
    // have non-ASCII characters, i.e. it doesn't matter if
    // you call it with a domain that already is ASCII-only.
    return punycode.toASCII(hostname);
};

var escapePathName = Url.prototype._escapePathName =
function Url$_escapePathName(pathname) {
    if (!containsCharacter2(pathname, 0x23 /*'#'*/, 0x3F /*'?'*/)) {
        return pathname;
    }
    //Avoid closure creation to keep this inlinable
    return _escapePath(pathname);
};

var escapeSearch = Url.prototype._escapeSearch =
function Url$_escapeSearch(search) {
    if (!containsCharacter2(search, 0x23 /*'#'*/, -1)) return search;
    //Avoid closure creation to keep this inlinable
    return _escapeSearch(search);
};

Url.prototype._parseProtocol = function Url$_parseProtocol(str, start, end) {
    var doLowerCase = false;
    var protocolCharacters = this._protocolCharacters;

    for (var i = start; i <= end; ++i) {
        var ch = str.charCodeAt(i);

        if (ch === 0x3A /*':'*/) {
            var protocol = str.slice(start, i);
            if (doLowerCase) protocol = protocol.toLowerCase();
            this._protocol = protocol;
            return i + 1;
        }
        else if (protocolCharacters[ch] === 1) {
            if (ch < 0x61 /*'a'*/)
                doLowerCase = true;
        }
        else {
            return start;
        }

    }
    return start;
};

Url.prototype._parseAuth = function Url$_parseAuth(str, start, end, decode) {
    var auth = str.slice(start, end + 1);
    if (decode) {
        auth = decodeURIComponent(auth);
    }
    this.auth = auth;
};

Url.prototype._parsePort = function Url$_parsePort(str, start, end) {
    //Internal format is integer for more efficient parsing
    //and for efficient trimming of leading zeros
    var port = 0;
    //Distinguish between :0 and : (no port number at all)
    var hadChars = false;
    var validPort = true;

    for (var i = start; i <= end; ++i) {
        var ch = str.charCodeAt(i);

        if (0x30 /*'0'*/ <= ch && ch <= 0x39 /*'9'*/) {
            port = (10 * port) + (ch - 0x30 /*'0'*/);
            hadChars = true;
        }
        else {
            validPort = false;
            if (ch === 0x5C/*'\'*/ || ch === 0x2F/*'/'*/) {
                validPort = true;
            }
            break;
        }

    }
    if ((port === 0 && !hadChars) || !validPort) {
        if (!validPort) {
            this._port = -2;
        }
        return 0;
    }

    this._port = port;
    return i - start;
};

Url.prototype._parseHost =
function Url$_parseHost(str, start, end, slashesDenoteHost) {
    var hostEndingCharacters = this._hostEndingCharacters;
    var first = str.charCodeAt(start);
    var second = str.charCodeAt(start + 1);
    if ((first === 0x2F /*'/'*/ || first === 0x5C /*'\'*/) &&
        (second === 0x2F /*'/'*/ || second === 0x5C /*'\'*/)) {
        this.slashes = true;

        //The string starts with //
        if (start === 0) {
            //The string is just "//"
            if (end < 2) return start;
            //If slashes do not denote host and there is no auth,
            //there is no host when the string starts with //
            var hasAuth =
                containsCharacter(str, 0x40 /*'@'*/, 2, hostEndingCharacters);
            if (!hasAuth && !slashesDenoteHost) {
                this.slashes = null;
                return start;
            }
        }
        //There is a host that starts after the //
        start += 2;
    }
    //If there is no slashes, there is no hostname if
    //1. there was no protocol at all
    else if (!this._protocol ||
        //2. there was a protocol that requires slashes
        //e.g. in 'http:asd' 'asd' is not a hostname
        slashProtocols[this._protocol]
    ) {
        return start;
    }

    var doLowerCase = false;
    var idna = false;
    var hostNameStart = start;
    var hostNameEnd = end;
    var lastCh = -1;
    var portLength = 0;
    var charsAfterDot = 0;
    var authNeedsDecoding = false;

    var j = -1;

    //Find the last occurrence of an @-sign until hostending character is met
    //also mark if decoding is needed for the auth portion
    for (var i = start; i <= end; ++i) {
        var ch = str.charCodeAt(i);

        if (ch === 0x40 /*'@'*/) {
            j = i;
        }
        //This check is very, very cheap. Unneeded decodeURIComponent is very
        //very expensive
        else if (ch === 0x25 /*'%'*/) {
            authNeedsDecoding = true;
        }
        else if (hostEndingCharacters[ch] === 1) {
            break;
        }
    }

    //@-sign was found at index j, everything to the left from it
    //is auth part
    if (j > -1) {
        this._parseAuth(str, start, j - 1, authNeedsDecoding);
        //hostname starts after the last @-sign
        start = hostNameStart = j + 1;
    }

    //Host name is starting with a [
    if (str.charCodeAt(start) === 0x5B /*'['*/) {
        for (var i = start + 1; i <= end; ++i) {
            var ch = str.charCodeAt(i);

            //Assume valid IP6 is between the brackets
            if (ch === 0x5D /*']'*/) {
                if (str.charCodeAt(i + 1) === 0x3A /*':'*/) {
                    portLength = this._parsePort(str, i + 2, end) + 1;
                }
                var hostname = str.slice(start + 1, i).toLowerCase();
                this.hostname = hostname;
                this.host = this._port > 0 ?
                    "[" + hostname + "]:" + this._port :
                    "[" + hostname + "]";
                this.pathname = "/";
                return i + portLength + 1;
            }
        }
        //Empty hostname, [ starts a path
        return start;
    }

    for (var i = start; i <= end; ++i) {
        if (charsAfterDot > 62) {
            this.hostname = this.host = str.slice(start, i);
            return i;
        }
        var ch = str.charCodeAt(i);

        if (ch === 0x3A /*':'*/) {
            portLength = this._parsePort(str, i + 1, end) + 1;
            hostNameEnd = i - 1;
            break;
        }
        else if (ch < 0x61 /*'a'*/) {
            if (ch === 0x2E /*'.'*/) {
                //Node.js ignores this error
                /*
                if (lastCh === DOT || lastCh === -1) {
                    this.hostname = this.host = "";
                    return start;
                }
                */
                charsAfterDot = -1;
            }
            else if (0x41 /*'A'*/ <= ch && ch <= 0x5A /*'Z'*/) {
                doLowerCase = true;
            }
            //Valid characters other than ASCII letters -, _, +, 0-9
            else if (!(ch === 0x2D /*'-'*/ ||
                       ch === 0x5F /*'_'*/ ||
                       ch === 0x2B /*'+'*/ ||
                       (0x30 /*'0'*/ <= ch && ch <= 0x39 /*'9'*/))
                ) {
                if (hostEndingCharacters[ch] === 0 &&
                    this._noPrependSlashHostEnders[ch] === 0) {
                    this._prependSlash = true;
                }
                hostNameEnd = i - 1;
                break;
            }
        }
        else if (ch >= 0x7B /*'{'*/) {
            if (ch <= 0x7E /*'~'*/) {
                if (this._noPrependSlashHostEnders[ch] === 0) {
                    this._prependSlash = true;
                }
                hostNameEnd = i - 1;
                break;
            }
            idna = true;
        }
        lastCh = ch;
        charsAfterDot++;
    }

    //Node.js ignores this error
    /*
    if (lastCh === DOT) {
        hostNameEnd--;
    }
    */

    if (hostNameEnd + 1 !== start &&
        hostNameEnd - hostNameStart <= 256) {
        var hostname = str.slice(hostNameStart, hostNameEnd + 1);
        if (doLowerCase) hostname = hostname.toLowerCase();
        if (idna) hostname = this._hostIdna(hostname);
        this.hostname = hostname;
        this.host = this._port > 0 ? hostname + ":" + this._port : hostname;
    }

    return hostNameEnd + 1 + portLength;

};

Url.prototype._copyPropsTo = function Url$_copyPropsTo(input, noProtocol) {
    if (!noProtocol) {
        input._protocol = this._protocol;
    }
    input._href = this._href;
    input._port = this._port;
    input._prependSlash = this._prependSlash;
    input.auth = this.auth;
    input.slashes = this.slashes;
    input.host = this.host;
    input.hostname = this.hostname;
    input.hash = this.hash;
    input.search = this.search;
    input.pathname = this.pathname;
};

Url.prototype._clone = function Url$_clone() {
    var ret = new Url();
    ret._protocol = this._protocol;
    ret._href = this._href;
    ret._port = this._port;
    ret._prependSlash = this._prependSlash;
    ret.auth = this.auth;
    ret.slashes = this.slashes;
    ret.host = this.host;
    ret.hostname = this.hostname;
    ret.hash = this.hash;
    ret.search = this.search;
    ret.pathname = this.pathname;
    return ret;
};

Url.prototype._getComponentEscaped =
function Url$_getComponentEscaped(str, start, end, isAfterQuery) {
    var cur = start;
    var i = start;
    var ret = "";
    var autoEscapeMap = isAfterQuery ?
        this._afterQueryAutoEscapeMap : this._autoEscapeMap;
    for (; i <= end; ++i) {
        var ch = str.charCodeAt(i);
        var escaped = autoEscapeMap[ch];

        if (escaped !== "" && escaped !== undefined) {
            if (cur < i) ret += str.slice(cur, i);
            ret += escaped;
            cur = i + 1;
        }
    }
    if (cur < i + 1) ret += str.slice(cur, i);
    return ret;
};

Url.prototype._parsePath =
function Url$_parsePath(str, start, end, disableAutoEscapeChars) {
    var pathStart = start;
    var pathEnd = end;
    var escape = false;
    var autoEscapeCharacters = this._autoEscapeCharacters;
    var prePath = this._port === -2 ? "/:" : "";

    for (var i = start; i <= end; ++i) {
        var ch = str.charCodeAt(i);
        if (ch === 0x23 /*'#'*/) {
          this._parseHash(str, i, end, disableAutoEscapeChars);
            pathEnd = i - 1;
            break;
        }
        else if (ch === 0x3F /*'?'*/) {
            this._parseQuery(str, i, end, disableAutoEscapeChars);
            pathEnd = i - 1;
            break;
        }
        else if (!disableAutoEscapeChars && !escape && autoEscapeCharacters[ch] === 1) {
            escape = true;
        }
    }

    if (pathStart > pathEnd) {
        this.pathname = prePath === "" ? "/" : prePath;
        return;
    }

    var path;
    if (escape) {
        path = this._getComponentEscaped(str, pathStart, pathEnd, false);
    }
    else {
        path = str.slice(pathStart, pathEnd + 1);
    }
    this.pathname = prePath === ""
        ? (this._prependSlash ? "/" + path : path)
        : prePath + path;
};

Url.prototype._parseQuery = function Url$_parseQuery(str, start, end, disableAutoEscapeChars) {
    var queryStart = start;
    var queryEnd = end;
    var escape = false;
    var autoEscapeCharacters = this._autoEscapeCharacters;

    for (var i = start; i <= end; ++i) {
        var ch = str.charCodeAt(i);

        if (ch === 0x23 /*'#'*/) {
            this._parseHash(str, i, end, disableAutoEscapeChars);
            queryEnd = i - 1;
            break;
        }
        else if (!disableAutoEscapeChars && !escape && autoEscapeCharacters[ch] === 1) {
            escape = true;
        }
    }

    if (queryStart > queryEnd) {
        this.search = "";
        return;
    }

    var query;
    if (escape) {
        query = this._getComponentEscaped(str, queryStart, queryEnd, true);
    }
    else {
        query = str.slice(queryStart, queryEnd + 1);
    }
    this.search = query;
};

Url.prototype._parseHash = function Url$_parseHash(str, start, end, disableAutoEscapeChars) {
    if (start > end) {
        this.hash = "";
        return;
    }

    this.hash = disableAutoEscapeChars ?
        str.slice(start, end + 1) : this._getComponentEscaped(str, start, end, true);
};

Object.defineProperty(Url.prototype, "port", {
    get: function() {
        if (this._port >= 0) {
            return ("" + this._port);
        }
        return null;
    },
    set: function(v) {
        if (v == null) {
            this._port = -1;
        }
        else {
            this._port = parseInt(v, 10);
        }
    }
});

Object.defineProperty(Url.prototype, "query", {
    get: function() {
        var query = this._query;
        if (query != null) {
            return query;
        }
        var search = this.search;

        if (search) {
            if (search.charCodeAt(0) === 0x3F /*'?'*/) {
                search = search.slice(1);
            }
            if (search !== "") {
                this._query = search;
                return search;
            }
        }
        return search;
    },
    set: function(v) {
        this._query = v;
    }
});

Object.defineProperty(Url.prototype, "path", {
    get: function() {
        var p = this.pathname || "";
        var s = this.search || "";
        if (p || s) {
            return p + s;
        }
        return (p == null && s) ? ("/" + s) : null;
    },
    set: function() {}
});

Object.defineProperty(Url.prototype, "protocol", {
    get: function() {
        var proto = this._protocol;
        return proto ? proto + ":" : proto;
    },
    set: function(v) {
        if (typeof v === "string") {
            var end = v.length - 1;
            if (v.charCodeAt(end) === 0x3A /*':'*/) {
                this._protocol = v.slice(0, end);
            }
            else {
                this._protocol = v;
            }
        }
        else if (v == null) {
            this._protocol = null;
        }
    }
});

Object.defineProperty(Url.prototype, "href", {
    get: function() {
        var href = this._href;
        if (!href) {
            href = this._href = this.format();
        }
        return href;
    },
    set: function(v) {
        this._href = v;
    }
});

Url.parse = function Url$Parse(str, parseQueryString, hostDenotesSlash, disableAutoEscapeChars) {
    if (str instanceof Url) return str;
    var ret = new Url();
    ret.parse(str, !!parseQueryString, !!hostDenotesSlash, !!disableAutoEscapeChars);
    return ret;
};

Url.format = function Url$Format(obj) {
    if (typeof obj === "string") {
        obj = Url.parse(obj);
    }
    if (!(obj instanceof Url)) {
        return Url.prototype.format.call(obj);
    }
    return obj.format();
};

Url.resolve = function Url$Resolve(source, relative) {
    return Url.parse(source, false, true).resolve(relative);
};

Url.resolveObject = function Url$ResolveObject(source, relative) {
    if (!source) return relative;
    return Url.parse(source, false, true).resolveObject(relative);
};

function _escapePath(pathname) {
    return pathname.replace(/[?#]/g, function(match) {
        return encodeURIComponent(match);
    });
}

function _escapeSearch(search) {
    return search.replace(/#/g, function(match) {
        return encodeURIComponent(match);
    });
}

//Search `char1` (integer code for a character) in `string`
//starting from `fromIndex` and ending at `string.length - 1`
//or when a stop character is found
function containsCharacter(string, char1, fromIndex, stopCharacterTable) {
    var len = string.length;
    for (var i = fromIndex; i < len; ++i) {
        var ch = string.charCodeAt(i);

        if (ch === char1) {
            return true;
        }
        else if (stopCharacterTable[ch] === 1) {
            return false;
        }
    }
    return false;
}

//See if `char1` or `char2` (integer codes for characters)
//is contained in `string`
function containsCharacter2(string, char1, char2) {
    for (var i = 0, len = string.length; i < len; ++i) {
        var ch = string.charCodeAt(i);
        if (ch === char1 || ch === char2) return true;
    }
    return false;
}

//Makes an array of 128 uint8's which represent boolean values.
//Spec is an array of ascii code points or ascii code point ranges
//ranges are expressed as [start, end]

//Create a table with the characters 0x30-0x39 (decimals '0' - '9') and
//0x7A (lowercaseletter 'z') as `true`:
//
//var a = makeAsciiTable([[0x30, 0x39], 0x7A]);
//a[0x30]; //1
//a[0x15]; //0
//a[0x35]; //1
function makeAsciiTable(spec) {
    var ret = new Uint8Array(128);
    spec.forEach(function(item){
        if (typeof item === "number") {
            ret[item] = 1;
        }
        else {
            var start = item[0];
            var end = item[1];
            for (var j = start; j <= end; ++j) {
                ret[j] = 1;
            }
        }
    });

    return ret;
}


var autoEscape = ["<", ">", "\"", "`", " ", "\r", "\n",
    "\t", "{", "}", "|", "\\", "^", "`", "'"];

var autoEscapeMap = new Array(128);



for (var i = 0, len = autoEscapeMap.length; i < len; ++i) {
    autoEscapeMap[i] = "";
}

for (var i = 0, len = autoEscape.length; i < len; ++i) {
    var c = autoEscape[i];
    var esc = encodeURIComponent(c);
    if (esc === c) {
        esc = escape(c);
    }
    autoEscapeMap[c.charCodeAt(0)] = esc;
}
var afterQueryAutoEscapeMap = autoEscapeMap.slice();
autoEscapeMap[0x5C /*'\'*/] = "/";

var slashProtocols = Url.prototype._slashProtocols = {
    http: true,
    https: true,
    gopher: true,
    file: true,
    ftp: true,

    "http:": true,
    "https:": true,
    "gopher:": true,
    "file:": true,
    "ftp:": true
};

//Optimize back from normalized object caused by non-identifier keys
function f(){}
f.prototype = slashProtocols;

Url.prototype._protocolCharacters = makeAsciiTable([
    [0x61 /*'a'*/, 0x7A /*'z'*/],
    [0x41 /*'A'*/, 0x5A /*'Z'*/],
    0x2E /*'.'*/, 0x2B /*'+'*/, 0x2D /*'-'*/
]);

Url.prototype._hostEndingCharacters = makeAsciiTable([
    0x23 /*'#'*/, 0x3F /*'?'*/, 0x2F /*'/'*/, 0x5C /*'\'*/
]);

Url.prototype._autoEscapeCharacters = makeAsciiTable(
    autoEscape.map(function(v) {
        return v.charCodeAt(0);
    })
);

//If these characters end a host name, the path will not be prepended a /
Url.prototype._noPrependSlashHostEnders = makeAsciiTable(
    [
        "<", ">", "'", "`", " ", "\r",
        "\n", "\t", "{", "}", "|",
        "^", "`", "\"", "%", ";"
    ].map(function(v) {
        return v.charCodeAt(0);
    })
);

Url.prototype._autoEscapeMap = autoEscapeMap;
Url.prototype._afterQueryAutoEscapeMap = afterQueryAutoEscapeMap;

module.exports = Url;

Url.replace = function Url$Replace() {
    __webpack_require__.c.url = {
        exports: Url
    };
};


/***/ }),
/* 17 */
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),
/* 18 */
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* ! The MIT License (MIT) Copyright (c) 2014 Scott Corgan */

// This is adopted from https://github.com/scottcorgan/glob-slash/

const path = __webpack_require__(13);
const normalize = value => path.posix.normalize(path.posix.join('/', value));

module.exports = value => (value.charAt(0) === '!' ? `!${normalize(value.substr(1))}` : normalize(value));
module.exports.normalize = normalize;


/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = minimatch
minimatch.Minimatch = Minimatch

var path = { sep: '/' }
try {
  path = __webpack_require__(13)
} catch (er) {}

var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
var expand = __webpack_require__(21)

var plTypes = {
  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
  '?': { open: '(?:', close: ')?' },
  '+': { open: '(?:', close: ')+' },
  '*': { open: '(?:', close: ')*' },
  '@': { open: '(?:', close: ')' }
}

// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = '[^/]'

// * => any number of characters
var star = qmark + '*?'

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'

// characters that need to be escaped in RegExp.
var reSpecials = charSet('().*{}+?[]^$\\!')

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split('').reduce(function (set, c) {
    set[c] = true
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/

minimatch.filter = filter
function filter (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  a = a || {}
  b = b || {}
  var t = {}
  Object.keys(b).forEach(function (k) {
    t[k] = b[k]
  })
  Object.keys(a).forEach(function (k) {
    t[k] = a[k]
  })
  return t
}

minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return minimatch

  var orig = minimatch

  var m = function minimatch (p, pattern, options) {
    return orig.minimatch(p, pattern, ext(def, options))
  }

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  }

  return m
}

Minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return Minimatch
  return minimatch.defaults(def).Minimatch
}

function minimatch (p, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  // "" only matches ""
  if (pattern.trim() === '') return p === ''

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options)
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}
  pattern = pattern.trim()

  // windows support: need to use /, not \
  if (path.sep !== '/') {
    pattern = pattern.split(path.sep).join('/')
  }

  this.options = options
  this.set = []
  this.pattern = pattern
  this.regexp = null
  this.negate = false
  this.comment = false
  this.empty = false

  // make the set of regexps etc.
  this.make()
}

Minimatch.prototype.debug = function () {}

Minimatch.prototype.make = make
function make () {
  // don't do it more than once.
  if (this._made) return

  var pattern = this.pattern
  var options = this.options

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    this.comment = true
    return
  }
  if (!pattern) {
    this.empty = true
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate()

  // step 2: expand braces
  var set = this.globSet = this.braceExpand()

  if (options.debug) this.debug = console.error

  this.debug(this.pattern, set)

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  })

  this.debug(this.pattern, set)

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this)

  this.debug(this.pattern, set)

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return s.indexOf(false) === -1
  })

  this.debug(this.pattern, set)

  this.set = set
}

Minimatch.prototype.parseNegate = parseNegate
function parseNegate () {
  var pattern = this.pattern
  var negate = false
  var options = this.options
  var negateOffset = 0

  if (options.nonegate) return

  for (var i = 0, l = pattern.length
    ; i < l && pattern.charAt(i) === '!'
    ; i++) {
    negate = !negate
    negateOffset++
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset)
  this.negate = negate
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return braceExpand(pattern, options)
}

Minimatch.prototype.braceExpand = braceExpand

function braceExpand (pattern, options) {
  if (!options) {
    if (this instanceof Minimatch) {
      options = this.options
    } else {
      options = {}
    }
  }

  pattern = typeof pattern === 'undefined'
    ? this.pattern : pattern

  if (typeof pattern === 'undefined') {
    throw new TypeError('undefined pattern')
  }

  if (options.nobrace ||
    !pattern.match(/\{.*\}/)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern)
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse
var SUBPARSE = {}
function parse (pattern, isSub) {
  if (pattern.length > 1024 * 64) {
    throw new TypeError('pattern is too long')
  }

  var options = this.options

  // shortcuts
  if (!options.noglobstar && pattern === '**') return GLOBSTAR
  if (pattern === '') return ''

  var re = ''
  var hasMagic = !!options.nocase
  var escaping = false
  // ? => one single character
  var patternListStack = []
  var negativeLists = []
  var stateChar
  var inClass = false
  var reClassStart = -1
  var classStart = -1
  // . and .. never match anything that doesn't start with .,
  // even when options.dot is set.
  var patternStart = pattern.charAt(0) === '.' ? '' // anything
  // not (start or / followed by . or .. followed by / or end)
  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
  : '(?!\\.)'
  var self = this

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case '*':
          re += star
          hasMagic = true
        break
        case '?':
          re += qmark
          hasMagic = true
        break
        default:
          re += '\\' + stateChar
        break
      }
      self.debug('clearStateChar %j %j', stateChar, re)
      stateChar = false
    }
  }

  for (var i = 0, len = pattern.length, c
    ; (i < len) && (c = pattern.charAt(i))
    ; i++) {
    this.debug('%s\t%s %s %j', pattern, i, re, c)

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += '\\' + c
      escaping = false
      continue
    }

    switch (c) {
      case '/':
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false

      case '\\':
        clearStateChar()
        escaping = true
      continue

      // the various stateChar values
      // for the "extglob" stuff.
      case '?':
      case '*':
      case '+':
      case '@':
      case '!':
        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class')
          if (c === '!' && i === classStart + 1) c = '^'
          re += c
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar)
        clearStateChar()
        stateChar = c
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar()
      continue

      case '(':
        if (inClass) {
          re += '('
          continue
        }

        if (!stateChar) {
          re += '\\('
          continue
        }

        patternListStack.push({
          type: stateChar,
          start: i - 1,
          reStart: re.length,
          open: plTypes[stateChar].open,
          close: plTypes[stateChar].close
        })
        // negation is (?:(?!js)[^/]*)
        re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
        this.debug('plType %j %j', stateChar, re)
        stateChar = false
      continue

      case ')':
        if (inClass || !patternListStack.length) {
          re += '\\)'
          continue
        }

        clearStateChar()
        hasMagic = true
        var pl = patternListStack.pop()
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        re += pl.close
        if (pl.type === '!') {
          negativeLists.push(pl)
        }
        pl.reEnd = re.length
      continue

      case '|':
        if (inClass || !patternListStack.length || escaping) {
          re += '\\|'
          escaping = false
          continue
        }

        clearStateChar()
        re += '|'
      continue

      // these are mostly the same in regexp and glob
      case '[':
        // swallow any state-tracking char before the [
        clearStateChar()

        if (inClass) {
          re += '\\' + c
          continue
        }

        inClass = true
        classStart = i
        reClassStart = re.length
        re += c
      continue

      case ']':
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += '\\' + c
          escaping = false
          continue
        }

        // handle the case where we left a class open.
        // "[z-a]" is valid, equivalent to "\[z-a\]"
        if (inClass) {
          // split where the last [ was, make sure we don't have
          // an invalid re. if so, re-walk the contents of the
          // would-be class to re-translate any characters that
          // were passed through as-is
          // TODO: It would probably be faster to determine this
          // without a try/catch and a new RegExp, but it's tricky
          // to do safely.  For now, this is safe and works.
          var cs = pattern.substring(classStart + 1, i)
          try {
            RegExp('[' + cs + ']')
          } catch (er) {
            // not a valid class!
            var sp = this.parse(cs, SUBPARSE)
            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]'
            hasMagic = hasMagic || sp[1]
            inClass = false
            continue
          }
        }

        // finish up the class.
        hasMagic = true
        inClass = false
        re += c
      continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials[c]
          && !(c === '^' && inClass)) {
          re += '\\'
        }

        re += c

    } // switch
  } // for

  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    cs = pattern.substr(classStart + 1)
    sp = this.parse(cs, SUBPARSE)
    re = re.substr(0, reClassStart) + '\\[' + sp[0]
    hasMagic = hasMagic || sp[1]
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + pl.open.length)
    this.debug('setting tail', re, pl)
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = '\\'
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + '|'
    })

    this.debug('tail=%j\n   %s', tail, tail, pl, re)
    var t = pl.type === '*' ? star
      : pl.type === '?' ? qmark
      : '\\' + pl.type

    hasMagic = true
    re = re.slice(0, pl.reStart) + t + '\\(' + tail
  }

  // handle trailing things that only matter at the very end.
  clearStateChar()
  if (escaping) {
    // trailing \\
    re += '\\\\'
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false
  switch (re.charAt(0)) {
    case '.':
    case '[':
    case '(': addPatternStart = true
  }

  // Hack to work around lack of negative lookbehind in JS
  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
  // like 'a.xyz.yz' doesn't match.  So, the first negative
  // lookahead, has to look ALL the way ahead, to the end of
  // the pattern.
  for (var n = negativeLists.length - 1; n > -1; n--) {
    var nl = negativeLists[n]

    var nlBefore = re.slice(0, nl.reStart)
    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd)
    var nlAfter = re.slice(nl.reEnd)

    nlLast += nlAfter

    // Handle nested stuff like *(*.js|!(*.json)), where open parens
    // mean that we should *not* include the ) in the bit that is considered
    // "after" the negated section.
    var openParensBefore = nlBefore.split('(').length - 1
    var cleanAfter = nlAfter
    for (i = 0; i < openParensBefore; i++) {
      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
    }
    nlAfter = cleanAfter

    var dollar = ''
    if (nlAfter === '' && isSub !== SUBPARSE) {
      dollar = '$'
    }
    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast
    re = newRe
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== '' && hasMagic) {
    re = '(?=.)' + re
  }

  if (addPatternStart) {
    re = patternStart + re
  }

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [re, hasMagic]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? 'i' : ''
  try {
    var regExp = new RegExp('^' + re + '$', flags)
  } catch (er) {
    // If it was an invalid regular expression, then it can't match
    // anything.  This trick looks for a character after the end of
    // the string, which is of course impossible, except in multi-line
    // mode, but it's not a /m regex.
    return new RegExp('$.')
  }

  regExp._glob = pattern
  regExp._src = re

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
}

Minimatch.prototype.makeRe = makeRe
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set

  if (!set.length) {
    this.regexp = false
    return this.regexp
  }
  var options = this.options

  var twoStar = options.noglobstar ? star
    : options.dot ? twoStarDot
    : twoStarNoDot
  var flags = options.nocase ? 'i' : ''

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
      : (typeof p === 'string') ? regExpEscape(p)
      : p._src
    }).join('\\\/')
  }).join('|')

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = '^(?:' + re + ')$'

  // can match anything, as long as it's not this.
  if (this.negate) re = '^(?!' + re + ').*$'

  try {
    this.regexp = new RegExp(re, flags)
  } catch (ex) {
    this.regexp = false
  }
  return this.regexp
}

minimatch.match = function (list, pattern, options) {
  options = options || {}
  var mm = new Minimatch(pattern, options)
  list = list.filter(function (f) {
    return mm.match(f)
  })
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

Minimatch.prototype.match = match
function match (f, partial) {
  this.debug('match', f, this.pattern)
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ''

  if (f === '/' && partial) return true

  var options = this.options

  // windows: need to use /, not \
  if (path.sep !== '/') {
    f = f.split(path.sep).join('/')
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit)
  this.debug(this.pattern, 'split', f)

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set
  this.debug(this.pattern, 'set', set)

  // Find the basename of the path by looking for the last non-empty segment
  var filename
  var i
  for (i = f.length - 1; i >= 0; i--) {
    filename = f[i]
    if (filename) break
  }

  for (i = 0; i < set.length; i++) {
    var pattern = set[i]
    var file = f
    if (options.matchBase && pattern.length === 1) {
      file = [filename]
    }
    var hit = this.matchOne(file, pattern, partial)
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options

  this.debug('matchOne',
    { 'this': this, file: file, pattern: pattern })

  this.debug('matchOne', file.length, pattern.length)

  for (var fi = 0,
      pi = 0,
      fl = file.length,
      pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi++, pi++) {
    this.debug('matchOne loop')
    var p = pattern[pi]
    var f = file[fi]

    this.debug(pattern, p, f)

    // should be impossible.
    // some invalid regexp stuff in the set.
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f])

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi
      var pr = pi + 1
      if (pr === pl) {
        this.debug('** at the end')
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for (; fi < fl; fi++) {
          if (file[fi] === '.' || file[fi] === '..' ||
            (!options.dot && file[fi].charAt(0) === '.')) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      while (fr < fl) {
        var swallowee = file[fr]

        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee)
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === '.' || swallowee === '..' ||
            (!options.dot && swallowee.charAt(0) === '.')) {
            this.debug('dot detected!', file, fr, pattern, pr)
            break
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue')
          fr++
        }
      }

      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      if (partial) {
        // ran out of file
        this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit
    if (typeof p === 'string') {
      if (options.nocase) {
        hit = f.toLowerCase() === p.toLowerCase()
      } else {
        hit = f === p
      }
      this.debug('string match', p, f, hit)
    } else {
      hit = f.match(p)
      this.debug('pattern match', p, f, hit)
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    var emptyFileEnd = (fi === fl - 1) && (file[fi] === '')
    return emptyFileEnd
  }

  // should be unreachable.
  throw new Error('wtf?')
}

// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, '$1')
}

function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}


/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var concatMap = __webpack_require__(22);
var balanced = __webpack_require__(23);

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function identity(e) {
  return e;
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m || /\$$/.test(m.pre)) return [str];

  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
  var isSequence = isNumericSequence || isAlphaSequence;
  var isOptions = m.body.indexOf(',') >= 0;
  if (!isSequence && !isOptions) {
    // {a},b}
    if (m.post.match(/,.*\}/)) {
      str = m.pre + '{' + m.body + escClose + m.post;
      return expand(str);
    }
    return [str];
  }

  var n;
  if (isSequence) {
    n = m.body.split(/\.\./);
  } else {
    n = parseCommaParts(m.body);
    if (n.length === 1) {
      // x{{a,b}}y ==> x{a}y x{b}y
      n = expand(n[0], false).map(embrace);
      if (n.length === 1) {
        var post = m.post.length
          ? expand(m.post, false)
          : [''];
        return post.map(function(p) {
          return m.pre + n[0] + p;
        });
      }
    }
  }

  // at this point, n is the parts, and we know it's not a comma set
  // with a single entry.

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  var N;

  if (isSequence) {
    var x = numeric(n[0]);
    var y = numeric(n[1]);
    var width = Math.max(n[0].length, n[1].length)
    var incr = n.length == 3
      ? Math.abs(numeric(n[2]))
      : 1;
    var test = lte;
    var reverse = y < x;
    if (reverse) {
      incr *= -1;
      test = gte;
    }
    var pad = n.some(isPadded);

    N = [];

    for (var i = x; test(i, y); i += incr) {
      var c;
      if (isAlphaSequence) {
        c = String.fromCharCode(i);
        if (c === '\\')
          c = '';
      } else {
        c = String(i);
        if (pad) {
          var need = width - c.length;
          if (need > 0) {
            var z = new Array(need + 1).join('0');
            if (i < 0)
              c = '-' + z + c.slice(1);
            else
              c = z + c;
          }
        }
      }
      N.push(c);
    }
  } else {
    N = concatMap(n, function(el) { return expand(el, false) });
  }

  for (var j = 0; j < N.length; j++) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + N[j] + post[k];
      if (!isTop || isSequence || expansion)
        expansions.push(expansion);
    }
  }

  return expansions;
}



/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 23 */
/***/ ((module) => {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    if(a===b) {
      return [ai, bi];
    }
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),
/* 24 */
/***/ ((module) => {

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * Default configs.
 */
var DEFAULT_DELIMITER = '/'
var DEFAULT_DELIMITERS = './'

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?"]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined]
  '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER
  var delimiters = (options && options.delimiters) || DEFAULT_DELIMITERS
  var pathEscaped = false
  var res

  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      pathEscaped = true
      continue
    }

    var prev = ''
    var next = str[index]
    var name = res[2]
    var capture = res[3]
    var group = res[4]
    var modifier = res[5]

    if (!pathEscaped && path.length) {
      var k = path.length - 1

      if (delimiters.indexOf(path[k]) > -1) {
        prev = path[k]
        path = path.slice(0, k)
      }
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
      pathEscaped = false
    }

    var partial = prev !== '' && next !== undefined && next !== prev
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = prev || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
    })
  }

  // Push any remaining characters.
  if (path || index < str.length) {
    tokens.push(path + str.substr(index))
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (data, options) {
    var path = ''
    var encode = (options && options.encode) || encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token
        continue
      }

      var value = data ? data[token.name] : undefined
      var segment

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array')
        }

        if (value.length === 0) {
          if (token.optional) continue

          throw new TypeError('Expected "' + token.name + '" to not be empty')
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j], token)

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        segment = encode(String(value), token)

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"')
        }

        path += token.prefix + segment
        continue
      }

      if (token.optional) {
        // Prepend partial segment prefixes.
        if (token.partial) path += token.prefix

        continue
      }

      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'))
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$/()])/g, '\\$1')
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  if (!keys) return path

  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        pattern: null
      })
    }
  }

  return path
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  return new RegExp('(?:' + parts.join('|') + ')', flags(options))
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER)
  var delimiters = options.delimiters || DEFAULT_DELIMITERS
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|')
  var route = ''
  var isEndDelimited = tokens.length === 0

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
      isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1
    } else {
      var prefix = escapeString(token.prefix)
      var capture = token.repeat
        ? '(?:' + token.pattern + ')(?:' + prefix + '(?:' + token.pattern + '))*'
        : token.pattern

      if (keys) keys.push(token)

      if (token.optional) {
        if (token.partial) {
          route += prefix + '(' + capture + ')?'
        } else {
          route += '(?:' + prefix + '(' + capture + '))?'
        }
      } else {
        route += prefix + '(' + capture + ')'
      }
    }
  }

  if (end) {
    if (!strict) route += '(?:' + delimiter + ')?'

    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')'
  } else {
    if (!strict) route += '(?:' + delimiter + '(?=' + endsWith + '))?'
    if (!isEndDelimited) route += '(?=' + delimiter + '|' + endsWith + ')'
  }

  return new RegExp('^' + route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys)
  }

  if (Array.isArray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), keys, options)
  }

  return stringToRegexp(/** @type {string} */ (path), keys, options)
}


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var db = __webpack_require__(26)
var extname = (__webpack_require__(13).extname)

/**
 * Module variables.
 * @private
 */

var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/
var TEXT_TYPE_REGEXP = /^text\//i

/**
 * Module exports.
 * @public
 */

exports.charset = charset
exports.charsets = { lookup: charset }
exports.contentType = contentType
exports.extension = extension
exports.extensions = Object.create(null)
exports.lookup = lookup
exports.types = Object.create(null)

// Populate the extensions/types maps
populateMaps(exports.extensions, exports.types)

/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function charset (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)
  var mime = match && db[match[1].toLowerCase()]

  if (mime && mime.charset) {
    return mime.charset
  }

  // default text/* to utf-8
  if (match && TEXT_TYPE_REGEXP.test(match[1])) {
    return 'UTF-8'
  }

  return false
}

/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */

function contentType (str) {
  // TODO: should this even be in this module?
  if (!str || typeof str !== 'string') {
    return false
  }

  var mime = str.indexOf('/') === -1
    ? exports.lookup(str)
    : str

  if (!mime) {
    return false
  }

  // TODO: use content-type or other module
  if (mime.indexOf('charset') === -1) {
    var charset = exports.charset(mime)
    if (charset) mime += '; charset=' + charset.toLowerCase()
  }

  return mime
}

/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function extension (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)

  // get extensions
  var exts = match && exports.extensions[match[1].toLowerCase()]

  if (!exts || !exts.length) {
    return false
  }

  return exts[0]
}

/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */

function lookup (path) {
  if (!path || typeof path !== 'string') {
    return false
  }

  // get the extension ("ext" or ".ext" or full path)
  var extension = extname('x.' + path)
    .toLowerCase()
    .substr(1)

  if (!extension) {
    return false
  }

  return exports.types[extension] || false
}

/**
 * Populate the extensions and types maps.
 * @private
 */

function populateMaps (extensions, types) {
  // source preference (least -> most)
  var preference = ['nginx', 'apache', undefined, 'iana']

  Object.keys(db).forEach(function forEachMimeType (type) {
    var mime = db[type]
    var exts = mime.extensions

    if (!exts || !exts.length) {
      return
    }

    // mime -> extensions
    extensions[type] = exts

    // extension -> mime
    for (var i = 0; i < exts.length; i++) {
      var extension = exts[i]

      if (types[extension]) {
        var from = preference.indexOf(db[types[extension]].source)
        var to = preference.indexOf(mime.source)

        if (types[extension] !== 'application/octet-stream' &&
          (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
          // skip the remapping
          continue
        }
      }

      // set the extension -> mime
      types[extension] = type
    }
  })
}


/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */

/**
 * Module exports.
 */

module.exports = __webpack_require__(27)


/***/ }),
/* 27 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"application/1d-interleaved-parityfec":{"source":"iana"},"application/3gpdash-qoe-report+xml":{"source":"iana"},"application/3gpp-ims+xml":{"source":"iana"},"application/a2l":{"source":"iana"},"application/activemessage":{"source":"iana"},"application/alto-costmap+json":{"source":"iana","compressible":true},"application/alto-costmapfilter+json":{"source":"iana","compressible":true},"application/alto-directory+json":{"source":"iana","compressible":true},"application/alto-endpointcost+json":{"source":"iana","compressible":true},"application/alto-endpointcostparams+json":{"source":"iana","compressible":true},"application/alto-endpointprop+json":{"source":"iana","compressible":true},"application/alto-endpointpropparams+json":{"source":"iana","compressible":true},"application/alto-error+json":{"source":"iana","compressible":true},"application/alto-networkmap+json":{"source":"iana","compressible":true},"application/alto-networkmapfilter+json":{"source":"iana","compressible":true},"application/aml":{"source":"iana"},"application/andrew-inset":{"source":"iana","extensions":["ez"]},"application/applefile":{"source":"iana"},"application/applixware":{"source":"apache","extensions":["aw"]},"application/atf":{"source":"iana"},"application/atfx":{"source":"iana"},"application/atom+xml":{"source":"iana","compressible":true,"extensions":["atom"]},"application/atomcat+xml":{"source":"iana","extensions":["atomcat"]},"application/atomdeleted+xml":{"source":"iana"},"application/atomicmail":{"source":"iana"},"application/atomsvc+xml":{"source":"iana","extensions":["atomsvc"]},"application/atxml":{"source":"iana"},"application/auth-policy+xml":{"source":"iana"},"application/bacnet-xdd+zip":{"source":"iana"},"application/batch-smtp":{"source":"iana"},"application/bdoc":{"compressible":false,"extensions":["bdoc"]},"application/beep+xml":{"source":"iana"},"application/calendar+json":{"source":"iana","compressible":true},"application/calendar+xml":{"source":"iana"},"application/call-completion":{"source":"iana"},"application/cals-1840":{"source":"iana"},"application/cbor":{"source":"iana"},"application/cccex":{"source":"iana"},"application/ccmp+xml":{"source":"iana"},"application/ccxml+xml":{"source":"iana","extensions":["ccxml"]},"application/cdfx+xml":{"source":"iana"},"application/cdmi-capability":{"source":"iana","extensions":["cdmia"]},"application/cdmi-container":{"source":"iana","extensions":["cdmic"]},"application/cdmi-domain":{"source":"iana","extensions":["cdmid"]},"application/cdmi-object":{"source":"iana","extensions":["cdmio"]},"application/cdmi-queue":{"source":"iana","extensions":["cdmiq"]},"application/cdni":{"source":"iana"},"application/cea":{"source":"iana"},"application/cea-2018+xml":{"source":"iana"},"application/cellml+xml":{"source":"iana"},"application/cfw":{"source":"iana"},"application/clue_info+xml":{"source":"iana"},"application/cms":{"source":"iana"},"application/cnrp+xml":{"source":"iana"},"application/coap-group+json":{"source":"iana","compressible":true},"application/coap-payload":{"source":"iana"},"application/commonground":{"source":"iana"},"application/conference-info+xml":{"source":"iana"},"application/cose":{"source":"iana"},"application/cose-key":{"source":"iana"},"application/cose-key-set":{"source":"iana"},"application/cpl+xml":{"source":"iana"},"application/csrattrs":{"source":"iana"},"application/csta+xml":{"source":"iana"},"application/cstadata+xml":{"source":"iana"},"application/csvm+json":{"source":"iana","compressible":true},"application/cu-seeme":{"source":"apache","extensions":["cu"]},"application/cybercash":{"source":"iana"},"application/dart":{"compressible":true},"application/dash+xml":{"source":"iana","extensions":["mpd"]},"application/dashdelta":{"source":"iana"},"application/davmount+xml":{"source":"iana","extensions":["davmount"]},"application/dca-rft":{"source":"iana"},"application/dcd":{"source":"iana"},"application/dec-dx":{"source":"iana"},"application/dialog-info+xml":{"source":"iana"},"application/dicom":{"source":"iana"},"application/dicom+json":{"source":"iana","compressible":true},"application/dicom+xml":{"source":"iana"},"application/dii":{"source":"iana"},"application/dit":{"source":"iana"},"application/dns":{"source":"iana"},"application/docbook+xml":{"source":"apache","extensions":["dbk"]},"application/dskpp+xml":{"source":"iana"},"application/dssc+der":{"source":"iana","extensions":["dssc"]},"application/dssc+xml":{"source":"iana","extensions":["xdssc"]},"application/dvcs":{"source":"iana"},"application/ecmascript":{"source":"iana","compressible":true,"extensions":["ecma"]},"application/edi-consent":{"source":"iana"},"application/edi-x12":{"source":"iana","compressible":false},"application/edifact":{"source":"iana","compressible":false},"application/efi":{"source":"iana"},"application/emergencycalldata.comment+xml":{"source":"iana"},"application/emergencycalldata.control+xml":{"source":"iana"},"application/emergencycalldata.deviceinfo+xml":{"source":"iana"},"application/emergencycalldata.ecall.msd":{"source":"iana"},"application/emergencycalldata.providerinfo+xml":{"source":"iana"},"application/emergencycalldata.serviceinfo+xml":{"source":"iana"},"application/emergencycalldata.subscriberinfo+xml":{"source":"iana"},"application/emergencycalldata.veds+xml":{"source":"iana"},"application/emma+xml":{"source":"iana","extensions":["emma"]},"application/emotionml+xml":{"source":"iana"},"application/encaprtp":{"source":"iana"},"application/epp+xml":{"source":"iana"},"application/epub+zip":{"source":"iana","extensions":["epub"]},"application/eshop":{"source":"iana"},"application/exi":{"source":"iana","extensions":["exi"]},"application/fastinfoset":{"source":"iana"},"application/fastsoap":{"source":"iana"},"application/fdt+xml":{"source":"iana"},"application/fhir+xml":{"source":"iana"},"application/fido.trusted-apps+json":{"compressible":true},"application/fits":{"source":"iana"},"application/font-sfnt":{"source":"iana"},"application/font-tdpfr":{"source":"iana","extensions":["pfr"]},"application/font-woff":{"source":"iana","compressible":false,"extensions":["woff"]},"application/framework-attributes+xml":{"source":"iana"},"application/geo+json":{"source":"iana","compressible":true,"extensions":["geojson"]},"application/geo+json-seq":{"source":"iana"},"application/geoxacml+xml":{"source":"iana"},"application/gml+xml":{"source":"iana","extensions":["gml"]},"application/gpx+xml":{"source":"apache","extensions":["gpx"]},"application/gxf":{"source":"apache","extensions":["gxf"]},"application/gzip":{"source":"iana","compressible":false,"extensions":["gz"]},"application/h224":{"source":"iana"},"application/held+xml":{"source":"iana"},"application/hjson":{"extensions":["hjson"]},"application/http":{"source":"iana"},"application/hyperstudio":{"source":"iana","extensions":["stk"]},"application/ibe-key-request+xml":{"source":"iana"},"application/ibe-pkg-reply+xml":{"source":"iana"},"application/ibe-pp-data":{"source":"iana"},"application/iges":{"source":"iana"},"application/im-iscomposing+xml":{"source":"iana"},"application/index":{"source":"iana"},"application/index.cmd":{"source":"iana"},"application/index.obj":{"source":"iana"},"application/index.response":{"source":"iana"},"application/index.vnd":{"source":"iana"},"application/inkml+xml":{"source":"iana","extensions":["ink","inkml"]},"application/iotp":{"source":"iana"},"application/ipfix":{"source":"iana","extensions":["ipfix"]},"application/ipp":{"source":"iana"},"application/isup":{"source":"iana"},"application/its+xml":{"source":"iana"},"application/java-archive":{"source":"apache","compressible":false,"extensions":["jar","war","ear"]},"application/java-serialized-object":{"source":"apache","compressible":false,"extensions":["ser"]},"application/java-vm":{"source":"apache","compressible":false,"extensions":["class"]},"application/javascript":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["js","mjs"]},"application/jf2feed+json":{"source":"iana","compressible":true},"application/jose":{"source":"iana"},"application/jose+json":{"source":"iana","compressible":true},"application/jrd+json":{"source":"iana","compressible":true},"application/json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["json","map"]},"application/json-patch+json":{"source":"iana","compressible":true},"application/json-seq":{"source":"iana"},"application/json5":{"extensions":["json5"]},"application/jsonml+json":{"source":"apache","compressible":true,"extensions":["jsonml"]},"application/jwk+json":{"source":"iana","compressible":true},"application/jwk-set+json":{"source":"iana","compressible":true},"application/jwt":{"source":"iana"},"application/kpml-request+xml":{"source":"iana"},"application/kpml-response+xml":{"source":"iana"},"application/ld+json":{"source":"iana","compressible":true,"extensions":["jsonld"]},"application/lgr+xml":{"source":"iana"},"application/link-format":{"source":"iana"},"application/load-control+xml":{"source":"iana"},"application/lost+xml":{"source":"iana","extensions":["lostxml"]},"application/lostsync+xml":{"source":"iana"},"application/lxf":{"source":"iana"},"application/mac-binhex40":{"source":"iana","extensions":["hqx"]},"application/mac-compactpro":{"source":"apache","extensions":["cpt"]},"application/macwriteii":{"source":"iana"},"application/mads+xml":{"source":"iana","extensions":["mads"]},"application/manifest+json":{"charset":"UTF-8","compressible":true,"extensions":["webmanifest"]},"application/marc":{"source":"iana","extensions":["mrc"]},"application/marcxml+xml":{"source":"iana","extensions":["mrcx"]},"application/mathematica":{"source":"iana","extensions":["ma","nb","mb"]},"application/mathml+xml":{"source":"iana","extensions":["mathml"]},"application/mathml-content+xml":{"source":"iana"},"application/mathml-presentation+xml":{"source":"iana"},"application/mbms-associated-procedure-description+xml":{"source":"iana"},"application/mbms-deregister+xml":{"source":"iana"},"application/mbms-envelope+xml":{"source":"iana"},"application/mbms-msk+xml":{"source":"iana"},"application/mbms-msk-response+xml":{"source":"iana"},"application/mbms-protection-description+xml":{"source":"iana"},"application/mbms-reception-report+xml":{"source":"iana"},"application/mbms-register+xml":{"source":"iana"},"application/mbms-register-response+xml":{"source":"iana"},"application/mbms-schedule+xml":{"source":"iana"},"application/mbms-user-service-description+xml":{"source":"iana"},"application/mbox":{"source":"iana","extensions":["mbox"]},"application/media-policy-dataset+xml":{"source":"iana"},"application/media_control+xml":{"source":"iana"},"application/mediaservercontrol+xml":{"source":"iana","extensions":["mscml"]},"application/merge-patch+json":{"source":"iana","compressible":true},"application/metalink+xml":{"source":"apache","extensions":["metalink"]},"application/metalink4+xml":{"source":"iana","extensions":["meta4"]},"application/mets+xml":{"source":"iana","extensions":["mets"]},"application/mf4":{"source":"iana"},"application/mikey":{"source":"iana"},"application/mmt-usd+xml":{"source":"iana"},"application/mods+xml":{"source":"iana","extensions":["mods"]},"application/moss-keys":{"source":"iana"},"application/moss-signature":{"source":"iana"},"application/mosskey-data":{"source":"iana"},"application/mosskey-request":{"source":"iana"},"application/mp21":{"source":"iana","extensions":["m21","mp21"]},"application/mp4":{"source":"iana","extensions":["mp4s","m4p"]},"application/mpeg4-generic":{"source":"iana"},"application/mpeg4-iod":{"source":"iana"},"application/mpeg4-iod-xmt":{"source":"iana"},"application/mrb-consumer+xml":{"source":"iana"},"application/mrb-publish+xml":{"source":"iana"},"application/msc-ivr+xml":{"source":"iana"},"application/msc-mixer+xml":{"source":"iana"},"application/msword":{"source":"iana","compressible":false,"extensions":["doc","dot"]},"application/mud+json":{"source":"iana","compressible":true},"application/mxf":{"source":"iana","extensions":["mxf"]},"application/n-quads":{"source":"iana"},"application/n-triples":{"source":"iana"},"application/nasdata":{"source":"iana"},"application/news-checkgroups":{"source":"iana"},"application/news-groupinfo":{"source":"iana"},"application/news-transmission":{"source":"iana"},"application/nlsml+xml":{"source":"iana"},"application/node":{"source":"iana"},"application/nss":{"source":"iana"},"application/ocsp-request":{"source":"iana"},"application/ocsp-response":{"source":"iana"},"application/octet-stream":{"source":"iana","compressible":false,"extensions":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]},"application/oda":{"source":"iana","extensions":["oda"]},"application/odx":{"source":"iana"},"application/oebps-package+xml":{"source":"iana","extensions":["opf"]},"application/ogg":{"source":"iana","compressible":false,"extensions":["ogx"]},"application/omdoc+xml":{"source":"apache","extensions":["omdoc"]},"application/onenote":{"source":"apache","extensions":["onetoc","onetoc2","onetmp","onepkg"]},"application/oxps":{"source":"iana","extensions":["oxps"]},"application/p2p-overlay+xml":{"source":"iana"},"application/parityfec":{"source":"iana"},"application/passport":{"source":"iana"},"application/patch-ops-error+xml":{"source":"iana","extensions":["xer"]},"application/pdf":{"source":"iana","compressible":false,"extensions":["pdf"]},"application/pdx":{"source":"iana"},"application/pgp-encrypted":{"source":"iana","compressible":false,"extensions":["pgp"]},"application/pgp-keys":{"source":"iana"},"application/pgp-signature":{"source":"iana","extensions":["asc","sig"]},"application/pics-rules":{"source":"apache","extensions":["prf"]},"application/pidf+xml":{"source":"iana"},"application/pidf-diff+xml":{"source":"iana"},"application/pkcs10":{"source":"iana","extensions":["p10"]},"application/pkcs12":{"source":"iana"},"application/pkcs7-mime":{"source":"iana","extensions":["p7m","p7c"]},"application/pkcs7-signature":{"source":"iana","extensions":["p7s"]},"application/pkcs8":{"source":"iana","extensions":["p8"]},"application/pkcs8-encrypted":{"source":"iana"},"application/pkix-attr-cert":{"source":"iana","extensions":["ac"]},"application/pkix-cert":{"source":"iana","extensions":["cer"]},"application/pkix-crl":{"source":"iana","extensions":["crl"]},"application/pkix-pkipath":{"source":"iana","extensions":["pkipath"]},"application/pkixcmp":{"source":"iana","extensions":["pki"]},"application/pls+xml":{"source":"iana","extensions":["pls"]},"application/poc-settings+xml":{"source":"iana"},"application/postscript":{"source":"iana","compressible":true,"extensions":["ai","eps","ps"]},"application/ppsp-tracker+json":{"source":"iana","compressible":true},"application/problem+json":{"source":"iana","compressible":true},"application/problem+xml":{"source":"iana"},"application/provenance+xml":{"source":"iana"},"application/prs.alvestrand.titrax-sheet":{"source":"iana"},"application/prs.cww":{"source":"iana","extensions":["cww"]},"application/prs.hpub+zip":{"source":"iana"},"application/prs.nprend":{"source":"iana"},"application/prs.plucker":{"source":"iana"},"application/prs.rdf-xml-crypt":{"source":"iana"},"application/prs.xsf+xml":{"source":"iana"},"application/pskc+xml":{"source":"iana","extensions":["pskcxml"]},"application/qsig":{"source":"iana"},"application/raml+yaml":{"compressible":true,"extensions":["raml"]},"application/raptorfec":{"source":"iana"},"application/rdap+json":{"source":"iana","compressible":true},"application/rdf+xml":{"source":"iana","compressible":true,"extensions":["rdf"]},"application/reginfo+xml":{"source":"iana","extensions":["rif"]},"application/relax-ng-compact-syntax":{"source":"iana","extensions":["rnc"]},"application/remote-printing":{"source":"iana"},"application/reputon+json":{"source":"iana","compressible":true},"application/resource-lists+xml":{"source":"iana","extensions":["rl"]},"application/resource-lists-diff+xml":{"source":"iana","extensions":["rld"]},"application/rfc+xml":{"source":"iana"},"application/riscos":{"source":"iana"},"application/rlmi+xml":{"source":"iana"},"application/rls-services+xml":{"source":"iana","extensions":["rs"]},"application/route-apd+xml":{"source":"iana"},"application/route-s-tsid+xml":{"source":"iana"},"application/route-usd+xml":{"source":"iana"},"application/rpki-ghostbusters":{"source":"iana","extensions":["gbr"]},"application/rpki-manifest":{"source":"iana","extensions":["mft"]},"application/rpki-publication":{"source":"iana"},"application/rpki-roa":{"source":"iana","extensions":["roa"]},"application/rpki-updown":{"source":"iana"},"application/rsd+xml":{"source":"apache","extensions":["rsd"]},"application/rss+xml":{"source":"apache","compressible":true,"extensions":["rss"]},"application/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"application/rtploopback":{"source":"iana"},"application/rtx":{"source":"iana"},"application/samlassertion+xml":{"source":"iana"},"application/samlmetadata+xml":{"source":"iana"},"application/sbml+xml":{"source":"iana","extensions":["sbml"]},"application/scaip+xml":{"source":"iana"},"application/scim+json":{"source":"iana","compressible":true},"application/scvp-cv-request":{"source":"iana","extensions":["scq"]},"application/scvp-cv-response":{"source":"iana","extensions":["scs"]},"application/scvp-vp-request":{"source":"iana","extensions":["spq"]},"application/scvp-vp-response":{"source":"iana","extensions":["spp"]},"application/sdp":{"source":"iana","extensions":["sdp"]},"application/sep+xml":{"source":"iana"},"application/sep-exi":{"source":"iana"},"application/session-info":{"source":"iana"},"application/set-payment":{"source":"iana"},"application/set-payment-initiation":{"source":"iana","extensions":["setpay"]},"application/set-registration":{"source":"iana"},"application/set-registration-initiation":{"source":"iana","extensions":["setreg"]},"application/sgml":{"source":"iana"},"application/sgml-open-catalog":{"source":"iana"},"application/shf+xml":{"source":"iana","extensions":["shf"]},"application/sieve":{"source":"iana"},"application/simple-filter+xml":{"source":"iana"},"application/simple-message-summary":{"source":"iana"},"application/simplesymbolcontainer":{"source":"iana"},"application/slate":{"source":"iana"},"application/smil":{"source":"iana"},"application/smil+xml":{"source":"iana","extensions":["smi","smil"]},"application/smpte336m":{"source":"iana"},"application/soap+fastinfoset":{"source":"iana"},"application/soap+xml":{"source":"iana","compressible":true},"application/sparql-query":{"source":"iana","extensions":["rq"]},"application/sparql-results+xml":{"source":"iana","extensions":["srx"]},"application/spirits-event+xml":{"source":"iana"},"application/sql":{"source":"iana"},"application/srgs":{"source":"iana","extensions":["gram"]},"application/srgs+xml":{"source":"iana","extensions":["grxml"]},"application/sru+xml":{"source":"iana","extensions":["sru"]},"application/ssdl+xml":{"source":"apache","extensions":["ssdl"]},"application/ssml+xml":{"source":"iana","extensions":["ssml"]},"application/tamp-apex-update":{"source":"iana"},"application/tamp-apex-update-confirm":{"source":"iana"},"application/tamp-community-update":{"source":"iana"},"application/tamp-community-update-confirm":{"source":"iana"},"application/tamp-error":{"source":"iana"},"application/tamp-sequence-adjust":{"source":"iana"},"application/tamp-sequence-adjust-confirm":{"source":"iana"},"application/tamp-status-query":{"source":"iana"},"application/tamp-status-response":{"source":"iana"},"application/tamp-update":{"source":"iana"},"application/tamp-update-confirm":{"source":"iana"},"application/tar":{"compressible":true},"application/tei+xml":{"source":"iana","extensions":["tei","teicorpus"]},"application/thraud+xml":{"source":"iana","extensions":["tfi"]},"application/timestamp-query":{"source":"iana"},"application/timestamp-reply":{"source":"iana"},"application/timestamped-data":{"source":"iana","extensions":["tsd"]},"application/tnauthlist":{"source":"iana"},"application/trig":{"source":"iana"},"application/ttml+xml":{"source":"iana"},"application/tve-trigger":{"source":"iana"},"application/ulpfec":{"source":"iana"},"application/urc-grpsheet+xml":{"source":"iana"},"application/urc-ressheet+xml":{"source":"iana"},"application/urc-targetdesc+xml":{"source":"iana"},"application/urc-uisocketdesc+xml":{"source":"iana"},"application/vcard+json":{"source":"iana","compressible":true},"application/vcard+xml":{"source":"iana"},"application/vemmi":{"source":"iana"},"application/vividence.scriptfile":{"source":"apache"},"application/vnd.1000minds.decision-model+xml":{"source":"iana"},"application/vnd.3gpp-prose+xml":{"source":"iana"},"application/vnd.3gpp-prose-pc3ch+xml":{"source":"iana"},"application/vnd.3gpp-v2x-local-service-information":{"source":"iana"},"application/vnd.3gpp.access-transfer-events+xml":{"source":"iana"},"application/vnd.3gpp.bsf+xml":{"source":"iana"},"application/vnd.3gpp.gmop+xml":{"source":"iana"},"application/vnd.3gpp.mcptt-affiliation-command+xml":{"source":"iana"},"application/vnd.3gpp.mcptt-floor-request+xml":{"source":"iana"},"application/vnd.3gpp.mcptt-info+xml":{"source":"iana"},"application/vnd.3gpp.mcptt-location-info+xml":{"source":"iana"},"application/vnd.3gpp.mcptt-mbms-usage-info+xml":{"source":"iana"},"application/vnd.3gpp.mcptt-signed+xml":{"source":"iana"},"application/vnd.3gpp.mid-call+xml":{"source":"iana"},"application/vnd.3gpp.pic-bw-large":{"source":"iana","extensions":["plb"]},"application/vnd.3gpp.pic-bw-small":{"source":"iana","extensions":["psb"]},"application/vnd.3gpp.pic-bw-var":{"source":"iana","extensions":["pvb"]},"application/vnd.3gpp.sms":{"source":"iana"},"application/vnd.3gpp.sms+xml":{"source":"iana"},"application/vnd.3gpp.srvcc-ext+xml":{"source":"iana"},"application/vnd.3gpp.srvcc-info+xml":{"source":"iana"},"application/vnd.3gpp.state-and-event-info+xml":{"source":"iana"},"application/vnd.3gpp.ussd+xml":{"source":"iana"},"application/vnd.3gpp2.bcmcsinfo+xml":{"source":"iana"},"application/vnd.3gpp2.sms":{"source":"iana"},"application/vnd.3gpp2.tcap":{"source":"iana","extensions":["tcap"]},"application/vnd.3lightssoftware.imagescal":{"source":"iana"},"application/vnd.3m.post-it-notes":{"source":"iana","extensions":["pwn"]},"application/vnd.accpac.simply.aso":{"source":"iana","extensions":["aso"]},"application/vnd.accpac.simply.imp":{"source":"iana","extensions":["imp"]},"application/vnd.acucobol":{"source":"iana","extensions":["acu"]},"application/vnd.acucorp":{"source":"iana","extensions":["atc","acutc"]},"application/vnd.adobe.air-application-installer-package+zip":{"source":"apache","extensions":["air"]},"application/vnd.adobe.flash.movie":{"source":"iana"},"application/vnd.adobe.formscentral.fcdt":{"source":"iana","extensions":["fcdt"]},"application/vnd.adobe.fxp":{"source":"iana","extensions":["fxp","fxpl"]},"application/vnd.adobe.partial-upload":{"source":"iana"},"application/vnd.adobe.xdp+xml":{"source":"iana","extensions":["xdp"]},"application/vnd.adobe.xfdf":{"source":"iana","extensions":["xfdf"]},"application/vnd.aether.imp":{"source":"iana"},"application/vnd.ah-barcode":{"source":"iana"},"application/vnd.ahead.space":{"source":"iana","extensions":["ahead"]},"application/vnd.airzip.filesecure.azf":{"source":"iana","extensions":["azf"]},"application/vnd.airzip.filesecure.azs":{"source":"iana","extensions":["azs"]},"application/vnd.amadeus+json":{"source":"iana","compressible":true},"application/vnd.amazon.ebook":{"source":"apache","extensions":["azw"]},"application/vnd.amazon.mobi8-ebook":{"source":"iana"},"application/vnd.americandynamics.acc":{"source":"iana","extensions":["acc"]},"application/vnd.amiga.ami":{"source":"iana","extensions":["ami"]},"application/vnd.amundsen.maze+xml":{"source":"iana"},"application/vnd.android.package-archive":{"source":"apache","compressible":false,"extensions":["apk"]},"application/vnd.anki":{"source":"iana"},"application/vnd.anser-web-certificate-issue-initiation":{"source":"iana","extensions":["cii"]},"application/vnd.anser-web-funds-transfer-initiation":{"source":"apache","extensions":["fti"]},"application/vnd.antix.game-component":{"source":"iana","extensions":["atx"]},"application/vnd.apache.thrift.binary":{"source":"iana"},"application/vnd.apache.thrift.compact":{"source":"iana"},"application/vnd.apache.thrift.json":{"source":"iana"},"application/vnd.api+json":{"source":"iana","compressible":true},"application/vnd.apothekende.reservation+json":{"source":"iana","compressible":true},"application/vnd.apple.installer+xml":{"source":"iana","extensions":["mpkg"]},"application/vnd.apple.mpegurl":{"source":"iana","extensions":["m3u8"]},"application/vnd.apple.pkpass":{"compressible":false,"extensions":["pkpass"]},"application/vnd.arastra.swi":{"source":"iana"},"application/vnd.aristanetworks.swi":{"source":"iana","extensions":["swi"]},"application/vnd.artsquare":{"source":"iana"},"application/vnd.astraea-software.iota":{"source":"iana","extensions":["iota"]},"application/vnd.audiograph":{"source":"iana","extensions":["aep"]},"application/vnd.autopackage":{"source":"iana"},"application/vnd.avalon+json":{"source":"iana","compressible":true},"application/vnd.avistar+xml":{"source":"iana"},"application/vnd.balsamiq.bmml+xml":{"source":"iana"},"application/vnd.balsamiq.bmpr":{"source":"iana"},"application/vnd.bbf.usp.msg":{"source":"iana"},"application/vnd.bbf.usp.msg+json":{"source":"iana","compressible":true},"application/vnd.bekitzur-stech+json":{"source":"iana","compressible":true},"application/vnd.bint.med-content":{"source":"iana"},"application/vnd.biopax.rdf+xml":{"source":"iana"},"application/vnd.blink-idb-value-wrapper":{"source":"iana"},"application/vnd.blueice.multipass":{"source":"iana","extensions":["mpm"]},"application/vnd.bluetooth.ep.oob":{"source":"iana"},"application/vnd.bluetooth.le.oob":{"source":"iana"},"application/vnd.bmi":{"source":"iana","extensions":["bmi"]},"application/vnd.businessobjects":{"source":"iana","extensions":["rep"]},"application/vnd.cab-jscript":{"source":"iana"},"application/vnd.canon-cpdl":{"source":"iana"},"application/vnd.canon-lips":{"source":"iana"},"application/vnd.capasystems-pg+json":{"source":"iana","compressible":true},"application/vnd.cendio.thinlinc.clientconf":{"source":"iana"},"application/vnd.century-systems.tcp_stream":{"source":"iana"},"application/vnd.chemdraw+xml":{"source":"iana","extensions":["cdxml"]},"application/vnd.chess-pgn":{"source":"iana"},"application/vnd.chipnuts.karaoke-mmd":{"source":"iana","extensions":["mmd"]},"application/vnd.cinderella":{"source":"iana","extensions":["cdy"]},"application/vnd.cirpack.isdn-ext":{"source":"iana"},"application/vnd.citationstyles.style+xml":{"source":"iana"},"application/vnd.claymore":{"source":"iana","extensions":["cla"]},"application/vnd.cloanto.rp9":{"source":"iana","extensions":["rp9"]},"application/vnd.clonk.c4group":{"source":"iana","extensions":["c4g","c4d","c4f","c4p","c4u"]},"application/vnd.cluetrust.cartomobile-config":{"source":"iana","extensions":["c11amc"]},"application/vnd.cluetrust.cartomobile-config-pkg":{"source":"iana","extensions":["c11amz"]},"application/vnd.coffeescript":{"source":"iana"},"application/vnd.collabio.xodocuments.document":{"source":"iana"},"application/vnd.collabio.xodocuments.document-template":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation-template":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet-template":{"source":"iana"},"application/vnd.collection+json":{"source":"iana","compressible":true},"application/vnd.collection.doc+json":{"source":"iana","compressible":true},"application/vnd.collection.next+json":{"source":"iana","compressible":true},"application/vnd.comicbook+zip":{"source":"iana"},"application/vnd.comicbook-rar":{"source":"iana"},"application/vnd.commerce-battelle":{"source":"iana"},"application/vnd.commonspace":{"source":"iana","extensions":["csp"]},"application/vnd.contact.cmsg":{"source":"iana","extensions":["cdbcmsg"]},"application/vnd.coreos.ignition+json":{"source":"iana","compressible":true},"application/vnd.cosmocaller":{"source":"iana","extensions":["cmc"]},"application/vnd.crick.clicker":{"source":"iana","extensions":["clkx"]},"application/vnd.crick.clicker.keyboard":{"source":"iana","extensions":["clkk"]},"application/vnd.crick.clicker.palette":{"source":"iana","extensions":["clkp"]},"application/vnd.crick.clicker.template":{"source":"iana","extensions":["clkt"]},"application/vnd.crick.clicker.wordbank":{"source":"iana","extensions":["clkw"]},"application/vnd.criticaltools.wbs+xml":{"source":"iana","extensions":["wbs"]},"application/vnd.ctc-posml":{"source":"iana","extensions":["pml"]},"application/vnd.ctct.ws+xml":{"source":"iana"},"application/vnd.cups-pdf":{"source":"iana"},"application/vnd.cups-postscript":{"source":"iana"},"application/vnd.cups-ppd":{"source":"iana","extensions":["ppd"]},"application/vnd.cups-raster":{"source":"iana"},"application/vnd.cups-raw":{"source":"iana"},"application/vnd.curl":{"source":"iana"},"application/vnd.curl.car":{"source":"apache","extensions":["car"]},"application/vnd.curl.pcurl":{"source":"apache","extensions":["pcurl"]},"application/vnd.cyan.dean.root+xml":{"source":"iana"},"application/vnd.cybank":{"source":"iana"},"application/vnd.d2l.coursepackage1p0+zip":{"source":"iana"},"application/vnd.dart":{"source":"iana","compressible":true,"extensions":["dart"]},"application/vnd.data-vision.rdz":{"source":"iana","extensions":["rdz"]},"application/vnd.datapackage+json":{"source":"iana","compressible":true},"application/vnd.dataresource+json":{"source":"iana","compressible":true},"application/vnd.debian.binary-package":{"source":"iana"},"application/vnd.dece.data":{"source":"iana","extensions":["uvf","uvvf","uvd","uvvd"]},"application/vnd.dece.ttml+xml":{"source":"iana","extensions":["uvt","uvvt"]},"application/vnd.dece.unspecified":{"source":"iana","extensions":["uvx","uvvx"]},"application/vnd.dece.zip":{"source":"iana","extensions":["uvz","uvvz"]},"application/vnd.denovo.fcselayout-link":{"source":"iana","extensions":["fe_launch"]},"application/vnd.desmume-movie":{"source":"iana"},"application/vnd.desmume.movie":{"source":"apache"},"application/vnd.dir-bi.plate-dl-nosuffix":{"source":"iana"},"application/vnd.dm.delegation+xml":{"source":"iana"},"application/vnd.dna":{"source":"iana","extensions":["dna"]},"application/vnd.document+json":{"source":"iana","compressible":true},"application/vnd.dolby.mlp":{"source":"apache","extensions":["mlp"]},"application/vnd.dolby.mobile.1":{"source":"iana"},"application/vnd.dolby.mobile.2":{"source":"iana"},"application/vnd.doremir.scorecloud-binary-document":{"source":"iana"},"application/vnd.dpgraph":{"source":"iana","extensions":["dpg"]},"application/vnd.dreamfactory":{"source":"iana","extensions":["dfac"]},"application/vnd.drive+json":{"source":"iana","compressible":true},"application/vnd.ds-keypoint":{"source":"apache","extensions":["kpxx"]},"application/vnd.dtg.local":{"source":"iana"},"application/vnd.dtg.local.flash":{"source":"iana"},"application/vnd.dtg.local.html":{"source":"iana"},"application/vnd.dvb.ait":{"source":"iana","extensions":["ait"]},"application/vnd.dvb.dvbj":{"source":"iana"},"application/vnd.dvb.esgcontainer":{"source":"iana"},"application/vnd.dvb.ipdcdftnotifaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess2":{"source":"iana"},"application/vnd.dvb.ipdcesgpdd":{"source":"iana"},"application/vnd.dvb.ipdcroaming":{"source":"iana"},"application/vnd.dvb.iptv.alfec-base":{"source":"iana"},"application/vnd.dvb.iptv.alfec-enhancement":{"source":"iana"},"application/vnd.dvb.notif-aggregate-root+xml":{"source":"iana"},"application/vnd.dvb.notif-container+xml":{"source":"iana"},"application/vnd.dvb.notif-generic+xml":{"source":"iana"},"application/vnd.dvb.notif-ia-msglist+xml":{"source":"iana"},"application/vnd.dvb.notif-ia-registration-request+xml":{"source":"iana"},"application/vnd.dvb.notif-ia-registration-response+xml":{"source":"iana"},"application/vnd.dvb.notif-init+xml":{"source":"iana"},"application/vnd.dvb.pfr":{"source":"iana"},"application/vnd.dvb.service":{"source":"iana","extensions":["svc"]},"application/vnd.dxr":{"source":"iana"},"application/vnd.dynageo":{"source":"iana","extensions":["geo"]},"application/vnd.dzr":{"source":"iana"},"application/vnd.easykaraoke.cdgdownload":{"source":"iana"},"application/vnd.ecdis-update":{"source":"iana"},"application/vnd.ecip.rlp":{"source":"iana"},"application/vnd.ecowin.chart":{"source":"iana","extensions":["mag"]},"application/vnd.ecowin.filerequest":{"source":"iana"},"application/vnd.ecowin.fileupdate":{"source":"iana"},"application/vnd.ecowin.series":{"source":"iana"},"application/vnd.ecowin.seriesrequest":{"source":"iana"},"application/vnd.ecowin.seriesupdate":{"source":"iana"},"application/vnd.efi.img":{"source":"iana"},"application/vnd.efi.iso":{"source":"iana"},"application/vnd.emclient.accessrequest+xml":{"source":"iana"},"application/vnd.enliven":{"source":"iana","extensions":["nml"]},"application/vnd.enphase.envoy":{"source":"iana"},"application/vnd.eprints.data+xml":{"source":"iana"},"application/vnd.epson.esf":{"source":"iana","extensions":["esf"]},"application/vnd.epson.msf":{"source":"iana","extensions":["msf"]},"application/vnd.epson.quickanime":{"source":"iana","extensions":["qam"]},"application/vnd.epson.salt":{"source":"iana","extensions":["slt"]},"application/vnd.epson.ssf":{"source":"iana","extensions":["ssf"]},"application/vnd.ericsson.quickcall":{"source":"iana"},"application/vnd.espass-espass+zip":{"source":"iana"},"application/vnd.eszigno3+xml":{"source":"iana","extensions":["es3","et3"]},"application/vnd.etsi.aoc+xml":{"source":"iana"},"application/vnd.etsi.asic-e+zip":{"source":"iana"},"application/vnd.etsi.asic-s+zip":{"source":"iana"},"application/vnd.etsi.cug+xml":{"source":"iana"},"application/vnd.etsi.iptvcommand+xml":{"source":"iana"},"application/vnd.etsi.iptvdiscovery+xml":{"source":"iana"},"application/vnd.etsi.iptvprofile+xml":{"source":"iana"},"application/vnd.etsi.iptvsad-bc+xml":{"source":"iana"},"application/vnd.etsi.iptvsad-cod+xml":{"source":"iana"},"application/vnd.etsi.iptvsad-npvr+xml":{"source":"iana"},"application/vnd.etsi.iptvservice+xml":{"source":"iana"},"application/vnd.etsi.iptvsync+xml":{"source":"iana"},"application/vnd.etsi.iptvueprofile+xml":{"source":"iana"},"application/vnd.etsi.mcid+xml":{"source":"iana"},"application/vnd.etsi.mheg5":{"source":"iana"},"application/vnd.etsi.overload-control-policy-dataset+xml":{"source":"iana"},"application/vnd.etsi.pstn+xml":{"source":"iana"},"application/vnd.etsi.sci+xml":{"source":"iana"},"application/vnd.etsi.simservs+xml":{"source":"iana"},"application/vnd.etsi.timestamp-token":{"source":"iana"},"application/vnd.etsi.tsl+xml":{"source":"iana"},"application/vnd.etsi.tsl.der":{"source":"iana"},"application/vnd.eudora.data":{"source":"iana"},"application/vnd.evolv.ecig.profile":{"source":"iana"},"application/vnd.evolv.ecig.settings":{"source":"iana"},"application/vnd.evolv.ecig.theme":{"source":"iana"},"application/vnd.ezpix-album":{"source":"iana","extensions":["ez2"]},"application/vnd.ezpix-package":{"source":"iana","extensions":["ez3"]},"application/vnd.f-secure.mobile":{"source":"iana"},"application/vnd.fastcopy-disk-image":{"source":"iana"},"application/vnd.fdf":{"source":"iana","extensions":["fdf"]},"application/vnd.fdsn.mseed":{"source":"iana","extensions":["mseed"]},"application/vnd.fdsn.seed":{"source":"iana","extensions":["seed","dataless"]},"application/vnd.ffsns":{"source":"iana"},"application/vnd.filmit.zfc":{"source":"iana"},"application/vnd.fints":{"source":"iana"},"application/vnd.firemonkeys.cloudcell":{"source":"iana"},"application/vnd.flographit":{"source":"iana","extensions":["gph"]},"application/vnd.fluxtime.clip":{"source":"iana","extensions":["ftc"]},"application/vnd.font-fontforge-sfd":{"source":"iana"},"application/vnd.framemaker":{"source":"iana","extensions":["fm","frame","maker","book"]},"application/vnd.frogans.fnc":{"source":"iana","extensions":["fnc"]},"application/vnd.frogans.ltf":{"source":"iana","extensions":["ltf"]},"application/vnd.fsc.weblaunch":{"source":"iana","extensions":["fsc"]},"application/vnd.fujitsu.oasys":{"source":"iana","extensions":["oas"]},"application/vnd.fujitsu.oasys2":{"source":"iana","extensions":["oa2"]},"application/vnd.fujitsu.oasys3":{"source":"iana","extensions":["oa3"]},"application/vnd.fujitsu.oasysgp":{"source":"iana","extensions":["fg5"]},"application/vnd.fujitsu.oasysprs":{"source":"iana","extensions":["bh2"]},"application/vnd.fujixerox.art-ex":{"source":"iana"},"application/vnd.fujixerox.art4":{"source":"iana"},"application/vnd.fujixerox.ddd":{"source":"iana","extensions":["ddd"]},"application/vnd.fujixerox.docuworks":{"source":"iana","extensions":["xdw"]},"application/vnd.fujixerox.docuworks.binder":{"source":"iana","extensions":["xbd"]},"application/vnd.fujixerox.docuworks.container":{"source":"iana"},"application/vnd.fujixerox.hbpl":{"source":"iana"},"application/vnd.fut-misnet":{"source":"iana"},"application/vnd.fuzzysheet":{"source":"iana","extensions":["fzs"]},"application/vnd.genomatix.tuxedo":{"source":"iana","extensions":["txd"]},"application/vnd.geo+json":{"source":"iana","compressible":true},"application/vnd.geocube+xml":{"source":"iana"},"application/vnd.geogebra.file":{"source":"iana","extensions":["ggb"]},"application/vnd.geogebra.tool":{"source":"iana","extensions":["ggt"]},"application/vnd.geometry-explorer":{"source":"iana","extensions":["gex","gre"]},"application/vnd.geonext":{"source":"iana","extensions":["gxt"]},"application/vnd.geoplan":{"source":"iana","extensions":["g2w"]},"application/vnd.geospace":{"source":"iana","extensions":["g3w"]},"application/vnd.gerber":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt-response":{"source":"iana"},"application/vnd.gmx":{"source":"iana","extensions":["gmx"]},"application/vnd.google-apps.document":{"compressible":false,"extensions":["gdoc"]},"application/vnd.google-apps.presentation":{"compressible":false,"extensions":["gslides"]},"application/vnd.google-apps.spreadsheet":{"compressible":false,"extensions":["gsheet"]},"application/vnd.google-earth.kml+xml":{"source":"iana","compressible":true,"extensions":["kml"]},"application/vnd.google-earth.kmz":{"source":"iana","compressible":false,"extensions":["kmz"]},"application/vnd.gov.sk.e-form+xml":{"source":"iana"},"application/vnd.gov.sk.e-form+zip":{"source":"iana"},"application/vnd.gov.sk.xmldatacontainer+xml":{"source":"iana"},"application/vnd.grafeq":{"source":"iana","extensions":["gqf","gqs"]},"application/vnd.gridmp":{"source":"iana"},"application/vnd.groove-account":{"source":"iana","extensions":["gac"]},"application/vnd.groove-help":{"source":"iana","extensions":["ghf"]},"application/vnd.groove-identity-message":{"source":"iana","extensions":["gim"]},"application/vnd.groove-injector":{"source":"iana","extensions":["grv"]},"application/vnd.groove-tool-message":{"source":"iana","extensions":["gtm"]},"application/vnd.groove-tool-template":{"source":"iana","extensions":["tpl"]},"application/vnd.groove-vcard":{"source":"iana","extensions":["vcg"]},"application/vnd.hal+json":{"source":"iana","compressible":true},"application/vnd.hal+xml":{"source":"iana","extensions":["hal"]},"application/vnd.handheld-entertainment+xml":{"source":"iana","extensions":["zmm"]},"application/vnd.hbci":{"source":"iana","extensions":["hbci"]},"application/vnd.hc+json":{"source":"iana","compressible":true},"application/vnd.hcl-bireports":{"source":"iana"},"application/vnd.hdt":{"source":"iana"},"application/vnd.heroku+json":{"source":"iana","compressible":true},"application/vnd.hhe.lesson-player":{"source":"iana","extensions":["les"]},"application/vnd.hp-hpgl":{"source":"iana","extensions":["hpgl"]},"application/vnd.hp-hpid":{"source":"iana","extensions":["hpid"]},"application/vnd.hp-hps":{"source":"iana","extensions":["hps"]},"application/vnd.hp-jlyt":{"source":"iana","extensions":["jlt"]},"application/vnd.hp-pcl":{"source":"iana","extensions":["pcl"]},"application/vnd.hp-pclxl":{"source":"iana","extensions":["pclxl"]},"application/vnd.httphone":{"source":"iana"},"application/vnd.hydrostatix.sof-data":{"source":"iana","extensions":["sfd-hdstx"]},"application/vnd.hyper-item+json":{"source":"iana","compressible":true},"application/vnd.hyperdrive+json":{"source":"iana","compressible":true},"application/vnd.hzn-3d-crossword":{"source":"iana"},"application/vnd.ibm.afplinedata":{"source":"iana"},"application/vnd.ibm.electronic-media":{"source":"iana"},"application/vnd.ibm.minipay":{"source":"iana","extensions":["mpy"]},"application/vnd.ibm.modcap":{"source":"iana","extensions":["afp","listafp","list3820"]},"application/vnd.ibm.rights-management":{"source":"iana","extensions":["irm"]},"application/vnd.ibm.secure-container":{"source":"iana","extensions":["sc"]},"application/vnd.iccprofile":{"source":"iana","extensions":["icc","icm"]},"application/vnd.ieee.1905":{"source":"iana"},"application/vnd.igloader":{"source":"iana","extensions":["igl"]},"application/vnd.imagemeter.folder+zip":{"source":"iana"},"application/vnd.imagemeter.image+zip":{"source":"iana"},"application/vnd.immervision-ivp":{"source":"iana","extensions":["ivp"]},"application/vnd.immervision-ivu":{"source":"iana","extensions":["ivu"]},"application/vnd.ims.imsccv1p1":{"source":"iana"},"application/vnd.ims.imsccv1p2":{"source":"iana"},"application/vnd.ims.imsccv1p3":{"source":"iana"},"application/vnd.ims.lis.v2.result+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolconsumerprofile+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy.id+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings.simple+json":{"source":"iana","compressible":true},"application/vnd.informedcontrol.rms+xml":{"source":"iana"},"application/vnd.informix-visionary":{"source":"iana"},"application/vnd.infotech.project":{"source":"iana"},"application/vnd.infotech.project+xml":{"source":"iana"},"application/vnd.innopath.wamp.notification":{"source":"iana"},"application/vnd.insors.igm":{"source":"iana","extensions":["igm"]},"application/vnd.intercon.formnet":{"source":"iana","extensions":["xpw","xpx"]},"application/vnd.intergeo":{"source":"iana","extensions":["i2g"]},"application/vnd.intertrust.digibox":{"source":"iana"},"application/vnd.intertrust.nncp":{"source":"iana"},"application/vnd.intu.qbo":{"source":"iana","extensions":["qbo"]},"application/vnd.intu.qfx":{"source":"iana","extensions":["qfx"]},"application/vnd.iptc.g2.catalogitem+xml":{"source":"iana"},"application/vnd.iptc.g2.conceptitem+xml":{"source":"iana"},"application/vnd.iptc.g2.knowledgeitem+xml":{"source":"iana"},"application/vnd.iptc.g2.newsitem+xml":{"source":"iana"},"application/vnd.iptc.g2.newsmessage+xml":{"source":"iana"},"application/vnd.iptc.g2.packageitem+xml":{"source":"iana"},"application/vnd.iptc.g2.planningitem+xml":{"source":"iana"},"application/vnd.ipunplugged.rcprofile":{"source":"iana","extensions":["rcprofile"]},"application/vnd.irepository.package+xml":{"source":"iana","extensions":["irp"]},"application/vnd.is-xpr":{"source":"iana","extensions":["xpr"]},"application/vnd.isac.fcs":{"source":"iana","extensions":["fcs"]},"application/vnd.jam":{"source":"iana","extensions":["jam"]},"application/vnd.japannet-directory-service":{"source":"iana"},"application/vnd.japannet-jpnstore-wakeup":{"source":"iana"},"application/vnd.japannet-payment-wakeup":{"source":"iana"},"application/vnd.japannet-registration":{"source":"iana"},"application/vnd.japannet-registration-wakeup":{"source":"iana"},"application/vnd.japannet-setstore-wakeup":{"source":"iana"},"application/vnd.japannet-verification":{"source":"iana"},"application/vnd.japannet-verification-wakeup":{"source":"iana"},"application/vnd.jcp.javame.midlet-rms":{"source":"iana","extensions":["rms"]},"application/vnd.jisp":{"source":"iana","extensions":["jisp"]},"application/vnd.joost.joda-archive":{"source":"iana","extensions":["joda"]},"application/vnd.jsk.isdn-ngn":{"source":"iana"},"application/vnd.kahootz":{"source":"iana","extensions":["ktz","ktr"]},"application/vnd.kde.karbon":{"source":"iana","extensions":["karbon"]},"application/vnd.kde.kchart":{"source":"iana","extensions":["chrt"]},"application/vnd.kde.kformula":{"source":"iana","extensions":["kfo"]},"application/vnd.kde.kivio":{"source":"iana","extensions":["flw"]},"application/vnd.kde.kontour":{"source":"iana","extensions":["kon"]},"application/vnd.kde.kpresenter":{"source":"iana","extensions":["kpr","kpt"]},"application/vnd.kde.kspread":{"source":"iana","extensions":["ksp"]},"application/vnd.kde.kword":{"source":"iana","extensions":["kwd","kwt"]},"application/vnd.kenameaapp":{"source":"iana","extensions":["htke"]},"application/vnd.kidspiration":{"source":"iana","extensions":["kia"]},"application/vnd.kinar":{"source":"iana","extensions":["kne","knp"]},"application/vnd.koan":{"source":"iana","extensions":["skp","skd","skt","skm"]},"application/vnd.kodak-descriptor":{"source":"iana","extensions":["sse"]},"application/vnd.las.las+json":{"source":"iana","compressible":true},"application/vnd.las.las+xml":{"source":"iana","extensions":["lasxml"]},"application/vnd.liberty-request+xml":{"source":"iana"},"application/vnd.llamagraphics.life-balance.desktop":{"source":"iana","extensions":["lbd"]},"application/vnd.llamagraphics.life-balance.exchange+xml":{"source":"iana","extensions":["lbe"]},"application/vnd.lotus-1-2-3":{"source":"iana","extensions":["123"]},"application/vnd.lotus-approach":{"source":"iana","extensions":["apr"]},"application/vnd.lotus-freelance":{"source":"iana","extensions":["pre"]},"application/vnd.lotus-notes":{"source":"iana","extensions":["nsf"]},"application/vnd.lotus-organizer":{"source":"iana","extensions":["org"]},"application/vnd.lotus-screencam":{"source":"iana","extensions":["scm"]},"application/vnd.lotus-wordpro":{"source":"iana","extensions":["lwp"]},"application/vnd.macports.portpkg":{"source":"iana","extensions":["portpkg"]},"application/vnd.mapbox-vector-tile":{"source":"iana"},"application/vnd.marlin.drm.actiontoken+xml":{"source":"iana"},"application/vnd.marlin.drm.conftoken+xml":{"source":"iana"},"application/vnd.marlin.drm.license+xml":{"source":"iana"},"application/vnd.marlin.drm.mdcf":{"source":"iana"},"application/vnd.mason+json":{"source":"iana","compressible":true},"application/vnd.maxmind.maxmind-db":{"source":"iana"},"application/vnd.mcd":{"source":"iana","extensions":["mcd"]},"application/vnd.medcalcdata":{"source":"iana","extensions":["mc1"]},"application/vnd.mediastation.cdkey":{"source":"iana","extensions":["cdkey"]},"application/vnd.meridian-slingshot":{"source":"iana"},"application/vnd.mfer":{"source":"iana","extensions":["mwf"]},"application/vnd.mfmp":{"source":"iana","extensions":["mfm"]},"application/vnd.micro+json":{"source":"iana","compressible":true},"application/vnd.micrografx.flo":{"source":"iana","extensions":["flo"]},"application/vnd.micrografx.igx":{"source":"iana","extensions":["igx"]},"application/vnd.microsoft.portable-executable":{"source":"iana"},"application/vnd.microsoft.windows.thumbnail-cache":{"source":"iana"},"application/vnd.miele+json":{"source":"iana","compressible":true},"application/vnd.mif":{"source":"iana","extensions":["mif"]},"application/vnd.minisoft-hp3000-save":{"source":"iana"},"application/vnd.mitsubishi.misty-guard.trustweb":{"source":"iana"},"application/vnd.mobius.daf":{"source":"iana","extensions":["daf"]},"application/vnd.mobius.dis":{"source":"iana","extensions":["dis"]},"application/vnd.mobius.mbk":{"source":"iana","extensions":["mbk"]},"application/vnd.mobius.mqy":{"source":"iana","extensions":["mqy"]},"application/vnd.mobius.msl":{"source":"iana","extensions":["msl"]},"application/vnd.mobius.plc":{"source":"iana","extensions":["plc"]},"application/vnd.mobius.txf":{"source":"iana","extensions":["txf"]},"application/vnd.mophun.application":{"source":"iana","extensions":["mpn"]},"application/vnd.mophun.certificate":{"source":"iana","extensions":["mpc"]},"application/vnd.motorola.flexsuite":{"source":"iana"},"application/vnd.motorola.flexsuite.adsi":{"source":"iana"},"application/vnd.motorola.flexsuite.fis":{"source":"iana"},"application/vnd.motorola.flexsuite.gotap":{"source":"iana"},"application/vnd.motorola.flexsuite.kmr":{"source":"iana"},"application/vnd.motorola.flexsuite.ttc":{"source":"iana"},"application/vnd.motorola.flexsuite.wem":{"source":"iana"},"application/vnd.motorola.iprm":{"source":"iana"},"application/vnd.mozilla.xul+xml":{"source":"iana","compressible":true,"extensions":["xul"]},"application/vnd.ms-3mfdocument":{"source":"iana"},"application/vnd.ms-artgalry":{"source":"iana","extensions":["cil"]},"application/vnd.ms-asf":{"source":"iana"},"application/vnd.ms-cab-compressed":{"source":"iana","extensions":["cab"]},"application/vnd.ms-color.iccprofile":{"source":"apache"},"application/vnd.ms-excel":{"source":"iana","compressible":false,"extensions":["xls","xlm","xla","xlc","xlt","xlw"]},"application/vnd.ms-excel.addin.macroenabled.12":{"source":"iana","extensions":["xlam"]},"application/vnd.ms-excel.sheet.binary.macroenabled.12":{"source":"iana","extensions":["xlsb"]},"application/vnd.ms-excel.sheet.macroenabled.12":{"source":"iana","extensions":["xlsm"]},"application/vnd.ms-excel.template.macroenabled.12":{"source":"iana","extensions":["xltm"]},"application/vnd.ms-fontobject":{"source":"iana","compressible":true,"extensions":["eot"]},"application/vnd.ms-htmlhelp":{"source":"iana","extensions":["chm"]},"application/vnd.ms-ims":{"source":"iana","extensions":["ims"]},"application/vnd.ms-lrm":{"source":"iana","extensions":["lrm"]},"application/vnd.ms-office.activex+xml":{"source":"iana"},"application/vnd.ms-officetheme":{"source":"iana","extensions":["thmx"]},"application/vnd.ms-opentype":{"source":"apache","compressible":true},"application/vnd.ms-outlook":{"compressible":false,"extensions":["msg"]},"application/vnd.ms-package.obfuscated-opentype":{"source":"apache"},"application/vnd.ms-pki.seccat":{"source":"apache","extensions":["cat"]},"application/vnd.ms-pki.stl":{"source":"apache","extensions":["stl"]},"application/vnd.ms-playready.initiator+xml":{"source":"iana"},"application/vnd.ms-powerpoint":{"source":"iana","compressible":false,"extensions":["ppt","pps","pot"]},"application/vnd.ms-powerpoint.addin.macroenabled.12":{"source":"iana","extensions":["ppam"]},"application/vnd.ms-powerpoint.presentation.macroenabled.12":{"source":"iana","extensions":["pptm"]},"application/vnd.ms-powerpoint.slide.macroenabled.12":{"source":"iana","extensions":["sldm"]},"application/vnd.ms-powerpoint.slideshow.macroenabled.12":{"source":"iana","extensions":["ppsm"]},"application/vnd.ms-powerpoint.template.macroenabled.12":{"source":"iana","extensions":["potm"]},"application/vnd.ms-printdevicecapabilities+xml":{"source":"iana"},"application/vnd.ms-printing.printticket+xml":{"source":"apache"},"application/vnd.ms-printschematicket+xml":{"source":"iana"},"application/vnd.ms-project":{"source":"iana","extensions":["mpp","mpt"]},"application/vnd.ms-tnef":{"source":"iana"},"application/vnd.ms-windows.devicepairing":{"source":"iana"},"application/vnd.ms-windows.nwprinting.oob":{"source":"iana"},"application/vnd.ms-windows.printerpairing":{"source":"iana"},"application/vnd.ms-windows.wsd.oob":{"source":"iana"},"application/vnd.ms-wmdrm.lic-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.lic-resp":{"source":"iana"},"application/vnd.ms-wmdrm.meter-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.meter-resp":{"source":"iana"},"application/vnd.ms-word.document.macroenabled.12":{"source":"iana","extensions":["docm"]},"application/vnd.ms-word.template.macroenabled.12":{"source":"iana","extensions":["dotm"]},"application/vnd.ms-works":{"source":"iana","extensions":["wps","wks","wcm","wdb"]},"application/vnd.ms-wpl":{"source":"iana","extensions":["wpl"]},"application/vnd.ms-xpsdocument":{"source":"iana","compressible":false,"extensions":["xps"]},"application/vnd.msa-disk-image":{"source":"iana"},"application/vnd.mseq":{"source":"iana","extensions":["mseq"]},"application/vnd.msign":{"source":"iana"},"application/vnd.multiad.creator":{"source":"iana"},"application/vnd.multiad.creator.cif":{"source":"iana"},"application/vnd.music-niff":{"source":"iana"},"application/vnd.musician":{"source":"iana","extensions":["mus"]},"application/vnd.muvee.style":{"source":"iana","extensions":["msty"]},"application/vnd.mynfc":{"source":"iana","extensions":["taglet"]},"application/vnd.ncd.control":{"source":"iana"},"application/vnd.ncd.reference":{"source":"iana"},"application/vnd.nearst.inv+json":{"source":"iana","compressible":true},"application/vnd.nervana":{"source":"iana"},"application/vnd.netfpx":{"source":"iana"},"application/vnd.neurolanguage.nlu":{"source":"iana","extensions":["nlu"]},"application/vnd.nintendo.nitro.rom":{"source":"iana"},"application/vnd.nintendo.snes.rom":{"source":"iana"},"application/vnd.nitf":{"source":"iana","extensions":["ntf","nitf"]},"application/vnd.noblenet-directory":{"source":"iana","extensions":["nnd"]},"application/vnd.noblenet-sealer":{"source":"iana","extensions":["nns"]},"application/vnd.noblenet-web":{"source":"iana","extensions":["nnw"]},"application/vnd.nokia.catalogs":{"source":"iana"},"application/vnd.nokia.conml+wbxml":{"source":"iana"},"application/vnd.nokia.conml+xml":{"source":"iana"},"application/vnd.nokia.iptv.config+xml":{"source":"iana"},"application/vnd.nokia.isds-radio-presets":{"source":"iana"},"application/vnd.nokia.landmark+wbxml":{"source":"iana"},"application/vnd.nokia.landmark+xml":{"source":"iana"},"application/vnd.nokia.landmarkcollection+xml":{"source":"iana"},"application/vnd.nokia.n-gage.ac+xml":{"source":"iana"},"application/vnd.nokia.n-gage.data":{"source":"iana","extensions":["ngdat"]},"application/vnd.nokia.n-gage.symbian.install":{"source":"iana","extensions":["n-gage"]},"application/vnd.nokia.ncd":{"source":"iana"},"application/vnd.nokia.pcd+wbxml":{"source":"iana"},"application/vnd.nokia.pcd+xml":{"source":"iana"},"application/vnd.nokia.radio-preset":{"source":"iana","extensions":["rpst"]},"application/vnd.nokia.radio-presets":{"source":"iana","extensions":["rpss"]},"application/vnd.novadigm.edm":{"source":"iana","extensions":["edm"]},"application/vnd.novadigm.edx":{"source":"iana","extensions":["edx"]},"application/vnd.novadigm.ext":{"source":"iana","extensions":["ext"]},"application/vnd.ntt-local.content-share":{"source":"iana"},"application/vnd.ntt-local.file-transfer":{"source":"iana"},"application/vnd.ntt-local.ogw_remote-access":{"source":"iana"},"application/vnd.ntt-local.sip-ta_remote":{"source":"iana"},"application/vnd.ntt-local.sip-ta_tcp_stream":{"source":"iana"},"application/vnd.oasis.opendocument.chart":{"source":"iana","extensions":["odc"]},"application/vnd.oasis.opendocument.chart-template":{"source":"iana","extensions":["otc"]},"application/vnd.oasis.opendocument.database":{"source":"iana","extensions":["odb"]},"application/vnd.oasis.opendocument.formula":{"source":"iana","extensions":["odf"]},"application/vnd.oasis.opendocument.formula-template":{"source":"iana","extensions":["odft"]},"application/vnd.oasis.opendocument.graphics":{"source":"iana","compressible":false,"extensions":["odg"]},"application/vnd.oasis.opendocument.graphics-template":{"source":"iana","extensions":["otg"]},"application/vnd.oasis.opendocument.image":{"source":"iana","extensions":["odi"]},"application/vnd.oasis.opendocument.image-template":{"source":"iana","extensions":["oti"]},"application/vnd.oasis.opendocument.presentation":{"source":"iana","compressible":false,"extensions":["odp"]},"application/vnd.oasis.opendocument.presentation-template":{"source":"iana","extensions":["otp"]},"application/vnd.oasis.opendocument.spreadsheet":{"source":"iana","compressible":false,"extensions":["ods"]},"application/vnd.oasis.opendocument.spreadsheet-template":{"source":"iana","extensions":["ots"]},"application/vnd.oasis.opendocument.text":{"source":"iana","compressible":false,"extensions":["odt"]},"application/vnd.oasis.opendocument.text-master":{"source":"iana","extensions":["odm"]},"application/vnd.oasis.opendocument.text-template":{"source":"iana","extensions":["ott"]},"application/vnd.oasis.opendocument.text-web":{"source":"iana","extensions":["oth"]},"application/vnd.obn":{"source":"iana"},"application/vnd.ocf+cbor":{"source":"iana"},"application/vnd.oftn.l10n+json":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessdownload+xml":{"source":"iana"},"application/vnd.oipf.contentaccessstreaming+xml":{"source":"iana"},"application/vnd.oipf.cspg-hexbinary":{"source":"iana"},"application/vnd.oipf.dae.svg+xml":{"source":"iana"},"application/vnd.oipf.dae.xhtml+xml":{"source":"iana"},"application/vnd.oipf.mippvcontrolmessage+xml":{"source":"iana"},"application/vnd.oipf.pae.gem":{"source":"iana"},"application/vnd.oipf.spdiscovery+xml":{"source":"iana"},"application/vnd.oipf.spdlist+xml":{"source":"iana"},"application/vnd.oipf.ueprofile+xml":{"source":"iana"},"application/vnd.oipf.userprofile+xml":{"source":"iana"},"application/vnd.olpc-sugar":{"source":"iana","extensions":["xo"]},"application/vnd.oma-scws-config":{"source":"iana"},"application/vnd.oma-scws-http-request":{"source":"iana"},"application/vnd.oma-scws-http-response":{"source":"iana"},"application/vnd.oma.bcast.associated-procedure-parameter+xml":{"source":"iana"},"application/vnd.oma.bcast.drm-trigger+xml":{"source":"iana"},"application/vnd.oma.bcast.imd+xml":{"source":"iana"},"application/vnd.oma.bcast.ltkm":{"source":"iana"},"application/vnd.oma.bcast.notification+xml":{"source":"iana"},"application/vnd.oma.bcast.provisioningtrigger":{"source":"iana"},"application/vnd.oma.bcast.sgboot":{"source":"iana"},"application/vnd.oma.bcast.sgdd+xml":{"source":"iana"},"application/vnd.oma.bcast.sgdu":{"source":"iana"},"application/vnd.oma.bcast.simple-symbol-container":{"source":"iana"},"application/vnd.oma.bcast.smartcard-trigger+xml":{"source":"iana"},"application/vnd.oma.bcast.sprov+xml":{"source":"iana"},"application/vnd.oma.bcast.stkm":{"source":"iana"},"application/vnd.oma.cab-address-book+xml":{"source":"iana"},"application/vnd.oma.cab-feature-handler+xml":{"source":"iana"},"application/vnd.oma.cab-pcc+xml":{"source":"iana"},"application/vnd.oma.cab-subs-invite+xml":{"source":"iana"},"application/vnd.oma.cab-user-prefs+xml":{"source":"iana"},"application/vnd.oma.dcd":{"source":"iana"},"application/vnd.oma.dcdc":{"source":"iana"},"application/vnd.oma.dd2+xml":{"source":"iana","extensions":["dd2"]},"application/vnd.oma.drm.risd+xml":{"source":"iana"},"application/vnd.oma.group-usage-list+xml":{"source":"iana"},"application/vnd.oma.lwm2m+json":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+tlv":{"source":"iana"},"application/vnd.oma.pal+xml":{"source":"iana"},"application/vnd.oma.poc.detailed-progress-report+xml":{"source":"iana"},"application/vnd.oma.poc.final-report+xml":{"source":"iana"},"application/vnd.oma.poc.groups+xml":{"source":"iana"},"application/vnd.oma.poc.invocation-descriptor+xml":{"source":"iana"},"application/vnd.oma.poc.optimized-progress-report+xml":{"source":"iana"},"application/vnd.oma.push":{"source":"iana"},"application/vnd.oma.scidm.messages+xml":{"source":"iana"},"application/vnd.oma.xcap-directory+xml":{"source":"iana"},"application/vnd.omads-email+xml":{"source":"iana"},"application/vnd.omads-file+xml":{"source":"iana"},"application/vnd.omads-folder+xml":{"source":"iana"},"application/vnd.omaloc-supl-init":{"source":"iana"},"application/vnd.onepager":{"source":"iana"},"application/vnd.onepagertamp":{"source":"iana"},"application/vnd.onepagertamx":{"source":"iana"},"application/vnd.onepagertat":{"source":"iana"},"application/vnd.onepagertatp":{"source":"iana"},"application/vnd.onepagertatx":{"source":"iana"},"application/vnd.openblox.game+xml":{"source":"iana"},"application/vnd.openblox.game-binary":{"source":"iana"},"application/vnd.openeye.oeb":{"source":"iana"},"application/vnd.openofficeorg.extension":{"source":"apache","extensions":["oxt"]},"application/vnd.openstreetmap.data+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.custom-properties+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.customxmlproperties+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.drawing+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.extended-properties+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.comments+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{"source":"iana","compressible":false,"extensions":["pptx"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.slide":{"source":"iana","extensions":["sldx"]},"application/vnd.openxmlformats-officedocument.presentationml.slide+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.slideshow":{"source":"iana","extensions":["ppsx"]},"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.tags+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.template":{"source":"iana","extensions":["potx"]},"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{"source":"iana","compressible":false,"extensions":["xlsx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.template":{"source":"iana","extensions":["xltx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.theme+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.themeoverride+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.vmldrawing":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{"source":"iana","compressible":false,"extensions":["docx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.template":{"source":"iana","extensions":["dotx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":{"source":"iana"},"application/vnd.openxmlformats-package.core-properties+xml":{"source":"iana"},"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":{"source":"iana"},"application/vnd.openxmlformats-package.relationships+xml":{"source":"iana"},"application/vnd.oracle.resource+json":{"source":"iana","compressible":true},"application/vnd.orange.indata":{"source":"iana"},"application/vnd.osa.netdeploy":{"source":"iana"},"application/vnd.osgeo.mapguide.package":{"source":"iana","extensions":["mgp"]},"application/vnd.osgi.bundle":{"source":"iana"},"application/vnd.osgi.dp":{"source":"iana","extensions":["dp"]},"application/vnd.osgi.subsystem":{"source":"iana","extensions":["esa"]},"application/vnd.otps.ct-kip+xml":{"source":"iana"},"application/vnd.oxli.countgraph":{"source":"iana"},"application/vnd.pagerduty+json":{"source":"iana","compressible":true},"application/vnd.palm":{"source":"iana","extensions":["pdb","pqa","oprc"]},"application/vnd.panoply":{"source":"iana"},"application/vnd.paos+xml":{"source":"iana"},"application/vnd.paos.xml":{"source":"apache"},"application/vnd.patentdive":{"source":"iana"},"application/vnd.pawaafile":{"source":"iana","extensions":["paw"]},"application/vnd.pcos":{"source":"iana"},"application/vnd.pg.format":{"source":"iana","extensions":["str"]},"application/vnd.pg.osasli":{"source":"iana","extensions":["ei6"]},"application/vnd.piaccess.application-licence":{"source":"iana"},"application/vnd.picsel":{"source":"iana","extensions":["efif"]},"application/vnd.pmi.widget":{"source":"iana","extensions":["wg"]},"application/vnd.poc.group-advertisement+xml":{"source":"iana"},"application/vnd.pocketlearn":{"source":"iana","extensions":["plf"]},"application/vnd.powerbuilder6":{"source":"iana","extensions":["pbd"]},"application/vnd.powerbuilder6-s":{"source":"iana"},"application/vnd.powerbuilder7":{"source":"iana"},"application/vnd.powerbuilder7-s":{"source":"iana"},"application/vnd.powerbuilder75":{"source":"iana"},"application/vnd.powerbuilder75-s":{"source":"iana"},"application/vnd.preminet":{"source":"iana"},"application/vnd.previewsystems.box":{"source":"iana","extensions":["box"]},"application/vnd.proteus.magazine":{"source":"iana","extensions":["mgz"]},"application/vnd.publishare-delta-tree":{"source":"iana","extensions":["qps"]},"application/vnd.pvi.ptid1":{"source":"iana","extensions":["ptid"]},"application/vnd.pwg-multiplexed":{"source":"iana"},"application/vnd.pwg-xhtml-print+xml":{"source":"iana"},"application/vnd.qualcomm.brew-app-res":{"source":"iana"},"application/vnd.quarantainenet":{"source":"iana"},"application/vnd.quark.quarkxpress":{"source":"iana","extensions":["qxd","qxt","qwd","qwt","qxl","qxb"]},"application/vnd.quobject-quoxdocument":{"source":"iana"},"application/vnd.radisys.moml+xml":{"source":"iana"},"application/vnd.radisys.msml+xml":{"source":"iana"},"application/vnd.radisys.msml-audit+xml":{"source":"iana"},"application/vnd.radisys.msml-audit-conf+xml":{"source":"iana"},"application/vnd.radisys.msml-audit-conn+xml":{"source":"iana"},"application/vnd.radisys.msml-audit-dialog+xml":{"source":"iana"},"application/vnd.radisys.msml-audit-stream+xml":{"source":"iana"},"application/vnd.radisys.msml-conf+xml":{"source":"iana"},"application/vnd.radisys.msml-dialog+xml":{"source":"iana"},"application/vnd.radisys.msml-dialog-base+xml":{"source":"iana"},"application/vnd.radisys.msml-dialog-fax-detect+xml":{"source":"iana"},"application/vnd.radisys.msml-dialog-fax-sendrecv+xml":{"source":"iana"},"application/vnd.radisys.msml-dialog-group+xml":{"source":"iana"},"application/vnd.radisys.msml-dialog-speech+xml":{"source":"iana"},"application/vnd.radisys.msml-dialog-transform+xml":{"source":"iana"},"application/vnd.rainstor.data":{"source":"iana"},"application/vnd.rapid":{"source":"iana"},"application/vnd.rar":{"source":"iana"},"application/vnd.realvnc.bed":{"source":"iana","extensions":["bed"]},"application/vnd.recordare.musicxml":{"source":"iana","extensions":["mxl"]},"application/vnd.recordare.musicxml+xml":{"source":"iana","extensions":["musicxml"]},"application/vnd.renlearn.rlprint":{"source":"iana"},"application/vnd.restful+json":{"source":"iana","compressible":true},"application/vnd.rig.cryptonote":{"source":"iana","extensions":["cryptonote"]},"application/vnd.rim.cod":{"source":"apache","extensions":["cod"]},"application/vnd.rn-realmedia":{"source":"apache","extensions":["rm"]},"application/vnd.rn-realmedia-vbr":{"source":"apache","extensions":["rmvb"]},"application/vnd.route66.link66+xml":{"source":"iana","extensions":["link66"]},"application/vnd.rs-274x":{"source":"iana"},"application/vnd.ruckus.download":{"source":"iana"},"application/vnd.s3sms":{"source":"iana"},"application/vnd.sailingtracker.track":{"source":"iana","extensions":["st"]},"application/vnd.sbm.cid":{"source":"iana"},"application/vnd.sbm.mid2":{"source":"iana"},"application/vnd.scribus":{"source":"iana"},"application/vnd.sealed.3df":{"source":"iana"},"application/vnd.sealed.csf":{"source":"iana"},"application/vnd.sealed.doc":{"source":"iana"},"application/vnd.sealed.eml":{"source":"iana"},"application/vnd.sealed.mht":{"source":"iana"},"application/vnd.sealed.net":{"source":"iana"},"application/vnd.sealed.ppt":{"source":"iana"},"application/vnd.sealed.tiff":{"source":"iana"},"application/vnd.sealed.xls":{"source":"iana"},"application/vnd.sealedmedia.softseal.html":{"source":"iana"},"application/vnd.sealedmedia.softseal.pdf":{"source":"iana"},"application/vnd.seemail":{"source":"iana","extensions":["see"]},"application/vnd.sema":{"source":"iana","extensions":["sema"]},"application/vnd.semd":{"source":"iana","extensions":["semd"]},"application/vnd.semf":{"source":"iana","extensions":["semf"]},"application/vnd.shana.informed.formdata":{"source":"iana","extensions":["ifm"]},"application/vnd.shana.informed.formtemplate":{"source":"iana","extensions":["itp"]},"application/vnd.shana.informed.interchange":{"source":"iana","extensions":["iif"]},"application/vnd.shana.informed.package":{"source":"iana","extensions":["ipk"]},"application/vnd.sigrok.session":{"source":"iana"},"application/vnd.simtech-mindmapper":{"source":"iana","extensions":["twd","twds"]},"application/vnd.siren+json":{"source":"iana","compressible":true},"application/vnd.smaf":{"source":"iana","extensions":["mmf"]},"application/vnd.smart.notebook":{"source":"iana"},"application/vnd.smart.teacher":{"source":"iana","extensions":["teacher"]},"application/vnd.software602.filler.form+xml":{"source":"iana"},"application/vnd.software602.filler.form-xml-zip":{"source":"iana"},"application/vnd.solent.sdkm+xml":{"source":"iana","extensions":["sdkm","sdkd"]},"application/vnd.spotfire.dxp":{"source":"iana","extensions":["dxp"]},"application/vnd.spotfire.sfs":{"source":"iana","extensions":["sfs"]},"application/vnd.sqlite3":{"source":"iana"},"application/vnd.sss-cod":{"source":"iana"},"application/vnd.sss-dtf":{"source":"iana"},"application/vnd.sss-ntf":{"source":"iana"},"application/vnd.stardivision.calc":{"source":"apache","extensions":["sdc"]},"application/vnd.stardivision.draw":{"source":"apache","extensions":["sda"]},"application/vnd.stardivision.impress":{"source":"apache","extensions":["sdd"]},"application/vnd.stardivision.math":{"source":"apache","extensions":["smf"]},"application/vnd.stardivision.writer":{"source":"apache","extensions":["sdw","vor"]},"application/vnd.stardivision.writer-global":{"source":"apache","extensions":["sgl"]},"application/vnd.stepmania.package":{"source":"iana","extensions":["smzip"]},"application/vnd.stepmania.stepchart":{"source":"iana","extensions":["sm"]},"application/vnd.street-stream":{"source":"iana"},"application/vnd.sun.wadl+xml":{"source":"iana","compressible":true,"extensions":["wadl"]},"application/vnd.sun.xml.calc":{"source":"apache","extensions":["sxc"]},"application/vnd.sun.xml.calc.template":{"source":"apache","extensions":["stc"]},"application/vnd.sun.xml.draw":{"source":"apache","extensions":["sxd"]},"application/vnd.sun.xml.draw.template":{"source":"apache","extensions":["std"]},"application/vnd.sun.xml.impress":{"source":"apache","extensions":["sxi"]},"application/vnd.sun.xml.impress.template":{"source":"apache","extensions":["sti"]},"application/vnd.sun.xml.math":{"source":"apache","extensions":["sxm"]},"application/vnd.sun.xml.writer":{"source":"apache","extensions":["sxw"]},"application/vnd.sun.xml.writer.global":{"source":"apache","extensions":["sxg"]},"application/vnd.sun.xml.writer.template":{"source":"apache","extensions":["stw"]},"application/vnd.sus-calendar":{"source":"iana","extensions":["sus","susp"]},"application/vnd.svd":{"source":"iana","extensions":["svd"]},"application/vnd.swiftview-ics":{"source":"iana"},"application/vnd.symbian.install":{"source":"apache","extensions":["sis","sisx"]},"application/vnd.syncml+xml":{"source":"iana","extensions":["xsm"]},"application/vnd.syncml.dm+wbxml":{"source":"iana","extensions":["bdm"]},"application/vnd.syncml.dm+xml":{"source":"iana","extensions":["xdm"]},"application/vnd.syncml.dm.notification":{"source":"iana"},"application/vnd.syncml.dmddf+wbxml":{"source":"iana"},"application/vnd.syncml.dmddf+xml":{"source":"iana"},"application/vnd.syncml.dmtnds+wbxml":{"source":"iana"},"application/vnd.syncml.dmtnds+xml":{"source":"iana"},"application/vnd.syncml.ds.notification":{"source":"iana"},"application/vnd.tableschema+json":{"source":"iana","compressible":true},"application/vnd.tao.intent-module-archive":{"source":"iana","extensions":["tao"]},"application/vnd.tcpdump.pcap":{"source":"iana","extensions":["pcap","cap","dmp"]},"application/vnd.tmd.mediaflex.api+xml":{"source":"iana"},"application/vnd.tml":{"source":"iana"},"application/vnd.tmobile-livetv":{"source":"iana","extensions":["tmo"]},"application/vnd.tri.onesource":{"source":"iana"},"application/vnd.trid.tpt":{"source":"iana","extensions":["tpt"]},"application/vnd.triscape.mxs":{"source":"iana","extensions":["mxs"]},"application/vnd.trueapp":{"source":"iana","extensions":["tra"]},"application/vnd.truedoc":{"source":"iana"},"application/vnd.ubisoft.webplayer":{"source":"iana"},"application/vnd.ufdl":{"source":"iana","extensions":["ufd","ufdl"]},"application/vnd.uiq.theme":{"source":"iana","extensions":["utz"]},"application/vnd.umajin":{"source":"iana","extensions":["umj"]},"application/vnd.unity":{"source":"iana","extensions":["unityweb"]},"application/vnd.uoml+xml":{"source":"iana","extensions":["uoml"]},"application/vnd.uplanet.alert":{"source":"iana"},"application/vnd.uplanet.alert-wbxml":{"source":"iana"},"application/vnd.uplanet.bearer-choice":{"source":"iana"},"application/vnd.uplanet.bearer-choice-wbxml":{"source":"iana"},"application/vnd.uplanet.cacheop":{"source":"iana"},"application/vnd.uplanet.cacheop-wbxml":{"source":"iana"},"application/vnd.uplanet.channel":{"source":"iana"},"application/vnd.uplanet.channel-wbxml":{"source":"iana"},"application/vnd.uplanet.list":{"source":"iana"},"application/vnd.uplanet.list-wbxml":{"source":"iana"},"application/vnd.uplanet.listcmd":{"source":"iana"},"application/vnd.uplanet.listcmd-wbxml":{"source":"iana"},"application/vnd.uplanet.signal":{"source":"iana"},"application/vnd.uri-map":{"source":"iana"},"application/vnd.valve.source.material":{"source":"iana"},"application/vnd.vcx":{"source":"iana","extensions":["vcx"]},"application/vnd.vd-study":{"source":"iana"},"application/vnd.vectorworks":{"source":"iana"},"application/vnd.vel+json":{"source":"iana","compressible":true},"application/vnd.verimatrix.vcas":{"source":"iana"},"application/vnd.vidsoft.vidconference":{"source":"iana"},"application/vnd.visio":{"source":"iana","extensions":["vsd","vst","vss","vsw"]},"application/vnd.visionary":{"source":"iana","extensions":["vis"]},"application/vnd.vividence.scriptfile":{"source":"iana"},"application/vnd.vsf":{"source":"iana","extensions":["vsf"]},"application/vnd.wap.sic":{"source":"iana"},"application/vnd.wap.slc":{"source":"iana"},"application/vnd.wap.wbxml":{"source":"iana","extensions":["wbxml"]},"application/vnd.wap.wmlc":{"source":"iana","extensions":["wmlc"]},"application/vnd.wap.wmlscriptc":{"source":"iana","extensions":["wmlsc"]},"application/vnd.webturbo":{"source":"iana","extensions":["wtb"]},"application/vnd.wfa.p2p":{"source":"iana"},"application/vnd.wfa.wsc":{"source":"iana"},"application/vnd.windows.devicepairing":{"source":"iana"},"application/vnd.wmc":{"source":"iana"},"application/vnd.wmf.bootstrap":{"source":"iana"},"application/vnd.wolfram.mathematica":{"source":"iana"},"application/vnd.wolfram.mathematica.package":{"source":"iana"},"application/vnd.wolfram.player":{"source":"iana","extensions":["nbp"]},"application/vnd.wordperfect":{"source":"iana","extensions":["wpd"]},"application/vnd.wqd":{"source":"iana","extensions":["wqd"]},"application/vnd.wrq-hp3000-labelled":{"source":"iana"},"application/vnd.wt.stf":{"source":"iana","extensions":["stf"]},"application/vnd.wv.csp+wbxml":{"source":"iana"},"application/vnd.wv.csp+xml":{"source":"iana"},"application/vnd.wv.ssp+xml":{"source":"iana"},"application/vnd.xacml+json":{"source":"iana","compressible":true},"application/vnd.xara":{"source":"iana","extensions":["xar"]},"application/vnd.xfdl":{"source":"iana","extensions":["xfdl"]},"application/vnd.xfdl.webform":{"source":"iana"},"application/vnd.xmi+xml":{"source":"iana"},"application/vnd.xmpie.cpkg":{"source":"iana"},"application/vnd.xmpie.dpkg":{"source":"iana"},"application/vnd.xmpie.plan":{"source":"iana"},"application/vnd.xmpie.ppkg":{"source":"iana"},"application/vnd.xmpie.xlim":{"source":"iana"},"application/vnd.yamaha.hv-dic":{"source":"iana","extensions":["hvd"]},"application/vnd.yamaha.hv-script":{"source":"iana","extensions":["hvs"]},"application/vnd.yamaha.hv-voice":{"source":"iana","extensions":["hvp"]},"application/vnd.yamaha.openscoreformat":{"source":"iana","extensions":["osf"]},"application/vnd.yamaha.openscoreformat.osfpvg+xml":{"source":"iana","extensions":["osfpvg"]},"application/vnd.yamaha.remote-setup":{"source":"iana"},"application/vnd.yamaha.smaf-audio":{"source":"iana","extensions":["saf"]},"application/vnd.yamaha.smaf-phrase":{"source":"iana","extensions":["spf"]},"application/vnd.yamaha.through-ngn":{"source":"iana"},"application/vnd.yamaha.tunnel-udpencap":{"source":"iana"},"application/vnd.yaoweme":{"source":"iana"},"application/vnd.yellowriver-custom-menu":{"source":"iana","extensions":["cmp"]},"application/vnd.youtube.yt":{"source":"iana"},"application/vnd.zul":{"source":"iana","extensions":["zir","zirz"]},"application/vnd.zzazz.deck+xml":{"source":"iana","extensions":["zaz"]},"application/voicexml+xml":{"source":"iana","extensions":["vxml"]},"application/voucher-cms+json":{"source":"iana","compressible":true},"application/vq-rtcpxr":{"source":"iana"},"application/wasm":{"compressible":true,"extensions":["wasm"]},"application/watcherinfo+xml":{"source":"iana"},"application/webpush-options+json":{"source":"iana","compressible":true},"application/whoispp-query":{"source":"iana"},"application/whoispp-response":{"source":"iana"},"application/widget":{"source":"iana","extensions":["wgt"]},"application/winhlp":{"source":"apache","extensions":["hlp"]},"application/wita":{"source":"iana"},"application/wordperfect5.1":{"source":"iana"},"application/wsdl+xml":{"source":"iana","extensions":["wsdl"]},"application/wspolicy+xml":{"source":"iana","extensions":["wspolicy"]},"application/x-7z-compressed":{"source":"apache","compressible":false,"extensions":["7z"]},"application/x-abiword":{"source":"apache","extensions":["abw"]},"application/x-ace-compressed":{"source":"apache","extensions":["ace"]},"application/x-amf":{"source":"apache"},"application/x-apple-diskimage":{"source":"apache","extensions":["dmg"]},"application/x-arj":{"compressible":false,"extensions":["arj"]},"application/x-authorware-bin":{"source":"apache","extensions":["aab","x32","u32","vox"]},"application/x-authorware-map":{"source":"apache","extensions":["aam"]},"application/x-authorware-seg":{"source":"apache","extensions":["aas"]},"application/x-bcpio":{"source":"apache","extensions":["bcpio"]},"application/x-bdoc":{"compressible":false,"extensions":["bdoc"]},"application/x-bittorrent":{"source":"apache","extensions":["torrent"]},"application/x-blorb":{"source":"apache","extensions":["blb","blorb"]},"application/x-bzip":{"source":"apache","compressible":false,"extensions":["bz"]},"application/x-bzip2":{"source":"apache","compressible":false,"extensions":["bz2","boz"]},"application/x-cbr":{"source":"apache","extensions":["cbr","cba","cbt","cbz","cb7"]},"application/x-cdlink":{"source":"apache","extensions":["vcd"]},"application/x-cfs-compressed":{"source":"apache","extensions":["cfs"]},"application/x-chat":{"source":"apache","extensions":["chat"]},"application/x-chess-pgn":{"source":"apache","extensions":["pgn"]},"application/x-chrome-extension":{"extensions":["crx"]},"application/x-cocoa":{"source":"nginx","extensions":["cco"]},"application/x-compress":{"source":"apache"},"application/x-conference":{"source":"apache","extensions":["nsc"]},"application/x-cpio":{"source":"apache","extensions":["cpio"]},"application/x-csh":{"source":"apache","extensions":["csh"]},"application/x-deb":{"compressible":false},"application/x-debian-package":{"source":"apache","extensions":["deb","udeb"]},"application/x-dgc-compressed":{"source":"apache","extensions":["dgc"]},"application/x-director":{"source":"apache","extensions":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]},"application/x-doom":{"source":"apache","extensions":["wad"]},"application/x-dtbncx+xml":{"source":"apache","extensions":["ncx"]},"application/x-dtbook+xml":{"source":"apache","extensions":["dtb"]},"application/x-dtbresource+xml":{"source":"apache","extensions":["res"]},"application/x-dvi":{"source":"apache","compressible":false,"extensions":["dvi"]},"application/x-envoy":{"source":"apache","extensions":["evy"]},"application/x-eva":{"source":"apache","extensions":["eva"]},"application/x-font-bdf":{"source":"apache","extensions":["bdf"]},"application/x-font-dos":{"source":"apache"},"application/x-font-framemaker":{"source":"apache"},"application/x-font-ghostscript":{"source":"apache","extensions":["gsf"]},"application/x-font-libgrx":{"source":"apache"},"application/x-font-linux-psf":{"source":"apache","extensions":["psf"]},"application/x-font-pcf":{"source":"apache","extensions":["pcf"]},"application/x-font-snf":{"source":"apache","extensions":["snf"]},"application/x-font-speedo":{"source":"apache"},"application/x-font-sunos-news":{"source":"apache"},"application/x-font-type1":{"source":"apache","extensions":["pfa","pfb","pfm","afm"]},"application/x-font-vfont":{"source":"apache"},"application/x-freearc":{"source":"apache","extensions":["arc"]},"application/x-futuresplash":{"source":"apache","extensions":["spl"]},"application/x-gca-compressed":{"source":"apache","extensions":["gca"]},"application/x-glulx":{"source":"apache","extensions":["ulx"]},"application/x-gnumeric":{"source":"apache","extensions":["gnumeric"]},"application/x-gramps-xml":{"source":"apache","extensions":["gramps"]},"application/x-gtar":{"source":"apache","extensions":["gtar"]},"application/x-gzip":{"source":"apache"},"application/x-hdf":{"source":"apache","extensions":["hdf"]},"application/x-httpd-php":{"compressible":true,"extensions":["php"]},"application/x-install-instructions":{"source":"apache","extensions":["install"]},"application/x-iso9660-image":{"source":"apache","extensions":["iso"]},"application/x-java-archive-diff":{"source":"nginx","extensions":["jardiff"]},"application/x-java-jnlp-file":{"source":"apache","compressible":false,"extensions":["jnlp"]},"application/x-javascript":{"compressible":true},"application/x-latex":{"source":"apache","compressible":false,"extensions":["latex"]},"application/x-lua-bytecode":{"extensions":["luac"]},"application/x-lzh-compressed":{"source":"apache","extensions":["lzh","lha"]},"application/x-makeself":{"source":"nginx","extensions":["run"]},"application/x-mie":{"source":"apache","extensions":["mie"]},"application/x-mobipocket-ebook":{"source":"apache","extensions":["prc","mobi"]},"application/x-mpegurl":{"compressible":false},"application/x-ms-application":{"source":"apache","extensions":["application"]},"application/x-ms-shortcut":{"source":"apache","extensions":["lnk"]},"application/x-ms-wmd":{"source":"apache","extensions":["wmd"]},"application/x-ms-wmz":{"source":"apache","extensions":["wmz"]},"application/x-ms-xbap":{"source":"apache","extensions":["xbap"]},"application/x-msaccess":{"source":"apache","extensions":["mdb"]},"application/x-msbinder":{"source":"apache","extensions":["obd"]},"application/x-mscardfile":{"source":"apache","extensions":["crd"]},"application/x-msclip":{"source":"apache","extensions":["clp"]},"application/x-msdos-program":{"extensions":["exe"]},"application/x-msdownload":{"source":"apache","extensions":["exe","dll","com","bat","msi"]},"application/x-msmediaview":{"source":"apache","extensions":["mvb","m13","m14"]},"application/x-msmetafile":{"source":"apache","extensions":["wmf","wmz","emf","emz"]},"application/x-msmoney":{"source":"apache","extensions":["mny"]},"application/x-mspublisher":{"source":"apache","extensions":["pub"]},"application/x-msschedule":{"source":"apache","extensions":["scd"]},"application/x-msterminal":{"source":"apache","extensions":["trm"]},"application/x-mswrite":{"source":"apache","extensions":["wri"]},"application/x-netcdf":{"source":"apache","extensions":["nc","cdf"]},"application/x-ns-proxy-autoconfig":{"compressible":true,"extensions":["pac"]},"application/x-nzb":{"source":"apache","extensions":["nzb"]},"application/x-perl":{"source":"nginx","extensions":["pl","pm"]},"application/x-pilot":{"source":"nginx","extensions":["prc","pdb"]},"application/x-pkcs12":{"source":"apache","compressible":false,"extensions":["p12","pfx"]},"application/x-pkcs7-certificates":{"source":"apache","extensions":["p7b","spc"]},"application/x-pkcs7-certreqresp":{"source":"apache","extensions":["p7r"]},"application/x-rar-compressed":{"source":"apache","compressible":false,"extensions":["rar"]},"application/x-redhat-package-manager":{"source":"nginx","extensions":["rpm"]},"application/x-research-info-systems":{"source":"apache","extensions":["ris"]},"application/x-sea":{"source":"nginx","extensions":["sea"]},"application/x-sh":{"source":"apache","compressible":true,"extensions":["sh"]},"application/x-shar":{"source":"apache","extensions":["shar"]},"application/x-shockwave-flash":{"source":"apache","compressible":false,"extensions":["swf"]},"application/x-silverlight-app":{"source":"apache","extensions":["xap"]},"application/x-sql":{"source":"apache","extensions":["sql"]},"application/x-stuffit":{"source":"apache","compressible":false,"extensions":["sit"]},"application/x-stuffitx":{"source":"apache","extensions":["sitx"]},"application/x-subrip":{"source":"apache","extensions":["srt"]},"application/x-sv4cpio":{"source":"apache","extensions":["sv4cpio"]},"application/x-sv4crc":{"source":"apache","extensions":["sv4crc"]},"application/x-t3vm-image":{"source":"apache","extensions":["t3"]},"application/x-tads":{"source":"apache","extensions":["gam"]},"application/x-tar":{"source":"apache","compressible":true,"extensions":["tar"]},"application/x-tcl":{"source":"apache","extensions":["tcl","tk"]},"application/x-tex":{"source":"apache","extensions":["tex"]},"application/x-tex-tfm":{"source":"apache","extensions":["tfm"]},"application/x-texinfo":{"source":"apache","extensions":["texinfo","texi"]},"application/x-tgif":{"source":"apache","extensions":["obj"]},"application/x-ustar":{"source":"apache","extensions":["ustar"]},"application/x-virtualbox-hdd":{"compressible":true,"extensions":["hdd"]},"application/x-virtualbox-ova":{"compressible":true,"extensions":["ova"]},"application/x-virtualbox-ovf":{"compressible":true,"extensions":["ovf"]},"application/x-virtualbox-vbox":{"compressible":true,"extensions":["vbox"]},"application/x-virtualbox-vbox-extpack":{"compressible":false,"extensions":["vbox-extpack"]},"application/x-virtualbox-vdi":{"compressible":true,"extensions":["vdi"]},"application/x-virtualbox-vhd":{"compressible":true,"extensions":["vhd"]},"application/x-virtualbox-vmdk":{"compressible":true,"extensions":["vmdk"]},"application/x-wais-source":{"source":"apache","extensions":["src"]},"application/x-web-app-manifest+json":{"compressible":true,"extensions":["webapp"]},"application/x-www-form-urlencoded":{"source":"iana","compressible":true},"application/x-x509-ca-cert":{"source":"apache","extensions":["der","crt","pem"]},"application/x-xfig":{"source":"apache","extensions":["fig"]},"application/x-xliff+xml":{"source":"apache","extensions":["xlf"]},"application/x-xpinstall":{"source":"apache","compressible":false,"extensions":["xpi"]},"application/x-xz":{"source":"apache","extensions":["xz"]},"application/x-zmachine":{"source":"apache","extensions":["z1","z2","z3","z4","z5","z6","z7","z8"]},"application/x400-bp":{"source":"iana"},"application/xacml+xml":{"source":"iana"},"application/xaml+xml":{"source":"apache","extensions":["xaml"]},"application/xcap-att+xml":{"source":"iana"},"application/xcap-caps+xml":{"source":"iana"},"application/xcap-diff+xml":{"source":"iana","extensions":["xdf"]},"application/xcap-el+xml":{"source":"iana"},"application/xcap-error+xml":{"source":"iana"},"application/xcap-ns+xml":{"source":"iana"},"application/xcon-conference-info+xml":{"source":"iana"},"application/xcon-conference-info-diff+xml":{"source":"iana"},"application/xenc+xml":{"source":"iana","extensions":["xenc"]},"application/xhtml+xml":{"source":"iana","compressible":true,"extensions":["xhtml","xht"]},"application/xhtml-voice+xml":{"source":"apache"},"application/xml":{"source":"iana","compressible":true,"extensions":["xml","xsl","xsd","rng"]},"application/xml-dtd":{"source":"iana","compressible":true,"extensions":["dtd"]},"application/xml-external-parsed-entity":{"source":"iana"},"application/xml-patch+xml":{"source":"iana"},"application/xmpp+xml":{"source":"iana"},"application/xop+xml":{"source":"iana","compressible":true,"extensions":["xop"]},"application/xproc+xml":{"source":"apache","extensions":["xpl"]},"application/xslt+xml":{"source":"iana","extensions":["xslt"]},"application/xspf+xml":{"source":"apache","extensions":["xspf"]},"application/xv+xml":{"source":"iana","extensions":["mxml","xhvml","xvml","xvm"]},"application/yang":{"source":"iana","extensions":["yang"]},"application/yang-data+json":{"source":"iana","compressible":true},"application/yang-data+xml":{"source":"iana"},"application/yang-patch+json":{"source":"iana","compressible":true},"application/yang-patch+xml":{"source":"iana"},"application/yin+xml":{"source":"iana","extensions":["yin"]},"application/zip":{"source":"iana","compressible":false,"extensions":["zip"]},"application/zlib":{"source":"iana"},"audio/1d-interleaved-parityfec":{"source":"iana"},"audio/32kadpcm":{"source":"iana"},"audio/3gpp":{"source":"iana","compressible":false,"extensions":["3gpp"]},"audio/3gpp2":{"source":"iana"},"audio/ac3":{"source":"iana"},"audio/adpcm":{"source":"apache","extensions":["adp"]},"audio/amr":{"source":"iana"},"audio/amr-wb":{"source":"iana"},"audio/amr-wb+":{"source":"iana"},"audio/aptx":{"source":"iana"},"audio/asc":{"source":"iana"},"audio/atrac-advanced-lossless":{"source":"iana"},"audio/atrac-x":{"source":"iana"},"audio/atrac3":{"source":"iana"},"audio/basic":{"source":"iana","compressible":false,"extensions":["au","snd"]},"audio/bv16":{"source":"iana"},"audio/bv32":{"source":"iana"},"audio/clearmode":{"source":"iana"},"audio/cn":{"source":"iana"},"audio/dat12":{"source":"iana"},"audio/dls":{"source":"iana"},"audio/dsr-es201108":{"source":"iana"},"audio/dsr-es202050":{"source":"iana"},"audio/dsr-es202211":{"source":"iana"},"audio/dsr-es202212":{"source":"iana"},"audio/dv":{"source":"iana"},"audio/dvi4":{"source":"iana"},"audio/eac3":{"source":"iana"},"audio/encaprtp":{"source":"iana"},"audio/evrc":{"source":"iana"},"audio/evrc-qcp":{"source":"iana"},"audio/evrc0":{"source":"iana"},"audio/evrc1":{"source":"iana"},"audio/evrcb":{"source":"iana"},"audio/evrcb0":{"source":"iana"},"audio/evrcb1":{"source":"iana"},"audio/evrcnw":{"source":"iana"},"audio/evrcnw0":{"source":"iana"},"audio/evrcnw1":{"source":"iana"},"audio/evrcwb":{"source":"iana"},"audio/evrcwb0":{"source":"iana"},"audio/evrcwb1":{"source":"iana"},"audio/evs":{"source":"iana"},"audio/fwdred":{"source":"iana"},"audio/g711-0":{"source":"iana"},"audio/g719":{"source":"iana"},"audio/g722":{"source":"iana"},"audio/g7221":{"source":"iana"},"audio/g723":{"source":"iana"},"audio/g726-16":{"source":"iana"},"audio/g726-24":{"source":"iana"},"audio/g726-32":{"source":"iana"},"audio/g726-40":{"source":"iana"},"audio/g728":{"source":"iana"},"audio/g729":{"source":"iana"},"audio/g7291":{"source":"iana"},"audio/g729d":{"source":"iana"},"audio/g729e":{"source":"iana"},"audio/gsm":{"source":"iana"},"audio/gsm-efr":{"source":"iana"},"audio/gsm-hr-08":{"source":"iana"},"audio/ilbc":{"source":"iana"},"audio/ip-mr_v2.5":{"source":"iana"},"audio/isac":{"source":"apache"},"audio/l16":{"source":"iana"},"audio/l20":{"source":"iana"},"audio/l24":{"source":"iana","compressible":false},"audio/l8":{"source":"iana"},"audio/lpc":{"source":"iana"},"audio/melp":{"source":"iana"},"audio/melp1200":{"source":"iana"},"audio/melp2400":{"source":"iana"},"audio/melp600":{"source":"iana"},"audio/midi":{"source":"apache","extensions":["mid","midi","kar","rmi"]},"audio/mobile-xmf":{"source":"iana"},"audio/mp3":{"compressible":false,"extensions":["mp3"]},"audio/mp4":{"source":"iana","compressible":false,"extensions":["m4a","mp4a"]},"audio/mp4a-latm":{"source":"iana"},"audio/mpa":{"source":"iana"},"audio/mpa-robust":{"source":"iana"},"audio/mpeg":{"source":"iana","compressible":false,"extensions":["mpga","mp2","mp2a","mp3","m2a","m3a"]},"audio/mpeg4-generic":{"source":"iana"},"audio/musepack":{"source":"apache"},"audio/ogg":{"source":"iana","compressible":false,"extensions":["oga","ogg","spx"]},"audio/opus":{"source":"iana"},"audio/parityfec":{"source":"iana"},"audio/pcma":{"source":"iana"},"audio/pcma-wb":{"source":"iana"},"audio/pcmu":{"source":"iana"},"audio/pcmu-wb":{"source":"iana"},"audio/prs.sid":{"source":"iana"},"audio/qcelp":{"source":"iana"},"audio/raptorfec":{"source":"iana"},"audio/red":{"source":"iana"},"audio/rtp-enc-aescm128":{"source":"iana"},"audio/rtp-midi":{"source":"iana"},"audio/rtploopback":{"source":"iana"},"audio/rtx":{"source":"iana"},"audio/s3m":{"source":"apache","extensions":["s3m"]},"audio/silk":{"source":"apache","extensions":["sil"]},"audio/smv":{"source":"iana"},"audio/smv-qcp":{"source":"iana"},"audio/smv0":{"source":"iana"},"audio/sp-midi":{"source":"iana"},"audio/speex":{"source":"iana"},"audio/t140c":{"source":"iana"},"audio/t38":{"source":"iana"},"audio/telephone-event":{"source":"iana"},"audio/tone":{"source":"iana"},"audio/uemclip":{"source":"iana"},"audio/ulpfec":{"source":"iana"},"audio/vdvi":{"source":"iana"},"audio/vmr-wb":{"source":"iana"},"audio/vnd.3gpp.iufp":{"source":"iana"},"audio/vnd.4sb":{"source":"iana"},"audio/vnd.audiokoz":{"source":"iana"},"audio/vnd.celp":{"source":"iana"},"audio/vnd.cisco.nse":{"source":"iana"},"audio/vnd.cmles.radio-events":{"source":"iana"},"audio/vnd.cns.anp1":{"source":"iana"},"audio/vnd.cns.inf1":{"source":"iana"},"audio/vnd.dece.audio":{"source":"iana","extensions":["uva","uvva"]},"audio/vnd.digital-winds":{"source":"iana","extensions":["eol"]},"audio/vnd.dlna.adts":{"source":"iana"},"audio/vnd.dolby.heaac.1":{"source":"iana"},"audio/vnd.dolby.heaac.2":{"source":"iana"},"audio/vnd.dolby.mlp":{"source":"iana"},"audio/vnd.dolby.mps":{"source":"iana"},"audio/vnd.dolby.pl2":{"source":"iana"},"audio/vnd.dolby.pl2x":{"source":"iana"},"audio/vnd.dolby.pl2z":{"source":"iana"},"audio/vnd.dolby.pulse.1":{"source":"iana"},"audio/vnd.dra":{"source":"iana","extensions":["dra"]},"audio/vnd.dts":{"source":"iana","extensions":["dts"]},"audio/vnd.dts.hd":{"source":"iana","extensions":["dtshd"]},"audio/vnd.dvb.file":{"source":"iana"},"audio/vnd.everad.plj":{"source":"iana"},"audio/vnd.hns.audio":{"source":"iana"},"audio/vnd.lucent.voice":{"source":"iana","extensions":["lvp"]},"audio/vnd.ms-playready.media.pya":{"source":"iana","extensions":["pya"]},"audio/vnd.nokia.mobile-xmf":{"source":"iana"},"audio/vnd.nortel.vbk":{"source":"iana"},"audio/vnd.nuera.ecelp4800":{"source":"iana","extensions":["ecelp4800"]},"audio/vnd.nuera.ecelp7470":{"source":"iana","extensions":["ecelp7470"]},"audio/vnd.nuera.ecelp9600":{"source":"iana","extensions":["ecelp9600"]},"audio/vnd.octel.sbc":{"source":"iana"},"audio/vnd.presonus.multitrack":{"source":"iana"},"audio/vnd.qcelp":{"source":"iana"},"audio/vnd.rhetorex.32kadpcm":{"source":"iana"},"audio/vnd.rip":{"source":"iana","extensions":["rip"]},"audio/vnd.rn-realaudio":{"compressible":false},"audio/vnd.sealedmedia.softseal.mpeg":{"source":"iana"},"audio/vnd.vmx.cvsd":{"source":"iana"},"audio/vnd.wave":{"compressible":false},"audio/vorbis":{"source":"iana","compressible":false},"audio/vorbis-config":{"source":"iana"},"audio/wav":{"compressible":false,"extensions":["wav"]},"audio/wave":{"compressible":false,"extensions":["wav"]},"audio/webm":{"source":"apache","compressible":false,"extensions":["weba"]},"audio/x-aac":{"source":"apache","compressible":false,"extensions":["aac"]},"audio/x-aiff":{"source":"apache","extensions":["aif","aiff","aifc"]},"audio/x-caf":{"source":"apache","compressible":false,"extensions":["caf"]},"audio/x-flac":{"source":"apache","extensions":["flac"]},"audio/x-m4a":{"source":"nginx","extensions":["m4a"]},"audio/x-matroska":{"source":"apache","extensions":["mka"]},"audio/x-mpegurl":{"source":"apache","extensions":["m3u"]},"audio/x-ms-wax":{"source":"apache","extensions":["wax"]},"audio/x-ms-wma":{"source":"apache","extensions":["wma"]},"audio/x-pn-realaudio":{"source":"apache","extensions":["ram","ra"]},"audio/x-pn-realaudio-plugin":{"source":"apache","extensions":["rmp"]},"audio/x-realaudio":{"source":"nginx","extensions":["ra"]},"audio/x-tta":{"source":"apache"},"audio/x-wav":{"source":"apache","extensions":["wav"]},"audio/xm":{"source":"apache","extensions":["xm"]},"chemical/x-cdx":{"source":"apache","extensions":["cdx"]},"chemical/x-cif":{"source":"apache","extensions":["cif"]},"chemical/x-cmdf":{"source":"apache","extensions":["cmdf"]},"chemical/x-cml":{"source":"apache","extensions":["cml"]},"chemical/x-csml":{"source":"apache","extensions":["csml"]},"chemical/x-pdb":{"source":"apache"},"chemical/x-xyz":{"source":"apache","extensions":["xyz"]},"font/collection":{"source":"iana","extensions":["ttc"]},"font/otf":{"source":"iana","compressible":true,"extensions":["otf"]},"font/sfnt":{"source":"iana"},"font/ttf":{"source":"iana","extensions":["ttf"]},"font/woff":{"source":"iana","extensions":["woff"]},"font/woff2":{"source":"iana","extensions":["woff2"]},"image/aces":{"source":"iana"},"image/apng":{"compressible":false,"extensions":["apng"]},"image/bmp":{"source":"iana","compressible":true,"extensions":["bmp"]},"image/cgm":{"source":"iana","extensions":["cgm"]},"image/dicom-rle":{"source":"iana"},"image/emf":{"source":"iana"},"image/fits":{"source":"iana"},"image/g3fax":{"source":"iana","extensions":["g3"]},"image/gif":{"source":"iana","compressible":false,"extensions":["gif"]},"image/ief":{"source":"iana","extensions":["ief"]},"image/jls":{"source":"iana"},"image/jp2":{"source":"iana","compressible":false,"extensions":["jp2","jpg2"]},"image/jpeg":{"source":"iana","compressible":false,"extensions":["jpeg","jpg","jpe"]},"image/jpm":{"source":"iana","compressible":false,"extensions":["jpm"]},"image/jpx":{"source":"iana","compressible":false,"extensions":["jpx","jpf"]},"image/ktx":{"source":"iana","extensions":["ktx"]},"image/naplps":{"source":"iana"},"image/pjpeg":{"compressible":false},"image/png":{"source":"iana","compressible":false,"extensions":["png"]},"image/prs.btif":{"source":"iana","extensions":["btif"]},"image/prs.pti":{"source":"iana"},"image/pwg-raster":{"source":"iana"},"image/sgi":{"source":"apache","extensions":["sgi"]},"image/svg+xml":{"source":"iana","compressible":true,"extensions":["svg","svgz"]},"image/t38":{"source":"iana"},"image/tiff":{"source":"iana","compressible":false,"extensions":["tiff","tif"]},"image/tiff-fx":{"source":"iana"},"image/vnd.adobe.photoshop":{"source":"iana","compressible":true,"extensions":["psd"]},"image/vnd.airzip.accelerator.azv":{"source":"iana"},"image/vnd.cns.inf2":{"source":"iana"},"image/vnd.dece.graphic":{"source":"iana","extensions":["uvi","uvvi","uvg","uvvg"]},"image/vnd.djvu":{"source":"iana","extensions":["djvu","djv"]},"image/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"image/vnd.dwg":{"source":"iana","extensions":["dwg"]},"image/vnd.dxf":{"source":"iana","extensions":["dxf"]},"image/vnd.fastbidsheet":{"source":"iana","extensions":["fbs"]},"image/vnd.fpx":{"source":"iana","extensions":["fpx"]},"image/vnd.fst":{"source":"iana","extensions":["fst"]},"image/vnd.fujixerox.edmics-mmr":{"source":"iana","extensions":["mmr"]},"image/vnd.fujixerox.edmics-rlc":{"source":"iana","extensions":["rlc"]},"image/vnd.globalgraphics.pgb":{"source":"iana"},"image/vnd.microsoft.icon":{"source":"iana"},"image/vnd.mix":{"source":"iana"},"image/vnd.mozilla.apng":{"source":"iana"},"image/vnd.ms-modi":{"source":"iana","extensions":["mdi"]},"image/vnd.ms-photo":{"source":"apache","extensions":["wdp"]},"image/vnd.net-fpx":{"source":"iana","extensions":["npx"]},"image/vnd.radiance":{"source":"iana"},"image/vnd.sealed.png":{"source":"iana"},"image/vnd.sealedmedia.softseal.gif":{"source":"iana"},"image/vnd.sealedmedia.softseal.jpg":{"source":"iana"},"image/vnd.svf":{"source":"iana"},"image/vnd.tencent.tap":{"source":"iana"},"image/vnd.valve.source.texture":{"source":"iana"},"image/vnd.wap.wbmp":{"source":"iana","extensions":["wbmp"]},"image/vnd.xiff":{"source":"iana","extensions":["xif"]},"image/vnd.zbrush.pcx":{"source":"iana"},"image/webp":{"source":"apache","extensions":["webp"]},"image/wmf":{"source":"iana"},"image/x-3ds":{"source":"apache","extensions":["3ds"]},"image/x-cmu-raster":{"source":"apache","extensions":["ras"]},"image/x-cmx":{"source":"apache","extensions":["cmx"]},"image/x-freehand":{"source":"apache","extensions":["fh","fhc","fh4","fh5","fh7"]},"image/x-icon":{"source":"apache","compressible":true,"extensions":["ico"]},"image/x-jng":{"source":"nginx","extensions":["jng"]},"image/x-mrsid-image":{"source":"apache","extensions":["sid"]},"image/x-ms-bmp":{"source":"nginx","compressible":true,"extensions":["bmp"]},"image/x-pcx":{"source":"apache","extensions":["pcx"]},"image/x-pict":{"source":"apache","extensions":["pic","pct"]},"image/x-portable-anymap":{"source":"apache","extensions":["pnm"]},"image/x-portable-bitmap":{"source":"apache","extensions":["pbm"]},"image/x-portable-graymap":{"source":"apache","extensions":["pgm"]},"image/x-portable-pixmap":{"source":"apache","extensions":["ppm"]},"image/x-rgb":{"source":"apache","extensions":["rgb"]},"image/x-tga":{"source":"apache","extensions":["tga"]},"image/x-xbitmap":{"source":"apache","extensions":["xbm"]},"image/x-xcf":{"compressible":false},"image/x-xpixmap":{"source":"apache","extensions":["xpm"]},"image/x-xwindowdump":{"source":"apache","extensions":["xwd"]},"message/cpim":{"source":"iana"},"message/delivery-status":{"source":"iana"},"message/disposition-notification":{"source":"iana","extensions":["disposition-notification"]},"message/external-body":{"source":"iana"},"message/feedback-report":{"source":"iana"},"message/global":{"source":"iana","extensions":["u8msg"]},"message/global-delivery-status":{"source":"iana","extensions":["u8dsn"]},"message/global-disposition-notification":{"source":"iana","extensions":["u8mdn"]},"message/global-headers":{"source":"iana","extensions":["u8hdr"]},"message/http":{"source":"iana","compressible":false},"message/imdn+xml":{"source":"iana","compressible":true},"message/news":{"source":"iana"},"message/partial":{"source":"iana","compressible":false},"message/rfc822":{"source":"iana","compressible":true,"extensions":["eml","mime"]},"message/s-http":{"source":"iana"},"message/sip":{"source":"iana"},"message/sipfrag":{"source":"iana"},"message/tracking-status":{"source":"iana"},"message/vnd.si.simp":{"source":"iana"},"message/vnd.wfa.wsc":{"source":"iana","extensions":["wsc"]},"model/3mf":{"source":"iana"},"model/gltf+json":{"source":"iana","compressible":true,"extensions":["gltf"]},"model/gltf-binary":{"source":"iana","compressible":true,"extensions":["glb"]},"model/iges":{"source":"iana","compressible":false,"extensions":["igs","iges"]},"model/mesh":{"source":"iana","compressible":false,"extensions":["msh","mesh","silo"]},"model/vnd.collada+xml":{"source":"iana","extensions":["dae"]},"model/vnd.dwf":{"source":"iana","extensions":["dwf"]},"model/vnd.flatland.3dml":{"source":"iana"},"model/vnd.gdl":{"source":"iana","extensions":["gdl"]},"model/vnd.gs-gdl":{"source":"apache"},"model/vnd.gs.gdl":{"source":"iana"},"model/vnd.gtw":{"source":"iana","extensions":["gtw"]},"model/vnd.moml+xml":{"source":"iana"},"model/vnd.mts":{"source":"iana","extensions":["mts"]},"model/vnd.opengex":{"source":"iana"},"model/vnd.parasolid.transmit.binary":{"source":"iana"},"model/vnd.parasolid.transmit.text":{"source":"iana"},"model/vnd.rosette.annotated-data-model":{"source":"iana"},"model/vnd.valve.source.compiled-map":{"source":"iana"},"model/vnd.vtu":{"source":"iana","extensions":["vtu"]},"model/vrml":{"source":"iana","compressible":false,"extensions":["wrl","vrml"]},"model/x3d+binary":{"source":"apache","compressible":false,"extensions":["x3db","x3dbz"]},"model/x3d+fastinfoset":{"source":"iana"},"model/x3d+vrml":{"source":"apache","compressible":false,"extensions":["x3dv","x3dvz"]},"model/x3d+xml":{"source":"iana","compressible":true,"extensions":["x3d","x3dz"]},"model/x3d-vrml":{"source":"iana"},"multipart/alternative":{"source":"iana","compressible":false},"multipart/appledouble":{"source":"iana"},"multipart/byteranges":{"source":"iana"},"multipart/digest":{"source":"iana"},"multipart/encrypted":{"source":"iana","compressible":false},"multipart/form-data":{"source":"iana","compressible":false},"multipart/header-set":{"source":"iana"},"multipart/mixed":{"source":"iana","compressible":false},"multipart/multilingual":{"source":"iana"},"multipart/parallel":{"source":"iana"},"multipart/related":{"source":"iana","compressible":false},"multipart/report":{"source":"iana"},"multipart/signed":{"source":"iana","compressible":false},"multipart/vnd.bint.med-plus":{"source":"iana"},"multipart/voice-message":{"source":"iana"},"multipart/x-mixed-replace":{"source":"iana"},"text/1d-interleaved-parityfec":{"source":"iana"},"text/cache-manifest":{"source":"iana","compressible":true,"extensions":["appcache","manifest"]},"text/calendar":{"source":"iana","extensions":["ics","ifb"]},"text/calender":{"compressible":true},"text/cmd":{"compressible":true},"text/coffeescript":{"extensions":["coffee","litcoffee"]},"text/css":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["css"]},"text/csv":{"source":"iana","compressible":true,"extensions":["csv"]},"text/csv-schema":{"source":"iana"},"text/directory":{"source":"iana"},"text/dns":{"source":"iana"},"text/ecmascript":{"source":"iana"},"text/encaprtp":{"source":"iana"},"text/enriched":{"source":"iana"},"text/fwdred":{"source":"iana"},"text/grammar-ref-list":{"source":"iana"},"text/html":{"source":"iana","compressible":true,"extensions":["html","htm","shtml"]},"text/jade":{"extensions":["jade"]},"text/javascript":{"source":"iana","compressible":true},"text/jcr-cnd":{"source":"iana"},"text/jsx":{"compressible":true,"extensions":["jsx"]},"text/less":{"extensions":["less"]},"text/markdown":{"source":"iana","compressible":true,"extensions":["markdown","md"]},"text/mathml":{"source":"nginx","extensions":["mml"]},"text/mizar":{"source":"iana"},"text/n3":{"source":"iana","compressible":true,"extensions":["n3"]},"text/parameters":{"source":"iana"},"text/parityfec":{"source":"iana"},"text/plain":{"source":"iana","compressible":true,"extensions":["txt","text","conf","def","list","log","in","ini"]},"text/provenance-notation":{"source":"iana"},"text/prs.fallenstein.rst":{"source":"iana"},"text/prs.lines.tag":{"source":"iana","extensions":["dsc"]},"text/prs.prop.logic":{"source":"iana"},"text/raptorfec":{"source":"iana"},"text/red":{"source":"iana"},"text/rfc822-headers":{"source":"iana"},"text/richtext":{"source":"iana","compressible":true,"extensions":["rtx"]},"text/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"text/rtp-enc-aescm128":{"source":"iana"},"text/rtploopback":{"source":"iana"},"text/rtx":{"source":"iana"},"text/sgml":{"source":"iana","extensions":["sgml","sgm"]},"text/shex":{"extensions":["shex"]},"text/slim":{"extensions":["slim","slm"]},"text/strings":{"source":"iana"},"text/stylus":{"extensions":["stylus","styl"]},"text/t140":{"source":"iana"},"text/tab-separated-values":{"source":"iana","compressible":true,"extensions":["tsv"]},"text/troff":{"source":"iana","extensions":["t","tr","roff","man","me","ms"]},"text/turtle":{"source":"iana","extensions":["ttl"]},"text/ulpfec":{"source":"iana"},"text/uri-list":{"source":"iana","compressible":true,"extensions":["uri","uris","urls"]},"text/vcard":{"source":"iana","compressible":true,"extensions":["vcard"]},"text/vnd.a":{"source":"iana"},"text/vnd.abc":{"source":"iana"},"text/vnd.ascii-art":{"source":"iana"},"text/vnd.curl":{"source":"iana","extensions":["curl"]},"text/vnd.curl.dcurl":{"source":"apache","extensions":["dcurl"]},"text/vnd.curl.mcurl":{"source":"apache","extensions":["mcurl"]},"text/vnd.curl.scurl":{"source":"apache","extensions":["scurl"]},"text/vnd.debian.copyright":{"source":"iana"},"text/vnd.dmclientscript":{"source":"iana"},"text/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"text/vnd.esmertec.theme-descriptor":{"source":"iana"},"text/vnd.fly":{"source":"iana","extensions":["fly"]},"text/vnd.fmi.flexstor":{"source":"iana","extensions":["flx"]},"text/vnd.graphviz":{"source":"iana","extensions":["gv"]},"text/vnd.in3d.3dml":{"source":"iana","extensions":["3dml"]},"text/vnd.in3d.spot":{"source":"iana","extensions":["spot"]},"text/vnd.iptc.newsml":{"source":"iana"},"text/vnd.iptc.nitf":{"source":"iana"},"text/vnd.latex-z":{"source":"iana"},"text/vnd.motorola.reflex":{"source":"iana"},"text/vnd.ms-mediapackage":{"source":"iana"},"text/vnd.net2phone.commcenter.command":{"source":"iana"},"text/vnd.radisys.msml-basic-layout":{"source":"iana"},"text/vnd.si.uricatalogue":{"source":"iana"},"text/vnd.sun.j2me.app-descriptor":{"source":"iana","extensions":["jad"]},"text/vnd.trolltech.linguist":{"source":"iana"},"text/vnd.wap.si":{"source":"iana"},"text/vnd.wap.sl":{"source":"iana"},"text/vnd.wap.wml":{"source":"iana","extensions":["wml"]},"text/vnd.wap.wmlscript":{"source":"iana","extensions":["wmls"]},"text/vtt":{"charset":"UTF-8","compressible":true,"extensions":["vtt"]},"text/x-asm":{"source":"apache","extensions":["s","asm"]},"text/x-c":{"source":"apache","extensions":["c","cc","cxx","cpp","h","hh","dic"]},"text/x-component":{"source":"nginx","extensions":["htc"]},"text/x-fortran":{"source":"apache","extensions":["f","for","f77","f90"]},"text/x-gwt-rpc":{"compressible":true},"text/x-handlebars-template":{"extensions":["hbs"]},"text/x-java-source":{"source":"apache","extensions":["java"]},"text/x-jquery-tmpl":{"compressible":true},"text/x-lua":{"extensions":["lua"]},"text/x-markdown":{"compressible":true,"extensions":["mkd"]},"text/x-nfo":{"source":"apache","extensions":["nfo"]},"text/x-opml":{"source":"apache","extensions":["opml"]},"text/x-org":{"compressible":true,"extensions":["org"]},"text/x-pascal":{"source":"apache","extensions":["p","pas"]},"text/x-processing":{"compressible":true,"extensions":["pde"]},"text/x-sass":{"extensions":["sass"]},"text/x-scss":{"extensions":["scss"]},"text/x-setext":{"source":"apache","extensions":["etx"]},"text/x-sfv":{"source":"apache","extensions":["sfv"]},"text/x-suse-ymp":{"compressible":true,"extensions":["ymp"]},"text/x-uuencode":{"source":"apache","extensions":["uu"]},"text/x-vcalendar":{"source":"apache","extensions":["vcs"]},"text/x-vcard":{"source":"apache","extensions":["vcf"]},"text/xml":{"source":"iana","compressible":true,"extensions":["xml"]},"text/xml-external-parsed-entity":{"source":"iana"},"text/yaml":{"extensions":["yaml","yml"]},"video/1d-interleaved-parityfec":{"source":"iana"},"video/3gpp":{"source":"iana","extensions":["3gp","3gpp"]},"video/3gpp-tt":{"source":"iana"},"video/3gpp2":{"source":"iana","extensions":["3g2"]},"video/bmpeg":{"source":"iana"},"video/bt656":{"source":"iana"},"video/celb":{"source":"iana"},"video/dv":{"source":"iana"},"video/encaprtp":{"source":"iana"},"video/h261":{"source":"iana","extensions":["h261"]},"video/h263":{"source":"iana","extensions":["h263"]},"video/h263-1998":{"source":"iana"},"video/h263-2000":{"source":"iana"},"video/h264":{"source":"iana","extensions":["h264"]},"video/h264-rcdo":{"source":"iana"},"video/h264-svc":{"source":"iana"},"video/h265":{"source":"iana"},"video/iso.segment":{"source":"iana"},"video/jpeg":{"source":"iana","extensions":["jpgv"]},"video/jpeg2000":{"source":"iana"},"video/jpm":{"source":"apache","extensions":["jpm","jpgm"]},"video/mj2":{"source":"iana","extensions":["mj2","mjp2"]},"video/mp1s":{"source":"iana"},"video/mp2p":{"source":"iana"},"video/mp2t":{"source":"iana","extensions":["ts"]},"video/mp4":{"source":"iana","compressible":false,"extensions":["mp4","mp4v","mpg4"]},"video/mp4v-es":{"source":"iana"},"video/mpeg":{"source":"iana","compressible":false,"extensions":["mpeg","mpg","mpe","m1v","m2v"]},"video/mpeg4-generic":{"source":"iana"},"video/mpv":{"source":"iana"},"video/nv":{"source":"iana"},"video/ogg":{"source":"iana","compressible":false,"extensions":["ogv"]},"video/parityfec":{"source":"iana"},"video/pointer":{"source":"iana"},"video/quicktime":{"source":"iana","compressible":false,"extensions":["qt","mov"]},"video/raptorfec":{"source":"iana"},"video/raw":{"source":"iana"},"video/rtp-enc-aescm128":{"source":"iana"},"video/rtploopback":{"source":"iana"},"video/rtx":{"source":"iana"},"video/smpte291":{"source":"iana"},"video/smpte292m":{"source":"iana"},"video/ulpfec":{"source":"iana"},"video/vc1":{"source":"iana"},"video/vnd.cctv":{"source":"iana"},"video/vnd.dece.hd":{"source":"iana","extensions":["uvh","uvvh"]},"video/vnd.dece.mobile":{"source":"iana","extensions":["uvm","uvvm"]},"video/vnd.dece.mp4":{"source":"iana"},"video/vnd.dece.pd":{"source":"iana","extensions":["uvp","uvvp"]},"video/vnd.dece.sd":{"source":"iana","extensions":["uvs","uvvs"]},"video/vnd.dece.video":{"source":"iana","extensions":["uvv","uvvv"]},"video/vnd.directv.mpeg":{"source":"iana"},"video/vnd.directv.mpeg-tts":{"source":"iana"},"video/vnd.dlna.mpeg-tts":{"source":"iana"},"video/vnd.dvb.file":{"source":"iana","extensions":["dvb"]},"video/vnd.fvt":{"source":"iana","extensions":["fvt"]},"video/vnd.hns.video":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.ttsavc":{"source":"iana"},"video/vnd.iptvforum.ttsmpeg2":{"source":"iana"},"video/vnd.motorola.video":{"source":"iana"},"video/vnd.motorola.videop":{"source":"iana"},"video/vnd.mpegurl":{"source":"iana","extensions":["mxu","m4u"]},"video/vnd.ms-playready.media.pyv":{"source":"iana","extensions":["pyv"]},"video/vnd.nokia.interleaved-multimedia":{"source":"iana"},"video/vnd.nokia.mp4vr":{"source":"iana"},"video/vnd.nokia.videovoip":{"source":"iana"},"video/vnd.objectvideo":{"source":"iana"},"video/vnd.radgamettools.bink":{"source":"iana"},"video/vnd.radgamettools.smacker":{"source":"iana"},"video/vnd.sealed.mpeg1":{"source":"iana"},"video/vnd.sealed.mpeg4":{"source":"iana"},"video/vnd.sealed.swf":{"source":"iana"},"video/vnd.sealedmedia.softseal.mov":{"source":"iana"},"video/vnd.uvvu.mp4":{"source":"iana","extensions":["uvu","uvvu"]},"video/vnd.vivo":{"source":"iana","extensions":["viv"]},"video/vp8":{"source":"iana"},"video/webm":{"source":"apache","compressible":false,"extensions":["webm"]},"video/x-f4v":{"source":"apache","extensions":["f4v"]},"video/x-fli":{"source":"apache","extensions":["fli"]},"video/x-flv":{"source":"apache","compressible":false,"extensions":["flv"]},"video/x-m4v":{"source":"apache","extensions":["m4v"]},"video/x-matroska":{"source":"apache","compressible":false,"extensions":["mkv","mk3d","mks"]},"video/x-mng":{"source":"apache","extensions":["mng"]},"video/x-ms-asf":{"source":"apache","extensions":["asf","asx"]},"video/x-ms-vob":{"source":"apache","extensions":["vob"]},"video/x-ms-wm":{"source":"apache","extensions":["wm"]},"video/x-ms-wmv":{"source":"apache","compressible":false,"extensions":["wmv"]},"video/x-ms-wmx":{"source":"apache","extensions":["wmx"]},"video/x-ms-wvx":{"source":"apache","extensions":["wvx"]},"video/x-msvideo":{"source":"apache","extensions":["avi"]},"video/x-sgi-movie":{"source":"apache","extensions":["movie"]},"video/x-smv":{"source":"apache","extensions":["smv"]},"x-conference/x-cooltalk":{"source":"apache","extensions":["ice"]},"x-shader/x-fragment":{"compressible":true},"x-shader/x-vertex":{"compressible":true}}');

/***/ }),
/* 28 */
/***/ ((module) => {

"use strict";
/*!
 * bytes
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015 Jed Watson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = bytes;
module.exports.format = format;
module.exports.parse = parse;

/**
 * Module variables.
 * @private
 */

var formatThousandsRegExp = /\B(?=(\d{3})+(?!\d))/g;

var formatDecimalsRegExp = /(?:\.0*|(\.[^0]+)0+)$/;

var map = {
  b:  1,
  kb: 1 << 10,
  mb: 1 << 20,
  gb: 1 << 30,
  tb: ((1 << 30) * 1024)
};

var parseRegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb)$/i;

/**
 * Convert the given value in bytes into a string or parse to string to an integer in bytes.
 *
 * @param {string|number} value
 * @param {{
 *  case: [string],
 *  decimalPlaces: [number]
 *  fixedDecimals: [boolean]
 *  thousandsSeparator: [string]
 *  unitSeparator: [string]
 *  }} [options] bytes options.
 *
 * @returns {string|number|null}
 */

function bytes(value, options) {
  if (typeof value === 'string') {
    return parse(value);
  }

  if (typeof value === 'number') {
    return format(value, options);
  }

  return null;
}

/**
 * Format the given value in bytes into a string.
 *
 * If the value is negative, it is kept as such. If it is a float,
 * it is rounded.
 *
 * @param {number} value
 * @param {object} [options]
 * @param {number} [options.decimalPlaces=2]
 * @param {number} [options.fixedDecimals=false]
 * @param {string} [options.thousandsSeparator=]
 * @param {string} [options.unit=]
 * @param {string} [options.unitSeparator=]
 *
 * @returns {string|null}
 * @public
 */

function format(value, options) {
  if (!Number.isFinite(value)) {
    return null;
  }

  var mag = Math.abs(value);
  var thousandsSeparator = (options && options.thousandsSeparator) || '';
  var unitSeparator = (options && options.unitSeparator) || '';
  var decimalPlaces = (options && options.decimalPlaces !== undefined) ? options.decimalPlaces : 2;
  var fixedDecimals = Boolean(options && options.fixedDecimals);
  var unit = (options && options.unit) || '';

  if (!unit || !map[unit.toLowerCase()]) {
    if (mag >= map.tb) {
      unit = 'TB';
    } else if (mag >= map.gb) {
      unit = 'GB';
    } else if (mag >= map.mb) {
      unit = 'MB';
    } else if (mag >= map.kb) {
      unit = 'KB';
    } else {
      unit = 'B';
    }
  }

  var val = value / map[unit.toLowerCase()];
  var str = val.toFixed(decimalPlaces);

  if (!fixedDecimals) {
    str = str.replace(formatDecimalsRegExp, '$1');
  }

  if (thousandsSeparator) {
    str = str.replace(formatThousandsRegExp, thousandsSeparator);
  }

  return str + unitSeparator + unit;
}

/**
 * Parse the string value into an integer in bytes.
 *
 * If no unit is given, it is assumed the value is in bytes.
 *
 * @param {number|string} val
 *
 * @returns {number|null}
 * @public
 */

function parse(val) {
  if (typeof val === 'number' && !isNaN(val)) {
    return val;
  }

  if (typeof val !== 'string') {
    return null;
  }

  // Test if the string passed is valid
  var results = parseRegExp.exec(val);
  var floatValue;
  var unit = 'b';

  if (!results) {
    // Nothing could be extracted from the given string
    floatValue = parseInt(val, 10);
    unit = 'b'
  } else {
    // Retrieve the value and the unit
    floatValue = parseFloat(results[1]);
    unit = results[4].toLowerCase();
  }

  return Math.floor(map[unit] * floatValue);
}


/***/ }),
/* 29 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * content-disposition
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 */

module.exports = contentDisposition
module.exports.parse = parse

/**
 * Module dependencies.
 */

var basename = (__webpack_require__(13).basename)

/**
 * RegExp to match non attr-char, *after* encodeURIComponent (i.e. not including "%")
 */

var ENCODE_URL_ATTR_CHAR_REGEXP = /[\x00-\x20"'()*,/:;<=>?@[\\\]{}\x7f]/g // eslint-disable-line no-control-regex

/**
 * RegExp to match percent encoding escape.
 */

var HEX_ESCAPE_REGEXP = /%[0-9A-Fa-f]{2}/
var HEX_ESCAPE_REPLACE_REGEXP = /%([0-9A-Fa-f]{2})/g

/**
 * RegExp to match non-latin1 characters.
 */

var NON_LATIN1_REGEXP = /[^\x20-\x7e\xa0-\xff]/g

/**
 * RegExp to match quoted-pair in RFC 2616
 *
 * quoted-pair = "\" CHAR
 * CHAR        = <any US-ASCII character (octets 0 - 127)>
 */

var QESC_REGEXP = /\\([\u0000-\u007f])/g

/**
 * RegExp to match chars that must be quoted-pair in RFC 2616
 */

var QUOTE_REGEXP = /([\\"])/g

/**
 * RegExp for various RFC 2616 grammar
 *
 * parameter     = token "=" ( token | quoted-string )
 * token         = 1*<any CHAR except CTLs or separators>
 * separators    = "(" | ")" | "<" | ">" | "@"
 *               | "," | ";" | ":" | "\" | <">
 *               | "/" | "[" | "]" | "?" | "="
 *               | "{" | "}" | SP | HT
 * quoted-string = ( <"> *(qdtext | quoted-pair ) <"> )
 * qdtext        = <any TEXT except <">>
 * quoted-pair   = "\" CHAR
 * CHAR          = <any US-ASCII character (octets 0 - 127)>
 * TEXT          = <any OCTET except CTLs, but including LWS>
 * LWS           = [CRLF] 1*( SP | HT )
 * CRLF          = CR LF
 * CR            = <US-ASCII CR, carriage return (13)>
 * LF            = <US-ASCII LF, linefeed (10)>
 * SP            = <US-ASCII SP, space (32)>
 * HT            = <US-ASCII HT, horizontal-tab (9)>
 * CTL           = <any US-ASCII control character (octets 0 - 31) and DEL (127)>
 * OCTET         = <any 8-bit sequence of data>
 */

var PARAM_REGEXP = /;[\x09\x20]*([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*=[\x09\x20]*("(?:[\x20!\x23-\x5b\x5d-\x7e\x80-\xff]|\\[\x20-\x7e])*"|[!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*/g // eslint-disable-line no-control-regex
var TEXT_REGEXP = /^[\x20-\x7e\x80-\xff]+$/
var TOKEN_REGEXP = /^[!#$%&'*+.0-9A-Z^_`a-z|~-]+$/

/**
 * RegExp for various RFC 5987 grammar
 *
 * ext-value     = charset  "'" [ language ] "'" value-chars
 * charset       = "UTF-8" / "ISO-8859-1" / mime-charset
 * mime-charset  = 1*mime-charsetc
 * mime-charsetc = ALPHA / DIGIT
 *               / "!" / "#" / "$" / "%" / "&"
 *               / "+" / "-" / "^" / "_" / "`"
 *               / "{" / "}" / "~"
 * language      = ( 2*3ALPHA [ extlang ] )
 *               / 4ALPHA
 *               / 5*8ALPHA
 * extlang       = *3( "-" 3ALPHA )
 * value-chars   = *( pct-encoded / attr-char )
 * pct-encoded   = "%" HEXDIG HEXDIG
 * attr-char     = ALPHA / DIGIT
 *               / "!" / "#" / "$" / "&" / "+" / "-" / "."
 *               / "^" / "_" / "`" / "|" / "~"
 */

var EXT_VALUE_REGEXP = /^([A-Za-z0-9!#$%&+\-^_`{}~]+)'(?:[A-Za-z]{2,3}(?:-[A-Za-z]{3}){0,3}|[A-Za-z]{4,8}|)'((?:%[0-9A-Fa-f]{2}|[A-Za-z0-9!#$&+.^_`|~-])+)$/

/**
 * RegExp for various RFC 6266 grammar
 *
 * disposition-type = "inline" | "attachment" | disp-ext-type
 * disp-ext-type    = token
 * disposition-parm = filename-parm | disp-ext-parm
 * filename-parm    = "filename" "=" value
 *                  | "filename*" "=" ext-value
 * disp-ext-parm    = token "=" value
 *                  | ext-token "=" ext-value
 * ext-token        = <the characters in token, followed by "*">
 */

var DISPOSITION_TYPE_REGEXP = /^([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*(?:$|;)/ // eslint-disable-line no-control-regex

/**
 * Create an attachment Content-Disposition header.
 *
 * @param {string} [filename]
 * @param {object} [options]
 * @param {string} [options.type=attachment]
 * @param {string|boolean} [options.fallback=true]
 * @return {string}
 * @api public
 */

function contentDisposition (filename, options) {
  var opts = options || {}

  // get type
  var type = opts.type || 'attachment'

  // get parameters
  var params = createparams(filename, opts.fallback)

  // format into string
  return format(new ContentDisposition(type, params))
}

/**
 * Create parameters object from filename and fallback.
 *
 * @param {string} [filename]
 * @param {string|boolean} [fallback=true]
 * @return {object}
 * @api private
 */

function createparams (filename, fallback) {
  if (filename === undefined) {
    return
  }

  var params = {}

  if (typeof filename !== 'string') {
    throw new TypeError('filename must be a string')
  }

  // fallback defaults to true
  if (fallback === undefined) {
    fallback = true
  }

  if (typeof fallback !== 'string' && typeof fallback !== 'boolean') {
    throw new TypeError('fallback must be a string or boolean')
  }

  if (typeof fallback === 'string' && NON_LATIN1_REGEXP.test(fallback)) {
    throw new TypeError('fallback must be ISO-8859-1 string')
  }

  // restrict to file base name
  var name = basename(filename)

  // determine if name is suitable for quoted string
  var isQuotedString = TEXT_REGEXP.test(name)

  // generate fallback name
  var fallbackName = typeof fallback !== 'string'
    ? fallback && getlatin1(name)
    : basename(fallback)
  var hasFallback = typeof fallbackName === 'string' && fallbackName !== name

  // set extended filename parameter
  if (hasFallback || !isQuotedString || HEX_ESCAPE_REGEXP.test(name)) {
    params['filename*'] = name
  }

  // set filename parameter
  if (isQuotedString || hasFallback) {
    params.filename = hasFallback
      ? fallbackName
      : name
  }

  return params
}

/**
 * Format object to Content-Disposition header.
 *
 * @param {object} obj
 * @param {string} obj.type
 * @param {object} [obj.parameters]
 * @return {string}
 * @api private
 */

function format (obj) {
  var parameters = obj.parameters
  var type = obj.type

  if (!type || typeof type !== 'string' || !TOKEN_REGEXP.test(type)) {
    throw new TypeError('invalid type')
  }

  // start with normalized type
  var string = String(type).toLowerCase()

  // append parameters
  if (parameters && typeof parameters === 'object') {
    var param
    var params = Object.keys(parameters).sort()

    for (var i = 0; i < params.length; i++) {
      param = params[i]

      var val = param.substr(-1) === '*'
        ? ustring(parameters[param])
        : qstring(parameters[param])

      string += '; ' + param + '=' + val
    }
  }

  return string
}

/**
 * Decode a RFC 6987 field value (gracefully).
 *
 * @param {string} str
 * @return {string}
 * @api private
 */

function decodefield (str) {
  var match = EXT_VALUE_REGEXP.exec(str)

  if (!match) {
    throw new TypeError('invalid extended field value')
  }

  var charset = match[1].toLowerCase()
  var encoded = match[2]
  var value

  // to binary string
  var binary = encoded.replace(HEX_ESCAPE_REPLACE_REGEXP, pdecode)

  switch (charset) {
    case 'iso-8859-1':
      value = getlatin1(binary)
      break
    case 'utf-8':
      value = new Buffer(binary, 'binary').toString('utf8')
      break
    default:
      throw new TypeError('unsupported charset in extended field')
  }

  return value
}

/**
 * Get ISO-8859-1 version of string.
 *
 * @param {string} val
 * @return {string}
 * @api private
 */

function getlatin1 (val) {
  // simple Unicode -> ISO-8859-1 transformation
  return String(val).replace(NON_LATIN1_REGEXP, '?')
}

/**
 * Parse Content-Disposition header string.
 *
 * @param {string} string
 * @return {object}
 * @api private
 */

function parse (string) {
  if (!string || typeof string !== 'string') {
    throw new TypeError('argument string is required')
  }

  var match = DISPOSITION_TYPE_REGEXP.exec(string)

  if (!match) {
    throw new TypeError('invalid type format')
  }

  // normalize type
  var index = match[0].length
  var type = match[1].toLowerCase()

  var key
  var names = []
  var params = {}
  var value

  // calculate index to start at
  index = PARAM_REGEXP.lastIndex = match[0].substr(-1) === ';'
    ? index - 1
    : index

  // match parameters
  while ((match = PARAM_REGEXP.exec(string))) {
    if (match.index !== index) {
      throw new TypeError('invalid parameter format')
    }

    index += match[0].length
    key = match[1].toLowerCase()
    value = match[2]

    if (names.indexOf(key) !== -1) {
      throw new TypeError('invalid duplicate parameter')
    }

    names.push(key)

    if (key.indexOf('*') + 1 === key.length) {
      // decode extended value
      key = key.slice(0, -1)
      value = decodefield(value)

      // overwrite existing value
      params[key] = value
      continue
    }

    if (typeof params[key] === 'string') {
      continue
    }

    if (value[0] === '"') {
      // remove quotes and escapes
      value = value
        .substr(1, value.length - 2)
        .replace(QESC_REGEXP, '$1')
    }

    params[key] = value
  }

  if (index !== -1 && index !== string.length) {
    throw new TypeError('invalid parameter format')
  }

  return new ContentDisposition(type, params)
}

/**
 * Percent decode a single character.
 *
 * @param {string} str
 * @param {string} hex
 * @return {string}
 * @api private
 */

function pdecode (str, hex) {
  return String.fromCharCode(parseInt(hex, 16))
}

/**
 * Percent encode a single character.
 *
 * @param {string} char
 * @return {string}
 * @api private
 */

function pencode (char) {
  var hex = String(char)
    .charCodeAt(0)
    .toString(16)
    .toUpperCase()
  return hex.length === 1
    ? '%0' + hex
    : '%' + hex
}

/**
 * Quote a string for HTTP.
 *
 * @param {string} val
 * @return {string}
 * @api private
 */

function qstring (val) {
  var str = String(val)

  return '"' + str.replace(QUOTE_REGEXP, '\\$1') + '"'
}

/**
 * Encode a Unicode string for HTTP (RFC 5987).
 *
 * @param {string} val
 * @return {string}
 * @api private
 */

function ustring (val) {
  var str = String(val)

  // percent encode as UTF-8
  var encoded = encodeURIComponent(str)
    .replace(ENCODE_URL_ATTR_CHAR_REGEXP, pencode)

  return 'UTF-8\'\'' + encoded
}

/**
 * Class for parsed Content-Disposition header for v8 optimization
 */

function ContentDisposition (type, parameters) {
  this.type = type
  this.parameters = parameters
}


/***/ }),
/* 30 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var path = __webpack_require__(13);

module.exports = function (thePath, potentialParent) {
    // For inside-directory checking, we want to allow trailing slashes, so normalize.
    thePath = stripTrailingSep(thePath);
    potentialParent = stripTrailingSep(potentialParent);

    // Node treats only Windows as case-insensitive in its path module; we follow those conventions.
    if (process.platform === "win32") {
        thePath = thePath.toLowerCase();
        potentialParent = potentialParent.toLowerCase();
    }

    return thePath.lastIndexOf(potentialParent, 0) === 0 &&
		(
			thePath[potentialParent.length] === path.sep ||
			thePath[potentialParent.length] === undefined
		);
};

function stripTrailingSep(thePath) {
    if (thePath[thePath.length - 1] === path.sep) {
        return thePath.slice(0, -1);
    }
    return thePath;
}


/***/ }),
/* 31 */
/***/ ((module) => {

"use strict";
/*!
 * range-parser
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015-2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = rangeParser

/**
 * Parse "Range" header `str` relative to the given file `size`.
 *
 * @param {Number} size
 * @param {String} str
 * @param {Object} [options]
 * @return {Array}
 * @public
 */

function rangeParser (size, str, options) {
  var index = str.indexOf('=')

  if (index === -1) {
    return -2
  }

  // split the range string
  var arr = str.slice(index + 1).split(',')
  var ranges = []

  // add ranges type
  ranges.type = str.slice(0, index)

  // parse all ranges
  for (var i = 0; i < arr.length; i++) {
    var range = arr[i].split('-')
    var start = parseInt(range[0], 10)
    var end = parseInt(range[1], 10)

    // -nnn
    if (isNaN(start)) {
      start = size - end
      end = size - 1
    // nnn-
    } else if (isNaN(end)) {
      end = size - 1
    }

    // limit last-byte-pos to current length
    if (end > size - 1) {
      end = size - 1
    }

    // invalid or unsatisifiable
    if (isNaN(start) || isNaN(end) || start > end || start < 0) {
      continue
    }

    // add range
    ranges.push({
      start: start,
      end: end
    })
  }

  if (ranges.length < 1) {
    // unsatisifiable
    return -1
  }

  return options && options.combine
    ? combineRanges(ranges)
    : ranges
}

/**
 * Combine overlapping & adjacent ranges.
 * @private
 */

function combineRanges (ranges) {
  var ordered = ranges.map(mapWithIndex).sort(sortByRangeStart)

  for (var j = 0, i = 1; i < ordered.length; i++) {
    var range = ordered[i]
    var current = ordered[j]

    if (range.start > current.end + 1) {
      // next range
      ordered[++j] = range
    } else if (range.end > current.end) {
      // extend range
      current.end = range.end
      current.index = Math.min(current.index, range.index)
    }
  }

  // trim ordered array
  ordered.length = j + 1

  // generate combined range
  var combined = ordered.sort(sortByRangeIndex).map(mapWithoutIndex)

  // copy ranges type
  combined.type = ranges.type

  return combined
}

/**
 * Map function to add index value to ranges.
 * @private
 */

function mapWithIndex (range, index) {
  return {
    start: range.start,
    end: range.end,
    index: index
  }
}

/**
 * Map function to remove index value from ranges.
 * @private
 */

function mapWithoutIndex (range) {
  return {
    start: range.start,
    end: range.end
  }
}

/**
 * Sort function to sort ranges by index.
 * @private
 */

function sortByRangeIndex (a, b) {
  return a.index - b.index
}

/**
 * Sort function to sort ranges by start position.
 * @private
 */

function sortByRangeStart (a, b) {
  return a.start - b.start
}


/***/ }),
/* 32 */
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;(function(){function directory(it
) {
var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (function(doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());var out='<!DOCTYPE html><html lang="en"> <head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <title>Files within '+encodeHTML(it.directory)+'</title> <style>body { margin: 0; padding: 30px; background: #fff; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; -webkit-font-smoothing: antialiased;}main { max-width: 920px;}header { display: flex; justify-content: space-between; flex-wrap: wrap;}h1 { font-size: 18px; font-weight: 500; margin-top: 0; color: #000;}header h1 a { font-size: 18px; font-weight: 500; margin-top: 0; color: #000;}h1 i { font-style: normal;}ul { margin: 0 0 0 -2px; padding: 20px 0 0 0;}ul li { list-style: none; font-size: 14px; display: flex; justify-content: space-between;}a { text-decoration: none;}ul a { color: #000; padding: 10px 5px; margin: 0 -5px; white-space: nowrap; overflow: hidden; display: block; width: 100%; text-overflow: ellipsis;}header a { color: #0076FF; font-size: 11px; font-weight: 400; display: inline-block; line-height: 20px;}svg { height: 13px; vertical-align: text-bottom;}ul a::before { display: inline-block; vertical-align: middle; margin-right: 10px; width: 24px; text-align: center; line-height: 12px;}ul a.file::before { content: url("data:image/svg+xml;utf8,<svg width=\'15\' height=\'19\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M10 8C8.34 8 7 6.66 7 5V1H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V8h-4zM8 5c0 1.1.9 2 2 2h3.59L8 1.41V5zM3 0h5l7 7v9c0 1.66-1.34 3-3 3H3c-1.66 0-3-1.34-3-3V3c0-1.66 1.34-3 3-3z\' fill=\'black\'/></svg>");}ul a:hover { text-decoration: underline;}ul a.folder::before { content: url("data:image/svg+xml;utf8,<svg width=\'20\' height=\'16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M18.784 3.87a1.565 1.565 0 0 0-.565-.356V2.426c0-.648-.523-1.171-1.15-1.171H8.996L7.908.25A.89.89 0 0 0 7.302 0H2.094C1.445 0 .944.523.944 1.171v2.3c-.21.085-.398.21-.565.356a1.348 1.348 0 0 0-.377 1.004l.398 9.83C.42 15.393 1.048 16 1.8 16h15.583c.753 0 1.36-.586 1.4-1.339l.398-9.83c.021-.313-.125-.69-.397-.962zM1.843 3.41V1.191c0-.146.104-.272.25-.272H7.26l1.234 1.088c.083.042.167.104.293.104h8.282c.125 0 .25.126.25.272V3.41H1.844zm15.54 11.712H1.78a.47.47 0 0 1-.481-.46l-.397-9.83c0-.147.041-.252.125-.356a.504.504 0 0 1 .377-.147H17.78c.125 0 .272.063.377.147.083.083.125.209.125.334l-.418 9.83c-.021.272-.23.482-.481.482z\' fill=\'black\'/></svg>");}ul a.lambda::before { content: url("data:image/svg+xml; utf8,<svg width=\'15\' height=\'19\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M3.5 14.4354H5.31622L7.30541 9.81311H7.43514L8.65315 13.0797C9.05676 14.1643 9.55405 14.5 10.7 14.5C11.0171 14.5 11.291 14.4677 11.5 14.4032V13.1572C11.3847 13.1766 11.2622 13.2024 11.1541 13.2024C10.6351 13.2024 10.3829 13.0281 10.1595 12.4664L8.02613 7.07586C7.21171 5.01646 6.54865 4.5 5.11441 4.5C4.83333 4.5 4.62432 4.53228 4.37207 4.59038V5.83635C4.56667 5.81052 4.66036 5.79761 4.77568 5.79761C5.64775 5.79761 5.9 6.0042 6.4045 7.19852L6.64234 7.77954L3.5 14.4354Z\' fill=\'black\'/><rect x=\'0.5\' y=\'0.5\' width=\'14\' height=\'18\' rx=\'2.5\' stroke=\'black\'/></svg>");}ul a.file.gif::before,ul a.file.jpg::before,ul a.file.png::before,ul a.file.svg::before { content: url("data:image/svg+xml;utf8,<svg width=\'16\' height=\'16\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' stroke=\'black\' stroke-width=\'5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><rect x=\'6\' y=\'6\' width=\'68\' height=\'68\' rx=\'5\' ry=\'5\'/><circle cx=\'24\' cy=\'24\' r=\'8\'/><path d=\'M73 49L59 34 37 52m16 20L27 42 7 58\'/></svg>");}::selection { background-color: #79FFE1; color: #000;}::-moz-selection { background-color: #79FFE1; color: #000;}@media (min-width: 768px) { ul {display: flex;flex-wrap: wrap; } ul li {width: 230px;padding-right: 20px; }}@media (min-width: 992px) { body {padding: 45px; } h1, header h1 a {font-size: 15px; } ul li {font-size: 13px;box-sizing: border-box;justify-content: flex-start; }}</style> </head> <body> <main> <header> <h1> <i>Index of&nbsp;</i> ';var arr1=it.paths;if(arr1){var value,index=-1,l1=arr1.length-1;while(index<l1){value=arr1[index+=1];out+=' <a href="/'+encodeHTML(value.url)+'">'+encodeHTML(value.name)+'</a> ';} } out+=' </h1> </header> <ul id="files"> ';var arr2=it.files;if(arr2){var value,index=-1,l2=arr2.length-1;while(index<l2){value=arr2[index+=1];out+=' <li> <a href="'+encodeHTML(value.relative)+'" title="'+encodeHTML(value.title)+'" class="'+encodeHTML(value.type)+' '+encodeHTML(value.ext)+'">'+encodeHTML(value.base)+'</a> </li> ';} } out+=' </ul></main> </body></html>';return out;
}var itself=directory, _encodeHTML=(function(doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());if( true && module.exports) module.exports=itself;else if(true)!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return itself;}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}}());

/***/ }),
/* 33 */
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;(function(){function error(it
) {
var out='<!DOCTYPE html><head> <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/> <style> body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; flex-direction: column; } main, aside, section { display: flex; justify-content: center; align-items: center; flex-direction: column; } main { height: 100%; } aside { background: #000; flex-shrink: 1; padding: 30px 20px; } aside p { margin: 0; color: #999999; font-size: 14px; line-height: 24px; } aside a { color: #fff; text-decoration: none; } section span { font-size: 24px; font-weight: 500; display: block; border-bottom: 1px solid #EAEAEA; text-align: center; padding-bottom: 20px; width: 100px; } section p { font-size: 14px; font-weight: 400; } section span + p { margin: 20px 0 0 0; } @media (min-width: 768px) { section { height: 40px; flex-direction: row; } section span, section p { height: 100%; line-height: 40px; } section span { border-bottom: 0; border-right: 1px solid #EAEAEA; padding: 0 20px 0 0; width: auto; } section span + p { margin: 0; padding-left: 20px; } aside { padding: 50px 0; } aside p { max-width: 520px; text-align: center; } } </style></head><body> <main> <section> <span>'+(it.statusCode)+'</span> <p>'+(it.message)+'</p> </section> </main></body>';return out;
}var itself=error, _encodeHTML=(function(doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());if( true && module.exports) module.exports=itself;else if(true)!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return itself;}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}}());

/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _Users_xiange_Documents_mini_code_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);

var _jsxFileName = "/Users/xiange/Documents/mini-code/code/ssr/src/App.js";


function App(_ref) {
  var title = _ref.title;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('hello'),
      _useState2 = (0,_Users_xiange_Documents_mini_code_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
        type: "text",
        value: value,
        onChange: function onChange(e) {
          return setValue(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), value]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),
/* 35 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),
/* 36 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),
/* 37 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),
/* 38 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),
/* 39 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),
/* 40 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),
/* 41 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(42);
} else {
  module.exports = __webpack_require__(43);
}


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var a=Symbol.for("react.fragment");exports.Fragment=a;exports.jsxDEV=void 0;


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

var React = __webpack_require__(4);

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

// ATTENTION

var REACT_ELEMENT_TYPE =  Symbol.for('react.element');
var REACT_PORTAL_TYPE =  Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE =  Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE =  Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE =  Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE =  Symbol.for('react.provider');
var REACT_CONTEXT_TYPE =  Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE =  Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE =  Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE =  Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE =  Symbol.for('react.memo');
var REACT_LAZY_TYPE =  Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE =  Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL =  Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      {
        checkKeyStringCoercion(maybeKey);
      }

      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;