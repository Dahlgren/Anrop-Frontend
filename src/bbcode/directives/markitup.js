const markItUp = require('markitup')

angular.module('bbcode').directive('markitup', function () {
  return {
    restrict: 'A',
    scope: {
      settings: '=markitup'
    },
    link: function (scope, element, attrs) {
      markItUp(angular.element(element).get(0), scope.settings)
    }
  }
})
