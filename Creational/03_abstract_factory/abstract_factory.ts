interface Game {

    createGameField(): AbstractField;
    createGameBall(): AbsrtactBall;

}

class Football implements Game {

    public createGameField(): AbstractField {
        return new FootballField();
    }

    public createGameBall(): AbsrtactBall {
        return new FootballBall();
    }
}

class Volleyball implements Game {

    public createGameField(): AbstractField {
        return new VolleyballField();
    }

    public createGameBall(): AbsrtactBall {
        return new VolleyballBall();
    }
}

interface AbstractField {
    createField(): string;
}

class FootballField implements AbstractField {
    public createField(): string {
        return 'Football field created!';
    }
}

class VolleyballField implements AbstractField {
    public createField(): string {
        return 'Volleyball field created!';
    }
}

interface AbsrtactBall {
    createBall(): string;
    anotherCreateBall(collaborator: AbstractField): string;
}

class FootballBall implements AbsrtactBall {

    public createBall(): string {
        return 'Football ball created!';
    }

    public anotherCreateBall(collaborator: AbstractField): string {
        const result = collaborator.createField();
        return `${result}! Now you can play ball there!`;
    }
}

class VolleyballBall implements AbsrtactBall {

    public createBall(): string {
        return 'Volleyball ball created!';
    }

    public anotherCreateBall(collaborator: AbstractField): string {
        const result = collaborator.createField();
        return `${result}! Now you can play ball there!`;
    }
}

function clientCode(factory: Game) {
    const Ball = factory.createGameField();
    const Field = factory.createGameBall();

    console.log(Ball.createField());
    console.log(Field.createBall());
    console.log(Field.anotherCreateBall(Ball));
}


clientCode(new Football());

clientCode(new Volleyball());