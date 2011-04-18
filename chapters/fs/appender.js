// Appender
var fs = require('fs');
var startAppender = function(fd, startPos) {
  var pos = startPos;
  return {
    append: function(buffer, callback) {
      var written = 0;
      var oldPos = pos;
      pos += buffer;
      (function tryWriting() {
        if (written < buffer.length) {
          fs.write(fd, buffer, written, buffer.length - written, oldPos + written,
            function(err, bytesWritten) {
              if (err) { callback(err); return; }
              written += bytesWritten;
              tryWriting();
            }
          );
        } else {
          // we have finished
          callback(null);
        }
      })();
    }
  }
};

// start appender
fs.open('/tmp/test.txt', 'a', function(err, fd) {
  if (err)  {throw err; }
  fs.fstat(fd, function(err, stats) {
    if (err) {throw err; }
    console.log(stats);
    var appender = startAppender(fd, stats.size);
    appender.append(new Buffer('append this!'), function(err) {
      console.log('appended');
    });
  })
});