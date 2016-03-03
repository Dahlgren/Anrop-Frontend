var angular = require('angular');

angular.module('app').factory('GroupsSvc', function ($http) {
  return {
    add: function (operationId, data) {
      return $http.post('/api/operations/' + operationId + '/groups', data);
    },
    copy: function (operationId, id) {
      return $http.post('/api/operations/' + operationId + '/groups/' + id + '/copy');
    },
    groups: function (operationId) {
      return $http.get('/api/operations/' + operationId + '/groups');
    },
    delete: function (operationId, id) {
      return $http.delete('/api/operations/' + operationId + '/groups/' + id);
    },
    update: function (operationId, id, data) {
      return $http.post('/api/operations/' + operationId + '/groups/' + id, data);
    },
    order: function (operationId, data) {
      return $http.post('/api/operations/' + operationId + '/groups/order', data);
    },
  };
});
