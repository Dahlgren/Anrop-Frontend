require('expose?$!expose?jQuery!jquery');
require('jquery-ui');

require('bootstrap-webpack!./bootstrap.config.js');

var css = require.context('./css', true, /.css$/);
css.keys().forEach(css);

require('angular');
require('angular-route');
require('angular-ui-bootstrap');
require('angular-ui-sortable');
require('ng-file-upload');
require('ng-imgur');

var app = angular.module('app', [
  'ngRoute',
  'ui.bootstrap',
  'ui.sortable',
  'ngFileUpload',
  'ngImgur',
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/operations', {
        controller: 'OperationsCtrl',
        template: require('./templates/operations_controller.html'),
      })
      .when('/operations/:operationId/edit', {
        controller: 'EditOperationCtrl',
        resolve: {
          operationId: function( $route ) {
            return $route.current.params.operationId;
          },
        },
        template: require('./templates/edit_operation.html'),
      })
      .otherwise({
        redirectTo: '/operations'
      });
  }]);

var services = require.context('./services', true, /.js$/);
services.keys().forEach(services);

var directives = require.context('./directives', true, /.js$/);
directives.keys().forEach(directives);

var controllers = require.context('./controllers', true, /.js$/);
controllers.keys().forEach(controllers);
