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
      test: /\.png$/,
      loader: 'file-loader'
    },
    {
      test: /\.svg$/,
      loader: 'file-loader'
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
      loader: 'file-loader'
    },
    {
      test: /ui-sortable/,
      use: ['imports-loader?$UI=jquery-ui/ui/widgets/sortable']
    }
  ]
}
