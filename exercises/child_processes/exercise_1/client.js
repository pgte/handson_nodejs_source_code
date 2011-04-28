var fs = require('fs');

var conn = require('net').createConnection('/tmp/ho_child_exercise_1.sock');
conn.on('fd', function(fileDesc) {
  fs.write(fileDesc, "this is the child!\n", function() {
    conn.end();
  });
});