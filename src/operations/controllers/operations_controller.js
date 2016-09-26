angular.module('operations').controller('OperationsCtrl', function ($scope, OperationSvc) {
  var loadOperations = function () {
    OperationSvc.operations().success(function (operations) {
      $scope.operations = operations;
    });
  };

  loadOperations();
});
