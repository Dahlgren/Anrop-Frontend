angular.module('operations').directive('pwsController', function () {
  return {
    controller: 'PwsCtrl',
    template: require('../templates/pws_controller.html'),
  };
});
