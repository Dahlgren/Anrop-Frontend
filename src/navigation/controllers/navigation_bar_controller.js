var angular = require('angular');

angular.module('navigation').controller('NavigationBarCtrl', function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return $location.path().startsWith(viewLocation);
  };
});
