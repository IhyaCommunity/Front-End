// Types

let Name: string = "Arslan"; // string type
let isDone: boolean = true; // boolean type
let value: number = 100; // number type
let Names: string[] = ["Zain", "Ali", "Arslan"]; // string array type
let anyArray: any[] = [1, 2, 3, false, 'abc']; // any array type
let typedArray: [number, string] = [123, 'abc']; // multi type array
let arr: Array<number> = [1, 2, 3]; // number array type
let multiType: number | string; // union type


// Function

function Sum(x: number, y: number): void {
    console.log(x + y);
}

// Sum(1, 2);

function Scope() {
    for (let i = 0; i < 10; i++) {
        console.log(`Value: ${i}`);
    }
    // console.log(i);
}

// optional pram type

function findAreaCirlce(r: number) {
    let PI = 3.14;
    let total = PI * (r * r) + " cm";
    console.log(total);
}

// findAreaCirlce(20);



// enums

enum Cars {
    Mehan = 100000,
    Civic,
    City
}
// console.log(Cars.Civic);


// types assign 
var Value;
Value = 10;

console.log((<number>value));
console.log((Value as number));



