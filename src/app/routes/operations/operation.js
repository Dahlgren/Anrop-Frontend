module.exports = {
  controller: function ($scope, operationId) {
    $scope.operationId = operationId;
  },
  resolve: {
    operationId: function($route) {
      return $route.current.params.operationId;
    },
  },
  template: require('./operation.html'),
};
