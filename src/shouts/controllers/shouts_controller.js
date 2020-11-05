require('../module').controller('ShoutsController', function ($scope, ShoutsService) {
  $scope.form = {}

  $scope.create = function () {
    ShoutsService.create($scope.form.message).then(function () {
      loadShouts()
      $scope.form = {}
    })
  }

  const loadShouts = function () {
    ShoutsService.shouts().then(function (addons) {
      $scope.shouts = addons
    })
  }

  loadShouts()
})
