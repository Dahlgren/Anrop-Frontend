var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: require('./webpack/entry'),
  module: require('./webpack/module'),
  output: require('./webpack/output'),
  plugins: [
    require('./webpack/provide'),
    new webpack.optimize.CommonsChunkPlugin('init.js')
  ]
}
