angular.module('operations').controller('GroupsCtrl', function ($scope, GroupsSvc) {
  var loadGroups = function () {
    GroupsSvc.groups($scope.operationId).then(function (groups) {
      $scope.groups = groups;
    });
  };

  loadGroups();
});
