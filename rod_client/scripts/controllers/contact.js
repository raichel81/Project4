'use strict';
 
angular.module('rodBrokerApp')
  .controller('ContactCtrl', ['$scope', 'Contact', function ($scope, Contact) {
    $scope.contact = Contact.query();
  }]);