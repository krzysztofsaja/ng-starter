var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');
var purify = require('purifycss-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');



config.output = {
  filename: '[name].bundle.js',
  publicPath: '',
  path: path.resolve(__dirname, 'dist')
};

config.plugins = config.plugins.concat([

  // Reduces bundles total size
  new webpack.optimize.UglifyJsPlugin({
    mangle: {

      // You can specify all variables that should not be mangled.
      // For example if your vendor dependency doesn't use modules
      // and relies on global variables. Most of angular modules relies on
      // angular global variable, so we should keep it unchanged
      except: ['$super', '$', 'exports', 'require', 'angular']
    }
  }),
  new purify({
    basePath: __dirname,
    resolveExtensions: ['.html'],
    purifyOptions: {
      minify: true,
      info: true
    }
  })

]);
config.module.loaders = config.module.loaders.concat([
  {
    test: /\.styl$/,
    loader: ExtractTextPlugin.extract(
      'style',
      'css!postcss!stylus'
    )
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract(
      'style',
      'css!postcss!sass'
    )
  }
]);
module.exports = config;
