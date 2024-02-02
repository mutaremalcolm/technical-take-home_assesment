"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_IdeaCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/IdeaCard */ \"(app-pages-browser)/./components/IdeaCard.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Navbar */ \"(app-pages-browser)/./components/Navbar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [ideas, setIdeas] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>{\n        // Load ideas from local storage or use default values\n        const storedIdeas = localStorage.getItem(\"ideas\");\n        return storedIdeas ? JSON.parse(storedIdeas) : [\n            {\n                title: \"Idea 1\",\n                description: \"Description 1\",\n                createdTime: \"time1\",\n                updatedTime: \"time1\",\n                content: \"Type your content here\"\n            },\n            {\n                title: \"Idea 2\",\n                description: \"Description 2\",\n                createdTime: \"time2\",\n                updatedTime: \"time2\",\n                content: \"Type your content here\"\n            },\n            {\n                title: \"Idea 3\",\n                description: \"Description 3\",\n                createdTime: \"time3\",\n                updatedTime: \"time3\",\n                content: \"Type your content here\"\n            }\n        ];\n    });\n    const handleDelete = (index)=>{\n        const newIdeas = [\n            ...ideas\n        ];\n        newIdeas.splice(index, 1);\n        setIdeas(newIdeas);\n    };\n    const handleAddNewCard = ()=>{\n        // Create a new card \n        const newCard = {\n            title: \"New Idea\",\n            description: \"New Description\",\n            createdTime: \"new time\",\n            updatedTime: \"new time\",\n            content: \"Type your ideas here\"\n        };\n        // Add the new card to the existing ideas\n        setIdeas([\n            ...ideas,\n            newCard\n        ]);\n    };\n    const handleSave = (updatedIdea, index)=>{\n        const newIdeas = [\n            ...ideas\n        ];\n        newIdeas[index] = updatedIdea;\n        setIdeas(newIdeas);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Save ideas to local storage whenever it changes\n        localStorage.setItem(\"ideas\", JSON.stringify(ideas));\n    }, [\n        ideas\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onAddNewCard: handleAddNewCard\n            }, void 0, false, {\n                fileName: \"/Users/malcom/technical-take-home_assesment/app/page.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-around\",\n                children: ideas.map((idea, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_IdeaCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        idea: idea,\n                        onDelete: ()=>handleDelete(index),\n                        onSave: (updatedIdea)=>handleSave(updatedIdea, index)\n                    }, index, false, {\n                        fileName: \"/Users/malcom/technical-take-home_assesment/app/page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/malcom/technical-take-home_assesment/app/page.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"dOeAlPXvVcH10n0Y5OyBvpGvtpE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUU2QztBQUNNO0FBQ047QUFVOUIsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztRQUNqQyxzREFBc0Q7UUFDdEQsTUFBTU0sY0FBY0MsYUFBYUMsT0FBTyxDQUFDO1FBQ3pDLE9BQU9GLGNBQWNHLEtBQUtDLEtBQUssQ0FBQ0osZUFBYztZQUM5QztnQkFBRUssT0FBTztnQkFBVUMsYUFBYTtnQkFBaUJDLGFBQWE7Z0JBQVNDLGFBQWE7Z0JBQVNDLFNBQVE7WUFBeUI7WUFDOUg7Z0JBQUVKLE9BQU87Z0JBQVVDLGFBQWE7Z0JBQWlCQyxhQUFhO2dCQUFTQyxhQUFhO2dCQUFTQyxTQUFRO1lBQXlCO1lBQzlIO2dCQUFFSixPQUFPO2dCQUFVQyxhQUFhO2dCQUFpQkMsYUFBYTtnQkFBU0MsYUFBYTtnQkFBU0MsU0FBUTtZQUF5QjtTQUM3SDtJQUNMO0lBRUUsTUFBTUMsZUFBZSxDQUFDQztRQUNwQixNQUFNQyxXQUFXO2VBQUlkO1NBQU07UUFDM0JjLFNBQVNDLE1BQU0sQ0FBQ0YsT0FBTztRQUN2QlosU0FBU2E7SUFDWDtJQUVBLE1BQU1FLG1CQUFtQjtRQUN2QixxQkFBcUI7UUFDckIsTUFBTUMsVUFBVTtZQUNkVixPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsYUFBYTtZQUNiQyxhQUFhO1lBQ2JDLFNBQVM7UUFDWDtRQUVBLHlDQUF5QztRQUN6Q1YsU0FBUztlQUFJRDtZQUFPaUI7U0FBUTtJQUM5QjtJQUVBLE1BQU1DLGFBQWEsQ0FBQ0MsYUFBbUJOO1FBQ3JDLE1BQU1DLFdBQVc7ZUFBSWQ7U0FBTTtRQUMzQmMsUUFBUSxDQUFDRCxNQUFNLEdBQUdNO1FBQ2xCbEIsU0FBU2E7SUFDWDtJQUVBakIsZ0RBQVNBLENBQUM7UUFDUixrREFBa0Q7UUFDbERNLGFBQWFpQixPQUFPLENBQUMsU0FBU2YsS0FBS2dCLFNBQVMsQ0FBQ3JCO0lBQy9DLEdBQUc7UUFBQ0E7S0FBTTtJQUdWLHFCQUNFOzswQkFDRSw4REFBQ0YsMERBQVVBO2dCQUFDd0IsY0FBY047Ozs7OzswQkFDMUIsOERBQUNPO2dCQUFJQyxXQUFVOzBCQUNaeEIsTUFBTXlCLEdBQUcsQ0FBQyxDQUFDQyxNQUFZYixzQkFDdEIsOERBQUNuQiw0REFBUUE7d0JBQWFnQyxNQUFNQTt3QkFBTUMsVUFBVSxJQUFNZixhQUFhQzt3QkFBUWUsUUFBUSxDQUFDVCxjQUFzQkQsV0FBV0MsYUFBYU47dUJBQS9HQTs7Ozs7Ozs7Ozs7O0FBS3pCO0dBckR3QmQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IElkZWFDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9JZGVhQ2FyZCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJ0AvY29tcG9uZW50cy9OYXZiYXInO1xuXG5pbnRlcmZhY2UgSWRlYSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNyZWF0ZWRUaW1lOiBzdHJpbmc7XG4gIHVwZGF0ZWRUaW1lOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2lkZWFzLCBzZXRJZGVhc10gPSB1c2VTdGF0ZSgoKT0+IHtcbiAgICAvLyBMb2FkIGlkZWFzIGZyb20gbG9jYWwgc3RvcmFnZSBvciB1c2UgZGVmYXVsdCB2YWx1ZXNcbiAgICBjb25zdCBzdG9yZWRJZGVhcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZGVhcycpO1xuICAgIHJldHVybiBzdG9yZWRJZGVhcyA/IEpTT04ucGFyc2Uoc3RvcmVkSWRlYXMpIDpbXG4gICAgeyB0aXRsZTogJ0lkZWEgMScsIGRlc2NyaXB0aW9uOiAnRGVzY3JpcHRpb24gMScsIGNyZWF0ZWRUaW1lOiAndGltZTEnLCB1cGRhdGVkVGltZTogJ3RpbWUxJywgY29udGVudDonVHlwZSB5b3VyIGNvbnRlbnQgaGVyZScgfSxcbiAgICB7IHRpdGxlOiAnSWRlYSAyJywgZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbiAyJywgY3JlYXRlZFRpbWU6ICd0aW1lMicsIHVwZGF0ZWRUaW1lOiAndGltZTInLCBjb250ZW50OidUeXBlIHlvdXIgY29udGVudCBoZXJlJyB9LFxuICAgIHsgdGl0bGU6ICdJZGVhIDMnLCBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIDMnLCBjcmVhdGVkVGltZTogJ3RpbWUzJywgdXBkYXRlZFRpbWU6ICd0aW1lMycsIGNvbnRlbnQ6J1R5cGUgeW91ciBjb250ZW50IGhlcmUnIH0sXG4gICAgXTtcbn0pO1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgbmV3SWRlYXMgPSBbLi4uaWRlYXNdO1xuICAgIG5ld0lkZWFzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0SWRlYXMobmV3SWRlYXMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFkZE5ld0NhcmQgPSAoKSA9PiB7XG4gICAgLy8gQ3JlYXRlIGEgbmV3IGNhcmQgXG4gICAgY29uc3QgbmV3Q2FyZCA9IHtcbiAgICAgIHRpdGxlOiAnTmV3IElkZWEnLFxuICAgICAgZGVzY3JpcHRpb246ICdOZXcgRGVzY3JpcHRpb24nLFxuICAgICAgY3JlYXRlZFRpbWU6ICduZXcgdGltZScsXG4gICAgICB1cGRhdGVkVGltZTogJ25ldyB0aW1lJyxcbiAgICAgIGNvbnRlbnQ6IFwiVHlwZSB5b3VyIGlkZWFzIGhlcmVcIlxuICAgIH07XG5cbiAgICAvLyBBZGQgdGhlIG5ldyBjYXJkIHRvIHRoZSBleGlzdGluZyBpZGVhc1xuICAgIHNldElkZWFzKFsuLi5pZGVhcywgbmV3Q2FyZF0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAodXBkYXRlZElkZWE6IElkZWEsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBuZXdJZGVhcyA9IFsuLi5pZGVhc107XG4gICAgbmV3SWRlYXNbaW5kZXhdID0gdXBkYXRlZElkZWE7XG4gICAgc2V0SWRlYXMobmV3SWRlYXMpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2F2ZSBpZGVhcyB0byBsb2NhbCBzdG9yYWdlIHdoZW5ldmVyIGl0IGNoYW5nZXNcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRlYXMnLCBKU09OLnN0cmluZ2lmeShpZGVhcykpO1xuICB9LCBbaWRlYXNdKTtcblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZpZ2F0aW9uIG9uQWRkTmV3Q2FyZD17aGFuZGxlQWRkTmV3Q2FyZH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1hcm91bmRcIj5cbiAgICAgICAge2lkZWFzLm1hcCgoaWRlYTogSWRlYSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgIDxJZGVhQ2FyZCBrZXk9e2luZGV4fSBpZGVhPXtpZGVhfSBvbkRlbGV0ZT17KCkgPT4gaGFuZGxlRGVsZXRlKGluZGV4KX0gb25TYXZlPXsodXBkYXRlZElkZWE6IElkZWEpID0+IGhhbmRsZVNhdmUodXBkYXRlZElkZWEsIGluZGV4KX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuIl0sIm5hbWVzIjpbIklkZWFDYXJkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdmlnYXRpb24iLCJIb21lIiwiaWRlYXMiLCJzZXRJZGVhcyIsInN0b3JlZElkZWFzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjcmVhdGVkVGltZSIsInVwZGF0ZWRUaW1lIiwiY29udGVudCIsImhhbmRsZURlbGV0ZSIsImluZGV4IiwibmV3SWRlYXMiLCJzcGxpY2UiLCJoYW5kbGVBZGROZXdDYXJkIiwibmV3Q2FyZCIsImhhbmRsZVNhdmUiLCJ1cGRhdGVkSWRlYSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJvbkFkZE5ld0NhcmQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpZGVhIiwib25EZWxldGUiLCJvblNhdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});