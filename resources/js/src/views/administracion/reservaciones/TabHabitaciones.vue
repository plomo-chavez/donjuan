<template>
    <div class="d-flex flex-wrap justify-content-between">
        <template v-if="dataActive != null" >
            <extraDetailsRoom
                :extraInformation="dataActive"
                @cancel="handleCancelViewDetails"
            />
        </template>
        <template v-else> 
            <div v-if="habitaciones.length == 0">
                <h3 class="text-center ">Habitaciones no disponibles</h3>
                <p class="text-center ">Lo sentimos, no hay habitaciones disponibles del <strong>{{reservacion.fechaInicio}}</strong> al <strong>{{reservacion.fechaFin}}</strong>. Te recomendamos seleccionar nuevas fechas de búsqueda o explorar otras categorías de habitaciones.</p>
                <p class="text-center ">¡Estamos aquí para ayudarte a encontrar la estancia perfecta!</p>
            </div>
            <detallesHabitacion
                class="col-lg-4 col-md-6 col-sm-12"
                v-for="(habitacion, index) in habitaciones"
                :key="'hab' + index"
                :habitacion="habitacion"
                :isSelected="handleIsSelected(habitacion)"
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
// import habitaciones from 'src/views/out/components/habitaciones.vue'

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
            handleIsSelected(data = null){
                let tmp =  false;
                if (data != null) {
                    tmp = this.buscarPorPropiedad(this.reservacion.habitaciones,'id',data.id);
                }
                return tmp ? true : false;
            },
            handleSeleccionarHabitacion(data) {
                console.log(data)
                const hbs = typeof this.reservacion.habitaciones != 'undefined' ? [...this.reservacion.habitaciones,data] : [data]
                this.$emit('changeReservacion', {
                    ...this.reservacion,
                    habitaciones: hbs
                });
            },
            handleViewDetails(data) {
                console.log('handleViewDetails')
                this.dataActive = this.copyObject(data)
                this.$emit('showButtons')
            },
            handleCancelViewDetails(data) {
                this.dataActive = null
                this.$emit('showButtons')
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
