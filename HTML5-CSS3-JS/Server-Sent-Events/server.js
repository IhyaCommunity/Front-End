var http = require('http');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var server = http.createServer(async (request, response) => {

    var headers = {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache'
    };

    response.writeHead(200, headers);

    while (true) {

        // var body = 'event: ping\n';

        // var dataObj = { time: new Date().toLocaleTimeString() };
        // body += `data: ${JSON.stringify(dataObj)} \n\n`;

        // response.write(body);

        var data = `data: ${new Date().toLocaleTimeString()} \n\n`;
        response.write(data);

        await sleep(2000);
    }

});

server.listen(8080);
console.log('Server is listening...');