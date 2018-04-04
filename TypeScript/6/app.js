/*
    Data Hiding aka Access modifiers
*/
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
/*
1 - public (A public data member has universal accessibility. Data members in
    a class are public by default.)

2 - private (Private data members are accessible only within the class that defines
    these members. If an external class member tries to access a private member, the
    compiler throws an error.)

3 - protected (A protected data member is accessible by the members within the same
    class as that of the former and also by the members of the child classes.)
*/
var Bird = /** @class */ (function () {
    function Bird(name) {
        this.name = name;
    }
    Bird.prototype.fly = function (distance) {
        console.log(this.name + " moved " + distance + " m");
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish(fullName) {
        this.name = fullName;
    }
    Fish.prototype.swim = function (distance) {
        console.log(this.name + " moved " + distance + " m");
    };
    return Fish;
}());
var fish = new Fish('xyz');
// fish.name //  error TS2341: Property 'name' is private and only accessible within class 'Fish'
// fish.swim(12) // same ...
var GoldenFish = /** @class */ (function (_super) {
    __extends(GoldenFish, _super);
    function GoldenFish() {
        return _super.call(this, 'Gold Fish') || this;
        // super.swim() // Property 'swim' is private and only accessible within class 'Fish'
    }
    return GoldenFish;
}(Fish));
var goldenFish = new GoldenFish();
// console.log(goldenFish)
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    return Human;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name) {
        return _super.call(this, name) || this;
    }
    return Person;
}(Human));
var person = new Person('Ali');
// person.name // Property 'name' is protected and only accessible within class 'Human' and its subclasses.
// console.log(person)
/*
    Encapsulation
*/
// Accessors
// example-1
var code = 'verySecurePassword';
var Security = /** @class */ (function () {
    function Security() {
    }
    Object.defineProperty(Security.prototype, "SecretCode", {
        get: function () {
            return this._code;
        },
        set: function (newCode) {
            if (code == 'verySecurePassword') {
                this._code = newCode;
                console.log('Messege: Acces Granted with Code: ' + newCode);
            }
            else {
                console.log('Messege: Acces Denied!');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Security;
}());
var security = new Security();
// security.SecretCode = 110;
// example-2 
