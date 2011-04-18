require('http').createServer(function(req, res) {
  
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var left = 10;
  var interval = setInterval(function() {
    for(var i = 0; i< 100; i++) {
      res.write(Date.now() + "\n");
    }
    
    if (-- left === 0) {
      clearInterval(interval);
      res.end();
    }
    
  }, 1000);
  
}).listen(4001);