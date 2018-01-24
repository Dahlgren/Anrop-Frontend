angular.module('operations').factory('OperationSvc', function ($window, $http, ApiConfig) {
  return {
    cachedUpcomingOperations: function () {
      try {
        return JSON.parse($window.localStorage.upcomingOperations)
      } catch (e) {}

      return null
    },
    upcomingOperations: function () {
      return $http.get(ApiConfig.BASE_API + '/operations/upcoming').then(function (response) {
        $window.localStorage.upcomingOperations = JSON.stringify(response.data)
        return response.data
      })
    },
    operation: function (id) {
      return $http.get(ApiConfig.BASE_API + '/operations/' + id).then(function (response) {
        return response.data
      })
    },
    update: function (id, data) {
      return $http.patch(ApiConfig.BASE_API + '/operations/' + id, {
        operation: data
      }).then(function (response) {
        return response.data
      })
    }
  }
})
