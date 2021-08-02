const mix = require('laravel-mix');
const path = require('path');
const tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your applications. By default, we are compiling the CSS file
 |  for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath(path.resolve('./'))
    .js('resources/caretail-theme/js/care.js', 'public/user/themes/caretail/js')
    .sass('resources/caretail-theme/css/care.scss', 'public/user/themes/caretail/css')
    .options({
        postCss: [ tailwindcss('./tailwind.config.js') ],
    })
    .webpackConfig(require('./webpack.config'));

if (mix.inProduction()) {
    mix.version();
}
