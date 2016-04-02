angular.module('operations').directive('editAddonsController', function () {
  return {
    controller: 'EditAddonsCtrl',
    template: require('../templates/edit_addons_controller.html'),
  };
});
