webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/src/SellerProvider.js":
/*!******************************************!*\
  !*** ./components/src/SellerProvider.js ***!
  \******************************************/
/*! exports provided: SellerContext, SellerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SellerContext\", function() { return SellerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SellerProvider\", function() { return SellerProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _Query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Query */ \"./components/src/Query.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-ga */ \"./node_modules/react-ga/dist/esm/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/media/robert/New Volume/linux/apps/ecom-ui/components/src/SellerProvider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n        query($host: String) {\\n          allUsers(where: { host: $host }) {\\n            id\\n            email\\n            file {\\n              publicUrl\\n            }\\n            logo {\\n              publicUrl\\n            }\\n            store\\n            slogan\\n            intro\\n            contact\\n            color\\n            primary\\n            backgroundColor\\n            productBackgroundColor\\n            pageId\\n            googleId\\n            phone\\n            email\\n            address\\n            prices\\n          }\\n        }\\n      \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar SellerContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])();\n\n\n\n\nvar level = [0, 5, 8, 13, 21, 34, 55, 89];\nvar prices = [100000, 200000, 500000, 1000000, 2000000];\n\nvar spacing = function spacing(i) {\n  return level[i];\n};\n\nvar uri = false ? undefined : \"http://localhost:6007\";\nvar SellerProvider = function SellerProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isLoad = _useState[0],\n      setIsLoad = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      GA = _useState2[0],\n      setGA = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (GA && !isLoad) {\n      console.log(\"init\", GA);\n      react_ga__WEBPACK_IMPORTED_MODULE_6__[\"default\"].initialize(GA);\n      setIsLoad(true);\n    }\n\n    var url = window.location.pathname + window.location.search;\n    console.log(url);\n    react_ga__WEBPACK_IMPORTED_MODULE_6__[\"default\"].pageview(url);\n  });\n  return __jsx(_Query__WEBPACK_IMPORTED_MODULE_4__[\"Query\"], {\n    query: Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject()),\n    variables: {\n      // host: typeof window !== \"undefined\" ? window.location.host : null,\n      host: 'shopwheydanang.com'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, function (_ref2) {\n    var _theme$file, _theme$logo, _theme$prices;\n\n    var data = _ref2.data,\n        error = _ref2.error,\n        loading = _ref2.loading;\n    var theme = data === null || data === void 0 ? void 0 : data.allUsers[0];\n\n    if (theme) {\n      setGA(theme.googleId);\n    }\n\n    return theme ? __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 11\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 13\n      }\n    }, __jsx(\"title\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 15\n      }\n    }, theme.store, \" | \", theme.slogan), __jsx(\"meta\", {\n      name: \"description\",\n      content: theme.intro,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 15\n      }\n    }), __jsx(\"meta\", {\n      property: \"og:image\",\n      content: uri + (theme === null || theme === void 0 ? void 0 : (_theme$file = theme.file) === null || _theme$file === void 0 ? void 0 : _theme$file.publicUrl),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 15\n      }\n    }), __jsx(\"link\", {\n      rel: \"icon\",\n      type: \"image/png\",\n      href: uri + (theme === null || theme === void 0 ? void 0 : (_theme$logo = theme.logo) === null || _theme$logo === void 0 ? void 0 : _theme$logo.publicUrl),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 15\n      }\n    })), __jsx(SellerContext.Provider, {\n      value: _objectSpread(_objectSpread({}, theme), {}, {\n        server: false ? undefined : \"http://localhost:6007\",\n        seller: {\n          id: theme.id\n        },\n        spacing: spacing,\n        prices: theme.prices ? (_theme$prices = theme.prices) === null || _theme$prices === void 0 ? void 0 : _theme$prices.replace(/ /g, \"\").split(\",\").map(function (e) {\n          return Number(e);\n        }) : [],\n        css: css(theme)\n      }),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      style: {\n        backgroundColor: theme.backgroundColor,\n        color: theme.color\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 15\n      }\n    }, children))) : null;\n  });\n};\n\n_s(SellerProvider, \"lEvmUCGxvL5P2NaAch/xjOC1w/E=\");\n\n_c = SellerProvider;\n\nvar css = function css(theme) {\n  return {\n    btnIcon: function btnIcon() {\n      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -5;\n      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : theme.backgroundColor;\n      return {\n        position: \"absolute\",\n        top: top,\n        right: -5,\n        padding: 3,\n        paddingTop: 5,\n        width: 30,\n        height: 30,\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        borderRadius: \"50%\",\n        color: color,\n        fontWeight: 800,\n        backgroundColor: theme.primary\n      };\n    },\n    input: {\n      display: \"block-inline\",\n      border: \"1px solid \".concat(theme === null || theme === void 0 ? void 0 : theme.productBackgroundColor),\n      padding: spacing(1),\n      paddingLeft: spacing(3),\n      borderRadius: spacing(2),\n      backgroundColor: theme === null || theme === void 0 ? void 0 : theme.backgroundColor,\n      color: theme.color\n    },\n    btnInline: {\n      display: \"inline-block\",\n      backgroundColor: theme.primary,\n      color: theme.backgroundColor,\n      border: \"none\",\n      borderRadius: 35,\n      minWidth: 35\n    },\n    button: {\n      color: theme.backgroundColor,\n      width: \"100%\",\n      backgroundColor: theme.primary,\n      border: \"1px solid \".concat(theme.primary),\n      borderRadius: spacing(2),\n      paddingTop: spacing(1),\n      paddingBottom: spacing(1),\n      marginBottom: spacing(2)\n    },\n    btnOutline: {\n      color: theme.primary,\n      backgroundColor: theme.backgroundColor,\n      border: \"1px solid \".concat(theme.primary),\n      borderRadius: spacing(2),\n      paddingTop: spacing(1),\n      paddingBottom: spacing(1) + 1,\n      marginBottom: spacing(2)\n    },\n    h5: {\n      color: theme.primary,\n      fontSize: \"0.87rem\",\n      fontWeight: \"bold\",\n      marginBottom: spacing(3)\n    },\n    h6: {\n      color: theme.primary,\n      fontSize: \"0.8rem\",\n      textTransform: \"uppercase\",\n      margin: 0,\n      padding: 0\n    },\n    h1: {\n      color: theme.primary\n    },\n    h2: {\n      fontSize: \"1.5rem\",\n      fontWeight: \"bold\",\n      textTransform: \"uppercase\",\n      color: theme.primary,\n      marginBottom: spacing(2)\n    },\n    a: {\n      display: \"block\"\n    },\n    box: {\n      backgroundColor: theme.productBackgroundColor,\n      marginBottom: spacing(4),\n      padding: spacing(3),\n      borderRadius: spacing(1),\n      border: \"1px solid rgba(0,0,0,0.05)\",\n      boxShadow: \"5px 5px 5px rgba(0, 0, 0, 0.03)\"\n    },\n    filter: {\n      color: theme.color,\n      backgroundColor: theme.productBackgroundColor,\n      borderRadius: spacing(1),\n      border: \"1px solid rgba(0,0,0,0.05)\",\n      padding: spacing(2),\n      paddingLeft: spacing(3),\n      paddingRight: spacing(3),\n      display: \"inline-block\",\n      boxShadow: \"5px 5px 5px rgba(0, 0, 0, 0.03)\",\n      marginBottom: spacing(3),\n      marginLeft: spacing(3),\n      fontSize: \"0.9rem\",\n      position: \"relative\"\n    },\n    icon: {\n      color: theme.color\n    },\n    iconHeader: {\n      fontSize: \"1rem\",\n      marginRight: spacing(2),\n      marginBottom: spacing(1)\n    },\n    iconBorder: {\n      borderRadius: 35,\n      color: theme.primary,\n      width: 35,\n      height: 35,\n      padding: 8,\n      fontSize: \"1rem\"\n    },\n    removeIcon: {\n      marginTop: 0,\n      marginBottom: 0,\n      marginRight: 0,\n      marginLeft: spacing(2),\n      padding: 3,\n      color: theme.primary,\n      position: \"relative\",\n      top: 0,\n      width: 25,\n      height: 25\n    }\n  };\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"SellerProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcmMvU2VsbGVyUHJvdmlkZXIuanM/ODZkMSJdLCJuYW1lcyI6WyJTZWxsZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImxldmVsIiwicHJpY2VzIiwic3BhY2luZyIsImkiLCJ1cmkiLCJTZWxsZXJQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJpc0xvYWQiLCJzZXRJc0xvYWQiLCJHQSIsInNldEdBIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIlJlYWN0R0EiLCJpbml0aWFsaXplIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNlYXJjaCIsInBhZ2V2aWV3IiwiZ3FsIiwiaG9zdCIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ0aGVtZSIsImFsbFVzZXJzIiwiZ29vZ2xlSWQiLCJzdG9yZSIsInNsb2dhbiIsImludHJvIiwiZmlsZSIsInB1YmxpY1VybCIsImxvZ28iLCJzZXJ2ZXIiLCJzZWxsZXIiLCJpZCIsInJlcGxhY2UiLCJzcGxpdCIsIm1hcCIsImUiLCJOdW1iZXIiLCJjc3MiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJ0bkljb24iLCJ0b3AiLCJwb3NpdGlvbiIsInJpZ2h0IiwicGFkZGluZyIsInBhZGRpbmdUb3AiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJib3JkZXJSYWRpdXMiLCJmb250V2VpZ2h0IiwicHJpbWFyeSIsImlucHV0IiwiYm9yZGVyIiwicHJvZHVjdEJhY2tncm91bmRDb2xvciIsInBhZGRpbmdMZWZ0IiwiYnRuSW5saW5lIiwibWluV2lkdGgiLCJidXR0b24iLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luQm90dG9tIiwiYnRuT3V0bGluZSIsImg1IiwiZm9udFNpemUiLCJoNiIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW4iLCJoMSIsImgyIiwiYSIsImJveCIsImJveFNoYWRvdyIsImZpbHRlciIsInBhZGRpbmdSaWdodCIsIm1hcmdpbkxlZnQiLCJpY29uIiwiaWNvbkhlYWRlciIsIm1hcmdpblJpZ2h0IiwiaWNvbkJvcmRlciIsInJlbW92ZUljb24iLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLGFBQWEsR0FBR0MsMkRBQWEsRUFBbkM7QUFDUDtBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQU1DLEtBQUssR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLEVBQVYsRUFBYyxFQUFkLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLEVBQTFCLENBQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUcsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixPQUF6QixFQUFrQyxPQUFsQyxDQUFmOztBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLENBQUQ7QUFBQSxTQUFPSCxLQUFLLENBQUNHLENBQUQsQ0FBWjtBQUFBLENBQWhCOztBQUNBLElBQU1DLEdBQUcsR0FDUCxRQUNJLFNBREosR0FFSSx1QkFITjtBQUlPLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ2xCQyxzREFBUSxDQUFDLEtBQUQsQ0FEVTtBQUFBLE1BQ3ZDQyxNQUR1QztBQUFBLE1BQy9CQyxTQUQrQjs7QUFBQSxtQkFFMUJGLHNEQUFRLEVBRmtCO0FBQUEsTUFFdkNHLEVBRnVDO0FBQUEsTUFFbkNDLEtBRm1DOztBQUc5Q0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUYsRUFBRSxJQUFJLENBQUNGLE1BQVgsRUFBbUI7QUFDakJLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JKLEVBQXBCO0FBQ0FLLHNEQUFPLENBQUNDLFVBQVIsQ0FBbUJOLEVBQW5CO0FBQ0FELGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDRDs7QUFDRCxRQUFNUSxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsR0FBMkJGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkUsTUFBdkQ7QUFDQVIsV0FBTyxDQUFDQyxHQUFSLENBQVlHLEdBQVo7QUFDQUYsb0RBQU8sQ0FBQ08sUUFBUixDQUFpQkwsR0FBakI7QUFDRCxHQVRRLENBQVQ7QUFVQSxTQUNFLE1BQUMsNENBQUQ7QUFDRSxTQUFLLEVBQUVNLDBEQUFGLG1CQURQO0FBNkJFLGFBQVMsRUFBRTtBQUNUO0FBQ0FDLFVBQUksRUFBRTtBQUZHLEtBN0JiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FrQ0csaUJBQThCO0FBQUE7O0FBQUEsUUFBM0JDLElBQTJCLFNBQTNCQSxJQUEyQjtBQUFBLFFBQXJCQyxLQUFxQixTQUFyQkEsS0FBcUI7QUFBQSxRQUFkQyxPQUFjLFNBQWRBLE9BQWM7QUFDN0IsUUFBTUMsS0FBSyxHQUFHSCxJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRUksUUFBTixDQUFlLENBQWYsQ0FBZDs7QUFDQSxRQUFJRCxLQUFKLEVBQVc7QUFDVGpCLFdBQUssQ0FBQ2lCLEtBQUssQ0FBQ0UsUUFBUCxDQUFMO0FBQ0Q7O0FBQ0QsV0FBT0YsS0FBSyxHQUNWLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0EsS0FBSyxDQUFDRyxLQURULFNBQ21CSCxLQUFLLENBQUNJLE1BRHpCLENBREYsRUFJRTtBQUFNLFVBQUksRUFBQyxhQUFYO0FBQXlCLGFBQU8sRUFBRUosS0FBSyxDQUFDSyxLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsRUFLRTtBQUNFLGNBQVEsRUFBQyxVQURYO0FBRUUsYUFBTyxFQUFFN0IsR0FBRyxJQUFHd0IsS0FBSCxhQUFHQSxLQUFILHNDQUFHQSxLQUFLLENBQUVNLElBQVYsZ0RBQUcsWUFBYUMsU0FBaEIsQ0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEYsRUFTRTtBQUNFLFNBQUcsRUFBQyxNQUROO0FBRUUsVUFBSSxFQUFDLFdBRlA7QUFHRSxVQUFJLEVBQUUvQixHQUFHLElBQUd3QixLQUFILGFBQUdBLEtBQUgsc0NBQUdBLEtBQUssQ0FBRVEsSUFBVixnREFBRyxZQUFhRCxTQUFoQixDQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFURixDQURGLEVBZ0JFLE1BQUMsYUFBRCxDQUFlLFFBQWY7QUFDRSxXQUFLLGtDQUNBUCxLQURBO0FBRUhTLGNBQU0sRUFDSixRQUNJLFNBREosR0FFSSx1QkFMSDtBQU1IQyxjQUFNLEVBQUU7QUFBRUMsWUFBRSxFQUFFWCxLQUFLLENBQUNXO0FBQVosU0FOTDtBQU9IckMsZUFBTyxFQUFQQSxPQVBHO0FBUUhELGNBQU0sRUFBRTJCLEtBQUssQ0FBQzNCLE1BQU4sb0JBQ0oyQixLQUFLLENBQUMzQixNQURGLGtEQUNKLGNBQ0V1QyxPQURGLENBQ1UsSUFEVixFQUNnQixFQURoQixFQUVDQyxLQUZELENBRU8sR0FGUCxFQUdDQyxHQUhELENBR0ssVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQyxNQUFNLENBQUNELENBQUQsQ0FBYjtBQUFBLFNBSEwsQ0FESSxHQUtKLEVBYkQ7QUFjSEUsV0FBRyxFQUFFQSxHQUFHLENBQUNqQixLQUFEO0FBZEwsUUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9Ba0JFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xrQix1QkFBZSxFQUFFbEIsS0FBSyxDQUFDa0IsZUFEbEI7QUFFTEMsYUFBSyxFQUFFbkIsS0FBSyxDQUFDbUI7QUFGUixPQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNR3pDLFFBTkgsQ0FsQkYsQ0FoQkYsQ0FEVSxHQTZDUixJQTdDSjtBQThDRCxHQXJGSCxDQURGO0FBeUZELENBdEdNOztHQUFNRCxjOztLQUFBQSxjOztBQXVHYixJQUFNd0MsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ2pCLEtBQUQ7QUFBQSxTQUFZO0FBQ3RCb0IsV0FBTyxFQUFFO0FBQUEsVUFBQ0MsR0FBRCx1RUFBTyxDQUFDLENBQVI7QUFBQSxVQUFXRixLQUFYLHVFQUFtQm5CLEtBQUssQ0FBQ2tCLGVBQXpCO0FBQUEsYUFBOEM7QUFDckRJLGdCQUFRLEVBQUUsVUFEMkM7QUFFckRELFdBQUcsRUFBSEEsR0FGcUQ7QUFHckRFLGFBQUssRUFBRSxDQUFDLENBSDZDO0FBSXJEQyxlQUFPLEVBQUUsQ0FKNEM7QUFLckRDLGtCQUFVLEVBQUUsQ0FMeUM7QUFNckRDLGFBQUssRUFBRSxFQU44QztBQU9yREMsY0FBTSxFQUFFLEVBUDZDO0FBUXJEQyxlQUFPLEVBQUUsTUFSNEM7QUFTckRDLHNCQUFjLEVBQUUsUUFUcUM7QUFVckRDLGtCQUFVLEVBQUUsUUFWeUM7QUFXckRDLG9CQUFZLEVBQUUsS0FYdUM7QUFZckRaLGFBQUssRUFBTEEsS0FacUQ7QUFhckRhLGtCQUFVLEVBQUUsR0FieUM7QUFjckRkLHVCQUFlLEVBQUVsQixLQUFLLENBQUNpQztBQWQ4QixPQUE5QztBQUFBLEtBRGE7QUFpQnRCQyxTQUFLLEVBQUU7QUFDTE4sYUFBTyxFQUFFLGNBREo7QUFFTE8sWUFBTSxzQkFBZW5DLEtBQWYsYUFBZUEsS0FBZix1QkFBZUEsS0FBSyxDQUFFb0Msc0JBQXRCLENBRkQ7QUFHTFosYUFBTyxFQUFFbEQsT0FBTyxDQUFDLENBQUQsQ0FIWDtBQUlMK0QsaUJBQVcsRUFBRS9ELE9BQU8sQ0FBQyxDQUFELENBSmY7QUFLTHlELGtCQUFZLEVBQUV6RCxPQUFPLENBQUMsQ0FBRCxDQUxoQjtBQU1MNEMscUJBQWUsRUFBRWxCLEtBQUYsYUFBRUEsS0FBRix1QkFBRUEsS0FBSyxDQUFFa0IsZUFObkI7QUFPTEMsV0FBSyxFQUFFbkIsS0FBSyxDQUFDbUI7QUFQUixLQWpCZTtBQTBCdEJtQixhQUFTLEVBQUU7QUFDVFYsYUFBTyxFQUFFLGNBREE7QUFFVFYscUJBQWUsRUFBRWxCLEtBQUssQ0FBQ2lDLE9BRmQ7QUFHVGQsV0FBSyxFQUFFbkIsS0FBSyxDQUFDa0IsZUFISjtBQUlUaUIsWUFBTSxFQUFFLE1BSkM7QUFLVEosa0JBQVksRUFBRSxFQUxMO0FBTVRRLGNBQVEsRUFBRTtBQU5ELEtBMUJXO0FBa0N0QkMsVUFBTSxFQUFFO0FBQ05yQixXQUFLLEVBQUVuQixLQUFLLENBQUNrQixlQURQO0FBRU5RLFdBQUssRUFBRSxNQUZEO0FBR05SLHFCQUFlLEVBQUVsQixLQUFLLENBQUNpQyxPQUhqQjtBQUlORSxZQUFNLHNCQUFlbkMsS0FBSyxDQUFDaUMsT0FBckIsQ0FKQTtBQUtORixrQkFBWSxFQUFFekQsT0FBTyxDQUFDLENBQUQsQ0FMZjtBQU1ObUQsZ0JBQVUsRUFBRW5ELE9BQU8sQ0FBQyxDQUFELENBTmI7QUFPTm1FLG1CQUFhLEVBQUVuRSxPQUFPLENBQUMsQ0FBRCxDQVBoQjtBQVFOb0Usa0JBQVksRUFBRXBFLE9BQU8sQ0FBQyxDQUFEO0FBUmYsS0FsQ2M7QUE0Q3RCcUUsY0FBVSxFQUFFO0FBQ1Z4QixXQUFLLEVBQUVuQixLQUFLLENBQUNpQyxPQURIO0FBR1ZmLHFCQUFlLEVBQUVsQixLQUFLLENBQUNrQixlQUhiO0FBSVZpQixZQUFNLHNCQUFlbkMsS0FBSyxDQUFDaUMsT0FBckIsQ0FKSTtBQUtWRixrQkFBWSxFQUFFekQsT0FBTyxDQUFDLENBQUQsQ0FMWDtBQU1WbUQsZ0JBQVUsRUFBRW5ELE9BQU8sQ0FBQyxDQUFELENBTlQ7QUFPVm1FLG1CQUFhLEVBQUVuRSxPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWEsQ0FQbEI7QUFRVm9FLGtCQUFZLEVBQUVwRSxPQUFPLENBQUMsQ0FBRDtBQVJYLEtBNUNVO0FBc0R0QnNFLE1BQUUsRUFBRTtBQUNGekIsV0FBSyxFQUFFbkIsS0FBSyxDQUFDaUMsT0FEWDtBQUVGWSxjQUFRLEVBQUUsU0FGUjtBQUdGYixnQkFBVSxFQUFFLE1BSFY7QUFJRlUsa0JBQVksRUFBRXBFLE9BQU8sQ0FBQyxDQUFEO0FBSm5CLEtBdERrQjtBQTREdEJ3RSxNQUFFLEVBQUU7QUFDRjNCLFdBQUssRUFBRW5CLEtBQUssQ0FBQ2lDLE9BRFg7QUFFRlksY0FBUSxFQUFFLFFBRlI7QUFHRkUsbUJBQWEsRUFBRSxXQUhiO0FBSUZDLFlBQU0sRUFBRSxDQUpOO0FBS0Z4QixhQUFPLEVBQUU7QUFMUCxLQTVEa0I7QUFtRXRCeUIsTUFBRSxFQUFFO0FBQ0Y5QixXQUFLLEVBQUVuQixLQUFLLENBQUNpQztBQURYLEtBbkVrQjtBQXNFdEJpQixNQUFFLEVBQUU7QUFDRkwsY0FBUSxFQUFFLFFBRFI7QUFFRmIsZ0JBQVUsRUFBRSxNQUZWO0FBR0ZlLG1CQUFhLEVBQUUsV0FIYjtBQUlGNUIsV0FBSyxFQUFFbkIsS0FBSyxDQUFDaUMsT0FKWDtBQUtGUyxrQkFBWSxFQUFFcEUsT0FBTyxDQUFDLENBQUQ7QUFMbkIsS0F0RWtCO0FBNkV0QjZFLEtBQUMsRUFBRTtBQUNEdkIsYUFBTyxFQUFFO0FBRFIsS0E3RW1CO0FBZ0Z0QndCLE9BQUcsRUFBRTtBQUNIbEMscUJBQWUsRUFBRWxCLEtBQUssQ0FBQ29DLHNCQURwQjtBQUVITSxrQkFBWSxFQUFFcEUsT0FBTyxDQUFDLENBQUQsQ0FGbEI7QUFHSGtELGFBQU8sRUFBRWxELE9BQU8sQ0FBQyxDQUFELENBSGI7QUFJSHlELGtCQUFZLEVBQUV6RCxPQUFPLENBQUMsQ0FBRCxDQUpsQjtBQUtINkQsWUFBTSxFQUFFLDRCQUxMO0FBTUhrQixlQUFTLEVBQUU7QUFOUixLQWhGaUI7QUF3RnRCQyxVQUFNLEVBQUU7QUFDTm5DLFdBQUssRUFBRW5CLEtBQUssQ0FBQ21CLEtBRFA7QUFFTkQscUJBQWUsRUFBRWxCLEtBQUssQ0FBQ29DLHNCQUZqQjtBQUdOTCxrQkFBWSxFQUFFekQsT0FBTyxDQUFDLENBQUQsQ0FIZjtBQUlONkQsWUFBTSxFQUFFLDRCQUpGO0FBTU5YLGFBQU8sRUFBRWxELE9BQU8sQ0FBQyxDQUFELENBTlY7QUFPTitELGlCQUFXLEVBQUUvRCxPQUFPLENBQUMsQ0FBRCxDQVBkO0FBUU5pRixrQkFBWSxFQUFFakYsT0FBTyxDQUFDLENBQUQsQ0FSZjtBQVNOc0QsYUFBTyxFQUFFLGNBVEg7QUFVTnlCLGVBQVMsRUFBRSxpQ0FWTDtBQVdOWCxrQkFBWSxFQUFFcEUsT0FBTyxDQUFDLENBQUQsQ0FYZjtBQVlOa0YsZ0JBQVUsRUFBRWxGLE9BQU8sQ0FBQyxDQUFELENBWmI7QUFhTnVFLGNBQVEsRUFBRSxRQWJKO0FBY052QixjQUFRLEVBQUU7QUFkSixLQXhGYztBQXdHdEJtQyxRQUFJLEVBQUU7QUFDSnRDLFdBQUssRUFBRW5CLEtBQUssQ0FBQ21CO0FBRFQsS0F4R2dCO0FBMkd0QnVDLGNBQVUsRUFBRTtBQUNWYixjQUFRLEVBQUUsTUFEQTtBQUVWYyxpQkFBVyxFQUFFckYsT0FBTyxDQUFDLENBQUQsQ0FGVjtBQUdWb0Usa0JBQVksRUFBRXBFLE9BQU8sQ0FBQyxDQUFEO0FBSFgsS0EzR1U7QUFnSHRCc0YsY0FBVSxFQUFFO0FBQ1Y3QixrQkFBWSxFQUFFLEVBREo7QUFFVlosV0FBSyxFQUFFbkIsS0FBSyxDQUFDaUMsT0FGSDtBQUdWUCxXQUFLLEVBQUUsRUFIRztBQUlWQyxZQUFNLEVBQUUsRUFKRTtBQUtWSCxhQUFPLEVBQUUsQ0FMQztBQU1WcUIsY0FBUSxFQUFFO0FBTkEsS0FoSFU7QUF3SHRCZ0IsY0FBVSxFQUFFO0FBQ1ZDLGVBQVMsRUFBRSxDQUREO0FBRVZwQixrQkFBWSxFQUFFLENBRko7QUFHVmlCLGlCQUFXLEVBQUUsQ0FISDtBQUlWSCxnQkFBVSxFQUFFbEYsT0FBTyxDQUFDLENBQUQsQ0FKVDtBQUtWa0QsYUFBTyxFQUFFLENBTEM7QUFNVkwsV0FBSyxFQUFFbkIsS0FBSyxDQUFDaUMsT0FOSDtBQU9WWCxjQUFRLEVBQUUsVUFQQTtBQVFWRCxTQUFHLEVBQUUsQ0FSSztBQVNWSyxXQUFLLEVBQUUsRUFURztBQVVWQyxZQUFNLEVBQUU7QUFWRTtBQXhIVSxHQUFaO0FBQUEsQ0FBWiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3JjL1NlbGxlclByb3ZpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi9RdWVyeVwiO1xuZXhwb3J0IGNvbnN0IFNlbGxlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdEdBIGZyb20gXCJyZWFjdC1nYVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgbGV2ZWwgPSBbMCwgNSwgOCwgMTMsIDIxLCAzNCwgNTUsIDg5XTtcbmNvbnN0IHByaWNlcyA9IFsxMDAwMDAsIDIwMDAwMCwgNTAwMDAwLCAxMDAwMDAwLCAyMDAwMDAwXTtcbmNvbnN0IHNwYWNpbmcgPSAoaSkgPT4gbGV2ZWxbaV07XG5jb25zdCB1cmkgPVxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICA/IFwiaHR0cHM6Ly9lY29tbWVyY2UubG9hbG9hLnRlY2hcIlxuICAgIDogXCJodHRwOi8vbG9jYWxob3N0OjYwMDdcIjtcbmV4cG9ydCBjb25zdCBTZWxsZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2lzTG9hZCwgc2V0SXNMb2FkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW0dBLCBzZXRHQV0gPSB1c2VTdGF0ZSgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChHQSAmJiAhaXNMb2FkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImluaXRcIiwgR0EpO1xuICAgICAgUmVhY3RHQS5pbml0aWFsaXplKEdBKTtcbiAgICAgIHNldElzTG9hZCh0cnVlKTtcbiAgICB9XG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICBjb25zb2xlLmxvZyh1cmwpO1xuICAgIFJlYWN0R0EucGFnZXZpZXcodXJsKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5XG4gICAgICBxdWVyeT17Z3FsYFxuICAgICAgICBxdWVyeSgkaG9zdDogU3RyaW5nKSB7XG4gICAgICAgICAgYWxsVXNlcnMod2hlcmU6IHsgaG9zdDogJGhvc3QgfSkge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGVtYWlsXG4gICAgICAgICAgICBmaWxlIHtcbiAgICAgICAgICAgICAgcHVibGljVXJsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2dvIHtcbiAgICAgICAgICAgICAgcHVibGljVXJsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdG9yZVxuICAgICAgICAgICAgc2xvZ2FuXG4gICAgICAgICAgICBpbnRyb1xuICAgICAgICAgICAgY29udGFjdFxuICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclxuICAgICAgICAgICAgcHJvZHVjdEJhY2tncm91bmRDb2xvclxuICAgICAgICAgICAgcGFnZUlkXG4gICAgICAgICAgICBnb29nbGVJZFxuICAgICAgICAgICAgcGhvbmVcbiAgICAgICAgICAgIGVtYWlsXG4gICAgICAgICAgICBhZGRyZXNzXG4gICAgICAgICAgICBwcmljZXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICB2YXJpYWJsZXM9e3tcbiAgICAgICAgLy8gaG9zdDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5sb2NhdGlvbi5ob3N0IDogbnVsbCxcbiAgICAgICAgaG9zdDogJ3Nob3B3aGV5ZGFuYW5nLmNvbSdcbiAgICAgIH19XG4gICAgPlxuICAgICAgeyh7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0pID0+IHtcbiAgICAgICAgY29uc3QgdGhlbWUgPSBkYXRhPy5hbGxVc2Vyc1swXTtcbiAgICAgICAgaWYgKHRoZW1lKSB7XG4gICAgICAgICAgc2V0R0EodGhlbWUuZ29vZ2xlSWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGVtZSA/IChcbiAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAgICAgIHt0aGVtZS5zdG9yZX0gfCB7dGhlbWUuc2xvZ2FufVxuICAgICAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXt0aGVtZS5pbnRyb30gLz5cbiAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcbiAgICAgICAgICAgICAgICBjb250ZW50PXt1cmkgKyB0aGVtZT8uZmlsZT8ucHVibGljVXJsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgICAgICAgIGhyZWY9e3VyaSArIHRoZW1lPy5sb2dvPy5wdWJsaWNVcmx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8U2VsbGVyQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgIC4uLnRoZW1lLFxuICAgICAgICAgICAgICAgIHNlcnZlcjpcbiAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICA/IFwiaHR0cHM6Ly9lY29tbWVyY2UubG9hbG9hLnRlY2hcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiaHR0cDovL2xvY2FsaG9zdDo2MDA3XCIsXG4gICAgICAgICAgICAgICAgc2VsbGVyOiB7IGlkOiB0aGVtZS5pZCB9LFxuICAgICAgICAgICAgICAgIHNwYWNpbmcsXG4gICAgICAgICAgICAgICAgcHJpY2VzOiB0aGVtZS5wcmljZXNcbiAgICAgICAgICAgICAgICAgID8gdGhlbWUucHJpY2VzXG4gICAgICAgICAgICAgICAgICAgID8ucmVwbGFjZSgvIC9nLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIsXCIpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGUpID0+IE51bWJlcihlKSlcbiAgICAgICAgICAgICAgICAgIDogW10sXG4gICAgICAgICAgICAgICAgY3NzOiBjc3ModGhlbWUpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TZWxsZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICkgOiBudWxsO1xuICAgICAgfX1cbiAgICA8L1F1ZXJ5PlxuICApO1xufTtcbmNvbnN0IGNzcyA9ICh0aGVtZSkgPT4gKHtcbiAgYnRuSWNvbjogKHRvcCA9IC01LCBjb2xvciA9IHRoZW1lLmJhY2tncm91bmRDb2xvcikgPT4gKHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcCxcbiAgICByaWdodDogLTUsXG4gICAgcGFkZGluZzogMyxcbiAgICBwYWRkaW5nVG9wOiA1LFxuICAgIHdpZHRoOiAzMCxcbiAgICBoZWlnaHQ6IDMwLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgIGNvbG9yLFxuICAgIGZvbnRXZWlnaHQ6IDgwMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnByaW1hcnksXG4gIH0pLFxuICBpbnB1dDoge1xuICAgIGRpc3BsYXk6IFwiYmxvY2staW5saW5lXCIsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWU/LnByb2R1Y3RCYWNrZ3JvdW5kQ29sb3J9YCxcbiAgICBwYWRkaW5nOiBzcGFjaW5nKDEpLFxuICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nKDMpLFxuICAgIGJvcmRlclJhZGl1czogc3BhY2luZygyKSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lPy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICB9LFxuICBidG5JbmxpbmU6IHtcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucHJpbWFyeSxcbiAgICBjb2xvcjogdGhlbWUuYmFja2dyb3VuZENvbG9yLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgYm9yZGVyUmFkaXVzOiAzNSxcbiAgICBtaW5XaWR0aDogMzUsXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGNvbG9yOiB0aGVtZS5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucHJpbWFyeSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wcmltYXJ5fWAsXG4gICAgYm9yZGVyUmFkaXVzOiBzcGFjaW5nKDIpLFxuICAgIHBhZGRpbmdUb3A6IHNwYWNpbmcoMSksXG4gICAgcGFkZGluZ0JvdHRvbTogc3BhY2luZygxKSxcbiAgICBtYXJnaW5Cb3R0b206IHNwYWNpbmcoMiksXG4gIH0sXG4gIGJ0bk91dGxpbmU6IHtcbiAgICBjb2xvcjogdGhlbWUucHJpbWFyeSxcblxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuYmFja2dyb3VuZENvbG9yLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnByaW1hcnl9YCxcbiAgICBib3JkZXJSYWRpdXM6IHNwYWNpbmcoMiksXG4gICAgcGFkZGluZ1RvcDogc3BhY2luZygxKSxcbiAgICBwYWRkaW5nQm90dG9tOiBzcGFjaW5nKDEpICsgMSxcbiAgICBtYXJnaW5Cb3R0b206IHNwYWNpbmcoMiksXG4gIH0sXG4gIGg1OiB7XG4gICAgY29sb3I6IHRoZW1lLnByaW1hcnksXG4gICAgZm9udFNpemU6IFwiMC44N3JlbVwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIG1hcmdpbkJvdHRvbTogc3BhY2luZygzKSxcbiAgfSxcbiAgaDY6IHtcbiAgICBjb2xvcjogdGhlbWUucHJpbWFyeSxcbiAgICBmb250U2l6ZTogXCIwLjhyZW1cIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiAwLFxuICB9LFxuICBoMToge1xuICAgIGNvbG9yOiB0aGVtZS5wcmltYXJ5LFxuICB9LFxuICBoMjoge1xuICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgY29sb3I6IHRoZW1lLnByaW1hcnksXG4gICAgbWFyZ2luQm90dG9tOiBzcGFjaW5nKDIpLFxuICB9LFxuICBhOiB7XG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICB9LFxuICBib3g6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnByb2R1Y3RCYWNrZ3JvdW5kQ29sb3IsXG4gICAgbWFyZ2luQm90dG9tOiBzcGFjaW5nKDQpLFxuICAgIHBhZGRpbmc6IHNwYWNpbmcoMyksXG4gICAgYm9yZGVyUmFkaXVzOiBzcGFjaW5nKDEpLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KVwiLFxuICAgIGJveFNoYWRvdzogXCI1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDMpXCIsXG4gIH0sXG4gIGZpbHRlcjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnByb2R1Y3RCYWNrZ3JvdW5kQ29sb3IsXG4gICAgYm9yZGVyUmFkaXVzOiBzcGFjaW5nKDEpLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KVwiLFxuXG4gICAgcGFkZGluZzogc3BhY2luZygyKSxcbiAgICBwYWRkaW5nTGVmdDogc3BhY2luZygzKSxcbiAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcoMyksXG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBib3hTaGFkb3c6IFwiNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjAzKVwiLFxuICAgIG1hcmdpbkJvdHRvbTogc3BhY2luZygzKSxcbiAgICBtYXJnaW5MZWZ0OiBzcGFjaW5nKDMpLFxuICAgIGZvbnRTaXplOiBcIjAuOXJlbVwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gIH0sXG4gIGljb246IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3IsXG4gIH0sXG4gIGljb25IZWFkZXI6IHtcbiAgICBmb250U2l6ZTogXCIxcmVtXCIsXG4gICAgbWFyZ2luUmlnaHQ6IHNwYWNpbmcoMiksXG4gICAgbWFyZ2luQm90dG9tOiBzcGFjaW5nKDEpLFxuICB9LFxuICBpY29uQm9yZGVyOiB7XG4gICAgYm9yZGVyUmFkaXVzOiAzNSxcbiAgICBjb2xvcjogdGhlbWUucHJpbWFyeSxcbiAgICB3aWR0aDogMzUsXG4gICAgaGVpZ2h0OiAzNSxcbiAgICBwYWRkaW5nOiA4LFxuICAgIGZvbnRTaXplOiBcIjFyZW1cIixcbiAgfSxcbiAgcmVtb3ZlSWNvbjoge1xuICAgIG1hcmdpblRvcDogMCxcbiAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgbWFyZ2luUmlnaHQ6IDAsXG4gICAgbWFyZ2luTGVmdDogc3BhY2luZygyKSxcbiAgICBwYWRkaW5nOiAzLFxuICAgIGNvbG9yOiB0aGVtZS5wcmltYXJ5LFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgdG9wOiAwLFxuICAgIHdpZHRoOiAyNSxcbiAgICBoZWlnaHQ6IDI1LFxuICB9LFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/src/SellerProvider.js\n");

/***/ })

})