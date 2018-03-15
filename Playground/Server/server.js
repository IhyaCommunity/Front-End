var http = require('http');

var server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    res.end(data);
});

server.listen(8080);
console.log('Server is listening');