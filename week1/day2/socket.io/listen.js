var socket = require('socket.io-client')('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000/');
socket.on('messages', function(data){
    console.log(data);
});
socket.on("new_message", data => console.log(data));