_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{CdZS:function(t,e,a){"use strict";a.r(e);var s=a("q1tI"),n=a.n(s),c=a("/MKj"),o=a("689t"),l=a("oQV8"),i=a("L0A/"),r=a("uUeA"),u=a("xWis"),p=a("xmUM"),m=a("prPG"),d=a("RxzO"),_=n.a.createElement;e.default=Object(c.b)((function(t){return t.collection}))((function(){var t=Object(c.c)(),e=["home-featured-posts"];return Object(s.useEffect)((function(){t(Object(o.d)(e)),t(Object(p.c)(1)),t(Object(u.b)(!1))}),[t]),_(d.a,{title:"Classic layout right"},_(l.a,{title:"Classic layout right"}),_("div",{className:"container"},_("section",{className:"ps-blog--sidebar ps-blog--classic left"},_("div",{className:"ps-section__left"},_("div",{className:"ps-section__items"},_(r.a,{slug:"home-featured-posts"}),_(m.a,null))),_("div",{className:"ps-section__right"},_(i.a,null)))))}))},JvyI:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/classic-layout-left",function(){return a("CdZS")}])},"L0A/":function(t,e,a){"use strict";var s=a("q1tI"),n=a.n(s),c=a("/MKj"),o=a("nOHt"),l=a("oqc9"),i=n.a.createElement,r=Object(c.b)((function(t){return t.collection}))((function(t){var e=t.hashtags,a=Object(o.useRouter)();return i("aside",{className:"ps-widget ps-widget--categories"},i("h4",{className:"ps-widget__heading"},i("span",null,"Hashtag")),i("div",{className:"ps-widget__content"},i("ul",{className:"ps-list"},e.map((function(t,e){return i("li",{key:e},i("div",{onClick:function(){return function(t){a.push("/blog?hashtag="+t.url),l.animateScroll.scrollToTop()}(t)}},t.name,i("span",null,i("i",{className:"fa fa-chevron-right"}))))})))))})),u=n.a.createElement,p=function(){return u("aside",{className:"ps-widget ps-widget--follow-me"},u("h4",{className:"ps-widget__heading"},u("span",null,"Theo d\xf5i")),u("div",{className:"ps-widget__content"},u("a",{href:"https://www.facebook.com/tin.tran.7315720",target:"_blank"},"Facebook"),u("a",{href:"https://www.youtube.com/watch?v=XQn9-POOq4c&feature=emb_logo",target:"_blank"},"Youtube")))},m=n.a.createElement,d=function(){var t=Object(o.useRouter)(),e=Object(s.useState)(null),a=e[0],n=e[1];return m("aside",{className:"ps-widget ps-widget--search"},m("form",{method:"get",onSubmit:function(e){e.preventDefault(),setTimeout((function(){}),1e3),t.push("/search?keyword=".concat(a))}},m("div",{className:"form-group"},m("input",{className:"form-control",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a?",onChange:function(t){""!==t.target.value&&n(t.target.value)}}),m("button",{"aria-label":"search-btn"},m("i",{className:"feather icon icon-search"})))))},_=a("OqP1"),f=(a("zsQz"),a("OS56"),a("YFqc")),g=a.n(f),N=a("pU5j"),h=a("HMs9"),v=a.n(h),b=a("wd/R"),E=a.n(b),S=n.a.createElement,O=function(t){var e,a=t.post;if(a)return null!==a.thumbnail&&(e=S(v.a,null,S("img",{src:"".concat(N.b).concat(a.file.publicUrl)}))),S("article",{className:"ps-post ps-post--horizontal small"},S("div",{className:"ps-post__thumbnail"},S(g.a,{href:"/post/[slug]",as:"/post/".concat(a.id,"-").concat(Object(_.e)(a.title))},S("a",{className:"ps-post__overlay"})),e),S("div",{className:"ps-post__wrapper"},S("div",{className:"ps-post__content"},S("h4",{className:"ps-post__title"},S(g.a,{href:"/post/[slug]",as:"/post/".concat(a.id,"-").concat(Object(_.e)(a.title))},S("a",null,a.title))),S("div",{className:"ps-post__meta"},S("span",{className:"ps-post__posted"},a.time?E()(a.time).format("MMM Do, YYYY"):E()(Date.now()).format("MMM Do, YYYY"))))))},w=n.a.createElement,T=Object(c.b)((function(t){return t.collection}))((function(t){var e,a=t.collections,s=(t.slug,null);return a&&(e=(s=a.slice(0,6))?s.map((function(t){return w(O,{post:t,key:t.id})})):w("p",null,"No post here.")),w("aside",{className:"ps-widget ps-widget--popular-posts"},w("h4",{className:"ps-widget__heading"},w("span",null,"g\u1ea7n \u0111\xe2y")),w("div",{className:"ps-widget__content"},e))})),M=n.a.createElement;e.a=function(){return M("div",{className:"ps-sidebar ps-sidebar--home"},M(d,null),M(T,{slug:"home-featured-posts"}),M(r,null),M(p,null))}},RxzO:function(t,e,a){"use strict";var s=a("q1tI"),n=a.n(s),c=a("8Kt/"),o=a.n(c),l=a("ZdMX"),i=(a("g67H"),a("j1B5")),r=n.a.createElement;e.a=function(t){var e=t.children,a=t.title,s=void 0===a?"Blog Page":a;return r("div",{className:"__site-layout"},r(o.a,null,r("title",null,"Trung T\xe2m \xc2m Nh\u1ea1c \u0110\xe0 N\u1eb5ng - ",s)),r(i.a,{className:"fixed transparent"}),r("main",{className:"ps-page ps-page--blog"},e),r(l.a,{classes:"dark"}))}},g67H:function(t,e,a){"use strict";var s=a("q1tI"),n=a.n(s),c=a("OS56"),o=a.n(c),l=a("/MKj"),i=a("pU5j"),r=n.a.createElement;e.a=Object(l.b)((function(t){return t.media}))((function(t){var e,a=t.instagram;return a&&a.images&&(e=a.images.map((function(t){return r("div",{className:" slick-slide",key:t.id},r("div",{className:"ps-block--instagram"},r("img",{src:"".concat(i.c).concat(t.url),alt:""}),r("a",{href:"#"},r("i",{className:"feather icon icon-instagram"}))))}))),r("div",{className:"ps-section--instagram"},r("div",{className:"ps-section__header"},r("p",null,"Theo d\xf5i ch\xfang t\xf4i"),r("h3",null,r("i",{className:"fa fa-facebook-square"}),"Chadid Tran")),r("div",{className:"ps-section__content"},r(o.a,{dots:!1,arrows:!1,infinite:!0,speed:1e3,slidesToShow:7,slidesToScroll:1},e)))}))},oQV8:function(t,e,a){"use strict";var s=a("q1tI"),n=a.n(s),c=a("pU5j"),o=n.a.createElement;e.a=function(t){var e,a=t.title,s=t.img,n=a;return e=s?c.b+s:"url(/static/img/hero/blog-grid.jpg)",o("div",{className:"ps-page__header bg--cover",style:{backgroundImage:e}},o("div",{className:"container"},o("h3",{className:"text-uppercase"},n)))}},prPG:function(t,e,a){"use strict";var s=a("q1tI"),n=a.n(s),c=a("YFqc"),o=a.n(c),l=n.a.createElement;e.a=function(){return l("div",{className:"ps-section__pagination ps-loadmore"},l(o.a,{href:"/blog"},l("a",{className:"effect--underline"},"Xem t\u1ea5t c\u1ea3")))}},uOW5:function(t,e,a){"use strict";var s=a("q1tI"),n=a.n(s),c=a("YFqc"),o=a.n(c),l=a("HMs9"),i=a.n(l),r=a("pU5j"),u=n.a.createElement;e.a=function(t){var e,a,s=t.post;if(s)return null!==s.wide_thumbnail&&(e=u(i.a,null,u("img",{src:"".concat(r.c).concat(s.wide_thumbnail.url),alt:"img"}))),s.categories&&(a=s.categories.map((function(t){return u(o.a,{href:"/category/[slug]",as:"/categories/".concat(t.slug),key:t.id},u("a",null,t.name))}))),u("article",{className:"ps-post ps-post--classic"},u("div",{className:"ps-post__thumbnail"},u(o.a,{href:"/post/[slug]",as:"/post/".concat(s.slug)},u("a",{className:"ps-post__overlay"})),e),u("div",{className:"ps-post__content"},u("div",{className:"ps-post__categories"},a),u("h4",{className:"ps-post__title"},u(o.a,{href:"/post/[slug]",as:"/post/".concat(s.slug)},u("a",null,s.title))),u("div",{className:"ps-post__meta"},u("span",null,u("a",{href:"#"},"Cheryl Ng")),u("span",{className:"ps-post__posted"},"Jul 12, 2020")),u("div",{className:"ps-post__short-desc"},u("p",null,s.description)),u("div",{className:"ps-post__footer"},u(o.a,{href:"/post/[slug]",as:"/post/".concat(s.slug)},u("a",{className:"ps-post__morelink"},"Continue Reading")))))}},uUeA:function(t,e,a){"use strict";var s=a("q1tI"),n=a.n(s),c=a("/MKj"),o=a("OqP1"),l=a("uOW5"),i=n.a.createElement;e.a=Object(c.b)((function(t){return t.collection}))((function(t){var e,a=t.slug,s=t.collections,n=null;return s&&(e=null!==(n=Object(o.c)(s,a))?n.map((function(t){return i(l.a,{post:t,key:t.id})})):i("p",null,"No post found.")),i("div",{className:"ps-post-items"},e)}))},xmUM:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return c})),a.d(e,"d",(function(){return o}));var s={GET_BANNERS:"GET_BANNERS",GET_BANNERS_SUCCESS:"GET_BANNERS_SUCCESS",GET_PROMOTIONS:"GET_PROMOTIONS",GET_PROMOTIONS_SUCCESS:"GET_PROMOTIONS_SUCCESS",GET_INSTAGRAM:"GET_INSTAGRAM",GET_INSTAGRAM_SUCCESS:"GET_INSTAGRAM_SUCCESS"};function n(t){return{type:s.GET_BANNERS_SUCCESS,payload:t}}function c(t){return{type:s.GET_INSTAGRAM,payload:t}}function o(t){return{type:s.GET_INSTAGRAM_SUCCESS,payload:t}}},zsQz:function(t,e,a){"use strict";var s=a("q1tI"),n=a.n(s),c=a("YFqc"),o=a.n(c),l=a("pU5j"),i=a("HMs9"),r=a.n(i),u=a("OqP1"),p=a("wd/R"),m=a.n(p),d=n.a.createElement;e.a=function(t){var e,a,s=t.post;if(s)return null!==s.file&&(e=d(r.a,null,d("img",{src:"".concat(l.b).concat(s.file.publicUrl)}))),s.categories&&(a=s.categories.map((function(t){return d(o.a,{href:"/category/[slug]",as:"/categories/".concat(t.slug),key:t.id},d("a",null,t.name))}))),d("article",{className:"ps-post ps-post--grid"},d("div",{className:"ps-post__thumbnail"},d(o.a,{href:"/post/[slug]",as:"/post/".concat(s.id,"-").concat(Object(u.e)(s.title))},d("a",{className:"ps-post__overlay"})),e),d("div",{className:"ps-post__content"},d("div",{className:"ps-post__categories"},a),d("h4",{className:"ps-post__title"},d(o.a,{href:"/post/[slug]",as:"/post/".concat(s.id,"-").concat(Object(u.e)(s.title))},d("a",null,s.title))),d("div",{className:"ps-post__meta"},d("span",{className:"ps-post__posted"},s.time?m()(s.time).format("MMM Do, YYYY"):m()(Date.now()).format("MMM Do, YYYY"))),d("div",{className:"ps-post__footer"},d(o.a,{href:"/post/[slug]",as:"/post/".concat(s.id,"-").concat(Object(u.e)(s.title))},d("a",{className:"ps-post__morelink line"},"Xem th\xeam ",d("i",{className:"feather icon icon-chevrons-right"}))))))}}},[["JvyI",0,2,7,1,3,4,5,6,8]]]);