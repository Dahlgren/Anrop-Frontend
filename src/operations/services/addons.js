angular.module('operations').factory('AddonsSvc', function ($http, ApiConfig) {
  return {
    add: function (operationId, data) {
      return $http.post(ApiConfig.BASE_API + '/operations/' + operationId + '/addons', {
        addon: data
      });
    },
    addons: function (operationId) {
      return $http.get(ApiConfig.BASE_API + '/operations/' + operationId + '/addons');
    },
    delete: function (operationId, id) {
      return $http.delete(ApiConfig.BASE_API + '/operations/' + operationId + '/addons/' + id);
    },
  };
});
