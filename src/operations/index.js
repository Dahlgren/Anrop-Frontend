var app = angular.module('operations', [
  'bbcode',
  'ngRoute',
  'ui.bootstrap',
  'ui.sortable',
  'ngFileUpload',
  'ngImgur'
])

app.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|pws):/)
}])

var css = require.context('./css', true, /.css$/)
css.keys().forEach(css)

var services = require.context('./services', true, /.js$/)
services.keys().forEach(services)

var directives = require.context('./directives', true, /.js$/)
directives.keys().forEach(directives)

var controllers = require.context('./controllers', true, /.js$/)
controllers.keys().forEach(controllers)

module.exports = 'operations'
