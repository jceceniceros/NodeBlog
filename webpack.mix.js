const mix = require('laravel-mix');
require('laravel-mix-alias');

mix.setPublicPath('public');
mix.setResourceRoot('../');

if (mix.inProduction()) {
    mix.version();
} else {
    mix.webpackConfig({ devtool: 'inline-source-map' });
}

mix.alias({
    '@': '/resources/assets/js',
    '~': '/resources/assets/sass'
});

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

mix.copyDirectory(
    'resources/images',
    'public/images'
);

mix.js('resources/js/app.js', 'public/js')
    .extract([
        'popper.js',
        'bootstrap',
        'jquery'
    ]);

mix.sass('resources/sass/app.scss', 'public/css');
