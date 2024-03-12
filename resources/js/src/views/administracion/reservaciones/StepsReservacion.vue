<template>
    <div>
        <b-card class="p-2">
            <!-- <pre>{{ reservacion }}</pre> -->
            <b-card-title>Registro de reservación</b-card-title>
            
            <b-card-body class="p-0 m-0">
                <div v-if="showMessageConfirm" class="col-10 my-auto mx-auto">
                    <h3 class="col-12 text-center font-weigth-bolder mb-3">¡Tu lugar está apartado y esperando por ti.!</h3>
                    <h6 class="col-12 font-weigth-bold mb-1">Recibirás una confirmación de tu reservación. Si necesitas ayuda o tienes alguna pregunta, estamos aquí para asistirte en todo momento.</h6>
                    <h6 class="col-12 mb-1"><strong>¡Nos emociona ser parte de tu próxima experiencia!</strong></h6>

                    <div class="col-12 d-flex justify-content-between">
                        <b-button
                        size="sm"
                        class="my-auto mx-auto fw-bolder"
                        variant="secondary"
                        @click="()=>{$emit('handleCancel')}"
                    >
                        <feather-icon icon="HomeIcon" size="16" />
                        <span>Ir al inicio</span>
                    </b-button>

                    </div>
                </div>
                <div v-else>
                    <form-wizard
                        ref="wizard"
                        :hideButtons="true"
                        :title="null"
                        :subtitle="null"
                        :startIndex="step"
                        :disable-navigation="true"
                        finish-button-text="Guardar"
                        back-button-text="Anterior"
                        next-button-text="Siguiente"
                        class="steps-transparent m-0 p-0"
                    >
                        <!-- @update:startIndex="nextStep" -->
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
                                @showButtons="showButtonsActions = !showButtonsActions"
                            />
                        </tab-content>
    
                        <!-- Acompañantes -->
                        <tab-content
                            title="Acompañantes"
                            icon="feather icon-users"
                        >
                            <TabAcompañantes
                                v-if="step == 2"
                                ref="tabAcompaniantes"
                                :reservacion="reservacion"
                                @changeReservacion="handleChangeReservacion"
                            />
                        </tab-content>
    
                        <!-- Pago -->
                        <tab-content
                            title="Pago"
                            icon="feather icon-credit-card"
                        >
                            <TabPago
                                v-if="step == 3"
                                :reservacion="reservacion"
                                @changeReservacion="handleChangeReservacion"
                                @handleGoToCalendario="()=>{showMessageConfirm = true;}"
                            />
                        </tab-content>
                    </form-wizard>
                    <div v-if="showButtonsActions" class="col-12 d-flex justify-content-between">
                        <b-button
                            v-if="step != 0"
                            size="sm"
                            class="mr-auto"
                            variant="outline-secondary"
                            @click="prevStep"
                        >
                            <span class="mr-25 align-middle">Atrás</span>
                        </b-button>
                        <b-button
                            v-if="step < 3"
                            size="sm"
                            class="ml-auto"
                            variant="primary"
                            @click="nextStep"
                        >
                            <span class="mr-25 align-middle">{{ step < 3 ? 'Siguiente' : 'Reservar' }}</span>
                        </b-button>
                    </div>
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
    import TabPago from './TabPago.vue'
    import TabAcompañantes from './TabAcompañantes.vue'
    import customHelpers  from '@helpers/customHelpers'
    import peticiones from '@/apis/usePeticiones'

  export default {
    name:"StepsReservacionComponente",
    components: {

        BButton,
        FormWizard,
        TabContent,
        BCard,
        tabDetalles,
        BCardTitle,
        BCardSubTitle,
        BCardBody,
        BRow,
        BCol,
        BFormGroup,
        BFormInput,
        vSelect,
        // eslint-disable-next-line vue/no-unused-components
        ToastificationContent,
        TabAcompañantes,
        TabHabitaciones,
        TabPago,
    },
    mixins : [customHelpers],
    data() {
      return {
        step : 0,
        reservacion:{},
        showButtonsActions : true,
        showMessageConfirm : false
      }
    },
    watch:{
        '$refs.wizard.activeTabIndex' (newValor){
            console.log(newValor)
        }
    },
    mounted() {},
    methods: {
        handleChangeReservacion(data){
            console.log('StepsReservacionComponente => reservacion -> ', data)
            this.reservacion = this.copyObject({...this.reservacion,...data})
        },
        prevStep(){
            console.log('prevStep => reservacion => ', this.reservacion)
            this.$refs.wizard.prevTab()
            this.step = this.$refs.wizard.activeTabIndex;
        },
        async nextStep(data = null){
            console.log('nextStep => reservacion => ', this.reservacion)
            if (this.step == 3) {
                this.handleSubmit()
            } else {
                let next = false;
                if (this.step == 0) {
                    next =  typeof this.reservacion.fechaInicio != 'undefined' &&
                            typeof this.reservacion.fechaFin    != 'undefined' &&
                            typeof this.reservacion.person_id  != 'undefined'
                    if (!next) {
                        this.messageSweet({
                            message: 'Revisa el formulario, falta algún campo',
                            icon: 'warning',
                        });
                    }
                }
                if (this.step == 1) {
                    if ((typeof this.reservacion.habitaciones == 'undefined' ? 0 : this.reservacion.habitaciones.length) == 0) {
                        this.messageConfirm({
                            message:'No hay habitaciones seleccionadas',
                            title:'¿Desea continuar con el proceso?',
                            icon:'warning',
                            confirmButtonText: 'Si, continuar',
                            confirmFunction: () => { this.next() },
                            messageCancel : false
                        })
                    } else {
                        next = true
                    }
                }
                if (this.step == 2) {
                    // Llamada a getAcompaniantes para obtener los acompañantes o false si no son válidos o no hay suficientes
                    let response = await this.$refs.tabAcompaniantes.getAcompaniantes();

                    if (response !== false) {
                        // Si hay acompañantes válidos y más de uno, actualiza la reservación con los acompañantes
                        this.reservacion.acompaniantes = response;
                        // Verifica si no hay acompañantes registrados después de la validación
                        if ((!this.reservacion.acompaniantes || (this.reservacion.acompaniantes.length === 0))) {
                            // Muestra un mensaje de confirmación para continuar sin acompañantes
                            this.messageConfirm({
                                message: 'No hay acompañantes registrados.',
                                title: '¿Desea continuar con el proceso?',
                                icon: 'warning',
                                confirmButtonText: 'Si, continuar',
                                confirmFunction: () => { this.next(); },
                                messageCancel: false
                            });
                        }
                         else {
                            // Si hay acompañantes, se asume que se puede proceder al siguiente paso
                            this.next();
                        }
                    } 

                }

                if (next) {
                    if (typeof  data == 'object')
                        this.next()
                    else
                        this.handleChangeStep(data);
                }
            }
        },
        next(){
            this.$refs.wizard.nextTab()
            this.handleChangeStep();
        },
        handleChangeStep(data = null){
            this.step = typeof  data == 'object' ? this.$refs.wizard.activeTabIndex : data;
        },
        handleSubmit(){
            this.peticionAdministrar({...this.reservacion,'accion':1})
        },
        peticionAdministrar(payload){
            peticiones
                .administrarReservaciones({
                    'payload' : payload,
                })
                .then(response => {
                    console.log(response)
                    this.messageSweet({
                        message: response.data.message,
                        icon: response.data.result ? 'success' : 'error',
                    });
                    if (response.data.result ) {
                    console.log('Dentro del if')
                        this.showMessageConfirm = true;
                    }
                })
                .catch(error   => { console.log(error); })
        },
    },
  }
  </script>
