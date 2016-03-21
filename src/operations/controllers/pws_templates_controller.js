var angular = require('angular');

angular.module('operations').controller('PwsTemplatesCtrl', function ($scope, $uibModalInstance, PwsSvc) {
  $scope.addCollection = function (collection) {
    collection.mods.map(function (name) {
      $scope.add({
        name: name,
      });
    });
  };

  PwsSvc.templates().success(function (collections) {
    $scope.collections = collections;
  });

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
