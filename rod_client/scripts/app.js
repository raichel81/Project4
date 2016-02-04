'use strict';

/**
 * @ngdoc overview
 * @name rodBrokerApp
 * @description
 * # rodBrokerApp
 *
 * Main module of the application.
 */
var app = angular.module('rodBrokerApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
  // 'Devise'
])

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'HomeCtrl'
     })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/builders', {
      templateUrl: 'views/builders.html',
      controller: 'BuildersCtrl'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    })
    .when('/newBuilder', {
      templateUrl: 'views/newBuilder.html',
      controller: 'NewBuilderCtrl'
    })
    .when('/results', {
      templateUrl: 'views/results.html',
      controller: 'ResultsCtrl'
    })
    .when('/groups', {
      templateUrl: 'views/groups.html',
      controller: 'GroupsCtrl'
    })
    .when('/signup', {
      templateUrl: 'views/userSignup.html',
      controller: 'SignupCtrl'
    })
    .when('/showBuilder', {
      templateUrl: 'views/showBuilder.html',
      controller: 'ShowBuilderCtrl'
    })
    .otherwise({
      templateUrl:  '/404.html'
    });
})
  //  .run(['$rootScope', '$location', function($rootScope, $location) {
  // $rootScope.currentPath = function() {
  //   return $location;
  // }}])
app.factory('Group', ['$resource', function($resource) {
  return $resource('http://localhost:3000/api/groups/:id.json', null, {
    // 'update': { method:'PUT' }
  })
}]);

// app.config(function(AuthProvider) {

  // console.log(AuthProvider);
  // AuthProvider.loginPath('/users/sign_in');
  // AuthProvider.loginMethod('POST');
  // AuthProvider.resourceName('user');

// });

 /////////////////////////// 

// var app = angular.module('BlogApp', ['ngRoute', 'PostCtrls', 'PostServices','ui.bootstrap']);

// app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

//   $routeProvider
//   .when('/', {
//     templateUrl: 'app/views/posts.html',
//     controller: 'HomeCtrl'
//   })
//   .when('/posts/new', {
//     templateUrl: 'app/views/newPost.html',
//     controller: 'NewCtrl'
//   })
//   .when('/post/:id', {
//     templateUrl: 'app/views/showPost.html',
//     controller: 'ShowCtrl'
//   })
//   .when('/signup', {
//     templateUrl: 'app/views/userSignup.html',
//     controller: 'SignupCtrl'
//   })
//   .when('/login', {
//     templateUrl: 'app/views/userLogin.html',
//     controller: 'LoginCtrl'
//   })
//   .otherwise({
//     templateUrl: 'app/views/404.html'
//   });

//   $locationProvider.html5Mode(true);
// }])
// .config(['$httpProvider', function($httpProvider) {
//   $httpProvider.interceptors.push('AuthInterceptor');
// }])
// .run(['$rootScope', 'Auth', function($rootScope, Auth) {
//   $rootScope.isLoggedIn = function() {
//     return Auth.isLoggedIn.apply(Auth);
//   }
// }]);
