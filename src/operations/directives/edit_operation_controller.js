angular.module('operations').directive('editOperationController', function () {
  return {
    controller: 'EditOperationCtrl',
    scope: {
      operationId: '='
    },
    template: require('../templates/edit_operation_controller.html')
  }
})
