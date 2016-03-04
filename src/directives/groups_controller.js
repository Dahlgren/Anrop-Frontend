angular.module('app').directive('groupsController', function () {
  return {
    controller: 'GroupsCtrl',
    template: require('../templates/groups_controller.html'),
  };
});
