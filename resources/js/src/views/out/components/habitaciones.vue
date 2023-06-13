<template>
    <!-- Package Start -->
    <div class="container-xxl py-5">

        <b-modal
        ref="my-modal"
        class=" modal-lg"
        hide-footer
        ok-only
        no-close-on-backdrop
        @hidden="resetModal"
        :title="typeof activeRoom.nombre != 'undefined' ?  ('Detalles de ' + activeRoom.nombre) : ''"
        >
        <div class="col-12  d-flex flex-wrap p-0 m-0">
            <div class="col-4">
                <img class="img-fluid" :src="require('@/assets/images/habitaciones/default.jpg')" alt="">
            </div>
            <div class="col-8 m-0 p-0">
                <h3 class="mb-0">{{ activeRoom.nombre }}</h3>
                <h3 class="mb-0">{{ activeRoom.tarifa }}</h3>
                <h6 class="mb-0">{{ activeRoom.capacidad }} personas</h6>
                <h6 class="mb-0">{{ activeRoom.puedeFumar ? 'Si ' : 'No ' }}se puede fumar</h6>
                <p class="mb-0">{{ activeRoom.descripcion }}</p>
            </div>
            <p class="col-12 p-0 m-0 mb-0 font-weight-bold">Amenidades:</p>
            <div class="col-12 d-flex flex-wrap p-0 m-0">
                <p v-for="(item,index) in activeRoom.amenidades" class="col-12 col-lg-6 p-0 m-0 fw-bold"><small>{{ item.nombre }}</small></p>
            </div>
        </div>
        </b-modal>
        <div class="container-md">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title bg-white text-center text-primary px-3">Habitaciones</h6>
                <h1 class="mb-5">Habitaciones</h1>
            </div>
            <div class="row g-4 justify-content-center">
                <div v-for="(item, index) in data" class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style="margin-bottom: 10px;">
                    <div class="package-item">
                        <div class="overflow-hidden">
                            <img class="img-fluid" :src="require('@/assets/images/habitaciones/default.jpg')" alt="">
                        </div>
                        <div class="d-flex border-bottom">
                            <small class="flex-fill text-center border-end py-2"><i class="fas fa-smoking text-primary me-2"></i> {{ item.puedeFumar ? 'Si ' : 'No ' }}se puede fumar</small>
                            <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i> {{ item.capacidad }} personas</small>
                        </div>
                        <div class="text-center p-4">
                            <h3 class="mb-0">{{ item.nombre }}</h3>
                            <h3 class="mb-0">{{ item.tarifa }}</h3>
                            <div class="mb-3">
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                            </div>
                            <p>{{ item.descripcion }}</p>
                            <div class="d-flex justify-content-center mb-2">
                                <button class="btn btn-sm btn-primary px-3 border-end" @click="handleShowModal(item)" style="border-radius: 30px;">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Package End -->
</template>
<script>
    import { BNavbar, BBadge, BNavbarBrand, BNavbarToggle, BNavbarNav, BNavItem, BCollapse, BNavForm, BFormInput, BButton, BNavItemDropdown, BDropdownItem } from 'bootstrap-vue'

    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'
    export default {
        name: 'Habitaciones',
        components: {
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
        beforeMount() {
            this.inicializar()
        },
        data() {
            return {
                data:[],
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
            onResize() {
                this.screenWidth = window.innerWidth;
                this.screenHeight = window.innerHeight;
            },
            inicializar(){ this.reload() },
            reload () {
                this.loading();
                peticiones
                    .resourcesOut({
                        resources: 'getHabitaciones'
                    })
                    .then(response => {
                        let tmpData = this.copyObject(response.data.data)
                        tmpData.map((item) => {
                            item.estatus    = typeof item.estatus == 'object'    ? (item.estatus?.nombre ?? '') : ''
                            item.camas      = typeof item.camas != 'string'      ? item.camas : JSON.parse(item.camas)
                            item.amenidades = typeof item.amenidades != 'string' ? item.amenidades : JSON.parse(item.amenidades)
                        })
                        this.data = this.copyObject(tmpData)
                        this.loading(false);
                    })
                    .catch(error   => { console.log(error); })
            },
            handleShowModal(data){
                console.log(data)
                this.activeRoom = data
                this.showModal = true;
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