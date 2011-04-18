var fs = require('fs');

var doWhatWasAsked = function(callback) {
  fs.open(__dirname + '/a.txt', 'r', function(err, aFd) {
    if (err) { callback(err); return; }
    var buffer = new Buffer(10);
    fs.read(aFd, buffer, 0, 10, 10, function(err, bytesRead) {
      if (err) { callback(err); return; }
      
      fs.open(__dirname + '/b.txt', 'a', function(err, bFd) {
        if (err) { callback(err); return; }
        fs.fstat(bFd, function(err, bStats) {
          if (err) { callback(err); return; }
          fs.write(bFd, buffer, 0, 10, bStats.size, callback);
        })
      })
    });
  })
};

console.log('starting...');
doWhatWasAsked(function(err) {
  if (err) { throw err; }
  console.log('done');
});