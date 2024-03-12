<template>
    <div>
        <BCard v-if="showCalendario" class="col-12 p-2" >
            <b-button
              size="sm"
              class="mb-2"
              variant="primary"
              @click="handleCancel"
            >
              <span class="mr-25 align-middle">Nueva reservación</span>
            </b-button>
            <Calendario
                class="mt-2"
                :withCard="false"
                :fechas="reservaciones"
                @fechaSeleccionada="showReservacion"
            />
        </BCard>
        <div
            v-else
            class="col-12 p-2"
        >
            <b-button
              size="sm"
              variant="outline-danger"
              @click="showCalendario = true"
            >
              <span class="mr-25 align-middle">Atrás</span>
            </b-button>
            <FormReservacion
                @handleCancel="() => { showCalendario = true }"
            />
        </div>
        <ModalReservacion
            :reservacion="currentReservacion"
            :showModal="showModalReservacion"
            @handleCancel="() => { 
                currentReservacion = null;
                showCalendario = true;
            }"
        />
    </div>
</template>
<script>
    import Calendario from '@currentComponents/Calendario.vue'
    import FormReservacion from './StepsReservacion.vue'
    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'
    import ModalReservacion  from './ModalReservacion.vue'
    import { BButton,BCard } from 'bootstrap-vue'

    export default {
        name: 'CalendarComponent',
        mixins : [customHelpers],
        components: {
            Calendario,
            BCard,
            BButton,
            ModalReservacion,
            FormReservacion,
        },
        data() {
            return {
                reservaciones : [],
                showModalReservacion : false,
                showCalendario : true,
                currentReservacion : null,
            }
        },
        beforeMount() {
            this.loading();
            this.getEvents();
        },
        watch:{
            showModalReservacion(value){
                if (value) {
                    setTimeout(() => {
                        this.showModalReservacion = false;
                    }, 100);
                }
            },
        },
        methods:{
            handleCancel(){
                this.showCalendario = false
                this.getEvents();
            },
            getEvents(){
                peticiones
                    .getReservacionesCalendario({ })
                    .then(response => {
                        let tmp =  response.data.data
                        let eventsTmp = []
                        tmp.map((item) => {
                            eventsTmp.push({
                                ...item,
                                id:item.id,
                                title: 'Reservacion',
                                allDay: true,
                                start: item.fechaInicio,
                                end: item.fechaFin,
                            })
                        })
                        this.reservaciones = this.copyObject(eventsTmp)
                    })
                    .catch(error   => { console.log(error); })
                    this.loading(false);
            },
            showReservacion(reservacion){
                this.currentReservacion = reservacion
                this.showModalReservacion = true;
            }
        }
    }
</script>
<style lang="scss">
    @import "../../../../../scss/base/bootstrap-extended/_variables.scss";
    .wizard-icon-circle.md.checked{
        border-color: $primary!important;
    }
    .wizard-icon-container,
    .wizard-icon-container > div{
        background-color: $primary!important;
    }
    // .{
    //     border-color: $primary!important;
    // }
    .stepTitle.active{
        color: $primary!important;
    }
    .wizard-progress-bar{
        background-color: $primary!important;
        color: $primary!important;
    }
    .vue-form-wizard .wizard-nav-pills>li>a {
        color: $secondary!important;
    }
    .vue-form-wizard.wizard-icon-circle{
        border-color: $secondary!important;
    }
</style>

