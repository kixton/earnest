'use strict';

/**
 * @ngdoc function
 * @name earnestkpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the earnestkpApp
 */
angular.module('earnestkpApp')
  .controller('MainCtrl', function ($scope, Users) {
    $scope.users = Users.fbObject;
    $scope.roles = [
      'guest', 
      'user', 
      'superuser', 
      'admin'
    ];
    $scope.userRole = {};

    $scope.addRole = function(role) {
      if (!$scope.userRole[role]) {
        $scope.userRole[role] = true;
      } else {
        delete $scope.userRole[role];
      }
    };

    $scope.editUser = function(data, id) {
      console.log(data);
      $scope.users[id] = data;
      $scope.users.$save();
    };

    $scope.addUser = function() {
      Users.fbArray.$add({
        firstName: $scope.firstName,
        lastName: $scope.lastName,
        roles: $scope.userRole
      });
      // clear form input
      $scope.firstName = '';
      $scope.lastName = '';
    };

    $scope.removeUser = function($index) {
      Users.fbArray.$remove($index);
    };

  });
