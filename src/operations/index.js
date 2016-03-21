var app = angular.module('operations', [
  'ngRoute',
  'ui.bootstrap',
  'ui.sortable',
  'ngFileUpload',
  'ngImgur',
]);

var services = require.context('./services', true, /.js$/);
services.keys().forEach(services);

var directives = require.context('./directives', true, /.js$/);
directives.keys().forEach(directives);

var controllers = require.context('./controllers', true, /.js$/);
controllers.keys().forEach(controllers);

module.exports = 'operations';
