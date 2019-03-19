<!DOCTYPE html>
    <html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>ngerti.net</title>
        <!-- Styles -->
        <link href="{{ asset('css/style.css') }}" rel="stylesheet">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/all.css') }}" rel="stylesheet">
        <link rel="shortcut icon" href="{{ asset('/images/favicon.png') }}">

    </head>
    <body>

      <!-- Image and text -->
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg" id="navbarcolor">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
          <img src="/images/favicon.png" width="30" height="30" class="d-inline-block align-top" alt="">
          <span id="brandName">HOME</span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Login
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="{{ route('register') }}">Register</a>
                <a class="dropdown-item" href="{{ route('login') }}">Login</a>
              </div>
            </li>
        </div>
        </div>
      </nav>
            
            @yield('content')


        <script src="{{ asset('js/app.js') }}"></script>
    </body>
    </html>

