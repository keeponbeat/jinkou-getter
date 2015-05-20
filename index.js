var APP_ID = process.env.APP_ID;
var WebSocketServer = require('ws').Server;
var wsServer = new WebSocketServer({ port: process.env.PORT || 5000});

wsServer.on('connection',function(c){
    var id = setInterval(function() {
        ws.send(JSON.stringify(new Date()), function() {  })
        }, 1000);
    c.on('message',function(message){
    c.send(message);
    });
    c.on("close", function() {
    console.log("websocket connection close")
    clearInterval(id)
  })
})