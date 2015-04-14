'use strict';

// Main controller of application

angular.module('earnestkpApp')
  .controller('MainCtrl', function ($scope, Roles, Users) {
    $scope.roles = Roles.fbArray;
    $scope.userRoles = Roles.userRoles;

    $scope.users = Users.fbObject;
    $scope.isNewUser = Users.isNewUser;
    $scope.saveUser = Users.saveUser;
    $scope.removeUser = Users.removeUser;
    $scope.inserted = {name: '', roles: ''};
    // $scope.addUser = function() {
    //   Users.addUser = $scope.inserted;
    // };
    $scope.addUser = function() {
      var uID = Users.addUserInstance();
      $scope.users[uID] = $scope.inserted;
    };
  });
