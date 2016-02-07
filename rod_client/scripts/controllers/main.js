'use strict';

/**
 * @ngdoc function
 * @name rodBrokerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rodBrokerApp
 */
angular.module('rodBrokerApp')
.controller('MainCtrl', ['$scope', '$location', 'Auth', function($scope, $location, Auth) {
  $scope.currentPath = $location.path();

  $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
  };

  $scope.logout = function() {
    Auth.logout().then(function(oldUser) {
      $location.path('/');
    }, function(error) {
      // An error occurred logging out.
    });
  };

  $scope.$on('devise:new-session', function(event, currentUser) {
    setCurrentUser(currentUser);
  });

  $scope.$on('devise:new-registration', function(event, user) {
    setCurrentUser(user);
  });

  function setCurrentUser(user) {
    $scope.currentUser = user;
  }
}]);



// /////

// angular.module('PostCtrls', ['PostServices'])
// .controller('HomeCtrl', ['$scope', 'Post', function($scope, Post) {
//   $scope.posts = [];
//   $scope.search = '';

//   Post.query(function success(data) {
//     $scope.posts = data;
//   }, function error(data) {
//     console.log(data)
//   });

//   $scope.deletePost = function(id, postsIdx) {
//     Post.delete({id: id}, function success(data) {
//       $scope.posts.splice(postsIdx, 1);
//     }, function error(data) {
//       console.log(data);
//     });
//   }
// }])
// .controller('ShowCtrl', ['$scope', '$routeParams', 'Post', function($scope, $routeParams, Post) {
//   $scope.post = {};

//   Post.get({id: $routeParams.id}, function success(data) {
//     $scope.post = data;
//   }, function error(data) {
//     console.log(data);
//   });
// }])

// .controller('NewCtrl', ['$scope', '$location', 'Post', 'Auth', function($scope, $location, Post, Auth) {
//   if (!Auth.isLoggedIn()) {
//     console.log('DENY');
//     $location.path('/login');
//     return;
//   }

//   $scope.post = {
//     title: '',
//     body: '',
//     username: Auth.currentUser().username
//   };

//   $scope.createPost = function() {
//     Post.save($scope.post, function success(data) {
//       $location.path('/');
//     }, function error(data) {
//       console.log(data);
//     });
//   }
// }])

// .controller('NavCtrl', ['$scope', 'Auth', 'Alerts', function($scope, Auth, Alerts) {
//   $scope.alerts = Alerts.get();
//   $scope.user = Auth.currentUser();

//   $scope.closeAlert = function(idx) {
//     Alerts.remove(idx);
//   };

//   $scope.logout = function() {
//     Auth.removeUser();
//   }
// }])


// .controller('LoginCtrl', ['$scope', '$http', '$location', 'Auth', function($scope, $http, $location, Auth){
//   $scope.user = {
//     email: '',
//     password: '',
//     username: ''
//   };

//   $scope.userLogin = function() {
//     $http.post('/api/auth', $scope.user).then(function success(res) {
//      Auth.saveUser(res.data.user);
//      $location.path('/');
//     }, function error(res) {
//       console.log(res);
//     })
//   }
// }]);