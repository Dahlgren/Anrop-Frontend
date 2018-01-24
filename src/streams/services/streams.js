require('../module').factory('StreamsService', function ($http, ApiConfig) {
  return {
    streams: function () {
      return $http.get(ApiConfig.BASE_STREAMS_API).then(function (response) {
        return response.data
      })
    }
  }
})
