angular.module('login').factory('LoginSvc', function ($http, ApiConfig) {
  return {
    login: function (username, password) {
      return $http.post(ApiConfig.BASE_API + '/sessions', {
        username: username,
        password: password
      }).then(function (response) {
        return response.data
      })
    }
  }
})
