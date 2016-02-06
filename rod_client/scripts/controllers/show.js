'use strict';
 
angular.module('rodBrokerApp')
  .controller('ShowCtrl', ['$scope', 'Builder', function ($scope, Builder) {
    // $scope.showBuilder = ShowBuilder.query();
    $scope.builder = {
      photo: "some image",
      description: "Stuff about a builder"
    };
    $scope.photos = [

      {pic: "Gallery photos go here!"},
      {pic: "another pic"},
      {pic: "even more photos"}
      
    ];
  }]);