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

    $scope.editUser = function(data, id) {
      $scope.users[id] = data;
      $scope.users.$save();
    };

    $scope.addUser = function() {
      Users.fbArray.$add({
        firstName: $scope.firstName,
        lastName: $scope.lastName
      });
      // clear form input
      $scope.firstName = '';
      $scope.lastName = '';
    };

    $scope.removeUser = function($index) {
      Users.fbArray.$remove($index);
    };
  });
