angular.module('operations').factory('OperationSvc', function ($http, ApiConfig) {
  return {
    operations: function () {
      return $http.get(ApiConfig.BASE_API + '/operations/upcoming').then(function (response) {
        return response.data;
      });
    },
    operation: function (id) {
      return $http.get(ApiConfig.BASE_API + '/operations/' + id).then(function (response) {
        return response.data;
      });
    },
    update: function (id, data) {
      return $http.patch(ApiConfig.BASE_API + '/operations/' + id, {
        operation: data
      }).then(function (response) {
        return response.data;
      });
    },
  };
});
