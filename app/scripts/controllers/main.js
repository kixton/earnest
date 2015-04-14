'use strict';

// Main controller of application

angular.module('earnestkpApp')
  .controller('MainCtrl', function ($scope, Roles, Users) {
    $scope.inserted = {name: '', roles: ''};

    $scope.roles = Roles.fbArray;
    $scope.userRoles = Roles.userRoles;

    $scope.usersArr = Users.fbArray;
    $scope.users = Users.fbObject;
    $scope.isNewUser = Users.isNewUser;
    $scope.saveUser = Users.saveUser;
    $scope.removeUser = Users.removeUser;
    $scope.addUser = function() {
      var uID = Users.addUserInstance();
      $scope.users[uID] = $scope.inserted;
    };
  });
