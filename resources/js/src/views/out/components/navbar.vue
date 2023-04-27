<template>
    <div>
        <!-- Navbar & Hero Start -->
            <div class="container-fluid position-relative p-0">
                <nav class="navbar bg-dark navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" class="navbar-brand p-0">
                        <!-- <h1 class="text-primary m-0"><i class="fa fa-map-marker-alt me-3"></i>Hotel Donjuan</h1> -->
                        <img src="../img/donjuan/iconotipo.png" class="my-auto" alt="Logo">
                        <img src="../img/donjuan/texto.png" class="my-auto" alt="Logo">
                        <!-- <img src="../img/donjuan/texto.png" alt="Logo"> -->
                    </a>
                    <button class="navbar-toggler text-white"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0">
                            <a href="/inicio" class="nav-item nav-link active">Inicio</a>
                            <a href="/inicio" class="nav-item linkdark">Acerca</a>
                            <!-- <a href="service.html" style="color:white" class="nav-item nav-link">Services</a>
                            <a href="package.html" class="nav-item nav-link">Packages</a>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div class="dropdown-menu m-0">
                                    <a href="destination.html" class="dropdown-item">Destination</a>
                                    <a href="booking.html" class="dropdown-item">Booking</a>
                                    <a href="team.html" class="dropdown-item">Travel Guides</a>
                                    <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                    <a href="404.html" class="dropdown-item">404 Page</a>
                                </div>
                            </div> -->
                            <!-- <a href="contact.html" class="nav-item nav-link">Contact</a> -->
                        </div>
                        <a href="" class="btn btn-primary rounded-pill py-2 px-4">Reservar</a>
                    </div>
                </nav>

            </div>
        <!-- Navbar & Hero End -->
    </div>
    </template>

    <script>


//   import './css/style.css';
//   import './lib/animate/animate.min.css';
//   import './lib/owlcarousel/assets/owl.carousel.min.css';
//   import './lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';
//   import './css/bootstrap.min.css';

export default {
  name: 'Navbar',
}
</script>
<style>
  /* Estilo para el enlace cuando no se está haciendo hover */
  .nav-item .nav-linkk:not(:hover) {
    color: white !important;
  }
    a.nav-item.linkdark:hover {
        color: #86b817!important;
    }
    a.nav-item.linkdark {
        color: white!important;
    }
    .linkdark {
        font-family: 'Nunito', sans-serif;
        position: relative;
        color: #FFFFFF !important;
        font-size: 18px;
        font-weight: 600;
        outline: none;
        transition: .5s;
        padding: 10px 0;
    }
</style>
