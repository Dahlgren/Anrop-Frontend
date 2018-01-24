angular.module('bbcode').directive('bbcode', ['snippets', function (snippets) {
  return {
    'restrict': 'A',
    'link': function ($scope, $element, $attrs) {
      $scope.$watch(function () {
        var contents = $element.html().replace(/^\s+|\s+$/i, '')

        for (var i in snippets) {
          var regexp = new RegExp('\\[' + i + '\\](.+?)\\[/' + i.replace(/[^a-z]/g, '') + '\\]', 'gi')

          contents = contents.replace(regexp, snippets[i])
        }

        $element.html(contents)
      })
    }
  }
}])
