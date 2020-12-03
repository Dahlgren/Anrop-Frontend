angular.module('operations').controller('OperationsCtrl', function ($scope, OperationSvc) {
  $scope.showAll = function () {
    $scope.operations = allOperations
    $scope.showAllButton = false
  }

  const showInitialOperations = function () {
    const initialOperations = 5
    $scope.operations = allOperations.slice(0, initialOperations - 1)
    $scope.showAllButton = allOperations.length > initialOperations
  }

  const loadOperations = function () {
    OperationSvc.upcomingOperations().then(function (operations) {
      allOperations = operations
      showInitialOperations()
    })
  }

  let allOperations = OperationSvc.cachedUpcomingOperations() || []
  showInitialOperations()

  loadOperations()
})
