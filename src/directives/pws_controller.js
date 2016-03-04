angular.module('app').directive('pwsController', function () {
  return {
    controller: 'PwsCtrl',
    template: require('../templates/pws_controller.html'),
  };
});
