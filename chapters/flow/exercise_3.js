var fs   = require('fs'),
    Step = require('step');

var doWhatWasAsked = function(callback) {
  var aFd, bFd, buffer = new Buffer(10);
  Step(
    function openA() {
      fs.open(__dirname + '/a.txt', 'r', this);
    },
    function readFromA(err, fd) {
      if (err) { callback(err); return; }
      aFd = fd;
      fs.read(aFd, buffer, 0, 10, 10, this);
    },
    function openB(err) {
      if (err) { callback(err); return; }
      fs.open(__dirname + '/b.txt', 'a', this);
    },
    function statB(err, fd) {
      if (err) { callback(err); return; }
      bFd = fd;
      fs.fstat(bFd, this);
    },
    function writeB(err, bStats) {
      if (err) { callback(err); return; }
      fs.write(bFd, buffer, 0, 10, bStats.size, callback);
    }
  );
};

console.log('starting...');
doWhatWasAsked(function(err) {
  if (err) { throw err; }
  console.log('done');
});