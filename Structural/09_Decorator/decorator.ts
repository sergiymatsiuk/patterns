
interface Order {
    operation() : string;
}

class SimpleOrder implements Order {
    public operation() : string {
        return 'Ось ваше замовлення!';
    }
}

class Decorator implements Order {
    protected order : Order;

    constructor (order : Order) {
        this.order = order;
    }

    public operation(): string {
        return this.order.operation();
    }
}

class Delivery extends Decorator {
    public operation() : string {
        return `${super.operation()} Плюс безкоштовна доставка!`;
    }
}

class Packaging extends Decorator {
    public operation() : string {
        return `${super.operation()} Плюс безкоштовне пакування!`;
    }
}

const simple = new SimpleOrder();
console.log(simple.operation());
// Ось ваше замовлення!

const max = new Delivery(simple);
const maxOrder = new Packaging(max);
console.log(maxOrder.operation());
// Ось ваше замовлення! Плюс безкоштовна доставка! Плюс безкоштовне пакування!