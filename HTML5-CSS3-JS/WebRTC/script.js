if (navigator.mediaDevices.getUserMedia) {

    var constraints = {
        video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            facingMode: "user"
        },
        video: true,
        audio: true
    };

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        // var media = document.querySelector('audio');
        var media = document.querySelector('video');

        try {
            media.srcObject = stream;
        } catch (error) {
            media.src = URL.createObjectURL(stream);
        }

        // media.onloadedmetadata = function(e) {
        //     media.play();
        // };

    }).catch((err)  =>  {
        console.log(`${err.name}: ${err.message}`);
    });

}
else {
    console.log("User Media is not supported in your browser or device");
}