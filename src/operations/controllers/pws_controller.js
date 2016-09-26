angular.module('operations').controller('PwsCtrl', function ($scope, PwsSvc) {
  var loadAddons = function () {
    PwsSvc.addons($scope.operationId).success(function (addons) {
      $scope.addons = addons;
    });
  };

  loadAddons();
});
