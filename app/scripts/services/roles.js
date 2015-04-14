'use strict';

// Array of user roles stored on Firebase

angular.module('earnestkpApp')
  .factory('Roles', function (fbRolesURL, $window, $firebaseArray) {
    return $firebaseArray(new $window.Firebase(fbRolesURL));
  });
