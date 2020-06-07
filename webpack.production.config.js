var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: require('./webpack/entry'),
  module: require('./webpack/module'),
  output: require('./webpack/output'),
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: 'index.html'
    }),
    require('./webpack/provide')
  ]
}
