<template>
    <div>

        <Calendario
            :fechas="reservaciones"
            @fechaSeleccionada="showReservacion"
        />
        <ModalReservacion
            :reservacion="currentReservacion"
            :showModal="showModalReservacion"
            @handleCancel="() => { currentReservacion = null }"
        />
    </div>
</template>
<script>
    import Calendario from '@currentComponents/Calendario.vue'
    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'
    import ModalReservacion  from './ModalReservacion.vue'

    export default {
        name: 'CalendarComponent',
        mixins : [customHelpers],
        components: {
            Calendario,
            ModalReservacion
        },
        data() {
            return {
                reservaciones : {},
                showModalReservacion : false,
                currentReservacion : null,
            }
        },
        beforeMount() {
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

            },
            getEvents(){
                peticiones
                    .getReservacionesCalendario({ })
                    .then(response => {
                        console.log(response)
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
            },
            showReservacion(reservacion){
                this.currentReservacion = reservacion
                this.showModalReservacion = true;
            }
        }
    }
</script>

