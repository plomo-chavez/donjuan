(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/useFactory.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/useFactory.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");
/* harmony import */ var _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentComponents/FormFactory.vue */ "./resources/js/src/views/currentComponents/FormFactory.vue");
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FactoryForm: _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      schema: [{
        type: 'text',
        value: 'name',
        label: 'name',
        classContainer: 'col-6',
        classLabel: 'text',
        placeholder: 'text',
        name: 'text',
        rules: ''
        // prefixIcon      : 'UserIcon',
        // prefixText      : '',
        // sufijoIcon      : 'UserIcon',
        // sufijoText      : '',
      }, {
        type: 'input-phone',
        value: 'namee',
        label: 'name',
        classContainer: 'col-6',
        classLabel: 'text',
        placeholder: 'text',
        name: 'text',
        rules: ''
      }, {
        type: 'text-area',
        value: 'textArea',
        label: 'name',
        classContainer: 'col-6',
        classLabel: 'text',
        placeholder: 'text',
        name: 'textt',
        rules: '',
        counterChar: true
      }, {
        type: 'flat-pickr',
        value: 'flat-pickr',
        label: 'flat-pickr',
        classContainer: 'col-6',
        classLabel: 'flat-pickr',
        name: 'flat-pickr',
        rules: ''
      }]
    };
  },
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_0__["default"]],
  created: function created() {},
  methods: {
    formExport: function formExport(form) {
      console.log('form', form);
    },
    cancelar: function cancelar() {
      console.log('Cancelando');
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/useFactory.vue?vue&type=template&id=2edc62e6&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/useFactory.vue?vue&type=template&id=2edc62e6& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("FactoryForm", {
        attrs: { schema: _vm.schema, btnCancelar: false, disabledForm: "" },
        on: { formExport: _vm.formExport, cancelar: _vm.cancelar },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/useFactory.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/views/useFactory.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useFactory_vue_vue_type_template_id_2edc62e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useFactory.vue?vue&type=template&id=2edc62e6& */ "./resources/js/src/views/useFactory.vue?vue&type=template&id=2edc62e6&");
/* harmony import */ var _useFactory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFactory.vue?vue&type=script&lang=js& */ "./resources/js/src/views/useFactory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _useFactory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _useFactory_vue_vue_type_template_id_2edc62e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _useFactory_vue_vue_type_template_id_2edc62e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/useFactory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/useFactory.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/useFactory.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_useFactory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./useFactory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/useFactory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_useFactory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/useFactory.vue?vue&type=template&id=2edc62e6&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/useFactory.vue?vue&type=template&id=2edc62e6& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_useFactory_vue_vue_type_template_id_2edc62e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./useFactory.vue?vue&type=template&id=2edc62e6& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/useFactory.vue?vue&type=template&id=2edc62e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_useFactory_vue_vue_type_template_id_2edc62e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_useFactory_vue_vue_type_template_id_2edc62e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);