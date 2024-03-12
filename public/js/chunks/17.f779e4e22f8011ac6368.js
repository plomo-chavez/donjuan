(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/VistaUno.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/currentComponents/VistaUno.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_unshift_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.unshift.js */ "./node_modules/core-js/modules/es.array.unshift.js");
/* harmony import */ var core_js_modules_es_array_unshift_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unshift_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_6__["default"]],
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCard"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BDropdownItem"],
    BDropdownDivider: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BDropdownDivider"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BBadge"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormGroup"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormSelect"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BPagination"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BInputGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormInput"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BInputGroupAppend"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BButton"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardBody"]
  },
  data: function data() {
    return {
      perPage: 10,
      currentPage: 1,
      totalRows: 1,
      filter: null,
      filterOn: [],
      fields: [],
      /* eslint-disable global-require */

      /* eslint-disable global-require */
      status: [{
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied'
      }, {
        1: 'light-primary',
        2: 'light-success',
        3: 'light-danger',
        4: 'light-warning',
        5: 'light-info'
      }]
    };
  },
  computed: {
    sortOptions: function sortOptions() {
      // Create an options list from our fields
      return this.fields.filter(function (f) {
        return f.sortable;
      }).map(function (f) {
        return {
          text: f.label,
          value: f.key
        };
      });
    }
  },
  mounted: function mounted() {
    // Set the initial number of items
    this.totalRows = this.data.length;
    var tmp = this.copyObject(this.columnas);
    if (typeof this.config.cellActions == 'undefined' ? true : this.config.cellActions) {
      tmp.unshift({
        key: 'index',
        type: 'index',
        label: 'Index'
      });
    }
    if (typeof this.config.index == 'undefined' ? true : this.config.index) {
      tmp.unshift({
        key: 'actions',
        type: 'actions',
        label: 'Acciones'
      });
    }
    this.fields = this.copyObject(tmp);
  },
  props: {
    data: {
      type: Array,
      "default": []
    },
    columnas: {
      type: Array,
      "default": []
    },
    title: {
      type: String,
      "default": 'Titulo por defecto'
    },
    config: {
      type: Object,
      "default": function _default() {
        // Retorna el valor predeterminado del prop como un nuevo objeto
        return {
          showCellActions: true,
          cellActions: {
            btnEditar: true,
            btnEliminar: true
          },
          index: true,
          buscador: true,
          btnNuevo: true,
          btnFiltrar: true,
          btnOtros: null
        };
      }
    }
  },
  methods: {
    emitirInfo: function emitirInfo(metodo, info) {
      this.$emit(metodo, info);
    },
    onFiltered: function onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/VistaUno.vue?vue&type=template&id=6df42c1a&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/currentComponents/VistaUno.vue?vue&type=template&id=6df42c1a& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    {
      staticClass: "card-browser-states",
      attrs: { title: _vm.title, "no-body": "" },
    },
    [
      _c("b-card-body", { staticClass: "p-1 pb-0" }, [
        _c(
          "div",
          { staticClass: "d-flex justify-content-between  flex-wrap" },
          [
            _c(
              "div",
              [
                _vm.config.btnNuevo
                  ? _c(
                      "b-button",
                      {
                        on: {
                          click: function () {
                            _vm.$emit("mtdNuevo")
                          },
                        },
                      },
                      [_vm._v("Nuevo")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.config.btnFiltrar
                  ? _c(
                      "b-button",
                      {
                        on: {
                          click: function () {
                            _vm.$emit("mtdFiltrar")
                          },
                        },
                      },
                      [_vm._v("Filtrar")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                typeof _vm.config.btnOtros == "array"
                  ? _c(
                      "b-dropdown",
                      { attrs: { right: "", text: "Otras acciones" } },
                      [
                        _vm._l(_vm.config.btnOtros, function (btnOtro, index) {
                          return [
                            typeof btnOtro.function == "function"
                              ? _c(
                                  "b-dropdown-item",
                                  {
                                    key: index,
                                    on: {
                                      click: function ($event) {
                                        return btnOtro.function()
                                      },
                                    },
                                  },
                                  [_vm._v(_vm._s(btnOtro.label))]
                                )
                              : _vm._e(),
                          ]
                        }),
                      ],
                      2
                    )
                  : _vm._e(),
              ],
              1
            ),
            _vm._v(" "),
            _vm.config.buscador
              ? _c(
                  "b-form-group",
                  [
                    _c(
                      "b-input-group",
                      { attrs: { size: "sm" } },
                      [
                        _c("b-form-input", {
                          attrs: {
                            id: "filterInput",
                            type: "search",
                            placeholder: "Buscar ...",
                          },
                          model: {
                            value: _vm.filter,
                            callback: function ($$v) {
                              _vm.filter = $$v
                            },
                            expression: "filter",
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "b-input-group-append",
                          [
                            _c(
                              "b-button",
                              {
                                attrs: {
                                  disabled: !_vm.filter,
                                  variant: "primary",
                                },
                                on: {
                                  click: function ($event) {
                                    _vm.filter = ""
                                  },
                                },
                              },
                              [
                                _c("feather-icon", {
                                  attrs: { icon: "TrashIcon" },
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
                )
              : _vm._e(),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("b-table", {
        staticClass: "position-relative",
        attrs: {
          striped: "",
          hover: "",
          responsive: "",
          "per-page": _vm.perPage,
          "current-page": _vm.currentPage,
          items: _vm.data,
          fields: _vm.fields,
          filter: _vm.filter,
          "filter-included-fields": _vm.filterOn,
        },
        on: { filtered: _vm.onFiltered },
        scopedSlots: _vm._u(
          [
            _vm._l(_vm.fields, function (field, index, item) {
              return {
                key: "cell(" + field.key + ")",
                fn: function (data) {
                  return [
                    field.type === "switch"
                      ? _c(
                          "div",
                          [
                            data.item[field.key]
                              ? _c("feather-icon", {
                                  staticClass: "text-success",
                                  attrs: { size: "21", icon: "CheckIcon" },
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            !data.item[field.key]
                              ? _c("feather-icon", {
                                  staticClass: "text-danger",
                                  attrs: { size: "21", icon: "SlashIcon" },
                                })
                              : _vm._e(),
                          ],
                          1
                        )
                      : field.type === "index"
                      ? _c("div", [
                          _c("p", { staticClass: "fw-bolder" }, [
                            _vm._v(_vm._s(data.index + 1)),
                          ]),
                        ])
                      : field.type === "object"
                      ? _c(
                          "div",
                          _vm._l(data.item[field.key], function (item, key) {
                            return _c(
                              "div",
                              _vm._l(item, function (value) {
                                return _c(
                                  "small",
                                  { attrs: { clas: "text-sm" } },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.capitalize(key)) +
                                        ": " +
                                        _vm._s(value)
                                    ),
                                  ]
                                )
                              }),
                              0
                            )
                          }),
                          0
                        )
                      : field.type === "dateYMD"
                      ? _c("div", [
                          _c("small", [
                            _vm._v(
                              _vm._s(_vm.formatoFechaBD(data.item[field.key]))
                            ),
                          ]),
                        ])
                      : field.type === "money"
                      ? _c("div", [
                          _c("small", [_vm._v(_vm._s(data.item[field.key]))]),
                        ])
                      : field.type === "actions"
                      ? _c("div", { staticClass: "d-flex flex-wrap" }, [
                          (
                            typeof _vm.config.cellActions.btnEditar ==
                            "undefined"
                              ? true
                              : _vm.config.cellActions.btnEditar
                          )
                            ? _c(
                                "div",
                                {
                                  staticClass: "text-warning fw-bolder",
                                  staticStyle: { "padding-left": "5px" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.emitirInfo(
                                        "mdoEditar",
                                        data.item
                                      )
                                    },
                                  },
                                },
                                [
                                  _c("feather-icon", {
                                    attrs: { size: "16", icon: "EditIcon" },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          (
                            typeof _vm.config.cellActions.btnEliminar ==
                            "undefined"
                              ? true
                              : _vm.config.cellActions.btnEliminar
                          )
                            ? _c(
                                "div",
                                {
                                  staticClass: "text-danger fw-bolder",
                                  staticStyle: { "padding-left": "5px" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.emitirInfo(
                                        "mdoEliminar",
                                        data.item
                                      )
                                    },
                                  },
                                },
                                [
                                  _c("feather-icon", {
                                    attrs: { size: "16", icon: "Trash2Icon" },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ])
                      : field.type === "text"
                      ? _c("div", { staticClass: "d-flex flex-wrap" }, [
                          _c("p", [_vm._v(_vm._s(data.item[field.key]))]),
                        ])
                      : _vm._e(),
                  ]
                },
              }
            }),
          ],
          null,
          true
        ),
      }),
      _vm._v(" "),
      _c(
        "b-card-body",
        { staticClass: "d-flex justify-content-between flex-wrap pt-0" },
        [
          _c("div", [
            _c("p", [
              _vm._v(
                "\n            Mostrando " +
                  _vm._s((_vm.currentPage - 1) * _vm.perPage + 1) +
                  " - " +
                  _vm._s(
                    _vm.currentPage * _vm.perPage > _vm.totalRows
                      ? _vm.totalRows
                      : _vm.currentPage * _vm.perPage
                  ) +
                  " de " +
                  _vm._s(_vm.totalRows) +
                  " registros.\n        "
              ),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            [
              _c("b-pagination", {
                staticClass: "mb-0",
                attrs: {
                  "total-rows": _vm.totalRows,
                  "per-page": _vm.perPage,
                  "first-number": "",
                  "last-number": "",
                  "prev-class": "prev-item",
                  "next-class": "next-item",
                },
                scopedSlots: _vm._u([
                  {
                    key: "prev-text",
                    fn: function () {
                      return [
                        _c("feather-icon", {
                          attrs: { icon: "ChevronLeftIcon", size: "18" },
                        }),
                      ]
                    },
                    proxy: true,
                  },
                  {
                    key: "next-text",
                    fn: function () {
                      return [
                        _c("feather-icon", {
                          attrs: { icon: "ChevronRightIcon", size: "18" },
                        }),
                      ]
                    },
                    proxy: true,
                  },
                ]),
                model: {
                  value: _vm.currentPage,
                  callback: function ($$v) {
                    _vm.currentPage = $$v
                  },
                  expression: "currentPage",
                },
              }),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/apis/config/peticiones/apisPeticiones.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/apis/config/peticiones/apisPeticiones.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return apiPeticiones; });
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apisPeticionesConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apisPeticionesConfig */ "./resources/js/src/apis/config/peticiones/apisPeticionesConfig.js");






var apiPeticiones = /*#__PURE__*/function () {
  // Will be used by this service for making API calls

  // apisConfig <= Will be used by this service

  function apiPeticiones(axiosIns, jwtOverrideConfig) {
    Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, apiPeticiones);
    Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "axiosIns", null);
    Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apisConfig", Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _apisPeticionesConfig__WEBPACK_IMPORTED_MODULE_5__["default"]));
    this.axiosIns = axiosIns;
    this.apisConfig = Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.apisConfig), jwtOverrideConfig);
  }
  Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(apiPeticiones, [{
    key: "getUsuarios",
    value: function getUsuarios() {
      var _this$axiosIns;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return (_this$axiosIns = this.axiosIns).post.apply(_this$axiosIns, [this.apisConfig.apiUsuarios].concat(args));
    }
  }, {
    key: "adminUsuarios",
    value: function adminUsuarios() {
      var _this$axiosIns2;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return (_this$axiosIns2 = this.axiosIns).post.apply(_this$axiosIns2, [this.apisConfig.apiAdminUsuarios].concat(args));
    }
  }, {
    key: "getHabitaciones",
    value: function getHabitaciones() {
      var _this$axiosIns3;
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return (_this$axiosIns3 = this.axiosIns).post.apply(_this$axiosIns3, [this.apisConfig.apiGetHabitaciones].concat(args));
    }
  }, {
    key: "administrarHabitaciones",
    value: function administrarHabitaciones() {
      var _this$axiosIns4;
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return (_this$axiosIns4 = this.axiosIns).post.apply(_this$axiosIns4, [this.apisConfig.apiAdminHabitaciones].concat(args));
    }
  }, {
    key: "getPersonas",
    value: function getPersonas() {
      var _this$axiosIns5;
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      return (_this$axiosIns5 = this.axiosIns).post.apply(_this$axiosIns5, [this.apisConfig.apiGetPersonas].concat(args));
    }
  }, {
    key: "administrarPersonas",
    value: function administrarPersonas() {
      var _this$axiosIns6;
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      return (_this$axiosIns6 = this.axiosIns).post.apply(_this$axiosIns6, [this.apisConfig.apiAdminPersonas].concat(args));
    }
  }, {
    key: "getReservaciones",
    value: function getReservaciones() {
      var _this$axiosIns7;
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      return (_this$axiosIns7 = this.axiosIns).post.apply(_this$axiosIns7, [this.apisConfig.apiGetReservaciones].concat(args));
    }
  }, {
    key: "getReservacionesCalendario",
    value: function getReservacionesCalendario() {
      var _this$axiosIns8;
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      return (_this$axiosIns8 = this.axiosIns).post.apply(_this$axiosIns8, [this.apisConfig.apiGetReservacionesCalendario].concat(args));
    }
  }, {
    key: "administrarReservaciones",
    value: function administrarReservaciones() {
      var _this$axiosIns9;
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      return (_this$axiosIns9 = this.axiosIns).post.apply(_this$axiosIns9, [this.apisConfig.apiAdminReservaciones].concat(args));
    }
  }, {
    key: "getTemplatesEmail",
    value: function getTemplatesEmail() {
      var _this$axiosIns10;
      for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }
      return (_this$axiosIns10 = this.axiosIns).post.apply(_this$axiosIns10, [this.apisConfig.apiGetTemplatesEmail].concat(args));
    }
  }, {
    key: "administrarTemplatesEmail",
    value: function administrarTemplatesEmail() {
      var _this$axiosIns11;
      for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        args[_key11] = arguments[_key11];
      }
      return (_this$axiosIns11 = this.axiosIns).post.apply(_this$axiosIns11, [this.apisConfig.apiAdminTemplatesEmail].concat(args));
    }
  }, {
    key: "resourcesOut",
    value: function resourcesOut() {
      var _this$axiosIns12;
      for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        args[_key12] = arguments[_key12];
      }
      return (_this$axiosIns12 = this.axiosIns).post.apply(_this$axiosIns12, [this.apisConfig.apiResourcesOut].concat(args));
    }
  }]);
  return apiPeticiones;
}();


/***/ }),

/***/ "./resources/js/src/apis/config/peticiones/apisPeticionesConfig.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/apis/config/peticiones/apisPeticionesConfig.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

var _apiUsuarios$apiAdmin;
/* harmony default export */ __webpack_exports__["default"] = (_apiUsuarios$apiAdmin = {
  // Endpoints
  apiUsuarios: '/api/usuarios/listar',
  apiAdminUsuarios: '/api/usuarios/administrar'
}, Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_apiUsuarios$apiAdmin, "apiAdminUsuarios", '/api/habitaciones/administrar'), Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_apiUsuarios$apiAdmin, "apiGetHabitaciones", '/api/habitaciones/listar'), Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_apiUsuarios$apiAdmin, "apiAdminHabitaciones", '/api/habitaciones/administrar'), Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_apiUsuarios$apiAdmin, "apiGetPersonas", '/api/personas/listar'), Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_apiUsuarios$apiAdmin, "apiAdminPersonas", '/api/personas/administrar'), Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_apiUsuarios$apiAdmin, "apiGetReservacionesCalendario", '/api/reservaciones/calendario'), Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_apiUsuarios$apiAdmin, "apiGetReservaciones", '/api/reservaciones/listar'), Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_apiUsuarios$apiAdmin, "apiAdminReservaciones", '/api/reservaciones/administrar'), Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_apiUsuarios$apiAdmin, "apiGetTemplatesEmail", '/api/templates-email/listar'), Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_apiUsuarios$apiAdmin, "apiAdminTemplatesEmail", '/api/templates-email/administrar'), Object(_Users_plomo_Documents_MAMP_donjuan_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_apiUsuarios$apiAdmin, "apiResourcesOut", '/api/out'), _apiUsuarios$apiAdmin);

/***/ }),

/***/ "./resources/js/src/apis/config/peticiones/usePeticiones.js":
/*!******************************************************************!*\
  !*** ./resources/js/src/apis/config/peticiones/usePeticiones.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePeticiones; });
/* harmony import */ var _apisPeticiones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apisPeticiones */ "./resources/js/src/apis/config/peticiones/apisPeticiones.js");

function usePeticiones(axiosIns, overrideConfig) {
  var peticiones = new _apisPeticiones__WEBPACK_IMPORTED_MODULE_0__["default"](axiosIns, overrideConfig);
  return {
    peticiones: peticiones
  };
}

/***/ }),

/***/ "./resources/js/src/apis/usePeticiones.js":
/*!************************************************!*\
  !*** ./resources/js/src/apis/usePeticiones.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_peticiones_usePeticiones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/peticiones/usePeticiones */ "./resources/js/src/apis/config/peticiones/usePeticiones.js");
/* harmony import */ var _apis_component_axiosCurrent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/apis/component/axiosCurrent */ "./resources/js/src/apis/component/axiosCurrent.js");


var _usePeticiones = Object(_config_peticiones_usePeticiones__WEBPACK_IMPORTED_MODULE_0__["default"])(_apis_component_axiosCurrent__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
  peticiones = _usePeticiones.peticiones;
/* harmony default export */ __webpack_exports__["default"] = (peticiones);

/***/ }),

/***/ "./resources/js/src/views/currentComponents/VistaUno.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/VistaUno.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VistaUno_vue_vue_type_template_id_6df42c1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VistaUno.vue?vue&type=template&id=6df42c1a& */ "./resources/js/src/views/currentComponents/VistaUno.vue?vue&type=template&id=6df42c1a&");
/* harmony import */ var _VistaUno_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VistaUno.vue?vue&type=script&lang=js& */ "./resources/js/src/views/currentComponents/VistaUno.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VistaUno_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VistaUno_vue_vue_type_template_id_6df42c1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VistaUno_vue_vue_type_template_id_6df42c1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/currentComponents/VistaUno.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/currentComponents/VistaUno.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/VistaUno.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VistaUno_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VistaUno.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/VistaUno.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VistaUno_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/currentComponents/VistaUno.vue?vue&type=template&id=6df42c1a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/VistaUno.vue?vue&type=template&id=6df42c1a& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VistaUno_vue_vue_type_template_id_6df42c1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VistaUno.vue?vue&type=template&id=6df42c1a& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/VistaUno.vue?vue&type=template&id=6df42c1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VistaUno_vue_vue_type_template_id_6df42c1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VistaUno_vue_vue_type_template_id_6df42c1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);