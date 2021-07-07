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
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    AbstractClass.prototype.templateMethod = function () {
        this.addRoll();
        this.addMainPart();
        this.addCheese();
        this.addMustard();
        this.addKetchup();
        this.addSause();
    };
    AbstractClass.prototype.addRoll = function () {
        console.log('Булочка');
    };
    AbstractClass.prototype.addCheese = function () {
        console.log('Сир');
    };
    AbstractClass.prototype.addKetchup = function () {
        console.log('Кетчуп');
    };
    AbstractClass.prototype.addSause = function () { };
    return AbstractClass;
}());
var ConcreteClass1 = /** @class */ (function (_super) {
    __extends(ConcreteClass1, _super);
    function ConcreteClass1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteClass1.prototype.addMainPart = function () {
        console.log('Бекон');
    };
    ConcreteClass1.prototype.addMustard = function () {
        console.log('Гірциця');
    };
    return ConcreteClass1;
}(AbstractClass));
var ConcreteClass2 = /** @class */ (function (_super) {
    __extends(ConcreteClass2, _super);
    function ConcreteClass2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteClass2.prototype.addMainPart = function () {
        console.log('Котлета');
    };
    ConcreteClass2.prototype.addMustard = function () {
        console.log('Без гірциці');
    };
    return ConcreteClass2;
}(AbstractClass));
function clientCode(abstractClass) {
    console.log('БУРГЕР:');
    abstractClass.templateMethod();
}
clientCode(new ConcreteClass1());
console.log('');
clientCode(new ConcreteClass2());
