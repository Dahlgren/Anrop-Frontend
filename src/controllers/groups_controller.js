var angular = require('angular');

angular.module('app').controller('GroupsCtrl', function ($scope, GroupsSvc) {
  $scope.title = "";

  $scope.addGroup = function () {
    GroupsSvc.add($scope.operationId, {title: $scope.title}).success(function (group) {
      $scope.groups.push(group);
      $scope.title = "";
    });
  };

  $scope.copyGroup = function (group) {
    GroupsSvc.copy($scope.operationId, group.id).success(function (group) {
      $scope.groups.push(group);
    });
  };

  $scope.deleteGroup = function (group) {
    GroupsSvc.delete($scope.operationId, group.id).success(function () {
      var index = $scope.groups.indexOf(group);
      $scope.groups.splice(index, 1);
    });
  };

  $scope.updateGroup = function (group) {
    GroupsSvc.update($scope.operationId, group.id, group).success(function () {

    });
  };

  $scope.groupsSortableOptions = {
    stop: function(e, ui) {
      var positions = $scope.groups.map(function(group, index){
        return {
          id: group.id,
          index: index,
        };
      });
      GroupsSvc.order($scope.operationId, positions).success(function () {
      });
    }
  };

  var loadGroups = function () {
    GroupsSvc.groups($scope.operationId).success(function (groups) {
      $scope.groups = groups;
    });
  };

  loadGroups();
});
