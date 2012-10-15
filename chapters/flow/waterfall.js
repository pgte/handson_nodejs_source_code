var async = require('async');
var request = require('request');

var functions = [
  
  function(done) {
    request({uri: 'http://localhost:4001', body: '5'}, done);
  },

  function(res, body, done) {
    request({uri: 'http://localhost:4001', body: body}, done);
  }

];

function callback(err, res, result) {
  if (err) { throw err; }
  console.log('5^4 = 5^2^2 = %s', result);
}

async.waterfall(functions, callback);