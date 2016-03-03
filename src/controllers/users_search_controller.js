var angular = require('angular');

angular.module('app').controller('UserSearchCtrl', function ($scope, $uibModalInstance, UserSearchSvc, slot) {
  $scope.slot = slot;
  $scope.query = "";

  $scope.assignUser = function (user) {
    $modalInstance.close({slot: $scope.slot, user: user});
  };

  $scope.search = function (query) {
    $scope.users = [];
    UserSearchSvc.search(query).success(function (users) {
      $scope.users = users;
    });
  };

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
