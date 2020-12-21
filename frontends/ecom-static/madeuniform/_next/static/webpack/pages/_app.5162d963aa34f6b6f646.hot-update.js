webpackHotUpdate_N_E("pages/_app",{

/***/ "./apollo/SellerProvider.js":
/*!**********************************!*\
  !*** ./apollo/SellerProvider.js ***!
  \**********************************/
/*! exports provided: SellerContext, SellerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SellerContext\", function() { return SellerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SellerProvider\", function() { return SellerProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _Query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Query */ \"./apollo/Query.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-ga */ \"./node_modules/react-ga/dist/esm/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/huy/Documents/ecom-static/apollo/SellerProvider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n        query($host: String) {\\n          allUsers(where: { host: $host }) {\\n            id\\n            email\\n            file {\\n              publicUrl\\n            }\\n            logo {\\n              publicUrl\\n            }\\n            store\\n            slogan\\n            intro\\n            contact\\n            color\\n            primary\\n            backgroundColor\\n            productBackgroundColor\\n            pageId\\n            googleId\\n            phone\\n            email\\n            address\\n            prices\\n          }\\n        }\\n      \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar SellerContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])();\n\n\n\n\nvar level = [0, 5, 8, 13, 21, 34, 55, 89];\nvar prices = [100000, 200000, 500000, 1000000, 2000000];\n\nvar spacing = function spacing(i) {\n  return level[i];\n};\n\nvar uri = false ? undefined : \"http://demo.loaloa.tech\";\nvar SellerProvider = function SellerProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var url = window.location.pathname + window.location.search;\n  });\n  return __jsx(_Query__WEBPACK_IMPORTED_MODULE_4__[\"Query\"], {\n    query: Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject()),\n    variables: {\n      // host: typeof window !== \"undefined\" ? window.location.host : null,\n      host: 'trungtamamnhacdanang.com'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, function (_ref2) {\n    var _theme$prices;\n\n    var data = _ref2.data,\n        error = _ref2.error,\n        loading = _ref2.loading;\n    var theme = data === null || data === void 0 ? void 0 : data.allUsers[0];\n    return theme ? __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }\n    }, __jsx(SellerContext.Provider, {\n      value: _objectSpread(_objectSpread({}, theme), {}, {\n        server: false ? undefined : \"http://demo.loaloa.tech\",\n        seller: {\n          id: theme.id\n        },\n        spacing: spacing,\n        prices: theme.prices ? (_theme$prices = theme.prices) === null || _theme$prices === void 0 ? void 0 : _theme$prices.replace(/ /g, \"\").split(\",\").map(function (e) {\n          return Number(e);\n        }) : [],\n        css: css(theme)\n      }),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 13\n      }\n    }, children)) : null;\n  });\n};\n\n_s(SellerProvider, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = SellerProvider;\n\nvar css = function css(theme) {\n  return {\n    btnIcon: function btnIcon() {\n      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -5;\n      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : theme.backgroundColor;\n      return {\n        position: \"absolute\",\n        top: top,\n        right: -5,\n        padding: 3,\n        paddingTop: 5,\n        width: 30,\n        height: 30,\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        borderRadius: \"50%\",\n        color: color,\n        fontWeight: 800,\n        backgroundColor: theme.primary\n      };\n    },\n    input: {\n      display: \"block-inline\",\n      border: \"1px solid \".concat(theme === null || theme === void 0 ? void 0 : theme.productBackgroundColor),\n      padding: spacing(1),\n      paddingLeft: spacing(3),\n      borderRadius: spacing(2),\n      backgroundColor: theme === null || theme === void 0 ? void 0 : theme.backgroundColor,\n      color: theme.color\n    },\n    btnInline: {\n      display: \"inline-block\",\n      backgroundColor: theme.primary,\n      color: theme.backgroundColor,\n      border: \"none\",\n      borderRadius: 35,\n      minWidth: 35\n    },\n    button: {\n      color: theme.backgroundColor,\n      width: \"100%\",\n      backgroundColor: theme.primary,\n      border: \"1px solid \".concat(theme.primary),\n      borderRadius: spacing(2),\n      paddingTop: spacing(1),\n      paddingBottom: spacing(1),\n      marginBottom: spacing(2)\n    },\n    btnOutline: {\n      color: theme.primary,\n      backgroundColor: theme.backgroundColor,\n      border: \"1px solid \".concat(theme.primary),\n      borderRadius: spacing(2),\n      paddingTop: spacing(1),\n      paddingBottom: spacing(1) + 1,\n      marginBottom: spacing(2)\n    },\n    h5: {\n      color: theme.primary,\n      fontSize: \"0.87rem\",\n      fontWeight: \"bold\",\n      marginBottom: spacing(3)\n    },\n    h6: {\n      color: theme.primary,\n      fontSize: \"0.8rem\",\n      textTransform: \"uppercase\",\n      margin: 0,\n      padding: 0\n    },\n    h1: {\n      color: theme.primary\n    },\n    h2: {\n      fontSize: \"1.5rem\",\n      fontWeight: \"bold\",\n      textTransform: \"uppercase\",\n      color: theme.primary,\n      marginBottom: spacing(2)\n    },\n    a: {\n      display: \"block\"\n    },\n    box: {\n      backgroundColor: theme.productBackgroundColor,\n      marginBottom: spacing(4),\n      padding: spacing(3),\n      borderRadius: spacing(1),\n      border: \"1px solid rgba(0,0,0,0.05)\",\n      boxShadow: \"5px 5px 5px rgba(0, 0, 0, 0.03)\"\n    },\n    filter: {\n      color: theme.color,\n      backgroundColor: theme.productBackgroundColor,\n      borderRadius: spacing(1),\n      border: \"1px solid rgba(0,0,0,0.05)\",\n      padding: spacing(2),\n      paddingLeft: spacing(3),\n      paddingRight: spacing(3),\n      display: \"inline-block\",\n      boxShadow: \"5px 5px 5px rgba(0, 0, 0, 0.03)\",\n      marginBottom: spacing(3),\n      marginLeft: spacing(3),\n      fontSize: \"0.9rem\",\n      position: \"relative\"\n    },\n    icon: {\n      color: theme.color\n    },\n    iconHeader: {\n      fontSize: \"1rem\",\n      marginRight: spacing(2),\n      marginBottom: spacing(1)\n    },\n    iconBorder: {\n      borderRadius: 35,\n      color: theme.primary,\n      width: 35,\n      height: 35,\n      padding: 8,\n      fontSize: \"1rem\"\n    },\n    removeIcon: {\n      marginTop: 0,\n      marginBottom: 0,\n      marginRight: 0,\n      marginLeft: spacing(2),\n      padding: 3,\n      color: theme.primary,\n      position: \"relative\",\n      top: 0,\n      width: 25,\n      height: 25\n    }\n  };\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"SellerProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBvbGxvL1NlbGxlclByb3ZpZGVyLmpzPzVkY2IiXSwibmFtZXMiOlsiU2VsbGVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJsZXZlbCIsInByaWNlcyIsInNwYWNpbmciLCJpIiwidXJpIiwiU2VsbGVyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZUVmZmVjdCIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJncWwiLCJob3N0IiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInRoZW1lIiwiYWxsVXNlcnMiLCJzZXJ2ZXIiLCJzZWxsZXIiLCJpZCIsInJlcGxhY2UiLCJzcGxpdCIsIm1hcCIsImUiLCJOdW1iZXIiLCJjc3MiLCJidG5JY29uIiwidG9wIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInJpZ2h0IiwicGFkZGluZyIsInBhZGRpbmdUb3AiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJib3JkZXJSYWRpdXMiLCJmb250V2VpZ2h0IiwicHJpbWFyeSIsImlucHV0IiwiYm9yZGVyIiwicHJvZHVjdEJhY2tncm91bmRDb2xvciIsInBhZGRpbmdMZWZ0IiwiYnRuSW5saW5lIiwibWluV2lkdGgiLCJidXR0b24iLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luQm90dG9tIiwiYnRuT3V0bGluZSIsImg1IiwiZm9udFNpemUiLCJoNiIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW4iLCJoMSIsImgyIiwiYSIsImJveCIsImJveFNoYWRvdyIsImZpbHRlciIsInBhZGRpbmdSaWdodCIsIm1hcmdpbkxlZnQiLCJpY29uIiwiaWNvbkhlYWRlciIsIm1hcmdpblJpZ2h0IiwiaWNvbkJvcmRlciIsInJlbW92ZUljb24iLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QkFBVyxFQUFFcEUsT0FBTyxDQUFDLENBQUQsQ0FGVjtBQUdWbUQsa0JBQVksRUFBRW5ELE9BQU8sQ0FBQyxDQUFEO0FBSFgsS0EzR1U7QUFnSHRCcUUsY0FBVSxFQUFFO0FBQ1Y3QixrQkFBWSxFQUFFLEVBREo7QUFFVlgsV0FBSyxFQUFFYixLQUFLLENBQUMwQixPQUZIO0FBR1ZQLFdBQUssRUFBRSxFQUhHO0FBSVZDLFlBQU0sRUFBRSxFQUpFO0FBS1ZILGFBQU8sRUFBRSxDQUxDO0FBTVZxQixjQUFRLEVBQUU7QUFOQSxLQWhIVTtBQXdIdEJnQixjQUFVLEVBQUU7QUFDVkMsZUFBUyxFQUFFLENBREQ7QUFFVnBCLGtCQUFZLEVBQUUsQ0FGSjtBQUdWaUIsaUJBQVcsRUFBRSxDQUhIO0FBSVZILGdCQUFVLEVBQUVqRSxPQUFPLENBQUMsQ0FBRCxDQUpUO0FBS1ZpQyxhQUFPLEVBQUUsQ0FMQztBQU1WSixXQUFLLEVBQUViLEtBQUssQ0FBQzBCLE9BTkg7QUFPVlgsY0FBUSxFQUFFLFVBUEE7QUFRVkgsU0FBRyxFQUFFLENBUks7QUFTVk8sV0FBSyxFQUFFLEVBVEc7QUFVVkMsWUFBTSxFQUFFO0FBVkU7QUF4SFUsR0FBWjtBQUFBLENBQVoiLCJmaWxlIjoiLi9hcG9sbG8vU2VsbGVyUHJvdmlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi9RdWVyeVwiO1xyXG5leHBvcnQgY29uc3QgU2VsbGVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RHQSBmcm9tIFwicmVhY3QtZ2FcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBsZXZlbCA9IFswLCA1LCA4LCAxMywgMjEsIDM0LCA1NSwgODldO1xyXG5jb25zdCBwcmljZXMgPSBbMTAwMDAwLCAyMDAwMDAsIDUwMDAwMCwgMTAwMDAwMCwgMjAwMDAwMF07XHJcbmNvbnN0IHNwYWNpbmcgPSAoaSkgPT4gbGV2ZWxbaV07XHJcbmNvbnN0IHVyaSA9XHJcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICA/IFwiaHR0cHM6Ly9lY29tbWVyY2UubG9hbG9hLnRlY2hcIlxyXG4gICAgOiBcImh0dHA6Ly9kZW1vLmxvYWxvYS50ZWNoXCI7XHJcbmV4cG9ydCBjb25zdCBTZWxsZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPFF1ZXJ5XHJcbiAgICAgIHF1ZXJ5PXtncWxgXHJcbiAgICAgICAgcXVlcnkoJGhvc3Q6IFN0cmluZykge1xyXG4gICAgICAgICAgYWxsVXNlcnMod2hlcmU6IHsgaG9zdDogJGhvc3QgfSkge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICBmaWxlIHtcclxuICAgICAgICAgICAgICBwdWJsaWNVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2dvIHtcclxuICAgICAgICAgICAgICBwdWJsaWNVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdG9yZVxyXG4gICAgICAgICAgICBzbG9nYW5cclxuICAgICAgICAgICAgaW50cm9cclxuICAgICAgICAgICAgY29udGFjdFxyXG4gICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclxyXG4gICAgICAgICAgICBwcm9kdWN0QmFja2dyb3VuZENvbG9yXHJcbiAgICAgICAgICAgIHBhZ2VJZFxyXG4gICAgICAgICAgICBnb29nbGVJZFxyXG4gICAgICAgICAgICBwaG9uZVxyXG4gICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgICAgIHByaWNlc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgdmFyaWFibGVzPXt7XHJcbiAgICAgICAgLy8gaG9zdDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5sb2NhdGlvbi5ob3N0IDogbnVsbCxcclxuICAgICAgICBob3N0OiAndHJ1bmd0YW1hbW5oYWNkYW5hbmcuY29tJ1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7KHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRoZW1lID0gZGF0YT8uYWxsVXNlcnNbMF07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGVtZSA/IChcclxuICAgICAgICAgIDxGcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxTZWxsZXJDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIC4uLnRoZW1lLFxyXG4gICAgICAgICAgICAgICAgc2VydmVyOlxyXG4gICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJodHRwczovL2Vjb21tZXJjZS5sb2Fsb2EudGVjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcImh0dHA6Ly9kZW1vLmxvYWxvYS50ZWNoXCIsXHJcbiAgICAgICAgICAgICAgICBzZWxsZXI6IHsgaWQ6IHRoZW1lLmlkIH0sXHJcbiAgICAgICAgICAgICAgICBzcGFjaW5nLFxyXG4gICAgICAgICAgICAgICAgcHJpY2VzOiB0aGVtZS5wcmljZXNcclxuICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wcmljZXNcclxuICAgICAgICAgICAgICAgICAgICA/LnJlcGxhY2UoLyAvZywgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoZSkgPT4gTnVtYmVyKGUpKVxyXG4gICAgICAgICAgICAgICAgICA6IFtdLFxyXG4gICAgICAgICAgICAgICAgY3NzOiBjc3ModGhlbWUpLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L1NlbGxlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICkgOiBudWxsO1xyXG4gICAgICB9fVxyXG4gICAgPC9RdWVyeT5cclxuICApO1xyXG59O1xyXG5jb25zdCBjc3MgPSAodGhlbWUpID0+ICh7XHJcbiAgYnRuSWNvbjogKHRvcCA9IC01LCBjb2xvciA9IHRoZW1lLmJhY2tncm91bmRDb2xvcikgPT4gKHtcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICB0b3AsXHJcbiAgICByaWdodDogLTUsXHJcbiAgICBwYWRkaW5nOiAzLFxyXG4gICAgcGFkZGluZ1RvcDogNSxcclxuICAgIHdpZHRoOiAzMCxcclxuICAgIGhlaWdodDogMzAsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgIGNvbG9yLFxyXG4gICAgZm9udFdlaWdodDogODAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wcmltYXJ5LFxyXG4gIH0pLFxyXG4gIGlucHV0OiB7XHJcbiAgICBkaXNwbGF5OiBcImJsb2NrLWlubGluZVwiLFxyXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWU/LnByb2R1Y3RCYWNrZ3JvdW5kQ29sb3J9YCxcclxuICAgIHBhZGRpbmc6IHNwYWNpbmcoMSksXHJcbiAgICBwYWRkaW5nTGVmdDogc3BhY2luZygzKSxcclxuICAgIGJvcmRlclJhZGl1czogc3BhY2luZygyKSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWU/LmJhY2tncm91bmRDb2xvcixcclxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcclxuICB9LFxyXG4gIGJ0bklubGluZToge1xyXG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgIGNvbG9yOiB0aGVtZS5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAzNSxcclxuICAgIG1pbldpZHRoOiAzNSxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgY29sb3I6IHRoZW1lLmJhY2tncm91bmRDb2xvcixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnByaW1hcnl9YCxcclxuICAgIGJvcmRlclJhZGl1czogc3BhY2luZygyKSxcclxuICAgIHBhZGRpbmdUb3A6IHNwYWNpbmcoMSksXHJcbiAgICBwYWRkaW5nQm90dG9tOiBzcGFjaW5nKDEpLFxyXG4gICAgbWFyZ2luQm90dG9tOiBzcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgYnRuT3V0bGluZToge1xyXG4gICAgY29sb3I6IHRoZW1lLnByaW1hcnksXHJcblxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wcmltYXJ5fWAsXHJcbiAgICBib3JkZXJSYWRpdXM6IHNwYWNpbmcoMiksXHJcbiAgICBwYWRkaW5nVG9wOiBzcGFjaW5nKDEpLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogc3BhY2luZygxKSArIDEsXHJcbiAgICBtYXJnaW5Cb3R0b206IHNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBoNToge1xyXG4gICAgY29sb3I6IHRoZW1lLnByaW1hcnksXHJcbiAgICBmb250U2l6ZTogXCIwLjg3cmVtXCIsXHJcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgIG1hcmdpbkJvdHRvbTogc3BhY2luZygzKSxcclxuICB9LFxyXG4gIGg2OiB7XHJcbiAgICBjb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgIGZvbnRTaXplOiBcIjAuOHJlbVwiLFxyXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcclxuICAgIG1hcmdpbjogMCxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgfSxcclxuICBoMToge1xyXG4gICAgY29sb3I6IHRoZW1lLnByaW1hcnksXHJcbiAgfSxcclxuICBoMjoge1xyXG4gICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXHJcbiAgICBjb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgIG1hcmdpbkJvdHRvbTogc3BhY2luZygyKSxcclxuICB9LFxyXG4gIGE6IHtcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICB9LFxyXG4gIGJveDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wcm9kdWN0QmFja2dyb3VuZENvbG9yLFxyXG4gICAgbWFyZ2luQm90dG9tOiBzcGFjaW5nKDQpLFxyXG4gICAgcGFkZGluZzogc3BhY2luZygzKSxcclxuICAgIGJvcmRlclJhZGl1czogc3BhY2luZygxKSxcclxuICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KVwiLFxyXG4gICAgYm94U2hhZG93OiBcIjVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wMylcIixcclxuICB9LFxyXG4gIGZpbHRlcjoge1xyXG4gICAgY29sb3I6IHRoZW1lLmNvbG9yLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wcm9kdWN0QmFja2dyb3VuZENvbG9yLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBzcGFjaW5nKDEpLFxyXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDUpXCIsXHJcblxyXG4gICAgcGFkZGluZzogc3BhY2luZygyKSxcclxuICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nKDMpLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nKDMpLFxyXG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgIGJveFNoYWRvdzogXCI1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDMpXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IHNwYWNpbmcoMyksXHJcbiAgICBtYXJnaW5MZWZ0OiBzcGFjaW5nKDMpLFxyXG4gICAgZm9udFNpemU6IFwiMC45cmVtXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gIH0sXHJcbiAgaWNvbjoge1xyXG4gICAgY29sb3I6IHRoZW1lLmNvbG9yLFxyXG4gIH0sXHJcbiAgaWNvbkhlYWRlcjoge1xyXG4gICAgZm9udFNpemU6IFwiMXJlbVwiLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHNwYWNpbmcoMiksXHJcbiAgICBtYXJnaW5Cb3R0b206IHNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBpY29uQm9yZGVyOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IDM1LFxyXG4gICAgY29sb3I6IHRoZW1lLnByaW1hcnksXHJcbiAgICB3aWR0aDogMzUsXHJcbiAgICBoZWlnaHQ6IDM1LFxyXG4gICAgcGFkZGluZzogOCxcclxuICAgIGZvbnRTaXplOiBcIjFyZW1cIixcclxuICB9LFxyXG4gIHJlbW92ZUljb246IHtcclxuICAgIG1hcmdpblRvcDogMCxcclxuICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgIG1hcmdpblJpZ2h0OiAwLFxyXG4gICAgbWFyZ2luTGVmdDogc3BhY2luZygyKSxcclxuICAgIHBhZGRpbmc6IDMsXHJcbiAgICBjb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB0b3A6IDAsXHJcbiAgICB3aWR0aDogMjUsXHJcbiAgICBoZWlnaHQ6IDI1LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./apollo/SellerProvider.js\n");

/***/ })

})