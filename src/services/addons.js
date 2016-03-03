var angular = require('angular');

angular.module('app').factory('AddonsSvc', function ($http) {
  return {
    add: function (operationId, data) {
      return $http.post('/api/operations/' + operationId + '/addons', data);
    },
    addons: function (operationId) {
      return $http.get('/api/operations/' + operationId + '/addons');
    },
    delete: function (operationId, id) {
      return $http.delete('/api/operations/' + operationId + '/addons/' + id);
    },
  };
});
