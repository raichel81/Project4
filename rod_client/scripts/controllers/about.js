'use strict';
 
angular.module('rodBrokerApp')
  .controller('AboutCtrl', ['$scope', 'About', function ($scope, About) {
    $scope.about = About.query();
  }]);