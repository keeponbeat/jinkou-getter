var http = require('http');
var APP_ID = process.env.APP_ID;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('こにゃにゃちわ！！ \n');
}).listen(5000);

console.log('Server running at port:5000',"APP_ID is "+APP_ID);