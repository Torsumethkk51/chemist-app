"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/lessons/page",{

/***/ "(app-pages-browser)/./app/pages/lessons/page.js":
/*!***********************************!*\
  !*** ./app/pages/lessons/page.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_AppHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/AppHeader */ \"(app-pages-browser)/./app/components/AppHeader.js\");\n/* harmony import */ var _app_components_VideoBg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/VideoBg */ \"(app-pages-browser)/./app/components/VideoBg.js\");\n/* harmony import */ var _app_data_lessons_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/data/lessons-data */ \"(app-pages-browser)/./app/data/lessons-data.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_lessonItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/lessonItem */ \"(app-pages-browser)/./app/pages/lessons/components/lessonItem.js\");\n/* harmony import */ var _components_lessonDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/lessonDetail */ \"(app-pages-browser)/./app/pages/lessons/components/lessonDetail.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [latestScroll, setLatestScroll] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [lessonDetailElement, setLessonDetailElement] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollY = window.scrollY;\n            setLatestScroll(scrollY);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const openDetail = ()=>{\n        setLessonDetailElement(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_lessonDetail__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            closeDetail: closeDetail\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Sumathkk\\\\OneDrive\\\\Desktop\\\\newChemist\\\\app\\\\pages\\\\lessons\\\\page.js\",\n            lineNumber: 25,\n            columnNumber: 32\n        }, this));\n    };\n    const lessonElements = _app_data_lessons_data__WEBPACK_IMPORTED_MODULE_3__.lessons.map((lesson)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_lessonItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            lesson: lesson,\n            openDetail: openDetail\n        }, lesson.id, false, {\n            fileName: \"C:\\\\Users\\\\Sumathkk\\\\OneDrive\\\\Desktop\\\\newChemist\\\\app\\\\pages\\\\lessons\\\\page.js\",\n            lineNumber: 29,\n            columnNumber: 16\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pb-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_AppHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                latestScroll: latestScroll\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sumathkk\\\\OneDrive\\\\Desktop\\\\newChemist\\\\app\\\\pages\\\\lessons\\\\page.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_VideoBg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                bgUrl: \"/bgVideos/lessonsBg.mp4\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sumathkk\\\\OneDrive\\\\Desktop\\\\newChemist\\\\app\\\\pages\\\\lessons\\\\page.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center pt-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-5xl font-medium\",\n                        children: \"รายการเนื้อหา\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sumathkk\\\\OneDrive\\\\Desktop\\\\newChemist\\\\app\\\\pages\\\\lessons\\\\page.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"ป้อนคำเพื่อค้นหา\",\n                        className: \"w-[400px] px-4 py-2 mt-4 text-xl bg-gray-800 border-white rounded-lg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sumathkk\\\\OneDrive\\\\Desktop\\\\newChemist\\\\app\\\\pages\\\\lessons\\\\page.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-8 mt-20\",\n                        children: lessonElements\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sumathkk\\\\OneDrive\\\\Desktop\\\\newChemist\\\\app\\\\pages\\\\lessons\\\\page.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sumathkk\\\\OneDrive\\\\Desktop\\\\newChemist\\\\app\\\\pages\\\\lessons\\\\page.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            lessonDetailElement\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sumathkk\\\\OneDrive\\\\Desktop\\\\newChemist\\\\app\\\\pages\\\\lessons\\\\page.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"Tb2OrWeKdDbcCgsZ0v8/oRSu6Ew=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9sZXNzb25zL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDSjtBQUNHO0FBQ047QUFDSztBQUNJO0FBRXRDLFNBQVNPOztJQUNwQixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNNLHFCQUFxQkMsdUJBQXVCLEdBQUdQLCtDQUFRQSxDQUFDO0lBRS9ERCxnREFBU0EsQ0FBQztRQUNOLE1BQU1TLGVBQWU7WUFDakIsTUFBTUMsVUFBVUMsT0FBT0QsT0FBTztZQUM5QkosZ0JBQWdCSTtRQUNwQjtRQUNBQyxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUNsQyxPQUFPO1lBQ0hFLE9BQU9FLG1CQUFtQixDQUFDLFVBQVVKO1FBQ3pDO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTUssYUFBYTtRQUNmTixxQ0FBdUIsOERBQUNMLGdFQUFZQTtZQUFDWSxhQUFhQTs7Ozs7O0lBQ3REO0lBRUEsTUFBTUMsaUJBQWlCakIsMkRBQU9BLENBQUNrQixHQUFHLENBQUMsQ0FBQ0M7UUFDaEMscUJBQU8sOERBQUNoQiw4REFBVUE7WUFBaUJnQixRQUFRQTtZQUFRSixZQUFZQTtXQUF2Q0ksT0FBT0MsRUFBRTs7Ozs7SUFDckM7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUN4QixpRUFBU0E7Z0JBQUNRLGNBQWNBOzs7Ozs7MEJBQ3pCLDhEQUFDUCwrREFBT0E7Z0JBQUN3QixPQUFPOzs7Ozs7MEJBQ2hCLDhEQUFDRjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNFO3dCQUFHRixXQUFVO2tDQUF1Qjs7Ozs7O2tDQUNyQyw4REFBQ0c7d0JBQU1DLE1BQUs7d0JBQU9DLGFBQVk7d0JBQW1CTCxXQUFVOzs7Ozs7a0NBQzVELDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDVkw7Ozs7Ozs7Ozs7OztZQUdSVDs7Ozs7OztBQUdiO0dBckN3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2VzL2xlc3NvbnMvcGFnZS5qcz83MWI3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgQXBwSGVhZGVyIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL0FwcEhlYWRlclwiO1xyXG5pbXBvcnQgVmlkZW9CZyBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9WaWRlb0JnXCI7XHJcbmltcG9ydCB7IGxlc3NvbnMgfSBmcm9tIFwiQC9hcHAvZGF0YS9sZXNzb25zLWRhdGFcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGVzc29uSXRlbSBmcm9tIFwiLi9jb21wb25lbnRzL2xlc3Nvbkl0ZW1cIjtcclxuaW1wb3J0IExlc3NvbkRldGFpbCBmcm9tIFwiLi9jb21wb25lbnRzL2xlc3NvbkRldGFpbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcclxuICAgIGNvbnN0IFtsYXRlc3RTY3JvbGwsIHNldExhdGVzdFNjcm9sbF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2xlc3NvbkRldGFpbEVsZW1lbnQsIHNldExlc3NvbkRldGFpbEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICAgICAgICBzZXRMYXRlc3RTY3JvbGwoc2Nyb2xsWSlcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IG9wZW5EZXRhaWwgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TGVzc29uRGV0YWlsRWxlbWVudCg8TGVzc29uRGV0YWlsIGNsb3NlRGV0YWlsPXtjbG9zZURldGFpbH0vPilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsZXNzb25FbGVtZW50cyA9IGxlc3NvbnMubWFwKChsZXNzb24pID0+IHtcclxuICAgICAgICByZXR1cm4gPExlc3Nvbkl0ZW0ga2V5PXtsZXNzb24uaWR9IGxlc3Nvbj17bGVzc29ufSBvcGVuRGV0YWlsPXtvcGVuRGV0YWlsfS8+XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0xMlwiPlxyXG4gICAgICAgICAgICA8QXBwSGVhZGVyIGxhdGVzdFNjcm9sbD17bGF0ZXN0U2Nyb2xsfS8+XHJcbiAgICAgICAgICAgIDxWaWRlb0JnIGJnVXJsPXtcIi9iZ1ZpZGVvcy9sZXNzb25zQmcubXA0XCJ9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHQtMTZcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LW1lZGl1bVwiPuC4o+C4suC4ouC4geC4suC4o+C5gOC4meC4t+C5ieC4reC4q+C4sjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuC4m+C5ieC4reC4meC4hOC4s+C5gOC4nuC4t+C5iOC4reC4hOC5ieC4meC4q+C4slwiIGNsYXNzTmFtZT1cInctWzQwMHB4XSBweC00IHB5LTIgbXQtNCB0ZXh0LXhsIGJnLWdyYXktODAwIGJvcmRlci13aGl0ZSByb3VuZGVkLWxnXCIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTggbXQtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bGVzc29uRWxlbWVudHN9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtsZXNzb25EZXRhaWxFbGVtZW50fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkFwcEhlYWRlciIsIlZpZGVvQmciLCJsZXNzb25zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMZXNzb25JdGVtIiwiTGVzc29uRGV0YWlsIiwiUGFnZSIsImxhdGVzdFNjcm9sbCIsInNldExhdGVzdFNjcm9sbCIsImxlc3NvbkRldGFpbEVsZW1lbnQiLCJzZXRMZXNzb25EZXRhaWxFbGVtZW50IiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsWSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib3BlbkRldGFpbCIsImNsb3NlRGV0YWlsIiwibGVzc29uRWxlbWVudHMiLCJtYXAiLCJsZXNzb24iLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsImJnVXJsIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/lessons/page.js\n"));

/***/ })

});