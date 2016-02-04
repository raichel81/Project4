'use strict';

/**
 * @ngdoc function
 * @name rodBrokerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rodBrokerApp
 */
angular.module('rodBrokerApp')
.controller('MainCtrl', function($scope, $location) {
  $scope.currentPath = $location.path();
  $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
  };
});



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

// .controller('SignupCtrl', ['$scope', '$http', '$location', 'Alerts', 'Auth', function($scope, $http, $location, Alerts, Auth){
//   $scope.user = {
//     email: '',
//     password: '',
//     username: ''
//   };

//   $scope.userSignup = function() {
//     $http.post('api/users', $scope.user).then(function success(res) {
//       Alerts.add('success', 'User Created!');
//       Auth.saveUser(res.data.user);
//       $location.path('/');
//     }, function error(res) {
//       console.log(res);
//     })
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