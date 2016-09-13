var css = require.context('./css', true, /.css$/);
css.keys().forEach(css);

var app = angular.module('app', [
  'bbcode',
  'navigation',
  'operations',
  'shouts',
  'ngRoute',
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/operations', {
        controller: 'OperationsCtrl',
        template: require('./operations/templates/operations_controller.html'),
      })
      .when('/operations/:operationId', {
        controller: 'OperationCtrl',
        resolve: {
          operationId: function( $route ) {
            return $route.current.params.operationId;
          },
        },
        template: require('./operations/templates/operation.html'),
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
