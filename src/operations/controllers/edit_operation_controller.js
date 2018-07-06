angular.module('operations').controller('EditOperationCtrl', function ($scope, OperationSvc, Upload, ImgurConfig) {
  $scope.$watch('file', function () {
    if ($scope.file) {
      $scope.uploadImage($scope.file)
    }
  })

  $scope.uploadImage = function (file) {
    Upload.upload({
      url: 'https://api.imgur.com/3/image',
      data: {
        image: file
      },
      headers: {
        Authorization: ImgurConfig.API_KEY
      }
    }).then(function (response) {
      $scope.operation.image = response.data.data.link
    })
  }

  $scope.save = function () {
    $scope.alerts = []
    OperationSvc.update($scope.operationId, $scope.operation).then(function (operation) {
      operation.start = new Date(operation.start)
      $scope.operation = operation
      $scope.alerts = [
        { type: 'then', msg: 'Operationen har sparats.' }
      ]
    })
  }

  var loadOperation = function () {
    OperationSvc.operation($scope.operationId).then(function (operation) {
      operation.start = new Date(operation.start)
      $scope.operation = operation
    })
  }

  $scope.closeAlert = function (index) {
    $scope.alerts.splice(index, 1)
  }

  loadOperation()
})
