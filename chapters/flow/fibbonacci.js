var async = require('async');
var request = require('request');

var items = [];
var order = process.argv[2] && parseInt(process.argv[2]) || 100;
var orderMinus2 = order - 2;

for (var i = 0 ; i < orderMinus2 ; i ++) {
  items.push(i);
}

var memo = [0, 1];

function iterator(memo, item, next) {
  request({uri: 'http://localhost:4001/', form: {a: memo[0], b: memo[1]}}, function(err, res, body) {
    next(err, [memo[1], parseInt(body, 10)]);
  });
}

async.reduce(items, memo, iterator, function(err, result) {
  if (err) { throw err; }
  console.log('Fibbonacci of order %d: %d', order, result[1]);
});
