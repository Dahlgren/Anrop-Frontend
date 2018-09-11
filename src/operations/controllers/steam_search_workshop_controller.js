angular.module('operations').controller('SteamWorkshopSearchCtrl', function ($scope, $uibModalInstance, SteamWorkshopSvc) {
  $scope.query = ''
  $scope.loading = false
  $scope.mods = []

  $scope.search = function (query) {
    $scope.mods = []
    $scope.loading = true

    if (query.match(/\d+/)) {
      return SteamWorkshopSvc.info(query).then(function (mod) {
        $scope.loading = false
        $scope.mods = [mod]
      })
    }

    SteamWorkshopSvc.search(query).then(function (mods) {
      $scope.loading = false
      $scope.mods = mods
    })
  }

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel')
  }
})
