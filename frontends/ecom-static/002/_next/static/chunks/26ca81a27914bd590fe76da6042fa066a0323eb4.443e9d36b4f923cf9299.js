(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},"0b+E":function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"addTrackers",(function(){return F})),n.d(r,"initialize",(function(){return K})),n.d(r,"ga",(function(){return G})),n.d(r,"set",(function(){return Y})),n.d(r,"send",(function(){return Q})),n.d(r,"pageview",(function(){return Z})),n.d(r,"modalview",(function(){return X})),n.d(r,"timing",(function(){return ee})),n.d(r,"event",(function(){return te})),n.d(r,"exception",(function(){return ne})),n.d(r,"plugin",(function(){return re})),n.d(r,"outboundLink",(function(){return oe})),n.d(r,"testModeAPI",(function(){return ae})),n.d(r,"default",(function(){return ie}));var o=n("q1tI"),a=n.n(o),i=n("17x9"),c=n.n(i);function u(e){console.warn("[react-ga]",e)}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O="_blank",w=1,j=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(i,e);var t,n,r,o=b(i);function i(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(m(e=o.call.apply(o,[this].concat(n))),"handleClick",(function(t){var n=e.props,r=n.target,o=n.eventLabel,a=n.to,c=n.onClick,u=n.trackerNames,l={label:o},s=r!==O,f=!(t.ctrlKey||t.shiftKey||t.metaKey||t.button===w);s&&f?(t.preventDefault(),i.trackLink(l,(function(){window.location.href=a}),u)):i.trackLink(l,(function(){}),u),c&&c(t)})),e}return t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.target,r=f(f({},d(e,["to","target"])),{},{target:n,href:t,onClick:this.handleClick});return n===O&&(r.rel="noopener noreferrer"),delete r.eventLabel,delete r.trackerNames,a.a.createElement("a",r)}}])&&p(t.prototype,n),r&&p(t,r),i}(o.Component);h(j,"trackLink",(function(){u("ga tracking not enabled")})),j.propTypes={eventLabel:c.a.string.isRequired,target:c.a.string,to:c.a.string,onClick:c.a.func,trackerNames:c.a.arrayOf(c.a.string)},j.defaultProps={target:null,to:null,onClick:null,trackerNames:null};var k="REDACTED (Potential Email Address)";function x(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}var S=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=e||"";return t&&(r=x(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(S)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))),n&&(r=function(e){return"string"===typeof(t=e)&&-1!==t.indexOf("@")?(u("This arg looks like an email address, redacting."),k):e;var t}(r)),r}var A=function(e){var t="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?t=e.gaAddress:e&&e.debug&&(t="https://www.google-analytics.com/analytics_debug.js");var n,r,o,a,i,c,u,l=e&&e.onerror;n=window,r=document,o="script",a=t,i="ga",n.GoogleAnalyticsObject=i,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,c=r.createElement(o),u=r.getElementsByTagName(o)[0],c.async=1,c.src=a,c.onerror=l,u.parentNode.insertBefore(c,u)};function C(e){console.info("[react-ga]",e)}var E=[],I={calls:E,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];E.push([].concat(t))},resetCalls:function(){E.length=0}};function T(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){return(D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var R="undefined"===typeof window||"undefined"===typeof document,L=!1,z=!0,B=!1,J=!0,H=!0,V=function(){var e;return B?I.ga.apply(I,arguments):!R&&(window.ga?(e=window).ga.apply(e,arguments):u("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function $(e){return P(e,z,H)}function U(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];if("function"===typeof V){if("string"!==typeof o)return void u("ga command must be a string");!J&&Array.isArray(e)||V.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){V.apply(void 0,q(["".concat(e,".").concat(o)].concat(n.slice(1))))}))}}function W(e,t){e?t&&(t.debug&&!0===t.debug&&(L=!0),!1===t.titleCase&&(z=!1),!1===t.redactEmail&&(H=!1),t.useExistingGa)||(t&&t.gaOptions?V("create",e,t.gaOptions):V("create",e,"auto")):u("gaTrackingID is required in initialize()")}function F(e,t){return Array.isArray(e)?e.forEach((function(e){"object"===D(e)?W(e.trackingId,e):u("All configs must be an object")})):W(e,t),!0}function K(e,t){if(t&&!0===t.testMode)B=!0;else{if(R)return;t&&!0===t.standardImplementation||A(t)}J=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,F(e,t)}function G(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(V.apply(void 0,t),L&&(C("called ga('arguments');"),C("with arguments: ".concat(JSON.stringify(t))))),window.ga}function Y(e,t){e?"object"===D(e)?(0===Object.keys(e).length&&u("empty `fieldsObject` given to .set()"),U(t,"set",e),L&&(C("called ga('set', fieldsObject);"),C("with fieldsObject: ".concat(JSON.stringify(e))))):u("Expected `fieldsObject` arg to be an Object"):u("`fieldsObject` is required in .set()")}function Q(e,t){U(t,"send",e),L&&(C("called ga('send', fieldObject);"),C("with fieldObject: ".concat(JSON.stringify(e))),C("with trackers: ".concat(JSON.stringify(t))))}function Z(e,t,n){if(e){var r=x(e);if(""!==r){var o={};if(n&&(o.title=n),U(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),L){C("called ga('send', 'pageview', path);");var a="";n&&(a=" and title: ".concat(n)),C("with path: ".concat(r).concat(a))}}else u("path cannot be an empty string in .pageview()")}else u("path is required in .pageview()")}function X(e,t){if(e){var n,r="/"===(n=x(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);U(t,"send","pageview",o),L&&(C("called ga('send', 'pageview', path);"),C("with path: ".concat(o)))}else u("modalName cannot be an empty string or a single / in .modalview()")}else u("modalName is required in .modalview(modalName)")}function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,a=arguments.length>1?arguments[1]:void 0;if(t&&n&&"number"===typeof r){var i={hitType:"timing",timingCategory:$(t),timingVar:$(n),timingValue:r};o&&(i.timingLabel=$(o)),Q(i,a)}else u("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,a=e.nonInteraction,i=e.transport,c=T(e,["category","action","label","value","nonInteraction","transport"]),l=arguments.length>1?arguments[1]:void 0;if(t&&n){var s={hitType:"event",eventCategory:$(t),eventAction:$(n)};r&&(s.eventLabel=$(r)),"undefined"!==typeof o&&("number"!==typeof o?u("Expected `args.value` arg to be a Number."):s.eventValue=o),"undefined"!==typeof a&&("boolean"!==typeof a?u("`args.nonInteraction` must be a boolean."):s.nonInteraction=a),"undefined"!==typeof i&&("string"!==typeof i?u("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(i)&&u("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),s.transport=i)),Object.keys(c).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){s[e]=c[e]})),Object.keys(c).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){s[e]=c[e]})),Q(s,l)}else u("args.category AND args.action are required in event()")}function ne(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=$(n)),"undefined"!==typeof r&&("boolean"!==typeof r?u("`args.fatal` must be a boolean."):o.exFatal=r),Q(o,t)}var re={require:function(e,t,n){if(e){var r=x(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==D(t))return void u("Expected `options` arg to be an Object");0===Object.keys(t).length&&u("Empty `options` given to .require()"),G(o,r,t),L&&C("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else G(o,r),L&&C("called ga('require', '".concat(r,"');"))}else u("`name` cannot be an empty string in .require()")}else u("`name` is required in .require()")},execute:function(e,t){for(var n,r,o=arguments.length,a=new Array(o>2?o-2:0),i=2;i<o;i++)a[i-2]=arguments[i];if(1===a.length?n=a[0]:(r=a[0],n=a[1]),"string"!==typeof e)u("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)u("Expected `action` arg to be a String.");else{var c="".concat(e,":").concat(t);n=n||null,r&&n?(G(c,r,n),L&&(C("called ga('".concat(c,"');")),C('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(G(c,n),L&&(C("called ga('".concat(c,"');")),C("with payload: ".concat(JSON.stringify(n))))):(G(c),L&&C("called ga('".concat(c,"');")))}}};function oe(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:$(e.label)},o=!1,a=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(a),o||t()},Q(r,n)}else u("args.label is required in outboundLink()");else u("hitCallback function is required")}var ae=I,ie={initialize:K,ga:G,set:Y,send:Q,pageview:Z,modalview:X,timing:ee,event:te,exception:ne,plugin:re,outboundLink:oe,testModeAPI:I};function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){le(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}j.origTrackLink=j.trackLink,j.trackLink=oe;var se=j;t.a=ue(ue({},r),{},{OutboundLink:se})},"1Yj4":function(e,t,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("q1tI"),i=n.n(a),c=n("17x9"),u=n.n(c),l=n("TSYQ"),s=n.n(l),f=n("33Jr"),d={tag:f.e,fluid:u.a.oneOfType([u.a.bool,u.a.string]),className:u.a.string,cssModule:u.a.object},p=function(e){var t=e.className,n=e.cssModule,a=e.fluid,c=e.tag,u=Object(o.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===a?l="container-fluid":a&&(l="container-"+a);var d=Object(f.c)(s()(t,l),n);return i.a.createElement(c,Object(r.a)({},u,{className:d}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},"33Jr":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return f}));var r,o=n("17x9"),a=n.n(o);function i(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function c(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}var u="object"===typeof window&&window.Element||function(){};a.a.oneOfType([a.a.string,a.a.func,function(e,t,n){if(!(e[t]instanceof u))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},a.a.shape({current:a.a.any})]);var l=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),s={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80};"undefined"===typeof window||!window.document||window.document.createElement;function f(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var l=d[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var s=o.props[l],f=r[l]||new Set;f.has(s)?a=!1:(f.add(s),r[l]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function g(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}g.rewind=function(){};var b=g;t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=n("PJYZ"),c=n("7W2i"),u=n("a1gu"),l=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),d=!1,p=function(e){c(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,d&&a._hasHeadManager&&(a.props.headManager.mountedInstances.add(i(a)),a.emitChange()),a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=p},htFV:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return O}));var r=n("rePB"),o=n("h4VS"),a=n("q1tI"),i=n.n(a),c=n("VX74"),u=function(e){var t=e.query,n=e.variables,r=e.children,o=Object(c.useQuery)(t,{variables:n});return r({data:o.data,error:o.error,loading:o.loading})},l=n("8Kt/"),s=n.n(l),f=n("0b+E"),d=i.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(){var e=Object(o.a)(["\n        query($host: String) {\n          allUsers(where: { host: $host }) {\n            id\n            email\n            file {\n              publicUrl\n            }\n            logo {\n              publicUrl\n            }\n            store\n            slogan\n            intro\n            contact\n            color\n            primary\n            backgroundColor\n            productBackgroundColor\n            pageId\n            googleId\n            phone\n            email\n            address\n            prices\n          }\n        }\n      "]);return b=function(){return e},e}var y=Object(a.createContext)(),m=[0,5,8,13,21,34,55,89],v=function(e){return m[e]},h="https://ecommerce.loaloa.tech",O=function(e){var t=e.children,n=Object(a.useState)(!1),r=n[0],o=n[1],i=Object(a.useState)(),l=i[0],p=i[1];return Object(a.useEffect)((function(){l&&!r&&(console.log("init",l),f.a.initialize(l),o(!0));var e=window.location.pathname+window.location.search;console.log(e),f.a.pageview(e)})),d(u,{query:Object(c.gql)(b()),variables:{host:window.location.host}},(function(e){var n,r,o,i=e.data,c=(e.error,e.loading,null===i||void 0===i?void 0:i.allUsers[0]);return c&&p(c.googleId),c?d(a.Fragment,null,d(s.a,null,d("title",null,c.store," | ",c.slogan),d("meta",{name:"description",content:c.intro}),d("meta",{property:"og:image",content:h+(null===c||void 0===c?void 0:null===(n=c.file)||void 0===n?void 0:n.publicUrl)}),d("link",{rel:"icon",type:"image/png",href:h+(null===c||void 0===c?void 0:null===(r=c.logo)||void 0===r?void 0:r.publicUrl)})),d(y.Provider,{value:g(g({},c),{},{server:"https://ecommerce.loaloa.tech",seller:{id:c.id},spacing:v,prices:c.prices?null===(o=c.prices)||void 0===o?void 0:o.replace(/ /g,"").split(",").map((function(e){return Number(e)})):[],css:w(c)})},d("div",{style:{backgroundColor:c.backgroundColor,color:c.color}},t))):null}))},w=function(e){return{btnIcon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-5,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.backgroundColor;return{position:"absolute",top:t,right:-5,padding:3,paddingTop:5,width:30,height:30,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",color:n,fontWeight:800,backgroundColor:e.primary}},input:{display:"block-inline",border:"1px solid ".concat(null===e||void 0===e?void 0:e.productBackgroundColor),padding:v(1),paddingLeft:v(3),borderRadius:v(2),backgroundColor:null===e||void 0===e?void 0:e.backgroundColor,color:e.color},btnInline:{display:"inline-block",backgroundColor:e.primary,color:e.backgroundColor,border:"none",borderRadius:35,minWidth:35},button:{color:e.backgroundColor,width:"100%",backgroundColor:e.primary,border:"1px solid ".concat(e.primary),borderRadius:v(2),paddingTop:v(1),paddingBottom:v(1),marginBottom:v(2)},btnOutline:{color:e.primary,backgroundColor:e.backgroundColor,border:"1px solid ".concat(e.primary),borderRadius:v(2),paddingTop:v(1),paddingBottom:v(1)+1,marginBottom:v(2)},h5:{color:e.primary,fontSize:"0.87rem",fontWeight:"bold",marginBottom:v(3)},h6:{color:e.primary,fontSize:"0.8rem",textTransform:"uppercase",margin:0,padding:0},h1:{color:e.primary},h2:{fontSize:"1.5rem",fontWeight:"bold",textTransform:"uppercase",color:e.primary,marginBottom:v(2)},a:{display:"block"},box:{backgroundColor:e.productBackgroundColor,marginBottom:v(4),padding:v(3),borderRadius:v(1),border:"1px solid rgba(0,0,0,0.05)",boxShadow:"5px 5px 5px rgba(0, 0, 0, 0.03)"},filter:{color:e.color,backgroundColor:e.productBackgroundColor,borderRadius:v(1),border:"1px solid rgba(0,0,0,0.05)",padding:v(2),paddingLeft:v(3),paddingRight:v(3),display:"inline-block",boxShadow:"5px 5px 5px rgba(0, 0, 0, 0.03)",marginBottom:v(3),marginLeft:v(3),fontSize:"0.9rem",position:"relative"},icon:{color:e.color},iconHeader:{fontSize:"1rem",marginRight:v(2),marginBottom:v(1)},iconBorder:{borderRadius:35,color:e.primary,width:35,height:35,padding:8,fontSize:"1rem"},removeIcon:{marginTop:0,marginBottom:0,marginRight:0,marginLeft:v(2),padding:3,color:e.primary,position:"relative",top:0,width:25,height:25}}}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},ok1R:function(e,t,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("q1tI"),i=n.n(a),c=n("17x9"),u=n.n(c),l=n("TSYQ"),s=n.n(l),f=n("33Jr"),d=u.a.oneOfType([u.a.number,u.a.string]),p={tag:f.e,noGutters:u.a.bool,className:u.a.string,cssModule:u.a.object,form:u.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,c=e.tag,u=e.form,l=e.widths,d=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];l.forEach((function(t,n){var r=e[t];if(delete d[t],r){var o=!n;p.push(o?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var g=Object(f.c)(s()(t,a?"no-gutters":null,u?"form-row":"row",p),n);return i.a.createElement(c,Object(r.a)({},d,{className:g}))};b.propTypes=p,b.defaultProps=g,t.a=b},rhny:function(e,t,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("q1tI"),i=n.n(a),c=n("17x9"),u=n.n(c),l=n("TSYQ"),s=n.n(l),f=n("33Jr"),d=u.a.oneOfType([u.a.number,u.a.string]),p=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:d,offset:d})]),g={tag:f.e,xs:p,sm:p,md:p,lg:p,xl:p,className:u.a.string,cssModule:u.a.object,widths:u.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},m=function(e){var t=e.className,n=e.cssModule,a=e.widths,c=e.tag,u=Object(o.a)(e,["className","cssModule","widths","tag"]),l=[];a.forEach((function(t,r){var o=e[t];if(delete u[t],o||""===o){var a=!r;if(Object(f.a)(o)){var i,c=a?"-":"-"+t+"-",d=y(a,t,o.size);l.push(Object(f.c)(s()(((i={})[d]=o.size||""===o.size,i["order"+c+o.order]=o.order||0===o.order,i["offset"+c+o.offset]=o.offset||0===o.offset,i)),n))}else{var p=y(a,t,o);l.push(p)}}})),l.length||l.push("col");var d=Object(f.c)(s()(t,l),n);return i.a.createElement(c,Object(r.a)({},u,{className:d}))};m.propTypes=g,m.defaultProps=b,t.a=m},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))}}]);