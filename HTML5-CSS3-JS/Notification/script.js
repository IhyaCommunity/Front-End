'use strict';

document.getElementById('notify').addEventListener('click', function() {

    if (!("Notification" in window)) {
        alert("Your browser does not support desktop notification");
    }
    else {

        Notification.requestPermission().then(function(result) {    
            var options = {
                body: "Peace, from JS!",
                icon: 'si-logo-icon.png'
            };
    
            var notification = new Notification("Good Morning", options);
            // setTimeout(notification.close.bind(notification), 3000);
    
        }).catch(function(result) {

            if (Notification.permission === "denied" || Notification.permission === "default") {
                console.log("User permission denied or not available");
            }
        });

    }

});