angular.module('operations').controller('PwsSearchCtrl', function ($scope, $uibModalInstance, ApiConfig, PwsSvc) {
  $scope.query = ''
  $scope.mods = []

  $scope.modUrl = function (name) {
    return ApiConfig.BASE_PWS_API + '/redirect?name=' + name
  }

  $scope.search = function (query) {
    $scope.mods = []
    PwsSvc.search(query).then(function (mods) {
      $scope.mods = mods
    })
  }

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel')
  }
})
