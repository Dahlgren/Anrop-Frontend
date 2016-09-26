angular.module('operations').factory('OperationSvc', function ($http, ApiConfig) {
  return {
    operations: function () {
      return $http.get(ApiConfig.BASE_API + '/operations/upcoming');
    },
    operation: function (id) {
      return $http.get(ApiConfig.BASE_API + '/operations/' + id);
    },
    update: function (id, data) {
      return $http.post(ApiConfig.BASE_API + '/operations/' + id, data);
    },
  };
});
