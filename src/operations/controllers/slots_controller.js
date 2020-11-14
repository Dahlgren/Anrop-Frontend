angular.module('operations').controller('SlotsCtrl', function ($scope, SlotsSvc) {
  const loadSlots = function () {
    SlotsSvc.slots($scope.operationId, $scope.group.id).then(function (slots) {
      $scope.slots = slots
    })
  }

  loadSlots()
})
