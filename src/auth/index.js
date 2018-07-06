angular.module('auth', [
])
  .factory('AuthenticationTokenManager', function ($window) {
    return {
      set: function (token) {
        $window.localStorage.token = token
      },
      get: function () {
        return $window.localStorage.token
      }
    }
  })
  .factory('AuthenticationInterceptor', function ($q, AuthenticationTokenManager, ApiConfig) {
    return {
      request: function (config) {
        if (config.url.indexOf(ApiConfig.BASE_API) === 0) {
          var token = AuthenticationTokenManager.get()

          if (token) {
            config.headers.Authorization = 'Token token=' + token
          }
        }

        return config
      }
    }
  })
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthenticationInterceptor')
  })

module.exports = 'auth'
