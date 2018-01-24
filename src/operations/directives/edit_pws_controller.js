angular.module('operations').directive('editPwsController', function () {
  return {
    controller: 'EditPwsCtrl',
    scope: {
      operationId: '='
    },
    template: require('../templates/edit_pws_controller.html')
  }
})
