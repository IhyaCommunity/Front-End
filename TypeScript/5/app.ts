class Animal {
    // Atribute or Property
    name: string;

    // Creating & Initializing object
    constructor(theName: string) {
        this.name = theName;
    }

    // funtion or behaviour
    walk(distance: number): any {
        console.log(`Animal name is ${this.name}. Walking ${distance} km/h`);
    }
}

let animal = new Animal('kitty'); // contain memory on heap
// console.log(animal);
// console.log(animal.name)
// console.log(animal.walk) // output: [Function]
// animal.walk(12);


// inherit base class to derived class
class Snake extends Animal {
    constructor(theName: string) {
        super(theName);
    }

    walk() {
        console.warn(`Snakes don't walk.`)
    }
}

let snake = new Snake('Python');
// snake.walk()

