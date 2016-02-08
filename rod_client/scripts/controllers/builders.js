'use strict';
 
angular.module('rodBrokerApp')
  .controller('BuildersCtrl', ['$scope', '$location', 'Builder', function ($scope, $location, Builder) {
    $scope.builders = Builder.query();
    console.log($scope.builders);
    $scope.showBuilder = function(builderId) {
      $location.path('/builders/' + builderId);
    }
  }]);

