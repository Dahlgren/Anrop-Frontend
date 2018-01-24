require('../module').directive('stream', function () {
  return {
    restrict: 'E',
    scope: {
      stream: '='
    },
    template: require('../templates/stream.html'),
    link: function (scope, element) {
      element.addClass('stream')
    }
  }
})
