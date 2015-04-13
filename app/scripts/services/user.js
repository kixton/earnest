'use strict';

/**
 * @ngdoc service
 * @name earnestkpApp.User
 * @description
 * # User
 * Factory in the earnestkpApp.
 */
angular.module('earnestkpApp')
  .factory('Users', function (fbUsersURL, $window, $firebaseObject, $firebaseArray) {
    var fbObject = $firebaseObject(new $window.Firebase(fbUsersURL));
    var fbArray = $firebaseArray(new $window.Firebase(fbUsersURL));
    return {
      fbObject: fbObject,
      fbArray: fbArray
    };
  });
