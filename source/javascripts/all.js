/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-video-mq-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(m.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return w("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c};for(var H in q)z(q,H)&&(v=H.toLowerCase(),e[v]=q[H](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.mq=x,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};



/*!
  * =============================================================
  * Ender: open module JavaScript framework (https://ender.no.de)
  * Build: ender build jeesh reqwest
  * =============================================================
  */


/*!
  * Ender: open module JavaScript framework (client-lib)
  * copyright Dustin Diaz & Jacob Thornton 2011 (@ded @fat)
  * http://ender.no.de
  * License MIT
  */
!function(a){function d(a){var c=b[a]||window[a];if(!c)throw new Error("Requested module '"+a+"' has not been defined.");return c}function e(a,c){return b[a]=c}function f(a,b){for(var c in b)c!="noConflict"&&c!="_VERSION"&&(a[c]=b[c]);return a}function g(a,b,c){return h._select&&(typeof a=="string"||a.nodeName||a.length&&"item"in a||a==window)?(c=h._select(a,b),c.selector=a):c=isFinite(a.length)?a:[a],f(c,g)}function h(a,b){return g(a,b)}a.global=a;var b={},c=a.$;a.provide=e,a.require=d,f(h,{_VERSION:"0.3.4",fn:a.$&&a.$.fn||{},ender:function(a,b){f(b?g:h,a)},_select:function(a,b){return(b||document).querySelectorAll(a)}}),f(g,{forEach:function(a,b,c){for(c=0,l=this.length;c<l;++c)c in this&&a.call(b||this[c],this[c],c,this);return this},$:h}),h.noConflict=function(){return a.$=c,this},typeof module!="undefined"&&module.exports&&(module.exports=h),a.ender=a.$=a.ender||h}(this),!function(){var module={exports:{}},exports=module.exports;
/*!
    * Reqwest! A general purpose XHR connection manager
    * (c) Dustin Diaz 2011
    * https://github.com/ded/reqwest
    * license MIT
    */
!function(a,b){typeof define=="function"?define(b):typeof module!="undefined"?module.exports=b():this[a]=b()}("reqwest",function(){function handleReadyState(a,b,c){return function(){a&&a[readyState]==4&&(twoHundo.test(a.status)?b(a):c(a))}}function setHeaders(a,b){var c=b.headers||{};c.Accept=c.Accept||"text/javascript, text/html, application/xml, text/xml, */*",b.crossOrigin||(c["X-Requested-With"]=c["X-Requested-With"]||"XMLHttpRequest"),c[contentType]=c[contentType]||"application/x-www-form-urlencoded";for(var d in c)c.hasOwnProperty(d)&&a.setRequestHeader(d,c[d])}function getCallbackName(a,b){var c=a.jsonpCallback||"callback";if(a.url.slice(-(c.length+2))==c+"=?"){var d="reqwest_"+b;return a.url=a.url.substr(0,a.url.length-1)+d,d}var e=new RegExp(c+"=([\\w]+)");return a.url.match(e)[1]}function generalCallback(a){lastValue=a}function getRequest(a,b,c){if(a.type!="jsonp"){var g=xhr(),h=(a.method||"GET").toUpperCase(),i=typeof a=="string"?a:a.url,j=a.processData!==!1&&a.data&&typeof a.data!="string"?reqwest.toQueryString(a.data):a.data||null;return h=="GET"&&j&&j!==""&&(i+=(/\?/.test(i)?"&":"?")+j)&&(j=null),g.open(h,i,!0),setHeaders(g,a),g.onreadystatechange=handleReadyState(g,b,c),a.before&&a.before(g),g.send(j),g}var d=doc.createElement("script"),e=0,f=uniqid++;win[getCallbackName(a,f)]=generalCallback,d.type="text/javascript",d.src=a.url,d.async=!0,typeof d.onreadystatechange!="undefined"&&(d.event="onclick",d.htmlFor=d.id="_reqwest_"+f),d.onload=d.onreadystatechange=function(){if(d[readyState]&&d[readyState]!=="complete"&&d[readyState]!=="loaded"||e)return!1;d.onload=d.onreadystatechange=null,d.onclick&&d.onclick(),a.success&&a.success(lastValue),lastValue=undefined,head.removeChild(d),e=1},head.appendChild(d)}function Reqwest(a,b){this.o=a,this.fn=b,init.apply(this,arguments)}function setType(a){return/\.json$/.test(a)?"json":/\.jsonp$/.test(a)?"jsonp":/\.js$/.test(a)?"js":/\.html?$/.test(a)?"html":/\.xml$/.test(a)?"xml":"js"}function init(o,fn){function complete(a){o.timeout&&clearTimeout(self.timeout),self.timeout=null,o.complete&&o.complete(a)}function success(resp){var r=resp.responseText;if(r)switch(type){case"json":try{resp=win.JSON?win.JSON.parse(r):eval("("+r+")")}catch(err){return error(resp,"Could not parse JSON in response",err)}break;case"js":resp=eval(r);break;case"html":resp=r}fn(resp),o.success&&o.success(resp),complete(resp)}function error(a,b,c){o.error&&o.error(a,b,c),complete(a)}this.url=typeof o=="string"?o:o.url,this.timeout=null;var type=o.type||setType(this.url),self=this;fn=fn||function(){},o.timeout&&(this.timeout=setTimeout(function(){self.abort()},o.timeout)),this.request=getRequest(o,success,error)}function reqwest(a,b){return new Reqwest(a,b)}function normalize(a){return a?a.replace(/\r?\n/g,"\r\n"):""}function serial(a,b){var c=a.name,d=a.tagName.toLowerCase(),e;if(a.disabled||!c)return;switch(d){case"input":if(!/reset|button|image|file/i.test(a.type)){var f=/checkbox/i.test(a.type),g=/radio/i.test(a.type),h=a.value;(!f&&!g||a.checked)&&b(c,normalize(f&&h===""?"on":h))}break;case"textarea":b(c,normalize(a.value));break;case"select":if(a.type.toLowerCase()==="select-one")e=a.selectedIndex<0?null:a.options[a.selectedIndex],e&&!e.disabled&&b(c,normalize(e.value||e.text));else for(var i=0;a.length&&i<a.length;i++)e=a.options[i],e.selected&&!e.disabled&&b(c,normalize(e.value||e.text))}}function eachFormElement(){var a=this,b=function(b,c){for(var d=0;d<c.length;d++){var e=b[byTag](c[d]);for(var f=0;f<e.length;f++)serial(e[f],a)}};for(var c=0;c<arguments.length;c++){var d=arguments[c];/input|select|textarea/i.test(d.tagName)&&serial(d,a),b(d,["input","select","textarea"])}}function serializeQueryString(){return reqwest.toQueryString(reqwest.serializeArray.apply(null,arguments))}function serializeHash(){var a={};return eachFormElement.apply(function(b,c){b in a?(a[b]&&!isArray(a[b])&&(a[b]=[a[b]]),a[b].push(c)):a[b]=c},arguments),a}var context=this,win=window,doc=document,old=context.reqwest,twoHundo=/^20\d$/,byTag="getElementsByTagName",readyState="readyState",contentType="Content-Type",head=doc[byTag]("head")[0],uniqid=0,lastValue,xhr="XMLHttpRequest"in win?function(){return new XMLHttpRequest}:function(){return new ActiveXObject("Microsoft.XMLHTTP")};Reqwest.prototype={abort:function(){this.request.abort()},retry:function(){init.call(this,this.o,this.fn)}};var isArray=typeof Array.isArray=="function"?Array.isArray:function(a){return Object.prototype.toString.call(a)=="[object Array]"};return reqwest.serializeArray=function(){var a=[];return eachFormElement.apply(function(b,c){a.push({name:b,value:c})},arguments),a},reqwest.serialize=function(){if(arguments.length===0)return"";var a,b,c=Array.prototype.slice.call(arguments,0);return a=c.pop(),a&&a.nodeType&&c.push(a)&&(a=null),a&&(a=a.type),a=="map"?b=serializeHash:a=="array"?b=reqwest.serializeArray:b=serializeQueryString,b.apply(null,c)},reqwest.toQueryString=function(a){var b="",c,d=encodeURIComponent,e=function(a,c){b+=d(a)+"="+d(c)+"&"};if(isArray(a))for(c=0;a&&c<a.length;c++)e(a[c].name,a[c].value);else for(var f in a){if(!Object.hasOwnProperty.call(a,f))continue;var g=a[f];if(isArray(g))for(c=0;c<g.length;c++)e(f,g[c]);else e(f,a[f])}return b.replace(/&$/,"").replace(/%20/g,"+")},reqwest.noConflict=function(){return context.reqwest=old,this},reqwest}),provide("reqwest",module.exports),!function(a){var b=require("reqwest"),c=function(a){return function(){var c=(this&&this.length>0?this:[]).concat(Array.prototype.slice.call(arguments,0));return b[a].apply(null,c)}},d=c("serialize"),e=c("serializeArray");a.ender({ajax:b,serialize:d,serializeArray:e,toQueryString:b.toQueryString}),a.ender({serialize:d,serializeArray:e},!0)}(ender)}(),!function(){var a={exports:{}},b=a.exports;
/*!
    * bean.js - copyright Jacob Thornton 2011
    * https://github.com/fat/bean
    * MIT License
    * special thanks to:
    * dean edwards: http://dean.edwards.name/
    * dperini: https://github.com/dperini/nwevents
    * the entire mootools team: github.com/mootools/mootools-core
    */
!function(b,c){typeof define=="function"?define(c):typeof a!="undefined"?a.exports=c():this[b]=c()}("bean",function(){function F(a){var b=a.relatedTarget;return b?b!=this&&b.prefix!="xul"&&!/document/.test(this.toString())&&!p(this,b):b===null}var a=window,b=1,c={},d={},e=/over|out/,f=/[^\.]*(?=\..*)\.|.*/,g=/\..*/,h="addEventListener",i="attachEvent",j="removeEventListener",k="detachEvent",l=document||{},m=l.documentElement||{},n=m[h],o=n?h:i,p=function(a,b){var c=b.parentNode;while(c!==null){if(c==a)return!0;c=c.parentNode}},q=function(a,c){return a.__uid=c&&c+"::"+b++||a.__uid||b++},r=function(a){var b=q(a);return c[b]=c[b]||{}},s=n?function(a,b,c,d){a[d?h:j](b,c,!1)}:function(a,b,c,d,e){e&&d&&a["_on"+e]===null&&(a["_on"+e]=0),a[d?i:k]("on"+b,c)},t=function(b,c,d){return function(e){return e=D(e||((this.ownerDocument||this.document||this).parentWindow||a).event),c.apply(b,[e].concat(d))}},u=function(b,c,d,e,f){return function(g){if(e?e.apply(this,arguments):n?!0:g&&g.propertyName=="_on"+d||!g)g=g?D(g||((this.ownerDocument||this.document||this).parentWindow||a).event):null,c.apply(b,Array.prototype.slice.call(arguments,g?0:1).concat(f))}},v=function(a,b,c,e){var h=b.replace(g,""),i=r(a),j=i[h]||(i[h]={}),k=c,l=q(c,b.replace(f,""));if(j[l])return a;var m=G[h];m&&(c=m.condition?u(a,c,h,m.condition):c,h=m.base||h);var p=E[h];c=p?t(a,c,e):u(a,c,h,!1,e),p=n||p;if(h=="unload"){var v=c;c=function(){w(a,h,c)&&v()}}return a[o]&&s(a,p?h:"propertychange",c,!0,!p&&h),j[l]=c,c.__uid=l,c.__originalFn=k,h=="unload"?a:d[q(a)]=a},w=function(a,b,c){function l(b){c=j[k][b];if(!c)return;delete j[k][b];if(a[o]){k=G[k]?G[k].base:k;var d=n||E[k];s(a,d?k:"propertychange",c,!1,!d&&k)}}var d,e,h,i,j=r(a),k=b.replace(g,"");if(!j||!j[k])return a;e=b.replace(f,""),h=e?e.split("."):[c.__uid],l(e);for(i=h.length;i--;l(h[i]));return a},x=function(a,b,c){return function(d){var e=typeof a=="string"?c(a,this):a;for(var f=d.target;f&&f!=this;f=f.parentNode)for(var g=e.length;g--;)if(e[g]==f)return b.apply(f,arguments)}},y=function(a,b,c,d,e){if(typeof b=="object"&&!c)for(var f in b)b.hasOwnProperty(f)&&y(a,f,b[f]);else{var g=typeof c=="string",h=(g?c:b).split(" ");c=g?x(b,d,e):c;for(var i=h.length;i--;)v(a,h[i],c,Array.prototype.slice.call(arguments,g?4:3))}return a},z=function(a,b,c){var d,e,h,i,j,k=typeof b=="string",l=k&&b.replace(f,""),m=w,n=r(a);l=l&&l.split(".");if(k&&/\s/.test(b)){b=b.split(" "),j=b.length-1;while(z(a,b[j])&&j--);return a}i=k?b.replace(g,""):b;if(!n||l||k&&!n[i]){for(d in n)if(n.hasOwnProperty(d))for(j in n[d])for(e=l.length;e--;)n[d].hasOwnProperty(j)&&(new RegExp("^"+l[e]+"::\\d*(\\..*)?$")).test(j)&&m(a,[d,j].join("."));return a}if(typeof c=="function")m(a,i,c);else if(l)m(a,b);else{m=i?m:z,h=k&&i,i=i?c||n[i]||i:n;for(d in i)i.hasOwnProperty(d)&&(m(a,h||d,i[d]),delete i[d])}return a},A=function(a,b,c){var d,e,h,i,j=b.split(" ");for(h=j.length;h--;){b=j[h].replace(g,"");var k=E[b],l=j[h].replace(f,""),m=r(a)[b];if(l){l=l.split(".");for(e=l.length;e--;)for(i in m)m.hasOwnProperty(i)&&(new RegExp("^"+l[e]+"::\\d*(\\..*)?$")).test(i)&&m[i].apply(a,[!1].concat(c))}else if(!c&&a[o])B(k,b,a);else for(e in m)m.hasOwnProperty(e)&&m[e].apply(a,[!1].concat(c))}return a},B=n?function(b,c,d){evt=document.createEvent(b?"HTMLEvents":"UIEvents"),evt[b?"initEvent":"initUIEvent"](c,!0,!0,a,1),d.dispatchEvent(evt)}:function(a,b,c){a?c.fireEvent("on"+b,document.createEventObject()):c["_on"+b]++},C=function(a,b,c){var d=r(b),e,f,g=q(a);e=c?d[c]:d;for(f in e)e.hasOwnProperty(f)&&(c?y:C)(a,c||b,c?e[f].__originalFn:f);return a},D=function(a){var b={};if(!a)return b;var c=a.type,d=a.target||a.srcElement;b.preventDefault=D.preventDefault(a),b.stopPropagation=D.stopPropagation(a),b.target=d&&d.nodeType==3?d.parentNode:d;if(~c.indexOf("key"))b.keyCode=a.which||a.keyCode;else if(/click|mouse|menu/i.test(c)){b.rightClick=a.which==3||a.button==2,b.pos={x:0,y:0};if(a.pageX||a.pageY)b.clientX=a.pageX,b.clientY=a.pageY;else if(a.clientX||a.clientY)b.clientX=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,b.clientY=a.clientY+document.body.scrollTop+document.documentElement.scrollTop;e.test(c)&&(b.relatedTarget=a.relatedTarget||a[(c=="mouseover"?"from":"to")+"Element"])}for(var f in a)f in b||(b[f]=a[f]);return b};D.preventDefault=function(a){return function(){a.preventDefault?a.preventDefault():a.returnValue=!1}},D.stopPropagation=function(a){return function(){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0}};var E={click:1,dblclick:1,mouseup:1,mousedown:1,contextmenu:1,mousewheel:1,DOMMouseScroll:1,mouseover:1,mouseout:1,mousemove:1,selectstart:1,selectend:1,keydown:1,keypress:1,keyup:1,orientationchange:1,touchstart:1,touchmove:1,touchend:1,touchcancel:1,gesturestart:1,gesturechange:1,gestureend:1,focus:1,blur:1,change:1,reset:1,select:1,submit:1,load:1,unload:1,beforeunload:1,resize:1,move:1,DOMContentLoaded:1,readystatechange:1,error:1,abort:1,scroll:1},G={mouseenter:{base:"mouseover",condition:F},mouseleave:{base:"mouseout",condition:F},mousewheel:{base:/Firefox/.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel"}},H={add:y,remove:z,clone:C,fire:A},I=function(a){var b=z(a).__uid;b&&(delete d[b],delete c[b])};return a[i]&&y(a,"unload",function(){for(var b in d)d.hasOwnProperty(b)&&I(d[b]);a.CollectGarbage&&CollectGarbage()}),H.noConflict=function(){return context.bean=old,this},H}),provide("bean",a.exports),!function(a){var b=require("bean"),c=function(c,d,e){var f=d?[d]:[];return function(){for(var e,g=0,h=this.length;g<h;g++)e=[this[g]].concat(f,Array.prototype.slice.call(arguments,0)),e.length==4&&e.push(a),!arguments.length&&c=="add"&&d&&(c="fire"),b[c].apply(this,e);return this}},d=c("add"),e=c("remove"),f=c("fire"),g={on:d,addListener:d,bind:d,listen:d,delegate:d,unbind:e,unlisten:e,removeListener:e,undelegate:e,emit:f,trigger:f,cloneEvents:c("clone"),hover:function(a,c,d){for(d=this.length;d--;)b.add.call(this,this[d],"mouseenter",a),b.add.call(this,this[d],"mouseleave",c);return this}},h,i=["blur","change","click","dblclick","error","focus","focusin","focusout","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mouseout","mouseover","mouseup","mousemove","resize","scroll","select","submit","unload"];for(h=i.length;h--;)g[i[h]]=c("add",i[h]);a.ender(g,!0)}(ender)}(),!function(){var a={exports:{}},b=a.exports;
/*!
    * Bonzo: DOM Utility (c) Dustin Diaz 2011
    * https://github.com/ded/bonzo
    * License MIT
    */
!function(b,c){typeof define=="function"?define(c):typeof a!="undefined"?a.exports=c():this[b]=c()}("bonzo",function(){function x(a){return new RegExp("(^|\\s+)"+a+"(\\s+|$)")}function y(a,b,c){for(var d=0,e=a.length;d<e;d++)b.call(c||a[d],a[d],d,a);return a}function z(a){return a.replace(/-(.)/g,function(a,b){return b.toUpperCase()})}function A(a){return a&&a.nodeName&&a.nodeType==1}function B(a,b,c,d){for(d=0,j=a.length;d<j;++d)if(b.call(c,a[d],d,a))return!0;return!1}function D(a,b,c){var d=0,g=b||this,h=[],i=f&&typeof a=="string"&&a.charAt(0)!="<"?f(a):a;return y(J(i),function(a){y(g,function(b){var f=!b[e]||b[e]&&!b[e][e]?function(){var a=b.cloneNode(!0);return g.$&&g.cloneEvents&&g.$(a).cloneEvents(b),a}():b;c(a,f),h[d]=f,d++})},this),y(h,function(a,b){g[b]=a}),g.length=d,g}function E(a,b,c){var d=N(a),e=d.css("position"),f=d.offset(),g="relative",h=e==g,i=[parseInt(d.css("left"),10),parseInt(d.css("top"),10)];e=="static"&&(d.css("position",g),e=g),isNaN(i[0])&&(i[0]=h?0:a.offsetLeft),isNaN(i[1])&&(i[1]=h?0:a.offsetTop),b!=null&&(a.style.left=b-f.left+i[0]+q),c!=null&&(a.style.top=c-f.top+i[1]+q)}function F(a,b){return x(b).test(a.className)}function G(a,b){a.className=w(a.className+" "+b)}function H(a,b){a.className=w(a.className.replace(x(b)," "))}function I(a){this.length=0;if(a){a=typeof a!="string"&&!a.nodeType&&typeof a.length!="undefined"?a:[a],this.length=a.length;for(var b=0;b<a.length;b++)this[b]=a[b]}}function J(a){return typeof a=="string"?N.create(a):A(a)?[a]:a}function K(a,c,d){var e=this[0];return a==null&&c==null?(L(e)?M():{x:e.scrollLeft,y:e.scrollTop})[d]:(L(e)?b.scrollTo(a,c):(a!=null&&(e.scrollLeft=a),c!=null&&(e.scrollTop=c)),this)}function L(a){return a===b||/^(?:body|html)$/i.test(a.tagName)}function M(){return{x:b.pageXOffset||d.scrollLeft,y:b.pageYOffset||d.scrollTop}}function N(a,b){return new I(a,b)}var a=this,b=window,c=b.document,d=c.documentElement,e="parentNode",f=null,g=/^checked|value|selected$/,h=/select|fieldset|table|tbody|tfoot|td|tr|colgroup/i,i="table",k={thead:i,tbody:i,tfoot:i,tr:"tbody",th:"tr",td:"tr",fieldset:"form",option:"select"},l=/^checked|selected$/,m=/msie/i.test(navigator.userAgent),n=[],o=0,p=/^-?[\d\.]+$/,q="px",r="setAttribute",s="getAttribute",t=/(^\s*|\s*$)/g,u={lineHeight:1,zoom:1,zIndex:1,opacity:1},v=function(){var a=["webkitTransform","MozTransform","OTransform","msTransform","Transform"],b;for(b=0;b<a.length;b++)if(a[b]in c.createElement("a").style)return a[b]}(),w=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(t,"")},C=c.defaultView&&c.defaultView.getComputedStyle?function(a,b){b=b=="transform"?v:b,b=b=="transform-origin"?v+"Origin":b;var d=null;b=="float"&&(b="cssFloat");var e=c.defaultView.getComputedStyle(a,"");return e&&(d=e[z(b)]),a.style[b]||d}:m&&d.currentStyle?function(a,b){b=z(b),b=b=="float"?"styleFloat":b;if(b=="opacity"){var c=100;try{c=a.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(d){try{c=a.filters("alpha").opacity}catch(e){}}return c/100}var f=a.currentStyle?a.currentStyle[b]:null;return a.style[b]||f}:function(a,b){return a.style[z(b)]};I.prototype={get:function(a){return this[a]},each:function(a,b){return y(this,a,b)},map:function(a,b){var c=[],d,e;for(e=0;e<this.length;e++)d=a.call(this,this[e],e),b?b(d)&&c.push(d):c.push(d);return c},first:function(){return N(this[0])},last:function(){return N(this[this.length-1])},html:function(a,b){function f(b){while(b.firstChild)b.removeChild(b.firstChild);y(J(a),function(a){b.appendChild(a)})}var c=b?d.textContent===null?"innerText":"textContent":"innerHTML",e;return typeof a!="undefined"?this.each(function(b){(e=b.tagName.match(h))?f(b,e[0]):b[c]=a}):this[0]?this[0][c]:""},text:function(a){return this.html(a,1)},addClass:function(a){return this.each(function(b){F(b,a)||G(b,a)})},removeClass:function(a){return this.each(function(b){F(b,a)&&H(b,a)})},hasClass:function(a){return B(this,function(b){return F(b,a)})},toggleClass:function(a,b){return this.each(function(c){typeof b!="undefined"?b?G(c,a):H(c,a):F(c,a)?H(c,a):G(c,a)})},show:function(a){return this.each(function(b){b.style.display=a||""})},hide:function(a){return this.each(function(a){a.style.display="none"})},append:function(a){return this.each(function(b){y(J(a),function(a){b.appendChild(a)})})},prepend:function(a){return this.each(function(b){var c=b.firstChild;y(J(a),function(a){b.insertBefore(a,c)})})},appendTo:function(a,b){return D.call(this,a,b,function(a,b){a.appendChild(b)})},prependTo:function(a,b){return D.call(this,a,b,function(a,b){a.insertBefore(b,a.firstChild)})},next:function(){return this.related("nextSibling")},previous:function(){return this.related("previousSibling")},related:function(a){return this.map(function(b){b=b[a];while(b&&b.nodeType!==1)b=b[a];return b||0},function(a){return a})},before:function(a){return this.each(function(b){y(N.create(a),function(a){b[e].insertBefore(a,b)})})},after:function(a){return this.each(function(b){y(N.create(a),function(a){b[e].insertBefore(a,b.nextSibling)})})},insertBefore:function(a,b){return D.call(this,a,b,function(a,b){a[e].insertBefore(b,a)})},insertAfter:function(a,b){return D.call(this,a,b,function(a,b){var c=a.nextSibling;c?a[e].insertBefore(b,c):a[e].appendChild(b)})},replaceWith:function(a){return this.each(function(b){b.parentNode.replaceChild(N.create(a)[0],b)})},css:function(a,d,e){function g(a,b,c){for(var d in f)f.hasOwnProperty(d)&&(c=f[d],(b=z(d))&&p.test(c)&&!(b in u)&&(c+=q),b=b=="transform"?v:b,b=b=="transformOrigin"?v+"Origin":b,a.style[b]=c)}if(d===undefined&&typeof a=="string")return d=this[0],d?d==c||d==b?(e=d==c?N.doc():N.viewport(),a=="width"?e.width:a=="height"?e.height:""):C(d,a):null;var f=a;typeof a=="string"&&(f={},f[a]=d),m&&f.opacity&&(f.filter="alpha(opacity="+f.opacity*100+")",f.zoom=a.zoom||1,delete f.opacity);if(d=f["float"])m?f.styleFloat=d:f.cssFloat=d,delete f["float"];return this.each(g)},offset:function(a,b){if(typeof a=="number"||typeof b=="number")return this.each(function(c){E(c,a,b)});var c=this[0],d=c.offsetWidth,e=c.offsetHeight,f=c.offsetTop,g=c.offsetLeft;while(c=c.offsetParent)f+=c.offsetTop,g+=c.offsetLeft;return{top:f,left:g,height:e,width:d}},attr:function(a,b){var c=this[0];if(typeof a=="string"||a instanceof String)return typeof b=="undefined"?g.test(a)?l.test(a)&&typeof c[a]=="string"?!0:c[a]:c[s](a):this.each(function(c){g.test(a)?c[a]=b:c[r](a,b)});for(var d in a)a.hasOwnProperty(d)&&this.attr(d,a[d]);return this},val:function(a){return typeof a=="string"?this.attr("value",a):this[0].value},removeAttr:function(a){return this.each(function(b){l.test(a)?b[a]=!1:b.removeAttribute(a)})},data:function(a,b){var c=this[0];if(typeof b=="undefined"){c[s]("data-node-uid")||c[r]("data-node-uid",++o);var d=c[s]("data-node-uid");return n[d]||(n[d]={}),n[d][a]}return this.each(function(c){c[s]("data-node-uid")||c[r]("data-node-uid",++o);var d=c[s]("data-node-uid"),e=n[d]||(n[d]={});e[a]=b})},remove:function(){return this.each(function(a){a[e]&&a[e].removeChild(a)})},empty:function(){return this.each(function(a){while(a.firstChild)a.removeChild(a.firstChild)})},detach:function(){return this.map(function(a){return a[e].removeChild(a)})},scrollTop:function(a){return K.call(this,null,a,"y")},scrollLeft:function(a){return K.call(this,a,null,"x")},toggle:function(a){return this.each(function(a){a.style.display=a.offsetWidth||a.offsetHeight?"none":"block"}),a&&a(),this}},N.setQueryEngine=function(a){f=a,delete N.setQueryEngine},N.aug=function(a,b){for(var c in a)a.hasOwnProperty(c)&&((b||I.prototype)[c]=a[c])},N.create=function(a){return typeof a=="string"?function(){var b=/^<([^\s>]+)/.exec(a),d=c.createElement(b&&k[b[1].toLowerCase()]||"div"),e=[];d.innerHTML=a;var f=d.childNodes;d=d.firstChild,e.push(d);while(d=d.nextSibling)d.nodeType==1&&e.push(d);return e}():A(a)?[a.cloneNode(!0)]:[]},N.doc=function(){var a=this.viewport();return{width:Math.max(c.body.scrollWidth,d.scrollWidth,a.width),height:Math.max(c.body.scrollHeight,d.scrollHeight,a.height)}},N.firstChild=function(a){for(var b=a.childNodes,c=0,d=b&&b.length||0,e;c<d;c++)b[c].nodeType===1&&(e=b[d=c]);return e},N.viewport=function(){return{width:m?d.clientWidth:self.innerWidth,height:m?d.clientHeight:self.innerHeight}},N.isAncestor="compareDocumentPosition"in d?function(a,b){return(a.compareDocumentPosition(b)&16)==16}:"contains"in d?function(a,b){return a!==b&&a.contains(b)}:function(a,b){while(b=b[e])if(b===a)return!0;return!1};var O=a.bonzo;return N.noConflict=function(){return a.bonzo=O,this},N}),provide("bonzo",a.exports),!function(a){function c(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1}function d(a){var b=[],c,d;e:for(c=0;c<a.length;c++){for(d=0;d<b.length;d++)if(b[d]==a[c])continue e;b[b.length]=a[c]}return b}function e(a,b,c){return a?b.css(c,a):function(a){return a=parseInt(b.css(c),10),isNaN(a)?b[0]["offset"+c.replace(/^\w/,function(a){return a.toUpperCase()})]:a}()}var b=require("bonzo");b.setQueryEngine(a),a.ender(b),a.ender(b(),!0),a.ender({create:function(c){return a(b.create(c))}}),a.id=function(b){return a([document.getElementById(b)])},a.ender({parents:function(b,e){var f=a(b),g,h,i,j=[];for(g=0,h=this.length;g<h;g++){i=this[g];while(i=i.parentNode)if(~c(f,i)){j.push(i);if(e)break}}return a(d(j))},closest:function(a){return this.parents(a,!0)},first:function(){return a(this[0])},last:function(){return a(this[this.length-1])},next:function(){return a(b(this).next())},previous:function(){return a(b(this).previous())},appendTo:function(a){return b(this.selector).appendTo(a,this)},prependTo:function(a){return b(this.selector).prependTo(a,this)},insertAfter:function(a){return b(this.selector).insertAfter(a,this)},insertBefore:function(a){return b(this.selector).insertBefore(a,this)},siblings:function(){var b,c,d,e=[];for(b=0,c=this.length;b<c;b++){d=this[b];while(d=d.previousSibling)d.nodeType==1&&e.push(d);d=this[b];while(d=d.nextSibling)d.nodeType==1&&e.push(d)}return a(e)},children:function(){var c,e,f=[];for(c=0,l=this.length;c<l;c++){if(!(e=b.firstChild(this[c])))continue;f.push(e);while(e=e.nextSibling)e.nodeType==1&&f.push(e)}return a(d(f))},height:function(a){return e(a,this,"height")},width:function(a){return e(a,this,"width")}},!0)}(ender)}(),!function(){var a={exports:{}},b=a.exports;!function(b,c){typeof define=="function"?define(c):typeof a!="undefined"?a.exports=c():this[b]=this.domReady=c()}("domready",function(a){function l(a){k=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k=/^loade|c/.test(e.readyState);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),l()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e.readyState)&&(e.detachEvent(j,c),l())}),a=g?function(c){self!=top?k?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){k?a():b.push(a)}}),provide("domready",a.exports),!function(a){var b=require("domready");a.ender({domReady:b}),a.ender({ready:function(a){return b(a),this}},!0)}(ender)}(),!function(){var a={exports:{}},b=a.exports;
/*!
    * Qwery - A Blazing Fast query selector engine
    * https://github.com/ded/qwery
    * copyright Dustin Diaz & Jacob Thornton 2011
    * MIT License
    */
!function(b,c){typeof define=="function"?define(c):typeof a!="undefined"?a.exports=c():this[b]=c()}("qwery",function(){function M(){this.c={}}function R(a){l=[];for(e=0,h=a.length;e<h;e++)$(a[e])?l=l.concat(a[e]):l.push(a[e]);return l}function S(a){while(a=a.previousSibling)if(a.nodeType==1)break;return a}function T(a){return a.match(K)}function U(a,b,c,d,f,g,h,i,k,l,m){var n,o,p;if(b&&this.tagName.toLowerCase()!==b)return!1;if(c&&(n=c.match(v))&&n[1]!==this.id)return!1;if(c&&(q=c.match(w)))for(e=q.length;e--;){o=q[e].slice(1);if(!(N.g(o)||N.s(o,new RegExp("(^|\\s+)"+o+"(\\s+|$)"))).test(this.className))return!1}if(k&&ba.pseudos[k]&&!ba.pseudos[k](this,m))return!1;if(d&&!h){j=this.attributes;for(p in j)if(Object.prototype.hasOwnProperty.call(j,p)&&(j[p].name||p)==f)return this}return d&&!W(g,this.getAttribute(f)||"",h)?!1:this}function V(a){return O.g(a)||O.s(a,a.replace(E,"\\$1"))}function W(a,b,c){switch(a){case"=":return b==c;case"^=":return b.match(P.g("^="+c)||P.s("^="+c,new RegExp("^"+V(c))));case"$=":return b.match(P.g("$="+c)||P.s("$="+c,new RegExp(V(c)+"$")));case"*=":return b.match(P.g(c)||P.s(c,new RegExp(V(c))));case"~=":return b.match(P.g("~="+c)||P.s("~="+c,new RegExp("(?:^|\\s+)"+V(c)+"(?:\\s+|$)")));case"|=":return b.match(P.g("|="+c)||P.s("|="+c,new RegExp("^"+V(c)+"(-|$)")))}return 0}function X(a){var c=[],d=[],e,f=0,g,h,i,j,k,l,m,n,o,q,r,s=Q.g(a)||Q.s(a,a.split(J)),t=a.match(I),u;s=s.slice(0);if(!s.length)return c;k=s.pop(),n=s.length&&(i=s[s.length-1].match(x))?b.getElementById(i[1]):b;if(!n)return c;o=T(k),m=t&&/^[+~]$/.test(t[t.length-1])?function(a){while(n=n.nextSibling)n.nodeType==1&&(o[1]?o[1]==n.tagName.toLowerCase():1)&&a.push(n);return a}([]):n.getElementsByTagName(o[1]||"*");for(e=0,h=m.length;e<h;e++)if(q=U.apply(m[e],o))c[f++]=q;if(!s.length)return c;for(f=0,h=c.length,g=0;f<h;f++){j=c[f];for(e=s.length;e--;)while(j=L[t[e]](j,c[f]))if(p=U.apply(j,T(s[e])))break;p&&(d[g++]=c[f])}return d}function Y(a){return a&&a.nodeType&&(a.nodeType==1||a.nodeType==9)}function Z(a){var b=[],c,d;e:for(c=0;c<a.length;c++){for(d=0;d<b.length;d++)if(b[d]==a[c])continue e;b[b.length]=a[c]}return b}function $(a){return typeof a=="object"&&isFinite(a.length)}function _(a){return a?typeof a=="string"?ba(a)[0]:$(a)?a[0]:a:b}function ba(a,c){var d=_(c);return!d||!a?[]:a===window||Y(a)?!c||a!==window&&Y(d)&&bb(a,d)?[a]:[]:a&&$(a)?R(a):(i=a.match(x))?(n=b.getElementById(i[1]))?[n]:[]:(i=a.match(z))?R(d.getElementsByTagName(i[1])):bd(a,d)}var a=this,b=document,c=a.qwery,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u=b.documentElement,v=/#([\w\-]+)/,w=/\.[\w\-]+/g,x=/^#([\w\-]+$)/,y=/^\.([\w\-]+)$/,z=/^([\w\-]+)$/,A=/^([\w]+)?\.([\w\-]+)$/,B=/\s*([\s\+\~>])\s*/g,C=/[\s\>\+\~]/,D=/(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,E=/([.*+?\^=!:${}()|\[\]\/\\])/g,F=/^([a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/,G=/\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/,H=/:([\w\-]+)(\(['"]?([\s\w\+\-]+)['"]?\))?/,I=new RegExp("("+C.source+")"+D.source,"g"),J=new RegExp(C.source+D.source),K=new RegExp(F.source+"("+G.source+")?"+"("+H.source+")?"),L={" ":function(a){return a&&a!==u&&a.parentNode},">":function(a,b){return a&&a.parentNode==b.parentNode&&a.parentNode},"~":function(a){return a&&a.previousSibling},"+":function(a,b,c,d){return a?(c=S(a),d=S(b),c&&d&&c==d&&c):!1}};M.prototype={g:function(a){return this.c[a]||undefined},s:function(a,b){return this.c[a]=b,b}};var N=new M,O=new M,P=new M,Q=new M,bb="compareDocumentPosition"in u?function(a,b){return(b.compareDocumentPosition(a)&16)==16}:"contains"in u?function(a,c){return c=c==b||c==window?u:c,c!==a&&c.contains(a)}:function(a,b){while(a=a.parentNode)if(a===b)return 1;return 0},bc=function(){if(!b.querySelector||!b.querySelectorAll)return!1;try{return b.querySelectorAll(":nth-of-type(1)").length}catch(a){return!1}}(),bd=bc?function(a,c){return b.getElementsByClassName&&(i=a.match(y))?R(c.getElementsByClassName(i[1])):R(c.querySelectorAll(a))}:function(a,c){a=a.replace(B,"$1");var d=[],e,g,j=[],k;if(i=a.match(A)){s=c.getElementsByTagName(i[1]||"*"),l=N.g(i[2])||N.s(i[2],new RegExp("(^|\\s+)"+i[2]+"(\\s+|$)"));for(k=0,h=s.length,f=0;k<h;k++)l.test(s[k].className)&&(d[f++]=s[k]);return d}for(k=0,s=a.split(","),h=s.length;k<h;k++)j[k]=X(s[k]);for(k=0,h=j.length;k<h&&(g=j[k]);k++){var m=g;if(c!==b){m=[];for(f=0,i=g.length;f<i&&(e=g[f]);f++)bb(e,c)&&m.push(e)}d=d.concat(m)}return Z(d)};return ba.uniq=Z,ba.pseudos={},ba.noConflict=function(){return a.qwery=c,this},ba}),provide("qwery",a.exports),!function(a,b){function f(b,c){var d=/^\s*<([^\s>]+)\s*/.exec(b)[1],f=(c||a).createElement(e[d]||"div"),g=[];f.innerHTML=b;var h=f.childNodes;f=f.firstChild,f.nodeType==1&&g.push(f);while(f=f.nextSibling)f.nodeType==1&&g.push(f);return g}var c=require("qwery"),d="table",e={thead:d,tbody:d,tfoot:d,tr:"tbody",th:"tr",td:"tr",fieldset:"form",option:"select"};b._select=function(a,b){return/^\s*</.test(a)?f(a,b):c(a,b)},b.pseudos=c.pseudos,b.ender({find:function(a){var d=[],e,f,g,h,i;for(e=0,f=this.length;e<f;e++){i=c(a,this[e]);for(g=0,h=i.length;g<h;g++)d.push(i[g])}return b(c.uniq(d))},and:function(a){var c=b(a);for(var d=this.length,e=0,f=this.length+c.length;d<f;d++,e++)this[d]=c[e];return this}},!0)}(document,ender)}()

function getNav() {
  var mainNav = $('ul.main-navigation, ul[role=main-navigation]').before('<fieldset class="mobile-nav">')
  var mobileNav = $('fieldset.mobile-nav').append('<select>');
  mobileNav.find('select').append('<option value="">Navigate&hellip;</option>');
  var addOption = function(i, option) {
    mobileNav.find('select').append('<option value="' + this.href + '">&raquo; ' + $(this).text() + '</option>');
  }
  mainNav.find('a').each(addOption);
  $('ul.subscription a').each(addOption);
  mobileNav.find('select').bind('change', function(event) {
    if (event.target.value) { window.location.href = event.target.value; }
  });
}

function addSidebarToggler() {
  if($('body').hasClass('no-sidebar'))
    return;
  if(!$('body').hasClass('sidebar-footer')) {
    $('#content').append('<span class="toggle-sidebar"></span>');
    $('.toggle-sidebar').bind('click', function(e) {
      e.preventDefault();
      if ($('body').hasClass('collapse-sidebar')) {
        $('body').removeClass('collapse-sidebar');
        jQuery(window).trigger("resize");
        jQuery.cookie('sidebar_collapsed', "0", { expires: 7, path: '/', raw: true });
      } else {
        $('body').addClass('collapse-sidebar');
        jQuery(window).trigger("resize");
        jQuery.cookie('sidebar_collapsed', "1", { expires: 7, path: '/', raw: true });
      }
    });
  }
  var sections = $('aside.sidebar > section');
  if (sections.length > 1) {
    sections.each(function(index, section){
      if ((sections.length >= 3) && index % 3 === 0) {
        $(section).addClass("first");
      }
      var count = ((index +1) % 2) ? "odd" : "even";
      $(section).addClass(count);
    });
  }
  if (sections.length >= 3){ $('aside.sidebar').addClass('thirds'); }
}

function testFeatures() {
  var features = ['maskImage'];
  $(features).map(function(i, feature) {
    if (Modernizr.testAllProps(feature)) {
      $('html').addClass(feature);
    } else {
      $('html').addClass('no-'+feature);
    }
  });
  if ("placeholder" in document.createElement("input")) {
    $('html').addClass('placeholder');
  } else {
    $('html').addClass('no-placeholder');
  }
}

function addCodeLineNumbers() {
  if (navigator.appName === 'Microsoft Internet Explorer') { return; }
  $('div.gist-highlight').each(function(code) {
    var tableStart = '<table><tbody><tr><td class="gutter">',
        lineNumbers = '<pre class="line-numbers">',
        tableMiddle = '</pre></td><td class="code">',
        tableEnd = '</td></tr></tbody></table>',
        count = $('.line', code).length;
    for (var i=1;i<=count; i++) {
      lineNumbers += '<span class="line-number">'+i+'</span>\n';
    }
    var table = tableStart + lineNumbers + tableMiddle + '<pre>'+$('pre', code).html()+'</pre>' + tableEnd;
    $(code).html(table);
  });
}

function flashVideoFallback(){
  var flashplayerlocation = "/assets/jwplayer/player.swf",
      flashplayerskin = "/assets/jwplayer/glow/glow.xml";
  $('video').each(function(i, video){
    video = $(video);
    if (!Modernizr.video.h264 && swfobject.getFlashPlayerVersion() || window.location.hash.indexOf("flash-test") !== -1){
      video.children('source[src$=mp4]').first().map(i, function(source){
        var src = $(source).attr('src'),
            id = 'video_'+Math.round(1 + Math.random()*(100000)),
            width = video.attr('width'),
            height = parseInt(video.attr('height'), 10) + 30;
            video.after('<div class="flash-video"><div><div id='+id+'>');
        swfobject.embedSWF(flashplayerlocation, id, width, height + 30, "9.0.0",
          { file : src, image : video.attr('poster'), skin : flashplayerskin } ,
          { movie : src, wmode : "opaque", allowfullscreen : "true" }
        );
      });
      video.remove();
    }
  });
}

function wrapFlashVideos() {
  $('object').each(function(i, object) {
    if( $(object).find('param[name=movie]').length ){
      $(object).wrap('<div class="flash-video">')
    }
  });
  $('iframe[src*=vimeo],iframe[src*=youtube]').wrap('<div class="flash-video">')
}

function renderDeliciousLinks(items) {
  var output = "<ul>";
  for (var i=0,l=items.length; i<l; i++) {
    output += '<li><a href="' + items[i].u + '" title="Tags: ' + (items[i].t == "" ? "" : items[i].t.join(', ')) + '">' + items[i].d + '</a></li>';
  }
  output += "</ul>";
  $('#delicious').html(output);
}

$('document').ready(function() {
  testFeatures();
  wrapFlashVideos();
  flashVideoFallback();
  addCodeLineNumbers();
  getNav();
  addSidebarToggler();
});

// iOS scaling bug fix
// Rewritten version
// By @mathias, @cheeaun and @jdalton
// Source url: https://gist.github.com/901295
(function(doc) {
  var addEvent = 'addEventListener',
      type = 'gesturestart',
      qsa = 'querySelectorAll',
      scales = [1, 1],
      meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];
  function fix() {
    meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
    doc.removeEventListener(type, fix, true);
  }
  if ((meta = meta[meta.length - 1]) && addEvent in doc) {
    fix();
    scales = [0.25, 1.6];
    doc[addEvent](type, fix, true);
  }
}(document));

/*!	SWFObject v2.2 modified by Brandon Mathis to contain only what is necessary to dynamically embed flash objects
  * Uncompressed source in javascripts/libs/swfobject-dynamic.js
  * <http://code.google.com/p/swfobject/>
	released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){function s(a,b,d){var q,k=n(d);if(g.wk&&g.wk<312)return q;if(k){if(typeof a.id==l)a.id=d;if(g.ie&&g.win){var e="",c;for(c in a)if(a[c]!=Object.prototype[c])c.toLowerCase()=="data"?b.movie=a[c]:c.toLowerCase()=="styleclass"?e+=' class="'+a[c]+'"':c.toLowerCase()!="classid"&&(e+=" "+c+'="'+a[c]+'"');c="";for(var f in b)b[f]!=Object.prototype[f]&&(c+='<param name="'+f+'" value="'+b[f]+'" />');k.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+e+">"+c+
"</object>";q=n(a.id)}else{f=i.createElement(o);f.setAttribute("type",m);for(var h in a)a[h]!=Object.prototype[h]&&(h.toLowerCase()=="styleclass"?f.setAttribute("class",a[h]):h.toLowerCase()!="classid"&&f.setAttribute(h,a[h]));for(e in b)b[e]!=Object.prototype[e]&&e.toLowerCase()!="movie"&&(a=f,c=e,h=b[e],d=i.createElement("param"),d.setAttribute("name",c),d.setAttribute("value",h),a.appendChild(d));k.parentNode.replaceChild(f,k);q=f}}return q}function n(a){var b=null;try{b=i.getElementById(a)}catch(d){}return b}
function t(a){var b=g.pv,a=a.split(".");a[0]=parseInt(a[0],10);a[1]=parseInt(a[1],10)||0;a[2]=parseInt(a[2],10)||0;return b[0]>a[0]||b[0]==a[0]&&b[1]>a[1]||b[0]==a[0]&&b[1]==a[1]&&b[2]>=a[2]?!0:!1}function u(a){return/[\\\"<>\.;]/.exec(a)!=null&&typeof encodeURIComponent!=l?encodeURIComponent(a):a}var l="undefined",o="object",m="application/x-shockwave-flash",v=window,i=document,j=navigator,g=function(){var a=typeof i.getElementById!=l&&typeof i.getElementsByTagName!=l&&typeof i.createElement!=l,
b=j.userAgent.toLowerCase(),d=j.platform.toLowerCase(),g=d?/win/.test(d):/win/.test(b),d=d?/mac/.test(d):/mac/.test(b),b=/webkit/.test(b)?parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,k=!+"\u000b1",e=[0,0,0],c=null;if(typeof j.plugins!=l&&typeof j.plugins["Shockwave Flash"]==o){if((c=j.plugins["Shockwave Flash"].description)&&!(typeof j.mimeTypes!=l&&j.mimeTypes[m]&&!j.mimeTypes[m].enabledPlugin))k=!1,c=c.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),e[0]=parseInt(c.replace(/^(.*)\..*$/,"$1"),
10),e[1]=parseInt(c.replace(/^.*\.(.*)\s.*$/,"$1"),10),e[2]=/[a-zA-Z]/.test(c)?parseInt(c.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}else if(typeof v.ActiveXObject!=l)try{var f=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(f&&(c=f.GetVariable("$version")))k=!0,c=c.split(" ")[1].split(","),e=[parseInt(c[0],10),parseInt(c[1],10),parseInt(c[2],10)]}catch(h){}return{w3:a,pv:e,wk:b,ie:k,win:g,mac:d}}();return{embedSWF:function(a,b,d,i,k,e,c,f,h){var j={success:!1,id:b};if(g.w3&&!(g.wk&&g.wk<312)&&
a&&b&&d&&i&&k){d+="";i+="";var p={};if(f&&typeof f===o)for(var m in f)p[m]=f[m];p.data=a;p.width=d;p.height=i;a={};if(c&&typeof c===o)for(var n in c)a[n]=c[n];if(e&&typeof e===o)for(var r in e)typeof a.flashvars!=l?a.flashvars+="&"+r+"="+e[r]:a.flashvars=r+"="+e[r];if(t(k))b=s(p,a,b),j.success=!0,j.ref=b}h&&h(j)},ua:g,getFlashPlayerVersion:function(){return{major:g.pv[0],minor:g.pv[1],release:g.pv[2]}},hasFlashPlayerVersion:t,createSWF:function(a,b,d){if(g.w3)return s(a,b,d)},getQueryParamValue:function(a){var b=
i.location.search||i.location.hash;if(b){/\?/.test(b)&&(b=b.split("?")[1]);if(a==null)return u(b);for(var b=b.split("&"),d=0;d<b.length;d++)if(b[d].substring(0,b[d].indexOf("="))==a)return u(b[d].substring(b[d].indexOf("=")+1))}return""}}}();




/*!
  jQuery Wookmark plugin 0.5
  @name jquery.wookmark.js
  @author Christoph Ono (chri@sto.ph or @gbks)
  @version 0.5
  @date 3/19/2012
  @category jQuery plugin
  @copyright (c) 2009-2012 Christoph Ono (www.wookmark.com)
  @license Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*/
jQuery.fn.wookmark=function(a){if(!this.wookmarkOptions){this.wookmarkOptions=jQuery.extend({container:jQuery("body"),offset:2,autoResize:false,itemWidth:jQuery(this[0]).outerWidth(),resizeDelay:50},a)}else if(a){this.wookmarkOptions=jQuery.extend(this.wookmarkOptions,a)}if(!this.wookmarkColumns){this.wookmarkColumns=null;this.wookmarkContainerWidth=null}this.wookmarkLayout=function(){var a=this.wookmarkOptions.itemWidth+this.wookmarkOptions.offset;var b=this.wookmarkOptions.container.width();var c=Math.floor((b+this.wookmarkOptions.offset)/a);var d=Math.round((b-(c*a-this.wookmarkOptions.offset))/2);var e=0;if(this.wookmarkColumns!=null&&this.wookmarkColumns.length==c){e=this.wookmarkLayoutColumns(a,d)}else{e=this.wookmarkLayoutFull(a,c,d)}this.wookmarkOptions.container.css("height",e+"px")};this.wookmarkLayoutFull=function(a,b,c){var d=[];while(d.length<b){d.push(0)}this.wookmarkColumns=[];while(this.wookmarkColumns.length<b){this.wookmarkColumns.push([])}var e,f,g,h=0,i=0,j=this.length,k=null,l=null,m=0;for(;h<j;h++){e=jQuery(this[h]);k=null;l=0;for(i=0;i<b;i++){if(k==null||d[i]<k){k=d[i];l=i}}e.css({position:"absolute",top:k+"px",left:l*a+c+"px"});d[l]=k+e.outerHeight()+this.wookmarkOptions.offset;m=Math.max(m,d[l]);this.wookmarkColumns[l].push(e)}return m};this.wookmarkLayoutColumns=function(a,b){var c=[];while(c.length<this.wookmarkColumns.length){c.push(0)}var d=0,e=this.wookmarkColumns.length,f;var g=0,h,i;var j=0;for(;d<e;d++){f=this.wookmarkColumns[d];h=f.length;for(g=0;g<h;g++){i=f[g];i.css({left:d*a+b+"px",top:c[d]+"px"});c[d]+=i.outerHeight()+this.wookmarkOptions.offset;j=Math.max(j,c[d])}}return j};this.wookmarkResizeTimer=null;if(!this.wookmarkResizeMethod){this.wookmarkResizeMethod=null}if(this.wookmarkOptions.autoResize){this.wookmarkOnResize=function(a){if(this.wookmarkResizeTimer){clearTimeout(this.wookmarkResizeTimer)}this.wookmarkResizeTimer=setTimeout(jQuery.proxy(this.wookmarkLayout,this),this.wookmarkOptions.resizeDelay)};if(!this.wookmarkResizeMethod){this.wookmarkResizeMethod=jQuery.proxy(this.wookmarkOnResize,this)}jQuery(window).resize(this.wookmarkResizeMethod)}this.wookmarkClear=function(){if(this.wookmarkResizeTimer){clearTimeout(this.wookmarkResizeTimer);this.wookmarkResizeTimer=null}if(this.wookmarkResizeMethod){jQuery(window).unbind("resize",this.wookmarkResizeMethod)}};this.wookmarkLayout();this.show()}


jQuery.noConflict();jQuery(document).ready(function(){if(!jQuery('body').hasClass('no-sidebar')){var a=jQuery.cookie("sidebar_collapsed",{raw:true});if(a==="1"){jQuery("body").addClass("collapse-sidebar")}else{jQuery("body").removeClass("collapse-sidebar")}}if(/iPhone|iPod|Android|BlackBerry/i.test(navigator.userAgent))jQuery('#header_logo img').attr('src','http://img.gtww.net/static/s_header_44dl.png');});


jQuery(document).ready(
	function(){
		if(jQuery('.galleria')[0]){
			jQuery('.galleria,.galleria_container').css('height',600);
			Galleria.loadTheme('//cdnjs.cloudflare.com/ajax/libs/galleria/1.3.5/themes/classic/galleria.classic.min.js');
			Galleria.run('.galleria',{lightbox:true,showInfo:true});
		}
	}
);


jQuery(document).ready(function () {
    if (!jQuery('body').hasClass('no-sidebar') && jQuery('#wookmark').length) 
        jQuery("body").addClass("collapse-sidebar");

    var container = jQuery('#wookmark');
    if (container.length) {
        var items = jQuery('#tiles li');
        jQuery('a', items).addClass('gal').colorbox({
            rel:'gal',
            maxWidth:'80%',
            maxHeight:'90%'
        });
        jQuery('#tiles').imagesLoaded(function(){
            items.wookmark({
                autoResize:true,
		container:container,
		offset:4,
		itemWidth:200
	    });
            container.fadeIn();
        });
    }
});
