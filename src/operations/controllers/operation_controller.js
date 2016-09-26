angular.module('operations').controller('OperationCtrl', function ($scope, OperationSvc) {
  var loadOperation = function () {
    OperationSvc.operation($scope.operationId).success(function (operation) {
      operation.datetime = new Date(operation.datetime);
      $scope.operation = operation;
    });
  };

  loadOperation();
});
