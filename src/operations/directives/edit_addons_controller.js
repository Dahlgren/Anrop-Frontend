angular.module('operations').directive('editAddonsController', function () {
  return {
    controller: 'EditAddonsCtrl',
    scope: {
      operationId: '='
    },
    template: require('../templates/edit_addons_controller.html')
  }
})
