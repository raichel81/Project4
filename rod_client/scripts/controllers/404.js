'use strict';
 
angular.module('rodBrokerApp')
  .controller('404Ctrl', ['$scope', '404', function ($scope, 404) {
    $scope.404 = 404.query();
  }]);