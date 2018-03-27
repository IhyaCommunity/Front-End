// Types Assign 
var Value;
Value = 10;
var isOk;
isOk = false;

console.log((<number>Value)); // both technically same
console.log((Value as number));

console.log((<boolean>isOk));
console.log((isOk as boolean));



// Types in Function

function Sum(x: number, y: number): void {
    console.log(x + y);
}

// Sum(1, 2);

// Lamda Function

let product = function (a: number, b: number): number {
    return a * b;
}

product(20, 7);

// Arrow Function

let randomNumGenerate = (): void => {
    let RandomNumber = Math.random();
    console.log(RandomNumber);
}

randomNumGenerate();




// Let Scope
function Scope() {
    for (let i = 0; i < 10; i++) {
        console.log(`Value: ${i}`);
    }
    // console.log(i);
}



// Optional Prams

function findAreaCircle(r: number, xyz?: number) {
    let PI = 3.14;
    let total = PI * (r * r) + " cm";
    console.log(total);
}

findAreaCircle(20);



// Enums
// An enum is a way to organize a collection of related values.
enum Cars {
    Mehan = 100000,
    Civic,
    City
}
// console.log(Cars.Civic);
