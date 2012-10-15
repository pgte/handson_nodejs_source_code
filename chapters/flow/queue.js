var async = require('async');
var request = require('request');

function worker(number, done) {
  request({uri: 'http://localhost:4001/', body: number.toString()}, function(err, res, body) {
    done(err, number, parseInt(body, 10));
  });
}

var queue = async.queue(worker, 5);

for ( var i = 0; i < 1000; i += 1) {
  queue.push(i, function(err, number, squared) {
    if (err) {return console.log(err); }
    console.log('the square of %d is %d', number, squared); 
  });
}

queue.drain = function() {
  console.log('queue drained!');
};