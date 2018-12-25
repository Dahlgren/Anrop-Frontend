angular.module('operations').controller('SteamWorkshopSearchCtrl', function ($q, $scope, $uibModalInstance, SteamWorkshopSvc) {
  $scope.query = ''
  $scope.loading = false
  $scope.mods = []
  $scope.showAddAll = false

  var fetchCollection = function (id) {
    return SteamWorkshopSvc.collection(id)
      .catch(function () {
        return []
      })
  }

  $scope.addAll = function () {
    $scope.mods.forEach(function (mod) {
      $scope.add(mod)
    })
  }

  $scope.search = function (query) {
    $scope.mods = []
    $scope.loading = true
    $scope.showAddAll = false

    if (query.match(/^\d+$/)) {
      return $q.all({
        collection: fetchCollection(query),
        item: SteamWorkshopSvc.info(query)
      }).then(function (result) {
        var collection = result.collection
        var item = result.item

        $scope.loading = false

        if (collection.length > 0) {
          $scope.mods = collection
          $scope.showAddAll = true
        } else {
          $scope.mods = [item]
        }
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
