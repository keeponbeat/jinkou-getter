var APP_ID = process.env.APP_ID;
var server = require('http').createServer();
var io = require('socket.io')(server);

server.listen(process.env.PORT || 5000);

io.on('connection',function(socket){
    console.log('server bound');

    socket.on('request_data',function(year){
        socket.emit('data',{data:year});
    });

    socket.on("close", function() {
        console.log("connection close")
  })
})