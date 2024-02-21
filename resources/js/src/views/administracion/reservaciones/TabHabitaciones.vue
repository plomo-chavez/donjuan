<template>
    <div class="d-flex flex-wrap justify-content-between">
        <template v-if="dataActive != null" >
            <extraDetailsRoom
                :extraInformation="dataActive"
                @cancel="dataActive = null"
            />
        </template>
        <template v-else> 
            <detallesHabitacion
                class="col-lg-4 col-md-6 col-sm-12"
                v-for="(habitacion, index) in habitaciones"
                :key="'hab' + index"
                :habitacion="habitacion"
                @seleccionar="handleSeleccionarHabitacion"
                @viewDetails="handleViewDetails"
            />
        </template>
    </div>
</template>
<script>
    import catalogos from '@/apis/useCatalogo'
    import detailsRoom from '@currentComponents/detailsRoom.vue'
    import extraDetailsRoom from '@currentComponents/../administracion/reservaciones/ExtraDetailsRoom.vue'
    import detallesHabitacion from '@out/components/detallesHabitacion.vue'
    import customHelpers  from '@helpers/customHelpers'

    export default {
        data () {
            return {
                habitaciones:[],
                dataActive:null,
            }
        },
        mixins : [customHelpers],
        components: {
            detallesHabitacion,
            extraDetailsRoom,
        },
        props: {
            reservacion: {
                type    : Object,
                default : {}
            },
        },
        beforeMount(){
            this.getHabitaciones()
        },
        methods:{
            handleSeleccionarHabitacion(data) {
                const hbs = typeof this.reservacion.habitaciones != 'undefined' ? [...this.reservacion.habitaciones,data] : [data]
                this.$emit('changeReservacion', {
                    ...this.reservacion,
                    habitaciones: hbs
                });
            },
            handleViewDetails(data) {
                console.log('handleViewDetails')
                this.dataActive = this.copyObject(data)
            },
            getHabitaciones(){
                let filtros = {
                    fechaInicio : this.reservacion?.fechaInicio ?? null,
                    fechaFin    : this.reservacion?.fechaFin    ?? null,
                }
                catalogos
                    .roomsAvailable({
                        filtros:filtros,
                    })
                    .then(response => {
                        let tmp = response.data.data
                        tmp.map((item) => {
                            item.estatus    = typeof item.estatus == 'object'    ? (item.estatus?.nombre ?? '') : ''
                            item.camas      = typeof item.camas != 'string'      ? item.camas : JSON.parse(item.camas)
                            item.amenidades = typeof item.amenidades != 'string' ? item.amenidades : JSON.parse(item.amenidades)
                        })
                        this.habitaciones = this.copyObject(tmp)
                    })
                    .catch(error   => { console.log(error); })

            }
        },
    }
</script>

roomsAvailable
