var angular = require('angular');

angular.module('operations').controller('EditAddonsCtrl', function ($scope, AddonsSvc) {
  $scope.form = {};

  $scope.add = function () {
    AddonsSvc.add($scope.operationId, $scope.form).success(function () {
      loadAddons();
      $scope.form = {};
    });
  };

  $scope.delete = function (addon) {
    AddonsSvc.delete($scope.operationId, addon.id).success(function () {
      loadAddons();
    });
  };

  var loadAddons = function () {
    AddonsSvc.addons($scope.operationId).success(function (addons) {
      $scope.addons = addons;
    });
  };

  loadAddons();
});
