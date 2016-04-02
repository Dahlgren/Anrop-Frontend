angular.module('operations').directive('editGroupsController', function () {
  return {
    controller: 'EditGroupsCtrl',
    template: require('../templates/edit_groups_controller.html'),
  };
});
