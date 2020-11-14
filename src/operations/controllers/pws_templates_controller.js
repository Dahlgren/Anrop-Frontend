angular.module('operations').controller('PwsTemplatesCtrl', function ($scope, $uibModalInstance, ApiConfig, PwsSvc) {
  $scope.addCollection = function (collection) {
    collection.mods.forEach(function (name) {
      $scope.add({
        name: name
      })
    })
  }

  PwsSvc.templates().then(function (collections) {
    $scope.collections = collections
  })

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel')
  }
})
