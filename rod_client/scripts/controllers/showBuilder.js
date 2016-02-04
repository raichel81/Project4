'use strict';
 
angular.module('rodBrokerApp')
  .controller('ShowBuilderCtrl', ['$scope', 'ShowBuilder', function ($scope, ShowBuilder) {
    $scope.showBuilder = ShowBuilder.query();
  }]);