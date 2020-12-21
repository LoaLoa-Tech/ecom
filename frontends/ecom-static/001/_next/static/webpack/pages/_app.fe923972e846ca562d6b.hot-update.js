webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/MenuApp/index.js":
/*!*************************************!*\
  !*** ./components/MenuApp/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MenuApp; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _User_DropdownUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../User/DropdownUser */ \"./components/User/DropdownUser.js\");\n/* harmony import */ var _Cart_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Cart/icon */ \"./components/Cart/icon.js\");\n/* harmony import */ var _Wishlist_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Wishlist/icon */ \"./components/Wishlist/icon.js\");\n/* harmony import */ var _Order_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Order/icon */ \"./components/Order/icon.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _src_logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/logo */ \"./components/src/logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/SellerProvider */ \"./components/src/SellerProvider.js\");\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-ga */ \"./node_modules/react-ga/dist/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/media/huy/New Volume/linux/apps/ecom-ui/components/MenuApp/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      query {\\n        user @client\\n      }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MenuApp() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])();\n  var theme = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_11__[\"SellerContext\"]);\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_10__[\"useQuery\"])(Object(_apollo_client__WEBPACK_IMPORTED_MODULE_10__[\"gql\"])(_templateObject()), {}),\n      data = _useQuery.data;\n\n  var isLogin = data === null || data === void 0 ? void 0 : data.user; // ANIMATION\n\n  return __jsx(\"section\", {\n    style: {\n      position: 'fixed',\n      width: '100%',\n      zIndex: 100,\n      top: 0,\n      backgroundColor: theme.productBackgroundColor,\n      paddingTop: theme.spacing(3),\n      paddingBottom: theme.spacing(3),\n      border: '1px solid rgba(0,0,0,0.05)'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Container\"], {\n    fluid: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      alignItems: 'center',\n      height: 40,\n      width: '100%'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(_src_logo__WEBPACK_IMPORTED_MODULE_8__[\"Logo\"], {\n    style: {\n      \"float\": 'left',\n      marginLeft: theme.spacing(3),\n      marginRight: theme.spacing(3),\n      height: '100%'\n    },\n    onClick: function onClick() {\n      router.push('/');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }), __jsx(\"h1\", {\n    style: {\n      \"float\": 'left',\n      marginLeft: theme.spacing(3),\n      fontSize: '0.9rem',\n      width: '100%',\n      padding: 0,\n      margin: 0,\n      color: theme.primary,\n      cursor: 'pointer',\n      wordWrap: 'initial',\n      fontWeight: 'bold'\n    },\n    onClick: function onClick() {\n      router.push('/');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, theme.store), __jsx(_Wishlist_icon__WEBPACK_IMPORTED_MODULE_5__[\"Icon\"], {\n    style: _objectSpread(_objectSpread({}, theme.css.iconBorder), {}, {\n      \"float\": 'right'\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }), __jsx(_Cart_icon__WEBPACK_IMPORTED_MODULE_4__[\"Icon\"], {\n    style: _objectSpread(_objectSpread({}, theme.css.iconBorder), {}, {\n      \"float\": 'right'\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }), __jsx(_Order_icon__WEBPACK_IMPORTED_MODULE_6__[\"Icon\"], {\n    style: _objectSpread(_objectSpread({}, theme.css.iconBorder), {}, {\n      \"float\": 'right'\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  }), __jsx(_User_DropdownUser__WEBPACK_IMPORTED_MODULE_3__[\"CategoriesDropdownMenu\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(MenuApp, \"9pHL6j+6GUYa5PVUfY6rBqiQC0I=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"], _apollo_client__WEBPACK_IMPORTED_MODULE_10__[\"useQuery\"]];\n});\n\n_c = MenuApp;\n\nvar _c;\n\n$RefreshReg$(_c, \"MenuApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51QXBwL2luZGV4LmpzP2U4YmYiXSwibmFtZXMiOlsiTWVudUFwcCIsInJvdXRlciIsInVzZVJvdXRlciIsInRoZW1lIiwidXNlQ29udGV4dCIsIlNlbGxlckNvbnRleHQiLCJ1c2VRdWVyeSIsImdxbCIsImRhdGEiLCJpc0xvZ2luIiwidXNlciIsInBvc2l0aW9uIiwid2lkdGgiLCJ6SW5kZXgiLCJ0b3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcm9kdWN0QmFja2dyb3VuZENvbG9yIiwicGFkZGluZ1RvcCIsInNwYWNpbmciLCJwYWRkaW5nQm90dG9tIiwiYm9yZGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwdXNoIiwiZm9udFNpemUiLCJwYWRkaW5nIiwibWFyZ2luIiwiY29sb3IiLCJwcmltYXJ5IiwiY3Vyc29yIiwid29yZFdyYXAiLCJmb250V2VpZ2h0Iiwic3RvcmUiLCJjc3MiLCJpY29uQm9yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUNoQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyx3REFBVSxDQUFDQyxrRUFBRCxDQUF4Qjs7QUFGZ0Msa0JBR2pCQyxnRUFBUSxDQUNyQkMsMkRBRHFCLHFCQU1yQixFQU5xQixDQUhTO0FBQUEsTUFHekJDLElBSHlCLGFBR3pCQSxJQUh5Qjs7QUFXaEMsTUFBTUMsT0FBTyxHQUFHRCxJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRUUsSUFBdEIsQ0FYZ0MsQ0FZaEM7O0FBQ0EsU0FDRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxjQUFRLEVBQUUsT0FETDtBQUVMQyxXQUFLLEVBQUUsTUFGRjtBQUdMQyxZQUFNLEVBQUUsR0FISDtBQUlMQyxTQUFHLEVBQUUsQ0FKQTtBQUtMQyxxQkFBZSxFQUFFWixLQUFLLENBQUNhLHNCQUxsQjtBQU1MQyxnQkFBVSxFQUFFZCxLQUFLLENBQUNlLE9BQU4sQ0FBYyxDQUFkLENBTlA7QUFPTEMsbUJBQWEsRUFBRWhCLEtBQUssQ0FBQ2UsT0FBTixDQUFjLENBQWQsQ0FQVjtBQVFMRSxZQUFNLEVBQUU7QUFSSCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FXRSxNQUFDLG9EQUFEO0FBQVcsU0FBSyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEMsZ0JBQVUsRUFBRSxRQUZQO0FBR0xDLFlBQU0sRUFBRSxFQUhIO0FBSUxYLFdBQUssRUFBRTtBQUpGLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FLE1BQUMsOENBQUQ7QUFDRSxTQUFLLEVBQUU7QUFDTCxlQUFPLE1BREY7QUFFTFksZ0JBQVUsRUFBRXJCLEtBQUssQ0FBQ2UsT0FBTixDQUFjLENBQWQsQ0FGUDtBQUdMTyxpQkFBVyxFQUFFdEIsS0FBSyxDQUFDZSxPQUFOLENBQWMsQ0FBZCxDQUhSO0FBSUxLLFlBQU0sRUFBRTtBQUpILEtBRFQ7QUFPRSxXQUFPLEVBQUUsbUJBQU07QUFDYnRCLFlBQU0sQ0FBQ3lCLElBQVAsQ0FBWSxHQUFaO0FBQ0QsS0FUSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFrQkU7QUFDRSxTQUFLLEVBQUU7QUFDTCxlQUFPLE1BREY7QUFFTEYsZ0JBQVUsRUFBRXJCLEtBQUssQ0FBQ2UsT0FBTixDQUFjLENBQWQsQ0FGUDtBQUdMUyxjQUFRLEVBQUUsUUFITDtBQUlMZixXQUFLLEVBQUUsTUFKRjtBQUtMZ0IsYUFBTyxFQUFFLENBTEo7QUFNTEMsWUFBTSxFQUFFLENBTkg7QUFPTEMsV0FBSyxFQUFFM0IsS0FBSyxDQUFDNEIsT0FQUjtBQVFMQyxZQUFNLEVBQUUsU0FSSDtBQVNMQyxjQUFRLEVBQUUsU0FUTDtBQVVMQyxnQkFBVSxFQUFFO0FBVlAsS0FEVDtBQWFFLFdBQU8sRUFBRSxtQkFBTTtBQUNiakMsWUFBTSxDQUFDeUIsSUFBUCxDQUFZLEdBQVo7QUFDRCxLQWZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FnQkd2QixLQUFLLENBQUNnQyxLQWhCVCxDQWxCRixFQW9DRSxNQUFDLG1EQUFEO0FBQ0UsU0FBSyxrQ0FDQWhDLEtBQUssQ0FBQ2lDLEdBQU4sQ0FBVUMsVUFEVjtBQUVILGVBQU87QUFGSixNQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQ0YsRUEwQ0UsTUFBQywrQ0FBRDtBQUNFLFNBQUssa0NBQ0FsQyxLQUFLLENBQUNpQyxHQUFOLENBQVVDLFVBRFY7QUFFSCxlQUFPO0FBRkosTUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUNGLEVBZ0RFLE1BQUMsZ0RBQUQ7QUFDRSxTQUFLLGtDQUNBbEMsS0FBSyxDQUFDaUMsR0FBTixDQUFVQyxVQURWO0FBRUgsZUFBTztBQUZKLE1BRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhERixFQXNERSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0REYsQ0FERixDQVhGLENBREY7QUF3RUQ7O0dBckZ1QnJDLE87VUFDUEUscUQsRUFFQUksd0Q7OztLQUhPTixPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NZW51QXBwL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYXRlZ29yaWVzRHJvcGRvd25NZW51IGFzIFVzZXJzfSBmcm9tICcuLi9Vc2VyL0Ryb3Bkb3duVXNlcic7XG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtJY29uIGFzIENhcnRJY29ufSBmcm9tICcuLi9DYXJ0L2ljb24nO1xuaW1wb3J0IHtJY29uIGFzIFdpc2hsaXN0SWNvbn0gZnJvbSAnLi4vV2lzaGxpc3QvaWNvbic7XG5pbXBvcnQge0ljb24gYXMgT3JkZXJJY29ufSBmcm9tICcuLi9PcmRlci9pY29uJztcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7TG9nb30gZnJvbSAnLi4vc3JjL2xvZ28nO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IHt1c2VRdWVyeSwgZ3FsfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U2VsbGVyQ29udGV4dH0gZnJvbSAnLi4vc3JjL1NlbGxlclByb3ZpZGVyJztcbmltcG9ydCBSZWFjdEdBIGZyb20gJ3JlYWN0LWdhJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVBcHAoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoU2VsbGVyQ29udGV4dCk7XG4gIGNvbnN0IHtkYXRhfSA9IHVzZVF1ZXJ5KFxuICAgIGdxbGBcbiAgICAgIHF1ZXJ5IHtcbiAgICAgICAgdXNlciBAY2xpZW50XG4gICAgICB9XG4gICAgYCxcbiAgICB7fSxcbiAgKTtcbiAgY29uc3QgaXNMb2dpbiA9IGRhdGE/LnVzZXI7XG4gIC8vIEFOSU1BVElPTlxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBzdHlsZT17e1xuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgekluZGV4OiAxMDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wcm9kdWN0QmFja2dyb3VuZENvbG9yLFxuICAgICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KScsXG4gICAgICB9fT5cbiAgICAgIDxDb250YWluZXIgZmx1aWQ+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICBoZWlnaHQ6IDQwLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICA8TG9nb1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aDFcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMC45cmVtJyxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICBjb2xvcjogdGhlbWUucHJpbWFyeSxcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgIHdvcmRXcmFwOiAnaW5pdGlhbCcsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHt0aGVtZS5zdG9yZX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxXaXNobGlzdEljb25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnRoZW1lLmNzcy5pY29uQm9yZGVyLFxuICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FydEljb25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnRoZW1lLmNzcy5pY29uQm9yZGVyLFxuICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8T3JkZXJJY29uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi50aGVtZS5jc3MuaWNvbkJvcmRlcixcbiAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFVzZXJzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MenuApp/index.js\n");

/***/ })

})