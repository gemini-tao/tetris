(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(n,e,t){n.exports=t(344)},313:function(n,e){},322:function(n,e){},334:function(n,e,t){},336:function(n){n.exports={count:"count"}},337:function(n){n.exports={count:"\u8ba1\u6570\u5668"}},342:function(n,e,t){},344:function(n,e,t){"use strict";t.r(e);t(138);var o,a=t(1),c=t.n(a),i=t(128),r=t.n(i),l=t(64),s=t(130),u=t(131),d=t(132),f=t(135),h=t(133),p=t(136),w=t(52),g=t.n(w);!function(n){n.ADD_COUNT="ADD_COUNT",n.REDUCE_COUNT="REDUCE_COUNT",n.UPDATE_LOCALES="UPDATE_LOCALES"}(o||(o={}));var v=o,E=function(){return c.a.createElement("p",null,g.a.get("count"))},C=(t(334),{"en-US":t(336),"zh-CN":t(337)}),m=function(n){function e(){var n,t;Object(u.a)(this,e);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=Object(f.a)(this,(n=Object(h.a)(e)).call.apply(n,[this].concat(a)))).state={initLocales:!1},t.switchLocales=function(n){window.location.href=window.location.origin+window.location.pathname+"?lang="+n},t}return Object(p.a)(e,n),Object(d.a)(e,[{key:"loadLocales",value:function(n){var e=this;g.a.init({currentLocale:n,locales:C}).then(function(){e.setState({initLocales:!0})})}},{key:"initLocales",value:function(n){var e=function(n){var e=new RegExp("(^|&)".concat(n,"=([^&]*)(&|$)")),t=window.location.search.substr(1).match(e);if(null!=t)return decodeURIComponent(t[2])}("lang");e&&C.hasOwnProperty(e)?(this.props.updateLocales(e),this.loadLocales(e)):this.loadLocales(n)}},{key:"componentDidMount",value:function(){this.initLocales(this.props.locales)}},{key:"render",value:function(){var n=this,e=this.state.initLocales,t=this.props,o=t.count,a=t.addCount,i=t.reduceCount,r=t.locales;return e?c.a.createElement("div",{className:"app"},c.a.createElement("p",null,g.a.get("count"),":",o),c.a.createElement("button",{onClick:function(){return a(2)}},"add"),c.a.createElement("button",{onClick:function(){return i(1)}},"reduce"),c.a.createElement("br",null),c.a.createElement("p",null,r),c.a.createElement("button",{onClick:function(){return n.switchLocales("en-US")}},"switch locales(en)"),c.a.createElement("button",{onClick:function(){return n.switchLocales("zh-CN")}},"switch locales(zh-CN)"),c.a.createElement(E,null)):null}}]),e}(a.Component),b=Object(l.b)(function(n){return{count:n.count,locales:n.locales}},function(n){return{addCount:function(e){return n(function(n){return{type:v.ADD_COUNT,payload:{num:n}}}(e))},reduceCount:function(e){return n(function(n){return{type:v.REDUCE_COUNT,payload:{num:n}}}(e))},updateLocales:function(e){return n(function(n){return{type:v.UPDATE_LOCALES,payload:{locales:n}}}(e))}}})(m),O=!1,y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(n,e){navigator.serviceWorker.register(n).then(function(n){n.waiting?e&&e.onUpdate&&e.onUpdate(n):n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),O=!1,e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),O=!0,e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)}),navigator.serviceWorker.addEventListener("controllerchange",function(){console.log("controllerchange"),O||(window.location.reload(),O=!0)})}var U=t(18),k=t(94),A=t(134),D=t.n(A),_=Object(U.b)({count:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v.ADD_COUNT:return n+e.payload.num;case v.REDUCE_COUNT:return n-e.payload.num;default:return n}},locales:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"zh-CN",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v.UPDATE_LOCALES:return e.payload.locales;default:return n}}}),N=window.__REDUX_DEVTOOLS_EXTENSION__,T={key:"root",storage:D.a},S=Object(k.a)(T,_),j=(t(340),t(342),function(){var n=Object(U.d)(S,Object(U.c)(N&&N()));return{store:n,persistor:Object(k.b)(n)}}());console.log(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)),r.a.render(c.a.createElement(l.a,{store:j.store},c.a.createElement(s.a,{persistor:j.persistor},c.a.createElement(b,null)),","),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat(".","/service-worker.js");y?(function(n,e){fetch(n).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):L(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):L(e,n)})}}({onUpdate:function(n){if(confirm("\u76d1\u6d4b\u5230\u66f4\u65b0\uff0c\u70b9\u51fb\u66f4\u65b0"))try{n.waiting&&n.waiting.postMessage("skipWaiting")}catch(e){window.location.reload()}},onSuccess:function(){console.log("success")}})}},[[137,2,1]]]);
//# sourceMappingURL=main.0400c7f2.chunk.js.map