angular.module('operations').controller('OperationsCtrl', function ($scope, OperationSvc) {
  $scope.operations = OperationSvc.cachedUpcomingOperations();

  var loadOperations = function () {
    OperationSvc.upcomingOperations().then(function (operations) {
      $scope.operations = operations;
    });
  };

  loadOperations();
});
