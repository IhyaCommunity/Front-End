/* 
    Classes
*/

class Person {
    firstName: string = 'Ali';
    secondName: string = 'Irfan';
}

let person: Person = new Person; // allocate memory
// console.log(person.firstName, person.secondName);

// console.log(person instanceof Person);


class Wifi {
    password: number = 0;
    ssid: string = '';
    connect() {
        if (this.password == 0) {
            console.log('Enter password');
        } else if (this.ssid == '') {
            console.log('Enter Wifi name');
        } else {
            console.log('User connect!');
            console.log('SSID: ' + this.ssid);
            console.log('Password: ' + this.password);
        }
    }
}

let wifi = new Wifi();
// wifi.ssid = 'Limited Access';
// wifi.password = 123321;
// wifi.connect();

// console.log(wifi instanceof Person); //  really? output: false

// example 1
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
// console.log(animal.name);
// console.log(animal.walk) // output: [Function]
// animal.walk(12);


/* 
    inherit base class to derived class
*/

class Snake extends Animal {
    size: number;
    constructor(SnakeName: string, Size: number = 0) {
        super(SnakeName);
        this.size = Size;
    }

    SnakeSize() {
        console.log(this.size);
    }

    walk() {
        console.warn(`Snakes don't walk.`)
    }
}

let snake = new Snake('Python', 20);
// console.log(snake);
// console.log(snake.name)
// snake.walk()
// snake.SnakeSize()










// example 2

class ListIndex {
    lists(...args: any[]) {
        for (let i = 0; i < args.length; i++) {
            console.log(`Argument ${i} : ${args[i]}`)
        }
    }
}

let listIndex = new ListIndex();
// listIndex.lists('a', 'b', 'c', 1, 2, 3);
// listIndex.lists(true, false);



interface Area {
    width: number,
    height: number,
    radius?: number,
    area(): any
}

class FindArea implements Area {
    width: number;
    height: number;
    constructor(w: number, h: number) {
        this.width = w;
        this.height = h;
    }

    area() {
        let total = this.height * this.width;
        return total;
    }
}

let findarea = new FindArea(12,12);
console.log(findarea.area() + ' m')






/* 
    Interfaces and Classes
*/

interface Point {
    x: number,
    y: number,
    z?: number
}

class Point2D implements Point {
    x: number;
    y: number;

    constructor(x_axis: number, y_axis: number) {
        this.x = x_axis;
        this.y = y_axis;
    }

    vector() {
        console.log(`x: ${this.x}\ny: ${this.y}`)
    }

    product() {
        console.log(`Total: ${this.x * this.y}`)
    }
}

let point2D = new Point2D(10, 20);
// point2D.vector();
// point2D.product();


class Point3D implements Point {
    x: number;
    y: number;
    z: number;
    constructor(X: number, Y: number, Z: number) {
        this.x = X;
        this.y = Y;
        this.z = Z;
    }

    total() {
        let product = this.x * this.y * this.z;
        console.log(`Total: ${product}`)
    }

}


let point3D = new Point3D(40, 33, 9);
point3D.x = 10; // value redeclear
// point3D.total();


