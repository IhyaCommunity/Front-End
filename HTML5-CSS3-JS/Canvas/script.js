var canvas = document.getElementById('drawCanvas');
var ctx = canvas.getContext('2d');

// ctx.fillStyle = 'rgba(95, 202, 172, .5)';
// ctx.fillRect(40, 40, 150, 150);

var path = new Path2D();
path.rect(20, 20, 150, 150);

ctx.fillStyle = '#67217A';
ctx.fill(path);

// ctx.strokeStyle = '#000';
// ctx.lineWidth = 4;

// ctx.beginPath();
// ctx.moveTo(200, 150);
// ctx.lineTo(350, 300);
// ctx.closePath();
// ctx.stroke();

// var img = new Image();
// img.addEventListener('load', () => {
//     ctx.drawImage(img, 40, 40);

//     ctx.shadowOffsetX = 2;
//     ctx.shadowOffsetY = 2;
//     ctx.shadowBlur = 2;
//     ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
    
//     ctx.font = '28px Arial';
//     ctx.fillStyle = '#67217A';
//     ctx.fillText('Some Text', 50, 50);

// }, false);

// img.src = 'hummingbird.jpg';


// var link = document.getElementById('download');

// link.addEventListener('click', () => {
//     link.href = canvas.toDataURL();
//     link.download = "image.png";
// }, false);