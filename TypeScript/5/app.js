var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    // Creating & Initializing object
    function Animal(theName) {
        this.name = theName;
    }
    // funtion or behaviour
    Animal.prototype.walk = function (distance) {
        console.log("Animal name is " + this.name + ". Walking " + distance + " km/h");
    };
    return Animal;
}());
var animal = new Animal('kitty'); // contain memory on heap
// console.log(animal);
// console.log(animal.name)
// console.log(animal.walk) // output: [Function]
// animal.walk(12);
// inherit base class to derived class
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(theName) {
        return _super.call(this, theName) || this;
    }
    Snake.prototype.walk = function () {
        console.warn("Snakes don't walk.");
    };
    return Snake;
}(Animal));
var snake = new Snake('Python');
// snake.walk()
