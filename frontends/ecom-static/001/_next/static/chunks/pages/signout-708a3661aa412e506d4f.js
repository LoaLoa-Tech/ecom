_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"6b4p":function(t,n,e){"use strict";e.r(n);var r=e("ODXe"),o=e("h4VS"),u=e("q1tI"),c=e("nOHt"),i=e("VX74"),a=e("CO9l");e("AYQM");function f(){var t=Object(o.a)(["\n  mutation {\n    unauthenticateUser {\n      success\n    }\n  }\n"]);return f=function(){return t},t}var s=Object(i.gql)(f());n.default=function(){var t=Object(i.useApolloClient)(),n=Object(c.useRouter)(),e=Object(i.useMutation)(s),o=Object(r.a)(e,1)[0];return Object(u.useEffect)((function(){localStorage.removeItem("token"),Object(a.l)(),o().then((function(){n.push({pathname:"/signin"}).then((function(){Object(a.j)()}))})).catch((function(){n.push("/")})),t.resetStore().then((function(){})).catch((function(){}))}),[o,n,t]),null}},AYQM:function(t,n,e){"use strict";var r=e("q1tI");e.n(r).a.createElement},BsWD:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("a3WO");function o(t,n){if(t){if("string"===typeof t)return Object(r.a)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(r.a)(t,n):void 0}}},ODXe:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("BsWD");function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,u=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(e.push(c.value),!n||e.length!==n);r=!0);}catch(a){o=!0,u=a}finally{try{r||null==i.return||i.return()}finally{if(o)throw u}}return e}}(t,n)||Object(r.a)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},a3WO:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.d(n,"a",(function(){return r}))},enan:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signout",function(){return e("6b4p")}])}},[["enan",1,2,0,3]]]);