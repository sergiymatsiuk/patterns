class Target {
    request(): string {
        return 'I RETURN A LINE FROM CAPITAL LETTERS';
    }
}

class NoAdaptee {
    public specificRequest(): string {
        return 'i return a line from a lowercase letter'
    }
}

class Adapter extends Target {
    private adaptee: NoAdaptee;

    constructor (adaptee: NoAdaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request():string {
        const result = this.adaptee.specificRequest().toUpperCase();
        return `Result with adapter: ${result}`;
    }

}

function clientCode (target: Target) {
    console.log(target.request())
}

const target = new Target();
clientCode(target);

const adaptee = new NoAdaptee();
console.log(`Result without: ${adaptee.specificRequest()}`);

const adapter = new Adapter(adaptee);
clientCode(adapter);


// I RETURN A LINE FROM CAPITAL LETTERS
// Result without: i return a line from a lowercase letter
// Result with adapter: I RETURN A LINE FROM A LOWERCASE LETTER