angular.module('operations').factory('AddonsSvc', function ($http, ApiConfig) {
  return {
    add: function (operationId, data) {
      return $http.post(ApiConfig.BASE_API + '/operations/' + operationId + '/addons', {
        addon: data
      }).then(function (response) {
        return response.data
      })
    },
    addons: function (operationId) {
      return $http.get(ApiConfig.BASE_API + '/operations/' + operationId + '/addons').then(function (response) {
        return response.data
      })
    },
    delete: function (operationId, id) {
      return $http.delete(ApiConfig.BASE_API + '/operations/' + operationId + '/addons/' + id).then(function (response) {
        return response.data
      })
    }
  }
})
