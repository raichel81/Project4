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
app.factory('Builder', ['$resource', function($resource) {
  return $resource('http://localhost:3000/api/builders/:id.json', null, {
    // 'update': { method:'PUT' }
  })
}]);
app.factory('Pole', ['$resource', function($resource) {
  return $resource('http://localhost:3000/api/poles/:id.json', null, {
    // 'update': { method:'PUT' }
  })
}]);


// app.config(function(AuthProvider) {

  // console.log(AuthProvider);
  // AuthProvider.loginPath('/users/sign_in');
  // AuthProvider.loginMethod('POST');
  // AuthProvider.resourceName('user');

// });


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
