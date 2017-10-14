angular.module('operations').controller('Arma3SyncCtrl', function ($scope, Arma3SyncSvc) {
  $scope.mods = [];

  var loadMods = function () {
    Arma3SyncSvc.mods($scope.operationId).then(function (mods) {
      $scope.mods = mods;
    });
  };

  loadMods();
});
