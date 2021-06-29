var ParentsFacade = /** @class */ (function () {
    function ParentsFacade() {
    }
    ParentsFacade.prototype.getGoodMarks = function () {
        new Mother().happy();
        new Father().givesMoney();
    };
    ParentsFacade.prototype.getBadMarks = function () {
        new Mother().cry();
        new Father().withoutMoney();
    };
    return ParentsFacade;
}());
var Mother = /** @class */ (function () {
    function Mother() {
    }
    Mother.prototype.happy = function () {
        console.log('You best in the world)');
    };
    Mother.prototype.cry = function () {
        console.log('Today without icecreame!)');
    };
    return Mother;
}());
var Father = /** @class */ (function () {
    function Father() {
    }
    Father.prototype.givesMoney = function () {
        console.log('20 dollars for you');
    };
    Father.prototype.withoutMoney = function () {
        console.log('Week without money!');
    };
    return Father;
}());
var firstDayAtSchool = new ParentsFacade().getGoodMarks();
// You best in the world)
// 20 dollars for you
var secondDaysAtSchool = new ParentsFacade().getBadMarks();
// Today without icecreame!)
// Week without money!
