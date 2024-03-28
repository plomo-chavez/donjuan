const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. This setup compiles your CSS and JS,
 | handles asset versioning, and configures BrowserSync for development.
 |
 */

// Path Aliases
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
        loader: 'file-loader',
        options: {
          name: 'assets/images/[path][name].[ext]',
          context: 'resources/assets/images',
        },
      },
      {
        test: /\.(mp4|webm)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/videos/[name].[ext]',
        },
      },
    ],
  },
})
.sass('resources/scss/core.scss', 'public/css')
.options({
  postCss: [require('autoprefixer'), require('postcss-rtl')],
});

// Copy static images from resources to public
mix.copyDirectory('resources/js/src/assets', 'public/assets');

// BrowserSync for live reloading and syncing across devices
mix.browserSync({
  proxy: 'http://localhost:8888/donjuan',
  files: [
    'public/js/**/*.js',
    'public/css/**/*.css',
    'resources/views/**/*.php'
  ]
});

// Asset Versioning for Cache Busting in Production
if (mix.inProduction()) {
  mix.version();
}

// Additional Webpack Configuration if needed
mix.webpackConfig({
  output: {
    chunkFilename: 'js/chunks/[name].[chunkhash].js',
  },
});
