require('../module').directive('shoutsController', function () {
  return {
    controller: 'ShoutsController',
    template: require('../templates/shouts_controller.html')
  }
})
