<template>
    <div>
        <b-modal
            title="Detalles de la reservación"
            ok-only
            size="lg"
            hide-footer
            ref="my-modal"
            no-close-on-backdrop
            v-b-modal.modal-footer-sm
        >
        <div v-if="data != null">
            <div class="d-flex">
                <h6 class="ww-200 font-weight-bolder">Quien reservo:</h6>
                <h6 class="ww-200A">{{ data.reserva.nombre + ' ' + data.reserva.primerApellido + ' ' + data.reserva.segundoApellido }}</h6>
            </div>
            <div class="d-flex">
                <h6 class="col-3 font-weight-bolder">Teléfono:</h6>
                <h6 class="col-3">{{ data.reserva.telefono }}</h6>
            </div>
            <div class="d-flex">
                <h6 class="col-3 font-weight-bolder">Correo electrónico:</h6>
                <h6 class="col-8">{{ data.reserva.correo }}</h6>
            </div>
            <div class="d-flex mb-2">
                <h6 class="col-3 font-weight-bolder">Check-in:</h6>
                <h6 class="col-3">{{ data.fechaInicio }}</h6>
                <h6 class="col-3 font-weight-bolder">Check-Out:</h6>
                <h6 class="col-3">{{ data.fechaFin }}</h6>
            </div>
            <div class="">
                <h6 class="col-12 font-weight-bolder mb-1">Habitaciones:</h6>
                <h6 v-if="data.habitaciones.length == 0" class="col-12 text-center font-weight-bolder">No se registraron habitaciones</h6>
                <h6 class="col-12" v-for="(item,index) in data.habitaciones" ># {{index + 1}} - {{ item.habitacion.nombre }} - {{ item.habitacion.puedeFumar ? 'Se puede fumar' : 'No se puede fumar'}} - {{ (item.habitacion.tarifa) }}</h6>
            </div>
            <div class="">
                <h6 class="col-12 font-weight-bolder mb-1">Acompañantes:</h6>
                <h6 v-if="data.acompaniantes.length == 0" class="col-12 text-center font-weight-bolder">No se registraron acompañantes</h6>
                <h6 class="col-12" v-for="(item,index) in data.acompaniantes" ># {{index + 1}} - {{ item.persona.nombre + ' ' + item.persona.primerApellido + ' ' + item.persona.segundoApellido }}</h6>
            </div>
            <div class="">

                <b-button
                size="sm"
                class="mb-2"
                variant="primary"
                @click="generatePapeleta"
                >
                <span class="mr-25 align-middle">Generar papeleta</span>
                </b-button>
            </div>
        </div>
        </b-modal>
    </div>
</template>
<script>
    import {
        BButton,
        BModal,
        BCardText,
        BFormInput,
        BRow,
        BCol,
        BFormGroup,
    }                         from 'bootstrap-vue'
    import axios from 'axios';

    import { FormWizard, TabContent } from 'vue-form-wizard'
    import vSelect from 'vue-select'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import BCardCode          from '@core/components/b-card-code'
    import Ripple             from 'vue-ripple-directive'
    import store              from '@/store'
    import { goToLogout }     from '@/auth/utils'
    import customHelpers  from '@helpers/customHelpers'
    import { getHomeRouteForLoggedInUser } from '@/auth/utils'

    import apis from '@/apis/useApis'
    import generatePDF from '@/apis/useGeneratePDF'
    import useJwt             from '@/auth/jwt/useJwt'
import { useNetwork } from '@vueuse/core'
    export default {
        name: 'ModalReservacion',
        mixins : [customHelpers],
        directives: { Ripple, },
        components: {
            BFormInput,
            BRow,
            BCol,
            BFormGroup,
            BCardCode,
            BButton,
            BModal,
            BCardText,
            FormWizard,
            TabContent,
            axios, 
        },
        mounted() {},
        data() {
            return {
                data:null,
            }
        },
        props: {
            showModal: {
                type: Boolean,
                default: false,
            },
            reservacion: {
                type: Object,
                default: null,
            },
        },
        watch: {
            showModal(value){
                if (value) {
                    this.mdoShowModal();
                }
            },
            reservacion(value){
                let tmp = value
                // tmp = this.copyObject(value)
                delete(tmp.source)
                delete(tmp.className)
                delete(tmp.allDay)
                tmp.end = this.formatoFechaYMD(tmp.end)
                tmp.start = this.formatoFechaYMD(tmp.start)
                this.data = tmp
            },
        },
        computed: {

        },
        created() {

        },
        beforeMount(){
            this.data = this.reservacion
        },
        mounted(){

            this.data = this.reservacion
        },
        methods:{
            mdoShowModal() {
                this.$refs['my-modal'].show()
            },
            mdoHideModal() {
                this.$refs['my-modal'].hide()
            },
            // generatePDF() {
            //     window.open('/api/generate/pruebas', '_blank');
                
            // },
            generatePapeleta(){
                this.loading();
                generatePDF
                .pruebas({reservacion_id : this.data.id })
                .then(response => {
                    if (response.data.type == 'application/json'){
                        
                    } else{
                        this.descargarPDF(response,this.data.id)
                    }
                })
                .catch(error => {
                    console.error(error);
                });
            },
        }
    }
</script>
<style>
.modal-dialog {
    max-width: CALC(100% - 20%)!important;
}
</style>
