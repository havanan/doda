const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
// Admin Css
mix.styles([
    'resources/admin/assets/plugins/bootstrap/css/bootstrap.min.css',
    'resources/admin/assets/plugins/morrisjs/morris.css',
    'resources/admin/css/style.css',
    'resources/admin/css/colors/blue.css',
    'resources/admin/css/spinners.css',
    'resources/admin/css/animate.css',

    'resources/admin/scss/icons/font-awesome/css/font-awesome.min.css',
    'resources/admin/scss/icons/simple-line-icons/css/simple-line-icons.css',
    'resources/admin/scss/icons/weather-icons/css/weather-icons.min.css',
    'resources/admin/scss/icons/linea-icons/linea.css',
    'resources/admin/scss/icons/themify-icons/themify-icons.css',
    'resources/admin/scss/icons/flag-icon-css/flag-icon.min.css',
    'resources/admin/scss/icons/material-design-iconic-font/css/materialdesignicons.min.css',

], 'public/admin/css/lib.css').version();
// Admin Js
mix.scripts([
    'resources/admin/assets/plugins/jquery/jquery.min.js',
    'resources/admin/assets/plugins/bootstrap/js/popper.min.js',
    'resources/admin/assets/plugins/bootstrap/js/bootstrap.min.js',
    'resources/admin/assets/plugins/styleswitcher/jQuery.style.switcher.js',
    'resources/admin/assets/plugins/sticky-kit-master/dist/sticky-kit.min.js',
    'resources/admin/assets/plugins/sparkline/jquery.sparkline.min.js',
    'resources/admin/assets/plugins/raphael/raphael-min.js',
    'resources/admin/assets/plugins/morrisjs/morris.min.js',
    'resources/admin/assets/plugins/sparkline/jquery.sparkline.min.js',
    'resources/admin/js/jquery.slimscroll.js',
    'resources/admin/js/waves.js',
    'resources/admin/js/sidebarmenu.js',
    'resources/admin/js/custom.min.js',
    'resources/admin/js/dashboard4.js',

], 'public/admin/js/lib.js').version();