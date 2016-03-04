var angular = require('angular');

angular.module('app').controller('OperationsCtrl', function ($scope, OperationSvc) {
  var loadOperations = function () {
    OperationSvc.operations().success(function (operations) {
      $scope.operations = operations;
    });
  };

  loadOperations();
});
