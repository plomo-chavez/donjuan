<template>
  <div>
    <h1>Mi Calendario</h1>
    <simple-calendar></simple-calendar>
  </div>
</template>

<script>
import SimpleCalendar from 'vue2-simple-calendar'

export default {
  name: 'CalendarComponent',
  components: {
    SimpleCalendar
  }
}
</script>
