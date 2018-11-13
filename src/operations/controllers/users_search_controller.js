angular.module('operations').controller('UserSearchCtrl', function ($scope, $uibModalInstance, UserSearchSvc, slot) {
  $scope.slot = slot
  $scope.query = ''
  $scope.users = []

  $scope.assignUser = function (user) {
    $uibModalInstance.close({ slot: $scope.slot, user: user })
  }

  $scope.search = function (query) {
    $scope.users = []
    UserSearchSvc.search(query).then(function (users) {
      $scope.users = users
    })
  }

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel')
  }
})
