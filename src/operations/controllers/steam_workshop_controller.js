angular.module('operations').controller('SteamWorkshopCtrl', function ($scope, $uibModal, ApiConfig, SteamWorkshopSvc) {
  var loadMods = function () {
    SteamWorkshopSvc.mods($scope.operationId).then(function (mods) {
      mods.forEach(function (mod) {
        SteamWorkshopSvc.info(mod.steam_workshop_id).then(function (info) {
          Object.assign(mod, {
            link: info.link,
            title: info.title
          })
        })
      })
      $scope.mods = mods
    })
  }

  $scope.presetUrl = ApiConfig.BASE_STEAM_WORKSHOP_API + '/preset/' + $scope.operationId

  loadMods()
})
