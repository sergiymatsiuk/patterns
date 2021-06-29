
class ParentsFacade {
    getGoodMarks(): void {
        new Mother().happy();
        new Father().givesMoney();
    }
    getBadMarks(): void {
        new Mother().cry();
        new Father().withoutMoney();
    }
}

class Mother {
    happy(): void {
        console.log('You best in the world)')
    }
    cry(): void {
        console.log('Today without icecreame!)')
    }
}

class Father {
    givesMoney(): void {
        console.log('20 dollars for you')
    }
    withoutMoney(): void {
        console.log('Week without money!')
    }

}

let firstDayAtSchool = new ParentsFacade().getGoodMarks();
// You best in the world)
// 20 dollars for you

let secondDaysAtSchool = new ParentsFacade().getBadMarks();
// Today without icecreame!)
// Week without money!