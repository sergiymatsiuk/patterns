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
var AbstractHandler = /** @class */ (function () {
    function AbstractHandler() {
    }
    AbstractHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    AbstractHandler.prototype.handle = function (request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    };
    return AbstractHandler;
}());
var USA = /** @class */ (function (_super) {
    __extends(USA, _super);
    function USA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    USA.prototype.handle = function (request) {
        if (request === 'Washington') {
            return request + " this is my capital.";
        }
        return _super.prototype.handle.call(this, request);
    };
    return USA;
}(AbstractHandler));
var Germany = /** @class */ (function (_super) {
    __extends(Germany, _super);
    function Germany() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Germany.prototype.handle = function (request) {
        if (request === 'Berlin') {
            return request + " this is my capital.";
        }
        return _super.prototype.handle.call(this, request);
    };
    return Germany;
}(AbstractHandler));
var Ukraine = /** @class */ (function (_super) {
    __extends(Ukraine, _super);
    function Ukraine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ukraine.prototype.handle = function (request) {
        if (request === 'Kiev') {
            return request + " this is my capital.";
        }
        return _super.prototype.handle.call(this, request);
    };
    return Ukraine;
}(AbstractHandler));
function clientCode(handler) {
    var capitals = ['Washington', 'Kiev', 'Berlin', 'Barcelona'];
    for (var _i = 0, capitals_1 = capitals; _i < capitals_1.length; _i++) {
        var capital = capitals_1[_i];
        console.log(capital + "?");
        var result = handler.handle(capital);
        if (result) {
            console.log("  " + result);
        }
        else {
            console.log("  " + capital + " not the capital.");
        }
    }
}
var usa = new USA();
var germany = new Germany();
var ukraine = new Ukraine();
usa.setNext(germany).setNext(ukraine);
clientCode(usa);
console.log('');
clientCode(ukraine);
