var path = require("path");
var webpack = require('webpack');

module.exports = {
  devServer: {
    proxy: {
      '/api/users/*': {
        target: 'https://www.anrop.se/',
        secure: false,
        changeOrigin: true,
      },
      '/api/*': {
        target: 'https://anrop-api.herokuapp.com/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {'^/api' : ''},
      },
      '/images/*': {
        target: 'https://www.anrop.se/',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  devtool: 'source-map',
  entry: require('./webpack/entry'),
  module: require('./webpack/module'),
  output: require('./webpack/output'),
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.optimize.CommonsChunkPlugin('init.js'),
  ],
};
