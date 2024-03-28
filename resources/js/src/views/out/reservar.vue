<template>
    <TemplateOut>
        <div>
        <div class="text-center py-4 wow fadeInUp" data-wow-delay="0.1s">
            <h6 class="display-4 txtTitle">Reservaciones</h6>
        </div>
        <Calendar :class="screenWidth < 800 ? 'col' : 'ww-800'" class="col-11 mx-auto" />
        </div>
    </TemplateOut>
  </template>
  
  <script>
  import TemplateOut from './templateOut.vue';
  import Calendar from '@currentComponents/Calendario.vue'

  export default {
    components: {
        TemplateOut,
        Calendar,
    }
  }
  </script>
  