var APP_ID = process.env.APP_ID;
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200);
  res.end("こにちわ！APP_IDは"+APP_ID+"です。\n");
}).listen(process.env.PORT || 5000);