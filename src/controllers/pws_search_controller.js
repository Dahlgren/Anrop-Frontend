var angular = require('angular');

angular.module('app').controller('PwsSearchCtrl', function ($scope, $uibModalInstance, PwsSvc) {
  $scope.query = "";

  $scope.search = function (query) {
    $scope.mods = [];
    PwsSvc.search(query).success(function (mods) {
      $scope.mods = mods;
    });
  };

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
