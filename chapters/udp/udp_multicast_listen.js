var server = require('dgram').createSocket('udp4');

server.on('message', function(message, rinfo) {
  console.log('server got message: ' + message + ' from ' + rinfo.address + ':' + rinfo.port);
});

server.addMembership('230.1.2.3');

server.bind(4000);