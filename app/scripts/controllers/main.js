'use strict';

// Main controller of application

angular.module('earnestkpApp')
  .controller('MainCtrl', function ($scope, Roles, Users, ModalSvc) {
    $scope.showModal = ModalSvc.showModal;
    $scope.roles = Roles.fbArray;
    $scope.userRoles = Roles.userRoles;

    // User data and functions
    $scope.usersArr = Users.fbArray;
    $scope.users = Users.fbObject;
    $scope.isNewUser = Users.isNewUser;
    $scope.saveUser = Users.saveUser;
    $scope.addUser = function() {
      $scope.inserted = {name: '', roles: ''};
      var uID = Users.addUserInstance();
      $scope.users[uID] = $scope.inserted;
    };

  });
