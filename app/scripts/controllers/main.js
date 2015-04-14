'use strict';

// Main controller of application

angular.module('earnestkpApp')
  .controller('MainCtrl', function ($scope, Users, Roles) {
    $scope.users = Users.fbObject;
    $scope.roles = Roles;

    $scope.isNewUser = function(id) {
      if ($scope.users[id].name === '' && $scope.users[id].roles.length === 0 ) {
        return true;
      } else {
        return false;
      }
    };
    $scope.addUser = function() {
      $scope.inserted = {name: '', roles: ''};
      $scope.users[Users.addUserInstance()] = $scope.inserted;
    };
    $scope.saveUser = function(data, id) {
      Users.saveUser(data, id);
    };
    $scope.removeUser = function(id) {
      Users.removeUser(id);
    };
    $scope.showRole = function(id) {
      var selected = [];
      angular.forEach($scope.roles, function(s) { 
        if ($scope.users[id].roles.indexOf(s.value) >= 0) {
          selected.push(s.text);
        }
      });
      return selected;
    };
  });
