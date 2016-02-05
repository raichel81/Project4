'use strict';
 
/**
 * @ngdoc function
 * @name fakeLunchHubApp.controller:GroupsCtrl
 * @description
 * # GroupsCtrl
 * Controller of the fakeLunchHubApp
 */
angular.module('rodBrokerApp')
  .controller('ResultsCtrl', ['$scope', function ($scope) {
    // $scope.results = Result.query();
    $scope.results = [

      {location: "Oxnard, CA", pic: "A photo of me and my rod"},
      {location: "Seattle, WA", pic: "Photo of my best rod"},
      {location: "Brooklyn, NY", pic: "Photo of me and my rod"},
      {location: "New Orleans, LA", pic: "Photo of my handmade rods"},
      {location: "Portland, OR", pic: "This is my photo, this is my rod"},
      {location: "Oakland, CA", pic: "Rod Pix"},


      
    ];
  }]);