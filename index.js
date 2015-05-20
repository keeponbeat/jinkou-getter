var APP_ID = process.env.APP_ID;
var server = require('http').createServer().listen(process.env.PORT || 5000);
var io = require('socket.io')(server);

io.on('connection',function(socket){

    socket.on('request_data',function(year){
    socket.emit('data',{data:year});
    });

    socket.on("close", function() {
    console.log("connection close")
  })
})