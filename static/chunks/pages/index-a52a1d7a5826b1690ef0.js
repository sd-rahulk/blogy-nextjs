_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,u=d.length;i<u;i++){var s=d[i];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],f=r[s]||new Set;f.has(l)?a=!1:(f.add(l),r[s]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},HQGO:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("nKUr");function o(e){return e.show?Object(r.jsx)("div",{className:"loader"}):null}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return d})),n.d(t,"default",(function(){return p}));var r=n("o0o1"),o=n.n(r),a=n("HaE+"),c=n("nKUr"),i=n("Y83Y"),u=n("xzsl"),s=n("HQGO"),l=n("U6Mw"),f=n("q1tI"),d=!0;function p(e){var t=Object(f.useState)(e.posts),n=t[0],r=t[1],d=Object(f.useState)(!1),p=d[0],h=d[1],v=Object(f.useState)(!1),b=v[0],m=v[1],j=function(){var e=Object(a.a)(o.a.mark((function e(){var t,a,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),t=n[n.length-1],a="number"===typeof t.createdAt?Object(l.d)(t.createdAt):t.createdAt,c=l.c.collectionGroup("posts").where("published","==",!0).orderBy("createdAt","desc").startAfter(a).limit(10),e.next=6,c.get();case 6:i=e.sent.docs.map((function(e){return e.data()})),r(n.concat(i)),h(!1),i.length<10&&m(!0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("main",{children:[Object(c.jsx)(u.a,{title:"Home Page",description:"Get the latest posts on our site"}),Object(c.jsxs)("div",{className:"card card-info",children:[Object(c.jsx)("h2",{children:"Social - A web app for Making posts and blogs about you."}),Object(c.jsx)("p",{children:"Welcome! This app is built with Next.js , Angular and Firebase with security."}),Object(c.jsx)("p",{children:"Sign up for an \ud83d\udc68\u200d\ud83c\udfa4 account, \u270d\ufe0f write posts, then \ud83d\udc9e like content created by other users."})]}),Object(c.jsx)(i.a,{posts:n}),!p&&!b&&Object(c.jsx)("button",{onClick:j,children:"Load more"}),Object(c.jsx)(s.a,{show:p}),b&&"You have reached the end!"]})}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){c(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},Y83Y:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("nKUr"),o=n("YFqc"),a=n.n(o);function c(e){var t=e.posts,n=e.admin;return t?t.map((function(e){return Object(r.jsx)(i,{post:e,admin:n},e.slug)})):null}function i(e){var t=e.post,n=e.admin,o=void 0!==n&&n,c=null===t||void 0===t?void 0:t.content.trim().split(/\s+/g).length,i=(c/100+1).toFixed(0);return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)(a.a,{href:"/".concat(t.username),children:Object(r.jsx)("a",{children:Object(r.jsxs)("strong",{children:["By @",t.username]})})}),Object(r.jsx)(a.a,{href:"/".concat(t.username,"/").concat(t.slug),children:Object(r.jsx)("h2",{children:Object(r.jsx)("a",{children:t.title})})}),Object(r.jsxs)("footer",{children:[Object(r.jsxs)("span",{children:[c," words. ",i," min read"]}),Object(r.jsxs)("span",{className:"push-left",children:["\ud83d\udc97 ",t.heartCount||0," Likes"]})]}),o&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(a.a,{href:"/admin/".concat(t.slug),children:Object(r.jsx)("h3",{children:Object(r.jsx)("button",{className:"btn-blue",children:"Edit"})})}),t.published?Object(r.jsx)("p",{className:"text-success",children:"Live"}):Object(r.jsx)("p",{className:"text-danger",children:"Unpublished"})]})]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),c=n("elyg"),i=n("nOHt"),u=n("vNVm"),s={};function l(e,t,n,r){if((0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,b=e.shallow,m=e.scroll,j=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var y=a.Children.only(h),g=y&&"object"===typeof y&&y.ref,x=(0,u.useIntersection)({rootMargin:"200px"}),O=r(x,2),w=O[0],_=O[1],M=a.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,a.useEffect)((function(){var e=_&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof j?j:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(n,d,p,{locale:r})}),[p,d,_,j,t,n]);var k={ref:M,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:u}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,d,p,v,b,m,j)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};return(e.passHref||"a"===y.type&&!("href"in y.props))&&(k.href=(0,c.addBasePath)((0,c.addLocale)(p,"undefined"!==typeof j?j:n&&n.locale,n&&n.defaultLocale))),a.default.cloneElement(y,k)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,o=(0,a.useRef)(),s=(0,a.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||f||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){i||f||(0,c.default)((function(){return d(!0)}))}),[f]),[p,f]};var a=n("q1tI"),c=o(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var u=new Map},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},xzsl:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("nKUr"),o=n("g4pe"),a=n.n(o);function c(e){var t=e.title,n=void 0===t?"social by angleX":t,o=e.description,c=void 0===o?"A web app developed by angleX for making blogs and  postes by everyone":o;return Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{children:n}),Object(r.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(r.jsx)("meta",{name:"twitter:title",content:n}),Object(r.jsx)("meta",{name:"twitter:description",content:c}),Object(r.jsx)("meta",{property:"og:title",content:n}),Object(r.jsx)("meta",{property:"og:description",content:c})]})}}},[["vlRD",0,2,5,6,1,3,4]]]);