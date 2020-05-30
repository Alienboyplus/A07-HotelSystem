"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/A07-HotelSystem/uniapp/login_test/main.js?{"page":"pages%2Fshop%2Fgoods%2Fgoods-list%2Fgoods-list"} ***!
  \*********************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_shop_goods_goods_list_goods_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/shop/goods/goods-list/goods-list.nvue?mpType=page */ 2);\n\n        \n        \n        \n        _pages_shop_goods_goods_list_goods_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_shop_goods_goods_list_goods_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/shop/goods/goods-list/goods-list'\n        _pages_shop_goods_goods_list_goods_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_shop_goods_goods_list_goods_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQW1GO0FBQ25GLFFBQVEsZ0dBQUc7QUFDWCxRQUFRLGdHQUFHO0FBQ1gsUUFBUSxnR0FBRztBQUNYLGdCQUFnQixnR0FBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9zaG9wL2dvb2RzL2dvb2RzLWxpc3QvZ29vZHMtbGlzdC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9zaG9wL2dvb2RzL2dvb2RzLWxpc3QvZ29vZHMtbGlzdCdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/A07-HotelSystem/uniapp/login_test/main.js?{"type":"appStyle"} ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************************************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/A07-HotelSystem/uniapp/login_test/pages/shop/goods/goods-list/goods-list.nvue?mpType=page ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _goods_list_nvue_vue_type_template_id_0241621c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods-list.nvue?vue&type=template&id=0241621c&mpType=page */ 3);\n/* harmony import */ var _goods_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods-list.nvue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./goods-list.nvue?vue&type=style&index=0&lang=css&mpType=page */ 8).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./goods-list.nvue?vue&type=style&index=0&lang=css&mpType=page */ 8).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _goods_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _goods_list_nvue_vue_type_template_id_0241621c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _goods_list_nvue_vue_type_template_id_0241621c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"ce267836\",\n  false,\n  _goods_list_nvue_vue_type_template_id_0241621c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"C:/Users/DELL/Desktop/A07-HotelSystem/uniapp/login_test/pages/shop/goods/goods-list/goods-list.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUk7QUFDbkk7QUFDMEU7QUFDTDtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHNFQUErRDtBQUNuSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsc0VBQStEO0FBQ3hIOztBQUVBOztBQUVBO0FBQytLO0FBQy9LLGdCQUFnQix3TEFBVTtBQUMxQixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9nb29kcy1saXN0Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDI0MTYyMWMmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2dvb2RzLWxpc3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9nb29kcy1saXN0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2dvb2RzLWxpc3QubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2dvb2RzLWxpc3QubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIYnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiY2UyNjc4MzZcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzovVXNlcnMvREVMTC9EZXNrdG9wL0EwNy1Ib3RlbFN5c3RlbS91bmlhcHAvbG9naW5fdGVzdC9wYWdlcy9zaG9wL2dvb2RzL2dvb2RzLWxpc3QvZ29vZHMtbGlzdC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*****************************************************************************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/A07-HotelSystem/uniapp/login_test/pages/shop/goods/goods-list/goods-list.nvue?vue&type=template&id=0241621c&mpType=page ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_list_nvue_vue_type_template_id_0241621c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./goods-list.nvue?vue&type=template&id=0241621c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_list_nvue_vue_type_template_id_0241621c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_list_nvue_vue_type_template_id_0241621c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_list_nvue_vue_type_template_id_0241621c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_list_nvue_vue_type_template_id_0241621c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/DELL/Desktop/A07-HotelSystem/uniapp/login_test/pages/shop/goods/goods-list/goods-list.nvue?vue&type=template&id=0241621c&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: ["content"] },
    [
      _c("header", { appendAsTree: true, attrs: { append: "tree" } }, [
        _c(
          "div",
          { staticClass: ["header"] },
          _vm._l(_vm.orderbyList, function(target, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass: ["target"],
                class: [target.selected ? "target-on" : "target-on1"],
                on: {
                  click: function($event) {
                    _vm.select(index)
                  }
                }
              },
              [
                _c(
                  "text",
                  {
                    staticClass: ["target-text"],
                    class: [target.selected ? "target-text-on" : ""]
                  },
                  [_vm._v(_vm._s(target.text))]
                ),
                target.orderbyicon
                  ? _c(
                      "text",
                      {
                        staticClass: ["target-icon"],
                        class: [target.selected ? "target-text-on" : ""]
                      },
                      [_vm._v(_vm._s(target.orderbyicon[target.orderby]))]
                    )
                  : _vm._e()
              ]
            )
          }),
          0
        )
      ]),
      _c("div", { staticClass: ["place"] }),
      _c(
        "waterfall",
        {
          staticClass: ["goods-list"],
          attrs: { columnCount: "2", columnWidth: "auto" }
        },
        [
          _c(
            "refresh",
            {
              staticClass: ["refresh"],
              attrs: { display: _vm.refreshing ? "show" : "hide" },
              on: { refresh: _vm.onrefresh, pullingdown: _vm.onpullingdown }
            },
            [
              _c("text", { staticClass: ["refresh-indicator-text"] }, [
                _vm._v(_vm._s(_vm.refreshText))
              ]),
              _c("loading-indicator", { staticClass: ["refresh-indicator"] })
            ]
          ),
          _vm._l(_vm.goodsList, function(goods) {
            return _c(
              "cell",
              {
                key: goods.goods_id,
                appendAsTree: true,
                attrs: { append: "tree" }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: ["product"],
                    on: {
                      tap: function($event) {
                        _vm.toGoods(goods)
                      }
                    }
                  },
                  [
                    _c("image", {
                      staticClass: ["product-image"],
                      attrs: { mode: "widthFix", src: goods.img }
                    }),
                    _c("text", { staticClass: ["product-name"] }, [
                      _vm._v(_vm._s(goods.name))
                    ]),
                    _c("view", { staticClass: ["product-info"] }, [
                      _c("text", { staticClass: ["product-info-price"] }, [
                        _vm._v(_vm._s(goods.price))
                      ]),
                      _c("text", { staticClass: ["product-info-slogan"] }, [
                        _vm._v(_vm._s(goods.slogan))
                      ])
                    ])
                  ]
                )
              ]
            )
          }),
          _c(
            "loading",
            {
              staticClass: ["loading"],
              attrs: { display: _vm.loadinging ? "show" : "hide" },
              on: { loading: _vm.onloading }
            },
            [
              _c("text", { staticClass: ["loading-indicator-text"] }, [
                _vm._v(_vm._s(_vm.loadingText))
              ]),
              _c("loading-indicator", { staticClass: ["loading-indicator"] })
            ]
          )
        ],
        2
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/A07-HotelSystem/uniapp/login_test/pages/shop/goods/goods-list/goods-list.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./goods-list.nvue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtkLENBQWdCLDJmQUFHLEVBQUMiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSGJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhRDpcXFxcSGJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTMtMSFEOlxcXFxIYnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9nb29kcy1saXN0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIYnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCFEOlxcXFxIYnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMy0xIUQ6XFxcXEhidWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2dvb2RzLWxpc3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/DELL/Desktop/A07-HotelSystem/uniapp/login_test/pages/shop/goods/goods-list/goods-list.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      refreshText: '下拉刷新',\n      refreshing: false,\n      loadinging: false,\n      loadingText: '上拉加载',\n      orderbyList: [\n      { text: '销量', selected: true, orderbyicon: false, orderby: 0 },\n      { text: '价格', selected: false, orderbyicon: [\"\\uE737\", \"\\uE736\"], orderby: 0 },\n      { text: '好评', selected: false, orderbyicon: false, orderby: 0 }],\n\n      goodsList: [\n      {\n        goods_id: 0,\n        img: 'https://ae01.alicdn.com/kf/HTB1JC1fe.CF3KVjSZJnq6znHFXaG.jpg',\n        name: '商品名称商品名称商品名称商品名称商品名称',\n        price: '￥168',\n        slogan: '1235人付款' },\n\n      {\n        goods_id: 1,\n        img: 'https://ae01.alicdn.com/kf/HTB1GSqoeWWs3KVjSZFxq6yWUXXav.jpg',\n        name: '商品名称商品名称商品名称商品名称商品名称',\n        price: '￥168',\n        slogan: '1235人付款' },\n\n      {\n        goods_id: 2,\n        img: 'https://ae01.alicdn.com/kf/HTB16wepeW5s3KVjSZFNq6AD3FXaJ.jpg',\n        name: '商品名称商品名称商品名称商品名称商品名称',\n        price: '￥168',\n        slogan: '1235人付款' },\n\n      {\n        goods_id: 3,\n        img: 'https://ae01.alicdn.com/kf/HTB1duHtcfBj_uVjSZFpq6A0SXXaJ.jpg',\n        name: '商品名称商品名称商品名称商品名称商品名称',\n        price: '￥168',\n        slogan: '1235人付款' },\n\n      {\n        goods_id: 4,\n        img: 'https://ae01.alicdn.com/kf/HTB173epeW5s3KVjSZFNq6AD3FXai.jpg',\n        name: '商品名称商品名称商品名称商品名称商品名称',\n        price: '￥168',\n        slogan: '1235人付款' },\n\n      {\n        goods_id: 5,\n        img: 'https://ae01.alicdn.com/kf/HTB1_Mefe3aH3KVjSZFjq6AFWpXaJ.jpg',\n        name: '商品名称商品名称商品名称商品名称商品名称',\n        price: '￥168',\n        slogan: '1235人付款' },\n\n      {\n        goods_id: 6,\n        img: 'https://ae01.alicdn.com/kf/HTB1Lu1pe8Cw3KVjSZFuq6AAOpXaI.jpg',\n        name: '商品名称商品名称商品名称商品名称商品名称',\n        price: '￥168',\n        slogan: '1235人付款' },\n\n      {\n        goods_id: 7,\n        img: 'https://ae01.alicdn.com/kf/HTB1iMife3aH3KVjSZFjq6AFWpXaA.jpg',\n        name: '商品名称商品名称商品名称商品名称商品名称',\n        price: '￥168',\n        slogan: '1235人付款' },\n\n      {\n        goods_id: 8,\n        img: 'https://ae01.alicdn.com/kf/HTB1D6Sfe4iH3KVjSZPfq6xBiVXaG.jpg',\n        name: '商品名称商品名称商品名称商品名称商品名称',\n        price: '￥168',\n        slogan: '1235人付款' },\n\n      {\n        goods_id: 9,\n        img: 'https://ae01.alicdn.com/kf/HTB1IjSfe4iH3KVjSZPfq6xBiVXa4.jpg',\n        name: '商品名称商品名称商品名称商品名称商品名称',\n        price: '￥168',\n        slogan: '1235人付款' }] };\n\n\n\n  },\n  beforeCreate: function beforeCreate() {\n    var domModule = weex.requireModule('dom');\n    domModule.addRule('fontFace', {\n      fontFamily: 'iconfont',\n      src: \"url('https://at.alicdn.com/t/font_1087442_fe5vigfwr5m.ttf')\" });\n\n  },\n  mounted: function mounted() {\n    // nvue页面下，关闭下拉刷新，用waterfall实现下拉和上拉刷新。\n    var currentWebview = getCurrentPages()[getCurrentPages().length - 1].$getAppWebview();\n    currentWebview.setStyle({\n      pullToRefresh: {\n        support: false } });\n\n\n    this.init();\n  },\n  methods: {\n    init: function init() {\n      this.setTitle();\n    },\n    setTitle: function setTitle() {\n      //设置标题\n      var catName = uni.getStorageSync('catName');\n      __f__(\"log\", 'catName: ' + catName, \" at pages/shop/goods/goods-list/goods-list.nvue:147\");\n      uni.setNavigationBarTitle({\n        title: catName });\n\n    },\n    select: function select(index) {\n      var tmpTis = this.orderbyList[index].text + '排序 ';\n      if (this.orderbyList[index].orderbyicon) {\n        var type = this.orderbyList[index].orderby == 0 ? '升序' : '降序';\n        if (this.orderbyList[index].selected) {\n          type = this.orderbyList[index].orderby == 0 ? '降序' : '升序';\n          this.orderbyList[index].orderby = this.orderbyList[index].orderby == 0 ? 1 : 0;\n        }\n        tmpTis += type;\n      }\n      this.orderbyList[index].selected = true;\n      var len = this.orderbyList.length;\n      for (var i = 0; i < len; i++) {\n        if (i != index) {\n          this.orderbyList[i].selected = false;\n        }\n      }\n      uni.showToast({ title: tmpTis, icon: 'none' });\n    },\n    onrefresh: function onrefresh(event) {var _this = this;\n      this.refreshText = '正在刷新';\n      this.refreshing = true;\n      setTimeout(function () {\n        _this.refreshText = '下载刷新';\n        _this.refreshing = false;\n      }, 2000);\n    },\n    onpullingdown: function onpullingdown(event) {\n      if (event.pullingDistance <= -200) {\n        this.refreshText = '放开刷新';\n      }\n    },\n    onloading: function onloading(event) {var _this2 = this;\n      this.loadinging = true;\n      setTimeout(function () {\n        var len = _this2.goodsList.length;\n        if (len >= 40) {\n          uni.showToast({ title: '没有更多了', icon: 'none' });\n          _this2.loadinging = false;\n          return false;\n        } else {\n          _this2.loadingText = \"正在加载...\";\n        }\n        var tmpList = JSON.parse(JSON.stringify(_this2.goodsList));\n        var end_goods_id = _this2.goodsList[len - 1].goods_id;\n        for (var i = 1; i <= 10; i++) {\n          var row = tmpList[i - 1];\n          row.goods_id = end_goods_id + i;\n          _this2.goodsList.push(row);\n        }\n        _this2.loadinging = false;\n      }, 1000);\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvc2hvcC9nb29kcy9nb29kcy1saXN0L2dvb2RzLWxpc3QubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBLHVCQUZBO0FBR0EsdUJBSEE7QUFJQSx5QkFKQTtBQUtBO0FBQ0Esb0VBREE7QUFFQSxvRkFGQTtBQUdBLHFFQUhBLENBTEE7O0FBVUE7QUFDQTtBQUNBLG1CQURBO0FBRUEsMkVBRkE7QUFHQSxvQ0FIQTtBQUlBLHFCQUpBO0FBS0EseUJBTEEsRUFEQTs7QUFRQTtBQUNBLG1CQURBO0FBRUEsMkVBRkE7QUFHQSxvQ0FIQTtBQUlBLHFCQUpBO0FBS0EseUJBTEEsRUFSQTs7QUFlQTtBQUNBLG1CQURBO0FBRUEsMkVBRkE7QUFHQSxvQ0FIQTtBQUlBLHFCQUpBO0FBS0EseUJBTEEsRUFmQTs7QUFzQkE7QUFDQSxtQkFEQTtBQUVBLDJFQUZBO0FBR0Esb0NBSEE7QUFJQSxxQkFKQTtBQUtBLHlCQUxBLEVBdEJBOztBQTZCQTtBQUNBLG1CQURBO0FBRUEsMkVBRkE7QUFHQSxvQ0FIQTtBQUlBLHFCQUpBO0FBS0EseUJBTEEsRUE3QkE7O0FBb0NBO0FBQ0EsbUJBREE7QUFFQSwyRUFGQTtBQUdBLG9DQUhBO0FBSUEscUJBSkE7QUFLQSx5QkFMQSxFQXBDQTs7QUEyQ0E7QUFDQSxtQkFEQTtBQUVBLDJFQUZBO0FBR0Esb0NBSEE7QUFJQSxxQkFKQTtBQUtBLHlCQUxBLEVBM0NBOztBQWtEQTtBQUNBLG1CQURBO0FBRUEsMkVBRkE7QUFHQSxvQ0FIQTtBQUlBLHFCQUpBO0FBS0EseUJBTEEsRUFsREE7O0FBeURBO0FBQ0EsbUJBREE7QUFFQSwyRUFGQTtBQUdBLG9DQUhBO0FBSUEscUJBSkE7QUFLQSx5QkFMQSxFQXpEQTs7QUFnRUE7QUFDQSxtQkFEQTtBQUVBLDJFQUZBO0FBR0Esb0NBSEE7QUFJQSxxQkFKQTtBQUtBLHlCQUxBLEVBaEVBLENBVkE7Ozs7QUFtRkEsR0FyRkE7QUFzRkEsY0F0RkEsMEJBc0ZBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUEsd0VBRkE7O0FBSUEsR0E1RkE7QUE2RkEsU0E3RkEscUJBNkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQSxFQURBOzs7QUFLQTtBQUNBLEdBdEdBO0FBdUdBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFlBSkEsc0JBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQURBOztBQUdBLEtBWEE7QUFZQSxVQVpBLGtCQVlBLEtBWkEsRUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTlCQTtBQStCQSxhQS9CQSxxQkErQkEsS0EvQkEsRUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxFQUdBLElBSEE7QUFJQSxLQXRDQTtBQXVDQSxpQkF2Q0EseUJBdUNBLEtBdkNBLEVBdUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0EzQ0E7QUE0Q0EsYUE1Q0EscUJBNENBLEtBNUNBLEVBNENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BakJBLEVBaUJBLElBakJBO0FBa0JBLEtBaEVBLEVBdkdBLEUiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0PGhlYWRlcj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImhlYWRlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YXJnZXRcIiB2LWZvcj1cIih0YXJnZXQsIGluZGV4KSBpbiBvcmRlcmJ5TGlzdFwiIDprZXk9XCJpbmRleFwiIEBjbGljaz1cInNlbGVjdChpbmRleClcIiA6Y2xhc3M9XCJbdGFyZ2V0LnNlbGVjdGVkID8gJ3RhcmdldC1vbicgOiAndGFyZ2V0LW9uMSddXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRhcmdldC10ZXh0XCIgOmNsYXNzPVwiW3RhcmdldC5zZWxlY3RlZCA/ICd0YXJnZXQtdGV4dC1vbicgOiAnJ11cIj57eyB0YXJnZXQudGV4dCB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IHYtaWY9XCJ0YXJnZXQub3JkZXJieWljb25cIiBjbGFzcz1cInRhcmdldC1pY29uXCIgOmNsYXNzPVwiW3RhcmdldC5zZWxlY3RlZCA/ICd0YXJnZXQtdGV4dC1vbicgOiAnJ11cIj57eyB0YXJnZXQub3JkZXJieWljb25bdGFyZ2V0Lm9yZGVyYnldIH19PC90ZXh0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvaGVhZGVyPlxyXG5cdFx0XHJcblx0XHQ8ZGl2IGNsYXNzPVwicGxhY2VcIj48L2Rpdj5cclxuXHRcdDx3YXRlcmZhbGwgY2xhc3M9XCJnb29kcy1saXN0XCIgY29sdW1uLWNvdW50PVwiMlwiIGNvbHVtbi13aWR0aD1cImF1dG9cIj5cclxuXHRcdFx0PHJlZnJlc2ggY2xhc3M9XCJyZWZyZXNoXCIgQHJlZnJlc2g9XCJvbnJlZnJlc2hcIiBAcHVsbGluZ2Rvd249XCJvbnB1bGxpbmdkb3duXCIgOmRpc3BsYXk9XCJyZWZyZXNoaW5nID8gJ3Nob3cnIDogJ2hpZGUnXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJyZWZyZXNoLWluZGljYXRvci10ZXh0XCI+e3sgcmVmcmVzaFRleHQgfX08L3RleHQ+XHJcblx0XHRcdFx0PGxvYWRpbmctaW5kaWNhdG9yIGNsYXNzPVwicmVmcmVzaC1pbmRpY2F0b3JcIj48L2xvYWRpbmctaW5kaWNhdG9yPlxyXG5cdFx0XHQ8L3JlZnJlc2g+XHJcblx0XHRcdDxjZWxsIHYtZm9yPVwiZ29vZHMgaW4gZ29vZHNMaXN0XCIgOmtleT1cImdvb2RzLmdvb2RzX2lkXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0XCIgQHRhcD1cInRvR29vZHMoZ29vZHMpXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJwcm9kdWN0LWltYWdlXCIgbW9kZT1cIndpZHRoRml4XCIgOnNyYz1cImdvb2RzLmltZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInByb2R1Y3QtbmFtZVwiPnt7IGdvb2RzLm5hbWUgfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2R1Y3QtaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInByb2R1Y3QtaW5mby1wcmljZVwiPnt7IGdvb2RzLnByaWNlIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInByb2R1Y3QtaW5mby1zbG9nYW5cIj57eyBnb29kcy5zbG9nYW4gfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L2NlbGw+XHJcblx0XHRcdDxsb2FkaW5nIGNsYXNzPVwibG9hZGluZ1wiIEBsb2FkaW5nPVwib25sb2FkaW5nXCIgOmRpc3BsYXk9XCJsb2FkaW5naW5nID8gJ3Nob3cnIDogJ2hpZGUnXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJsb2FkaW5nLWluZGljYXRvci10ZXh0XCI+e3tsb2FkaW5nVGV4dH19PC90ZXh0PlxyXG5cdFx0XHRcdDxsb2FkaW5nLWluZGljYXRvciBjbGFzcz1cImxvYWRpbmctaW5kaWNhdG9yXCI+PC9sb2FkaW5nLWluZGljYXRvcj5cclxuXHRcdFx0PC9sb2FkaW5nPlxyXG5cdFx0PC93YXRlcmZhbGw+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJlZnJlc2hUZXh0OiAn5LiL5ouJ5Yi35pawJyxcclxuXHRcdFx0cmVmcmVzaGluZzogZmFsc2UsXHJcblx0XHRcdGxvYWRpbmdpbmc6IGZhbHNlLFxyXG5cdFx0XHRsb2FkaW5nVGV4dDon5LiK5ouJ5Yqg6L29JyxcclxuXHRcdFx0b3JkZXJieUxpc3Q6IFtcclxuXHRcdFx0XHR7IHRleHQ6ICfplIDph48nLCBzZWxlY3RlZDogdHJ1ZSwgb3JkZXJieWljb246IGZhbHNlLCBvcmRlcmJ5OiAwIH0sXHJcblx0XHRcdFx0eyB0ZXh0OiAn5Lu35qC8Jywgc2VsZWN0ZWQ6IGZhbHNlLCBvcmRlcmJ5aWNvbjogWydcXHVlNzM3JywgJ1xcdWU3MzYnXSwgb3JkZXJieTogMCB9LFxyXG5cdFx0XHRcdHsgdGV4dDogJ+WlveivhCcsIHNlbGVjdGVkOiBmYWxzZSwgb3JkZXJieWljb246IGZhbHNlLCBvcmRlcmJ5OiAwIH1cclxuXHRcdFx0XSxcclxuXHRcdFx0Z29vZHNMaXN0OiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Z29vZHNfaWQ6IDAsXHJcblx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxSkMxZmUuQ0YzS1ZqU1pKbnE2em5IRlhhRy5qcGcnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRwcmljZTogJ++/pTE2OCcsXHJcblx0XHRcdFx0XHRzbG9nYW46ICcxMjM15Lq65LuY5qy+J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Z29vZHNfaWQ6IDEsXHJcblx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxR1Nxb2VXV3MzS1ZqU1pGeHE2eVdVWFhhdi5qcGcnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRwcmljZTogJ++/pTE2OCcsXHJcblx0XHRcdFx0XHRzbG9nYW46ICcxMjM15Lq65LuY5qy+J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Z29vZHNfaWQ6IDIsXHJcblx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNndlcGVXNXMzS1ZqU1pGTnE2QUQzRlhhSi5qcGcnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRwcmljZTogJ++/pTE2OCcsXHJcblx0XHRcdFx0XHRzbG9nYW46ICcxMjM15Lq65LuY5qy+J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Z29vZHNfaWQ6IDMsXHJcblx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxZHVIdGNmQmpfdVZqU1pGcHE2QTBTWFhhSi5qcGcnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRwcmljZTogJ++/pTE2OCcsXHJcblx0XHRcdFx0XHRzbG9nYW46ICcxMjM15Lq65LuY5qy+J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Z29vZHNfaWQ6IDQsXHJcblx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNzNlcGVXNXMzS1ZqU1pGTnE2QUQzRlhhaS5qcGcnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRwcmljZTogJ++/pTE2OCcsXHJcblx0XHRcdFx0XHRzbG9nYW46ICcxMjM15Lq65LuY5qy+J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Z29vZHNfaWQ6IDUsXHJcblx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxX01lZmUzYUgzS1ZqU1pGanE2QUZXcFhhSi5qcGcnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRwcmljZTogJ++/pTE2OCcsXHJcblx0XHRcdFx0XHRzbG9nYW46ICcxMjM15Lq65LuY5qy+J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Z29vZHNfaWQ6IDYsXHJcblx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxTHUxcGU4Q3czS1ZqU1pGdXE2QUFPcFhhSS5qcGcnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRwcmljZTogJ++/pTE2OCcsXHJcblx0XHRcdFx0XHRzbG9nYW46ICcxMjM15Lq65LuY5qy+J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Z29vZHNfaWQ6IDcsXHJcblx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxaU1pZmUzYUgzS1ZqU1pGanE2QUZXcFhhQS5qcGcnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRwcmljZTogJ++/pTE2OCcsXHJcblx0XHRcdFx0XHRzbG9nYW46ICcxMjM15Lq65LuY5qy+J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Z29vZHNfaWQ6IDgsXHJcblx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxRDZTZmU0aUgzS1ZqU1pQZnE2eEJpVlhhRy5qcGcnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRwcmljZTogJ++/pTE2OCcsXHJcblx0XHRcdFx0XHRzbG9nYW46ICcxMjM15Lq65LuY5qy+J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Z29vZHNfaWQ6IDksXHJcblx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxSWpTZmU0aUgzS1ZqU1pQZnE2eEJpVlhhNC5qcGcnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRwcmljZTogJ++/pTE2OCcsXHJcblx0XHRcdFx0XHRzbG9nYW46ICcxMjM15Lq65LuY5qy+J1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGJlZm9yZUNyZWF0ZSgpIHtcclxuXHRcdGNvbnN0IGRvbU1vZHVsZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XHJcblx0XHRkb21Nb2R1bGUuYWRkUnVsZSgnZm9udEZhY2UnLCB7XHJcblx0XHRcdGZvbnRGYW1pbHk6ICdpY29uZm9udCcsXHJcblx0XHRcdHNyYzogXCJ1cmwoJ2h0dHBzOi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTA4NzQ0Ml9mZTV2aWdmd3I1bS50dGYnKVwiXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdG1vdW50ZWQoKXtcclxuXHRcdC8vIG52dWXpobXpnaLkuIvvvIzlhbPpl63kuIvmi4nliLfmlrDvvIznlKh3YXRlcmZhbGzlrp7njrDkuIvmi4nlkozkuIrmi4nliLfmlrDjgIJcclxuXHRcdGNvbnN0IGN1cnJlbnRXZWJ2aWV3ID0gZ2V0Q3VycmVudFBhZ2VzKClbZ2V0Q3VycmVudFBhZ2VzKCkubGVuZ3RoIC0gMV0uJGdldEFwcFdlYnZpZXcoKTtcclxuXHRcdGN1cnJlbnRXZWJ2aWV3LnNldFN0eWxlKHtcclxuXHRcdFx0cHVsbFRvUmVmcmVzaDoge1xyXG5cdFx0XHRcdHN1cHBvcnQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0aW5pdCgpIHtcclxuXHRcdFx0dGhpcy5zZXRUaXRsZSgpO1xyXG5cdFx0fSxcclxuXHRcdHNldFRpdGxlKCkge1xyXG5cdFx0XHQvL+iuvue9ruagh+mimFxyXG5cdFx0XHRsZXQgY2F0TmFtZSA9IHVuaS5nZXRTdG9yYWdlU3luYygnY2F0TmFtZScpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnY2F0TmFtZTogJyArIGNhdE5hbWUpO1xyXG5cdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuXHRcdFx0XHR0aXRsZTogY2F0TmFtZVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRzZWxlY3QoaW5kZXgpIHtcclxuXHRcdFx0bGV0IHRtcFRpcyA9IHRoaXMub3JkZXJieUxpc3RbaW5kZXhdLnRleHQgKyAn5o6S5bqPICc7XHJcblx0XHRcdGlmICh0aGlzLm9yZGVyYnlMaXN0W2luZGV4XS5vcmRlcmJ5aWNvbikge1xyXG5cdFx0XHRcdGxldCB0eXBlID0gdGhpcy5vcmRlcmJ5TGlzdFtpbmRleF0ub3JkZXJieSA9PSAwID8gJ+WNh+W6jycgOiAn6ZmN5bqPJztcclxuXHRcdFx0XHRpZiAodGhpcy5vcmRlcmJ5TGlzdFtpbmRleF0uc2VsZWN0ZWQpIHtcclxuXHRcdFx0XHRcdHR5cGUgPSB0aGlzLm9yZGVyYnlMaXN0W2luZGV4XS5vcmRlcmJ5ID09IDAgPyAn6ZmN5bqPJyA6ICfljYfluo8nO1xyXG5cdFx0XHRcdFx0dGhpcy5vcmRlcmJ5TGlzdFtpbmRleF0ub3JkZXJieSA9IHRoaXMub3JkZXJieUxpc3RbaW5kZXhdLm9yZGVyYnkgPT0gMCA/IDEgOiAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0bXBUaXMgKz0gdHlwZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLm9yZGVyYnlMaXN0W2luZGV4XS5zZWxlY3RlZCA9IHRydWU7XHJcblx0XHRcdGxldCBsZW4gPSB0aGlzLm9yZGVyYnlMaXN0Lmxlbmd0aDtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdGlmIChpICE9IGluZGV4KSB7XHJcblx0XHRcdFx0XHR0aGlzLm9yZGVyYnlMaXN0W2ldLnNlbGVjdGVkID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHVuaS5zaG93VG9hc3QoeyB0aXRsZTogdG1wVGlzLCBpY29uOiAnbm9uZScgfSk7XHJcblx0XHR9LFxyXG5cdFx0b25yZWZyZXNoKGV2ZW50KSB7XHJcblx0XHRcdHRoaXMucmVmcmVzaFRleHQgPSAn5q2j5Zyo5Yi35pawJztcclxuXHRcdFx0dGhpcy5yZWZyZXNoaW5nID0gdHJ1ZTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5yZWZyZXNoVGV4dCA9ICfkuIvovb3liLfmlrAnO1xyXG5cdFx0XHRcdHRoaXMucmVmcmVzaGluZyA9IGZhbHNlO1xyXG5cdFx0XHR9LCAyMDAwKTtcclxuXHRcdH0sXHJcblx0XHRvbnB1bGxpbmdkb3duKGV2ZW50KSB7XHJcblx0XHRcdGlmIChldmVudC5wdWxsaW5nRGlzdGFuY2UgPD0gLTIwMCkge1xyXG5cdFx0XHRcdHRoaXMucmVmcmVzaFRleHQgPSAn5pS+5byA5Yi35pawJztcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9ubG9hZGluZyhldmVudCkge1xyXG5cdFx0XHR0aGlzLmxvYWRpbmdpbmcgPSB0cnVlO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRsZXQgbGVuID0gdGhpcy5nb29kc0xpc3QubGVuZ3RoO1xyXG5cdFx0XHRcdGlmKGxlbj49NDApe1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7dGl0bGU6J+ayoeacieabtOWkmuS6hicsaWNvbjonbm9uZSd9KTtcclxuXHRcdFx0XHRcdHRoaXMubG9hZGluZ2luZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dGhpcy5sb2FkaW5nVGV4dD1cIuato+WcqOWKoOi9vS4uLlwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgdG1wTGlzdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5nb29kc0xpc3QpKTtcclxuXHRcdFx0XHRsZXQgZW5kX2dvb2RzX2lkID0gdGhpcy5nb29kc0xpc3RbbGVuLTFdLmdvb2RzX2lkO1xyXG5cdFx0XHRcdGZvcihsZXQgaT0xO2k8PTEwO2krKyl7XHJcblx0XHRcdFx0XHRsZXQgcm93ID0gdG1wTGlzdFtpLTFdO1xyXG5cdFx0XHRcdFx0cm93Lmdvb2RzX2lkID0gZW5kX2dvb2RzX2lkK2k7XHJcblx0XHRcdFx0XHR0aGlzLmdvb2RzTGlzdC5wdXNoKHJvdyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMubG9hZGluZ2luZyA9IGZhbHNlO1xyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uY29udGVudCB7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uaGVhZGVyIHtcclxuXHR3aWR0aDogNzUwcHg7XHJcblx0aGVpZ2h0OiA3OXB4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR6LWluZGV4OiA5OTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdHRvcDogMDtcclxuXHR6LWluZGV4OiAxMDtcclxuXHRib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2VlZTtcclxufVxyXG4udGFyZ2V0IHtcclxuXHR3aWR0aDogMTUwcHg7XHJcblx0aGVpZ2h0OiA2MHB4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRtYXJnaW4tYm90dG9tOiAtMnB4O1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XHJcbn1cclxuLnRhcmdldC1vbiB7XHJcblx0Ym9yZGVyLWJvdHRvbS13aWR0aDogNHB4O1xyXG5cdGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICNmMDZjN2E7XHJcbn1cclxuLnRhcmdldC10ZXh0IHtcclxuXHRjb2xvcjogI2FhYTtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLnRhcmdldC10ZXh0LW9uLFxyXG4udGFyZ2V0LWljb24tb24ge1xyXG5cdGNvbG9yOiAjNTU1O1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRhcmdldC1pY29uIHtcclxuXHRjb2xvcjogI2FhYTtcclxuXHRmb250LWZhbWlseTogaWNvbmZvbnQ7XHJcbn1cclxuLnBsYWNlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdGhlaWdodDogODBweDtcclxufVxyXG4uZ29vZHMtbGlzdCB7XHJcblx0d2lkdGg6IDc1MHB4O1xyXG5cdHBhZGRpbmc6IDAgMzBweCAzMHB4IDMwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ucHJvZHVjdCB7XHJcblx0d2lkdGg6IDMzNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRtYXJnaW46IDIwcHggMCAwIDA7XHJcblx0Ym94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLnByb2R1Y3QtaW1hZ2Uge1xyXG5cdHdpZHRoOiAzMzVweDtcclxuXHRoZWlnaHQ6IDMzNXB4O1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLnByb2R1Y3QtbmFtZSB7XHJcblx0d2lkdGg6IDMzNXB4O1xyXG5cdHBhZGRpbmc6IDEwcHggMTNweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLnByb2R1Y3QtaW5mbyB7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdHdpZHRoOiAzMzVweCU7XHJcblx0cGFkZGluZzogMTBweCAxM3B4O1xyXG59XHJcbi5wcm9kdWN0LWluZm8tcHJpY2Uge1xyXG5cdGNvbG9yOiAjZTY1MzM5O1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5wcm9kdWN0LWluZm8tc2xvZ2FuIHtcclxuXHRjb2xvcjogIzgwN2M4NztcclxuXHRmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLnJlZnJlc2gge1xyXG5cdHdpZHRoOiA2OTA7XHJcblx0aGVpZ2h0OiAxNTA7XHJcblx0bWFyZ2luLXRvcDogLTUwO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnJlZnJlc2gtaW5kaWNhdG9yLXRleHQge1xyXG5cdGNvbG9yOiAjODg4ODg4O1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnJlZnJlc2gtaW5kaWNhdG9yIHtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0d2lkdGg6IDYwcHg7XHJcblx0Y29sb3I6ICMwMDA7XHJcbn1cclxuLmxvYWRpbmcge1xyXG5cdHdpZHRoOiA2OTA7XHJcblx0aGVpZ2h0OiAxMjA7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5sb2FkaW5nLWluZGljYXRvci10ZXh0IHtcclxuXHRjb2xvcjogIzg4ODg4ODtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2FkaW5nLWluZGljYXRvciB7XHJcblx0aGVpZ2h0OiA2MHB4O1xyXG5cdHdpZHRoOiA2MHB4O1xyXG5cdGNvbG9yOiAjMDAwO1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 8 */
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/A07-HotelSystem/uniapp/login_test/pages/shop/goods/goods-list/goods-list.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!./node_modules/postcss-loader/src??ref--7-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./goods-list.nvue?vue&type=style&index=0&lang=css&mpType=page */ 9);
/* harmony import */ var _D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_D_Hbuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 9 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!./node_modules/postcss-loader/src??ref--7-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/DELL/Desktop/A07-HotelSystem/uniapp/login_test/pages/shop/goods/goods-list/goods-list.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "flexDirection": "column"
  },
  "header": {
    "width": "750",
    "height": "79",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "flex-end",
    "position": "fixed",
    "zIndex": 10,
    "backgroundColor": "#ffffff",
    "top": 0,
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#eeeeee"
  },
  "target": {
    "width": "150",
    "height": "60",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "marginBottom": "-2",
    "borderBottomColor": "#ffffff"
  },
  "target-on": {
    "borderBottomWidth": "4",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#f06c7a"
  },
  "target-text": {
    "color": "#aaaaaa",
    "fontSize": "30"
  },
  "target-text-on": {
    "color": "#555555",
    "fontWeight": "600"
  },
  "target-icon-on": {
    "color": "#555555",
    "fontWeight": "600"
  },
  "target-icon": {
    "color": "#aaaaaa",
    "fontFamily": "iconfont"
  },
  "place": {
    "backgroundColor": "#ffffff",
    "height": "80"
  },
  "goods-list": {
    "width": "750",
    "paddingTop": 0,
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30",
    "backgroundColor": "#ffffff"
  },
  "product": {
    "width": "335",
    "borderRadius": "20",
    "backgroundColor": "#ffffff",
    "marginTop": "20",
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "boxShadow": "0 0 5px rgba(0, 0, 0, 0.1)"
  },
  "product-image": {
    "width": "335",
    "height": "335",
    "borderTopLeftRadius": "20",
    "borderTopRightRadius": "20"
  },
  "product-name": {
    "width": "335",
    "paddingTop": "10",
    "paddingRight": "13",
    "paddingBottom": "10",
    "paddingLeft": "13",
    "textAlign": "center",
    "overflow": "hidden",
    "fontSize": "30"
  },
  "product-info": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-end",
    "width": 335,
    "paddingTop": "10",
    "paddingRight": "13",
    "paddingBottom": "10",
    "paddingLeft": "13"
  },
  "product-info-price": {
    "color": "#e65339",
    "fontSize": "30",
    "fontWeight": "600"
  },
  "product-info-slogan": {
    "color": "#807c87",
    "fontSize": "24"
  },
  "refresh": {
    "width": 690,
    "height": 150,
    "marginTop": -50,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "refresh-indicator-text": {
    "color": "#888888",
    "fontSize": "30",
    "textAlign": "center"
  },
  "refresh-indicator": {
    "height": "60",
    "width": "60",
    "color": "#000000"
  },
  "loading": {
    "width": 690,
    "height": 120,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "loading-indicator-text": {
    "color": "#888888",
    "fontSize": "30",
    "textAlign": "center"
  },
  "loading-indicator": {
    "height": "60",
    "width": "60",
    "color": "#000000"
  }
}

/***/ }),
/* 10 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);