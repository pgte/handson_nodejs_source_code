var async = require('async');
var request = require('request');

var i = -1;
var n = i;
var lastResult = -1;

function test() {
  var pass = lastResult < 1000
  if (pass) { i = n; }
  return pass;
}

function action(done) {
  n = i + 1;
  request({uri: 'http://localhost:4001/', body: n.toString()}, function(err, res, body) {
    if (err) { return done(err); }
    lastResult = parseInt(body, 10);
    done();
  });
}

function callback(err) {
  if (err) { throw err; }
  console.log('the biggest integer whose square is smaller than 1000: %d', i);
}

async.whilst(test, action, callback);