angular.module('operations').factory('GroupsSvc', function ($http, ApiConfig) {
  return {
    add: function (operationId, data) {
      return $http.post(ApiConfig.BASE_API + '/operations/' + operationId + '/groups', {
        group: data
      }).then(function (response) {
        return response.data;
      });
    },
    copy: function (operationId, id) {
      return $http.post(ApiConfig.BASE_API + '/operations/' + operationId + '/groups/' + id + '/copy').then(function (response) {
        return response.data;
      });
    },
    groups: function (operationId) {
      return $http.get(ApiConfig.BASE_API + '/operations/' + operationId + '/groups').then(function (response) {
        return response.data;
      });
    },
    delete: function (operationId, id) {
      return $http.delete(ApiConfig.BASE_API + '/operations/' + operationId + '/groups/' + id).then(function (response) {
        return response.data;
      });
    },
    update: function (operationId, id, data) {
      return $http.patch(ApiConfig.BASE_API + '/operations/' + operationId + '/groups/' + id, {
        group: data
      }).then(function (response) {
        return response.data;
      });
    },
  };
});
