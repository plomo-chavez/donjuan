<template>
    <div>
        <LinkCSS />
        <Navbar />
        <Jumbo />

    <!-- Contact Start -->
    <div class="container-xxl py-5">
        <div class="container-md">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title bg-white text-center text-primary px-3">Contactanos</h6>
                <h1 class="mb-1">Queremos escucharte</h1>
                <h3 class="mb-5">Puedes visitarnos en nuestras instalaciones o manda un correo con tu inquietud</h3>
                <div class="row g-4">
            </div>
            <div class="row">
                <div :class="screenWidth < 1200 ? 'col-12' : 'col-6'" class="mb-3 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="d-flex align-items-center mb-4">
                        <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style="width: 50px; height: 50px;">
                            <i class="fa fa-map-marker-alt text-white"></i>
                        </div>
                        <div class="ms-3 ml-2">
                            <h5 class="text-primary text-left">Ubicación</h5>
                            <p class="mb-0">Matamoros y Niños Héroes No. 12, Cabo San Lucas, Mexico</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-4">
                        <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style="width: 50px; height: 50px;">
                            <i class="fa fa-phone-alt text-white"></i>
                        </div>
                        <div class="ms-3 ml-2">
                            <h5 class="text-primary text-left">Telefono</h5>
                            <p class="mb-0">+52 624 143 7395</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
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
        <Pie />
    </div>

  </template>
    <script>
    import LinkCSS from './components/linksCSS.vue'
    import Navbar from './components/navbar.vue'
    import Jumbo from './components/jumbo.vue'
    import About from './components/about.vue'
    import Services from './components/services.vue'
    import Habitaciones from './components/habitaciones.vue'
    import Booking from './components/booking.vue'
    import Steps from './components/steps.vue'
    import Pie from './components/footer.vue'
    import { BNavbar, BBadge, BNavbarBrand, BNavbarToggle, BNavbarNav, BNavItem, BCollapse, BNavForm, BFormInput, BButton, BNavItemDropdown, BDropdownItem } from 'bootstrap-vue'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import './lib/animate/animate.min.css';
    import './lib/owlcarousel/assets/owl.carousel.min.css';
    import './css/myStyle.css';
    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'

        export default {
            name: 'Inicio',
            components: {
                Navbar,
                LinkCSS,
                Jumbo,
                About,
                Services,
                Habitaciones,
                Booking,
                Steps,
                Pie,
            },
            mounted() {
                // Escuchamos el evento de cambio de tamaño de ventana
                window.addEventListener('resize', this.onResize);
                const jqueryScript = document.createElement('script');
                jqueryScript.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
                document.body.appendChild(jqueryScript);

                const bootstrapScript = document.createElement('script');
                bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js';
                document.body.appendChild(bootstrapScript);

                // const icons = document.createElement('script');
                // icons.src = 'https://use.fontawesome.com/37d27d8488.js';
                // document.body.appendChild(icons);

                const wowScript = document.createElement('script');
                wowScript.src = 'lib/wow/wow.min.js';
                document.body.appendChild(wowScript);

                const easingScript = document.createElement('script');
                easingScript.src = 'lib/easing/easing.min.js';
                document.body.appendChild(easingScript);

                const waypointsScript = document.createElement('script');
                waypointsScript.src = 'lib/waypoints/waypoints.min.js';
                document.body.appendChild(waypointsScript);

                const owlcarouselScript = document.createElement('script');
                owlcarouselScript.src = 'lib/owlcarousel/owl.carousel.min.js';
                document.body.appendChild(owlcarouselScript);

                const momentScript = document.createElement('script');
                momentScript.src = 'lib/tempusdominus/js/moment.min.js';
                document.body.appendChild(momentScript);

                const momenttimezoneScript = document.createElement('script');
                momenttimezoneScript.src = 'lib/tempusdominus/js/moment-timezone.min.js';
                document.body.appendChild(momenttimezoneScript);

                const tempusdominusScript = document.createElement('script');
                tempusdominusScript.src = 'lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js';
                document.body.appendChild(tempusdominusScript);
            },
            data() {
                return {
                    mail:{
                        persona : null,
                    },
                    screenWidth: window.innerWidth,
                    screenHeight: window.innerHeight,
                }
            },
            beforeDestroy() {
                // Eliminamos el evento de cambio de tamaño de ventana
                window.removeEventListener('resize', this.onResize);
            },
            mixins : [customHelpers],
            methods: {
                onResize() {
                    this.screenWidth = window.innerWidth;
                    this.screenHeight = window.innerHeight;
                },
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
            },
        }
    </script>


  <style>


  </style>
