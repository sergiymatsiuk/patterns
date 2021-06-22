interface Cofe {
    cofeWithMilk(): void;
    cofeWithSuger(): void;
    cofeWithChocolate(): void;
}

class ConcreteCofe1 implements Cofe {

    private product: Cofe1;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Cofe1();
    }

    public cofeWithMilk(): void {
        this.product.parts.push('with milk');
    }

    public cofeWithSuger(): void {
        this.product.parts.push('with sugar');
    }

    public cofeWithChocolate(): void {
        this.product.parts.push('with chocolate');
    }

    public getProduct(): Cofe1 {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Cofe1 {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Cofe ${this.parts.join(', ')}\n`);
    }
}

class Director {
    private builder: Cofe;

    public setBuilder(builder:Cofe): void {
        this.builder = builder;
    }

    public buildMinimalProduct(): void {
        this.builder.cofeWithMilk();
    }

    public buildFullProduct(): void {
        this.builder.cofeWithMilk();
        this.builder.cofeWithSuger();
        this.builder.cofeWithChocolate();
    }
}

function clientCode (director: Director) {
    const builder = new ConcreteCofe1();
    director.setBuilder(builder);

    console.log('Standard basic cofe:');
    director.buildMinimalProduct();
    builder.getProduct().listParts();

    console.log('Standard full cofe:');
    director.buildFullProduct();
    builder.getProduct().listParts();

    console.log('Custom product:');
    builder.cofeWithMilk();
    builder.cofeWithChocolate();
    builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);