var angular = require('angular');

angular.module('operations').factory('SlotsSvc', function ($http) {
  return {
    add: function (operationId, groupId, data) {
      return $http.post('/api/operations/' + operationId + '/groups/' + groupId + '/slots', data);
    },
    assign: function (operationId, groupId, slotId, data) {
      return $http.post('/api/operations/' + operationId + '/groups/' + groupId + '/slots/' + slotId + '/assign', data);
    },
    slots: function (operationId, groupId) {
      return $http.get('/api/operations/' + operationId + '/groups/' + groupId + '/slots');
    },
    delete: function (operationId, groupId, id) {
      return $http.delete('/api/operations/' + operationId + '/groups/' + groupId + '/slots/' + id);
    },
    empty: function (operationId, groupId, slotId, data) {
      return $http.post('/api/operations/' + operationId + '/groups/' + groupId + '/slots/' + slotId + '/empty', data);
    },
    update: function (operationId, groupId, id, data) {
      return $http.post('/api/operations/' + operationId + '/groups/' + groupId + '/slots/' + id, data);
    },
    order: function (operationId, groupId, data) {
      return $http.post('/api/operations/' + operationId + '/groups/' + groupId + '/slots/order', data);
    },
  };
});
