var angular = require('angular');

angular.module('operations').controller('SlotsCtrl', function ($scope, SlotsSvc) {
  var loadSlots = function () {
    SlotsSvc.slots($scope.operationId, $scope.group.id).success(function (slots) {
      $scope.slots = slots;
    });
  };

  loadSlots();
});
