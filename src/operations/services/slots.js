angular.module('operations').factory('SlotsSvc', function ($http, ApiConfig) {
  return {
    add: function (operationId, groupId, data) {
      return $http.post(ApiConfig.BASE_API + '/operations/' + operationId + '/groups/' + groupId + '/slots', {
        slot: data
      });
    },
    slots: function (operationId, groupId) {
      return $http.get(ApiConfig.BASE_API + '/operations/' + operationId + '/groups/' + groupId + '/slots');
    },
    delete: function (operationId, groupId, id) {
      return $http.delete(ApiConfig.BASE_API + '/operations/' + operationId + '/groups/' + groupId + '/slots/' + id);
    },
    update: function (operationId, groupId, id, data) {
      return $http.patch(ApiConfig.BASE_API + '/operations/' + operationId + '/groups/' + groupId + '/slots/' + id, {
        slot: data
      });
    },
  };
});
