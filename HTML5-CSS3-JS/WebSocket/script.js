// Create WebSocket connection
const socket = new WebSocket('ws://localhost:6502');

socket.addEventListener('open', function (event) {
    socket.send('Hey Server!');
});

socket.addEventListener('message', function (event) {
    console.log('Server Message: ', event.data);
});