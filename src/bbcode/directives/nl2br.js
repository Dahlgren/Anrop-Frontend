angular.module('bbcode').directive('nl2br', [function () {
  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      $scope.$watch(function () {
        const contents = $element.html()
          .replace(/^\s+|\s+$/i, '')
          .replace(/(?:\r\n|\n|\r)/gi, '<br>')
        $element.html(contents)
      })
    }
  }
}])
