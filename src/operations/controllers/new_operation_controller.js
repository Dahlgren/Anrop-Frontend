angular.module('operations').controller('NewOperationCtrl', function ($scope, $location, OperationSvc, Upload, ImgurConfig) {
  $scope.operation = {
    start: new Date()
  }

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
    OperationSvc.new($scope.operation).then(function (operation) {
      $location.path('/operations/' + operation.id)
    })
  }
})
