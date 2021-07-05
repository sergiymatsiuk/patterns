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
var ConcreteMediator = /** @class */ (function () {
    function ConcreteMediator(referee, players) {
        this.referee = referee;
        this.referee.setMediator(this);
        this.players = players;
        this.players.setMediator(this);
    }
    ConcreteMediator.prototype.notify = function (sender, event) {
        if (event === 'stop game') {
            console.log('ПОСЕРЕДНИК: Гравці почули команду про зупинку гри!');
            this.players.playersStopGame();
        }
        if (event === 'score goal') {
            console.log('ПОСЕРЕДНИК: Суддя побачив, що забито гол!');
            this.referee.changeScore();
            this.players.playersStopGame();
        }
    };
    return ConcreteMediator;
}());
var BaseComponent = /** @class */ (function () {
    function BaseComponent(mediator) {
        if (mediator === void 0) { mediator = null; }
        this.mediator = mediator;
    }
    BaseComponent.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    return BaseComponent;
}());
var Referre = /** @class */ (function (_super) {
    __extends(Referre, _super);
    function Referre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Referre.prototype.stopGame = function () {
        console.log('Суддя зупинив гру!');
        this.mediator.notify(this, 'stop game');
    };
    Referre.prototype.changeScore = function () {
        console.log('Суддя показав на центр поля!');
    };
    return Referre;
}(BaseComponent));
var Players = /** @class */ (function (_super) {
    __extends(Players, _super);
    function Players() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Players.prototype.playersStopGame = function () {
        console.log('Гравці зупинилися!');
    };
    Players.prototype.playersScoreGoal = function () {
        console.log('Було забито гол!');
        this.mediator.notify(this, 'score goal');
    };
    return Players;
}(BaseComponent));
var c1 = new Referre();
var c2 = new Players();
var mediator = new ConcreteMediator(c1, c2);
c1.stopGame();
// Суддя зупинив гру!
// Гравці почули команду про зупинку гри!
// Гравці зупинилися!
c2.playersScoreGoal();
// Було забито гол!
// Суддя побачив, що забито гол!
// Суддя показав на центр поля!
// Гравці зупинилися!
