var assert = require('assert');
var app = require('../app');

describe('appMap',function(){
  it('should return a map of the apps people use.',function(){
    var result = app.appMap();
    assert.deepEqual(result,"");
  });
});
