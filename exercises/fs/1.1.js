var fs = require('fs');

fs.stat(__dirname + '/a.txt', function(err, stats) {
  if (err) { throw err; }
  console.log(stats.size);
});