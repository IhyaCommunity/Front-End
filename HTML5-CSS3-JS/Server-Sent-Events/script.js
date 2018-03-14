var eventSource;
var eventList = document.querySelector('ul');

document.querySelector('.start').addEventListener('click', () => {

    eventSource = new EventSource('http://localhost:8080');

    eventSource.addEventListener('open', () => {
        console.log('Connection open');
    });

    eventSource.addEventListener('message', (e) => {
        var li = document.createElement('li');
        
        li.textContent = 'Message: ' + e.data;

        eventList.appendChild(li);
    });

    eventSource.addEventListener('error', () => {
        console.log('Something went wrong');
    });

    // eventSource.addEventListener('ping', (e) => {
    //     var li = document.createElement('li');

    //     var obj = JSON.parse(e.data);
    //     li.textContent = 'Ping at ' + obj.time;
    //     eventList.appendChild(li);
    // });

});

document.querySelector('.stop').addEventListener('click', () => {
    eventSource.close();
    console.log('Connection closed');
});