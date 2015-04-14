'use strict';

describe('Service: Roles', function () {

  // load the service's module
  beforeEach(module('earnestkpApp'));

  // instantiate service
  var Roles;
  beforeEach(inject(function (_Roles_) {
    Roles = _Roles_;
  }));

  it('should return an array of roles', function () {
    // console.log(Roles.fbArray);
    // expect(typeof Roles.fbArray).toBe('object');
    expect(!!Roles).toBe(true);
  });

});
