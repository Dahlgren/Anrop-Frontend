var path = require("path");

module.exports = {
  devServer: {
    proxy: {
      '/api/*': {
        target: 'https://www.anrop.se/',
        secure: false,
        changeOrigin: true,
      },
      '/images/*': {
        target: 'https://www.anrop.se/',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  devtool: 'source-map',
  entry: {
    app: "./src/",
  },
  module: require('./webpack/module'),
  output: require('./webpack/output'),
};
