'use strict';
 
angular.module('rodBrokerApp')
  .controller('NewBuilderCtrl', ['$scope', 'NewBuilder', function ($scope, NewBuilder) {
    $scope.newBuilder = NewBuilder.query();
  }]);