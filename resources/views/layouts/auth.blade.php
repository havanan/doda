<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')</title>
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&amp;subset=all" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link href="{{asset('css/auth.css')}}" rel="stylesheet" type="text/css"  />
    <!-- favicon -->
    <link rel="shortcut icon" href="{{asset('img/favicon.ico')}}" />
    @yield('css')
</head>
<body>
<div class="limiter">
    @yield('content')
</div>
<script src="{{asset('js/auth.js')}}" ></script>
<!-- end js include path -->
@yield('js')
</body>
</html>
