let mix = require('laravel-mix');

// Frontend
mix
  .js('resources/js/scripts.js', 'assets/js')
  .sass('resources/scss/styles.scss', 'assets/css')
  .sass('resources/scss/vendors.scss', 'assets/css');

// Output Path
mix.setPublicPath('src');

// Disable notification
mix.disableNotifications();

// Versioning
mix.version();

// Options
if (mix.inProduction()) {
  /* Mix Option */
  mix.options({
    postCss: [require('postcss-discard-comments')({ removeAll: true })],
    processCssUrls: true
  });
} else {
  mix.sourceMaps();
}

mix.webpackConfig(webpack => {
  return {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  };
});
