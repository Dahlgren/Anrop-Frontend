angular.module('operations').factory('SteamWorkshopSvc', function ($q, $http, ApiConfig) {
  var steamInfoCache = {}

  return {
    add: function (operationId, data) {
      return $http.post(ApiConfig.BASE_API + '/operations/' + operationId + '/steam_workshop', {
        steam_workshop: data
      }).then(function (response) {
        return response.data
      })
    },
    mods: function (operationId) {
      return $http.get(ApiConfig.BASE_API + '/operations/' + operationId + '/steam_workshop').then(function (response) {
        return response.data
      })
    },
    delete: function (operationId, id) {
      return $http.delete(ApiConfig.BASE_API + '/operations/' + operationId + '/steam_workshop/' + id).then(function (response) {
        return response.data
      })
    },
    collection: function (id) {
      return $http.get(ApiConfig.BASE_STEAM_WORKSHOP_API + '/collection/' + id).then(function (response) {
        return response.data
      })
    },
    info: function (id) {
      if (steamInfoCache[id]) {
        var deferred = $q.defer()
        deferred.resolve(steamInfoCache[id])
        return deferred.promise
      }

      return $http.get(ApiConfig.BASE_STEAM_WORKSHOP_API + '/item/' + id).then(function (response) {
        steamInfoCache[id] = response.data
        return response.data
      })
    },
    search: function (query) {
      return $http.get(ApiConfig.BASE_STEAM_WORKSHOP_API + '/search?q=' + query).then(function (response) {
        return response.data
      })
    }
  }
})
