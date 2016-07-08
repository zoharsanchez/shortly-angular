angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function() {
    if ($scope.link.url) {
      Links.addOne($scope.link.url);
      $scope.link.url = '';
    }
  };
});
