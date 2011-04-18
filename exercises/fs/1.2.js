var fs = require('fs');

fs.open(__dirname + '/a.txt', 'r', function(err, fd) {
  if (err) { throw err; }
  var buffer = Buffer(5);
  var readBytes = 0;
  (function readIt() {
    fs.read(fd, buffer, readBytes, buffer.length - readBytes, 10 + readBytes, function(err, bytesRead) {
      if (err) { throw err; }
      readBytes += bytesRead;
      if (readBytes === buffer.length) {
        console.log(buffer);
      } else {
        readIt();
      }
    });
  })();
});