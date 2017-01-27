angular.module('operations').controller('OperationsCtrl', function ($scope, OperationSvc) {
  var loadOperations = function () {
    OperationSvc.operations().then(function (operations) {
      $scope.operations = operations;
    });
  };

  loadOperations();
});
