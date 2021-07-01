
class Flyweight {
    constructor(public brand: string, public model: string, public color: string) {}
}

class FlyweightFactory {
    flyweights: {} = {}

    checkOfCar(brand: string, model: string, color: string): Flyweight {
        if (!this.flyweights[brand+' '+model]) {
            this.flyweights[brand+' '+model] = new Flyweight(brand, model, color)
        }

        return this.flyweights[brand+' '+model]
    }

    showFlyweights(): void {
        console.log(this.flyweights)
    }
}

const factory = new FlyweightFactory()

class Car {
    flyweight: Flyweight

    constructor  (brand: string, model: string, color: string, price: number, maxSpeed: number) {
        this.flyweight = factory.checkOfCar(brand, model, color)
    }
}

const cars = [
    new Car('BMW', 'X5', 'black', 15000, 220),
    new Car('Audi', 'Q8', 'black', 15000, 220),
    new Car('BMW', 'X5', 'black', 20000, 180),
    new Car('Mercedes', 'GLS350', 'white', 30000, 250),
    new Car('Tesla', 'model X', 'red', 27000, 200),
]

factory.showFlyweights()

// {
//     'BMW X5': Flyweight { brand: 'BMW', model: 'X5', color: 'black' },
//     'Audi Q8': Flyweight { brand: 'Audi', model: 'Q8', color: 'black' },
//     'Mercedes GLS350': Flyweight { brand: 'Mercedes', model: 'GLS350', color: 'white' },
//     'Tesla model X': Flyweight { brand: 'Tesla', model: 'model X', color: 'red' }
// }


