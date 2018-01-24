angular.module('operations').directive('slotsController', function () {
  return {
    controller: 'SlotsCtrl',
    template: require('../templates/slots_controller.html')
  }
})
