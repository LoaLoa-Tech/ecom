webpackHotUpdate_N_E("pages/page/about-us",{

/***/ "./utilities/product-helper.js":
/*!*************************************!*\
  !*** ./utilities/product-helper.js ***!
  \*************************************/
/*! exports provided: formatCurrency, getPostsByColletionSlug, getPostsByCategorySlug, getItemBySlug, convertSlugsQueryString, prepareMenuWithHashtag, stringToSlug, stringToSlugVN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatCurrency\", function() { return formatCurrency; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostsByColletionSlug\", function() { return getPostsByColletionSlug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostsByCategorySlug\", function() { return getPostsByCategorySlug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getItemBySlug\", function() { return getItemBySlug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertSlugsQueryString\", function() { return convertSlugsQueryString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prepareMenuWithHashtag\", function() { return prepareMenuWithHashtag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringToSlug\", function() { return stringToSlug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringToSlugVN\", function() { return stringToSlugVN; });\n/* harmony import */ var _public_data_menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/public/data/menu.json */ \"./public/data/menu.json\");\nvar _public_data_menu_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ~/public/data/menu.json */ \"./public/data/menu.json\", 1);\n\nfunction formatCurrency(num) {\n  if (num !== undefined) {\n    return parseFloat(num).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, '$1,');\n  } else {}\n}\nfunction getPostsByColletionSlug(collections, collectionSlug) {\n  if (collections.length > 0) {\n    var result = collections.filter(function (_ref) {\n      var collections = _ref.collections;\n      return collections.some(function (_ref2) {\n        var slug = _ref2.slug;\n        return collectionSlug.includes(slug);\n      });\n    });\n\n    if (result !== undefined) {\n      return result;\n    } else {\n      return [];\n    }\n  } else {\n    return [];\n  }\n}\nfunction getPostsByCategorySlug(categories, categorySlug) {\n  if (categories.length > 0) {\n    var result = categories.filter(function (_ref3) {\n      var categories = _ref3.categories;\n      return categories.some(function (_ref4) {\n        var slug = _ref4.slug;\n\n        /*console.log(slug);*/\n        return categorySlug.includes(slug);\n      });\n    });\n\n    if (result !== undefined) {\n      return result;\n    } else {\n      return [];\n    }\n  } else {\n    return [];\n  }\n}\nfunction getItemBySlug(banners, slug) {\n  if (banners.length > 0) {\n    var banner = banners.find(function (item) {\n      return item.slug === slug.toString();\n    });\n\n    if (banner !== undefined) {\n      return banner;\n    } else {\n      return null;\n    }\n  } else {\n    return null;\n  }\n}\nfunction convertSlugsQueryString(payload) {\n  var query = '';\n\n  if (payload.length > 0) {\n    payload.forEach(function (item) {\n      if (query === '') {\n        query = \"slug_in=\".concat(item);\n      } else {\n        query = query + \"&slug_in=\".concat(item);\n      }\n    });\n  }\n\n  return query;\n} //prepare menu\n\nfunction prepareMenuWithHashtag() {\n  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  if (data.length === 0) return _public_data_menu_json__WEBPACK_IMPORTED_MODULE_0__[\"primaryMenu\"]; //TODO: primaryMenu is similar to defaultData !?\n\n  var defaultData = Object.assign([], _public_data_menu_json__WEBPACK_IMPORTED_MODULE_0__[\"primaryMenu\"]);\n  console.log(defaultData);\n  defaultData = defaultData.map(function (menu, index) {\n    // menu.subMenu = []\n    if (menu.text.includes('Homepage')) {\n      menu.text = 'Trang chủ';\n      menu.subMenu = [];\n    }\n\n    if (menu.text.includes('Blog')) {\n      menu.text = 'Bài viết';\n      menu.subMenu = [];\n    }\n\n    if (menu.text.includes('Categories')) {\n      menu.text = 'Hashtag';\n      menu.url = '/blog';\n      menu.endpoint = null;\n      menu.type = null;\n      menu.subMenu = data.map(function (subMenu) {\n        return {\n          text: subMenu.name,\n          url: '/blog?hashtag=' + subMenu.url,\n          id: subMenu.id\n        };\n      });\n    }\n\n    if (menu.text.includes('About')) {\n      menu.text = 'Chúng tôi';\n    }\n\n    if (menu.text.includes('Contact')) {\n      menu.text = 'Liên hệ';\n    }\n\n    return menu;\n  });\n  return defaultData;\n} //convert string to slug\n\nfunction stringToSlug(str) {\n  str = str.replace(/^\\s+|\\s+$/g, ''); // trim\n\n  str = str.toLowerCase(); // remove accents, swap ñ for n, etc\n\n  var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';\n  var to = 'aaaaeeeeiiiioooouuuunc------';\n\n  for (var i = 0, l = from.length; i < l; i++) {\n    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));\n  }\n\n  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars\n  .replace(/\\s+/g, '-') // collapse whitespace and replace by -\n  .replace(/-+/g, '-'); // collapse dashes\n\n  return str;\n}\nfunction stringToSlugVN() {\n  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var title, slug; //Lấy text từ thẻ input title\n  // title = document.getElementById(\"title\").value;\n\n  title = str; //Đổi chữ hoa thành chữ thường\n\n  slug = title.toLowerCase(); //Đổi ký tự có dấu thành không dấu\n\n  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');\n  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');\n  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');\n  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');\n  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');\n  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');\n  slug = slug.replace(/đ/gi, 'd'); //Xóa các ký tự đặt biệt\n\n  slug = slug.replace(/\\`|\\~|\\!|\\@|\\#|\\||\\$|\\%|\\^|\\&|\\*|\\(|\\)|\\+|\\=|\\,|\\.|\\/|\\?|\\>|\\<|\\'|\\\"|\\:|\\;|_/gi, ''); //Đổi khoảng trắng thành ký tự gạch ngang\n\n  slug = slug.replace(/ /gi, '-'); //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang\n  //Phòng trường hợp người nhập vào quá nhiều ký tự trắng\n\n  slug = slug.replace(/\\-\\-\\-\\-\\-/gi, '-');\n  slug = slug.replace(/\\-\\-\\-\\-/gi, '-');\n  slug = slug.replace(/\\-\\-\\-/gi, '-');\n  slug = slug.replace(/\\-\\-/gi, '-'); //Xóa các ký tự gạch ngang ở đầu và cuối\n\n  slug = '@' + slug + '@';\n  slug = slug.replace(/\\@\\-|\\-\\@|\\@/gi, ''); //In slug ra textbox có id “slug”\n  // document.getElementById('slug').value = slug;\n\n  return slug;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbGl0aWVzL3Byb2R1Y3QtaGVscGVyLmpzPzNhYTMiXSwibmFtZXMiOlsiZm9ybWF0Q3VycmVuY3kiLCJudW0iLCJ1bmRlZmluZWQiLCJwYXJzZUZsb2F0IiwidG9TdHJpbmciLCJyZXBsYWNlIiwiZ2V0UG9zdHNCeUNvbGxldGlvblNsdWciLCJjb2xsZWN0aW9ucyIsImNvbGxlY3Rpb25TbHVnIiwibGVuZ3RoIiwicmVzdWx0IiwiZmlsdGVyIiwic29tZSIsInNsdWciLCJpbmNsdWRlcyIsImdldFBvc3RzQnlDYXRlZ29yeVNsdWciLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnlTbHVnIiwiZ2V0SXRlbUJ5U2x1ZyIsImJhbm5lcnMiLCJiYW5uZXIiLCJmaW5kIiwiaXRlbSIsImNvbnZlcnRTbHVnc1F1ZXJ5U3RyaW5nIiwicGF5bG9hZCIsInF1ZXJ5IiwiZm9yRWFjaCIsInByZXBhcmVNZW51V2l0aEhhc2h0YWciLCJkYXRhIiwicHJpbWFyeU1lbnUiLCJkZWZhdWx0RGF0YSIsIk9iamVjdCIsImFzc2lnbiIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJtZW51IiwiaW5kZXgiLCJ0ZXh0Iiwic3ViTWVudSIsInVybCIsImVuZHBvaW50IiwidHlwZSIsIm5hbWUiLCJpZCIsInN0cmluZ1RvU2x1ZyIsInN0ciIsInRvTG93ZXJDYXNlIiwiZnJvbSIsInRvIiwiaSIsImwiLCJSZWdFeHAiLCJjaGFyQXQiLCJzdHJpbmdUb1NsdWdWTiIsInRpdGxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTQSxjQUFULENBQXdCQyxHQUF4QixFQUE2QjtBQUNsQyxNQUFJQSxHQUFHLEtBQUtDLFNBQVosRUFBdUI7QUFDckIsV0FBT0MsVUFBVSxDQUFDRixHQUFELENBQVYsQ0FDSkcsUUFESSxHQUVKQyxPQUZJLENBRUkseUJBRkosRUFFK0Is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Q0FBYSxRQUFiLEVBQXVCLEdBQXZCLENBQVAsQ0E5QnVDLENBK0J2Qzs7QUFDQVEsTUFBSSxHQUFHLE1BQU1BLElBQU4sR0FBYSxHQUFwQjtBQUNBQSxNQUFJLEdBQUdBLElBQUksQ0FBQ1IsT0FBTCxDQUFhLGdCQUFiLEVBQStCLEVBQS9CLENBQVAsQ0FqQ3VDLENBa0N2QztBQUNBOztBQUNBLFNBQU9RLElBQVA7QUFDRCIsImZpbGUiOiIuL3V0aWxpdGllcy9wcm9kdWN0LWhlbHBlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaW1hcnlNZW51IH0gZnJvbSAnfi9wdWJsaWMvZGF0YS9tZW51Lmpzb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3kobnVtKSB7XG4gIGlmIChudW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KG51bSlcbiAgICAgIC50b1N0cmluZygpXG4gICAgICAucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnJDEsJyk7XG4gIH0gZWxzZSB7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RzQnlDb2xsZXRpb25TbHVnKGNvbGxlY3Rpb25zLCBjb2xsZWN0aW9uU2x1Zykge1xuICBpZiAoY29sbGVjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGNvbGxlY3Rpb25zLmZpbHRlcigoeyBjb2xsZWN0aW9ucyB9KSA9PiB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbnMuc29tZSgoeyBzbHVnIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25TbHVnLmluY2x1ZGVzKHNsdWcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdHNCeUNhdGVnb3J5U2x1ZyhjYXRlZ29yaWVzLCBjYXRlZ29yeVNsdWcpIHtcbiAgaWYgKGNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGNhdGVnb3JpZXMuZmlsdGVyKCh7IGNhdGVnb3JpZXMgfSkgPT4ge1xuICAgICAgcmV0dXJuIGNhdGVnb3JpZXMuc29tZSgoeyBzbHVnIH0pID0+IHtcbiAgICAgICAgLypjb25zb2xlLmxvZyhzbHVnKTsqL1xuICAgICAgICByZXR1cm4gY2F0ZWdvcnlTbHVnLmluY2x1ZGVzKHNsdWcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbUJ5U2x1ZyhiYW5uZXJzLCBzbHVnKSB7XG4gIGlmIChiYW5uZXJzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBiYW5uZXIgPSBiYW5uZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uc2x1ZyA9PT0gc2x1Zy50b1N0cmluZygpKTtcbiAgICBpZiAoYmFubmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBiYW5uZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFNsdWdzUXVlcnlTdHJpbmcocGF5bG9hZCkge1xuICBsZXQgcXVlcnkgPSAnJztcbiAgaWYgKHBheWxvYWQubGVuZ3RoID4gMCkge1xuICAgIHBheWxvYWQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKHF1ZXJ5ID09PSAnJykge1xuICAgICAgICBxdWVyeSA9IGBzbHVnX2luPSR7aXRlbX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVlcnkgPSBxdWVyeSArIGAmc2x1Z19pbj0ke2l0ZW19YDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcXVlcnk7XG59XG4vL3ByZXBhcmUgbWVudVxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVNZW51V2l0aEhhc2h0YWcoZGF0YSA9IFtdKSB7XG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHByaW1hcnlNZW51O1xuICAvL1RPRE86IHByaW1hcnlNZW51IGlzIHNpbWlsYXIgdG8gZGVmYXVsdERhdGEgIT9cbiAgbGV0IGRlZmF1bHREYXRhID0gT2JqZWN0LmFzc2lnbihbXSwgcHJpbWFyeU1lbnUpO1xuICBjb25zb2xlLmxvZyhkZWZhdWx0RGF0YSk7XG4gIGRlZmF1bHREYXRhID0gZGVmYXVsdERhdGEubWFwKChtZW51LCBpbmRleCkgPT4ge1xuICAgIC8vIG1lbnUuc3ViTWVudSA9IFtdXG4gICAgaWYgKG1lbnUudGV4dC5pbmNsdWRlcygnSG9tZXBhZ2UnKSkge1xuICAgICAgbWVudS50ZXh0ID0gJ1RyYW5nIGNo4bunJztcbiAgICAgIG1lbnUuc3ViTWVudSA9IFtdO1xuICAgIH1cbiAgICBpZiAobWVudS50ZXh0LmluY2x1ZGVzKCdCbG9nJykpIHtcbiAgICAgIG1lbnUudGV4dCA9ICdCw6BpIHZp4bq/dCc7XG4gICAgICBtZW51LnN1Yk1lbnUgPSBbXTtcbiAgICB9XG4gICAgaWYgKG1lbnUudGV4dC5pbmNsdWRlcygnQ2F0ZWdvcmllcycpKSB7XG4gICAgICBtZW51LnRleHQgPSAnSGFzaHRhZyc7XG4gICAgICBtZW51LnVybCA9ICcvYmxvZyc7XG4gICAgICBtZW51LmVuZHBvaW50ID0gbnVsbDtcbiAgICAgIG1lbnUudHlwZSA9IG51bGw7XG4gICAgICBtZW51LnN1Yk1lbnUgPSBkYXRhLm1hcCgoc3ViTWVudSkgPT4gKHtcbiAgICAgICAgdGV4dDogc3ViTWVudS5uYW1lLFxuICAgICAgICB1cmw6ICcvYmxvZz9oYXNodGFnPScgKyBzdWJNZW51LnVybCxcbiAgICAgICAgaWQ6IHN1Yk1lbnUuaWRcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYgKG1lbnUudGV4dC5pbmNsdWRlcygnQWJvdXQnKSkge1xuICAgICAgbWVudS50ZXh0ID0gJ0Now7puZyB0w7RpJztcbiAgICB9XG4gICAgaWYgKG1lbnUudGV4dC5pbmNsdWRlcygnQ29udGFjdCcpKSB7XG4gICAgICBtZW51LnRleHQgPSAnTGnDqm4gaOG7hyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbnU7XG4gIH0pO1xuXG4gIHJldHVybiBkZWZhdWx0RGF0YTtcbn1cbi8vY29udmVydCBzdHJpbmcgdG8gc2x1Z1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvU2x1ZyhzdHIpIHtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTsgLy8gdHJpbVxuICBzdHIgPSBzdHIudG9Mb3dlckNhc2UoKTtcblxuICAvLyByZW1vdmUgYWNjZW50cywgc3dhcCDDsSBmb3IgbiwgZXRjXG4gIHZhciBmcm9tID0gJ8Ogw6HDpMOiw6jDqcOrw6rDrMOtw6/DrsOyw7PDtsO0w7nDusO8w7vDscOnwrcvXyw6Oyc7XG4gIHZhciB0byA9ICdhYWFhZWVlZWlpaWlvb29vdXV1dW5jLS0tLS0tJztcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZnJvbS5jaGFyQXQoaSksICdnJyksIHRvLmNoYXJBdChpKSk7XG4gIH1cblxuICBzdHIgPSBzdHJcbiAgICAucmVwbGFjZSgvW15hLXowLTkgLV0vZywgJycpIC8vIHJlbW92ZSBpbnZhbGlkIGNoYXJzXG4gICAgLnJlcGxhY2UoL1xccysvZywgJy0nKSAvLyBjb2xsYXBzZSB3aGl0ZXNwYWNlIGFuZCByZXBsYWNlIGJ5IC1cbiAgICAucmVwbGFjZSgvLSsvZywgJy0nKTsgLy8gY29sbGFwc2UgZGFzaGVzXG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvU2x1Z1ZOKHN0ciA9ICcnKSB7XG4gIHZhciB0aXRsZSwgc2x1ZztcblxuICAvL0zhuqV5IHRleHQgdOG7qyB0aOG6uyBpbnB1dCB0aXRsZVxuICAvLyB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG4gIHRpdGxlID0gc3RyO1xuXG4gIC8vxJDhu5VpIGNo4buvIGhvYSB0aMOgbmggY2jhu68gdGjGsOG7nW5nXG4gIHNsdWcgPSB0aXRsZS50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vxJDhu5VpIGvDvSB04buxIGPDsyBk4bqldSB0aMOgbmgga2jDtG5nIGThuqV1XG4gIHNsdWcgPSBzbHVnLnJlcGxhY2UoL8OhfMOgfOG6o3zhuqF8w6N8xIN84bqvfOG6sXzhurN84bq1fOG6t3zDonzhuqV84bqnfOG6qXzhuqt84bqtL2dpLCAnYScpO1xuICBzbHVnID0gc2x1Zy5yZXBsYWNlKC/DqXzDqHzhurt84bq9fOG6uXzDqnzhur984buBfOG7g3zhu4V84buHL2dpLCAnZScpO1xuICBzbHVnID0gc2x1Zy5yZXBsYWNlKC9pfMOtfMOsfOG7iXzEqXzhu4svZ2ksICdpJyk7XG4gIHNsdWcgPSBzbHVnLnJlcGxhY2UoL8OzfMOyfOG7j3zDtXzhu418w7R84buRfOG7k3zhu5V84buXfOG7mXzGoXzhu5t84budfOG7n3zhu6F84bujL2dpLCAnbycpO1xuICBzbHVnID0gc2x1Zy5yZXBsYWNlKC/DunzDuXzhu6d8xal84bulfMawfOG7qXzhu6t84butfOG7r3zhu7EvZ2ksICd1Jyk7XG4gIHNsdWcgPSBzbHVnLnJlcGxhY2UoL8O9fOG7s3zhu7d84bu5fOG7tS9naSwgJ3knKTtcbiAgc2x1ZyA9IHNsdWcucmVwbGFjZSgvxJEvZ2ksICdkJyk7XG4gIC8vWMOzYSBjw6FjIGvDvSB04buxIMSR4bq3dCBiaeG7h3RcbiAgc2x1ZyA9IHNsdWcucmVwbGFjZShcbiAgICAvXFxgfFxcfnxcXCF8XFxAfFxcI3xcXHx8XFwkfFxcJXxcXF58XFwmfFxcKnxcXCh8XFwpfFxcK3xcXD18XFwsfFxcLnxcXC98XFw/fFxcPnxcXDx8XFwnfFxcXCJ8XFw6fFxcO3xfL2dpLFxuICAgICcnXG4gICk7XG4gIC8vxJDhu5VpIGtob+G6o25nIHRy4bqvbmcgdGjDoG5oIGvDvSB04buxIGfhuqFjaCBuZ2FuZ1xuICBzbHVnID0gc2x1Zy5yZXBsYWNlKC8gL2dpLCAnLScpO1xuICAvL8SQ4buVaSBuaGnhu4F1IGvDvSB04buxIGfhuqFjaCBuZ2FuZyBsacOqbiB0aeG6v3AgdGjDoG5oIDEga8O9IHThu7EgZ+G6oWNoIG5nYW5nXG4gIC8vUGjDsm5nIHRyxrDhu51uZyBo4bujcCBuZ8aw4budaSBuaOG6rXAgdsOgbyBxdcOhIG5oaeG7gXUga8O9IHThu7EgdHLhuq9uZ1xuICBzbHVnID0gc2x1Zy5yZXBsYWNlKC9cXC1cXC1cXC1cXC1cXC0vZ2ksICctJyk7XG4gIHNsdWcgPSBzbHVnLnJlcGxhY2UoL1xcLVxcLVxcLVxcLS9naSwgJy0nKTtcbiAgc2x1ZyA9IHNsdWcucmVwbGFjZSgvXFwtXFwtXFwtL2dpLCAnLScpO1xuICBzbHVnID0gc2x1Zy5yZXBsYWNlKC9cXC1cXC0vZ2ksICctJyk7XG4gIC8vWMOzYSBjw6FjIGvDvSB04buxIGfhuqFjaCBuZ2FuZyDhu58gxJHhuqd1IHbDoCBjdeG7kWlcbiAgc2x1ZyA9ICdAJyArIHNsdWcgKyAnQCc7XG4gIHNsdWcgPSBzbHVnLnJlcGxhY2UoL1xcQFxcLXxcXC1cXEB8XFxAL2dpLCAnJyk7XG4gIC8vSW4gc2x1ZyByYSB0ZXh0Ym94IGPDsyBpZCDigJxzbHVn4oCdXG4gIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbHVnJykudmFsdWUgPSBzbHVnO1xuICByZXR1cm4gc2x1Zztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utilities/product-helper.js\n");

/***/ })

})