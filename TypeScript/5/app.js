// Classes
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
var Person = /** @class */ (function () {
    function Person() {
        this.firstName = 'Ali';
        this.secondName = 'Irfan';
    }
    return Person;
}());
var person = new Person; // allocate memory
// console.log(person.firstName, person.secondName);
console.log(person instanceof Person);
var Wifi = /** @class */ (function () {
    function Wifi() {
        this.password = 0;
        this.ssid = 'empty';
    }
    Wifi.prototype.connect = function () {
        if (this.password == 0) {
            console.log('Enter password');
        }
        else if (this.ssid == 'empty') {
            console.log('Enter Wifi name');
        }
        else {
            console.log('User connect!');
            console.log('SSID: ' + this.ssid);
            console.log('Password: ' + this.password);
        }
    };
    return Wifi;
}());
var wifi = new Wifi();
wifi.ssid = 'FreeWifi';
wifi.password = 123321;
// wifi.connect();
console.log(wifi instanceof Person); //  really? output: false
// example 1
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
// console.log(animal.name);
// console.log(animal.walk) // output: [Function]
// animal.walk(12);
// inherit base class to derived class
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(SnakeName, Size) {
        if (Size === void 0) { Size = 0; }
        var _this = _super.call(this, SnakeName) || this;
        _this.size = Size;
        return _this;
    }
    Snake.prototype.SnakeSize = function () {
        console.log(this.size);
    };
    Snake.prototype.walk = function () {
        console.warn("Snakes don't walk.");
    };
    return Snake;
}(Animal));
var snake = new Snake('Python', 20);
// console.log(snake);
// console.log(snake.name)
// snake.walk()
// snake.SnakeSize()
// example 2
var ListIndex = /** @class */ (function () {
    function ListIndex() {
    }
    ListIndex.prototype.lists = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var i = 0; i < args.length; i++) {
            console.log("Argument " + i + " : " + args[i]);
        }
    };
    return ListIndex;
}());
var listIndex = new ListIndex();
var Point2D = /** @class */ (function () {
    function Point2D(x_axis, y_axis) {
        this.x = x_axis;
        this.y = y_axis;
    }
    Point2D.prototype.vector = function () {
        console.log("x: " + this.x + "\ny: " + this.y);
    };
    Point2D.prototype.product = function () {
        console.log("Total: " + this.x * this.y);
    };
    return Point2D;
}());
var point2D = new Point2D(10, 20);
// point2D.vector();
// point2D.product();
var Point3D = /** @class */ (function () {
    function Point3D(X, Y, Z) {
        this.x = X;
        this.y = Y;
        this.z = Z;
    }
    Point3D.prototype.total = function () {
        var product = this.x * this.y * this.z;
        console.log("Total: " + product);
    };
    return Point3D;
}());
var point3D = new Point3D(40, 33, 9);
point3D.x = 10; // value redeclear
// point3D.total();
