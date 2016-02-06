'use strict';
 
angular.module('rodBrokerApp')
.controller('NewCtrl', ['$scope', '$location', 'Builder', 'Auth', function($scope, $location, Builder, Auth) {
  if (!Auth.isLoggedIn()) {
    console.log('DENY');
    $location.path('/login');
    return;
  }

  $scope.builder = {
    name: '',
    email: '',
    phone: '',
    bio: '',    
    location: '',
    minprice: '',    
    maxprice: '',
    ship: '',    
    rodtype: '',   
    species: '',
    poleblank: '',
    username: Auth.currentUser().username
  };


  $scope.createBuilder = function() {
    Builder.save($scope.builder, function success(data) {
      $location.path('/');
    }, function error(data) {
      console.log(data);
    });
  }
}]);
