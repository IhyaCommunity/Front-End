/*
    Interfaces
*/


// Always use Pascal notation
interface Point {
    x: number,
    y: number,
    z?: number, // z index for 3-D
}

// example-1

// Point Interface use as 2-D 
let drawSquare = (points2D: Point) => {   // custom type guards
    // code logic
    // console.log(points2D);
    // console.log(points2D.x)
    // ..
    // console.log(points2D.z); // z is undefine 
}

drawSquare({
    x: 10,
    y: 20
});

// Point Interface use as 3-D
let drawCube = (points3D: Point) => {
    // code logic
    // console.log(points3D);
    // console.log(points3D.x);
    //..
}

drawCube({
    x: 100,
    y: 200,
    z: 150
});


// example-2

interface Fullname {
    firstName: string,
    secondName: string
}

function fullname(prams: Fullname) {
    console.log(`${prams.firstName}${prams.secondName}`);
}

fullname({
    firstName: 'Type',
    secondName: 'Script'
});

// example 3

interface AnimalVoice {
    cat?: string,
    crow?: string,
    doggy?: string
}

function catVoice(voice: AnimalVoice) {
    console.log(voice.cat);
}
catVoice({
    cat: 'Meaooooow!'
});

function crowVoice(voice: AnimalVoice) {
    console.log(voice.crow);
}
crowVoice({
    crow: 'kkeaaaaaaan!'
});

function doggyVoice(voice: AnimalVoice) {
    console.log(voice.doggy);
}

doggyVoice({
    doggy: 'whaaaaaaof!'
});

// example 4

// simple Polymorphic inheritance
interface Bike { cc: string | number }
interface Honda extends Bike { topSpeed(): number }

function honda(pram: Honda) {
    // code logic
}

honda({
    cc: '125cc',
    topSpeed() {
        return 0;
    }
});