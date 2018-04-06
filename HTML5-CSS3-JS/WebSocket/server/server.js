var http = require('http');

var WebSocketServer = require('websocket').server;

var server = http.createServer((request, response) => {
    // No implementation
    // Change protocol to WebSocket or respond with 404
    response.writeHead(404);
    response.end();
});

server.listen(6502, () => {
    console.log(new Date() + ' Server is listening on port 6502');
});

wsServer = new WebSocketServer({
    httpServer: server
});

wsServer.on('request', (request) => {
    var connection = request.accept(null, request.origin);

    console.log((new Date()) + ' Got a request');

    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log((new Date()) + ' Client Message: ' + message.utf8Data);
        }

        connection.sendUTF('Yea, I am listening...');
    });
});