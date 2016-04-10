var angular = require('angular');

angular.module('operations').factory('OperationSvc', function ($http) {
  return {
    operations: function () {
      return $http.get('/api/operations/upcoming');
    },
    operation: function (id) {
      return $http.get('/api/operations/' + id);
    },
    update: function (id, data) {
      return $http.post('/api/operations/' + id, data);
    },
  };
});
