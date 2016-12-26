angular.module('operations').factory('GroupsSvc', function ($http, ApiConfig) {
  return {
    add: function (operationId, data) {
      return $http.post(ApiConfig.BASE_API + '/operations/' + operationId + '/groups', {
        group: data
      });
    },
    copy: function (operationId, id) {
      return $http.post(ApiConfig.BASE_API + '/operations/' + operationId + '/groups/' + id + '/copy');
    },
    groups: function (operationId) {
      return $http.get(ApiConfig.BASE_API + '/operations/' + operationId + '/groups');
    },
    delete: function (operationId, id) {
      return $http.delete(ApiConfig.BASE_API + '/operations/' + operationId + '/groups/' + id);
    },
    update: function (operationId, id, data) {
      return $http.patch(ApiConfig.BASE_API + '/operations/' + operationId + '/groups/' + id, {
        group: data
      });
    },
  };
});
