class Student {
    private state : State; 

    constructor ( state : State ) {
        this.transitionTo(state);
    }

    public transitionTo(state : State) {
        this.state = state;
        this.state.setContext(this);
    }

    public positiveRequest() : void {
        this.state.positiveAnswer();
    }

    public negativeRequest() : void {
        this.state.negativeAnswer();
    }
}

abstract class State {
    protected student : Student;

    public setContext(student : Student){
        this.student = student;
    }

    public abstract positiveAnswer () : void ;

    public abstract negativeAnswer () : void;
}

class Teacher extends State {

    public positiveAnswer() : void {
        console.log('Good work! Go to director!');
        this.student.transitionTo(new Director());
    }

    public negativeAnswer() : void {
        console.log('Finish the work, there are mistakes!');
    }
}

class Director extends State {

    public positiveAnswer(): void {
        console.log('Good work!');
    }

    public negativeAnswer(): void {
        console.log('Bad work! Go to teacher, and finish work!');
        this.student.transitionTo(new Teacher());
    }
}

const student = new Student (new Teacher());

student.positiveRequest();
student.negativeRequest();
student.negativeRequest();

// TEACHER: Good work! Go to director!
// DIRECTOR: Bad work! Go to teacher, and finish work!
// TEACHER: Finish the work, there are mistakes!