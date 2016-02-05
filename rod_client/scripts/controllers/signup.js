angular.module('rodBrokerApp')
  .controller('SignupCtrl', ['$scope', '$http', '$location', 'Alerts', 'Auth', function($scope, $http, $location, Alerts, Auth){
  $scope.user = {
    email: '',
    password: '',
    username: ''
  };

  $scope.signup = function() {
    $http.post('api/users', $scope.user).then(function success(res) {
      Alerts.add('success', 'User Created!');
      Auth.saveUser(res.data.user);
      $location.path('/');
    }, function error(res) {
      console.log(res);
    })
  }
}])