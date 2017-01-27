angular.module('operations').factory('PwsSvc', function ($http, ApiConfig) {
  return {
    add: function (operationId, data) {
      return $http.post(ApiConfig.BASE_API + '/operations/' + operationId + '/play_with_six', {
        play_with_six: data
      }).then(function (response) {
        return response.data;
      });
    },
    addons: function (operationId) {
      return $http.get(ApiConfig.BASE_API + '/operations/' + operationId + '/play_with_six').then(function (response) {
        return response.data;
      });
    },
    delete: function (operationId, id) {
      return $http.delete(ApiConfig.BASE_API + '/operations/' + operationId + '/play_with_six/' + id).then(function (response) {
        return response.data;
      });
    },
    search: function (query) {
      return $http.get(ApiConfig.BASE_PWS_API + '/search?q=' + query).then(function (response) {
        return response.data;
      });
    },
    templates: function () {
      return $http.get(ApiConfig.BASE_PWS_API + '/templates').then(function (response) {
        return response.data;
      });
    },
  };
});
