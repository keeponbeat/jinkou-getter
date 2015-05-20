var APP_ID = process.env.APP_ID;
var app = require('http').createServer();
var io = require('socket.io')(app).listen(process.env.PORT || 5000);

io.on('connection',function(socket){
    console.log('server bound');

    socket.on('request',function(data){
        socket.emit('return',{ data: data.data })
    })
  })