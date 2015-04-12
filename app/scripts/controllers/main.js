'use strict';

/**
 * @ngdoc function
 * @name earnestkpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the earnestkpApp
 */
angular.module('earnestkpApp')
  .controller('MainCtrl', function ($scope, User) {
    $scope.user = User;
    $scope.addUser = function() {
      User.$add({
        firstName: $scope.firstName,
        lastName: $scope.lastName
      });
      // clear form input
      $scope.firstName = '';
      $scope.lastName = '';
    };
    $scope.removeUser = function (id) {
      User.$remove(id);
    };
  });
