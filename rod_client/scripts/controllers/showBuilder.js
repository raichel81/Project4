'use strict';
 
angular.module('rodBrokerApp')
  .controller('ShowBuilderCtrl', ['$scope', function ($scope) {
    // $scope.showBuilder = ShowBuilder.query();
    $scope.builder = {
      photo: "some image",
      description: "Stuff about a builder"
    };
  }]);