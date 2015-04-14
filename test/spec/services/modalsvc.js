'use strict';

describe('Service: ModalSvc', function () {

  // load the service's module
  beforeEach(module('earnestkpApp'));

  // instantiate service
  var ModalSvc;
  beforeEach(inject(function (_ModalSvc_) {
    ModalSvc = _ModalSvc_;
  }));

  it('should do something', function () {
    expect(!!ModalSvc).toBe(true);
  });

});
