class SomeString {

    private strategy : Strategy ;

    constructor (strategy : Strategy) {
        this.strategy  = strategy;
    }

    public setStrategy(strategy : Strategy) {
        this.strategy = strategy;
    }

    public doSomeLogic(): void {

        const result = this.strategy.doAlgorithm('Hello World!');
        console.log(result)
       
    }
}

interface Strategy {
    doAlgorithm(data: string ) : string;
}

class UpperCase implements Strategy {
    public doAlgorithm(data: string): string {
        return data.toUpperCase();
    }
}

class LowerCase implements Strategy {
    public doAlgorithm(data: string): string {
        return data.toLowerCase();
    }
}

const context = new SomeString(new UpperCase());
context.doSomeLogic();
// HELLO WORLD!

context.setStrategy(new LowerCase());
context.doSomeLogic();
// hello world!