var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var fontMagician = require('postcss-font-magician');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./client/app/config').default;

module.exports = {
  devtool: 'source-map',
  entry: {},
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader?{rules:{'no-var':0}}",
        exclude: /(node_modules)/
      }
    ],
    loaders: [
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css$/, loader: 'style!css!postcss' },
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /pl|en-gb/),
    // fetch polyfill
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new ExtractTextPlugin('[name].[chunkhash].css')
  ],
  eslint: {
    emitError: false,
    emitWarning: true,
    failOnError: true,
    failOnWarning: false
  },
  postcss: [
    autoprefixer(),
    fontMagician({
      foundries: 'bootstrap google'
    })
  ]
};
