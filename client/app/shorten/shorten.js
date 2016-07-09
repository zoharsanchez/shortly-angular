angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function() {
    if ($scope.url) {
      $scope.link.url = $scope.url;
      Links.addOne($scope.link);
      $scope.url = '';
    }
  };
});
