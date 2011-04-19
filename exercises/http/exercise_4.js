var http = require('http'),
    fs   = require('fs');

if (process.argv.length < 5) {
  console.log('Usage: ' + process.argv[0] + ' ' + process.argv[1] + ' <host> <port> <file_path>');
  return;
}

var options = {
  host: process.argv[2],
  port: parseInt(process.argv[3], 10),
  path: '/',
  method: 'PUT'
};

var req = http.request(options);

console.log('piping ' + process.argv[4]);
fs.createReadStream(process.argv[4]).pipe(req);
