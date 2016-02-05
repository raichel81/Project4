'use strict';
 
angular.module('rodBrokerApp')
  .controller('ShowCtrl', ['$scope', function ($scope) {
    // $scope.showBuilder = ShowBuilder.query();
    $scope.builder = {
      photo: "some image",
      description: "Stuff about a builder"
    };
  }]);