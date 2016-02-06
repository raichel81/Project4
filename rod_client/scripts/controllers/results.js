'use strict';
 

angular.module('rodBrokerApp')
  .controller('ResultsCtrl' ['$scope', 'Builder', function ($scope, Builder) {
    $scope.builders = Builder.query();

  }]);