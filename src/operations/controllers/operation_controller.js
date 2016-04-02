angular.module('operations').controller('OperationCtrl', function ($scope, operationId, OperationSvc) {
  $scope.operationId = operationId;

  var loadOperation = function () {
    OperationSvc.operation(operationId).success(function (operation) {
      operation.datetime = new Date(operation.datetime);
      $scope.operation = operation;
    });
  };

  loadOperation();
});
