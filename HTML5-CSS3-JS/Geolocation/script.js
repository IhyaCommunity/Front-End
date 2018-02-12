function success(pos) {
    var coords = pos.coords;

    document.getElementById('latitude').innerText = coords.latitude;
    document.getElementById('longitude').innerText = coords.longitude;

    alert(`Accuracy is more or less ${coords.accuracy} meters.`);
};

function error(err) {
    console.warn(`Error Code: ${err.code} Error Message: ${err.message}`);

    // switch (err.code) {
    //     case 1:
    //         console.log('User denied the permission request');
    //     break;
    //     case 2:
    //         console.log('Position is unavailable');
    //     break;
    //     case 3:
    //         console.log('Timeout, please try again');
    //     break;
    // }
};

var options = {
    // enableHighAccuracy: true,
    // timeout: 5000,
    // maximumAge: 0
};

navigator.geolocation.getCurrentPosition(success, error);