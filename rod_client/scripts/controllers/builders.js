'use strict';
 
angular.module('rodBrokerApp')
  .controller('BuildersCtrl', ['$scope', 'Builder', function ($scope, Builder) {
    $scope.builders = Builder.query();
  }]);