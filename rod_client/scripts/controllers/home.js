angular.module('rodBrokerApp')
.controller('HomeCtrl', ['$scope', '$location', 'Builder', function($scope, $location, Builder) {
  $scope.searchQuery = '';
  $scope.advancedSearch = false;
  $scope.builder = {
    ship: [],
    rodtype: [],
    species: [],
    poleblank: []
  };

  $scope.toggleAdvancedSearch = function() {
    $scope.advancedSearch = !$scope.advancedSearch;
  };

  $scope.search = function() {
    $location.path('/builders/q=' + $scope.searchQuery);
  };

  $scope.boxChecked = function() {
    console.log('hi');

    var selected = [].concat(
      $scope.builder.ship,
      $scope.builder.rodtype,
      $scope.builder.species,
      $scope.builder.poleblank
    );

    $scope.searchQuery = selected.join(' ');
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
}]);
