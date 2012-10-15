var async = require('async');
var request = require('request');

var collection = [1, 2, 3, 4];

function iterator(element, next) {
  request({ uri: 'http://localhost:4001/',
            body: element.toString() },
          function(err, res, body) {
            console.log('square of %d is %d', element, body);
            next(err);
          });
}

function callback() {
  console.log('finished');
}

async.forEach(collection, iterator, callback);