<template>
    <div v-if="habitacion != null" class="col wow fadeInUp" data-wow-delay="0.1s" style="margin-bottom: 10px;">

        <LinkCSS />

        <div class="package-item">
            <div class="overflow-hidden">
                <img class="img-fluid" :src="require('@/assets/images/habitaciones/default.jpg')" alt="">
            </div>
            <div class="d-flex border-bottom">
                <small class="flex-fill text-center border-end py-2"><i class="fas fa-smoking text-primary me-2"></i> {{ habitacion.puedeFumar ? 'Si ' : 'No ' }}se puede fumar</small>
                <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i> {{ habitacion.capacidad }} personas</small>
            </div>
            <div class="text-center p-4">
                <h3 class="mb-0">{{ habitacion.nombre }}</h3>
                <h3 class="mb-0">{{ habitacion.tarifa }}</h3>
                <div class="mb-3">
                    <small class="fa fa-star text-primary"></small>
                    <small class="fa fa-star text-primary"></small>
                    <small class="fa fa-star text-primary"></small>
                    <small class="fa fa-star text-primary"></small>
                    <small class="fa fa-star text-primary"></small>
                </div>
                <p>{{ habitacion.descripcion }}</p>
                <div class="d-flex justify-content-center mb-1">
                    <button class="btn btn-sm btn-secondary px-3 border-end" @click="handleShowModal(habitacion)" style="border-radius: 30px;">Más información</button>
                </div>
                <div class="d-flex justify-content-center mb-2">
                    <button class="btn btn-sm btn-primary px-3 border-end" @click="handleShowModal(habitacion)" style="border-radius: 30px;">Seleccionar</button>
                </div>
            </div>
        </div>
        <b-modal
            ref="my-modal"
            class=" modal-lg"
            hide-footer
            ok-only
            no-close-on-backdrop
            @hidden="resetModal"
            :title="typeof habitacion.nombre != 'undefined' ?  ('Detalles de ' + habitacion.nombre) : ''"
        >
        <div class="col-12  d-flex flex-wrap p-0 m-0">
            <div class="col-4">
                <img class="img-fluid" :src="require('@/assets/images/habitaciones/default.jpg')" alt="">
            </div>
            <div class="col-8 m-0 p-0">
                <h3 class="mb-0">{{ habitacion.nombre }}</h3>
                <h3 class="mb-0">{{ habitacion.tarifa }}</h3>
                <h6 class="mb-0">{{ habitacion.capacidad }} personas</h6>
                <h6 class="mb-0">{{ habitacion.puedeFumar ? 'Si ' : 'No ' }}se puede fumar</h6>
                <p class="mb-0">{{ habitacion.descripcion }}</p>
            </div>
            <p class="col-12 p-0 m-0 mb-0 font-weight-bold">Amenidades:</p>
            <div class="col-12 d-flex flex-wrap p-0 m-0">
                <p v-for="(item,index) in habitacion.amenidades" class="col-12 col-lg-6 p-0 m-0 fw-bold"><small>{{ item.nombre }}</small></p>
            </div>
        </div>
        </b-modal>
    </div>
</template>
<script>

    import LinkCSS from '@out/components/linksCSS.vue'
    import { BNavbar, BBadge, BNavbarBrand, BNavbarToggle, BNavbarNav, BNavItem, BCollapse, BNavForm, BFormInput, BButton, BNavItemDropdown, BDropdownItem } from 'bootstrap-vue'

    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'
    export default {
        name: 'Habitaciones',
        components: {
            LinkCSS,
            BButton,
            BNavbar,
            BNavbarBrand,
            BNavbarToggle,
            BNavbarNav,
            BNavItem,
            BCollapse,
            BNavForm,
            BFormInput,
            BButton,
            BNavItemDropdown,
            BDropdownItem
        },
        mixins : [customHelpers],
        beforeMount() {},
        props: {
            habitacion: {
                type    : Object,
                default : null
            },
        },
        data() {
            return {
                // item:{
                //     "id":6,
                //     "nombre":"Suite Junior",
                //     "descripcion":"Suite privada de 16 m2  que cuenta con baño integrado, Wifi gratis, TV de pantalla plana y aire condicionado.",
                //     "tarifa":"$ 1,500",
                //     "estatus_id":3,
                //     "amenidades":[
                //         {"nombre":"Toda la unidad está situada en la planta baja"},
                //         {"nombre":"Armario o closet"},
                //         {"nombre":"Aire acondicionado"},
                //         {"nombre":"Canales vía satélite"},
                //         {"nombre":"TV de pantalla plana"},
                //         {"nombre":"Enchufe cerca de la cama"},
                //         {"nombre":"Perchero para ropa"},
                //         {"nombre":"Habitación individual con aire acondicionado"},
                //         {"nombre":"Artículos de higiene gratis"},
                //         {"nombre":"Papel de baño"}
                //     ],
                //     "camas":{
                //         "camaKing":"0",
                //         "camaQueen":"0",
                //         "camaMatrimonial":"1",
                //         "camaIndividual":"0"
                //     },
                //     "puedeFumar":0,
                //     "created_at":"2023-06-04T05:45:50.000000Z",
                //     "updated_at":"2023-06-04T06:03:55.000000Z",
                //     "deleted_at":null,
                //     "capacidad":3,
                //     "estatus":"Disponible"
                // },
                showModal : false,
                activeRoom : {},
                screenWidth: window.innerWidth,
                screenHeight: window.innerHeight,
            }
        },
        watch:{
            showModal(value){
                if(value){
                    this.$refs['my-modal'].show()
                } else {
                    this.$refs['my-modal'].hide()
                }
            },
        },
        mounted() {
            // Escuchamos el evento de cambio de tamaño de ventana
            window.addEventListener('resize', this.onResize);
        },
        beforeDestroy() {
            // Eliminamos el evento de cambio de tamaño de ventana
            window.removeEventListener('resize', this.onResize);
        },
        methods: {
            // handleShowModal(data){
            //     console.log(data)
            //     this.activeRoom = data
            //     this.showModal = true;
            // },
            handleShowModal(data){
                this.$emit('viewDetails', this.habitacion);
            },
            resetModal(){
                this.showModal = false;
                this.activeRoom = {}
            },
        },
    }
</script>

<style scoped>
.modal-dialog .modal-md {

    max-width: 1000px !important;
}
.modalGrande {

    max-width: 800 !important;
}
</style>