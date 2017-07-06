angular.module('operations').directive('operationForm', function (markitupSettings) {
  return {
    controller: function ($scope) {
      $scope.markitupSettings = markitupSettings($scope);
    },
    template: require('../templates/operation_form.html'),
  };
});
