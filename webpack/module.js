module.exports = {
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
      test: /\.(sass|scss)$/,
      loader: "style-loader!css-loader!sass-loader",
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
};
