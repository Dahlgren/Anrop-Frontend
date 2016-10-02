angular.module('auth', [
])
.factory('AuthorizationTokenManager', function($window) {
  return {
    set: function (token) {
      $window.sessionStorage.token = token;
    },
    get: function () {
      return $window.sessionStorage.token;
    },
  };
})
.factory('AuthorizationInterceptor', function($q, AuthorizationTokenManager, ApiConfig) {
  return {
    request: function(config) {
      if (config.url.indexOf(ApiConfig.BASE_API) == 0) {
        var token = AuthorizationTokenManager.get();

        if (token) {
          config.headers.Authorization = 'Token token=' + token;
        }
      }

      return config;
    }
  };
})
.config(function($httpProvider) {
  $httpProvider.interceptors.push('AuthorizationInterceptor');
});

module.exports = 'auth';
