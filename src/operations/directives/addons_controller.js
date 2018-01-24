angular.module('operations').directive('addonsController', function () {
  return {
    controller: 'AddonsCtrl',
    scope: {
      operationId: '='
    },
    template: require('../templates/addons_controller.html')
  }
})
