module.exports = {
  // Vendor
  jquery: [
    'jquery',
    'jquery-ui/themes/base/core.css',
    'jquery-ui/themes/base/sortable.css',
    'jquery-ui/ui/widgets/sortable'
  ],
  bootstrap: [
    'bootstrap-loader'
  ],
  angular: [
    'angular',
    'angular-animate',
    'angular-route',
    'angular-ui-bootstrap',
    'angular-ui-sortable',
    'markitup',
    'ng-file-upload'
  ],
  // App
  app: './src/',
  auth: './src/auth',
  bbcode: './src/bbcode',
  login: './src/login',
  navigation: './src/navigation',
  operations: './src/operations',
  shouts: './src/shouts',
  streams: './src/streams'
}
