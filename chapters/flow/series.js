var async = require('async');
var request = require('request');

var functions = [];

for ( var i = 0; i < 10; i ++ ) {
  functions.push(function(i) {

    return function(done) {
    
      request({uri: 'http://localhost:4001', body: i.toString()}, function(err, res, body) {
        done(err, body);
      });

    }

  }(i));
}

function callback(err, result) {
  if (err) { throw err; }
  console.log('done: %j', result);
}

async.series(functions, callback);