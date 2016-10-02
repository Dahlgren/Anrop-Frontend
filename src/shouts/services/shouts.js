require('../module').factory('ShoutsService', function ($http, ApiConfig) {
  return {
    shouts: function () {
      return $http.get(ApiConfig.BASE_API + '/shouts');
    },
    create: function (message) {
      return $http.post(ApiConfig.BASE_API + '/shouts', {
        message: message
      });
    },
  };
});
