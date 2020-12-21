webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Attribute/item.js":
/*!**************************************!*\
  !*** ./components/Attribute/item.js ***!
  \**************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Item\", function() { return Item; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/chip */ \"./lib/chip.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../apollo/client */ \"./apollo/client.js\");\n/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/SellerProvider */ \"./components/src/SellerProvider.js\");\n\n\nvar _jsxFileName = \"/media/huy/New Volume/linux/apps/ecom-ui/components/Attribute/item.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nfunction Item(_ref) {\n  _s();\n\n  var attribute = _ref.attribute,\n      style = _ref.style,\n      removeIcon = _ref.removeIcon;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_6__[\"SellerContext\"]);\n  var query = router.query;\n  var currentAttributes = query.attributes ? query.attributes.split(\",\") : [];\n  var exist = currentAttributes.includes(attribute.url);\n\n  var handleClick = function handleClick() {\n    if (exist) {\n      currentAttributes = Object(_lib_chip__WEBPACK_IMPORTED_MODULE_3__[\"removeItemOnce\"])(currentAttributes, attribute.url);\n    } else {\n      currentAttributes = currentAttributes.concat([attribute.url]);\n    }\n\n    query.attributes = currentAttributes.toString();\n    if (attribute.url === \"all\") delete query.attributes;\n    router.push({\n      query: query\n    });\n  };\n\n  return __jsx(\"a\", {\n    style: _objectSpread(_objectSpread({}, style), {}, {\n      color: theme.color,\n      fontWeight: exist ? \"bold\" : null,\n      display: \"block\",\n      cursor: \"pointer\"\n    }),\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, attribute.name, removeIcon ? \"x\" : null);\n}\n\n_s(Item, \"hwnEUJ5oyRn1hejEPI0917yXxko=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Item;\n\nvar _c;\n\n$RefreshReg$(_c, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdHRyaWJ1dGUvaXRlbS5qcz9lZDAyIl0sIm5hbWVzIjpbIkl0ZW0iLCJhdHRyaWJ1dGUiLCJzdHlsZSIsInJlbW92ZUljb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0aGVtZSIsInVzZUNvbnRleHQiLCJTZWxsZXJDb250ZXh0IiwicXVlcnkiLCJjdXJyZW50QXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJzcGxpdCIsImV4aXN0IiwiaW5jbHVkZXMiLCJ1cmwiLCJoYW5kbGVDbGljayIsInJlbW92ZUl0ZW1PbmNlIiwiY29uY2F0IiwidG9TdHJpbmciLCJwdXNoIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsImN1cnNvciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ08sU0FBU0EsSUFBVCxPQUFnRDtBQUFBOztBQUFBLE1BQWhDQyxTQUFnQyxRQUFoQ0EsU0FBZ0M7QUFBQSxNQUFyQkMsS0FBcUIsUUFBckJBLEtBQXFCO0FBQUEsTUFBZEMsVUFBYyxRQUFkQSxVQUFjO0FBQ3JELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLHdEQUFVLENBQUNDLGlFQUFELENBQXhCO0FBRUEsTUFBSUMsS0FBSyxHQUFHTCxNQUFNLENBQUNLLEtBQW5CO0FBQ0EsTUFBSUMsaUJBQWlCLEdBQUdELEtBQUssQ0FBQ0UsVUFBTixHQUFtQkYsS0FBSyxDQUFDRSxVQUFOLENBQWlCQyxLQUFqQixDQUF1QixHQUF2QixDQUFuQixHQUFpRCxFQUF6RTtBQUNBLE1BQU1DLEtBQUssR0FBR0gsaUJBQWlCLENBQUNJLFFBQWxCLENBQTJCYixTQUFTLENBQUNjLEdBQXJDLENBQWQ7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUFJSCxLQUFKLEVBQVc7QUFDVEgsdUJBQWlCLEdBQUdPLGdFQUFjLENBQUNQLGlCQUFELEVBQW9CVCxTQUFTLENBQUNjLEdBQTlCLENBQWxDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xMLHVCQUFpQixHQUFHQSxpQkFBaUIsQ0FBQ1EsTUFBbEIsQ0FBeUIsQ0FBQ2pCLFNBQVMsQ0FBQ2MsR0FBWCxDQUF6QixDQUFwQjtBQUNEOztBQUVETixTQUFLLENBQUNFLFVBQU4sR0FBbUJELGlCQUFpQixDQUFDUyxRQUFsQixFQUFuQjtBQUNBLFFBQUlsQixTQUFTLENBQUNjLEdBQVYsS0FBa0IsS0FBdEIsRUFBNkIsT0FBT04sS0FBSyxDQUFDRSxVQUFiO0FBQzdCUCxVQUFNLENBQUNnQixJQUFQLENBQVk7QUFBRVgsV0FBSyxFQUFMQTtBQUFGLEtBQVo7QUFDRCxHQVZEOztBQVdBLFNBQ0U7QUFDRSxTQUFLLGtDQUNBUCxLQURBO0FBRUhtQixXQUFLLEVBQUVmLEtBQUssQ0FBQ2UsS0FGVjtBQUdIQyxnQkFBVSxFQUFFVCxLQUFLLEdBQUcsTUFBSCxHQUFZLElBSDFCO0FBSUhVLGFBQU8sRUFBRSxPQUpOO0FBS0hDLFlBQU0sRUFBRTtBQUxMLE1BRFA7QUFRRSxXQUFPLEVBQUVSLFdBUlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVHZixTQUFTLENBQUN3QixJQVZiLEVBV0d0QixVQUFVLEdBQUcsR0FBSCxHQUFTLElBWHRCLENBREY7QUFlRDs7R0FqQ2VILEk7VUFDQ0sscUQ7OztLQURETCxJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BdHRyaWJ1dGUvaXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgcmVtb3ZlSXRlbU9uY2UgfSBmcm9tIFwiLi4vLi4vbGliL2NoaXBcIjtcbmltcG9ydCB7IEZpVGhlcm1vbWV0ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcblxuaW1wb3J0IHsgZmlsdGVyQXR0cmlidXRlVmFyIH0gZnJvbSBcIi4uLy4uL2Fwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlbGxlckNvbnRleHQgfSBmcm9tIFwiLi4vc3JjL1NlbGxlclByb3ZpZGVyXCI7XG5leHBvcnQgZnVuY3Rpb24gSXRlbSh7IGF0dHJpYnV0ZSwgc3R5bGUsIHJlbW92ZUljb24gfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgdGhlbWUgPSB1c2VDb250ZXh0KFNlbGxlckNvbnRleHQpO1xuXG4gIGxldCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcbiAgbGV0IGN1cnJlbnRBdHRyaWJ1dGVzID0gcXVlcnkuYXR0cmlidXRlcyA/IHF1ZXJ5LmF0dHJpYnV0ZXMuc3BsaXQoXCIsXCIpIDogW107XG4gIGNvbnN0IGV4aXN0ID0gY3VycmVudEF0dHJpYnV0ZXMuaW5jbHVkZXMoYXR0cmlidXRlLnVybCk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGlmIChleGlzdCkge1xuICAgICAgY3VycmVudEF0dHJpYnV0ZXMgPSByZW1vdmVJdGVtT25jZShjdXJyZW50QXR0cmlidXRlcywgYXR0cmlidXRlLnVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRBdHRyaWJ1dGVzID0gY3VycmVudEF0dHJpYnV0ZXMuY29uY2F0KFthdHRyaWJ1dGUudXJsXSk7XG4gICAgfVxuXG4gICAgcXVlcnkuYXR0cmlidXRlcyA9IGN1cnJlbnRBdHRyaWJ1dGVzLnRvU3RyaW5nKCk7XG4gICAgaWYgKGF0dHJpYnV0ZS51cmwgPT09IFwiYWxsXCIpIGRlbGV0ZSBxdWVyeS5hdHRyaWJ1dGVzO1xuICAgIHJvdXRlci5wdXNoKHsgcXVlcnkgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3IsXG4gICAgICAgIGZvbnRXZWlnaHQ6IGV4aXN0ID8gXCJib2xkXCIgOiBudWxsLFxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICB9fVxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgPlxuICAgICAge2F0dHJpYnV0ZS5uYW1lfVxuICAgICAge3JlbW92ZUljb24gPyBcInhcIiA6IG51bGx9XG4gICAgPC9hPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Attribute/item.js\n");

/***/ })

})