export interface Iterator<T> {
    nextNumber(): T;
    hasNext(): boolean;
}

class SimpleIterator implements Iterator<Number> {
    private collection: Number[];
    private position: number = 0;

    constructor(collection: Number[]) {
        this.collection = collection;
    }

    public nextNumber(): Number {

        const result = this.collection[this.position];
        this.position += 1;
        return result;
    }

    public hasNext(): boolean {
        return this.position < this.collection.length;
    }
}


interface Numbers {
    createIterator(): Iterator<Number>;
}

class NumbersCollection implements Numbers {
    private collection: number[] = [];

    constructor(collection: number[]) {
        this.collection = collection;
    }
    public createIterator(): Iterator<Number> {
        return new SimpleIterator(this.collection);
    }
}

const numberArray = [75, 85, 95, 105, 225, 355, 455],
    numbers: NumbersCollection = new NumbersCollection(numberArray),
    it: SimpleIterator = <SimpleIterator>numbers.createIterator();

while (it.hasNext()) {
    console.log(it.nextNumber());
}

// 75
// 85
// 95
// 105
// 225
// 355
// 455
