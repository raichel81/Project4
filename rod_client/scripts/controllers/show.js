'use strict';
 
angular.module('rodBrokerApp')
  .controller('ShowCtrl', ['$scope', '$routeParams', 'Builder', function ($scope, $routeParams, Builder) {

    $scope.builder = Builder.get({ id: $routeParams.builderId });
   
  }]);