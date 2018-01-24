angular.module('operations').controller('EditPwsCtrl', function ($scope, $uibModal, PwsSvc) {
  $scope.form = {}

  $scope.add = function (data) {
    var found = $scope.addons.filter(function (addon) {
      return addon.name === data.name
    })

    if (found.length === 0) {
      return PwsSvc.add($scope.operationId, data).then(function () {
        loadAddons()
        $scope.form = {}
        return this
      })
    }
  }

  $scope.delete = function (addon) {
    PwsSvc.delete($scope.operationId, addon.id).then(function () {
      loadAddons()
      return this
    })
  }

  $scope.submit = function () {
    $scope.add($scope.form)
  }

  $scope.search = function () {
    $uibModal.open({
      template: require('../templates/pws_search.html'),
      controller: 'PwsSearchCtrl',
      scope: $scope
    }).result.then(function () {
      loadAddons()
    }, function () {

    })
  }

  $scope.templates = function () {
    $uibModal.open({
      template: require('../templates/pws_templates.html'),
      controller: 'PwsTemplatesCtrl',
      scope: $scope
    }).result.then(function () {
      loadAddons()
    }, function () {

    })
  }

  $scope.arma3sync = function () {
    $uibModal.open({
      template: require('../templates/arma3sync_controller.html'),
      controller: 'Arma3SyncCtrl',
      scope: $scope
    }).result.then(function () {
      loadAddons()
    }, function () {

    })
  }

  var loadAddons = function () {
    PwsSvc.addons($scope.operationId).then(function (addons) {
      $scope.addons = addons
    })
  }

  loadAddons()
})
