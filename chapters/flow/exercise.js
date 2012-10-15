var myFilter = require('./my_filter');

var request = require('request');

var collection = [1,2,3,4];

function filter(element, next) {
  process.nextTick(function() {
    next(null, element % 2 == 0);
  });
}

function map(elem, next) {
  request({ uri: 'http://localhost:4001/',
            body: elem.toString()},
            function(err, res, body) {
              next(err, body && parseInt(body, 10));
            });
}

function callback(err, result) {
  if (err) { console.log(err); }
  console.log(result);
}

myFilter(collection, filter, map, callback);
