'use strict';

// User data stored in Firebase and user functions

angular.module('earnestkpApp')
  .factory('Users', function (fbUsersURL, $window, $firebaseObject, $firebaseArray) {
    var ref = new $window.Firebase(fbUsersURL);
    var fbObject = $firebaseObject(new $window.Firebase(fbUsersURL));
    return {
      fbObject: fbObject,
      fbArray: $firebaseArray(new $window.Firebase(fbUsersURL)),
      isNewUser: function(id) {
        return fbObject[id].name === '' && fbObject[id].roles.length === 0;
      },
      saveUser: function(data, id) {
        console.log('clicked');
        console.log(data);
        console.log(id);
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
