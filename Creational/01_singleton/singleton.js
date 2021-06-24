var Matherland = /** @class */ (function () {
    function Matherland() {
    }
    Matherland.getCountry = function () {
        if (!Matherland.country) {
            Matherland.country = new Matherland();
        }
        return Matherland.country;
    };
    return Matherland;
}());
var s1 = Matherland.getCountry();
var s2 = Matherland.getCountry();
console.log(s1 === s2);
