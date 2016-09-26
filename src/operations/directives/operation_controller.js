angular.module('operations').directive('operationController', function () {
  return {
    controller: 'OperationCtrl',
    scope: {
      operationId: '=',
    },
    template: require('../templates/operation_controller.html'),
  };
});
