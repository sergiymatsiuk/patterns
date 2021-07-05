interface Mediator {
    notify(sender : object, event : string) : void ;
}

class MainMediator implements Mediator {
    private referee : Referre;
    private players : Players;

    constructor (referee : Referre, players : Players){
        this.referee = referee;
        this.referee.setMediator(this);
        this.players = players;
        this.players.setMediator(this);
    }

    public notify(sender : object, event : string){
        if (event === 'stop game') {
            console.log('ПОСЕРЕДНИК: Гравці почули команду про зупинку гри!');
            this.players.playersStopGame();
        }

        if (event === 'score goal') {
            console.log('ПОСЕРЕДНИК: Суддя побачив, що забито гол!');
            this.referee.changeScore();
            this.players.playersStopGame();
        }
    }
}

class BaseComponent {
    protected mediator: Mediator;

    constructor(mediator : Mediator = null){
        this.mediator = mediator;
    }

    public setMediator (mediator : Mediator) : void {
        this.mediator = mediator;
    } 
}

class Referre extends BaseComponent {
    public stopGame(): void {
        console.log('Суддя зупинив гру!');
        this.mediator.notify(this, 'stop game');
    }

    public changeScore(): void {
        console.log('Суддя показав на центр поля!');
    }
}

class Players extends BaseComponent {
    public playersStopGame(): void {
        console.log('Гравці зупинилися!');
    }

    public playersScoreGoal(): void {
        console.log('Було забито гол!');
        this.mediator.notify(this, 'score goal');
    }
}

const ref = new Referre();
const pl = new Players();

const mediator = new MainMediator(ref, pl);

ref.stopGame();
// Суддя зупинив гру!
// ПОСЕРЕДНИК: Гравці почули команду про зупинку гри!
// Гравці зупинилися!

pl.playersScoreGoal();
// Було забито гол!
// ПОСЕРЕДНИК: Суддя побачив, що забито гол!
// Суддя показав на центр поля!
// Гравці зупинилися!