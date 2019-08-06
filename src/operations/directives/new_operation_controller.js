angular.module('operations').directive('newOperationController', function () {
  return {
    controller: 'NewOperationCtrl',
    template: require('../templates/new_operation_controller.html')
  }
})
