
 interface Command {
    execute(): void;
}

class SimpleCommand implements Command {
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    public execute(): void {
        console.log(`Доброго дня, мене звати ${this.payload}. Сьогодні я буду вашим офіціантом`);
    }
}


class ComplexCommand implements Command {
    private chief: Chief;

    private mainCourse: string;

    private desert: string;

    constructor(chief: Chief, mainCourse: string, desert: string) {
        this.chief = chief;
        this.mainCourse = mainCourse;
        this.desert = desert;
    }

    public execute(): void {
        this.chief.doMainCourse(this.mainCourse);
        this.chief.doDesert(this.desert);
    }
}

class Chief {
    public doMainCourse(mainCourse: string): void {
        console.log(`${mainCourse} майже готовий!`);
    }

    public doDesert(desert: string): void {
        console.log(`${desert} теж майже готовий!`);
    }
}

class Waiter {
    private onStart: Command;

    private onFinish: Command;

    public bringMenu(command: Command): void {
        this.onStart = command;
    }

    public passOrderChief(command: Command): void {
        this.onFinish = command;
    }

    public doSomethingImportant(): void {

        if (this.onStart) {
            this.onStart.execute();
        }

        if (this.onFinish) {
            this.onFinish.execute();
        }
    }
}

const waiter = new Waiter();
waiter.bringMenu(new SimpleCommand('Ігор'));


const chief = new Chief();
waiter.passOrderChief(new ComplexCommand(chief, 'Борщ', 'Пиріг'));

waiter.doSomethingImportant();

// Доброго дня, мене звати Ігор. Сьогодні я буду вашим офіціантом
// Борщ майже готовий!
// Пиріг теж майже готовий!