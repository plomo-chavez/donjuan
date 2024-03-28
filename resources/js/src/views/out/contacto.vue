<template>
    <TemplateOut>
        <div>
            <Jumbo />
            <!-- Contact Start -->
            <div class="container-xxl py-5">
                <div class="container-md">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h1 class="mb-1">Queremos escucharte</h1>
                        <h3 class="mb-5">Puedes visitarnos en nuestras instalaciones o manda un correo con tu inquietud</h3>
                        <div class="row g-4">
                    </div>
                    <div class="row">
                        <div :class="screenWidth < 1200 ? 'col-12' : 'col-6'" class="mb-3 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="d-flex align-items-center mb-4" @click="abrirGoogleMaps">
                                <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style="width: 50px; height: 50px;">
                                    <i class="fa fa-map-marker-alt text-white"></i>
                                </div>
                                <div class="ms-3 ml-2">
                                    <h5 class="text-primary text-left">Ubicación</h5>
                                    <p class="mb-0">Matamoros y Niños Héroes No. 12, Cabo San Lucas, Mexico</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-4"  @click="enviarWhatsApp">
                                <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style="width: 50px; height: 50px;">
                                    <i class="fa fa-phone-alt text-white"></i>
                                </div>
                                <div class="ms-3 ml-2">
                                    <h5 class="text-primary text-left">Teléfono</h5>
                                    <p class="mb-0">+52 624 143 7395</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center"  @click="enviarCorreo">
                                <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style="width: 50px; height: 50px;">
                                    <i class="fa fa-envelope-open text-white"></i>
                                </div>
                                <div class="ms-3 ml-2">
                                    <h5 class="text-primary text-left">Correo</h5>
                                    <p class="mb-0">info@donjuanbymelida.com</p>
                                </div>
                            </div>
                        </div>
                        <div :class="screenWidth < 1200 ? 'col-12' : 'col-6'" class="mb-3 text-center wow fadeInUp" data-wow-delay="0.3s">
                                <iframe class="position-relative rounded responsive"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.752999746238!2d-109.91736485902601!3d22.885581021510447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86af4aefee6ca401%3A0xe9e9a9d9cab46bc6!2sDonjuan%20By%20Melida%20Hotel!5e0!3m2!1ses-419!2smx!4v1686648518211!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div :class="screenWidth < 1200 ? 'col-12' : 'col-8 mx-auto'" class="mb-3 wow fadeInUp" data-wow-delay="0.5s">
                            <h2>Envianos un correo con tus comentarios:</h2>
                            <form @submit.prevent="enviarCorreo">
                                <div class=" col-12 row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input 
                                                type="text" 
                                                v-model="mail['persona']"
                                                class="form-control" 
                                                id="name" 
                                                placeholder="Your Name">
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" 
                                                v-model="mail['correo']" class="form-control" id="email" placeholder="Your Email">
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-6">
                                        <div class="form-floating">
                                            <input type="phone" 
                                                v-model="mail['telefono']" class="form-control" id="phone" placeholder="Your CellPhone">
                                            <label for="email">Your CellPhone</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-6">
                                        <div class="form-floating">
                                            <input type="text" 
                                                v-model="mail['asunto']" class="form-control" id="subject" placeholder="Subject">
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" 
                                                v-model="mail['mensaje']"  placeholder="Leave a message here" id="message" style="height: 100px"></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <!-- Contact End -->
        </div>
    </TemplateOut>
</template>
  
<script>
    import TemplateOut from './templateOut.vue';
    import Jumbo from './components/jumbo.vue'
    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'

    export default {
        components: {
            TemplateOut,
            Jumbo,
        },
        data() {
            return {
                mail:{
                    persona : null,
                },
            }
        },
        mixins : [customHelpers],
        methods: {
            enviarCorreo () {
                this.loading();
                peticiones
                    .resourcesOut({
                        resources: 'sendMail',
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
            abrirGoogleMaps() {
                const url = "https://www.google.com/maps/place/Donjuan+By+Melida+Hotel/@22.885576,-109.9196662,17z/data=!3m1!4b1!4m9!3m8!1s0x86af4aefee6ca401:0xe9e9a9d9cab46bc6!5m2!4m1!1i2!8m2!3d22.8855761!4d-109.9147953!16s%2Fg%2F1td614yw?entry=ttu";
                window.open(url, '_blank');
            },
            enviarWhatsApp() {
                const telefono = '+526241437395'; // Número al que deseas enviar el mensaje
                const mensaje = encodeURIComponent('Hola, quiero más información.'); // Mensaje URL-encoded
                const urlWhatsApp = `https://wa.me/${telefono}?text=${mensaje}`;
                window.open(urlWhatsApp, '_blank');
            },
            enviarCorreo() {
                const destinatario = 'info@donjuanbymelida.com'; // Correo del destinatario
                const asunto = encodeURIComponent('Informacion sobre el Hotel DonJuan by Melida'); // Asunto URL-encoded
                const cuerpoCorreo = encodeURIComponent('Hola, estoy interesado en obtener más información.'); // Cuerpo del correo URL-encoded
                const urlCorreo = `mailto:${destinatario}?subject=${asunto}&body=${cuerpoCorreo}`;
                window.location.href = urlCorreo;
            },
        },
    }
  </script>