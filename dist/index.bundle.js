/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/earth_logo.png */ \"./src/assets/icons/earth_logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* SOME GENRAL STYLES */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #00b3fa;\r\n}\r\n\r\nh5 {\r\n  text-align: center;\r\n  padding: 1rem;\r\n}\r\n\r\nimg {\r\n  border: 1px solid #312f2f;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\ninput[type='text'],\r\ninput[type='date'] {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin-bottom: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 3px;\r\n}\r\n\r\nbutton {\r\n  width: 100%;\r\n  padding: 10px;\r\n  background-color: #4caf50;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #45a049;\r\n}\r\n\r\nfooter {\r\n  background-color: aliceblue;\r\n  text-align: center;\r\n}\r\n\r\n/* STYLE FOR NAV BAR */\r\n\r\n.navbar-nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 2.5rem;\r\n}\r\n\r\n.navbar-brand::before {\r\n  content: '';\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: green;\r\n  border: 3px solid crimson;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* BODY STYLE */\r\n\r\n.card-body {\r\n  padding: 1px !important;\r\n}\r\n\r\n.countries {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\r\n  padding: 3rem;\r\n  margin: 2rem;\r\n}\r\n\r\n.country {\r\n  margin: 0.6rem;\r\n  border-radius: 5px;\r\n}\r\n\r\n.like {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.btn {\r\n  width: 100%;\r\n  margin-top: 0.125rem;\r\n}\r\n\r\n.btn-like {\r\n  background-color: white;\r\n  text-align: end;\r\n}\r\n\r\n.btn-like i {\r\n  color: black;\r\n  font-size: 30px;\r\n}\r\n\r\n.btn-like:hover i {\r\n  color: green;\r\n}\r\n\r\n.btn-like.liked i {\r\n  color: red;\r\n}\r\n\r\n.btn-like:hover {\r\n  background-color: white;\r\n}\r\n\r\n.btn-like i.filled {\r\n  color: red;\r\n}\r\n\r\n.like-counter {\r\n  text-align: start;\r\n}\r\n\r\n/* style fro reservation */\r\n\r\n.popup {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 9999;\r\n  overflow: scroll;\r\n}\r\n\r\n.form-container {\r\n  position: fixed;\r\n  background-color: #fff;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n  width: 90vh;\r\n  overflow-y: scroll;\r\n  max-height: 90vh;\r\n  z-index: 9999;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.close-button {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 35px;\r\n  cursor: pointer;\r\n  float: right;\r\n  color: black;\r\n  position: relative;\r\n  max-width: 1rem;\r\n  align-self: flex-end;\r\n  margin-top: -0.5rem;\r\n}\r\n\r\n.close-button:hover {\r\n  background-color: initial;\r\n  color: initial;\r\n}\r\n\r\n/* HERE THE STYLE FOR comment POPUP */\r\n\r\n.popup-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  align-items: center;\r\n  background-color: rgb(232, 224, 224);\r\n  padding: 12px;\r\n  position: fixed;\r\n  width: 50vw;\r\n  height: 45vw;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 9999;\r\n  border-radius: 5px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.over-lay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(3, 0, 0, 0.6);\r\n  z-index: 9999;\r\n}\r\n\r\n.countery-datail {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  text-align: start;\r\n  justify-items: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.country-capital {\r\n  padding-left: 12px;\r\n}\r\n\r\n.country-continent {\r\n  padding-left: 12px;\r\n}\r\n\r\n.country-flag {\r\n  width: 300px;\r\n  height: 200px;\r\n  box-shadow: 2px 8px 4px rgba(0, 0, 0, 0.2);\r\n  background-color: aliceblue;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup-icon {\r\n  position: fixed;\r\n  top: 10px;\r\n  right: 10px;\r\n  z-index: 9999;\r\n}\r\n\r\n.country-name {\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\n.comments-form {\r\n  display: flex;\r\n  justify-self: center;\r\n  flex-direction: column;\r\n  gap: 3px;\r\n  max-width: 100%;\r\n  align-self: center;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.comments-list {\r\n  gap: 2px;\r\n}\r\n\r\n.comment-text {\r\n  max-width: 350px;\r\n  word-wrap: break-word;\r\n  text-align: start;\r\n  list-style: none;\r\n}\r\n\r\niframe {\r\n  width: 100%;\r\n  height: 40%;\r\n}\r\n\r\n/* style for mobile screen */\r\n\r\n@media screen and (max-width: 768px) {\r\n  .popup-container {\r\n    width: 90vw;\r\n    height: 90vh;\r\n  }\r\n\r\n  .form-container {\r\n    width: 45vh;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://module-capstone--2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://module-capstone--2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://module-capstone--2/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://module-capstone--2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://module-capstone--2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://module-capstone--2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://module-capstone--2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://module-capstone--2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://module-capstone--2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://module-capstone--2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://module-capstone--2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_countries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/countries.js */ \"./src/modules/countries.js\");\n/* harmony import */ var _modules_likeitems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/likeitems.js */ \"./src/modules/likeitems.js\");\n/* harmony import */ var _modules_likeitems_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_likeitems_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_reservation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/reservation.js */ \"./src/modules/reservation.js\");\n/* harmony import */ var _modules_reservation_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_reservation_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_commentpop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/commentpop.js */ \"./src/modules/commentpop.js\");\n/* harmony import */ var _modules_commentpop_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_commentpop_js__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://module-capstone--2/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentpop.js":
/*!***********************************!*\
  !*** ./src/modules/commentpop.js ***!
  \***********************************/
/***/ (() => {

eval("const openPopup = async (countryDetails) => {\r\n  // Create the popup container\r\n  const popContainer = document.createElement('div');\r\n  popContainer.classList.add('popup-container', 'card');\r\n\r\n  const counteryDetail = document.createElement('div');\r\n  counteryDetail.classList.add('countery-datail');\r\n\r\n  const icon = document.createElement('i');\r\n  icon.classList.add('fas', 'fa-times', 'popup-icon');\r\n\r\n  const countryFlagEl = document.createElement('img');\r\n  countryFlagEl.classList.add('country-flag');\r\n  countryFlagEl.src = countryDetails.flags.png;\r\n\r\n  const countryNameEl = document.createElement('h1');\r\n  countryNameEl.classList.add('country-name');\r\n  countryNameEl.textContent = countryDetails.name.common;\r\n\r\n  const countryPopulationEl = document.createElement('div');\r\n  countryPopulationEl.classList.add(\r\n    'country-population',\r\n    'container',\r\n    'custom-container',\r\n    'shadow-lg',\r\n    'bg-gradient-success'\r\n  );\r\n  countryPopulationEl.textContent = `Population: ${countryDetails.population}`;\r\n\r\n  const countryCapitalEl = document.createElement('div');\r\n  countryCapitalEl.classList.add(\r\n    'country-capital',\r\n    'container',\r\n    'custom-container',\r\n    'shadow-lg',\r\n    'bg-gradient-success'\r\n  );\r\n  countryCapitalEl.textContent = `Capital: ${countryDetails.capital}`;\r\n\r\n  const countryAreaEl = document.createElement('div');\r\n  countryAreaEl.classList.add(\r\n    'country-area',\r\n    'container',\r\n    'custom-container',\r\n    'shadow-lg',\r\n    'bg-gradient-success'\r\n  );\r\n  countryAreaEl.textContent = `Area: ${countryDetails.area} km²`;\r\n\r\n  const countryContinentEl = document.createElement('div');\r\n  countryContinentEl.classList.add(\r\n    'country-continent',\r\n    'container',\r\n    'custom-container',\r\n    'shadow-lg',\r\n    'bg-gradient-success'\r\n  );\r\n  countryContinentEl.textContent = `Continent: ${countryDetails.region}`;\r\n\r\n  const commentsContainer = document.createElement('div');\r\n  commentsContainer.classList.add('comments-container');\r\n\r\n  const commentsCounter = document.createElement('div');\r\n  commentsCounter.classList.add('comments-counter');\r\n\r\n  const commentsTitle = document.createElement('h3');\r\n  commentsTitle.classList.add('comment-title');\r\n\r\n  const commentsCount = document.createElement('span');\r\n  commentsCount.classList.add('comments-count');\r\n\r\n  const commentsList = document.createElement('div');\r\n  commentsList.classList.add('comments-list');\r\n\r\n  const commentsForm = document.createElement('form');\r\n  commentsForm.classList.add('comments-form');\r\n\r\n  const nameInput = document.createElement('input');\r\n  nameInput.setAttribute('type', 'text');\r\n  nameInput.setAttribute('placeholder', 'Your Name');\r\n  nameInput.classList.add('name-input', 'form-control');\r\n\r\n  const commentInput = document.createElement('textarea');\r\n  commentInput.setAttribute('placeholder', 'Your Comment');\r\n  commentInput.classList.add('comment-input', 'form-control');\r\n\r\n  const submitButton = document.createElement('button');\r\n  submitButton.setAttribute('type', 'submit');\r\n  submitButton.classList.add('submit-button', 'btn', 'btn-primary');\r\n  submitButton.textContent = 'Submit';\r\n\r\n  commentsForm.appendChild(nameInput);\r\n  commentsForm.appendChild(commentInput);\r\n  commentsForm.appendChild(submitButton);\r\n\r\n  const overlay = document.createElement('div');\r\n  overlay.classList.add('over-lay');\r\n\r\n  document.body.appendChild(overlay);\r\n  popContainer.appendChild(icon);\r\n  popContainer.appendChild(countryFlagEl);\r\n  popContainer.appendChild(countryNameEl);\r\n  popContainer.appendChild(counteryDetail);\r\n  counteryDetail.appendChild(countryPopulationEl);\r\n  counteryDetail.appendChild(countryCapitalEl);\r\n  counteryDetail.appendChild(countryAreaEl);\r\n  counteryDetail.appendChild(countryContinentEl);\r\n  popContainer.appendChild(commentsContainer);\r\n  commentsContainer.appendChild(commentsCounter);\r\n  commentsContainer.appendChild(commentsList);\r\n  commentsCounter.appendChild(commentsTitle);\r\n  commentsCounter.appendChild(commentsCount);\r\n  commentsContainer.appendChild(commentsForm);\r\n\r\n  // Add event listener to close the popup when the icon is clicked\r\n  icon.addEventListener('click', () => {\r\n    popContainer.style.display = 'none';\r\n    overlay.style.display = 'none';\r\n  });\r\n\r\n  // Make displayfunction to display comment from api to screen\r\n  const displayComment = (comment) => {\r\n    const commentEl = document.createElement('div');\r\n    commentEl.classList.add('comment');\r\n\r\n    const commentText = document.createElement('li');\r\n    commentText.classList.add(\r\n      'comment-text',\r\n      'container',\r\n      'custom-container',\r\n      'shadow-sm'\r\n    );\r\n\r\n    let commentDate;\r\n    try {\r\n      // Try parsing the date string into a Date object\r\n      commentDate = new Date(comment.creation_date);\r\n    } catch (error) {\r\n      return error.message;\r\n    }\r\n\r\n    let commentDateString = '';\r\n    if (commentDate && !isNaN(commentDate)) {\r\n      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };\r\n      commentDateString = commentDate.toLocaleDateString(undefined, options);\r\n    }\r\n\r\n    const commentInfo = `${commentDateString}  ${\r\n      comment ? comment.username : ''\r\n    }: ${comment ? comment.comment : ''}`;\r\n    commentText.textContent = commentInfo;\r\n\r\n    commentEl.appendChild(commentText);\r\n    commentsList.appendChild(commentEl);\r\n\r\n    const commentCount = commentsList.querySelectorAll('.comment').length || 0;\r\n    if (commentCount === 0) {\r\n      commentsCount.textContent = 'Comment (0)';\r\n    }\r\n    commentsCount.textContent = `Comment (${commentCount})`;\r\n  };\r\n\r\n  // Fetch and display comments\r\n  try {\r\n    const response = await fetch(\r\n      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS/comments?item_id=${encodeURIComponent(\r\n        countryDetails.name.common\r\n      )}`\r\n    );\r\n    const comments = await response.json();\r\n    const commentCount = comments.length;\r\n    const commentText =\r\n      commentCount > 0 ? `Comment (${commentCount})` : 'Comment (0)';\r\n    commentsCount.textContent = commentText;\r\n    comments.forEach((comment) => {\r\n      displayComment(comment);\r\n    });\r\n  } catch (error) {\r\n    return error.message;\r\n  }\r\n\r\n  commentsForm.addEventListener('submit', async (event) => {\r\n    event.preventDefault();\r\n    const name = nameInput.value;\r\n    const comment = commentInput.value;\r\n\r\n    if (!name || !comment) {\r\n      return;\r\n    }\r\n\r\n    nameInput.value = '';\r\n    commentInput.value = '';\r\n\r\n    const currentDate = new Date().toLocaleDateString(); // Save current date in ISO format\r\n\r\n    try {\r\n      const response = await fetch(\r\n        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS/comments?item_id=${encodeURIComponent(\r\n          countryDetails.name.common\r\n        )}`,\r\n        {\r\n          method: 'POST',\r\n          headers: {\r\n            'Content-Type': 'application/json',\r\n          },\r\n          body: JSON.stringify({\r\n            item_id: countryDetails.name.common,\r\n            username: name,\r\n            comment,\r\n            date: currentDate,\r\n          }),\r\n        }\r\n      );\r\n      if (response.ok) {\r\n        const newComment = {\r\n          username: name,\r\n          comment,\r\n          date: currentDate,\r\n        };\r\n        displayComment(newComment);\r\n\r\n        // Fetch and display all comments again\r\n        const commentsResponse = await fetch(\r\n          `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS/comments?item_id=${encodeURIComponent(\r\n            countryDetails.name.common\r\n          )}`\r\n        );\r\n        const comments = await commentsResponse.json();\r\n        const commentCount = comments.length;\r\n        const commentText =\r\n          commentCount > 0 ? `Comment (${commentCount})` : 'Comment (0)';\r\n        commentsCount.textContent = commentText;\r\n\r\n        // Clear the existing comments\r\n        commentsList.innerHTML = '';\r\n\r\n        if (commentCount > 0) {\r\n          comments.forEach((comment) => {\r\n            displayComment(comment);\r\n          });\r\n        }\r\n      } else {\r\n        return null;\r\n      }\r\n    } catch (error) {\r\n      return error.message;\r\n    }\r\n  });\r\n\r\n  document.body.appendChild(popContainer);\r\n};\r\n\r\n// event listenner for comment button\r\n\r\ndocument.addEventListener('click', async (event) => {\r\n  if (event.target.classList.contains('btn-commentt')) {\r\n    const countryName = event.target.getAttribute('data-country');\r\n\r\n    try {\r\n      const response = await fetch(\r\n        `https://restcountries.com/v3.1/name/${countryName}`\r\n      );\r\n      const [countryDetails] = await response.json();\r\n      await openPopup(countryDetails);\r\n    } catch (error) {\r\n      return error.message;\r\n    }\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://module-capstone--2/./src/modules/commentpop.js?");

/***/ }),

/***/ "./src/modules/countries.js":
/*!**********************************!*\
  !*** ./src/modules/countries.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _likeitems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeitems.js */ \"./src/modules/likeitems.js\");\n/* harmony import */ var _likeitems_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_likeitems_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst getcountry = async () => {\r\n  try {\r\n    const response = await fetch('https://restcountries.com/v3.1/all');\r\n    const data = await response.json();\r\n    data.forEach((item) => {\r\n      postcountry(item);\r\n    });\r\n  } catch (error) {\r\n    return error.message;\r\n  }\r\n};\r\ngetcountry();\r\n\r\nconst postcountry = async (data) => {\r\n  const countries = document.querySelector('.countries');\r\n  const country = document.createElement('div');\r\n  country.className = 'country';\r\n  country.innerHTML = `\r\n    <div class=\"card country\" style=\"width: 18rem;\">\r\n      <img src=${data.flags.svg} class=\"card-img-top\" alt=\"...\" style=\"object-fit: cover; width: 100%; height: 12rem;\">\r\n      <div class=\"card-body\">\r\n        <h5>${data.name.common}</h5>\r\n<div class=\"like\">\r\n          <button  class=\"icon-btn btn-like\" data-country=\"${data.name.common}\">\r\n  <i class=\"far fa-heart\"></i>\r\n</button>\r\n\r\n          <span class=\"like-counter\">0</span>\r\n        </div>\r\n        <div class=\"comment\">\r\n          <button type=\"button\" class=\"btn btn-commentt btn-primary\" data-country=\"${data.name.common}\">Comment</button>\r\n        </div>\r\n        <div class=\"reservation\">\r\n          <button type=\"button\" class=\"btn btn-comment btn-success btn-reservation\" data-country=\"${data.name.common}\">Reservations</button>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>`;\r\n\r\n  countries.appendChild(country);\r\n};\r\n\n\n//# sourceURL=webpack://module-capstone--2/./src/modules/countries.js?");

/***/ }),

/***/ "./src/modules/likeitems.js":
/*!**********************************!*\
  !*** ./src/modules/likeitems.js ***!
  \**********************************/
/***/ (() => {

eval("const involvementApiEndpoint =\r\n  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS';\r\nconst baseApiEndpoint = 'https://restcountries.com/v2/all';\r\n\r\n// Fetch data from the base API and the Involvement API\r\nasync function fetchData() {\r\n  try {\r\n    const [baseApiResponse, involvementApiResponse] = await Promise.all([\r\n      fetch(baseApiEndpoint),\r\n      fetch(`${involvementApiEndpoint}/likes`),\r\n    ]);\r\n\r\n    const baseApiData = await baseApiResponse.json();\r\n    const involvementApiData = await involvementApiResponse.json();\r\n\r\n    const combinedData = combineData(baseApiData, involvementApiData);\r\n    updateScreen(combinedData);\r\n  } catch (error) {\r\n    return error.message;\r\n  }\r\n}\r\n\r\n// Function to combine data from the base API and the Involvement API\r\nfunction combineData(baseApiData, involvementApiData) {\r\n  const combinedData = baseApiData.map((item) => {\r\n    const likeData = involvementApiData.find(\r\n      (likeItem) => likeItem.item_id === item.name.common\r\n    );\r\n    const likes = likeData ? likeData.likes : 0;\r\n\r\n    return {\r\n      ...item,\r\n      likes,\r\n    };\r\n  });\r\n\r\n  return combinedData;\r\n}\r\n\r\n// Function to update the screen with the combined data\r\nfunction updateScreen(data) {\r\n  const iconButtons = document.querySelectorAll('.icon-btn');\r\n  const likeCounters = document.querySelectorAll('.like-counter');\r\n  iconButtons.forEach((iconButton, index) => {\r\n    const countryName = iconButton.getAttribute('data-country');\r\n    iconButton.dataset.country = countryName;\r\n    likeCounters[index].dataset.country = countryName;\r\n    iconButton.addEventListener('click', async () => {\r\n      try {\r\n        const success = await sendLikeRequest(countryName);\r\n        if (success) {\r\n          iconButton.classList.toggle('liked');\r\n          await updateLikeCounters();\r\n        }\r\n      } catch (error) {\r\n        return error.message;\r\n      }\r\n    });\r\n  });\r\n\r\n  // Update the like counter values\r\n  likeCounters.forEach((likeCounter) => {\r\n    const countryName = likeCounter.getAttribute('data-country');\r\n    const item = data.find((item) => item.name.common === countryName);\r\n    likeCounter.textContent = item ? item.likes : 0;\r\n  });\r\n}\r\n\r\n// Function to send a POST request to the Involvement API when the Like button is clicked\r\nasync function sendLikeRequest(countryName) {\r\n  try {\r\n    const response = await fetch(`${involvementApiEndpoint}/likes`, {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify({\r\n        item_id: countryName,\r\n      }),\r\n    });\r\n\r\n    if (response.ok) {\r\n      const likeData = JSON.parse(localStorage.getItem(countryName)) || {};\r\n      likeData.likes = (likeData.likes || 0) + 1;\r\n      localStorage.setItem(countryName, JSON.stringify(likeData));\r\n\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  } catch (error) {\r\n    return error.message;\r\n  }\r\n}\r\n\r\n// Function to update the like counters\r\nasync function updateLikeCounters() {\r\n  try {\r\n    const involvementApiResponse = await fetch(\r\n      `${involvementApiEndpoint}/likes`\r\n    );\r\n    const involvementApiData = await involvementApiResponse.json();\r\n\r\n    const likeCounters = document.querySelectorAll('.like-counter');\r\n\r\n    likeCounters.forEach((likeCounter) => {\r\n      const countryName = likeCounter.getAttribute('data-country');\r\n      const likeData = involvementApiData.find(\r\n        (likeItem) => likeItem.item_id === countryName\r\n      );\r\n      const likes = likeData ? likeData.likes : 0;\r\n      likeCounter.textContent = likes;\r\n      const storedLikes = JSON.parse(localStorage.getItem(countryName)) || {};\r\n      storedLikes.likes = likes;\r\n      localStorage.setItem(countryName, JSON.stringify(storedLikes));\r\n    });\r\n  } catch (error) {\r\n    return error.message;\r\n  }\r\n}\r\n\r\n// Call the fetchData function on page load\r\ndocument.addEventListener('DOMContentLoaded', async () => {\r\n  // Fetch data from APIs and update the screen\r\n  await fetchData();\r\n  updateLikeCounters();\r\n});\r\n\n\n//# sourceURL=webpack://module-capstone--2/./src/modules/likeitems.js?");

/***/ }),

/***/ "./src/modules/reservation.js":
/*!************************************!*\
  !*** ./src/modules/reservation.js ***!
  \************************************/
/***/ (() => {

eval("// import getReservationCount from './reservationcounter.js';\r\n\r\nconst appId = 'FjhFMUdws0lCxR3eXCdS';\r\n\r\nlet reservationPopup = null;\r\nconst getReservationCount = async (itemId) => {\r\n  let countervalue = 0;\r\n  const getResponse = await fetch(\r\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/reservations?item_id=${itemId}`\r\n  );\r\n  if (getResponse.ok) {\r\n    const events = await getResponse.json();\r\n    events.forEach(() => {\r\n      countervalue = countervalue + 1;\r\n    });\r\n\r\n    return countervalue;\r\n  }\r\n  return 0;\r\n};\r\n\r\nconst createReservationForm = async (itemId) => {\r\n  // Remove existing popup if present\r\n  if (reservationPopup) {\r\n    reservationPopup.remove();\r\n  }\r\n\r\n  const popupContainer = document.createElement('div');\r\n  popupContainer.className = 'popup';\r\n  reservationPopup = popupContainer;\r\n\r\n  const formContainer = document.createElement('div');\r\n  formContainer.className = 'form-container';\r\n  const counter = await getReservationCount(itemId, formContainer);\r\n\r\n  const countryDetails = await getCountryDetails(itemId);\r\n  const countryFlagEl = document.createElement('img');\r\n  countryFlagEl.classList.add('country-flag');\r\n  countryFlagEl.src = countryDetails.flags.png;\r\n\r\n  const countryNameEl = document.createElement('h2');\r\n  countryNameEl.classList.add('country-name');\r\n  countryNameEl.textContent = countryDetails.name.common;\r\n\r\n  const countryPopulationEl = document.createElement('div');\r\n  countryPopulationEl.classList.add('country-population');\r\n  countryPopulationEl.textContent = `Population: ${countryDetails.population}`;\r\n\r\n  const countryCapitalEl = document.createElement('div');\r\n  countryCapitalEl.classList.add('country-capital');\r\n  countryCapitalEl.textContent = `Capital: ${countryDetails.capital}`;\r\n\r\n  const countryAreaEl = document.createElement('div');\r\n  countryAreaEl.classList.add('country-area');\r\n  countryAreaEl.textContent = `Area: ${countryDetails.area} km²`;\r\n\r\n  const countryContinentEl = document.createElement('div');\r\n  countryContinentEl.classList.add('country-continent');\r\n  countryContinentEl.textContent = `Continent: ${countryDetails.region}`;\r\n\r\n  const title = document.createElement('h1');\r\n  title.textContent = 'Add a Reservation';\r\n\r\n  const counterElem = document.createElement('h5');\r\n  counterElem.textContent = `Reservations: ${counter}`;\r\n\r\n  const closeButton = document.createElement('span');\r\n  closeButton.className = 'close-button';\r\n  closeButton.innerHTML = '&times;';\r\n  closeButton.addEventListener('click', () => {\r\n    popupContainer.remove();\r\n    reservationPopup = null;\r\n  });\r\n\r\n  const nameInput = document.createElement('input');\r\n  nameInput.type = 'text';\r\n  nameInput.placeholder = 'Your Name';\r\n\r\n  const startDateInput = document.createElement('input');\r\n  startDateInput.type = 'date';\r\n  startDateInput.placeholder = 'Start Date';\r\n\r\n  const endDateInput = document.createElement('input');\r\n  endDateInput.type = 'date';\r\n  endDateInput.placeholder = 'End Date';\r\n\r\n  const reserveButton = document.createElement('button');\r\n  reserveButton.textContent = 'Reserve';\r\n  reserveButton.addEventListener('click', async () => {\r\n    const reservationData = {\r\n      item_id: itemId,\r\n      username: nameInput.value,\r\n      date_start: startDateInput.value,\r\n      date_end: endDateInput.value,\r\n    };\r\n\r\n    try {\r\n      const response = await fetch(\r\n        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/reservations/`,\r\n        {\r\n          method: 'POST',\r\n          headers: {\r\n            'Content-Type': 'application/json',\r\n          },\r\n          body: JSON.stringify(reservationData),\r\n        }\r\n      );\r\n      if (response.ok) {\r\n        createReservationForm(itemId);\r\n      }\r\n    } catch (error) {\r\n      const errorLabel = document.createElement('label');\r\n      errorLabel.textContent = `Error: ${error}`;\r\n      formContainer.appendChild(errorLabel);\r\n    }\r\n  });\r\n\r\n  // Append the elements to the form container\r\n  popupContainer.appendChild(formContainer);\r\n  document.body.appendChild(popupContainer);\r\n  formContainer.appendChild(closeButton);\r\n  formContainer.appendChild(countryFlagEl);\r\n  formContainer.appendChild(countryNameEl);\r\n  formContainer.appendChild(countryPopulationEl);\r\n  formContainer.appendChild(countryCapitalEl);\r\n  formContainer.appendChild(countryAreaEl);\r\n  formContainer.appendChild(countryContinentEl);\r\n  formContainer.appendChild(counterElem);\r\n  formContainer.appendChild(await getReservation(itemId));\r\n  formContainer.appendChild(title);\r\n  formContainer.appendChild(nameInput);\r\n  formContainer.appendChild(startDateInput);\r\n  formContainer.appendChild(endDateInput);\r\n  formContainer.appendChild(reserveButton);\r\n};\r\n\r\nconst getCountryDetails = async (countryName) => {\r\n  try {\r\n    const response = await fetch(\r\n      `https://restcountries.com/v3.1/name/${countryName}`\r\n    );\r\n    const [countryDetails] = await response.json();\r\n    return countryDetails;\r\n  } catch (error) {\r\n    return error.message;\r\n  }\r\n};\r\n\r\ndocument.addEventListener('click', function (event) {\r\n  if (event.target.classList.contains('btn-reservation')) {\r\n    createReservationForm(event.target.dataset.country);\r\n  }\r\n});\r\n\r\nconst getReservation = async (itemId) => {\r\n  const getResponse = await fetch(\r\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/reservations?item_id=${itemId}`\r\n  );\r\n  const reservationInfo = document.createElement('div');\r\n  if (getResponse.ok) {\r\n    const events = await getResponse.json();\r\n    events.forEach((event) => {\r\n      reservationInfo.innerHTML += `\r\n        <h3>Reservation Details:</h3>\r\n        <p>Name: ${event.username}</p>\r\n        <p>Start Date: ${event.date_start}</p>\r\n        <p>End Date: ${event.date_end}</p>\r\n      `;\r\n    });\r\n\r\n    return reservationInfo;\r\n  }\r\n  return reservationInfo;\r\n};\r\n\n\n//# sourceURL=webpack://module-capstone--2/./src/modules/reservation.js?");

/***/ }),

/***/ "./src/assets/icons/earth_logo.png":
/*!*****************************************!*\
  !*** ./src/assets/icons/earth_logo.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"80416ff71e58e0e9223b.png\";\n\n//# sourceURL=webpack://module-capstone--2/./src/assets/icons/earth_logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;