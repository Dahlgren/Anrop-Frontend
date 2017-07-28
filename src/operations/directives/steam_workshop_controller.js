angular.module('operations').directive('steamWorkshopController', function () {
  return {
    controller: 'SteamWorkshopCtrl',
    scope: {
      operationId: '='
    },
    template: require('../templates/steam_workshop_controller.html')
  }
})
