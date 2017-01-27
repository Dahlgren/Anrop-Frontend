angular.module('operations').controller('EditAddonsCtrl', function ($scope, AddonsSvc) {
  $scope.form = {};

  $scope.add = function () {
    AddonsSvc.add($scope.operationId, $scope.form).then(function () {
      loadAddons();
      $scope.form = {};
    });
  };

  $scope.delete = function (addon) {
    AddonsSvc.delete($scope.operationId, addon.id).then(function () {
      loadAddons();
    });
  };

  var loadAddons = function () {
    AddonsSvc.addons($scope.operationId).then(function (addons) {
      $scope.addons = addons;
    });
  };

  loadAddons();
});
