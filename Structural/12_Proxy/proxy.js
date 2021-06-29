var DirectorProxy = /** @class */ (function () {
    function DirectorProxy() {
        this.resource = new Director();
    }
    DirectorProxy.prototype.fetch = function () {
        console.log('Доброго дня! Я секретар, я вас слухаю!');
        this.resource.fetch();
    };
    return DirectorProxy;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.fetch = function () {
        console.log('Доброго дня! Я директор, слухаю вас!');
    };
    return Director;
}());
var directorAnswer = new DirectorProxy();
directorAnswer.fetch();
