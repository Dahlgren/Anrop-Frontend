angular.module('operations').factory('Arma3SyncSvc', function ($http, ApiConfig) {
  return {
    mods: function () {
      return $http.get(ApiConfig.BASE_ARMA3SYNC_API + '/mods').then(function (response) {
        return response.data
      })
    }
  }
})
