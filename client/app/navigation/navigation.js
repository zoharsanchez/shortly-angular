angular.module('shortly.navigation', [])
  .controller('NavigationController', function(Auth) {
    $scope.logout = function() {
      Auth.signout();
    };
  });