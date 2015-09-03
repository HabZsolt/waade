/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-hashchange-history-audio-video-input-inputtypes-localstorage-websockets-geolocation-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-css_mediaqueries-css_regions-css_supports-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("mediaqueries",Modernizr.mq("only all")),Modernizr.addTest("regions",function(){var a=Modernizr.prefixed("flowFrom"),b=Modernizr.prefixed("flowInto");if(!a||!b)return!1;var c=document.createElement("div"),d=document.createElement("div"),e=document.createElement("div"),f="modernizr_flow_for_regions_check";d.innerText="M",c.style.cssText="top: 150px; left: 150px; padding: 0px;",e.style.cssText="width: 50px; height: 50px; padding: 42px;",e.style[a]=f,c.appendChild(d),c.appendChild(e),document.documentElement.appendChild(c);var g,h,i=d.getBoundingClientRect();return d.style[b]=f,g=d.getBoundingClientRect(),h=g.left-i.left,document.documentElement.removeChild(c),d=e=c=undefined,h==42}),Modernizr.addTest("supports","CSSSupportsRule"in window);

//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
//# sourceMappingURL=underscore-min.map

!function(a,b,c){"use strict";var d=function(d,e){var f=!!b.getComputedStyle;f||(b.getComputedStyle=function(a){return this.el=a,this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;return"float"===b&&(b="styleFloat"),c.test(b)&&(b=b.replace(c,function(){return arguments[2].toUpperCase()})),a.currentStyle[b]?a.currentStyle[b]:null},this});var g,h,i,j,k,l,m=function(a,b,c,d){if("addEventListener"in a)try{a.addEventListener(b,c,d)}catch(e){if("object"!=typeof c||!c.handleEvent)throw e;a.addEventListener(b,function(a){c.handleEvent.call(c,a)},d)}else"attachEvent"in a&&("object"==typeof c&&c.handleEvent?a.attachEvent("on"+b,function(){c.handleEvent.call(c)}):a.attachEvent("on"+b,c))},n=function(a,b,c,d){if("removeEventListener"in a)try{a.removeEventListener(b,c,d)}catch(e){if("object"!=typeof c||!c.handleEvent)throw e;a.removeEventListener(b,function(a){c.handleEvent.call(c,a)},d)}else"detachEvent"in a&&("object"==typeof c&&c.handleEvent?a.detachEvent("on"+b,function(){c.handleEvent.call(c)}):a.detachEvent("on"+b,c))},o=function(a){if(a.children.length<1)throw new Error("The Nav container has no containing elements");for(var b=[],c=0;c<a.children.length;c++)1===a.children[c].nodeType&&b.push(a.children[c]);return b},p=function(a,b){for(var c in b)a.setAttribute(c,b[c])},q=function(a,b){0!==a.className.indexOf(b)&&(a.className+=" "+b,a.className=a.className.replace(/(^\s*)|(\s*$)/g,""))},r=function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ").replace(/(^\s*)|(\s*$)/g,"")},s=function(a,b,c){for(var d=0;d<a.length;d++)b.call(c,d,a[d])},t=a.createElement("style"),u=a.documentElement,v=function(b,c){var d;this.options={animate:!0,transition:284,label:"Menu",insert:"before",customToggle:"",closeOnNavClick:!1,openPos:"relative",navClass:"nav-collapse",navActiveClass:"js-nav-active",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(d in c)this.options[d]=c[d];if(q(u,this.options.jsClass),this.wrapperEl=b.replace("#",""),a.getElementById(this.wrapperEl))this.wrapper=a.getElementById(this.wrapperEl);else{if(!a.querySelector(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=a.querySelector(this.wrapperEl)}this.wrapper.inner=o(this.wrapper),h=this.options,g=this.wrapper,this._init(this)};return v.prototype={destroy:function(){this._removeStyles(),r(g,"closed"),r(g,"opened"),r(g,h.navClass),r(g,h.navClass+"-"+this.index),r(u,h.navActiveClass),g.removeAttribute("style"),g.removeAttribute("aria-hidden"),n(b,"resize",this,!1),n(a.body,"touchmove",this,!1),n(i,"touchstart",this,!1),n(i,"touchend",this,!1),n(i,"mouseup",this,!1),n(i,"keyup",this,!1),n(i,"click",this,!1),h.customToggle?i.removeAttribute("aria-hidden"):i.parentNode.removeChild(i)},toggle:function(){j===!0&&(l?this.close():this.open())},open:function(){l||(r(g,"closed"),q(g,"opened"),q(u,h.navActiveClass),q(i,"active"),g.style.position=h.openPos,p(g,{"aria-hidden":"false"}),l=!0,h.open())},close:function(){l&&(q(g,"closed"),r(g,"opened"),r(u,h.navActiveClass),r(i,"active"),p(g,{"aria-hidden":"true"}),h.animate?(j=!1,setTimeout(function(){g.style.position="absolute",j=!0},h.transition+10)):g.style.position="absolute",l=!1,h.close())},resize:function(){"none"!==b.getComputedStyle(i,null).getPropertyValue("display")?(k=!0,p(i,{"aria-hidden":"false"}),g.className.match(/(^|\s)closed(\s|$)/)&&(p(g,{"aria-hidden":"true"}),g.style.position="absolute"),this._createStyles(),this._calcHeight()):(k=!1,p(i,{"aria-hidden":"true"}),p(g,{"aria-hidden":"false"}),g.style.position=h.openPos,this._removeStyles())},handleEvent:function(a){var c=a||b.event;switch(c.type){case"touchstart":this._onTouchStart(c);break;case"touchmove":this._onTouchMove(c);break;case"touchend":case"mouseup":this._onTouchEnd(c);break;case"click":this._preventDefault(c);break;case"keyup":this._onKeyUp(c);break;case"resize":this.resize(c)}},_init:function(){this.index=c++,q(g,h.navClass),q(g,h.navClass+"-"+this.index),q(g,"closed"),j=!0,l=!1,this._closeOnNavClick(),this._createToggle(),this._transitions(),this.resize();var d=this;setTimeout(function(){d.resize()},20),m(b,"resize",this,!1),m(a.body,"touchmove",this,!1),m(i,"touchstart",this,!1),m(i,"touchend",this,!1),m(i,"mouseup",this,!1),m(i,"keyup",this,!1),m(i,"click",this,!1),h.init()},_createStyles:function(){t.parentNode||(t.type="text/css",a.getElementsByTagName("head")[0].appendChild(t))},_removeStyles:function(){t.parentNode&&t.parentNode.removeChild(t)},_createToggle:function(){if(h.customToggle){var b=h.customToggle.replace("#","");if(a.getElementById(b))i=a.getElementById(b);else{if(!a.querySelector(b))throw new Error("The custom nav toggle you are trying to select doesn't exist");i=a.querySelector(b)}}else{var c=a.createElement("a");c.innerHTML=h.label,p(c,{href:"#","class":"nav-toggle"}),"after"===h.insert?g.parentNode.insertBefore(c,g.nextSibling):g.parentNode.insertBefore(c,g),i=c}},_closeOnNavClick:function(){if(h.closeOnNavClick&&"querySelectorAll"in a){var b=g.querySelectorAll("a"),c=this;s(b,function(a){m(b[a],"click",function(){k&&c.toggle()},!1)})}},_preventDefault:function(a){a.preventDefault?(a.preventDefault(),a.stopPropagation()):a.returnValue=!1},_onTouchStart:function(b){b.stopPropagation(),"after"===h.insert&&q(a.body,"disable-pointer-events"),this.startX=b.touches[0].clientX,this.startY=b.touches[0].clientY,this.touchHasMoved=!1,n(i,"mouseup",this,!1)},_onTouchMove:function(a){(Math.abs(a.touches[0].clientX-this.startX)>10||Math.abs(a.touches[0].clientY-this.startY)>10)&&(this.touchHasMoved=!0)},_onTouchEnd:function(c){if(this._preventDefault(c),!this.touchHasMoved){if("touchend"===c.type)return this.toggle(),"after"===h.insert&&setTimeout(function(){r(a.body,"disable-pointer-events")},h.transition+300),void 0;var d=c||b.event;3!==d.which&&2!==d.button&&this.toggle()}},_onKeyUp:function(a){var c=a||b.event;13===c.keyCode&&this.toggle()},_transitions:function(){if(h.animate){var a=g.style,b="max-height "+h.transition+"ms";a.WebkitTransition=b,a.MozTransition=b,a.OTransition=b,a.transition=b}},_calcHeight:function(){for(var a=0,b=0;b<g.inner.length;b++)a+=g.inner[b].offsetHeight;var c="."+h.jsClass+" ."+h.navClass+"-"+this.index+".opened{max-height:"+a+"px !important}";t.styleSheet?t.styleSheet.cssText=c:t.innerHTML=c,c=""}},new v(d,e)};b.responsiveNav=d}(document,window,0);

/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);

/*
 * scrollNav
 * http://scrollnav.com
 *
 * Copyright (c) 2013 James Wilson
 * Licensed under the MIT license.
 */

(function($) {

  // Animate scrolling to section location
  var scroll_to = function(value, speed, offset, animated) {
    if ( $(value).length > 0 ) {
      var destination = $(value).offset().top;
      speed = animated ? speed : 0;

      $('html:not(:animated),body:not(:animated)')
        .animate({scrollTop: destination - offset }, speed );
    }
  };

  // Get url hash if one exists
  var get_hash = function() {
    return window.location.hash;
  };

  var S = {
    classes: {
      loading: 'sn-loading',
      failed: 'sn-failed',
      success: 'sn-active'
    },
    defaults: {
      sections: 'h2',
      subSections: false,
      sectionElem: 'section',
      className: 'scroll-nav',
      showHeadline: true,
      headlineText: 'Scroll To',
      showTopLink: true,
      topLinkText: 'Top',
      fixedMargin: 40,
      scrollOffset: 40,
      animated: true,
      speed: 500,
      insertLocation: 'insertBefore',
      arrowKeys: false,
      scrollToHash: true,
      onInit: null,
      onRender: null,
      onDestroy: null,
      onResetPos: null
    },
    _set_body_class: function(state) {
      // Set and swap our loading hooks to the body

      var $body = $('body');

      if (state === 'loading') {
        $body.addClass(S.classes.loading);
      } else if (state === 'success') {
        $body.removeClass(S.classes.loading).addClass(S.classes.success);
      } else {
        $body.removeClass(S.classes.loading).addClass(S.classes.failed);
      }
    },
    _find_sections: function($el) {
      // Find the html for each section

      var target_elems = S.settings.sections;
      var raw_html = [];

      if (S.settings.showTopLink) {
        var $firstElem = $el.children().first();

        if ( !$firstElem.is(target_elems) ) {
          raw_html.push( $firstElem.nextUntil(target_elems).andSelf() );
        }
      }

      $el.find(target_elems).each(function() {
        raw_html.push( $(this).nextUntil(target_elems).andSelf() );
      });

      S.sections = {
        raw: raw_html
      };
    },
    _setup_sections: function(sections) {
      // Wrap each section and add it's details to the section array

      var section_data = [];

      $(sections).each(function(i) {
        var sub_data      = [];
        var $this_section = $(this);
        var section_id    = 'scrollNav-' + (i + 1);
        var isFirst       = function() { return i === 0; };
        var hasHeading    = function() { return !$this_section.eq(0).is(S.settings.sections); };
        var text          = ( S.settings.showTopLink && isFirst() && hasHeading() ) ? S.settings.topLinkText : $this_section.filter(S.settings.sections).text();

        $this_section.wrapAll('<' + S.settings.sectionElem + ' id="' + section_id + '" class="' + S.settings.className + '__section" />');

        if (S.settings.subSections) {
          var $sub_sections  = $this_section.filter(S.settings.subSections);

          if ($sub_sections.length > 0) {
            $sub_sections.each(function(i) {
              var sub_id      = section_id + '-' + (i + 1);
              var sub_text    = $(this).text();
              var $this_sub   = $this_section.filter($(this).nextUntil($sub_sections).andSelf());

              $this_sub.wrapAll('<div id="' + sub_id + '" class="' + S.settings.className + '__sub-section" />');
              sub_data.push( {id: sub_id, text: sub_text} );
            });
          }
        }

        section_data.push( {id: section_id, text: text, sub_sections: sub_data} );
      });

      S.sections.data = section_data;
    },
    _tear_down_sections: function(sections) {
      $(sections).each(function() {
        var sub_sections = this.sub_sections;

        $('#' + this.id).children().unwrap();

        if (sub_sections.length > 0) {
          $(sub_sections).each(function() {
            $('#' + this.id).children().unwrap();
          });
        }
      });
    },
    _setup_nav: function(sections) {
    // Populate an ordered list from the section array we built

      var $headline = $('<span />', {'class': S.settings.className + '__heading', text: S.settings.headlineText});
      var $wrapper  = $('<div />', {'class': S.settings.className + '__wrapper'});
      var $nav      = $('<nav />', {'class': S.settings.className, 'role': 'navigation'});
      var $nav_list = $('<ol />', {'class': S.settings.className + '__list'});

      $.each(sections, function(i) {
        var $item     = (i === 0) ? $('<li />', {'class': S.settings.className + '__item active'}) : $('<li />', {'class': S.settings.className + '__item'});
        var $link     = $('<a />', {'href': '#' + this.id, 'class': S.settings.className + '__link', text: this.text});
        var $sub_nav_list;

        if (this.sub_sections.length > 0) {
          $item.addClass('is-parent-item');
          $sub_nav_list = $('<ol />', {'class': S.settings.className + '__sub-list'});

          $.each(this.sub_sections, function() {
            var $sub_item = $('<li />', {'class': S.settings.className + '__sub-item'});
            var $sub_link = $('<a />', {'href': '#' + this.id, 'class': S.settings.className + '__sub-link', text: this.text});

            $sub_nav_list.append( $sub_item.append($sub_link) );
          });
        }

        $nav_list.append( $item.append($link).append($sub_nav_list) );
      });

      if (S.settings.showHeadline) {
        $nav.append( $wrapper.append($headline).append($nav_list) );
      } else {
        $nav.append( $wrapper.append($nav_list) );
      }

      S.nav = $nav;
    },
    _insert_nav: function() {
      // Add the nav to our page

      var insert_location = S.settings.insertLocation;
      var $insert_target = S.settings.insertTarget;

      S.nav[insert_location]($insert_target);
    },
    _setup_pos: function() {
      // Find the offset positions of each section

      var $nav        = S.nav;
      var vp_height   = $(window).height();
      var nav_offset  = $nav.offset().top;

      var set_offset = function(section) {
        var $this_section  = $('#' + section.id);
        var this_height    = $this_section.height();

        section.top_offset    = $this_section.offset().top;
        section.bottom_offset = section.top_offset + this_height;
      };

      $.each(S.sections.data, function() {
        set_offset(this);

        $.each(this.sub_sections, function() {
          set_offset(this);
        });
      });

      S.dims = {
        vp_height:  vp_height,
        nav_offset: nav_offset
      };
    },
    _check_pos: function() {
      // Set nav to fixed after scrolling past the header and add an in-view class to any
      // sections currently within the bounds of our view and active class to the first
      // in-view section

      var $nav                = S.nav;
      var win_top             = $(window).scrollTop();
      var boundry_top         = win_top + S.settings.scrollOffset;
      var boundry_bottom      = win_top + S.dims.vp_height - S.settings.scrollOffset;
      var sections_active     = [];
      var sub_sections_active = [];

      if ( win_top > (S.dims.nav_offset - S.settings.fixedMargin) ) { $nav.addClass('fixed'); }
      else { $nav.removeClass('fixed'); }

      var in_view = function(section) {
        return (section.top_offset >= boundry_top && section.top_offset <= boundry_bottom) || (section.bottom_offset > boundry_top && section.bottom_offset < boundry_bottom) || (section.top_offset < boundry_top && section.bottom_offset > boundry_bottom);
      };

      $.each(S.sections.data, function() {
        if ( in_view(this) ) {
          sections_active.push(this);
        }
        $.each(this.sub_sections, function() {
          if ( in_view(this) ) {
            sub_sections_active.push(this);
          }
        });
      });

      $nav.find('.' + S.settings.className + '__item').removeClass('active').removeClass('in-view');
      $nav.find('.' + S.settings.className + '__sub-item').removeClass('active').removeClass('in-view');

      $.each(sections_active, function(i) {
        if (i === 0) {
          $nav.find('a[href="#' + this.id + '"]').parents('.' + S.settings.className + '__item').addClass('active').addClass('in-view');
        } else {
          $nav.find('a[href="#' + this.id + '"]').parents('.' + S.settings.className + '__item').addClass('in-view');
        }
      });
      S.sections.active = sections_active;

      $.each(sub_sections_active, function(i) {
        if (i === 0) {
          $nav.find('a[href="#' + this.id + '"]').parents('.' + S.settings.className + '__sub-item').addClass('active').addClass('in-view');
        } else {
          $nav.find('a[href="#' + this.id + '"]').parents('.' + S.settings.className + '__sub-item').addClass('in-view');
        }
      });
    },
    _init_scroll_listener: function() {
      // Set a scroll listener to update the fixed and active classes

      $(window).on('scroll.scrollNav', function() {
        S._check_pos();
      });
    },
    _rm_scroll_listeners: function() {
      $(window).off('scroll.scrollNav');
    },
    _init_resize_listener: function() {
      // Set a resize listener to update position values and the fixed and active classes

      $(window).on('resize.scrollNav', function() {
        S._setup_pos();
        S._check_pos();
      });
    },
    _rm_resize_listener: function() {
      $(window).off('resize.scrollNav');
    },
    _init_click_listener: function() {
      // Scroll to section on click

      $('.' + S.settings.className).find('a').on('click.scrollNav', function(e) {
        e.preventDefault();

        var value     = $(this).attr('href');
        var speed     = S.settings.speed;
        var offset    = S.settings.scrollOffset;
        var animated  = S.settings.animated;

        scroll_to(value, speed, offset, animated);
      });
    },
    _rm_click_listener: function() {
      $('.' + S.settings.className).find('a').off('click.scrollNav');
    },
    _init_keyboard_listener: function(sections) {
      // Scroll to section on arrow key press

      if (S.settings.arrowKeys) {
        $(document).on('keydown.scrollNav', function(e) {
          if (e.keyCode === 40 || e.keyCode === 38) {
            var findSection = function(key) {
              var i = 0;
              var l = sections.length;

              for (i; i < l; i++) {
                if (sections[i].id === S.sections.active[0].id) {
                  var array_offset  = (key === 40) ? i + 1 : i -1;
                  var id            = (sections[array_offset] === undefined) ? undefined : sections[array_offset].id;

                  return id;
                }
              }
            };

            var target_section = findSection(e.keyCode);

            if (target_section !== undefined) {
              e.preventDefault();

              var value     = '#' + target_section;
              var speed     = S.settings.speed;
              var offset    = S.settings.scrollOffset;
              var animated  = S.settings.animated;

              scroll_to(value, speed, offset, animated);
            }
          }
        });
      }
    },
    _rm_keyboard_listener: function() {
      $(document).off('keydown.scrollNav');
    },
    init: function(options) {
      return this.each(function() {
        var $el = $(this);

        // Merge default settings with user defined options
        S.settings = $.extend({}, S.defaults, options);

        // If the insert target isn't set, use the initialized element
        S.settings.insertTarget = S.settings.insertTarget ? $(S.settings.insertTarget) : $el;

        if ($el.length > 0) {
          // Initialize

          // Fire custom init callback
          if (S.settings.onInit) { S.settings.onInit.call(this); }

          S._set_body_class('loading');
          S._find_sections($el);

          if ( $el.find(S.settings.sections).length > 0 ) {
            // BUILD!!!!

            S._setup_sections(S.sections.raw);
            S._setup_nav(S.sections.data);

            if ( S.settings.insertTarget.length > 0 ) {
              //Add to page

              S._insert_nav();
              S._setup_pos();
              S._check_pos();
              S._init_scroll_listener();
              S._init_resize_listener();
              S._init_click_listener();
              S._init_keyboard_listener(S.sections.data);
              S._set_body_class('success');
              if (S.settings.scrollToHash){
                scroll_to( get_hash() );
              }

              // Fire custom render callback
              if (S.settings.onRender) { S.settings.onRender.call(this); }

            } else {
              console.log('Build failed, scrollNav could not find "' + S.settings.insertTarget + '"');
              S._set_body_class('failed');
            }

          } else {
            console.log('Build failed, scrollNav could not find any "' + S.settings.sections + 's" inside of "' + $el.selector + '"');
            S._set_body_class('failed');
          }

        } else {
          console.log('Build failed, scrollNav could not find "' + $el.selector + '"');
          S._set_body_class('failed');
        }
      });
    },
    destroy: function() {
      return this.each(function() {

        // Unbind event listeners
        S._rm_scroll_listeners();
        S._rm_resize_listener();
        S._rm_click_listener();
        S._rm_keyboard_listener();

        // Remove any of the loading hooks
        $('body').removeClass('sn-loading sn-active sn-failed');

        // Remove the nav from the dom
        $('.' + S.settings.className).remove();

        // Teardown sections
        S._tear_down_sections(S.sections.data);

        // Fire custom destroy callback
        if (S.settings.onDestroy) { S.settings.onDestroy.call(this); }

        // Remove the saved settings
        S.settings = [];
        S.sections = undefined;
      });
    },
    resetPos: function() {
      S._setup_pos();
      S._check_pos();

      // Fire custom reset position callback
      if (S.settings.onResetPos) { S.settings.onResetPos.call(this); }
    }
  };

  $.fn.scrollNav = function() {
    var options;
    var method  = arguments[0];

    if (S[method]) {
      // Method exists, so use it

      method  = S[method];
      options = Array.prototype.slice.call(arguments, 1);
    } else if (typeof(method) === 'object' || !method) {
      // No method passed, default to init

      method  = S.init;
      options = arguments;
    } else {
      // Method doesn't exist

      $.error( 'Method ' +  method + ' does not exist in the scrollNav plugin' );
      return this;
    }

    return method.apply(this, options);
  };
})(jQuery);

//Products

/*
 * Lazy Line Painter
 * SVG Stroke animation.
 *
 * https://github.com/camoconnell/lazy-line-painter
 * http://www.camoconnell.com
 *
 * Licensed under the MIT license.
 *
 */
(function(e){var g={init:function(a){return this.each(function(){var b=e(this),c=b.data("lazyLinePainter");b.addClass("lazy-line");if(!c){var c=e.extend({width:null,height:null,strokeWidth:2,strokeColor:"#000",strokeOverColor:null,strokeCap:"round",strokeJoin:"round",strokeOpacity:1,arrowEnd:"none",onComplete:null,onStart:null,delay:null,overrideKey:null,drawSequential:!0,speedMultiplier:1,reverse:!1,responsive:!1},a),d=c.overrideKey?c.overrideKey:b.attr("id").replace("#",""),f=c.svgData[d].dimensions.width,
l=c.svgData[d].dimensions.height;c.svgData=c.svgData[d].strokepath;null===c.width&&(c.width=f);null===c.height&&(c.height=l);c.responsive||b.css({width:c.width,height:c.height});d="0 0 "+f+" "+l;f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttributeNS(null,"viewBox",d);f.setAttribute("xmlns","http://www.w3.org/2000/svg");c.svg=e(f);b.append(c.svg);b.data("lazyLinePainter",c)}})},paint:function(){return this.each(function(){var a=e(this).data("lazyLinePainter"),b=function(){a.paths=
[];a.longestDuration=0;for(var b=a.playhead=0,d=0,f=0,d=0;d<a.svgData.length;d++)b=a.svgData[d].duration*a.speedMultiplier,f+=b;for(d=0;d<a.svgData.length;d++){var e=m(a,d),h=e.getTotalLength();e.style.strokeDasharray=h+" "+h;e.style.strokeDashoffset=h;e.style.display="block";e.getBoundingClientRect();b=a.svgData[d].duration*a.speedMultiplier;b>a.longestDuration&&(a.longestDuration=b);var g;g=a.reverse?f-=b:a.playhead;a.paths.push({duration:b,drawStartTime:g,path:e,length:h});a.playhead+=b}a.totalDuration=
a.drawSequential?a.playhead:a.longestDuration;a.rAF=requestAnimationFrame(function(b){k(b,a)});if(null!==a.onStart)a.onStart()};null===a.delay?b():setTimeout(b,a.delay)})},pauseResume:function(){return this.each(function(){var a=e(this).data("lazyLinePainter");a.paused?(a.paused=!1,requestAnimationFrame(function(b){n(b,a)})):(a.paused=!0,cancelAnimationFrame(a.rAF))})},erase:function(){return this.each(function(){var a=e(this).data("lazyLinePainter");a.startTime=null;a.elapsedTime=null;cancelAnimationFrame(a.rAF);
a.svg.empty()})},destroy:function(){return this.each(function(){var a=e(this);a.removeData("lazyLinePainter");a.remove()})}},n=function(a,b){b.startTime=a-b.elapsedTime;requestAnimationFrame(function(a){k(a,b)})},k=function(a,b){b.startTime||(b.startTime=a);b.elapsedTime=a-b.startTime;for(var c=0;c<b.paths.length;c++){var d;b.drawSequential?(d=b.elapsedTime-b.paths[c].drawStartTime,0>d&&(d=0)):d=b.elapsedTime;d<b.paths[c].duration&&0<d?(d=d/b.paths[c].duration*b.paths[c].length,b.paths[c].path.style.strokeDashoffset=
b.reverse||b.svgData[c].reverse?-b.paths[c].length+d:b.paths[c].length-d):d>b.paths[c].duration&&(b.paths[c].path.style.strokeDashoffset=0)}if(b.elapsedTime<b.totalDuration)b.rAF=requestAnimationFrame(function(a){k(a,b)});else if(null!==b.onComplete)b.onComplete()},m=function(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg","path"),d=e(c);a.svg.append(d);d.attr(p(a,a.svgData[b]));return c},p=function(a,b){return{d:b.path,stroke:b.strokeColor?b.strokeColor:a.strokeColor,"fill-opacity":0,
"stroke-opacity":b.strokeOpacity?b.strokeOpacity:a.strokeOpacity,"stroke-width":b.strokeWidth?b.strokeWidth:a.strokeWidth,"stroke-linecap":b.strokeCap?b.strokeCap:a.strokeCap,"stroke-linejoin":b.strokeJoin?b.strokeJoin:a.strokeJoin}};e.fn.lazylinepainter=function(a){if(g[a])return g[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof a&&a)console.log("opps - issue finding method");else return g.init.apply(this,arguments)}})(jQuery);

var DEBUG = true;
if(!DEBUG){
    if(!window.console) window.console = {};
    var methods = ["log", "debug", "warn", "info"];
    for(var i=0;i<methods.length;i++){
        console[methods[i]] = function(){};
    }
}

/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y }
}
// setting the viewport width
var viewport = updateViewportDimensions();

/*!
/**
 * Monkey patch jQuery 1.3.1+ to add support for setting or animating CSS
 * scale and rotation independently.
 * https://github.com/zachstronaut/jquery-animate-css-rotate-scale
 * Released under dual MIT/GPL license just like jQuery.
 * 2009-2012 Zachary Johnson www.zachstronaut.com
 */
(function ($) {
    // Updated 2010.11.06
    // Updated 2012.10.13 - Firefox 16 transform style returns a matrix rather than a string of transform functions.  This broke the features of this jQuery patch in Firefox 16.  It should be possible to parse the matrix for both scale and rotate (especially when scale is the same for both the X and Y axis), however the matrix does have disadvantages such as using its own units and also 45deg being indistinguishable from 45+360deg.  To get around these issues, this patch tracks internally the scale, rotation, and rotation units for any elements that are .scale()'ed, .rotate()'ed, or animated.  The major consequences of this are that 1. the scaled/rotated element will blow away any other transform rules applied to the same element (such as skew or translate), and 2. the scaled/rotated element is unaware of any preset scale or rotation initally set by page CSS rules.  You will have to explicitly set the starting scale/rotation value.
    
    function initData($el) {
        var _ARS_data = $el.data('_ARS_data');
        if (!_ARS_data) {
            _ARS_data = {
                rotateUnits: 'deg',
                scale: 1,
                rotate: 0
            };
            
            $el.data('_ARS_data', _ARS_data);
        }
        
        return _ARS_data;
    }
    
    function setTransform($el, data) {
        $el.css('transform', 'rotate(' + data.rotate + data.rotateUnits + ') scale(' + data.scale + ',' + data.scale + ')');
    }
    
    $.fn.rotate = function (val) {
        var $self = $(this), m, data = initData($self);
                        
        if (typeof val == 'undefined') {
            return data.rotate + data.rotateUnits;
        }
        
        m = val.toString().match(/^(-?\d+(\.\d+)?)(.+)?$/);
        if (m) {
            if (m[3]) {
                data.rotateUnits = m[3];
            }
            
            data.rotate = m[1];
            
            setTransform($self, data);
        }
        
        return this;
    };
    
    // Note that scale is unitless.
    $.fn.scale = function (val) {
        var $self = $(this), data = initData($self);
        
        if (typeof val == 'undefined') {
            return data.scale;
        }
        
        data.scale = val;
        
        setTransform($self, data);
        
        return this;
    };

    // fx.cur() must be monkey patched because otherwise it would always
    // return 0 for current rotate and scale values
    var curProxied = $.fx.prototype.cur;
    $.fx.prototype.cur = function () {
        if (this.prop == 'rotate') {
            return parseFloat($(this.elem).rotate());
            
        } else if (this.prop == 'scale') {
            return parseFloat($(this.elem).scale());
        }
        
        return curProxied.apply(this, arguments);
    };
    
    $.fx.step.rotate = function (fx) {
        var data = initData($(fx.elem));
        $(fx.elem).rotate(fx.now + data.rotateUnits);
    };
    
    $.fx.step.scale = function (fx) {
        $(fx.elem).scale(fx.now);
    };
    
    /*
    
    Starting on line 3905 of jquery-1.3.2.js we have this code:
    
    // We need to compute starting value
    if ( unit != "px" ) {
        self.style[ name ] = (end || 1) + unit;
        start = ((end || 1) / e.cur(true)) * start;
        self.style[ name ] = start + unit;
    }
    
    This creates a problem where we cannot give units to our custom animation
    because if we do then this code will execute and because self.style[name]
    does not exist where name is our custom animation's name then e.cur(true)
    will likely return zero and create a divide by zero bug which will set
    start to NaN.
    
    The following monkey patch for animate() gets around this by storing the
    units used in the rotation definition and then stripping the units off.
    
    */
    
    var animateProxied = $.fn.animate;
    $.fn.animate = function (prop) {
        if (typeof prop['rotate'] != 'undefined') {
            var $self, data, m = prop['rotate'].toString().match(/^(([+-]=)?(-?\d+(\.\d+)?))(.+)?$/);
            if (m && m[5]) {
                $self = $(this);
                data = initData($self);
                data.rotateUnits = m[5];
            }
            
            prop['rotate'] = m[1];
        }
        
        return animateProxied.apply(this, arguments);
    };
})(jQuery);

/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "drawing": {
        "strokepath": [
            {
                "path": "M497.9318,404.328677 L497.9318,802.027938 L152.820871,802.027938 L497.9318,404.328677 Z",
                "duration": 500
            },
            {
                "path": "M498.589154,463.490551 L498.589154,802.027938 L300.0682,802.027938 L498.589154,463.490551 Z",
                "duration": 300
            },

            {
                "path": "M0.328677075,802.671323 L496.945768,469.078061",
                "duration": 200
            },
            {
                "path": "M42.7000822,2.91923885e-16 L328.977814,799.671323",
                "duration": 400
            }
        ],
        "dimensions": {
            "width": 496,
            "height": 800
        }
    }
}; 
 
 
/*
 * Put all your regular jQuery in here.
*/
jQuery(document).ready(function($) {

    $('.showcase-rows-wrapper').scrollNav({
    sections: 'section h2',
    showHeadline: false,
    showTopLink: false,
    fixedMargin: -50,
    arrowKeys: true,
    scrollOffset: 300,
    onRender: function() {
        $('.scroll-nav__link').each(function(){
            $(this).attr('title', $(this).text());
        });

        if ($('.scroll-nav__item').length > 8) {
            $('.scroll-nav__wrapper').append('<i class="prev hide"></i><i class="next"></i>');
            $('.scroll-nav').addClass('overflow');

            var i = 0,    
                pos =[0],
                left,
                scrollNavWidth = $('.scroll-nav__wrapper').width(),
                listItem = $('.scroll-nav__list li'),
                pageLength = 0;

                listItem.each(function (index) {
                    pageLength = pageLength + $(this).outerWidth();

                    if (pageLength > scrollNavWidth) {
                        console.log(pageLength);
                        pos.push(pageLength - $(this).outerWidth());
                        scrollNavWidth = scrollNavWidth * 2;
                    }

                    console.log(pos);
                    
                });



            $('.scroll-nav__wrapper i').on('click',function(){

                 
                 if ($(this).is('.next')) {
                    i = (i+1)%pos.length;
                 }else{
                    i = (i-1)%pos.length;
                 }
                 left = pos[i];

                 if (left > 0) {
                    $('.scroll-nav__wrapper i').removeClass('hide');
                 }else{
                    $('.scroll-nav__wrapper i.prev').addClass('hide');
                 }

                 if (left == pos[pos.length-1]) {
                    $('.scroll-nav__wrapper i.next').addClass('cancel');
                 }else{
                    $('.scroll-nav__wrapper i.next').removeClass('cancel');
                 }



                 $('.scroll-nav__wrapper ol li').css('transform','translateX(-'+left+'px)');
                 console.log(left);
            });
        }
    }

    });
    
    $('#drawing').lazylinepainter({
        "svgData": pathObj,
        "strokeWidth": 2,
        "strokeColor": "#ffffff",
        'onComplete' : function(){
               $('#drawing').addClass('hide');
               $('#drawing_full').removeClass('hide');
               $('#drawing_full').addClass('show');
        },
    }).lazylinepainter('paint');

    $('.notification i').on('click touchstart', function(){
        $(this).parent().removeClass('out');
    });
    setTimeout(function(){$('.notification').addClass('out');}, 500);

    //If less than or equal IE9
    if (document.all && !window.atob) {
        $('.preview-content').addClass('ie');      
    };

    if (!Modernizr.svg) {

        var src = $('.logo img').attr('src');
        $('.logo img').attr('src', src.replace(/svg(\.[^.]+)?$/, 'png$1'));
        $('.logo img').css('max-width','128px');
        
    }

    $(window).load(function() {
        $('.csstransitions body').addClass('loaded');
    });

    $.fn.cleardefault = function() {

    return this.focus(function() {

        if( this.value == this.defaultValue ) {
            this.value = "";
        }

    }).blur(function() {
        if( !this.value.length ) {
            this.value = this.defaultValue;
        }
    });

  };

  $(".clearit input, .clearit textarea").cleardefault();

    $('.nav-toggle a.icon-menu').on('click touchstart', function(e) {
      $('.nav-collapse').toggleClass("open closed"); //you can list several class names 
      e.preventDefault();
    });
    


    function scroll_config(percent){
            var viewport_height = $(window).height(),
                offset = viewport_height*(percent/100);
                offset_neg = offset - (offset*2);

            console.log('height offset: '+offset_neg);

            $.localScroll({axis:'y',hash:true,easing:'easeInOutCubic',offset: offset_neg});
            //$.localScroll.hash({axis:'y',duration: 2000,easing:'easeInOutCubic'});
    }

    function shrink_header_onscroll(val){
        
        var win             = $(window),
            main_header     = $('body'),
            header          = $('.inner-header-wrapper'),
            logo            = header.find('.logo img'),
            navs            = header.find('.inner-header nav'),
            el_height       = 200,
            isMobile        = 'ontouchstart' in document.documentElement
            
            if (win.width() <= 1280 && win.height() <= 700) {
                el_height       = 170;
            };

            set_height      = function()
            {
                if (val > 0) {

                var st = win.scrollTop(),
                    newH = 0, 
                    newH2 = 0;

                header.removeClass('nav-collapse');
                if(st < (el_height/3.8))
                {
                    padtop = st;
                    newH = el_height - (st*2.75);
                    header.removeClass('header-scrolled fixed');
                    logotop = el_height/14.2 - st/5;
                }
                else
                {
                    newH = el_height/4;
                    padtop = newH;
                    header.addClass('header-scrolled fixed');
                    logotop = 2;

                }

                //logo.css({'bottom': newH2 + 'px'});
                main_header.css({'padding-top': padtop + 'px'});
                header.css({'height': newH + 'px'});
                navs.css({'line-height': newH + 'px'});
                logo.css({'margin-top': logotop + '%'});

                }else{
                  main_header.removeAttr('style');
                  header.removeAttr('style');
                  navs.removeAttr('style');
                  header.removeClass('header-scrolled fixed');
                  header.addClass('nav-collapse');
                }
            };

            if(!header.length) return false;

            if(isMobile || $('body').hasClass('deactivate_menu_resize'))
            {
                if (win.width() <= 1280 && win.height() <= 700 &&win.width() > 768) {
                    el_height       = 150,
                    header          = $('#bignav'),
                    logo            = header.find('.logo img'),
                    navs            = header.find('.inner-header nav');

                    header.css({'height': el_height + 'px'});
                    navs.css({'line-height': el_height+ 'px'});
                    logo.css({'margin-top': el_height/4});
                }
                return false;
            }

            win.scroll(set_height);
            set_height();
    }

    function scrollfx(){
        var scrollTop = $(window).scrollTop();
        
        if(scrollTop>900){
            $('#scrolltop-btn').fadeIn(200);
            }
        else { 
            $('#scrolltop-btn').fadeOut(200);
         }
    }

    function responsive_viewport(){

    /* getting viewport width */
    var responsive_viewport_width = $(window).width(),
        responsive_viewport_height = $(window).height()
    console.log('width: '+responsive_viewport_width);
    console.log('height: '+responsive_viewport_height);

    if (responsive_viewport_width > 767) {
        shrink_header_onscroll(1);
        //scroll_config(20);
        $('.inner-header-wrapper').removeClass('nav-collapse');
    }else{
        shrink_header_onscroll(0);
        window.onscroll = scrollfx;
        if (responsive_viewport_height > 640) {
            //scroll_config(9);
        }else{
            //scroll_config(0);
        }

    }
    
    }
        $(window).on('resize',_.debounce(responsive_viewport, 200));
        responsive_viewport();

}); /* end of as page load scripts */


