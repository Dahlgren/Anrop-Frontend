angular.module('operations').controller('PwsTemplatesCtrl', function ($scope, $uibModalInstance, ApiConfig, PwsSvc) {
  $scope.addCollection = function (collection) {
    collection.mods.map(function (name) {
      $scope.add({
        name: name
      })
    })
  }

  $scope.modUrl = function (name) {
    return ApiConfig.BASE_PWS_API + '/redirect?name=' + name
  }

  PwsSvc.templates().then(function (collections) {
    $scope.collections = collections
  })

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel')
  }
})
