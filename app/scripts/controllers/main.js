'use strict';

/**
 * @ngdoc function
 * @name earnestkpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the earnestkpApp
 */
angular.module('earnestkpApp')
  .controller('MainCtrl', function ($scope, Users, $window) {

  $scope.seedData = function() {
    var ref = new $window.Firebase('https://earnestkp.firebaseio.com/users');
    ref.push({
      name : 'Louis Beryl',
      roles : [1,2]
    });
    ref.push({
      name : 'Brian Romanko',
      roles : [2]
    });
    ref.push({
      name : 'Scott Turnquest',
      roles : [2,3]
    });
    console.log('clicked');
  };

  $scope.users = Users.fbObject;

  var usersCount = 3;

  $scope.roles = [
    {value: 1, text: 'User'},
    {value: 2, text: 'Superuser'},
    {value: 3, text: 'Admin'},
    {value: 4, text: 'Guest'}
  ]; 

  $scope.saveUser = function(data, id) {
    console.log(data, id);
    Users.fbArray[id] = data;
    Users.fbArray.$save();
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

  });