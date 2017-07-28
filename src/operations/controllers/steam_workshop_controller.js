angular.module('operations').controller('SteamWorkshopCtrl', function ($scope, $uibModal, SteamWorkshopSvc) {
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

  loadMods()
})
