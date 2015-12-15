/*  MingGEjs类库1.7.1
 *  
 *  你会用JQUERY，那你也会用这个框架，语法都是一样的！
 *
 *  MingGejs选择器的执行速度，是JQUERY的十倍以上,绝对排行世界尖端,不喜匆喷，本屌要占有JQUERY用户份额关你X事
 *
 *  作者：明哥先生 --QQ399195513 QQ群461550716 官网www.shearphoto.com
 */
!function(ab,aa){var Z="1.7.1",Y=document.getElementsByClassName?!0:!1,X=document.querySelectorAll?!0:!1,W=Array.prototype.slice,V=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,U=Object.prototype.toString,T=function(e,d){return d.toUpperCase()},S=/-([a-z])/gi,R={fast:200,slow:600,normal:400},Q=/alpha\([^)]*\)/,P=/^\s*(matrix3d|translate3d|translateX|translateY|translateZ|scale3d|scaleX|scaleY|scaleZ|rotate3d|rotateX|rotateY|rotateZ|perspective|matrix|translate|translateX|translateY|scale|scaleX|scaleY|rotate|skew|skewX|skewY)\s*$/i,O=function(e){e=e.toLowerCase();var d=/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||!/compatible/.test(e)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(e)||[];return{browser:d[1]||"",version:d[2]||"0"}},N=function(e){var d=V.exec(e),f=!1;return null===d?!1:f=d[1]?["getElementById","id",d[1],{Id:!0}]:d[2]?["getElementsByTagName","tagName",d[2],{Tag:!0}]:["getElementsByClassName","className",d[3],{Class:!0}]},L={transform:!1,bindEvent:!1,getFilter:function(e){var d;return(d=L.original("filter",L.oStyleValue(e)))?(d=/opacity\s*=\s*([0-9]+)/.exec(d),d=d?0.01*parseInt(d[1]):1):d=1,d},getDisplay:function(f){if(/^(div|ul|p|h1|h2|h3|h4|h5|h6|dd|dt|dl|ol|table|nav|form)$/i.test(f)){return"block"}if(/^(span|ul|b|a|em|strong|a|img)$/i.test(f)){return"inline"}if(/^li$/i.test(f)){return"list-item"}if(/^(input|button)$/i.test(f)){return"inline-block"}if("TD"==f){return"table-cell"}if("TR"==f){return"table-row"}var g,e=document.createElement(f),h=document.body;return e.style.visibility="hidden",h.appendChild(e),g=L.original("display",L.oStyleValue(e)),h.removeChild(e),g},seachIndex:function(e,d){return e[0] in d?e[0]:e[1] in d?e[1]:!1},isIndex:function(e,d){return e in d},jsonp:function(x){var p,o,n,w=x.url,v=x.jsonp,u=x.jsonpCallback,t=x.success,s=x.timeout,r=x.error,q=x.data,a=function(){o&&o[0].removeChild(o[1]);try{delete ab[p]}catch(d){ab[p]=null}};w=w.replace(/\?+$/,"callback"),K.isTxt(q)&&(w=K.urlRevise(w,K.objToUrl(q))),v=I(v),u?p=I(u):(v="[&|\\?]+(?:"+(K.isTxt(v)?v:"jsoncallback|callback")+")",p=new RegExp(""+v+"\\s*=\\s*([^?]+?)(&|$)","i").exec(w),p=p?I(p[1]):"callback"),s&&(n=setTimeout(function(){K.isFunction(r)&&r(505),a()},s)),ab[p]=function(b){n&&(clearTimeout(n),n=null),K.isFunction(t)&&t(L.JsonString.StringToJson(b)||b,"success"),a()},o=K.createScript(w)},htmlVal:function(g,f){try{if(K.isTxt(f)){return K.each.call(this.nodeList,function(){L.isIndex(g,this)&&(this[g]=f)}),this}var i=this.nodeList[0][g];return this.nodeList[0]?i:null}catch(h){return null}},oStyleValue:function(a){var d=a.currentStyle?a.currentStyle:ab.getComputedStyle(a,null);return d.getPropertyValue?[d,"getPropertyValue"]:[d,"getAttribute"]},original:function(e,d){return d[0][d[1]](K.styleName(e))},find:function(g){var f,h,j=0,i=new K();if(h=G(g)){for(;f=this.nodeList[j++];){H.call(i,f,h)}i.nodeList=F(i.nodeList)}return i},filter:function(h){var g,j,i,l=0,k=new K();if(k.SelectorTxt=this.SelectorTxt,j=N(h),!j){return k}for(i=new RegExp("(^|\\s)"+j[2]+"(\\s|$)",j[3].Tag&&"i");g=this.nodeList[l++];){i.test(g[j[1]])&&k.nodeList.push(g),k.nodeList=F(k.nodeList)}return k},animate:function(r,q,p,o){o=I(o),o=K.isString(o)&&/^(linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier\s*\(.+\))$/.test(o)?o:"ease-out";var k,n=L.transition+"TimingFunction",m={},l=this,j=function(){k&&(clearInterval(k),k=null);for(var f,g,e=0;f=l.nodeList[e++];){f.isMingGeAnimate&&(g=f.style,g[L.transition]=g[n]=null,p.call(f))}};return m[L.transition]=q+"ms",m[n]=o,this.css(m),setTimeout(function(){l.css(r)},5),k=setInterval(L.timeCompute(new Date().getTime(),q-1,j),5),this},cmdFun:function(b){switch(b=K.trim(b)){case"\u5916\u524d":case"beforeBegin":b="beforeBegin";break;case"\u5916\u540e":case"afterEnd":b="afterEnd";break;case"\u5185\u524d":case"afterBegin":b="afterBegin";break;case"\u5185\u540e":case"beforeEnd":default:b="beforeEnd"}return b},insertHTML:function(e,d){return d=L.cmdFun(d),e=I(e),K.isTxt(e)&&this.each(function(){this.insertAdjacentHTML(d,e)}),this},createNode:function(v,u,t){var r,q,p,o,n,m,s=new K(),l={};return K.isTxt(u)?l.html=K.trim(u):K.isObject(u)&&(l=u,l.value&&(l.html=l.value,delete l.value)),v=K.trim(v),t=L.cmdFun(t),r=function(){p=document.createElement("div"),o=document.createElement(v),n="MingGeTemp"+Math.random().toString().match(/[^\.]+$/)[0],m,q=q||L.seachIndex(["value","innerHTML"],o),p.appendChild(o);for(m in l){"id"!=m&&K.isTxt(l[m])&&("html"==m||o.setAttribute(m,l[m]))}o.id=n,this.insertAdjacentHTML(t,p.innerHTML),o=document.getElementById(n),l.id?o.id=l.id:o.removeAttribute?o.removeAttribute("id"):o.id="";try{l.html&&q&&(o[q]=l.html)}catch(a){}s.nodeList.push(o)},this.each(r),s.SelectorTxt=document.body,s.SelectorStr="000",s},addEvent:function(f,e,h){var g={add:function(){K.isFunction(h)&&f.addEventListener(e,h,!1)},att:function(){K.isFunction(h)&&f.attachEvent("on"+e,h)},no:function(){K.isFunction(h)&&(f["on"+e]=h)}};this.bindEvent=this.bindEvent||f.addEventListener&&"add"||f.attachEvent&&"att"||"no",g[this.bindEvent]&&g[this.bindEvent]()},delEvent:function(f,e,h){var g={add:function(){K.isFunction(h)&&f.removeEventListener(e,h,!1)},att:function(){K.isFunction(h)&&f.detachEvent("on"+e,h)},no:function(){K.isFunction(h)&&(f["on"+e]=null)}};this.bindEvent=this.bindEvent||f.addEventListener&&"add"||f.attachEvent&&"att"||"no",g[this.bindEvent]&&g[this.bindEvent]()},timeCompute:function(f,e,h){var g;return function(){g=new Date().getTime()-f,(g>e||0>g)&&h()}},ajax:function(){this.serverdata=this.erromsg=this.timeout=this.stop=this.xmlhttp=!1,this.transit=!0},ajaxPrototype:{get:function(e,d,f){return this.simplify(e,"get",!0,d,f,20000,!0)},post:function(e,d,f){return this.simplify(e,"post",!0,d,f,20000,!1)},getJSON:function(e,d,f){return this.simplify(e,"get",!0,d,f,20000,!0,/[\?&]+.+\s*=\s*\?/i.test(e)?"jsonp":"json")},simplify:function(r,q,p,o,n,m,l,k){if(K.isFunction(o)){var j=n;n=o,o=j||null}return this.ajax({url:r,type:q,dataType:k,timeout:m,async:p,lock:!0,cache:l,complete:!1,data:o,success:n}),this},handle:function(e,d){if(4==e.readyState){if(this.stop===!0){return}if(this.transit=!0,this.removeUploadEve(),d.timeout&&d.async&&(clearTimeout(this.timeout),this.timeout=!1),200==e.status){var f=this.serverdata=I(e.responseText);K.isFunction(d.success)&&("json"==d.dataType&&(f=L.JsonString.StringToJson(f)||f),d.success(f,"success"))}else{this.erromsg=e.status,K.isFunction(d.error)&&d.error(e.status)}}else{if(0==e.readyState){if(this.stop===!0){return}this.removeUploadEve(),d.timeout&&d.async&&(clearTimeout(this.timeout),this.timeout=!1),this.erromsg=e.readyState,this.transit=!0,K.isFunction(d.error)&&d.error(e.readyState)}}},out:function(b){this.transit=!0,this.erromsg=504,this.stop=!0,this.removeUploadEve(),K.isFunction(b.error)&&b.error(504)},removeUploadEve:function(){},ajax:function(a){var l,k,j,i;if(a=K.extend({type:"get",timeout:20000,async:!0},a),a.dataType&&(a.dataType=I(a.dataType),"jsonp"==a.dataType)){return L.jsonp(a),this}if(a.lock&&!this.transit){return !1}this.transit=!1,this.stop=this.erromsg=!1,l=ab.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP"),a.type=a.type.toUpperCase(),k=function(){},a.data=K.objToUrl(a.data),K.isTxt(a.data)?(a.data=a.data&&I(a.data),k=function(){l.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}):"[object FormData]"!==U.call(a.data)?(a.data="",k=function(){l.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}):(K.isFunction(a.progress)&&(l.upload.addEventListener("progress",a.progress,!1),this.removeUploadEve=function(){l.upload.removeEventListener("progress",a.progress,!1)}),a.type="POST"),j=""==a.data?null:a.data,i=this,K.isFunction(a.complete)&&a.complete(),a.timeout&&a.async&&(this.timeout=setTimeout(function(){i.out(a)},a.timeout)),a.async===!0&&(l.onreadystatechange=function(){i.handle(l,a)});try{switch(a.type){case"POST":l.open("POST",a.url,a.async),k();break;default:l.open("GET",K.urlRevise(a.url,j),a.async),a.cache===!0||l.setRequestHeader("If-Modified-Since","0")}}catch(h){return this.erromsg=505,this.removeUploadEve(),a.timeout&&a.async&&(clearTimeout(this.timeout),this.timeout=!1),this.transit=!0,K.isFunction(a.error)&&a.error(505),void 0}l.send(j),a.async===!1&&i.handle(l,a)}},JsonString:{_json_:null,JsonToString:function(e){try{this._json_=[],this._read_(e,!0);var d=this._json_.join("");return d=d.replace(/,([\}\]])/g,function(h,g){return g}),this._json_=null,d}catch(f){return alert("Format does not match, conversion fails"),void 0}},StringToJson:function(a,h){if(K.isString(a)){try{if(null==h&&/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return ab.JSON&&ab.JSON.parse?ab.JSON.parse(a):new Function("return ("+a+")")()}if(h){var g=new Function("return ("+a+")")();return type=this._type_(g),"[object Object]"!==type&&"[object Array]"!==type?!1:g}return !1}catch(f){return !1}}},_type_:function(b){return K.isNumber(b.nodeType)?"[object document]":U.call(b)},_addjson_:function(f,d,h){var g={"[object Object]":d,"[object Array]":h};this._json_.push(g[f])},_addstring_:function(e){var f,d=typeof e;return"string"===d?'"'+e.replace(/[\"\'\\\/]/g,function(b){return"\\"+b})+'"':"number"===d?e:(f=this._type_(e),"[object Object]"===f||"[object Array]"===f?!1:'""')},_read_:function(h,g){var k,j,i,l=this._type_(h);if(g&&"[object Object]"!==l&&"[object Array]"!==l){return alert("Your incoming is not an array or JSON"),this._json_=null}this._addjson_(l,"{","[",g),k=h.constructor.prototype;for(j in h){K.isUndefined(k[j])&&(i=this._addstring_(h[j]),"boolean"!=typeof i?this._addjson_(l,'"'+j+'":'+i+",",i+","):(this._addjson_(l,'"'+j+'":',""),this._read_(h[j],!1)))}g=g?"":",",this._addjson_(l,"}"+g,"]"+g)}},opacity:!1,transition:!1,style:function(r,q,p){var o,n,m,l,k,j;return p=K.isTxt(p)?I(p):"",P.test(q)?(n=new RegExp(""+q+"\\s?\\((.*)\\)","i"),m=r[L.transform],p?q+="("+p+")":q="",o=[L.transform,m?n.test(m)?m.replace(n,q):m+" "+q:q]):"opacity"==q?("opacity"==L.opacity?(j=parseFloat(p,10),o=["opacity",isNaN(j)?null:j]):(l=r.filter,k="NaN"==parseInt(p,10)+""?"":"alpha(opacity="+100*p+")",o=Q.test(l)?["filter",l.replace(Q,k)]:["filter",k]),o):[q,p]},ready:function(a){function f(){try{var h=function(){"complete"===document.readyState&&(L.addEvent(document,"readystatechange",h),a())},g=ab.frameElement}catch(b){return L.addEvent(document,"readystatechange",h),void 0}if(null!=g){return L.addEvent(document,"readystatechange",h),void 0}try{document.documentElement.doScroll("left")}catch(h){return setTimeout(f,13),void 0}a()}L.bindEvent=L.bindEvent||document.addEventListener&&"add"||document.attachEvent&&"att"||"no";var e;K.isFunction(a)&&("add"==L.bindEvent?(e=function(){document.removeEventListener("DOMContentLoaded",e,!1),a()},document.addEventListener("DOMContentLoaded",e,!1)):f())}},J=function(f){var h,g;try{return W.call(f)}catch(e){for(h=[],g=0;g<f.length;g++){h[g]=f[g]}return h}},I=function(e){try{return e.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,"")}catch(d){return e}},H=function(j,i){var p,o,m,n,l,k;if(i[0]||i[1][3].Id&&document===j){return p=i[1][2],o=j[i[1][0]]("MingGeAllelem2015"===p?"*":p),o&&(o=i[1][3].Id?[o]:J(o),this.nodeList=this.nodeList.concat(o)),void 0}for(n=j.getElementsByTagName("*"),l=0,k=new RegExp("(^|\\s)"+i[1][2]+"(\\s|$)");m=n[l++];){k.test(m[i[1][1]])&&this.nodeList.push(m)}},G=function(e){var d=N(e);return d?[d[3].Tag||Y&&d[3].Class,d]:!1},F=function(i){var h,l,k,n=0,m=[],j=!1;if(i.item||K.isArray(i)){for(;h=i[n++];){for(l=0;k=m[l++];){if(h===k){j=!0;break}}j||m.push(h),j=!1}}return m},E=function(B,A,z){var v,t,r,q,w,u,s,p,o,y=B.match(/[^\,]+/g),x=A.match(/[^\,]+/g);if(y&&x){for(w="",u=" "==z,s=/^[\w-_]+/,p=0;p<y.length;p++){for(v=y[p]+z,q=u||(r=v.match(s)),o=0;o<x.length;o++){q?v==x[o]?w+=v+",":r?(t=x[o].match(s),t?t[0]==r[0]&&(w+=v+x[o].replace(s,"")+","):w+=v+x[o]+","):w+=v+x[o]+",":w+=x[o]+v+","}}return w.replace(/,+$/,"")}},D=function(t,s,r,q){var p,o,n,l,m;try{if(n=!1,r){if(s.SelectorTxt===document||s.SelectorTxt===ab){return q}if(s.SelectorTxt&&""!=t){if(r.filter){if(s.SelectorTxt.ownerDocument){return s.SelectorStr&&"000"!==s.SelectorStr?(o="#"+(s.SelectorTxt.id||(n=!0,s.SelectorTxt.id="tempMingGeId2015")),p=E(o,q.SelectorStr=E(s.SelectorStr,t,"")," "),q.nodeList=J(s.SelectorTxt.querySelectorAll(p)),q.SelectorTxt=s.SelectorTxt,n&&s.SelectorTxt.removeAttribute("id"),q):-1}p=E(s.SelectorTxt,t,"")}else{if("000"===s.SelectorStr){return -1}if(s.SelectorTxt.ownerDocument){return o="#"+(s.SelectorTxt.id||(n=!0,s.SelectorTxt.id="tempMingGeId2015")),p=s.SelectorStr?E(o,q.SelectorStr=E(s.SelectorStr,t," ")," "):E(o,q.SelectorStr=t," "),q.nodeList=J(s.SelectorTxt.querySelectorAll(p)),q.SelectorTxt=s.SelectorTxt,n&&s.SelectorTxt.removeAttribute("id"),q}p=E(s.SelectorTxt,t," ")}}q.nodeList=J(document.querySelectorAll(p)),q.SelectorTxt=p}else{m=/^#([\w-_]+)$/.exec(t),q.nodeList=m?(l=document.getElementById(m[1]))?[l]:[]:J(document.querySelectorAll(t)),q.SelectorTxt=t}}catch(a){}return q},C=function(r,q,p){var n,m,l,k,f,o=new K();if(K.isString(r)){if(r=I(r),X&&-1!=(n=D(r,q,p,o))){return n}if(m=r.match(/[^\,]+/g),l=[],m){if(k=m.length,1===k){return c(m[0],q,p)}for(f=0;k>f;f++){l=l.concat(c(m[f],q,p).nodeList)}return o.nodeList=F(l),o}return o}return p?o:o.init(r||0,document)},c=function(h,g,l){var j,i,k=h.match(/[^\s]+/g);if(k){if(j=k.length,l&&l.filter&&j>2){return new K()}for(i=0;j>i;i++){g=M(k[i],i,g,l)}}return g},M=function(h,g,l,k){var i,j=h.match(/[\.#]?([\w-]+)/g);if(j){for(i=0;i<j.length;i++){l=0==g?0==i?k?k.find?L.find.call(l,j[0]):L.filter.call(l,j[0]):new K().init(j[0],document):L.filter.call(l,j[i]):0==i?L.find.call(l,j[0]):L.filter.call(l,j[i])}}return l},K=ab.MingGe=function(a){return this===ab||this.MingGe?C(a):(this.nodeList=[],this.animateList=[],void 0)};K.fn=K.prototype={version:"\u4f60\u4f7f\u7528\u7684\u7248\u672c\u662fMingGejs"+Z,init:function(a,f){var e;return K.isFunction(a)?(L.ready(a),this):(a===ab||a===document||a.ownerDocument?(this.SelectorTxt=a,this.nodeList=[a]):(e=G(a))&&H.call(this,f,e),this)},is:function(b){switch(b=I(b)){case":animate":return this.nodeList[0].isMingGeAnimate?!0:!1}},append:function(b){return L.createNode.call(this,b,{},"beforeEnd")},createNode:function(){return L.createNode.apply(this,arguments)},load:function(f,e){if(K.isFunction(f)){return this.bind("load",f)}var g,h=this;return successFun=function(b){h.each(function(){g=L.seachIndex(["value","innerHTML"],this),g&&(this[g]=b)})},null==e?K.get(f,null,successFun):K.post(f,e,successFun),this},insertHTML:function(){return L.insertHTML.apply(this,arguments)},stop:function(){if(L.transition||(L.transition=K.html5Attribute("transition")),!L.transition){return this}var b;return this.each(function(){if(this.isMingGeAnimate){delete this.isMingGeAnimate,this.mingGeAnimateList&&delete this.mingGeAnimateList;var a=L.transition+"TimingFunction";b=this.style,b[L.transition]=b[a]=null}})},fadeToggle:function(e,d){var f;this.each(function(){f=L.oStyleValue(this),"none"==L.original("display",f)?K(this).fadeIn(e,d):K(this).fadeOut(e,d)})},attr:function(e,d){var f=this.nodeList[0];if(f){if(K.isUndefined(d)){return K.isString(e)?f.getAttribute(e):null}K.isString(e)&&K.isTxt(d)&&K.each.call(this.nodeList,function(){this.setAttribute(e,d)})}return this},fadeOut:function(f,e){var h,g=new K();return L.transition||(L.transition=K.html5Attribute("transition")),this.each(function(){h=L.oStyleValue(this),"none"==L.original("display",h)||this.isMingGeAnimate||g.nodeList.push(this)}),L.transition?g.animate({opacity:0},f,function(){K(this).css({display:"none",opacity:null}),K.isFunction(e)&&e.call(this)},"ease"):g.css("display","none"),this},hide:function(){this.css("display","none")},show:function(){this.css("display",null),K.each.call(this.nodeList,function(){1==this.nodeType&&"none"==L.original("display",L.oStyleValue(this))&&(this.style.display=L.getDisplay(this.tagName))})},fadeIn:function(f,e){L.transition||(L.transition=K.html5Attribute("transition"));var h,g=new K();return this.each(function(){if(h=L.oStyleValue(this),"none"==L.original("display",h)){if(this.isMingGeAnimate){return}L.transition&&K(this).css("opacity",0),g.nodeList.push(this),"none"==this.style.display?(this.style.display="","none"==L.original("display",h)&&(this.style.display=L.getDisplay(this.tagName))):this.style.display=L.getDisplay(this.tagName)}}),L.transition&&setTimeout(function(){g.animate({opacity:1},f,function(){K(this).css("opacity",null),K.isFunction(e)&&e.call(this)},"ease")},5),this},animate:function(x,w,v,u){var s,t,r,q,l,p,o,n;if(L.transition||(L.transition=K.html5Attribute("transition")),!L.transition){return this.css(x),this}if(!K.isObject(x)){return this}for(t=typeof w,"number"!==t&&("string"===t?(R[w]&&(w=R[w]),isNaN(parseFloat(w))&&(w=500)):"function"===t?(v=w,w=500):w=500),K.isFunction(v)||(r=u,u=v,v=K.isFunction(r)?r:function(){}),s=function(){var g,e,f=this.mingGeAnimateList;K.isArray(f)&&f.length>0?(e=new K(),e.nodeList=[this],g=f[0],f.splice(0,1),L.animate.apply(e,g)):(delete this.mingGeAnimateList,delete this.isMingGeAnimate),v.call(this)},p=0,o=new K(),n=[x,w,s,u];q=this.nodeList[p++];){q.isMingGeAnimate?q.mingGeAnimateList?q.mingGeAnimateList.push(n):q.mingGeAnimateList=[n]:(q.isMingGeAnimate=1,o.nodeList.push(q),l||(l=!0))}return l&&L.animate.apply(o,n),this},on:function(h,g){var l,i,k=0,j=typeof h;if("string"===j&&K.isFunction(g)){for(;l=this.nodeList[k++];){l["on"+h]=g}}else{if("object"===j){for(;l=this.nodeList[k++];){for(i in h){l["on"+i]=h[i]}}}}return this},empty:function(){var b;return this.each(function(){1==this.nodeType&&(b=L.seachIndex(["value","innerHTML"],this),b&&(this[b]=""))})},remove:function(){return this.each(function(){this.parentNode.removeChild(this)}),this.nodeList=[],this},bind:function(h,g){var l,i,k=0,j=typeof h;if("string"===j&&K.isFunction(g)){for(;l=this.nodeList[k++];){L.addEvent(l,h,g)}}else{if("object"===j){for(;l=this.nodeList[k++];){for(i in h){L.addEvent(l,i,h[i])}}}}return this},unbind:function(f,e){var h,g=0;if(e){for(;h=this.nodeList[g++];){L.delEvent(h,f,e)}}else{for(;h=this.nodeList[g++];){h[on+"eveName"]=null}}return this},one:function(h,g){var k,j,i,l=typeof h;if("string"===l&&K.isFunction(g)){return k=function(){L.delEvent(this,h,k),g.call(this)},this.bind(h,k)}if("object"===l){j={};for(i in h){j[i]=function(a){return function(){L.delEvent(this,a,j[a]),h[a].call(this)}}(i)}return this.bind(j)}return this},SelectorStr:!1,SelectorTxt:!1,nodeList:[],ready:function(b){L.ready(b)},removing:function(b){return F(b)},parent:function(g){for(var f,h,j=0,i=new K();f=this.nodeList[j++];){(h=f.parentNode)&&("BODY"==h.tagName||i.nodeList.push(h))}return i.nodeList=F(i.nodeList),i.SelectorTxt=document.body,i.SelectorStr="000",g?i.filter(g):i},addClass:function(e){if(K.isString(e)){e=I(e);var d;return this.each(function(){1===this.nodeType&&(d=this.className,this.className=d?d+" "+e:e)})}return this},removeClass:function(e){e=I(e);var d,f;return K.isString(e)?this.each(function(){1===this.nodeType&&(d=this.className,d&&(f=RegExp("(^|\\s)"+e+"($|\\s)","ig"),f.test(d)&&(this.className=d=I(d.replace(f," ")),""==d&&(this.removeAttribute?this.removeAttribute("class"):this.className=""))))}):K.isUndefined(e)?this.each(function(){1===this.nodeType&&this.className&&(this.removeAttribute?this.removeAttribute("class"):this.className="")}):this},children:function(b){return b?this.find(b):X?this.find("*"):this.find("MingGeAllelem2015")},find:function(b){return C(b,this,{find:!0})},filter:function(e){var d=C(e,this,{filter:!0});return this.SelectorTxt.ownerDocument&&!this.SelectorStr&&d.nodeList[0]&&(d.SelectorTxt=d.nodeList[0],d.SelectorStr=!1),d},index:function(e){try{return e?K.inArray(e.nodeList[0],this.nodeList):K.inArray(this.nodeList[0],this.nodeList[0].parentNode.getElementsByTagName("*"))}catch(d){return -1}},eq:function(e){var d=new K();return d=null==e?this:(e=0>e?this.nodeList.length+e:e,this.nodeList[e]&&(d.nodeList=[d.SelectorTxt=this.nodeList[e]]),d)},size:function(){return this.nodeList.length},each:function(e){if(K.isFunction(e)){for(var d=this.nodeList.length,f=0;d>f;f++){e.call(this.nodeList[f],f,d)}}return this},val:function(b){return L.htmlVal.call(this,"value",b)},html:function(b){return L.htmlVal.call(this,"innerHTML",b)},text:function(b){return L.htmlVal.call(this,L.isIndex("textContent",document.body)?"textContent":"innerText",b)},css:function(t,s){var q,p,n,l,r=0,o={},m=typeof t;if(L.opacity||(L.opacity=K.html5Attribute("opacity")||"filter"),L.transform||(L.transform=K.html5Attribute("transform")),"string"===m){if(t=K.styleName(I(t)),K.isUndefined(s)){return(q=this.nodeList[0])&&q.ownerDocument?P.test(t)?(l=q.style[L.transform],l?(r=new RegExp(""+t+"\\s?\\((.*)\\)","i").exec(l),r&&r[1]):null):"filter"==L.opacity?L.getFilter(q):L.original(t,L.oStyleValue(q)):null}for(;q=this.nodeList[r++];){try{n=q.style,o=L.style(n,t,s),n[o[0]]=o[1]}catch(k){}}}else{if("object"===m){for(;q=this.nodeList[r++];){n=q.style;for(p in t){try{1==r&&(o[p]=L.style(n,K.styleName(p),t[p])),n[o[p][0]]=o[p][1]}catch(k){}}}}}return this},get:function(b){return null==b?this.nodeList:(b=0>b?this.nodeList.length+b:b,this.nodeList[b])}},K.fn.extend=K.extend=function(){var e,h,g,f=arguments.length;if(1===f&&"[object Object]"===U.call(arguments[0])){for(e in arguments[0]){this[e]||(this[e]=arguments[0][e])}return !0}return f>1?(h=arguments[0],g=arguments[1],K.isObject(g)&&K.isObject(h)?(K.each(g,function(i,d){h[i]=d}),h):arguments[1]||arguments[0]):!1},L.ajax.prototype=L.ajaxPrototype,!function(e){for(var d,f=0;d=e[f++];){K.fn[d]=function(b){return function(a){return this.bind(b,a)}}(d)}}(["blur","focus","focusin","focusout","resize","scroll","unload","click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","mouseenter","mouseleave","change","select","submit","keydown","keypress","keyup","error","touchstart","touchmove","touchend"]),K.extend({parseJSON:function(e,d){return L.JsonString.StringToJson(e,d)},toJSON:function(b){return L.JsonString.JsonToString(b)},trim:function(b){return I(b)},each:function(f,e){var h,g=0;if(K.isFunction(f)){for(;h=this[g++];){f.call(h)}}else{if((K.isObject(f)||K.isArray(f))&&K.isFunction(e)){for(g in f){f.hasOwnProperty(g)&&e(g,f[g])}return !0}}return !1},setVar:function(b){try{delete ab[aa]}catch(a){ab[aa]=null}ab[b]=K},isObject:function(b){return"[object Object]"===U.call(b)},update:function(f){for(var e,h=0,g=[];e=f.nodeList[h++];){e.ownerDocument?e.parentNode&&g.push(e):g.push(e)}f.nodeList=g},isArray:function(b){return"[object Array]"===U.call(b)},isFunction:function(b){return"[object Function]"===U.call(b)},isEmptyObject:function(e){for(var d in e){if(e.hasOwnProperty(d)){return !1}}return !0},createScript:function(e){var f,d=document.getElementsByTagName("head").item(0);return d?(f=document.createElement("script"),d.appendChild(f),K.isString(e)&&(f.src=e),[d,f]):void 0},post:function(e,d,f){return new L.ajax().post(e,d,f)},get:function(e,d,f){return new L.ajax().get(e,d,f)},getJSON:function(e,d,f){return new L.ajax().getJSON(e,d,f)},ajax:function(e){var d=new L.ajax();return K.isObject(e)&&d.ajax(e),d},styleName:function(e){try{return e.replace(S,T)}catch(d){return e}},userAgent:O(navigator.userAgent),isIe:function(){return"msie"===this.userAgent.browser?this.userAgent.version.charAt(0):!1},isTxt:function(e){var d=typeof e;return"string"==d||"number"==d},isNumber:function(){return"number"==typeof str},isUndefined:function(b){return"undefined"==typeof b},isString:function(b){return"string"==typeof b},objToUrl:function(e){if(K.isObject(e)){var d="";return K.each(e,function(b,f){K.isTxt(f)&&(d+=b+"="+encodeURIComponent(f)+"&")}),d.replace(/&+$/,"")}return K.isString(e)?encodeURIComponent(e):e},inArray:function(f,e){if(e.indexOf){return e.indexOf(f)}for(var h=0,g=e.length;g>h;h++){if(e[h]===f){return h}}return -1},urlRevise:function(e,d){return""!=d&&K.isTxt(d)&&(e+=/\?/.test(e)?"&"+d:"?"+d),e},isHtml5:function(){return document.createElement("canvas").getContext?!0:!1},html5Attribute:function(i){var h,n,m,l,k;try{for(h=i?i.toLowerCase():"transform",i=h.replace(/^\w/,i.charAt(0).toUpperCase()),n=document.body.style,m=[h,"Ms"+i,"Moz"+i,"Webkit"+i,"O"+i],l=!1,k=0;k<m.length;k++){if(m[k] in n){l=m[k];break}}return l}catch(j){return !1}}}),K.each(["width","height","top","left"],function(e,d){K.fn[d]=function(g,f){return function(a){return null==a?this.nodeList[0]["offset"+f]:(/^[0-9]+$/.test(a)&&(a+="px"),this.css(g,a))}}(d,d.replace(/^\w/,d.charAt(0).toUpperCase()))}),ab[aa]=K}(window,"$");