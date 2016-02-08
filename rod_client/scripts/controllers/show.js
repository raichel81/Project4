'use strict';
 
angular.module('rodBrokerApp')
  .controller('ShowCtrl', ['$scope', '$location', '$routeParams', 'Builder', 'Auth', function ($scope, $location, $routeParams, Builder, Auth) {

    Builder.get({ id: $routeParams.builderId }, function(builder) {
        $scope.builder = builder;
        $scope.imageUrl = rootEndpoint + builder.image_url;
    });

    $scope.editMyProfile = function() {
    $location.path('/builders/edit/' + Auth._currentUser.builder_id); 
  };
   
  $scope.sameBuilder = function() {
    
    if(Auth._currentUser) {
      return Auth._currentUser.builder_id == $routeParams.builderId;
    }
  };


  }]);