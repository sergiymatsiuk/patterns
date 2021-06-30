var Soldier = /** @class */ (function () {
    function Soldier() {
    }
    Soldier.prototype.show = function () {
        return 'Soldier';
    };
    return Soldier;
}());
var Composite = /** @class */ (function () {
    function Composite() {
        this.children = [];
    }
    Composite.prototype.add = function (component) {
        this.children.push(component);
    };
    Composite.prototype.show = function () {
        var results = [];
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            results.push(child.show());
        }
        return " Unit ( " + results.join(' + ') + " )";
    };
    return Composite;
}());
var simple = new Soldier();
console.log(simple.show());
// Soldier
var army = new Composite();
var presidentUnit = new Composite();
presidentUnit.add(new Soldier());
presidentUnit.add(new Soldier());
presidentUnit.add(new Soldier());
var tankUnit = new Composite();
tankUnit.add(new Soldier());
tankUnit.add(new Soldier());
army.add(presidentUnit);
army.add(tankUnit);
console.log(army.show());
// Unit (  Unit ( Soldier + Soldier + Soldier ) +  Unit ( Soldier + Soldier ) )
