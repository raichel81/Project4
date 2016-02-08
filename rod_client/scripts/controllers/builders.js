'use strict';
 
angular.module('rodBrokerApp')
  .controller('BuildersCtrl', ['$scope', '$location', 'Auth', 'Builder', function ($scope, $location, Auth, Builder) {
    Auth._currentUser
    $scope.builders = Builder.query();
    console.log($scope.builders);
    $scope.showBuilder = function(builderId) {
      $location.path('/builders/' + builderId);
    }
  }]);


// Builder.get({user_id: Auth._currentUser.id}, )