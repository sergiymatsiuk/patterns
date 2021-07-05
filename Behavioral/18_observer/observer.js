// interface Competition {
//     join(observer: Observer): void;
//     attempt(): void;
// }
var MainCompetition = /** @class */ (function () {
    function MainCompetition(weight) {
        this.observers = [];
        this.weight = weight;
    }
    MainCompetition.prototype.join = function (observer) {
        this.observers.push(observer);
    };
    MainCompetition.prototype.attempt = function () {
        console.log("\u0412\u0410\u0413\u0410 \u0413\u0410\u041D\u0422\u0415\u041B\u0406 " + this.weight);
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    return MainCompetition;
}());
var YoungSportsman = /** @class */ (function () {
    function YoungSportsman() {
    }
    YoungSportsman.prototype.update = function (subject) {
        if (subject instanceof MainCompetition && subject.weight < 45) {
            console.log('МОЛОДИЙ СПОРТСМЕН: я зможу підняти цю вагу!');
        }
    };
    return YoungSportsman;
}());
var OldSportsman = /** @class */ (function () {
    function OldSportsman() {
    }
    OldSportsman.prototype.update = function (subject) {
        if (subject instanceof MainCompetition && subject.weight < 55) {
            console.log('ДОСВІДЧЕНИЙ СПОРТСМЕН: я зможу підняти цю вагу!');
        }
    };
    return OldSportsman;
}());
var competition = new MainCompetition(30);
var young = new YoungSportsman();
competition.join(young);
var old = new OldSportsman();
competition.join(old);
competition.attempt();
// ВАГА ГАНТЕЛІ 30
// МОЛОДИЙ СПОРТСМЕН: я зможу підняти цю вагу!
// ДОСВІДЧЕНИЙ СПОРТСМЕН: я зможу підняти цю вагу!
competition.weight = 50;
competition.attempt();
// ВАГА ГАНТЕЛІ 50
// ДОСВІДЧЕНИЙ СПОРТСМЕН: я зможу підняти цю вагу!
