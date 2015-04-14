'use strict';

// Reference to Firebase instance
// User data stored in Firebase

angular.module('earnestkpApp')
  .factory('Users', function (fbUsersURL, $window, $firebaseObject, $firebaseArray) {
    var ref = new $window.Firebase(fbUsersURL);
    var fbObject = $firebaseObject(new $window.Firebase(fbUsersURL));
    var fbArray = $firebaseArray(new $window.Firebase(fbUsersURL));
    return {
      ref: ref,
      fbObject: fbObject,
      fbArray: fbArray,
      saveUser: function(data, id) {
        ref.child(id).update(data);
      },
      removeUser: function(id) {
        ref.child(id).remove();
      },
      addUserInstance: function() {
        return ref.push().key();
      }
    };
  });
