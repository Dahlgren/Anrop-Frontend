require('../module').factory('ShoutsService', function ($http) {
  return {
    shouts: function () {
      return $http.get('/api/shouts');
    },
    create: function (message) {
      return $http.post('/api/shouts', {
        message: message
      });
    },
  };
});
