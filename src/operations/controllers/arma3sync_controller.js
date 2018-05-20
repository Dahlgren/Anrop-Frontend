angular.module('operations').controller('Arma3SyncCtrl', function ($scope, $uibModalInstance, Arma3SyncSvc) {
  $scope.filter = {
    name: ''
  }
  $scope.mods = []

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel')
  }

  var loadMods = function () {
    Arma3SyncSvc.mods($scope.operationId).then(function (mods) {
      $scope.mods = mods
    })
  }

  loadMods()
})
