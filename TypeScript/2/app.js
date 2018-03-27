// Types Assign 
var Value;
Value = 10;
var isOk;
isOk = false;
console.log(Value); // both technically same
console.log(Value);
console.log(isOk);
console.log(isOk);
// Types in Function
function Sum(x, y) {
    console.log(x + y);
}
// Sum(1, 2);
// Lamda Function
var product = function (a, b) {
    return a * b;
};
product(20, 7);
// Arrow Function
var randomNumGenerate = function () {
    var RandomNumber = Math.random();
    console.log(RandomNumber);
};
randomNumGenerate();
// Let Scope
function Scope() {
    for (var i = 0; i < 10; i++) {
        console.log("Value: " + i);
    }
    // console.log(i);
}
// Enums
// An enum is a way to organize a collection of related values.
var Cars;
(function (Cars) {
    Cars[Cars["Mehan"] = 100000] = "Mehan";
    Cars[Cars["Civic"] = 100001] = "Civic";
    Cars[Cars["City"] = 100002] = "City";
})(Cars || (Cars = {}));
// console.log(Cars.Civic);
