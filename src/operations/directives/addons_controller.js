angular.module('operations').directive('addonsController', function () {
  return {
    controller: 'AddonsCtrl',
    template: require('../templates/addons_controller.html'),
  };
});
