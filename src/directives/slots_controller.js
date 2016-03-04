angular.module('app').directive('slotsController', function () {
  return {
    controller: 'SlotsCtrl',
    template: require('../templates/slots_controller.html'),
  };
});
