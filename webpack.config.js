var path = require("path");

module.exports = {
  entry: {
    app: "./src/",
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.eot$/,
        loader: "file-loader",
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.less$/,
        loader: "less-loader"
      },
      {
        test: /\.png$/,
        loader: "file-loader"
      },
      {
        test: /\.svg$/,
        loader: "file-loader"
      },
      {
        test: /\.ttf$/,loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
    ],
  },
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
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: "/",
  },
};
