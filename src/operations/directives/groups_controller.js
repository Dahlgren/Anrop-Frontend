angular.module('operations').directive('groupsController', function () {
  return {
    controller: 'GroupsCtrl',
    scope: {
      operationId: '='
    },
    template: require('../templates/groups_controller.html')
  }
})
