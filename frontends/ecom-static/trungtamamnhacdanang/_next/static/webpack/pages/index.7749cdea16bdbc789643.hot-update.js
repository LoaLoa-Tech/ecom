webpackHotUpdate_N_E("pages/index",{

/***/ "./utilities/product-helper.js":
/*!*************************************!*\
  !*** ./utilities/product-helper.js ***!
  \*************************************/
/*! exports provided: formatCurrency, getPostsByColletionSlug, getPostsByCategorySlug, getItemBySlug, convertSlugsQueryString, prepareMenuWithHashtag, stringToSlug, stringToSlugVN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatCurrency\", function() { return formatCurrency; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostsByColletionSlug\", function() { return getPostsByColletionSlug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostsByCategorySlug\", function() { return getPostsByCategorySlug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getItemBySlug\", function() { return getItemBySlug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertSlugsQueryString\", function() { return convertSlugsQueryString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prepareMenuWithHashtag\", function() { return prepareMenuWithHashtag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringToSlug\", function() { return stringToSlug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringToSlugVN\", function() { return stringToSlugVN; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _public_data_menu_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/public/data/menu.json */ \"./public/data/menu.json\");\nvar _public_data_menu_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ~/public/data/menu.json */ \"./public/data/menu.json\", 1);\n\n\nfunction formatCurrency(num) {\n  if (num !== undefined) {\n    return parseFloat(num).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, '$1,');\n  } else {}\n}\nfunction getPostsByColletionSlug(collections, collectionSlug) {\n  if (collections.length > 0) {\n    var result = collections.filter(function (_ref) {\n      var collections = _ref.collections;\n      return collections.some(function (_ref2) {\n        var slug = _ref2.slug;\n        return collectionSlug.includes(slug);\n      });\n    });\n\n    if (result !== undefined) {\n      return result;\n    } else {\n      return [];\n    }\n  } else {\n    return [];\n  }\n}\nfunction getPostsByCategorySlug(categories, categorySlug) {\n  if (categories.length > 0) {\n    var result = categories.filter(function (_ref3) {\n      var categories = _ref3.categories;\n      return categories.some(function (_ref4) {\n        var slug = _ref4.slug;\n\n        /*console.log(slug);*/\n        return categorySlug.includes(slug);\n      });\n    });\n\n    if (result !== undefined) {\n      return result;\n    } else {\n      return [];\n    }\n  } else {\n    return [];\n  }\n}\nfunction getItemBySlug(banners, slug) {\n  if (banners.length > 0) {\n    var banner = banners.find(function (item) {\n      return item.slug === slug.toString();\n    });\n\n    if (banner !== undefined) {\n      return banner;\n    } else {\n      return null;\n    }\n  } else {\n    return null;\n  }\n}\nfunction convertSlugsQueryString(payload) {\n  var query = '';\n\n  if (payload.length > 0) {\n    payload.forEach(function (item) {\n      if (query === '') {\n        query = \"slug_in=\".concat(item);\n      } else {\n        query = query + \"&slug_in=\".concat(item);\n      }\n    });\n  }\n\n  return query;\n} //prepare menu\n\nfunction prepareMenuWithHashtag() {\n  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  //TODO: primaryMenu is similar to defaultData !?\n  // let defaultData = Object.assign([], primaryMenu);\n  console.log(data);\n  var defaultData = [{\n    text: 'Trang chủ',\n    url: '/',\n    extraClass: 'menu-item-has-children',\n    subClass: 'sub-menu',\n    subMenu: []\n  }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.slice(1, 5).map(function (item) {\n    return {\n      text: item.name,\n      url: \"/blog?hashtag=\".concat(item.url),\n      extraClass: 'menu-item-has-children',\n      subClass: 'sub-menu',\n      subMenu: []\n    };\n  })));\n  console.log(defaultData);\n  defaultData = defaultData.map(function (menu, index) {\n    // menu.subMenu = []\n    if (menu.text.includes('Homepage')) {\n      menu.text = 'Trang chủ';\n      menu.subMenu = [];\n    }\n\n    if (menu.text.includes('Blog')) {\n      menu.text = 'Bài viết';\n      menu.subMenu = [];\n    }\n\n    if (menu.text.includes('Categories')) {\n      menu.text = 'Hashtag';\n      menu.url = '/blog';\n      menu.endpoint = null;\n      menu.type = null;\n      menu.subMenu = data.map(function (subMenu) {\n        return {\n          text: subMenu.name,\n          url: '/blog?hashtag=' + subMenu.url,\n          id: subMenu.id\n        };\n      });\n    }\n\n    if (menu.text.includes('About')) {\n      menu.text = 'Chúng tôi';\n    }\n\n    if (menu.text.includes('Contact')) {\n      menu.text = 'Liên hệ';\n    }\n\n    return menu;\n  });\n  return defaultData;\n} //convert string to slug\n\nfunction stringToSlug(str) {\n  str = str.replace(/^\\s+|\\s+$/g, ''); // trim\n\n  str = str.toLowerCase(); // remove accents, swap ñ for n, etc\n\n  var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';\n  var to = 'aaaaeeeeiiiioooouuuunc------';\n\n  for (var i = 0, l = from.length; i < l; i++) {\n    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));\n  }\n\n  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars\n  .replace(/\\s+/g, '-') // collapse whitespace and replace by -\n  .replace(/-+/g, '-'); // collapse dashes\n\n  return str;\n}\nfunction stringToSlugVN() {\n  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var title, slug; //Lấy text từ thẻ input title\n  // title = document.getElementById(\"title\").value;\n\n  title = str; //Đổi chữ hoa thành chữ thường\n\n  slug = title.toLowerCase(); //Đổi ký tự có dấu thành không dấu\n\n  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');\n  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');\n  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');\n  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');\n  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');\n  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');\n  slug = slug.replace(/đ/gi, 'd'); //Xóa các ký tự đặt biệt\n\n  slug = slug.replace(/\\`|\\~|\\!|\\@|\\#|\\||\\$|\\%|\\^|\\&|\\*|\\(|\\)|\\+|\\=|\\,|\\.|\\/|\\?|\\>|\\<|\\'|\\\"|\\:|\\;|_/gi, ''); //Đổi khoảng trắng thành ký tự gạch ngang\n\n  slug = slug.replace(/ /gi, '-'); //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang\n  //Phòng trường hợp người nhập vào quá nhiều ký tự trắng\n\n  slug = slug.replace(/\\-\\-\\-\\-\\-/gi, '-');\n  slug = slug.replace(/\\-\\-\\-\\-/gi, '-');\n  slug = slug.replace(/\\-\\-\\-/gi, '-');\n  slug = slug.replace(/\\-\\-/gi, '-'); //Xóa các ký tự gạch ngang ở đầu và cuối\n\n  slug = '@' + slug + '@';\n  slug = slug.replace(/\\@\\-|\\-\\@|\\@/gi, ''); //In slug ra textbox có id “slug”\n  // document.getElementById('slug').value = slug;\n\n  return slug;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbGl0aWVzL3Byb2R1Y3QtaGVscGVyLmpzPzNhYTMiXSwibmFtZXMiOlsiZm9ybWF0Q3VycmVuY3kiLCJudW0iLCJ1bmRlZmluZWQiLCJwYXJzZUZsb2F0IiwidG9TdHJpbmciLCJyZXBsYWNlIiwiZ2V0UG9zdHNCeUNvbGxldGlvblNsdWciLCJjb2xsZWN0aW9ucyIsImNvbGxlY3Rpb25TbHVnIiwibGVuZ3RoIiwicmVzdWx0IiwiZmlsdGVyIiwic29tZSIsInNsdWciLCJpbmNsdWRlcyIsImdldFBvc3RzQnlDYXRlZ29yeVNsdWciLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnlTbHVnIiwiZ2V0SXRlbUJ5U2x1ZyIsImJhbm5lcnMiLCJiYW5uZXIiLCJmaW5kIiwiaXRlbSIsImNvbnZlcnRTbHVnc1F1ZXJ5U3RyaW5nIiwicGF5bG9hZCIsInF1ZXJ5IiwiZm9yRWFjaCIsInByZXBhcmVNZW51V2l0aEhhc2h0YWciLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRlZmF1bHREYXRhIiwidGV4dCIsInVybCIsImV4dHJhQ2xhc3MiLCJzdWJDbGFzcyIsInN1Yk1lbnUiLCJzbGljZSIsIm1hcCIsIm5hbWUiLCJtZW51IiwiaW5kZXgiLCJlbmRwb2ludCIsInR5cGUiLCJpZCIsInN0cmluZ1RvU2x1ZyIsInN0ciIsInRvTG93ZXJDYXNlIiwiZnJvbSIsInRvIiwiaSIsImwiLCJSZWdFeHAiLCJjaGFyQXQiLCJzdHJpbmdUb1NsdWdWTiIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxTQUFTQSxjQUFULENBQXdCQyxHQUF4QixFQUE2QjtBQUNsQyxNQUFJQSxHQUFHLEtBQUtDLFNBQVosRUFBdUI7QUFDckIsV0FBT0MsVUFBVSxDQUFDRixHQUFELENBQVYsQ0FDSkcsUUFESSxHQUVKQyxPQUZJLENBRUkseUJBRkosRUFFK0IsS0FGL0IsQ0FBUDtBQUdELEdBSkQsTUFJTyxDQUNOO0FBQ0Y7QUFFTSxT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QUFvQixHQUFwQixDQUFQLENBeEJ1QyxDQXlCdkM7QUFDQTs7QUFDQVEsTUFBSSxHQUFHQSxJQUFJLENBQUNSLE9BQUwsQ0FBYSxjQUFiLEVBQTZCLEdBQTdCLENBQVA7QUFDQVEsTUFBSSxHQUFHQSxJQUFJLENBQUNSLE9BQUwsQ0FBYSxZQUFiLEVBQTJCLEdBQTNCLENBQVA7QUFDQVEsTUFBSSxHQUFHQSxJQUFJLENBQUNSLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLEdBQXpCLENBQVA7QUFDQVEsTUFBSSxHQUFHQSxJQUFJLENBQUNSLE9BQUwsQ0FBYSxRQUFiLEVBQXVCLEdBQXZCLENBQVAsQ0E5QnVDLENBK0J2Qzs7QUFDQVEsTUFBSSxHQUFHLE1BQU1BLElBQU4sR0FBYSxHQUFwQjtBQUNBQSxNQUFJLEdBQUdBLElBQUksQ0FBQ1IsT0FBTCxDQUFhLGdCQUFiLEVBQStCLEVBQS9CLENBQVAsQ0FqQ3VDLENBa0N2QztBQUNBOztBQUNBLFNBQU9RLElBQVA7QUFDRCIsImZpbGUiOiIuL3V0aWxpdGllcy9wcm9kdWN0LWhlbHBlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaW1hcnlNZW51IH0gZnJvbSAnfi9wdWJsaWMvZGF0YS9tZW51Lmpzb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3kobnVtKSB7XG4gIGlmIChudW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KG51bSlcbiAgICAgIC50b1N0cmluZygpXG4gICAgICAucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnJDEsJyk7XG4gIH0gZWxzZSB7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RzQnlDb2xsZXRpb25TbHVnKGNvbGxlY3Rpb25zLCBjb2xsZWN0aW9uU2x1Zykge1xuICBpZiAoY29sbGVjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGNvbGxlY3Rpb25zLmZpbHRlcigoeyBjb2xsZWN0aW9ucyB9KSA9PiB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbnMuc29tZSgoeyBzbHVnIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25TbHVnLmluY2x1ZGVzKHNsdWcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdHNCeUNhdGVnb3J5U2x1ZyhjYXRlZ29yaWVzLCBjYXRlZ29yeVNsdWcpIHtcbiAgaWYgKGNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGNhdGVnb3JpZXMuZmlsdGVyKCh7IGNhdGVnb3JpZXMgfSkgPT4ge1xuICAgICAgcmV0dXJuIGNhdGVnb3JpZXMuc29tZSgoeyBzbHVnIH0pID0+IHtcbiAgICAgICAgLypjb25zb2xlLmxvZyhzbHVnKTsqL1xuICAgICAgICByZXR1cm4gY2F0ZWdvcnlTbHVnLmluY2x1ZGVzKHNsdWcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbUJ5U2x1ZyhiYW5uZXJzLCBzbHVnKSB7XG4gIGlmIChiYW5uZXJzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBiYW5uZXIgPSBiYW5uZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uc2x1ZyA9PT0gc2x1Zy50b1N0cmluZygpKTtcbiAgICBpZiAoYmFubmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBiYW5uZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFNsdWdzUXVlcnlTdHJpbmcocGF5bG9hZCkge1xuICBsZXQgcXVlcnkgPSAnJztcbiAgaWYgKHBheWxvYWQubGVuZ3RoID4gMCkge1xuICAgIHBheWxvYWQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKHF1ZXJ5ID09PSAnJykge1xuICAgICAgICBxdWVyeSA9IGBzbHVnX2luPSR7aXRlbX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVlcnkgPSBxdWVyeSArIGAmc2x1Z19pbj0ke2l0ZW19YDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcXVlcnk7XG59XG4vL3ByZXBhcmUgbWVudVxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVNZW51V2l0aEhhc2h0YWcoZGF0YSA9IFtdKSB7XG4gIC8vVE9ETzogcHJpbWFyeU1lbnUgaXMgc2ltaWxhciB0byBkZWZhdWx0RGF0YSAhP1xuICAvLyBsZXQgZGVmYXVsdERhdGEgPSBPYmplY3QuYXNzaWduKFtdLCBwcmltYXJ5TWVudSk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBsZXQgZGVmYXVsdERhdGEgPSBbXG4gICAge1xuICAgICAgdGV4dDogJ1RyYW5nIGNo4bunJyxcbiAgICAgIHVybDogJy8nLFxuICAgICAgZXh0cmFDbGFzczogJ21lbnUtaXRlbS1oYXMtY2hpbGRyZW4nLFxuICAgICAgc3ViQ2xhc3M6ICdzdWItbWVudScsXG4gICAgICBzdWJNZW51OiBbXVxuICAgIH0sXG4gICAgLi4uZGF0YS5zbGljZSgxLCA1KS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IGl0ZW0ubmFtZSxcbiAgICAgICAgdXJsOiBgL2Jsb2c/aGFzaHRhZz0ke2l0ZW0udXJsfWAsXG4gICAgICAgIGV4dHJhQ2xhc3M6ICdtZW51LWl0ZW0taGFzLWNoaWxkcmVuJyxcbiAgICAgICAgc3ViQ2xhc3M6ICdzdWItbWVudScsXG4gICAgICAgIHN1Yk1lbnU6IFtdXG4gICAgICB9O1xuICAgIH0pXG4gIF07XG4gIGNvbnNvbGUubG9nKGRlZmF1bHREYXRhKTtcbiAgZGVmYXVsdERhdGEgPSBkZWZhdWx0RGF0YS5tYXAoKG1lbnUsIGluZGV4KSA9PiB7XG4gICAgLy8gbWVudS5zdWJNZW51ID0gW11cbiAgICBpZiAobWVudS50ZXh0LmluY2x1ZGVzKCdIb21lcGFnZScpKSB7XG4gICAgICBtZW51LnRleHQgPSAnVHJhbmcgY2jhu6cnO1xuICAgICAgbWVudS5zdWJNZW51ID0gW107XG4gICAgfVxuICAgIGlmIChtZW51LnRleHQuaW5jbHVkZXMoJ0Jsb2cnKSkge1xuICAgICAgbWVudS50ZXh0ID0gJ0LDoGkgdmnhur90JztcbiAgICAgIG1lbnUuc3ViTWVudSA9IFtdO1xuICAgIH1cbiAgICBpZiAobWVudS50ZXh0LmluY2x1ZGVzKCdDYXRlZ29yaWVzJykpIHtcbiAgICAgIG1lbnUudGV4dCA9ICdIYXNodGFnJztcbiAgICAgIG1lbnUudXJsID0gJy9ibG9nJztcbiAgICAgIG1lbnUuZW5kcG9pbnQgPSBudWxsO1xuICAgICAgbWVudS50eXBlID0gbnVsbDtcbiAgICAgIG1lbnUuc3ViTWVudSA9IGRhdGEubWFwKChzdWJNZW51KSA9PiAoe1xuICAgICAgICB0ZXh0OiBzdWJNZW51Lm5hbWUsXG4gICAgICAgIHVybDogJy9ibG9nP2hhc2h0YWc9JyArIHN1Yk1lbnUudXJsLFxuICAgICAgICBpZDogc3ViTWVudS5pZFxuICAgICAgfSkpO1xuICAgIH1cbiAgICBpZiAobWVudS50ZXh0LmluY2x1ZGVzKCdBYm91dCcpKSB7XG4gICAgICBtZW51LnRleHQgPSAnQ2jDum5nIHTDtGknO1xuICAgIH1cbiAgICBpZiAobWVudS50ZXh0LmluY2x1ZGVzKCdDb250YWN0JykpIHtcbiAgICAgIG1lbnUudGV4dCA9ICdMacOqbiBo4buHJztcbiAgICB9XG5cbiAgICByZXR1cm4gbWVudTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlZmF1bHREYXRhO1xufVxuLy9jb252ZXJ0IHN0cmluZyB0byBzbHVnXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9TbHVnKHN0cikge1xuICBzdHIgPSBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpOyAvLyB0cmltXG4gIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIHJlbW92ZSBhY2NlbnRzLCBzd2FwIMOxIGZvciBuLCBldGNcbiAgdmFyIGZyb20gPSAnw6DDocOkw6LDqMOpw6vDqsOsw63Dr8Ouw7LDs8O2w7TDucO6w7zDu8Oxw6fCty9fLDo7JztcbiAgdmFyIHRvID0gJ2FhYWFlZWVlaWlpaW9vb291dXV1bmMtLS0tLS0nO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChmcm9tLmNoYXJBdChpKSwgJ2cnKSwgdG8uY2hhckF0KGkpKTtcbiAgfVxuXG4gIHN0ciA9IHN0clxuICAgIC5yZXBsYWNlKC9bXmEtejAtOSAtXS9nLCAnJykgLy8gcmVtb3ZlIGludmFsaWQgY2hhcnNcbiAgICAucmVwbGFjZSgvXFxzKy9nLCAnLScpIC8vIGNvbGxhcHNlIHdoaXRlc3BhY2UgYW5kIHJlcGxhY2UgYnkgLVxuICAgIC5yZXBsYWNlKC8tKy9nLCAnLScpOyAvLyBjb2xsYXBzZSBkYXNoZXNcblxuICByZXR1cm4gc3RyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9TbHVnVk4oc3RyID0gJycpIHtcbiAgdmFyIHRpdGxlLCBzbHVnO1xuXG4gIC8vTOG6pXkgdGV4dCB04burIHRo4bq7IGlucHV0IHRpdGxlXG4gIC8vIHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgdGl0bGUgPSBzdHI7XG5cbiAgLy/EkOG7lWkgY2jhu68gaG9hIHRow6BuaCBjaOG7ryB0aMaw4budbmdcbiAgc2x1ZyA9IHRpdGxlLnRvTG93ZXJDYXNlKCk7XG5cbiAgLy/EkOG7lWkga8O9IHThu7EgY8OzIGThuqV1IHRow6BuaCBraMO0bmcgZOG6pXVcbiAgc2x1ZyA9IHNsdWcucmVwbGFjZSgvw6F8w6B84bqjfOG6oXzDo3zEg3zhuq984bqxfOG6s3zhurV84bq3fMOifOG6pXzhuqd84bqpfOG6q3zhuq0vZ2ksICdhJyk7XG4gIHNsdWcgPSBzbHVnLnJlcGxhY2UoL8OpfMOofOG6u3zhur184bq5fMOqfOG6v3zhu4F84buDfOG7hXzhu4cvZ2ksICdlJyk7XG4gIHNsdWcgPSBzbHVnLnJlcGxhY2UoL2l8w618w6x84buJfMSpfOG7iy9naSwgJ2knKTtcbiAgc2x1ZyA9IHNsdWcucmVwbGFjZSgvw7N8w7J84buPfMO1fOG7jXzDtHzhu5F84buTfOG7lXzhu5d84buZfMahfOG7m3zhu5184buffOG7oXzhu6MvZ2ksICdvJyk7XG4gIHNsdWcgPSBzbHVnLnJlcGxhY2UoL8O6fMO5fOG7p3zFqXzhu6V8xrB84bupfOG7q3zhu6184buvfOG7sS9naSwgJ3UnKTtcbiAgc2x1ZyA9IHNsdWcucmVwbGFjZSgvw7184buzfOG7t3zhu7l84bu1L2dpLCAneScpO1xuICBzbHVnID0gc2x1Zy5yZXBsYWNlKC/EkS9naSwgJ2QnKTtcbiAgLy9Yw7NhIGPDoWMga8O9IHThu7EgxJHhurd0IGJp4buHdFxuICBzbHVnID0gc2x1Zy5yZXBsYWNlKFxuICAgIC9cXGB8XFx+fFxcIXxcXEB8XFwjfFxcfHxcXCR8XFwlfFxcXnxcXCZ8XFwqfFxcKHxcXCl8XFwrfFxcPXxcXCx8XFwufFxcL3xcXD98XFw+fFxcPHxcXCd8XFxcInxcXDp8XFw7fF8vZ2ksXG4gICAgJydcbiAgKTtcbiAgLy/EkOG7lWkga2hv4bqjbmcgdHLhuq9uZyB0aMOgbmgga8O9IHThu7EgZ+G6oWNoIG5nYW5nXG4gIHNsdWcgPSBzbHVnLnJlcGxhY2UoLyAvZ2ksICctJyk7XG4gIC8vxJDhu5VpIG5oaeG7gXUga8O9IHThu7EgZ+G6oWNoIG5nYW5nIGxpw6puIHRp4bq/cCB0aMOgbmggMSBrw70gdOG7sSBn4bqhY2ggbmdhbmdcbiAgLy9QaMOybmcgdHLGsOG7nW5nIGjhu6NwIG5nxrDhu51pIG5o4bqtcCB2w6BvIHF1w6Egbmhp4buBdSBrw70gdOG7sSB0cuG6r25nXG4gIHNsdWcgPSBzbHVnLnJlcGxhY2UoL1xcLVxcLVxcLVxcLVxcLS9naSwgJy0nKTtcbiAgc2x1ZyA9IHNsdWcucmVwbGFjZSgvXFwtXFwtXFwtXFwtL2dpLCAnLScpO1xuICBzbHVnID0gc2x1Zy5yZXBsYWNlKC9cXC1cXC1cXC0vZ2ksICctJyk7XG4gIHNsdWcgPSBzbHVnLnJlcGxhY2UoL1xcLVxcLS9naSwgJy0nKTtcbiAgLy9Yw7NhIGPDoWMga8O9IHThu7EgZ+G6oWNoIG5nYW5nIOG7nyDEkeG6p3UgdsOgIGN14buRaVxuICBzbHVnID0gJ0AnICsgc2x1ZyArICdAJztcbiAgc2x1ZyA9IHNsdWcucmVwbGFjZSgvXFxAXFwtfFxcLVxcQHxcXEAvZ2ksICcnKTtcbiAgLy9JbiBzbHVnIHJhIHRleHRib3ggY8OzIGlkIOKAnHNsdWfigJ1cbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsdWcnKS52YWx1ZSA9IHNsdWc7XG4gIHJldHVybiBzbHVnO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utilities/product-helper.js\n");

/***/ })

})