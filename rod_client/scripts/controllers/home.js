angular.module('rodBrokerApp')
.controller('HomeCtrl', ['$scope', '$location', 'Builder', function($scope, $location, Builder) {
  $scope.searchQuery = '';

  $scope.search = function() {
    $location.path('/builders/q=' + $scope.searchQuery);
  };
}]);
