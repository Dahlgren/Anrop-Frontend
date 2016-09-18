var path = require("path");

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
        rewrite: function(req) {
          req.url = req.url.replace(/^\/api/, '');
        },
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
