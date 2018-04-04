if (navigator.mediaDevices.getUserMedia) {

    var constraints = {
        // video: {
        //     width: { ideal: 1280 },
        //     height: { ideal: 720 },
        //     facingMode: "user"
        // },
        video: true,
        audio: true
    };

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        var video = document.querySelector('video');

        try {
            video.srcObject = stream;
        } catch (error) {
            video.src = URL.createObjectURL(stream);
        }

        // video.onloadedmetadata = function(e) {
        //     video.play();
        // };

    }).catch((err)  =>  {
        console.log(`${err.name}: ${err.message}`);
    });

}
else {
    console.log("User Media is not supported in your browser or device");
}