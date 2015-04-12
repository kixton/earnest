'use strict';

/**
 * @ngdoc service
 * @name earnestkpApp.User
 * @description
 * # User
 * Factory in the earnestkpApp.
 */
angular.module('earnestkpApp')
  .factory('User', function (fbUsersURL, $window, $firebaseArray) {
    return $firebaseArray(new $window.Firebase(fbUsersURL));
  });
