'use strict';
 
angular.module('rodBrokerApp')
.controller('NewCtrl', ['$scope', '$location', 'Builder', 'Post', 'Auth', function($scope, $location, Builder, Post, Auth) {
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
}])


// 'use strict';
 
// angular.module('rodBrokerApp')
//   .controller('NewBuilderCtrl', ['$scope', 'NewBuilder', '$location', 'Post', 'Auth', function ($scope, NewBuilder, $location, Post, Auth) {
//     $scope.newBuilder = NewBuilder.query();
//       if (!Auth.isLoggedIn()) {
//     console.log('DENY');
//     $location.path('/login');
//     return;
//   }

//   $scope.post = {
//     name: '',
//     address: '',
//     email: '',
//     phone: '',
//     species: '',
//     rod: '',
//     blank: '',
//     description: '',
//     username: Auth.currentUser().username
//   };

//   $scope.createPost = function() {
//     Post.save($scope.post, function success(data) {
//       $location.path('/');
//     }, function error(data) {
//       console.log(data);
//     });
//   }
//   }]);