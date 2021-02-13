var express = require('express');
var morgan = require('morgan');
const cors = require('cors');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');
const fs = require('fs');
const key = fs.readFileSync('key.pem');
const cert = fs.readFileSync('cert.pem');
const https = require('https');

var app = express();
const server = https.createServer({key: key, cert: cert}, app,);
const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', msg => {
        console.log(msg)
    });
    socket.on('Room1', msg => {
        console.log(msg)
    });
    socket.on('createRoom', msg => {
        console.log("Created Room");
        socket.join('Room1');
    });

});

server.listen(4000, () => {
    console.log('listening on PORT:4000');
});

// if (!module.parent) {
//   app.listen(4000);
//   console.log('Express started on port 4000');
// }