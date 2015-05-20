var APP_ID = process.env.APP_ID;
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  var year = url.parse(req.url,true).query;
  res.writeHead(200);
  res.end("こにちわ！APP_IDは"+APP_ID+"です。\n" + year + "年度のデータです。");
}).listen(process.env.PORT || 5000);