'use strict';
 
angular.module('rodBrokerApp')
.controller('EditCtrl', ['$scope', '$location', '$routeParams', 'Builder', 'Auth', 'Upload', function($scope, $location, $routeParams, Builder, Auth, Upload) {
  if (!Auth.isAuthenticated()) {
    console.log('DENY');
    $location.path('/login');
    return;
  }

  if(Auth._currentUser.builder_id != $routeParams.builderId) {
    $location.path('/');
    return
  }

  if($routeParams.builderId) {
    Builder.get({ id: $routeParams.builderId }, function(builder) {
      $scope.builder = builder;
      $scope.builder.rodtype = $scope.builder.rodtype.split(', ');
      $scope.builder.poleblank = $scope.builder.poleblank.split(', ');
      $scope.builder.species = $scope.builder.species.split(', ');
      $scope.builder.ship = $scope.builder.ship.split(', ');
     })
  }

  // Upload Picture on file select or drop
  $scope.upload = function (file) {
    Upload.upload({
      url: apiEndpoint + '/builders/' + $scope.builder.id + '.json',
      method: 'PUT',
      headers: { 'Content-Type': false },
      fields: {
        'builder[image]': file
      },
      file: file,
      sendFieldsAs: 'json'
    }).then(function (resp) {
      console.log('Success ' + resp.config.file.name + 'uploaded. Response: ' + resp.data);
    }, function (resp) {
      console.log('Error status: ' + resp.status);
    }, function (evt) {
      var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
      console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
    });
  };

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

    if(builder.id) {
      Builder.update({id: builder.id}, builder, function success(newBuilder) {
        $location.path('/builders/' + newBuilder.id);
      }, function error(data) {
        console.log(data);
      });
    } else {
      Builder.save(builder, function success(newBuilder) {
        Auth._currentUser.builder_id = newBuilder.id;
        $location.path('/builders/' + newBuilder.id);
      }, function error(data) {
        console.log(data);
      });      
    }
  }
}]);