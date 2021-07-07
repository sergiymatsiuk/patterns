var SomeString = /** @class */ (function () {
    function SomeString(strategy) {
        this.strategy = strategy;
    }
    SomeString.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    SomeString.prototype.doSomeLogic = function () {
        var result = this.strategy.doAlgorithm('Hello World!');
        console.log(result);
    };
    return SomeString;
}());
var UpperCase = /** @class */ (function () {
    function UpperCase() {
    }
    UpperCase.prototype.doAlgorithm = function (data) {
        return data.toUpperCase();
    };
    return UpperCase;
}());
var LowerCase = /** @class */ (function () {
    function LowerCase() {
    }
    LowerCase.prototype.doAlgorithm = function (data) {
        return data.toLowerCase();
    };
    return LowerCase;
}());
var context = new SomeString(new UpperCase());
context.doSomeLogic();
context.setStrategy(new LowerCase());
context.doSomeLogic();
