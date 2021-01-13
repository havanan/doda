<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Admin Manager</title>

    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('admin/images/favicon.png')}}">
    <!-- Styles -->
    <link href="{{ asset('koza/css/lib.css') }}" rel="stylesheet">

    @yield('css')

</head>
<body class="fix-header fix-sidebar card-no-border">
<div class="preloader">
    <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
    </svg>
</div>
<div>
    <div id="app">
        <!-- ============================================================== -->
        <!-- Topbar header - style you can find in pages.scss -->
        <!-- ============================================================== -->
    @include('layouts.admin.header')
    <!-- ============================================================== -->
        <!-- End Topbar header -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
    @include('layouts.admin.left-sidebar')
    <!-- ============================================================== -->
        <!-- End Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Page wrapper  -->
        <!-- ============================================================== -->
        <div class="page-wrapper">
            <!-- ============================================================== -->
            <!-- Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
        @include('layouts.admin.bread-crumb')
        <!-- ============================================================== -->
            <!-- End Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Container fluid  -->
            <!-- ============================================================== -->
            <div class="container-fluid">
                @include('layouts.message')
                @yield('content')
            </div>
            <!-- ============================================================== -->
            <!-- End Container fluid  -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- footer -->
            <!-- ============================================================== -->
            <footer class="footer">
                © {{date('yy')}} Admin Tung Store By Anhv
            </footer>
            <!-- ============================================================== -->
            <!-- End footer -->
            <!-- ============================================================== -->
        </div>
        <!-- ============================================================== -->
        <!-- End Page wrapper  -->
        <!-- ============================================================== -->
    </div>
</div>
</body>
<body id="koza-theme" class="template-index  others ">
<div class="shifter-page is-moved-by-drawer" id="PageContainer">
    <div class="wrapper-header wrapper-container">
        <div class="header-type-8">
            <header class="site-header header-default">
                <div class="header-sticky">
                    <div id="header-landing" class="sticky-animate">
                        <div class="wrapper">
                            <div class="container">
                                <div class="grid--full site-header__menubar"><h1
                                            class="site-header__logo order-header  post-large--hide large--hide medium-down--hide">
                                        <a href="index.html" itemprop="url"><img class="normal-logo"
                                                                                 src="../cdn.shopify.com/s/files/1/0438/5698/6280/t/2/assets/logofe34.png?v=6352731190493517205"
                                                                                 alt="koza theme"></a></h1>
                                    <div id="shopify-section-header-model-8" class="shopify-section"><a href="#"
                                                                                                        class="icon-nav close-menu-mb"
                                                                                                        title="Menu Mobile Icon"
                                                                                                        data-menu-mb-toogle><span
                                                    class="icon-line"></span></a>
                                        <div class="grid__item menubar_inner header-bottom" data-sticky-mb>
                                            <div class="wrapper-header-bt">
                                                <div class="header-mb">
                                                    <div class="header-mb-left header-mb-items">
                                                        <div class="hamburger-icon svg-mb"><a href="#" class="icon-nav"
                                                                                              title="Menu Mobile Icon"
                                                                                              data-menu-mb-toogle><span
                                                                        class="icon-line"></span></a></div>
                                                    </div>
                                                    <div class="header-mb-middle header-mb-items">
                                                        <div class="header-logo"><h1 class="site-header__logo" itemscope
                                                                                     itemtype="http://schema.org/Organization">
                                                                <a href="index.html" style="max-width: px;"><img
                                                                            class="normal-logo"
                                                                            src="../cdn.shopify.com/s/files/1/0438/5698/6280/t/2/assets/logofe34.png?v=6352731190493517205"
                                                                            alt="koza theme" itemprop="logo"></a></h1>
                                                        </div>
                                                    </div>
                                                    <div class="header-mb-right header-mb-items">
                                                        <div class="cart-icon svg-mb"><a href="#" title="Cart Icon"
                                                                                         data-cart-toggle>
                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 30 30"
                                                                     xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                     enable-background="new 0 0 30 30">
                                                                    <g>
                                                                        <g>
                                                                            <path d="M20,6V5c0-2.761-2.239-5-5-5s-5,2.239-5,5v1H4v24h22V6H20z M12,5c0-1.657,1.343-3,3-3s3,1.343,3,3v1h-6V5z M24,28H6V8h4v3    h2V8h6v3h2V8h4V28z"></path>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                                <span class="cartCount" data-cart-count>
            0
          </span></a></div>
                                                    </div>
                                                </div>
                                                <div class="header-pc">
                                                    <div class="header-panel-top">
                                                        <div class=" menu_bar_left_customer wide--hide">
                                                            <ul class="menu_bar_right">
                                                                <li class="wishlist"><a href="pages/wishlist.html"
                                                                                        title="Wishlist"><span
                                                                                class="wide--hide">Wishlist</span><i
                                                                                class="fas fa-heart post-large--hide large--hide medium-down--hide"></i></a>
                                                                </li>
                                                                <li class="customer_account">
                                                                    <ul>
                                                                        <li><a href="account/login.html" title="Log in"
                                                                               data-value="value 1">
                                                                                <svg version="1.1" id="Capa_1"
                                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                                     xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                     x="0px" y="0px"
                                                                                     viewBox="0 0 512 512"
                                                                                     style="enable-background:new 0 0 512 512;"
                                                                                     xml:space="preserve"><g>
                                                                                        <g>
                                                                                            <path d="M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z M256,240
			c-57.897,0-105-47.103-105-105c0-57.897,47.103-105,105-105c57.897,0,105,47.103,105,105C361,192.897,313.897,240,256,240z"/>
                                                                                        </g>
                                                                                    </g>
                                                                                    <g>
                                                                                        <g>
                                                                                            <path d="M297.833,301h-83.667C144.964,301,76.669,332.951,31,401.458V512h450V401.458C435.397,333.05,367.121,301,297.833,301z
			 M451.001,482H451H61v-71.363C96.031,360.683,152.952,331,214.167,331h83.667c61.215,0,118.135,29.683,153.167,79.637V482z"/>
                                                                                        </g></svg>
                                                                                <span class="wide--hide">Log in</span></a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <ul class="menu-icon">
                                                            <li class="search-categories-section seeks post-large--hide large--hide medium-down--hide">
                                                                <div class="header-search"><a href="#"
                                                                                              class="site-header__link site-header__search"
                                                                                              id="search_trigger">
                                                                        <svg class="icon icon-search"
                                                                             xmlns="http://www.w3.org/2000/svg"
                                                                             xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                             x="0px" y="0px" viewBox="0 0 100 100"
                                                                             style="enable-background:new 0 0 100 100;"
                                                                             xml:space="preserve"><g>
                                                                                <path d="M67,62.1l25.2,25.2l-4.9,4.9L62.1,67c-13.3,10.7-32.6,9.7-44.6-2.4c-13-13-13-34.1,0-47.1s34.1-13,47.1,0 C76.8,29.5,77.7,48.8,67,62.1z M49.3,31.4c-4.4-4.3,0.9-8.4,4.4-5c5.8,5.3,8.9,13.1,6.1,21.3c-1.5,4.2-7.2,2.9-6.1-1.4 C55.8,41,53.6,34.7,49.3,31.4z M22.4,22.4c-10.3,10.4-10.3,27,0,37.3c10.4,10.3,27,10.3,37.3,0s10.3-26.9,0-37.3 C49.4,12.1,32.8,12.1,22.4,22.4z"></path>
                                                                            </g></svg>
                                                                    </a></div>
                                                            </li>
                                                            <li class="menu_bar_right">
                                                                <div class="customer_account">
                                                                    <ul>
                                                                        <li><a title="Log in" href="account/login.html"><span
                                                                                        class="post-large--hide large--hide medium-down--hide"><svg
                                                                                            version="1.1" id="Capa_1"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                            x="0px" y="0px"
                                                                                            viewBox="0 0 512 512"
                                                                                            style="enable-background:new 0 0 512 512;"
                                                                                            xml:space="preserve"><g><g><path
                                                                                                        d="M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z M256,240
			c-57.897,0-105-47.103-105-105c0-57.897,47.103-105,105-105c57.897,0,105,47.103,105,105C361,192.897,313.897,240,256,240z"/></g></g><g><g><path
                                                                                                        d="M297.833,301h-83.667C144.964,301,76.669,332.951,31,401.458V512h450V401.458C435.397,333.05,367.121,301,297.833,301z
			 M451.001,482H451H61v-71.363C96.031,360.683,152.952,331,214.167,331h83.667c61.215,0,118.135,29.683,153.167,79.637V482z"/></g></svg></span></a>
                                                                        </li>
                                                                        <li><a class="wishlist"
                                                                               href="pages/wishlist.html"
                                                                               title="Wishlist"><span
                                                                                        class="post-large--hide large--hide medium-down--hide"><svg
                                                                                            version="1.1" id="Capa_1"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                            x="0px" y="0px"
                                                                                            viewBox="0 0 512 512"
                                                                                            style="enable-background:new 0 0 512 512;"
                                                                                            xml:space="preserve"><g><g><path
                                                                                                        d="M474.644,74.27C449.391,45.616,414.358,29.836,376,29.836c-53.948,0-88.103,32.22-107.255,59.25
			c-4.969,7.014-9.196,14.047-12.745,20.665c-3.549-6.618-7.775-13.651-12.745-20.665c-19.152-27.03-53.307-59.25-107.255-59.25
			c-38.358,0-73.391,15.781-98.645,44.435C13.267,101.605,0,138.213,0,177.351c0,42.603,16.633,82.228,52.345,124.7
			c31.917,37.96,77.834,77.088,131.005,122.397c19.813,16.884,40.302,34.344,62.115,53.429l0.655,0.574
			c2.828,2.476,6.354,3.713,9.88,3.713s7.052-1.238,9.88-3.713l0.655-0.574c21.813-19.085,42.302-36.544,62.118-53.431
			c53.168-45.306,99.085-84.434,131.002-122.395C495.367,259.578,512,219.954,512,177.351
			C512,138.213,498.733,101.605,474.644,74.27z M309.193,401.614c-17.08,14.554-34.658,29.533-53.193,45.646
			c-18.534-16.111-36.113-31.091-53.196-45.648C98.745,312.939,30,254.358,30,177.351c0-31.83,10.605-61.394,29.862-83.245
			C79.34,72.007,106.379,59.836,136,59.836c41.129,0,67.716,25.338,82.776,46.594c13.509,19.064,20.558,38.282,22.962,45.659
			c2.011,6.175,7.768,10.354,14.262,10.354c6.494,0,12.251-4.179,14.262-10.354c2.404-7.377,9.453-26.595,22.962-45.66
			c15.06-21.255,41.647-46.593,82.776-46.593c29.621,0,56.66,12.171,76.137,34.27C471.395,115.957,482,145.521,482,177.351
			C482,254.358,413.255,312.939,309.193,401.614z"/></g></g></svg></span></a></li>
                                                                        <li class="header-bar__module cart header_cart post-large--hide large--hide medium-down--hide">
                                                                            <div class="baskettop"><a href="#"
                                                                                                      class="icon-cart-arrow cart-icon"
                                                                                                      data-cart-toggle>
                                                                                    <svg height="512pt"
                                                                                         viewBox="0 -31 512.00026 512"
                                                                                         width="512pt"
                                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0"/>
                                                                                        <path d="m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/>
                                                                                        <path d="m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/>
                                                                                    </svg>
                                                                                    <div id="cartCount" data-cart-count>
                                                                                        0
                                                                                    </div>
                                                                                </a></div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <style>
                                            @media only screen and (min-width: 1200px) {

                                                /* Top block */
                                                .header-type-8 .header-bar__module.cart .baskettop a.icon-cart-arrow #cartCount {
                                                    background: #b17862;
                                                    color: #ffffff;
                                                }

                                                .header-type-8 .header-bar__module.cart .baskettop a.icon-cart-arrow:hover #cartCount {
                                                    background: #4a3d35;
                                                    color: #ffffff;
                                                }

                                                .header-type-8 .header-bar__module.cart .baskettop a.icon-cart-arrow #cartCount {
                                                    background: #b17862;
                                                    color: #ffffff;
                                                }

                                                .header-type-8 .header-bar__module.cart .baskettop a.icon-cart-arrow:hover #cartCount {
                                                    background: #4a3d35;
                                                    color: #ffffff;
                                                }


                                                /* Currency block */
                                                .header-type-8 .lang-currency-groups .dropdown-label, .header-type-8 .lang-currency-groups .dropdown-toggle:after {
                                                    color: #9a9a9a;
                                                }

                                                .header-type-8 .lang-currency-groups .dropdown-label:hover, .header-type-8 .lang-currency-groups .dropdown-toggle:hover::after {
                                                    color: #b17862;
                                                }

                                                .header-type-8 .header_currency ul li.currency:hover:after {
                                                    border-top-color: #b17862;
                                                }

                                                .header-type-8 .header_currency ul li.currency:after {
                                                    border-top-color: #9a9a9a;
                                                }


                                                /* Cart Summary block */
                                                .header-type-8 a.icon-cart-arrow svg {
                                                    color: #9a9a9a;
                                                }

                                                .header-type-8 a.icon-cart-arrow:hover svg {
                                                    color: #b17862;
                                                }


                                                .header-type-8 .site-nav .widget-featured-product {
                                                    border: 1px solid #b17862;
                                                }

                                                /* Logo block */
                                                .header-type-8 .site-header__logo a {
                                                    color: #1a1a1a;
                                                }

                                                .header-type-8 .site-header__logo a:hover {
                                                    color: #b17862;
                                                }

                                                /* Menu  block */
                                                .header-type-8 .site-header, .mobile-nav-section, .header-type-8 .is-sticky .header-sticky .sticky-animate {
                                                    background: #ffffff;
                                                }

                                                .header-type-8 .desktop-megamenu ul > li {
                                                    color: ;
                                                }

                                                .header-type-8 .desktop-megamenu ul > li > a, .mobile-nav-section .mobile-nav-trigger {
                                                    color: #1a1a1a;
                                                }

                                                .header-type-8 .desktop-megamenu ul > li:hover > a, .header-type-8 .menu-tool .site-nav > li:hover > a.current {
                                                    color: #b17862;
                                                }

                                                .header-type-8 .desktop-megamenu .site-nav > li > a.current {
                                                    color: #b17862;
                                                }

                                                .header-type-8 .site-nav-dropdown, #MobileNav, .mobile-nav__sublist {
                                                    background: #fff;
                                                }

                                                .header-type-8 .site-nav-dropdown .inner > a, .header-type-8 .site-nav .mega-banner .title, .header-type-8 .site-nav .mega-banner .regular-product {
                                                    color: #b17862;
                                                }

                                                .header-type-8 .desktop-megamenu .site-nav-dropdown .inner > a:hover, .header-type-8 .site-nav .mega-menu .product-item .product-title:hover {
                                                    color: #4a3d35;
                                                }

                                                .header-type-8 .desktop-megamenu .site-nav-dropdown li > a, .header-type-8 .menu-tool .site-nav .site-nav-dropdown li a, .header-type-8 .site-nav .mega-menu .product-item .product-title, .header-type-8 .site-nav .widget-featured-product .widget-title h3, #MobileNav a, .mobile-nav__sublist a, .site-nav .widget-featured-nav .owl-prev a, .site-nav .widget-featured-nav .owl-next a {
                                                    color: #1a1a1a;
                                                }

                                                .header-type-8 .desktop-megamenu .site-nav-dropdown li:hover > a, .header-type-8 .menu-tool .site-nav .site-nav-dropdown li a:hover, .header-type-8 .site-nav-dropdown .inner .dropdown a.current, .header-type-8 .menu-tool .site-nav .site-nav-dropdown li a.current, .header-type-8 .site-nav .mega-menu .product-item .product-title:hover, #MobileNav a.current, .mobile-nav__sublist a.current, .site-nav .widget-featured-nav .owl-prev a:hover, .site-nav .widget-featured-nav .owl-next a:hover {
                                                    color: #b17862;
                                                }

                                                /* Dropdown block */
                                                .header-type-8 .menubar-section #Togglemodal i {
                                                    color: ;
                                                }

                                                .header-type-8 .menubar-section #Togglemodal i:hover {
                                                    color: ;
                                                }

                                                .header-type-8 #slidedown-modal {
                                                    background: ;
                                                }

                                                .header-type-8 #slidedown-modal ul li a {
                                                    color:;
                                                }

                                                .header-type-8 #slidedown-modal ul li a:hover {
                                                    color:;
                                                }


                                                /* Search block */
                                                .header-type-8 .search-bar input[type="search"] {
                                                    color: #9a9a9a;
                                                }

                                                .header-type-8 .header-search span svg {
                                                    color: #9a9a9a;
                                                }

                                                .header-type-8 .header-search span:hover svg {
                                                    color: #b17862;
                                                }

                                                .header-type-8 .header-search svg {
                                                    fill: #9a9a9a;
                                                }

                                                .header-type-8 .header-search svg:hover {
                                                    fill: #b17862;
                                                }


                                                .header-type-8 .search-bar__form, .header-type-8 #SearchDrawer, .header-type-8 .search-bar {
                                                    background: #ffffff;
                                                }

                                                .header-type-8 .search-bar input[type="search"]::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                                                    color: #9a9a9a;
                                                }

                                                .header-type-8 .search-bar input[type="search"]::-moz-placeholder { /* Firefox 19+ */
                                                    color: #9a9a9a;
                                                }

                                                .header-type-8 .search-bar input[type="search"]:-ms-input-placeholder { /* IE 10+ */
                                                    color: #9a9a9a;
                                                }

                                                .header-type-8 .search-bar input[type="search"]:-moz-placeholder { /* Firefox 18- */
                                                    color: #9a9a9a;
                                                }

                                                .header-type-8 .menu-icon li a svg, .header-type-8 .header-mobile {
                                                    fill: #9a9a9a;
                                                }

                                                .header-type-8 .menu-icon li a:hover svg, .header-type-8 .header-mobile:hover {
                                                    fill: #b17862;
                                                }

                                                /* Header borders */
                                                .header-type-8 .menu-icon li a svg {
                                                    width: 18px;
                                                    height: 18px;
                                                }

                                                .header-type-8 .menu-icon li a svg, .header-type-8 .header-mobile {
                                                    fill: #9a9a9a;
                                                }

                                                .header-type-8 .menu-icon li a:hover svg, .header-type-8 .header-mobile:hover {
                                                    fill: #b17862;
                                                }

                                                .header-type-8 .menu-icon li.cart .baskettop a.icon-cart-arrow svg {
                                                    width: 22px;
                                                    height: 22px;
                                                }

                                                .header-type-8 .menu-icon li a.wishlist svg {
                                                    width: 20px;
                                                    height: 20px;
                                                }


                                            }


                                            /*   .header-type-8 .header-sticky, .header-type-8 .sticky-animate { position: fixed !important; top: 0 !important; } */


                                        </style>
                                        <script>
                                            var appendPrependMenuMobile = function () {
                                                var headerPanelTop = $('.wrapper-container .header-panel-top'),
                                                    headerPc = $('.wrapper-container .header-pc'),
                                                    wrapperNav = $('.wrapper-navigation'),
                                                    areaMb = wrapperNav.find('.mb-area');

                                                if (window.innerWidth < 1200) {
                                                    headerPanelTop.appendTo(areaMb);
                                                } else {
                                                    headerPc.prepend(headerPanelTop);
                                                }
                                            };

                                            $(document).ready(function () {
                                                appendPrependMenuMobile();
                                            });

                                            var winWidth = $(window).innerWidth();

                                            $(window).on('resize', function () {
                                                var resizeTimerId;

                                                clearTimeout(resizeTimerId);

                                                resizeTimerId = setTimeout(function () {
                                                    var curWinWidth = $(window).innerWidth();

                                                    if ((curWinWidth < 1200 && winWidth >= 1200) || (curWinWidth >= 1200 && winWidth < 1200)) {
                                                        appendPrependMenuMobile();
                                                    }
                                                    winWidth = curWinWidth;
                                                }, 0);
                                            })


                                        </script>
                                    </div>
                                    <div class="menubar-section order-header">
                                        <div class="desktop-megamenu">
                                            <div id="shopify-section-adv-navigation" class="shopify-section">
                                                <div class="wrapper-navigation" data-sticky-pc>
                                                    <div class="main-menu jas-mb-style">
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <div class="mb-area">
                                                                    <nav class="nav-bar" role="navigation">
                                                                        <ul class="site-nav checking">
                                                                            <li class="menu-lv-1 item"><a
                                                                                        class="current"
                                                                                        href="index.html">
                                                                                    Home


                                                                                </a></li>
                                                                            <li class="menu-lv-1 item dropdown mega-menu">
                                                                                <a class="menu__moblie "
                                                                                   href="collections/all.html">
                                                                                    Catalog


                                                                                    <span class="icon-dropdown"
                                                                                          data-toggle-menu-mb><i
                                                                                                class="fa fa-angle-right"
                                                                                                aria-hidden="true"></i></span></a>
                                                                                <div class="sub-menu-mobile menu-mb-translate">
                                                                                    <div class="menu-mb-title"><span
                                                                                                class="icon-dropdown"><i
                                                                                                    class="fa fa-angle-left"
                                                                                                    aria-hidden="true"></i></span>
                                                                                        Catalog

                                                                                    </div>
                                                                                    <div class="site-nav-dropdown style_1">
                                                                                        <div class="container">
                                                                                            <div class="row">
                                                                                                <div class="col-12 col-xl-7">
                                                                                                    <div class="row"
                                                                                                         data-masonry='{ "itemSelector": "[data-gridItem]", "columnWidth": ".grid-sizer" }'>
                                                                                                        <div class="grid-sizer"></div>
                                                                                                        <div data-gridItem
                                                                                                             class="menu-lv-2 inner dropdown col-12 col-xl-4">
                                                                                                            <a class="menu__moblie"
                                                                                                               href="collections/shoes-boots.html"
                                                                                                               class="current">
                                                                                                                Shoes &
                                                                                                                Boots


                                                                                                                <span class="icon-dropdown"
                                                                                                                      data-toggle-menu-mb><i
                                                                                                                            class="fa fa-angle-right"
                                                                                                                            aria-hidden="true"></i></span></a>
                                                                                                            <div class="sub-menu-mobile menu-mb-translate">
                                                                                                                <div class="menu-mb-title">
                                                                                                                    <span class="icon-dropdown"><i
                                                                                                                                class="fa fa-angle-left"
                                                                                                                                aria-hidden="true"></i></span>
                                                                                                                    Shoes
                                                                                                                    &
                                                                                                                    Boots

                                                                                                                </div>
                                                                                                                <ul class="dropdown">
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="products/chelsea-shoe.html">
                                                                                                                            Chelsea
                                                                                                                            Shoe
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="products/chukka-shoe.html">
                                                                                                                            Chukka
                                                                                                                            Shoe
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="products/formal-shoe.html">
                                                                                                                            Formal
                                                                                                                            Shoe
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="products/wellington-shoe.html">
                                                                                                                            Wellington
                                                                                                                            Shoe
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="#">
                                                                                                                            Ballet
                                                                                                                            Shoe
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="#">
                                                                                                                            Loafers
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="#">
                                                                                                                            Brogues
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="#">
                                                                                                                            Court
                                                                                                                            Shoes
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="#">
                                                                                                                            Ankle
                                                                                                                            Boots
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="#">
                                                                                                                            Oxford
                                                                                                                            Shoes
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div data-gridItem
                                                                                                             class="menu-lv-2 inner dropdown col-12 col-xl-4">
                                                                                                            <a class="menu__moblie"
                                                                                                               href="collections/jackets-gloves.html"
                                                                                                               class="current">
                                                                                                                Jackets
                                                                                                                & Gloves


                                                                                                                <span class="icon-dropdown"
                                                                                                                      data-toggle-menu-mb><i
                                                                                                                            class="fa fa-angle-right"
                                                                                                                            aria-hidden="true"></i></span></a>
                                                                                                            <div class="sub-menu-mobile menu-mb-translate">
                                                                                                                <div class="menu-mb-title">
                                                                                                                    <span class="icon-dropdown"><i
                                                                                                                                class="fa fa-angle-left"
                                                                                                                                aria-hidden="true"></i></span>
                                                                                                                    Jackets
                                                                                                                    &
                                                                                                                    Gloves

                                                                                                                </div>
                                                                                                                <ul class="dropdown">
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="products/driving-gloves.html">
                                                                                                                            Driving
                                                                                                                            Gloves
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="products/leather-jacket.html">
                                                                                                                            Leather
                                                                                                                            Jacket
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="products/leather-gloves.html">
                                                                                                                            Leather
                                                                                                                            Gloves
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="#">
                                                                                                                            Bomber
                                                                                                                            Jacket
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="#">
                                                                                                                            Moto
                                                                                                                            Jacket
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="#">
                                                                                                                            Field
                                                                                                                            Jacket
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="#">
                                                                                                                            Shirt
                                                                                                                            Jacket
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="#">
                                                                                                                            Relaxed-Fit
                                                                                                                            Jacket
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="#">
                                                                                                                            Aviator
                                                                                                                            Jacket
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="#">
                                                                                                                            Racer
                                                                                                                            Jacket
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div data-gridItem
                                                                                                             class="menu-lv-2 inner dropdown col-12 col-xl-4">
                                                                                                            <a class="menu__moblie"
                                                                                                               href="collections/bags-clutch.html"
                                                                                                               class="current">
                                                                                                                Bags &
                                                                                                                Clutchs


                                                                                                                <span class="icon-dropdown"
                                                                                                                      data-toggle-menu-mb><i
                                                                                                                            class="fa fa-angle-right"
                                                                                                                            aria-hidden="true"></i></span></a>
                                                                                                            <div class="sub-menu-mobile menu-mb-translate">
                                                                                                                <div class="menu-mb-title">
                                                                                                                    <span class="icon-dropdown"><i
                                                                                                                                class="fa fa-angle-left"
                                                                                                                                aria-hidden="true"></i></span>
                                                                                                                    Bags
                                                                                                                    &
                                                                                                                    Clutchs

                                                                                                                </div>
                                                                                                                <ul class="dropdown">
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="products/envelop-bag.html">
                                                                                                                            Envelop
                                                                                                                            Bag
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="products/ladies-clutch.html">
                                                                                                                            Ladies
                                                                                                                            Clutch
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="products/leather-backpack.html">
                                                                                                                            Leather
                                                                                                                            Backpack
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="products/leather-mobile-case.html">
                                                                                                                            Leather
                                                                                                                            Mobile
                                                                                                                            Case
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="products/leather-satchel.html">
                                                                                                                            Leather
                                                                                                                            Satchel
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="products/money-clip-wallet.html">
                                                                                                                            Money
                                                                                                                            Clip
                                                                                                                            Wallet
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="products/navy-laptop-bag.html">
                                                                                                                            Navy
                                                                                                                            Laptop
                                                                                                                            Bag
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="#">
                                                                                                                            Messenger
                                                                                                                            Bag
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="#">
                                                                                                                            Doctor's
                                                                                                                            Bag
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li class="menu-lv-3 inner">
                                                                                                                        <a href="#">
                                                                                                                            Hobo
                                                                                                                            Bag
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="col-12 col-xl-5">
                                                                                                    <div class="mega-banner">
                                                                                                        <div class="mega-col col-left">
                                                                                                            <h3 class="title">
                                                                                                                Featured
                                                                                                                Products
                                                                                                            </h3>
                                                                                                            <div class="grid-item product-item "
                                                                                                                 id="product-5726669996200">
                                                                                                                <a href="products/leather-jacket.html"
                                                                                                                   class="product-grid-image"><img
                                                                                                                            src="../cdn.shopify.com/s/files/1/0438/5698/6280/products/Product13_large738e.jpg?v=1599196503"
                                                                                                                            alt="Leather Jacket"></a>
                                                                                                                <div class="details">
                                                                                                                    <a class="product-title"
                                                                                                                       href="products/leather-jacket.html">
                                                                                                                        Leather
                                                                                                                        Jacket
                                                                                                                    </a><span
                                                                                                                            class="shopify-product-reviews-badge"
                                                                                                                            data-id="5726669996200"></span>
                                                                                                                    <div class="price-box">
                                                                                                                        <p class="regular-product">
                                                                                                                            <span>Rs. 840.00</span>
                                                                                                                        </p>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="mega-col col-right">
                                                                                                            <a class="animate-scale"
                                                                                                               href="collections/all.html"
                                                                                                               title=""><img
                                                                                                                        src="../cdn.shopify.com/s/files/1/0438/5698/6280/files/Cafi_Mega_Menu_-1_041492cd-856c-463a-9860-d2cc7ee9ace9_250x750f.png?v=1601964553"
                                                                                                                        alt=""/></a>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li class="menu-lv-1 item dropdown no-mega-menu">
                                                                                <a class="menu__moblie " href="#">
                                                                                    Pages


                                                                                    <span class="icon-dropdown"
                                                                                          data-toggle-menu-mb><i
                                                                                                class="fa fa-angle-right"
                                                                                                aria-hidden="true"></i></span></a>
                                                                                <div class="sub-menu-mobile menu-mb-translate">
                                                                                    <div class="menu-mb-title"><span
                                                                                                class="icon-dropdown"><i
                                                                                                    class="fa fa-angle-left"
                                                                                                    aria-hidden="true"></i></span>
                                                                                        Pages

                                                                                    </div>
                                                                                    <ul class="site-nav-dropdown">
                                                                                        <li class="menu-lv-2"><a
                                                                                                    class="  "
                                                                                                    href="pages/about.html">
                                                                                                About us


                                                                                            </a></li>
                                                                                        <li class="menu-lv-2"><a
                                                                                                    class="  "
                                                                                                    href="pages/service.html">
                                                                                                Services


                                                                                            </a></li>
                                                                                        <li class="menu-lv-2"><a
                                                                                                    class="  "
                                                                                                    href="blogs/news.html">
                                                                                                News


                                                                                            </a></li>
                                                                                        <li class="menu-lv-2"><a
                                                                                                    class="  "
                                                                                                    href="pages/faq.html">
                                                                                                Faq


                                                                                            </a></li>
                                                                                        <li class="menu-lv-2"><a
                                                                                                    class="  "
                                                                                                    href="pages/contact.html">
                                                                                                Contact


                                                                                            </a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </nav>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <style>


                                                    /*  Menu Lv 1  */


                                                    /*  Menu Lv 2  */


                                                    /*  Menu Lv 3  */


                                                    /*  Label - Navigation  */


                                                    .nav-vertical .header-logo img {
                                                        max-height: ;
                                                    }


                                                    @media (min-width: 967px) {

                                                        .wrapper-navigation .main-menu {
                                                            text-align: right;
                                                        }

                                                        .navigation-vertical-menu .mb-area .nav-bar {
                                                            max-height: -moz-calc(100vh - 78px - 115px - 77px - 77px - 100px);
                                                            max-height: -webkit-calc(100vh - 78px - 115px - 77px - 77px - 100px);
                                                            max-height: -ms-calc(100vh - 78px - 115px - 77px - 77px - 100px);
                                                            max-height: calc(100vh - 78px - 115px - 77px - 77px - 100px);
                                                            max-height: calc(100vh - 45px - -115px - 77px - 77px - 100px);
                                                        }

                                                        /* .site-nav .no-mega-menu >.sub-menu-mobile {
                                                background-color: rgba(255, 255, 255, 0);
                                                } */
                                                        /*  Menu Lv 2  */
                                                        .site-nav .icon_sale:before {
                                                            border-top-color: #b17862;
                                                        }

                                                        .site-nav .icon_new:before {
                                                            border-top-color: #b17862;
                                                        }

                                                        .site-nav .icon_hot:before {
                                                            border-top-color: #4a3d35;
                                                        }

                                                        .site-nav .menu-lv-1 > a,
                                                        .site-nav .menu-mb-title {
                                                            font-size: 16px;
                                                        }

                                                        .site-nav .menu-lv-2 > a,
                                                        .site-nav .mega-menu .mega-banner .title,
                                                        .site-nav .mega-menu .product-item .btn {
                                                            font-size: 15px;
                                                        }

                                                        .site-nav .menu-lv-3 > a {
                                                            font-size: 14px;
                                                        }
                                                    }

                                                    .site-nav .icon_sale {
                                                        background-color: #b17862;
                                                        color: #ffffff;
                                                    }

                                                    .site-nav .icon_new {
                                                        background-color: #b17862;
                                                        color: #fff;
                                                    }

                                                    .site-nav .icon_hot {
                                                        background-color: #4a3d35;
                                                        color: #fff;
                                                    }

                                                    @media (max-width: 1199px) {
                                                        .site-nav .icon_sale:before {
                                                            border-right-color: #b17862;
                                                        }

                                                        .site-nav .icon_new:before {
                                                            border-right-color: #b17862;
                                                        }

                                                        .site-nav .icon_hot:before {
                                                            border-right-color: #4a3d35;
                                                        }
                                                    }

                                                </style>
                                                <style>
                                                    @media (min-width: 1200px) {

                                                        .header-lang-style2 .is-sticky .main-menu,
                                                        .wrapper_header_default .is-sticky .main-menu {
                                                            width: -moz-calc(100% - 112px);
                                                            width: -webkit-calc(100% - 112px);
                                                            width: -ms-calc(100% - 112px);
                                                            width: calc(100% - 112px);
                                                            margin-left: 112px;
                                                        }

                                                    }
                                                </style>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="search_reveal" style="display: none">
                <div class="search-box">
                    <form action="https://koza-theme.myshopify.com/search" method="get" class="search-bar__form"><input
                                type="hidden" name="type" value="product"><input type="search" name="q" id="q"
                                                                                 placeholder="Search"/>
                        <button id="search_button" type="submit" class="btn">
                            <svg class="icon icon-search" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                                 viewBox="0 0 64 80" enable-background="new 0 0 64 64" xml:space="preserve"><path
                                        d="M57.7,55.6L44.8,40.7c2.9-3.8,4.7-8.6,4.7-13.8c0-12.5-10.2-22.6-22.6-22.6C14.4,4.3,4.2,14.4,4.2,26.9s10.2,22.6,22.6,22.6  c5.5,0,10.5-2,14.5-5.2l12.6,14.6c0.5,0.6,1.2,0.9,1.9,0.9c0.6,0,1.2-0.2,1.6-0.6C58.5,58.2,58.6,56.7,57.7,55.6z M9.2,26.9  c0-9.7,7.9-17.6,17.6-17.6c9.7,0,17.6,7.9,17.6,17.6s-7.9,17.6-17.6,17.6C17.2,44.5,9.2,36.6,9.2,26.9z"/></svg>
                        </button>
                    </form>
                    <a class="close" href="javascript:void(0)"><i class="fa fa-times"></i></a></div>
            </div>
        </div>
    </div>
    <main class="main-home-content ">
        <div class="wrapper">
            <div class="grid-uniform">
                <div class="grid__item">
                    <div id="shopify-section-1592399044344"
                         class="shopify-section index-section index-slideshow-type-1">
                        <div class=" ">
                            <div class="home-slideshow-type-1" id="slideshow-1592399044344"
                                 style="margin-top:0px; margin-bottom:0px;">
                                <div class="variable-width slideshow" data-init-slideshow data-dots="false"
                                     data-autoplay="true" data-autoplay-speed="5000" data-fade="true">
                                    <div class="slick-list slider_style_2 slider-1596699944173-list"><a
                                                href="collections/bags-clutch.html"><img
                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/files/slider-bg_2000xb6c4.jpg?v=1596699725"
                                                    class="slide-img medium-down--hide" alt=""/><img
                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/files/slider1-bg-res_767x84b1.jpg?v=1597205759"
                                                    class="slide-img wide--hide post-large--hide large--hide"
                                                    alt=""/></a>
                                        <div class="slider-content slider-content-bg">
                                            <div class="slide_left"><h3 class="slide-sub-heading-2 animated"
                                                                        style="
              font-size: 18px;


              color:#ffffff;
              ">
                                                    LATEST COLLECTION OF
                                                </h3>
                                                <h2 class="slide-heading animated"
                                                    style="
               font-size: 42px;


               color:#ffffff;
               ">
                                                    Well Bloomed
                                                    <br>Designs

                                                </h2>
                                                <div class="slider_inner_block"><a href="collections/bags-clutch.html"
                                                                                   class="slide-button animated btn">Shop
                                                        Women</a><a href="collections/jackets-gloves.html"
                                                                    class="slide-button animated btn btn2">Shop Men</a>
                                                </div>
                                            </div>
                                        </div>
                                        <style>
                                            .slider_style_2 .slide-offer-text span {
                                                color: #ffffff !important;
                                            }

                                            @media screen and (min-width: 320px) and (max-width: 767px) {
                                                .slider_style_2.slider-1596699944173-list .slider-content {
                                                    background: rgba(0, 0, 0, 0.85);
                                                }
                                            }

                                        </style>
                                    </div>
                                    <div class="slick-list slider_style_1 slider-1602050865055-list"><a
                                                href="collections/all.html"><img
                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/files/slider2-bg_2000xe6cd.jpg?v=1597205731"
                                                    class="slide-img medium-down--hide" alt=""/><img
                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/files/slider2-bg-res_767x9b37.jpg?v=1597205742"
                                                    class="slide-img wide--hide post-large--hide large--hide"
                                                    alt=""/></a>
                                        <div class="slider-content slider-content-bg">
                                            <div class="slide_left"><h3 class="slide-sub-heading-2 animated"
                                                                        style="
              font-size: 18px;


              color:#ffffff;
              ">
                                                    LATEST COLLECTION OF
                                                </h3>
                                                <h2 class="slide-heading animated"
                                                    style="
               font-size: 42px;


               color:#ffffff;
               ">
                                                    The Style
                                                    <br>Perfectionist

                                                </h2>
                                                <div class="slider_inner_block"><a href="collections/all.html"
                                                                                   class="slide-button animated btn">Shop
                                                        Women</a><a href="collections/all.html"
                                                                    class="slide-button animated btn btn2">Shop Men</a>
                                                </div>
                                            </div>
                                        </div>
                                        <style>
                                            .slider_style_1 .slide-offer-text span {
                                                color: #ffffff !important;
                                            }

                                            /* .slider_style_1 .btn:hover {color:#fff!important;background:#b17862!important;}*/

                                            @media screen and (min-width: 320px) and (max-width: 767px) {
                                                .slider_style_1.slider-1602050865055-list .slider-content {
                                                    background: rgba(0, 0, 0, 0.85);
                                                }
                                            }

                                        </style>
                                    </div>
                                    <div class="slick-list slider_style_1 slider-1597207010039-list"><a
                                                href="collections/bags-clutch.html"><img
                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/files/slider3-bg_2000x314e.jpg?v=1597206210"
                                                    class="slide-img medium-down--hide" alt=""/><img
                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/files/slider3-bg-res_767xfee3.jpg?v=1597206357"
                                                    class="slide-img wide--hide post-large--hide large--hide"
                                                    alt=""/></a>
                                        <div class="slider-content slider-content-bg">
                                            <div class="slide_left"><h3 class="slide-sub-heading-2 animated"
                                                                        style="
              font-size: 15px;


              color:#b17862;
              ">
                                                    LATEST COLLECTION OF
                                                </h3>
                                                <h2 class="slide-heading animated"
                                                    style="
               font-size: 42px;


               color:#181818;
               ">
                                                    Distinctly
                                                    <br>Modern Shoes

                                                </h2>
                                                <div class="slider_inner_block"><a href="collections/bags-clutch.html"
                                                                                   class="slide-button animated btn">Shop
                                                        Women</a><a href="collections/jackets-gloves.html"
                                                                    class="slide-button animated btn btn2">Shop Men</a>
                                                </div>
                                            </div>
                                        </div>
                                        <style>
                                            .slider_style_1 .slide-offer-text span {
                                                color: #b17862 !important;
                                            }

                                            /* .slider_style_1 .btn:hover {color:#ffffff!important;background:#b17862!important;}*/

                                            @media screen and (min-width: 320px) and (max-width: 767px) {
                                                .slider_style_1.slider-1597207010039-list .slider-content {
                                                    background: rgba(0, 0, 0, 0.85);
                                                }
                                            }

                                        </style>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <style>


                            .home-slideshow-type-1 .slider-1596699944173-list .slide-sub-heading:before, .slider-1596699944173-list .slide-sub-heading:after {
                                background: #ffffff;
                            }

                            .home-slideshow-type-1 .slider-1596699944173-list .btn {
                                background: #ffffff;
                                color: #b17862;
                                border-color: transparent;
                            }

                            .home-slideshow-type-1 .slider-1596699944173-list .btn:hover {
                                background: #b17862;
                                color: #fff;
                            }

                            .home-slideshow-type-1 .slider-1596699944173-list .btn2 {
                                background: #b17862;
                                color: #fff;
                                border-color: transparent;
                            }

                            .home-slideshow-type-1 .slider-1596699944173-list .btn2:hover {
                                background: #ffffff;
                                color: #b17862;
                            }

                            .home-slideshow-type-1 .slider-1602050865055-list .slide-sub-heading:before, .slider-1602050865055-list .slide-sub-heading:after {
                                background: #ffffff;
                            }

                            .home-slideshow-type-1 .slider-1602050865055-list .btn {
                                background: #ffffff;
                                color: #b17862;
                                border-color: transparent;
                            }

                            .home-slideshow-type-1 .slider-1602050865055-list .btn:hover {
                                background: #b17862;
                                color: #fff;
                            }

                            .home-slideshow-type-1 .slider-1602050865055-list .btn2 {
                                background: #b17862;
                                color: #fff;
                                border-color: transparent;
                            }

                            .home-slideshow-type-1 .slider-1602050865055-list .btn2:hover {
                                background: #ffffff;
                                color: #b17862;
                            }

                            .home-slideshow-type-1 .slider-1597207010039-list .slide-sub-heading:before, .slider-1597207010039-list .slide-sub-heading:after {
                                background: #b17862;
                            }

                            .home-slideshow-type-1 .slider-1597207010039-list .btn {
                                background: #ffffff;
                                color: #b17862;
                                border-color: transparent;
                            }

                            .home-slideshow-type-1 .slider-1597207010039-list .btn:hover {
                                background: #b17862;
                                color: #ffffff;
                            }

                            .home-slideshow-type-1 .slider-1597207010039-list .btn2 {
                                background: #b17862;
                                color: #ffffff;
                                border-color: transparent;
                            }

                            .home-slideshow-type-1 .slider-1597207010039-list .btn2:hover {
                                background: #ffffff;
                                color: #b17862;
                            }


                            .home-slideshow-type-1 .slick-arrow svg {
                                color: #b17862;
                            }

                            .home-slideshow-type-1 .slick-arrow:hover svg, .home-slideshow-type-1 .slick-arrow:focus svg {
                                color: #4a3d35;
                            }

                        </style>
                    </div>
                    <div id="shopify-section-1596690368995" class="shopify-section index-section home-product-grid">
                        <div class="product-grid-block"
                             style="margin-top:0px; margin-bottom:0px;float:left;width:100%; background-color:#fff;">
                            <div class="container">
                                <div class="dt-sc-hr-invisible-large"></div>
                                <div class="product-block-inner">
                                    <div class="section-header section-header--small full-position-default">
                                        <div class="border-title"><h2 class="section-header__title"
                                                                      style="color:#4a3d35;">
                                                Affordable luxury...
                                                <span>Unbeatable price</span>...

                                            </h2>
                                            <div class="short-desc"><p style="color:#4a3d35;"><span>Discover</span>
                                                    Stylish shoes starting as cheap as $28
                                                </p></div>
                                        </div>
                                    </div>
                                    <div class="grid-uniform">
                                        <div class="grid__item product-grid-none default">
                                            <div class="product-block load-wrapper ">
                                                <ul class="grid-uniform">
                                                    <li class="grid__item item-row wide--one-third post-large--one-third large--one-third medium--one-half small--one-half  medium--one-half small--one-half  "
                                                        id="product-5726676779176" id="product-5726676779176">
                                                        <div class="products product-hover-11">
                                                            <div class="product-container"><a
                                                                        href="collections/home-collections/products/leather-backpack.html"
                                                                        class="grid-link">
                                                                    <div class="ImageOverlayCa"></div>
                                                                    <a href="collections/home-collections/products/leather-backpack.html"
                                                                       class="grid-link"><img
                                                                                src="../cdn.shopify.com/s/files/1/0438/5698/6280/products/Product15_f023c413-9484-4ff2-837f-f03cb469a3a0_largee08f.jpg?v=1599196735"
                                                                                class="featured-image"
                                                                                alt="Leather Backpack"></a></a>
                                                                <div class="product_right_tag  "></div>
                                                                <div class="ImageWrapper">
                                                                    <div class="link_icon"></div>
                                                                    <div class="product-button"><a title="Product Link"
                                                                                                   href="products/leather-backpack.html"><i
                                                                                    class="fas fa-link"></i></a>
                                                                        <div class="add-to-wishlist">
                                                                            <div class="show">
                                                                                <div class="default-wishbutton-leather-backpack loading">
                                                                                    <a title="Add to wishlist"
                                                                                       class="add-in-wishlist-js"
                                                                                       href="leather-backpack.html"><i
                                                                                                class="fas fa-heart"></i><span
                                                                                                class="tooltip-label">Add to wishlist</span></a>
                                                                                </div>
                                                                                <div class="loading-wishbutton-leather-backpack loading"
                                                                                     style="display: none; pointer-events: none">
                                                                                    <a class="add_to_wishlist"
                                                                                       href="leather-backpack.html"><i
                                                                                                class="fas fa-spinner"></i></a>
                                                                                </div>
                                                                                <div class="added-wishbutton-leather-backpack loading"
                                                                                     style="display: none;"><a
                                                                                            title="View Wishlist"
                                                                                            class="added-wishlist add_to_wishlist"
                                                                                            href="pages/wishlist.html"><i
                                                                                                class="fas fa-heart"></i><span
                                                                                                class="tooltip-label">View Wishlist</span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <a href="javascript:void(0)" title="Quick View"
                                                                           id="leather-backpack"
                                                                           class="quickview-button quick-view-text product_link"
                                                                           data-view="leather-backpack"><i
                                                                                    class="fa fa-search"></i></a></div>
                                                                </div>
                                                            </div>
                                                            <div class="product-detail"><a
                                                                        href="collections/home-collections/products/leather-backpack.html"
                                                                        class="grid-link__title">Leather
                                                                    Backpack</a><span
                                                                        class="shopify-product-reviews-badge"
                                                                        data-id="5726676779176"></span>
                                                                <div class="grid-link__meta">
                                                                    <div class="product_price">
                                                                        <div class="grid-link__org_price"
                                                                             id="ProductPrice">
                                                                            Rs. 830.00
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="product_desc grid_list">Lorem ipsum dolor
                                                                    sit amet, consectetur adipiscing elit, sed do
                                                                    eiusmod tempor incididunt ut labo...
                                                                </div>
                                                                <script type="text/javascript">
                                                                    $(document).ready(function () {
                                                                        $(".item-swatch").each(function () {
                                                                            if ($(this).children().length == 0) {
                                                                                $(this).remove();
                                                                            } else {
                                                                                $(this).show();
                                                                            }
                                                                        });
                                                                        $(".sizes-list").each(function () {
                                                                            if ($(this).children().length == 0) {
                                                                                $(this).remove();
                                                                            } else {
                                                                                $(this).show();
                                                                            }
                                                                        });
                                                                    });

                                                                </script>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="grid__item item-row wide--one-third post-large--one-third large--one-third medium--one-half small--one-half  medium--one-half small--one-half  "
                                                        id="product-5726674157736" id="product-5726674157736">
                                                        <div class="products product-hover-11">
                                                            <div class="product-container"><a
                                                                        href="collections/home-collections/products/formal-shoe.html"
                                                                        class="grid-link">
                                                                    <div class="ImageOverlayCa"></div>
                                                                    <a href="collections/home-collections/products/formal-shoe.html"
                                                                       class="grid-link"><img
                                                                                src="../cdn.shopify.com/s/files/1/0438/5698/6280/products/product14_263a98ef-6165-4a5d-a6dd-8758373ed8b3_large7cde.jpg?v=1599196624"
                                                                                class="featured-image"
                                                                                alt="Formal Shoe"></a></a>
                                                                <div class="product_right_tag  "></div>
                                                                <div class="ImageWrapper">
                                                                    <div class="link_icon"></div>
                                                                    <div class="product-button"><a title="Product Link"
                                                                                                   href="products/formal-shoe.html"><i
                                                                                    class="fas fa-link"></i></a>
                                                                        <div class="add-to-wishlist">
                                                                            <div class="show">
                                                                                <div class="default-wishbutton-formal-shoe loading">
                                                                                    <a title="Add to wishlist"
                                                                                       class="add-in-wishlist-js"
                                                                                       href="formal-shoe.html"><i
                                                                                                class="fas fa-heart"></i><span
                                                                                                class="tooltip-label">Add to wishlist</span></a>
                                                                                </div>
                                                                                <div class="loading-wishbutton-formal-shoe loading"
                                                                                     style="display: none; pointer-events: none">
                                                                                    <a class="add_to_wishlist"
                                                                                       href="formal-shoe.html"><i
                                                                                                class="fas fa-spinner"></i></a>
                                                                                </div>
                                                                                <div class="added-wishbutton-formal-shoe loading"
                                                                                     style="display: none;"><a
                                                                                            title="View Wishlist"
                                                                                            class="added-wishlist add_to_wishlist"
                                                                                            href="pages/wishlist.html"><i
                                                                                                class="fas fa-heart"></i><span
                                                                                                class="tooltip-label">View Wishlist</span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <a href="javascript:void(0)" title="Quick View"
                                                                           id="formal-shoe"
                                                                           class="quickview-button quick-view-text product_link"
                                                                           data-view="formal-shoe"><i
                                                                                    class="fa fa-search"></i></a></div>
                                                                </div>
                                                            </div>
                                                            <div class="product-detail"><a
                                                                        href="collections/home-collections/products/formal-shoe.html"
                                                                        class="grid-link__title">Formal Shoe</a><span
                                                                        class="shopify-product-reviews-badge"
                                                                        data-id="5726674157736"></span>
                                                                <div class="grid-link__meta">
                                                                    <div class="product_price">
                                                                        <div class="grid-link__org_price"
                                                                             id="ProductPrice">
                                                                            Rs. 840.00
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="product_desc grid_list">Lorem ipsum dolor
                                                                    sit amet, consectetur adipiscing elit, sed do
                                                                    eiusmod tempor incididunt ut labo...
                                                                </div>
                                                                <script type="text/javascript">
                                                                    $(document).ready(function () {
                                                                        $(".item-swatch").each(function () {
                                                                            if ($(this).children().length == 0) {
                                                                                $(this).remove();
                                                                            } else {
                                                                                $(this).show();
                                                                            }
                                                                        });
                                                                        $(".sizes-list").each(function () {
                                                                            if ($(this).children().length == 0) {
                                                                                $(this).remove();
                                                                            } else {
                                                                                $(this).show();
                                                                            }
                                                                        });
                                                                    });

                                                                </script>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="grid__item item-row wide--one-third post-large--one-third large--one-third medium--one-half small--one-half  medium--one-half small--one-half  "
                                                        id="product-5726669996200" id="product-5726669996200">
                                                        <div class="products product-hover-11">
                                                            <div class="product-container"><a
                                                                        href="collections/home-collections/products/leather-jacket.html"
                                                                        class="grid-link">
                                                                    <div class="ImageOverlayCa"></div>
                                                                    <a href="collections/home-collections/products/leather-jacket.html"
                                                                       class="grid-link"><img
                                                                                src="../cdn.shopify.com/s/files/1/0438/5698/6280/products/Product13_large738e.jpg?v=1599196503"
                                                                                class="featured-image"
                                                                                alt="Leather Jacket"></a></a>
                                                                <div class="product_right_tag  "></div>
                                                                <div class="ImageWrapper">
                                                                    <div class="link_icon"></div>
                                                                    <div class="product-button"><a title="Product Link"
                                                                                                   href="products/leather-jacket.html"><i
                                                                                    class="fas fa-link"></i></a>
                                                                        <div class="add-to-wishlist">
                                                                            <div class="show">
                                                                                <div class="default-wishbutton-leather-jacket loading">
                                                                                    <a title="Add to wishlist"
                                                                                       class="add-in-wishlist-js"
                                                                                       href="leather-jacket.html"><i
                                                                                                class="fas fa-heart"></i><span
                                                                                                class="tooltip-label">Add to wishlist</span></a>
                                                                                </div>
                                                                                <div class="loading-wishbutton-leather-jacket loading"
                                                                                     style="display: none; pointer-events: none">
                                                                                    <a class="add_to_wishlist"
                                                                                       href="leather-jacket.html"><i
                                                                                                class="fas fa-spinner"></i></a>
                                                                                </div>
                                                                                <div class="added-wishbutton-leather-jacket loading"
                                                                                     style="display: none;"><a
                                                                                            title="View Wishlist"
                                                                                            class="added-wishlist add_to_wishlist"
                                                                                            href="pages/wishlist.html"><i
                                                                                                class="fas fa-heart"></i><span
                                                                                                class="tooltip-label">View Wishlist</span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <a href="javascript:void(0)" title="Quick View"
                                                                           id="leather-jacket"
                                                                           class="quickview-button quick-view-text product_link"
                                                                           data-view="leather-jacket"><i
                                                                                    class="fa fa-search"></i></a></div>
                                                                </div>
                                                            </div>
                                                            <div class="product-detail"><a
                                                                        href="collections/home-collections/products/leather-jacket.html"
                                                                        class="grid-link__title">Leather Jacket</a><span
                                                                        class="shopify-product-reviews-badge"
                                                                        data-id="5726669996200"></span>
                                                                <div class="grid-link__meta">
                                                                    <div class="product_price">
                                                                        <div class="grid-link__org_price"
                                                                             id="ProductPrice">
                                                                            Rs. 840.00
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="product_desc grid_list">Lorem ipsum dolor
                                                                    sit amet, consectetur adipiscing elit, sed do
                                                                    eiusmod tempor incididunt ut labo...
                                                                </div>
                                                                <script type="text/javascript">
                                                                    $(document).ready(function () {
                                                                        $(".item-swatch").each(function () {
                                                                            if ($(this).children().length == 0) {
                                                                                $(this).remove();
                                                                            } else {
                                                                                $(this).show();
                                                                            }
                                                                        });
                                                                        $(".sizes-list").each(function () {
                                                                            if ($(this).children().length == 0) {
                                                                                $(this).remove();
                                                                            } else {
                                                                                $(this).show();
                                                                            }
                                                                        });
                                                                    });

                                                                </script>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <style></style>
                    </div>
                    <div id="shopify-section-1596256785635" class="shopify-section index-section home-grid-banner">
                        <div class=" grid-banner-bg ">
                            <div class="grid-banner-type-5" style="margin-top:0px; margin-bottom:px;">
                                <div class="dt-sc-hr-invisible-large"></div>
                                <div class="grid-uniform featuredItems">
                                    <div class="grid__item one-block mixed">
                                        <div class="grid-uniform">
                                            <div class="grid__item wide--one-half post-large--one-half large--grid__item">
                                                <div class="overlay mixed-1596256785635-0">
                                                    <div class="featured-image"><a class="banner_half_img"
                                                                                   href="collections/all.html"><img
                                                                    class="primary-image"
                                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/files/grid-banner-left-img_f09b6e53-9eea-46bb-8102-c87e0bc1e8b0_920x6704d55.jpg?v=1596776322"
                                                                    alt="BEWARE"/></a></div>
                                                </div>
                                            </div>
                                            <div class="grid__item wide--one-half post-large--one-half large--grid__item">
                                                <div class="overlay mixed-1596256785635-0" style="background:#b17862">
                                                    <div class="featured-image"><a class="banner_half_img"
                                                                                   href="collections/all.html"><img
                                                                    class="primary-image"
                                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/files/grid-banner-right-img_920x670a0be.jpg?v=1596715633"
                                                                    alt="BEWARE"/></a></div>
                                                    <div class="featured-content mixed-1596256785635-0 imageText_position imgtxt-middle">
                                                        <h5 style="color:#fefefe;">BEWARE</h5>
                                                        <h2 style="color:#fefefe;">Benefits of real genuine leather
                                                            products
                                                            <br>are undeniable & cultures favorite fabrics
                                                        </h2>
                                                        <p class="additional-text" style="color:#e9e9e9;">Leather may be
                                                            everlasting in culture and style but it is also everlasting
                                                            as a physical product.</p><a class="btn btn1"
                                                                                         href="collections/all.html"
                                                                                         style="color:#ffffff;background:#4a3d35;border:none;">GET
                                                            RUNNING SNEAKERS</a>
                                                        <div class="btn_bg"><a class="btn_link"
                                                                               href="collections/all.html"
                                                                               style="color:#fff;border:none;">What’s
                                                                Running Sneakers?
                                                                <i class="fas fa-chevron-right"></i></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <style>


                            #shopify-section-1596256785635.home-grid-banner .featured-content.mixed-1596256785635-0 .btn1:hover {
                                color: #ffffff !important;
                                background-color: #b17862 !important;
                            }

                            #shopify-section-1596256785635.home-grid-banner .featured-content.mixed-1596256785635-0 .btn2:hover {
                                color: !important;
                                background-color: !important;
                            }


                            #shopify-section-1596256785635 .grid-banner-bg {
                                background: #ffffff;
                            }

                            #shopify-section-1596256785635.home-grid-banner .featured-content.

                            -
                            .btn_link {
                                color: !important;
                            }

                            #shopify-section-1596256785635.home-grid-banner .featured-content.

                            -
                            .btn_link {
                                color: !important;
                            }

                        </style>
                    </div>
                    <div id="shopify-section-1596528863266" class="shopify-section index-section home-grid-banner">
                        <div class="container">
                            <div class="grid-banner-type-6" style="margin-top:0px; margin-bottom:0px;">
                                <div class="dt-sc-hr-invisible-large"></div>
                                <div class="section-header section-header--small full-position-full-left">
                                    <div class="border-title">
                                        <div class="short-desc"><p style="color:#1a1a1a;">MORE ON</p></div>
                                        <h2 class="section-header__title" style="color:#1a1a1a;">
                                            Leather store
                                        </h2></div>
                                </div>
                                <div class="grid-uniform featuredItems">
                                    <div class="grid__item wide--one-half post-large--one-half large--one-half two-blocks">
                                        <div class="overlay style_1">
                                            <div class="featured-image "><a class="banner_half_img"
                                                                            href="collections/jackets-gloves.html"><img
                                                            src="../cdn.shopify.com/s/files/1/0438/5698/6280/files/store-img1_db4ab807-bd80-40c0-89d5-bb04f7fa58af_1000Xf799.jpg?v=1596717639"
                                                            alt="Premium quality full grain leather"/></a></div>
                                            <div class="featured-content featured-content-oneimage-1596528863266-0 imageText_position imgtxt-bottom">
                                                <div class="content-info rectangle" style="background:#fff"><h2
                                                            style="color:#1a1a1a;">Premium quality full grain
                                                        leather</h2>
                                                    <p class="additional-text" style="color:#6a6a6a;">Stay free, stay
                                                        cool, stay with leather.</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="grid__item wide--one-half post-large--one-half large--one-half two-blocks">
                                        <div class="overlay style_1">
                                            <div class="featured-image "><a class="banner_half_img"
                                                                            href="collections/bags-clutch.html"><img
                                                            src="../cdn.shopify.com/s/files/1/0438/5698/6280/files/store-img2_1000X6229.jpg?v=1596717719"
                                                            alt="Designer Inventive bag"/></a></div>
                                            <div class="featured-content featured-content-oneimage-1596690676045 imageText_position imgtxt-bottom">
                                                <div class="content-info rectangle" style="background:#fff"><h2
                                                            style="color:#1a1a1a;">Designer Inventive bag</h2>
                                                    <p class="additional-text" style="color:#6a6a6a;">Choose your Dream
                                                        Magnificent to you.</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <style>

                            #shopify-section-1596528863266.home-grid-banner {
                                background: #ffffff;
                            }

                            #shopify-section-1596528863266.home-grid-banner .overlay.style_1 .ovrly,
                            #shopify-section-1596528863266.home-grid-banner .overlay.style_2 .ovrly:before,
                            #shopify-section-1596528863266.home-grid-banner .overlay.style_2 .ovrly:after,
                            #shopify-section-1596528863266.home-grid-banner .overlay.style_3 .ovrly,
                            #shopify-section-1596528863266.home-grid-banner .overlay.style_4 .ovrly,
                            #shopify-section-1596528863266.home-grid-banner .overlay.style_6 .ovrly,
                            #shopify-section-1596528863266.home-grid-banner .overlay.style_7 .ovrly {
                                background: rgba(0, 0, 0, 0);
                            }


                            #shopify-section-1596528863266.home-grid-banner .featured-content-oneimage-1596528863266-0 .link1:hover {
                                color: #fff !important;
                            }

                            #shopify-section-1596528863266.home-grid-banner .featured-content-oneimage-1596528863266-0 .link2:hover {
                                color: !important;
                            }

                            #shopify-section-1596528863266.home-grid-banner .featured-content-oneimage-1596690676045 .link1:hover {
                                color: #fff !important;
                            }

                            #shopify-section-1596528863266.home-grid-banner .featured-content-oneimage-1596690676045 .link2:hover {
                                color: !important;
                            }


                        </style>
                    </div>
                    <div id="shopify-section-1596256907622" class="shopify-section index-section home-grid-banner">
                        <div class=" grid-banner-bg ">
                            <div class="grid-banner-type-5" style="margin-top:px; margin-bottom:px;">
                                <div class="dt-sc-hr-invisible-large"></div>
                                <div class="grid-uniform featuredItems">
                                    <div class="grid__item one-block mixed">
                                        <div class="grid-uniform">
                                            <div class="grid__item wide--one-half post-large--one-half large--grid__item">
                                                <div class="overlay mixed-1596256907622-0">
                                                    <div class="featured-image"><a class="banner_half_img"
                                                                                   href="collections.html"><img
                                                                    class="primary-image"
                                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/files/grid-banner-left-img2_920x67013f3.jpg?v=1596773438"
                                                                    alt="INTRODUCING NEW FEATURES"/></a></div>
                                                </div>
                                            </div>
                                            <div class="grid__item wide--one-half post-large--one-half large--grid__item">
                                                <div class="overlay mixed-1596256907622-0"
                                                     style="background:rgba(0,0,0,0)">
                                                    <div class="featured-image"><a class="banner_half_img"
                                                                                   href="collections.html"><img
                                                                    class="primary-image"
                                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/files/grid-banner-right-img2_9d715aad-4ad4-461c-b6e9-b1f7b96ece3d_920x670e968.jpg?v=1596775982"
                                                                    alt="INTRODUCING NEW FEATURES"/></a></div>
                                                    <div class="featured-content mixed-1596256907622-0 imageText_position imgtxt-middle">
                                                        <h5 style="color:#fefefe;">INTRODUCING NEW FEATURES</h5>
                                                        <h2 style="color:#fefefe;">Utilitarian Shoes</h2>
                                                        <p class="additional-text" style="color:#e9e9e9;">Personalised
                                                            Leather Wallet is meticulously designed using a single cut
                                                            of folded Italian leather.</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <style>


                            #shopify-section-1596256907622.home-grid-banner .featured-content.mixed-1596256907622-0 .btn1:hover {
                                color: #ffffff !important;
                                background-color: #b17862 !important;
                            }

                            #shopify-section-1596256907622.home-grid-banner .featured-content.mixed-1596256907622-0 .btn2:hover {
                                color: !important;
                                background-color: !important;
                            }


                            #shopify-section-1596256907622 .grid-banner-bg {
                                background: #ffffff;
                            }

                            #shopify-section-1596256907622.home-grid-banner .featured-content.

                            -
                            .btn_link {
                                color: !important;
                            }

                            #shopify-section-1596256907622.home-grid-banner .featured-content.

                            -
                            .btn_link {
                                color: !important;
                            }

                        </style>
                    </div>
                    <div id="shopify-section-1596273801602"
                         class="shopify-section index-section home-testimonial-quote">
                        <div class="dt-sc-hr-invisible-large"></div>
                        <div id="QuotesSection-1596273801602" data-section-id="1596273801602"
                             data-section-type="quotes-section" class="quotes-section quotes-style4">
                            <div class="container">
                                <div class="grid-uniform" style="margin-top:0px; margin-bottom:0px;">
                                    <div class="module home-testimonials ready">
                                        <div class="container">
                                            <div class="module-body">
                                                <div class="home-testimonials-left">
                                                    <div class="grid__item wide--two-fifths post-large--grid__item">
                                                        <div class="module-header full-position-default">
                                                            <div class="border-title">
                                                                <div class="short-desc"><p style="color:">REVIEWS</p>
                                                                </div>
                                                                <h2 class="hero__overlay-title separator">Customer love
                                                                    us</h2></div>
                                                            <p class="additional-text" style="color:#000;">2 from 60
                                                                reviews</p>
                                                            <div class="btn_bg"><a class="btn_link" href="#"
                                                                                   style="color:#b17862;border:none;">Read
                                                                    all reviews
                                                                    <i class="fas fa-chevron-right"></i></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="home-testimonials-container">
                                                    <div class="grid__item wide--three-fifths post-large--grid__item">
                                                        <div class="quotes-slider text-center" data-quote-slider4
                                                             data-count="3" data-autoplay="true">
                                                            <div class="quotes-slide--0 quotes-slide--1596273801602-0">
                                                                <span class="quote-job">Good gift!</span>
                                                                <div class="5start rating"
                                                                     style="background-image:url('../cdn.shopify.com/s/files/1/0438/5698/6280/t/2/assets/starsac9e.png?v=2680208484921491326');background-position:0px 0px"></div>
                                                                <div class="quote rte-setting"><p>Donec sed lorem
                                                                        dapibus, posuere dui eget, molestie ante.
                                                                        Vivamus
                                                                        aliquam gravida nibh, et aliquam risus fringilla
                                                                        aliquam. Cras ornare ac sem ut malesuada. Nulla
                                                                        ut
                                                                        sodales magna. Quisque venenatis sapien at sem
                                                                        vulputate pellentesque. Nam avolutpat ex. Donec
                                                                        eu
                                                                        tellus a sapien facilisis.</p></div>
                                                                <div class="client-info"><h5 class="quote-author">Regina
                                                                        Carter</h5></div>
                                                            </div>
                                                            <div class="quotes-slide--1 quotes-slide--1596273801602-2">
                                                                <span class="quote-job">Adding values</span>
                                                                <div class="5start rating"
                                                                     style="background-image:url('../cdn.shopify.com/s/files/1/0438/5698/6280/t/2/assets/starsac9e.png?v=2680208484921491326');background-position:0px 0px"></div>
                                                                <div class="quote rte-setting"><p>Curabitur vitae
                                                                        molestie urna. Duis accumsan neque ac orci
                                                                        maximus
                                                                        sollicitudin. Vivamus sitamet velit consequat,
                                                                        rhoncus felisium, commodo tortor. Quisque elit
                                                                        turpisum, vestibulum vestibulum, sagittis
                                                                        ipsumium.
                                                                        Phasellus vulputate urna in magna facilisis
                                                                        mollis
                                                                        tiam fusce.</p></div>
                                                                <div class="client-info"><h5 class="quote-author">Mindy
                                                                        Reyes</h5></div>
                                                            </div>
                                                            <div class="quotes-slide--2 quotes-slide--1596273801602-3">
                                                                <span class="quote-job">Absolutely fabulous!</span>
                                                                <div class="5start rating"
                                                                     style="background-image:url('../cdn.shopify.com/s/files/1/0438/5698/6280/t/2/assets/starsac9e.png?v=2680208484921491326');background-position:0px 0px"></div>
                                                                <div class="quote rte-setting"><p>Fusce ullamcorper
                                                                        pulvinar enim, elementum justo vulputate non.
                                                                        Pellentesque habitant morbi tristique senectus
                                                                        netus
                                                                        malesuada fames turpis egestas. Vivamus et erat
                                                                        diam. Pellenteque nelict dictum, auctor ipsum,
                                                                        vulputate. Sed dignissim lorem ligula. Cras
                                                                        maximus,
                                                                        leo tristique pellentesque.</p></div>
                                                                <div class="client-info"><h5 class="quote-author">Shawn
                                                                        Romero</h5></div>
                                                            </div>
                                                        </div>
                                                        <div class="quotes-arrow-nav carousel-arrow" quoteNav></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dt-sc-hr-invisible-large"></div>
                                </div>
                            </div>
                        </div>
                        <style>

                            #QuotesSection-1596273801602 {
                                background-color: #ffffff;
                            }

                            #QuotesSection-1596273801602 .quote-author {
                                color: #1a1a1a;
                            }

                            #QuotesSection-1596273801602 .quote-job {
                                color: #b17862;
                                display: block;
                                font-weight: 500;
                            }

                            #QuotesSection-1596273801602 .quote {
                                color: #6a6a6a
                            }

                            /* Slider */
                            .quotes-style4 .slick-slider {
                                position: relative;
                                display: block;
                                box-sizing: border-box;
                                -webkit-user-select: none;
                                -moz-user-select: none;
                                -ms-user-select: none;
                                user-select: none;
                                -webkit-touch-callout: none;
                                -khtml-user-select: none;
                                -ms-touch-action: pan-y;
                                touch-action: pan-y;
                                -webkit-tap-highlight-color: transparent;
                            }

                            .quotes-style4 .slick-list {
                                position: relative;
                                display: block;
                                overflow: hidden;
                                margin: 0;
                                padding: 0;
                            }

                            .quotes-style4 .slick-list:focus {
                                outline: none;
                            }

                            .quotes-style4 .slick-list.dragging {
                                cursor: pointer;
                                cursor: hand;
                            }

                            .quotes-style4 .slick-slider .slick-track, .quotes-style4 .slick-slider .slick-list {
                                -webkit-transform: translate3d(0, 0, 0);
                                -moz-transform: translate3d(0, 0, 0);
                                -ms-transform: translate3d(0, 0, 0);
                                -o-transform: translate3d(0, 0, 0);
                                transform: translate3d(0, 0, 0);
                            }

                            .quotes-style4 .slick-track {
                                position: relative;
                                top: 0;
                                left: 0;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                            }

                            .quotes-style4 .slick-track:before, .quotes-style4 .slick-track:after {
                                display: table;
                                content: '';
                            }

                            .quotes-style4 .slick-track:after {
                                clear: both;
                            }

                            .quotes-style4 .slick-loading .slick-track {
                                visibility: hidden;
                            }

                            .quotes-style4 .slick-slide {
                                display: none;
                                float: left;
                                height: 100%;
                                min-height: 1px;
                            }

                            .quotes-style4 [dir='rtl'] .slick-slide {
                                float: right;
                            }

                            .quotes-style4 .slick-slide img {
                                display: block;
                            }

                            .quotes-style4 .slick-slide.slick-loading img {
                                display: none;
                            }

                            .quotes-style4 .slick-slide.dragging img {
                                pointer-events: none;
                            }

                            .quotes-style4 .slick-initialized .slick-slide {
                                display: block;
                            }

                            .quotes-style4 .slick-loading .slick-slide {
                                visibility: hidden;
                            }

                            .quotes-style4 .slick-vertical .slick-slide {
                                display: block;
                                height: auto;
                                border: 1px solid transparent;
                            }

                            .quotes-style4 .slick-arrow.slick-hidden {
                                display: none;
                            }

                            .rating {
                                display: block;
                                width: 131px;
                                height: 15px;
                                background-repeat: no-repeat;
                                background-position: left center !important;
                                margin: 0 auto;
                                text-align: center;
                            }


                        </style>
                    </div>
                    <div id="shopify-section-1596790286168" class="shopify-section index-section home-blog-type">
                        <div class="blog-post" style="margin-top:0px; margin-bottom:0px;">
                            <div class="container">
                                <div class="dt-sc-hr-invisible-large"></div>
                                <div class="grid">
                                    <div class="section-header section-header--small full-position-default">
                                        <div class="border-title wow"><p style="color:#1a1a1a;">KOZA KNOW HOW</p>
                                            <h2 style="color:#1a1a1a;">Quick guide</h2></div>
                                        <div class="btn_bg"><a class="btn_link" href="#"
                                                               style="color:#b17862;border:none;">Help Centre
                                                <i
                                                        class="fas fa-chevron-right"></i></a></div>
                                    </div>
                                </div>
                                <div class="grid-uniform">
                                    <div class="blog-post-inner style1">
                                        <div class="home-blog blog-section owl-carousel owl-theme" data-blog-slider1>
                                            <div class="article-item ">
                                                <div class="article">
                                                    <div class="article-image"><a
                                                                href="blogs/news/look-stylish-be-stylish.html"><img
                                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/articles/blo-79ef7.jpg?v=1599197369"
                                                                    alt="Look stylish and Be stylish"/></a></div>
                                                    <div class="article-description" style="background: ">
                                                        <div class="article-content"><h5><a
                                                                        href="blogs/news/look-stylish-be-stylish.html">Look
                                                                    stylish and Be stylish</a></h5>
                                                            <div class="article-header"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="article-item ">
                                                <div class="article">
                                                    <div class="article-image"><a
                                                                href="blogs/news/perfect-size-guide-for-shoe.html"><img
                                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/articles/blo-8646e.jpg?v=1599197381"
                                                                    alt="Perfect size guide for shoe"/></a></div>
                                                    <div class="article-description" style="background: ">
                                                        <div class="article-content"><h5><a
                                                                        href="blogs/news/perfect-size-guide-for-shoe.html">Perfect
                                                                    size guide for shoe</a></h5>
                                                            <div class="article-header"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="article-item ">
                                                <div class="article">
                                                    <div class="article-image"><a
                                                                href="blogs/news/stand-out-from-the-crowd.html"><img
                                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/articles/blo-9c945.jpg?v=1599197395"
                                                                    alt="Stand out from the crowd"/></a></div>
                                                    <div class="article-description" style="background: ">
                                                        <div class="article-content"><h5><a
                                                                        href="blogs/news/stand-out-from-the-crowd.html">Stand
                                                                    out from the crowd</a></h5>
                                                            <div class="article-header"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="article-item ">
                                                <div class="article">
                                                    <div class="article-image"><a
                                                                href="blogs/news/step-up-your-style-game.html"><img
                                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/articles/blo-10475b.jpg?v=1599197408"
                                                                    alt="Step up your style game"/></a></div>
                                                    <div class="article-description" style="background: ">
                                                        <div class="article-content"><h5><a
                                                                        href="blogs/news/step-up-your-style-game.html">Step
                                                                    up your style game</a></h5>
                                                            <div class="article-header"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="article-item ">
                                                <div class="article">
                                                    <div class="article-image"><a
                                                                href="blogs/news/understanding-prescription.html"><img
                                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/articles/blo-67f80.jpg?v=1599197357"
                                                                    alt="Understanding prescription"/></a></div>
                                                    <div class="article-description" style="background: ">
                                                        <div class="article-content"><h5><a
                                                                        href="blogs/news/understanding-prescription.html">Understanding
                                                                    prescription</a></h5>
                                                            <div class="article-header"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="article-item ">
                                                <div class="article">
                                                    <div class="article-image"><a
                                                                href="blogs/news/hand-made-perfection.html"><img
                                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/articles/blo-17deb.jpg?v=1599197289"
                                                                    alt="Hand made perfection"/></a></div>
                                                    <div class="article-description" style="background: ">
                                                        <div class="article-content"><h5><a
                                                                        href="blogs/news/hand-made-perfection.html">Hand
                                                                    made
                                                                    perfection</a></h5>
                                                            <div class="article-header"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="article-item ">
                                                <div class="article">
                                                    <div class="article-image"><a
                                                                href="blogs/news/it-s-all-about-quality.html"><img
                                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/articles/blo-4de60.jpg?v=1599197327"
                                                                    alt="It’s all about quality"/></a></div>
                                                    <div class="article-description" style="background: ">
                                                        <div class="article-content"><h5><a
                                                                        href="blogs/news/it-s-all-about-quality.html">It’s
                                                                    all about quality</a></h5>
                                                            <div class="article-header"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="article-item ">
                                                <div class="article">
                                                    <div class="article-image"><a
                                                                href="blogs/news/for-the-perfectionist.html"><img
                                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/articles/blo-54cdf.jpg?v=1599197346"
                                                                    alt="For the perfectionist"/></a></div>
                                                    <div class="article-description" style="background: ">
                                                        <div class="article-content"><h5><a
                                                                        href="blogs/news/for-the-perfectionist.html">For
                                                                    the
                                                                    perfectionist</a></h5>
                                                            <div class="article-header"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="article-item ">
                                                <div class="article">
                                                    <div class="article-image"><a
                                                                href="blogs/news/known-for-the-best-quality.html"><img
                                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/articles/blo-258cc.jpg?v=1599197301"
                                                                    alt="Known for the best quality"/></a></div>
                                                    <div class="article-description" style="background: ">
                                                        <div class="article-content"><h5><a
                                                                        href="blogs/news/known-for-the-best-quality.html">Known
                                                                    for the best quality</a></h5>
                                                            <div class="article-header"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="article-item ">
                                                <div class="article">
                                                    <div class="article-image"><a
                                                                href="blogs/news/created-with-new-passion.html"><img
                                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/articles/blo-350c5.jpg?v=1599197312"
                                                                    alt="Created with new passion"/></a></div>
                                                    <div class="article-description" style="background: ">
                                                        <div class="article-content"><h5><a
                                                                        href="blogs/news/created-with-new-passion.html">Created
                                                                    with new passion</a></h5>
                                                            <div class="article-header"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="blog_nav carousel-arrow nav-bottom" data-blog-Nav1></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <style>

                            .home-blog-type .style1 .article-content h5 a {
                                color: #ffffff
                            }

                            .home-blog-type .style1 .article-content h5 a:hover {
                                color: #de6b3e
                            }

                            .home-blog-type .style1 .article-content .comments-count {
                                color: #1a1a1a;
                            }

                            .home-blog-type .style1 .comments-count:before {
                                background: #1a1a1a;
                            }

                            .home-blog-type .style1 .article i {
                                color: #1a1a1a;
                            }

                            .home-blog-type .style1 .blog-tag .blog-tags {
                                background: #1a1a1a;
                                color: #1a1a1a;
                            }

                            .home-blog-type .style1 .link_text {
                                color:;
                            }

                            .home-blog-type .style1 .link_text:hover {
                                color:;
                            }

                            .home-blog-type .style1 .btn {
                                background: #000;
                                color: #fff;
                            }

                            .home-blog-type .style1 .btn:hover {
                                background: #333;
                                color: #fff;
                            }

                        </style>
                        <script type="text/javascript">
                            window.blog_autoplay = true;
                            window.blog_navigation = false;
                            window.blog_pagination = false;
                            window.blog_slidestoshow = 4;

                        </script>
                    </div>
                    <div id="shopify-section-1596797135278" class="shopify-section index-section home-wide-banner">
                        <div class="container">
                            <div class="wide-banner-type"
                                 style="margin-top:90px; margin-bottom:100px; background-color:#ffffff;">
                                <div class="grid-uniform CollectionItems">
                                    <div class="grid__item wide--one-whole banner-content text-left">
                                        <div class="icon"><img
                                                    src="../cdn.shopify.com/s/files/1/0438/5698/6280/files/koza-add1f69.jpg?v=1602055936"
                                                    alt="Leather Products Online"/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <style>

                            .lof-clock-timer-detail ul li, .lof-clock-timer-detail ul li span {
                                color: #000;
                            }

                            .banner-content .lof-clock-timer-detail li:after {
                                background: #000;
                            }

                            .banner-content .deal-btn .btn:hover {
                                background: rgba(0, 0, 0, 0) !important;
                                color: #4a3d35 !important;
                            }

                            .banner-content .deal-btn .secondary.btn:hover {
                                background: #666 !important;
                                color: #fff !important;
                            }


                        </style>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div id="shopify-section-footer" class="shopify-section">
        <footer class="site-footer footer-default" data-section-id="footer" data-section-type="footer-section"
                style=" background-color:#f8f9fb;">
            <div class="site-footer__top">
                <div class="container">
                    <div class="grid-uniform">
                        <style data-shopify>
                            @media only screen and (min-width: 769px) {
                                .footer__item--footer-1 {
                                    width: 18%;
                                }
                            }
                        </style>
                        <div class="grid__item large--one-half medium--one-half footer__item--footer-1 footer-links"><h4
                                    class="footer__title ">
                                Help
                            </h4>
                            <div class="collapsible-content__inner">
                                <div class="footer__collapsible">
                                    <ul class="no-bullets site-footer__linklist">
                                        <li><a href="search.html">Search</a></li>
                                        <li><a href="pages/contact.html">Help & Faq's</a></li>
                                        <li><a href="pages/about.html">Information</a></li>
                                        <li><a href="pages/faq.html">Privacy Policy</a></li>
                                        <li><a href="pages/service.html">Shipping Details</a></li>
                                        <li><a href="#">Online Payment</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <style data-shopify>
                            @media only screen and (min-width: 769px) {
                                .footer__item--1596529097500 {
                                    width: 18%;
                                }
                            }
                        </style>
                        <div class="grid__item large--one-half medium--one-half footer__item--1596529097500 footer-links">
                            <h4 class="footer__title ">
                                Support
                            </h4>
                            <div class="collapsible-content__inner">
                                <div class="footer__collapsible">
                                    <ul class="no-bullets site-footer__linklist">
                                        <li><a href="pages/contact.html">Contact Us</a></li>
                                        <li><a href="pages/about.html">About Us</a></li>
                                        <li><a href="pages/contact.html">Careers</a></li>
                                        <li><a href="pages/faq.html">Refund & Return</a></li>
                                        <li><a href="pages/faq.html">Deliveries</a></li>
                                        <li><a href="#">Delivery Guide</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <style data-shopify>
                            @media only screen and (min-width: 769px) {
                                .footer__item--1596529099438 {
                                    width: 18%;
                                }
                            }
                        </style>
                        <div class="grid__item large--one-half medium--one-half footer__item--1596529099438 footer-links">
                            <h4 class="footer__title ">
                                Information
                            </h4>
                            <div class="collapsible-content__inner">
                                <div class="footer__collapsible">
                                    <ul class="no-bullets site-footer__linklist">
                                        <li><a href="search.html">Search Terms</a></li>
                                        <li><a href="search.html">Advanced Search</a></li>
                                        <li><a href="search.html">Help & Faq's</a></li>
                                        <li><a href="pages/about.html">Store Location</a></li>
                                        <li><a href="pages/service.html">Order & Return </a></li>
                                        <li><a href="#">Holidays</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <style data-shopify>
                            @media only screen and (min-width: 769px) {
                                .footer__item--1596691365052 {
                                    width: 20%;
                                }
                            }
                        </style>
                        <div class="grid__item large--one-half medium--one-half footer__item--1596691365052 footer-links">
                            <h4 class="footer__title ">
                                Know Us
                            </h4>
                            <div class="collapsible-content__inner">
                                <div class="footer__collapsible">
                                    <ul class="no-bullets site-footer__linklist">
                                        <li><a href="pages/about.html">History</a></li>
                                        <li><a href="#">Partners</a></li>
                                        <li><a href="#">Press Release</a></li>
                                        <li><a href="#">Awards </a></li>
                                        <li><a href="#">Certifications</a></li>
                                        <li><a href="#">Working Hours</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <style data-shopify>
                            @media only screen and (min-width: 769px) {
                                .footer__item--1596691694298 {
                                    width: 20%;
                                }
                            }
                        </style>
                        <div class="grid__item large--one-half medium--one-whole footer__item--1596691694298 footer-contact-info">
                            <h4 class="footer__title ">Contact us</h4>
                            <ul class="contact-info">
                                <li class="address">
                                    <address><i class="fas fa-home"></i>35 W 46nd Street, Wall Road New York, USA.

                                    </address>
                                </li>
                                <li class="contact-phone"><i class="fas fa-phone"></i>+(123) 456 - 7890

                                </li>
                                <li class="office-mail"><a href="mailto:Support"><i class="far fa-envelope"></i>support@example.com
                                    </a></li>
                            </ul>
                            <h4 class="footer__title ">FOLLOW US</h4>
                            <ul class="no-bullets footer__social">
                                <li><a target="_blank" href="#"
                                       title="translation missing: en.layout.footer.social_platform">
                                        <svg aria-hidden="true" focusable="false" role="presentation"
                                             class="icon icon-facebook" viewBox="0 0 32 32">
                                            <path d="M18.56 31.36V17.28h4.48l.64-5.12h-5.12v-3.2c0-1.28.64-2.56 2.56-2.56h2.56V1.28H19.2c-3.84 0-7.04 2.56-7.04 7.04v3.84H7.68v5.12h4.48v14.08h6.4z"/>
                                        </svg>
                                    </a></li>
                                <li><a target="_blank" href="#"
                                       title="translation missing: en.layout.footer.social_platform">
                                        <svg aria-hidden="true" focusable="false" role="presentation"
                                             class="icon icon-twitter" viewBox="0 0 32 32">
                                            <path d="M31.281 6.733q-1.304 1.924-3.13 3.26 0 .13.033.408t.033.408q0 2.543-.75 5.086t-2.282 4.858-3.635 4.108-5.053 2.869-6.341 1.076q-5.282 0-9.65-2.836.913.065 1.5.065 4.401 0 7.857-2.673-2.054-.033-3.668-1.255t-2.266-3.146q.554.13 1.206.13.88 0 1.663-.261-2.184-.456-3.619-2.184t-1.435-3.977v-.065q1.239.652 2.836.717-1.271-.848-2.021-2.233t-.75-2.983q0-1.63.815-3.195 2.38 2.967 5.754 4.678t7.319 1.907q-.228-.815-.228-1.434 0-2.608 1.858-4.45t4.532-1.842q1.304 0 2.51.522t2.054 1.467q2.152-.424 4.01-1.532-.685 2.217-2.771 3.488 1.989-.261 3.619-.978z"/>
                                        </svg>
                                    </a></li>
                                <li><a target="_blank" href="#"
                                       title="translation missing: en.layout.footer.social_platform">
                                        <svg aria-hidden="true" focusable="false" role="presentation"
                                             class="icon icon-instagram" viewBox="0 0 32 32">
                                            <path d="M16 3.094c4.206 0 4.7.019 6.363.094 1.538.069 2.369.325 2.925.544.738.287 1.262.625 1.813 1.175s.894 1.075 1.175 1.813c.212.556.475 1.387.544 2.925.075 1.662.094 2.156.094 6.363s-.019 4.7-.094 6.363c-.069 1.538-.325 2.369-.544 2.925-.288.738-.625 1.262-1.175 1.813s-1.075.894-1.813 1.175c-.556.212-1.387.475-2.925.544-1.663.075-2.156.094-6.363.094s-4.7-.019-6.363-.094c-1.537-.069-2.369-.325-2.925-.544-.737-.288-1.263-.625-1.813-1.175s-.894-1.075-1.175-1.813c-.212-.556-.475-1.387-.544-2.925-.075-1.663-.094-2.156-.094-6.363s.019-4.7.094-6.363c.069-1.537.325-2.369.544-2.925.287-.737.625-1.263 1.175-1.813s1.075-.894 1.813-1.175c.556-.212 1.388-.475 2.925-.544 1.662-.081 2.156-.094 6.363-.094zm0-2.838c-4.275 0-4.813.019-6.494.094-1.675.075-2.819.344-3.819.731-1.037.4-1.913.944-2.788 1.819S1.486 4.656 1.08 5.688c-.387 1-.656 2.144-.731 3.825-.075 1.675-.094 2.213-.094 6.488s.019 4.813.094 6.494c.075 1.675.344 2.819.731 3.825.4 1.038.944 1.913 1.819 2.788s1.756 1.413 2.788 1.819c1 .387 2.144.656 3.825.731s2.213.094 6.494.094 4.813-.019 6.494-.094c1.675-.075 2.819-.344 3.825-.731 1.038-.4 1.913-.944 2.788-1.819s1.413-1.756 1.819-2.788c.387-1 .656-2.144.731-3.825s.094-2.212.094-6.494-.019-4.813-.094-6.494c-.075-1.675-.344-2.819-.731-3.825-.4-1.038-.944-1.913-1.819-2.788s-1.756-1.413-2.788-1.819c-1-.387-2.144-.656-3.825-.731C20.812.275 20.275.256 16 .256z"/>
                                            <path d="M16 7.912a8.088 8.088 0 0 0 0 16.175c4.463 0 8.087-3.625 8.087-8.088s-3.625-8.088-8.088-8.088zm0 13.338a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 1 1 0 10.5zM26.294 7.594a1.887 1.887 0 1 1-3.774.002 1.887 1.887 0 0 1 3.774-.003z"/>
                                        </svg>
                                    </a></li>
                                <li><a target="_blank" href="#"
                                       title="translation missing: en.layout.footer.social_platform">
                                        <svg aria-hidden="true" focusable="false" role="presentation"
                                             class="icon icon-youtube" viewBox="0 0 21 20">
                                            <path d="M-.196 15.803q0 1.23.812 2.092t1.977.861h14.946q1.165 0 1.977-.861t.812-2.092V3.909q0-1.23-.82-2.116T17.539.907H2.593q-1.148 0-1.969.886t-.82 2.116v11.894zm7.465-2.149V6.058q0-.115.066-.18.049-.016.082-.016l.082.016 7.153 3.806q.066.066.066.164 0 .066-.066.131l-7.153 3.806q-.033.033-.066.033-.066 0-.098-.033-.066-.066-.066-.131z"/>
                                        </svg>
                                    </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-footer__bottom">
                <div class="container">
                    <div class="grid-uniform">
                        <div class="footer__copyright grid__item wide--four-sixths post-large--four-sixths large--one-half medium--one-whole">
                            <p>&copy; 2020 koza theme

                                Copyright Reserved

                            </p></div>
                        <div class="footer__payment-icons grid__item wide--one-third post-large--one-third large--one-half medium--one-whole">
                            <ul class="inline-list payment-icons">
                                <li class="icon--payment">
                                    <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38"
                                         height="24" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title>
                                        <path opacity=".07"
                                              d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/>
                                        <path fill="#fff"
                                              d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/>
                                        <path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                                              fill="#142688"/>
                                    </svg>
                                </li>
                                <li class="icon--payment">
                                    <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38"
                                         height="24" aria-labelledby="pi-master"><title id="pi-master">
                                            Mastercard</title>
                                        <path opacity=".07"
                                              d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/>
                                        <path fill="#fff"
                                              d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/>
                                        <circle fill="#EB001B" cx="15" cy="12" r="7"/>
                                        <circle fill="#F79E1B" cx="23" cy="12" r="7"/>
                                        <path fill="#FF5F00"
                                              d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"/>
                                    </svg>
                                </li>
                                <li class="icon--payment">
                                    <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24"
                                         role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title>
                                        <path opacity=".07"
                                              d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/>
                                        <path fill="#fff"
                                              d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/>
                                        <path fill="#003087"
                                              d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"/>
                                        <path fill="#3086C8"
                                              d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"/>
                                        <path fill="#012169"
                                              d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"/>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <style>

            .footer-default h4 {
                color: #1a1a1a;
            }

            .footer-default, .footer-default p {
                color: #6a6a6a;
            }

            .footer-default li a {
                color: #6a6a6a;
            }

            .footer-default li a:hover, .footer-default .footer__social li a:hover {
                color: #b17862;
            }

            .footer-default i, .footer-default .address-block h3, .footer-default .footer__social li a {
                color: #6a6a6a;
            }


            footer.footer-default .site-footer__bottom {
                background: #ffffff;
            }

            footer.footer-default .site-footer__bottom p {
                color: #6a6a6a;
            }

            footer.footer-default .site-footer__bottom a {
                color: #6a6a6a;
            }

            footer.footer-default .site-footer__bottom a:hover {
                color: #b17862;
            }

        </style>
    </div>
</div>
<script src="../cdn.shopify.com/s/files/1/0438/5698/6280/t/2/assets/inview-donut-easing91ee.js?v=11410926627178193725"
        type="text/javascript"></script>
<script src="../cdn.shopify.com/s/files/1/0438/5698/6280/t/2/assets/theme5f8d.js?v=17225070249964267527"
        type="text/javascript"></script>
<script src="../cdn.shopify.com/shopifycloud/shopify/assets/themes_support/option_selection-fe6b72c2bbdd3369ac0bfefe8648e3c889efca213baefd4cfb0dd9363563831f.js"
        type="text/javascript"></script>
<script src="../cdn.shopify.com/shopifycloud/shopify/assets/themes_support/api.jquery-e94e010e92e659b566dbc436fdfe5242764380e00398907a14955ba301a4749f.js"
        type="text/javascript"></script>
<script src="../cdn.shopify.com/s/files/1/0438/5698/6280/t/2/assets/history-to-light18d8.js?v=17945962704583084051"
        type="text/javascript"></script>
<script src="../cdn.shopify.com/s/files/1/0438/5698/6280/t/2/assets/footerdeae.js?v=17868930316502956096"
        type="text/javascript"></script>
<script src="../cdn.shopify.com/s/files/1/0438/5698/6280/t/2/assets/shop839d.js?v=536137306120260991"
        type="text/javascript"></script>
<script src="../cdn.shopify.com/s/files/1/0438/5698/6280/t/2/assets/wow6fc4.js?v=8607965041847799793"></script>
<script src="../cdn.shopify.com/s/files/1/0438/5698/6280/t/2/assets/ajax-search-scriptc54d.js?v=4807685427988216449"></script>
<div class="clearfix" id="quickview-template" style="display:none">
    <div class="overlay"></div>
    <div class="content clearfix"><h4 class="product-title"><a>&nbsp;</a></h4>
        <div class="product-img images">
            <div class="quickview-featured-image product-photo-container"></div>
            <div class="more-view-wrapper">
                <ul class="product-photo-thumbs quickview-more-views-owlslider "></ul>
            </div>
        </div>
        <div class="product-shop summary">
            <div class="product-item product-detail-section"><p class="item-text product-description"></p>
                <div class="prices product_price"><label>Price :</label>
                    <div class="compare-price" id="QComparePrice"></div>
                    <div class="price" id="QProductPrice"></div>
                </div>
                <div class="product-infor"><p class="product-inventory"><label>Availability :</label><span></span></p>
                </div>
                <div class="details clearfix">
                    <form action="https://koza-theme.myshopify.com/cart/add" method="post" class="variants"><select
                                name='id' style="display:none"></select>
                        <div class="qty-section quantity-box"><label>Quantity :</label>
                            <div class="dec button qtyminus">-</div>
                            <input type="number" name="quantity" id="Qty" value="1" class="quantity">
                            <div class="inc button qtyplus">+</div>
                        </div>
                        <div class="total-price"><label>Subtotal :</label><span></span></div>
                        <div class="actions">
                            <button type="button" class="add-to-cart-btn btn">
                                Add to Cart
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <a href="javascript:void(0)" class="close-window"></a></div>
</div>
<div class="loading-modal modal">Loading</div>
<div class="newsletterwrapper" data-newsletter id="email-modal" style="display:none;">
    <div class="modal-overlay"></div>
    <div class="window-content">
        <div class="window-box">
            <div class="window-box-bg"><p class="sub-title">Huge Discount</p>
                <h3 class="title">Join Our Newsletter</h3>
                <p class="message">Get Upto
                    <span>20%</span> Off on your order.
                </p>
                <div id="mailchimp-email-subscibe">
                    <div id="mc_embed_signup">
                        <form method="post" action="https://koza-theme.myshopify.com/contact#contact_form"
                              id="contact_form" accept-charset="UTF-8" class="contact-form"><input type="hidden"
                                                                                                   name="form_type"
                                                                                                   value="customer"/><input
                                    type="hidden" name="utf8" value="✓"/><input type="email"
                                                                                placeholder="Enter your email id"
                                                                                value=""
                                                                                placeholder="Email address"
                                                                                name="contact[email]" class="mail"
                                                                                aria-label="Email address"
                                                                                required="required"><input type="hidden"
                                                                                                           name="contact[tags]"
                                                                                                           value="newsletter"><input
                                    type="submit" class="btn" value="Submit" id="subscribe"></form>
                    </div>
                    <p>Signup for exclusive updates.</p></div>
                <ul class="inline-list social-icons social-links-type-1">
                    <li><a class="icon-fallback-text twitt hexagon" target="blank" href="#" title="Twitter"><span
                                    class="fab fa-twitter" aria-hidden="true"></span></a></li>
                    <li><a class="icon-fallback-text fb hexagon" target="blank" href="#" title="Facebook"><span
                                    class="fab fa-facebook" aria-hidden="true"></span></a></li>
                    <li><a class="icon-fallback-text ins" target="blank" href="#" title="Instagram"><span
                                    class="fab fa-instagram" aria-hidden="true"></span></a></li>
                    <li><a class="icon-fallback-text youtube" target="blank" href="#" title="YouTube"><span
                                    class="fab fa-youtube" aria-hidden="true"></span></a></li>
                </ul>
            </div>
            <a class="close-window" title="Close">
                <svg aria-hidden="true" data-prefix="fal" data-icon="times" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                     class="svg-inline--fa fa-times fa-w-10 fa-2x">
                    <path fill="currentColor"
                          d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                          class=""></path>
                </svg>
            </a></div>
    </div>
</div>
<div id="shopify-section-someone-purchased" class="shopify-section">
    <style>
        @media (min-width: 1200px) {
            .product-notification {

                right: 15px;

            }
        }
    </style>
    <style>
        @media (max-width: 767px) {
            .product-notification {
                display: none;
            }
        }
    </style>
</div>
<div id="slidedown-cart">
    <div class="cart-title"><a href="javascript:void(0)" title="Close" class="close-cart close">
            <svg aria-hidden="true" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 320 512" class="svg-inline--fa fa-times fa-w-10 fa-2x">
                <path fill="currentColor"
                      d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                      class=""></path>
            </svg>
            <span>
            Close
          </span></a><h5>
            Shopping cart :
        </h5></div>
    <div class="no-items"><p class="cart_empty">
            No Items in cart
        </p>
        <div class="text-continue"><a class="btn btn-continue" href="#">
                Continue shopping
            </a></div>
    </div>
    <div class="has-items">
        <ul class="mini-products-list"></ul>
        <div class="summary">
            <div class="total"><span class="label"><span>
                Total:
              </span></span><span class="price">
              Rs. 0.00
            </span></div>
        </div>
        <div class="actions">
            <button class="btn btn-checkout" onclick="window.location='cart.html'">
                Proceed to Checkout
            </button>
            <a class="btn btn-view-cart" href="cart.html">
                View Cart
            </a></div>
    </div>
</div>
<div class="wrap-overlay"></div>
<!-- Scripts -->
<script src="{{ asset('koza/js/lib.js') }}"></script>
@yield('js')
</body>

</html>
