<template>
<div class="container-xxl py-5">
    <div class="container-md">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center text-primary px-3">Servicios</h6>
            <h1 class="mb-5">Nuestros servicios</h1>
        </div>
        <div class="row g-4">
            <div v-for="(item, index) in services" class="col-lg-3 col-sm-6 wow fadeInUp" :data-wow-delay="(item.delay * 0.2 + 0.1)+'s'">
                <div class="service-item rounded pt-3">
                    <div class="p-4">
                        <i class="text-primary mb-4" :class="item.icono"></i>
                        <h5>{{ item.titulo }}</h5>
                        <p>{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    import { BNavbar, BBadge, BNavbarBrand, BNavbarToggle, BNavbarNav, BNavItem, BCollapse, BNavForm, BFormInput, BButton, BNavItemDropdown, BDropdownItem } from 'bootstrap-vue'

    export default {
        name: 'Services',
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
        data() {
            return {
                services : [
                    {
                        icono   : ' fa fa-3x fa-swimmer ',
                        delay   : 1,
                        titulo  : 'Alberca al aire libre',
                        text    : '',
                    },
                    {
                        icono   : ' fa fa-3x fa-wifi ',
                        delay   : 2,
                        titulo  : 'Wifi gratis',
                        text    : '',
                    },
                    {
                        icono   : ' fa fa-3x fa-bed ',
                        delay   : 3,
                        titulo  : 'Habitaciones familiares',
                        text    : '',
                    },
                    {
                        icono   : ' fa fa-3x fa-car ',
                        delay   : 4,
                        titulo  : 'Estacionamiento gratis',
                        text    : '',
                    },
                    {
                        icono   : ' fa fa-3x fa-bed ',
                        delay   : 5,
                        titulo  : 'Habitaciones para no fumadores',
                        text    : '',
                    },
                    {
                        icono   : ' fa fa-3x fa-broom ',
                        delay   : 6,
                        titulo  : 'Servicio diario de limpieza',
                        text    : '',
                    },
                    {
                        icono   : ' fa fa-3x fa-utensils ',
                        delay   : 7,
                        titulo  : 'Convenios con restaurantes',
                        text    : '',
                    },
                    {
                        icono   : ' fa fa-3x fa-gamepad ',
                        delay   : 8,
                        titulo  : 'Actividades recreativas',
                        text    : '',
                    },
                ],
            }
        },
    }
</script>
