var angular = require('angular');

angular.module('app').controller('AddonsCtrl', function ($scope, operationId, AddonsSvc) {
  $scope.form = {};

  $scope.add = function () {
    AddonsSvc.add(operationId, $scope.form).success(function () {
      loadAddons();
      $scope.form = {};
    });
  };

  $scope.delete = function (addon) {
    AddonsSvc.delete(operationId, addon.id).success(function () {
      loadAddons();
    });
  };

  var loadAddons = function () {
    AddonsSvc.addons(operationId).success(function (addons) {
      $scope.addons = addons;
    });
  };

  loadAddons();
});
