webpackHotUpdate_N_E("pages/posts",{

/***/ "./components/Hashtag/item.js":
/*!************************************!*\
  !*** ./components/Hashtag/item.js ***!
  \************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Item\", function() { return Item; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/SellerProvider */ \"./components/src/SellerProvider.js\");\n\n\nvar _jsxFileName = \"/media/huy/New Volume/linux/apps/ecom-ui/components/Hashtag/item.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nfunction Item(_ref) {\n  _s();\n\n  var hashtag = _ref.hashtag,\n      style = _ref.style;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_3__[\"SellerContext\"]);\n  var query = router.query;\n  var exist = query.hashtag == hashtag.url;\n\n  var handleClick = function handleClick() {\n    query.hashtag = hashtag.url;\n    if (hashtag.url === \"all\") delete query.hashtag;\n    router.push({\n      pathname: \"/posts\"\n    });\n    router.push({\n      pathname: \"/posts\",\n      query: query\n    });\n  };\n\n  return __jsx(\"a\", {\n    style: _objectSpread(_objectSpread({}, style), {}, {\n      color: theme.color,\n      fontWeight: exist ? \"bold\" : null,\n      cursor: \"pointer\"\n    }),\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, hashtag.name);\n}\n\n_s(Item, \"hwnEUJ5oyRn1hejEPI0917yXxko=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Item;\n\nvar _c;\n\n$RefreshReg$(_c, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IYXNodGFnL2l0ZW0uanM/NTNmNSJdLCJuYW1lcyI6WyJJdGVtIiwiaGFzaHRhZyIsInN0eWxlIiwicm91dGVyIiwidXNlUm91dGVyIiwidGhlbWUiLCJ1c2VDb250ZXh0IiwiU2VsbGVyQ29udGV4dCIsInF1ZXJ5IiwiZXhpc3QiLCJ1cmwiLCJoYW5kbGVDbGljayIsInB1c2giLCJwYXRobmFtZSIsImNvbG9yIiwiZm9udFdlaWdodCIsImN1cnNvciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ08sU0FBU0EsSUFBVCxPQUFrQztBQUFBOztBQUFBLE1BQWxCQyxPQUFrQixRQUFsQkEsT0FBa0I7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDdkMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLEtBQUssR0FBR0Msd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FBeEI7QUFFQSxNQUFJQyxLQUFLLEdBQUdMLE1BQU0sQ0FBQ0ssS0FBbkI7QUFDQSxNQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ1AsT0FBTixJQUFpQkEsT0FBTyxDQUFDUyxHQUF2Qzs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCSCxTQUFLLENBQUNQLE9BQU4sR0FBZ0JBLE9BQU8sQ0FBQ1MsR0FBeEI7QUFDQSxRQUFJVCxPQUFPLENBQUNTLEdBQVIsS0FBZ0IsS0FBcEIsRUFBMkIsT0FBT0YsS0FBSyxDQUFDUCxPQUFiO0FBQzNCRSxVQUFNLENBQUNTLElBQVAsQ0FBWTtBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUFaO0FBQ0FWLFVBQU0sQ0FBQ1MsSUFBUCxDQUFZO0FBQUVDLGNBQVEsRUFBRSxRQUFaO0FBQXNCTCxXQUFLLEVBQUxBO0FBQXRCLEtBQVo7QUFDRCxHQUxEOztBQU1BLFNBQ0U7QUFDRSxTQUFLLGtDQUNBTixLQURBO0FBRUhZLFdBQUssRUFBRVQsS0FBSyxDQUFDUyxLQUZWO0FBR0hDLGdCQUFVLEVBQUVOLEtBQUssR0FBRyxNQUFILEdBQVksSUFIMUI7QUFJSE8sWUFBTSxFQUFFO0FBSkwsTUFEUDtBQU9FLFdBQU8sRUFBRUwsV0FQWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0dWLE9BQU8sQ0FBQ2dCLElBVFgsQ0FERjtBQWFEOztHQXpCZWpCLEk7VUFDQ0kscUQ7OztLQURESixJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IYXNodGFnL2l0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlbGxlckNvbnRleHQgfSBmcm9tIFwiLi4vc3JjL1NlbGxlclByb3ZpZGVyXCI7XG5leHBvcnQgZnVuY3Rpb24gSXRlbSh7IGhhc2h0YWcsIHN0eWxlIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChTZWxsZXJDb250ZXh0KTtcblxuICBsZXQgcXVlcnkgPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IGV4aXN0ID0gcXVlcnkuaGFzaHRhZyA9PSBoYXNodGFnLnVybDtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgcXVlcnkuaGFzaHRhZyA9IGhhc2h0YWcudXJsO1xuICAgIGlmIChoYXNodGFnLnVybCA9PT0gXCJhbGxcIikgZGVsZXRlIHF1ZXJ5Lmhhc2h0YWc7XG4gICAgcm91dGVyLnB1c2goeyBwYXRobmFtZTogXCIvcG9zdHNcIiB9KTtcbiAgICByb3V0ZXIucHVzaCh7IHBhdGhuYW1lOiBcIi9wb3N0c1wiLCBxdWVyeSB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8YVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICAgICAgZm9udFdlaWdodDogZXhpc3QgPyBcImJvbGRcIiA6IG51bGwsXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICB9fVxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgPlxuICAgICAge2hhc2h0YWcubmFtZX1cbiAgICA8L2E+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Hashtag/item.js\n");

/***/ })

})