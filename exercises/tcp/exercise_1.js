var sockets = [];

require('net').createServer(function(socket) {
  
  sockets.push(socket);
  
  socket.on('data', function(data) {
    console.log(data.toString());
    sockets.forEach(function(socket) {
      socket.write(data);
    });
  });
  
  socket.on('end', function() {
    var pos = sockets.indexOf(socket);
    if (pos > 0) {
      sockets.splice(pos, 1);
    }
  });
  
}).listen(4001);