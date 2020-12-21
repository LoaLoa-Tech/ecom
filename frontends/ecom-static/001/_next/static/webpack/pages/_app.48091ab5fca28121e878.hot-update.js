webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/MenuApp/index.js":
/*!*************************************!*\
  !*** ./components/MenuApp/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MenuApp; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _User_DropdownUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../User/DropdownUser */ \"./components/User/DropdownUser.js\");\n/* harmony import */ var _Cart_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Cart/icon */ \"./components/Cart/icon.js\");\n/* harmony import */ var _Wishlist_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Wishlist/icon */ \"./components/Wishlist/icon.js\");\n/* harmony import */ var _Order_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Order/icon */ \"./components/Order/icon.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _src_logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/logo */ \"./components/src/logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/SellerProvider */ \"./components/src/SellerProvider.js\");\n\n\n\nvar _jsxFileName = \"/media/huy/New Volume/linux/apps/ecom-ui/components/MenuApp/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      query {\\n        user @client\\n      }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\nfunction MenuApp() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])();\n  var theme = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_11__[\"SellerContext\"]);\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_10__[\"useQuery\"])(Object(_apollo_client__WEBPACK_IMPORTED_MODULE_10__[\"gql\"])(_templateObject()), {}),\n      data = _useQuery.data;\n\n  var isLogin = data === null || data === void 0 ? void 0 : data.user; // ANIMATION\n\n  return __jsx(\"section\", {\n    style: {\n      position: \"fixed\",\n      width: \"100%\",\n      zIndex: 100,\n      top: 0,\n      backgroundColor: theme.productBackgroundColor,\n      paddingTop: theme.spacing(3),\n      paddingBottom: theme.spacing(3),\n      border: \"1px solid rgba(0,0,0,0.05)\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Container\"], {\n    fluid: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      alignItems: \"center\",\n      height: 40,\n      width: \"100%\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(_src_logo__WEBPACK_IMPORTED_MODULE_8__[\"Logo\"], {\n    style: {\n      \"float\": \"left\",\n      marginLeft: theme.spacing(3),\n      marginRight: theme.spacing(3),\n      minHeight: 40\n    },\n    onClick: function onClick() {\n      router.push(\"/\");\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }), __jsx(\"h1\", {\n    style: {\n      \"float\": \"left\",\n      marginLeft: theme.spacing(3),\n      fontSize: \"1.2rem\",\n      width: \"100%\",\n      padding: 0,\n      margin: 0,\n      color: theme.primary,\n      cursor: \"pointer\",\n      lineBreak: \"false\"\n    },\n    onClick: function onClick() {\n      router.push(\"/\");\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, theme.store), __jsx(_Wishlist_icon__WEBPACK_IMPORTED_MODULE_5__[\"Icon\"], {\n    style: _objectSpread(_objectSpread({}, theme.css.iconBorder), {}, {\n      \"float\": \"right\"\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }), __jsx(_Cart_icon__WEBPACK_IMPORTED_MODULE_4__[\"Icon\"], {\n    style: _objectSpread(_objectSpread({}, theme.css.iconBorder), {}, {\n      \"float\": \"right\"\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }), __jsx(_Order_icon__WEBPACK_IMPORTED_MODULE_6__[\"Icon\"], {\n    style: _objectSpread(_objectSpread({}, theme.css.iconBorder), {}, {\n      \"float\": \"right\"\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 11\n    }\n  }), __jsx(_User_DropdownUser__WEBPACK_IMPORTED_MODULE_3__[\"CategoriesDropdownMenu\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(MenuApp, \"aoEnOZxFC1sg2z6Aplh0GYMbvjo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"], _apollo_client__WEBPACK_IMPORTED_MODULE_10__[\"useQuery\"]];\n});\n\n_c = MenuApp;\n\nvar _c;\n\n$RefreshReg$(_c, \"MenuApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51QXBwL2luZGV4LmpzP2U4YmYiXSwibmFtZXMiOlsiTWVudUFwcCIsInJvdXRlciIsInVzZVJvdXRlciIsInRoZW1lIiwidXNlQ29udGV4dCIsIlNlbGxlckNvbnRleHQiLCJ1c2VRdWVyeSIsImdxbCIsImRhdGEiLCJpc0xvZ2luIiwidXNlciIsInBvc2l0aW9uIiwid2lkdGgiLCJ6SW5kZXgiLCJ0b3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcm9kdWN0QmFja2dyb3VuZENvbG9yIiwicGFkZGluZ1RvcCIsInNwYWNpbmciLCJwYWRkaW5nQm90dG9tIiwiYm9yZGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtaW5IZWlnaHQiLCJwdXNoIiwiZm9udFNpemUiLCJwYWRkaW5nIiwibWFyZ2luIiwiY29sb3IiLCJwcmltYXJ5IiwiY3Vyc29yIiwibGluZUJyZWFrIiwic3RvcmUiLCJjc3MiLCJpY29uQm9yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFDaEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLEtBQUssR0FBR0Msd0RBQVUsQ0FBQ0Msa0VBQUQsQ0FBeEI7O0FBRmdDLGtCQUdmQyxnRUFBUSxDQUN2QkMsMkRBRHVCLHFCQU12QixFQU51QixDQUhPO0FBQUEsTUFHeEJDLElBSHdCLGFBR3hCQSxJQUh3Qjs7QUFXaEMsTUFBTUMsT0FBTyxHQUFHRCxJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRUUsSUFBdEIsQ0FYZ0MsQ0FZaEM7O0FBRUEsU0FDRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxjQUFRLEVBQUUsT0FETDtBQUVMQyxXQUFLLEVBQUUsTUFGRjtBQUdMQyxZQUFNLEVBQUUsR0FISDtBQUlMQyxTQUFHLEVBQUUsQ0FKQTtBQUtMQyxxQkFBZSxFQUFFWixLQUFLLENBQUNhLHNCQUxsQjtBQU1MQyxnQkFBVSxFQUFFZCxLQUFLLENBQUNlLE9BQU4sQ0FBYyxDQUFkLENBTlA7QUFPTEMsbUJBQWEsRUFBRWhCLEtBQUssQ0FBQ2UsT0FBTixDQUFjLENBQWQsQ0FQVjtBQVFMRSxZQUFNLEVBQUU7QUFSSCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZRSxNQUFDLG9EQUFEO0FBQVcsU0FBSyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEMsZ0JBQVUsRUFBRSxRQUZQO0FBR0xDLFlBQU0sRUFBRSxFQUhIO0FBSUxYLFdBQUssRUFBRTtBQUpGLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMsOENBQUQ7QUFDRSxTQUFLLEVBQUU7QUFDTCxlQUFPLE1BREY7QUFFTFksZ0JBQVUsRUFBRXJCLEtBQUssQ0FBQ2UsT0FBTixDQUFjLENBQWQsQ0FGUDtBQUdMTyxpQkFBVyxFQUFFdEIsS0FBSyxDQUFDZSxPQUFOLENBQWMsQ0FBZCxDQUhSO0FBSUxRLGVBQVMsRUFBRTtBQUpOLEtBRFQ7QUFPRSxXQUFPLEVBQUUsbUJBQU07QUFDYnpCLFlBQU0sQ0FBQzBCLElBQVAsQ0FBWSxHQUFaO0FBQ0QsS0FUSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFtQkU7QUFDRSxTQUFLLEVBQUU7QUFDTCxlQUFPLE1BREY7QUFFTEgsZ0JBQVUsRUFBRXJCLEtBQUssQ0FBQ2UsT0FBTixDQUFjLENBQWQsQ0FGUDtBQUdMVSxjQUFRLEVBQUUsUUFITDtBQUlMaEIsV0FBSyxFQUFFLE1BSkY7QUFLTGlCLGFBQU8sRUFBRSxDQUxKO0FBTUxDLFlBQU0sRUFBRSxDQU5IO0FBT0xDLFdBQUssRUFBRTVCLEtBQUssQ0FBQzZCLE9BUFI7QUFRTEMsWUFBTSxFQUFFLFNBUkg7QUFTTEMsZUFBUyxFQUFFO0FBVE4sS0FEVDtBQVlFLFdBQU8sRUFBRSxtQkFBTTtBQUNiakMsWUFBTSxDQUFDMEIsSUFBUCxDQUFZLEdBQVo7QUFDRCxLQWRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FnQkd4QixLQUFLLENBQUNnQyxLQWhCVCxDQW5CRixFQXFDRSxNQUFDLG1EQUFEO0FBQ0UsU0FBSyxrQ0FDQWhDLEtBQUssQ0FBQ2lDLEdBQU4sQ0FBVUMsVUFEVjtBQUVILGVBQU87QUFGSixNQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQ0YsRUEyQ0UsTUFBQywrQ0FBRDtBQUNFLFNBQUssa0NBQ0FsQyxLQUFLLENBQUNpQyxHQUFOLENBQVVDLFVBRFY7QUFFSCxlQUFPO0FBRkosTUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0NGLEVBaURFLE1BQUMsZ0RBQUQ7QUFDRSxTQUFLLGtDQUNBbEMsS0FBSyxDQUFDaUMsR0FBTixDQUFVQyxVQURWO0FBRUgsZUFBTztBQUZKLE1BRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpERixFQXVERSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2REYsQ0FERixDQVpGLENBREY7QUEwRUQ7O0dBeEZ1QnJDLE87VUFDUEUscUQsRUFFRUksd0Q7OztLQUhLTixPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NZW51QXBwL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2F0ZWdvcmllc0Ryb3Bkb3duTWVudSBhcyBVc2VycyB9IGZyb20gXCIuLi9Vc2VyL0Ryb3Bkb3duVXNlclwiO1xuaW1wb3J0IHsgSWNvbiBhcyBDYXJ0SWNvbiB9IGZyb20gXCIuLi9DYXJ0L2ljb25cIjtcbmltcG9ydCB7IEljb24gYXMgV2lzaGxpc3RJY29uIH0gZnJvbSBcIi4uL1dpc2hsaXN0L2ljb25cIjtcbmltcG9ydCB7IEljb24gYXMgT3JkZXJJY29uIH0gZnJvbSBcIi4uL09yZGVyL2ljb25cIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgeyBMb2dvIH0gZnJvbSBcIi4uL3NyYy9sb2dvXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgdXNlUXVlcnksIGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2VsbGVyQ29udGV4dCB9IGZyb20gXCIuLi9zcmMvU2VsbGVyUHJvdmlkZXJcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVBcHAoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoU2VsbGVyQ29udGV4dCk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoXG4gICAgZ3FsYFxuICAgICAgcXVlcnkge1xuICAgICAgICB1c2VyIEBjbGllbnRcbiAgICAgIH1cbiAgICBgLFxuICAgIHt9XG4gICk7XG4gIGNvbnN0IGlzTG9naW4gPSBkYXRhPy51c2VyO1xuICAvLyBBTklNQVRJT05cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBzdHlsZT17e1xuICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIHpJbmRleDogMTAwLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucHJvZHVjdEJhY2tncm91bmRDb2xvcixcbiAgICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygzKSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDUpXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb250YWluZXIgZmx1aWQ+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPExvZ29cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZsb2F0OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogNDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGgxXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmbG9hdDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuMnJlbVwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnByaW1hcnksXG4gICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgIGxpbmVCcmVhazogXCJmYWxzZVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhlbWUuc3RvcmV9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8V2lzaGxpc3RJY29uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi50aGVtZS5jc3MuaWNvbkJvcmRlcixcbiAgICAgICAgICAgICAgZmxvYXQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FydEljb25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnRoZW1lLmNzcy5pY29uQm9yZGVyLFxuICAgICAgICAgICAgICBmbG9hdDogXCJyaWdodFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxPcmRlckljb25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnRoZW1lLmNzcy5pY29uQm9yZGVyLFxuICAgICAgICAgICAgICBmbG9hdDogXCJyaWdodFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxVc2VycyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MenuApp/index.js\n");

/***/ })

})