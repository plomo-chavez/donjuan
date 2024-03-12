(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/ExtraDetailsRoom.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/administracion/reservaciones/ExtraDetailsRoom.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_useCatalogo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/apis/useCatalogo */ "./resources/js/src/apis/useCatalogo.js");
/* harmony import */ var _currentComponents_detailsRoom_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @currentComponents/detailsRoom.vue */ "./resources/js/src/views/currentComponents/detailsRoom.vue");
/* harmony import */ var _out_components_detallesHabitacion_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @out/components/detallesHabitacion.vue */ "./resources/js/src/views/out/components/detallesHabitacion.vue");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");
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
  name: 'extraDetailsRoomComponent',
  data: function data() {
    return {};
  },
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_3__["default"]],
  components: {},
  props: {
    extraInformation: {
      type: Object,
      "default": null
    }
  },
  beforeMount: function beforeMount() {},
  methods: {
    handleCancel: function handleCancel() {
      this.$emit('cancel');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/StepsReservacion.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/administracion/reservaciones/StepsReservacion.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _TabDetalles_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TabDetalles.vue */ "./resources/js/src/views/administracion/reservaciones/TabDetalles.vue");
/* harmony import */ var _TabHabitaciones_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TabHabitaciones.vue */ "./resources/js/src/views/administracion/reservaciones/TabHabitaciones.vue");
/* harmony import */ var _TabPago_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TabPago.vue */ "./resources/js/src/views/administracion/reservaciones/TabPago.vue");
/* harmony import */ var _TabAcompa_antes_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TabAcompañantes.vue */ "./resources/js/src/views/administracion/reservaciones/TabAcompañantes.vue");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");
/* harmony import */ var _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/apis/usePeticiones */ "./resources/js/src/apis/usePeticiones.js");




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
//
//
//
//












/* harmony default export */ __webpack_exports__["default"] = ({
  name: "StepsReservacionComponente",
  components: {
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BButton"],
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_4__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_4__["TabContent"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BCard"],
    tabDetalles: _TabDetalles_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BCardSubTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BCardBody"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BFormInput"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_5___default.a,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    TabAcompañantes: _TabAcompa_antes_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    TabHabitaciones: _TabHabitaciones_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    TabPago: _TabPago_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_13__["default"]],
  data: function data() {
    return {
      step: 0,
      reservacion: {},
      showButtonsActions: true
    };
  },
  watch: {
    '$refs.wizard.activeTabIndex': function $refsWizardActiveTabIndex(newValor) {
      console.log(newValor);
    }
  },
  mounted: function mounted() {},
  methods: {
    handleChangeReservacion: function handleChangeReservacion(data) {
      console.log('StepsReservacionComponente => reservacion -> ', data);
      this.reservacion = this.copyObject(Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__["default"])({}, this.reservacion), data));
    },
    prevStep: function prevStep() {
      console.log('prevStep => reservacion => ', this.reservacion);
      this.$refs.wizard.prevTab();
      this.step = this.$refs.wizard.activeTabIndex;
    },
    nextStep: function nextStep() {
      var _arguments = arguments,
        _this = this;
      return Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var data, next, response;
        return Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
                console.log('nextStep => reservacion => ', _this.reservacion);
                if (!(_this.step == 3)) {
                  _context.next = 6;
                  break;
                }
                _this.handleSubmit();
                _context.next = 16;
                break;
              case 6:
                next = false;
                if (_this.step == 0) {
                  next = typeof _this.reservacion.fechaInicio != 'undefined' && typeof _this.reservacion.fechaFin != 'undefined' && typeof _this.reservacion.person_id != 'undefined';
                  if (!next) {
                    _this.messageSweet({
                      message: 'Revisa el formulario, falta algún campo',
                      icon: 'warning'
                    });
                  }
                }
                if (_this.step == 1) {
                  if ((typeof _this.reservacion.habitaciones == 'undefined' ? 0 : _this.reservacion.habitaciones.length) == 0) {
                    _this.messageConfirm({
                      message: 'No hay habitaciones seleccionadas',
                      title: '¿Desea continuar con el proceso?',
                      icon: 'warning',
                      confirmButtonText: 'Si, continuar',
                      confirmFunction: function confirmFunction() {
                        _this.next();
                      },
                      messageCancel: false
                    });
                  } else {
                    next = true;
                  }
                }
                if (!(_this.step == 2)) {
                  _context.next = 15;
                  break;
                }
                _context.next = 12;
                return _this.$refs.tabAcompaniantes.getAcompaniantes();
              case 12:
                response = _context.sent;
                if (response != false) {
                  console.log('addCompaniantes => ', response);
                  _this.reservacion.acompaniantes = response;
                }
                if ((typeof _this.reservacion.acompaniantes == 'undefined' ? 0 : _this.reservacion.acompaniantes.length) == 0) {
                  _this.messageConfirm({
                    message: 'No hay acompañastes registrados',
                    title: '¿Desea continuar con el proceso?',
                    icon: 'warning',
                    confirmButtonText: 'Si, continuar',
                    confirmFunction: function confirmFunction() {
                      _this.next();
                    },
                    messageCancel: false
                  });
                } else {
                  next = true;
                }
              case 15:
                if (next) {
                  if (Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data) == 'object') _this.next();else _this.handleChangeStep(data);
                }
              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    next: function next() {
      this.$refs.wizard.nextTab();
      this.handleChangeStep();
    },
    handleChangeStep: function handleChangeStep() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.step = Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data) == 'object' ? this.$refs.wizard.activeTabIndex : data;
    },
    handleSubmit: function handleSubmit() {
      this.peticionAdministrar(Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__["default"])({}, this.reservacion), {}, {
        'accion': 1
      }));
    },
    peticionAdministrar: function peticionAdministrar(payload) {
      var _this2 = this;
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_14__["default"].administrarReservaciones({
        'payload': payload
      }).then(function (response) {
        _this2.messageSweet({
          message: response.data.message,
          icon: response.data.result ? 'success' : 'error'
        });
        if (response.data.result) {
          _this2.handleAtras();
          _this2.$emit('handleCancel');
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/TabAcompañantes.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/administracion/reservaciones/TabAcompañantes.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");
/* harmony import */ var _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @currentComponents/FormFactory.vue */ "./resources/js/src/views/currentComponents/FormFactory.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");






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
    FormFactory: _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BButton"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BModal"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BCardText"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BFormInput"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BFormGroup"]
  },
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_6__["default"]],
  data: function data() {
    return {
      formularios: [],
      acompaniantes: [],
      formSchema: [{
        classContainer: ' col-md-3 col-lg-3 col-12 ',
        type: 'input-text',
        name: 'nombre',
        value: 'nombre',
        label: 'Nombre',
        placeholder: 'Introduce un nombre',
        rules: 'required'
      }, {
        classContainer: ' col-md-3 col-lg-3 col-12 ',
        type: 'input-text',
        name: 'primerApellido',
        value: 'primerApellido',
        label: 'Primer apellido',
        rules: 'required'
      }, {
        classContainer: ' col-md-3 col-lg-3 col-12 ',
        type: 'input-text',
        name: 'segundoApellido',
        value: 'segundoApellido',
        label: 'Segundo apellido'
      }, {
        classContainer: ' col-md-3 col-lg-3 col-12 ',
        type: 'input-number',
        name: 'edad',
        value: 'edad',
        label: 'Edad',
        placeholder: 'Introduce una edad',
        rules: 'required',
        prefix: ''
      }]
    };
  },
  props: {
    reservacion: {
      type: Object,
      "default": {}
    }
  },
  beforeMount: function beforeMount() {
    console.log('TabAcompaniantes beforeMount => ', this.reservacion);
    if (this.reservacion.acompaniantes) {
      this.formularios = Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.reservacion.acompaniantes);
    }
  },
  mounted: function mounted() {
    console.log(this.$refs);
  },
  methods: {
    changePerson: function changePerson() {
      this.person = null;
    },
    handleSubmit: function handleSubmit(data, index) {
      this.acompaniantes[index] = this.copyObject(data);
    },
    handleEliminar: function handleEliminar() {
      console.log(this.$refs);
    },
    getAcompaniantes: function getAcompaniantes(index) {
      var _this = this;
      return Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        return Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof _this.$refs.formAcom != 'undefined')) {
                  _context.next = 5;
                  break;
                }
                _this.$refs.formAcom.map(function (item, index) {
                  item.validationForm();
                });
                return _context.abrupt("return", new Promise(function (resolve) {
                  // crea una nueva promesa
                  setTimeout(function () {
                    console.log('TabAcompaniantes - this.acompaniantes -> ', _this.acompaniantes);
                    console.log('TabAcompaniantes - this.acompaniantes.length -> ', _this.acompaniantes.length);
                    console.log('TabAcompaniantes - this.formularios.length -> ', _this.formularios.length);
                    console.log('TabAcompaniantes - this.acompaniantes.length == this.formularios.length -> ', _this.acompaniantes.length == _this.formularios.length);
                    resolve(_this.acompaniantes.length == _this.formularios.length ? _this.acompaniantes : false); // resuelve la promesa con el resultado
                  }, 50);
                }));
              case 5:
                return _context.abrupt("return", false);
              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    handleAgregar: function handleAgregar(index) {
      this.formularios.push({});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/TabDetalles.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/administracion/reservaciones/TabDetalles.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vue2_daterange_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-daterange-picker */ "./node_modules/vue2-daterange-picker/dist/vue2-daterange-picker.umd.min.js");
/* harmony import */ var vue2_daterange_picker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_daterange_picker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_daterange_picker_dist_vue2_daterange_picker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-daterange-picker/dist/vue2-daterange-picker.css */ "./node_modules/vue2-daterange-picker/dist/vue2-daterange-picker.css");
/* harmony import */ var vue2_daterange_picker_dist_vue2_daterange_picker_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_daterange_picker_dist_vue2_daterange_picker_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _currentComponents_customPerson_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @currentComponents/customPerson.vue */ "./resources/js/src/views/currentComponents/customPerson.vue");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");

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
    DateRangePicker: vue2_daterange_picker__WEBPACK_IMPORTED_MODULE_1___default.a,
    customPerson: _currentComponents_customPerson_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      locate: {
        direction: 'ltr',
        format: 'mm/dd/yyyy',
        separator: ' - ',
        applyLabel: 'Aplicar',
        cancelLabel: 'Cancelar',
        weekLabel: 'Sem',
        customRangeLabel: 'Rango Personalizado',
        daysOfWeek: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        monthNames: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        firstDay: 0
      },
      dateRange: {
        startDate: null,
        endDate: null
      }
    };
  },
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_4__["default"]],
  props: {
    reservacion: {
      type: Object,
      "default": {}
    }
  },
  watch: {
    'reservacion': {
      deep: true,
      handler: function handler(newVal, oldVal) {
        if (!this.fechasSonIguales(newVal.fechaInicio, oldVal.fechaInicio) || !this.fechasSonIguales(newVal.fechaFin, oldVal.fechaFin)) {
          this.updateDateRange();
        }
      }
    },
    'dateRange': {
      deep: true,
      handler: function handler(newVal, oldVal) {
        if (!this.fechasSonIguales(newVal.startDate, oldVal.startDate) || !this.fechasSonIguales(newVal.endDate, oldVal.endDate)) {
          console.log(newVal);
          this.$emit('changeReservacion', Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.reservacion), {}, {
            fechaInicio: this.formatoFechaYMD(newVal.startDate),
            fechaFin: this.formatoFechaYMD(newVal.endDate)
          }));
        }
      }
    }
  },
  beforeMount: function beforeMount() {
    console.log('beforeMount => this.reservacion', this.reservacion);
    var tmp = {};
    if (this.reservacion.fechaInicio) {
      tmp.startDate = new Date(this.reservacion.fechaInicio);
    }
    if (this.reservacion.fechaFin) {
      tmp.endDate = new Date(this.reservacion.fechaFin);
    }
    this.dateRange = Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, tmp);
  },
  methods: {
    fechasSonIguales: function fechasSonIguales(fecha1, fecha2) {
      return this.formatoFechaYMD(fecha1) === this.formatoFechaYMD(fecha2);
    },
    updateDateRange: function updateDateRange() {
      var tmp = {};
      if (this.reservacion.fechaInicio && !this.fechasSonIguales(this.dateRange.startDate, this.reservacion.fechaInicio)) {
        tmp.startDate = new Date(this.reservacion.fechaInicio);
      }
      if (this.reservacion.fechaFin && !this.fechasSonIguales(this.dateRange.endDate, this.reservacion.fechaFin)) {
        tmp.endDate = new Date(this.reservacion.fechaFin);
      }
      this.dateRange = Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.dateRange), tmp);
    },
    handleChangeReservacion: function handleChangeReservacion(data) {
      this.$emit('changeReservacion', data);
    },
    changeValue: function changeValue(data) {
      var payload = this.copyObject(this.reservacion);
      console.log(data);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/TabHabitaciones.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/administracion/reservaciones/TabHabitaciones.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apis_useCatalogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/apis/useCatalogo */ "./resources/js/src/apis/useCatalogo.js");
/* harmony import */ var _currentComponents_detailsRoom_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @currentComponents/detailsRoom.vue */ "./resources/js/src/views/currentComponents/detailsRoom.vue");
/* harmony import */ var _currentComponents_administracion_reservaciones_ExtraDetailsRoom_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @currentComponents/../administracion/reservaciones/ExtraDetailsRoom.vue */ "./resources/js/src/views/administracion/reservaciones/ExtraDetailsRoom.vue");
/* harmony import */ var _out_components_detallesHabitacion_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @out/components/detallesHabitacion.vue */ "./resources/js/src/views/out/components/detallesHabitacion.vue");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");





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
  data: function data() {
    return {
      habitaciones: [],
      dataActive: null
    };
  },
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_9__["default"]],
  components: {
    detallesHabitacion: _out_components_detallesHabitacion_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    extraDetailsRoom: _currentComponents_administracion_reservaciones_ExtraDetailsRoom_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    reservacion: {
      type: Object,
      "default": {}
    }
  },
  beforeMount: function beforeMount() {
    this.getHabitaciones();
  },
  methods: {
    handleIsSelected: function handleIsSelected() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var tmp = false;
      if (data != null) {
        tmp = this.buscarPorPropiedad(this.reservacion.habitaciones, 'id', data.id);
      }
      return tmp ? true : false;
    },
    handleSeleccionarHabitacion: function handleSeleccionarHabitacion(data) {
      console.log(data);
      var hbs = typeof this.reservacion.habitaciones != 'undefined' ? [].concat(Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.reservacion.habitaciones), [data]) : [data];
      this.$emit('changeReservacion', Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.reservacion), {}, {
        habitaciones: hbs
      }));
    },
    handleViewDetails: function handleViewDetails(data) {
      console.log('handleViewDetails');
      this.dataActive = this.copyObject(data);
      this.$emit('showButtons');
    },
    handleCancelViewDetails: function handleCancelViewDetails(data) {
      this.dataActive = null;
      this.$emit('showButtons');
    },
    getHabitaciones: function getHabitaciones() {
      var _this$reservacion$fec,
        _this$reservacion,
        _this$reservacion$fec2,
        _this$reservacion2,
        _this = this;
      var filtros = {
        fechaInicio: (_this$reservacion$fec = (_this$reservacion = this.reservacion) === null || _this$reservacion === void 0 ? void 0 : _this$reservacion.fechaInicio) !== null && _this$reservacion$fec !== void 0 ? _this$reservacion$fec : null,
        fechaFin: (_this$reservacion$fec2 = (_this$reservacion2 = this.reservacion) === null || _this$reservacion2 === void 0 ? void 0 : _this$reservacion2.fechaFin) !== null && _this$reservacion$fec2 !== void 0 ? _this$reservacion$fec2 : null
      };
      _apis_useCatalogo__WEBPACK_IMPORTED_MODULE_5__["default"].roomsAvailable({
        filtros: filtros
      }).then(function (response) {
        var tmp = response.data.data;
        tmp.map(function (item) {
          var _item$estatus$nombre, _item$estatus;
          item.estatus = Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(item.estatus) == 'object' ? (_item$estatus$nombre = (_item$estatus = item.estatus) === null || _item$estatus === void 0 ? void 0 : _item$estatus.nombre) !== null && _item$estatus$nombre !== void 0 ? _item$estatus$nombre : '' : '';
          item.camas = typeof item.camas != 'string' ? item.camas : JSON.parse(item.camas);
          item.amenidades = typeof item.amenidades != 'string' ? item.amenidades : JSON.parse(item.amenidades);
        });
        _this.habitaciones = _this.copyObject(tmp);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/TabPago.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/administracion/reservaciones/TabPago.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
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
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"]
  },
  data: function data() {
    return {
      showMessageConfirm: false
    };
  },
  mounted: function mounted() {},
  methods: {
    handleShowMessageConfirm: function handleShowMessageConfirm() {
      this.showMessageConfirm = true;
    },
    handlegoToReservaciones: function handlegoToReservaciones() {
      $emit('handleGoToCalendario');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/customPerson.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/currentComponents/customPerson.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/auth/utils */ "./resources/js/src/auth/utils.js");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");
/* harmony import */ var _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @currentComponents/FormFactory.vue */ "./resources/js/src/views/currentComponents/FormFactory.vue");
/* harmony import */ var _currentComponents_customSelect_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @currentComponents/customSelect.vue */ "./resources/js/src/views/currentComponents/customSelect.vue");
/* harmony import */ var _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/apis/usePeticiones */ "./resources/js/src/apis/usePeticiones.js");

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
  name: 'customPerson',
  components: {
    customSelect: _currentComponents_customSelect_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    FormFactory: _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_2__["default"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BModal"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      viewForm: false,
      person: null,
      config: {
        classContainer: 'col-lg-4 col-md-6 col-12',
        type: 'input-select',
        name: 'tipo de usuario',
        value: 'tipoUsuario',
        label: 'Tipo de usuario',
        rules: 'required',
        catalogo: 'customPersons'
      },
      formSchema: [{
        classContainer: ' col-md-4 col-lg-4 col-12 ',
        type: 'input-text',
        name: 'nombre',
        value: 'nombre',
        label: 'Nombre(s)',
        placeholder: 'Introduce un nombre',
        rules: 'required'
      }, {
        classContainer: ' col-md-4 col-lg-4 col-12 ',
        type: 'input-text',
        name: 'primerApellido',
        value: 'primerApellido',
        label: 'Primer apellido',
        rules: 'required'
      }, {
        classContainer: ' col-md-4 col-lg-4 col-12 ',
        type: 'input-text',
        name: 'segundoApellido',
        value: 'segundoApellido',
        label: 'Segundo apellido'
      }, {
        classContainer: 'col-lg-6 col-md-6 col-12',
        type: 'email',
        name: 'correo',
        value: 'correo',
        prefixIcon: 'MailIcon',
        rules: 'required|email',
        label: 'Correo electronico',
        placeholder: 'Introduce un correo electronico'
      }, {
        classContainer: 'col-lg-6 col-md-6 col-12',
        type: 'input-phone',
        name: 'telefono',
        value: 'telefono',
        label: 'Telefono',
        rules: 'required',
        placeholder: 'Introduce un telefono celular'
      }]
    };
  },
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_6__["default"]],
  props: {
    label: {
      type: String,
      "default": '¿Quien reserva?'
    },
    addTxt: {
      type: String,
      "default": null
    },
    data: {
      type: Object,
      "default": {}
    }
  },
  watch: {
    person: function person(value) {
      console.log('customPersona -> ', value);
      if (value != null) {
        this.$emit('changeReservacion', Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.reservacion), {}, {
          person: value,
          person_id: value.id
        }));
      }
    }
  },
  beforeMount: function beforeMount() {
    if (this.data.person) {
      this.person = Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.data.person);
    }
  },
  methods: {
    changePerson: function changePerson() {
      this.person = null;
    },
    changeValue: function changeValue(data) {
      console.log(data);
      this.person = data.value;
    },
    handleViewForm: function handleViewForm() {
      this.viewForm = true;
    },
    handleSubmit: function handleSubmit(data) {
      var _this = this;
      var payload = data;
      payload.accion = 1;
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_9__["default"].administrarPersonas({
        'payload': payload
      }).then(function (response) {
        _this.messageSweet({
          message: response.data.message,
          icon: response.data.result ? 'success' : 'error'
        });
        if (response.data.result) {
          _this.viewForm = false;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    handleCancelar: function handleCancelar() {
      this.person = null;
      this.viewForm = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/detailsRoom.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/currentComponents/detailsRoom.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");
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
  name: 'detailsRoomComponent',
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"]
  },
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_2__["default"]],
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      showButton: true,
      camas: [],
      amenidades: []
    };
  },
  props: {
    habitacion: {
      type: Object,
      "default": null
    }
  },
  watch: {},
  computed: {},
  created: function created() {},
  beforeMount: function beforeMount() {
    if (this.habitacion != null) {
      this.camas = typeof this.habitacion.camas == 'string' ? JSON.parse(this.habitacion.camas) : this.habitacion.camas;
      this.amenidades = typeof this.habitacion.amenidades == 'string' ? JSON.parse(this.habitacion.amenidades) : this.habitacion.amenidades;
    }
  },
  methods: {
    handleModal: function handleModal() {
      this.$refs['my-modal'].show();
    },
    handleSeleccionar: function handleSeleccionar() {
      this.showButton = false;
      this.$emit('seleccionar', this.habitacion);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _out_components_linksCSS_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @out/components/linksCSS.vue */ "./resources/js/src/views/out/components/linksCSS.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/apis/usePeticiones */ "./resources/js/src/apis/usePeticiones.js");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");

var _components;
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
  name: 'Habitaciones',
  components: (_components = {
    LinkCSS: _out_components_linksCSS_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BButton"],
    BNavbar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BNavbar"],
    BNavbarBrand: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BNavbarBrand"],
    BNavbarToggle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BNavbarToggle"],
    BNavbarNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BNavbarNav"],
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BNavItem"],
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCollapse"],
    BNavForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BNavForm"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormInput"]
  }, Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BButton", bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BButton"]), Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BNavItemDropdown", bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BNavItemDropdown"]), Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BDropdownItem", bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BDropdownItem"]), _components),
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_4__["default"]],
  beforeMount: function beforeMount() {},
  props: {
    habitacion: {
      type: Object,
      "default": null
    },
    isSelected: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      // item:{
      //     "id":6,
      //     "nombre":"Suite Junior",
      //     "descripcion":"Suite privada de 16 m2  que cuenta con baño integrado, Wifi gratis, TV de pantalla plana y aire condicionado.",
      //     "tarifa":"$ 1,500",
      //     "estatus_id":3,
      //     "amenidades":[
      //         {"nombre":"Toda la unidad está situada en la planta baja"},
      //         {"nombre":"Armario o closet"},
      //         {"nombre":"Aire acondicionado"},
      //         {"nombre":"Canales vía satélite"},
      //         {"nombre":"TV de pantalla plana"},
      //         {"nombre":"Enchufe cerca de la cama"},
      //         {"nombre":"Perchero para ropa"},
      //         {"nombre":"Habitación individual con aire acondicionado"},
      //         {"nombre":"Artículos de higiene gratis"},
      //         {"nombre":"Papel de baño"}
      //     ],
      //     "camas":{
      //         "camaKing":"0",
      //         "camaQueen":"0",
      //         "camaMatrimonial":"1",
      //         "camaIndividual":"0"
      //     },
      //     "puedeFumar":0,
      //     "created_at":"2023-06-04T05:45:50.000000Z",
      //     "updated_at":"2023-06-04T06:03:55.000000Z",
      //     "deleted_at":null,
      //     "capacidad":3,
      //     "estatus":"Disponible"
      // },
      showModal: false,
      activeRoom: {},
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    };
  },
  watch: {
    showModal: function showModal(value) {
      if (value) {
        this.$refs['my-modal'].show();
      } else {
        this.$refs['my-modal'].hide();
      }
    }
  },
  mounted: function mounted() {
    // Escuchamos el evento de cambio de tamaño de ventana
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy: function beforeDestroy() {
    // Eliminamos el evento de cambio de tamaño de ventana
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    // handleShowModal(data){
    //     console.log(data)
    //     this.activeRoom = data
    //     this.showModal = true;
    // },
    handleShowModal: function handleShowModal(data) {
      this.$emit('viewDetails', this.habitacion);
    },
    handleSelecionar: function handleSelecionar(data) {
      this.$emit('seleccionar', this.habitacion);
    },
    resetModal: function resetModal() {
      this.showModal = false;
      this.activeRoom = {};
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=style&index=0&id=4d694aac&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=style&index=0&id=4d694aac&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.modal-dialog .modal-md[data-v-4d694aac] {\n\n    max-width: 1000px !important;\n}\n.modalGrande[data-v-4d694aac] {\n\n    max-width: 800 !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/ExtraDetailsRoom.vue?vue&type=template&id=a2966092&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/administracion/reservaciones/ExtraDetailsRoom.vue?vue&type=template&id=a2966092& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.extraInformation != null
    ? _c("div", { staticClass: "col-12  d-flex flex-wrap p-0 m-0" }, [
        _c("div", { staticClass: "col-4" }, [
          _c("img", {
            staticClass: "img-fluid",
            attrs: {
              src: __webpack_require__(/*! @/assets/images/habitaciones/default.jpg */ "./resources/js/src/assets/images/habitaciones/default.jpg"),
              alt: "",
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-8 m-0 p-0" }, [
          _c(
            "div",
            { staticClass: "col d-flex  align-items-end" },
            [
              _c("feather-icon", {
                staticClass:
                  "cursor-pointer text-danger font-weight-bolder ml-auto",
                attrs: { size: "18", icon: "XIcon" },
                on: { click: _vm.handleCancel },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c("h3", { staticClass: "mb-0" }, [
            _vm._v(_vm._s(_vm.extraInformation.nombre)),
          ]),
          _vm._v(" "),
          _c("h3", { staticClass: "mb-0" }, [
            _vm._v(_vm._s(_vm.extraInformation.tarifa)),
          ]),
          _vm._v(" "),
          _c("h6", { staticClass: "mb-0" }, [
            _vm._v(_vm._s(_vm.extraInformation.capacidad) + " personas"),
          ]),
          _vm._v(" "),
          _c("h6", { staticClass: "mb-0" }, [
            _vm._v(
              _vm._s(_vm.extraInformation.puedeFumar ? "Si " : "No ") +
                "se puede fumar"
            ),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-0" }, [
            _vm._v(_vm._s(_vm.extraInformation.descripcion)),
          ]),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "col-12 p-0 m-0 mb-0 font-weight-bold" }, [
          _vm._v("Amenidades:"),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 d-flex flex-wrap p-0 m-0" },
          _vm._l(_vm.extraInformation.amenidades, function (item, index) {
            return _c("p", { staticClass: "col-12 col-lg-6 p-0 m-0 fw-bold" }, [
              _c("small", [_vm._v(_vm._s(item.nombre))]),
            ])
          }),
          0
        ),
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/StepsReservacion.vue?vue&type=template&id=1380da00&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/administracion/reservaciones/StepsReservacion.vue?vue&type=template&id=1380da00& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "b-card",
        { staticClass: "p-2" },
        [
          _c("b-card-title", [_vm._v("Registro de reservación")]),
          _vm._v(" "),
          _c(
            "b-card-body",
            { staticClass: "p-0 m-0" },
            [
              _c(
                "form-wizard",
                {
                  ref: "wizard",
                  staticClass: "steps-transparent m-0 p-0",
                  attrs: {
                    hideButtons: true,
                    title: null,
                    subtitle: null,
                    startIndex: _vm.step,
                    "disable-navigation": true,
                    "finish-button-text": "Guardar",
                    "back-button-text": "Anterior",
                    "next-button-text": "Siguiente",
                  },
                },
                [
                  _c(
                    "tab-content",
                    {
                      attrs: {
                        title: "Detalles de reservación",
                        icon: "feather icon-calendar",
                      },
                    },
                    [
                      _vm.step == 0
                        ? _c("tabDetalles", {
                            attrs: { reservacion: _vm.reservacion },
                            on: {
                              changeReservacion: _vm.handleChangeReservacion,
                            },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "tab-content",
                    {
                      attrs: {
                        title: "Habitaciones",
                        icon: "feather icon-airplay",
                      },
                    },
                    [
                      _vm.step == 1
                        ? _c("TabHabitaciones", {
                            attrs: { reservacion: _vm.reservacion },
                            on: {
                              changeReservacion: _vm.handleChangeReservacion,
                              showButtons: function ($event) {
                                _vm.showButtonsActions = !_vm.showButtonsActions
                              },
                            },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "tab-content",
                    {
                      attrs: {
                        title: "Acompañantes",
                        icon: "feather icon-users",
                      },
                    },
                    [
                      _vm.step == 2
                        ? _c("TabAcompañantes", {
                            ref: "tabAcompaniantes",
                            attrs: { reservacion: _vm.reservacion },
                            on: {
                              changeReservacion: _vm.handleChangeReservacion,
                            },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "tab-content",
                    {
                      attrs: {
                        title: "Pago",
                        icon: "feather icon-credit-card",
                      },
                    },
                    [
                      _vm.step == 3
                        ? _c("TabPago", {
                            attrs: { reservacion: _vm.reservacion },
                            on: {
                              changeReservacion: _vm.handleChangeReservacion,
                              handleGoToCalendario: function () {
                                _vm.$emit("handleCancel")
                              },
                            },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _vm.showButtonsActions
                ? _c(
                    "div",
                    { staticClass: "col-12 d-flex justify-content-between" },
                    [
                      _vm.step != 0
                        ? _c(
                            "b-button",
                            {
                              staticClass: "mr-auto",
                              attrs: {
                                size: "sm",
                                variant: "outline-secondary",
                              },
                              on: { click: _vm.prevStep },
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "mr-25 align-middle" },
                                [_vm._v("Atrás")]
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.step < 3
                        ? _c(
                            "b-button",
                            {
                              staticClass: "ml-auto",
                              attrs: { size: "sm", variant: "primary" },
                              on: { click: _vm.nextStep },
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "mr-25 align-middle" },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.step < 3 ? "Siguiente" : "Reservar"
                                    )
                                  ),
                                ]
                              ),
                            ]
                          )
                        : _vm._e(),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
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

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/TabAcompañantes.vue?vue&type=template&id=01454930&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/administracion/reservaciones/TabAcompañantes.vue?vue&type=template&id=01454930& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "col-12 m-0 p-0" },
    [
      _c(
        "div",
        {
          staticClass:
            "col-12 d-flex flex-wrap justify-content-between pb-1 mb-2",
          staticStyle: { "border-bottom": "1px solid gray" },
        },
        [
          _c("h3", { staticClass: "my-auto" }, [_vm._v("Acompañantes:")]),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "b-button",
                {
                  staticClass: "my-auto fw-bolder",
                  attrs: { size: "sm", variant: "primary" },
                  on: { click: _vm.handleAgregar },
                },
                [
                  _c("feather-icon", {
                    attrs: { icon: "PlusIcon", size: "16" },
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Agregar")]),
                ],
                1
              ),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _vm.formularios.length == 0
        ? _c("h3", { staticClass: "col-12 text-center font-weight-bolder" }, [
            _vm._v("No hay acompañantes registrados."),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.formularios, function (formulario, index) {
        return _c(
          "div",
          {
            key: "Form#" + index,
            ref: "divForm",
            refInFor: true,
            staticClass: "mb-2",
          },
          [
            _c(
              "div",
              { staticClass: "col-12 d-flex justify-content-between" },
              [
                _c("p", {}, [
                  _vm._v("Acompañante # " + _vm._s(index + 1) + ":"),
                ]),
                _vm._v(" "),
                _c("feather-icon", {
                  staticClass:
                    "cursor-pointer text-danger font-weight-bolder mmb-4",
                  attrs: { size: "18", icon: "XIcon" },
                  on: {
                    click: function ($event) {
                      return _vm.handleEliminar(index)
                    },
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c("FormFactory", {
              ref: "formAcom",
              refInFor: true,
              attrs: {
                classForm: " col-12 p-0 m-0 ",
                data: formulario,
                btnsAccion: false,
                schema: _vm.formSchema,
              },
              on: {
                formExport: function (data) {
                  _vm.handleSubmit(data, index)
                },
              },
            }),
          ],
          1
        )
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/TabDetalles.vue?vue&type=template&id=79e3f3d7&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/administracion/reservaciones/TabDetalles.vue?vue&type=template&id=79e3f3d7& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        { staticClass: "col" },
        [
          _c("p", { staticClass: "pb-0 mb-0 font-weight-bolder text-black" }, [
            _vm._v("Fecha de Hospedaje:"),
          ]),
          _vm._v(" "),
          _c("date-range-picker", {
            staticClass: "col-12 p-0 m-0 text-center",
            attrs: {
              ranges: false,
              "locale-data": _vm.locate,
              "min-date": new Date(),
            },
            model: {
              value: _vm.dateRange,
              callback: function ($$v) {
                _vm.dateRange = $$v
              },
              expression: "dateRange",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("customPerson", {
        attrs: { addTxt: "Nuevo huesped", data: _vm.reservacion },
        on: { changeReservacion: _vm.handleChangeReservacion },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/TabHabitaciones.vue?vue&type=template&id=9e35734a&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/administracion/reservaciones/TabHabitaciones.vue?vue&type=template&id=9e35734a& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "d-flex flex-wrap justify-content-between" },
    [
      _vm.dataActive != null
        ? [
            _c("extraDetailsRoom", {
              attrs: { extraInformation: _vm.dataActive },
              on: { cancel: _vm.handleCancelViewDetails },
            }),
          ]
        : _vm._l(_vm.habitaciones, function (habitacion, index) {
            return _c("detallesHabitacion", {
              key: "hab" + index,
              staticClass: "col-lg-4 col-md-6 col-sm-12",
              attrs: {
                habitacion: habitacion,
                isSelected: _vm.handleIsSelected(habitacion),
              },
              on: {
                seleccionar: _vm.handleSeleccionarHabitacion,
                viewDetails: _vm.handleViewDetails,
              },
            })
          }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/TabPago.vue?vue&type=template&id=3e552794&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/administracion/reservaciones/TabPago.vue?vue&type=template&id=3e552794& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.showMessageConfirm
      ? _c("div", { staticClass: "col-10 my-auto mx-auto" }, [
          _c(
            "h3",
            { staticClass: "col-12 text-center font-weigth-bolder mb-3" },
            [_vm._v("¡Tu lugar está apartado y esperando por ti.!")]
          ),
          _vm._v(" "),
          _c("h6", { staticClass: "col-12 font-weigth-bold mb-1" }, [
            _vm._v(
              "Recibirás una confirmación de tu reservación. Si necesitas ayuda o tienes alguna pregunta, estamos aquí para asistirte en todo momento."
            ),
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12 d-flex justify-content-between" },
            [
              _c(
                "b-button",
                {
                  staticClass: "my-auto fw-bolder",
                  attrs: { size: "sm", variant: "secondary" },
                  on: { click: _vm.handlegoToReservaciones },
                },
                [
                  _c("feather-icon", {
                    attrs: { icon: "HomeIcon", size: "16" },
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Ir al inicio")]),
                ],
                1
              ),
            ],
            1
          ),
        ])
      : _c("div", { staticClass: "col-10 my-auto mx-auto" }, [
          _c(
            "h3",
            { staticClass: "col-12 text-center font-weigth-bolder mb-3" },
            [_vm._v("¡Estás a un paso de asegurar tu aventura con nosotros!")]
          ),
          _vm._v(" "),
          _c("h6", { staticClass: "col-12 font-weigth-bold mb-1" }, [
            _vm._v(
              "Tu reservación está casi lista, solo falta definir cómo deseas realizar el pago para finalizar el proceso. Aquí tienes dos opciones fáciles y seguras para elegir:"
            ),
          ]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("h6", { staticClass: "col-12 mb-1" }, [
            _vm._v(
              "Selecciona la opción que te convenga y sigue los pasos para activar tu reservación. ¡No te llevará más que un momento!"
            ),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12 d-flex justify-content-between" },
            [
              _c(
                "b-button",
                {
                  staticClass: "my-auto fw-bolder",
                  attrs: { size: "sm", variant: "success", disabled: "" },
                },
                [
                  _c("feather-icon", {
                    attrs: { icon: "CreditCardIcon", size: "16" },
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Pagar en linea")]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "my-auto fw-bolder",
                  attrs: { size: "sm", variant: "success" },
                  on: {
                    click: function () {
                      _vm.handleShowMessageConfirm()
                    },
                  },
                },
                [
                  _c("feather-icon", {
                    attrs: { icon: "CreditCardIcon", size: "16" },
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Pagar en recepción")]),
                ],
                1
              ),
            ],
            1
          ),
        ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "col-12 mb-1" }, [
      _c("strong", [
        _vm._v("¡Nos emociona ser parte de tu próxima experiencia!"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "col-12 mb-1" }, [
      _c("strong", [_vm._v("Pago en Línea:")]),
      _vm._v(
        " Completa tu pago ahora con solo unos clics. Es rápido, seguro y podrás confirmar tu reservación de inmediato."
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "col-12 mb-2" }, [
      _c("strong", [_vm._v("Pago en Recepción:")]),
      _vm._v(
        " Prefieres el contacto humano? No hay problema, puedes pagar al llegar directamente en nuestra recepción."
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/customPerson.vue?vue&type=template&id=2f50d950&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/currentComponents/customPerson.vue?vue&type=template&id=2f50d950& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
      !_vm.viewForm
        ? _c("div", [
            _vm.person == null
              ? _c(
                  "div",
                  { staticClass: " col d-flex align-items-end flex-wrap" },
                  [
                    _c("customSelect", {
                      staticClass: "ww-100A",
                      attrs: {
                        input: Object.assign({}, _vm.config, {
                          label: _vm.label,
                        }),
                        formValue: _vm.person,
                      },
                      on: { changeData: _vm.changeValue },
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "ww-100 text-center pp-custom d-flex align-items-center justify-content-center",
                        staticStyle: { height: "100%" },
                        on: { click: _vm.handleViewForm },
                      },
                      [
                        _vm.addTxt != null
                          ? [
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "ripple",
                                      rawName: "v-ripple.400",
                                      value: "rgba(255, 255, 255, 0.15)",
                                      expression: "'rgba(255, 255, 255, 0.15)'",
                                      modifiers: { 400: true },
                                    },
                                  ],
                                  staticClass: "col btn btn-icon",
                                  attrs: { variant: "outline-secondary" },
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(_vm.addTxt) +
                                      "\n                    "
                                  ),
                                ]
                              ),
                            ]
                          : [
                              _c(
                                "b-button",
                                {
                                  staticClass: "pp-custom m-0 rounded-circle",
                                  staticStyle: {
                                    "margin-bottom": "10px!important",
                                  },
                                  attrs: { variant: "outline-primary" },
                                },
                                [
                                  _c("feather-icon", {
                                    staticClass:
                                      "text-primary font-weight-bold stroke-current",
                                    attrs: { icon: "PlusIcon", size: "15" },
                                  }),
                                ],
                                1
                              ),
                            ],
                      ],
                      2
                    ),
                  ],
                  1
                )
              : _c("div", [
                  _c(
                    "div",
                    { staticClass: "d-flex flex-wrap co-12 mt-1" },
                    [
                      _c(
                        "p",
                        {
                          staticClass:
                            "col col-11 font-weight-bolder text-black mmb-4",
                        },
                        [_vm._v("¿Quien registra?:")]
                      ),
                      _vm._v(" "),
                      _c("feather-icon", {
                        staticClass:
                          "cursor-pointer text-danger font-weight-bolder mmb-4",
                        attrs: { size: "18", icon: "XIcon" },
                        on: {
                          click: function () {
                            _vm.person = null
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass:
                            "col col-12 font-weight-bolder text-black mmb-2",
                        },
                        [
                          _vm._v("Nombre: "),
                          _c("span", { staticClass: "font-weight-normal" }, [
                            _vm._v(_vm._s(_vm.person.nombre)),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass:
                            "col col-6 font-weight-bolder text-black",
                        },
                        [
                          _vm._v("Correo electronico: "),
                          _c("span", { staticClass: "font-weight-normal" }, [
                            _vm._v(_vm._s(_vm.person.correo)),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass:
                            "col col-6 font-weight-bolder text-black",
                        },
                        [
                          _vm._v("Telefono: "),
                          _c("span", { staticClass: "font-weight-normal" }, [
                            _vm._v(_vm._s(_vm.person.telefono)),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ]),
          ])
        : _c("FormFactory", {
            ref: "formPeople",
            attrs: { classForm: " col-12 p-0 m-0 ", schema: _vm.formSchema },
            on: { formExport: _vm.handleSubmit, cancelar: _vm.handleCancelar },
          }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/detailsRoom.vue?vue&type=template&id=229e5883&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/currentComponents/detailsRoom.vue?vue&type=template&id=229e5883& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
      _c(
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
          _c("div", { staticClass: "col-12 p-0" }, [
            _c(
              "div",
              {
                staticClass:
                  " col-12 d-flex flex-wrap justify-content-between p-0",
              },
              [
                _c("div", { staticClass: "mb-1 col-6 p-0" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        " p-0 col-12 d-flex flex-wrap justify-content-between",
                    },
                    [
                      _c("h3", { staticClass: "my-auto" }, [
                        _vm._v("Amenidades:"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "pt-0" }, [
                    _vm.amenidades.length == 0
                      ? _c(
                          "h4",
                          { staticClass: "p-0 col-12 text-center fw-bolder" },
                          [_vm._v("No hay amenidades registradas.")]
                        )
                      : _c(
                          "div",
                          { staticClass: "p-0 col-12 " },
                          _vm._l(_vm.amenidades, function (amenidad, index) {
                            return _c(
                              "div",
                              {
                                key: index + "amenidad",
                                staticClass: "d-flex flex-wrap p-0 col-12 ",
                              },
                              [
                                _c("div", { staticClass: "pp-custom col-12" }, [
                                  _c(
                                    "p",
                                    { staticClass: "fw-bolder p-0 m-0" },
                                    [_vm._v(_vm._s(amenidad.nombre))]
                                  ),
                                ]),
                              ]
                            )
                          }),
                          0
                        ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-1 col-6 p-0" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        " col-12 d-flex flex-wrap justify-content-between",
                    },
                    [_c("h3", { staticClass: "my-auto" }, [_vm._v("Camas:")])]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex flex-wrap co-12 mt-1" }, [
                    _c(
                      "p",
                      {
                        staticClass:
                          "col col-12 font-weight-bolder text-black mmb-2",
                      },
                      [
                        _vm._v("Cama King Size:   "),
                        _c("span", { staticClass: "font-weight-normal" }, [
                          _vm._v(_vm._s(_vm.camas.camaKing)),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "col col-12 font-weight-bolder text-black mmb-2",
                      },
                      [
                        _vm._v("Cama Queen Size:  "),
                        _c("span", { staticClass: "font-weight-normal" }, [
                          _vm._v(_vm._s(_vm.camas.camaQueen)),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "col col-12 font-weight-bolder text-black mmb-2",
                      },
                      [
                        _vm._v("Cama matrimonial: "),
                        _c("span", { staticClass: "font-weight-normal" }, [
                          _vm._v(_vm._s(_vm.camas.camaMatrimonial)),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "col col-12 font-weight-bolder text-black mmb-2",
                      },
                      [
                        _vm._v("Cama individual:  "),
                        _c("span", { staticClass: "font-weight-normal" }, [
                          _vm._v(_vm._s(_vm.camas.camaIndividual)),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("b-card", { staticClass: "p-1", attrs: { "bg-variant": "light" } }, [
        _c("div", { staticClass: "d-flex flex-wrap col-12 m-0 p-0" }, [
          _c(
            "p",
            {
              staticClass:
                " m-0 p-0 col-12 font-weight-bolder text-black mmb-2",
            },
            [
              _vm._v("Nombre: "),
              _c("span", { staticClass: "font-weight-normal" }, [
                _vm._v(_vm._s(_vm.habitacion.nombre)),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass:
                " m-0 p-0 col-12 font-weight-bolder text-black mmb-2",
            },
            [
              _vm._v("Capacidad: "),
              _c("span", { staticClass: "font-weight-normal" }, [
                _vm._v(
                  _vm._s(_vm.habitacion.capacidad) +
                    " " +
                    _vm._s(
                      _vm.habitacion.capacidad == 1 ? "persona" : " personas"
                    )
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass:
                " m-0 p-0 col-12 font-weight-bolder text-black mmb-2",
            },
            [
              _vm._v("Tarifa: "),
              _c("span", { staticClass: "font-weight-normal" }, [
                _vm._v(_vm._s(_vm.habitacion.tarifa)),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass:
                " m-0 p-0 col-12 font-weight-bolder text-black mmb-2",
            },
            [_vm._v("¿Se puede fumar?:")]
          ),
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass:
                " m-0 p-0 col-12 font-weight-bolder text-black mmb-2",
            },
            [
              _c("span", { staticClass: "font-weight-normal" }, [
                _vm._v(
                  _vm._s(_vm.habitacion.puedeFumar ? "Si" : "No") +
                    " se puede fumar"
                ),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 p-0 m-0 d-flex justify-content-between" },
          [
            _c(
              "div",
              { staticClass: "d-flex align-items-center" },
              [
                _vm.showButton
                  ? _c(
                      "b-button",
                      {
                        staticClass: "btn-sm my-auto",
                        attrs: { variant: "relief-primary" },
                        on: { click: _vm.handleSeleccionar },
                      },
                      [
                        _vm._v(
                          "\n                    Seleccionar\n                "
                        ),
                      ]
                    )
                  : _vm._e(),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-button",
                  {
                    directives: [
                      {
                        name: "ripple",
                        rawName: "v-ripple.400",
                        value: "rgba(255, 255, 255, 0.15)",
                        expression: "'rgba(255, 255, 255, 0.15)'",
                        modifiers: { 400: true },
                      },
                    ],
                    staticClass: "btn-sm btn-icon rounded-circle",
                    attrs: { variant: "secondary" },
                    on: { click: _vm.handleModal },
                  },
                  [
                    _c("feather-icon", {
                      attrs: { size: "20", icon: "HelpCircleIcon" },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
          ]
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=template&id=4d694aac&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=template&id=4d694aac&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.habitacion != null
    ? _c(
        "div",
        {
          staticClass: "col wow fadeInUp",
          staticStyle: { "margin-bottom": "10px" },
          attrs: { "data-wow-delay": "0.1s" },
        },
        [
          _c("LinkCSS"),
          _vm._v(" "),
          _c("div", { staticClass: "package-item" }, [
            _c("div", { staticClass: "overflow-hidden" }, [
              _c("img", {
                staticClass: "img-fluid",
                attrs: {
                  src: __webpack_require__(/*! @/assets/images/habitaciones/default.jpg */ "./resources/js/src/assets/images/habitaciones/default.jpg"),
                  alt: "",
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex border-bottom" }, [
              _c(
                "small",
                { staticClass: "flex-fill text-center border-end py-2" },
                [
                  _c("i", { staticClass: "fas fa-smoking text-primary me-2" }),
                  _vm._v(
                    " " +
                      _vm._s(_vm.habitacion.puedeFumar ? "Si " : "No ") +
                      "se puede fumar"
                  ),
                ]
              ),
              _vm._v(" "),
              _c("small", { staticClass: "flex-fill text-center py-2" }, [
                _c("i", { staticClass: "fa fa-user text-primary me-2" }),
                _vm._v(" " + _vm._s(_vm.habitacion.capacidad) + " personas"),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-center p-4" }, [
              _c("h3", { staticClass: "mb-0" }, [
                _vm._v(_vm._s(_vm.habitacion.nombre)),
              ]),
              _vm._v(" "),
              _c("h3", { staticClass: "mb-0" }, [
                _vm._v(_vm._s(_vm.habitacion.tarifa)),
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.habitacion.descripcion))]),
              _vm._v(" "),
              _c("div", { staticClass: "d-flex justify-content-center mb-1" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-secondary px-3 border-end",
                    staticStyle: { "border-radius": "30px" },
                    on: {
                      click: function ($event) {
                        return _vm.handleShowModal(_vm.habitacion)
                      },
                    },
                  },
                  [_vm._v("Más información")]
                ),
              ]),
              _vm._v(" "),
              !this.isSelected
                ? _c(
                    "div",
                    { staticClass: "d-flex justify-content-center mb-2" },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-primary px-3 border-end",
                          staticStyle: { "border-radius": "30px" },
                          on: {
                            click: function ($event) {
                              return _vm.handleSelecionar(_vm.habitacion)
                            },
                          },
                        },
                        [_vm._v("Seleccionar")]
                      ),
                    ]
                  )
                : _vm._e(),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              ref: "my-modal",
              staticClass: " modal-lg",
              attrs: {
                "hide-footer": "",
                "ok-only": "",
                "no-close-on-backdrop": "",
                title:
                  typeof _vm.habitacion.nombre != "undefined"
                    ? "Detalles de " + _vm.habitacion.nombre
                    : "",
              },
              on: { hidden: _vm.resetModal },
            },
            [
              _c("div", { staticClass: "col-12  d-flex flex-wrap p-0 m-0" }, [
                _c("div", { staticClass: "col-4" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src: __webpack_require__(/*! @/assets/images/habitaciones/default.jpg */ "./resources/js/src/assets/images/habitaciones/default.jpg"),
                      alt: "",
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-8 m-0 p-0" }, [
                  _c("h3", { staticClass: "mb-0" }, [
                    _vm._v(_vm._s(_vm.habitacion.nombre)),
                  ]),
                  _vm._v(" "),
                  _c("h3", { staticClass: "mb-0" }, [
                    _vm._v(_vm._s(_vm.habitacion.tarifa)),
                  ]),
                  _vm._v(" "),
                  _c("h6", { staticClass: "mb-0" }, [
                    _vm._v(_vm._s(_vm.habitacion.capacidad) + " personas"),
                  ]),
                  _vm._v(" "),
                  _c("h6", { staticClass: "mb-0" }, [
                    _vm._v(
                      _vm._s(_vm.habitacion.puedeFumar ? "Si " : "No ") +
                        "se puede fumar"
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-0" }, [
                    _vm._v(_vm._s(_vm.habitacion.descripcion)),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "col-12 p-0 m-0 mb-0 font-weight-bold" },
                  [_vm._v("Amenidades:")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-12 d-flex flex-wrap p-0 m-0" },
                  _vm._l(_vm.habitacion.amenidades, function (item, index) {
                    return _c(
                      "p",
                      { staticClass: "col-12 col-lg-6 p-0 m-0 fw-bold" },
                      [_c("small", [_vm._v(_vm._s(item.nombre))])]
                    )
                  }),
                  0
                ),
              ]),
            ]
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-3" }, [
      _c("small", { staticClass: "fa fa-star text-primary" }),
      _vm._v(" "),
      _c("small", { staticClass: "fa fa-star text-primary" }),
      _vm._v(" "),
      _c("small", { staticClass: "fa fa-star text-primary" }),
      _vm._v(" "),
      _c("small", { staticClass: "fa fa-star text-primary" }),
      _vm._v(" "),
      _c("small", { staticClass: "fa fa-star text-primary" }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=style&index=0&id=4d694aac&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=style&index=0&id=4d694aac&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./detallesHabitacion.vue?vue&type=style&index=0&id=4d694aac&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=style&index=0&id=4d694aac&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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

/***/ "./resources/js/src/views/administracion/reservaciones/ExtraDetailsRoom.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/administracion/reservaciones/ExtraDetailsRoom.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExtraDetailsRoom_vue_vue_type_template_id_a2966092___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExtraDetailsRoom.vue?vue&type=template&id=a2966092& */ "./resources/js/src/views/administracion/reservaciones/ExtraDetailsRoom.vue?vue&type=template&id=a2966092&");
/* harmony import */ var _ExtraDetailsRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExtraDetailsRoom.vue?vue&type=script&lang=js& */ "./resources/js/src/views/administracion/reservaciones/ExtraDetailsRoom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExtraDetailsRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExtraDetailsRoom_vue_vue_type_template_id_a2966092___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExtraDetailsRoom_vue_vue_type_template_id_a2966092___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/administracion/reservaciones/ExtraDetailsRoom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/administracion/reservaciones/ExtraDetailsRoom.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/administracion/reservaciones/ExtraDetailsRoom.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraDetailsRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExtraDetailsRoom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/ExtraDetailsRoom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraDetailsRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/administracion/reservaciones/ExtraDetailsRoom.vue?vue&type=template&id=a2966092&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/administracion/reservaciones/ExtraDetailsRoom.vue?vue&type=template&id=a2966092& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraDetailsRoom_vue_vue_type_template_id_a2966092___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExtraDetailsRoom.vue?vue&type=template&id=a2966092& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/ExtraDetailsRoom.vue?vue&type=template&id=a2966092&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraDetailsRoom_vue_vue_type_template_id_a2966092___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraDetailsRoom_vue_vue_type_template_id_a2966092___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/administracion/reservaciones/StepsReservacion.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/administracion/reservaciones/StepsReservacion.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StepsReservacion_vue_vue_type_template_id_1380da00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepsReservacion.vue?vue&type=template&id=1380da00& */ "./resources/js/src/views/administracion/reservaciones/StepsReservacion.vue?vue&type=template&id=1380da00&");
/* harmony import */ var _StepsReservacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StepsReservacion.vue?vue&type=script&lang=js& */ "./resources/js/src/views/administracion/reservaciones/StepsReservacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StepsReservacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StepsReservacion_vue_vue_type_template_id_1380da00___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StepsReservacion_vue_vue_type_template_id_1380da00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/administracion/reservaciones/StepsReservacion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/administracion/reservaciones/StepsReservacion.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/administracion/reservaciones/StepsReservacion.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StepsReservacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StepsReservacion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/StepsReservacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StepsReservacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/administracion/reservaciones/StepsReservacion.vue?vue&type=template&id=1380da00&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/administracion/reservaciones/StepsReservacion.vue?vue&type=template&id=1380da00& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepsReservacion_vue_vue_type_template_id_1380da00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StepsReservacion.vue?vue&type=template&id=1380da00& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/StepsReservacion.vue?vue&type=template&id=1380da00&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepsReservacion_vue_vue_type_template_id_1380da00___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepsReservacion_vue_vue_type_template_id_1380da00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/administracion/reservaciones/TabAcompañantes.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/administracion/reservaciones/TabAcompañantes.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabAcompa_antes_vue_vue_type_template_id_01454930___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabAcompañantes.vue?vue&type=template&id=01454930& */ "./resources/js/src/views/administracion/reservaciones/TabAcompañantes.vue?vue&type=template&id=01454930&");
/* harmony import */ var _TabAcompa_antes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabAcompañantes.vue?vue&type=script&lang=js& */ "./resources/js/src/views/administracion/reservaciones/TabAcompañantes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TabAcompa_antes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TabAcompa_antes_vue_vue_type_template_id_01454930___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TabAcompa_antes_vue_vue_type_template_id_01454930___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/administracion/reservaciones/TabAcompañantes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/administracion/reservaciones/TabAcompañantes.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/administracion/reservaciones/TabAcompañantes.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabAcompa_antes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TabAcompañantes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/TabAcompañantes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabAcompa_antes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/administracion/reservaciones/TabAcompañantes.vue?vue&type=template&id=01454930&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/administracion/reservaciones/TabAcompañantes.vue?vue&type=template&id=01454930& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabAcompa_antes_vue_vue_type_template_id_01454930___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TabAcompañantes.vue?vue&type=template&id=01454930& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/TabAcompañantes.vue?vue&type=template&id=01454930&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabAcompa_antes_vue_vue_type_template_id_01454930___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabAcompa_antes_vue_vue_type_template_id_01454930___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/administracion/reservaciones/TabDetalles.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/administracion/reservaciones/TabDetalles.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabDetalles_vue_vue_type_template_id_79e3f3d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabDetalles.vue?vue&type=template&id=79e3f3d7& */ "./resources/js/src/views/administracion/reservaciones/TabDetalles.vue?vue&type=template&id=79e3f3d7&");
/* harmony import */ var _TabDetalles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabDetalles.vue?vue&type=script&lang=js& */ "./resources/js/src/views/administracion/reservaciones/TabDetalles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TabDetalles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TabDetalles_vue_vue_type_template_id_79e3f3d7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TabDetalles_vue_vue_type_template_id_79e3f3d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/administracion/reservaciones/TabDetalles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/administracion/reservaciones/TabDetalles.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/administracion/reservaciones/TabDetalles.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabDetalles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TabDetalles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/TabDetalles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabDetalles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/administracion/reservaciones/TabDetalles.vue?vue&type=template&id=79e3f3d7&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/administracion/reservaciones/TabDetalles.vue?vue&type=template&id=79e3f3d7& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabDetalles_vue_vue_type_template_id_79e3f3d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TabDetalles.vue?vue&type=template&id=79e3f3d7& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/TabDetalles.vue?vue&type=template&id=79e3f3d7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabDetalles_vue_vue_type_template_id_79e3f3d7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabDetalles_vue_vue_type_template_id_79e3f3d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/administracion/reservaciones/TabHabitaciones.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/administracion/reservaciones/TabHabitaciones.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabHabitaciones_vue_vue_type_template_id_9e35734a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabHabitaciones.vue?vue&type=template&id=9e35734a& */ "./resources/js/src/views/administracion/reservaciones/TabHabitaciones.vue?vue&type=template&id=9e35734a&");
/* harmony import */ var _TabHabitaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabHabitaciones.vue?vue&type=script&lang=js& */ "./resources/js/src/views/administracion/reservaciones/TabHabitaciones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TabHabitaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TabHabitaciones_vue_vue_type_template_id_9e35734a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TabHabitaciones_vue_vue_type_template_id_9e35734a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/administracion/reservaciones/TabHabitaciones.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/administracion/reservaciones/TabHabitaciones.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/administracion/reservaciones/TabHabitaciones.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabHabitaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TabHabitaciones.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/TabHabitaciones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabHabitaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/administracion/reservaciones/TabHabitaciones.vue?vue&type=template&id=9e35734a&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/administracion/reservaciones/TabHabitaciones.vue?vue&type=template&id=9e35734a& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabHabitaciones_vue_vue_type_template_id_9e35734a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TabHabitaciones.vue?vue&type=template&id=9e35734a& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/TabHabitaciones.vue?vue&type=template&id=9e35734a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabHabitaciones_vue_vue_type_template_id_9e35734a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabHabitaciones_vue_vue_type_template_id_9e35734a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/administracion/reservaciones/TabPago.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/administracion/reservaciones/TabPago.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabPago_vue_vue_type_template_id_3e552794___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabPago.vue?vue&type=template&id=3e552794& */ "./resources/js/src/views/administracion/reservaciones/TabPago.vue?vue&type=template&id=3e552794&");
/* harmony import */ var _TabPago_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabPago.vue?vue&type=script&lang=js& */ "./resources/js/src/views/administracion/reservaciones/TabPago.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TabPago_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TabPago_vue_vue_type_template_id_3e552794___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TabPago_vue_vue_type_template_id_3e552794___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/administracion/reservaciones/TabPago.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/administracion/reservaciones/TabPago.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/administracion/reservaciones/TabPago.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabPago_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TabPago.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/TabPago.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabPago_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/administracion/reservaciones/TabPago.vue?vue&type=template&id=3e552794&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/administracion/reservaciones/TabPago.vue?vue&type=template&id=3e552794& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabPago_vue_vue_type_template_id_3e552794___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TabPago.vue?vue&type=template&id=3e552794& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/administracion/reservaciones/TabPago.vue?vue&type=template&id=3e552794&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabPago_vue_vue_type_template_id_3e552794___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabPago_vue_vue_type_template_id_3e552794___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/currentComponents/customPerson.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/customPerson.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customPerson_vue_vue_type_template_id_2f50d950___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customPerson.vue?vue&type=template&id=2f50d950& */ "./resources/js/src/views/currentComponents/customPerson.vue?vue&type=template&id=2f50d950&");
/* harmony import */ var _customPerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customPerson.vue?vue&type=script&lang=js& */ "./resources/js/src/views/currentComponents/customPerson.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _customPerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _customPerson_vue_vue_type_template_id_2f50d950___WEBPACK_IMPORTED_MODULE_0__["render"],
  _customPerson_vue_vue_type_template_id_2f50d950___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/currentComponents/customPerson.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/currentComponents/customPerson.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/customPerson.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customPerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./customPerson.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/customPerson.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customPerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/currentComponents/customPerson.vue?vue&type=template&id=2f50d950&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/customPerson.vue?vue&type=template&id=2f50d950& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customPerson_vue_vue_type_template_id_2f50d950___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./customPerson.vue?vue&type=template&id=2f50d950& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/customPerson.vue?vue&type=template&id=2f50d950&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customPerson_vue_vue_type_template_id_2f50d950___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customPerson_vue_vue_type_template_id_2f50d950___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/currentComponents/detailsRoom.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/detailsRoom.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detailsRoom_vue_vue_type_template_id_229e5883___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailsRoom.vue?vue&type=template&id=229e5883& */ "./resources/js/src/views/currentComponents/detailsRoom.vue?vue&type=template&id=229e5883&");
/* harmony import */ var _detailsRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailsRoom.vue?vue&type=script&lang=js& */ "./resources/js/src/views/currentComponents/detailsRoom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detailsRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detailsRoom_vue_vue_type_template_id_229e5883___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detailsRoom_vue_vue_type_template_id_229e5883___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/currentComponents/detailsRoom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/currentComponents/detailsRoom.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/detailsRoom.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailsRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detailsRoom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/detailsRoom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailsRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/currentComponents/detailsRoom.vue?vue&type=template&id=229e5883&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/detailsRoom.vue?vue&type=template&id=229e5883& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detailsRoom_vue_vue_type_template_id_229e5883___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detailsRoom.vue?vue&type=template&id=229e5883& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/detailsRoom.vue?vue&type=template&id=229e5883&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detailsRoom_vue_vue_type_template_id_229e5883___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detailsRoom_vue_vue_type_template_id_229e5883___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/out/components/detallesHabitacion.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/out/components/detallesHabitacion.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detallesHabitacion_vue_vue_type_template_id_4d694aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detallesHabitacion.vue?vue&type=template&id=4d694aac&scoped=true& */ "./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=template&id=4d694aac&scoped=true&");
/* harmony import */ var _detallesHabitacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detallesHabitacion.vue?vue&type=script&lang=js& */ "./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _detallesHabitacion_vue_vue_type_style_index_0_id_4d694aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detallesHabitacion.vue?vue&type=style&index=0&id=4d694aac&scoped=true&lang=css& */ "./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=style&index=0&id=4d694aac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detallesHabitacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detallesHabitacion_vue_vue_type_template_id_4d694aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detallesHabitacion_vue_vue_type_template_id_4d694aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4d694aac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/out/components/detallesHabitacion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detallesHabitacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./detallesHabitacion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detallesHabitacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=style&index=0&id=4d694aac&scoped=true&lang=css&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=style&index=0&id=4d694aac&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detallesHabitacion_vue_vue_type_style_index_0_id_4d694aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./detallesHabitacion.vue?vue&type=style&index=0&id=4d694aac&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=style&index=0&id=4d694aac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detallesHabitacion_vue_vue_type_style_index_0_id_4d694aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detallesHabitacion_vue_vue_type_style_index_0_id_4d694aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detallesHabitacion_vue_vue_type_style_index_0_id_4d694aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detallesHabitacion_vue_vue_type_style_index_0_id_4d694aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=template&id=4d694aac&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=template&id=4d694aac&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detallesHabitacion_vue_vue_type_template_id_4d694aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./detallesHabitacion.vue?vue&type=template&id=4d694aac&scoped=true& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/components/detallesHabitacion.vue?vue&type=template&id=4d694aac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detallesHabitacion_vue_vue_type_template_id_4d694aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detallesHabitacion_vue_vue_type_template_id_4d694aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);