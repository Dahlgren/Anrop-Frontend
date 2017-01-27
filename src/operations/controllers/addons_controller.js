angular.module('operations').controller('AddonsCtrl', function ($scope, AddonsSvc) {
  var loadAddons = function () {
    AddonsSvc.addons($scope.operationId).then(function (addons) {
      $scope.addons = addons;
    });
  };

  loadAddons();
});
