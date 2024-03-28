<template>
    <TemplateOut>
        <div>
            <Jumbo />
            <About />
            <Services />
            <Habitaciones />
            <Booking />
            <Steps />
        </div>
    </TemplateOut>
</template>
  
<script>
    import TemplateOut from './templateOut.vue';
    import Jumbo from './components/jumbo.vue'
    import About from './components/about.vue'
    import Services from './components/services.vue'
    import Habitaciones from './components/habitaciones.vue'
    import Booking from './components/booking.vue'
    import Steps from './components/steps.vue'

    export default {
        components: {
            TemplateOut,
            Jumbo,
            About,
            Services,
            Habitaciones,
            Booking,
            Steps,
        }
    }
  </script>
  