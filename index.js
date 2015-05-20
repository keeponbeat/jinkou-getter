var APP_ID = process.env.APP_ID;
var net = require('net');
var url = require('url');

var server = net.createServer(function (c){
  console.log('client connected');
  c.on('end',function(){
    console.log('client end');
  });
  c.on('data',function(data){
    c.pipe(c);
  });
});

server.listen( process.env.PORT || 5000, function(){
    console.log('server bound');
});