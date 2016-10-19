angular.module('operations').controller('AddonsCtrl', function ($scope, AddonsSvc) {
  var loadAddons = function () {
    AddonsSvc.addons($scope.operationId).success(function (addons) {
      $scope.addons = addons;
    });
  };

  loadAddons();
});
