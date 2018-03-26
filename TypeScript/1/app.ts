// Strong Typing

let Name: string = "Arslan"; // string type
let isDone: boolean = true; // boolean type
let value: number = 100; // number type

let Names: string[] = ["Zain", "Ali", "Arslan"]; // string array type
let arr: Array<number> = [1, 2, 3]; // alternative

let anyArray: any[] = [1, 2, 3, false, 'abc']; // any array type
let typedArray: [number, string] = [123, 'abc']; // multi type array

let multiType: number | string; // union type



// Types Assign 
var Value;
Value = 10;
var isOk;
isOk = false;

console.log((<number>value)); // both technically same
console.log((Value as number));

console.log((<boolean>isOk));
console.log((isOk as boolean));



// Types in Function

function Sum(x: number, y: number): void {
    console.log(x + y);
}

// Sum(1, 2);




// Let Scope
function Scope() {
    for (let i = 0; i < 10; i++) {
        console.log(`Value: ${i}`);
    }
    console.log(i);
}



// Optional Prams

function findAreaCirlce(r: number, xyz?: any) {
    let PI = 3.14;
    let total = PI * (r * r) + " cm";
    console.log(total);
}

findAreaCirlce(20);



// Enums

enum Cars {
    Mehan = 100000,
    Civic,
    City
}
// console.log(Cars.Civic);




