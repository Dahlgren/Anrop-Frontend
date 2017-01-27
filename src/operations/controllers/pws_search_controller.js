angular.module('operations').controller('PwsSearchCtrl', function ($scope, $uibModalInstance, PwsSvc) {
  $scope.query = "";

  $scope.search = function (query) {
    $scope.mods = [];
    PwsSvc.search(query).then(function (mods) {
      $scope.mods = mods;
    });
  };

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
