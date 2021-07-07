var Father = /** @class */ (function () {
    function Father() {
    }
    Father.prototype.accept = function (visitor) {
        visitor.withFather(this);
    };
    Father.prototype.fatherMethods = function () {
        return 'Тато';
    };
    return Father;
}());
var Mother = /** @class */ (function () {
    function Mother() {
    }
    Mother.prototype.accept = function (visitor) {
        visitor.withMother(this);
    };
    Mother.prototype.motherMethods = function () {
        return 'Мама';
    };
    return Mother;
}());
var Child = /** @class */ (function () {
    function Child() {
    }
    Child.prototype.withFather = function (element) {
        console.log(element.fatherMethods() + " \u043A\u0443\u043F\u0438\u0442\u044C \u043C\u0435\u043D\u0456 \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043A\u0443 \u0442\u0430 \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u043E");
    };
    Child.prototype.withMother = function (element) {
        console.log(element.motherMethods() + " + \u043F\u0456\u0434\u0435 \u0437\u0456 \u043C\u043D\u043E\u044E \u0433\u0443\u043B\u044F\u0442\u0438");
    };
    return Child;
}());
function clientCode(dad, visitor) {
    dad.accept(visitor);
}
var dad = new Father();
var mom = new Mother();
var child = new Child();
clientCode(dad, child);
clientCode(mom, child);
