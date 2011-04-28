var fs = require('fs');
var client = require('tls').connect(4001, function(err) {
  client.connected = true;
  console.log('connected');
  process.stdin.resume();
  process.stdin.pipe(client);
  client.pipe(process.stdout, {end: false});
});
