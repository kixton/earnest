'use strict';

/**
 * @ngdoc function
 * @name earnestkpApp.controller:EdituserCtrl
 * @description
 * # EdituserCtrl
 * Controller of the earnestkpApp
 */
angular.module('earnestkpApp')
  .controller('EditUserCtrl', function ($scope, $location, $routeParams, $window, fbUsersURL, $firebaseObject) {
    var userURL = new $window.Firebase(fbUsersURL + '/' + $routeParams.id);
    $scope.user = $firebaseObject(userURL);

    $scope.editUser = function() {
      $scope.user.$save();
      $location.path('/');
    };
  });