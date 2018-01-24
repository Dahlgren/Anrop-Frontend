angular.module('operations').directive('operationsController', function () {
  return {
    controller: 'OperationsCtrl',
    template: require('../templates/operations_controller.html')
  }
})
