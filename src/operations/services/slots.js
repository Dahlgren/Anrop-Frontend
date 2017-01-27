angular.module('operations').factory('SlotsSvc', function ($http, ApiConfig) {
  return {
    add: function (operationId, groupId, data) {
      return $http.post(ApiConfig.BASE_API + '/operations/' + operationId + '/groups/' + groupId + '/slots', {
        slot: data
      }).then(function (response) {
        return response.data;
      });
    },
    slots: function (operationId, groupId) {
      return $http.get(ApiConfig.BASE_API + '/operations/' + operationId + '/groups/' + groupId + '/slots').then(function (response) {
        return response.data;
      });
    },
    delete: function (operationId, groupId, id) {
      return $http.delete(ApiConfig.BASE_API + '/operations/' + operationId + '/groups/' + groupId + '/slots/' + id).then(function (response) {
        return response.data;
      });
    },
    update: function (operationId, groupId, id, data) {
      return $http.patch(ApiConfig.BASE_API + '/operations/' + operationId + '/groups/' + groupId + '/slots/' + id, {
        slot: data
      }).then(function (response) {
        return response.data;
      });
    },
  };
});
