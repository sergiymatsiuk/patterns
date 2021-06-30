interface Army {
    
     show(): string

}

class Soldier implements Army {
    public show() : string {
        return 'Soldier';
    }
}

class Composite implements Army {

    protected children: any [] = [];

    public add(component: Army): void {
        this.children.push(component);
    }

    public show(): string {
        const results = [];
        for (const child of this.children) {
            results.push(child.show());
        }

        return ` Unit ( ${results.join(' + ')} )`;
    }
}

const simple = new Soldier();

console.log(simple.show());
// Soldier


const army = new Composite();

const presidentUnit = new Composite();
presidentUnit.add(new Soldier());
presidentUnit.add(new Soldier());
presidentUnit.add(new Soldier());

const tankUnit = new Composite();
tankUnit.add(new Soldier());
tankUnit.add(new Soldier());

army.add(presidentUnit);
army.add(tankUnit);

console.log(army.show())
// Unit (  Unit ( Soldier + Soldier + Soldier ) +  Unit ( Soldier + Soldier ) )
