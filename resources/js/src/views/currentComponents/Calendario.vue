<template>
  <div>
    <component v-bind:is="withCard ? 'b-card' : 'div'"
        :class="withCard ? 'col-12 p-2 ' : '' "
    >
        <full-calendar
            ref="calendar"
            :config="{
                ...config,
                viewRender: handleChangeMonth,
                eventClick: handleSelect,
            }"
            :events="fechas"
        />
    </component>
  </div>
</template>

<script>
import moment from 'moment'
import { FullCalendar } from 'vue-full-calendar'
import 'fullcalendar/dist/locale/es'
import 'fullcalendar/dist/fullcalendar.css'
import peticiones from '@/apis/usePeticiones'
import customHelpers  from '@helpers/customHelpers'


import {
    BCard,
} from 'bootstrap-vue'
export default {
    name: 'CalendarComponent',
    mixins : [customHelpers],
    components: {
        FullCalendar,
        BCard
    },
    mounted() {},

    props: {
        fechas: {
            type: Array,
            default: () => [],
        },
        withCard: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            data :null,
			config: {
                locale: 'es',
                defaultDate: new Date(),
                defaultView: 'month',
            },
        }
    },
    beforeMount() {
    },
    methods:{
        handleSelect(data){
            this.$emit('fechaSeleccionada',data)
        },
        handleChangeMonth(e){
            // console.log(e);
        },
    }
}
</script>
<style lang="scss">
    @import "../../../../scss/base/bootstrap-extended/_variables.scss";
    .fc-button.fc-state-default{
        border-color: $dark !important;
        background-color: $dark !important;
        background-image: none!important;
        color:white!important;
        text-align: center!important;
        border-radius: 0.4rem!important;
        margin-left: 2px!important;
        margin-right: 2px!important;
    }
    .fc-right > .fc-button-group {
        display: none!important;
    }
    .fc-day-header > span,
    .fc-center > h2 {
        text-transform: uppercase!important;;
    }
    .fc-event {
        background-color:  $primary !important;;
    }
    .fc-event-container > a > div > span {
        color: white!important;;
    }
</style>
