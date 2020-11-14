angular.module('operations').controller('PwsCtrl', function ($scope, ApiConfig, PwsSvc) {
  const loadAddons = function () {
    PwsSvc.addons($scope.operationId).then(function (addons) {
      $scope.addons = addons
    })
  }

  loadAddons()
})
