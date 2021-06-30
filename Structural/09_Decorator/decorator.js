// abstract class Car{
//     public description: string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ConcreteComponrnt = /** @class */ (function () {
    function ConcreteComponrnt() {
    }
    ConcreteComponrnt.prototype.operation = function () {
        return 'Ось ваше замовлення!';
    };
    return ConcreteComponrnt;
}());
var Decorator = /** @class */ (function () {
    function Decorator(component) {
        this.component = component;
    }
    Decorator.prototype.operation = function () {
        return this.component.operation();
    };
    return Decorator;
}());
var ConcreteDecoratorA = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorA, _super);
    function ConcreteDecoratorA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteDecoratorA.prototype.operation = function () {
        return _super.prototype.operation.call(this) + " \u041F\u043B\u044E\u0441 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430!";
    };
    return ConcreteDecoratorA;
}(Decorator));
var ConcreteDecoratorB = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorB, _super);
    function ConcreteDecoratorB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteDecoratorB.prototype.operation = function () {
        return _super.prototype.operation.call(this) + " \u041F\u043B\u044E\u0441 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0435 \u043F\u0430\u043A\u0443\u0432\u0430\u043D\u043D\u044F!";
    };
    return ConcreteDecoratorB;
}(Decorator));
var simple = new ConcreteComponrnt();
console.log(simple.operation());
var max = new ConcreteDecoratorA(simple);
var maxOrder = new ConcreteDecoratorB(max);
console.log(maxOrder.operation());
