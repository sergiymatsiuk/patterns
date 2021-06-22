var Football = /** @class */ (function () {
    function Football() {
    }
    Football.prototype.createGameField = function () {
        return new FootballField();
    };
    Football.prototype.createGameBall = function () {
        return new FootballBall();
    };
    return Football;
}());
var Volleyball = /** @class */ (function () {
    function Volleyball() {
    }
    Volleyball.prototype.createGameField = function () {
        return new VolleyballField();
    };
    Volleyball.prototype.createGameBall = function () {
        return new VolleyballBall();
    };
    return Volleyball;
}());
var FootballField = /** @class */ (function () {
    function FootballField() {
    }
    FootballField.prototype.createField = function () {
        return 'Football field created!';
    };
    return FootballField;
}());
var VolleyballField = /** @class */ (function () {
    function VolleyballField() {
    }
    VolleyballField.prototype.createField = function () {
        return 'Volleyball field created!';
    };
    return VolleyballField;
}());
var FootballBall = /** @class */ (function () {
    function FootballBall() {
    }
    FootballBall.prototype.createBall = function () {
        return 'Football ball created!';
    };
    FootballBall.prototype.anotherCreateBall = function (collaborator) {
        var result = collaborator.createField();
        return result + "! Now you can play ball there!";
    };
    return FootballBall;
}());
var VolleyballBall = /** @class */ (function () {
    function VolleyballBall() {
    }
    VolleyballBall.prototype.createBall = function () {
        return 'Volleyball ball created!';
    };
    VolleyballBall.prototype.anotherCreateBall = function (collaborator) {
        var result = collaborator.createField();
        return result + "! Now you can play ball there!";
    };
    return VolleyballBall;
}());
function clientCode(factory) {
    var Ball = factory.createGameField();
    var Field = factory.createGameBall();
    console.log(Ball.createField());
    console.log(Field.createBall());
    console.log(Field.anotherCreateBall(Ball));
}
clientCode(new Football());
clientCode(new Volleyball());
