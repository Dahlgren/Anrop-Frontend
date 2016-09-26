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
      .when('/operations', require('./app/routes/operations/operations.js'))
      .when('/operations/:operationId', require('./app/routes/operations/operation.js'))
      .when('/operations/:operationId/edit', require('./app/routes/operations/edit_operation.js'))
      .when('/shoutbox', require('./app/routes/shouts/shouts.js'))
      .otherwise({
        redirectTo: '/operations'
      });
  }]);
