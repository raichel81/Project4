'use strict';
 
angular.module('rodBrokerApp')
  .controller('ShowCtrl', ['$scope', '$routeParams', 'Builder', function ($scope, $routeParams, Builder) {

    $scope.builder = Builder.get({ id: $routeParams.builderId });
    // $scope.builder = {
    //   photo: "some image",
    //   description: "Stuff about a builder"
    // };
    // $scope.photos = [

    //   {pic: "Gallery photos go here!"},
    //   {pic: "another pic"},
    //   {pic: "even more photos"}
      
    // ];
  }]);