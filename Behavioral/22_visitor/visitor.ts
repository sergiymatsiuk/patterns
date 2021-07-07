interface Parents {
    accept (visitor : Visitor): void;
}

class Father implements Parents {
    public accept(visitor : Visitor) {
        visitor.withFather(this);
    }

    public fatherMethods() : string {
        return 'Тато'
    }

}

class Mother implements Parents {

    public accept(visitor: Visitor): void {
        visitor.withMother(this);
    }

    public motherMethods(): string {
        return 'Мама';
    }
}

interface Visitor {
    withFather(element: Father): void;

    withMother(element: Mother): void;
}

class Child implements Visitor {
    public withFather(element: Father): void {
        console.log(`${element.fatherMethods()} купить мені шоколадку та морозиво`);
    }

    public withMother(element: Mother): void {
        console.log(`${element.motherMethods()} піде зі мною гуляти`);
    }
}


function clientCode(parents: Parents, visitor: Visitor) {
        parents.accept(visitor);
}

const dad = new Father();
const mom = new Mother();

const child = new Child();

clientCode(dad, child);
// Тато купить мені шоколадку та морозиво

clientCode(mom, child);
// Мама піде зі мною гуляти
