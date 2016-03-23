require('../module').factory('ShoutsService', function ($http) {
  return {
    shouts: function () {
      return $http.get('/api/shoutbox/');
    },
    create: function (message) {
      return $http.post('/api/shoutbox/shout/', {
        message: message
      });
    },
  };
});
