var async = require('async');
var exists = require('path').exists;

var files = [
  'does_not_exist.js',
  'also_does_not_exist.js',
  'also_does_not_exist_2.js',
  'filter.js' ];
  

function callback(result) {
  console.log('at least one of these files exists: %j', result);
}

async.some(files, exists, callback);