'use strict';
 
angular.module('rodBrokerApp')
.controller('EditCtrl', ['$scope', '$location', '$routeParams', 'Builder', 'Auth', function($scope, $location, $routeParams, Builder, Auth) {
  // if (!Auth.isAuthenticated()) {
  //   console.log('DENY');
  //   $location.path('/login');
  //   return;
  // }

  if($routeParams.builderId) {
    Builder.get({ id: $routeParams.builderId }, function(builder) {
      $scope.builder = builder;
      $scope.builder.rodtype = $scope.builder.rodtype.split(', ');
      $scope.builder.poleblank = $scope.builder.poleblank.split(', ');
      $scope.builder.species = $scope.builder.species.split(', ');
      $scope.builder.ship = $scope.builder.ship.split(', ');
     })
  }

  $scope.ships = [
    'Not Available',
    'Domestic',
    'International'
  ];

  $scope.rodtypes = [
    'Casting',
    'Spinning', 
    'Fly'
  ];

  $scope.saltwaterSpecies = [
    'Amberjack',
    'Bonefish',
    'Calico Bass',
    'Cobia',
    'Dorado (Mahi)',
    'Fluke',
    'Halibut',
    'Ling Cod',
    'Marlin',
    'Permit',
    'Redfish',
    'Rockfish',
    'Roosterfish',
    'Sailfish',
    'Sea Bass',
    'Sea Trout',
    'Shark',
    'Snapper',
    'Snook',
    'Striped Bass',
    'Tuna',
    'Wahoo',
    'Yellowtail'
  ];

  $scope.freshwaterSpecies = [
    'Bass Casting',
    'Bass Spinning',
    'Bass Swim Bait',
    'Blue Gill',
    'Carp',
    'Catfish',
    'Crappie',
    'Kokanee',
    'Kokanee Trolling',
    'Musky',
    'Panfish',
    'Perch',
    'Pike',
    'Salmon (Northwest)',
    'Salmon (Great Lakes)',
    'Steelhead',
    'Sturgeon',
    'Trout',
    'Walleye Spinning'
  ];

  $scope.poleblanks = [
    'Rainshadow',
    'St. Croix',
    'Liberty',
    'Phenix',
    'Century',
    'North Fork Composites',
    'Point Blank',
    'Black Hole',
    'Seeker',
    'Rodgeeks',
    'Pacific Bay'
  ]

  $scope.createBuilder = function() {
    var builder = angular.copy($scope.builder);
    builder.ship = builder.ship.join(', ');
    builder.rodtype = builder.rodtype.join(', ');
    builder.species = builder.species.join(', ');
    builder.poleblank = builder.poleblank.join(', ');

    Builder.save(builder, function success(newBuilder) {
      Auth._currentUser.builder_id = newBuilder.id;
      $location.path('/builders/' + newBuilder.id);
    }, function error(data) {
      console.log(data);
    });
  }
}])


// 'use strict';
 
// angular.module('rodBrokerApp')
//   .controller('NewBuilderCtrl', ['$scope', 'NewBuilder', '$location', 'Post', 'Auth', function ($scope, NewBuilder, $location, Post, Auth) {
//     $scope.newBuilder = NewBuilder.query();
//       if (!Auth.isLoggedIn()) {
//     console.log('DENY');
//     $location.path('/login');
//     return;
//   }

//   $scope.post = {
//     name: '',
//     address: '',
//     email: '',
//     phone: '',
//     species: '',
//     rod: '',
//     blank: '',
//     description: '',
//     username: Auth.currentUser().username
//   };

//   $scope.createPost = function() {
//     Post.save($scope.post, function success(data) {
//       $location.path('/');
//     }, function error(data) {
//       console.log(data);
//     });
//   }
//   }]);