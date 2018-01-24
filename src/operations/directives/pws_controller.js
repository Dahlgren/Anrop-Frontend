angular.module('operations').directive('pwsController', function () {
  return {
    controller: 'PwsCtrl',
    scope: {
      operationId: '='
    },
    template: require('../templates/pws_controller.html')
  }
})
