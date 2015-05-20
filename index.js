var APP_ID = process.env.APP_ID;
var WebSocketServer = require('ws').Server;
var wsServer = new WebSocketServer({ port: process.env.PORT || 5000});

wsServer.on('connection',function(c){
    c.on('message',function(message){
        c.send(message);
    });
})