_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery;return n||r&&(void 0!==o&&o)}},"48fX":function(e,t,n){var a=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"5fIB":function(e,t,n){var a=n("7eYB");e.exports=function(e){if(Array.isArray(e))return a(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var c=0,s=p.length;c<s;c++){var u=p[c];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=r.props[u],d=a[u]||new Set;d.has(l)?o=!1:(d.add(l),a[u]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(c.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:f,headManager:a,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var v=m;t.default=v},A8vl:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("8Kt/"),i=n.n(o),c=n("ZdMX"),s=n("g67H"),u=n("j1B5"),l=r.a.createElement;t.a=function(e){var t=e.children,n=e.title,a=void 0===n?"Inner page":n;return l("div",{className:"__site-layout"},l(i.a,null,l("title",null,"Pantera - ",a)),l(u.a,{className:"fixed transparent"}),l("main",{className:"ps-page"},t),l(s.a,null),l(c.a,{classes:"dark"}))}},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=r},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var a=n("mPvQ"),r=n("/GRZ"),o=n("i2R6"),i=n("qXWd"),c=n("48fX"),s=n("tCBg"),u=n("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),p=!1,f=function(e){c(n,e);var t=l(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,p&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(i(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=f},dyc7:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("A8vl"),i=r.a.createElement,c=function(){return i("div",{className:"ps-block--about"},i("div",{className:"ps-block__left"},i("h4",null,"I'm John Doe"),i("p",null,"Introduce myself")),i("div",{className:"ps-block__content"},i("div",{className:"row"},i("div",{className:"col-sm-6"},i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab ad architecto atque cumque dicta dolor, eum eveniet, nobis odit optio placeat provident quaerat qui quo repellendus repudiandae sed sequi.")),i("div",{className:"col-sm-6"},i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto asperiores cumque eveniet expedita impedit incidunt labore laborum libero nam numquam officia porro quae quasi qui recusandae rem, repudiandae sed?")))))},s=r.a.createElement,u=function(){return s("div",{className:"ps-block--about"},s("div",{className:"ps-block__left"},s("h4",null,"My Services")),s("div",{className:"ps-block__content"},s("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab ad architecto atque cumque dicta dolor, eum eveniet, nobis odit optio placeat provident quaerat "),s("div",{className:"row"},s("div",{className:"col-md-4 col-sm-6"},s("ul",{className:"ps-list--arrow"},s("li",null,"Logo Design"),s("li",null,"Brand Guile"),s("li",null,"Poster Design"))),s("div",{className:"col-md-4 col-sm-6"},s("ul",{className:"ps-list--arrow"},s("li",null,"Web Design"),s("li",null,"Adversting"),s("li",null,"Web Develope"))),s("div",{className:"col-md-4 col-sm-6"},s("ul",{className:"ps-list--arrow"},s("li",null,"Icon Design"),s("li",null,"SEO"),s("li",null,"Offices"))))))},l=r.a.createElement,d=function(){return l("div",{className:"ps-block--about"},l("div",{className:"ps-block__left"},l("h4",null,"My Skills")),l("div",{className:"ps-block__content"},l("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab ad architecto atque cumque dicta dolor, eum eveniet, nobis odit optio placeat provident quaerat "),l("div",{className:"ps-skill"},l("a",{href:"#"},"Web Design"),l("a",{href:"#"},"Graphic Design"),l("a",{href:"#"},"Typhography"),l("a",{href:"#"},"SEO"),l("a",{href:"#"},"Marketing"))))},p=n("oQV8"),f=n("/MKj"),m=n("xmUM"),v=n("xWis"),h=r.a.createElement;t.default=function(){var e=Object(f.c)();return Object(a.useEffect)((function(){e(Object(m.c)(1)),e(Object(v.b)(!1))}),[e]),h("div",{className:"_content"},h(o.a,null,h(p.a,{title:"Ch\xfang t\xf4i"}),h("div",{className:"ps-page__content"},h("div",{className:"container"},h("div",{className:"ps-about-us"},h(c,null),h(u,null),h(d,null))))))}},g67H:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("OS56"),i=n.n(o),c=n("/MKj"),s=n("pU5j"),u=r.a.createElement;t.a=Object(c.b)((function(e){return e.media}))((function(e){var t,n=e.instagram;return n&&n.images&&(t=n.images.map((function(e){return u("div",{className:" slick-slide",key:e.id},u("div",{className:"ps-block--instagram"},u("img",{src:"".concat(s.c).concat(e.url),alt:""}),u("a",{href:"#"},u("i",{className:"feather icon icon-instagram"}))))}))),u("div",{className:"ps-section--instagram"},u("div",{className:"ps-section__header"},u("p",null,"Theo d\xf5i ch\xfang t\xf4i"),u("h3",null,u("i",{className:"fa fa-facebook-square"}),"Chadid Tran")),u("div",{className:"ps-section__content"},u(i.a,{dots:!1,arrows:!1,infinite:!0,speed:1e3,slidesToShow:7,slidesToScroll:1},t)))}))},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},mPvQ:function(e,t,n){var a=n("5fIB"),r=n("rlHP"),o=n("KckH"),i=n("kG2m");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},oQV8:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("pU5j"),i=r.a.createElement;t.a=function(e){var t,n=e.title,a=e.img,r=n;return t=a?o.b+a:"url(/static/img/hero/blog-grid.jpg)",i("div",{className:"ps-page__header bg--cover",style:{backgroundImage:t}},i("div",{className:"container"},i("h3",{className:"text-uppercase"},r)))}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rS7x:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/about-us",function(){return n("dyc7")}])},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var a=n("C+bE"),r=n("qXWd");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?r(e):t}},xmUM:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return i}));var a={GET_BANNERS:"GET_BANNERS",GET_BANNERS_SUCCESS:"GET_BANNERS_SUCCESS",GET_PROMOTIONS:"GET_PROMOTIONS",GET_PROMOTIONS_SUCCESS:"GET_PROMOTIONS_SUCCESS",GET_INSTAGRAM:"GET_INSTAGRAM",GET_INSTAGRAM_SUCCESS:"GET_INSTAGRAM_SUCCESS"};function r(e){return{type:a.GET_BANNERS_SUCCESS,payload:e}}function o(e){return{type:a.GET_INSTAGRAM,payload:e}}function i(e){return{type:a.GET_INSTAGRAM_SUCCESS,payload:e}}}},[["rS7x",0,2,1,3,4]]]);