angular.module('operations').directive('editGroupsController', function () {
  return {
    controller: 'EditGroupsCtrl',
    scope: {
      operationId: '='
    },
    template: require('../templates/edit_groups_controller.html')
  }
})
