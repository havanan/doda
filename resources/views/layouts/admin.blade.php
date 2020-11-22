<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Admin - @yield('title')</title>
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&amp;subset=all" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link href="{{asset('css/lib.css')}}" rel="stylesheet" type="text/css"  />
    <!-- favicon -->
    <link rel="shortcut icon" href="{{asset('img/favicon.ico')}}" />
    @yield('css')
</head>
<body class="page-header-fixed sidemenu-closed-hidelogo page-content-white page-md header-white white-sidebar-color logo-indigo">
<div class="page-wrapper" id="page-wrapper">
    <!-- start header -->
        @includeIf('admin.components.nav-bar')
    <!-- end header -->
    <!-- start page container -->
    <div class="page-container">
        <!-- start sidebar menu -->
            @includeIf('admin.components.sidebar')
        <!-- end sidebar menu -->
        <!-- start page content -->
        <div class="page-content-wrapper">
            <div class="page-content">
                <div class="page-bar">
                    @include('admin.components.breadcrumb')
                </div>
                @yield('content')
            </div>
        </div>
        <!-- end page content -->
    </div>
    <!-- end page container -->
    <!-- start footer -->
    @includeIf('admin.components.footer')
    <!-- end footer -->
</div>
<!-- start js include path -->
<script src="{{asset('js/lib.js')}}" ></script>
<!-- end js include path -->
@yield('js')
</body>
</html>
