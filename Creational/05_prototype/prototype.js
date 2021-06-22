var Car = /** @class */ (function () {
    function Car(model, price, color) {
        this.model = model;
        this.price = price;
        this.color = color;
    }
    Car.prototype.clone = function () {
        return new Car(this.model, this.price, this.color);
    };
    return Car;
}());
var car1 = new Car('audi', 12000, 'black');
var cloneCar1 = car1.clone();
cloneCar1.color = 'red';
console.log(car1);
console.log(cloneCar1);
