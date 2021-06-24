var CarRental = /** @class */ (function () {
    function CarRental(brand, model) {
        this.brand = brand;
        this.model = model;
        this.airConditioning = false;
    }
    CarRental.prototype.addAirConditioning = function () {
        this.airConditioning = true;
        return this;
    };
    CarRental.prototype.addNumberOfDays = function (numberOfDays) {
        this.numberOfDays = numberOfDays;
        return this;
    };
    CarRental.prototype.setColor = function (color) {
        this.color = color;
        return this;
    };
    CarRental.prototype.order = function () {
        return this;
    };
    return CarRental;
}());
var car = new CarRental('bmw', 'x5').addAirConditioning().addNumberOfDays(2).setColor('black').order();
console.log(car);
