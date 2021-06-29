  
interface Answer {
    fetch(): void;
  }
  
  class DirectorProxy implements Answer {
    private director: Director;
  
    constructor() {
      this.director = new Director();
    }
  
    fetch(): void {
      console.log('Доброго дня! Я секретар, я вас слухаю!')
      this.director.fetch();
    }
  }
  
  class Director implements Answer {
    fetch(): void {
      console.log('Доброго дня! Я директор, слухаю вас!')
    }
  }
  

  const directorAnswer = new DirectorProxy();
  directorAnswer.fetch();

// Доброго дня! Я секретар, я вас слухаю!
// Доброго дня! Я директор, слухаю вас!