var Student = /** @class */ (function () {
    function Student(state) {
        this.state = state;
        console.log("\u041C\u043E\u0454 \u0447\u0438\u0441\u043B\u043E: " + state);
    }
    Student.prototype.myNumber = function () {
        this.state = this.generateRandomString();
        console.log("\u041C\u043E\u0454 \u0447\u0438\u0441\u043B\u043E \u0437\u043C\u0456\u043D\u0435\u043D\u0435 \u043D\u0430: " + this.state);
    };
    Student.prototype.generateRandomString = function () {
        return Math.floor(Math.random() * 100).toString();
    };
    Student.prototype.save = function () {
        return new ConcreteMemento(this.state);
    };
    Student.prototype.restore = function (memento) {
        this.state = memento.getState();
        console.log("\u041C\u043E\u0454 \u0447\u0438\u0441\u043B\u043E \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u0442\u044C\u0441\u044F \u0434\u043E \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E: " + this.state);
    };
    return Student;
}());
var ConcreteMemento = /** @class */ (function () {
    function ConcreteMemento(state) {
        this.state = state;
    }
    ConcreteMemento.prototype.getState = function () {
        return this.state;
    };
    return ConcreteMemento;
}());
var Teacher = /** @class */ (function () {
    function Teacher(student) {
        this.mementos = [];
        this.student = student;
    }
    Teacher.prototype.backup = function () {
        this.mementos.push(this.student.save());
    };
    Teacher.prototype.backNumber = function () {
        if (!this.mementos.length) {
            return;
        }
        var memento = this.mementos.pop();
        console.log("\u0412\u0418\u041A\u041B\u0410\u0414\u0410\u0427: \u0437\u043C\u0456\u043D\u0438 \u0441\u0432\u043E\u0454 \u0447\u0438\u0441\u043B\u043E \u043D\u0430 \u043C\u0438\u043D\u0443\u043B\u0435 " + memento.getState());
        this.student.restore(memento);
    };
    return Teacher;
}());
var student = new Student('47');
var teacher = new Teacher(student);
teacher.backup();
student.myNumber();
teacher.backup();
student.myNumber();
teacher.backup();
student.myNumber();
teacher.backNumber();
teacher.backNumber();
