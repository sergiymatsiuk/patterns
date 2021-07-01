var Flyweight = /** @class */ (function () {
    function Flyweight(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
    return Flyweight;
}());
var FlyweightFactory = /** @class */ (function () {
    function FlyweightFactory() {
        this.flyweights = {};
    }
    FlyweightFactory.prototype.checkOfCar = function (brand, model, color) {
        if (!this.flyweights[brand + ' ' + model]) {
            this.flyweights[brand + ' ' + model] = new Flyweight(brand, model, color);
        }
        return this.flyweights[brand + ' ' + model];
    };
    FlyweightFactory.prototype.showFlyweights = function () {
        console.log(this.flyweights);
    };
    return FlyweightFactory;
}());
var factory = new FlyweightFactory();
var Car = /** @class */ (function () {
    function Car(brand, model, color, price, maxSpeed) {
        this.flyweight = factory.checkOfCar(brand, model, color);
    }
    return Car;
}());
var cars = [
    new Car('BMW', 'X5', 'black', 15000, 220),
    new Car('Audi', 'Q8', 'black', 15000, 220),
    new Car('BMW', 'X5', 'black', 20000, 180),
    new Car('Mercedes', 'GLS350', 'white', 30000, 250),
    new Car('Tesla', 'model X', 'red', 27000, 200),
];
factory.showFlyweights();
