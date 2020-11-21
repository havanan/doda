/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.9
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Popper = factory());
}(this, (function () { 'use strict';

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    if (element) {
      return element.ownerDocument.documentElement;
    }

    return document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function () {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE10$1() && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" � or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

return Popper;

})));
//# sourceMappingURL=popper.js.map
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
 !function(){"use strict";function e(e){function t(t,n){var s,h,k=t==window,y=n&&void 0!==n.message?n.message:void 0;if(n=e.extend({},e.blockUI.defaults,n||{}),!n.ignoreIfBlocked||!e(t).data("blockUI.isBlocked")){if(n.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,n.overlayCSS||{}),s=e.extend({},e.blockUI.defaults.css,n.css||{}),n.onOverlayClick&&(n.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,n.themedCSS||{}),y=void 0===y?n.message:y,k&&p&&o(window,{fadeOut:0}),y&&"string"!=typeof y&&(y.parentNode||y.jquery)){var m=y.jquery?y[0]:y,v={};e(t).data("blockUI.history",v),v.el=m,v.parent=m.parentNode,v.display=m.style.display,v.position=m.style.position,v.parent&&v.parent.removeChild(m)}e(t).data("blockUI.onUnblock",n.onUnblock);var g,I,w,U,x=n.baseZ;g=e(r||n.forceIframe?'<iframe class="blockUI" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+n.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),I=e(n.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x++ +';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),n.theme&&k?(U='<div class="blockUI '+n.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):n.theme?(U='<div class="blockUI '+n.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+n.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+n.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),y&&(n.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(s)),n.theme||I.css(n.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||n.forceIframe)&&g.css("opacity",0);var C=[g,I,w],S=e(k?"body":t);e.each(C,function(){this.appendTo(S)}),n.theme&&n.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:t).length>0);if(u||O){if(k&&n.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=d(t,"borderTopWidth"),T=d(t,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,t){var o=t[0].style;if(o.position="absolute",2>e)k?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+n.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?o.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&o.setExpression("left",B),M&&o.setExpression("top",M);else if(n.centerY)k&&o.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),o.marginTop=0;else if(!n.centerY&&k){var i=n.css&&n.css.top?parseInt(n.css.top,10):0,s="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+i+') + "px"';o.setExpression("top",s)}})}if(y&&(n.theme?w.find(".ui-widget-content").append(y):w.append(y),(y.jquery||y.nodeType)&&e(y).show()),(r||n.forceIframe)&&n.showOverlay&&g.show(),n.fadeIn){var j=n.onBlock?n.onBlock:c,H=n.showOverlay&&!y?j:c,z=y?j:c;n.showOverlay&&I._fadeIn(n.fadeIn,H),y&&w._fadeIn(n.fadeIn,z)}else n.showOverlay&&I.show(),y&&w.show(),n.onBlock&&n.onBlock.bind(w)();if(i(1,t,n),k?(p=w[0],b=e(n.focusableElements,p),n.focusInput&&setTimeout(l,20)):a(w[0],n.centerX,n.centerY),n.timeout){var W=setTimeout(function(){k?e.unblockUI(n):e(t).unblock(n)},n.timeout);e(t).data("blockUI.timeout",W)}}}function o(t,o){var s,l=t==window,a=e(t),d=a.data("blockUI.history"),c=a.data("blockUI.timeout");c&&(clearTimeout(c),a.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),i(0,t,o),null===o.onUnblock&&(o.onUnblock=a.data("blockUI.onUnblock"),a.removeData("blockUI.onUnblock"));var r;r=l?e("body").children().filter(".blockUI").add("body > .blockUI"):a.find(">.blockUI"),o.cursorReset&&(r.length>1&&(r[1].style.cursor=o.cursorReset),r.length>2&&(r[2].style.cursor=o.cursorReset)),l&&(p=b=null),o.fadeOut?(s=r.length,r.stop().fadeOut(o.fadeOut,function(){0===--s&&n(r,d,o,t)})):n(r,d,o,t)}function n(t,o,n,i){var s=e(i);if(!s.data("blockUI.isBlocked")){t.each(function(){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.el.style.cursor="default",o.parent&&o.parent.appendChild(o.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof n.onUnblock&&n.onUnblock(i,n);var l=e(document.body),a=l.width(),d=l[0].style.width;l.width(a-1).width(a),l[0].style.width=d}}function i(t,o,n){var i=o==window,l=e(o);if((t||(!i||p)&&(i||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",t),i&&n.bindEvents&&(!t||n.showOverlay))){var a="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(a,n,s):e(document).unbind(a,s)}}function s(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&p&&t.data.constrainTabKey){var o=b,n=!t.shiftKey&&t.target===o[o.length-1],i=t.shiftKey&&t.target===o[0];if(n||i)return setTimeout(function(){l(i)},10),!1}var s=t.data,a=e(t.target);return a.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(t),a.parents("div."+s.blockMsgClass).length>0?!0:0===a.parents().children().filter("div.blockUI").length}function l(e){if(b){var t=b[e===!0?b.length-1:0];t&&t.focus()}}function a(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-d(n,"borderLeftWidth"),l=(n.offsetHeight-e.offsetHeight)/2-d(n,"borderTopWidth");t&&(i.left=s>0?s+"px":"0"),o&&(i.top=l>0?l+"px":"0")}function d(t,o){return parseInt(e.css(t,o),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),f=(document.documentMode||0,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){t(window,e)},e.unblockUI=function(e){o(window,e)},e.growlUI=function(t,o,n,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>"),o&&s.append("<h2>"+o+"</h2>"),void 0===n&&(n=3e3);var l=function(t){t=t||{},e.blockUI({message:s,fadeIn:"undefined"!=typeof t.fadeIn?t.fadeIn:700,fadeOut:"undefined"!=typeof t.fadeOut?t.fadeOut:1e3,timeout:"undefined"!=typeof t.timeout?t.timeout:n,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};l();s.css("opacity");s.mouseover(function(){l({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(o){if(this[0]===window)return e.blockUI(o),this;var n=e.extend({},e.blockUI.defaults,o||{});return this.each(function(){var t=e(this);n.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,t(this,o)})},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){o(this,t)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var p=null,b=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function($) {

  $.fn.extend({
    slimScroll: function(options) {

      var defaults = {

        // width in pixels of the visible scroll area
        width : 'auto',

        // height in pixels of the visible scroll area
        height : '250px',

        // width in pixels of the scrollbar and rail
        size : '7px',

        // scrollbar color, accepts any hex/color value
        color: '#000',

        // scrollbar position - left/right
        position : 'right',

        // distance in pixels between the side edge and the scrollbar
        distance : '1px',

        // default scroll position on load - top / bottom / $('selector')
        start : 'top',

        // sets scrollbar opacity
        opacity : .4,

        // enables always-on mode for the scrollbar
        alwaysVisible : false,

        // check if we should hide the scrollbar when user is hovering over
        disableFadeOut : false,

        // sets visibility of the rail
        railVisible : false,

        // sets rail color
        railColor : '#333',

        // sets rail opacity
        railOpacity : .2,

        // whether  we should use jQuery UI Draggable to enable bar dragging
        railDraggable : true,

        // defautlt CSS class of the slimscroll rail
        railClass : 'slimScrollRail',

        // defautlt CSS class of the slimscroll bar
        barClass : 'slimScrollBar',

        // defautlt CSS class of the slimscroll wrapper
        wrapperClass : 'slimScrollDiv',

        // check if mousewheel should scroll the window if we reach top/bottom
        allowPageScroll : false,

        // scroll amount applied to each mouse wheel step
        wheelStep : 20,

        // scroll amount applied when user is using gestures
        touchScrollStep : 200,

        // sets border radius
        borderRadius: '7px',

        // sets border radius of the rail
        railBorderRadius : '7px'
      };

      var o = $.extend(defaults, options);

      // do it for every element that matches selector
      this.each(function(){

      var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
        barHeight, percentScroll, lastScroll,
        divS = '<div></div>',
        minBarHeight = 30,
        releaseScroll = false;

        // used in event handlers and for better minification
        var me = $(this);

        // ensure we are not binding it again
        if (me.parent().hasClass(o.wrapperClass))
        {
            // start from last bar position
            var offset = me.scrollTop();

            // find bar and rail
            bar = me.siblings('.' + o.barClass);
            rail = me.siblings('.' + o.railClass);

            getBarHeight();

            // check if we should scroll existing instance
            if ($.isPlainObject(options))
            {
              // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
              if ( 'height' in options && options.height == 'auto' ) {
                me.parent().css('height', 'auto');
                me.css('height', 'auto');
                var height = me.parent().parent().height();
                me.parent().css('height', height);
                me.css('height', height);
              } else if ('height' in options) {
                var h = options.height;
                me.parent().css('height', h);
                me.css('height', h);
              }

              if ('scrollTo' in options)
              {
                // jump to a static point
                offset = parseInt(o.scrollTo);
              }
              else if ('scrollBy' in options)
              {
                // jump by value pixels
                offset += parseInt(o.scrollBy);
              }
              else if ('destroy' in options)
              {
                // remove slimscroll elements
                bar.remove();
                rail.remove();
                me.unwrap();
                return;
              }

              // scroll content by the given offset
              scrollContent(offset, false, true);
            }

            return;
        }
        else if ($.isPlainObject(options))
        {
            if ('destroy' in options)
            {
            	return;
            }
        }

        // optionally set height to the parent's height
        o.height = (o.height == 'auto') ? me.parent().height() : o.height;
        //o.height = o.height - 20;
        //alert(o.height);
        // wrap content
        if(me.parent().attr('class') == "left-sidemenu"){
        	o.height = o.height + 60;
        }
        var wrapper = $(divS)
          .addClass(o.wrapperClass)
          .css({
            position: 'relative',
            overflow: 'hidden',
            width: o.width,
            height: o.height - 20
          });

        // update style for the div
        me.css({
          overflow: 'hidden',
          width: o.width,
          height: o.height - 20
        });

        // create scrollbar rail
        var rail = $(divS)
          .addClass(o.railClass)
          .css({
            width: o.size,
            height: '100%',
            position: 'absolute',
            top: 0,
            display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
            'border-radius': o.railBorderRadius,
            background: o.railColor,
            opacity: o.railOpacity,
            zIndex: 90
          });

        // create scrollbar
        var bar = $(divS)
          .addClass(o.barClass)
          .css({
            background: o.color,
            width: o.size,
            position: 'absolute',
            top: 0,
            opacity: o.opacity,
            display: o.alwaysVisible ? 'block' : 'none',
            'border-radius' : o.borderRadius,
            BorderRadius: o.borderRadius,
            MozBorderRadius: o.borderRadius,
            WebkitBorderRadius: o.borderRadius,
            zIndex: 99
          });

        // set position
        var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
        rail.css(posCss);
        bar.css(posCss);

        // wrap it
        me.wrap(wrapper);

        // append to parent div
        me.parent().append(bar);
        me.parent().append(rail);

        // make it draggable and no longer dependent on the jqueryUI
        if (o.railDraggable){
          bar.bind("mousedown", function(e) {
            var $doc = $(document);
            isDragg = true;
            t = parseFloat(bar.css('top'));
            pageY = e.pageY;

            $doc.bind("mousemove.slimscroll", function(e){
              currTop = t + e.pageY - pageY;
              bar.css('top', currTop);
              scrollContent(0, bar.position().top, false);// scroll content
            });

            $doc.bind("mouseup.slimscroll", function(e) {
              isDragg = false;hideBar();
              $doc.unbind('.slimscroll');
            });
            return false;
          }).bind("selectstart.slimscroll", function(e){
            e.stopPropagation();
            e.preventDefault();
            return false;
          });
        }

        // on rail over
        rail.hover(function(){
          showBar();
        }, function(){
          hideBar();
        });

        // on bar over
        bar.hover(function(){
          isOverBar = true;
        }, function(){
          isOverBar = false;
        });

        // show on parent mouseover
        me.hover(function(){
          isOverPanel = true;
          showBar();
          hideBar();
        }, function(){
          isOverPanel = false;
          hideBar();
        });

        // support for mobile
        me.bind('touchstart', function(e,b){
          if (e.originalEvent.touches.length)
          {
            // record where touch started
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        me.bind('touchmove', function(e){
          // prevent scrolling the page if necessary
          if(!releaseScroll)
          {
  		      e.originalEvent.preventDefault();
		      }
          if (e.originalEvent.touches.length)
          {
            // see how far user swiped
            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
            // scroll content
            scrollContent(diff, true);
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        // set up initial height
        getBarHeight();

        // check start position
        if (o.start === 'bottom')
        {
          // scroll content to bottom
          bar.css({ top: me.outerHeight() - bar.outerHeight() });
          scrollContent(0, true);
        }
        else if (o.start !== 'top')
        {
          // assume jQuery selector
          scrollContent($(o.start).position().top, null, true);

          // make sure bar stays hidden
          if (!o.alwaysVisible) { bar.hide(); }
        }

        // attach scroll events
        attachWheel(this);

        function _onWheel(e)
        {
          // use mouse wheel only when mouse is over
          if (!isOverPanel) { return; }

          var e = e || window.event;

          var delta = 0;
          if (e.wheelDelta) { delta = -e.wheelDelta/120; }
          if (e.detail) { delta = e.detail / 3; }

          var target = e.target || e.srcTarget || e.srcElement;
          if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
            // scroll content
            scrollContent(delta, true);
          }

          // stop window scroll
          if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
          if (!releaseScroll) { e.returnValue = false; }
        }

        function scrollContent(y, isWheel, isJump)
        {
          releaseScroll = false;
          var delta = y;
          var maxTop = me.outerHeight() - bar.outerHeight();

          if (isWheel)
          {
            // move bar with mouse wheel
            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

            // move bar, make sure it doesn't go out
            delta = Math.min(Math.max(delta, 0), maxTop);

            // if scrolling down, make sure a fractional change to the
            // scroll position isn't rounded away when the scrollbar's CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

            // scroll the scrollbar
            bar.css({ top: delta + 'px' });
          }

          // calculate actual scroll amount
          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump)
          {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.css({ top: offsetTop + 'px' });
          }

          // scroll content
          me.scrollTop(delta);

          // fire scrolling event
          me.trigger('slimscrolling', ~~delta);

          // ensure bar is visible
          showBar();

          // trigger hide when scroll is stopped
          hideBar();
        }

        function attachWheel(target)
        {
          if (window.addEventListener)
          {
            target.addEventListener('DOMMouseScroll', _onWheel, false );
            target.addEventListener('mousewheel', _onWheel, false );
          }
          else
          {
            document.attachEvent("onmousewheel", _onWheel)
          }
        }

        function getBarHeight()
        {
          // calculate scrollbar height and make sure it is not too small
          barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
          bar.css({ height: barHeight + 'px' });

          // hide scrollbar if content is not long enough
          var display = barHeight == me.outerHeight() ? 'none' : 'block';
          bar.css({ display: display });
        }

        function showBar()
        {
          // recalculate bar height
          getBarHeight();
          clearTimeout(queueHide);

          // when bar reached top or bottom
          if (percentScroll == ~~percentScroll)
          {
            //release wheel
            releaseScroll = o.allowPageScroll;

            // publish approporiate event
            if (lastScroll != percentScroll)
            {
                var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                me.trigger('slimscroll', msg);
            }
          }
          else
          {
            releaseScroll = false;
          }
          lastScroll = percentScroll;

          // show only when required
          if(barHeight >= me.outerHeight()) {
            //allow window scroll
            releaseScroll = true;
            return;
          }
          bar.stop(true,true).fadeIn('fast');
          if (o.railVisible) { rail.stop(true,true).fadeIn('fast'); }
        }

        function hideBar()
        {
          // only hide when options allow it
          if (!o.alwaysVisible)
          {
            queueHide = setTimeout(function(){
              if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg)
              {
                bar.fadeOut('slow');
                rail.fadeOut('slow');
              }
            }, 1000);
          }
        }

      });

      // maintain chainability
      return this;
    }
  });

  $.fn.extend({
    slimscroll: $.fn.slimScroll
  });

})(jQuery);

/*!
  * Bootstrap v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,h){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},e=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.forEach(function(t){var e,n,i;e=r,i=o[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return r}e=e&&e.hasOwnProperty("default")?e.default:e,h=h&&h.hasOwnProperty("default")?h.default:h;var r,n,o,a,c,u,f,d,g,_,m,p,v,y,E,C,T,b,S,I,A,D,w,N,O,k,P,j,H,L,R,x,W,U,q,F,K,M,Q,B,V,Y,z,J,Z,G,$,X,tt,et,nt,it,rt,ot,st,at,lt,ct,ht,ut,ft,dt,gt,_t,mt,pt,vt,yt,Et,Ct,Tt,bt,St,It,At,Dt,wt,Nt,Ot,kt,Pt,jt,Ht,Lt,Rt,xt,Wt,Ut,qt,Ft,Kt,Mt,Qt,Bt,Vt,Yt,zt,Jt,Zt,Gt,$t,Xt,te,ee,ne,ie,re,oe,se,ae,le,ce,he,ue,fe,de,ge,_e,me,pe,ve,ye,Ee,Ce,Te,be,Se,Ie,Ae,De,we,Ne,Oe,ke,Pe,je,He,Le,Re,xe,We,Ue,qe,Fe,Ke,Me,Qe,Be,Ve,Ye,ze,Je,Ze,Ge,$e,Xe,tn,en,nn,rn,on,sn,an,ln,cn,hn,un,fn,dn,gn,_n,mn,pn,vn,yn,En,Cn,Tn,bn,Sn,In,An,Dn,wn,Nn,On,kn,Pn,jn,Hn,Ln,Rn,xn,Wn,Un,qn,Fn=function(i){var e="transitionend";function t(t){var e=this,n=!1;return i(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(e)},t),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i(t).css("transition-duration");return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],o=e[i],s=o&&l.isElement(o)?"element":(a=o,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+r+'".')}var a}};return i.fn.emulateTransitionEnd=t,i.event.special[l.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},l}(e),Kn=(n="alert",a="."+(o="bs.alert"),c=(r=e).fn[n],u={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",g="show",_=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){r.removeData(this._element,o),this._element=null},t._getRootElement=function(t){var e=Fn.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=r(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=r.Event(u.CLOSE);return r(t).trigger(e),e},t._removeElement=function(e){var n=this;if(r(e).removeClass(g),r(e).hasClass(d)){var t=Fn.getTransitionDurationFromElement(e);r(e).one(Fn.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){r(t).detach().trigger(u.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=r(this),e=t.data(o);e||(e=new i(this),t.data(o,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),i}(),r(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',_._handleDismiss(new _)),r.fn[n]=_._jQueryInterface,r.fn[n].Constructor=_,r.fn[n].noConflict=function(){return r.fn[n]=c,_._jQueryInterface},_),Mn=(p="button",y="."+(v="bs.button"),E=".data-api",C=(m=e).fn[p],T="active",b="btn",I='[data-toggle^="button"]',A='[data-toggle="buttons"]',D="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+y+E,FOCUS_BLUR_DATA_API:(S="focus")+y+E+" blur"+y+E},k=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=m(this._element).closest(A)[0];if(n){var i=this._element.querySelector(D);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(T))t=!1;else{var r=n.querySelector(w);r&&m(r).removeClass(T)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(T),m(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(T)),t&&m(this._element).toggleClass(T)},t.dispose=function(){m.removeData(this._element,v),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=m(this).data(v);t||(t=new n(this),m(this).data(v,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),n}(),m(document).on(O.CLICK_DATA_API,I,function(t){t.preventDefault();var e=t.target;m(e).hasClass(b)||(e=m(e).closest(N)),k._jQueryInterface.call(m(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,I,function(t){var e=m(t.target).closest(N)[0];m(e).toggleClass(S,/^focus(in)?$/.test(t.type))}),m.fn[p]=k._jQueryInterface,m.fn[p].Constructor=k,m.fn[p].noConflict=function(){return m.fn[p]=C,k._jQueryInterface},k),Qn=(j="carousel",L="."+(H="bs.carousel"),R=".data-api",x=(P=e).fn[j],W={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},q="next",F="prev",K="left",M="right",Q={SLIDE:"slide"+L,SLID:"slid"+L,KEYDOWN:"keydown"+L,MOUSEENTER:"mouseenter"+L,MOUSELEAVE:"mouseleave"+L,TOUCHEND:"touchend"+L,LOAD_DATA_API:"load"+L+R,CLICK_DATA_API:"click"+L+R},B="carousel",V="active",Y="slide",z="carousel-item-right",J="carousel-item-left",Z="carousel-item-next",G="carousel-item-prev",$=".active",X=".active.carousel-item",tt=".carousel-item",et=".carousel-item-next, .carousel-item-prev",nt=".carousel-indicators",it="[data-slide], [data-slide-to]",rt='[data-ride="carousel"]',ot=function(){function o(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=P(t)[0],this._indicatorsElement=this._element.querySelector(nt),this._addEventListeners()}var t=o.prototype;return t.next=function(){this._isSliding||this._slide(q)},t.nextWhenVisible=function(){!document.hidden&&P(this._element).is(":visible")&&"hidden"!==P(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(F)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(et)&&(Fn.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(X);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)P(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?q:F;this._slide(i,this._items[t])}},t.dispose=function(){P(this._element).off(L),P.removeData(this._element,H),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},W,t),Fn.typeCheckConfig(j,t,U),t},t._addEventListeners=function(){var e=this;this._config.keyboard&&P(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(P(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&P(this._element).on(Q.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(tt)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===q,i=t===F,r=this._getItemIndex(e),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return e;var s=(r+(t===F?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(X)),r=P.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return P(this._element).trigger(r),r},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll($));P(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&P(n).addClass(V)}},t._slide=function(t,e){var n,i,r,o=this,s=this._element.querySelector(X),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(t===q?(n=J,i=Z,r=K):(n=z,i=G,r=M),l&&P(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=P.Event(Q.SLID,{relatedTarget:l,direction:r,from:a,to:c});if(P(this._element).hasClass(Y)){P(l).addClass(i),Fn.reflow(l),P(s).addClass(n),P(l).addClass(n);var f=Fn.getTransitionDurationFromElement(s);P(s).one(Fn.TRANSITION_END,function(){P(l).removeClass(n+" "+i).addClass(V),P(s).removeClass(V+" "+i+" "+n),o._isSliding=!1,setTimeout(function(){return P(o._element).trigger(u)},0)}).emulateTransitionEnd(f)}else P(s).removeClass(V),P(l).addClass(V),this._isSliding=!1,P(this._element).trigger(u);h&&this.cycle()}},o._jQueryInterface=function(i){return this.each(function(){var t=P(this).data(H),e=l({},W,P(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new o(this,e),P(this).data(H,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},o._dataApiClickHandler=function(t){var e=Fn.getSelectorFromElement(this);if(e){var n=P(e)[0];if(n&&P(n).hasClass(B)){var i=l({},P(n).data(),P(this).data()),r=this.getAttribute("data-slide-to");r&&(i.interval=!1),o._jQueryInterface.call(P(n),i),r&&P(n).data(H).to(r),t.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return W}}]),o}(),P(document).on(Q.CLICK_DATA_API,it,ot._dataApiClickHandler),P(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(rt)),e=0,n=t.length;e<n;e++){var i=P(t[e]);ot._jQueryInterface.call(i,i.data())}}),P.fn[j]=ot._jQueryInterface,P.fn[j].Constructor=ot,P.fn[j].noConflict=function(){return P.fn[j]=x,ot._jQueryInterface},ot),Bn=(at="collapse",ct="."+(lt="bs.collapse"),ht=(st=e).fn[at],ut={toggle:!0,parent:""},ft={toggle:"boolean",parent:"(string|element)"},dt={SHOW:"show"+ct,SHOWN:"shown"+ct,HIDE:"hide"+ct,HIDDEN:"hidden"+ct,CLICK_DATA_API:"click"+ct+".data-api"},gt="show",_t="collapse",mt="collapsing",pt="collapsed",vt="width",yt="height",Et=".show, .collapsing",Ct='[data-toggle="collapse"]',Tt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=st.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(Ct)),i=0,r=n.length;i<r;i++){var o=n[i],s=Fn.getSelectorFromElement(o),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){st(this._element).hasClass(gt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!st(this._element).hasClass(gt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Et)).filter(function(t){return t.getAttribute("data-parent")===n._config.parent})).length&&(t=null),!(t&&(e=st(t).not(this._selector).data(lt))&&e._isTransitioning))){var i=st.Event(dt.SHOW);if(st(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(st(t).not(this._selector),"hide"),e||st(t).data(lt,null));var r=this._getDimension();st(this._element).removeClass(_t).addClass(mt),this._element.style[r]=0,this._triggerArray.length&&st(this._triggerArray).removeClass(pt).attr("aria-expanded",!0),this.setTransitioning(!0);var o="scroll"+(r[0].toUpperCase()+r.slice(1)),s=Fn.getTransitionDurationFromElement(this._element);st(this._element).one(Fn.TRANSITION_END,function(){st(n._element).removeClass(mt).addClass(_t).addClass(gt),n._element.style[r]="",n.setTransitioning(!1),st(n._element).trigger(dt.SHOWN)}).emulateTransitionEnd(s),this._element.style[r]=this._element[o]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&st(this._element).hasClass(gt)){var e=st.Event(dt.HIDE);if(st(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",Fn.reflow(this._element),st(this._element).addClass(mt).removeClass(_t).removeClass(gt);var i=this._triggerArray.length;if(0<i)for(var r=0;r<i;r++){var o=this._triggerArray[r],s=Fn.getSelectorFromElement(o);if(null!==s)st([].slice.call(document.querySelectorAll(s))).hasClass(gt)||st(o).addClass(pt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=Fn.getTransitionDurationFromElement(this._element);st(this._element).one(Fn.TRANSITION_END,function(){t.setTransitioning(!1),st(t._element).removeClass(mt).addClass(_t).trigger(dt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){st.removeData(this._element,lt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},ut,t)).toggle=Boolean(t.toggle),Fn.typeCheckConfig(at,t,ft),t},t._getDimension=function(){return st(this._element).hasClass(vt)?vt:yt},t._getParent=function(){var n=this,t=null;Fn.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return st(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){if(t){var n=st(t).hasClass(gt);e.length&&st(e).toggleClass(pt,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(t){var e=Fn.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=st(this),e=t.data(lt),n=l({},ut,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(lt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return ut}}]),a}(),st(document).on(dt.CLICK_DATA_API,Ct,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=st(this),e=Fn.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));st(i).each(function(){var t=st(this),e=t.data(lt)?"toggle":n.data();Tt._jQueryInterface.call(t,e)})}),st.fn[at]=Tt._jQueryInterface,st.fn[at].Constructor=Tt,st.fn[at].noConflict=function(){return st.fn[at]=ht,Tt._jQueryInterface},Tt),Vn=(St="dropdown",At="."+(It="bs.dropdown"),Dt=".data-api",wt=(bt=e).fn[St],Nt=new RegExp("38|40|27"),Ot={HIDE:"hide"+At,HIDDEN:"hidden"+At,SHOW:"show"+At,SHOWN:"shown"+At,CLICK:"click"+At,CLICK_DATA_API:"click"+At+Dt,KEYDOWN_DATA_API:"keydown"+At+Dt,KEYUP_DATA_API:"keyup"+At+Dt},kt="disabled",Pt="show",jt="dropup",Ht="dropright",Lt="dropleft",Rt="dropdown-menu-right",xt="position-static",Wt='[data-toggle="dropdown"]',Ut=".dropdown form",qt=".dropdown-menu",Ft=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Mt="top-start",Qt="top-end",Bt="bottom-start",Vt="bottom-end",Yt="right-start",zt="left-start",Jt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Zt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Gt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!bt(this._element).hasClass(kt)){var t=c._getParentFromElement(this._element),e=bt(this._menu).hasClass(Pt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=bt.Event(Ot.SHOW,n);if(bt(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof h)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r=this._element;"parent"===this._config.reference?r=t:Fn.isElement(this._config.reference)&&(r=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&bt(t).addClass(xt),this._popper=new h(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===bt(t).closest(Ft).length&&bt(document.body).children().on("mouseover",null,bt.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),bt(this._menu).toggleClass(Pt),bt(t).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN,n))}}}},t.dispose=function(){bt.removeData(this._element,It),bt(this._element).off(At),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;bt(this._element).on(Ot.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,bt(this._element).data(),t),Fn.typeCheckConfig(St,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=bt(this._element.parentNode),e=Bt;return t.hasClass(jt)?(e=Mt,bt(this._menu).hasClass(Rt)&&(e=Qt)):t.hasClass(Ht)?e=Yt:t.hasClass(Lt)?e=zt:bt(this._menu).hasClass(Rt)&&(e=Vt),e},t._detectNavbar=function(){return 0<bt(this._element).closest(".navbar").length},t._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},c._jQueryInterface=function(e){return this.each(function(){var t=bt(this).data(It);if(t||(t=new c(this,"object"==typeof e?e:null),bt(this).data(It,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Wt)),n=0,i=e.length;n<i;n++){var r=c._getParentFromElement(e[n]),o=bt(e[n]).data(It),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),o){var a=o._menu;if(bt(r).hasClass(Pt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&bt.contains(r,t.target))){var l=bt.Event(Ot.HIDE,s);bt(r).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&bt(document.body).children().off("mouseover",null,bt.noop),e[n].setAttribute("aria-expanded","false"),bt(a).removeClass(Pt),bt(r).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=Fn.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||bt(t.target).closest(qt).length)):Nt.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!bt(this).hasClass(kt))){var e=c._getParentFromElement(this),n=bt(e).hasClass(Pt);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var r=i.indexOf(t.target);38===t.which&&0<r&&r--,40===t.which&&r<i.length-1&&r++,r<0&&(r=0),i[r].focus()}}else{if(27===t.which){var o=e.querySelector(Wt);bt(o).trigger("focus")}bt(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Jt}},{key:"DefaultType",get:function(){return Zt}}]),c}(),bt(document).on(Ot.KEYDOWN_DATA_API,Wt,Gt._dataApiKeydownHandler).on(Ot.KEYDOWN_DATA_API,qt,Gt._dataApiKeydownHandler).on(Ot.CLICK_DATA_API+" "+Ot.KEYUP_DATA_API,Gt._clearMenus).on(Ot.CLICK_DATA_API,Wt,function(t){t.preventDefault(),t.stopPropagation(),Gt._jQueryInterface.call(bt(this),"toggle")}).on(Ot.CLICK_DATA_API,Ut,function(t){t.stopPropagation()}),bt.fn[St]=Gt._jQueryInterface,bt.fn[St].Constructor=Gt,bt.fn[St].noConflict=function(){return bt.fn[St]=wt,Gt._jQueryInterface},Gt),Yn=(Xt="modal",ee="."+(te="bs.modal"),ne=($t=e).fn[Xt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},re={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},oe={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-scrollbar-measure",ae="modal-backdrop",le="modal-open",ce="fade",he="show",ue=".modal-dialog",fe='[data-toggle="modal"]',de='[data-dismiss="modal"]',ge=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",_e=".sticky-top",me=function(){function r(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(ue),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var t=r.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){$t(this._element).hasClass(ce)&&(this._isTransitioning=!0);var n=$t.Event(oe.SHOW,{relatedTarget:t});$t(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),$t(document.body).addClass(le),this._setEscapeEvent(),this._setResizeEvent(),$t(this._element).on(oe.CLICK_DISMISS,de,function(t){return e.hide(t)}),$t(this._dialog).on(oe.MOUSEDOWN_DISMISS,function(){$t(e._element).one(oe.MOUSEUP_DISMISS,function(t){$t(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=$t.Event(oe.HIDE);if($t(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=$t(this._element).hasClass(ce);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),$t(document).off(oe.FOCUSIN),$t(this._element).removeClass(he),$t(this._element).off(oe.CLICK_DISMISS),$t(this._dialog).off(oe.MOUSEDOWN_DISMISS),i){var r=Fn.getTransitionDurationFromElement(this._element);$t(this._element).one(Fn.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(r)}else this._hideModal()}}},t.dispose=function(){$t.removeData(this._element,te),$t(window,document,this._element,this._backdrop).off(ee),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),Fn.typeCheckConfig(Xt,t,re),t},t._showElement=function(t){var e=this,n=$t(this._element).hasClass(ce);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&Fn.reflow(this._element),$t(this._element).addClass(he),this._config.focus&&this._enforceFocus();var i=$t.Event(oe.SHOWN,{relatedTarget:t}),r=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,$t(e._element).trigger(i)};if(n){var o=Fn.getTransitionDurationFromElement(this._element);$t(this._dialog).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r()},t._enforceFocus=function(){var e=this;$t(document).off(oe.FOCUSIN).on(oe.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===$t(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?$t(this._element).on(oe.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||$t(this._element).off(oe.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?$t(window).on(oe.RESIZE,function(t){return e.handleUpdate(t)}):$t(window).off(oe.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){$t(document.body).removeClass(le),t._resetAdjustments(),t._resetScrollbar(),$t(t._element).trigger(oe.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&($t(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=$t(this._element).hasClass(ce)?ce:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=ae,n&&this._backdrop.classList.add(n),$t(this._backdrop).appendTo(document.body),$t(this._element).on(oe.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&Fn.reflow(this._backdrop),$t(this._backdrop).addClass(he),!t)return;if(!n)return void t();var i=Fn.getTransitionDurationFromElement(this._backdrop);$t(this._backdrop).one(Fn.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){$t(this._backdrop).removeClass(he);var r=function(){e._removeBackdrop(),t&&t()};if($t(this._element).hasClass(ce)){var o=Fn.getTransitionDurationFromElement(this._backdrop);$t(this._backdrop).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var r=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(ge)),e=[].slice.call(document.querySelectorAll(_e));$t(t).each(function(t,e){var n=e.style.paddingRight,i=$t(e).css("padding-right");$t(e).data("padding-right",n).css("padding-right",parseFloat(i)+r._scrollbarWidth+"px")}),$t(e).each(function(t,e){var n=e.style.marginRight,i=$t(e).css("margin-right");$t(e).data("margin-right",n).css("margin-right",parseFloat(i)-r._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=$t(document.body).css("padding-right");$t(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(ge));$t(t).each(function(t,e){var n=$t(e).data("padding-right");$t(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+_e));$t(e).each(function(t,e){var n=$t(e).data("margin-right");"undefined"!=typeof n&&$t(e).css("margin-right",n).removeData("margin-right")});var n=$t(document.body).data("padding-right");$t(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=se,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},r._jQueryInterface=function(n,i){return this.each(function(){var t=$t(this).data(te),e=l({},ie,$t(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new r(this,e),$t(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(r,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return ie}}]),r}(),$t(document).on(oe.CLICK_DATA_API,fe,function(t){var e,n=this,i=Fn.getSelectorFromElement(this);i&&(e=document.querySelector(i));var r=$t(e).data(te)?"toggle":l({},$t(e).data(),$t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var o=$t(e).one(oe.SHOW,function(t){t.isDefaultPrevented()||o.one(oe.HIDDEN,function(){$t(n).is(":visible")&&n.focus()})});me._jQueryInterface.call($t(e),r,this)}),$t.fn[Xt]=me._jQueryInterface,$t.fn[Xt].Constructor=me,$t.fn[Xt].noConflict=function(){return $t.fn[Xt]=ne,me._jQueryInterface},me),zn=(ve="tooltip",Ee="."+(ye="bs.tooltip"),Ce=(pe=e).fn[ve],Te="bs-tooltip",be=new RegExp("(^|\\s)"+Te+"\\S+","g"),Ae={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(Ie={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!(Se={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},we="out",Ne={HIDE:"hide"+Ee,HIDDEN:"hidden"+Ee,SHOW:(De="show")+Ee,SHOWN:"shown"+Ee,INSERTED:"inserted"+Ee,CLICK:"click"+Ee,FOCUSIN:"focusin"+Ee,FOCUSOUT:"focusout"+Ee,MOUSEENTER:"mouseenter"+Ee,MOUSELEAVE:"mouseleave"+Ee},Oe="fade",ke="show",Pe=".tooltip-inner",je=".arrow",He="hover",Le="focus",Re="click",xe="manual",We=function(){function i(t,e){if("undefined"==typeof h)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=pe(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(pe(this.getTipElement()).hasClass(ke))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),pe.removeData(this.element,this.constructor.DATA_KEY),pe(this.element).off(this.constructor.EVENT_KEY),pe(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&pe(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===pe(this.element).css("display"))throw new Error("Please use show on visible elements");var t=pe.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){pe(this.element).trigger(t);var n=pe.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),r=Fn.getUID(this.constructor.NAME);i.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&pe(i).addClass(Oe);var o="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,s=this._getAttachment(o);this.addAttachmentClass(s);var a=!1===this.config.container?document.body:pe(document).find(this.config.container);pe(i).data(this.constructor.DATA_KEY,this),pe.contains(this.element.ownerDocument.documentElement,this.tip)||pe(i).appendTo(a),pe(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new h(this.element,i,{placement:s,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:je},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),pe(i).addClass(ke),"ontouchstart"in document.documentElement&&pe(document.body).children().on("mouseover",null,pe.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,pe(e.element).trigger(e.constructor.Event.SHOWN),t===we&&e._leave(null,e)};if(pe(this.tip).hasClass(Oe)){var c=Fn.getTransitionDurationFromElement(this.tip);pe(this.tip).one(Fn.TRANSITION_END,l).emulateTransitionEnd(c)}else l()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=pe.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==De&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),pe(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(pe(this.element).trigger(i),!i.isDefaultPrevented()){if(pe(n).removeClass(ke),"ontouchstart"in document.documentElement&&pe(document.body).children().off("mouseover",null,pe.noop),this._activeTrigger[Re]=!1,this._activeTrigger[Le]=!1,this._activeTrigger[He]=!1,pe(this.tip).hasClass(Oe)){var o=Fn.getTransitionDurationFromElement(n);pe(n).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){pe(this.getTipElement()).addClass(Te+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||pe(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(pe(t.querySelectorAll(Pe)),this.getTitle()),pe(t).removeClass(Oe+" "+ke)},t.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?pe(e).parent().is(t)||t.empty().append(e):t.text(pe(e).text()):t[n?"html":"text"](e)},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getAttachment=function(t){return Ie[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)pe(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==xe){var e=t===He?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===He?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;pe(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}pe(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||pe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Le:He]=!0),pe(e.getTipElement()).hasClass(ke)||e._hoverState===De?e._hoverState=De:(clearTimeout(e._timeout),e._hoverState=De,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===De&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||pe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Le:He]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=we,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===we&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){return"number"==typeof(t=l({},this.constructor.Default,pe(this.element).data(),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),Fn.typeCheckConfig(ve,t,this.constructor.DefaultType),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=pe(this.getTipElement()),e=t.attr("class").match(be);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(pe(t).removeClass(Oe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=pe(this).data(ye),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),pe(this).data(ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Ae}},{key:"NAME",get:function(){return ve}},{key:"DATA_KEY",get:function(){return ye}},{key:"Event",get:function(){return Ne}},{key:"EVENT_KEY",get:function(){return Ee}},{key:"DefaultType",get:function(){return Se}}]),i}(),pe.fn[ve]=We._jQueryInterface,pe.fn[ve].Constructor=We,pe.fn[ve].noConflict=function(){return pe.fn[ve]=Ce,We._jQueryInterface},We),Jn=(qe="popover",Ke="."+(Fe="bs.popover"),Me=(Ue=e).fn[qe],Qe="bs-popover",Be=new RegExp("(^|\\s)"+Qe+"\\S+","g"),Ve=l({},zn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ye=l({},zn.DefaultType,{content:"(string|element|function)"}),ze="fade",Ze=".popover-header",Ge=".popover-body",$e={HIDE:"hide"+Ke,HIDDEN:"hidden"+Ke,SHOW:(Je="show")+Ke,SHOWN:"shown"+Ke,INSERTED:"inserted"+Ke,CLICK:"click"+Ke,FOCUSIN:"focusin"+Ke,FOCUSOUT:"focusout"+Ke,MOUSEENTER:"mouseenter"+Ke,MOUSELEAVE:"mouseleave"+Ke},Xe=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var r=i.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){Ue(this.getTipElement()).addClass(Qe+"-"+t)},r.getTipElement=function(){return this.tip=this.tip||Ue(this.config.template)[0],this.tip},r.setContent=function(){var t=Ue(this.getTipElement());this.setElementContent(t.find(Ze),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(Ge),e),t.removeClass(ze+" "+Je)},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=Ue(this.getTipElement()),e=t.attr("class").match(Be);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=Ue(this).data(Fe),e="object"==typeof n?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this,e),Ue(this).data(Fe,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Ve}},{key:"NAME",get:function(){return qe}},{key:"DATA_KEY",get:function(){return Fe}},{key:"Event",get:function(){return $e}},{key:"EVENT_KEY",get:function(){return Ke}},{key:"DefaultType",get:function(){return Ye}}]),i}(zn),Ue.fn[qe]=Xe._jQueryInterface,Ue.fn[qe].Constructor=Xe,Ue.fn[qe].noConflict=function(){return Ue.fn[qe]=Me,Xe._jQueryInterface},Xe),Zn=(en="scrollspy",rn="."+(nn="bs.scrollspy"),on=(tn=e).fn[en],sn={offset:10,method:"auto",target:""},an={offset:"number",method:"string",target:"(string|element)"},ln={ACTIVATE:"activate"+rn,SCROLL:"scroll"+rn,LOAD_DATA_API:"load"+rn+".data-api"},cn="dropdown-item",hn="active",un='[data-spy="scroll"]',fn=".active",dn=".nav, .list-group",gn=".nav-link",_n=".nav-item",mn=".list-group-item",pn=".dropdown",vn=".dropdown-item",yn=".dropdown-toggle",En="offset",Cn="position",Tn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+gn+","+this._config.target+" "+mn+","+this._config.target+" "+vn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,tn(this._scrollElement).on(ln.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?En:Cn,r="auto"===this._config.method?t:this._config.method,o=r===Cn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=Fn.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[tn(e)[r]().top+o,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){tn.removeData(this._element,nn),tn(this._scrollElement).off(rn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},sn,"object"==typeof t&&t?t:{})).target){var e=tn(t.target).attr("id");e||(e=Fn.getUID(en),tn(t.target).attr("id",e)),t.target="#"+e}return Fn.typeCheckConfig(en,t,an),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&("undefined"==typeof this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",");t=t.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=tn([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(cn)?(n.closest(pn).find(yn).addClass(hn),n.addClass(hn)):(n.addClass(hn),n.parents(dn).prev(gn+", "+mn).addClass(hn),n.parents(dn).prev(_n).children(gn).addClass(hn)),tn(this._scrollElement).trigger(ln.ACTIVATE,{relatedTarget:e})},t._clear=function(){var t=[].slice.call(document.querySelectorAll(this._selector));tn(t).filter(fn).removeClass(hn)},n._jQueryInterface=function(e){return this.each(function(){var t=tn(this).data(nn);if(t||(t=new n(this,"object"==typeof e&&e),tn(this).data(nn,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return sn}}]),n}(),tn(window).on(ln.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(un)),e=t.length;e--;){var n=tn(t[e]);Tn._jQueryInterface.call(n,n.data())}}),tn.fn[en]=Tn._jQueryInterface,tn.fn[en].Constructor=Tn,tn.fn[en].noConflict=function(){return tn.fn[en]=on,Tn._jQueryInterface},Tn),Gn=(In="."+(Sn="bs.tab"),An=(bn=e).fn.tab,Dn={HIDE:"hide"+In,HIDDEN:"hidden"+In,SHOW:"show"+In,SHOWN:"shown"+In,CLICK_DATA_API:"click"+In+".data-api"},wn="dropdown-menu",Nn="active",On="disabled",kn="fade",Pn="show",jn=".dropdown",Hn=".nav, .list-group",Ln=".active",Rn="> li > .active",xn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Wn=".dropdown-toggle",Un="> .dropdown-menu .active",qn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&bn(this._element).hasClass(Nn)||bn(this._element).hasClass(On))){var t,i,e=bn(this._element).closest(Hn)[0],r=Fn.getSelectorFromElement(this._element);if(e){var o="UL"===e.nodeName?Rn:Ln;i=(i=bn.makeArray(bn(e).find(o)))[i.length-1]}var s=bn.Event(Dn.HIDE,{relatedTarget:this._element}),a=bn.Event(Dn.SHOW,{relatedTarget:i});if(i&&bn(i).trigger(s),bn(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(t=document.querySelector(r)),this._activate(this._element,e);var l=function(){var t=bn.Event(Dn.HIDDEN,{relatedTarget:n._element}),e=bn.Event(Dn.SHOWN,{relatedTarget:i});bn(i).trigger(t),bn(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){bn.removeData(this._element,Sn),this._element=null},t._activate=function(t,e,n){var i=this,r=("UL"===e.nodeName?bn(e).find(Rn):bn(e).children(Ln))[0],o=n&&r&&bn(r).hasClass(kn),s=function(){return i._transitionComplete(t,r,n)};if(r&&o){var a=Fn.getTransitionDurationFromElement(r);bn(r).one(Fn.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){bn(e).removeClass(Pn+" "+Nn);var i=bn(e.parentNode).find(Un)[0];i&&bn(i).removeClass(Nn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(bn(t).addClass(Nn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),Fn.reflow(t),bn(t).addClass(Pn),t.parentNode&&bn(t.parentNode).hasClass(wn)){var r=bn(t).closest(jn)[0];if(r){var o=[].slice.call(r.querySelectorAll(Wn));bn(o).addClass(Nn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=bn(this),e=t.data(Sn);if(e||(e=new i(this),t.data(Sn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),i}(),bn(document).on(Dn.CLICK_DATA_API,xn,function(t){t.preventDefault(),qn._jQueryInterface.call(bn(this),"show")}),bn.fn.tab=qn._jQueryInterface,bn.fn.tab.Constructor=qn,bn.fn.tab.noConflict=function(){return bn.fn.tab=An,qn._jQueryInterface},qn);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=Fn,t.Alert=Kn,t.Button=Mn,t.Carousel=Qn,t.Collapse=Bn,t.Dropdown=Vn,t.Modal=Yn,t.Popover=Jn,t.Scrollspy=Zn,t.Tab=Gn,t.Tooltip=zn,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
/**
  * bootstrap-switch - Turn checkboxes and radio buttons into toggle switches.
  *
  * @version v3.3.4
  * @homepage https://bttstrp.github.io/bootstrap-switch
  * @author Mattia Larentis <mattia@larentis.eu> (http://larentis.eu)
  * @license Apache-2.0
  */

(function(a,b){if('function'==typeof define&&define.amd)define(['jquery'],b);else if('undefined'!=typeof exports)b(require('jquery'));else{b(a.jquery),a.bootstrapSwitch={exports:{}}.exports}})(this,function(a){'use strict';function c(j,k){if(!(j instanceof k))throw new TypeError('Cannot call a class as a function')}var d=function(j){return j&&j.__esModule?j:{default:j}}(a),e=Object.assign||function(j){for(var l,k=1;k<arguments.length;k++)for(var m in l=arguments[k],l)Object.prototype.hasOwnProperty.call(l,m)&&(j[m]=l[m]);return j},f=function(){function j(k,l){for(var n,m=0;m<l.length;m++)n=l[m],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(k,n.key,n)}return function(k,l,m){return l&&j(k.prototype,l),m&&j(k,m),k}}(),g=d.default||window.jQuery||window.$,h=function(){function j(k){var l=this,m=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};c(this,j),this.$element=g(k),this.options=g.extend({},g.fn.bootstrapSwitch.defaults,this._getElementOptions(),m),this.prevOptions={},this.$wrapper=g('<div>',{class:function(){var o=[];return o.push(l.options.state?'on':'off'),l.options.size&&o.push(l.options.size),l.options.disabled&&o.push('disabled'),l.options.readonly&&o.push('readonly'),l.options.indeterminate&&o.push('indeterminate'),l.options.inverse&&o.push('inverse'),l.$element.attr('id')&&o.push('id-'+l.$element.attr('id')),o.map(l._getClass.bind(l)).concat([l.options.baseClass],l._getClasses(l.options.wrapperClass)).join(' ')}}),this.$container=g('<div>',{class:this._getClass('container')}),this.$on=g('<span>',{html:this.options.onText,class:this._getClass('handle-on')+' '+this._getClass(this.options.onColor)}),this.$off=g('<span>',{html:this.options.offText,class:this._getClass('handle-off')+' '+this._getClass(this.options.offColor)}),this.$label=g('<span>',{html:this.options.labelText,class:this._getClass('label')}),this.$element.on('init.bootstrapSwitch',this.options.onInit.bind(this,k)),this.$element.on('switchChange.bootstrapSwitch',function(){for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];!1===l.options.onSwitchChange.apply(k,o)&&(l.$element.is(':radio')?g('[name="'+l.$element.attr('name')+'"]').trigger('previousState.bootstrapSwitch',!0):l.$element.trigger('previousState.bootstrapSwitch',!0))}),this.$container=this.$element.wrap(this.$container).parent(),this.$wrapper=this.$container.wrap(this.$wrapper).parent(),this.$element.before(this.options.inverse?this.$off:this.$on).before(this.$label).before(this.options.inverse?this.$on:this.$off),this.options.indeterminate&&this.$element.prop('indeterminate',!0),this._init(),this._elementHandlers(),this._handleHandlers(),this._labelHandlers(),this._formHandler(),this._externalLabelHandler(),this.$element.trigger('init.bootstrapSwitch',this.options.state)}return f(j,[{key:'setPrevOptions',value:function(){this.prevOptions=e({},this.options)}},{key:'state',value:function(l,m){return'undefined'==typeof l?this.options.state:this.options.disabled||this.options.readonly||this.options.state&&!this.options.radioAllOff&&this.$element.is(':radio')?this.$element:(this.$element.is(':radio')?g('[name="'+this.$element.attr('name')+'"]').trigger('setPreviousOptions.bootstrapSwitch'):this.$element.trigger('setPreviousOptions.bootstrapSwitch'),this.options.indeterminate&&this.indeterminate(!1),this.$element.prop('checked',!!l).trigger('change.bootstrapSwitch',m),this.$element)}},{key:'toggleState',value:function(l){return this.options.disabled||this.options.readonly?this.$element:this.options.indeterminate?(this.indeterminate(!1),this.state(!0)):this.$element.prop('checked',!this.options.state).trigger('change.bootstrapSwitch',l)}},{key:'size',value:function(l){return'undefined'==typeof l?this.options.size:(null!=this.options.size&&this.$wrapper.removeClass(this._getClass(this.options.size)),l&&this.$wrapper.addClass(this._getClass(l)),this._width(),this._containerPosition(),this.options.size=l,this.$element)}},{key:'animate',value:function(l){return'undefined'==typeof l?this.options.animate:this.options.animate===!!l?this.$element:this.toggleAnimate()}},{key:'toggleAnimate',value:function(){return this.options.animate=!this.options.animate,this.$wrapper.toggleClass(this._getClass('animate')),this.$element}},{key:'disabled',value:function(l){return'undefined'==typeof l?this.options.disabled:this.options.disabled===!!l?this.$element:this.toggleDisabled()}},{key:'toggleDisabled',value:function(){return this.options.disabled=!this.options.disabled,this.$element.prop('disabled',this.options.disabled),this.$wrapper.toggleClass(this._getClass('disabled')),this.$element}},{key:'readonly',value:function(l){return'undefined'==typeof l?this.options.readonly:this.options.readonly===!!l?this.$element:this.toggleReadonly()}},{key:'toggleReadonly',value:function(){return this.options.readonly=!this.options.readonly,this.$element.prop('readonly',this.options.readonly),this.$wrapper.toggleClass(this._getClass('readonly')),this.$element}},{key:'indeterminate',value:function(l){return'undefined'==typeof l?this.options.indeterminate:this.options.indeterminate===!!l?this.$element:this.toggleIndeterminate()}},{key:'toggleIndeterminate',value:function(){return this.options.indeterminate=!this.options.indeterminate,this.$element.prop('indeterminate',this.options.indeterminate),this.$wrapper.toggleClass(this._getClass('indeterminate')),this._containerPosition(),this.$element}},{key:'inverse',value:function(l){return'undefined'==typeof l?this.options.inverse:this.options.inverse===!!l?this.$element:this.toggleInverse()}},{key:'toggleInverse',value:function(){this.$wrapper.toggleClass(this._getClass('inverse'));var l=this.$on.clone(!0),m=this.$off.clone(!0);return this.$on.replaceWith(m),this.$off.replaceWith(l),this.$on=m,this.$off=l,this.options.inverse=!this.options.inverse,this.$element}},{key:'onColor',value:function(l){return'undefined'==typeof l?this.options.onColor:(this.options.onColor&&this.$on.removeClass(this._getClass(this.options.onColor)),this.$on.addClass(this._getClass(l)),this.options.onColor=l,this.$element)}},{key:'offColor',value:function(l){return'undefined'==typeof l?this.options.offColor:(this.options.offColor&&this.$off.removeClass(this._getClass(this.options.offColor)),this.$off.addClass(this._getClass(l)),this.options.offColor=l,this.$element)}},{key:'onText',value:function(l){return'undefined'==typeof l?this.options.onText:(this.$on.html(l),this._width(),this._containerPosition(),this.options.onText=l,this.$element)}},{key:'offText',value:function(l){return'undefined'==typeof l?this.options.offText:(this.$off.html(l),this._width(),this._containerPosition(),this.options.offText=l,this.$element)}},{key:'labelText',value:function(l){return'undefined'==typeof l?this.options.labelText:(this.$label.html(l),this._width(),this.options.labelText=l,this.$element)}},{key:'handleWidth',value:function(l){return'undefined'==typeof l?this.options.handleWidth:(this.options.handleWidth=l,this._width(),this._containerPosition(),this.$element)}},{key:'labelWidth',value:function(l){return'undefined'==typeof l?this.options.labelWidth:(this.options.labelWidth=l,this._width(),this._containerPosition(),this.$element)}},{key:'baseClass',value:function(){return this.options.baseClass}},{key:'wrapperClass',value:function(l){return'undefined'==typeof l?this.options.wrapperClass:(l||(l=g.fn.bootstrapSwitch.defaults.wrapperClass),this.$wrapper.removeClass(this._getClasses(this.options.wrapperClass).join(' ')),this.$wrapper.addClass(this._getClasses(l).join(' ')),this.options.wrapperClass=l,this.$element)}},{key:'radioAllOff',value:function(l){if('undefined'==typeof l)return this.options.radioAllOff;var m=!!l;return this.options.radioAllOff===m?this.$element:(this.options.radioAllOff=m,this.$element)}},{key:'onInit',value:function(l){return'undefined'==typeof l?this.options.onInit:(l||(l=g.fn.bootstrapSwitch.defaults.onInit),this.options.onInit=l,this.$element)}},{key:'onSwitchChange',value:function(l){return'undefined'==typeof l?this.options.onSwitchChange:(l||(l=g.fn.bootstrapSwitch.defaults.onSwitchChange),this.options.onSwitchChange=l,this.$element)}},{key:'destroy',value:function(){var l=this.$element.closest('form');return l.length&&l.off('reset.bootstrapSwitch').removeData('bootstrap-switch'),this.$container.children().not(this.$element).remove(),this.$element.unwrap().unwrap().off('.bootstrapSwitch').removeData('bootstrap-switch'),this.$element}},{key:'_getElementOptions',value:function(){return{state:this.$element.is(':checked'),size:this.$element.data('size'),animate:this.$element.data('animate'),disabled:this.$element.is(':disabled'),readonly:this.$element.is('[readonly]'),indeterminate:this.$element.data('indeterminate'),inverse:this.$element.data('inverse'),radioAllOff:this.$element.data('radio-all-off'),onColor:this.$element.data('on-color'),offColor:this.$element.data('off-color'),onText:this.$element.data('on-text'),offText:this.$element.data('off-text'),labelText:this.$element.data('label-text'),handleWidth:this.$element.data('handle-width'),labelWidth:this.$element.data('label-width'),baseClass:this.$element.data('base-class'),wrapperClass:this.$element.data('wrapper-class')}}},{key:'_width',value:function(){var l=this,m=this.$on.add(this.$off).add(this.$label).css('width',''),n='auto'===this.options.handleWidth?Math.round(Math.max(this.$on.width(),this.$off.width())):this.options.handleWidth;return m.width(n),this.$label.width(function(o,p){return'auto'===l.options.labelWidth?p<n?n:p:l.options.labelWidth}),this._handleWidth=this.$on.outerWidth(),this._labelWidth=this.$label.outerWidth(),this.$container.width(2*this._handleWidth+this._labelWidth),this.$wrapper.width(this._handleWidth+this._labelWidth)}},{key:'_containerPosition',value:function(){var l=this,m=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.options.state,n=arguments[1];this.$container.css('margin-left',function(){var o=[0,'-'+l._handleWidth+'px'];return l.options.indeterminate?'-'+l._handleWidth/2+'px':m?l.options.inverse?o[1]:o[0]:l.options.inverse?o[0]:o[1]})}},{key:'_init',value:function(){var l=this,m=function(){l.setPrevOptions(),l._width(),l._containerPosition(),setTimeout(function(){if(l.options.animate)return l.$wrapper.addClass(l._getClass('animate'))},50)};if(this.$wrapper.is(':visible'))return void m();var n=window.setInterval(function(){if(l.$wrapper.is(':visible'))return m(),window.clearInterval(n)},50)}},{key:'_elementHandlers',value:function(){var l=this;return this.$element.on({'setPreviousOptions.bootstrapSwitch':this.setPrevOptions.bind(this),'previousState.bootstrapSwitch':function(){l.options=l.prevOptions,l.options.indeterminate&&l.$wrapper.addClass(l._getClass('indeterminate')),l.$element.prop('checked',l.options.state).trigger('change.bootstrapSwitch',!0)},'change.bootstrapSwitch':function(n,o){n.preventDefault(),n.stopImmediatePropagation();var p=l.$element.is(':checked');l._containerPosition(p),p===l.options.state||(l.options.state=p,l.$wrapper.toggleClass(l._getClass('off')).toggleClass(l._getClass('on')),!o&&(l.$element.is(':radio')&&g('[name="'+l.$element.attr('name')+'"]').not(l.$element).prop('checked',!1).trigger('change.bootstrapSwitch',!0),l.$element.trigger('switchChange.bootstrapSwitch',[p])))},'focus.bootstrapSwitch':function(n){n.preventDefault(),l.$wrapper.addClass(l._getClass('focused'))},'blur.bootstrapSwitch':function(n){n.preventDefault(),l.$wrapper.removeClass(l._getClass('focused'))},'keydown.bootstrapSwitch':function(n){!n.which||l.options.disabled||l.options.readonly||(37===n.which||39===n.which)&&(n.preventDefault(),n.stopImmediatePropagation(),l.state(39===n.which))}})}},{key:'_handleHandlers',value:function(){var l=this;return this.$on.on('click.bootstrapSwitch',function(m){return m.preventDefault(),m.stopPropagation(),l.state(!1),l.$element.trigger('focus.bootstrapSwitch')}),this.$off.on('click.bootstrapSwitch',function(m){return m.preventDefault(),m.stopPropagation(),l.state(!0),l.$element.trigger('focus.bootstrapSwitch')})}},{key:'_labelHandlers',value:function(){var l=this;this.$label.on({click:function(o){o.stopPropagation()},'mousedown.bootstrapSwitch touchstart.bootstrapSwitch':function(o){l._dragStart||l.options.disabled||l.options.readonly||(o.preventDefault(),o.stopPropagation(),l._dragStart=(o.pageX||o.originalEvent.touches[0].pageX)-parseInt(l.$container.css('margin-left'),10),l.options.animate&&l.$wrapper.removeClass(l._getClass('animate')),l.$element.trigger('focus.bootstrapSwitch'))},'mousemove.bootstrapSwitch touchmove.bootstrapSwitch':function(o){if(null!=l._dragStart){var p=(o.pageX||o.originalEvent.touches[0].pageX)-l._dragStart;o.preventDefault(),p<-l._handleWidth||0<p||(l._dragEnd=p,l.$container.css('margin-left',l._dragEnd+'px'))}},'mouseup.bootstrapSwitch touchend.bootstrapSwitch':function(o){if(l._dragStart){if(o.preventDefault(),l.options.animate&&l.$wrapper.addClass(l._getClass('animate')),l._dragEnd){var p=l._dragEnd>-(l._handleWidth/2);l._dragEnd=!1,l.state(l.options.inverse?!p:p)}else l.state(!l.options.state);l._dragStart=!1}},'mouseleave.bootstrapSwitch':function(){l.$label.trigger('mouseup.bootstrapSwitch')}})}},{key:'_externalLabelHandler',value:function(){var l=this,m=this.$element.closest('label');m.on('click',function(n){n.preventDefault(),n.stopImmediatePropagation(),n.target===m[0]&&l.toggleState()})}},{key:'_formHandler',value:function(){var l=this.$element.closest('form');l.data('bootstrap-switch')||l.on('reset.bootstrapSwitch',function(){window.setTimeout(function(){l.find('input').filter(function(){return g(this).data('bootstrap-switch')}).each(function(){return g(this).bootstrapSwitch('state',this.checked)})},1)}).data('bootstrap-switch',!0)}},{key:'_getClass',value:function(l){return this.options.baseClass+'-'+l}},{key:'_getClasses',value:function(l){return g.isArray(l)?l.map(this._getClass.bind(this)):[this._getClass(l)]}}]),j}();g.fn.bootstrapSwitch=function(j){for(var l=arguments.length,m=Array(1<l?l-1:0),n=1;n<l;n++)m[n-1]=arguments[n];return Array.prototype.reduce.call(this,function(o,p){var q=g(p),r=q.data('bootstrap-switch'),s=r||new h(p,j);return r||q.data('bootstrap-switch',s),'string'==typeof j?s[j].apply(s,m):o},this)},g.fn.bootstrapSwitch.Constructor=h,g.fn.bootstrapSwitch.defaults={state:!0,size:null,animate:!0,disabled:!1,readonly:!1,indeterminate:!1,inverse:!1,radioAllOff:!1,onColor:'primary',offColor:'default',onText:'ON',offText:'OFF',labelText:'&nbsp',handleWidth:'auto',labelWidth:'auto',baseClass:'bootstrap-switch',wrapperClass:'wrapper',onInit:function(){},onSwitchChange:function(){}}});

/**
 *  Document   : app.js
 *  Author     : redstar
 *  Description: Core script to handle the entire theme and core functions
 *
 **/
var App = function() {

    // IE mode
    var isIE8 = false;
    var isIE9 = false;
    var isIE10 = false;

    var resizeHandlers = [];

    var assetsPath = '';

    var globalImgPath = 'img/';

    var globalPluginsPath = 'global/plugins/';

    var globalCssPath = 'css/';

    /************* Setting for IE ****************/
    var handleInit = function() {


        isIE8 = !!navigator.userAgent.match(/MSIE 8.0/);
        isIE9 = !!navigator.userAgent.match(/MSIE 9.0/);
        isIE10 = !!navigator.userAgent.match(/MSIE 10.0/);

        if (isIE10) {
            $('html').addClass('ie10'); // detect IE10 version
        }

        if (isIE10 || isIE9 || isIE8) {
            $('html').addClass('ie'); // detect IE10 version
        }
    };
    
    /************** Disable inspect element ****************/
    var disableInspect = function(e) {
    	$(document).keydown(function (event) {
    	    if (event.keyCode == 123) { // Prevent F12
    	        return false;
    	    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
    	        return false;
    	    }else if (event.ctrlKey && event.keyCode == 'U'.charCodeAt(0)) { // Prevent Ctrl+U        
    	        return false;
    	    }else if (event.ctrlKey && event.shiftKey && event.keyCode == 'J'.charCodeAt(0)) { // Prevent Ctrl+Shift+J        
    	        return false;
    	    }
    	});
    	
    	$(document).on("contextmenu", function (e) {        
    	    e.preventDefault();
    	});
    };
    
    /*************** Change theme color *************/
    var handleColorSetting = function() {

    	$(document).on('click', '.control-sidebar-btn', function () {
    		jQuery( ".quick-setting" ).toggle( "slide");
    	});

    };
    
    /*************** Change Language *************/
    var handleLanguage = function() {

    	$(document).on('click', '.language-switch .dropdown-menu li a', function () {
    		$(".language-switch>a").html($(this).html()+'<span class="fa fa-angle-down"></span>');
    		$(".language-switch>a img").addClass("position-left");
    	});

    };
    /*************** Hover Sidemenu *************/
    var handleHoverSidemenu = function() {
    	$(".sidemenu-hover-submenu").parent().parent().css("position","relative");
    };

    /************* Handle theme layout ****************/
    var handleTheme = function() {

        var panel = $('.chatpane');

        if ($('body').hasClass('page-boxed') === false) {
            $('.layout-option', panel).val("fluid");
        }

        $('.sidebar-option', panel).val("default");
        $('.page-header-option', panel).val("fixed");
        $('.page-footer-option', panel).val("default");
        if ($('.sidebar-pos-option').attr("disabled") === false) {
            $('.sidebar-pos-option', panel).val('left');
        }
        var lastSelectedLayout = '';

        var setLayout = function() {

            var layoutOption = $('.layout-option', panel).val();
            var sidebarOption = $('.sidebar-option', panel).val();
            var headerOption = $('.page-header-option', panel).val();
            var footerOption = $('.page-footer-option', panel).val();
            var sidebarPosOption = $('.sidebar-pos-option', panel).val();
            var sidebarStyleOption = $('.sidebar-style-option', panel).val();
            var sidebarMenuOption = $('.sidebar-menu-option', panel).val();
            var headerTopDropdownStyle = $('.page-header-top-dropdown-style-option', panel).val();

            if (sidebarOption == "fixed" && headerOption == "default") {
                alert('Default Header with Fixed Sidebar option is not supported. Proceed with Fixed Header with Fixed Sidebar.');
                $('.page-header-option', panel).val("fixed");
                $('.sidebar-option', panel).val("fixed");
                sidebarOption = 'fixed';
                headerOption = 'fixed';
            }

            resetLayout(); // reset layout to default state

            if (layoutOption === "boxed") {
                $("body").addClass("page-boxed");

                // set header
                $('.page-header > .page-header-inner').addClass("container");
                var cont = $('body > .clearfix').after('<div class="container"></div>');

                // set content
                $('.page-container').appendTo('body > .container');

                // set footer
                if (footerOption === 'fixed') {
                    $('.page-footer').html('<div class="container">' + $('.page-footer').html() + '</div>');
                } else {
                    $('.page-footer').appendTo('body > .container');
                }
            }

            if (lastSelectedLayout != layoutOption) {
                //layout changed, run responsive handler: 
                App.runResizeHandlers();
            }
            lastSelectedLayout = layoutOption;

            /************ header ******************/
            if (headerOption === 'fixed') {
                $("body").addClass("page-header-fixed");
                $(".page-header").removeClass("navbar-static-top").addClass("navbar-fixed-top");
            } else {
                $("body").removeClass("page-header-fixed");
                $(".page-header").removeClass("navbar-fixed-top").addClass("navbar-static-top");
            }

            /************ sidebar *****************/
            if ($('body').hasClass('page-full-width') === false) {
                if (sidebarOption === 'fixed') {
                    $("body").addClass("sidemenu-container-fixed");
                    $("sidemenu").addClass("sidemenu-fixed");
                    $("sidemenu").removeClass("page-sidebar-menu-default");
                    Layout.initFixedSidebarHoverEffect();
                } else {
                    $("body").removeClass("sidemenu-container-fixed");
                    $("page-sidebar-menu").addClass("page-sidebar-menu-default");
                    $("page-sidebar-menu").removeClass("sidemenu-default");
                    $('.sidemenu').unbind('mouseenter').unbind('mouseleave');
                }
            }

            /********* top dropdown style ************/
            if (headerTopDropdownStyle === 'dark') {
                $(".top-menu > .navbar-nav > li.dropdown").addClass("dropdown-dark");
            } else {
                $(".top-menu > .navbar-nav > li.dropdown").removeClass("dropdown-dark");
            }

            /************* footer ****************/ 
            if (footerOption === 'fixed') {
                $("body").addClass("page-footer-fixed");
            } else {
                $("body").removeClass("page-footer-fixed");
            }

            /*********** sidebar style ***************/
            if (sidebarStyleOption === 'light') {
                $(".page-sidebar-menu").addClass("page-sidebar-menu-light");
            } else {
                $(".page-sidebar-menu").removeClass("page-sidebar-menu-light");
            }

            /********* sidebar menu ***********************/ 
            if (sidebarMenuOption === 'hover') {
                if (sidebarOption == 'fixed') {
                    $('.sidebar-menu-option', panel).val("accordion");
                    alert("Hover Sidebar Menu is not compatible with Fixed Sidebar Mode. Select Default Sidebar Mode Instead.");
                } else {
                    $(".sidemenu").addClass("sidemenu-hover-submenu");
                }
            } else {
                $(".sidemenu").removeClass("sidemenu-hover-submenu");
            }

            /**************** sidebar left right position setting **************/
            if (sidebarPosOption === 'right') {
                $("body").addClass("sidemenu-container-reversed");
                $('#frontend-link').tooltip('destroy').tooltip({
                    placement: 'left'
                });
            } else {
                $("body").removeClass("sidemenu-container-reversed");
                $('#frontend-link').tooltip('destroy').tooltip({
                    placement: 'right'
                });
            }

            Layout.fixContentHeight(); // fix content height            
            Layout.initFixedSidebar(); // reinitialize fixed sidebar
        };

        $(document).on('click', '.toggler', panel, function() {
            $('.toggler').hide();
            $('.toggler-close').show();
            $('.chatpane > .theme-options').show();
        });

        $(document).on('click', '.toggler-close', panel, function() {
            $('.toggler').show();
            $('.toggler-close').hide();
            $('.chatpane > .theme-options').hide();
        });

        /*************** spinner  button ******************/
        $(document).on('click', '.spinner button', function() {
            var btn = $(this);
            var input = btn.closest('.spinner').find('input');
            var step = 1;
            if (input.attr('step') != undefined) {
                step = parseInt(input.attr('step'),10);
            }
            if (btn.attr('data-dir') == 'up') {
                if (input.attr('max') == undefined || parseInt(input.val(),10) < parseInt(input.attr('max'),10)) {
                    input.val(parseInt(input.val(), 10) + step);
                } else {
                    btn.next("disabled", true);
                }
            } else {
                if (input.attr('min') == undefined || parseInt(input.val(),10) > parseInt(input.attr('min'),10)) {
                    input.val(parseInt(input.val(), 10) - step);
                } else {
                    btn.prev("disabled", true);
                }
            }
        });

        /*************** TO DO **********************/
        $(document).on('click', '.todo-check label', function() {
            $(this).parents('li').children('.todo-title').toggleClass('line-through');
        });
        $(document).on('click', '.todo-remove', function() {
            $(this).closest("li").remove();
            return false;
        });

        $(document).on('click', '.panel .tools .fa-times', function() {
            $(this).parents(".panel").parent().remove();
        });
        $('.tooltips').tooltip();

        // clickable row for email
        $(document).on('click', '.clickable-row', function() {
            window.document.location = $(this).data("link");
        });


        /************* collapse button in panel***************8*/
        $(document).on('click', '.card .tools .t-collapse', function() {
            var el = $(this).parents(".card").children(".card-body");
            if ($(this).hasClass("fa-chevron-down")) {
                $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
                el.slideUp(200);
            } else {
                $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
                el.slideDown(200);
            }
        });

        /**************** close button in panel *****************/
        $(document).on('click', '.card .tools .t-close', function() {
            $(this).parents(".card").parent().remove();
        });

        /****************** refresh button in panel *****************/
        $('.box-refresh').on('click', function(br) {
            br.preventDefault();
            $("<div class='refresh-block'><span class='refresh-loader'><i class='fa fa-spinner fa-spin'></i></span></div>").appendTo($(this).parents('.tools').parents('.card-head').parents('.card'));
            setTimeout(function() {
                $('.refresh-block').remove();
            }, 1000);
        });

        /***************** set default theme options **************************/

        if ($("body").hasClass("page-boxed")) {
            $('.layout-option', panel).val("boxed");
        }

        if ($("body").hasClass("sidemenu-container-fixed")) {
            $('.sidebar-option', panel).val("fixed");
        }

        if ($("body").hasClass("page-header-fixed")) {
            $('.page-header-option', panel).val("fixed");
        }

        if ($("body").hasClass("page-footer-fixed")) {
            $('.page-footer-option', panel).val("fixed");
        }

        if ($("body").hasClass("sidemenu-container-reversed")) {
            $('.sidebar-pos-option', panel).val("right");
        }

        if ($(".page-sidebar-menu").hasClass("page-sidebar-menu-light")) {
            $('.sidebar-style-option', panel).val("light");
        }

        if ($(".page-sidebar-menu").hasClass("page-sidebar-menu-hover-submenu")) {
            $('.sidebar-menu-option', panel).val("hover");
        }

        var sidebarOption = $('.sidebar-option', panel).val();
        var headerOption = $('.page-header-option', panel).val();
        var footerOption = $('.page-footer-option', panel).val();
        var sidebarPosOption = $('.sidebar-pos-option', panel).val();
        var sidebarStyleOption = $('.sidebar-style-option', panel).val();
        var sidebarMenuOption = $('.sidebar-menu-option', panel).val();

        $('.layout-option, .page-header-option, .page-header-top-dropdown-style-option, .sidebar-option, .page-footer-option, .sidebar-pos-option, .sidebar-style-option, .sidebar-menu-option', panel).change(setLayout);
    };

    /************ Reset theme layout ********************/
    var resetLayout = function() {
        $("body").
        removeClass("page-boxed").
        removeClass("page-footer-fixed").
        removeClass("sidemenu-container-fixed").
        removeClass("page-header-fixed").
        removeClass("sidemenu-container-reversed");

        $('.page-header > .page-header-inner').removeClass("container");

        if ($('.page-container').parent(".container").length === 1) {
            $('.page-container').insertAfter('body > .clearfix');
        }

        if ($('.page-footer > .container').length === 1) {
            $('.page-footer').html($('.page-footer > .container').html());
        } else if ($('.page-footer').parent(".container").length === 1) {
            $('.page-footer').insertAfter('.page-container');
            $('.scroll-to-top').insertAfter('.page-footer');
        }

        $(".top-menu > .navbar-nav > li.dropdown").removeClass("dropdown-dark");

        $('body > .container').remove();
    };


    // runs callback functions set by App.addResponsiveHandler().
    var _runResizeHandlers = function() {
        // reinitialize other subscribed elements
        for (var i = 0; i < resizeHandlers.length; i++) {
            var each = resizeHandlers[i];
            each.call();
        }
    };

    /********** handle the layout reinitialization on window resize ***********/
    var handleOnResize = function() {
        var resize;
        if (isIE8) {
            var currheight;
            $(window).resize(function() {
                if (currheight == document.documentElement.clientHeight) {
                    return; //quite event since only body resized not window.
                }
                if (resize) {
                    clearTimeout(resize);
                }
                resize = setTimeout(function() {
                    _runResizeHandlers();
                }, 50); // wait 50ms until window resize finishes.                
                currheight = document.documentElement.clientHeight; // store last body client height
            });
        } else {
            $(window).resize(function() {
                if (resize) {
                    clearTimeout(resize);
                }
                resize = setTimeout(function() {
                    _runResizeHandlers();
                }, 50); // wait 50ms until window resize finishes.
            });
        }
    };

    /*************** Handles Bootstrap switches in setting panel  ********/
    var handleBootstrapSwitch = function() {
        if (!$().bootstrapSwitch) {
            return;
        }
        $('.make-switch').bootstrapSwitch();
    };

    /*************** Handles Bootstrap Tabs **********************/
    var handleTabs = function() {
        //activate tab if tab id provided in the URL
        if (encodeURI(location.hash)) {
            var tabid = encodeURI(location.hash.substr(1));
            $('a[href="#' + tabid + '"]').parents('.tab-pane:hidden').each(function() {
                var tabid = $(this).attr("id");
                $('a[href="#' + tabid + '"]').click();
            });
            $('a[href="#' + tabid + '"]').click();
        }

        if ($().tabdrop) {
            $('.tabbable-tabdrop .nav-pills, .tabbable-tabdrop .nav-tabs').tabdrop({
                text: '<i class="fa fa-ellipsis-v"></i>&nbsp;<i class="fa fa-angle-down"></i>'
            });
        }
    };

    /************* Handles Bootstrap Dropdowns  ********************/
    var handleDropdowns = function() {
        /*
          Hold dropdown on click  
        */
        $('body').on('click', '.dropdown-menu.hold-on-click', function(e) {
            e.stopPropagation();
        });
    };

    /************** Handles counterup plugin wrapper ****************/
    var handleCounterup = function() {
        if (!$().counterUp) {
            return;
        }

        $("[data-counter='counterup']").counterUp({
            delay: 10,
            time: 1000
        });
    };

    // Fix input placeholder issue for IE8 and IE9
    var handleFixInputPlaceholderForIE = function() {
        //fix html5 placeholder attribute for ie7 & ie8
        if (isIE8 || isIE9) { // ie8 & ie9
            // this is html5 placeholder fix for inputs, inputs with placeholder-no-fix class will be skipped(e.g: we need this for password fields)
            $('input[placeholder]:not(.placeholder-no-fix), textarea[placeholder]:not(.placeholder-no-fix)').each(function() {
                var input = $(this);

                if (input.val() === '' && input.attr("placeholder") !== '') {
                    input.addClass("placeholder").val(input.attr('placeholder'));
                }

                input.focus(function() {
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });

                input.blur(function() {
                    if (input.val() === '' || input.val() == input.attr('placeholder')) {
                        input.val(input.attr('placeholder'));
                    }
                });
            });
        }
    };

    // Handle Select2 Dropdowns
    var handleSelect2 = function() {
        if ($().select2) {
            $.fn.select2.defaults.set("theme", "bootstrap");
            $('.select2me').select2({
                placeholder: "Select",
                width: 'auto',
                allowClear: true
            });
        }
    };

    // handle group element heights
    var handleHeight = function() {
        $('[data-auto-height]').each(function() {
            var parent = $(this);
            var items = $('[data-height]', parent);
            var height = 0;
            var mode = parent.attr('data-mode');
			var data_offset = parent.attr('data-offset') ? parent.attr('data-offset') : 0;
            var offset = parseInt(data_offset,10);

            items.each(function() {
                if ($(this).attr('data-height') == "height") {
                    $(this).css('height', '');
                } else {
                    $(this).css('min-height', '');
                }

                var height_ = (mode == 'base-height' ? $(this).outerHeight() : $(this).outerHeight(true));
                if (height_ > height) {
                    height = height_;
                }
            });

            height = height + offset;

            items.each(function() {
                if ($(this).attr('data-height') == "height") {
                    $(this).css('height', height);
                } else {
                    $(this).css('min-height', height);
                }
            });

            if (parent.attr('data-related')) {
                $(parent.attr('data-related')).css('height', parent.height());
            }
        });
    }

    // Handles quick sidebar toggler
    var handleQuickSidebarToggler = function() {
        // close sidebar using button click
        $(document).on('click', '.dropdown-quick-sidebar-toggler a', function(e) {
            $('body').toggleClass('chat-sidebar-open');
        });
        // close sidebar when click outside box
        $(document).on('click', '.page-content', function(e) {
        	if($("body").hasClass("chat-sidebar-open")){
        			$('body').toggleClass('chat-sidebar-open');
        	}
        });
        // close sidebar using esc key
        $( document ).on( 'keydown', function ( e ) {
            if ( e.keyCode === 27 && $("body").hasClass("chat-sidebar-open")) { // ESC
            	$('body').toggleClass('chat-sidebar-open');
            }
        });
    };

    /******* Handle quick Chat sidebar ************/

    var handleQuickSidebarChat = function() {
        var wrapper = $('.chat-sidebar-container');
        var wrapperChat = wrapper.find('.chat-sidebar-chat');

        var initChatSlimScroll = function() {
            var chatUsers = wrapper.find('.chat-sidebar-chat-users');
            var chatUsersHeight;

            chatUsersHeight = wrapper.height() - wrapper.find('.nav-tabs').outerHeight(true);

            // chat user list 
            chatUsers.css("height", wrapper.height() + "px");
            chatUsers.css("overflow", "auto");
            chatUsers.attr("data-height", chatUsersHeight);

            var chatMessages = wrapperChat.find('.chat-sidebar-chat-user-messages');
            var chatMessagesHeight = chatUsersHeight - wrapperChat.find('.chat-sidebar-chat-user-form').outerHeight(true);
            chatMessagesHeight -= wrapperChat.find(".page-quick-sidemenu").outerHeight(true);
            // user chat messages 
            chatMessages.attr("data-height", chatMessagesHeight);
            chatMessages.css("height", chatMessagesHeight);
            chatMessages.css("overflow-y", "auto");
        };

        initChatSlimScroll();
        App.addResizeHandler(initChatSlimScroll); // reinitialize on window resize

        wrapper.find('.chat-sidebar-chat-users .media-list > .media').on('click', function() {
            wrapperChat.addClass("chat-sidebar-content-item-shown");
            $(".chat-sidebar-item").animate({
                scrollTop: $('.chat-sidebar-item').height()
            }, 1000);
        });


        wrapper.find('.chat-sidebar-chat-user .chat-sidebar-back-to-list').on('click', function() {
            wrapperChat.removeClass("chat-sidebar-content-item-shown");
        });


        /******* Manage Chat massage ************/

        var handleChatMessagePost = function(e) {
            e.preventDefault();

            var chatContainer = wrapperChat.find(".chat-sidebar-chat-user-messages");
            var input = wrapperChat.find('.chat-sidebar-chat-user-form .form-control');

            var text = input.val();
            if (text.length === 0) {
                return;
            }

            var preparePost = function(dir, time, name, avatar, message) {
                var tpl = '';
                tpl += '<div class="post ' + dir + '">';
                tpl += '<img class="avatar" alt="" src="' + Layout.getLayoutImgPath() + avatar + '.jpg"/>';
                tpl += '<div class="message">';
                tpl += '<span class="arrow"></span>';
                tpl += '<a href="#" class="name">' + name + '</a>&nbsp;';
                tpl += '<span class="datetime">' + time + '</span>';
                tpl += '<span class="body body-'+dir+'">';
                tpl += message;
                tpl += '</span>';
                tpl += '</div>';
                tpl += '</div>';
                $(".chat-sidebar-chat-user-messages").animate({
                    //scrollTop: $('.chat-sidebar-chat-user-messages').height()
                scrollTop: $(document).height()
                }, 1000);
                return tpl;
            };

            // handle post
            var time = new Date();
            var message = preparePost('out', (time.getHours() + ':' + time.getMinutes()), "Kiran Patel", 'dp', text);
            message = $(message);
            chatContainer.append(message);


            input.val("");

            // simulate reply
            setTimeout(function() {
                var time = new Date();
                var message = preparePost('in', (time.getHours() + ':' + time.getMinutes()), "Johnson Smith", 'doc/doc5', 'Lorem ipsum doloriam nibh...');
                message = $(message);
                chatContainer.append(message);
            }, 2000);
        };

        wrapperChat.find('.chat-sidebar-chat-user-form .btn').on('click', handleChatMessagePost);
        wrapperChat.find('.chat-sidebar-chat-user-form .form-control').on('keypress', function(e) {
            if (e.which == 13) {
                handleChatMessagePost(e);
                return false;
            }
        });
    };

    /********Sidebar slim-menu*********/
    var handleslimscroll_menu = function() {
    	$(".slimscroll-style").slimscroll({
            height: $( window ).height() - 90,
            position: "right",
            size: "5px",
            color: "#9ea5ab",
            wheelStep: 5
        });
    	$(".small-slimscroll-style").slimscroll({
            height: "260px",
            position: "right",
            size: "5px",
            color: "#9ea5ab",
            wheelStep: 5
        });
    };
    
    handleChatScrollbar = function() {
        var t = $(".chat-sidebar-chat"),
            i = function() {
                var i, a = t.find(".chat-sidebar-item"),
                    e = $(".chat-sidebar-chat-users").attr("data-height");
                i = $(".chat-sidebar-chat-users").attr("data-height") - 80 - t.find(".nav-justified > .nav-tabs").outerHeight(), a.attr("data-height", i), a.css("height", e + "px"), a.css("overflow-y", "auto")
            };
        i(), App.addResizeHandler(i)
    };

    // Handles quick sidebar settings
    var handleQuickSidebarSettings = function() {
        var wrapper = $('.chat-sidebar-container');

        var initSettingsSlimScroll = function() {
            var settingsList = wrapper.find('.chat-sidebar-settings-list');
            var settingsListHeight;

            settingsListHeight = wrapper.height() - 80 - wrapper.find('.nav-justified > .nav-tabs').outerHeight();

            // alerts list 
            settingsList.attr("data-height", settingsListHeight);
            settingsList.css("height", wrapper.height() + "px");
            settingsList.css("overflow-y", "auto");
        };

        initSettingsSlimScroll();
        App.addResizeHandler(initSettingsSlimScroll); // reinitialize on window resize
    };



    //* END:CORE HANDLERS *//

    return {

        //main function to initiate the theme
        init: function() {

            //Core handlers
            handleInit(); // initialize core variables
        //    disableInspect();
            handleTheme();
            handleOnResize(); // set and handle responsive    
            handleColorSetting();
            handleLanguage();
            handleHoverSidemenu();
            
            //UI Component handlers     
            handleBootstrapSwitch(); // handle bootstrap switch plugin
            handleSelect2(); // handle custom Select2 dropdowns
            handleDropdowns(); // handle dropdowns
            handleTabs(); // handle tabs
            handleCounterup(); // handle counterup instances

            handleQuickSidebarToggler(); // handles quick sidebar's toggler
            handleQuickSidebarChat(); // handles quick sidebar's chats
            handleQuickSidebarSettings(); // handles quick sidebar's setting
            handleChatScrollbar();

            handleslimscroll_menu();
            
            //Handle group element heights
            this.addResizeHandler(handleHeight); // handle auto calculating height on window resize

            handleFixInputPlaceholderForIE(); //IE8 & IE9 input placeholder issue fix
        },

        //public function to add callback a function which will be called on window resize
        addResizeHandler: function(func) {
            resizeHandlers.push(func);
        },

        //public functon to call _runresizeHandlers
        runResizeHandlers: function() {
            _runResizeHandlers();
        },

        // wrApper function to scroll(focus) to an element
        scrollTo: function(el, offeset) {
            var pos = (el && el.length > 0) ? el.offset().top : 0;

            if (el) {
                if ($('body').hasClass('page-header-fixed')) {
                    pos = pos - $('.page-header').height();
                } else if ($('body').hasClass('page-header-top-fixed')) {
                    pos = pos - $('.page-header-top').height();
                } else if ($('body').hasClass('page-header-menu-fixed')) {
                    pos = pos - $('.page-header-menu').height();
                }
                pos = pos + (offeset ? offeset : -1 * el.height());
            }

            $('html,body').animate({
                scrollTop: pos
            }, 'slow');
        },
        // function to scroll to the top
        scrollTop: function() {
            App.scrollTo();
        },

        startPageLoading: function(options) {
            if (options && options.animate) {
                $('.page-spinner-bar').remove();
                $('body').append('<div class="page-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
            } else {
                $('.page-loading').remove();
                $('body').append('<div class="page-loading"><img src="' + this.getGlobalImgPath() + 'loading-spinner-grey.gif"/>&nbsp;&nbsp;<span>' + (options && options.message ? options.message : 'Loading...') + '</span></div>');
            }
        },

        stopPageLoading: function() {
            $('.page-loading, .page-spinner-bar').remove();
        },

        //public helper function to get actual input value(used in IE9 and IE8 due to placeholder attribute not supported)
        getActualVal: function(el) {
            el = $(el);
            if (el.val() === el.attr("placeholder")) {
                return "";
            }
            return el.val();
        },

        //public function to get a paremeter by name from URL
        getURLParameter: function(paramName) {
            var searchString = window.location.search.substring(1),
                i, val, params = searchString.split("&");

            for (i = 0; i < params.length; i++) {
                val = params[i].split("=");
                if (val[0] == paramName) {
                    return unescape(val[1]);
                }
            }
            return null;
        },

        getViewPort: function() {
            var e = window,
                a = 'inner';
            if (!('innerWidth' in window)) {
                a = 'client';
                e = document.documentElement || document.body;
            }

            return {
                width: e[a + 'Width'],
                height: e[a + 'Height']
            };
        },

        getUniqueID: function(prefix) {
            return 'prefix_' + Math.floor(Math.random() * (new Date()).getTime());
        },

        // check IE8 mode
        isIE8: function() {
            return isIE8;
        },

        // check IE9 mode
        isIE9: function() {
            return isIE9;
        },

        getAssetsPath: function() {
            return assetsPath;
        },

        setAssetsPath: function(path) {
            assetsPath = path;
        },

        setGlobalImgPath: function(path) {
            globalImgPath = path;
        },

        getGlobalImgPath: function() {
            return assetsPath + globalImgPath;
        },

        getGlobalCssPath: function() {
            return assetsPath + globalCssPath;
        },

        getResponsiveBreakpoint: function(size) {
            // bootstrap responsive breakpoints
            var sizes = {
                'xs': 480, // extra small
                'sm': 768, // small
                'md': 992, // medium
                'lg': 1200 // large
            };

            return sizes[size] ? sizes[size] : 0;
        }
    };

}();

jQuery(document).ready(function() {
    App.init(); // init core componets
    $(".chat-sidebar-chat-user-messages").animate({
        scrollTop: $(document).height()
    }, 1000);
});
/**
 *  Document   : theme-color.js
 *  Author     : redstar
 *  Description: Core script to handle the entire theme and core functions
 *
 **/

jQuery(document).ready(function() {
   jQuery(document).on("click",".sidebar-theme a",function() {
	   var sidebar_color = jQuery(this).attr('data-theme')+"-sidebar-color";
	   jQuery( "body" ).removeClass( "white-sidebar-color dark-sidebar-color blue-sidebar-color indigo-sidebar-color green-sidebar-color red-sidebar-color cyan-sidebar-color" );
	   jQuery( "body" ).addClass( sidebar_color );
   });
   jQuery(document).on("click",".logo-theme a",function() {
	   var logo_color = jQuery(this).attr('data-theme');
	   jQuery( "body" ).removeClass( "logo-white logo-dark logo-blue logo-indigo logo-red logo-cyan logo-green" );
	   jQuery( "body" ).addClass( logo_color );
   });
   jQuery(document).on("click",".header-theme a",function() {
	   var header_color = jQuery(this).attr('data-theme');
	   jQuery( "body" ).removeClass( "header-white header-dark header-blue header-indigo header-red header-cyan header-green" );
	   jQuery( "body" ).addClass( header_color );
   });
});


/**
 * material-design-lite - Material Design Components in CSS, JS and HTML
 * @version v1.3.0
 * @license Apache-2.0
 * @copyright 2015 Google, Inc.
 * @link https://github.com/google/material-design-lite
 */
!function(){"use strict";function e(e,t){if(e){if(t.element_.classList.contains(t.CssClasses_.MDL_JS_RIPPLE_EFFECT)){var s=document.createElement("span");s.classList.add(t.CssClasses_.MDL_RIPPLE_CONTAINER),s.classList.add(t.CssClasses_.MDL_JS_RIPPLE_EFFECT);var i=document.createElement("span");i.classList.add(t.CssClasses_.MDL_RIPPLE),s.appendChild(i),e.appendChild(s)}e.addEventListener("click",function(s){if("#"===e.getAttribute("href").charAt(0)){s.preventDefault();var i=e.href.split("#")[1],n=t.element_.querySelector("#"+i);t.resetTabState_(),t.resetPanelState_(),e.classList.add(t.CssClasses_.ACTIVE_CLASS),n.classList.add(t.CssClasses_.ACTIVE_CLASS)}})}}function t(e,t,s,i){function n(){var n=e.href.split("#")[1],a=i.content_.querySelector("#"+n);i.resetTabState_(t),i.resetPanelState_(s),e.classList.add(i.CssClasses_.IS_ACTIVE),a.classList.add(i.CssClasses_.IS_ACTIVE)}if(i.tabBar_.classList.contains(i.CssClasses_.JS_RIPPLE_EFFECT)){var a=document.createElement("span");a.classList.add(i.CssClasses_.RIPPLE_CONTAINER),a.classList.add(i.CssClasses_.JS_RIPPLE_EFFECT);var l=document.createElement("span");l.classList.add(i.CssClasses_.RIPPLE),a.appendChild(l),e.appendChild(a)}i.tabBar_.classList.contains(i.CssClasses_.TAB_MANUAL_SWITCH)||e.addEventListener("click",function(t){"#"===e.getAttribute("href").charAt(0)&&(t.preventDefault(),n())}),e.show=n}var s={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};s=function(){function e(e,t){for(var s=0;s<c.length;s++)if(c[s].className===e)return"undefined"!=typeof t&&(c[s]=t),c[s];return!1}function t(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function s(e,s){var i=t(e);return i.indexOf(s)!==-1}function i(e,t,s){if("CustomEvent"in window&&"function"==typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:s});var i=document.createEvent("Events");return i.initEvent(e,t,s),i}function n(t,s){if("undefined"==typeof t&&"undefined"==typeof s)for(var i=0;i<c.length;i++)n(c[i].className,c[i].cssClass);else{var l=t;if("undefined"==typeof s){var o=e(l);o&&(s=o.cssClass)}for(var r=document.querySelectorAll("."+s),_=0;_<r.length;_++)a(r[_],l)}}function a(n,a){if(!("object"==typeof n&&n instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var l=i("mdl-componentupgrading",!0,!0);if(n.dispatchEvent(l),!l.defaultPrevented){var o=t(n),r=[];if(a)s(n,a)||r.push(e(a));else{var _=n.classList;c.forEach(function(e){_.contains(e.cssClass)&&r.indexOf(e)===-1&&!s(n,e.className)&&r.push(e)})}for(var d,h=0,u=r.length;h<u;h++){if(d=r[h],!d)throw new Error("Unable to find a registered component for the given class.");o.push(d.className),n.setAttribute("data-upgraded",o.join(","));var E=new d.classConstructor(n);E[C]=d,p.push(E);for(var m=0,L=d.callbacks.length;m<L;m++)d.callbacks[m](n);d.widget&&(n[d.className]=E);var I=i("mdl-componentupgraded",!0,!1);n.dispatchEvent(I)}}}function l(e){Array.isArray(e)||(e=e instanceof Element?[e]:Array.prototype.slice.call(e));for(var t,s=0,i=e.length;s<i;s++)t=e[s],t instanceof HTMLElement&&(a(t),t.children.length>0&&l(t.children))}function o(t){var s="undefined"==typeof t.widget&&"undefined"==typeof t.widget,i=!0;s||(i=t.widget||t.widget);var n={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:i,callbacks:[]};if(c.forEach(function(e){if(e.cssClass===n.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===n.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(C))throw new Error("MDL component classes must not have "+C+" defined as a property.");var a=e(t.classAsString,n);a||c.push(n)}function r(t,s){var i=e(t);i&&i.callbacks.push(s)}function _(){for(var e=0;e<c.length;e++)n(c[e].className)}function d(e){if(e){var t=p.indexOf(e);p.splice(t,1);var s=e.element_.getAttribute("data-upgraded").split(","),n=s.indexOf(e[C].classAsString);s.splice(n,1),e.element_.setAttribute("data-upgraded",s.join(","));var a=i("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(a)}}function h(e){var t=function(e){p.filter(function(t){return t.element_===e}).forEach(d)};if(e instanceof Array||e instanceof NodeList)for(var s=0;s<e.length;s++)t(e[s]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");t(e)}}var c=[],p=[],C="mdlComponentConfigInternal_";return{upgradeDom:n,upgradeElement:a,upgradeElements:l,upgradeAllRegistered:_,registerUpgradedCallback:r,register:o,downgradeElements:h}}(),s.ComponentConfigPublic,s.ComponentConfig,s.Component,s.upgradeDom=s.upgradeDom,s.upgradeElement=s.upgradeElement,s.upgradeElements=s.upgradeElements,s.upgradeAllRegistered=s.upgradeAllRegistered,s.registerUpgradedCallback=s.registerUpgradedCallback,s.register=s.register,s.downgradeElements=s.downgradeElements,window.componentHandler=s,window.componentHandler=s,window.addEventListener("load",function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),s.upgradeAllRegistered()):(s.upgradeElement=function(){},s.register=function(){})}),Date.now||(Date.now=function(){return(new Date).getTime()},Date.now=Date.now);for(var i=["webkit","moz"],n=0;n<i.length&&!window.requestAnimationFrame;++n){var a=i[n];window.requestAnimationFrame=window[a+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a+"CancelAnimationFrame"]||window[a+"CancelRequestAnimationFrame"],window.requestAnimationFrame=window.requestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var l=0;window.requestAnimationFrame=function(e){var t=Date.now(),s=Math.max(l+16,t);return setTimeout(function(){e(l=s)},s-t)},window.cancelAnimationFrame=clearTimeout,window.requestAnimationFrame=window.requestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame}var o=function(e){this.element_=e,this.init()};window.MaterialButton=o,o.prototype.Constant_={},o.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},o.prototype.blurHandler_=function(e){e&&this.element_.blur()},o.prototype.disable=function(){this.element_.disabled=!0},o.prototype.disable=o.prototype.disable,o.prototype.enable=function(){this.element_.disabled=!1},o.prototype.enable=o.prototype.enable,o.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},s.register({constructor:o,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0});var r=function(e){this.element_=e,this.init()};window.MaterialCheckbox=r,r.prototype.Constant_={TINY_TIMEOUT:.001},r.prototype.CssClasses_={INPUT:"mdl-checkbox__input",BOX_OUTLINE:"mdl-checkbox__box-outline",FOCUS_HELPER:"mdl-checkbox__focus-helper",TICK_OUTLINE:"mdl-checkbox__tick-outline",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-checkbox__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked",IS_UPGRADED:"is-upgraded"},r.prototype.onChange_=function(e){this.updateClasses_()},r.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},r.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},r.prototype.onMouseUp_=function(e){this.blur_()},r.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},r.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},r.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},r.prototype.checkToggleState=r.prototype.checkToggleState,r.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},r.prototype.checkDisabled=r.prototype.checkDisabled,r.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},r.prototype.disable=r.prototype.disable,r.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},r.prototype.enable=r.prototype.enable,r.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_()},r.prototype.check=r.prototype.check,r.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_()},r.prototype.uncheck=r.prototype.uncheck,r.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("span");e.classList.add(this.CssClasses_.BOX_OUTLINE);var t=document.createElement("span");t.classList.add(this.CssClasses_.FOCUS_HELPER);var s=document.createElement("span");if(s.classList.add(this.CssClasses_.TICK_OUTLINE),e.appendChild(s),this.element_.appendChild(t),this.element_.appendChild(e),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(i),this.element_.appendChild(this.rippleContainerElement_)}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementMouseUp),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:r,classAsString:"MaterialCheckbox",cssClass:"mdl-js-checkbox",widget:!0});var _=function(e){this.element_=e,this.init()};window.MaterialIconToggle=_,_.prototype.Constant_={TINY_TIMEOUT:.001},_.prototype.CssClasses_={INPUT:"mdl-icon-toggle__input",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-icon-toggle__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},_.prototype.onChange_=function(e){this.updateClasses_()},_.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},_.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},_.prototype.onMouseUp_=function(e){this.blur_()},_.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},_.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},_.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},_.prototype.checkToggleState=_.prototype.checkToggleState,_.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},_.prototype.checkDisabled=_.prototype.checkDisabled,_.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},_.prototype.disable=_.prototype.disable,_.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},_.prototype.enable=_.prototype.enable,_.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_()},_.prototype.check=_.prototype.check,_.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_()},_.prototype.uncheck=_.prototype.uncheck,_.prototype.init=function(){if(this.element_){if(this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(e),this.element_.appendChild(this.rippleContainerElement_)}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementOnMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementOnMouseUp),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},s.register({constructor:_,classAsString:"MaterialIconToggle",cssClass:"mdl-js-icon-toggle",widget:!0});var d=function(e){this.element_=e,this.init()};window.MaterialMenu=d,d.prototype.Constant_={TRANSITION_DURATION_SECONDS:.3,TRANSITION_DURATION_FRACTION:.8,CLOSE_TIMEOUT:150},d.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32,UP_ARROW:38,DOWN_ARROW:40},d.prototype.CssClasses_={CONTAINER:"mdl-menu__container",OUTLINE:"mdl-menu__outline",ITEM:"mdl-menu__item",ITEM_RIPPLE_CONTAINER:"mdl-menu__item-ripple-container",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_UPGRADED:"is-upgraded",IS_VISIBLE:"is-visible",IS_ANIMATING:"is-animating",BOTTOM_LEFT:"mdl-menu--bottom-left",BOTTOM_RIGHT:"mdl-menu--bottom-right",TOP_LEFT:"mdl-menu--top-left",TOP_RIGHT:"mdl-menu--top-right",UNALIGNED:"mdl-menu--unaligned"},d.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_),this.container_=e;var t=document.createElement("div");t.classList.add(this.CssClasses_.OUTLINE),this.outline_=t,e.insertBefore(t,this.element_);var s=this.element_.getAttribute("for")||this.element_.getAttribute("data-mdl-for"),i=null;s&&(i=document.getElementById(s),i&&(this.forElement_=i,i.addEventListener("click",this.handleForClick_.bind(this)),i.addEventListener("keydown",this.handleForKeyboardEvent_.bind(this))));var n=this.element_.querySelectorAll("."+this.CssClasses_.ITEM);this.boundItemKeydown_=this.handleItemKeyboardEvent_.bind(this),this.boundItemClick_=this.handleItemClick_.bind(this);for(var a=0;a<n.length;a++)n[a].addEventListener("click",this.boundItemClick_),n[a].tabIndex="-1",n[a].addEventListener("keydown",this.boundItemKeydown_);if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT))for(this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),a=0;a<n.length;a++){var l=n[a],o=document.createElement("span");o.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);var r=document.createElement("span");r.classList.add(this.CssClasses_.RIPPLE),o.appendChild(r),l.appendChild(o),l.classList.add(this.CssClasses_.RIPPLE_EFFECT)}this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT),this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT),this.element_.classList.contains(this.CssClasses_.TOP_LEFT)&&this.outline_.classList.add(this.CssClasses_.TOP_LEFT),this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)&&this.outline_.classList.add(this.CssClasses_.TOP_RIGHT),this.element_.classList.contains(this.CssClasses_.UNALIGNED)&&this.outline_.classList.add(this.CssClasses_.UNALIGNED),e.classList.add(this.CssClasses_.IS_UPGRADED)}},d.prototype.handleForClick_=function(e){if(this.element_&&this.forElement_){var t=this.forElement_.getBoundingClientRect(),s=this.forElement_.parentElement.getBoundingClientRect();this.element_.classList.contains(this.CssClasses_.UNALIGNED)||(this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?(this.container_.style.right=s.right-t.right+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"):this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.bottom=s.bottom-t.top+"px"):this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(this.container_.style.right=s.right-t.right+"px",this.container_.style.bottom=s.bottom-t.top+"px"):(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"))}this.toggle(e)},d.prototype.handleForKeyboardEvent_=function(e){if(this.element_&&this.container_&&this.forElement_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)&&(e.keyCode===this.Keycodes_.UP_ARROW?(e.preventDefault(),t[t.length-1].focus()):e.keyCode===this.Keycodes_.DOWN_ARROW&&(e.preventDefault(),t[0].focus()))}},d.prototype.handleItemKeyboardEvent_=function(e){if(this.element_&&this.container_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");if(t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)){var s=Array.prototype.slice.call(t).indexOf(e.target);if(e.keyCode===this.Keycodes_.UP_ARROW)e.preventDefault(),s>0?t[s-1].focus():t[t.length-1].focus();else if(e.keyCode===this.Keycodes_.DOWN_ARROW)e.preventDefault(),t.length>s+1?t[s+1].focus():t[0].focus();else if(e.keyCode===this.Keycodes_.SPACE||e.keyCode===this.Keycodes_.ENTER){e.preventDefault();var i=new MouseEvent("mousedown");e.target.dispatchEvent(i),i=new MouseEvent("mouseup"),e.target.dispatchEvent(i),e.target.click()}else e.keyCode===this.Keycodes_.ESCAPE&&(e.preventDefault(),this.hide())}}},d.prototype.handleItemClick_=function(e){e.target.hasAttribute("disabled")?e.stopPropagation():(this.closing_=!0,window.setTimeout(function(e){this.hide(),this.closing_=!1}.bind(this),this.Constant_.CLOSE_TIMEOUT))},d.prototype.applyClip_=function(e,t){this.element_.classList.contains(this.CssClasses_.UNALIGNED)?this.element_.style.clip="":this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?this.element_.style.clip="rect(0 "+t+"px 0 "+t+"px)":this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?this.element_.style.clip="rect("+e+"px 0 "+e+"px 0)":this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?this.element_.style.clip="rect("+e+"px "+t+"px "+e+"px "+t+"px)":this.element_.style.clip=""},d.prototype.removeAnimationEndListener_=function(e){e.target.classList.remove(d.prototype.CssClasses_.IS_ANIMATING)},d.prototype.addAnimationEndListener_=function(){this.element_.addEventListener("transitionend",this.removeAnimationEndListener_),this.element_.addEventListener("webkitTransitionEnd",this.removeAnimationEndListener_)},d.prototype.show=function(e){if(this.element_&&this.container_&&this.outline_){var t=this.element_.getBoundingClientRect().height,s=this.element_.getBoundingClientRect().width;this.container_.style.width=s+"px",this.container_.style.height=t+"px",this.outline_.style.width=s+"px",this.outline_.style.height=t+"px";for(var i=this.Constant_.TRANSITION_DURATION_SECONDS*this.Constant_.TRANSITION_DURATION_FRACTION,n=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),a=0;a<n.length;a++){var l=null;l=this.element_.classList.contains(this.CssClasses_.TOP_LEFT)||this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(t-n[a].offsetTop-n[a].offsetHeight)/t*i+"s":n[a].offsetTop/t*i+"s",n[a].style.transitionDelay=l}this.applyClip_(t,s),window.requestAnimationFrame(function(){this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.element_.style.clip="rect(0 "+s+"px "+t+"px 0)",this.container_.classList.add(this.CssClasses_.IS_VISIBLE)}.bind(this)),this.addAnimationEndListener_();var o=function(t){t===e||this.closing_||t.target.parentNode===this.element_||(document.removeEventListener("click",o),this.hide())}.bind(this);document.addEventListener("click",o)}},d.prototype.show=d.prototype.show,d.prototype.hide=function(){if(this.element_&&this.container_&&this.outline_){for(var e=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),t=0;t<e.length;t++)e[t].style.removeProperty("transition-delay");var s=this.element_.getBoundingClientRect(),i=s.height,n=s.width;this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.applyClip_(i,n),this.container_.classList.remove(this.CssClasses_.IS_VISIBLE),this.addAnimationEndListener_()}},d.prototype.hide=d.prototype.hide,d.prototype.toggle=function(e){this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)?this.hide():this.show(e)},d.prototype.toggle=d.prototype.toggle,s.register({constructor:d,classAsString:"MaterialMenu",cssClass:"mdl-js-menu",widget:!0});var h=function(e){this.element_=e,this.init()};window.MaterialProgress=h,h.prototype.Constant_={},h.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},h.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},h.prototype.setProgress=h.prototype.setProgress,h.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},h.prototype.setBuffer=h.prototype.setBuffer,h.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,e=document.createElement("div"),e.className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,e=document.createElement("div"),e.className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},s.register({constructor:h,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0});var c=function(e){this.element_=e,this.init()};window.MaterialRadio=c,c.prototype.Constant_={TINY_TIMEOUT:.001},c.prototype.CssClasses_={IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked",IS_UPGRADED:"is-upgraded",JS_RADIO:"mdl-js-radio",RADIO_BTN:"mdl-radio__button",RADIO_OUTER_CIRCLE:"mdl-radio__outer-circle",RADIO_INNER_CIRCLE:"mdl-radio__inner-circle",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-radio__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple"},c.prototype.onChange_=function(e){for(var t=document.getElementsByClassName(this.CssClasses_.JS_RADIO),s=0;s<t.length;s++){var i=t[s].querySelector("."+this.CssClasses_.RADIO_BTN);i.getAttribute("name")===this.btnElement_.getAttribute("name")&&"undefined"!=typeof t[s].MaterialRadio&&t[s].MaterialRadio.updateClasses_()}},c.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},c.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},c.prototype.onMouseup_=function(e){this.blur_()},c.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},c.prototype.blur_=function(){window.setTimeout(function(){this.btnElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},c.prototype.checkDisabled=function(){this.btnElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},c.prototype.checkDisabled=c.prototype.checkDisabled,c.prototype.checkToggleState=function(){this.btnElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},c.prototype.checkToggleState=c.prototype.checkToggleState,c.prototype.disable=function(){this.btnElement_.disabled=!0,this.updateClasses_()},c.prototype.disable=c.prototype.disable,c.prototype.enable=function(){this.btnElement_.disabled=!1,this.updateClasses_()},c.prototype.enable=c.prototype.enable,c.prototype.check=function(){this.btnElement_.checked=!0,this.onChange_(null)},c.prototype.check=c.prototype.check,c.prototype.uncheck=function(){this.btnElement_.checked=!1,this.onChange_(null)},c.prototype.uncheck=c.prototype.uncheck,c.prototype.init=function(){if(this.element_){this.btnElement_=this.element_.querySelector("."+this.CssClasses_.RADIO_BTN),this.boundChangeHandler_=this.onChange_.bind(this),this.boundFocusHandler_=this.onChange_.bind(this),this.boundBlurHandler_=this.onBlur_.bind(this),this.boundMouseUpHandler_=this.onMouseup_.bind(this);var e=document.createElement("span");e.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);var t=document.createElement("span");t.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE),this.element_.appendChild(e),this.element_.appendChild(t);var s;if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),s=document.createElement("span"),s.classList.add(this.CssClasses_.RIPPLE_CONTAINER),s.classList.add(this.CssClasses_.RIPPLE_EFFECT),s.classList.add(this.CssClasses_.RIPPLE_CENTER),s.addEventListener("mouseup",this.boundMouseUpHandler_);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),s.appendChild(i),this.element_.appendChild(s)}this.btnElement_.addEventListener("change",this.boundChangeHandler_),this.btnElement_.addEventListener("focus",this.boundFocusHandler_),this.btnElement_.addEventListener("blur",this.boundBlurHandler_),this.element_.addEventListener("mouseup",this.boundMouseUpHandler_),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:c,classAsString:"MaterialRadio",cssClass:"mdl-js-radio",widget:!0});var p=function(e){this.element_=e,this.isIE_=window.navigator.msPointerEnabled,this.init()};window.MaterialSlider=p,p.prototype.Constant_={},p.prototype.CssClasses_={IE_CONTAINER:"mdl-slider__ie-container",SLIDER_CONTAINER:"mdl-slider__container",BACKGROUND_FLEX:"mdl-slider__background-flex",BACKGROUND_LOWER:"mdl-slider__background-lower",BACKGROUND_UPPER:"mdl-slider__background-upper",IS_LOWEST_VALUE:"is-lowest-value",IS_UPGRADED:"is-upgraded"},p.prototype.onInput_=function(e){this.updateValueStyles_()},p.prototype.onChange_=function(e){this.updateValueStyles_()},p.prototype.onMouseUp_=function(e){e.target.blur()},p.prototype.onContainerMouseDown_=function(e){if(e.target===this.element_.parentElement){e.preventDefault();var t=new MouseEvent("mousedown",{target:e.target,buttons:e.buttons,clientX:e.clientX,clientY:this.element_.getBoundingClientRect().y});this.element_.dispatchEvent(t)}},p.prototype.updateValueStyles_=function(){var e=(this.element_.value-this.element_.min)/(this.element_.max-this.element_.min);0===e?this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE):this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE),this.isIE_||(this.backgroundLower_.style.flex=e,this.backgroundLower_.style.webkitFlex=e,this.backgroundUpper_.style.flex=1-e,this.backgroundUpper_.style.webkitFlex=1-e)},p.prototype.disable=function(){this.element_.disabled=!0},p.prototype.disable=p.prototype.disable,p.prototype.enable=function(){this.element_.disabled=!1},p.prototype.enable=p.prototype.enable,p.prototype.change=function(e){"undefined"!=typeof e&&(this.element_.value=e),this.updateValueStyles_()},p.prototype.change=p.prototype.change,p.prototype.init=function(){if(this.element_){if(this.isIE_){var e=document.createElement("div");e.classList.add(this.CssClasses_.IE_CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_)}else{var t=document.createElement("div");t.classList.add(this.CssClasses_.SLIDER_CONTAINER),this.element_.parentElement.insertBefore(t,this.element_),this.element_.parentElement.removeChild(this.element_),t.appendChild(this.element_);var s=document.createElement("div");s.classList.add(this.CssClasses_.BACKGROUND_FLEX),t.appendChild(s),this.backgroundLower_=document.createElement("div"),this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER),s.appendChild(this.backgroundLower_),this.backgroundUpper_=document.createElement("div"),this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER),s.appendChild(this.backgroundUpper_)}this.boundInputHandler=this.onInput_.bind(this),this.boundChangeHandler=this.onChange_.bind(this),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.boundContainerMouseDownHandler=this.onContainerMouseDown_.bind(this),this.element_.addEventListener("input",this.boundInputHandler),this.element_.addEventListener("change",this.boundChangeHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.element_.parentElement.addEventListener("mousedown",this.boundContainerMouseDownHandler),this.updateValueStyles_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:p,classAsString:"MaterialSlider",cssClass:"mdl-js-slider",widget:!0});var C=function(e){if(this.element_=e,this.textElement_=this.element_.querySelector("."+this.cssClasses_.MESSAGE),this.actionElement_=this.element_.querySelector("."+this.cssClasses_.ACTION),!this.textElement_)throw new Error("There must be a message element for a snackbar.");if(!this.actionElement_)throw new Error("There must be an action element for a snackbar.");this.active=!1,this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.queuedNotifications_=[],this.setActionHidden_(!0)};window.MaterialSnackbar=C,C.prototype.Constant_={ANIMATION_LENGTH:250},C.prototype.cssClasses_={SNACKBAR:"mdl-snackbar",MESSAGE:"mdl-snackbar__text",ACTION:"mdl-snackbar__action",ACTIVE:"mdl-snackbar--active"},C.prototype.displaySnackbar_=function(){this.element_.setAttribute("aria-hidden","true"),
this.actionHandler_&&(this.actionElement_.textContent=this.actionText_,this.actionElement_.addEventListener("click",this.actionHandler_),this.setActionHidden_(!1)),this.textElement_.textContent=this.message_,this.element_.classList.add(this.cssClasses_.ACTIVE),this.element_.setAttribute("aria-hidden","false"),setTimeout(this.cleanup_.bind(this),this.timeout_)},C.prototype.showSnackbar=function(e){if(void 0===e)throw new Error("Please provide a data object with at least a message to display.");if(void 0===e.message)throw new Error("Please provide a message to be displayed.");if(e.actionHandler&&!e.actionText)throw new Error("Please provide action text with the handler.");this.active?this.queuedNotifications_.push(e):(this.active=!0,this.message_=e.message,e.timeout?this.timeout_=e.timeout:this.timeout_=2750,e.actionHandler&&(this.actionHandler_=e.actionHandler),e.actionText&&(this.actionText_=e.actionText),this.displaySnackbar_())},C.prototype.showSnackbar=C.prototype.showSnackbar,C.prototype.checkQueue_=function(){this.queuedNotifications_.length>0&&this.showSnackbar(this.queuedNotifications_.shift())},C.prototype.cleanup_=function(){this.element_.classList.remove(this.cssClasses_.ACTIVE),setTimeout(function(){this.element_.setAttribute("aria-hidden","true"),this.textElement_.textContent="",Boolean(this.actionElement_.getAttribute("aria-hidden"))||(this.setActionHidden_(!0),this.actionElement_.textContent="",this.actionElement_.removeEventListener("click",this.actionHandler_)),this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.active=!1,this.checkQueue_()}.bind(this),this.Constant_.ANIMATION_LENGTH)},C.prototype.setActionHidden_=function(e){e?this.actionElement_.setAttribute("aria-hidden","true"):this.actionElement_.removeAttribute("aria-hidden")},s.register({constructor:C,classAsString:"MaterialSnackbar",cssClass:"mdl-js-snackbar",widget:!0});var u=function(e){this.element_=e,this.init()};window.MaterialSpinner=u,u.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},u.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},u.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var s=document.createElement("div");s.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),s.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),n.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var a=[s,i,n],l=0;l<a.length;l++){var o=document.createElement("div");o.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),a[l].appendChild(o)}t.appendChild(s),t.appendChild(i),t.appendChild(n),this.element_.appendChild(t)},u.prototype.createLayer=u.prototype.createLayer,u.prototype.stop=function(){this.element_.classList.remove("is-active")},u.prototype.stop=u.prototype.stop,u.prototype.start=function(){this.element_.classList.add("is-active")},u.prototype.start=u.prototype.start,u.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},s.register({constructor:u,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0});var E=function(e){this.element_=e,this.init()};window.MaterialSwitch=E,E.prototype.Constant_={TINY_TIMEOUT:.001},E.prototype.CssClasses_={INPUT:"mdl-switch__input",TRACK:"mdl-switch__track",THUMB:"mdl-switch__thumb",FOCUS_HELPER:"mdl-switch__focus-helper",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-switch__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},E.prototype.onChange_=function(e){this.updateClasses_()},E.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},E.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},E.prototype.onMouseUp_=function(e){this.blur_()},E.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},E.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},E.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},E.prototype.checkDisabled=E.prototype.checkDisabled,E.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},E.prototype.checkToggleState=E.prototype.checkToggleState,E.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},E.prototype.disable=E.prototype.disable,E.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},E.prototype.enable=E.prototype.enable,E.prototype.on=function(){this.inputElement_.checked=!0,this.updateClasses_()},E.prototype.on=E.prototype.on,E.prototype.off=function(){this.inputElement_.checked=!1,this.updateClasses_()},E.prototype.off=E.prototype.off,E.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("div");e.classList.add(this.CssClasses_.TRACK);var t=document.createElement("div");t.classList.add(this.CssClasses_.THUMB);var s=document.createElement("span");if(s.classList.add(this.CssClasses_.FOCUS_HELPER),t.appendChild(s),this.element_.appendChild(e),this.element_.appendChild(t),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.rippleContainerElement_.addEventListener("mouseup",this.boundMouseUpHandler);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(i),this.element_.appendChild(this.rippleContainerElement_)}this.boundChangeHandler=this.onChange_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.inputElement_.addEventListener("change",this.boundChangeHandler),this.inputElement_.addEventListener("focus",this.boundFocusHandler),this.inputElement_.addEventListener("blur",this.boundBlurHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},s.register({constructor:E,classAsString:"MaterialSwitch",cssClass:"mdl-js-switch",widget:!0});var m=function(e){this.element_=e,this.init()};window.MaterialTabs=m,m.prototype.Constant_={},m.prototype.CssClasses_={TAB_CLASS:"mdl-tabs__tab",PANEL_CLASS:"mdl-tabs__panel",ACTIVE_CLASS:"is-active",UPGRADED_CLASS:"is-upgraded",MDL_JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",MDL_RIPPLE_CONTAINER:"mdl-tabs__ripple-container",MDL_RIPPLE:"mdl-ripple",MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events"},m.prototype.initTabs_=function(){this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT)&&this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS),this.tabs_=this.element_.querySelectorAll("."+this.CssClasses_.TAB_CLASS),this.panels_=this.element_.querySelectorAll("."+this.CssClasses_.PANEL_CLASS);for(var t=0;t<this.tabs_.length;t++)new e(this.tabs_[t],this);this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS)},m.prototype.resetTabState_=function(){for(var e=0;e<this.tabs_.length;e++)this.tabs_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)},m.prototype.resetPanelState_=function(){for(var e=0;e<this.panels_.length;e++)this.panels_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)},m.prototype.init=function(){this.element_&&this.initTabs_()},s.register({constructor:m,classAsString:"MaterialTabs",cssClass:"mdl-js-tabs"});var L=function(e){this.element_=e,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()};window.MaterialTextfield=L,L.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},L.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},L.prototype.onKeyDown_=function(e){var t=e.target.value.split("\n").length;13===e.keyCode&&t>=this.maxRows&&e.preventDefault()},L.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},L.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},L.prototype.onReset_=function(e){this.updateClasses_()},L.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},L.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},L.prototype.checkDisabled=L.prototype.checkDisabled,L.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},L.prototype.checkFocus=L.prototype.checkFocus,L.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},L.prototype.checkValidity=L.prototype.checkValidity,L.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},L.prototype.checkDirty=L.prototype.checkDirty,L.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},L.prototype.disable=L.prototype.disable,L.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},L.prototype.enable=L.prototype.enable,L.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},L.prototype.change=L.prototype.change,L.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},s.register({constructor:L,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0});var I=function(e){this.element_=e,this.init()};window.MaterialTooltip=I,I.prototype.Constant_={},I.prototype.CssClasses_={IS_ACTIVE:"is-active",BOTTOM:"mdl-tooltip--bottom",LEFT:"mdl-tooltip--left",RIGHT:"mdl-tooltip--right",TOP:"mdl-tooltip--top"},I.prototype.handleMouseEnter_=function(e){var t=e.target.getBoundingClientRect(),s=t.left+t.width/2,i=t.top+t.height/2,n=-1*(this.element_.offsetWidth/2),a=-1*(this.element_.offsetHeight/2);this.element_.classList.contains(this.CssClasses_.LEFT)||this.element_.classList.contains(this.CssClasses_.RIGHT)?(s=t.width/2,i+a<0?(this.element_.style.top="0",this.element_.style.marginTop="0"):(this.element_.style.top=i+"px",this.element_.style.marginTop=a+"px")):s+n<0?(this.element_.style.left="0",this.element_.style.marginLeft="0"):(this.element_.style.left=s+"px",this.element_.style.marginLeft=n+"px"),this.element_.classList.contains(this.CssClasses_.TOP)?this.element_.style.top=t.top-this.element_.offsetHeight-10+"px":this.element_.classList.contains(this.CssClasses_.RIGHT)?this.element_.style.left=t.left+t.width+10+"px":this.element_.classList.contains(this.CssClasses_.LEFT)?this.element_.style.left=t.left-this.element_.offsetWidth-10+"px":this.element_.style.top=t.top+t.height+10+"px",this.element_.classList.add(this.CssClasses_.IS_ACTIVE)},I.prototype.hideTooltip_=function(){this.element_.classList.remove(this.CssClasses_.IS_ACTIVE)},I.prototype.init=function(){if(this.element_){var e=this.element_.getAttribute("for")||this.element_.getAttribute("data-mdl-for");e&&(this.forElement_=document.getElementById(e)),this.forElement_&&(this.forElement_.hasAttribute("tabindex")||this.forElement_.setAttribute("tabindex","0"),this.boundMouseEnterHandler=this.handleMouseEnter_.bind(this),this.boundMouseLeaveAndScrollHandler=this.hideTooltip_.bind(this),this.forElement_.addEventListener("mouseenter",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("touchend",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("mouseleave",this.boundMouseLeaveAndScrollHandler,!1),window.addEventListener("scroll",this.boundMouseLeaveAndScrollHandler,!0),window.addEventListener("touchstart",this.boundMouseLeaveAndScrollHandler))}},s.register({constructor:I,classAsString:"MaterialTooltip",cssClass:"mdl-tooltip"});var f=function(e){this.element_=e,this.init()};window.MaterialLayout=f,f.prototype.Constant_={MAX_WIDTH:"(max-width: 1024px)",TAB_SCROLL_PIXELS:100,RESIZE_TIMEOUT:100,MENU_ICON:"&#xE5D2;",CHEVRON_LEFT:"chevron_left",CHEVRON_RIGHT:"chevron_right"},f.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32},f.prototype.Mode_={STANDARD:0,SEAMED:1,WATERFALL:2,SCROLL:3},f.prototype.CssClasses_={CONTAINER:"mdl-layout__container",HEADER:"mdl-layout__header",DRAWER:"mdl-layout__drawer",CONTENT:"mdl-layout__content",DRAWER_BTN:"mdl-layout__drawer-button",ICON:"material-icons",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-layout__tab-ripple-container",RIPPLE:"mdl-ripple",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",HEADER_SEAMED:"mdl-layout__header--seamed",HEADER_WATERFALL:"mdl-layout__header--waterfall",HEADER_SCROLL:"mdl-layout__header--scroll",FIXED_HEADER:"mdl-layout--fixed-header",OBFUSCATOR:"mdl-layout__obfuscator",TAB_BAR:"mdl-layout__tab-bar",TAB_CONTAINER:"mdl-layout__tab-bar-container",TAB:"mdl-layout__tab",TAB_BAR_BUTTON:"mdl-layout__tab-bar-button",TAB_BAR_LEFT_BUTTON:"mdl-layout__tab-bar-left-button",TAB_BAR_RIGHT_BUTTON:"mdl-layout__tab-bar-right-button",TAB_MANUAL_SWITCH:"mdl-layout__tab-manual-switch",PANEL:"mdl-layout__tab-panel",HAS_DRAWER:"has-drawer",HAS_TABS:"has-tabs",HAS_SCROLLING_HEADER:"has-scrolling-header",CASTING_SHADOW:"is-casting-shadow",IS_COMPACT:"is-compact",IS_SMALL_SCREEN:"is-small-screen",IS_DRAWER_OPEN:"is-visible",IS_ACTIVE:"is-active",IS_UPGRADED:"is-upgraded",IS_ANIMATING:"is-animating",ON_LARGE_SCREEN:"mdl-layout--large-screen-only",ON_SMALL_SCREEN:"mdl-layout--small-screen-only"},f.prototype.contentScrollHandler_=function(){if(!this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)){var e=!this.element_.classList.contains(this.CssClasses_.IS_SMALL_SCREEN)||this.element_.classList.contains(this.CssClasses_.FIXED_HEADER);this.content_.scrollTop>0&&!this.header_.classList.contains(this.CssClasses_.IS_COMPACT)?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.header_.classList.add(this.CssClasses_.IS_COMPACT),e&&this.header_.classList.add(this.CssClasses_.IS_ANIMATING)):this.content_.scrollTop<=0&&this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.header_.classList.remove(this.CssClasses_.IS_COMPACT),e&&this.header_.classList.add(this.CssClasses_.IS_ANIMATING))}},f.prototype.keyboardEventHandler_=function(e){e.keyCode===this.Keycodes_.ESCAPE&&this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)&&this.toggleDrawer()},f.prototype.screenSizeHandler_=function(){this.screenSizeMediaQuery_.matches?this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN):(this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN),this.drawer_&&(this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN)))},f.prototype.drawerToggleHandler_=function(e){if(e&&"keydown"===e.type){if(e.keyCode!==this.Keycodes_.SPACE&&e.keyCode!==this.Keycodes_.ENTER)return;e.preventDefault()}this.toggleDrawer()},f.prototype.headerTransitionEndHandler_=function(){this.header_.classList.remove(this.CssClasses_.IS_ANIMATING)},f.prototype.headerClickHandler_=function(){this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.IS_COMPACT),this.header_.classList.add(this.CssClasses_.IS_ANIMATING))},f.prototype.resetTabState_=function(e){for(var t=0;t<e.length;t++)e[t].classList.remove(this.CssClasses_.IS_ACTIVE)},f.prototype.resetPanelState_=function(e){for(var t=0;t<e.length;t++)e[t].classList.remove(this.CssClasses_.IS_ACTIVE)},f.prototype.toggleDrawer=function(){var e=this.element_.querySelector("."+this.CssClasses_.DRAWER_BTN);this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN),this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)?(this.drawer_.setAttribute("aria-hidden","false"),e.setAttribute("aria-expanded","true")):(this.drawer_.setAttribute("aria-hidden","true"),e.setAttribute("aria-expanded","false"))},f.prototype.toggleDrawer=f.prototype.toggleDrawer,f.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER);var s=this.element_.querySelector(":focus");this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_),s&&s.focus();for(var i=this.element_.childNodes,n=i.length,a=0;a<n;a++){var l=i[a];l.classList&&l.classList.contains(this.CssClasses_.HEADER)&&(this.header_=l),l.classList&&l.classList.contains(this.CssClasses_.DRAWER)&&(this.drawer_=l),l.classList&&l.classList.contains(this.CssClasses_.CONTENT)&&(this.content_=l)}window.addEventListener("pageshow",function(e){e.persisted&&(this.element_.style.overflowY="hidden",requestAnimationFrame(function(){this.element_.style.overflowY=""}.bind(this)))}.bind(this),!1),this.header_&&(this.tabBar_=this.header_.querySelector("."+this.CssClasses_.TAB_BAR));var o=this.Mode_.STANDARD;if(this.header_&&(this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)?o=this.Mode_.SEAMED:this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)?(o=this.Mode_.WATERFALL,this.header_.addEventListener("transitionend",this.headerTransitionEndHandler_.bind(this)),this.header_.addEventListener("click",this.headerClickHandler_.bind(this))):this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)&&(o=this.Mode_.SCROLL,e.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER)),o===this.Mode_.STANDARD?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW)):o===this.Mode_.SEAMED||o===this.Mode_.SCROLL?(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW)):o===this.Mode_.WATERFALL&&(this.content_.addEventListener("scroll",this.contentScrollHandler_.bind(this)),this.contentScrollHandler_())),this.drawer_){var r=this.element_.querySelector("."+this.CssClasses_.DRAWER_BTN);if(!r){r=document.createElement("div"),r.setAttribute("aria-expanded","false"),r.setAttribute("role","button"),r.setAttribute("tabindex","0"),r.classList.add(this.CssClasses_.DRAWER_BTN);var _=document.createElement("i");_.classList.add(this.CssClasses_.ICON),_.innerHTML=this.Constant_.MENU_ICON,r.appendChild(_)}this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)?r.classList.add(this.CssClasses_.ON_LARGE_SCREEN):this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)&&r.classList.add(this.CssClasses_.ON_SMALL_SCREEN),r.addEventListener("click",this.drawerToggleHandler_.bind(this)),r.addEventListener("keydown",this.drawerToggleHandler_.bind(this)),this.element_.classList.add(this.CssClasses_.HAS_DRAWER),this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)?this.header_.insertBefore(r,this.header_.firstChild):this.element_.insertBefore(r,this.content_);var d=document.createElement("div");d.classList.add(this.CssClasses_.OBFUSCATOR),this.element_.appendChild(d),d.addEventListener("click",this.drawerToggleHandler_.bind(this)),this.obfuscator_=d,this.drawer_.addEventListener("keydown",this.keyboardEventHandler_.bind(this)),this.drawer_.setAttribute("aria-hidden","true")}if(this.screenSizeMediaQuery_=window.matchMedia(this.Constant_.MAX_WIDTH),this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this)),this.screenSizeHandler_(),this.header_&&this.tabBar_){this.element_.classList.add(this.CssClasses_.HAS_TABS);var h=document.createElement("div");h.classList.add(this.CssClasses_.TAB_CONTAINER),this.header_.insertBefore(h,this.tabBar_),this.header_.removeChild(this.tabBar_);var c=document.createElement("div");c.classList.add(this.CssClasses_.TAB_BAR_BUTTON),c.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);var p=document.createElement("i");p.classList.add(this.CssClasses_.ICON),p.textContent=this.Constant_.CHEVRON_LEFT,c.appendChild(p),c.addEventListener("click",function(){this.tabBar_.scrollLeft-=this.Constant_.TAB_SCROLL_PIXELS}.bind(this));var C=document.createElement("div");C.classList.add(this.CssClasses_.TAB_BAR_BUTTON),C.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);var u=document.createElement("i");u.classList.add(this.CssClasses_.ICON),u.textContent=this.Constant_.CHEVRON_RIGHT,C.appendChild(u),C.addEventListener("click",function(){this.tabBar_.scrollLeft+=this.Constant_.TAB_SCROLL_PIXELS}.bind(this)),h.appendChild(c),h.appendChild(this.tabBar_),h.appendChild(C);var E=function(){this.tabBar_.scrollLeft>0?c.classList.add(this.CssClasses_.IS_ACTIVE):c.classList.remove(this.CssClasses_.IS_ACTIVE),this.tabBar_.scrollLeft<this.tabBar_.scrollWidth-this.tabBar_.offsetWidth?C.classList.add(this.CssClasses_.IS_ACTIVE):C.classList.remove(this.CssClasses_.IS_ACTIVE)}.bind(this);this.tabBar_.addEventListener("scroll",E),E();var m=function(){this.resizeTimeoutId_&&clearTimeout(this.resizeTimeoutId_),this.resizeTimeoutId_=setTimeout(function(){E(),this.resizeTimeoutId_=null}.bind(this),this.Constant_.RESIZE_TIMEOUT)}.bind(this);window.addEventListener("resize",m),this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)&&this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);for(var L=this.tabBar_.querySelectorAll("."+this.CssClasses_.TAB),I=this.content_.querySelectorAll("."+this.CssClasses_.PANEL),f=0;f<L.length;f++)new t(L[f],L,I,this)}this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},window.MaterialLayoutTab=t,s.register({constructor:f,classAsString:"MaterialLayout",cssClass:"mdl-js-layout"});var b=function(e){this.element_=e,this.init()};window.MaterialDataTable=b,b.prototype.Constant_={},b.prototype.CssClasses_={DATA_TABLE:"mdl-data-table",SELECTABLE:"mdl-data-table--selectable",SELECT_ELEMENT:"mdl-data-table__select",IS_SELECTED:"is-selected",IS_UPGRADED:"is-upgraded"},b.prototype.selectRow_=function(e,t,s){return t?function(){e.checked?t.classList.add(this.CssClasses_.IS_SELECTED):t.classList.remove(this.CssClasses_.IS_SELECTED)}.bind(this):s?function(){var t,i;if(e.checked)for(t=0;t<s.length;t++)i=s[t].querySelector("td").querySelector(".mdl-checkbox"),i.MaterialCheckbox.check(),s[t].classList.add(this.CssClasses_.IS_SELECTED);else for(t=0;t<s.length;t++)i=s[t].querySelector("td").querySelector(".mdl-checkbox"),i.MaterialCheckbox.uncheck(),s[t].classList.remove(this.CssClasses_.IS_SELECTED)}.bind(this):void 0},b.prototype.createCheckbox_=function(e,t){var i=document.createElement("label"),n=["mdl-checkbox","mdl-js-checkbox","mdl-js-ripple-effect",this.CssClasses_.SELECT_ELEMENT];i.className=n.join(" ");var a=document.createElement("input");return a.type="checkbox",a.classList.add("mdl-checkbox__input"),e?(a.checked=e.classList.contains(this.CssClasses_.IS_SELECTED),a.addEventListener("change",this.selectRow_(a,e))):t&&a.addEventListener("change",this.selectRow_(a,null,t)),i.appendChild(a),s.upgradeElement(i,"MaterialCheckbox"),i},b.prototype.init=function(){if(this.element_){var e=this.element_.querySelector("th"),t=Array.prototype.slice.call(this.element_.querySelectorAll("tbody tr")),s=Array.prototype.slice.call(this.element_.querySelectorAll("tfoot tr")),i=t.concat(s);if(this.element_.classList.contains(this.CssClasses_.SELECTABLE)){var n=document.createElement("th"),a=this.createCheckbox_(null,i);n.appendChild(a),e.parentElement.insertBefore(n,e);for(var l=0;l<i.length;l++){var o=i[l].querySelector("td");if(o){var r=document.createElement("td");if("TBODY"===i[l].parentNode.nodeName.toUpperCase()){var _=this.createCheckbox_(i[l]);r.appendChild(_)}i[l].insertBefore(r,o)}}this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}}},s.register({constructor:b,classAsString:"MaterialDataTable",cssClass:"mdl-js-data-table"});var S=function(e){this.element_=e,this.init()};window.MaterialRipple=S,S.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},S.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},S.prototype.downHandler_=function(e){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var t=this.element_.getBoundingClientRect();this.boundHeight=t.height,this.boundWidth=t.width,this.rippleSize_=2*Math.sqrt(t.width*t.width+t.height*t.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===e.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{"touchstart"===e.type&&(this.ignoringMouseDown_=!0);var s=this.getFrameCount();if(s>0)return;this.setFrameCount(1);var i,n,a=e.currentTarget.getBoundingClientRect();if(0===e.clientX&&0===e.clientY)i=Math.round(a.width/2),n=Math.round(a.height/2);else{var l=void 0!==e.clientX?e.clientX:e.touches[0].clientX,o=void 0!==e.clientY?e.clientY:e.touches[0].clientY;i=Math.round(l-a.left),n=Math.round(o-a.top)}this.setRippleXY(i,n),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},S.prototype.upHandler_=function(e){e&&2!==e.detail&&window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)},S.prototype.init=function(){if(this.element_){var e=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(e){this.frameCount_=e},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(e,t){this.x_=e,this.y_=t},this.setRippleStyles=function(t){if(null!==this.rippleElement_){var s,i,n,a="translate("+this.x_+"px, "+this.y_+"px)";t?(i=this.Constant_.INITIAL_SCALE,n=this.Constant_.INITIAL_SIZE):(i=this.Constant_.FINAL_SCALE,n=this.rippleSize_+"px",e&&(a="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),s="translate(-50%, -50%) "+a+i,this.rippleElement_.style.webkitTransform=s,this.rippleElement_.style.msTransform=s,this.rippleElement_.style.transform=s,t?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-- >0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}},s.register({constructor:S,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1})}();
//# sourceMappingURL=material.min.js.map
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Chart=f()}})(function(){var define,module,exports;return(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){var colorNames=require(5);module.exports={getRgba:getRgba,getHsla:getHsla,getRgb:getRgb,getHsl:getHsl,getHwb:getHwb,getAlpha:getAlpha,hexString:hexString,rgbString:rgbString,rgbaString:rgbaString,percentString:percentString,percentaString:percentaString,hslString:hslString,hslaString:hslaString,hwbString:hwbString,keyword:keyword}
function getRgba(string){if(!string){return;}
var abbr=/^#([a-fA-F0-9]{3})$/,hex=/^#([a-fA-F0-9]{6})$/,rgba=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,per=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,keyword=/(\w+)/;var rgb=[0,0,0],a=1,match=string.match(abbr);if(match){match=match[1];for(var i=0;i<rgb.length;i++){rgb[i]=parseInt(match[i]+match[i],16);}}
else if(match=string.match(hex)){match=match[1];for(var i=0;i<rgb.length;i++){rgb[i]=parseInt(match.slice(i*2,i*2+2),16);}}
else if(match=string.match(rgba)){for(var i=0;i<rgb.length;i++){rgb[i]=parseInt(match[i+1]);}
a=parseFloat(match[4]);}
else if(match=string.match(per)){for(var i=0;i<rgb.length;i++){rgb[i]=Math.round(parseFloat(match[i+1])*2.55);}
a=parseFloat(match[4]);}
else if(match=string.match(keyword)){if(match[1]=="transparent"){return[0,0,0,0];}
rgb=colorNames[match[1]];if(!rgb){return;}}
for(var i=0;i<rgb.length;i++){rgb[i]=scale(rgb[i],0,255);}
if(!a&&a!=0){a=1;}
else{a=scale(a,0,1);}
rgb[3]=a;return rgb;}
function getHsla(string){if(!string){return;}
var hsl=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;var match=string.match(hsl);if(match){var alpha=parseFloat(match[4]);var h=scale(parseInt(match[1]),0,360),s=scale(parseFloat(match[2]),0,100),l=scale(parseFloat(match[3]),0,100),a=scale(isNaN(alpha)?1:alpha,0,1);return[h,s,l,a];}}
function getHwb(string){if(!string){return;}
var hwb=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;var match=string.match(hwb);if(match){var alpha=parseFloat(match[4]);var h=scale(parseInt(match[1]),0,360),w=scale(parseFloat(match[2]),0,100),b=scale(parseFloat(match[3]),0,100),a=scale(isNaN(alpha)?1:alpha,0,1);return[h,w,b,a];}}
function getRgb(string){var rgba=getRgba(string);return rgba&&rgba.slice(0,3);}
function getHsl(string){var hsla=getHsla(string);return hsla&&hsla.slice(0,3);}
function getAlpha(string){var vals=getRgba(string);if(vals){return vals[3];}
else if(vals=getHsla(string)){return vals[3];}
else if(vals=getHwb(string)){return vals[3];}}
function hexString(rgb){return"#"+hexDouble(rgb[0])+hexDouble(rgb[1])+hexDouble(rgb[2]);}
function rgbString(rgba,alpha){if(alpha<1||(rgba[3]&&rgba[3]<1)){return rgbaString(rgba,alpha);}
return"rgb("+rgba[0]+", "+rgba[1]+", "+rgba[2]+")";}
function rgbaString(rgba,alpha){if(alpha===undefined){alpha=(rgba[3]!==undefined?rgba[3]:1);}
return"rgba("+rgba[0]+", "+rgba[1]+", "+rgba[2]+", "+alpha+")";}
function percentString(rgba,alpha){if(alpha<1||(rgba[3]&&rgba[3]<1)){return percentaString(rgba,alpha);}
var r=Math.round(rgba[0]/255*100),g=Math.round(rgba[1]/255*100),b=Math.round(rgba[2]/255*100);return"rgb("+r+"%, "+g+"%, "+b+"%)";}
function percentaString(rgba,alpha){var r=Math.round(rgba[0]/255*100),g=Math.round(rgba[1]/255*100),b=Math.round(rgba[2]/255*100);return"rgba("+r+"%, "+g+"%, "+b+"%, "+(alpha||rgba[3]||1)+")";}
function hslString(hsla,alpha){if(alpha<1||(hsla[3]&&hsla[3]<1)){return hslaString(hsla,alpha);}
return"hsl("+hsla[0]+", "+hsla[1]+"%, "+hsla[2]+"%)";}
function hslaString(hsla,alpha){if(alpha===undefined){alpha=(hsla[3]!==undefined?hsla[3]:1);}
return"hsla("+hsla[0]+", "+hsla[1]+"%, "+hsla[2]+"%, "+alpha+")";}
function hwbString(hwb,alpha){if(alpha===undefined){alpha=(hwb[3]!==undefined?hwb[3]:1);}
return"hwb("+hwb[0]+", "+hwb[1]+"%, "+hwb[2]+"%"+(alpha!==undefined&&alpha!==1?", "+alpha:"")+")";}
function keyword(rgb){return reverseNames[rgb.slice(0,3)];}
function scale(num,min,max){return Math.min(Math.max(min,num),max);}
function hexDouble(num){var str=num.toString(16).toUpperCase();return(str.length<2)?"0"+str:str;}
var reverseNames={};for(var name in colorNames){reverseNames[colorNames[name]]=name;}},{"5":5}],2:[function(require,module,exports){var convert=require(4);var string=require(1);var Color=function(obj){if(obj instanceof Color){return obj;}
if(!(this instanceof Color)){return new Color(obj);}
this.valid=false;this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};var vals;if(typeof obj==='string'){vals=string.getRgba(obj);if(vals){this.setValues('rgb',vals);}else if(vals=string.getHsla(obj)){this.setValues('hsl',vals);}else if(vals=string.getHwb(obj)){this.setValues('hwb',vals);}}else if(typeof obj==='object'){vals=obj;if(vals.r!==undefined||vals.red!==undefined){this.setValues('rgb',vals);}else if(vals.l!==undefined||vals.lightness!==undefined){this.setValues('hsl',vals);}else if(vals.v!==undefined||vals.value!==undefined){this.setValues('hsv',vals);}else if(vals.w!==undefined||vals.whiteness!==undefined){this.setValues('hwb',vals);}else if(vals.c!==undefined||vals.cyan!==undefined){this.setValues('cmyk',vals);}}};Color.prototype={isValid:function(){return this.valid;},rgb:function(){return this.setSpace('rgb',arguments);},hsl:function(){return this.setSpace('hsl',arguments);},hsv:function(){return this.setSpace('hsv',arguments);},hwb:function(){return this.setSpace('hwb',arguments);},cmyk:function(){return this.setSpace('cmyk',arguments);},rgbArray:function(){return this.values.rgb;},hslArray:function(){return this.values.hsl;},hsvArray:function(){return this.values.hsv;},hwbArray:function(){var values=this.values;if(values.alpha!==1){return values.hwb.concat([values.alpha]);}
return values.hwb;},cmykArray:function(){return this.values.cmyk;},rgbaArray:function(){var values=this.values;return values.rgb.concat([values.alpha]);},hslaArray:function(){var values=this.values;return values.hsl.concat([values.alpha]);},alpha:function(val){if(val===undefined){return this.values.alpha;}
this.setValues('alpha',val);return this;},red:function(val){return this.setChannel('rgb',0,val);},green:function(val){return this.setChannel('rgb',1,val);},blue:function(val){return this.setChannel('rgb',2,val);},hue:function(val){if(val){val%=360;val=val<0?360+val:val;}
return this.setChannel('hsl',0,val);},saturation:function(val){return this.setChannel('hsl',1,val);},lightness:function(val){return this.setChannel('hsl',2,val);},saturationv:function(val){return this.setChannel('hsv',1,val);},whiteness:function(val){return this.setChannel('hwb',1,val);},blackness:function(val){return this.setChannel('hwb',2,val);},value:function(val){return this.setChannel('hsv',2,val);},cyan:function(val){return this.setChannel('cmyk',0,val);},magenta:function(val){return this.setChannel('cmyk',1,val);},yellow:function(val){return this.setChannel('cmyk',2,val);},black:function(val){return this.setChannel('cmyk',3,val);},hexString:function(){return string.hexString(this.values.rgb);},rgbString:function(){return string.rgbString(this.values.rgb,this.values.alpha);},rgbaString:function(){return string.rgbaString(this.values.rgb,this.values.alpha);},percentString:function(){return string.percentString(this.values.rgb,this.values.alpha);},hslString:function(){return string.hslString(this.values.hsl,this.values.alpha);},hslaString:function(){return string.hslaString(this.values.hsl,this.values.alpha);},hwbString:function(){return string.hwbString(this.values.hwb,this.values.alpha);},keyword:function(){return string.keyword(this.values.rgb,this.values.alpha);},rgbNumber:function(){var rgb=this.values.rgb;return(rgb[0]<<16)|(rgb[1]<<8)|rgb[2];},luminosity:function(){var rgb=this.values.rgb;var lum=[];for(var i=0;i<rgb.length;i++){var chan=rgb[i]/255;lum[i]=(chan<=0.03928)?chan/12.92:Math.pow(((chan+0.055)/1.055),2.4);}
return 0.2126*lum[0]+0.7152*lum[1]+0.0722*lum[2];},contrast:function(color2){var lum1=this.luminosity();var lum2=color2.luminosity();if(lum1>lum2){return(lum1+0.05)/(lum2+0.05);}
return(lum2+0.05)/(lum1+0.05);},level:function(color2){var contrastRatio=this.contrast(color2);if(contrastRatio>=7.1){return'AAA';}
return(contrastRatio>=4.5)?'AA':'';},dark:function(){var rgb=this.values.rgb;var yiq=(rgb[0]*299+rgb[1]*587+rgb[2]*114)/1000;return yiq<128;},light:function(){return!this.dark();},negate:function(){var rgb=[];for(var i=0;i<3;i++){rgb[i]=255-this.values.rgb[i];}
this.setValues('rgb',rgb);return this;},lighten:function(ratio){var hsl=this.values.hsl;hsl[2]+=hsl[2]*ratio;this.setValues('hsl',hsl);return this;},darken:function(ratio){var hsl=this.values.hsl;hsl[2]-=hsl[2]*ratio;this.setValues('hsl',hsl);return this;},saturate:function(ratio){var hsl=this.values.hsl;hsl[1]+=hsl[1]*ratio;this.setValues('hsl',hsl);return this;},desaturate:function(ratio){var hsl=this.values.hsl;hsl[1]-=hsl[1]*ratio;this.setValues('hsl',hsl);return this;},whiten:function(ratio){var hwb=this.values.hwb;hwb[1]+=hwb[1]*ratio;this.setValues('hwb',hwb);return this;},blacken:function(ratio){var hwb=this.values.hwb;hwb[2]+=hwb[2]*ratio;this.setValues('hwb',hwb);return this;},greyscale:function(){var rgb=this.values.rgb;var val=rgb[0]*0.3+rgb[1]*0.59+rgb[2]*0.11;this.setValues('rgb',[val,val,val]);return this;},clearer:function(ratio){var alpha=this.values.alpha;this.setValues('alpha',alpha-(alpha*ratio));return this;},opaquer:function(ratio){var alpha=this.values.alpha;this.setValues('alpha',alpha+(alpha*ratio));return this;},rotate:function(degrees){var hsl=this.values.hsl;var hue=(hsl[0]+degrees)%360;hsl[0]=hue<0?360+hue:hue;this.setValues('hsl',hsl);return this;},mix:function(mixinColor,weight){var color1=this;var color2=mixinColor;var p=weight===undefined?0.5:weight;var w=2*p-1;var a=color1.alpha()-color2.alpha();var w1=(((w*a===-1)?w:(w+a)/(1+w*a))+1)/2.0;var w2=1-w1;return this.rgb(w1*color1.red()+w2*color2.red(),w1*color1.green()+w2*color2.green(),w1*color1.blue()+w2*color2.blue()).alpha(color1.alpha()*p+color2.alpha()*(1-p));},toJSON:function(){return this.rgb();},clone:function(){var result=new Color();var source=this.values;var target=result.values;var value,type;for(var prop in source){if(source.hasOwnProperty(prop)){value=source[prop];type=({}).toString.call(value);if(type==='[object Array]'){target[prop]=value.slice(0);}else if(type==='[object Number]'){target[prop]=value;}else{console.error('unexpected color value:',value);}}}
return result;}};Color.prototype.spaces={rgb:['red','green','blue'],hsl:['hue','saturation','lightness'],hsv:['hue','saturation','value'],hwb:['hue','whiteness','blackness'],cmyk:['cyan','magenta','yellow','black']};Color.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]};Color.prototype.getValues=function(space){var values=this.values;var vals={};for(var i=0;i<space.length;i++){vals[space.charAt(i)]=values[space][i];}
if(values.alpha!==1){vals.a=values.alpha;}
return vals;};Color.prototype.setValues=function(space,vals){var values=this.values;var spaces=this.spaces;var maxes=this.maxes;var alpha=1;var i;this.valid=true;if(space==='alpha'){alpha=vals;}else if(vals.length){values[space]=vals.slice(0,space.length);alpha=vals[space.length];}else if(vals[space.charAt(0)]!==undefined){for(i=0;i<space.length;i++){values[space][i]=vals[space.charAt(i)];}
alpha=vals.a;}else if(vals[spaces[space][0]]!==undefined){var chans=spaces[space];for(i=0;i<space.length;i++){values[space][i]=vals[chans[i]];}
alpha=vals.alpha;}
values.alpha=Math.max(0,Math.min(1,(alpha===undefined?values.alpha:alpha)));if(space==='alpha'){return false;}
var capped;for(i=0;i<space.length;i++){capped=Math.max(0,Math.min(maxes[space][i],values[space][i]));values[space][i]=Math.round(capped);}
for(var sname in spaces){if(sname!==space){values[sname]=convert[space][sname](values[space]);}}
return true;};Color.prototype.setSpace=function(space,args){var vals=args[0];if(vals===undefined){return this.getValues(space);}
if(typeof vals==='number'){vals=Array.prototype.slice.call(args);}
this.setValues(space,vals);return this;};Color.prototype.setChannel=function(space,index,val){var svalues=this.values[space];if(val===undefined){return svalues[index];}else if(val===svalues[index]){return this;}
svalues[index]=val;this.setValues(space,svalues);return this;};if(typeof window!=='undefined'){window.Color=Color;}
module.exports=Color;},{"1":1,"4":4}],3:[function(require,module,exports){module.exports={rgb2hsl:rgb2hsl,rgb2hsv:rgb2hsv,rgb2hwb:rgb2hwb,rgb2cmyk:rgb2cmyk,rgb2keyword:rgb2keyword,rgb2xyz:rgb2xyz,rgb2lab:rgb2lab,rgb2lch:rgb2lch,hsl2rgb:hsl2rgb,hsl2hsv:hsl2hsv,hsl2hwb:hsl2hwb,hsl2cmyk:hsl2cmyk,hsl2keyword:hsl2keyword,hsv2rgb:hsv2rgb,hsv2hsl:hsv2hsl,hsv2hwb:hsv2hwb,hsv2cmyk:hsv2cmyk,hsv2keyword:hsv2keyword,hwb2rgb:hwb2rgb,hwb2hsl:hwb2hsl,hwb2hsv:hwb2hsv,hwb2cmyk:hwb2cmyk,hwb2keyword:hwb2keyword,cmyk2rgb:cmyk2rgb,cmyk2hsl:cmyk2hsl,cmyk2hsv:cmyk2hsv,cmyk2hwb:cmyk2hwb,cmyk2keyword:cmyk2keyword,keyword2rgb:keyword2rgb,keyword2hsl:keyword2hsl,keyword2hsv:keyword2hsv,keyword2hwb:keyword2hwb,keyword2cmyk:keyword2cmyk,keyword2lab:keyword2lab,keyword2xyz:keyword2xyz,xyz2rgb:xyz2rgb,xyz2lab:xyz2lab,xyz2lch:xyz2lch,lab2xyz:lab2xyz,lab2rgb:lab2rgb,lab2lch:lab2lch,lch2lab:lch2lab,lch2xyz:lch2xyz,lch2rgb:lch2rgb}
function rgb2hsl(rgb){var r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255,min=Math.min(r,g,b),max=Math.max(r,g,b),delta=max-min,h,s,l;if(max==min)
h=0;else if(r==max)
h=(g-b)/delta;else if(g==max)
h=2+(b-r)/delta;else if(b==max)
h=4+(r-g)/delta;h=Math.min(h*60,360);if(h<0)
h+=360;l=(min+max)/2;if(max==min)
s=0;else if(l<=0.5)
s=delta/(max+min);else
s=delta/(2-max-min);return[h,s*100,l*100];}
function rgb2hsv(rgb){var r=rgb[0],g=rgb[1],b=rgb[2],min=Math.min(r,g,b),max=Math.max(r,g,b),delta=max-min,h,s,v;if(max==0)
s=0;else
s=(delta/max*1000)/10;if(max==min)
h=0;else if(r==max)
h=(g-b)/delta;else if(g==max)
h=2+(b-r)/delta;else if(b==max)
h=4+(r-g)/delta;h=Math.min(h*60,360);if(h<0)
h+=360;v=((max/255)*1000)/10;return[h,s,v];}
function rgb2hwb(rgb){var r=rgb[0],g=rgb[1],b=rgb[2],h=rgb2hsl(rgb)[0],w=1/255*Math.min(r,Math.min(g,b)),b=1-1/255*Math.max(r,Math.max(g,b));return[h,w*100,b*100];}
function rgb2cmyk(rgb){var r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255,c,m,y,k;k=Math.min(1-r,1-g,1-b);c=(1-r-k)/(1-k)||0;m=(1-g-k)/(1-k)||0;y=(1-b-k)/(1-k)||0;return[c*100,m*100,y*100,k*100];}
function rgb2keyword(rgb){return reverseKeywords[JSON.stringify(rgb)];}
function rgb2xyz(rgb){var r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255;r=r>0.04045?Math.pow(((r+0.055)/1.055),2.4):(r/12.92);g=g>0.04045?Math.pow(((g+0.055)/1.055),2.4):(g/12.92);b=b>0.04045?Math.pow(((b+0.055)/1.055),2.4):(b/12.92);var x=(r*0.4124)+(g*0.3576)+(b*0.1805);var y=(r*0.2126)+(g*0.7152)+(b*0.0722);var z=(r*0.0193)+(g*0.1192)+(b*0.9505);return[x*100,y*100,z*100];}
function rgb2lab(rgb){var xyz=rgb2xyz(rgb),x=xyz[0],y=xyz[1],z=xyz[2],l,a,b;x/=95.047;y/=100;z/=108.883;x=x>0.008856?Math.pow(x,1/3):(7.787*x)+(16/116);y=y>0.008856?Math.pow(y,1/3):(7.787*y)+(16/116);z=z>0.008856?Math.pow(z,1/3):(7.787*z)+(16/116);l=(116*y)-16;a=500*(x-y);b=200*(y-z);return[l,a,b];}
function rgb2lch(args){return lab2lch(rgb2lab(args));}
function hsl2rgb(hsl){var h=hsl[0]/360,s=hsl[1]/100,l=hsl[2]/100,t1,t2,t3,rgb,val;if(s==0){val=l*255;return[val,val,val];}
if(l<0.5)
t2=l*(1+s);else
t2=l+s-l*s;t1=2*l-t2;rgb=[0,0,0];for(var i=0;i<3;i++){t3=h+1/3*-(i-1);t3<0&&t3++;t3>1&&t3--;if(6*t3<1)
val=t1+(t2-t1)*6*t3;else if(2*t3<1)
val=t2;else if(3*t3<2)
val=t1+(t2-t1)*(2/3-t3)*6;else
val=t1;rgb[i]=val*255;}
return rgb;}
function hsl2hsv(hsl){var h=hsl[0],s=hsl[1]/100,l=hsl[2]/100,sv,v;if(l===0){return[0,0,0];}
l*=2;s*=(l<=1)?l:2-l;v=(l+s)/2;sv=(2*s)/(l+s);return[h,sv*100,v*100];}
function hsl2hwb(args){return rgb2hwb(hsl2rgb(args));}
function hsl2cmyk(args){return rgb2cmyk(hsl2rgb(args));}
function hsl2keyword(args){return rgb2keyword(hsl2rgb(args));}
function hsv2rgb(hsv){var h=hsv[0]/60,s=hsv[1]/100,v=hsv[2]/100,hi=Math.floor(h)%6;var f=h-Math.floor(h),p=255*v*(1-s),q=255*v*(1-(s*f)),t=255*v*(1-(s*(1-f))),v=255*v;switch(hi){case 0:return[v,t,p];case 1:return[q,v,p];case 2:return[p,v,t];case 3:return[p,q,v];case 4:return[t,p,v];case 5:return[v,p,q];}}
function hsv2hsl(hsv){var h=hsv[0],s=hsv[1]/100,v=hsv[2]/100,sl,l;l=(2-s)*v;sl=s*v;sl/=(l<=1)?l:2-l;sl=sl||0;l/=2;return[h,sl*100,l*100];}
function hsv2hwb(args){return rgb2hwb(hsv2rgb(args))}
function hsv2cmyk(args){return rgb2cmyk(hsv2rgb(args));}
function hsv2keyword(args){return rgb2keyword(hsv2rgb(args));}
function hwb2rgb(hwb){var h=hwb[0]/360,wh=hwb[1]/100,bl=hwb[2]/100,ratio=wh+bl,i,v,f,n;if(ratio>1){wh/=ratio;bl/=ratio;}
i=Math.floor(6*h);v=1-bl;f=6*h-i;if((i&0x01)!=0){f=1-f;}
n=wh+f*(v-wh);switch(i){default:case 6:case 0:r=v;g=n;b=wh;break;case 1:r=n;g=v;b=wh;break;case 2:r=wh;g=v;b=n;break;case 3:r=wh;g=n;b=v;break;case 4:r=n;g=wh;b=v;break;case 5:r=v;g=wh;b=n;break;}
return[r*255,g*255,b*255];}
function hwb2hsl(args){return rgb2hsl(hwb2rgb(args));}
function hwb2hsv(args){return rgb2hsv(hwb2rgb(args));}
function hwb2cmyk(args){return rgb2cmyk(hwb2rgb(args));}
function hwb2keyword(args){return rgb2keyword(hwb2rgb(args));}
function cmyk2rgb(cmyk){var c=cmyk[0]/100,m=cmyk[1]/100,y=cmyk[2]/100,k=cmyk[3]/100,r,g,b;r=1-Math.min(1,c*(1-k)+k);g=1-Math.min(1,m*(1-k)+k);b=1-Math.min(1,y*(1-k)+k);return[r*255,g*255,b*255];}
function cmyk2hsl(args){return rgb2hsl(cmyk2rgb(args));}
function cmyk2hsv(args){return rgb2hsv(cmyk2rgb(args));}
function cmyk2hwb(args){return rgb2hwb(cmyk2rgb(args));}
function cmyk2keyword(args){return rgb2keyword(cmyk2rgb(args));}
function xyz2rgb(xyz){var x=xyz[0]/100,y=xyz[1]/100,z=xyz[2]/100,r,g,b;r=(x*3.2406)+(y*-1.5372)+(z*-0.4986);g=(x*-0.9689)+(y*1.8758)+(z*0.0415);b=(x*0.0557)+(y*-0.2040)+(z*1.0570);r=r>0.0031308?((1.055*Math.pow(r,1.0/2.4))-0.055):r=(r*12.92);g=g>0.0031308?((1.055*Math.pow(g,1.0/2.4))-0.055):g=(g*12.92);b=b>0.0031308?((1.055*Math.pow(b,1.0/2.4))-0.055):b=(b*12.92);r=Math.min(Math.max(0,r),1);g=Math.min(Math.max(0,g),1);b=Math.min(Math.max(0,b),1);return[r*255,g*255,b*255];}
function xyz2lab(xyz){var x=xyz[0],y=xyz[1],z=xyz[2],l,a,b;x/=95.047;y/=100;z/=108.883;x=x>0.008856?Math.pow(x,1/3):(7.787*x)+(16/116);y=y>0.008856?Math.pow(y,1/3):(7.787*y)+(16/116);z=z>0.008856?Math.pow(z,1/3):(7.787*z)+(16/116);l=(116*y)-16;a=500*(x-y);b=200*(y-z);return[l,a,b];}
function xyz2lch(args){return lab2lch(xyz2lab(args));}
function lab2xyz(lab){var l=lab[0],a=lab[1],b=lab[2],x,y,z,y2;if(l<=8){y=(l*100)/903.3;y2=(7.787*(y/100))+(16/116);}else{y=100*Math.pow((l+16)/116,3);y2=Math.pow(y/100,1/3);}
x=x/95.047<=0.008856?x=(95.047*((a/500)+y2-(16/116)))/7.787:95.047*Math.pow((a/500)+y2,3);z=z/108.883<=0.008859?z=(108.883*(y2-(b/200)-(16/116)))/7.787:108.883*Math.pow(y2-(b/200),3);return[x,y,z];}
function lab2lch(lab){var l=lab[0],a=lab[1],b=lab[2],hr,h,c;hr=Math.atan2(b,a);h=hr*360/2/Math.PI;if(h<0){h+=360;}
c=Math.sqrt(a*a+b*b);return[l,c,h];}
function lab2rgb(args){return xyz2rgb(lab2xyz(args));}
function lch2lab(lch){var l=lch[0],c=lch[1],h=lch[2],a,b,hr;hr=h/360*2*Math.PI;a=c*Math.cos(hr);b=c*Math.sin(hr);return[l,a,b];}
function lch2xyz(args){return lab2xyz(lch2lab(args));}
function lch2rgb(args){return lab2rgb(lch2lab(args));}
function keyword2rgb(keyword){return cssKeywords[keyword];}
function keyword2hsl(args){return rgb2hsl(keyword2rgb(args));}
function keyword2hsv(args){return rgb2hsv(keyword2rgb(args));}
function keyword2hwb(args){return rgb2hwb(keyword2rgb(args));}
function keyword2cmyk(args){return rgb2cmyk(keyword2rgb(args));}
function keyword2lab(args){return rgb2lab(keyword2rgb(args));}
function keyword2xyz(args){return rgb2xyz(keyword2rgb(args));}
var cssKeywords={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};var reverseKeywords={};for(var key in cssKeywords){reverseKeywords[JSON.stringify(cssKeywords[key])]=key;}},{}],4:[function(require,module,exports){var conversions=require(3);var convert=function(){return new Converter();}
for(var func in conversions){convert[func+"Raw"]=(function(func){return function(arg){if(typeof arg=="number")
arg=Array.prototype.slice.call(arguments);return conversions[func](arg);}})(func);var pair=/(\w+)2(\w+)/.exec(func),from=pair[1],to=pair[2];convert[from]=convert[from]||{};convert[from][to]=convert[func]=(function(func){return function(arg){if(typeof arg=="number")
arg=Array.prototype.slice.call(arguments);var val=conversions[func](arg);if(typeof val=="string"||val===undefined)
return val;for(var i=0;i<val.length;i++)
val[i]=Math.round(val[i]);return val;}})(func);}
var Converter=function(){this.convs={};};Converter.prototype.routeSpace=function(space,args){var values=args[0];if(values===undefined){return this.getValues(space);}
if(typeof values=="number"){values=Array.prototype.slice.call(args);}
return this.setValues(space,values);};Converter.prototype.setValues=function(space,values){this.space=space;this.convs={};this.convs[space]=values;return this;};Converter.prototype.getValues=function(space){var vals=this.convs[space];if(!vals){var fspace=this.space,from=this.convs[fspace];vals=convert[fspace][space](from);this.convs[space]=vals;}
return vals;};["rgb","hsl","hsv","cmyk","keyword"].forEach(function(space){Converter.prototype[space]=function(vals){return this.routeSpace(space,arguments);}});module.exports=convert;},{"3":3}],5:[function(require,module,exports){module.exports={"aliceblue":[240,248,255],"antiquewhite":[250,235,215],"aqua":[0,255,255],"aquamarine":[127,255,212],"azure":[240,255,255],"beige":[245,245,220],"bisque":[255,228,196],"black":[0,0,0],"blanchedalmond":[255,235,205],"blue":[0,0,255],"blueviolet":[138,43,226],"brown":[165,42,42],"burlywood":[222,184,135],"cadetblue":[95,158,160],"chartreuse":[127,255,0],"chocolate":[210,105,30],"coral":[255,127,80],"cornflowerblue":[100,149,237],"cornsilk":[255,248,220],"crimson":[220,20,60],"cyan":[0,255,255],"darkblue":[0,0,139],"darkcyan":[0,139,139],"darkgoldenrod":[184,134,11],"darkgray":[169,169,169],"darkgreen":[0,100,0],"darkgrey":[169,169,169],"darkkhaki":[189,183,107],"darkmagenta":[139,0,139],"darkolivegreen":[85,107,47],"darkorange":[255,140,0],"darkorchid":[153,50,204],"darkred":[139,0,0],"darksalmon":[233,150,122],"darkseagreen":[143,188,143],"darkslateblue":[72,61,139],"darkslategray":[47,79,79],"darkslategrey":[47,79,79],"darkturquoise":[0,206,209],"darkviolet":[148,0,211],"deeppink":[255,20,147],"deepskyblue":[0,191,255],"dimgray":[105,105,105],"dimgrey":[105,105,105],"dodgerblue":[30,144,255],"firebrick":[178,34,34],"floralwhite":[255,250,240],"forestgreen":[34,139,34],"fuchsia":[255,0,255],"gainsboro":[220,220,220],"ghostwhite":[248,248,255],"gold":[255,215,0],"goldenrod":[218,165,32],"gray":[128,128,128],"green":[0,128,0],"greenyellow":[173,255,47],"grey":[128,128,128],"honeydew":[240,255,240],"hotpink":[255,105,180],"indianred":[205,92,92],"indigo":[75,0,130],"ivory":[255,255,240],"khaki":[240,230,140],"lavender":[230,230,250],"lavenderblush":[255,240,245],"lawngreen":[124,252,0],"lemonchiffon":[255,250,205],"lightblue":[173,216,230],"lightcoral":[240,128,128],"lightcyan":[224,255,255],"lightgoldenrodyellow":[250,250,210],"lightgray":[211,211,211],"lightgreen":[144,238,144],"lightgrey":[211,211,211],"lightpink":[255,182,193],"lightsalmon":[255,160,122],"lightseagreen":[32,178,170],"lightskyblue":[135,206,250],"lightslategray":[119,136,153],"lightslategrey":[119,136,153],"lightsteelblue":[176,196,222],"lightyellow":[255,255,224],"lime":[0,255,0],"limegreen":[50,205,50],"linen":[250,240,230],"magenta":[255,0,255],"maroon":[128,0,0],"mediumaquamarine":[102,205,170],"mediumblue":[0,0,205],"mediumorchid":[186,85,211],"mediumpurple":[147,112,219],"mediumseagreen":[60,179,113],"mediumslateblue":[123,104,238],"mediumspringgreen":[0,250,154],"mediumturquoise":[72,209,204],"mediumvioletred":[199,21,133],"midnightblue":[25,25,112],"mintcream":[245,255,250],"mistyrose":[255,228,225],"moccasin":[255,228,181],"navajowhite":[255,222,173],"navy":[0,0,128],"oldlace":[253,245,230],"olive":[128,128,0],"olivedrab":[107,142,35],"orange":[255,165,0],"orangered":[255,69,0],"orchid":[218,112,214],"palegoldenrod":[238,232,170],"palegreen":[152,251,152],"paleturquoise":[175,238,238],"palevioletred":[219,112,147],"papayawhip":[255,239,213],"peachpuff":[255,218,185],"peru":[205,133,63],"pink":[255,192,203],"plum":[221,160,221],"powderblue":[176,224,230],"purple":[128,0,128],"rebeccapurple":[102,51,153],"red":[255,0,0],"rosybrown":[188,143,143],"royalblue":[65,105,225],"saddlebrown":[139,69,19],"salmon":[250,128,114],"sandybrown":[244,164,96],"seagreen":[46,139,87],"seashell":[255,245,238],"sienna":[160,82,45],"silver":[192,192,192],"skyblue":[135,206,235],"slateblue":[106,90,205],"slategray":[112,128,144],"slategrey":[112,128,144],"snow":[255,250,250],"springgreen":[0,255,127],"steelblue":[70,130,180],"tan":[210,180,140],"teal":[0,128,128],"thistle":[216,191,216],"tomato":[255,99,71],"turquoise":[64,224,208],"violet":[238,130,238],"wheat":[245,222,179],"white":[255,255,255],"whitesmoke":[245,245,245],"yellow":[255,255,0],"yellowgreen":[154,205,50]};},{}],6:[function(require,module,exports){;(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):global.moment=factory()}(this,(function(){'use strict';var hookCallback;function hooks(){return hookCallback.apply(null,arguments);}
function setHookCallback(callback){hookCallback=callback;}
function isArray(input){return input instanceof Array||Object.prototype.toString.call(input)==='[object Array]';}
function isObject(input){return input!=null&&Object.prototype.toString.call(input)==='[object Object]';}
function isObjectEmpty(obj){var k;for(k in obj){return false;}
return true;}
function isUndefined(input){return input===void 0;}
function isNumber(input){return typeof input==='number'||Object.prototype.toString.call(input)==='[object Number]';}
function isDate(input){return input instanceof Date||Object.prototype.toString.call(input)==='[object Date]';}
function map(arr,fn){var res=[],i;for(i=0;i<arr.length;++i){res.push(fn(arr[i],i));}
return res;}
function hasOwnProp(a,b){return Object.prototype.hasOwnProperty.call(a,b);}
function extend(a,b){for(var i in b){if(hasOwnProp(b,i)){a[i]=b[i];}}
if(hasOwnProp(b,'toString')){a.toString=b.toString;}
if(hasOwnProp(b,'valueOf')){a.valueOf=b.valueOf;}
return a;}
function createUTC(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,true).utc();}
function defaultParsingFlags(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false,parsedDateParts:[],meridiem:null,rfc2822:false,weekdayMismatch:false};}
function getParsingFlags(m){if(m._pf==null){m._pf=defaultParsingFlags();}
return m._pf;}
var some;if(Array.prototype.some){some=Array.prototype.some;}else{some=function(fun){var t=Object(this);var len=t.length>>>0;for(var i=0;i<len;i++){if(i in t&&fun.call(this,t[i],i,t)){return true;}}
return false;};}
var some$1=some;function isValid(m){if(m._isValid==null){var flags=getParsingFlags(m);var parsedParts=some$1.call(flags.parsedDateParts,function(i){return i!=null;});var isNowValid=!isNaN(m._d.getTime())&&flags.overflow<0&&!flags.empty&&!flags.invalidMonth&&!flags.invalidWeekday&&!flags.nullInput&&!flags.invalidFormat&&!flags.userInvalidated&&(!flags.meridiem||(flags.meridiem&&parsedParts));if(m._strict){isNowValid=isNowValid&&flags.charsLeftOver===0&&flags.unusedTokens.length===0&&flags.bigHour===undefined;}
if(Object.isFrozen==null||!Object.isFrozen(m)){m._isValid=isNowValid;}
else{return isNowValid;}}
return m._isValid;}
function createInvalid(flags){var m=createUTC(NaN);if(flags!=null){extend(getParsingFlags(m),flags);}
else{getParsingFlags(m).userInvalidated=true;}
return m;}
var momentProperties=hooks.momentProperties=[];function copyConfig(to,from){var i,prop,val;if(!isUndefined(from._isAMomentObject)){to._isAMomentObject=from._isAMomentObject;}
if(!isUndefined(from._i)){to._i=from._i;}
if(!isUndefined(from._f)){to._f=from._f;}
if(!isUndefined(from._l)){to._l=from._l;}
if(!isUndefined(from._strict)){to._strict=from._strict;}
if(!isUndefined(from._tzm)){to._tzm=from._tzm;}
if(!isUndefined(from._isUTC)){to._isUTC=from._isUTC;}
if(!isUndefined(from._offset)){to._offset=from._offset;}
if(!isUndefined(from._pf)){to._pf=getParsingFlags(from);}
if(!isUndefined(from._locale)){to._locale=from._locale;}
if(momentProperties.length>0){for(i=0;i<momentProperties.length;i++){prop=momentProperties[i];val=from[prop];if(!isUndefined(val)){to[prop]=val;}}}
return to;}
var updateInProgress=false;function Moment(config){copyConfig(this,config);this._d=new Date(config._d!=null?config._d.getTime():NaN);if(!this.isValid()){this._d=new Date(NaN);}
if(updateInProgress===false){updateInProgress=true;hooks.updateOffset(this);updateInProgress=false;}}
function isMoment(obj){return obj instanceof Moment||(obj!=null&&obj._isAMomentObject!=null);}
function absFloor(number){if(number<0){return Math.ceil(number)||0;}else{return Math.floor(number);}}
function toInt(argumentForCoercion){var coercedNumber=+argumentForCoercion,value=0;if(coercedNumber!==0&&isFinite(coercedNumber)){value=absFloor(coercedNumber);}
return value;}
function compareArrays(array1,array2,dontConvert){var len=Math.min(array1.length,array2.length),lengthDiff=Math.abs(array1.length-array2.length),diffs=0,i;for(i=0;i<len;i++){if((dontConvert&&array1[i]!==array2[i])||(!dontConvert&&toInt(array1[i])!==toInt(array2[i]))){diffs++;}}
return diffs+lengthDiff;}
function warn(msg){if(hooks.suppressDeprecationWarnings===false&&(typeof console!=='undefined')&&console.warn){console.warn('Deprecation warning: '+msg);}}
function deprecate(msg,fn){var firstTime=true;return extend(function(){if(hooks.deprecationHandler!=null){hooks.deprecationHandler(null,msg);}
if(firstTime){var args=[];var arg;for(var i=0;i<arguments.length;i++){arg='';if(typeof arguments[i]==='object'){arg+='\n['+i+'] ';for(var key in arguments[0]){arg+=key+': '+arguments[0][key]+', ';}
arg=arg.slice(0,-2);}else{arg=arguments[i];}
args.push(arg);}
warn(msg+'\nArguments: '+Array.prototype.slice.call(args).join('')+'\n'+(new Error()).stack);firstTime=false;}
return fn.apply(this,arguments);},fn);}
var deprecations={};function deprecateSimple(name,msg){if(hooks.deprecationHandler!=null){hooks.deprecationHandler(name,msg);}
if(!deprecations[name]){warn(msg);deprecations[name]=true;}}
hooks.suppressDeprecationWarnings=false;hooks.deprecationHandler=null;function isFunction(input){return input instanceof Function||Object.prototype.toString.call(input)==='[object Function]';}
function set(config){var prop,i;for(i in config){prop=config[i];if(isFunction(prop)){this[i]=prop;}else{this['_'+i]=prop;}}
this._config=config;this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+'|'+(/\d{1,2}/).source);}
function mergeConfigs(parentConfig,childConfig){var res=extend({},parentConfig),prop;for(prop in childConfig){if(hasOwnProp(childConfig,prop)){if(isObject(parentConfig[prop])&&isObject(childConfig[prop])){res[prop]={};extend(res[prop],parentConfig[prop]);extend(res[prop],childConfig[prop]);}else if(childConfig[prop]!=null){res[prop]=childConfig[prop];}else{delete res[prop];}}}
for(prop in parentConfig){if(hasOwnProp(parentConfig,prop)&&!hasOwnProp(childConfig,prop)&&isObject(parentConfig[prop])){res[prop]=extend({},res[prop]);}}
return res;}
function Locale(config){if(config!=null){this.set(config);}}
var keys;if(Object.keys){keys=Object.keys;}else{keys=function(obj){var i,res=[];for(i in obj){if(hasOwnProp(obj,i)){res.push(i);}}
return res;};}
var keys$1=keys;var defaultCalendar={sameDay:'[Today at] LT',nextDay:'[Tomorrow at] LT',nextWeek:'dddd [at] LT',lastDay:'[Yesterday at] LT',lastWeek:'[Last] dddd [at] LT',sameElse:'L'};function calendar(key,mom,now){var output=this._calendar[key]||this._calendar['sameElse'];return isFunction(output)?output.call(mom,now):output;}
var defaultLongDateFormat={LTS:'h:mm:ss A',LT:'h:mm A',L:'MM/DD/YYYY',LL:'MMMM D, YYYY',LLL:'MMMM D, YYYY h:mm A',LLLL:'dddd, MMMM D, YYYY h:mm A'};function longDateFormat(key){var format=this._longDateFormat[key],formatUpper=this._longDateFormat[key.toUpperCase()];if(format||!formatUpper){return format;}
this._longDateFormat[key]=formatUpper.replace(/MMMM|MM|DD|dddd/g,function(val){return val.slice(1);});return this._longDateFormat[key];}
var defaultInvalidDate='Invalid date';function invalidDate(){return this._invalidDate;}
var defaultOrdinal='%d';var defaultDayOfMonthOrdinalParse=/\d{1,2}/;function ordinal(number){return this._ordinal.replace('%d',number);}
var defaultRelativeTime={future:'in %s',past:'%s ago',s:'a few seconds',ss:'%d seconds',m:'a minute',mm:'%d minutes',h:'an hour',hh:'%d hours',d:'a day',dd:'%d days',M:'a month',MM:'%d months',y:'a year',yy:'%d years'};function relativeTime(number,withoutSuffix,string,isFuture){var output=this._relativeTime[string];return(isFunction(output))?output(number,withoutSuffix,string,isFuture):output.replace(/%d/i,number);}
function pastFuture(diff,output){var format=this._relativeTime[diff>0?'future':'past'];return isFunction(format)?format(output):format.replace(/%s/i,output);}
var aliases={};function addUnitAlias(unit,shorthand){var lowerCase=unit.toLowerCase();aliases[lowerCase]=aliases[lowerCase+'s']=aliases[shorthand]=unit;}
function normalizeUnits(units){return typeof units==='string'?aliases[units]||aliases[units.toLowerCase()]:undefined;}
function normalizeObjectUnits(inputObject){var normalizedInput={},normalizedProp,prop;for(prop in inputObject){if(hasOwnProp(inputObject,prop)){normalizedProp=normalizeUnits(prop);if(normalizedProp){normalizedInput[normalizedProp]=inputObject[prop];}}}
return normalizedInput;}
var priorities={};function addUnitPriority(unit,priority){priorities[unit]=priority;}
function getPrioritizedUnits(unitsObj){var units=[];for(var u in unitsObj){units.push({unit:u,priority:priorities[u]});}
units.sort(function(a,b){return a.priority-b.priority;});return units;}
function makeGetSet(unit,keepTime){return function(value){if(value!=null){set$1(this,unit,value);hooks.updateOffset(this,keepTime);return this;}else{return get(this,unit);}};}
function get(mom,unit){return mom.isValid()?mom._d['get'+(mom._isUTC?'UTC':'')+unit]():NaN;}
function set$1(mom,unit,value){if(mom.isValid()){mom._d['set'+(mom._isUTC?'UTC':'')+unit](value);}}
function stringGet(units){units=normalizeUnits(units);if(isFunction(this[units])){return this[units]();}
return this;}
function stringSet(units,value){if(typeof units==='object'){units=normalizeObjectUnits(units);var prioritized=getPrioritizedUnits(units);for(var i=0;i<prioritized.length;i++){this[prioritized[i].unit](units[prioritized[i].unit]);}}else{units=normalizeUnits(units);if(isFunction(this[units])){return this[units](value);}}
return this;}
function zeroFill(number,targetLength,forceSign){var absNumber=''+Math.abs(number),zerosToFill=targetLength-absNumber.length,sign=number>=0;return(sign?(forceSign?'+':''):'-')+Math.pow(10,Math.max(0,zerosToFill)).toString().substr(1)+absNumber;}
var formattingTokens=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;var localFormattingTokens=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;var formatFunctions={};var formatTokenFunctions={};function addFormatToken(token,padded,ordinal,callback){var func=callback;if(typeof callback==='string'){func=function(){return this[callback]();};}
if(token){formatTokenFunctions[token]=func;}
if(padded){formatTokenFunctions[padded[0]]=function(){return zeroFill(func.apply(this,arguments),padded[1],padded[2]);};}
if(ordinal){formatTokenFunctions[ordinal]=function(){return this.localeData().ordinal(func.apply(this,arguments),token);};}}
function removeFormattingTokens(input){if(input.match(/\[[\s\S]/)){return input.replace(/^\[|\]$/g,'');}
return input.replace(/\\/g,'');}
function makeFormatFunction(format){var array=format.match(formattingTokens),i,length;for(i=0,length=array.length;i<length;i++){if(formatTokenFunctions[array[i]]){array[i]=formatTokenFunctions[array[i]];}else{array[i]=removeFormattingTokens(array[i]);}}
return function(mom){var output='',i;for(i=0;i<length;i++){output+=isFunction(array[i])?array[i].call(mom,format):array[i];}
return output;};}
function formatMoment(m,format){if(!m.isValid()){return m.localeData().invalidDate();}
format=expandFormat(format,m.localeData());formatFunctions[format]=formatFunctions[format]||makeFormatFunction(format);return formatFunctions[format](m);}
function expandFormat(format,locale){var i=5;function replaceLongDateFormatTokens(input){return locale.longDateFormat(input)||input;}
localFormattingTokens.lastIndex=0;while(i>=0&&localFormattingTokens.test(format)){format=format.replace(localFormattingTokens,replaceLongDateFormatTokens);localFormattingTokens.lastIndex=0;i-=1;}
return format;}
var match1=/\d/;var match2=/\d\d/;var match3=/\d{3}/;var match4=/\d{4}/;var match6=/[+-]?\d{6}/;var match1to2=/\d\d?/;var match3to4=/\d\d\d\d?/;var match5to6=/\d\d\d\d\d\d?/;var match1to3=/\d{1,3}/;var match1to4=/\d{1,4}/;var match1to6=/[+-]?\d{1,6}/;var matchUnsigned=/\d+/;var matchSigned=/[+-]?\d+/;var matchOffset=/Z|[+-]\d\d:?\d\d/gi;var matchShortOffset=/Z|[+-]\d\d(?::?\d\d)?/gi;var matchTimestamp=/[+-]?\d+(\.\d{1,3})?/;var matchWord=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;var regexes={};function addRegexToken(token,regex,strictRegex){regexes[token]=isFunction(regex)?regex:function(isStrict,localeData){return(isStrict&&strictRegex)?strictRegex:regex;};}
function getParseRegexForToken(token,config){if(!hasOwnProp(regexes,token)){return new RegExp(unescapeFormat(token));}
return regexes[token](config._strict,config._locale);}
function unescapeFormat(s){return regexEscape(s.replace('\\','').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(matched,p1,p2,p3,p4){return p1||p2||p3||p4;}));}
function regexEscape(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');}
var tokens={};function addParseToken(token,callback){var i,func=callback;if(typeof token==='string'){token=[token];}
if(isNumber(callback)){func=function(input,array){array[callback]=toInt(input);};}
for(i=0;i<token.length;i++){tokens[token[i]]=func;}}
function addWeekParseToken(token,callback){addParseToken(token,function(input,array,config,token){config._w=config._w||{};callback(input,config._w,config,token);});}
function addTimeToArrayFromToken(token,input,config){if(input!=null&&hasOwnProp(tokens,token)){tokens[token](input,config._a,config,token);}}
var YEAR=0;var MONTH=1;var DATE=2;var HOUR=3;var MINUTE=4;var SECOND=5;var MILLISECOND=6;var WEEK=7;var WEEKDAY=8;var indexOf;if(Array.prototype.indexOf){indexOf=Array.prototype.indexOf;}else{indexOf=function(o){var i;for(i=0;i<this.length;++i){if(this[i]===o){return i;}}
return-1;};}
var indexOf$1=indexOf;function daysInMonth(year,month){return new Date(Date.UTC(year,month+1,0)).getUTCDate();}
addFormatToken('M',['MM',2],'Mo',function(){return this.month()+1;});addFormatToken('MMM',0,0,function(format){return this.localeData().monthsShort(this,format);});addFormatToken('MMMM',0,0,function(format){return this.localeData().months(this,format);});addUnitAlias('month','M');addUnitPriority('month',8);addRegexToken('M',match1to2);addRegexToken('MM',match1to2,match2);addRegexToken('MMM',function(isStrict,locale){return locale.monthsShortRegex(isStrict);});addRegexToken('MMMM',function(isStrict,locale){return locale.monthsRegex(isStrict);});addParseToken(['M','MM'],function(input,array){array[MONTH]=toInt(input)-1;});addParseToken(['MMM','MMMM'],function(input,array,config,token){var month=config._locale.monthsParse(input,token,config._strict);if(month!=null){array[MONTH]=month;}else{getParsingFlags(config).invalidMonth=input;}});var MONTHS_IN_FORMAT=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;var defaultLocaleMonths='January_February_March_April_May_June_July_August_September_October_November_December'.split('_');function localeMonths(m,format){if(!m){return isArray(this._months)?this._months:this._months['standalone'];}
return isArray(this._months)?this._months[m.month()]:this._months[(this._months.isFormat||MONTHS_IN_FORMAT).test(format)?'format':'standalone'][m.month()];}
var defaultLocaleMonthsShort='Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');function localeMonthsShort(m,format){if(!m){return isArray(this._monthsShort)?this._monthsShort:this._monthsShort['standalone'];}
return isArray(this._monthsShort)?this._monthsShort[m.month()]:this._monthsShort[MONTHS_IN_FORMAT.test(format)?'format':'standalone'][m.month()];}
function handleStrictParse(monthName,format,strict){var i,ii,mom,llc=monthName.toLocaleLowerCase();if(!this._monthsParse){this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[];for(i=0;i<12;++i){mom=createUTC([2000,i]);this._shortMonthsParse[i]=this.monthsShort(mom,'').toLocaleLowerCase();this._longMonthsParse[i]=this.months(mom,'').toLocaleLowerCase();}}
if(strict){if(format==='MMM'){ii=indexOf$1.call(this._shortMonthsParse,llc);return ii!==-1?ii:null;}else{ii=indexOf$1.call(this._longMonthsParse,llc);return ii!==-1?ii:null;}}else{if(format==='MMM'){ii=indexOf$1.call(this._shortMonthsParse,llc);if(ii!==-1){return ii;}
ii=indexOf$1.call(this._longMonthsParse,llc);return ii!==-1?ii:null;}else{ii=indexOf$1.call(this._longMonthsParse,llc);if(ii!==-1){return ii;}
ii=indexOf$1.call(this._shortMonthsParse,llc);return ii!==-1?ii:null;}}}
function localeMonthsParse(monthName,format,strict){var i,mom,regex;if(this._monthsParseExact){return handleStrictParse.call(this,monthName,format,strict);}
if(!this._monthsParse){this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[];}
for(i=0;i<12;i++){mom=createUTC([2000,i]);if(strict&&!this._longMonthsParse[i]){this._longMonthsParse[i]=new RegExp('^'+this.months(mom,'').replace('.','')+'$','i');this._shortMonthsParse[i]=new RegExp('^'+this.monthsShort(mom,'').replace('.','')+'$','i');}
if(!strict&&!this._monthsParse[i]){regex='^'+this.months(mom,'')+'|^'+this.monthsShort(mom,'');this._monthsParse[i]=new RegExp(regex.replace('.',''),'i');}
if(strict&&format==='MMMM'&&this._longMonthsParse[i].test(monthName)){return i;}else if(strict&&format==='MMM'&&this._shortMonthsParse[i].test(monthName)){return i;}else if(!strict&&this._monthsParse[i].test(monthName)){return i;}}}
function setMonth(mom,value){var dayOfMonth;if(!mom.isValid()){return mom;}
if(typeof value==='string'){if(/^\d+$/.test(value)){value=toInt(value);}else{value=mom.localeData().monthsParse(value);if(!isNumber(value)){return mom;}}}
dayOfMonth=Math.min(mom.date(),daysInMonth(mom.year(),value));mom._d['set'+(mom._isUTC?'UTC':'')+'Month'](value,dayOfMonth);return mom;}
function getSetMonth(value){if(value!=null){setMonth(this,value);hooks.updateOffset(this,true);return this;}else{return get(this,'Month');}}
function getDaysInMonth(){return daysInMonth(this.year(),this.month());}
var defaultMonthsShortRegex=matchWord;function monthsShortRegex(isStrict){if(this._monthsParseExact){if(!hasOwnProp(this,'_monthsRegex')){computeMonthsParse.call(this);}
if(isStrict){return this._monthsShortStrictRegex;}else{return this._monthsShortRegex;}}else{if(!hasOwnProp(this,'_monthsShortRegex')){this._monthsShortRegex=defaultMonthsShortRegex;}
return this._monthsShortStrictRegex&&isStrict?this._monthsShortStrictRegex:this._monthsShortRegex;}}
var defaultMonthsRegex=matchWord;function monthsRegex(isStrict){if(this._monthsParseExact){if(!hasOwnProp(this,'_monthsRegex')){computeMonthsParse.call(this);}
if(isStrict){return this._monthsStrictRegex;}else{return this._monthsRegex;}}else{if(!hasOwnProp(this,'_monthsRegex')){this._monthsRegex=defaultMonthsRegex;}
return this._monthsStrictRegex&&isStrict?this._monthsStrictRegex:this._monthsRegex;}}
function computeMonthsParse(){function cmpLenRev(a,b){return b.length-a.length;}
var shortPieces=[],longPieces=[],mixedPieces=[],i,mom;for(i=0;i<12;i++){mom=createUTC([2000,i]);shortPieces.push(this.monthsShort(mom,''));longPieces.push(this.months(mom,''));mixedPieces.push(this.months(mom,''));mixedPieces.push(this.monthsShort(mom,''));}
shortPieces.sort(cmpLenRev);longPieces.sort(cmpLenRev);mixedPieces.sort(cmpLenRev);for(i=0;i<12;i++){shortPieces[i]=regexEscape(shortPieces[i]);longPieces[i]=regexEscape(longPieces[i]);}
for(i=0;i<24;i++){mixedPieces[i]=regexEscape(mixedPieces[i]);}
this._monthsRegex=new RegExp('^('+mixedPieces.join('|')+')','i');this._monthsShortRegex=this._monthsRegex;this._monthsStrictRegex=new RegExp('^('+longPieces.join('|')+')','i');this._monthsShortStrictRegex=new RegExp('^('+shortPieces.join('|')+')','i');}
addFormatToken('Y',0,0,function(){var y=this.year();return y<=9999?''+y:'+'+y;});addFormatToken(0,['YY',2],0,function(){return this.year()%100;});addFormatToken(0,['YYYY',4],0,'year');addFormatToken(0,['YYYYY',5],0,'year');addFormatToken(0,['YYYYYY',6,true],0,'year');addUnitAlias('year','y');addUnitPriority('year',1);addRegexToken('Y',matchSigned);addRegexToken('YY',match1to2,match2);addRegexToken('YYYY',match1to4,match4);addRegexToken('YYYYY',match1to6,match6);addRegexToken('YYYYYY',match1to6,match6);addParseToken(['YYYYY','YYYYYY'],YEAR);addParseToken('YYYY',function(input,array){array[YEAR]=input.length===2?hooks.parseTwoDigitYear(input):toInt(input);});addParseToken('YY',function(input,array){array[YEAR]=hooks.parseTwoDigitYear(input);});addParseToken('Y',function(input,array){array[YEAR]=parseInt(input,10);});function daysInYear(year){return isLeapYear(year)?366:365;}
function isLeapYear(year){return(year%4===0&&year%100!==0)||year%400===0;}
hooks.parseTwoDigitYear=function(input){return toInt(input)+(toInt(input)>68?1900:2000);};var getSetYear=makeGetSet('FullYear',true);function getIsLeapYear(){return isLeapYear(this.year());}
function createDate(y,m,d,h,M,s,ms){var date=new Date(y,m,d,h,M,s,ms);if(y<100&&y>=0&&isFinite(date.getFullYear())){date.setFullYear(y);}
return date;}
function createUTCDate(y){var date=new Date(Date.UTC.apply(null,arguments));if(y<100&&y>=0&&isFinite(date.getUTCFullYear())){date.setUTCFullYear(y);}
return date;}
function firstWeekOffset(year,dow,doy){var
fwd=7+dow-doy,fwdlw=(7+createUTCDate(year,0,fwd).getUTCDay()-dow)%7;return-fwdlw+fwd-1;}
function dayOfYearFromWeeks(year,week,weekday,dow,doy){var localWeekday=(7+weekday-dow)%7,weekOffset=firstWeekOffset(year,dow,doy),dayOfYear=1+7*(week-1)+localWeekday+weekOffset,resYear,resDayOfYear;if(dayOfYear<=0){resYear=year-1;resDayOfYear=daysInYear(resYear)+dayOfYear;}else if(dayOfYear>daysInYear(year)){resYear=year+1;resDayOfYear=dayOfYear-daysInYear(year);}else{resYear=year;resDayOfYear=dayOfYear;}
return{year:resYear,dayOfYear:resDayOfYear};}
function weekOfYear(mom,dow,doy){var weekOffset=firstWeekOffset(mom.year(),dow,doy),week=Math.floor((mom.dayOfYear()-weekOffset-1)/7)+1,resWeek,resYear;if(week<1){resYear=mom.year()-1;resWeek=week+weeksInYear(resYear,dow,doy);}else if(week>weeksInYear(mom.year(),dow,doy)){resWeek=week-weeksInYear(mom.year(),dow,doy);resYear=mom.year()+1;}else{resYear=mom.year();resWeek=week;}
return{week:resWeek,year:resYear};}
function weeksInYear(year,dow,doy){var weekOffset=firstWeekOffset(year,dow,doy),weekOffsetNext=firstWeekOffset(year+1,dow,doy);return(daysInYear(year)-weekOffset+weekOffsetNext)/7;}
addFormatToken('w',['ww',2],'wo','week');addFormatToken('W',['WW',2],'Wo','isoWeek');addUnitAlias('week','w');addUnitAlias('isoWeek','W');addUnitPriority('week',5);addUnitPriority('isoWeek',5);addRegexToken('w',match1to2);addRegexToken('ww',match1to2,match2);addRegexToken('W',match1to2);addRegexToken('WW',match1to2,match2);addWeekParseToken(['w','ww','W','WW'],function(input,week,config,token){week[token.substr(0,1)]=toInt(input);});function localeWeek(mom){return weekOfYear(mom,this._week.dow,this._week.doy).week;}
var defaultLocaleWeek={dow:0,doy:6};function localeFirstDayOfWeek(){return this._week.dow;}
function localeFirstDayOfYear(){return this._week.doy;}
function getSetWeek(input){var week=this.localeData().week(this);return input==null?week:this.add((input-week)*7,'d');}
function getSetISOWeek(input){var week=weekOfYear(this,1,4).week;return input==null?week:this.add((input-week)*7,'d');}
addFormatToken('d',0,'do','day');addFormatToken('dd',0,0,function(format){return this.localeData().weekdaysMin(this,format);});addFormatToken('ddd',0,0,function(format){return this.localeData().weekdaysShort(this,format);});addFormatToken('dddd',0,0,function(format){return this.localeData().weekdays(this,format);});addFormatToken('e',0,0,'weekday');addFormatToken('E',0,0,'isoWeekday');addUnitAlias('day','d');addUnitAlias('weekday','e');addUnitAlias('isoWeekday','E');addUnitPriority('day',11);addUnitPriority('weekday',11);addUnitPriority('isoWeekday',11);addRegexToken('d',match1to2);addRegexToken('e',match1to2);addRegexToken('E',match1to2);addRegexToken('dd',function(isStrict,locale){return locale.weekdaysMinRegex(isStrict);});addRegexToken('ddd',function(isStrict,locale){return locale.weekdaysShortRegex(isStrict);});addRegexToken('dddd',function(isStrict,locale){return locale.weekdaysRegex(isStrict);});addWeekParseToken(['dd','ddd','dddd'],function(input,week,config,token){var weekday=config._locale.weekdaysParse(input,token,config._strict);if(weekday!=null){week.d=weekday;}else{getParsingFlags(config).invalidWeekday=input;}});addWeekParseToken(['d','e','E'],function(input,week,config,token){week[token]=toInt(input);});function parseWeekday(input,locale){if(typeof input!=='string'){return input;}
if(!isNaN(input)){return parseInt(input,10);}
input=locale.weekdaysParse(input);if(typeof input==='number'){return input;}
return null;}
function parseIsoWeekday(input,locale){if(typeof input==='string'){return locale.weekdaysParse(input)%7||7;}
return isNaN(input)?null:input;}
var defaultLocaleWeekdays='Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');function localeWeekdays(m,format){if(!m){return isArray(this._weekdays)?this._weekdays:this._weekdays['standalone'];}
return isArray(this._weekdays)?this._weekdays[m.day()]:this._weekdays[this._weekdays.isFormat.test(format)?'format':'standalone'][m.day()];}
var defaultLocaleWeekdaysShort='Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');function localeWeekdaysShort(m){return(m)?this._weekdaysShort[m.day()]:this._weekdaysShort;}
var defaultLocaleWeekdaysMin='Su_Mo_Tu_We_Th_Fr_Sa'.split('_');function localeWeekdaysMin(m){return(m)?this._weekdaysMin[m.day()]:this._weekdaysMin;}
function handleStrictParse$1(weekdayName,format,strict){var i,ii,mom,llc=weekdayName.toLocaleLowerCase();if(!this._weekdaysParse){this._weekdaysParse=[];this._shortWeekdaysParse=[];this._minWeekdaysParse=[];for(i=0;i<7;++i){mom=createUTC([2000,1]).day(i);this._minWeekdaysParse[i]=this.weekdaysMin(mom,'').toLocaleLowerCase();this._shortWeekdaysParse[i]=this.weekdaysShort(mom,'').toLocaleLowerCase();this._weekdaysParse[i]=this.weekdays(mom,'').toLocaleLowerCase();}}
if(strict){if(format==='dddd'){ii=indexOf$1.call(this._weekdaysParse,llc);return ii!==-1?ii:null;}else if(format==='ddd'){ii=indexOf$1.call(this._shortWeekdaysParse,llc);return ii!==-1?ii:null;}else{ii=indexOf$1.call(this._minWeekdaysParse,llc);return ii!==-1?ii:null;}}else{if(format==='dddd'){ii=indexOf$1.call(this._weekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf$1.call(this._shortWeekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf$1.call(this._minWeekdaysParse,llc);return ii!==-1?ii:null;}else if(format==='ddd'){ii=indexOf$1.call(this._shortWeekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf$1.call(this._weekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf$1.call(this._minWeekdaysParse,llc);return ii!==-1?ii:null;}else{ii=indexOf$1.call(this._minWeekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf$1.call(this._weekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf$1.call(this._shortWeekdaysParse,llc);return ii!==-1?ii:null;}}}
function localeWeekdaysParse(weekdayName,format,strict){var i,mom,regex;if(this._weekdaysParseExact){return handleStrictParse$1.call(this,weekdayName,format,strict);}
if(!this._weekdaysParse){this._weekdaysParse=[];this._minWeekdaysParse=[];this._shortWeekdaysParse=[];this._fullWeekdaysParse=[];}
for(i=0;i<7;i++){mom=createUTC([2000,1]).day(i);if(strict&&!this._fullWeekdaysParse[i]){this._fullWeekdaysParse[i]=new RegExp('^'+this.weekdays(mom,'').replace('.','\.?')+'$','i');this._shortWeekdaysParse[i]=new RegExp('^'+this.weekdaysShort(mom,'').replace('.','\.?')+'$','i');this._minWeekdaysParse[i]=new RegExp('^'+this.weekdaysMin(mom,'').replace('.','\.?')+'$','i');}
if(!this._weekdaysParse[i]){regex='^'+this.weekdays(mom,'')+'|^'+this.weekdaysShort(mom,'')+'|^'+this.weekdaysMin(mom,'');this._weekdaysParse[i]=new RegExp(regex.replace('.',''),'i');}
if(strict&&format==='dddd'&&this._fullWeekdaysParse[i].test(weekdayName)){return i;}else if(strict&&format==='ddd'&&this._shortWeekdaysParse[i].test(weekdayName)){return i;}else if(strict&&format==='dd'&&this._minWeekdaysParse[i].test(weekdayName)){return i;}else if(!strict&&this._weekdaysParse[i].test(weekdayName)){return i;}}}
function getSetDayOfWeek(input){if(!this.isValid()){return input!=null?this:NaN;}
var day=this._isUTC?this._d.getUTCDay():this._d.getDay();if(input!=null){input=parseWeekday(input,this.localeData());return this.add(input-day,'d');}else{return day;}}
function getSetLocaleDayOfWeek(input){if(!this.isValid()){return input!=null?this:NaN;}
var weekday=(this.day()+7-this.localeData()._week.dow)%7;return input==null?weekday:this.add(input-weekday,'d');}
function getSetISODayOfWeek(input){if(!this.isValid()){return input!=null?this:NaN;}
if(input!=null){var weekday=parseIsoWeekday(input,this.localeData());return this.day(this.day()%7?weekday:weekday-7);}else{return this.day()||7;}}
var defaultWeekdaysRegex=matchWord;function weekdaysRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,'_weekdaysRegex')){computeWeekdaysParse.call(this);}
if(isStrict){return this._weekdaysStrictRegex;}else{return this._weekdaysRegex;}}else{if(!hasOwnProp(this,'_weekdaysRegex')){this._weekdaysRegex=defaultWeekdaysRegex;}
return this._weekdaysStrictRegex&&isStrict?this._weekdaysStrictRegex:this._weekdaysRegex;}}
var defaultWeekdaysShortRegex=matchWord;function weekdaysShortRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,'_weekdaysRegex')){computeWeekdaysParse.call(this);}
if(isStrict){return this._weekdaysShortStrictRegex;}else{return this._weekdaysShortRegex;}}else{if(!hasOwnProp(this,'_weekdaysShortRegex')){this._weekdaysShortRegex=defaultWeekdaysShortRegex;}
return this._weekdaysShortStrictRegex&&isStrict?this._weekdaysShortStrictRegex:this._weekdaysShortRegex;}}
var defaultWeekdaysMinRegex=matchWord;function weekdaysMinRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,'_weekdaysRegex')){computeWeekdaysParse.call(this);}
if(isStrict){return this._weekdaysMinStrictRegex;}else{return this._weekdaysMinRegex;}}else{if(!hasOwnProp(this,'_weekdaysMinRegex')){this._weekdaysMinRegex=defaultWeekdaysMinRegex;}
return this._weekdaysMinStrictRegex&&isStrict?this._weekdaysMinStrictRegex:this._weekdaysMinRegex;}}
function computeWeekdaysParse(){function cmpLenRev(a,b){return b.length-a.length;}
var minPieces=[],shortPieces=[],longPieces=[],mixedPieces=[],i,mom,minp,shortp,longp;for(i=0;i<7;i++){mom=createUTC([2000,1]).day(i);minp=this.weekdaysMin(mom,'');shortp=this.weekdaysShort(mom,'');longp=this.weekdays(mom,'');minPieces.push(minp);shortPieces.push(shortp);longPieces.push(longp);mixedPieces.push(minp);mixedPieces.push(shortp);mixedPieces.push(longp);}
minPieces.sort(cmpLenRev);shortPieces.sort(cmpLenRev);longPieces.sort(cmpLenRev);mixedPieces.sort(cmpLenRev);for(i=0;i<7;i++){shortPieces[i]=regexEscape(shortPieces[i]);longPieces[i]=regexEscape(longPieces[i]);mixedPieces[i]=regexEscape(mixedPieces[i]);}
this._weekdaysRegex=new RegExp('^('+mixedPieces.join('|')+')','i');this._weekdaysShortRegex=this._weekdaysRegex;this._weekdaysMinRegex=this._weekdaysRegex;this._weekdaysStrictRegex=new RegExp('^('+longPieces.join('|')+')','i');this._weekdaysShortStrictRegex=new RegExp('^('+shortPieces.join('|')+')','i');this._weekdaysMinStrictRegex=new RegExp('^('+minPieces.join('|')+')','i');}
function hFormat(){return this.hours()%12||12;}
function kFormat(){return this.hours()||24;}
addFormatToken('H',['HH',2],0,'hour');addFormatToken('h',['hh',2],0,hFormat);addFormatToken('k',['kk',2],0,kFormat);addFormatToken('hmm',0,0,function(){return''+hFormat.apply(this)+zeroFill(this.minutes(),2);});addFormatToken('hmmss',0,0,function(){return''+hFormat.apply(this)+zeroFill(this.minutes(),2)+zeroFill(this.seconds(),2);});addFormatToken('Hmm',0,0,function(){return''+this.hours()+zeroFill(this.minutes(),2);});addFormatToken('Hmmss',0,0,function(){return''+this.hours()+zeroFill(this.minutes(),2)+zeroFill(this.seconds(),2);});function meridiem(token,lowercase){addFormatToken(token,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),lowercase);});}
meridiem('a',true);meridiem('A',false);addUnitAlias('hour','h');addUnitPriority('hour',13);function matchMeridiem(isStrict,locale){return locale._meridiemParse;}
addRegexToken('a',matchMeridiem);addRegexToken('A',matchMeridiem);addRegexToken('H',match1to2);addRegexToken('h',match1to2);addRegexToken('k',match1to2);addRegexToken('HH',match1to2,match2);addRegexToken('hh',match1to2,match2);addRegexToken('kk',match1to2,match2);addRegexToken('hmm',match3to4);addRegexToken('hmmss',match5to6);addRegexToken('Hmm',match3to4);addRegexToken('Hmmss',match5to6);addParseToken(['H','HH'],HOUR);addParseToken(['k','kk'],function(input,array,config){var kInput=toInt(input);array[HOUR]=kInput===24?0:kInput;});addParseToken(['a','A'],function(input,array,config){config._isPm=config._locale.isPM(input);config._meridiem=input;});addParseToken(['h','hh'],function(input,array,config){array[HOUR]=toInt(input);getParsingFlags(config).bigHour=true;});addParseToken('hmm',function(input,array,config){var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos));array[MINUTE]=toInt(input.substr(pos));getParsingFlags(config).bigHour=true;});addParseToken('hmmss',function(input,array,config){var pos1=input.length-4;var pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1));array[MINUTE]=toInt(input.substr(pos1,2));array[SECOND]=toInt(input.substr(pos2));getParsingFlags(config).bigHour=true;});addParseToken('Hmm',function(input,array,config){var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos));array[MINUTE]=toInt(input.substr(pos));});addParseToken('Hmmss',function(input,array,config){var pos1=input.length-4;var pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1));array[MINUTE]=toInt(input.substr(pos1,2));array[SECOND]=toInt(input.substr(pos2));});function localeIsPM(input){return((input+'').toLowerCase().charAt(0)==='p');}
var defaultLocaleMeridiemParse=/[ap]\.?m?\.?/i;function localeMeridiem(hours,minutes,isLower){if(hours>11){return isLower?'pm':'PM';}else{return isLower?'am':'AM';}}
var getSetHour=makeGetSet('Hours',true);var baseConfig={calendar:defaultCalendar,longDateFormat:defaultLongDateFormat,invalidDate:defaultInvalidDate,ordinal:defaultOrdinal,dayOfMonthOrdinalParse:defaultDayOfMonthOrdinalParse,relativeTime:defaultRelativeTime,months:defaultLocaleMonths,monthsShort:defaultLocaleMonthsShort,week:defaultLocaleWeek,weekdays:defaultLocaleWeekdays,weekdaysMin:defaultLocaleWeekdaysMin,weekdaysShort:defaultLocaleWeekdaysShort,meridiemParse:defaultLocaleMeridiemParse};var locales={};var localeFamilies={};var globalLocale;function normalizeLocale(key){return key?key.toLowerCase().replace('_','-'):key;}
function chooseLocale(names){var i=0,j,next,locale,split;while(i<names.length){split=normalizeLocale(names[i]).split('-');j=split.length;next=normalizeLocale(names[i+1]);next=next?next.split('-'):null;while(j>0){locale=loadLocale(split.slice(0,j).join('-'));if(locale){return locale;}
if(next&&next.length>=j&&compareArrays(split,next,true)>=j-1){break;}
j--;}
i++;}
return null;}
function loadLocale(name){var oldLocale=null;if(!locales[name]&&(typeof module!=='undefined')&&module&&module.exports){try{oldLocale=globalLocale._abbr;require('./locale/'+name);getSetGlobalLocale(oldLocale);}catch(e){}}
return locales[name];}
function getSetGlobalLocale(key,values){var data;if(key){if(isUndefined(values)){data=getLocale(key);}
else{data=defineLocale(key,values);}
if(data){globalLocale=data;}}
return globalLocale._abbr;}
function defineLocale(name,config){if(config!==null){var parentConfig=baseConfig;config.abbr=name;if(locales[name]!=null){deprecateSimple('defineLocaleOverride','use moment.updateLocale(localeName, config) to change '+'an existing locale. moment.defineLocale(localeName, '+'config) should only be used for creating a new locale '+'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');parentConfig=locales[name]._config;}else if(config.parentLocale!=null){if(locales[config.parentLocale]!=null){parentConfig=locales[config.parentLocale]._config;}else{if(!localeFamilies[config.parentLocale]){localeFamilies[config.parentLocale]=[];}
localeFamilies[config.parentLocale].push({name:name,config:config});return null;}}
locales[name]=new Locale(mergeConfigs(parentConfig,config));if(localeFamilies[name]){localeFamilies[name].forEach(function(x){defineLocale(x.name,x.config);});}
getSetGlobalLocale(name);return locales[name];}else{delete locales[name];return null;}}
function updateLocale(name,config){if(config!=null){var locale,parentConfig=baseConfig;if(locales[name]!=null){parentConfig=locales[name]._config;}
config=mergeConfigs(parentConfig,config);locale=new Locale(config);locale.parentLocale=locales[name];locales[name]=locale;getSetGlobalLocale(name);}else{if(locales[name]!=null){if(locales[name].parentLocale!=null){locales[name]=locales[name].parentLocale;}else if(locales[name]!=null){delete locales[name];}}}
return locales[name];}
function getLocale(key){var locale;if(key&&key._locale&&key._locale._abbr){key=key._locale._abbr;}
if(!key){return globalLocale;}
if(!isArray(key)){locale=loadLocale(key);if(locale){return locale;}
key=[key];}
return chooseLocale(key);}
function listLocales(){return keys$1(locales);}
function checkOverflow(m){var overflow;var a=m._a;if(a&&getParsingFlags(m).overflow===-2){overflow=a[MONTH]<0||a[MONTH]>11?MONTH:a[DATE]<1||a[DATE]>daysInMonth(a[YEAR],a[MONTH])?DATE:a[HOUR]<0||a[HOUR]>24||(a[HOUR]===24&&(a[MINUTE]!==0||a[SECOND]!==0||a[MILLISECOND]!==0))?HOUR:a[MINUTE]<0||a[MINUTE]>59?MINUTE:a[SECOND]<0||a[SECOND]>59?SECOND:a[MILLISECOND]<0||a[MILLISECOND]>999?MILLISECOND:-1;if(getParsingFlags(m)._overflowDayOfYear&&(overflow<YEAR||overflow>DATE)){overflow=DATE;}
if(getParsingFlags(m)._overflowWeeks&&overflow===-1){overflow=WEEK;}
if(getParsingFlags(m)._overflowWeekday&&overflow===-1){overflow=WEEKDAY;}
getParsingFlags(m).overflow=overflow;}
return m;}
var extendedIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;var basicIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;var tzRegex=/Z|[+-]\d\d(?::?\d\d)?/;var isoDates=[['YYYYYY-MM-DD',/[+-]\d{6}-\d\d-\d\d/],['YYYY-MM-DD',/\d{4}-\d\d-\d\d/],['GGGG-[W]WW-E',/\d{4}-W\d\d-\d/],['GGGG-[W]WW',/\d{4}-W\d\d/,false],['YYYY-DDD',/\d{4}-\d{3}/],['YYYY-MM',/\d{4}-\d\d/,false],['YYYYYYMMDD',/[+-]\d{10}/],['YYYYMMDD',/\d{8}/],['GGGG[W]WWE',/\d{4}W\d{3}/],['GGGG[W]WW',/\d{4}W\d{2}/,false],['YYYYDDD',/\d{7}/]];var isoTimes=[['HH:mm:ss.SSSS',/\d\d:\d\d:\d\d\.\d+/],['HH:mm:ss,SSSS',/\d\d:\d\d:\d\d,\d+/],['HH:mm:ss',/\d\d:\d\d:\d\d/],['HH:mm',/\d\d:\d\d/],['HHmmss.SSSS',/\d\d\d\d\d\d\.\d+/],['HHmmss,SSSS',/\d\d\d\d\d\d,\d+/],['HHmmss',/\d\d\d\d\d\d/],['HHmm',/\d\d\d\d/],['HH',/\d\d/]];var aspNetJsonRegex=/^\/?Date\((\-?\d+)/i;function configFromISO(config){var i,l,string=config._i,match=extendedIsoRegex.exec(string)||basicIsoRegex.exec(string),allowTime,dateFormat,timeFormat,tzFormat;if(match){getParsingFlags(config).iso=true;for(i=0,l=isoDates.length;i<l;i++){if(isoDates[i][1].exec(match[1])){dateFormat=isoDates[i][0];allowTime=isoDates[i][2]!==false;break;}}
if(dateFormat==null){config._isValid=false;return;}
if(match[3]){for(i=0,l=isoTimes.length;i<l;i++){if(isoTimes[i][1].exec(match[3])){timeFormat=(match[2]||' ')+isoTimes[i][0];break;}}
if(timeFormat==null){config._isValid=false;return;}}
if(!allowTime&&timeFormat!=null){config._isValid=false;return;}
if(match[4]){if(tzRegex.exec(match[4])){tzFormat='Z';}else{config._isValid=false;return;}}
config._f=dateFormat+(timeFormat||'')+(tzFormat||'');configFromStringAndFormat(config);}else{config._isValid=false;}}
var basicRfcRegex=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;function configFromRFC2822(config){var string,match,dayFormat,dateFormat,timeFormat,tzFormat;var timezones={' GMT':' +0000',' EDT':' -0400',' EST':' -0500',' CDT':' -0500',' CST':' -0600',' MDT':' -0600',' MST':' -0700',' PDT':' -0700',' PST':' -0800'};var military='YXWVUTSRQPONZABCDEFGHIKLM';var timezone,timezoneIndex;string=config._i.replace(/\([^\)]*\)|[\n\t]/g,' ').replace(/(\s\s+)/g,' ').replace(/^\s|\s$/g,'');match=basicRfcRegex.exec(string);if(match){dayFormat=match[1]?'ddd'+((match[1].length===5)?', ':' '):'';dateFormat='D MMM '+((match[2].length>10)?'YYYY ':'YY ');timeFormat='HH:mm'+(match[4]?':ss':'');if(match[1]){var momentDate=new Date(match[2]);var momentDay=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][momentDate.getDay()];if(match[1].substr(0,3)!==momentDay){getParsingFlags(config).weekdayMismatch=true;config._isValid=false;return;}}
switch(match[5].length){case 2:if(timezoneIndex===0){timezone=' +0000';}else{timezoneIndex=military.indexOf(match[5][1].toUpperCase())-12;timezone=((timezoneIndex<0)?' -':' +')+((''+timezoneIndex).replace(/^-?/,'0')).match(/..$/)[0]+'00';}
break;case 4:timezone=timezones[match[5]];break;default:timezone=timezones[' GMT'];}
match[5]=timezone;config._i=match.splice(1).join('');tzFormat=' ZZ';config._f=dayFormat+dateFormat+timeFormat+tzFormat;configFromStringAndFormat(config);getParsingFlags(config).rfc2822=true;}else{config._isValid=false;}}
function configFromString(config){var matched=aspNetJsonRegex.exec(config._i);if(matched!==null){config._d=new Date(+matched[1]);return;}
configFromISO(config);if(config._isValid===false){delete config._isValid;}else{return;}
configFromRFC2822(config);if(config._isValid===false){delete config._isValid;}else{return;}
hooks.createFromInputFallback(config);}
hooks.createFromInputFallback=deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), '+'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are '+'discouraged and will be removed in an upcoming major release. Please refer to '+'http://momentjs.com/guides/#/warnings/js-date/ for more info.',function(config){config._d=new Date(config._i+(config._useUTC?' UTC':''));});function defaults(a,b,c){if(a!=null){return a;}
if(b!=null){return b;}
return c;}
function currentDateArray(config){var nowValue=new Date(hooks.now());if(config._useUTC){return[nowValue.getUTCFullYear(),nowValue.getUTCMonth(),nowValue.getUTCDate()];}
return[nowValue.getFullYear(),nowValue.getMonth(),nowValue.getDate()];}
function configFromArray(config){var i,date,input=[],currentDate,yearToUse;if(config._d){return;}
currentDate=currentDateArray(config);if(config._w&&config._a[DATE]==null&&config._a[MONTH]==null){dayOfYearFromWeekInfo(config);}
if(config._dayOfYear!=null){yearToUse=defaults(config._a[YEAR],currentDate[YEAR]);if(config._dayOfYear>daysInYear(yearToUse)||config._dayOfYear===0){getParsingFlags(config)._overflowDayOfYear=true;}
date=createUTCDate(yearToUse,0,config._dayOfYear);config._a[MONTH]=date.getUTCMonth();config._a[DATE]=date.getUTCDate();}
for(i=0;i<3&&config._a[i]==null;++i){config._a[i]=input[i]=currentDate[i];}
for(;i<7;i++){config._a[i]=input[i]=(config._a[i]==null)?(i===2?1:0):config._a[i];}
if(config._a[HOUR]===24&&config._a[MINUTE]===0&&config._a[SECOND]===0&&config._a[MILLISECOND]===0){config._nextDay=true;config._a[HOUR]=0;}
config._d=(config._useUTC?createUTCDate:createDate).apply(null,input);if(config._tzm!=null){config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm);}
if(config._nextDay){config._a[HOUR]=24;}}
function dayOfYearFromWeekInfo(config){var w,weekYear,week,weekday,dow,doy,temp,weekdayOverflow;w=config._w;if(w.GG!=null||w.W!=null||w.E!=null){dow=1;doy=4;weekYear=defaults(w.GG,config._a[YEAR],weekOfYear(createLocal(),1,4).year);week=defaults(w.W,1);weekday=defaults(w.E,1);if(weekday<1||weekday>7){weekdayOverflow=true;}}else{dow=config._locale._week.dow;doy=config._locale._week.doy;var curWeek=weekOfYear(createLocal(),dow,doy);weekYear=defaults(w.gg,config._a[YEAR],curWeek.year);week=defaults(w.w,curWeek.week);if(w.d!=null){weekday=w.d;if(weekday<0||weekday>6){weekdayOverflow=true;}}else if(w.e!=null){weekday=w.e+dow;if(w.e<0||w.e>6){weekdayOverflow=true;}}else{weekday=dow;}}
if(week<1||week>weeksInYear(weekYear,dow,doy)){getParsingFlags(config)._overflowWeeks=true;}else if(weekdayOverflow!=null){getParsingFlags(config)._overflowWeekday=true;}else{temp=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy);config._a[YEAR]=temp.year;config._dayOfYear=temp.dayOfYear;}}
hooks.ISO_8601=function(){};hooks.RFC_2822=function(){};function configFromStringAndFormat(config){if(config._f===hooks.ISO_8601){configFromISO(config);return;}
if(config._f===hooks.RFC_2822){configFromRFC2822(config);return;}
config._a=[];getParsingFlags(config).empty=true;var string=''+config._i,i,parsedInput,tokens,token,skipped,stringLength=string.length,totalParsedInputLength=0;tokens=expandFormat(config._f,config._locale).match(formattingTokens)||[];for(i=0;i<tokens.length;i++){token=tokens[i];parsedInput=(string.match(getParseRegexForToken(token,config))||[])[0];if(parsedInput){skipped=string.substr(0,string.indexOf(parsedInput));if(skipped.length>0){getParsingFlags(config).unusedInput.push(skipped);}
string=string.slice(string.indexOf(parsedInput)+parsedInput.length);totalParsedInputLength+=parsedInput.length;}
if(formatTokenFunctions[token]){if(parsedInput){getParsingFlags(config).empty=false;}
else{getParsingFlags(config).unusedTokens.push(token);}
addTimeToArrayFromToken(token,parsedInput,config);}
else if(config._strict&&!parsedInput){getParsingFlags(config).unusedTokens.push(token);}}
getParsingFlags(config).charsLeftOver=stringLength-totalParsedInputLength;if(string.length>0){getParsingFlags(config).unusedInput.push(string);}
if(config._a[HOUR]<=12&&getParsingFlags(config).bigHour===true&&config._a[HOUR]>0){getParsingFlags(config).bigHour=undefined;}
getParsingFlags(config).parsedDateParts=config._a.slice(0);getParsingFlags(config).meridiem=config._meridiem;config._a[HOUR]=meridiemFixWrap(config._locale,config._a[HOUR],config._meridiem);configFromArray(config);checkOverflow(config);}
function meridiemFixWrap(locale,hour,meridiem){var isPm;if(meridiem==null){return hour;}
if(locale.meridiemHour!=null){return locale.meridiemHour(hour,meridiem);}else if(locale.isPM!=null){isPm=locale.isPM(meridiem);if(isPm&&hour<12){hour+=12;}
if(!isPm&&hour===12){hour=0;}
return hour;}else{return hour;}}
function configFromStringAndArray(config){var tempConfig,bestMoment,scoreToBeat,i,currentScore;if(config._f.length===0){getParsingFlags(config).invalidFormat=true;config._d=new Date(NaN);return;}
for(i=0;i<config._f.length;i++){currentScore=0;tempConfig=copyConfig({},config);if(config._useUTC!=null){tempConfig._useUTC=config._useUTC;}
tempConfig._f=config._f[i];configFromStringAndFormat(tempConfig);if(!isValid(tempConfig)){continue;}
currentScore+=getParsingFlags(tempConfig).charsLeftOver;currentScore+=getParsingFlags(tempConfig).unusedTokens.length*10;getParsingFlags(tempConfig).score=currentScore;if(scoreToBeat==null||currentScore<scoreToBeat){scoreToBeat=currentScore;bestMoment=tempConfig;}}
extend(config,bestMoment||tempConfig);}
function configFromObject(config){if(config._d){return;}
var i=normalizeObjectUnits(config._i);config._a=map([i.year,i.month,i.day||i.date,i.hour,i.minute,i.second,i.millisecond],function(obj){return obj&&parseInt(obj,10);});configFromArray(config);}
function createFromConfig(config){var res=new Moment(checkOverflow(prepareConfig(config)));if(res._nextDay){res.add(1,'d');res._nextDay=undefined;}
return res;}
function prepareConfig(config){var input=config._i,format=config._f;config._locale=config._locale||getLocale(config._l);if(input===null||(format===undefined&&input==='')){return createInvalid({nullInput:true});}
if(typeof input==='string'){config._i=input=config._locale.preparse(input);}
if(isMoment(input)){return new Moment(checkOverflow(input));}else if(isDate(input)){config._d=input;}else if(isArray(format)){configFromStringAndArray(config);}else if(format){configFromStringAndFormat(config);}else{configFromInput(config);}
if(!isValid(config)){config._d=null;}
return config;}
function configFromInput(config){var input=config._i;if(isUndefined(input)){config._d=new Date(hooks.now());}else if(isDate(input)){config._d=new Date(input.valueOf());}else if(typeof input==='string'){configFromString(config);}else if(isArray(input)){config._a=map(input.slice(0),function(obj){return parseInt(obj,10);});configFromArray(config);}else if(isObject(input)){configFromObject(config);}else if(isNumber(input)){config._d=new Date(input);}else{hooks.createFromInputFallback(config);}}
function createLocalOrUTC(input,format,locale,strict,isUTC){var c={};if(locale===true||locale===false){strict=locale;locale=undefined;}
if((isObject(input)&&isObjectEmpty(input))||(isArray(input)&&input.length===0)){input=undefined;}
c._isAMomentObject=true;c._useUTC=c._isUTC=isUTC;c._l=locale;c._i=input;c._f=format;c._strict=strict;return createFromConfig(c);}
function createLocal(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,false);}
var prototypeMin=deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',function(){var other=createLocal.apply(null,arguments);if(this.isValid()&&other.isValid()){return other<this?this:other;}else{return createInvalid();}});var prototypeMax=deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',function(){var other=createLocal.apply(null,arguments);if(this.isValid()&&other.isValid()){return other>this?this:other;}else{return createInvalid();}});function pickBy(fn,moments){var res,i;if(moments.length===1&&isArray(moments[0])){moments=moments[0];}
if(!moments.length){return createLocal();}
res=moments[0];for(i=1;i<moments.length;++i){if(!moments[i].isValid()||moments[i][fn](res)){res=moments[i];}}
return res;}
function min(){var args=[].slice.call(arguments,0);return pickBy('isBefore',args);}
function max(){var args=[].slice.call(arguments,0);return pickBy('isAfter',args);}
var now=function(){return Date.now?Date.now():+(new Date());};var ordering=['year','quarter','month','week','day','hour','minute','second','millisecond'];function isDurationValid(m){for(var key in m){if(!(ordering.indexOf(key)!==-1&&(m[key]==null||!isNaN(m[key])))){return false;}}
var unitHasDecimal=false;for(var i=0;i<ordering.length;++i){if(m[ordering[i]]){if(unitHasDecimal){return false;}
if(parseFloat(m[ordering[i]])!==toInt(m[ordering[i]])){unitHasDecimal=true;}}}
return true;}
function isValid$1(){return this._isValid;}
function createInvalid$1(){return createDuration(NaN);}
function Duration(duration){var normalizedInput=normalizeObjectUnits(duration),years=normalizedInput.year||0,quarters=normalizedInput.quarter||0,months=normalizedInput.month||0,weeks=normalizedInput.week||0,days=normalizedInput.day||0,hours=normalizedInput.hour||0,minutes=normalizedInput.minute||0,seconds=normalizedInput.second||0,milliseconds=normalizedInput.millisecond||0;this._isValid=isDurationValid(normalizedInput);this._milliseconds=+milliseconds+seconds*1e3+minutes*6e4+hours*1000*60*60;this._days=+days+weeks*7;this._months=+months+quarters*3+years*12;this._data={};this._locale=getLocale();this._bubble();}
function isDuration(obj){return obj instanceof Duration;}
function absRound(number){if(number<0){return Math.round(-1*number)*-1;}else{return Math.round(number);}}
function offset(token,separator){addFormatToken(token,0,0,function(){var offset=this.utcOffset();var sign='+';if(offset<0){offset=-offset;sign='-';}
return sign+zeroFill(~~(offset/60),2)+separator+zeroFill(~~(offset)%60,2);});}
offset('Z',':');offset('ZZ','');addRegexToken('Z',matchShortOffset);addRegexToken('ZZ',matchShortOffset);addParseToken(['Z','ZZ'],function(input,array,config){config._useUTC=true;config._tzm=offsetFromString(matchShortOffset,input);});var chunkOffset=/([\+\-]|\d\d)/gi;function offsetFromString(matcher,string){var matches=(string||'').match(matcher);if(matches===null){return null;}
var chunk=matches[matches.length-1]||[];var parts=(chunk+'').match(chunkOffset)||['-',0,0];var minutes=+(parts[1]*60)+toInt(parts[2]);return minutes===0?0:parts[0]==='+'?minutes:-minutes;}
function cloneWithOffset(input,model){var res,diff;if(model._isUTC){res=model.clone();diff=(isMoment(input)||isDate(input)?input.valueOf():createLocal(input).valueOf())-res.valueOf();res._d.setTime(res._d.valueOf()+diff);hooks.updateOffset(res,false);return res;}else{return createLocal(input).local();}}
function getDateOffset(m){return-Math.round(m._d.getTimezoneOffset()/15)*15;}
hooks.updateOffset=function(){};function getSetOffset(input,keepLocalTime,keepMinutes){var offset=this._offset||0,localAdjust;if(!this.isValid()){return input!=null?this:NaN;}
if(input!=null){if(typeof input==='string'){input=offsetFromString(matchShortOffset,input);if(input===null){return this;}}else if(Math.abs(input)<16&&!keepMinutes){input=input*60;}
if(!this._isUTC&&keepLocalTime){localAdjust=getDateOffset(this);}
this._offset=input;this._isUTC=true;if(localAdjust!=null){this.add(localAdjust,'m');}
if(offset!==input){if(!keepLocalTime||this._changeInProgress){addSubtract(this,createDuration(input-offset,'m'),1,false);}else if(!this._changeInProgress){this._changeInProgress=true;hooks.updateOffset(this,true);this._changeInProgress=null;}}
return this;}else{return this._isUTC?offset:getDateOffset(this);}}
function getSetZone(input,keepLocalTime){if(input!=null){if(typeof input!=='string'){input=-input;}
this.utcOffset(input,keepLocalTime);return this;}else{return-this.utcOffset();}}
function setOffsetToUTC(keepLocalTime){return this.utcOffset(0,keepLocalTime);}
function setOffsetToLocal(keepLocalTime){if(this._isUTC){this.utcOffset(0,keepLocalTime);this._isUTC=false;if(keepLocalTime){this.subtract(getDateOffset(this),'m');}}
return this;}
function setOffsetToParsedOffset(){if(this._tzm!=null){this.utcOffset(this._tzm,false,true);}else if(typeof this._i==='string'){var tZone=offsetFromString(matchOffset,this._i);if(tZone!=null){this.utcOffset(tZone);}
else{this.utcOffset(0,true);}}
return this;}
function hasAlignedHourOffset(input){if(!this.isValid()){return false;}
input=input?createLocal(input).utcOffset():0;return(this.utcOffset()-input)%60===0;}
function isDaylightSavingTime(){return(this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset());}
function isDaylightSavingTimeShifted(){if(!isUndefined(this._isDSTShifted)){return this._isDSTShifted;}
var c={};copyConfig(c,this);c=prepareConfig(c);if(c._a){var other=c._isUTC?createUTC(c._a):createLocal(c._a);this._isDSTShifted=this.isValid()&&compareArrays(c._a,other.toArray())>0;}else{this._isDSTShifted=false;}
return this._isDSTShifted;}
function isLocal(){return this.isValid()?!this._isUTC:false;}
function isUtcOffset(){return this.isValid()?this._isUTC:false;}
function isUtc(){return this.isValid()?this._isUTC&&this._offset===0:false;}
var aspNetRegex=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;var isoRegex=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;function createDuration(input,key){var duration=input,match=null,sign,ret,diffRes;if(isDuration(input)){duration={ms:input._milliseconds,d:input._days,M:input._months};}else if(isNumber(input)){duration={};if(key){duration[key]=input;}else{duration.milliseconds=input;}}else if(!!(match=aspNetRegex.exec(input))){sign=(match[1]==='-')?-1:1;duration={y:0,d:toInt(match[DATE])*sign,h:toInt(match[HOUR])*sign,m:toInt(match[MINUTE])*sign,s:toInt(match[SECOND])*sign,ms:toInt(absRound(match[MILLISECOND]*1000))*sign};}else if(!!(match=isoRegex.exec(input))){sign=(match[1]==='-')?-1:1;duration={y:parseIso(match[2],sign),M:parseIso(match[3],sign),w:parseIso(match[4],sign),d:parseIso(match[5],sign),h:parseIso(match[6],sign),m:parseIso(match[7],sign),s:parseIso(match[8],sign)};}else if(duration==null){duration={};}else if(typeof duration==='object'&&('from'in duration||'to'in duration)){diffRes=momentsDifference(createLocal(duration.from),createLocal(duration.to));duration={};duration.ms=diffRes.milliseconds;duration.M=diffRes.months;}
ret=new Duration(duration);if(isDuration(input)&&hasOwnProp(input,'_locale')){ret._locale=input._locale;}
return ret;}
createDuration.fn=Duration.prototype;createDuration.invalid=createInvalid$1;function parseIso(inp,sign){var res=inp&&parseFloat(inp.replace(',','.'));return(isNaN(res)?0:res)*sign;}
function positiveMomentsDifference(base,other){var res={milliseconds:0,months:0};res.months=other.month()-base.month()+(other.year()-base.year())*12;if(base.clone().add(res.months,'M').isAfter(other)){--res.months;}
res.milliseconds=+other-+(base.clone().add(res.months,'M'));return res;}
function momentsDifference(base,other){var res;if(!(base.isValid()&&other.isValid())){return{milliseconds:0,months:0};}
other=cloneWithOffset(other,base);if(base.isBefore(other)){res=positiveMomentsDifference(base,other);}else{res=positiveMomentsDifference(other,base);res.milliseconds=-res.milliseconds;res.months=-res.months;}
return res;}
function createAdder(direction,name){return function(val,period){var dur,tmp;if(period!==null&&!isNaN(+period)){deprecateSimple(name,'moment().'+name+'(period, number) is deprecated. Please use moment().'+name+'(number, period). '+'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');tmp=val;val=period;period=tmp;}
val=typeof val==='string'?+val:val;dur=createDuration(val,period);addSubtract(this,dur,direction);return this;};}
function addSubtract(mom,duration,isAdding,updateOffset){var milliseconds=duration._milliseconds,days=absRound(duration._days),months=absRound(duration._months);if(!mom.isValid()){return;}
updateOffset=updateOffset==null?true:updateOffset;if(milliseconds){mom._d.setTime(mom._d.valueOf()+milliseconds*isAdding);}
if(days){set$1(mom,'Date',get(mom,'Date')+days*isAdding);}
if(months){setMonth(mom,get(mom,'Month')+months*isAdding);}
if(updateOffset){hooks.updateOffset(mom,days||months);}}
var add=createAdder(1,'add');var subtract=createAdder(-1,'subtract');function getCalendarFormat(myMoment,now){var diff=myMoment.diff(now,'days',true);return diff<-6?'sameElse':diff<-1?'lastWeek':diff<0?'lastDay':diff<1?'sameDay':diff<2?'nextDay':diff<7?'nextWeek':'sameElse';}
function calendar$1(time,formats){var now=time||createLocal(),sod=cloneWithOffset(now,this).startOf('day'),format=hooks.calendarFormat(this,sod)||'sameElse';var output=formats&&(isFunction(formats[format])?formats[format].call(this,now):formats[format]);return this.format(output||this.localeData().calendar(format,this,createLocal(now)));}
function clone(){return new Moment(this);}
function isAfter(input,units){var localInput=isMoment(input)?input:createLocal(input);if(!(this.isValid()&&localInput.isValid())){return false;}
units=normalizeUnits(!isUndefined(units)?units:'millisecond');if(units==='millisecond'){return this.valueOf()>localInput.valueOf();}else{return localInput.valueOf()<this.clone().startOf(units).valueOf();}}
function isBefore(input,units){var localInput=isMoment(input)?input:createLocal(input);if(!(this.isValid()&&localInput.isValid())){return false;}
units=normalizeUnits(!isUndefined(units)?units:'millisecond');if(units==='millisecond'){return this.valueOf()<localInput.valueOf();}else{return this.clone().endOf(units).valueOf()<localInput.valueOf();}}
function isBetween(from,to,units,inclusivity){inclusivity=inclusivity||'()';return(inclusivity[0]==='('?this.isAfter(from,units):!this.isBefore(from,units))&&(inclusivity[1]===')'?this.isBefore(to,units):!this.isAfter(to,units));}
function isSame(input,units){var localInput=isMoment(input)?input:createLocal(input),inputMs;if(!(this.isValid()&&localInput.isValid())){return false;}
units=normalizeUnits(units||'millisecond');if(units==='millisecond'){return this.valueOf()===localInput.valueOf();}else{inputMs=localInput.valueOf();return this.clone().startOf(units).valueOf()<=inputMs&&inputMs<=this.clone().endOf(units).valueOf();}}
function isSameOrAfter(input,units){return this.isSame(input,units)||this.isAfter(input,units);}
function isSameOrBefore(input,units){return this.isSame(input,units)||this.isBefore(input,units);}
function diff(input,units,asFloat){var that,zoneDelta,delta,output;if(!this.isValid()){return NaN;}
that=cloneWithOffset(input,this);if(!that.isValid()){return NaN;}
zoneDelta=(that.utcOffset()-this.utcOffset())*6e4;units=normalizeUnits(units);if(units==='year'||units==='month'||units==='quarter'){output=monthDiff(this,that);if(units==='quarter'){output=output/3;}else if(units==='year'){output=output/12;}}else{delta=this-that;output=units==='second'?delta/1e3:units==='minute'?delta/6e4:units==='hour'?delta/36e5:units==='day'?(delta-zoneDelta)/864e5:units==='week'?(delta-zoneDelta)/6048e5:delta;}
return asFloat?output:absFloor(output);}
function monthDiff(a,b){var wholeMonthDiff=((b.year()-a.year())*12)+(b.month()-a.month()),anchor=a.clone().add(wholeMonthDiff,'months'),anchor2,adjust;if(b-anchor<0){anchor2=a.clone().add(wholeMonthDiff-1,'months');adjust=(b-anchor)/(anchor-anchor2);}else{anchor2=a.clone().add(wholeMonthDiff+1,'months');adjust=(b-anchor)/(anchor2-anchor);}
return-(wholeMonthDiff+adjust)||0;}
hooks.defaultFormat='YYYY-MM-DDTHH:mm:ssZ';hooks.defaultFormatUtc='YYYY-MM-DDTHH:mm:ss[Z]';function toString(){return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');}
function toISOString(){if(!this.isValid()){return null;}
var m=this.clone().utc();if(m.year()<0||m.year()>9999){return formatMoment(m,'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');}
if(isFunction(Date.prototype.toISOString)){return this.toDate().toISOString();}
return formatMoment(m,'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');}
function inspect(){if(!this.isValid()){return'moment.invalid(/* '+this._i+' */)';}
var func='moment';var zone='';if(!this.isLocal()){func=this.utcOffset()===0?'moment.utc':'moment.parseZone';zone='Z';}
var prefix='['+func+'("]';var year=(0<=this.year()&&this.year()<=9999)?'YYYY':'YYYYYY';var datetime='-MM-DD[T]HH:mm:ss.SSS';var suffix=zone+'[")]';return this.format(prefix+year+datetime+suffix);}
function format(inputString){if(!inputString){inputString=this.isUtc()?hooks.defaultFormatUtc:hooks.defaultFormat;}
var output=formatMoment(this,inputString);return this.localeData().postformat(output);}
function from(time,withoutSuffix){if(this.isValid()&&((isMoment(time)&&time.isValid())||createLocal(time).isValid())){return createDuration({to:this,from:time}).locale(this.locale()).humanize(!withoutSuffix);}else{return this.localeData().invalidDate();}}
function fromNow(withoutSuffix){return this.from(createLocal(),withoutSuffix);}
function to(time,withoutSuffix){if(this.isValid()&&((isMoment(time)&&time.isValid())||createLocal(time).isValid())){return createDuration({from:this,to:time}).locale(this.locale()).humanize(!withoutSuffix);}else{return this.localeData().invalidDate();}}
function toNow(withoutSuffix){return this.to(createLocal(),withoutSuffix);}
function locale(key){var newLocaleData;if(key===undefined){return this._locale._abbr;}else{newLocaleData=getLocale(key);if(newLocaleData!=null){this._locale=newLocaleData;}
return this;}}
var lang=deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',function(key){if(key===undefined){return this.localeData();}else{return this.locale(key);}});function localeData(){return this._locale;}
function startOf(units){units=normalizeUnits(units);switch(units){case'year':this.month(0);case'quarter':case'month':this.date(1);case'week':case'isoWeek':case'day':case'date':this.hours(0);case'hour':this.minutes(0);case'minute':this.seconds(0);case'second':this.milliseconds(0);}
if(units==='week'){this.weekday(0);}
if(units==='isoWeek'){this.isoWeekday(1);}
if(units==='quarter'){this.month(Math.floor(this.month()/3)*3);}
return this;}
function endOf(units){units=normalizeUnits(units);if(units===undefined||units==='millisecond'){return this;}
if(units==='date'){units='day';}
return this.startOf(units).add(1,(units==='isoWeek'?'week':units)).subtract(1,'ms');}
function valueOf(){return this._d.valueOf()-((this._offset||0)*60000);}
function unix(){return Math.floor(this.valueOf()/1000);}
function toDate(){return new Date(this.valueOf());}
function toArray(){var m=this;return[m.year(),m.month(),m.date(),m.hour(),m.minute(),m.second(),m.millisecond()];}
function toObject(){var m=this;return{years:m.year(),months:m.month(),date:m.date(),hours:m.hours(),minutes:m.minutes(),seconds:m.seconds(),milliseconds:m.milliseconds()};}
function toJSON(){return this.isValid()?this.toISOString():null;}
function isValid$2(){return isValid(this);}
function parsingFlags(){return extend({},getParsingFlags(this));}
function invalidAt(){return getParsingFlags(this).overflow;}
function creationData(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict};}
addFormatToken(0,['gg',2],0,function(){return this.weekYear()%100;});addFormatToken(0,['GG',2],0,function(){return this.isoWeekYear()%100;});function addWeekYearFormatToken(token,getter){addFormatToken(0,[token,token.length],0,getter);}
addWeekYearFormatToken('gggg','weekYear');addWeekYearFormatToken('ggggg','weekYear');addWeekYearFormatToken('GGGG','isoWeekYear');addWeekYearFormatToken('GGGGG','isoWeekYear');addUnitAlias('weekYear','gg');addUnitAlias('isoWeekYear','GG');addUnitPriority('weekYear',1);addUnitPriority('isoWeekYear',1);addRegexToken('G',matchSigned);addRegexToken('g',matchSigned);addRegexToken('GG',match1to2,match2);addRegexToken('gg',match1to2,match2);addRegexToken('GGGG',match1to4,match4);addRegexToken('gggg',match1to4,match4);addRegexToken('GGGGG',match1to6,match6);addRegexToken('ggggg',match1to6,match6);addWeekParseToken(['gggg','ggggg','GGGG','GGGGG'],function(input,week,config,token){week[token.substr(0,2)]=toInt(input);});addWeekParseToken(['gg','GG'],function(input,week,config,token){week[token]=hooks.parseTwoDigitYear(input);});function getSetWeekYear(input){return getSetWeekYearHelper.call(this,input,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy);}
function getSetISOWeekYear(input){return getSetWeekYearHelper.call(this,input,this.isoWeek(),this.isoWeekday(),1,4);}
function getISOWeeksInYear(){return weeksInYear(this.year(),1,4);}
function getWeeksInYear(){var weekInfo=this.localeData()._week;return weeksInYear(this.year(),weekInfo.dow,weekInfo.doy);}
function getSetWeekYearHelper(input,week,weekday,dow,doy){var weeksTarget;if(input==null){return weekOfYear(this,dow,doy).year;}else{weeksTarget=weeksInYear(input,dow,doy);if(week>weeksTarget){week=weeksTarget;}
return setWeekAll.call(this,input,week,weekday,dow,doy);}}
function setWeekAll(weekYear,week,weekday,dow,doy){var dayOfYearData=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy),date=createUTCDate(dayOfYearData.year,0,dayOfYearData.dayOfYear);this.year(date.getUTCFullYear());this.month(date.getUTCMonth());this.date(date.getUTCDate());return this;}
addFormatToken('Q',0,'Qo','quarter');addUnitAlias('quarter','Q');addUnitPriority('quarter',7);addRegexToken('Q',match1);addParseToken('Q',function(input,array){array[MONTH]=(toInt(input)-1)*3;});function getSetQuarter(input){return input==null?Math.ceil((this.month()+1)/3):this.month((input-1)*3+this.month()%3);}
addFormatToken('D',['DD',2],'Do','date');addUnitAlias('date','D');addUnitPriority('date',9);addRegexToken('D',match1to2);addRegexToken('DD',match1to2,match2);addRegexToken('Do',function(isStrict,locale){return isStrict?(locale._dayOfMonthOrdinalParse||locale._ordinalParse):locale._dayOfMonthOrdinalParseLenient;});addParseToken(['D','DD'],DATE);addParseToken('Do',function(input,array){array[DATE]=toInt(input.match(match1to2)[0],10);});var getSetDayOfMonth=makeGetSet('Date',true);addFormatToken('DDD',['DDDD',3],'DDDo','dayOfYear');addUnitAlias('dayOfYear','DDD');addUnitPriority('dayOfYear',4);addRegexToken('DDD',match1to3);addRegexToken('DDDD',match3);addParseToken(['DDD','DDDD'],function(input,array,config){config._dayOfYear=toInt(input);});function getSetDayOfYear(input){var dayOfYear=Math.round((this.clone().startOf('day')-this.clone().startOf('year'))/864e5)+1;return input==null?dayOfYear:this.add((input-dayOfYear),'d');}
addFormatToken('m',['mm',2],0,'minute');addUnitAlias('minute','m');addUnitPriority('minute',14);addRegexToken('m',match1to2);addRegexToken('mm',match1to2,match2);addParseToken(['m','mm'],MINUTE);var getSetMinute=makeGetSet('Minutes',false);addFormatToken('s',['ss',2],0,'second');addUnitAlias('second','s');addUnitPriority('second',15);addRegexToken('s',match1to2);addRegexToken('ss',match1to2,match2);addParseToken(['s','ss'],SECOND);var getSetSecond=makeGetSet('Seconds',false);addFormatToken('S',0,0,function(){return~~(this.millisecond()/100);});addFormatToken(0,['SS',2],0,function(){return~~(this.millisecond()/10);});addFormatToken(0,['SSS',3],0,'millisecond');addFormatToken(0,['SSSS',4],0,function(){return this.millisecond()*10;});addFormatToken(0,['SSSSS',5],0,function(){return this.millisecond()*100;});addFormatToken(0,['SSSSSS',6],0,function(){return this.millisecond()*1000;});addFormatToken(0,['SSSSSSS',7],0,function(){return this.millisecond()*10000;});addFormatToken(0,['SSSSSSSS',8],0,function(){return this.millisecond()*100000;});addFormatToken(0,['SSSSSSSSS',9],0,function(){return this.millisecond()*1000000;});addUnitAlias('millisecond','ms');addUnitPriority('millisecond',16);addRegexToken('S',match1to3,match1);addRegexToken('SS',match1to3,match2);addRegexToken('SSS',match1to3,match3);var token;for(token='SSSS';token.length<=9;token+='S'){addRegexToken(token,matchUnsigned);}
function parseMs(input,array){array[MILLISECOND]=toInt(('0.'+input)*1000);}
for(token='S';token.length<=9;token+='S'){addParseToken(token,parseMs);}
var getSetMillisecond=makeGetSet('Milliseconds',false);addFormatToken('z',0,0,'zoneAbbr');addFormatToken('zz',0,0,'zoneName');function getZoneAbbr(){return this._isUTC?'UTC':'';}
function getZoneName(){return this._isUTC?'Coordinated Universal Time':'';}
var proto=Moment.prototype;proto.add=add;proto.calendar=calendar$1;proto.clone=clone;proto.diff=diff;proto.endOf=endOf;proto.format=format;proto.from=from;proto.fromNow=fromNow;proto.to=to;proto.toNow=toNow;proto.get=stringGet;proto.invalidAt=invalidAt;proto.isAfter=isAfter;proto.isBefore=isBefore;proto.isBetween=isBetween;proto.isSame=isSame;proto.isSameOrAfter=isSameOrAfter;proto.isSameOrBefore=isSameOrBefore;proto.isValid=isValid$2;proto.lang=lang;proto.locale=locale;proto.localeData=localeData;proto.max=prototypeMax;proto.min=prototypeMin;proto.parsingFlags=parsingFlags;proto.set=stringSet;proto.startOf=startOf;proto.subtract=subtract;proto.toArray=toArray;proto.toObject=toObject;proto.toDate=toDate;proto.toISOString=toISOString;proto.inspect=inspect;proto.toJSON=toJSON;proto.toString=toString;proto.unix=unix;proto.valueOf=valueOf;proto.creationData=creationData;proto.year=getSetYear;proto.isLeapYear=getIsLeapYear;proto.weekYear=getSetWeekYear;proto.isoWeekYear=getSetISOWeekYear;proto.quarter=proto.quarters=getSetQuarter;proto.month=getSetMonth;proto.daysInMonth=getDaysInMonth;proto.week=proto.weeks=getSetWeek;proto.isoWeek=proto.isoWeeks=getSetISOWeek;proto.weeksInYear=getWeeksInYear;proto.isoWeeksInYear=getISOWeeksInYear;proto.date=getSetDayOfMonth;proto.day=proto.days=getSetDayOfWeek;proto.weekday=getSetLocaleDayOfWeek;proto.isoWeekday=getSetISODayOfWeek;proto.dayOfYear=getSetDayOfYear;proto.hour=proto.hours=getSetHour;proto.minute=proto.minutes=getSetMinute;proto.second=proto.seconds=getSetSecond;proto.millisecond=proto.milliseconds=getSetMillisecond;proto.utcOffset=getSetOffset;proto.utc=setOffsetToUTC;proto.local=setOffsetToLocal;proto.parseZone=setOffsetToParsedOffset;proto.hasAlignedHourOffset=hasAlignedHourOffset;proto.isDST=isDaylightSavingTime;proto.isLocal=isLocal;proto.isUtcOffset=isUtcOffset;proto.isUtc=isUtc;proto.isUTC=isUtc;proto.zoneAbbr=getZoneAbbr;proto.zoneName=getZoneName;proto.dates=deprecate('dates accessor is deprecated. Use date instead.',getSetDayOfMonth);proto.months=deprecate('months accessor is deprecated. Use month instead',getSetMonth);proto.years=deprecate('years accessor is deprecated. Use year instead',getSetYear);proto.zone=deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',getSetZone);proto.isDSTShifted=deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',isDaylightSavingTimeShifted);function createUnix(input){return createLocal(input*1000);}
function createInZone(){return createLocal.apply(null,arguments).parseZone();}
function preParsePostFormat(string){return string;}
var proto$1=Locale.prototype;proto$1.calendar=calendar;proto$1.longDateFormat=longDateFormat;proto$1.invalidDate=invalidDate;proto$1.ordinal=ordinal;proto$1.preparse=preParsePostFormat;proto$1.postformat=preParsePostFormat;proto$1.relativeTime=relativeTime;proto$1.pastFuture=pastFuture;proto$1.set=set;proto$1.months=localeMonths;proto$1.monthsShort=localeMonthsShort;proto$1.monthsParse=localeMonthsParse;proto$1.monthsRegex=monthsRegex;proto$1.monthsShortRegex=monthsShortRegex;proto$1.week=localeWeek;proto$1.firstDayOfYear=localeFirstDayOfYear;proto$1.firstDayOfWeek=localeFirstDayOfWeek;proto$1.weekdays=localeWeekdays;proto$1.weekdaysMin=localeWeekdaysMin;proto$1.weekdaysShort=localeWeekdaysShort;proto$1.weekdaysParse=localeWeekdaysParse;proto$1.weekdaysRegex=weekdaysRegex;proto$1.weekdaysShortRegex=weekdaysShortRegex;proto$1.weekdaysMinRegex=weekdaysMinRegex;proto$1.isPM=localeIsPM;proto$1.meridiem=localeMeridiem;function get$1(format,index,field,setter){var locale=getLocale();var utc=createUTC().set(setter,index);return locale[field](utc,format);}
function listMonthsImpl(format,index,field){if(isNumber(format)){index=format;format=undefined;}
format=format||'';if(index!=null){return get$1(format,index,field,'month');}
var i;var out=[];for(i=0;i<12;i++){out[i]=get$1(format,i,field,'month');}
return out;}
function listWeekdaysImpl(localeSorted,format,index,field){if(typeof localeSorted==='boolean'){if(isNumber(format)){index=format;format=undefined;}
format=format||'';}else{format=localeSorted;index=format;localeSorted=false;if(isNumber(format)){index=format;format=undefined;}
format=format||'';}
var locale=getLocale(),shift=localeSorted?locale._week.dow:0;if(index!=null){return get$1(format,(index+shift)%7,field,'day');}
var i;var out=[];for(i=0;i<7;i++){out[i]=get$1(format,(i+shift)%7,field,'day');}
return out;}
function listMonths(format,index){return listMonthsImpl(format,index,'months');}
function listMonthsShort(format,index){return listMonthsImpl(format,index,'monthsShort');}
function listWeekdays(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,'weekdays');}
function listWeekdaysShort(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,'weekdaysShort');}
function listWeekdaysMin(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,'weekdaysMin');}
getSetGlobalLocale('en',{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(number){var b=number%10,output=(toInt(number%100/10)===1)?'th':(b===1)?'st':(b===2)?'nd':(b===3)?'rd':'th';return number+output;}});hooks.lang=deprecate('moment.lang is deprecated. Use moment.locale instead.',getSetGlobalLocale);hooks.langData=deprecate('moment.langData is deprecated. Use moment.localeData instead.',getLocale);var mathAbs=Math.abs;function abs(){var data=this._data;this._milliseconds=mathAbs(this._milliseconds);this._days=mathAbs(this._days);this._months=mathAbs(this._months);data.milliseconds=mathAbs(data.milliseconds);data.seconds=mathAbs(data.seconds);data.minutes=mathAbs(data.minutes);data.hours=mathAbs(data.hours);data.months=mathAbs(data.months);data.years=mathAbs(data.years);return this;}
function addSubtract$1(duration,input,value,direction){var other=createDuration(input,value);duration._milliseconds+=direction*other._milliseconds;duration._days+=direction*other._days;duration._months+=direction*other._months;return duration._bubble();}
function add$1(input,value){return addSubtract$1(this,input,value,1);}
function subtract$1(input,value){return addSubtract$1(this,input,value,-1);}
function absCeil(number){if(number<0){return Math.floor(number);}else{return Math.ceil(number);}}
function bubble(){var milliseconds=this._milliseconds;var days=this._days;var months=this._months;var data=this._data;var seconds,minutes,hours,years,monthsFromDays;if(!((milliseconds>=0&&days>=0&&months>=0)||(milliseconds<=0&&days<=0&&months<=0))){milliseconds+=absCeil(monthsToDays(months)+days)*864e5;days=0;months=0;}
data.milliseconds=milliseconds%1000;seconds=absFloor(milliseconds/1000);data.seconds=seconds%60;minutes=absFloor(seconds/60);data.minutes=minutes%60;hours=absFloor(minutes/60);data.hours=hours%24;days+=absFloor(hours/24);monthsFromDays=absFloor(daysToMonths(days));months+=monthsFromDays;days-=absCeil(monthsToDays(monthsFromDays));years=absFloor(months/12);months%=12;data.days=days;data.months=months;data.years=years;return this;}
function daysToMonths(days){return days*4800/146097;}
function monthsToDays(months){return months*146097/4800;}
function as(units){if(!this.isValid()){return NaN;}
var days;var months;var milliseconds=this._milliseconds;units=normalizeUnits(units);if(units==='month'||units==='year'){days=this._days+milliseconds/864e5;months=this._months+daysToMonths(days);return units==='month'?months:months/12;}else{days=this._days+Math.round(monthsToDays(this._months));switch(units){case'week':return days/7+milliseconds/6048e5;case'day':return days+milliseconds/864e5;case'hour':return days*24+milliseconds/36e5;case'minute':return days*1440+milliseconds/6e4;case'second':return days*86400+milliseconds/1000;case'millisecond':return Math.floor(days*864e5)+milliseconds;default:throw new Error('Unknown unit '+units);}}}
function valueOf$1(){if(!this.isValid()){return NaN;}
return(this._milliseconds+this._days*864e5+(this._months%12)*2592e6+toInt(this._months/12)*31536e6);}
function makeAs(alias){return function(){return this.as(alias);};}
var asMilliseconds=makeAs('ms');var asSeconds=makeAs('s');var asMinutes=makeAs('m');var asHours=makeAs('h');var asDays=makeAs('d');var asWeeks=makeAs('w');var asMonths=makeAs('M');var asYears=makeAs('y');function get$2(units){units=normalizeUnits(units);return this.isValid()?this[units+'s']():NaN;}
function makeGetter(name){return function(){return this.isValid()?this._data[name]:NaN;};}
var milliseconds=makeGetter('milliseconds');var seconds=makeGetter('seconds');var minutes=makeGetter('minutes');var hours=makeGetter('hours');var days=makeGetter('days');var months=makeGetter('months');var years=makeGetter('years');function weeks(){return absFloor(this.days()/7);}
var round=Math.round;var thresholds={ss:44,s:45,m:45,h:22,d:26,M:11};function substituteTimeAgo(string,number,withoutSuffix,isFuture,locale){return locale.relativeTime(number||1,!!withoutSuffix,string,isFuture);}
function relativeTime$1(posNegDuration,withoutSuffix,locale){var duration=createDuration(posNegDuration).abs();var seconds=round(duration.as('s'));var minutes=round(duration.as('m'));var hours=round(duration.as('h'));var days=round(duration.as('d'));var months=round(duration.as('M'));var years=round(duration.as('y'));var a=seconds<=thresholds.ss&&['s',seconds]||seconds<thresholds.s&&['ss',seconds]||minutes<=1&&['m']||minutes<thresholds.m&&['mm',minutes]||hours<=1&&['h']||hours<thresholds.h&&['hh',hours]||days<=1&&['d']||days<thresholds.d&&['dd',days]||months<=1&&['M']||months<thresholds.M&&['MM',months]||years<=1&&['y']||['yy',years];a[2]=withoutSuffix;a[3]=+posNegDuration>0;a[4]=locale;return substituteTimeAgo.apply(null,a);}
function getSetRelativeTimeRounding(roundingFunction){if(roundingFunction===undefined){return round;}
if(typeof(roundingFunction)==='function'){round=roundingFunction;return true;}
return false;}
function getSetRelativeTimeThreshold(threshold,limit){if(thresholds[threshold]===undefined){return false;}
if(limit===undefined){return thresholds[threshold];}
thresholds[threshold]=limit;if(threshold==='s'){thresholds.ss=limit-1;}
return true;}
function humanize(withSuffix){if(!this.isValid()){return this.localeData().invalidDate();}
var locale=this.localeData();var output=relativeTime$1(this,!withSuffix,locale);if(withSuffix){output=locale.pastFuture(+this,output);}
return locale.postformat(output);}
var abs$1=Math.abs;function toISOString$1(){if(!this.isValid()){return this.localeData().invalidDate();}
var seconds=abs$1(this._milliseconds)/1000;var days=abs$1(this._days);var months=abs$1(this._months);var minutes,hours,years;minutes=absFloor(seconds/60);hours=absFloor(minutes/60);seconds%=60;minutes%=60;years=absFloor(months/12);months%=12;var Y=years;var M=months;var D=days;var h=hours;var m=minutes;var s=seconds;var total=this.asSeconds();if(!total){return'P0D';}
return(total<0?'-':'')+'P'+(Y?Y+'Y':'')+(M?M+'M':'')+(D?D+'D':'')+((h||m||s)?'T':'')+(h?h+'H':'')+(m?m+'M':'')+(s?s+'S':'');}
var proto$2=Duration.prototype;proto$2.isValid=isValid$1;proto$2.abs=abs;proto$2.add=add$1;proto$2.subtract=subtract$1;proto$2.as=as;proto$2.asMilliseconds=asMilliseconds;proto$2.asSeconds=asSeconds;proto$2.asMinutes=asMinutes;proto$2.asHours=asHours;proto$2.asDays=asDays;proto$2.asWeeks=asWeeks;proto$2.asMonths=asMonths;proto$2.asYears=asYears;proto$2.valueOf=valueOf$1;proto$2._bubble=bubble;proto$2.get=get$2;proto$2.milliseconds=milliseconds;proto$2.seconds=seconds;proto$2.minutes=minutes;proto$2.hours=hours;proto$2.days=days;proto$2.weeks=weeks;proto$2.months=months;proto$2.years=years;proto$2.humanize=humanize;proto$2.toISOString=toISOString$1;proto$2.toString=toISOString$1;proto$2.toJSON=toISOString$1;proto$2.locale=locale;proto$2.localeData=localeData;proto$2.toIsoString=deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',toISOString$1);proto$2.lang=lang;addFormatToken('X',0,0,'unix');addFormatToken('x',0,0,'valueOf');addRegexToken('x',matchSigned);addRegexToken('X',matchTimestamp);addParseToken('X',function(input,array,config){config._d=new Date(parseFloat(input,10)*1000);});addParseToken('x',function(input,array,config){config._d=new Date(toInt(input));});hooks.version='2.18.1';setHookCallback(createLocal);hooks.fn=proto;hooks.min=min;hooks.max=max;hooks.now=now;hooks.utc=createUTC;hooks.unix=createUnix;hooks.months=listMonths;hooks.isDate=isDate;hooks.locale=getSetGlobalLocale;hooks.invalid=createInvalid;hooks.duration=createDuration;hooks.isMoment=isMoment;hooks.weekdays=listWeekdays;hooks.parseZone=createInZone;hooks.localeData=getLocale;hooks.isDuration=isDuration;hooks.monthsShort=listMonthsShort;hooks.weekdaysMin=listWeekdaysMin;hooks.defineLocale=defineLocale;hooks.updateLocale=updateLocale;hooks.locales=listLocales;hooks.weekdaysShort=listWeekdaysShort;hooks.normalizeUnits=normalizeUnits;hooks.relativeTimeRounding=getSetRelativeTimeRounding;hooks.relativeTimeThreshold=getSetRelativeTimeThreshold;hooks.calendarFormat=getCalendarFormat;hooks.prototype=proto;return hooks;})));},{}],7:[function(require,module,exports){var Chart=require(28)();require(26)(Chart);require(40)(Chart);require(22)(Chart);require(25)(Chart);require(30)(Chart);require(21)(Chart);require(23)(Chart);require(24)(Chart);require(29)(Chart);require(32)(Chart);require(33)(Chart);require(31)(Chart);require(27)(Chart);require(34)(Chart);require(35)(Chart);require(36)(Chart);require(37)(Chart);require(38)(Chart);require(46)(Chart);require(44)(Chart);require(45)(Chart);require(47)(Chart);require(48)(Chart);require(49)(Chart);require(15)(Chart);require(16)(Chart);require(17)(Chart);require(18)(Chart);require(19)(Chart);require(20)(Chart);require(8)(Chart);require(9)(Chart);require(10)(Chart);require(11)(Chart);require(12)(Chart);require(13)(Chart);require(14)(Chart);var plugins=[];plugins.push(require(41)(Chart),require(42)(Chart),require(43)(Chart));Chart.plugins.register(plugins);module.exports=Chart;if(typeof window!=='undefined'){window.Chart=Chart;}},{"10":10,"11":11,"12":12,"13":13,"14":14,"15":15,"16":16,"17":17,"18":18,"19":19,"20":20,"21":21,"22":22,"23":23,"24":24,"25":25,"26":26,"27":27,"28":28,"29":29,"30":30,"31":31,"32":32,"33":33,"34":34,"35":35,"36":36,"37":37,"38":38,"40":40,"41":41,"42":42,"43":43,"44":44,"45":45,"46":46,"47":47,"48":48,"49":49,"8":8,"9":9}],8:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.Bar=function(context,config){config.type='bar';return new Chart(context,config);};};},{}],9:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.Bubble=function(context,config){config.type='bubble';return new Chart(context,config);};};},{}],10:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.Doughnut=function(context,config){config.type='doughnut';return new Chart(context,config);};};},{}],11:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.Line=function(context,config){config.type='line';return new Chart(context,config);};};},{}],12:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.PolarArea=function(context,config){config.type='polarArea';return new Chart(context,config);};};},{}],13:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.Radar=function(context,config){config.type='radar';return new Chart(context,config);};};},{}],14:[function(require,module,exports){'use strict';module.exports=function(Chart){var defaultConfig={hover:{mode:'single'},scales:{xAxes:[{type:'linear',position:'bottom',id:'x-axis-1'}],yAxes:[{type:'linear',position:'left',id:'y-axis-1'}]},tooltips:{callbacks:{title:function(){return'';},label:function(tooltipItem){return'('+tooltipItem.xLabel+', '+tooltipItem.yLabel+')';}}}};Chart.defaults.scatter=defaultConfig;Chart.controllers.scatter=Chart.controllers.line;Chart.Scatter=function(context,config){config.type='scatter';return new Chart(context,config);};};},{}],15:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;Chart.defaults.bar={hover:{mode:'label'},scales:{xAxes:[{type:'category',categoryPercentage:0.8,barPercentage:0.9,gridLines:{offsetGridLines:true}}],yAxes:[{type:'linear'}]}};Chart.controllers.bar=Chart.DatasetController.extend({dataElementType:Chart.elements.Rectangle,initialize:function(){var me=this;var meta;Chart.DatasetController.prototype.initialize.apply(me,arguments);meta=me.getMeta();meta.stack=me.getDataset().stack;meta.bar=true;},update:function(reset){var me=this;var elements=me.getMeta().data;var i,ilen;me._ruler=me.getRuler();for(i=0,ilen=elements.length;i<ilen;++i){me.updateElement(elements[i],i,reset);}},updateElement:function(rectangle,index,reset){var me=this;var chart=me.chart;var meta=me.getMeta();var dataset=me.getDataset();var custom=rectangle.custom||{};var rectangleOptions=chart.options.elements.rectangle;rectangle._xScale=me.getScaleForId(meta.xAxisID);rectangle._yScale=me.getScaleForId(meta.yAxisID);rectangle._datasetIndex=me.index;rectangle._index=index;rectangle._model={datasetLabel:dataset.label,label:chart.data.labels[index],borderSkipped:custom.borderSkipped?custom.borderSkipped:rectangleOptions.borderSkipped,backgroundColor:custom.backgroundColor?custom.backgroundColor:helpers.getValueAtIndexOrDefault(dataset.backgroundColor,index,rectangleOptions.backgroundColor),borderColor:custom.borderColor?custom.borderColor:helpers.getValueAtIndexOrDefault(dataset.borderColor,index,rectangleOptions.borderColor),borderWidth:custom.borderWidth?custom.borderWidth:helpers.getValueAtIndexOrDefault(dataset.borderWidth,index,rectangleOptions.borderWidth)};me.updateElementGeometry(rectangle,index,reset);rectangle.pivot();},updateElementGeometry:function(rectangle,index,reset){var me=this;var model=rectangle._model;var vscale=me.getValueScale();var base=vscale.getBasePixel();var horizontal=vscale.isHorizontal();var ruler=me._ruler||me.getRuler();var vpixels=me.calculateBarValuePixels(me.index,index);var ipixels=me.calculateBarIndexPixels(me.index,index,ruler);model.horizontal=horizontal;model.base=reset?base:vpixels.base;model.x=horizontal?reset?base:vpixels.head:ipixels.center;model.y=horizontal?ipixels.center:reset?base:vpixels.head;model.height=horizontal?ipixels.size:undefined;model.width=horizontal?undefined:ipixels.size;},getValueScaleId:function(){return this.getMeta().yAxisID;},getIndexScaleId:function(){return this.getMeta().xAxisID;},getValueScale:function(){return this.getScaleForId(this.getValueScaleId());},getIndexScale:function(){return this.getScaleForId(this.getIndexScaleId());},getStackCount:function(last){var me=this;var chart=me.chart;var scale=me.getIndexScale();var stacked=scale.options.stacked;var ilen=last===undefined?chart.data.datasets.length:last+1;var stacks=[];var i,meta;for(i=0;i<ilen;++i){meta=chart.getDatasetMeta(i);if(meta.bar&&chart.isDatasetVisible(i)&&(stacked===false||(stacked===true&&stacks.indexOf(meta.stack)===-1)||(stacked===undefined&&(meta.stack===undefined||stacks.indexOf(meta.stack)===-1)))){stacks.push(meta.stack);}}
return stacks.length;},getStackIndex:function(datasetIndex){return this.getStackCount(datasetIndex)-1;},getRuler:function(){var me=this;var scale=me.getIndexScale();var options=scale.options;var stackCount=me.getStackCount();var fullSize=scale.isHorizontal()?scale.width:scale.height;var tickSize=fullSize/scale.ticks.length;var categorySize=tickSize*options.categoryPercentage;var fullBarSize=categorySize/stackCount;var barSize=fullBarSize*options.barPercentage;barSize=Math.min(helpers.getValueOrDefault(options.barThickness,barSize),helpers.getValueOrDefault(options.maxBarThickness,Infinity));return{stackCount:stackCount,tickSize:tickSize,categorySize:categorySize,categorySpacing:tickSize-categorySize,fullBarSize:fullBarSize,barSize:barSize,barSpacing:fullBarSize-barSize,scale:scale};},calculateBarValuePixels:function(datasetIndex,index){var me=this;var chart=me.chart;var meta=me.getMeta();var scale=me.getValueScale();var datasets=chart.data.datasets;var value=Number(datasets[datasetIndex].data[index]);var stacked=scale.options.stacked;var stack=meta.stack;var start=0;var i,imeta,ivalue,base,head,size;if(stacked||(stacked===undefined&&stack!==undefined)){for(i=0;i<datasetIndex;++i){imeta=chart.getDatasetMeta(i);if(imeta.bar&&imeta.stack===stack&&imeta.controller.getValueScaleId()===scale.id&&chart.isDatasetVisible(i)){ivalue=Number(datasets[i].data[index]);if((value<0&&ivalue<0)||(value>=0&&ivalue>0)){start+=ivalue;}}}}
base=scale.getPixelForValue(start);head=scale.getPixelForValue(start+value);size=(head-base)/2;return{size:size,base:base,head:head,center:head+size/2};},calculateBarIndexPixels:function(datasetIndex,index,ruler){var me=this;var scale=ruler.scale;var isCombo=me.chart.isCombo;var stackIndex=me.getStackIndex(datasetIndex);var base=scale.getPixelForValue(null,index,datasetIndex,isCombo);var size=ruler.barSize;base-=isCombo?ruler.tickSize/2:0;base+=ruler.fullBarSize*stackIndex;base+=ruler.categorySpacing/2;base+=ruler.barSpacing/2;return{size:size,base:base,head:base+size,center:base+size/2};},draw:function(){var me=this;var chart=me.chart;var elements=me.getMeta().data;var dataset=me.getDataset();var ilen=elements.length;var i=0;var d;helpers.canvas.clipArea(chart.ctx,chart.chartArea);for(;i<ilen;++i){d=dataset.data[i];if(d!==null&&d!==undefined&&!isNaN(d)){elements[i].draw();}}
helpers.canvas.unclipArea(chart.ctx);},setHoverStyle:function(rectangle){var dataset=this.chart.data.datasets[rectangle._datasetIndex];var index=rectangle._index;var custom=rectangle.custom||{};var model=rectangle._model;model.backgroundColor=custom.hoverBackgroundColor?custom.hoverBackgroundColor:helpers.getValueAtIndexOrDefault(dataset.hoverBackgroundColor,index,helpers.getHoverColor(model.backgroundColor));model.borderColor=custom.hoverBorderColor?custom.hoverBorderColor:helpers.getValueAtIndexOrDefault(dataset.hoverBorderColor,index,helpers.getHoverColor(model.borderColor));model.borderWidth=custom.hoverBorderWidth?custom.hoverBorderWidth:helpers.getValueAtIndexOrDefault(dataset.hoverBorderWidth,index,model.borderWidth);},removeHoverStyle:function(rectangle){var dataset=this.chart.data.datasets[rectangle._datasetIndex];var index=rectangle._index;var custom=rectangle.custom||{};var model=rectangle._model;var rectangleElementOptions=this.chart.options.elements.rectangle;model.backgroundColor=custom.backgroundColor?custom.backgroundColor:helpers.getValueAtIndexOrDefault(dataset.backgroundColor,index,rectangleElementOptions.backgroundColor);model.borderColor=custom.borderColor?custom.borderColor:helpers.getValueAtIndexOrDefault(dataset.borderColor,index,rectangleElementOptions.borderColor);model.borderWidth=custom.borderWidth?custom.borderWidth:helpers.getValueAtIndexOrDefault(dataset.borderWidth,index,rectangleElementOptions.borderWidth);}});Chart.defaults.horizontalBar={hover:{mode:'label'},scales:{xAxes:[{type:'linear',position:'bottom'}],yAxes:[{position:'left',type:'category',categoryPercentage:0.8,barPercentage:0.9,gridLines:{offsetGridLines:true}}]},elements:{rectangle:{borderSkipped:'left'}},tooltips:{callbacks:{title:function(tooltipItems,data){var title='';if(tooltipItems.length>0){if(tooltipItems[0].yLabel){title=tooltipItems[0].yLabel;}else if(data.labels.length>0&&tooltipItems[0].index<data.labels.length){title=data.labels[tooltipItems[0].index];}}
return title;},label:function(tooltipItem,data){var datasetLabel=data.datasets[tooltipItem.datasetIndex].label||'';return datasetLabel+': '+tooltipItem.xLabel;}}}};Chart.controllers.horizontalBar=Chart.controllers.bar.extend({getValueScaleId:function(){return this.getMeta().xAxisID;},getIndexScaleId:function(){return this.getMeta().yAxisID;}});};},{}],16:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;Chart.defaults.bubble={hover:{mode:'single'},scales:{xAxes:[{type:'linear',position:'bottom',id:'x-axis-0'}],yAxes:[{type:'linear',position:'left',id:'y-axis-0'}]},tooltips:{callbacks:{title:function(){return'';},label:function(tooltipItem,data){var datasetLabel=data.datasets[tooltipItem.datasetIndex].label||'';var dataPoint=data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];return datasetLabel+': ('+tooltipItem.xLabel+', '+tooltipItem.yLabel+', '+dataPoint.r+')';}}}};Chart.controllers.bubble=Chart.DatasetController.extend({dataElementType:Chart.elements.Point,update:function(reset){var me=this;var meta=me.getMeta();var points=meta.data;helpers.each(points,function(point,index){me.updateElement(point,index,reset);});},updateElement:function(point,index,reset){var me=this;var meta=me.getMeta();var xScale=me.getScaleForId(meta.xAxisID);var yScale=me.getScaleForId(meta.yAxisID);var custom=point.custom||{};var dataset=me.getDataset();var data=dataset.data[index];var pointElementOptions=me.chart.options.elements.point;var dsIndex=me.index;helpers.extend(point,{_xScale:xScale,_yScale:yScale,_datasetIndex:dsIndex,_index:index,_model:{x:reset?xScale.getPixelForDecimal(0.5):xScale.getPixelForValue(typeof data==='object'?data:NaN,index,dsIndex,me.chart.isCombo),y:reset?yScale.getBasePixel():yScale.getPixelForValue(data,index,dsIndex),radius:reset?0:custom.radius?custom.radius:me.getRadius(data),hitRadius:custom.hitRadius?custom.hitRadius:helpers.getValueAtIndexOrDefault(dataset.hitRadius,index,pointElementOptions.hitRadius)}});Chart.DatasetController.prototype.removeHoverStyle.call(me,point,pointElementOptions);var model=point._model;model.skip=custom.skip?custom.skip:(isNaN(model.x)||isNaN(model.y));point.pivot();},getRadius:function(value){return value.r||this.chart.options.elements.point.radius;},setHoverStyle:function(point){var me=this;Chart.DatasetController.prototype.setHoverStyle.call(me,point);var dataset=me.chart.data.datasets[point._datasetIndex];var index=point._index;var custom=point.custom||{};var model=point._model;model.radius=custom.hoverRadius?custom.hoverRadius:(helpers.getValueAtIndexOrDefault(dataset.hoverRadius,index,me.chart.options.elements.point.hoverRadius))+me.getRadius(dataset.data[index]);},removeHoverStyle:function(point){var me=this;Chart.DatasetController.prototype.removeHoverStyle.call(me,point,me.chart.options.elements.point);var dataVal=me.chart.data.datasets[point._datasetIndex].data[point._index];var custom=point.custom||{};var model=point._model;model.radius=custom.radius?custom.radius:me.getRadius(dataVal);}});};},{}],17:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers,defaults=Chart.defaults;defaults.doughnut={animation:{animateRotate:true,animateScale:false},aspectRatio:1,hover:{mode:'single'},legendCallback:function(chart){var text=[];text.push('<ul class="'+chart.id+'-legend">');var data=chart.data;var datasets=data.datasets;var labels=data.labels;if(datasets.length){for(var i=0;i<datasets[0].data.length;++i){text.push('<li><span style="background-color:'+datasets[0].backgroundColor[i]+'"></span>');if(labels[i]){text.push(labels[i]);}
text.push('</li>');}}
text.push('</ul>');return text.join('');},legend:{labels:{generateLabels:function(chart){var data=chart.data;if(data.labels.length&&data.datasets.length){return data.labels.map(function(label,i){var meta=chart.getDatasetMeta(0);var ds=data.datasets[0];var arc=meta.data[i];var custom=arc&&arc.custom||{};var getValueAtIndexOrDefault=helpers.getValueAtIndexOrDefault;var arcOpts=chart.options.elements.arc;var fill=custom.backgroundColor?custom.backgroundColor:getValueAtIndexOrDefault(ds.backgroundColor,i,arcOpts.backgroundColor);var stroke=custom.borderColor?custom.borderColor:getValueAtIndexOrDefault(ds.borderColor,i,arcOpts.borderColor);var bw=custom.borderWidth?custom.borderWidth:getValueAtIndexOrDefault(ds.borderWidth,i,arcOpts.borderWidth);return{text:label,fillStyle:fill,strokeStyle:stroke,lineWidth:bw,hidden:isNaN(ds.data[i])||meta.data[i].hidden,index:i};});}
return[];}},onClick:function(e,legendItem){var index=legendItem.index;var chart=this.chart;var i,ilen,meta;for(i=0,ilen=(chart.data.datasets||[]).length;i<ilen;++i){meta=chart.getDatasetMeta(i);if(meta.data[index]){meta.data[index].hidden=!meta.data[index].hidden;}}
chart.update();}},cutoutPercentage:50,rotation:Math.PI*-0.5,circumference:Math.PI*2.0,tooltips:{callbacks:{title:function(){return'';},label:function(tooltipItem,data){var dataLabel=data.labels[tooltipItem.index];var value=': '+data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];if(helpers.isArray(dataLabel)){dataLabel=dataLabel.slice();dataLabel[0]+=value;}else{dataLabel+=value;}
return dataLabel;}}}};defaults.pie=helpers.clone(defaults.doughnut);helpers.extend(defaults.pie,{cutoutPercentage:0});Chart.controllers.doughnut=Chart.controllers.pie=Chart.DatasetController.extend({dataElementType:Chart.elements.Arc,linkScales:helpers.noop,getRingIndex:function(datasetIndex){var ringIndex=0;for(var j=0;j<datasetIndex;++j){if(this.chart.isDatasetVisible(j)){++ringIndex;}}
return ringIndex;},update:function(reset){var me=this;var chart=me.chart,chartArea=chart.chartArea,opts=chart.options,arcOpts=opts.elements.arc,availableWidth=chartArea.right-chartArea.left-arcOpts.borderWidth,availableHeight=chartArea.bottom-chartArea.top-arcOpts.borderWidth,minSize=Math.min(availableWidth,availableHeight),offset={x:0,y:0},meta=me.getMeta(),cutoutPercentage=opts.cutoutPercentage,circumference=opts.circumference;if(circumference<Math.PI*2.0){var startAngle=opts.rotation%(Math.PI*2.0);startAngle+=Math.PI*2.0*(startAngle>=Math.PI?-1:startAngle<-Math.PI?1:0);var endAngle=startAngle+circumference;var start={x:Math.cos(startAngle),y:Math.sin(startAngle)};var end={x:Math.cos(endAngle),y:Math.sin(endAngle)};var contains0=(startAngle<=0&&0<=endAngle)||(startAngle<=Math.PI*2.0&&Math.PI*2.0<=endAngle);var contains90=(startAngle<=Math.PI*0.5&&Math.PI*0.5<=endAngle)||(startAngle<=Math.PI*2.5&&Math.PI*2.5<=endAngle);var contains180=(startAngle<=-Math.PI&&-Math.PI<=endAngle)||(startAngle<=Math.PI&&Math.PI<=endAngle);var contains270=(startAngle<=-Math.PI*0.5&&-Math.PI*0.5<=endAngle)||(startAngle<=Math.PI*1.5&&Math.PI*1.5<=endAngle);var cutout=cutoutPercentage/100.0;var min={x:contains180?-1:Math.min(start.x*(start.x<0?1:cutout),end.x*(end.x<0?1:cutout)),y:contains270?-1:Math.min(start.y*(start.y<0?1:cutout),end.y*(end.y<0?1:cutout))};var max={x:contains0?1:Math.max(start.x*(start.x>0?1:cutout),end.x*(end.x>0?1:cutout)),y:contains90?1:Math.max(start.y*(start.y>0?1:cutout),end.y*(end.y>0?1:cutout))};var size={width:(max.x-min.x)*0.5,height:(max.y-min.y)*0.5};minSize=Math.min(availableWidth/size.width,availableHeight/size.height);offset={x:(max.x+min.x)*-0.5,y:(max.y+min.y)*-0.5};}
chart.borderWidth=me.getMaxBorderWidth(meta.data);chart.outerRadius=Math.max((minSize-chart.borderWidth)/2,0);chart.innerRadius=Math.max(cutoutPercentage?(chart.outerRadius/100)*(cutoutPercentage):0,0);chart.radiusLength=(chart.outerRadius-chart.innerRadius)/chart.getVisibleDatasetCount();chart.offsetX=offset.x*chart.outerRadius;chart.offsetY=offset.y*chart.outerRadius;meta.total=me.calculateTotal();me.outerRadius=chart.outerRadius-(chart.radiusLength*me.getRingIndex(me.index));me.innerRadius=Math.max(me.outerRadius-chart.radiusLength,0);helpers.each(meta.data,function(arc,index){me.updateElement(arc,index,reset);});},updateElement:function(arc,index,reset){var me=this;var chart=me.chart,chartArea=chart.chartArea,opts=chart.options,animationOpts=opts.animation,centerX=(chartArea.left+chartArea.right)/2,centerY=(chartArea.top+chartArea.bottom)/2,startAngle=opts.rotation,endAngle=opts.rotation,dataset=me.getDataset(),circumference=reset&&animationOpts.animateRotate?0:arc.hidden?0:me.calculateCircumference(dataset.data[index])*(opts.circumference/(2.0*Math.PI)),innerRadius=reset&&animationOpts.animateScale?0:me.innerRadius,outerRadius=reset&&animationOpts.animateScale?0:me.outerRadius,valueAtIndexOrDefault=helpers.getValueAtIndexOrDefault;helpers.extend(arc,{_datasetIndex:me.index,_index:index,_model:{x:centerX+chart.offsetX,y:centerY+chart.offsetY,startAngle:startAngle,endAngle:endAngle,circumference:circumference,outerRadius:outerRadius,innerRadius:innerRadius,label:valueAtIndexOrDefault(dataset.label,index,chart.data.labels[index])}});var model=arc._model;this.removeHoverStyle(arc);if(!reset||!animationOpts.animateRotate){if(index===0){model.startAngle=opts.rotation;}else{model.startAngle=me.getMeta().data[index-1]._model.endAngle;}
model.endAngle=model.startAngle+model.circumference;}
arc.pivot();},removeHoverStyle:function(arc){Chart.DatasetController.prototype.removeHoverStyle.call(this,arc,this.chart.options.elements.arc);},calculateTotal:function(){var dataset=this.getDataset();var meta=this.getMeta();var total=0;var value;helpers.each(meta.data,function(element,index){value=dataset.data[index];if(!isNaN(value)&&!element.hidden){total+=Math.abs(value);}});return total;},calculateCircumference:function(value){var total=this.getMeta().total;if(total>0&&!isNaN(value)){return(Math.PI*2.0)*(value/total);}
return 0;},getMaxBorderWidth:function(elements){var max=0,index=this.index,length=elements.length,borderWidth,hoverWidth;for(var i=0;i<length;i++){borderWidth=elements[i]._model?elements[i]._model.borderWidth:0;hoverWidth=elements[i]._chart?elements[i]._chart.config.data.datasets[index].hoverBorderWidth:0;max=borderWidth>max?borderWidth:max;max=hoverWidth>max?hoverWidth:max;}
return max;}});};},{}],18:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;Chart.defaults.line={showLines:true,spanGaps:false,hover:{mode:'label'},scales:{xAxes:[{type:'category',id:'x-axis-0'}],yAxes:[{type:'linear',id:'y-axis-0'}]}};function lineEnabled(dataset,options){return helpers.getValueOrDefault(dataset.showLine,options.showLines);}
Chart.controllers.line=Chart.DatasetController.extend({datasetElementType:Chart.elements.Line,dataElementType:Chart.elements.Point,update:function(reset){var me=this;var meta=me.getMeta();var line=meta.dataset;var points=meta.data||[];var options=me.chart.options;var lineElementOptions=options.elements.line;var scale=me.getScaleForId(meta.yAxisID);var i,ilen,custom;var dataset=me.getDataset();var showLine=lineEnabled(dataset,options);if(showLine){custom=line.custom||{};if((dataset.tension!==undefined)&&(dataset.lineTension===undefined)){dataset.lineTension=dataset.tension;}
line._scale=scale;line._datasetIndex=me.index;line._children=points;line._model={spanGaps:dataset.spanGaps?dataset.spanGaps:options.spanGaps,tension:custom.tension?custom.tension:helpers.getValueOrDefault(dataset.lineTension,lineElementOptions.tension),backgroundColor:custom.backgroundColor?custom.backgroundColor:(dataset.backgroundColor||lineElementOptions.backgroundColor),borderWidth:custom.borderWidth?custom.borderWidth:(dataset.borderWidth||lineElementOptions.borderWidth),borderColor:custom.borderColor?custom.borderColor:(dataset.borderColor||lineElementOptions.borderColor),borderCapStyle:custom.borderCapStyle?custom.borderCapStyle:(dataset.borderCapStyle||lineElementOptions.borderCapStyle),borderDash:custom.borderDash?custom.borderDash:(dataset.borderDash||lineElementOptions.borderDash),borderDashOffset:custom.borderDashOffset?custom.borderDashOffset:(dataset.borderDashOffset||lineElementOptions.borderDashOffset),borderJoinStyle:custom.borderJoinStyle?custom.borderJoinStyle:(dataset.borderJoinStyle||lineElementOptions.borderJoinStyle),fill:custom.fill?custom.fill:(dataset.fill!==undefined?dataset.fill:lineElementOptions.fill),steppedLine:custom.steppedLine?custom.steppedLine:helpers.getValueOrDefault(dataset.steppedLine,lineElementOptions.stepped),cubicInterpolationMode:custom.cubicInterpolationMode?custom.cubicInterpolationMode:helpers.getValueOrDefault(dataset.cubicInterpolationMode,lineElementOptions.cubicInterpolationMode),};line.pivot();}
for(i=0,ilen=points.length;i<ilen;++i){me.updateElement(points[i],i,reset);}
if(showLine&&line._model.tension!==0){me.updateBezierControlPoints();}
for(i=0,ilen=points.length;i<ilen;++i){points[i].pivot();}},getPointBackgroundColor:function(point,index){var backgroundColor=this.chart.options.elements.point.backgroundColor;var dataset=this.getDataset();var custom=point.custom||{};if(custom.backgroundColor){backgroundColor=custom.backgroundColor;}else if(dataset.pointBackgroundColor){backgroundColor=helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor,index,backgroundColor);}else if(dataset.backgroundColor){backgroundColor=dataset.backgroundColor;}
return backgroundColor;},getPointBorderColor:function(point,index){var borderColor=this.chart.options.elements.point.borderColor;var dataset=this.getDataset();var custom=point.custom||{};if(custom.borderColor){borderColor=custom.borderColor;}else if(dataset.pointBorderColor){borderColor=helpers.getValueAtIndexOrDefault(dataset.pointBorderColor,index,borderColor);}else if(dataset.borderColor){borderColor=dataset.borderColor;}
return borderColor;},getPointBorderWidth:function(point,index){var borderWidth=this.chart.options.elements.point.borderWidth;var dataset=this.getDataset();var custom=point.custom||{};if(!isNaN(custom.borderWidth)){borderWidth=custom.borderWidth;}else if(!isNaN(dataset.pointBorderWidth)){borderWidth=helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth,index,borderWidth);}else if(!isNaN(dataset.borderWidth)){borderWidth=dataset.borderWidth;}
return borderWidth;},updateElement:function(point,index,reset){var me=this;var meta=me.getMeta();var custom=point.custom||{};var dataset=me.getDataset();var datasetIndex=me.index;var value=dataset.data[index];var yScale=me.getScaleForId(meta.yAxisID);var xScale=me.getScaleForId(meta.xAxisID);var pointOptions=me.chart.options.elements.point;var x,y;var labels=me.chart.data.labels||[];var includeOffset=(labels.length===1||dataset.data.length===1)||me.chart.isCombo;if((dataset.radius!==undefined)&&(dataset.pointRadius===undefined)){dataset.pointRadius=dataset.radius;}
if((dataset.hitRadius!==undefined)&&(dataset.pointHitRadius===undefined)){dataset.pointHitRadius=dataset.hitRadius;}
x=xScale.getPixelForValue(typeof value==='object'?value:NaN,index,datasetIndex,includeOffset);y=reset?yScale.getBasePixel():me.calculatePointY(value,index,datasetIndex);point._xScale=xScale;point._yScale=yScale;point._datasetIndex=datasetIndex;point._index=index;point._model={x:x,y:y,skip:custom.skip||isNaN(x)||isNaN(y),radius:custom.radius||helpers.getValueAtIndexOrDefault(dataset.pointRadius,index,pointOptions.radius),pointStyle:custom.pointStyle||helpers.getValueAtIndexOrDefault(dataset.pointStyle,index,pointOptions.pointStyle),backgroundColor:me.getPointBackgroundColor(point,index),borderColor:me.getPointBorderColor(point,index),borderWidth:me.getPointBorderWidth(point,index),tension:meta.dataset._model?meta.dataset._model.tension:0,steppedLine:meta.dataset._model?meta.dataset._model.steppedLine:false,hitRadius:custom.hitRadius||helpers.getValueAtIndexOrDefault(dataset.pointHitRadius,index,pointOptions.hitRadius)};},calculatePointY:function(value,index,datasetIndex){var me=this;var chart=me.chart;var meta=me.getMeta();var yScale=me.getScaleForId(meta.yAxisID);var sumPos=0;var sumNeg=0;var i,ds,dsMeta;if(yScale.options.stacked){for(i=0;i<datasetIndex;i++){ds=chart.data.datasets[i];dsMeta=chart.getDatasetMeta(i);if(dsMeta.type==='line'&&dsMeta.yAxisID===yScale.id&&chart.isDatasetVisible(i)){var stackedRightValue=Number(yScale.getRightValue(ds.data[index]));if(stackedRightValue<0){sumNeg+=stackedRightValue||0;}else{sumPos+=stackedRightValue||0;}}}
var rightValue=Number(yScale.getRightValue(value));if(rightValue<0){return yScale.getPixelForValue(sumNeg+rightValue);}
return yScale.getPixelForValue(sumPos+rightValue);}
return yScale.getPixelForValue(value);},updateBezierControlPoints:function(){var me=this;var meta=me.getMeta();var area=me.chart.chartArea;var points=(meta.data||[]);var i,ilen,point,model,controlPoints;if(meta.dataset._model.spanGaps){points=points.filter(function(pt){return!pt._model.skip;});}
function capControlPoint(pt,min,max){return Math.max(Math.min(pt,max),min);}
if(meta.dataset._model.cubicInterpolationMode==='monotone'){helpers.splineCurveMonotone(points);}else{for(i=0,ilen=points.length;i<ilen;++i){point=points[i];model=point._model;controlPoints=helpers.splineCurve(helpers.previousItem(points,i)._model,model,helpers.nextItem(points,i)._model,meta.dataset._model.tension);model.controlPointPreviousX=controlPoints.previous.x;model.controlPointPreviousY=controlPoints.previous.y;model.controlPointNextX=controlPoints.next.x;model.controlPointNextY=controlPoints.next.y;}}
if(me.chart.options.elements.line.capBezierPoints){for(i=0,ilen=points.length;i<ilen;++i){model=points[i]._model;model.controlPointPreviousX=capControlPoint(model.controlPointPreviousX,area.left,area.right);model.controlPointPreviousY=capControlPoint(model.controlPointPreviousY,area.top,area.bottom);model.controlPointNextX=capControlPoint(model.controlPointNextX,area.left,area.right);model.controlPointNextY=capControlPoint(model.controlPointNextY,area.top,area.bottom);}}},draw:function(){var me=this;var chart=me.chart;var meta=me.getMeta();var points=meta.data||[];var area=chart.chartArea;var ilen=points.length;var i=0;Chart.canvasHelpers.clipArea(chart.ctx,area);if(lineEnabled(me.getDataset(),chart.options)){meta.dataset.draw();}
Chart.canvasHelpers.unclipArea(chart.ctx);for(;i<ilen;++i){points[i].draw(area);}},setHoverStyle:function(point){var dataset=this.chart.data.datasets[point._datasetIndex];var index=point._index;var custom=point.custom||{};var model=point._model;model.radius=custom.hoverRadius||helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius,index,this.chart.options.elements.point.hoverRadius);model.backgroundColor=custom.hoverBackgroundColor||helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor,index,helpers.getHoverColor(model.backgroundColor));model.borderColor=custom.hoverBorderColor||helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor,index,helpers.getHoverColor(model.borderColor));model.borderWidth=custom.hoverBorderWidth||helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth,index,model.borderWidth);},removeHoverStyle:function(point){var me=this;var dataset=me.chart.data.datasets[point._datasetIndex];var index=point._index;var custom=point.custom||{};var model=point._model;if((dataset.radius!==undefined)&&(dataset.pointRadius===undefined)){dataset.pointRadius=dataset.radius;}
model.radius=custom.radius||helpers.getValueAtIndexOrDefault(dataset.pointRadius,index,me.chart.options.elements.point.radius);model.backgroundColor=me.getPointBackgroundColor(point,index);model.borderColor=me.getPointBorderColor(point,index);model.borderWidth=me.getPointBorderWidth(point,index);}});};},{}],19:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;Chart.defaults.polarArea={scale:{type:'radialLinear',angleLines:{display:false},gridLines:{circular:true},pointLabels:{display:false},ticks:{beginAtZero:true}},animation:{animateRotate:true,animateScale:true},startAngle:-0.5*Math.PI,aspectRatio:1,legendCallback:function(chart){var text=[];text.push('<ul class="'+chart.id+'-legend">');var data=chart.data;var datasets=data.datasets;var labels=data.labels;if(datasets.length){for(var i=0;i<datasets[0].data.length;++i){text.push('<li><span style="background-color:'+datasets[0].backgroundColor[i]+'"></span>');if(labels[i]){text.push(labels[i]);}
text.push('</li>');}}
text.push('</ul>');return text.join('');},legend:{labels:{generateLabels:function(chart){var data=chart.data;if(data.labels.length&&data.datasets.length){return data.labels.map(function(label,i){var meta=chart.getDatasetMeta(0);var ds=data.datasets[0];var arc=meta.data[i];var custom=arc.custom||{};var getValueAtIndexOrDefault=helpers.getValueAtIndexOrDefault;var arcOpts=chart.options.elements.arc;var fill=custom.backgroundColor?custom.backgroundColor:getValueAtIndexOrDefault(ds.backgroundColor,i,arcOpts.backgroundColor);var stroke=custom.borderColor?custom.borderColor:getValueAtIndexOrDefault(ds.borderColor,i,arcOpts.borderColor);var bw=custom.borderWidth?custom.borderWidth:getValueAtIndexOrDefault(ds.borderWidth,i,arcOpts.borderWidth);return{text:label,fillStyle:fill,strokeStyle:stroke,lineWidth:bw,hidden:isNaN(ds.data[i])||meta.data[i].hidden,index:i};});}
return[];}},onClick:function(e,legendItem){var index=legendItem.index;var chart=this.chart;var i,ilen,meta;for(i=0,ilen=(chart.data.datasets||[]).length;i<ilen;++i){meta=chart.getDatasetMeta(i);meta.data[index].hidden=!meta.data[index].hidden;}
chart.update();}},tooltips:{callbacks:{title:function(){return'';},label:function(tooltipItem,data){return data.labels[tooltipItem.index]+': '+tooltipItem.yLabel;}}}};Chart.controllers.polarArea=Chart.DatasetController.extend({dataElementType:Chart.elements.Arc,linkScales:helpers.noop,update:function(reset){var me=this;var chart=me.chart;var chartArea=chart.chartArea;var meta=me.getMeta();var opts=chart.options;var arcOpts=opts.elements.arc;var minSize=Math.min(chartArea.right-chartArea.left,chartArea.bottom-chartArea.top);chart.outerRadius=Math.max((minSize-arcOpts.borderWidth/2)/2,0);chart.innerRadius=Math.max(opts.cutoutPercentage?(chart.outerRadius/100)*(opts.cutoutPercentage):1,0);chart.radiusLength=(chart.outerRadius-chart.innerRadius)/chart.getVisibleDatasetCount();me.outerRadius=chart.outerRadius-(chart.radiusLength*me.index);me.innerRadius=me.outerRadius-chart.radiusLength;meta.count=me.countVisibleElements();helpers.each(meta.data,function(arc,index){me.updateElement(arc,index,reset);});},updateElement:function(arc,index,reset){var me=this;var chart=me.chart;var dataset=me.getDataset();var opts=chart.options;var animationOpts=opts.animation;var scale=chart.scale;var getValueAtIndexOrDefault=helpers.getValueAtIndexOrDefault;var labels=chart.data.labels;var circumference=me.calculateCircumference(dataset.data[index]);var centerX=scale.xCenter;var centerY=scale.yCenter;var visibleCount=0;var meta=me.getMeta();for(var i=0;i<index;++i){if(!isNaN(dataset.data[i])&&!meta.data[i].hidden){++visibleCount;}}
var datasetStartAngle=opts.startAngle;var distance=arc.hidden?0:scale.getDistanceFromCenterForValue(dataset.data[index]);var startAngle=datasetStartAngle+(circumference*visibleCount);var endAngle=startAngle+(arc.hidden?0:circumference);var resetRadius=animationOpts.animateScale?0:scale.getDistanceFromCenterForValue(dataset.data[index]);helpers.extend(arc,{_datasetIndex:me.index,_index:index,_scale:scale,_model:{x:centerX,y:centerY,innerRadius:0,outerRadius:reset?resetRadius:distance,startAngle:reset&&animationOpts.animateRotate?datasetStartAngle:startAngle,endAngle:reset&&animationOpts.animateRotate?datasetStartAngle:endAngle,label:getValueAtIndexOrDefault(labels,index,labels[index])}});me.removeHoverStyle(arc);arc.pivot();},removeHoverStyle:function(arc){Chart.DatasetController.prototype.removeHoverStyle.call(this,arc,this.chart.options.elements.arc);},countVisibleElements:function(){var dataset=this.getDataset();var meta=this.getMeta();var count=0;helpers.each(meta.data,function(element,index){if(!isNaN(dataset.data[index])&&!element.hidden){count++;}});return count;},calculateCircumference:function(value){var count=this.getMeta().count;if(count>0&&!isNaN(value)){return(2*Math.PI)/count;}
return 0;}});};},{}],20:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;Chart.defaults.radar={aspectRatio:1,scale:{type:'radialLinear'},elements:{line:{tension:0}}};Chart.controllers.radar=Chart.DatasetController.extend({datasetElementType:Chart.elements.Line,dataElementType:Chart.elements.Point,linkScales:helpers.noop,update:function(reset){var me=this;var meta=me.getMeta();var line=meta.dataset;var points=meta.data;var custom=line.custom||{};var dataset=me.getDataset();var lineElementOptions=me.chart.options.elements.line;var scale=me.chart.scale;if((dataset.tension!==undefined)&&(dataset.lineTension===undefined)){dataset.lineTension=dataset.tension;}
helpers.extend(meta.dataset,{_datasetIndex:me.index,_scale:scale,_children:points,_loop:true,_model:{tension:custom.tension?custom.tension:helpers.getValueOrDefault(dataset.lineTension,lineElementOptions.tension),backgroundColor:custom.backgroundColor?custom.backgroundColor:(dataset.backgroundColor||lineElementOptions.backgroundColor),borderWidth:custom.borderWidth?custom.borderWidth:(dataset.borderWidth||lineElementOptions.borderWidth),borderColor:custom.borderColor?custom.borderColor:(dataset.borderColor||lineElementOptions.borderColor),fill:custom.fill?custom.fill:(dataset.fill!==undefined?dataset.fill:lineElementOptions.fill),borderCapStyle:custom.borderCapStyle?custom.borderCapStyle:(dataset.borderCapStyle||lineElementOptions.borderCapStyle),borderDash:custom.borderDash?custom.borderDash:(dataset.borderDash||lineElementOptions.borderDash),borderDashOffset:custom.borderDashOffset?custom.borderDashOffset:(dataset.borderDashOffset||lineElementOptions.borderDashOffset),borderJoinStyle:custom.borderJoinStyle?custom.borderJoinStyle:(dataset.borderJoinStyle||lineElementOptions.borderJoinStyle),}});meta.dataset.pivot();helpers.each(points,function(point,index){me.updateElement(point,index,reset);},me);me.updateBezierControlPoints();},updateElement:function(point,index,reset){var me=this;var custom=point.custom||{};var dataset=me.getDataset();var scale=me.chart.scale;var pointElementOptions=me.chart.options.elements.point;var pointPosition=scale.getPointPositionForValue(index,dataset.data[index]);if((dataset.radius!==undefined)&&(dataset.pointRadius===undefined)){dataset.pointRadius=dataset.radius;}
if((dataset.hitRadius!==undefined)&&(dataset.pointHitRadius===undefined)){dataset.pointHitRadius=dataset.hitRadius;}
helpers.extend(point,{_datasetIndex:me.index,_index:index,_scale:scale,_model:{x:reset?scale.xCenter:pointPosition.x,y:reset?scale.yCenter:pointPosition.y,tension:custom.tension?custom.tension:helpers.getValueOrDefault(dataset.lineTension,me.chart.options.elements.line.tension),radius:custom.radius?custom.radius:helpers.getValueAtIndexOrDefault(dataset.pointRadius,index,pointElementOptions.radius),backgroundColor:custom.backgroundColor?custom.backgroundColor:helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor,index,pointElementOptions.backgroundColor),borderColor:custom.borderColor?custom.borderColor:helpers.getValueAtIndexOrDefault(dataset.pointBorderColor,index,pointElementOptions.borderColor),borderWidth:custom.borderWidth?custom.borderWidth:helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth,index,pointElementOptions.borderWidth),pointStyle:custom.pointStyle?custom.pointStyle:helpers.getValueAtIndexOrDefault(dataset.pointStyle,index,pointElementOptions.pointStyle),hitRadius:custom.hitRadius?custom.hitRadius:helpers.getValueAtIndexOrDefault(dataset.pointHitRadius,index,pointElementOptions.hitRadius)}});point._model.skip=custom.skip?custom.skip:(isNaN(point._model.x)||isNaN(point._model.y));},updateBezierControlPoints:function(){var chartArea=this.chart.chartArea;var meta=this.getMeta();helpers.each(meta.data,function(point,index){var model=point._model;var controlPoints=helpers.splineCurve(helpers.previousItem(meta.data,index,true)._model,model,helpers.nextItem(meta.data,index,true)._model,model.tension);model.controlPointPreviousX=Math.max(Math.min(controlPoints.previous.x,chartArea.right),chartArea.left);model.controlPointPreviousY=Math.max(Math.min(controlPoints.previous.y,chartArea.bottom),chartArea.top);model.controlPointNextX=Math.max(Math.min(controlPoints.next.x,chartArea.right),chartArea.left);model.controlPointNextY=Math.max(Math.min(controlPoints.next.y,chartArea.bottom),chartArea.top);point.pivot();});},setHoverStyle:function(point){var dataset=this.chart.data.datasets[point._datasetIndex];var custom=point.custom||{};var index=point._index;var model=point._model;model.radius=custom.hoverRadius?custom.hoverRadius:helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius,index,this.chart.options.elements.point.hoverRadius);model.backgroundColor=custom.hoverBackgroundColor?custom.hoverBackgroundColor:helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor,index,helpers.getHoverColor(model.backgroundColor));model.borderColor=custom.hoverBorderColor?custom.hoverBorderColor:helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor,index,helpers.getHoverColor(model.borderColor));model.borderWidth=custom.hoverBorderWidth?custom.hoverBorderWidth:helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth,index,model.borderWidth);},removeHoverStyle:function(point){var dataset=this.chart.data.datasets[point._datasetIndex];var custom=point.custom||{};var index=point._index;var model=point._model;var pointElementOptions=this.chart.options.elements.point;model.radius=custom.radius?custom.radius:helpers.getValueAtIndexOrDefault(dataset.pointRadius,index,pointElementOptions.radius);model.backgroundColor=custom.backgroundColor?custom.backgroundColor:helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor,index,pointElementOptions.backgroundColor);model.borderColor=custom.borderColor?custom.borderColor:helpers.getValueAtIndexOrDefault(dataset.pointBorderColor,index,pointElementOptions.borderColor);model.borderWidth=custom.borderWidth?custom.borderWidth:helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth,index,pointElementOptions.borderWidth);}});};},{}],21:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;Chart.defaults.global.animation={duration:1000,easing:'easeOutQuart',onProgress:helpers.noop,onComplete:helpers.noop};Chart.Animation=Chart.Element.extend({chart:null,currentStep:0,numSteps:60,easing:'',render:null,onAnimationProgress:null,onAnimationComplete:null,});Chart.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(chart,animation,duration,lazy){var animations=this.animations;var i,ilen;animation.chart=chart;if(!lazy){chart.animating=true;}
for(i=0,ilen=animations.length;i<ilen;++i){if(animations[i].chart===chart){animations[i]=animation;return;}}
animations.push(animation);if(animations.length===1){this.requestAnimationFrame();}},cancelAnimation:function(chart){var index=helpers.findIndex(this.animations,function(animation){return animation.chart===chart;});if(index!==-1){this.animations.splice(index,1);chart.animating=false;}},requestAnimationFrame:function(){var me=this;if(me.request===null){me.request=helpers.requestAnimFrame.call(window,function(){me.request=null;me.startDigest();});}},startDigest:function(){var me=this;var startTime=Date.now();var framesToDrop=0;if(me.dropFrames>1){framesToDrop=Math.floor(me.dropFrames);me.dropFrames=me.dropFrames%1;}
me.advance(1+framesToDrop);var endTime=Date.now();me.dropFrames+=(endTime-startTime)/me.frameDuration;if(me.animations.length>0){me.requestAnimationFrame();}},advance:function(count){var animations=this.animations;var animation,chart;var i=0;while(i<animations.length){animation=animations[i];chart=animation.chart;animation.currentStep=(animation.currentStep||0)+count;animation.currentStep=Math.min(animation.currentStep,animation.numSteps);helpers.callback(animation.render,[chart,animation],chart);helpers.callback(animation.onAnimationProgress,[animation],chart);if(animation.currentStep>=animation.numSteps){helpers.callback(animation.onAnimationComplete,[animation],chart);chart.animating=false;animations.splice(i,1);}else{++i;}}}};Object.defineProperty(Chart.Animation.prototype,'animationObject',{get:function(){return this;}});Object.defineProperty(Chart.Animation.prototype,'chartInstance',{get:function(){return this.chart;},set:function(value){this.chart=value;}});};},{}],22:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.canvasHelpers={};helpers.drawPoint=function(ctx,pointStyle,radius,x,y){var type,edgeLength,xOffset,yOffset,height,size;if(typeof pointStyle==='object'){type=pointStyle.toString();if(type==='[object HTMLImageElement]'||type==='[object HTMLCanvasElement]'){ctx.drawImage(pointStyle,x-pointStyle.width/2,y-pointStyle.height/2,pointStyle.width,pointStyle.height);return;}}
if(isNaN(radius)||radius<=0){return;}
switch(pointStyle){default:ctx.beginPath();ctx.arc(x,y,radius,0,Math.PI*2);ctx.closePath();ctx.fill();break;case'triangle':ctx.beginPath();edgeLength=3*radius/Math.sqrt(3);height=edgeLength*Math.sqrt(3)/2;ctx.moveTo(x-edgeLength/2,y+height/3);ctx.lineTo(x+edgeLength/2,y+height/3);ctx.lineTo(x,y-2*height/3);ctx.closePath();ctx.fill();break;case'rect':size=1/Math.SQRT2*radius;ctx.beginPath();ctx.fillRect(x-size,y-size,2*size,2*size);ctx.strokeRect(x-size,y-size,2*size,2*size);break;case'rectRounded':var offset=radius/Math.SQRT2;var leftX=x-offset;var topY=y-offset;var sideSize=Math.SQRT2*radius;Chart.helpers.drawRoundedRectangle(ctx,leftX,topY,sideSize,sideSize,radius/2);ctx.fill();break;case'rectRot':size=1/Math.SQRT2*radius;ctx.beginPath();ctx.moveTo(x-size,y);ctx.lineTo(x,y+size);ctx.lineTo(x+size,y);ctx.lineTo(x,y-size);ctx.closePath();ctx.fill();break;case'cross':ctx.beginPath();ctx.moveTo(x,y+radius);ctx.lineTo(x,y-radius);ctx.moveTo(x-radius,y);ctx.lineTo(x+radius,y);ctx.closePath();break;case'crossRot':ctx.beginPath();xOffset=Math.cos(Math.PI/4)*radius;yOffset=Math.sin(Math.PI/4)*radius;ctx.moveTo(x-xOffset,y-yOffset);ctx.lineTo(x+xOffset,y+yOffset);ctx.moveTo(x-xOffset,y+yOffset);ctx.lineTo(x+xOffset,y-yOffset);ctx.closePath();break;case'star':ctx.beginPath();ctx.moveTo(x,y+radius);ctx.lineTo(x,y-radius);ctx.moveTo(x-radius,y);ctx.lineTo(x+radius,y);xOffset=Math.cos(Math.PI/4)*radius;yOffset=Math.sin(Math.PI/4)*radius;ctx.moveTo(x-xOffset,y-yOffset);ctx.lineTo(x+xOffset,y+yOffset);ctx.moveTo(x-xOffset,y+yOffset);ctx.lineTo(x+xOffset,y-yOffset);ctx.closePath();break;case'line':ctx.beginPath();ctx.moveTo(x-radius,y);ctx.lineTo(x+radius,y);ctx.closePath();break;case'dash':ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+radius,y);ctx.closePath();break;}
ctx.stroke();};helpers.clipArea=function(ctx,clipArea){ctx.save();ctx.beginPath();ctx.rect(clipArea.left,clipArea.top,clipArea.right-clipArea.left,clipArea.bottom-clipArea.top);ctx.clip();};helpers.unclipArea=function(ctx){ctx.restore();};helpers.lineTo=function(ctx,previous,target,flip){if(target.steppedLine){if(target.steppedLine==='after'){ctx.lineTo(previous.x,target.y);}else{ctx.lineTo(target.x,previous.y);}
ctx.lineTo(target.x,target.y);return;}
if(!target.tension){ctx.lineTo(target.x,target.y);return;}
ctx.bezierCurveTo(flip?previous.controlPointPreviousX:previous.controlPointNextX,flip?previous.controlPointPreviousY:previous.controlPointNextY,flip?target.controlPointNextX:target.controlPointPreviousX,flip?target.controlPointNextY:target.controlPointPreviousY,target.x,target.y);};Chart.helpers.canvas=helpers;};},{}],23:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;var plugins=Chart.plugins;var platform=Chart.platform;Chart.types={};Chart.instances={};Chart.controllers={};function initConfig(config){config=config||{};var data=config.data=config.data||{};data.datasets=data.datasets||[];data.labels=data.labels||[];config.options=helpers.configMerge(Chart.defaults.global,Chart.defaults[config.type],config.options||{});return config;}
function updateConfig(chart){var newOptions=chart.options;if(newOptions.scale){chart.scale.options=newOptions.scale;}else if(newOptions.scales){newOptions.scales.xAxes.concat(newOptions.scales.yAxes).forEach(function(scaleOptions){chart.scales[scaleOptions.id].options=scaleOptions;});}
chart.tooltip._options=newOptions.tooltips;}
function positionIsHorizontal(position){return position==='top'||position==='bottom';}
helpers.extend(Chart.prototype,{construct:function(item,config){var me=this;config=initConfig(config);var context=platform.acquireContext(item,config);var canvas=context&&context.canvas;var height=canvas&&canvas.height;var width=canvas&&canvas.width;me.id=helpers.uid();me.ctx=context;me.canvas=canvas;me.config=config;me.width=width;me.height=height;me.aspectRatio=height?width/height:null;me.options=config.options;me._bufferedRender=false;me.chart=me;me.controller=me;Chart.instances[me.id]=me;Object.defineProperty(me,'data',{get:function(){return me.config.data;},set:function(value){me.config.data=value;}});if(!context||!canvas){console.error("Failed to create chart: can't acquire context from the given item");return;}
me.initialize();me.update();},initialize:function(){var me=this;plugins.notify(me,'beforeInit');helpers.retinaScale(me);me.bindEvents();if(me.options.responsive){me.resize(true);}
me.ensureScalesHaveIDs();me.buildScales();me.initToolTip();plugins.notify(me,'afterInit');return me;},clear:function(){helpers.clear(this);return this;},stop:function(){Chart.animationService.cancelAnimation(this);return this;},resize:function(silent){var me=this;var options=me.options;var canvas=me.canvas;var aspectRatio=(options.maintainAspectRatio&&me.aspectRatio)||null;var newWidth=Math.floor(helpers.getMaximumWidth(canvas));var newHeight=Math.floor(aspectRatio?newWidth/aspectRatio:helpers.getMaximumHeight(canvas));if(me.width===newWidth&&me.height===newHeight){return;}
canvas.width=me.width=newWidth;canvas.height=me.height=newHeight;canvas.style.width=newWidth+'px';canvas.style.height=newHeight+'px';helpers.retinaScale(me);if(!silent){var newSize={width:newWidth,height:newHeight};plugins.notify(me,'resize',[newSize]);if(me.options.onResize){me.options.onResize(me,newSize);}
me.stop();me.update(me.options.responsiveAnimationDuration);}},ensureScalesHaveIDs:function(){var options=this.options;var scalesOptions=options.scales||{};var scaleOptions=options.scale;helpers.each(scalesOptions.xAxes,function(xAxisOptions,index){xAxisOptions.id=xAxisOptions.id||('x-axis-'+index);});helpers.each(scalesOptions.yAxes,function(yAxisOptions,index){yAxisOptions.id=yAxisOptions.id||('y-axis-'+index);});if(scaleOptions){scaleOptions.id=scaleOptions.id||'scale';}},buildScales:function(){var me=this;var options=me.options;var scales=me.scales={};var items=[];if(options.scales){items=items.concat((options.scales.xAxes||[]).map(function(xAxisOptions){return{options:xAxisOptions,dtype:'category',dposition:'bottom'};}),(options.scales.yAxes||[]).map(function(yAxisOptions){return{options:yAxisOptions,dtype:'linear',dposition:'left'};}));}
if(options.scale){items.push({options:options.scale,dtype:'radialLinear',isDefault:true,dposition:'chartArea'});}
helpers.each(items,function(item){var scaleOptions=item.options;var scaleType=helpers.getValueOrDefault(scaleOptions.type,item.dtype);var scaleClass=Chart.scaleService.getScaleConstructor(scaleType);if(!scaleClass){return;}
if(positionIsHorizontal(scaleOptions.position)!==positionIsHorizontal(item.dposition)){scaleOptions.position=item.dposition;}
var scale=new scaleClass({id:scaleOptions.id,options:scaleOptions,ctx:me.ctx,chart:me});scales[scale.id]=scale;if(item.isDefault){me.scale=scale;}});Chart.scaleService.addScalesToLayout(this);},buildOrUpdateControllers:function(){var me=this;var types=[];var newControllers=[];helpers.each(me.data.datasets,function(dataset,datasetIndex){var meta=me.getDatasetMeta(datasetIndex);if(!meta.type){meta.type=dataset.type||me.config.type;}
types.push(meta.type);if(meta.controller){meta.controller.updateIndex(datasetIndex);}else{var ControllerClass=Chart.controllers[meta.type];if(ControllerClass===undefined){throw new Error('"'+meta.type+'" is not a chart type.');}
meta.controller=new ControllerClass(me,datasetIndex);newControllers.push(meta.controller);}},me);if(types.length>1){for(var i=1;i<types.length;i++){if(types[i]!==types[i-1]){me.isCombo=true;break;}}}
return newControllers;},resetElements:function(){var me=this;helpers.each(me.data.datasets,function(dataset,datasetIndex){me.getDatasetMeta(datasetIndex).controller.reset();},me);},reset:function(){this.resetElements();this.tooltip.initialize();},update:function(animationDuration,lazy){var me=this;updateConfig(me);if(plugins.notify(me,'beforeUpdate')===false){return;}
me.tooltip._data=me.data;var newControllers=me.buildOrUpdateControllers();helpers.each(me.data.datasets,function(dataset,datasetIndex){me.getDatasetMeta(datasetIndex).controller.buildOrUpdateElements();},me);me.updateLayout();helpers.each(newControllers,function(controller){controller.reset();});me.updateDatasets();plugins.notify(me,'afterUpdate');if(me._bufferedRender){me._bufferedRequest={lazy:lazy,duration:animationDuration};}else{me.render(animationDuration,lazy);}},updateLayout:function(){var me=this;if(plugins.notify(me,'beforeLayout')===false){return;}
Chart.layoutService.update(this,this.width,this.height);plugins.notify(me,'afterScaleUpdate');plugins.notify(me,'afterLayout');},updateDatasets:function(){var me=this;if(plugins.notify(me,'beforeDatasetsUpdate')===false){return;}
for(var i=0,ilen=me.data.datasets.length;i<ilen;++i){me.updateDataset(i);}
plugins.notify(me,'afterDatasetsUpdate');},updateDataset:function(index){var me=this;var meta=me.getDatasetMeta(index);var args={meta:meta,index:index};if(plugins.notify(me,'beforeDatasetUpdate',[args])===false){return;}
meta.controller.update();plugins.notify(me,'afterDatasetUpdate',[args]);},render:function(duration,lazy){var me=this;if(plugins.notify(me,'beforeRender')===false){return;}
var animationOptions=me.options.animation;var onComplete=function(animation){plugins.notify(me,'afterRender');helpers.callback(animationOptions&&animationOptions.onComplete,[animation],me);};if(animationOptions&&((typeof duration!=='undefined'&&duration!==0)||(typeof duration==='undefined'&&animationOptions.duration!==0))){var animation=new Chart.Animation({numSteps:(duration||animationOptions.duration)/16.66,easing:animationOptions.easing,render:function(chart,animationObject){var easingFunction=helpers.easingEffects[animationObject.easing];var currentStep=animationObject.currentStep;var stepDecimal=currentStep/animationObject.numSteps;chart.draw(easingFunction(stepDecimal),stepDecimal,currentStep);},onAnimationProgress:animationOptions.onProgress,onAnimationComplete:onComplete});Chart.animationService.addAnimation(me,animation,duration,lazy);}else{me.draw();onComplete(new Chart.Animation({numSteps:0,chart:me}));}
return me;},draw:function(easingValue){var me=this;me.clear();if(easingValue===undefined||easingValue===null){easingValue=1;}
me.transition(easingValue);if(plugins.notify(me,'beforeDraw',[easingValue])===false){return;}
helpers.each(me.boxes,function(box){box.draw(me.chartArea);},me);if(me.scale){me.scale.draw();}
me.drawDatasets(easingValue);me.tooltip.draw();plugins.notify(me,'afterDraw',[easingValue]);},transition:function(easingValue){var me=this;for(var i=0,ilen=(me.data.datasets||[]).length;i<ilen;++i){if(me.isDatasetVisible(i)){me.getDatasetMeta(i).controller.transition(easingValue);}}
me.tooltip.transition(easingValue);},drawDatasets:function(easingValue){var me=this;if(plugins.notify(me,'beforeDatasetsDraw',[easingValue])===false){return;}
for(var i=(me.data.datasets||[]).length-1;i>=0;--i){if(me.isDatasetVisible(i)){me.drawDataset(i,easingValue);}}
plugins.notify(me,'afterDatasetsDraw',[easingValue]);},drawDataset:function(index,easingValue){var me=this;var meta=me.getDatasetMeta(index);var args={meta:meta,index:index,easingValue:easingValue};if(plugins.notify(me,'beforeDatasetDraw',[args])===false){return;}
meta.controller.draw(easingValue);plugins.notify(me,'afterDatasetDraw',[args]);},getElementAtEvent:function(e){return Chart.Interaction.modes.single(this,e);},getElementsAtEvent:function(e){return Chart.Interaction.modes.label(this,e,{intersect:true});},getElementsAtXAxis:function(e){return Chart.Interaction.modes['x-axis'](this,e,{intersect:true});},getElementsAtEventForMode:function(e,mode,options){var method=Chart.Interaction.modes[mode];if(typeof method==='function'){return method(this,e,options);}
return[];},getDatasetAtEvent:function(e){return Chart.Interaction.modes.dataset(this,e,{intersect:true});},getDatasetMeta:function(datasetIndex){var me=this;var dataset=me.data.datasets[datasetIndex];if(!dataset._meta){dataset._meta={};}
var meta=dataset._meta[me.id];if(!meta){meta=dataset._meta[me.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null};}
return meta;},getVisibleDatasetCount:function(){var count=0;for(var i=0,ilen=this.data.datasets.length;i<ilen;++i){if(this.isDatasetVisible(i)){count++;}}
return count;},isDatasetVisible:function(datasetIndex){var meta=this.getDatasetMeta(datasetIndex);return typeof meta.hidden==='boolean'?!meta.hidden:!this.data.datasets[datasetIndex].hidden;},generateLegend:function(){return this.options.legendCallback(this);},destroy:function(){var me=this;var canvas=me.canvas;var meta,i,ilen;me.stop();for(i=0,ilen=me.data.datasets.length;i<ilen;++i){meta=me.getDatasetMeta(i);if(meta.controller){meta.controller.destroy();meta.controller=null;}}
if(canvas){me.unbindEvents();helpers.clear(me);platform.releaseContext(me.ctx);me.canvas=null;me.ctx=null;}
plugins.notify(me,'destroy');delete Chart.instances[me.id];},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments);},initToolTip:function(){var me=this;me.tooltip=new Chart.Tooltip({_chart:me,_chartInstance:me,_data:me.data,_options:me.options.tooltips},me);me.tooltip.initialize();},bindEvents:function(){var me=this;var listeners=me._listeners={};var listener=function(){me.eventHandler.apply(me,arguments);};helpers.each(me.options.events,function(type){platform.addEventListener(me,type,listener);listeners[type]=listener;});if(me.options.responsive){listener=function(){me.resize();};platform.addEventListener(me,'resize',listener);listeners.resize=listener;}},unbindEvents:function(){var me=this;var listeners=me._listeners;if(!listeners){return;}
delete me._listeners;helpers.each(listeners,function(listener,type){platform.removeEventListener(me,type,listener);});},updateHoverStyle:function(elements,mode,enabled){var method=enabled?'setHoverStyle':'removeHoverStyle';var element,i,ilen;for(i=0,ilen=elements.length;i<ilen;++i){element=elements[i];if(element){this.getDatasetMeta(element._datasetIndex).controller[method](element);}}},eventHandler:function(e){var me=this;var tooltip=me.tooltip;if(plugins.notify(me,'beforeEvent',[e])===false){return;}
me._bufferedRender=true;me._bufferedRequest=null;var changed=me.handleEvent(e);changed|=tooltip&&tooltip.handleEvent(e);plugins.notify(me,'afterEvent',[e]);var bufferedRequest=me._bufferedRequest;if(bufferedRequest){me.render(bufferedRequest.duration,bufferedRequest.lazy);}else if(changed&&!me.animating){me.stop();me.render(me.options.hover.animationDuration,true);}
me._bufferedRender=false;me._bufferedRequest=null;return me;},handleEvent:function(e){var me=this;var options=me.options||{};var hoverOptions=options.hover;var changed=false;me.lastActive=me.lastActive||[];if(e.type==='mouseout'){me.active=[];}else{me.active=me.getElementsAtEventForMode(e,hoverOptions.mode,hoverOptions);}
if(hoverOptions.onHover){hoverOptions.onHover.call(me,e.native,me.active);}
if(e.type==='mouseup'||e.type==='click'){if(options.onClick){options.onClick.call(me,e.native,me.active);}}
if(me.lastActive.length){me.updateHoverStyle(me.lastActive,hoverOptions.mode,false);}
if(me.active.length&&hoverOptions.mode){me.updateHoverStyle(me.active,hoverOptions.mode,true);}
changed=!helpers.arrayEquals(me.active,me.lastActive);me.lastActive=me.active;return changed;}});Chart.Controller=Chart;};},{}],24:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;var arrayEvents=['push','pop','shift','splice','unshift'];function listenArrayEvents(array,listener){if(array._chartjs){array._chartjs.listeners.push(listener);return;}
Object.defineProperty(array,'_chartjs',{configurable:true,enumerable:false,value:{listeners:[listener]}});arrayEvents.forEach(function(key){var method='onData'+key.charAt(0).toUpperCase()+key.slice(1);var base=array[key];Object.defineProperty(array,key,{configurable:true,enumerable:false,value:function(){var args=Array.prototype.slice.call(arguments);var res=base.apply(this,args);helpers.each(array._chartjs.listeners,function(object){if(typeof object[method]==='function'){object[method].apply(object,args);}});return res;}});});}
function unlistenArrayEvents(array,listener){var stub=array._chartjs;if(!stub){return;}
var listeners=stub.listeners;var index=listeners.indexOf(listener);if(index!==-1){listeners.splice(index,1);}
if(listeners.length>0){return;}
arrayEvents.forEach(function(key){delete array[key];});delete array._chartjs;}
Chart.DatasetController=function(chart,datasetIndex){this.initialize(chart,datasetIndex);};helpers.extend(Chart.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(chart,datasetIndex){var me=this;me.chart=chart;me.index=datasetIndex;me.linkScales();me.addElements();},updateIndex:function(datasetIndex){this.index=datasetIndex;},linkScales:function(){var me=this;var meta=me.getMeta();var dataset=me.getDataset();if(meta.xAxisID===null){meta.xAxisID=dataset.xAxisID||me.chart.options.scales.xAxes[0].id;}
if(meta.yAxisID===null){meta.yAxisID=dataset.yAxisID||me.chart.options.scales.yAxes[0].id;}},getDataset:function(){return this.chart.data.datasets[this.index];},getMeta:function(){return this.chart.getDatasetMeta(this.index);},getScaleForId:function(scaleID){return this.chart.scales[scaleID];},reset:function(){this.update(true);},destroy:function(){if(this._data){unlistenArrayEvents(this._data,this);}},createMetaDataset:function(){var me=this;var type=me.datasetElementType;return type&&new type({_chart:me.chart,_datasetIndex:me.index});},createMetaData:function(index){var me=this;var type=me.dataElementType;return type&&new type({_chart:me.chart,_datasetIndex:me.index,_index:index});},addElements:function(){var me=this;var meta=me.getMeta();var data=me.getDataset().data||[];var metaData=meta.data;var i,ilen;for(i=0,ilen=data.length;i<ilen;++i){metaData[i]=metaData[i]||me.createMetaData(i);}
meta.dataset=meta.dataset||me.createMetaDataset();},addElementAndReset:function(index){var element=this.createMetaData(index);this.getMeta().data.splice(index,0,element);this.updateElement(element,index,true);},buildOrUpdateElements:function(){var me=this;var dataset=me.getDataset();var data=dataset.data||(dataset.data=[]);if(me._data!==data){if(me._data){unlistenArrayEvents(me._data,me);}
listenArrayEvents(data,me);me._data=data;}
me.resyncElements();},update:helpers.noop,transition:function(easingValue){var meta=this.getMeta();var elements=meta.data||[];var ilen=elements.length;var i=0;for(;i<ilen;++i){elements[i].transition(easingValue);}
if(meta.dataset){meta.dataset.transition(easingValue);}},draw:function(){var meta=this.getMeta();var elements=meta.data||[];var ilen=elements.length;var i=0;if(meta.dataset){meta.dataset.draw();}
for(;i<ilen;++i){elements[i].draw();}},removeHoverStyle:function(element,elementOpts){var dataset=this.chart.data.datasets[element._datasetIndex],index=element._index,custom=element.custom||{},valueOrDefault=helpers.getValueAtIndexOrDefault,model=element._model;model.backgroundColor=custom.backgroundColor?custom.backgroundColor:valueOrDefault(dataset.backgroundColor,index,elementOpts.backgroundColor);model.borderColor=custom.borderColor?custom.borderColor:valueOrDefault(dataset.borderColor,index,elementOpts.borderColor);model.borderWidth=custom.borderWidth?custom.borderWidth:valueOrDefault(dataset.borderWidth,index,elementOpts.borderWidth);},setHoverStyle:function(element){var dataset=this.chart.data.datasets[element._datasetIndex],index=element._index,custom=element.custom||{},valueOrDefault=helpers.getValueAtIndexOrDefault,getHoverColor=helpers.getHoverColor,model=element._model;model.backgroundColor=custom.hoverBackgroundColor?custom.hoverBackgroundColor:valueOrDefault(dataset.hoverBackgroundColor,index,getHoverColor(model.backgroundColor));model.borderColor=custom.hoverBorderColor?custom.hoverBorderColor:valueOrDefault(dataset.hoverBorderColor,index,getHoverColor(model.borderColor));model.borderWidth=custom.hoverBorderWidth?custom.hoverBorderWidth:valueOrDefault(dataset.hoverBorderWidth,index,model.borderWidth);},resyncElements:function(){var me=this;var meta=me.getMeta();var data=me.getDataset().data;var numMeta=meta.data.length;var numData=data.length;if(numData<numMeta){meta.data.splice(numData,numMeta-numData);}else if(numData>numMeta){me.insertElements(numMeta,numData-numMeta);}},insertElements:function(start,count){for(var i=0;i<count;++i){this.addElementAndReset(start+i);}},onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length);},onDataPop:function(){this.getMeta().data.pop();},onDataShift:function(){this.getMeta().data.shift();},onDataSplice:function(start,count){this.getMeta().data.splice(start,count);this.insertElements(start,arguments.length-2);},onDataUnshift:function(){this.insertElements(0,arguments.length);}});Chart.DatasetController.extend=helpers.inherits;};},{}],25:[function(require,module,exports){'use strict';var color=require(2);module.exports=function(Chart){var helpers=Chart.helpers;function interpolate(start,view,model,ease){var keys=Object.keys(model);var i,ilen,key,actual,origin,target,type,c0,c1;for(i=0,ilen=keys.length;i<ilen;++i){key=keys[i];target=model[key];if(!view.hasOwnProperty(key)){view[key]=target;}
actual=view[key];if(actual===target||key[0]==='_'){continue;}
if(!start.hasOwnProperty(key)){start[key]=actual;}
origin=start[key];type=typeof(target);if(type===typeof(origin)){if(type==='string'){c0=color(origin);if(c0.valid){c1=color(target);if(c1.valid){view[key]=c1.mix(c0,ease).rgbString();continue;}}}else if(type==='number'&&isFinite(origin)&&isFinite(target)){view[key]=origin+(target-origin)*ease;continue;}}
view[key]=target;}}
Chart.elements={};Chart.Element=function(configuration){helpers.extend(this,configuration);this.initialize.apply(this,arguments);};helpers.extend(Chart.Element.prototype,{initialize:function(){this.hidden=false;},pivot:function(){var me=this;if(!me._view){me._view=helpers.clone(me._model);}
me._start={};return me;},transition:function(ease){var me=this;var model=me._model;var start=me._start;var view=me._view;if(!model||ease===1){me._view=model;me._start=null;return me;}
if(!view){view=me._view={};}
if(!start){start=me._start={};}
interpolate(start,view,model,ease);return me;},tooltipPosition:function(){return{x:this._model.x,y:this._model.y};},hasValue:function(){return helpers.isNumber(this._model.x)&&helpers.isNumber(this._model.y);}});Chart.Element.extend=helpers.inherits;};},{"2":2}],26:[function(require,module,exports){'use strict';var color=require(2);module.exports=function(Chart){var helpers=Chart.helpers={};helpers.each=function(loopable,callback,self,reverse){var i,len;if(helpers.isArray(loopable)){len=loopable.length;if(reverse){for(i=len-1;i>=0;i--){callback.call(self,loopable[i],i);}}else{for(i=0;i<len;i++){callback.call(self,loopable[i],i);}}}else if(typeof loopable==='object'){var keys=Object.keys(loopable);len=keys.length;for(i=0;i<len;i++){callback.call(self,loopable[keys[i]],keys[i]);}}};helpers.clone=function(obj){var objClone={};helpers.each(obj,function(value,key){if(helpers.isArray(value)){objClone[key]=value.slice(0);}else if(typeof value==='object'&&value!==null){objClone[key]=helpers.clone(value);}else{objClone[key]=value;}});return objClone;};helpers.extend=function(base){var setFn=function(value,key){base[key]=value;};for(var i=1,ilen=arguments.length;i<ilen;i++){helpers.each(arguments[i],setFn);}
return base;};helpers.configMerge=function(_base){var base=helpers.clone(_base);helpers.each(Array.prototype.slice.call(arguments,1),function(extension){helpers.each(extension,function(value,key){var baseHasProperty=base.hasOwnProperty(key);var baseVal=baseHasProperty?base[key]:{};if(key==='scales'){base[key]=helpers.scaleMerge(baseVal,value);}else if(key==='scale'){base[key]=helpers.configMerge(baseVal,Chart.scaleService.getScaleDefaults(value.type),value);}else if(baseHasProperty&&typeof baseVal==='object'&&!helpers.isArray(baseVal)&&baseVal!==null&&typeof value==='object'&&!helpers.isArray(value)){base[key]=helpers.configMerge(baseVal,value);}else{base[key]=value;}});});return base;};helpers.scaleMerge=function(_base,extension){var base=helpers.clone(_base);helpers.each(extension,function(value,key){if(key==='xAxes'||key==='yAxes'){if(base.hasOwnProperty(key)){helpers.each(value,function(valueObj,index){var axisType=helpers.getValueOrDefault(valueObj.type,key==='xAxes'?'category':'linear');var axisDefaults=Chart.scaleService.getScaleDefaults(axisType);if(index>=base[key].length||!base[key][index].type){base[key].push(helpers.configMerge(axisDefaults,valueObj));}else if(valueObj.type&&valueObj.type!==base[key][index].type){base[key][index]=helpers.configMerge(base[key][index],axisDefaults,valueObj);}else{base[key][index]=helpers.configMerge(base[key][index],valueObj);}});}else{base[key]=[];helpers.each(value,function(valueObj){var axisType=helpers.getValueOrDefault(valueObj.type,key==='xAxes'?'category':'linear');base[key].push(helpers.configMerge(Chart.scaleService.getScaleDefaults(axisType),valueObj));});}}else if(base.hasOwnProperty(key)&&typeof base[key]==='object'&&base[key]!==null&&typeof value==='object'){base[key]=helpers.configMerge(base[key],value);}else{base[key]=value;}});return base;};helpers.getValueAtIndexOrDefault=function(value,index,defaultValue){if(value===undefined||value===null){return defaultValue;}
if(helpers.isArray(value)){return index<value.length?value[index]:defaultValue;}
return value;};helpers.getValueOrDefault=function(value,defaultValue){return value===undefined?defaultValue:value;};helpers.indexOf=Array.prototype.indexOf?function(array,item){return array.indexOf(item);}:function(array,item){for(var i=0,ilen=array.length;i<ilen;++i){if(array[i]===item){return i;}}
return-1;};helpers.where=function(collection,filterCallback){if(helpers.isArray(collection)&&Array.prototype.filter){return collection.filter(filterCallback);}
var filtered=[];helpers.each(collection,function(item){if(filterCallback(item)){filtered.push(item);}});return filtered;};helpers.findIndex=Array.prototype.findIndex?function(array,callback,scope){return array.findIndex(callback,scope);}:function(array,callback,scope){scope=scope===undefined?array:scope;for(var i=0,ilen=array.length;i<ilen;++i){if(callback.call(scope,array[i],i,array)){return i;}}
return-1;};helpers.findNextWhere=function(arrayToSearch,filterCallback,startIndex){if(startIndex===undefined||startIndex===null){startIndex=-1;}
for(var i=startIndex+1;i<arrayToSearch.length;i++){var currentItem=arrayToSearch[i];if(filterCallback(currentItem)){return currentItem;}}};helpers.findPreviousWhere=function(arrayToSearch,filterCallback,startIndex){if(startIndex===undefined||startIndex===null){startIndex=arrayToSearch.length;}
for(var i=startIndex-1;i>=0;i--){var currentItem=arrayToSearch[i];if(filterCallback(currentItem)){return currentItem;}}};helpers.inherits=function(extensions){var me=this;var ChartElement=(extensions&&extensions.hasOwnProperty('constructor'))?extensions.constructor:function(){return me.apply(this,arguments);};var Surrogate=function(){this.constructor=ChartElement;};Surrogate.prototype=me.prototype;ChartElement.prototype=new Surrogate();ChartElement.extend=helpers.inherits;if(extensions){helpers.extend(ChartElement.prototype,extensions);}
ChartElement.__super__=me.prototype;return ChartElement;};helpers.noop=function(){};helpers.uid=(function(){var id=0;return function(){return id++;};}());helpers.isNumber=function(n){return!isNaN(parseFloat(n))&&isFinite(n);};helpers.almostEquals=function(x,y,epsilon){return Math.abs(x-y)<epsilon;};helpers.almostWhole=function(x,epsilon){var rounded=Math.round(x);return(((rounded-epsilon)<x)&&((rounded+epsilon)>x));};helpers.max=function(array){return array.reduce(function(max,value){if(!isNaN(value)){return Math.max(max,value);}
return max;},Number.NEGATIVE_INFINITY);};helpers.min=function(array){return array.reduce(function(min,value){if(!isNaN(value)){return Math.min(min,value);}
return min;},Number.POSITIVE_INFINITY);};helpers.sign=Math.sign?function(x){return Math.sign(x);}:function(x){x=+x;if(x===0||isNaN(x)){return x;}
return x>0?1:-1;};helpers.log10=Math.log10?function(x){return Math.log10(x);}:function(x){return Math.log(x)/Math.LN10;};helpers.toRadians=function(degrees){return degrees*(Math.PI/180);};helpers.toDegrees=function(radians){return radians*(180/Math.PI);};helpers.getAngleFromPoint=function(centrePoint,anglePoint){var distanceFromXCenter=anglePoint.x-centrePoint.x,distanceFromYCenter=anglePoint.y-centrePoint.y,radialDistanceFromCenter=Math.sqrt(distanceFromXCenter*distanceFromXCenter+distanceFromYCenter*distanceFromYCenter);var angle=Math.atan2(distanceFromYCenter,distanceFromXCenter);if(angle<(-0.5*Math.PI)){angle+=2.0*Math.PI;}
return{angle:angle,distance:radialDistanceFromCenter};};helpers.distanceBetweenPoints=function(pt1,pt2){return Math.sqrt(Math.pow(pt2.x-pt1.x,2)+Math.pow(pt2.y-pt1.y,2));};helpers.aliasPixel=function(pixelWidth){return(pixelWidth%2===0)?0:0.5;};helpers.splineCurve=function(firstPoint,middlePoint,afterPoint,t){var previous=firstPoint.skip?middlePoint:firstPoint,current=middlePoint,next=afterPoint.skip?middlePoint:afterPoint;var d01=Math.sqrt(Math.pow(current.x-previous.x,2)+Math.pow(current.y-previous.y,2));var d12=Math.sqrt(Math.pow(next.x-current.x,2)+Math.pow(next.y-current.y,2));var s01=d01/(d01+d12);var s12=d12/(d01+d12);s01=isNaN(s01)?0:s01;s12=isNaN(s12)?0:s12;var fa=t*s01;var fb=t*s12;return{previous:{x:current.x-fa*(next.x-previous.x),y:current.y-fa*(next.y-previous.y)},next:{x:current.x+fb*(next.x-previous.x),y:current.y+fb*(next.y-previous.y)}};};helpers.EPSILON=Number.EPSILON||1e-14;helpers.splineCurveMonotone=function(points){var pointsWithTangents=(points||[]).map(function(point){return{model:point._model,deltaK:0,mK:0};});var pointsLen=pointsWithTangents.length;var i,pointBefore,pointCurrent,pointAfter;for(i=0;i<pointsLen;++i){pointCurrent=pointsWithTangents[i];if(pointCurrent.model.skip){continue;}
pointBefore=i>0?pointsWithTangents[i-1]:null;pointAfter=i<pointsLen-1?pointsWithTangents[i+1]:null;if(pointAfter&&!pointAfter.model.skip){var slopeDeltaX=(pointAfter.model.x-pointCurrent.model.x);pointCurrent.deltaK=slopeDeltaX!==0?(pointAfter.model.y-pointCurrent.model.y)/slopeDeltaX:0;}
if(!pointBefore||pointBefore.model.skip){pointCurrent.mK=pointCurrent.deltaK;}else if(!pointAfter||pointAfter.model.skip){pointCurrent.mK=pointBefore.deltaK;}else if(this.sign(pointBefore.deltaK)!==this.sign(pointCurrent.deltaK)){pointCurrent.mK=0;}else{pointCurrent.mK=(pointBefore.deltaK+pointCurrent.deltaK)/2;}}
var alphaK,betaK,tauK,squaredMagnitude;for(i=0;i<pointsLen-1;++i){pointCurrent=pointsWithTangents[i];pointAfter=pointsWithTangents[i+1];if(pointCurrent.model.skip||pointAfter.model.skip){continue;}
if(helpers.almostEquals(pointCurrent.deltaK,0,this.EPSILON)){pointCurrent.mK=pointAfter.mK=0;continue;}
alphaK=pointCurrent.mK/pointCurrent.deltaK;betaK=pointAfter.mK/pointCurrent.deltaK;squaredMagnitude=Math.pow(alphaK,2)+Math.pow(betaK,2);if(squaredMagnitude<=9){continue;}
tauK=3/Math.sqrt(squaredMagnitude);pointCurrent.mK=alphaK*tauK*pointCurrent.deltaK;pointAfter.mK=betaK*tauK*pointCurrent.deltaK;}
var deltaX;for(i=0;i<pointsLen;++i){pointCurrent=pointsWithTangents[i];if(pointCurrent.model.skip){continue;}
pointBefore=i>0?pointsWithTangents[i-1]:null;pointAfter=i<pointsLen-1?pointsWithTangents[i+1]:null;if(pointBefore&&!pointBefore.model.skip){deltaX=(pointCurrent.model.x-pointBefore.model.x)/3;pointCurrent.model.controlPointPreviousX=pointCurrent.model.x-deltaX;pointCurrent.model.controlPointPreviousY=pointCurrent.model.y-deltaX*pointCurrent.mK;}
if(pointAfter&&!pointAfter.model.skip){deltaX=(pointAfter.model.x-pointCurrent.model.x)/3;pointCurrent.model.controlPointNextX=pointCurrent.model.x+deltaX;pointCurrent.model.controlPointNextY=pointCurrent.model.y+deltaX*pointCurrent.mK;}}};helpers.nextItem=function(collection,index,loop){if(loop){return index>=collection.length-1?collection[0]:collection[index+1];}
return index>=collection.length-1?collection[collection.length-1]:collection[index+1];};helpers.previousItem=function(collection,index,loop){if(loop){return index<=0?collection[collection.length-1]:collection[index-1];}
return index<=0?collection[0]:collection[index-1];};helpers.niceNum=function(range,round){var exponent=Math.floor(helpers.log10(range));var fraction=range/Math.pow(10,exponent);var niceFraction;if(round){if(fraction<1.5){niceFraction=1;}else if(fraction<3){niceFraction=2;}else if(fraction<7){niceFraction=5;}else{niceFraction=10;}}else if(fraction<=1.0){niceFraction=1;}else if(fraction<=2){niceFraction=2;}else if(fraction<=5){niceFraction=5;}else{niceFraction=10;}
return niceFraction*Math.pow(10,exponent);};var easingEffects=helpers.easingEffects={linear:function(t){return t;},easeInQuad:function(t){return t*t;},easeOutQuad:function(t){return-1*t*(t-2);},easeInOutQuad:function(t){if((t/=1/2)<1){return 1/2*t*t;}
return-1/2*((--t)*(t-2)-1);},easeInCubic:function(t){return t*t*t;},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1);},easeInOutCubic:function(t){if((t/=1/2)<1){return 1/2*t*t*t;}
return 1/2*((t-=2)*t*t+2);},easeInQuart:function(t){return t*t*t*t;},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1);},easeInOutQuart:function(t){if((t/=1/2)<1){return 1/2*t*t*t*t;}
return-1/2*((t-=2)*t*t*t-2);},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t;},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1);},easeInOutQuint:function(t){if((t/=1/2)<1){return 1/2*t*t*t*t*t;}
return 1/2*((t-=2)*t*t*t*t+2);},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1;},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2));},easeInOutSine:function(t){return-1/2*(Math.cos(Math.PI*t/1)-1);},easeInExpo:function(t){return(t===0)?1:1*Math.pow(2,10*(t/1-1));},easeOutExpo:function(t){return(t===1)?1:1*(-Math.pow(2,-10*t/1)+1);},easeInOutExpo:function(t){if(t===0){return 0;}
if(t===1){return 1;}
if((t/=1/2)<1){return 1/2*Math.pow(2,10*(t-1));}
return 1/2*(-Math.pow(2,-10*--t)+2);},easeInCirc:function(t){if(t>=1){return t;}
return-1*(Math.sqrt(1-(t/=1)*t)-1);},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t);},easeInOutCirc:function(t){if((t/=1/2)<1){return-1/2*(Math.sqrt(1-t*t)-1);}
return 1/2*(Math.sqrt(1-(t-=2)*t)+1);},easeInElastic:function(t){var s=1.70158;var p=0;var a=1;if(t===0){return 0;}
if((t/=1)===1){return 1;}
if(!p){p=1*0.3;}
if(a<Math.abs(1)){a=1;s=p/4;}else{s=p/(2*Math.PI)*Math.asin(1/a);}
return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*1-s)*(2*Math.PI)/p));},easeOutElastic:function(t){var s=1.70158;var p=0;var a=1;if(t===0){return 0;}
if((t/=1)===1){return 1;}
if(!p){p=1*0.3;}
if(a<Math.abs(1)){a=1;s=p/4;}else{s=p/(2*Math.PI)*Math.asin(1/a);}
return a*Math.pow(2,-10*t)*Math.sin((t*1-s)*(2*Math.PI)/p)+1;},easeInOutElastic:function(t){var s=1.70158;var p=0;var a=1;if(t===0){return 0;}
if((t/=1/2)===2){return 1;}
if(!p){p=1*(0.3*1.5);}
if(a<Math.abs(1)){a=1;s=p/4;}else{s=p/(2*Math.PI)*Math.asin(1/a);}
if(t<1){return-0.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*1-s)*(2*Math.PI)/p));}
return a*Math.pow(2,-10*(t-=1))*Math.sin((t*1-s)*(2*Math.PI)/p)*0.5+1;},easeInBack:function(t){var s=1.70158;return 1*(t/=1)*t*((s+1)*t-s);},easeOutBack:function(t){var s=1.70158;return 1*((t=t/1-1)*t*((s+1)*t+s)+1);},easeInOutBack:function(t){var s=1.70158;if((t/=1/2)<1){return 1/2*(t*t*(((s*=(1.525))+1)*t-s));}
return 1/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2);},easeInBounce:function(t){return 1-easingEffects.easeOutBounce(1-t);},easeOutBounce:function(t){if((t/=1)<(1/2.75)){return 1*(7.5625*t*t);}else if(t<(2/2.75)){return 1*(7.5625*(t-=(1.5/2.75))*t+0.75);}else if(t<(2.5/2.75)){return 1*(7.5625*(t-=(2.25/2.75))*t+0.9375);}
return 1*(7.5625*(t-=(2.625/2.75))*t+0.984375);},easeInOutBounce:function(t){if(t<1/2){return easingEffects.easeInBounce(t*2)*0.5;}
return easingEffects.easeOutBounce(t*2-1)*0.5+1*0.5;}};helpers.requestAnimFrame=(function(){if(typeof window==='undefined'){return function(callback){callback();};}
return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return window.setTimeout(callback,1000/60);};}());helpers.getRelativePosition=function(evt,chart){var mouseX,mouseY;var e=evt.originalEvent||evt,canvas=evt.currentTarget||evt.srcElement,boundingRect=canvas.getBoundingClientRect();var touches=e.touches;if(touches&&touches.length>0){mouseX=touches[0].clientX;mouseY=touches[0].clientY;}else{mouseX=e.clientX;mouseY=e.clientY;}
var paddingLeft=parseFloat(helpers.getStyle(canvas,'padding-left'));var paddingTop=parseFloat(helpers.getStyle(canvas,'padding-top'));var paddingRight=parseFloat(helpers.getStyle(canvas,'padding-right'));var paddingBottom=parseFloat(helpers.getStyle(canvas,'padding-bottom'));var width=boundingRect.right-boundingRect.left-paddingLeft-paddingRight;var height=boundingRect.bottom-boundingRect.top-paddingTop-paddingBottom;mouseX=Math.round((mouseX-boundingRect.left-paddingLeft)/(width)*canvas.width/chart.currentDevicePixelRatio);mouseY=Math.round((mouseY-boundingRect.top-paddingTop)/(height)*canvas.height/chart.currentDevicePixelRatio);return{x:mouseX,y:mouseY};};helpers.addEvent=function(node,eventType,method){if(node.addEventListener){node.addEventListener(eventType,method);}else if(node.attachEvent){node.attachEvent('on'+eventType,method);}else{node['on'+eventType]=method;}};helpers.removeEvent=function(node,eventType,handler){if(node.removeEventListener){node.removeEventListener(eventType,handler,false);}else if(node.detachEvent){node.detachEvent('on'+eventType,handler);}else{node['on'+eventType]=helpers.noop;}};function parseMaxStyle(styleValue,node,parentProperty){var valueInPixels;if(typeof(styleValue)==='string'){valueInPixels=parseInt(styleValue,10);if(styleValue.indexOf('%')!==-1){valueInPixels=valueInPixels/100*node.parentNode[parentProperty];}}else{valueInPixels=styleValue;}
return valueInPixels;}
function isConstrainedValue(value){return value!==undefined&&value!==null&&value!=='none';}
function getConstraintDimension(domNode,maxStyle,percentageProperty){var view=document.defaultView;var parentNode=domNode.parentNode;var constrainedNode=view.getComputedStyle(domNode)[maxStyle];var constrainedContainer=view.getComputedStyle(parentNode)[maxStyle];var hasCNode=isConstrainedValue(constrainedNode);var hasCContainer=isConstrainedValue(constrainedContainer);var infinity=Number.POSITIVE_INFINITY;if(hasCNode||hasCContainer){return Math.min(hasCNode?parseMaxStyle(constrainedNode,domNode,percentageProperty):infinity,hasCContainer?parseMaxStyle(constrainedContainer,parentNode,percentageProperty):infinity);}
return'none';}
helpers.getConstraintWidth=function(domNode){return getConstraintDimension(domNode,'max-width','clientWidth');};helpers.getConstraintHeight=function(domNode){return getConstraintDimension(domNode,'max-height','clientHeight');};helpers.getMaximumWidth=function(domNode){var container=domNode.parentNode;var paddingLeft=parseInt(helpers.getStyle(container,'padding-left'),10);var paddingRight=parseInt(helpers.getStyle(container,'padding-right'),10);var w=container.clientWidth-paddingLeft-paddingRight;var cw=helpers.getConstraintWidth(domNode);return isNaN(cw)?w:Math.min(w,cw);};helpers.getMaximumHeight=function(domNode){var container=domNode.parentNode;var paddingTop=parseInt(helpers.getStyle(container,'padding-top'),10);var paddingBottom=parseInt(helpers.getStyle(container,'padding-bottom'),10);var h=container.clientHeight-paddingTop-paddingBottom;var ch=helpers.getConstraintHeight(domNode);return isNaN(ch)?h:Math.min(h,ch);};helpers.getStyle=function(el,property){return el.currentStyle?el.currentStyle[property]:document.defaultView.getComputedStyle(el,null).getPropertyValue(property);};helpers.retinaScale=function(chart){var pixelRatio=chart.currentDevicePixelRatio=window.devicePixelRatio||1;if(pixelRatio===1){return;}
var canvas=chart.canvas;var height=chart.height;var width=chart.width;canvas.height=height*pixelRatio;canvas.width=width*pixelRatio;chart.ctx.scale(pixelRatio,pixelRatio);canvas.style.height=height+'px';canvas.style.width=width+'px';};helpers.clear=function(chart){chart.ctx.clearRect(0,0,chart.width,chart.height);};helpers.fontString=function(pixelSize,fontStyle,fontFamily){return fontStyle+' '+pixelSize+'px '+fontFamily;};helpers.longestText=function(ctx,font,arrayOfThings,cache){cache=cache||{};var data=cache.data=cache.data||{};var gc=cache.garbageCollect=cache.garbageCollect||[];if(cache.font!==font){data=cache.data={};gc=cache.garbageCollect=[];cache.font=font;}
ctx.font=font;var longest=0;helpers.each(arrayOfThings,function(thing){if(thing!==undefined&&thing!==null&&helpers.isArray(thing)!==true){longest=helpers.measureText(ctx,data,gc,longest,thing);}else if(helpers.isArray(thing)){helpers.each(thing,function(nestedThing){if(nestedThing!==undefined&&nestedThing!==null&&!helpers.isArray(nestedThing)){longest=helpers.measureText(ctx,data,gc,longest,nestedThing);}});}});var gcLen=gc.length/2;if(gcLen>arrayOfThings.length){for(var i=0;i<gcLen;i++){delete data[gc[i]];}
gc.splice(0,gcLen);}
return longest;};helpers.measureText=function(ctx,data,gc,longest,string){var textWidth=data[string];if(!textWidth){textWidth=data[string]=ctx.measureText(string).width;gc.push(string);}
if(textWidth>longest){longest=textWidth;}
return longest;};helpers.numberOfLabelLines=function(arrayOfThings){var numberOfLines=1;helpers.each(arrayOfThings,function(thing){if(helpers.isArray(thing)){if(thing.length>numberOfLines){numberOfLines=thing.length;}}});return numberOfLines;};helpers.drawRoundedRectangle=function(ctx,x,y,width,height,radius){ctx.beginPath();ctx.moveTo(x+radius,y);ctx.lineTo(x+width-radius,y);ctx.quadraticCurveTo(x+width,y,x+width,y+radius);ctx.lineTo(x+width,y+height-radius);ctx.quadraticCurveTo(x+width,y+height,x+width-radius,y+height);ctx.lineTo(x+radius,y+height);ctx.quadraticCurveTo(x,y+height,x,y+height-radius);ctx.lineTo(x,y+radius);ctx.quadraticCurveTo(x,y,x+radius,y);ctx.closePath();};helpers.color=!color?function(value){console.error('Color.js not found!');return value;}:function(value){if(value instanceof CanvasGradient){value=Chart.defaults.global.defaultColor;}
return color(value);};helpers.isArray=Array.isArray?function(obj){return Array.isArray(obj);}:function(obj){return Object.prototype.toString.call(obj)==='[object Array]';};helpers.arrayEquals=function(a0,a1){var i,ilen,v0,v1;if(!a0||!a1||a0.length!==a1.length){return false;}
for(i=0,ilen=a0.length;i<ilen;++i){v0=a0[i];v1=a1[i];if(v0 instanceof Array&&v1 instanceof Array){if(!helpers.arrayEquals(v0,v1)){return false;}}else if(v0!==v1){return false;}}
return true;};helpers.callback=function(fn,args,thisArg){if(fn&&typeof fn.call==='function'){fn.apply(thisArg,args);}};helpers.getHoverColor=function(colorValue){return(colorValue instanceof CanvasPattern)?colorValue:helpers.color(colorValue).saturate(0.5).darken(0.1).rgbString();};helpers.callCallback=helpers.callback;};},{"2":2}],27:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;function getRelativePosition(e,chart){if(e.native){return{x:e.x,y:e.y};}
return helpers.getRelativePosition(e,chart);}
function parseVisibleItems(chart,handler){var datasets=chart.data.datasets;var meta,i,j,ilen,jlen;for(i=0,ilen=datasets.length;i<ilen;++i){if(!chart.isDatasetVisible(i)){continue;}
meta=chart.getDatasetMeta(i);for(j=0,jlen=meta.data.length;j<jlen;++j){var element=meta.data[j];if(!element._view.skip){handler(element);}}}}
function getIntersectItems(chart,position){var elements=[];parseVisibleItems(chart,function(element){if(element.inRange(position.x,position.y)){elements.push(element);}});return elements;}
function getNearestItems(chart,position,intersect,distanceMetric){var minDistance=Number.POSITIVE_INFINITY;var nearestItems=[];if(!distanceMetric){distanceMetric=helpers.distanceBetweenPoints;}
parseVisibleItems(chart,function(element){if(intersect&&!element.inRange(position.x,position.y)){return;}
var center=element.getCenterPoint();var distance=distanceMetric(position,center);if(distance<minDistance){nearestItems=[element];minDistance=distance;}else if(distance===minDistance){nearestItems.push(element);}});return nearestItems;}
function indexMode(chart,e,options){var position=getRelativePosition(e,chart);var distanceMetric=function(pt1,pt2){return Math.abs(pt1.x-pt2.x);};var items=options.intersect?getIntersectItems(chart,position):getNearestItems(chart,position,false,distanceMetric);var elements=[];if(!items.length){return[];}
chart.data.datasets.forEach(function(dataset,datasetIndex){if(chart.isDatasetVisible(datasetIndex)){var meta=chart.getDatasetMeta(datasetIndex),element=meta.data[items[0]._index];if(element&&!element._view.skip){elements.push(element);}}});return elements;}
Chart.Interaction={modes:{single:function(chart,e){var position=getRelativePosition(e,chart);var elements=[];parseVisibleItems(chart,function(element){if(element.inRange(position.x,position.y)){elements.push(element);return elements;}});return elements.slice(0,1);},label:indexMode,index:indexMode,dataset:function(chart,e,options){var position=getRelativePosition(e,chart);var items=options.intersect?getIntersectItems(chart,position):getNearestItems(chart,position,false);if(items.length>0){items=chart.getDatasetMeta(items[0]._datasetIndex).data;}
return items;},'x-axis':function(chart,e){return indexMode(chart,e,true);},point:function(chart,e){var position=getRelativePosition(e,chart);return getIntersectItems(chart,position);},nearest:function(chart,e,options){var position=getRelativePosition(e,chart);var nearestItems=getNearestItems(chart,position,options.intersect);if(nearestItems.length>1){nearestItems.sort(function(a,b){var sizeA=a.getArea();var sizeB=b.getArea();var ret=sizeA-sizeB;if(ret===0){ret=a._datasetIndex-b._datasetIndex;}
return ret;});}
return nearestItems.slice(0,1);},x:function(chart,e,options){var position=getRelativePosition(e,chart);var items=[];var intersectsItem=false;parseVisibleItems(chart,function(element){if(element.inXRange(position.x)){items.push(element);}
if(element.inRange(position.x,position.y)){intersectsItem=true;}});if(options.intersect&&!intersectsItem){items=[];}
return items;},y:function(chart,e,options){var position=getRelativePosition(e,chart);var items=[];var intersectsItem=false;parseVisibleItems(chart,function(element){if(element.inYRange(position.y)){items.push(element);}
if(element.inRange(position.x,position.y)){intersectsItem=true;}});if(options.intersect&&!intersectsItem){items=[];}
return items;}}};};},{}],28:[function(require,module,exports){'use strict';module.exports=function(){var Chart=function(item,config){this.construct(item,config);return this;};Chart.defaults={global:{responsive:true,responsiveAnimationDuration:0,maintainAspectRatio:true,events:['mousemove','mouseout','click','touchstart','touchmove'],hover:{onHover:null,mode:'nearest',intersect:true,animationDuration:400},onClick:null,defaultColor:'rgba(0,0,0,0.1)',defaultFontColor:'#666',defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:'normal',showLines:true,elements:{},legendCallback:function(chart){var text=[];text.push('<ul class="'+chart.id+'-legend">');for(var i=0;i<chart.data.datasets.length;i++){text.push('<li><span style="background-color:'+chart.data.datasets[i].backgroundColor+'"></span>');if(chart.data.datasets[i].label){text.push(chart.data.datasets[i].label);}
text.push('</li>');}
text.push('</ul>');return text.join('');}}};Chart.Chart=Chart;return Chart;};},{}],29:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;function filterByPosition(array,position){return helpers.where(array,function(v){return v.position===position;});}
function sortByWeight(array,reverse){array.forEach(function(v,i){v._tmpIndex_=i;return v;});array.sort(function(a,b){var v0=reverse?b:a;var v1=reverse?a:b;return v0.weight===v1.weight?v0._tmpIndex_-v1._tmpIndex_:v0.weight-v1.weight;});array.forEach(function(v){delete v._tmpIndex_;});}
Chart.layoutService={defaults:{},addBox:function(chart,item){if(!chart.boxes){chart.boxes=[];}
item.fullWidth=item.fullWidth||false;item.position=item.position||'top';item.weight=item.weight||0;chart.boxes.push(item);},removeBox:function(chart,layoutItem){var index=chart.boxes?chart.boxes.indexOf(layoutItem):-1;if(index!==-1){chart.boxes.splice(index,1);}},configure:function(chart,item,options){var props=['fullWidth','position','weight'];var ilen=props.length;var i=0;var prop;for(;i<ilen;++i){prop=props[i];if(options.hasOwnProperty(prop)){item[prop]=options[prop];}}},update:function(chart,width,height){if(!chart){return;}
var layoutOptions=chart.options.layout;var padding=layoutOptions?layoutOptions.padding:null;var leftPadding=0;var rightPadding=0;var topPadding=0;var bottomPadding=0;if(!isNaN(padding)){leftPadding=padding;rightPadding=padding;topPadding=padding;bottomPadding=padding;}else{leftPadding=padding.left||0;rightPadding=padding.right||0;topPadding=padding.top||0;bottomPadding=padding.bottom||0;}
var leftBoxes=filterByPosition(chart.boxes,'left');var rightBoxes=filterByPosition(chart.boxes,'right');var topBoxes=filterByPosition(chart.boxes,'top');var bottomBoxes=filterByPosition(chart.boxes,'bottom');var chartAreaBoxes=filterByPosition(chart.boxes,'chartArea');sortByWeight(leftBoxes,true);sortByWeight(rightBoxes,false);sortByWeight(topBoxes,true);sortByWeight(bottomBoxes,false);var chartWidth=width-leftPadding-rightPadding;var chartHeight=height-topPadding-bottomPadding;var chartAreaWidth=chartWidth/2;var chartAreaHeight=chartHeight/2;var verticalBoxWidth=(width-chartAreaWidth)/(leftBoxes.length+rightBoxes.length);var horizontalBoxHeight=(height-chartAreaHeight)/(topBoxes.length+bottomBoxes.length);var maxChartAreaWidth=chartWidth;var maxChartAreaHeight=chartHeight;var minBoxSizes=[];function getMinimumBoxSize(box){var minSize;var isHorizontal=box.isHorizontal();if(isHorizontal){minSize=box.update(box.fullWidth?chartWidth:maxChartAreaWidth,horizontalBoxHeight);maxChartAreaHeight-=minSize.height;}else{minSize=box.update(verticalBoxWidth,chartAreaHeight);maxChartAreaWidth-=minSize.width;}
minBoxSizes.push({horizontal:isHorizontal,minSize:minSize,box:box,});}
helpers.each(leftBoxes.concat(rightBoxes,topBoxes,bottomBoxes),getMinimumBoxSize);var maxHorizontalLeftPadding=0;var maxHorizontalRightPadding=0;var maxVerticalTopPadding=0;var maxVerticalBottomPadding=0;helpers.each(topBoxes.concat(bottomBoxes),function(horizontalBox){if(horizontalBox.getPadding){var boxPadding=horizontalBox.getPadding();maxHorizontalLeftPadding=Math.max(maxHorizontalLeftPadding,boxPadding.left);maxHorizontalRightPadding=Math.max(maxHorizontalRightPadding,boxPadding.right);}});helpers.each(leftBoxes.concat(rightBoxes),function(verticalBox){if(verticalBox.getPadding){var boxPadding=verticalBox.getPadding();maxVerticalTopPadding=Math.max(maxVerticalTopPadding,boxPadding.top);maxVerticalBottomPadding=Math.max(maxVerticalBottomPadding,boxPadding.bottom);}});var totalLeftBoxesWidth=leftPadding;var totalRightBoxesWidth=rightPadding;var totalTopBoxesHeight=topPadding;var totalBottomBoxesHeight=bottomPadding;function fitBox(box){var minBoxSize=helpers.findNextWhere(minBoxSizes,function(minBox){return minBox.box===box;});if(minBoxSize){if(box.isHorizontal()){var scaleMargin={left:Math.max(totalLeftBoxesWidth,maxHorizontalLeftPadding),right:Math.max(totalRightBoxesWidth,maxHorizontalRightPadding),top:0,bottom:0};box.update(box.fullWidth?chartWidth:maxChartAreaWidth,chartHeight/2,scaleMargin);}else{box.update(minBoxSize.minSize.width,maxChartAreaHeight);}}}
helpers.each(leftBoxes.concat(rightBoxes),fitBox);helpers.each(leftBoxes,function(box){totalLeftBoxesWidth+=box.width;});helpers.each(rightBoxes,function(box){totalRightBoxesWidth+=box.width;});helpers.each(topBoxes.concat(bottomBoxes),fitBox);helpers.each(topBoxes,function(box){totalTopBoxesHeight+=box.height;});helpers.each(bottomBoxes,function(box){totalBottomBoxesHeight+=box.height;});function finalFitVerticalBox(box){var minBoxSize=helpers.findNextWhere(minBoxSizes,function(minSize){return minSize.box===box;});var scaleMargin={left:0,right:0,top:totalTopBoxesHeight,bottom:totalBottomBoxesHeight};if(minBoxSize){box.update(minBoxSize.minSize.width,maxChartAreaHeight,scaleMargin);}}
helpers.each(leftBoxes.concat(rightBoxes),finalFitVerticalBox);totalLeftBoxesWidth=leftPadding;totalRightBoxesWidth=rightPadding;totalTopBoxesHeight=topPadding;totalBottomBoxesHeight=bottomPadding;helpers.each(leftBoxes,function(box){totalLeftBoxesWidth+=box.width;});helpers.each(rightBoxes,function(box){totalRightBoxesWidth+=box.width;});helpers.each(topBoxes,function(box){totalTopBoxesHeight+=box.height;});helpers.each(bottomBoxes,function(box){totalBottomBoxesHeight+=box.height;});var leftPaddingAddition=Math.max(maxHorizontalLeftPadding-totalLeftBoxesWidth,0);totalLeftBoxesWidth+=leftPaddingAddition;totalRightBoxesWidth+=Math.max(maxHorizontalRightPadding-totalRightBoxesWidth,0);var topPaddingAddition=Math.max(maxVerticalTopPadding-totalTopBoxesHeight,0);totalTopBoxesHeight+=topPaddingAddition;totalBottomBoxesHeight+=Math.max(maxVerticalBottomPadding-totalBottomBoxesHeight,0);var newMaxChartAreaHeight=height-totalTopBoxesHeight-totalBottomBoxesHeight;var newMaxChartAreaWidth=width-totalLeftBoxesWidth-totalRightBoxesWidth;if(newMaxChartAreaWidth!==maxChartAreaWidth||newMaxChartAreaHeight!==maxChartAreaHeight){helpers.each(leftBoxes,function(box){box.height=newMaxChartAreaHeight;});helpers.each(rightBoxes,function(box){box.height=newMaxChartAreaHeight;});helpers.each(topBoxes,function(box){if(!box.fullWidth){box.width=newMaxChartAreaWidth;}});helpers.each(bottomBoxes,function(box){if(!box.fullWidth){box.width=newMaxChartAreaWidth;}});maxChartAreaHeight=newMaxChartAreaHeight;maxChartAreaWidth=newMaxChartAreaWidth;}
var left=leftPadding+leftPaddingAddition;var top=topPadding+topPaddingAddition;function placeBox(box){if(box.isHorizontal()){box.left=box.fullWidth?leftPadding:totalLeftBoxesWidth;box.right=box.fullWidth?width-rightPadding:totalLeftBoxesWidth+maxChartAreaWidth;box.top=top;box.bottom=top+box.height;top=box.bottom;}else{box.left=left;box.right=left+box.width;box.top=totalTopBoxesHeight;box.bottom=totalTopBoxesHeight+maxChartAreaHeight;left=box.right;}}
helpers.each(leftBoxes.concat(topBoxes),placeBox);left+=maxChartAreaWidth;top+=maxChartAreaHeight;helpers.each(rightBoxes,placeBox);helpers.each(bottomBoxes,placeBox);chart.chartArea={left:totalLeftBoxesWidth,top:totalTopBoxesHeight,right:totalLeftBoxesWidth+maxChartAreaWidth,bottom:totalTopBoxesHeight+maxChartAreaHeight};helpers.each(chartAreaBoxes,function(box){box.left=chart.chartArea.left;box.top=chart.chartArea.top;box.right=chart.chartArea.right;box.bottom=chart.chartArea.bottom;box.update(maxChartAreaWidth,maxChartAreaHeight);});}};};},{}],30:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;Chart.defaults.global.plugins={};Chart.plugins={_plugins:[],_cacheId:0,register:function(plugins){var p=this._plugins;([]).concat(plugins).forEach(function(plugin){if(p.indexOf(plugin)===-1){p.push(plugin);}});this._cacheId++;},unregister:function(plugins){var p=this._plugins;([]).concat(plugins).forEach(function(plugin){var idx=p.indexOf(plugin);if(idx!==-1){p.splice(idx,1);}});this._cacheId++;},clear:function(){this._plugins=[];this._cacheId++;},count:function(){return this._plugins.length;},getAll:function(){return this._plugins;},notify:function(chart,hook,args){var descriptors=this.descriptors(chart);var ilen=descriptors.length;var i,descriptor,plugin,params,method;for(i=0;i<ilen;++i){descriptor=descriptors[i];plugin=descriptor.plugin;method=plugin[hook];if(typeof method==='function'){params=[chart].concat(args||[]);params.push(descriptor.options);if(method.apply(plugin,params)===false){return false;}}}
return true;},descriptors:function(chart){var cache=chart._plugins||(chart._plugins={});if(cache.id===this._cacheId){return cache.descriptors;}
var plugins=[];var descriptors=[];var config=(chart&&chart.config)||{};var defaults=Chart.defaults.global.plugins;var options=(config.options&&config.options.plugins)||{};this._plugins.concat(config.plugins||[]).forEach(function(plugin){var idx=plugins.indexOf(plugin);if(idx!==-1){return;}
var id=plugin.id;var opts=options[id];if(opts===false){return;}
if(opts===true){opts=helpers.clone(defaults[id]);}
plugins.push(plugin);descriptors.push({plugin:plugin,options:opts||{}});});cache.descriptors=descriptors;cache.id=this._cacheId;return descriptors;}};Chart.pluginService=Chart.plugins;Chart.PluginBase=Chart.Element.extend({});};},{}],31:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;Chart.defaults.scale={display:true,position:'left',gridLines:{display:true,color:'rgba(0, 0, 0, 0.1)',lineWidth:1,drawBorder:true,drawOnChartArea:true,drawTicks:true,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:'rgba(0,0,0,0.25)',zeroLineBorderDash:[],zeroLineBorderDashOffset:0.0,offsetGridLines:false,borderDash:[],borderDashOffset:0.0},scaleLabel:{labelString:'',display:false},ticks:{beginAtZero:false,minRotation:0,maxRotation:50,mirror:false,padding:0,reverse:false,display:true,autoSkip:true,autoSkipPadding:0,labelOffset:0,callback:Chart.Ticks.formatters.values}};function computeTextSize(context,tick,font){return helpers.isArray(tick)?helpers.longestText(context,font,tick):context.measureText(tick).width;}
function parseFontOptions(options){var getValueOrDefault=helpers.getValueOrDefault;var globalDefaults=Chart.defaults.global;var size=getValueOrDefault(options.fontSize,globalDefaults.defaultFontSize);var style=getValueOrDefault(options.fontStyle,globalDefaults.defaultFontStyle);var family=getValueOrDefault(options.fontFamily,globalDefaults.defaultFontFamily);return{size:size,style:style,family:family,font:helpers.fontString(size,style,family)};}
Chart.Scale=Chart.Element.extend({getPadding:function(){var me=this;return{left:me.paddingLeft||0,top:me.paddingTop||0,right:me.paddingRight||0,bottom:me.paddingBottom||0};},beforeUpdate:function(){helpers.callback(this.options.beforeUpdate,[this]);},update:function(maxWidth,maxHeight,margins){var me=this;me.beforeUpdate();me.maxWidth=maxWidth;me.maxHeight=maxHeight;me.margins=helpers.extend({left:0,right:0,top:0,bottom:0},margins);me.longestTextCache=me.longestTextCache||{};me.beforeSetDimensions();me.setDimensions();me.afterSetDimensions();me.beforeDataLimits();me.determineDataLimits();me.afterDataLimits();me.beforeBuildTicks();me.buildTicks();me.afterBuildTicks();me.beforeTickToLabelConversion();me.convertTicksToLabels();me.afterTickToLabelConversion();me.beforeCalculateTickRotation();me.calculateTickRotation();me.afterCalculateTickRotation();me.beforeFit();me.fit();me.afterFit();me.afterUpdate();return me.minSize;},afterUpdate:function(){helpers.callback(this.options.afterUpdate,[this]);},beforeSetDimensions:function(){helpers.callback(this.options.beforeSetDimensions,[this]);},setDimensions:function(){var me=this;if(me.isHorizontal()){me.width=me.maxWidth;me.left=0;me.right=me.width;}else{me.height=me.maxHeight;me.top=0;me.bottom=me.height;}
me.paddingLeft=0;me.paddingTop=0;me.paddingRight=0;me.paddingBottom=0;},afterSetDimensions:function(){helpers.callback(this.options.afterSetDimensions,[this]);},beforeDataLimits:function(){helpers.callback(this.options.beforeDataLimits,[this]);},determineDataLimits:helpers.noop,afterDataLimits:function(){helpers.callback(this.options.afterDataLimits,[this]);},beforeBuildTicks:function(){helpers.callback(this.options.beforeBuildTicks,[this]);},buildTicks:helpers.noop,afterBuildTicks:function(){helpers.callback(this.options.afterBuildTicks,[this]);},beforeTickToLabelConversion:function(){helpers.callback(this.options.beforeTickToLabelConversion,[this]);},convertTicksToLabels:function(){var me=this;var tickOpts=me.options.ticks;me.ticks=me.ticks.map(tickOpts.userCallback||tickOpts.callback);},afterTickToLabelConversion:function(){helpers.callback(this.options.afterTickToLabelConversion,[this]);},beforeCalculateTickRotation:function(){helpers.callback(this.options.beforeCalculateTickRotation,[this]);},calculateTickRotation:function(){var me=this;var context=me.ctx;var tickOpts=me.options.ticks;var tickFont=parseFontOptions(tickOpts);context.font=tickFont.font;var labelRotation=tickOpts.minRotation||0;if(me.options.display&&me.isHorizontal()){var originalLabelWidth=helpers.longestText(context,tickFont.font,me.ticks,me.longestTextCache);var labelWidth=originalLabelWidth;var cosRotation;var sinRotation;var tickWidth=me.getPixelForTick(1)-me.getPixelForTick(0)-6;while(labelWidth>tickWidth&&labelRotation<tickOpts.maxRotation){var angleRadians=helpers.toRadians(labelRotation);cosRotation=Math.cos(angleRadians);sinRotation=Math.sin(angleRadians);if(sinRotation*originalLabelWidth>me.maxHeight){labelRotation--;break;}
labelRotation++;labelWidth=cosRotation*originalLabelWidth;}}
me.labelRotation=labelRotation;},afterCalculateTickRotation:function(){helpers.callback(this.options.afterCalculateTickRotation,[this]);},beforeFit:function(){helpers.callback(this.options.beforeFit,[this]);},fit:function(){var me=this;var minSize=me.minSize={width:0,height:0};var opts=me.options;var tickOpts=opts.ticks;var scaleLabelOpts=opts.scaleLabel;var gridLineOpts=opts.gridLines;var display=opts.display;var isHorizontal=me.isHorizontal();var tickFont=parseFontOptions(tickOpts);var scaleLabelFontSize=parseFontOptions(scaleLabelOpts).size*1.5;var tickMarkLength=opts.gridLines.tickMarkLength;if(isHorizontal){minSize.width=me.isFullWidth()?me.maxWidth-me.margins.left-me.margins.right:me.maxWidth;}else{minSize.width=display&&gridLineOpts.drawTicks?tickMarkLength:0;}
if(isHorizontal){minSize.height=display&&gridLineOpts.drawTicks?tickMarkLength:0;}else{minSize.height=me.maxHeight;}
if(scaleLabelOpts.display&&display){if(isHorizontal){minSize.height+=scaleLabelFontSize;}else{minSize.width+=scaleLabelFontSize;}}
if(tickOpts.display&&display){var largestTextWidth=helpers.longestText(me.ctx,tickFont.font,me.ticks,me.longestTextCache);var tallestLabelHeightInLines=helpers.numberOfLabelLines(me.ticks);var lineSpace=tickFont.size*0.5;if(isHorizontal){me.longestLabelWidth=largestTextWidth;var angleRadians=helpers.toRadians(me.labelRotation);var cosRotation=Math.cos(angleRadians);var sinRotation=Math.sin(angleRadians);var labelHeight=(sinRotation*largestTextWidth)+(tickFont.size*tallestLabelHeightInLines)+(lineSpace*tallestLabelHeightInLines);minSize.height=Math.min(me.maxHeight,minSize.height+labelHeight);me.ctx.font=tickFont.font;var firstTick=me.ticks[0];var firstLabelWidth=computeTextSize(me.ctx,firstTick,tickFont.font);var lastTick=me.ticks[me.ticks.length-1];var lastLabelWidth=computeTextSize(me.ctx,lastTick,tickFont.font);if(me.labelRotation!==0){me.paddingLeft=opts.position==='bottom'?(cosRotation*firstLabelWidth)+3:(cosRotation*lineSpace)+3;me.paddingRight=opts.position==='bottom'?(cosRotation*lineSpace)+3:(cosRotation*lastLabelWidth)+3;}else{me.paddingLeft=firstLabelWidth/2+3;me.paddingRight=lastLabelWidth/2+3;}}else{if(tickOpts.mirror){largestTextWidth=0;}else{largestTextWidth+=me.options.ticks.padding;}
minSize.width=Math.min(me.maxWidth,minSize.width+largestTextWidth);me.paddingTop=tickFont.size/2;me.paddingBottom=tickFont.size/2;}}
me.handleMargins();me.width=minSize.width;me.height=minSize.height;},handleMargins:function(){var me=this;if(me.margins){me.paddingLeft=Math.max(me.paddingLeft-me.margins.left,0);me.paddingTop=Math.max(me.paddingTop-me.margins.top,0);me.paddingRight=Math.max(me.paddingRight-me.margins.right,0);me.paddingBottom=Math.max(me.paddingBottom-me.margins.bottom,0);}},afterFit:function(){helpers.callback(this.options.afterFit,[this]);},isHorizontal:function(){return this.options.position==='top'||this.options.position==='bottom';},isFullWidth:function(){return(this.options.fullWidth);},getRightValue:function(rawValue){if(rawValue===null||typeof(rawValue)==='undefined'){return NaN;}
if(typeof(rawValue)==='number'&&!isFinite(rawValue)){return NaN;}
if(typeof(rawValue)==='object'){if((rawValue instanceof Date)||(rawValue.isValid)){return rawValue;}
return this.getRightValue(this.isHorizontal()?rawValue.x:rawValue.y);}
return rawValue;},getLabelForIndex:helpers.noop,getPixelForValue:helpers.noop,getValueForPixel:helpers.noop,getPixelForTick:function(index,includeOffset){var me=this;if(me.isHorizontal()){var innerWidth=me.width-(me.paddingLeft+me.paddingRight);var tickWidth=innerWidth/Math.max((me.ticks.length-((me.options.gridLines.offsetGridLines)?0:1)),1);var pixel=(tickWidth*index)+me.paddingLeft;if(includeOffset){pixel+=tickWidth/2;}
var finalVal=me.left+Math.round(pixel);finalVal+=me.isFullWidth()?me.margins.left:0;return finalVal;}
var innerHeight=me.height-(me.paddingTop+me.paddingBottom);return me.top+(index*(innerHeight/(me.ticks.length-1)));},getPixelForDecimal:function(decimal){var me=this;if(me.isHorizontal()){var innerWidth=me.width-(me.paddingLeft+me.paddingRight);var valueOffset=(innerWidth*decimal)+me.paddingLeft;var finalVal=me.left+Math.round(valueOffset);finalVal+=me.isFullWidth()?me.margins.left:0;return finalVal;}
return me.top+(decimal*me.height);},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue());},getBaseValue:function(){var me=this;var min=me.min;var max=me.max;return me.beginAtZero?0:min<0&&max<0?max:min>0&&max>0?min:0;},draw:function(chartArea){var me=this;var options=me.options;if(!options.display){return;}
var context=me.ctx;var globalDefaults=Chart.defaults.global;var optionTicks=options.ticks;var gridLines=options.gridLines;var scaleLabel=options.scaleLabel;var isRotated=me.labelRotation!==0;var skipRatio;var useAutoskipper=optionTicks.autoSkip;var isHorizontal=me.isHorizontal();var maxTicks;if(optionTicks.maxTicksLimit){maxTicks=optionTicks.maxTicksLimit;}
var tickFontColor=helpers.getValueOrDefault(optionTicks.fontColor,globalDefaults.defaultFontColor);var tickFont=parseFontOptions(optionTicks);var tl=gridLines.drawTicks?gridLines.tickMarkLength:0;var scaleLabelFontColor=helpers.getValueOrDefault(scaleLabel.fontColor,globalDefaults.defaultFontColor);var scaleLabelFont=parseFontOptions(scaleLabel);var labelRotationRadians=helpers.toRadians(me.labelRotation);var cosRotation=Math.cos(labelRotationRadians);var longestRotatedLabel=me.longestLabelWidth*cosRotation;context.fillStyle=tickFontColor;var itemsToDraw=[];if(isHorizontal){skipRatio=false;if((longestRotatedLabel+optionTicks.autoSkipPadding)*me.ticks.length>(me.width-(me.paddingLeft+me.paddingRight))){skipRatio=1+Math.floor(((longestRotatedLabel+optionTicks.autoSkipPadding)*me.ticks.length)/(me.width-(me.paddingLeft+me.paddingRight)));}
if(maxTicks&&me.ticks.length>maxTicks){while(!skipRatio||me.ticks.length/(skipRatio||1)>maxTicks){if(!skipRatio){skipRatio=1;}
skipRatio+=1;}}
if(!useAutoskipper){skipRatio=false;}}
var xTickStart=options.position==='right'?me.left:me.right-tl;var xTickEnd=options.position==='right'?me.left+tl:me.right;var yTickStart=options.position==='bottom'?me.top:me.bottom-tl;var yTickEnd=options.position==='bottom'?me.top+tl:me.bottom;helpers.each(me.ticks,function(label,index){if(label===undefined||label===null){return;}
var isLastTick=me.ticks.length===index+1;var shouldSkip=(skipRatio>1&&index%skipRatio>0)||(index%skipRatio===0&&index+skipRatio>=me.ticks.length);if(shouldSkip&&!isLastTick||(label===undefined||label===null)){return;}
var lineWidth,lineColor,borderDash,borderDashOffset;if(index===(typeof me.zeroLineIndex!=='undefined'?me.zeroLineIndex:0)){lineWidth=gridLines.zeroLineWidth;lineColor=gridLines.zeroLineColor;borderDash=gridLines.zeroLineBorderDash;borderDashOffset=gridLines.zeroLineBorderDashOffset;}else{lineWidth=helpers.getValueAtIndexOrDefault(gridLines.lineWidth,index);lineColor=helpers.getValueAtIndexOrDefault(gridLines.color,index);borderDash=helpers.getValueOrDefault(gridLines.borderDash,globalDefaults.borderDash);borderDashOffset=helpers.getValueOrDefault(gridLines.borderDashOffset,globalDefaults.borderDashOffset);}
var tx1,ty1,tx2,ty2,x1,y1,x2,y2,labelX,labelY;var textAlign='middle';var textBaseline='middle';if(isHorizontal){if(options.position==='bottom'){textBaseline=!isRotated?'top':'middle';textAlign=!isRotated?'center':'right';labelY=me.top+tl;}else{textBaseline=!isRotated?'bottom':'middle';textAlign=!isRotated?'center':'left';labelY=me.bottom-tl;}
var xLineValue=me.getPixelForTick(index)+helpers.aliasPixel(lineWidth);labelX=me.getPixelForTick(index,gridLines.offsetGridLines)+optionTicks.labelOffset;tx1=tx2=x1=x2=xLineValue;ty1=yTickStart;ty2=yTickEnd;y1=chartArea.top;y2=chartArea.bottom;}else{var isLeft=options.position==='left';var tickPadding=optionTicks.padding;var labelXOffset;if(optionTicks.mirror){textAlign=isLeft?'left':'right';labelXOffset=tickPadding;}else{textAlign=isLeft?'right':'left';labelXOffset=tl+tickPadding;}
labelX=isLeft?me.right-labelXOffset:me.left+labelXOffset;var yLineValue=me.getPixelForTick(index);yLineValue+=helpers.aliasPixel(lineWidth);labelY=me.getPixelForTick(index,gridLines.offsetGridLines);tx1=xTickStart;tx2=xTickEnd;x1=chartArea.left;x2=chartArea.right;ty1=ty2=y1=y2=yLineValue;}
itemsToDraw.push({tx1:tx1,ty1:ty1,tx2:tx2,ty2:ty2,x1:x1,y1:y1,x2:x2,y2:y2,labelX:labelX,labelY:labelY,glWidth:lineWidth,glColor:lineColor,glBorderDash:borderDash,glBorderDashOffset:borderDashOffset,rotation:-1*labelRotationRadians,label:label,textBaseline:textBaseline,textAlign:textAlign});});helpers.each(itemsToDraw,function(itemToDraw){if(gridLines.display){context.save();context.lineWidth=itemToDraw.glWidth;context.strokeStyle=itemToDraw.glColor;if(context.setLineDash){context.setLineDash(itemToDraw.glBorderDash);context.lineDashOffset=itemToDraw.glBorderDashOffset;}
context.beginPath();if(gridLines.drawTicks){context.moveTo(itemToDraw.tx1,itemToDraw.ty1);context.lineTo(itemToDraw.tx2,itemToDraw.ty2);}
if(gridLines.drawOnChartArea){context.moveTo(itemToDraw.x1,itemToDraw.y1);context.lineTo(itemToDraw.x2,itemToDraw.y2);}
context.stroke();context.restore();}
if(optionTicks.display){context.save();context.translate(itemToDraw.labelX,itemToDraw.labelY);context.rotate(itemToDraw.rotation);context.font=tickFont.font;context.textBaseline=itemToDraw.textBaseline;context.textAlign=itemToDraw.textAlign;var label=itemToDraw.label;if(helpers.isArray(label)){for(var i=0,y=0;i<label.length;++i){context.fillText(''+label[i],0,y);y+=(tickFont.size*1.5);}}else{context.fillText(label,0,0);}
context.restore();}});if(scaleLabel.display){var scaleLabelX;var scaleLabelY;var rotation=0;if(isHorizontal){scaleLabelX=me.left+((me.right-me.left)/2);scaleLabelY=options.position==='bottom'?me.bottom-(scaleLabelFont.size/2):me.top+(scaleLabelFont.size/2);}else{var isLeft=options.position==='left';scaleLabelX=isLeft?me.left+(scaleLabelFont.size/2):me.right-(scaleLabelFont.size/2);scaleLabelY=me.top+((me.bottom-me.top)/2);rotation=isLeft?-0.5*Math.PI:0.5*Math.PI;}
context.save();context.translate(scaleLabelX,scaleLabelY);context.rotate(rotation);context.textAlign='center';context.textBaseline='middle';context.fillStyle=scaleLabelFontColor;context.font=scaleLabelFont.font;context.fillText(scaleLabel.labelString,0,0);context.restore();}
if(gridLines.drawBorder){context.lineWidth=helpers.getValueAtIndexOrDefault(gridLines.lineWidth,0);context.strokeStyle=helpers.getValueAtIndexOrDefault(gridLines.color,0);var x1=me.left,x2=me.right,y1=me.top,y2=me.bottom;var aliasPixel=helpers.aliasPixel(context.lineWidth);if(isHorizontal){y1=y2=options.position==='top'?me.bottom:me.top;y1+=aliasPixel;y2+=aliasPixel;}else{x1=x2=options.position==='left'?me.right:me.left;x1+=aliasPixel;x2+=aliasPixel;}
context.beginPath();context.moveTo(x1,y1);context.lineTo(x2,y2);context.stroke();}}});};},{}],32:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;Chart.scaleService={constructors:{},defaults:{},registerScaleType:function(type,scaleConstructor,defaults){this.constructors[type]=scaleConstructor;this.defaults[type]=helpers.clone(defaults);},getScaleConstructor:function(type){return this.constructors.hasOwnProperty(type)?this.constructors[type]:undefined;},getScaleDefaults:function(type){return this.defaults.hasOwnProperty(type)?helpers.scaleMerge(Chart.defaults.scale,this.defaults[type]):{};},updateScaleDefaults:function(type,additions){var defaults=this.defaults;if(defaults.hasOwnProperty(type)){defaults[type]=helpers.extend(defaults[type],additions);}},addScalesToLayout:function(chart){helpers.each(chart.scales,function(scale){scale.fullWidth=scale.options.fullWidth;scale.position=scale.options.position;scale.weight=scale.options.weight;Chart.layoutService.addBox(chart,scale);});}};};},{}],33:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;Chart.Ticks={generators:{linear:function(generationOptions,dataRange){var ticks=[];var spacing;if(generationOptions.stepSize&&generationOptions.stepSize>0){spacing=generationOptions.stepSize;}else{var niceRange=helpers.niceNum(dataRange.max-dataRange.min,false);spacing=helpers.niceNum(niceRange/(generationOptions.maxTicks-1),true);}
var niceMin=Math.floor(dataRange.min/spacing)*spacing;var niceMax=Math.ceil(dataRange.max/spacing)*spacing;if(generationOptions.min&&generationOptions.max&&generationOptions.stepSize){if(helpers.almostWhole((generationOptions.max-generationOptions.min)/generationOptions.stepSize,spacing/1000)){niceMin=generationOptions.min;niceMax=generationOptions.max;}}
var numSpaces=(niceMax-niceMin)/spacing;if(helpers.almostEquals(numSpaces,Math.round(numSpaces),spacing/1000)){numSpaces=Math.round(numSpaces);}else{numSpaces=Math.ceil(numSpaces);}
ticks.push(generationOptions.min!==undefined?generationOptions.min:niceMin);for(var j=1;j<numSpaces;++j){ticks.push(niceMin+(j*spacing));}
ticks.push(generationOptions.max!==undefined?generationOptions.max:niceMax);return ticks;},logarithmic:function(generationOptions,dataRange){var ticks=[];var getValueOrDefault=helpers.getValueOrDefault;var tickVal=getValueOrDefault(generationOptions.min,Math.pow(10,Math.floor(helpers.log10(dataRange.min))));var endExp=Math.floor(helpers.log10(dataRange.max));var endSignificand=Math.ceil(dataRange.max/Math.pow(10,endExp));var exp;var significand;if(tickVal===0){exp=Math.floor(helpers.log10(dataRange.minNotZero));significand=Math.floor(dataRange.minNotZero/Math.pow(10,exp));ticks.push(tickVal);tickVal=significand*Math.pow(10,exp);}else{exp=Math.floor(helpers.log10(tickVal));significand=Math.floor(tickVal/Math.pow(10,exp));}
do{ticks.push(tickVal);++significand;if(significand===10){significand=1;++exp;}
tickVal=significand*Math.pow(10,exp);}while(exp<endExp||(exp===endExp&&significand<endSignificand));var lastTick=getValueOrDefault(generationOptions.max,tickVal);ticks.push(lastTick);return ticks;}},formatters:{values:function(value){return helpers.isArray(value)?value:''+value;},linear:function(tickValue,index,ticks){var delta=ticks.length>3?ticks[2]-ticks[1]:ticks[1]-ticks[0];if(Math.abs(delta)>1){if(tickValue!==Math.floor(tickValue)){delta=tickValue-Math.floor(tickValue);}}
var logDelta=helpers.log10(Math.abs(delta));var tickString='';if(tickValue!==0){var numDecimal=-1*Math.floor(logDelta);numDecimal=Math.max(Math.min(numDecimal,20),0);tickString=tickValue.toFixed(numDecimal);}else{tickString='0';}
return tickString;},logarithmic:function(tickValue,index,ticks){var remain=tickValue/(Math.pow(10,Math.floor(helpers.log10(tickValue))));if(tickValue===0){return'0';}else if(remain===1||remain===2||remain===5||index===0||index===ticks.length-1){return tickValue.toExponential();}
return'';}}};};},{}],34:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;function mergeOpacity(colorString,opacity){var color=helpers.color(colorString);return color.alpha(opacity*color.alpha()).rgbaString();}
Chart.defaults.global.tooltips={enabled:true,custom:null,mode:'nearest',position:'average',intersect:true,backgroundColor:'rgba(0,0,0,0.8)',titleFontStyle:'bold',titleSpacing:2,titleMarginBottom:6,titleFontColor:'#fff',titleAlign:'left',bodySpacing:2,bodyFontColor:'#fff',bodyAlign:'left',footerFontStyle:'bold',footerSpacing:2,footerMarginTop:6,footerFontColor:'#fff',footerAlign:'left',yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:'#fff',displayColors:true,borderColor:'rgba(0,0,0,0)',borderWidth:0,callbacks:{beforeTitle:helpers.noop,title:function(tooltipItems,data){var title='';var labels=data.labels;var labelCount=labels?labels.length:0;if(tooltipItems.length>0){var item=tooltipItems[0];if(item.xLabel){title=item.xLabel;}else if(labelCount>0&&item.index<labelCount){title=labels[item.index];}}
return title;},afterTitle:helpers.noop,beforeBody:helpers.noop,beforeLabel:helpers.noop,label:function(tooltipItem,data){var label=data.datasets[tooltipItem.datasetIndex].label||'';if(label){label+=': ';}
label+=tooltipItem.yLabel;return label;},labelColor:function(tooltipItem,chart){var meta=chart.getDatasetMeta(tooltipItem.datasetIndex);var activeElement=meta.data[tooltipItem.index];var view=activeElement._view;return{borderColor:view.borderColor,backgroundColor:view.backgroundColor};},afterLabel:helpers.noop,afterBody:helpers.noop,beforeFooter:helpers.noop,footer:helpers.noop,afterFooter:helpers.noop}};function pushOrConcat(base,toPush){if(toPush){if(helpers.isArray(toPush)){Array.prototype.push.apply(base,toPush);}else{base.push(toPush);}}
return base;}
function createTooltipItem(element){var xScale=element._xScale;var yScale=element._yScale||element._scale;var index=element._index,datasetIndex=element._datasetIndex;return{xLabel:xScale?xScale.getLabelForIndex(index,datasetIndex):'',yLabel:yScale?yScale.getLabelForIndex(index,datasetIndex):'',index:index,datasetIndex:datasetIndex,x:element._model.x,y:element._model.y};}
function getBaseModel(tooltipOpts){var globalDefaults=Chart.defaults.global;var getValueOrDefault=helpers.getValueOrDefault;return{xPadding:tooltipOpts.xPadding,yPadding:tooltipOpts.yPadding,xAlign:tooltipOpts.xAlign,yAlign:tooltipOpts.yAlign,bodyFontColor:tooltipOpts.bodyFontColor,_bodyFontFamily:getValueOrDefault(tooltipOpts.bodyFontFamily,globalDefaults.defaultFontFamily),_bodyFontStyle:getValueOrDefault(tooltipOpts.bodyFontStyle,globalDefaults.defaultFontStyle),_bodyAlign:tooltipOpts.bodyAlign,bodyFontSize:getValueOrDefault(tooltipOpts.bodyFontSize,globalDefaults.defaultFontSize),bodySpacing:tooltipOpts.bodySpacing,titleFontColor:tooltipOpts.titleFontColor,_titleFontFamily:getValueOrDefault(tooltipOpts.titleFontFamily,globalDefaults.defaultFontFamily),_titleFontStyle:getValueOrDefault(tooltipOpts.titleFontStyle,globalDefaults.defaultFontStyle),titleFontSize:getValueOrDefault(tooltipOpts.titleFontSize,globalDefaults.defaultFontSize),_titleAlign:tooltipOpts.titleAlign,titleSpacing:tooltipOpts.titleSpacing,titleMarginBottom:tooltipOpts.titleMarginBottom,footerFontColor:tooltipOpts.footerFontColor,_footerFontFamily:getValueOrDefault(tooltipOpts.footerFontFamily,globalDefaults.defaultFontFamily),_footerFontStyle:getValueOrDefault(tooltipOpts.footerFontStyle,globalDefaults.defaultFontStyle),footerFontSize:getValueOrDefault(tooltipOpts.footerFontSize,globalDefaults.defaultFontSize),_footerAlign:tooltipOpts.footerAlign,footerSpacing:tooltipOpts.footerSpacing,footerMarginTop:tooltipOpts.footerMarginTop,caretSize:tooltipOpts.caretSize,cornerRadius:tooltipOpts.cornerRadius,backgroundColor:tooltipOpts.backgroundColor,opacity:0,legendColorBackground:tooltipOpts.multiKeyBackground,displayColors:tooltipOpts.displayColors,borderColor:tooltipOpts.borderColor,borderWidth:tooltipOpts.borderWidth};}
function getTooltipSize(tooltip,model){var ctx=tooltip._chart.ctx;var height=model.yPadding*2;var width=0;var body=model.body;var combinedBodyLength=body.reduce(function(count,bodyItem){return count+bodyItem.before.length+bodyItem.lines.length+bodyItem.after.length;},0);combinedBodyLength+=model.beforeBody.length+model.afterBody.length;var titleLineCount=model.title.length;var footerLineCount=model.footer.length;var titleFontSize=model.titleFontSize,bodyFontSize=model.bodyFontSize,footerFontSize=model.footerFontSize;height+=titleLineCount*titleFontSize;height+=titleLineCount?(titleLineCount-1)*model.titleSpacing:0;height+=titleLineCount?model.titleMarginBottom:0;height+=combinedBodyLength*bodyFontSize;height+=combinedBodyLength?(combinedBodyLength-1)*model.bodySpacing:0;height+=footerLineCount?model.footerMarginTop:0;height+=footerLineCount*(footerFontSize);height+=footerLineCount?(footerLineCount-1)*model.footerSpacing:0;var widthPadding=0;var maxLineWidth=function(line){width=Math.max(width,ctx.measureText(line).width+widthPadding);};ctx.font=helpers.fontString(titleFontSize,model._titleFontStyle,model._titleFontFamily);helpers.each(model.title,maxLineWidth);ctx.font=helpers.fontString(bodyFontSize,model._bodyFontStyle,model._bodyFontFamily);helpers.each(model.beforeBody.concat(model.afterBody),maxLineWidth);widthPadding=model.displayColors?(bodyFontSize+2):0;helpers.each(body,function(bodyItem){helpers.each(bodyItem.before,maxLineWidth);helpers.each(bodyItem.lines,maxLineWidth);helpers.each(bodyItem.after,maxLineWidth);});widthPadding=0;ctx.font=helpers.fontString(footerFontSize,model._footerFontStyle,model._footerFontFamily);helpers.each(model.footer,maxLineWidth);width+=2*model.xPadding;return{width:width,height:height};}
function determineAlignment(tooltip,size){var model=tooltip._model;var chart=tooltip._chart;var chartArea=tooltip._chart.chartArea;var xAlign='center';var yAlign='center';if(model.y<size.height){yAlign='top';}else if(model.y>(chart.height-size.height)){yAlign='bottom';}
var lf,rf;var olf,orf;var yf;var midX=(chartArea.left+chartArea.right)/2;var midY=(chartArea.top+chartArea.bottom)/2;if(yAlign==='center'){lf=function(x){return x<=midX;};rf=function(x){return x>midX;};}else{lf=function(x){return x<=(size.width/2);};rf=function(x){return x>=(chart.width-(size.width/2));};}
olf=function(x){return x+size.width>chart.width;};orf=function(x){return x-size.width<0;};yf=function(y){return y<=midY?'top':'bottom';};if(lf(model.x)){xAlign='left';if(olf(model.x)){xAlign='center';yAlign=yf(model.y);}}else if(rf(model.x)){xAlign='right';if(orf(model.x)){xAlign='center';yAlign=yf(model.y);}}
var opts=tooltip._options;return{xAlign:opts.xAlign?opts.xAlign:xAlign,yAlign:opts.yAlign?opts.yAlign:yAlign};}
function getBackgroundPoint(vm,size,alignment){var x=vm.x;var y=vm.y;var caretSize=vm.caretSize,caretPadding=vm.caretPadding,cornerRadius=vm.cornerRadius,xAlign=alignment.xAlign,yAlign=alignment.yAlign,paddingAndSize=caretSize+caretPadding,radiusAndPadding=cornerRadius+caretPadding;if(xAlign==='right'){x-=size.width;}else if(xAlign==='center'){x-=(size.width/2);}
if(yAlign==='top'){y+=paddingAndSize;}else if(yAlign==='bottom'){y-=size.height+paddingAndSize;}else{y-=(size.height/2);}
if(yAlign==='center'){if(xAlign==='left'){x+=paddingAndSize;}else if(xAlign==='right'){x-=paddingAndSize;}}else if(xAlign==='left'){x-=radiusAndPadding;}else if(xAlign==='right'){x+=radiusAndPadding;}
return{x:x,y:y};}
Chart.Tooltip=Chart.Element.extend({initialize:function(){this._model=getBaseModel(this._options);},getTitle:function(){var me=this;var opts=me._options;var callbacks=opts.callbacks;var beforeTitle=callbacks.beforeTitle.apply(me,arguments),title=callbacks.title.apply(me,arguments),afterTitle=callbacks.afterTitle.apply(me,arguments);var lines=[];lines=pushOrConcat(lines,beforeTitle);lines=pushOrConcat(lines,title);lines=pushOrConcat(lines,afterTitle);return lines;},getBeforeBody:function(){var lines=this._options.callbacks.beforeBody.apply(this,arguments);return helpers.isArray(lines)?lines:lines!==undefined?[lines]:[];},getBody:function(tooltipItems,data){var me=this;var callbacks=me._options.callbacks;var bodyItems=[];helpers.each(tooltipItems,function(tooltipItem){var bodyItem={before:[],lines:[],after:[]};pushOrConcat(bodyItem.before,callbacks.beforeLabel.call(me,tooltipItem,data));pushOrConcat(bodyItem.lines,callbacks.label.call(me,tooltipItem,data));pushOrConcat(bodyItem.after,callbacks.afterLabel.call(me,tooltipItem,data));bodyItems.push(bodyItem);});return bodyItems;},getAfterBody:function(){var lines=this._options.callbacks.afterBody.apply(this,arguments);return helpers.isArray(lines)?lines:lines!==undefined?[lines]:[];},getFooter:function(){var me=this;var callbacks=me._options.callbacks;var beforeFooter=callbacks.beforeFooter.apply(me,arguments);var footer=callbacks.footer.apply(me,arguments);var afterFooter=callbacks.afterFooter.apply(me,arguments);var lines=[];lines=pushOrConcat(lines,beforeFooter);lines=pushOrConcat(lines,footer);lines=pushOrConcat(lines,afterFooter);return lines;},update:function(changed){var me=this;var opts=me._options;var existingModel=me._model;var model=me._model=getBaseModel(opts);var active=me._active;var data=me._data;var alignment={xAlign:existingModel.xAlign,yAlign:existingModel.yAlign};var backgroundPoint={x:existingModel.x,y:existingModel.y};var tooltipSize={width:existingModel.width,height:existingModel.height};var tooltipPosition={x:existingModel.caretX,y:existingModel.caretY};var i,len;if(active.length){model.opacity=1;var labelColors=[];tooltipPosition=Chart.Tooltip.positioners[opts.position](active,me._eventPosition);var tooltipItems=[];for(i=0,len=active.length;i<len;++i){tooltipItems.push(createTooltipItem(active[i]));}
if(opts.filter){tooltipItems=tooltipItems.filter(function(a){return opts.filter(a,data);});}
if(opts.itemSort){tooltipItems=tooltipItems.sort(function(a,b){return opts.itemSort(a,b,data);});}
helpers.each(tooltipItems,function(tooltipItem){labelColors.push(opts.callbacks.labelColor.call(me,tooltipItem,me._chart));});model.title=me.getTitle(tooltipItems,data);model.beforeBody=me.getBeforeBody(tooltipItems,data);model.body=me.getBody(tooltipItems,data);model.afterBody=me.getAfterBody(tooltipItems,data);model.footer=me.getFooter(tooltipItems,data);model.x=Math.round(tooltipPosition.x);model.y=Math.round(tooltipPosition.y);model.caretPadding=opts.caretPadding;model.labelColors=labelColors;model.dataPoints=tooltipItems;tooltipSize=getTooltipSize(this,model);alignment=determineAlignment(this,tooltipSize);backgroundPoint=getBackgroundPoint(model,tooltipSize,alignment);}else{model.opacity=0;}
model.xAlign=alignment.xAlign;model.yAlign=alignment.yAlign;model.x=backgroundPoint.x;model.y=backgroundPoint.y;model.width=tooltipSize.width;model.height=tooltipSize.height;model.caretX=tooltipPosition.x;model.caretY=tooltipPosition.y;me._model=model;if(changed&&opts.custom){opts.custom.call(me,model);}
return me;},drawCaret:function(tooltipPoint,size){var ctx=this._chart.ctx;var vm=this._view;var caretPosition=this.getCaretPosition(tooltipPoint,size,vm);ctx.lineTo(caretPosition.x1,caretPosition.y1);ctx.lineTo(caretPosition.x2,caretPosition.y2);ctx.lineTo(caretPosition.x3,caretPosition.y3);},getCaretPosition:function(tooltipPoint,size,vm){var x1,x2,x3;var y1,y2,y3;var caretSize=vm.caretSize;var cornerRadius=vm.cornerRadius;var xAlign=vm.xAlign,yAlign=vm.yAlign;var ptX=tooltipPoint.x,ptY=tooltipPoint.y;var width=size.width,height=size.height;if(yAlign==='center'){y2=ptY+(height/2);if(xAlign==='left'){x1=ptX;x2=x1-caretSize;x3=x1;y1=y2+caretSize;y3=y2-caretSize;}else{x1=ptX+width;x2=x1+caretSize;x3=x1;y1=y2-caretSize;y3=y2+caretSize;}}else{if(xAlign==='left'){x2=ptX+cornerRadius+(caretSize);x1=x2-caretSize;x3=x2+caretSize;}else if(xAlign==='right'){x2=ptX+width-cornerRadius-caretSize;x1=x2-caretSize;x3=x2+caretSize;}else{x2=ptX+(width/2);x1=x2-caretSize;x3=x2+caretSize;}
if(yAlign==='top'){y1=ptY;y2=y1-caretSize;y3=y1;}else{y1=ptY+height;y2=y1+caretSize;y3=y1;var tmp=x3;x3=x1;x1=tmp;}}
return{x1:x1,x2:x2,x3:x3,y1:y1,y2:y2,y3:y3};},drawTitle:function(pt,vm,ctx,opacity){var title=vm.title;if(title.length){ctx.textAlign=vm._titleAlign;ctx.textBaseline='top';var titleFontSize=vm.titleFontSize,titleSpacing=vm.titleSpacing;ctx.fillStyle=mergeOpacity(vm.titleFontColor,opacity);ctx.font=helpers.fontString(titleFontSize,vm._titleFontStyle,vm._titleFontFamily);var i,len;for(i=0,len=title.length;i<len;++i){ctx.fillText(title[i],pt.x,pt.y);pt.y+=titleFontSize+titleSpacing;if(i+1===title.length){pt.y+=vm.titleMarginBottom-titleSpacing;}}}},drawBody:function(pt,vm,ctx,opacity){var bodyFontSize=vm.bodyFontSize;var bodySpacing=vm.bodySpacing;var body=vm.body;ctx.textAlign=vm._bodyAlign;ctx.textBaseline='top';var textColor=mergeOpacity(vm.bodyFontColor,opacity);ctx.fillStyle=textColor;ctx.font=helpers.fontString(bodyFontSize,vm._bodyFontStyle,vm._bodyFontFamily);var xLinePadding=0;var fillLineOfText=function(line){ctx.fillText(line,pt.x+xLinePadding,pt.y);pt.y+=bodyFontSize+bodySpacing;};helpers.each(vm.beforeBody,fillLineOfText);var drawColorBoxes=vm.displayColors;xLinePadding=drawColorBoxes?(bodyFontSize+2):0;helpers.each(body,function(bodyItem,i){helpers.each(bodyItem.before,fillLineOfText);helpers.each(bodyItem.lines,function(line){if(drawColorBoxes){ctx.fillStyle=mergeOpacity(vm.legendColorBackground,opacity);ctx.fillRect(pt.x,pt.y,bodyFontSize,bodyFontSize);ctx.strokeStyle=mergeOpacity(vm.labelColors[i].borderColor,opacity);ctx.strokeRect(pt.x,pt.y,bodyFontSize,bodyFontSize);ctx.fillStyle=mergeOpacity(vm.labelColors[i].backgroundColor,opacity);ctx.fillRect(pt.x+1,pt.y+1,bodyFontSize-2,bodyFontSize-2);ctx.fillStyle=textColor;}
fillLineOfText(line);});helpers.each(bodyItem.after,fillLineOfText);});xLinePadding=0;helpers.each(vm.afterBody,fillLineOfText);pt.y-=bodySpacing;},drawFooter:function(pt,vm,ctx,opacity){var footer=vm.footer;if(footer.length){pt.y+=vm.footerMarginTop;ctx.textAlign=vm._footerAlign;ctx.textBaseline='top';ctx.fillStyle=mergeOpacity(vm.footerFontColor,opacity);ctx.font=helpers.fontString(vm.footerFontSize,vm._footerFontStyle,vm._footerFontFamily);helpers.each(footer,function(line){ctx.fillText(line,pt.x,pt.y);pt.y+=vm.footerFontSize+vm.footerSpacing;});}},drawBackground:function(pt,vm,ctx,tooltipSize,opacity){ctx.fillStyle=mergeOpacity(vm.backgroundColor,opacity);ctx.strokeStyle=mergeOpacity(vm.borderColor,opacity);ctx.lineWidth=vm.borderWidth;var xAlign=vm.xAlign;var yAlign=vm.yAlign;var x=pt.x;var y=pt.y;var width=tooltipSize.width;var height=tooltipSize.height;var radius=vm.cornerRadius;ctx.beginPath();ctx.moveTo(x+radius,y);if(yAlign==='top'){this.drawCaret(pt,tooltipSize);}
ctx.lineTo(x+width-radius,y);ctx.quadraticCurveTo(x+width,y,x+width,y+radius);if(yAlign==='center'&&xAlign==='right'){this.drawCaret(pt,tooltipSize);}
ctx.lineTo(x+width,y+height-radius);ctx.quadraticCurveTo(x+width,y+height,x+width-radius,y+height);if(yAlign==='bottom'){this.drawCaret(pt,tooltipSize);}
ctx.lineTo(x+radius,y+height);ctx.quadraticCurveTo(x,y+height,x,y+height-radius);if(yAlign==='center'&&xAlign==='left'){this.drawCaret(pt,tooltipSize);}
ctx.lineTo(x,y+radius);ctx.quadraticCurveTo(x,y,x+radius,y);ctx.closePath();ctx.fill();if(vm.borderWidth>0){ctx.stroke();}},draw:function(){var ctx=this._chart.ctx;var vm=this._view;if(vm.opacity===0){return;}
var tooltipSize={width:vm.width,height:vm.height};var pt={x:vm.x,y:vm.y};var opacity=Math.abs(vm.opacity<1e-3)?0:vm.opacity;var hasTooltipContent=vm.title.length||vm.beforeBody.length||vm.body.length||vm.afterBody.length||vm.footer.length;if(this._options.enabled&&hasTooltipContent){this.drawBackground(pt,vm,ctx,tooltipSize,opacity);pt.x+=vm.xPadding;pt.y+=vm.yPadding;this.drawTitle(pt,vm,ctx,opacity);this.drawBody(pt,vm,ctx,opacity);this.drawFooter(pt,vm,ctx,opacity);}},handleEvent:function(e){var me=this;var options=me._options;var changed=false;me._lastActive=me._lastActive||[];if(e.type==='mouseout'){me._active=[];}else{me._active=me._chart.getElementsAtEventForMode(e,options.mode,options);}
changed=!helpers.arrayEquals(me._active,me._lastActive);if(!changed){return false;}
me._lastActive=me._active;if(options.enabled||options.custom){me._eventPosition={x:e.x,y:e.y};var model=me._model;me.update(true);me.pivot();changed|=(model.x!==me._model.x)||(model.y!==me._model.y);}
return changed;}});Chart.Tooltip.positioners={average:function(elements){if(!elements.length){return false;}
var i,len;var x=0;var y=0;var count=0;for(i=0,len=elements.length;i<len;++i){var el=elements[i];if(el&&el.hasValue()){var pos=el.tooltipPosition();x+=pos.x;y+=pos.y;++count;}}
return{x:Math.round(x/count),y:Math.round(y/count)};},nearest:function(elements,eventPosition){var x=eventPosition.x;var y=eventPosition.y;var nearestElement;var minDistance=Number.POSITIVE_INFINITY;var i,len;for(i=0,len=elements.length;i<len;++i){var el=elements[i];if(el&&el.hasValue()){var center=el.getCenterPoint();var d=helpers.distanceBetweenPoints(eventPosition,center);if(d<minDistance){minDistance=d;nearestElement=el;}}}
if(nearestElement){var tp=nearestElement.tooltipPosition();x=tp.x;y=tp.y;}
return{x:x,y:y};}};};},{}],35:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers,globalOpts=Chart.defaults.global;globalOpts.elements.arc={backgroundColor:globalOpts.defaultColor,borderColor:'#fff',borderWidth:2};Chart.elements.Arc=Chart.Element.extend({inLabelRange:function(mouseX){var vm=this._view;if(vm){return(Math.pow(mouseX-vm.x,2)<Math.pow(vm.radius+vm.hoverRadius,2));}
return false;},inRange:function(chartX,chartY){var vm=this._view;if(vm){var pointRelativePosition=helpers.getAngleFromPoint(vm,{x:chartX,y:chartY}),angle=pointRelativePosition.angle,distance=pointRelativePosition.distance;var startAngle=vm.startAngle;var endAngle=vm.endAngle;while(endAngle<startAngle){endAngle+=2.0*Math.PI;}
while(angle>endAngle){angle-=2.0*Math.PI;}
while(angle<startAngle){angle+=2.0*Math.PI;}
var betweenAngles=(angle>=startAngle&&angle<=endAngle),withinRadius=(distance>=vm.innerRadius&&distance<=vm.outerRadius);return(betweenAngles&&withinRadius);}
return false;},getCenterPoint:function(){var vm=this._view;var halfAngle=(vm.startAngle+vm.endAngle)/2;var halfRadius=(vm.innerRadius+vm.outerRadius)/2;return{x:vm.x+Math.cos(halfAngle)*halfRadius,y:vm.y+Math.sin(halfAngle)*halfRadius};},getArea:function(){var vm=this._view;return Math.PI*((vm.endAngle-vm.startAngle)/(2*Math.PI))*(Math.pow(vm.outerRadius,2)-Math.pow(vm.innerRadius,2));},tooltipPosition:function(){var vm=this._view;var centreAngle=vm.startAngle+((vm.endAngle-vm.startAngle)/2),rangeFromCentre=(vm.outerRadius-vm.innerRadius)/2+vm.innerRadius;return{x:vm.x+(Math.cos(centreAngle)*rangeFromCentre),y:vm.y+(Math.sin(centreAngle)*rangeFromCentre)};},draw:function(){var ctx=this._chart.ctx,vm=this._view,sA=vm.startAngle,eA=vm.endAngle;ctx.beginPath();ctx.arc(vm.x,vm.y,vm.outerRadius,sA,eA);ctx.arc(vm.x,vm.y,vm.innerRadius,eA,sA,true);ctx.closePath();ctx.strokeStyle=vm.borderColor;ctx.lineWidth=vm.borderWidth;ctx.fillStyle=vm.backgroundColor;ctx.fill();ctx.lineJoin='bevel';if(vm.borderWidth){ctx.stroke();}}});};},{}],36:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;var globalDefaults=Chart.defaults.global;Chart.defaults.global.elements.line={tension:0.4,backgroundColor:globalDefaults.defaultColor,borderWidth:3,borderColor:globalDefaults.defaultColor,borderCapStyle:'butt',borderDash:[],borderDashOffset:0.0,borderJoinStyle:'miter',capBezierPoints:true,fill:true,};Chart.elements.Line=Chart.Element.extend({draw:function(){var me=this;var vm=me._view;var ctx=me._chart.ctx;var spanGaps=vm.spanGaps;var points=me._children.slice();var globalOptionLineElements=globalDefaults.elements.line;var lastDrawnIndex=-1;var index,current,previous,currentVM;if(me._loop&&points.length){points.push(points[0]);}
ctx.save();ctx.lineCap=vm.borderCapStyle||globalOptionLineElements.borderCapStyle;if(ctx.setLineDash){ctx.setLineDash(vm.borderDash||globalOptionLineElements.borderDash);}
ctx.lineDashOffset=vm.borderDashOffset||globalOptionLineElements.borderDashOffset;ctx.lineJoin=vm.borderJoinStyle||globalOptionLineElements.borderJoinStyle;ctx.lineWidth=vm.borderWidth||globalOptionLineElements.borderWidth;ctx.strokeStyle=vm.borderColor||globalDefaults.defaultColor;ctx.beginPath();lastDrawnIndex=-1;for(index=0;index<points.length;++index){current=points[index];previous=helpers.previousItem(points,index);currentVM=current._view;if(index===0){if(!currentVM.skip){ctx.moveTo(currentVM.x,currentVM.y);lastDrawnIndex=index;}}else{previous=lastDrawnIndex===-1?previous:points[lastDrawnIndex];if(!currentVM.skip){if((lastDrawnIndex!==(index-1)&&!spanGaps)||lastDrawnIndex===-1){ctx.moveTo(currentVM.x,currentVM.y);}else{helpers.canvas.lineTo(ctx,previous._view,current._view);}
lastDrawnIndex=index;}}}
ctx.stroke();ctx.restore();}});};},{}],37:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers,globalOpts=Chart.defaults.global,defaultColor=globalOpts.defaultColor;globalOpts.elements.point={radius:3,pointStyle:'circle',backgroundColor:defaultColor,borderWidth:1,borderColor:defaultColor,hitRadius:1,hoverRadius:4,hoverBorderWidth:1};function xRange(mouseX){var vm=this._view;return vm?(Math.pow(mouseX-vm.x,2)<Math.pow(vm.radius+vm.hitRadius,2)):false;}
function yRange(mouseY){var vm=this._view;return vm?(Math.pow(mouseY-vm.y,2)<Math.pow(vm.radius+vm.hitRadius,2)):false;}
Chart.elements.Point=Chart.Element.extend({inRange:function(mouseX,mouseY){var vm=this._view;return vm?((Math.pow(mouseX-vm.x,2)+Math.pow(mouseY-vm.y,2))<Math.pow(vm.hitRadius+vm.radius,2)):false;},inLabelRange:xRange,inXRange:xRange,inYRange:yRange,getCenterPoint:function(){var vm=this._view;return{x:vm.x,y:vm.y};},getArea:function(){return Math.PI*Math.pow(this._view.radius,2);},tooltipPosition:function(){var vm=this._view;return{x:vm.x,y:vm.y,padding:vm.radius+vm.borderWidth};},draw:function(chartArea){var vm=this._view;var model=this._model;var ctx=this._chart.ctx;var pointStyle=vm.pointStyle;var radius=vm.radius;var x=vm.x;var y=vm.y;var color=Chart.helpers.color;var errMargin=1.01;var ratio=0;if(vm.skip){return;}
ctx.strokeStyle=vm.borderColor||defaultColor;ctx.lineWidth=helpers.getValueOrDefault(vm.borderWidth,globalOpts.elements.point.borderWidth);ctx.fillStyle=vm.backgroundColor||defaultColor;if((chartArea!==undefined)&&((model.x<chartArea.left)||(chartArea.right*errMargin<model.x)||(model.y<chartArea.top)||(chartArea.bottom*errMargin<model.y))){if(model.x<chartArea.left){ratio=(x-model.x)/(chartArea.left-model.x);}else if(chartArea.right*errMargin<model.x){ratio=(model.x-x)/(model.x-chartArea.right);}else if(model.y<chartArea.top){ratio=(y-model.y)/(chartArea.top-model.y);}else if(chartArea.bottom*errMargin<model.y){ratio=(model.y-y)/(model.y-chartArea.bottom);}
ratio=Math.round(ratio*100)/100;ctx.strokeStyle=color(ctx.strokeStyle).alpha(ratio).rgbString();ctx.fillStyle=color(ctx.fillStyle).alpha(ratio).rgbString();}
Chart.canvasHelpers.drawPoint(ctx,pointStyle,radius,x,y);}});};},{}],38:[function(require,module,exports){'use strict';module.exports=function(Chart){var globalOpts=Chart.defaults.global;globalOpts.elements.rectangle={backgroundColor:globalOpts.defaultColor,borderWidth:0,borderColor:globalOpts.defaultColor,borderSkipped:'bottom'};function isVertical(bar){return bar._view.width!==undefined;}
function getBarBounds(bar){var vm=bar._view;var x1,x2,y1,y2;if(isVertical(bar)){var halfWidth=vm.width/2;x1=vm.x-halfWidth;x2=vm.x+halfWidth;y1=Math.min(vm.y,vm.base);y2=Math.max(vm.y,vm.base);}else{var halfHeight=vm.height/2;x1=Math.min(vm.x,vm.base);x2=Math.max(vm.x,vm.base);y1=vm.y-halfHeight;y2=vm.y+halfHeight;}
return{left:x1,top:y1,right:x2,bottom:y2};}
Chart.elements.Rectangle=Chart.Element.extend({draw:function(){var ctx=this._chart.ctx;var vm=this._view;var left,right,top,bottom,signX,signY,borderSkipped;var borderWidth=vm.borderWidth;if(!vm.horizontal){left=vm.x-vm.width/2;right=vm.x+vm.width/2;top=vm.y;bottom=vm.base;signX=1;signY=bottom>top?1:-1;borderSkipped=vm.borderSkipped||'bottom';}else{left=vm.base;right=vm.x;top=vm.y-vm.height/2;bottom=vm.y+vm.height/2;signX=right>left?1:-1;signY=1;borderSkipped=vm.borderSkipped||'left';}
if(borderWidth){var barSize=Math.min(Math.abs(left-right),Math.abs(top-bottom));borderWidth=borderWidth>barSize?barSize:borderWidth;var halfStroke=borderWidth/2;var borderLeft=left+(borderSkipped!=='left'?halfStroke*signX:0);var borderRight=right+(borderSkipped!=='right'?-halfStroke*signX:0);var borderTop=top+(borderSkipped!=='top'?halfStroke*signY:0);var borderBottom=bottom+(borderSkipped!=='bottom'?-halfStroke*signY:0);if(borderLeft!==borderRight){top=borderTop;bottom=borderBottom;}
if(borderTop!==borderBottom){left=borderLeft;right=borderRight;}}
ctx.beginPath();ctx.fillStyle=vm.backgroundColor;ctx.strokeStyle=vm.borderColor;ctx.lineWidth=borderWidth;var corners=[[left,bottom],[left,top],[right,top],[right,bottom]];var borders=['bottom','left','top','right'];var startCorner=borders.indexOf(borderSkipped,0);if(startCorner===-1){startCorner=0;}
function cornerAt(index){return corners[(startCorner+index)%4];}
var corner=cornerAt(0);ctx.moveTo(corner[0],corner[1]);for(var i=1;i<4;i++){corner=cornerAt(i);ctx.lineTo(corner[0],corner[1]);}
ctx.fill();if(borderWidth){ctx.stroke();}},height:function(){var vm=this._view;return vm.base-vm.y;},inRange:function(mouseX,mouseY){var inRange=false;if(this._view){var bounds=getBarBounds(this);inRange=mouseX>=bounds.left&&mouseX<=bounds.right&&mouseY>=bounds.top&&mouseY<=bounds.bottom;}
return inRange;},inLabelRange:function(mouseX,mouseY){var me=this;if(!me._view){return false;}
var inRange=false;var bounds=getBarBounds(me);if(isVertical(me)){inRange=mouseX>=bounds.left&&mouseX<=bounds.right;}else{inRange=mouseY>=bounds.top&&mouseY<=bounds.bottom;}
return inRange;},inXRange:function(mouseX){var bounds=getBarBounds(this);return mouseX>=bounds.left&&mouseX<=bounds.right;},inYRange:function(mouseY){var bounds=getBarBounds(this);return mouseY>=bounds.top&&mouseY<=bounds.bottom;},getCenterPoint:function(){var vm=this._view;var x,y;if(isVertical(this)){x=vm.x;y=(vm.y+vm.base)/2;}else{x=(vm.x+vm.base)/2;y=vm.y;}
return{x:x,y:y};},getArea:function(){var vm=this._view;return vm.width*Math.abs(vm.y-vm.base);},tooltipPosition:function(){var vm=this._view;return{x:vm.x,y:vm.y};}});};},{}],39:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;var eventTypeMap={touchstart:'mousedown',touchmove:'mousemove',touchend:'mouseup',pointerenter:'mouseenter',pointerdown:'mousedown',pointermove:'mousemove',pointerup:'mouseup',pointerleave:'mouseout',pointerout:'mouseout'};function readUsedSize(element,property){var value=helpers.getStyle(element,property);var matches=value&&value.match(/^(\d+)(\.\d+)?px$/);return matches?Number(matches[1]):undefined;}
function initCanvas(canvas,config){var style=canvas.style;var renderHeight=canvas.getAttribute('height');var renderWidth=canvas.getAttribute('width');canvas._chartjs={initial:{height:renderHeight,width:renderWidth,style:{display:style.display,height:style.height,width:style.width}}};style.display=style.display||'block';if(renderWidth===null||renderWidth===''){var displayWidth=readUsedSize(canvas,'width');if(displayWidth!==undefined){canvas.width=displayWidth;}}
if(renderHeight===null||renderHeight===''){if(canvas.style.height===''){canvas.height=canvas.width/(config.options.aspectRatio||2);}else{var displayHeight=readUsedSize(canvas,'height');if(displayWidth!==undefined){canvas.height=displayHeight;}}}
return canvas;}
function createEvent(type,chart,x,y,nativeEvent){return{type:type,chart:chart,native:nativeEvent||null,x:x!==undefined?x:null,y:y!==undefined?y:null,};}
function fromNativeEvent(event,chart){var type=eventTypeMap[event.type]||event.type;var pos=helpers.getRelativePosition(event,chart);return createEvent(type,chart,pos.x,pos.y,event);}
function createResizer(handler){var iframe=document.createElement('iframe');iframe.className='chartjs-hidden-iframe';iframe.style.cssText='display:block;'+'overflow:hidden;'+'border:0;'+'margin:0;'+'top:0;'+'left:0;'+'bottom:0;'+'right:0;'+'height:100%;'+'width:100%;'+'position:absolute;'+'pointer-events:none;'+'z-index:-1;';iframe.tabIndex=-1;helpers.addEvent(iframe,'load',function(){helpers.addEvent(iframe.contentWindow||iframe,'resize',handler);handler();});return iframe;}
function addResizeListener(node,listener,chart){var stub=node._chartjs={ticking:false};var notify=function(){if(!stub.ticking){stub.ticking=true;helpers.requestAnimFrame.call(window,function(){if(stub.resizer){stub.ticking=false;return listener(createEvent('resize',chart));}});}};stub.resizer=createResizer(notify);node.insertBefore(stub.resizer,node.firstChild);}
function removeResizeListener(node){if(!node||!node._chartjs){return;}
var resizer=node._chartjs.resizer;if(resizer){resizer.parentNode.removeChild(resizer);node._chartjs.resizer=null;}
delete node._chartjs;}
return{acquireContext:function(item,config){if(typeof item==='string'){item=document.getElementById(item);}else if(item.length){item=item[0];}
if(item&&item.canvas){item=item.canvas;}
var context=item&&item.getContext&&item.getContext('2d');if(context&&context.canvas===item){initCanvas(item,config);return context;}
return null;},releaseContext:function(context){var canvas=context.canvas;if(!canvas._chartjs){return;}
var initial=canvas._chartjs.initial;['height','width'].forEach(function(prop){var value=initial[prop];if(value===undefined||value===null){canvas.removeAttribute(prop);}else{canvas.setAttribute(prop,value);}});helpers.each(initial.style||{},function(value,key){canvas.style[key]=value;});canvas.width=canvas.width;delete canvas._chartjs;},addEventListener:function(chart,type,listener){var canvas=chart.canvas;if(type==='resize'){addResizeListener(canvas.parentNode,listener,chart);return;}
var stub=listener._chartjs||(listener._chartjs={});var proxies=stub.proxies||(stub.proxies={});var proxy=proxies[chart.id+'_'+type]=function(event){listener(fromNativeEvent(event,chart));};helpers.addEvent(canvas,type,proxy);},removeEventListener:function(chart,type,listener){var canvas=chart.canvas;if(type==='resize'){removeResizeListener(canvas.parentNode,listener);return;}
var stub=listener._chartjs||{};var proxies=stub.proxies||{};var proxy=proxies[chart.id+'_'+type];if(!proxy){return;}
helpers.removeEvent(canvas,type,proxy);}};};},{}],40:[function(require,module,exports){'use strict';var implementation=require(39);module.exports=function(Chart){Chart.platform={acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}};Chart.helpers.extend(Chart.platform,implementation(Chart));};},{"39":39}],41:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.defaults.global.plugins.filler={propagate:true};var defaults=Chart.defaults;var helpers=Chart.helpers;var mappers={dataset:function(source){var index=source.fill;var chart=source.chart;var meta=chart.getDatasetMeta(index);var visible=meta&&chart.isDatasetVisible(index);var points=(visible&&meta.dataset._children)||[];return!points.length?null:function(point,i){return points[i]._view||null;};},boundary:function(source){var boundary=source.boundary;var x=boundary?boundary.x:null;var y=boundary?boundary.y:null;return function(point){return{x:x===null?point.x:x,y:y===null?point.y:y,};};}};function decodeFill(el,index,count){var model=el._model||{};var fill=model.fill;var target;if(fill===undefined){fill=!!model.backgroundColor;}
if(fill===false||fill===null){return false;}
if(fill===true){return'origin';}
target=parseFloat(fill,10);if(isFinite(target)&&Math.floor(target)===target){if(fill[0]==='-'||fill[0]==='+'){target=index+target;}
if(target===index||target<0||target>=count){return false;}
return target;}
switch(fill){case'bottom':return'start';case'top':return'end';case'zero':return'origin';case'origin':case'start':case'end':return fill;default:return false;}}
function computeBoundary(source){var model=source.el._model||{};var scale=source.el._scale||{};var fill=source.fill;var target=null;var horizontal;if(isFinite(fill)){return null;}
if(fill==='start'){target=model.scaleBottom===undefined?scale.bottom:model.scaleBottom;}else if(fill==='end'){target=model.scaleTop===undefined?scale.top:model.scaleTop;}else if(model.scaleZero!==undefined){target=model.scaleZero;}else if(scale.getBasePosition){target=scale.getBasePosition();}else if(scale.getBasePixel){target=scale.getBasePixel();}
if(target!==undefined&&target!==null){if(target.x!==undefined&&target.y!==undefined){return target;}
if(typeof target==='number'&&isFinite(target)){horizontal=scale.isHorizontal();return{x:horizontal?target:null,y:horizontal?null:target};}}
return null;}
function resolveTarget(sources,index,propagate){var source=sources[index];var fill=source.fill;var visited=[index];var target;if(!propagate){return fill;}
while(fill!==false&&visited.indexOf(fill)===-1){if(!isFinite(fill)){return fill;}
target=sources[fill];if(!target){return false;}
if(target.visible){return fill;}
visited.push(fill);fill=target.fill;}
return false;}
function createMapper(source){var fill=source.fill;var type='dataset';if(fill===false){return null;}
if(!isFinite(fill)){type='boundary';}
return mappers[type](source);}
function isDrawable(point){return point&&!point.skip;}
function drawArea(ctx,curve0,curve1,len0,len1){var i;if(!len0||!len1){return;}
ctx.moveTo(curve0[0].x,curve0[0].y);for(i=1;i<len0;++i){helpers.canvas.lineTo(ctx,curve0[i-1],curve0[i]);}
ctx.lineTo(curve1[len1-1].x,curve1[len1-1].y);for(i=len1-1;i>0;--i){helpers.canvas.lineTo(ctx,curve1[i],curve1[i-1],true);}}
function doFill(ctx,points,mapper,view,color,loop){var count=points.length;var span=view.spanGaps;var curve0=[];var curve1=[];var len0=0;var len1=0;var i,ilen,index,p0,p1,d0,d1;ctx.beginPath();for(i=0,ilen=(count+!!loop);i<ilen;++i){index=i%count;p0=points[index]._view;p1=mapper(p0,index,view);d0=isDrawable(p0);d1=isDrawable(p1);if(d0&&d1){len0=curve0.push(p0);len1=curve1.push(p1);}else if(len0&&len1){if(!span){drawArea(ctx,curve0,curve1,len0,len1);len0=len1=0;curve0=[];curve1=[];}else{if(d0){curve0.push(p0);}
if(d1){curve1.push(p1);}}}}
drawArea(ctx,curve0,curve1,len0,len1);ctx.closePath();ctx.fillStyle=color;ctx.fill();}
return{id:'filler',afterDatasetsUpdate:function(chart,options){var count=(chart.data.datasets||[]).length;var propagate=options.propagate;var sources=[];var meta,i,el,source;for(i=0;i<count;++i){meta=chart.getDatasetMeta(i);el=meta.dataset;source=null;if(el&&el._model&&el instanceof Chart.elements.Line){source={visible:chart.isDatasetVisible(i),fill:decodeFill(el,i,count),chart:chart,el:el};}
meta.$filler=source;sources.push(source);}
for(i=0;i<count;++i){source=sources[i];if(!source){continue;}
source.fill=resolveTarget(sources,i,propagate);source.boundary=computeBoundary(source);source.mapper=createMapper(source);}},beforeDatasetDraw:function(chart,args){var meta=args.meta.$filler;if(!meta){return;}
var el=meta.el;var view=el._view;var points=el._children||[];var mapper=meta.mapper;var color=view.backgroundColor||defaults.global.defaultColor;if(mapper&&color&&points.length){doFill(chart.ctx,points,mapper,view,color,el._loop);}}};};},{}],42:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;var layout=Chart.layoutService;var noop=helpers.noop;Chart.defaults.global.legend={display:true,position:'top',fullWidth:true,reverse:false,weight:1000,onClick:function(e,legendItem){var index=legendItem.datasetIndex;var ci=this.chart;var meta=ci.getDatasetMeta(index);meta.hidden=meta.hidden===null?!ci.data.datasets[index].hidden:null;ci.update();},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(chart){var data=chart.data;return helpers.isArray(data.datasets)?data.datasets.map(function(dataset,i){return{text:dataset.label,fillStyle:(!helpers.isArray(dataset.backgroundColor)?dataset.backgroundColor:dataset.backgroundColor[0]),hidden:!chart.isDatasetVisible(i),lineCap:dataset.borderCapStyle,lineDash:dataset.borderDash,lineDashOffset:dataset.borderDashOffset,lineJoin:dataset.borderJoinStyle,lineWidth:dataset.borderWidth,strokeStyle:dataset.borderColor,pointStyle:dataset.pointStyle,datasetIndex:i};},this):[];}}};function getBoxWidth(labelOpts,fontSize){return labelOpts.usePointStyle?fontSize*Math.SQRT2:labelOpts.boxWidth;}
Chart.Legend=Chart.Element.extend({initialize:function(config){helpers.extend(this,config);this.legendHitBoxes=[];this.doughnutMode=false;},beforeUpdate:noop,update:function(maxWidth,maxHeight,margins){var me=this;me.beforeUpdate();me.maxWidth=maxWidth;me.maxHeight=maxHeight;me.margins=margins;me.beforeSetDimensions();me.setDimensions();me.afterSetDimensions();me.beforeBuildLabels();me.buildLabels();me.afterBuildLabels();me.beforeFit();me.fit();me.afterFit();me.afterUpdate();return me.minSize;},afterUpdate:noop,beforeSetDimensions:noop,setDimensions:function(){var me=this;if(me.isHorizontal()){me.width=me.maxWidth;me.left=0;me.right=me.width;}else{me.height=me.maxHeight;me.top=0;me.bottom=me.height;}
me.paddingLeft=0;me.paddingTop=0;me.paddingRight=0;me.paddingBottom=0;me.minSize={width:0,height:0};},afterSetDimensions:noop,beforeBuildLabels:noop,buildLabels:function(){var me=this;var labelOpts=me.options.labels;var legendItems=labelOpts.generateLabels.call(me,me.chart);if(labelOpts.filter){legendItems=legendItems.filter(function(item){return labelOpts.filter(item,me.chart.data);});}
if(me.options.reverse){legendItems.reverse();}
me.legendItems=legendItems;},afterBuildLabels:noop,beforeFit:noop,fit:function(){var me=this;var opts=me.options;var labelOpts=opts.labels;var display=opts.display;var ctx=me.ctx;var globalDefault=Chart.defaults.global,itemOrDefault=helpers.getValueOrDefault,fontSize=itemOrDefault(labelOpts.fontSize,globalDefault.defaultFontSize),fontStyle=itemOrDefault(labelOpts.fontStyle,globalDefault.defaultFontStyle),fontFamily=itemOrDefault(labelOpts.fontFamily,globalDefault.defaultFontFamily),labelFont=helpers.fontString(fontSize,fontStyle,fontFamily);var hitboxes=me.legendHitBoxes=[];var minSize=me.minSize;var isHorizontal=me.isHorizontal();if(isHorizontal){minSize.width=me.maxWidth;minSize.height=display?10:0;}else{minSize.width=display?10:0;minSize.height=me.maxHeight;}
if(display){ctx.font=labelFont;if(isHorizontal){var lineWidths=me.lineWidths=[0];var totalHeight=me.legendItems.length?fontSize+(labelOpts.padding):0;ctx.textAlign='left';ctx.textBaseline='top';helpers.each(me.legendItems,function(legendItem,i){var boxWidth=getBoxWidth(labelOpts,fontSize);var width=boxWidth+(fontSize/2)+ctx.measureText(legendItem.text).width;if(lineWidths[lineWidths.length-1]+width+labelOpts.padding>=me.width){totalHeight+=fontSize+(labelOpts.padding);lineWidths[lineWidths.length]=me.left;}
hitboxes[i]={left:0,top:0,width:width,height:fontSize};lineWidths[lineWidths.length-1]+=width+labelOpts.padding;});minSize.height+=totalHeight;}else{var vPadding=labelOpts.padding;var columnWidths=me.columnWidths=[];var totalWidth=labelOpts.padding;var currentColWidth=0;var currentColHeight=0;var itemHeight=fontSize+vPadding;helpers.each(me.legendItems,function(legendItem,i){var boxWidth=getBoxWidth(labelOpts,fontSize);var itemWidth=boxWidth+(fontSize/2)+ctx.measureText(legendItem.text).width;if(currentColHeight+itemHeight>minSize.height){totalWidth+=currentColWidth+labelOpts.padding;columnWidths.push(currentColWidth);currentColWidth=0;currentColHeight=0;}
currentColWidth=Math.max(currentColWidth,itemWidth);currentColHeight+=itemHeight;hitboxes[i]={left:0,top:0,width:itemWidth,height:fontSize};});totalWidth+=currentColWidth;columnWidths.push(currentColWidth);minSize.width+=totalWidth;}}
me.width=minSize.width;me.height=minSize.height;},afterFit:noop,isHorizontal:function(){return this.options.position==='top'||this.options.position==='bottom';},draw:function(){var me=this;var opts=me.options;var labelOpts=opts.labels;var globalDefault=Chart.defaults.global,lineDefault=globalDefault.elements.line,legendWidth=me.width,lineWidths=me.lineWidths;if(opts.display){var ctx=me.ctx,cursor,itemOrDefault=helpers.getValueOrDefault,fontColor=itemOrDefault(labelOpts.fontColor,globalDefault.defaultFontColor),fontSize=itemOrDefault(labelOpts.fontSize,globalDefault.defaultFontSize),fontStyle=itemOrDefault(labelOpts.fontStyle,globalDefault.defaultFontStyle),fontFamily=itemOrDefault(labelOpts.fontFamily,globalDefault.defaultFontFamily),labelFont=helpers.fontString(fontSize,fontStyle,fontFamily);ctx.textAlign='left';ctx.textBaseline='top';ctx.lineWidth=0.5;ctx.strokeStyle=fontColor;ctx.fillStyle=fontColor;ctx.font=labelFont;var boxWidth=getBoxWidth(labelOpts,fontSize),hitboxes=me.legendHitBoxes;var drawLegendBox=function(x,y,legendItem){if(isNaN(boxWidth)||boxWidth<=0){return;}
ctx.save();ctx.fillStyle=itemOrDefault(legendItem.fillStyle,globalDefault.defaultColor);ctx.lineCap=itemOrDefault(legendItem.lineCap,lineDefault.borderCapStyle);ctx.lineDashOffset=itemOrDefault(legendItem.lineDashOffset,lineDefault.borderDashOffset);ctx.lineJoin=itemOrDefault(legendItem.lineJoin,lineDefault.borderJoinStyle);ctx.lineWidth=itemOrDefault(legendItem.lineWidth,lineDefault.borderWidth);ctx.strokeStyle=itemOrDefault(legendItem.strokeStyle,globalDefault.defaultColor);var isLineWidthZero=(itemOrDefault(legendItem.lineWidth,lineDefault.borderWidth)===0);if(ctx.setLineDash){ctx.setLineDash(itemOrDefault(legendItem.lineDash,lineDefault.borderDash));}
if(opts.labels&&opts.labels.usePointStyle){var radius=fontSize*Math.SQRT2/2;var offSet=radius/Math.SQRT2;var centerX=x+offSet;var centerY=y+offSet;Chart.canvasHelpers.drawPoint(ctx,legendItem.pointStyle,radius,centerX,centerY);}else{if(!isLineWidthZero){ctx.strokeRect(x,y,boxWidth,fontSize);}
ctx.fillRect(x,y,boxWidth,fontSize);}
ctx.restore();};var fillText=function(x,y,legendItem,textWidth){ctx.fillText(legendItem.text,boxWidth+(fontSize/2)+x,y);if(legendItem.hidden){ctx.beginPath();ctx.lineWidth=2;ctx.moveTo(boxWidth+(fontSize/2)+x,y+(fontSize/2));ctx.lineTo(boxWidth+(fontSize/2)+x+textWidth,y+(fontSize/2));ctx.stroke();}};var isHorizontal=me.isHorizontal();if(isHorizontal){cursor={x:me.left+((legendWidth-lineWidths[0])/2),y:me.top+labelOpts.padding,line:0};}else{cursor={x:me.left+labelOpts.padding,y:me.top+labelOpts.padding,line:0};}
var itemHeight=fontSize+labelOpts.padding;helpers.each(me.legendItems,function(legendItem,i){var textWidth=ctx.measureText(legendItem.text).width,width=boxWidth+(fontSize/2)+textWidth,x=cursor.x,y=cursor.y;if(isHorizontal){if(x+width>=legendWidth){y=cursor.y+=itemHeight;cursor.line++;x=cursor.x=me.left+((legendWidth-lineWidths[cursor.line])/2);}}else if(y+itemHeight>me.bottom){x=cursor.x=x+me.columnWidths[cursor.line]+labelOpts.padding;y=cursor.y=me.top+labelOpts.padding;cursor.line++;}
drawLegendBox(x,y,legendItem);hitboxes[i].left=x;hitboxes[i].top=y;fillText(x,y,legendItem,textWidth);if(isHorizontal){cursor.x+=width+(labelOpts.padding);}else{cursor.y+=itemHeight;}});}},handleEvent:function(e){var me=this;var opts=me.options;var type=e.type==='mouseup'?'click':e.type;var changed=false;if(type==='mousemove'){if(!opts.onHover){return;}}else if(type==='click'){if(!opts.onClick){return;}}else{return;}
var x=e.x,y=e.y;if(x>=me.left&&x<=me.right&&y>=me.top&&y<=me.bottom){var lh=me.legendHitBoxes;for(var i=0;i<lh.length;++i){var hitBox=lh[i];if(x>=hitBox.left&&x<=hitBox.left+hitBox.width&&y>=hitBox.top&&y<=hitBox.top+hitBox.height){if(type==='click'){opts.onClick.call(me,e.native,me.legendItems[i]);changed=true;break;}else if(type==='mousemove'){opts.onHover.call(me,e.native,me.legendItems[i]);changed=true;break;}}}}
return changed;}});function createNewLegendAndAttach(chart,legendOpts){var legend=new Chart.Legend({ctx:chart.ctx,options:legendOpts,chart:chart});layout.configure(chart,legend,legendOpts);layout.addBox(chart,legend);chart.legend=legend;}
return{id:'legend',beforeInit:function(chart){var legendOpts=chart.options.legend;if(legendOpts){createNewLegendAndAttach(chart,legendOpts);}},beforeUpdate:function(chart){var legendOpts=chart.options.legend;var legend=chart.legend;if(legendOpts){legendOpts=helpers.configMerge(Chart.defaults.global.legend,legendOpts);if(legend){layout.configure(chart,legend,legendOpts);legend.options=legendOpts;}else{createNewLegendAndAttach(chart,legendOpts);}}else if(legend){layout.removeBox(chart,legend);delete chart.legend;}},afterEvent:function(chart,e){var legend=chart.legend;if(legend){legend.handleEvent(e);}}};};},{}],43:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;var layout=Chart.layoutService;var noop=helpers.noop;Chart.defaults.global.title={display:false,position:'top',fullWidth:true,weight:2000,fontStyle:'bold',padding:10,text:''};Chart.Title=Chart.Element.extend({initialize:function(config){var me=this;helpers.extend(me,config);me.legendHitBoxes=[];},beforeUpdate:noop,update:function(maxWidth,maxHeight,margins){var me=this;me.beforeUpdate();me.maxWidth=maxWidth;me.maxHeight=maxHeight;me.margins=margins;me.beforeSetDimensions();me.setDimensions();me.afterSetDimensions();me.beforeBuildLabels();me.buildLabels();me.afterBuildLabels();me.beforeFit();me.fit();me.afterFit();me.afterUpdate();return me.minSize;},afterUpdate:noop,beforeSetDimensions:noop,setDimensions:function(){var me=this;if(me.isHorizontal()){me.width=me.maxWidth;me.left=0;me.right=me.width;}else{me.height=me.maxHeight;me.top=0;me.bottom=me.height;}
me.paddingLeft=0;me.paddingTop=0;me.paddingRight=0;me.paddingBottom=0;me.minSize={width:0,height:0};},afterSetDimensions:noop,beforeBuildLabels:noop,buildLabels:noop,afterBuildLabels:noop,beforeFit:noop,fit:function(){var me=this,valueOrDefault=helpers.getValueOrDefault,opts=me.options,globalDefaults=Chart.defaults.global,display=opts.display,fontSize=valueOrDefault(opts.fontSize,globalDefaults.defaultFontSize),minSize=me.minSize;if(me.isHorizontal()){minSize.width=me.maxWidth;minSize.height=display?fontSize+(opts.padding*2):0;}else{minSize.width=display?fontSize+(opts.padding*2):0;minSize.height=me.maxHeight;}
me.width=minSize.width;me.height=minSize.height;},afterFit:noop,isHorizontal:function(){var pos=this.options.position;return pos==='top'||pos==='bottom';},draw:function(){var me=this,ctx=me.ctx,valueOrDefault=helpers.getValueOrDefault,opts=me.options,globalDefaults=Chart.defaults.global;if(opts.display){var fontSize=valueOrDefault(opts.fontSize,globalDefaults.defaultFontSize),fontStyle=valueOrDefault(opts.fontStyle,globalDefaults.defaultFontStyle),fontFamily=valueOrDefault(opts.fontFamily,globalDefaults.defaultFontFamily),titleFont=helpers.fontString(fontSize,fontStyle,fontFamily),rotation=0,titleX,titleY,top=me.top,left=me.left,bottom=me.bottom,right=me.right,maxWidth;ctx.fillStyle=valueOrDefault(opts.fontColor,globalDefaults.defaultFontColor);ctx.font=titleFont;if(me.isHorizontal()){titleX=left+((right-left)/2);titleY=top+((bottom-top)/2);maxWidth=right-left;}else{titleX=opts.position==='left'?left+(fontSize/2):right-(fontSize/2);titleY=top+((bottom-top)/2);maxWidth=bottom-top;rotation=Math.PI*(opts.position==='left'?-0.5:0.5);}
ctx.save();ctx.translate(titleX,titleY);ctx.rotate(rotation);ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(opts.text,0,0,maxWidth);ctx.restore();}}});function createNewTitleBlockAndAttach(chart,titleOpts){var title=new Chart.Title({ctx:chart.ctx,options:titleOpts,chart:chart});layout.configure(chart,title,titleOpts);layout.addBox(chart,title);chart.titleBlock=title;}
return{id:'title',beforeInit:function(chart){var titleOpts=chart.options.title;if(titleOpts){createNewTitleBlockAndAttach(chart,titleOpts);}},beforeUpdate:function(chart){var titleOpts=chart.options.title;var titleBlock=chart.titleBlock;if(titleOpts){titleOpts=helpers.configMerge(Chart.defaults.global.title,titleOpts);if(titleBlock){layout.configure(chart,titleBlock,titleOpts);titleBlock.options=titleOpts;}else{createNewTitleBlockAndAttach(chart,titleOpts);}}else if(titleBlock){Chart.layoutService.removeBox(chart,titleBlock);delete chart.titleBlock;}}};};},{}],44:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;var defaultConfig={position:'bottom'};var DatasetScale=Chart.Scale.extend({getLabels:function(){var data=this.chart.data;return(this.isHorizontal()?data.xLabels:data.yLabels)||data.labels;},determineDataLimits:function(){var me=this;var labels=me.getLabels();me.minIndex=0;me.maxIndex=labels.length-1;var findIndex;if(me.options.ticks.min!==undefined){findIndex=helpers.indexOf(labels,me.options.ticks.min);me.minIndex=findIndex!==-1?findIndex:me.minIndex;}
if(me.options.ticks.max!==undefined){findIndex=helpers.indexOf(labels,me.options.ticks.max);me.maxIndex=findIndex!==-1?findIndex:me.maxIndex;}
me.min=labels[me.minIndex];me.max=labels[me.maxIndex];},buildTicks:function(){var me=this;var labels=me.getLabels();me.ticks=(me.minIndex===0&&me.maxIndex===labels.length-1)?labels:labels.slice(me.minIndex,me.maxIndex+1);},getLabelForIndex:function(index,datasetIndex){var me=this;var data=me.chart.data;var isHorizontal=me.isHorizontal();if(data.yLabels&&!isHorizontal){return me.getRightValue(data.datasets[datasetIndex].data[index]);}
return me.ticks[index-me.minIndex];},getPixelForValue:function(value,index,datasetIndex,includeOffset){var me=this;var offsetAmt=Math.max((me.maxIndex+1-me.minIndex-((me.options.gridLines.offsetGridLines)?0:1)),1);var valueCategory;if(value!==undefined&&value!==null){valueCategory=me.isHorizontal()?value.x:value.y;}
if(valueCategory!==undefined||(value!==undefined&&isNaN(index))){var labels=me.getLabels();value=valueCategory||value;var idx=labels.indexOf(value);index=idx!==-1?idx:index;}
if(me.isHorizontal()){var valueWidth=me.width/offsetAmt;var widthOffset=(valueWidth*(index-me.minIndex));if(me.options.gridLines.offsetGridLines&&includeOffset||me.maxIndex===me.minIndex&&includeOffset){widthOffset+=(valueWidth/2);}
return me.left+Math.round(widthOffset);}
var valueHeight=me.height/offsetAmt;var heightOffset=(valueHeight*(index-me.minIndex));if(me.options.gridLines.offsetGridLines&&includeOffset){heightOffset+=(valueHeight/2);}
return me.top+Math.round(heightOffset);},getPixelForTick:function(index,includeOffset){return this.getPixelForValue(this.ticks[index],index+this.minIndex,null,includeOffset);},getValueForPixel:function(pixel){var me=this;var value;var offsetAmt=Math.max((me.ticks.length-((me.options.gridLines.offsetGridLines)?0:1)),1);var horz=me.isHorizontal();var valueDimension=(horz?me.width:me.height)/offsetAmt;pixel-=horz?me.left:me.top;if(me.options.gridLines.offsetGridLines){pixel-=(valueDimension/2);}
if(pixel<=0){value=0;}else{value=Math.round(pixel/valueDimension);}
return value;},getBasePixel:function(){return this.bottom;}});Chart.scaleService.registerScaleType('category',DatasetScale,defaultConfig);};},{}],45:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;var defaultConfig={position:'left',ticks:{callback:Chart.Ticks.formatters.linear}};var LinearScale=Chart.LinearScaleBase.extend({determineDataLimits:function(){var me=this;var opts=me.options;var chart=me.chart;var data=chart.data;var datasets=data.datasets;var isHorizontal=me.isHorizontal();var DEFAULT_MIN=0;var DEFAULT_MAX=1;function IDMatches(meta){return isHorizontal?meta.xAxisID===me.id:meta.yAxisID===me.id;}
me.min=null;me.max=null;var hasStacks=opts.stacked;if(hasStacks===undefined){helpers.each(datasets,function(dataset,datasetIndex){if(hasStacks){return;}
var meta=chart.getDatasetMeta(datasetIndex);if(chart.isDatasetVisible(datasetIndex)&&IDMatches(meta)&&meta.stack!==undefined){hasStacks=true;}});}
if(opts.stacked||hasStacks){var valuesPerStack={};helpers.each(datasets,function(dataset,datasetIndex){var meta=chart.getDatasetMeta(datasetIndex);var key=[meta.type,((opts.stacked===undefined&&meta.stack===undefined)?datasetIndex:''),meta.stack].join('.');if(valuesPerStack[key]===undefined){valuesPerStack[key]={positiveValues:[],negativeValues:[]};}
var positiveValues=valuesPerStack[key].positiveValues;var negativeValues=valuesPerStack[key].negativeValues;if(chart.isDatasetVisible(datasetIndex)&&IDMatches(meta)){helpers.each(dataset.data,function(rawValue,index){var value=+me.getRightValue(rawValue);if(isNaN(value)||meta.data[index].hidden){return;}
positiveValues[index]=positiveValues[index]||0;negativeValues[index]=negativeValues[index]||0;if(opts.relativePoints){positiveValues[index]=100;}else if(value<0){negativeValues[index]+=value;}else{positiveValues[index]+=value;}});}});helpers.each(valuesPerStack,function(valuesForType){var values=valuesForType.positiveValues.concat(valuesForType.negativeValues);var minVal=helpers.min(values);var maxVal=helpers.max(values);me.min=me.min===null?minVal:Math.min(me.min,minVal);me.max=me.max===null?maxVal:Math.max(me.max,maxVal);});}else{helpers.each(datasets,function(dataset,datasetIndex){var meta=chart.getDatasetMeta(datasetIndex);if(chart.isDatasetVisible(datasetIndex)&&IDMatches(meta)){helpers.each(dataset.data,function(rawValue,index){var value=+me.getRightValue(rawValue);if(isNaN(value)||meta.data[index].hidden){return;}
if(me.min===null){me.min=value;}else if(value<me.min){me.min=value;}
if(me.max===null){me.max=value;}else if(value>me.max){me.max=value;}});}});}
me.min=isFinite(me.min)?me.min:DEFAULT_MIN;me.max=isFinite(me.max)?me.max:DEFAULT_MAX;this.handleTickRangeOptions();},getTickLimit:function(){var maxTicks;var me=this;var tickOpts=me.options.ticks;if(me.isHorizontal()){maxTicks=Math.min(tickOpts.maxTicksLimit?tickOpts.maxTicksLimit:11,Math.ceil(me.width/50));}else{var tickFontSize=helpers.getValueOrDefault(tickOpts.fontSize,Chart.defaults.global.defaultFontSize);maxTicks=Math.min(tickOpts.maxTicksLimit?tickOpts.maxTicksLimit:11,Math.ceil(me.height/(2*tickFontSize)));}
return maxTicks;},handleDirectionalChanges:function(){if(!this.isHorizontal()){this.ticks.reverse();}},getLabelForIndex:function(index,datasetIndex){return+this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);},getPixelForValue:function(value){var me=this;var start=me.start;var rightValue=+me.getRightValue(value);var pixel;var range=me.end-start;if(me.isHorizontal()){pixel=me.left+(me.width/range*(rightValue-start));return Math.round(pixel);}
pixel=me.bottom-(me.height/range*(rightValue-start));return Math.round(pixel);},getValueForPixel:function(pixel){var me=this;var isHorizontal=me.isHorizontal();var innerDimension=isHorizontal?me.width:me.height;var offset=(isHorizontal?pixel-me.left:me.bottom-pixel)/innerDimension;return me.start+((me.end-me.start)*offset);},getPixelForTick:function(index){return this.getPixelForValue(this.ticksAsNumbers[index]);}});Chart.scaleService.registerScaleType('linear',LinearScale,defaultConfig);};},{}],46:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers,noop=helpers.noop;Chart.LinearScaleBase=Chart.Scale.extend({handleTickRangeOptions:function(){var me=this;var opts=me.options;var tickOpts=opts.ticks;if(tickOpts.beginAtZero){var minSign=helpers.sign(me.min);var maxSign=helpers.sign(me.max);if(minSign<0&&maxSign<0){me.max=0;}else if(minSign>0&&maxSign>0){me.min=0;}}
if(tickOpts.min!==undefined){me.min=tickOpts.min;}else if(tickOpts.suggestedMin!==undefined){if(me.min===null){me.min=tickOpts.suggestedMin;}else{me.min=Math.min(me.min,tickOpts.suggestedMin);}}
if(tickOpts.max!==undefined){me.max=tickOpts.max;}else if(tickOpts.suggestedMax!==undefined){if(me.max===null){me.max=tickOpts.suggestedMax;}else{me.max=Math.max(me.max,tickOpts.suggestedMax);}}
if(me.min===me.max){me.max++;if(!tickOpts.beginAtZero){me.min--;}}},getTickLimit:noop,handleDirectionalChanges:noop,buildTicks:function(){var me=this;var opts=me.options;var tickOpts=opts.ticks;var maxTicks=me.getTickLimit();maxTicks=Math.max(2,maxTicks);var numericGeneratorOptions={maxTicks:maxTicks,min:tickOpts.min,max:tickOpts.max,stepSize:helpers.getValueOrDefault(tickOpts.fixedStepSize,tickOpts.stepSize)};var ticks=me.ticks=Chart.Ticks.generators.linear(numericGeneratorOptions,me);me.handleDirectionalChanges();me.max=helpers.max(ticks);me.min=helpers.min(ticks);if(tickOpts.reverse){ticks.reverse();me.start=me.max;me.end=me.min;}else{me.start=me.min;me.end=me.max;}},convertTicksToLabels:function(){var me=this;me.ticksAsNumbers=me.ticks.slice();me.zeroLineIndex=me.ticks.indexOf(0);Chart.Scale.prototype.convertTicksToLabels.call(me);}});};},{}],47:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;var defaultConfig={position:'left',ticks:{callback:Chart.Ticks.formatters.logarithmic}};var LogarithmicScale=Chart.Scale.extend({determineDataLimits:function(){var me=this;var opts=me.options;var tickOpts=opts.ticks;var chart=me.chart;var data=chart.data;var datasets=data.datasets;var getValueOrDefault=helpers.getValueOrDefault;var isHorizontal=me.isHorizontal();function IDMatches(meta){return isHorizontal?meta.xAxisID===me.id:meta.yAxisID===me.id;}
me.min=null;me.max=null;me.minNotZero=null;var hasStacks=opts.stacked;if(hasStacks===undefined){helpers.each(datasets,function(dataset,datasetIndex){if(hasStacks){return;}
var meta=chart.getDatasetMeta(datasetIndex);if(chart.isDatasetVisible(datasetIndex)&&IDMatches(meta)&&meta.stack!==undefined){hasStacks=true;}});}
if(opts.stacked||hasStacks){var valuesPerStack={};helpers.each(datasets,function(dataset,datasetIndex){var meta=chart.getDatasetMeta(datasetIndex);var key=[meta.type,((opts.stacked===undefined&&meta.stack===undefined)?datasetIndex:''),meta.stack].join('.');if(chart.isDatasetVisible(datasetIndex)&&IDMatches(meta)){if(valuesPerStack[key]===undefined){valuesPerStack[key]=[];}
helpers.each(dataset.data,function(rawValue,index){var values=valuesPerStack[key];var value=+me.getRightValue(rawValue);if(isNaN(value)||meta.data[index].hidden){return;}
values[index]=values[index]||0;if(opts.relativePoints){values[index]=100;}else{values[index]+=value;}});}});helpers.each(valuesPerStack,function(valuesForType){var minVal=helpers.min(valuesForType);var maxVal=helpers.max(valuesForType);me.min=me.min===null?minVal:Math.min(me.min,minVal);me.max=me.max===null?maxVal:Math.max(me.max,maxVal);});}else{helpers.each(datasets,function(dataset,datasetIndex){var meta=chart.getDatasetMeta(datasetIndex);if(chart.isDatasetVisible(datasetIndex)&&IDMatches(meta)){helpers.each(dataset.data,function(rawValue,index){var value=+me.getRightValue(rawValue);if(isNaN(value)||meta.data[index].hidden){return;}
if(me.min===null){me.min=value;}else if(value<me.min){me.min=value;}
if(me.max===null){me.max=value;}else if(value>me.max){me.max=value;}
if(value!==0&&(me.minNotZero===null||value<me.minNotZero)){me.minNotZero=value;}});}});}
me.min=getValueOrDefault(tickOpts.min,me.min);me.max=getValueOrDefault(tickOpts.max,me.max);if(me.min===me.max){if(me.min!==0&&me.min!==null){me.min=Math.pow(10,Math.floor(helpers.log10(me.min))-1);me.max=Math.pow(10,Math.floor(helpers.log10(me.max))+1);}else{me.min=1;me.max=10;}}},buildTicks:function(){var me=this;var opts=me.options;var tickOpts=opts.ticks;var generationOptions={min:tickOpts.min,max:tickOpts.max};var ticks=me.ticks=Chart.Ticks.generators.logarithmic(generationOptions,me);if(!me.isHorizontal()){ticks.reverse();}
me.max=helpers.max(ticks);me.min=helpers.min(ticks);if(tickOpts.reverse){ticks.reverse();me.start=me.max;me.end=me.min;}else{me.start=me.min;me.end=me.max;}},convertTicksToLabels:function(){this.tickValues=this.ticks.slice();Chart.Scale.prototype.convertTicksToLabels.call(this);},getLabelForIndex:function(index,datasetIndex){return+this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);},getPixelForTick:function(index){return this.getPixelForValue(this.tickValues[index]);},getPixelForValue:function(value){var me=this;var innerDimension;var pixel;var start=me.start;var newVal=+me.getRightValue(value);var range;var opts=me.options;var tickOpts=opts.ticks;if(me.isHorizontal()){range=helpers.log10(me.end)-helpers.log10(start);if(newVal===0){pixel=me.left;}else{innerDimension=me.width;pixel=me.left+(innerDimension/range*(helpers.log10(newVal)-helpers.log10(start)));}}else{innerDimension=me.height;if(start===0&&!tickOpts.reverse){range=helpers.log10(me.end)-helpers.log10(me.minNotZero);if(newVal===start){pixel=me.bottom;}else if(newVal===me.minNotZero){pixel=me.bottom-innerDimension*0.02;}else{pixel=me.bottom-innerDimension*0.02-(innerDimension*0.98/range*(helpers.log10(newVal)-helpers.log10(me.minNotZero)));}}else if(me.end===0&&tickOpts.reverse){range=helpers.log10(me.start)-helpers.log10(me.minNotZero);if(newVal===me.end){pixel=me.top;}else if(newVal===me.minNotZero){pixel=me.top+innerDimension*0.02;}else{pixel=me.top+innerDimension*0.02+(innerDimension*0.98/range*(helpers.log10(newVal)-helpers.log10(me.minNotZero)));}}else if(newVal===0){pixel=tickOpts.reverse?me.top:me.bottom;}else{range=helpers.log10(me.end)-helpers.log10(start);innerDimension=me.height;pixel=me.bottom-(innerDimension/range*(helpers.log10(newVal)-helpers.log10(start)));}}
return pixel;},getValueForPixel:function(pixel){var me=this;var range=helpers.log10(me.end)-helpers.log10(me.start);var value,innerDimension;if(me.isHorizontal()){innerDimension=me.width;value=me.start*Math.pow(10,(pixel-me.left)*range/innerDimension);}else{innerDimension=me.height;value=Math.pow(10,(me.bottom-pixel)*range/innerDimension)/me.start;}
return value;}});Chart.scaleService.registerScaleType('logarithmic',LogarithmicScale,defaultConfig);};},{}],48:[function(require,module,exports){'use strict';module.exports=function(Chart){var helpers=Chart.helpers;var globalDefaults=Chart.defaults.global;var defaultConfig={display:true,animate:true,position:'chartArea',angleLines:{display:true,color:'rgba(0, 0, 0, 0.1)',lineWidth:1},gridLines:{circular:false},ticks:{showLabelBackdrop:true,backdropColor:'rgba(255,255,255,0.75)',backdropPaddingY:2,backdropPaddingX:2,callback:Chart.Ticks.formatters.linear},pointLabels:{display:true,fontSize:10,callback:function(label){return label;}}};function getValueCount(scale){var opts=scale.options;return opts.angleLines.display||opts.pointLabels.display?scale.chart.data.labels.length:0;}
function getPointLabelFontOptions(scale){var pointLabelOptions=scale.options.pointLabels;var fontSize=helpers.getValueOrDefault(pointLabelOptions.fontSize,globalDefaults.defaultFontSize);var fontStyle=helpers.getValueOrDefault(pointLabelOptions.fontStyle,globalDefaults.defaultFontStyle);var fontFamily=helpers.getValueOrDefault(pointLabelOptions.fontFamily,globalDefaults.defaultFontFamily);var font=helpers.fontString(fontSize,fontStyle,fontFamily);return{size:fontSize,style:fontStyle,family:fontFamily,font:font};}
function measureLabelSize(ctx,fontSize,label){if(helpers.isArray(label)){return{w:helpers.longestText(ctx,ctx.font,label),h:(label.length*fontSize)+((label.length-1)*1.5*fontSize)};}
return{w:ctx.measureText(label).width,h:fontSize};}
function determineLimits(angle,pos,size,min,max){if(angle===min||angle===max){return{start:pos-(size/2),end:pos+(size/2)};}else if(angle<min||angle>max){return{start:pos-size-5,end:pos};}
return{start:pos,end:pos+size+5};}
function fitWithPointLabels(scale){var plFont=getPointLabelFontOptions(scale);var largestPossibleRadius=Math.min(scale.height/2,scale.width/2);var furthestLimits={r:scale.width,l:0,t:scale.height,b:0};var furthestAngles={};var i;var textSize;var pointPosition;scale.ctx.font=plFont.font;scale._pointLabelSizes=[];var valueCount=getValueCount(scale);for(i=0;i<valueCount;i++){pointPosition=scale.getPointPosition(i,largestPossibleRadius);textSize=measureLabelSize(scale.ctx,plFont.size,scale.pointLabels[i]||'');scale._pointLabelSizes[i]=textSize;var angleRadians=scale.getIndexAngle(i);var angle=helpers.toDegrees(angleRadians)%360;var hLimits=determineLimits(angle,pointPosition.x,textSize.w,0,180);var vLimits=determineLimits(angle,pointPosition.y,textSize.h,90,270);if(hLimits.start<furthestLimits.l){furthestLimits.l=hLimits.start;furthestAngles.l=angleRadians;}
if(hLimits.end>furthestLimits.r){furthestLimits.r=hLimits.end;furthestAngles.r=angleRadians;}
if(vLimits.start<furthestLimits.t){furthestLimits.t=vLimits.start;furthestAngles.t=angleRadians;}
if(vLimits.end>furthestLimits.b){furthestLimits.b=vLimits.end;furthestAngles.b=angleRadians;}}
scale.setReductions(largestPossibleRadius,furthestLimits,furthestAngles);}
function fit(scale){var largestPossibleRadius=Math.min(scale.height/2,scale.width/2);scale.drawingArea=Math.round(largestPossibleRadius);scale.setCenterPoint(0,0,0,0);}
function getTextAlignForAngle(angle){if(angle===0||angle===180){return'center';}else if(angle<180){return'left';}
return'right';}
function fillText(ctx,text,position,fontSize){if(helpers.isArray(text)){var y=position.y;var spacing=1.5*fontSize;for(var i=0;i<text.length;++i){ctx.fillText(text[i],position.x,y);y+=spacing;}}else{ctx.fillText(text,position.x,position.y);}}
function adjustPointPositionForLabelHeight(angle,textSize,position){if(angle===90||angle===270){position.y-=(textSize.h/2);}else if(angle>270||angle<90){position.y-=textSize.h;}}
function drawPointLabels(scale){var ctx=scale.ctx;var getValueOrDefault=helpers.getValueOrDefault;var opts=scale.options;var angleLineOpts=opts.angleLines;var pointLabelOpts=opts.pointLabels;ctx.lineWidth=angleLineOpts.lineWidth;ctx.strokeStyle=angleLineOpts.color;var outerDistance=scale.getDistanceFromCenterForValue(opts.reverse?scale.min:scale.max);var plFont=getPointLabelFontOptions(scale);ctx.textBaseline='top';for(var i=getValueCount(scale)-1;i>=0;i--){if(angleLineOpts.display){var outerPosition=scale.getPointPosition(i,outerDistance);ctx.beginPath();ctx.moveTo(scale.xCenter,scale.yCenter);ctx.lineTo(outerPosition.x,outerPosition.y);ctx.stroke();ctx.closePath();}
if(pointLabelOpts.display){var pointLabelPosition=scale.getPointPosition(i,outerDistance+5);var pointLabelFontColor=getValueOrDefault(pointLabelOpts.fontColor,globalDefaults.defaultFontColor);ctx.font=plFont.font;ctx.fillStyle=pointLabelFontColor;var angleRadians=scale.getIndexAngle(i);var angle=helpers.toDegrees(angleRadians);ctx.textAlign=getTextAlignForAngle(angle);adjustPointPositionForLabelHeight(angle,scale._pointLabelSizes[i],pointLabelPosition);fillText(ctx,scale.pointLabels[i]||'',pointLabelPosition,plFont.size);}}}
function drawRadiusLine(scale,gridLineOpts,radius,index){var ctx=scale.ctx;ctx.strokeStyle=helpers.getValueAtIndexOrDefault(gridLineOpts.color,index-1);ctx.lineWidth=helpers.getValueAtIndexOrDefault(gridLineOpts.lineWidth,index-1);if(scale.options.gridLines.circular){ctx.beginPath();ctx.arc(scale.xCenter,scale.yCenter,radius,0,Math.PI*2);ctx.closePath();ctx.stroke();}else{var valueCount=getValueCount(scale);if(valueCount===0){return;}
ctx.beginPath();var pointPosition=scale.getPointPosition(0,radius);ctx.moveTo(pointPosition.x,pointPosition.y);for(var i=1;i<valueCount;i++){pointPosition=scale.getPointPosition(i,radius);ctx.lineTo(pointPosition.x,pointPosition.y);}
ctx.closePath();ctx.stroke();}}
function numberOrZero(param){return helpers.isNumber(param)?param:0;}
var LinearRadialScale=Chart.LinearScaleBase.extend({setDimensions:function(){var me=this;var opts=me.options;var tickOpts=opts.ticks;me.width=me.maxWidth;me.height=me.maxHeight;me.xCenter=Math.round(me.width/2);me.yCenter=Math.round(me.height/2);var minSize=helpers.min([me.height,me.width]);var tickFontSize=helpers.getValueOrDefault(tickOpts.fontSize,globalDefaults.defaultFontSize);me.drawingArea=opts.display?(minSize/2)-(tickFontSize/2+tickOpts.backdropPaddingY):(minSize/2);},determineDataLimits:function(){var me=this;var chart=me.chart;var min=Number.POSITIVE_INFINITY;var max=Number.NEGATIVE_INFINITY;helpers.each(chart.data.datasets,function(dataset,datasetIndex){if(chart.isDatasetVisible(datasetIndex)){var meta=chart.getDatasetMeta(datasetIndex);helpers.each(dataset.data,function(rawValue,index){var value=+me.getRightValue(rawValue);if(isNaN(value)||meta.data[index].hidden){return;}
min=Math.min(value,min);max=Math.max(value,max);});}});me.min=(min===Number.POSITIVE_INFINITY?0:min);me.max=(max===Number.NEGATIVE_INFINITY?0:max);me.handleTickRangeOptions();},getTickLimit:function(){var tickOpts=this.options.ticks;var tickFontSize=helpers.getValueOrDefault(tickOpts.fontSize,globalDefaults.defaultFontSize);return Math.min(tickOpts.maxTicksLimit?tickOpts.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*tickFontSize)));},convertTicksToLabels:function(){var me=this;Chart.LinearScaleBase.prototype.convertTicksToLabels.call(me);me.pointLabels=me.chart.data.labels.map(me.options.pointLabels.callback,me);},getLabelForIndex:function(index,datasetIndex){return+this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);},fit:function(){if(this.options.pointLabels.display){fitWithPointLabels(this);}else{fit(this);}},setReductions:function(largestPossibleRadius,furthestLimits,furthestAngles){var me=this;var radiusReductionLeft=furthestLimits.l/Math.sin(furthestAngles.l);var radiusReductionRight=Math.max(furthestLimits.r-me.width,0)/Math.sin(furthestAngles.r);var radiusReductionTop=-furthestLimits.t/Math.cos(furthestAngles.t);var radiusReductionBottom=-Math.max(furthestLimits.b-me.height,0)/Math.cos(furthestAngles.b);radiusReductionLeft=numberOrZero(radiusReductionLeft);radiusReductionRight=numberOrZero(radiusReductionRight);radiusReductionTop=numberOrZero(radiusReductionTop);radiusReductionBottom=numberOrZero(radiusReductionBottom);me.drawingArea=Math.min(Math.round(largestPossibleRadius-(radiusReductionLeft+radiusReductionRight)/2),Math.round(largestPossibleRadius-(radiusReductionTop+radiusReductionBottom)/2));me.setCenterPoint(radiusReductionLeft,radiusReductionRight,radiusReductionTop,radiusReductionBottom);},setCenterPoint:function(leftMovement,rightMovement,topMovement,bottomMovement){var me=this;var maxRight=me.width-rightMovement-me.drawingArea,maxLeft=leftMovement+me.drawingArea,maxTop=topMovement+me.drawingArea,maxBottom=me.height-bottomMovement-me.drawingArea;me.xCenter=Math.round(((maxLeft+maxRight)/2)+me.left);me.yCenter=Math.round(((maxTop+maxBottom)/2)+me.top);},getIndexAngle:function(index){var angleMultiplier=(Math.PI*2)/getValueCount(this);var startAngle=this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0;var startAngleRadians=startAngle*Math.PI*2/360;return index*angleMultiplier+startAngleRadians;},getDistanceFromCenterForValue:function(value){var me=this;if(value===null){return 0;}
var scalingFactor=me.drawingArea/(me.max-me.min);if(me.options.reverse){return(me.max-value)*scalingFactor;}
return(value-me.min)*scalingFactor;},getPointPosition:function(index,distanceFromCenter){var me=this;var thisAngle=me.getIndexAngle(index)-(Math.PI/2);return{x:Math.round(Math.cos(thisAngle)*distanceFromCenter)+me.xCenter,y:Math.round(Math.sin(thisAngle)*distanceFromCenter)+me.yCenter};},getPointPositionForValue:function(index,value){return this.getPointPosition(index,this.getDistanceFromCenterForValue(value));},getBasePosition:function(){var me=this;var min=me.min;var max=me.max;return me.getPointPositionForValue(0,me.beginAtZero?0:min<0&&max<0?max:min>0&&max>0?min:0);},draw:function(){var me=this;var opts=me.options;var gridLineOpts=opts.gridLines;var tickOpts=opts.ticks;var getValueOrDefault=helpers.getValueOrDefault;if(opts.display){var ctx=me.ctx;var tickFontSize=getValueOrDefault(tickOpts.fontSize,globalDefaults.defaultFontSize);var tickFontStyle=getValueOrDefault(tickOpts.fontStyle,globalDefaults.defaultFontStyle);var tickFontFamily=getValueOrDefault(tickOpts.fontFamily,globalDefaults.defaultFontFamily);var tickLabelFont=helpers.fontString(tickFontSize,tickFontStyle,tickFontFamily);helpers.each(me.ticks,function(label,index){if(index>0||opts.reverse){var yCenterOffset=me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);var yHeight=me.yCenter-yCenterOffset;if(gridLineOpts.display&&index!==0){drawRadiusLine(me,gridLineOpts,yCenterOffset,index);}
if(tickOpts.display){var tickFontColor=getValueOrDefault(tickOpts.fontColor,globalDefaults.defaultFontColor);ctx.font=tickLabelFont;if(tickOpts.showLabelBackdrop){var labelWidth=ctx.measureText(label).width;ctx.fillStyle=tickOpts.backdropColor;ctx.fillRect(me.xCenter-labelWidth/2-tickOpts.backdropPaddingX,yHeight-tickFontSize/2-tickOpts.backdropPaddingY,labelWidth+tickOpts.backdropPaddingX*2,tickFontSize+tickOpts.backdropPaddingY*2);}
ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=tickFontColor;ctx.fillText(label,me.xCenter,yHeight);}}});if(opts.angleLines.display||opts.pointLabels.display){drawPointLabels(me);}}}});Chart.scaleService.registerScaleType('radialLinear',LinearRadialScale,defaultConfig);};},{}],49:[function(require,module,exports){'use strict';var moment=require(6);moment=typeof(moment)==='function'?moment:window.moment;module.exports=function(Chart){var helpers=Chart.helpers;var interval={millisecond:{size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{size:1000,steps:[1,2,5,10,30]},minute:{size:60000,steps:[1,2,5,10,30]},hour:{size:3600000,steps:[1,2,3,6,12]},day:{size:86400000,steps:[1,2,5]},week:{size:604800000,maxStep:4},month:{size:2.628e9,maxStep:3},quarter:{size:7.884e9,maxStep:4},year:{size:3.154e10,maxStep:false}};var defaultConfig={position:'bottom',time:{parser:false,format:false,unit:false,round:false,displayFormat:false,isoWeekday:false,minUnit:'millisecond',displayFormats:{millisecond:'h:mm:ss.SSS a',second:'h:mm:ss a',minute:'h:mm:ss a',hour:'MMM D, hA',day:'ll',week:'ll',month:'MMM YYYY',quarter:'[Q]Q - YYYY',year:'YYYY'},},ticks:{autoSkip:false}};function parseTime(axis,label){var timeOpts=axis.options.time;if(typeof timeOpts.parser==='string'){return moment(label,timeOpts.parser);}
if(typeof timeOpts.parser==='function'){return timeOpts.parser(label);}
if(typeof label.getMonth==='function'||typeof label==='number'){return moment(label);}
if(label.isValid&&label.isValid()){return label;}
var format=timeOpts.format;if(typeof format!=='string'&&format.call){console.warn('options.time.format is deprecated and replaced by options.time.parser.');return format(label);}
return moment(label,format);}
function determineUnit(minUnit,min,max,maxTicks){var units=Object.keys(interval);var unit;var numUnits=units.length;for(var i=units.indexOf(minUnit);i<numUnits;i++){unit=units[i];var unitDetails=interval[unit];var steps=(unitDetails.steps&&unitDetails.steps[unitDetails.steps.length-1])||unitDetails.maxStep;if(steps===undefined||Math.ceil((max-min)/(steps*unitDetails.size))<=maxTicks){break;}}
return unit;}
function determineStepSize(min,max,unit,maxTicks){var unitDefinition=interval[unit];var unitSizeInMilliSeconds=unitDefinition.size;var sizeInUnits=Math.ceil((max-min)/unitSizeInMilliSeconds);var multiplier=1;var range=max-min;if(unitDefinition.steps){var numSteps=unitDefinition.steps.length;for(var i=0;i<numSteps&&sizeInUnits>maxTicks;i++){multiplier=unitDefinition.steps[i];sizeInUnits=Math.ceil(range/(unitSizeInMilliSeconds*multiplier));}}else{while(sizeInUnits>maxTicks&&maxTicks>0){++multiplier;sizeInUnits=Math.ceil(range/(unitSizeInMilliSeconds*multiplier));}}
return multiplier;}
function generateTicks(options,dataRange,niceRange){var ticks=[];if(options.maxTicks){var stepSize=options.stepSize;ticks.push(options.min!==undefined?options.min:niceRange.min);var cur=moment(niceRange.min);while(cur.add(stepSize,options.unit).valueOf()<niceRange.max){ticks.push(cur.valueOf());}
var realMax=options.max||niceRange.max;if(ticks[ticks.length-1]!==realMax){ticks.push(realMax);}}
return ticks;}
Chart.Ticks.generators.time=function(options,dataRange){var niceMin;var niceMax;var isoWeekday=options.isoWeekday;if(options.unit==='week'&&isoWeekday!==false){niceMin=moment(dataRange.min).startOf('isoWeek').isoWeekday(isoWeekday).valueOf();niceMax=moment(dataRange.max).startOf('isoWeek').isoWeekday(isoWeekday);if(dataRange.max-niceMax>0){niceMax.add(1,'week');}
niceMax=niceMax.valueOf();}else{niceMin=moment(dataRange.min).startOf(options.unit).valueOf();niceMax=moment(dataRange.max).startOf(options.unit);if(dataRange.max-niceMax>0){niceMax.add(1,options.unit);}
niceMax=niceMax.valueOf();}
return generateTicks(options,dataRange,{min:niceMin,max:niceMax});};var TimeScale=Chart.Scale.extend({initialize:function(){if(!moment){throw new Error('Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com');}
Chart.Scale.prototype.initialize.call(this);},determineDataLimits:function(){var me=this;var timeOpts=me.options.time;var dataMin=Number.MAX_SAFE_INTEGER;var dataMax=Number.MIN_SAFE_INTEGER;var chartData=me.chart.data;var parsedData={labels:[],datasets:[]};var timestamp;helpers.each(chartData.labels,function(label,labelIndex){var labelMoment=parseTime(me,label);if(labelMoment.isValid()){if(timeOpts.round){labelMoment.startOf(timeOpts.round);}
timestamp=labelMoment.valueOf();dataMin=Math.min(timestamp,dataMin);dataMax=Math.max(timestamp,dataMax);parsedData.labels[labelIndex]=timestamp;}});helpers.each(chartData.datasets,function(dataset,datasetIndex){var timestamps=[];if(typeof dataset.data[0]==='object'&&dataset.data[0]!==null&&me.chart.isDatasetVisible(datasetIndex)){helpers.each(dataset.data,function(value,dataIndex){var dataMoment=parseTime(me,me.getRightValue(value));if(dataMoment.isValid()){if(timeOpts.round){dataMoment.startOf(timeOpts.round);}
timestamp=dataMoment.valueOf();dataMin=Math.min(timestamp,dataMin);dataMax=Math.max(timestamp,dataMax);timestamps[dataIndex]=timestamp;}});}else{timestamps=parsedData.labels.slice();}
parsedData.datasets[datasetIndex]=timestamps;});me.dataMin=dataMin;me.dataMax=dataMax;me._parsedData=parsedData;},buildTicks:function(){var me=this;var timeOpts=me.options.time;var minTimestamp;var maxTimestamp;var dataMin=me.dataMin;var dataMax=me.dataMax;if(timeOpts.min){var minMoment=parseTime(me,timeOpts.min);if(timeOpts.round){minMoment.round(timeOpts.round);}
minTimestamp=minMoment.valueOf();}
if(timeOpts.max){maxTimestamp=parseTime(me,timeOpts.max).valueOf();}
var maxTicks=me.getLabelCapacity(minTimestamp||dataMin);var unit=timeOpts.unit||determineUnit(timeOpts.minUnit,minTimestamp||dataMin,maxTimestamp||dataMax,maxTicks);me.displayFormat=timeOpts.displayFormats[unit];var stepSize=timeOpts.stepSize||determineStepSize(minTimestamp||dataMin,maxTimestamp||dataMax,unit,maxTicks);me.ticks=Chart.Ticks.generators.time({maxTicks:maxTicks,min:minTimestamp,max:maxTimestamp,stepSize:stepSize,unit:unit,isoWeekday:timeOpts.isoWeekday},{min:dataMin,max:dataMax});me.max=helpers.max(me.ticks);me.min=helpers.min(me.ticks);},getLabelForIndex:function(index,datasetIndex){var me=this;var label=me.chart.data.labels&&index<me.chart.data.labels.length?me.chart.data.labels[index]:'';var value=me.chart.data.datasets[datasetIndex].data[index];if(value!==null&&typeof value==='object'){label=me.getRightValue(value);}
if(me.options.time.tooltipFormat){label=parseTime(me,label).format(me.options.time.tooltipFormat);}
return label;},tickFormatFunction:function(tick,index,ticks){var formattedTick=tick.format(this.displayFormat);var tickOpts=this.options.ticks;var callback=helpers.getValueOrDefault(tickOpts.callback,tickOpts.userCallback);if(callback){return callback(formattedTick,index,ticks);}
return formattedTick;},convertTicksToLabels:function(){var me=this;me.ticksAsTimestamps=me.ticks;me.ticks=me.ticks.map(function(tick){return moment(tick);}).map(me.tickFormatFunction,me);},getPixelForOffset:function(offset){var me=this;var epochWidth=me.max-me.min;var decimal=epochWidth?(offset-me.min)/epochWidth:0;if(me.isHorizontal()){var valueOffset=(me.width*decimal);return me.left+Math.round(valueOffset);}
var heightOffset=(me.height*decimal);return me.top+Math.round(heightOffset);},getPixelForValue:function(value,index,datasetIndex){var me=this;var offset=null;if(index!==undefined&&datasetIndex!==undefined){offset=me._parsedData.datasets[datasetIndex][index];}
if(offset===null){if(!value||!value.isValid){value=parseTime(me,me.getRightValue(value));}
if(value&&value.isValid&&value.isValid()){offset=value.valueOf();}}
if(offset!==null){return me.getPixelForOffset(offset);}},getPixelForTick:function(index){return this.getPixelForOffset(this.ticksAsTimestamps[index]);},getValueForPixel:function(pixel){var me=this;var innerDimension=me.isHorizontal()?me.width:me.height;var offset=(pixel-(me.isHorizontal()?me.left:me.top))/innerDimension;return moment(me.min+(offset*(me.max-me.min)));},getLabelWidth:function(label){var me=this;var ticks=me.options.ticks;var tickLabelWidth=me.ctx.measureText(label).width;var cosRotation=Math.cos(helpers.toRadians(ticks.maxRotation));var sinRotation=Math.sin(helpers.toRadians(ticks.maxRotation));var tickFontSize=helpers.getValueOrDefault(ticks.fontSize,Chart.defaults.global.defaultFontSize);return(tickLabelWidth*cosRotation)+(tickFontSize*sinRotation);},getLabelCapacity:function(exampleTime){var me=this;me.displayFormat=me.options.time.displayFormats.millisecond;var exampleLabel=me.tickFormatFunction(moment(exampleTime),0,[]);var tickLabelWidth=me.getLabelWidth(exampleLabel);var innerWidth=me.isHorizontal()?me.width:me.height;var labelCapacity=innerWidth/tickLabelWidth;return labelCapacity;}});Chart.scaleService.registerScaleType('time',TimeScale,defaultConfig);};},{"6":6}]},{},[7])(7)});
'use strict';window.chartColors={red:'rgb(255, 99, 132)',orange:'rgb(255, 159, 64)',yellow:'rgb(255, 205, 86)',green:'rgb(75, 192, 192)',blue:'rgb(54, 162, 235)',purple:'rgb(153, 102, 255)',grey:'rgb(201, 203, 207)'};window.randomScalingFactor=function(){return Math.floor(Math.random()*(100-10+1)+10);};(function(global){var Months=['January','February','March','April','May','June','July','August','September','October','November','December'];var Samples=global.Samples||(global.Samples={});Samples.utils={srand:function(seed){this._seed=seed;},rand:function(min,max){var seed=this._seed;min=min===undefined?0:min;max=max===undefined?1:max;this._seed=(seed*9301+49297)%233280;return min+(this._seed/233280)*(max-min);},numbers:function(config){var cfg=config||{};var min=cfg.min||0;var max=cfg.max||1;var from=cfg.from||[];var count=cfg.count||8;var decimals=cfg.decimals||8;var continuity=cfg.continuity||1;var dfactor=Math.pow(10,decimals)||0;var data=[];var i,value;for(i=0;i<count;++i){value=(from[i]||0)+this.rand(min,max);if(this.rand()<=continuity){data.push(Math.round(dfactor*value)/dfactor);}else{data.push(null);}}
return data;},labels:function(config){var cfg=config||{};var min=cfg.min||0;var max=cfg.max||100;var count=cfg.count||8;var step=(max-min)/count;var decimals=cfg.decimals||8;var dfactor=Math.pow(10,decimals)||0;var prefix=cfg.prefix||'';var values=[];var i;for(i=min;i<max;i+=step){values.push(prefix+Math.round(dfactor*i)/dfactor);}
return values;},months:function(config){var cfg=config||{};var count=cfg.count||12;var section=cfg.section;var values=[];var i,value;for(i=0;i<count;++i){value=Months[Math.ceil(i)%12];values.push(value.substring(0,section));}
return values;},transparentize:function(color,opacity){var alpha=opacity===undefined?0.5:1-opacity;return Chart.helpers.color(color).alpha(alpha).rgbString();},merge:Chart.helpers.configMerge};Samples.utils.srand(Date.now());if(document.location.hostname==='www.chartjs.org'){(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','UA-28909194-3','auto');ga('send','pageview');}}(this));
$(document).ready(function() {
    var MONTHS=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var config= {
        type:'line', data: {
            labels:["January", "February", "March", "April", "May", "June", "July"], datasets:[ {
                label: "New Patients", backgroundColor: window.chartColors.red, borderColor: window.chartColors.red, data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()], fill: false,
            }
            , {
                label: "Old Patients", fill: false, backgroundColor: window.chartColors.blue, borderColor: window.chartColors.blue, data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
            }
            ]
        }
        , options: {
            responsive:true, title: {
                display: true, text: 'HOSPITAL SURVEY'
            }
            , tooltips: {
                mode: 'index', intersect: false,
            }
            , hover: {
                mode: 'nearest', intersect: true
            }
            , scales: {
                xAxes:[ {
                    display:true, scaleLabel: {
                        display: true, labelString: 'Month'
                    }
                }
                ], yAxes:[ {
                    display:true, scaleLabel: {
                        display: true, labelString: 'Patients'
                    }
                }
                ]
            }
        }
    }
    ;
    var ctx=document.getElementById("chartjs_line").getContext("2d");
    window.myLine=new Chart(ctx, config);
}

);
$(document).ready(function() {
	var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };

    var config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.yellow,
                    window.chartColors.green,
                    window.chartColors.blue,
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "Red",
                "Orange",
                "Yellow",
                "Green",
                "Blue"
            ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Doughnut Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };

        var ctx = document.getElementById("chartjs_doughnut").getContext("2d");
        window.myDoughnut = new Chart(ctx, config);
    
	});
(function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)})({0:function(e,t,n){e.exports=n("56d7")},"0019":function(e,t,n){},"00b4":function(e,t,n){"use strict";n("ac1f");var i=n("23e7"),r=n("861d"),a=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),o=/./.test;i({target:"RegExp",proto:!0,forced:!a},{test:function(e){if("function"!==typeof this.exec)return o.call(this,e);var t=this.exec(e);if(null!==t&&!r(t))throw new Error("RegExp exec method returned something other than an Object or null");return!!t}})},"00ee":function(e,t,n){var i=n("b622"),r=i("toStringTag"),a={};a[r]="z",e.exports="[object z]"===String(a)},"0261":function(e,t,n){var i=n("23e7"),r=n("d039"),a=n("8eb5"),o=Math.abs,s=Math.exp,l=Math.E,c=r((function(){return-2e-17!=Math.sinh(-2e-17)}));i({target:"Math",stat:!0,forced:c},{sinh:function(e){return o(e=+e)<1?(a(e)-a(-e))/2:(s(e-1)-s(-e-1))*(l/2)}})},"02f0":function(e,t,n){(function(e){e(n("56b3"))})((function(e){"use strict";e.defineMode("shell",(function(){var t={};function n(e,n){for(var i=0;i<n.length;i++)t[n[i]]=e}var i=["true","false"],r=["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],a=["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","nl","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"];function o(e,n){if(e.eatSpace())return null;var i=e.sol(),r=e.next();if("\\"===r)return e.next(),null;if("'"===r||'"'===r||"`"===r)return n.tokens.unshift(s(r,"`"===r?"quote":"string")),u(e,n);if("#"===r)return i&&e.eat("!")?(e.skipToEnd(),"meta"):(e.skipToEnd(),"comment");if("$"===r)return n.tokens.unshift(c),u(e,n);if("+"===r||"="===r)return"operator";if("-"===r)return e.eat("-"),e.eatWhile(/\w/),"attribute";if(/\d/.test(r)&&(e.eatWhile(/\d/),e.eol()||!/\w/.test(e.peek())))return"number";e.eatWhile(/[\w-]/);var a=e.current();return"="===e.peek()&&/\w+/.test(a)?"def":t.hasOwnProperty(a)?t[a]:null}function s(e,t){var n="("==e?")":"{"==e?"}":e;return function(i,r){var a,o=!1;while(null!=(a=i.next())){if(a===n&&!o){r.tokens.shift();break}if("$"===a&&!o&&"'"!==e&&i.peek()!=n){o=!0,i.backUp(1),r.tokens.unshift(c);break}if(!o&&e!==n&&a===e)return r.tokens.unshift(s(e,t)),u(i,r);if(!o&&/['"]/.test(a)&&!/['"]/.test(e)){r.tokens.unshift(l(a,"string")),i.backUp(1);break}o=!o&&"\\"===a}return t}}function l(e,t){return function(n,i){return i.tokens[0]=s(e,t),n.next(),u(n,i)}}e.registerHelper("hintWords","shell",i.concat(r,a)),n("atom",i),n("keyword",r),n("builtin",a);var c=function(e,t){t.tokens.length>1&&e.eat("$");var n=e.next();return/['"({]/.test(n)?(t.tokens[0]=s(n,"("==n?"quote":"{"==n?"def":"string"),u(e,t)):(/\d/.test(n)||e.eatWhile(/\w/),t.tokens.shift(),"def")};function u(e,t){return(t.tokens[0]||o)(e,t)}return{startState:function(){return{tokens:[]}},token:function(e,t){return u(e,t)},closeBrackets:"()[]{}''\"\"``",lineComment:"#",fold:"brace"}})),e.defineMIME("text/x-sh","shell"),e.defineMIME("application/x-sh","shell")}))},"0366":function(e,t,n){var i=n("1c0b");e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,r){return e.call(t,n,i,r)}}return function(){return e.apply(t,arguments)}}},"0481":function(e,t,n){"use strict";var i=n("23e7"),r=n("a2bf"),a=n("7b0b"),o=n("50c4"),s=n("a691"),l=n("65f0");i({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=a(this),n=o(t.length),i=l(t,0);return i.length=r(i,t,t,n,0,void 0===e?1:s(e)),i}})},"04d3":function(e,t,n){"use strict";var i=n("23e7"),r=n("857a"),a=n("af03");i({target:"String",proto:!0,forced:a("blink")},{blink:function(){return r(this,"blink","","")}})},"0538":function(e,t,n){"use strict";var i=n("1c0b"),r=n("861d"),a=[].slice,o={},s=function(e,t,n){if(!(t in o)){for(var i=[],r=0;r<t;r++)i[r]="a["+r+"]";o[t]=Function("C,a","return new C("+i.join(",")+")")}return o[t](e,n)};e.exports=Function.bind||function(e){var t=i(this),n=a.call(arguments,1),o=function(){var i=n.concat(a.call(arguments));return this instanceof o?s(t,i.length,i):t.apply(e,i)};return r(t.prototype)&&(o.prototype=t.prototype),o}},"057f":function(e,t,n){var i=n("fc6a"),r=n("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return r(e)}catch(t){return o.slice()}};e.exports.f=function(e){return o&&"[object Window]"==a.call(e)?s(e):r(i(e))}},"06cf":function(e,t,n){var i=n("83ab"),r=n("d1e7"),a=n("5c6c"),o=n("fc6a"),s=n("c04e"),l=n("5135"),c=n("0cfb"),u=Object.getOwnPropertyDescriptor;t.f=i?u:function(e,t){if(e=o(e),t=s(t,!0),c)try{return u(e,t)}catch(n){}if(l(e,t))return a(!r.f.call(e,t),e[t])}},"07ac":function(e,t,n){var i=n("23e7"),r=n("6f53").values;i({target:"Object",stat:!0},{values:function(e){return r(e)}})},"0a06":function(e,t,n){"use strict";var i=n("c532"),r=n("30b5"),a=n("f6b4"),o=n("5270"),s=n("4a7b");function l(e){this.defaults=e,this.interceptors={request:new a,response:new a}}l.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=s(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[o,void 0],n=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)n=n.then(t.shift(),t.shift());return n},l.prototype.getUri=function(e){return e=s(this.defaults,e),r(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},i.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}})),i.forEach(["post","put","patch"],(function(e){l.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}})),e.exports=l},"0aa1":function(e,t,n){"use strict";(function(e){n("99af"),n("4160"),n("d3b7"),n("25f0"),n("159b");var i=n("c717");t["a"]={name:"Thumbnail",data:function(){return{src:""}},props:{disk:{type:String,required:!0},file:{type:Object,required:!0}},watch:{"file.timestamp":"loadImage"},mounted:function(){var e=this;if(window.IntersectionObserver){var t=new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&(e.loadImage(),n.unobserve(e.$el))}))}),{root:null,threshold:"0.5"});t.observe(this.$el)}else this.loadImage()},computed:{auth:function(){return this.$store.getters["fm/settings/authHeader"]}},methods:{loadImage:function(){var t=this;this.auth?i["a"].thumbnail(this.disk,this.file.path).then((function(n){var i=n.headers["content-type"].toLowerCase(),r=e.from(n.data,"binary").toString("base64");t.src="data:".concat(i,";base64,").concat(r)})):this.src="".concat(this.$store.getters["fm/settings/baseUrl"],"thumbnails?disk=").concat(this.disk,"&path=").concat(encodeURIComponent(this.file.path),"&v=").concat(this.file.timestamp)}}}}).call(this,n("b639").Buffer)},"0ac8":function(e,t,n){var i=n("23e7"),r=n("8eb5");i({target:"Math",stat:!0,forced:r!=Math.expm1},{expm1:r})},"0b25":function(e,t,n){var i=n("a691"),r=n("50c4");e.exports=function(e){if(void 0===e)return 0;var t=i(e),n=r(t);if(t!==n)throw RangeError("Wrong length or index");return n}},"0c47":function(e,t,n){var i=n("da84"),r=n("d44e");r(i.JSON,"JSON",!0)},"0ccb":function(e,t,n){var i=n("50c4"),r=n("1148"),a=n("1d80"),o=Math.ceil,s=function(e){return function(t,n,s){var l,c,u=String(a(t)),d=u.length,f=void 0===s?" ":String(s),p=i(n);return p<=d||""==f?u:(l=p-d,c=r.call(f,o(l/f.length)),c.length>l&&(c=c.slice(0,l)),e?u+c:c+u)}};e.exports={start:s(!1),end:s(!0)}},"0cfb":function(e,t,n){var i=n("83ab"),r=n("d039"),a=n("cc12");e.exports=!i&&!r((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},"0d03":function(e,t,n){var i=n("6eeb"),r=Date.prototype,a="Invalid Date",o="toString",s=r[o],l=r.getTime;new Date(NaN)+""!=a&&i(r,o,(function(){var e=l.call(this);return e===e?s.call(this):a}))},"0d3b":function(e,t,n){var i=n("d039"),r=n("b622"),a=n("c430"),o=r("iterator");e.exports=!i((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,n="";return e.pathname="c%20d",t.forEach((function(e,i){t["delete"]("b"),n+=i+e})),a&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[o]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},"0df6":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"107c":function(e,t,n){"use strict";var i=n("5e31"),r=n.n(i);r.a},"10d1":function(e,t,n){"use strict";var i,r=n("da84"),a=n("e2cc"),o=n("f183"),s=n("6d61"),l=n("acac"),c=n("861d"),u=n("69f3").enforce,d=n("7f9a"),f=!r.ActiveXObject&&"ActiveXObject"in r,p=Object.isExtensible,h=function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},m=e.exports=s("WeakMap",h,l);if(d&&f){i=l.getConstructor(h,"WeakMap",!0),o.REQUIRED=!0;var g=m.prototype,v=g["delete"],y=g.has,b=g.get,w=g.set;a(g,{delete:function(e){if(c(e)&&!p(e)){var t=u(this);return t.frozen||(t.frozen=new i),v.call(this,e)||t.frozen["delete"](e)}return v.call(this,e)},has:function(e){if(c(e)&&!p(e)){var t=u(this);return t.frozen||(t.frozen=new i),y.call(this,e)||t.frozen.has(e)}return y.call(this,e)},get:function(e){if(c(e)&&!p(e)){var t=u(this);return t.frozen||(t.frozen=new i),y.call(this,e)?b.call(this,e):t.frozen.get(e)}return b.call(this,e)},set:function(e,t){if(c(e)&&!p(e)){var n=u(this);n.frozen||(n.frozen=new i),y.call(this,e)?w.call(this,e,t):n.frozen.set(e,t)}else w.call(this,e,t);return this}})}},1148:function(e,t,n){"use strict";var i=n("a691"),r=n("1d80");e.exports="".repeat||function(e){var t=String(r(this)),n="",a=i(e);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(t+=t))1&a&&(n+=t);return n}},1276:function(e,t,n){"use strict";var i=n("d784"),r=n("44e7"),a=n("825a"),o=n("1d80"),s=n("4840"),l=n("8aa5"),c=n("50c4"),u=n("14c3"),d=n("9263"),f=n("d039"),p=[].push,h=Math.min,m=4294967295,g=!f((function(){return!RegExp(m,"y")}));i("split",2,(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=String(o(this)),a=void 0===n?m:n>>>0;if(0===a)return[];if(void 0===e)return[i];if(!r(e))return t.call(i,e,a);var s,l,c,u=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,g=new RegExp(e.source,f+"g");while(s=d.call(g,i)){if(l=g.lastIndex,l>h&&(u.push(i.slice(h,s.index)),s.length>1&&s.index<i.length&&p.apply(u,s.slice(1)),c=s[0].length,h=l,u.length>=a))break;g.lastIndex===s.index&&g.lastIndex++}return h===i.length?!c&&g.test("")||u.push(""):u.push(i.slice(h)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=o(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,r,n):i.call(String(r),t,n)},function(e,r){var o=n(i,e,this,r,i!==t);if(o.done)return o.value;var d=a(e),f=String(this),p=s(d,RegExp),v=d.unicode,y=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),b=new p(g?d:"^(?:"+d.source+")",y),w=void 0===r?m:r>>>0;if(0===w)return[];if(0===f.length)return null===u(b,f)?[f]:[];var x=0,k=0,_=[];while(k<f.length){b.lastIndex=g?k:0;var C,S=u(b,g?f:f.slice(k));if(null===S||(C=h(c(b.lastIndex+(g?0:k)),f.length))===x)k=l(f,k,v);else{if(_.push(f.slice(x,k)),_.length===w)return _;for(var T=1;T<=S.length-1;T++)if(_.push(S[T]),_.length===w)return _;k=x=C}}return _.push(f.slice(x)),_}]}),!g)},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"12a8":function(e,t,n){"use strict";var i=n("23e7"),r=n("83ab"),a=n("eb1d"),o=n("7b0b"),s=n("1c0b"),l=n("9bf2");r&&i({target:"Object",proto:!0,forced:a},{__defineGetter__:function(e,t){l.f(o(this),e,{get:s(t),enumerable:!0,configurable:!0})}})},"130f":function(e,t,n){var i=n("23e7"),r=n("da84"),a=n("2cf4"),o=!r.setImmediate||!r.clearImmediate;i({global:!0,bind:!0,enumerable:!0,forced:o},{setImmediate:a.set,clearImmediate:a.clear})},"131a":function(e,t,n){var i=n("23e7"),r=n("d2bb");i({target:"Object",stat:!0},{setPrototypeOf:r})},1393:function(e,t,n){"use strict";var i=n("23e7"),r=n("857a"),a=n("af03");i({target:"String",proto:!0,forced:a("big")},{big:function(){return r(this,"big","","")}})},"13af":function(e,t,n){},"13d5":function(e,t,n){"use strict";var i=n("23e7"),r=n("d58f").left,a=n("a640"),o=n("ae40"),s=a("reduce"),l=o("reduce",{1:0});i({target:"Array",proto:!0,forced:!s||!l},{reduce:function(e){return r(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"143c":function(e,t,n){var i=n("74e8");i("Int32",(function(e){return function(t,n,i){return e(this,t,n,i)}}))},"145e":function(e,t,n){"use strict";var i=n("7b0b"),r=n("23cb"),a=n("50c4"),o=Math.min;e.exports=[].copyWithin||function(e,t){var n=i(this),s=a(n.length),l=r(e,s),c=r(t,s),u=arguments.length>2?arguments[2]:void 0,d=o((void 0===u?s:r(u,s))-c,s-l),f=1;c<l&&l<c+d&&(f=-1,c+=d-1,l+=d-1);while(d-- >0)c in n?n[l]=n[c]:delete n[l],l+=f,c+=f;return n}},"14c3":function(e,t,n){var i=n("c6b6"),r=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var a=n.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==i(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"159b":function(e,t,n){var i=n("da84"),r=n("fdbc"),a=n("17c2"),o=n("9112");for(var s in r){var l=i[s],c=l&&l.prototype;if(c&&c.forEach!==a)try{o(c,"forEach",a)}catch(u){c.forEach=a}}},"16ee":function(e,t,n){},"170b":function(e,t,n){"use strict";var i=n("ebb5"),r=n("50c4"),a=n("23cb"),o=n("4840"),s=i.aTypedArray,l=i.exportTypedArrayMethod;l("subarray",(function(e,t){var n=s(this),i=n.length,l=a(e,i);return new(o(n,n.constructor))(n.buffer,n.byteOffset+l*n.BYTES_PER_ELEMENT,r((void 0===t?i:a(t,i))-l))}))},1715:function(e,t,n){n("159b"),n("ddb0"),n("130f"),n("9f96"),n("4795"),n("2b3d"),n("bf19"),n("9861");var i=n("428f");e.exports=i},"17c2":function(e,t,n){"use strict";var i=n("b727").forEach,r=n("a640"),a=n("ae40"),o=r("forEach"),s=a("forEach");e.exports=o&&s?[].forEach:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}},"182d":function(e,t,n){var i=n("f8cd");e.exports=function(e,t){var n=i(e);if(n%t)throw RangeError("Wrong offset");return n}},"183a":function(e,t,n){"use strict";(function(e){n("99af"),n("caad"),n("d3b7"),n("25f0"),n("2532");var i=n("a459"),r=n("f8b7"),a=n("b94d"),o=n("7507"),s=n("c717");t["a"]={name:"Preview",mixins:[r["a"],a["a"],o["a"]],components:{CropperModule:i["a"]},data:function(){return{showCropperModule:!1,imgSrc:""}},created:function(){this.loadImage()},computed:{auth:function(){return this.$store.getters["fm/settings/authHeader"]},selectedDisk:function(){return this.$store.getters["fm/selectedDisk"]},selectedItem:function(){return this.$store.getters["fm/selectedItems"][0]},showFooter:function(){return this.canCrop(this.selectedItem.extension)&&!this.showCropperModule},maxHeight:function(){return this.$store.state.fm.modal.modalBlockHeight?this.$store.state.fm.modal.modalBlockHeight-170:300}},methods:{canCrop:function(e){return this.$store.state.fm.settings.cropExtensions.includes(e.toLowerCase())},closeCropper:function(){this.showCropperModule=!1,this.loadImage()},loadImage:function(){var t=this;this.auth?s["a"].preview(this.selectedDisk,this.selectedItem.path).then((function(n){var i=n.headers["content-type"].toLowerCase(),r=e.from(n.data,"binary").toString("base64");t.imgSrc="data:".concat(i,";base64,").concat(r)})):this.imgSrc="".concat(this.$store.getters["fm/settings/baseUrl"],"preview?disk=").concat(this.selectedDisk,"&path=").concat(encodeURIComponent(this.selectedItem.path),"&v=").concat(this.selectedItem.timestamp)}}}}).call(this,n("b639").Buffer)},"18a5":function(e,t,n){"use strict";var i=n("23e7"),r=n("857a"),a=n("af03");i({target:"String",proto:!0,forced:a("anchor")},{anchor:function(e){return r(this,"a","name",e)}})},1913:function(e,t,n){"use strict";var i=n("23e7"),r=n("857a"),a=n("af03");i({target:"String",proto:!0,forced:a("fontsize")},{fontsize:function(e){return r(this,"font","size",e)}})},"197b":function(e,t,n){var i=n("746f");i("species")},"19aa":function(e,t){e.exports=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e}},"19aaa":function(e,t,n){"use strict";var i=n("403d"),r=n.n(i);r.a},"1b63":function(e,t,n){(function(e){e(n("56b3"),n("7b00"))})((function(e){"use strict";e.defineMode("sass",(function(t){var n=e.mimeModes["text/css"],i=n.propertyKeywords||{},r=n.colorKeywords||{},a=n.valueKeywords||{},o=n.fontProperties||{};function s(e){return new RegExp("^"+e.join("|"))}var l,c=["true","false","null","auto"],u=new RegExp("^"+c.join("|")),d=["\\(","\\)","=",">","<","==",">=","<=","\\+","-","\\!=","/","\\*","%","and","or","not",";","\\{","\\}",":"],f=s(d),p=/^::?[a-zA-Z_][\w\-]*/;function h(e){return!e.peek()||e.match(/\s+$/,!1)}function m(e,t){var n=e.peek();return")"===n?(e.next(),t.tokenizer=x,"operator"):"("===n?(e.next(),e.eatSpace(),"operator"):"'"===n||'"'===n?(t.tokenizer=v(e.next()),"string"):(t.tokenizer=v(")",!1),"string")}function g(e,t){return function(n,i){return n.sol()&&n.indentation()<=e?(i.tokenizer=x,x(n,i)):(t&&n.skipTo("*/")?(n.next(),n.next(),i.tokenizer=x):n.skipToEnd(),"comment")}}function v(e,t){function n(i,r){var a=i.next(),o=i.peek(),s=i.string.charAt(i.pos-2),l="\\"!==a&&o===e||a===e&&"\\"!==s;return l?(a!==e&&t&&i.next(),h(i)&&(r.cursorHalf=0),r.tokenizer=x,"string"):"#"===a&&"{"===o?(r.tokenizer=y(n),i.next(),"operator"):"string"}return null==t&&(t=!0),n}function y(e){return function(t,n){return"}"===t.peek()?(t.next(),n.tokenizer=e,"operator"):x(t,n)}}function b(e){if(0==e.indentCount){e.indentCount++;var n=e.scopes[0].offset,i=n+t.indentUnit;e.scopes.unshift({offset:i})}}function w(e){1!=e.scopes.length&&e.scopes.shift()}function x(e,t){var n=e.peek();if(e.match("/*"))return t.tokenizer=g(e.indentation(),!0),t.tokenizer(e,t);if(e.match("//"))return t.tokenizer=g(e.indentation(),!1),t.tokenizer(e,t);if(e.match("#{"))return t.tokenizer=y(x),"operator";if('"'===n||"'"===n)return e.next(),t.tokenizer=v(n),"string";if(t.cursorHalf){if("#"===n&&(e.next(),e.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/)))return h(e)&&(t.cursorHalf=0),"number";if(e.match(/^-?[0-9\.]+/))return h(e)&&(t.cursorHalf=0),"number";if(e.match(/^(px|em|in)\b/))return h(e)&&(t.cursorHalf=0),"unit";if(e.match(u))return h(e)&&(t.cursorHalf=0),"keyword";if(e.match(/^url/)&&"("===e.peek())return t.tokenizer=m,h(e)&&(t.cursorHalf=0),"atom";if("$"===n)return e.next(),e.eatWhile(/[\w-]/),h(e)&&(t.cursorHalf=0),"variable-2";if("!"===n)return e.next(),t.cursorHalf=0,e.match(/^[\w]+/)?"keyword":"operator";if(e.match(f))return h(e)&&(t.cursorHalf=0),"operator";if(e.eatWhile(/[\w-]/))return h(e)&&(t.cursorHalf=0),l=e.current().toLowerCase(),a.hasOwnProperty(l)?"atom":r.hasOwnProperty(l)?"keyword":i.hasOwnProperty(l)?(t.prevProp=e.current().toLowerCase(),"property"):"tag";if(h(e))return t.cursorHalf=0,null}else{if("-"===n&&e.match(/^-\w+-/))return"meta";if("."===n){if(e.next(),e.match(/^[\w-]+/))return b(t),"qualifier";if("#"===e.peek())return b(t),"tag"}if("#"===n){if(e.next(),e.match(/^[\w-]+/))return b(t),"builtin";if("#"===e.peek())return b(t),"tag"}if("$"===n)return e.next(),e.eatWhile(/[\w-]/),"variable-2";if(e.match(/^-?[0-9\.]+/))return"number";if(e.match(/^(px|em|in)\b/))return"unit";if(e.match(u))return"keyword";if(e.match(/^url/)&&"("===e.peek())return t.tokenizer=m,"atom";if("="===n&&e.match(/^=[\w-]+/))return b(t),"meta";if("+"===n&&e.match(/^\+[\w-]+/))return"variable-3";if("@"===n&&e.match(/@extend/)&&(e.match(/\s*[\w]/)||w(t)),e.match(/^@(else if|if|media|else|for|each|while|mixin|function)/))return b(t),"def";if("@"===n)return e.next(),e.eatWhile(/[\w-]/),"def";if(e.eatWhile(/[\w-]/)){if(e.match(/ *: *[\w-\+\$#!\("']/,!1)){l=e.current().toLowerCase();var s=t.prevProp+"-"+l;return i.hasOwnProperty(s)?"property":i.hasOwnProperty(l)?(t.prevProp=l,"property"):o.hasOwnProperty(l)?"property":"tag"}return e.match(/ *:/,!1)?(b(t),t.cursorHalf=1,t.prevProp=e.current().toLowerCase(),"property"):(e.match(/ *,/,!1)||b(t),"tag")}if(":"===n)return e.match(p)?"variable-3":(e.next(),t.cursorHalf=1,"operator")}return e.match(f)?"operator":(e.next(),null)}function k(e,n){e.sol()&&(n.indentCount=0);var i=n.tokenizer(e,n),r=e.current();if("@return"!==r&&"}"!==r||w(n),null!==i){for(var a=e.pos-r.length,o=a+t.indentUnit*n.indentCount,s=[],l=0;l<n.scopes.length;l++){var c=n.scopes[l];c.offset<=o&&s.push(c)}n.scopes=s}return i}return{startState:function(){return{tokenizer:x,scopes:[{offset:0,type:"sass"}],indentCount:0,cursorHalf:0,definedVars:[],definedMixins:[]}},token:function(e,t){var n=k(e,t);return t.lastToken={style:n,content:e.current()},n},indent:function(e){return e.scopes[0].offset}}}),"css"),e.defineMIME("text/x-sass","sass")}))},"1be4":function(e,t,n){var i=n("d066");e.exports=i("document","documentElement")},"1bf2":function(e,t,n){var i=n("23e7"),r=n("56ef");i({target:"Reflect",stat:!0},{ownKeys:r})},"1c0b":function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"1c7e":function(e,t,n){var i=n("b622"),r=i("iterator"),a=!1;try{var o=0,s={next:function(){return{done:!!o++}},return:function(){a=!0}};s[r]=function(){return this},Array.from(s,(function(){throw 2}))}catch(l){}e.exports=function(e,t){if(!t&&!a)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},e(i)}catch(l){}return n}},"1cdc":function(e,t,n){var i=n("342f");e.exports=/(iphone|ipod|ipad).*applewebkit/i.test(i)},"1d1c":function(e,t,n){var i=n("23e7"),r=n("83ab"),a=n("37e8");i({target:"Object",stat:!0,forced:!r,sham:!r},{defineProperties:a})},"1d2b":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}}},"1d80":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},"1dde":function(e,t,n){var i=n("d039"),r=n("b622"),a=n("2d00"),o=r("species");e.exports=function(e){return a>=51||!i((function(){var t=[],n=t.constructor={};return n[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1e25":function(e,t,n){"use strict";var i=n("23e7"),r=n("58a8").end,a=n("c8d2"),o=a("trimEnd"),s=o?function(){return r(this)}:"".trimEnd;i({target:"String",proto:!0,forced:o},{trimEnd:s,trimRight:s})},"1ec1":function(e,t){var n=Math.log;e.exports=Math.log1p||function(e){return(e=+e)>-1e-8&&e<1e-8?e-e*e/2:n(1+e)}},"1fb5":function(e,t,n){"use strict";t.byteLength=u,t.toByteArray=f,t.fromByteArray=m;for(var i=[],r=[],a="undefined"!==typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,l=o.length;s<l;++s)i[s]=o[s],r[o.charCodeAt(s)]=s;function c(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");-1===n&&(n=t);var i=n===t?0:4-n%4;return[n,i]}function u(e){var t=c(e),n=t[0],i=t[1];return 3*(n+i)/4-i}function d(e,t,n){return 3*(t+n)/4-n}function f(e){var t,n,i=c(e),o=i[0],s=i[1],l=new a(d(e,o,s)),u=0,f=s>0?o-4:o;for(n=0;n<f;n+=4)t=r[e.charCodeAt(n)]<<18|r[e.charCodeAt(n+1)]<<12|r[e.charCodeAt(n+2)]<<6|r[e.charCodeAt(n+3)],l[u++]=t>>16&255,l[u++]=t>>8&255,l[u++]=255&t;return 2===s&&(t=r[e.charCodeAt(n)]<<2|r[e.charCodeAt(n+1)]>>4,l[u++]=255&t),1===s&&(t=r[e.charCodeAt(n)]<<10|r[e.charCodeAt(n+1)]<<4|r[e.charCodeAt(n+2)]>>2,l[u++]=t>>8&255,l[u++]=255&t),l}function p(e){return i[e>>18&63]+i[e>>12&63]+i[e>>6&63]+i[63&e]}function h(e,t,n){for(var i,r=[],a=t;a<n;a+=3)i=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),r.push(p(i));return r.join("")}function m(e){for(var t,n=e.length,r=n%3,a=[],o=16383,s=0,l=n-r;s<l;s+=o)a.push(h(e,s,s+o>l?l:s+o));return 1===r?(t=e[n-1],a.push(i[t>>2]+i[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],a.push(i[t>>10]+i[t>>4&63]+i[t<<2&63]+"=")),a.join("")}r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63},"1fe2":function(e,t,n){"use strict";var i=n("6d61"),r=n("acac");i("WeakSet",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r)},"20bf":function(e,t,n){"use strict";var i=n("8aa7"),r=n("ebb5").exportTypedArrayStaticMethod,a=n("a078");r("from",a,i)},"219c":function(e,t,n){"use strict";var i=n("ebb5"),r=i.aTypedArray,a=i.exportTypedArrayMethod,o=[].sort;a("sort",(function(e){return o.call(r(this),e)}))},2266:function(e,t,n){var i=n("825a"),r=n("e95a"),a=n("50c4"),o=n("0366"),s=n("35a1"),l=n("9bdd"),c=function(e,t){this.stopped=e,this.result=t},u=e.exports=function(e,t,n,u,d){var f,p,h,m,g,v,y,b=o(t,n,u?2:1);if(d)f=e;else{if(p=s(e),"function"!=typeof p)throw TypeError("Target is not iterable");if(r(p)){for(h=0,m=a(e.length);m>h;h++)if(g=u?b(i(y=e[h])[0],y[1]):b(e[h]),g&&g instanceof c)return g;return new c(!1)}f=p.call(e)}v=f.next;while(!(y=v.call(f)).done)if(g=l(f,b,y.value,u),"object"==typeof g&&g&&g instanceof c)return g;return new c(!1)};u.stop=function(e){return new c(!0,e)}},2315:function(e,t,n){"use strict";var i=n("23e7"),r=n("857a"),a=n("af03");i({target:"String",proto:!0,forced:a("strike")},{strike:function(){return r(this,"strike","","")}})},2351:function(e,t,n){var i=n("746f");i("split")},"23cb":function(e,t,n){var i=n("a691"),r=Math.max,a=Math.min;e.exports=function(e,t){var n=i(e);return n<0?r(n+t,0):a(n,t)}},"23dc":function(e,t,n){var i=n("d44e");i(Math,"Math",!0)},"23e7":function(e,t,n){var i=n("da84"),r=n("06cf").f,a=n("9112"),o=n("6eeb"),s=n("ce4e"),l=n("e893"),c=n("94ca");e.exports=function(e,t){var n,u,d,f,p,h,m=e.target,g=e.global,v=e.stat;if(u=g?i:v?i[m]||s(m,{}):(i[m]||{}).prototype,u)for(d in t){if(p=t[d],e.noTargetGet?(h=r(u,d),f=h&&h.value):f=u[d],n=c(g?d:m+(v?".":"#")+d,e.forced),!n&&void 0!==f){if(typeof p===typeof f)continue;l(p,f)}(e.sham||f&&f.sham)&&a(p,"sham",!0),o(u,d,p,e)}}},"241c":function(e,t,n){var i=n("ca84"),r=n("7839"),a=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,a)}},2444:function(e,t,n){"use strict";(function(t){var i=n("c532"),r=n("c8af"),a={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function s(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n("b50d")),e}var l={adapter:s(),transformRequest:[function(e,t){return r(t,"Accept"),r(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.forEach(["delete","get","head"],(function(e){l.headers[e]={}})),i.forEach(["post","put","patch"],(function(e){l.headers[e]=i.merge(a)})),e.exports=l}).call(this,n("4362"))},2532:function(e,t,n){"use strict";var i=n("23e7"),r=n("5a34"),a=n("1d80"),o=n("ab13");i({target:"String",proto:!0,forced:!o("includes")},{includes:function(e){return!!~String(a(this)).indexOf(r(e),arguments.length>1?arguments[1]:void 0)}})},"25a1":function(e,t,n){"use strict";var i=n("ebb5"),r=n("d58f").right,a=i.aTypedArray,o=i.exportTypedArrayMethod;o("reduceRight",(function(e){return r(a(this),e,arguments.length,arguments.length>1?arguments[1]:void 0)}))},"25eb":function(e,t,n){var i=n("23e7"),r=n("c20d");i({target:"Number",stat:!0,forced:Number.parseInt!=r},{parseInt:r})},"25f0":function(e,t,n){"use strict";var i=n("6eeb"),r=n("825a"),a=n("d039"),o=n("ad6d"),s="toString",l=RegExp.prototype,c=l[s],u=a((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),d=c.name!=s;(u||d)&&i(RegExp.prototype,s,(function(){var e=r(this),t=String(e.source),n=e.flags,i=String(void 0===n&&e instanceof RegExp&&!("flags"in l)?o.call(e):n);return"/"+t+"/"+i}),{unsafe:!0})},2626:function(e,t,n){"use strict";var i=n("d066"),r=n("9bf2"),a=n("b622"),o=n("83ab"),s=a("species");e.exports=function(e){var t=i(e),n=r.f;o&&t&&!t[s]&&n(t,s,{configurable:!0,get:function(){return this}})}},"26e9":function(e,t,n){"use strict";var i=n("23e7"),r=n("e8b5"),a=[].reverse,o=[1,2];i({target:"Array",proto:!0,forced:String(o)===String(o.reverse())},{reverse:function(){return r(this)&&(this.length=this.length),a.call(this)}})},2729:function(e,t,n){"use strict";var i=n("16ee"),r=n.n(i);r.a},"277d":function(e,t,n){var i=n("23e7"),r=n("e8b5");i({target:"Array",stat:!0},{isArray:r})},2877:function(e,t,n){"use strict";function i(e,t,n,i,r,a,o,s){var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}n.d(t,"a",(function(){return i}))},2928:function(e,t,n){"use strict";var i=n("325d"),r=n.n(i);r.a},2954:function(e,t,n){"use strict";var i=n("ebb5"),r=n("4840"),a=n("d039"),o=i.aTypedArray,s=i.aTypedArrayConstructor,l=i.exportTypedArrayMethod,c=[].slice,u=a((function(){new Int8Array(1).slice()}));l("slice",(function(e,t){var n=c.call(o(this),e,t),i=r(this,this.constructor),a=0,l=n.length,u=new(s(i))(l);while(l>a)u[a]=n[a++];return u}),u)},"2a1b":function(e,t,n){var i=n("746f");i("match")},"2a9b":function(e,t,n){"use strict";var i=n("0019"),r=n.n(i);r.a},"2af1":function(e,t,n){var i=n("23e7"),r=n("f748");i({target:"Math",stat:!0},{sign:r})},"2b0e":function(e,t,n){"use strict";(function(e){
/*!
 * Vue.js v2.6.12
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(e){return void 0===e||null===e}function r(e){return void 0!==e&&null!==e}function a(e){return!0===e}function o(e){return!1===e}function s(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function l(e){return null!==e&&"object"===typeof e}var c=Object.prototype.toString;function u(e){return"[object Object]"===c.call(e)}function d(e){return"[object RegExp]"===c.call(e)}function f(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function p(e){return r(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function h(e){return null==e?"":Array.isArray(e)||u(e)&&e.toString===c?JSON.stringify(e,null,2):String(e)}function m(e){var t=parseFloat(e);return isNaN(t)?e:t}function g(e,t){for(var n=Object.create(null),i=e.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}g("slot,component",!0);var v=g("key,ref,slot,slot-scope,is");function y(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function w(e,t){return b.call(e,t)}function x(e){var t=Object.create(null);return function(n){var i=t[n];return i||(t[n]=e(n))}}var k=/-(\w)/g,_=x((function(e){return e.replace(k,(function(e,t){return t?t.toUpperCase():""}))})),C=x((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),S=/\B([A-Z])/g,T=x((function(e){return e.replace(S,"-$1").toLowerCase()}));function E(e,t){function n(n){var i=arguments.length;return i?i>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function A(e,t){return e.bind(t)}var M=Function.prototype.bind?A:E;function N(e,t){t=t||0;var n=e.length-t,i=new Array(n);while(n--)i[n]=e[n+t];return i}function O(e,t){for(var n in t)e[n]=t[n];return e}function D(e){for(var t={},n=0;n<e.length;n++)e[n]&&O(t,e[n]);return t}function L(e,t,n){}var z=function(e,t,n){return!1},P=function(e){return e};function F(e,t){if(e===t)return!0;var n=l(e),i=l(t);if(!n||!i)return!n&&!i&&String(e)===String(t);try{var r=Array.isArray(e),a=Array.isArray(t);if(r&&a)return e.length===t.length&&e.every((function(e,n){return F(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(r||a)return!1;var o=Object.keys(e),s=Object.keys(t);return o.length===s.length&&o.every((function(n){return F(e[n],t[n])}))}catch(c){return!1}}function I(e,t){for(var n=0;n<e.length;n++)if(F(e[n],t))return n;return-1}function j(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var R="data-server-rendered",$=["component","directive","filter"],q=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:z,isReservedAttr:z,isUnknownElement:z,getTagNamespace:L,parsePlatformTagName:P,mustUseProp:z,async:!0,_lifecycleHooks:q},U=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function W(e,t,n,i){Object.defineProperty(e,t,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var V=new RegExp("[^"+U.source+".$_\\d]");function Y(e){if(!V.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var G,K="__proto__"in{},X="undefined"!==typeof window,Z="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=Z&&WXEnvironment.platform.toLowerCase(),J=X&&window.navigator.userAgent.toLowerCase(),ee=J&&/msie|trident/.test(J),te=J&&J.indexOf("msie 9.0")>0,ne=J&&J.indexOf("edge/")>0,ie=(J&&J.indexOf("android"),J&&/iphone|ipad|ipod|ios/.test(J)||"ios"===Q),re=(J&&/chrome\/\d+/.test(J),J&&/phantomjs/.test(J),J&&J.match(/firefox\/(\d+)/)),ae={}.watch,oe=!1;if(X)try{var se={};Object.defineProperty(se,"passive",{get:function(){oe=!0}}),window.addEventListener("test-passive",null,se)}catch(_o){}var le=function(){return void 0===G&&(G=!X&&!Z&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),G},ce=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ue(e){return"function"===typeof e&&/native code/.test(e.toString())}var de,fe="undefined"!==typeof Symbol&&ue(Symbol)&&"undefined"!==typeof Reflect&&ue(Reflect.ownKeys);de="undefined"!==typeof Set&&ue(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var pe=L,he=0,me=function(){this.id=he++,this.subs=[]};me.prototype.addSub=function(e){this.subs.push(e)},me.prototype.removeSub=function(e){y(this.subs,e)},me.prototype.depend=function(){me.target&&me.target.addDep(this)},me.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},me.target=null;var ge=[];function ve(e){ge.push(e),me.target=e}function ye(){ge.pop(),me.target=ge[ge.length-1]}var be=function(e,t,n,i,r,a,o,s){this.tag=e,this.data=t,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=a,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},we={child:{configurable:!0}};we.child.get=function(){return this.componentInstance},Object.defineProperties(be.prototype,we);var xe=function(e){void 0===e&&(e="");var t=new be;return t.text=e,t.isComment=!0,t};function ke(e){return new be(void 0,void 0,void 0,String(e))}function _e(e){var t=new be(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var Ce=Array.prototype,Se=Object.create(Ce),Te=["push","pop","shift","unshift","splice","sort","reverse"];Te.forEach((function(e){var t=Ce[e];W(Se,e,(function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,a=t.apply(this,n),o=this.__ob__;switch(e){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),a}))}));var Ee=Object.getOwnPropertyNames(Se),Ae=!0;function Me(e){Ae=e}var Ne=function(e){this.value=e,this.dep=new me,this.vmCount=0,W(e,"__ob__",this),Array.isArray(e)?(K?Oe(e,Se):De(e,Se,Ee),this.observeArray(e)):this.walk(e)};function Oe(e,t){e.__proto__=t}function De(e,t,n){for(var i=0,r=n.length;i<r;i++){var a=n[i];W(e,a,t[a])}}function Le(e,t){var n;if(l(e)&&!(e instanceof be))return w(e,"__ob__")&&e.__ob__ instanceof Ne?n=e.__ob__:Ae&&!le()&&(Array.isArray(e)||u(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Ne(e)),t&&n&&n.vmCount++,n}function ze(e,t,n,i,r){var a=new me,o=Object.getOwnPropertyDescriptor(e,t);if(!o||!1!==o.configurable){var s=o&&o.get,l=o&&o.set;s&&!l||2!==arguments.length||(n=e[t]);var c=!r&&Le(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):n;return me.target&&(a.depend(),c&&(c.dep.depend(),Array.isArray(t)&&Ie(t))),t},set:function(t){var i=s?s.call(e):n;t===i||t!==t&&i!==i||s&&!l||(l?l.call(e,t):n=t,c=!r&&Le(t),a.notify())}})}}function Pe(e,t,n){if(Array.isArray(e)&&f(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var i=e.__ob__;return e._isVue||i&&i.vmCount?n:i?(ze(i.value,t,n),i.dep.notify(),n):(e[t]=n,n)}function Fe(e,t){if(Array.isArray(e)&&f(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||w(e,t)&&(delete e[t],n&&n.dep.notify())}}function Ie(e){for(var t=void 0,n=0,i=e.length;n<i;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Ie(t)}Ne.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)ze(e,t[n])},Ne.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Le(e[t])};var je=B.optionMergeStrategies;function Re(e,t){if(!t)return e;for(var n,i,r,a=fe?Reflect.ownKeys(t):Object.keys(t),o=0;o<a.length;o++)n=a[o],"__ob__"!==n&&(i=e[n],r=t[n],w(e,n)?i!==r&&u(i)&&u(r)&&Re(i,r):Pe(e,n,r));return e}function $e(e,t,n){return n?function(){var i="function"===typeof t?t.call(n,n):t,r="function"===typeof e?e.call(n,n):e;return i?Re(i,r):r}:t?e?function(){return Re("function"===typeof t?t.call(this,this):t,"function"===typeof e?e.call(this,this):e)}:t:e}function qe(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?Be(n):n}function Be(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function Ue(e,t,n,i){var r=Object.create(e||null);return t?O(r,t):r}je.data=function(e,t,n){return n?$e(e,t,n):t&&"function"!==typeof t?e:$e(e,t)},q.forEach((function(e){je[e]=qe})),$.forEach((function(e){je[e+"s"]=Ue})),je.watch=function(e,t,n,i){if(e===ae&&(e=void 0),t===ae&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var r={};for(var a in O(r,e),t){var o=r[a],s=t[a];o&&!Array.isArray(o)&&(o=[o]),r[a]=o?o.concat(s):Array.isArray(s)?s:[s]}return r},je.props=je.methods=je.inject=je.computed=function(e,t,n,i){if(!e)return t;var r=Object.create(null);return O(r,e),t&&O(r,t),r},je.provide=$e;var He=function(e,t){return void 0===t?e:t};function We(e,t){var n=e.props;if(n){var i,r,a,o={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(a=_(r),o[a]={type:null})}else if(u(n))for(var s in n)r=n[s],a=_(s),o[a]=u(r)?r:{type:r};else 0;e.props=o}}function Ve(e,t){var n=e.inject;if(n){var i=e.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(u(n))for(var a in n){var o=n[a];i[a]=u(o)?O({from:a},o):{from:o}}else 0}}function Ye(e){var t=e.directives;if(t)for(var n in t){var i=t[n];"function"===typeof i&&(t[n]={bind:i,update:i})}}function Ge(e,t,n){if("function"===typeof t&&(t=t.options),We(t,n),Ve(t,n),Ye(t),!t._base&&(t.extends&&(e=Ge(e,t.extends,n)),t.mixins))for(var i=0,r=t.mixins.length;i<r;i++)e=Ge(e,t.mixins[i],n);var a,o={};for(a in e)s(a);for(a in t)w(e,a)||s(a);function s(i){var r=je[i]||He;o[i]=r(e[i],t[i],n,i)}return o}function Ke(e,t,n,i){if("string"===typeof n){var r=e[t];if(w(r,n))return r[n];var a=_(n);if(w(r,a))return r[a];var o=C(a);if(w(r,o))return r[o];var s=r[n]||r[a]||r[o];return s}}function Xe(e,t,n,i){var r=t[e],a=!w(n,e),o=n[e],s=et(Boolean,r.type);if(s>-1)if(a&&!w(r,"default"))o=!1;else if(""===o||o===T(e)){var l=et(String,r.type);(l<0||s<l)&&(o=!0)}if(void 0===o){o=Ze(i,r,e);var c=Ae;Me(!0),Le(o),Me(c)}return o}function Ze(e,t,n){if(w(t,"default")){var i=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"===typeof i&&"Function"!==Qe(t.type)?i.call(e):i}}function Qe(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function Je(e,t){return Qe(e)===Qe(t)}function et(e,t){if(!Array.isArray(t))return Je(t,e)?0:-1;for(var n=0,i=t.length;n<i;n++)if(Je(t[n],e))return n;return-1}function tt(e,t,n){ve();try{if(t){var i=t;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var a=0;a<r.length;a++)try{var o=!1===r[a].call(i,e,t,n);if(o)return}catch(_o){it(_o,i,"errorCaptured hook")}}}it(e,t,n)}finally{ye()}}function nt(e,t,n,i,r){var a;try{a=n?e.apply(t,n):e.call(t),a&&!a._isVue&&p(a)&&!a._handled&&(a.catch((function(e){return tt(e,i,r+" (Promise/async)")})),a._handled=!0)}catch(_o){tt(_o,i,r)}return a}function it(e,t,n){if(B.errorHandler)try{return B.errorHandler.call(null,e,t,n)}catch(_o){_o!==e&&rt(_o,null,"config.errorHandler")}rt(e,t,n)}function rt(e,t,n){if(!X&&!Z||"undefined"===typeof console)throw e;console.error(e)}var at,ot=!1,st=[],lt=!1;function ct(){lt=!1;var e=st.slice(0);st.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&ue(Promise)){var ut=Promise.resolve();at=function(){ut.then(ct),ie&&setTimeout(L)},ot=!0}else if(ee||"undefined"===typeof MutationObserver||!ue(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())at="undefined"!==typeof setImmediate&&ue(setImmediate)?function(){setImmediate(ct)}:function(){setTimeout(ct,0)};else{var dt=1,ft=new MutationObserver(ct),pt=document.createTextNode(String(dt));ft.observe(pt,{characterData:!0}),at=function(){dt=(dt+1)%2,pt.data=String(dt)},ot=!0}function ht(e,t){var n;if(st.push((function(){if(e)try{e.call(t)}catch(_o){tt(_o,t,"nextTick")}else n&&n(t)})),lt||(lt=!0,at()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}var mt=new de;function gt(e){vt(e,mt),mt.clear()}function vt(e,t){var n,i,r=Array.isArray(e);if(!(!r&&!l(e)||Object.isFrozen(e)||e instanceof be)){if(e.__ob__){var a=e.__ob__.dep.id;if(t.has(a))return;t.add(a)}if(r){n=e.length;while(n--)vt(e[n],t)}else{i=Object.keys(e),n=i.length;while(n--)vt(e[i[n]],t)}}}var yt=x((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var i="!"===e.charAt(0);return e=i?e.slice(1):e,{name:e,once:n,capture:i,passive:t}}));function bt(e,t){function n(){var e=arguments,i=n.fns;if(!Array.isArray(i))return nt(i,null,arguments,t,"v-on handler");for(var r=i.slice(),a=0;a<r.length;a++)nt(r[a],null,e,t,"v-on handler")}return n.fns=e,n}function wt(e,t,n,r,o,s){var l,c,u,d;for(l in e)c=e[l],u=t[l],d=yt(l),i(c)||(i(u)?(i(c.fns)&&(c=e[l]=bt(c,s)),a(d.once)&&(c=e[l]=o(d.name,c,d.capture)),n(d.name,c,d.capture,d.passive,d.params)):c!==u&&(u.fns=c,e[l]=u));for(l in t)i(e[l])&&(d=yt(l),r(d.name,t[l],d.capture))}function xt(e,t,n){var o;e instanceof be&&(e=e.data.hook||(e.data.hook={}));var s=e[t];function l(){n.apply(this,arguments),y(o.fns,l)}i(s)?o=bt([l]):r(s.fns)&&a(s.merged)?(o=s,o.fns.push(l)):o=bt([s,l]),o.merged=!0,e[t]=o}function kt(e,t,n){var a=t.options.props;if(!i(a)){var o={},s=e.attrs,l=e.props;if(r(s)||r(l))for(var c in a){var u=T(c);_t(o,l,c,u,!0)||_t(o,s,c,u,!1)}return o}}function _t(e,t,n,i,a){if(r(t)){if(w(t,n))return e[n]=t[n],a||delete t[n],!0;if(w(t,i))return e[n]=t[i],a||delete t[i],!0}return!1}function Ct(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function St(e){return s(e)?[ke(e)]:Array.isArray(e)?Et(e):void 0}function Tt(e){return r(e)&&r(e.text)&&o(e.isComment)}function Et(e,t){var n,o,l,c,u=[];for(n=0;n<e.length;n++)o=e[n],i(o)||"boolean"===typeof o||(l=u.length-1,c=u[l],Array.isArray(o)?o.length>0&&(o=Et(o,(t||"")+"_"+n),Tt(o[0])&&Tt(c)&&(u[l]=ke(c.text+o[0].text),o.shift()),u.push.apply(u,o)):s(o)?Tt(c)?u[l]=ke(c.text+o):""!==o&&u.push(ke(o)):Tt(o)&&Tt(c)?u[l]=ke(c.text+o.text):(a(e._isVList)&&r(o.tag)&&i(o.key)&&r(t)&&(o.key="__vlist"+t+"_"+n+"__"),u.push(o)));return u}function At(e){var t=e.$options.provide;t&&(e._provided="function"===typeof t?t.call(e):t)}function Mt(e){var t=Nt(e.$options.inject,e);t&&(Me(!1),Object.keys(t).forEach((function(n){ze(e,n,t[n])})),Me(!0))}function Nt(e,t){if(e){for(var n=Object.create(null),i=fe?Reflect.ownKeys(e):Object.keys(e),r=0;r<i.length;r++){var a=i[r];if("__ob__"!==a){var o=e[a].from,s=t;while(s){if(s._provided&&w(s._provided,o)){n[a]=s._provided[o];break}s=s.$parent}if(!s)if("default"in e[a]){var l=e[a].default;n[a]="function"===typeof l?l.call(t):l}else 0}}return n}}function Ot(e,t){if(!e||!e.length)return{};for(var n={},i=0,r=e.length;i<r;i++){var a=e[i],o=a.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,a.context!==t&&a.fnContext!==t||!o||null==o.slot)(n.default||(n.default=[])).push(a);else{var s=o.slot,l=n[s]||(n[s]=[]);"template"===a.tag?l.push.apply(l,a.children||[]):l.push(a)}}for(var c in n)n[c].every(Dt)&&delete n[c];return n}function Dt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Lt(e,t,i){var r,a=Object.keys(t).length>0,o=e?!!e.$stable:!a,s=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(o&&i&&i!==n&&s===i.$key&&!a&&!i.$hasNormal)return i;for(var l in r={},e)e[l]&&"$"!==l[0]&&(r[l]=zt(t,l,e[l]))}else r={};for(var c in t)c in r||(r[c]=Pt(t,c));return e&&Object.isExtensible(e)&&(e._normalized=r),W(r,"$stable",o),W(r,"$key",s),W(r,"$hasNormal",a),r}function zt(e,t,n){var i=function(){var e=arguments.length?n.apply(null,arguments):n({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:St(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:i,enumerable:!0,configurable:!0}),i}function Pt(e,t){return function(){return e[t]}}function Ft(e,t){var n,i,a,o,s;if(Array.isArray(e)||"string"===typeof e)for(n=new Array(e.length),i=0,a=e.length;i<a;i++)n[i]=t(e[i],i);else if("number"===typeof e)for(n=new Array(e),i=0;i<e;i++)n[i]=t(i+1,i);else if(l(e))if(fe&&e[Symbol.iterator]){n=[];var c=e[Symbol.iterator](),u=c.next();while(!u.done)n.push(t(u.value,n.length)),u=c.next()}else for(o=Object.keys(e),n=new Array(o.length),i=0,a=o.length;i<a;i++)s=o[i],n[i]=t(e[s],s,i);return r(n)||(n=[]),n._isVList=!0,n}function It(e,t,n,i){var r,a=this.$scopedSlots[e];a?(n=n||{},i&&(n=O(O({},i),n)),r=a(n)||t):r=this.$slots[e]||t;var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function jt(e){return Ke(this.$options,"filters",e,!0)||P}function Rt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function $t(e,t,n,i,r){var a=B.keyCodes[t]||n;return r&&i&&!B.keyCodes[t]?Rt(r,i):a?Rt(a,e):i?T(i)!==t:void 0}function qt(e,t,n,i,r){if(n)if(l(n)){var a;Array.isArray(n)&&(n=D(n));var o=function(o){if("class"===o||"style"===o||v(o))a=e;else{var s=e.attrs&&e.attrs.type;a=i||B.mustUseProp(t,s,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var l=_(o),c=T(o);if(!(l in a)&&!(c in a)&&(a[o]=n[o],r)){var u=e.on||(e.on={});u["update:"+o]=function(e){n[o]=e}}};for(var s in n)o(s)}else;return e}function Bt(e,t){var n=this._staticTrees||(this._staticTrees=[]),i=n[e];return i&&!t||(i=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Ht(i,"__static__"+e,!1)),i}function Ut(e,t,n){return Ht(e,"__once__"+t+(n?"_"+n:""),!0),e}function Ht(e,t,n){if(Array.isArray(e))for(var i=0;i<e.length;i++)e[i]&&"string"!==typeof e[i]&&Wt(e[i],t+"_"+i,n);else Wt(e,t,n)}function Wt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Vt(e,t){if(t)if(u(t)){var n=e.on=e.on?O({},e.on):{};for(var i in t){var r=n[i],a=t[i];n[i]=r?[].concat(r,a):a}}else;return e}function Yt(e,t,n,i){t=t||{$stable:!n};for(var r=0;r<e.length;r++){var a=e[r];Array.isArray(a)?Yt(a,t,n):a&&(a.proxy&&(a.fn.proxy=!0),t[a.key]=a.fn)}return i&&(t.$key=i),t}function Gt(e,t){for(var n=0;n<t.length;n+=2){var i=t[n];"string"===typeof i&&i&&(e[t[n]]=t[n+1])}return e}function Kt(e,t){return"string"===typeof e?t+e:e}function Xt(e){e._o=Ut,e._n=m,e._s=h,e._l=Ft,e._t=It,e._q=F,e._i=I,e._m=Bt,e._f=jt,e._k=$t,e._b=qt,e._v=ke,e._e=xe,e._u=Yt,e._g=Vt,e._d=Gt,e._p=Kt}function Zt(e,t,i,r,o){var s,l=this,c=o.options;w(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var u=a(c._compiled),d=!u;this.data=e,this.props=t,this.children=i,this.parent=r,this.listeners=e.on||n,this.injections=Nt(c.inject,r),this.slots=function(){return l.$slots||Lt(e.scopedSlots,l.$slots=Ot(i,r)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Lt(e.scopedSlots,this.slots())}}),u&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Lt(e.scopedSlots,this.$slots)),c._scopeId?this._c=function(e,t,n,i){var a=dn(s,e,t,n,i,d);return a&&!Array.isArray(a)&&(a.fnScopeId=c._scopeId,a.fnContext=r),a}:this._c=function(e,t,n,i){return dn(s,e,t,n,i,d)}}function Qt(e,t,i,a,o){var s=e.options,l={},c=s.props;if(r(c))for(var u in c)l[u]=Xe(u,c,t||n);else r(i.attrs)&&en(l,i.attrs),r(i.props)&&en(l,i.props);var d=new Zt(i,l,o,a,e),f=s.render.call(null,d._c,d);if(f instanceof be)return Jt(f,i,d.parent,s,d);if(Array.isArray(f)){for(var p=St(f)||[],h=new Array(p.length),m=0;m<p.length;m++)h[m]=Jt(p[m],i,d.parent,s,d);return h}}function Jt(e,t,n,i,r){var a=_e(e);return a.fnContext=n,a.fnOptions=i,t.slot&&((a.data||(a.data={})).slot=t.slot),a}function en(e,t){for(var n in t)e[_(n)]=t[n]}Xt(Zt.prototype);var tn={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;tn.prepatch(n,n)}else{var i=e.componentInstance=an(e,Nn);i.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,i=t.componentInstance=e.componentInstance;Pn(i,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Rn(n,"mounted")),e.data.keepAlive&&(t._isMounted?Qn(n):In(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?jn(t,!0):t.$destroy())}},nn=Object.keys(tn);function rn(e,t,n,o,s){if(!i(e)){var c=n.$options._base;if(l(e)&&(e=c.extend(e)),"function"===typeof e){var u;if(i(e.cid)&&(u=e,e=xn(u,c),void 0===e))return wn(u,t,n,o,s);t=t||{},xi(e),r(t.model)&&ln(e.options,t);var d=kt(t,e,s);if(a(e.options.functional))return Qt(e,d,t,n,o);var f=t.on;if(t.on=t.nativeOn,a(e.options.abstract)){var p=t.slot;t={},p&&(t.slot=p)}on(t);var h=e.options.name||s,m=new be("vue-component-"+e.cid+(h?"-"+h:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:d,listeners:f,tag:s,children:o},u);return m}}}function an(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},i=e.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new e.componentOptions.Ctor(n)}function on(e){for(var t=e.hook||(e.hook={}),n=0;n<nn.length;n++){var i=nn[n],r=t[i],a=tn[i];r===a||r&&r._merged||(t[i]=r?sn(a,r):a)}}function sn(e,t){var n=function(n,i){e(n,i),t(n,i)};return n._merged=!0,n}function ln(e,t){var n=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var a=t.on||(t.on={}),o=a[i],s=t.model.callback;r(o)?(Array.isArray(o)?-1===o.indexOf(s):o!==s)&&(a[i]=[s].concat(o)):a[i]=s}var cn=1,un=2;function dn(e,t,n,i,r,o){return(Array.isArray(n)||s(n))&&(r=i,i=n,n=void 0),a(o)&&(r=un),fn(e,t,n,i,r)}function fn(e,t,n,i,a){if(r(n)&&r(n.__ob__))return xe();if(r(n)&&r(n.is)&&(t=n.is),!t)return xe();var o,s,l;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),a===un?i=St(i):a===cn&&(i=Ct(i)),"string"===typeof t)?(s=e.$vnode&&e.$vnode.ns||B.getTagNamespace(t),o=B.isReservedTag(t)?new be(B.parsePlatformTagName(t),n,i,void 0,void 0,e):n&&n.pre||!r(l=Ke(e.$options,"components",t))?new be(t,n,i,void 0,void 0,e):rn(l,n,e,i,t)):o=rn(t,n,e,i);return Array.isArray(o)?o:r(o)?(r(s)&&pn(o,s),r(n)&&hn(n),o):xe()}function pn(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),r(e.children))for(var o=0,s=e.children.length;o<s;o++){var l=e.children[o];r(l.tag)&&(i(l.ns)||a(n)&&"svg"!==l.tag)&&pn(l,t,n)}}function hn(e){l(e.style)&&gt(e.style),l(e.class)&&gt(e.class)}function mn(e){e._vnode=null,e._staticTrees=null;var t=e.$options,i=e.$vnode=t._parentVnode,r=i&&i.context;e.$slots=Ot(t._renderChildren,r),e.$scopedSlots=n,e._c=function(t,n,i,r){return dn(e,t,n,i,r,!1)},e.$createElement=function(t,n,i,r){return dn(e,t,n,i,r,!0)};var a=i&&i.data;ze(e,"$attrs",a&&a.attrs||n,null,!0),ze(e,"$listeners",t._parentListeners||n,null,!0)}var gn,vn=null;function yn(e){Xt(e.prototype),e.prototype.$nextTick=function(e){return ht(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,i=n.render,r=n._parentVnode;r&&(t.$scopedSlots=Lt(r.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=r;try{vn=t,e=i.call(t._renderProxy,t.$createElement)}catch(_o){tt(_o,t,"render"),e=t._vnode}finally{vn=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof be||(e=xe()),e.parent=r,e}}function bn(e,t){return(e.__esModule||fe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),l(e)?t.extend(e):e}function wn(e,t,n,i,r){var a=xe();return a.asyncFactory=e,a.asyncMeta={data:t,context:n,children:i,tag:r},a}function xn(e,t){if(a(e.error)&&r(e.errorComp))return e.errorComp;if(r(e.resolved))return e.resolved;var n=vn;if(n&&r(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),a(e.loading)&&r(e.loadingComp))return e.loadingComp;if(n&&!r(e.owners)){var o=e.owners=[n],s=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return y(o,n)}));var d=function(e){for(var t=0,n=o.length;t<n;t++)o[t].$forceUpdate();e&&(o.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},f=j((function(n){e.resolved=bn(n,t),s?o.length=0:d(!0)})),h=j((function(t){r(e.errorComp)&&(e.error=!0,d(!0))})),m=e(f,h);return l(m)&&(p(m)?i(e.resolved)&&m.then(f,h):p(m.component)&&(m.component.then(f,h),r(m.error)&&(e.errorComp=bn(m.error,t)),r(m.loading)&&(e.loadingComp=bn(m.loading,t),0===m.delay?e.loading=!0:c=setTimeout((function(){c=null,i(e.resolved)&&i(e.error)&&(e.loading=!0,d(!1))}),m.delay||200)),r(m.timeout)&&(u=setTimeout((function(){u=null,i(e.resolved)&&h(null)}),m.timeout)))),s=!1,e.loading?e.loadingComp:e.resolved}}function kn(e){return e.isComment&&e.asyncFactory}function _n(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(r(n)&&(r(n.componentOptions)||kn(n)))return n}}function Cn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&An(e,t)}function Sn(e,t){gn.$on(e,t)}function Tn(e,t){gn.$off(e,t)}function En(e,t){var n=gn;return function i(){var r=t.apply(null,arguments);null!==r&&n.$off(e,i)}}function An(e,t,n){gn=e,wt(t,n||{},Sn,Tn,En,e),gn=void 0}function Mn(e){var t=/^hook:/;e.prototype.$on=function(e,n){var i=this;if(Array.isArray(e))for(var r=0,a=e.length;r<a;r++)i.$on(e[r],n);else(i._events[e]||(i._events[e]=[])).push(n),t.test(e)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(e,t){var n=this;function i(){n.$off(e,i),t.apply(n,arguments)}return i.fn=t,n.$on(e,i),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var i=0,r=e.length;i<r;i++)n.$off(e[i],t);return n}var a,o=n._events[e];if(!o)return n;if(!t)return n._events[e]=null,n;var s=o.length;while(s--)if(a=o[s],a===t||a.fn===t){o.splice(s,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?N(n):n;for(var i=N(arguments,1),r='event handler for "'+e+'"',a=0,o=n.length;a<o;a++)nt(n[a],t,i,t,r)}return t}}var Nn=null;function On(e){var t=Nn;return Nn=e,function(){Nn=t}}function Dn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Ln(e){e.prototype._update=function(e,t){var n=this,i=n.$el,r=n._vnode,a=On(n);n._vnode=e,n.$el=r?n.__patch__(r,e):n.__patch__(n.$el,e,t,!1),a(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Rn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||y(t.$children,e),e._watcher&&e._watcher.teardown();var n=e._watchers.length;while(n--)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Rn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function zn(e,t,n){var i;return e.$el=t,e.$options.render||(e.$options.render=xe),Rn(e,"beforeMount"),i=function(){e._update(e._render(),n)},new ni(e,i,L,{before:function(){e._isMounted&&!e._isDestroyed&&Rn(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,Rn(e,"mounted")),e}function Pn(e,t,i,r,a){var o=r.data.scopedSlots,s=e.$scopedSlots,l=!!(o&&!o.$stable||s!==n&&!s.$stable||o&&e.$scopedSlots.$key!==o.$key),c=!!(a||e.$options._renderChildren||l);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=a,e.$attrs=r.data.attrs||n,e.$listeners=i||n,t&&e.$options.props){Me(!1);for(var u=e._props,d=e.$options._propKeys||[],f=0;f<d.length;f++){var p=d[f],h=e.$options.props;u[p]=Xe(p,h,t,e)}Me(!0),e.$options.propsData=t}i=i||n;var m=e.$options._parentListeners;e.$options._parentListeners=i,An(e,i,m),c&&(e.$slots=Ot(a,r.context),e.$forceUpdate())}function Fn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function In(e,t){if(t){if(e._directInactive=!1,Fn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)In(e.$children[n]);Rn(e,"activated")}}function jn(e,t){if((!t||(e._directInactive=!0,!Fn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)jn(e.$children[n]);Rn(e,"deactivated")}}function Rn(e,t){ve();var n=e.$options[t],i=t+" hook";if(n)for(var r=0,a=n.length;r<a;r++)nt(n[r],e,null,e,i);e._hasHookEvent&&e.$emit("hook:"+t),ye()}var $n=[],qn=[],Bn={},Un=!1,Hn=!1,Wn=0;function Vn(){Wn=$n.length=qn.length=0,Bn={},Un=Hn=!1}var Yn=0,Gn=Date.now;if(X&&!ee){var Kn=window.performance;Kn&&"function"===typeof Kn.now&&Gn()>document.createEvent("Event").timeStamp&&(Gn=function(){return Kn.now()})}function Xn(){var e,t;for(Yn=Gn(),Hn=!0,$n.sort((function(e,t){return e.id-t.id})),Wn=0;Wn<$n.length;Wn++)e=$n[Wn],e.before&&e.before(),t=e.id,Bn[t]=null,e.run();var n=qn.slice(),i=$n.slice();Vn(),Jn(n),Zn(i),ce&&B.devtools&&ce.emit("flush")}function Zn(e){var t=e.length;while(t--){var n=e[t],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Rn(i,"updated")}}function Qn(e){e._inactive=!1,qn.push(e)}function Jn(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,In(e[t],!0)}function ei(e){var t=e.id;if(null==Bn[t]){if(Bn[t]=!0,Hn){var n=$n.length-1;while(n>Wn&&$n[n].id>e.id)n--;$n.splice(n+1,0,e)}else $n.push(e);Un||(Un=!0,ht(Xn))}}var ti=0,ni=function(e,t,n,i,r){this.vm=e,r&&(e._watcher=this),e._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ti,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new de,this.newDepIds=new de,this.expression="","function"===typeof t?this.getter=t:(this.getter=Y(t),this.getter||(this.getter=L)),this.value=this.lazy?void 0:this.get()};ni.prototype.get=function(){var e;ve(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(_o){if(!this.user)throw _o;tt(_o,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&gt(e),ye(),this.cleanupDeps()}return e},ni.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},ni.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},ni.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ei(this)},ni.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||l(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(_o){tt(_o,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},ni.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ni.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},ni.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var ii={enumerable:!0,configurable:!0,get:L,set:L};function ri(e,t,n){ii.get=function(){return this[t][n]},ii.set=function(e){this[t][n]=e},Object.defineProperty(e,n,ii)}function ai(e){e._watchers=[];var t=e.$options;t.props&&oi(e,t.props),t.methods&&hi(e,t.methods),t.data?si(e):Le(e._data={},!0),t.computed&&ui(e,t.computed),t.watch&&t.watch!==ae&&mi(e,t.watch)}function oi(e,t){var n=e.$options.propsData||{},i=e._props={},r=e.$options._propKeys=[],a=!e.$parent;a||Me(!1);var o=function(a){r.push(a);var o=Xe(a,t,n,e);ze(i,a,o),a in e||ri(e,"_props",a)};for(var s in t)o(s);Me(!0)}function si(e){var t=e.$options.data;t=e._data="function"===typeof t?li(t,e):t||{},u(t)||(t={});var n=Object.keys(t),i=e.$options.props,r=(e.$options.methods,n.length);while(r--){var a=n[r];0,i&&w(i,a)||H(a)||ri(e,"_data",a)}Le(t,!0)}function li(e,t){ve();try{return e.call(t,t)}catch(_o){return tt(_o,t,"data()"),{}}finally{ye()}}var ci={lazy:!0};function ui(e,t){var n=e._computedWatchers=Object.create(null),i=le();for(var r in t){var a=t[r],o="function"===typeof a?a:a.get;0,i||(n[r]=new ni(e,o||L,L,ci)),r in e||di(e,r,a)}}function di(e,t,n){var i=!le();"function"===typeof n?(ii.get=i?fi(t):pi(n),ii.set=L):(ii.get=n.get?i&&!1!==n.cache?fi(t):pi(n.get):L,ii.set=n.set||L),Object.defineProperty(e,t,ii)}function fi(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),me.target&&t.depend(),t.value}}function pi(e){return function(){return e.call(this,this)}}function hi(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?L:M(t[n],e)}function mi(e,t){for(var n in t){var i=t[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)gi(e,n,i[r]);else gi(e,n,i)}}function gi(e,t,n,i){return u(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,i)}function vi(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Pe,e.prototype.$delete=Fe,e.prototype.$watch=function(e,t,n){var i=this;if(u(t))return gi(i,e,t,n);n=n||{},n.user=!0;var r=new ni(i,e,t,n);if(n.immediate)try{t.call(i,r.value)}catch(a){tt(a,i,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var yi=0;function bi(e){e.prototype._init=function(e){var t=this;t._uid=yi++,t._isVue=!0,e&&e._isComponent?wi(t,e):t.$options=Ge(xi(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Dn(t),Cn(t),mn(t),Rn(t,"beforeCreate"),Mt(t),ai(t),At(t),Rn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function wi(e,t){var n=e.$options=Object.create(e.constructor.options),i=t._parentVnode;n.parent=t.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function xi(e){var t=e.options;if(e.super){var n=xi(e.super),i=e.superOptions;if(n!==i){e.superOptions=n;var r=ki(e);r&&O(e.extendOptions,r),t=e.options=Ge(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function ki(e){var t,n=e.options,i=e.sealedOptions;for(var r in n)n[r]!==i[r]&&(t||(t={}),t[r]=n[r]);return t}function _i(e){this._init(e)}function Ci(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=N(arguments,1);return n.unshift(this),"function"===typeof e.install?e.install.apply(e,n):"function"===typeof e&&e.apply(null,n),t.push(e),this}}function Si(e){e.mixin=function(e){return this.options=Ge(this.options,e),this}}function Ti(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,i=n.cid,r=e._Ctor||(e._Ctor={});if(r[i])return r[i];var a=e.name||n.options.name;var o=function(e){this._init(e)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=t++,o.options=Ge(n.options,e),o["super"]=n,o.options.props&&Ei(o),o.options.computed&&Ai(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,$.forEach((function(e){o[e]=n[e]})),a&&(o.options.components[a]=o),o.superOptions=n.options,o.extendOptions=e,o.sealedOptions=O({},o.options),r[i]=o,o}}function Ei(e){var t=e.options.props;for(var n in t)ri(e.prototype,"_props",n)}function Ai(e){var t=e.options.computed;for(var n in t)di(e.prototype,n,t[n])}function Mi(e){$.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&u(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"===typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function Ni(e){return e&&(e.Ctor.options.name||e.tag)}function Oi(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!d(e)&&e.test(t)}function Di(e,t){var n=e.cache,i=e.keys,r=e._vnode;for(var a in n){var o=n[a];if(o){var s=Ni(o.componentOptions);s&&!t(s)&&Li(n,a,i,r)}}}function Li(e,t,n,i){var r=e[t];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),e[t]=null,y(n,t)}bi(_i),vi(_i),Mn(_i),Ln(_i),yn(_i);var zi=[String,RegExp,Array],Pi={name:"keep-alive",abstract:!0,props:{include:zi,exclude:zi,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Li(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",(function(t){Di(e,(function(e){return Oi(t,e)}))})),this.$watch("exclude",(function(t){Di(e,(function(e){return!Oi(t,e)}))}))},render:function(){var e=this.$slots.default,t=_n(e),n=t&&t.componentOptions;if(n){var i=Ni(n),r=this,a=r.include,o=r.exclude;if(a&&(!i||!Oi(a,i))||o&&i&&Oi(o,i))return t;var s=this,l=s.cache,c=s.keys,u=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;l[u]?(t.componentInstance=l[u].componentInstance,y(c,u),c.push(u)):(l[u]=t,c.push(u),this.max&&c.length>parseInt(this.max)&&Li(l,c[0],c,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}},Fi={KeepAlive:Pi};function Ii(e){var t={get:function(){return B}};Object.defineProperty(e,"config",t),e.util={warn:pe,extend:O,mergeOptions:Ge,defineReactive:ze},e.set=Pe,e.delete=Fe,e.nextTick=ht,e.observable=function(e){return Le(e),e},e.options=Object.create(null),$.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,O(e.options.components,Fi),Ci(e),Si(e),Ti(e),Mi(e)}Ii(_i),Object.defineProperty(_i.prototype,"$isServer",{get:le}),Object.defineProperty(_i.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(_i,"FunctionalRenderContext",{value:Zt}),_i.version="2.6.12";var ji=g("style,class"),Ri=g("input,textarea,option,select,progress"),$i=function(e,t,n){return"value"===n&&Ri(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},qi=g("contenteditable,draggable,spellcheck"),Bi=g("events,caret,typing,plaintext-only"),Ui=function(e,t){return Gi(t)||"false"===t?"false":"contenteditable"===e&&Bi(t)?t:"true"},Hi=g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Wi="http://www.w3.org/1999/xlink",Vi=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Yi=function(e){return Vi(e)?e.slice(6,e.length):""},Gi=function(e){return null==e||!1===e};function Ki(e){var t=e.data,n=e,i=e;while(r(i.componentInstance))i=i.componentInstance._vnode,i&&i.data&&(t=Xi(i.data,t));while(r(n=n.parent))n&&n.data&&(t=Xi(t,n.data));return Zi(t.staticClass,t.class)}function Xi(e,t){return{staticClass:Qi(e.staticClass,t.staticClass),class:r(e.class)?[e.class,t.class]:t.class}}function Zi(e,t){return r(e)||r(t)?Qi(e,Ji(t)):""}function Qi(e,t){return e?t?e+" "+t:e:t||""}function Ji(e){return Array.isArray(e)?er(e):l(e)?tr(e):"string"===typeof e?e:""}function er(e){for(var t,n="",i=0,a=e.length;i<a;i++)r(t=Ji(e[i]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function tr(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var nr={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ir=g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),rr=g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ar=function(e){return ir(e)||rr(e)};function or(e){return rr(e)?"svg":"math"===e?"math":void 0}var sr=Object.create(null);function lr(e){if(!X)return!0;if(ar(e))return!1;if(e=e.toLowerCase(),null!=sr[e])return sr[e];var t=document.createElement(e);return e.indexOf("-")>-1?sr[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:sr[e]=/HTMLUnknownElement/.test(t.toString())}var cr=g("text,number,password,search,email,tel,url");function ur(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function dr(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fr(e,t){return document.createElementNS(nr[e],t)}function pr(e){return document.createTextNode(e)}function hr(e){return document.createComment(e)}function mr(e,t,n){e.insertBefore(t,n)}function gr(e,t){e.removeChild(t)}function vr(e,t){e.appendChild(t)}function yr(e){return e.parentNode}function br(e){return e.nextSibling}function wr(e){return e.tagName}function xr(e,t){e.textContent=t}function kr(e,t){e.setAttribute(t,"")}var _r=Object.freeze({createElement:dr,createElementNS:fr,createTextNode:pr,createComment:hr,insertBefore:mr,removeChild:gr,appendChild:vr,parentNode:yr,nextSibling:br,tagName:wr,setTextContent:xr,setStyleScope:kr}),Cr={create:function(e,t){Sr(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Sr(e,!0),Sr(t))},destroy:function(e){Sr(e,!0)}};function Sr(e,t){var n=e.data.ref;if(r(n)){var i=e.context,a=e.componentInstance||e.elm,o=i.$refs;t?Array.isArray(o[n])?y(o[n],a):o[n]===a&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(a)<0&&o[n].push(a):o[n]=[a]:o[n]=a}}var Tr=new be("",{},[]),Er=["create","activate","update","remove","destroy"];function Ar(e,t){return e.key===t.key&&(e.tag===t.tag&&e.isComment===t.isComment&&r(e.data)===r(t.data)&&Mr(e,t)||a(e.isAsyncPlaceholder)&&e.asyncFactory===t.asyncFactory&&i(t.asyncFactory.error))}function Mr(e,t){if("input"!==e.tag)return!0;var n,i=r(n=e.data)&&r(n=n.attrs)&&n.type,a=r(n=t.data)&&r(n=n.attrs)&&n.type;return i===a||cr(i)&&cr(a)}function Nr(e,t,n){var i,a,o={};for(i=t;i<=n;++i)a=e[i].key,r(a)&&(o[a]=i);return o}function Or(e){var t,n,o={},l=e.modules,c=e.nodeOps;for(t=0;t<Er.length;++t)for(o[Er[t]]=[],n=0;n<l.length;++n)r(l[n][Er[t]])&&o[Er[t]].push(l[n][Er[t]]);function u(e){return new be(c.tagName(e).toLowerCase(),{},[],void 0,e)}function d(e,t){function n(){0===--n.listeners&&f(e)}return n.listeners=t,n}function f(e){var t=c.parentNode(e);r(t)&&c.removeChild(t,e)}function p(e,t,n,i,o,s,l){if(r(e.elm)&&r(s)&&(e=s[l]=_e(e)),e.isRootInsert=!o,!h(e,t,n,i)){var u=e.data,d=e.children,f=e.tag;r(f)?(e.elm=e.ns?c.createElementNS(e.ns,f):c.createElement(f,e),k(e),b(e,d,t),r(u)&&x(e,t),y(n,e.elm,i)):a(e.isComment)?(e.elm=c.createComment(e.text),y(n,e.elm,i)):(e.elm=c.createTextNode(e.text),y(n,e.elm,i))}}function h(e,t,n,i){var o=e.data;if(r(o)){var s=r(e.componentInstance)&&o.keepAlive;if(r(o=o.hook)&&r(o=o.init)&&o(e,!1),r(e.componentInstance))return m(e,t),y(n,e.elm,i),a(s)&&v(e,t,n,i),!0}}function m(e,t){r(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,w(e)?(x(e,t),k(e)):(Sr(e),t.push(e))}function v(e,t,n,i){var a,s=e;while(s.componentInstance)if(s=s.componentInstance._vnode,r(a=s.data)&&r(a=a.transition)){for(a=0;a<o.activate.length;++a)o.activate[a](Tr,s);t.push(s);break}y(n,e.elm,i)}function y(e,t,n){r(e)&&(r(n)?c.parentNode(n)===e&&c.insertBefore(e,t,n):c.appendChild(e,t))}function b(e,t,n){if(Array.isArray(t)){0;for(var i=0;i<t.length;++i)p(t[i],n,e.elm,null,!0,t,i)}else s(e.text)&&c.appendChild(e.elm,c.createTextNode(String(e.text)))}function w(e){while(e.componentInstance)e=e.componentInstance._vnode;return r(e.tag)}function x(e,n){for(var i=0;i<o.create.length;++i)o.create[i](Tr,e);t=e.data.hook,r(t)&&(r(t.create)&&t.create(Tr,e),r(t.insert)&&n.push(e))}function k(e){var t;if(r(t=e.fnScopeId))c.setStyleScope(e.elm,t);else{var n=e;while(n)r(t=n.context)&&r(t=t.$options._scopeId)&&c.setStyleScope(e.elm,t),n=n.parent}r(t=Nn)&&t!==e.context&&t!==e.fnContext&&r(t=t.$options._scopeId)&&c.setStyleScope(e.elm,t)}function _(e,t,n,i,r,a){for(;i<=r;++i)p(n[i],a,e,t,!1,n,i)}function C(e){var t,n,i=e.data;if(r(i))for(r(t=i.hook)&&r(t=t.destroy)&&t(e),t=0;t<o.destroy.length;++t)o.destroy[t](e);if(r(t=e.children))for(n=0;n<e.children.length;++n)C(e.children[n])}function S(e,t,n){for(;t<=n;++t){var i=e[t];r(i)&&(r(i.tag)?(T(i),C(i)):f(i.elm))}}function T(e,t){if(r(t)||r(e.data)){var n,i=o.remove.length+1;for(r(t)?t.listeners+=i:t=d(e.elm,i),r(n=e.componentInstance)&&r(n=n._vnode)&&r(n.data)&&T(n,t),n=0;n<o.remove.length;++n)o.remove[n](e,t);r(n=e.data.hook)&&r(n=n.remove)?n(e,t):t()}else f(e.elm)}function E(e,t,n,a,o){var s,l,u,d,f=0,h=0,m=t.length-1,g=t[0],v=t[m],y=n.length-1,b=n[0],w=n[y],x=!o;while(f<=m&&h<=y)i(g)?g=t[++f]:i(v)?v=t[--m]:Ar(g,b)?(M(g,b,a,n,h),g=t[++f],b=n[++h]):Ar(v,w)?(M(v,w,a,n,y),v=t[--m],w=n[--y]):Ar(g,w)?(M(g,w,a,n,y),x&&c.insertBefore(e,g.elm,c.nextSibling(v.elm)),g=t[++f],w=n[--y]):Ar(v,b)?(M(v,b,a,n,h),x&&c.insertBefore(e,v.elm,g.elm),v=t[--m],b=n[++h]):(i(s)&&(s=Nr(t,f,m)),l=r(b.key)?s[b.key]:A(b,t,f,m),i(l)?p(b,a,e,g.elm,!1,n,h):(u=t[l],Ar(u,b)?(M(u,b,a,n,h),t[l]=void 0,x&&c.insertBefore(e,u.elm,g.elm)):p(b,a,e,g.elm,!1,n,h)),b=n[++h]);f>m?(d=i(n[y+1])?null:n[y+1].elm,_(e,d,n,h,y,a)):h>y&&S(t,f,m)}function A(e,t,n,i){for(var a=n;a<i;a++){var o=t[a];if(r(o)&&Ar(e,o))return a}}function M(e,t,n,s,l,u){if(e!==t){r(t.elm)&&r(s)&&(t=s[l]=_e(t));var d=t.elm=e.elm;if(a(e.isAsyncPlaceholder))r(t.asyncFactory.resolved)?D(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(a(t.isStatic)&&a(e.isStatic)&&t.key===e.key&&(a(t.isCloned)||a(t.isOnce)))t.componentInstance=e.componentInstance;else{var f,p=t.data;r(p)&&r(f=p.hook)&&r(f=f.prepatch)&&f(e,t);var h=e.children,m=t.children;if(r(p)&&w(t)){for(f=0;f<o.update.length;++f)o.update[f](e,t);r(f=p.hook)&&r(f=f.update)&&f(e,t)}i(t.text)?r(h)&&r(m)?h!==m&&E(d,h,m,n,u):r(m)?(r(e.text)&&c.setTextContent(d,""),_(d,null,m,0,m.length-1,n)):r(h)?S(h,0,h.length-1):r(e.text)&&c.setTextContent(d,""):e.text!==t.text&&c.setTextContent(d,t.text),r(p)&&r(f=p.hook)&&r(f=f.postpatch)&&f(e,t)}}}function N(e,t,n){if(a(n)&&r(e.parent))e.parent.data.pendingInsert=t;else for(var i=0;i<t.length;++i)t[i].data.hook.insert(t[i])}var O=g("attrs,class,staticClass,staticStyle,key");function D(e,t,n,i){var o,s=t.tag,l=t.data,c=t.children;if(i=i||l&&l.pre,t.elm=e,a(t.isComment)&&r(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(r(l)&&(r(o=l.hook)&&r(o=o.init)&&o(t,!0),r(o=t.componentInstance)))return m(t,n),!0;if(r(s)){if(r(c))if(e.hasChildNodes())if(r(o=l)&&r(o=o.domProps)&&r(o=o.innerHTML)){if(o!==e.innerHTML)return!1}else{for(var u=!0,d=e.firstChild,f=0;f<c.length;f++){if(!d||!D(d,c[f],n,i)){u=!1;break}d=d.nextSibling}if(!u||d)return!1}else b(t,c,n);if(r(l)){var p=!1;for(var h in l)if(!O(h)){p=!0,x(t,n);break}!p&&l["class"]&&gt(l["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,s){if(!i(t)){var l=!1,d=[];if(i(e))l=!0,p(t,d);else{var f=r(e.nodeType);if(!f&&Ar(e,t))M(e,t,d,null,null,s);else{if(f){if(1===e.nodeType&&e.hasAttribute(R)&&(e.removeAttribute(R),n=!0),a(n)&&D(e,t,d))return N(t,d,!0),e;e=u(e)}var h=e.elm,m=c.parentNode(h);if(p(t,d,h._leaveCb?null:m,c.nextSibling(h)),r(t.parent)){var g=t.parent,v=w(t);while(g){for(var y=0;y<o.destroy.length;++y)o.destroy[y](g);if(g.elm=t.elm,v){for(var b=0;b<o.create.length;++b)o.create[b](Tr,g);var x=g.data.hook.insert;if(x.merged)for(var k=1;k<x.fns.length;k++)x.fns[k]()}else Sr(g);g=g.parent}}r(m)?S([e],0,0):r(e.tag)&&C(e)}}return N(t,d,l),t.elm}r(e)&&C(e)}}var Dr={create:Lr,update:Lr,destroy:function(e){Lr(e,Tr)}};function Lr(e,t){(e.data.directives||t.data.directives)&&zr(e,t)}function zr(e,t){var n,i,r,a=e===Tr,o=t===Tr,s=Fr(e.data.directives,e.context),l=Fr(t.data.directives,t.context),c=[],u=[];for(n in l)i=s[n],r=l[n],i?(r.oldValue=i.value,r.oldArg=i.arg,jr(r,"update",t,e),r.def&&r.def.componentUpdated&&u.push(r)):(jr(r,"bind",t,e),r.def&&r.def.inserted&&c.push(r));if(c.length){var d=function(){for(var n=0;n<c.length;n++)jr(c[n],"inserted",t,e)};a?xt(t,"insert",d):d()}if(u.length&&xt(t,"postpatch",(function(){for(var n=0;n<u.length;n++)jr(u[n],"componentUpdated",t,e)})),!a)for(n in s)l[n]||jr(s[n],"unbind",e,e,o)}var Pr=Object.create(null);function Fr(e,t){var n,i,r=Object.create(null);if(!e)return r;for(n=0;n<e.length;n++)i=e[n],i.modifiers||(i.modifiers=Pr),r[Ir(i)]=i,i.def=Ke(t.$options,"directives",i.name,!0);return r}function Ir(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function jr(e,t,n,i,r){var a=e.def&&e.def[t];if(a)try{a(n.elm,e,n,i,r)}catch(_o){tt(_o,n.context,"directive "+e.name+" "+t+" hook")}}var Rr=[Cr,Dr];function $r(e,t){var n=t.componentOptions;if((!r(n)||!1!==n.Ctor.options.inheritAttrs)&&(!i(e.data.attrs)||!i(t.data.attrs))){var a,o,s,l=t.elm,c=e.data.attrs||{},u=t.data.attrs||{};for(a in r(u.__ob__)&&(u=t.data.attrs=O({},u)),u)o=u[a],s=c[a],s!==o&&qr(l,a,o);for(a in(ee||ne)&&u.value!==c.value&&qr(l,"value",u.value),c)i(u[a])&&(Vi(a)?l.removeAttributeNS(Wi,Yi(a)):qi(a)||l.removeAttribute(a))}}function qr(e,t,n){e.tagName.indexOf("-")>-1?Br(e,t,n):Hi(t)?Gi(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):qi(t)?e.setAttribute(t,Ui(t,n)):Vi(t)?Gi(n)?e.removeAttributeNS(Wi,Yi(t)):e.setAttributeNS(Wi,t,n):Br(e,t,n)}function Br(e,t,n){if(Gi(n))e.removeAttribute(t);else{if(ee&&!te&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var i=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",i)};e.addEventListener("input",i),e.__ieph=!0}e.setAttribute(t,n)}}var Ur={create:$r,update:$r};function Hr(e,t){var n=t.elm,a=t.data,o=e.data;if(!(i(a.staticClass)&&i(a.class)&&(i(o)||i(o.staticClass)&&i(o.class)))){var s=Ki(t),l=n._transitionClasses;r(l)&&(s=Qi(s,Ji(l))),s!==n._prevClass&&(n.setAttribute("class",s),n._prevClass=s)}}var Wr,Vr={create:Hr,update:Hr},Yr="__r",Gr="__c";function Kr(e){if(r(e[Yr])){var t=ee?"change":"input";e[t]=[].concat(e[Yr],e[t]||[]),delete e[Yr]}r(e[Gr])&&(e.change=[].concat(e[Gr],e.change||[]),delete e[Gr])}function Xr(e,t,n){var i=Wr;return function r(){var a=t.apply(null,arguments);null!==a&&Jr(e,r,n,i)}}var Zr=ot&&!(re&&Number(re[1])<=53);function Qr(e,t,n,i){if(Zr){var r=Yn,a=t;t=a._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=r||e.timeStamp<=0||e.target.ownerDocument!==document)return a.apply(this,arguments)}}Wr.addEventListener(e,t,oe?{capture:n,passive:i}:n)}function Jr(e,t,n,i){(i||Wr).removeEventListener(e,t._wrapper||t,n)}function ea(e,t){if(!i(e.data.on)||!i(t.data.on)){var n=t.data.on||{},r=e.data.on||{};Wr=t.elm,Kr(n),wt(n,r,Qr,Jr,Xr,t.context),Wr=void 0}}var ta,na={create:ea,update:ea};function ia(e,t){if(!i(e.data.domProps)||!i(t.data.domProps)){var n,a,o=t.elm,s=e.data.domProps||{},l=t.data.domProps||{};for(n in r(l.__ob__)&&(l=t.data.domProps=O({},l)),s)n in l||(o[n]="");for(n in l){if(a=l[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),a===s[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=a;var c=i(a)?"":String(a);ra(o,c)&&(o.value=c)}else if("innerHTML"===n&&rr(o.tagName)&&i(o.innerHTML)){ta=ta||document.createElement("div"),ta.innerHTML="<svg>"+a+"</svg>";var u=ta.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(u.firstChild)o.appendChild(u.firstChild)}else if(a!==s[n])try{o[n]=a}catch(_o){}}}}function ra(e,t){return!e.composing&&("OPTION"===e.tagName||aa(e,t)||oa(e,t))}function aa(e,t){var n=!0;try{n=document.activeElement!==e}catch(_o){}return n&&e.value!==t}function oa(e,t){var n=e.value,i=e._vModifiers;if(r(i)){if(i.number)return m(n)!==m(t);if(i.trim)return n.trim()!==t.trim()}return n!==t}var sa={create:ia,update:ia},la=x((function(e){var t={},n=/;(?![^(]*\))/g,i=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(i);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function ca(e){var t=ua(e.style);return e.staticStyle?O(e.staticStyle,t):t}function ua(e){return Array.isArray(e)?D(e):"string"===typeof e?la(e):e}function da(e,t){var n,i={};if(t){var r=e;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(n=ca(r.data))&&O(i,n)}(n=ca(e.data))&&O(i,n);var a=e;while(a=a.parent)a.data&&(n=ca(a.data))&&O(i,n);return i}var fa,pa=/^--/,ha=/\s*!important$/,ma=function(e,t,n){if(pa.test(t))e.style.setProperty(t,n);else if(ha.test(n))e.style.setProperty(T(t),n.replace(ha,""),"important");else{var i=va(t);if(Array.isArray(n))for(var r=0,a=n.length;r<a;r++)e.style[i]=n[r];else e.style[i]=n}},ga=["Webkit","Moz","ms"],va=x((function(e){if(fa=fa||document.createElement("div").style,e=_(e),"filter"!==e&&e in fa)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<ga.length;n++){var i=ga[n]+t;if(i in fa)return i}}));function ya(e,t){var n=t.data,a=e.data;if(!(i(n.staticStyle)&&i(n.style)&&i(a.staticStyle)&&i(a.style))){var o,s,l=t.elm,c=a.staticStyle,u=a.normalizedStyle||a.style||{},d=c||u,f=ua(t.data.style)||{};t.data.normalizedStyle=r(f.__ob__)?O({},f):f;var p=da(t,!0);for(s in d)i(p[s])&&ma(l,s,"");for(s in p)o=p[s],o!==d[s]&&ma(l,s,null==o?"":o)}}var ba={create:ya,update:ya},wa=/\s+/;function xa(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(wa).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function ka(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(wa).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" "+(e.getAttribute("class")||"")+" ",i=" "+t+" ";while(n.indexOf(i)>=0)n=n.replace(i," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function _a(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&O(t,Ca(e.name||"v")),O(t,e),t}return"string"===typeof e?Ca(e):void 0}}var Ca=x((function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}})),Sa=X&&!te,Ta="transition",Ea="animation",Aa="transition",Ma="transitionend",Na="animation",Oa="animationend";Sa&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Aa="WebkitTransition",Ma="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Na="WebkitAnimation",Oa="webkitAnimationEnd"));var Da=X?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function La(e){Da((function(){Da(e)}))}function za(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),xa(e,t))}function Pa(e,t){e._transitionClasses&&y(e._transitionClasses,t),ka(e,t)}function Fa(e,t,n){var i=ja(e,t),r=i.type,a=i.timeout,o=i.propCount;if(!r)return n();var s=r===Ta?Ma:Oa,l=0,c=function(){e.removeEventListener(s,u),n()},u=function(t){t.target===e&&++l>=o&&c()};setTimeout((function(){l<o&&c()}),a+1),e.addEventListener(s,u)}var Ia=/\b(transform|all)(,|$)/;function ja(e,t){var n,i=window.getComputedStyle(e),r=(i[Aa+"Delay"]||"").split(", "),a=(i[Aa+"Duration"]||"").split(", "),o=Ra(r,a),s=(i[Na+"Delay"]||"").split(", "),l=(i[Na+"Duration"]||"").split(", "),c=Ra(s,l),u=0,d=0;t===Ta?o>0&&(n=Ta,u=o,d=a.length):t===Ea?c>0&&(n=Ea,u=c,d=l.length):(u=Math.max(o,c),n=u>0?o>c?Ta:Ea:null,d=n?n===Ta?a.length:l.length:0);var f=n===Ta&&Ia.test(i[Aa+"Property"]);return{type:n,timeout:u,propCount:d,hasTransform:f}}function Ra(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return $a(t)+$a(e[n])})))}function $a(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function qa(e,t){var n=e.elm;r(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var a=_a(e.data.transition);if(!i(a)&&!r(n._enterCb)&&1===n.nodeType){var o=a.css,s=a.type,c=a.enterClass,u=a.enterToClass,d=a.enterActiveClass,f=a.appearClass,p=a.appearToClass,h=a.appearActiveClass,g=a.beforeEnter,v=a.enter,y=a.afterEnter,b=a.enterCancelled,w=a.beforeAppear,x=a.appear,k=a.afterAppear,_=a.appearCancelled,C=a.duration,S=Nn,T=Nn.$vnode;while(T&&T.parent)S=T.context,T=T.parent;var E=!S._isMounted||!e.isRootInsert;if(!E||x||""===x){var A=E&&f?f:c,M=E&&h?h:d,N=E&&p?p:u,O=E&&w||g,D=E&&"function"===typeof x?x:v,L=E&&k||y,z=E&&_||b,P=m(l(C)?C.enter:C);0;var F=!1!==o&&!te,I=Ha(D),R=n._enterCb=j((function(){F&&(Pa(n,N),Pa(n,M)),R.cancelled?(F&&Pa(n,A),z&&z(n)):L&&L(n),n._enterCb=null}));e.data.show||xt(e,"insert",(function(){var t=n.parentNode,i=t&&t._pending&&t._pending[e.key];i&&i.tag===e.tag&&i.elm._leaveCb&&i.elm._leaveCb(),D&&D(n,R)})),O&&O(n),F&&(za(n,A),za(n,M),La((function(){Pa(n,A),R.cancelled||(za(n,N),I||(Ua(P)?setTimeout(R,P):Fa(n,s,R)))}))),e.data.show&&(t&&t(),D&&D(n,R)),F||I||R()}}}function Ba(e,t){var n=e.elm;r(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var a=_a(e.data.transition);if(i(a)||1!==n.nodeType)return t();if(!r(n._leaveCb)){var o=a.css,s=a.type,c=a.leaveClass,u=a.leaveToClass,d=a.leaveActiveClass,f=a.beforeLeave,p=a.leave,h=a.afterLeave,g=a.leaveCancelled,v=a.delayLeave,y=a.duration,b=!1!==o&&!te,w=Ha(p),x=m(l(y)?y.leave:y);0;var k=n._leaveCb=j((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),b&&(Pa(n,u),Pa(n,d)),k.cancelled?(b&&Pa(n,c),g&&g(n)):(t(),h&&h(n)),n._leaveCb=null}));v?v(_):_()}function _(){k.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),f&&f(n),b&&(za(n,c),za(n,d),La((function(){Pa(n,c),k.cancelled||(za(n,u),w||(Ua(x)?setTimeout(k,x):Fa(n,s,k)))}))),p&&p(n,k),b||w||k())}}function Ua(e){return"number"===typeof e&&!isNaN(e)}function Ha(e){if(i(e))return!1;var t=e.fns;return r(t)?Ha(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Wa(e,t){!0!==t.data.show&&qa(t)}var Va=X?{create:Wa,activate:Wa,remove:function(e,t){!0!==e.data.show?Ba(e,t):t()}}:{},Ya=[Ur,Vr,na,sa,ba,Va],Ga=Ya.concat(Rr),Ka=Or({nodeOps:_r,modules:Ga});te&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&io(e,"input")}));var Xa={inserted:function(e,t,n,i){"select"===n.tag?(i.elm&&!i.elm._vOptions?xt(n,"postpatch",(function(){Xa.componentUpdated(e,t,n)})):Za(e,t,n.context),e._vOptions=[].map.call(e.options,eo)):("textarea"===n.tag||cr(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",to),e.addEventListener("compositionend",no),e.addEventListener("change",no),te&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Za(e,t,n.context);var i=e._vOptions,r=e._vOptions=[].map.call(e.options,eo);if(r.some((function(e,t){return!F(e,i[t])}))){var a=e.multiple?t.value.some((function(e){return Ja(e,r)})):t.value!==t.oldValue&&Ja(t.value,r);a&&io(e,"change")}}}};function Za(e,t,n){Qa(e,t,n),(ee||ne)&&setTimeout((function(){Qa(e,t,n)}),0)}function Qa(e,t,n){var i=t.value,r=e.multiple;if(!r||Array.isArray(i)){for(var a,o,s=0,l=e.options.length;s<l;s++)if(o=e.options[s],r)a=I(i,eo(o))>-1,o.selected!==a&&(o.selected=a);else if(F(eo(o),i))return void(e.selectedIndex!==s&&(e.selectedIndex=s));r||(e.selectedIndex=-1)}}function Ja(e,t){return t.every((function(t){return!F(t,e)}))}function eo(e){return"_value"in e?e._value:e.value}function to(e){e.target.composing=!0}function no(e){e.target.composing&&(e.target.composing=!1,io(e.target,"input"))}function io(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function ro(e){return!e.componentInstance||e.data&&e.data.transition?e:ro(e.componentInstance._vnode)}var ao={bind:function(e,t,n){var i=t.value;n=ro(n);var r=n.data&&n.data.transition,a=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;i&&r?(n.data.show=!0,qa(n,(function(){e.style.display=a}))):e.style.display=i?a:"none"},update:function(e,t,n){var i=t.value,r=t.oldValue;if(!i!==!r){n=ro(n);var a=n.data&&n.data.transition;a?(n.data.show=!0,i?qa(n,(function(){e.style.display=e.__vOriginalDisplay})):Ba(n,(function(){e.style.display="none"}))):e.style.display=i?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,i,r){r||(e.style.display=e.__vOriginalDisplay)}},oo={model:Xa,show:ao},so={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function lo(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?lo(_n(t.children)):e}function co(e){var t={},n=e.$options;for(var i in n.propsData)t[i]=e[i];var r=n._parentListeners;for(var a in r)t[_(a)]=r[a];return t}function uo(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function fo(e){while(e=e.parent)if(e.data.transition)return!0}function po(e,t){return t.key===e.key&&t.tag===e.tag}var ho=function(e){return e.tag||kn(e)},mo=function(e){return"show"===e.name},go={name:"transition",props:so,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(ho),n.length)){0;var i=this.mode;0;var r=n[0];if(fo(this.$vnode))return r;var a=lo(r);if(!a)return r;if(this._leaving)return uo(e,r);var o="__transition-"+this._uid+"-";a.key=null==a.key?a.isComment?o+"comment":o+a.tag:s(a.key)?0===String(a.key).indexOf(o)?a.key:o+a.key:a.key;var l=(a.data||(a.data={})).transition=co(this),c=this._vnode,u=lo(c);if(a.data.directives&&a.data.directives.some(mo)&&(a.data.show=!0),u&&u.data&&!po(a,u)&&!kn(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var d=u.data.transition=O({},l);if("out-in"===i)return this._leaving=!0,xt(d,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),uo(e,r);if("in-out"===i){if(kn(a))return c;var f,p=function(){f()};xt(l,"afterEnter",p),xt(l,"enterCancelled",p),xt(d,"delayLeave",(function(e){f=e}))}}return r}}},vo=O({tag:String,moveClass:String},so);delete vo.mode;var yo={props:vo,beforeMount:function(){var e=this,t=this._update;this._update=function(n,i){var r=On(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,r(),t.call(e,n,i)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,r=this.$slots.default||[],a=this.children=[],o=co(this),s=0;s<r.length;s++){var l=r[s];if(l.tag)if(null!=l.key&&0!==String(l.key).indexOf("__vlist"))a.push(l),n[l.key]=l,(l.data||(l.data={})).transition=o;else;}if(i){for(var c=[],u=[],d=0;d<i.length;d++){var f=i[d];f.data.transition=o,f.data.pos=f.elm.getBoundingClientRect(),n[f.key]?c.push(f):u.push(f)}this.kept=e(t,null,c),this.removed=u}return e(t,null,a)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(bo),e.forEach(wo),e.forEach(xo),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,i=n.style;za(n,t),i.transform=i.WebkitTransform=i.transitionDuration="",n.addEventListener(Ma,n._moveCb=function e(i){i&&i.target!==n||i&&!/transform$/.test(i.propertyName)||(n.removeEventListener(Ma,e),n._moveCb=null,Pa(n,t))})}})))},methods:{hasMove:function(e,t){if(!Sa)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){ka(n,e)})),xa(n,t),n.style.display="none",this.$el.appendChild(n);var i=ja(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}};function bo(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function wo(e){e.data.newPos=e.elm.getBoundingClientRect()}function xo(e){var t=e.data.pos,n=e.data.newPos,i=t.left-n.left,r=t.top-n.top;if(i||r){e.data.moved=!0;var a=e.elm.style;a.transform=a.WebkitTransform="translate("+i+"px,"+r+"px)",a.transitionDuration="0s"}}var ko={Transition:go,TransitionGroup:yo};_i.config.mustUseProp=$i,_i.config.isReservedTag=ar,_i.config.isReservedAttr=ji,_i.config.getTagNamespace=or,_i.config.isUnknownElement=lr,O(_i.options.directives,oo),O(_i.options.components,ko),_i.prototype.__patch__=X?Ka:L,_i.prototype.$mount=function(e,t){return e=e&&X?ur(e):void 0,zn(this,e,t)},X&&setTimeout((function(){B.devtools&&ce&&ce.emit("init",_i)}),0),t["a"]=_i}).call(this,n("c8ba"))},"2b19":function(e,t,n){var i=n("23e7"),r=n("129f");i({target:"Object",stat:!0},{is:r})},"2b3d":function(e,t,n){"use strict";n("3ca3");var i,r=n("23e7"),a=n("83ab"),o=n("0d3b"),s=n("da84"),l=n("37e8"),c=n("6eeb"),u=n("19aa"),d=n("5135"),f=n("60da"),p=n("4df4"),h=n("6547").codeAt,m=n("5fb2"),g=n("d44e"),v=n("9861"),y=n("69f3"),b=s.URL,w=v.URLSearchParams,x=v.getState,k=y.set,_=y.getterFor("URL"),C=Math.floor,S=Math.pow,T="Invalid authority",E="Invalid scheme",A="Invalid host",M="Invalid port",N=/[A-Za-z]/,O=/[\d+-.A-Za-z]/,D=/\d/,L=/^(0x|0X)/,z=/^[0-7]+$/,P=/^\d+$/,F=/^[\dA-Fa-f]+$/,I=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,j=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,R=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,$=/[\u0009\u000A\u000D]/g,q=function(e,t){var n,i,r;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return A;if(n=U(t.slice(1,-1)),!n)return A;e.host=n}else if(Q(e)){if(t=m(t),I.test(t))return A;if(n=B(t),null===n)return A;e.host=n}else{if(j.test(t))return A;for(n="",i=p(t),r=0;r<i.length;r++)n+=X(i[r],V);e.host=n}},B=function(e){var t,n,i,r,a,o,s,l=e.split(".");if(l.length&&""==l[l.length-1]&&l.pop(),t=l.length,t>4)return e;for(n=[],i=0;i<t;i++){if(r=l[i],""==r)return e;if(a=10,r.length>1&&"0"==r.charAt(0)&&(a=L.test(r)?16:8,r=r.slice(8==a?1:2)),""===r)o=0;else{if(!(10==a?P:8==a?z:F).test(r))return e;o=parseInt(r,a)}n.push(o)}for(i=0;i<t;i++)if(o=n[i],i==t-1){if(o>=S(256,5-t))return null}else if(o>255)return null;for(s=n.pop(),i=0;i<n.length;i++)s+=n[i]*S(256,3-i);return s},U=function(e){var t,n,i,r,a,o,s,l=[0,0,0,0,0,0,0,0],c=0,u=null,d=0,f=function(){return e.charAt(d)};if(":"==f()){if(":"!=e.charAt(1))return;d+=2,c++,u=c}while(f()){if(8==c)return;if(":"!=f()){t=n=0;while(n<4&&F.test(f()))t=16*t+parseInt(f(),16),d++,n++;if("."==f()){if(0==n)return;if(d-=n,c>6)return;i=0;while(f()){if(r=null,i>0){if(!("."==f()&&i<4))return;d++}if(!D.test(f()))return;while(D.test(f())){if(a=parseInt(f(),10),null===r)r=a;else{if(0==r)return;r=10*r+a}if(r>255)return;d++}l[c]=256*l[c]+r,i++,2!=i&&4!=i||c++}if(4!=i)return;break}if(":"==f()){if(d++,!f())return}else if(f())return;l[c++]=t}else{if(null!==u)return;d++,c++,u=c}}if(null!==u){o=c-u,c=7;while(0!=c&&o>0)s=l[c],l[c--]=l[u+o-1],l[u+--o]=s}else if(8!=c)return;return l},H=function(e){for(var t=null,n=1,i=null,r=0,a=0;a<8;a++)0!==e[a]?(r>n&&(t=i,n=r),i=null,r=0):(null===i&&(i=a),++r);return r>n&&(t=i,n=r),t},W=function(e){var t,n,i,r;if("number"==typeof e){for(t=[],n=0;n<4;n++)t.unshift(e%256),e=C(e/256);return t.join(".")}if("object"==typeof e){for(t="",i=H(e),n=0;n<8;n++)r&&0===e[n]||(r&&(r=!1),i===n?(t+=n?":":"::",r=!0):(t+=e[n].toString(16),n<7&&(t+=":")));return"["+t+"]"}return e},V={},Y=f({},V,{" ":1,'"':1,"<":1,">":1,"`":1}),G=f({},Y,{"#":1,"?":1,"{":1,"}":1}),K=f({},G,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),X=function(e,t){var n=h(e,0);return n>32&&n<127&&!d(t,e)?e:encodeURIComponent(e)},Z={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Q=function(e){return d(Z,e.scheme)},J=function(e){return""!=e.username||""!=e.password},ee=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},te=function(e,t){var n;return 2==e.length&&N.test(e.charAt(0))&&(":"==(n=e.charAt(1))||!t&&"|"==n)},ne=function(e){var t;return e.length>1&&te(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},ie=function(e){var t=e.path,n=t.length;!n||"file"==e.scheme&&1==n&&te(t[0],!0)||t.pop()},re=function(e){return"."===e||"%2e"===e.toLowerCase()},ae=function(e){return e=e.toLowerCase(),".."===e||"%2e."===e||".%2e"===e||"%2e%2e"===e},oe={},se={},le={},ce={},ue={},de={},fe={},pe={},he={},me={},ge={},ve={},ye={},be={},we={},xe={},ke={},_e={},Ce={},Se={},Te={},Ee=function(e,t,n,r){var a,o,s,l,c=n||oe,u=0,f="",h=!1,m=!1,g=!1;n||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(R,"")),t=t.replace($,""),a=p(t);while(u<=a.length){switch(o=a[u],c){case oe:if(!o||!N.test(o)){if(n)return E;c=le;continue}f+=o.toLowerCase(),c=se;break;case se:if(o&&(O.test(o)||"+"==o||"-"==o||"."==o))f+=o.toLowerCase();else{if(":"!=o){if(n)return E;f="",c=le,u=0;continue}if(n&&(Q(e)!=d(Z,f)||"file"==f&&(J(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=f,n)return void(Q(e)&&Z[e.scheme]==e.port&&(e.port=null));f="","file"==e.scheme?c=be:Q(e)&&r&&r.scheme==e.scheme?c=ce:Q(e)?c=pe:"/"==a[u+1]?(c=ue,u++):(e.cannotBeABaseURL=!0,e.path.push(""),c=Ce)}break;case le:if(!r||r.cannotBeABaseURL&&"#"!=o)return E;if(r.cannotBeABaseURL&&"#"==o){e.scheme=r.scheme,e.path=r.path.slice(),e.query=r.query,e.fragment="",e.cannotBeABaseURL=!0,c=Te;break}c="file"==r.scheme?be:de;continue;case ce:if("/"!=o||"/"!=a[u+1]){c=de;continue}c=he,u++;break;case ue:if("/"==o){c=me;break}c=_e;continue;case de:if(e.scheme=r.scheme,o==i)e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,e.path=r.path.slice(),e.query=r.query;else if("/"==o||"\\"==o&&Q(e))c=fe;else if("?"==o)e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,e.path=r.path.slice(),e.query="",c=Se;else{if("#"!=o){e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,e.path=r.path.slice(),e.path.pop(),c=_e;continue}e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,e.path=r.path.slice(),e.query=r.query,e.fragment="",c=Te}break;case fe:if(!Q(e)||"/"!=o&&"\\"!=o){if("/"!=o){e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,c=_e;continue}c=me}else c=he;break;case pe:if(c=he,"/"!=o||"/"!=f.charAt(u+1))continue;u++;break;case he:if("/"!=o&&"\\"!=o){c=me;continue}break;case me:if("@"==o){h&&(f="%40"+f),h=!0,s=p(f);for(var v=0;v<s.length;v++){var y=s[v];if(":"!=y||g){var b=X(y,K);g?e.password+=b:e.username+=b}else g=!0}f=""}else if(o==i||"/"==o||"?"==o||"#"==o||"\\"==o&&Q(e)){if(h&&""==f)return T;u-=p(f).length+1,f="",c=ge}else f+=o;break;case ge:case ve:if(n&&"file"==e.scheme){c=xe;continue}if(":"!=o||m){if(o==i||"/"==o||"?"==o||"#"==o||"\\"==o&&Q(e)){if(Q(e)&&""==f)return A;if(n&&""==f&&(J(e)||null!==e.port))return;if(l=q(e,f),l)return l;if(f="",c=ke,n)return;continue}"["==o?m=!0:"]"==o&&(m=!1),f+=o}else{if(""==f)return A;if(l=q(e,f),l)return l;if(f="",c=ye,n==ve)return}break;case ye:if(!D.test(o)){if(o==i||"/"==o||"?"==o||"#"==o||"\\"==o&&Q(e)||n){if(""!=f){var w=parseInt(f,10);if(w>65535)return M;e.port=Q(e)&&w===Z[e.scheme]?null:w,f=""}if(n)return;c=ke;continue}return M}f+=o;break;case be:if(e.scheme="file","/"==o||"\\"==o)c=we;else{if(!r||"file"!=r.scheme){c=_e;continue}if(o==i)e.host=r.host,e.path=r.path.slice(),e.query=r.query;else if("?"==o)e.host=r.host,e.path=r.path.slice(),e.query="",c=Se;else{if("#"!=o){ne(a.slice(u).join(""))||(e.host=r.host,e.path=r.path.slice(),ie(e)),c=_e;continue}e.host=r.host,e.path=r.path.slice(),e.query=r.query,e.fragment="",c=Te}}break;case we:if("/"==o||"\\"==o){c=xe;break}r&&"file"==r.scheme&&!ne(a.slice(u).join(""))&&(te(r.path[0],!0)?e.path.push(r.path[0]):e.host=r.host),c=_e;continue;case xe:if(o==i||"/"==o||"\\"==o||"?"==o||"#"==o){if(!n&&te(f))c=_e;else if(""==f){if(e.host="",n)return;c=ke}else{if(l=q(e,f),l)return l;if("localhost"==e.host&&(e.host=""),n)return;f="",c=ke}continue}f+=o;break;case ke:if(Q(e)){if(c=_e,"/"!=o&&"\\"!=o)continue}else if(n||"?"!=o)if(n||"#"!=o){if(o!=i&&(c=_e,"/"!=o))continue}else e.fragment="",c=Te;else e.query="",c=Se;break;case _e:if(o==i||"/"==o||"\\"==o&&Q(e)||!n&&("?"==o||"#"==o)){if(ae(f)?(ie(e),"/"==o||"\\"==o&&Q(e)||e.path.push("")):re(f)?"/"==o||"\\"==o&&Q(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&te(f)&&(e.host&&(e.host=""),f=f.charAt(0)+":"),e.path.push(f)),f="","file"==e.scheme&&(o==i||"?"==o||"#"==o))while(e.path.length>1&&""===e.path[0])e.path.shift();"?"==o?(e.query="",c=Se):"#"==o&&(e.fragment="",c=Te)}else f+=X(o,G);break;case Ce:"?"==o?(e.query="",c=Se):"#"==o?(e.fragment="",c=Te):o!=i&&(e.path[0]+=X(o,V));break;case Se:n||"#"!=o?o!=i&&("'"==o&&Q(e)?e.query+="%27":e.query+="#"==o?"%23":X(o,V)):(e.fragment="",c=Te);break;case Te:o!=i&&(e.fragment+=X(o,Y));break}u++}},Ae=function(e){var t,n,i=u(this,Ae,"URL"),r=arguments.length>1?arguments[1]:void 0,o=String(e),s=k(i,{type:"URL"});if(void 0!==r)if(r instanceof Ae)t=_(r);else if(n=Ee(t={},String(r)),n)throw TypeError(n);if(n=Ee(s,o,null,t),n)throw TypeError(n);var l=s.searchParams=new w,c=x(l);c.updateSearchParams(s.query),c.updateURL=function(){s.query=String(l)||null},a||(i.href=Ne.call(i),i.origin=Oe.call(i),i.protocol=De.call(i),i.username=Le.call(i),i.password=ze.call(i),i.host=Pe.call(i),i.hostname=Fe.call(i),i.port=Ie.call(i),i.pathname=je.call(i),i.search=Re.call(i),i.searchParams=$e.call(i),i.hash=qe.call(i))},Me=Ae.prototype,Ne=function(){var e=_(this),t=e.scheme,n=e.username,i=e.password,r=e.host,a=e.port,o=e.path,s=e.query,l=e.fragment,c=t+":";return null!==r?(c+="//",J(e)&&(c+=n+(i?":"+i:"")+"@"),c+=W(r),null!==a&&(c+=":"+a)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?o[0]:o.length?"/"+o.join("/"):"",null!==s&&(c+="?"+s),null!==l&&(c+="#"+l),c},Oe=function(){var e=_(this),t=e.scheme,n=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(i){return"null"}return"file"!=t&&Q(e)?t+"://"+W(e.host)+(null!==n?":"+n:""):"null"},De=function(){return _(this).scheme+":"},Le=function(){return _(this).username},ze=function(){return _(this).password},Pe=function(){var e=_(this),t=e.host,n=e.port;return null===t?"":null===n?W(t):W(t)+":"+n},Fe=function(){var e=_(this).host;return null===e?"":W(e)},Ie=function(){var e=_(this).port;return null===e?"":String(e)},je=function(){var e=_(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},Re=function(){var e=_(this).query;return e?"?"+e:""},$e=function(){return _(this).searchParams},qe=function(){var e=_(this).fragment;return e?"#"+e:""},Be=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(a&&l(Me,{href:Be(Ne,(function(e){var t=_(this),n=String(e),i=Ee(t,n);if(i)throw TypeError(i);x(t.searchParams).updateSearchParams(t.query)})),origin:Be(Oe),protocol:Be(De,(function(e){var t=_(this);Ee(t,String(e)+":",oe)})),username:Be(Le,(function(e){var t=_(this),n=p(String(e));if(!ee(t)){t.username="";for(var i=0;i<n.length;i++)t.username+=X(n[i],K)}})),password:Be(ze,(function(e){var t=_(this),n=p(String(e));if(!ee(t)){t.password="";for(var i=0;i<n.length;i++)t.password+=X(n[i],K)}})),host:Be(Pe,(function(e){var t=_(this);t.cannotBeABaseURL||Ee(t,String(e),ge)})),hostname:Be(Fe,(function(e){var t=_(this);t.cannotBeABaseURL||Ee(t,String(e),ve)})),port:Be(Ie,(function(e){var t=_(this);ee(t)||(e=String(e),""==e?t.port=null:Ee(t,e,ye))})),pathname:Be(je,(function(e){var t=_(this);t.cannotBeABaseURL||(t.path=[],Ee(t,e+"",ke))})),search:Be(Re,(function(e){var t=_(this);e=String(e),""==e?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",Ee(t,e,Se)),x(t.searchParams).updateSearchParams(t.query)})),searchParams:Be($e),hash:Be(qe,(function(e){var t=_(this);e=String(e),""!=e?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",Ee(t,e,Te)):t.fragment=null}))}),c(Me,"toJSON",(function(){return Ne.call(this)}),{enumerable:!0}),c(Me,"toString",(function(){return Ne.call(this)}),{enumerable:!0}),b){var Ue=b.createObjectURL,He=b.revokeObjectURL;Ue&&c(Ae,"createObjectURL",(function(e){return Ue.apply(b,arguments)})),He&&c(Ae,"revokeObjectURL",(function(e){return He.apply(b,arguments)}))}g(Ae,"URL"),r({global:!0,forced:!o,sham:!a},{URL:Ae})},"2c3e":function(e,t,n){var i=n("83ab"),r=n("9f7f").UNSUPPORTED_Y,a=n("9bf2").f,o=n("69f3").get,s=RegExp.prototype;i&&r&&a(RegExp.prototype,"sticky",{configurable:!0,get:function(){if(this!==s){if(this instanceof RegExp)return!!o(this).sticky;throw TypeError("Incompatible receiver, RegExp required")}}})},"2ca0":function(e,t,n){"use strict";var i=n("23e7"),r=n("06cf").f,a=n("50c4"),o=n("5a34"),s=n("1d80"),l=n("ab13"),c=n("c430"),u="".startsWith,d=Math.min,f=l("startsWith"),p=!c&&!f&&!!function(){var e=r(String.prototype,"startsWith");return e&&!e.writable}();i({target:"String",proto:!0,forced:!p&&!f},{startsWith:function(e){var t=String(s(this));o(e);var n=a(d(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return u?u.call(t,i,n):t.slice(n,n+i.length)===i}})},"2cf4":function(e,t,n){var i,r,a,o=n("da84"),s=n("d039"),l=n("c6b6"),c=n("0366"),u=n("1be4"),d=n("cc12"),f=n("1cdc"),p=o.location,h=o.setImmediate,m=o.clearImmediate,g=o.process,v=o.MessageChannel,y=o.Dispatch,b=0,w={},x="onreadystatechange",k=function(e){if(w.hasOwnProperty(e)){var t=w[e];delete w[e],t()}},_=function(e){return function(){k(e)}},C=function(e){k(e.data)},S=function(e){o.postMessage(e+"",p.protocol+"//"+p.host)};h&&m||(h=function(e){var t=[],n=1;while(arguments.length>n)t.push(arguments[n++]);return w[++b]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},i(b),b},m=function(e){delete w[e]},"process"==l(g)?i=function(e){g.nextTick(_(e))}:y&&y.now?i=function(e){y.now(_(e))}:v&&!f?(r=new v,a=r.port2,r.port1.onmessage=C,i=c(a.postMessage,a,1)):!o.addEventListener||"function"!=typeof postMessage||o.importScripts||s(S)||"file:"===p.protocol?i=x in d("script")?function(e){u.appendChild(d("script"))[x]=function(){u.removeChild(this),k(e)}}:function(e){setTimeout(_(e),0)}:(i=S,o.addEventListener("message",C,!1))),e.exports={set:h,clear:m}},"2d00":function(e,t,n){var i,r,a=n("da84"),o=n("342f"),s=a.process,l=s&&s.versions,c=l&&l.v8;c?(i=c.split("."),r=i[0]+i[1]):o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=i[1]))),e.exports=r&&+r},"2d26":function(e,t,n){n("5d91"),n("1715");var i=n("428f");e.exports=i},"2d83":function(e,t,n){"use strict";var i=n("387f");e.exports=function(e,t,n,r,a){var o=new Error(e);return i(o,t,n,r,a)}},"2e67":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"2f62":function(e,t,n){"use strict";(function(e){
/*!
 * vuex v3.5.1
 * (c) 2020 Evan You
 * @license MIT
 */
function i(e){var t=Number(e.version.split(".")[0]);if(t>=2)e.mixin({beforeCreate:i});else{var n=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[i].concat(e.init):i,n.call(this,e)}}function i(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}}n.d(t,"b",(function(){return L}));var r="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},a=r.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(e){a&&(e._devtoolHook=a,a.emit("vuex:init",e),a.on("vuex:travel-to-state",(function(t){e.replaceState(t)})),e.subscribe((function(e,t){a.emit("vuex:mutation",e,t)}),{prepend:!0}),e.subscribeAction((function(e,t){a.emit("vuex:action",e,t)}),{prepend:!0}))}function s(e,t){return e.filter(t)[0]}function l(e,t){if(void 0===t&&(t=[]),null===e||"object"!==typeof e)return e;var n=s(t,(function(t){return t.original===e}));if(n)return n.copy;var i=Array.isArray(e)?[]:{};return t.push({original:e,copy:i}),Object.keys(e).forEach((function(n){i[n]=l(e[n],t)})),i}function c(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function u(e){return null!==e&&"object"===typeof e}function d(e){return e&&"function"===typeof e.then}function f(e,t){return function(){return e(t)}}var p=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},h={namespaced:{configurable:!0}};h.namespaced.get=function(){return!!this._rawModule.namespaced},p.prototype.addChild=function(e,t){this._children[e]=t},p.prototype.removeChild=function(e){delete this._children[e]},p.prototype.getChild=function(e){return this._children[e]},p.prototype.hasChild=function(e){return e in this._children},p.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},p.prototype.forEachChild=function(e){c(this._children,e)},p.prototype.forEachGetter=function(e){this._rawModule.getters&&c(this._rawModule.getters,e)},p.prototype.forEachAction=function(e){this._rawModule.actions&&c(this._rawModule.actions,e)},p.prototype.forEachMutation=function(e){this._rawModule.mutations&&c(this._rawModule.mutations,e)},Object.defineProperties(p.prototype,h);var m=function(e){this.register([],e,!1)};function g(e,t,n){if(t.update(n),n.modules)for(var i in n.modules){if(!t.getChild(i))return void 0;g(e.concat(i),t.getChild(i),n.modules[i])}}m.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},m.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},m.prototype.update=function(e){g([],this.root,e)},m.prototype.register=function(e,t,n){var i=this;void 0===n&&(n=!0);var r=new p(t,n);if(0===e.length)this.root=r;else{var a=this.get(e.slice(0,-1));a.addChild(e[e.length-1],r)}t.modules&&c(t.modules,(function(t,r){i.register(e.concat(r),t,n)}))},m.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],i=t.getChild(n);i&&i.runtime&&t.removeChild(n)},m.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return t.hasChild(n)};var v;var y=function(e){var t=this;void 0===e&&(e={}),!v&&"undefined"!==typeof window&&window.Vue&&D(window.Vue);var n=e.plugins;void 0===n&&(n=[]);var i=e.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new m(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v,this._makeLocalGettersCache=Object.create(null);var r=this,a=this,s=a.dispatch,l=a.commit;this.dispatch=function(e,t){return s.call(r,e,t)},this.commit=function(e,t,n){return l.call(r,e,t,n)},this.strict=i;var c=this._modules.root.state;_(this,c,[],this._modules.root),k(this,c),n.forEach((function(e){return e(t)}));var u=void 0!==e.devtools?e.devtools:v.config.devtools;u&&o(this)},b={state:{configurable:!0}};function w(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function x(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;_(e,n,[],e._modules.root,!0),k(e,n,t)}function k(e,t,n){var i=e._vm;e.getters={},e._makeLocalGettersCache=Object.create(null);var r=e._wrappedGetters,a={};c(r,(function(t,n){a[n]=f(t,e),Object.defineProperty(e.getters,n,{get:function(){return e._vm[n]},enumerable:!0})}));var o=v.config.silent;v.config.silent=!0,e._vm=new v({data:{$$state:t},computed:a}),v.config.silent=o,e.strict&&M(e),i&&(n&&e._withCommit((function(){i._data.$$state=null})),v.nextTick((function(){return i.$destroy()})))}function _(e,t,n,i,r){var a=!n.length,o=e._modules.getNamespace(n);if(i.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=i),!a&&!r){var s=N(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit((function(){v.set(s,l,i.state)}))}var c=i.context=C(e,o,n);i.forEachMutation((function(t,n){var i=o+n;T(e,i,t,c)})),i.forEachAction((function(t,n){var i=t.root?n:o+n,r=t.handler||t;E(e,i,r,c)})),i.forEachGetter((function(t,n){var i=o+n;A(e,i,t,c)})),i.forEachChild((function(i,a){_(e,t,n.concat(a),i,r)}))}function C(e,t,n){var i=""===t,r={dispatch:i?e.dispatch:function(n,i,r){var a=O(n,i,r),o=a.payload,s=a.options,l=a.type;return s&&s.root||(l=t+l),e.dispatch(l,o)},commit:i?e.commit:function(n,i,r){var a=O(n,i,r),o=a.payload,s=a.options,l=a.type;s&&s.root||(l=t+l),e.commit(l,o,s)}};return Object.defineProperties(r,{getters:{get:i?function(){return e.getters}:function(){return S(e,t)}},state:{get:function(){return N(e.state,n)}}}),r}function S(e,t){if(!e._makeLocalGettersCache[t]){var n={},i=t.length;Object.keys(e.getters).forEach((function(r){if(r.slice(0,i)===t){var a=r.slice(i);Object.defineProperty(n,a,{get:function(){return e.getters[r]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function T(e,t,n,i){var r=e._mutations[t]||(e._mutations[t]=[]);r.push((function(t){n.call(e,i.state,t)}))}function E(e,t,n,i){var r=e._actions[t]||(e._actions[t]=[]);r.push((function(t){var r=n.call(e,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:e.getters,rootState:e.state},t);return d(r)||(r=Promise.resolve(r)),e._devtoolHook?r.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):r}))}function A(e,t,n,i){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(i.state,i.getters,e.state,e.getters)})}function M(e){e._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function N(e,t){return t.reduce((function(e,t){return e[t]}),e)}function O(e,t,n){return u(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}function D(e){v&&e===v||(v=e,i(v))}b.state.get=function(){return this._vm._data.$$state},b.state.set=function(e){0},y.prototype.commit=function(e,t,n){var i=this,r=O(e,t,n),a=r.type,o=r.payload,s=(r.options,{type:a,payload:o}),l=this._mutations[a];l&&(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(s,i.state)})))},y.prototype.dispatch=function(e,t){var n=this,i=O(e,t),r=i.type,a=i.payload,o={type:r,payload:a},s=this._actions[r];if(s){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(c){0}var l=s.length>1?Promise.all(s.map((function(e){return e(a)}))):s[0](a);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(c){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(c){0}t(e)}))}))}},y.prototype.subscribe=function(e,t){return w(e,this._subscribers,t)},y.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return w(n,this._actionSubscribers,t)},y.prototype.watch=function(e,t,n){var i=this;return this._watcherVM.$watch((function(){return e(i.state,i.getters)}),t,n)},y.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._vm._data.$$state=e}))},y.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),_(this,this.state,e,this._modules.get(e),n.preserveState),k(this,this.state)},y.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=N(t.state,e.slice(0,-1));v.delete(n,e[e.length-1])})),x(this)},y.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},y.prototype.hotUpdate=function(e){this._modules.update(e),x(this,!0)},y.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(y.prototype,b);var L=$((function(e,t){var n={};return j(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var i=q(this.$store,"mapState",e);if(!i)return;t=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,t,n):t[r]},n[i].vuex=!0})),n})),z=$((function(e,t){var n={};return j(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.commit;if(e){var a=q(this.$store,"mapMutations",e);if(!a)return;i=a.context.commit}return"function"===typeof r?r.apply(this,[i].concat(t)):i.apply(this.$store,[r].concat(t))}})),n})),P=$((function(e,t){var n={};return j(t).forEach((function(t){var i=t.key,r=t.val;r=e+r,n[i]=function(){if(!e||q(this.$store,"mapGetters",e))return this.$store.getters[r]},n[i].vuex=!0})),n})),F=$((function(e,t){var n={};return j(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.dispatch;if(e){var a=q(this.$store,"mapActions",e);if(!a)return;i=a.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(t)):i.apply(this.$store,[r].concat(t))}})),n})),I=function(e){return{mapState:L.bind(null,e),mapGetters:P.bind(null,e),mapMutations:z.bind(null,e),mapActions:F.bind(null,e)}};function j(e){return R(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function R(e){return Array.isArray(e)||u(e)}function $(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function q(e,t,n){var i=e._modulesNamespaceMap[n];return i}function B(e){void 0===e&&(e={});var t=e.collapsed;void 0===t&&(t=!0);var n=e.filter;void 0===n&&(n=function(e,t,n){return!0});var i=e.transformer;void 0===i&&(i=function(e){return e});var r=e.mutationTransformer;void 0===r&&(r=function(e){return e});var a=e.actionFilter;void 0===a&&(a=function(e,t){return!0});var o=e.actionTransformer;void 0===o&&(o=function(e){return e});var s=e.logMutations;void 0===s&&(s=!0);var c=e.logActions;void 0===c&&(c=!0);var u=e.logger;return void 0===u&&(u=console),function(e){var d=l(e.state);"undefined"!==typeof u&&(s&&e.subscribe((function(e,a){var o=l(a);if(n(e,d,o)){var s=W(),c=r(e),f="mutation "+e.type+s;U(u,f,t),u.log("%c prev state","color: #9E9E9E; font-weight: bold",i(d)),u.log("%c mutation","color: #03A9F4; font-weight: bold",c),u.log("%c next state","color: #4CAF50; font-weight: bold",i(o)),H(u)}d=o})),c&&e.subscribeAction((function(e,n){if(a(e,n)){var i=W(),r=o(e),s="action "+e.type+i;U(u,s,t),u.log("%c action","color: #03A9F4; font-weight: bold",r),H(u)}})))}}function U(e,t,n){var i=n?e.groupCollapsed:e.group;try{i.call(e,t)}catch(r){e.log(t)}}function H(e){try{e.groupEnd()}catch(t){e.log("—— log end ——")}}function W(){var e=new Date;return" @ "+Y(e.getHours(),2)+":"+Y(e.getMinutes(),2)+":"+Y(e.getSeconds(),2)+"."+Y(e.getMilliseconds(),3)}function V(e,t){return new Array(t+1).join(e)}function Y(e,t){return V("0",t-e.toString().length)+e}var G={Store:y,install:D,version:"3.5.1",mapState:L,mapMutations:z,mapGetters:P,mapActions:F,createNamespacedHelpers:I,createLogger:B};t["a"]=G}).call(this,n("c8ba"))},"30b5":function(e,t,n){"use strict";var i=n("c532");function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(i.isURLSearchParams(t))a=t.toString();else{var o=[];i.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(i.isArray(e)?t+="[]":e=[e],i.forEach(e,(function(e){i.isDate(e)?e=e.toISOString():i.isObject(e)&&(e=JSON.stringify(e)),o.push(r(t)+"="+r(e))})))})),a=o.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},"325d":function(e,t,n){},3280:function(e,t,n){"use strict";var i=n("ebb5"),r=n("e58c"),a=i.aTypedArray,o=i.exportTypedArrayMethod;o("lastIndexOf",(function(e){return r.apply(a(this),arguments)}))},3410:function(e,t,n){var i=n("23e7"),r=n("d039"),a=n("7b0b"),o=n("e163"),s=n("e177"),l=r((function(){o(1)}));i({target:"Object",stat:!0,forced:l,sham:!s},{getPrototypeOf:function(e){return o(a(e))}})},"342f":function(e,t,n){var i=n("d066");e.exports=i("navigator","userAgent")||""},"35a1":function(e,t,n){var i=n("f5df"),r=n("3f8c"),a=n("b622"),o=a("iterator");e.exports=function(e){if(void 0!=e)return e[o]||e["@@iterator"]||r[i(e)]}},"35b3":function(e,t,n){var i=n("23e7");i({target:"Number",stat:!0},{EPSILON:Math.pow(2,-52)})},"37e8":function(e,t,n){var i=n("83ab"),r=n("9bf2"),a=n("825a"),o=n("df75");e.exports=i?Object.defineProperties:function(e,t){a(e);var n,i=o(t),s=i.length,l=0;while(s>l)r.f(e,n=i[l++],t[n]);return e}},"387f":function(e,t,n){"use strict";e.exports=function(e,t,n,i,r){return e.config=t,n&&(e.code=n),e.request=i,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},"38cf":function(e,t,n){var i=n("23e7"),r=n("1148");i({target:"String",proto:!0},{repeat:r})},3934:function(e,t,n){"use strict";var i=n("c532");e.exports=i.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var i=e;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=i.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},"3a7b":function(e,t,n){"use strict";var i=n("ebb5"),r=n("b727").findIndex,a=i.aTypedArray,o=i.exportTypedArrayMethod;o("findIndex",(function(e){return r(a(this),e,arguments.length>1?arguments[1]:void 0)}))},"3bbe":function(e,t,n){var i=n("861d");e.exports=function(e){if(!i(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},"3c45":function(e,t,n){},"3c5d":function(e,t,n){"use strict";var i=n("ebb5"),r=n("50c4"),a=n("182d"),o=n("7b0b"),s=n("d039"),l=i.aTypedArray,c=i.exportTypedArrayMethod,u=s((function(){new Int8Array(1).set({})}));c("set",(function(e){l(this);var t=a(arguments.length>1?arguments[1]:void 0,1),n=this.length,i=o(e),s=r(i.length),c=0;if(s+t>n)throw RangeError("Wrong length");while(c<s)this[t+c]=i[c++]}),u)},"3ca3":function(e,t,n){"use strict";var i=n("6547").charAt,r=n("69f3"),a=n("7dd0"),o="String Iterator",s=r.set,l=r.getterFor(o);a(String,"String",(function(e){s(this,{type:o,string:String(e),index:0})}),(function(){var e,t=l(this),n=t.string,r=t.index;return r>=n.length?{value:void 0,done:!0}:(e=i(n,r),t.index+=e.length,{value:e,done:!1})}))},"3ea3":function(e,t,n){var i=n("23e7"),r=n("f748"),a=Math.abs,o=Math.pow;i({target:"Math",stat:!0},{cbrt:function(e){return r(e=+e)*o(a(e),1/3)}})},"3f3a":function(e,t,n){var i=n("23e7"),r=n("83ab"),a=n("825a"),o=n("c04e"),s=n("9bf2"),l=n("d039"),c=l((function(){Reflect.defineProperty(s.f({},1,{value:1}),1,{value:2})}));i({target:"Reflect",stat:!0,forced:c,sham:!r},{defineProperty:function(e,t,n){a(e);var i=o(t,!0);a(n);try{return s.f(e,i,n),!0}catch(r){return!1}}})},"3f8c":function(e,t){e.exports={}},"3fcc":function(e,t,n){"use strict";var i=n("ebb5"),r=n("b727").map,a=n("4840"),o=i.aTypedArray,s=i.aTypedArrayConstructor,l=i.exportTypedArrayMethod;l("map",(function(e){return r(o(this),e,arguments.length>1?arguments[1]:void 0,(function(e,t){return new(s(a(e,e.constructor)))(t)}))}))},"403d":function(e,t,n){},4057:function(e,t,n){var i=n("23e7"),r=Math.hypot,a=Math.abs,o=Math.sqrt,s=!!r&&r(1/0,NaN)!==1/0;i({target:"Math",stat:!0,forced:s},{hypot:function(e,t){var n,i,r=0,s=0,l=arguments.length,c=0;while(s<l)n=a(arguments[s++]),c<n?(i=c/n,r=r*i*i+1,c=n):n>0?(i=n/c,r+=i*i):r+=n;return c===1/0?1/0:c*o(r)}})},4069:function(e,t,n){var i=n("44d2");i("flat")},"408a":function(e,t,n){var i=n("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=i(e))throw TypeError("Incorrect invocation");return+e}},"40d9":function(e,t,n){var i=n("23e7"),r=Math.floor,a=Math.log,o=Math.LOG2E;i({target:"Math",stat:!0},{clz32:function(e){return(e>>>=0)?31-r(a(e+.5)*o):32}})},4160:function(e,t,n){"use strict";var i=n("23e7"),r=n("17c2");i({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"428f":function(e,t,n){var i=n("da84");e.exports=i},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,i="/";t.cwd=function(){return i},t.chdir=function(t){e||(e=n("df7c")),i=e.resolve(t,i)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"445b":function(e,t,n){"use strict";var i=n("da79"),r=n.n(i);r.a},"44ad":function(e,t,n){var i=n("d039"),r=n("c6b6"),a="".split;e.exports=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==r(e)?a.call(e,""):Object(e)}:Object},"44d2":function(e,t,n){var i=n("b622"),r=n("7c73"),a=n("9bf2"),o=i("unscopables"),s=Array.prototype;void 0==s[o]&&a.f(s,o,{configurable:!0,value:r(null)}),e.exports=function(e){s[o][e]=!0}},"44d5":function(e,t,n){(function(e){e(n("56b3"),n("d69f"),n("4ba6"))})((function(e){"use strict";function t(e){for(var t={},n=e.split(" "),i=0;i<n.length;++i)t[n[i]]=!0;return t}function n(e,t,r){return 0==e.length?i(t):function(a,o){for(var s=e[0],l=0;l<s.length;l++)if(a.match(s[l][0]))return o.tokenize=n(e.slice(1),t),s[l][1];return o.tokenize=i(t,r),"string"}}function i(e,t){return function(n,i){return r(n,i,e,t)}}function r(e,t,i,r){if(!1!==r&&e.match("${",!1)||e.match("{$",!1))return t.tokenize=null,"string";if(!1!==r&&e.match(/^\$[a-zA-Z_][a-zA-Z0-9_]*/))return e.match("[",!1)&&(t.tokenize=n([[["[",null]],[[/\d[\w\.]*/,"number"],[/\$[a-zA-Z_][a-zA-Z0-9_]*/,"variable-2"],[/[\w\$]+/,"variable"]],[["]",null]]],i,r)),e.match(/\-\>\w/,!1)&&(t.tokenize=n([[["->",null]],[[/[\w]+/,"variable"]]],i,r)),"variable-2";var a=!1;while(!e.eol()&&(a||!1===r||!e.match("{$",!1)&&!e.match(/^(\$[a-zA-Z_][a-zA-Z0-9_]*|\$\{)/,!1))){if(!a&&e.match(i)){t.tokenize=null,t.tokStack.pop(),t.tokStack.pop();break}a="\\"==e.next()&&!a}return"string"}var a="abstract and array as break case catch class clone const continue declare default do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach function global goto if implements interface instanceof namespace new or private protected public static switch throw trait try use var while xor die echo empty exit eval include include_once isset list require require_once return print unset __halt_compiler self static parent yield insteadof finally",o="true false null TRUE FALSE NULL __CLASS__ __DIR__ __FILE__ __LINE__ __METHOD__ __FUNCTION__ __NAMESPACE__ __TRAIT__",s="func_num_args func_get_arg func_get_args strlen strcmp strncmp strcasecmp strncasecmp each error_reporting define defined trigger_error user_error set_error_handler restore_error_handler get_declared_classes get_loaded_extensions extension_loaded get_extension_funcs debug_backtrace constant bin2hex hex2bin sleep usleep time mktime gmmktime strftime gmstrftime strtotime date gmdate getdate localtime checkdate flush wordwrap htmlspecialchars htmlentities html_entity_decode md5 md5_file crc32 getimagesize image_type_to_mime_type phpinfo phpversion phpcredits strnatcmp strnatcasecmp substr_count strspn strcspn strtok strtoupper strtolower strpos strrpos strrev hebrev hebrevc nl2br basename dirname pathinfo stripslashes stripcslashes strstr stristr strrchr str_shuffle str_word_count strcoll substr substr_replace quotemeta ucfirst ucwords strtr addslashes addcslashes rtrim str_replace str_repeat count_chars chunk_split trim ltrim strip_tags similar_text explode implode setlocale localeconv parse_str str_pad chop strchr sprintf printf vprintf vsprintf sscanf fscanf parse_url urlencode urldecode rawurlencode rawurldecode readlink linkinfo link unlink exec system escapeshellcmd escapeshellarg passthru shell_exec proc_open proc_close rand srand getrandmax mt_rand mt_srand mt_getrandmax base64_decode base64_encode abs ceil floor round is_finite is_nan is_infinite bindec hexdec octdec decbin decoct dechex base_convert number_format fmod ip2long long2ip getenv putenv getopt microtime gettimeofday getrusage uniqid quoted_printable_decode set_time_limit get_cfg_var magic_quotes_runtime set_magic_quotes_runtime get_magic_quotes_gpc get_magic_quotes_runtime import_request_variables error_log serialize unserialize memory_get_usage var_dump var_export debug_zval_dump print_r highlight_file show_source highlight_string ini_get ini_get_all ini_set ini_alter ini_restore get_include_path set_include_path restore_include_path setcookie header headers_sent connection_aborted connection_status ignore_user_abort parse_ini_file is_uploaded_file move_uploaded_file intval floatval doubleval strval gettype settype is_null is_resource is_bool is_long is_float is_int is_integer is_double is_real is_numeric is_string is_array is_object is_scalar ereg ereg_replace eregi eregi_replace split spliti join sql_regcase dl pclose popen readfile rewind rmdir umask fclose feof fgetc fgets fgetss fread fopen fpassthru ftruncate fstat fseek ftell fflush fwrite fputs mkdir rename copy tempnam tmpfile file file_get_contents file_put_contents stream_select stream_context_create stream_context_set_params stream_context_set_option stream_context_get_options stream_filter_prepend stream_filter_append fgetcsv flock get_meta_tags stream_set_write_buffer set_file_buffer set_socket_blocking stream_set_blocking socket_set_blocking stream_get_meta_data stream_register_wrapper stream_wrapper_register stream_set_timeout socket_set_timeout socket_get_status realpath fnmatch fsockopen pfsockopen pack unpack get_browser crypt opendir closedir chdir getcwd rewinddir readdir dir glob fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype file_exists is_writable is_writeable is_readable is_executable is_file is_dir is_link stat lstat chown touch clearstatcache mail ob_start ob_flush ob_clean ob_end_flush ob_end_clean ob_get_flush ob_get_clean ob_get_length ob_get_level ob_get_status ob_get_contents ob_implicit_flush ob_list_handlers ksort krsort natsort natcasesort asort arsort sort rsort usort uasort uksort shuffle array_walk count end prev next reset current key min max in_array array_search extract compact array_fill range array_multisort array_push array_pop array_shift array_unshift array_splice array_slice array_merge array_merge_recursive array_keys array_values array_count_values array_reverse array_reduce array_pad array_flip array_change_key_case array_rand array_unique array_intersect array_intersect_assoc array_diff array_diff_assoc array_sum array_filter array_map array_chunk array_key_exists array_intersect_key array_combine array_column pos sizeof key_exists assert assert_options version_compare ftok str_rot13 aggregate session_name session_module_name session_save_path session_id session_regenerate_id session_decode session_register session_unregister session_is_registered session_encode session_start session_destroy session_unset session_set_save_handler session_cache_limiter session_cache_expire session_set_cookie_params session_get_cookie_params session_write_close preg_match preg_match_all preg_replace preg_replace_callback preg_split preg_quote preg_grep overload ctype_alnum ctype_alpha ctype_cntrl ctype_digit ctype_lower ctype_graph ctype_print ctype_punct ctype_space ctype_upper ctype_xdigit virtual apache_request_headers apache_note apache_lookup_uri apache_child_terminate apache_setenv apache_response_headers apache_get_version getallheaders mysql_connect mysql_pconnect mysql_close mysql_select_db mysql_create_db mysql_drop_db mysql_query mysql_unbuffered_query mysql_db_query mysql_list_dbs mysql_list_tables mysql_list_fields mysql_list_processes mysql_error mysql_errno mysql_affected_rows mysql_insert_id mysql_result mysql_num_rows mysql_num_fields mysql_fetch_row mysql_fetch_array mysql_fetch_assoc mysql_fetch_object mysql_data_seek mysql_fetch_lengths mysql_fetch_field mysql_field_seek mysql_free_result mysql_field_name mysql_field_table mysql_field_len mysql_field_type mysql_field_flags mysql_escape_string mysql_real_escape_string mysql_stat mysql_thread_id mysql_client_encoding mysql_get_client_info mysql_get_host_info mysql_get_proto_info mysql_get_server_info mysql_info mysql mysql_fieldname mysql_fieldtable mysql_fieldlen mysql_fieldtype mysql_fieldflags mysql_selectdb mysql_createdb mysql_dropdb mysql_freeresult mysql_numfields mysql_numrows mysql_listdbs mysql_listtables mysql_listfields mysql_db_name mysql_dbname mysql_tablename mysql_table_name pg_connect pg_pconnect pg_close pg_connection_status pg_connection_busy pg_connection_reset pg_host pg_dbname pg_port pg_tty pg_options pg_ping pg_query pg_send_query pg_cancel_query pg_fetch_result pg_fetch_row pg_fetch_assoc pg_fetch_array pg_fetch_object pg_fetch_all pg_affected_rows pg_get_result pg_result_seek pg_result_status pg_free_result pg_last_oid pg_num_rows pg_num_fields pg_field_name pg_field_num pg_field_size pg_field_type pg_field_prtlen pg_field_is_null pg_get_notify pg_get_pid pg_result_error pg_last_error pg_last_notice pg_put_line pg_end_copy pg_copy_to pg_copy_from pg_trace pg_untrace pg_lo_create pg_lo_unlink pg_lo_open pg_lo_close pg_lo_read pg_lo_write pg_lo_read_all pg_lo_import pg_lo_export pg_lo_seek pg_lo_tell pg_escape_string pg_escape_bytea pg_unescape_bytea pg_client_encoding pg_set_client_encoding pg_meta_data pg_convert pg_insert pg_update pg_delete pg_select pg_exec pg_getlastoid pg_cmdtuples pg_errormessage pg_numrows pg_numfields pg_fieldname pg_fieldsize pg_fieldtype pg_fieldnum pg_fieldprtlen pg_fieldisnull pg_freeresult pg_result pg_loreadall pg_locreate pg_lounlink pg_loopen pg_loclose pg_loread pg_lowrite pg_loimport pg_loexport http_response_code get_declared_traits getimagesizefromstring socket_import_stream stream_set_chunk_size trait_exists header_register_callback class_uses session_status session_register_shutdown echo print global static exit array empty eval isset unset die include require include_once require_once json_decode json_encode json_last_error json_last_error_msg curl_close curl_copy_handle curl_errno curl_error curl_escape curl_exec curl_file_create curl_getinfo curl_init curl_multi_add_handle curl_multi_close curl_multi_exec curl_multi_getcontent curl_multi_info_read curl_multi_init curl_multi_remove_handle curl_multi_select curl_multi_setopt curl_multi_strerror curl_pause curl_reset curl_setopt_array curl_setopt curl_share_close curl_share_init curl_share_setopt curl_strerror curl_unescape curl_version mysqli_affected_rows mysqli_autocommit mysqli_change_user mysqli_character_set_name mysqli_close mysqli_commit mysqli_connect_errno mysqli_connect_error mysqli_connect mysqli_data_seek mysqli_debug mysqli_dump_debug_info mysqli_errno mysqli_error_list mysqli_error mysqli_fetch_all mysqli_fetch_array mysqli_fetch_assoc mysqli_fetch_field_direct mysqli_fetch_field mysqli_fetch_fields mysqli_fetch_lengths mysqli_fetch_object mysqli_fetch_row mysqli_field_count mysqli_field_seek mysqli_field_tell mysqli_free_result mysqli_get_charset mysqli_get_client_info mysqli_get_client_stats mysqli_get_client_version mysqli_get_connection_stats mysqli_get_host_info mysqli_get_proto_info mysqli_get_server_info mysqli_get_server_version mysqli_info mysqli_init mysqli_insert_id mysqli_kill mysqli_more_results mysqli_multi_query mysqli_next_result mysqli_num_fields mysqli_num_rows mysqli_options mysqli_ping mysqli_prepare mysqli_query mysqli_real_connect mysqli_real_escape_string mysqli_real_query mysqli_reap_async_query mysqli_refresh mysqli_rollback mysqli_select_db mysqli_set_charset mysqli_set_local_infile_default mysqli_set_local_infile_handler mysqli_sqlstate mysqli_ssl_set mysqli_stat mysqli_stmt_init mysqli_store_result mysqli_thread_id mysqli_thread_safe mysqli_use_result mysqli_warning_count";e.registerHelper("hintWords","php",[a,o,s].join(" ").split(" ")),e.registerHelper("wordChars","php",/[\w$]/);var l={name:"clike",helperType:"php",keywords:t(a),blockKeywords:t("catch do else elseif for foreach if switch try while finally"),defKeywords:t("class function interface namespace trait"),atoms:t(o),builtin:t(s),multiLineStrings:!0,hooks:{$:function(e){return e.eatWhile(/[\w\$_]/),"variable-2"},"<":function(e,t){var n;if(n=e.match(/<<\s*/)){var r=e.eat(/['"]/);e.eatWhile(/[\w\.]/);var a=e.current().slice(n[0].length+(r?2:1));if(r&&e.eat(r),a)return(t.tokStack||(t.tokStack=[])).push(a,0),t.tokenize=i(a,"'"!=r),"string"}return!1},"#":function(e){while(!e.eol()&&!e.match("?>",!1))e.next();return"comment"},"/":function(e){if(e.eat("/")){while(!e.eol()&&!e.match("?>",!1))e.next();return"comment"}return!1},'"':function(e,t){return(t.tokStack||(t.tokStack=[])).push('"',0),t.tokenize=i('"'),"string"},"{":function(e,t){return t.tokStack&&t.tokStack.length&&t.tokStack[t.tokStack.length-1]++,!1},"}":function(e,t){return t.tokStack&&t.tokStack.length>0&&!--t.tokStack[t.tokStack.length-1]&&(t.tokenize=i(t.tokStack[t.tokStack.length-2])),!1}}};e.defineMode("php",(function(t,n){var i=e.getMode(t,n&&n.htmlMode||"text/html"),r=e.getMode(t,l);function a(t,n){var a=n.curMode==r;if(t.sol()&&n.pending&&'"'!=n.pending&&"'"!=n.pending&&(n.pending=null),a)return a&&null==n.php.tokenize&&t.match("?>")?(n.curMode=i,n.curState=n.html,n.php.context.prev||(n.php=null),"meta"):r.token(t,n.curState);if(t.match(/^<\?\w*/))return n.curMode=r,n.php||(n.php=e.startState(r,i.indent(n.html,"",""))),n.curState=n.php,"meta";if('"'==n.pending||"'"==n.pending){while(!t.eol()&&t.next()!=n.pending);var o="string"}else if(n.pending&&t.pos<n.pending.end){t.pos=n.pending.end;o=n.pending.style}else o=i.token(t,n.curState);n.pending&&(n.pending=null);var s,l=t.current(),c=l.search(/<\?/);return-1!=c&&("string"==o&&(s=l.match(/[\'\"]$/))&&!/\?>/.test(l)?n.pending=s[0]:n.pending={end:t.pos,style:o},t.backUp(l.length-c)),o}return{startState:function(){var t=e.startState(i),a=n.startOpen?e.startState(r):null;return{html:t,php:a,curMode:n.startOpen?r:i,curState:n.startOpen?a:t,pending:null}},copyState:function(t){var n,a=t.html,o=e.copyState(i,a),s=t.php,l=s&&e.copyState(r,s);return n=t.curMode==i?o:l,{html:o,php:l,curMode:t.curMode,curState:n,pending:t.pending}},token:a,indent:function(e,t,n){return e.curMode!=r&&/^\s*<\//.test(t)||e.curMode==r&&/^\?>/.test(t)?i.indent(e.html,t,n):e.curMode.indent(e.curState,t,n)},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",innerMode:function(e){return{state:e.curState,mode:e.curMode}}}}),"htmlmixed","clike"),e.defineMIME("application/x-httpd-php","php"),e.defineMIME("application/x-httpd-php-open",{name:"php",startOpen:!0}),e.defineMIME("text/x-php",l)}))},"44de":function(e,t,n){var i=n("da84");e.exports=function(e,t){var n=i.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}},"44e7":function(e,t,n){var i=n("861d"),r=n("c6b6"),a=n("b622"),o=a("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==r(e))}},"45fc":function(e,t,n){"use strict";var i=n("23e7"),r=n("b727").some,a=n("a640"),o=n("ae40"),s=a("some"),l=o("some");i({target:"Array",proto:!0,forced:!s||!l},{some:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},4659:function(e,t,n){},"466d":function(e,t,n){"use strict";var i=n("d784"),r=n("825a"),a=n("50c4"),o=n("1d80"),s=n("8aa5"),l=n("14c3");i("match",1,(function(e,t,n){return[function(t){var n=o(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,n):new RegExp(t)[e](String(n))},function(e){var i=n(t,e,this);if(i.done)return i.value;var o=r(e),c=String(this);if(!o.global)return l(o,c);var u=o.unicode;o.lastIndex=0;var d,f=[],p=0;while(null!==(d=l(o,c))){var h=String(d[0]);f[p]=h,""===h&&(o.lastIndex=s(c,a(o.lastIndex),u)),p++}return 0===p?null:f}]}))},"467f":function(e,t,n){"use strict";var i=n("2d83");e.exports=function(e,t,n){var r=n.config.validateStatus;!r||r(n.status)?e(n):t(i("Request failed with status code "+n.status,n.config,null,n.request,n))}},4795:function(e,t,n){var i=n("23e7"),r=n("da84"),a=n("342f"),o=[].slice,s=/MSIE .\./.test(a),l=function(e){return function(t,n){var i=arguments.length>2,r=i?o.call(arguments,2):void 0;return e(i?function(){("function"==typeof t?t:Function(t)).apply(this,r)}:t,n)}};i({global:!0,bind:!0,forced:s},{setTimeout:l(r.setTimeout),setInterval:l(r.setInterval)})},4840:function(e,t,n){var i=n("825a"),r=n("1c0b"),a=n("b622"),o=a("species");e.exports=function(e,t){var n,a=i(e).constructor;return void 0===a||void 0==(n=i(a)[o])?t:r(n)}},4930:function(e,t,n){var i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())}))},"498a":function(e,t,n){"use strict";var i=n("23e7"),r=n("58a8").trim,a=n("c8d2");i({target:"String",proto:!0,forced:a("trim")},{trim:function(){return r(this)}})},"4a7b":function(e,t,n){"use strict";var i=n("c532");e.exports=function(e,t){t=t||{};var n={},r=["url","method","params","data"],a=["headers","auth","proxy"],o=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];i.forEach(r,(function(e){"undefined"!==typeof t[e]&&(n[e]=t[e])})),i.forEach(a,(function(r){i.isObject(t[r])?n[r]=i.deepMerge(e[r],t[r]):"undefined"!==typeof t[r]?n[r]=t[r]:i.isObject(e[r])?n[r]=i.deepMerge(e[r]):"undefined"!==typeof e[r]&&(n[r]=e[r])})),i.forEach(o,(function(i){"undefined"!==typeof t[i]?n[i]=t[i]:"undefined"!==typeof e[i]&&(n[i]=e[i])}));var s=r.concat(a).concat(o),l=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return i.forEach(l,(function(i){"undefined"!==typeof t[i]?n[i]=t[i]:"undefined"!==typeof e[i]&&(n[i]=e[i])})),n}},"4a9b":function(e,t,n){var i=n("74e8");i("Float64",(function(e){return function(t,n,i){return e(this,t,n,i)}}))},"4ae1":function(e,t,n){var i=n("23e7"),r=n("d066"),a=n("1c0b"),o=n("825a"),s=n("861d"),l=n("7c73"),c=n("0538"),u=n("d039"),d=r("Reflect","construct"),f=u((function(){function e(){}return!(d((function(){}),[],e)instanceof e)})),p=!u((function(){d((function(){}))})),h=f||p;i({target:"Reflect",stat:!0,forced:h,sham:h},{construct:function(e,t){a(e),o(t);var n=arguments.length<3?e:a(arguments[2]);if(p&&!f)return d(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var i=[null];return i.push.apply(i,t),new(c.apply(e,i))}var r=n.prototype,u=l(s(r)?r:Object.prototype),h=Function.apply.call(e,u,t);return s(h)?h:u}})},"4ba6":function(e,t,n){(function(e){e(n("56b3"))})((function(e){"use strict";function t(e,t,n,i,r,a){this.indented=e,this.column=t,this.type=n,this.info=i,this.align=r,this.prev=a}function n(e,n,i,r){var a=e.indented;return e.context&&"statement"==e.context.type&&"statement"!=i&&(a=e.context.indented),e.context=new t(a,n,i,r,null,e.context)}function i(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}function r(e,t,n){return"variable"==t.prevToken||"type"==t.prevToken||(!!/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e.string.slice(0,n))||(!(!t.typeAtEndOfLine||e.column()!=e.indentation())||void 0))}function a(e){for(;;){if(!e||"top"==e.type)return!0;if("}"==e.type&&"namespace"!=e.prev.info)return!1;e=e.prev}}function o(e){for(var t={},n=e.split(" "),i=0;i<n.length;++i)t[n[i]]=!0;return t}function s(e,t){return"function"===typeof e?e(t):e.propertyIsEnumerable(t)}e.defineMode("clike",(function(o,l){var c,u,d=o.indentUnit,f=l.statementIndentUnit||d,p=l.dontAlignCalls,h=l.keywords||{},m=l.types||{},g=l.builtin||{},v=l.blockKeywords||{},y=l.defKeywords||{},b=l.atoms||{},w=l.hooks||{},x=l.multiLineStrings,k=!1!==l.indentStatements,_=!1!==l.indentSwitch,C=l.namespaceSeparator,S=l.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,T=l.numberStart||/[\d\.]/,E=l.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,A=l.isOperatorChar||/[+\-*&%=<>!?|\/]/,M=l.isIdentifierChar||/[\w\$_\xa1-\uffff]/,N=l.isReservedIdentifier||!1;function O(e,t){var n=e.next();if(w[n]){var i=w[n](e,t);if(!1!==i)return i}if('"'==n||"'"==n)return t.tokenize=D(n),t.tokenize(e,t);if(S.test(n))return c=n,null;if(T.test(n)){if(e.backUp(1),e.match(E))return"number";e.next()}if("/"==n){if(e.eat("*"))return t.tokenize=L,L(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(A.test(n)){while(!e.match(/^\/[\/*]/,!1)&&e.eat(A));return"operator"}if(e.eatWhile(M),C)while(e.match(C))e.eatWhile(M);var r=e.current();return s(h,r)?(s(v,r)&&(c="newstatement"),s(y,r)&&(u=!0),"keyword"):s(m,r)?"type":s(g,r)||N&&N(r)?(s(v,r)&&(c="newstatement"),"builtin"):s(b,r)?"atom":"variable"}function D(e){return function(t,n){var i,r=!1,a=!1;while(null!=(i=t.next())){if(i==e&&!r){a=!0;break}r=!r&&"\\"==i}return(a||!r&&!x)&&(n.tokenize=null),"string"}}function L(e,t){var n,i=!1;while(n=e.next()){if("/"==n&&i){t.tokenize=null;break}i="*"==n}return"comment"}function z(e,t){l.typeFirstDefinitions&&e.eol()&&a(t.context)&&(t.typeAtEndOfLine=r(e,t,e.pos))}return{startState:function(e){return{tokenize:null,context:new t((e||0)-d,0,"top",null,!1),indented:0,startOfLine:!0,prevToken:null}},token:function(e,t){var o=t.context;if(e.sol()&&(null==o.align&&(o.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return z(e,t),null;c=u=null;var s=(t.tokenize||O)(e,t);if("comment"==s||"meta"==s)return s;if(null==o.align&&(o.align=!0),";"==c||":"==c||","==c&&e.match(/^\s*(?:\/\/.*)?$/,!1))while("statement"==t.context.type)i(t);else if("{"==c)n(t,e.column(),"}");else if("["==c)n(t,e.column(),"]");else if("("==c)n(t,e.column(),")");else if("}"==c){while("statement"==o.type)o=i(t);"}"==o.type&&(o=i(t));while("statement"==o.type)o=i(t)}else c==o.type?i(t):k&&(("}"==o.type||"top"==o.type)&&";"!=c||"statement"==o.type&&"newstatement"==c)&&n(t,e.column(),"statement",e.current());if("variable"==s&&("def"==t.prevToken||l.typeFirstDefinitions&&r(e,t,e.start)&&a(t.context)&&e.match(/^\s*\(/,!1))&&(s="def"),w.token){var d=w.token(e,t,s);void 0!==d&&(s=d)}return"def"==s&&!1===l.styleDefs&&(s="variable"),t.startOfLine=!1,t.prevToken=u?"def":s||c,z(e,t),s},indent:function(t,n){if(t.tokenize!=O&&null!=t.tokenize||t.typeAtEndOfLine)return e.Pass;var i=t.context,r=n&&n.charAt(0),a=r==i.type;if("statement"==i.type&&"}"==r&&(i=i.prev),l.dontIndentStatements)while("statement"==i.type&&l.dontIndentStatements.test(i.info))i=i.prev;if(w.indent){var o=w.indent(t,i,n,d);if("number"==typeof o)return o}var s=i.prev&&"switch"==i.prev.info;if(l.allmanIndentation&&/[{(]/.test(r)){while("top"!=i.type&&"}"!=i.type)i=i.prev;return i.indented}return"statement"==i.type?i.indented+("{"==r?0:f):!i.align||p&&")"==i.type?")"!=i.type||a?i.indented+(a?0:d)+(a||!s||/^(?:case|default)\b/.test(n)?0:d):i.indented+f:i.column+(a?0:1)},electricInput:_?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}}));var l="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",c="alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",u="bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",d="FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",f=o("int long char short double float unsigned signed void bool"),p=o("SEL instancetype id Class Protocol BOOL");function h(e){return s(f,e)||/.+_t$/.test(e)}function m(e){return h(e)||s(p,e)}var g="case do else for if switch while struct enum union",v="struct enum union";function y(e,t){if(!t.startOfLine)return!1;for(var n,i=null;n=e.peek();){if("\\"==n&&e.match(/^.$/)){i=y;break}if("/"==n&&e.match(/^\/[\/\*]/,!1))break;e.next()}return t.tokenize=i,"meta"}function b(e,t){return"type"==t.prevToken&&"type"}function w(e){return!(!e||e.length<2)&&("_"==e[0]&&("_"==e[1]||e[1]!==e[1].toLowerCase()))}function x(e){return e.eatWhile(/[\w\.']/),"number"}function k(e,t){if(e.backUp(1),e.match(/(R|u8R|uR|UR|LR)/)){var n=e.match(/"([^\s\\()]{0,16})\(/);return!!n&&(t.cpp11RawStringDelim=n[1],t.tokenize=S,S(e,t))}return e.match(/(u8|u|U|L)/)?!!e.match(/["']/,!1)&&"string":(e.next(),!1)}function _(e){var t=/(\w+)::~?(\w+)$/.exec(e);return t&&t[1]==t[2]}function C(e,t){var n;while(null!=(n=e.next()))if('"'==n&&!e.eat('"')){t.tokenize=null;break}return"string"}function S(e,t){var n=t.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&"),i=e.match(new RegExp(".*?\\)"+n+'"'));return i?t.tokenize=null:e.skipToEnd(),"string"}function T(t,n){"string"==typeof t&&(t=[t]);var i=[];function r(e){if(e)for(var t in e)e.hasOwnProperty(t)&&i.push(t)}r(n.keywords),r(n.types),r(n.builtin),r(n.atoms),i.length&&(n.helperType=t[0],e.registerHelper("hintWords",t[0],i));for(var a=0;a<t.length;++a)e.defineMIME(t[a],n)}function E(e,t){var n=!1;while(!e.eol()){if(!n&&e.match('"""')){t.tokenize=null;break}n="\\"==e.next()&&!n}return"string"}function A(e){return function(t,n){var i;while(i=t.next()){if("*"==i&&t.eat("/")){if(1==e){n.tokenize=null;break}return n.tokenize=A(e-1),n.tokenize(t,n)}if("/"==i&&t.eat("*"))return n.tokenize=A(e+1),n.tokenize(t,n)}return"comment"}}function M(e){return function(t,n){var i,r=!1,a=!1;while(!t.eol()){if(!e&&!r&&t.match('"')){a=!0;break}if(e&&t.match('"""')){a=!0;break}i=t.next(),!r&&"$"==i&&t.match("{")&&t.skipTo("}"),r=!r&&"\\"==i&&!e}return!a&&e||(n.tokenize=null),"string"}}T(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:o(l),types:h,blockKeywords:o(g),defKeywords:o(v),typeFirstDefinitions:!0,atoms:o("NULL true false"),isReservedIdentifier:w,hooks:{"#":y,"*":b},modeProps:{fold:["brace","include"]}}),T(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:o(l+" "+c),types:h,blockKeywords:o(g+" class try catch"),defKeywords:o(v+" class namespace"),typeFirstDefinitions:!0,atoms:o("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:w,hooks:{"#":y,"*":b,u:k,U:k,L:k,R:k,0:x,1:x,2:x,3:x,4:x,5:x,6:x,7:x,8:x,9:x,token:function(e,t,n){if("variable"==n&&"("==e.peek()&&(";"==t.prevToken||null==t.prevToken||"}"==t.prevToken)&&_(e.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),T("text/x-java",{name:"clike",keywords:o("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:o("byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:o("catch class do else finally for if switch try while"),defKeywords:o("class interface enum @interface"),typeFirstDefinitions:!0,atoms:o("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(e){return!e.match("interface",!1)&&(e.eatWhile(/[\w\$_]/),"meta")}},modeProps:{fold:["brace","import"]}}),T("text/x-csharp",{name:"clike",keywords:o("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:o("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:o("catch class do else finally for foreach if struct switch try while"),defKeywords:o("class interface namespace struct var"),typeFirstDefinitions:!0,atoms:o("true false null"),hooks:{"@":function(e,t){return e.eat('"')?(t.tokenize=C,C(e,t)):(e.eatWhile(/[\w\$_]/),"meta")}}}),T("text/x-scala",{name:"clike",keywords:o("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:o("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:o("catch class enum do else finally for forSome if match switch try while"),defKeywords:o("class enum def object package trait type val var"),atoms:o("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"},'"':function(e,t){return!!e.match('""')&&(t.tokenize=E,t.tokenize(e,t))},"'":function(e){return e.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},"=":function(e,n){var i=n.context;return!("}"!=i.type||!i.align||!e.eat(">"))&&(n.context=new t(i.indented,i.column,i.type,i.info,null,i.prev),"operator")},"/":function(e,t){return!!e.eat("*")&&(t.tokenize=A(1),t.tokenize(e,t))}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}}),T("text/x-kotlin",{name:"clike",keywords:o("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam"),types:o("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),intendSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,blockKeywords:o("catch class do else finally for if where try while enum"),defKeywords:o("class val var object interface fun"),atoms:o("true false null this"),hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"},"*":function(e,t){return"."==t.prevToken?"variable":"operator"},'"':function(e,t){return t.tokenize=M(e.match('""')),t.tokenize(e,t)},"/":function(e,t){return!!e.eat("*")&&(t.tokenize=A(1),t.tokenize(e,t))},indent:function(e,t,n,i){var r=n&&n.charAt(0);return"}"!=e.prevToken&&")"!=e.prevToken||""!=n?"operator"==e.prevToken&&"}"!=n&&"}"!=e.context.type||"variable"==e.prevToken&&"."==r||("}"==e.prevToken||")"==e.prevToken)&&"."==r?2*i+t.indented:t.align&&"}"==t.type?t.indented+(e.context.type==(n||"").charAt(0)?0:i):void 0:e.indented}},modeProps:{closeBrackets:{triples:'"'}}}),T(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:o("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:o("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:o("for while do if else struct"),builtin:o("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:o("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":y},modeProps:{fold:["brace","include"]}}),T("text/x-nesc",{name:"clike",keywords:o(l+" as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:h,blockKeywords:o(g),atoms:o("null true false"),hooks:{"#":y},modeProps:{fold:["brace","include"]}}),T("text/x-objectivec",{name:"clike",keywords:o(l+" "+u),types:m,builtin:o(d),blockKeywords:o(g+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:o(v+" @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:!0,atoms:o("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:w,hooks:{"#":y,"*":b},modeProps:{fold:["brace","include"]}}),T("text/x-objectivec++",{name:"clike",keywords:o(l+" "+u+" "+c),types:m,builtin:o(d),blockKeywords:o(g+" @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),defKeywords:o(v+" @interface @implementation @protocol @class class namespace"),dontIndentStatements:/^@.*$|^template$/,typeFirstDefinitions:!0,atoms:o("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:w,hooks:{"#":y,"*":b,u:k,U:k,L:k,R:k,0:x,1:x,2:x,3:x,4:x,5:x,6:x,7:x,8:x,9:x,token:function(e,t,n){if("variable"==n&&"("==e.peek()&&(";"==t.prevToken||null==t.prevToken||"}"==t.prevToken)&&_(e.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),T("text/x-squirrel",{name:"clike",keywords:o("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:h,blockKeywords:o("case catch class else for foreach if switch try while"),defKeywords:o("function local class"),typeFirstDefinitions:!0,atoms:o("true false null"),hooks:{"#":y},modeProps:{fold:["brace","include"]}});var N=null;function O(e){return function(t,n){var i,r=!1,a=!1;while(!t.eol()){if(!r&&t.match('"')&&("single"==e||t.match('""'))){a=!0;break}if(!r&&t.match("``")){N=O(e),a=!0;break}i=t.next(),r="single"==e&&!r&&"\\"==i}return a&&(n.tokenize=null),"string"}}T("text/x-ceylon",{name:"clike",keywords:o("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(e){var t=e.charAt(0);return t===t.toUpperCase()&&t!==t.toLowerCase()},blockKeywords:o("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:o("class dynamic function interface module object package value"),builtin:o("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:o("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"},'"':function(e,t){return t.tokenize=O(e.match('""')?"triple":"single"),t.tokenize(e,t)},"`":function(e,t){return!(!N||!e.match("`"))&&(t.tokenize=N,N=null,t.tokenize(e,t))},"'":function(e){return e.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(e,t,n){if(("variable"==n||"type"==n)&&"."==t.prevToken)return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})}))},"4c53":function(e,t,n){"use strict";var i=n("23e7"),r=n("857a"),a=n("af03");i({target:"String",proto:!0,forced:a("sub")},{sub:function(){return r(this,"sub","","")}})},"4d63":function(e,t,n){var i=n("83ab"),r=n("da84"),a=n("94ca"),o=n("7156"),s=n("9bf2").f,l=n("241c").f,c=n("44e7"),u=n("ad6d"),d=n("9f7f"),f=n("6eeb"),p=n("d039"),h=n("69f3").set,m=n("2626"),g=n("b622"),v=g("match"),y=r.RegExp,b=y.prototype,w=/a/g,x=/a/g,k=new y(w)!==w,_=d.UNSUPPORTED_Y,C=i&&a("RegExp",!k||_||p((function(){return x[v]=!1,y(w)!=w||y(x)==x||"/a/i"!=y(w,"i")})));if(C){var S=function(e,t){var n,i=this instanceof S,r=c(e),a=void 0===t;if(!i&&r&&e.constructor===S&&a)return e;k?r&&!a&&(e=e.source):e instanceof S&&(a&&(t=u.call(e)),e=e.source),_&&(n=!!t&&t.indexOf("y")>-1,n&&(t=t.replace(/y/g,"")));var s=o(k?new y(e,t):y(e,t),i?this:b,S);return _&&n&&h(s,{sticky:n}),s},T=function(e){e in S||s(S,e,{configurable:!0,get:function(){return y[e]},set:function(t){y[e]=t}})},E=l(y),A=0;while(E.length>A)T(E[A++]);b.constructor=S,S.prototype=b,f(r,"RegExp",S)}m("RegExp")},"4d64":function(e,t,n){var i=n("fc6a"),r=n("50c4"),a=n("23cb"),o=function(e){return function(t,n,o){var s,l=i(t),c=r(l.length),u=a(o,c);if(e&&n!=n){while(c>u)if(s=l[u++],s!=s)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},"4d90":function(e,t,n){"use strict";var i=n("23e7"),r=n("0ccb").start,a=n("9a0c");i({target:"String",proto:!0,forced:a},{padStart:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"4de4":function(e,t,n){"use strict";var i=n("23e7"),r=n("b727").filter,a=n("1dde"),o=n("ae40"),s=a("filter"),l=o("filter");i({target:"Array",proto:!0,forced:!s||!l},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(e,t,n){"use strict";var i=n("0366"),r=n("7b0b"),a=n("9bdd"),o=n("e95a"),s=n("50c4"),l=n("8418"),c=n("35a1");e.exports=function(e){var t,n,u,d,f,p,h=r(e),m="function"==typeof this?this:Array,g=arguments.length,v=g>1?arguments[1]:void 0,y=void 0!==v,b=c(h),w=0;if(y&&(v=i(v,g>2?arguments[2]:void 0,2)),void 0==b||m==Array&&o(b))for(t=s(h.length),n=new m(t);t>w;w++)p=y?v(h[w],w):h[w],l(n,w,p);else for(d=b.call(h),f=d.next,n=new m;!(u=f.call(d)).done;w++)p=y?a(d,v,[u.value,w],!0):u.value,l(n,w,p);return n.length=w,n}},"4e82":function(e,t,n){"use strict";var i=n("23e7"),r=n("1c0b"),a=n("7b0b"),o=n("d039"),s=n("a640"),l=[],c=l.sort,u=o((function(){l.sort(void 0)})),d=o((function(){l.sort(null)})),f=s("sort"),p=u||!d||!f;i({target:"Array",proto:!0,forced:p},{sort:function(e){return void 0===e?c.call(a(this)):c.call(a(this),r(e))}})},"4ec9":function(e,t,n){"use strict";var i=n("6d61"),r=n("6566");e.exports=i("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r)},"4fad":function(e,t,n){var i=n("23e7"),r=n("6f53").entries;i({target:"Object",stat:!0},{entries:function(e){return r(e)}})},"4fb8":function(e,t,n){(function(t){"object"==typeof navigator&&function(t,n){e.exports=n()}(0,(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return n}}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={addCSS:!0,thumbWidth:15,watch:!0};function v(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}var y=function(e){return null!=e?e.constructor:null},b=function(e,t){return!!(e&&t&&e instanceof t)},w=function(e){return null==e},x=function(e){return y(e)===Object},k=function(e){return y(e)===String},_=function(e){return Array.isArray(e)},C=function(e){return b(e,NodeList)},S=k,T=_,E=C,A=function(e){return b(e,Element)},M=function(e){return b(e,Event)},N=function(e){return w(e)||(k(e)||_(e)||C(e))&&!e.length||x(e)&&!Object.keys(e).length};function O(e,t){if(1>t){var n=function(e){var t="".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}(t);return parseFloat(e.toFixed(n))}return Math.round(e/t)*t}var D,L,z,P=function(){function e(t,n){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),A(t)?this.element=t:S(t)&&(this.element=document.querySelector(t)),A(this.element)&&N(this.element.rangeTouch)&&(this.config=m({},g,{},n),this.init())}return function(e,t,n){t&&f(e.prototype,t),n&&f(e,n)}(e,[{key:"init",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="",this.element.style.webKitUserSelect="",this.element.style.touchAction=""),this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(e){var t=this,n=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach((function(e){t.element[n](e,(function(e){return t.set(e)}),!1)}))}},{key:"get",value:function(t){if(!e.enabled||!M(t))return null;var n,i=t.target,r=t.changedTouches[0],a=parseFloat(i.getAttribute("min"))||0,o=parseFloat(i.getAttribute("max"))||100,s=parseFloat(i.getAttribute("step"))||1,l=i.getBoundingClientRect(),c=100/l.width*(this.config.thumbWidth/2)/100;return 0>(n=100/l.width*(r.clientX-l.left))?n=0:100<n&&(n=100),50>n?n-=(100-2*n)*c:50<n&&(n+=2*(n-50)*c),a+O(n/100*(o-a),s)}},{key:"set",value:function(t){e.enabled&&M(t)&&!t.target.disabled&&(t.preventDefault(),t.target.value=this.get(t),function(e,t){if(e&&t){var n=new Event(t,{bubbles:!0});e.dispatchEvent(n)}}(t.target,"touchend"===t.type?"change":"input"))}}],[{key:"setup",value:function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=null;if(N(t)||S(t)?i=Array.from(document.querySelectorAll(S(t)?t:'input[type="range"]')):A(t)?i=[t]:E(t)?i=Array.from(t):T(t)&&(i=t.filter(A)),N(i))return null;var r=m({},g,{},n);if(S(t)&&r.watch){var a=new MutationObserver((function(n){Array.from(n).forEach((function(n){Array.from(n.addedNodes).forEach((function(n){A(n)&&v(n,t)&&new e(n,r)}))}))}));a.observe(document.body,{childList:!0,subtree:!0})}return i.map((function(t){return new e(t,n)}))}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}]),e}(),F=function(e){return null!=e?e.constructor:null},I=function(e,t){return Boolean(e&&t&&e instanceof t)},j=function(e){return null==e},R=function(e){return F(e)===Object},$=function(e){return F(e)===String},q=function(e){return F(e)===Function},B=function(e){return Array.isArray(e)},U=function(e){return I(e,NodeList)},H=function(e){return j(e)||($(e)||B(e)||U(e))&&!e.length||R(e)&&!Object.keys(e).length},W=j,V=R,Y=function(e){return F(e)===Number&&!Number.isNaN(e)},G=$,K=function(e){return F(e)===Boolean},X=q,Z=B,Q=U,J=function(e){return I(e,Element)},ee=function(e){return I(e,Event)},te=function(e){return I(e,KeyboardEvent)},ne=function(e){return I(e,TextTrack)||!j(e)&&$(e.kind)},ie=function(e){return I(e,Promise)&&q(e.then)},re=function(e){if(I(e,window.URL))return!0;if(!$(e))return!1;var t=e;e.startsWith("http://")&&e.startsWith("https://")||(t="http://".concat(e));try{return!H(new URL(t).hostname)}catch(e){return!1}},ae=H,oe=(D=document.createElement("span"),L={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},z=Object.keys(L).find((function(e){return void 0!==D.style[e]})),!!G(z)&&L[z]);function se(e,t){setTimeout((function(){try{e.hidden=!0,e.offsetHeight,e.hidden=!1}catch(e){}}),t)}var le={isIE:
/* @cc_on!@ */
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var i=n("1fb5"),r=n("9152"),a=n("e3db");function o(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"===typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(t){return!1}}function s(){return c.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function l(e,t){if(s()<t)throw new RangeError("Invalid typed array length");return c.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t),e.__proto__=c.prototype):(null===e&&(e=new c(t)),e.length=t),e}function c(e,t,n){if(!c.TYPED_ARRAY_SUPPORT&&!(this instanceof c))return new c(e,t,n);if("number"===typeof e){if("string"===typeof t)throw new Error("If encoding is specified then the first argument must be a string");return p(this,e)}return u(this,e,t,n)}function u(e,t,n,i){if("number"===typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!==typeof ArrayBuffer&&t instanceof ArrayBuffer?g(e,t,n,i):"string"===typeof t?h(e,t,n):v(e,t)}function d(e){if("number"!==typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function f(e,t,n,i){return d(t),t<=0?l(e,t):void 0!==n?"string"===typeof i?l(e,t).fill(n,i):l(e,t).fill(n):l(e,t)}function p(e,t){if(d(t),e=l(e,t<0?0:0|y(t)),!c.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)e[n]=0;return e}function h(e,t,n){if("string"===typeof n&&""!==n||(n="utf8"),!c.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var i=0|w(t,n);e=l(e,i);var r=e.write(t,n);return r!==i&&(e=e.slice(0,r)),e}function m(e,t){var n=t.length<0?0:0|y(t.length);e=l(e,n);for(var i=0;i<n;i+=1)e[i]=255&t[i];return e}function g(e,t,n,i){if(t.byteLength,n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds");if(t.byteLength<n+(i||0))throw new RangeError("'length' is out of bounds");return t=void 0===n&&void 0===i?new Uint8Array(t):void 0===i?new Uint8Array(t,n):new Uint8Array(t,n,i),c.TYPED_ARRAY_SUPPORT?(e=t,e.__proto__=c.prototype):e=m(e,t),e}function v(e,t){if(c.isBuffer(t)){var n=0|y(t.length);return e=l(e,n),0===e.length?e:(t.copy(e,0,0,n),e)}if(t){if("undefined"!==typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!==typeof t.length||te(t.length)?l(e,0):m(e,t);if("Buffer"===t.type&&a(t.data))return m(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function y(e){if(e>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|e}function b(e){return+e!=e&&(e=0),c.alloc(+e)}function w(e,t){if(c.isBuffer(e))return e.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!==typeof e&&(e=""+e);var n=e.length;if(0===n)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return X(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return J(e).length;default:if(i)return X(e).length;t=(""+t).toLowerCase(),i=!0}}function x(e,t,n){var i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if(n>>>=0,t>>>=0,n<=t)return"";e||(e="utf8");while(1)switch(e){case"hex":return I(this,t,n);case"utf8":case"utf-8":return D(this,t,n);case"ascii":return P(this,t,n);case"latin1":case"binary":return F(this,t,n);case"base64":return O(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return j(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function k(e,t,n){var i=e[t];e[t]=e[n],e[n]=i}function _(e,t,n,i,r){if(0===e.length)return-1;if("string"===typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"===typeof t&&(t=c.from(t,i)),c.isBuffer(t))return 0===t.length?-1:C(e,t,n,i,r);if("number"===typeof t)return t&=255,c.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):C(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function C(e,t,n,i,r){var a,o=1,s=e.length,l=t.length;if(void 0!==i&&(i=String(i).toLowerCase(),"ucs2"===i||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;o=2,s/=2,l/=2,n/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(r){var u=-1;for(a=n;a<s;a++)if(c(e,a)===c(t,-1===u?0:a-u)){if(-1===u&&(u=a),a-u+1===l)return u*o}else-1!==u&&(a-=a-u),u=-1}else for(n+l>s&&(n=s-l),a=n;a>=0;a--){for(var d=!0,f=0;f<l;f++)if(c(e,a+f)!==c(t,f)){d=!1;break}if(d)return a}return-1}function S(e,t,n,i){n=Number(n)||0;var r=e.length-n;i?(i=Number(i),i>r&&(i=r)):i=r;var a=t.length;if(a%2!==0)throw new TypeError("Invalid hex string");i>a/2&&(i=a/2);for(var o=0;o<i;++o){var s=parseInt(t.substr(2*o,2),16);if(isNaN(s))return o;e[n+o]=s}return o}function T(e,t,n,i){return ee(X(t,e.length-n),e,n,i)}function E(e,t,n,i){return ee(Z(t),e,n,i)}function A(e,t,n,i){return E(e,t,n,i)}function M(e,t,n,i){return ee(J(t),e,n,i)}function N(e,t,n,i){return ee(Q(t,e.length-n),e,n,i)}function O(e,t,n){return 0===t&&n===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(t,n))}function D(e,t,n){n=Math.min(e.length,n);var i=[],r=t;while(r<n){var a,o,s,l,c=e[r],u=null,d=c>239?4:c>223?3:c>191?2:1;if(r+d<=n)switch(d){case 1:c<128&&(u=c);break;case 2:a=e[r+1],128===(192&a)&&(l=(31&c)<<6|63&a,l>127&&(u=l));break;case 3:a=e[r+1],o=e[r+2],128===(192&a)&&128===(192&o)&&(l=(15&c)<<12|(63&a)<<6|63&o,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:a=e[r+1],o=e[r+2],s=e[r+3],128===(192&a)&&128===(192&o)&&128===(192&s)&&(l=(15&c)<<18|(63&a)<<12|(63&o)<<6|63&s,l>65535&&l<1114112&&(u=l))}null===u?(u=65533,d=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|1023&u),i.push(u),r+=d}return z(i)}t.Buffer=c,t.SlowBuffer=b,t.INSPECT_MAX_BYTES=50,c.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:o(),t.kMaxLength=s(),c.poolSize=8192,c._augment=function(e){return e.__proto__=c.prototype,e},c.from=function(e,t,n){return u(null,e,t,n)},c.TYPED_ARRAY_SUPPORT&&(c.prototype.__proto__=Uint8Array.prototype,c.__proto__=Uint8Array,"undefined"!==typeof Symbol&&Symbol.species&&c[Symbol.species]===c&&Object.defineProperty(c,Symbol.species,{value:null,configurable:!0})),c.alloc=function(e,t,n){return f(null,e,t,n)},c.allocUnsafe=function(e){return p(null,e)},c.allocUnsafeSlow=function(e){return p(null,e)},c.isBuffer=function(e){return!(null==e||!e._isBuffer)},c.compare=function(e,t){if(!c.isBuffer(e)||!c.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var n=e.length,i=t.length,r=0,a=Math.min(n,i);r<a;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,t){if(!a(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return c.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var i=c.allocUnsafe(t),r=0;for(n=0;n<e.length;++n){var o=e[n];if(!c.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(i,r),r+=o.length}return i},c.byteLength=w,c.prototype._isBuffer=!0,c.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)k(this,t,t+1);return this},c.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)k(this,t,t+3),k(this,t+1,t+2);return this},c.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)k(this,t,t+7),k(this,t+1,t+6),k(this,t+2,t+5),k(this,t+3,t+4);return this},c.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?D(this,0,e):x.apply(this,arguments)},c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===c.compare(this,e)},c.prototype.inspect=function(){var e="",n=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(e+=" ... ")),"<Buffer "+e+">"},c.prototype.compare=function(e,t,n,i,r){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,i>>>=0,r>>>=0,this===e)return 0;for(var a=r-i,o=n-t,s=Math.min(a,o),l=this.slice(i,r),u=e.slice(t,n),d=0;d<s;++d)if(l[d]!==u[d]){a=l[d],o=u[d];break}return a<o?-1:o<a?1:0},c.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},c.prototype.indexOf=function(e,t,n){return _(this,e,t,n,!0)},c.prototype.lastIndexOf=function(e,t,n){return _(this,e,t,n,!1)},c.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"===typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(n)?(n|=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}var r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var a=!1;;)switch(i){case"hex":return S(this,e,t,n);case"utf8":case"utf-8":return T(this,e,t,n);case"ascii":return E(this,e,t,n);case"latin1":case"binary":return A(this,e,t,n);case"base64":return M(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return N(this,e,t,n);default:if(a)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),a=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var L=4096;function z(e){var t=e.length;if(t<=L)return String.fromCharCode.apply(String,e);var n="",i=0;while(i<t)n+=String.fromCharCode.apply(String,e.slice(i,i+=L));return n}function P(e,t,n){var i="";n=Math.min(e.length,n);for(var r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function F(e,t,n){var i="";n=Math.min(e.length,n);for(var r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function I(e,t,n){var i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);for(var r="",a=t;a<n;++a)r+=K(e[a]);return r}function j(e,t,n){for(var i=e.slice(t,n),r="",a=0;a<i.length;a+=2)r+=String.fromCharCode(i[a]+256*i[a+1]);return r}function R(e,t,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function $(e,t,n,i,r,a){if(!c.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<a)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function q(e,t,n,i){t<0&&(t=65535+t+1);for(var r=0,a=Math.min(e.length-n,2);r<a;++r)e[n+r]=(t&255<<8*(i?r:1-r))>>>8*(i?r:1-r)}function B(e,t,n,i){t<0&&(t=4294967295+t+1);for(var r=0,a=Math.min(e.length-n,4);r<a;++r)e[n+r]=t>>>8*(i?r:3-r)&255}function U(e,t,n,i,r,a){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function H(e,t,n,i,a){return a||U(e,t,n,4,34028234663852886e22,-34028234663852886e22),r.write(e,t,n,i,23,4),n+4}function W(e,t,n,i,a){return a||U(e,t,n,8,17976931348623157e292,-17976931348623157e292),r.write(e,t,n,i,52,8),n+8}c.prototype.slice=function(e,t){var n,i=this.length;if(e=~~e,t=void 0===t?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e),c.TYPED_ARRAY_SUPPORT)n=this.subarray(e,t),n.__proto__=c.prototype;else{var r=t-e;n=new c(r,void 0);for(var a=0;a<r;++a)n[a]=this[a+e]}return n},c.prototype.readUIntLE=function(e,t,n){e|=0,t|=0,n||R(e,t,this.length);var i=this[e],r=1,a=0;while(++a<t&&(r*=256))i+=this[e+a]*r;return i},c.prototype.readUIntBE=function(e,t,n){e|=0,t|=0,n||R(e,t,this.length);var i=this[e+--t],r=1;while(t>0&&(r*=256))i+=this[e+--t]*r;return i},c.prototype.readUInt8=function(e,t){return t||R(e,1,this.length),this[e]},c.prototype.readUInt16LE=function(e,t){return t||R(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUInt16BE=function(e,t){return t||R(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUInt32LE=function(e,t){return t||R(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},c.prototype.readUInt32BE=function(e,t){return t||R(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readIntLE=function(e,t,n){e|=0,t|=0,n||R(e,t,this.length);var i=this[e],r=1,a=0;while(++a<t&&(r*=256))i+=this[e+a]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},c.prototype.readIntBE=function(e,t,n){e|=0,t|=0,n||R(e,t,this.length);var i=t,r=1,a=this[e+--i];while(i>0&&(r*=256))a+=this[e+--i]*r;return r*=128,a>=r&&(a-=Math.pow(2,8*t)),a},c.prototype.readInt8=function(e,t){return t||R(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},c.prototype.readInt16LE=function(e,t){t||R(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt16BE=function(e,t){t||R(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt32LE=function(e,t){return t||R(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,t){return t||R(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readFloatLE=function(e,t){return t||R(e,4,this.length),r.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,t){return t||R(e,4,this.length),r.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,t){return t||R(e,8,this.length),r.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,t){return t||R(e,8,this.length),r.read(this,e,!1,52,8)},c.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t|=0,n|=0,!i){var r=Math.pow(2,8*n)-1;$(this,e,t,n,r,0)}var a=1,o=0;this[t]=255&e;while(++o<n&&(a*=256))this[t+o]=e/a&255;return t+n},c.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t|=0,n|=0,!i){var r=Math.pow(2,8*n)-1;$(this,e,t,n,r,0)}var a=n-1,o=1;this[t+a]=255&e;while(--a>=0&&(o*=256))this[t+a]=e/o&255;return t+n},c.prototype.writeUInt8=function(e,t,n){return e=+e,t|=0,n||$(this,e,t,1,255,0),c.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},c.prototype.writeUInt16LE=function(e,t,n){return e=+e,t|=0,n||$(this,e,t,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):q(this,e,t,!0),t+2},c.prototype.writeUInt16BE=function(e,t,n){return e=+e,t|=0,n||$(this,e,t,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):q(this,e,t,!1),t+2},c.prototype.writeUInt32LE=function(e,t,n){return e=+e,t|=0,n||$(this,e,t,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):B(this,e,t,!0),t+4},c.prototype.writeUInt32BE=function(e,t,n){return e=+e,t|=0,n||$(this,e,t,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):B(this,e,t,!1),t+4},c.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t|=0,!i){var r=Math.pow(2,8*n-1);$(this,e,t,n,r-1,-r)}var a=0,o=1,s=0;this[t]=255&e;while(++a<n&&(o*=256))e<0&&0===s&&0!==this[t+a-1]&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+n},c.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t|=0,!i){var r=Math.pow(2,8*n-1);$(this,e,t,n,r-1,-r)}var a=n-1,o=1,s=0;this[t+a]=255&e;while(--a>=0&&(o*=256))e<0&&0===s&&0!==this[t+a+1]&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+n},c.prototype.writeInt8=function(e,t,n){return e=+e,t|=0,n||$(this,e,t,1,127,-128),c.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},c.prototype.writeInt16LE=function(e,t,n){return e=+e,t|=0,n||$(this,e,t,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):q(this,e,t,!0),t+2},c.prototype.writeInt16BE=function(e,t,n){return e=+e,t|=0,n||$(this,e,t,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):q(this,e,t,!1),t+2},c.prototype.writeInt32LE=function(e,t,n){return e=+e,t|=0,n||$(this,e,t,4,2147483647,-2147483648),c.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):B(this,e,t,!0),t+4},c.prototype.writeInt32BE=function(e,t,n){return e=+e,t|=0,n||$(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):B(this,e,t,!1),t+4},c.prototype.writeFloatLE=function(e,t,n){return H(this,e,t,!0,n)},c.prototype.writeFloatBE=function(e,t,n){return H(this,e,t,!1,n)},c.prototype.writeDoubleLE=function(e,t,n){return W(this,e,t,!0,n)},c.prototype.writeDoubleBE=function(e,t,n){return W(this,e,t,!1,n)},c.prototype.copy=function(e,t,n,i){if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);var r,a=i-n;if(this===e&&n<t&&t<i)for(r=a-1;r>=0;--r)e[r+t]=this[r+n];else if(a<1e3||!c.TYPED_ARRAY_SUPPORT)for(r=0;r<a;++r)e[r+t]=this[r+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+a),t);return a},c.prototype.fill=function(e,t,n,i){if("string"===typeof e){if("string"===typeof t?(i=t,t=0,n=this.length):"string"===typeof n&&(i=n,n=this.length),1===e.length){var r=e.charCodeAt(0);r<256&&(e=r)}if(void 0!==i&&"string"!==typeof i)throw new TypeError("encoding must be a string");if("string"===typeof i&&!c.isEncoding(i))throw new TypeError("Unknown encoding: "+i)}else"number"===typeof e&&(e&=255);if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var a;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"===typeof e)for(a=t;a<n;++a)this[a]=e;else{var o=c.isBuffer(e)?e:X(new c(e,i).toString()),s=o.length;for(a=0;a<n-t;++a)this[a+t]=o[a%s]}return this};var V=/[^+\/0-9A-Za-z-_]/g;function Y(e){if(e=G(e).replace(V,""),e.length<2)return"";while(e.length%4!==0)e+="=";return e}function G(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function K(e){return e<16?"0"+e.toString(16):e.toString(16)}function X(e,t){var n;t=t||1/0;for(var i=e.length,r=null,a=[],o=0;o<i;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&a.push(239,191,189);continue}if(o+1===i){(t-=3)>-1&&a.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&a.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&a.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;a.push(n)}else if(n<2048){if((t-=2)<0)break;a.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;a.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;a.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return a}function Z(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}function Q(e,t){for(var n,i,r,a=[],o=0;o<e.length;++o){if((t-=2)<0)break;n=e.charCodeAt(o),i=n>>8,r=n%256,a.push(r),a.push(i)}return a}function J(e){return i.toByteArray(Y(e))}function ee(e,t,n,i){for(var r=0;r<i;++r){if(r+n>=t.length||r>=e.length)break;t[r+n]=e[r]}return r}function te(e){return e!==e}}).call(this,n("c8ba"))},b64b:function(e,t,n){var i=n("23e7"),r=n("7b0b"),a=n("df75"),o=n("d039"),s=o((function(){a(1)}));i({target:"Object",stat:!0,forced:s},{keys:function(e){return a(r(e))}})},b65f:function(e,t,n){var i=n("23e7"),r=Math.ceil,a=Math.floor;i({target:"Math",stat:!0},{trunc:function(e){return(e>0?a:r)(e)}})},b680:function(e,t,n){"use strict";var i=n("23e7"),r=n("a691"),a=n("408a"),o=n("1148"),s=n("d039"),l=1..toFixed,c=Math.floor,u=function(e,t,n){return 0===t?n:t%2===1?u(e,t-1,n*e):u(e*e,t/2,n)},d=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},f=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}));i({target:"Number",proto:!0,forced:f},{toFixed:function(e){var t,n,i,s,l=a(this),f=r(e),p=[0,0,0,0,0,0],h="",m="0",g=function(e,t){var n=-1,i=t;while(++n<6)i+=e*p[n],p[n]=i%1e7,i=c(i/1e7)},v=function(e){var t=6,n=0;while(--t>=0)n+=p[t],p[t]=c(n/e),n=n%e*1e7},y=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==p[e]){var n=String(p[e]);t=""===t?n:t+o.call("0",7-n.length)+n}return t};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(h="-",l=-l),l>1e-21)if(t=d(l*u(2,69,1))-69,n=t<0?l*u(2,-t,1):l/u(2,t,1),n*=4503599627370496,t=52-t,t>0){g(0,n),i=f;while(i>=7)g(1e7,0),i-=7;g(u(10,i,1),0),i=t-1;while(i>=23)v(1<<23),i-=23;v(1<<i),g(1,1),v(2),m=y()}else g(0,n),g(1<<-t,0),m=y()+o.call("0",f);return f>0?(s=m.length,m=h+(s<=f?"0."+o.call("0",f-s)+m:m.slice(0,s-f)+"."+m.slice(s-f))):m=h+m,m}})},b727:function(e,t,n){var i=n("0366"),r=n("44ad"),a=n("7b0b"),o=n("50c4"),s=n("65f0"),l=[].push,c=function(e){var t=1==e,n=2==e,c=3==e,u=4==e,d=6==e,f=5==e||d;return function(p,h,m,g){for(var v,y,b=a(p),w=r(b),x=i(h,m,3),k=o(w.length),_=0,C=g||s,S=t?C(p,k):n?C(p,0):void 0;k>_;_++)if((f||_ in w)&&(v=w[_],y=x(v,_,b),e))if(t)S[_]=y;else if(y)switch(e){case 3:return!0;case 5:return v;case 6:return _;case 2:l.call(S,v)}else if(u)return!1;return d?-1:c||u?u:S}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},b8bf:function(e,t,n){var i=n("23e7"),r=n("83ab"),a=n("7c73");i({target:"Object",stat:!0,sham:!r},{create:a})},b94d:function(e,t,n){"use strict";t["a"]={computed:{lang:function(){return Object.prototype.hasOwnProperty.call(this.$store.state.fm.settings.translations,this.$store.state.fm.settings.lang)?this.$store.state.fm.settings.translations[this.$store.state.fm.settings.lang]:this.$store.state.fm.settings.translations.en}}}},baa5:function(e,t,n){var i=n("23e7"),r=n("e58c");i({target:"Array",proto:!0,forced:r!==[].lastIndexOf},{lastIndexOf:r})},bab4:function(e,t,n){
/*!
 * Cropper.js v1.5.9
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2020-09-10T13:16:26.743Z
 */
//# sourceMappingURL=file-manager.js.map