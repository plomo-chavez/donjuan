<template>
    <div>
        <div class="col">
            <p class="pb-0 mb-0 font-weight-bolder text-black">Fecha de Hospedaje:</p>
            <date-range-picker
                class="col-12 p-0 m-0 text-center"
                :ranges="false"
                :locale-data="locate"
                v-model="dateRange"
                :min-date="new Date()"
            />
        </div>
        <customPerson
            :addTxt="'Nuevo huesped'"
            :data="reservacion"
            @changeReservacion="handleChangeReservacion"
        />
    </div>
  </template>

  <script>
  import DateRangePicker from 'vue2-daterange-picker'
  import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
  import customPerson from '@currentComponents/customPerson.vue'
  import customHelpers  from '@helpers/customHelpers'
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
            dateRange: {
                startDate: null,
                endDate: null,
            },
        }
    },
    mixins : [customHelpers],
    props: {
        reservacion: {
            type    : Object,
            default : {}
        },
    },
    watch:{
        'reservacion': {
            deep: true,
            handler(newVal, oldVal) {
                if (!this.fechasSonIguales(newVal.fechaInicio, oldVal.fechaInicio) || !this.fechasSonIguales(newVal.fechaFin, oldVal.fechaFin)) {
                    this.updateDateRange();
                }
            }
        },
        'dateRange': {
            deep: true,
            handler(newVal, oldVal) {
                if (!this.fechasSonIguales(newVal.startDate, oldVal.startDate) || !this.fechasSonIguales(newVal.endDate, oldVal.endDate)) {
                    console.log(newVal);
                    this.$emit('changeReservacion', {
                        ...this.reservacion,
                        fechaInicio: this.formatoFechaYMD(newVal.startDate),
                        fechaFin: this.formatoFechaYMD(newVal.endDate),
                    });
                }
            }
        }
    },
    beforeMount(){
        console.log('beforeMount => this.reservacion', this.reservacion)
        let tmp = {}
        if (this.reservacion.fechaInicio){
            tmp.startDate = new Date(this.reservacion.fechaInicio)
        }
        if (this.reservacion.fechaFin){
            tmp.endDate = new Date(this.reservacion.fechaFin)
        }
        this.dateRange = {...tmp}
    },
    methods: {
        fechasSonIguales(fecha1, fecha2) {
            return this.formatoFechaYMD(fecha1) === this.formatoFechaYMD(fecha2);
        },
        updateDateRange() {
            let tmp = {};
            if (this.reservacion.fechaInicio && !this.fechasSonIguales(this.dateRange.startDate, this.reservacion.fechaInicio)) {
                tmp.startDate = new Date(this.reservacion.fechaInicio);
            }
            if (this.reservacion.fechaFin && !this.fechasSonIguales(this.dateRange.endDate, this.reservacion.fechaFin)) {
                tmp.endDate = new Date(this.reservacion.fechaFin);
            }
            this.dateRange = { ...this.dateRange, ...tmp };
        },
        handleChangeReservacion(data){
            this.$emit('changeReservacion', data);
        },
        changeValue(data){
            let payload = this.copyObject(this.reservacion)
            console.log(data)
        },
    },
  }
  </script>
