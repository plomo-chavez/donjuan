<template>
    <div>
        <div class="col-10 my-auto mx-auto">
            <h3 class="col-12 text-center font-weigth-bolder mb-3">¡Estás a un paso de asegurar tu aventura con nosotros!</h3>
            <h6 class="col-12 font-weigth-bold mb-1">Tu reservación está casi lista, solo falta definir cómo deseas realizar el pago para finalizar el proceso. Aquí tienes dos opciones fáciles y seguras para elegir:</h6>
            <h6 class="col-12 mb-1"><strong>Pago en Línea:</strong> Completa tu pago ahora con solo unos clics. Es rápido, seguro y podrás confirmar tu reservación de inmediato.</h6>
            <h6 class="col-12 mb-2"><strong>Pago en Recepción:</strong> Prefieres el contacto humano? No hay problema, puedes pagar al llegar directamente en nuestra recepción.</h6>
            <h6 class="col-12 mb-1">Selecciona la opción que te convenga y sigue los pasos para activar tu reservación. ¡No te llevará más que un momento!</h6>

            <div class="col-12 d-flex justify-content-between">
                <b-button
                size="sm"
                class="my-auto fw-bolder"
                variant="success"
                disabled
            >
                <feather-icon icon="CreditCardIcon" size="16" />
                <span>Pagar en linea</span>
            </b-button>
            <b-button
                size="sm"
                class="my-auto  fw-bolder"
                variant="success"
                @click="() => { handleSaveReservation() }"
            >
                <feather-icon icon="CreditCardIcon" size="16" />
                <span>Pagar en recepción</span>
            </b-button>
            </div>
        </div>
    </div>
</template>
<script>
    import { BButton } from 'bootstrap-vue'
    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'
    export default {
        mixins : [customHelpers],
        components: {
            BButton
        },
        data() {
            return {
                showMessageConfirm : false,
            }
        },
        props: {
            reservacion: {
                type    : Object,
                default : {}
            },
        },
        mounted() {},
        methods: {
            handleShowMessageConfirm(){
                this.$emit('handleGoToCalendario');
            },
            handleSaveReservation(){

                this.loading();
                peticiones.administrarReservaciones({
                    'payload' : {
                        ...this.reservacion,
                        pagada:false,
                        accion : 1,
                    },
                })
                .then(response => {
                    this.messageSweet({
                        message: response.data.message,
                        icon: response.data.result ? 'success' : 'error',
                    });
                    if (response.data.result){
                        this.handleShowMessageConfirm();
                    } 

                    this.loading(false);
                })
                .catch(error   => { console.log(error); })
            },
        },
    }
</script>

