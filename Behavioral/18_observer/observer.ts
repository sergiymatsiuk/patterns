
class MainCompetition  {

    public weight: number;

    private observers: Observer[] = [];

    constructor (weight : number) {
        this.weight = weight;
    }

    public join(observer: Observer): void {
        this.observers.push(observer);
    }

    public attempt(): void {
        console.log(`ВАГА ГАНТЕЛІ ${this.weight}`);
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

}

interface Observer {
    update(subject: MainCompetition): void;
}

class YoungSportsman implements Observer {
    public update(subject: MainCompetition): void {
        if (subject instanceof MainCompetition && subject.weight < 45) {
            console.log('МОЛОДИЙ СПОРТСМЕН: я зможу підняти цю вагу!');
        }
    }
}

class OldSportsman implements Observer {
    public update(subject: MainCompetition): void {
        if (subject instanceof MainCompetition && subject.weight < 55) {
            console.log('ДОСВІДЧЕНИЙ СПОРТСМЕН: я зможу підняти цю вагу!');
        }
    }
}


const competition = new MainCompetition(30);

const young = new YoungSportsman();
competition.join(young);

const old = new OldSportsman();
competition.join(old);

competition.attempt();
// ВАГА ГАНТЕЛІ 30
// МОЛОДИЙ СПОРТСМЕН: я зможу підняти цю вагу!
// ДОСВІДЧЕНИЙ СПОРТСМЕН: я зможу підняти цю вагу!

competition.weight = 50;

competition.attempt();
// ВАГА ГАНТЕЛІ 50
// ДОСВІДЧЕНИЙ СПОРТСМЕН: я зможу підняти цю вагу!


