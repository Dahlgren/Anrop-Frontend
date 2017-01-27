var imgurKey = 'Client-ID c068f0d04c394eb';

angular.module('operations').controller('EditOperationCtrl', function ($scope, OperationSvc, Upload, imgur) {
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
    OperationSvc.update($scope.operationId, $scope.operation).then(function (operation) {
      operation.start = new Date(operation.start);
      $scope.operation = operation;
      $scope.alerts = [
        { type: 'then', msg: 'Operationen har sparats.' }
      ];
    });
  };

  var loadOperation = function () {
    OperationSvc.operation($scope.operationId).then(function (operation) {
      operation.start = new Date(operation.start);
      $scope.operation = operation;
    });
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  loadOperation();
});
