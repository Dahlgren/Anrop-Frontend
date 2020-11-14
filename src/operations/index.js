const app = angular.module('operations', [
  'bbcode',
  'ui.bootstrap',
  'ui.sortable',
  'ngFileUpload',
  'ngSanitize'
])

app.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|mailto|pws|steam):/)
}])

const css = require.context('./css', true, /.css$/)
css.keys().forEach(css)

const services = require.context('./services', true, /.js$/)
services.keys().forEach(services)

const directives = require.context('./directives', true, /.js$/)
directives.keys().forEach(directives)

const controllers = require.context('./controllers', true, /.js$/)
controllers.keys().forEach(controllers)

module.exports = 'operations'
