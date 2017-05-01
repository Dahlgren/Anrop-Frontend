angular.module('operations').controller('EditSlotsCtrl', function ($scope, $uibModal, SlotsSvc) {
  var groupId = $scope.group.id;
  $scope.form = {
    name: "",
  };
  $scope.slots = [];

  $scope.addSlot = function () {
    SlotsSvc.add($scope.operationId, groupId, {
      name: $scope.form.name,
      order: $scope.slots.length,
    }).then(function (slot) {
      $scope.slots.push(slot);
      $scope.form = {};
    });
  };

  $scope.assignSlot = function (slot, user) {
    SlotsSvc.update($scope.operationId, groupId, slot.id, {user_id: user.id}).then(function (slot) {
      loadSlots();
    });
  };

  $scope.emptySlot = function (slot, user) {
    SlotsSvc.update($scope.operationId, groupId, slot.id, {user_id: null}).then(function (slot) {
      loadSlots();
    });
  };

  $scope.copySlot = function (slot) {
    SlotsSvc.add($scope.operationId, groupId, {name: slot.name}).then(function (slot) {
      $scope.slots.push(slot);
      $scope.title = "";
    });
  };

  $scope.deleteSlot = function (slot) {
    SlotsSvc.delete($scope.operationId, groupId, slot.id).then(function () {
      var index = $scope.slots.indexOf(slot);
      $scope.slots.splice(index, 1);
    });
  };

  $scope.updateSlot = function (slot) {
    SlotsSvc.update($scope.operationId, groupId, slot.id, slot).then(function () {

    });
  };

  $scope.slotsSortableOptions = {
    stop: function(e, ui) {
      $scope.slots.map(function(slot, index){
        return SlotsSvc.update($scope.operationId, groupId, slot.id, {order: index});
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
    SlotsSvc.slots($scope.operationId, groupId).then(function (slots) {
      $scope.slots = slots;
    });
  };

  loadSlots();
});
