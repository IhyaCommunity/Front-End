/*
    Optional Parameter
*/
function findAreaCircle(r, xyz) {
    var PI = 3.14;
    var total = PI * (r * r) + " cm";
    console.log(total);
    // console.log(xyz);    
}
// findAreaCircle(20);
/*
    Default Parameter
*/
function fullName(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Usman'; }
    console.log(firstName + " " + lastName);
}
// fullName('Ali'); // both are correct
// fullName('Ali', 'Umar');
/*
    Rest Parameter

    The rest parameter is an array which receives the arguments, store them into index order (start from 0)
*/
function getNames(firstName) {
    var argList = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        argList[_i - 1] = arguments[_i];
    }
    console.log(firstName + " " + argList + " ");
    // console.log(argList[0]);    
}
getNames('Lists', 'foo', 'bar', 'baz');
function getList() {
    var argNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argNames[_i] = arguments[_i];
    }
    for (var index = 0; index < argNames.length; index++) {
        console.log("Args Names " + index + " : " + argNames[index]);
    }
}
function demoFunction(value) {
}
demoFunction(12);
demoFunction('This is paragraph...');
var demoFunction2 = function (x, y) {
    return x * y;
};
demoFunction2(12, 1);
var xyz = 12;
var abc = 'qwerty';
var TypeScriptIsEasy = true;
var square = function (x) {
    return x * x;
};
