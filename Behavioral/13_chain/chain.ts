interface Handler {
    setNext (handler : Handler) : Handler;
    handle (request : string) : string;
}

abstract class AbstractHandler implements Handler {
    private nextHandler : Handler;

    public setNext (handler: Handler) : Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle (request : string) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return null;
    }
}

class USA extends AbstractHandler {
    handle (request : string) : string {
        if (request === 'Washington') {
            return `${request} this is my capital.`
        }
        return super.handle(request);
    }
}

class Germany extends AbstractHandler {
    handle (request : string) : string {
        if (request === 'Berlin') {
            return `${request} this is my capital.`
        }
        return super.handle(request);
    }
}

class Ukraine extends AbstractHandler {
    handle (request: string): string {
        if (request === 'Kiev') {
            return `${request} this is my capital.`;
        }
        return super.handle(request);
    }
}

function clientCode (handler : Handler) {
    const capitals = ['Washington', 'Kiev', 'Berlin', 'Barcelona'];

    for (const capital of capitals){
        console.log(`${capital}?`);

        const result = handler.handle(capital);
        if (result) {
            console.log(`  ${result}`);
        } else {
            console.log(`  ${capital} not the capital.`);
        }
    }
}

const usa = new USA();
const germany = new Germany();
const ukraine = new Ukraine();

usa.setNext(germany).setNext(ukraine);

clientCode(usa);

// Washington?
//   Washington this is my capital.
// Kiev?
//   Kiev this is my capital.
// Berlin?
//   Berlin this is my capital.
// Barcelona?
//   Barcelona not the capital.
