angular.module('operations').factory('PwsSvc', function ($http, ApiConfig) {
  return {
    add: function (operationId, data) {
      return $http.post(ApiConfig.BASE_API + '/operations/' + operationId + '/play_with_six', data);
    },
    addons: function (operationId) {
      return $http.get(ApiConfig.BASE_API + '/operations/' + operationId + '/play_with_six');
    },
    delete: function (operationId, id) {
      return $http.delete(ApiConfig.BASE_API + '/operations/' + operationId + '/play_with_six/' + id);
    },
    search: function (query) {
      return $http.get(ApiConfig.BASE_PWS_API + '/search?q=' + query);
    },
    templates: function () {
      return $http.get(ApiConfig.BASE_PWS_API + '/templates');
    },
  };
});
