angular.module('rodBrokerApp')
  .controller('SignupCtrl', ['$scope', '$http', '$location', 'Auth', function($scope, $http, $location, Auth){
  $scope.user = {
    email: '',
    password: '',
    username: ''
  };

  $scope.signup = function() {
    Auth.register($scope.user).then(function(registeredUser) {
      $location.path('/');
    }, function(error) {
      console.log(error);
    });
  }
}]);
