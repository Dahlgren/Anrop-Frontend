angular.module('operations').controller('OperationCtrl', function ($scope, OperationSvc) {
  const loadOperation = function () {
    OperationSvc.operation($scope.operationId).then(function (operation) {
      operation.start = new Date(operation.start)
      $scope.operation = operation
    })
  }

  loadOperation()
})
