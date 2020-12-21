webpackHotUpdate_N_E("pages/cart",{

/***/ "./components/src/SellerProvider.js":
/*!******************************************!*\
  !*** ./components/src/SellerProvider.js ***!
  \******************************************/
/*! exports provided: SellerContext, SellerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SellerContext\", function() { return SellerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SellerProvider\", function() { return SellerProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _Query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Query */ \"./components/src/Query.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/media/huy/New Volume/linux/apps/ecom-ui/components/src/SellerProvider.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n        query($host: String) {\\n          allUsers(where: { host: $host }) {\\n            id\\n            email\\n            file {\\n              publicUrl\\n            }\\n            logo {\\n              publicUrl\\n            }\\n            store\\n            slogan\\n            intro\\n            contact\\n            color\\n            primary\\n            backgroundColor\\n            descriptionBackgroundColor\\n            pageId\\n          }\\n        }\\n      \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar SellerContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])();\n\nvar level = [0, 5, 8, 13, 21, 34, 55, 89];\nvar prices = [100000, 200000, 500000, 1000000, 2000000];\n\nvar spacing = function spacing(i) {\n  return level[i];\n};\n\nvar uri = false ? undefined : \"http://localhost:6007\";\nconsole.log(uri);\nvar SellerProvider = function SellerProvider(_ref) {\n  var children = _ref.children;\n  return __jsx(_Query__WEBPACK_IMPORTED_MODULE_4__[\"Query\"], {\n    query: Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject()),\n    variables: {\n      host: true ? window.location.host : undefined\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, function (_ref2) {\n    var data = _ref2.data,\n        error = _ref2.error,\n        loading = _ref2.loading;\n    var theme = data === null || data === void 0 ? void 0 : data.allUsers[0];\n    return theme ? __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 11\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 13\n      }\n    }, __jsx(\"title\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 15\n      }\n    }, theme.store, \" | \", theme.slogan), __jsx(\"meta\", {\n      name: \"description\",\n      content: theme.intro,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 15\n      }\n    })), __jsx(SellerContext.Provider, {\n      value: _objectSpread(_objectSpread({}, theme), {}, {\n        server: false ? undefined : \"http://localhost:6007\",\n        seller: {\n          id: theme.id\n        },\n        spacing: spacing,\n        prices: prices,\n        css: css(theme)\n      }),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      style: {\n        backgroundColor: theme.backgroundColor,\n        color: theme.color\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 15\n      }\n    }, children))) : null;\n  });\n};\n_c = SellerProvider;\n\nvar css = function css(theme) {\n  return {\n    btnIcon: function btnIcon() {\n      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -5;\n      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : theme.backgroundColor;\n      return {\n        position: \"absolute\",\n        top: top,\n        right: -5,\n        padding: 3,\n        paddingTop: 5,\n        width: 30,\n        height: 30,\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        borderRadius: \"50%\",\n        color: color,\n        fontWeight: 800,\n        backgroundColor: theme.primary\n      };\n    },\n    input: {\n      display: \"block-inline\",\n      border: \"1px solid \".concat(theme === null || theme === void 0 ? void 0 : theme.productBackgroundColor),\n      padding: spacing(1),\n      paddingLeft: spacing(3),\n      borderRadius: spacing(2),\n      backgroundColor: theme === null || theme === void 0 ? void 0 : theme.bgDark,\n      color: theme.color\n    },\n    btnInline: {\n      display: \"inline-block\",\n      backgroundColor: theme.primary,\n      color: theme.backgroundColor,\n      border: \"none\",\n      borderRadius: 35,\n      minWidth: 35\n    },\n    button: {\n      color: theme.backgroundColor,\n      width: \"100%\",\n      backgroundColor: theme.primary,\n      border: \"1px solid \".concat(theme.primary),\n      borderRadius: spacing(2),\n      paddingTop: spacing(1),\n      paddingBottom: spacing(1),\n      marginBottom: spacing(2)\n    },\n    btnOutline: {\n      color: theme.primary,\n      backgroundColor: theme.backgroundColor,\n      border: \"1px solid \".concat(theme.primary),\n      borderRadius: spacing(2),\n      paddingTop: spacing(1),\n      paddingBottom: spacing(1) + 1,\n      marginBottom: spacing(2)\n    },\n    h5: {\n      color: theme.primary,\n      fontSize: \"0.87rem\",\n      fontWeight: \"bold\",\n      marginBottom: spacing(3)\n    },\n    h6: {\n      color: theme.primary,\n      fontSize: \"0.8rem\",\n      textTransform: \"uppercase\",\n      margin: 0,\n      padding: 0\n    },\n    h1: {\n      color: theme.primary\n    },\n    h2: {\n      fontSize: \"1.5rem\",\n      fontWeight: \"bold\",\n      textTransform: \"uppercase\",\n      color: theme.primary,\n      marginBottom: spacing(2)\n    },\n    a: {\n      display: \"block\"\n    },\n    box: {\n      backgroundColor: theme.productBackgroundColor,\n      marginBottom: spacing(4),\n      padding: spacing(3),\n      borderRadius: spacing(1),\n      border: \"1px solid rgba(0,0,0,0.05)\",\n      boxShadow: \"5px 5px 5px rgba(0, 0, 0, 0.03)\"\n    },\n    filter: {\n      color: theme.color,\n      backgroundColor: theme.backgroundColor,\n      borderRadius: spacing(1),\n      border: \"1px solid rgba(0,0,0,0.05)\",\n      padding: spacing(2),\n      paddingLeft: spacing(3),\n      paddingRight: spacing(3),\n      display: \"inline-block\",\n      boxShadow: \"5px 5px 5px rgba(0, 0, 0, 0.03)\",\n      marginTop: spacing(4),\n      marginBottom: spacing(3),\n      marginLeft: spacing(3),\n      fontSize: \"0.9rem\",\n      position: \"relative\"\n    },\n    icon: {\n      color: theme.color\n    },\n    iconHeader: {\n      fontSize: \"1rem\",\n      marginRight: spacing(2),\n      marginBottom: spacing(1)\n    },\n    iconBorder: {\n      borderRadius: 35,\n      color: theme.primary,\n      width: 35,\n      height: 35,\n      padding: 8,\n      fontSize: \"1rem\"\n    }\n  };\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"SellerProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcmMvU2VsbGVyUHJvdmlkZXIuanM/ODZkMSJdLCJuYW1lcyI6WyJTZWxsZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImxldmVsIiwicHJpY2VzIiwic3BhY2luZyIsImkiLCJ1cmkiLCJjb25zb2xlIiwibG9nIiwiU2VsbGVyUHJvdmlkZXIiLCJjaGlsZHJlbiIsImdxbCIsImhvc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ0aGVtZSIsImFsbFVzZXJzIiwic3RvcmUiLCJzbG9nYW4iLCJpbnRybyIsInNlcnZlciIsInNlbGxlciIsImlkIiwiY3NzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJidG5JY29uIiwidG9wIiwicG9zaXRpb24iLCJyaWdodCIsInBhZGRpbmciLCJwYWRkaW5nVG9wIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYm9yZGVyUmFkaXVzIiwiZm9udFdlaWdodCIsInByaW1hcnkiLCJpbnB1dCIsImJvcmRlciIsInByb2R1Y3RCYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nTGVmdCIsImJnRGFyayIsImJ0bklubGluZSIsIm1pbldpZHRoIiwiYnV0dG9uIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbkJvdHRvbSIsImJ0bk91dGxpbmUiLCJoNSIsImZvbnRTaXplIiwiaDYiLCJ0ZXh0VHJhbnNmb3JtIiwibWFyZ2luIiwiaDEiLCJoMiIsImEiLCJib3giLCJib3hTaGFkb3ciLCJmaWx0ZXIiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiaWNvbiIsImljb25IZWFkZXIiLCJtYXJnaW5SaWdodCIsImljb25Cb3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDTyxJQUFN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RTtBQWZKLEtBeEZjO0FBeUd0QnFDLFFBQUksRUFBRTtBQUNKeEMsV0FBSyxFQUFFVixLQUFLLENBQUNVO0FBRFQsS0F6R2dCO0FBNEd0QnlDLGNBQVUsRUFBRTtBQUNWZCxjQUFRLEVBQUUsTUFEQTtBQUVWZSxpQkFBVyxFQUFFbEUsT0FBTyxDQUFDLENBQUQsQ0FGVjtBQUdWZ0Qsa0JBQVksRUFBRWhELE9BQU8sQ0FBQyxDQUFEO0FBSFgsS0E1R1U7QUFpSHRCbUUsY0FBVSxFQUFFO0FBQ1YvQixrQkFBWSxFQUFFLEVBREo7QUFFVlosV0FBSyxFQUFFVixLQUFLLENBQUN3QixPQUZIO0FBR1ZQLFdBQUssRUFBRSxFQUhHO0FBSVZDLFlBQU0sRUFBRSxFQUpFO0FBS1ZILGFBQU8sRUFBRSxDQUxDO0FBTVZzQixjQUFRLEVBQUU7QUFOQTtBQWpIVSxHQUFaO0FBQUEsQ0FBWiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3JjL1NlbGxlclByb3ZpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi9RdWVyeVwiO1xuZXhwb3J0IGNvbnN0IFNlbGxlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5jb25zdCBsZXZlbCA9IFswLCA1LCA4LCAxMywgMjEsIDM0LCA1NSwgODldO1xuY29uc3QgcHJpY2VzID0gWzEwMDAwMCwgMjAwMDAwLCA1MDAwMDAsIDEwMDAwMDAsIDIwMDAwMDBdO1xuY29uc3Qgc3BhY2luZyA9IChpKSA9PiBsZXZlbFtpXTtcbmNvbnN0IHVyaSA9XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxuICAgID8gXCJodHRwczovL2Vjb21tZXJjZS5sb2Fsb2EudGVjaFwiXG4gICAgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NjAwN1wiO1xuY29uc29sZS5sb2codXJpKTtcbmV4cG9ydCBjb25zdCBTZWxsZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UXVlcnlcbiAgICAgIHF1ZXJ5PXtncWxgXG4gICAgICAgIHF1ZXJ5KCRob3N0OiBTdHJpbmcpIHtcbiAgICAgICAgICBhbGxVc2Vycyh3aGVyZTogeyBob3N0OiAkaG9zdCB9KSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgZW1haWxcbiAgICAgICAgICAgIGZpbGUge1xuICAgICAgICAgICAgICBwdWJsaWNVcmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZ28ge1xuICAgICAgICAgICAgICBwdWJsaWNVcmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0b3JlXG4gICAgICAgICAgICBzbG9nYW5cbiAgICAgICAgICAgIGludHJvXG4gICAgICAgICAgICBjb250YWN0XG4gICAgICAgICAgICBjb2xvclxuICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkJhY2tncm91bmRDb2xvclxuICAgICAgICAgICAgcGFnZUlkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgdmFyaWFibGVzPXt7XG4gICAgICAgIGhvc3Q6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cubG9jYXRpb24uaG9zdCA6IG51bGwsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHsoeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZW1lID0gZGF0YT8uYWxsVXNlcnNbMF07XG4gICAgICAgIHJldHVybiB0aGVtZSA/IChcbiAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAgICAgIHt0aGVtZS5zdG9yZX0gfCB7dGhlbWUuc2xvZ2FufVxuICAgICAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXt0aGVtZS5pbnRyb30gLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxTZWxsZXJDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgLi4udGhlbWUsXG4gICAgICAgICAgICAgICAgc2VydmVyOlxuICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJodHRwczovL2Vjb21tZXJjZS5sb2Fsb2EudGVjaFwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJodHRwOi8vbG9jYWxob3N0OjYwMDdcIixcbiAgICAgICAgICAgICAgICBzZWxsZXI6IHsgaWQ6IHRoZW1lLmlkIH0sXG4gICAgICAgICAgICAgICAgc3BhY2luZyxcbiAgICAgICAgICAgICAgICBwcmljZXMsXG4gICAgICAgICAgICAgICAgY3NzOiBjc3ModGhlbWUpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TZWxsZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICkgOiBudWxsO1xuICAgICAgfX1cbiAgICA8L1F1ZXJ5PlxuICApO1xufTtcbmNvbnN0IGNzcyA9ICh0aGVtZSkgPT4gKHtcbiAgYnRuSWNvbjogKHRvcCA9IC01LCBjb2xvciA9IHRoZW1lLmJhY2tncm91bmRDb2xvcikgPT4gKHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcCxcbiAgICByaWdodDogLTUsXG4gICAgcGFkZGluZzogMyxcbiAgICBwYWRkaW5nVG9wOiA1LFxuICAgIHdpZHRoOiAzMCxcbiAgICBoZWlnaHQ6IDMwLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgIGNvbG9yLFxuICAgIGZvbnRXZWlnaHQ6IDgwMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnByaW1hcnksXG4gIH0pLFxuICBpbnB1dDoge1xuICAgIGRpc3BsYXk6IFwiYmxvY2staW5saW5lXCIsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWU/LnByb2R1Y3RCYWNrZ3JvdW5kQ29sb3J9YCxcbiAgICBwYWRkaW5nOiBzcGFjaW5nKDEpLFxuICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nKDMpLFxuICAgIGJvcmRlclJhZGl1czogc3BhY2luZygyKSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lPy5iZ0RhcmssXG4gICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICB9LFxuICBidG5JbmxpbmU6IHtcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucHJpbWFyeSxcbiAgICBjb2xvcjogdGhlbWUuYmFja2dyb3VuZENvbG9yLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgYm9yZGVyUmFkaXVzOiAzNSxcbiAgICBtaW5XaWR0aDogMzUsXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGNvbG9yOiB0aGVtZS5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucHJpbWFyeSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wcmltYXJ5fWAsXG4gICAgYm9yZGVyUmFkaXVzOiBzcGFjaW5nKDIpLFxuICAgIHBhZGRpbmdUb3A6IHNwYWNpbmcoMSksXG4gICAgcGFkZGluZ0JvdHRvbTogc3BhY2luZygxKSxcbiAgICBtYXJnaW5Cb3R0b206IHNwYWNpbmcoMiksXG4gIH0sXG4gIGJ0bk91dGxpbmU6IHtcbiAgICBjb2xvcjogdGhlbWUucHJpbWFyeSxcblxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuYmFja2dyb3VuZENvbG9yLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnByaW1hcnl9YCxcbiAgICBib3JkZXJSYWRpdXM6IHNwYWNpbmcoMiksXG4gICAgcGFkZGluZ1RvcDogc3BhY2luZygxKSxcbiAgICBwYWRkaW5nQm90dG9tOiBzcGFjaW5nKDEpICsgMSxcbiAgICBtYXJnaW5Cb3R0b206IHNwYWNpbmcoMiksXG4gIH0sXG4gIGg1OiB7XG4gICAgY29sb3I6IHRoZW1lLnByaW1hcnksXG4gICAgZm9udFNpemU6IFwiMC44N3JlbVwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIG1hcmdpbkJvdHRvbTogc3BhY2luZygzKSxcbiAgfSxcbiAgaDY6IHtcbiAgICBjb2xvcjogdGhlbWUucHJpbWFyeSxcbiAgICBmb250U2l6ZTogXCIwLjhyZW1cIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiAwLFxuICB9LFxuICBoMToge1xuICAgIGNvbG9yOiB0aGVtZS5wcmltYXJ5LFxuICB9LFxuICBoMjoge1xuICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgY29sb3I6IHRoZW1lLnByaW1hcnksXG4gICAgbWFyZ2luQm90dG9tOiBzcGFjaW5nKDIpLFxuICB9LFxuICBhOiB7XG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICB9LFxuICBib3g6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnByb2R1Y3RCYWNrZ3JvdW5kQ29sb3IsXG4gICAgbWFyZ2luQm90dG9tOiBzcGFjaW5nKDQpLFxuICAgIHBhZGRpbmc6IHNwYWNpbmcoMyksXG4gICAgYm9yZGVyUmFkaXVzOiBzcGFjaW5nKDEpLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KVwiLFxuICAgIGJveFNoYWRvdzogXCI1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDMpXCIsXG4gIH0sXG4gIGZpbHRlcjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmJhY2tncm91bmRDb2xvcixcbiAgICBib3JkZXJSYWRpdXM6IHNwYWNpbmcoMSksXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDUpXCIsXG5cbiAgICBwYWRkaW5nOiBzcGFjaW5nKDIpLFxuICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nKDMpLFxuICAgIHBhZGRpbmdSaWdodDogc3BhY2luZygzKSxcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgIGJveFNoYWRvdzogXCI1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDMpXCIsXG4gICAgbWFyZ2luVG9wOiBzcGFjaW5nKDQpLFxuICAgIG1hcmdpbkJvdHRvbTogc3BhY2luZygzKSxcbiAgICBtYXJnaW5MZWZ0OiBzcGFjaW5nKDMpLFxuICAgIGZvbnRTaXplOiBcIjAuOXJlbVwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gIH0sXG4gIGljb246IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3IsXG4gIH0sXG4gIGljb25IZWFkZXI6IHtcbiAgICBmb250U2l6ZTogXCIxcmVtXCIsXG4gICAgbWFyZ2luUmlnaHQ6IHNwYWNpbmcoMiksXG4gICAgbWFyZ2luQm90dG9tOiBzcGFjaW5nKDEpLFxuICB9LFxuICBpY29uQm9yZGVyOiB7XG4gICAgYm9yZGVyUmFkaXVzOiAzNSxcbiAgICBjb2xvcjogdGhlbWUucHJpbWFyeSxcbiAgICB3aWR0aDogMzUsXG4gICAgaGVpZ2h0OiAzNSxcbiAgICBwYWRkaW5nOiA4LFxuICAgIGZvbnRTaXplOiBcIjFyZW1cIixcbiAgfSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/src/SellerProvider.js\n");

/***/ })

})