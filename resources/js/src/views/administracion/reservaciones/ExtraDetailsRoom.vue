<template>

    <div v-if="extraInformation != null" class="col-12  d-flex flex-wrap p-0 m-0">
        <div class="col-4">
            <img class="img-fluid" :src="require('@/assets/images/habitaciones/default.jpg')" alt="">
        </div>
        <div class="col-8 m-0 p-0">
            <div class="col d-flex  align-items-end">
                <feather-icon size="18" :icon="`XIcon`" class="cursor-pointer text-danger font-weight-bolder ml-auto" @click="handleCancel"/>
            </div>
            <h3 class="mb-0">{{ extraInformation.nombre }}</h3>
            <h3 class="mb-0">{{ extraInformation.tarifa }}</h3>
            <h6 class="mb-0">{{ extraInformation.capacidad }} personas</h6>
            <h6 class="mb-0">{{ extraInformation.puedeFumar ? 'Si ' : 'No ' }}se puede fumar</h6>
            <p class="mb-0">{{ extraInformation.descripcion }}</p>
        </div>
        <p class="col-12 p-0 m-0 mb-0 font-weight-bold">Amenidades:</p>
        <div class="col-12 d-flex flex-wrap p-0 m-0">
            <p v-for="(item,index) in extraInformation.amenidades" class="col-12 col-lg-6 p-0 m-0 fw-bold"><small>{{ item.nombre }}</small></p>
        </div>
    </div>
</template>
<script>
    import catalogos            from '@/apis/useCatalogo'
    import detailsRoom          from '@currentComponents/detailsRoom.vue'
    import detallesHabitacion   from '@out/components/detallesHabitacion.vue'
    import customHelpers        from '@helpers/customHelpers'

    export default {
        name:'extraDetailsRoomComponent',
        data () {
            return {}
        },
        mixins : [customHelpers],
        components: {},
        props: {
            extraInformation: {
                type    : Object,
                default : null
            },
        },
        beforeMount(){},
        methods:{
            handleCancel() {
                this.$emit('cancel');
            }
        },
    }
</script>

roomsAvailable
