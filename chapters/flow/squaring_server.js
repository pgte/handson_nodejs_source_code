require('http').createServer(function(req, res) {
  var body = '';

  req.setEncoding('utf8');
  req.on('data', function(data) {
    body += data;
  });

  req.on('end', function() {
    var number = parseInt(body, 10);
    var squared = Math.pow(number, 2);
    res.end(squared.toString());
  });

}).listen(4001);