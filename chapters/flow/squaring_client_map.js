var async = require('async');
var request = require('request');

var collection = [{value:1}, {value: 2}, {value: 3}, { value: 4}];

function iterator(element, next) {
  request({ uri: 'http://localhost:4001/',
            body: element.value.toString() },
          function(err, res, body) {
            element.result = parseInt(body, 10);
            next(err);
          });
}

function callback(err, result) {
  console.log('finished.');
  // for (var i in collection) {
    console.log(collection);
    //console.log('the square of %d is %d', collection[i], result[i]);
  // }
}

async.forEach(collection, iterator, callback);
