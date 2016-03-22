require('../module').directive('shout', function () {
  return {
    restrict: 'E',
    scope: {
      shout: '='
    },
    template: require('../templates/shout.html'),
    link: function (scope, element) {
      element.addClass('shout');
    }
  };
})
