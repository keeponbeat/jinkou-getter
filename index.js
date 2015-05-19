var APP_ID = process.env.APP_ID;
var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('あなたのAPP_IDは、'+APP_ID+' です。');
}).listen(8124);

console.log('Server running at port 8124');