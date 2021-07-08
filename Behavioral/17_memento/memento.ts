class Student {
    private state : string ;

    constructor (state : string) {
        this.state = state ;
        console.log(`Моє число: ${state}`);
    }

    public myNumber(): void {
        this.state = this.randomNumber();
        console.log(`Моє число змінене на: ${this.state}`);
    }

    private randomNumber(): string {
        return Math.floor(Math.random()*100).toString();
    }

    public save() : Memento {
        return new ConcreteMemento(this.state)
    }

    public restore(memento: Memento): void {
        this.state = memento.getState();
        console.log(`Моє число повернеться до минулого: ${this.state}`);
    }
}

interface Memento {
    getState(): string;
}

class ConcreteMemento implements Memento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }

}

class Teacher {
    private mementos : Memento[] = [];

    private student: Student ;

    constructor (student: Student) {
        this.student = student;
    }

    public backup(): void {
        this.mementos.push(this.student.save());
    }

    public backNumber(): void {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();

        console.log(`ВИКЛАДАЧ: зміни своє число на минуле ${memento.getState()}`);
        this.student.restore(memento);
    }
}

const student = new Student('47');
const teacher = new Teacher(student);

teacher.backup();
student.myNumber();

teacher.backup();
student.myNumber();

teacher.backup();
student.myNumber();

teacher.backNumber();

teacher.backNumber();

// Моє число: 47

// Моє число змінене на: 82
// Моє число змінене на: 60
// Моє число змінене на: 53

// ВИКЛАДАЧ: зміни своє число на минуле 60
// Моє число повернеться до минулого: 60

// ВИКЛАДАЧ: зміни своє число на минуле 82
// Моє число повернеться до минулого: 82
