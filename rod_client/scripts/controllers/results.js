'use strict';

angular.module('rodBrokerApp')
  .controller('ResultsCtrl', ['$scope', '$routeParams', '$http', 'Builder', function ($scope, $routeParams, $http, Builder) {
    $scope.builders = [];

    var searchQuery = $routeParams.searchQuery;
    $http.post('http://localhost:3000/api/search', {
      data: {
        query: searchQuery
      }
    }).then(function successCallback(response) {
      $scope.builders = response.data;

    }, function errorCallback(response) {

    });
  }]);
