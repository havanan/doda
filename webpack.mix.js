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

//     .sass('resources/sass/app.scss', 'public/css');
// admin css
mix.styles([
    'resources/admin/assets/simple-line-icons/simple-line-icons.min.css',
    'resources/admin/css/font-awesome.min.css',
    'resources/admin/assets/bootstrap/css/bootstrap.min.css',
    'resources/admin/assets/material/material.min.css',
    'resources/admin/css/material_style.css',
    'resources/admin/css/theme_style.css',
    'resources/admin/css/plugins.min.css',
    'resources/admin/css/style.css',
    'resources/admin/css/responsive.css',
    'resources/admin/css/theme-color.css',
    'resources/admin/vendor/file-manager/css/file-manager.css',

], 'public/css/lib.css').version();
// login css
mix.styles([
    'resources/admin/css/font-awesome.min.css',
    'resources/admin/assets/iconic/css/material-design-iconic-font.min.css',
    'resources/admin/assets/bootstrap/css/bootstrap.min.css',
    'resources/admin/css/extra_pages.css',
], 'public/css/auth.css').version();
// admin js
mix.scripts([
    'resources/admin/assets/jquery.min.js',
    'resources/admin/assets/popper/popper.js',
    'resources/admin/assets/jquery.blockui.min.js',
    'resources/admin/assets/jquery.slimscroll.js',
    'resources/admin/assets/bootstrap/js/bootstrap.min.js',
    'resources/admin/assets/bootstrap-switch/js/bootstrap-switch.min.js',
    'resources/admin/assets/app.js',
    'resources/admin/assets/theme-color.js',
    'resources/admin/assets/material/material.min.js',
    'resources/admin/assets/chart-js/Chart.bundle.js',
    'resources/admin/assets/chart-js/utils.js',
    'resources/admin/assets/chart-js/home-data.js',
    'resources/admin/vendor/file-manager/js/file-manager.js',
], 'public/js/lib.js').version();
// auth js
mix.scripts([
    'resources/admin/assets/jquery.min.js',
    'resources/admin/assets/bootstrap/js/bootstrap.min.js',
    'resources/admin/assets/login.js',
], 'public/js/auth.js').version();
mix.scripts([
    'resources/js/app.js'
], 'public/js/app.js').version();