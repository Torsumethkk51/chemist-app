"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/about/page",{

/***/ "(app-pages-browser)/./app/pages/about/components/Technology.js":
/*!**************************************************!*\
  !*** ./app/pages/about/components/Technology.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Technology; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _TechonologyItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TechonologyItem */ \"(app-pages-browser)/./app/pages/about/components/TechonologyItem.js\");\n/* harmony import */ var _app_data_tech_thumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/data/tech-thumbnail */ \"(app-pages-browser)/./app/data/tech-thumbnail.js\");\n\n\n\nfunction Technology() {\n    const technologyElements = _app_data_tech_thumbnail__WEBPACK_IMPORTED_MODULE_2__.techThumbnails.map((thumbnail, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechonologyItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            thumbnailImg: thumbnail\n        }, index, false, {\n            fileName: \"C:\\\\Users\\\\Sumathkk\\\\OneDrive\\\\Desktop\\\\newChemist\\\\app\\\\pages\\\\about\\\\components\\\\Technology.js\",\n            lineNumber: 7,\n            columnNumber: 16\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[90%] h-[100vh] bg-black/40 mb-5 rounded-lg space-y-8 px-8 py-8\",\n            id: \"technology\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-medium pt-6\",\n                    children: \"เทคโนโลยีที่ใช้\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sumathkk\\\\OneDrive\\\\Desktop\\\\newChemist\\\\app\\\\pages\\\\about\\\\components\\\\Technology.js\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center space-x-6 pt-8\",\n                    children: technologyElements\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sumathkk\\\\OneDrive\\\\Desktop\\\\newChemist\\\\app\\\\pages\\\\about\\\\components\\\\Technology.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Sumathkk\\\\OneDrive\\\\Desktop\\\\newChemist\\\\app\\\\pages\\\\about\\\\components\\\\Technology.js\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sumathkk\\\\OneDrive\\\\Desktop\\\\newChemist\\\\app\\\\pages\\\\about\\\\components\\\\Technology.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_c = Technology;\nvar _c;\n$RefreshReg$(_c, \"Technology\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9hYm91dC9jb21wb25lbnRzL1RlY2hub2xvZ3kuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0M7QUFDWTtBQUU1QyxTQUFTRTtJQUVwQixNQUFNQyxxQkFBcUJGLG9FQUFjQSxDQUFDRyxHQUFHLENBQUMsQ0FBQ0MsV0FBV0M7UUFDdEQscUJBQU8sOERBQUNOLHdEQUFjQTtZQUFhTyxjQUFjRjtXQUFyQkM7Ozs7O0lBQ2hDO0lBRUEscUJBRUksOERBQUNFO2tCQUNHLDRFQUFDQTtZQUFJQyxXQUFVO1lBQW9FQyxJQUFHOzs4QkFDbEYsOERBQUNDO29CQUFHRixXQUFVOzhCQUE0Qjs7Ozs7OzhCQUMxQyw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1ZOOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQjtLQWpCd0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlcy9hYm91dC9jb21wb25lbnRzL1RlY2hub2xvZ3kuanM/NTUzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVjaG5vbG9neUl0ZW0gZnJvbSBcIi4vVGVjaG9ub2xvZ3lJdGVtXCI7XHJcbmltcG9ydCB7IHRlY2hUaHVtYm5haWxzIH0gZnJvbSBcIkAvYXBwL2RhdGEvdGVjaC10aHVtYm5haWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlY2hub2xvZ3koKSB7XHJcblxyXG4gICAgY29uc3QgdGVjaG5vbG9neUVsZW1lbnRzID0gdGVjaFRodW1ibmFpbHMubWFwKCh0aHVtYm5haWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxUZWNobm9sb2d5SXRlbSBrZXk9e2luZGV4fSB0aHVtYm5haWxJbWc9e3RodW1ibmFpbH0gLz5cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs5MCVdIGgtWzEwMHZoXSBiZy1ibGFjay80MCBtYi01IHJvdW5kZWQtbGcgc3BhY2UteS04IHB4LTggcHktOFwiIGlkPVwidGVjaG5vbG9neVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtbWVkaXVtIHB0LTZcIj7guYDguJfguITguYLguJnguYLguKXguKLguLXguJfguLXguYjguYPguIrguYk8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNiBwdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RlY2hub2xvZ3lFbGVtZW50c31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJUZWNobm9sb2d5SXRlbSIsInRlY2hUaHVtYm5haWxzIiwiVGVjaG5vbG9neSIsInRlY2hub2xvZ3lFbGVtZW50cyIsIm1hcCIsInRodW1ibmFpbCIsImluZGV4IiwidGh1bWJuYWlsSW1nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/about/components/Technology.js\n"));

/***/ })

});