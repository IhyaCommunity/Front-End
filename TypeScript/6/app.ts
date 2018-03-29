/* 
    Data Hiding aka Access modifiers
*/


/*
1 - public (A public data member has universal accessibility. Data members in
    a class are public by default.)

2 - private (Private data members are accessible only within the class that defines 
    these members. If an external class member tries to access a private member, the 
    compiler throws an error.)

3 - protected (A protected data member is accessible by the members within the same 
    class as that of the former and also by the members of the child classes.)
*/


class Bird {  // By default each member is public
    public name: string;
    public constructor(name: string) {
        this.name = name;
    }
    public fly(distance: number) {
        console.log(`${this.name} moved ${distance} m`);
    }
}

class Fish {
    private name: string; // it cannot be accessed from outside of its containing class
    constructor(fullName: string) {
        this.name = fullName;
    }

    private swim(distance: number) {
        console.log(`${this.name} moved ${distance} m`);
    }
}

let fish = new Fish('xyz');
// fish.name //  error TS2341: Property 'name' is private and only accessible within class 'Fish'
// fish.swim(12) // same ...


class GoldenFish extends Fish {
    constructor() {
        super('Gold Fish');
        // super.swim() // Property 'swim' is private and only accessible within class 'Fish'
    }
}
let goldenFish = new GoldenFish();
// console.log(goldenFish)




class Human {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Person extends Human {
    constructor(name: string) {
        super(name)
    }
}

let person = new Person('Ali');
// person.name // Property 'name' is protected and only accessible within class 'Human' and its subclasses.
// console.log(person)





/* 
    Encapsulation
*/
// Accessors


// example-1
let code: any = 'verySecurePassword';
class Security {
    private _code: any;

    get SecretCode(): number {
        return this._code;
    }

    set SecretCode(newCode: number) {
        if (code == 'verySecurePassword') {
            this._code = newCode;
            console.log('Messege: Acces Granted with Code: ' + newCode)
        } else {
            console.log('Messege: Acces Denied!');
        }
    }
}

let security = new Security();
// security.SecretCode = 110;



// example-2 


