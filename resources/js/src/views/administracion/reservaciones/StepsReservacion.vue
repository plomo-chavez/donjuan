<template>
    <div>
        <b-card class="p-2">
            <b-card-title>Registro de reservación</b-card-title>
            <b-card-body class="p-0 m-0">
                <!-- color="#7367F0" -->
                <!-- <pre>Step: {{ step }}</pre>
                <pre>{{ reservacion }}</pre> -->
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
                            v-if="step == 0"
                            :reservacion="reservacion"
                            @changeReservacion="handleChangeReservacion"
                        />
                    </tab-content>

                    <!-- Habitaciones -->
                    <tab-content
                        title="Habitaciones"
                        icon="feather icon-airplay"
                    >
                        <TabHabitaciones
                            v-if="step == 1"
                            :reservacion="reservacion"
                            @changeReservacion="handleChangeReservacion"
                        />
                    </tab-content>

                    <!-- Acompañantes -->
                    <tab-content
                        title="Acompañantes"
                        icon="feather icon-users"
                    >
                        <TabHabitaciones
                            v-if="step == 2"
                            :reservacion="reservacion"
                            @changeReservacion="handleChangeReservacion"
                        />
                    </tab-content>

                    <!-- Pago -->
                    <tab-content
                        title="Pago"
                        icon="feather icon-credit-card"
                    >
                        <TabHabitaciones
                            v-if="step == 3"
                            :reservacion="reservacion"
                            @changeReservacion="handleChangeReservacion"
                        />
                    </tab-content>
                </form-wizard>
                <div class="col-12 d-flex justify-content-between">
                    <b-button
                        v-if="step != 0"
                        variant="outline-secondary"
                        class="mr-auto"
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
  import TabHabitaciones from './TabHabitaciones.vue'
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
        TabHabitaciones,
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
            console.log('reservacion -> ', data)
            this.reservacion = this.copyObject(data)
        },
        prevStep(){
            this.$refs.wizard.prevTab()
            this.step = this.$refs.wizard.activeTabIndex;
        },
        nextStep(){
            let next = false;
            if (this.step == 0) {
                next =  typeof this.reservacion.fechaInicio != 'undefined' &&
                        typeof this.reservacion.fechaFin    != 'undefined' &&
                        typeof this.reservacion.person_id  != 'undefined'
            }
            if (next) {
                this.$refs.wizard.nextTab()
                this.step = this.$refs.wizard.activeTabIndex;
            }
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
