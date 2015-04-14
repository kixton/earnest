'use strict';

// Roles data stored in Firebase and roles functions

angular.module('earnestkpApp')
  .factory('Roles', function (fbRolesURL, $window, $firebaseArray, Users) {
    var fbArray = $firebaseArray(new $window.Firebase(fbRolesURL));
    return {
      fbArray: fbArray,
      userRoles: function(id) {
        var selected = [];
        angular.forEach(fbArray, function(s) { 
          if (Users.fbObject[id].roles.indexOf(s.value) >= 0) {
            selected.push(s.text);
          }
        });
        return selected;
      }
    };
  });
