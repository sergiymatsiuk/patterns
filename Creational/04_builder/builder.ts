
  
class CarRental {
    airConditioning: boolean = false
    numberOfDays: number
    color: string

    constructor(public brand: string, public model: string) {}

    addAirConditioning(): CarRental {
        this.airConditioning = true
        return this
    }

    addNumberOfDays(numberOfDays: number): CarRental {
        this.numberOfDays = numberOfDays
        return this
    }

    setColor(color: string): CarRental {
        this.color = color
        return this
    }

}

const car = new CarRental('bmw', 'x5').addAirConditioning().addNumberOfDays(2).setColor('black');

console.log(car)