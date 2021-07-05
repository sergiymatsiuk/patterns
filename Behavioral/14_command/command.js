var SimpleCommand = /** @class */ (function () {
    function SimpleCommand(payload) {
        this.payload = payload;
    }
    SimpleCommand.prototype.execute = function () {
        console.log("\u0414\u043E\u0431\u0440\u043E\u0433\u043E \u0434\u043D\u044F, \u043C\u0435\u043D\u0435 \u0437\u0432\u0430\u0442\u0438 " + this.payload + ". \u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u044F \u0431\u0443\u0434\u0443 \u0432\u0430\u0448\u0438\u043C \u043E\u0444\u0456\u0446\u0456\u0430\u043D\u0442\u043E\u043C");
    };
    return SimpleCommand;
}());
var ComplexCommand = /** @class */ (function () {
    function ComplexCommand(chief, mainCourse, desert) {
        this.chief = chief;
        this.mainCourse = mainCourse;
        this.desert = desert;
    }
    ComplexCommand.prototype.execute = function () {
        this.chief.doMainCourse(this.mainCourse);
        this.chief.doDesert(this.desert);
    };
    return ComplexCommand;
}());
var Chief = /** @class */ (function () {
    function Chief() {
    }
    Chief.prototype.doMainCourse = function (mainCourse) {
        console.log(mainCourse + " \u043C\u0430\u0439\u0436\u0435 \u0433\u043E\u0442\u043E\u0432\u0438\u0439!");
    };
    Chief.prototype.doDesert = function (desert) {
        console.log(desert + " \u0442\u0435\u0436 \u043C\u0430\u0439\u0436\u0435 \u0433\u043E\u0442\u043E\u0432\u0438\u0439!");
    };
    return Chief;
}());
var Waiter = /** @class */ (function () {
    function Waiter() {
    }
    Waiter.prototype.bringMenu = function (command) {
        this.onStart = command;
    };
    Waiter.prototype.passOrderChief = function (command) {
        this.onFinish = command;
    };
    Waiter.prototype.doSomethingImportant = function () {
        if (this.onStart) {
            this.onStart.execute();
        }
        if (this.onFinish) {
            this.onFinish.execute();
        }
    };
    return Waiter;
}());
var waiter = new Waiter();
waiter.bringMenu(new SimpleCommand('Ігор'));
var chief = new Chief();
waiter.passOrderChief(new ComplexCommand(chief, 'Борщ', 'Пиріг'));
waiter.doSomethingImportant();
// Доброго дня, мене звати Ігор. Сьогодні я буду вашим офіціантом
// Борщ майже готовий!
// Пиріг теж майже готовий!
