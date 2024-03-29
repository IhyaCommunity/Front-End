/* 
    Optional Parameter
*/

function findAreaCircle(r: number, xyz?: string) {
    let PI: number = 3.14;
    let total = PI * (r * r) + " cm";
    console.log(total);
    // console.log(xyz);    
}

// findAreaCircle(20);








/*
    Default Parameter
*/

function fullName(firstName?: string, lastName: string = 'Usman') {
    console.log(`${firstName} ${lastName}`);
}
// fullName('Ali'); // both are correct
// fullName('Ali', 'Umar');








/* 
    Rest Parameter

    The rest parameter is an array which receives the arguments, store them into index order (start from 0)
*/

function getNames(firstName: string, ...argList: string[]) {
    console.log(`${firstName} ${argList} `);
    // console.log(argList[0]);    
}
getNames('Lists', 'foo', 'bar', 'baz');


function getList(...argNames: string[]) {

    for (let index = 0; index < argNames.length; index++) {
        console.log(`Args Names ${index} : ${argNames[index]}`);
    }
}
// getList('TypeScript', 'JavaScript', 'C#', 'C++');







/*
    Custom Types
*/
type NumberString = number | string;
type CallbackFunction = (x: number, y: number) => number;

function demoFunction(value: NumberString) {
}
demoFunction(12);
demoFunction('This is paragraph...');

let demoFunction2: CallbackFunction = function (x: number, y: number): number {
    return x * y;
}
demoFunction2(12, 1);



type N = number;
type S = string;
type B = boolean;

let xyz: N = 12;
let abc: S = 'qwerty';
let TypeScriptIsEasy: B = true;


type Point = (x: N, y?: N) => N;


let square: Point = (x) => {
    return x * x;
}



type myCustomType = number | string | boolean;
let simpleFunction = (z: myCustomType) => {

}


// Complex Functional-Object Example
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 4.99, 20],
    output: function (all: boolean): number[] {
        return this.data;
    }
}


// complex = {};

// Custom types or type alias

type COMPLEX = { data: number[], output: (all: boolean) => number[] };

let complex2: COMPLEX = {
    data: [50, 10.9, 233],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// console.log(complex2.data[0]);