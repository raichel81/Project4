
angular.module('rodBrokerApp')
.controller('HomeCtrl', ['$scope', 'Pole', function($scope, Pole) {
  $scope.poles = [];
  $scope.search = '';

  Post.query(function success(data) {
    $scope.posts = data;
  }, function error(data) {
    console.log(data)
  });

  $scope.deletePole = function(id, polesIdx) {
    Pole.delete({id: id}, function success(data) {
      $scope.poles.splice(polesIdx, 1);
    }, function error(data) {
      console.log(data);
    });
  }
}]);