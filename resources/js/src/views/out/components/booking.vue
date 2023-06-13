<template>
    <!-- Booking Start -->
    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container-md">
            <div class="booking p-5">
                <div class="row g-5 align-items-center">
                    <div class="col-md-6 text-white">
                        <h1 class="text-white mb-4">¿Quieres reservar?</h1>
                        <p class="mb-4">Sin ya tienes todo preparado para reservar, puedes hacerlo dandole click en el siguiente botón</p>
                        <p class="mb-4">De lo contrario si no tienes nada y te gustaria que te apoyaramos, rellena el siguiente formulario pra que nos manden un correo con todas tus necesidades y nosotros hacer toda la chamba.</p>
                        <a class="btn btn-outline-light py-3 px-5 mt-2" href="">Ver disponibilidad</a>
                    </div>
                    <div class="col-md-6">
                        <h1 class="text-white mb-4">Dejanos la chamba</h1>
                        <b-form @submit="enviarCorreo" @reset="onReset"  >
                            <label class="col-12 text-white fw-bolder">Nombre:</label>
                            <b-form-input
                                id="input-2"
                                v-model="mail.nombre"
                                placeholder="Introduce tu nombre"
                                required
                            />
                            <label class="col-12 text-white fw-bolder">Correo electronico:</label>
                            <b-form-input
                                id="input-1"
                                v-model="mail.correo"
                                type="email"
                                placeholder="Introduce un correo valido"
                                required
                            />
                            <label class="col-12 text-white fw-bolder">Telefono:</label>
                            <b-form-input
                                id="input-1"
                                v-model="mail.phone"
                                type="tel"
                                placeholder="Introduce un correo valido"
                                required
                            />
                            <label class="col-12 text-white fw-bolder">Necesidades:</label>
                            <b-form-textarea
                                id="textarea"
                                v-model="mail.mensaje"
                                placeholder="Descripbe todo lo que requieras ..."
                                rows="3"
                                max-rows="6"
                            />
                            <div class=" mt-4 d-flex justify-content-between">
                                <b-button variant="outline-light" @click="enviarCorreo">Enviar información</b-button>
                                <b-button variant="outline-danger" @click="onReset">Reiniciar</b-button>
                            </div>
                            </b-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Booking Start -->
</template>
<script>
    import {

        BForm,
        BFormGroup,
        BFormInput,
        BFormSelect,
        BFormTextarea,
        BFormCheckbox,
        BButton
     } from 'bootstrap-vue'
    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'

    export default {
        name: 'Booking',
        components: {
            BForm,
            BFormGroup,
            BFormInput,
            BFormSelect,
            BFormTextarea,
            BFormCheckbox,
            BButton
        },
        data() {
            return {
                mail:{},
            }
        },
        mixins : [customHelpers],
        methods: {
            onSubmit(event) {
                event.preventDefault()
                this.enviarCorreo();
            },
            onReset(event) {
                this.mail = {}
            },

            enviarCorreo () {
                    this.loading();
                    peticiones
                        .resourcesOut({
                            resources: 'sendMailInicio',
                            payload: this.mail,
                        })
                        .then(response => {
                            this.loading(false);
                            if (response.data.result) {
                                this.mail = {}
                            }
                            setTimeout(() => {
                                this.messageSweet({
                                    message: response.data.message,
                                    icon: response.data.result ? 'success' : 'error',
                                });
                            }, 100);
                        })
                        .catch(error   => { console.log(error); })
                },
        }
    }
</script>
<style scoped>
.lbl > label[for="input-2"] {
    color: white!important;
}

.lbl > label[for="input-1"] {
    color: white!important;
}
</style>
