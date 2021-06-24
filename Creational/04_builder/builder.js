var ConcreteCofe1 = /** @class */ (function () {
    function ConcreteCofe1() {
        this.reset();
    }
    ConcreteCofe1.prototype.reset = function () {
        this.product = new Cofe1();
    };
    ConcreteCofe1.prototype.cofeWithMilk = function () {
        this.product.parts.push('with milk');
    };
    ConcreteCofe1.prototype.cofeWithSuger = function () {
        this.product.parts.push('with sugar');
    };
    ConcreteCofe1.prototype.cofeWithChocolate = function () {
        this.product.parts.push('with chocolate');
    };
    ConcreteCofe1.prototype.getProduct = function () {
        var result = this.product;
        this.reset();
        return result;
    };
    return ConcreteCofe1;
}());
var Cofe1 = /** @class */ (function () {
    function Cofe1() {
        this.parts = [];
    }
    Cofe1.prototype.listParts = function () {
        console.log("Cofe " + this.parts.join(', ') + "\n");
    };
    return Cofe1;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.buildMinimalProduct = function () {
        this.builder.cofeWithMilk();
    };
    Director.prototype.buildFullProduct = function () {
        this.builder.cofeWithMilk();
        this.builder.cofeWithSuger();
        this.builder.cofeWithChocolate();
    };
    return Director;
}());
function clientCode(director) {
    var builder = new ConcreteCofe1();
    director.setBuilder(builder);
    console.log('Standard basic cofe:');
    director.buildMinimalProduct();
    builder.getProduct().listParts();
    console.log('Standard full cofe:');
    director.buildFullProduct();
    builder.getProduct().listParts();
    console.log('Custom product:');
    builder.cofeWithMilk();
    builder.cofeWithChocolate();
    builder.getProduct().listParts();
}
var director = new Director();
clientCode(director);
