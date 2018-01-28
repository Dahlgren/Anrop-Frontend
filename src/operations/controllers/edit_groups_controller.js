angular.module('operations').controller('EditGroupsCtrl', function ($scope, GroupsSvc) {
  $scope.form = {
    name: ''
  }

  $scope.addGroup = function () {
    GroupsSvc.add($scope.operationId, $scope.form).then(function (group) {
      $scope.groups.push(group)
      $scope.name = ''
    })
  }

  $scope.copyGroup = function (group) {
    GroupsSvc.copy($scope.operationId, group.id).then(function (group) {
      $scope.groups.push(group)
    })
  }

  $scope.deleteGroup = function (group) {
    GroupsSvc.delete($scope.operationId, group.id).then(function () {
      var index = $scope.groups.indexOf(group)
      $scope.groups.splice(index, 1)
    })
  }

  $scope.updateGroup = function (group) {
    GroupsSvc.update($scope.operationId, group.id, group).then(function () {

    })
  }

  $scope.groupsSortableOptions = {
    stop: function (e, ui) {
      $scope.groups.map(function (group, index) {
        group.order = index
        return GroupsSvc.update($scope.operationId, group.id, {order: index})
      })
    }
  }

  var loadGroups = function () {
    GroupsSvc.groups($scope.operationId).then(function (groups) {
      $scope.groups = groups
    })
  }

  loadGroups()
})
