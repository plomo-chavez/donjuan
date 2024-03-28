const mix = require('laravel-mix');
const path = require('path');
const fs = require('fs'); // Importar fs para verificar la existencia de directorios

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
  .sass('resources/scss/core.scss', 'public/css')
  .copy('resources/css/loader.css', 'public/css');

// Configuración de aliases para simplificar las rutas de importación en tus archivos JS
mix.webpackConfig({
  resolve: {
    alias: {
      '@out': path.resolve(__dirname, 'resources/js/src/views/out'),
      '@currentComponents': path.resolve(__dirname, 'resources/js/src/views/currentComponents'),
      '@themeConfig': path.resolve(__dirname, 'resources/js/themeConfig.js'),
      '@validations': path.resolve(__dirname, 'resources/js/src/@core/utils/validations/validations.js'),
      '@resources': path.resolve(__dirname, 'resources/'),
      '@helpers': path.resolve(__dirname, 'resources/js/src/helpers'),
      '@axios': path.resolve(__dirname, 'resources/js/src/libs/axios'),
      '@core': path.resolve(__dirname, 'resources/js/src/@core'),
      '@': path.resolve(__dirname, 'resources/js/src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['node_modules', 'resources/assets'],
              },
            },
          },
        ],
      },
      {
        test: /(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/,
        loaders: {
          loader: 'file-loader',
          options: {
            name: 'assets/images/[path][name].[ext]',
            context: '../vuexy-vuejs-bootstrap-vue-template/src/assets/images',
            //   context: 'frontend/src/assets/images'
          },
        },
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/videos/[name].[ext]',
          },
        },
      },
    ],
  },
  output: {
    chunkFilename: 'js/chunks/[name].[chunkhash].js',
  },
});

// Habilitar BrowserSync para recargar el navegador automáticamente durante el desarrollo
mix.browserSync({
  proxy: 'http://localhost:8888/donjuan',
  files: [
    'public/js/**/*.js',
    'public/css/**/*.css',
    'resources/views/**/*.php'
  ]
});

// Verificación y copia condicional de directorio de imágenes
const imagesDir = 'resources/assets/images';
if (fs.existsSync(imagesDir)) {
  mix.copyDirectory(imagesDir, 'public/assets/images');
}

// Habilitar versionado de archivos en producción para control de caché
if (mix.inProduction()) {
  mix.version();
}
