let mix = require('laravel-mix');

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

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

mix.less('resources/assets/theme/less/theme.less', 'public/css/build_theme.css')
    .sourceMaps();

mix.styles([
    'public/css/build_theme.css',
    'resources/assets/theme/css/icons/icomoon/styles.css'
], 'public/css/theme.css')
    .sourceMaps();

mix.babel([
    'resources/assets/theme/js/plugins/loaders/pace.min.js',
    'resources/assets/theme/js/plugins/loaders/blockui.min.js',
    'resources/assets/theme/js/core/libraries/jquery.min.js',
    'resources/assets/theme/js/core/libraries/bootstrap.min.js',
    'resources/assets/theme/js/plugins/forms/styling/switchery.min.js',
    'resources/assets/theme/js/plugins/forms/styling/uniform.min.js',
    'resources/assets/theme/js/plugins/forms/selects/select2.min.js',
    'resources/assets/theme/js/plugins/uploaders/fileinput/fileinput.min.js',
    'resources/assets/theme/js/core/app.js',
    'resources/assets/theme/js/plugins/forms/inputs/typeahead/typeahead.b',
    'resources/assets/theme/js/plugins/ui/ripple.min.js',
    'resources/assets/theme/js/pages/login.js',
], 'public/js/theme.js');
