'use strict';

/**
 * @ngdoc function
 * @name earnestkpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the earnestkpApp
 */
angular.module('earnestkpApp')
  .controller('MainCtrl', function ($scope) {
  
  $scope.users = {
    1: {name: 'Louis Beryl', roles: [3]},
    2: {name: 'Brian Romanko', roles: [2]},
    3: {name: 'Scott Turnquest', roles: [2,3]},
    4: {name: 'Kimberly Maher', roles: [1,3]},
    5: {name: 'Kim Pham', roles: [4]}
  };

  var usersCount = 5;

  $scope.roles = [
    {value: 1, text: 'User'},
    {value: 2, text: 'Superuser'},
    {value: 3, text: 'Admin'},
    {value: 4, text: 'Guest'}
  ]; 
  
  $scope.checkName = function(data, id) {
    console.log(data + id);
  };

  $scope.saveUser = function(data, id) {
    console.log(data);
    $scope.users[id] = data;
  };

  $scope.showRole = function(id) {
    var selected = [];
    angular.forEach($scope.roles, function(s) { 
      if ($scope.users[id].roles.indexOf(s.value) >= 0) {
        selected.push(s.text);
      }
    });
    return selected.length ? selected : 'Not set';
  }; 

  $scope.removeUser = function(id) {
    delete $scope.users[id];
  };

  $scope.addUser = function() {
    usersCount ++;
    $scope.inserted = {
      name: '',
      roles: null,
    };
    $scope.users[usersCount] = $scope.inserted;
  };


  //   $scope.users = Users.fbObject;
    
  //   $scope.roles = [
  //     {id: 1, text: 'guest'},
  //     {id: 2, text: 'user'},
  //     {id: 3, text: 'superuser'},
  //     {id: 4, text: 'admin'}
  //   ];
  //   $scope.userRole = {};

  //   $scope.showStatus = function() {
  //   var selected = [];
  //   angular.forEach($scope.statuses, function(s) { 
  //     if ($scope.user.status.indexOf(s.value) >= 0) {
  //       selected.push(s.text);
  //     }
  //   });
  //   return selected.length ? selected.join(', ') : 'Not set';
  // }; 

  //   $scope.addRole = function(role) {
  //     if (!$scope.userRole[role]) {
  //       $scope.userRole[role] = true;
  //     } else {
  //       delete $scope.userRole[role];
  //     }
  //   };

  //   $scope.editUser = function(data, id) {
  //     console.log(data);
  //     $scope.users[id] = data;
  //     $scope.users.$save();
  //   };

  //   $scope.addUser = function() {
  //     Users.fbArray.$add({
  //       firstName: $scope.firstName,
  //       roles: $scope.userRole
  //     });
  //     // clear form input
  //     $scope.firstName = '';
  //   };

  //   $scope.removeUser = function($index) {
  //     Users.fbArray.$remove($index);
  //   };

  });