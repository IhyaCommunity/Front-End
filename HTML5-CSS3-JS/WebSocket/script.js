// Create WebSocket connection
const socket = new WebSocket('ws://localhost:6502');

socket.addEventListener('open', function (event) {

    document.getElementById('send-button').addEventListener('click', () => {
        socket.send('Hey Server!');
        console.log('Sent message to server');
    });

});

socket.addEventListener('message', function (event) {
    console.log('Server Message: ', event.data);
});