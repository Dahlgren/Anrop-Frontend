var angular = require('angular');
var imgurKey = 'Client-ID c068f0d04c394eb';

angular.module('app').controller('EditOperationCtrl', function ($scope, operationId, OperationSvc, Upload, imgur) {
  imgur.setAPIKey(imgurKey);

  $scope.$watch('file', function () {
    if ($scope.file) {
      $scope.uploadImage($scope.file);
    }
  });

  $scope.uploadImage = function (file) {
    imgur.upload(file).then(function then(model) {
      $scope.operation.image = model.link.replace("http://", "https://");
    });
  };

  $scope.save = function () {
    $scope.alerts = [];
    OperationSvc.update(operationId, $scope.operation).success(function (operation) {
      operation.datetime = new Date(operation.datetime);
      $scope.operation = operation;
      $scope.alerts = [
        { type: 'success', msg: 'Operationen har sparats.' }
      ];
    });
  };

  var loadOperation = function () {
    OperationSvc.operation(operationId).success(function (operation) {
      operation.datetime = new Date(operation.datetime);
      $scope.operation = operation;
    });
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  loadOperation();
});
