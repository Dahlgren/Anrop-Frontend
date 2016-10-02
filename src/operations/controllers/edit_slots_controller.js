angular.module('operations').controller('EditSlotsCtrl', function ($scope, $uibModal, SlotsSvc) {
  var groupId = $scope.group.id;
  $scope.title = "";
  $scope.slots = [];

  $scope.addSlot = function () {
    SlotsSvc.add($scope.operationId, groupId, {title: $scope.title}).success(function (slot) {
      $scope.slots.push(slot);
      $scope.form = {};
    });
  };

  $scope.assignSlot = function (slot, user) {
    SlotsSvc.update($scope.operationId, groupId, slot.id, {user_id: user.id}).success(function (slot) {
      loadSlots();
    });
  };

  $scope.emptySlot = function (slot, user) {
    SlotsSvc.update($scope.operationId, groupId, slot.id, {user_id: null}).success(function (slot) {
      loadSlots();
    });
  };

  $scope.copySlot = function (slot) {
    SlotsSvc.add($scope.operationId, groupId, {title: slot.title}).success(function (slot) {
      $scope.slots.push(slot);
      $scope.title = "";
    });
  };

  $scope.deleteSlot = function (slot) {
    SlotsSvc.delete($scope.operationId, groupId, slot.id).success(function () {
      var index = $scope.slots.indexOf(slot);
      $scope.slots.splice(index, 1);
    });
  };

  $scope.updateSlot = function (slot) {
    SlotsSvc.update($scope.operationId, groupId, slot.id, slot).success(function () {

    });
  };

  $scope.slotsSortableOptions = {
    stop: function(e, ui) {
      var positions = $scope.slots.map(function(slot, index){
        return {
          id: slot.id,
          index: index,
        };
      });
      SlotsSvc.order($scope.operationId, groupId, positions).success(function () {
      });
    }
  };

  $scope.search = function (slot) {
    $uibModal.open({
      template: require('../templates/user_search.html'),
      controller: 'UserSearchCtrl',
      scope: $scope,
      resolve: {
        slot: function () {
          return slot;
        }
      }
    }).result.then(function (data) {
      $scope.assignSlot(data.slot, data.user);
    }, function () {

    });
  };

  var loadSlots = function () {
    SlotsSvc.slots($scope.operationId, groupId).success(function (slots) {
      $scope.slots = slots;
    });
  };

  loadSlots();
});
