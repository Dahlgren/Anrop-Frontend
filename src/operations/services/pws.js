var angular = require('angular');

angular.module('operations').factory('PwsSvc', function ($http) {
  return {
    add: function (operationId, data) {
      return $http.post('/api/operations/' + operationId + '/play_with_six', data);
    },
    addons: function (operationId) {
      return $http.get('/api/operations/' + operationId + '/play_with_six');
    },
    delete: function (operationId, id) {
      return $http.delete('/api/operations/' + operationId + '/play_with_six/' + id);
    },
    search: function (query) {
      return $http.get('/api/pws/search?query=' + query);
    },
    templates: function () {
      return $http.get('/api/pws/templates');
    },
  };
});
