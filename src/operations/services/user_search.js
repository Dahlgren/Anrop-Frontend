angular.module('operations').factory('UserSearchSvc', function ($http) {
  return {
    search: function (query) {
      return $http.get('/api/users/search?user_name=' + query);
    },
  };
});
