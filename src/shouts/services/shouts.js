require('../module').factory('ShoutsService', function ($http, ApiConfig) {
  return {
    shouts: function () {
      return $http.get(ApiConfig.BASE_API + '/shouts').then(function (response) {
        return response.data;
      });
    },
    create: function (message) {
      return $http.post(ApiConfig.BASE_API + '/shouts', {
        message: message
      }).then(function (response) {
        return response.data;
      });
    },
  };
});
