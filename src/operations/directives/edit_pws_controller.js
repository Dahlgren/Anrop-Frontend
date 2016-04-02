angular.module('operations').directive('editPwsController', function () {
  return {
    controller: 'EditPwsCtrl',
    template: require('../templates/edit_pws_controller.html'),
  };
});
