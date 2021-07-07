abstract class AbstractClass {

    public templateMethod(): void {
        this.addRoll();
        this.addMainPart();
        this.addCheese();
        this.addMustard();
        this.addKetchup();
    }

    protected addRoll(): void {
        console.log('Булочка');
    }

    protected addCheese(): void {
        console.log('Сир');
    }

    protected addKetchup(): void {
        console.log('Кетчуп');
    }

    protected abstract addMainPart(): void;

    protected abstract addMustard(): void;
}

class BurgerWithBacon extends AbstractClass {
    protected addMainPart(): void {
        console.log('Бекон');
    }

    protected addMustard(): void {
        console.log('Гірциця');
    }
}

class BurgerWithCutlet extends AbstractClass {
    protected addMainPart(): void {
        console.log('Котлета');
    }

    protected addMustard(): void {
        console.log('Без гірциці');
    }

}

function clientCode(abstractClass: AbstractClass) {  
    console.log('БУРГЕР:')
    abstractClass.templateMethod();
}

clientCode(new BurgerWithBacon());
// БУРГЕР:
// Булочка
// Бекон
// Сир
// Гірциця
// Кетчуп

clientCode(new BurgerWithCutlet());
// БУРГЕР:
// Булочка
// Котлета
// Сир
// Без гірциці
// Кетчуп