var module = require('../module');

module.controller('StreamsController', function ($scope, $interval, StreamsService) {
  var loadStreams = function () {
    $scope.loading = true;
    StreamsService.streams()
      .then(function (streams) {
        $scope.streams = streams;
        $scope.loading = false;
      })
      .catch(function (error) {
        $scope.streams = [];
        $scope.loading = false;
      })
  };

  loadStreams();
  var updateInterval = $interval(loadStreams, 60 * 1000);

  $scope.$on('$destroy', function() {
    if (angular.isDefined(stop)) {
      $interval.cancel(updateInterval);
    }
  });
});
