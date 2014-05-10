var requirejs = require('requirejs'),
    expect = require('chai').expect;

requirejs.config(require('./requireConfig.js'));

describe('UDC', function(done) {
  var udc;

  it('should load required AMD modules', function(done) {
    requirejs(['udc'], function (_udc) {
      udc = _udc;
      done();
    });
  });
});
