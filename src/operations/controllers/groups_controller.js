angular.module('operations').controller('GroupsCtrl', function ($scope, GroupsSvc) {
  var loadGroups = function () {
    GroupsSvc.groups($scope.operationId).success(function (groups) {
      $scope.groups = groups;
    });
  };

  loadGroups();
});
