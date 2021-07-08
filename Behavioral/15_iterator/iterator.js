"use strict";
exports.__esModule = true;
var SimpleIterator = /** @class */ (function () {
    function SimpleIterator(collection) {
        this.position = 0;
        this.collection = collection;
    }
    SimpleIterator.prototype.nextNumber = function () {
        var result = this.collection[this.position];
        this.position += 1;
        return result;
    };
    SimpleIterator.prototype.hasNext = function () {
        return this.position < this.collection.length;
    };
    return SimpleIterator;
}());
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(collection) {
        this.collection = [];
        this.collection = collection;
    }
    NumbersCollection.prototype.createIterator = function () {
        return new SimpleIterator(this.collection);
    };
    return NumbersCollection;
}());
var numberArray = [75, 85, 95, 105, 225, 355, 455], numbers = new NumbersCollection(numberArray), it = numbers.createIterator();
while (it.hasNext()) {
    console.log(it.nextNumber());
}
// 75
// 85
// 95
// 105
// 225
// 355
// 455
