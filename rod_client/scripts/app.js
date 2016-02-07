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
  'Devise',
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.bootstrap'
]);

app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
  $httpProvider.defaults.withCredentials = true;
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
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
    .when('/new', {
      templateUrl: 'views/new.html',
      controller: 'NewCtrl'
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
      templateUrl: 'views/signup.html',
      controller: 'SignupCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .when('/show', {
      templateUrl: 'views/show.html',
      controller: 'ShowCtrl'
    })
    .otherwise({
      templateUrl:  '/404.html'
    });
}]);

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

app.config(function(AuthProvider) {
  AuthProvider.registerPath('http://localhost:3000/api/users.json');
  AuthProvider.loginPath('http://localhost:3000/api/users/sign_in.json');
  // AuthProvider.logoutPath('http://localhost:3000/api/users/sign_out.json');
  AuthProvider.logoutPath('http://localhost:3000/api/users/sign_out_post.json');
  AuthProvider.logoutMethod('POST');
});


// .config(['$httpProvider', function($httpProvider) {
//   $httpProvider.interceptors.push('AuthInterceptor');
// }])
app.run(['$rootScope', 'Auth', function($rootScope, Auth) {
  $rootScope.isLoggedIn = function() {
    return Auth.isAuthenticated();
  }
}]);
