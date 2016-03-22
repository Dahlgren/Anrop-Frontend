var module = require('../module');

module.controller('ShoutsController', function ($scope, ShoutsService) {
  $scope.form = {};

  $scope.create = function () {
    ShoutsService.create($scope.form.message).success(function () {
      loadShouts();
      $scope.form = {};
    });
  };

  var loadShouts = function () {
    ShoutsService.shouts().success(function (addons) {
      $scope.shouts = addons;
    });
  };

  loadShouts();
});
