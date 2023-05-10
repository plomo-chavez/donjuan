<template>
    <div>
        <div class="col">
            <p class="pb-0 mb-0 font-weight-bolder text-black">Fechas de la reservación:</p>
            <date-range-picker
                class="col-12 p-0 m-0 text-center"
                :ranges="false"
                :locale-data="locate"
                v-model="dateRange"
                @input="changeValue"
                :min-date="new Date()"
            />
        </div>
        <customPerson
        />
    </div>
  </template>

  <script>
  import DateRangePicker from 'vue2-daterange-picker'
  import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
  import customPerson from '@currentComponents/customPerson.vue'
import { methods } from 'vue-echarts'

  export default {
    components: {
      DateRangePicker,
      customPerson
    },
    data() {
        return {
            locate : {
                direction: 'ltr',
                format: 'mm/dd/yyyy',
                separator: ' - ',
                applyLabel: 'Aplicar',
                cancelLabel: 'Cancelar',
                weekLabel: 'Sem',
                customRangeLabel: 'Rango Personalizado',
                daysOfWeek: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
                monthNames: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                firstDay: 0
            },
            dateRange: {},
        }
    },
    props: {
        reservacion: {
            type    : Object,
            default : {}
        },
    },
    methods: {
        changeValue(data){
            let payload = this.copyObject(this.reservacion)
            console.log(data)
            this.$emit('changeReservacion', payload)
        },
    },
  }
  </script>
