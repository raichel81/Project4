'use strict';
 
angular.module('rodBrokerApp')
  .controller('BuildersCtrl', ['$scope', '$location', 'Auth', 'Builder', function ($scope, $location, Auth, Builder) {
    $scope.builders = Builder.query();
    $scope.showBuilder = function(builderId) {
      $location.path('/builders/' + builderId);
    }
  }]);
