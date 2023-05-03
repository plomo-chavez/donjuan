<template>
  <div>
	<full-calendar
        ref="calendar"
        :config="{
            ...config,
            viewRender: handleChangeMonth
        }"
        :events="events"
        @viewRender="handleChangeMonth"
    />
  </div>
</template>

<script>
	import moment from 'moment'

import { FullCalendar } from 'vue-full-calendar'
import 'fullcalendar/dist/locale/es'


import 'fullcalendar/dist/fullcalendar.css'


export default {
    name: 'CalendarComponent',
    components: {
        FullCalendar
    },
    mounted() {},
    data() {
        return {
			events: [
				{
					title: 'test',
					allDay: true,
					start: moment(),
					end: moment().add(1, 'd'),
				},
				{
					title: 'test',
					allDay: true,
					start: moment(),
					end: moment().add(1, 'd'),
				},
				{
					title: 'test',
					allDay: true,
					start: moment(),
					end: moment().add(1, 'd'),
				},
				{
					title: 'test',
					allDay: true,
					start: moment(),
					end: moment().add(1, 'd'),
				},
				{
					title: 'test',
					allDay: true,
					start: moment(),
					end: moment().add(1, 'd'),
				},
				{
					title: 'test',
					allDay: true,
					start: moment(),
					end: moment().add(1, 'd'),
				},
				{
					title: 'another test',
					start: moment().add(2,'d'),
					end: moment().add(2, 'd').add(2, 'h'),
				},
			],
			config: {
                locale: 'es',
                defaultDate: new Date(2020, 4, 15),
                defaultView: 'month',
			    eventRender: function(event, element) {
            	    console.log(event)
    		    },
                eventClick: function(event, element) {
            	    console.log('event', event)
            	    console.log('element', element)
    		    },
                // viewRender: function(event, element,viw) {
            	//     this.handleChangeMonth(event)
    		    // }
            },
        }
    },
    methods:{
        handleChangeMonth(e){
            console.log(e);
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
