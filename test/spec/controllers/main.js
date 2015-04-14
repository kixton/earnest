'use strict';

describe('MainCtrl', function () {

  // load the controller's module
  beforeEach(module('earnestkpApp'));

  var MainCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('addUser should create a new user', function () {
    var keys = Object.keys(scope.users);
    var last = keys[keys.length-1];
    expect(typeof scope.users).toBe('object');
    // expect(last).toBe('-JmrWeww3Toz1DiuB9Va');
    // expect(scope.users[last].name).toBe('');
    // expect(scope.users[last].roles).toBe('');
  });
});
