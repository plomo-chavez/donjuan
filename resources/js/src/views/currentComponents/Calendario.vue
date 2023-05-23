<template>
  <div>
	<full-calendar
        ref="calendar"
        :config="{
            ...config,
            viewRender: handleChangeMonth,
            eventClick: handleSelect,

        }"
        :events="fechas"
    />
  </div>
</template>

<script>
import moment from 'moment'
import { FullCalendar } from 'vue-full-calendar'
import 'fullcalendar/dist/locale/es'
import 'fullcalendar/dist/fullcalendar.css'
import peticiones from '@/apis/usePeticiones'
import customHelpers  from '@helpers/customHelpers'

export default {
    name: 'CalendarComponent',
    mixins : [customHelpers],
    components: {
        FullCalendar
    },
    mounted() {},

    props: {
        fechas: {
            type: Array,
            default: () => {},
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
<style>
    .fc-right > .fc-button-group {
        display: none!important;;
    }
    .fc-day-header > span,
    .fc-center > h2 {
        text-transform: uppercase!important;;
    }
    .fc-event {
        background-color: cadetblue!important;;
    }
    .fc-event-container > a > div > span {
        color: white!important;;
    }
</style>
