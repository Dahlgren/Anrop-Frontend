angular.module('auth').controller('LoginCtrl', function ($scope, AuthenticationTokenManager, LoginSvc) {
  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
  $scope.form = {};
  $scope.submit = function () {
    LoginSvc.login($scope.form.username, $scope.form.password)
      .then(function (session) {
        AuthenticationTokenManager.set(session.token);
      })
      .catch(function (error) {
        if (error.status) {
          $scope.alerts = [
            { type: 'danger', msg: 'Felaktiga inloggningsuppgifter' }
          ];
        } else {
          $scope.alerts = [
            { type: 'danger', msg: 'Inlogngingen misslyckades, försök igen' }
          ];
        }
      });
  };
});
