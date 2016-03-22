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
  require('./navigation'),
  require('./operations'),
  require('./shouts'),
  'ngRoute',
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/operations', {
        controller: 'OperationsCtrl',
        template: require('./operations/templates/operations_controller.html'),
      })
      .when('/operations/:operationId/edit', {
        controller: 'EditOperationCtrl',
        resolve: {
          operationId: function( $route ) {
            return $route.current.params.operationId;
          },
        },
        template: require('./operations/templates/edit_operation.html'),
      })
      .when('/shoutbox', {
        controller: 'ShoutsController',
        template: require('./shouts/templates/shouts_controller.html'),
      })
      .otherwise({
        redirectTo: '/operations'
      });
  }]);
