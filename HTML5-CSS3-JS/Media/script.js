var media = document.querySelector('video');
// var media = document.querySelector('audio');
// var media = new Audio();

media.src = 'video.mp4';
// media.src = 'music.mp3';

document.getElementById('play').addEventListener('click', (ev) => {

    var playButton = ev.target;

    if (media.paused) {
        media.play();
        playButton.textContent = '!ٹھہرو';
    }
    else {
        media.pause();
        playButton.textContent = '!چلو';
    }

    ev.preventDefault();
});