'use strict';
 
/**
 * @ngdoc function
 * @name fakeLunchHubApp.controller:GroupsCtrl
 * @description
 * # GroupsCtrl
 * Controller of the fakeLunchHubApp
 */
angular.module('rodBrokerApp')
  .controller('ResultsCtrl', ['$scope', 'Result', function ($scope, Result) {
    $scope.results = Result.query();
  }]);