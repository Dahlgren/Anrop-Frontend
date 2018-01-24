angular.module('bbcode').directive('nl2br', [function () {
  return {
    'restrict': 'A',
    'link': function ($scope, $element, $attrs) {
      $scope.$watch(function () {
        var contents = $element.html().replace(/^\s+|\s+$/i, '')

        contents = contents.replace(/(?:\r\n|\n|\r)/gi, '<br>')

        $element.html(contents)
      })
    }
  }
}])
