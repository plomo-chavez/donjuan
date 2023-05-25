<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

  <title>Don juan by Melida Hotel</title>

  <!-- Splash Screen/Loader Styles -->
  <link rel="stylesheet" type="text/css" href="{{ asset(mix('css/loader.css')) }}" />

  <!-- Styles -->
  <link rel="stylesheet" href="{{ asset(mix('css/core.css')) }}">

  <!-- Favicon -->
  <link rel="shortcut icon" href="{{ asset('logo.png') }}">

  <!-- Font -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
    rel="stylesheet">
</head>

<body>
  <noscript>
    <strong>Lo sentimos, si puede ver esta pantalla comuniquese con su proveedor a este correo: info@donjuanbymelida.com

.</strong>
  </noscript>
  <div id="loading-bg">
    <div class="loading-logo"
        style="
            left:   calc(50% - 80px);
            top:    calc(50% - 70px);
        "
    >
        <div style="
            width:100%;
            display: flex;
            justify-content: center;
            align-items: center;
        ">
            <img src="{{ asset('logo.png') }}" alt="Logo" />
        </div>
        <div style="
            width:100%;
            margin-top:60px;
        ">
            <div class="loading">
            <div class="effect-1 effects"></div>
            <div class="effect-2 effects"></div>
            <div class="effect-3 effects"></div>
        </div>
        </div>
        <div style="
            width:100%;
            margin-top:20px;
        ">
            <h1 style="color:white"><strong>CARGANDO ...!!</strong></h1>
        </div>
    </div>
    <!-- <div class="loading">
      <div class="effect-1 effects"></div>
      <div class="effect-2 effects"></div>
      <div class="effect-3 effects"></div>
    </div> -->
    <div class="loading-back"></div>
  </div>
  <div id="app">
  </div>

  <script src="{{ asset(mix('js/app.js')) }}"></script>

</body>

</html>
