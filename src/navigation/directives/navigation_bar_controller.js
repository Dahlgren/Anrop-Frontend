angular.module('navigation').directive('navigationBarController', function () {
  return {
    controller: 'NavigationBarCtrl',
    template: require('../templates/navigation_bar_controller.html')
  }
})
