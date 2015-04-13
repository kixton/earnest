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
  $scope.users = Users.fbObject;
  $scope.usersArr = Users.fbArray;

  // $scope.seedData = function() {
  //   var ref = new $window.Firebase('https://earnestkp.firebaseio.com/users');
  //   ref.push({
  //     name : 'Louis Beryl',
  //     roles : [1,2]
  //   });
  //   ref.push({
  //     name : 'Brian Romanko',
  //     roles : [2]
  //   });
  //   ref.push({
  //     name : 'Scott Turnquest',
  //     roles : [2,3]
  //   });
  //   console.log('clicked');
  // };

  $scope.roles = [
    {value: 1, text: 'User'},
    {value: 2, text: 'Superuser'},
    {value: 3, text: 'Admin'},
    {value: 4, text: 'Guest'}
  ]; 

  var ref = new $window.Firebase('https://earnestkp.firebaseio.com/users');
  $scope.saveUser = function(data, id, $index) {
    console.log($scope.users[id]);
    $scope.usersArr[$index] = data;
    $scope.usersArr.$save();
    var list = $scope.usersArr;
    list[$index] = data;
    list.$save($index).then(function(ref) {
      console.log(ref.key()); 
      // ref.key() === list[$index].$id; // true
    });
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
    var key = ref.push().key();
    $scope.inserted = {
      name: '',
      roles: '',
    };
    $scope.users[key] = $scope.inserted;
    };
  });
