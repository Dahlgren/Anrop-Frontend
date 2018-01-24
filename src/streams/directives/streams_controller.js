require('../module').directive('streamsController', function () {
  return {
    controller: 'StreamsController',
    template: require('../templates/streams_controller.html')
  }
})
