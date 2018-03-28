/*
    Interfaces
*/
// example-1
// Point Interface use as 2-D 
var drawSquare = function (points2D) {
    // code logic
    // console.log(points2D);
    // console.log(points2D.x)
    // ..
    // console.log(points2D.z); // z is undefine 
};
drawSquare({
    x: 10,
    y: 20
});
// Point Interface use as 3-D
var drawCube = function (points3D) {
    // code logic
    // console.log(points3D);
    // console.log(points3D.x);
    //..
};
drawCube({
    x: 100,
    y: 200,
    z: 150
});
function fullname(prams) {
    console.log("" + prams.firstName + prams.secondName);
}
fullname({
    firstName: 'Type',
    secondName: 'Script'
});
function catVoice(voice) {
    console.log(voice.cat);
}
catVoice({
    cat: 'Meaooooow!'
});
function crowVoice(voice) {
    console.log(voice.crow);
}
crowVoice({
    crow: 'kkeaaaaaaan!'
});
function doggyVoice(voice) {
    console.log(voice.doggy);
}
doggyVoice({
    doggy: 'whaaaaaaof!'
});
function honda(pram) {
    // code logic
}
honda({
    cc: '125cc',
    topSpeed: function () {
        return 0;
    }
});
