'use strict';
 
angular.module('rodBrokerApp')
.controller('NewCtrl', ['$scope', '$location', 'Builder', 'Post', 'Auth', function($scope, $location, Builder, Post, Auth) {
  if (!Auth.isLoggedIn()) {
    console.log('DENY');
    $location.path('/login');
    return;
  }

  $scope.builder = {
    title: '',
    body: '',
    username: Auth.currentUser().username
  };

  $scope.pole = {
    title: '',
    body: '',
    username: Auth.currentUser().username
  };

  $scope.createBuilder = function() {
    Builder.save($scope.builder, function success(data) {
      $location.path('/');
    }, function error(data) {
      console.log(data);
    });
  }
}])
