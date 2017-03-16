angular.module('bbcode').service('markitupSettings', function () {
  return function ($scope) {
    return {
      toolbar: [
        {
          name: 'Bold',
          icon: 'bold',
          before: '[b]',
          after: '[/b]',
          afterInsert: function(h) {
            $scope.$apply();
          }
        },
        {
          name: 'Italic',
          icon: 'italic',
          before: '[i]',
          after: '[/i]',
          afterInsert: function(h) {
            $scope.$apply();
          }
        },
        {
          name: 'Underline',
          icon: 'underline',
          before: '[u]',
          after: '[/u]',
          afterInsert: function(h) {
            $scope.$apply();
          }
        },
        {
          name: 'Strikethrough',
          icon: 'strikethrough',
          before: '[s]',
          after: '[/s]',
          afterInsert: function(h) {
            $scope.$apply();
          }
        },
        {
          name: 'Horizontal Line',
          icon: 'horizontalLine',
          before: '[hr]',
          after: '[/hr]',
          afterInsert: function(h) {
            $scope.$apply();
          }
        },
        {
          separator: '---------------'
        },
        {
          name: 'Picture',
          icon: 'picture',
          before: '[img]',
          after: '[/img]',
          afterInsert: function(h) {
            $scope.$apply();
          }
        },
        {
          name: 'Link',
          icon: 'link',
          before: '[url]',
          after: '[/url]',
          placeHolder: 'Your text to link here...',
          afterInsert: function(h) {
            $scope.$apply();
          }
        },
        {
          name: 'YouTube',
          icon: 'youtube',
          before: '[youtube]',
          after: '[/youtube]',
          afterInsert: function(h) {
            $scope.$apply();
          }
        },
        {
          separator: '---------------'
        },
        {
          name: 'Bulleted list',
          icon: 'list-ul',
          before: '[list]\n',
          after: '\n[/list]',
          afterInsert: function(h) {
            $scope.$apply();
          }
        },
        {
          name: 'Numeric list',
          icon: 'list-ol',
          before: '[list=[![Starting number]!]]\n',
          after: '\n[/list]',
          afterInsert: function(h) {
            $scope.$apply();
          }
        },
        {
          name: 'List item',
          icon: 'listItem',
          before: '[*] ',
          afterInsert: function(h) {
            $scope.$apply();
          }
        },
        {
          separator: '---------------'
        },
        {
          name: 'Quotes',
          icon: 'quote',
          before: '[quote]',
          after: '[/quote]',
          afterInsert: function(h) {
            $scope.$apply();
          }
        },
        {
          name: 'Code',
          icon: 'code',
          before: '[code]',
          after: '[/code]',
          afterInsert: function(h) {
            $scope.$apply();
          }
        }
      ]
    };
  };
});
