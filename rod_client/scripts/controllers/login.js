angular.module('rodBrokerApp')

  .controller('LoginCtrl', ['$scope', '$http', '$location', 'Auth', function($scope, $http, $location, Auth){
  $scope.user = {
    email: '',
    password: '',
    username: ''
  };

  $scope.login = function() {
    $http.post('/api/auth', $scope.user).then(function success(res) {
     Auth.saveUser(res.data.user);
     $location.path('/');
    }, function error(res) {
      console.log(res);
    })
  }
}]);