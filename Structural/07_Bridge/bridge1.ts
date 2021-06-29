
interface Theme
{
    background(): string;
    lineColor(): string;

}

abstract class SelectButton
{
    protected theme: Theme;

    constructor(theme: Theme)
    {
        this.theme = theme;
    }

    public abstract draw(): void;

}


class LightMode implements Theme
{
    background(): string { return "white"; }
    lineColor(): string { return "black"; }
}


class DarkMode implements Theme
{
    background(): string { return "black"; }
    lineColor(): string { return "white"; }
}


class Button extends SelectButton
{
    constructor(theme: Theme)
    {
        super(theme);
    }

    public draw() 
    {
        console.log("Drawing  button: ");
        console.log(`backgroundcolor: ${this.theme.background()};`);
        console.log(`line color: ${this.theme.lineColor()};`);

    }    
}



const light = new LightMode();
const dark = new DarkMode();

const buttonLigth = new Button(light);
const buttonDark = new Button(dark);

buttonDark.draw();
buttonLigth.draw();

// 
// Drawing  button:
// backgroundcolor: black;
// line color: white;

// Drawing  button:
// backgroundcolor: white;
// line color: black;