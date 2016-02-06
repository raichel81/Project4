angular.module('rodBrokerApp')
  .controller('SignupCtrl', ['$scope', '$http', '$location', 'Auth', function($scope, $http, $location, Auth){
  $scope.user = {
    email: '',
    password: '',
    username: ''
  };

  // $scope.signup = function() {
  //   $http.post('api/users', $scope.user).then(function success(res) {
  //     // Alerts.add('success', 'User Created!');
  //     Auth.saveUser(res.data.user);
  //     $location.path('/');
  //   }, function error(res) {
  //     console.log(res);
  //   })
  // }

  $scope.signup = function() {

    Auth.register($scope.user).then(function(registeredUser) {
          console.log(registeredUser); // => {id: 1, ect: '...'}
          $location.path('/');
        }, function(error) {
          console.log(error);
        });

        $scope.$on('devise:new-registration', function(event, user) {
      Auth.currentUser().then(function(user) {
            // User was logged in, or Devise returned
            // previously authenticated session.
            console.log('hi'); 
            console.log(user); // => {id: 1, ect: '...'}
        }, function(error) {
            // unauthenticated error
        });

        });
  }

}])