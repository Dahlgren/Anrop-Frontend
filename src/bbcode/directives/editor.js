require('wysibb/jquery.wysibb.js');
//require('wysibb/theme/default/wbbtheme.css');

angular.module('bbcode').directive("bbeditor", function() {
  return {
    restrict: "A",
    scope: {
      ngModel: "="
    },
    link: function($scope, $element, $attrs) {
      $($element).wysibb();
    }
  };
});
