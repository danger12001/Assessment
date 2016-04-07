var assert = require('assert');
var app = require('../app');

describe('appMap',function(){
  it('should return a map of the apps people use.',function(){
    var result = app.appMap();
    assert.deepEqual(result,[ { name: 'Walter', apps: [ 'Faceblock', 'Instantgam' ] },
  { name: 'Jesse',
    apps: [ 'Tooter', 'Faceblock', 'Instantgam', 'Snaptalk' ] },
  { name: 'Saul',
    apps: [ 'LankedOn', 'Instantgam', 'Faceblock' ] },
  { name: 'Gus', apps: [ 'Tooter', 'Instantgam' ] } ]


);
  });
});
describe('dataMap',function(){
  it('should return a map of the data usage of the apps',function(){
    var result = app.dataMap();
    assert.deepEqual(result,[ { name: 'Walter', data: '67' },
  { name: 'Jesse', data: '300' },
  { name: 'Saul', data: '283' },
  { name: 'Gus', data: '150' } ]

);
  });
});
describe('processedMap',function(){
  it('should return a map of the the apps and data usage of each person',function(){
    var result = app.processedMap({ Walter: [ 'Faceblock', 'Instantgam' ],
  Jesse: [ 'Tooter', 'Faceblock', 'Instantgam', 'Snaptalk' ],
  Saul: [ 'LankedOn', 'Instantgam', 'Faceblock' ],
  Gus: [ 'Tooter', 'Instantgam' ] },{ Walter: '67', Jesse: '300', Saul: '283', Gus: '150' });
    assert.deepEqual(result,[ { name: 'Walter',
    data: '67',
    apps: [ 'Faceblock', 'Instantgam' ] },
  { name: 'Jesse',
    data: '300',
    apps: [ 'Tooter', 'Faceblock', 'Instantgam', 'Snaptalk' ] },
  { name: 'Saul',
    data: '283',
    apps: [ 'LankedOn', 'Instantgam', 'Faceblock' ] },
  { name: 'Gus', data: '150', apps: [ 'Tooter', 'Instantgam' ] } ]



);
  });
});
describe('mostData',function(){
  it('should return the person who uses the most data.',function(){
    var result = app.mostData([ { name: 'Walter', data: '67' },
  { name: 'Jesse', data: '300' },
  { name: 'Saul', data: '283' },
  { name: 'Gus', data: '150' } ]);
    assert.deepEqual(result,{"name":"Jesse","data":"300"}

);
  });
});
describe('leastData',function(){
  it('should return the person who uses the least data.',function(){
    var result = app.leastData([ { name: 'Walter', data: '67' },
  { name: 'Jesse', data: '300' },
  { name: 'Saul', data: '283' },
  { name: 'Gus', data: '150' } ]);
    assert.deepEqual(result,{"name":"Walter","data":"67"}

);
  });
});
describe('mostApps',function(){
  it('should return the person who uses the most apps.',function(){
    var result = app.mostApps([ { name: 'Walter', apps: [ 'Faceblock', 'Instantgam' ] },
  { name: 'Jesse',
    apps: [ 'Tooter', 'Faceblock', 'Instantgam', 'Snaptalk' ] },
  { name: 'Saul',
    apps: [ 'LankedOn', 'Instantgam', 'Faceblock' ] },
  { name: 'Gus', apps: [ 'Tooter', 'Instantgam' ] } ]);
    assert.deepEqual(result,{ name: 'Jesse',
  apps: [ 'Tooter', 'Faceblock', 'Instantgam', 'Snaptalk' ] }


);
});
});
describe('leastApps',function(){
  it('should return the person who uses the least apps.',function(){
    var result = app.leastApps([ { name: 'Walter', apps: [ 'Faceblock', 'Instantgam' ] },
  { name: 'Jesse',
    apps: [ 'Tooter', 'Faceblock', 'Instantgam', 'Snaptalk' ] },
  { name: 'Saul',
    apps: [ 'LankedOn', 'Instantgam', 'Faceblock' ] },
  { name: 'Gus', apps: [ 'Tooter', 'Instantgam' ] } ]);
    assert.deepEqual(result,{ name: 'Walter', apps: [ 'Faceblock', 'Instantgam' ] }



);
});
});
describe('NONFaceblockUsers',function(){
  it('should return the people who use Faceblock',function(){
    var result = app.NONFaceblockUsers([ { name: 'Walter', apps: [ 'Faceblock', 'Instantgam' ] },
  { name: 'Jesse',
    apps: [ 'Tooter', 'Faceblock', 'Instantgam', 'Snaptalk' ] },
  { name: 'Saul',
    apps: [ 'LankedOn', 'Instantgam', 'Faceblock' ] },
  { name: 'Gus', apps: [ 'Tooter', 'Instantgam' ] }]);
  assert.equal(result,"Gus");
  });
});
describe('FaceblockUsers',function(){
  it('should return the people who use Faceblock',function(){
    var result = app.FaceblockUsers([ { name: 'Walter', apps: [ 'Faceblock', 'Instantgam' ] },
  { name: 'Jesse',
    apps: [ 'Tooter', 'Faceblock', 'Instantgam', 'Snaptalk' ] },
  { name: 'Saul',
    apps: [ 'LankedOn', 'Instantgam', 'Faceblock' ] },
  { name: 'Gus', apps: [ 'Tooter', 'Instantgam' ] }]);
  assert.deepEqual(result,["Walter","Jesse","Saul"]);
  });
});
