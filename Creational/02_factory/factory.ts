
interface Product {
    operation(): string;
}

// CREATOR
abstract class Delivery {

    public abstract factoryMethod() : Product;
    public anOperation() : string {
        const product = this.factoryMethod();
        return product.operation();
    }
}

class SeaDelivery extends Delivery {

    public factoryMethod() : Product {
        return new SeaDeliveryProduct ();
    }
}

class RoadDelivery extends Delivery {

    public factoryMethod(): Product {
        return new RoadDeliveryProduct ();
    }
}


class SeaDeliveryProduct implements Product {

    public operation(): string {
        return 'delivery to sea'
    }
}

class RoadDeliveryProduct implements Product {

    public operation() : string {
        return 'delivery to road'
    }
}

function clientCode (creator: Delivery) {

    console.log(creator.anOperation());

}

clientCode(new SeaDelivery());

clientCode(new RoadDelivery());

