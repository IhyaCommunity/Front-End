// Types
var Name = "Arslan"; // string type
var isDone = true; // boolean type
var value = 100; // number type
var Names = ["Zain", "Ali", "Arslan"]; // string array type
var anyArray = [1, 2, 3, false, 'abc']; // any array type
var typedArray = [123, 'abc']; // multi type array
var arr = [1, 2, 3]; // number array type
var multiType; // union type
// Function
function Sum(x, y) {
    console.log(x + y);
}
// Sum(1, 2);
function Scope() {
    for (var i = 0; i < 10; i++) {
        console.log("Value: " + i);
    }
    // console.log(i);
}
// optional pram type
function findAreaCirlce(r) {
    var PI = 3.14;
    var total = PI * (r * r) + " cm";
    console.log(total);
}
// findAreaCirlce(20);
// enums
var Cars;
(function (Cars) {
    Cars[Cars["Mehan"] = 100000] = "Mehan";
    Cars[Cars["Civic"] = 100001] = "Civic";
    Cars[Cars["City"] = 100002] = "City";
})(Cars || (Cars = {}));
// console.log(Cars.Civic);
// types assign 
var Value;
Value = 10;
console.log(value);
console.log(Value);
