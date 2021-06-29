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
var SelectButton = /** @class */ (function () {
    function SelectButton(theme) {
        this.theme = theme;
    }
    return SelectButton;
}());
var LightMode = /** @class */ (function () {
    function LightMode() {
    }
    LightMode.prototype.background = function () { return "white"; };
    LightMode.prototype.lineColor = function () { return "black"; };
    return LightMode;
}());
var DarkMode = /** @class */ (function () {
    function DarkMode() {
    }
    DarkMode.prototype.background = function () { return "black"; };
    DarkMode.prototype.lineColor = function () { return "white"; };
    return DarkMode;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(theme) {
        return _super.call(this, theme) || this;
    }
    Button.prototype.draw = function () {
        console.log("Drawing  button: ");
        console.log("backgroundcolor: " + this.theme.background() + ";");
        console.log("line color: " + this.theme.lineColor() + ";");
    };
    return Button;
}(SelectButton));
var light = new LightMode();
var dark = new DarkMode();
var buttonLigth = new Button(light);
var buttonDark = new Button(dark);
buttonDark.draw();
buttonLigth.draw();
// 
// Drawing  button:
// backgroundcolor: black;
// line color: white;
// Drawing  button:
// backgroundcolor: white;
// line color: black;
