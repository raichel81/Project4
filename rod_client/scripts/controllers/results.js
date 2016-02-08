'use strict';

angular.module('rodBrokerApp')
  .controller('ResultsCtrl', ['$scope', '$location', '$routeParams', '$http', 'Builder', function ($scope, $location, $routeParams, $http, Builder) {
    $scope.builders = [];

    var searchQuery = $routeParams.searchQuery;
    $http.post(apiEndpoint + '/search', {
      data: {
        query: searchQuery
      }
    }).then(function successCallback(response) {
      $scope.builders = response.data;

    }, function errorCallback(response) {

    });

    $scope.showBuilder = function(builderId) {
      $location.path('/builders/' + builderId);
    }
  }]);
