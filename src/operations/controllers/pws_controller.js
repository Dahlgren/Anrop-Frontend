angular.module('operations').controller('PwsCtrl', function ($scope, ApiConfig, PwsSvc) {
  var loadAddons = function () {
    PwsSvc.addons($scope.operationId).then(function (addons) {
      $scope.addons = addons
    })
  }

  $scope.modUrl = function (name) {
    return ApiConfig.BASE_PWS_API + '/redirect?name=' + name
  }

  loadAddons()
})
