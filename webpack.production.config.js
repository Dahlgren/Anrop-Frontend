var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: "./src/",
  },
  module: require('./webpack/module'),
  output: require('./webpack/output'),
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: 'index.html',
    }),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.DedupePlugin(),
  ],
}
