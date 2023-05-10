<template>
    <div>
        <b-card class="p-2">
            <b-card-title>Registro de reservación</b-card-title>
            <b-card-body class="p-0 m-0">
                <!-- color="#7367F0" -->
                <pre>{{ reservacion }}</pre>
                <form-wizard
                    ref="wizard"
                    :hideButtons="true"
                    :title="null"
                    :subtitle="null"
                    finish-button-text="Guardar"
                    back-button-text="Anterior"
                    next-button-text="Siguiente"
                    class="steps-transparent m-0 p-0"
                >
                <!-- Detalles de la reservacion -->
                <tab-content
                    title="Detalles de reservación"
                    icon="feather icon-calendar"
                >
                    <tabDetalles
                        :reservacion="reservacion"
                        @changeReservacion="handleChangeReservacion"
                    />
                </tab-content>

                <!-- Habitaciones -->
                <tab-content
                    title="Habitaciones"
                    icon="feather icon-airplay"
                >
                    <b-row>
                    <b-col
                        cols="12"
                        class="mb-2"
                    >
                        <h5 class="mb-0">
                        Personal Info
                        </h5>
                        <small class="text-muted">Enter Your Personal Info.</small>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                        label-for="i-first-name"
                        label="First Name"
                        >
                        <b-form-input
                            id="i-first-name"
                            placeholder="John"
                        />
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                        label="Last Name"
                        label-for="i-last-name"
                        >
                        <b-form-input
                            id="i-last-name"
                            placeholder="Doe"
                        />
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                        label="Country"
                        label-for="i-country"
                        >
                        <v-select
                            id="i-country"
                            v-model="selectedContry"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            :options="countryName"
                            :selectable="option => ! option.value.includes('select_value')"
                            label="text"
                        />
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                        label="Language"
                        label-for="i-language"
                        >
                        <v-select
                            id="i-language"
                            v-model="selectedLanguage"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            :options="languageName"
                            :selectable="option => ! option.value.includes('select_value')"
                            label="text"
                        />
                        </b-form-group>
                    </b-col>
                    </b-row>
                </tab-content>

                <!-- Acompañantes -->
                <tab-content
                    title="Acompañantes"
                    icon="feather icon-users"
                >
                    <b-row>
                    <b-col
                        cols="12"
                        class="mb-2"
                    >
                        <h5 class="mb-0">
                        Address
                        </h5>
                        <small class="text-muted">Enter Your Address.</small>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                        label="Address"
                        label-for="i-address"
                        >
                        <b-form-input
                            id="i-address"
                            placeholder="98 Borough bridge Road, Birmingham"
                        />
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                        label="Landmark"
                        label-for="i-landmark"
                        >
                        <b-form-input
                            id="i-landmark"
                            placeholder="Borough bridge"
                        />
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                        label="Pincode"
                        label-for="i-pincode"
                        >
                        <b-form-input
                            id="i-pincode"
                            placeholder="658921"
                        />
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                        label-for="i-city"
                        label="City"
                        >
                        <b-form-input
                            id="i-city"
                            placeholder="Birmingham"
                        />
                        </b-form-group>
                    </b-col>
                    </b-row>
                </tab-content>
                <!-- Pago -->
                <tab-content
                    title="Pago"
                    icon="feather icon-credit-card"
                >
                    <b-row>
                    <b-col
                        cols="12"
                        class="mb-2"
                    >
                        <h5 class="mb-0">
                        Address
                        </h5>
                        <small class="text-muted">Enter Your Address.</small>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                        label="Address"
                        label-for="i-address"
                        >
                        <b-form-input
                            id="i-address"
                            placeholder="98 Borough bridge Road, Birmingham"
                        />
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                        label="Landmark"
                        label-for="i-landmark"
                        >
                        <b-form-input
                            id="i-landmark"
                            placeholder="Borough bridge"
                        />
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                        label="Pincode"
                        label-for="i-pincode"
                        >
                        <b-form-input
                            id="i-pincode"
                            placeholder="658921"
                        />
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                        label-for="i-city"
                        label="City"
                        >
                        <b-form-input
                            id="i-city"
                            placeholder="Birmingham"
                        />
                        </b-form-group>
                    </b-col>
                    </b-row>
                </tab-content>
                </form-wizard>
                <div class="col-12">
                    <b-button
                        v-if="step != 0"
                        variant="outline-secondary"
                        class="ml-auto"
                        @click="prevStep"
                    >
                        Atrás
                    </b-button>
                    <b-button
                        class="ml-auto"
                        variant="primary"
                        @click="nextStep"
                    >
                        Siguiente
                    </b-button>
                </div>
            </b-card-body>
        </b-card>
    </div>
  </template>
  <script>
  import { FormWizard, TabContent } from 'vue-form-wizard'
  import vSelect from 'vue-select'
  import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
  import 'vue-form-wizard/dist/vue-form-wizard.min.css'
  import {
    BRow,
    BCol,
    BCard,
    BCardTitle,
    BCardSubTitle,
    BCardBody,
    BFormGroup,
    BFormInput,
    BButton
  } from 'bootstrap-vue'
  import tabDetalles from './TabDetalles.vue'
  import customHelpers  from '@helpers/customHelpers'

  export default {
    components: {

        BButton,
        FormWizard,
        BCard,
        tabDetalles,
        BCardTitle,
        BCardSubTitle,
        BCardBody,
        TabContent,
        BRow,
        BCol,
        BFormGroup,
        BFormInput,
        vSelect,
        // eslint-disable-next-line vue/no-unused-components
        ToastificationContent,
    },
    mixins : [customHelpers],
    data() {
      return {
        step : 0,
        reservacion:{}
      }
    },
    methods: {
        handleChangeReservacion(data){
            this.reservacion = copyObject(data)
        },
        prevStep(){
            this.$refs.wizard.prevTab()
        },
        nextStep(){
            let next = false;
            if (this.step == 0) {
                next =  typeof this.reservacion.fechaInicio != 'undefined' &&
                        typeof this.reservacion.fechaFin    != 'undefined' &&
                        typeof this.reservacion.reserva_id  != 'undefined'
            }
            if (next) { this.$refs.wizard.nextTab() }
            else {
                this.messageSweet({
                    message: 'Revisa el formulario, falta algún campo',
                    icon: 'warning',
                });
            }
        },
    },
  }
  </script>
