(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _currentComponents_ScannerCode_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @currentComponents/ScannerCode.vue */ "./resources/js/src/views/currentComponents/ScannerCode.vue");
/* harmony import */ var _currentComponents_ModalValidSession_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @currentComponents/ModalValidSession.vue */ "./resources/js/src/views/currentComponents/ModalValidSession.vue");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");
/* harmony import */ var _apis_useApis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/apis/useApis */ "./resources/js/src/apis/useApis.js");
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
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    ModalValidSession: _currentComponents_ModalValidSession_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Scann: _currentComponents_ScannerCode_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      data: {},
      openModal: false
    };
  },
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_3__["default"]],
  created: function created() {
    var _this = this;
    setTimeout(function () {
      _this.openModal = true;
    }, 1000);
  },
  methods: {
    callApiWithHeaders: function callApiWithHeaders() {
      var _this2 = this;
      setTimeout(function () {
        _this2.loading();
        setTimeout(function () {
          _this2.loading(false);
        }, 1000);
      }, 100);
    },
    callApi: function callApi() {
      _apis_useApis__WEBPACK_IMPORTED_MODULE_4__["default"].pruebas({}).then(function (response) {})["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/ModalValidSession.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/currentComponents/ModalValidSession.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/auth/utils */ "./resources/js/src/auth/utils.js");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");
/* harmony import */ var _apis_useApis__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/apis/useApis */ "./resources/js/src/apis/useApis.js");
/* harmony import */ var _auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/auth/jwt/useJwt */ "./resources/js/src/auth/jwt/useJwt.js");




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
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormInput"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormGroup"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_5__["default"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BButton"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BModal"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardText"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      user: null,
      password: 'demo123'
    };
  },
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_9__["default"]],
  props: {
    openModal: {
      type: Boolean,
      "default": false
    }
  },
  watch: {
    openModal: function openModal(value) {
      if (value) {
        this.showModal();
      }
    }
  },
  beforeMount: function beforeMount() {
    this.user = _store__WEBPACK_IMPORTED_MODULE_7__["default"].state.app.userData.name;
  },
  methods: {
    goToLogout: function goToLogout() {
      Object(_auth_utils__WEBPACK_IMPORTED_MODULE_8__["goToLogout"])();
    },
    goToRefreshSession: function goToRefreshSession() {
      var _this = this;
      return Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        return Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.password == null) {
                  _this.messageToast({
                    message: 'Introduce la contraseña para continuar.',
                    color: "danger"
                  });
                } else {
                  // useJwt
                  //   .login({
                  //     email   : store.state.app.userData.email,
                  //     password: this.password,
                  //   })
                  //   .then(response => {
                  //     console.log(response);
                  //     // let data = response.data;
                  //     // if(data.result){
                  //     //   const userData = data.data.user
                  //     //   localStorage.setItem('userData', JSON.stringify(userData))
                  //     //   localStorage.setItem('tk', data.data.user.token)
                  //     //   this.$ability.update(userData.ability)
                  //     //   this.messageToast({message :`Bienvenido ${userData.name } !`,color:"success"});
                  //     //   setTimeout(() => { goToLogout(); }, 500);
                  //     // }else{
                  //     //   this.messageToast({message :'Ocurrio un problema, intenta de nuevo', color:"danger"});
                  //     //   setTimeout(() => { goToLogout(); }, 500);
                  //     // }
                  //   })
                  //   .catch(error => {
                  //     console.log(error);
                  //     this.$refs.loginForm.setErrors(error.response.data.error)
                  //   })

                  _auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_11__["default"].login({
                    email: _store__WEBPACK_IMPORTED_MODULE_7__["default"].state.app.userData.email,
                    password: _this.password
                  }).then(function (response) {
                    console.log('response', response);
                    var data = response.data;
                    console.log('data', data);
                    if (data.result) {
                      var userData = data.data.user;
                      console.log('userData', userData);
                      localStorage.setItem('userData', JSON.stringify(userData));
                      _store__WEBPACK_IMPORTED_MODULE_7__["default"].commit('app/UPDATE_USERDATA', userData);
                      localStorage.setItem('tk', data.data.user.token);
                      _this.$ability.update(userData.ability);
                      _this.messageToast({
                        message: 'Sesión refrescada con exito.'
                      });
                      setTimeout(function () {
                        window.location.reload();
                      });
                    } else {
                      _this.$toast({
                        component: ToastificationContent,
                        position: 'top-right',
                        props: {
                          title: data.message,
                          // title: `Welcome ${userData.fullName || userData.username}`,
                          icon: 'CoffeeIcon',
                          variant: 'danger',
                          text: data.data
                        }
                      });
                    }
                  })["catch"](function (error) {
                    console.log(error);
                    _this.$refs.loginForm.setErrors(error.response.data.error);
                  });
                }
              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    login: function login() {
      Object(_auth_utils__WEBPACK_IMPORTED_MODULE_8__["goToLogout"])();
    },
    showModal: function showModal() {
      this.$refs['my-modal'].show();
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    toggleModal: function toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_barcode_reader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-barcode-reader */ "./node_modules/vue-barcode-reader/src/index.js");
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
  name: "HelloWorld",
  components: {
    StreamBarcodeReader: vue_barcode_reader__WEBPACK_IMPORTED_MODULE_0__["StreamBarcodeReader"]
  },
  data: function data() {
    return {
      text: "",
      id: null
    };
  },
  props: {
    msg: String
  },
  methods: {
    onDecode: function onDecode(a, b, c) {
      var _this = this;
      console.log(a, b, c);
      this.text = a;
      if (this.id) clearTimeout(this.id);
      this.id = setTimeout(function () {
        if (_this.text === a) {
          _this.text = "";
        }
      }, 5000);
    },
    onLoaded: function onLoaded() {
      console.log("load");
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/ModalValidSession.vue?vue&type=template&id=24394ced&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/currentComponents/ModalValidSession.vue?vue&type=template&id=24394ced& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
    "b-modal",
    {
      ref: "my-modal",
      attrs: {
        "hide-footer": "",
        "ok-only": "",
        "no-close-on-backdrop": "",
        title: "Using Component Methods",
      },
    },
    [
      _c(
        "div",
        { staticClass: "col-12 col-md-10 mx-auto" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { staticClass: " col-12 mb-1" },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Usuario" } },
                    [
                      _c("b-form-input", {
                        attrs: { readonly: "" },
                        model: {
                          value: _vm.user,
                          callback: function ($$v) {
                            _vm.user = $$v
                          },
                          expression: "user",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: " col-12 mb-1" },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Contraseña" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          autocomplete: false,
                          type: "password",
                          placeholder: "Introduce contraseña",
                        },
                        model: {
                          value: _vm.password,
                          callback: function ($$v) {
                            _vm.password = $$v
                          },
                          expression: "password",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        { attrs: { "align-h": "between" } },
        [
          _c(
            "b-button",
            {
              directives: [
                {
                  name: "ripple",
                  rawName: "v-ripple.400",
                  value: "rgba(186, 191, 199, 0.15)",
                  expression: "'rgba(186, 191, 199, 0.15)'",
                  modifiers: { 400: true },
                },
              ],
              attrs: { variant: "outline-secondary" },
              on: { click: _vm.goToLogout },
            },
            [_vm._v(" Cerrar sesión")]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              attrs: { variant: "relief-primary" },
              on: { click: _vm.goToRefreshSession },
            },
            [_vm._v(" Refrescar sesión")]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=template&id=d734279e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=template&id=d734279e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "hello" },
    [
      _c("StreamBarcodeReader", {
        on: {
          decode: function (a, b, c) {
            return _vm.onDecode(a, b, c)
          },
          loaded: function () {
            return _vm.onLoaded()
          },
        },
      }),
      _vm._v("\n  Input Value: " + _vm._s(_vm.text || "Nothing") + "\n"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/components/b-card-code/index.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/@core/components/b-card-code/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");

/* harmony default export */ __webpack_exports__["default"] = (_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/src/apis/config/apisDefaultConfig.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/apis/config/apisDefaultConfig.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Endpoints
  pruebasEndPoint: '/api/auth/pruebas',
  pruebas2EndPoint: '/api/auth/pruebas2',
  getUsuarios: '/api/get/usuarios'
});

/***/ }),

/***/ "./resources/js/src/apis/config/apisServices.js":
/*!******************************************************!*\
  !*** ./resources/js/src/apis/config/apisServices.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return apisServices; });
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apisDefaultConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apisDefaultConfig */ "./resources/js/src/apis/config/apisDefaultConfig.js");






var apisServices = /*#__PURE__*/function () {
  // Will be used by this service for making API calls

  // apisConfig <= Will be used by this service

  function apisServices(axiosIns, jwtOverrideConfig) {
    Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, apisServices);
    Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "axiosIns", null);
    Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apisConfig", Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _apisDefaultConfig__WEBPACK_IMPORTED_MODULE_5__["default"]));
    this.axiosIns = axiosIns;
    this.apisConfig = Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.apisConfig), jwtOverrideConfig);
  }
  Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(apisServices, [{
    key: "pruebas",
    value: function pruebas() {
      var _this$axiosIns;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return (_this$axiosIns = this.axiosIns).post.apply(_this$axiosIns, [this.apisConfig.pruebasEndPoint].concat(args));
    }
  }, {
    key: "pruebas2",
    value: function pruebas2() {
      var _this$axiosIns2;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return (_this$axiosIns2 = this.axiosIns).post.apply(_this$axiosIns2, [this.apisConfig.pruebas2EndPoint].concat(args));
    }
  }, {
    key: "login",
    value: function login() {
      var _this$axiosIns3;
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return (_this$axiosIns3 = this.axiosIns).post.apply(_this$axiosIns3, [this.apisConfig.loginEndpoint].concat(args));
    }
  }, {
    key: "getUsuarios",
    value: function getUsuarios() {
      var _this$axiosIns4;
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return (_this$axiosIns4 = this.axiosIns).post.apply(_this$axiosIns4, [this.apisConfig.getUsuarios].concat(args));
    }
  }]);
  return apisServices;
}();


/***/ }),

/***/ "./resources/js/src/apis/config/useApis.js":
/*!*************************************************!*\
  !*** ./resources/js/src/apis/config/useApis.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useApis; });
/* harmony import */ var _apisServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apisServices */ "./resources/js/src/apis/config/apisServices.js");

function useApis(axiosIns, overrideConfig) {
  var apis = new _apisServices__WEBPACK_IMPORTED_MODULE_0__["default"](axiosIns, overrideConfig);
  return {
    apis: apis
  };
}

/***/ }),

/***/ "./resources/js/src/apis/useApis.js":
/*!******************************************!*\
  !*** ./resources/js/src/apis/useApis.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_useApis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/useApis */ "./resources/js/src/apis/config/useApis.js");
/* harmony import */ var _apis_component_axiosCurrent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/apis/component/axiosCurrent */ "./resources/js/src/apis/component/axiosCurrent.js");


var _useApis = Object(_config_useApis__WEBPACK_IMPORTED_MODULE_0__["default"])(_apis_component_axiosCurrent__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
  apis = _useApis.apis;
/* harmony default export */ __webpack_exports__["default"] = (apis);

/***/ }),

/***/ "./resources/js/src/views/Home.vue":
/*!*****************************************!*\
  !*** ./resources/js/src/views/Home.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=e85b2cee& */ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=e85b2cee& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/currentComponents/ModalValidSession.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/ModalValidSession.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalValidSession_vue_vue_type_template_id_24394ced___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalValidSession.vue?vue&type=template&id=24394ced& */ "./resources/js/src/views/currentComponents/ModalValidSession.vue?vue&type=template&id=24394ced&");
/* harmony import */ var _ModalValidSession_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalValidSession.vue?vue&type=script&lang=js& */ "./resources/js/src/views/currentComponents/ModalValidSession.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalValidSession_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalValidSession_vue_vue_type_template_id_24394ced___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalValidSession_vue_vue_type_template_id_24394ced___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/currentComponents/ModalValidSession.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/currentComponents/ModalValidSession.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/ModalValidSession.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalValidSession_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalValidSession.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/ModalValidSession.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalValidSession_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/currentComponents/ModalValidSession.vue?vue&type=template&id=24394ced&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/ModalValidSession.vue?vue&type=template&id=24394ced& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalValidSession_vue_vue_type_template_id_24394ced___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalValidSession.vue?vue&type=template&id=24394ced& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/ModalValidSession.vue?vue&type=template&id=24394ced&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalValidSession_vue_vue_type_template_id_24394ced___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalValidSession_vue_vue_type_template_id_24394ced___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/currentComponents/ScannerCode.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/ScannerCode.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScannerCode_vue_vue_type_template_id_d734279e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScannerCode.vue?vue&type=template&id=d734279e&scoped=true& */ "./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=template&id=d734279e&scoped=true&");
/* harmony import */ var _ScannerCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScannerCode.vue?vue&type=script&lang=js& */ "./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ScannerCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScannerCode_vue_vue_type_template_id_d734279e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ScannerCode_vue_vue_type_template_id_d734279e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d734279e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/currentComponents/ScannerCode.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScannerCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScannerCode.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScannerCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=template&id=d734279e&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=template&id=d734279e&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScannerCode_vue_vue_type_template_id_d734279e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScannerCode.vue?vue&type=template&id=d734279e&scoped=true& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=template&id=d734279e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScannerCode_vue_vue_type_template_id_d734279e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScannerCode_vue_vue_type_template_id_d734279e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);