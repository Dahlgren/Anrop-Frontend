angular.module('app').directive('operationsController', function () {
  return {
    controller: 'OperationsCtrl',
    template: require('../templates/operations_controller.html'),
  };
});
