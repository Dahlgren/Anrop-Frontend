require('../module').controller('StreamsController', function ($scope, $interval, StreamsService) {
  const loadStreams = function () {
    $scope.loading = true
    StreamsService.streams()
      .then(function (streams) {
        streams = streams.map(function (stream) {
          stream.stream.image = stream.stream.image + '?timestamp=' + Date.now()
          return stream
        })

        $scope.streams = streams
        $scope.loading = false
      })
      .catch(function (error) {
        console.error(error)
        $scope.streams = []
        $scope.loading = false
      })
  }

  loadStreams()
  const updateInterval = $interval(loadStreams, 60 * 1000)

  $scope.$on('$destroy', function () {
    if (angular.isDefined(updateInterval)) {
      $interval.cancel(updateInterval)
    }
  })
})
