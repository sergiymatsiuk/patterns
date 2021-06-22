interface CarPrototype {
    clone();
}

class Car implements CarPrototype {

    constructor(public model: string, public price: number, public color: string) {}

    public clone() : Car {
        return new Car (this.model, this.price, this.color) 
    }
}

const car1 = new Car ('audi', 12000, 'black')

const cloneCar1 = car1.clone();
cloneCar1.color = 'red';

console.log(car1)
console.log(cloneCar1)
