var http = require('http');
var APP_ID = process.env.APP_ID;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!! \n');
}).listen(3333);

console.log('Server running at port:3333',"APP_ID is"+APP_ID);