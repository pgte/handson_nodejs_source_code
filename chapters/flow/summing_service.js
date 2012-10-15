function sum(a, b) {
  return a + b;
}

require('http').createServer(function(req, res) {
  var body = '';

  req.setEncoding('utf8');
  req.on('data', function(data) {
    body += data;
  });

  req.on('end', function() {
    var numbers = body.split('&').map(function(arg){
      return arg.split('=');
    }).map(function(strs) {
      return parseInt(strs[1], 10);
    });
    console.log(numbers);
    var total = numbers.reduce(sum, 0);
    res.end(total.toString());
  });

}).listen(4001);