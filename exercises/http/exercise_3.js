var fs = require('fs');

var sequence = 0;
require('http').createServer(function(req, res) {
  var fileName = '/tmp/' + sequence + '.bin';
  console.log("writing " + fileName);
  var writeStream  = fs.createWriteStream(fileName);
  
  req.pipe(writeStream);
  req.on('data', function(data) {
    console.log(data.length);
  });
  req.on('end', function() {
    res.writeHead(200);
    res.end('JÁ TÁ!');
  });
  sequence ++;
}).listen(3000);