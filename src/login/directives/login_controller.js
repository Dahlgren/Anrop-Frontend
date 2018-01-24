angular.module('login').directive('loginController', function () {
  return {
    controller: 'LoginCtrl',
    template: require('../templates/login_controller.html')
  }
})
