<template>
    <div class="container-xxl py-5">
        <div class="container-md">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style="min-height: 400px;">
                    <div style="position: relative; width: 100%; height: 100%;"> <!-- Ajusta la altura como necesites -->
                        <img class="position-absolute w-100 h-100" src="../img/donjuan/Logo.jpg" alt="" style="object-fit: contain; top: 0; left: 0;">
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h1 class="mb-4">Bienvenido a Hotel Donjuan</h1>
                    <p class="mb-4">Nos encontramos a 500 metros de la marina de Cabo San Lucas, en el estado de Baja California Sur. A 1 Km de la playa El Médano. A 2 Km de la playa La Empacadora o Acapulquito. A 600 metros de La Plaza Puerto Paraiso.</p>
                    <p class="mb-4">Tenemos recepción 24 horas. WIFI de alta velocidad gratuito en todo el hotel. Ideal para trabajos remotos, videoconferencias HD y aplicaciones de alta demanda.</p>
                    <p class="mb-4">Todas las habitaciones del hotel cuentan con una decoración agradable y amena para su descanso. Cuentan con aire acondicionado, agua fría y caliente, baño privado con regaderas tipo cascada, espejo con luz led. Smart TV con servicios de Netflix y YouTube incluidos para que el entretenimiento no se detenga.</p>
                    <p class="mb-4">Contamos con alberca al aire libre ubicada en nuestra terraza, la cual cuenta con una profundidad de 1.30 metros, tiene una banca interior que les permite disfrutarla sentados. Lo más sobresaliente es que tenemos calefacción lo cual permite que se puedan relajar con una alberca con temperatura idónea para nadar. </p>
                    <p class="mb-4">A nuestros alrededores contamos con varios restaurantes y tiendas a los cuales pueden llegar caminando para que puedan disfrutar de la experiencia local de este destino turístico.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { BNavbar, BBadge, BNavbarBrand, BNavbarToggle, BNavbarNav, BNavItem, BCollapse, BNavForm, BFormInput, BButton, BNavItemDropdown, BDropdownItem } from 'bootstrap-vue'

    export default {
        name: 'Jumbo',
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
    }
</script>
