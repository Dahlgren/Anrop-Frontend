module.exports = {
  rules: [
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.eot$/,
      loader: 'file-loader'
    },
    {
      test: /\.html$/,
      loader: 'htmllint-loader',
      exclude: /(node_modules)/,
      query: {
        failOnError: true,
        failOnWarning: true
      }
    },
    {
      test: /\.html$/,
      loader: 'html-loader'
    },
    {
      test: /\.jpg$/,
      loader: 'file-loader'
    },
    {
      test: /\.less$/,
      loader: 'less-loader'
    },
    {
      test: /\.png$/,
      loader: 'file-loader'
    },
    {
      test: /\.(sass|scss)$/,
      loader: 'style-loader!css-loader!sass-loader'
    },
    {
      test: /\.svg$/,
      loader: 'url-loader?limit=10000'
    },
    {
      test: /\.ttf$/,
      loader: 'file-loader'
    },
    {
      test: /\.txt$/,
      loader: 'raw-loader'
    },
    {
      test: /\.(woff|woff2)$/,
      loader: 'url-loader?limit=10000'
    },
    {
      test: /ui-sortable/,
      use: ['imports-loader?$UI=jquery-ui/ui/widgets/sortable']
    }
  ]
}
