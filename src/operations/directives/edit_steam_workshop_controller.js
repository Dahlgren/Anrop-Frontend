angular.module('operations').directive('editSteamWorkshopController', function () {
  return {
    controller: 'EditSteamWorkshopCtrl',
    scope: {
      operationId: '='
    },
    template: require('../templates/edit_steam_workshop_controller.html')
  }
})
