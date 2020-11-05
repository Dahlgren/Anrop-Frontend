angular.module('operations').controller('AddonsCtrl', function ($scope, AddonsSvc) {
  const loadAddons = function () {
    AddonsSvc.addons($scope.operationId).then(function (addons) {
      $scope.addons = addons
    })
  }

  loadAddons()
})
