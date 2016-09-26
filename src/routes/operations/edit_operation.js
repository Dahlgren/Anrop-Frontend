module.exports = {
  controller: 'EditOperationCtrl',
  resolve: {
    operationId: function( $route ) {
      return $route.current.params.operationId;
    },
  },
  template: require('./operations/templates/edit_operation.html'),
};
