angular.module('operations').factory('UserSearchSvc', function ($http, ApiConfig) {
  return {
    search: function (query) {
      return $http.get(ApiConfig.BASE_API + '/users/search?q=' + query).then(function (response) {
        return response.data;
      });
    },
  };
});
