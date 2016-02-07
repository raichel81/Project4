angular.module('rodBrokerApp')

  .controller('LoginCtrl', ['$scope', '$http', '$location', 'Auth', function($scope, $http, $location, Auth){
  $scope.user = {
    email: '',
    password: ''
  };

  $scope.login = function() {

        Auth.login($scope.user).then(function(user) {
          $location.path('/');
console.log(user); // => {id: 1, ect: '...'}
        }, function(error) {
            // Authentication failed...
        });
  }
}]);

