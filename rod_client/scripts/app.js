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

app.config(function ($routeProvider) {
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
});

app.controller('LoginCtrl', function (Auth) {
  Auth.currentUser().then(function(user) {
    debugger;
    // User was logged in, or Devise returned
    // previously authenticated session.
    console.log(user); // => {id: 1, ect: '...'}
  }, function(error) {
    // unauthenticated error
  });
});
    // controller('myCtrl', function(Auth) {
    //     // Use your configured Auth service.
    // });


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
